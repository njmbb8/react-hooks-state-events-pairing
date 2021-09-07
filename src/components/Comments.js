import React, {useState} from "react"
import Comment from "./Comment"

function Comments({showComments, commentList}){
    const comments = commentList.map(function(curComment){
        return (
            <Comment key = {curComment.id} comment = {curComment}/>
        )
    })

    return (
        <div className = {showComments ? '' : 'hidden'}>
            <h2>{commentList.length} Comments</h2>
            {comments}    
        </div>
    )
}

export default Comments