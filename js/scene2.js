console.log('Executing scene 2')

function scene2() {


 // Setup Stage
  stage = document.querySelector('#stage')
  castleImgSrc = castle.getAttribute('src')
  stageImg = stage.querySelector('#stage-img')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '70%'
  nedContainer.style.height = '44%'
  nedContainer.style.left = '25%'
  nedContainer.style.top = '55%'
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)

  // Character 1

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}

function scene2() {
  console.log('Executing scene 2!')

  // ...
}
