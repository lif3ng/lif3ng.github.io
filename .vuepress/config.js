module.exports = {
    title: 'lif3ng\'s Blog',
    description: 'Some exercises and notes',
    themeConfig:{
        nav:[
           
        ],
        sidebar:{
            '/note/aliyunai/':[
                {
                    title: 'Python'
                }
            ],
            '/note/designcode/':[
                {
                    title: 'Learn iOS11 Design',
                    children: [
                        'ios11design/ios11',
                        'ios11design/iphonex',
                    ]
                }
            ],
            '/note/':['designcode/','aliyunai/'],
            '/git/':['ssh','fetch_branch'],
            '/nodejs/':['setup','yarn_or_npm'],
            '/webpack/':[''],
            '/':['/webpack/','/nodejs/'],

        }
    }   
}