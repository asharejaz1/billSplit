const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')


// Get number of people from number of people div
let people = Number(numberOfPeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billTotalInput.value)
  

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = Number(tipInput.value) / 100
  console.log(tip)

  // get the total tip amount
  let totalTip = bill*tip

  // calculate the total (tip amount + bill)
  let totalBill = bill + totalTip

  // calculate the per person total (total divided by number of people)
  let personTotal = totalBill/people
  console.log(personTotal)

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$PKR{personTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  people += 1

  // update the DOM with the new number of people
  numberOfPeople.innerText = `${people}`

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (people <= 1) {
    return
  }
  
  // decrement the amount of people
  people -= 1

  // update the DOM with the new number of people
  numberOfPeople.innerText = `${people}`

  // calculate the bill based on the new number of people
  calculateBill()
}
