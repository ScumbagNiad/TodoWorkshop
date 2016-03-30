<?php namespace App\Http\Controllers;

use Request;
use App\Todo;

class TodoController extends Controller {

	public function post_my_todo()
	{
		$todo = new Todo;
		$todo -> description = Request::get('description');
		$todo -> save();
		$ret = Todo::all();
		return response()->json($ret, 200);
	}

	public function update_todo()
	{
		$id = Request::get('id');
		$target = Todo::find($id);
		$action = Request::get('action');
		if ($action == 'change') {
			$target -> completed = Request::get('completed');
			$target -> save();
		} else {
			$target->delete();
		}
		$ret = Todo::all();
		return response()->json($ret, 200);
	}	
	
	public function get_my_todos()
	{
		$ret = Todo::all();
		return response()->json($ret, 200);
	}

}
