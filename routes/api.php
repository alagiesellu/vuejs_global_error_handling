<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/good', function() {
    return response()->json([
        'message' => 'This is a good request'
    ]);
});

Route::get('/bad', function() {

    $errors = [
        ['First Error.', 'Second Error.']
    ];

    abort_if(
        true,
        400,
        json_encode($errors)
    );

    return response()->json([
        'message' => 'This is a bad request'
    ]);
});
