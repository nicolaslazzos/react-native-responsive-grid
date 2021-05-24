import * as React from "react";
import { View, StyleSheet, Platform, useWindowDimensions } from "react-native";

export type OrientationType = "portrait" | "landscape";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export interface SizesProps {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export interface LayoutProps {
	size: SizeType;
}

export interface GridContextProps {
	size: SizeType;
	sizes: SizesProps;
	padding: number;
}

const GridContext = React.createContext<Partial<GridContextProps>>({ size: Platform.OS == "web" ? "lg" : "sm" });

export const useGrid = () => React.useContext(GridContext);

export interface GridProviderProps {
	padding?: number;
	breakpoints?: SizesProps;
	sizes?: SizesProps;
	showBreakpoints?: boolean;
	breakpointsColor?: string;
	children?: React.ReactNode;
}

export const useWindowResize = (breakpoints: SizesProps) => {
	const { width } = useWindowDimensions();

	const getSize = () => {
		if (width < breakpoints["xs"]) {
			return "xs";
		} else if (width >= breakpoints["xs"] && width < breakpoints["sm"]) {
			return "sm";
		} else if (width >= breakpoints["sm"] && width < breakpoints["md"]) {
			return "md";
		} else if (width >= breakpoints["md"] && width < breakpoints["lg"]) {
			return "lg";
		} else {
			return "xl";
		}
	};

	const size: SizeType = getSize();

	return size;
};

const defaultProps: GridProviderProps = {
	breakpoints: {
		xs: 500,
		sm: 730,
		md: 960,
		lg: 1450,
	},
	sizes: {
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
		xl: 2,
	},
	padding: 16,
	showBreakpoints: false,
	breakpointsColor: "black",
};

export const GridProvider: React.FC<GridProviderProps> = (props) => {
	let { children, breakpoints, sizes, padding, breakpointsColor, showBreakpoints } = props;

	const size = useWindowResize(breakpoints);

	const renderBreakpoints = () => {
		if (!showBreakpoints) return null;

		const sizes = Object.keys(breakpoints);

		if (!sizes.length) return null;

		return sizes.map((size: string, index: number) => {
			const distance = breakpoints[size];

			if (!distance) return null;

			return <View key={index} style={[styles.breakpoint, { left: distance, backgroundColor: breakpointsColor }]} />;
		});
	};

	return (
		<GridContext.Provider value={{ size, padding, sizes }}>
			{children}
			{renderBreakpoints()}
		</GridContext.Provider>
	);
};

GridProvider.defaultProps = defaultProps;

const styles = StyleSheet.create({
	breakpoint: {
		position: "absolute",
		width: 1,
		top: 0,
		bottom: 0,
	},
});
