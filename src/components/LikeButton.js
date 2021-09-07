import React, {useState} from "react";

function LikeButton({votes, thumbs, onChangeLike}){
    return (
        <button onClick = {onChangeLike}>{votes} {thumbs === "up" ? "👍" : "👎"}</button>
    )
}

export default LikeButton