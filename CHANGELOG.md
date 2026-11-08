# Historial de Cambios (Changelog)

Todos los cambios notables y parches de este proyecto son registrados en este archivo.

---

## v0.42.0-alpha - Versión Principal

- El número de versión ahora se maneja desde `version.json`
    - Los archivos de README, footer y modals ahora tienen automatizado el numerado de versión
- La función para extrar los cambios del changelog fue movida a `js/utils/changelog.js` y se rescribió gran parte de la función
- Los estilos del modal de novedades ahora se encuentran en `modals.js`
- Se agregó el atributo `defer` a la importación de librerías en calendario y horarios
- Se corrigió el contenedor de los aside en calendario y horarios
- Los easter eggs ahora se encuentran en archivos individuales dentro de `js/extras/` y se exportan desde `extras.js`
- La carpeta `data/` ahora se encuentra en la raíz del proyecto
- Se actualizaron las rutas
- La clase `content-card` se renombró a `main-content`
- Se actualizó el árbol de carpetas

---

## v0.41.0-alpha - Versión Principal

- Se actualizaron completamente los Términos y Condiciones
- Se agregó la subpágina `noticias.html` (vacía de momento) para evitar los enlaces rotos
- En el changelog, los números de versiones ya no incluyen corchetes
- Corregidos muchos errores de ortografía en varios archivos
- Se actulizó el árbol de carpetas

---

## v0.40.0-alpha - Versión Principal Mayor

HEADER Y NAVEGACIÓN

- Estructura del header renovada: logos juntos, título más hacia la izquierda, nuevas columnas con menús y botones.
- El header ahora es más bajo y más ancho.
- Se achicó el tamaño de los logos e iconos del header.
- Se agregaron modales con opciones a los botones del header (son los mismos que el aside-config pero divididos).
- La barra de progreso de lectura es más fina.
- Se agregó el archivo `header.js` para renderizar los modales.
- Se unificó el color de fondo de los modales nuevos y ya existentes
- El fondo de los modales ya no tiene blur.
- Se movió el botón de Modo Daltónico a Accesibilidad.
- Se cambió la clase del botón de Modo daltónico.
- Se agregó una pequeña animación de hover a los enlaces del nav.
- Se quitó el padding del nav de subpágina y ahora tiene position sticky al hacer scroll.
- Iconos en `assets/icons/header`.
- Svg de lupa para un botón futuro

ESTRUCTURA

- Ahora la etiqueta MAIN tiene la clase e ID de `content-card` en lugar de un `div` fuera de main.
- Se eliminó el color, padding y sombra de la `content-card`. Ahora actúa solo como contenedor invisible.
- Se renombró el `aside-config` a `aside-news` y el `aside-news` a `aside-widgets`.
- Se renombraron las respectivas clases, IDs y rutas.
- Se cambió el padding del aside, y ahora son más altos.

FONDO Y TEMAS

- Se cambió el fondo liso del sitio por una textura tecnológica infinita, en el modo Claro, Oscuro, Daltónico, Código y Alto Contraste.
    - El modo rosa usa el del modo claro y el de los demás temas aún no cambió.
- Se cambiaron varios colores en modo claro.
- Se actualizaron los celestes del modo rosa para ir acorde con el nuevo modo claro.
- Se cambiaron algunos colores y se arreglaron los border-radius del modo código.
- Se cambió cómo se maneja la fuente de texto en el modo código.
- El botón del aside ya no está redondeado en modo código.
- Ahora los colores del modo código, daltónico y alto contraste se manejan con variables.
- Se eliminaron los favicon temáticos, dejando únicamente el de modo claro y oscuro.
- Los favicon de modo claro / oscuro están más simplificados.
- Se actualizacon las rutas.

CURSORES

- Ahora el sitio usa nuevos cursores en formato `.cur` y son los mismos para modo claro / oscuro
- Se eliminaron los cursores svg antiguos y se actualizaron las rutas y variables de cursores

CAMBIOS VARIADOS

- Las tarjetas de descarga de la primer sección del Inicio ahora están organizadas en un grid de 2 columnas
- Los párrafos ahora tienen `text-wrap: pretty` y los encabezados `text-wrap: balance`
- Las tarjetas y los widgets tienen más `border-radius`
- Se actualizó la función de `sounds.js` para incluir nuevos elementos y botones.
- Se intentó corregir el iframe de la subpágina escuela.html.
- Se arregló el enlace del Google Maps en escuela.html.
- La página `terminos.html` ya no incluye los asides.
- Se eliminó el modal de aceptar términos en `terminos.html`.
- Se eliminaron muchos comentarios / Se modificaron otros.
- Se cambió el título del widget de datos.
- Se cambió la puntuación de unos datos de `facts.json`.
- Se cambió el nombre de una función.
- Se eliminó la función de `initPageTitle` ya que daba muchos problemas.
- Se corrigió una badge del README.

### v0.40.1-alpha

- El título de pestaña del index ya no incluye "Inicio"
- La clase `grid-tarjetas` se renombró a `grid-cards` y está mejor trabajda desde css
- Se agregó este estilo de tarjetas cuadradas a varias secciones en subpáginas
- Se cambió el gradiente de fondo del footer, haciéndolo más oscuro
- El spinner de carga es más grande y ancho
- Se actualizó el árbol de carpetas y archivos

### v0.40.2-alpha

- Se eliminó la función `renderLoader` debido a problemas con la carga de estilos
- Ahora cada archivo html tiene su propio loader con contenido personalizado
- Se cambiaron muchos comentarios
- Se agregó la fuente Lora a la personalización del horario y calendario
- Se renombraron algunos ids en js
- Se agruparon las funciones de `dyslexia.js` y `animations.js` en `accessibility.js`, ahora se exportan/importan desde ahí
- Estos archivos fueron eliminados
- Se corrigió el div con clase content-card en `horarios.html` y `calendario.html`
- Se actualizó `humans.txt`

---

## v0.39.0-alpha - Versión Principal

- Nuevos widgets:
    - Widget de Efeméride diaria (Día de...)
    - Widget de vistas del sitio (diarias, mensuales, anuales y totales)
