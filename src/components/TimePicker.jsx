export default function TimePicker() {
  return (
    <div>
      <button
        type="button"
        data-modal-target="timepicker-modal"
        data-modal-toggle="timepicker-modal"
        class="text-purple bg-white hover:bg-light-purple border border-purple focus:ring-4 focus:outline-none focus:ring-purple font-medium rounded-full px-2.5 py-2 text-center inline-flex items-center"
      >
        <svg
          class="w4 h-4 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
            clip-rule="evenodd"
          />
        </svg>
        Book Meeting
      </button>

      <div
        id="timepicker-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-[23rem] max-h-full">
          <div class="relative bg-white rounded-lg shadow border border-purple">
            <div class="flex items-center justify-between p-4 border-b rounded-t">
              <h3 class="text-lg font-semibold text-purple">Book a Meeting</h3>
              <button
                type="button"
                class="text-black bg-white hover:bg-light-purple hover:text-dark-purple rounded-lg text-sm ms-auto inline-flex justify-center items-center"
                data-modal-toggle="timepicker-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 pt-0">
              <label class="text-sm font-medium text-purple mb-2 block">
                Pick your time
              </label>
              <ul id="timetable" class="grid w-full grid-cols-3 gap-2 mb-5">
                <li>
                  <input
                    type="radio"
                    id="10-am"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="10-am"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    10:00 AM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="10-30-am"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="10-30-am"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    10:30 AM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="11-am"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="11-am"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    11:00 AM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="11-30-am"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="11-30-am"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    11:30 AM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="12-am"
                    value=""
                    class="hidden peer"
                    name="timetable"
                    checked
                  />
                  <label
                    for="12-am"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    12:00 AM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="12-30-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="12-30-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    12:30 PM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="1-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="1-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 peer-checked:border-purple peer-checked:bg-purple peer-checked:text-purple hover:bg-dark-purple"
                  >
                    01:00 PM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="1-30-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="1-30-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 peer-checked:border-purple peer-checked:bg-purple peer-checked:text-purple hover:bg-dark-purple"
                  >
                    01:30 PM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="2-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="2-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 peer-checked:border-purple peer-checked:bg-purple peer-checked:text-purple hover:bg-dark-purple"
                  >
                    02:00 PM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="2-30-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="2-30-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 peer-checked:border-purple peer-checked:bg-purple peer-checked:text-purple hover:bg-dark-purple"
                  >
                    02:30 PM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="3-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple bg-white border rounded-lg cursor-pointer text-gray-500 border-gray-200 peer-checked:border-purple peer-checked:bg-purple peer-checked:text-purple hover:bg-dark-purple"
                  >
                    03:00 PM
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3-30-pm"
                    value=""
                    class="hidden peer"
                    name="timetable"
                  />
                  <label
                    for="3-30-pm"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-dark-purple dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                  >
                    03:30 PM
                  </label>
                </li>
              </ul>
              <div class="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  type="button"
                  data-modal-hide="timepicker-modal"
                  class="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
