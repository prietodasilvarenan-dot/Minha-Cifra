import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
    value: number;
    maxValue: number;
    color: string;
    onPress: () => void;
}

export default function GraphBar({
    value,
    maxValue,
    color,
    onPress,
}: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.bar,
                {
                    backgroundColor: color,
                    height: maxValue > 0 ? (value / maxValue) * 140 : 0,
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    bar: {
        width: 35,
        borderRadius: 4,
    },
});