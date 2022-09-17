import { useState } from 'react';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';

const CommentShow = ({ id, title, desc, updateComment, deleteComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <CommentForm 
            updateComment={updateComment}
            id={id}
            title={title}
            desc={desc}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} {desc}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteComment(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/comment`} //path of where its going to 
            // id the list id
            state={{ CommentTitle: title }}
            // state only read only value to pass to the page
          >
            <button>Services</button>
          </Link>
        </div>
      }
      <h1 />
    </>
  )
}

export default CommentShow;