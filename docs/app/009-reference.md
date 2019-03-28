# reference
> 锚点&和别名*，可以用来引用.
> &用来建立锚点（defaults），<<表示合并到当前数据，*用来引用锚点.

## yaml
> `<<: *defaults` 这里放在前面，或者后面，没有关系，都是下面的选项覆盖 &default 的值.

```yml
defaults: &defaults
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults
```

## same equal

```yml
defaults:
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  adapter:  postgres
  host:     localhost

test:
  database: myapp_test
  adapter:  postgres
  host:     localhost
```

## json

```json
{
  "defaults": {
    "adapter": "postgres",
    "host": "localhost"
  },
  "development": {
    "database": "myapp_development",
    "adapter": "postgres",
    "host": "localhost"
  },
  "test": {
    "database": "myapp_test",
    "adapter": "postgres",
    "host": "localhost"
  }
}
```