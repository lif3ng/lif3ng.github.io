module.exports = {
    title: 'lif3ng\'s Blog',
    description: 'Some exercises and notes',
    themeConfig:{
        nav:[
           
        ],
        sidebar:{
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
                }
            ],
            '/note/':['designcode/'],
            '/git/':['ssh','fetch_branch'],
            '/nodejs/':['setup','yarn_or_npm'],
            '/webpack/':[''],
            '/':['/webpack/','/nodejs/'],

        }
    }   
}