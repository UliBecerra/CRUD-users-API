import React from 'react'

function CardUser({user, deleteUser, editUser, setFormVisible,reset, setModEdit  }) {
  const clickEdit = () => {

    setFormVisible((show) => !show)
    reset(
      {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email, 
      password: user.password,
      birthday: user.birthday,
      image_url: user.image_url
  })
  setModEdit(true)
  }
  return (
    
      <article className='min-w-[320px] min-h-[230px] max-w-[320px] max-h-[275px] bg-white border-2 border-gray-200 p-3 ' >
        <h1 className='text-[25px] font-[600] '>{user.first_name + user.last_name}</h1>
        <section className='grid grid-cols-2  '>
        <article className='grid place-content-center justify-start pt-2'>
          <h2 className=' font-semibold text-gray-400'>EMAIL</h2>
          <h2 className=''>{user.email}</h2>
          <h2 className=' font-semibold text-gray-400'>BIRTHDAY</h2>
          <h2 className=' '>{user.birthday ? user.birthday : 'Falta menos de un año...'}</h2>
        </article>
        <div className='p-0 h-[120px] flex justify-around aspect-square '> 
        {user.image_url ? <img className='rounded-full ' src={user.image_url} alt="" /> : <img className='rounded-full' src='https://static.thenounproject.com/png/4604295-200.png' alt="" />}
        </div>
        
        </section>
        <div className="flex items-center justify-end px-10 gap-4">
        <i className='bx bx-trash bg-[#D85D5D] h-[43px] text-[30px] text-white rounded-[4px] border-[1px] border-[#D93F3F] aspect-square grid place-content-center cursor-pointer' onClick={() => deleteUser(user.id)}></i>
        <i className='bx bx-pencil bg-[#F6F6F6] h-[43px] text-[30px] text-[#D3D3D3] rounded-[4px] border-[1px] border-[#BDBDBD] aspect-square grid place-content-center cursor-pointer' onClick={() =>clickEdit()}></i>
        </div>
      </article>
    
  )
}

export default CardUser
