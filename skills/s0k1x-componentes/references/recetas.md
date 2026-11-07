# Recetas por pieza

Para cada pieza: qué la hace genérica, qué la hace tener oficio y las claves para construirla. Las técnicas citadas (§) están en [tecnicas.md](tecnicas.md).

## Botón

- **Genérico:** rectángulo azul con `rounded-lg`, sin estado pulsado y con el foco quitado.
- **Con oficio:** una jerarquía clara (principal, secundario, terciario) y la sensación física de pulsar.
- **Claves:**
  - Principal con fondo de acento, brillo interior (§2), sombra corta (§1) y hundimiento al pulsar (§8).
  - Secundario con borde de línea y fondo de superficie; terciario solo texto con subrayado al pasar.
  - Altura mínima de 44 px y relleno horizontal de 1,5 a 2 veces el vertical.
  - Un icono, si lo lleva, a la derecha para acciones de avance ("Reservar →") y a la izquierda para acciones con objeto ("⤓ Descargar").
  - El estado de carga mantiene el ancho (§8).

```html
<button class="btn btn-principal" type="button">Reservar cita</button>
```

```css
.btn { min-height: 44px; padding: 0 1.25rem; border-radius: var(--radius-s); font: inherit; font-size: .95rem; font-weight: 600; line-height: 1; border: 0; cursor: pointer; }
.btn-principal {
  color: white;
  background: var(--accent);
  box-shadow: inset 0 1px 0 color-mix(in oklch, white 35%, transparent),
              0 1px 2px color-mix(in oklch, var(--accent) 40%, black),
              0 6px 16px -6px color-mix(in oklch, var(--accent) 70%, transparent);
}
```

## Tarjeta

- **Genérico:** tres tarjetas iguales con icono, título y dos líneas, todas con la misma sombra.
- **Con oficio:** una tarjeta que cuenta algo concreto y una rejilla con ritmo.
- **Claves:**
  - Varía el tamaño: una tarjeta grande destacada y las demás normales, o una rejilla tipo *bento* con 2 o 3 tamaños.
  - Usa imagen o dato real (un precio, una cifra, una foto del trabajo) en vez de un icono de relleno.
  - Borde de línea más una sombra baja (§1); el hover sube la elevación un nivel, o usa *spotlight* (§4) en una sola familia de tarjetas.
  - Si toda la tarjeta es un enlace, el área clicable es la tarjeta entera, pero el foco se ve en la tarjeta (`:has(a:focus-visible)`).

## Input y formulario

- **Genérico:** caja gris con placeholder como única etiqueta y sin estado de error.
- **Con oficio:** etiqueta visible, ayuda, error claro y foco que se nota.
- **Claves:**
  - Etiqueta encima, siempre visible; el placeholder solo como ejemplo.
  - Borde de línea; el foco cambia el borde al acento y añade un halo suave (`box-shadow: 0 0 0 4px color-mix(in oklch, var(--accent) 20%, transparent)`).
  - Error con `:user-invalid` (§8), para que no aparezca antes de que el usuario escriba, con el mensaje debajo y `aria-describedby`.
  - Tamaño de letra de 16 px o más en móvil, para que el iPhone no haga zoom.

## Etiqueta, insignia y rótulo

- **Genérico:** pastilla gris con texto en minúscula.
- **Con oficio:** un rótulo pequeño en mayúsculas con interletraje (§10), o una insignia con punto de color de estado.
- **Claves:** fondo con `color-mix` del color del estado al 12 % y texto del mismo color oscurecido. Así se ven siempre a juego.

## Navegación

- **Genérico:** logo a la izquierda, cinco enlaces centrados y un botón a la derecha, sobre blanco.
- **Con oficio:** la navegación como una pieza con presencia propia.
- **Claves:**
  - Barra flotante con cristal (§6) solo si pasa por encima de una foto o un hero con color. Si no, fondo sólido con una línea inferior.
  - El enlace activo se marca con algo más que el color: un subrayado, un punto o un fondo.
  - En móvil, un menú a pantalla completa o una hoja inferior con objetivos grandes, en lugar de una lista pequeña.
  - Un solo botón de acción principal, el mismo que en el hero.

## Hero

- **Genérico:** titular centrado, subtítulo y dos botones sobre un degradado morado.
- **Con oficio:** el hero enseña el negocio de verdad y tiene una idea.
- **Claves:**
  - Composición asimétrica: texto a un lado y foto o pieza visual al otro, o una foto a sangre con el texto encima y buen contraste.
  - Titular corto con `text-wrap: balance` (§10) y una sola acción principal; la secundaria, como enlace.
  - Un fondo propio (§7) o un material (§5) que encaje con el negocio, nunca un degradado de plantilla.
  - Una prueba concreta cerca de la acción: valoración, número de clientes, horario o ubicación.

## Precios

- **Genérico:** tres columnas iguales con una lista de ticks y el del medio con un borde azul.
- **Con oficio:** precios fáciles de comparar y un plan recomendado que destaca con motivo.
- **Claves:**
  - Números tabulares (§10) y el precio como el elemento más grande de cada tarjeta.
  - El plan recomendado se diferencia con más elevación o un borde animado (§9), y con una frase que diga por qué se recomienda.
  - Las diferencias entre planes están alineadas en filas, para que se comparen de un vistazo.

## Testimonios y reseñas

- **Genérico:** tres citas con comillas gigantes y avatares de stock.
- **Con oficio:** reseñas que parecen reales porque lo son.
- **Claves:** nombre y contexto reales (servicio, fecha, origen de la reseña), estrellas solo si vienen de una fuente real, y una sola cita grande destacada con las demás más pequeñas. Nunca te inventes reseñas.

## Galería

- **Genérico:** rejilla de cuadrados con fotos recortadas iguales.
- **Con oficio:** ritmo de tamaños y fotos del negocio.
- **Claves:** rejilla con 2 o 3 proporciones, `aspect-ratio` fijo para que no salte al cargar, `loading="lazy"` y `alt` descriptivo. Al abrir una foto, transición suave del tamaño pequeño al grande, y cierre con Escape.

## Pie de página

- **Genérico:** cuatro columnas de enlaces grises.
- **Con oficio:** un cierre útil con personalidad.
- **Claves:** lo que el cliente busca al final (dirección, horario, teléfono, mapa, reservar), un gran rótulo o el logo como pieza gráfica, y los enlaces legales pequeños al final.

## Fondo y recursos visuales

- **Genérico:** foto de stock con capa oscura, o ilustración plana de personas.
- **Con oficio:** recursos generados para la marca.
- **Claves:**
  - Patrones y fondos en SVG o CSS (§7) con los colores del proyecto.
  - Textura (§5) para dar material, y fotos reales del negocio siempre que las haya.
  - Si hay que usar ilustración, un estilo único en toda la web.
