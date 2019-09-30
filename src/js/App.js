import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import {theme} from '../ui/theme';


export default function App() {
  const [categories,setCategories] = useState([]);
  const [activeCategory,setActiveCategory] = useState("");

  return (
    <ThemeProvider theme={theme}>
        <main className="container">
          <Menu categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
          <MainContent setCategories={setCategories} activeCategory={activeCategory}/>
      </main>
    </ThemeProvider>
    
  );
}
