import { ImageSourcePropType } from 'react-native'

export type UserPost = {
    id: string
    userId: string
    image: ImageSourcePropType
    caption: string
    userAvatar: ImageSourcePropType
    name?: string
    description?: string
}

export let usersDataPostMe: Record<string, UserPost>;

export function initializeUsersDataPostMe(initialName: string) {
    usersDataPostMe = {
        'post1': {
            id: 'post1',
            userId: '1',
            name: initialName,
            description: '一只活泼好动的小猫猫',
            image: require('../assets/photos/user-background-2.jpg'),
            caption: '今天我躺在窗台上晒太阳, 感觉好舒服!',
            userAvatar: require('../assets/photos/user-portrait.jpg')
        },
        'post2': {
            id: 'post2',
            userId: '2',
            name: initialName,
            description: '一只爱吃鱼的猫猫',
            image: require('../assets/photos/user-background-2.jpg'),
            caption: 'dwy给买了新的鱼罐头, 吃得好开心!',
            userAvatar: require('../assets/photos/user-portrait.jpg')
        },
        'post3': {
            id: 'post3',
            userId: '3',
            name: initialName,
            description: 'Money的玩伴,家里的小狗Symba',
            image: require('../assets/photos/user-background-2.jpg'),
            caption: '今天和Symba一起在花园里玩, 真的好开心!',
            userAvatar: require('../assets/photos/user-portrait.jpg')
        },
        'post4': {
            id: 'post4',
            userId: '4',
            name: initialName,
            description: '一只经常找暖和地方的小猫猫',
            image: require('../assets/photos/user-background-1.png'),
            caption: '发现了一个新的暖和地方, 是dwy刚烫好的衣服上!',
            userAvatar: require('../assets/photos/user-portrait.jpg')
        },
        'post5': {
            id: 'post5',
            userId: '5',
            name: initialName,
            description: '一个猫窝里的技术博主',
            image: require('../assets/photos/user-background-1.png'),
            caption: '今天学会了新技能, 用爪子打开门, 我真是个小机灵鬼!',
            userAvatar: require('../assets/photos/user-portrait.jpg')
        },
        'post6': {
            id: 'post6',
            userId: '6',
            name: initialName,
            description: '一个热爱旅行的小猫猫',
            image: require('../assets/photos/user-background-1.png'),
            caption: '去了附近的公园, 玩得好开心, 还遇到了很多猫友!',
            userAvatar: require('../assets/photos/user-portrait.jpg')
        }
    };
}

