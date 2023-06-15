import React, { useState, useEffect } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8070/api/v1/comment/find-all') 
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);
  const handleDecisionClick = (commentId, decision) => {
    
    console.log(`Comment ID: ${commentId}, Decision: ${decision}`);
  };

  return (
    <div className="commentList">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Comment</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.name}</td>
              <td>{comment.companyId}</td>
              <td>{comment.content}</td>
              <td>
                <button onClick={() => handleDecisionClick(comment.id, 'approve')}>Approve</button>
                <button onClick={() => handleDecisionClick(comment.id, 'reject')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentList;
