import { useEffect, useState } from "react"

const useParts = () =>{
    const [parts , setParts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/parts`)
        .then(res => res.json())
        .then(data => setParts(data))
    },[parts])
    return [parts];
}

export default useParts;