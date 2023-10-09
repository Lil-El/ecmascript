# Class

## public

```js
class Dot {
  x = 0;
  logX() {}
}
```

## setter、getter

class 属性的 setter、getter 行为前的拦截

```js
class Dot{
  set x(x){}
  get x(){}
}
```

## private

私有：在 Dot 内部调用

```js
class Dot {
  // 私有变量
  #var;

  // 私有方法
  #log() {}
}
```

## static

静态：Dot.var; Dot.log();

```js
class Dot {
  static var;

  static log() {}
}
```

## private static

```js
class Dot {
  static #var;

  static #log() {}
}
```
