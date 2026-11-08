# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml)
![Versión](https://img.shields.io/badge/versi%C3%B3n-0.40%20%28Alpha%29-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Tecnologías](<https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JS%20(ES6%2B)-orange>)

Portal web institucional desarrollado para concentrar, digitalizar y facilitar el acceso a la información académica, solicitudes, formularios, trámites y herramientas interactivas para la comunidad educativa del **IPET N° 424**.

---

## 📌 Índice de Contenidos

- [Vista General y Propósito](#-vista-general-y-propósito)
- [Estado del Proyecto](#-estado-del-proyecto)
- [Funcionalidades Principales](#-funcionalidades-principales)
- [Tecnologías e Infraestructura](#-tecnologías-e-infraestructura)
- [Automatización e Integración Continua (CI/CD)](#-automatización-y-integración-continua-cicd)
- [Arquitectura y Estructura del Proyecto](#-arquitectura-y-estructura-del-proyecto)
- [Historial de Versiones (Changelog)](#-últimos-cambios-y-actualizaciones)
- [Roadmap de Desarrollo](#-roadmap-de-desarrollo)
- [¿Querés colaborar?](#-querés-colaborar)
- [Contacto y Autoría](#-contacto-y-autoría)

---

## 🎯 Vista General y Propósito

El portal del Centro de Estudiantes nace con la necesidad de **centralizar y modernizar los canales de comunicación estudiantiles**. Tradicionalmente, la información sobre trámites, horarios, planes de estudio y solicitudes escolares se encontraba dispersa.

Este proyecto busca resolver dicha problemática mediante una **plataforma accesible, liviana, responsiva y orientada a la experiencia de usuario (UX/UI)**, optimizada para funcionar correctamente en dispositivos móviles y de escritorio.

---

## 🚀 Estado del Proyecto

| Parámetro                      | Detalle                            |
| :----------------------------- | :--------------------------------- |
| **Versión Actual**             | `0.40` (Fase Alpha, en desarrollo) |
| **Inicio de Desarrollo**       | Viernes 7 de agosto de 2026        |
| **Lanzamiento Estable (v1.0)** | Martes 9 de marzo de 2027          |
| **Entorno de Hosting**         | Cloudflare Pages / GitHub Pages    |
| **Mantenimiento**              | Activo (CI/CD Automático)          |

---

## ✨ Funcionalidades Principales

### 🔍 1. Módulo de Horarios Escolar Interactivo (futuro)

- **Buscador/Filtro Dinámico:** Consulta personalizada por curso, división, turno o materia.
- **Visualización Limpia:** Tablas de horarios adaptables con resaltado visual.

### 🌓 2. Sistema de Interfaz Adaptativa (Dark / Light Mode)

- **Modo Oscuro Integrado:** Detección de preferencia del sistema operativo y alternancia dinámica vía JS.
- **Persistencia de Selección:** Guardado de preferencias mediante `localStorage`.

### 📂 3. Centro de Documentación y Descargas

- Acceso directo a formularios institucionales, solicitudes de pase, certificados e instructivos en formato PDF.
- Enlaces organizados por categorías de trámite.

### ✉️ 4. Formulario Institucional y Canal de Sugerencias

- Sistema de contacto directo con la comisión directiva del Centro de Estudiantes.
- Validación de campos en tiempo real mediante JavaScript.

### ❓ 5. Sección FAQ y Mapa Interactivo (futuro)

- Preguntas frecuentes sobre matriculación, régimen de asistencia y convivencia escolar.
- Ubicación y mapa del establecimiento educativo.

---

## 🛠️ Tecnologías e Infraestructura

- **Frontend Nativo:** `HTML5` semántico, `CSS3` (utilizando variables nativas CSS y Flexbox/Grid) y `JavaScript (ES6+)` sin dependencias pesadas de terceros para garantizar una carga ultrarrápida.
- **Alojamiento y Servidores:** Infraestructura distribuida en **Cloudflare Pages** y servidor estático en **GitHub Pages**.
- **Control de Versiones:** Git & GitHub Workflow.

---

## ⚙️ Automatización y Integración Continua (CI/CD)

El proyecto cuenta con integración continua configurada mediante **GitHub Actions** (`static.yml`).

Cada commit o pull request realizado sobre la rama principal (`main`) ejecuta un proceso automatizado que:

1. Verifica la integridad de los archivos estáticos.
2. Despliega automáticamente los últimos cambios al servidor de producción en cuestión de segundos.

---

## 📂 Arquitectura y Estructura del Proyecto

El código está estructurado de forma modular y limpia. Para consultar el árbol completo de archivos y módulos, revisá la [Guía de Arquitectura del Proyecto](./ARCHITECTURE.md).

---

## 📜 Últimos Cambios y Actualizaciones

- **`v0.40-alpha` (Actual)**
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
    - El título de pestaña del index ya no incluye "Inicio"
    - Las tarjetas de descarga de la primer sección del Inicio ahora están organizadas en un grid de 2 columnas
    - La clase `grid-tarjetas` se renombró a `grid-cards` y está mejor trabajda desde css
    - Se agregó este estilo de tarjetas cuadradas a varias secciones en subpáginas
    - Se cambió el gradiente de fondo del footer, haciéndolo más oscuro
    - El spinner de carga es más grande y ancho
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
    - Se actualizó el árbol de carpetas y archivos.

- **`v0.39-alpha` (Anterior)**
    - Nuevos widgets:
        - Widget de Efeméride diaria (Día de...)
        - Widget de vistas del sitio (diarias, mensuales, anuale y totales)
    - Nuevas funciones js para manejar los widgets
    - Archivo `days.json` para guardar las efemérides (aún en progreso)
    - Se reordenó la carga de los widgets en las funciones js
    - Se agregaron variables a algunos elementos con tamaños de fuente fijo
    - Se eliminaron algunas propiedades innecesarias
    - Se mejoraron los comentarios de css y se eliminaron muchos

Consultá el [Historial Completo de Cambios (CHANGELOG.md)](./CHANGELOG.md) para ver la bitácora detallada de todas las versiones y parches.

---

## 🗺️ Roadmap de Desarrollo

### 🚀 Próximas Versiones

Para conocer las funcionalidades en la que está trabajando el equipo, te invitamos a concoer nuestra [Hoja de Ruta de Desarrollo](./ROADMAP.md).

---

## 🤝 ¿Querés colaborar?

Si sos parte del equipo o querés aportar al proyecto, leé nuestra [Guía de Contribución y Convenciones](./CONTRIBUTING.md) antes de enviar tus commits.

---

## 👤 Contacto y Autoría

Proyecto diseñado, programado y mantenido por:

- **Juan Martín Rodríguez**  
  _Presidente del Centro de Estudiantes — IPET N° 424 (Gestión 2026)_
    - **GitHub:** [@JohnMartinRB](https://github.com/JohnMartinRB)
        - **Repositorio oficial:** [CE-IPET424](https://github.com/JohnMartinRB/CE-IPET424)
- **Gabriel Campana**  
  _Secretario de RR. EE. del Centro de Estudiantes — IPET N° 424 (Gestión 2026)_
    - **GitHub:** [@campanag721-tech](https://github.com/campanag721-tech)

---
