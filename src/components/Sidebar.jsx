export default function Sidebar({ tabs, handleCurrentTab }) {
  const totalTabs = tabs.map((tab, index) => (
    <button
      key={tab.id}
      onClick={() => handleCurrentTab(index)}
    >
      {tab.company}
    </button>
  ))
  return <div>{totalTabs}</div>
}
