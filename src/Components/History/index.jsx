import React, { useContext } from 'react';
import { Context } from '../../Context';
import Styles from "./History.module.css";
import List from './List'

export default function History() {
    const { transactions } = useContext(Context);
    return (
        <div className={Styles.history}>
            <h5>History</h5>
            <hr />
            {transactions.length > 0 && transactions.map(({ id, description, amount }) => <List key={id} description={description} amount={amount} id={id} />)}</div>
    )
}
