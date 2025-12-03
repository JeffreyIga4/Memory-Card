
import { GamerHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect } from "react";


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

  return  (
  <div className="app">
    <GamerHeader score={3} moves={10}/>

    <div className="cards-grid">
      {cardValues.map((card) => (
        <Card card={card} />
      ))}
    </div>
    </div>
  );
}

export default App
