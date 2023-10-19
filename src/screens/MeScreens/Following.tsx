import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { usersData } from '../../utilities/userData'
import { UserProfileGeneralNavigationProp } from '../../utilities/types'
import UserContext from '../../utilities/UserContext'

type UserData = {
    id: string
    name: string
    description: string
    image: any
}

type FollowingProps = {
  navigation: UserProfileGeneralNavigationProp
}

const Following: React.FC<FollowingProps> = ({navigation}) => {
    
    const { setUserCount } = useContext(UserContext)
    const [searchText, setSearchText] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(Object.values(usersData))

    useEffect(() => {
        setUserCount(Object.keys(usersData).length)
    }, [])

    useEffect(() => {
        if (searchText.trim() === '') {
            setFilteredUsers(Object.values(usersData));
        } else {
            const filtered = Object.values(usersData).filter(user =>
                user.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }, [searchText])

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="search"
                    placeholderTextColor="white"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            <FlatList 
                data={filteredUsers}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.userCard}
                        onPress={() => navigation.navigate('UserProfileGeneral', { userId: item.id })}
                    >
                        <Image
                            style={styles.userImage}
                            source={item.image}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text style={styles.userDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    searchBar: {
        padding: 10,
    },
    searchInput: {
        backgroundColor: '#444',
        borderRadius: 5,
        padding: 5,
        color: 'white',
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userInfo: {
        marginLeft: 10,
    },
    userName: {
        color: 'white',
        fontSize: 18,
    },
    userDescription: {
        color: 'gray',
        fontSize: 14,
    },
})

export default Following
