import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import React  from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';





function App() {
  let [loading, setLoading] = useState(false);
 
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #000;
`;
  
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)},10000);
      
    }, [])


 
  
  
  
  
  
  
  return (


   

    
    <div className="App">
      {
      loading ? <ClipLoader color={"#000"} loading={loading} css={override}/>
    :
    <>
    
    </>

    }
      <Router>  

         <Navbar />
         <Switch>

           <Route path="/" exact component={Home} />
           <Route path="/menu" exact component={Menu} />
          </Switch>

        
         <Footer></Footer>

      </Router>
     
    </div>
    
  );
}

export default App;
