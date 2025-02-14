'use client';

import Menu from '@/components/Menu';

interface MenuWrapperProps {
  language: string;
}

export default function MenuWrapper({ language }: MenuWrapperProps) {
  return <Menu language={language} />;
}
