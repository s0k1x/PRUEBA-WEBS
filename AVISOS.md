# Avisos, créditos y licencias

`s0k1x-skill` reúne skills de varios autores bajo un único nombre. Los nombres visibles de las skills (`s0k1x-…`) son de este kit; **el contenido y el código de cada skill siguen siendo de sus autores originales**, que conservan sus derechos y sus licencias. Este archivo existe para cumplir esas licencias (MIT y PolyForm exigen conservar el aviso del autor al redistribuir) y no debe borrarse.

## Qué se cambió respecto a los originales

- Se renombró el campo `name` y las referencias a otras skills dentro de cada `SKILL.md` (por ejemplo `/caveman-commit` pasó a `/s0k1x-breve-commit`).
- **No** se modificó ningún script, referencia, plantilla ni archivo de datos, para no romper su funcionamiento (varios llevan sumas de verificación o rutas escritas a mano).
- Las carpetas de `skills/` se renombraron a `s0k1x-…` (Claude Code nombra las skills de un plugin por su carpeta), **salvo `skills/token-optimizer`**: su código usa esa ruta escrita a mano (comprobaciones de seguridad y hooks que escribe en tu configuración) y renombrarla sin pruebas podría romperlos sin avisar. Por eso esa skill aparece como `s0k1x-skill:token-optimizer`.
- La columna "Carpeta original" de la tabla dice de dónde viene cada una.
- Los comandos de programas externos que mencionan algunas skills (por ejemplo `caveman login`) conservan su nombre real: son comandos de otro programa, no nombres de skill.

## Skills incluidas

| Skill en este kit | Carpeta original | Autor / origen | Licencia |
|---|---|---|---|
| `s0k1x-pulido` | `skills/impeccable` | pbakaus — https://github.com/pbakaus/impeccable | ver repositorio original |
| `s0k1x-movimiento` | `skills/design-motion-principles` | kylezantos — https://github.com/kylezantos/design-motion-principles (basada en técnicas de Emil Kowalski, Jakub Krehel y Jhey Tompkins) | ver repositorio original |
| `s0k1x-estilo` | `skills/design-taste-frontend` | Leonxlnx — https://github.com/Leonxlnx/taste-skill | ver repositorio original |
| `s0k1x-humano` | `skills/humanizer` | blader (Siqi Chen) — https://github.com/blader/humanizer | MIT (`skills/humanizer/LICENSE`) |
| `s0k1x-memoria` | `skills/napkin` | blader — https://github.com/blader/napkin | MIT (`skills/napkin/LICENSE`) |
| `s0k1x-breve`, `s0k1x-breve-ultra` (`skills/ultracave`), `s0k1x-breve-mega` (`skills/megacave`), `s0k1x-breve-commit`, `-comprimir`, `-descubrir`, `-evidencias`, `-explorar`, `-ayuda`, `-aprender`, `-gestionar`, `-optimizar`, `-revisar`, `-configurar`, `-stats`, `s0k1x-equipo`, `s0k1x-investigar`, `s0k1x-construir`, `s0k1x-migrar`, `s0k1x-refactor`, `s0k1x-parche`, `s0k1x-verificar` | `skills/caveman`, `caveman-*`, `cavecrew`, `investigate-first`, `lean-build`, `migration`, `safe-refactor`, `surgical-patch`, `verify-and-stop` | JuliusBrussee — https://github.com/JuliusBrussee/caveman | ver repositorio original |
| `s0k1x-tokens`, `s0k1x-tokens-salida`, `s0k1x-tokens-coach`, `s0k1x-tokens-panel`, `s0k1x-flota`, `s0k1x-retomar` | `skills/token-optimizer`, `token-optimizer-output`, `token-coach`, `token-dashboard`, `fleet-auditor`, `resume-checkpoint` | alexgreensh — https://github.com/alexgreensh/token-optimizer | **PolyForm Noncommercial: no permite uso comercial** |

`s0k1x-skill` (`skills/s0k1x-skill`), los subagentes de `agents/` (una reimplementación propia de los contratos de salida de `s0k1x-equipo`), los mods de `hooks/` y los manifiestos son obra de este kit (ver `LICENSE`).

## Servicio externo

Seis skills de la familia `s0k1x-breve` (`-configurar`, `-descubrir`, `-evidencias`, `-gestionar`, `-optimizar`, `-aprender`) están pensadas para un servicio en la nube de su autor original ("Caveman Cloud"). Pasan el tráfico del proyecto por un gateway externo. Úsalas solo si lo quieres y tras revisar sus condiciones.

## Actualizar una skill

Ejecuta `npx skills add <origen>` en una carpeta aparte, copia la carpeta nueva sobre la de `skills/` y vuelve a aplicar el cambio de nombres (campo `name` y referencias cruzadas).
