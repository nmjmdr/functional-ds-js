const car = (l) => {
    return l ? (()=>{
      const [x,...xs] = l
      return x 
    })()
    : 
    null
}
  
const cdr = (l) => {
   return l ? (()=>{
      const [x,...xs] = l
      return xs
    })()
    : 
    null
}

const isAtom = (a) => {
    // [] empty list is an atom
    // null, undefined and a list with one or more items is not an atom
    if(a == null || a == undefined) {
        return false
    }
    if(a.hasOwnProperty('length') && a.length > 0 && typeof(a) != 'string') {
        return false
    }
    return true
}

const isNull = (l) => {
    return (l == null || l == undefined) ?
      false 
      : (l.hasOwnProperty('length') && l.length == 0)
}

const eq = (a, b) => {
    return (!isAtom(a) || !isAtom(b)) ?
                              false
                              :
                              a === b
}

const cons = (x,l) => {
    return isNull(l) ? [x] : [x,...l]
}

const isLat = (l) => {
    return isNull(l) ? 
                     true
                     :
                     isAtom(car(l)) && isLat(cdr(l))
}

const isMember = (a, l) => {
    return isNull(l) ? 
            false :
            (eq(a, car(l)) || isMember(a, cdr(l)))
}

const cond = (condition, fx, fy) => {
    return condition ? fx() : fy()
}


const descendIsMember = (a, l) => {
    return cond(
        isNull(l), 
        ()=>false,
        ()=>{
            const x = car(l)
            const xs = cdr(l)

            return eq(a, x) ? 
                            true
                            :
                            (
                            isAtom(x) ?
                                descendIsMember(a, cdr(l)) 
                                :
                                descendIsMember(a, x) || descendIsMember(a, cdr(l))
                            )
        }
    )
}


