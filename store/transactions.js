import dayjs from 'dayjs'
import 'dayjs/plugin/utc'

const TRANSACTIONS_KEY = '__TRANSACTIONS'
export const state = () => {
  let transactions

  if (!!localStorage.getItem(TRANSACTIONS_KEY)) {
    transactions = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY))
  } else {
    transactions = []
  }
  return { transactions }
}

export const mutations = {
  add(state, { id, date, transactionType, budget, amount, payee, category }) {
    state.transactions.push({
      id,
      date,
      transactionType,
      budget,
      amount,
      payee,
      category,
      createdAt: dayjs().utc(),
    })

    console.log(JSON.stringify(state.transactions))
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(state.transactions))
  },
  remove(state, id) {
    const updatedTransactions = JSON.parse(
      JSON.stringify(state.transactions.filter((p) => p.id !== id))
    )
    state.transactions = updatedTransactions

    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updatedTransactions))
  },
  update(
    state,
    { id, category, description, amount, date, transactionType, budget }
  ) {
    const list = JSON.parse(JSON.stringify(state.transactions))

    const updatedTransactions = list.map((p) => {
      return p.id === id
        ? {
            ...p,
            date,
            category,
            description,
            budget,
            amount,
            transactionType,
            updatedAt: dayjs().utc(),
          }
        : p
    })

    state.transactions = updatedTransactions

    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updatedTransactions))
  },
}
