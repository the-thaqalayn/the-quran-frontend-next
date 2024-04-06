"use server";

import SurahList from "@/components/surah/SurahList";
import { fetchChapters } from "@/db/queries/chapers";

const Home = async ({}) => {
  return (
    <div className="my-8">
      <SurahList fechData={fetchChapters} />
    </div>
  );
};
export default Home;
