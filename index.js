import {mxFirebase} from './mx';
import './mx.css';
import './index.css';
import riot from 'riot';
import "./tags/homepage.tag";
import "./tags/signin.tag";
// import { runInContext } from 'vm';
import route from "riot-route";


  const homepage = riot.mount("div#root","homepage")

// var firebaseConfig = {
//     apiKey: "AIzaSyBU2tkoINbegElHjprw46N5uazyWqn4gw0",
//     authDomain: "duong0712-id.firebaseapp.com",
//     databaseURL: "https://duong0712-id.firebaseio.com",
//     projectId: "duong0712-id",
//     storageBucket: "duong0712-id.appspot.com",
//     messagingSenderId: "775805566885",
//     appId: "1:775805566885:web:4bc4b05ba3871016"
//   };
//   mxFirebase.init(firebaseConfig);
  // route.base("/")

  
// document.getElementById("sign-in-form").addEventListener("submit", async (e) =>{
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   try{
//     await mxFirebase.signIn(email, password);
//     console.log("Login success");
//   }catch(err){
//     document.getElementById("error-message").innerText = err.message;
//   }
  
  
  
// });


