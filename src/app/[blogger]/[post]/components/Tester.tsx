import { PostGet } from '@/lib/types/post';

const getPostData = async (postnum: string) => {
  try {
    const res = await fetch(`https://bloggy.kro.kr/api/posts/${postnum}`);

    if (!res.ok) {
      const errorResponse = await res.text();
      throw new Error(`Fetch error: ${errorResponse}`);
    }
    const data: PostGet = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return { title: 'aabb' };
  }
};

const Tester = async () => {
  const data = await getPostData('6');
  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
};

export default Tester;
