"use server";

import SurahList from "@/components/surah/SurahList";
import { fetchChapters } from "@/db/queries";

const Home = async ({}) => {
  return (
    <div>
      <SurahList fechData={fetchChapters} />
    </div>
  );
};
export default Home;
