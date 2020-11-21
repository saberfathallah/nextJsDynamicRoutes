import { useRouter } from 'next/router';
import Link from 'next/link';

const Comment = ({ comment }) => {
  const router = useRouter();
  const { comment: commentId, id } = router.query;

  return (
    <>
      <p>comments: {commentId}</p>
      <Link
        href={{ pathname: '/posts/[id]/comments/[comment]', query: { foo: 'bar' } }}
        as={{ pathname: `/posts/${id}/comments/${commentId}`, query: { foo: 'bar' } }}>
        <a>queryparams: {comment.description} </a>
      </Link>
      <button
        onClick={() =>
          router.push(
            {
              pathname: '/posts/[id]/comments/[comment]',
              query: { foo: 'bar' }
            },
            {
              pathname: `/posts/${id}/comments/${commentId}`,
              query: { foo: 'bar' }
            }
          )
        }>
        {comment.description}
      </button>
    </>
  );
};

Comment.getInitialProps = async (context) => {
  const commentId = context.query.comment;
  const comments = {
    1: {
      id: 1,
      description: 'comment 1'
    },
    2: {
      id: 2,
      description: 'comment 2'
    },
    3: {
      id: 3,
      description: 'comment 3'
    },

    4: {
      id: 4,
      description: 'comment 4'
    }
  };
  // @ts-ignore
  return { comment: comments[commentId] };
};

export default Comment;
