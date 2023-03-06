
class Card{
    constructor(name, image, price){
    this.name = name;
    this.image= image;
    this.price = price;
    }
}

  
const card1 = new Card("Viking Troop", "images/Cards.jpg", 10.99);
const card2 = new Card("The Wizard", "images/Cards (1).jpg", 15.99);
const card3 = new Card("The Sphinx", "images/Cards (2).jpg", 13.99);

const cards = [card1, card2, card3];

  const cardContainer = document.getElementById("card-container");
  

  for (let i = 0; i < cards.length; i++) {
   
  
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
   
    const nameElement = document.createElement("h2");
    nameElement.textContent = cards[i].name;
    cardElement.appendChild(nameElement);
  
  
    const imageElement = document.createElement("img");
    imageElement.src = cards[i].image;
    cardElement.appendChild(imageElement);
  
    
    const priceElement = document.createElement("p");
    priceElement.textContent = "$" + cards[i].price;
    cardElement.appendChild(priceElement);
  
    cardContainer.appendChild(cardElement);
  }