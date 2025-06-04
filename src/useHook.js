import { useState } from "react"

const useHook=(value=null)=>{
    const [val,setVal] = useState(value)

    // const handleChangeDemand = e =>{
    //     setVal(e.target.value)
    // }
     const onChange = e =>{
        setVal(e.target.value)
    }

    // return [val, handleChangeDemand]

    return {
        val, onChange
    }
}
export default useHook;