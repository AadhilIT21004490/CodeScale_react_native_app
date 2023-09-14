import React, { useState } from 'react'
import { View, Text ,TouchableOpacity,TextInput,Image,FlatList} from 'react-native'
import { useRouter } from 'expo-router'
import { icons,SIZES } from '../../../constants'
import styles from './welcome.style'
import { JobTabs } from '../..'

const jobTypes = ["Full-time","Part-time","Contractor","Internship"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full=time');
  

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shelby!</Text>
        <Text style={styles.welcomeMessage}>Find your jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
          <TouchableOpacity style={styles.searchBtn}> 
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome