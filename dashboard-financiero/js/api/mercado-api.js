// mercado-api.js
const API_BASE_URL = 'https://api.example.com'; // Replace with actual API base URL

async function fetchMarketData() {
    try {
        const response = await fetch(`${API_BASE_URL}/market-data`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching market data:', error);
        return null;
    }
}

async function fetchDolarMEP() {
    try {
        const response = await fetch(`${API_BASE_URL}/dolar-mep`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Dólar MEP data:', error);
        return null;
    }
}

async function fetchCCL() {
    try {
        const response = await fetch(`${API_BASE_URL}/ccl`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching CCL data:', error);
        return null;
    }
}

async function fetchCauciones() {
    try {
        const response = await fetch(`${API_BASE_URL}/cauciones`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Cauciones data:', error);
        return null;
    }
}

async function fetchBonosSoberanos() {
    try {
        const response = await fetch(`${API_BASE_URL}/bonos-soberanos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Bonos Soberanos data:', error);
        return null;
    }
}

// Export functions for use in other modules
export {
    fetchMarketData,
    fetchDolarMEP,
    fetchCCL,
    fetchCauciones,
    fetchBonosSoberanos
};