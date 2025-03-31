// Example: Project card hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});