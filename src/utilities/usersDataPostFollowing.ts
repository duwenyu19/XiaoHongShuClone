type UserPost = {
    id: string
    userId: string
    image: any
    caption: string
    userAvatar: any
}

export const usersDataPostFollowing: Record<string, UserPost> = {
    'post1': {
        id: 'post1',
        userId: '1',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '今天Money又让我帮她舔毛, 还偷吃我的饭! 生气><',
        userAvatar: require('../assets/photos/user-portrait-3.jpg')
    },
    'post2': {
        id: 'post2',
        userId: '2',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '爱我的金毛狗狗！',
        userAvatar: require('../assets/photos/user-portrait-2.jpg')
    },
    'post3': {
        id: 'post3',
        userId: '3',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '与Bear度过的愉快时光',
        userAvatar: require('../assets/photos/user-portrait-4.jpg')
    },
    'post4': {
        id: 'post4',
        userId: '4',
        image: require('../assets/photos/user-background-1.png'),
        caption: '今天的冰红茶特别好喝！',
        userAvatar: require('../assets/photos/user-portrait-5.jpg')
    },
    'post5': {
        id: 'post5',
        userId: '5',
        image: require('../assets/photos/user-background-1.png'),
        caption: '刚完成的新项目真的很棒！',
        userAvatar: require('../assets/photos/user-portrait-6.jpg')
    },
    'post6': {
        id: 'post6',
        userId: '6',
        image: require('../assets/photos/user-background-1.png'),
        caption: '最近的旅行经验真的很棒！',
        userAvatar: require('../assets/photos/user-portrait-7.jpg')
    },
}
