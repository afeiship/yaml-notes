# js-yaml
> 这是 JS-YAML 库特有的功能，可以把函数和正则表达式转为字符串.

## usage
```js
var yaml = require('js-yaml');
var fs   = require('fs');

var obj = {
  fn: function () { return 1 },
  reg: /test/
};

try {
  fs.writeFileSync(
    './example.yml',
    yaml.dump(obj),
    'utf8'
  );
} catch (e) {
  console.log(e);
}
```