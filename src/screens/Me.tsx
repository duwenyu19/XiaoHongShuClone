import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'
import userPortrait from '../assets/photos/user-portrait.jpg'
import settingIcon from '../assets/photos/setting.png'

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
        <TouchableOpacity style={styles.statButton} onPress={() => navigation.navigate('Following')}>
          <Text>1</Text>
          <Text>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statButton} onPress={() => navigation.navigate('Followers')}>
          <Text>3</Text>
          <Text>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statButton} onPress={() => navigation.navigate('Likes')}>
          <Text>0</Text>
          <Text>Likes</Text>
        </TouchableOpacity>
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
          <Text>UserCart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton} onPress={() => navigation.navigate('Browse')}>
          <Text>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton} onPress={() => navigation.navigate('History')}>
          <Text>History</Text>
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
  statButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  statText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    paddingVertical: 5,
    paddingHorizontal: 15,
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
