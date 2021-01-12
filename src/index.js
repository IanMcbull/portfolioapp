import React from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App';
ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector('#root')
)

document.querySelector('#arrow_icon').addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue'; 
})