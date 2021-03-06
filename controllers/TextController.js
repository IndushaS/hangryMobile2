import React from "react";
import { Text, StyleSheet } from "react-native";

export const DefaultText = (props) => {
    return (
        <Text style={{ fontFamily: "roboto-regular",...styles.defaultText, ...props.style }}>{props.children}</Text>
    );
};

export const HeaderText = (props) => {
    return (
        <Text style={{ fontFamily: "roboto-bold", ...styles.header, ...props.style }}>{props.children}</Text>
    );
};

export const SmallText = (props) => {
    return (
        <Text style={{ fontFamily: "roboto-regular",...styles.small, ...props.style }}>{props.children}</Text>
    );
};

//Styles
const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16,
        color: "#404040"
    },
    header: {
        fontSize: 28,
    },
    small: {
        fontSize: 14,
    },
});