---
name: s0k1x-componentes
description: Construye componentes y recursos web bonitos y con oficio, que no parezcan genéricos ni "hechos por IA": botones, tarjetas, inputs, navegación, heros, precios, testimonios, galerías, fondos, iconos y texturas. Aplica las técnicas que usan los mejores componentes de la comunidad (21st.dev, Uiverse, registros de shadcn): capas de luz, estados cuidados, microinteracciones con propósito, materiales y detalle tipográfico. Úsala al crear o pulir cualquier pieza de una web o landing, o cuando el usuario diga que algo se ve genérico, plano, soso o "de plantilla".
---

# s0k1x-componentes

Un componente genérico se reconoce en un segundo: gris de serie, `rounded-lg` en todo, azul por defecto, sombra suave igual en todas partes y ningún estado pensado. Uno con oficio se nota en los detalles: la luz cae de un sitio, cada estado responde, el texto está compuesto y hay una idea propia. Esta skill enseña a construir la segunda clase, pieza a pieza.

## Dónde encaja

- **`s0k1x-estilo` manda en la dirección de arte**: tipo de web, paleta, fuentes, radio y nivel de movimiento. Esta skill construye las piezas **dentro** de esa dirección y con sus tokens. Si `s0k1x-estilo` ya trae un fragmento que encaja (`assets/ui`), se parte de ese y se le aplica este nivel de detalle.
- `s0k1x-movimiento` decide cómo se ejecuta cada animación; aquí solo se decide **qué** responde y por qué.
- `s0k1x-humano` escribe los textos; `s0k1x-pulido` revisa el resultado.

## Flujo para cada pieza

1. **Una idea por pieza.** Antes de escribir código, di en una frase qué la hace propia: "el botón de reservar se hunde como una tecla", "las tarjetas de servicios tienen un borde que se ilumina hacia el cursor", "el fondo del hero es papel con grano". Si no hay idea, la pieza será genérica.
2. **Parte de los tokens.** Colores, fuentes, radios, sombras y duraciones salen de las variables del proyecto. Nada de valores sueltos.
3. **Construye la anatomía completa**, no solo el estado de reposo: reposo, hover, pulsado, foco con teclado, desactivado, cargando, vacío y error cuando aplique. La mitad del oficio está aquí.
4. **Añade las capas de luz y material** que pida la idea: borde, brillo interior, sombra con color, textura. Técnicas en [references/tecnicas.md](references/tecnicas.md).
5. **Compón el texto.** Escala tipográfica real, `text-wrap: balance` en titulares, números tabulares en precios, interletraje ajustado en tamaños grandes.
6. **Movimiento con propósito.** Solo lo que da información (respuesta al pulsar, cambio de estado, orientación). Respeta el nivel de `s0k1x-estilo` y `prefers-reduced-motion`.
7. **Pasa la lista de comprobación** del final.

Recetas concretas por pieza, con la versión genérica y la versión con oficio, en [references/recetas.md](references/recetas.md). Qué piezas y qué tono pide cada tipo de negocio, en [references/por-negocio.md](references/por-negocio.md).

## Señales de componente genérico (evítalas)

- Gris de serie de una librería, azul `#3b82f6` o degradado morado a rosa como color principal.
- El mismo radio y la misma sombra en todo, sin jerarquía de elevación.
- Hero centrado con titular, subtítulo y dos botones, sin más idea.
- Tarjetas idénticas en rejilla de tres con icono, título y dos líneas.
- Iconos de distintos sets mezclados, o emojis haciendo de iconos.
- Botones sin estado pulsado ni foco visible; inputs sin estado de error.
- Glassmorphism sobre un fondo plano, donde el desenfoque no tiene nada que desenfocar.
- Animaciones de entrada en todos los bloques al hacer scroll.
- Fotos de stock genéricas, o ilustraciones planas de personas sin cara.
- Texto de relleno o titulares vacíos ("Soluciones innovadoras para tu negocio").

## Lo que hace bonita una pieza

- **La luz tiene dirección.** Borde superior un poco más claro, sombra que cae hacia abajo y lleva algo del color del fondo. Nunca sombras negras puras.
- **Elevación con jerarquía.** Dos o tres niveles como mucho, y cada uno con su sombra, su borde y su fondo.
- **Estados que responden.** Pulsar hunde, el foco se ve, cargar no mueve el layout.
- **Material.** Grano, papel, cristal con algo detrás o metal: uno, elegido por el negocio, y usado con mesura.
- **Detalle tipográfico.** Titulares compuestos, números alineados, versalitas o etiquetas con tracking en los rótulos pequeños.
- **Un gesto memorable por página**, no diez. Por ejemplo, un borde que sigue al cursor en las tarjetas principales, y el resto en calma.
- **Recursos propios.** Iconos de un solo set y un solo grosor, patrones y fondos SVG generados para la marca, fotos reales del negocio cuando las haya.

## Estudiar a la comunidad

Las mejores piezas de 21st.dev, Uiverse o los registros de shadcn son un buen material de estudio: fíjate en cómo superponen sombras, cuánto dura cada transición y qué estados cuidan. Cómo usarlas bien, y qué está comprobado de cada fuente, en [references/fuentes.md](references/fuentes.md). Si incorporas código de otra persona, comprueba su licencia y apúntalo en `RECURSOS.md` del proyecto (pieza, fuente, autor, licencia). No hagas scraping de 21st.dev: sus términos lo prohíben; usa su CLI oficial o lo que el usuario copie.

## Lista de comprobación final

- [ ] La pieza tiene una idea que se puede decir en una frase.
- [ ] Todos los valores salen de los tokens del proyecto.
- [ ] Están todos sus estados: reposo, hover, pulsado, foco visible, desactivado, y cargando, vacío o error si aplica.
- [ ] La luz y la elevación son coherentes con el resto de la página.
- [ ] Contraste AA, uso completo con teclado y objetivos táctiles de 44 px o más.
- [ ] El movimiento informa de algo, respeta `prefers-reduced-motion` y no salta el layout.
- [ ] Ninguna de las señales de componente genérico.
- [ ] Funciona a 390 px de ancho sin scroll horizontal.
- [ ] Los recursos de terceros tienen su licencia comprobada y están en `RECURSOS.md`.
