<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|


Route::get('/', 'WelcomeController@index'); */
Route::get('/form', 'TodoController@form');
Route::post('/db', 'TodoController@post_my_todo');
Route::get('/get/all/my/todos', 'TodoController@get_my_todos');
Route::post('/update/todo', 'TodoController@update_todo');
/*
Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
*/