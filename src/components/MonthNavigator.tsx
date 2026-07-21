import { ThemedText } from "@/src/components/expo/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
    month: string;
    year: number;
    onPrev: () => void;
    onNext: () => void;
}

export default function MonthNavigator({
    month,
    year,
    onPrev,
    onNext,
}: Props) {
    return (
        <View style={styles.controlContainer}>
            <TouchableOpacity onPress={onPrev} style={styles.navButton}>
                <ThemedText type="subtitle">&lt;</ThemedText>
            </TouchableOpacity>

            <ThemedText type="subtitle" style={styles.monthTitle}>
                {month} {year}
            </ThemedText>

            <TouchableOpacity onPress={onNext} style={styles.navButton}>
                <ThemedText type="subtitle">&gt;</ThemedText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    controlContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },
    navButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    monthTitle: {
        minWidth: 120,
        textAlign: "center",
    },
});