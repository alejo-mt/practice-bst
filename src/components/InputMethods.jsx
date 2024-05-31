import { useState } from 'react';
import prettyPrint from '../utils/prettyPrint';

function InputMethods({ bstTree }) {
  const [value, setValue] = useState({
    insert: '',
    delete: '',
    find: '',
    successor: '',
    predecessor: '',
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleInsert = (event) => {
    event.preventDefault();
    if (bstTree) {
      bstTree.insert(Number(value.insert));
      console.log(`Insertado ${value.insert} en el árbol.`);
      setValue({ ...value, insert: '' });
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (bstTree) {
      bstTree.delete(Number(value.delete));
      console.log(`Eliminado ${value.delete} del árbol.`);
      setValue({ ...value, delete: '' });
    }
  };

  const handleFind = (event) => {
    event.preventDefault();
    if (bstTree) {
      const foundNode = bstTree.find(Number(value.find));
      console.log(
        foundNode
          ? `Encontrado: ${foundNode.data} (izquierda: ${foundNode.left?.data}, derecha: ${foundNode.right?.data})`
          : `Valor ${value.find} no encontrado.`
      );
      setValue({ ...value, find: '' });
    }
  };

  const handleMinimum = (event) => {
    event.preventDefault();
    if (bstTree) {
      const minNode = bstTree.minimum();
      console.log(
        minNode ? `Valor mínimo: ${minNode.data}` : 'El árbol está vacío.'
      );
    }
  };

  const handleMaximum = (event) => {
    event.preventDefault();
    if (bstTree) {
      const maxNode = bstTree.maximum();
      console.log(
        maxNode ? `Valor máximo: ${maxNode.data}` : 'El árbol está vacío.'
      );
    }
  };

  const handlePrint = (event) => {
    event.preventDefault();
    prettyPrint(bstTree.root);
  };

  const handleSuccessor = (event) => {
    event.preventDefault();
    if (bstTree) {
      const succ = bstTree.successor(Number(value.successor));
      console.log(
        succ
          ? `Sucesor de ${value.successor}: ${succ}`
          : `No se encontró sucesor para ${value.successor}.`
      );
      setValue({ ...value, successor: '' });
    }
  };

  const handlePredecessor = (event) => {
    event.preventDefault();
    if (bstTree) {
      const pred = bstTree.predecessor(Number(value.predecessor));
      console.log(
        pred
          ? `Predecesor de ${value.predecessor}: ${pred}`
          : `No se encontró predecesor para ${value.predecessor}.`
      );
      setValue({ ...value, predecessor: '' });
    }
  };

  return (
    <div>
      <h3>Acciones del Árbol</h3>

      <form onSubmit={handleInsert}>
        <label>
          Insertar:
          <input
            type='number'
            name='insert'
            value={value.insert}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>►</button>
      </form>

      <form onSubmit={handleDelete}>
        <label>
          Eliminar:
          <input
            type='number'
            name='delete'
            value={value.delete}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>►</button>
      </form>

      <form onSubmit={handleFind}>
        <label>
          Encontrar:
          <input
            type='number'
            name='find'
            value={value.find}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>►</button>
      </form>

      <form onSubmit={handleSuccessor}>
        <label>
          Sucesor:
          <input
            type='number'
            name='successor'
            value={value.successor}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>►</button>
      </form>

      <form onSubmit={handlePredecessor}>
        <label>
          Predecesor:
          <input
            type='number'
            name='predecessor'
            value={value.predecessor}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>►</button>
      </form>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <form onSubmit={handleMinimum}>
          <button type='submit'>Mínimo valor</button>
        </form>

        <form onSubmit={handleMaximum}>
          <button type='submit'>Máximo valor</button>
        </form>

        <form onSubmit={handlePrint}>
          <button type='submit'>Visualizar grafo</button>
        </form>
      </div>

      {/* {result && <p>{result}</p>} */}
    </div>
  );
}

export default InputMethods;
