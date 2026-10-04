# Historial de Cambios (Changelog)

Todos los cambios notables y parches de este proyecto son registrados en este archivo.

---

## [v0.30.0-alpha] - Versión Principal

- Se agregó un nuevo aside del lado derecho de la tarjeta principal
- El nuevo aside contiene un widget con datos curiosos (provisorios por ahora)
- También un botón para generar otro dato
- Ahora el botón del aside funciona como se tenía pensado en un inicio: ocupa todo el alto y ancho disponible
- El botón del aside ahora tiene un ícono indicador
- Las fuentes Atkinson Hyperlegible y JetBrains Mono ahora funcionan correctamente ya que se corrigieron las rutas
- Se cambió el color del botón para volver arriba
- Se actualizaron las transiciones del aside
- Los botones y widgets ahora son más redondeados
- Se eliminó el color de fondo al hacer hover en los links del menu
- Se agregaron nuevos atajos de teclado para abrir el nuevo aside y para cerrar los modales
- Se corrigió el atajo para abrir el aside antiguo
- Se modificó la funcion de `extractLatestVersionChanges` para adaptarse al nuevo formato del changelog
- Se agregó un nuevo archivo `assets/data/facts.json` para guardar los datos curiosos
- Se agregaron nuevos archivos .MD:

1. ARCHITECTURE.md el cual incluye el árbol de carpetas y archivos que previamente estaba en el README
2. CONTRIBUTING.md que incluye una guía de estándares y convenciones de desarrollo para el sitio

- El archivo de changelog ahora está en formato .MD y contiene el nombre completo de las versiones
- README.md ahora contiene un changelog más reducido y se actualizó la tabla de contenidos
- Se cambiaron algunas clases del aside
- Se corrigió el error de la barra de progreso, ahora se encuentra centrada correctamente en el header
- Se corrigieron rutas de sonido y de cursores
- Se eliminó notes.txt

## [v0.30.1-alpha]

- Ahora el escudo en el header dirige a la página web del colegio
- Se arregló el atajo de teclado para cerrar los modales
- El roadmap del README se movió al nuevo archivo ROADMAP.md
- Se actualizó el árbol de carpetas
- Se cambiaron los valores de z-index
- Se agregó la carpeta `assets/img/schedules` para una futura función
- Se eliminó el `link rel="manifest"` de los html a fin de trabajarlo en un futuro

## [v0.30.2-alpha]

- Se cambió otro z-index

---

## [v0.29.0-alpha] - Versión Principal

- Se agregó un nuevo modal de bienvenida y advertencia informando que el sitio está en desarrollo.
- Se agregó un botón en accesibilidad para desactivar las Transiciones.
- Se agregó un controlador para la fuente de texto del sitio.
- Se cambiaron muchos colores en modo oscuro.
- Ahora el logo del header en modo oscuro y alto contraste.
- Se reestructuraron las carpetas de CSS y JS, dividiendo los archivos en varias subcarpetas.
- El CSS ahora se encuentra dividido en módulos por componentes.
- Se eliminaron los archivos `base.css`, `tablet.css` y `desktop.css` ya que ahora las propiedades se encuentran repartidas.
- Los módulos de JS ahora están divididos en carpetas.
- Se rehizo la función para mostrar los modales.
- Se agregaron muchos comentarios y se eliminaron otros.
- Se renombraron las clases del modal.
- Se modificó el `robots.txt` para evitar la indexación.
- Se agregó la etiqueta meta `<meta name="robots">` en los HTML con el mismo propósito.
- Se expandieron y actualizaron `security.txt` y `humans.txt`.

### [v0.29.1-alpha]

- Se cambió la fuente por defecto a 100% en lugar de 90%.

### [v0.29.2-alpha]

- Se agregó un botón en accesibilidad para cambiar a una fuente de texto para personas con dislexia.
- Se agregó un atajo de teclado para abrir el aside.
- Se movieron los temas de accesibilidad a su propio archivo CSS.
- Se actualizó el `README.md` y su árbol de carpetas.

### [v0.29.3-alpha]

- Se agregó un modo de accesibilidad para personas con daltonismo.
- Se agregó un atajo de teclado para el modo daltónico y otro para abrir el aside.
- Se corrigieron las rutas de los fondos del hero.

### [v0.29.4-alpha]

- Se agregaron archivos de fuente cursiva (itálica) para Nunito, Nunito Sans y Atkinson Hyperlegible.

### [v0.29.5-alpha]

- Se actualizó el PDF de los AEC y se agregó el PDF del anexo de los AEC.
- Se agregó una nueva tarjeta de descarga del anexo.

### [v0.29.6-alpha]

- Los cursores en modo daltónico ahora son como en el modo oscuro.

### [v0.29.7-alpha]

