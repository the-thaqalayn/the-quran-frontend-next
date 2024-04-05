"use server";
interface ChapterShowProps {
  params: {
    id: string;
  };
}
const ChapterShowPage = async ({ params }: ChapterShowProps) => {
  const { id } = params;
  return <div>ChapterShowPage</div>;
};
export default ChapterShowPage;
