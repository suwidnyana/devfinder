import {useState } from 'react';
import './App.css'
import Search from './parts/Search'
import api from "./parts/api";
import Card from './parts/Card'
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
    <div className="user-form">
      <div>
        <h2>
          Github User Search App
        </h2>
        <Search onSearch={onSearch} className="" />
        <Card results={state.results}/>
      </div>
    </div>
  );
}

export default App;
