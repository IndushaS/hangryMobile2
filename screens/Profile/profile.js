import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import ProfilePhoto from '../../assets/images/profile.jpg'

const Profile = () => {
    return (
        <View style={styles.fillerStyles}>
            {/* Header section */}
            <View style={styles.header}> 
                <MaterialCommunityIcons name="account" size={200} color="#fe6a33" />
                <Text style={{ fontSize:28, paddingTop:0, fontWeight:"400" }}>Joshua Ghori</Text>
                <Text style={{ fontSize:18, paddingTop: 7, color: '#808080' }}>Scarborough, ON</Text>
            </View>

            {/* email info */}
            <View style={styles.line}></View>
            <View style={styles.card}>
                <AntDesign style={styles.icon} name="mail" size={35} color="#fe6a33" />
                <Text style={styles.text}>joshghori@gmail.com</Text>
            </View>

            {/* cell info */}
            <View style={styles.line}></View>
            <View style={styles.card}>
                <AntDesign style={styles.icon} name="phone" size={35} color="#fe6a33" />
                <Text style={styles.text}>416-659-4377</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    fillerStyles: {
        justifyContent: "center",
        alignItems: "center",

    },
    header:{
        height: 350,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 10,
        flexDirection: 'column',
    },
    card: {
        textAlign: 'left',
        width: '100%',
        height: '20%',
        flexDirection: "row",
        justifyContent: "space-between",
        justifyContent: "center",
        alignItems: "center",

    },
    line: {
        width: '64%',
        height: 1,
        backgroundColor: '#808080',
    },
    icon: {
        flex: 1,
        paddingLeft: 60,
        alignItems: "flex-start",
    },
    text: {
        flex: 5,
        fontSize: 18,
        alignItems: "center",
    }
    
});

export default Profile;