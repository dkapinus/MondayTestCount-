import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button";

type CounterType = {
    inc: () => void
    reset: () => void
    disable: number
    StartValue: number
    fastMax: number
    fastMin: number
    active:boolean
}


export const Counter = (props: CounterType) => {


    const Inc = () => {
        props.inc()
    }

    const Reset = () => {
        props.reset()
    }

    const Div = () => {

        if (props.fastMin >= props.fastMax) {
            return <div className={s.error}>{'incorect'}</div>
        }
        else if(props.fastMin<0){return <div className={s.error}>{'incorect'}</div>}
        else if (props.fastMin&&props.active ){return <div>{'enter value and "press set" '}</div>}
        else if (props.fastMax&&props.active){return <div>{'enter value and "press set" '}</div>}
        else {
            return <div>{props.StartValue}
            </div>
        }

    }

    return (
        <div className={s.around_wrapper}>
            <div className={s.score}>
                <div className={props.StartValue >= props.disable &&props.active===false ? s.error : ''}>{Div()}</div>
            </div>

            <div className={s.around}>
                <Button onClick={Inc} disable={props.StartValue >= props.disable} name={'inc'}/>
                <Button onClick={Reset}  name={'reset'}/>

            </div>

        </div>
    );
};

