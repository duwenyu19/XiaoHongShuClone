import { ImageSourcePropType } from 'react-native';

type UserData = {
    id: string;
    name: string;
    description: string;
    image: ImageSourcePropType;
  };
  
export const usersDataFollowing: Record<string,UserData> = {
    '1': {
      id: '1',
      name: 'Symba',
      description: '世界上最可爱的狗狗，一只来自加州的金毛',
      image: require('../assets/photos/user-portrait-3.jpg')
    },
    '2': {
      id: '2',
      name: 'dwy',
      description: '金毛的爸爸',
      image: require('../assets/photos/user-portrait-2.jpg')
    },
    '3': {
      id: '3',
      name: 'Bear',
      description: 'Symba最好的朋友, 我说的',
      image: require('../assets/photos/user-portrait-4.jpg')
    },
    '4': {
      id: '4',
      name: 'bhc',
      description: '一杯正常的冰红茶',
      image: require('../assets/photos/user-portrait-5.jpg')
    },
    '5': {
      id: '5',
      name: 'hhhd',
      description: '程序员，技术博主...',
      image: require('../assets/photos/user-portrait-6.jpg')
    },
    '6': {
      id: '6',
      name: 'AliceWang',
      description: '前端开发工程师,热爱摄影与旅行',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
    '7': {
      id: '7',
      name: 'BobLiu',
      description: '全栈工程师,喜欢音乐与吉他',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
    '8': {
      id: '8',
      name: 'CharlieZhang',
      description: 'UI设计师,热爱画画和艺术',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
    '9': {
      id: '9',
      name: 'DaisyZhao',
      description: '数据分析师,喜欢研究和挖掘数据背后的故事',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
    '10': {
      id: '10',
      name: 'EdwardLi',
      description: '移动应用开发者,热衷于Android和iOS平台',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
    '11': {
      id: '11',
      name: 'FionaMa',
      description: '数字营销专家,擅长SEO和SEM策略',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
  };
  