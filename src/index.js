// import _ from 'lodash';
import A from './a'
import B from './b'
import './style.css'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const a = new A()
  element.innerHTML = 'index: ' + a.test();
  element.classList.add('hello');
  // a.testPa();
  // a.testPb();
  a.testPc();
  return element;
}

document.body.appendChild(component());