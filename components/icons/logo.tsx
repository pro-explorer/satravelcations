import Image from 'next/image';

export type ImageProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default function LogoIcon(props: ImageProps) {
  return (
    <Image
      src="/images/logo/logo.svg"
      alt="SA Travelcations Logo"
      width={Number(props.width)}
      height={Number(props.height)}
    ></Image>
  );
}

