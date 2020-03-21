import React from 'react';

import Comment from './Comment';

function PostItem({ post }) {
  return (
    <section className="post-section">
      <header>
        <img src={post.author.avatar} alt="Profile" width={40} height={40} />

        <div>
          <h3>{post.author.name}</h3>
          <span>{post.date}</span>
        </div>
      </header>

      <p>{post.content}</p>

      <section className="comments-sections">
        { post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </section>
    </section>
  );
}

export default PostItem;