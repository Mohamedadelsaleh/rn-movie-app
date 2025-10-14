import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from '@/constants/images';

const TrendingCard = ({
    movie,
    index
} : TrendingCardProps) => {
  return (
    <Link
        href={`/movies/${movie.movie_id}`}
        asChild
    >
        <TouchableOpacity
            className='relative w-32 pl-5'
        >
            <Image 
                source={{ uri: movie.poster_url}}
                className='w-32 h-48 rounded-lg'
                resizeMode='cover'
            />
            
            <View
                className='absolute px-2 py-1 rounded-full -left-3.5 bottom-9'
            >
                <MaskedView
                    maskElement={
                        <Text
                            className='text-6xl font-bold text-white'
                        >
                            {index + 1}
                        </Text>
                    }
                >
                    <Image 
                        source={images.rankingGradient}
                        className='size-14'
                        resizeMode='cover'
                    />
                </MaskedView>
            </View>
            
            <Text
                className='mt-2 text-sm font-bold text-light-200'
                numberOfLines={2}
            >
                {movie.title}
            </Text>
        </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard