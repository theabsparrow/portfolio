import FullImageComponent from "@/component/fullImage/FullImageComponent";

const FullImage = async ({ params }) => {
  const { imageName } = await params;
  return (
    <>
      <FullImageComponent imageName={imageName} />
    </>
  );
};

export default FullImage;
