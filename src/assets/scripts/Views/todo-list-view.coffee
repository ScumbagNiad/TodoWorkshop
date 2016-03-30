TodoItemView = require('./todo-item-view')

module.exports = class TodoListView extends Backbone.View 

	initialize: (data, delegate) =>
		this.delegate = delegate
		this.delegate.on('add', this.onDelegateAdd)



	onDelegateAdd: (model, collection) =>
		this.addItem(model)

	addItem: (model) =>
		itemView = new TodoItemView(model: model)
		this.el.appendChild(itemView.el)


