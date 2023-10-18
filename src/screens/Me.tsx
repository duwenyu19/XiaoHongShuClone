import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'
import StackButton from '../components/StackButton'
import RoundSqaureButton from '../components/RoundSquareButton'
import userPortrait from '../assets/photos/user-portrait.jpg'
import settingIcon from '../assets/photos/setting.png'
import backgroundImage from '../assets/photos/user-background-1.png'

type MeProps = {
  navigation: MeScreenNavigationProp;
}

const Me: React.FC<MeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundContainer}>
        
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={userPortrait} />
          <Text style={styles.profileName}>Money</Text>
        </View>

        <View style={styles.statsContainer}>
          <StackButton number="1" label="Following" onPress={() => navigation.navigate('Following')} />
          <StackButton number="100000000" label="Followers" onPress={() => navigation.navigate('Followers')} />
          <StackButton number="0" label="Likes & Col" onPress={() => navigation.navigate('Likes')} />
          <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={{color: '#FFFFFF'}}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('Settings')}>
            <Image 
              source={settingIcon} 
              style={styles.settingIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <RoundSqaureButton label="购物车" onPress={() => navigation.navigate('购物车')} />
          <RoundSqaureButton label="创作灵感" onPress={() => navigation.navigate('创作灵感')} />
          <RoundSqaureButton label="浏览记录" onPress={() => navigation.navigate('浏览记录')} />
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingIcon: {
    width:16,
    height: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  editProfileButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    marginRight: 10,
    marginLeft: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  settingButton: {
    width: 42,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    marginRight: 5,
  }
});

export default Me
