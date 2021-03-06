import { useState } from 'react';
import './App.css'
import Search from './parts/Search'
import api from "./parts/api";
import Card from './parts/Card'
import Header from './parts/Header';
import { ThemeState } from "./context/ThemeContext"

function App() {

  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const response = await api.get(`/${text}`);
    const dataParse = response.data
    console.log(dataParse)

    setState(prevState => {
      return { ...prevState, results: dataParse }
    })
  };

  return (
    <ThemeState>
      <Header text="devfinder" placeholder="search here" />
    </ThemeState>
  );
}

export default App;
