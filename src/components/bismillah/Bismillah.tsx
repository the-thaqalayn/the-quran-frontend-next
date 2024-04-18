"use client";

import { useState } from "react";
import Image from "next/image";

interface BismillahProps {
  chapterId?: number;
}

const Bismillah = ({ chapterId }: BismillahProps) => {
  const [cwb] = useState([1, 9]);
  const renderdBismillah =
    chapterId !== undefined && !cwb.includes(chapterId) ? (
      <div className="flex pt-5 pb-2 justify-center">
        <Image
          src="/assets/images/bismillah.svg"
          alt="bismillah"
          className="dark:invert-[.8]"
          width={220}
          height={45}
          priority
        />
      </div>
    ) : null;
  return renderdBismillah;
};
export default Bismillah;
