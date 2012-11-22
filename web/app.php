<?php

umask(0000);

use Symfony\Component\ClassLoader\ApcClassLoader;
use Symfony\Component\HttpFoundation\Request;

$loader = require_once __DIR__.'/../app/bootstrap.php.cache';

// Use APC for autoloading to improve performance
// Change 'sf2' by the prefix you want in order to prevent key conflict with another application
/*
$loader = new ApcClassLoader('sf2', $loader);
$loader->register(true);
*/

require_once __DIR__.'/../app/AppKernel.php';
//require_once __DIR__.'/../app/AppCache.php';

// Enforce ZF APPLICATION_ENV convention
if (! defined('APPLICATION_ENV')) {
    $default = 'production';

    // Use existing APPLICATION_ENV or default
    define('APPLICATION_ENV', getenv('APPLICATION_ENV') ?: $default);
}

// Convert application environment to Symfony-friendly version
$env = (APPLICATION_ENV === 'testing'     ? 'test'
     : (APPLICATION_ENV === 'development' ? 'dev'
     : 'prod'));


$kernel = new AppKernel($env, (($env == 'prod') ? false : true));
$kernel->loadClassCache();
//$kernel = new AppCache($kernel);
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
