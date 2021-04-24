import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ReactTimeago from 'react-timeago';
import { selectImage, selectUser } from './features/appSlice';
import { auth, db } from './firebase';
import { useHistory } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

function Chat({id,username,timestamp,read,imageURL,profilePic}) {

const dispatch = useDispatch();
const user=useSelector(selectUser);
const history =useHistory();

const open =()=>{
  // if(!read){
       dispatch(selectImage(imageURL));
       db.collection('posts').doc(id).set({
           read:true,
       },{
           merge:true
        }
        );

        history.push('./chats/view');
  // }
}

const deletePost = () =>{
    db.collection('posts').doc(id).delete().then(()=>{
        console.log('Document deleted successfully');
    }).catch((error)=>{
        console.log(error.message)
    });
}
    return (
        <div className="chat" >
        <Avatar className='chat__avatar' src={imageURL}/>
        <div onClick={open} className="chat__info">
            <h4>{username}</h4>
            <p>{!read && "Tap to view -"}{" "} <ReactTimeago date = {new Date(timestamp?.toDate()).toUTCString()} /> </p>
            </div> 
        {!read && <StopRoundedIcon className="chat__readIcon"/>} 
        {read && user.username==username && <DeleteIcon className="chat__trashIcon" onClick={deletePost}/>}  
        </div>
    )
}

export default Chat
