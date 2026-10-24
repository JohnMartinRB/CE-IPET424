# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml)
![Versión](https://img.shields.io/badge/versi%C3%B3n-0.36%20%28Alpha%29-blue)
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
| **Versión Actual**             | `0.36` (Fase Alpha, en desarrollo) |
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

El código está estructurado de forma modular y limpia[cite: 3]. Para consultar el árbol completo de archivos y módulos, revisá la [Guía de Arquitectura del Proyecto](./ARCHITECTURE.md).

---

## 📜 Últimos Cambios y Actualizaciones

- **`v0.36-alpha` (Actual)**
    - Nuevos temas de estacionales por temporadas
        - Verano: enero y febrero
        - Mes rosa: octubre
        - Misterio: última semana de octubre
        - Festividades: semanas de diciembre y la primera de enero
    - Estos temas se encuentran en `seasonal.css`
    - Se agregaron botones en el aside de opciones para activar los temas estacionales
    - Se inviertieron las fuentes: Nunito como Titles y Nunito Sans como Main
    - El texto de `terminos.html` ahora se encuentra directamente en la tarjeta principal
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
    - Se agregó `.gitkeep` a algunas carpetas vacías que no lo tenían

- **`v0.35-alpha` (Anterior)**
    - Nueva subpágina de Términos y Condiciones para protección legal y de conducta del sitio
    - Nuevo modal para aceptar términos y condiciones al entrar por primera vez al sitio
    - El footer ahora tiene una columna más, de título Legal, con link a Terminos y Licencia (se movió a esta columna)
    - En la columna proyecto ahora se encuentra un enlace a Créditos
    - Modificación en la función js para inciar los modales en orden
    - Se renombraron los svg del widget y se actualizaron las rutas
    - Renombrado `home.css` a `specific.css`
    - Iconos del footer en carpeta `assets/icons/footer` (sin usar de momento)

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
