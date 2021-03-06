import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  button: {
    paddingRight: 20
  },
})

const HeaderLeft = ({ navigation }) => (
  <FontIcon.Button
    name="bars"
    color="black"
    backgroundColor="transparent"
    onPress={() => {
      navigation.openDrawer()
    }}
    style={styles.button}
  />
)

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
}

HeaderLeft.defaultProps = {
  navigation: { openDrawer: () => null },
}

export default HeaderLeft
