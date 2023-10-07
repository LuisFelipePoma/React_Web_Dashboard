import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import './Calendar.css'

const sxProps = {
  svg: { color: 'white' },
  '& .MuiDayCalendar-weekDayLabel': { color: 'white' },
  '& .MuiPickersDay-dayWithMargin': { color: 'var(--text-holder)' },
  '& .Mui-selected': { color: 'white' },
  '& .MuiPickersDay-today': { color: 'white' }
}

function Calendar () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DateCalendar
          className='calendar-content'
          defaultValue={dayjs('2022-04-17')}
          referenceDate={dayjs('2022-04-17')}
          views={['year', 'month', 'day']}
          sx={sxProps}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default Calendar
