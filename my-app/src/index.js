import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import java from './image/java.png';
import python from './image/python.png';
import react from './image/react.png';
import sql from './image/sql.png';
import keyboard from './image/keyboard.jpg'

let obj = {
  navbar:
    <div>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Dev Profile</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Portfolio</a>
              <a class="nav-link" href="#">Resume</a>
              <a class="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>,
  java:
    <div class="col">
      <img alt='java' src={java} width="75" height="75" />
      <h4>Java</h4>
      <p>List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.</p>
    </div>,
  python:
    <div class="col">
      <img alt='python' src={python} width="75" height="75" />
      <h4>JavaScript</h4>
      <p>List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.</p>
    </div>
  ,
  react:
    <div class="col">
      <img alt='react' src={react} width="75" height="75" />
      <h4>React</h4>
      <p>List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.</p>
    </div>,
  sql:
    <div class="col">
      <img alt='sql' src={sql} width="75" height="75" />
      <h4>Databases</h4>
      <p>List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.</p>
    </div>,
  personalInfo:
    <div class="container m-3">
      <div class="row">
        <div class="col-3">
          <img alt='keyboard' src={keyboard} width="100" height="100" />
        </div>
        <div class="col-9">
          <p>Jim Bob is a dynamic developer, a lifelong learner and an experienced public cloud developer. He can bring skills to your team to mentor others.
            Lead other team members to develop their skills. culpa voluptatibus quasi sunt facere, dolorem aspernatur impedit voluptates</p>
        </div>
      </div>
    </div>,
  postArea:
    <div class="container m-3">
      <div class="row">
        <div class="col">This section reserved for a mini blog post form</div>
      </div>
      <div class="row"><div class="col">First tiny tech blog posts</div></div>
      <div class="row"><div class="col">Second tiny tech blog posts</div></div>
      <div class="row"><div class="col">Third tiny tech blog posts</div></div>
    </div>

}

ReactDOM.render(
  <React.StrictMode>
    <App {...obj} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
