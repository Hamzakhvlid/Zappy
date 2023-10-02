import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLogin :false,
    onLogout : ()=>{},
    onLogin: (email,password)=>{}
});

//save the whole state there
//then wrap this state arround where you want to access and then 

const AuthContextProvider = (props)=>
{
       const [isLogin,setLogin] =  useState(false);
       

       useEffect(()=>{
       const  loginStatus = localStorage.getItem('isLoggedIn')

         if(loginStatus=='1')
          setLogin(true);
       },[]);
       
       const logoutHandler=()=>{
        localStorage.removeItem('isLoggedIn',)
        setLogin(false);
       }

       function loginhandler(email,password)
       {
        localStorage.setItem('isLoggedIn','1')
           setLogin(true);
       }



    return  <AuthContext.Provider  value={{isLogin:isLogin,
    onLogin:loginhandler,onLogout:logoutHandler}}>
     {props.children}
    </AuthContext.Provider>
}

// or alternate pattern using redux 







export default AuthContextProvider;