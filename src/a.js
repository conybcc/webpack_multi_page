import Promise from 'bluebird'

export default class A {
  test() {
    // console.log('A.test run ss')
    return 'test'
  }

  arrow = m => {
    let s = ['a', 'b', 'c']
    s.map(v => console.log(m, v))
  }

  testPa() {
    console.log('------p1 start-------')
    let p1 = new Promise((resolve, reject) => {
      console.log('testPa')
      // resolve('test pa ok')
      setTimeout(_ => reject(new Error('error example like 303')), 2000)
    })

    console.log('------p2 start-------')
    let p2 = p1.then(data => {
      console.log('pa then', data)
    })

    console.log('------p3 start-------')
    let p3 = p2.catch(error => {
      console.log('testpa catch error', error.message)
    })
    console.log('bit p1 ', p1._bitField)
    console.log('bit p2 ', p2._bitField)
    console.log('bit p3 ', p3._bitField)
  }

  testPb() {
    console.log('------p1 start-------')
    let p1 = new Promise((resolve, reject) => {
      console.log('testPb')
      // resolve('test pb ok')
      setTimeout(_ => {
        console.log('start reject pb')
        reject(new Error('error example like 404'))
      }, 4000)
    })
    console.log('------p2 start-------')
    let p2 = p1.then(data => {
      console.log('then', data)
    })

    console.log('------p3 start-------')
    let p3 = p1.catch(error => {
      console.log('testpb catch error', error.message)
    })
    console.log('bit p1 ', p1._bitField)
    console.log('bit p2 ', p2._bitField)
    console.log('bit p3 ', p3._bitField)
  }

  testPc() {
    new Promise((resolve, reject) => {
      setTimeout(_ => reject(new Error('error example like 505')), 22)
    })
    .catch(error => console.log('testpc catch error c1 ', error.message))
    .then(data => console.log('thenc1', data))

    new Promise((resolve, reject) => {
      setTimeout(_ => reject(new Error('error example like 606')), 55)
    })
    .then(data => console.log('thenc2', data))
    .catch(error => console.log('testpc catch error c2', error.message))
  }
}