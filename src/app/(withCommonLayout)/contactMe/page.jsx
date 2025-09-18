import ContactComponent from "@/component/contact/ContactComponent";

const page = () => {
  return (
    <section className="mt-20 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold flex items-center gap-2 justify-center">
          Contact me <span className="text-blue-700">.</span>
        </h1>
        <p className="lg:text-lg text-center max-w-3xl mx-auto font-medium">
          I’m always eager to explore new opportunities and take on exciting
          projects. If you have a project in mind, or just want to say hi, feel
          free to send me a message.
        </p>
      </div>
      <hr className=" dark:border-gray-400 border-gray-700" />
      <ContactComponent />
    </section>
  );
};

export default page;
