import React from './react';
import ReactDOM from './react-dom';

class Counter extends React.Component {
  constructor (props) {
    super(props);//该句代码的作用是将父类(Component)构造函数重新执行一遍，由此拿到(继承)该父类组件内部所有的属性及方法
  }
  render () {
    return (
      <div>
        Counter
      </div>
    )
  }
}

const element = (
  <div>
    <h1>Hello, World!</h1>
    <Counter />
    <Counter />
    <h2>It is { new Date().toLocaleTimeString()}.</h2>
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
)


// setInterval(tick, 1000);