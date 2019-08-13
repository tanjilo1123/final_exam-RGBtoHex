const rangeContainer = document.getElementById('showBackground')
const outputRGBPanel = document.getElementById('hax-output')
const rgbArr = ['00', '00', '00']

/*******************************************
             change value event 
********************************************/
rangeContainer.addEventListener('input', event => {
  const showValue = event.target.nextElementSibling
  showValue.innerHTML = event.target.value
  const show16 = check2(Number(event.target.value).toString(16))
  
  numberToArray(event.target.id, show16)
  showOutput()
})

/*******************************************
  show rgb number and show background color
********************************************/
function showOutput() {
  const color = rgbArr.join('')
  outputRGBPanel.textContent = `#${color}`
  rangeContainer.style.backgroundColor = `#${color}`
}

/*******************************************
  check 16  two number
********************************************/
function check2(number) {
  if(number.length < 2) {
    return '0' + number
  } else {
    return number
  }
}

/*******************************************
        get number to rgb array
********************************************/
function numberToArray(id, number) {
  switch(id) {
    case "R-container" :
      rgbArr[0] = number
      break
    case "G-container" :
      rgbArr[1] = number
      break
    case "B-container" :
      rgbArr[2] = number
      break
  }  
}

showOutput()