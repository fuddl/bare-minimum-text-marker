# Bare minimum text marker

A plugin for [bare-minimum-2d](https://www.npmjs.com/package/bare-minimum-2d) for plotting points with text labals. 

[Demo](https://fuddl.github.io/bare-minimum-text-marker/)

![](./example/public/favicon.svg)

## How to use it

```jsx

import BareMinimum2d from 'bare-minimum-2d'
import textMarker from 'bare-minimum-text-marker'

function Space() {

  let points = [{
    x: [496],
    y: [1014],
    label: 'Alpha Centauri',
    id: 'alpha-cent',
    type: 'textMarker',
    size: 1,
    opacity: 1,
    color: 'white',
    size: 2,
  }]

  return (
    <BareMinimum2d
      data={points}
      plugins={[textMarker]}
    />
  )
}

```

## Options

The following options can be used for a single point.

### label 

The text marker's text.

Default value: (empty sting)

### pointer

Symbol used as a marker, that marks the position of the point. Make sure the 
character is available in your font.

Default value: `•`

### yOffset

Vertical offset of the pointer to the datapoint. You might like to adjust that 
to your `fontFamily` and `Pointer`.

Default value: [`size`](#size)÷3

### gap

Distance between the center of the pointer and the start of the label.

Default value: [`size`](#size)÷2

### fontFamily

[font-family] of both the pointer and the label 

Default value: (empty sting) – user agent decides

### color 

[fill] color of both the pointer and the label 

Default value: (empty string) – rendered as black

### size

[font-size] of both the pointer and the label.

Default value: `16`

### opacity

Opacity of both the pointer and the label.

Default value: `1`

Note that you'll still be able to apply css.

### layout

Array of possible label layouts in order of priority. Each entry myst be one of
`'north'`, `'east'`, `'south'` or `'west'`. 

Example: `['north', 'east', 'south']` would mean:

1. Try to place it north.
2. If the space in the north is already occupied, try east. 
3. If the space in the east is occupied, try south.
4. If the space in the south is occupied, don't show the label at all.

You might want to keep this array short for better performance.

Default value: `['east', 'west', 'south', 'north']`

## How to build the example

```
npm install && npm run build && cd example && npm install && npm run start
```

[font-family]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family
[fill]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
[font-size]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size
