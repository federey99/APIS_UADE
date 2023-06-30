const contacts = async (nombre,apellido,email,telefono,mensaje) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "nombre": nombre,
    "apellido": apellido,
    "email": email,
    "telefono": telefono,
    "mensaje": mensaje
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  let response = await fetch("http://localhost:8080/api/contactos", requestOptions);
  let jsonData = await response.json();

  return jsonData;
}

export default contacts;