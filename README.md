# kit-completo

Un único plugin de Claude Code que reúne 33 skills, 3 subagentes y 3 mods. La skill **`kit-maestro`** decide cuál usar en cada momento, las encadena y resuelve los choques entre ellas. Cada skill sigue funcionando por separado.

## Qué incluye

| Área | Skills |
|---|---|
| Diseño web | `design-taste-frontend` (Taste), `impeccable`, `design-motion-principles` (animaciones, Emil Kowalski) |
| Escritura | `humanizer` |
| Respuestas escuetas y ahorro | `caveman`, `ultracave`, `megacave`, `caveman-commit`, `caveman-review`, `caveman-explore`, `caveman-stats`, `caveman-compress`, `caveman-help`, `cavecrew` |
| Caveman Cloud (opcional, servicio externo) | `caveman-setup`, `caveman-discover`, `caveman-evidence-review`, `caveman-manage`, `caveman-optimize`, `caveman-learn` |
| Tokens y contexto | `token-optimizer`, `token-optimizer-output`, `token-coach`, `token-dashboard`, `fleet-auditor`, `resume-checkpoint` |
| Ingeniería | `investigate-first`, `surgical-patch`, `lean-build`, `safe-refactor`, `migration`, `verify-and-stop` |
| Memoria | `napkin` |
| Coordinación | `kit-maestro` |

**Subagentes** (`agents/`): `cavecrew-investigator`, `cavecrew-builder` y `cavecrew-reviewer`, que usa la skill `cavecrew`.

**Mods** (`hooks/register.tsx`):
- **Portero**: manda a Haiku los subagentes de tareas fáciles.
- **Vigilante**: avisa cuando la caché se ha enfriado antes de enviar un mensaje largo.
- **Panel**: el comando `/consumo` abre un panel con los tokens por agente.

`skill-creator` no está incluida porque ya viene con Claude.

## Instalación

En Claude Code:

```
/plugin marketplace add s0k1x/prueba-webs
/plugin install kit-completo@kit-completo
```

O en un paso, en Claude Code 2.1.275 o posterior:

```
/plugin install kit-completo --marketplace s0k1x/prueba-webs
```

Para probarlo sin instalarlo, desde una copia local del repo: `claude --plugin-dir .`

## Uso

Pide la tarea con normalidad ("hazme una landing para una peluquería") y `kit-maestro` elige el flujo. También puedes nombrar una skill concreta, por ejemplo `/kit-completo:impeccable`.

Algunas skills necesitan tu permiso explícito: Caveman Cloud y `caveman-compress` envían datos fuera, y los arreglos de `token-optimizer` cambian tu configuración.

## Requisitos

- Los mods necesitan una versión de Claude Code con soporte de mods (`hooks.json` con `modules`). Sin ella, las skills funcionan igual.
- Algunas skills usan Python 3 (`token-optimizer`, `fleet-auditor`, `resume-checkpoint`) o descargan un binario la primera vez (`impeccable`).

## Licencias

Las skills son de sus autores y conservan sus licencias; consulta [THIRD_PARTY.md](THIRD_PARTY.md). `token-optimizer` usa PolyForm Noncommercial, que no permite el uso comercial.
