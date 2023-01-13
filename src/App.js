import axios from 'axios';
import { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import Books from './components/Books/Books';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  const [text, setText] = useState("hugo");
  const [bookData,setBookData]=useState([]);
  const [loading,setLoading] = useState(true)
  
  const api = async() => {
    try {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+text+`&key=${process.env.REACT_APP_APP_KEY}`+'&maxResults=40')
      .then(res=>setBookData(res.data.items))
      setLoading(false)
    } catch (error) {
     console.log(error); 
    } 
  }
  useEffect(() => {
  api()
  setText("")
  }, [])
  
  return (

    <>
     <SkeletonTheme  baseColor="#202020" highlightColor="#444">
    <Navbar text={text} setText={setText} bookData={bookData} setBookData={setBookData} api={api}/>
    <Carousel/>
    <Books bookData={bookData} loading={loading} />
    </SkeletonTheme>
    </>
  );
}

export default App;
