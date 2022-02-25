import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar';
import Java from './components/java';
import Python from './components/python';
import ReactFunc from './components/reactfunc';
import PersonalInfo from './components/PersonalInfo';
import PostArea from './components/postArea';
import Sql from './components/sql';

let obj = {
  navbar: <Navbar />,
  java: <Java />,
  python: <Python />,
  react: <ReactFunc />,
  sql: <Sql />,
  personalInfo: <PersonalInfo />,
  postArea: <PostArea />
}

ReactDOM.render(
  <React.StrictMode>
    <App {...obj} />
  </React.StrictMode>,
  document.getElementById('root')
);


