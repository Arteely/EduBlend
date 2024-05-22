import ForumCard from "../components/ForumCard";

export default function ForumPost() {
  return (
    <section className="grid grid-cols-6 m-8">
      <div className="col-span-4 gap-4 divide-y divide-light-purple">
        <div className="">
          <h3 class="mb-2 text-xl font-bold tracking-tight text-dark-purple">
            Final Exam Announcement and Special Consideration for This Semester
          </h3>
          <div className="flex items-center gap-4">
            <h2 class="w-10 h-10 text-xl text-white rounded-full bg-purple flex items-center justify-center">
              A
            </h2>
            <h5 class="text-xs font-bold tracking-tight text-purple">
              By Artem Artemyev
            </h5>
            <h6 className="text-xs underline text-grey">6 hours ago</h6>
          </div>
          <p class="mb-3 text-base text-black py-4">
            Dear Students,
            <br /> As we approach the conclusion of what has been an
            extraordinarily challenging semester, I want to take a moment to
            reflect on the journey we've undertaken together and discuss our
            next steps, particularly concerning our final exam. Over the past
            six months, we have navigated the tumultuous waters of a global
            pandemic which has impacted not only our studies but also our
            personal lives. The resilience and commitment you have shown during
            these trying times have been nothing short of inspiring. As your
            educator, I am deeply proud of each of you for adapting to these
            rapid changes and continuing your learning journey under
            less-than-ideal circumstances. As we move towards wrapping up the
            semester, it is customary and necessary to assess the knowledge and
            skills you've acquired through a final exam. This exam is a
            cornerstone of our academic process, providing both you and the
            faculty with a clear measure of your understanding and mastery of
            the course material.
          </p>
        </div>
        <div className="flex gap-4 py-8">
          <h2 class="w-10 h-10 text-xl text-white rounded-full bg-purple flex items-center justify-center">
            A
          </h2>
          <div className="w-full">
            <form>
              <div class="w-full mb-4 border border-purple rounded-lg bg-light-purple">
                <div class="px-4 py-2 bg-white rounded-t-lg">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    class="w-full px-0 text-sm text-black bg-white border-0 focus:ring-0"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div class="flex items-center justify-between px-3 py-2 border-t">
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg focus:ring-4 focus:ring-purple hover:bg-light-purple"
                  >
                    Post comment
                  </button>
                  <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <button
                      type="button"
                      class="inline-flex justify-center items-center p-2 bg-white text-purple rounded cursor-pointer hover:bg-light-purple"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                        />
                      </svg>
                      <span class="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      class="inline-flex justify-center items-center p-2 bg-white text-purple rounded cursor-pointer hover:bg-light-purple"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                      <span class="sr-only">Set location</span>
                    </button>
                    <button
                      type="button"
                      class="inline-flex justify-center items-center p-2 bg-white text-purple rounded cursor-pointer hover:bg-light-purple"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                      <span class="sr-only">Upload image</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
              Remember, contributions to this topic should follow our{" "}
              <a
                href="#"
                class="text-blue-600 hover:underline"
              >
                Community Guidelines
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col m-8">
        <ForumCard />
        <ForumCard />
      </div>
    </section>
  );
}
