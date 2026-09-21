// This file contains utility functions for formatting data used throughout the dashboard.

function formatCurrency(value) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function formatPercentage(value) {
    return `${(value * 100).toFixed(2)}%`;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-AR', options);
}

function formatNumber(value) {
    return new Intl.NumberFormat('es-AR').format(value);
}

export { formatCurrency, formatPercentage, formatDate, formatNumber };