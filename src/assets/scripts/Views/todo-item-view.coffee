Hammer = require('hammerjs')

module.exports = class TodoItemView extends Backbone.View 

	tagName: 'li'

	initialize: => 
		this.el.innerHTML = this.model.get('description')
		if this.model.get('completed') 
			this.el.classList.toggle('completed')
		this.removeButton = document.createElement('button')
		this.removeButton.classList.add('remove')
		this.removeButton.innerHTML = 'Remove'

		this.stateButton = document.createElement('button')
		this.stateButton.classList.add('state')
		this.stateButton.innerHTML = 'Complete'

		this.el.appendChild(this.removeButton)
		this.el.appendChild(this.stateButton)



		this.model.on('remove', this.onRemoveModel)
		this.model.on('change:completed', this.onModelCompleted)

		Hammer(this.el).on('swipeleft', this.onSwipeLeft)
		Hammer(this.el).on('swiperight', this.onSwipeRight)

	events:
		#'click': 'onClick'
		'click button.state': 'onClickStateButton'
		'click button.remove': 'onClickRemoveButton'

	onClickRemoveButton: =>
		this.model.collection.remove(this.model)

	onClickStateButton: =>
		this.model.toggleCompleted()

	onClick: =>
		this.model.toggleCompleted()

	onSwipeLeft: =>
		this.model.collection.remove(this.model)

	onSwipeRight: =>
		this.model.toggleCompleted()

	onRemoveModel: =>
		this.el.classList.add('fadeaway')
		_.delay( =>
			this.el.parentNode.removeChild(this.el)
		, 500)
		
	onModelCompleted: =>
		this.el.classList.toggle('completed')