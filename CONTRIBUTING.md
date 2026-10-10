# 🤝 Guía de Contribución y Convenciones — CE-IPET424

¡Bienvenido/a al equipo de desarrollo del sitio web del Centro de Estudiantes del IPET N° 424!

Este documento establece las pautas y estándares de trabajo para mantener el código limpio, organizado y evitar conflictos al programar en equipo.

---

## 📌 1. Flujo de Trabajo en Git y GitHub

1. **Antes de empezar a programar:**  
   Siempre hacé un `git pull` para asegurarte de tener la versión más reciente subida al repositorio.
2. **Durante el desarrollo:**  
   Asegurate de que tus cambios sean acordes a la tarea asignada.
   Evitá modificar archivos no relacionados.
   En caso de que surjan funciones o cambios random, consultalo previamente.
3. **Al finalizar una tarea:**  
   Realizá un `commit` con el número de parche y la lista de cambios.
   Realizá un `push` para sincronizar los avances.
   Si tenés dudas con el número de versión parche, revisá el historial en GitHub antes de enviar los cambios.

---

## 🏷️ 2. Mensajes de Commit y Versionado (SemVer)

Es importante seguir el estándar de **Semantic Versioning** adaptado a la fase actual de desarrollo:

### Formato del mensaje de commit:

```text
[VERSIÓN-FASE] Seguido de la descripción clara de lo que se modificó o agregó

### Ejemplos válidos:
* `0.29.0-alpha
    Se rediseñó la tarjeta del header`
* `0.29.1-alpha
    Se corrigió la alineación de los botones en celular`
* `0.30.0-beta
    Se cargó el contenido institucional en el sitio`
```

---

## 💻 3. Convenciones de Código y Nomenclatura

Para facilitar el mantenimiento del código, respetamos las siguientes reglas según la tecnología:

### 🌐 HTML / CSS

- **Clases e IDs (CSS/HTML):**
  Deben estar escritos en **inglés** usando el formato `kebab-case`.
    - _Ejemplo:_ `.buttpn-primary`, `#main-header`, `.card-title`.
- **Variables CSS (Design Tokens):**
  Se definen en `css/base/variables.css` usando `kebab-case`.
  Utilizá siempre las variables globales en lugar de valores fijos (`hardcodeados`) .

### ⚡ JavaScript (ES6+)

- **Variables y Funciones:**
  Deben estar escritos en **inglés** usando el formato `camelCase` .
    - _Ejemplo:_ `const darkModeButton`, `function toggleAccessibility()`.
- **Constantes Globales:**
  Deben estar escritos en mayúsculas con guiones bajos (`UPPER_SNAKE_CASE`).
    - _Ejemplo:_ `MAX_FONT_SIZE`.

### 💬 Comentarios y Documentación

- Todos los comentarios dentro del código (explicaciones de funciones, bloques CSS) deben escribirse en **ESPAÑOL** .

---

## 📂 4. Estructura de Archivos y Carpetas

Respetá el lugar correspondiente para cada nuevo archivo:

```text
CE-IPET424/
├── assets/                 # Recursos estáticos (audio, img, docs, fonts, json)
├── components/             # Fragmentos HTML reutilizables (_header.html, _footer.html)
├── css/                    # Hojas de estilo modularizadas
│   ├── base/               # Reset, variables, fuentes, accesibilidad
│   ├── components/         # Estilos por componente (botones, modales, cards)
│   ├── layout/             # Estilos de maquetación (header, footer, asides)
│   └── misc/               # Estilos específicos o random
├── js/                     # Lógica y scripts
│   ├── ui/                 # Controladores de interfaz y DOM
│   └── utils/              # Funciones auxiliares, accesibilidad y sonido
└── CHANGELOG.md            # Registro oficial de actualizaciones
```

## 🛠️ 5. Herramientas Recomendadas en VS Code

Para mantener la calidad del código, el formato y una interfaz de trabajo ágil, te sugerimos instalar y usar estas extensiones en Visual Studio Code:

### ⚙️ Extensiones Funcionales

- **Prettier - Code formatter:** Mantiene el formato, la sangría y el espaciado uniforme en HTML, CSS y JS.
- **Code Spell Checker:** Te alerta si escribís variables o clases en inglés con errores de ortografía.
- **Live Server:** Levanta un servidor local para previsualizar los cambios en tiempo real en el navegador.
- **Error Lens:** Resalta los errores de sintaxis y _warnings_ directamente en la línea de código sin tener que pasar el cursor sobre la falla.
- **Sort CSS:** Permite reordenar las propiedades de los selectores CSS automáticamente siguiendo un criterio uniforme (Inside-Out / Concentric).
- **vscode-google-translate:** Permite traducir selecciones de texto o nombres de variables del español al inglés directamente dentro del editor.
- **vscode-pdf:** Permite visualizar y validar documentos PDF (como los formularios institucionales) directamente desde la ventana de VS Code sin abrir el navegador.

---

### 🎨 Extensiones Estéticas y Visuales

- **Material Icon Theme:** Asigna íconos vectoriales modernos y específicos a cada archivo y carpeta según su nombre (`css`, `js`, `components`, etc.).
- **Indent Rainbow:** Colorea las sangrías (indentación) con tonos suaves para distinguir fácilmente los niveles de anidamiento en HTML, CSS y JS.
- **Image Preview:** Muestra una pequeña vista previa (miniatura) de las imágenes e íconos en el margen izquierdo del código al escribir rutas en HTML o CSS.
- **Fluent Icons:** Actualiza y estiliza los íconos de la interfaz de VS Code con el sistema de diseño Fluent de Microsoft.
