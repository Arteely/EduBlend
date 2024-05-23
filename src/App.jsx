import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import TestPage from "./pages/TestPage";
import NoPage from "./pages/NoPage";
import ForumPage from "./pages/ForumPage";
import LessonPage from "./pages/LessonPage";
import ForumPost from "./pages/ForumPost";
import AnnouncementPage from "./pages/AnnouncementPage";
import HomeworkPage from "./pages/HomeworkPage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/sign-in"} element={<LoginPage />} />
          <Route path={"/sign-up"} element={<RegisterPage />} />
          <Route path={"/about-us"} element={<AboutPage/>} />
          <Route path={"/teacher-view"} element={<TeacherPage/>} />
          <Route path={"/student-view"} element={<StudentPage/>} />
          <Route path={"/test-page"} element={<TestPage/>} />
          <Route path={"/teacher-forum"} element={<ForumPage/>} />
          <Route path={"/forum-post"} element={<ForumPost/>} />
          <Route path="*" element={<NoPage />} />
          <Route path={"/lesson-page"} element={<LessonPage/>} />
          <Route path={"/make-announcement"} element={<AnnouncementPage/>} />
          <Route path={"/post-homework"} element={<HomeworkPage/>} />
        </Route>
      </Routes>
  );
};

export default App;
