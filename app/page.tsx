import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const NEXT_PUBLIC_URL = 'https://eltontay.eth';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click For Powder Blessing',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/MADPOWDER`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'eltontay.eth',
  description: 'POWDER',
  openGraph: {
    title: 'eltontay.eth',
    description: 'POWDER',
    images: [`${NEXT_PUBLIC_URL}/MADPOWDER1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>eltontay.eth</h1>
    </>
  );
}
