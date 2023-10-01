const datas = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

function func(inform) {
  const [name, surname, info] = inform;
  console.log(name, surname, info);
}

func(datas);