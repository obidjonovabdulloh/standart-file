import { Route, Routes } from "react-router-dom";
import { DataRouters } from "./data-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AllRouter() {
  return (
    <>
      <Header />
      <Routes>
        {DataRouters.map((elem, index) => (
          <Route key={index} path={elem.path} element={elem.Element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default AllRouter;
