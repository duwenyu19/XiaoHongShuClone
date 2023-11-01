import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { MeScreenNavigationProp } from '../utilities/types';
import MeTopTabNavigator from '../navigators/MeTopTabNavigator';
import StackButton from '../components/StackButton';
import RoundSquareButton from '../components/RoundSquareButton';
import UserContext from '../utilities/UserContext';
import femaleGenderIcon from '../assets/photos/female-icon.png';
import maleGenderIcon from '../assets/photos/male-icon.png';
import userPortrait from '../assets/photos/user-portrait.jpg';
import settingIcon from '../assets/photos/setting.png';
import backgroundImage from '../assets/photos/user-background-1.png';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/profileReducer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type MeProps = {
  navigation: MeScreenNavigationProp;
};

const Me: React.FC<MeProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { userCount, followersCount, dimensions } = useContext(UserContext);
  const styles = getStyles(dimensions);
  const isFocused = useIsFocused();

  const profileData = useSelector((state: RootState) => state.profile);
  const { username, bio, gender } = profileData;

  const [signature, setSignature] = useState(bio);
  const [profileName, setProfileName] = useState(username);

  useEffect(() => {
    if (isFocused) {
      setProfileName(username);
      setSignature(bio);
    }
  }, [isFocused, username, bio]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundContainer}>
        <View style={[styles.headerContainer, {paddingTop: insets.top}]}>
          <Image style={styles.profileImage} source={userPortrait} />
          <Text style={styles.profileName}>{profileName}</Text>
        </View>

        <TextInput
          style={styles.signatureInput}
          value={signature}
          onChangeText={(text) => setSignature(text)}
          placeholder="Click here to fill in the profile"
          placeholderTextColor="#FFFFFF"
        />

        {gender === 'Male' ? (
          <Image source={maleGenderIcon} style={styles.genderIcon} />
        ) : (
          <Image source={femaleGenderIcon} style={styles.genderIcon} />
        )}

        <View style={styles.statsContainer}>
          <StackButton number={userCount.toString()} label="Following" onPress={() => navigation.navigate('FollowingNavigator')} />
          <StackButton number={followersCount.toString()} label="Followers" onPress={() => navigation.navigate('FollowersNavigator')} />
          <StackButton number="0" label="Likes & Col" onPress={() => navigation.navigate('LikesAndCol')} />
          <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={[{ color: '#FFFFFF' }, { fontWeight: 'bold' }, { fontSize: 12 }]}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('Settings')}>
            <Image source={settingIcon} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <RoundSquareButton label="购物车" onPress={() => navigation.navigate('购物车')} />
          <RoundSquareButton label="创作灵感" onPress={() => navigation.navigate('创作灵感')} />
          <RoundSquareButton label="浏览记录" onPress={() => navigation.navigate('浏览记录')} />
        </View>

        <View style={styles.topTabContainer}>
          <MeTopTabNavigator />
        </View>
      </ImageBackground>
    </View>
  );
};

const getStyles = (dimensions: { width: number; height: number }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDEDED',
    },
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: dimensions.width * 0.05333,
    },
    profileImage: {
      width: dimensions.width * 0.16,
      height: dimensions.width * 0.16,
      borderRadius: dimensions.width * 0.08,
      marginRight: dimensions.width * 0.02666,
    },
    profileName: {
      fontSize: dimensions.width * 0.05333,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: dimensions.width * 0.02666,
    },
    settingIcon: {
      width: dimensions.width * 0.04266,
      height: dimensions.width * 0.04266,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: dimensions.width * 0.01333,
    },
    editProfileButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: dimensions.width * 0.00533,
      borderRadius: dimensions.width * 0.02666,
      borderColor: '#FFFFFF',
      marginRight: dimensions.width * 0.02666,
      marginLeft: dimensions.width * 0.01333,
      paddingVertical: dimensions.width * 0.01333,
      paddingHorizontal: dimensions.width * 0.01333,
    },
    settingButton: {
      width: dimensions.width * 0.112,
      height: dimensions.width * 0.08,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: dimensions.width * 0.00533,
      borderRadius: dimensions.width * 0.02666,
      borderColor: '#FFFFFF',
      marginRight: dimensions.width * 0.01333,
    },
    topTabContainer: {
      flex: 1,
      marginTop: dimensions.width * 0.02666,
    },
    signatureInput: {
      width: dimensions.width * 0.8,
      height: dimensions.width * 0.05333,
      borderColor: '#FFFFFF',
      color: '#FFFFFF',
      borderWidth: dimensions.width * 0.00266,
      paddingLeft: dimensions.width * 0.02666,
      marginLeft: dimensions.width * 0.04,
      marginRight: dimensions.width * 0.04,
    },
    signatureText: {
      color: '#FFFFFF',
      fontSize: dimensions.width * 0.04266,
      marginBottom: dimensions.width * 0.01333,
    },
    genderIcon: {
      width: dimensions.width * 0.06666,
      height: dimensions.width * 0.06666,
      resizeMode: 'contain',
      marginTop: dimensions.width * 0.02133,
      marginLeft: dimensions.width * 0.04,
      marginBottom: dimensions.width * 0.02133,
    },
  });
};


export default Me;
