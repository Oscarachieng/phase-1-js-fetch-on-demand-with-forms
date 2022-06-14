const init = () => {
    const myForm = document.querySelector("form");
    myForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        const input = document.querySelector("#searchByID");
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response =>{
            return response.json();
        }).then(data =>{
            const titleHead = document.getElementsByTagName("section#movieDetails h4")
            titleHead.textContent = data.title
            const summery = document.getElementsByTagName("section#movieDetails p")
            summery.textContent = data.summery
        });

    })
  
}

//function insertAfter(newNode, existingNode) {
 //   existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);


document.addEventListener('DOMContentLoaded', init);