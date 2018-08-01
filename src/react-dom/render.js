import { setAttribute } from './dom';
function _render (vnode) {
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return textNode
  }

  //组件本质上也是一个函数
if(typeof vnode.tag === 'function') {
  // 在jsx 标签<Counter />
  // 普通标签就会来到_render，_render()方法处理普通标签的转化
  //不是普通标签，就来到"function"，-》 来到组件(因为组件本质上也是一个函数)
  const component = createComponent(vnode.tag, vnode.attrs);
  setComponentProps(component, vnode.attrs);
  // console.log(vnode);
  return component.base;
}

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      //不是简单的setAttribute 而是 onClick className {obj}
      setAttribute(dom, key, value);
    });
  }
  vnode.children.forEach(child =>  render(child, dom));
  return dom;
}

function createComponent (component, props) {
  let inst;
  if(component.prototype && component.prototype.render) {
    inst = new component(props);
  }
  return inst;
}
function setComponentProps(component, props) {
  renderComponent(component);//渲染组件
}
export function renderComponent(component) {
  // 实现组件显示
  let base;
  const renderer = component.render();//调用组件上的render方法
  base = _render(renderer);//复用_render（）方法，将jsx转变为真实的DOM
  component.base = base;
}

export function render (vnode, container) {
  return container.appendChild(_render(vnode));
}