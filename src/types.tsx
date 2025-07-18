import type { ReactNode } from 'react';

export interface Blog {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: ReactNode;
}
