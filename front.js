function rickymortyInfo() {
    const rickymortyNameInput = document.getElementById("rickymortyName")
    const rickymortyInfo = document.getElementById("rickymortyInfo")
    //que de igual que sea mayusculas o minúsculas. coger el valor del campo que se introduzca en input de pokemonName.
    const rickymortyName= rickymortyNameInput.value.toLocaleLowerCase()

    fetch(`https://rickandmortyapi.com/api/character/?name=${rickymortyName}`)
        .then( response => response.json())
        .then ( data => {const personajes = data.results[0];
            console.log(personajes)
            const {name, status, species,gender, origin: {name:planetDimension}, image} = personajes
            rickymortyInfo.innerHTML = `
            <h2>${name}</h2>
            <img src ="${image}" alt ="${name}"/>
            <p>${status}</p>
            <p>${species}</p>
            <p>${gender}</p>
            <p>${planetDimension}</p>
            `
        })
        .catch(error => rickymortyInfo.innerHTML =`<p>Imposible acceder al personaje</p>`)
}