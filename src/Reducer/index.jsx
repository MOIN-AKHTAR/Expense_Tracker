import { ADD_TRANSACTION, REMOVE_TRANSACTION } from './Types'


export const Reducer = (State = {}, Action) => {
    switch (Action.type) {
        case ADD_TRANSACTION: {
            return {
                ...State,
                transactions: [...State.transactions, Action.Payload]
            }
        }
        case REMOVE_TRANSACTION: {
            return {
                ...State,
                transactions: State.transactions.filter(transaction => transaction.id !== Action.Payload)
            }
        }
        default: {
            return State;
        }
    }
}


