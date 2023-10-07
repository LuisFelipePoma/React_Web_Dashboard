import './ButtonComponent.css'

function ButtonComponent ({ icon, label }) {
  return (
    <a className='button-content'>
      <i>{icon}</i>
      <p>{label}</p>
    </a>
  )
}

export default ButtonComponent