- Nuevas funciones js para manejar los widgets
- Archivo `days.json` para guardar las efemérides (aún en progreso)
- Se reordenó la carga de los widgets en las funciones js
- Se agregaron variables a algunos elementos con tamaños de fuente fijo
- Se eliminaron algunas propiedades innecesarias
- Se mejoraron los comentarios de css y se eliminaron muchos

### v0.39.1-alpha

- Se eliminaron los emojis del widget de vistas

---

## v0.38.0-alpha - Versión Principal

- Se agregó contenido a los siguientes archivos:
    - `.github/ISSUE_TEMPLATE/bug_report.yml`
    - `.github/ISSUE_TEMPLATE/feature_request.yml`
    - `.github/CODE_OF_CONDUCT.md`
    - `.github/PULL_REQUEST_TEMPLATE.md`
- Se amplió el changelog incluyendo el historial desde la primera versión
- Las versiones de número redondo ahora incluyen el título de Versión Principal Mayor (a excepción de la 0.10)
- Se corrigieron algunos niveles de viñeta en el changelog

### v0.38.1-alpha

- Se agregó contenido a los siguientes archivos:
    - `.github/ISSUE_TEMPLATE/bug_report.yml`
    - `.github/ISSUE_TEMPLATE/feature_request.yml`
    - `.github/CODE_OF_CONDUCT.md`
    - `.github/PULL_REQUEST_TEMPLATE.md`
- Se amplió el changelog incluyendo el historial desde la primera versión
- Las versiones de número redondo ahora incluyen el título de Versión Principal Mayor (a excepción de la 0.10)
- Se corrigieron algunos niveles de viñeta en el changelog

### v0.38.2-alpha

- Changelog

### v0.38.3-alpha

- Corregidos niveles del changelog

### v0.38.4-alpha

- Se quitó el título de versión principal a versiones previas a la 0.6 debido a que esta fue la primera en tener contenido completo

### v0.38.5-alpha

- Se agregaron los archivos de la fuente de texto Lora
- Se agregó Lora en @font-face

---

## v0.37.0-alpha - Versión Principal

- Nuevos módulos de Horarios y Calendario: Visualización Personalización y Descarga
- Se encuentran en dos nuevas subpáginas a las cuales se accede desde Herramientas
- Características principales de `horarios.html`:
    - Mapeo de datos dinámico: Carga asíncrona mediante JSON para poblar los cursos de manera automatizada.
    - Panel Desplegable (`Personalizar`) : Interfaz limpia que agrupa todas las herramientas de edición.
        - Soporte para cambiar entre fuentes como Nunito, Arial, Calibri y dislexia.
        - Botones de escala tipográfica exclusivos para el calendario.
        - Opción para ocultar los nombres de los profesores
        - Menús desplegables con 10 opciones predefinidas y selector personalizado por rueda.
        - Control personalizado de headers, casillas, hora, recreos y fondo general.
    - Gestión de profesores: Casilla de verificación para mostrar u ocultar los nombres del cuerpo docente.
    - Exportación PNG : Motor de captura visual en alta resolución con `html2canvas`.
    - Exportación a PDF: Generación de documentos listos para imprimir en formato vertical A4 mediante `jsPDF`.
- Características principales de `calendario.html`:
    - Vista Dual (12 Hojas / 1 Hoja) : Opciones de visualización mensual detallada o anual compacta.
    - Panel Desplegable (`Personalizar`) : Interfaz limpia que agrupa todas las herramientas de edición.
        - Soporte para cambiar entre fuentes como Nunito, Arial, Calibri y dislexia.
        - Botones de escala tipográfica exclusivos para el calendario.
        - Paleta de colores pastel: Menús desplegables con 10 opciones predefinidas y selector personalizado por rueda.
        - Control personalizado de título, headers de semana, casillas, fondo del mes y fondo general.
    - Exportación PNG : Motor de captura visual en alta resolución con `html2canvas`.
    - PDF Multipágina : Generación automática de un documento horizontal de 12 páginas exactas (una por mes).
    - PDF Anual : Opción de exportación vertical compacta de todo el año en una sola hoja, mediante `jsPDF` (igual que el anterior)
- Nueva carpeta `assets/libs` que contiene las librerías `html2canvas` y `jsPDF` descargadas.
- Se cambió el símbolo de flecha circular de los botones que la incluían.
- Nuevos archivos js `calendar.js` y `schedules.js` para manejar el renderizado y personalización
- Nuevos archivos css `calendar.css`, `schedules.css` y `controls.css` para manejar los estilos
- Archivo json para guardar los horarios
- Se eliminaron las carpetas `assets/img/` `placeholder`, `posts` y `schedules`
- Se actualizó el árbol de carpetas y humans.txt
- Se actualizaron comentarios
- Cambios secretos

---

## v0.36.0-alpha - Versión Principal

- Nuevos temas de estacionales por temporadas
    - Verano: enero y febrero
    - Mes rosa: octubre
    - Halloween: última semana de octubre
    - Navidad: últimas semanas de diciembre
- Estos temas se encuentran en `seasonal.css`
- Se agregaron botones en el aside de opciones para activar los temas estacionales
- Se inviertieron las fuentes: Nunito como Titles y Nunito Sans como Main
- Se modificaron levemente algunos colores
- Se modificó el color del icono del boton del aside en la mayoria de temas
- Se reworkeó el funcionamiento de `grayscale-mode` para que se aplique como una capa en lugar de un tema independiente (así como rest-mode)
- Se eliminó el favicon gris
- Función js actualizada para comprobar ciertos periodos de fecha y aplicar temas estacionales por defecto
- Nuevos logos y favicons rosa y mascota rosa para el mes de octubre
- Se actualizaron los logos y favicons de halloween y navidad
- Se agregó el logo de instagram con colores patrios y se actualizaron los de halloween y navidad
- Se separaron los logos de `assets/logos` en `ig/`, `ce/` y `app/`
- Se renombraron los archivos de logos
- Se actualizaron las rutas de los logos
- Eliminada una variable inutilizada
- Se agregaron muchas variables de color nuevas para elementos que antes usaban las variables de color de otro elemento
- Se renombraron muchas variables

