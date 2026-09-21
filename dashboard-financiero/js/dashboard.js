// JavaScript logic for the financial dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard components
    initQuotesPanel();
    initMarketNews();
    initTradingViewWidget();
});

// Function to initialize the quotes panel
function initQuotesPanel() {
    // Fetch and display quotes for Dólar MEP, CCL, Cauciones, and Bonos Soberanos
    fetchQuotesData().then(data => {
        // Update the quotes panel with fetched data
        updateQuotesPanel(data);
    }).catch(error => {
        console.error('Error fetching quotes data:', error);
    });
}

// Function to fetch quotes data from the API
async function fetchQuotesData() {
    const response = await fetch('js/api/dolar-api.js'); // Adjust the path as necessary
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Function to update the quotes panel with fetched data
function updateQuotesPanel(data) {
    // Logic to update the DOM with the quotes data
    const quotesPanel = document.getElementById('quotes-panel');
    quotesPanel.innerHTML = `
        <h3>Cotizaciones</h3>
        <p>Dólar MEP: ${data.dolar_mep}</p>
        <p>Dólar CCL: ${data.dolar_ccl}</p>
        <p>Cauciones: ${data.cauciones}</p>
        <p>Bonos Soberanos: ${data.bonos}</p>
    `;
}

// Function to initialize the market news section
function initMarketNews() {
    // Fetch and display market news
    fetchMarketNews().then(news => {
        // Update the market news section with fetched data
        updateMarketNews(news);
    }).catch(error => {
        console.error('Error fetching market news:', error);
    });
}

// Function to fetch market news from the API
async function fetchMarketNews() {
    const response = await fetch('js/api/mercado-api.js'); // Adjust the path as necessary
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Function to update the market news section with fetched data
function updateMarketNews(news) {
    const newsContainer = document.getElementById('market-news');
    newsContainer.innerHTML = news.map(article => `
        <article>
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.link}" target="_blank">Leer más</a>
        </article>
    `).join('');
}

// Function to initialize the TradingView widget
function initTradingViewWidget() {
    // Logic to integrate TradingView widget
    const widgetContainer = document.getElementById('tradingview-widget');
    new TradingView.widget({
        "container_id": "tradingview-widget",
        "width": "100%",
        "height": "400",
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "es",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "save_image": false,
        "studies": [],
        "container_id": "tradingview_12345"
    });
}