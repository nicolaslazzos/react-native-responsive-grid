import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

import { useGrid } from "./Provider";

export interface RowProps extends ViewProps {}

export const Row: React.FC<RowProps> = ({ style, children, ...props }) => {
	const { padding } = useGrid();

	return (
		<View {...props} style={[styles.row, { marginRight: -padding }, style]}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
});
