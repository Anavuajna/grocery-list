import './App.css';
import { GroceryList } from './GroceryList';
// import image from './shopping.jpg';

function App() {
  return (
    <div className='app'>
      <div className="conteiner">
        <img src="https://import.cdn.thinkific.com/397660/courses/1600282/shopping-211128-142332.jpg" alt="shop" width="200px"/>
      </div>
      <div className="conteiner">
        <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className="conteiner">
        <img src="https://import.cdn.thinkific.com/397660/courses/1600282/man-211128-142332.jpg" alt="man" width="200px"/>
      </div>
    </div>
  );
}

export default App;
