import React from 'react'
import { View, Text ,TouchableOpacity,TextInput,Image,FlatList} from 'react-native'
import { useRouter } from 'expo-router'
import { icons,SIZES } from '../../../constants'
import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shelby!</Text>
        <Text style={styles.welcomeMessage}>Find your jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          
        </View>

      </View>

    </View>
  )
}

export default Welcome