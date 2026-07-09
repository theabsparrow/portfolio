import FullImageComponent from "@/component/fullI-image/FullImageComponent";

const FullImagePage = async ({
  params,
}: {
  params: Promise<{ imageName: string }>;
}) => {
  const { imageName } = await params;
  return <FullImageComponent imageName={imageName} />;
};

export default FullImagePage;
