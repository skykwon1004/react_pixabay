import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name:"roxie",
        comment: "댓글냄겨"
    },
    {
        name:"trex",
        comment: "댓글냄겨"
    },
    {
        name:"man",
        comment: "댓글냄겨"
    },
]

const CommentList = (props) => {
    return (
        <div>
            {
                comments.map((comment)=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>
                    )
                })
            }
           
        </div>
    )
}

export default CommentList