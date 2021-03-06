# primitive
> 纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量.

## 类型如下
- 字符串
- 布尔值
- 整数
- 浮点数
- Null
- 时间
- 日期

## null
> null用 ~ 表示

## 时间
> 时间采用 ISO8601 格式
> iso8601: 2001-12-14t21:59:43.10-05:00 

## 日期
> 日期采用复合 iso8601 格式的年、月、日表示。
> date: 1976-07-31

## boolean
> 强制转换数据类型

```yml
e: !!str 123
f: !!str true
```

## 多行字符串

```yml
this: |
  Foo
  Bar
that: >
  Foo
  Bar
```

## 头层换行去除
> +表示保留文字块末尾的换行，-表示删除字符串末尾的换行。

```yml
s1: |
  Foo

s2: |+
  Foo

s3: |-
  Foo
```