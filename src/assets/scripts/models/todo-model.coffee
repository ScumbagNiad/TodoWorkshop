module.exports = class TodoModel extends Backbone.Model 

	defaults:
		completed: false
		id: 0
	initialize: =>
		console.log('new model!')

	toggleCompleted: =>
		this.set('completed' , !this.get('completed'))
		this.trigger("CHANGE")