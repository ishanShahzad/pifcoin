import Image from "next/image";
import Link from "next/Link";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const LoginModule = () => {
  return (
    <div className="login-background container ">
      <div className="max-w-[548px] py-40 mx-auto">
        <h2 className="text-2xl text-white mb-2.5">
          Login to Account
        </h2>
        <p className="text-primary text-lg">These are the must feilds for login to your Profile for futher Proess.</p>
        <form className="mt-14">
          <div className="mb-8">
            <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
              Username/Email
            </label>
            <Input placeholder={"Username or Email"} />
          </div>
          <div className="mb-12">
            <div className="flex justify-between">
              <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                Password
              </label>
              <a className="!text-blue !text-4 block" href="/forgetpassword">Forget Password?</a>
            </div>
            <div className="relative">
              <Input type="password" className="pr-16" placeholder={"Type your password"} icon="icon-eye right-5" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/">
              <Button className="bg-pink min-w-[13.75rem]">Login</Button>
            </Link>
            <span className="block text-lg font-SofiaPro-Regular text-primary">Don’t have an account? <a href="/signup" className="!text-pink inline-block font-SofiaPro-Bold text-xl">Register</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModule;
