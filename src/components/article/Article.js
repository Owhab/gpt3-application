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
            {
                Users.map((user, i) => 
                    <div className='user-data'>
                        <h4 key={user.id}> ID: {user.id}</h4>
                        <h1 key={user.id}>Name: {user.name}</h1>
                        <p>Email: {user.email}</p>
                        <h3>Username: {user.username}</h3>


                    </div>
                    
                    
                    
                )
            }
            

            
        </div>
    );
};

export default Article;