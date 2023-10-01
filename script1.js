const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

function func(inform) {
  const [name, surname, department, position, salary] = inform;
  console.log(name, surname, department, position, salary);
}

func(data);


