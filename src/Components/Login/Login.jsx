import { useState } from "react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
    console.log("Login values", values);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="flex h-screen justify-center items-center bg-[#212222]">
      <div className="w-full max-w-sm p- border border-gray-200 rounded-4xl shadow-md sm:p-6 md:p-8 dark:border-gray-700 bg-[#20718a]">
        <form className="space-y-6 flex flex-col font-semibold" onSubmit={handleSubmit} autoComplete="off">
          {/* Autofill traps */}
          <input type="text" name="fakeuser" style={{ display: "none" }} />
          <input type="password" name="fakepass" style={{ display: "none" }} />

          <h5 className="text-3xl text-center font-extrabold text-gray-900">
            User Login
          </h5>

          <div>
            <input
              type="text"
              name="name"
              autoComplete="off"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="name"
              required
              value={values.name}
              onChange={onChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="password"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              value={values.password}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="image"
              placeholder="Image url address"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              value={values.image}
              onChange={onChange}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="w-[50%] mx-auto text-white bg-[#212222] hover:scale-110 duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          >
            Sign In
          </button>

          <div className="text-lg font-bold text-gray-800 text-center">
            Image is optional
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
