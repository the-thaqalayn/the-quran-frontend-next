"use server";

import ChapterList from "@/components/chapter/ChapterList";
import { fetchChapters } from "@/db/queries/chapers";

const Home = async ({}) => {
  return (
    <div className="my-8">
      <ChapterList fechData={fetchChapters} />
    </div>
  );
};
export default Home;
