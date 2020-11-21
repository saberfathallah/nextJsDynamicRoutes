import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  // @ts-ignore
  return (
    <>
      <p>Post: {id}</p>
      <p>{post.description}</p>
      <button
        onClick={() =>
          router.push(
            {
              pathname: '/posts/[id]',
              query: { hoo: 'far' }
            },
            {
              pathname: `/posts/${id}`,
              query: { hoo: 'far' }
            }
          )
        }>
        add query params
      </button>
      <>
        {post.comments.map((comment) => (
          <button key={comment.id} onClick={() => router.push(`${id}/comments/${comment.id}`)}>
            {comment.description}
          </button>
        ))}
      </>
    </>
  );
};
export default Post;

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const posts = {
    1: {
      id: 1,
      description: 'post1',
      comments: [
        {
          id: 1,
          description: 'comment 1'
        },
        {
          id: 2,
          description: 'comment 2'
        }
      ]
    },
    2: {
      id: 2,
      description: 'post2',
      comments: [
        {
          id: 3,
          description: 'comment 3'
        }
      ]
    },
    3: {
      id: 3,
      description: 'post3',
      comments: [
        {
          id: 4,
          description: 'comment 4'
        }
      ]
    }
  };
  const post = posts[params.id];

  return { props: { post } };
}
