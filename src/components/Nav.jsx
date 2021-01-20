import React, { Component} from 'react';
import logo from './images/menu_icon.png'
export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md fixed-top bg-light">
             <a className="navbar-brand" href="index.html">Ian Mugenya</a>
             <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
               <span><img src={logo} alt="website logo" id="burger_menu"/></span>
             </button>
             <div className="navbar-collapse collapse" id="menu">
               <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                   <a className="nav-link current" href="#index.html">Home</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#contact" id="contact">Contact</a>
                </li>
               </ul>
             </div>
            </nav>
        )
    }
}