
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
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

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

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // check for a match if two cards are flipped
    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
        // keep both cards flipped and mark as matched
        setMatchedCards((prev) => [...prev, firstCard.id, card.id]);

        setCards((prev) => 
          prev.map((c) => {
            if (c.id === card.id || c.id === firstCard.id) {
              return { ...c, isMatched: true };
            }
            else {
              return c;
            }
          })
        );
        setFlippedCards([]);
      }, 500);
      } else {
        //flip back card 1, card 2

        // delay of 1 second before flipping back
        setTimeout(() => {
        const flippedBackCard = newCards.map((c) => {
          if (newFlippedCards.includes(c.id) || c.id === card.id) {
            return {...c, isFlipped: false};
          }
          else {
            return c;
          }
        });

        setCards(flippedBackCard)
        setFlippedCards([]);
        }, 1000)
      }
    }
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
