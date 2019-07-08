// import _ from 'lodash';
import A from './a'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const a = new A()
  element.innerHTML = 'h5: ' + a.test();
  return element;
}

document.body.appendChild(component());