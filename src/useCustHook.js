import { useState } from "react"

const useCustHook = (value =null) =>{
    const [val,setVal] = useState(value)

    const handleChange=e=>{
        setVal(e.target.value)
    }
    return [val,handleChange]
}

export default useCustHook