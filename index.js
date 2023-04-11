fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showData(data);
  });

const showData = (data) => {
  console.log(data);
  let body = "";
  for (let index = 0; index < data.length; index++) {
    body += `<tr><td>${data[index].id}</td><td>${data[index].name}</td><td>${data[index].apellido}</td><td>${data[index].city}</td><td>${data[index].state}</td></tr>`;
  }
  document.querySelector("#tabla").innerHTML = body;
};
