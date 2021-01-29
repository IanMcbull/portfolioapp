import React, { Component} from 'react';
import logo from './images/menu_icon.png';

//Scroll function
export default class Nav extends Component{
    constructor(props){
      super(props)
      this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll(){
      const nav = document.querySelector('.navbar'); 
      console.log(nav)
    }
    render(){
        return(
            <nav className="navbar navbar-expand-md" onScroll={this.handleScroll()}>
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