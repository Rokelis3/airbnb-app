import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cardElements = data.map(element =>{
    return <Card 
      key={element.id}
      cardElement={element}
    />
  })
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="mainCardContainer">      
        {cardElements}
      </div>
    </div>
  );
}

export default App;
