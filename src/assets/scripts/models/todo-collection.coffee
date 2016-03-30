TodoModel = require('./todo-model')
Request = require('browser-request')

module.exports = class TodoCollection extends Backbone.Collection 

	initialize: => 
		this.model = TodoModel

	update: =>
		Request({
			method: 'GET', 
			url: 'http://'+window.location.hostname+':80/workshop_php/backend/public/get/all/my/todos', 
			json: true
		}, this.onRequest)

	post: (description) =>
		Request({
			method: 'POST', 
			url: 'http://'+window.location.hostname+':80/workshop_php/backend/public/db', 
			body: {
				description: description,
			}, 
			json:true
		}, this.onRequest)

	change: (action, id, completed) =>
		Request({
			method: 'POST', 
			url: 'http://'+window.location.hostname+':80/workshop_php/backend/public/update/todo', 
			port: '80',
			body: {
				action: action,
				id: id,
				completed: +completed
			}, 
			json:true
		}, this.onChange)



	onRequest: (error, response, result) =>
		for k, v of result
			result[k].completed = !!result[k].completed;
		this.set(result)

	onChange: (a, b, c) =>
		console.log(c)
