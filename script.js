// seleciona o input switch responsável por mudar o tema do site. 
const inputCheck = document.querySelector("#darkMode");
// seleciona o body da página.
const element = document.querySelector('body')

// quando o input é pressionado, uma arrow function é executada, em que, na const modo, se o input for checado, retorna "dark". Caso contrário, retorna "light". Na const element, um atributo é adicionado a data-bs-theme, que é o valor da const modo. 
inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? "dark" : "light";
    element.setAttribute("data-bs-theme", modo)
})
