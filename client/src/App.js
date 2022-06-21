import React, { useState, useEffect } from 'react'


function App() {

    const [urls,setUrls] = useState([{}])

    useEffect(() =>{
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setUrls(data)
            }
        )
    }, [])

    return (
        <div>
            
            {(typeof urls.users === 'undefined') ? (
                <p>Loading...</p>
            ):
            (
                urls.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )}

        </div>
    )
}

export default App