import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from "./Button";


export const Counter = () => {


    let [value, setValue] = useState(0)

    const onclickHandlerInc = () => {
        // setValue(value + 1)
        setValue((prevState) => prevState + 1)
    }


    const onclickHandlerReset = () => {
        setValue(0)
    }

    // const red = {
    //     color: value > 4 ? 'red' : 'black',
    //     marginTop: '15px',
    //
    // }

    const valueClassName = `${s.score} ${value > 4 ? s.error : ''}`;

    const boxValue = {
        width: '100px',
        height: '50px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid blue',
        backgroundColor: '#61dafb',
        marginTop: '10px'
    }

    const Around = {
        width: '200px',
        height: '100px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid #61dafb',
        fontFamily: "Monotype Corsiva",
        fontSize: '28px',
        fontStyle: 'italic',
        marginTop: '100px'
    }


    return (
        <div className={s.fon}>

            <div style={Around}>
                  <span style={boxValue}>

               <div className={valueClassName}>{value}</div></span>
                <div>

                    <Button name={'inc'} started={onclickHandlerInc} disabled={value === 5}/>
                    <Button name={'reset'} started={() => onclickHandlerReset()}/>

                </div>
            </div>


        </div>
    );
};

