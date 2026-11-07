---
name: s0k1x-skill
description: Coordinador de s0k1x-skill, en Claude Code o en Codex. Úsala al empezar cualquier tarea en un proyecto con este kit instalado completo, o cuando dudes qué skill usar, para elegir la skill correcta, encadenar varias (diseño web, textos, animaciones, ahorro de tokens, bugs, refactors, migraciones, memoria del repo) y resolver choques entre ellas. También cuando el usuario pida "usa el kit", "usa todas las skills" o "qué skills tienes".
---

# s0k1x-skill

Este kit junta 34 skills (más esta), 3 subagentes y 3 mods, y funciona en **Claude Code**, **Codex**, **Gemini CLI**, **Grok** y otros agentes que admiten skills. Cada skill sigue funcionando sola con su propio `SKILL.md`; esta skill decide **cuál usar, en qué orden y quién manda cuando dos opinan distinto**. No sustituye a ninguna: cuando elijas una, cárgala y sigue sus instrucciones.

Esta skill es para cuando el kit está instalado **completo**. Si solo hay algunas skills sueltas, cada una se usa por su cuenta y esta coordinación no hace falta. Antes de encadenar, mira qué skills están disponibles: si falta alguna del flujo, sáltala y sigue con las demás, sin inventar lo que haría.

## Claude Code y Codex

| | Claude Code | Codex, Gemini CLI, Grok y otros agentes |
|---|---|---|
| Invocar una skill | Se carga sola por su descripción, o con `/s0k1x-skill:<nombre>` (kit completo) o `/<plugin>:<nombre>` (skill suelta) | Se carga sola por su descripción; en Codex también con `$<nombre>`, y en los demás como indique cada agente |
| Dónde están | En la caché de plugins de Claude Code | En `.agents/skills/` (Codex, Gemini, Cursor, Copilot…) o `.grok/skills/` (Grok), del proyecto o de tu carpeta personal |
| Instrucciones del proyecto | `CLAUDE.md` | `AGENTS.md` (o el archivo de instrucciones de cada agente, como `GEMINI.md`) |
| Subagentes `s0k1x-equipo-*` | Sí, vienen con el kit y con `s0k1x-equipo` | No existen: haz ese trabajo en el hilo principal con el mismo formato de salida que describe `s0k1x-equipo` |
| Mods (Portero, Vigilante, `/consumo`) | Sí, con el kit completo | No |
| Memoria del repo | `.claude/s0k1x-memoria.md` | El mismo archivo, así las dos herramientas comparten lo aprendido |

Los nombres de skills, los flujos y las reglas de este documento son los mismos en las dos herramientas. Donde una regla nombra algo exclusivo de Claude Code (subagentes, mods, el subagente `Explore` o el modelo Haiku), en Codex usa el equivalente que tengas o hazlo en el hilo principal.

## Regla de oro

**Una decisión, una dueña.** Cada tipo de decisión tiene una sola skill responsable (tabla de abajo). Las demás pueden aportar, pero si se contradicen gana la dueña. Excepción que gana siempre: accesibilidad, seguridad y lo que pida el usuario.

| Decisión | Dueña | Aporta |
|---|---|---|
| Dirección de arte, estilo, referencias, fotos, originalidad | `s0k1x-estilo` | `s0k1x-pulido` |
| Jerarquía, layout, tipografía, color, responsive, accesibilidad, crítica y pulido | `s0k1x-pulido` | `s0k1x-estilo` |
| Cómo se construye cada pieza (botones, tarjetas, inputs, heros, precios, fondos, iconos, texturas) para que no sea genérica | `s0k1x-componentes` | `s0k1x-estilo` (tokens y fragmentos propios) |
| Cuánto movimiento admite la web (nivel de contención según el tipo de negocio) | `s0k1x-estilo` (`references/motion.md`) | — |
| Cómo se ejecuta cada animación (curvas, duración, hover, microinteracciones) | `s0k1x-movimiento` | `s0k1x-pulido` (no uses su modo `animate` si `s0k1x-movimiento` está disponible) |
| Qué dice cada sección de la web (estructura del copy) | `s0k1x-estilo` (`references/copy.md`) | — |
| Cómo suena el texto que leerá una persona (web, emails, docs) | `s0k1x-humano` | — |
| Cómo respondo en el chat (estilo escueto) | `s0k1x-breve` / `s0k1x-breve-ultra` / `s0k1x-breve-mega`, solo si el usuario lo pide | — |
| Mensajes de commit | `s0k1x-breve-commit` si el usuario lo pide; si no, el formato del repo | — |
| Diagnóstico de fallos | `s0k1x-investigar` | `s0k1x-breve-explorar` |
| Cambios de código | `s0k1x-parche` (pequeño), `s0k1x-construir` (nuevo), `s0k1x-refactor` (reestructurar), `s0k1x-migrar` (transición) | `s0k1x-equipo-constructor` (Claude Code) |
| Revisión de diffs | `s0k1x-breve-revisar` / `s0k1x-equipo-revisor` (Claude Code) | — |
| "¿Está terminado?" | `s0k1x-verificar` | — |
| Gasto de tokens y contexto | `s0k1x-tokens` | `s0k1x-tokens-coach`, `s0k1x-breve-stats`, `s0k1x-flota` |
| Memoria del repo entre sesiones | `s0k1x-memoria` | `s0k1x-retomar` |

