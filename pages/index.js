import Link from 'next/link';

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/about" style={{ fontSize: 20 }}>
      {/* <a>About Page</a> */}
      <buttom>Go to About Page</buttom>
    </Link>
  </div>
);

export default Index;
