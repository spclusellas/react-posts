import React, {useState} from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'
import './css/Card.css'
import Button from 'react-bootstrap/Button';



function Card(){
    const [posts, setPost] = useState([])
    const [visible, setVisible] = useState(6)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json())
            .then((posts) => {
                setPost(posts)
                console.log(posts)
            })
    }, [])

    function postMap(data){
        return(
                <Post 
                    body={data.body}
                    title={data.title}
                    key={data.id}
                />
        )
    }

    function loadMore(){
        setVisible(visible + 6)
    }

    return(
        <div>
            <section className="cards-section">
                {posts.slice(0, visible).map(postMap)}
            </section>
            <div className="load-more-div">
                <Button variant="secondary" size="lg" block onClick={loadMore}>
                    Load More
                </Button>
            </div>
        </div>
    )
}
export default Card