import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, title, desc, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setComment({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ title: '', desc: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={comment.title}
          onChange={(e) => setComment({ ...comment, title: e.target.value })}
          required
          placeholder='Comment name'
        />
        <textarea
          name='desc'
          value={comment.desc}
          onChange={(e) => setComment({ ...comment, desc: e.target.value })}
          required
          placeholder='description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CommentForm;