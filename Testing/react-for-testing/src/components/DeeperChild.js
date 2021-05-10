// import { useContext } from 'react';
import MyContext from '../App.js';

const DeeperChild = () => {

  console.log(MyContext);

  // const { nextTheme } = useContext(MyContext);

  return (
    <p>
      <button>Click Me !</button>
      
    </p>
  )
}

export default DeeperChild;
