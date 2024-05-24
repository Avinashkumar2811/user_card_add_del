const cartCardsContainer = document.getElementById('cart-cards');

// isme cart ko remove krna hai
const removeFromCart = (userId) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(user => user.id !== userId);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartCards();
};

const renderCartCards = () => {
  cartCardsContainer.innerHTML = '';
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    const name = document.createElement('h2');
    name.textContent = user.name;

    const email = document.createElement('p');
    email.textContent = user.email;

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = () => removeFromCart(user.id);

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(button);

    cartCardsContainer.appendChild(card);
  });
};

renderCartCards();
