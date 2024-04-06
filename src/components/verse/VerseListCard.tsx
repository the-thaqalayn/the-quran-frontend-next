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

export default function VerseListCard({
  verse_key = "1:1",
  page_number = 1,
  code_v1 = "ﭖﭗﭘﭙﭚ",
}: Verse) {
  const [isFollowed, setIsFollowed] = useState(false);
  useFont(page_number);

  return (
    <Card className="w-full p-4">
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
          <p className="font-[p1]">{code_v1}</p>
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
