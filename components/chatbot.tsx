"use client";

import Script from "next/script";


export default function Chatbot() {


  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="lazyOnload"
      />

<Script
        src="https://files.bpcontent.cloud/2024/11/04/08/20241104081837-N7QPTJZ6.js"
        strategy="lazyOnload"
      />
    </>
  );
}
