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
      } absolute  min-w-full min-h-screen bg-black/40 grid place-content-center transition `}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className={
          "relative border-2 border-gray-400 bg-white w-[310px] h-[400px] grid  gap-1 p-3"
        }
      >
        <i
          className="bx bx-x absolute right-0 p-2 text-[25px] cursor-pointer"
          onClick={handleX}
        ></i>
        <h2 className="font-[800] text-[23px]">
          {modEdit ? "Edit user" : "New User"}
        </h2>
        <div className=" flex gap-2 h-[40px] items-center">
            <label htmlFor="first_name">
              <i className="bx bxs-user"></i>
            </label>

            <input
              className="border-[1px] border-[#C3C1C1] max-w-[30%]  bg-[#F9FAFC] placeholder:text-[#BDBDBD] p-1 px-2 rounded-md hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="first name"
              {...register("first_name")}
              required
            />
            <input
              className=" max-w-[30%] bg-[#F9FAFC] p-1 px-2 rounded-md  border-[1px] border-[#C3C1C1] placeholder:text-[#BDBDBD] hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg"
              type="text"
              name="last_name"
              placeholder="last name"
              {...register("last_name")}
              required
            />
          
        </div>

        <div className="flex gap-2  items-center h-[40px]">
          <i className="bx bxs-envelope"></i>
          <input className=" px-2 rounded-md p-1 bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[60%] placeholder:text-[#BDBDBD] hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            {...register("email")}
            required
          />
          <p>{errors.last_name?.message}</p>
        </div>
        <div className="flex gap-2  items-center h-[40px]">
          <i className="bx bxs-lock-alt"></i>
          <input className="bg-none bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[60%] text-[#BDBDBD] p-1 px-2 rounded-md hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg focus:text-black"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            {...register("password")}
            required
          />
        </div>
        <div className="flex gap-2  items-center h-[40px]">
          <i className="bx bxs-cake"></i>
          <input className="px-2 rounded-md p-1 bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[60%] text-[#BDBDBD] hover:border-teal-600 focus:outline-none focus:border-black focus-within:shadow-lg focus:text-black"
            type="date"
            name="birthday"
            id="birthday"
            placeholder="dd/mm/aaaa"
            {...register("birthday")}
            
          />
        </div>
        <div className="flex gap-2  items-center h-[40px]">
          <i className="bx bx-image-add"></i>
          <input className="px-2 rounded-md p-1 bg-[#F9FAFC] border-[1px] border-[#C3C1C1] min-w-[60%] placeholder:text-[#BDBDBD] focus:outline-none focus:border-black focus-within:shadow-lg hover:border-teal-600"
            type="url"
            name="image_url"
            id="image_url"
            placeholder="URL de foto de perfil"
            {...register("image_url")}
            
          />
        </div>
        <button
          className="text-white font-semibold bg-teal-600 max-w-[70%] rounded-md shadow-md h-[40px]"
          type="submit"
        >
          {modEdit ? "Upload user" : "Create user"}
        </button>
      </form>
    </div>
  );
}

export default UsersForm;
