import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src="/bloggy_logo.png"
        width={130}
        height={45}
        alt="bloggy_logo"
        priority
        data-testid="img"
      />
    </Link>
  );
};

export default Logo;
