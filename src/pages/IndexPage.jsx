import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <main className="flex flex-col mx-12 my-6 min-h-192 divide-y divide-light-purple">
      <div className="flex">
        <div className="flex flex-col justify-center flex-1 gap-4">
          <div>
            <h2 className="text-4xl text-purple font-bold">
              Learn In Your Style
            </h2>
            <h2 className="text-4xl text-dark-purple font-bold">
              with EduBlend
            </h2>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="column-2 flex gap-12">
            <button className="rounded-3xl px-8  bg-purple hover:bg-dark-purple">
            <Link className="text-white" to="/sign-up">For Parents</Link>
            </button>
            <button className="rounded-3xl px-8  bg-white border-purple hover:bg-dark-purple">
              <Link className="text-purple" to="/teacher-view">For Teachers</Link> 
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto"
            src="./src/assets/Right.png"
            alt="EduBlend"
          ></img>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <img
            className="w-full h-auto"
            src="./src/assets/Left.png"
            alt="EduBlend"
          ></img>
        </div>
        <div className="flex flex-col justify-center flex-1 gap-4 mx-12 my-6">
          <div>
            <h2 className="text-3xl text-purple font-bold">
              Welcome to EduBlend
            </h2>
            <h2 className="text-3xl text-dark-purple font-bold">
              Teaching subjects at your pace.
            </h2>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-xl font-bold">Find your child's learning style.</h3>
          <button className="rounded-3xl px-8 text-white bg-purple hover:bg-dark-purple">
              Take the test now
            </button>
        </div>
      </div>
    </main>
  );
}
