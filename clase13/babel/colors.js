const colorRandom = ()=>{
    let a = Math.floor(Math.random()* (255-0+1)+0)
    let b = Math.floor(Math.random()* (255-0+1)+0)
    let c = Math.floor(Math.random()* (255-0+1)+0)
   return ("rgb("+ a.toString()+ "," + b.toString() + ","+ b.toString()+ ")")     
    
}//ES6


module.exports= colorRandom