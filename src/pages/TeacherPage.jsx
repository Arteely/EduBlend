import StudentBar from "../components/StudentBar";
import Calendar from "../components/Calendar";
import ForumCard from "../components/ForumCard";
import { Link } from "react-router-dom";

export default function TeacherPage() {
  return (
    <section className="grid grid-cols-4 m-8">
      <div className="col-span-3">
        <div className="flex pb-4 justify-between border-b border-light-purple items-center">
          <subheader>
            <h2 className="text-2xl text-purple font-bold">Welcome, Teacher</h2>
            <p className="text-sm text-purple">
              Here's a summary of your classroom!
            </p>
          </subheader>
          <div className="">
            <Link to="/make-announcement">
              <button className="px-4 py-1 mr-4 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
                Make an Announcement
              </button>
            </Link>
            <Link to="/post-homework">
              <button className="px-4 py-1 mr-4 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
                Post Homework
              </button>
            </Link>
            <Link to="/teacher-forum">
              <button className="px-4 py-1 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
                Visit Teacher Forum
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-6">
            <h2 className="text-xl my-4 text-purple font-bold">Classroom</h2>
            <StudentBar />
          </div>
          <div className="col-span-4">
            <h2 className="text-xl my-4 text-purple font-bold">
              Classroom Feed
            </h2>
            <Link to="/forum-post">
              <ForumCard />
            </Link>
            <Link to="/forum-post">
              <ForumCard />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <Calendar />
      </div>
    </section>
  );
}
