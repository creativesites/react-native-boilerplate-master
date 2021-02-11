import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/lg.png'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/lg.png'),
  logo_lg: require('../../assets/images/lg.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
