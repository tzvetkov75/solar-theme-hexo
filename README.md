# Solar theme 

![index](/source/images/Solar.png)

A responsive, dark and simple blog theme for [Hexo](http://hexo.io)

- based on theme [cacutus dark](https://github.com/probberechts/cactus-dark.git) by Pieter Robberechts
- using [Full CSS 3D Solar System](http://codepen.io/waynedunkley/pen/YPJWaz) by Wayne Dunkley 

## Summary

- [General](#general)
- [Features](#features)
- [Install](#install)
- [Configuration](#configuration)
- [License](#license)

## General

- **Version** : 0.1
- **Compatibility** : Hexo 3 or later

## <Features></Features>

- responsive theme with 3D annimation in header
- clean and structure optimaized for blog

## Demo 

  -  Demo at [Solar](https://tzvetkov75.github.io/demo_blog/public/)
  
## Install

1. In the `root` directory of Hexo:

```
$ git clone https://github.com/tzvetkov75/solar-theme-hexo.git themes/solar
$ npm install hexo-pagination --save
```

add 

2. Change the `theme` property in the `config.yml` file (hexo config file).

```
theme: solar
```

3. Run: `hexo generate` and `hexo server`

## Configuration

You can customize setting in  `_config.yml` in the theme directory `solar`.

- rotation speed
- images of the planets and sun 
- analytics 
- RSS
- social links 
- code highlight

If you want to change some colors use file `css\_variables.styl`

## License
	MIT
