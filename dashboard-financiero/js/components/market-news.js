// This file handles the display of market news, fetching and rendering relevant articles or updates from financial sources.

const marketNewsContainer = document.getElementById('market-news');

async function fetchMarketNews() {
    try {
        const response = await fetch('https://api.example.com/market-news'); // Replace with actual API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newsData = await response.json();
        renderMarketNews(newsData);
    } catch (error) {
        console.error('Error fetching market news:', error);
        marketNewsContainer.innerHTML = '<p>Error loading news. Please try again later.</p>';
    }
}

function renderMarketNews(news) {
    marketNewsContainer.innerHTML = ''; // Clear previous news
    news.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Leer más</a>
        `;
        marketNewsContainer.appendChild(articleElement);
    });
}

// Initialize market news fetching
document.addEventListener('DOMContentLoaded', fetchMarketNews);