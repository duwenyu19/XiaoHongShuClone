import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import { usersDataPostFollowing } from '../utilities/usersDataPostFollowing'
import { usersDataPostExplore } from '../utilities/usersDataPostExplore'
import { TouchableOpacity } from 'react-native'
import { HomeScreenNavigationProp } from '../utilities/types'

type UserPost = {
    id: string
    userId: string
    image: ImageSourcePropType
    caption: string
    userAvatar: ImageSourcePropType
    name?: string
    description?: string
}

interface Props {
    data: Record<string, UserPost>
    source: 'explore' | 'following'
    navigation: HomeScreenNavigationProp
}

const UserPostThumbnail: React.FC<Props> = ({ data, navigation, source }) => {
    const [numColumns, setNumColumns] = useState(2)

    const dataSource = source === 'explore' ? usersDataPostExplore : usersDataPostFollowing

    const renderItem = ({ item }: { item: UserPost }) => {
        let userName
    
        if (item.name) {
            userName = item.name
        } else {
            userName = dataSource[item.userId]?.name || item.userId
        }
    
        return (
            <TouchableOpacity 
                style={styles.postContainer}
                onPress={() => {
                    navigation.navigate('UserPostGeneral', { 
                        post: item, 
                        source: source
                    });
                }}
            >
                <View style={styles.header}>
                    <Image source={item.userAvatar} style={styles.avatar} />
                    <Text>{userName}</Text>
                </View>
                <Image source={item.image} style={styles.postImage} />
                <Text style={styles.caption}>{item.caption}</Text>
            </TouchableOpacity>
        )
    }
    

    const dataArray = Object.values(data)

    return (
        <FlatList
            key={numColumns}
            numColumns={numColumns}
            data={dataArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    postContainer: {
        margin: 5,
        flex: 1 / 2,
        padding: 5,
        borderColor: '#000000',
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    postImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginBottom: 5,
        borderColor: '#000000',
        borderWidth: 1,
    },
    caption: {
        fontSize: 15,
        margin: 5,
    }
})

export default UserPostThumbnail
