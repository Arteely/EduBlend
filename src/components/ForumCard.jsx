export default function ForumCard() {
  return (
    <div class="w-full mb-6 p-6 bg-white border border-light-purple rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="flex justify-between items-center" href="#">
        <div>
        <h5 class="mb-2 text-base font-bold tracking-tight text-dark-purple">
        Regarding Homework
        </h5>
        <h5 class="mb-2 text-xs font-bold tracking-tight text-purple">
          By Artem Artemyev
        </h5>
        </div>
        <div>
        <h6 className="text-xs underline text-grey">6h ago</h6>
        </div>
        
      </a>
      <p class="mb-3 text-xs text-black">
        Dear Students,I want to inform you that after 6 months of our
        cooperation it is necessary to test your knowledge by the final exam. It
        means we need to find a date for our final exam. In this semester you
        were extremely under the stress due to COVID-19 situation so would like
        you to offer an extra attempt for this test. My proposition is...
      </p>
      <div className="flex justify-between items-center">
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-purple rounded-full hover:bg-light-purple focus:ring-4 focus:outline-none focus:ring-light-purple"
      >
        Read more
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      <h6 className="text-xs underline text-grey">11 comments</h6>
      </div>
      
    </div>
  );
}
