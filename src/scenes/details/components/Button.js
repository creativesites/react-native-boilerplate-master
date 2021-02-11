import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { theme } from '../constants/theme';

class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      color,
      startColor,
      endColor,
      end,
      start,
      locations,
      shadow,
      children,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style,
    ];

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          activeOpacity={opacity}
          {...props}
        >
          <LinearGradient
            start={start}
            end={end}
            locations={locations}
            style={buttonStyles}
            colors={[startColor, endColor]}
          >
            {children}
          </LinearGradient>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  startColor: "#0AC4BA",
  endColor: "#2BDA8E",
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: '#fff',
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    height: 16 * 3,
    justifyContent: 'center',
    marginVertical: 25 / 3,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: { backgroundColor: "#F3534A", },
  primary: { backgroundColor: "#0AC4BA", },
  secondary: { backgroundColor:"#2BDA8E", },
  tertiary: { backgroundColor: "#FFE358", },
  black: { backgroundColor: '#000', },
  white: { backgroundColor: '#fff', },
  gray: { backgroundColor: "#9DA3B4", },
  gray2: { backgroundColor: "#C5CCD6", },
  gray3: { backgroundColor: "#9DA3B4", },
  gray4: { backgroundColor: "#C5CCD6", },
});