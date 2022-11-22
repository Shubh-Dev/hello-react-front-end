import { Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
