"use server";

import VerseList from "@/components/verse/VerseList";

interface ChapterShowProps {
  params: {
    id: string;
  };
}
const ChapterShowPage = async ({ params }: ChapterShowProps) => {
  const { id } = params;
  return (
    <div>
      <VerseList />
    </div>
  );
};
export default ChapterShowPage;
