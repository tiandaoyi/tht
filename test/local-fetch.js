import { tht, thtGet, thtPost } from '../dist/bundle.esm.js';

(async () => {
  // default mode
  const res = await tht("http://localhost:3333/test.json");
  console.log('res', res)

  // get mode
  const thtGetRes = await thtGet("http://localhost:3333/test.json", { name: 'xx' });
  console.log('thtGetRes', thtGetRes)

  // post mode
  const thtPostRes = await thtPost("http://localhost:3333/test.json?a=1111", { name: 'xx' });
  console.log('thtPostRes', thtPostRes)
})();
