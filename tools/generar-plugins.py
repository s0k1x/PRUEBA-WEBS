#!/usr/bin/env python3
"""Genera un plugin por skill en plugins/<nombre>/ y actualiza el marketplace.

Cada plugin individual contiene enlaces simbólicos a las carpetas reales de
skills/ (y de agents/ cuando hace falta), así no se duplican archivos. Al
instalar desde GitHub, Claude Code sustituye cada enlace por una copia real.

Uso, desde la raíz del repositorio:
    python3 tools/generar-plugins.py
"""
import json
import os
import re
import shutil
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS = os.path.join(RAIZ, "skills")
PLUGINS = os.path.join(RAIZ, "plugins")
MARKETPLACE = os.path.join(RAIZ, ".claude-plugin", "marketplace.json")
KIT = os.path.join(RAIZ, ".claude-plugin", "plugin.json")

# La skill coordinadora solo tiene sentido con el kit completo.
SOLO_EN_EL_KIT = {"s0k1x-skill"}

# Skills que necesitan otras carpetas para funcionar.
DEPENDENCIAS_SKILLS = {
    "s0k1x-flota": ["s0k1x-tokens"],          # importa código y precios de s0k1x-tokens
    "s0k1x-retomar": ["s0k1x-tokens"],        # importa measure.py
    "s0k1x-tokens-panel": ["s0k1x-tokens"],   # ejecuta measure.py
    "s0k1x-tokens-coach": ["s0k1x-tokens"],   # ejecuta measure.py
}
DEPENDENCIAS_AGENTES = {
    "s0k1x-equipo": ["s0k1x-equipo-investigador", "s0k1x-equipo-constructor", "s0k1x-equipo-revisor"],
}


def descripcion(skill):
    texto = open(os.path.join(SKILLS, skill, "SKILL.md"), encoding="utf-8").read()
    bloque = texto.split("---")[1]
    m = re.search(r"^description:\s*(>-?|\|)?\s*(.*?)(?=^\S[\w-]*:|\Z)", bloque, re.S | re.M)
    desc = " ".join((m.group(2) if m else "").split()).strip().strip('"')
    if len(desc) > 300:
        corte = desc[:300].rsplit(". ", 1)[0]
        desc = corte if corte.endswith(".") else corte + "."
    return desc


def enlazar(destino, objetivo):
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    os.symlink(os.path.relpath(objetivo, os.path.dirname(destino)), destino)


def main():
    kit = json.load(open(KIT, encoding="utf-8"))
    version = kit["version"]
    autor = kit.get("author", {"name": "s0k1x"})

    if os.path.isdir(PLUGINS):
        shutil.rmtree(PLUGINS)
    os.makedirs(PLUGINS)

    skills = sorted(d for d in os.listdir(SKILLS)
                    if os.path.isfile(os.path.join(SKILLS, d, "SKILL.md")) and d not in SOLO_EN_EL_KIT)
    entradas = []
    for skill in skills:
        base = os.path.join(PLUGINS, skill)
        for s in [skill] + DEPENDENCIAS_SKILLS.get(skill, []):
            enlazar(os.path.join(base, "skills", s), os.path.join(SKILLS, s))
        for a in DEPENDENCIAS_AGENTES.get(skill, []):
            enlazar(os.path.join(base, "agents", a + ".md"), os.path.join(RAIZ, "agents", a + ".md"))
        desc = descripcion(skill)
        os.makedirs(os.path.join(base, ".claude-plugin"))
        manifiesto = {"name": skill, "version": version, "description": desc, "author": autor,
                      "repository": kit.get("repository", "")}
        with open(os.path.join(base, ".claude-plugin", "plugin.json"), "w", encoding="utf-8") as f:
            json.dump(manifiesto, f, indent=2, ensure_ascii=False)
            f.write("\n")
        entradas.append({"name": skill, "source": f"./plugins/{skill}", "description": desc})

    mk = json.load(open(MARKETPLACE, encoding="utf-8"))
    kit_entrada = next(p for p in mk["plugins"] if p["source"] == "./")
    mk["plugins"] = [kit_entrada] + entradas
    with open(MARKETPLACE, "w", encoding="utf-8") as f:
        json.dump(mk, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"{len(entradas)} plugins individuales + el kit completo ({kit_entrada['name']})")


if __name__ == "__main__":
    sys.exit(main())
