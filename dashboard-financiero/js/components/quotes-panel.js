// This file defines the quotes panel component, which displays real-time quotes for Dólar MEP, CCL, Cauciones, and Bonos Soberanos.

const quotesPanel = (() => {
    const apiEndpoints = {
        dolarMEP: 'https://api.example.com/dolar-mep', // Replace with actual API endpoint
        dolarCCL: 'https://api.example.com/dolar-ccl', // Replace with actual API endpoint
        cauciones: 'https://api.example.com/cauciones', // Replace with actual API endpoint
        bonosSoberanos: 'https://api.example.com/bonos-soberanos' // Replace with actual API endpoint
    };

    const fetchQuote = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching quote:', error);
            return null;
        }
    };

    const updateQuotes = async () => {
        const dolarMEP = await fetchQuote(apiEndpoints.dolarMEP);
        const dolarCCL = await fetchQuote(apiEndpoints.dolarCCL);
        const cauciones = await fetchQuote(apiEndpoints.cauciones);
        const bonosSoberanos = await fetchQuote(apiEndpoints.bonosSoberanos);

        document.getElementById('dolar-mep').textContent = dolarMEP ? dolarMEP.value : 'Error';
        document.getElementById('dolar-ccl').textContent = dolarCCL ? dolarCCL.value : 'Error';
        document.getElementById('cauciones').textContent = cauciones ? cauciones.value : 'Error';
        document.getElementById('bonos-soberanos').textContent = bonosSoberanos ? bonosSoberanos.value : 'Error';
    };

    const init = () => {
        updateQuotes();
        setInterval(updateQuotes, 60000); // Update quotes every minute
    };

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', quotesPanel.init);