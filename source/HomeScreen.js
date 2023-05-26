import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {storeUserData} from './redux/reducerSlice/userInfoSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {userData} = useSelector(state => state.userInfoSlice);

  const removeValue = async id => {
    navigation.navigate('Details', {id: id});
  };

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=1&per_page=5')
      .then(function (response) {
        dispatch(storeUserData(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.mainContainerText}>User List</Text>
      </View>
      <FlatList
        data={userData}
        renderItem={item => {
          //   console.log('item', item?.item);
          return (
            <TouchableOpacity
              style={styles.renderItemContainer}
              onPress={() => removeValue(item?.item?.id)}>
              <Text style={styles.renderItemText}>
                {item?.item?.first_name} {item?.item?.last_name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#a2e4f5',
    borderColor: '#fab4ee',
  },
  mainContainerText: {fontSize: 50},
  renderItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#fab4ee',
    borderColor: '#bdfff8',
  },
  renderItemText: {fontSize: 20},
});

export default HomeScreen;
