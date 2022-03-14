import * as React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/main.css';
import logo from '../../asset/img/logo-ALTA@2x.png';

function Navbar() {
    return (
    <header>
        <div className="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="alterra">
                        <Link to="/"><img class="logo-atas" src={logo}></img></Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="container">
                        <div class="row align-items-center navig">
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="#" class="aktif">HOME</Link></div>
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><Link to="/about">ABOUT</Link></div>
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><Link to="#">EXPERIENCE</Link></div>
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="/contact">CONTACT</Link></div> 
                        </div>
                    </div>
                </div>    
            </div>
        </div> 
    </header>
    )
  }
  
  export default Navbar;
  