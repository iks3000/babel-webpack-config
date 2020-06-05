import React from 'react';
import ReactDOM from 'react-dom';

class Test {
  run = async(name = 'World') => {
    console.log(`Hello ${ name }`)
    console.log([1, 2, 3, [2, 3]].flat());
  }
};

const test = new Test();
test.run()
  .then(() => console.log('done'))
  .catch(() => console.log('Error!'));

const App = () => <p>Hello</p>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);