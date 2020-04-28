const Empty = Symbol('Empty')

const cons = (x,list=Empty) =>{
  return {
    x,
    list
  }
}

const l = cons(3,(cons(2,cons(1))))

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

const iter = iterator(l)
while(iter.next()) {
  console.log(iter.value())
}

