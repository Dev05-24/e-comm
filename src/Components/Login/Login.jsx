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
    <div className="flex h-screen justify-center items-center bg-[#212222] px-4">
      <div className="w-full max-w-lg p-3 border border-gray-200 rounded-4xl shadow-md sm:p-6 md:p-8 dark:border-gray-700 bg-[#d4af37]">
        <form
          className="space-y-10 flex flex-col font-semibold"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Autofill traps */}
          <input type="text" name="fakeuser" style={{ display: "none" }} />
          <input type="password" name="fakepass" style={{ display: "none" }} />

          <h5 className="text-4xl text-center font-extrabold text-white mb-10">
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
            {values.name.length > 0 && values.name.length < 4 && (
              <p className="text-white text-lg mt-1 px-1">
                Username must be at least 4 characters long.
              </p>
            )}
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
            {values.password.length > 0 &&
              !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/.test(
                values.password
              ) && (
                <p className="text-white text-sm mt-1 px-1">
                  Password must be 4–10 characters long and include at least one
                  letter, one digit, and one special character (!@#$%^&*).
                </p>
              )}
          </div>

          <div>
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
            <div className="text-lg font-bold text-white text-left px-1 pt-2">
              Image is optional
            </div>
          </div>

          <button
            type="submit"
            className="w-[50%] mx-auto text-white bg-[#212222] hover:scale-110 duration-400 ease-in-out font-bold rounded-lg px-5 py-2.5 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
