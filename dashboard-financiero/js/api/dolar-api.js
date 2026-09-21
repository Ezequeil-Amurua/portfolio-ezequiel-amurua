// This file contains functions to fetch data from the DolarApi, providing real-time exchange rates and financial data.

const API_URL = 'https://api.dolarapi.com/v1/dolar'; // Replace with the actual API endpoint

async function fetchDolarData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Dolar data:', error);
        return null;
    }
}

function displayDolarData(data) {
    if (data) {
        const dolarMEP = data.mep; // Adjust according to the actual data structure
        const dolarCCL = data.ccl; // Adjust according to the actual data structure
        const cauciones = data.cauciones; // Adjust according to the actual data structure
        const bonos = data.bonos; // Adjust according to the actual data structure

        // Update the DOM or dashboard with the fetched data
        document.getElementById('dolar-mep').textContent = `Dólar MEP: ${dolarMEP}`;
        document.getElementById('dolar-ccl').textContent = `Dólar CCL: ${dolarCCL}`;
        document.getElementById('cauciones').textContent = `Cauciones: ${cauciones}`;
        document.getElementById('bonos').textContent = `Bonos: ${bonos}`;
    } else {
        console.error('No data available to display');
    }
}

// Example usage
fetchDolarData().then(displayDolarData);