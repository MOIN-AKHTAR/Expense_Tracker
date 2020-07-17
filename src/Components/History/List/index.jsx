import React, { useContext } from 'react';
import { Context } from '../../../Context'
import Styles from "./List.module.css"

export default function List({ description, amount, id }) {
    const { removeTransaction } = useContext(Context);
    const sign = amount > 0 ? "+" : "-"
    const plusOrMinusClass = amount > 0 ? Styles.plus : Styles.minus;
    amount = amount < 0 ? amount * -1 : amount
    return (
        <div className={Styles.mainDiv}>
        <h1 onClick={() => {
                removeTransaction(id)
            }}>X</h1>
        <div
            className={[Styles.list, plusOrMinusClass].join(" ")}
            
        >
            <h5>{description}</h5>
            <h5>{`${sign}$${amount}`}</h5>
        </div>
        </div>
    )
}
