import React, { useState, useEffect } from 'react'
const userData = [
  { id: 0, name: 'abbas' },
  { id: 1, name: 'ali' },
  { id: 2, name: 'arslan' },
  { id: 3, name: 'moiz' },
  { id: 4, name: 'mushtaq' },
]

function Tab2() {
  const [users, setUsers] = useState([])
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setUsers(userData)
  }, [])
  const handleChange = (e) => {
    console.log('e', e)
    const { name, checked } = e.target
    setChecked(!checked)
    console.log(e.target.checked)
    if (name === 'allSelect') {
      let updatedArr = users.map((user) => {
        return { ...user, isChecked: checked }
      })
      setUsers(updatedArr)
    } else {
      let tempUsers = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user,
      )
      setUsers(tempUsers)
    }
  }
  const handleDelete = (id, method) => {
    if (method === 'deleteAll') {
      let c = users.filter((item) => item.isChecked !== true)
      console.log('c', c)
      setUsers(c)
    } else {
      let b = users.filter((items) => {
        if (items.isChecked === undefined) {
          return items
        }
        else if (items.isChecked === true && items.id !== id) {
          return items
        }
      })

      setUsers(b)
    }
  }
  return (
    <>
      <div className="container">
        <h2>Check boxes</h2>
      </div>

      <div className="container">
        <div className="form">
          <h4>Select Users</h4>
          <div className="form-check">
            <input
              type="checkbox"
              name="allSelect"
              className="form-check-input"
              checked={
                users.filter((user) => user?.isChecked !== true).length < 1
              }
              onChange={handleChange}
            />
            <label>Select All</label>
            <button onClick={() => handleDelete('', 'deleteAll')}>
              delete
            </button>
          </div>
          {users.map((user, index) => (
            <div className="form-check">
              <input
                key={index}
                type="checkbox"
                name={user.name}
                checked={user?.isChecked || false}
                className="form-check-input"
                onChange={handleChange}
              />
              <label>{user.name}</label>
              {user.isChecked?<button onClick={() => handleDelete(user.id)}>delete</button>:''}
            </div>
          ))}
          <span>{checked}</span>
        </div>
      </div>
    </>
  )
}
export default Tab2