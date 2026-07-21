import { Alert, View } from "react-native";
import LegendItem from "./LegendItem";
import { GRAPH_COLORS } from "./colors";

interface GraphicItem {
    id: number;
    title: string;
    value: number;
}

interface Props {
    data: GraphicItem[];
}

export default function LegendList({ data }: Props) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    function showDetails(title: string, value: number) {
        const percent =
            total > 0 ? ((value / total) * 100).toFixed(1) : "0";

        Alert.alert(
            "Detalhes da Categoria",
            `${title}: R$ ${value.toFixed(2)} (${percent}%)`
        );
    }

    return (
        <View>
            {data.map((item, index) => (
                <LegendItem
                    key={item.id}
                    title={item.title}
                    value={item.value}
                    percent={((item.value / total) * 100).toFixed(1)}
                    color={GRAPH_COLORS[index % GRAPH_COLORS.length]}
                    onPress={() => showDetails(item.title, item.value)}
                />
            ))}
        </View>
    );
}