import { Verse } from "@prisma/client";
import VerseListCard from "./VerseListCard";
interface VerseListProps {
  fetchData: () => Promise<Verse[]>;
}
const VerseList = async ({ fetchData }: VerseListProps) => {
  const verses = await fetchData();
  const renderedVerses = verses.map((v) => {
    return (
      <div>
        <VerseListCard key={v.id} verse={v} />
      </div>
    );
  });
  return <div>{renderedVerses}</div>;
};
export default VerseList;
