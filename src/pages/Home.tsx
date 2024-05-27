// import BrowserMock from "../components/BrowserMock";
// import { ConnectModal, WalletKitProvider } from "@mysten/wallet-kit";
import { ConnectModal, useWallet } from "@suiet/wallet-kit";
import { useState } from "react";
const Home = () => {
  const [open, setOpen] = useState(false);
  const wallet = useWallet();
  return (
    // <WalletKitProvider>
    <div>
      <ConnectModal
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
        onConnectSuccess={() => {
          setOpen(false);
        }}
      />
      <div
        className="hero min-h-screen"
        // style={{
        //   backgroundImage:
        //     "url(https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        // }}
      >
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-gray-700">Verif</span>
              <span className="text-accent">Ed</span>
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {wallet.connected ? (
              <>
                <button className="btn btn-primary">Explore</button>
              </>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
        {/* <div className="right-3">
          <BrowserMock />
        </div> */}
      </div>
    </div>
    // </WalletKitProvider>
  );
};

export default Home;
