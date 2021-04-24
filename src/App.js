import React,{useEffect} from 'react';
import WebcamCapture from './WebcamCapture';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import {selectUser,login,logout} from './features/appSlice';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from './firebase';
import Login from './Login';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged((authUser)=>{
     console.log('AUTHUSER>>', authUser);
     if(authUser){
       dispatch(login({
        username: authUser.displayName,
        profilePic: authUser.photoURL,
        id:authUser.uid,
       }));
     }
     else{
       dispatch(logout());
     }
   })
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ):(
        <>
        <img className="app__logo" src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"/>
          <div className='app__body'>
        <div className="app__bodyBackground">
        <Switch>
      <Route exact path='/chats/view'>
        <ChatView/>
        </Route>
      <Route exact path='/chats'>
        <Chats/>
        </Route>
      <Route exact path='/preview'>
        <Preview/>
        </Route>
        <Route exact path='/'>
        <WebcamCapture/>
        </Route>
      </Switch>
        </div>
      </div>
    </>
        )}
     </Router>
    </div>

      
  );
}

export default App;
