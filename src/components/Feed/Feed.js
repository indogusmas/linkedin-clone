import React,{useState,useEffect} from 'react'
import "./Feed.css";
import InputOption from './InputOption';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubcriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import { db } from "../../setup/firebase";
import firebase from "firebase";

const Feed = () => {
    
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("post")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot) => 
                setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("post").add({
            name: "Indo Ganteng",
            description: "indo@ganteng.com",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start a post"/>
                        <button type="submit" onClick={sendPost} >Submit</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                <InputOption Icon= {ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon= {SubcriptionIcon} title="Video" color="#7FC15E" />
                <InputOption Icon= {EventNoteIcon} title="Event" color="#E7A33E" />
                <InputOption  Icon= {CalendarViewDayIcon} title="Write artical" color="#F5987E"/>
            </div>
            </div>
            {
                posts.map(({id,data:{name,descriprion, message, photoUrl }}) => (
                    <Post
                    key={id}
                    name={name}
                    description={descriprion}
                    message={message}
                    photoUrl={photoUrl}
                /> 
                ))
            }
        </div>
    )
}

export default Feed
