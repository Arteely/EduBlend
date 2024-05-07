import React from 'react';

export default function LessonPage() {
  const videos = [
    {
      title: "PART 1: Additions & Multiplications, Beginner Math",
      author: "By Artem Artemyev"
    },
    {
      title: "PART 2: Divisions, Multiplication Tables & Additions, Begginer Math",
      author: "By Artem Artemyev"
    },
    {
      title: "PART 3: Divisions, Multiplication Tables & Additions, Begginer Math",
      author: "By Artem Artemyev"
    }
  ];

  return (
    <section className="divide-y divide-light-purple">
      <div className="grid grid-cols-2 m-8">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-2xl text-purple font-bold">Hi, Student!</h2>
          <p className="text-sm text-purple">
            Check your performance stats to make sure you are on track with your goals!
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-purple">Homework Progress</span>
            <span className="text-sm font-medium text-purple">45%</span>
          </div>
          <div className="w-full bg-grey rounded-full h-2.5 my-4">
            <div className="bg-purple h-2.5 rounded-full" style={{ width: "45%" }}></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-purple">Lesson Progress</span>
            <span className="text-sm font-medium text-purple">75%</span>
          </div>
          <div className="w-full bg-grey rounded-full h-2.5 my-4">
            <div className="bg-purple h-2.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 m-8">
        <div className='col-span-1 m-2'>
          <h2 className="text-2xl text-purple font-bold my-4">MATH Suggested Videos</h2>
          {videos.map((video, index) => (
            <div key={index} className="grid grid-cols-5 rounded-xl border border-light-purple px-2 py-3 mb-4">
              <img className="w-full col-span-1 p-2 aspect-square" src="/Left.png" alt="Thumbnail" />
              <div className="flex flex-col col-span-3 justify-center">
                <h5 className="text-base font-bold tracking-tight text-dark-purple">{video.title}</h5>
                <h6 className="mb-2 text-xs font-bold tracking-tight text-purple">{video.author}</h6>
              </div>
              <div className="flex justify-center items-center col-span-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-grey border-grey rounded focus:ring-purple dark:focus:ring-purple"
                />
              </div>
            </div>
          ))}
        </div>
        <div className='col-span-1 m-2'>
          <h2 className="text-2xl text-purple font-bold my-4">MATH Suggested Articles</h2>
          {videos.map((video, index) => (
            <div key={index} className="grid grid-cols-5 rounded-xl border border-light-purple px-2 py-3 mb-4">
              <img className="w-full col-span-1 p-2 aspect-square" src="/Left.png" alt="Thumbnail" />
              <div className="flex flex-col col-span-3 justify-center">
                <h5 className="text-base font-bold tracking-tight text-dark-purple">{video.title}</h5>
                <h6 className="mb-2 text-xs font-bold tracking-tight text-purple">{video.author}</h6>
              </div>
              <div className="flex justify-center items-center col-span-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-grey border-grey rounded focus:ring-purple dark:focus:ring-purple"
                />
              </div>
            </div>
          ))}
        </div>
        <div className='col-span-1 m-2'>
          <h2 className="text-2xl text-purple font-bold my-4">MATH Homework</h2>
          {videos.map((video, index) => (
            <div key={index} className="grid grid-cols-5 rounded-xl border border-light-purple px-2 py-3 mb-4">
              <img className="w-full col-span-1 p-2 aspect-square" src="/Left.png" alt="Thumbnail" />
              <div className="flex flex-col col-span-3 justify-center">
                <h5 className="text-base font-bold tracking-tight text-dark-purple">{video.title}</h5>
                <h6 className="mb-2 text-xs font-bold tracking-tight text-purple">{video.author}</h6>
              </div>
              <div className="flex justify-center items-center col-span-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-grey border-grey rounded focus:ring-purple dark:focus:ring-purple"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
