document.querySelectorAll('.category-box').forEach(box => {
  box.addEventListener('click', () => {
    const selected = box.getAttribute('data-category');
    localStorage.setItem('whirlpopCategory', selected);
    window.location.href = 'whirl.html';
  });
});
