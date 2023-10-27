import { ImageSourcePropType } from 'react-native';

export type UserDataFollowers = {
    id: string;
    name: string;
    description: string;
    image: ImageSourcePropType;
};

export const usersDataFollowers: Record<string, UserDataFollowers> = {
    '1': {
      id: '1',
      name: 'LunaXu',
      description: '瑜伽教练，追求身心和谐的生活',
      image: require('../assets/photos/user-portrait-3.jpg')
    },
    '2': {
      id: '2',
      name: 'MiloChen',
      description: '旅行博主，走过五大洲的冒险者',
      image: require('../assets/photos/user-portrait-4.jpg')
    },
    '3': {
      id: '3',
      name: 'NancyZhou',
      description: '美食家，专注于分享世界各地的美食',
      image: require('../assets/photos/user-portrait-5.jpg')
    },
    '4': {
      id: '4',
      name: 'OliverWu',
      description: '数字画家，擅长用数字工具创作艺术',
      image: require('../assets/photos/user-portrait-6.jpg')
    },
    '5': {
      id: '5',
      name: 'PennyLi',
      description: '音乐制作人，追求声音的完美和魅力',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
    '6': {
      id: '6',
      name: 'QuincyYang',
      description: '摄影师，善于捕捉生活中的瞬间美好',
      image: require('../assets/photos/user-portrait-2.jpg')
    },
    '7': {
      id: '7',
      name: 'RitaZhang',
      description: '时尚博主，分享每日的搭配与穿搭',
      image: require('../assets/photos/user-portrait-3.jpg')
    },
    '8': {
      id: '8',
      name: 'SteveWang',
      description: '游戏设计师，致力于创造沉浸式体验',
      image: require('../assets/photos/user-portrait-5.jpg')
    },
    '9': {
      id: '9',
      name: 'TiffanyLu',
      description: '插画家，画出生活中的色彩与乐趣',
      image: require('../assets/photos/user-portrait-4.jpg')
    },
    '10': {
      id: '10',
      name: 'UrsulaMao',
      description: '宠物训练师，和动物们的沟通专家',
      image: require('../assets/photos/user-portrait-6.jpg')
    },
    '11': {
      id: '11',
      name: 'VictorLin',
      description: '舞者，用身体讲述动人的故事',
      image: require('../assets/photos/user-portrait-7.jpg')
    },
};
