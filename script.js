fetch("http://universities.hipolabs.com/search?country=United+States")
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0 ; i< 10; i++){
        console.log(data[i])
      }
  }
  )