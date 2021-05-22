import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export type OrientationType = 'portrait' | 'landscape';

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SizesProps {
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
}

export interface LayoutProps {
  orientation: 'portrait' | 'landscape';
  landscape: boolean;
  portrait: boolean;
  width: number;
  height: number;
  size: SizeType;
}

export interface GridContextProps {
  layout: LayoutProps;
  sizes: SizesProps;
}

const GridContext = React.createContext<Partial<GridContextProps>>({});

export const useGrid = () => React.useContext(GridContext);

export interface GridProviderProps {
  breakpoints?: SizesProps;
  sizes?: SizesProps;
  showBreakpoints?: boolean;
  children?: React.ReactNode;
}

export const useWindowResize = (breakpoints: SizesProps) => {
  const { width, height } = useWindowDimensions();

  const getSize = () => {
    if (width < breakpoints['xs']) {
      return 'xs';
    } else if (width >= breakpoints['xs'] && width < breakpoints['sm']) {
      return 'sm';
    } else if (width >= breakpoints['sm'] && width < breakpoints['md']) {
      return 'md';
    } else if (width >= breakpoints['md'] && width < breakpoints['lg']) {
      return 'lg';
    } else {
      return 'xl';
    }
  };

  const layout: Partial<LayoutProps> = {};

  if (width > height) {
    layout.orientation = 'landscape';
  } else {
    layout.orientation = 'portrait';
  }

  layout.landscape = layout.orientation === 'landscape';
  layout.portrait = layout.orientation === 'portrait';

  layout.width = width;
  layout.height = height;

  layout.size = getSize();

  return layout as LayoutProps;
};

const defaultProps: GridProviderProps = {
  breakpoints: {
    xs: 500,
    sm: 730,
    md: 960,
    lg: 1450,
  },
};

export const GridProvider: React.FC<GridProviderProps> = props => {
  let { children, breakpoints, sizes, showBreakpoints } = props;

  const layout = useWindowResize(breakpoints);

  const renderBreakpoints = () => {
    if (!showBreakpoints) return null;

    const sizes = Object(breakpoints).keys();

    if (!sizes.length) return null;

    return sizes.map((size: string) => {
      const distance = breakpoints[size];

      if (!distance) return null;

      return <View style={[styles.breakpoint, { left: distance }]} />;
    });
  };

  return (
    <GridContext.Provider value={{ layout, sizes }}>
      {children}
      {!!breakpoints && renderBreakpoints()}
    </GridContext.Provider>
  );
};

GridProvider.defaultProps = defaultProps;

const styles = StyleSheet.create({
  breakpoint: {
    position: 'absolute',
    width: 1,
    backgroundColor: 'white',
    top: 0,
    bottom: 0,
  },
});
