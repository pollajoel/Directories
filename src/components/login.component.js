import React, {useState} from 'react';


const Loginform = ({props,Submit})=>{

    
    const [Formstate, setFormstate] = useState ({
        email:'',
        passWord:''
    })

    //const [dataState, Setdata] = useState([])

    

    return (
        <>
         <form onSubmit={e=>Submit(e,Formstate)}>
             <input type="text" name="email" onChange={e=>setFormstate({...Formstate,email:e.target.value})}/>
             <br/>
             <input type="password" name="passWord" onChange={ e=>setFormstate({...Formstate,passWord:e.target.value})}/>
             <br/>
             <input type="submit"/>
         </form>
        </>
    )

}


export default Loginform;