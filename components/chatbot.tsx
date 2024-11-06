"use client"

import { useEffect } from 'react';

// Declare the voiceflow type on the window object
declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
        }) => void;
      };
    };
  }
}

const ChatBot: React.FC = () => {
  useEffect(() => {
    // Create and load the Voiceflow chat widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      // Check if voiceflow is defined on the window
      window.voiceflow?.chat?.load({
        verify: { projectID: '672b8a538c91b191e2ead91d' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatBot;
