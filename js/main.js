console.log("**********")

function loadDocument(){
    const $form = document.getElementById('form')
    console.log("$form: " + $form)
    const $input = document.querySelector('#valueInput')


    $form.addEventListener('submit', handleSubmit)
    $input.addEventListener('keypress', convert)
    window.addEventListener('offline', () =>{
        const $containerResult = document.querySelectorAll('.container-result')[0]
        $containerResult.style.color = "red"
        setText($containerResult, "Sin conexión")


    })
}


/**
 * convert pesos to dollar and bis
 */
var convert = () => {
    console.log("---------------------------------")
    const $input = document.querySelector('#valueInput')
    const $formChange = document.querySelector('#formChange')
    const $toChange = document.querySelector('#toChange')
    const $containerResult = document.querySelectorAll('.container-result')[0]

    const valueInt = +$input.value
    console.log(valueInt);

    const resul = convertMoney($formChange.value, $toChange.value, valueInt)

    setText($containerResult, resul)


}

function handleSubmit(event){
    console.log("event: ", event)
    event.preventDefault();
    convert()

}

/**
 * st value in label p
 * @param {*} $element htmlElement
 * @param {*} text value to set
 */
function setText($element, text){
    $element.innerText = text;
}

const DOLAR = "2"
const PESOS = "1"
//const EU = "3"


/**
 * convierte de pesos a dolares y bis
 * @param {*} from base money
 * @param {*} to to money
 * @param {*} value value to convert
 * @returns 
 */
function convertMoney(from, to, value){
    let baseValue
    switch (from) {
        case PESOS:
            if(to === PESOS) return value
            return value *0.00028
        case DOLAR:
            if (to === DOLAR) return value
            return value * 3623    
        default:
            return 0
    }
}