### v0.36.1-alpha

- Se renombró el tema Halloween a Misterio y Navidad a Festividades para evitar conflictos institucionales
- Se renombraron las variables, botones y clases
- Se arregló el estilo de `button-scroll-top`
- Se agregó `.gitkeep` a algunas carpetas vacías que no lo tenían

### v0.36.2-alpha

- El texto de `terminos.html` ahora se encuentra directamente en la tarjeta principal
- Ahora los botones de temas estacionales tienen la misma clase que los demás del aside, para controlar su tamaño y separación
- Se cambió la fuente del título del Loader (de main a titles)
- Se cambió un color en modo rosa
- Se agregó otra pequeña transición a los botones

### v0.36.3-alpha

- Se corrigieron algunos títulos de página en `components.js`

### v0.36.4-alpha

- Se corrigió el funcionamiento de `initPageTitle`
- Se cambiaron muchos títulos en la pantalla de carga

### v0.36.5-alpha

- Se actualizaron algunos logos del CE y de instagram
- Se renombró el logo de ig de halloween

### v0.36.6-alpha

- Se actualizó el árbol de carpetas de `ARCHITECTURE.md`

### v0.36.7-alpha

- Se actualizó el favicon del modo Misterio

### v0.36.8-alpha

- ROADMAP ampliado y actualizado

---

## v0.35.0-alpha - Versión Principal

- Nueva subpágina de Términos y Condiciones para protección legal y de conducta del sitio
- Nuevo modal para aceptar términos y condiciones al entrar por primera vez al sitio
- El footer ahora tiene una columna más, de título Legal, con link a Terminos y Licencia (se movió a esta columna)
- En la columna proyecto ahora se encuentra un enlace a Créditos
- Modificación en la función js para inciar los modales en orden
- Se renombraron los svg del widget y se actualizaron las rutas
- Renombrado `home.css` a `specific.css`
- Iconos del footer en carpeta `assets/icons/footer` (sin usar de momento)

---

## v0.34.0-alpha - Versión Principal

- Nuevas subpáginas:
    - Recursos, para descargar músicas y archivos. Algunos archivo descargables de momento
    - Escuela, para conocer sobre la escuela. contenido placeholder y enlace a la web del colegio
    - Herramientas, vacía de momento
- Nueva función js para guardar en localStorage si los aside están abiertos o cerrados, para que el estado se mantenga al reiniciar la página o dirigirse a una subpágina
- Se eliminó la flecha hacia abajo en los botones de descarga de archivos
- El escudo del header ahora dirige a escuela.html
- Nueva organziación del menú de subpáginas (ahora con un grid)
- Se reordenaron las subpáginas del menú
- Se reordenó la función para poner título a la página y se agregaron nuevos
- Se cambiaron algunos títulos de subpáginas
- Se cambió el ancho y margin de los botones del aside
- Se subdividió la carpeta de `assets/audio` en `effects/` y `music/`
- Se subdividió la carpeta `assets/docs` en `school/` y `patrio/`
- Nueva carpeta `img/resources`
- Nuevos archivos en `resources`
- Se eliminaron muchas carpetas vacías
- Se eliminaron todas las funciones de `accesibility.js` debido a que no se usaban
- Se actualizaron varias rutas de archivos

### v0.34.1-alpha

- Se arregló el menú de subpáginas en `escuela.html`

### v0.34.2-alpha

- Pequeño cambio en la función de título de página
- Se arregló un link del menú de subpáginas en `contacto.html`

### v0.34.3-alpha

- Ahora 404.html tiene el footer insertado en lugar de su propio footer
- Se arregló la función de `initPageTitle`

---

## v0.33.0-alpha - Versión Principal

- Nuevos widgets en el aside de novedades:
    - Widget para mostrar Próximos feriados
    - Widget de frase diaria aleatoria
- Se reordenaron los widgets de este aside
- El widget de tiempo atmosférico ahora tiene título, ícono, y muestra la fecha y hora
- Se movió el widget de tiempo atmosférico al aside de noticias
- Nuevo botón en el aside de configuración que abre un modal para compartir el sitio a través de una red social
- Se cambió el color de los botones e inputs a un lila más intenso
- Los botones ahora tienen mucha menos separación vertical
- Los títulos de las secciones del aside tienen una nueva clase y menos separación con respecto a los botones
- Nuevos easter eggs
- Ahora los íconos de los widgets se encuentran en la carpeta `assets/img/icons`
- Nuevos archivos `holidays.json` y `quotes.json` para almacenar el contenido de los widget
- Nuevas funciones js para manejar los nuevos widgets

---

## v0.32.0-alpha - Versión Principal

- Nueva organización del footer: tres columnas
    - Primera columna: Logo completo del C.E, nombre y descripción
    - Segunda columna: Contacto (el contenido no cambió)
    - Tercer columna: Proyecto (nuevo enlace al historial de cambios)
- El copyright tiene solo una línea
- El logo completo ya no estáa debajo del copyright
- Se cambió la puntuación del subtítulo del header
- Se cambió el color de borde y hover de los botones/inputs: ahora es lila
- Se cambió el color de hover del botón de los aside
- El footer de 404.html ahora tiene una sola línea y no tiene el logo
- Se cambiaron los colores del party-mode y se agregaron más
- Se corrigió un enlace del README

### v0.32.1-alpha

- Se separó más el copyright del borde superior
- Ahora el footer es más ancho

### v0.32.2-alpha

- Se oscureció el color del toast
- Se corrigió una clase del copyright del footer
- Ahora el footer es más ancho
- Corrección de ortografía en CONTRIBUTING

### v0.32.3-alpha

- Ahora la versión en la primer columna del footer está en otra línea

### v0.32.4-alpha

- La separación entre el borde del copyright y las columnas es mayor

### v0.32.5-alpha

- Se actualizó el README

### v0.32.6-alpha

- Se cambiaron unos colores del party-mode

### v0.32.7-alpha

