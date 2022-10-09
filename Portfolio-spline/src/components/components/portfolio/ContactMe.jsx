import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CommonButton from "../../Common/CommonButton";

function ContactMe() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = (evt) => {
    window.open(
      `mailto:javierperez2000s@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <div id="contact" className="bg-blue-500 py-10  px-5 md:px-20">
      <h2 className="text-xl">Contact me</h2>
      <div className="flex md:flex-row flex-col-reverse w-full p-4 gap-5 mt-10 ">
        <div className="flex flex-row md:flex-col w-full md:w-1/3 gap-5">
          <input
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            type="text"
            className="w-full p-2 focus:outline-none text-black"
          ></input>
          <button
            onClick={handleSendEmail}
            className="bg-blue-200 text-black flex justify-center w-full items-center p-2 uppercase gap-2"
          >
            send <AiOutlineArrowRight className="mb-1"></AiOutlineArrowRight>
          </button>
        </div>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          placeholder="Message"
          className="w-full md:w-2/3 p-2 focus:outline-none text-black min-h-[150px]"
        ></textarea>
      </div>
    </div>
  );
}

export default ContactMe;
