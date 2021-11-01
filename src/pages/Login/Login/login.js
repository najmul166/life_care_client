import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification , sendPasswordResetEmail ,updateProfile } from "firebase/auth";
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    const [name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');
    const[isLogin,setIsLogin] = useState(false);

    const auth = getAuth();

    const toggleLogin = e =>{
        setIsLogin(e.target.checked) 
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleRegistration = e =>{
        e.preventDefault()
        console.log(email,password);
        if(password.length<6)
        {
            setError('Password Must Be at 6 characters long')
            return;
        }
        
        isLogin? processLogin(email,password):registerNewUser(email,password);
    }

    const processLogin = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })

    }

    const registerNewUser = (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
        })

    }

    const setUserName = () =>{
        updateProfile (auth.currentUser,{displayName:name})
        .then(result =>{} )

    }



    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            console.log(result)
        })
    }
    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth,email)
        .then(result =>{})

    }

    
    return (
        <div>
            <div onSubmit= {handleRegistration} className="mx-5 my-5">
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                

  {!isLogin && <div className="row mb-3">
    <label for="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
    <input type="text" onBlur={handleNameChange} className="form-control" id="inputAddress" placeholder="Your Name" required/>
    </div>
    </div>}


  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur ={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input  onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" for="gridCheck1">
          Already Registered?
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger">{error}</div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
  <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
</div>
            <div>---------------------</div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-warning'>Google Sign In</button>
        </div>
    );
};

export default Login;