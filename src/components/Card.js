import React, {useState} from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'
import './css/Card.css'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'



function Card(){
    const [posts, setPost] = useState({posts: [], images: []})
    const [visible, setVisible] = useState(6)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json())
            .then((posts) => {
                fetch('https://picsum.photos/v2/list?page=2&limit=100')
                .then((res) => res.json())
                .then((images) => {
                    setPost({posts: posts, images: images})
                    console.log(posts)
                })
            })
            
            setLoading(true)
    }, [])

    function postMap(data, i){
        return(
                <Post 
                    id = {data.id}
                    body={data.body}
                    title={data.title}
                    images={data.url}
                    key={data.id}
                    image={posts.images[i]}
                />
        )
    }

    function loadMore(){
        setVisible(visible + 6)
    }

    return(
        <div>
            <section className="cards-section">
                {loading ? posts.posts.slice(0, visible).map(postMap) : <Spinner className="spinner-art" animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> }
            </section>
            <div className="load-more-div">
                <Button variant="outline-dark" size="lg" block onClick={loadMore}>
                    Load More
                </Button>
            </div>
        </div>
    )
}
export default Card