const characters = document.querySelectorAll('.character');
let current = 1; // começa com o do meio ativo

function updateCarousel() {
  // Remove todas as classes de posição
  characters.forEach(c => c.classList.remove('left', 'center', 'right'));

  // Define quem é esquerda, centro e direita
  const leftIndex = (current - 1 + characters.length) % characters.length;
  const rightIndex = (current + 1) % characters.length;

  characters[leftIndex].classList.add('left');
  characters[current].classList.add('center');
  characters[rightIndex].classList.add('right');

}

// Inicializa
updateCarousel();

// Clique em cada personagem
characters.forEach((character, index) => {
   
  character.addEventListener('click', () => {
    if (index === current) return; // já é o centro
    current = index;
    updateCarousel();
  });
});