

const Maybe = (x) => {
  return {
    isNothing: () => x == undefined || x ==  null,
    map: (f) =>  isNothing() ? Maybe(x) : f(x)
  }
}

const cons = (x,list=Empty) =>{
  return {
    x,
    list
  }
}

const head = (l) => {
  if(l==Empty) {
    return Empty
  }
  const {x,list} = l
  return list==Empty?
             x :
             head(list)
}

const tail = (l) => {
  if(l==Empty) {
    return Empty
  }
  const {x,list} = l
  return x
}

const iterator = (l) => {
  let value = Empty
  let _list = l
  return {
    next: () => {
      if(_list==Empty) {
        return false
      }
      const {x,list} = _list
      _list = list
      value = x
      return true
    },
    value: () =>{
      return value
    }
  }
}


module.exports = {
  cons,
  head,
  tail,
  iterator,
}