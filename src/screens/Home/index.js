import { StyleSheet, View, FlatList, Image, Text } from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardMovies';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { useState, useEffect } from 'react';

export default function App() {
  const [movies, setFilmes] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=31cc195e48f26b77ed83873c07e8ed1e&language=pt-BR');
        const data = await response.json();
        setFilmes(data.results);
      } catch (error) {
        console.log("Erro ao buscar filmes", error);
      }
    }

    buscarFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <SearchBar style={styles.searchBar} />
      <BannerMovies style={styles.banner} />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CardMovies
              titulo={item.title}
              imagem={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              nota={item.vote_average}
              texto={item.overview}
            />
          </View>
        )}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#1f1f1f',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  searchBar: {
    width: '90%',
    marginVertical: 15,
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  listContainer: {
    width: '90%',
    paddingBottom: 20,
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-around',
  },
  cardContainer: {
    flex: 1,
    margin: 5,
    maxWidth: 120, // Define a largura máxima dos cartões para melhor alinhamento
  },
});
