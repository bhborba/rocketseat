import React from 'react';

function PostHeader({ author, date}){
    return (
        <div className='postHeader'>
            <img className='avatar' src={author.avatar} />
            <div className='details'>
                <span className='authorName'>
                    {author.name}   
                </span>
                <br></br>
                <small className='date'>
                    {date}
                </small>
            </div>
        </div>
    )
}

function PostComment({comments}) {
    return (
        <div className='comment'>
          
            {comments.map(comment =>(
                <div>
                    <img className='avatar' src={comment.author.avatar} />
                    <div className='commentContent'>
                        <p className='authorName'>
                            {comment.author.name} 
                        </p>    
                        <p>{comment.content}</p>
                    </div>
                    <br></br>
                </div>
            ))}
            
        </div>
    )
}

function PostItem({author, date, content, comments}){
    return (
        <div className='post'>
            <PostHeader author={author} date={date}/>
            <br></br>
            <p>{content}</p>
            <hr/> 
            <PostComment comments={comments}/>
        </div>
    )
}

export default PostItem;


