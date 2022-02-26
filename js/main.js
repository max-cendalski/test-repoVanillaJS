$list = document.querySelector('#list')
$sortDropDown = document.querySelector('#sort-dropdown')
$sortForm = document.querySelector('#sort-form')
$submitButton = document.querySelector('#submit')



$sortDropDown.addEventListener('click', function(event) {
  event.preventDefault()


  if (event.target.value === 'length-lowest') {
    ships.sort((a, b) => a.length - b.length)
    $list.replaceChildren()
    for (var i = 0; i < ships.length; i++) {
      renderShips(ships[i])
    }
   }
   if (event.target.value === 'length-highest') {
    ships.sort((a, b) => b.length - a.length)
    $list.replaceChildren()
    for (var i = 0; i < ships.length; i++) {
      renderShips(ships[i])
    }
   }
   if (event.target.value === 'armor') {
    $list.replaceChildren()
    ships.sort((a, b) => a.armor - b.armor)
    for (var i = 0; i < ships.length; i++) {
      renderShips(ships[i])
    }
  }
  if (event.target.value === 'weapon') {
    ships.sort((a, b) => a.weapon - b.weapon)
    $list.replaceChildren()
    for (var i = 0; i < ships.length; i++) {
      renderShips(ships[i])
    }
  }
  if (event.target.value === 'weight') {
    ships.sort((a, b) => a.weight - b.weight)
    $list.replaceChildren()
    for (var i = 0; i < ships.length; i++) {
      renderShips(ships[i])
    }
   }
})


function renderShips(data) {
  var liElement = document.createElement('li')
  liElement.setAttribute('class','border-all column-width20')
  $list.appendChild(liElement)

  var shipName = document.createElement('h2')
  shipName.textContent = data.name
  liElement.appendChild(shipName)

  var shipLength = document.createElement('p')
  shipLength.textContent = 'Length: ' + data.length
  liElement.appendChild(shipLength)

  var shipHeight = document.createElement('p')
  shipHeight.textContent = 'Height: ' + data.height
  liElement.appendChild(shipHeight)

  var shipArmor = document.createElement('p')
  shipArmor.textContent = 'Armor: ' + data.armor
  liElement.appendChild(shipArmor)

  var shipweight = document.createElement('p')
  shipweight.textContent = 'Weight: ' + data.weight
  liElement.appendChild(shipweight)

  return liElement
}






















// HASH ROUTING
/* var $buttonToAbout = document.querySelector('.button-to-about')
var $buttonToHomeFromContact =document.querySelector('#button-to-home-from-contact')
var $buttonToContact = document.querySelector('.button-to-contact')
var $buttonToHomeFromAbout = document.querySelector('#button-to-home-from-about')

var $views = document.querySelectorAll('.view')


switchingViews(window.location.hash)

window.addEventListener('hashchange',function(event) {
  switchingViews(window.location.hash)
  console.log('window.location.hash',window.location.hash)
})



$buttonToHomeFromAbout.addEventListener('click',function() {
window.location.hash = 'homepage'
switchingViews(window.location.hash)
})

$buttonToHomeFromContact.addEventListener('click',function() {
window.location.hash = 'homepage'
switchingViews(window.location.hash)
})

$buttonToAbout.addEventListener('click',function() {
window.location.hash = 'about'
switchingViews(window.location.hash)
})

$buttonToContact.addEventListener('click',function() {
window.location.hash = 'contact'
switchingViews(window.location.hash)
})


function switchingViews(newHash) {
  var route = newHash.startsWith('#') ? newHash.replace('#', '') : newHash;
  if (route ==='') return;
  for (var viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].getAttribute('data-view') !== route) {
      $views[viewIndex].className = 'view hidden';
    } else  {
      $views[viewIndex].className = 'view'
    }
  }
} */

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
