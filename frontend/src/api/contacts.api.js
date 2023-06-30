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

/*const getContacts = async (token,setContacts) => {

    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      mode:'cors'
    };
    
    let response = await fetch("http://localhost:8080/api/contactos", requestOptions);
    let jsonData = await response.json();
    setContacts(jsonData);
    console.log(jsonData)
}

export default getContacts;*/