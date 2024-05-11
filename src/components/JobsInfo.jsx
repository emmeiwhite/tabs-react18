import Duties from './Duties'

export default function JobsInfo({ currentTab }) {
  const { company, dates, order, title, duties } = currentTab

  return (
    <article className="job-info">
      <h3>{company}</h3>
      <span className="job-company">{title}</span>
      <p className="job-date">{dates}</p>

      <Duties duties={duties} />
    </article>
  )
}
