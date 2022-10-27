import { ethers, Signer } from "ethers";
import React, { useState, useEffect } from "react";
import abi from "./utils/WavePortal.json";

const getEthereumObject = () => window.ethereum;
const contractAddress = "0x3e97CF8Bc9156CC32103798E6cF6C54037F59738";
const contractABI = abi.abi;

/*
 * This function returns the first linked account found.
 * If there is no account linked, it will return null.
 */
const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    /*
     * First make sure we have access to the Ethereum object.
     */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentCunt, setCurrentCunt] = useState(0);
  const [waiting, setWaiting] = useState(false);

  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getWaveCount = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const count = await wavePortalContract.getTotalWaves();
        return count.toNumber();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const wave = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const tx = await contract.wave();
        setWaiting(true);
        mandolorian_ring.play();
        await tx.wait();
        mandolorian_ring.pause();

        const count = await contract.getTotalWaves();
        setCurrentCunt(count.toNumber());
        setWaiting(false);
        mandolorian_call.play();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const doIt = async () => {
      const account = await findMetaMaskAccount();
      const count = await getWaveCount();
      console.log("cunt:: ", count);
      setCurrentCunt(count);

      if (account !== null) {
        setCurrentAccount(account);
      }
    };

    doIt();
  }, []);

  const mandolorian_call = new Audio(
    "https://ringtonedownload.best/wp-content/uploads/2020/09/Mando-Note.mp3"
  );

  const mandolorian_ring = new Audio(
    "https://ringtonedownload.best/wp-content/uploads/2020/09/Mando-Ring.mp3"
  );

  return (
    <div className="container mx-auto my-6">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="https://pbs.twimg.com/profile_images/1585541457611481088/MWSR0RmX_400x400.jpg"
          />
          <div className="flex flex-col items-center text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              🖖 Greetings! <br />
              <small className="text-base text-gray-500">
                {currentAccount}
              </small>
            </h1>
            <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              I am{" "}
              <a
                className="text-blue-700"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/ichogg"
              >
                @ichogg
              </a>{" "}
              and I am here to learn.
            </h2>
            <p className="leading-relaxed">
              Show me your support by connecting your Ethereum wallet and
              saluting at me!
            </p>
            <p className="italic leading-relaxed my-2">I have spoken</p>
            <p className="mb-6 font-semibold leading-relaxed">
              This is the way!
            </p>
            <div className="flex justify-center">
              {currentAccount ? (
                <button
                  className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
                  onClick={wave}
                >
                  Salute
                </button>
              ) : (
                <button
                  className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 ml-2 focus:outline-none hover:bg-blue-700 rounded text-lg"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
            </div>

            {currentAccount && (
              <div className="flex flex-col items-center py-4">
                <h3 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900">
                  {currentCunt}
                </h3>
                <p>salutes so far</p>
                {waiting && (
                  <div className="mt-4">
                    <iframe
                      title="this is the way"
                      src="https://giphy.com/embed/VcsGVTZuhqXfN8ipEr"
                      width="480"
                      height="270"
                      frameBorder="0"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
