// Get all card elements
const cards = document.querySelectorAll('.card');

// Adding  an  click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Removing the 'active' class from all cards
    cards.forEach(c => c.classList.remove('active'));
    // Unselecting all cards and hide option containers
    cards.forEach(c => c.classList.remove('selected'));

    // Add the 'active' class to the clicked card
    card.classList.add('active');
    // Selecting  the clicked card and show its option container
    card.classList.add('selected');

    // radio button toggle
    const radioId = card.getAttribute('data-radio');
    const radioButton = document.getElementById(radioId);
    radioButton.checked = true;
  });
});
