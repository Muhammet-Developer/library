import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  const [text, setText] = useState("namık kemal");
  const [bookData,setBookData]=useState([]);
  
  const api = async() => {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+text+`&key=${process.env.REACT_APP_APP_KEY}`+'&maxResults=40')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err))
  }
  useEffect(() => {
  api()
  }, [])
  
  return (

    <>
    <Navbar text={text} setText={setText} bookData={bookData} setBookData={setBookData} api={api}/>
    <Carousel/>
    <Books bookData={bookData} />
    </>
  );
}

export default App;
