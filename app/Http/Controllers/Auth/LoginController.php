<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            
            if ($token = JWTAuth::attempt( ['email' => $request->email, 'password' => $request->password])) {
                // attempt to verify the credentials and create a token for the user
                return response()->json([
                    'status' => 1,
                    'message' => 'Logged in Successfully',
                    'token' => $token
                ]);
            } else {
                return response()->json([
                    'status' => 0,
                    'message' => 'Password or email is invalid',
                ]);
            }            

        } catch (JWTException $e) {
            
            return response()->json([
                'status' => 0,
                'message' => 'Login failed',
            ]);

        }        
    }
}
