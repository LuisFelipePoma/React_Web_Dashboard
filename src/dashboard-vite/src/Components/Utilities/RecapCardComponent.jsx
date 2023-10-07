import './RecapCardComponent.css'

function RecapCardComponent ({ icon, label, data, color }) {
  return (
    <article className='recap-card-content'>
      <section className='recap-card-icon' style={{ backgroundColor: color }}>
        {icon}
      </section>
      <div className='recap-card-data'>
        <h3>{label}</h3>
        <h1>{data}</h1>
      </div>
    </article>
  )
}

export default RecapCardComponent
