import Router from 'next/router';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <button key={post.id} onClick={() => Router.push(`posts/${post.id}`)}>
          {post.description}
        </button>
      ))}
    </div>
  );
};

Posts.getInitialProps = async () => {
  const posts = [
    {
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
    {
      id: 2,
      description: 'post2',
      comments: [
        {
          id: 3,
          description: 'comment 3'
        }
      ]
    },
    {
      id: 3,
      description: 'post3',
      comments: [
        {
          id: 4,
          description: 'comment 4'
        }
      ]
    }
  ];

  return { posts };
};

export default Posts;
