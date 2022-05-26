import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(`https://shielded-castle-46219.herokuapp.com/parts`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts];
}

export default useParts;