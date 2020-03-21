import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment-box">
      <img src={comment.author.avatar} alt="Profile" width={30} height={30} />
      <p>
        <strong>{comment.author.name}</strong> 
        {comment.content}
      </p>
    </div>
  )
}

export default Comment;