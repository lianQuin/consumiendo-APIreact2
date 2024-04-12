
/*  async function consultarPost() {
    const postId = document.getElementById('postId').value;
    document.getElementById('error').textContent = '';
    
   

    try {
        const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = resPost.data;

        

        const userId = postData.userId;
        const resUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = resUser.data;

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `El autor del post con ID ${postId} es: ${userData.name} <br>
         Email : ${userData.email} <br>
         Direccion :${userData.address.street} ${userData.address.suite}`;

        
    } catch (error) {

        document.getElementById('resultado').textContent = '';//borro el resultado anterior
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = ''; // Limpiamos el mensaje de error
        console.error('Error al obtener la información:', error);
        errorDiv.textContent = 'Error al obtener la información';
    }

}*/


//Asi la hizo el profe

async function consultarPost() {
    const postId = document.getElementById('postId').value;//agregue para poder borrar de la pantalla lo anterior
    document.getElementById('error').textContent = '';
    
   

    try {
        const resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${postId}`);//con axios ya no es necesario poner get
        const postData = resPost.data;

        

        const userId = postData.userId;
        const resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
       

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `El autor del post con ID ${postId} es: ${resUser.data.name} <br>
         Email : ${resUser.data.email} <br>
         Direccion :${resUser.data.address.street} ${resUser.data.address.suite}`;

    
    } catch (error) {

        document.getElementById('resultado').textContent = '';//borro el resultado anterior
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = ''; // Limpiamos el mensaje de error
        console.error('Error al obtener la información:', error);
        errorDiv.textContent = 'Error al obtener la información';
    }

};




  