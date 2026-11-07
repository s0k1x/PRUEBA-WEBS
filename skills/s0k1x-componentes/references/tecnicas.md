# Técnicas

Recetas de CSS para dar luz, material y respuesta a las piezas. Todas usan variables, así que se adaptan a los tokens del proyecto: cambia los nombres de las variables por los que fije `s0k1x-estilo`.

## 0. Tokens de partida

```css
:root {
  --bg: oklch(98% 0.01 85);          /* fondo con un punto de calor, no blanco puro */
  --surface: oklch(100% 0 0);
  --ink: oklch(22% 0.02 60);          /* texto: casi negro con tinte, no #000 */
  --muted: oklch(52% 0.02 60);
  --accent: oklch(58% 0.15 35);
  --line: color-mix(in oklch, var(--ink) 12%, transparent);
  --radius-s: 8px;  --radius-m: 14px;  --radius-l: 22px;   /* jerarquía de radios */
  --ease-out: cubic-bezier(.2, .8, .2, 1);
  --dur-fast: 120ms; --dur: 220ms;
}
```

`color-mix()` y `oklch()` permiten derivar bordes, sombras y estados a partir de pocos colores, sin inventar hex nuevos.

## 1. Sombras en capas, con color

Una sombra realista es la suma de una sombra corta y nítida (contacto) y otra larga y difusa (ambiente), teñidas con el color del texto o del fondo, nunca negro puro.

```css
:root {
  --shadow-1: 0 1px 1px color-mix(in oklch, var(--ink) 6%, transparent),
              0 2px 6px color-mix(in oklch, var(--ink) 6%, transparent);
  --shadow-2: 0 1px 2px color-mix(in oklch, var(--ink) 8%, transparent),
              0 8px 24px -6px color-mix(in oklch, var(--ink) 14%, transparent);
  --shadow-3: 0 2px 4px color-mix(in oklch, var(--ink) 8%, transparent),
              0 24px 48px -12px color-mix(in oklch, var(--ink) 22%, transparent);
}
```

Usa `--shadow-1` en elementos a ras, `--shadow-2` en tarjetas y `--shadow-3` solo en lo que flota (menús, diálogos).

## 2. Brillo interior (la luz viene de arriba)

```css
.pieza {
  box-shadow:
    inset 0 1px 0 color-mix(in oklch, white 55%, transparent),   /* filo de luz arriba */
    inset 0 -1px 0 color-mix(in oklch, var(--ink) 10%, transparent), /* sombra abajo */
    var(--shadow-1);
}
```

En fondos oscuros baja el blanco al 12–18 %.

## 3. Borde degradado

```css
.borde-degradado {
  border: 1px solid transparent;
  background:
    linear-gradient(var(--surface), var(--surface)) padding-box,
    linear-gradient(160deg,
      color-mix(in oklch, var(--accent) 60%, white),
      color-mix(in oklch, var(--ink) 10%, transparent) 45%) border-box;
  border-radius: var(--radius-m);
}
```

## 4. Borde que sigue al cursor (spotlight)

```css
.spot {
  --x: 50%; --y: 50%;
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  background: var(--surface);
}
.spot::before {
  content: "";
  position: absolute; inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: radial-gradient(240px circle at var(--x) var(--y),
              var(--accent), transparent 60%);
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  opacity: 0;
  transition: opacity var(--dur) var(--ease-out);
  pointer-events: none;
}
.spot:hover::before { opacity: 1; }
```

```js
document.querySelectorAll('.spot').forEach(el => {
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  });
});
```

Úsalo en una sola familia de tarjetas por página: es un gesto memorable, no un relleno.

## 5. Grano y textura

Un poco de ruido quita el aspecto de plástico a fondos planos y degradados.

