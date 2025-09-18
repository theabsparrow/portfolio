import FullImageComponent from "@/component/fullImage/FullImageComponent";

export const generateMetadata = async ({ params }) => {
  const { imageName } = await params;
  if (!imageName) {
    return {
      title: "Image not found - Abul bashar",
      description: "Sorry, this project image could not be found.",
    };
  }

  return {
    title: `${imageName} - Abul Bashar`,
    description:
      "This is the page where a single project image is shown giganticly to the users to grab their attention",
  };
};

const FullImage = async ({ params }) => {
  const { imageName } = await params;
  return (
    <>
      <FullImageComponent imageName={imageName} />
    </>
  );
};

export default FullImage;
