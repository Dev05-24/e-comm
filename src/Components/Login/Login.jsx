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
    <div className="flex h-screen justify-center items-center px-4">
      <div className="w-full max-w-lg p-3 rounded-4xl shadow-md sm:p-6 md:p-8 bg-white/60 bg-gradient-to-r from-green-950 to-yellow-50">
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
              className="shadow-lg
              bg-gradient-to-r from-yellow-50 to-green-950 text-md placeholder:font-bold rounded-lg block w-full px-3 py-4 outline-none placeholder:text-black"
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
              className="shadow-lg
              bg-gradient-to-r from-yellow-50 to-green-950 text-md placeholder:font-bold rounded-lg block w-full px-3 py-4 outline-none placeholder:text-black"
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
                placeholder="Image url address (Optional)"
                className="shadow-lg
              bg-gradient-to-r from-yellow-50 to-green-950 text-md placeholder:font-bold rounded-lg block w-full px-3 py-4 outline-none placeholder:text-black"
                value={values.image}
                onChange={onChange}
                autoComplete="off"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[50%] mx-auto text-white bg-gradient-to-r from-yellow-50 to-green-950 shadow-lg hover:scale-110 duration-500 ease-in-out font-bold rounded-lg px-5 py-2.5 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
