import React, {useState} from 'react';
import { useEffect } from 'react';
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchPost from './SearchPost'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'


function App() {
  
  const [posts, setPost] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((posts) => {
            setPost(posts)
        })
}, [])

console.log(posts)
  return (
    <div className="App">
      
      <Navbar />
      <SearchPost posts={posts}/>
      <h2 className="all-post">All Posts</h2>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
