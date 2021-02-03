<?php

namespace App\Providers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // force url generated using https
        // if ($this->app->environment('dev')) {
        //     URL::forceScheme('https');
        // }

        Inertia::share([
            'app' => [
                'name' => config('app.name'),
                'url' => env('APP_URL'),
            ],
            'route' => function () {
                return [
                    'hasLogin' => Route::has('login'),
                    'hasRegister' => Route::has('register'),
                ];
            },
            'isAuth' => function () {
                return Auth::check();
            },
            'sessionStatus' => function () {
                return session('status');
            },
            'auth' => function () {
                return [
                    'user' => (Auth::check()) ? Auth::user() : (object) [],
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                ];
            },
        ]);
    }
}
