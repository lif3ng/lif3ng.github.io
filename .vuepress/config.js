module.exports = {
  title: 'lif3ng\'s Blog',
  description: 'Some exercises and notes',
  themeConfig: {
    nav: [

    ],
    sidebarDepth: 2,
    sidebar: {
      '/note/aliyunai/': [
        {
          title: 'Python',
          children: [
            'py/1',
            'py/2',
          ],
        },
      ],
      '/note/vscode/': [
        '03', '04',
      ],
      '/note/designcode/': [
        {
          title: 'Learn iOS11 Design',
          children: [
            'iosdesign/ios11',
            'iosdesign/iphonex',
          ],
        },
        {
          title: 'Learn Sketch',
          children: [
            'sketch/learn',
          ],
        },
        {
          title: 'Web',
          children: [
            'react/gatsby',
          ],
        },
      ],
      '/fe/': [
        {
          title: 'DOM 事件',
          children: [
            'dom/event/drag',
          ],

        },
      ],
      '/readcode/': [
        {
          title: 'element',
          children: [
            'element/',
          ],
        },
        {
          title: 'vuepress',
          children: [
            'vuepress/',
            'vuepress/scripts',
            'vuepress/code/bin',
          ],
        },
        'element/',
        'vuepress/',
      ],
      '/note/': ['designcode/', 'aliyunai/', 'vscode/'],
      '/git/': ['ssh', 'fetch_branch', 'with_jenkins'],
      '/nodejs/': ['setup', 'yarn_or_npm', 'import_export', 'ts', 'child_process'],
      '/webpack/': ['setup', 'style'],
      '/electron/': ['webview'],
      '/book/': ['cssworld/'],
      '/': [
        '/note/',
        '/nodejs/',
        '/git/',
        '/webpack/',
        '/electron/',
        '/readcode/',
        '/fe/',
      ],
    },
  },
};
