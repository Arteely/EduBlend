import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import TeacherPage from "./pages/TeacherPage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/sign-in"} element={<LoginPage />} />
          <Route path={"/sign-up"} element={<RegisterPage />} />
          <Route path={"/about-us"} element={<AboutPage/>} />
          <Route path={"/teacher-view"} element={<TeacherPage/>} />
        </Route>
      </Routes>
  );
};

export default App;
