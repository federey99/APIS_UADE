const solicitudes = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/contactos", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los contactos');
      }
  
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error al obtener los contactos:', error);
    }
  };
  
  export default solicitudes;