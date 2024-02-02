export { calculate }

function calculate (resultInput) {
    resultInput.value = 'ERRO'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}