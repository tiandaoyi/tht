# Introduction

`tht(tiny HTTP)` is a very small HTTP request library that supports both browser and Node.js environments, similar to Axios. It requires Node.js version 17.5+.

## Usage

```javascript
import { tht, thtGet, thtPost } from 'tht';
import { tht, thtGet, thtPost } from './dist/bundle.js';

(async () => {
  // Default mode
  const res = await tht("http://localhost:3333/test.json");
  console.log('res', res)

  // GET mode
  const thtGetRes = await thtGet("http://localhost:3333/test.json", { name: 'xx' });
  console.log('thtGetRes', thtGetRes)

  // POST mode
  const thtPostRes = await thtPost("http://localhost:3333/test.json?a=1111", { name: 'xx' });
  console.log('thtPostRes', thtPostRes)
})();
```

Note: This library can be used in both browser and Node.js environments. It can be imported either as an ES module (import) or using CommonJS (require).
