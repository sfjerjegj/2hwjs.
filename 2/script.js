
const jsonData = {
    "name": "Beka",
    "age": 14,
    "city": "Kyrgyzstan"
  };
  
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.stringify(jsonData));
    }, 2000);
  });
  
  promise
    .then(data => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
    })
    .catch(error => {
      console.log(error);
    });
  







