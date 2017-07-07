console.log('scene3 file loaded');

function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)

  // Setup Cast
  danerysContainer = document.createElement('div')
  danerysContainer.id = 'danerys-container'
  document.querySelector('#stage').append(danerysContainer)
  // danerysContainer.style.background = 'yellow'
  // danerysContainer.style.border = '2px solid red'
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.left = '20%'
  danerysContainer.style.top = '40%'
  danerysContainer.style.width = '60px'
  danerysContainer.style.height = '150px'

  danerysContainer.append(danererys)
  danererys.style.position = 'absolute'

  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0

  //

  drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'
  document.querySelector('#stage').append(drogoContainer)
  // drogoContainer.style.background = 'yellow'
  // drogoContainer.style.border = '2px solid red'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.left = '70%'
  drogoContainer.style.top = '40%'
  drogoContainer.style.width = '60px'
  drogoContainer.style.height = '133px'

  drogoContainer.append(drogo)
  drogo.style.position = 'absolute'
  drogo.style.width = '45px'
  drogo.style.left = '10px'

  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0

  // Character 1

  // Character 2

  // Setup Props

  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.left = '28%'
  egg.style.top = '50%'
  egg.style.width = '40px'

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.left = '28%'
  })

  frame(function() {
    egg.style.left = '30%'
  })

  frame(function() {
    egg.style.left = '40%'
  })

  frame(function() {
    egg.style.left = '50%'
  })

  frame(function() {
    egg.style.left = '60%'
  })

  frame(function() {
    egg.style.left = '65%'
  })

      for (eggLeft = 65; eggLeft > 28; eggLeft-= 5) {
        frame(drogoThrowsEgg)
    }
    //
    function drogoThrowsEgg() {
      egg.style.left = (parseInt(egg.style.left) - 5) + '%'
    }

    // Stage direction 2


  // Stage direction 2


}
