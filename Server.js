import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Server() {
    const [name, setName] = useState("")
    const state = useSelector((state) => state.users)
    console.log(state)
    const dispatch = useDispatch()

    const addData = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * (0 - 100 + 1)) + 100

        return dispatch({
            type:'add',
            playload: { id,name }
        })
    }
    const deleteData = (id) => {
        return dispatch({
            type: 'del',
            playload: id
        })
    }

  return (
    <center>
        <form method='POST'>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={addData}>ADD</button>
        </form>
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Action</td>
            </tr>
            {
                state && state.map((item) =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => dispatch()}>EDIT</button>
                            <button onClick={() => deleteData(item.id)}>DELETE</button>
                        </td>
                    </tr>
                )
            }
        </table>
    </center>
  )
}
