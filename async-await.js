/*let getNameAsync = async (idPost) => {

    //https://jsonplaceholder.typicode.com/posts/

    //https://jsonplaceholder.typicode.com/users*/



//getNameAsync(15);*///


async function consultarPost(){
   
    const postId = document.getElementById('postId').value;
    document.getElementById('error').textContent = '';
   

    try {
        let resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML ='';
        // Realizamos una solicitud para obtener la información del post con el ID ingresado
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postResponse.json();//esto con axios no lo necesito

        // Accedemos al ID de usuario asociado a ese post
        const userId = postData.userId;//es lo q converti en json (lo q viene de la api)con .userId estoy pidiendo que me traiga todo lo de useId

        // Realizamos otra solicitud para obtener la información del usuario con el ID correspondiente
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await userResponse.json();//cuando me trae lo paso a json (esto con axios no lo neceisto)

        // Mostramos el nombre del autor del posteo
        
        
        resultadoDiv.innerHTML = `El autor del post con ID ${postId} es: ${userData.name} su email es: ${userData.email} y su direccion es:${userData.address.street} ${userData.address.suite}`;
    } catch (error) {
        const resultadoDiv = document.getElementById('resultado');
          resultadoDiv.innerHTML ='';
        console.error('Error al obtener la información:', error);
        document.getElementById('error').textContent = "Error al obtener la información";
       
    }
   

}

/*"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",*/