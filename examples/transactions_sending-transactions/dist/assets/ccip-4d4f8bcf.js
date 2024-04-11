import {
  b as E,
  e as L,
  a as O,
  d as g,
  I as h,
  c as k,
  B as l,
  H as m,
  i as p,
  g as w,
  s as y,
} from './index-c61d5d0b.js'
class x extends l {
  constructor({
    callbackSelector: e,
    cause: a,
    data: o,
    extraData: c,
    sender: d,
    urls: t,
  }) {
    var i
    super(
      a.shortMessage ||
        'An error occurred while fetching for an offchain result.',
      {
        cause: a,
        metaMessages: [
          ...(a.metaMessages || []),
          (i = a.metaMessages) != null && i.length ? '' : [],
          'Offchain Gateway Call:',
          t && ['  Gateway URL(s):', ...t.map((u) => `    ${w(u)}`)],
          `  Sender: ${d}`,
          `  Data: ${o}`,
          `  Callback selector: ${e}`,
          `  Extra data: ${c}`,
        ].flat(),
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'OffchainLookupError',
      })
  }
}
class M extends l {
  constructor({ result: e, url: a }) {
    super(
      'Offchain gateway response is malformed. Response data must be a hex value.',
      { metaMessages: [`Gateway URL: ${w(a)}`, `Response: ${y(e)}`] },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'OffchainLookupResponseMalformedError',
      })
  }
}
class R extends l {
  constructor({ sender: e, to: a }) {
    super(
      'Reverted sender address does not match target contract address (`to`).',
      {
        metaMessages: [
          `Contract address: ${a}`,
          `OffchainLookup sender address: ${e}`,
        ],
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'OffchainLookupSenderMismatchError',
      })
  }
}
function $(n, e) {
  if (!p(n, { strict: !1 })) throw new h({ address: n })
  if (!p(e, { strict: !1 })) throw new h({ address: e })
  return n.toLowerCase() === e.toLowerCase()
}
const C = '0x556f1830',
  S = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'urls', type: 'string[]' },
      { name: 'callData', type: 'bytes' },
      { name: 'callbackFunction', type: 'bytes4' },
      { name: 'extraData', type: 'bytes' },
    ],
  }
async function P(n, { blockNumber: e, blockTag: a, data: o, to: c }) {
  const { args: d } = g({ data: o, abi: [S] }),
    [t, i, u, r, s] = d
  try {
    if (!$(c, t)) throw new R({ sender: t, to: c })
    const f = await A({ data: u, sender: t, urls: i }),
      { data: b } = await k(n, {
        blockNumber: e,
        blockTag: a,
        data: O([r, L([{ type: 'bytes' }, { type: 'bytes' }], [f, s])]),
        to: c,
      })
    return b
  } catch (f) {
    throw new x({
      callbackSelector: r,
      cause: f,
      data: o,
      extraData: s,
      sender: t,
      urls: i,
    })
  }
}
async function A({ data: n, sender: e, urls: a }) {
  var c
  let o = new Error('An unknown error occurred.')
  for (let d = 0; d < a.length; d++) {
    const t = a[d],
      i = t.includes('{data}') ? 'GET' : 'POST',
      u = i === 'POST' ? { data: n, sender: e } : void 0
    try {
      const r = await fetch(t.replace('{sender}', e).replace('{data}', n), {
        body: JSON.stringify(u),
        method: i,
      })
      let s
      if (
        ((c = r.headers.get('Content-Type')) != null &&
        c.startsWith('application/json')
          ? (s = (await r.json()).data)
          : (s = await r.text()),
        !r.ok)
      ) {
        o = new m({
          body: u,
          details: s != null && s.error ? y(s.error) : r.statusText,
          headers: r.headers,
          status: r.status,
          url: t,
        })
        continue
      }
      if (!E(s)) {
        o = new M({ result: s, url: t })
        continue
      }
      return s
    } catch (r) {
      o = new m({ body: u, details: r.message, url: t })
    }
  }
  throw o
}
export {
  A as ccipFetch,
  P as offchainLookup,
  S as offchainLookupAbiItem,
  C as offchainLookupSignature,
}
