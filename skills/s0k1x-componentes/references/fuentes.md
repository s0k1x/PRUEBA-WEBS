# Fuentes de la comunidad

Sirven para estudiar cómo están hechos los buenos componentes y, si la licencia lo permite, para partir de uno real. La columna "Estado" dice qué se comprobó en la propia web (noviembre de 2026) y qué hay que verificar antes de usar.

## Cómo estudiar una pieza

Abre la pieza en su web y fíjate en:

1. **Capas.** Cuántas sombras, bordes y brillos lleva, y de qué color son.
2. **Estados.** Qué pasa al pasar el ratón, al pulsar y con el foco del teclado.
3. **Tiempos.** Cuánto dura cada transición y con qué curva.
4. **La idea.** Cuál es el gesto que la hace memorable.

Después reconstruye la idea con los tokens del proyecto. Copiar el código tal cual solo tiene sentido si la licencia lo permite, y aun así hay que adaptarlo.

## Componentes

| Fuente | Qué ofrece | Cómo se usa | Licencia | Estado |
|---|---|---|---|---|
| 21st.dev | Más de 12.000 componentes de muchos autores: heros, fondos, shaders, botones, tarjetas, chats, navegación… | En React + TypeScript + Tailwind, formato de registro de shadcn. CLI: `npm i -g @21st-dev/cli`, `21st login`, `21st search "pricing table"`, `21st add <autor>/<componente>`. También hay MCP en `https://21st.dev/api/mcp` con clave de API y botón "Copy prompt" para pegar en el agente | Cada componente es de su autor y lleva su licencia. Las demos y vistas previas son de 21st | Comprobado |
| shadcn/ui | Componentes base y sistema de registros | `npx shadcn@latest init` y después `npx shadcn@latest add <nombre, url o ruta>` | Ver la web | CLI comprobado |
| Aceternity UI, Magic UI, Origin UI, Kokonut UI, Kibo UI, ReUI, HextaUI, Geist, 8bitcn | Librerías de componentes React | Ver la web de cada una; muchas se instalan con el CLI de shadcn | Ver la web de cada una | Aparecen en la lista de librerías de 21st.dev; sin comprobar en su propia web |
| Uiverse.io | Elementos de interfaz de la comunidad (botones, interruptores, tarjetas, loaders…) | Ver la web | Ver la página de cada elemento | Sin comprobar: la web bloquea las lecturas automáticas |

**Límites de 21st.dev (comprobado):** el plan gratuito permite copiar dos prompts o comandos de instalación al día; los planes de pago, desde 6 $ al mes con facturación anual, quitan el límite. Sus términos prohíben hacer scraping o recoger datos de forma automática del marketplace: usa el CLI, el MCP o lo que copie el usuario.

## Recursos

Fuentes muy conocidas, sin comprobar desde aquí. Antes de usar cualquier recurso, revisa su licencia en la web oficial y apúntala en `RECURSOS.md`.

| Tipo | Fuentes |
|---|---|
| Iconos | Lucide, Phosphor, Tabler Icons, Heroicons |
| Tipografías | Google Fonts, Fontshare |
| Fotos | Unsplash, Pexels (mejor las fotos reales del negocio) |
| Animaciones | LottieFiles, Rive |
| Color | Realtime Colors, Coolors |
| Inspiración (solo mirar) | Godly, Land-book, Lapa Ninja, Awwwards, One Page Love, Mobbin |

## Reglas

- Nunca escribas de memoria el nombre, el autor o la URL de un componente concreto: búscalo con el CLI o pide al usuario que lo elija.
- Mira la licencia de cada pieza. Si no está clara, no la uses.
- Las galerías de inspiración son para mirar ideas, no para copiar el diseño de otra marca.
- Cada recurso de terceros que se use va a `RECURSOS.md` del proyecto: pieza, fuente, autor, licencia y dónde se usa.
