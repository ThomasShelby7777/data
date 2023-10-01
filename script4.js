const dataw = {
    color: 'red',
    width: 400,
    height: 500
  };
  
  function func(inform) {
    const {color, width, height} = inform
    console.log(color, width, height);
  }
  
  func(dataw);