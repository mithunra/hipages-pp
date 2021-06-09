import {useEffect, useState} from "react";
import {getQuotes} from "../api";
import {useHistory} from "react-router-dom";

export const BadDesign = () => {
    const history = useHistory();
    const [quotes, setQuotes] = useState<any>([]);
    useEffect(()=>{
        getQuotes().then(data => setQuotes(data));
        history.push('/home')
    },[history])

    //TODO: get quotes by using the quotes api adn render them in the required format
    return <div>{quotes.map(({name}: any, index: string)=><p key={index}>{name}</p>)}</div>
}
