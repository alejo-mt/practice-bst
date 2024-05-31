import { useState } from 'react';
import Tree from '../classes/Tree.js'; // Assuming Tree.js is in the same directory

const InputBuild = ({ setShowMethods, setBstTree }) => {
  const [values, setValues] = useState(Array(6).fill(''));
  //   const [bst, setBst] = useState(null);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberValues = values.map(Number);
    const bstTree = new Tree(numberValues);
    setShowMethods(true);
    setBstTree(bstTree);
    console.log('Arbol creado con los valores: ', bstTree.walk().join(', '));
    // setBst(bstTree);
  };

  return (
    <div>
      <h3>Crea tu árbol binario</h3>
      <form onSubmit={handleSubmit}>
        <div id='form__container'>
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                marginBottom: '2rem',
                display: 'flex',
              }}
            >
              <input
                style={{ width: '60%' }}
                type='number'
                value={value}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
          ))}
        </div>
        <button type='submit'>Crear árbol</button>
      </form>
      {/* {bst && (
        <div>
          <h3>BST In-order Traversal:</h3>
          <p>{bst.walk().join(', ')}</p>
        </div>
      )} */}
    </div>
  );
};

export default InputBuild;
