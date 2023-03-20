import React from 'react';
import s from "./Counter.module.css";

type ButtonType = {
    onClick: () => void
    disable?: boolean
    name:string
}


export const Button = (props: ButtonType) => {

    return (
        <>
   <button onClick={props.onClick} disabled={props.disable} className={s.button}>{props.name}</button>
        </>
    );
};

