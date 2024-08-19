document.querySelector('#myBtn').addEventListener('click', () => {
  const userName = prompt('What is your name?');
  if (userName) {
    document.querySelector('#greeting').textContent =
        'Hello ' + userName + ', welcome to my website!';
  } else {
    document.querySelector('#greeting').textContent =
        'Hello guest, welcome to my website!';
  }
});
