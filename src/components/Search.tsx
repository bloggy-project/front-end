'use client';
import axios from 'axios';
import { useState } from 'react';
// import '@/mocks';

type responseProps = {
  data: [
    {
      image: string;
      title: string;
      type: string;
    },
  ];
};

type stateProps = {
  image: string;
  title: string;
  type: string;
};

export default function Search() {
  const [data, setData] = useState<Array<stateProps>>([
    {
      image: 'string',
      title: 'asasas',
      type: 'asasassa',
    },
  ]);

  const fetchData = async () => {
    const response = await axios.get<responseProps>('/search');
    setData(response.data.data);
    console.log(response.data.data);
  };

  return (
    <div>
      <button onClick={() => fetchData()}>text</button>
      <div>
        {data.map((datas, index) => (
          <li key={datas.title + index}>{datas.title}</li>
        ))}
      </div>
    </div>
  );
}
