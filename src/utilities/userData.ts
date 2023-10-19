type UserData = {
    id: string
    name: string
    description: string
    image: any
  }
  
export const usersData: Record<string,UserData> = {
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
      name: 'hhh',
      description: '程序员，技术博主...',
      image: require('../assets/photos/user-portrait-6.jpg')
    },
  }
  