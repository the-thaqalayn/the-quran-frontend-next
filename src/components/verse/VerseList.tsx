"use client";
import { Verse } from "@prisma/client";
import VerseListCard from "./VerseListCard";
// import InfiniteScroll from "react-infinite-scroller";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchVerses } from "@/actions";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface VerseListProps {
  search: Partial<Verse>;
  pages: [number, number];
  initialVerses: Verse[];
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

const VerseList = ({ initialVerses, pages, search }: VerseListProps) => {
  const [page, setPage] = useState(pages[0]);
  const [verses, setVerses] = useState(initialVerses);

  const [ref, inView] = useInView();

  const fetchMoreData = useCallback(async () => {
    const next = page + 1;
    console.log("Viewed:", next);
    const result = await fetchVerses({ ...search, page_number: next });
    console.log(result);
    if (result?.length) {
      setPage(next);
      setVerses((prev: Verse[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...result,
      ]);
    }
  }, [page]);

  useEffect(() => {
    if (inView && page < pages[1]) fetchMoreData();
  }, [inView]);

  return (
    <div>
      {renderVerses(verses)}
      <DivLoading ref={ref} hidden={page >= pages[1]} key="loader">
        Loading ...
      </DivLoading>
    </div>
  );
};
export default VerseList;
