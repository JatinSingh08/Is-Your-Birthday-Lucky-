const birthDate = document.querySelector('#birth-date')
const luckyNumber = document.querySelector('#lucky-number')
const checkButton = document.querySelector('#check-button')
const resultbox = document.querySelector('#result')
const luckyGif = document.querySelector('.lucky-gif')
const unluckygif = document.querySelector('.unlucky-gif')

luckyGif.style.display = "none"
unluckygif.style.display = "none"
resultbox.style.display = "none"

checkButton.addEventListener('click', checkBirthdayLucky)

function calculateSum(dob) {
  dob = dob.replaceAll("-","")
  let sum = 0
  for(let i=0;i<dob.length;i++) {
    sum = sum + Number(dob[i])
  }
  return sum
}

function checkBirthdayLucky() {
  const dob = birthDate.value
  const sum = calculateSum(dob)
  if(dob&&luckyNumber.value){
    compareValues(sum , luckyNumber.value)
  } else {
    unluckygif.style.display = "none"
    luckyGif.style.display = "none"
    resultbox.style.display = "block"
    resultbox.innerText = "Enter all fields 😤😡"
  }
}

function compareValues(sum,luckyNumber) {

  if(sum%luckyNumber === 0) {
    showLuckyMessage();
  } else {
    showUnluckyMessage();
  }

}

function showLuckyMessage() {
  resultbox.innerHTML = 'Your Birthday is <span>Lucky</span>🥳'
  resultbox.style.display = 'block'
  unluckygif.style.display = 'none'
  luckyGif.style.display = 'block'
}

function showUnluckyMessage() {
  resultbox.innerHTML = 'Your Birthday is not <span>Lucky</span> 👽'
  resultbox.style.display = 'block'
  unluckygif.style.display = 'block'
  luckyGif.style.display = 'none'
}
