<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }}</title>

    @vite(["resources/sass/app.scss"])
</head>
<body>
    <div id="root"></div>

    @vite(["resources/js/app.js"])
</body>
</html>