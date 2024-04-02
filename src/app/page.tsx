"use server";

import SurahCard from "@/components/surah/SurahCard";

const Home = async ({}) => {
  return (
    <div>
      <SurahCard
        id={1}
        simpleName="Al-Fatihah"
        translatedName="The Opener"
        versesCount={7}
      />
    </div>
  );
};
export default Home;
