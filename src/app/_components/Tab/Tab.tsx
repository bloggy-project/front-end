'use client';
import { useState } from 'react';

const tabs = [
  {
    id: 1,
    label: '게시물',
    content: <div>Content for Tab 1</div>,
  },
  {
    id: 2,
    label: '블로거',
    content: <div data-testid="blogger-contents">Content for Tab 2</div>,
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const onChangeTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button key={tab.id + tab.label} onClick={() => onChangeTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        <div className="tab-content">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </>
  );
};

export default Tab;