- Se arregló el README

---

## v0.31.0-alpha - Versión Principal

- Ahora todas las subpáginas tienen su nombre en español
- La tarjeta principal y el enlace ahora son más anchos
- En consecuencia, los aside son más delgados
- Las tarjetas de header y contenido tienen mas redondeado
- Todas las sombras son más intensas
- Se agregó una sombra al header al hacer scroll
- Nuevos estilos para manejar cómo se ven las imágenes que no cargan o con rutas rotas
- Se agregaron muchos easter eggs y funciones random secretas insertando mensajes
- Ahora la página del colegio se abre en una pestaña nueva (desde el logo del header)
- Se cambió la función para renderizar la pantalla de carga, de forma que muestra un texto diferente dependiendo la subpágina
- Se añadió una función de respaldo pars cargar dinámicamente el título de las páginas
- Se renombró la carpeta `pages` a `misc` para incluir reglas css especificas o aleatorias
- Se actualizó el árbol de carpetas

### v0.31.1-alpha

- Se arregló el ancho del cursor de texto
- Se eliminó código innecesario

### v0.31.2-alpha

- La barra de progreso de lectura es mas ancha

### v0.31.3-alpha

- Se arreglaron los enlaces a las subpáginas desde el inicio

### v0.31.4-alpha

- Se agregaron flechas a los botones de descarga
- Se actualizó la flecha del botón de volver arriba
- Se agregó un PDF del uso del uniforme
- Se agregaron los logos de Instagram y algunos logos/favicons para temas de evento
- Se actualizó `humans.txt` y `CONTRIBUTING.md`
- Se agregaron algunos archivos nuevos en `.github/`
- `CODE_OF_CONDUCT.m` y `PULL_REQUEST_TEMPLATE.md`
- Y otra subcarpeta `ISSUES_TEMPLATE/`: `bug_report.yml` y `feature_request.yml`
- Estos archivos de momento están vacíos
- Se agregaron muchas carpetas y subcarpetas para futuras adiciones en `assets/` las cuales tienen `.gitkeep` adentro
- Se cambiaron comentarios

### v0.31.5-alpha

- Se actualizó el readme

### v0.31.6-alpha

- Ahora al hacer hover a los botones se pintan de gris en lugar de celeste

---

## v0.30.0-alpha - Versión Principal Mayor

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

### v0.30.1-alpha

- Ahora el escudo en el header dirige a la página web del colegio
- Se arregló el atajo de teclado para cerrar los modales
- El roadmap del README se movió al nuevo archivo ROADMAP.md
- Se actualizó el árbol de carpetas
- Se cambiaron los valores de z-index
- Se agregó la carpeta `assets/img/schedules` para una futura función
- Se eliminó el `link rel="manifest"` de los html a fin de trabajarlo en un futuro

### v0.30.2-alpha

- Se cambió otro z-index

### v0.30.3-alpha

- Se agregaron temas futuros a theme.js
- Se actualizaron las instrucciones de CONTRIBUTING
- Se actualizó el ROADMAP para incluir división de periodos de desarrollo y cambio de planes
- La fecha provisional de lanzamiento ahora es el 9 de marzo de 2027

### v0.30.4-alpha

- Se agregó un disfraz de halloween para la mascota

### v0.30.5-alpha

- Se agregó un asistente a los créditos del README

---

## v0.29-alpha - Versión Principal

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

### v0.29.1-alpha

- Se cambió la fuente por defecto a 100% en lugar de 90%.

### v0.29.2-alpha

- Se agregó un botón en accesibilidad para cambiar a una fuente de texto para personas con dislexia.
- Se agregó un atajo de teclado para abrir el aside.
- Se movieron los temas de accesibilidad a su propio archivo CSS.
- Se actualizó el `README.md` y su árbol de carpetas.

### v0.29.3-alpha

- Se agregó un modo de accesibilidad para personas con daltonismo.
- Se agregó un atajo de teclado para el modo daltónico y otro para abrir el aside.
- Se corrigieron las rutas de los fondos del hero.

### v0.29.4-alpha

- Se agregaron archivos de fuente cursiva (itálica) para Nunito, Nunito Sans y Atkinson Hyperlegible.

### v0.29.5-alpha

- Se actualizó el PDF de los AEC y se agregó el PDF del anexo de los AEC.
- Se agregó una nueva tarjeta de descarga del anexo.

### v0.29.6-alpha

- Los cursores en modo daltónico ahora son como en el modo oscuro.

### v0.29.7-alpha

- Se reordenaron los botones del aside de opciones.
- El logo del Header ahora es claro en modo daltónico.

### v0.29.8-alpha

- Se agregó un botón en la parte inferior derecha para volver arriba de todo.
- Se cambió la fuente del modo código, de Monospace a JetBrains Mono.
- Se cambió el nombre de descarga de los AEC y AEC (anexo).
- Se agregó un mensaje en la consola.

---

## v0.28-alpha - Versión Principal

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

### v0.28.1-alpha

- Se actualizaron y agregaron nuevos atajos de teclado.
- Ahora los cursores también se manejan por clases.
- Se modificaron las clases del `whats-new-modal`.
- Se renombraron todos los archivos de componentes HTML.

### v0.28.2-alpha

- Se actualizó el changelog.

---

## v0.27-alpha - Versión Principal

- Se agregó una ventana modal para mostrar la última versión y las novedades.
- Se agregó `whats-new-modal.html` y `whats-new.js` para controlar el funcionamiento.

### v0.27.1-alpha

- Se corrigió y actualizó el `README.md`.

### v0.27.2-alpha

- Se corrigió el funcionamiento de la ventana modal.
- Se agregó el archivo `notes.txt`.

### v0.27.3-alpha

- Se corrigió nuevamente el funcionamiento de la ventana modal.

### v0.27.4-alpha

- Se modificaron algunos estilos de la ventana modal.
- Se arregló la función para extraer los cambios desde `changelog.txt`.

### v0.27.5-alpha

- Se modificó el funcionamiento de la función para extraer el `changelog.txt`.
- Se cambió el ancho de la ventana modal.

