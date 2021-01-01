import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const BUDGETS_KEY = '__BUDGETS'

export const state = () => {
  let budgets

  if (!!localStorage.getItem(BUDGETS_KEY)) {
    budgets = JSON.parse(localStorage.getItem(BUDGETS_KEY))
  } else {
    budgets = []
  }
  return { budgets }
}

export const mutations = {
  add(state, { id, name, category, amount, year, month }) {
    state.budgets.push({
      id,
      name,
      category,
      amount,
      year,
      month,
      createdAt: dayjs().utc(),
    })
    localStorage.setItem(BUDGETS_KEY, JSON.stringify(state.budgets))
  },
  remove(state, id) {
    const updatedBudgets = state.budgets.filter((p) => p.id !== id)
    state.budgets = updatedBudgets
    localStorage.setItem(BUDGETS_KEY, JSON.stringify(updatedBudgets))
  },
  update(state, { id, name, category, amount, year, month }) {
    const updatedBudgets = state.budgets.map((p) =>
      p.id === id
        ? {
            ...p,
            name,
            category,
            amount,
            year,
            month,
            updatedAt: dayjs().utc(),
          }
        : p
    )
    state.budgets = updatedBudgets
    localStorage.setItem(BUDGETS_KEY, JSON.stringify(updatedBudgets))
  },
}
