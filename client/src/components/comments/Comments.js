import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import AllList from './AllList';

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get('/api/comments')
      .then( res => setComments(res.data))
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post('/api/comments', { comment })
      .then( res => setComments([...comments, res.data]))
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comments.map( l => {
          if (l.id == id) {
            return res.data
          }
          return l
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/comments/${id}`)
      .then( res => {
        setComments(comments.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <CommentForm addComment={addComment} />
      <h1>All Comments</h1>
      <AllList 
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;