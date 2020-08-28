import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'
import './css/Card.css'
import Button from 'react-bootstrap/Button';

function Card(props){
    const [visible, setVisible] = useState(6)

    function postMap(data, i){
        return(
                <Post 
                    id = {data.id}
                    body={data.body}
                    title={data.title}
                    images={data.url}
                    key={data.id}
                    image={props.posts.images[i]}
                />
        )
    }

    function loadMore(){
        setVisible(visible + 6)
    }

    return(
        <div>
            <section className="cards-section">
                {props.posts.posts.slice(0, visible).map(postMap)  }
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