### v0.27.6-alpha

- Se cambió el ancho de la ventana modal.
- Se cambiaron varios colores y estilos de la ventana modal.

### v0.27.7-alpha

- Se cambió el ancho de la ventana modal.
- Se cambiaron varios colores y estilos de la ventana modal.

### v0.27.8-alpha

- Se cambió el ancho de la ventana modal.
- Se cambiaron algunos colores y estilos de la ventana modal.

### v0.27.9-alpha

- Se cambió el fondo de la ventana modal.

### v0.27.10-alpha

- Se reordenó el changelog.

### v0.27.11-alpha

- Se agregó una nueva clase al widget.

### v0.27.12-alpha

- Se agregó `.gitignore` para evitar hacer commit a archivos locales.

---

## v0.26-alpha - Versión Principal

- Se agregaron efectos de sonido a los botones, toasts y banners.
- Estos archivos de sonido se encuentran en `assets/audio`.
- Se separó una nueva sección en el aside: Accesibilidad, que incluye el modo escala de grises y un nuevo botón para controlar y desactivar los efectos de sonido.
- Se agregó el archivo `sound.js` y funciones para controlar el sonido.
- Se agregó más padding vertical al aside.
- Se agregaron variables para controlar el outline de los elementos para la navegación con tab.
- Se eliminó código innecesario.
- Se incluyó un nuevo Roadmap en el archivo `README.md`.

---

## v0.25-alpha - Versión Principal

- Se formatearon todos los archivos JS, CSS y HTML.
- Se reordenaron las propiedades de todos los archivos CSS con el enfoque Outside-In: 1. Posicionamiento y Maquetación (Layout & Position) 2. Modelo de Caja y Dimensiones (Box Model & Sizing) 3. Espaciado Interno y Bordes (Padding & Border structure) 4. Tipografía y Texto (Typography) 5. Colores y Estilos Visuales (Visuals & Colors) 6. Transiciones y Animaciones (Misc & Transitions)

---

## v0.24-alpha - Versión Principal

- Se agregaron dos nuevos modos de color: alto contraste y escala de grises (monocromático). El primero modifica toda la paleta de colores y el segundo aplica un filtro a la página. Ambos modifican además el favicon
- Se reworkeó todo el archivo theme.js y sus funciones para permitir añadir más temas de color en un futuro
- Se agregaron nuevos atributos a los botones del aside
- Se cambió el texto del footer-copyright en 404.html

### v0.24.1-alpha

- Se prepararon todos los archivos html y components para la adición futura de un nuevo aside
- Se actualizó el favicon de escala de grises
- Ahora los colores de ::selection y la barra de progreso de lectura se manejan con variables
- En modo de alto contraste, se cambió el fondo del hero, así como varios colores de texto, fondo y outlines
- Se agregó un nuevo titulo para separar más los botones del aside-config
- Se unificó el estilo del weather-widget con los botones
- Se eliminó el fondo de la scrollbar

    ### v0.24.2-alpha

- Se modificaron unos colores en high contrast

---

## v0.23-alpha - Versión Principal

- Se añadió un botón de modo descanso que añade un filtro de color a toda la página
- Se añadió una barra de scroll al aside de opciones
- Se renombró la clase modo-oscuro a dark-mode

### v0.23.1-alpha

- Se actualizó el footer en 404.html

### v0.23.2-alpha

- Se modificó el nombre de muchas variables y funciones js a inglés
- Se agregó un title al logo completo del footer
- Se achicaron un poco los logos del header
- Se agregaron funciones provisorias de accesibilidad en accesibility.js

---

## v0.22-alpha - Versión Principal

- Se agregó contenido de placeholder y un menú personalizado a todas las subpáginas con el objetivo de mejorar la navegación
- Se arreglaron los button-active del menú al fondo de cada página
- Se corrigió el footer en 404.html
- Se eliminaron los íconos innecesarios en assets/img/icons, volviendo a tener .gitkeep

### v0.22.1-alpha

- Se cambió la fuente de texto en la pantalla de carga, de nunito Sans a Nunito

### v0.22.2-alpha

- Se cambió la fuente de texto en el titulo de la pantalla de carga, de nunito Sans a Nunito

### v0.22.3-alpha

- Se agregó un filtro de color al iframe del Google Forms en modo oscuro
- Se agregó el diseño por columnas en el footer para celular y se achicaron los iconos en este

### v0.22.4-alpha

- Se corrigió el color de los iconos del footer

---

## v0.21-alpha - Versión Principal

- Se separaron correctamente todos los estilos de celular y base (base.css) y los de pc (desktop.css)
- Se implementó y trabajó correctamente el layout de celular para darle una apariencia ordenada y corregida
- Se restructuró todo el css del sitio, separando los selectores y propiedades por secciones de contenido y elementos
- Se renombraron muchos ids y clases para mas claridad y especificidad
- Ahora el texto tiene las clases "text" y "Paragraph" para poder centrarlos y hacer que tengan cursor:text. Además, los párrafos tienen text-wrap:balance para tener mejor estructura
- Ahora el cursor:text es más grande
- Ahora el fondo del hero-section ya no se mueve al hacer scroll
- Se oscureció el color del texto del footer en modo oscuro
- Ahora la pantalla de carga en modo oscuro es azul en lugar de celeste
- Se cambiaron muchísimos padding, margin, border-radius y tamaños entre el diseño en pc y en celular
- Ahora en celular el título no está en uppercase y hay un solo logo en lugar de dos
- Los enlaces del footer ahora se encuentran divididos en dos columnas: una para redes de contacto y otra para los enlaces del proyecto
- Se corrigieron muchos ids y clases en los archivos .js

### v0.21.1-alpha

- Se corrigió el README

### v0.21.2-alpha

- Ahora la pantalla de carga es un elemento que se inyecta en cada subpágina, así como en la principal, con una nueva función en components.js
- Ya no es un elemento que se encuentra únicamente en el index.html
- En las subpáginas el h2 es Cargando...
- Se agregó un archivo changelog.txt para llevar registro de los cambios en cada versión, tanto permanentes como temporales

