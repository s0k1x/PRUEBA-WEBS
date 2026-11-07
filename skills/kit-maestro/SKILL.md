---
name: kit-maestro
description: Coordinador del kit-completo. Úsala al empezar cualquier tarea en un proyecto con este kit, o cuando dudes qué skill usar, para elegir la skill correcta, encadenar varias (diseño web, textos, animaciones, ahorro de tokens, bugs, refactors, migraciones, memoria del repo) y resolver choques entre ellas. También cuando el usuario pida "usa el kit", "usa todas las skills" o "qué skills tienes".
---

# Kit maestro

Este kit junta 33 skills, 3 subagentes y 3 mods. Cada skill sigue funcionando sola con su propio `SKILL.md`; esta skill decide **cuál usar, en qué orden y quién manda cuando dos opinan distinto**. No sustituye a ninguna: cuando elijas una, cárgala y sigue sus instrucciones.

## Regla de oro

**Una decisión, una dueña.** Cada tipo de decisión tiene una sola skill responsable (tabla de abajo). Las demás pueden aportar, pero si se contradicen gana la dueña. Excepción que gana siempre: accesibilidad, seguridad y lo que pida el usuario.

| Decisión | Dueña | Aporta |
|---|---|---|
| Dirección de arte, estilo, referencias, fotos, originalidad | `design-taste-frontend` | `impeccable` |
| Jerarquía, layout, tipografía, color, responsive, accesibilidad, crítica y pulido | `impeccable` | `design-taste-frontend` |
| Cuánto movimiento admite la web (nivel de contención según el tipo de negocio) | `design-taste-frontend` (`references/motion.md`) | — |
| Cómo se ejecuta cada animación (curvas, duración, hover, microinteracciones) | `design-motion-principles` | `impeccable` (no uses su modo `animate` si Motion está disponible) |
| Qué dice cada sección de la web (estructura del copy) | `design-taste-frontend` (`references/copy.md`) | — |
| Cómo suena el texto que leerá una persona (web, emails, docs) | `humanizer` | — |
| Cómo respondo en el chat (estilo escueto) | `caveman` / `ultracave` / `megacave`, solo si el usuario lo pide | — |
| Mensajes de commit | `caveman-commit` si el usuario lo pide; si no, el formato del repo | — |
| Diagnóstico de fallos | `investigate-first` | `caveman-explore` |
| Cambios de código | `surgical-patch` (pequeño), `lean-build` (nuevo), `safe-refactor` (reestructurar), `migration` (transición) | `cavecrew-builder` |
| Revisión de diffs | `caveman-review` / `cavecrew-reviewer` | — |
| "¿Está terminado?" | `verify-and-stop` | — |
| Gasto de tokens y contexto | `token-optimizer` | `token-coach`, `caveman-stats`, `fleet-auditor` |
| Memoria del repo entre sesiones | `napkin` | `resume-checkpoint` |

## Mapa completo

**Diseño web**
- `design-taste-frontend`: diseña webs con dirección de arte real, sin aspecto "hecho por IA". Trae referencias, fotos y un comprobador en navegador.
- `impeccable`: crítica, auditoría y pulido de interfaces (jerarquía, layout, tipografía, color, accesibilidad, responsive, estados vacíos, DESIGN.md).
- `design-motion-principles`: crea o audita animaciones con los criterios de Emil Kowalski, Jakub Krehel y Jhey Tompkins.

**Escritura**
- `humanizer`: reescribe texto con tono humano y quita los tics de IA.

**Respuestas escuetas y ahorro**
- `caveman`: estilo escueto, se queda activo hasta "stop caveman" o "normal mode". `ultracave` y `megacave` son más extremos.
- `caveman-help`: chuleta de comandos de caveman.
- `caveman-commit`: commits estilo Conventional Commits, mínimos.
- `caveman-review`: revisión de código, una línea por hallazgo.
- `caveman-explore`: explorador de solo lectura que devuelve citas `path:line`.
- `caveman-stats`: tokens de salida y de caché de la sesión.
- `caveman-compress`: comprime archivos de memoria como CLAUDE.md. **Envía el texto del archivo al proveedor del modelo.**
- `cavecrew`: decide cuándo delegar en los subagentes `cavecrew-investigator`, `cavecrew-builder` y `cavecrew-reviewer` (incluidos en este kit, carpeta `agents/`).
- Caveman Cloud: `caveman-setup`, `caveman-discover`, `caveman-evidence-review`, `caveman-manage`, `caveman-optimize`, `caveman-learn`. **Pasan el tráfico LLM del proyecto por un gateway externo**, así que úsalas solo si el usuario lo pide expresamente.

**Tokens y contexto**
- `token-optimizer`: audita el desperdicio de contexto, lo arregla con aprobación y mide el ahorro.
- `token-optimizer-output`: filtra la salida de comandos capturada.
- `token-coach`: consejos para montar un flujo eficiente.
- `token-dashboard`: coste de una sesión pasada y panel.
- `fleet-auditor`: desperdicio entre varios agentes (Claude Code, Codex…).
- `resume-checkpoint`: recupera el punto de control de una sesión anterior.

