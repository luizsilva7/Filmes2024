import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <Image
        resizeMode='cover'
        style={styles.imageBanner}
        source={{ uri: `https://image.tmdb.org/t/p/original/${route.params.imagem}` }}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircle" size={35} color="white" />
      </TouchableOpacity>

      {/* Star Rating */}
      <View style={styles.starsContainer}>
        <Stars
          disabled={true}
          default={route.params?.nota}
          count={10}
          half={true}
          starSize={25}
          fullStar={<Ionicons name='md-star' size={25} color='#E7A74e' />}
          emptyStar={<Ionicons name='md-star-outline' size={25} color='#E7A74e' />}
          halfStar={<Ionicons name='md-star-half' size={25} color='#E7A74e' />}
        />
      </View>

      {/* Description Text */}
      <Text style={styles.text}>{route.params?.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  imageBanner: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  starsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: '#E0E0E0',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
