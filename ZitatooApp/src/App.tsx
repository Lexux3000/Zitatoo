import React from 'react';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

// future imports, then add them as elements to routes
//import Home from './pages/Home';
//import Portfolio from './pages/Portfolio';
//import Contact from './pages/Contact';
//import About from './pages/About';

const system = createSystem(defaultConfig);

const App: React.FC = () => {
  return (
    <ChakraProvider value={system}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/"/>
              <Route path="/portfolio"/>
              <Route path="/contact"/>
              <Route path="/about" />
            </Routes>
          </main>
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;