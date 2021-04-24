import React,{useEffect} from 'react';
import { useHistory } from 'react-router';
import './ChatView.css';
import { selectSelectedImage } from './features/appSlice';
import {useSelector} from 'react-redux';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
function ChatView() {

    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();

    useEffect(() => {
        if(!selectedImage){
            exit();
        }
    }, [selectedImage]);

    const exit = () =>{
        history.replace('/chats');
    }

    return (
        <div className="chatView">
         <img src={selectedImage} onClick={exit} alt=" "/>   
       <div className="chatView__timer">
        <CountdownCircleTimer
        isPlaying
        duration={10}
        strokeWidth={6}
        size={50}
        colors={[
            ['#0B4777',0.33],
            ['#F7BB01',0.33],
            ['#A30880',0.33],
        ]}
        >
            {({remainingTime})=>{
                if(remainingTime == 0){
                    exit();
                }
                return remainingTime;
            }}
        </CountdownCircleTimer>
        </div>
        </div>
    )
}

export default ChatView
