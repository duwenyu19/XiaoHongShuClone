import { ImageSourcePropType } from 'react-native'

type UserPost = {
    id: string
    userId: string
    image: ImageSourcePropType
    caption: string
    userAvatar: ImageSourcePropType
}

type UserData = {
    id: string
    name: string
    description: string
    image: ImageSourcePropType
}

export const usersDataPostExplore: Record<string, UserPost & UserData> = {
    'post1': {
        id: 'post1',
        userId: '1',
        name: '王小明',
        description: '摄影爱好者',
        image: require('../assets/photos/user-background-1.png'),
        caption: '山上的风景真的很美！',
        userAvatar: require('../assets/photos/user-portrait-2.jpg')
    },
    'post2': {
        id: 'post2',
        userId: '2',
        name: '李慧',
        description: '旅行家',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '城市的夜晚如此迷人！',
        userAvatar: require('../assets/photos/user-portrait-3.jpg')
    },
    'post3': {
        id: 'post3',
        userId: '3',
        name: '刘亦菲',
        description: '艺术家',
        image: require('../assets/photos/user-background-1.png'),
        caption: '今日的绘画作品。',
        userAvatar: require('../assets/photos/user-portrait-4.jpg')
    },
    'post4': {
        id: 'post4',
        userId: '4',
        name: '张伟',
        description: '音乐家',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '新的音乐创作分享。',
        userAvatar: require('../assets/photos/user-portrait-5.jpg')
    },
    'post5': {
        id: 'post5',
        userId: '5',
        name: '赵四',
        description: '厨师',
        image: require('../assets/photos/user-background-1.png'),
        caption: '今日的美食制作。',
        userAvatar: require('../assets/photos/user-portrait-6.jpg')
    },
    'post6': {
        id: 'post6',
        userId: '6',
        name: '王大锤',
        description: '冒险家',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '最新的冒险故事。',
        userAvatar: require('../assets/photos/user-portrait-7.jpg')
    },
}
