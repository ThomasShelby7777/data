const dataq = ['Иван', 'Иванов', 'Отдел разработки'];

function func(inform) {
  const [ name, surname, department ] = inform;
//   let position = inform[3] || 'Junior';
  console.log(name, surname, department, position = 'Junior');
}

func(dataq);