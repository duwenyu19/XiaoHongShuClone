import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'
import userPortrait from '../assets/photos/user-portrait.jpg'
import settingIcon from '../assets/photos/setting.png'
import StackButton from '../components/StackButton'

type MeProps = {
  navigation: MeScreenNavigationProp;
}

const Me: React.FC<MeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.profileImage} source={userPortrait} />
        <Text style={styles.profileName}>dwy</Text>
      </View>

      <View style={styles.statsContainer}>
        <StackButton number="1" label="Following" onPress={() => navigation.navigate('Following')} />
        <StackButton number="3" label="Followers" onPress={() => navigation.navigate('Followers')} />
        <StackButton number="0" label="Likes & Col" onPress={() => navigation.navigate('Likes')} />
        <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text>编辑资料</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('Setting')}>
          <Image 
            source={settingIcon} 
            style={styles.settingIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rectButton} onPress={() => navigation.navigate('UserCart')}>
          <Text>购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton} onPress={() => navigation.navigate('Browse')}>
          <Text>创作灵感</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton} onPress={() => navigation.navigate('History')}>
          <Text>浏览记录</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
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
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  rectButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 0,
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
