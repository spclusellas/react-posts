import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Post from './Post'
import './css/SearchPost.css'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

function SearchForm(props){

    const [searchResult, setSearchResults] = useState(false)
    const [visible, setVisible] = useState(3)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        let searchResults = props.posts.filter(post => {
            return post.title.includes(data.title)
        })
        setSearchResults(searchResults)
    };

    function showSearchResults(data){
        return (
            <Post 
                body={data.body}
                title={data.title}
                images={data.url}
                key={data.id}
            />
        )
    }

    function loadMore(){
        setVisible(visible + 3)
    }

    function cleanResults(){
        setSearchResults(false)
        setVisible(3)
    }

    function controlResult(){
        return (
            <div className="control-result">
                <Alert  variant={'dark'}>
                    You are watching <b>{visible}</b> from <b>{searchResult.length}</b> results
                </Alert>
                <Button variant="outline-info" size="md" block onClick={loadMore}>
                    Show More
                </Button>
                <Button className='clean-button' variant="outline-danger" size="md" block onClick={cleanResults}>
                    Clean Search
                </Button>
            </div>
        )
    }

    return(
        <div className="search-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <FormControl type="text" placeholder="Search" className="mr-lg-2" ref={register} />
                <Button type='submit' variant="outline-success">Search</Button> */}
                <input type="text" name="title" ref={register}></input>
                <button type='submit'>Search</button>
            </form>
            <section className="cards-section search-results">
                 {searchResult ? searchResult.slice(0, visible).map(showSearchResults) : '' }
            </section>
            {searchResult[0]? controlResult(): ''}
            
        </div>
    )
}

export default SearchForm