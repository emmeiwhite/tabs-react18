export default function Sidebar({ currentTab }) {
  const { company, dates, order, title, duties } = currentTab

  return (
    <div>
      <h1>{company}</h1>
      <h2>{title}</h2>
      <ul>
        {duties.map((duty, index) => {
          return <li key={index}>{duty}</li>
        })}
      </ul>
    </div>
  )
}
