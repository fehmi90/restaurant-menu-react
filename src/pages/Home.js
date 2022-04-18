import React from "react";
import banner from "../assets/banner.jpg";
import '../App.css';


function Home() {

    return(
        <div className="home" style={{ backgroundImage: `url(${banner})` }}>
           <h1>Hello Home Food lorem ipsum</h1>

           <p>Tunisian Food</p>

           <button>order Now</button>


        </div>


    );




}


export default Home;