import React from 'react';
import s from "./Max&&Min.module.css";



type InputType = {
    value: number
    onChange: (e: number) => void
    startValue:number
    MaxValue:number

}

export const Input = (props: InputType) => {

    return (
        <>
            <input value={props.value} onChange={(e) => props.onChange(+e.currentTarget.value)}
                    type='number'  className={props.startValue >= props.MaxValue || props.startValue < 0 ? s.error : ''}/>
        </>
    );
};

