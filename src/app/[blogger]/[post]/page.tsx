import { getPost } from '@/lib/api/post';
import ViewPost from './components/Viewer/ViewPost';
import ViwerNoSSR from './components/ViewerMode/EditNoSSR';
import { PostGet } from '@/lib/types/post';
import Tester from './components/Tester';
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
type PageParams = {
  blogger: string;
  post: string;
};

export interface Jsontypo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async (postnum: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postnum}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw Error('에러');
  }
  const data: Jsontypo = await res.json();
  return data;
};

const getPostData = async (postnum: string) => {
  try {
    const res = await fetch(`https://bloggy.kro.kr/api/posts/${postnum}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorResponse = await res.text();
      throw new Error(`Fetch error: ${errorResponse}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return { title: 'aabb' };
  }
};

const PageSettings = async ({ params }: { params: PageParams }) => {
  return (
    <div>
      <Tester />
    </div>
  );
};

export default PageSettings;
