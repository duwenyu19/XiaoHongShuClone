import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { usersDataFollowing } from '../../utilities/usersDataFollowing';
import { FollowingScreenNavigationProp } from '../../utilities/types';
import UserContext from '../../utilities/UserContext';

type FollowingProps = {
  navigation: FollowingScreenNavigationProp;
}

const Following: React.FC<FollowingProps> = ({navigation}) => {
    const { dimensions } = useContext(UserContext);
    const styles = getStyles(dimensions);
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

const getStyles = (dimensions: { width: number; height: number }) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#222',
        },
        searchBar: {
            padding: dimensions.width * 0.026666,
        },
        searchInput: {
            backgroundColor: '#444',
            borderRadius: dimensions.width * 0.013333,
            padding: dimensions.width * 0.013333,
            color: 'white',
        },
        userCard: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: dimensions.width * 0.026666,
        },
        userImage: {
            width: dimensions.width * 0.13333,
            height: dimensions.width * 0.13333,
            borderRadius: dimensions.width * 0.07,
        },
        userInfo: {
            marginLeft: dimensions.width * 0.02666,
        },
        userName: {
            color: 'white',
            fontSize: dimensions.width * 0.048,
        },
        userDescription: {
            color: 'gray',
            fontSize: dimensions.width * 0.03921,
        },
    });
};

export default Following;
