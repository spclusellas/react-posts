import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Post from './Post'
import './css/SearchPost.css'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

function SearchForm(props){

    const [searchResult, setSearchResults] = useState(false)
    const [visible, setVisible] = useState(3)
    const [startVisible, setStartVisible] = useState(0)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let searchResults = props.posts.posts.filter(post => {
            return post.title.includes(data.title)
        })
        setVisible(3)
        setSearchResults(searchResults)
    };

    function showSearchResults(data, i){
        return (
            <Post 
                body={data.body}
                title={data.title}
                image={props.posts.images[i]}
                key={data.id}
            />
        )
    }

    function loadMore(){
        setStartVisible(startVisible + 3)
        setVisible(visible + 3)
    }

    function cleanResults(){
        setSearchResults(false)
        setVisible(3)
        setStartVisible(0)
    }

    function resetResults(){
        setStartVisible(0)
        setVisible(3)
    }

    function controlResult(post, i){
        return (
            <div className="control-result">
                <Alert  variant={'dark'}>
                    <b> {searchResult.length}</b> RESULTS
                </Alert>
                <Button variant="outline-info" size="md" block onClick={loadMore}>
                    Show Others
                </Button>
                <Button className='clean-button' variant="outline-danger" size="md" block onClick={cleanResults}>
                    Clear 
                </Button>
                {}
            </div>
        )
    }

    return(
        <div className="search-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Search Post.." type="text" name="title" ref={register}></input>
                <button type='submit'>Search</button>
            </form>
            <section className="cards-section search-results">
                 {searchResult ? searchResult.slice(startVisible, visible).map(showSearchResults) : '' }
            </section>
            {searchResult[0]? controlResult(): ''}
            {visible > searchResult.length + 3? resetResults() : ''}
        </div>
    )
}

export default SearchForm