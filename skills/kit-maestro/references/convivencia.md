# Convivencia entre skills: casos concretos

Casos donde dos skills se pisan y qué hacer en cada uno.

## Diseño

| Situación | Qué hacer |
|---|---|
| Taste e Impeccable se describen las dos para "landing page" | Taste construye la primera versión; Impeccable entra después para criticar y pulir. Para revisar una web ya hecha, Impeccable va primero. |
| Taste pide fotos reales e Impeccable sugiere ilustraciones | Manda Taste (dirección de arte). |
| Taste quiere un contraste o tamaño que Impeccable marca como inaccesible | Manda Impeccable (la accesibilidad gana siempre). |
| Impeccable `animate` y Motion opinan sobre una animación | Manda Motion. Impeccable solo señala dónde falta o sobra movimiento. |
| Motion quiere un efecto llamativo en una web de clínica dental | Manda Taste: el nivel de movimiento depende del tipo de negocio. |
| Taste `copy.md` y Humanizer | Taste decide qué contar en cada sección y cuánto texto cabe; Humanizer reescribe cómo suena, sin cambiar lo que dice. |
| El comprobador de Taste y la auditoría de Impeccable dan avisos distintos | Se arreglan los dos; si chocan, gana el criterio de la dueña de esa decisión (tabla de SKILL.md). |

## Estilo de respuesta

| Situación | Qué hacer |
|---|---|
| Caveman activo y hay que escribir textos de la web | Los textos se escriben con Humanizer y en el idioma del usuario. Caveman sigue solo para el chat. |
| Caveman activo y hay un aviso de seguridad o una acción irreversible | Se explica en lenguaje normal y completo; luego vuelve caveman. |
| El usuario pide "commit" con caveman activo | `caveman-commit`. Sin caveman, el estilo de commits del repo. |

## Exploración y subagentes

| Situación | Qué hacer |
|---|---|
| Hay que localizar dónde está algo | `cavecrew-investigator` (barato, comprimido). |
| Hay que entender cómo funciona algo y por qué | `Explore` o `caveman-explore`. |
| Edición de 1-2 archivos ya localizados | `cavecrew-builder`; si responde `too-big.`, hazlo en el hilo principal con `lean-build` o `safe-refactor`. |
| Revisión de un diff | `caveman-review` en el hilo o `cavecrew-reviewer` delegado, nunca los dos. |

## Tokens

| Situación | Qué hacer |
|---|---|
| "¿Cuánto llevo gastado?" | `caveman-stats` (sesión actual) o `token-dashboard` (sesión pasada). El panel `/consumo` lo muestra en directo. |
| "El contexto se llena" | `token-optimizer` (auditar y arreglar con aprobación). |
| Varias herramientas de agentes a la vez | `fleet-auditor`. |
| El Vigilante avisa de caché fría | Si el mensaje es corto y no urgente, valora `/compact` o empezar una sesión nueva antes de enviarlo. |

## Memoria

| Situación | Qué hacer |
|---|---|
| Inicio de cualquier sesión | `napkin` lee `.claude/napkin.md` sin anunciarlo. |
| El usuario dice que continúa un trabajo anterior | `resume-checkpoint` además de `napkin`. |
| Aprendo algo útil y repetible | Va a `napkin`, no a CLAUDE.md. |
