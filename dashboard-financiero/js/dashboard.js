const quoteCards = [...document.querySelectorAll('[data-quote]')];

function formatPesos(value) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 2
  }).format(value);
}

async function loadQuotes() {
  try {
    await Promise.all(quoteCards.map(async (card) => {
      const response = await fetch(`https://dolarapi.com/v1/dolares/${card.dataset.quote}`);
      if (!response.ok) {
        throw new Error('No se pudo consultar la cotización');
      }

      const quote = await response.json();
      card.classList.remove('loading');
      card.querySelector('strong').textContent = formatPesos(quote.venta);
      card.querySelector('small').textContent = `Compra ${formatPesos(quote.compra)}`;
    }));

    document.querySelector('#updated-at').textContent = `Actualizado ${new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`;
  } catch {
    quoteCards.forEach((card) => {
      card.classList.remove('loading');
      card.querySelector('strong').textContent = 'Sin datos';
      card.querySelector('small').textContent = 'API no disponible';
    });
    document.querySelector('#updated-at').textContent = 'Datos no disponibles';
  }
}

document.addEventListener('DOMContentLoaded', loadQuotes);