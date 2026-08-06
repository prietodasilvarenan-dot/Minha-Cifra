import { ThemedText } from "@/src/components/expo/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  prevMonth: string;
  month: string;
  nextMonth: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function MonthNavigator({
  prevMonth,
  month,
  nextMonth,
  year,
  onPrev,
  onNext,
}: Props) {
  return (
    <View>
      <View style={styles.controlContainer}>
        <ThemedText type="subtitle">{year}</ThemedText>
      </View>

      <View style={styles.controlContainer}>
        <TouchableOpacity onPress={onPrev} style={styles.navButton}>
          <ThemedText type="subtitle">{prevMonth}</ThemedText>
        </TouchableOpacity>

        <ThemedText type="title" style={styles.monthTitle}>
          {month}
        </ThemedText>

        <TouchableOpacity onPress={onNext} style={styles.navButton}>
          <ThemedText type="subtitle">{nextMonth}</ThemedText>
        </TouchableOpacity>
      </View>
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
