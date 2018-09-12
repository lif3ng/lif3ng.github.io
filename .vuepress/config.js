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
                        'ios11design/ios11',
                        'ios11design/iphonex',
                    ]
                }
            ],
            '/note/':['designcode/'],
            '/git/':['ssh'],
            '/nodejs/':['setup','yarn_or_npm'],
            '/webpack/':[''],
            '/':['/webpack/','/node/'],

        }
    }   
}