import Test1 from './Test1';
const Test = ({ loading, data }) => <>{loading ? <p>laoding...</p> : <Test1 text={data.text} />}</>;

export default Test;
