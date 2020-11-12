import React from "react";
import { View, StyleSheet, ImageBackground, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Controllers
import { DefaultText, HeaderText } from "../../controllers/TextController";
import { overlay } from "../../constants/StyleConstants";
import { preventAutoHide } from "expo/build/launch/SplashScreen";

const PreviewSelection = ({ route }) => {
  return (
    <View style={styles.default}>
      <ImageBackground
        source={{ uri: route.params.image }}
        style={styles.bgImg}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.textContainer}
          start={[0, 0.8]}
        >
          <HeaderText style={{ color: "#fff" }}>{route.params.name}</HeaderText>
          {route.params.shortDescription !== "none" && (
            <DefaultText style={{ color: "#fff" }}>
              {route.params.shortDescription}
            </DefaultText>
          )}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  overlay,
  bgImg: {
    flex: 1,
    justifyContent: "flex-end",
    ...Platform.select({
      ios: {
        marginTop: 170,
        width: "95%",
        height: "95%",
        marginLeft: 18,
      },
      android: {
        width: "100%",
        height: "100%",
      },
    }),
  },
  textContainer: {
    height: 150,
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
});

export default PreviewSelection;
