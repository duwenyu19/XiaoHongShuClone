import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updateProfileData } from '../../actions/profileActions';
import RNPickerSelect from 'react-native-picker-select';

export interface ProfileData {
  username: string;
  email: string;
  bio: string;
  gender: string;
  birthDate: string;
  location: string;
  job: string;
  education: string;
}

interface EditProfileProps {
  profileData: ProfileData;
  updateProfileData: (data: ProfileData) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ profileData, updateProfileData }) => {
  const [localProfileData, setLocalProfileData] = useState<ProfileData>(profileData);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setLocalProfileData({ ...localProfileData, [field]: value });
  };

  const handleUpdate = () => {
    updateProfileData(localProfileData);
    Alert.alert('Profile Updated', 'Your profile data has been updated.', [{ text: 'OK' }]);
  };

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'white',
      paddingRight: 30,
      backgroundColor: 'gray',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'white',
      paddingRight: 30,
      backgroundColor: 'gray',
    },
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>Name:</Text>
        <TextInput
          value={localProfileData.username}
          onChangeText={(value) => handleInputChange('username', value)}
          style={styles.input}
        />
        <Text>Email:</Text>
        <TextInput
          value={localProfileData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          style={styles.input}
        />
        <Text>Gender:</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select a gender',
            value: null,
          }}
          onValueChange={(value) => handleInputChange('gender', value.toString())}
          style={pickerSelectStyles}
          value={localProfileData.gender}
          items={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ]}
        />
        <Text>Bio:</Text>
        <TextInput
          value={localProfileData.bio}
          onChangeText={(value) => handleInputChange('bio', value)}
          style={styles.input}
        />
        <Text>Birth Date:</Text>
        <TextInput
          value={localProfileData.birthDate}
          onChangeText={(value) => handleInputChange('birthDate', value)}
          style={styles.input}
        />
        <Text>Location:</Text>
        <TextInput
          value={localProfileData.location}
          onChangeText={(value) => handleInputChange('location', value)}
          style={styles.input}
        />
        <Text>Job:</Text>
        <TextInput
          value={localProfileData.job}
          onChangeText={(value) => handleInputChange('job', value)}
          style={styles.input}
        />
        <Text>Education:</Text>
        <TextInput
          value={localProfileData.education}
          onChangeText={(value) => handleInputChange('education', value)}
          style={styles.input}
        />
        <Button title="Update Profile" onPress={handleUpdate} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    padding: 10,
  },
});

const mapStateToProps = (state: any) => {
  return {
    profileData: state.profile,
  };
};

const mapDispatchToProps = {
  updateProfileData,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
