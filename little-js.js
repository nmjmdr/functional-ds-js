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

const cond = (fcond, fx, fy) => {
    return fcond() === true ? fx() : fy()
}


const descendIsMember = (a, l) => {
    return isNull(l) ?
             false :
             (
                eq(a, car(l)) ? 
                        true
                        :
                        (
                        isAtom(car(l)) ?
                            descendIsMember(a, cdr(l)) 
                            :
                            descendIsMember(a, car(l)) || descendIsMember(a, cdr(l))
                        ) 
             )
}

const atLeastNTimes = (a, n, l) => {
    return n == 0 ? 
        true :
        (
            isNull(l) ? 
                false :
                eq(a, car(l)) ? atLeastNTimes(a, n-1, cdr(l)) : atLeastNTimes(a, n, cdr(l))
        )
}

const occursNTimes = (a, n, l) => {
   const count = (x, s) => {
       return isNull(s) ?
            x :
            eq(a, car(s)) ? count(x+1, cdr(s)) : count(x, cdr(s)) 

   }
   return count(0, l) == n
}


console.log(descendIsMember('x',['a',['b',['c',['d','x'],'x', 'y']]]))


