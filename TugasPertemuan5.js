const returnFirstName = (fullName) => {
    let myArr = fullName.split(' ');
    let firstName = myArr[0]
    return firstName
  }
  
  const returnDay = (clock) => {
    if (clock >= 5 && clock <= 12) {
      return 'Pagi'
    } else if (clock >= 12 && clock <= 15) {
      return 'Siang'
    } else if (clock >= 15 && clock <= 18) {
      return 'Sore'
    } else if ((clock >= 18 && clock <= 24) || (clock >= 0 && clock <= 5)) {
      return 'Malam'
    } else {
      return 'Jam yang dimasukkan tidak sesuai'
    }
  }
  
  //jawaban pertemuan 5 nomor 1
  
  const greeting = (clock, functionReturnDay, fullName, functionReturnFullName) => {
  
    let time = functionReturnDay(clock)
    let firstName = functionReturnFullName(fullName)
    return `Selamat ${time}, ${firstName}!`
  }
  
  // console.log(greeting(18, returnDay, 'Ananda Fadhilah', returnFirstName));
  
  //jawaban pertemuan 5 nomor 2
  
  const printSquare = (num) => {
    for (let i = 0; i < num; i++) {
      let str = '';
      for (let j = 0; j < num; j++) {
        str += '*'
      }
      console.log(str)
    }
  }
  
  // printSquare(num)
  
  // //jawaban pertemuan 5 nomor 3
  
  let printTriangleWithNumber = (num) => {
    if (typeof num != 'number' || isNaN(num)) {
      console.log('Parameter harus angka!')
      return
    }
    for (let i = num; i >= 1; i--) {
      let str = '';
      for (let j = 1; j <= i; j++) {
        str += j + ' ';
      }
      console.log(str)
    }
  }
  
  // printTriangleWithNumber()