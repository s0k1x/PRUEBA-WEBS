# s0k1x-skill

Un plugin de Claude Code que reúne 35 skills, 3 subagentes y 3 mods. Puedes instalarlo entero o instalar cada skill por separado. La skill **`s0k1x-skill`** decide cuál usar en cada momento, las encadena y resuelve los choques entre ellas. Cada skill sigue funcionando por separado.

## Qué incluye

| Área | Skills |
|---|---|
| Diseño web | `s0k1x-estilo`, `s0k1x-componentes` (piezas con oficio, no genéricas), `s0k1x-pulido`, `s0k1x-movimiento` (animaciones) |
| Escritura | `s0k1x-humano` |
| Respuestas escuetas y ahorro | `s0k1x-breve`, `s0k1x-breve-ultra`, `s0k1x-breve-mega`, `s0k1x-breve-commit`, `s0k1x-breve-revisar`, `s0k1x-breve-explorar`, `s0k1x-breve-stats`, `s0k1x-breve-comprimir`, `s0k1x-breve-ayuda`, `s0k1x-equipo` |
| Nube externa (opcional, servicio de terceros) | `s0k1x-breve-configurar`, `s0k1x-breve-descubrir`, `s0k1x-breve-evidencias`, `s0k1x-breve-gestionar`, `s0k1x-breve-optimizar`, `s0k1x-breve-aprender` |
| Tokens y contexto | `s0k1x-tokens`, `s0k1x-tokens-salida`, `s0k1x-tokens-coach`, `s0k1x-tokens-panel`, `s0k1x-flota`, `s0k1x-retomar` |
| Ingeniería | `s0k1x-investigar`, `s0k1x-parche`, `s0k1x-construir`, `s0k1x-refactor`, `s0k1x-migrar`, `s0k1x-verificar` |
| Memoria | `s0k1x-memoria` |
| Coordinación | `s0k1x-skill` |

**Subagentes** (`agents/`): `s0k1x-equipo-investigador`, `s0k1x-equipo-constructor` y `s0k1x-equipo-revisor`, que usa la skill `s0k1x-equipo`.

**Mods** (`hooks/register.tsx`):
- **Portero**: manda a Haiku los subagentes de tareas fáciles.
- **Vigilante**: avisa cuando la caché se ha enfriado antes de enviar un mensaje largo.
- **Panel**: el comando `/consumo` abre un panel con los tokens por agente.

`skill-creator` no está incluida porque ya viene con Claude.

## Instalación

En Claude Code:

```
/plugin marketplace add s0k1x/prueba-webs
/plugin install s0k1x-skill@s0k1x-skill
```

O en un paso, en Claude Code 2.1.275 o posterior:

```
/plugin install s0k1x-skill --marketplace s0k1x/prueba-webs
```

### Instalar solo una skill

Después de añadir el marketplace, instala la skill que quieras por su nombre:

```
/plugin install s0k1x-componentes@s0k1x-skill
/plugin install s0k1x-pulido@s0k1x-skill
```

Cada skill es un plugin propio y trae lo que necesita para funcionar: `s0k1x-flota`, `s0k1x-retomar`, `s0k1x-tokens-panel` y `s0k1x-tokens-coach` incluyen `s0k1x-tokens`, y `s0k1x-equipo` incluye sus 3 subagentes. La skill coordinadora `s0k1x-skill` y los mods solo vienen con el kit completo.

Instala **el kit completo o skills sueltas, no las dos cosas**: si no, la misma skill aparece dos veces con nombres distintos.

## Descarga

```
git clone https://github.com/s0k1x/prueba-webs.git
```

O descarga el [ZIP](https://github.com/s0k1x/prueba-webs/archive/refs/heads/main.zip). Para probarlo sin instalarlo, desde la carpeta descargada: `claude --plugin-dir .`

## Web

La página del kit está en [`docs/index.html`](docs/index.html). Para publicarla, activa GitHub Pages en *Settings → Pages* con la rama `main` y la carpeta `/docs`.

## Uso

Pide la tarea con normalidad ("hazme una landing para una peluquería") y `s0k1x-skill` elige el flujo. También puedes nombrar una skill concreta, por ejemplo `/s0k1x-skill:s0k1x-pulido`.

Algunas skills necesitan tu permiso explícito: las skills de la nube externa y `s0k1x-breve-comprimir` envían datos fuera, y los arreglos de `s0k1x-tokens` cambian tu configuración.

## Requisitos

- Los mods necesitan una versión de Claude Code con soporte de mods (`hooks.json` con `modules`). Sin ella, las skills funcionan igual.
- Algunas skills usan Python 3 (`s0k1x-tokens`, `s0k1x-flota`, `s0k1x-retomar`) o descargan un binario la primera vez (`s0k1x-pulido`).

## Licencia

**Uso restringido.** Puedes instalar y usar `s0k1x-skill` tal cual. Está prohibido modificarlo, crear versiones derivadas, redistribuirlo o publicarlo como propio sin permiso escrito de s0k1x. Los términos completos están en [LICENSE](LICENSE).

Las skills de otros autores incluidas en el kit conservan sus propias licencias, indicadas en [AVISOS.md](AVISOS.md). `s0k1x-tokens` y sus skills hermanas usan PolyForm Noncommercial, que no permite el uso comercial.
