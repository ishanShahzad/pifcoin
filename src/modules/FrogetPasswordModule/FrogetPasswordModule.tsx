import Image from "next/image";
import Link from "next/Link";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const FrogetPasswordModule = () => {
  return (
    <div className="login-background container ">
      <div className="max-w-[548px] py-40 mx-auto">
        <h2 className="text-2xl text-white mb-2.5">
            Forget Password
        </h2>
        <p className="text-primary text-lg">Please type your registered email & you will get the email with reset link. Just click on the reset link and set new password</p>
        <form className="mt-14">
          <div className="mb-12">
            <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                Email Address
            </label>
            <Input placeholder={"Type your registered Email"} />
          </div>
          <div className="">
            <Link href="/newpassword">
              <Button className="bg-pink min-w-[13.75rem]">Send</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FrogetPasswordModule;
