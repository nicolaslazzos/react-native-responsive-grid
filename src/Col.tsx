import * as React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

import { SizesProps, useGrid } from "./Provider";

export interface ColProps extends SizesProps {
	style?: StyleProp<ViewStyle>;
	fluid?: boolean;
}

const defaultProps: ColProps = {
	fluid: false,
};

export const Col: React.FC<ColProps> = ({ fluid, style, children, ...props }) => {
	let { size, sizes, padding } = useGrid();

	sizes = { ...sizes, ...props };

	const columns = sizes[size];

	const colStyles = StyleSheet.create({
		style: { width: colWidth * columns + "%", paddingRight: padding, paddingBottom: padding },
	});

	style = [fluid && styles.fluid, colStyles.style, style];

	return (
		<View {...props} style={style}>
			{children}
		</View>
	);
};

Col.defaultProps = defaultProps;

const colWidth = 100 / 12;

const styles = StyleSheet.create({
	fluid: { flexGrow: 1 },
});
