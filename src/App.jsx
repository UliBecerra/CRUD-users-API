import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import axios from "axios";
const BASE_URL = "https://users-crud.academlo.tech/users/";
import { useForm } from "react-hook-form";

function App() {
  const [users, setUsers] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [modEdit, setModEdit] = useState(false);


  const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",
    image_url: "",
  };

  const getAllUsers = () => {
    const URL = BASE_URL;

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const { register, handleSubmit, reset, formState:{errors} } = useForm();

  const postUser = (data) => {
    const URL = BASE_URL;
    axios
      .post(URL, data)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
    getAllUsers();
  };

  const deleteUser = (id) => {
    const URL = BASE_URL + `${id}/`;
    axios
      .delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };
  const editUser = (data) => {
    console.log(data);

    const URL = BASE_URL + `${data.id}/`;
    axios
      .put(URL, data)
      .then((res) => {
        getAllUsers();
        setFormVisible((show) => !show);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App min-h-screen min-w-full bg-white font-body ">
      <UsersForm
        postUser={postUser}
        editUser={editUser}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        modEdit={modEdit}
        errors={errors}
        defaultValues={defaultValues}
      />
      <section className="flex justify-between items-center p-[5%]">
        <h1 className="text-[50px] font-[800]">Usuarios</h1>

        <button
          className="flex items-center bg-[#555A88] text-white h-[45px] px-6"
          onClick={() => {
            setFormVisible((show) => !show);
            setModEdit(false);
            reset(defaultValues)
          }}
        >
          <i className="bx bx-plus"> </i> <h2> Add User</h2>
        </button>
      </section>

      <UsersList
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
        setFormVisible={setFormVisible}
        reset={reset}
        setModEdit={setModEdit}
      />
    </div>
  );
}

export default App;
