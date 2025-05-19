import React, { usestate, useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLoop] = useState(false);
  async function loadSound () {
    console.log('Carregando Som ... ');
    try {
      const { sound } = await Audio. Sound. createAsync(
        require('./assets/560446music.mp3')

      );
      setSound(sound);
      console.log('Som Carregado');
    } catch (error) {
      console.error('Erro ao carregar o som: ', error);
    }
  }

  async function playSound() {
    if (sound) {
      console.lof('Tocando Som...');
      try {
        await sound.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao tocar o som: ', error);
      }
    }
  }
  async function pauseSound() {
    if (sound && isPlaying) {
      console.log('Pausando Som...');
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (error) {
        console.error('Erro ao pausar o som:', error);
      }
    }
  }
  async function unloadSound() {
    if (sound) {
      console.log('Descarregando Som...');
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
        console.log('Som Descarregado');
      } catch (error) {
        console.error('Erro ao descarregar o som:', error);
      }
    }
}
async function setLooping() {
  if (sound) {
    try {
      await sound.setIsLoopingAsync(!isLooping);
    } catch (error) {
      console.error('Erro ao definir o looping:', error);
    }
  }
}
