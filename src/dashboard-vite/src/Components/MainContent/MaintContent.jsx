import ButtonComponent from '../Utilities/ButtonComponent'
import ChartComponent from '../Utilities/ChartComponent'
import RecapCardComponent from '../Utilities/RecapCardComponent'
import Calendar from './Calendar'
import './MaintContent.css'
import OverviewComponent from './Overview'
// icons used
import { FaCirclePlus } from 'react-icons/fa6'
import { MdCheckCircle, MdWarning, MdError } from 'react-icons/md'

function MaintContent () {
  return (
    <main className='main-content-grid'>
      <OverviewComponent />
      <section className='main-content-addRegister'>
        <ButtonComponent icon={<FaCirclePlus />} label='Register Node' />
      </section>
      <section className='main-content-recap'>
        <RecapCardComponent
          icon={<MdCheckCircle />}
          label='Sensors Working'
          data='315,032'
          color='#3BCFAD'
        />
        <RecapCardComponent
          icon={<MdWarning />}
          label='Sensors Warning'
          data='150,093'
          color='#FFA53C'
        />
        <RecapCardComponent
          icon={<MdError />}
          label='Sensors Error'
          data='45,203'
          color='#bd1e1e'
        />
      </section>
      <section className='main-content-information'>
        <div className='main-content-information-box'>
          <h1>Informations</h1>
          <Calendar />
        </div>
      </section>
      <section className='main-content-charts'>
        <ChartComponent title='Distribution of Sensors per Page' />
      </section>
    </main>
  )
}

export default MaintContent
