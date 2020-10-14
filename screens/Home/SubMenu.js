import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import fetchData from "../../fetchMenu";
import {
  getMenuError,
  getMenu,
  getMenuPending,
} from "../../store/reducers/menuReducer";

import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
} from "react-native";

//Components
import Touchable from "../../components/Touchable";
import RegularCard from "../../components/RegularCard";

//Controllers
import {
  DefaultText,
  HeaderText,
  SmallText,
} from "../../controllers/TextController";

class SubMenu extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { data, error, pending, navigation } = this.props;

    return (
      <div>
        <View>
          <View style={styles.banner}>
            <ImageBackground
              source={require("../../assets/images/deserts.jpeg")}
              style={styles.menuBg}
            >
              <View style={styles.overlay} />
              <View>
                <HeaderText style={{ color: "#fff" }}>Dessert</HeaderText>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.subMenu}>
            <RegularCard
              onPress={() => navigation.navigate("Menu")}
              image={require("../../assets/images/Mae.jpeg")}
              title={data}
              description={data}
            />
          </View>
        </View>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.3,
  },
  menuBg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 220,
  },
  subMenu: {
    padding: 15,
  },
  menuCard: {
    height: 150,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  menuText: {
    flex: 3,
    paddingLeft: 15,
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({
  error: getMenuError(state),
  products: getMenu(state),
  pending: getMenuPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMenu: fetchData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);

// const SubMenu = ({ navigation }) => {
//   return (
//     <View>
//       <View style={styles.banner}>
//         <ImageBackground
//           source={require("../../assets/images/deserts.jpeg")}
//           style={styles.menuBg}
//         >
//           <View style={styles.overlay} />
//           <View>
//             <HeaderText style={{ color: "#fff" }}>Dessert</HeaderText>
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.subMenu}>
//         <RegularCard
//           onPress={() => navigation.navigate("Menu")}
//           image={require("../../assets/images/Mae.jpeg")}
//           title="Mae's Bakery"
//           description='A Toronto based bakery specializing in pastries and baked foods combining French baked goods with an Asian Twist.'
//         />
//       </View>
//     </View>
//   );
// };
