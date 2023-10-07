import ButtonComponent from '../Utilities/ButtonComponent'
import RecapCardComponent from '../Utilities/RecapCardComponent'
import './MaintContent.css'
import OverviewComponent from './Overview'
// icons used
import { FaCirclePlus } from 'react-icons/fa6'
import { MdCheckCircle } from 'react-icons/md'

function MaintContent () {
  return (
    <main className='mainContent-grid'>
      <OverviewComponent />
      <section className='mainContent-addRegister'>
        <ButtonComponent icon={<FaCirclePlus />} label='Register Node' />
      </section>
      <section className='mainContent-recap'>
        <RecapCardComponent
          icon={<MdCheckCircle />}
          label='Sensors Working'
          data='315,032'
          color='#3BCFAD'
        />
        <RecapCardComponent
          icon={<MdCheckCircle />}
          label='Sensors Working'
          data='315,032'
          color='#FFA53C'
        />
        <RecapCardComponent
          icon={<MdCheckCircle />}
          label='Sensors Working'
          data='315,032'
          color='#1882FF'
        />
      </section>
    </main>
  )
}

export default MaintContent
