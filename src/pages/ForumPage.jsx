import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import ForumCard from "../components/ForumCard";

export default function ForumPage() {
  return (
    <section className="grid grid-cols-4 m-8">
      <div className="col-span-3">
        <div className="flex pb-4 justify-between border-b border-light-purple items-center">
          <subheader>
            <h2 className="text-2xl text-purple font-bold">Welcome, Teacher</h2>
            <p className="text-sm text-purple">
              Write a post for other teachers to see!
            </p>
          </subheader>
          <div className="">
            <button className="px-4 py-1 mr-4 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
              Add a Forum Post
            </button>
            <Link to="/teacher-view">
              <button className="px-4 py-1 text-sm text-purple bg-white border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
                See Classroom
              </button>
            </Link>
          </div>
        </div>
        <div className="">
        <h2 className="text-xl my-4 text-purple font-bold">Forum Feed</h2>
          <div className="flex w-full gap-4">
            <Link to="/forum-post">
            <ForumCard/>
            </Link>
            
            <Link to="/forum-post">
            <ForumCard/>
            </Link>
          </div>
          <div className="flex w-full gap-4">
          <Link to="/forum-post">
            <ForumCard/>
            </Link>
            <Link to="/forum-post">
            <ForumCard/>
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
