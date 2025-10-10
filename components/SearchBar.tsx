import { Image, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


interface Props {
    onPress?: () => void
    placeholder :string
    onChangeText?: (text: string) => void
    value?: string
}

const SearchBar = ({
    onPress,
    placeholder,
    value,
    onChangeText
} : Props) => {
  return (
    <View
        className='flex-row items-center px-5 py-2 rounded-full bg-dark-200'
    >
      <Image 
        source={icons.search}
        className='size-5'
        resizeMode='contain'
        tintColor="#ab8bff"
      />

      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#ab8bff"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar;