import { createContext } from "react"


const contexto = createContext({contador:0})
console.log(contexto)

const {provider, consumer}= contexto 


export default context 