import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var websiteSearchBar= document.getElementById('search');
var width=document.defaultView.getComputedStyle(document.getElementById("search")).getPropertyValue("width")
ReactDOM.render(<App barWidth={width}/>, websiteSearchBar);
var appContainer= document.getElementById('ittweb-accelasearch-bar-container');
//websiteSearchBar.parentNode.insertBefore(appContainer, websiteSearchBar.nextSibling);
var body = document.getElementsByTagName("BODY")[0];
body.parentNode.insertBefore(appContainer, body.nextSibling);
