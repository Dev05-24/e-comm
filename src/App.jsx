import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

function App() {
  const user = useSelector((state) => state.user.user);
  const authUser = user?.authUser;
  // console.log("user",user);
  // console.log("authUser",authUser);
  const PrivateRoute = ({ authUser, children }) => {
    return authUser ? children : <Navigate to="/" replace />;
  };
  return (
    <>
      <div className="App bg-[#212222]">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                authUser ? (
                  <>
                    <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      pauseOnHover
                      draggable
                    />
                    <Main></Main>
                  </>
                ) : (
                  <Login></Login>
                )
              }
            />
            <Route
              path="/filteredProducts/:type"
              element={
                <PrivateRoute authUser={authUser}>
                  <Navbar />
                  <FilteredProducts />
                  <Footer />
                </PrivateRoute>
              }
            />
            <Route
              path="/filteredProducts/:type/:id"
              element={
                <PrivateRoute authUser={authUser}>
                  <ToastContainer position="top-right" className="mt-[70px]" />
                  <Navbar />
                  <SingleProduct/>
                  <Footer />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
