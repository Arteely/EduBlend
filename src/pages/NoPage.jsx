export default function NoPage() {
  return (
    <section class="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-extrabold text-purple">404</h1>
        <p class="text-2xl font-medium text-dark-purple mb-4">Page Not Found</p>
        <a
          href="/"
          class="px-4 py-2 font-medium text-white bg-purple rounded-full hover:bg-light-purple transition-all duration-200 ease-in-out"
        >
          Go Home
        </a>
      </div>
    </section>
  );
}
