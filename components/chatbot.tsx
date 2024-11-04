"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    embeddedChatbotConfig: {
      chatbotId: string;
      domain: string;
    };
  }
}

export default function Chatbot() {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "17n0C2zSwi828jz1DbxIr",
      domain: "www.chatbase.co",
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
