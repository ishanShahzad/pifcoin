import Image from "next/image";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import { useState,useEffect } from "react";
const SignInModule = () => {
  const [popup, setPopup] = useState(false);
  const [state, setstate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPopup(false);
    }, 3000);
    console.log("udse effect cslling");
  });
  return (
    <div className="login-background container text-center py-48">
      <h5 className="lg:text-[1.75rem] ">Sign in to your wallet.</h5>
      <figure className="my-20">
        <Image
          src="/assets/images/landing/mask.png"
          height={152}
          width={166}
          alt="Atlanten logo"
        />
      </figure>
      <Button
        onClick={() => {
          setPopup(true);
        }}
        className="bg-pink px-14 text-xl"
      >
        Get Metamask
      </Button>
      <Modal
        hide={setPopup}
        show={popup}
        state={state}
        setstate={setstate}
        className="mt-12"
        close="close"
      >
        <div className="text-center">
          <i className="icon-img14 border-[6px] p-6 border-pink rounded-full text-3xl text-pink "></i>
        <h4 className="mt-16">Welcome Back</h4>
        </div>
      </Modal>
    </div>
  );
};

export default SignInModule;
