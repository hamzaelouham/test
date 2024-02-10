import React from "react";
import Loader from "./Loader";
import Profile from "./Profile";
// import Alert from "./Alert";

export default function Main() {
  const [url, setUrl] = React.useState("");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const getEmail = () => {
    setLoading(true);
    const newUrl = encodeURIComponent(url);
    fetch(`http://localhost:3001/api/${newUrl}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6">
      <section className="py-12 sm:py-24 px-4 sm:px-6 ">
        <div className="mt-8 sm: sm:text-center lg:mx-0 ">
          <div className="mt-3 sm:text-center md:max-w-xl md:mx-auto lg:mx-auto lg:text-center  sm:flex">
            <div className="mb-3 flex-auto">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Link"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />

                <button
                  className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  onClick={getEmail}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center px-3 mt-5">
          {loading && <Loader />}
          {data && <Profile data={data} />}
        </div>
      </section>
    </main>
  );
}
