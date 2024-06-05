/*fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json.title));
*/

//Pasar de promesas a async -->

async function getData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const dataJSON = await data.json();
    console.log(dataJSON.title);
}

getData();