### v0.21.3-alpha

- Se agregaron unos íconos de prueba al footer

### v0.21.4-alpha

- Se agregaron más iconos y se corrigieron los anteriormente agregados

### v0.21.5-alpha

- Se centraron verticalmente los íconos del footer
- Se eliminó el reborde rojo en todos los elementos (error)

### v0.21.6-alpha

- Se eliminaron las palabras redundantes del footer al estar los íconos
- Ahora los íconos son más gruesos

### v0.21.7-alpha

- Se agregó un pequeño título a cada columna del footer
- Se corrigió el changelog

### v0.21.8-alpha

- Se corrigió el changelog

### v0.21.9-alpha

- Se corrigió el título de columna del footer

### v0.21.10-alpha

- Se cambió la función de obtener año para evitar el año duplicado en el copyright del footer

### v0.21.11-alpha

- Se agregó más padding al footer en pc
- Se achicaron los titulos de columnas

---

## v0.20-alfa - Versión Principal Mayor

La actualización más grande hasta el momento: se actualizó casi toda la interfaz de la página (la actu estuvo enfocada en el diseño en pc)

ESTRUCTURA:

- Ahora el nav se encuentra en una tarjeta aparte del Header
- Se agregó un subtítulo al header y ahora es más ancho
- El footer se encuentra en una tarjeta separada, más ancha, al final de la página
- Se movieron los botones de modo oscuro, copiar enlace y el widget de clima a un aside de opciones, desplegable (el cual se inyecta con fetch al igual que el header y el footer)
- En este mismo aside, se agregaron dos botones para futuros temas de color
- En el footer, se agregaron enlaces al repositorio github y a la licencia MIT. También, se separó la línea de copyright de la de desarrollo, haciendo esta ultima un poco mas pequeña (ahora los textos del copyright se manejan por clases)
- Se agregó la carpeta assets/img/bg para incluir fondos tecnológicos para tarjetas futuras
- Ahora 404.html no tiene menú, aside y tiene un footer personalizado únicamente con el copyright
- Se cambió la forma en que se manejan las clases e ids: ahora todos los elementos tienen una clase y un id idénticos y específicos, y clases adicionales para estilos generales
- CSS ahora trabaja únicamente con las clases genéricas y específicas, reservando los ids unicamente para javascript

DISEÑO:

- Se cambiaron todos los colores de fondo y tarjetas en modo claro, paasando de gris/blanco a degrades con celeste/blanco
- Ahora la tarjeta de hero tiene un fondo tecnologico
- Se agregó más interlineado al texto, el cual tiene una nueva clase "text" . Además, este ahora se encuentra centrado
- Se agregó un ancho fijo a los botones del aside
- Ahora el input:focus tiene un borde diferente y además un sombreado (el input ahora se trabaja por clase)
- Se cambió el ancho de la barra de progreso de lectura
- Se cambió el padding/margin de muchas tarjetas

FUNCIONES:

- Se modularizó más el archivo main.js en buttons.js, banners.js y shortcuts.js el primero conteniendo los botones y el widget, el segundo conteniendo el toast, el offline-banner y la barra de lectura, y el ultimo los atajos de teclado
- Sus funciones ahora se importan
- Se cambió el funcionamiento del widget del clima
- Se agregó un atajo de teclado para copiar el enlace de la web, y otros para el modo de escala de grises/alto contraste (aun no implementados)
- Nueva función para que el aside quede arriba al llegar al footer, de forma que no lo tape.

### v0.20.1-alfa

- Se corrigió el README

### v0.20.2-alpha

- Se cambió el color de fondo del toast
- Se renombró la fase "alfa" a "alpha"

### v0.20.3-alpha

- Se cambió el color de fondo del toast
- Se renombró la fase "alfa" a "alpha"

### v0.20.4-alpha

- Se agregó .github/workflows/static.yml

### v0.20.5-alpha

- Se agregó contenido a humans.txt

### v0.20.6-alpha

- Se automatizó el incremento en el año en el copyright del footer, con una nueva funcion en main.js

### v0.20.7-alpha

- Se corrigió el footer de 404
- Se agregó margin-top al botón de volver a inicio
- Se eliminaron líneas vacías de varios archivos

### v0.20.8-alpha

- Cambios menores

### v0.20.9-alpha

- Se actualizó el funcionamiento del Meta Theme Color para que se actualice según el tema elegido

### v0.20.10-alpha

- Se automatizó el numerado de versión del footer

### v0.20.11-alpha

- Se deshizo el cambio de automatización de la anterior actualización debido a errores y porca practicidad

---

## v0.19-alfa - Versión Principal

- Se agregó una pantalla de carga sencilla para cubrir el contendio mientras se cargan los componentes de la página. La misma se oculta con una animación con una nueva función en main.js
- Se cambió el z-index del header, pasando de 1000 a 100
- Se agregó un border radius a la barra de progreso de lectura

---

## v0.18-alfa - Versión Principal

- El header ahora se encuentra en un contenedor aparte de .content, tiene posición sticky por lo que se mantiene al hacer scroll
- e añadió una barra del progreso de lectura en el head
- Se agregó un widget de tiempo atmosférico de Villa Dolores en el header
- Se reworkeó la función de deshabilitar el menú contextual en imágenes para hacerla mas completa
- Se personalizó la scrollbar (colores, ancho, etc)
- Se agregaron más transiciones y animaciones
- Se cambiaron de lugar las section cards en base.css
- Ahora el boton de modo oscuro y el weather widget están en un contenedor aparte del nav

### v0.18.1-alfa

- README

### v0.18.2-alfa

- README

### v0.18.3-alfa

- Ahora el estado de desarrollo es considerado Alfa en lugar de Beta

### v0.18.4-alfa

- Se cambió el tamaño de fuente en celular

### v0.18.5-alfa

- Se cambió el tamaño de fuente en celular

---

## v0.17-alfa - Versión Principal

- Archivo LICENSE con protección legal para el sitio web
- Se corrigieron muchas secciones del README y se actualizó el arbol de carpetas y archivos

