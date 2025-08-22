document.addEventListener('DOMContentLoaded', function () {
  // Update copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Update verification date
  var verificationDateEl = document.getElementById('verification-date');
  if (verificationDateEl) {
    var today = new Date();
    var options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    verificationDateEl.textContent = today.toLocaleDateString('en-US', options);
  }

  // Basic client-side focus style polyfill for keyboard users
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);

  // Add print functionality for verification page
  var printButton = document.createElement('button');
  printButton.textContent = 'Print Verification';
  printButton.className = 'btn btn-secondary';
  printButton.style.marginTop = '16px';
  printButton.onclick = function() {
    window.print();
  };
  
  var contactInfo = document.querySelector('.contact-info');
  if (contactInfo) {
    contactInfo.appendChild(printButton);
  }

  // Analytics placeholder
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);} // eslint-disable-line
  // gtag('js', new Date());
  // gtag('config', 'G-XXXXXXXXXX');
}); 