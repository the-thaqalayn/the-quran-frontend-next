"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

interface BismillahProps {
  chapterId?: number;
}
const TextArabic = styled.p`
  line-height: 4rem;
`;
const Bismillah = ({ chapterId }: BismillahProps) => {
  const [cwb] = useState([1, 9]);
  const renderdBismillah =
    chapterId !== undefined && !cwb.includes(chapterId) ? (
      <div className="flex pt-5 pb-2 justify-center">
        {/* <Image
          src="/assets/images/bismillah.svg"
          alt="bismillah"
          className="dark:invert-[.8]"
          width={220}
          height={45}
          priority
        /> */}
        <div className="text-end text-4xl text-cyan-900 break-words">
          <TextArabic className="dark:text-cyan-500 font-textArabic">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </TextArabic>
        </div>
      </div>
    ) : null;
  return renderdBismillah;
};
export default Bismillah;
