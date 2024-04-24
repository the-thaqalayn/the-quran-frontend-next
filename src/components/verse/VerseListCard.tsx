"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Badge,
  Tooltip,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import type { Verse } from "@prisma/client";
import { faBookmark, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { VersWitnTranslation } from "@/db/queries/verses";
interface VerseListCardProps {
  verse: VersWitnTranslation;
  direction: string | undefined;
}

const TextArabic = styled.p<{ page: number }>`
  font-family: ${(props) => "p" + props.page};
  line-height: 4rem;
`;
const TextTranslation = styled.p<{ dir: string | undefined }>`
  direction: ${(props) => props.dir ?? "ltr"};
  text-align: ${(props) => (props.dir === "rtl" ? "start" : "end")};
`;

export default function VerseListCard({
  verse,
  direction,
}: VerseListCardProps) {
  const { verse_key, page_number, code_v1, verseTranslation } = verse;
  console.log("direction:", direction);

  const renderedTranslation = verse.verseTranslation ? (
    <div className="text-end text-xl text-gray-600 break-words">
      <TextTranslation dir={direction} className="dark:text-gray-300">
        {verse.verseTranslation[0].text}
      </TextTranslation>
    </div>
  ) : null;

  return (
    <Card className="w-full p-4 my-3  dark:bg-gray-600 ">
      <CardHeader className="justify-between ">
        <div className="flex w-12 h-12 bg-blue-100 dark:bg-cyan-800  border border-solid dark:border-gray-400 text-blue-600 rounded-full items-center justify-center">
          <h3 className="dark:text-gray-50">{verse_key}</h3>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="lg"
            className="cursor-pointer text-gray-400"
          />
        </div>
      </CardHeader>
      <CardBody className="px-8 py-4 ">
        <div className="text-end text-4xl text-cyan-900 break-all">
          <TextArabic page={page_number} className="dark:text-cyan-500">
            {code_v1}
          </TextArabic>
        </div>
        {renderedTranslation}
      </CardBody>
      <CardFooter className="gap-6">
        <Tooltip
          placement="bottom"
          color="foreground"
          content="Bookmark"
          size="sm"
        >
          <FontAwesomeIcon
            icon={faBookmark}
            size="lg"
            className="cursor-pointer text-gray-400"
          />
        </Tooltip>
        <Tooltip
          placement="bottom"
          color="foreground"
          content="Copy Link"
          size="sm"
        >
          <FontAwesomeIcon
            icon={faCopy}
            size="lg"
            className="cursor-pointer text-gray-400"
          />
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
