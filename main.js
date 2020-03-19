function mappingExists(s1,s2){
    if(typeof s1 !== "string" || typeof s2 !== "string") //Only strings are allowed
        return false
    if(s1.length !== s2.length) //both strings should be of same length
        return false
    if(s1.length === 0 || s2.length === 0) //strings should have length greater than zero
        return false
    let map = new Map()
    for(let i=0;i<s1.length;i++){
        let a = s1.charAt(i)
        let b = s2.charAt(i)
        if(map.has(a)){
           if(map.get(a) === b)
                continue
            else
                return false
        }
        else
            map.set(a,b)
    }
    return true
    
}
let s1 = "abc"
let s2 = "bcd"
console.log(mappingExists(s1,s2))