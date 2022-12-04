import React from 'react';

type ButtonPropsType = {
    name: string;
    started: () => void;
    disabled?: boolean;
}


const ButtonStyle = {
    color: 'blue',
    height: '30px',
    width: '50px',
    borderRadius: '8px',
    fontFamily: "Monotype Corsiva",
    fontSize: '20px',
    fontStyle: 'italic',
}


export const Button = (props: ButtonPropsType) => {
    return (
        <button style={ButtonStyle} disabled={props.disabled} onClick={props.started}>{props.name}</button>
    );
};

