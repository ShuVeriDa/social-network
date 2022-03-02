import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                Mypost
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Profile};
