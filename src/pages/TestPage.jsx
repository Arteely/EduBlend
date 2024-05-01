import { Link } from "react-router-dom";

/*I'm aware this is the worst way of doing the questions but it is what it is */

export default function TestPage() {
  return (
    <div>
      <div className="flex justify-around my-12 py-4 border-b border-light-purple items-center">
        <header className="w-1/5">
          <h2 className="text-purple text-3xl font-bold mb-4">
            YOUR LEARNING STYLE QUIZ
          </h2>
          <p className="text-sm text-dark-purple">
            Find your learning style by taking the quiz below, and answer based
            on which fits best for you.
          </p>
        </header>
        <img src="/testPage.png" alt="Test Page Image" />
      </div>
      {/*
      <div className="flex w-5/6 m-auto">
        <div className="w-full flex flex-col">
          <div className="h-8 bg-dark-purple border-r border-purple mb-4"></div>
          <h1 className="flex text-purple font-bold">
            1 <h2 className="font-semibold text-4xl">Audiotory</h2>
          </h1>
        </div>
        <div className="w-full flex flex-col">
          <div className="h-8 bg-light-purple border-r border-purple mb-4"></div>
          <h1 className="flex text-dark-purple font-bold">
            2 <h2 className="font-semibold text-4xl">Visual</h2>
          </h1>
        </div>
        <div className="w-full flex flex-col">
          <div className="h-8 bg-light-purple mb-4"></div>
          <h1 className="flex text-dark-purple font-bold">
            3 <h2 className="font-semibold text-4xl">Tactile</h2>
          </h1>
        </div>{" "}
      </div>
       */}
      

      <div className="flex flex-col items-center space-y-4 py-4 divide-y divide-light-purple">
        <div className="text-center w-5/6 py-8">
          <h3 className="text-lg text-purple uppercase font-light">
            QUESTION 1
          </h3>
          <h4 className="font-bold text-xl text-purple my-4 ">
            What kinda of book would you like to read for fun?
          </h4>
          <div className="flex items-center py-8">
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question1-1"
                name="question1"
                class="hidden peer"
              />
              <label
                for="question1-1"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question1-1"
                className="absolute top-12 left-0 w-max text-xs text-purple w-full"
              >
                A book with word searches or crossword puzzles
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question1-2"
                name="question1"
                class="hidden peer"
              />
              <label
                for="question1-2"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question1-2"
                className="absolute -left-28 top-12 w-max text-xs text-purple w-full"
              >
                A book with word searches or crossword puzzles
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question1-3"
                name="question1"
                class="hidden peer"
              />
              <label
                for="question1-3"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question1-3"
                className="absolute right-0 top-12 w-max text-xs text-purple w-full"
              >
                A book with word searches or crossword puzzles
              </label>
            </div>
          </div>
        </div>
        <div className="text-center w-5/6 py-8">
          <h3 className="text-lg text-purple uppercase font-light">
            QUESTION 2
          </h3>
          <h4 className="font-bold text-xl text-purple my-4 ">
            When you are not sure how to spell a word, what are you most likely
            to do?
          </h4>
          <div className="flex items-center py-8">
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question2-1"
                name="question2"
                class="hidden peer"
              />
              <label
                for="question2-1"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question2-1"
                className="absolute top-12 left-0 w-max text-xs text-purple w-full"
              >
                Write it down to see if it looks right
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question2-2"
                name="question2"
                class="hidden peer"
              />
              <label
                for="question2-2"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question2-2"
                className="absolute -left-28 top-12 w-max text-xs text-purple w-full"
              >
                Spell it out loud to see if it sounds right
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question2-3"
                name="question2"
                class="hidden peer"
              />
              <label
                for="question2-3"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question2-3"
                className="absolute right-0 top-12 w-max text-xs text-purple w-full"
              >
                Trace the letters in the air (finger spelling)
              </label>
            </div>
          </div>
        </div>
        <div className="text-center w-5/6 py-8">
          <h3 className="text-lg text-purple uppercase font-light">
            QUESTION 3
          </h3>
          <h4 className="font-bold text-xl text-purple my-4 ">
            When you see the word "cat," what do you do first?
          </h4>
          <div className="flex items-center py-8">
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question3-1"
                name="question3"
                class="hidden peer"
              />
              <label
                for="question3-1"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question3-1"
                className="absolute top-12 left-0 w-max text-xs text-purple w-full"
              >
                Picture a cat in your mind
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question3-2"
                name="question3"
                class="hidden peer"
              />
              <label
                for="question3-2"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question3-2"
                className="absolute -left-16 top-12 w-max text-xs text-purple w-full"
              >
                Say the word "cat" to yourself
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question3-3"
                name="question3"
                class="hidden peer"
              />
              <label
                for="question3-3"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question3-3"
                className="absolute right-0 top-12 w-max text-xs text-purple w-full"
              >
                Think about being with a cat (petting it or hearing it purr)
              </label>
            </div>
          </div>
        </div>
        <div className="text-center w-5/6 py-8">
          <h3 className="text-lg text-purple uppercase font-light">
            QUESTION 4
          </h3>
          <h4 className="font-bold text-xl text-purple my-4 ">
             What do you find most distracting when you are trying to study?
          </h4>
          <div className="flex items-center py-8">
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question4-1"
                name="question4"
                class="hidden peer"
              />
              <label
                for="question4-1"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question4-1"
                className="absolute top-12 left-0 w-max text-xs text-purple w-full"
              >
                 People walking past you
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question4-2"
                name="question4"
                class="hidden peer"
              />
              <label
                for="question4-2"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question4-2"
                className="absolute -left-4 top-12 w-max text-xs text-purple w-full"
              >
                 Loud noises
              </label>
            </div>
            <div className="flex-1 border-b-2 border-purple h-1 mx-4"></div>
            <div className="flex flex-0 flex-col relative">
              <input
                type="radio"
                id="question4-3"
                name="question4"
                class="hidden peer"
              />
              <label
                for="question4-3"
                class="w-9 h-9 text-purple bg-white border border-purple rounded-full cursor-pointer peer-checked:border-purple peer-checked:bg-purple hover:bg-purple"
              ></label>
              <label
                for="question4-3"
                className="absolute right-0 top-12 w-max text-xs text-purple w-full"
              >
                 An uncomfortable chair
              </label>
            </div>
          </div>
        </div>
        <Link to="/student-view">
          <button className="rounded-full bg-purple text-white hover:bg-light-purple hover:text-purple">
            Finish Test &gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
