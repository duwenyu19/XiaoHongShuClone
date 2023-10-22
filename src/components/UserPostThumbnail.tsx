import React from 'react'
import { FlatList, Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import { usersDataFollowing } from '../utilities/usersDataFollowing'

type UserPost = {
    id: string
    userId: string
    image: ImageSourcePropType
    caption: string
    userAvatar: ImageSourcePropType
    name?: string
    description?: string
}

type UserData = {
    id: string
    name: string
    description: string
    image: ImageSourcePropType
}

interface Props {
    data: Record<string, UserPost>
    usersData?: Record<string, UserData>
}

const UserPostThumbnail: React.FC<Props> = ({ data }) => {
    const renderItem = ({ item }: { item: UserPost }) => {
        let userName
    
        if (item.name) {
            userName = item.name
        } else {
            userName = usersDataFollowing[item.userId]?.name || item.userId
        }
    
        return (
            <View style={styles.postContainer}>
                <View style={styles.header}>
                    <Image source={item.userAvatar} style={styles.avatar} />
                    <Text>{userName}</Text>
                </View>
                <Image source={item.image} style={styles.postImage} />
                <Text>{item.caption}</Text>
            </View>
        )
    }
    

    const dataArray = Object.values(data)

    return (
        <FlatList
            data={dataArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 20,
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
    },
})

export default UserPostThumbnail
