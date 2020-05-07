
const Empty = Symbol('Empty')

const cons = (x,list=[]) =>{
  return [...list,x]
}

const head = (l) => {
  if(l == undefined || l.length == 0) {
    return Empty
  }
  return l[0]
}

const tail = (l) => {
  if(l == undefined || l.length ==0) {
    return Empty
  }
  return l[l.length-1]
}

const iterator = (l) => {
  let value = Empty
  let _index = 0
  return {
    next: () => {
      if(l == undefined || l.length ==0 || _index == l.length) {
        return false
      }
      value = l[_index]
      _index++
      return true
    },
    value: () =>{
      return value
    }
  }
}