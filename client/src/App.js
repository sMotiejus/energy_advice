import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function ShowFavicon(end){
    let start= "https://s2.googleusercontent.com/s2/favicons?domain=";
    return start+end;
}

function App() {

    const [urls,setUrls] = useState([{}])

    useEffect(() =>{
        axios.get('http://localhost:5000/api')
        .then(res => {
            setUrls(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="App">
            <header className='App-header'>
                Most Popular Lithuanian Sites
            </header>
            <div className="App-Body"> 
                <div className="grid-container">
                    {(typeof urls.urlsList === 'undefined')? 
                    (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    )
                    :
                    (
                        urls.urlsList.map(url =>
                            <div key={url.id} className="webComponent">
                                <div className="grid-component-on">
                                    <div className="img"><img src={ShowFavicon(url.url)} alt="Favicon" /></div>
                                    {url.title}
                                </div>
                                <div key={url.id} className="grid-component-off">
                                    <img src={process.env.PUBLIC_URL + "/SS/"+url.title.replace(/\s/g, "")+".png"} alt="SS"/>
                                    <a href={url.url}>{url.url}</a>
                                </div>
                            </div>         
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default App