import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [image,setImg]=useState([])
  useEffect(()=>{
    const fetchAPI= async () =>{
      await axios.get('https://random-d.uk/api/random')
      .then (response => {
         setImg(response.data)
     })} 

    fetchAPI();
},[])
  return (
    <div className="App">

     <img src={image.url} alt="d.uk" />

    </div>
  );
}

export default App;
