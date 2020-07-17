import React, { useState, useContext } from 'react';
import { Context } from '../../Context';
import Styles from "./AddTransaction.module.css"

export default function AddTransaction() {
    const { transactions, addTransaction } = useContext(Context);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        if (description.length > 0 && (amount > 0 || amount < 0)) {
            addTransaction({
                id: transactions.length + 1,
                description,
                amount
            })
        }
        setDescription("");
        setAmount("")
    }
    return (
        <>
            <h5>Add new transaction</h5>
            <hr />
            <form onSubmit={onSubmit}>
                <div className={Styles.formControl}>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Add Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={Styles.formControl}>
                    <label htmlFor="amount">Amount</label>
                    <label className={Styles.hint}>(negative-expense,positive-amount)</label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Add Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className={Styles.btn}>Add Transaction</button>
            </form>
        </>
    )
}
