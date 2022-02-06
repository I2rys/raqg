//Dependencies
const RAQG = require("../index")

//Main
void async function Main(){
    const result = await RAQG.generate()

    console.log(result)
}()