import { Avatar } from '@material-ui/core'
import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from '../Feed/InputOption';
import "./Post.css";

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray"/>
                <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>

            </div>
        </div>
    )
}

export default Post
