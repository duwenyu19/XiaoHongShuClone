import React, { useContext, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { usersDataPostFollowing } from '../utilities/usersDataPostFollowing';
import { usersDataPostExplore } from '../utilities/usersDataPostExplore';
import { usersDataPostMe } from '../utilities/usersDataPostMe';
import { HomeScreenNavigationProp, MeScreenNavigationProp, UserPost } from '../utilities/types';
import { connect } from 'react-redux';
import { RootState } from '../reducers/profileReducer';
import UserContext from '../utilities/UserContext';

interface Props {
    data: Record<string, UserPost>;
    source: 'explore' | 'following' | 'me';
    navigation: HomeScreenNavigationProp | MeScreenNavigationProp;
    username: string;
}

const UserPostThumbnail: React.FC<Props> = ({ data, navigation, source, username }) => {
    const { dimensions } = useContext(UserContext);
    const styles = getStyles(dimensions);
    const [numColumns, setNumColumns] = useState(dimensions.width > 600 ? 3 : 2);

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
                    <Text style={styles.userName}>{displayedName}</Text>
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

const getStyles = (dimensions: { width: any; height: number; }) => {
    return StyleSheet.create({
        postContainer: {
            margin: dimensions.width * 0.0133,
            flex: 1 / 2,
            padding: dimensions.width * 0.0133,
            borderColor: '#000000',
            borderWidth: dimensions.width * 0.00267,
        },
        userName: {
            fontSize: dimensions.width * 0.043,
            fontWeight: 'bold',
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: dimensions.width * 0.0267,
        },
        avatar: {
            width: dimensions.width * 0.1067,
            height: dimensions.width * 0.1067,
            borderRadius: dimensions.width * 0.0533,
            marginRight: dimensions.width * 0.0267,
        },
        postImage: {
            width: "100%",
            height: dimensions.width * 0.66666,
            resizeMode: 'cover',
            marginBottom: dimensions.width * 0.0133,
            borderColor: '#000000',
            borderWidth: dimensions.width * 0.00267,
        },
        caption: {
            fontSize: dimensions.width * 0.04,
            margin: dimensions.width * 0.0133,
        },
    });
};

const mapStateToProps = (state: RootState) => ({
    username: state.profile.username,
});

export default connect(mapStateToProps)(UserPostThumbnail);
