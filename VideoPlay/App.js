import React, { useRef, UseState } from 'react';
import { StyleSheet, Text, View, TouchableOpaciy, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video} 
        style={styles.video} 
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4', 
        }}
        useNativeControls 
        resizeMode="contain" 
        isLooping 
        onPlaybackstatusUpdate={status => setstatus(() => status)}
/>
<View style={styles.buttons}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => video.current.playAsync()}
    >
      <Text style={styles.buttonText}>Play</Text>
    </TouchableOpacity>

    <TouchableOpaciy
      style={styles.button}
      onPress={() => video.currentpauseAsync()}
      >
        <Text style={styles.buttonText}>Pause</Text>
      </TouchableOpaciy>
</View>
<Text style={styles.status}>
  {status.isPlaying ? 'Reproduzindo...' : 'Pausado'}
</Text>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#0000',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});