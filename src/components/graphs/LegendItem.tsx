import { ThemedText } from "@/src/components/expo/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
    title: string;
    value: number;
    percent: string;
    color: string;
    onPress: () => void;
}

export default function LegendItem({
    title,
    value,
    percent,
    color,
    onPress,
}: Props) {
    return (
        <TouchableOpacity style={styles.legendItem} onPress={onPress}>
            <View style={styles.legendLeft}>
                <View style={[styles.colorBadge, { backgroundColor: color }]} />

                <ThemedText>{title}</ThemedText>
            </View>

            <ThemedText type="defaultSemiBold">
                R$ {value.toFixed(2)} ({percent}%)
            </ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    legendItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5EA",
    },
    legendLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    colorBadge: {
        width: 14,
        height: 14,
        borderRadius: 7,
    },
});