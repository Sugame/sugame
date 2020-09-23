import React, {useState, useEffect} from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';

import MainContainer from '../components/Container'
import colors from '../constants/colors';


const BrowserScreen = props => {
  const [champion, setChampion] = useState(null)

  // riot api call
  useEffect(() => {
    async function fetchChampData() {
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json')
      const result = await response.json()
      const champ = result.data
      setChampion(champ)
    }
    fetchChampData();
  }, [])

  // for images 
  const champArray = []
  for (let key in champion) {
    champArray.push(key)
  }

  return(
    <MainContainer style={styles.browserContainer}>
      {/* <Text>Browser SCREEN</Text> */}
      <View style={styles.sectionContainer}>
        {champArray.map((prop) => {
          return (
            <View style={styles.champContainer} key={prop}>
              <Image resizeMode="contain" style={styles.champImg} source={{uri: `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${prop}.png`}}/>
              <Text style={styles.champText}>{champion[`${prop}`].name}</Text>
            </View>
          )
        })}
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  browserContainer: {
    flex: 0
  },
  sectionContainer: {
    // justifyContent: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  champContainer: {
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    padding: 2,
    justifyContent: 'center',
    backgroundColor: colors.primaryContent,
    borderRadius: 10
  },
  champImg: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    // borderRadius: 100
  },
  champText: {
    fontFamily: 'app-name',
    textTransform: 'uppercase',
    color: colors.background,
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center'
    // width: '50%'
  }
})

export default BrowserScreen