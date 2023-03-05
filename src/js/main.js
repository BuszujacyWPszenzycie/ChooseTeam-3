const allPlayers = document.querySelectorAll('.team__player')
const allDragablePitchFields = document.querySelectorAll('.pitch__field-draggable')
const allTeam = document.querySelector('.team__players')

console.log(allTeam)

allPlayers.forEach(player => {
	player.addEventListener('dragstart', () => {
		player.classList.add('is-dragged')
	})

	player.addEventListener('dragend', () => {
		player.classList.remove('is-dragged')
	})
})

allDragablePitchFields.forEach(field => {
	field.addEventListener('dragover', e => {
		e.preventDefault()
		if (field.childElementCount < 1) {
			const isDragged = document.querySelector('.is-dragged')
			field.appendChild(isDragged)
		}
	})
})

allTeam.addEventListener('dragover', e => {
	e.preventDefault()
	const isDraggedTeamBox = document.querySelector('.is-dragged')
	allTeam.appendChild(isDraggedTeamBox)
})
