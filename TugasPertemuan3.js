//jawaban nomor 1
const printOddNumber = (num) => {
    for (let i = 0; i <= num; i++) {
      if (i % 2 !== 0) {
        console.log(i)
      }
    }
  }
  
  printOddNumber(7)
  
  //jawaban nomor 2
  const printPijarCamp = (num) => {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('PijarCamp')
      } else if (i % 5 === 0) {
        console.log('Camp')
      } else if (i % 3 === 0) {
        console.log('Pijar')
      } else {
        console.log(i)
      }
    }
  }
  
  printPijarCamp(20)
  
  //jawaban nomor 3
  const combineArray = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }
  
  const combineObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
  }
  
  const combinedArray = combineArray(['1', '2'], ['3', '4'])
  
  const combinedObjects = combineObjects({ nama: 'Fadlur', umur: 23 }, { alamat: 'Ternate', pekerjaan: 'Lekkoi uang negara' })
  
  console.log(combinedArray)
  console.log(combinedObjects)