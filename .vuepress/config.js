module.exports = {
    title: 'lif3ng\'s Blog',
    description: 'Some exercises and notes',
    themeConfig:{
        nav:[
           
        ],
        sidebar:{
            '/note/aliyunai/':[
                {
                    title: 'Python',
                    children:[
                        'py/1',
                        'py/2'
                    ]
                }
            ],
            '/note/designcode/':[
                {
                    title: 'Learn iOS11 Design',
                    children: [
                        'iosdesign/ios11',
                        'iosdesign/iphonex',
                    ]
                },
                {
                    title: 'Learn Sketch',
                    children: [
                        'sketch/learn'
                    ]
                },
                {
                    title:'Web',
                    children:[
                        'react/gatsby'
                    ]
                }
            ],
            '/note/':['designcode/','aliyunai/'],
            '/git/':['ssh','fetch_branch','with_jenkins'],
            '/nodejs/':['setup','yarn_or_npm','import_export'],
            '/webpack/':['setup','style'],
            '/electron/':['webview'],
            '/':['/webpack/','/nodejs/'],

        }
    }   
}