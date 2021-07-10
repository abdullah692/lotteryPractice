import React,{useState,useEffect} from 'react'
import fire from './Components/fire';
import  Login from './Login'
import Home from './Home'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import LoginScreen from './LoginScreen';
import Winner from './Winner'
import WinnerPopup from './WinnerPop';
import  Live from './Live'
// import './App.css'
export default function App() {
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setemailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(false);
  
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  
  const clearError=()=>{
    setemailError(' ');
    setPasswordError('');
  }
  

  const handleLogin=()=>{
    clearError();
    fire
     .auth()
     .signInWithEmailAndPassword(email,password)
     .catch(err=>{
          switch(err.code)
          {
            case 'auth/invalid-email': 
            case "auth//user-disabled":
            case   'auth/user-not-found'  : 
          
              setemailError(err.message);
              break;
    
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          }
        });
       };
  
  const handleSignup=()=>{
    clearError();
    fire
     .auth()
     .createUserWithEmailAndPassword(email,password)
     .catch(err=>{
          switch(err.code)
          {
            case "auth/email-already-in-use":
            case 'auth/invalid-email': 
          
              setemailError(err.message);
              break;
    
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          }
        });
       };
  
  const handleLogout=()=>{
    fire.auth().signOut();
  };
  const authListener=()=>{
  fire.auth().onAuthStateChanged((user)=>{
    if(user)
  {
    clearInputs();
    setUser(user);
  }
  else
  {
    setUser('');
  }
  });
  };
  
  useEffect(()=>{
    authListener();
    },[]);
      
  
  return (
    <div className='App'>
      <Router>

      <Switch>
        
      
    {user ? (<Route exact path='/Winner' component={Winner} handleLogout={handleLogout}/>)
    :(
      <Route path='Login' component={Login}
            email={email} 
     setEmail={setEmail}
      password={password}
     setPassword={setPassword}
      handleLogin={handleLogin} 
      handleSignup={handleSignup} 
      hasAccount={hasAccount}
       setHasAccount={setHasAccount} 
       emailError={emailError} 
       passwordError={passwordError} />
    )
       
     }
     <Route path='/Winner' component={Winner}/>
     <Route path='/Live' component={Live}/>
  <Route path='/WinMonth'component={WinnerPopup}/>
     </Switch>
     </Router>
    </div>
  )
}
