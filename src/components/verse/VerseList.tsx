"use client";
import { Verse } from "@prisma/client";
import VerseListCard from "./VerseListCard";
// import InfiniteScroll from "react-infinite-scroller";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchVerses } from "@/actions";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useFont } from "@/app/utils/hooks/usefont";
import { loadFontFace } from "@/app/utils/fontFaceHelper";
import Bismillah from "@/components/bismillah/Bismillah";
import ChapterHeader from "../header/ChapterHeader";

interface VerseListProps {
  search: Partial<Verse>;
  pages: [number, number];
  initialVerses: Verse[];
  tid: number;
}

const renderVerses = (vs: Verse[]) => {
  return vs.map((v) => {
    return (
      <div>
        <VerseListCard key={v.id} verse={v} />
      </div>
    );
  });
};
const DivLoading = styled.div<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? "hidden" : "flex")};
  justify-content: center;
`;

const VerseList = ({ initialVerses, pages, search, tid }: VerseListProps) => {
  const [page, setPage] = useState(pages[0]);
  const [verses, setVerses] = useState(initialVerses);

  const [ref, inView] = useInView();
  const loadedFonts = useFont(page, false);

  // console.log("fonts:", JSON.stringify(loadedFonts));

  const fetchMoreData = useCallback(async () => {
    console.log("Viewed:", page);
    const result = await fetchVerses({ ...search, page_number: page }, tid);
    console.log(result);
    if (result?.length) {
      setVerses((prev) => [...prev, ...result]);
    }
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((p) => p + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (page > pages[0] && page < pages[1]) {
      fetchMoreData();
    }
  }, [page]);

  return (
    <div>
      <div className="flex justify-center m-auto w-full lg:w-3/5 my-6">
        <ChapterHeader chapterId={search.chapter_id} />
      </div>
      <Bismillah chapterId={search.chapter_id} />
      {renderVerses(verses)}
      <DivLoading ref={ref} hidden={page >= pages[1]} key="loader">
        Loading ...
      </DivLoading>
    </div>
  );
};
export default VerseList;
