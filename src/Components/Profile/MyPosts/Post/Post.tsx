import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src="https://image.shutterstock.com/image-vector/fashion-silhouette-hipster-style-vector-260nw-161463836.jpg"
                    alt=""/>
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export {Post};