**Ingeniería**
- `investigate-first`: diagnosticar antes de tocar nada.
- `surgical-patch`: arreglo mínimo en la capa responsable.
- `lean-build`: funcionalidad nueva sin construir de más.
- `safe-refactor`: reestructurar sin cambiar el comportamiento.
- `migration`: migraciones reversibles.
- `verify-and-stop`: comprobar que se cumple lo pedido, sin ampliar el alcance.

**Memoria**
- `napkin`: runbook por repo en `.claude/napkin.md`; se lee al empezar cada sesión.

**Fuera del kit**
- `skill-creator`: viene con Claude (Anthropic) y no se copia aquí. Úsala para crear o mejorar skills de este kit.

## Flujos combinados

**Web nueva (landing, negocio, tienda, portafolio)**
1. `design-taste-frontend`: brief, dirección de arte, referencias y primera versión.
2. `humanizer`: repasa todos los textos visibles antes de dar la web por buena.
3. `design-motion-principles`: añade solo el movimiento que tenga propósito.
4. `impeccable`: crítica y pulido final (jerarquía, accesibilidad, responsive).
5. `verify-and-stop`: comprueba en navegador que cumple lo pedido y para.

**Mejorar una web existente**: `impeccable` (crítica) → si el problema es de estilo, `design-taste-frontend` → `design-motion-principles` (auditoría de animaciones) → `humanizer` (textos).

**Bug**: `investigate-first` → `surgical-patch` → `caveman-review` o `cavecrew-reviewer` → `verify-and-stop`.

**Cambio grande**: `lean-build` o `safe-refactor` (o `migration`) → revisión → `verify-and-stop`.

**Contexto lleno o sesiones caras**: `caveman-stats` o `token-dashboard` (medir) → `token-optimizer` (arreglar con aprobación) → `token-coach` (hábitos).

**Retomar trabajo**: `napkin` (siempre) → `resume-checkpoint` si se continúa una sesión anterior.

Más detalle en [references/convivencia.md](references/convivencia.md).

## Reglas de convivencia (lo que evita choques)

1. **Caveman no toca entregables.** Su estilo es solo para mis respuestas en el chat. Los textos de webs, documentos y PRs los escribe `humanizer`, en el idioma del usuario.
2. **Idioma.** Respondo en el idioma del usuario (aquí, español). Caveman se aplica al estilo, no cambia el idioma.
3. **Diseño en cadena, no en paralelo.** Primero dirección (Taste), luego movimiento (Motion), luego pulido (Impeccable). Si Impeccable propone cambiar la identidad visual que fijó Taste, solo se acepta por accesibilidad o usabilidad. Motion trabaja dentro del nivel de movimiento que fija Taste: en un restaurante o una clínica, microinteracciones discretas; los efectos llamativos quedan para webs de tecnología o juegos.
4. **Un solo sistema de diseño.** Los tokens (colores, tipografías, espaciado) se definen una vez. Si el proyecto ya tiene `DESIGN.md` o `PRODUCT.md` de `impeccable`, Taste y Motion los respetan en vez de inventar otros.
5. **Napkin no se duplica.** Lo que guarda `napkin` no se repite en CLAUDE.md, ni al revés.
6. **Subagentes.** Para localizar código, prefiero `cavecrew-investigator` (corre en Haiku vía el mod Portero). Para análisis con explicación, `Explore`. Si un subagente dice "No match." o "No issues.", lo compruebo una vez antes de creérmelo.
7. **Revisión única.** Para un mismo diff uso una revisión: `caveman-review` en el hilo principal o `cavecrew-reviewer` delegado, no las dos.

## Requieren permiso explícito del usuario

- Caveman Cloud (`caveman-setup`, `-discover`, `-manage`, `-optimize`, `-learn`, `-evidence-review`), porque envía tráfico a un servicio externo.
- `caveman-compress`, porque envía el archivo al proveedor del modelo.
- Los arreglos de `token-optimizer` y `caveman-learn` que editan la configuración.
- `impeccable hooks on`, que instala un hook de detección en el proyecto. El lanzador de `impeccable` puede descargar un binario la primera vez; si falla o se bloquea, sigue su modo sin lanzador.

## Mods incluidos (hooks del plugin)

- **Portero**: manda a Haiku los subagentes de tareas fáciles (`Explore`, `web-fetch`, `claude-code-guide`, `statusline-setup`, `cavecrew-investigator`) cuando no tienen modelo fijado.
- **Vigilante**: si pasan más de 5 minutos desde el último turno y el contexto supera los 50.000 tokens, avisa de que el siguiente mensaje se releerá sin caché.
- **Panel**: `/consumo` abre un panel con los tokens por agente.

Los mods necesitan una versión de Claude Code con soporte de mods (`hooks.json` con `modules`). Sin ella, las skills siguen funcionando igual.
