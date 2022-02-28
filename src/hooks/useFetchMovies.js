import { useEffect, useState } from "react"
import { getMovies } from "../helpers/getMovies";

export const useFetchMovies = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
      getMovies().then( data => {
        setState({
            data,
            loading: false
        });
      });
    }, [])
    
    return state;
}