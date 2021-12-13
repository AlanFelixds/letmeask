import { createContext, useState } from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';


export const TestContext = createContext({} as any);

function App() {


  const [value, setValue] = useState("Teste");

  return (
    
    <Router>

      <TestContext.Provider value={{ value, setValue }}>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/rooms/new" element={<NewRoom/>}/>
      </Routes>

      </TestContext.Provider>
    </Router>
  );
}

export default App;
