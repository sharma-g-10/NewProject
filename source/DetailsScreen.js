import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const DetailsScreen = ({navigation, route}) => {
  const {userData} = useSelector(state => state.userInfoSlice);
  const idVar = route?.params?.id;
  const FilteredData = userData.filter(value => {
    return value?.id === idVar;
  });

  const removeValue = async () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={removeValue}>
          <Text style={styles.headerText}>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileDetailsText}>Profile Details</Text>
        </View>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          First Name : {FilteredData[0].first_name}
        </Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          Last Name : {FilteredData[0].last_name}
        </Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>email : {FilteredData[0].email}</Text>
      </View>
      <View style={[styles.labelContainer, {flexDirection: 'row'}]}>
        <Text style={styles.labelText}>Avatar :</Text>
        <Image source={{uri: FilteredData[0]?.avatar}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#ffe3b3', height: '100%'},
  innerContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7edc6',
  },
  headerText: {fontSize: 15, fontWeight: '500', color: '#567001'},
  profileDetailsContainer: {marginLeft: 50},
  profileDetailsText: {fontSize: 20, fontWeight: '700', color: 'black'},
  labelContainer: {marginLeft: 15, marginTop: 20},
  labelText: {fontSize: 20, fontWeight: '700', color: 'black'},
  image: {height: 200, width: 200, marginLeft: 50},
});

export default DetailsScreen;
