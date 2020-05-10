import React from 'react';
import '../css/gallery.css'
import '../css/normalize.css'

class gallery extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="logo">
                    <img src="img/img_001.jpg" alt="logo" width="100%" height="100%" />
                </div>
                <nav id="navbar">
                    <a href="./index.html">HOME</a>
                    <a href="#profile">PROFILE</a>
                    <ul>
                        <li>
                            <a class="drop" href="#travel">TRAVEL</a>
                        <ul>
                        <li><a href="#Place 1">Place 1</a></li>
                        <li><a href="#Place 2">Place 2</a></li>
                        <li><a href="#Place 3">Place 3</a></li>
                        <li><a href="#Place 4">Place 4</a></li>
                        </ul>
                        </li>
                    </ul>
                    <a href="#gallery">GALLERY</a>
                    <a href="#contact">CONTACT</a>
                </nav>

                <div id="grid_container">
                    <div id="sidebar">
                        <ul>
                            <li>
                                <a href="#Asia">Asia</a>
                                    <ul>
                                        <li><a href="#Place 1">Taiwan</a></li>
                                        <li><a href="#Place 2">Japan</a></li>
                                        <li><a href="#Place 3">China</a></li>
                                    </ul>
                                <a href="#Asia">North America</a>
                                    <ul>
                                        <li><a href="#Place 1">California</a></li>
                                        <li><a href="#Place 1">Texas</a></li>
                                        <li><a href="#Place 1">Louisiana</a></li>
                                        <li><a href="#Place 1">Oklahoma</a></li>
                                    </ul>
                                <a href="#Asia">Europe</a>
                                    <ul>
                                        <li><a href="#Place 1">Italy</a></li>
                                    </ul> 
                            </li>
                        </ul>
                    </div>
                    <div id="top">
                        <img src="img/img_001.jpg" alt="logo" />
                    </div>
                    <div id="gallery_nav">
                        <b>previous</b>
                        <b>next</b>
                    </div>         
                    <div class="bottom_line1">
                        <img src="img/img_001.jpg" alt="logo" />
                    </div>
                    <div class="bottom_line2">
                        <img src="img/img_001.jpg" alt="logo" />
                    </div>
                    <div class="bottom_line3">
                        <img src="img/img_001.jpg" alt="logo" />
                    </div>
                    <div class="bottom_line4">
                        <img src="img/img_001.jpg" alt="logo" />
                    </div>
                </div>


                <div class="comments">
                    <h2>Comments</h2>
                    <p>This is for comments.</p>
                </div>
                <div class="footer">
                    <img src="img/img_001.jpg" alt="profile" width="10%"/>
                    <a href="#home">HOME</a>
                    <a href="#profile">PROFILE</a>
                    <a href="#travel map">TRAVEL MAP</a>
                    <a href="#gallery">GALLERY</a>
                    <a href="#contact">CONTACT</a>
                    <p>Copyright © Website Only. All Rights Reserved.</p>
                </div>
            </React.Fragment >
        );
    }
}

export default N1;