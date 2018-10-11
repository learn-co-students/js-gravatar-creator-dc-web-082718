class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(userInput){
    let array = md5.array(userInput)
    this.colorValue = array.slice(0,3)
    this.isColored = array.slice(0,15).map(x =>{
      if (x%2 == 0){
        return true
      }
      else{
        return false
      }
    })
  }
    get backgroundColor(){
      return `rgb(${this.colorValue[0]}, ${this.colorValue[1]}, ${this.colorValue[2]})`
    }

    get identiconArray(){
      let twoDimensional =[]
      let j = 0
      for (let i = 0; i < this.isColored.length; i+=3){
        let arr = this.isColored.slice(i,i+3);
        twoDimensional[j] = [arr[0], arr[2], arr[1], arr[2], arr[0]];
        j++
      }
      return twoDimensional.flat()
    }


}
