window.Backbone = require('backbone')
window.$ = require('jquery')
window._ = require('lodash')

TodoCollection = require('./models/todo-collection')
InputView = require('./views/Input-View')
TodoListView = require('./views/todo-list-view')

class Main extends Backbone.View

	el: 'body' 

	initialize: =>
		this.collection = new TodoCollection()
		this.inputView = new InputView(el: 'input')
		this.todoListView = new TodoListView(el: 'ul', this.collection)

		this.inputView.on('SEARCH', this.onSearch)
		this.collection.bind("change", this.onChange, this);
		this.collection.bind("remove", this.onRemove, this);
		this.collection.update()

	onSearch: =>
		this.collection.post(this.inputView.value())

	onChange: (object) =>
		this.collection.change('change', object.id, object.changed.completed)
	onRemove: (object) =>
		this.collection.change('remove', object.id, true)

new Main()
