import CommentShow from './CommentShow';

const CommentList = ({ comments, updateComment, deleteComment }) => (
  <>
    { comments.map( n => 
      <CommentShow
        key={n.id}
        {...n}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    )}
  </>
)

export default CommentList;