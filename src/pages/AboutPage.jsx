export default function AboutPage() {
  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="mx-auto max-w-5xl">
          <h2 class="text-xl text-center font-semibold text-gray-900 dark:text-purple sm:text-2xl">
            About Us
          </h2>
          <div class="my-8 xl:mb-16 xl:mt-12">
            <img
              class="w-full aspect-video object-cover"
              src="/about-us-img.png"
              alt=""
            />
          </div>
          <div class="mx-auto max-w-2xl space-y-6">
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              At EduBlend, we believe in the transformative power of education.
              Our mission is to create a vibrant community where students,
              teachers, and parents can come together to explore and engage in
              the joy of learning. We understand that each child is unique, with
              their own strengths, weaknesses, and learning styles. That's why
              we've crafted a platform that not only acknowledges these
              differences but also embraces and adapts to them, ensuring that
              every student has the opportunity to learn in a way that suits
              them best. Our journey began with a simple question: How can we
              make education more accessible, personalized, and engaging for
              every student? With this question in mind, we set out to build a
              solution that would break down the barriers between educators and
              learners, and provide a flexible space for education to flourish.
              EduBlend is the culmination of this vision—a platform where
              learning is tailored to each student, where teachers can share
              their knowledge in creative and impactful ways, and where parents
              can find peace of mind knowing their children's educational needs
              are being met.
            </p>

            <ul class="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <li>
                <span class="font-semibold text-gray-900 dark:text-purple">
                  {" "}
                  For Students:{" "}
                </span>
                Our platform is designed to be student-centered, promoting
                autonomy and self-paced learning. Students can explore subjects
                that intrigue them, seek help where they need it, and celebrate
                achievements with supportive peers and mentors.
              </li>
              <li>
                <span class="font-semibold text-gray-900 dark:text-purple">
                  {" "}
                  For Teachers:{" "}
                </span>
                Educators on EduBlend are equipped with a suite of intuitive
                tools to craft engaging lesson plans, share resources, and
                provide one-on-one support. We celebrate the creativity and
                dedication of teachers by providing them with a space to
                innovate in their teaching methods.
              </li>

              <li>
                <span class="font-semibold text-gray-900 dark:text-purple">
                  {" "}
                  For Parents:{" "}
                </span>
                Parents are invaluable partners in their children's education.
                EduBlend offers parents insights into their child's learning
                progress, provides direct communication channels with teachers,
                and shares resources to help them support their child's
                educational journey.
              </li>
            </ul>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              The development of EduBlend has been a labor of love, brought to
              life by a diverse team of passionate developers, educators, and
              designers. Our team has worked tirelessly to ensure that the
              platform is not only technologically advanced but also
              user-friendly and secure. From late-night coding sessions to
              early-morning strategy meetings, every step in the development
              process has been guided by our commitment to creating an
              exceptional educational experience. In building EduBlend, we've
              embraced cutting-edge technologies and pedagogical research to
              ensure that our platform is both state-of-the-art and
              pedagogically sound. We've iterated on feedback from real-world
              educators and families, ensuring that our platform meets the needs
              of the communities we serve. We're proud of the robust
              infrastructure that supports EduBlend, guaranteeing reliability
              and scalability as our community grows. As we look to the future,
              we're excited about the possibilities that EduBlend opens up for
              learners across the globe. We're committed to continuous
              improvement, always looking for ways to enhance the educational
              experience and strengthen the connections within our learning
              community. We believe in the power of education to change lives,
              and we invite you to join us on this exciting journey. At
              EduBlend, we're more than just a platform—we're a community, a
              support system, and a catalyst for educational innovation. Welcome
              to a world where learning knows no bounds, and where the education
              of tomorrow is being shaped today. Welcome to EduBlend, where
              every student has a place, every teacher can inspire, and every
              parent can trust in the promise of quality education.
            </p>
          </div>
          <div class="text-center my-8">
            <a
              href="#"
              class="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-purple hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
