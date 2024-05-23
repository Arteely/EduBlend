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
            At EduBlend, we believe that every student has a unique way of
            learning. Our platform is designed to cater to diverse learning
            styles, ensuring that every student can find a method that resonates
            with them. EduBlend offers a variety of educational resources to
            enhance your learning experience.
          </p>
          <div className="column-2 flex gap-12">
            <button className="rounded-3xl px-8  bg-purple hover:bg-dark-purple">
              <Link className="text-white" to="/sign-up">
                For Parents
              </Link>
            </button>
            <button className="rounded-3xl px-8  bg-white border-purple hover:bg-dark-purple">
              <Link className="text-purple" to="/sign-up">
                For Teachers
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full h-auto" src="/Right.png" alt="EduBlend"></img>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <img className="w-full h-auto" src="/Left.png" alt="EduBlend"></img>
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
            Our commitment to providing quality education means that we
            continuously update our content and teaching methods to include the
            latest educational research and technology. Whether you're a visual
            learner who thrives on detailed diagrams and infographics, or a
            kinesthetic learner who benefits from real-world applications, our
            resources are tailored to meet your needs.
          </p>
          <p className="text-sm">
            Join EduBlend today and transform the way you learn. Embrace a
            learning journey that acknowledges and adapts to your individual
            preferences, helping you achieve your academic and professional
            goals with confidence.
          </p>
          <h3 className="text-xl font-bold">
            Find your child's learning style.
          </h3>

          <Link to="/test-page">
            <button className="rounded-3xl w-full px-8 text-white bg-purple hover:bg-dark-purple">
              Take the test now.
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
