import React from "react";

export default function Profile(props) {
  console.log(props);
  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
      <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
        <div className="flex flex-wrap mb-6 xl:flex-nowrap">
          <div className="mb-5 mr-5">
            <div className="relative inline-block shrink-0 rounded-2xl">
              <img
                className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                src={
                  props.data.response.picture
                    ? props.data.response.picture
                    : "avatar.jpg"
                }
                alt="image"
              />
              <div className="group/tooltip relative">
                <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white"></span>
                <span className="text-xs absolute px-3 py-2 whitespace-nowrap text-center  rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse block">
                  {props.data.response.job_title}
                </span>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="flex flex-wrap items-start justify-between mb-2">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <a
                    className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                    href="javascript:void(0)"
                  >
                    {props.data.response.full_name}
                  </a>
                </div>
                <div className="flex flex-wrap pr-2 mb-4 font-medium">
                  <a
                    className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                    href="javascript:void(0)"
                  >
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    {props.data.response.location.raw}
                  </a>
                  <a
                    className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                    href="javascript:void(0)"
                  >
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </span>
                    {props.data.response.email.email
                      ? props.data.response.email.email
                      : "email not found !"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
