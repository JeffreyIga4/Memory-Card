
import { GamerHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";


const cardValues = [
  "🐶",
  "🐱",
  "🐰",
  "🐻",
  "🐭",
  "🐹",
  "🦊",
  "🦁",
  "🐶",
  "🐱",
  "🐰",
  "🐻",
  "🐭",
  "🐹",
  "🦊",
  "🦁",
];

function App() {
  // keeps track of the cards in the game
  const [cards, setCards] = useState([])

  // keeps track of what happens when the game starts
  const initializeGame = () => {
    
    // loop through the card values and create a card object for each value
    const finalCards =cardValues.map((value, index) =>(
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))

      // called the user open the game with the new set of cards
      setCards(finalCards)
  };

  // 
  useEffect(() => {
    initializeGame()
  }, []);

  const handleCardClick = (card) => {
    // Dont allow clicking if the card is already flipped or matched
    if (card.isFlipped || card.isMatched) {
      return;
    }

    // Flip the clicked card
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      }
      else {
        return c;
      }
    });

    setCards(newCards);
  };

  return  (
  <div className="app">
    <GamerHeader score={3} moves={10}/>

    <div className="cards-grid">
      {cards.map((card) => (
        <Card card={card} onClick={handleCardClick}/>
      ))}
    </div>
    </div>
  );
}

export default App
