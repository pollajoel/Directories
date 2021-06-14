import React from 'react';
import Navbar from '../components/homeBarre.component'
import Footer from "../components/footer.component";
import Loginform from '../components/login.component';





const Login = () =>{

    const url = 'https://covoituragebackend.herokuapp.com/api/v1/login';
    

    const Submit = (e,Formstate)=>{
        
        e.preventDefault();

        const logindata = JSON.stringify(Formstate);

        fetch(url,{method:"POST", headers:{"content-type":"Application/json"},
        body: logindata}).then(res=>res.json()).then(data=>{}).catch(err=>{console.log( err )});
    }

    return (
        <>
           <Navbar></Navbar>
           <Loginform Submit = {Submit}></Loginform>
           <Footer></Footer>
        </>
    )
} 


export default Login;