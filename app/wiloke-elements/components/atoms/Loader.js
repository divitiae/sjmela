import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import * as Consts from "../../../constants/styleConstants";

export default class Loader extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
  static defaultProps = {
    size: "small",
    color: [
      Consts.colorSecondary,
      Consts.colorTertiary,
      Consts.colorQuanternary,
    ],
    height: 200,
  };

  _handleSize = () => {
    const { size } = this.props;
    switch (size) {
      case "small":
        return 30;
      case "medium":
        return 35;
      case "large":
        return 40;
      default:
        return size;
    }
  };

  render() {
    const { color, height, size } = this.props;
    return (
      <View style={[styles.loader, { height: height }]}>
        <ActivityIndicator size={size} animating={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
