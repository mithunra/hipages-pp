import {useEffect} from "react";
import {getQuotes} from "../api";

export const Quotes = () => {

    useEffect(()=>{
        getQuotes().then(data => console.log(data));
    },[])

    //TODO: get quotes by using the quotes api adn render them in the required format
    return <div>Render Quotes</div>
}
