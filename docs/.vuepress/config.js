module.exports = {
  base: '/yaml-notes/',
  title: 'yaml-notes',
  host: '0.0.0.0',
  description: 'Notes for yaml.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: [
          '/app/001-why.md',
          '/app/002-intro.md',
          '/app/003-syntax.md',
          '/app/004-data-struct.md',
          '/app/006-array.md',
          '/app/007-primitive.md',
          '/app/008-with-html.md',
          '/app/009-reference.md',
          '/app/010-js-yaml.md'
        ]
      }
    ]
  }
};