### v0.17.1-alfa

- Ahora el Logo del footer redirige a la página principal
- Se arreglaron los cursores en modo claro
- Ahora los input y botones vuelven a tener borde en modo claro
- Se agregaron nuevas variables para el hover de los links

---

## v0.16-alfa - Versión Principal

- Se cambiaron todas las clases e ids a inglés
- Se cambió totalmente la forma en que se manejan los botones y enlaces para tener un mejor funcionamiento y coherencia, así como arreglar varios errores
- Se cambiaron algunos estilos
- Pequeño cambio secreto

### v0.16.1-alfa

- Se eliminó el borde de los botones e input
- Se agregó un id a la sección de Contacto (index) ya que el enlace del header no funcionaba
- Se agregó un degradé al footer

### v0.16.2-alfa

- Se arregló el atajo ALT + D y el botón de copiar enlace
- Se eliminaron atributos innecesarios

### v0.16.3-alfa

- Se arregló el atajo ALT + D y el botón de copiar enlace
- Se eliminaron atributos innecesarios

### v0.16.4-alfa

- Se agregó una función en caso de que la carga de componentes falle
- Se reelaboró el README para incluir todos los detalles del proyecto

---

## v0.15-alfa - Versión Principal

- Se agregaron variables para el modo oscuro

### v0.15.1-alfa

- Se actualizó el numero de version

### v0.15.2-alfa

- Se actualizaron algunos colores del modo oscuro

### v0.15.3-alfa

- Se agregó una transición al color de los botones y enlaces
- Se achicó el border-radius del formulario
- Ahora las tarjetas en modo oscuro tienen gradientes en lugar de colores solidos

### v0.15.4-alfa

- Se agregó loading=lazy a las imagenes
- Se arreglo el degradado de fondo de .contenido
- Se remplazaron todas las unidades en px por unidades en rem
- Se agregó min-height al body, con 100vh y otras propiedades para asegurar que el footer que en el fondo de la pagina

---

## v0.14-alfa - Versión Principal

- Ahora todas las secciones se encuentran en tarjetas con colores (provisorios), sombras y animaciones
- Las sub-secciones también
- Se agregaron nuevas clases a todas las secciones
- Se agregaron variables por elemento para trabajar los colores unicamente desde las variables base (aun no funciona para el modo oscuro)
- Se agregó un plano general como placeholder del plano de la escuela
- Se renombraron todos los svg de la mascota del centro
- Ahora el iframe del formulario está redondeado
- Se actualizaron las rutas de archivo de los cursores, ahora funcionan de nuevo
- Ahora todos los títulos están centrados
- El texto de los botones está en negrita y posee más padding, además de distinto color de borde
- Se agregaron animaciones a los details y summary

### v0.14.1-alfa

- Se agregaron las clases section-card a las sub-páginas
- Se agregó contenido a robots.txt
- Ahora el texto de los botones está en mayuscula y es un poco mas pequeño, se cambió el color del borde, y además tienen un pequeño margin arriba y abajo
- Al hacer clic en los botones aparece una pequeña animacion
- Se movió el css de #plano-escuela de desktop.css a base.css para arreglar el plano en celulares
- Se agregó una función en main.js para evitar que las imágenes sean descargadas
- Se arregló la ruta de los cursores e dark-mode.css, ahora funcionan de nuevo
- Se agregó un color personalizado al seleccionar texto en la web
- Se agregaron easter eggs en el código

### v0.14.2-alfa

- Se agregó un color oscuro para ::selection en dark mode
- Se actualizó un easter egg y se agregó uno nuevo

### v0.14.3-alfa

- Se agregó un atajo de teclado Alt + D para el modo oscuro

### v0.14.4-alfa

- Se agregó un botón para copiar el enlace del sitio al portapapeles
- Se agregó un banner de "sin conexión" en la parte superior al perder la conexión a internet
- Cambios en los easter eggs

### v0.14.5-alfa

- Se cambió el estilo del offline banner y el toast
- Ahora normalize.css se importa desde styles.css en lugar de desde el head
- Cambio secreto

### v0.14.6-alfa

- Se preparó el código para trabajar de forma diferente los modos de color
- Se eliminó el archivo high contrast y se renombró el de dark mode a themes.css

---

## v0.13-alfa - Versión Principal

- Se agregaron botones de enlace a todas las sub-páginas, dentro del index y en cada una
- Se cambió la tipografía del body a Nunito dejando Nunito Sans unicamente para encabezados

---

## v0.12-alfa - Versión Principal

- Se modularizó el archivo main.js al igual que styles.js. La función de tema se encuentra en theme.js y la de cargar componentes en components.js, envueltas dentro de export
- Se actualizó la ruta de los script en los html para incluir type="module"

### v0.12.1-alfa

- Numero de version en footer

### v0.12.2-alfa

- Se agregaron algunas carpetas vacías para contenido futuro
- Se creó el archivo manifies.json en assets/data, para manejar el ícono que se le pone a la página al crear un acceso directo en celular
- Los svg de cursores fueron movidos a su propia carpeta
- Los png del favicon fueron renombrados y movidos a su propia carpeta
- Se agregaron etiquetas meta="theme-color" al index para cambiar el color de la pestaña en celular, según el modo

### v0.12.3-alfa

- Se agregó meta="theme-color" y el enlace a manifiest.json a todas las sub-paginas

### v0.12.4-alfa

- Se agregaron archivos json para el futuro, así como archivos txt futuros y archivos de seguridad

### v0.12.5-alfa

- Se corrigió el meta theme color

### v0.12.6-alfa

- Corregido un el meta theme color en credits.html

### v0.12.7-alfa

- Se cambió el tamaño y el nombre del icono para la pagina instalada en celular

### v0.12.8-alfa

- Igual que el anterior

### v0.12.9-alfa

- Se corrigió el nombre del icono en manifest.json para que funcione

---

## v0.11-alfa - Versión Principal

- Se agregaron íconos personalizados para el cursor (auto, pointer y text)
- Se reordenó el head de los documentos
- Se arregló el color de texto del footer en modo oscuro, cambiando su id por una clase
- Se arregló el favicon