- Se reordenaron los botones del aside de opciones.
- El logo del Header ahora es claro en modo daltónico.

### [v0.29.8-alpha]

- Se agregó un botón en la parte inferior derecha para volver arriba de todo.
- Se cambió la fuente del modo código, de Monospace a JetBrains Mono.
- Se cambió el nombre de descarga de los AEC y AEC (anexo).
- Se agregó un mensaje en la consola.

---

## [v0.28.0-alpha] - Versión Principal

- Se expandió el archivo `variables.css` para crear un sistema completo de Design Tokens.
- Se estandarizaron y unificaron las variables para `padding`, `margin`, `border-radius`, escalas tipográficas, sombras y tiempos de transición.
- Estas variables ahora son iguales tanto para celular como para PC.
- Se refactorizaron las propiedades y reglas en `base.css` y `desktop.css` eliminando valores estáticos (hardcodeados).
- Se cambió el color de algunas tarjetas en modo claro.
- Ahora el logo del C.E. del header dirige hacia la página de inicio.
- El spinner de carga ahora es más ancho.
- Se suavizó el color del borde de los botones/inputs y el de las barras de scroll.
- Ahora el toast dura más tiempo.
- Se renombraron muchas clases e IDs para mayor claridad.
- Se corrigió la separación de los enlaces a las subpáginas.
- Se eliminaron propiedades innecesarias.
- Se mejoraron algunos comentarios del código.
- Pequeño cambio en la Licencia.
- Se modificó el `.gitignore`.

### [v0.28.1-alpha]

- Se actualizaron y agregaron nuevos atajos de teclado.
- Ahora los cursores también se manejan por clases.
- Se modificaron las clases del `whats-new-modal`.
- Se renombraron todos los archivos de componentes HTML.

### [v0.28.2-alpha]

- Se actualizó el changelog.

---

## [v0.27.0-alpha] - Versión Principal

- Se agregó una ventana modal para mostrar la última versión y las novedades.
- Se agregó `whats-new-modal.html` y `whats-new.js` para controlar el funcionamiento.

### [v0.27.1-alpha]

- Se corrigió y actualizó el `README.md`.

### [v0.27.2-alpha]

- Se corrigió el funcionamiento de la ventana modal.
- Se agregó el archivo `notes.txt`.

### [v0.27.3-alpha]

- Se corrigió nuevamente el funcionamiento de la ventana modal.

### [v0.27.4-alpha]

- Se modificaron algunos estilos de la ventana modal.
- Se arregló la función para extraer los cambios desde `changelog.txt`.

### [v0.27.5-alpha]

- Se modificó el funcionamiento de la función para extraer el `changelog.txt`.
- Se cambió el ancho de la ventana modal.

### [v0.27.6-alpha]

- Se cambió el ancho de la ventana modal.
- Se cambiaron varios colores y estilos de la ventana modal.

### [v0.27.7-alpha]

- Se cambió el ancho de la ventana modal.
- Se cambiaron varios colores y estilos de la ventana modal.

### [v0.27.8-alpha]

- Se cambió el ancho de la ventana modal.
- Se cambiaron algunos colores y estilos de la ventana modal.

### [v0.27.9-alpha]

- Se cambió el fondo de la ventana modal.

### [v0.27.10-alpha]

- Se reordenó el changelog.

### [v0.27.11-alpha]

- Se agregó una nueva clase al widget.

### [v0.27.12-alpha]

- Se agregó `.gitignore` para evitar hacer commit a archivos locales.

---

## [v0.26.0-alpha] - Versión Principal

- Se agregaron efectos de sonido a los botones, toasts y banners.
- Estos archivos de sonido se encuentran en `assets/audio`.
- Se separó una nueva sección en el aside: Accesibilidad, que incluye el modo escala de grises y un nuevo botón para controlar y desactivar los efectos de sonido.
- Se agregó el archivo `sound.js` y funciones para controlar el sonido.
- Se agregó más padding vertical al aside.
- Se agregaron variables para controlar el outline de los elementos para la navegación con tab.
- Se eliminó código innecesario.
- Se incluyó un nuevo Roadmap en el archivo `README.md`.

---

## [v0.25.0-alpha] - Versión Principal

- Se formatearon todos los archivos JS, CSS y HTML.
- Se reordenaron las propiedades de todos los archivos CSS con el enfoque Outside-In:
    1. Posicionamiento y Maquetación (Layout & Position)
    2. Modelo de Caja y Dimensiones (Box Model & Sizing)
    3. Espaciado Interno y Bordes (Padding & Border structure)
    4. Tipografía y Texto (Typography)
    5. Colores y Estilos Visuales (Visuals & Colors)
    6. Transiciones y Animaciones (Misc & Transitions)
