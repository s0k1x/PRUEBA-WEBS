# Avisos, créditos y licencias

`s0k1x-skill` reúne skills de varios autores bajo un único nombre. Los nombres visibles de las skills (`s0k1x-…`) son de este kit; **el contenido y el código de cada skill siguen siendo de sus autores originales**, que conservan sus derechos y sus licencias. Este archivo existe para cumplir esas licencias (MIT y PolyForm exigen conservar el aviso del autor al redistribuir) y no debe borrarse.

## Qué se cambió respecto a los originales

- Se renombraron las skills, sus carpetas y las referencias entre ellas a `s0k1x-…`, y los nombres de los productos en la prosa de los `.md`.
- En `skills/s0k1x-tokens` se actualizaron las rutas de su propia carpeta dentro del código (antes `skills/token-optimizer/…`) y el comando que muestra su panel. Se comprobó que su análisis da el mismo resultado que el original.
- Para que funcionen también en Codex y con `npx skills`, se **añadieron** las carpetas `./.agents/skills`, `./.claude/skills` y `~/.agents/skills` a la búsqueda de scripts de `s0k1x-tokens`, `s0k1x-tokens-panel`, `s0k1x-tokens-coach`, `s0k1x-flota` y `s0k1x-retomar`, sin quitar ninguna de las originales. Se conservan los metadatos de Codex (`agents/openai.yaml`) con los nombres nuevos.
- Se borró la documentación y el empaquetado de los repos originales que no se usan para funcionar (README, CHANGELOG, manifiestos de otros programas, tests).
- **No** se cambiaron los nombres técnicos que usan programas externos o el propio código: comandos de CLI (`caveman login`, `scripts/impeccable`), variables de entorno (`CAVEMAN_*`, `TOKEN_OPTIMIZER_*`), carpetas de datos (`~/.claude/token-optimizer`), rutas del servidor local del panel y direcciones web de descarga. Cambiarlos rompería las skills o tus datos guardados.
- Las 6 skills de la nube externa (`s0k1x-breve-configurar`, `-descubrir`, `-evidencias`, `-gestionar`, `-optimizar`, `-aprender`) conservan el nombre del programa externo en su texto, porque es el comando que ejecutan.

## Skills incluidas

| Skill en este kit | Nombre original | Autor / origen | Licencia |
|---|---|---|---|
| `s0k1x-pulido` | `impeccable` | pbakaus — https://github.com/pbakaus/impeccable | ver repositorio original |
| `s0k1x-movimiento` | `design-motion-principles` | kylezantos — https://github.com/kylezantos/design-motion-principles (basada en técnicas de Emil Kowalski, Jakub Krehel y Jhey Tompkins) | ver repositorio original |
| `s0k1x-estilo` | `design-taste-frontend` | Leonxlnx — https://github.com/Leonxlnx/taste-skill | ver repositorio original |
| `s0k1x-humano` | `humanizer` | blader (Siqi Chen) — https://github.com/blader/humanizer | MIT (`skills/s0k1x-humano/LICENSE`) |
| `s0k1x-memoria` | `napkin` | blader — https://github.com/blader/napkin | MIT (`skills/s0k1x-memoria/LICENSE`) |
| `s0k1x-breve`, `s0k1x-breve-ultra` (`ultracave`), `s0k1x-breve-mega` (`megacave`), `s0k1x-breve-commit`, `-comprimir`, `-descubrir`, `-evidencias`, `-explorar`, `-ayuda`, `-aprender`, `-gestionar`, `-optimizar`, `-revisar`, `-configurar`, `-stats`, `s0k1x-equipo`, `s0k1x-investigar`, `s0k1x-construir`, `s0k1x-migrar`, `s0k1x-refactor`, `s0k1x-parche`, `s0k1x-verificar` | `caveman`, `caveman-*`, `cavecrew`, `investigate-first`, `lean-build`, `migration`, `safe-refactor`, `surgical-patch`, `verify-and-stop` | JuliusBrussee — https://github.com/JuliusBrussee/caveman | ver repositorio original |
| `s0k1x-tokens`, `s0k1x-tokens-salida`, `s0k1x-tokens-coach`, `s0k1x-tokens-panel`, `s0k1x-flota`, `s0k1x-retomar` | `token-optimizer`, `token-optimizer-output`, `token-coach`, `token-dashboard`, `fleet-auditor`, `resume-checkpoint` | alexgreensh — https://github.com/alexgreensh/token-optimizer | **PolyForm Noncommercial: no permite uso comercial** |

`s0k1x-skill`, `s0k1x-componentes`, el generador `tools/generar-plugins.py` y los plugins individuales de `plugins/`, los subagentes de `agents/` (una reimplementación propia de los contratos de salida de `s0k1x-equipo`), los mods de `hooks/` y los manifiestos son obra de este kit (licencia de uso restringido: ver `LICENSE`). La licencia restringida de `LICENSE` no se aplica a los componentes de terceros de esta tabla, que se rigen por la suya.

## Servicio externo

Seis skills de la familia `s0k1x-breve` (`-configurar`, `-descubrir`, `-evidencias`, `-gestionar`, `-optimizar`, `-aprender`) están pensadas para un servicio en la nube de su autor original ("Caveman Cloud"). Pasan el tráfico del proyecto por un gateway externo. Úsalas solo si lo quieres y tras revisar sus condiciones.

## Actualizar una skill

Ejecuta `npx skills add <origen>` en una carpeta aparte, copia la carpeta nueva sobre la de `skills/` y vuelve a aplicar el cambio de nombres (campo `name` y referencias cruzadas).
