# array
> 一组连词线开头的行，构成一个数组.

## yaml
```yml
- Cat
- Dog
- Goldfish


animal: [Cat, Dog]
```

## json
```json
["Cat","Dog","Goldfish"]

// Inline
{"animal":["Cat","Dog"]}
```

## more complex

```yml
languages:
 - Ruby
 - Perl
 - Python 
websites:
 YAML: yaml.org 
 Ruby: ruby-lang.org 
 Python: python.org 
 Perl: use.perl.org 
```

## complex json

```json
{
  "languages": [
    "Ruby",
    "Perl",
    "Python"
  ],
  "websites": {
    "YAML": "yaml.org",
    "Ruby": "ruby-lang.org",
    "Python": "python.org",
    "Perl": "use.perl.org"
  }
}
```