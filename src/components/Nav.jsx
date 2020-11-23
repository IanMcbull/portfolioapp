import React, { Component} from 'react';
import logo from './images/menu_icon.png'
export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md">
             <a className="navbar-brand" href="index.html">Ian Mugenya</a>
             <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
               <span><img src={logo} alt="website logo" id="burger_menu"/></span>
             </button>
             <div className="navbar-collapse collapse" id="menu">
               <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                   <a className="nav-link" href="#index.html">Home</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#index.html">Projects</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#index.html">About</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#index" id="contact">Contact</a>
                </li>
               </ul>
             </div>
            </nav>
        )
    }
}