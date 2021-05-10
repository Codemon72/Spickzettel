import DeeperChild from "./DeeperChild"

const DirectChild = () => {

  console.log('Directchild');

  const logBreak = () => {
    console.log('---Break---');
  };

  return (
    <nav>
      <DeeperChild />

      <button onClick={logBreak}>Log a Break</button>
      
    </nav>
  )
}

export default DirectChild;
