"use client";
import React, { useState } from "react";
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
import { useFont } from "@/app/utils/hooks/usefont";
import type { Verse } from "@prisma/client";
import { faBookmark, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
interface VerseListCardProps {
  verse: Verse;
}

const TextArabic = styled.p<{ page: number }>`
  font-family: ${(props) => "p" + props.page};
  line-height: 4rem;
`;

export default function VerseListCard({ verse }: VerseListCardProps) {
  const { verse_key, page_number, code_v1 } = verse;
  useFont(page_number);

  return (
    <Card className="w-full p-4 my-3">
      <CardHeader className="justify-between">
        <div className="flex w-12 h-12 bg-blue-100 text-blue-600 rounded-full items-center justify-center">
          <h3>{verse_key}</h3>
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
          <TextArabic page={page_number}>{code_v1}</TextArabic>
        </div>
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
