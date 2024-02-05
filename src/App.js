import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/index.js';
const client = 'pokemon';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard client={client} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
