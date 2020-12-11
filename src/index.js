import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img1 from './img/img1.jpg';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// var name = "Syed Sadiq Hussain";
// var name2 = "Ahsan Qureshi"
// ReactDOM.render(
// <div className={'firstClass'}>Hello {name2}</div>,
//   document.getElementById('root')
// );

var currentDate = new Date().toDateString();
var Time = new Date().toTimeString();
setInterval(Time,1000);
function Hi(props) {
return <div className={'firstDive'}>
    <img alt={'aks'} className={'img2'} src={props.img}/>
    <span><h2>{props.name}!</h2></span>
    <p className={'date'}>{currentDate} {Time}</p>
    <img alt={'aks'} className={'img3'} src={props.img2}/>
    
<button className={'btn'}>{props.btn1}</button>
<button className={'btn'}>{props.btn2}</button>
<button className={'btn'}>{props.btn3}</button>
    </div>;
}


ReactDOM.render(<p><Hi name="Syed"
img={img1}
img2 = 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
btn1='Like'
btn2='comment'
btn3='share'
/>
<Hi name="Sadiq"
img='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
img2 = 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80'
btn1='Like'
btn2='comment'
btn3='share'
/>
<Hi name="Hussain"
img='https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
img2 = 'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
btn1='Like'
btn2='comment'
btn3='share'
/>
<Hi name="Zaidi"
img='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
img2 = 'https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1047&q=80'
btn1='Like'
btn2='comment'
btn3='share'
/>
<Hi name="Abbas"
img='https://images.unsplash.com/photo-1514742923401-b8ae3074e468?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
img2 = 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
btn1='Like'
btn2='comment'
btn3='share'
/>
</p>
, document.querySelector('#root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
