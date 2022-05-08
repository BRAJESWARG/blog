import React from 'react';
import Intro from "./Intro/Intro"
import TheLatest from "./The Latest/TheLatest"
import LatestArticles from "./Latest Articles/LatestArticles"
import LatestStories from "./Latest Stories/LatestStories"
import Footer from "./Footer/Footer"
import '../../App.css';


const Home =() => {
    return (
       
        <div>
            <Intro />
            <TheLatest />
            <LatestArticles />
            <LatestStories />
        </div>
    
    );
}

export default Home;