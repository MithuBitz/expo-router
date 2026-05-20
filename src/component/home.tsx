import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})