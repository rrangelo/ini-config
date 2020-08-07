# ini-config

npm package [@rrangelo/ini-config](https://www.npmjs.com/package/@rrangelo/ini-config)

## Description

Load app config from `.ini` (or your defined extension) file and put on global context.

## Getting Started

### Install

`npm i -S @rrangelo/ini-config`

### Use

You must include the module just once time in your main file.

`let ini = require('@rrangelo/ini-config');`

You must create your .ini file into your module path. Default:  `./config.ini`

for default file, just execute the `ini();` function in your main file.

To get your configurationns, in default context, just call it that `var my_configuration_value = iniconf.my_section.my_configuration_key;`.

The context will be the global name used to get your configurations loaded. 

#### Error

If file doesn't exists you'll get the error `File not found`, you must be sure you get the correct configuration file path.

#### External File

You can use an external file setting doing that:

_NOTE: The extension can be customize._

##### On Windows Shell

`SET EXT_INI_CONF=C:\absolut\path\to\file.ini`

##### On Unix Shell

`export EXT_INI_CONF=/absolut/path/to/file.ini`

#### Customizing

##### By Name

You can create a .ini file with a custom name like `my.ini`. So, to load your file on context, just call the function with `name` param, like `ini({ name: 'my' });`. 

##### By Folder

You can create a .ini file in a diferent folder (always into your module path) like `./conf/config.ini`, to access to your .ini file just call the function with `folder` param, like `ini({ folder: 'conf' });`.

##### By Folder

You can organize your ini files into folders, when you need add anyone to your context, just call the function with `folder` param, like `ini({ folder: 'conf' });`.

##### By Context

The context will be the global name variable used to get your configurations loaded. You can customize this variable with a name of you choice, just need call the function with `context` param, like `ini({ contest: 'mycontext' });`. So, for get your configs saved, now you need call it in that way `var my_configuration_value = mycontext.my_section.my_property;`.

## Code Coverage

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rrangelo_ini-config&metric=alert_status)](https://sonarcloud.io/dashboard?id=rrangelo_ini-config)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rrangelo_ini-config&metric=coverage)](https://sonarcloud.io/dashboard?id=rrangelo_ini-config)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=rrangelo_ini-config&metric=security_rating)](https://sonarcloud.io/dashboard?id=rrangelo_ini-config)

If you want to see the coverage, please go to: 

[SonarCloud Project Coverage](https://sonarcloud.io/dashboard?id=rrangelo_ini-config)
