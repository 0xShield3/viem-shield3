var L = Object.defineProperty
var E = (a, e, t) =>
  e in a
    ? L(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (a[e] = t)
var l = (a, e, t) => (E(a, typeof e != 'symbol' ? e + '' : e, t), t)
import {
  B as p,
  H as w,
  I as m,
  a as x,
  b as R,
  c as O,
  d as b,
  e as M,
  g as y,
  i as h,
  s as g,
} from './index-DhDKiqLz.js'
class $ extends p {
  constructor({
    callbackSelector: t,
    cause: s,
    data: c,
    extraData: f,
    sender: o,
    urls: i,
  }) {
    var d
    super(
      s.shortMessage ||
        'An error occurred while fetching for an offchain result.',
      {
        cause: s,
        metaMessages: [
          ...(s.metaMessages || []),
          (d = s.metaMessages) != null && d.length ? '' : [],
          'Offchain Gateway Call:',
          i && ['  Gateway URL(s):', ...i.map((r) => `    ${y(r)}`)],
          `  Sender: ${o}`,
          `  Data: ${c}`,
          `  Callback selector: ${t}`,
          `  Extra data: ${f}`,
        ].flat(),
      },
    )
    l(this, 'name', 'OffchainLookupError')
  }
}
class S extends p {
  constructor({ result: t, url: s }) {
    super(
      'Offchain gateway response is malformed. Response data must be a hex value.',
      { metaMessages: [`Gateway URL: ${y(s)}`, `Response: ${g(t)}`] },
    )
    l(this, 'name', 'OffchainLookupResponseMalformedError')
  }
}
class A extends p {
  constructor({ sender: t, to: s }) {
    super(
      'Reverted sender address does not match target contract address (`to`).',
      {
        metaMessages: [
          `Contract address: ${s}`,
          `OffchainLookup sender address: ${t}`,
        ],
      },
    )
    l(this, 'name', 'OffchainLookupSenderMismatchError')
  }
}
function C(a, e) {
  if (!h(a, { strict: !1 })) throw new m({ address: a })
  if (!h(e, { strict: !1 })) throw new m({ address: e })
  return a.toLowerCase() === e.toLowerCase()
}
const H = '0x556f1830',
  D = {
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
async function I(a, { blockNumber: e, blockTag: t, data: s, to: c }) {
  const { args: f } = b({ data: s, abi: [D] }),
    [o, i, d, r, n] = f
  try {
    if (!C(c, o)) throw new A({ sender: o, to: c })
    const u = await T({ data: d, sender: o, urls: i }),
      { data: k } = await O(a, {
        blockNumber: e,
        blockTag: t,
        data: x([r, M([{ type: 'bytes' }, { type: 'bytes' }], [u, n])]),
        to: c,
      })
    return k
  } catch (u) {
    throw new $({
      callbackSelector: r,
      cause: u,
      data: s,
      extraData: n,
      sender: o,
      urls: i,
    })
  }
}
async function T({ data: a, sender: e, urls: t }) {
  var c
  let s = new Error('An unknown error occurred.')
  for (let f = 0; f < t.length; f++) {
    const o = t[f],
      i = o.includes('{data}') ? 'GET' : 'POST',
      d = i === 'POST' ? { data: a, sender: e } : void 0
    try {
      const r = await fetch(o.replace('{sender}', e).replace('{data}', a), {
        body: JSON.stringify(d),
        method: i,
      })
      let n
      if (
        ((c = r.headers.get('Content-Type')) != null &&
        c.startsWith('application/json')
          ? (n = (await r.json()).data)
          : (n = await r.text()),
        !r.ok)
      ) {
        s = new w({
          body: d,
          details: n != null && n.error ? g(n.error) : r.statusText,
          headers: r.headers,
          status: r.status,
          url: o,
        })
        continue
      }
      if (!R(n)) {
        s = new S({ result: n, url: o })
        continue
      }
      return n
    } catch (r) {
      s = new w({ body: d, details: r.message, url: o })
    }
  }
  throw s
}
export {
  T as ccipFetch,
  I as offchainLookup,
  D as offchainLookupAbiItem,
  H as offchainLookupSignature,
}
