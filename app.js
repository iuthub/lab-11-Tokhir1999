window.onload=function() {

	let calculator = document.querySelector ('.calculator')
	let keys = calculator.querySelector ('.calculator__keys')
	let display = document.querySelector ('.calculator__display')
	
	keys.addEventListener ('click', function (e) {

		if(e.target.matches('button')) {
	
			let key = e.target
		    let action = key.dataset.action

		    if (!action ) {
		    	console.log (' number key !')
		    }

		    if (action === 'add' ||
				action === 'subtract' ||
				action === 'multiply' ||
				action === 'divide ') { console.log ('operator key !') }

		    if ( action === 'decimal') {
				console.log ('decimal key !')
			}

			if ( action === 'clear') {
				console.log ('clear key !')
			}

			if ( action === 'calculate') {
				console.log ('equal key !')
			}

			let displayedNum = display.innerHTML
			let keyContent = key.innerHTML

			if (!action ) {
				if (displayedNum.innerHTML === '0') {
					displayedNum.innerHTML = keyContent
				} else {
					display.innerHTML = displayedNum + keyContent
				}
			}

		}	

	})






}