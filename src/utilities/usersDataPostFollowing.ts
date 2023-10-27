import { UserPost } from './types';

export const usersDataPostFollowing: Record<string, UserPost> = {
    'post1': {
        id: 'post1',
        userId: '1',
        name: 'Symba',
        description: '世界上最可爱的狗狗，一只来自加州的金毛',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '今天Money又让我帮她舔毛, 还偷吃我的饭! 生气><',
        userAvatar: require('../assets/photos/user-portrait-3.jpg')
    },
    'post2': {
        id: 'post2',
        userId: '2',
        name: 'dwy',
        description: '金毛的爸爸',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '爱我的金毛狗狗！',
        userAvatar: require('../assets/photos/user-portrait-2.jpg')
    },
    'post3': {
        id: 'post3',
        userId: '3',
        name: 'Bear',
        description: 'Symba最好的朋友, 我说的',
        image: require('../assets/photos/user-background-2.jpg'),
        caption: '与Bear度过的愉快时光',
        userAvatar: require('../assets/photos/user-portrait-4.jpg')
    },
    'post4': {
        id: 'post4',
        userId: '4',
        name: 'BHC',
        description: '一杯正常的冰红茶',
        image: require('../assets/photos/user-background-1.png'),
        caption: '今天的冰红茶特别好喝！',
        userAvatar: require('../assets/photos/user-portrait-5.jpg')
    },
    'post5': {
        id: 'post5',
        userId: '5',
        name: 'HHHD',
        description: '程序员，技术博主...',
        image: require('../assets/photos/user-background-1.png'),
        caption: '刚完成的新项目真的很棒！',
        userAvatar: require('../assets/photos/user-portrait-6.jpg')
    },
    'post6': {
        id: 'post6',
        userId: '6',
        name: 'AliceWang',
        description: '前端开发工程师,热爱摄影与旅行',
        image: require('../assets/photos/user-background-1.png'),
        caption: '最近的旅行经验真的很棒！',
        userAvatar: require('../assets/photos/user-portrait-7.jpg')
    }
};
