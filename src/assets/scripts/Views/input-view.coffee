module.exports = class InputView extends Backbone.View 

	initialize: => 
		

	events:
		'keyup' : 'onKeyUp'

	onKeyUp: (event) =>
		switch event.keyCode
			when 13
				this.search()

	search: =>
		this.trigger('SEARCH')
		this.el.value = ''

	value: => 
		return this.el.value