### v0.11.1-alfa

- Se cambió el funcionamiento del modo oscuro para que actualice el favicon y además que funcione según el modo de preferencia en el dispositivo
- Se agregó un id al favicon

---

## v0.10-alfa - Versión Principal

- Se reorganizó toda la estructura de styles.css. Ahora contiene @import a archivos modulares con ramas de estilos (fonts, variables, modos de color y diseños por resolucion)
- Se crearon archivos .js para modularizar main.js en un futuro, además de links type="module" en los archivos .html, comentados por ahora para usarlos en un futuro
- Se eliminó el archivo script.js
- Se creó la página de error 404.html con la intención de hacerla personalizada en el futuro
- Se agregaron títulos de pestaña personalizados a las sub-páginas

### v0.10.1-alfa

- Se actualizó el número de versión en footer y readme

---

## v0.9-alfa - Versión Principal

- Se crearon sub-páginas provisorias para la futura creación del SITIO web
- Se agregaron muchas carpetas nuevas para una mejor organización futura (gallery, icons, etc) con archivos .gitkeep dentro
- Ahora las fuentes de texto se encuentran en assets/fonts y se conectan con @font-face, en lugar de conectarse desde Google Fonts
- Se renombraron los logos del CE y todos los pdfs a fin de acortar los nombres
- Los pdfs ahora tienen el atributo download="" el cual contiene el nombre de descarga
- Se reorganizaron todas las secciones de styles.css, añadiendo grandes títulos para separar mejor
- Ahora los nombres de carpetas y archivos generales están en inglés

### v0.9.1-alfa

- Se actualizó el botón de Modo Oscuro para utilizar el LocalStorage y de esta forma guardar el modo al reiniciar la página o ingresar a una sub-página
- Se actualizó el número de versión en el footer y readme

---

## v0.8-alfa - Versión Principal

- Restructuración del index: ahora el header y el footer se encuentran en archivos individuales
- Se creó una carpeta "components" con header.html y footer.html, los cuales se conectan al index con una nueva funcion para cargar componentes en main.js (usando la función FETCH)
- Se reordenaron algunas líneas de styles.css y main.js y se eliminaron algunas líneas vacías
- Se unificaron Nunito y Nunito Sans en un mismo enlace a G. Fonts
- Se eliminaron etiquetas meta obsoletas
- Se agregó una descripcion en meta description
- Se eliminaron los link "preload"
- Se cambió la ubicación del link a main.js pasando a estar en el head con el atributo DEFER

### v0.8.1-alfa

- Se cambió el ancho del Google Form
- Se actualizó el numero de version en el footer
- Se actualizó y mejoró el archivo README

### v0.8.2-alfa

- Se corrigió el botón de modo oscuro, ya funciona de nuevo
- En la carpeta js se añadio el archivo script.js para hacer pruebas de codigo

### v0.8.3-alfa

- Se volvió a corregir el botón de modo oscuro (aún no funcionaba debido a que el código viejo del botón no había sid eliminado)

---

## v0.7-alfa - Versión Principal

- Ahora el contenido está en una caja con bordes redondeados separada de los bordes
- El copyright está centrado

### v0.7.1-alfa

- Unificación de estilos de botones

### v0.7.2-alfa

- Se agregó el logo completo del C.E. en el footer
- Se unificó el estilo de los input con el de los botones
- Se cambió el nombre de algunas clases

### v0.7.3-alfa

- El botón del menu hamburguesa ahora es invisible en pc y no hay padding entre el titulo y el menú
- Se cambió el padding del título en celular

### v0.7.4-alfa

- Se corrigió el padding del título en celular
- Se agregó padding a la página entera en celular para que no choque con los bordes de la pantalla
- Se centró el botón de modo oscuro y el logo completo del footer

### v0.7.5-alfa

- Se agregó el número de beta en el footer

### v0.7.6-alfa

- Se actualizó el png del logo completo del CE para darle mas resolucion
- Se achicó el tamaño del texto y el color del footer

---

## v0.6-alfa - Versión Principal

- Estructura completa de la página (placeholder)
- Formulario de contacto (placeholder)
- Pdfs descargables
- Nuevos pdfs: autorizaciones, cus, isa, fichas, etc
- Secciones nuevas (placeholder)
- Diseño de los logos adaptado a celular

### v0.6.1-alfa

- Cambiado el tamaño de letra en celular

### v0.6.2-alfa

- Cambiado el tamaño de los iconos en celular

### v0.6.3-alfa

- Cambios en colores

### v0.6.4-alfa

- Cambios en colores

### v0.6.5-alfa

- Ordenamiento de código

### v0.6.6-alfa

- Padding en el contenedor del contenido
- Cambios al modo oscuro

---

## v0.5-alfa

- Header
- Titulo
- Menú básico

### v0.5.1-alfa

- Modificaciones a los botones
- Más colores en modo oscuro
- Nuevas clases
- Más colores a los enlaces
- Reorganizado el menú para PC

---

## v0.4-alfa

- Modo oscuro (primera funcion en main.js)
- Cambiado el color de fondo a un gris claro

### v0.4.1-alfa

- Arreglado el boton de Modo oscuro

---

## v0.3-alfa

- Fuentes Nunito
- Correo y ubicacion en el footer
- Logo del CE
- Pdf del estatuto
- Carpeta con svg de la mascota del CE
- Colores del CE como variables en styles.css

### v0.3.1-alfa

- Readme, versión inicial

### v0.3.2-alfa

- Estructura básica de los media querys
- Pdf AECs
- Carpetas "libs" y "icons"

### v0.3.3-alfa

- Margin fix

---

## v0.2-alfa

- Normalize.css
- Link a main.js
- Footer básico
- Link rel "preload"

---

## v0.1-alfa

- Estructura básica de carpetas

### v0.1.1-alfa

- Título de pestaña (title)

### v0.1.2-alfa

- Meta tags (description, keywords, author, title)
- Link for styles.css and favicon
- Agregado el escudo del colegio (escudo.png)
