<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Resources
This project is the output from [Laravel 8 REST API With Sanctum Authentication](https://www.youtube.com/watch?v=MT-GJQIY3EU) by Traversy Media.

## Public APIs
### Users
- POST [/register]()
    - ['name','email','password','password_confirmation']
    - register user
- POST [/login]()
    - ['email','password']
    - login user
### Products
- GET [/products]()
    - get all products
- GET [/products/{id}]()
    - gell product by id
- GET [/products/search/{name}]()
    - search product by name

## Protected APIs
### Users
- POST [/logout]()
    - logout user
### Products
- POST [/products]()
    - create product
    - ['name','slug','description','price',]
- PUT [/products/{id}]()
    - update product
- DELETE [/products/{id}]()
    - delete product by id


