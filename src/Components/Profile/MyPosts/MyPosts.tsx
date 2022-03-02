import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you' like={5}/>
                <Post message='It is my friend' like={15}/>
            </div>

        </div>
    );
};

export {MyPosts};
