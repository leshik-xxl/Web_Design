(() => {
    if (!localStorage.hasOwnProperty('sessionUser')) {
        document.location.href = 'signIn.html';
    }
})();