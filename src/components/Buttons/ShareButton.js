"use client";
import React from "react";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
} from "react-share";

const ShareButton = ({ link }) => {
  return (
    <div className="flex gap-2 justify-center text-center">
      <FacebookShareButton
        url={link}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={20} round />
      </FacebookShareButton>
      <FacebookMessengerShareButton
        url={link}
        appId="521270401588372"
        className="Demo__some-network__share-button"
      >
        <FacebookMessengerIcon size={20} round />
      </FacebookMessengerShareButton>
    </div>
  );
};

export default ShareButton;
