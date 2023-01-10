import './App.scss';
import Button from 'react-bootstrap/Button'
import Yarn from './components/Yarn';

function App() {
  return (
    <div className="App">
      <h1>maille stash</h1>
      <ul id="categories">
        <Button variant="primary">Lace</Button>
        <Button variant="primary">Fingering</Button>
        <Button variant="primary">Sport</Button>
        <Button variant="primary">DK</Button>
        <Button variant="primary">Worsted</Button>
        <Button variant="primary">Aran</Button>
        <Button variant="primary">Bulky</Button>
      </ul>
      <div className="yarns">
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
        <Yarn />
      </div>
    </div>
  );
}

export default App;
