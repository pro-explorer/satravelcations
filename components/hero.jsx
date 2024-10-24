// tailwind.config.js

/* 

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }
}


*/

const Hero = () => {
  return (
    <section className="relative -mt-2 h-[580px] bg-[url('https://images.pexels.com/photos/29030845/pexels-photo-29030845/free-photo-of-stunning-view-of-durdle-door-beach-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center px-8 py-8 text-slate-50 sm:px-16">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <a
            href="/search?sort=latest-desc"
            className="mb-7 inline-flex animate-pulse items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
              New
            </span>{' '}
            <span className="text-sm font-medium">See what's new</span>
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="mb-4 animate-pulse text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Let's take a tour Cape Town!
          </h1>
          <p className="mb-8 text-lg font-normal sm:px-16 lg:text-xl xl:px-48">
            Tailor-made Travel Experiences for You. Experience the art of luxury travel with
            expertly curated experiences. Unwind in style, from lavish resorts to exclusive escapes!
          </p>

          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <a
              href="/about"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex animate-pulse items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              Learn more
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/search"
              className="inline-flex animate-blink items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WPExplorer</title>
                <path d="M24 12A12 12 0 1 1 12 0a12.008 12.008 0 0 1 12 12Zm-1.5 0A10.5 10.5 0 1 0 12 22.5 10.516 10.516 0 0 0 22.5 12ZM7.542 5.841l4.074 1.739-1.739 4.073L5.8 9.914l1.742-4.073Zm5.158 7.926 2.185 4.406H14.2l-2.343-4.687-2.295 4.687h-.656l2.4-5.01-1.046-.441.282-.656 3.215 1.364-.281.67Zm-.553-5.451 3.216 1.378-1.378 3.2-3.2-1.364 1.364-3.215Zm3.764 2.011 2.56 1.082-1.1 2.546-2.545-1.083 1.082-2.545Z" />
              </svg>
              Explore packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
