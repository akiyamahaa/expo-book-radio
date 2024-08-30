import { PlayerControls } from '@/components/PlayerControls'
import { PlayerProgressBar } from '@/components/PlayerProgressbar'
import { colors, fontSize, screenPadding } from '@/constants/tokens'
import { useTrackPlayerFavorite } from '@/hooks/useTrackPlayerFavorite'
import { defaultStyles } from '@/styles'
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useActiveTrack } from 'react-native-track-player'
import { router } from 'expo-router'
import HeaderComponent from '@/components/HeaderComponent'
import React from 'react'

const MusicScreen = () => {
  const activeTrack = useActiveTrack()

  console.log(activeTrack, '----activeTrack----')

  return (
    <SafeAreaView style={{ flex: 1 }} colors={[colors.background]}>
      <HeaderComponent
        title="Sách nói"
        iconLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="left" size={24} color="#1F2937" />
          </TouchableOpacity>
        }
        styleHeader="mx-4"
      />
      <View style={styles.overlayContainer}>
        {/*<DismissPlayerSymbol />*/}

        <View style={{ flex: 1, marginTop: 70 }}>
          <View style={styles.artworkImageContainer}>
            <FastImage
              source={{
                uri: 'https://product.hstatic.net/200000512563/product/81gojoegvol._sl1500__b4f3412e7d094a4e8afd340aaaab9801_master.jpg',
                priority: FastImage.priority.high,
              }}
              resizeMode="cover"
              style={styles.artworkImage}
            />
          </View>

          <View style={{ flex: 1 }}>
            <View>
              <View style={{ height: 60 }}>
                {/* Track artist */}
                {activeTrack?.author && (
                  <Text numberOfLines={1} style={[{ marginTop: 6 }]}>
                    {activeTrack.author}
                  </Text>
                )}
              </View>
              <PlayerProgressBar style={{ marginTop: 32 }} />
              <PlayerControls style={{ marginTop: 40 }} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  overlayContainer: {
    ...defaultStyles.container,
    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '45%',
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 22,
    fontWeight: '700',
  },
})

export default MusicScreen
