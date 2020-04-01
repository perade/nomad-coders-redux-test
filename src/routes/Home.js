import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import ToDo from '../components/ToDo';

function Home ({ toDos, addToDo }) {
  const [text, setText] = useState('');
  function onChange (e) {
    setText(e.target.value);
  };
  function onSubmit (e) {
    e.preventDefault();
    addToDo(text);
    setText('');
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}
      </ul>
    </>
  );
};

function mapStateToProps (state) {
  return { toDos: state };
};

function mapDispatchToProps (dispatch) {
  return {
    addToDo: text => dispatch(add(text))
  };
};

/**
 * Home을 store에 연결 후,
 * mapStateToProps를 활용하여 Home의 props에다 state를 전달
 * mapDispatchToProps를 활용하여 Home의 props에다 dispatch를 전달
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);