## Mapa completo


**Diseño web**
- `s0k1x-estilo`: diseña webs con dirección de arte real, sin aspecto "hecho por IA". Trae referencias, fotos y un comprobador en navegador.
- `s0k1x-pulido`: crítica, auditoría y pulido de interfaces (jerarquía, layout, tipografía, color, accesibilidad, responsive, estados vacíos, DESIGN.md).
- `s0k1x-movimiento`: crea o audita animaciones con criterios de referencia de diseño de movimiento.
- `s0k1x-componentes`: construye cada pieza con oficio (luz, estados, material, detalle tipográfico) y enseña a estudiar y usar componentes de la comunidad (21st.dev, Uiverse, registros de shadcn) respetando su licencia.

**Escritura**
- `s0k1x-humano`: reescribe texto con tono humano y quita los tics de IA.

**Respuestas escuetas y ahorro**
- `s0k1x-breve`: estilo escueto, se queda activo hasta que digas "normal mode". `s0k1x-breve-ultra` y `s0k1x-breve-mega` son más extremos.
- `s0k1x-breve-ayuda`: chuleta de comandos de `s0k1x-breve`.
- `s0k1x-breve-commit`: commits estilo Conventional Commits, mínimos.
- `s0k1x-breve-revisar`: revisión de código, una línea por hallazgo.
- `s0k1x-breve-explorar`: explorador de solo lectura que devuelve citas `path:line`.
- `s0k1x-breve-stats`: tokens de salida y de caché de la sesión.
- `s0k1x-breve-comprimir`: comprime archivos de memoria como CLAUDE.md. **Envía el texto del archivo al proveedor del modelo.**
- `s0k1x-equipo`: decide cuándo delegar en los subagentes `s0k1x-equipo-investigador`, `s0k1x-equipo-constructor` y `s0k1x-equipo-revisor` (incluidos en este kit, carpeta `agents/`; solo en Claude Code).
- Servicio externo (nube): `s0k1x-breve-configurar`, `s0k1x-breve-descubrir`, `s0k1x-breve-evidencias`, `s0k1x-breve-gestionar`, `s0k1x-breve-optimizar`, `s0k1x-breve-aprender`. **Pasan el tráfico LLM del proyecto por un gateway externo**, así que úsalas solo si el usuario lo pide expresamente.

**Tokens y contexto**
- `s0k1x-tokens`: audita el desperdicio de contexto, lo arregla con aprobación y mide el ahorro.
- `s0k1x-tokens-salida`: filtra la salida de comandos capturada.
- `s0k1x-tokens-coach`: consejos para montar un flujo eficiente.
- `s0k1x-tokens-panel`: coste de una sesión pasada y panel.
- `s0k1x-flota`: desperdicio entre varios agentes (Claude Code, Codex…).
- `s0k1x-retomar`: recupera el punto de control de una sesión anterior.

**Ingeniería**
- `s0k1x-investigar`: diagnosticar antes de tocar nada.
- `s0k1x-parche`: arreglo mínimo en la capa responsable.
- `s0k1x-construir`: funcionalidad nueva sin construir de más.
- `s0k1x-refactor`: reestructurar sin cambiar el comportamiento.
- `s0k1x-migrar`: migraciones reversibles.
- `s0k1x-verificar`: comprobar que se cumple lo pedido, sin ampliar el alcance.

**Memoria**
- `s0k1x-memoria`: runbook por repo en `.claude/s0k1x-memoria.md`; se lee al empezar cada sesión.

**Fuera del kit**
- `skill-creator` (Claude Code): viene con Claude (Anthropic) y no se copia aquí. Úsala para crear o mejorar skills de este kit. En Codex, usa su propia herramienta para crear skills si la tiene.

## Flujos combinados

**Web nueva (landing, negocio, tienda, portafolio)**
1. `s0k1x-estilo`: brief, dirección de arte, referencias y primera versión.
2. `s0k1x-componentes`: construye cada pieza con oficio dentro de esa dirección (estados, luz, material, recursos propios).
3. `s0k1x-humano`: repasa todos los textos visibles antes de dar la web por buena.
4. `s0k1x-movimiento`: añade solo el movimiento que tenga propósito.
5. `s0k1x-pulido`: crítica y pulido final (jerarquía, accesibilidad, responsive).
6. `s0k1x-verificar`: comprueba en navegador que cumple lo pedido y para.

