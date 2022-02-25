# @colocate

## Installation
```bash
$ yarn add @colocate/co
$ yarn add --dev @colocate/webpack-plugin
```

- `webpack.config.js`
```javascript
const WebpackColocatePlugin = require('@colocate/webpack-plugin')

module.exports = {
  plugins: [
    new WebpackColocatePlugin(),
  ]
}
```

## Usage

It transforms

- `./Component.tsx`

```tsx
import { co } from '@colocate/co'
import { style } from '@vanilla-extract/css'
import React from 'react'

const Component: React.FC = () => {
  return (
    <div className={css.container}>hello, world</div>
  )
}

const css = co('[filename].css', () => {
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

- `./Component.css.tsx` (`[filename].css.[ext]`)

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

## To-dos
- [ ] Eliminate codes used in `co` function from original file
  - Reference: https://next-code-elimination.vercel.app/
- [ ] Create virtual files from `co` function
  - Reference: https://github.com/sysgears/webpack-virtual-modules
