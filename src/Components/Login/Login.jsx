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
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
          {/* Autofill traps */}
          <input type="text" name="fakeuser" style={{ display: "none" }} />
          <input type="password" name="fakepass" style={{ display: "none" }} />

          <h5 className="text-2xl text-center font-medium text-gray-900 dark:text-white">
            Sign in
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
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Image is optional
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
