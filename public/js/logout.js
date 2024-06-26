document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      fetch('/api/users/logout', {
        method: 'POST'
      }).then(response => {
        if (response.ok) {
          window.location.href = '/login';
        } else {
          console.error('Logout Failed')
        }
      }).catch(error => {
        console.error('Error:', error);
      });
    });
  }
});


