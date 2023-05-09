function UsersForm({
  postUser,
  formVisible,
  setFormVisible,
  register,
  handleSubmit,
  reset,
  modEdit,
  editUser,
  errors,
  defaultValues
  
}) {
 

  const submit = (data) => {
    if (!data.birthday) {
      data.birthday= null
    }
    if (!data.image_url) {
      data.image_url= null
    }
    if (modEdit) {
      
      editUser(data);
    } else {
      postUser(data);
    }

    reset(defaultValues);
  };
  const handleX = () => {
    setFormVisible((show) => !show);
  };

  return (
    <div
      className={` ${
        formVisible ? "visible" : "invisible"
      } absolute  min-w-full h-screen  bg-black/40 grid place-content-center  `}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className={
          "relative border-2 border-gray-400 bg-white max-w-[315px] max-h-[500px] grid gap-2 p-4 "
        }
      >
        <i
          className="bx bx-x absolute right-0 p-2 text-[25px] cursor-pointer"
          onClick={handleX}
        ></i>
        <h2 className="font-[800] text-[23px] max-w-fit">
          {modEdit ? "Edit user" : "New User"}
        </h2>
        
        <div className=" flex gap-2 h-[40px] items-center max-w-fit">
            <label htmlFor="first_name">
              <i className="bx bxs-user"></i>
            </label>

            <section className="grid grid-cols-2 gap-2">
            <input
              className="border-[1px] border-[#C3C1C1]   bg-[#F9FAFC] placeholder:text-[#BDBDBD] p-1 px-2 rounded-md hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg "
              type="text"
              name="first_name"
              id="first_name"
              placeholder="first name"
              {...register("first_name", 
              {required: {
                value:true,
                message:'your must enter your first name'
              },
              minLength:{
                value: 1,
                message: 'Name very short'
              },
              maxLength:{
                value:25,
                message: 'Name very long'
              }
              })}
             
            />
            
            <input
              className="  bg-[#F9FAFC] p-1 px-2 rounded-md  border-[1px] border-[#C3C1C1] placeholder:text-[#BDBDBD] hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg"
              type="text"
              name="last_name"
              placeholder="last name"
              {...register("last_name", 
              {required: {
                value:true,
                message:'your must enter your last name'
              },
              minLength:{
                value: 1,
                message: 'Name very short'
              },
              maxLength:{
                value:25,
                message: 'Name very long'
              }
              })}
            />
            </section>
            
          
        </div>
        <div className="pl-6 grid grid-cols-2 gap-3">
        <p className="  right-0 m-auto text-[12px] text-red-600">{errors.first_name?.message}</p>
        <p className="  right-0 m-auto text-[12px] text-red-600">{errors.last_name?.message}</p>
        </div>
        
        <div className="flex gap-2  items-center h-[40px] max-w-full">
          <i className="bx bxs-envelope"></i>
          <input className=" px-2 rounded-md p-1 bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[90%] placeholder:text-[#BDBDBD] hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            {...register("email", 
            {required: {
              value:true,
              message:'your must enter your email'
            },
            minLength:{
              value: 1,
              message: 'Email very short'
            },
            maxLength:{
              value:150,
              message: 'Email very long'
            }
            })}
            
          />
          
        </div>
        <p className="block  right-0 m-auto text-[12px] text-red-600">{errors.email?.message}</p>
        <div className="flex gap-2  items-center h-[40px] max-w-full">
          <i className="bx bxs-lock-alt"></i>
          <input className="bg-none bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[90%] text-[#BDBDBD] p-1 px-2 rounded-md hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg focus:text-black"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            {...register("password", 
            {required: {
              value:true,
              message:'your must enter your password'
            },
            minLength:{
              value: 1,
              message: 'Password very short'
            },
            maxLength:{
              value:25,
              message: 'Password very long'
            }
            })}
          />
        </div>
        <p className="block  right-0 m-auto text-[12px] text-red-600">{errors.password?.message}</p>
        
        <div className="flex gap-2  items-center h-[40px] max-w-full">
          <i className="bx bxs-cake"></i>
          <input className="px-2 rounded-md p-1 bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[90%] text-[#BDBDBD] hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg focus:text-black"
            type="date"
            name="birthday"
            id="birthday"
            placeholder="dd/mm/aaaa"
            {...register("birthday")}
            
          />
        </div>
        <p className="block  right-0 m-auto text-[12px] text-red-600">{errors.birthday?.message}</p>
        
        <div className="flex gap-2  items-center h-[40px] max-w-full">
          <i className="bx bx-image-add"></i>
          <input className="px-2 rounded-md p-1 bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[90%] placeholder:text-[#BDBDBD] focus:outline-none focus:border-black focus-within:shadow-lg hover:border-teal-600"
            type="url"
            name="image_url"
            id="image_url"
            placeholder="URL de foto de perfil"
            {...register("image_url")}
            
          />
        </div>
        <p className="block  right-0 m-auto text-[12px] text-red-600">{errors.image_url?.message}</p>
        <button
          className="text-white font-semibold bg-teal-600 max-w-[70%] rounded-md shadow-md h-[40px] mx-auto px-5 my-2"
          type="submit"
        >
          {modEdit ? "Upload user" : "Create user"}
        </button>
      </form>
    </div>
  );
}

export default UsersForm;
