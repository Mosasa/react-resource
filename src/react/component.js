class Component {
  constructor(props = {}) {//ES6:给props参数赋一个默认值
    this.isReactComponent = true;
    this.state = {};
    this.props = props;
  }
  setState (stateChange) {
    Object.assign(this.state, stateChange);//合并stateChange与this.state
  }
}

export default Component;