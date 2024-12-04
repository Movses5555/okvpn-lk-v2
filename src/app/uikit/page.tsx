import { UIKit as UIKItView } from '@/app/views/UIKit'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI Kit',
};

export default function UIKit() {
  return (<UIKItView />);
}
