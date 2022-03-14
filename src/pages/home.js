// import './App.css';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Navbar from "./component/navbar";
import '../asset/css/bootstrap.min.css';
import '../asset/css/main.css';
import logo from '../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

function Home() {
  return (
    <div>
    <Navbar/>
        <div className="home-background">
            <div className="pb-5">
                <div class="container h-100">
                    <div class="row align-items-center isi-home">
                        <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                            <img id="foto-profil" src={logo}></img>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div class="main-p">
                                <p class="sapaan">Hi, my name is </p>
                                <p class="nama">Anne Sullivan</p>
                                <p class="hobi">I build things for the web</p>
                                <p class="tombol"><Link to="/about">Get In Touch</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Home;
