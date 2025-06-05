import { useState } from "react"

const useCHook = (value=null) =>{

    const [val, setVal] = useState(value)

    const onChange = e =>{
      setVal(e.target.value)
    }

    return{
        val, onChange
    }
}
export default useCHook