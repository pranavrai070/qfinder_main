import React from "react";
import Link from "next/link";

const SideBar = () => {
  const SideBarData = [
    {
      id: 1,
      heading: "Never enter your real number again!",
      content:
        "Protect your privacy by using one of our disposable virtual phone numbers.",
      logo: "Logo1",
    },
    {
      id: 2,
      heading: "100% anonymous & secure",
      content: "No registration or sign-up required.",
      logo: "Logo2",
    },
    {
      id: 3,
      heading: "Receive SMS Online",
      content:
        "Use our numbers to safeguard your identity and bypass sms verification for Telegram, Tinder, Twitter & much more!",
      logo: "Logo3",
    },
    {
      id: 4,
      heading: "New phone numbers added every month",
      content: "Numbers are updated every 30 days.",
      logo: "Logo4",
    },
  ];

  const BlogData = [
    {
      id: 1,
      heading: "How To Bypass SMS Verification of any website in 2023",
      content:
        "Worried about Facebook verification process and how it collects your phone number? Using a combination of a VPN such as HideMyAss and quackr SMS numbers, you can bypass fb sms verification and keep your identity safe and secure",
    },
    {
      id: 2,
      heading: "How to Get a Temporary Phone Number.",
      content:
        "Even though there are many temporary phone number sites online, its difficult to know which ones actually work and which ones are scams. quackr is a well established site which has been operating since 2018. Our users have received an incredible 1 million text messages in that time period!",
    },
  ];

  return (
    <>
      <div className="p-4">
        {SideBarData.map((item) => (
          <div key={item.id} className="bg-white rounded-md shadow-md p-4 mb-4">
            <img src={item.logo} alt="Logo" className="w-16 h-16 mb-2" />
            <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-md shadow-md p-4 mb-0">
        <Link href="/blogs" legacyBehavior>
          <a className="text-blue-500 text-lg font-semibold mb-4">{">"} Blog</a>
        </Link>
        {BlogData.map((item, index) => (
          <div
            key={item.id}
            className={`p-4${index !== BlogData.length - 1 ? " border-b" : ""}`}
          >
            <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
