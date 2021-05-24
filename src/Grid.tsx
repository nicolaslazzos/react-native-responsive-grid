import * as React from "react";
import { View, ViewStyle, StyleProp, ViewProps } from "react-native";

import { Col } from "./Col";
import { Row } from "./Row";
import { SizesProps } from "./Provider";

export interface GridProps extends SizesProps, ViewProps {
	padding?: number;
	rowStyle?: StyleProp<ViewStyle>;
	colStyle?: StyleProp<ViewStyle>;
}

export const Grid: React.FC<GridProps> = ({ children, padding, style, rowStyle, colStyle, ...props }) => {
	return (
		<View {...props} style={style}>
			<Row style={[rowStyle, !isNaN(padding) && { marginRight: -padding }]}>
				{React.Children.map(children, (child) => (
					<Col {...props} style={[colStyle, !isNaN(padding) && { paddingRight: padding, paddingBottom: padding }]}>
						{child}
					</Col>
				))}
			</Row>
		</View>
	);
};
