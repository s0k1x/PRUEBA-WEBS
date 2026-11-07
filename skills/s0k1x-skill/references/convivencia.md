# Convivencia entre skills: casos concretos

Casos donde dos skills se pisan y qué hacer en cada uno.

## Diseño

| Situación | Qué hacer |
|---|---|
| `s0k1x-estilo` e `s0k1x-pulido` se describen las dos para "landing page" | `s0k1x-estilo` construye la primera versión; `s0k1x-pulido` entra después para criticar y pulir. Para revisar una web ya hecha, `s0k1x-pulido` va primero. |
| `s0k1x-estilo` pide fotos reales e `s0k1x-pulido` sugiere ilustraciones | Manda `s0k1x-estilo` (dirección de arte). |
| `s0k1x-estilo` quiere un contraste o tamaño que `s0k1x-pulido` marca como inaccesible | Manda `s0k1x-pulido` (la accesibilidad gana siempre). |
| `s0k1x-pulido` `animate` y `s0k1x-movimiento` opinan sobre una animación | Manda `s0k1x-movimiento`. `s0k1x-pulido` solo señala dónde falta o sobra movimiento. |
| `s0k1x-movimiento` quiere un efecto llamativo en una web de clínica dental | Manda `s0k1x-estilo`: el nivel de movimiento depende del tipo de negocio. |
| `s0k1x-estilo` `copy.md` y `s0k1x-humano` | `s0k1x-estilo` decide qué contar en cada sección y cuánto texto cabe; `s0k1x-humano` reescribe cómo suena, sin cambiar lo que dice. |
| El comprobador de `s0k1x-estilo` y la auditoría de `s0k1x-pulido` dan avisos distintos | Se arreglan los dos; si chocan, gana el criterio de la dueña de esa decisión (tabla de SKILL.md). |

## Estilo de respuesta

| Situación | Qué hacer |
|---|---|
| `s0k1x-breve` activo y hay que escribir textos de la web | Los textos se escriben con `s0k1x-humano` y en el idioma del usuario. `s0k1x-breve` sigue solo para el chat. |
| `s0k1x-breve` activo y hay un aviso de seguridad o una acción irreversible | Se explica en lenguaje normal y completo; luego vuelve `s0k1x-breve`. |
| El usuario pide "commit" con `s0k1x-breve` activo | `s0k1x-breve-commit`. Sin `s0k1x-breve`, el estilo de commits del repo. |

## Exploración y subagentes

| Situación | Qué hacer |
|---|---|
| Hay que localizar dónde está algo | `s0k1x-equipo-investigador` (barato, comprimido). |
| Hay que entender cómo funciona algo y por qué | `Explore` o `s0k1x-breve-explorar`. |
| Edición de 1-2 archivos ya localizados | `s0k1x-equipo-constructor`; si responde `too-big.`, hazlo en el hilo principal con `s0k1x-construir` o `s0k1x-refactor`. |
| Revisión de un diff | `s0k1x-breve-revisar` en el hilo o `s0k1x-equipo-revisor` delegado, nunca los dos. |

## Tokens

| Situación | Qué hacer |
|---|---|
| "¿Cuánto llevo gastado?" | `s0k1x-breve-stats` (sesión actual) o `s0k1x-tokens-panel` (sesión pasada). El panel `/consumo` lo muestra en directo. |
| "El contexto se llena" | `s0k1x-tokens` (auditar y arreglar con aprobación). |
| Varias herramientas de agentes a la vez | `s0k1x-flota`. |
| El Vigilante avisa de caché fría | Si el mensaje es corto y no urgente, valora `/compact` o empezar una sesión nueva antes de enviarlo. |

## Memoria

| Situación | Qué hacer |
|---|---|
| Inicio de cualquier sesión | `s0k1x-memoria` lee `.claude/s0k1x-memoria.md` sin anunciarlo. |
| El usuario dice que continúa un trabajo anterior | `s0k1x-retomar` además de `s0k1x-memoria`. |
| Aprendo algo útil y repetible | Va a `s0k1x-memoria`, no a CLAUDE.md. |
