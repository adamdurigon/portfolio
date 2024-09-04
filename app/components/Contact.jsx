import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000d1a] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/aolgdgpb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#01fffb] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Contactez-moi via le formulaire du bas.
          </p>
        </div>
        <input
          className="text-gray-300 bg-[#001f3f] p-2"
          type="text"
          placeholder="Nom"
          name="name"
        />
        <input
          className="text-gray-300 my-4 p-2 bg-[#001f3f]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="text-gray-300 bg-[#001f3f] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:text-[#000d1a] hover:bg-[#01fffb] hover:border-[#01fffb] px-4 py-3 my-8 mx-auto flex items-center">
          Collaborons
        </button>
      </form>
    </div>
  );
};

export default Contact;
