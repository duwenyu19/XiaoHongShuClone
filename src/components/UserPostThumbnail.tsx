import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { usersDataPostFollowing } from '../utilities/usersDataPostFollowing';
import { UserPost, usersDataPostExplore } from '../utilities/usersDataPostExplore';
import { usersDataPostMe } from '../utilities/usersDataPostMe';
import { HomeScreenNavigationProp, MeScreenNavigationProp } from '../utilities/types';
import { connect } from 'react-redux';
import { RootState } from '../reducers/profileReducer';

interface Props {
    data: Record<string, UserPost>;
    source: 'explore' | 'following' | 'me';
    navigation: HomeScreenNavigationProp | MeScreenNavigationProp;
    username: string;
}

const UserPostThumbnail: React.FC<Props> = ({ data, navigation, source, username }) => {
    const [numColumns, setNumColumns] = useState(2);

    let dataSource: Record<string, UserPost>;
    switch (source) {
        case 'explore':
            dataSource = usersDataPostExplore;
            break;
        case 'following':
            dataSource = usersDataPostFollowing;
            break;
        case 'me':
            dataSource = usersDataPostMe;
            break;
    }

    const renderItem = ({ item }: { item: UserPost }) => {
        let displayedName;

        if (source === 'me') {
            displayedName = username;
        } else if (item.name) {
            displayedName = item.name;
        } else {
            displayedName = dataSource[item.userId]?.name || item.userId;
        }

        return (
            <TouchableOpacity 
                style={styles.postContainer}
                onPress={() => {
                    if (source === 'me' && 'navigate' in navigation) {
                        (navigation as MeScreenNavigationProp).navigate('UserPostGeneral', { post: item, source: source });
                    } else if ('navigate' in navigation) {
                        (navigation as HomeScreenNavigationProp).navigate('UserPostGeneral', { post: item, source: source });
                    }
                }}
            >
                <View style={styles.header}>
                    <Image source={item.userAvatar} style={styles.avatar} />
                    <Text>{displayedName}</Text>
                </View>
                <Image source={item.image} style={styles.postImage} />
                <Text style={styles.caption}>{item.caption}</Text>
            </TouchableOpacity>
        );
    };

    const dataArray = Object.values(data);

    return (
        <FlatList
            key={numColumns}
            numColumns={numColumns}
            data={dataArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

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
    },
});

const mapStateToProps = (state: RootState) => ({
    username: state.profile.username,
});

export default connect(mapStateToProps)(UserPostThumbnail);
