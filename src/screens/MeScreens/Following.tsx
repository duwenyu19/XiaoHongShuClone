import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { usersDataFollowing } from '../../utilities/usersDataFollowing';
import { FollowingScreenNavigationProp } from '../../utilities/types';

type FollowingProps = {
  navigation: FollowingScreenNavigationProp;
}

const Following: React.FC<FollowingProps> = ({navigation}) => {
    
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(Object.values(usersDataFollowing));

    useEffect(() => {
        if (searchText.trim() === '') {
            setFilteredUsers(Object.values(usersDataFollowing));
        } else {
            const filtered = Object.values(usersDataFollowing).filter(user =>
                user.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }, [searchText]);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
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
                        onPress={() => navigation.navigate('UserProfileGeneral', { user: item })}
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
    );
};

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
});

export default Following;
