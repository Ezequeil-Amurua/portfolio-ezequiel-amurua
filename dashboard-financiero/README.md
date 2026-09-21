# Dashboard Financiero Personal

Este proyecto es un Dashboard Financiero Personal que integra diversas fuentes de información financiera y herramientas interactivas para facilitar el seguimiento de activos y cotizaciones en tiempo real.

## Estructura del Proyecto

El proyecto está organizado en varias secciones, cada una con su propia funcionalidad:

- **index.html**: Página de inicio del dashboard.
- **dashboard.html**: Contiene la estructura y diseño del dashboard financiero, integrando componentes como el panel de cotizaciones y gráficos interactivos.
- **proyectos.html**: Lista de proyectos financieros y iniciativas.
- **contacto.html**: Información de contacto y formulario para que los usuarios se comuniquen.
- **styles.css**: Estilos generales del sitio web.
- **script.js**: Archivo JavaScript principal que inicializa la aplicación.
- **package.json**: Configuración del proyecto y dependencias necesarias.
- **css/dashboard.css**: Estilos específicos para el diseño del dashboard.
- **js/dashboard.js**: Lógica JavaScript específica del dashboard.
- **js/api/**: Contiene archivos para la obtención de datos de APIs externas.
  - **dolar-api.js**: Funciones para obtener datos de DolarApi.
  - **mercado-api.js**: Funciones para obtener datos del mercado.
- **js/components/**: Componentes reutilizables del dashboard.
  - **quotes-panel.js**: Componente que muestra cotizaciones en tiempo real.
  - **market-news.js**: Maneja la visualización de noticias del mercado.
  - **tradingview-widget.js**: Integra el widget de TradingView para gráficos interactivos.
- **js/utils/**: Funciones utilitarias para formatear datos.
  - **formatters.js**: Funciones para formatear moneda y fechas.
- **data/market-sources.json**: Datos estructurados sobre diversas fuentes de mercado.
- **reports/**: Sección para informes financieros.
  - **README.md**: Documentación sobre cómo subir y acceder a informes en formato PDF.

## Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Abre `index.html` en tu navegador para ver el dashboard en acción.
4. Asegúrate de tener acceso a Internet para que las APIs funcionen correctamente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.