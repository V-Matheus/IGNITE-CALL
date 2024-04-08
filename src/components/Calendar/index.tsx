import { CaretLeft, CaretRight } from 'phosphor-react';
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles';
import { getWeekDays } from '@/utils/get-week-day';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';

export function Calendar() {

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('day', 1)
  })

  function handlePreviousMounth() {
    const previuosMounthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previuosMounthDate)
  }

    function handleNextMounth() {
      const previuosMounthDate = currentDate.add(1, 'month')

      setCurrentDate(previuosMounthDate)
  }


  const shortWeekDays = getWeekDays({ short: true });

  const currentMounth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previusMounthFillArray = Array.from({
      length: firstWeekDay,

    }).map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    }).reverse()

    return [
      ...previusMounthFillArray,
      ...daysInMonthArray
    ]
  }, [currentDate])

  console.log(calendarWeeks);
  

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMounth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMounth} title='Previous month'>
            <CaretLeft />
          </button>
          <button onClick={handleNextMounth} title='Next month'>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekday) => {
              return <th key={weekday}>{weekday}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay disabled>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}
