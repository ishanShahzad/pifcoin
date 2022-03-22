import React from "react";
import Image from "next/image";
import Button from "../../components/button/Button";
import { Notificationsdata } from "../../data/Notification";

const NotifactionModule = () => {
  return (
    <div className="campaignresult-background px-[30rem] pt-16 pb-[6.375rem]  ">
      <div className=" flex justify-between">
        <h3 className="text-28px">Notifications</h3>
        <p className="text-blue font-SofiaPro-Regular text-base ">
          Mark all as Read
        </p>
      </div>
      {Notificationsdata.map((item, i) => (
        <div
          className={`${
            item.id === "1" ? "bg-[#1E1736]" : "bg-transparent"
          }  rounded-md px-4 pt-6 pb-9 mt-10 flex`}
          key={i}
        >
          <figure>
            <Image src={item.src} height={64} width={64} />
          </figure>
          <div className=" ml-4">
            <div className="flex items-center justify-between">
              <h6>
                {item.status}
                <span className="text-base font-SofiaPro-Regular text-primary ml-4">
                  {item.time}
                </span>
              </h6>
              {item.id === "1" ? (
                <p className="h-[11px] w-[11px] rounded-full bg-pink"></p>
              ) : (
                <p></p>
              )}
            </div>
            <p className="text-base font-SofiaPro-Regular text-primary">
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
              Egestas dui id ornare arcu odio ut sem. Egestas egestas of
              fringilla phasellus faucibus scelerisque eleifend.
            </p>

            {item.id === "2" ? (
              <Button className="px-3 py-2.5 text-sm font-SofiaPro-Regular mt-8">
                Campaign Result
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotifactionModule;
