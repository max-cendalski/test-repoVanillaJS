var $button = document.querySelector('.button-to-about')
var $homepage = document.querySelector('#homepage')
var $about = document.querySelector('#about')



$button.addEventListener('click',function() {
event.preventDefault()
  var divElements = document.querySelectorAll('div')

switchingViews('about')

})

function switchingViews(view) {
  if (view === 'about') {
    $about.className = 'column-width100'
    $homepage.className = 'hidden'
  } else {
    $about.className = 'hidden'
    $homepage.className = 'column-width100'
  }

}
/*
var $nutritionList = document.querySelector('#nutrition-list')
var $sugar= document.querySelector('#sugar')
var $addButton = document.querySelector('.add-button')
var $create = document.querySelector('.create')
var $form = document.querySelector('#nutrition-list')

var testString= ''
function handleOnClick(event) {
  event.preventDefault()
  console.log("event.target.value",event.target.value)
}
var caloriesCount = 0

function handleButtonClick(event) {
  event.preventDefault()
  console.log("event.target",event.target)
  console.log("testString",testString)
  if (testString === 'calories' && caloriesCount < 1) {
    caloriesCount ++
    var $option = document.createElement('input')
    var $optionLabel = document.createElement('label')
    $optionLabel.textContent= testString
    $option.setAttribute('class','input-box')
    $nutritionList.appendChild($optionLabel)
    $nutritionList.appendChild($option)
  }


}
function handleNutritionListClick(event) {
  event.preventDefault()
  console.log("event.target",event.target.value)
    testString = event.target.value
    console.log("testString:",testString)
  }

function handleFormSubmit(event) {
  event.preventDefault()
  console.log('whee')
}


$form.addEventListener("submit",handleFormSubmit)
$addButton.addEventListener("click",handleButtonClick)
$sugar.addEventListener("click", handleOnClick)
//$nutritionList.addEventListener("click",handleNutritionListClick)

var mainRow = document.createElement('div');
  mainRow.setAttribute('class', 'row');
  liElement.appendChild(mainRow);

  var entryImage = document.createElement('img');
  entryImage.setAttribute('class', 'column-full column-half');
  entryImage.setAttribute('src', entry.photo);
 */
