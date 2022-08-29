import React, { useEffect, useState } from 'react';
import "./article.css"

const Article = () => {

    const [Users, setUser] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((result) => result.json())
        .then((result)=>{
            setUser(result)
        })


    }, [])

    console.log(Users)

    return (
        <div>
            <h1>Fetching Data From API</h1>
            

            
        </div>
    );
};

export default Article;