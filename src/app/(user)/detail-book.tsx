import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import { AntDesign, EvilIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router'
import { images } from '@/constants'
import StarRating from '@/components/StarRating'
import { formatCurrencyVND } from '@/utils/formatCurrency'
import CustomButton from '@/components/CustomButton'
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { IBook, IComment } from '@/types/book'
import { getOneDocument, IQueryOptions, queryDocuments } from '@/firebase/api'
import { EQueryOperator } from '@/firebase/type'
import { useAppSelector } from '@/redux'
import { LoadingAnimation } from '@/components/LoadingAnimation'

const CommentCard = ({
  username,
  rating,
  comment,
}: {
  username: string
  rating: number
  comment: string
}) => {
  return (
    <View className="flex flex-row gap-2 border-b pb-2 border-b-[#E5E7EB] mt-1">
      <Image
        source={images.logoApp}
        className="w-full max-w-[40px] h-[40px] rounded-full"
        resizeMode="contain"
      />
      <View>
        <Text className="font-semibold mb-0.5">{username}</Text>
        <StarRating ratingValue={rating} disabled={true} size={12} />
        <Text className="mt-0.5">{comment}</Text>
      </View>
    </View>
  )
}

export default function DetailBook() {
  const [activeHeart, setActiveHeart] = React.useState(false)
  const [showALL, setShowAll] = useState(false)

  const playbackState = usePlaybackState()
  const progress = useProgress()

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    setupPlayer()
    return () => {
      TrackPlayer.reset()
    }
  }, [])

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer()
    await TrackPlayer.add({
      id: 'trackId',
      url: item.audio,
      title: 'Track Title',
      artist: 'Track Artist',
    })

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [Capability.Play, Capability.Pause, Capability.SeekTo],
      compactCapabilities: [Capability.Play, Capability.Pause],
    })
  }

  const togglePlayPause = async () => {
    if (playbackState === State.Playing) {
      await TrackPlayer.pause()
      setIsPlaying(false)
    } else {
      await TrackPlayer.play()
      setIsPlaying(true)
    }
  }

  const onSliderValueChange = async (value: number) => {
    await TrackPlayer.seekTo(value)
  }

  const params = useLocalSearchParams<{ bookId: string }>()
  const { bookId } = params
  const [listComment, setListComment] = useState<IComment[]>([])
  const [book, setBook] = useState<IBook | null>(null)
  const [isCommented, setIsCommented] = useState(false)

  useFocusEffect(
    useCallback(() => {
      const fetchBookDetail = async () => {
        const data = await getOneDocument<IBook>('book-radio', bookId!)
        setBook(data)
      }
      const fetchAllComment = async () => {
        const queryOptions: IQueryOptions = {
          property: 'bookId',
          queryOperator: EQueryOperator.EQUAL,
          value: bookId,
        }

        const list: IComment[] = await queryDocuments('comments', queryOptions)

        const isCheck = list.some((comment) => comment.userId === user.uid)
        setIsCommented(isCheck)
        setListComment(list)
      }

      fetchBookDetail()
      fetchAllComment()
    }, [bookId, user.uid]),
  )

  return (
    <SafeAreaView className="bg-white h-full relative flex-1">
      <View className="mx-4 flex-1">
        <HeaderComponent
          title="Thông tin sách"
          iconLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="left" size={24} color="#1F2937" />
            </TouchableOpacity>
          }
          iconRight={
            <TouchableOpacity onPress={() => setActiveHeart(!activeHeart)}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={24}
                color={activeHeart ? 'red' : '#1F2937'}
              />
            </TouchableOpacity>
          }
        />
        {book ? (
          <>
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
              <View className="bg-[#EE4F1C1A] h-[346px] p-2 rounded-[20px] mt-[100px] relative items-center flex flex-col">
                <Image
                  source={{ uri: book.thumbnail }}
                  className="w-[176px] h-[250px] top-[-80px] rounded-[20px]"
                />
                <Text className="text-center top-[-70px] text-xl font-semibold text-[#EE4F1C] max-w-[70%]">
                  {book.name}
                </Text>
                <Text className="text-center top-[-65px]">{book.author}</Text>
                <View className="flex flex-row justify-between top-[-50px]">
                  <View className="flex flex-col items-center">
                    <View className="flex flex-row items-center">
                      <Text className="text-xl font-semibold ml-1">{book.rating || 0}</Text>
                      <MaterialIcons name="star-rate" size={16} color="#EE4F1C" />
                    </View>
                    <Text className="text-xs">Đánh giá</Text>
                  </View>
                  <View className="flex flex-col items-center mx-12">
                    <Text className="text-xl font-semibold ml-1">{book.numberChapter}</Text>
                    <Text className="text-xs">Chương</Text>
                  </View>
                  <View className="flex flex-col items-center">
                    <Text className="text-xl font-semibold ml-1">{book.numberPage}</Text>
                    <Text className="text-xs">Trang</Text>
                  </View>
                </View>
              </View>
              <View className="flex-row flex gap-2 items-center h-[48px] bg-[#EE4F1C1A] mt-4 rounded-[16px] justify-center px-[12px]">
                <TouchableOpacity onPress={togglePlayPause}>
                  {isPlaying ? (
                    <AntDesign name="pausecircle" size={24} color="#EE4F1C" />
                  ) : (
                    <AntDesign name="play" size={24} color="#EE4F1C" />
                  )}
                </TouchableOpacity>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={progress.duration}
                  value={progress.position}
                  onValueChange={onSliderValueChange}
                  thumbTintColor="#fff"
                />
              </View>
              <Text className="font-semibold mt-4 mb-0.5 text-lg">Mô tả</Text>
              <View>
                <Text numberOfLines={!showALL ? 4 : undefined}>{book.description}</Text>
                <TouchableOpacity onPress={() => setShowAll(!showALL)}>
                  <Text className="text-[#1E40AF] mt-0.5">{!showALL ? 'Xem thêm' : 'Thu gọn'}</Text>
                </TouchableOpacity>
              </View>
              <Text className="font-semibold mt-4 mb-0.5 text-lg">Đánh giá cuốn sách này</Text>
              <View className="flex flex-row justify-between mt-2 items-center">
                <View className="flex flex-row gap-1">
                  {[1, 2, 3, 4, 5].map((elm) => (
                    <EvilIcons key={elm} name="star" size={24} color="#EE4F1C" />
                  ))}
                </View>
                <TouchableOpacity
                  className={`p-2 border rounded-[10px]  ${isCommented ? 'border-green-600' : 'border-[#EE4F1C]'}`}
                  onPress={() =>
                    router.push({ pathname: '/evaluate-screen', params: { bookId: book.id } })
                  }
                  disabled={isCommented}
                >
                  <Text className={`${isCommented ? 'text-green-600' : 'text-[#EE4F1C]'}`}>
                    {isCommented ? 'Đã đánh giá' : 'Viết đánh giá'}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text className="font-semibold mt-4 mb-0.5 text-lg">Đánh giá & nhận xét</Text>
              {listComment.map((item, index) => (
                <View key={index}>
                  <CommentCard username={item.userId} rating={item.rating} comment={item.comment} />
                </View>
              ))}
            </ScrollView>
            <View className="flex flex-row justify-between pt-2">
              <View>
                <Text className="text-[#6B7280]">Giá</Text>
                <Text className="font-semibold text-xl">{formatCurrencyVND(book.price)}</Text>
              </View>
              <CustomButton
                title={'Mua ngay'}
                containerStyle="px-2"
                onPress={() =>
                  router.push({ pathname: '/detail-buybook', params: { bookId: book.id } })
                }
              />
            </View>
          </>
        ) : (
          <LoadingAnimation />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
})
