import React, { useState } from 'react'
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native'

type ProfileData = {
  username: string;
  email: string;
  bio: string;
  gender: string;
  birthDate: string;
  location: string;
  job: string;
  education: string;
}

const EditProfile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    username: '',
    email: '',
    bio: '',
    gender: '',
    birthDate: '',
    location: '',
    job: '',
    education: '',
  })

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  const handleUpdate = () => {
    Alert.alert('Profile Updated', 'Your profile data has been updated.', [{ text: 'OK' }])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={profileData.username}
          onChangeText={(text) => handleInputChange('username', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={profileData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Bio"
          value={profileData.bio}
          onChangeText={(text) => handleInputChange('bio', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Gender"
          value={profileData.gender}
          onChangeText={(text) => handleInputChange('gender', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Birth Date"
          value={profileData.birthDate}
          onChangeText={(text) => handleInputChange('birthDate', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Location"
          value={profileData.location}
          onChangeText={(text) => handleInputChange('location', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Job"
          value={profileData.job}
          onChangeText={(text) => handleInputChange('job', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Education"
          value={profileData.education}
          onChangeText={(text) => handleInputChange('education', text)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <View style={styles.separator}></View>
      </View>

      <Button title="Update Profile" onPress={handleUpdate} color="#FFFFFF"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
  },
})

export default EditProfile
