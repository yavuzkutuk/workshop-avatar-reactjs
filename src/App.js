import logo from './logo.svg';
import './App.css';
import Avatar from './components/avatar';

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  firstName: "Homer",
  lastName: "Simpson"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Workshop famille Simpson</h1>
      </header>
      <main>
        <Avatar {...bart} />
        <Avatar {...homer} />
      </main>
    </div>
  );
}

export default App;
