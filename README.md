# webpack-colocation-plugin

## Installation
```bash
$ yarn add @colocate/co
$ yarn add --dev @colocate/webpack-plugin
```

```javascript
const ColocatePlugin = require('@colocate/webpack-plugin')

module.exports = {
  plugins: [
    new ColocatePlugin(),
  ]
}
```

## Usage

It transforms from

- `./Component.tsx`

```tsx
import { colocated } from '@colocate/colocated'
import React from 'react'
import { style } from '@vanilla-extract/css'

const Component: React.FC = () => {
  return (
    <div className={css.container}>hello, world</div>
  )
}

const css = colocated('./[filename].css.ts', () => {
  const container = style({
    fontSize: '2rem',
  })

  return {
    container,
  }
})

export default Component
```

to

- `./Component.css.ts`

```typescript
import { style } from '@vanilla-extract/css'

const container = style({
  fontSize: '2rem',
})

export {
  container,
}
```

- `./Component.tsx`
```tsx
import React from 'react'
import * as css from './Component.css.ts'

const Component: React.FC = () => {
  return (
    <div className={css.container}>hello, world</div>
  )
}

export default Component
```
