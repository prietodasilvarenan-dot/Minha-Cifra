import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  value: number;
  maxValue: number;
  color: string;
  onPress: () => void;
  maxHeight: number;
  barWidth: number;
}

export default function GraphBar({
  value,
  maxValue,
  color,
  onPress,
  maxHeight,
  barWidth,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.bar,
        {
          backgroundColor: color,
          width: barWidth,
          height: maxValue > 0 ? (value / maxValue) * maxHeight : 0,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 6,
  },
});
