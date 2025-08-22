document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Basic client-side focus style polyfill for keyboard users
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);

  // Analytics placeholder
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);} // eslint-disable-line
  // gtag('js', new Date());
  // gtag('config', 'G-XXXXXXXXXX');
}); 