import Test from '../components/Test';

const Users = (props) => {
  const data = { text: 'text' };
  return (
    <>
      <Test loading={true} data={data} />
      <p>{props.stars}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return { props: { stars: json.stargazers_count }, revalidate: 1 };
}

export default Users;
