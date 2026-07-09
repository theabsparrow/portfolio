import ContactFormSkeleton from "@/component/skeleton/ContactFormSkeleton";

const ContactMeLoadingPage = () => {
  return (
    <section className="mt-20 space-y-10 animate-pulse">
      {/* Header */}
      <div className="space-y-4">
        <div className="h-12 lg:h-16 w-72 mx-auto bg-gray-300 dark:bg-gray-700 rounded-md" />

        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[90%] mx-auto bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-5 w-[70%] mx-auto bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>

      <hr className="dark:border-gray-400 border-gray-700" />

      {/* Contact Component */}
      <section className="space-y-4">
        {/* Form Card */}
        <div className="dark:bg-[#161617] bg-gray-100 border border-gray-300 dark:border-gray-700 p-6 rounded-xl">
          <ContactFormSkeleton />
        </div>

        {/* Contact Links */}
        <div className="space-y-4 text-lg">
          <div className="h-7 w-48 bg-gray-300 dark:bg-gray-700 rounded" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-between">
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-lg" />
          </div>

          {/* Mobile Marquee Links */}
          <div className="md:hidden flex items-center overflow-hidden">
            <div className="flex gap-4">
              <div className="h-9 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg" />
              <div className="h-9 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg" />
              <div className="h-9 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactMeLoadingPage;
