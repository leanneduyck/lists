import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import { getAuth, signInAnonymously } from 'firebase/auth';

const Welcome = ({ navigation }) => {
  const auth = getAuth();

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate('Lists', { userID: result.user.uid });
        Alert.alert('Signed in Successfully!');
      })
      .catch((error) => {
        Alert.alert('Unable to sign in, try later again.');
      });
  };

  return (
    <ImageBackground
      source={require('../assets/adaptive-icon.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.appTitle}>Lists</Text>
        <TouchableOpacity style={styles.startButton} onPress={signInUser}>
          <Text style={styles.startButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontWeight: '600',
    fontSize: 45,
    marginBottom: 100,
  },
  startButton: {
    backgroundColor: '#000',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFF',
  },
});

export default Welcome;
