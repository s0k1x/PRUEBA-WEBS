# Componentes de terceros

Las carpetas de `skills/` se copiaron sin cambios desde sus repositorios originales con `npx skills add`, salvo `kit-maestro`, que es propia. Cada skill conserva la licencia de su autor.

| Skills | Origen | Licencia |
|---|---|---|
| `impeccable` | https://github.com/pbakaus/impeccable | ver el repositorio original |
| `design-motion-principles` | https://github.com/kylezantos/design-motion-principles | ver el repositorio original |
| `design-taste-frontend` | https://github.com/Leonxlnx/taste-skill | ver el repositorio original |
| `humanizer` | https://github.com/blader/humanizer | MIT (`skills/humanizer/LICENSE`) |
| `napkin` | https://github.com/blader/napkin | MIT (`skills/napkin/LICENSE`) |
| `caveman`, `ultracave`, `megacave`, `cavecrew`, `caveman-*`, `investigate-first`, `lean-build`, `migration`, `safe-refactor`, `surgical-patch`, `verify-and-stop` | https://github.com/JuliusBrussee/caveman | ver el repositorio original |
| `token-optimizer`, `token-optimizer-output`, `token-coach`, `token-dashboard`, `fleet-auditor`, `resume-checkpoint` | https://github.com/alexgreensh/token-optimizer | PolyForm Noncommercial (no comercial) |

Los subagentes de `agents/` son una reimplementación propia de los contratos de salida que describe `skills/cavecrew/SKILL.md`.

Para actualizar una skill, vuelve a ejecutar `npx skills add <origen>` en una carpeta aparte y copia la carpeta nueva sobre la de `skills/`.
