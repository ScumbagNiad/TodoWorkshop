<!doctype html>
<html>
<head>
	<title>{{ $title }}</title>
</head>
<body>
	{{ $title }} <br />
	<form method="post" action="{{URL::to('/db')}}">
		<input type="text" name="description" placeholder="todo"/>
		<input type="text" name="completed" placeholder="todo"/>
		<input type="submit" value="Frodo" />
	</form>
</body>
</html>