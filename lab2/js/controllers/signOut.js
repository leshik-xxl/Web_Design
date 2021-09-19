document.querySelector('#exit').addEventListener('click', () => {
    localStorage.removeItem('sessionUser');
    document.location.href = '/signIn.html';
});