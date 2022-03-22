import Image from "next/image";
import Link from "next/link";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const SignupModule = () => {
return (
    <div className="login-background container ">
    <div className="max-w-[896px] py-20 mx-auto">
        <h2 className="text-[1.75rem] text-white mb-4">
            Signup Account
        </h2>
        <p className="text-primary text-lg font-SofiaPro-Regular">You are creating new Account. Please provide your information required below so we can setup new account for you and register you for further process</p>
        <form className="mt-[4.5rem]">
            <div className="mb-14 flex">
                <div className="mr-14">
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-6">
                        Profile Picture
                    </label>
                    <label className="relative cursor-pointer block border-2 w-[176px] h-[176px] bg-graydull1 border-dashed border-offwhite rounded-full">
                        <input type="file" className="w-0 absolute" />
                        {/* <img src="" alt="" /> */}
                        <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33325 22.6667V25.3334C5.33325 26.0406 5.6142 26.7189 6.1143 27.219C6.6144 27.7191 7.29267 28 7.99992 28H23.9999C24.7072 28 25.3854 27.7191 25.8855 27.219C26.3856 26.7189 26.6666 26.0406 26.6666 25.3334V22.6667" stroke="#E9E9E9" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 12L15.9999 5.33331L22.6666 12" stroke="#E9E9E9" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 5.33331V21.3333" stroke="#E9E9E9" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="block text-base text-offwhite mt-4 text-center font-SofiaPro-Regular">Upload Your <br /> Profile</span>
                        </div>
                    </label>
                </div>
                <div className="">
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-6">
                        Profile Cover Picture
                    </label>
                    <label className="relative cursor-pointer block border-2 w-[476px] h-[176px] bg-graydull1 border-dashed border-offwhite rounded-[10px]">
                        <input type="file" className="w-0 absolute" />
                        {/* <img src="" alt="" /> */}
                        <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33325 22.6667V25.3334C5.33325 26.0406 5.6142 26.7189 6.1143 27.219C6.6144 27.7191 7.29267 28 7.99992 28H23.9999C24.7072 28 25.3854 27.7191 25.8855 27.219C26.3856 26.7189 26.6666 26.0406 26.6666 25.3334V22.6667" stroke="#E9E9E9" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 12L15.9999 5.33331L22.6666 12" stroke="#E9E9E9" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 5.33331V21.3333" stroke="#E9E9E9" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="block text-base text-offwhite mt-4 text-center font-SofiaPro-Regular">Upload Your <br /> Cover</span>
                        </div>
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-[1.375rem] text-white ">Personal Details</h3>
            </div>
            <div className="mb-8">
                <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                    Name *
                </label>
                <Input placeholder={"Enter Name"} />
            </div>
            <div className="mb-8 grid grid-cols-2 gap-x-8">
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Email *
                    </label>
                    <Input placeholder={"Enter Email"} />
                </div>
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Username *
                    </label>
                    <Input placeholder={"markethen12"} />
                </div>
            </div>
            <div className="mb-8">
                <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                    Description
                </label>
                <textarea className="relative px-5 border h-[96px] py-4 border-primary rounded-lg text-offwhite bg-transparent text-base w-full outline-none" placeholder="Tell world your story!"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Password *
                    </label>
                    <Input type="password" className="pr-16" placeholder={"********"} icon="icon-eye right-5" />
                </div>
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Confirm Password *
                    </label>
                    <Input type="password" className="pr-16" placeholder={"Confirm your password"} icon="icon-eye right-5" />
                </div>
            </div>
            <div className="mt-14 mb-8">
                <h3 className="text-[1.375rem] text-white ">Shipping Details</h3>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-x-8">
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Country *
                    </label>
                    <Input className="pr-16" placeholder={"Country"} icon="icon-bottom-angle right-5" />
                </div>
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        State *
                    </label>
                    <Input className="pr-16" placeholder={"State"} icon="icon-bottom-angle right-5" />
                </div>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-x-8">
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        City *
                    </label>
                    <Input placeholder={"City"} />
                </div>
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Phone no. *
                    </label>
                    <Input placeholder={"Phone no."} />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-8">
                <div className="col-span-2">
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Street Address *
                    </label>
                    <Input placeholder={"Your Street Address"} />
                </div>
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Appartment No.
                    </label>
                    <Input placeholder={"Appartment No."} />
                </div>
                <div>
                    <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                        Zip Code
                    </label>
                    <Input placeholder={"Zip Code"} />
                </div>
            </div>
            <div className="flex items-center mt-[4.5rem]">
                <Link href="/">
                    <Button className="bg-pink min-w-[13.75rem]">Sign up</Button>
                </Link>
                <span className="ml-8 block text-lg font-SofiaPro-Regular text-primary">Already have an account? <a href="/login" className="!text-pink inline-block font-SofiaPro-Bold text-xl">Login</a></span>
            </div>
        </form>
    </div>
    </div>
);
};

export default SignupModule;
