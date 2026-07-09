const ContactFormSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Name + Email */}
      <div className="flex flex-col md:flex-row md:gap-10 space-y-4 md:space-y-0">
        <div className="w-full space-y-2">
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-11 w-full bg-gray-300 dark:bg-gray-700 rounded-xl" />
        </div>

        <div className="w-full space-y-2">
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-11 w-full bg-gray-300 dark:bg-gray-700 rounded-xl" />
        </div>
      </div>


      {/* Message textarea */}
      <div className="space-y-2">
        <div className="h-6 w-28 bg-gray-300 dark:bg-gray-700 rounded" />

        <div className="h-36 w-full bg-gray-300 dark:bg-gray-700 rounded-xl" />

        <div className="flex justify-end">
          <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>


      {/* Submit button */}
      <div className="flex justify-end">
        <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg" />
      </div>
    </div>
  );
};

export default ContactFormSkeleton;