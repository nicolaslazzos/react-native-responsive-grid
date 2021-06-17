## React Native Responsive Grid

[![version](https://img.shields.io/github/package-json/v/nicolaslazzos/react-native-responsive-grid/master?label=npm&style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-responsive-grid) 
[![npm](https://img.shields.io/npm/l/@nlazzos/react-native-responsive-grid?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-responsive-grid) 
[![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-responsive-grid)
[![npm](https://img.shields.io/npm/dm/@nlazzos/react-native-responsive-grid?style=flat-square&color=red)](https://www.npmjs.com/package/@nlazzos/react-native-responsive-grid) 
[![npm](https://img.shields.io/github/stars/nicolaslazzos/react-native-responsive-grid?style=flat-square)](https://www.npmjs.com/package/@nlazzos/react-native-responsive-grid) 

The best responsive grid component for react-native and react-native-web.

### Installation

Using yarn:

```bash
yarn add @nlazzos/react-native-responsive-grid
```

Using npm:

```bash
npm install @nlazzos/react-native-responsive-grid --save
```

### Example

Check the following example to see it in action and try changing the default props to see how it works.

[![npm](https://img.shields.io/static/v1?style=flat-square&label=Expo&message=Example&logo=expo)](https://snack.expo.io/@nicolaslazzos/react-native-responsive-grid-example)

### Usage

First of all, you need to wrap your root component with the `GridProvider`.

```javascript
import React from "react";
import { GridProvider } from "@nlazzos/react-native-responsive-grid";

const App = () => {
  return (
    <GridProvider>
      {/* your content */}
    </GridProvider>
  );
};
```

Then you can use the `Grid` component in the rest of your app.

### How to use it

#### First way

You can use directly the `Grid` component as in the following example.

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";
import { Grid } from "@nlazzos/react-native-responsive-grid";

const App = () => {
  return (
    <Grid>
      {Array.from(Array(20).keys()).map((item, index) => {
        return (
          <View style={styles.card} />
        );
      })}
    </Grid>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    minHeight: 200,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

```

#### Second way

You can use directly the `Col` and `Row` components as in the following example.

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";
import { Col, Row } from "@nlazzos/react-native-responsive-grid";

const App = () => {
  return (
    <Row>
      {Array.from(Array(20).keys()).map((item, index) => {
        return (
          <Col>
            <View style={styles.card} />
          </Col>
        );
      })}
    </Row>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    minHeight: 200,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

```

### Properties

#### GridProvider

|      Prop       |                             Description                            |    Type      |                  Default                  |
| :-------------: | :----------------------------------------------------------------: | :----------: | :---------------------------------------: |
|      sizes      | The sizes of the `Col` component for each screen size.             | `SizesProps` | `{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }`  |
|   breakpoints   | The breakpoints for each screen size.                              | `SizesProps` | `{ xs: 500, sm: 730, md: 960, lg: 1450 }` |
|     padding     | The padding between the elements in the grid.                      |   `number`   | `16`                                      |
| showBreakpoints | Whether to show or not the breakpoints (for development purpouses).|  `boolean`   | `false`                                   |
|breakpointsColor | The color of the breakpoints.                                      |   `string`   | `black`                                   |

#### Grid

Accepts any `View` prop and the following.

| Prop |         Description         | Type | Default |
| :--: | :-------------------------: | :--: | :-----: |
|    xs   | Number of columns (between 0 and 12) that the each item should take in screens of size `xs`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    sm   | Number of columns (between 0 and 12) that the each item should take in screens of size `sm`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    md   | Number of columns (between 0 and 12) that the each item should take in screens of size `md`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    lg   | Number of columns (between 0 and 12) that the each item should take in screens of size `lg`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    xl   | Number of columns (between 0 and 12) that the each item should take in screens of size `xl`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
| padding | The padding between the elements in the grid.                                                |       `number`       | The one defined in the `padding` prop of the `GridProvider`. |
|rowStyle | Style for the `Row` component inside the grid.                                               |`StyleProp<ViewStyle>`|
|colStyle | Style for the `Col` components inside the grid.                                              |`StyleProp<ViewStyle>`|

#### Col

Accepts any `View` prop and the following.

| Prop |         Description         | Type | Default |
| :--: | :-------------------------: | :--: | :-----: |
|    xs   | Number of columns (between 0 and 12) that the each item should take in screens of size `xs`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    sm   | Number of columns (between 0 and 12) that the each item should take in screens of size `sm`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    md   | Number of columns (between 0 and 12) that the each item should take in screens of size `md`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    lg   | Number of columns (between 0 and 12) that the each item should take in screens of size `lg`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |
|    xl   | Number of columns (between 0 and 12) that the each item should take in screens of size `xl`. |       `number`       | The one defined in the `sizes` prop of the `GridProvider`. |

#### Row

Accepts any `View` prop.

### License

[MIT](https://choosealicense.com/licenses/mit/)
