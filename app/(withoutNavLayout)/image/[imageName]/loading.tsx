const ImageLoadingPage = () => {
  return (
    <div
      className="
        relative 
        w-full 
        h-screen 
        overflow-hidden 
        border border-red-700 
        animate-pulse
        flex
        items-center
        justify-center
      "
    >
      {/* Image placeholder */}
      <div
        className="
          w-full 
          h-full 
          bg-gray-300 
          dark:bg-gray-700
          rounded-md
        "
      />
    </div>
  );
};

export default ImageLoadingPage;
