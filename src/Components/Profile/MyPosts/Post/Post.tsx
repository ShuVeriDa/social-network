import React from "react";
import classes from './Post.module.css'

type PostType = {
    message: string
    like: number
}

const Post = (props: PostType) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src="https://image.shutterstock.com/image-vector/fashion-silhouette-hipster-style-vector-260nw-161463836.jpg"
                    alt=""/>
                {props.message}
                <div>
                    <span>Like: {props.like}</span>
                </div>
            </div>
        </div>
    )
}

export {Post};
