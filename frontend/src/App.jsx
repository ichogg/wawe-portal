import React from "react";

const youtube_url = "https://www.youtube.com/watch?v=62x19Bepc5s";

function App() {
  const mandolorian_call = new Audio(
    "https://ringtonedownload.best/wp-content/uploads/2020/09/Mando-Note.mp3"
  );

  const wave = async () => {
    mandolorian_call.play();
  };

  return (
    <div className="container mx-auto my-6">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="https://pbs.twimg.com/profile_images/1585541457611481088/MWSR0RmX_400x400.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              🖖 Greetings!
            </h1>
            <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              I am{" "}
              <a className="text-blue-700" href="https://twitter.com/ichogg">
                @ichogg
              </a>{" "}
              and I am here to learn.
            </h2>
            <p className="leading-relaxed">
              Show me your support by connecting your Ethereum wallet and
              saluting at me!
            </p>
            <p className="italic leading-relaxed">I have spoken</p>
            <p className="mb-8 font-semibold leading-relaxed">
              This is the way!
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
                onClick={wave}
              >
                Salute
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
