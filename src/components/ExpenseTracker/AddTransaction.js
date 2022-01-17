import React, { useState, useContext } from 'react'
import { GlobalContext } from './Context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)
  const submitForm = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    }
    addTransaction(newTransaction)
    setText('')
    setAmount('')
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitForm}>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
 
    </div>
  )
}

export default AddTransaction
