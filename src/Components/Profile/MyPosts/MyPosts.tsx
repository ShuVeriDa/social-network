import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

type MyPostsType = {
   posts: Array<PostsType>
   addPost: (newPostText: string) => void
}

const MyPosts = React.memo((props: MyPostsType) => {

   const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

   const onAddPost = (values: any) => {
      props.addPost(values.newPostText)
   }

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostFormRedux onSubmit={onAddPost}/>
         <div className={classes.posts}>
            {postsElements}
         </div>
      </div>
   );
})

type AddNewPostFormType = {
   handleSubmit: any;
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: AddNewPostFormType) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name='newPostText'
                   component={TextArea}
                   validate={[required, maxLength10]}
                   placeHolder={"Post message"}/>
         </div>
         <div>
            <button>AddPost</button>
         </div>
      </form>
   )

}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostFrom'})(AddNewPostForm)

export {MyPosts};
