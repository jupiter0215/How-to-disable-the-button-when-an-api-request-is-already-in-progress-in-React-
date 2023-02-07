import * as React from 'react';
import './style.css';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    setData(await data.json());
    setIsLoading(false);
  };

  const handleClick = () => {
    setIsLoading(true);
    try {
      getData();
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button disabled={isLoading} onClick={handleClick}>
        Button
      </button>{' '}
      <br />
      {JSON.stringify(data)}
    </div>
  );
}
