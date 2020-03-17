import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
number.innerText = 0;

const reducer = (state = 0, action) => {
  console.log('action', action);
  if (action.type === 'ADD') {
    return state + 1;
  } else if (action.type === 'MINUS') {
    return state - 1;
  } else {
    return state;
  }
};
const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};
store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: 'ADD' });
};
const handleMinus = () => {
  store.dispatch({ type: 'MINUS' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);