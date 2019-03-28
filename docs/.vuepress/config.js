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
          '/javascript/001-why.md',
          '/javascript/002-intro.md',
          '/javascript/003-syntax.md',
          '/javascript/004-data-structt.md',
          '/javascript/006-array.md',
          '/javascript/007-primitive.md',
          '/javascript/008-with-html.md'
        ]
      }
    ]
  }
};
