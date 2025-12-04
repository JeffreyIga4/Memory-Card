
import { GamerHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { WinMessage } from "./components/WinMessage";


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
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

 const shuffleArray = (array) => {
    const shuffledarray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledarray[i], shuffledarray[j]] = [shuffledarray[j], shuffledarray[i]];
    }
    return shuffledarray;
  };

  // keeps track of what happens when the game starts
  const initializeGame = () => {
    const shuffledCards = shuffleArray(cardValues);
    
    // loop through the card values and create a card object for each value
    const finalCards = shuffledCards.map((value, index) =>(
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))

      // called the user open the game with the new set of cards
      setCards(finalCards)
      setIsLocked(false);
      setMoves(0);
      setScore(0);
      setFlippedCards([]);
      setMatchedCards([]);
  };

  // 
  useEffect(() => {
    initializeGame()
  }, []);

  const handleCardClick = (card) => {
    // Dont allow clicking if the card is already flipped or matched
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2) {
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
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
        // keep both cards flipped and mark as matched
        setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
        setScore((prev) => prev + 1);
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
        setIsLocked(false);
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
        setIsLocked(false);
        }, 1000)
      }
      setMoves((prev) => prev + 1);
    }
  };

  const isGameComplete = matchedCards.length === cardValues.length;

  return  (
  <div className="app">
    <GamerHeader score={score} moves={moves} onReset={initializeGame}/>

    {isGameComplete && <WinMessage moves={moves} />}

    <div className="cards-grid">
      {cards.map((card) => (
        <Card card={card} onClick={handleCardClick}/>
      ))}
    </div>
    </div>
  );
}

export default App