```css
.grano { position: relative; isolation: isolate; }
.grano::after {
  content: "";
  position: absolute; inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: .08;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

Sube la opacidad a .12 para papel (panadería, restaurante) y bájala a .04 en webs limpias (clínica, abogados).

## 6. Cristal (solo con algo detrás)

```css
.cristal {
  background: color-mix(in oklch, var(--surface) 62%, transparent);
  backdrop-filter: blur(14px) saturate(150%);
  border: 1px solid color-mix(in oklch, white 40%, transparent);
}
@supports not (backdrop-filter: blur(1px)) {
  .cristal { background: var(--surface); }
}
```

Solo tiene sentido sobre una foto, un degradado o contenido que se mueve detrás. Sobre un fondo plano no se ve nada y parece un error.

## 7. Fondos propios

```css
/* Degradado en malla: varias manchas en vez de un degradado lineal */
.malla {
  background:
    radial-gradient(60% 50% at 15% 20%, color-mix(in oklch, var(--accent) 35%, transparent), transparent 70%),
    radial-gradient(50% 60% at 85% 30%, color-mix(in oklch, var(--accent) 18%, white), transparent 70%),
    var(--bg);
}
/* Puntos */
.puntos {
  background-image: radial-gradient(color-mix(in oklch, var(--ink) 18%, transparent) 1px, transparent 1px);
  background-size: 20px 20px;
}
/* Rejilla que se desvanece: en un pseudo-elemento, para que la máscara no corte el contenido */
.rejilla { position: relative; isolation: isolate; }
.rejilla::before {
  content: "";
  position: absolute; inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
}
```

Regla general: las máscaras y los filtros se aplican a todo el elemento y a sus hijos. Si solo afectan al fondo, ponlos en un `::before` o `::after`.

## 8. Estados

```css
.boton { transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background-color var(--dur) var(--ease-out); }
.boton:hover { background-color: color-mix(in oklch, var(--accent) 88%, black); }
.boton:active { transform: translateY(1px); box-shadow: inset 0 1px 2px color-mix(in oklch, black 25%, transparent); }
.boton:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.boton:disabled, .boton[aria-disabled="true"] { opacity: .5; cursor: not-allowed; }
.boton[aria-busy="true"] { color: transparent; position: relative; }   /* el ancho no cambia al cargar */
```

`:has()` permite que el contenedor reaccione a su contenido sin JavaScript:

```css
.opcion:has(input:checked) { border-color: var(--accent); background: color-mix(in oklch, var(--accent) 8%, var(--surface)); }
.campo:has(input:user-invalid) .ayuda { color: oklch(55% 0.18 25); }
```

## 9. Borde animado con `@property`

```css
@property --ang { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
.destacado {
  border: 1.5px solid transparent;
  background:
    linear-gradient(var(--surface), var(--surface)) padding-box,
    conic-gradient(from var(--ang), var(--accent), transparent 30%, var(--accent)) border-box;
  animation: girar 6s linear infinite;
}
@keyframes girar { to { --ang: 360deg; } }
@media (prefers-reduced-motion: reduce) { .destacado { animation: none; } }
```

Para una sola pieza destacada (el plan recomendado, la reserva principal). Nunca en varias a la vez.

## 10. Tipografía

```css
h1, h2 { text-wrap: balance; letter-spacing: -0.02em; line-height: 1.05; }
p { text-wrap: pretty; max-width: 65ch; }
.precio, .dato { font-variant-numeric: tabular-nums; }
.rotulo { font-size: .75rem; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); }
```

Cuanto más grande el texto, más negativo el interletraje; cuanto más pequeño y en mayúsculas, más positivo.

## 11. Carga y aparición

```css
.esqueleto {
  background: linear-gradient(90deg, var(--line) 0 40%, color-mix(in oklch, var(--line) 40%, transparent) 50%, var(--line) 60% 100%);
  background-size: 300% 100%;
  animation: brillo 1.4s ease-in-out infinite;
  border-radius: var(--radius-s);
}
@keyframes brillo { from { background-position: 100% 0; } to { background-position: 0 0; } }

/* Aparición al hacer scroll solo donde el navegador lo soporta */
@supports (animation-timeline: view()) {
  .aparece { animation: subir linear both; animation-timeline: view(); animation-range: entry 0% entry 40%; }
  @keyframes subir { from { opacity: 0; translate: 0 16px; } }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
```

## 12. Iconos

- Un solo set por web, el mismo grosor de trazo (1.5 o 2) y el mismo tamaño base.
- SVG en línea con `stroke="currentColor"` para que hereden el color y los estados.
- Iconos decorativos con `aria-hidden="true"`; iconos que actúan como botón con `aria-label`.
- Para piezas de marca (sellos, dibujos del local, la silueta de un producto) mejor un SVG propio sencillo que un icono genérico.
