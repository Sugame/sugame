import React, {useState, useEffect} from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

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
    // console.log(champion)
  }


  return(
    <MainContainer style={styles.browserContainer}>
      {/* <Text>Browser SCREEN</Text> */}
      <View style={styles.imageContainer}>
        {champArray.map((prop) => {
          return (
            <View>
              <Image resizeMode="contain" style={styles.champImg} source={{uri: `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${prop}.png`}}/>
              {/* <Text style={styles.champText}>{Object.keys(champion.name)}</Text> */}
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
  imageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  champImg: {
    width: 100,
    height: 100,
    marginTop: 10
  },
  champText: {
    fontFamily: 'app-name',
    textTransform: 'uppercase',
    color: colors.primaryContent,
    textAlign: 'center',
  }
})

export default BrowserScreen