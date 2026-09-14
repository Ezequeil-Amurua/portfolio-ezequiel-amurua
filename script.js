document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.querySelector('[data-copy]');
  const copyStatus = document.querySelector('.copy-status');

  if (!copyButton || !copyStatus) {
    return;
  }

  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.copy;

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Email copiado';
      copyButton.textContent = 'Copiado';
    } catch {
      copyStatus.textContent = 'Podés seleccionar el email manualmente';
    }

    window.setTimeout(() => {
      copyStatus.textContent = '';
      copyButton.textContent = 'Copiar email';
    }, 2500);
  });
});