**Mejorar una web existente**: `s0k1x-pulido` (crítica) → si el problema es de estilo, `s0k1x-estilo` → si las piezas se ven genéricas, `s0k1x-componentes` → `s0k1x-movimiento` (auditoría de animaciones) → `s0k1x-humano` (textos).

**Bug**: `s0k1x-investigar` → `s0k1x-parche` → `s0k1x-breve-revisar` o `s0k1x-equipo-revisor` → `s0k1x-verificar`.

**Cambio grande**: `s0k1x-construir` o `s0k1x-refactor` (o `s0k1x-migrar`) → revisión → `s0k1x-verificar`.

**Contexto lleno o sesiones caras**: `s0k1x-breve-stats` o `s0k1x-tokens-panel` (medir) → `s0k1x-tokens` (arreglar con aprobación) → `s0k1x-tokens-coach` (hábitos).

**Retomar trabajo**: `s0k1x-memoria` (siempre) → `s0k1x-retomar` si se continúa una sesión anterior.

Más detalle en [references/convivencia.md](references/convivencia.md).

## Reglas de convivencia (lo que evita choques)

1. **`s0k1x-breve` no toca entregables.** Su estilo es solo para mis respuestas en el chat. Los textos de webs, documentos y PRs los escribe `s0k1x-humano`, en el idioma del usuario.
2. **Idioma.** Respondo en el idioma del usuario (aquí, español). `s0k1x-breve` se aplica al estilo, no cambia el idioma.
3. **Diseño en cadena, no en paralelo.** Primero dirección (`s0k1x-estilo`), luego piezas (`s0k1x-componentes`), luego movimiento (`s0k1x-movimiento`), luego pulido (`s0k1x-pulido`). Si `s0k1x-pulido` propone cambiar la identidad visual que fijó `s0k1x-estilo`, solo se acepta por accesibilidad o usabilidad. `s0k1x-movimiento` trabaja dentro del nivel de movimiento que fija `s0k1x-estilo`: en un restaurante o una clínica, microinteracciones discretas; los efectos llamativos quedan para webs de tecnología o juegos.
4. **Un solo sistema de diseño.** Los tokens (colores, tipografías, espaciado) se definen una vez. Si el proyecto ya tiene `DESIGN.md` o `PRODUCT.md` de `s0k1x-pulido`, `s0k1x-estilo` y `s0k1x-movimiento` los respetan en vez de inventar otros.
5. **`s0k1x-memoria` no se duplica.** Lo que guarda `s0k1x-memoria` no se repite en `CLAUDE.md` ni en `AGENTS.md`, ni al revés.
6. **Subagentes.** En Claude Code, para localizar código prefiero `s0k1x-equipo-investigador` (corre en Haiku vía el mod Portero), y para análisis con explicación, `Explore`. En Codex, usa `s0k1x-breve-explorar` en el hilo principal. Si un subagente dice "No match." o "No issues.", lo compruebo una vez antes de creérmelo.
7. **Revisión única.** Para un mismo diff uso una revisión: `s0k1x-breve-revisar` en el hilo principal o `s0k1x-equipo-revisor` delegado, no las dos.

## Requieren permiso explícito del usuario

- Las skills de la nube externa (`s0k1x-breve-configurar`, `s0k1x-breve-descubrir`, `s0k1x-breve-gestionar`, `s0k1x-breve-optimizar`, `s0k1x-breve-aprender`, `s0k1x-breve-evidencias`), porque envía tráfico a un servicio externo.
- `s0k1x-breve-comprimir`, porque envía el archivo al proveedor del modelo.
- Los arreglos de `s0k1x-tokens` y `s0k1x-breve-aprender` que editan la configuración.
- `s0k1x-pulido hooks on`, que instala un hook de detección en el proyecto. El lanzador de `s0k1x-pulido` puede descargar un binario la primera vez; si falla o se bloquea, sigue su modo sin lanzador.

## Mods incluidos (solo Claude Code, kit completo)

- **Portero**: manda a Haiku los subagentes de tareas fáciles (`Explore`, `web-fetch`, `claude-code-guide`, `statusline-setup`, `s0k1x-equipo-investigador`) cuando no tienen modelo fijado.
- **Vigilante**: si pasan más de 5 minutos desde el último turno y el contexto supera los 50.000 tokens, avisa de que el siguiente mensaje se releerá sin caché.
- **Panel**: `/consumo` abre un panel con los tokens por agente.

Los mods necesitan una versión de Claude Code con soporte de mods (`hooks.json` con `modules`). Sin ella, las skills siguen funcionando igual.
