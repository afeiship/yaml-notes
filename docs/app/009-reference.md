# reference
> 锚点&和别名*，可以用来引用.
> &用来建立锚点（defaults），<<表示合并到当前数据，*用来引用锚点.

## yaml

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