"use server";

import ChapterList from "@/components/chapter/ChapterList";
import { getChapters } from "@/db/queries/chapers";

const Home = async ({}) => {
  return (
    <div className="my-8">
      <ChapterList fechData={getChapters} />
    </div>
  );
};
export default Home;
