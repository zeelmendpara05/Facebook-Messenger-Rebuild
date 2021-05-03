import './App.css';
import React,{useState,useEffect} from 'react';
import { FormControl, Input } from '@material-ui/core';
import Messege from './component/Messege';
import db from './services/firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setinput] = useState('');
  const [messeges, setmesseges] = useState([])
  const [username, setusername] = useState('');

  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    }); 
  };

  const SendMessege = (event) => {
    event.preventDefault();

    db.collection('messeges').add({
      messege: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setinput('');
  };
  
  useEffect(()=> {
    db.collection('messeges').orderBy('timestamp').onSnapshot( snapshot => {
      setmesseges(snapshot.docs.map(doc => ({id: doc.id, messege: doc.data()})));
      scrollToBottom();
    })
  },[])

  useEffect(()=> {
    setusername(prompt('please enter your name'))
  },[])

  return (
    <div className="App">
      <section className="app_section">
      <header className="header">
        <div className="header_control">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/768px-Facebook_Messenger_logo_2018.svg.png" width="70px" height="70px" />
          <h1>Welcome {username ? username : "Unknown"}</h1>
        </div>
      </header>
      
      <main className="chat_area">
        <FlipMove>
          {
            messeges.map(({id,messege}) =>(
              <Messege key={id} username={username} messege={messege} />
            ))
          }
        </FlipMove>
      </main>
      <form className="app_form">
        <FormControl className="app_control">
          <Input className="app_input" placeholder="Enter a messege..." value={input} onChange={event => setinput(event.target.value)} />
          <IconButton className="app_icon_button" disabled={!input} variant="contained" color="primary" type='submit' onClick={SendMessege}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form> 
      </section>
    </div>
    
    
  );
}

export default App;
