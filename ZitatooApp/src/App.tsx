import React from 'react';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
//import Portfolio from './pages/Portfolio';
//import Contact from './pages/Contact';
//import About from './pages/About';

const system = createSystem(defaultConfig);

const App: React.FC = () => {
  return (
    <ChakraProvider value={system}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
};

export default App;