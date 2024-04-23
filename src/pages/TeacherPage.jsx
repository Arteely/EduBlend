import StudentBar from "../components/StudentBar";
import Calendar from "../components/Calendar";
import ForumCard from "../components/ForumCard";

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
            <button className="px-4 py-1 mr-4 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
              Make an Announcement
            </button>
            <button className="px-4 py-1 mr-4 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
              Post Homework
            </button>
            <button className="px-4 py-1 text-sm text-white bg-purple border-2 border-purple rounded-full hover:bg-dark-purple hover:text-white">
              Visit Teacher Forum
            </button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-6">
            <h2 className="text-xl my-4 text-purple font-bold">Classroom</h2>
          <StudentBar/>
          </div>
          <div className="col-span-4">
          <h2 className="text-xl my-4 text-purple font-bold">Classroom Feed</h2>
            <ForumCard />
            <ForumCard />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <Calendar />
      </div>
    </section>
  );
}