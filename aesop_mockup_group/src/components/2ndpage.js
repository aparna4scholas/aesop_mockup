import React,{Component} from 'react';
import './2ndpage.css';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";

import gift from "../images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png";
import frag3 from '../images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png'
import frag4 from '../images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png'
import frag5 from '../images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png'
import frag2 from '../images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png'
import frag1 from '../images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png';

export default function Secondpage(){


    return(

    
        <React.Fragment>
     
     <div>
        <div id="giftdiv">
        <p>
        Five mythical Gift kifts
       
        <img src={gift} id="giftimg" alt="fragrance"/>
        </p>
           <pre>crafted for gods,mortals, and muses alike,our new Gift kit</pre>
           <pre>collection makes for inspired gift giving this festive season</pre>
           <input type="button" className="topbtn" value="Explore seasonal Gift kits ->"/>
          </div>
   
   
         <Router>
         
           <div id="container">
           

          
           <div id="desc">
           <h6>Fragrance</h6>
           <br/>
            <pre>An Aromatic signature</pre>
            <pre>our bold sophisticated fragrance-from parfum</pre>
            <pre>and eau-de parfum to room spraya are</pre>
            <pre>maliciously crafted using high quality ingredients</pre>
            </div>
          
           <div className="link">
           <Link to="/home"><img src={frag1} className="linkimg"alt="fragrance"/></Link>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag2} className="linkimg" alt="fragrance"/></Link>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag3} className="linkimg" alt="fragrance"/></Link>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag4} className="linkimg" alt="fragrance"/></Link>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag5} className="linkimg" alt="fragrance"/></Link>
           <Route path="/home"><Comp /></Route>
         
           </div>
           <input type="button" className="btnleft" value="<" />
           <input type="button" className="btnright" value=">" />
           </div>
   
         </Router>
        
       
         </div>
   </React.Fragment>
         
       
     );
     }
   
   
   function Comp(){
   
       return(
   <div>
   <h1>"Hello" </h1>
   </div>
   
       );
   }
   