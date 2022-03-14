import axios from "axios";
import { useEffect, useState } from "react";

//hooks for genarac resquest from API
export function useApi(url){
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get(url)
        .then(response =>{
            setData(response.data)
        })
    })

    return {data}
}