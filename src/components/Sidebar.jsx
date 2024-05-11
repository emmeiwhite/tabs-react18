export default function Sidebar({ tabs, handleCurrentTab, currentIndex }) {
  const totalTabs = tabs.map((tab, index) => (
    <button
      key={tab.id}
      onClick={() => handleCurrentTab(index)}
      className={currentIndex === index ? 'job-btn active-btn' : 'job-btn'}
    >
      {tab.company}
    </button>
  ))
  return <div className="btn-container">{totalTabs}</div>
}
