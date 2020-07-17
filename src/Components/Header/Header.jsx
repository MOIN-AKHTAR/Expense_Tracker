import React, { useContext } from 'react';
import CountUp from 'react-countup'
import { Context } from '../../Context'
import Styles from "./Header.module.css";

export default function Header() {
    const { transactions } = useContext(Context);
    // Array Of Amounts
    const amounts = transactions.map(transaction => transaction.amount * 1);
    // Total Amount
    const total = amounts.reduce((prev, curr) => prev += curr * 1, 0);
    //    Total Income
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    //   Total Expense
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);
    return (
        <div>
            <h2 className={Styles.expenseHeading}>Expense Tracker</h2>
            <h4>Your Balance</h4>
            <h1>$<CountUp
                start={0}
                end={total}
                duration={2.75}
                separator=","
            />
            </h1>
            <div className={Styles.inc_exp_div}>
                <div>
                    <h4>Income</h4>
                    <h5 className={Styles.inc}>$<CountUp
                        start={0}
                        end={income}
                        duration={2.75}
                        separator=","
                    /></h5>
                </div>
                <div>
                    <h4>Expense</h4>
                    <h5 className={Styles.exp}>$<CountUp
                        start={0}
                        end={expense}
                        duration={2.75}
                        separator=","
                    />
                    </h5>
                </div>
            </div>
        </div>
    )
}
