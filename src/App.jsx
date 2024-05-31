import { useState } from 'react';
import './App.css';
import InputBuild from './components/InputBuild.jsx';
import InputMethods from './components/InputMethods.jsx';

function App() {
  const [showMethods, setShowMethods] = useState(false);
  const [bstTree, setBstTree] = useState(null);

  return (
    <>
      <h1>Árboles Binarios (BST)</h1>
      {showMethods ? (
        <InputMethods bstTree={bstTree}></InputMethods>
      ) : (
        <InputBuild
          setBstTree={setBstTree}
          setShowMethods={setShowMethods}
        ></InputBuild>
      )}
    </>
  );
}

export default App;
