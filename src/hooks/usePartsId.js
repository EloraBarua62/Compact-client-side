import { useEffect, useState } from "react";


const usePartsId = id => {
    const [part, setPart] = useState({});

    useEffect(() => {
        fetch(`https://shielded-castle-46219.herokuapp.com/parts/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id]);
    return [part];
}

export default usePartsId;