// Procurar o botao // Quando Clicar no botao(escutar o click e chamar a função)
document.querySelector('#add-time')
.addEventListener('click', cloneField)


// Executar uma acao
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

    // Colocar na página