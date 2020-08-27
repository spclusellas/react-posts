import React, {useState} from 'react';
import './css/Post.css'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Modal from './Modal'

function Post(props){

    const [modalShow, setModalShow] = useState(false);

    return(
        <article className="post-article">
            <div className="post-title">
                <h3>{props.title}</h3>
            </div>
            <Button variant="dark" onClick={() => setModalShow(true)} className="read-more-button">
                Read Post
            </Button>

            <Modal
                title={props.title}
                body={props.body}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </article>
    )
}
export default Post;