import React from 'react'
import CardUser from './CardUser'

function UsersList({users, deleteUser, editUser, setFormVisible, reset, setModEdit}) {
  return (
    <div className='max-w-[95%] m-auto flex gap-x-8 gap-y-5 flex-wrap items-center justify-center pb-10'>
      {
        users.map((user) => <CardUser key={user.id} user={user} deleteUser={deleteUser} editUser={editUser} setFormVisible={setFormVisible} reset={reset} setModEdit={setModEdit}/>)
      }
    </div>
  )
}

export default UsersList
