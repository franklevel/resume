'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    smartlook: SmartlookClient;
  }
}

type SmartlookClient = {
  (method: 'init', key: string, options?: { region?: string }): void;
  (method: string, ...args: unknown[]): void;
  api: unknown[];
};

export default function Smartlook() {
  useEffect(() => {
    // Initialize Smartlook with the official snippet
    if (typeof window !== 'undefined') {
      if (!window.smartlook) {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        window.smartlook = function(...args: [string, ...unknown[]]) {
          window.smartlook.api.push(args);
        } as SmartlookClient;
        window.smartlook.api = [];
        script.async = true;
        script.type = 'text/javascript;charset=utf-8';
        script.src = 'https://web-sdk.smartlook.com/recorder.js';
        head.appendChild(script);
      }
      
      window.smartlook('init', 'f18c94cb020b2ad32bea5e7ded44c2ab7022ebeb', { region: 'eu' });
    }
  }, []);

  return null;
}
