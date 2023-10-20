import React, { useContext, useState } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'
import MeTopTabNavigator from '../navigators/MeTopTabNavigator'
import StackButton from '../components/StackButton'
import RoundSqaureButton from '../components/RoundSquareButton'
import UserContext from '../utilities/UserContext'
import genderIcon from '../assets/photos/female-icon.png'
import userPortrait from '../assets/photos/user-portrait.jpg'
import settingIcon from '../assets/photos/setting.png'
import backgroundImage from '../assets/photos/user-background-1.png'

type MeProps = {
  navigation: MeScreenNavigationProp
}

const Me: React.FC<MeProps> = ({navigation}) => {
  const { userCount, followersCount } = useContext(UserContext)

  const [signature, setSignature] = useState("Click here to fill in the profile")


  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundContainer}>
        
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={userPortrait} />
          <Text style={styles.profileName}>Money</Text>
        </View>

        <TextInput 
          style={styles.signatureInput}
          value={signature}
          onChangeText={text => setSignature(text)}
          placeholder="Click here to fill in the profile"
          placeholderTextColor="#FFFFFF"
        />

        <Image 
          source={genderIcon}
          style={styles.genderIcon}
        />

        <View style={styles.statsContainer}>
          <StackButton number={userCount.toString()} label="Following" onPress={() => navigation.navigate('MeFollowing')} />
          <StackButton number={followersCount.toString()} label="Followers" onPress={() => navigation.navigate('MeFollowers')} />
          <StackButton number="0" label="Likes & Col" onPress={() => navigation.navigate('LikesAndCol')} />
          <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={[{color: '#FFFFFF'},{fontWeight: 'bold'},{fontSize: 12}]}>Edit Profile</Text>
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

        <View style={styles.topTabContainer}>
          <MeTopTabNavigator/>
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
    justifyContent: 'center',
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
  },
  topTabContainer: {
    flex: 1,
    marginTop: 10,
  },
  signatureInput: {
    width: 300,
    height: 20,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    borderWidth: 1,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  signatureText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  genderIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginTop: 8,
    marginLeft: 35,
    marginBottom: 8,
  },
})

export default Me
