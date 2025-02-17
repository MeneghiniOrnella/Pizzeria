import '../Styles/styleList.css';
import { Redirect } from "react-router-dom";
import React, {useState} from 'react';

let Card = (props) => {
    //const [result, setResult] = useState("");
    /* const handleClick = (event) => {
        const amount = {props.amount}+1;
    } 
    const clear =()=> {
        {props.amount}
    } */
    return(
        <div className='card'>
            <img src={props.img} alt={props.name} />
            <ol className='productInfo'>
                <li className='productName'>{props.name} {props.size} {props.amount}</li>
                <li>$ {props.price}</li>
            </ol>
            <button type="submit" className='submitPlus'>+</button>
            {/* <div className='amountChange'>
            <button name ="1" onClick={handleClick} value="1">+</button>
            </div> */}
        </div>
    )
}

export default Card;