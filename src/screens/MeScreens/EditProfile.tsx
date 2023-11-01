import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updateProfileData } from '../../actions/profileActions';
import RNPickerSelect from 'react-native-picker-select';
import UserContext from '../../utilities/UserContext';

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
  const { dimensions } = useContext(UserContext);
  const styles = getStyles(dimensions);
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
      fontSize: dimensions.width * 0.04266,
      paddingVertical: dimensions.width * 0.032,
      paddingHorizontal: dimensions.width * 0.02666,
      borderWidth: dimensions.width * 0.00266,
      borderColor: 'gray',
      borderRadius: dimensions.width * 0.01066,
      color: 'white',
      paddingRight: dimensions.width * 0.08,
      backgroundColor: 'gray',
    },
    inputAndroid: {
      fontSize: dimensions.width * 0.04266,
      paddingHorizontal: dimensions.width * 0.02666,
      paddingVertical: dimensions.width * 0.02133,
      borderWidth: dimensions.width * 0.00133,
      borderColor: 'gray',
      borderRadius: dimensions.width * 0.02133,
      color: 'white',
      paddingRight: dimensions.width * 0.08,
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

const getStyles = (dimensions: { width: number; height: number }) => {
  return StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: dimensions.width * 0.0266,
      justifyContent: 'center',
    },
    input: {
      height: dimensions.width * 0.10666,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: dimensions.width * 0.01333,
      padding: dimensions.width * 0.0266,
    },
  });
};

const mapStateToProps = (state: any) => {
  return {
    profileData: state.profile,
  };
};

const mapDispatchToProps = {
  updateProfileData,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
