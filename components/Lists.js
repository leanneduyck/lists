import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lists = ({ db, route, isConnected }) => {
  const { userID } = route.params;

  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState('');
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');

  let unsubLists;

  useEffect(() => {
    if (isConnected === true) {
      // unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubLists) unsubLists();
      unsubLists = null;

      const q = query(collection(db, 'lists'), where('uid', '==', userID));
      unsubLists = onSnapshot(q, (documentsSnapshot) => {
        let newLists = [];
        documentsSnapshot.forEach((doc) => {
          newLists.push({ id: doc.id, ...doc.data() });
        });
        cacheLists(newLists);
        setLists(newLists);
      });
    } else loadCachedLists();

    // Clean up code
    return () => {
      if (unsubLists) unsubLists();
    };
  }, [isConnected]);

  const loadCachedLists = async () => {
    const cachedLists = (await AsyncStorage.getItem('saved_lists')) || [];
    setLists(JSON.parse(cachedLists));
  };

  const cacheLists = async (listsToCache) => {
    try {
      await AsyncStorage.setItem('saved_lists', JSON.stringify(listsToCache));
    } catch (error) {
      console.log(error.message);
    }
  };

  const addList = async (newList) => {
    const newListRef = await addDoc(collection(db, 'lists'), newList);
    if (newListRef.id) {
      setLists([newList, ...lists]);
      Alert.alert(`The "${listName}" list has been added.`);
    } else {
      Alert.alert('Unable to add. Please try later');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listsContainer}
        data={lists}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>
              {item.name}: {item.items.join(', ')}
            </Text>
          </View>
        )}
      />
      {isConnected === true ? (
        <View style={styles.listForm}>
          <TextInput
            style={styles.listName}
            placeholder="List Name"
            value={listName}
            onChangeText={setListName}
          />
          <TextInput
            style={styles.item}
            placeholder="Item #1"
            value={item1}
            onChangeText={setItem1}
          />
          <TextInput
            style={styles.item}
            placeholder="Item #2"
            value={item2}
            onChangeText={setItem2}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              const newList = {
                uid: userID,
                name: listName,
                items: [item1, item2],
              };
              addList(newList);
            }}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#AAA',
    flex: 1,
    flexGrow: 1,
  },
  listForm: {
    flexBasis: 275,
    flex: 0,
    margin: 15,
    padding: 15,
    backgroundColor: '#CCC',
  },
  listName: {
    height: 50,
    padding: 15,
    fontWeight: '600',
    marginRight: 50,
    marginBottom: 15,
    borderColor: '#555',
    borderWidth: 2,
  },
  item: {
    height: 50,
    padding: 15,
    marginLeft: 50,
    marginBottom: 15,
    borderColor: '#555',
    borderWidth: 2,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#000',
    color: '#FFF',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
  },
  logoutButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#C00',
    padding: 10,
    zIndex: 1,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 10,
  },
});

export default Lists;
