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
import { useState } from 'react';
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
