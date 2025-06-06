import blogPosts from "../src/data/blogposts.js"
import { useState } from 'react';

function Main () {

    const [newPost, setNewPost] = useState("");
     const [postList, setPostList] = useState(blogPosts);
     const [error, setError] = useState(false)

     const manageSubmit = (event) => {
         event.preventDefault()
         if (newPost.trim() !== "") {
             setPostList([{title: newPost}, ...postList]);
             setNewPost("");
         } else {
            setError(true)
         }
     };


    const handleInputChange = (event) => {
        if(error && event.target.value !== "") {
            setError(false)
        } 
        setNewPost(event.target.value)
    };


    return (
        <div className="container">
            <form onSubmit = {manageSubmit}>
                <label htmlFor="name">
                    <h2>Inserisci nuovo nome articolo</h2>
                </label>
                <input 
                type="text" 
                id="name"
                value= {newPost}
                onChange= {handleInputChange}
                autoComplete="off"
                aria-label= "Aggiungi nuovo titolo"
                 />
                <button type="submit">Aggiungi</button>
            </form>
            <ul>
                {postList.map((curPost, index) => (
                    <li key= {`${index}`}>
                        <h3>{curPost.title}</h3>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default Main