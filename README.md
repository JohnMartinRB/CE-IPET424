# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml)
![Versión](<https://img.shields.io/badge/versi%C3%B3n-0.30%20(Alpha)-blue>)
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
| **Versión Actual**             | `0.30` (Fase Alpha, en desarrollo) |
| **Inicio de Desarrollo**       | Viernes 7 de agosto de 2026        |
| **Lanzamiento Estable (v1.0)** | Martes 3 de marzo de 2027          |
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

El código está estructurado de forma modular y limpia[cite: 3]. Para consultar el árbol completo de archivos y módulos, revisá la [Guía de Arquitectura del Proyecto](./ARCHITECTURE.md).

---

## 📜 Últimos Cambios y Actualizaciones

- **`v0.30-alpha` (Actual)**
    - Se agregó un nuevo aside del lado derecho de la tarjeta principal
    - El nuevo aside contiene un widget con datos curiosos (provisorios por ahora)
    - También un botón para generar otro dato
    - Ahora el botón del aside funciona como se tenía pensado en un inicio: ocupa todo el alto y ancho disponible
    - El botón del aside ahora tiene un ícono indicador
    - Ahora el escudo en el header dirige a la página web del colegio
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
    3. ROADMAP.md que incluye la hoja de ruta de desarrollo para futuras versiones y actualizaciones
    - El archivo de changelog ahora está en formato .MD y contiene el nombre completo de las versiones
    - README.md ahora contiene un changelog más reducido y se actualizó la tabla de contenidos
    - Se cambiaron algunas clases del aside
    - Se corrigió el error de la barra de progreso, ahora se encuentra centrada correctamente en el header
    - Se corrigieron rutas de sonido y de cursores
    - Se agregó la carpeta `assets/img/schedules` para una futura función
    - Se eliminó el `link rel="manifest"` de los html a fin de trabajarlo en un futuro
    - Se eliminó notes.txt

- **`v0.29-alpha` (Anterior)**
    - Se agregó un nuevo modal de bienvenida y advertencia informando que el sitio está en desarrollo
    - Se agregó un botón en accesibilidad para desactivar las Transiciones
    - Se agregó un botón en accesibilidad para cambiar a una fuente de texto para personas con dislexia
    - Se agregó un controlador para el tamaño de texto del sitio
    - Se agregó un modo de accesibilidad para personas con daltonismo
    - Se agregó un botón en la parte inferior derecha para volver arribba de todo
    - Se agregó un atajo de teclado para el modo daltónico y otro para abrir el aside
    - Se reordenaron los botones del aside de opciones
    - Se cambiaron muchos colores en modo oscuro
    - Ahora el logo del header en modo oscuro y alto contraste
    - Se agregó un atajo de teclado para abrir el aside
    - Se restructuraron las carpetas de css y js, dividiendo los archivos en varias subcarpetas
    - El css ahora se encuentra dividido en módulos por componentes
    - Se eliminaron los archivos base, tablet y desktop.css ya que ahora las propiedades se encuentran repartidas
    - Los módulos de js ahora están divididos en carpetas
    - Se rehizo la función para mostrar los modales
    - Se agregaron muchos comentarios y se eliminaron otros
    - Se renombraron las clases del modal
    - Se modificó el robots.txt para evitar la indexación
    - Se agregó la etiqueta meta name="robots" en los html con el mismo propósito
    - Se expandieron y actualizaron security.txt y humans.txt

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

---
