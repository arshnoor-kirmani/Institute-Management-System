import React from "react";

export default function FormContainer() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      method="post"
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="p-1 rounded-md text-white border-1 placeholder:text-custom-5 focus:outline-0"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="p-1 rounded-md text-white border-1 placeholder:text-custom-5 focus:outline-0"
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        className="p-1 rounded-md text-white border-1 placeholder:text-custom-5 focus:outline-0"
      ></textarea>
      <button
        type="submit"
        className="bg-custom-3 text-white p-2 rounded-md hover:bg-custom-4 duration-200 ease-in-out active:scale-95 transition-all cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
