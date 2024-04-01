function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
;(() => {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function om(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var ad = { exports: {} },
  Ji = {},
  ld = { exports: {} },
  j = {} /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So = Symbol.for('react.element'),
  im = Symbol.for('react.portal'),
  sm = Symbol.for('react.fragment'),
  um = Symbol.for('react.strict_mode'),
  am = Symbol.for('react.profiler'),
  lm = Symbol.for('react.provider'),
  cm = Symbol.for('react.context'),
  fm = Symbol.for('react.forward_ref'),
  dm = Symbol.for('react.suspense'),
  pm = Symbol.for('react.memo'),
  hm = Symbol.for('react.lazy'),
  pc = Symbol.iterator
function mm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pc && e[pc]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var cd = {
    isMounted: () => !1,
    enqueueForceUpdate: () => {},
    enqueueReplaceState: () => {},
    enqueueSetState: () => {},
  },
  fd = Object.assign,
  dd = {}
function nr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = dd),
    (this.updater = n || cd)
}
nr.prototype.isReactComponent = {}
nr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function pd() {}
pd.prototype = nr.prototype
function za(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = dd),
    (this.updater = n || cd)
}
var ja = (za.prototype = new pd())
ja.constructor = za
fd(ja, nr.prototype)
ja.isPureReactComponent = !0
var hc = Array.isArray,
  hd = Object.prototype.hasOwnProperty,
  $a = { current: null },
  md = { key: !0, ref: !0, __self: !0, __source: !0 }
function yd(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      hd.call(t, r) && !md.hasOwnProperty(r) && (o[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) o.children = n
  else if (1 < u) {
    for (var a = Array(u), l = 0; l < u; l++) a[l] = arguments[l + 2]
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r])
  return { $$typeof: So, type: e, key: i, ref: s, props: o, _owner: $a.current }
}
function ym(e, t) {
  return {
    $$typeof: So,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function La(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So
}
function gm(e) {
  var t = { '=': '=0', ':': '=2' }
  return '$' + e.replace(/[=:]/g, (n) => t[n])
}
var mc = /\/+/g
function Bs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? gm('' + e.key)
    : t.toString(36)
}
function ui(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case So:
          case im:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Bs(s, 0) : r),
      hc(o)
        ? ((n = ''),
          e != null && (n = e.replace(mc, '$&/') + '/'),
          ui(o, t, n, '', (l) => l))
        : o != null &&
          (La(o) &&
            (o = ym(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(mc, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), hc(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var a = r + Bs(i, u)
      s += ui(i, t, n, a, o)
    }
  else if (((a = mm(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Bs(i, u++)), (s += ui(i, t, n, a, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return s
}
function Do(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return ui(e, r, '', '', (i) => t.call(n, i, o++)), r
}
function vm(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        (n) => {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        (n) => {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var we = { current: null },
  ai = { transition: null },
  wm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: ai,
    ReactCurrentOwner: $a,
  }
j.Children = {
  map: Do,
  forEach: (e, t, n) => {
    Do(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: (e) => {
    var t = 0
    return (
      Do(e, () => {
        t++
      }),
      t
    )
  },
  toArray: (e) => Do(e, (t) => t) || [],
  only: (e) => {
    if (!La(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
j.Component = nr
j.Fragment = sm
j.Profiler = am
j.PureComponent = za
j.StrictMode = um
j.Suspense = dm
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm
j.cloneElement = (e, t, n) => {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = fd({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = $a.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (a in t)
      hd.call(t, a) &&
        !md.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    u = Array(a)
    for (var l = 0; l < a; l++) u[l] = arguments[l + 2]
    r.children = u
  }
  return { $$typeof: So, type: e.type, key: o, ref: i, props: r, _owner: s }
}
j.createContext = (e) => (
  (e = {
    $$typeof: cm,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  }),
  (e.Provider = { $$typeof: lm, _context: e }),
  (e.Consumer = e)
)
j.createElement = yd
j.createFactory = (e) => {
  var t = yd.bind(null, e)
  return (t.type = e), t
}
j.createRef = () => ({ current: null })
j.forwardRef = (e) => ({ $$typeof: fm, render: e })
j.isValidElement = La
j.lazy = (e) => ({
  $$typeof: hm,
  _payload: { _status: -1, _result: e },
  _init: vm,
})
j.memo = (e, t) => ({ $$typeof: pm, type: e, compare: t === void 0 ? null : t })
j.startTransition = (e) => {
  var t = ai.transition
  ai.transition = {}
  try {
    e()
  } finally {
    ai.transition = t
  }
}
j.unstable_act = () => {
  throw Error('act(...) is not supported in production builds of React.')
}
j.useCallback = (e, t) => we.current.useCallback(e, t)
j.useContext = (e) => we.current.useContext(e)
j.useDebugValue = () => {}
j.useDeferredValue = (e) => we.current.useDeferredValue(e)
j.useEffect = (e, t) => we.current.useEffect(e, t)
j.useId = () => we.current.useId()
j.useImperativeHandle = (e, t, n) => we.current.useImperativeHandle(e, t, n)
j.useInsertionEffect = (e, t) => we.current.useInsertionEffect(e, t)
j.useLayoutEffect = (e, t) => we.current.useLayoutEffect(e, t)
j.useMemo = (e, t) => we.current.useMemo(e, t)
j.useReducer = (e, t, n) => we.current.useReducer(e, t, n)
j.useRef = (e) => we.current.useRef(e)
j.useState = (e) => we.current.useState(e)
j.useSyncExternalStore = (e, t, n) => we.current.useSyncExternalStore(e, t, n)
j.useTransition = () => we.current.useTransition()
j.version = '18.2.0'
ld.exports = j
var an = ld.exports
const yc = om(an) /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bm = an,
  xm = Symbol.for('react.element'),
  Em = Symbol.for('react.fragment'),
  Pm = Object.prototype.hasOwnProperty,
  Sm = bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  km = { key: !0, ref: !0, __self: !0, __source: !0 }
function gd(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) Pm.call(t, r) && !km.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: xm, type: e, key: i, ref: s, props: o, _owner: Sm.current }
}
Ji.Fragment = Em
Ji.jsx = gd
Ji.jsxs = gd
ad.exports = Ji
var Ma = ad.exports
const Cm = Ma.Fragment,
  on = Ma.jsx,
  zs = Ma.jsxs
var vu = {},
  vd = { exports: {} },
  Ie = {},
  wd = { exports: {} },
  bd = {} /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
;((e) => {
  function t(N, F) {
    var B = N.length
    N.push(F)
    while (0 < B) {
      var J = (B - 1) >>> 1,
        re = N[J]
      if (0 < o(re, F)) (N[J] = F), (N[B] = re), (B = J)
      else break
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var F = N[0],
      B = N.pop()
    if (B !== F) {
      N[0] = B
      for (var J = 0, re = N.length, Lo = re >>> 1; J < Lo; ) {
        var nn = 2 * (J + 1) - 1,
          Is = N[nn],
          rn = nn + 1,
          Mo = N[rn]
        if (0 > o(Is, B))
          rn < re && 0 > o(Mo, Is)
            ? ((N[J] = Mo), (N[rn] = B), (J = rn))
            : ((N[J] = Is), (N[nn] = B), (J = nn))
        else if (rn < re && 0 > o(Mo, B)) (N[J] = Mo), (N[rn] = B), (J = rn)
        else break
      }
    }
    return F
  }
  function o(N, F) {
    var B = N.sortIndex - F.sortIndex
    return B !== 0 ? B : N.id - F.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = () => i.now()
  } else {
    var s = Date,
      u = s.now()
    e.unstable_now = () => s.now() - u
  }
  var a = [],
    l = [],
    f = 1,
    c = null,
    d = 3,
    v = !1,
    g = !1,
    m = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(N) {
    for (var F = n(l); F !== null; ) {
      if (F.callback === null) r(l)
      else if (F.startTime <= N) r(l), (F.sortIndex = F.expirationTime), t(a, F)
      else break
      F = n(l)
    }
  }
  function w(N) {
    if (((m = !1), y(N), !g))
      if (n(a) !== null) (g = !0), Rs(S)
      else {
        var F = n(l)
        F !== null && Fs(w, F.startTime - N)
      }
  }
  function S(N, F) {
    ;(g = !1), m && ((m = !1), p(T), (T = -1)), (v = !0)
    var B = d
    try {
      for (
        y(F), c = n(a);
        c !== null && (!(c.expirationTime > F) || (N && !M()));
      ) {
        var J = c.callback
        if (typeof J == 'function') {
          ;(c.callback = null), (d = c.priorityLevel)
          var re = J(c.expirationTime <= F)
          ;(F = e.unstable_now()),
            typeof re == 'function' ? (c.callback = re) : c === n(a) && r(a),
            y(F)
        } else r(a)
        c = n(a)
      }
      if (c !== null) var Lo = !0
      else {
        var nn = n(l)
        nn !== null && Fs(w, nn.startTime - F), (Lo = !1)
      }
      return Lo
    } finally {
      ;(c = null), (d = B), (v = !1)
    }
  }
  var x = !1,
    P = null,
    T = -1,
    A = 5,
    _ = -1
  function M() {
    return !(e.unstable_now() - _ < A)
  }
  function ye() {
    if (P !== null) {
      var N = e.unstable_now()
      _ = N
      var F = !0
      try {
        F = P(!0, N)
      } finally {
        F ? fe() : ((x = !1), (P = null))
      }
    } else x = !1
  }
  var fe
  if (typeof h == 'function')
    fe = () => {
      h(ye)
    }
  else if (typeof MessageChannel < 'u') {
    var fr = new MessageChannel(),
      dr = fr.port2
    ;(fr.port1.onmessage = ye),
      (fe = () => {
        dr.postMessage(null)
      })
  } else
    fe = () => {
      b(ye, 0)
    }
  function Rs(N) {
    ;(P = N), x || ((x = !0), fe())
  }
  function Fs(N, F) {
    T = b(() => {
      N(e.unstable_now())
    }, F)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = (N) => {
      N.callback = null
    }),
    (e.unstable_continueExecution = () => {
      g || v || ((g = !0), Rs(S))
    }),
    (e.unstable_forceFrameRate = (N) => {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = () => d),
    (e.unstable_getFirstCallbackNode = () => n(a)),
    (e.unstable_next = (N) => {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var F = 3
          break
        default:
          F = d
      }
      var B = d
      d = F
      try {
        return N()
      } finally {
        d = B
      }
    }),
    (e.unstable_pauseExecution = () => {}),
    (e.unstable_requestPaint = () => {}),
    (e.unstable_runWithPriority = (N, F) => {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var B = d
      d = N
      try {
        return F()
      } finally {
        d = B
      }
    }),
    (e.unstable_scheduleCallback = (N, F, B) => {
      var J = e.unstable_now()
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? J + B : J))
          : (B = J),
        N)
      ) {
        case 1:
          var re = -1
          break
        case 2:
          re = 250
          break
        case 5:
          re = 1073741823
          break
        case 4:
          re = 1e4
          break
        default:
          re = 5e3
      }
      return (
        (re = B + re),
        (N = {
          id: f++,
          callback: F,
          priorityLevel: N,
          startTime: B,
          expirationTime: re,
          sortIndex: -1,
        }),
        B > J
          ? ((N.sortIndex = B),
            t(l, N),
            n(a) === null &&
              N === n(l) &&
              (m ? (p(T), (T = -1)) : (m = !0), Fs(w, B - J)))
          : ((N.sortIndex = re), t(a, N), g || v || ((g = !0), Rs(S))),
        N
      )
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = (N) => {
      var F = d
      return function () {
        var B = d
        d = F
        try {
          return N.apply(this, arguments)
        } finally {
          d = B
        }
      }
    })
})(bd)
wd.exports = bd
var Tm = wd.exports /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd = an,
  Re = Tm
function C(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Ed = new Set(),
  Lr = {}
function En(e, t) {
  Wn(e, t), Wn(e + 'Capture', t)
}
function Wn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) Ed.add(t[e])
}
var gt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  wu = Object.prototype.hasOwnProperty,
  Om =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gc = {},
  vc = {}
function Nm(e) {
  return wu.call(vc, e)
    ? !0
    : wu.call(gc, e)
      ? !1
      : Om.test(e)
        ? (vc[e] = !0)
        : ((gc[e] = !0), !1)
}
function Am(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function _m(e, t, n, r) {
  if (t === null || typeof t > 'u' || Am(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function be(e, t, n, r, o, i, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s)
}
var ce = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach((e) => {
    ce[e] = new be(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach((e) => {
  var t = e[0]
  ce[t] = new be(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach((e) => {
  ce[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach((e) => {
  ce[e] = new be(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach((e) => {
    ce[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach((e) => {
  ce[e] = new be(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach((e) => {
  ce[e] = new be(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach((e) => {
  ce[e] = new be(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach((e) => {
  ce[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Da = /[\-:]([a-z])/g
function Ua(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach((e) => {
    var t = e.replace(Da, Ua)
    ce[t] = new be(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach((e) => {
    var t = e.replace(Da, Ua)
    ce[t] = new be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach((e) => {
  var t = e.replace(Da, Ua)
  ce[t] = new be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach((e) => {
  ce[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ce.xlinkHref = new be(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach((e) => {
  ce[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ha(e, t, n, r) {
  var o = ce.hasOwnProperty(t) ? ce[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (_m(t, n, o, r) && (n = null),
    r || o === null
      ? Nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var St = xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Uo = Symbol.for('react.element'),
  kn = Symbol.for('react.portal'),
  Cn = Symbol.for('react.fragment'),
  Ga = Symbol.for('react.strict_mode'),
  bu = Symbol.for('react.profiler'),
  Pd = Symbol.for('react.provider'),
  Sd = Symbol.for('react.context'),
  Va = Symbol.for('react.forward_ref'),
  xu = Symbol.for('react.suspense'),
  Eu = Symbol.for('react.suspense_list'),
  Wa = Symbol.for('react.memo'),
  Nt = Symbol.for('react.lazy'),
  kd = Symbol.for('react.offscreen'),
  wc = Symbol.iterator
function pr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (wc && e[wc]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Q = Object.assign,
  js
function kr(e) {
  if (js === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      js = (t && t[1]) || ''
    }
  return (
    `
` +
    js +
    e
  )
}
var $s = !1
function Ls(e, t) {
  if (!e || $s) return ''
  $s = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = () => {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: () => {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (l) {
          var r = l
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (l) {
          r = l
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (l) {
        r = l
      }
      e()
    }
  } catch (l) {
    if (l && r && typeof l.stack == 'string') {
      for (
        var o = l.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          u = i.length - 1;
        1 <= s && 0 <= u && o[s] !== i[u];
      )
        u--
      for (; 1 <= s && 0 <= u; s--, u--)
        if (o[s] !== i[u]) {
          if (s !== 1 || u !== 1)
            do
              if ((s--, u--, 0 > u || o[s] !== i[u])) {
                var a =
                  `
` + o[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= s && 0 <= u)
          break
        }
    }
  } finally {
    ;($s = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? kr(e) : ''
}
function Rm(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type)
    case 16:
      return kr('Lazy')
    case 13:
      return kr('Suspense')
    case 19:
      return kr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Ls(e.type, !1)), e
    case 11:
      return (e = Ls(e.type.render, !1)), e
    case 1:
      return (e = Ls(e.type, !0)), e
    default:
      return ''
  }
}
function Pu(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Cn:
      return 'Fragment'
    case kn:
      return 'Portal'
    case bu:
      return 'Profiler'
    case Ga:
      return 'StrictMode'
    case xu:
      return 'Suspense'
    case Eu:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Sd:
        return (e.displayName || 'Context') + '.Consumer'
      case Pd:
        return (e._context.displayName || 'Context') + '.Provider'
      case Va:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Wa:
        return (
          (t = e.displayName || null), t !== null ? t : Pu(e.type) || 'Memo'
        )
      case Nt:
        ;(t = e._payload), (e = e._init)
        try {
          return Pu(e(t))
        } catch {}
    }
  return null
}
function Fm(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Pu(t)
    case 8:
      return t === Ga ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Gt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Cd(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Im(e) {
  var t = Cd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (s) {
          ;(r = '' + s), i.call(this, s)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: () => r,
        setValue: (s) => {
          r = '' + s
        },
        stopTracking: () => {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ho(e) {
  e._valueTracker || (e._valueTracker = Im(e))
}
function Td(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Cd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Pi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Su(e, t) {
  var n = t.checked
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function bc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Od(e, t) {
  ;(t = t.checked), t != null && Ha(e, 'checked', t, !1)
}
function ku(e, t) {
  Od(e, t)
  var n = Gt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Cu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Cu(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function xc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Cu(e, t, n) {
  ;(t !== 'number' || Pi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Cr = Array.isArray
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Gt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Tu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91))
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Ec(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92))
      if (Cr(n)) {
        if (1 < n.length) throw Error(C(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Gt(n) }
}
function Nd(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Pc(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Ad(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Ou(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ad(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Go,
  _d = ((e) =>
    typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? (t, n, r, o) => {
          MSApp.execUnsafeLocalFunction(() => e(t, n, r, o))
        }
      : e)((e, t) => {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Go = Go || document.createElement('div'),
          Go.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Go.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild)
      while (t.firstChild) e.appendChild(t.firstChild)
    }
  })
function Mr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Bm = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Nr).forEach((e) => {
  Bm.forEach((t) => {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nr[t] = Nr[e])
  })
})
function Rd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Nr.hasOwnProperty(e) && Nr[e])
      ? ('' + t).trim()
      : t + 'px'
}
function Fd(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Rd(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var zm = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Nu(e, t) {
  if (t) {
    if (zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62))
  }
}
function Au(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var _u = null
function qa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Ru = null,
  Ln = null,
  Mn = null
function Sc(e) {
  if ((e = To(e))) {
    if (typeof Ru != 'function') throw Error(C(280))
    var t = e.stateNode
    t && ((t = ts(t)), Ru(e.stateNode, e.type, t))
  }
}
function Id(e) {
  Ln ? (Mn ? Mn.push(e) : (Mn = [e])) : (Ln = e)
}
function Bd() {
  if (Ln) {
    var e = Ln,
      t = Mn
    if (((Mn = Ln = null), Sc(e), t)) for (e = 0; e < t.length; e++) Sc(t[e])
  }
}
function zd(e, t) {
  return e(t)
}
function jd() {}
var Ms = !1
function $d(e, t, n) {
  if (Ms) return e(t, n)
  Ms = !0
  try {
    return zd(e, t, n)
  } finally {
    ;(Ms = !1), (Ln !== null || Mn !== null) && (jd(), Bd())
  }
}
function Dr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ts(n)
  if (r === null) return null
  n = r[t]
  switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n))
  return n
}
var Fu = !1
if (gt)
  try {
    var hr = {}
    Object.defineProperty(hr, 'passive', {
      get: () => {
        Fu = !0
      },
    }),
      window.addEventListener('test', hr, hr),
      window.removeEventListener('test', hr, hr)
  } catch {
    Fu = !1
  }
function jm(e, t, n, r, o, i, s, u, a) {
  var l = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, l)
  } catch (f) {
    this.onError(f)
  }
}
var Ar = !1,
  Si = null,
  ki = !1,
  Iu = null,
  $m = {
    onError: (e) => {
      ;(Ar = !0), (Si = e)
    },
  }
function Lm(e, t, n, r, o, i, s, u, a) {
  ;(Ar = !1), (Si = null), jm.apply($m, arguments)
}
function Mm(e, t, n, r, o, i, s, u, a) {
  if ((Lm.apply(this, arguments), Ar)) {
    if (Ar) {
      var l = Si
      ;(Ar = !1), (Si = null)
    } else throw Error(C(198))
    ki || ((ki = !0), (Iu = l))
  }
}
function Pn(e) {
  var t = e,
    n = e
  if (e.alternate) while (t.return) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Ld(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function kc(e) {
  if (Pn(e) !== e) throw Error(C(188))
}
function Dm(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(C(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return kc(o), e
        if (i === r) return kc(o), t
        i = i.sibling
      }
      throw Error(C(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var s = !1, u = o.child; u; ) {
        if (u === n) {
          ;(s = !0), (n = o), (r = i)
          break
        }
        if (u === r) {
          ;(s = !0), (r = o), (n = i)
          break
        }
        u = u.sibling
      }
      if (!s) {
        for (u = i.child; u; ) {
          if (u === n) {
            ;(s = !0), (n = i), (r = o)
            break
          }
          if (u === r) {
            ;(s = !0), (r = i), (n = o)
            break
          }
          u = u.sibling
        }
        if (!s) throw Error(C(189))
      }
    }
    if (n.alternate !== r) throw Error(C(190))
  }
  if (n.tag !== 3) throw Error(C(188))
  return n.stateNode.current === n ? e : t
}
function Md(e) {
  return (e = Dm(e)), e !== null ? Dd(e) : null
}
function Dd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Dd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Ud = Re.unstable_scheduleCallback,
  Cc = Re.unstable_cancelCallback,
  Um = Re.unstable_shouldYield,
  Hm = Re.unstable_requestPaint,
  X = Re.unstable_now,
  Gm = Re.unstable_getCurrentPriorityLevel,
  Qa = Re.unstable_ImmediatePriority,
  Hd = Re.unstable_UserBlockingPriority,
  Ci = Re.unstable_NormalPriority,
  Vm = Re.unstable_LowPriority,
  Gd = Re.unstable_IdlePriority,
  Xi = null,
  rt = null
function Wm(e) {
  if (rt && typeof rt.onCommitFiberRoot == 'function')
    try {
      rt.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Km,
  qm = Math.log,
  Qm = Math.LN2
function Km(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qm(e) / Qm) | 0)) | 0
}
var Vo = 64,
  Wo = 4194304
function Tr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ti(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var u = s & ~o
    u !== 0 ? (r = Tr(u)) : ((i &= s), i !== 0 && (r = Tr(i)))
  } else (s = n & ~o), s !== 0 ? (r = Tr(s)) : i !== 0 && (r = Tr(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function Jm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Xm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - Qe(i),
      u = 1 << s,
      a = o[s]
    a === -1
      ? (!(u & n) || u & r) && (o[s] = Jm(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function Bu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Vd() {
  var e = Vo
  return (Vo <<= 1), !(Vo & 4194240) && (Vo = 64), e
}
function Ds(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function ko(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n)
}
function Ym(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Qe(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Ka(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var D = 0
function Wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var qd,
  Ja,
  Qd,
  Kd,
  Jd,
  zu = !1,
  qo = [],
  Bt = null,
  zt = null,
  jt = null,
  Ur = new Map(),
  Hr = new Map(),
  _t = [],
  Zm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Tc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Bt = null
      break
    case 'dragenter':
    case 'dragleave':
      zt = null
      break
    case 'mouseover':
    case 'mouseout':
      jt = null
      break
    case 'pointerover':
    case 'pointerout':
      Ur.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Hr.delete(t.pointerId)
  }
}
function mr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = To(t)), t !== null && Ja(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function ey(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Bt = mr(Bt, e, t, n, r, o)), !0
    case 'dragenter':
      return (zt = mr(zt, e, t, n, r, o)), !0
    case 'mouseover':
      return (jt = mr(jt, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Ur.set(i, mr(Ur.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Hr.set(i, mr(Hr.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function Xd(e) {
  var t = ln(e.target)
  if (t !== null) {
    var n = Pn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ld(n)), t !== null)) {
          ;(e.blockedOn = t),
            Jd(e.priority, () => {
              Qd(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function li(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ju(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(_u = r), n.target.dispatchEvent(r), (_u = null)
    } else return (t = To(n)), t !== null && Ja(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Oc(e, t, n) {
  li(e) && n.delete(t)
}
function ty() {
  ;(zu = !1),
    Bt !== null && li(Bt) && (Bt = null),
    zt !== null && li(zt) && (zt = null),
    jt !== null && li(jt) && (jt = null),
    Ur.forEach(Oc),
    Hr.forEach(Oc)
}
function yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zu ||
      ((zu = !0), Re.unstable_scheduleCallback(Re.unstable_NormalPriority, ty)))
}
function Gr(e) {
  function t(o) {
    return yr(o, e)
  }
  if (0 < qo.length) {
    yr(qo[0], e)
    for (var n = 1; n < qo.length; n++) {
      var r = qo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Bt !== null && yr(Bt, e),
      zt !== null && yr(zt, e),
      jt !== null && yr(jt, e),
      Ur.forEach(t),
      Hr.forEach(t),
      n = 0;
    n < _t.length;
    n++
  )
    (r = _t[n]), r.blockedOn === e && (r.blockedOn = null)
  while (0 < _t.length && ((n = _t[0]), n.blockedOn === null))
    Xd(n), n.blockedOn === null && _t.shift()
}
var Dn = St.ReactCurrentBatchConfig,
  Oi = !0
function ny(e, t, n, r) {
  var o = D,
    i = Dn.transition
  Dn.transition = null
  try {
    ;(D = 1), Xa(e, t, n, r)
  } finally {
    ;(D = o), (Dn.transition = i)
  }
}
function ry(e, t, n, r) {
  var o = D,
    i = Dn.transition
  Dn.transition = null
  try {
    ;(D = 4), Xa(e, t, n, r)
  } finally {
    ;(D = o), (Dn.transition = i)
  }
}
function Xa(e, t, n, r) {
  if (Oi) {
    var o = ju(e, t, n, r)
    if (o === null) Xs(e, t, r, Ni, n), Tc(e, r)
    else if (ey(o, e, t, n, r)) r.stopPropagation()
    else if ((Tc(e, r), t & 4 && -1 < Zm.indexOf(e))) {
      while (o !== null) {
        var i = To(o)
        if (
          (i !== null && qd(i),
          (i = ju(e, t, n, r)),
          i === null && Xs(e, t, r, Ni, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Xs(e, t, r, null, n)
  }
}
var Ni = null
function ju(e, t, n, r) {
  if (((Ni = null), (e = qa(r)), (e = ln(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Ld(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Ni = e), null
}
function Yd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Gm()) {
        case Qa:
          return 1
        case Hd:
          return 4
        case Ci:
        case Vm:
          return 16
        case Gd:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Ft = null,
  Ya = null,
  ci = null
function Zd() {
  if (ci) return ci
  var e,
    t = Ya,
    n = t.length,
    r,
    o = 'value' in Ft ? Ft.value : Ft.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ci = o.slice(e, 1 < r ? 1 - r : void 0))
}
function fi(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Qo() {
  return !0
}
function Nc() {
  return !1
}
function Be(e) {
  function t(n, r, o, i, s) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null)
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null
          ? i.defaultPrevented
          : i.returnValue === !1
      )
        ? Qo
        : Nc),
      (this.isPropagationStopped = Nc),
      this
    )
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Qo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qo))
      },
      persist: () => {},
      isPersistent: Qo,
    }),
    t
  )
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: (e) => e.timeStamp || Date.now(),
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Za = Be(rr),
  Co = Q({}, rr, { view: 0, detail: 0 }),
  oy = Be(Co),
  Us,
  Hs,
  gr,
  Yi = Q({}, Co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: el,
    button: 0,
    buttons: 0,
    relatedTarget: (e) =>
      e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget,
    movementX: (e) =>
      'movementX' in e
        ? e.movementX
        : (e !== gr &&
            (gr && e.type === 'mousemove'
              ? ((Us = e.screenX - gr.screenX), (Hs = e.screenY - gr.screenY))
              : (Hs = Us = 0),
            (gr = e)),
          Us),
    movementY: (e) => ('movementY' in e ? e.movementY : Hs),
  }),
  Ac = Be(Yi),
  iy = Q({}, Yi, { dataTransfer: 0 }),
  sy = Be(iy),
  uy = Q({}, Co, { relatedTarget: 0 }),
  Gs = Be(uy),
  ay = Q({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ly = Be(ay),
  cy = Q({}, rr, {
    clipboardData: (e) =>
      'clipboardData' in e ? e.clipboardData : window.clipboardData,
  }),
  fy = Be(cy),
  dy = Q({}, rr, { data: 0 }),
  _c = Be(dy),
  py = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  hy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  my = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function yy(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = my[e]) ? !!t[e] : !1
}
function el() {
  return yy
}
var gy = Q({}, Co, {
    key: (e) => {
      if (e.key) {
        var t = py[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? hy[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: el,
    charCode: (e) => (e.type === 'keypress' ? fi(e) : 0),
    keyCode: (e) =>
      e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0,
    which: (e) =>
      e.type === 'keypress'
        ? fi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0,
  }),
  vy = Be(gy),
  wy = Q({}, Yi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rc = Be(wy),
  by = Q({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: el,
  }),
  xy = Be(by),
  Ey = Q({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Py = Be(Ey),
  Sy = Q({}, Yi, {
    deltaX: (e) =>
      'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0,
    deltaY: (e) =>
      'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0,
    deltaZ: 0,
    deltaMode: 0,
  }),
  ky = Be(Sy),
  Cy = [9, 13, 27, 32],
  tl = gt && 'CompositionEvent' in window,
  _r = null
gt && 'documentMode' in document && (_r = document.documentMode)
var Ty = gt && 'TextEvent' in window && !_r,
  ep = gt && (!tl || (_r && 8 < _r && 11 >= _r)),
  Fc = ' ',
  Ic = !1
function tp(e, t) {
  switch (e) {
    case 'keyup':
      return Cy.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function np(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Tn = !1
function Oy(e, t) {
  switch (e) {
    case 'compositionend':
      return np(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Ic = !0), Fc)
    case 'textInput':
      return (e = t.data), e === Fc && Ic ? null : e
    default:
      return null
  }
}
function Ny(e, t) {
  if (Tn)
    return e === 'compositionend' || (!tl && tp(e, t))
      ? ((e = Zd()), (ci = Ya = Ft = null), (Tn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return ep && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Ay = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Bc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Ay[e.type] : t === 'textarea'
}
function rp(e, t, n, r) {
  Id(r),
    (t = Ai(t, 'onChange')),
    0 < t.length &&
      ((n = new Za('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Rr = null,
  Vr = null
function _y(e) {
  hp(e, 0)
}
function Zi(e) {
  var t = An(e)
  if (Td(t)) return e
}
function Ry(e, t) {
  if (e === 'change') return t
}
var op = !1
if (gt) {
  var Vs
  if (gt) {
    var Ws = 'oninput' in document
    if (!Ws) {
      var zc = document.createElement('div')
      zc.setAttribute('oninput', 'return;'),
        (Ws = typeof zc.oninput == 'function')
    }
    Vs = Ws
  } else Vs = !1
  op = Vs && (!document.documentMode || 9 < document.documentMode)
}
function jc() {
  Rr && (Rr.detachEvent('onpropertychange', ip), (Vr = Rr = null))
}
function ip(e) {
  if (e.propertyName === 'value' && Zi(Vr)) {
    var t = []
    rp(t, Vr, e, qa(e)), $d(_y, t)
  }
}
function Fy(e, t, n) {
  e === 'focusin'
    ? (jc(), (Rr = t), (Vr = n), Rr.attachEvent('onpropertychange', ip))
    : e === 'focusout' && jc()
}
function Iy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Zi(Vr)
}
function By(e, t) {
  if (e === 'click') return Zi(t)
}
function zy(e, t) {
  if (e === 'input' || e === 'change') return Zi(t)
}
function jy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Je = typeof Object.is == 'function' ? Object.is : jy
function Wr(e, t) {
  if (Je(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!wu.call(t, o) || !Je(e[o], t[o])) return !1
  }
  return !0
}
function $c(e) {
  while (e && e.firstChild) e = e.firstChild
  return e
}
function Lc(e, t) {
  var n = $c(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      while (n) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = $c(n)
  }
}
function sp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? sp(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function up() {
  for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Pi(e.document)
  }
  return t
}
function nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function $y(e) {
  var t = up(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Lc(n, i))
        var s = Lc(n, r)
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Ly = gt && 'documentMode' in document && 11 >= document.documentMode,
  On = null,
  $u = null,
  Fr = null,
  Lu = !1
function Mc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Lu ||
    On == null ||
    On !== Pi(r) ||
    ((r = On),
    'selectionStart' in r && nl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Wr(Fr, r)) ||
      ((Fr = r),
      (r = Ai($u, 'onSelect')),
      0 < r.length &&
        ((t = new Za('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))))
}
function Ko(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Nn = {
    animationend: Ko('Animation', 'AnimationEnd'),
    animationiteration: Ko('Animation', 'AnimationIteration'),
    animationstart: Ko('Animation', 'AnimationStart'),
    transitionend: Ko('Transition', 'TransitionEnd'),
  },
  qs = {},
  ap = {}
gt &&
  ((ap = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
  'TransitionEvent' in window || delete Nn.transitionend.transition)
function es(e) {
  if (qs[e]) return qs[e]
  if (!Nn[e]) return e
  var t = Nn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in ap) return (qs[e] = t[n])
  return e
}
var lp = es('animationend'),
  cp = es('animationiteration'),
  fp = es('animationstart'),
  dp = es('transitionend'),
  pp = new Map(),
  Dc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function Yt(e, t) {
  pp.set(e, t), En(t, [e])
}
for (var Qs = 0; Qs < Dc.length; Qs++) {
  var Ks = Dc[Qs],
    My = Ks.toLowerCase(),
    Dy = Ks[0].toUpperCase() + Ks.slice(1)
  Yt(My, 'on' + Dy)
}
Yt(lp, 'onAnimationEnd')
Yt(cp, 'onAnimationIteration')
Yt(fp, 'onAnimationStart')
Yt('dblclick', 'onDoubleClick')
Yt('focusin', 'onFocus')
Yt('focusout', 'onBlur')
Yt(dp, 'onTransitionEnd')
Wn('onMouseEnter', ['mouseout', 'mouseover'])
Wn('onMouseLeave', ['mouseout', 'mouseover'])
Wn('onPointerEnter', ['pointerout', 'pointerover'])
Wn('onPointerLeave', ['pointerout', 'pointerover'])
En(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
En(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
En('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
En(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
En(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
En(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var Or =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Uy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Or))
function Uc(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Mm(r, t, void 0, e), (e.currentTarget = null)
}
function hp(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var u = r[s],
            a = u.instance,
            l = u.currentTarget
          if (((u = u.listener), a !== i && o.isPropagationStopped())) break e
          Uc(o, u, l), (i = a)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((u = r[s]),
            (a = u.instance),
            (l = u.currentTarget),
            (u = u.listener),
            a !== i && o.isPropagationStopped())
          )
            break e
          Uc(o, u, l), (i = a)
        }
    }
  }
  if (ki) throw ((e = Iu), (ki = !1), (Iu = null), e)
}
function H(e, t) {
  var n = t[Gu]
  n === void 0 && (n = t[Gu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (mp(t, e, 2, !1), n.add(r))
}
function Js(e, t, n) {
  var r = 0
  t && (r |= 4), mp(n, e, r, t)
}
var Jo = '_reactListening' + Math.random().toString(36).slice(2)
function qr(e) {
  if (!e[Jo]) {
    ;(e[Jo] = !0),
      Ed.forEach((n) => {
        n !== 'selectionchange' && (Uy.has(n) || Js(n, !1, e), Js(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Jo] || ((t[Jo] = !0), Js('selectionchange', !1, t))
  }
}
function mp(e, t, n, r) {
  switch (Yd(t)) {
    case 1:
      var o = ny
      break
    case 4:
      o = ry
      break
    default:
      o = Xa
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Fu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function Xs(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var u = r.stateNode.containerInfo
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            s = s.return
          }
        while (u !== null) {
          if (((s = ln(u)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  $d(() => {
    var l = i,
      f = qa(n),
      c = []
    e: {
      var d = pp.get(e)
      if (d !== void 0) {
        var v = Za,
          g = e
        switch (e) {
          case 'keypress':
            if (fi(n) === 0) break e
          case 'keydown':
          case 'keyup':
            v = vy
            break
          case 'focusin':
            ;(g = 'focus'), (v = Gs)
            break
          case 'focusout':
            ;(g = 'blur'), (v = Gs)
            break
          case 'beforeblur':
          case 'afterblur':
            v = Gs
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Ac
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = sy
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = xy
            break
          case lp:
          case cp:
          case fp:
            v = ly
            break
          case dp:
            v = Py
            break
          case 'scroll':
            v = oy
            break
          case 'wheel':
            v = ky
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = fy
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Rc
        }
        var m = (t & 4) !== 0,
          b = !m && e === 'scroll',
          p = m ? (d !== null ? d + 'Capture' : null) : d
        m = []
        for (var h = l, y; h !== null; ) {
          y = h
          var w = y.stateNode
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              p !== null && ((w = Dr(h, p)), w != null && m.push(Qr(h, w, y)))),
            b)
          )
            break
          h = h.return
        }
        0 < m.length &&
          ((d = new v(d, g, null, n, f)), c.push({ event: d, listeners: m }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== _u &&
            (g = n.relatedTarget || n.fromElement) &&
            (ln(g) || g[vt]))
        )
          break e
        if (
          (v || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = l),
              (g = g ? ln(g) : null),
              g !== null &&
                ((b = Pn(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = l)),
          v !== g)
        ) {
          if (
            ((m = Ac),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = Rc),
              (w = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (b = v == null ? d : An(v)),
            (y = g == null ? d : An(g)),
            (d = new m(w, h + 'leave', v, n, f)),
            (d.target = b),
            (d.relatedTarget = y),
            (w = null),
            ln(f) === l &&
              ((m = new m(p, h + 'enter', g, n, f)),
              (m.target = y),
              (m.relatedTarget = b),
              (w = m)),
            (b = w),
            v && g)
          )
            t: {
              for (m = v, p = g, h = 0, y = m; y; y = Sn(y)) h++
              for (y = 0, w = p; w; w = Sn(w)) y++
              while (0 < h - y) (m = Sn(m)), h--
              while (0 < y - h) (p = Sn(p)), y--
              while (h--) {
                if (m === p || (p !== null && m === p.alternate)) break t
                ;(m = Sn(m)), (p = Sn(p))
              }
              m = null
            }
          else m = null
          v !== null && Hc(c, d, v, m, !1),
            g !== null && b !== null && Hc(c, b, g, m, !0)
        }
      }
      e: {
        if (
          ((d = l ? An(l) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var S = Ry
        else if (Bc(d))
          if (op) S = zy
          else {
            S = Iy
            var x = Fy
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = By)
        if (S && (S = S(e, l))) {
          rp(c, S, n, f)
          break e
        }
        x && x(e, d, l),
          e === 'focusout' &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === 'number' &&
            Cu(d, 'number', d.value)
      }
      switch (((x = l ? An(l) : window), e)) {
        case 'focusin':
          ;(Bc(x) || x.contentEditable === 'true') &&
            ((On = x), ($u = l), (Fr = null))
          break
        case 'focusout':
          Fr = $u = On = null
          break
        case 'mousedown':
          Lu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Lu = !1), Mc(c, n, f)
          break
        case 'selectionchange':
          if (Ly) break
        case 'keydown':
        case 'keyup':
          Mc(c, n, f)
      }
      var P
      if (tl)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        Tn
          ? tp(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (ep &&
          n.locale !== 'ko' &&
          (Tn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Tn && (P = Zd())
            : ((Ft = f),
              (Ya = 'value' in Ft ? Ft.value : Ft.textContent),
              (Tn = !0))),
        (x = Ai(l, T)),
        0 < x.length &&
          ((T = new _c(T, e, null, n, f)),
          c.push({ event: T, listeners: x }),
          P ? (T.data = P) : ((P = np(n)), P !== null && (T.data = P)))),
        (P = Ty ? Oy(e, n) : Ny(e, n)) &&
          ((l = Ai(l, 'onBeforeInput')),
          0 < l.length &&
            ((f = new _c('onBeforeInput', 'beforeinput', null, n, f)),
            c.push({ event: f, listeners: l }),
            (f.data = P)))
    }
    hp(c, t)
  })
}
function Qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Ai(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Dr(e, n)),
      i != null && r.unshift(Qr(e, i, o)),
      (i = Dr(e, t)),
      i != null && r.push(Qr(e, i, o))),
      (e = e.return)
  }
  return r
}
function Sn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Hc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      l = u.stateNode
    if (a !== null && a === r) break
    u.tag === 5 &&
      l !== null &&
      ((u = l),
      o
        ? ((a = Dr(n, i)), a != null && s.unshift(Qr(n, a, u)))
        : o || ((a = Dr(n, i)), a != null && s.push(Qr(n, a, u)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var Hy = /\r\n?/g,
  Gy = /\u0000|\uFFFD/g
function Gc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Hy,
      `
`,
    )
    .replace(Gy, '')
}
function Xo(e, t, n) {
  if (((t = Gc(t)), Gc(e) !== t && n)) throw Error(C(425))
}
function _i() {}
var Mu = null,
  Du = null
function Uu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Hu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Vy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Vc = typeof Promise == 'function' ? Promise : void 0,
  Wy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Vc < 'u'
        ? (e) => Vc.resolve(null).then(e).catch(qy)
        : Hu
function qy(e) {
  setTimeout(() => {
    throw e
  })
}
function Ys(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Gr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Gr(t)
}
function $t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Wc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var or = Math.random().toString(36).slice(2),
  tt = '__reactFiber$' + or,
  Kr = '__reactProps$' + or,
  vt = '__reactContainer$' + or,
  Gu = '__reactEvents$' + or,
  Qy = '__reactListeners$' + or,
  Ky = '__reactHandles$' + or
function ln(e) {
  var t = e[tt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wc(e); e !== null; ) {
          if ((n = e[tt])) return n
          e = Wc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function To(e) {
  return (
    (e = e[tt] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(C(33))
}
function ts(e) {
  return e[Kr] || null
}
var Vu = [],
  _n = -1
function Zt(e) {
  return { current: e }
}
function G(e) {
  0 > _n || ((e.current = Vu[_n]), (Vu[_n] = null), _n--)
}
function U(e, t) {
  _n++, (Vu[_n] = e.current), (e.current = t)
}
var Vt = {},
  me = Zt(Vt),
  Se = Zt(!1),
  hn = Vt
function qn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Vt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function ke(e) {
  return (e = e.childContextTypes), e != null
}
function Ri() {
  G(Se), G(me)
}
function qc(e, t, n) {
  if (me.current !== Vt) throw Error(C(168))
  U(me, t), U(Se, n)
}
function yp(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(C(108, Fm(e) || 'Unknown', o))
  return Q({}, n, r)
}
function Fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (hn = me.current),
    U(me, e),
    U(Se, Se.current),
    !0
  )
}
function Qc(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(C(169))
  n
    ? ((e = yp(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Se),
      G(me),
      U(me, e))
    : G(Se),
    U(Se, n)
}
var ct = null,
  ns = !1,
  Zs = !1
function gp(e) {
  ct === null ? (ct = [e]) : ct.push(e)
}
function Jy(e) {
  ;(ns = !0), gp(e)
}
function en() {
  if (!Zs && ct !== null) {
    Zs = !0
    var e = 0,
      t = D
    try {
      var n = ct
      for (D = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(ct = null), (ns = !1)
    } catch (o) {
      throw (ct !== null && (ct = ct.slice(e + 1)), Ud(Qa, en), o)
    } finally {
      ;(D = t), (Zs = !1)
    }
  }
  return null
}
var Rn = [],
  Fn = 0,
  Ii = null,
  Bi = 0,
  ze = [],
  je = 0,
  mn = null,
  ft = 1,
  dt = ''
function sn(e, t) {
  ;(Rn[Fn++] = Bi), (Rn[Fn++] = Ii), (Ii = e), (Bi = t)
}
function vp(e, t, n) {
  ;(ze[je++] = ft), (ze[je++] = dt), (ze[je++] = mn), (mn = e)
  var r = ft
  e = dt
  var o = 32 - Qe(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - Qe(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;(i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (ft = (1 << (32 - Qe(t) + o)) | (n << o) | r),
      (dt = i + e)
  } else (ft = (1 << i) | (n << o) | r), (dt = e)
}
function rl(e) {
  e.return !== null && (sn(e, 1), vp(e, 1, 0))
}
function ol(e) {
  while (e === Ii)
    (Ii = Rn[--Fn]), (Rn[Fn] = null), (Bi = Rn[--Fn]), (Rn[Fn] = null)
  while (e === mn)
    (mn = ze[--je]),
      (ze[je] = null),
      (dt = ze[--je]),
      (ze[je] = null),
      (ft = ze[--je]),
      (ze[je] = null)
}
var _e = null,
  Ae = null,
  V = !1,
  qe = null
function wp(e, t) {
  var n = $e(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Kc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Ae = $t(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Ae = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mn !== null ? { id: ft, overflow: dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Ae = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function qu(e) {
  if (V) {
    var t = Ae
    if (t) {
      var n = t
      if (!Kc(e, t)) {
        if (Wu(e)) throw Error(C(418))
        t = $t(n.nextSibling)
        var r = _e
        t && Kc(e, t)
          ? wp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (_e = e))
      }
    } else {
      if (Wu(e)) throw Error(C(418))
      ;(e.flags = (e.flags & -4097) | 2), (V = !1), (_e = e)
    }
  }
}
function Jc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  _e = e
}
function Yo(e) {
  if (e !== _e) return !1
  if (!V) return Jc(e), (V = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Uu(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Wu(e)) throw (bp(), Error(C(418)))
    while (t) wp(e, t), (t = $t(t.nextSibling))
  }
  if ((Jc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Ae = $t(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ae = null
    }
  } else Ae = _e ? $t(e.stateNode.nextSibling) : null
  return !0
}
function bp() {
  for (var e = Ae; e; ) e = $t(e.nextSibling)
}
function Qn() {
  ;(Ae = _e = null), (V = !1)
}
function il(e) {
  qe === null ? (qe = [e]) : qe.push(e)
}
var Xy = St.ReactCurrentBatchConfig
function Ve(e, t) {
  if (e && e.defaultProps) {
    ;(t = Q({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var zi = Zt(null),
  ji = null,
  In = null,
  sl = null
function ul() {
  sl = In = ji = null
}
function al(e) {
  var t = zi.current
  G(zi), (e._currentValue = t)
}
function Qu(e, t, n) {
  while (e !== null) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Un(e, t) {
  ;(ji = e),
    (sl = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null))
}
function De(e) {
  var t = e._currentValue
  if (sl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (ji === null) throw Error(C(308))
      ;(In = e), (ji.dependencies = { lanes: 0, firstContext: e })
    } else In = In.next = e
  return t
}
var cn = null
function ll(e) {
  cn === null ? (cn = [e]) : cn.push(e)
}
function xp(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), ll(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    wt(e, r)
  )
}
function wt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var At = !1
function cl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Ep(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Lt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), L & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      wt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ll(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    wt(e, n)
  )
}
function di(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ka(e, n)
  }
}
function Xc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function $i(e, t, n, r) {
  var o = e.updateQueue
  At = !1
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    u = o.shared.pending
  if (u !== null) {
    o.shared.pending = null
    var a = u,
      l = a.next
    ;(a.next = null), s === null ? (i = l) : (s.next = l), (s = a)
    var f = e.alternate
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== s &&
        (u === null ? (f.firstBaseUpdate = l) : (u.next = l),
        (f.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var c = o.baseState
    ;(s = 0), (f = l = a = null), (u = i)
    do {
      var d = u.lane,
        v = u.eventTime
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            })
        e: {
          var g = e,
            m = u
          switch (((d = t), (v = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == 'function')) {
                c = g.call(v, c, d)
                break e
              }
              c = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (
                ((g = m.payload),
                (d = typeof g == 'function' ? g.call(v, c, d) : g),
                d == null)
              )
                break e
              c = Q({}, c, d)
              break e
            case 2:
              At = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [u]) : d.push(u))
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((l = f = v), (a = c)) : (f = f.next = v),
          (s |= d)
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break
        ;(d = u),
          (u = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (f === null && (a = c),
      (o.baseState = a),
      (o.firstBaseUpdate = l),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (s |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(gn |= s), (e.lanes = s), (e.memoizedState = c)
  }
}
function Yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(C(191, o))
        o.call(r)
      }
    }
}
var Pp = new xd.Component().refs
function Ku(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var rs = {
  isMounted: (e) => ((e = e._reactInternals) ? Pn(e) === e : !1),
  enqueueSetState: (e, t, n) => {
    e = e._reactInternals
    var r = ve(),
      o = Dt(e),
      i = pt(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = Lt(e, i, o)),
      t !== null && (Ke(t, e, o, r), di(t, e, o))
  },
  enqueueReplaceState: (e, t, n) => {
    e = e._reactInternals
    var r = ve(),
      o = Dt(e),
      i = pt(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Lt(e, i, o)),
      t !== null && (Ke(t, e, o, r), di(t, e, o))
  },
  enqueueForceUpdate: (e, t) => {
    e = e._reactInternals
    var n = ve(),
      r = Dt(e),
      o = pt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Lt(e, o, r)),
      t !== null && (Ke(t, e, r, n), di(t, e, r))
  },
}
function Zc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Wr(n, r) || !Wr(o, i)
        : !0
  )
}
function Sp(e, t, n) {
  var r = !1,
    o = Vt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = De(i))
      : ((o = ke(t) ? hn : me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qn(e, o) : Vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function ef(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rs.enqueueReplaceState(t, t.state, null)
}
function Ju(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = Pp), cl(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = De(i))
    : ((i = ke(t) ? hn : me.current), (o.context = qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ku(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rs.enqueueReplaceState(o, o.state, null),
      $i(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309))
        var r = n.stateNode
      }
      if (!r) throw Error(C(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = (s) => {
            var u = o.refs
            u === Pp && (u = o.refs = {}), s === null ? delete u[i] : (u[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(C(284))
    if (!n._owner) throw Error(C(290, e))
  }
  return e
}
function Zo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function tf(e) {
  var t = e._init
  return t(e._payload)
}
function kp(e) {
  function t(p, h) {
    if (e) {
      var y = p.deletions
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h)
    }
  }
  function n(p, h) {
    if (!e) return null
    while (h !== null) t(p, h), (h = h.sibling)
    return null
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling)
    return p
  }
  function o(p, h) {
    return (p = Ut(p, h)), (p.index = 0), (p.sibling = null), p
  }
  function i(p, h, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    )
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function u(p, h, y, w) {
    return h === null || h.tag !== 6
      ? ((h = su(y, p.mode, w)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h)
  }
  function a(p, h, y, w) {
    var S = y.type
    return S === Cn
      ? f(p, h, y.props.children, w, y.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == 'object' &&
              S !== null &&
              S.$$typeof === Nt &&
              tf(S) === h.type))
        ? ((w = o(h, y.props)), (w.ref = vr(p, h, y)), (w.return = p), w)
        : ((w = vi(y.type, y.key, y.props, null, p.mode, w)),
          (w.ref = vr(p, h, y)),
          (w.return = p),
          w)
  }
  function l(p, h, y, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = uu(y, p.mode, w)), (h.return = p), h)
      : ((h = o(h, y.children || [])), (h.return = p), h)
  }
  function f(p, h, y, w, S) {
    return h === null || h.tag !== 7
      ? ((h = pn(y, p.mode, w, S)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h)
  }
  function c(p, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = su('' + h, p.mode, y)), (h.return = p), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Uo:
          return (
            (y = vi(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = vr(p, null, h)),
            (y.return = p),
            y
          )
        case kn:
          return (h = uu(h, p.mode, y)), (h.return = p), h
        case Nt:
          var w = h._init
          return c(p, w(h._payload), y)
      }
      if (Cr(h) || pr(h)) return (h = pn(h, p.mode, y, null)), (h.return = p), h
      Zo(p, h)
    }
    return null
  }
  function d(p, h, y, w) {
    var S = h !== null ? h.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return S !== null ? null : u(p, h, '' + y, w)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Uo:
          return y.key === S ? a(p, h, y, w) : null
        case kn:
          return y.key === S ? l(p, h, y, w) : null
        case Nt:
          return (S = y._init), d(p, h, S(y._payload), w)
      }
      if (Cr(y) || pr(y)) return S !== null ? null : f(p, h, y, w, null)
      Zo(p, y)
    }
    return null
  }
  function v(p, h, y, w, S) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(y) || null), u(h, p, '' + w, S)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Uo:
          return (p = p.get(w.key === null ? y : w.key) || null), a(h, p, w, S)
        case kn:
          return (p = p.get(w.key === null ? y : w.key) || null), l(h, p, w, S)
        case Nt:
          var x = w._init
          return v(p, h, y, x(w._payload), S)
      }
      if (Cr(w) || pr(w)) return (p = p.get(y) || null), f(h, p, w, S, null)
      Zo(h, w)
    }
    return null
  }
  function g(p, h, y, w) {
    for (
      var S = null, x = null, P = h, T = (h = 0), A = null;
      P !== null && T < y.length;
      T++
    ) {
      P.index > T ? ((A = P), (P = null)) : (A = P.sibling)
      var _ = d(p, P, y[T], w)
      if (_ === null) {
        P === null && (P = A)
        break
      }
      e && P && _.alternate === null && t(p, P),
        (h = i(_, h, T)),
        x === null ? (S = _) : (x.sibling = _),
        (x = _),
        (P = A)
    }
    if (T === y.length) return n(p, P), V && sn(p, T), S
    if (P === null) {
      for (; T < y.length; T++)
        (P = c(p, y[T], w)),
          P !== null &&
            ((h = i(P, h, T)), x === null ? (S = P) : (x.sibling = P), (x = P))
      return V && sn(p, T), S
    }
    for (P = r(p, P); T < y.length; T++)
      (A = v(P, p, T, y[T], w)),
        A !== null &&
          (e && A.alternate !== null && P.delete(A.key === null ? T : A.key),
          (h = i(A, h, T)),
          x === null ? (S = A) : (x.sibling = A),
          (x = A))
    return e && P.forEach((M) => t(p, M)), V && sn(p, T), S
  }
  function m(p, h, y, w) {
    var S = pr(y)
    if (typeof S != 'function') throw Error(C(150))
    if (((y = S.call(y)), y == null)) throw Error(C(151))
    for (
      var x = (S = null), P = h, T = (h = 0), A = null, _ = y.next();
      P !== null && !_.done;
      T++, _ = y.next()
    ) {
      P.index > T ? ((A = P), (P = null)) : (A = P.sibling)
      var M = d(p, P, _.value, w)
      if (M === null) {
        P === null && (P = A)
        break
      }
      e && P && M.alternate === null && t(p, P),
        (h = i(M, h, T)),
        x === null ? (S = M) : (x.sibling = M),
        (x = M),
        (P = A)
    }
    if (_.done) return n(p, P), V && sn(p, T), S
    if (P === null) {
      for (; !_.done; T++, _ = y.next())
        (_ = c(p, _.value, w)),
          _ !== null &&
            ((h = i(_, h, T)), x === null ? (S = _) : (x.sibling = _), (x = _))
      return V && sn(p, T), S
    }
    for (P = r(p, P); !_.done; T++, _ = y.next())
      (_ = v(P, p, T, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? T : _.key),
          (h = i(_, h, T)),
          x === null ? (S = _) : (x.sibling = _),
          (x = _))
    return e && P.forEach((ye) => t(p, ye)), V && sn(p, T), S
  }
  function b(p, h, y, w) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Cn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Uo:
          e: {
            for (var S = y.key, x = h; x !== null; ) {
              if (x.key === S) {
                if (((S = y.type), S === Cn)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (h = o(x, y.props.children)),
                      (h.return = p),
                      (p = h)
                    break e
                  }
                } else if (
                  x.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === Nt &&
                    tf(S) === x.type)
                ) {
                  n(p, x.sibling),
                    (h = o(x, y.props)),
                    (h.ref = vr(p, x, y)),
                    (h.return = p),
                    (p = h)
                  break e
                }
                n(p, x)
                break
              } else t(p, x)
              x = x.sibling
            }
            y.type === Cn
              ? ((h = pn(y.props.children, p.mode, w, y.key)),
                (h.return = p),
                (p = h))
              : ((w = vi(y.type, y.key, y.props, null, p.mode, w)),
                (w.ref = vr(p, h, y)),
                (w.return = p),
                (p = w))
          }
          return s(p)
        case kn:
          e: {
            for (x = y.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = p),
                    (p = h)
                  break e
                } else {
                  n(p, h)
                  break
                }
              else t(p, h)
              h = h.sibling
            }
            ;(h = uu(y, p.mode, w)), (h.return = p), (p = h)
          }
          return s(p)
        case Nt:
          return (x = y._init), b(p, h, x(y._payload), w)
      }
      if (Cr(y)) return g(p, h, y, w)
      if (pr(y)) return m(p, h, y, w)
      Zo(p, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, y)), (h.return = p), (p = h))
          : (n(p, h), (h = su(y, p.mode, w)), (h.return = p), (p = h)),
        s(p))
      : n(p, h)
  }
  return b
}
var Kn = kp(!0),
  Cp = kp(!1),
  Oo = {},
  ot = Zt(Oo),
  Jr = Zt(Oo),
  Xr = Zt(Oo)
function fn(e) {
  if (e === Oo) throw Error(C(174))
  return e
}
function fl(e, t) {
  switch ((U(Xr, t), U(Jr, e), U(ot, Oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ou(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ou(t, e))
  }
  G(ot), U(ot, t)
}
function Jn() {
  G(ot), G(Jr), G(Xr)
}
function Tp(e) {
  fn(Xr.current)
  var t = fn(ot.current),
    n = Ou(t, e.type)
  t !== n && (U(Jr, e), U(ot, n))
}
function dl(e) {
  Jr.current === e && (G(ot), G(Jr))
}
var W = Zt(0)
function Li(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    while (t.sibling === null) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var eu = []
function pl() {
  for (var e = 0; e < eu.length; e++) eu[e]._workInProgressVersionPrimary = null
  eu.length = 0
}
var pi = St.ReactCurrentDispatcher,
  tu = St.ReactCurrentBatchConfig,
  yn = 0,
  q = null,
  te = null,
  oe = null,
  Mi = !1,
  Ir = !1,
  Yr = 0,
  Yy = 0
function de() {
  throw Error(C(321))
}
function hl(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1
  return !0
}
function ml(e, t, n, r, o, i) {
  if (
    ((yn = i),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pi.current = e === null || e.memoizedState === null ? ng : rg),
    (e = n(r, o)),
    Ir)
  ) {
    i = 0
    do {
      if (((Ir = !1), (Yr = 0), 25 <= i)) throw Error(C(301))
      ;(i += 1),
        (oe = te = null),
        (t.updateQueue = null),
        (pi.current = og),
        (e = n(r, o))
    } while (Ir)
  }
  if (
    ((pi.current = Di),
    (t = te !== null && te.next !== null),
    (yn = 0),
    (oe = te = q = null),
    (Mi = !1),
    t)
  )
    throw Error(C(300))
  return e
}
function yl() {
  var e = Yr !== 0
  return (Yr = 0), e
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return oe === null ? (q.memoizedState = oe = e) : (oe = oe.next = e), oe
}
function Ue() {
  if (te === null) {
    var e = q.alternate
    e = e !== null ? e.memoizedState : null
  } else e = te.next
  var t = oe === null ? q.memoizedState : oe.next
  if (t !== null) (oe = t), (te = e)
  else {
    if (e === null) throw Error(C(310))
    ;(te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      oe === null ? (q.memoizedState = oe = e) : (oe = oe.next = e)
  }
  return oe
}
function Zr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function nu(e) {
  var t = Ue(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = te,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var s = o.next
      ;(o.next = i.next), (i.next = s)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var u = (s = null),
      a = null,
      l = i
    do {
      var f = l.lane
      if ((yn & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : e(r, l.action))
      else {
        var c = {
          lane: f,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        }
        a === null ? ((u = a = c), (s = r)) : (a = a.next = c),
          (q.lanes |= f),
          (gn |= f)
      }
      l = l.next
    } while (l !== null && l !== i)
    a === null ? (s = r) : (a.next = u),
      Je(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (q.lanes |= i), (gn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ru(e) {
  var t = Ue(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do (i = e(i, s.action)), (s = s.next)
    while (s !== o)
    Je(i, t.memoizedState) || (Ee = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Op() {}
function Np(e, t) {
  var n = q,
    r = Ue(),
    o = t(),
    i = !Je(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Ee = !0)),
    (r = r.queue),
    gl(Rp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      eo(9, _p.bind(null, n, r, o, t), void 0, null),
      ie === null)
    )
      throw Error(C(349))
    yn & 30 || Ap(n, t, o)
  }
  return o
}
function Ap(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function _p(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Fp(t) && Ip(e)
}
function Rp(e, t, n) {
  return n(() => {
    Fp(t) && Ip(e)
  })
}
function Fp(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Je(e, n)
  } catch {
    return !0
  }
}
function Ip(e) {
  var t = wt(e, 1)
  t !== null && Ke(t, e, 1, -1)
}
function nf(e) {
  var t = et()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tg.bind(null, q, e)),
    [t.memoizedState, e]
  )
}
function eo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Bp() {
  return Ue().memoizedState
}
function hi(e, t, n, r) {
  var o = et()
  ;(q.flags |= e),
    (o.memoizedState = eo(1 | t, n, void 0, r === void 0 ? null : r))
}
function os(e, t, n, r) {
  var o = Ue()
  r = r === void 0 ? null : r
  var i = void 0
  if (te !== null) {
    var s = te.memoizedState
    if (((i = s.destroy), r !== null && hl(r, s.deps))) {
      o.memoizedState = eo(t, n, i, r)
      return
    }
  }
  ;(q.flags |= e), (o.memoizedState = eo(1 | t, n, i, r))
}
function rf(e, t) {
  return hi(8390656, 8, e, t)
}
function gl(e, t) {
  return os(2048, 8, e, t)
}
function zp(e, t) {
  return os(4, 2, e, t)
}
function jp(e, t) {
  return os(4, 4, e, t)
}
function $p(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      () => {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      () => {
        t.current = null
      }
    )
}
function Lp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), os(4, 4, $p.bind(null, t, e), n)
  )
}
function vl() {}
function Mp(e, t) {
  var n = Ue()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && hl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Dp(e, t) {
  var n = Ue()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && hl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Up(e, t, n) {
  return yn & 21
    ? (Je(n, t) || ((n = Vd()), (q.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n))
}
function Zy(e, t) {
  var n = D
  ;(D = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = tu.transition
  tu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(D = n), (tu.transition = r)
  }
}
function Hp() {
  return Ue().memoizedState
}
function eg(e, t, n) {
  var r = Dt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gp(e))
  )
    Vp(t, n)
  else if (((n = xp(e, t, n, r)), n !== null)) {
    var o = ve()
    Ke(n, e, r, o), Wp(n, t, r)
  }
}
function tg(e, t, n) {
  var r = Dt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Gp(e)) Vp(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          u = i(s, n)
        if (((o.hasEagerState = !0), (o.eagerState = u), Je(u, s))) {
          var a = t.interleaved
          a === null
            ? ((o.next = o), ll(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = xp(e, t, o, r)),
      n !== null && ((o = ve()), Ke(n, e, r, o), Wp(n, t, r))
  }
}
function Gp(e) {
  var t = e.alternate
  return e === q || (t !== null && t === q)
}
function Vp(e, t) {
  Ir = Mi = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ka(e, n)
  }
}
var Di = {
    readContext: De,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  ng = {
    readContext: De,
    useCallback: (e, t) => (
      (et().memoizedState = [e, t === void 0 ? null : t]), e
    ),
    useContext: De,
    useEffect: rf,
    useImperativeHandle: (e, t, n) => (
      (n = n != null ? n.concat([e]) : null),
      hi(4194308, 4, $p.bind(null, t, e), n)
    ),
    useLayoutEffect: (e, t) => hi(4194308, 4, e, t),
    useInsertionEffect: (e, t) => hi(4, 2, e, t),
    useMemo: (e, t) => {
      var n = et()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: (e, t, n) => {
      var r = et()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = eg.bind(null, q, e)),
        [r.memoizedState, e]
      )
    },
    useRef: (e) => {
      var t = et()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: nf,
    useDebugValue: vl,
    useDeferredValue: (e) => (et().memoizedState = e),
    useTransition: () => {
      var e = nf(!1),
        t = e[0]
      return (e = Zy.bind(null, e[1])), (et().memoizedState = e), [t, e]
    },
    useMutableSource: () => {},
    useSyncExternalStore: (e, t, n) => {
      var r = q,
        o = et()
      if (V) {
        if (n === void 0) throw Error(C(407))
        n = n()
      } else {
        if (((n = t()), ie === null)) throw Error(C(349))
        yn & 30 || Ap(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        rf(Rp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        eo(9, _p.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: () => {
      var e = et(),
        t = ie.identifierPrefix
      if (V) {
        var n = dt,
          r = ft
        ;(n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Yr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Yy++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  rg = {
    readContext: De,
    useCallback: Mp,
    useContext: De,
    useEffect: gl,
    useImperativeHandle: Lp,
    useInsertionEffect: zp,
    useLayoutEffect: jp,
    useMemo: Dp,
    useReducer: nu,
    useRef: Bp,
    useState: () => nu(Zr),
    useDebugValue: vl,
    useDeferredValue: (e) => {
      var t = Ue()
      return Up(t, te.memoizedState, e)
    },
    useTransition: () => {
      var e = nu(Zr)[0],
        t = Ue().memoizedState
      return [e, t]
    },
    useMutableSource: Op,
    useSyncExternalStore: Np,
    useId: Hp,
    unstable_isNewReconciler: !1,
  },
  og = {
    readContext: De,
    useCallback: Mp,
    useContext: De,
    useEffect: gl,
    useImperativeHandle: Lp,
    useInsertionEffect: zp,
    useLayoutEffect: jp,
    useMemo: Dp,
    useReducer: ru,
    useRef: Bp,
    useState: () => ru(Zr),
    useDebugValue: vl,
    useDeferredValue: (e) => {
      var t = Ue()
      return te === null ? (t.memoizedState = e) : Up(t, te.memoizedState, e)
    },
    useTransition: () => {
      var e = ru(Zr)[0],
        t = Ue().memoizedState
      return [e, t]
    },
    useMutableSource: Op,
    useSyncExternalStore: Np,
    useId: Hp,
    unstable_isNewReconciler: !1,
  }
function Xn(e, t) {
  try {
    var n = '',
      r = t
    do (n += Rm(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function ou(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Xu(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(() => {
      throw n
    })
  }
}
var ig = typeof WeakMap == 'function' ? WeakMap : Map
function qp(e, t, n) {
  ;(n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = () => {
      Hi || ((Hi = !0), (ua = r)), Xu(e, t)
    }),
    n
  )
}
function Qp(e, t, n) {
  ;(n = pt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = () => r(o)),
      (n.callback = () => {
        Xu(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Xu(e, t),
          typeof r != 'function' &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function of(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new ig()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = wg.bind(null, e, t, n)), t.then(e, e))
}
function sf(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function uf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Lt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var sg = St.ReactCurrentOwner,
  Ee = !1
function ge(e, t, n, r) {
  t.child = e === null ? Cp(t, null, n, r) : Kn(t, e.child, n, r)
}
function af(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    Un(t, o),
    (r = ml(e, t, n, r, i, o)),
    (n = yl()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        bt(e, t, o))
      : (V && n && rl(t), (t.flags |= 1), ge(e, t, r, o), t.child)
  )
}
function lf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Cl(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Kp(e, t, i, r, o))
      : ((e = vi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(s, r) && e.ref === t.ref)
    )
      return bt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Ut(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Kp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Wr(i, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ee = !0)
      else return (t.lanes = e.lanes), bt(e, t, o)
  }
  return Yu(e, t, n, r, o)
}
function Jp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(zn, Ne),
        (Ne |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(zn, Ne),
          (Ne |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(zn, Ne),
        (Ne |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(zn, Ne),
      (Ne |= r)
  return ge(e, t, o, n), t.child
}
function Xp(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Yu(e, t, n, r, o) {
  var i = ke(n) ? hn : me.current
  return (
    (i = qn(t, i)),
    Un(t, o),
    (n = ml(e, t, n, r, i, o)),
    (r = yl()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        bt(e, t, o))
      : (V && r && rl(t), (t.flags |= 1), ge(e, t, n, o), t.child)
  )
}
function cf(e, t, n, r, o) {
  if (ke(n)) {
    var i = !0
    Fi(t)
  } else i = !1
  if ((Un(t, o), t.stateNode === null))
    mi(e, t), Sp(t, n, r), Ju(t, n, r, o), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      u = t.memoizedProps
    s.props = u
    var a = s.context,
      l = n.contextType
    typeof l == 'object' && l !== null
      ? (l = De(l))
      : ((l = ke(n) ? hn : me.current), (l = qn(t, l)))
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((u !== r || a !== l) && ef(t, s, r, l)),
      (At = !1)
    var d = t.memoizedState
    ;(s.state = d),
      $i(t, r, s, o),
      (a = t.memoizedState),
      u !== r || d !== a || Se.current || At
        ? (typeof f == 'function' && (Ku(t, n, f, r), (a = t.memoizedState)),
          (u = At || Zc(t, n, u, r, d, a, l))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = l),
          (r = u))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(s = t.stateNode),
      Ep(e, t),
      (u = t.memoizedProps),
      (l = t.type === t.elementType ? u : Ve(t.type, u)),
      (s.props = l),
      (c = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = De(a))
        : ((a = ke(n) ? hn : me.current), (a = qn(t, a)))
    var v = n.getDerivedStateFromProps
    ;(f =
      typeof v == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((u !== c || d !== a) && ef(t, s, r, a)),
      (At = !1),
      (d = t.memoizedState),
      (s.state = d),
      $i(t, r, s, o)
    var g = t.memoizedState
    u !== c || d !== g || Se.current || At
      ? (typeof v == 'function' && (Ku(t, n, v, r), (g = t.memoizedState)),
        (l = At || Zc(t, n, l, r, d, g, a) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = l))
      : (typeof s.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Zu(e, t, n, r, i, o)
}
function Zu(e, t, n, r, o, i) {
  Xp(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return o && Qc(t, n, !1), bt(e, t, i)
  ;(r = t.stateNode), (sg.current = t)
  var u =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Kn(t, e.child, null, i)), (t.child = Kn(t, null, u, i)))
      : ge(e, t, u, i),
    (t.memoizedState = r.state),
    o && Qc(t, n, !0),
    t.child
  )
}
function Yp(e) {
  var t = e.stateNode
  t.pendingContext
    ? qc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qc(e, t.context, !1),
    fl(e, t.containerInfo)
}
function ff(e, t, n, r, o) {
  return Qn(), il(o), (t.flags |= 256), ge(e, t, n, r), t.child
}
var ea = { dehydrated: null, treeContext: null, retryLane: 0 }
function ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Zp(e, t, n) {
  var r = t.pendingProps,
    o = W.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    u
  if (
    ((u = s) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    U(W, o & 1),
    e === null)
  )
    return (
      qu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = us(s, r, 0, null)),
              (e = pn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ta(n)),
              (t.memoizedState = ea),
              e)
            : wl(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return ug(e, t, s, r, u, o, n)
  if (i) {
    ;(i = r.fallback), (s = t.mode), (o = e.child), (u = o.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ut(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = Ut(u, i)) : ((i = pn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ta(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ea),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Ut(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function wl(e, t) {
  return (
    (t = us({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ei(e, t, n, r) {
  return (
    r !== null && il(r),
    Kn(t, e.child, null, n),
    (e = wl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function ug(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ou(Error(C(422)))), ei(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = us({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = pn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Kn(t, e.child, null, s),
          (t.child.memoizedState = ta(s)),
          (t.memoizedState = ea),
          i)
  if (!(t.mode & 1)) return ei(e, t, s, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(C(419))), (r = ou(i, r, void 0)), ei(e, t, s, r)
  }
  if (((u = (s & e.childLanes) !== 0), Ee || u)) {
    if (((r = ie), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), wt(e, o), Ke(r, e, o, -1))
    }
    return kl(), (r = ou(Error(C(421)))), ei(e, t, s, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ae = $t(o.nextSibling)),
      (_e = t),
      (V = !0),
      (qe = null),
      e !== null &&
        ((ze[je++] = ft),
        (ze[je++] = dt),
        (ze[je++] = mn),
        (ft = e.id),
        (dt = e.overflow),
        (mn = t)),
      (t = wl(t, r.children)),
      (t.flags |= 4096),
      t)
}
function df(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Qu(e.return, t, n)
}
function iu(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function eh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ge(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && df(e, n, t)
        else if (e.tag === 19) df(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break
        while (e.sibling === null) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((U(W, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Li(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          iu(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Li(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        iu(t, !0, n, null, i)
        break
      case 'together':
        iu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function mi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(C(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      (e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function ag(e, t, n) {
  switch (t.tag) {
    case 3:
      Yp(t), Qn()
      break
    case 5:
      Tp(t)
      break
    case 1:
      ke(t.type) && Fi(t)
      break
    case 4:
      fl(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      U(zi, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Zp(e, t, n)
            : (U(W, W.current & 1),
              (e = bt(e, t, n)),
              e !== null ? e.sibling : null)
      U(W, W.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return eh(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        U(W, W.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Jp(e, t, n)
  }
  return bt(e, t, n)
}
var th, na, nh, rh
th = (e, t) => {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    while (n.sibling === null) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
na = () => {}
nh = (e, t, n, r) => {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), fn(ot.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = Su(e, o)), (r = Su(e, r)), (i = [])
        break
      case 'select':
        ;(o = Q({}, o, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = Tu(e, o)), (r = Tu(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = _i)
    }
    Nu(n, r)
    var s
    n = null
    for (l in o)
      if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
        if (l === 'style') {
          var u = o[l]
          for (s in u) u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          l !== 'dangerouslySetInnerHTML' &&
            l !== 'children' &&
            l !== 'suppressContentEditableWarning' &&
            l !== 'suppressHydrationWarning' &&
            l !== 'autoFocus' &&
            (Lr.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null))
    for (l in r) {
      var a = r[l]
      if (
        ((u = o != null ? o[l] : void 0),
        r.hasOwnProperty(l) && a !== u && (a != null || u != null))
      )
        if (l === 'style')
          if (u) {
            for (s in u)
              !u.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''))
            for (s in a)
              a.hasOwnProperty(s) &&
                u[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]))
          } else n || (i || (i = []), i.push(l, n)), (n = a)
        else
          l === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(l, a))
            : l === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(l, '' + a)
              : l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                (Lr.hasOwnProperty(l)
                  ? (a != null && l === 'onScroll' && H('scroll', e),
                    i || u === a || (i = []))
                  : (i = i || []).push(l, a))
    }
    n && (i = i || []).push('style', n)
    var l = i
    ;(t.updateQueue = l) && (t.flags |= 4)
  }
}
rh = (e, t, n, r) => {
  n !== r && (t.flags |= 4)
}
function wr(e, t) {
  if (!V)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function lg(e, t, n) {
  var r = t.pendingProps
  switch ((ol(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null
    case 1:
      return ke(t.type) && Ri(), pe(t), null
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        G(Se),
        G(me),
        pl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (ca(qe), (qe = null)))),
        na(e, t),
        pe(t),
        null
      )
    case 5:
      dl(t)
      var o = fn(Xr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        nh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166))
          return pe(t), null
        }
        if (((e = fn(ot.current)), Yo(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[tt] = t), (r[Kr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              H('cancel', r), H('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              H('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Or.length; o++) H(Or[o], r)
              break
            case 'source':
              H('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              H('error', r), H('load', r)
              break
            case 'details':
              H('toggle', r)
              break
            case 'input':
              bc(r, i), H('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                H('invalid', r)
              break
            case 'textarea':
              Ec(r, i), H('invalid', r)
          }
          Nu(n, i), (o = null)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var u = i[s]
              s === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xo(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xo(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : Lr.hasOwnProperty(s) &&
                  u != null &&
                  s === 'onScroll' &&
                  H('scroll', r)
            }
          switch (n) {
            case 'input':
              Ho(r), xc(r, i, !0)
              break
            case 'textarea':
              Ho(r), Pc(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = _i)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ad(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[tt] = t),
            (e[Kr] = r),
            th(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Au(n, r)), n)) {
              case 'dialog':
                H('cancel', e), H('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                H('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Or.length; o++) H(Or[o], e)
                o = r
                break
              case 'source':
                H('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                H('error', e), H('load', e), (o = r)
                break
              case 'details':
                H('toggle', e), (o = r)
                break
              case 'input':
                bc(e, r), (o = Su(e, r)), H('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Q({}, r, { value: void 0 })),
                  H('invalid', e)
                break
              case 'textarea':
                Ec(e, r), (o = Tu(e, r)), H('invalid', e)
                break
              default:
                o = r
            }
            Nu(n, o), (u = o)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i]
                i === 'style'
                  ? Fd(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && _d(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && Mr(e, a)
                        : typeof a == 'number' && Mr(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Lr.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && H('scroll', e)
                          : a != null && Ha(e, i, a, s))
              }
            switch (n) {
              case 'input':
                Ho(e), xc(e, r, !1)
                break
              case 'textarea':
                Ho(e), Pc(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Gt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? $n(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      $n(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = _i)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return pe(t), null
    case 6:
      if (e && t.stateNode != null) rh(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166))
        if (((n = fn(Xr.current)), fn(ot.current), Yo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tt] = t),
            (i = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tt] = t),
            (t.stateNode = r)
      }
      return pe(t), null
    case 13:
      if (
        (G(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && Ae !== null && t.mode & 1 && !(t.flags & 128))
          bp(), Qn(), (t.flags |= 98560), (i = !1)
        else if (((i = Yo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317))
            i[tt] = t
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          pe(t), (i = !1)
        } else qe !== null && (ca(qe), (qe = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ne === 0 && (ne = 3) : kl())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null)
    case 4:
      return (
        Jn(), na(e, t), e === null && qr(t.stateNode.containerInfo), pe(t), null
      )
    case 10:
      return al(t.type._context), pe(t), null
    case 17:
      return ke(t.type) && Ri(), pe(t), null
    case 19:
      if ((G(W), (i = t.memoizedState), i === null)) return pe(t), null
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) wr(i, !1)
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Li(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    wr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return U(W, (W.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            X() > Yn &&
            ((t.flags |= 128), (r = !0), wr(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Li(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !V)
            )
              return pe(t), null
          } else
            2 * X() - i.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wr(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = X()),
          (t.sibling = null),
          (n = W.current),
          U(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null)
    case 22:
    case 23:
      return (
        Sl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(C(156, t.tag))
}
function cg(e, t) {
  switch ((ol(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && Ri(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Jn(),
        G(Se),
        G(me),
        pl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return dl(t), null
    case 13:
      if ((G(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340))
        Qn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return G(W), null
    case 4:
      return Jn(), null
    case 10:
      return al(t.type._context), null
    case 22:
    case 23:
      return Sl(), null
    case 24:
      return null
    default:
      return null
  }
}
var ti = !1,
  he = !1,
  fg = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null
function Bn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        K(e, t, r)
      }
    else n.current = null
}
function ra(e, t, n) {
  try {
    n()
  } catch (r) {
    K(e, t, r)
  }
}
var pf = !1
function dg(e, t) {
  if (((Mu = Oi), (e = up()), nl(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            u = -1,
            a = -1,
            l = 0,
            f = 0,
            c = e,
            d = null
          t: for (;;) {
            for (
              var v;
              c !== n || (o !== 0 && c.nodeType !== 3) || (u = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (v = c.firstChild) !== null;
            )
              (d = c), (c = v)
            for (;;) {
              if (c === e) break t
              if (
                (d === n && ++l === o && (u = s),
                d === i && ++f === r && (a = s),
                (v = c.nextSibling) !== null)
              )
                break
              ;(c = d), (d = c.parentNode)
            }
            c = v
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Du = { focusedElem: e, selectionRange: n }, Oi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e)
    else
      while (O !== null) {
        t = O
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    b = g.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Ve(t.type, m),
                      b,
                    )
                  p.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(C(163))
            }
        } catch (w) {
          K(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (O = e)
          break
        }
        O = t.return
      }
  return (g = pf), (pf = !1), g
}
function Br(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && ra(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function is(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function oa(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function oh(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), oh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[Kr], delete t[Gu], delete t[Qy], delete t[Ky])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function ih(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function hf(e) {
  e: for (;;) {
    while (e.sibling === null) {
      if (e.return === null || ih(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function ia(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _i))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling)
}
function sa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling)
}
var ue = null,
  We = !1
function kt(e, t, n) {
  for (n = n.child; n !== null; ) sh(e, t, n), (n = n.sibling)
}
function sh(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == 'function')
    try {
      rt.onCommitFiberUnmount(Xi, n)
    } catch {}
  switch (n.tag) {
    case 5:
      he || Bn(n, t)
    case 6:
      var r = ue,
        o = We
      ;(ue = null),
        kt(e, t, n),
        (ue = r),
        (We = o),
        ue !== null &&
          (We
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode))
      break
    case 18:
      ue !== null &&
        (We
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ys(e.parentNode, n)
              : e.nodeType === 1 && Ys(e, n),
            Gr(e))
          : Ys(ue, n.stateNode))
      break
    case 4:
      ;(r = ue),
        (o = We),
        (ue = n.stateNode.containerInfo),
        (We = !0),
        kt(e, t, n),
        (ue = r),
        (We = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;(i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && ra(n, t, s),
            (o = o.next)
        } while (o !== r)
      }
      kt(e, t, n)
      break
    case 1:
      if (
        !he &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          K(n, t, u)
        }
      kt(e, t, n)
      break
    case 21:
      kt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), kt(e, t, n), (he = r))
        : kt(e, t, n)
      break
    default:
      kt(e, t, n)
  }
}
function mf(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new fg()),
      t.forEach((r) => {
        var o = xg.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Ge(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          s = t,
          u = s
        e: while (u !== null) {
          switch (u.tag) {
            case 5:
              ;(ue = u.stateNode), (We = !1)
              break e
            case 3:
              ;(ue = u.stateNode.containerInfo), (We = !0)
              break e
            case 4:
              ;(ue = u.stateNode.containerInfo), (We = !0)
              break e
          }
          u = u.return
        }
        if (ue === null) throw Error(C(160))
        sh(i, s, o), (ue = null), (We = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (l) {
        K(o, t, l)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) uh(t, e), (t = t.sibling)
}
function uh(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), Ye(e), r & 4)) {
        try {
          Br(3, e, e.return), is(3, e)
        } catch (m) {
          K(e, e.return, m)
        }
        try {
          Br(5, e, e.return)
        } catch (m) {
          K(e, e.return, m)
        }
      }
      break
    case 1:
      Ge(t, e), Ye(e), r & 512 && n !== null && Bn(n, n.return)
      break
    case 5:
      if (
        (Ge(t, e),
        Ye(e),
        r & 512 && n !== null && Bn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Mr(o, '')
        } catch (m) {
          K(e, e.return, m)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && Od(o, i),
              Au(u, s)
            var l = Au(u, i)
            for (s = 0; s < a.length; s += 2) {
              var f = a[s],
                c = a[s + 1]
              f === 'style'
                ? Fd(o, c)
                : f === 'dangerouslySetInnerHTML'
                  ? _d(o, c)
                  : f === 'children'
                    ? Mr(o, c)
                    : Ha(o, f, c, l)
            }
            switch (u) {
              case 'input':
                ku(o, i)
                break
              case 'textarea':
                Nd(o, i)
                break
              case 'select':
                var d = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var v = i.value
                v != null
                  ? $n(o, !!i.multiple, v, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $n(o, !!i.multiple, i.defaultValue, !0)
                      : $n(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Kr] = i
          } catch (m) {
            K(e, e.return, m)
          }
      }
      break
    case 6:
      if ((Ge(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (m) {
          K(e, e.return, m)
        }
      }
      break
    case 3:
      if (
        (Ge(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gr(t.containerInfo)
        } catch (m) {
          K(e, e.return, m)
        }
      break
    case 4:
      Ge(t, e), Ye(e)
      break
    case 13:
      Ge(t, e),
        Ye(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (El = X())),
        r & 4 && mf(e)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (l = he) || f), Ge(t, e), (he = l)) : Ge(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((l = e.memoizedState !== null),
          (e.stateNode.isHidden = l) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (c = O = f; O !== null; ) {
              switch (((d = O), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, d, d.return)
                  break
                case 1:
                  Bn(d, d.return)
                  var g = d.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (m) {
                      K(r, n, m)
                    }
                  }
                  break
                case 5:
                  Bn(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    gf(c)
                    continue
                  }
              }
              v !== null ? ((v.return = d), (O = v)) : gf(c)
            }
            f = f.sibling
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c
              try {
                ;(o = c.stateNode),
                  l
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = c.stateNode),
                      (a = c.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (u.style.display = Rd('display', s)))
              } catch (m) {
                K(e, e.return, m)
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = l ? '' : c.memoizedProps
              } catch (m) {
                K(e, e.return, m)
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            ;(c.child.return = c), (c = c.child)
            continue
          }
          if (c === e) break
          while (c.sibling === null) {
            if (c.return === null || c.return === e) break e
            f === c && (f = null), (c = c.return)
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling)
        }
      }
      break
    case 19:
      Ge(t, e), Ye(e), r & 4 && mf(e)
      break
    case 21:
      break
    default:
      Ge(t, e), Ye(e)
  }
}
function Ye(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ih(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(C(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Mr(o, ''), (r.flags &= -33))
          var i = hf(e)
          sa(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            u = hf(e)
          ia(e, u, s)
          break
        default:
          throw Error(C(161))
      }
    } catch (a) {
      K(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function pg(e, t, n) {
  ;(O = e), ah(e)
}
function ah(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ti
      if (!s) {
        var u = o.alternate,
          a = (u !== null && u.memoizedState !== null) || he
        u = ti
        var l = he
        if (((ti = s), (he = a) && !l))
          for (O = o; O !== null; )
            (s = O),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? vf(o)
                : a !== null
                  ? ((a.return = s), (O = a))
                  : vf(o)
        while (i !== null) (O = i), ah(i), (i = i.sibling)
        ;(O = o), (ti = u), (he = l)
      }
      yf(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : yf(e)
  }
}
function yf(e) {
  while (O !== null) {
    var t = O
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || is(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var i = t.updateQueue
              i !== null && Yc(t, i, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Yc(t, s, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate
                if (l !== null) {
                  var f = l.memoizedState
                  if (f !== null) {
                    var c = f.dehydrated
                    c !== null && Gr(c)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(C(163))
          }
        he || (t.flags & 512 && oa(t))
      } catch (d) {
        K(t, t.return, d)
      }
    }
    if (t === e) {
      O = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function gf(e) {
  while (O !== null) {
    var t = O
    if (t === e) {
      O = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function vf(e) {
  while (O !== null) {
    var t = O
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            is(4, t)
          } catch (a) {
            K(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              K(t, o, a)
            }
          }
          var i = t.return
          try {
            oa(t)
          } catch (a) {
            K(t, i, a)
          }
          break
        case 5:
          var s = t.return
          try {
            oa(t)
          } catch (a) {
            K(t, s, a)
          }
      }
    } catch (a) {
      K(t, t.return, a)
    }
    if (t === e) {
      O = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (O = u)
      break
    }
    O = t.return
  }
}
var hg = Math.ceil,
  Ui = St.ReactCurrentDispatcher,
  bl = St.ReactCurrentOwner,
  Le = St.ReactCurrentBatchConfig,
  L = 0,
  ie = null,
  Z = null,
  ae = 0,
  Ne = 0,
  zn = Zt(0),
  ne = 0,
  to = null,
  gn = 0,
  ss = 0,
  xl = 0,
  zr = null,
  xe = null,
  El = 0,
  Yn = 1 / 0,
  lt = null,
  Hi = !1,
  ua = null,
  Mt = null,
  ni = !1,
  It = null,
  Gi = 0,
  jr = 0,
  aa = null,
  yi = -1,
  gi = 0
function ve() {
  return L & 6 ? X() : yi !== -1 ? yi : (yi = X())
}
function Dt(e) {
  return e.mode & 1
    ? L & 2 && ae !== 0
      ? ae & -ae
      : Xy.transition !== null
        ? (gi === 0 && (gi = Vd()), gi)
        : ((e = D),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yd(e.type))),
          e)
    : 1
}
function Ke(e, t, n, r) {
  if (50 < jr) throw ((jr = 0), (aa = null), Error(C(185)))
  ko(e, n, r),
    (!(L & 2) || e !== ie) &&
      (e === ie && (!(L & 2) && (ss |= n), ne === 4 && Rt(e, ae)),
      Ce(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((Yn = X() + 500), ns && en()))
}
function Ce(e, t) {
  var n = e.callbackNode
  Xm(e, t)
  var r = Ti(e, e === ie ? ae : 0)
  if (r === 0)
    n !== null && Cc(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cc(n), t === 1))
      e.tag === 0 ? Jy(wf.bind(null, e)) : gp(wf.bind(null, e)),
        Wy(() => {
          !(L & 6) && en()
        }),
        (n = null)
    else {
      switch (Wd(r)) {
        case 1:
          n = Qa
          break
        case 4:
          n = Hd
          break
        case 16:
          n = Ci
          break
        case 536870912:
          n = Gd
          break
        default:
          n = Ci
      }
      n = yh(n, lh.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function lh(e, t) {
  if (((yi = -1), (gi = 0), L & 6)) throw Error(C(327))
  var n = e.callbackNode
  if (Hn() && e.callbackNode !== n) return null
  var r = Ti(e, e === ie ? ae : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Vi(e, r)
  else {
    t = r
    var o = L
    L |= 2
    var i = fh()
    ;(ie !== e || ae !== t) && ((lt = null), (Yn = X() + 500), dn(e, t))
    do
      try {
        gg()
        break
      } catch (u) {
        ch(e, u)
      }
    while (!0)
    ul(),
      (Ui.current = i),
      (L = o),
      Z !== null ? (t = 0) : ((ie = null), (ae = 0), (t = ne))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Bu(e)), o !== 0 && ((r = o), (t = la(e, o)))), t === 1)
    )
      throw ((n = to), dn(e, 0), Rt(e, r), Ce(e, X()), n)
    if (t === 6) Rt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !mg(o) &&
          ((t = Vi(e, r)),
          t === 2 && ((i = Bu(e)), i !== 0 && ((r = i), (t = la(e, i)))),
          t === 1))
      )
        throw ((n = to), dn(e, 0), Rt(e, r), Ce(e, X()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345))
        case 2:
          un(e, xe, lt)
          break
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = El + 500 - X()), 10 < t))
          ) {
            if (Ti(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Hu(un.bind(null, e, xe, lt), t)
            break
          }
          un(e, xe, lt)
          break
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Qe(r)
            ;(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i)
          }
          if (
            ((r = o),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * hg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hu(un.bind(null, e, xe, lt), r)
            break
          }
          un(e, xe, lt)
          break
        case 5:
          un(e, xe, lt)
          break
        default:
          throw Error(C(329))
      }
    }
  }
  return Ce(e, X()), e.callbackNode === n ? lh.bind(null, e) : null
}
function la(e, t) {
  var n = zr
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = Vi(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && ca(t)),
    e
  )
}
function ca(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e)
}
function mg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Je(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      while (t.sibling === null) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Rt(e, t) {
  for (
    t &= ~xl,
      t &= ~ss,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Qe(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function wf(e) {
  if (L & 6) throw Error(C(327))
  Hn()
  var t = Ti(e, 0)
  if (!(t & 1)) return Ce(e, X()), null
  var n = Vi(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Bu(e)
    r !== 0 && ((t = r), (n = la(e, r)))
  }
  if (n === 1) throw ((n = to), dn(e, 0), Rt(e, t), Ce(e, X()), n)
  if (n === 6) throw Error(C(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, xe, lt),
    Ce(e, X()),
    null
  )
}
function Pl(e, t) {
  var n = L
  L |= 1
  try {
    return e(t)
  } finally {
    ;(L = n), L === 0 && ((Yn = X() + 500), ns && en())
  }
}
function vn(e) {
  It !== null && It.tag === 0 && !(L & 6) && Hn()
  var t = L
  L |= 1
  var n = Le.transition,
    r = D
  try {
    if (((Le.transition = null), (D = 1), e)) return e()
  } finally {
    ;(D = r), (Le.transition = n), (L = t), !(L & 6) && en()
  }
}
function Sl() {
  ;(Ne = zn.current), G(zn)
}
function dn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Vy(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n
      switch ((ol(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Ri()
          break
        case 3:
          Jn(), G(Se), G(me), pl()
          break
        case 5:
          dl(r)
          break
        case 4:
          Jn()
          break
        case 13:
          G(W)
          break
        case 19:
          G(W)
          break
        case 10:
          al(r.type._context)
          break
        case 22:
        case 23:
          Sl()
      }
      n = n.return
    }
  if (
    ((ie = e),
    (Z = e = Ut(e.current, null)),
    (ae = Ne = t),
    (ne = 0),
    (to = null),
    (xl = ss = gn = 0),
    (xe = zr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;(i.next = o), (r.next = s)
        }
        n.pending = r
      }
    cn = null
  }
  return e
}
function ch(e, t) {
  do {
    var n = Z
    try {
      if ((ul(), (pi.current = Di), Mi)) {
        for (var r = q.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Mi = !1
      }
      if (
        ((yn = 0),
        (oe = te = q = null),
        (Ir = !1),
        (Yr = 0),
        (bl.current = null),
        n === null || n.return === null)
      ) {
        ;(ne = 1), (to = t), (Z = null)
        break
      }
      e: {
        var i = e,
          s = n.return,
          u = n,
          a = t
        if (
          ((t = ae),
          (u.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var l = a,
            f = u,
            c = f.tag
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null))
          }
          var v = sf(s)
          if (v !== null) {
            ;(v.flags &= -257),
              uf(v, s, u, i, t),
              v.mode & 1 && of(i, l, t),
              (t = v),
              (a = l)
            var g = t.updateQueue
            if (g === null) {
              var m = new Set()
              m.add(a), (t.updateQueue = m)
            } else g.add(a)
            break e
          } else {
            if (!(t & 1)) {
              of(i, l, t), kl()
              break e
            }
            a = Error(C(426))
          }
        } else if (V && u.mode & 1) {
          var b = sf(s)
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              uf(b, s, u, i, t),
              il(Xn(a, u))
            break e
          }
        }
        ;(i = a = Xn(a, u)),
          ne !== 4 && (ne = 2),
          zr === null ? (zr = [i]) : zr.push(i),
          (i = s)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var p = qp(i, a, t)
              Xc(i, p)
              break e
            case 1:
              u = a
              var h = i.type,
                y = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Mt === null || !Mt.has(y))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = Qp(i, u, t)
                Xc(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      ph(n)
    } catch (S) {
      ;(t = S), Z === n && n !== null && (Z = n = n.return)
      continue
    }
    break
  } while (!0)
}
function fh() {
  var e = Ui.current
  return (Ui.current = Di), e === null ? Di : e
}
function kl() {
  ;(ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    ie === null || (!(gn & 268435455) && !(ss & 268435455)) || Rt(ie, ae)
}
function Vi(e, t) {
  var n = L
  L |= 2
  var r = fh()
  ;(ie !== e || ae !== t) && ((lt = null), dn(e, t))
  do
    try {
      yg()
      break
    } catch (o) {
      ch(e, o)
    }
  while (!0)
  if ((ul(), (L = n), (Ui.current = r), Z !== null)) throw Error(C(261))
  return (ie = null), (ae = 0), ne
}
function yg() {
  while (Z !== null) dh(Z)
}
function gg() {
  while (Z !== null && !Um()) dh(Z)
}
function dh(e) {
  var t = mh(e.alternate, e, Ne)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? ph(e) : (Z = t),
    (bl.current = null)
}
function ph(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cg(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Z = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ne = 6), (Z = null)
        return
      }
    } else if (((n = lg(n, t, Ne)), n !== null)) {
      Z = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Z = t
      return
    }
    Z = t = e
  } while (t !== null)
  ne === 0 && (ne = 5)
}
function un(e, t, n) {
  var r = D,
    o = Le.transition
  try {
    ;(Le.transition = null), (D = 1), vg(e, t, n, r)
  } finally {
    ;(Le.transition = o), (D = r)
  }
  return null
}
function vg(e, t, n, r) {
  do Hn()
  while (It !== null)
  if (L & 6) throw Error(C(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (Ym(e, i),
    e === ie && ((Z = ie = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ni ||
      ((ni = !0), yh(Ci, () => (Hn(), null))),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Le.transition), (Le.transition = null)
    var s = D
    D = 1
    var u = L
    ;(L |= 4),
      (bl.current = null),
      dg(e, n),
      uh(n, e),
      $y(Du),
      (Oi = !!Mu),
      (Du = Mu = null),
      (e.current = n),
      pg(n),
      Hm(),
      (L = u),
      (D = s),
      (Le.transition = i)
  } else e.current = n
  if (
    (ni && ((ni = !1), (It = e), (Gi = o)),
    (i = e.pendingLanes),
    i === 0 && (Mt = null),
    Wm(n.stateNode),
    Ce(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Hi) throw ((Hi = !1), (e = ua), (ua = null), e)
  return (
    Gi & 1 && e.tag !== 0 && Hn(),
    (i = e.pendingLanes),
    i & 1 ? (e === aa ? jr++ : ((jr = 0), (aa = e))) : (jr = 0),
    en(),
    null
  )
}
function Hn() {
  if (It !== null) {
    var e = Wd(Gi),
      t = Le.transition,
      n = D
    try {
      if (((Le.transition = null), (D = 16 > e ? 16 : e), It === null))
        var r = !1
      else {
        if (((e = It), (It = null), (Gi = 0), L & 6)) throw Error(C(331))
        var o = L
        for (L |= 4, O = e.current; O !== null; ) {
          var i = O,
            s = i.child
          if (O.flags & 16) {
            var u = i.deletions
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var l = u[a]
                for (O = l; O !== null; ) {
                  var f = O
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, f, i)
                  }
                  var c = f.child
                  if (c !== null) (c.return = f), (O = c)
                  else
                    while (O !== null) {
                      f = O
                      var d = f.sibling,
                        v = f.return
                      if ((oh(f), f === l)) {
                        O = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = v), (O = d)
                        break
                      }
                      O = v
                    }
                }
              }
              var g = i.alternate
              if (g !== null) {
                var m = g.child
                if (m !== null) {
                  g.child = null
                  do {
                    var b = m.sibling
                    ;(m.sibling = null), (m = b)
                  } while (m !== null)
                }
              }
              O = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (O = s)
          else
            while (O !== null) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, i, i.return)
                }
              var p = i.sibling
              if (p !== null) {
                ;(p.return = i.return), (O = p)
                break
              }
              O = i.return
            }
        }
        var h = e.current
        for (O = h; O !== null; ) {
          s = O
          var y = s.child
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (O = y)
          else
            for (s = h; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      is(9, u)
                  }
                } catch (S) {
                  K(u, u.return, S)
                }
              if (u === s) {
                O = null
                break
              }
              var w = u.sibling
              if (w !== null) {
                ;(w.return = u.return), (O = w)
                break
              }
              O = u.return
            }
        }
        if (
          ((L = o), en(), rt && typeof rt.onPostCommitFiberRoot == 'function')
        )
          try {
            rt.onPostCommitFiberRoot(Xi, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(D = n), (Le.transition = t)
    }
  }
  return !1
}
function bf(e, t, n) {
  ;(t = Xn(n, t)),
    (t = qp(e, t, 1)),
    (e = Lt(e, t, 1)),
    (t = ve()),
    e !== null && (ko(e, 1, t), Ce(e, t))
}
function K(e, t, n) {
  if (e.tag === 3) bf(e, e, n)
  else
    while (t !== null) {
      if (t.tag === 3) {
        bf(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Mt === null || !Mt.has(r)))
        ) {
          ;(e = Xn(n, e)),
            (e = Qp(t, e, 1)),
            (t = Lt(t, e, 1)),
            (e = ve()),
            t !== null && (ko(t, 1, e), Ce(t, e))
          break
        }
      }
      t = t.return
    }
}
function wg(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (ae & n) === n &&
      (ne === 4 || (ne === 3 && (ae & 130023424) === ae && 500 > X() - El)
        ? dn(e, 0)
        : (xl |= n)),
    Ce(e, t)
}
function hh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wo), (Wo <<= 1), !(Wo & 130023424) && (Wo = 4194304))
      : (t = 1))
  var n = ve()
  ;(e = wt(e, t)), e !== null && (ko(e, t, n), Ce(e, n))
}
function bg(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), hh(e, n)
}
function xg(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(C(314))
  }
  r !== null && r.delete(t), hh(e, n)
}
var mh
mh = (e, t, n) => {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) Ee = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), ag(e, t, n)
      Ee = !!(e.flags & 131072)
    }
  else (Ee = !1), V && t.flags & 1048576 && vp(t, Bi, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      mi(e, t), (e = t.pendingProps)
      var o = qn(t, me.current)
      Un(t, n), (o = ml(null, t, r, e, o, n))
      var i = yl()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((i = !0), Fi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            cl(t),
            (o.updater = rs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ju(t, r, e, n),
            (t = Zu(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && rl(t), ge(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (mi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Pg(r)),
          (e = Ve(r, e)),
          o)
        ) {
          case 0:
            t = Yu(null, t, r, e, n)
            break e
          case 1:
            t = cf(null, t, r, e, n)
            break e
          case 11:
            t = af(null, t, r, e, n)
            break e
          case 14:
            t = lf(null, t, r, Ve(r.type, e), n)
            break e
        }
        throw Error(C(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        Yu(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        cf(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((Yp(t), e === null)) throw Error(C(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ep(e, t),
          $i(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Xn(Error(C(423)), t)), (t = ff(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Xn(Error(C(424)), t)), (t = ff(e, t, r, n, o))
            break e
          } else
            for (
              Ae = $t(t.stateNode.containerInfo.firstChild),
                _e = t,
                V = !0,
                qe = null,
                n = Cp(t, null, r, n),
                t.child = n;
              n;
            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Qn(), r === o)) {
            t = bt(e, t, n)
            break e
          }
          ge(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Tp(t),
        e === null && qu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Uu(r, o) ? (s = null) : i !== null && Uu(r, i) && (t.flags |= 32),
        Xp(e, t),
        ge(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && qu(t), null
    case 13:
      return Zp(e, t, n)
    case 4:
      return (
        fl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        af(e, t, r, o, n)
      )
    case 7:
      return ge(e, t, t.pendingProps, n), t.child
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          U(zi, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Je(i.value, s)) {
            if (i.children === o.children && !Se.current) {
              t = bt(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies
              if (u !== null) {
                s = i.child
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;(a = pt(-1, n & -n)), (a.tag = 2)
                      var l = i.updateQueue
                      if (l !== null) {
                        l = l.shared
                        var f = l.pending
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (l.pending = a)
                      }
                    }
                    ;(i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Qu(i.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(C(341))
                ;(s.lanes |= n),
                  (u = s.alternate),
                  u !== null && (u.lanes |= n),
                  Qu(s, n, t),
                  (s = i.sibling)
              } else s = i.child
              if (s !== null) s.return = i
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((i = s.sibling), i !== null)) {
                    ;(i.return = s.return), (s = i)
                    break
                  }
                  s = s.return
                }
              i = s
            }
        ge(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (o = De(o)),
        (r = r(o)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = Ve(r, t.pendingProps)),
        (o = Ve(r.type, o)),
        lf(e, t, r, o, n)
      )
    case 15:
      return Kp(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ve(r, o)),
        mi(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Fi(t)) : (e = !1),
        Un(t, n),
        Sp(t, r, o),
        Ju(t, r, o, n),
        Zu(null, t, r, !0, e, n)
      )
    case 19:
      return eh(e, t, n)
    case 22:
      return Jp(e, t, n)
  }
  throw Error(C(156, t.tag))
}
function yh(e, t) {
  return Ud(e, t)
}
function Eg(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function $e(e, t, n, r) {
  return new Eg(e, t, n, r)
}
function Cl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Pg(e) {
  if (typeof e == 'function') return Cl(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Va)) return 11
    if (e === Wa) return 14
  }
  return 2
}
function Ut(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function vi(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == 'function')) Cl(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case Cn:
        return pn(n.children, o, i, t)
      case Ga:
        ;(s = 8), (o |= 8)
        break
      case bu:
        return (e = $e(12, n, t, o | 2)), (e.elementType = bu), (e.lanes = i), e
      case xu:
        return (e = $e(13, n, t, o)), (e.elementType = xu), (e.lanes = i), e
      case Eu:
        return (e = $e(19, n, t, o)), (e.elementType = Eu), (e.lanes = i), e
      case kd:
        return us(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Pd:
              s = 10
              break e
            case Sd:
              s = 9
              break e
            case Va:
              s = 11
              break e
            case Wa:
              s = 14
              break e
            case Nt:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(C(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = $e(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function pn(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e
}
function us(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = kd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function su(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e
}
function uu(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Sg(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ds(0)),
    (this.expirationTimes = Ds(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ds(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Tl(e, t, n, r, o, i, s, u, a) {
  return (
    (e = new Sg(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = $e(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cl(i),
    e
  )
}
function kg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: kn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function gh(e) {
  if (!e) return Vt
  e = e._reactInternals
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(C(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(C(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (ke(n)) return yp(e, n, t)
  }
  return t
}
function vh(e, t, n, r, o, i, s, u, a) {
  return (
    (e = Tl(n, r, !0, e, o, i, s, u, a)),
    (e.context = gh(null)),
    (n = e.current),
    (r = ve()),
    (o = Dt(n)),
    (i = pt(r, o)),
    (i.callback = t ?? null),
    Lt(n, i, o),
    (e.current.lanes = o),
    ko(e, o, r),
    Ce(e, r),
    e
  )
}
function as(e, t, n, r) {
  var o = t.current,
    i = ve(),
    s = Dt(o)
  return (
    (n = gh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Lt(o, t, s)),
    e !== null && (Ke(e, o, s, i), di(e, o, s)),
    s
  )
}
function Wi(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function xf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ol(e, t) {
  xf(e, t), (e = e.alternate) && xf(e, t)
}
function Cg() {
  return null
}
var wh =
  typeof reportError == 'function'
    ? reportError
    : (e) => {
        console.error(e)
      }
function Nl(e) {
  this._internalRoot = e
}
ls.prototype.render = Nl.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(C(409))
  as(e, t, null, null)
}
ls.prototype.unmount = Nl.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    vn(() => {
      as(null, e, null, null)
    }),
      (t[vt] = null)
  }
}
function ls(e) {
  this._internalRoot = e
}
ls.prototype.unstable_scheduleHydration = (e) => {
  if (e) {
    var t = Kd()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++);
    _t.splice(n, 0, e), n === 0 && Xd(e)
  }
}
function Al(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function cs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Ef() {}
function Tg(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = () => {
        var l = Wi(s)
        i.call(l)
      }
    }
    var s = vh(t, r, e, 0, null, !1, !1, '', Ef)
    return (
      (e._reactRootContainer = s),
      (e[vt] = s.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      vn(),
      s
    )
  }
  while ((o = e.lastChild)) e.removeChild(o)
  if (typeof r == 'function') {
    var u = r
    r = () => {
      var l = Wi(a)
      u.call(l)
    }
  }
  var a = Tl(e, 0, !1, null, null, !1, !1, '', Ef)
  return (
    (e._reactRootContainer = a),
    (e[vt] = a.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    vn(() => {
      as(t, a, n, r)
    }),
    a
  )
}
function fs(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == 'function') {
      var u = o
      o = () => {
        var a = Wi(s)
        u.call(a)
      }
    }
    as(t, s, e, o)
  } else s = Tg(n, t, e, o, r)
  return Wi(s)
}
qd = (e) => {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes)
        n !== 0 &&
          (Ka(t, n | 1), Ce(t, X()), !(L & 6) && ((Yn = X() + 500), en()))
      }
      break
    case 13:
      vn(() => {
        var r = wt(e, 1)
        if (r !== null) {
          var o = ve()
          Ke(r, e, 1, o)
        }
      }),
        Ol(e, 1)
  }
}
Ja = (e) => {
  if (e.tag === 13) {
    var t = wt(e, 134217728)
    if (t !== null) {
      var n = ve()
      Ke(t, e, 134217728, n)
    }
    Ol(e, 134217728)
  }
}
Qd = (e) => {
  if (e.tag === 13) {
    var t = Dt(e),
      n = wt(e, t)
    if (n !== null) {
      var r = ve()
      Ke(n, e, t, r)
    }
    Ol(e, t)
  }
}
Kd = () => D
Jd = (e, t) => {
  var n = D
  try {
    return (D = e), t()
  } finally {
    D = n
  }
}
Ru = (e, t, n) => {
  switch (t) {
    case 'input':
      if ((ku(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = ts(r)
            if (!o) throw Error(C(90))
            Td(r), ku(r, o)
          }
        }
      }
      break
    case 'textarea':
      Nd(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && $n(e, !!n.multiple, t, !1)
  }
}
zd = Pl
jd = vn
var Og = { usingClientEntryPoint: !1, Events: [To, An, ts, Id, Bd, Pl] },
  br = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Ng = {
    bundleType: br.bundleType,
    version: br.version,
    rendererPackageName: br.rendererPackageName,
    rendererConfig: br.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: St.ReactCurrentDispatcher,
    findHostInstanceByFiber: (e) => (
      (e = Md(e)), e === null ? null : e.stateNode
    ),
    findFiberByHostInstance: br.findFiberByHostInstance || Cg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ri.isDisabled && ri.supportsFiber)
    try {
      ;(Xi = ri.inject(Ng)), (rt = ri)
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Og
Ie.createPortal = (e, t) => {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Al(t)) throw Error(C(200))
  return kg(e, t, null, n)
}
Ie.createRoot = (e, t) => {
  if (!Al(e)) throw Error(C(299))
  var n = !1,
    r = '',
    o = wh
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Tl(e, 1, !1, null, null, n, !1, r, o)),
    (e[vt] = t.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    new Nl(t)
  )
}
Ie.findDOMNode = (e) => {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)))
  return (e = Md(t)), (e = e === null ? null : e.stateNode), e
}
Ie.flushSync = (e) => vn(e)
Ie.hydrate = (e, t, n) => {
  if (!cs(t)) throw Error(C(200))
  return fs(null, e, t, !0, n)
}
Ie.hydrateRoot = (e, t, n) => {
  if (!Al(e)) throw Error(C(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = wh
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = vh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[vt] = t.current),
    qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new ls(t)
}
Ie.render = (e, t, n) => {
  if (!cs(t)) throw Error(C(200))
  return fs(null, e, t, !1, n)
}
Ie.unmountComponentAtNode = (e) => {
  if (!cs(e)) throw Error(C(40))
  return e._reactRootContainer
    ? (vn(() => {
        fs(null, null, e, !1, () => {
          ;(e._reactRootContainer = null), (e[vt] = null)
        })
      }),
      !0)
    : !1
}
Ie.unstable_batchedUpdates = Pl
Ie.unstable_renderSubtreeIntoContainer = (e, t, n, r) => {
  if (!cs(n)) throw Error(C(200))
  if (e == null || e._reactInternals === void 0) throw Error(C(38))
  return fs(e, t, n, !1, r)
}
Ie.version = '18.2.0-next-9e3b772b8-20220608'
function bh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bh)
    } catch (e) {
      console.error(e)
    }
}
bh(), (vd.exports = Ie)
var Ag = vd.exports,
  Pf = Ag
;(vu.createRoot = Pf.createRoot), (vu.hydrateRoot = Pf.hydrateRoot)
function _g(e, t) {
  const n = e.exec(t)
  return n == null ? void 0 : n.groups
}
const Sf = /^tuple(?<array>(\[(\d*)\])*)$/
function fa(e) {
  let t = e.type
  if (Sf.test(e.type) && 'components' in e) {
    t = '('
    const n = e.components.length
    for (let o = 0; o < n; o++) {
      const i = e.components[o]
      ;(t += fa(i)), o < n - 1 && (t += ', ')
    }
    const r = _g(Sf, e.type)
    return (
      (t += `)${(r == null ? void 0 : r.array) ?? ''}`), fa({ ...e, type: t })
    )
  }
  return (
    'indexed' in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  )
}
function xr(e) {
  let t = ''
  const n = e.length
  for (let r = 0; r < n; r++) {
    const o = e[r]
    ;(t += fa(o)), r !== n - 1 && (t += ', ')
  }
  return t
}
function Rg(e) {
  return e.type === 'function'
    ? `function ${e.name}(${xr(e.inputs)})${
        e.stateMutability && e.stateMutability !== 'nonpayable'
          ? ` ${e.stateMutability}`
          : ''
      }${e.outputs.length ? ` returns (${xr(e.outputs)})` : ''}`
    : e.type === 'event'
      ? `event ${e.name}(${xr(e.inputs)})`
      : e.type === 'error'
        ? `error ${e.name}(${xr(e.inputs)})`
        : e.type === 'constructor'
          ? `constructor(${xr(e.inputs)})${
              e.stateMutability === 'payable' ? ' payable' : ''
            }`
          : e.type === 'fallback'
            ? 'fallback()'
            : 'receive() external payable'
}
function R(e, t, n) {
  return (r) => {
    var o
    return ((o = e[t.name || n]) == null ? void 0 : o.call(e, r)) ?? t(e, r)
  }
}
function xt(e, { includeName: t = !1 } = {}) {
  if (e.type !== 'function' && e.type !== 'event' && e.type !== 'error')
    throw new Qg(e.type)
  return `${e.name}(${ds(e.inputs, { includeName: t })})`
}
function ds(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => Fg(n, { includeName: t })).join(t ? ', ' : ',') : ''
}
function Fg(e, { includeName: t }) {
  return e.type.startsWith('tuple')
    ? `(${ds(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : '')
}
function Xe(e, { strict: t = !0 } = {}) {
  return !e || typeof e != 'string'
    ? !1
    : t
      ? /^0x[0-9a-fA-F]*$/.test(e)
      : e.startsWith('0x')
}
function Y(e) {
  return Xe(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length
}
const Ig = '2.8.26',
  Bg = (e) => e,
  _l = (e) => e,
  zg = () => `viem@${Ig}`
class k extends Error {
  constructor(t, n = {}) {
    var i
    super(),
      Object.defineProperty(this, 'details', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'docsPath', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'metaMessages', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'shortMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ViemError',
      }),
      Object.defineProperty(this, 'version', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zg(),
      })
    const r =
        n.cause instanceof k
          ? n.cause.details
          : (i = n.cause) != null && i.message
            ? n.cause.message
            : n.details,
      o = (n.cause instanceof k && n.cause.docsPath) || n.docsPath
    ;(this.message = [
      t || 'An error occurred.',
      '',
      ...(n.metaMessages ? [...n.metaMessages, ''] : []),
      ...(o
        ? [`Docs: https://viem.sh${o}${n.docsSlug ? `#${n.docsSlug}` : ''}`]
        : []),
      ...(r ? [`Details: ${r}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      n.cause && (this.cause = n.cause),
      (this.details = r),
      (this.docsPath = o),
      (this.metaMessages = n.metaMessages),
      (this.shortMessage = t)
  }
  walk(t) {
    return xh(this, t)
  }
}
function xh(e, t) {
  return t != null && t(e)
    ? e
    : e && typeof e == 'object' && 'cause' in e
      ? xh(e.cause, t)
      : t
        ? null
        : e
}
class jg extends k {
  constructor({ docsPath: t }) {
    super(
      [
        'A constructor was not found on the ABI.',
        'Make sure you are using the correct ABI and that the constructor exists on it.',
      ].join(`
`),
      { docsPath: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiConstructorNotFoundError',
      })
  }
}
class kf extends k {
  constructor({ docsPath: t }) {
    super(
      [
        'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
        'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.',
      ].join(`
`),
      { docsPath: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiConstructorParamsNotFoundError',
      })
  }
}
class Eh extends k {
  constructor({ data: t, params: n, size: r }) {
    super(
      [`Data size of ${r} bytes is too small for given parameters.`].join(`
`),
      {
        metaMessages: [
          `Params: (${ds(n, { includeName: !0 })})`,
          `Data:   ${t} (${r} bytes)`,
        ],
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiDecodingDataSizeTooSmallError',
      }),
      Object.defineProperty(this, 'data', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'params', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'size', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = t),
      (this.params = n),
      (this.size = r)
  }
}
class ps extends k {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.'),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiDecodingZeroDataError',
      })
  }
}
class $g extends k {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super(
      [
        `ABI encoding array length mismatch for type ${r}.`,
        `Expected length: ${t}`,
        `Given length: ${n}`,
      ].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiEncodingArrayLengthMismatchError',
      })
  }
}
class Lg extends k {
  constructor({ expectedSize: t, value: n }) {
    super(
      `Size of bytes "${n}" (bytes${Y(
        n,
      )}) does not match expected size (bytes${t}).`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiEncodingBytesSizeMismatchError',
      })
  }
}
class Mg extends k {
  constructor({ expectedLength: t, givenLength: n }) {
    super(
      [
        'ABI encoding params/values length mismatch.',
        `Expected length (params): ${t}`,
        `Given length (values): ${n}`,
      ].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiEncodingLengthMismatchError',
      })
  }
}
class Ph extends k {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Encoded error signature "${t}" not found on ABI.`,
        'Make sure you are using the correct ABI and that the error exists on it.',
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiErrorSignatureNotFoundError',
      }),
      Object.defineProperty(this, 'signature', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.signature = t)
  }
}
class Dg extends k {
  constructor({ docsPath: t }) {
    super('Cannot extract event signature from empty topics.', { docsPath: t }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiEventSignatureEmptyTopicsError',
      })
  }
}
class Sh extends k {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Encoded event signature "${t}" not found on ABI.`,
        'Make sure you are using the correct ABI and that the event exists on it.',
        `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiEventSignatureNotFoundError',
      })
  }
}
class Cf extends k {
  constructor(t, { docsPath: n } = {}) {
    super(
      [
        `Event ${t ? `"${t}" ` : ''}not found on ABI.`,
        'Make sure you are using the correct ABI and that the event exists on it.',
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiEventNotFoundError',
      })
  }
}
class qi extends k {
  constructor(t, { docsPath: n } = {}) {
    super(
      [
        `Function ${t ? `"${t}" ` : ''}not found on ABI.`,
        'Make sure you are using the correct ABI and that the function exists on it.',
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiFunctionNotFoundError',
      })
  }
}
class Ug extends k {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Function "${t}" does not contain any \`outputs\` on ABI.`,
        'Cannot decode function result without knowing what the parameter types are.',
        'Make sure you are using the correct ABI and that the function exists on it.',
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiFunctionOutputsNotFoundError',
      })
  }
}
class Hg extends k {
  constructor(t, n) {
    super('Found ambiguous types in overloaded ABI items.', {
      metaMessages: [
        `\`${t.type}\` in \`${xt(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${xt(n.abiItem)}\``,
        '',
        'These types encode differently and cannot be distinguished at runtime.',
        'Remove one of the ambiguous items in the ABI.',
      ],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AbiItemAmbiguityError',
      })
  }
}
class Gg extends k {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'BytesSizeMismatchError',
      })
  }
}
class no extends k {
  constructor({ abiItem: t, data: n, params: r, size: o }) {
    super(
      [
        `Data size of ${o} bytes is too small for non-indexed event parameters.`,
      ].join(`
`),
      {
        metaMessages: [
          `Params: (${ds(r, { includeName: !0 })})`,
          `Data:   ${n} (${o} bytes)`,
        ],
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'DecodeLogDataMismatch',
      }),
      Object.defineProperty(this, 'abiItem', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'data', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'params', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'size', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.abiItem = t),
      (this.data = n),
      (this.params = r),
      (this.size = o)
  }
}
class hs extends k {
  constructor({ abiItem: t, param: n }) {
    super(
      [
        `Expected a topic for indexed event parameter${
          n.name ? ` "${n.name}"` : ''
        } on event "${xt(t, { includeName: !0 })}".`,
      ].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'DecodeLogTopicsMismatch',
      }),
      Object.defineProperty(this, 'abiItem', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.abiItem = t)
  }
}
class Vg extends k {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Type "${t}" is not a valid encoding type.`,
        'Please provide a valid ABI type.',
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidAbiEncodingType',
      })
  }
}
class Wg extends k {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Type "${t}" is not a valid decoding type.`,
        'Please provide a valid ABI type.',
      ].join(`
`),
      { docsPath: n },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidAbiDecodingType',
      })
  }
}
class qg extends k {
  constructor(t) {
    super(
      [`Value "${t}" is not a valid array.`].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidArrayError',
      })
  }
}
class Qg extends k {
  constructor(t) {
    super(
      [
        `"${t}" is not a valid definition type.`,
        'Valid types: "function", "event", "error"',
      ].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidDefinitionTypeError',
      })
  }
}
class Kg extends k {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'FilterTypeNotSupportedError',
      })
  }
}
class kh extends k {
  constructor({ offset: t, position: n, size: r }) {
    super(
      `Slice ${
        n === 'start' ? 'starting' : 'ending'
      } at offset "${t}" is out-of-bounds (size: ${r}).`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'SliceOffsetOutOfBoundsError',
      })
  }
}
class Ch extends k {
  constructor({ size: t, targetSize: n, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} size (${t}) exceeds padding size (${n}).`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'SizeExceedsPaddingSizeError',
      })
  }
}
class Tf extends k {
  constructor({ size: t, targetSize: n, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidBytesLengthError',
      })
  }
}
function ir(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == 'string'
    ? Ht(e, { dir: t, size: n })
    : Jg(e, { dir: t, size: n })
}
function Ht(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e
  const r = e.replace('0x', '')
  if (r.length > n * 2)
    throw new Ch({ size: Math.ceil(r.length / 2), targetSize: n, type: 'hex' })
  return `0x${r[t === 'right' ? 'padEnd' : 'padStart'](n * 2, '0')}`
}
function Jg(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e
  if (e.length > n)
    throw new Ch({ size: e.length, targetSize: n, type: 'bytes' })
  const r = new Uint8Array(n)
  for (let o = 0; o < n; o++) {
    const i = t === 'right'
    r[i ? o : n - o - 1] = e[i ? o : e.length - o - 1]
  }
  return r
}
class Xg extends k {
  constructor({ max: t, min: n, signed: r, size: o, value: i }) {
    super(
      `Number "${i}" is not in safe ${
        o ? `${o * 8}-bit ${r ? 'signed' : 'unsigned'} ` : ''
      }integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'IntegerOutOfRangeError',
      })
  }
}
class Yg extends k {
  constructor(t) {
    super(
      `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidBytesBooleanError',
      })
  }
}
class Zg extends k {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'SizeOverflowError',
      })
  }
}
function Zn(e, { dir: t = 'left' } = {}) {
  let n = typeof e == 'string' ? e.replace('0x', '') : e,
    r = 0
  for (
    let o = 0;
    o < n.length - 1 &&
    n[t === 'left' ? o : n.length - o - 1].toString() === '0';
    o++
  )
    r++
  return (
    (n = t === 'left' ? n.slice(r) : n.slice(0, n.length - r)),
    typeof e == 'string'
      ? (n.length === 1 && t === 'right' && (n = `${n}0`),
        `0x${n.length % 2 === 1 ? `0${n}` : n}`)
      : n
  )
}
function st(e, { size: t }) {
  if (Y(e) > t) throw new Zg({ givenSize: Y(e), maxSize: t })
}
function ms(e, t = {}) {
  const { signed: n } = t
  t.size && st(e, { size: t.size })
  const r = BigInt(e)
  if (!n) return r
  const o = (e.length - 2) / 2,
    i = (1n << (BigInt(o) * 8n - 1n)) - 1n
  return r <= i ? r : r - BigInt(`0x${'f'.padStart(o * 2, 'f')}`) - 1n
}
function Et(e, t = {}) {
  return Number(ms(e, t))
}
const e1 = Array.from({ length: 256 }, (e, t) =>
  t.toString(16).padStart(2, '0'),
)
function z(e, t = {}) {
  return typeof e == 'number' || typeof e == 'bigint'
    ? I(e, t)
    : typeof e == 'string'
      ? Rl(e, t)
      : typeof e == 'boolean'
        ? Th(e, t)
        : se(e, t)
}
function Th(e, t = {}) {
  const n = `0x${Number(e)}`
  return typeof t.size == 'number'
    ? (st(n, { size: t.size }), ir(n, { size: t.size }))
    : n
}
function se(e, t = {}) {
  let n = ''
  for (let o = 0; o < e.length; o++) n += e1[e[o]]
  const r = `0x${n}`
  return typeof t.size == 'number'
    ? (st(r, { size: t.size }), ir(r, { dir: 'right', size: t.size }))
    : r
}
function I(e, t = {}) {
  const { signed: n, size: r } = t,
    o = BigInt(e)
  let i
  r
    ? n
      ? (i = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (i = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == 'number' && (i = BigInt(Number.MAX_SAFE_INTEGER))
  const s = typeof i == 'bigint' && n ? -i - 1n : 0
  if ((i && o > i) || o < s) {
    const a = typeof e == 'bigint' ? 'n' : ''
    throw new Xg({
      max: i ? `${i}${a}` : void 0,
      min: `${s}${a}`,
      signed: n,
      size: r,
      value: `${e}${a}`,
    })
  }
  const u = `0x${(n && o < 0 ? (1n << BigInt(r * 8)) + BigInt(o) : o).toString(
    16,
  )}`
  return r ? ir(u, { size: r }) : u
}
const t1 = new TextEncoder()
function Rl(e, t = {}) {
  const n = t1.encode(e)
  return se(n, t)
}
const n1 = new TextEncoder()
function Wt(e, t = {}) {
  return typeof e == 'number' || typeof e == 'bigint'
    ? o1(e, t)
    : typeof e == 'boolean'
      ? r1(e, t)
      : Xe(e)
        ? qt(e, t)
        : ht(e, t)
}
function r1(e, t = {}) {
  const n = new Uint8Array(1)
  return (
    (n[0] = Number(e)),
    typeof t.size == 'number'
      ? (st(n, { size: t.size }), ir(n, { size: t.size }))
      : n
  )
}
const at = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 }
function Of(e) {
  if (e >= at.zero && e <= at.nine) return e - at.zero
  if (e >= at.A && e <= at.F) return e - (at.A - 10)
  if (e >= at.a && e <= at.f) return e - (at.a - 10)
}
function qt(e, t = {}) {
  let n = e
  t.size &&
    (st(n, { size: t.size }), (n = ir(n, { dir: 'right', size: t.size })))
  let r = n.slice(2)
  r.length % 2 && (r = `0${r}`)
  const o = r.length / 2,
    i = new Uint8Array(o)
  for (let s = 0, u = 0; s < o; s++) {
    const a = Of(r.charCodeAt(u++)),
      l = Of(r.charCodeAt(u++))
    if (a === void 0 || l === void 0)
      throw new k(`Invalid byte sequence ("${r[u - 2]}${r[u - 1]}" in "${r}").`)
    i[s] = a * 16 + l
  }
  return i
}
function o1(e, t) {
  const n = I(e, t)
  return qt(n)
}
function ht(e, t = {}) {
  const n = n1.encode(e)
  return typeof t.size == 'number'
    ? (st(n, { size: t.size }), ir(n, { dir: 'right', size: t.size }))
    : n
}
function Nf(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`)
}
function Oh(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array')
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(
      `Expected Uint8Array of length ${t}, not of length=${e.length}`,
    )
}
function Qi(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed')
  if (t && e.finished) throw new Error('Hash#digest() has already been called')
}
function Nh(e, t) {
  Oh(e)
  const n = t.outputLen
  if (e.length < n)
    throw new Error(
      `digestInto() expects output buffer of length at least ${n}`,
    )
}
const oi = BigInt(2 ** 32 - 1),
  Af = BigInt(32)
function i1(e, t = !1) {
  return t
    ? { h: Number(e & oi), l: Number((e >> Af) & oi) }
    : { h: Number((e >> Af) & oi) | 0, l: Number(e & oi) | 0 }
}
function s1(e, t = !1) {
  const n = new Uint32Array(e.length),
    r = new Uint32Array(e.length)
  for (let o = 0; o < e.length; o++) {
    const { h: i, l: s } = i1(e[o], t)
    ;[n[o], r[o]] = [i, s]
  }
  return [n, r]
}
const u1 = (e, t, n) => (e << n) | (t >>> (32 - n)),
  a1 = (e, t, n) => (t << n) | (e >>> (32 - n)),
  l1 = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  c1 = (e, t, n) =>
    (e << (n - 32)) |
    (t >>>
      (64 -
        n)) /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const f1 = (e) => e instanceof Uint8Array,
  d1 = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  au = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  Ze = (e, t) => (e << (32 - t)) | (e >>> t),
  p1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68
if (!p1) throw new Error('Non little-endian hardware is not supported')
function h1(e) {
  if (typeof e != 'string')
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`)
  return new Uint8Array(new TextEncoder().encode(e))
}
function Fl(e) {
  if ((typeof e == 'string' && (e = h1(e)), !f1(e)))
    throw new Error(`expected Uint8Array, got ${typeof e}`)
  return e
}
class Ah {
  clone() {
    return this._cloneInto()
  }
}
function _h(e) {
  const t = (r) => e().update(Fl(r)).digest(),
    n = e()
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  )
}
const [Rh, Fh, Ih] = [[], [], []],
  m1 = BigInt(0),
  Er = BigInt(1),
  y1 = BigInt(2),
  g1 = BigInt(7),
  v1 = BigInt(256),
  w1 = BigInt(113)
for (let e = 0, t = Er, n = 1, r = 0; e < 24; e++) {
  ;([n, r] = [r, (2 * n + 3 * r) % 5]),
    Rh.push(2 * (5 * r + n)),
    Fh.push((((e + 1) * (e + 2)) / 2) % 64)
  let o = m1
  for (let i = 0; i < 7; i++)
    (t = ((t << Er) ^ ((t >> g1) * w1)) % v1),
      t & y1 && (o ^= Er << ((Er << BigInt(i)) - Er))
  Ih.push(o)
}
const [b1, x1] = s1(Ih, !0),
  _f = (e, t, n) => (n > 32 ? l1(e, t, n) : u1(e, t, n)),
  Rf = (e, t, n) => (n > 32 ? c1(e, t, n) : a1(e, t, n))
function E1(e, t = 24) {
  const n = new Uint32Array(10)
  for (let r = 24 - t; r < 24; r++) {
    for (let s = 0; s < 10; s++)
      n[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40]
    for (let s = 0; s < 10; s += 2) {
      const u = (s + 8) % 10,
        a = (s + 2) % 10,
        l = n[a],
        f = n[a + 1],
        c = _f(l, f, 1) ^ n[u],
        d = Rf(l, f, 1) ^ n[u + 1]
      for (let v = 0; v < 50; v += 10) (e[s + v] ^= c), (e[s + v + 1] ^= d)
    }
    let o = e[2],
      i = e[3]
    for (let s = 0; s < 24; s++) {
      const u = Fh[s],
        a = _f(o, i, u),
        l = Rf(o, i, u),
        f = Rh[s]
      ;(o = e[f]), (i = e[f + 1]), (e[f] = a), (e[f + 1] = l)
    }
    for (let s = 0; s < 50; s += 10) {
      for (let u = 0; u < 10; u++) n[u] = e[s + u]
      for (let u = 0; u < 10; u++)
        e[s + u] ^= ~n[(u + 2) % 10] & n[(u + 4) % 10]
    }
    ;(e[0] ^= b1[r]), (e[1] ^= x1[r])
  }
  n.fill(0)
}
class Il extends Ah {
  constructor(t, n, r, o = !1, i = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = n),
      (this.outputLen = r),
      (this.enableXOF = o),
      (this.rounds = i),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      Nf(r),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function')
    ;(this.state = new Uint8Array(200)), (this.state32 = d1(this.state))
  }
  keccak() {
    E1(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0)
  }
  update(t) {
    Qi(this)
    const { blockLen: n, state: r } = this
    t = Fl(t)
    const o = t.length
    for (let i = 0; i < o; ) {
      const s = Math.min(n - this.pos, o - i)
      for (let u = 0; u < s; u++) r[this.pos++] ^= t[i++]
      this.pos === n && this.keccak()
    }
    return this
  }
  finish() {
    if (this.finished) return
    this.finished = !0
    const { state: t, suffix: n, pos: r, blockLen: o } = this
    ;(t[r] ^= n),
      n & 128 && r === o - 1 && this.keccak(),
      (t[o - 1] ^= 128),
      this.keccak()
  }
  writeInto(t) {
    Qi(this, !1), Oh(t), this.finish()
    const n = this.state,
      { blockLen: r } = this
    for (let o = 0, i = t.length; o < i; ) {
      this.posOut >= r && this.keccak()
      const s = Math.min(r - this.posOut, i - o)
      t.set(n.subarray(this.posOut, this.posOut + s), o),
        (this.posOut += s),
        (o += s)
    }
    return t
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error('XOF is not possible for this instance')
    return this.writeInto(t)
  }
  xof(t) {
    return Nf(t), this.xofInto(new Uint8Array(t))
  }
  digestInto(t) {
    if ((Nh(t, this), this.finished))
      throw new Error('digest() was already called')
    return this.writeInto(t), this.destroy(), t
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen))
  }
  destroy() {
    ;(this.destroyed = !0), this.state.fill(0)
  }
  _cloneInto(t) {
    const {
      blockLen: n,
      suffix: r,
      outputLen: o,
      rounds: i,
      enableXOF: s,
    } = this
    return (
      t || (t = new Il(n, r, o, s, i)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = i),
      (t.suffix = r),
      (t.outputLen = o),
      (t.enableXOF = s),
      (t.destroyed = this.destroyed),
      t
    )
  }
}
const P1 = (e, t, n) => _h(() => new Il(t, e, n)),
  S1 = P1(1, 136, 256 / 8)
function Pe(e, t) {
  const n = t || 'hex',
    r = S1(Xe(e, { strict: !1 }) ? Wt(e) : e)
  return n === 'bytes' ? r : z(r)
}
const k1 = (e) => Pe(Wt(e))
function C1(e) {
  return k1(e)
}
function T1(e) {
  let t = !0,
    n = '',
    r = 0,
    o = '',
    i = !1
  for (let s = 0; s < e.length; s++) {
    const u = e[s]
    if (
      (['(', ')', ','].includes(u) && (t = !0),
      u === '(' && r++,
      u === ')' && r--,
      !!t)
    ) {
      if (r === 0) {
        if (u === ' ' && ['event', 'function', ''].includes(o)) o = ''
        else if (((o += u), u === ')')) {
          i = !0
          break
        }
        continue
      }
      if (u === ' ') {
        e[s - 1] !== ',' && n !== ',' && n !== ',(' && ((n = ''), (t = !1))
        continue
      }
      ;(o += u), (n += u)
    }
  }
  if (!i) throw new k('Unable to normalize signature.')
  return o
}
const O1 = (e) => {
  const t = typeof e == 'string' ? e : Rg(e)
  return T1(t)
}
function Bh(e) {
  return C1(O1(e))
}
const Bl = Bh
class it extends k {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        '- Address must be a hex value of 20 bytes (40 hex characters).',
        '- Address must match its checksum counterpart.',
      ],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidAddressError',
      })
  }
}
class N1 extends Map {
  constructor(t) {
    super(),
      Object.defineProperty(this, 'maxSize', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = t)
  }
  set(t, n) {
    return (
      super.set(t, n),
      this.maxSize &&
        this.size > this.maxSize &&
        this.delete(this.keys().next().value),
      this
    )
  }
}
function ys(e, t) {
  const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    r = Pe(ht(n), 'bytes'),
    o = (t ? n.substring(`${t}0x`.length) : n).split('')
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()),
      (r[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase())
  return `0x${o.join('')}`
}
function A1(e, t) {
  if (!Fe(e)) throw new it({ address: e })
  return ys(e, t)
}
const _1 = /^0x[a-fA-F0-9]{40}$/,
  lu = new N1(8192)
function Fe(e, { strict: t = !0 } = {}) {
  if (lu.has(e)) return lu.get(e)
  const n = _1.test(e)
    ? e.toLowerCase() === e
      ? !0
      : t
        ? ys(e) === e
        : !0
    : !1
  return lu.set(e, n), n
}
function Pt(e) {
  return typeof e[0] == 'string' ? sr(e) : R1(e)
}
function R1(e) {
  let t = 0
  for (const o of e) t += o.length
  const n = new Uint8Array(t)
  let r = 0
  for (const o of e) n.set(o, r), (r += o.length)
  return n
}
function sr(e) {
  return `0x${e.reduce((t, n) => t + n.replace('0x', ''), '')}`
}
function ro(e, t, n, { strict: r } = {}) {
  return Xe(e, { strict: !1 })
    ? F1(e, t, n, { strict: r })
    : $h(e, t, n, { strict: r })
}
function zh(e, t) {
  if (typeof t == 'number' && t > 0 && t > Y(e) - 1)
    throw new kh({ offset: t, position: 'start', size: Y(e) })
}
function jh(e, t, n) {
  if (typeof t == 'number' && typeof n == 'number' && Y(e) !== n - t)
    throw new kh({ offset: n, position: 'end', size: Y(e) })
}
function $h(e, t, n, { strict: r } = {}) {
  zh(e, t)
  const o = e.slice(t, n)
  return r && jh(o, t, n), o
}
function F1(e, t, n, { strict: r } = {}) {
  zh(e, t)
  const o = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (n ?? e.length) * 2)}`
  return r && jh(o, t, n), o
}
function No(e, t) {
  if (e.length !== t.length)
    throw new Mg({ expectedLength: e.length, givenLength: t.length })
  const n = I1({ params: e, values: t }),
    r = jl(n)
  return r.length === 0 ? '0x' : r
}
function I1({ params: e, values: t }) {
  const n = []
  for (let r = 0; r < e.length; r++) n.push(zl({ param: e[r], value: t[r] }))
  return n
}
function zl({ param: e, value: t }) {
  const n = $l(e.type)
  if (n) {
    const [r, o] = n
    return z1(t, { length: r, param: { ...e, type: o } })
  }
  if (e.type === 'tuple') return D1(t, { param: e })
  if (e.type === 'address') return B1(t)
  if (e.type === 'bool') return $1(t)
  if (e.type.startsWith('uint') || e.type.startsWith('int')) {
    const r = e.type.startsWith('int')
    return L1(t, { signed: r })
  }
  if (e.type.startsWith('bytes')) return j1(t, { param: e })
  if (e.type === 'string') return M1(t)
  throw new Vg(e.type, { docsPath: '/docs/contract/encodeAbiParameters' })
}
function jl(e) {
  let t = 0
  for (let i = 0; i < e.length; i++) {
    const { dynamic: s, encoded: u } = e[i]
    s ? (t += 32) : (t += Y(u))
  }
  const n = [],
    r = []
  let o = 0
  for (let i = 0; i < e.length; i++) {
    const { dynamic: s, encoded: u } = e[i]
    s ? (n.push(I(t + o, { size: 32 })), r.push(u), (o += Y(u))) : n.push(u)
  }
  return Pt([...n, ...r])
}
function B1(e) {
  if (!Fe(e)) throw new it({ address: e })
  return { dynamic: !1, encoded: Ht(e.toLowerCase()) }
}
function z1(e, { length: t, param: n }) {
  const r = t === null
  if (!Array.isArray(e)) throw new qg(e)
  if (!r && e.length !== t)
    throw new $g({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`,
    })
  let o = !1
  const i = []
  for (let s = 0; s < e.length; s++) {
    const u = zl({ param: n, value: e[s] })
    u.dynamic && (o = !0), i.push(u)
  }
  if (r || o) {
    const s = jl(i)
    if (r) {
      const u = I(i.length, { size: 32 })
      return { dynamic: !0, encoded: i.length > 0 ? Pt([u, s]) : u }
    }
    if (o) return { dynamic: !0, encoded: s }
  }
  return { dynamic: !1, encoded: Pt(i.map(({ encoded: s }) => s)) }
}
function j1(e, { param: t }) {
  const [, n] = t.type.split('bytes'),
    r = Y(e)
  if (!n) {
    let o = e
    return (
      r % 32 !== 0 &&
        (o = Ht(o, {
          dir: 'right',
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: Pt([Ht(I(r, { size: 32 })), o]) }
    )
  }
  if (r !== parseInt(n)) throw new Lg({ expectedSize: parseInt(n), value: e })
  return { dynamic: !1, encoded: Ht(e, { dir: 'right' }) }
}
function $1(e) {
  if (typeof e != 'boolean')
    throw new k(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`,
    )
  return { dynamic: !1, encoded: Ht(Th(e)) }
}
function L1(e, { signed: t }) {
  return { dynamic: !1, encoded: I(e, { size: 32, signed: t }) }
}
function M1(e) {
  const t = Rl(e),
    n = Math.ceil(Y(t) / 32),
    r = []
  for (let o = 0; o < n; o++)
    r.push(Ht(ro(t, o * 32, (o + 1) * 32), { dir: 'right' }))
  return { dynamic: !0, encoded: Pt([Ht(I(Y(t), { size: 32 })), ...r]) }
}
function D1(e, { param: t }) {
  let n = !1
  const r = []
  for (let o = 0; o < t.components.length; o++) {
    const i = t.components[o],
      s = Array.isArray(e) ? o : i.name,
      u = zl({ param: i, value: e[s] })
    r.push(u), u.dynamic && (n = !0)
  }
  return { dynamic: n, encoded: n ? jl(r) : Pt(r.map(({ encoded: o }) => o)) }
}
function $l(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/)
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
const Ll = (e) => ro(Bh(e), 0, 4)
function Ao(e) {
  const { abi: t, args: n = [], name: r } = e,
    o = Xe(r, { strict: !1 }),
    i = t.filter((u) =>
      o
        ? u.type === 'function'
          ? Ll(u) === r
          : u.type === 'event'
            ? Bl(u) === r
            : !1
        : 'name' in u && u.name === r,
    )
  if (i.length === 0) return
  if (i.length === 1) return i[0]
  let s
  for (const u of i) {
    if (!('inputs' in u)) continue
    if (!n || n.length === 0) {
      if (!u.inputs || u.inputs.length === 0) return u
      continue
    }
    if (!u.inputs || u.inputs.length === 0 || u.inputs.length !== n.length)
      continue
    if (
      n.every((l, f) => {
        const c = 'inputs' in u && u.inputs[f]
        return c ? da(l, c) : !1
      })
    ) {
      if (s && 'inputs' in s && s.inputs) {
        const l = Lh(u.inputs, s.inputs, n)
        if (l)
          throw new Hg({ abiItem: u, type: l[0] }, { abiItem: s, type: l[1] })
      }
      s = u
    }
  }
  return s || i[0]
}
function da(e, t) {
  const n = typeof e,
    r = t.type
  switch (r) {
    case 'address':
      return Fe(e, { strict: !1 })
    case 'bool':
      return n === 'boolean'
    case 'function':
      return n === 'string'
    case 'string':
      return n === 'string'
    default:
      return r === 'tuple' && 'components' in t
        ? Object.values(t.components).every((o, i) =>
            da(Object.values(e)[i], o),
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
              r,
            )
          ? n === 'number' || n === 'bigint'
          : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)
            ? n === 'string' || e instanceof Uint8Array
            : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)
              ? Array.isArray(e) &&
                e.every((o) =>
                  da(o, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, '') }),
                )
              : !1
  }
}
function Lh(e, t, n) {
  for (const r in e) {
    const o = e[r],
      i = t[r]
    if (
      o.type === 'tuple' &&
      i.type === 'tuple' &&
      'components' in o &&
      'components' in i
    )
      return Lh(o.components, i.components, n[r])
    const s = [o.type, i.type]
    if (
      s.includes('address') && s.includes('bytes20')
        ? !0
        : s.includes('address') && s.includes('string')
          ? Fe(n[r], { strict: !1 })
          : s.includes('address') && s.includes('bytes')
            ? Fe(n[r], { strict: !1 })
            : !1
    )
      return s
  }
}
const Ff = '/docs/contract/encodeEventTopics'
function _o(e) {
  var a
  const { abi: t, eventName: n, args: r } = e
  let o = t[0]
  if (n) {
    const l = Ao({ abi: t, name: n })
    if (!l) throw new Cf(n, { docsPath: Ff })
    o = l
  }
  if (o.type !== 'event') throw new Cf(void 0, { docsPath: Ff })
  const i = xt(o),
    s = Bl(i)
  let u = []
  if (r && 'inputs' in o) {
    const l =
        (a = o.inputs) == null
          ? void 0
          : a.filter((c) => 'indexed' in c && c.indexed),
      f = Array.isArray(r)
        ? r
        : Object.values(r).length > 0
          ? (l == null ? void 0 : l.map((c) => r[c.name])) ?? []
          : []
    f.length > 0 &&
      (u =
        (l == null
          ? void 0
          : l.map((c, d) =>
              Array.isArray(f[d])
                ? f[d].map((v, g) => If({ param: c, value: f[d][g] }))
                : f[d]
                  ? If({ param: c, value: f[d] })
                  : null,
            )) ?? [])
  }
  return [s, ...u]
}
function If({ param: e, value: t }) {
  if (e.type === 'string' || e.type === 'bytes') return Pe(Wt(t))
  if (e.type === 'tuple' || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Kg(e.type)
  return No([e], [t])
}
function gs(e, { method: t }) {
  var r, o
  const n = {}
  return (
    e.transport.type === 'fallback' &&
      ((o = (r = e.transport).onResponse) == null ||
        o.call(r, ({ method: i, response: s, status: u, transport: a }) => {
          u === 'success' && t === i && (n[s] = a.request)
        })),
    (i) => n[i] || e.request
  )
}
async function Mh(e, t) {
  const {
      address: n,
      abi: r,
      args: o,
      eventName: i,
      fromBlock: s,
      strict: u,
      toBlock: a,
    } = t,
    l = gs(e, { method: 'eth_newFilter' }),
    f = i ? _o({ abi: r, args: o, eventName: i }) : void 0,
    c = await e.request({
      method: 'eth_newFilter',
      params: [
        {
          address: n,
          fromBlock: typeof s == 'bigint' ? I(s) : s,
          toBlock: typeof a == 'bigint' ? I(a) : a,
          topics: f,
        },
      ],
    })
  return {
    abi: r,
    args: o,
    eventName: i,
    id: c,
    request: l(c),
    strict: !!u,
    type: 'event',
  }
}
function He(e) {
  return typeof e == 'string' ? { address: e, type: 'json-rpc' } : e
}
const Bf = '/docs/contract/encodeFunctionData'
function U1(e) {
  const { abi: t, args: n, functionName: r } = e
  let o = t[0]
  if (r) {
    const i = Ao({ abi: t, args: n, name: r })
    if (!i) throw new qi(r, { docsPath: Bf })
    o = i
  }
  if (o.type !== 'function') throw new qi(void 0, { docsPath: Bf })
  return { abi: [o], functionName: Ll(xt(o)) }
}
function tn(e) {
  const { args: t } = e,
    { abi: n, functionName: r } = (() => {
      var u
      return e.abi.length === 1 &&
        (u = e.functionName) != null &&
        u.startsWith('0x')
        ? e
        : U1(e)
    })(),
    o = n[0],
    i = r,
    s = 'inputs' in o && o.inputs ? No(o.inputs, t ?? []) : void 0
  return sr([i, s ?? '0x'])
}
const Dh = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.',
  },
  H1 = {
    inputs: [{ name: 'message', type: 'string' }],
    name: 'Error',
    type: 'error',
  },
  G1 = {
    inputs: [{ name: 'reason', type: 'uint256' }],
    name: 'Panic',
    type: 'error',
  }
class zf extends k {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'NegativeOffsetError',
      })
  }
}
class Uh extends k {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'PositionOutOfBoundsError',
      })
  }
}
class V1 extends k {
  constructor({ count: t, limit: n }) {
    super(
      `Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'RecursiveReadLimitExceededError',
      })
  }
}
const W1 = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: 1 / 0,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new V1({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      })
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Uh({ length: this.bytes.length, position: e })
  },
  decrementPosition(e) {
    if (e < 0) throw new zf({ offset: e })
    const t = this.position - e
    this.assertPosition(t), (this.position = t)
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0
  },
  incrementPosition(e) {
    if (e < 0) throw new zf({ offset: e })
    const t = this.position + e
    this.assertPosition(t), (this.position = t)
  },
  inspectByte(e) {
    const t = e ?? this.position
    return this.assertPosition(t), this.bytes[t]
  },
  inspectBytes(e, t) {
    const n = t ?? this.position
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
  },
  inspectUint8(e) {
    const t = e ?? this.position
    return this.assertPosition(t), this.bytes[t]
  },
  inspectUint16(e) {
    const t = e ?? this.position
    return this.assertPosition(t + 1), this.dataView.getUint16(t)
  },
  inspectUint24(e) {
    const t = e ?? this.position
    return (
      this.assertPosition(t + 2),
      (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    )
  },
  inspectUint32(e) {
    const t = e ?? this.position
    return this.assertPosition(t + 3), this.dataView.getUint32(t)
  },
  pushByte(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1),
      this.bytes.set(e, this.position),
      (this.position += e.length)
  },
  pushUint8(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, e),
      (this.position += 2)
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, e >> 8),
      this.dataView.setUint8(this.position + 2, e & 255),
      (this.position += 3)
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, e),
      (this.position += 4)
  },
  readByte() {
    this.assertReadLimit(), this._touch()
    const e = this.inspectByte()
    return this.position++, e
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch()
    const n = this.inspectBytes(e)
    return (this.position += t ?? e), n
  },
  readUint8() {
    this.assertReadLimit(), this._touch()
    const e = this.inspectUint8()
    return (this.position += 1), e
  },
  readUint16() {
    this.assertReadLimit(), this._touch()
    const e = this.inspectUint16()
    return (this.position += 2), e
  },
  readUint24() {
    this.assertReadLimit(), this._touch()
    const e = this.inspectUint24()
    return (this.position += 3), e
  },
  readUint32() {
    this.assertReadLimit(), this._touch()
    const e = this.inspectUint32()
    return (this.position += 4), e
  },
  get remaining() {
    return this.bytes.length - this.position
  },
  setPosition(e) {
    const t = this.position
    return (
      this.assertPosition(e), (this.position = e), () => (this.position = t)
    )
  },
  _touch() {
    if (this.recursiveReadLimit === 1 / 0) return
    const e = this.getReadCount()
    this.positionReadCount.set(this.position, e + 1),
      e > 0 && this.recursiveReadCount++
  },
}
function Ml(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(W1)
  return (
    (n.bytes = e),
    (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (n.positionReadCount = new Map()),
    (n.recursiveReadLimit = t),
    n
  )
}
function q1(e, t = {}) {
  typeof t.size < 'u' && st(e, { size: t.size })
  const n = se(e, t)
  return ms(n, t)
}
function Q1(e, t = {}) {
  let n = e
  if (
    (typeof t.size < 'u' && (st(n, { size: t.size }), (n = Zn(n))),
    n.length > 1 || n[0] > 1)
  )
    throw new Yg(n)
  return !!n[0]
}
function mt(e, t = {}) {
  typeof t.size < 'u' && st(e, { size: t.size })
  const n = se(e, t)
  return Et(n, t)
}
function K1(e, t = {}) {
  let n = e
  return (
    typeof t.size < 'u' &&
      (st(n, { size: t.size }), (n = Zn(n, { dir: 'right' }))),
    new TextDecoder().decode(n)
  )
}
function vs(e, t) {
  const n = typeof t == 'string' ? qt(t) : t,
    r = Ml(n)
  if (Y(n) === 0 && e.length > 0) throw new ps()
  if (Y(t) && Y(t) < 32)
    throw new Eh({
      data: typeof t == 'string' ? t : se(t),
      params: e,
      size: Y(t),
    })
  let o = 0
  const i = []
  for (let s = 0; s < e.length; ++s) {
    const u = e[s]
    r.setPosition(o)
    const [a, l] = Gn(r, u, { staticPosition: 0 })
    ;(o += l), i.push(a)
  }
  return i
}
function Gn(e, t, { staticPosition: n }) {
  const r = $l(t.type)
  if (r) {
    const [o, i] = r
    return X1(e, { ...t, type: i }, { length: o, staticPosition: n })
  }
  if (t.type === 'tuple') return tv(e, t, { staticPosition: n })
  if (t.type === 'address') return J1(e)
  if (t.type === 'bool') return Y1(e)
  if (t.type.startsWith('bytes')) return Z1(e, t, { staticPosition: n })
  if (t.type.startsWith('uint') || t.type.startsWith('int')) return ev(e, t)
  if (t.type === 'string') return nv(e, { staticPosition: n })
  throw new Wg(t.type, { docsPath: '/docs/contract/decodeAbiParameters' })
}
const jf = 32,
  pa = 32
function J1(e) {
  const t = e.readBytes(32)
  return [ys(se($h(t, -20))), 32]
}
function X1(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const s = mt(e.readBytes(pa)),
      u = r + s,
      a = u + jf
    e.setPosition(u)
    const l = mt(e.readBytes(jf)),
      f = oo(t)
    let c = 0
    const d = []
    for (let v = 0; v < l; ++v) {
      e.setPosition(a + (f ? v * 32 : c))
      const [g, m] = Gn(e, t, { staticPosition: a })
      ;(c += m), d.push(g)
    }
    return e.setPosition(r + 32), [d, 32]
  }
  if (oo(t)) {
    const s = mt(e.readBytes(pa)),
      u = r + s,
      a = []
    for (let l = 0; l < n; ++l) {
      e.setPosition(u + l * 32)
      const [f] = Gn(e, t, { staticPosition: u })
      a.push(f)
    }
    return e.setPosition(r + 32), [a, 32]
  }
  let o = 0
  const i = []
  for (let s = 0; s < n; ++s) {
    const [u, a] = Gn(e, t, { staticPosition: r + o })
    ;(o += a), i.push(u)
  }
  return [i, o]
}
function Y1(e) {
  return [Q1(e.readBytes(32), { size: 32 }), 32]
}
function Z1(e, t, { staticPosition: n }) {
  const [r, o] = t.type.split('bytes')
  if (!o) {
    const s = mt(e.readBytes(32))
    e.setPosition(n + s)
    const u = mt(e.readBytes(32))
    if (u === 0) return e.setPosition(n + 32), ['0x', 32]
    const a = e.readBytes(u)
    return e.setPosition(n + 32), [se(a), 32]
  }
  return [se(e.readBytes(parseInt(o), 32)), 32]
}
function ev(e, t) {
  const n = t.type.startsWith('int'),
    r = parseInt(t.type.split('int')[1] || '256'),
    o = e.readBytes(32)
  return [r > 48 ? q1(o, { signed: n }) : mt(o, { signed: n }), 32]
}
function tv(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: s }) => !s),
    o = r ? [] : {}
  let i = 0
  if (oo(t)) {
    const s = mt(e.readBytes(pa)),
      u = n + s
    for (let a = 0; a < t.components.length; ++a) {
      const l = t.components[a]
      e.setPosition(u + i)
      const [f, c] = Gn(e, l, { staticPosition: u })
      ;(i += c), (o[r ? a : l == null ? void 0 : l.name] = f)
    }
    return e.setPosition(n + 32), [o, 32]
  }
  for (let s = 0; s < t.components.length; ++s) {
    const u = t.components[s],
      [a, l] = Gn(e, u, { staticPosition: n })
    ;(o[r ? s : u == null ? void 0 : u.name] = a), (i += l)
  }
  return [o, i]
}
function nv(e, { staticPosition: t }) {
  const n = mt(e.readBytes(32)),
    r = t + n
  e.setPosition(r)
  const o = mt(e.readBytes(32))
  if (o === 0) return e.setPosition(t + 32), ['', 32]
  const i = e.readBytes(o, 32),
    s = K1(Zn(i))
  return e.setPosition(t + 32), [s, 32]
}
function oo(e) {
  var r
  const { type: t } = e
  if (t === 'string' || t === 'bytes' || t.endsWith('[]')) return !0
  if (t === 'tuple') return (r = e.components) == null ? void 0 : r.some(oo)
  const n = $l(e.type)
  return !!(n && oo({ ...e, type: n[1] }))
}
function rv(e) {
  const { abi: t, data: n } = e,
    r = ro(n, 0, 4)
  if (r === '0x') throw new ps()
  const i = [...(t || []), H1, G1].find(
    (s) => s.type === 'error' && r === Ll(xt(s)),
  )
  if (!i) throw new Ph(r, { docsPath: '/docs/contract/decodeErrorResult' })
  return {
    abiItem: i,
    args:
      'inputs' in i && i.inputs && i.inputs.length > 0
        ? vs(i.inputs, ro(n, 4))
        : void 0,
    errorName: i.name,
  }
}
const le = (e, t, n) =>
  JSON.stringify(
    e,
    (r, o) => {
      const i = typeof o == 'bigint' ? o.toString() : o
      return typeof t == 'function' ? t(r, i) : i
    },
    n,
  )
function Hh({
  abiItem: e,
  args: t,
  includeFunctionName: n = !0,
  includeName: r = !1,
}) {
  if ('name' in e && 'inputs' in e && e.inputs)
    return `${n ? e.name : ''}(${e.inputs
      .map(
        (o, i) =>
          `${r && o.name ? `${o.name}: ` : ''}${
            typeof t[i] == 'object' ? le(t[i]) : t[i]
          }`,
      )
      .join(', ')})`
}
const Gh = { gwei: 9, wei: 18 },
  ov = { ether: -9, wei: 9 }
function Vh(e, t) {
  let n = e.toString()
  const r = n.startsWith('-')
  r && (n = n.slice(1)), (n = n.padStart(t, '0'))
  let [o, i] = [n.slice(0, n.length - t), n.slice(n.length - t)]
  return (
    (i = i.replace(/(0+)$/, '')),
    `${r ? '-' : ''}${o || '0'}${i ? `.${i}` : ''}`
  )
}
function Dl(e, t = 'wei') {
  return Vh(e, Gh[t])
}
function Te(e, t = 'wei') {
  return Vh(e, ov[t])
}
class iv extends k {
  constructor({ address: t }) {
    super(`State for account "${t}" is set multiple times.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AccountStateConflictError',
      })
  }
}
class sv extends k {
  constructor() {
    super('state and stateDiff are set on the same account.'),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'StateAssignmentConflictError',
      })
  }
}
function $f(e) {
  return e.reduce(
    (t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`,
    '',
  )
}
function uv(e) {
  return e
    .reduce(
      (t, { address: n, ...r }) => {
        let o = `${t}    ${n}:
`
        return (
          r.nonce &&
            (o += `      nonce: ${r.nonce}
`),
          r.balance &&
            (o += `      balance: ${r.balance}
`),
          r.code &&
            (o += `      code: ${r.code}
`),
          r.state &&
            ((o += `      state:
`),
            (o += $f(r.state))),
          r.stateDiff &&
            ((o += `      stateDiff:
`),
            (o += $f(r.stateDiff))),
          o
        )
      },
      `  State Override:
`,
    )
    .slice(0, -1)
}
function Ro(e) {
  const t = Object.entries(e)
      .map(([r, o]) => (o === void 0 || o === !1 ? null : [r, o]))
      .filter(Boolean),
    n = t.reduce((r, [o]) => Math.max(r, o.length), 0)
  return t
    .map(([r, o]) => `  ${`${r}:`.padEnd(n + 1)}  ${o}`)
    .join(`
`)
}
class av extends k {
  constructor() {
    super(
      [
        'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
        'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
      ].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'FeeConflictError',
      })
  }
}
class lv extends k {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidLegacyVError',
      })
  }
}
class cv extends k {
  constructor({ transaction: t }) {
    super('Cannot infer a transaction type from provided transaction.', {
      metaMessages: [
        'Provided Transaction:',
        '{',
        Ro(t),
        '}',
        '',
        'To infer the type, either provide:',
        '- a `type` to the Transaction, or',
        '- an EIP-1559 Transaction with `maxFeePerGas`, or',
        '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
        '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
        '- a Legacy Transaction with `gasPrice`',
      ],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidSerializableTransactionError',
      })
  }
}
class fv extends k {
  constructor({ storageKey: t }) {
    super(
      `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
        (t.length - 2) / 2,
      )} bytes.`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidStorageKeySizeError',
      })
  }
}
class dv extends k {
  constructor(
    t,
    {
      account: n,
      docsPath: r,
      chain: o,
      data: i,
      gas: s,
      gasPrice: u,
      maxFeePerGas: a,
      maxPriorityFeePerGas: l,
      nonce: f,
      to: c,
      value: d,
    },
  ) {
    var g
    const v = Ro({
      chain:
        o &&
        `${o == null ? void 0 : o.name} (id: ${o == null ? void 0 : o.id})`,
      from: n == null ? void 0 : n.address,
      to: c,
      value:
        typeof d < 'u' &&
        `${Dl(d)} ${
          ((g = o == null ? void 0 : o.nativeCurrency) == null
            ? void 0
            : g.symbol) || 'ETH'
        }`,
      data: i,
      gas: s,
      gasPrice: typeof u < 'u' && `${Te(u)} gwei`,
      maxFeePerGas: typeof a < 'u' && `${Te(a)} gwei`,
      maxPriorityFeePerGas: typeof l < 'u' && `${Te(l)} gwei`,
      nonce: f,
    })
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
        'Request Arguments:',
        v,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, 'cause', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TransactionExecutionError',
      }),
      (this.cause = t)
  }
}
class Wh extends k {
  constructor({
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    hash: o,
    index: i,
  }) {
    let s = 'Transaction'
    r &&
      i !== void 0 &&
      (s = `Transaction at block time "${r}" at index "${i}"`),
      t &&
        i !== void 0 &&
        (s = `Transaction at block hash "${t}" at index "${i}"`),
      n &&
        i !== void 0 &&
        (s = `Transaction at block number "${n}" at index "${i}"`),
      o && (s = `Transaction with hash "${o}"`),
      super(`${s} could not be found.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TransactionNotFoundError',
      })
  }
}
class qh extends k {
  constructor({ hash: t }) {
    super(
      `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TransactionReceiptNotFoundError',
      })
  }
}
class pv extends k {
  constructor({ hash: t }) {
    super(
      `Timed out while waiting for transaction with hash "${t}" to be confirmed.`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'WaitForTransactionReceiptTimeoutError',
      })
  }
}
class Qh extends k {
  constructor(
    t,
    {
      account: n,
      docsPath: r,
      chain: o,
      data: i,
      gas: s,
      gasPrice: u,
      maxFeePerGas: a,
      maxPriorityFeePerGas: l,
      nonce: f,
      to: c,
      value: d,
      stateOverride: v,
    },
  ) {
    var b
    const g = n ? He(n) : void 0
    let m = Ro({
      from: g == null ? void 0 : g.address,
      to: c,
      value:
        typeof d < 'u' &&
        `${Dl(d)} ${
          ((b = o == null ? void 0 : o.nativeCurrency) == null
            ? void 0
            : b.symbol) || 'ETH'
        }`,
      data: i,
      gas: s,
      gasPrice: typeof u < 'u' && `${Te(u)} gwei`,
      maxFeePerGas: typeof a < 'u' && `${Te(a)} gwei`,
      maxPriorityFeePerGas: typeof l < 'u' && `${Te(l)} gwei`,
      nonce: f,
    })
    v &&
      (m += `
${uv(v)}`),
      super(t.shortMessage, {
        cause: t,
        docsPath: r,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
          'Raw Call Arguments:',
          m,
        ].filter(Boolean),
      }),
      Object.defineProperty(this, 'cause', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'CallExecutionError',
      }),
      (this.cause = t)
  }
}
class hv extends k {
  constructor(
    t,
    {
      abi: n,
      args: r,
      contractAddress: o,
      docsPath: i,
      functionName: s,
      sender: u,
    },
  ) {
    const a = Ao({ abi: n, args: r, name: s }),
      l = a
        ? Hh({ abiItem: a, args: r, includeFunctionName: !1, includeName: !1 })
        : void 0,
      f = a ? xt(a, { includeName: !0 }) : void 0,
      c = Ro({
        address: o && Bg(o),
        function: f,
        args:
          l &&
          l !== '()' &&
          `${[...Array((s == null ? void 0 : s.length) ?? 0).keys()]
            .map(() => ' ')
            .join('')}${l}`,
        sender: u,
      })
    super(
      t.shortMessage ||
        `An unknown error occurred while executing the contract function "${s}".`,
      {
        cause: t,
        docsPath: i,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
          'Contract Call:',
          c,
        ].filter(Boolean),
      },
    ),
      Object.defineProperty(this, 'abi', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'args', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'cause', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'contractAddress', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'formattedArgs', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'functionName', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'sender', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ContractFunctionExecutionError',
      }),
      (this.abi = n),
      (this.args = r),
      (this.cause = t),
      (this.contractAddress = o),
      (this.functionName = s),
      (this.sender = u)
  }
}
class ha extends k {
  constructor({ abi: t, data: n, functionName: r, message: o }) {
    let i, s, u, a
    if (n && n !== '0x')
      try {
        s = rv({ abi: t, data: n })
        const { abiItem: f, errorName: c, args: d } = s
        if (c === 'Error') a = d[0]
        else if (c === 'Panic') {
          const [v] = d
          a = Dh[v]
        } else {
          const v = f ? xt(f, { includeName: !0 }) : void 0,
            g =
              f && d
                ? Hh({
                    abiItem: f,
                    args: d,
                    includeFunctionName: !1,
                    includeName: !1,
                  })
                : void 0
          u = [
            v ? `Error: ${v}` : '',
            g && g !== '()'
              ? `       ${[
                  ...Array((c == null ? void 0 : c.length) ?? 0).keys(),
                ]
                  .map(() => ' ')
                  .join('')}${g}`
              : '',
          ]
        }
      } catch (f) {
        i = f
      }
    else o && (a = o)
    let l
    i instanceof Ph &&
      ((l = i.signature),
      (u = [
        `Unable to decode signature "${l}" as it was not found on the provided ABI.`,
        'Make sure you are using the correct ABI and that the error exists on it.',
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`,
      ])),
      super(
        (a && a !== 'execution reverted') || l
          ? [
              `The contract function "${r}" reverted with the following ${
                l ? 'signature' : 'reason'
              }:`,
              a || l,
            ].join(`
`)
          : `The contract function "${r}" reverted.`,
        { cause: i, metaMessages: u },
      ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ContractFunctionRevertedError',
      }),
      Object.defineProperty(this, 'data', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'reason', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'signature', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = s),
      (this.reason = a),
      (this.signature = l)
  }
}
class mv extends k {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        'This could be due to any of the following:',
        `  - The contract does not have the function "${t}",`,
        '  - The parameters passed to the contract function may be invalid, or',
        '  - The address is not a contract.',
      ],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ContractFunctionZeroDataError',
      })
  }
}
class Ul extends k {
  constructor({ data: t, message: n }) {
    super(n || ''),
      Object.defineProperty(this, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'RawContractError',
      }),
      Object.defineProperty(this, 'data', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = t)
  }
}
class $r extends k {
  constructor({ body: t, details: n, headers: r, status: o, url: i }) {
    super('HTTP request failed.', {
      details: n,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${_l(i)}`,
        t && `Request body: ${le(t)}`,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'HttpRequestError',
      }),
      Object.defineProperty(this, 'body', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'headers', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'status', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'url', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.body = t),
      (this.headers = r),
      (this.status = o),
      (this.url = i)
  }
}
class Kh extends k {
  constructor({ body: t, error: n, url: r }) {
    super('RPC Request failed.', {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${_l(r)}`, `Request body: ${le(t)}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'RpcRequestError',
      }),
      Object.defineProperty(this, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.code = n.code)
  }
}
class Lf extends k {
  constructor({ body: t, url: n }) {
    super('The request took too long to respond.', {
      details: 'The request timed out.',
      metaMessages: [`URL: ${_l(n)}`, `Request body: ${le(t)}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TimeoutError',
      })
  }
}
const yv = -1
class Oe extends k {
  constructor(t, { code: n, docsPath: r, metaMessages: o, shortMessage: i }) {
    super(i, {
      cause: t,
      docsPath: r,
      metaMessages: o || (t == null ? void 0 : t.metaMessages),
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'RpcError',
      }),
      Object.defineProperty(this, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.name = t.name),
      (this.code = t instanceof Kh ? t.code : n ?? yv)
  }
}
class ur extends Oe {
  constructor(t, n) {
    super(t, n),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ProviderRpcError',
      }),
      Object.defineProperty(this, 'data', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = n.data)
  }
}
class io extends Oe {
  constructor(t) {
    super(t, {
      code: io.code,
      shortMessage:
        'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ParseRpcError',
      })
  }
}
Object.defineProperty(io, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
})
class so extends Oe {
  constructor(t) {
    super(t, {
      code: so.code,
      shortMessage: 'JSON is not a valid request object.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidRequestRpcError',
      })
  }
}
Object.defineProperty(so, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
})
class uo extends Oe {
  constructor(t) {
    super(t, {
      code: uo.code,
      shortMessage: 'The method does not exist / is not available.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'MethodNotFoundRpcError',
      })
  }
}
Object.defineProperty(uo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
})
class ao extends Oe {
  constructor(t) {
    super(t, {
      code: ao.code,
      shortMessage: [
        'Invalid parameters were provided to the RPC method.',
        'Double check you have provided the correct parameters.',
      ].join(`
`),
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidParamsRpcError',
      })
  }
}
Object.defineProperty(ao, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
})
class wn extends Oe {
  constructor(t) {
    super(t, {
      code: wn.code,
      shortMessage: 'An internal error was received.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InternalRpcError',
      })
  }
}
Object.defineProperty(wn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
})
class bn extends Oe {
  constructor(t) {
    super(t, {
      code: bn.code,
      shortMessage: [
        'Missing or invalid parameters.',
        'Double check you have provided the correct parameters.',
      ].join(`
`),
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidInputRpcError',
      })
  }
}
Object.defineProperty(bn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
})
class lo extends Oe {
  constructor(t) {
    super(t, { code: lo.code, shortMessage: 'Requested resource not found.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ResourceNotFoundRpcError',
      })
  }
}
Object.defineProperty(lo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
})
class co extends Oe {
  constructor(t) {
    super(t, {
      code: co.code,
      shortMessage: 'Requested resource not available.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ResourceUnavailableRpcError',
      })
  }
}
Object.defineProperty(co, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
})
class fo extends Oe {
  constructor(t) {
    super(t, { code: fo.code, shortMessage: 'Transaction creation failed.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TransactionRejectedRpcError',
      })
  }
}
Object.defineProperty(fo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
})
class po extends Oe {
  constructor(t) {
    super(t, { code: po.code, shortMessage: 'Method is not implemented.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'MethodNotSupportedRpcError',
      })
  }
}
Object.defineProperty(po, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
})
class er extends Oe {
  constructor(t) {
    super(t, { code: er.code, shortMessage: 'Request exceeds defined limit.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'LimitExceededRpcError',
      })
  }
}
Object.defineProperty(er, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
})
class ho extends Oe {
  constructor(t) {
    super(t, {
      code: ho.code,
      shortMessage: 'Version of JSON-RPC protocol is not supported.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'JsonRpcVersionUnsupportedError',
      })
  }
}
Object.defineProperty(ho, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
})
class Vn extends ur {
  constructor(t) {
    super(t, { code: Vn.code, shortMessage: 'User rejected the request.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'UserRejectedRequestError',
      })
  }
}
Object.defineProperty(Vn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
})
class mo extends ur {
  constructor(t) {
    super(t, {
      code: mo.code,
      shortMessage:
        'The requested method and/or account has not been authorized by the user.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'UnauthorizedProviderError',
      })
  }
}
Object.defineProperty(mo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
})
class yo extends ur {
  constructor(t) {
    super(t, {
      code: yo.code,
      shortMessage: 'The Provider does not support the requested method.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'UnsupportedProviderMethodError',
      })
  }
}
Object.defineProperty(yo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
})
class go extends ur {
  constructor(t) {
    super(t, {
      code: go.code,
      shortMessage: 'The Provider is disconnected from all chains.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ProviderDisconnectedError',
      })
  }
}
Object.defineProperty(go, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
})
class vo extends ur {
  constructor(t) {
    super(t, {
      code: vo.code,
      shortMessage: 'The Provider is not connected to the requested chain.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ChainDisconnectedError',
      })
  }
}
Object.defineProperty(vo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
})
class wo extends ur {
  constructor(t) {
    super(t, {
      code: wo.code,
      shortMessage: 'An error occurred when attempting to switch chain.',
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'SwitchChainError',
      })
  }
}
Object.defineProperty(wo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
})
class gv extends Oe {
  constructor(t) {
    super(t, { shortMessage: 'An unknown RPC error occurred.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'UnknownRpcError',
      })
  }
}
const vv = 3
function bo(
  e,
  { abi: t, address: n, args: r, docsPath: o, functionName: i, sender: s },
) {
  const {
      code: u,
      data: a,
      message: l,
      shortMessage: f,
    } = e instanceof Ul
      ? e
      : e instanceof k
        ? e.walk((d) => 'data' in d) || e.walk()
        : {},
    c =
      e instanceof ps
        ? new mv({ functionName: i })
        : [vv, wn.code].includes(u) && (a || l || f)
          ? new ha({
              abi: t,
              data: typeof a == 'object' ? a.data : a,
              functionName: i,
              message: f ?? l,
            })
          : e
  return new hv(c, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: o,
    functionName: i,
    sender: s,
  })
}
class wv extends k {
  constructor(
    t,
    {
      account: n,
      docsPath: r,
      chain: o,
      data: i,
      gas: s,
      gasPrice: u,
      maxFeePerGas: a,
      maxPriorityFeePerGas: l,
      nonce: f,
      to: c,
      value: d,
    },
  ) {
    var g
    const v = Ro({
      from: n == null ? void 0 : n.address,
      to: c,
      value:
        typeof d < 'u' &&
        `${Dl(d)} ${
          ((g = o == null ? void 0 : o.nativeCurrency) == null
            ? void 0
            : g.symbol) || 'ETH'
        }`,
      data: i,
      gas: s,
      gasPrice: typeof u < 'u' && `${Te(u)} gwei`,
      maxFeePerGas: typeof a < 'u' && `${Te(a)} gwei`,
      maxPriorityFeePerGas: typeof l < 'u' && `${Te(l)} gwei`,
      nonce: f,
    })
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
        'Estimate Gas Arguments:',
        v,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, 'cause', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'EstimateGasExecutionError',
      }),
      (this.cause = t)
  }
}
class jn extends k {
  constructor({ cause: t, message: n } = {}) {
    var o
    const r =
      (o = n == null ? void 0 : n.replace('execution reverted: ', '')) == null
        ? void 0
        : o.replace('execution reverted', '')
    super(
      `Execution reverted ${
        r ? `with reason: ${r}` : 'for an unknown reason'
      }.`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ExecutionRevertedError',
      })
  }
}
Object.defineProperty(jn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
})
Object.defineProperty(jn, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
})
class xn extends k {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${Te(n)} gwei` : ''
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'FeeCapTooHigh',
      })
  }
}
Object.defineProperty(xn, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
})
class ma extends k {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${Te(n)}` : ''
      } gwei) cannot be lower than the block base fee.`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'FeeCapTooLow',
      })
  }
}
Object.defineProperty(ma, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
})
class ya extends k {
  constructor({ cause: t, nonce: n } = {}) {
    super(
      `Nonce provided for the transaction ${
        n ? `(${n}) ` : ''
      }is higher than the next one expected.`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'NonceTooHighError',
      })
  }
}
Object.defineProperty(ya, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
})
class ga extends k {
  constructor({ cause: t, nonce: n } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          n ? `(${n}) ` : ''
        }is lower than the current nonce of the account.`,
        'Try increasing the nonce or find the latest nonce with `getTransactionCount`.',
      ].join(`
`),
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'NonceTooLowError',
      })
  }
}
Object.defineProperty(ga, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
})
class va extends k {
  constructor({ cause: t, nonce: n } = {}) {
    super(
      `Nonce provided for the transaction ${
        n ? `(${n}) ` : ''
      }exceeds the maximum allowed nonce.`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'NonceMaxValueError',
      })
  }
}
Object.defineProperty(va, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
})
class wa extends k {
  constructor({ cause: t } = {}) {
    super(
      [
        'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.',
      ].join(`
`),
      {
        cause: t,
        metaMessages: [
          'This error could arise when the account does not have enough funds to:',
          ' - pay for the total gas fee,',
          ' - pay for the value to send.',
          ' ',
          'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
          ' - `gas` is the amount of gas needed for transaction to execute,',
          ' - `gas fee` is the gas fee,',
          ' - `value` is the amount of ether to send to the recipient.',
        ],
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InsufficientFundsError',
      })
  }
}
Object.defineProperty(wa, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/,
})
class ba extends k {
  constructor({ cause: t, gas: n } = {}) {
    super(
      `The amount of gas ${
        n ? `(${n}) ` : ''
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'IntrinsicGasTooHighError',
      })
  }
}
Object.defineProperty(ba, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
})
class xa extends k {
  constructor({ cause: t, gas: n } = {}) {
    super(
      `The amount of gas ${
        n ? `(${n}) ` : ''
      }provided for the transaction is too low.`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'IntrinsicGasTooLowError',
      })
  }
}
Object.defineProperty(xa, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
})
class Ea extends k {
  constructor({ cause: t }) {
    super('The transaction type is not supported for this chain.', {
      cause: t,
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TransactionTypeNotSupportedError',
      })
  }
}
Object.defineProperty(Ea, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
})
class xo extends k {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          n ? ` = ${Te(n)} gwei` : ''
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          r ? ` = ${Te(r)} gwei` : ''
        }).`,
      ].join(`
`),
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TipAboveFeeCapError',
      })
  }
}
Object.defineProperty(xo, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
})
class ws extends k {
  constructor({ cause: t }) {
    super(
      `An error occurred while executing: ${
        t == null ? void 0 : t.shortMessage
      }`,
      { cause: t },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'UnknownNodeError',
      })
  }
}
function Hl(e, t) {
  const n = (e.details || '').toLowerCase(),
    r = e instanceof k ? e.walk((o) => o.code === jn.code) : e
  return r instanceof k
    ? new jn({ cause: e, message: r.details })
    : jn.nodeMessage.test(n)
      ? new jn({ cause: e, message: e.details })
      : xn.nodeMessage.test(n)
        ? new xn({
            cause: e,
            maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
          })
        : ma.nodeMessage.test(n)
          ? new ma({
              cause: e,
              maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
            })
          : ya.nodeMessage.test(n)
            ? new ya({ cause: e, nonce: t == null ? void 0 : t.nonce })
            : ga.nodeMessage.test(n)
              ? new ga({ cause: e, nonce: t == null ? void 0 : t.nonce })
              : va.nodeMessage.test(n)
                ? new va({ cause: e, nonce: t == null ? void 0 : t.nonce })
                : wa.nodeMessage.test(n)
                  ? new wa({ cause: e })
                  : ba.nodeMessage.test(n)
                    ? new ba({ cause: e, gas: t == null ? void 0 : t.gas })
                    : xa.nodeMessage.test(n)
                      ? new xa({ cause: e, gas: t == null ? void 0 : t.gas })
                      : Ea.nodeMessage.test(n)
                        ? new Ea({ cause: e })
                        : xo.nodeMessage.test(n)
                          ? new xo({
                              cause: e,
                              maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
                              maxPriorityFeePerGas:
                                t == null ? void 0 : t.maxPriorityFeePerGas,
                            })
                          : new ws({ cause: e })
}
function bv(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = Hl(e, n)
    return o instanceof ws ? e : o
  })()
  return new wv(r, { docsPath: t, ...n })
}
function Gl(e, { format: t }) {
  if (!t) return {}
  const n = {}
  function r(i) {
    const s = Object.keys(i)
    for (const u of s)
      u in e && (n[u] = e[u]),
        i[u] && typeof i[u] == 'object' && !Array.isArray(i[u]) && r(i[u])
  }
  const o = t(e || {})
  return r(o), n
}
const xv = { legacy: '0x0', eip2930: '0x1', eip1559: '0x2', eip4844: '0x3' }
function bs(e) {
  const t = { ...e }
  return (
    typeof e.blobs < 'u' &&
      typeof e.blobs[0] != 'string' &&
      (t.blobs = e.blobs.map((n) => se(n))),
    typeof e.gas < 'u' && (t.gas = I(e.gas)),
    typeof e.gasPrice < 'u' && (t.gasPrice = I(e.gasPrice)),
    typeof e.maxFeePerBlobGas < 'u' &&
      (t.maxFeePerBlobGas = I(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < 'u' && (t.maxFeePerGas = I(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < 'u' &&
      (t.maxPriorityFeePerGas = I(e.maxPriorityFeePerGas)),
    typeof e.nonce < 'u' && (t.nonce = I(e.nonce)),
    typeof e.type < 'u' && (t.type = xv[e.type]),
    typeof e.value < 'u' && (t.value = I(e.value)),
    t
  )
}
function Fo(e) {
  const {
      account: t,
      gasPrice: n,
      maxFeePerGas: r,
      maxPriorityFeePerGas: o,
      to: i,
    } = e,
    s = t ? He(t) : void 0
  if (s && !Fe(s.address)) throw new it({ address: s.address })
  if (i && !Fe(i)) throw new it({ address: i })
  if (typeof n < 'u' && (typeof r < 'u' || typeof o < 'u')) throw new av()
  if (r && r > 2n ** 256n - 1n) throw new xn({ maxFeePerGas: r })
  if (o && r && o > r)
    throw new xo({ maxFeePerGas: r, maxPriorityFeePerGas: o })
}
class Ev extends k {
  constructor() {
    super('`baseFeeMultiplier` must be greater than 1.'),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'BaseFeeScalarError',
      })
  }
}
class Vl extends k {
  constructor() {
    super('Chain does not support EIP-1559 fees.'),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'Eip1559FeesNotSupportedError',
      })
  }
}
class Pv extends k {
  constructor({ maxPriorityFeePerGas: t }) {
    super(
      `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Te(
        t,
      )} gwei).`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'MaxFeePerGasTooLowError',
      })
  }
}
class Jh extends k {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = 'Block'
    t && (r = `Block at hash "${t}"`),
      n && (r = `Block at number "${n}"`),
      super(`${r} could not be found.`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'BlockNotFoundError',
      })
  }
}
const Xh = {
  '0x0': 'legacy',
  '0x1': 'eip2930',
  '0x2': 'eip1559',
  '0x3': 'eip4844',
}
function Yh(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? Et(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? Et(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? Xh[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0,
  }
  return (
    (t.yParity = (() => {
      if (e.yParity) return Number(e.yParity)
      if (typeof t.v == 'bigint') {
        if (t.v === 0n || t.v === 27n) return 0
        if (t.v === 1n || t.v === 28n) return 1
        if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0
      }
    })()),
    t.type === 'legacy' &&
      (delete t.accessList,
      delete t.maxFeePerBlobGas,
      delete t.maxFeePerGas,
      delete t.maxPriorityFeePerGas,
      delete t.yParity),
    t.type === 'eip2930' &&
      (delete t.maxFeePerBlobGas,
      delete t.maxFeePerGas,
      delete t.maxPriorityFeePerGas),
    t.type === 'eip1559' && delete t.maxFeePerBlobGas,
    t
  )
}
function Zh(e) {
  var n
  const t =
    (n = e.transactions) == null
      ? void 0
      : n.map((r) => (typeof r == 'string' ? r : Yh(r)))
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
  }
}
async function Qt(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: o } = {},
) {
  var f, c, d
  const i = r ?? 'latest',
    s = o ?? !1,
    u = n !== void 0 ? I(n) : void 0
  let a = null
  if (
    (t
      ? (a = await e.request({ method: 'eth_getBlockByHash', params: [t, s] }))
      : (a = await e.request({
          method: 'eth_getBlockByNumber',
          params: [u || i, s],
        })),
    !a)
  )
    throw new Jh({ blockHash: t, blockNumber: n })
  return (
    ((d =
      (c = (f = e.chain) == null ? void 0 : f.formatters) == null
        ? void 0
        : c.block) == null
      ? void 0
      : d.format) || Zh
  )(a)
}
async function Wl(e) {
  const t = await e.request({ method: 'eth_gasPrice' })
  return BigInt(t)
}
async function Sv(e, t) {
  return e0(e, t)
}
async function e0(e, t) {
  var i, s, u
  const { block: n, chain: r = e.chain, request: o } = t || {}
  if (
    typeof ((i = r == null ? void 0 : r.fees) == null
      ? void 0
      : i.defaultPriorityFee) == 'function'
  ) {
    const a = n || (await R(e, Qt, 'getBlock')({}))
    return r.fees.defaultPriorityFee({ block: a, client: e, request: o })
  }
  if (
    typeof ((s = r == null ? void 0 : r.fees) == null
      ? void 0
      : s.defaultPriorityFee) < 'u'
  )
    return (u = r == null ? void 0 : r.fees) == null
      ? void 0
      : u.defaultPriorityFee
  try {
    const a = await e.request({ method: 'eth_maxPriorityFeePerGas' })
    return ms(a)
  } catch {
    const [a, l] = await Promise.all([
      n ? Promise.resolve(n) : R(e, Qt, 'getBlock')({}),
      R(e, Wl, 'getGasPrice')({}),
    ])
    if (typeof a.baseFeePerGas != 'bigint') throw new Vl()
    const f = l - a.baseFeePerGas
    return f < 0n ? 0n : f
  }
}
async function kv(e, t) {
  return Pa(e, t)
}
async function Pa(e, t) {
  var d, v
  const {
      block: n,
      chain: r = e.chain,
      request: o,
      type: i = 'eip1559',
    } = t || {},
    s = await (async () => {
      var g, m
      return typeof ((g = r == null ? void 0 : r.fees) == null
        ? void 0
        : g.baseFeeMultiplier) == 'function'
        ? r.fees.baseFeeMultiplier({ block: n, client: e, request: o })
        : ((m = r == null ? void 0 : r.fees) == null
            ? void 0
            : m.baseFeeMultiplier) ?? 1.2
    })()
  if (s < 1) throw new Ev()
  const a =
      10 **
      (((d = s.toString().split('.')[1]) == null ? void 0 : d.length) ?? 0),
    l = (g) => (g * BigInt(Math.ceil(s * a))) / BigInt(a),
    f = n || (await R(e, Qt, 'getBlock')({}))
  if (
    typeof ((v = r == null ? void 0 : r.fees) == null
      ? void 0
      : v.estimateFeesPerGas) == 'function'
  )
    return r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: l,
      request: o,
      type: i,
    })
  if (i === 'eip1559') {
    if (typeof f.baseFeePerGas != 'bigint') throw new Vl()
    const g =
        typeof (o == null ? void 0 : o.maxPriorityFeePerGas) == 'bigint'
          ? o.maxPriorityFeePerGas
          : await e0(e, { block: f, chain: r, request: o }),
      m = l(f.baseFeePerGas)
    return {
      maxFeePerGas: (o == null ? void 0 : o.maxFeePerGas) ?? m + g,
      maxPriorityFeePerGas: g,
    }
  }
  return {
    gasPrice:
      (o == null ? void 0 : o.gasPrice) ?? l(await R(e, Wl, 'getGasPrice')({})),
  }
}
async function t0(e, { address: t, blockTag: n = 'latest', blockNumber: r }) {
  const o = await e.request({
    method: 'eth_getTransactionCount',
    params: [t, r ? I(r) : n],
  })
  return Et(o)
}
function n0(e) {
  if (e.type) return e.type
  if (
    typeof e.blobs < 'u' ||
    typeof e.blobVersionedHashes < 'u' ||
    typeof e.maxFeePerBlobGas < 'u' ||
    typeof e.sidecars < 'u'
  )
    return 'eip4844'
  if (typeof e.maxFeePerGas < 'u' || typeof e.maxPriorityFeePerGas < 'u')
    return 'eip1559'
  if (typeof e.gasPrice < 'u')
    return typeof e.accessList < 'u' ? 'eip2930' : 'legacy'
  throw new cv({ transaction: e })
}
async function Io(e) {
  const t = await e.request({ method: 'eth_chainId' })
  return Et(t)
}
async function xs(e, t) {
  const {
      account: n = e.account,
      chain: r,
      chainId: o,
      gas: i,
      nonce: s,
      parameters: u = ['chainId', 'fees', 'gas', 'nonce', 'type'],
      type: a,
    } = t,
    l = n ? He(n) : void 0,
    f = await R(e, Qt, 'getBlock')({ blockTag: 'latest' }),
    c = { ...t, ...(l ? { from: l == null ? void 0 : l.address } : {}) }
  if (
    (u.includes('chainId') &&
      (r
        ? (c.chainId = r.id)
        : typeof o < 'u'
          ? (c.chainId = o)
          : (c.chainId = await R(e, Io, 'getChainId')({}))),
    u.includes('nonce') &&
      typeof s > 'u' &&
      l &&
      (c.nonce = await R(
        e,
        t0,
        'getTransactionCount',
      )({ address: l.address, blockTag: 'pending' })),
    (u.includes('fees') || u.includes('type')) && typeof a > 'u')
  )
    try {
      c.type = n0(c)
    } catch {
      c.type = typeof f.baseFeePerGas == 'bigint' ? 'eip1559' : 'legacy'
    }
  if (u.includes('fees'))
    if (c.type === 'eip1559' || c.type === 'eip4844') {
      const { maxFeePerGas: d, maxPriorityFeePerGas: v } = await Pa(e, {
        block: f,
        chain: r,
        request: c,
      })
      if (
        typeof t.maxPriorityFeePerGas > 'u' &&
        t.maxFeePerGas &&
        t.maxFeePerGas < v
      )
        throw new Pv({ maxPriorityFeePerGas: v })
      ;(c.maxPriorityFeePerGas = v), (c.maxFeePerGas = d)
    } else {
      if (typeof t.maxFeePerGas < 'u' || typeof t.maxPriorityFeePerGas < 'u')
        throw new Vl()
      const { gasPrice: d } = await Pa(e, {
        block: f,
        chain: r,
        request: c,
        type: 'legacy',
      })
      c.gasPrice = d
    }
  return (
    u.includes('gas') &&
      typeof i > 'u' &&
      (c.gas = await R(
        e,
        ql,
        'estimateGas',
      )({
        ...c,
        account: l ? { address: l.address, type: 'json-rpc' } : void 0,
      })),
    Fo(c),
    delete c.parameters,
    c
  )
}
async function ql(e, t) {
  var o, i, s
  const n = t.account ?? e.account,
    r = n ? He(n) : void 0
  try {
    const {
        accessList: u,
        blobs: a,
        blockNumber: l,
        blockTag: f,
        data: c,
        gas: d,
        gasPrice: v,
        maxFeePerBlobGas: g,
        maxFeePerGas: m,
        maxPriorityFeePerGas: b,
        nonce: p,
        to: h,
        value: y,
        ...w
      } = (r == null ? void 0 : r.type) === 'local' ? await xs(e, t) : t,
      x = (l ? I(l) : void 0) || f
    Fo(t)
    const P =
        (s =
          (i = (o = e.chain) == null ? void 0 : o.formatters) == null
            ? void 0
            : i.transactionRequest) == null
          ? void 0
          : s.format,
      A = (P || bs)({
        ...Gl(w, { format: P }),
        from: r == null ? void 0 : r.address,
        accessList: u,
        blobs: a,
        data: c,
        gas: d,
        gasPrice: v,
        maxFeePerBlobGas: g,
        maxFeePerGas: m,
        maxPriorityFeePerGas: b,
        nonce: p,
        to: h,
        value: y,
      }),
      _ = await e.request({
        method: 'eth_estimateGas',
        params: x ? [A, x] : [A],
      })
    return BigInt(_)
  } catch (u) {
    throw bv(u, { ...t, account: r, chain: e.chain })
  }
}
async function Cv(e, t) {
  const { abi: n, address: r, args: o, functionName: i, ...s } = t,
    u = tn({ abi: n, args: o, functionName: i })
  try {
    return await R(e, ql, 'estimateGas')({ data: u, to: r, ...s })
  } catch (a) {
    const l = s.account ? He(s.account) : void 0
    throw bo(a, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/estimateContractGas',
      functionName: i,
      sender: l == null ? void 0 : l.address,
    })
  }
}
const Mf = '/docs/contract/decodeEventLog'
function Ql(e) {
  const { abi: t, data: n, strict: r, topics: o } = e,
    i = r ?? !0,
    [s, ...u] = o
  if (!s) throw new Dg({ docsPath: Mf })
  const a = t.find((m) => m.type === 'event' && s === Bl(xt(m)))
  if (!(a && 'name' in a) || a.type !== 'event')
    throw new Sh(s, { docsPath: Mf })
  const { name: l, inputs: f } = a,
    c = f == null ? void 0 : f.some((m) => !('name' in m && m.name))
  let d = c ? [] : {}
  const v = f.filter((m) => 'indexed' in m && m.indexed)
  for (let m = 0; m < v.length; m++) {
    const b = v[m],
      p = u[m]
    if (!p) throw new hs({ abiItem: a, param: b })
    d[b.name || m] = Tv({ param: b, value: p })
  }
  const g = f.filter((m) => !('indexed' in m && m.indexed))
  if (g.length > 0) {
    if (n && n !== '0x')
      try {
        const m = vs(g, n)
        if (m)
          if (c) d = [...d, ...m]
          else for (let b = 0; b < g.length; b++) d[g[b].name] = m[b]
      } catch (m) {
        if (i)
          throw m instanceof Eh || m instanceof Uh
            ? new no({ abiItem: a, data: n, params: g, size: Y(n) })
            : m
      }
    else if (i) throw new no({ abiItem: a, data: '0x', params: g, size: 0 })
  }
  return { eventName: l, args: Object.values(d).length > 0 ? d : void 0 }
}
function Tv({ param: e, value: t }) {
  return e.type === 'string' ||
    e.type === 'bytes' ||
    e.type === 'tuple' ||
    e.type.match(/^(.*)\[(\d+)?\]$/)
    ? t
    : (vs([e], t) || [])[0]
}
function Kl({ abi: e, eventName: t, logs: n, strict: r = !0 }) {
  return n
    .map((o) => {
      var i
      try {
        const s = Ql({ ...o, abi: e, strict: r })
        return t && !t.includes(s.eventName) ? null : { ...s, ...o }
      } catch (s) {
        let u, a
        if (s instanceof Sh) return null
        if (s instanceof no || s instanceof hs) {
          if (r) return null
          ;(u = s.abiItem.name),
            (a =
              (i = s.abiItem.inputs) == null
                ? void 0
                : i.some((l) => !('name' in l && l.name)))
        }
        return { ...o, args: a ? [] : {}, eventName: u }
      }
    })
    .filter(Boolean)
}
function Kt(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...(n ? { args: t, eventName: n } : {}),
  }
}
async function Jl(
  e,
  {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: o,
    event: i,
    events: s,
    args: u,
    strict: a,
  } = {},
) {
  const l = a ?? !1,
    f = s ?? (i ? [i] : void 0)
  let c = []
  f &&
    ((c = [f.flatMap((g) => _o({ abi: [g], eventName: g.name, args: u }))]),
    i && (c = c[0]))
  let d
  n
    ? (d = await e.request({
        method: 'eth_getLogs',
        params: [{ address: t, topics: c, blockHash: n }],
      }))
    : (d = await e.request({
        method: 'eth_getLogs',
        params: [
          {
            address: t,
            topics: c,
            fromBlock: typeof r == 'bigint' ? I(r) : r,
            toBlock: typeof o == 'bigint' ? I(o) : o,
          },
        ],
      }))
  const v = d.map((g) => Kt(g))
  return f ? Kl({ abi: f, logs: v, strict: l }) : v
}
async function r0(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      blockHash: i,
      eventName: s,
      fromBlock: u,
      toBlock: a,
      strict: l,
    } = t,
    f = s ? Ao({ abi: n, name: s }) : void 0,
    c = f ? void 0 : n.filter((d) => d.type === 'event')
  return R(
    e,
    Jl,
    'getLogs',
  )({
    address: r,
    args: o,
    blockHash: i,
    event: f,
    events: c,
    fromBlock: u,
    toBlock: a,
    strict: l,
  })
}
const cu = '/docs/contract/decodeFunctionResult'
function ar(e) {
  const { abi: t, args: n, functionName: r, data: o } = e
  let i = t[0]
  if (r) {
    const u = Ao({ abi: t, args: n, name: r })
    if (!u) throw new qi(r, { docsPath: cu })
    i = u
  }
  if (i.type !== 'function') throw new qi(void 0, { docsPath: cu })
  if (!i.outputs) throw new Ug(i.name, { docsPath: cu })
  const s = vs(i.outputs, o)
  if (s && s.length > 1) return s
  if (s && s.length === 1) return s[0]
}
const Ov = 'modulepreload',
  Nv = (e) => '/' + e,
  Df = {},
  Av = (t, n, r) => {
    let o = Promise.resolve()
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link')
      o = Promise.all(
        n.map((s) => {
          if (((s = Nv(s)), s in Df)) return
          Df[s] = !0
          const u = s.endsWith('.css'),
            a = u ? '[rel="stylesheet"]' : ''
          if (!!r)
            for (let c = i.length - 1; c >= 0; c--) {
              const d = i[c]
              if (d.href === s && (!u || d.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${s}"]${a}`)) return
          const f = document.createElement('link')
          if (
            ((f.rel = u ? 'stylesheet' : Ov),
            u || ((f.as = 'script'), (f.crossOrigin = '')),
            (f.href = s),
            document.head.appendChild(f),
            u)
          )
            return new Promise((c, d) => {
              f.addEventListener('load', c),
                f.addEventListener('error', () =>
                  d(new Error(`Unable to preload CSS for ${s}`)),
                )
            })
        }),
      )
    }
    return o
      .then(() => t())
      .catch((i) => {
        const s = new Event('vite:preloadError', { cancelable: !0 })
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented))
          throw i
      })
  },
  Sa = [
    {
      inputs: [
        {
          components: [
            { name: 'target', type: 'address' },
            { name: 'allowFailure', type: 'bool' },
            { name: 'callData', type: 'bytes' },
          ],
          name: 'calls',
          type: 'tuple[]',
        },
      ],
      name: 'aggregate3',
      outputs: [
        {
          components: [
            { name: 'success', type: 'bool' },
            { name: 'returnData', type: 'bytes' },
          ],
          name: 'returnData',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  o0 = [
    { inputs: [], name: 'ResolverNotFound', type: 'error' },
    { inputs: [], name: 'ResolverWildcardNotSupported', type: 'error' },
    { inputs: [], name: 'ResolverNotContract', type: 'error' },
    {
      inputs: [{ name: 'returnData', type: 'bytes' }],
      name: 'ResolverError',
      type: 'error',
    },
    {
      inputs: [
        {
          components: [
            { name: 'status', type: 'uint16' },
            { name: 'message', type: 'string' },
          ],
          name: 'errors',
          type: 'tuple[]',
        },
      ],
      name: 'HttpError',
      type: 'error',
    },
  ],
  i0 = [
    ...o0,
    {
      name: 'resolve',
      type: 'function',
      stateMutability: 'view',
      inputs: [
        { name: 'name', type: 'bytes' },
        { name: 'data', type: 'bytes' },
      ],
      outputs: [
        { name: '', type: 'bytes' },
        { name: 'address', type: 'address' },
      ],
    },
    {
      name: 'resolve',
      type: 'function',
      stateMutability: 'view',
      inputs: [
        { name: 'name', type: 'bytes' },
        { name: 'data', type: 'bytes' },
        { name: 'gateways', type: 'string[]' },
      ],
      outputs: [
        { name: '', type: 'bytes' },
        { name: 'address', type: 'address' },
      ],
    },
  ],
  _v = [
    ...o0,
    {
      name: 'reverse',
      type: 'function',
      stateMutability: 'view',
      inputs: [{ type: 'bytes', name: 'reverseName' }],
      outputs: [
        { type: 'string', name: 'resolvedName' },
        { type: 'address', name: 'resolvedAddress' },
        { type: 'address', name: 'reverseResolver' },
        { type: 'address', name: 'resolver' },
      ],
    },
    {
      name: 'reverse',
      type: 'function',
      stateMutability: 'view',
      inputs: [
        { type: 'bytes', name: 'reverseName' },
        { type: 'string[]', name: 'gateways' },
      ],
      outputs: [
        { type: 'string', name: 'resolvedName' },
        { type: 'address', name: 'resolvedAddress' },
        { type: 'address', name: 'reverseResolver' },
        { type: 'address', name: 'resolver' },
      ],
    },
  ],
  Uf = [
    {
      name: 'text',
      type: 'function',
      stateMutability: 'view',
      inputs: [
        { name: 'name', type: 'bytes32' },
        { name: 'key', type: 'string' },
      ],
      outputs: [{ name: '', type: 'string' }],
    },
  ],
  Hf = [
    {
      name: 'addr',
      type: 'function',
      stateMutability: 'view',
      inputs: [{ name: 'name', type: 'bytes32' }],
      outputs: [{ name: '', type: 'address' }],
    },
    {
      name: 'addr',
      type: 'function',
      stateMutability: 'view',
      inputs: [
        { name: 'name', type: 'bytes32' },
        { name: 'coinType', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bytes' }],
    },
  ],
  Rv = [
    {
      inputs: [
        { internalType: 'address', name: '_signer', type: 'address' },
        { internalType: 'bytes32', name: '_hash', type: 'bytes32' },
        { internalType: 'bytes', name: '_signature', type: 'bytes' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
  ],
  Fv = '0x82ad56cb'
class ka extends k {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        'This could be due to any of the following:',
        ...(t && r.blockCreated && r.blockCreated > t
          ? [
              `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`,
            ]
          : [`- The chain does not have the contract "${r.name}" configured.`]),
      ],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ChainDoesNotSupportContract',
      })
  }
}
class Iv extends k {
  constructor({ chain: t, currentChainId: n }) {
    super(
      `The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,
      {
        metaMessages: [
          `Current Chain ID:  ${n}`,
          `Expected Chain ID: ${t.id} – ${t.name}`,
        ],
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ChainMismatchError',
      })
  }
}
class Bv extends k {
  constructor() {
    super(
      [
        'No chain was provided to the request.',
        'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.',
      ].join(`
`),
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ChainNotFoundError',
      })
  }
}
class s0 extends k {
  constructor() {
    super('No chain was provided to the Client.'),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ClientChainNotConfiguredError',
      })
  }
}
class Xl extends k {
  constructor({ chainId: t }) {
    super(
      typeof t == 'number'
        ? `Chain ID "${t}" is invalid.`
        : 'Chain ID is invalid.',
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidChainIdError',
      })
  }
}
function lr({ blockNumber: e, chain: t, contract: n }) {
  var o
  const r = (o = t == null ? void 0 : t.contracts) == null ? void 0 : o[n]
  if (!r) throw new ka({ chain: t, contract: { name: n } })
  if (e && r.blockCreated && r.blockCreated > e)
    throw new ka({
      blockNumber: e,
      chain: t,
      contract: { name: n, blockCreated: r.blockCreated },
    })
  return r.address
}
function zv(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = Hl(e, n)
    return o instanceof ws ? e : o
  })()
  return new Qh(r, { docsPath: t, ...n })
}
const fu = new Map()
function u0({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: o }) {
  const i = async () => {
      const f = a()
      s()
      const c = f.map(({ args: d }) => d)
      c.length !== 0 &&
        e(c)
          .then((d) => {
            var v
            o && Array.isArray(d) && d.sort(o)
            for (let g = 0; g < f.length; g++) {
              const { pendingPromise: m } = f[g]
              ;(v = m.resolve) == null || v.call(m, [d[g], d])
            }
          })
          .catch((d) => {
            var v
            for (let g = 0; g < f.length; g++) {
              const { pendingPromise: m } = f[g]
              ;(v = m.reject) == null || v.call(m, d)
            }
          })
    },
    s = () => fu.delete(t),
    u = () => a().map(({ args: f }) => f),
    a = () => fu.get(t) || [],
    l = (f) => fu.set(t, [...a(), f])
  return {
    flush: s,
    async schedule(f) {
      const c = {},
        d = new Promise((m, b) => {
          ;(c.resolve = m), (c.reject = b)
        })
      return (
        (n == null ? void 0 : n([...u(), f])) && i(),
        a().length > 0
          ? (l({ args: f, pendingPromise: c }), d)
          : (l({ args: f, pendingPromise: c }), setTimeout(i, r), d)
      )
    },
  }
}
async function Es(e, t) {
  var w, S, x, P
  const {
      account: n = e.account,
      batch: r = !!((w = e.batch) != null && w.multicall),
      blockNumber: o,
      blockTag: i = 'latest',
      accessList: s,
      blobs: u,
      data: a,
      gas: l,
      gasPrice: f,
      maxFeePerBlobGas: c,
      maxFeePerGas: d,
      maxPriorityFeePerGas: v,
      nonce: g,
      to: m,
      value: b,
      stateOverride: p,
      ...h
    } = t,
    y = n ? He(n) : void 0
  try {
    Fo(t)
    const A = (o ? I(o) : void 0) || i,
      _ = Dv(p),
      M =
        (P =
          (x = (S = e.chain) == null ? void 0 : S.formatters) == null
            ? void 0
            : x.transactionRequest) == null
          ? void 0
          : P.format,
      fe = (M || bs)({
        ...Gl(h, { format: M }),
        from: y == null ? void 0 : y.address,
        accessList: s,
        blobs: u,
        data: a,
        gas: l,
        gasPrice: f,
        maxFeePerBlobGas: c,
        maxFeePerGas: d,
        maxPriorityFeePerGas: v,
        nonce: g,
        to: m,
        value: b,
      })
    if (r && jv({ request: fe }) && !_)
      try {
        return await $v(e, { ...fe, blockNumber: o, blockTag: i })
      } catch (dr) {
        if (!(dr instanceof s0) && !(dr instanceof ka)) throw dr
      }
    const fr = await e.request({
      method: 'eth_call',
      params: _ ? [fe, A, _] : [fe, A],
    })
    return fr === '0x' ? { data: void 0 } : { data: fr }
  } catch (T) {
    const A = Lv(T),
      { offchainLookup: _, offchainLookupSignature: M } = await Av(
        () => import('./ccip-B2M00_I2.js'),
        __vite__mapDeps([]),
      )
    if ((A == null ? void 0 : A.slice(0, 10)) === M && m)
      return { data: await _(e, { data: A, to: m }) }
    throw zv(T, { ...t, account: y, chain: e.chain })
  }
}
function jv({ request: e }) {
  const { data: t, to: n, ...r } = e
  return !(
    !t ||
    t.startsWith(Fv) ||
    !n ||
    Object.values(r).filter((o) => typeof o < 'u').length > 0
  )
}
async function $v(e, t) {
  var m
  const { batchSize: n = 1024, wait: r = 0 } =
      typeof ((m = e.batch) == null ? void 0 : m.multicall) == 'object'
        ? e.batch.multicall
        : {},
    {
      blockNumber: o,
      blockTag: i = 'latest',
      data: s,
      multicallAddress: u,
      to: a,
    } = t
  let l = u
  if (!l) {
    if (!e.chain) throw new s0()
    l = lr({ blockNumber: o, chain: e.chain, contract: 'multicall3' })
  }
  const c = (o ? I(o) : void 0) || i,
    { schedule: d } = u0({
      id: `${e.uid}.${c}`,
      wait: r,
      shouldSplitBatch(b) {
        return b.reduce((h, { data: y }) => h + (y.length - 2), 0) > n * 2
      },
      fn: async (b) => {
        const p = b.map((w) => ({
            allowFailure: !0,
            callData: w.data,
            target: w.to,
          })),
          h = tn({ abi: Sa, args: [p], functionName: 'aggregate3' }),
          y = await e.request({
            method: 'eth_call',
            params: [{ data: h, to: l }, c],
          })
        return ar({
          abi: Sa,
          args: [p],
          functionName: 'aggregate3',
          data: y || '0x',
        })
      },
    }),
    [{ returnData: v, success: g }] = await d({ data: s, to: a })
  if (!g) throw new Ul({ data: v })
  return v === '0x' ? { data: void 0 } : { data: v }
}
function Lv(e) {
  var n
  if (!(e instanceof k)) return
  const t = e.walk()
  return typeof (t == null ? void 0 : t.data) == 'object'
    ? (n = t.data) == null
      ? void 0
      : n.data
    : t.data
}
function Gf(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Tf({ size: n.length, targetSize: 66, type: 'hex' })
      if (r.length !== 66)
        throw new Tf({ size: r.length, targetSize: 66, type: 'hex' })
      return (t[n] = r), t
    }, {})
}
function Mv(e) {
  const { balance: t, nonce: n, state: r, stateDiff: o, code: i } = e,
    s = {}
  if (
    (i !== void 0 && (s.code = i),
    t !== void 0 && (s.balance = I(t, { size: 32 })),
    n !== void 0 && (s.nonce = I(n, { size: 8 })),
    r !== void 0 && (s.state = Gf(r)),
    o !== void 0)
  ) {
    if (s.state) throw new sv()
    s.stateDiff = Gf(o)
  }
  return s
}
function Dv(e) {
  if (!e) return
  const t = {}
  for (const { address: n, ...r } of e) {
    if (!Fe(n, { strict: !1 })) throw new it({ address: n })
    if (t[n]) throw new iv({ address: n })
    t[n] = Mv(r)
  }
  return t
}
async function Jt(e, t) {
  const { abi: n, address: r, args: o, functionName: i, ...s } = t,
    u = tn({ abi: n, args: o, functionName: i })
  try {
    const { data: a } = await R(e, Es, 'call')({ ...s, data: u, to: r })
    return ar({ abi: n, args: o, functionName: i, data: a || '0x' })
  } catch (a) {
    throw bo(a, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/readContract',
      functionName: i,
    })
  }
}
async function Uv(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      dataSuffix: i,
      functionName: s,
      ...u
    } = t,
    a = u.account ? He(u.account) : e.account,
    l = tn({ abi: n, args: o, functionName: s })
  try {
    const { data: f } = await R(
        e,
        Es,
        'call',
      )({
        batch: !1,
        data: `${l}${i ? i.replace('0x', '') : ''}`,
        to: r,
        ...u,
        account: a,
      }),
      c = ar({ abi: n, args: o, functionName: s, data: f || '0x' }),
      d = n.filter((v) => 'name' in v && v.name === t.functionName)
    return {
      result: c,
      request: {
        abi: d,
        address: r,
        args: o,
        dataSuffix: i,
        functionName: s,
        ...u,
        account: a,
      },
    }
  } catch (f) {
    throw bo(f, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/simulateContract',
      functionName: s,
      sender: a == null ? void 0 : a.address,
    })
  }
}
const du = new Map(),
  Vf = new Map()
let Hv = 0
function Xt(e, t, n) {
  const r = ++Hv,
    o = () => du.get(e) || [],
    i = () => {
      const f = o()
      du.set(
        e,
        f.filter((c) => c.id !== r),
      )
    },
    s = () => {
      const f = Vf.get(e)
      o().length === 1 && f && f(), i()
    },
    u = o()
  if ((du.set(e, [...u, { id: r, fns: t }]), u && u.length > 0)) return s
  const a = {}
  for (const f in t)
    a[f] = (...c) => {
      var v, g
      const d = o()
      if (d.length !== 0)
        for (const m of d) (g = (v = m.fns)[f]) == null || g.call(v, ...c)
    }
  const l = n(a)
  return typeof l == 'function' && Vf.set(e, l), s
}
async function Ca(e) {
  return new Promise((t) => setTimeout(t, e))
}
function Bo(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let o = !0
  const i = () => (o = !1)
  return (
    (async () => {
      let u
      t && (u = await e({ unpoll: i }))
      const a = (await (n == null ? void 0 : n(u))) ?? r
      await Ca(a)
      const l = async () => {
        o && (await e({ unpoll: i }), await Ca(r), l())
      }
      l()
    })(),
    i
  )
}
const Gv = new Map(),
  Vv = new Map()
function Wv(e) {
  const t = (o, i) => ({
      clear: () => i.delete(o),
      get: () => i.get(o),
      set: (s) => i.set(o, s),
    }),
    n = t(e, Gv),
    r = t(e, Vv)
  return {
    clear: () => {
      n.clear(), r.clear()
    },
    promise: n,
    response: r,
  }
}
async function qv(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
  const r = Wv(t),
    o = r.response.get()
  if (o && n > 0 && new Date().getTime() - o.created.getTime() < n)
    return o.data
  let i = r.promise.get()
  i || ((i = e()), r.promise.set(i))
  try {
    const s = await i
    return r.response.set({ created: new Date(), data: s }), s
  } finally {
    r.promise.clear()
  }
}
const Qv = (e) => `blockNumber.${e}`
async function zo(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await qv(() => e.request({ method: 'eth_blockNumber' }), {
    cacheKey: Qv(e.uid),
    cacheTime: t,
  })
  return BigInt(n)
}
async function Ps(e, { filter: t }) {
  const n = 'strict' in t && t.strict,
    r = await t.request({ method: 'eth_getFilterChanges', params: [t.id] })
  if (typeof r[0] == 'string') return r
  const o = r.map((i) => Kt(i))
  return !('abi' in t) || !t.abi ? o : Kl({ abi: t.abi, logs: o, strict: n })
}
async function Ss(e, { filter: t }) {
  return t.request({ method: 'eth_uninstallFilter', params: [t.id] })
}
function Kv(e, t) {
  const {
    abi: n,
    address: r,
    args: o,
    batch: i = !0,
    eventName: s,
    onError: u,
    onLogs: a,
    poll: l,
    pollingInterval: f = e.pollingInterval,
    strict: c,
  } = t
  return (typeof l < 'u' ? l : e.transport.type !== 'webSocket')
    ? (() => {
        const m = c ?? !1,
          b = le(['watchContractEvent', r, o, i, e.uid, s, f, m])
        return Xt(b, { onLogs: a, onError: u }, (p) => {
          let h,
            y,
            w = !1
          const S = Bo(
            async () => {
              var x
              if (!w) {
                try {
                  y = await R(
                    e,
                    Mh,
                    'createContractEventFilter',
                  )({ abi: n, address: r, args: o, eventName: s, strict: m })
                } catch {}
                w = !0
                return
              }
              try {
                let P
                if (y) P = await R(e, Ps, 'getFilterChanges')({ filter: y })
                else {
                  const T = await R(e, zo, 'getBlockNumber')({})
                  h && h !== T
                    ? (P = await R(
                        e,
                        r0,
                        'getContractEvents',
                      )({
                        abi: n,
                        address: r,
                        args: o,
                        eventName: s,
                        fromBlock: h + 1n,
                        toBlock: T,
                        strict: m,
                      }))
                    : (P = []),
                    (h = T)
                }
                if (P.length === 0) return
                if (i) p.onLogs(P)
                else for (const T of P) p.onLogs([T])
              } catch (P) {
                y && P instanceof bn && (w = !1),
                  (x = p.onError) == null || x.call(p, P)
              }
            },
            { emitOnBegin: !0, interval: f },
          )
          return async () => {
            y && (await R(e, Ss, 'uninstallFilter')({ filter: y })), S()
          }
        })
      })()
    : (() => {
        const m = c ?? !1,
          b = le(['watchContractEvent', r, o, i, e.uid, s, f, m])
        let p = !0,
          h = () => (p = !1)
        return Xt(
          b,
          { onLogs: a, onError: u },
          (y) => (
            (async () => {
              try {
                const w = s ? _o({ abi: n, eventName: s, args: o }) : [],
                  { unsubscribe: S } = await e.transport.subscribe({
                    params: ['logs', { address: r, topics: w }],
                    onData(x) {
                      var T
                      if (!p) return
                      const P = x.result
                      try {
                        const { eventName: A, args: _ } = Ql({
                            abi: n,
                            data: P.data,
                            topics: P.topics,
                            strict: c,
                          }),
                          M = Kt(P, { args: _, eventName: A })
                        y.onLogs([M])
                      } catch (A) {
                        let _, M
                        if (A instanceof no || A instanceof hs) {
                          if (c) return
                          ;(_ = A.abiItem.name),
                            (M =
                              (T = A.abiItem.inputs) == null
                                ? void 0
                                : T.some((fe) => !('name' in fe && fe.name)))
                        }
                        const ye = Kt(P, { args: M ? [] : {}, eventName: _ })
                        y.onLogs([ye])
                      }
                    },
                    onError(x) {
                      var P
                      ;(P = y.onError) == null || P.call(y, x)
                    },
                  })
                ;(h = S), p || h()
              } catch (w) {
                u == null || u(w)
              }
            })(),
            () => h()
          ),
        )
      })()
}
class ks extends k {
  constructor({ docsPath: t } = {}) {
    super(
      [
        'Could not find an Account to execute with this Action.',
        'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.',
      ].join(`
`),
      { docsPath: t, docsSlug: 'account' },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'AccountNotFoundError',
      })
  }
}
function a0({ chain: e, currentChainId: t }) {
  if (!e) throw new Bv()
  if (t !== e.id) throw new Iv({ chain: e, currentChainId: t })
}
function Jv(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = Hl(e, n)
    return o instanceof ws ? e : o
  })()
  return new dv(r, { docsPath: t, ...n })
}
function l0(e, t) {
  return () => e.apply(t, arguments)
}
const { toString: Xv } = Object.prototype,
  { getPrototypeOf: Yl } = Object,
  Cs = ((e) => (t) => {
    const n = Xv.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  ut = (e) => ((e = e.toLowerCase()), (t) => Cs(t) === e),
  Ts = (e) => (t) => typeof t === e,
  { isArray: cr } = Array,
  Eo = Ts('undefined')
function Yv(e) {
  return (
    e !== null &&
    !Eo(e) &&
    e.constructor !== null &&
    !Eo(e.constructor) &&
    Me(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const c0 = ut('ArrayBuffer')
function Zv(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && c0(e.buffer)),
    t
  )
}
const ew = Ts('string'),
  Me = Ts('function'),
  f0 = Ts('number'),
  Os = (e) => e !== null && typeof e == 'object',
  tw = (e) => e === !0 || e === !1,
  wi = (e) => {
    if (Cs(e) !== 'object') return !1
    const t = Yl(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  nw = ut('Date'),
  rw = ut('File'),
  ow = ut('Blob'),
  iw = ut('FileList'),
  sw = (e) => Os(e) && Me(e.pipe),
  uw = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Me(e.append) &&
          ((t = Cs(e)) === 'formdata' ||
            (t === 'object' &&
              Me(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  aw = ut('URLSearchParams'),
  lw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function jo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), cr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length
    let u
    for (r = 0; r < s; r++) (u = i[r]), t.call(null, e[u], u, e)
  }
}
function d0(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  while (r-- > 0) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const p0 =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  h0 = (e) => !Eo(e) && e !== p0
function Ta() {
  const { caseless: e } = (h0(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && d0(t, o)) || o
      wi(t[i]) && wi(r)
        ? (t[i] = Ta(t[i], r))
        : wi(r)
          ? (t[i] = Ta({}, r))
          : cr(r)
            ? (t[i] = r.slice())
            : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && jo(arguments[r], n)
  return t
}
const cw = (e, t, n, { allOwnKeys: r } = {}) => (
    jo(
      t,
      (o, i) => {
        n && Me(o) ? (e[i] = l0(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r },
    ),
    e
  ),
  fw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  dw = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  pw = (e, t, n, r) => {
    let o, i, s
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !u[s] && ((t[s] = e[s]), (u[s] = !0))
      e = n !== !1 && Yl(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  hw = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  mw = (e) => {
    if (!e) return null
    if (cr(e)) return e
    let t = e.length
    if (!f0(t)) return null
    const n = new Array(t)
    while (t-- > 0) n[t] = e[t]
    return n
  },
  yw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Yl(Uint8Array)),
  gw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    while ((o = r.next()) && !o.done) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  vw = (e, t) => {
    let n
    const r = []
    while ((n = e.exec(t)) !== null) r.push(n)
    return r
  },
  ww = ut('HTMLFormElement'),
  bw = (e) =>
    e
      .toLowerCase()
      .replace(/[-_\s]([a-z\d])(\w*)/g, (n, r, o) => r.toUpperCase() + o),
  Wf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  xw = ut('RegExp'),
  m0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    jo(n, (o, i) => {
      let s
      ;(s = t(o, i, e)) !== !1 && (r[i] = s || o)
    }),
      Object.defineProperties(e, r)
  },
  Ew = (e) => {
    m0(e, (t, n) => {
      if (Me(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (Me(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  Pw = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0
        })
      }
    return cr(e) ? r(e) : r(String(e).split(t)), n
  },
  Sw = () => {},
  kw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  pu = 'abcdefghijklmnopqrstuvwxyz',
  qf = '0123456789',
  y0 = { DIGIT: qf, ALPHA: pu, ALPHA_DIGIT: pu + pu.toUpperCase() + qf },
  Cw = (e = 16, t = y0.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    while (e--) n += t[(Math.random() * r) | 0]
    return n
  }
function Tw(e) {
  return !!(
    e &&
    Me(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const Ow = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Os(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const i = cr(r) ? [] : {}
            return (
              jo(r, (s, u) => {
                const a = n(s, o + 1)
                !Eo(a) && (i[u] = a)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  Nw = ut('AsyncFunction'),
  Aw = (e) => e && (Os(e) || Me(e)) && Me(e.then) && Me(e.catch),
  E = {
    isArray: cr,
    isArrayBuffer: c0,
    isBuffer: Yv,
    isFormData: uw,
    isArrayBufferView: Zv,
    isString: ew,
    isNumber: f0,
    isBoolean: tw,
    isObject: Os,
    isPlainObject: wi,
    isUndefined: Eo,
    isDate: nw,
    isFile: rw,
    isBlob: ow,
    isRegExp: xw,
    isFunction: Me,
    isStream: sw,
    isURLSearchParams: aw,
    isTypedArray: yw,
    isFileList: iw,
    forEach: jo,
    merge: Ta,
    extend: cw,
    trim: lw,
    stripBOM: fw,
    inherits: dw,
    toFlatObject: pw,
    kindOf: Cs,
    kindOfTest: ut,
    endsWith: hw,
    toArray: mw,
    forEachEntry: gw,
    matchAll: vw,
    isHTMLForm: ww,
    hasOwnProperty: Wf,
    hasOwnProp: Wf,
    reduceDescriptors: m0,
    freezeMethods: Ew,
    toObjectSet: Pw,
    toCamelCase: bw,
    noop: Sw,
    toFiniteNumber: kw,
    findKey: d0,
    global: p0,
    isContextDefined: h0,
    ALPHABET: y0,
    generateString: Cw,
    isSpecCompliantForm: Tw,
    toJSONObject: Ow,
    isAsyncFn: Nw,
    isThenable: Aw,
  }
function $(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
E.inherits($, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const g0 = $.prototype,
  v0 = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  v0[e] = { value: e }
})
Object.defineProperties($, v0)
Object.defineProperty(g0, 'isAxiosError', { value: !0 })
$.from = (e, t, n, r, o, i) => {
  const s = Object.create(g0)
  return (
    E.toFlatObject(
      e,
      s,
      (a) => a !== Error.prototype,
      (u) => u !== 'isAxiosError',
    ),
    $.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  )
}
const _w = null
function Oa(e) {
  return E.isPlainObject(e) || E.isArray(e)
}
function w0(e) {
  return E.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Qf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map((o, i) => ((o = w0(o)), !n && i ? '[' + o + ']' : o))
        .join(n ? '.' : '')
    : t
}
function Rw(e) {
  return E.isArray(e) && !e.some(Oa)
}
const Fw = E.toFlatObject(E, {}, null, (t) => /^is[A-Z]/.test(t))
function Ns(e, t, n) {
  if (!E.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      (m, b) => !E.isUndefined(b[m]),
    ))
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < 'u' && Blob)) && E.isSpecCompliantForm(t)
  if (!E.isFunction(o)) throw new TypeError('visitor must be a function')
  function l(g) {
    if (g === null) return ''
    if (E.isDate(g)) return g.toISOString()
    if (!a && E.isBlob(g))
      throw new $('Blob is not supported. Use a Buffer instead.')
    return E.isArrayBuffer(g) || E.isTypedArray(g)
      ? a && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g
  }
  function f(g, m, b) {
    let p = g
    if (g && !b && typeof g == 'object') {
      if (E.endsWith(m, '{}'))
        (m = r ? m : m.slice(0, -2)), (g = JSON.stringify(g))
      else if (
        (E.isArray(g) && Rw(g)) ||
        ((E.isFileList(g) || E.endsWith(m, '[]')) && (p = E.toArray(g)))
      )
        return (
          (m = w0(m)),
          p.forEach((y, w) => {
            !(E.isUndefined(y) || y === null) &&
              t.append(
                s === !0 ? Qf([m], w, i) : s === null ? m : m + '[]',
                l(y),
              )
          }),
          !1
        )
    }
    return Oa(g) ? !0 : (t.append(Qf(b, m, i), l(g)), !1)
  }
  const c = [],
    d = Object.assign(Fw, {
      defaultVisitor: f,
      convertValue: l,
      isVisitable: Oa,
    })
  function v(g, m) {
    if (!E.isUndefined(g)) {
      if (c.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + m.join('.'))
      c.push(g),
        E.forEach(g, (p, h) => {
          ;(!(E.isUndefined(p) || p === null) &&
            o.call(t, p, E.isString(h) ? h.trim() : h, m, d)) === !0 &&
            v(p, m ? m.concat(h) : [h])
        }),
        c.pop()
    }
  }
  if (!E.isObject(e)) throw new TypeError('data must be an object')
  return v(e), t
}
function Kf(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (r) => t[r])
}
function Zl(e, t) {
  ;(this._pairs = []), e && Ns(e, this, t)
}
const b0 = Zl.prototype
b0.append = function (t, n) {
  this._pairs.push([t, n])
}
b0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Kf)
      }
    : Kf
  return this._pairs.map((o) => n(o[0]) + '=' + n(o[1]), '').join('&')
}
function Iw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function x0(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || Iw,
    o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = E.isURLSearchParams(t) ? t.toString() : new Zl(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf('#')
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class Jf {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    E.forEach(this.handlers, (r) => {
      r !== null && t(r)
    })
  }
}
const E0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Bw = typeof URLSearchParams < 'u' ? URLSearchParams : Zl,
  zw = typeof FormData < 'u' ? FormData : null,
  jw = typeof Blob < 'u' ? Blob : null,
  $w = {
    isBrowser: !0,
    classes: { URLSearchParams: Bw, FormData: zw, Blob: jw },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  P0 = typeof window < 'u' && typeof document < 'u',
  Lw = ((e) => P0 && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  Mw =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Dw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: P0,
        hasStandardBrowserEnv: Lw,
        hasStandardBrowserWebWorkerEnv: Mw,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  nt = { ...Dw, ...$w }
function Uw(e, t) {
  return Ns(
    e,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return nt.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        },
      },
      t,
    ),
  )
}
function Hw(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  )
}
function Gw(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function S0(e) {
  function t(n, r, o, i) {
    let s = n[i++]
    if (s === '__proto__') return !0
    const u = Number.isFinite(+s),
      a = i >= n.length
    return (
      (s = !s && E.isArray(o) ? o.length : s),
      a
        ? (E.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !u)
        : ((!o[s] || !E.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && E.isArray(o[s]) && (o[s] = Gw(o[s])),
          !u)
    )
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {}
    return (
      E.forEachEntry(e, (r, o) => {
        t(Hw(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function Vw(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const ec = {
  transitional: E0,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = E.isObject(t)
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o ? JSON.stringify(S0(t)) : t
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t
      if (E.isArrayBufferView(t)) return t.buffer
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        )
      let u
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Uw(t, this.formSerializer).toString()
        if ((u = E.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const a = this.env && this.env.FormData
          return Ns(u ? { 'files[]': t } : t, a && new a(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType('application/json', !1), Vw(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ec.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (u) {
          if (s)
            throw u.name === 'SyntaxError'
              ? $.from(u, $.ERR_BAD_RESPONSE, this, null, this.response)
              : u
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: (t) => t >= 200 && t < 300,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
}
E.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ec.headers[e] = {}
})
const tc = ec,
  Ww = E.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  qw = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(`
`)
          .forEach((s) => {
            ;(o = s.indexOf(':')),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && Ww[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  Xf = Symbol('internals')
function Pr(e) {
  return e && String(e).trim().toLowerCase()
}
function bi(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(bi) : String(e)
}
function Qw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  while ((r = n.exec(e))) t[r[1]] = r[2]
  return t
}
const Kw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function hu(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1
    if (E.isRegExp(r)) return r.test(t)
  }
}
function Jw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Xw(e, t) {
  const n = E.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s)
      },
      configurable: !0,
    })
  })
}
class As {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(u, a, l) {
      const f = Pr(a)
      if (!f) throw new Error('header name must be a non-empty string')
      const c = E.findKey(o, f)
      ;(!c || o[c] === void 0 || l === !0 || (l === void 0 && o[c] !== !1)) &&
        (o[c || a] = bi(u))
    }
    const s = (u, a) => E.forEach(u, (l, f) => i(l, f, a))
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : E.isString(t) && (t = t.trim()) && !Kw(t)
          ? s(qw(t), n)
          : t != null && i(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = Pr(t)), t)) {
      const r = E.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return Qw(o)
        if (E.isFunction(n)) return n.call(this, o, r)
        if (E.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Pr(t)), t)) {
      const r = E.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || hu(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(s) {
      if (((s = Pr(s)), s)) {
        const u = E.findKey(r, s)
        u && (!n || hu(r, r[u], u, n)) && (delete r[u], (o = !0))
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    while (r--) {
      const i = n[r]
      ;(!t || hu(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
    }
    return o
  }
  normalize(t) {
    const r = {}
    return (
      E.forEach(this, (o, i) => {
        const s = E.findKey(r, i)
        if (s) {
          ;(this[s] = bi(o)), delete this[i]
          return
        }
        const u = t ? Jw(i) : String(i).trim()
        u !== i && delete this[i], (this[u] = bi(o)), (r[u] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, n]) => t + ': ' + n)
      .join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((o) => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[Xf] = this[Xf] = { accessors: {} }).accessors,
      o = this.prototype
    function i(s) {
      const u = Pr(s)
      r[u] || (Xw(o, s), (r[u] = !0))
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this
  }
}
As.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
E.reduceDescriptors(As.prototype, ({ value: e }, t) => {
  const n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    },
  }
})
E.freezeMethods(As)
const yt = As
function mu(e, t) {
  const n = this || tc,
    r = t || n,
    o = yt.from(r.headers)
  let i = r.data
  return (
    E.forEach(e, (u) => {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function k0(e) {
  return !!(e && e.__CANCEL__)
}
function $o(e, t, n) {
  $.call(this, e ?? 'canceled', $.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
E.inherits($o, $, { __CANCEL__: !0 })
function Yw(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new $(
          'Request failed with status code ' + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      )
}
const Zw = nt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + '=' + encodeURIComponent(t)]
        E.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
          E.isString(r) && s.push('path=' + r),
          E.isString(o) && s.push('domain=' + o),
          i === !0 && s.push('secure'),
          (document.cookie = s.join('; '))
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
        )
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      },
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {},
    }
function eb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function tb(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function C0(e, t) {
  return e && !eb(t) ? tb(e, t) : t
}
const nb = nt.hasStandardBrowserEnv
  ? (() => {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(i) {
        let s = i
        return (
          t && (n.setAttribute('href', s), (s = n.href)),
          n.setAttribute('href', s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = o(window.location.href)),
        (s) => {
          const u = E.isString(s) ? o(s) : s
          return u.protocol === r.protocol && u.host === r.host
        }
      )
    })()
  : (
      () => () =>
        !0
    )()
function rb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function ob(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    i = 0,
    s
  return (
    (t = t !== void 0 ? t : 1e3),
    (a) => {
      const l = Date.now(),
        f = r[i]
      s || (s = l), (n[o] = a), (r[o] = l)
      let c = i,
        d = 0
      while (c !== o) (d += n[c++]), (c = c % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), l - s < t)) return
      const v = f && l - f
      return v ? Math.round((d * 1e3) / v) : void 0
    }
  )
}
function Yf(e, t) {
  let n = 0
  const r = ob(50, 250)
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      u = i - n,
      a = r(u),
      l = i <= s
    n = i
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: u,
      rate: a || void 0,
      estimated: a && s && l ? (s - i) / a : void 0,
      event: o,
    }
    ;(f[t ? 'download' : 'upload'] = !0), e(f)
  }
}
const ib = typeof XMLHttpRequest < 'u',
  sb =
    ib &&
    ((e) =>
      new Promise((n, r) => {
        const o = e.data
        const i = yt.from(e.headers).normalize()
        let { responseType: s, withXSRFToken: u } = e,
          a
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener('abort', a)
        }
        let f
        if (E.isFormData(o)) {
          if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1)
          else if ((f = i.getContentType()) !== !1) {
            const [m, ...b] = f
              ? f
                  .split(';')
                  .map((p) => p.trim())
                  .filter(Boolean)
              : []
            i.setContentType([m || 'multipart/form-data', ...b].join('; '))
          }
        }
        let c = new XMLHttpRequest()
        if (e.auth) {
          const m = e.auth.username || '',
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          i.set('Authorization', 'Basic ' + btoa(m + ':' + b))
        }
        const d = C0(e.baseURL, e.url)
        c.open(e.method.toUpperCase(), x0(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout)
        function v() {
          if (!c) return
          const m = yt.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
            ),
            p = {
              data:
                !s || s === 'text' || s === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: m,
              config: e,
              request: c,
            }
          Yw(
            (y) => {
              n(y), l()
            },
            (y) => {
              r(y), l()
            },
            p,
          ),
            (c = null)
        }
        if (
          ('onloadend' in c
            ? (c.onloadend = v)
            : (c.onreadystatechange = () => {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(v)
              }),
          (c.onabort = () => {
            c && (r(new $('Request aborted', $.ECONNABORTED, e, c)), (c = null))
          }),
          (c.onerror = () => {
            r(new $('Network Error', $.ERR_NETWORK, e, c)), (c = null)
          }),
          (c.ontimeout = () => {
            let b = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const p = e.transitional || E0
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              r(
                new $(
                  b,
                  p.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                  e,
                  c,
                ),
              ),
              (c = null)
          }),
          nt.hasStandardBrowserEnv &&
            (u && E.isFunction(u) && (u = u(e)), u || (u !== !1 && nb(d))))
        ) {
          const m =
            e.xsrfHeaderName && e.xsrfCookieName && Zw.read(e.xsrfCookieName)
          m && i.set(e.xsrfHeaderName, m)
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in c &&
            E.forEach(i.toJSON(), (b, p) => {
              c.setRequestHeader(p, b)
            }),
          E.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          s && s !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            c.addEventListener('progress', Yf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', Yf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (m) => {
              c &&
                (r(!m || m.type ? new $o(null, e, c) : m),
                c.abort(),
                (c = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener('abort', a)))
        const g = rb(d)
        if (g && nt.protocols.indexOf(g) === -1) {
          r(new $('Unsupported protocol ' + g + ':', $.ERR_BAD_REQUEST, e))
          return
        }
        c.send(o || null)
      })),
  Na = { http: _w, xhr: sb }
E.forEach(Na, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Zf = (e) => `- ${e}`,
  ub = (e) => E.isFunction(e) || e === null || e === !1,
  T0 = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let i = 0; i < t; i++) {
        n = e[i]
        let s
        if (
          ((r = n),
          !ub(n) && ((r = Na[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new $(`Unknown adapter '${s}'`)
        if (r) break
        o[s || '#' + i] = r
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([u, a]) =>
            `adapter ${u} ` +
            (a === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        )
        const s = t
          ? i.length > 1
            ? `since :
` +
              i.map(Zf).join(`
`)
            : ' ' + Zf(i[0])
          : 'as no adapter specified'
        throw new $(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        )
      }
      return r
    },
    adapters: Na,
  }
function yu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new $o(null, e)
}
function ed(e) {
  return (
    yu(e),
    (e.headers = yt.from(e.headers)),
    (e.data = mu.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    T0.getAdapter(e.adapter || tc.adapter)(e).then(
      (r) => (
        yu(e),
        (r.data = mu.call(e, e.transformResponse, r)),
        (r.headers = yt.from(r.headers)),
        r
      ),
      (r) => (
        k0(r) ||
          (yu(e),
          r &&
            r.response &&
            ((r.response.data = mu.call(e, e.transformResponse, r.response)),
            (r.response.headers = yt.from(r.response.headers)))),
        Promise.reject(r)
      ),
    )
  )
}
const td = (e) => (e instanceof yt ? { ...e } : e)
function tr(e, t) {
  t = t || {}
  const n = {}
  function r(l, f, c) {
    return E.isPlainObject(l) && E.isPlainObject(f)
      ? E.merge.call({ caseless: c }, l, f)
      : E.isPlainObject(f)
        ? E.merge({}, f)
        : E.isArray(f)
          ? f.slice()
          : f
  }
  function o(l, f, c) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(l)) return r(void 0, l, c)
    } else return r(l, f, c)
  }
  function i(l, f) {
    if (!E.isUndefined(f)) return r(void 0, f)
  }
  function s(l, f) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(l)) return r(void 0, l)
    } else return r(void 0, f)
  }
  function u(l, f, c) {
    if (c in t) return r(l, f)
    if (c in e) return r(void 0, l)
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: u,
    headers: (l, f) => o(td(l), td(f), !0),
  }
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), (f) => {
      const c = a[f] || o,
        d = c(e[f], t[f], f)
      ;(E.isUndefined(d) && c !== u) || (n[f] = d)
    }),
    n
  )
}
const O0 = '1.6.8',
  nc = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    nc[e] = (r) => typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  },
)
const nd = {}
nc.transitional = (t, n, r) => {
  function o(i, s) {
    return (
      '[Axios v' +
      O0 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? '. ' + r : '')
    )
  }
  return (i, s, u) => {
    if (t === !1)
      throw new $(
        o(s, ' has been removed' + (n ? ' in ' + n : '')),
        $.ERR_DEPRECATED,
      )
    return (
      n &&
        !nd[s] &&
        ((nd[s] = !0),
        console.warn(
          o(
            s,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, s, u) : !0
    )
  }
}
function ab(e, t, n) {
  if (typeof e != 'object')
    throw new $('options must be an object', $.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  while (o-- > 0) {
    const i = r[o],
      s = t[i]
    if (s) {
      const u = e[i],
        a = u === void 0 || s(u, i, e)
      if (a !== !0)
        throw new $('option ' + i + ' must be ' + a, $.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new $('Unknown option ' + i, $.ERR_BAD_OPTION)
  }
}
const Aa = { assertOptions: ab, validators: nc },
  Ct = Aa.validators
class Ki {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new Jf(), response: new Jf() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let o
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error())
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : ''
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i)
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = tr(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      Aa.assertOptions(
        r,
        {
          silentJSONParsing: Ct.transitional(Ct.boolean),
          forcedJSONParsing: Ct.transitional(Ct.boolean),
          clarifyTimeoutError: Ct.transitional(Ct.boolean),
        },
        !1,
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Aa.assertOptions(
              o,
              { encode: Ct.function, serialize: Ct.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    const s = i && E.merge(i.common, i[n.method])
    i &&
      E.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (g) => {
          delete i[g]
        },
      ),
      (n.headers = yt.concat(s, i))
    const u = []
    let a = !0
    this.interceptors.request.forEach((m) => {
      ;(typeof m.runWhen == 'function' && m.runWhen(n) === !1) ||
        ((a = a && m.synchronous), u.unshift(m.fulfilled, m.rejected))
    })
    const l = []
    this.interceptors.response.forEach((m) => {
      l.push(m.fulfilled, m.rejected)
    })
    let f,
      c = 0,
      d
    if (!a) {
      const g = [ed.bind(this), void 0]
      for (
        g.unshift.apply(g, u),
          g.push.apply(g, l),
          d = g.length,
          f = Promise.resolve(n);
        c < d;
      )
        f = f.then(g[c++], g[c++])
      return f
    }
    d = u.length
    let v = n
    for (c = 0; c < d; ) {
      const g = u[c++],
        m = u[c++]
      try {
        v = g(v)
      } catch (b) {
        m.call(this, b)
        break
      }
    }
    try {
      f = ed.call(this, v)
    } catch (g) {
      return Promise.reject(g)
    }
    for (c = 0, d = l.length; c < d; ) f = f.then(l[c++], l[c++])
    return f
  }
  getUri(t) {
    t = tr(this.defaults, t)
    const n = C0(t.baseURL, t.url)
    return x0(n, t.params, t.paramsSerializer)
  }
}
E.forEach(['delete', 'get', 'head', 'options'], (t) => {
  Ki.prototype[t] = function (n, r) {
    return this.request(
      tr(r || {}, { method: t, url: n, data: (r || {}).data }),
    )
  }
})
E.forEach(['post', 'put', 'patch'], (t) => {
  function n(r) {
    return function (i, s, u) {
      return this.request(
        tr(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        }),
      )
    }
  }
  ;(Ki.prototype[t] = n()), (Ki.prototype[t + 'Form'] = n(!0))
})
const xi = Ki
class rc {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise((i) => {
      n = i
    })
    this.promise.then((o) => {
      if (!this._listeners) return
      let i = this._listeners.length
      while (i-- > 0) this._listeners[i](o)
      this._listeners = null
    }),
      (this.promise.then = (o) => {
        let i
        const s = new Promise((u) => {
          this.subscribe(u), (i = u)
        }).then(o)
        return (
          (s.cancel = () => {
            this.unsubscribe(i)
          }),
          s
        )
      }),
      t((i, s, u) => {
        this.reason || ((this.reason = new $o(i, s, u)), n(this.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new rc((o) => {
        t = o
      }),
      cancel: t,
    }
  }
}
const lb = rc
function cb(e) {
  return (n) => e.apply(null, n)
}
function fb(e) {
  return E.isObject(e) && e.isAxiosError === !0
}
const _a = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(_a).forEach(([e, t]) => {
  _a[t] = e
})
const db = _a
function N0(e) {
  const t = new xi(e),
    n = l0(xi.prototype.request, t)
  return (
    E.extend(n, xi.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = (o) => N0(tr(e, o))),
    n
  )
}
const ee = N0(tc)
ee.Axios = xi
ee.CanceledError = $o
ee.CancelToken = lb
ee.isCancel = k0
ee.VERSION = O0
ee.toFormData = Ns
ee.AxiosError = $
ee.Cancel = ee.CanceledError
ee.all = (t) => Promise.all(t)
ee.spread = cb
ee.isAxiosError = fb
ee.mergeConfig = tr
ee.AxiosHeaders = yt
ee.formToJSON = (e) => S0(E.isHTMLForm(e) ? new FormData(e) : e)
ee.getAdapter = T0.getAdapter
ee.HttpStatusCode = db
ee.default = ee
class pb extends k {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3ConnectionError')
  }
}
class hb extends k {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3PolicyViolationError')
  }
}
function A0(e) {
  const { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == 'string' ? 'hex' : 'bytes'),
    r = typeof e.blobs[0] == 'string' ? e.blobs.map((i) => qt(i)) : e.blobs,
    o = []
  for (const i of r) o.push(Uint8Array.from(t.blobToKzgCommitment(i)))
  return n === 'bytes' ? o : o.map((i) => se(i))
}
function _0(e) {
  const { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == 'string' ? 'hex' : 'bytes'),
    r = typeof e.blobs[0] == 'string' ? e.blobs.map((s) => qt(s)) : e.blobs,
    o =
      typeof e.commitments[0] == 'string'
        ? e.commitments.map((s) => qt(s))
        : e.commitments,
    i = []
  for (let s = 0; s < r.length; s++) {
    const u = r[s],
      a = o[s]
    i.push(Uint8Array.from(t.computeBlobKzgProof(u, a)))
  }
  return n === 'bytes' ? i : i.map((s) => se(s))
}
function mb(e, t, n, r) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, n, r)
  const o = BigInt(32),
    i = BigInt(4294967295),
    s = Number((n >> o) & i),
    u = Number(n & i),
    a = r ? 4 : 0,
    l = r ? 0 : 4
  e.setUint32(t + a, s, r), e.setUint32(t + l, u, r)
}
class yb extends Ah {
  constructor(t, n, r, o) {
    super(),
      (this.blockLen = t),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(t)),
      (this.view = au(this.buffer))
  }
  update(t) {
    Qi(this)
    const { view: n, buffer: r, blockLen: o } = this
    t = Fl(t)
    const i = t.length
    for (let s = 0; s < i; ) {
      const u = Math.min(o - this.pos, i - s)
      if (u === o) {
        const a = au(t)
        for (; o <= i - s; s += o) this.process(a, s)
        continue
      }
      r.set(t.subarray(s, s + u), this.pos),
        (this.pos += u),
        (s += u),
        this.pos === o && (this.process(n, 0), (this.pos = 0))
    }
    return (this.length += t.length), this.roundClean(), this
  }
  digestInto(t) {
    Qi(this), Nh(t, this), (this.finished = !0)
    const { buffer: n, view: r, blockLen: o, isLE: i } = this
    let { pos: s } = this
    ;(n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > o - s && (this.process(r, 0), (s = 0))
    for (let c = s; c < o; c++) n[c] = 0
    mb(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0)
    const u = au(t),
      a = this.outputLen
    if (a % 4) throw new Error('_sha2: outputLen should be aligned to 32bit')
    const l = a / 4,
      f = this.get()
    if (l > f.length) throw new Error('_sha2: outputLen bigger than state')
    for (let c = 0; c < l; c++) u.setUint32(4 * c, f[c], i)
  }
  digest() {
    const { buffer: t, outputLen: n } = this
    this.digestInto(t)
    const r = t.slice(0, n)
    return this.destroy(), r
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get())
    const {
      blockLen: n,
      buffer: r,
      length: o,
      finished: i,
      destroyed: s,
      pos: u,
    } = this
    return (
      (t.length = o),
      (t.pos = u),
      (t.finished = i),
      (t.destroyed = s),
      o % n && t.buffer.set(r),
      t
    )
  }
}
const gb = (e, t, n) => (e & t) ^ (~e & n),
  vb = (e, t, n) => (e & t) ^ (e & n) ^ (t & n),
  wb = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Tt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Ot = new Uint32Array(64)
class bb extends yb {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Tt[0] | 0),
      (this.B = Tt[1] | 0),
      (this.C = Tt[2] | 0),
      (this.D = Tt[3] | 0),
      (this.E = Tt[4] | 0),
      (this.F = Tt[5] | 0),
      (this.G = Tt[6] | 0),
      (this.H = Tt[7] | 0)
  }
  get() {
    const { A: t, B: n, C: r, D: o, E: i, F: s, G: u, H: a } = this
    return [t, n, r, o, i, s, u, a]
  }
  set(t, n, r, o, i, s, u, a) {
    ;(this.A = t | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = o | 0),
      (this.E = i | 0),
      (this.F = s | 0),
      (this.G = u | 0),
      (this.H = a | 0)
  }
  process(t, n) {
    for (let c = 0; c < 16; c++, n += 4) Ot[c] = t.getUint32(n, !1)
    for (let c = 16; c < 64; c++) {
      const d = Ot[c - 15],
        v = Ot[c - 2],
        g = Ze(d, 7) ^ Ze(d, 18) ^ (d >>> 3),
        m = Ze(v, 17) ^ Ze(v, 19) ^ (v >>> 10)
      Ot[c] = (m + Ot[c - 7] + g + Ot[c - 16]) | 0
    }
    let { A: r, B: o, C: i, D: s, E: u, F: a, G: l, H: f } = this
    for (let c = 0; c < 64; c++) {
      const d = Ze(u, 6) ^ Ze(u, 11) ^ Ze(u, 25),
        v = (f + d + gb(u, a, l) + wb[c] + Ot[c]) | 0,
        m = ((Ze(r, 2) ^ Ze(r, 13) ^ Ze(r, 22)) + vb(r, o, i)) | 0
      ;(f = l),
        (l = a),
        (a = u),
        (u = (s + v) | 0),
        (s = i),
        (i = o),
        (o = r),
        (r = (v + m) | 0)
    }
    ;(r = (r + this.A) | 0),
      (o = (o + this.B) | 0),
      (i = (i + this.C) | 0),
      (s = (s + this.D) | 0),
      (u = (u + this.E) | 0),
      (a = (a + this.F) | 0),
      (l = (l + this.G) | 0),
      (f = (f + this.H) | 0),
      this.set(r, o, i, s, u, a, l, f)
  }
  roundClean() {
    Ot.fill(0)
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
  }
}
const xb = _h(() => new bb())
function Eb(e, t) {
  const n = t || 'hex',
    r = xb(Xe(e, { strict: !1 }) ? Wt(e) : e)
  return n === 'bytes' ? r : z(r)
}
function Pb(e) {
  const { commitment: t, version: n = 1 } = e,
    r = e.to ?? (typeof t == 'string' ? 'hex' : 'bytes'),
    o = Eb(t, 'bytes')
  return o.set([n], 0), r === 'bytes' ? o : se(o)
}
function Sb(e) {
  const { commitments: t, version: n } = e,
    r = e.to ?? (typeof t[0] == 'string' ? 'hex' : 'bytes'),
    o = []
  for (const i of t) o.push(Pb({ commitment: i, to: r, version: n }))
  return o
}
const rd = 6,
  R0 = 32,
  oc = 4096,
  F0 = R0 * oc,
  od = F0 * rd - 1 - 1 * oc * rd,
  I0 = 1
class kb extends k {
  constructor({ maxSize: t, size: n }) {
    super('Blob size is too large.', {
      metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'BlobSizeTooLargeError',
      })
  }
}
class B0 extends k {
  constructor() {
    super('Blob data must not be empty.'),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'EmptyBlobError',
      })
  }
}
class Cb extends k {
  constructor({ hash: t, size: n }) {
    super(`Versioned hash "${t}" size is invalid.`, {
      metaMessages: ['Expected: 32', `Received: ${n}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidVersionedHashSizeError',
      })
  }
}
class Tb extends k {
  constructor({ hash: t, version: n }) {
    super(`Versioned hash "${t}" version is invalid.`, {
      metaMessages: [`Expected: ${I0}`, `Received: ${n}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidVersionedHashVersionError',
      })
  }
}
function Ob(e) {
  const t = e.to ?? (typeof e.data == 'string' ? 'hex' : 'bytes'),
    n = typeof e.data == 'string' ? qt(e.data) : e.data,
    r = Y(n)
  if (!r) throw new B0()
  if (r > od) throw new kb({ maxSize: od, size: r })
  const o = []
  let i = !0,
    s = 0
  while (i) {
    const u = Ml(new Uint8Array(F0))
    let a = 0
    while (a < oc) {
      const l = n.slice(s, s + (R0 - 1))
      if ((u.pushByte(0), u.pushBytes(l), l.length < 31)) {
        u.pushByte(128), (i = !1)
        break
      }
      a++, (s += 31)
    }
    o.push(u)
  }
  return t === 'bytes' ? o.map((u) => u.bytes) : o.map((u) => se(u.bytes))
}
function Nb(e) {
  const { data: t, kzg: n, to: r } = e,
    o = e.blobs ?? Ob({ data: t, to: r }),
    i = e.commitments ?? A0({ blobs: o, kzg: n, to: r }),
    s = e.proofs ?? _0({ blobs: o, commitments: i, kzg: n, to: r }),
    u = []
  for (let a = 0; a < o.length; a++)
    u.push({ blob: o[a], commitment: i[a], proof: s[a] })
  return u
}
function Po(e, t = 'hex') {
  const n = z0(e),
    r = Ml(new Uint8Array(n.length))
  return n.encode(r), t === 'hex' ? se(r.bytes) : r.bytes
}
function z0(e) {
  return Array.isArray(e) ? Ab(e.map((t) => z0(t))) : _b(e)
}
function Ab(e) {
  const t = e.reduce((o, i) => o + i.length, 0),
    n = j0(t)
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(o) {
      t <= 55
        ? o.pushByte(192 + t)
        : (o.pushByte(247 + n),
          n === 1
            ? o.pushUint8(t)
            : n === 2
              ? o.pushUint16(t)
              : n === 3
                ? o.pushUint24(t)
                : o.pushUint32(t))
      for (const { encode: i } of e) i(o)
    },
  }
}
function _b(e) {
  const t = typeof e == 'string' ? qt(e) : e,
    n = j0(t.length)
  return {
    length:
      t.length === 1 && t[0] < 128
        ? 1
        : t.length <= 55
          ? 1 + t.length
          : 1 + n + t.length,
    encode(o) {
      t.length === 1 && t[0] < 128
        ? o.pushBytes(t)
        : t.length <= 55
          ? (o.pushByte(128 + t.length), o.pushBytes(t))
          : (o.pushByte(183 + n),
            n === 1
              ? o.pushUint8(t.length)
              : n === 2
                ? o.pushUint16(t.length)
                : n === 3
                  ? o.pushUint24(t.length)
                  : o.pushUint32(t.length),
            o.pushBytes(t))
    },
  }
}
function j0(e) {
  if (e < 2 ** 8) return 1
  if (e < 2 ** 16) return 2
  if (e < 2 ** 24) return 3
  if (e < 2 ** 32) return 4
  throw new k('Length is too large.')
}
function Rb(e) {
  const { blobVersionedHashes: t } = e
  if (t) {
    if (t.length === 0) throw new B0()
    for (const n of t) {
      const r = Y(n),
        o = Et(ro(n, 0, 1))
      if (r !== 32) throw new Cb({ hash: n, size: r })
      if (o !== I0) throw new Tb({ hash: n, version: o })
    }
  }
  $0(e)
}
function $0(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: o } = e
  if (t <= 0) throw new Xl({ chainId: t })
  if (o && !Fe(o)) throw new it({ address: o })
  if (r && r > 2n ** 256n - 1n) throw new xn({ maxFeePerGas: r })
  if (n && r && n > r)
    throw new xo({ maxFeePerGas: r, maxPriorityFeePerGas: n })
}
function Fb(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: o,
    to: i,
  } = e
  if (t <= 0) throw new Xl({ chainId: t })
  if (i && !Fe(i)) throw new it({ address: i })
  if (n || o)
    throw new k(
      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.',
    )
  if (r && r > 2n ** 256n - 1n) throw new xn({ maxFeePerGas: r })
}
function Ib(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: o,
    to: i,
    accessList: s,
  } = e
  if (i && !Fe(i)) throw new it({ address: i })
  if (typeof t < 'u' && t <= 0) throw new Xl({ chainId: t })
  if (n || o)
    throw new k(
      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.',
    )
  if (r && r > 2n ** 256n - 1n) throw new xn({ maxFeePerGas: r })
  if (s)
    throw new k('`accessList` is not a valid Legacy Transaction attribute.')
}
function ic(e) {
  if (!e || e.length === 0) return []
  const t = []
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: o } = e[n]
    for (let i = 0; i < o.length; i++)
      if (o[i].length - 2 !== 64) throw new fv({ storageKey: o[i] })
    if (!Fe(r, { strict: !1 })) throw new it({ address: r })
    t.push([r, o])
  }
  return t
}
function Bb(e, t) {
  const n = n0(e)
  return n === 'eip1559'
    ? jb(e, t)
    : n === 'eip2930'
      ? $b(e, t)
      : n === 'eip4844'
        ? zb(e, t)
        : Lb(e, t)
}
function zb(e, t) {
  const {
    chainId: n,
    gas: r,
    nonce: o,
    to: i,
    value: s,
    maxFeePerBlobGas: u,
    maxFeePerGas: a,
    maxPriorityFeePerGas: l,
    accessList: f,
    data: c,
  } = e
  Rb(e)
  let d = e.blobVersionedHashes,
    v = e.sidecars
  if (e.blobs) {
    const y =
        typeof e.blobs[0] == 'string' ? e.blobs : e.blobs.map((P) => se(P)),
      w = e.kzg,
      S = A0({ blobs: y, kzg: w }),
      x = _0({ blobs: y, commitments: S, kzg: w })
    ;(d = Sb({ commitments: S })),
      v !== !1 && (v = Nb({ blobs: y, commitments: S, proofs: x }))
  }
  const g = ic(f),
    m = [
      z(n),
      o ? z(o) : '0x',
      l ? z(l) : '0x',
      a ? z(a) : '0x',
      r ? z(r) : '0x',
      i ?? '0x',
      s ? z(s) : '0x',
      c ?? '0x',
      g,
      u ? z(u) : '0x',
      d ?? [],
      ...sc(e, t),
    ],
    b = [],
    p = [],
    h = []
  if (v)
    for (let y = 0; y < v.length; y++) {
      const { blob: w, commitment: S, proof: x } = v[y]
      b.push(w), p.push(S), h.push(x)
    }
  return sr(['0x03', Po(v ? [m, b, p, h] : m)])
}
function jb(e, t) {
  const {
    chainId: n,
    gas: r,
    nonce: o,
    to: i,
    value: s,
    maxFeePerGas: u,
    maxPriorityFeePerGas: a,
    accessList: l,
    data: f,
  } = e
  $0(e)
  const c = ic(l),
    d = [
      z(n),
      o ? z(o) : '0x',
      a ? z(a) : '0x',
      u ? z(u) : '0x',
      r ? z(r) : '0x',
      i ?? '0x',
      s ? z(s) : '0x',
      f ?? '0x',
      c,
      ...sc(e, t),
    ]
  return sr(['0x02', Po(d)])
}
function $b(e, t) {
  const {
    chainId: n,
    gas: r,
    data: o,
    nonce: i,
    to: s,
    value: u,
    accessList: a,
    gasPrice: l,
  } = e
  Fb(e)
  const f = ic(a),
    c = [
      z(n),
      i ? z(i) : '0x',
      l ? z(l) : '0x',
      r ? z(r) : '0x',
      s ?? '0x',
      u ? z(u) : '0x',
      o ?? '0x',
      f,
      ...sc(e, t),
    ]
  return sr(['0x01', Po(c)])
}
function Lb(e, t) {
  const {
    chainId: n = 0,
    gas: r,
    data: o,
    nonce: i,
    to: s,
    value: u,
    gasPrice: a,
  } = e
  Ib(e)
  let l = [
    i ? z(i) : '0x',
    a ? z(a) : '0x',
    r ? z(r) : '0x',
    s ?? '0x',
    u ? z(u) : '0x',
    o ?? '0x',
  ]
  if (t) {
    const f = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n)
      if (n > 0) return BigInt(n * 2) + BigInt(35n + t.v - 27n)
      const c = 27n + (t.v === 27n ? 0n : 1n)
      if (t.v !== c) throw new lv({ v: t.v })
      return c
    })()
    l = [...l, z(f), t.r, t.s]
  } else n > 0 && (l = [...l, z(n), '0x', '0x'])
  return Po(l)
}
function sc(e, t) {
  const { r: n, s: r, v: o, yParity: i } = t ?? e
  return typeof n > 'u'
    ? []
    : typeof r > 'u'
      ? []
      : typeof o > 'u' && typeof i > 'u'
        ? []
        : [
            typeof i == 'number'
              ? i
                ? z(1)
                : '0x'
              : o === 0n
                ? '0x'
                : o === 1n
                  ? z(1)
                  : o === 27n
                    ? '0x'
                    : z(1),
            Zn(n),
            Zn(r),
          ]
}
var L0 = { BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }
function Mb(e) {
  const t = e.data.result.transaction.workflow_results.policyResults
    .filter(
      (n) =>
        n.policyDecision.toLowerCase() === 'block' ||
        n.policyDecision.toLowerCase() === 'mfa',
    )
    .map((n) => n.name)
  return JSON.stringify(t)
}
async function Db(e, t, n) {
  const r = L0.VITE_SHIELD3_API_KEY,
    o = JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_simulateTransaction',
      params: [e, t],
      id: 42,
    }),
    i = {
      method: 'post',
      url: `https://rpc.shield3.com/v3/0x${n}/rpc?apiKey=${r}`,
      headers: { 'Content-Type': 'application/json' },
      data: o,
    }
  try {
    const s = await ee(i)
    if (s.status !== 200)
      throw new pb('Could not connect to Shield3', { response: s.data })
    if (s.data.result.decision !== 'Allow')
      throw new hb(`Policy violation(s): ${Mb(s)}`)
    return s
  } catch (s) {
    throw (console.error(s), s)
  }
}
async function Ra(e) {
  if (L0.VITE_SHIELD3_API_KEY === void 0) {
    console.log(
      "Your Shield3 api key is undefined. Add VITE_SHIELD3_API_KEY=your-api-key to your .env.local file in your project's root directory for added protection.",
    )
    return
  }
  let t
  return (
    typeof e != 'string' ? (t = Bb(e)) : (t = e),
    await Db(t, e.from.toString(), e.chainId.toString(16))
  )
}
async function uc(e, { serializedTransaction: t }) {
  return (
    Ra(t),
    e.request(
      { method: 'eth_sendRawTransaction', params: [t] },
      { retryCount: 0 },
    )
  )
}
async function ac(e, t) {
  var h, y, w, S
  const {
    account: n = e.account,
    chain: r = e.chain,
    accessList: o,
    blobs: i,
    data: s,
    gas: u,
    gasPrice: a,
    maxFeePerBlobGas: l,
    maxFeePerGas: f,
    maxPriorityFeePerGas: c,
    nonce: d,
    to: v,
    value: g,
    ...m
  } = t
  if (!n) throw new ks({ docsPath: '/docs/actions/wallet/sendTransaction' })
  const b = He(n)
  async function p() {
    let x
    return (
      r !== null &&
        ((x = await R(e, Io, 'getChainId')({})),
        a0({ currentChainId: x, chain: r })),
      await R(
        e,
        xs,
        'prepareTransactionRequest',
      )({
        account: b,
        accessList: o,
        blobs: i,
        chain: r,
        chainId: x,
        data: s,
        gas: u,
        gasPrice: a,
        maxFeePerBlobGas: l,
        maxFeePerGas: f,
        maxPriorityFeePerGas: c,
        nonce: d,
        to: v,
        value: g,
        ...m,
      })
    )
  }
  try {
    if ((Fo(t), b.type === 'local')) {
      const _ = await p()
      await Ra(p)
      const M =
          (h = r == null ? void 0 : r.serializers) == null
            ? void 0
            : h.transaction,
        ye = await b.signTransaction(_, { serializer: M })
      return await R(e, uc, 'sendRawTransaction')({ serializedTransaction: ye })
    }
    const x =
        (S =
          (w = (y = e.chain) == null ? void 0 : y.formatters) == null
            ? void 0
            : w.transactionRequest) == null
          ? void 0
          : S.format,
      T = (x || bs)({
        ...Gl(m, { format: x }),
        accessList: o,
        blobs: i,
        data: s,
        from: b.address,
        gas: u,
        gasPrice: a,
        maxFeePerBlobGas: l,
        maxFeePerGas: f,
        maxPriorityFeePerGas: c,
        nonce: d,
        to: v,
        value: g,
      }),
      A = await p()
    return (
      await Ra(A),
      await e.request(
        { method: 'eth_sendTransaction', params: [T] },
        { retryCount: 0 },
      )
    )
  } catch (x) {
    throw Jv(x, { ...t, account: b, chain: t.chain || void 0 })
  }
}
async function Ub(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      dataSuffix: i,
      functionName: s,
      ...u
    } = t,
    a = tn({ abi: n, args: o, functionName: s })
  return R(
    e,
    ac,
    'sendTransaction',
  )({ data: `${a}${i ? i.replace('0x', '') : ''}`, to: r, ...u })
}
async function Hb(e, { chain: t }) {
  const { id: n, name: r, nativeCurrency: o, rpcUrls: i, blockExplorers: s } = t
  await e.request(
    {
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: I(n),
          chainName: r,
          nativeCurrency: o,
          rpcUrls: i.default.http,
          blockExplorerUrls: s
            ? Object.values(s).map(({ url: u }) => u)
            : void 0,
        },
      ],
    },
    { retryCount: 0 },
  )
}
const Fa = 256
let ii = Fa,
  si
function Gb(e = 11) {
  if (!si || ii + e > Fa * 2) {
    ;(si = ''), (ii = 0)
    for (let t = 0; t < Fa; t++)
      si += ((256 + Math.random() * 256) | 0).toString(16).substring(1)
  }
  return si.substring(ii, ii++ + e)
}
function M0(e) {
  const {
      batch: t,
      cacheTime: n = e.pollingInterval ?? 4e3,
      key: r = 'base',
      name: o = 'Base Client',
      pollingInterval: i = 4e3,
      type: s = 'base',
    } = e,
    u = e.chain,
    a = e.account ? He(e.account) : void 0,
    {
      config: l,
      request: f,
      value: c,
    } = e.transport({ chain: u, pollingInterval: i }),
    d = { ...l, ...c },
    v = {
      account: a,
      batch: t,
      cacheTime: n,
      chain: u,
      key: r,
      name: o,
      pollingInterval: i,
      request: f,
      transport: d,
      type: s,
      uid: Gb(),
    }
  function g(m) {
    return (b) => {
      const p = b(m)
      for (const y in v) delete p[y]
      const h = { ...m, ...p }
      return Object.assign(h, { extend: g(h) })
    }
  }
  return Object.assign(v, { extend: g(v) })
}
function Ia(
  e,
  { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {},
) {
  return new Promise((o, i) => {
    const s = async ({ count: u = 0 } = {}) => {
      const a = async ({ error: l }) => {
        const f = typeof t == 'function' ? t({ count: u, error: l }) : t
        f && (await Ca(f)), s({ count: u + 1 })
      }
      try {
        const l = await e()
        o(l)
      } catch (l) {
        if (u < n && (await r({ count: u, error: l }))) return a({ error: l })
        i(l)
      }
    }
    s()
  })
}
function Vb(e, t = {}) {
  return async (n, r = {}) => {
    const { retryDelay: o = 150, retryCount: i = 3 } = { ...t, ...r }
    return Ia(
      async () => {
        try {
          return await e(n)
        } catch (s) {
          const u = s
          switch (u.code) {
            case io.code:
              throw new io(u)
            case so.code:
              throw new so(u)
            case uo.code:
              throw new uo(u)
            case ao.code:
              throw new ao(u)
            case wn.code:
              throw new wn(u)
            case bn.code:
              throw new bn(u)
            case lo.code:
              throw new lo(u)
            case co.code:
              throw new co(u)
            case fo.code:
              throw new fo(u)
            case po.code:
              throw new po(u)
            case er.code:
              throw new er(u)
            case ho.code:
              throw new ho(u)
            case Vn.code:
              throw new Vn(u)
            case mo.code:
              throw new mo(u)
            case yo.code:
              throw new yo(u)
            case go.code:
              throw new go(u)
            case vo.code:
              throw new vo(u)
            case wo.code:
              throw new wo(u)
            case 5e3:
              throw new Vn(u)
            default:
              throw s instanceof k ? s : new gv(u)
          }
        }
      },
      {
        delay: ({ count: s, error: u }) => {
          var a
          if (u && u instanceof $r) {
            const l =
              (a = u == null ? void 0 : u.headers) == null
                ? void 0
                : a.get('Retry-After')
            if (l != null && l.match(/\d/)) return parseInt(l) * 1e3
          }
          return ~~(1 << s) * o
        },
        retryCount: i,
        shouldRetry: ({ error: s }) => Wb(s),
      },
    )
  }
}
function Wb(e) {
  return 'code' in e && typeof e.code == 'number'
    ? e.code === -1 || e.code === er.code || e.code === wn.code
    : e instanceof $r && e.status
      ? e.status === 403 ||
        e.status === 408 ||
        e.status === 413 ||
        e.status === 429 ||
        e.status === 500 ||
        e.status === 502 ||
        e.status === 503 ||
        e.status === 504
      : !0
}
function D0(
  {
    key: e,
    name: t,
    request: n,
    retryCount: r = 3,
    retryDelay: o = 150,
    timeout: i,
    type: s,
  },
  u,
) {
  return {
    config: {
      key: e,
      name: t,
      request: n,
      retryCount: r,
      retryDelay: o,
      timeout: i,
      type: s,
    },
    request: Vb(n, { retryCount: r, retryDelay: o }),
    value: u,
  }
}
function qb(e, t = {}) {
  const { key: n = 'custom', name: r = 'Custom Provider', retryDelay: o } = t
  return ({ retryCount: i }) =>
    D0({
      key: n,
      name: r,
      request: e.request.bind(e),
      retryCount: t.retryCount ?? i,
      retryDelay: o,
      type: 'custom',
    })
}
class Qb extends k {
  constructor() {
    super(
      'No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.',
      { docsPath: '/docs/clients/intro' },
    )
  }
}
function Kb(
  e,
  { errorInstance: t = new Error('timed out'), timeout: n, signal: r },
) {
  return new Promise((o, i) => {
    ;(async () => {
      let s
      try {
        const u = new AbortController()
        n > 0 &&
          (s = setTimeout(() => {
            r ? u.abort() : i(t)
          }, n)),
          o(await e({ signal: (u == null ? void 0 : u.signal) || null }))
      } catch (u) {
        u.name === 'AbortError' && i(t), i(u)
      } finally {
        clearTimeout(s)
      }
    })()
  })
}
function Jb() {
  return {
    current: 0,
    take() {
      return this.current++
    },
    reset() {
      this.current = 0
    },
  }
}
const id = Jb()
function Xb(e, t = {}) {
  return {
    async request(n) {
      var f
      const {
          body: r,
          fetchOptions: o = {},
          onResponse: i = t.onResponse,
          timeout: s = t.timeout ?? 1e4,
        } = n,
        { headers: u, method: a, signal: l } = { ...t.fetchOptions, ...o }
      try {
        const c = await Kb(
          async ({ signal: v }) =>
            await fetch(e, {
              ...o,
              body: Array.isArray(r)
                ? le(
                    r.map((m) => ({
                      jsonrpc: '2.0',
                      id: m.id ?? id.take(),
                      ...m,
                    })),
                  )
                : le({ jsonrpc: '2.0', id: r.id ?? id.take(), ...r }),
              headers: { ...u, 'Content-Type': 'application/json' },
              method: a || 'POST',
              signal: l || (s > 0 ? v : null),
            }),
          {
            errorInstance: new Lf({ body: r, url: e }),
            timeout: s,
            signal: !0,
          },
        )
        i && (await i(c))
        let d
        if (
          ((f = c.headers.get('Content-Type')) != null &&
          f.startsWith('application/json')
            ? (d = await c.json())
            : (d = await c.text()),
          !c.ok)
        )
          throw new $r({
            body: r,
            details: le(d.error) || c.statusText,
            headers: c.headers,
            status: c.status,
            url: e,
          })
        return d
      } catch (c) {
        throw c instanceof $r || c instanceof Lf
          ? c
          : new $r({ body: r, details: c.message, url: e })
      }
    },
  }
}
function Yb(e, t = {}) {
  const {
    batch: n,
    fetchOptions: r,
    key: o = 'http',
    name: i = 'HTTP JSON-RPC',
    onFetchResponse: s,
    retryDelay: u,
  } = t
  return ({ chain: a, retryCount: l, timeout: f }) => {
    const { batchSize: c = 1e3, wait: d = 0 } = typeof n == 'object' ? n : {},
      v = t.retryCount ?? l,
      g = f ?? t.timeout ?? 1e4,
      m = e || (a == null ? void 0 : a.rpcUrls.default.http[0])
    if (!m) throw new Qb()
    const b = Xb(m, { fetchOptions: r, onResponse: s, timeout: g })
    return D0(
      {
        key: o,
        name: i,
        async request({ method: p, params: h }) {
          const y = { method: p, params: h },
            { schedule: w } = u0({
              id: `${e}`,
              wait: d,
              shouldSplitBatch(T) {
                return T.length > c
              },
              fn: (T) => b.request({ body: T }),
              sort: (T, A) => T.id - A.id,
            }),
            S = async (T) => (n ? w(T) : [await b.request({ body: T })]),
            [{ error: x, result: P }] = await S(y)
          if (x) throw new Kh({ body: y, error: x, url: m })
          return P
        },
        retryCount: v,
        retryDelay: u,
        timeout: g,
        type: 'http',
      },
      { fetchOptions: r, url: m },
    )
  }
}
function lc(e, t) {
  var r, o, i, s, u, a
  if (!(e instanceof k)) return !1
  const n = e.walk((l) => l instanceof ha)
  return n instanceof ha
    ? !!(
        ((r = n.data) == null ? void 0 : r.errorName) === 'ResolverNotFound' ||
        ((o = n.data) == null ? void 0 : o.errorName) ===
          'ResolverWildcardNotSupported' ||
        ((i = n.data) == null ? void 0 : i.errorName) ===
          'ResolverNotContract' ||
        ((s = n.data) == null ? void 0 : s.errorName) === 'ResolverError' ||
        ((u = n.data) == null ? void 0 : u.errorName) === 'HttpError' ||
        ((a = n.reason) != null &&
          a.includes('Wildcard on non-extended resolvers is not supported')) ||
        (t === 'reverse' && n.reason === Dh[50])
      )
    : !1
}
function U0(e) {
  if (e.length !== 66 || e.indexOf('[') !== 0 || e.indexOf(']') !== 65)
    return null
  const t = `0x${e.slice(1, 65)}`
  return Xe(t) ? t : null
}
function Ei(e) {
  let t = new Uint8Array(32).fill(0)
  if (!e) return se(t)
  const n = e.split('.')
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const o = U0(n[r]),
      i = o ? Wt(o) : Pe(ht(n[r]), 'bytes')
    t = Pe(Pt([t, i]), 'bytes')
  }
  return se(t)
}
function Zb(e) {
  return `[${e.slice(2)}]`
}
function e2(e) {
  const t = new Uint8Array(32).fill(0)
  return e ? U0(e) || Pe(ht(e)) : se(t)
}
function _s(e) {
  const t = e.replace(/^\.|\.$/gm, '')
  if (t.length === 0) return new Uint8Array(1)
  const n = new Uint8Array(ht(t).byteLength + 2)
  let r = 0
  const o = t.split('.')
  for (let i = 0; i < o.length; i++) {
    let s = ht(o[i])
    s.byteLength > 255 && (s = ht(Zb(e2(o[i])))),
      (n[r] = s.length),
      n.set(s, r + 1),
      (r += s.length + 1)
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n
}
async function t2(
  e,
  {
    blockNumber: t,
    blockTag: n,
    coinType: r,
    name: o,
    gatewayUrls: i,
    strict: s,
    universalResolverAddress: u,
  },
) {
  let a = u
  if (!a) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    a = lr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  try {
    const l = tn({
        abi: Hf,
        functionName: 'addr',
        ...(r != null ? { args: [Ei(o), BigInt(r)] } : { args: [Ei(o)] }),
      }),
      f = {
        address: a,
        abi: i0,
        functionName: 'resolve',
        args: [z(_s(o)), l],
        blockNumber: t,
        blockTag: n,
      },
      c = R(e, Jt, 'readContract'),
      d = i ? await c({ ...f, args: [...f.args, i] }) : await c(f)
    if (d[0] === '0x') return null
    const v = ar({
      abi: Hf,
      args: r != null ? [Ei(o), BigInt(r)] : void 0,
      functionName: 'addr',
      data: d[0],
    })
    return v === '0x' || Zn(v) === '0x00' ? null : v
  } catch (l) {
    if (s) throw l
    if (lc(l, 'resolve')) return null
    throw l
  }
}
class n2 extends k {
  constructor({ data: t }) {
    super(
      'Unable to extract image from metadata. The metadata may be malformed or invalid.',
      {
        metaMessages: [
          '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
          '',
          `Provided data: ${JSON.stringify(t)}`,
        ],
      },
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'EnsAvatarInvalidMetadataError',
      })
  }
}
class Sr extends k {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'EnsAvatarInvalidNftUriError',
      })
  }
}
class cc extends k {
  constructor({ uri: t }) {
    super(
      `Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'EnsAvatarUriResolutionError',
      })
  }
}
class r2 extends k {
  constructor({ namespace: t }) {
    super(
      `ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`,
    ),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'EnsAvatarUnsupportedNamespaceError',
      })
  }
}
const o2 =
    /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  i2 =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  s2 = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  u2 = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/
async function a2(e) {
  try {
    const t = await fetch(e, { method: 'HEAD' })
    if (t.status === 200) {
      const n = t.headers.get('content-type')
      return n == null ? void 0 : n.startsWith('image/')
    }
    return !1
  } catch (t) {
    return (typeof t == 'object' && typeof t.response < 'u') ||
      !globalThis.hasOwnProperty('Image')
      ? !1
      : new Promise((n) => {
          const r = new Image()
          ;(r.onload = () => {
            n(!0)
          }),
            (r.onerror = () => {
              n(!1)
            }),
            (r.src = e)
        })
  }
}
function sd(e, t) {
  return e ? (e.endsWith('/') ? e.slice(0, -1) : e) : t
}
function H0({ uri: e, gatewayUrls: t }) {
  const n = s2.test(e)
  if (n) return { uri: e, isOnChain: !0, isEncoded: n }
  const r = sd(t == null ? void 0 : t.ipfs, 'https://ipfs.io'),
    o = sd(t == null ? void 0 : t.arweave, 'https://arweave.net'),
    i = e.match(o2),
    {
      protocol: s,
      subpath: u,
      target: a,
      subtarget: l = '',
    } = (i == null ? void 0 : i.groups) || {},
    f = s === 'ipns:/' || u === 'ipns/',
    c = s === 'ipfs:/' || u === 'ipfs/' || i2.test(e)
  if (e.startsWith('http') && !f && !c) {
    let v = e
    return (
      t != null &&
        t.arweave &&
        (v = e.replace(
          /https:\/\/arweave.net/g,
          t == null ? void 0 : t.arweave,
        )),
      { uri: v, isOnChain: !1, isEncoded: !1 }
    )
  }
  if ((f || c) && a)
    return {
      uri: `${r}/${f ? 'ipns' : 'ipfs'}/${a}${l}`,
      isOnChain: !1,
      isEncoded: !1,
    }
  if (s === 'ar:/' && a)
    return { uri: `${o}/${a}${l || ''}`, isOnChain: !1, isEncoded: !1 }
  let d = e.replace(u2, '')
  if (
    (d.startsWith('<svg') && (d = `data:image/svg+xml;base64,${btoa(d)}`),
    d.startsWith('data:') || d.startsWith('{'))
  )
    return { uri: d, isOnChain: !0, isEncoded: !1 }
  throw new cc({ uri: e })
}
function G0(e) {
  if (
    typeof e != 'object' ||
    (!('image' in e) && !('image_url' in e) && !('image_data' in e))
  )
    throw new n2({ data: e })
  return e.image || e.image_url || e.image_data
}
async function l2({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((o) => o.json())
    return await fc({ gatewayUrls: e, uri: G0(n) })
  } catch {
    throw new cc({ uri: t })
  }
}
async function fc({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = H0({ uri: t, gatewayUrls: e })
  if (r || (await a2(n))) return n
  throw new cc({ uri: t })
}
function c2(e) {
  let t = e
  t.startsWith('did:nft:') && (t = t.replace('did:nft:', '').replace(/_/g, '/'))
  const [n, r, o] = t.split('/'),
    [i, s] = n.split(':'),
    [u, a] = r.split(':')
  if (!i || i.toLowerCase() !== 'eip155')
    throw new Sr({ reason: 'Only EIP-155 supported' })
  if (!s) throw new Sr({ reason: 'Chain ID not found' })
  if (!a) throw new Sr({ reason: 'Contract address not found' })
  if (!o) throw new Sr({ reason: 'Token ID not found' })
  if (!u) throw new Sr({ reason: 'ERC namespace not found' })
  return {
    chainID: parseInt(s),
    namespace: u.toLowerCase(),
    contractAddress: a,
    tokenID: o,
  }
}
async function f2(e, { nft: t }) {
  if (t.namespace === 'erc721')
    return Jt(e, {
      address: t.contractAddress,
      abi: [
        {
          name: 'tokenURI',
          type: 'function',
          stateMutability: 'view',
          inputs: [{ name: 'tokenId', type: 'uint256' }],
          outputs: [{ name: '', type: 'string' }],
        },
      ],
      functionName: 'tokenURI',
      args: [BigInt(t.tokenID)],
    })
  if (t.namespace === 'erc1155')
    return Jt(e, {
      address: t.contractAddress,
      abi: [
        {
          name: 'uri',
          type: 'function',
          stateMutability: 'view',
          inputs: [{ name: '_id', type: 'uint256' }],
          outputs: [{ name: '', type: 'string' }],
        },
      ],
      functionName: 'uri',
      args: [BigInt(t.tokenID)],
    })
  throw new r2({ namespace: t.namespace })
}
async function d2(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n)
    ? p2(e, { gatewayUrls: t, record: n })
    : fc({ uri: n, gatewayUrls: t })
}
async function p2(e, { gatewayUrls: t, record: n }) {
  const r = c2(n),
    o = await f2(e, { nft: r }),
    { uri: i, isOnChain: s, isEncoded: u } = H0({ uri: o, gatewayUrls: t })
  if (s && (i.includes('data:application/json;base64,') || i.startsWith('{'))) {
    const l = u ? atob(i.replace('data:application/json;base64,', '')) : i,
      f = JSON.parse(l)
    return fc({ uri: G0(f), gatewayUrls: t })
  }
  let a = r.tokenID
  return (
    r.namespace === 'erc1155' && (a = a.replace('0x', '').padStart(64, '0')),
    l2({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, a) })
  )
}
async function V0(
  e,
  {
    blockNumber: t,
    blockTag: n,
    name: r,
    key: o,
    gatewayUrls: i,
    strict: s,
    universalResolverAddress: u,
  },
) {
  let a = u
  if (!a) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    a = lr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  try {
    const l = {
        address: a,
        abi: i0,
        functionName: 'resolve',
        args: [
          z(_s(r)),
          tn({ abi: Uf, functionName: 'text', args: [Ei(r), o] }),
        ],
        blockNumber: t,
        blockTag: n,
      },
      f = R(e, Jt, 'readContract'),
      c = i ? await f({ ...l, args: [...l.args, i] }) : await f(l)
    if (c[0] === '0x') return null
    const d = ar({ abi: Uf, functionName: 'text', data: c[0] })
    return d === '' ? null : d
  } catch (l) {
    if (s) throw l
    if (lc(l, 'resolve')) return null
    throw l
  }
}
async function h2(
  e,
  {
    blockNumber: t,
    blockTag: n,
    assetGatewayUrls: r,
    name: o,
    gatewayUrls: i,
    strict: s,
    universalResolverAddress: u,
  },
) {
  const a = await R(
    e,
    V0,
    'getEnsText',
  )({
    blockNumber: t,
    blockTag: n,
    key: 'avatar',
    name: o,
    universalResolverAddress: u,
    gatewayUrls: i,
    strict: s,
  })
  if (!a) return null
  try {
    return await d2(e, { record: a, gatewayUrls: r })
  } catch {
    return null
  }
}
async function m2(
  e,
  {
    address: t,
    blockNumber: n,
    blockTag: r,
    gatewayUrls: o,
    strict: i,
    universalResolverAddress: s,
  },
) {
  let u = s
  if (!u) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    u = lr({ blockNumber: n, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  const a = `${t.toLowerCase().substring(2)}.addr.reverse`
  try {
    const l = {
        address: u,
        abi: _v,
        functionName: 'reverse',
        args: [z(_s(a))],
        blockNumber: n,
        blockTag: r,
      },
      f = R(e, Jt, 'readContract'),
      [c, d] = o ? await f({ ...l, args: [...l.args, o] }) : await f(l)
    return t.toLowerCase() !== d.toLowerCase() ? null : c
  } catch (l) {
    if (i) throw l
    if (lc(l, 'reverse')) return null
    throw l
  }
}
async function y2(
  e,
  { blockNumber: t, blockTag: n, name: r, universalResolverAddress: o },
) {
  let i = o
  if (!i) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    i = lr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  const [s] = await R(
    e,
    Jt,
    'readContract',
  )({
    address: i,
    abi: [
      {
        inputs: [{ type: 'bytes' }],
        name: 'findResolver',
        outputs: [{ type: 'address' }, { type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'findResolver',
    args: [z(_s(r))],
    blockNumber: t,
    blockTag: n,
  })
  return s
}
async function g2(e) {
  const t = gs(e, { method: 'eth_newBlockFilter' }),
    n = await e.request({ method: 'eth_newBlockFilter' })
  return { id: n, request: t(n), type: 'block' }
}
async function W0(
  e,
  {
    address: t,
    args: n,
    event: r,
    events: o,
    fromBlock: i,
    strict: s,
    toBlock: u,
  } = {},
) {
  const a = o ?? (r ? [r] : void 0),
    l = gs(e, { method: 'eth_newFilter' })
  let f = []
  a &&
    ((f = [a.flatMap((d) => _o({ abi: [d], eventName: d.name, args: n }))]),
    r && (f = f[0]))
  const c = await e.request({
    method: 'eth_newFilter',
    params: [
      {
        address: t,
        fromBlock: typeof i == 'bigint' ? I(i) : i,
        toBlock: typeof u == 'bigint' ? I(u) : u,
        ...(f.length ? { topics: f } : {}),
      },
    ],
  })
  return {
    abi: a,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: i,
    id: c,
    request: l(c),
    strict: !!s,
    toBlock: u,
    type: 'event',
  }
}
async function q0(e) {
  const t = gs(e, { method: 'eth_newPendingTransactionFilter' }),
    n = await e.request({ method: 'eth_newPendingTransactionFilter' })
  return { id: n, request: t(n), type: 'transaction' }
}
async function v2(e, { address: t, blockNumber: n, blockTag: r = 'latest' }) {
  const o = n ? I(n) : void 0,
    i = await e.request({ method: 'eth_getBalance', params: [t, o || r] })
  return BigInt(i)
}
async function w2(e) {
  const t = await e.request({ method: 'eth_blobBaseFee' })
  return BigInt(t)
}
async function b2(
  e,
  { blockHash: t, blockNumber: n, blockTag: r = 'latest' } = {},
) {
  const o = n !== void 0 ? I(n) : void 0
  let i
  return (
    t
      ? (i = await e.request({
          method: 'eth_getBlockTransactionCountByHash',
          params: [t],
        }))
      : (i = await e.request({
          method: 'eth_getBlockTransactionCountByNumber',
          params: [o || r],
        })),
    Et(i)
  )
}
async function x2(e, { address: t, blockNumber: n, blockTag: r = 'latest' }) {
  const o = n !== void 0 ? I(n) : void 0,
    i = await e.request({ method: 'eth_getCode', params: [t, o || r] })
  if (i !== '0x') return i
}
function E2(e) {
  var t
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward:
      (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r))),
  }
}
async function P2(
  e,
  {
    blockCount: t,
    blockNumber: n,
    blockTag: r = 'latest',
    rewardPercentiles: o,
  },
) {
  const i = n ? I(n) : void 0,
    s = await e.request({ method: 'eth_feeHistory', params: [I(t), i || r, o] })
  return E2(s)
}
async function S2(e, { filter: t }) {
  const n = t.strict ?? !1,
    o = (await t.request({ method: 'eth_getFilterLogs', params: [t.id] })).map(
      (i) => Kt(i),
    )
  return t.abi ? Kl({ abi: t.abi, logs: o, strict: n }) : o
}
function k2(e) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...e }
}
const C2 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  T2 =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/
function O2(e) {
  const { domain: t = {}, message: n, primaryType: r } = e,
    o = { EIP712Domain: Z0({ domain: t }), ...e.types }
  Y0({ domain: t, message: n, primaryType: r, types: o })
  const i = ['0x1901']
  return (
    t && i.push(N2({ domain: t, types: o })),
    r !== 'EIP712Domain' && i.push(Q0({ data: n, primaryType: r, types: o })),
    Pe(Pt(i))
  )
}
function N2({ domain: e, types: t }) {
  return Q0({ data: e, primaryType: 'EIP712Domain', types: t })
}
function Q0({ data: e, primaryType: t, types: n }) {
  const r = K0({ data: e, primaryType: t, types: n })
  return Pe(r)
}
function K0({ data: e, primaryType: t, types: n }) {
  const r = [{ type: 'bytes32' }],
    o = [A2({ primaryType: t, types: n })]
  for (const i of n[t]) {
    const [s, u] = X0({
      types: n,
      name: i.name,
      type: i.type,
      value: e[i.name],
    })
    r.push(s), o.push(u)
  }
  return No(r, o)
}
function A2({ primaryType: e, types: t }) {
  const n = z(_2({ primaryType: e, types: t }))
  return Pe(n)
}
function _2({ primaryType: e, types: t }) {
  let n = ''
  const r = J0({ primaryType: e, types: t })
  r.delete(e)
  const o = [e, ...Array.from(r).sort()]
  for (const i of o)
    n += `${i}(${t[i].map(({ name: s, type: u }) => `${u} ${s}`).join(',')})`
  return n
}
function J0({ primaryType: e, types: t }, n = new Set()) {
  const r = e.match(/^\w*/u),
    o = r == null ? void 0 : r[0]
  if (n.has(o) || t[o] === void 0) return n
  n.add(o)
  for (const i of t[o]) J0({ primaryType: i.type, types: t }, n)
  return n
}
function X0({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [{ type: 'bytes32' }, Pe(K0({ data: r, primaryType: n, types: e }))]
  if (n === 'bytes')
    return (
      (r = `0x${(r.length % 2 ? '0' : '') + r.slice(2)}`),
      [{ type: 'bytes32' }, Pe(r)]
    )
  if (n === 'string') return [{ type: 'bytes32' }, Pe(z(r))]
  if (n.lastIndexOf(']') === n.length - 1) {
    const o = n.slice(0, n.lastIndexOf('[')),
      i = r.map((s) => X0({ name: t, type: o, types: e, value: s }))
    return [
      { type: 'bytes32' },
      Pe(
        No(
          i.map(([s]) => s),
          i.map(([, s]) => s),
        ),
      ),
    ]
  }
  return [{ type: n }, r]
}
function Y0(e) {
  const { domain: t, message: n, primaryType: r, types: o } = e,
    i = (s, u) => {
      for (const a of s) {
        const { name: l, type: f } = a,
          c = u[l],
          d = f.match(T2)
        if (d && (typeof c == 'number' || typeof c == 'bigint')) {
          const [m, b, p] = d
          I(c, { signed: b === 'int', size: parseInt(p) / 8 })
        }
        if (f === 'address' && typeof c == 'string' && !Fe(c))
          throw new it({ address: c })
        const v = f.match(C2)
        if (v) {
          const [m, b] = v
          if (b && Y(c) !== parseInt(b))
            throw new Gg({ expectedSize: parseInt(b), givenSize: Y(c) })
        }
        const g = o[f]
        g && i(g, c)
      }
    }
  if ((o.EIP712Domain && t && i(o.EIP712Domain, t), r !== 'EIP712Domain')) {
    const s = o[r]
    i(s, n)
  }
}
function Z0({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == 'string' && {
      name: 'name',
      type: 'string',
    },
    (e == null ? void 0 : e.version) && { name: 'version', type: 'string' },
    typeof (e == null ? void 0 : e.chainId) == 'number' && {
      name: 'chainId',
      type: 'uint256',
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: 'verifyingContract',
      type: 'address',
    },
    (e == null ? void 0 : e.salt) && { name: 'salt', type: 'bytes32' },
  ].filter(Boolean)
}
const gu = '/docs/contract/encodeDeployData'
function em(e) {
  const { abi: t, args: n, bytecode: r } = e
  if (!n || n.length === 0) return r
  const o = t.find((s) => 'type' in s && s.type === 'constructor')
  if (!o) throw new jg({ docsPath: gu })
  if (!('inputs' in o)) throw new kf({ docsPath: gu })
  if (!o.inputs || o.inputs.length === 0) throw new kf({ docsPath: gu })
  const i = No(o.inputs, n)
  return sr([r, i])
}
const R2 = { '0x0': 'reverted', '0x1': 'success' }
function F2(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Kt(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Et(e.transactionIndex) : null,
    status: e.status ? R2[e.status] : null,
    type: e.type ? Xh[e.type] || e.type : null,
  }
  return (
    e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
    t
  )
}
const I2 = `Ethereum Signed Message:
`
function B2(e, t) {
  const n =
      typeof e == 'string'
        ? ht(e)
        : e.raw instanceof Uint8Array
          ? e.raw
          : Wt(e.raw),
    r = ht(`${I2}${n.length}`)
  return Pe(Pt([r, n]), t)
}
function z2(e, t) {
  let [n, r = '0'] = e.split('.')
  const o = n.startsWith('-')
  if ((o && (n = n.slice(1)), (r = r.replace(/(0+)$/, '')), t === 0))
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), (r = '')
  else if (r.length > t) {
    const [i, s, u] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
      a = Math.round(+`${s}.${u}`)
    a > 9
      ? (r = `${BigInt(i) + BigInt(1)}0`.padStart(i.length + 1, '0'))
      : (r = `${i}${a}`),
      r.length > t && ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
      (r = r.slice(0, t))
  } else r = r.padEnd(t, '0')
  return BigInt(`${o ? '-' : ''}${n}${r}`)
}
function j2(e, t = 'wei') {
  return z2(e, Gh[t])
}
function $2(e) {
  return e.map((t) => ({ ...t, value: BigInt(t.value) }))
}
function L2(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? Et(e.nonce) : void 0,
    storageProof: e.storageProof ? $2(e.storageProof) : void 0,
  }
}
async function M2(
  e,
  { address: t, blockNumber: n, blockTag: r, storageKeys: o },
) {
  const i = r ?? 'latest',
    s = n !== void 0 ? I(n) : void 0,
    u = await e.request({ method: 'eth_getProof', params: [t, o, s || i] })
  return L2(u)
}
async function D2(
  e,
  { address: t, blockNumber: n, blockTag: r = 'latest', slot: o },
) {
  const i = n !== void 0 ? I(n) : void 0
  return await e.request({ method: 'eth_getStorageAt', params: [t, o, i || r] })
}
async function dc(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, hash: o, index: i },
) {
  var f, c, d
  const s = r || 'latest',
    u = n !== void 0 ? I(n) : void 0
  let a = null
  if (
    (o
      ? (a = await e.request({
          method: 'eth_getTransactionByHash',
          params: [o],
        }))
      : t
        ? (a = await e.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [t, I(i)],
          }))
        : (u || s) &&
          (a = await e.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [u || s, I(i)],
          })),
    !a)
  )
    throw new Wh({
      blockHash: t,
      blockNumber: n,
      blockTag: s,
      hash: o,
      index: i,
    })
  return (
    ((d =
      (c = (f = e.chain) == null ? void 0 : f.formatters) == null
        ? void 0
        : c.transaction) == null
      ? void 0
      : d.format) || Yh
  )(a)
}
async function U2(e, { hash: t, transactionReceipt: n }) {
  const [r, o] = await Promise.all([
      R(e, zo, 'getBlockNumber')({}),
      t ? R(e, dc, 'getBlockNumber')({ hash: t }) : void 0,
    ]),
    i =
      (n == null ? void 0 : n.blockNumber) ||
      (o == null ? void 0 : o.blockNumber)
  return i ? r - i + 1n : 0n
}
async function Ba(e, { hash: t }) {
  var o, i, s
  const n = await e.request({
    method: 'eth_getTransactionReceipt',
    params: [t],
  })
  if (!n) throw new qh({ hash: t })
  return (
    ((s =
      (i = (o = e.chain) == null ? void 0 : o.formatters) == null
        ? void 0
        : i.transactionReceipt) == null
      ? void 0
      : s.format) || F2
  )(n)
}
async function H2(e, t) {
  var b
  const {
      allowFailure: n = !0,
      batchSize: r,
      blockNumber: o,
      blockTag: i,
      multicallAddress: s,
      stateOverride: u,
    } = t,
    a = t.contracts,
    l =
      r ??
      ((typeof ((b = e.batch) == null ? void 0 : b.multicall) == 'object' &&
        e.batch.multicall.batchSize) ||
        1024)
  let f = s
  if (!f) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. multicallAddress is required.',
      )
    f = lr({ blockNumber: o, chain: e.chain, contract: 'multicall3' })
  }
  const c = [[]]
  let d = 0,
    v = 0
  for (let p = 0; p < a.length; p++) {
    const { abi: h, address: y, args: w, functionName: S } = a[p]
    try {
      const x = tn({ abi: h, args: w, functionName: S })
      ;(v += (x.length - 2) / 2),
        l > 0 &&
          v > l &&
          c[d].length > 0 &&
          (d++, (v = (x.length - 2) / 2), (c[d] = [])),
        (c[d] = [...c[d], { allowFailure: !0, callData: x, target: y }])
    } catch (x) {
      const P = bo(x, {
        abi: h,
        address: y,
        args: w,
        docsPath: '/docs/contract/multicall',
        functionName: S,
      })
      if (!n) throw P
      c[d] = [...c[d], { allowFailure: !0, callData: '0x', target: y }]
    }
  }
  const g = await Promise.allSettled(
      c.map((p) =>
        R(
          e,
          Jt,
          'readContract',
        )({
          abi: Sa,
          address: f,
          args: [p],
          blockNumber: o,
          blockTag: i,
          functionName: 'aggregate3',
          stateOverride: u,
        }),
      ),
    ),
    m = []
  for (let p = 0; p < g.length; p++) {
    const h = g[p]
    if (h.status === 'rejected') {
      if (!n) throw h.reason
      for (let w = 0; w < c[p].length; w++)
        m.push({ status: 'failure', error: h.reason, result: void 0 })
      continue
    }
    const y = h.value
    for (let w = 0; w < y.length; w++) {
      const { returnData: S, success: x } = y[w],
        { callData: P } = c[p][w],
        { abi: T, address: A, functionName: _, args: M } = a[m.length]
      try {
        if (P === '0x') throw new ps()
        if (!x) throw new Ul({ data: S })
        const ye = ar({ abi: T, args: M, data: S, functionName: _ })
        m.push(n ? { result: ye, status: 'success' } : ye)
      } catch (ye) {
        const fe = bo(ye, {
          abi: T,
          address: A,
          args: M,
          docsPath: '/docs/contract/multicall',
          functionName: _,
        })
        if (!n) throw fe
        m.push({ error: fe, result: void 0, status: 'failure' })
      }
    }
  }
  if (m.length !== a.length) throw new k('multicall results mismatch')
  return m
}
const G2 =
  '0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572' /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0)
BigInt(1)
BigInt(2)
function V2(e, t) {
  if (e.length !== t.length) return !1
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
function W2(e, t) {
  const n = Xe(e) ? Wt(e) : e,
    r = Xe(t) ? Wt(t) : t
  return V2(n, r)
}
async function tm(e, { address: t, hash: n, signature: r, ...o }) {
  const i = Xe(r) ? r : z(r)
  try {
    const { data: s } = await R(
      e,
      Es,
      'call',
    )({ data: em({ abi: Rv, args: [t, n, i], bytecode: G2 }), ...o })
    return W2(s ?? '0x0', '0x1')
  } catch (s) {
    if (s instanceof Qh) return !1
    throw s
  }
}
async function q2(e, { address: t, message: n, signature: r, ...o }) {
  const i = B2(n)
  return tm(e, { address: t, hash: i, signature: r, ...o })
}
async function Q2(e, t) {
  const {
      address: n,
      signature: r,
      message: o,
      primaryType: i,
      types: s,
      domain: u,
      ...a
    } = t,
    l = O2({ message: o, primaryType: i, types: s, domain: u })
  return tm(e, { address: n, hash: l, signature: r, ...a })
}
function nm(
  e,
  {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: o,
    poll: i,
    pollingInterval: s = e.pollingInterval,
  },
) {
  const u = typeof i < 'u' ? i : e.transport.type !== 'webSocket'
  let a
  return u
    ? (() => {
        const c = le(['watchBlockNumber', e.uid, t, n, s])
        return Xt(c, { onBlockNumber: r, onError: o }, (d) =>
          Bo(
            async () => {
              var v
              try {
                const g = await R(e, zo, 'getBlockNumber')({ cacheTime: 0 })
                if (a) {
                  if (g === a) return
                  if (g - a > 1 && n)
                    for (let m = a + 1n; m < g; m++)
                      d.onBlockNumber(m, a), (a = m)
                }
                ;(!a || g > a) && (d.onBlockNumber(g, a), (a = g))
              } catch (g) {
                ;(v = d.onError) == null || v.call(d, g)
              }
            },
            { emitOnBegin: t, interval: s },
          ),
        )
      })()
    : (() => {
        const c = le(['watchBlockNumber', e.uid, t, n])
        return Xt(c, { onBlockNumber: r, onError: o }, (d) => {
          let v = !0,
            g = () => (v = !1)
          return (
            (async () => {
              try {
                const { unsubscribe: m } = await e.transport.subscribe({
                  params: ['newHeads'],
                  onData(b) {
                    var h
                    if (!v) return
                    const p = ms((h = b.result) == null ? void 0 : h.number)
                    d.onBlockNumber(p, a), (a = p)
                  },
                  onError(b) {
                    var p
                    ;(p = d.onError) == null || p.call(d, b)
                  },
                })
                ;(g = m), v || g()
              } catch (m) {
                o == null || o(m)
              }
            })(),
            () => g()
          )
        })
      })()
}
async function K2(
  e,
  {
    confirmations: t = 1,
    hash: n,
    onReplaced: r,
    pollingInterval: o = e.pollingInterval,
    retryCount: i = 6,
    retryDelay: s = ({ count: a }) => ~~(1 << a) * 200,
    timeout: u,
  },
) {
  const a = le(['waitForTransactionReceipt', e.uid, n])
  let l,
    f,
    c,
    d = !1
  return new Promise((v, g) => {
    u && setTimeout(() => g(new pv({ hash: n })), u)
    const m = Xt(a, { onReplaced: r, resolve: v, reject: g }, (b) => {
      const p = R(
        e,
        nm,
        'watchBlockNumber',
      )({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: o,
        async onBlockNumber(h) {
          if (d) return
          let y = h
          const w = (S) => {
            p(), S(), m()
          }
          try {
            if (c) {
              if (t > 1 && (!c.blockNumber || y - c.blockNumber + 1n < t))
                return
              w(() => b.resolve(c))
              return
            }
            if (
              (l ||
                ((d = !0),
                await Ia(
                  async () => {
                    ;(l = await R(e, dc, 'getTransaction')({ hash: n })),
                      l.blockNumber && (y = l.blockNumber)
                  },
                  { delay: s, retryCount: i },
                ),
                (d = !1)),
              (c = await R(e, Ba, 'getTransactionReceipt')({ hash: n })),
              t > 1 && (!c.blockNumber || y - c.blockNumber + 1n < t))
            )
              return
            w(() => b.resolve(c))
          } catch (S) {
            if (S instanceof Wh || S instanceof qh) {
              if (!l) {
                d = !1
                return
              }
              try {
                ;(f = l), (d = !0)
                const x = await Ia(
                  () =>
                    R(
                      e,
                      Qt,
                      'getBlock',
                    )({ blockNumber: y, includeTransactions: !0 }),
                  {
                    delay: s,
                    retryCount: i,
                    shouldRetry: ({ error: A }) => A instanceof Jh,
                  },
                )
                d = !1
                const P = x.transactions.find(
                  ({ from: A, nonce: _ }) => A === f.from && _ === f.nonce,
                )
                if (
                  !P ||
                  ((c = await R(
                    e,
                    Ba,
                    'getTransactionReceipt',
                  )({ hash: P.hash })),
                  t > 1 && (!c.blockNumber || y - c.blockNumber + 1n < t))
                )
                  return
                let T = 'replaced'
                P.to === f.to && P.value === f.value
                  ? (T = 'repriced')
                  : P.from === P.to && P.value === 0n && (T = 'cancelled'),
                  w(() => {
                    var A
                    ;(A = b.onReplaced) == null ||
                      A.call(b, {
                        reason: T,
                        replacedTransaction: f,
                        transaction: P,
                        transactionReceipt: c,
                      }),
                      b.resolve(c)
                  })
              } catch (x) {
                w(() => b.reject(x))
              }
            } else w(() => b.reject(S))
          }
        },
      })
    })
  })
}
function J2(
  e,
  {
    blockTag: t = 'latest',
    emitMissed: n = !1,
    emitOnBegin: r = !1,
    onBlock: o,
    onError: i,
    includeTransactions: s,
    poll: u,
    pollingInterval: a = e.pollingInterval,
  },
) {
  const l = typeof u < 'u' ? u : e.transport.type !== 'webSocket',
    f = s ?? !1
  let c
  return l
    ? (() => {
        const g = le(['watchBlocks', e.uid, n, r, f, a])
        return Xt(g, { onBlock: o, onError: i }, (m) =>
          Bo(
            async () => {
              var b
              try {
                const p = await R(
                  e,
                  Qt,
                  'getBlock',
                )({ blockTag: t, includeTransactions: f })
                if (p.number && c != null && c.number) {
                  if (p.number === c.number) return
                  if (p.number - c.number > 1 && n)
                    for (
                      let h = (c == null ? void 0 : c.number) + 1n;
                      h < p.number;
                      h++
                    ) {
                      const y = await R(
                        e,
                        Qt,
                        'getBlock',
                      )({ blockNumber: h, includeTransactions: f })
                      m.onBlock(y, c), (c = y)
                    }
                }
                ;(!(c != null && c.number) ||
                  (t === 'pending' && !(p != null && p.number)) ||
                  (p.number && p.number > c.number)) &&
                  (m.onBlock(p, c), (c = p))
              } catch (p) {
                ;(b = m.onError) == null || b.call(m, p)
              }
            },
            { emitOnBegin: r, interval: a },
          ),
        )
      })()
    : (() => {
        let g = !0,
          m = () => (g = !1)
        return (
          (async () => {
            try {
              const { unsubscribe: b } = await e.transport.subscribe({
                params: ['newHeads'],
                onData(p) {
                  var w, S, x
                  if (!g) return
                  const y = (
                    ((x =
                      (S = (w = e.chain) == null ? void 0 : w.formatters) ==
                      null
                        ? void 0
                        : S.block) == null
                      ? void 0
                      : x.format) || Zh
                  )(p.result)
                  o(y, c), (c = y)
                },
                onError(p) {
                  i == null || i(p)
                },
              })
              ;(m = b), g || m()
            } catch (b) {
              i == null || i(b)
            }
          })(),
          () => m()
        )
      })()
}
function X2(
  e,
  {
    address: t,
    args: n,
    batch: r = !0,
    event: o,
    events: i,
    onError: s,
    onLogs: u,
    poll: a,
    pollingInterval: l = e.pollingInterval,
    strict: f,
  },
) {
  const c = typeof a < 'u' ? a : e.transport.type !== 'webSocket',
    d = f ?? !1
  return c
    ? (() => {
        const m = le(['watchEvent', t, n, r, e.uid, o, l])
        return Xt(m, { onLogs: u, onError: s }, (b) => {
          let p,
            h,
            y = !1
          const w = Bo(
            async () => {
              var S
              if (!y) {
                try {
                  h = await R(
                    e,
                    W0,
                    'createEventFilter',
                  )({ address: t, args: n, event: o, events: i, strict: d })
                } catch {}
                y = !0
                return
              }
              try {
                let x
                if (h) x = await R(e, Ps, 'getFilterChanges')({ filter: h })
                else {
                  const P = await R(e, zo, 'getBlockNumber')({})
                  p && p !== P
                    ? (x = await R(
                        e,
                        Jl,
                        'getLogs',
                      )({
                        address: t,
                        args: n,
                        event: o,
                        events: i,
                        fromBlock: p + 1n,
                        toBlock: P,
                      }))
                    : (x = []),
                    (p = P)
                }
                if (x.length === 0) return
                if (r) b.onLogs(x)
                else for (const P of x) b.onLogs([P])
              } catch (x) {
                h && x instanceof bn && (y = !1),
                  (S = b.onError) == null || S.call(b, x)
              }
            },
            { emitOnBegin: !0, interval: l },
          )
          return async () => {
            h && (await R(e, Ss, 'uninstallFilter')({ filter: h })), w()
          }
        })
      })()
    : (() => {
        let m = !0,
          b = () => (m = !1)
        return (
          (async () => {
            try {
              const p = i ?? (o ? [o] : void 0)
              let h = []
              p &&
                ((h = [
                  p.flatMap((w) =>
                    _o({ abi: [w], eventName: w.name, args: n }),
                  ),
                ]),
                o && (h = h[0]))
              const { unsubscribe: y } = await e.transport.subscribe({
                params: ['logs', { address: t, topics: h }],
                onData(w) {
                  var x
                  if (!m) return
                  const S = w.result
                  try {
                    const { eventName: P, args: T } = Ql({
                        abi: p ?? [],
                        data: S.data,
                        topics: S.topics,
                        strict: d,
                      }),
                      A = Kt(S, { args: T, eventName: P })
                    u([A])
                  } catch (P) {
                    let T, A
                    if (P instanceof no || P instanceof hs) {
                      if (f) return
                      ;(T = P.abiItem.name),
                        (A =
                          (x = P.abiItem.inputs) == null
                            ? void 0
                            : x.some((M) => !('name' in M && M.name)))
                    }
                    const _ = Kt(S, { args: A ? [] : {}, eventName: T })
                    u([_])
                  }
                },
                onError(w) {
                  s == null || s(w)
                },
              })
              ;(b = y), m || b()
            } catch (p) {
              s == null || s(p)
            }
          })(),
          () => b()
        )
      })()
}
function Y2(
  e,
  {
    batch: t = !0,
    onError: n,
    onTransactions: r,
    poll: o,
    pollingInterval: i = e.pollingInterval,
  },
) {
  return (typeof o < 'u' ? o : e.transport.type !== 'webSocket')
    ? (() => {
        const l = le(['watchPendingTransactions', e.uid, t, i])
        return Xt(l, { onTransactions: r, onError: n }, (f) => {
          let c
          const d = Bo(
            async () => {
              var v
              try {
                if (!c)
                  try {
                    c = await R(e, q0, 'createPendingTransactionFilter')({})
                    return
                  } catch (m) {
                    throw (d(), m)
                  }
                const g = await R(e, Ps, 'getFilterChanges')({ filter: c })
                if (g.length === 0) return
                if (t) f.onTransactions(g)
                else for (const m of g) f.onTransactions([m])
              } catch (g) {
                ;(v = f.onError) == null || v.call(f, g)
              }
            },
            { emitOnBegin: !0, interval: i },
          )
          return async () => {
            c && (await R(e, Ss, 'uninstallFilter')({ filter: c })), d()
          }
        })
      })()
    : (() => {
        let l = !0,
          f = () => (l = !1)
        return (
          (async () => {
            try {
              const { unsubscribe: c } = await e.transport.subscribe({
                params: ['newPendingTransactions'],
                onData(d) {
                  if (!l) return
                  const v = d.result
                  r([v])
                },
                onError(d) {
                  n == null || n(d)
                },
              })
              ;(f = c), l || f()
            } catch (c) {
              n == null || n(c)
            }
          })(),
          () => f()
        )
      })()
}
function Z2(e) {
  return {
    call: (t) => Es(e, t),
    createBlockFilter: () => g2(e),
    createContractEventFilter: (t) => Mh(e, t),
    createEventFilter: (t) => W0(e, t),
    createPendingTransactionFilter: () => q0(e),
    estimateContractGas: (t) => Cv(e, t),
    estimateGas: (t) => ql(e, t),
    getBalance: (t) => v2(e, t),
    getBlobBaseFee: () => w2(e),
    getBlock: (t) => Qt(e, t),
    getBlockNumber: (t) => zo(e, t),
    getBlockTransactionCount: (t) => b2(e, t),
    getBytecode: (t) => x2(e, t),
    getChainId: () => Io(e),
    getContractEvents: (t) => r0(e, t),
    getEnsAddress: (t) => t2(e, t),
    getEnsAvatar: (t) => h2(e, t),
    getEnsName: (t) => m2(e, t),
    getEnsResolver: (t) => y2(e, t),
    getEnsText: (t) => V0(e, t),
    getFeeHistory: (t) => P2(e, t),
    estimateFeesPerGas: (t) => kv(e, t),
    getFilterChanges: (t) => Ps(e, t),
    getFilterLogs: (t) => S2(e, t),
    getGasPrice: () => Wl(e),
    getLogs: (t) => Jl(e, t),
    getProof: (t) => M2(e, t),
    estimateMaxPriorityFeePerGas: (t) => Sv(e, t),
    getStorageAt: (t) => D2(e, t),
    getTransaction: (t) => dc(e, t),
    getTransactionConfirmations: (t) => U2(e, t),
    getTransactionCount: (t) => t0(e, t),
    getTransactionReceipt: (t) => Ba(e, t),
    multicall: (t) => H2(e, t),
    prepareTransactionRequest: (t) => xs(e, t),
    readContract: (t) => Jt(e, t),
    sendRawTransaction: (t) => uc(e, t),
    simulateContract: (t) => Uv(e, t),
    verifyMessage: (t) => q2(e, t),
    verifyTypedData: (t) => Q2(e, t),
    uninstallFilter: (t) => Ss(e, t),
    waitForTransactionReceipt: (t) => K2(e, t),
    watchBlocks: (t) => J2(e, t),
    watchBlockNumber: (t) => nm(e, t),
    watchContractEvent: (t) => Kv(e, t),
    watchEvent: (t) => X2(e, t),
    watchPendingTransactions: (t) => Y2(e, t),
  }
}
function ex(e) {
  const { key: t = 'public', name: n = 'Public Client' } = e
  return M0({ ...e, key: t, name: n, type: 'publicClient' }).extend(Z2)
}
function tx(e, t) {
  const { abi: n, args: r, bytecode: o, ...i } = t,
    s = em({ abi: n, args: r, bytecode: o })
  return ac(e, { ...i, data: s })
}
async function nx(e) {
  var n
  return ((n = e.account) == null ? void 0 : n.type) === 'local'
    ? [e.account.address]
    : (await e.request({ method: 'eth_accounts' })).map((r) => ys(r))
}
async function rx(e) {
  return await e.request({ method: 'wallet_getPermissions' })
}
async function ox(e) {
  return (
    await e.request({ method: 'eth_requestAccounts' }, { retryCount: 0 })
  ).map((n) => A1(n))
}
async function ix(e, t) {
  return e.request(
    { method: 'wallet_requestPermissions', params: [t] },
    { retryCount: 0 },
  )
}
async function sx(e, { account: t = e.account, message: n }) {
  if (!t) throw new ks({ docsPath: '/docs/actions/wallet/signMessage' })
  const r = He(t)
  if (r.type === 'local') return r.signMessage({ message: n })
  const o =
    typeof n == 'string'
      ? Rl(n)
      : n.raw instanceof Uint8Array
        ? z(n.raw)
        : n.raw
  return e.request(
    { method: 'personal_sign', params: [o, r.address] },
    { retryCount: 0 },
  )
}
async function ux(e, t) {
  var l, f, c, d
  const { account: n = e.account, chain: r = e.chain, ...o } = t
  if (!n) throw new ks({ docsPath: '/docs/actions/wallet/signTransaction' })
  const i = He(n)
  Fo({ account: i, ...t })
  const s = await R(e, Io, 'getChainId')({})
  r !== null && a0({ currentChainId: s, chain: r })
  const u =
      (r == null ? void 0 : r.formatters) ||
      ((l = e.chain) == null ? void 0 : l.formatters),
    a =
      ((f = u == null ? void 0 : u.transactionRequest) == null
        ? void 0
        : f.format) || bs
  return i.type === 'local'
    ? i.signTransaction(
        { ...o, chainId: s },
        {
          serializer:
            (d = (c = e.chain) == null ? void 0 : c.serializers) == null
              ? void 0
              : d.transaction,
        },
      )
    : await e.request(
        {
          method: 'eth_signTransaction',
          params: [{ ...a(o), chainId: I(s), from: i.address }],
        },
        { retryCount: 0 },
      )
}
async function ax(e, t) {
  const { account: n = e.account, domain: r, message: o, primaryType: i } = t
  if (!n) throw new ks({ docsPath: '/docs/actions/wallet/signTypedData' })
  const s = He(n),
    u = { EIP712Domain: Z0({ domain: r }), ...t.types }
  if (
    (Y0({ domain: r, message: o, primaryType: i, types: u }),
    s.type === 'local')
  )
    return s.signTypedData({ domain: r, message: o, primaryType: i, types: u })
  const a = le(
    { domain: r ?? {}, message: o, primaryType: i, types: u },
    (l, f) => (Xe(f) ? f.toLowerCase() : f),
  )
  return e.request(
    { method: 'eth_signTypedData_v4', params: [s.address, a] },
    { retryCount: 0 },
  )
}
async function lx(e, { id: t }) {
  await e.request(
    { method: 'wallet_switchEthereumChain', params: [{ chainId: I(t) }] },
    { retryCount: 0 },
  )
}
async function cx(e, t) {
  return await e.request(
    { method: 'wallet_watchAsset', params: t },
    { retryCount: 0 },
  )
}
function fx(e) {
  return {
    addChain: (t) => Hb(e, t),
    deployContract: (t) => tx(e, t),
    getAddresses: () => nx(e),
    getChainId: () => Io(e),
    getPermissions: () => rx(e),
    prepareTransactionRequest: (t) => xs(e, t),
    requestAddresses: () => ox(e),
    requestPermissions: (t) => ix(e, t),
    sendRawTransaction: (t) => uc(e, t),
    sendTransaction: (t) => ac(e, t),
    signMessage: (t) => sx(e, t),
    signTransaction: (t) => ux(e, t),
    signTypedData: (t) => ax(e, t),
    switchChain: (t) => lx(e, t),
    watchAsset: (t) => cx(e, t),
    writeContract: (t) => Ub(e, t),
  }
}
function dx(e) {
  const { key: t = 'wallet', name: n = 'Wallet Client', transport: r } = e
  return M0({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: 'walletClient',
  }).extend(fx)
}
const rm = k2({
    id: 11155111,
    name: 'Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: { default: { http: ['https://rpc.sepolia.org'] } },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: 'https://sepolia.etherscan.io',
        apiUrl: 'https://api-sepolia.etherscan.io/api',
      },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 751532,
      },
      ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
      ensUniversalResolver: {
        address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
        blockCreated: 5317080,
      },
    },
    testnet: !0,
  }),
  px = ex({ chain: rm, transport: Yb() }),
  ud = dx({ chain: rm, transport: qb(window.ethereum) })
function hx() {
  const [e, t] = an.useState(),
    [n, r] = an.useState(),
    [o, i] = an.useState(),
    s = yc.createRef(),
    u = yc.createRef(),
    a = async () => {
      const [f] = await ud.requestAddresses()
      t(f)
    },
    l = async () => {
      if (!e) return
      const f = await ud.sendTransaction({
        account: e,
        to: s.current.value,
        value: j2(u.current.value),
      })
      r(f)
    }
  return (
    an.useEffect(() => {
      ;(async () => {
        if (n) {
          const f = await px.waitForTransactionReceipt({ hash: n })
          i(f)
        }
      })()
    }, [n]),
    e
      ? zs(Cm, {
          children: [
            zs('div', { children: ['Connected: ', e] }),
            on('input', { ref: s, placeholder: 'address' }),
            on('input', { ref: u, placeholder: 'value (ether)' }),
            on('button', { onClick: l, children: 'Send' }),
            o &&
              zs('div', {
                children: [
                  'Receipt:',
                  ' ',
                  on('pre', {
                    children: on('code', { children: le(o, null, 2) }),
                  }),
                ],
              }),
          ],
        })
      : on('button', { onClick: a, children: 'Connect Wallet' })
  )
}
vu.createRoot(document.getElementById('root')).render(on(hx, {}))
export {
  k as B,
  $r as H,
  it as I,
  Pt as a,
  Xe as b,
  Es as c,
  rv as d,
  No as e,
  _l as g,
  Fe as i,
  le as s,
}
