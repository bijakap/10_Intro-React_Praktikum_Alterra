import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/navbar";
import image1 from "../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
import logo from "../asset/img/logo-ALTA-v2.png"
import facebook from "../asset/img/ic_fb@2x.png"
import instagram from "../asset/img/ic-instagram@2x.png"
import linkedin from "../asset/img/ic-linkedin@2x.png"
import twitter from "../asset/img/ic-twitter@2x.png"

function About() {
    return (
      <div>
        <Navbar/>
        <div class="container-fluid about-me">
            <h1 class="container pl-2 pt-5 pb-5">
                ABOUT ME.
            </h1>
        </div>

        <div class="container">
            <div class="row pt-5 pb-5 ">
                <div class="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
                    <div class="about-anne">
                        <p>
                            Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. <br></br><br></br>
                            Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis. <br></br><br></br>
                            Here’s few technologies I’ve been working with recently :
                        </p>
                    </div>
                    <div>
                        <table class="tabel-anne">
                            <tr>
                                <td>HTML & CSS</td>
                                <td>Serverless</td>
                                <td>Scrum</td>
                            </tr>
                            <tr>
                                <td>Programming</td>
                                <td>Restful API</td>
                                <td>Test-Driven Dev</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>Javascript</td>
                                <td>Software Testing</td>
                            </tr>
                            <tr>
                                <td>Git & Github</td>
                                <td>Sigle Page App</td>
                                <td>UX/UI Designer</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
                    <div class="foto-id text-lg-right text-md-center text-sm-center">
                        <img src={image1}></img>
                    </div>                
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row pt-5 pb-5">
                    <div class="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                        <Link to="/"><img class="logo-bawah" src={logo}></img></Link>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                                    <h6>Social Media:</h6>
                                    <a href="https://www.facebook.com/AlterraAcademy"><img class="logo-sosmed" src={facebook}></img></a>
                                    <a href="https://twitter.com/"><img class="logo-sosmed" src={twitter}></img></a>
                                    <a href="https://www.instagram.com/alterra.academy/"><img class="logo-sosmed" src={instagram}></img></a>
                                    <a href="https://id.linkedin.com/"><img class="logo-sosmed" src={linkedin}></img></a>
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                        <h6 class="text-lg-right text-md-center text-sm-center kopi">Copyleft © 2019 - Unjelas Team</h6>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
  
  export default About;
  