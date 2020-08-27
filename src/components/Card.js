import React, {useState} from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'
import './css/Card.css'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'



function Card(){
    const [posts, setPost] = useState([])
    const [visible, setVisible] = useState(6)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json())
            .then((posts) => {
                setPost(posts)
            })
            setLoading(true)
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
                {loading ? posts.slice(0, visible).map(postMap) : <Spinner className="spinner-art" animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> }
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