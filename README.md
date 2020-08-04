# ini-config

## Description

Load app config from `.ini` file and put on modeule context.

## Getting Started

### Install

`npm i -S ini-config`

### Use

You must include the module just once time in your main file.

`let ini = require('ini-config');`

You must create your .ini file into your module path. Default:  `./config.ini`

for default file just execute the `ini();` function in your main file.

To get properties just call it that `var my_property = config.my_section.my_property;`.

#### Customizing

##### By Name

You can create a .ini file with a custom name like `my.ini`. So, to load your file on context, just call the function with `name` param, like `ini({ name: 'my' });`, in your main file. 

##### By Folder

You can create a .ini file in a diferent folder (always into your module path) like `./conf/config.ini`, to access to your .ini file just call the function with `folder` param, like `ini({ folder: 'conf' });`, in your main file.

##### By Folder/Name

Is a mix of both above, just call the function with both params `folder` and `name`, like `ini({ folder: 'conf', name: 'my' });`, in your main file.

## Code Coverage

If you want to see the coverage, please go to: [https://sonarcloud.io/dashboard?id=rrangelo_ini-config](https://sonarcloud.io/dashboard?id=rrangelo_ini-config)