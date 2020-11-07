import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DefaultText, SmallText } from "../controllers/TextController";

const CardNoImage = ({ title, description, price }) => {
    return(
        <TouchableOpacity>
            <View style={styles.menuCard}>
                <View style={styles.menuText}>
                    <DefaultText style={styles.title}>{title}</DefaultText>
                    <SmallText style={styles.desc}>{description}</SmallText>
                    <DefaultText style={styles.price}>{ price ? `$${price}` : "" }</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuCard: {
        marginVertical: 12,
        height: 150,
        width: "100%",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    menuText: {
        flex: 3,
        paddingLeft: 15, 
        justifyContent: "space-around",
    },
    title: {
        fontSize: 18,
        paddingBottom: 10,
        color: '#000'
    },
    desc: {
        color: '#808080'
    },
    price: {
    }
});

export default CardNoImage;