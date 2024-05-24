const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz" },
  ];
  
  const userCardsContainer = document.getElementById('user-cards');
  
  const addToCart = (user) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.find(item => item.id === user.id)) {
      cart.push(user);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${user.name} added to cart!`);
    } else {
      alert(`${user.name} is already in the cart.`);
    }
  };
  
  const renderUserCards = () => {
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
    //   upar ke dono line <div class="card"></div> ye bna denge
  
      const name = document.createElement('h2');
      name.textContent = user.name;
  
      const email = document.createElement('p');
      email.textContent = user.email;
  
      const button = document.createElement('button');
      button.textContent = 'Add to Cart';
    
    //   click krte hi add to cart function call hoga,line no 16
      button.onclick = () => addToCart(user); 
      card.append(name,email,button);
  
      userCardsContainer.append(card);
    });
  };
  
  renderUserCards();
  