export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  });

  return Array.from(Array(7).keys()).map((day) =>
    formatter.format(new Date(Date.UTC(2024, 5, day)))
  ).map((dayName, index) => {
    const adjustedIndex = (index + 3) % 7; //O Index começa na quinta, então adiciona mais 3 para começar no domingo
    const formattedDay = formatter.format(new Date(Date.UTC(2024, 5, adjustedIndex)));
    return formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
  });
}



