import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import "./Header.css"
import Logo from "./Logo"

export default function Header() {
    return(
        <header className='header' id='header'>
            <div className="container d_flex">
                <div className="logo">
                <Logo/>
                </div>
                <div className = 'navlink'>
                    
                    <ul className ="f_flex">
                        <li> 
                            <a href="#about"> About </a>
                        </li>
                        <br></br>
                        <li> 
                            <a href="#portfolio"> Portfolio </a>
                        </li>
                        <br></br>
                        <li>
                            <a href="#experiences"> Experiences </a>
                        </li>
                        <li> 
                            <a href="#contact"> Contact </a>
                        </li>
                        <br></br>
                    </ul>
                </div>
            </div>
        </header>
    )
}