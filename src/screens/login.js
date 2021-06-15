import React from 'react';
import Navbar from '../components/homeBarre.component'
import Footer from "../components/footer.component";
import Loginform from '../components/login.component';





const Login = () =>{

    const url = 'https://covoituragebackend.herokuapp.com/api/v1/login';
    

    const Submit = async (e,Formstate)=>{
        
        e.preventDefault();

        const logindata = JSON.stringify(Formstate);
        console.log( logindata )

        const data = await fetch(url,{method:"POST", headers:{"content-type":"Application/json"},
        body: logindata}).then(res=>res.json())

        console.log( data );
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