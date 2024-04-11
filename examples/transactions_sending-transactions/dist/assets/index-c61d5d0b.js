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
function U0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var df = { exports: {} },
  zi = {},
  pf = { exports: {} },
  j = {} /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo = Symbol.for('react.element'),
  G0 = Symbol.for('react.portal'),
  H0 = Symbol.for('react.fragment'),
  V0 = Symbol.for('react.strict_mode'),
  W0 = Symbol.for('react.profiler'),
  q0 = Symbol.for('react.provider'),
  Q0 = Symbol.for('react.context'),
  K0 = Symbol.for('react.forward_ref'),
  Y0 = Symbol.for('react.suspense'),
  X0 = Symbol.for('react.memo'),
  Z0 = Symbol.for('react.lazy'),
  Nl = Symbol.iterator
function J0(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nl && e[Nl]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var hf = {
    isMounted: () => !1,
    enqueueForceUpdate: () => {},
    enqueueReplaceState: () => {},
    enqueueSetState: () => {},
  },
  mf = Object.assign,
  yf = {}
function Qn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = yf),
    (this.updater = n || hf)
}
Qn.prototype.isReactComponent = {}
Qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function gf() {}
gf.prototype = Qn.prototype
function ra(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = yf),
    (this.updater = n || hf)
}
var oa = (ra.prototype = new gf())
oa.constructor = ra
mf(oa, Qn.prototype)
oa.isPureReactComponent = !0
var _l = Array.isArray,
  vf = Object.prototype.hasOwnProperty,
  ia = { current: null },
  wf = { key: !0, ref: !0, __self: !0, __source: !0 }
function bf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      vf.call(t, r) && !wf.hasOwnProperty(r) && (o[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) o.children = n
  else if (1 < u) {
    for (var a = Array(u), l = 0; l < u; l++) a[l] = arguments[l + 2]
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r])
  return { $$typeof: fo, type: e, key: i, ref: s, props: o, _owner: ia.current }
}
function eh(e, t) {
  return {
    $$typeof: fo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function sa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fo
}
function th(e) {
  var t = { '=': '=0', ':': '=2' }
  return '$' + e.replace(/[=:]/g, (n) => t[n])
}
var Il = /\/+/g
function ds(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? th('' + e.key)
    : t.toString(36)
}
function qo(e, t, n, r, o) {
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
          case fo:
          case G0:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + ds(s, 0) : r),
      _l(o)
        ? ((n = ''),
          e != null && (n = e.replace(Il, '$&/') + '/'),
          qo(o, t, n, '', (l) => l))
        : o != null &&
          (sa(o) &&
            (o = eh(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Il, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), _l(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var a = r + ds(i, u)
      s += qo(i, t, n, a, o)
    }
  else if (((a = J0(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + ds(i, u++)), (s += qo(i, t, n, a, o))
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
function To(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return qo(e, r, '', '', (i) => t.call(n, i, o++)), r
}
function nh(e) {
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
var ye = { current: null },
  Qo = { transition: null },
  rh = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Qo,
    ReactCurrentOwner: ia,
  }
j.Children = {
  map: To,
  forEach: (e, t, n) => {
    To(
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
      To(e, () => {
        t++
      }),
      t
    )
  },
  toArray: (e) => To(e, (t) => t) || [],
  only: (e) => {
    if (!sa(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
j.Component = Qn
j.Fragment = H0
j.Profiler = W0
j.PureComponent = ra
j.StrictMode = V0
j.Suspense = Y0
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rh
j.cloneElement = (e, t, n) => {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = mf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = ia.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (a in t)
      vf.call(t, a) &&
        !wf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    u = Array(a)
    for (var l = 0; l < a; l++) u[l] = arguments[l + 2]
    r.children = u
  }
  return { $$typeof: fo, type: e.type, key: o, ref: i, props: r, _owner: s }
}
j.createContext = (e) => (
  (e = {
    $$typeof: Q0,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  }),
  (e.Provider = { $$typeof: q0, _context: e }),
  (e.Consumer = e)
)
j.createElement = bf
j.createFactory = (e) => {
  var t = bf.bind(null, e)
  return (t.type = e), t
}
j.createRef = () => ({ current: null })
j.forwardRef = (e) => ({ $$typeof: K0, render: e })
j.isValidElement = sa
j.lazy = (e) => ({
  $$typeof: Z0,
  _payload: { _status: -1, _result: e },
  _init: nh,
})
j.memo = (e, t) => ({ $$typeof: X0, type: e, compare: t === void 0 ? null : t })
j.startTransition = (e) => {
  var t = Qo.transition
  Qo.transition = {}
  try {
    e()
  } finally {
    Qo.transition = t
  }
}
j.unstable_act = () => {
  throw Error('act(...) is not supported in production builds of React.')
}
j.useCallback = (e, t) => ye.current.useCallback(e, t)
j.useContext = (e) => ye.current.useContext(e)
j.useDebugValue = () => {}
j.useDeferredValue = (e) => ye.current.useDeferredValue(e)
j.useEffect = (e, t) => ye.current.useEffect(e, t)
j.useId = () => ye.current.useId()
j.useImperativeHandle = (e, t, n) => ye.current.useImperativeHandle(e, t, n)
j.useInsertionEffect = (e, t) => ye.current.useInsertionEffect(e, t)
j.useLayoutEffect = (e, t) => ye.current.useLayoutEffect(e, t)
j.useMemo = (e, t) => ye.current.useMemo(e, t)
j.useReducer = (e, t, n) => ye.current.useReducer(e, t, n)
j.useRef = (e) => ye.current.useRef(e)
j.useState = (e) => ye.current.useState(e)
j.useSyncExternalStore = (e, t, n) => ye.current.useSyncExternalStore(e, t, n)
j.useTransition = () => ye.current.useTransition()
j.version = '18.2.0'
pf.exports = j
var en = pf.exports
const Ol = U0(en) /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh = en,
  ih = Symbol.for('react.element'),
  sh = Symbol.for('react.fragment'),
  uh = Object.prototype.hasOwnProperty,
  ah = oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lh = { key: !0, ref: !0, __self: !0, __source: !0 }
function xf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) uh.call(t, r) && !lh.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: ih, type: e, key: i, ref: s, props: o, _owner: ah.current }
}
zi.Fragment = sh
zi.jsx = xf
zi.jsxs = xf
df.exports = zi
var ua = df.exports
const ch = ua.Fragment,
  Xt = ua.jsx,
  ps = ua.jsxs
var Vs = {},
  Pf = { exports: {} },
  Oe = {},
  Ef = { exports: {} },
  kf = {} /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
;((e) => {
  function t(N, z) {
    var $ = N.length
    N.push(z)
    while (0 < $) {
      var Q = ($ - 1) >>> 1,
        te = N[Q]
      if (0 < o(te, z)) (N[Q] = z), (N[$] = te), ($ = Q)
      else break
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var z = N[0],
      $ = N.pop()
    if ($ !== z) {
      N[0] = $
      for (var Q = 0, te = N.length, So = te >>> 1; Q < So; ) {
        var Kt = 2 * (Q + 1) - 1,
          fs = N[Kt],
          Yt = Kt + 1,
          Co = N[Yt]
        if (0 > o(fs, $))
          Yt < te && 0 > o(Co, fs)
            ? ((N[Q] = Co), (N[Yt] = $), (Q = Yt))
            : ((N[Q] = fs), (N[Kt] = $), (Q = Kt))
        else if (Yt < te && 0 > o(Co, $)) (N[Q] = Co), (N[Yt] = $), (Q = Yt)
        else break
      }
    }
    return z
  }
  function o(N, z) {
    var $ = N.sortIndex - z.sortIndex
    return $ !== 0 ? $ : N.id - z.id
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
    g = !1,
    v = !1,
    y = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(N) {
    for (var z = n(l); z !== null; ) {
      if (z.callback === null) r(l)
      else if (z.startTime <= N) r(l), (z.sortIndex = z.expirationTime), t(a, z)
      else break
      z = n(l)
    }
  }
  function w(N) {
    if (((y = !1), m(N), !v))
      if (n(a) !== null) (v = !0), ls(P)
      else {
        var z = n(l)
        z !== null && cs(w, z.startTime - N)
      }
  }
  function P(N, z) {
    ;(v = !1), y && ((y = !1), h(C), (C = -1)), (g = !0)
    var $ = d
    try {
      for (
        m(z), c = n(a);
        c !== null && (!(c.expirationTime > z) || (N && !R()));
      ) {
        var Q = c.callback
        if (typeof Q == 'function') {
          ;(c.callback = null), (d = c.priorityLevel)
          var te = Q(c.expirationTime <= z)
          ;(z = e.unstable_now()),
            typeof te == 'function' ? (c.callback = te) : c === n(a) && r(a),
            m(z)
        } else r(a)
        c = n(a)
      }
      if (c !== null) var So = !0
      else {
        var Kt = n(l)
        Kt !== null && cs(w, Kt.startTime - z), (So = !1)
      }
      return So
    } finally {
      ;(c = null), (d = $), (g = !1)
    }
  }
  var x = !1,
    b = null,
    C = -1,
    _ = 5,
    I = -1
  function R() {
    return !(e.unstable_now() - I < _)
  }
  function pe() {
    if (b !== null) {
      var N = e.unstable_now()
      I = N
      var z = !0
      try {
        z = b(!0, N)
      } finally {
        z ? ee() : ((x = !1), (b = null))
      }
    } else x = !1
  }
  var ee
  if (typeof p == 'function')
    ee = () => {
      p(pe)
    }
  else if (typeof MessageChannel < 'u') {
    var Qt = new MessageChannel(),
      nr = Qt.port2
    ;(Qt.port1.onmessage = pe),
      (ee = () => {
        nr.postMessage(null)
      })
  } else
    ee = () => {
      E(pe, 0)
    }
  function ls(N) {
    ;(b = N), x || ((x = !0), ee())
  }
  function cs(N, z) {
    C = E(() => {
      N(e.unstable_now())
    }, z)
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
      v || g || ((v = !0), ls(P))
    }),
    (e.unstable_forceFrameRate = (N) => {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (_ = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = () => d),
    (e.unstable_getFirstCallbackNode = () => n(a)),
    (e.unstable_next = (N) => {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var z = 3
          break
        default:
          z = d
      }
      var $ = d
      d = z
      try {
        return N()
      } finally {
        d = $
      }
    }),
    (e.unstable_pauseExecution = () => {}),
    (e.unstable_requestPaint = () => {}),
    (e.unstable_runWithPriority = (N, z) => {
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
      var $ = d
      d = N
      try {
        return z()
      } finally {
        d = $
      }
    }),
    (e.unstable_scheduleCallback = (N, z, $) => {
      var Q = e.unstable_now()
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? Q + $ : Q))
          : ($ = Q),
        N)
      ) {
        case 1:
          var te = -1
          break
        case 2:
          te = 250
          break
        case 5:
          te = 1073741823
          break
        case 4:
          te = 1e4
          break
        default:
          te = 5e3
      }
      return (
        (te = $ + te),
        (N = {
          id: f++,
          callback: z,
          priorityLevel: N,
          startTime: $,
          expirationTime: te,
          sortIndex: -1,
        }),
        $ > Q
          ? ((N.sortIndex = $),
            t(l, N),
            n(a) === null &&
              N === n(l) &&
              (y ? (h(C), (C = -1)) : (y = !0), cs(w, $ - Q)))
          : ((N.sortIndex = te), t(a, N), v || g || ((v = !0), ls(P))),
        N
      )
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = (N) => {
      var z = d
      return function () {
        var $ = d
        d = z
        try {
          return N.apply(this, arguments)
        } finally {
          d = $
        }
      }
    })
})(kf)
Ef.exports = kf
var fh = Ef.exports /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf = en,
  _e = fh
function S(e) {
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
var Cf = new Set(),
  Nr = {}
function mn(e, t) {
  Ln(e, t), Ln(e + 'Capture', t)
}
function Ln(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) Cf.add(t[e])
}
var ct = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ws = Object.prototype.hasOwnProperty,
  dh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zl = {},
  Al = {}
function ph(e) {
  return Ws.call(Al, e)
    ? !0
    : Ws.call(zl, e)
      ? !1
      : dh.test(e)
        ? (Al[e] = !0)
        : ((zl[e] = !0), !1)
}
function hh(e, t, n, r) {
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
function mh(e, t, n, r) {
  if (t === null || typeof t > 'u' || hh(e, t, n, r)) return !0
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
function ge(e, t, n, r, o, i, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s)
}
var ae = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach((e) => {
    ae[e] = new ge(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach((e) => {
  var t = e[0]
  ae[t] = new ge(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach((e) => {
  ae[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach((e) => {
  ae[e] = new ge(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach((e) => {
    ae[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach((e) => {
  ae[e] = new ge(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach((e) => {
  ae[e] = new ge(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach((e) => {
  ae[e] = new ge(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach((e) => {
  ae[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var aa = /[\-:]([a-z])/g
function la(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach((e) => {
    var t = e.replace(aa, la)
    ae[t] = new ge(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach((e) => {
    var t = e.replace(aa, la)
    ae[t] = new ge(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach((e) => {
  var t = e.replace(aa, la)
  ae[t] = new ge(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach((e) => {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ae.xlinkHref = new ge(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach((e) => {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function ca(e, t, n, r) {
  var o = ae.hasOwnProperty(t) ? ae[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (mh(t, n, o, r) && (n = null),
    r || o === null
      ? ph(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var gt = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  No = Symbol.for('react.element'),
  vn = Symbol.for('react.portal'),
  wn = Symbol.for('react.fragment'),
  fa = Symbol.for('react.strict_mode'),
  qs = Symbol.for('react.profiler'),
  Tf = Symbol.for('react.provider'),
  Nf = Symbol.for('react.context'),
  da = Symbol.for('react.forward_ref'),
  Qs = Symbol.for('react.suspense'),
  Ks = Symbol.for('react.suspense_list'),
  pa = Symbol.for('react.memo'),
  xt = Symbol.for('react.lazy'),
  _f = Symbol.for('react.offscreen'),
  $l = Symbol.iterator
function rr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = ($l && e[$l]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var W = Object.assign,
  hs
function hr(e) {
  if (hs === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      hs = (t && t[1]) || ''
    }
  return (
    `
` +
    hs +
    e
  )
}
var ms = !1
function ys(e, t) {
  if (!e || ms) return ''
  ms = !0
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
    ;(ms = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? hr(e) : ''
}
function yh(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type)
    case 16:
      return hr('Lazy')
    case 13:
      return hr('Suspense')
    case 19:
      return hr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ys(e.type, !1)), e
    case 11:
      return (e = ys(e.type.render, !1)), e
    case 1:
      return (e = ys(e.type, !0)), e
    default:
      return ''
  }
}
function Ys(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case wn:
      return 'Fragment'
    case vn:
      return 'Portal'
    case qs:
      return 'Profiler'
    case fa:
      return 'StrictMode'
    case Qs:
      return 'Suspense'
    case Ks:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Nf:
        return (e.displayName || 'Context') + '.Consumer'
      case Tf:
        return (e._context.displayName || 'Context') + '.Provider'
      case da:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case pa:
        return (
          (t = e.displayName || null), t !== null ? t : Ys(e.type) || 'Memo'
        )
      case xt:
        ;(t = e._payload), (e = e._init)
        try {
          return Ys(e(t))
        } catch {}
    }
  return null
}
function gh(e) {
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
      return Ys(t)
    case 8:
      return t === fa ? 'StrictMode' : 'Mode'
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
function jt(e) {
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
function If(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function vh(e) {
  var t = If(e) ? 'checked' : 'value',
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
function _o(e) {
  e._valueTracker || (e._valueTracker = vh(e))
}
function Of(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = If(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function si(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Xs(e, t) {
  var n = t.checked
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Fl(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function zf(e, t) {
  ;(t = t.checked), t != null && ca(e, 'checked', t, !1)
}
function Zs(e, t) {
  zf(e, t)
  var n = jt(t.value),
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
    ? Js(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Js(e, t.type, jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function jl(e, t, n) {
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
function Js(e, t, n) {
  ;(t !== 'number' || si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var mr = Array.isArray
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + jt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function eu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91))
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Bl(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92))
      if (mr(n)) {
        if (1 < n.length) throw Error(S(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: jt(n) }
}
function Af(e, t) {
  var n = jt(t.value),
    r = jt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Rl(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function $f(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function tu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? $f(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Io,
  Ff = ((e) =>
    typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? (t, n, r, o) => {
          MSApp.execUnsafeLocalFunction(() => e(t, n, r, o))
        }
      : e)((e, t) => {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Io = Io || document.createElement('div'),
          Io.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Io.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild)
      while (t.firstChild) e.appendChild(t.firstChild)
    }
  })
function _r(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var vr = {
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
  wh = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(vr).forEach((e) => {
  wh.forEach((t) => {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e])
  })
})
function jf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (vr.hasOwnProperty(e) && vr[e])
      ? ('' + t).trim()
      : t + 'px'
}
function Bf(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = jf(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var bh = W(
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
function nu(e, t) {
  if (t) {
    if (bh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(S(62))
  }
}
function ru(e, t) {
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
var ou = null
function ha(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var iu = null,
  zn = null,
  An = null
function Ll(e) {
  if ((e = mo(e))) {
    if (typeof iu != 'function') throw Error(S(280))
    var t = e.stateNode
    t && ((t = Bi(t)), iu(e.stateNode, e.type, t))
  }
}
function Rf(e) {
  zn ? (An ? An.push(e) : (An = [e])) : (zn = e)
}
function Lf() {
  if (zn) {
    var e = zn,
      t = An
    if (((An = zn = null), Ll(e), t)) for (e = 0; e < t.length; e++) Ll(t[e])
  }
}
function Mf(e, t) {
  return e(t)
}
function Df() {}
var gs = !1
function Uf(e, t, n) {
  if (gs) return e(t, n)
  gs = !0
  try {
    return Mf(e, t, n)
  } finally {
    ;(gs = !1), (zn !== null || An !== null) && (Df(), Lf())
  }
}
function Ir(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Bi(n)
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
  if (n && typeof n != 'function') throw Error(S(231, t, typeof n))
  return n
}
var su = !1
if (ct)
  try {
    var or = {}
    Object.defineProperty(or, 'passive', {
      get: () => {
        su = !0
      },
    }),
      window.addEventListener('test', or, or),
      window.removeEventListener('test', or, or)
  } catch {
    su = !1
  }
function xh(e, t, n, r, o, i, s, u, a) {
  var l = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, l)
  } catch (f) {
    this.onError(f)
  }
}
var wr = !1,
  ui = null,
  ai = !1,
  uu = null,
  Ph = {
    onError: (e) => {
      ;(wr = !0), (ui = e)
    },
  }
function Eh(e, t, n, r, o, i, s, u, a) {
  ;(wr = !1), (ui = null), xh.apply(Ph, arguments)
}
function kh(e, t, n, r, o, i, s, u, a) {
  if ((Eh.apply(this, arguments), wr)) {
    if (wr) {
      var l = ui
      ;(wr = !1), (ui = null)
    } else throw Error(S(198))
    ai || ((ai = !0), (uu = l))
  }
}
function yn(e) {
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
function Gf(e) {
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
function Ml(e) {
  if (yn(e) !== e) throw Error(S(188))
}
function Sh(e) {
  var t = e.alternate
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(S(188))
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
        if (i === n) return Ml(o), e
        if (i === r) return Ml(o), t
        i = i.sibling
      }
      throw Error(S(188))
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
        if (!s) throw Error(S(189))
      }
    }
    if (n.alternate !== r) throw Error(S(190))
  }
  if (n.tag !== 3) throw Error(S(188))
  return n.stateNode.current === n ? e : t
}
function Hf(e) {
  return (e = Sh(e)), e !== null ? Vf(e) : null
}
function Vf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Vf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Wf = _e.unstable_scheduleCallback,
  Dl = _e.unstable_cancelCallback,
  Ch = _e.unstable_shouldYield,
  Th = _e.unstable_requestPaint,
  K = _e.unstable_now,
  Nh = _e.unstable_getCurrentPriorityLevel,
  ma = _e.unstable_ImmediatePriority,
  qf = _e.unstable_UserBlockingPriority,
  li = _e.unstable_NormalPriority,
  _h = _e.unstable_LowPriority,
  Qf = _e.unstable_IdlePriority,
  Ai = null,
  Ze = null
function Ih(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == 'function')
    try {
      Ze.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Ah,
  Oh = Math.log,
  zh = Math.LN2
function Ah(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Oh(e) / zh) | 0)) | 0
}
var Oo = 64,
  zo = 4194304
function yr(e) {
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
function ci(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var u = s & ~o
    u !== 0 ? (r = yr(u)) : ((i &= s), i !== 0 && (r = yr(i)))
  } else (s = n & ~o), s !== 0 ? (r = yr(s)) : i !== 0 && (r = yr(i))
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
      (n = 31 - He(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function $h(e, t) {
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
function Fh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - He(i),
      u = 1 << s,
      a = o[s]
    a === -1
      ? (!(u & n) || u & r) && (o[s] = $h(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function au(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Kf() {
  var e = Oo
  return (Oo <<= 1), !(Oo & 4194240) && (Oo = 64), e
}
function vs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function po(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n)
}
function jh(e, t) {
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
    var o = 31 - He(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function ya(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var L = 0
function Yf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Xf,
  ga,
  Zf,
  Jf,
  ed,
  lu = !1,
  Ao = [],
  Tt = null,
  Nt = null,
  _t = null,
  Or = new Map(),
  zr = new Map(),
  Et = [],
  Bh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Ul(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Tt = null
      break
    case 'dragenter':
    case 'dragleave':
      Nt = null
      break
    case 'mouseover':
    case 'mouseout':
      _t = null
      break
    case 'pointerover':
    case 'pointerout':
      Or.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      zr.delete(t.pointerId)
  }
}
function ir(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = mo(t)), t !== null && ga(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Rh(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Tt = ir(Tt, e, t, n, r, o)), !0
    case 'dragenter':
      return (Nt = ir(Nt, e, t, n, r, o)), !0
    case 'mouseover':
      return (_t = ir(_t, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Or.set(i, ir(Or.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), zr.set(i, ir(zr.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function td(e) {
  var t = tn(e.target)
  if (t !== null) {
    var n = yn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gf(n)), t !== null)) {
          ;(e.blockedOn = t),
            ed(e.priority, () => {
              Zf(n)
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
function Ko(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(ou = r), n.target.dispatchEvent(r), (ou = null)
    } else return (t = mo(n)), t !== null && ga(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Gl(e, t, n) {
  Ko(e) && n.delete(t)
}
function Lh() {
  ;(lu = !1),
    Tt !== null && Ko(Tt) && (Tt = null),
    Nt !== null && Ko(Nt) && (Nt = null),
    _t !== null && Ko(_t) && (_t = null),
    Or.forEach(Gl),
    zr.forEach(Gl)
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    lu ||
      ((lu = !0), _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Lh)))
}
function Ar(e) {
  function t(o) {
    return sr(o, e)
  }
  if (0 < Ao.length) {
    sr(Ao[0], e)
    for (var n = 1; n < Ao.length; n++) {
      var r = Ao[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Tt !== null && sr(Tt, e),
      Nt !== null && sr(Nt, e),
      _t !== null && sr(_t, e),
      Or.forEach(t),
      zr.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null)
  while (0 < Et.length && ((n = Et[0]), n.blockedOn === null))
    td(n), n.blockedOn === null && Et.shift()
}
var $n = gt.ReactCurrentBatchConfig,
  fi = !0
function Mh(e, t, n, r) {
  var o = L,
    i = $n.transition
  $n.transition = null
  try {
    ;(L = 1), va(e, t, n, r)
  } finally {
    ;(L = o), ($n.transition = i)
  }
}
function Dh(e, t, n, r) {
  var o = L,
    i = $n.transition
  $n.transition = null
  try {
    ;(L = 4), va(e, t, n, r)
  } finally {
    ;(L = o), ($n.transition = i)
  }
}
function va(e, t, n, r) {
  if (fi) {
    var o = cu(e, t, n, r)
    if (o === null) Ns(e, t, r, di, n), Ul(e, r)
    else if (Rh(o, e, t, n, r)) r.stopPropagation()
    else if ((Ul(e, r), t & 4 && -1 < Bh.indexOf(e))) {
      while (o !== null) {
        var i = mo(o)
        if (
          (i !== null && Xf(i),
          (i = cu(e, t, n, r)),
          i === null && Ns(e, t, r, di, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Ns(e, t, r, null, n)
  }
}
var di = null
function cu(e, t, n, r) {
  if (((di = null), (e = ha(r)), (e = tn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Gf(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (di = e), null
}
function nd(e) {
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
      switch (Nh()) {
        case ma:
          return 1
        case qf:
          return 4
        case li:
        case _h:
          return 16
        case Qf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var St = null,
  wa = null,
  Yo = null
function rd() {
  if (Yo) return Yo
  var e,
    t = wa,
    n = t.length,
    r,
    o = 'value' in St ? St.value : St.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Yo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Xo(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function $o() {
  return !0
}
function Hl() {
  return !1
}
function ze(e) {
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
        ? $o
        : Hl),
      (this.isPropagationStopped = Hl),
      this
    )
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = $o))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = $o))
      },
      persist: () => {},
      isPersistent: $o,
    }),
    t
  )
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: (e) => e.timeStamp || Date.now(),
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ba = ze(Kn),
  ho = W({}, Kn, { view: 0, detail: 0 }),
  Uh = ze(ho),
  ws,
  bs,
  ur,
  $i = W({}, ho, {
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
    getModifierState: xa,
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
        : (e !== ur &&
            (ur && e.type === 'mousemove'
              ? ((ws = e.screenX - ur.screenX), (bs = e.screenY - ur.screenY))
              : (bs = ws = 0),
            (ur = e)),
          ws),
    movementY: (e) => ('movementY' in e ? e.movementY : bs),
  }),
  Vl = ze($i),
  Gh = W({}, $i, { dataTransfer: 0 }),
  Hh = ze(Gh),
  Vh = W({}, ho, { relatedTarget: 0 }),
  xs = ze(Vh),
  Wh = W({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qh = ze(Wh),
  Qh = W({}, Kn, {
    clipboardData: (e) =>
      'clipboardData' in e ? e.clipboardData : window.clipboardData,
  }),
  Kh = ze(Qh),
  Yh = W({}, Kn, { data: 0 }),
  Wl = ze(Yh),
  Xh = {
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
  Zh = {
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
  Jh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function em(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Jh[e]) ? !!t[e] : !1
}
function xa() {
  return em
}
var tm = W({}, ho, {
    key: (e) => {
      if (e.key) {
        var t = Xh[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Xo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Zh[e.keyCode] || 'Unidentified'
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
    getModifierState: xa,
    charCode: (e) => (e.type === 'keypress' ? Xo(e) : 0),
    keyCode: (e) =>
      e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0,
    which: (e) =>
      e.type === 'keypress'
        ? Xo(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0,
  }),
  nm = ze(tm),
  rm = W({}, $i, {
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
  ql = ze(rm),
  om = W({}, ho, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xa,
  }),
  im = ze(om),
  sm = W({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  um = ze(sm),
  am = W({}, $i, {
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
  lm = ze(am),
  cm = [9, 13, 27, 32],
  Pa = ct && 'CompositionEvent' in window,
  br = null
ct && 'documentMode' in document && (br = document.documentMode)
var fm = ct && 'TextEvent' in window && !br,
  od = ct && (!Pa || (br && 8 < br && 11 >= br)),
  Ql = String.fromCharCode(32),
  Kl = !1
function id(e, t) {
  switch (e) {
    case 'keyup':
      return cm.indexOf(t.keyCode) !== -1
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
function sd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var bn = !1
function dm(e, t) {
  switch (e) {
    case 'compositionend':
      return sd(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Kl = !0), Ql)
    case 'textInput':
      return (e = t.data), e === Ql && Kl ? null : e
    default:
      return null
  }
}
function pm(e, t) {
  if (bn)
    return e === 'compositionend' || (!Pa && id(e, t))
      ? ((e = rd()), (Yo = wa = St = null), (bn = !1), e)
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
      return od && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var hm = {
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
function Yl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!hm[e.type] : t === 'textarea'
}
function ud(e, t, n, r) {
  Rf(r),
    (t = pi(t, 'onChange')),
    0 < t.length &&
      ((n = new ba('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var xr = null,
  $r = null
function mm(e) {
  vd(e, 0)
}
function Fi(e) {
  var t = En(e)
  if (Of(t)) return e
}
function ym(e, t) {
  if (e === 'change') return t
}
var ad = !1
if (ct) {
  var Ps
  if (ct) {
    var Es = 'oninput' in document
    if (!Es) {
      var Xl = document.createElement('div')
      Xl.setAttribute('oninput', 'return;'),
        (Es = typeof Xl.oninput == 'function')
    }
    Ps = Es
  } else Ps = !1
  ad = Ps && (!document.documentMode || 9 < document.documentMode)
}
function Zl() {
  xr && (xr.detachEvent('onpropertychange', ld), ($r = xr = null))
}
function ld(e) {
  if (e.propertyName === 'value' && Fi($r)) {
    var t = []
    ud(t, $r, e, ha(e)), Uf(mm, t)
  }
}
function gm(e, t, n) {
  e === 'focusin'
    ? (Zl(), (xr = t), ($r = n), xr.attachEvent('onpropertychange', ld))
    : e === 'focusout' && Zl()
}
function vm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Fi($r)
}
function wm(e, t) {
  if (e === 'click') return Fi(t)
}
function bm(e, t) {
  if (e === 'input' || e === 'change') return Fi(t)
}
function xm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var We = typeof Object.is == 'function' ? Object.is : xm
function Fr(e, t) {
  if (We(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!Ws.call(t, o) || !We(e[o], t[o])) return !1
  }
  return !0
}
function Jl(e) {
  while (e && e.firstChild) e = e.firstChild
  return e
}
function ec(e, t) {
  var n = Jl(e)
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
    n = Jl(n)
  }
}
function cd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? cd(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function fd() {
  for (var e = window, t = si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = si(e.document)
  }
  return t
}
function Ea(e) {
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
function Pm(e) {
  var t = fd(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ea(n)) {
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
          (o = ec(n, i))
        var s = ec(n, r)
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
var Em = ct && 'documentMode' in document && 11 >= document.documentMode,
  xn = null,
  fu = null,
  Pr = null,
  du = !1
function tc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  du ||
    xn == null ||
    xn !== si(r) ||
    ((r = xn),
    'selectionStart' in r && Ea(r)
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
    (Pr && Fr(Pr, r)) ||
      ((Pr = r),
      (r = pi(fu, 'onSelect')),
      0 < r.length &&
        ((t = new ba('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xn))))
}
function Fo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Pn = {
    animationend: Fo('Animation', 'AnimationEnd'),
    animationiteration: Fo('Animation', 'AnimationIteration'),
    animationstart: Fo('Animation', 'AnimationStart'),
    transitionend: Fo('Transition', 'TransitionEnd'),
  },
  ks = {},
  dd = {}
ct &&
  ((dd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  'TransitionEvent' in window || delete Pn.transitionend.transition)
function ji(e) {
  if (ks[e]) return ks[e]
  if (!Pn[e]) return e
  var t = Pn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in dd) return (ks[e] = t[n])
  return e
}
var pd = ji('animationend'),
  hd = ji('animationiteration'),
  md = ji('animationstart'),
  yd = ji('transitionend'),
  gd = new Map(),
  nc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function Ht(e, t) {
  gd.set(e, t), mn(t, [e])
}
for (var Ss = 0; Ss < nc.length; Ss++) {
  var Cs = nc[Ss],
    km = Cs.toLowerCase(),
    Sm = Cs[0].toUpperCase() + Cs.slice(1)
  Ht(km, 'on' + Sm)
}
Ht(pd, 'onAnimationEnd')
Ht(hd, 'onAnimationIteration')
Ht(md, 'onAnimationStart')
Ht('dblclick', 'onDoubleClick')
Ht('focusin', 'onFocus')
Ht('focusout', 'onBlur')
Ht(yd, 'onTransitionEnd')
Ln('onMouseEnter', ['mouseout', 'mouseover'])
Ln('onMouseLeave', ['mouseout', 'mouseover'])
Ln('onPointerEnter', ['pointerout', 'pointerover'])
Ln('onPointerLeave', ['pointerout', 'pointerover'])
mn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
mn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
mn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
mn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
mn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
mn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var gr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Cm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(gr))
function rc(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), kh(r, t, void 0, e), (e.currentTarget = null)
}
function vd(e, t) {
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
          rc(o, u, l), (i = a)
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
          rc(o, u, l), (i = a)
        }
    }
  }
  if (ai) throw ((e = uu), (ai = !1), (uu = null), e)
}
function D(e, t) {
  var n = t[gu]
  n === void 0 && (n = t[gu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (wd(t, e, 2, !1), n.add(r))
}
function Ts(e, t, n) {
  var r = 0
  t && (r |= 4), wd(n, e, r, t)
}
var jo = '_reactListening' + Math.random().toString(36).slice(2)
function jr(e) {
  if (!e[jo]) {
    ;(e[jo] = !0),
      Cf.forEach((n) => {
        n !== 'selectionchange' && (Cm.has(n) || Ts(n, !1, e), Ts(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[jo] || ((t[jo] = !0), Ts('selectionchange', !1, t))
  }
}
function wd(e, t, n, r) {
  switch (nd(t)) {
    case 1:
      var o = Mh
      break
    case 4:
      o = Dh
      break
    default:
      o = va
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !su ||
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
function Ns(e, t, n, r, o) {
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
          if (((s = tn(u)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Uf(() => {
    var l = i,
      f = ha(n),
      c = []
    e: {
      var d = gd.get(e)
      if (d !== void 0) {
        var g = ba,
          v = e
        switch (e) {
          case 'keypress':
            if (Xo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = nm
            break
          case 'focusin':
            ;(v = 'focus'), (g = xs)
            break
          case 'focusout':
            ;(v = 'blur'), (g = xs)
            break
          case 'beforeblur':
          case 'afterblur':
            g = xs
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
            g = Vl
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Hh
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = im
            break
          case pd:
          case hd:
          case md:
            g = qh
            break
          case yd:
            g = um
            break
          case 'scroll':
            g = Uh
            break
          case 'wheel':
            g = lm
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Kh
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ql
        }
        var y = (t & 4) !== 0,
          E = !y && e === 'scroll',
          h = y ? (d !== null ? d + 'Capture' : null) : d
        y = []
        for (var p = l, m; p !== null; ) {
          m = p
          var w = m.stateNode
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              h !== null && ((w = Ir(p, h)), w != null && y.push(Br(p, w, m)))),
            E)
          )
            break
          p = p.return
        }
        0 < y.length &&
          ((d = new g(d, v, null, n, f)), c.push({ event: d, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== ou &&
            (v = n.relatedTarget || n.fromElement) &&
            (tn(v) || v[ft]))
        )
          break e
        if (
          (g || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = l),
              (v = v ? tn(v) : null),
              v !== null &&
                ((E = yn(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = l)),
          g !== v)
        ) {
          if (
            ((y = Vl),
            (w = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = ql),
              (w = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (p = 'pointer')),
            (E = g == null ? d : En(g)),
            (m = v == null ? d : En(v)),
            (d = new y(w, p + 'leave', g, n, f)),
            (d.target = E),
            (d.relatedTarget = m),
            (w = null),
            tn(f) === l &&
              ((y = new y(h, p + 'enter', v, n, f)),
              (y.target = m),
              (y.relatedTarget = E),
              (w = y)),
            (E = w),
            g && v)
          )
            t: {
              for (y = g, h = v, p = 0, m = y; m; m = gn(m)) p++
              for (m = 0, w = h; w; w = gn(w)) m++
              while (0 < p - m) (y = gn(y)), p--
              while (0 < m - p) (h = gn(h)), m--
              while (p--) {
                if (y === h || (h !== null && y === h.alternate)) break t
                ;(y = gn(y)), (h = gn(h))
              }
              y = null
            }
          else y = null
          g !== null && oc(c, d, g, y, !1),
            v !== null && E !== null && oc(c, E, v, y, !0)
        }
      }
      e: {
        if (
          ((d = l ? En(l) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var P = ym
        else if (Yl(d))
          if (ad) P = bm
          else {
            P = vm
            var x = gm
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (P = wm)
        if (P && (P = P(e, l))) {
          ud(c, P, n, f)
          break e
        }
        x && x(e, d, l),
          e === 'focusout' &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === 'number' &&
            Js(d, 'number', d.value)
      }
      switch (((x = l ? En(l) : window), e)) {
        case 'focusin':
          ;(Yl(x) || x.contentEditable === 'true') &&
            ((xn = x), (fu = l), (Pr = null))
          break
        case 'focusout':
          Pr = fu = xn = null
          break
        case 'mousedown':
          du = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(du = !1), tc(c, n, f)
          break
        case 'selectionchange':
          if (Em) break
        case 'keydown':
        case 'keyup':
          tc(c, n, f)
      }
      var b
      if (Pa)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart'
              break e
            case 'compositionend':
              C = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              C = 'onCompositionUpdate'
              break e
          }
          C = void 0
        }
      else
        bn
          ? id(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart')
      C &&
        (od &&
          n.locale !== 'ko' &&
          (bn || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && bn && (b = rd())
            : ((St = f),
              (wa = 'value' in St ? St.value : St.textContent),
              (bn = !0))),
        (x = pi(l, C)),
        0 < x.length &&
          ((C = new Wl(C, e, null, n, f)),
          c.push({ event: C, listeners: x }),
          b ? (C.data = b) : ((b = sd(n)), b !== null && (C.data = b)))),
        (b = fm ? dm(e, n) : pm(e, n)) &&
          ((l = pi(l, 'onBeforeInput')),
          0 < l.length &&
            ((f = new Wl('onBeforeInput', 'beforeinput', null, n, f)),
            c.push({ event: f, listeners: l }),
            (f.data = b)))
    }
    vd(c, t)
  })
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function pi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ir(e, n)),
      i != null && r.unshift(Br(e, i, o)),
      (i = Ir(e, t)),
      i != null && r.push(Br(e, i, o))),
      (e = e.return)
  }
  return r
}
function gn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function oc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      l = u.stateNode
    if (a !== null && a === r) break
    u.tag === 5 &&
      l !== null &&
      ((u = l),
      o
        ? ((a = Ir(n, i)), a != null && s.unshift(Br(n, a, u)))
        : o || ((a = Ir(n, i)), a != null && s.push(Br(n, a, u)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var Tm = /\r\n?/g,
  Nm = /\u0000|\uFFFD/g
function ic(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Tm,
      `
`,
    )
    .replace(Nm, '')
}
function Bo(e, t, n) {
  if (((t = ic(t)), ic(e) !== t && n)) throw Error(S(425))
}
function hi() {}
var pu = null,
  hu = null
function mu(e, t) {
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
var yu = typeof setTimeout == 'function' ? setTimeout : void 0,
  _m = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sc = typeof Promise == 'function' ? Promise : void 0,
  Im =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof sc < 'u'
        ? (e) => sc.resolve(null).then(e).catch(Om)
        : yu
function Om(e) {
  setTimeout(() => {
    throw e
  })
}
function _s(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ar(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Ar(t)
}
function It(e) {
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
function uc(e) {
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
var Yn = Math.random().toString(36).slice(2),
  Xe = '__reactFiber$' + Yn,
  Rr = '__reactProps$' + Yn,
  ft = '__reactContainer$' + Yn,
  gu = '__reactEvents$' + Yn,
  zm = '__reactListeners$' + Yn,
  Am = '__reactHandles$' + Yn
function tn(e) {
  var t = e[Xe]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Xe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uc(e); e !== null; ) {
          if ((n = e[Xe])) return n
          e = uc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function mo(e) {
  return (
    (e = e[Xe] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(S(33))
}
function Bi(e) {
  return e[Rr] || null
}
var vu = [],
  kn = -1
function Vt(e) {
  return { current: e }
}
function U(e) {
  0 > kn || ((e.current = vu[kn]), (vu[kn] = null), kn--)
}
function M(e, t) {
  kn++, (vu[kn] = e.current), (e.current = t)
}
var Bt = {},
  de = Vt(Bt),
  xe = Vt(!1),
  un = Bt
function Mn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Bt
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
function Pe(e) {
  return (e = e.childContextTypes), e != null
}
function mi() {
  U(xe), U(de)
}
function ac(e, t, n) {
  if (de.current !== Bt) throw Error(S(168))
  M(de, t), M(xe, n)
}
function bd(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(S(108, gh(e) || 'Unknown', o))
  return W({}, n, r)
}
function yi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (un = de.current),
    M(de, e),
    M(xe, xe.current),
    !0
  )
}
function lc(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(S(169))
  n
    ? ((e = bd(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(xe),
      U(de),
      M(de, e))
    : U(xe),
    M(xe, n)
}
var ot = null,
  Ri = !1,
  Is = !1
function xd(e) {
  ot === null ? (ot = [e]) : ot.push(e)
}
function $m(e) {
  ;(Ri = !0), xd(e)
}
function Wt() {
  if (!Is && ot !== null) {
    Is = !0
    var e = 0,
      t = L
    try {
      var n = ot
      for (L = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(ot = null), (Ri = !1)
    } catch (o) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Wf(ma, Wt), o)
    } finally {
      ;(L = t), (Is = !1)
    }
  }
  return null
}
var Sn = [],
  Cn = 0,
  gi = null,
  vi = 0,
  Ae = [],
  $e = 0,
  an = null,
  it = 1,
  st = ''
function Zt(e, t) {
  ;(Sn[Cn++] = vi), (Sn[Cn++] = gi), (gi = e), (vi = t)
}
function Pd(e, t, n) {
  ;(Ae[$e++] = it), (Ae[$e++] = st), (Ae[$e++] = an), (an = e)
  var r = it
  e = st
  var o = 32 - He(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - He(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;(i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (it = (1 << (32 - He(t) + o)) | (n << o) | r),
      (st = i + e)
  } else (it = (1 << i) | (n << o) | r), (st = e)
}
function ka(e) {
  e.return !== null && (Zt(e, 1), Pd(e, 1, 0))
}
function Sa(e) {
  while (e === gi)
    (gi = Sn[--Cn]), (Sn[Cn] = null), (vi = Sn[--Cn]), (Sn[Cn] = null)
  while (e === an)
    (an = Ae[--$e]),
      (Ae[$e] = null),
      (st = Ae[--$e]),
      (Ae[$e] = null),
      (it = Ae[--$e]),
      (Ae[$e] = null)
}
var Ne = null,
  Te = null,
  G = !1,
  Ge = null
function Ed(e, t) {
  var n = Fe(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function cc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (Te = It(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Te = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: it, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Te = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function bu(e) {
  if (G) {
    var t = Te
    if (t) {
      var n = t
      if (!cc(e, t)) {
        if (wu(e)) throw Error(S(418))
        t = It(n.nextSibling)
        var r = Ne
        t && cc(e, t)
          ? Ed(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ne = e))
      }
    } else {
      if (wu(e)) throw Error(S(418))
      ;(e.flags = (e.flags & -4097) | 2), (G = !1), (Ne = e)
    }
  }
}
function fc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ne = e
}
function Ro(e) {
  if (e !== Ne) return !1
  if (!G) return fc(e), (G = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !mu(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (wu(e)) throw (kd(), Error(S(418)))
    while (t) Ed(e, t), (t = It(t.nextSibling))
  }
  if ((fc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Te = It(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Te = null
    }
  } else Te = Ne ? It(e.stateNode.nextSibling) : null
  return !0
}
function kd() {
  for (var e = Te; e; ) e = It(e.nextSibling)
}
function Dn() {
  ;(Te = Ne = null), (G = !1)
}
function Ca(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e)
}
var Fm = gt.ReactCurrentBatchConfig
function De(e, t) {
  if (e && e.defaultProps) {
    ;(t = W({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var wi = Vt(null),
  bi = null,
  Tn = null,
  Ta = null
function Na() {
  Ta = Tn = bi = null
}
function _a(e) {
  var t = wi.current
  U(wi), (e._currentValue = t)
}
function xu(e, t, n) {
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
function Fn(e, t) {
  ;(bi = e),
    (Ta = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null))
}
function Be(e) {
  var t = e._currentValue
  if (Ta !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (bi === null) throw Error(S(308))
      ;(Tn = e), (bi.dependencies = { lanes: 0, firstContext: e })
    } else Tn = Tn.next = e
  return t
}
var nn = null
function Ia(e) {
  nn === null ? (nn = [e]) : nn.push(e)
}
function Sd(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Ia(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dt(e, r)
  )
}
function dt(e, t) {
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
var Pt = !1
function Oa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Cd(e, t) {
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
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Ot(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), B & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      dt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ia(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    dt(e, n)
  )
}
function Zo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n)
  }
}
function dc(e, t) {
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
function xi(e, t, n, r) {
  var o = e.updateQueue
  Pt = !1
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
        g = u.eventTime
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            })
        e: {
          var v = e,
            y = u
          switch (((d = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                c = v.call(g, c, d)
                break e
              }
              c = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == 'function' ? v.call(g, c, d) : v),
                d == null)
              )
                break e
              c = W({}, c, d)
              break e
            case 2:
              Pt = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [u]) : d.push(u))
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((l = f = g), (a = c)) : (f = f.next = g),
          (s |= d)
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break
        ;(d = u),
          (u = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null)
      }
    } while (1)
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
    ;(cn |= s), (e.lanes = s), (e.memoizedState = c)
  }
}
function pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(S(191, o))
        o.call(r)
      }
    }
}
var Td = new Sf.Component().refs
function Pu(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Li = {
  isMounted: (e) => ((e = e._reactInternals) ? yn(e) === e : !1),
  enqueueSetState: (e, t, n) => {
    e = e._reactInternals
    var r = me(),
      o = At(e),
      i = ut(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = Ot(e, i, o)),
      t !== null && (Ve(t, e, o, r), Zo(t, e, o))
  },
  enqueueReplaceState: (e, t, n) => {
    e = e._reactInternals
    var r = me(),
      o = At(e),
      i = ut(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ot(e, i, o)),
      t !== null && (Ve(t, e, o, r), Zo(t, e, o))
  },
  enqueueForceUpdate: (e, t) => {
    e = e._reactInternals
    var n = me(),
      r = At(e),
      o = ut(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Ot(e, o, r)),
      t !== null && (Ve(t, e, r, n), Zo(t, e, r))
  },
}
function hc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Fr(n, r) || !Fr(o, i)
        : !0
  )
}
function Nd(e, t, n) {
  var r = !1,
    o = Bt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Be(i))
      : ((o = Pe(t) ? un : de.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Mn(e, o) : Bt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function mc(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null)
}
function Eu(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = Td), Oa(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Be(i))
    : ((i = Pe(t) ? un : de.current), (o.context = Mn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Pu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Li.enqueueReplaceState(o, o.state, null),
      xi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309))
        var r = n.stateNode
      }
      if (!r) throw Error(S(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = (s) => {
            var u = o.refs
            u === Td && (u = o.refs = {}), s === null ? delete u[i] : (u[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(S(284))
    if (!n._owner) throw Error(S(290, e))
  }
  return e
}
function Lo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function yc(e) {
  var t = e._init
  return t(e._payload)
}
function _d(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p)
    }
  }
  function n(h, p) {
    if (!e) return null
    while (p !== null) t(h, p), (p = p.sibling)
    return null
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling)
    return h
  }
  function o(h, p) {
    return (h = $t(h, p)), (h.index = 0), (h.sibling = null), h
  }
  function i(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    )
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function u(h, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = Bs(m, h.mode, w)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p)
  }
  function a(h, p, m, w) {
    var P = m.type
    return P === wn
      ? f(h, p, m.props.children, w, m.key)
      : p !== null &&
          (p.elementType === P ||
            (typeof P == 'object' &&
              P !== null &&
              P.$$typeof === xt &&
              yc(P) === p.type))
        ? ((w = o(p, m.props)), (w.ref = ar(h, p, m)), (w.return = h), w)
        : ((w = oi(m.type, m.key, m.props, null, h.mode, w)),
          (w.ref = ar(h, p, m)),
          (w.return = h),
          w)
  }
  function l(h, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Rs(m, h.mode, w)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p)
  }
  function f(h, p, m, w, P) {
    return p === null || p.tag !== 7
      ? ((p = sn(m, h.mode, w, P)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p)
  }
  function c(h, p, m) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Bs('' + p, h.mode, m)), (p.return = h), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case No:
          return (
            (m = oi(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = ar(h, null, p)),
            (m.return = h),
            m
          )
        case vn:
          return (p = Rs(p, h.mode, m)), (p.return = h), p
        case xt:
          var w = p._init
          return c(h, w(p._payload), m)
      }
      if (mr(p) || rr(p)) return (p = sn(p, h.mode, m, null)), (p.return = h), p
      Lo(h, p)
    }
    return null
  }
  function d(h, p, m, w) {
    var P = p !== null ? p.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return P !== null ? null : u(h, p, '' + m, w)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case No:
          return m.key === P ? a(h, p, m, w) : null
        case vn:
          return m.key === P ? l(h, p, m, w) : null
        case xt:
          return (P = m._init), d(h, p, P(m._payload), w)
      }
      if (mr(m) || rr(m)) return P !== null ? null : f(h, p, m, w, null)
      Lo(h, m)
    }
    return null
  }
  function g(h, p, m, w, P) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (h = h.get(m) || null), u(p, h, '' + w, P)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case No:
          return (h = h.get(w.key === null ? m : w.key) || null), a(p, h, w, P)
        case vn:
          return (h = h.get(w.key === null ? m : w.key) || null), l(p, h, w, P)
        case xt:
          var x = w._init
          return g(h, p, m, x(w._payload), P)
      }
      if (mr(w) || rr(w)) return (h = h.get(m) || null), f(p, h, w, P, null)
      Lo(p, w)
    }
    return null
  }
  function v(h, p, m, w) {
    for (
      var P = null, x = null, b = p, C = (p = 0), _ = null;
      b !== null && C < m.length;
      C++
    ) {
      b.index > C ? ((_ = b), (b = null)) : (_ = b.sibling)
      var I = d(h, b, m[C], w)
      if (I === null) {
        b === null && (b = _)
        break
      }
      e && b && I.alternate === null && t(h, b),
        (p = i(I, p, C)),
        x === null ? (P = I) : (x.sibling = I),
        (x = I),
        (b = _)
    }
    if (C === m.length) return n(h, b), G && Zt(h, C), P
    if (b === null) {
      for (; C < m.length; C++)
        (b = c(h, m[C], w)),
          b !== null &&
            ((p = i(b, p, C)), x === null ? (P = b) : (x.sibling = b), (x = b))
      return G && Zt(h, C), P
    }
    for (b = r(h, b); C < m.length; C++)
      (_ = g(b, h, C, m[C], w)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? C : _.key),
          (p = i(_, p, C)),
          x === null ? (P = _) : (x.sibling = _),
          (x = _))
    return e && b.forEach((R) => t(h, R)), G && Zt(h, C), P
  }
  function y(h, p, m, w) {
    var P = rr(m)
    if (typeof P != 'function') throw Error(S(150))
    if (((m = P.call(m)), m == null)) throw Error(S(151))
    for (
      var x = (P = null), b = p, C = (p = 0), _ = null, I = m.next();
      b !== null && !I.done;
      C++, I = m.next()
    ) {
      b.index > C ? ((_ = b), (b = null)) : (_ = b.sibling)
      var R = d(h, b, I.value, w)
      if (R === null) {
        b === null && (b = _)
        break
      }
      e && b && R.alternate === null && t(h, b),
        (p = i(R, p, C)),
        x === null ? (P = R) : (x.sibling = R),
        (x = R),
        (b = _)
    }
    if (I.done) return n(h, b), G && Zt(h, C), P
    if (b === null) {
      for (; !I.done; C++, I = m.next())
        (I = c(h, I.value, w)),
          I !== null &&
            ((p = i(I, p, C)), x === null ? (P = I) : (x.sibling = I), (x = I))
      return G && Zt(h, C), P
    }
    for (b = r(h, b); !I.done; C++, I = m.next())
      (I = g(b, h, C, I.value, w)),
        I !== null &&
          (e && I.alternate !== null && b.delete(I.key === null ? C : I.key),
          (p = i(I, p, C)),
          x === null ? (P = I) : (x.sibling = I),
          (x = I))
    return e && b.forEach((pe) => t(h, pe)), G && Zt(h, C), P
  }
  function E(h, p, m, w) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === wn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case No:
          e: {
            for (var P = m.key, x = p; x !== null; ) {
              if (x.key === P) {
                if (((P = m.type), P === wn)) {
                  if (x.tag === 7) {
                    n(h, x.sibling),
                      (p = o(x, m.props.children)),
                      (p.return = h),
                      (h = p)
                    break e
                  }
                } else if (
                  x.elementType === P ||
                  (typeof P == 'object' &&
                    P !== null &&
                    P.$$typeof === xt &&
                    yc(P) === x.type)
                ) {
                  n(h, x.sibling),
                    (p = o(x, m.props)),
                    (p.ref = ar(h, x, m)),
                    (p.return = h),
                    (h = p)
                  break e
                }
                n(h, x)
                break
              } else t(h, x)
              x = x.sibling
            }
            m.type === wn
              ? ((p = sn(m.props.children, h.mode, w, m.key)),
                (p.return = h),
                (h = p))
              : ((w = oi(m.type, m.key, m.props, null, h.mode, w)),
                (w.ref = ar(h, p, m)),
                (w.return = h),
                (h = w))
          }
          return s(h)
        case vn:
          e: {
            for (x = m.key; p !== null; ) {
              if (p.key === x)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = h),
                    (h = p)
                  break e
                } else {
                  n(h, p)
                  break
                }
              else t(h, p)
              p = p.sibling
            }
            ;(p = Rs(m, h.mode, w)), (p.return = h), (h = p)
          }
          return s(h)
        case xt:
          return (x = m._init), E(h, p, x(m._payload), w)
      }
      if (mr(m)) return v(h, p, m, w)
      if (rr(m)) return y(h, p, m, w)
      Lo(h, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = Bs(m, h.mode, w)), (p.return = h), (h = p)),
        s(h))
      : n(h, p)
  }
  return E
}
var Un = _d(!0),
  Id = _d(!1),
  yo = {},
  Je = Vt(yo),
  Lr = Vt(yo),
  Mr = Vt(yo)
function rn(e) {
  if (e === yo) throw Error(S(174))
  return e
}
function za(e, t) {
  switch ((M(Mr, t), M(Lr, e), M(Je, yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tu(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = tu(t, e))
  }
  U(Je), M(Je, t)
}
function Gn() {
  U(Je), U(Lr), U(Mr)
}
function Od(e) {
  rn(Mr.current)
  var t = rn(Je.current),
    n = tu(t, e.type)
  t !== n && (M(Lr, e), M(Je, n))
}
function Aa(e) {
  Lr.current === e && (U(Je), U(Lr))
}
var H = Vt(0)
function Pi(e) {
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
var Os = []
function $a() {
  for (var e = 0; e < Os.length; e++) Os[e]._workInProgressVersionPrimary = null
  Os.length = 0
}
var Jo = gt.ReactCurrentDispatcher,
  zs = gt.ReactCurrentBatchConfig,
  ln = 0,
  V = null,
  Z = null,
  ne = null,
  Ei = !1,
  Er = !1,
  Dr = 0,
  jm = 0
function le() {
  throw Error(S(321))
}
function Fa(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!We(e[n], t[n])) return !1
  return !0
}
function ja(e, t, n, r, o, i) {
  if (
    ((ln = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Jo.current = e === null || e.memoizedState === null ? Mm : Dm),
    (e = n(r, o)),
    Er)
  ) {
    i = 0
    do {
      if (((Er = !1), (Dr = 0), 25 <= i)) throw Error(S(301))
      ;(i += 1),
        (ne = Z = null),
        (t.updateQueue = null),
        (Jo.current = Um),
        (e = n(r, o))
    } while (Er)
  }
  if (
    ((Jo.current = ki),
    (t = Z !== null && Z.next !== null),
    (ln = 0),
    (ne = Z = V = null),
    (Ei = !1),
    t)
  )
    throw Error(S(300))
  return e
}
function Ba() {
  var e = Dr !== 0
  return (Dr = 0), e
}
function Ye() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ne === null ? (V.memoizedState = ne = e) : (ne = ne.next = e), ne
}
function Re() {
  if (Z === null) {
    var e = V.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Z.next
  var t = ne === null ? V.memoizedState : ne.next
  if (t !== null) (ne = t), (Z = e)
  else {
    if (e === null) throw Error(S(310))
    ;(Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ne === null ? (V.memoizedState = ne = e) : (ne = ne.next = e)
  }
  return ne
}
function Ur(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function As(e) {
  var t = Re(),
    n = t.queue
  if (n === null) throw Error(S(311))
  n.lastRenderedReducer = e
  var r = Z,
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
      if ((ln & f) === f)
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
          (V.lanes |= f),
          (cn |= f)
      }
      l = l.next
    } while (l !== null && l !== i)
    a === null ? (s = r) : (a.next = u),
      We(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (V.lanes |= i), (cn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function $s(e) {
  var t = Re(),
    n = t.queue
  if (n === null) throw Error(S(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do (i = e(i, s.action)), (s = s.next)
    while (s !== o)
    We(i, t.memoizedState) || (we = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function zd() {}
function Ad(e, t) {
  var n = V,
    r = Re(),
    o = t(),
    i = !We(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (we = !0)),
    (r = r.queue),
    Ra(jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Fd.bind(null, n, r, o, t), void 0, null),
      re === null)
    )
      throw Error(S(349))
    ln & 30 || $d(n, t, o)
  }
  return o
}
function $d(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Fd(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Bd(t) && Rd(e)
}
function jd(e, t, n) {
  return n(() => {
    Bd(t) && Rd(e)
  })
}
function Bd(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !We(e, n)
  } catch {
    return !0
  }
}
function Rd(e) {
  var t = dt(e, 1)
  t !== null && Ve(t, e, 1, -1)
}
function gc(e) {
  var t = Ye()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lm.bind(null, V, e)),
    [t.memoizedState, e]
  )
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Ld() {
  return Re().memoizedState
}
function ei(e, t, n, r) {
  var o = Ye()
  ;(V.flags |= e),
    (o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r))
}
function Mi(e, t, n, r) {
  var o = Re()
  r = r === void 0 ? null : r
  var i = void 0
  if (Z !== null) {
    var s = Z.memoizedState
    if (((i = s.destroy), r !== null && Fa(r, s.deps))) {
      o.memoizedState = Gr(t, n, i, r)
      return
    }
  }
  ;(V.flags |= e), (o.memoizedState = Gr(1 | t, n, i, r))
}
function vc(e, t) {
  return ei(8390656, 8, e, t)
}
function Ra(e, t) {
  return Mi(2048, 8, e, t)
}
function Md(e, t) {
  return Mi(4, 2, e, t)
}
function Dd(e, t) {
  return Mi(4, 4, e, t)
}
function Ud(e, t) {
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
function Gd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mi(4, 4, Ud.bind(null, t, e), n)
  )
}
function La() {}
function Hd(e, t) {
  var n = Re()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Vd(e, t) {
  var n = Re()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Wd(e, t, n) {
  return ln & 21
    ? (We(n, t) || ((n = Kf()), (V.lanes |= n), (cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n))
}
function Bm(e, t) {
  var n = L
  ;(L = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = zs.transition
  zs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(L = n), (zs.transition = r)
  }
}
function qd() {
  return Re().memoizedState
}
function Rm(e, t, n) {
  var r = At(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qd(e))
  )
    Kd(t, n)
  else if (((n = Sd(e, t, n, r)), n !== null)) {
    var o = me()
    Ve(n, e, r, o), Yd(n, t, r)
  }
}
function Lm(e, t, n) {
  var r = At(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Qd(e)) Kd(t, o)
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
        if (((o.hasEagerState = !0), (o.eagerState = u), We(u, s))) {
          var a = t.interleaved
          a === null
            ? ((o.next = o), Ia(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Sd(e, t, o, r)),
      n !== null && ((o = me()), Ve(n, e, r, o), Yd(n, t, r))
  }
}
function Qd(e) {
  var t = e.alternate
  return e === V || (t !== null && t === V)
}
function Kd(e, t) {
  Er = Ei = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Yd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n)
  }
}
var ki = {
    readContext: Be,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: Be,
    useCallback: (e, t) => (
      (Ye().memoizedState = [e, t === void 0 ? null : t]), e
    ),
    useContext: Be,
    useEffect: vc,
    useImperativeHandle: (e, t, n) => (
      (n = n != null ? n.concat([e]) : null),
      ei(4194308, 4, Ud.bind(null, t, e), n)
    ),
    useLayoutEffect: (e, t) => ei(4194308, 4, e, t),
    useInsertionEffect: (e, t) => ei(4, 2, e, t),
    useMemo: (e, t) => {
      var n = Ye()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: (e, t, n) => {
      var r = Ye()
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
        (e = e.dispatch = Rm.bind(null, V, e)),
        [r.memoizedState, e]
      )
    },
    useRef: (e) => {
      var t = Ye()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: gc,
    useDebugValue: La,
    useDeferredValue: (e) => (Ye().memoizedState = e),
    useTransition: () => {
      var e = gc(!1),
        t = e[0]
      return (e = Bm.bind(null, e[1])), (Ye().memoizedState = e), [t, e]
    },
    useMutableSource: () => {},
    useSyncExternalStore: (e, t, n) => {
      var r = V,
        o = Ye()
      if (G) {
        if (n === void 0) throw Error(S(407))
        n = n()
      } else {
        if (((n = t()), re === null)) throw Error(S(349))
        ln & 30 || $d(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        vc(jd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gr(9, Fd.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: () => {
      var e = Ye(),
        t = re.identifierPrefix
      if (G) {
        var n = st,
          r = it
        ;(n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Dr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = jm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Dm = {
    readContext: Be,
    useCallback: Hd,
    useContext: Be,
    useEffect: Ra,
    useImperativeHandle: Gd,
    useInsertionEffect: Md,
    useLayoutEffect: Dd,
    useMemo: Vd,
    useReducer: As,
    useRef: Ld,
    useState: () => As(Ur),
    useDebugValue: La,
    useDeferredValue: (e) => {
      var t = Re()
      return Wd(t, Z.memoizedState, e)
    },
    useTransition: () => {
      var e = As(Ur)[0],
        t = Re().memoizedState
      return [e, t]
    },
    useMutableSource: zd,
    useSyncExternalStore: Ad,
    useId: qd,
    unstable_isNewReconciler: !1,
  },
  Um = {
    readContext: Be,
    useCallback: Hd,
    useContext: Be,
    useEffect: Ra,
    useImperativeHandle: Gd,
    useInsertionEffect: Md,
    useLayoutEffect: Dd,
    useMemo: Vd,
    useReducer: $s,
    useRef: Ld,
    useState: () => $s(Ur),
    useDebugValue: La,
    useDeferredValue: (e) => {
      var t = Re()
      return Z === null ? (t.memoizedState = e) : Wd(t, Z.memoizedState, e)
    },
    useTransition: () => {
      var e = $s(Ur)[0],
        t = Re().memoizedState
      return [e, t]
    },
    useMutableSource: zd,
    useSyncExternalStore: Ad,
    useId: qd,
    unstable_isNewReconciler: !1,
  }
function Hn(e, t) {
  try {
    var n = '',
      r = t
    do (n += yh(r)), (r = r.return)
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
function Fs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function ku(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(() => {
      throw n
    })
  }
}
var Gm = typeof WeakMap == 'function' ? WeakMap : Map
function Xd(e, t, n) {
  ;(n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = () => {
      Ci || ((Ci = !0), ($u = r)), ku(e, t)
    }),
    n
  )
}
function Zd(e, t, n) {
  ;(n = ut(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = () => r(o)),
      (n.callback = () => {
        ku(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        ku(e, t),
          typeof r != 'function' &&
            (zt === null ? (zt = new Set([this])) : zt.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function wc(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Gm()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = ry.bind(null, e, t, n)), t.then(e, e))
}
function bc(e) {
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
function xc(e, t, n, r, o) {
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
              : ((t = ut(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Hm = gt.ReactCurrentOwner,
  we = !1
function he(e, t, n, r) {
  t.child = e === null ? Id(t, null, n, r) : Un(t, e.child, n, r)
}
function Pc(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    Fn(t, o),
    (r = ja(e, t, n, r, i, o)),
    (n = Ba()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (G && n && ka(t), (t.flags |= 1), he(e, t, r, o), t.child)
  )
}
function Ec(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !qa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Jd(e, t, i, r, o))
      : ((e = oi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Fr), n(s, r) && e.ref === t.ref)
    )
      return pt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = $t(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Jd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Fr(i, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (we = !0)
      else return (t.lanes = e.lanes), pt(e, t, o)
  }
  return Su(e, t, n, r, o)
}
function ep(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(_n, Ce),
        (Ce |= n)
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
          M(_n, Ce),
          (Ce |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        M(_n, Ce),
        (Ce |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(_n, Ce),
      (Ce |= r)
  return he(e, t, o, n), t.child
}
function tp(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Su(e, t, n, r, o) {
  var i = Pe(n) ? un : de.current
  return (
    (i = Mn(t, i)),
    Fn(t, o),
    (n = ja(e, t, n, r, i, o)),
    (r = Ba()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (G && r && ka(t), (t.flags |= 1), he(e, t, n, o), t.child)
  )
}
function kc(e, t, n, r, o) {
  if (Pe(n)) {
    var i = !0
    yi(t)
  } else i = !1
  if ((Fn(t, o), t.stateNode === null))
    ti(e, t), Nd(t, n, r), Eu(t, n, r, o), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      u = t.memoizedProps
    s.props = u
    var a = s.context,
      l = n.contextType
    typeof l == 'object' && l !== null
      ? (l = Be(l))
      : ((l = Pe(n) ? un : de.current), (l = Mn(t, l)))
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((u !== r || a !== l) && mc(t, s, r, l)),
      (Pt = !1)
    var d = t.memoizedState
    ;(s.state = d),
      xi(t, r, s, o),
      (a = t.memoizedState),
      u !== r || d !== a || xe.current || Pt
        ? (typeof f == 'function' && (Pu(t, n, f, r), (a = t.memoizedState)),
          (u = Pt || hc(t, n, u, r, d, a, l))
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
      Cd(e, t),
      (u = t.memoizedProps),
      (l = t.type === t.elementType ? u : De(t.type, u)),
      (s.props = l),
      (c = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Be(a))
        : ((a = Pe(n) ? un : de.current), (a = Mn(t, a)))
    var g = n.getDerivedStateFromProps
    ;(f =
      typeof g == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((u !== c || d !== a) && mc(t, s, r, a)),
      (Pt = !1),
      (d = t.memoizedState),
      (s.state = d),
      xi(t, r, s, o)
    var v = t.memoizedState
    u !== c || d !== v || xe.current || Pt
      ? (typeof g == 'function' && (Pu(t, n, g, r), (v = t.memoizedState)),
        (l = Pt || hc(t, n, l, r, d, v, a) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
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
  return Cu(e, t, n, r, i, o)
}
function Cu(e, t, n, r, o, i) {
  tp(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return o && lc(t, n, !1), pt(e, t, i)
  ;(r = t.stateNode), (Hm.current = t)
  var u =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Un(t, e.child, null, i)), (t.child = Un(t, null, u, i)))
      : he(e, t, u, i),
    (t.memoizedState = r.state),
    o && lc(t, n, !0),
    t.child
  )
}
function np(e) {
  var t = e.stateNode
  t.pendingContext
    ? ac(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ac(e, t.context, !1),
    za(e, t.containerInfo)
}
function Sc(e, t, n, r, o) {
  return Dn(), Ca(o), (t.flags |= 256), he(e, t, n, r), t.child
}
var Tu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function rp(e, t, n) {
  var r = t.pendingProps,
    o = H.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    u
  if (
    ((u = s) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    M(H, o & 1),
    e === null)
  )
    return (
      bu(t),
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
                : (i = Gi(s, r, 0, null)),
              (e = sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Nu(n)),
              (t.memoizedState = Tu),
              e)
            : Ma(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Vm(e, t, s, r, u, o, n)
  if (i) {
    ;(i = r.fallback), (s = t.mode), (o = e.child), (u = o.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = $t(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = $t(u, i)) : ((i = sn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Nu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Tu),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = $t(i, { mode: 'visible', children: r.children })),
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
function Ma(e, t) {
  return (
    (t = Gi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Mo(e, t, n, r) {
  return (
    r !== null && Ca(r),
    Un(t, e.child, null, n),
    (e = Ma(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Vm(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fs(Error(S(422)))), Mo(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Gi({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = sn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Un(t, e.child, null, s),
          (t.child.memoizedState = Nu(s)),
          (t.memoizedState = Tu),
          i)
  if (!(t.mode & 1)) return Mo(e, t, s, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(S(419))), (r = Fs(i, r, void 0)), Mo(e, t, s, r)
  }
  if (((u = (s & e.childLanes) !== 0), we || u)) {
    if (((r = re), r !== null)) {
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
          ((i.retryLane = o), dt(e, o), Ve(r, e, o, -1))
    }
    return Wa(), (r = Fs(Error(S(421)))), Mo(e, t, s, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = oy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Te = It(o.nextSibling)),
      (Ne = t),
      (G = !0),
      (Ge = null),
      e !== null &&
        ((Ae[$e++] = it),
        (Ae[$e++] = st),
        (Ae[$e++] = an),
        (it = e.id),
        (st = e.overflow),
        (an = t)),
      (t = Ma(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Cc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), xu(e.return, t, n)
}
function js(e, t, n, r, o) {
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
function op(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((he(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cc(e, n, t)
        else if (e.tag === 19) Cc(e, n, t)
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
  if ((M(H, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Pi(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          js(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Pi(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        js(t, !0, n, null, i)
        break
      case 'together':
        js(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ti(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(S(153))
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      (e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Wm(e, t, n) {
  switch (t.tag) {
    case 3:
      np(t), Dn()
      break
    case 5:
      Od(t)
      break
    case 1:
      Pe(t.type) && yi(t)
      break
    case 4:
      za(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      M(wi, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? rp(e, t, n)
            : (M(H, H.current & 1),
              (e = pt(e, t, n)),
              e !== null ? e.sibling : null)
      M(H, H.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return op(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        M(H, H.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), ep(e, t, n)
  }
  return pt(e, t, n)
}
var ip, _u, sp, up
ip = (e, t) => {
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
_u = () => {}
sp = (e, t, n, r) => {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), rn(Je.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = Xs(e, o)), (r = Xs(e, r)), (i = [])
        break
      case 'select':
        ;(o = W({}, o, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = eu(e, o)), (r = eu(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hi)
    }
    nu(n, r)
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
            (Nr.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null))
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
                (Nr.hasOwnProperty(l)
                  ? (a != null && l === 'onScroll' && D('scroll', e),
                    i || u === a || (i = []))
                  : (i = i || []).push(l, a))
    }
    n && (i = i || []).push('style', n)
    var l = i
    ;(t.updateQueue = l) && (t.flags |= 4)
  }
}
up = (e, t, n, r) => {
  n !== r && (t.flags |= 4)
}
function lr(e, t) {
  if (!G)
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
function ce(e) {
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
function qm(e, t, n) {
  var r = t.pendingProps
  switch ((Sa(t), t.tag)) {
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
      return ce(t), null
    case 1:
      return Pe(t.type) && mi(), ce(t), null
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        U(xe),
        U(de),
        $a(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ro(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (Bu(Ge), (Ge = null)))),
        _u(e, t),
        ce(t),
        null
      )
    case 5:
      Aa(t)
      var o = rn(Mr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        sp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166))
          return ce(t), null
        }
        if (((e = rn(Je.current)), Ro(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[Xe] = t), (r[Rr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              D('cancel', r), D('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < gr.length; o++) D(gr[o], r)
              break
            case 'source':
              D('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              D('error', r), D('load', r)
              break
            case 'details':
              D('toggle', r)
              break
            case 'input':
              Fl(r, i), D('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                D('invalid', r)
              break
            case 'textarea':
              Bl(r, i), D('invalid', r)
          }
          nu(n, i), (o = null)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var u = i[s]
              s === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bo(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bo(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : Nr.hasOwnProperty(s) &&
                  u != null &&
                  s === 'onScroll' &&
                  D('scroll', r)
            }
          switch (n) {
            case 'input':
              _o(r), jl(r, i, !0)
              break
            case 'textarea':
              _o(r), Rl(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = hi)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = $f(n)),
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
            (e[Xe] = t),
            (e[Rr] = r),
            ip(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = ru(n, r)), n)) {
              case 'dialog':
                D('cancel', e), D('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < gr.length; o++) D(gr[o], e)
                o = r
                break
              case 'source':
                D('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (o = r)
                break
              case 'details':
                D('toggle', e), (o = r)
                break
              case 'input':
                Fl(e, r), (o = Xs(e, r)), D('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = W({}, r, { value: void 0 })),
                  D('invalid', e)
                break
              case 'textarea':
                Bl(e, r), (o = eu(e, r)), D('invalid', e)
                break
              default:
                o = r
            }
            nu(n, o), (u = o)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i]
                i === 'style'
                  ? Bf(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && Ff(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && _r(e, a)
                        : typeof a == 'number' && _r(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Nr.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && D('scroll', e)
                          : a != null && ca(e, i, a, s))
              }
            switch (n) {
              case 'input':
                _o(e), jl(e, r, !1)
                break
              case 'textarea':
                _o(e), Rl(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + jt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? On(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = hi)
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
      return ce(t), null
    case 6:
      if (e && t.stateNode != null) up(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(S(166))
        if (((n = rn(Mr.current)), rn(Je.current), Ro(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xe] = t),
            (i = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xe] = t),
            (t.stateNode = r)
      }
      return ce(t), null
    case 13:
      if (
        (U(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Te !== null && t.mode & 1 && !(t.flags & 128))
          kd(), Dn(), (t.flags |= 98560), (i = !1)
        else if (((i = Ro(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317))
            i[Xe] = t
          } else
            Dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          ce(t), (i = !1)
        } else Ge !== null && (Bu(Ge), (Ge = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? J === 0 && (J = 3) : Wa())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null)
    case 4:
      return (
        Gn(), _u(e, t), e === null && jr(t.stateNode.containerInfo), ce(t), null
      )
    case 10:
      return _a(t.type._context), ce(t), null
    case 17:
      return Pe(t.type) && mi(), ce(t), null
    case 19:
      if ((U(H), (i = t.memoizedState), i === null)) return ce(t), null
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) lr(i, !1)
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Pi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    lr(i, !1),
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
                return M(H, (H.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            K() > Vn &&
            ((t.flags |= 128), (r = !0), lr(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Pi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !G)
            )
              return ce(t), null
          } else
            2 * K() - i.renderingStartTime > Vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lr(i, !1), (t.lanes = 4194304))
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
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = H.current),
          M(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null)
    case 22:
    case 23:
      return (
        Va(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(S(156, t.tag))
}
function Qm(e, t) {
  switch ((Sa(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && mi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Gn(),
        U(xe),
        U(de),
        $a(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Aa(t), null
    case 13:
      if ((U(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340))
        Dn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return U(H), null
    case 4:
      return Gn(), null
    case 10:
      return _a(t.type._context), null
    case 22:
    case 23:
      return Va(), null
    case 24:
      return null
    default:
      return null
  }
}
var Do = !1,
  fe = !1,
  Km = typeof WeakSet == 'function' ? WeakSet : Set,
  T = null
function Nn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        q(e, t, r)
      }
    else n.current = null
}
function Iu(e, t, n) {
  try {
    n()
  } catch (r) {
    q(e, t, r)
  }
}
var Tc = !1
function Ym(e, t) {
  if (((pu = fi), (e = fd()), Ea(e))) {
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
              var g;
              c !== n || (o !== 0 && c.nodeType !== 3) || (u = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (g = c.firstChild) !== null;
            )
              (d = c), (c = g)
            for (;;) {
              if (c === e) break t
              if (
                (d === n && ++l === o && (u = s),
                d === i && ++f === r && (a = s),
                (g = c.nextSibling) !== null)
              )
                break
              ;(c = d), (d = c.parentNode)
            }
            c = g
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (hu = { focusedElem: e, selectionRange: n }, fi = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e)
    else
      while (T !== null) {
        t = T
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    E = v.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : De(t.type, y),
                      E,
                    )
                  h.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(S(163))
            }
        } catch (w) {
          q(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (T = e)
          break
        }
        T = t.return
      }
  return (v = Tc), (Tc = !1), v
}
function kr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Iu(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function Di(e, t) {
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
function Ou(e) {
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
function ap(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), ap(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xe], delete t[Rr], delete t[gu], delete t[zm], delete t[Am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function lp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Nc(e) {
  e: for (;;) {
    while (e.sibling === null) {
      if (e.return === null || lp(e.return)) return null
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
function zu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = hi))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zu(e, t, n), e = e.sibling; e !== null; ) zu(e, t, n), (e = e.sibling)
}
function Au(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Au(e, t, n), e = e.sibling; e !== null; ) Au(e, t, n), (e = e.sibling)
}
var ie = null,
  Ue = !1
function vt(e, t, n) {
  for (n = n.child; n !== null; ) cp(e, t, n), (n = n.sibling)
}
function cp(e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == 'function')
    try {
      Ze.onCommitFiberUnmount(Ai, n)
    } catch {}
  switch (n.tag) {
    case 5:
      fe || Nn(n, t)
    case 6:
      var r = ie,
        o = Ue
      ;(ie = null),
        vt(e, t, n),
        (ie = r),
        (Ue = o),
        ie !== null &&
          (Ue
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode))
      break
    case 18:
      ie !== null &&
        (Ue
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? _s(e.parentNode, n)
              : e.nodeType === 1 && _s(e, n),
            Ar(e))
          : _s(ie, n.stateNode))
      break
    case 4:
      ;(r = ie),
        (o = Ue),
        (ie = n.stateNode.containerInfo),
        (Ue = !0),
        vt(e, t, n),
        (ie = r),
        (Ue = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;(i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Iu(n, t, s),
            (o = o.next)
        } while (o !== r)
      }
      vt(e, t, n)
      break
    case 1:
      if (
        !fe &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          q(n, t, u)
        }
      vt(e, t, n)
      break
    case 21:
      vt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), vt(e, t, n), (fe = r))
        : vt(e, t, n)
      break
    default:
      vt(e, t, n)
  }
}
function _c(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Km()),
      t.forEach((r) => {
        var o = iy.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Me(e, t) {
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
              ;(ie = u.stateNode), (Ue = !1)
              break e
            case 3:
              ;(ie = u.stateNode.containerInfo), (Ue = !0)
              break e
            case 4:
              ;(ie = u.stateNode.containerInfo), (Ue = !0)
              break e
          }
          u = u.return
        }
        if (ie === null) throw Error(S(160))
        cp(i, s, o), (ie = null), (Ue = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (l) {
        q(o, t, l)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fp(t, e), (t = t.sibling)
}
function fp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Qe(e), r & 4)) {
        try {
          kr(3, e, e.return), Di(3, e)
        } catch (y) {
          q(e, e.return, y)
        }
        try {
          kr(5, e, e.return)
        } catch (y) {
          q(e, e.return, y)
        }
      }
      break
    case 1:
      Me(t, e), Qe(e), r & 512 && n !== null && Nn(n, n.return)
      break
    case 5:
      if (
        (Me(t, e),
        Qe(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          _r(o, '')
        } catch (y) {
          q(e, e.return, y)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && zf(o, i),
              ru(u, s)
            var l = ru(u, i)
            for (s = 0; s < a.length; s += 2) {
              var f = a[s],
                c = a[s + 1]
              f === 'style'
                ? Bf(o, c)
                : f === 'dangerouslySetInnerHTML'
                  ? Ff(o, c)
                  : f === 'children'
                    ? _r(o, c)
                    : ca(o, f, c, l)
            }
            switch (u) {
              case 'input':
                Zs(o, i)
                break
              case 'textarea':
                Af(o, i)
                break
              case 'select':
                var d = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var g = i.value
                g != null
                  ? On(o, !!i.multiple, g, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? On(o, !!i.multiple, i.defaultValue, !0)
                      : On(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Rr] = i
          } catch (y) {
            q(e, e.return, y)
          }
      }
      break
    case 6:
      if ((Me(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (y) {
          q(e, e.return, y)
        }
      }
      break
    case 3:
      if (
        (Me(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ar(t.containerInfo)
        } catch (y) {
          q(e, e.return, y)
        }
      break
    case 4:
      Me(t, e), Qe(e)
      break
    case 13:
      Me(t, e),
        Qe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ga = K())),
        r & 4 && _c(e)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (l = fe) || f), Me(t, e), (fe = l)) : Me(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((l = e.memoizedState !== null),
          (e.stateNode.isHidden = l) && !f && e.mode & 1)
        )
          for (T = e, f = e.child; f !== null; ) {
            for (c = T = f; T !== null; ) {
              switch (((d = T), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, d, d.return)
                  break
                case 1:
                  Nn(d, d.return)
                  var v = d.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (y) {
                      q(r, n, y)
                    }
                  }
                  break
                case 5:
                  Nn(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    Oc(c)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (T = g)) : Oc(c)
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
                      (u.style.display = jf('display', s)))
              } catch (y) {
                q(e, e.return, y)
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = l ? '' : c.memoizedProps
              } catch (y) {
                q(e, e.return, y)
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
      Me(t, e), Qe(e), r & 4 && _c(e)
      break
    case 21:
      break
    default:
      Me(t, e), Qe(e)
  }
}
function Qe(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lp(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(S(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (_r(o, ''), (r.flags &= -33))
          var i = Nc(e)
          Au(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            u = Nc(e)
          zu(e, u, s)
          break
        default:
          throw Error(S(161))
      }
    } catch (a) {
      q(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Xm(e, t, n) {
  ;(T = e), dp(e)
}
function dp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Do
      if (!s) {
        var u = o.alternate,
          a = (u !== null && u.memoizedState !== null) || fe
        u = Do
        var l = fe
        if (((Do = s), (fe = a) && !l))
          for (T = o; T !== null; )
            (s = T),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? zc(o)
                : a !== null
                  ? ((a.return = s), (T = a))
                  : zc(o)
        while (i !== null) (T = i), dp(i), (i = i.sibling)
        ;(T = o), (Do = u), (fe = l)
      }
      Ic(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (T = i)) : Ic(e)
  }
}
function Ic(e) {
  while (T !== null) {
    var t = T
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || Di(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var i = t.updateQueue
              i !== null && pc(t, i, r)
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
                pc(t, s, n)
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
                    c !== null && Ar(c)
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
              throw Error(S(163))
          }
        fe || (t.flags & 512 && Ou(t))
      } catch (d) {
        q(t, t.return, d)
      }
    }
    if (t === e) {
      T = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (T = n)
      break
    }
    T = t.return
  }
}
function Oc(e) {
  while (T !== null) {
    var t = T
    if (t === e) {
      T = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (T = n)
      break
    }
    T = t.return
  }
}
function zc(e) {
  while (T !== null) {
    var t = T
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Di(4, t)
          } catch (a) {
            q(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              q(t, o, a)
            }
          }
          var i = t.return
          try {
            Ou(t)
          } catch (a) {
            q(t, i, a)
          }
          break
        case 5:
          var s = t.return
          try {
            Ou(t)
          } catch (a) {
            q(t, s, a)
          }
      }
    } catch (a) {
      q(t, t.return, a)
    }
    if (t === e) {
      T = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (T = u)
      break
    }
    T = t.return
  }
}
var Zm = Math.ceil,
  Si = gt.ReactCurrentDispatcher,
  Da = gt.ReactCurrentOwner,
  je = gt.ReactCurrentBatchConfig,
  B = 0,
  re = null,
  X = null,
  se = 0,
  Ce = 0,
  _n = Vt(0),
  J = 0,
  Hr = null,
  cn = 0,
  Ui = 0,
  Ua = 0,
  Sr = null,
  ve = null,
  Ga = 0,
  Vn = 1 / 0,
  rt = null,
  Ci = !1,
  $u = null,
  zt = null,
  Uo = !1,
  Ct = null,
  Ti = 0,
  Cr = 0,
  Fu = null,
  ni = -1,
  ri = 0
function me() {
  return B & 6 ? K() : ni !== -1 ? ni : (ni = K())
}
function At(e) {
  return e.mode & 1
    ? B & 2 && se !== 0
      ? se & -se
      : Fm.transition !== null
        ? (ri === 0 && (ri = Kf()), ri)
        : ((e = L),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nd(e.type))),
          e)
    : 1
}
function Ve(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (Fu = null), Error(S(185)))
  po(e, n, r),
    (!(B & 2) || e !== re) &&
      (e === re && (!(B & 2) && (Ui |= n), J === 4 && kt(e, se)),
      Ee(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Vn = K() + 500), Ri && Wt()))
}
function Ee(e, t) {
  var n = e.callbackNode
  Fh(e, t)
  var r = ci(e, e === re ? se : 0)
  if (r === 0)
    n !== null && Dl(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Dl(n), t === 1))
      e.tag === 0 ? $m(Ac.bind(null, e)) : xd(Ac.bind(null, e)),
        Im(() => {
          !(B & 6) && Wt()
        }),
        (n = null)
    else {
      switch (Yf(r)) {
        case 1:
          n = ma
          break
        case 4:
          n = qf
          break
        case 16:
          n = li
          break
        case 536870912:
          n = Qf
          break
        default:
          n = li
      }
      n = bp(n, pp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function pp(e, t) {
  if (((ni = -1), (ri = 0), B & 6)) throw Error(S(327))
  var n = e.callbackNode
  if (jn() && e.callbackNode !== n) return null
  var r = ci(e, e === re ? se : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Ni(e, r)
  else {
    t = r
    var o = B
    B |= 2
    var i = mp()
    ;(re !== e || se !== t) && ((rt = null), (Vn = K() + 500), on(e, t))
    do
      try {
        ty()
        break
      } catch (u) {
        hp(e, u)
      }
    while (1)
    Na(),
      (Si.current = i),
      (B = o),
      X !== null ? (t = 0) : ((re = null), (se = 0), (t = J))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = au(e)), o !== 0 && ((r = o), (t = ju(e, o)))), t === 1)
    )
      throw ((n = Hr), on(e, 0), kt(e, r), Ee(e, K()), n)
    if (t === 6) kt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Jm(o) &&
          ((t = Ni(e, r)),
          t === 2 && ((i = au(e)), i !== 0 && ((r = i), (t = ju(e, i)))),
          t === 1))
      )
        throw ((n = Hr), on(e, 0), kt(e, r), Ee(e, K()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345))
        case 2:
          Jt(e, ve, rt)
          break
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Ga + 500 - K()), 10 < t))
          ) {
            if (ci(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = yu(Jt.bind(null, e, ve, rt), t)
            break
          }
          Jt(e, ve, rt)
          break
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - He(r)
            ;(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i)
          }
          if (
            ((r = o),
            (r = K() - r),
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
                          : 1960 * Zm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yu(Jt.bind(null, e, ve, rt), r)
            break
          }
          Jt(e, ve, rt)
          break
        case 5:
          Jt(e, ve, rt)
          break
        default:
          throw Error(S(329))
      }
    }
  }
  return Ee(e, K()), e.callbackNode === n ? pp.bind(null, e) : null
}
function ju(e, t) {
  var n = Sr
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = Ni(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && Bu(t)),
    e
  )
}
function Bu(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e)
}
function Jm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!We(i(), o)) return !1
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
function kt(e, t) {
  for (
    t &= ~Ua,
      t &= ~Ui,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - He(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Ac(e) {
  if (B & 6) throw Error(S(327))
  jn()
  var t = ci(e, 0)
  if (!(t & 1)) return Ee(e, K()), null
  var n = Ni(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = au(e)
    r !== 0 && ((t = r), (n = ju(e, r)))
  }
  if (n === 1) throw ((n = Hr), on(e, 0), kt(e, t), Ee(e, K()), n)
  if (n === 6) throw Error(S(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, ve, rt),
    Ee(e, K()),
    null
  )
}
function Ha(e, t) {
  var n = B
  B |= 1
  try {
    return e(t)
  } finally {
    ;(B = n), B === 0 && ((Vn = K() + 500), Ri && Wt())
  }
}
function fn(e) {
  Ct !== null && Ct.tag === 0 && !(B & 6) && jn()
  var t = B
  B |= 1
  var n = je.transition,
    r = L
  try {
    if (((je.transition = null), (L = 1), e)) return e()
  } finally {
    ;(L = r), (je.transition = n), (B = t), !(B & 6) && Wt()
  }
}
function Va() {
  ;(Ce = _n.current), U(_n)
}
function on(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), _m(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n
      switch ((Sa(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && mi()
          break
        case 3:
          Gn(), U(xe), U(de), $a()
          break
        case 5:
          Aa(r)
          break
        case 4:
          Gn()
          break
        case 13:
          U(H)
          break
        case 19:
          U(H)
          break
        case 10:
          _a(r.type._context)
          break
        case 22:
        case 23:
          Va()
      }
      n = n.return
    }
  if (
    ((re = e),
    (X = e = $t(e.current, null)),
    (se = Ce = t),
    (J = 0),
    (Hr = null),
    (Ua = Ui = cn = 0),
    (ve = Sr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;(i.next = o), (r.next = s)
        }
        n.pending = r
      }
    nn = null
  }
  return e
}
function hp(e, t) {
  do {
    var n = X
    try {
      if ((Na(), (Jo.current = ki), Ei)) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Ei = !1
      }
      if (
        ((ln = 0),
        (ne = Z = V = null),
        (Er = !1),
        (Dr = 0),
        (Da.current = null),
        n === null || n.return === null)
      ) {
        ;(J = 1), (Hr = t), (X = null)
        break
      }
      e: {
        var i = e,
          s = n.return,
          u = n,
          a = t
        if (
          ((t = se),
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
          var g = bc(s)
          if (g !== null) {
            ;(g.flags &= -257),
              xc(g, s, u, i, t),
              g.mode & 1 && wc(i, l, t),
              (t = g),
              (a = l)
            var v = t.updateQueue
            if (v === null) {
              var y = new Set()
              y.add(a), (t.updateQueue = y)
            } else v.add(a)
            break e
          } else {
            if (!(t & 1)) {
              wc(i, l, t), Wa()
              break e
            }
            a = Error(S(426))
          }
        } else if (G && u.mode & 1) {
          var E = bc(s)
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              xc(E, s, u, i, t),
              Ca(Hn(a, u))
            break e
          }
        }
        ;(i = a = Hn(a, u)),
          J !== 4 && (J = 2),
          Sr === null ? (Sr = [i]) : Sr.push(i),
          (i = s)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var h = Xd(i, a, t)
              dc(i, h)
              break e
            case 1:
              u = a
              var p = i.type,
                m = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (zt === null || !zt.has(m))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = Zd(i, u, t)
                dc(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      gp(n)
    } catch (P) {
      ;(t = P), X === n && n !== null && (X = n = n.return)
      continue
    }
    break
  } while (1)
}
function mp() {
  var e = Si.current
  return (Si.current = ki), e === null ? ki : e
}
function Wa() {
  ;(J === 0 || J === 3 || J === 2) && (J = 4),
    re === null || (!(cn & 268435455) && !(Ui & 268435455)) || kt(re, se)
}
function Ni(e, t) {
  var n = B
  B |= 2
  var r = mp()
  ;(re !== e || se !== t) && ((rt = null), on(e, t))
  do
    try {
      ey()
      break
    } catch (o) {
      hp(e, o)
    }
  while (1)
  if ((Na(), (B = n), (Si.current = r), X !== null)) throw Error(S(261))
  return (re = null), (se = 0), J
}
function ey() {
  while (X !== null) yp(X)
}
function ty() {
  while (X !== null && !Ch()) yp(X)
}
function yp(e) {
  var t = wp(e.alternate, e, Ce)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? gp(e) : (X = t),
    (Da.current = null)
}
function gp(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qm(n, t)), n !== null)) {
        ;(n.flags &= 32767), (X = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(J = 6), (X = null)
        return
      }
    } else if (((n = qm(n, t, Ce)), n !== null)) {
      X = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      X = t
      return
    }
    X = t = e
  } while (t !== null)
  J === 0 && (J = 5)
}
function Jt(e, t, n) {
  var r = L,
    o = je.transition
  try {
    ;(je.transition = null), (L = 1), ny(e, t, n, r)
  } finally {
    ;(je.transition = o), (L = r)
  }
  return null
}
function ny(e, t, n, r) {
  do jn()
  while (Ct !== null)
  if (B & 6) throw Error(S(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (jh(e, i),
    e === re && ((X = re = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Uo ||
      ((Uo = !0), bp(li, () => (jn(), null))),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = je.transition), (je.transition = null)
    var s = L
    L = 1
    var u = B
    ;(B |= 4),
      (Da.current = null),
      Ym(e, n),
      fp(n, e),
      Pm(hu),
      (fi = !!pu),
      (hu = pu = null),
      (e.current = n),
      Xm(n),
      Th(),
      (B = u),
      (L = s),
      (je.transition = i)
  } else e.current = n
  if (
    (Uo && ((Uo = !1), (Ct = e), (Ti = o)),
    (i = e.pendingLanes),
    i === 0 && (zt = null),
    Ih(n.stateNode),
    Ee(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Ci) throw ((Ci = !1), (e = $u), ($u = null), e)
  return (
    Ti & 1 && e.tag !== 0 && jn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fu ? Cr++ : ((Cr = 0), (Fu = e))) : (Cr = 0),
    Wt(),
    null
  )
}
function jn() {
  if (Ct !== null) {
    var e = Yf(Ti),
      t = je.transition,
      n = L
    try {
      if (((je.transition = null), (L = 16 > e ? 16 : e), Ct === null))
        var r = !1
      else {
        if (((e = Ct), (Ct = null), (Ti = 0), B & 6)) throw Error(S(331))
        var o = B
        for (B |= 4, T = e.current; T !== null; ) {
          var i = T,
            s = i.child
          if (T.flags & 16) {
            var u = i.deletions
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var l = u[a]
                for (T = l; T !== null; ) {
                  var f = T
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, f, i)
                  }
                  var c = f.child
                  if (c !== null) (c.return = f), (T = c)
                  else
                    while (T !== null) {
                      f = T
                      var d = f.sibling,
                        g = f.return
                      if ((ap(f), f === l)) {
                        T = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = g), (T = d)
                        break
                      }
                      T = g
                    }
                }
              }
              var v = i.alternate
              if (v !== null) {
                var y = v.child
                if (y !== null) {
                  v.child = null
                  do {
                    var E = y.sibling
                    ;(y.sibling = null), (y = E)
                  } while (y !== null)
                }
              }
              T = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (T = s)
          else
            while (T !== null) {
              if (((i = T), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, i, i.return)
                }
              var h = i.sibling
              if (h !== null) {
                ;(h.return = i.return), (T = h)
                break
              }
              T = i.return
            }
        }
        var p = e.current
        for (T = p; T !== null; ) {
          s = T
          var m = s.child
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (T = m)
          else
            for (s = p; T !== null; ) {
              if (((u = T), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Di(9, u)
                  }
                } catch (P) {
                  q(u, u.return, P)
                }
              if (u === s) {
                T = null
                break
              }
              var w = u.sibling
              if (w !== null) {
                ;(w.return = u.return), (T = w)
                break
              }
              T = u.return
            }
        }
        if (
          ((B = o), Wt(), Ze && typeof Ze.onPostCommitFiberRoot == 'function')
        )
          try {
            Ze.onPostCommitFiberRoot(Ai, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(L = n), (je.transition = t)
    }
  }
  return !1
}
function $c(e, t, n) {
  ;(t = Hn(n, t)),
    (t = Xd(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = me()),
    e !== null && (po(e, 1, t), Ee(e, t))
}
function q(e, t, n) {
  if (e.tag === 3) $c(e, e, n)
  else
    while (t !== null) {
      if (t.tag === 3) {
        $c(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (zt === null || !zt.has(r)))
        ) {
          ;(e = Hn(n, e)),
            (e = Zd(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = me()),
            t !== null && (po(t, 1, e), Ee(t, e))
          break
        }
      }
      t = t.return
    }
}
function ry(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (se & n) === n &&
      (J === 4 || (J === 3 && (se & 130023424) === se && 500 > K() - Ga)
        ? on(e, 0)
        : (Ua |= n)),
    Ee(e, t)
}
function vp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zo), (zo <<= 1), !(zo & 130023424) && (zo = 4194304))
      : (t = 1))
  var n = me()
  ;(e = dt(e, t)), e !== null && (po(e, t, n), Ee(e, n))
}
function oy(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), vp(e, n)
}
function iy(e, t) {
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
      throw Error(S(314))
  }
  r !== null && r.delete(t), vp(e, n)
}
var wp
wp = (e, t, n) => {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) we = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), Wm(e, t, n)
      we = !!(e.flags & 131072)
    }
  else (we = !1), G && t.flags & 1048576 && Pd(t, vi, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ti(e, t), (e = t.pendingProps)
      var o = Mn(t, de.current)
      Fn(t, n), (o = ja(null, t, r, e, o, n))
      var i = Ba()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((i = !0), yi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Oa(t),
            (o.updater = Li),
            (t.stateNode = o),
            (o._reactInternals = t),
            Eu(t, r, e, n),
            (t = Cu(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && ka(t), he(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ti(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = uy(r)),
          (e = De(r, e)),
          o)
        ) {
          case 0:
            t = Su(null, t, r, e, n)
            break e
          case 1:
            t = kc(null, t, r, e, n)
            break e
          case 11:
            t = Pc(null, t, r, e, n)
            break e
          case 14:
            t = Ec(null, t, r, De(r.type, e), n)
            break e
        }
        throw Error(S(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        Su(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        kc(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((np(t), e === null)) throw Error(S(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Cd(e, t),
          xi(t, r, null, n)
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
            ;(o = Hn(Error(S(423)), t)), (t = Sc(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Hn(Error(S(424)), t)), (t = Sc(e, t, r, n, o))
            break e
          } else
            for (
              Te = It(t.stateNode.containerInfo.firstChild),
                Ne = t,
                G = !0,
                Ge = null,
                n = Id(t, null, r, n),
                t.child = n;
              n;
            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Dn(), r === o)) {
            t = pt(e, t, n)
            break e
          }
          he(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Od(t),
        e === null && bu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        mu(r, o) ? (s = null) : i !== null && mu(r, i) && (t.flags |= 32),
        tp(e, t),
        he(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && bu(t), null
    case 13:
      return rp(e, t, n)
    case 4:
      return (
        za(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : he(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        Pc(e, t, r, o, n)
      )
    case 7:
      return he(e, t, t.pendingProps, n), t.child
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          M(wi, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (We(i.value, s)) {
            if (i.children === o.children && !xe.current) {
              t = pt(e, t, n)
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
                      ;(a = ut(-1, n & -n)), (a.tag = 2)
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
                      xu(i.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(S(341))
                ;(s.lanes |= n),
                  (u = s.alternate),
                  u !== null && (u.lanes |= n),
                  xu(s, n, t),
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
        he(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Fn(t, n),
        (o = Be(o)),
        (r = r(o)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = De(r, t.pendingProps)),
        (o = De(r.type, o)),
        Ec(e, t, r, o, n)
      )
    case 15:
      return Jd(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        ti(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), yi(t)) : (e = !1),
        Fn(t, n),
        Nd(t, r, o),
        Eu(t, r, o, n),
        Cu(null, t, r, !0, e, n)
      )
    case 19:
      return op(e, t, n)
    case 22:
      return ep(e, t, n)
  }
  throw Error(S(156, t.tag))
}
function bp(e, t) {
  return Wf(e, t)
}
function sy(e, t, n, r) {
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
function Fe(e, t, n, r) {
  return new sy(e, t, n, r)
}
function qa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function uy(e) {
  if (typeof e == 'function') return qa(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === da)) return 11
    if (e === pa) return 14
  }
  return 2
}
function $t(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
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
function oi(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == 'function')) qa(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case wn:
        return sn(n.children, o, i, t)
      case fa:
        ;(s = 8), (o |= 8)
        break
      case qs:
        return (e = Fe(12, n, t, o | 2)), (e.elementType = qs), (e.lanes = i), e
      case Qs:
        return (e = Fe(13, n, t, o)), (e.elementType = Qs), (e.lanes = i), e
      case Ks:
        return (e = Fe(19, n, t, o)), (e.elementType = Ks), (e.lanes = i), e
      case _f:
        return Gi(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Tf:
              s = 10
              break e
            case Nf:
              s = 9
              break e
            case da:
              s = 11
              break e
            case pa:
              s = 14
              break e
            case xt:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(S(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Fe(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function sn(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e
}
function Gi(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = _f),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Bs(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e
}
function Rs(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function ay(e, t, n, r, o) {
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
    (this.eventTimes = vs(0)),
    (this.expirationTimes = vs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Qa(e, t, n, r, o, i, s, u, a) {
  return (
    (e = new ay(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Fe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oa(i),
    e
  )
}
function ly(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: vn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function xp(e) {
  if (!e) return Bt
  e = e._reactInternals
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(S(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(S(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Pe(n)) return bd(e, n, t)
  }
  return t
}
function Pp(e, t, n, r, o, i, s, u, a) {
  return (
    (e = Qa(n, r, !0, e, o, i, s, u, a)),
    (e.context = xp(null)),
    (n = e.current),
    (r = me()),
    (o = At(n)),
    (i = ut(r, o)),
    (i.callback = t ?? null),
    Ot(n, i, o),
    (e.current.lanes = o),
    po(e, o, r),
    Ee(e, r),
    e
  )
}
function Hi(e, t, n, r) {
  var o = t.current,
    i = me(),
    s = At(o)
  return (
    (n = xp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(o, t, s)),
    e !== null && (Ve(e, o, s, i), Zo(e, o, s)),
    s
  )
}
function _i(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ka(e, t) {
  Fc(e, t), (e = e.alternate) && Fc(e, t)
}
function cy() {
  return null
}
var Ep =
  typeof reportError == 'function'
    ? reportError
    : (e) => {
        console.error(e)
      }
function Ya(e) {
  this._internalRoot = e
}
Vi.prototype.render = Ya.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(S(409))
  Hi(e, t, null, null)
}
Vi.prototype.unmount = Ya.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    fn(() => {
      Hi(null, e, null, null)
    }),
      (t[ft] = null)
  }
}
function Vi(e) {
  this._internalRoot = e
}
Vi.prototype.unstable_scheduleHydration = (e) => {
  if (e) {
    var t = Jf()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && td(e)
  }
}
function Xa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Wi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function jc() {}
function fy(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = () => {
        var l = _i(s)
        i.call(l)
      }
    }
    var s = Pp(t, r, e, 0, null, !1, !1, '', jc)
    return (
      (e._reactRootContainer = s),
      (e[ft] = s.current),
      jr(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      s
    )
  }
  while ((o = e.lastChild)) e.removeChild(o)
  if (typeof r == 'function') {
    var u = r
    r = () => {
      var l = _i(a)
      u.call(l)
    }
  }
  var a = Qa(e, 0, !1, null, null, !1, !1, '', jc)
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    fn(() => {
      Hi(t, a, n, r)
    }),
    a
  )
}
function qi(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == 'function') {
      var u = o
      o = () => {
        var a = _i(s)
        u.call(a)
      }
    }
    Hi(t, s, e, o)
  } else s = fy(n, t, e, o, r)
  return _i(s)
}
Xf = (e) => {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes)
        n !== 0 &&
          (ya(t, n | 1), Ee(t, K()), !(B & 6) && ((Vn = K() + 500), Wt()))
      }
      break
    case 13:
      fn(() => {
        var r = dt(e, 1)
        if (r !== null) {
          var o = me()
          Ve(r, e, 1, o)
        }
      }),
        Ka(e, 1)
  }
}
ga = (e) => {
  if (e.tag === 13) {
    var t = dt(e, 134217728)
    if (t !== null) {
      var n = me()
      Ve(t, e, 134217728, n)
    }
    Ka(e, 134217728)
  }
}
Zf = (e) => {
  if (e.tag === 13) {
    var t = At(e),
      n = dt(e, t)
    if (n !== null) {
      var r = me()
      Ve(n, e, t, r)
    }
    Ka(e, t)
  }
}
Jf = () => L
ed = (e, t) => {
  var n = L
  try {
    return (L = e), t()
  } finally {
    L = n
  }
}
iu = (e, t, n) => {
  switch (t) {
    case 'input':
      if ((Zs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = Bi(r)
            if (!o) throw Error(S(90))
            Of(r), Zs(r, o)
          }
        }
      }
      break
    case 'textarea':
      Af(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && On(e, !!n.multiple, t, !1)
  }
}
Mf = Ha
Df = fn
var dy = { usingClientEntryPoint: !1, Events: [mo, En, Bi, Rf, Lf, Ha] },
  cr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  py = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: (e) => (
      (e = Hf(e)), e === null ? null : e.stateNode
    ),
    findFiberByHostInstance: cr.findFiberByHostInstance || cy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Go.isDisabled && Go.supportsFiber)
    try {
      ;(Ai = Go.inject(py)), (Ze = Go)
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy
Oe.createPortal = (e, t) => {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Xa(t)) throw Error(S(200))
  return ly(e, t, null, n)
}
Oe.createRoot = (e, t) => {
  if (!Xa(e)) throw Error(S(299))
  var n = !1,
    r = '',
    o = Ep
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Qa(e, 1, !1, null, null, n, !1, r, o)),
    (e[ft] = t.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    new Ya(t)
  )
}
Oe.findDOMNode = (e) => {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(S(188))
      : ((e = Object.keys(e).join(',')), Error(S(268, e)))
  return (e = Hf(t)), (e = e === null ? null : e.stateNode), e
}
Oe.flushSync = (e) => fn(e)
Oe.hydrate = (e, t, n) => {
  if (!Wi(t)) throw Error(S(200))
  return qi(null, e, t, !0, n)
}
Oe.hydrateRoot = (e, t, n) => {
  if (!Xa(e)) throw Error(S(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Ep
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Pp(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[ft] = t.current),
    jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Vi(t)
}
Oe.render = (e, t, n) => {
  if (!Wi(t)) throw Error(S(200))
  return qi(null, e, t, !1, n)
}
Oe.unmountComponentAtNode = (e) => {
  if (!Wi(e)) throw Error(S(40))
  return e._reactRootContainer
    ? (fn(() => {
        qi(null, null, e, !1, () => {
          ;(e._reactRootContainer = null), (e[ft] = null)
        })
      }),
      !0)
    : !1
}
Oe.unstable_batchedUpdates = Ha
Oe.unstable_renderSubtreeIntoContainer = (e, t, n, r) => {
  if (!Wi(n)) throw Error(S(200))
  if (e == null || e._reactInternals === void 0) throw Error(S(38))
  return qi(e, t, n, !1, r)
}
Oe.version = '18.2.0-next-9e3b772b8-20220608'
function kp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp)
    } catch (e) {
      console.error(e)
    }
}
kp(), (Pf.exports = Oe)
var hy = Pf.exports,
  Bc = hy
;(Vs.createRoot = Bc.createRoot), (Vs.hydrateRoot = Bc.hydrateRoot)
function my(e, t) {
  const n = e.exec(t)
  return n == null ? void 0 : n.groups
}
const Rc = /^tuple(?<array>(\[(\d*)\])*)$/
function Ru(e) {
  let t = e.type
  if (Rc.test(e.type) && 'components' in e) {
    t = '('
    const n = e.components.length
    for (let o = 0; o < n; o++) {
      const i = e.components[o]
      ;(t += Ru(i)), o < n - 1 && (t += ', ')
    }
    const r = my(Rc, e.type)
    return (
      (t += `)${(r == null ? void 0 : r.array) ?? ''}`), Ru({ ...e, type: t })
    )
  }
  return (
    'indexed' in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  )
}
function fr(e) {
  let t = ''
  const n = e.length
  for (let r = 0; r < n; r++) {
    const o = e[r]
    ;(t += Ru(o)), r !== n - 1 && (t += ', ')
  }
  return t
}
function yy(e) {
  return e.type === 'function'
    ? `function ${e.name}(${fr(e.inputs)})${
        e.stateMutability && e.stateMutability !== 'nonpayable'
          ? ` ${e.stateMutability}`
          : ''
      }${e.outputs.length ? ` returns (${fr(e.outputs)})` : ''}`
    : e.type === 'event'
      ? `event ${e.name}(${fr(e.inputs)})`
      : e.type === 'error'
        ? `error ${e.name}(${fr(e.inputs)})`
        : e.type === 'constructor'
          ? `constructor(${fr(e.inputs)})${
              e.stateMutability === 'payable' ? ' payable' : ''
            }`
          : e.type === 'fallback'
            ? 'fallback()'
            : 'receive() external payable'
}
function O(e, t, n) {
  return (r) => {
    var o
    return ((o = e[t.name || n]) == null ? void 0 : o.call(e, r)) ?? t(e, r)
  }
}
function ht(e, { includeName: t = !1 } = {}) {
  if (e.type !== 'function' && e.type !== 'event' && e.type !== 'error')
    throw new zy(e.type)
  return `${e.name}(${Qi(e.inputs, { includeName: t })})`
}
function Qi(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => gy(n, { includeName: t })).join(t ? ', ' : ',') : ''
}
function gy(e, { includeName: t }) {
  return e.type.startsWith('tuple')
    ? `(${Qi(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : '')
}
function qe(e, { strict: t = !0 } = {}) {
  return !e || typeof e != 'string'
    ? !1
    : t
      ? /^0x[0-9a-fA-F]*$/.test(e)
      : e.startsWith('0x')
}
function Y(e) {
  return qe(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length
}
const vy = '2.8.62',
  wy = (e) => e,
  Za = (e) => e,
  by = () => `viem@${vy}`
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
        value: by(),
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
    return Sp(this, t)
  }
}
function Sp(e, t) {
  return t != null && t(e)
    ? e
    : e && typeof e == 'object' && 'cause' in e
      ? Sp(e.cause, t)
      : t
        ? null
        : e
}
class xy extends k {
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
class Lc extends k {
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
class Cp extends k {
  constructor({ data: t, params: n, size: r }) {
    super(
      [`Data size of ${r} bytes is too small for given parameters.`].join(`
`),
      {
        metaMessages: [
          `Params: (${Qi(n, { includeName: !0 })})`,
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
class Ki extends k {
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
class Py extends k {
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
class Ey extends k {
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
class ky extends k {
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
class Tp extends k {
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
class Sy extends k {
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
class Np extends k {
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
class Mc extends k {
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
class Ii extends k {
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
class Cy extends k {
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
class Ty extends k {
  constructor(t, n) {
    super('Found ambiguous types in overloaded ABI items.', {
      metaMessages: [
        `\`${t.type}\` in \`${ht(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${ht(n.abiItem)}\``,
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
class Ny extends k {
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
class Vr extends k {
  constructor({ abiItem: t, data: n, params: r, size: o }) {
    super(
      [
        `Data size of ${o} bytes is too small for non-indexed event parameters.`,
      ].join(`
`),
      {
        metaMessages: [
          `Params: (${Qi(r, { includeName: !0 })})`,
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
class Yi extends k {
  constructor({ abiItem: t, param: n }) {
    super(
      [
        `Expected a topic for indexed event parameter${
          n.name ? ` "${n.name}"` : ''
        } on event "${ht(t, { includeName: !0 })}".`,
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
class _y extends k {
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
class Iy extends k {
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
class Oy extends k {
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
class zy extends k {
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
class Ay extends k {
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
class _p extends k {
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
class Ip extends k {
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
class Dc extends k {
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
function Xn(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == 'string'
    ? Ft(e, { dir: t, size: n })
    : $y(e, { dir: t, size: n })
}
function Ft(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e
  const r = e.replace('0x', '')
  if (r.length > n * 2)
    throw new Ip({ size: Math.ceil(r.length / 2), targetSize: n, type: 'hex' })
  return `0x${r[t === 'right' ? 'padEnd' : 'padStart'](n * 2, '0')}`
}
function $y(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e
  if (e.length > n)
    throw new Ip({ size: e.length, targetSize: n, type: 'bytes' })
  const r = new Uint8Array(n)
  for (let o = 0; o < n; o++) {
    const i = t === 'right'
    r[i ? o : n - o - 1] = e[i ? o : e.length - o - 1]
  }
  return r
}
class Fy extends k {
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
class jy extends k {
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
class By extends k {
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
function Wn(e, { dir: t = 'left' } = {}) {
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
function tt(e, { size: t }) {
  if (Y(e) > t) throw new By({ givenSize: Y(e), maxSize: t })
}
function Xi(e, t = {}) {
  const { signed: n } = t
  t.size && tt(e, { size: t.size })
  const r = BigInt(e)
  if (!n) return r
  const o = (e.length - 2) / 2,
    i = (1n << (BigInt(o) * 8n - 1n)) - 1n
  return r <= i ? r : r - BigInt(`0x${'f'.padStart(o * 2, 'f')}`) - 1n
}
function mt(e, t = {}) {
  return Number(Xi(e, t))
}
const Ry = Array.from({ length: 256 }, (e, t) =>
  t.toString(16).padStart(2, '0'),
)
function F(e, t = {}) {
  return typeof e == 'number' || typeof e == 'bigint'
    ? A(e, t)
    : typeof e == 'string'
      ? Ja(e, t)
      : typeof e == 'boolean'
        ? Op(e, t)
        : oe(e, t)
}
function Op(e, t = {}) {
  const n = `0x${Number(e)}`
  return typeof t.size == 'number'
    ? (tt(n, { size: t.size }), Xn(n, { size: t.size }))
    : n
}
function oe(e, t = {}) {
  let n = ''
  for (let o = 0; o < e.length; o++) n += Ry[e[o]]
  const r = `0x${n}`
  return typeof t.size == 'number'
    ? (tt(r, { size: t.size }), Xn(r, { dir: 'right', size: t.size }))
    : r
}
function A(e, t = {}) {
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
    throw new Fy({
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
  return r ? Xn(u, { size: r }) : u
}
const Ly = new TextEncoder()
function Ja(e, t = {}) {
  const n = Ly.encode(e)
  return oe(n, t)
}
const My = new TextEncoder()
function Rt(e, t = {}) {
  return typeof e == 'number' || typeof e == 'bigint'
    ? Uy(e, t)
    : typeof e == 'boolean'
      ? Dy(e, t)
      : qe(e)
        ? Lt(e, t)
        : at(e, t)
}
function Dy(e, t = {}) {
  const n = new Uint8Array(1)
  return (
    (n[0] = Number(e)),
    typeof t.size == 'number'
      ? (tt(n, { size: t.size }), Xn(n, { size: t.size }))
      : n
  )
}
const nt = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 }
function Uc(e) {
  if (e >= nt.zero && e <= nt.nine) return e - nt.zero
  if (e >= nt.A && e <= nt.F) return e - (nt.A - 10)
  if (e >= nt.a && e <= nt.f) return e - (nt.a - 10)
}
function Lt(e, t = {}) {
  let n = e
  t.size &&
    (tt(n, { size: t.size }), (n = Xn(n, { dir: 'right', size: t.size })))
  let r = n.slice(2)
  r.length % 2 && (r = `0${r}`)
  const o = r.length / 2,
    i = new Uint8Array(o)
  for (let s = 0, u = 0; s < o; s++) {
    const a = Uc(r.charCodeAt(u++)),
      l = Uc(r.charCodeAt(u++))
    if (a === void 0 || l === void 0)
      throw new k(`Invalid byte sequence ("${r[u - 2]}${r[u - 1]}" in "${r}").`)
    i[s] = a * 16 + l
  }
  return i
}
function Uy(e, t) {
  const n = A(e, t)
  return Lt(n)
}
function at(e, t = {}) {
  const n = My.encode(e)
  return typeof t.size == 'number'
    ? (tt(n, { size: t.size }), Xn(n, { dir: 'right', size: t.size }))
    : n
}
function Gc(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`)
}
function zp(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array')
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(
      `Expected Uint8Array of length ${t}, not of length=${e.length}`,
    )
}
function Oi(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed')
  if (t && e.finished) throw new Error('Hash#digest() has already been called')
}
function Ap(e, t) {
  zp(e)
  const n = t.outputLen
  if (e.length < n)
    throw new Error(
      `digestInto() expects output buffer of length at least ${n}`,
    )
}
const Ho = BigInt(2 ** 32 - 1),
  Hc = BigInt(32)
function Gy(e, t = !1) {
  return t
    ? { h: Number(e & Ho), l: Number((e >> Hc) & Ho) }
    : { h: Number((e >> Hc) & Ho) | 0, l: Number(e & Ho) | 0 }
}
function Hy(e, t = !1) {
  const n = new Uint32Array(e.length),
    r = new Uint32Array(e.length)
  for (let o = 0; o < e.length; o++) {
    const { h: i, l: s } = Gy(e[o], t)
    ;[n[o], r[o]] = [i, s]
  }
  return [n, r]
}
const Vy = (e, t, n) => (e << n) | (t >>> (32 - n)),
  Wy = (e, t, n) => (t << n) | (e >>> (32 - n)),
  qy = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  Qy = (e, t, n) =>
    (e << (n - 32)) |
    (t >>>
      (64 -
        n)) /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ky = (e) => e instanceof Uint8Array,
  Yy = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  Ls = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  Ke = (e, t) => (e << (32 - t)) | (e >>> t),
  Xy = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68
if (!Xy) throw new Error('Non little-endian hardware is not supported')
function Zy(e) {
  if (typeof e != 'string')
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`)
  return new Uint8Array(new TextEncoder().encode(e))
}
function el(e) {
  if ((typeof e == 'string' && (e = Zy(e)), !Ky(e)))
    throw new Error(`expected Uint8Array, got ${typeof e}`)
  return e
}
class $p {
  clone() {
    return this._cloneInto()
  }
}
function Fp(e) {
  const t = (r) => e().update(el(r)).digest(),
    n = e()
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  )
}
const [jp, Bp, Rp] = [[], [], []],
  Jy = BigInt(0),
  dr = BigInt(1),
  eg = BigInt(2),
  tg = BigInt(7),
  ng = BigInt(256),
  rg = BigInt(113)
for (let e = 0, t = dr, n = 1, r = 0; e < 24; e++) {
  ;([n, r] = [r, (2 * n + 3 * r) % 5]),
    jp.push(2 * (5 * r + n)),
    Bp.push((((e + 1) * (e + 2)) / 2) % 64)
  let o = Jy
  for (let i = 0; i < 7; i++)
    (t = ((t << dr) ^ ((t >> tg) * rg)) % ng),
      t & eg && (o ^= dr << ((dr << BigInt(i)) - dr))
  Rp.push(o)
}
const [og, ig] = Hy(Rp, !0),
  Vc = (e, t, n) => (n > 32 ? qy(e, t, n) : Vy(e, t, n)),
  Wc = (e, t, n) => (n > 32 ? Qy(e, t, n) : Wy(e, t, n))
function sg(e, t = 24) {
  const n = new Uint32Array(10)
  for (let r = 24 - t; r < 24; r++) {
    for (let s = 0; s < 10; s++)
      n[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40]
    for (let s = 0; s < 10; s += 2) {
      const u = (s + 8) % 10,
        a = (s + 2) % 10,
        l = n[a],
        f = n[a + 1],
        c = Vc(l, f, 1) ^ n[u],
        d = Wc(l, f, 1) ^ n[u + 1]
      for (let g = 0; g < 50; g += 10) (e[s + g] ^= c), (e[s + g + 1] ^= d)
    }
    let o = e[2],
      i = e[3]
    for (let s = 0; s < 24; s++) {
      const u = Bp[s],
        a = Vc(o, i, u),
        l = Wc(o, i, u),
        f = jp[s]
      ;(o = e[f]), (i = e[f + 1]), (e[f] = a), (e[f + 1] = l)
    }
    for (let s = 0; s < 50; s += 10) {
      for (let u = 0; u < 10; u++) n[u] = e[s + u]
      for (let u = 0; u < 10; u++)
        e[s + u] ^= ~n[(u + 2) % 10] & n[(u + 4) % 10]
    }
    ;(e[0] ^= og[r]), (e[1] ^= ig[r])
  }
  n.fill(0)
}
class tl extends $p {
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
      Gc(r),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function')
    ;(this.state = new Uint8Array(200)), (this.state32 = Yy(this.state))
  }
  keccak() {
    sg(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0)
  }
  update(t) {
    Oi(this)
    const { blockLen: n, state: r } = this
    t = el(t)
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
    Oi(this, !1), zp(t), this.finish()
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
    return Gc(t), this.xofInto(new Uint8Array(t))
  }
  digestInto(t) {
    if ((Ap(t, this), this.finished))
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
      t || (t = new tl(n, r, o, s, i)),
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
const ug = (e, t, n) => Fp(() => new tl(t, e, n)),
  ag = ug(1, 136, 256 / 8)
function be(e, t) {
  const n = t || 'hex',
    r = ag(qe(e, { strict: !1 }) ? Rt(e) : e)
  return n === 'bytes' ? r : F(r)
}
const lg = (e) => be(Rt(e))
function cg(e) {
  return lg(e)
}
function fg(e) {
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
const dg = (e) => {
  const t = (() => (typeof e == 'string' ? e : yy(e)))()
  return fg(t)
}
function Lp(e) {
  return cg(dg(e))
}
const nl = Lp
class et extends k {
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
class pg extends Map {
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
function Zi(e, t) {
  const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    r = be(at(n), 'bytes'),
    o = (t ? n.substring(`${t}0x`.length) : n).split('')
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()),
      (r[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase())
  return `0x${o.join('')}`
}
function hg(e, t) {
  if (!Ie(e)) throw new et({ address: e })
  return Zi(e, t)
}
const mg = /^0x[a-fA-F0-9]{40}$/,
  Ms = new pg(8192)
function Ie(e, { strict: t = !0 } = {}) {
  if (Ms.has(e)) return Ms.get(e)
  const n = (() =>
    mg.test(e) ? (e.toLowerCase() === e ? !0 : t ? Zi(e) === e : !0) : !1)()
  return Ms.set(e, n), n
}
function yt(e) {
  return typeof e[0] == 'string' ? Zn(e) : yg(e)
}
function yg(e) {
  let t = 0
  for (const o of e) t += o.length
  const n = new Uint8Array(t)
  let r = 0
  for (const o of e) n.set(o, r), (r += o.length)
  return n
}
function Zn(e) {
  return `0x${e.reduce((t, n) => t + n.replace('0x', ''), '')}`
}
function Wr(e, t, n, { strict: r } = {}) {
  return qe(e, { strict: !1 })
    ? gg(e, t, n, { strict: r })
    : Up(e, t, n, { strict: r })
}
function Mp(e, t) {
  if (typeof t == 'number' && t > 0 && t > Y(e) - 1)
    throw new _p({ offset: t, position: 'start', size: Y(e) })
}
function Dp(e, t, n) {
  if (typeof t == 'number' && typeof n == 'number' && Y(e) !== n - t)
    throw new _p({ offset: n, position: 'end', size: Y(e) })
}
function Up(e, t, n, { strict: r } = {}) {
  Mp(e, t)
  const o = e.slice(t, n)
  return r && Dp(o, t, n), o
}
function gg(e, t, n, { strict: r } = {}) {
  Mp(e, t)
  const o = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (n ?? e.length) * 2)}`
  return r && Dp(o, t, n), o
}
function go(e, t) {
  if (e.length !== t.length)
    throw new ky({ expectedLength: e.length, givenLength: t.length })
  const n = vg({ params: e, values: t }),
    r = ol(n)
  return r.length === 0 ? '0x' : r
}
function vg({ params: e, values: t }) {
  const n = []
  for (let r = 0; r < e.length; r++) n.push(rl({ param: e[r], value: t[r] }))
  return n
}
function rl({ param: e, value: t }) {
  const n = il(e.type)
  if (n) {
    const [r, o] = n
    return bg(t, { length: r, param: { ...e, type: o } })
  }
  if (e.type === 'tuple') return Sg(t, { param: e })
  if (e.type === 'address') return wg(t)
  if (e.type === 'bool') return Pg(t)
  if (e.type.startsWith('uint') || e.type.startsWith('int')) {
    const r = e.type.startsWith('int')
    return Eg(t, { signed: r })
  }
  if (e.type.startsWith('bytes')) return xg(t, { param: e })
  if (e.type === 'string') return kg(t)
  throw new _y(e.type, { docsPath: '/docs/contract/encodeAbiParameters' })
}
function ol(e) {
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
    s ? (n.push(A(t + o, { size: 32 })), r.push(u), (o += Y(u))) : n.push(u)
  }
  return yt([...n, ...r])
}
function wg(e) {
  if (!Ie(e)) throw new et({ address: e })
  return { dynamic: !1, encoded: Ft(e.toLowerCase()) }
}
function bg(e, { length: t, param: n }) {
  const r = t === null
  if (!Array.isArray(e)) throw new Oy(e)
  if (!r && e.length !== t)
    throw new Py({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`,
    })
  let o = !1
  const i = []
  for (let s = 0; s < e.length; s++) {
    const u = rl({ param: n, value: e[s] })
    u.dynamic && (o = !0), i.push(u)
  }
  if (r || o) {
    const s = ol(i)
    if (r) {
      const u = A(i.length, { size: 32 })
      return { dynamic: !0, encoded: i.length > 0 ? yt([u, s]) : u }
    }
    if (o) return { dynamic: !0, encoded: s }
  }
  return { dynamic: !1, encoded: yt(i.map(({ encoded: s }) => s)) }
}
function xg(e, { param: t }) {
  const [, n] = t.type.split('bytes'),
    r = Y(e)
  if (!n) {
    let o = e
    return (
      r % 32 !== 0 &&
        (o = Ft(o, {
          dir: 'right',
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: yt([Ft(A(r, { size: 32 })), o]) }
    )
  }
  if (r !== Number.parseInt(n))
    throw new Ey({ expectedSize: Number.parseInt(n), value: e })
  return { dynamic: !1, encoded: Ft(e, { dir: 'right' }) }
}
function Pg(e) {
  if (typeof e != 'boolean')
    throw new k(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`,
    )
  return { dynamic: !1, encoded: Ft(Op(e)) }
}
function Eg(e, { signed: t }) {
  return { dynamic: !1, encoded: A(e, { size: 32, signed: t }) }
}
function kg(e) {
  const t = Ja(e),
    n = Math.ceil(Y(t) / 32),
    r = []
  for (let o = 0; o < n; o++)
    r.push(Ft(Wr(t, o * 32, (o + 1) * 32), { dir: 'right' }))
  return { dynamic: !0, encoded: yt([Ft(A(Y(t), { size: 32 })), ...r]) }
}
function Sg(e, { param: t }) {
  let n = !1
  const r = []
  for (let o = 0; o < t.components.length; o++) {
    const i = t.components[o],
      s = Array.isArray(e) ? o : i.name,
      u = rl({ param: i, value: e[s] })
    r.push(u), u.dynamic && (n = !0)
  }
  return { dynamic: n, encoded: n ? ol(r) : yt(r.map(({ encoded: o }) => o)) }
}
function il(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/)
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
const sl = (e) => Wr(Lp(e), 0, 4)
function vo(e) {
  const { abi: t, args: n = [], name: r } = e,
    o = qe(r, { strict: !1 }),
    i = t.filter((u) =>
      o
        ? u.type === 'function'
          ? sl(u) === r
          : u.type === 'event'
            ? nl(u) === r
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
        return c ? Lu(l, c) : !1
      })
    ) {
      if (s && 'inputs' in s && s.inputs) {
        const l = Gp(u.inputs, s.inputs, n)
        if (l)
          throw new Ty({ abiItem: u, type: l[0] }, { abiItem: s, type: l[1] })
      }
      s = u
    }
  }
  return s || i[0]
}
function Lu(e, t) {
  const n = typeof e,
    r = t.type
  switch (r) {
    case 'address':
      return Ie(e, { strict: !1 })
    case 'bool':
      return n === 'boolean'
    case 'function':
      return n === 'string'
    case 'string':
      return n === 'string'
    default:
      return r === 'tuple' && 'components' in t
        ? Object.values(t.components).every((o, i) =>
            Lu(Object.values(e)[i], o),
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
                  Lu(o, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, '') }),
                )
              : !1
  }
}
function Gp(e, t, n) {
  for (const r in e) {
    const o = e[r],
      i = t[r]
    if (
      o.type === 'tuple' &&
      i.type === 'tuple' &&
      'components' in o &&
      'components' in i
    )
      return Gp(o.components, i.components, n[r])
    const s = [o.type, i.type]
    if (
      (() =>
        s.includes('address') && s.includes('bytes20')
          ? !0
          : s.includes('address') && s.includes('string')
            ? Ie(n[r], { strict: !1 })
            : s.includes('address') && s.includes('bytes')
              ? Ie(n[r], { strict: !1 })
              : !1)()
    )
      return s
  }
}
const qc = '/docs/contract/encodeEventTopics'
function wo(e) {
  var a
  const { abi: t, eventName: n, args: r } = e
  let o = t[0]
  if (n) {
    const l = vo({ abi: t, name: n })
    if (!l) throw new Mc(n, { docsPath: qc })
    o = l
  }
  if (o.type !== 'event') throw new Mc(void 0, { docsPath: qc })
  const i = ht(o),
    s = nl(i)
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
                ? f[d].map((g, v) => Qc({ param: c, value: f[d][v] }))
                : f[d]
                  ? Qc({ param: c, value: f[d] })
                  : null,
            )) ?? [])
  }
  return [s, ...u]
}
function Qc({ param: e, value: t }) {
  if (e.type === 'string' || e.type === 'bytes') return be(Rt(t))
  if (e.type === 'tuple' || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Ay(e.type)
  return go([e], [t])
}
function Ji(e, { method: t }) {
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
async function Hp(e, t) {
  const {
      address: n,
      abi: r,
      args: o,
      eventName: i,
      fromBlock: s,
      strict: u,
      toBlock: a,
    } = t,
    l = Ji(e, { method: 'eth_newFilter' }),
    f = i ? wo({ abi: r, args: o, eventName: i }) : void 0,
    c = await e.request({
      method: 'eth_newFilter',
      params: [
        {
          address: n,
          fromBlock: typeof s == 'bigint' ? A(s) : s,
          toBlock: typeof a == 'bigint' ? A(a) : a,
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
function Le(e) {
  return typeof e == 'string' ? { address: e, type: 'json-rpc' } : e
}
const Kc = '/docs/contract/encodeFunctionData'
function Cg(e) {
  const { abi: t, args: n, functionName: r } = e
  let o = t[0]
  if (r) {
    const i = vo({ abi: t, args: n, name: r })
    if (!i) throw new Ii(r, { docsPath: Kc })
    o = i
  }
  if (o.type !== 'function') throw new Ii(void 0, { docsPath: Kc })
  return { abi: [o], functionName: sl(ht(o)) }
}
function qt(e) {
  const { args: t } = e,
    { abi: n, functionName: r } = (() => {
      var u
      return e.abi.length === 1 &&
        (u = e.functionName) != null &&
        u.startsWith('0x')
        ? e
        : Cg(e)
    })(),
    o = n[0],
    i = r,
    s = 'inputs' in o && o.inputs ? go(o.inputs, t ?? []) : void 0
  return Zn([i, s ?? '0x'])
}
const Vp = {
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
  Tg = {
    inputs: [{ name: 'message', type: 'string' }],
    name: 'Error',
    type: 'error',
  },
  Ng = {
    inputs: [{ name: 'reason', type: 'uint256' }],
    name: 'Panic',
    type: 'error',
  }
class Yc extends k {
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
class Wp extends k {
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
class _g extends k {
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
const Ig = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: 1 / 0,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new _g({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      })
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Wp({ length: this.bytes.length, position: e })
  },
  decrementPosition(e) {
    if (e < 0) throw new Yc({ offset: e })
    const t = this.position - e
    this.assertPosition(t), (this.position = t)
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0
  },
  incrementPosition(e) {
    if (e < 0) throw new Yc({ offset: e })
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
function ul(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(Ig)
  return (
    (n.bytes = e),
    (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (n.positionReadCount = new Map()),
    (n.recursiveReadLimit = t),
    n
  )
}
function Og(e, t = {}) {
  typeof t.size < 'u' && tt(e, { size: t.size })
  const n = oe(e, t)
  return Xi(n, t)
}
function zg(e, t = {}) {
  let n = e
  if (
    (typeof t.size < 'u' && (tt(n, { size: t.size }), (n = Wn(n))),
    n.length > 1 || n[0] > 1)
  )
    throw new jy(n)
  return !!n[0]
}
function lt(e, t = {}) {
  typeof t.size < 'u' && tt(e, { size: t.size })
  const n = oe(e, t)
  return mt(n, t)
}
function Ag(e, t = {}) {
  let n = e
  return (
    typeof t.size < 'u' &&
      (tt(n, { size: t.size }), (n = Wn(n, { dir: 'right' }))),
    new TextDecoder().decode(n)
  )
}
function es(e, t) {
  const n = typeof t == 'string' ? Lt(t) : t,
    r = ul(n)
  if (Y(n) === 0 && e.length > 0) throw new Ki()
  if (Y(t) && Y(t) < 32)
    throw new Cp({
      data: typeof t == 'string' ? t : oe(t),
      params: e,
      size: Y(t),
    })
  let o = 0
  const i = []
  for (let s = 0; s < e.length; ++s) {
    const u = e[s]
    r.setPosition(o)
    const [a, l] = Bn(r, u, { staticPosition: 0 })
    ;(o += l), i.push(a)
  }
  return i
}
function Bn(e, t, { staticPosition: n }) {
  const r = il(t.type)
  if (r) {
    const [o, i] = r
    return Fg(e, { ...t, type: i }, { length: o, staticPosition: n })
  }
  if (t.type === 'tuple') return Lg(e, t, { staticPosition: n })
  if (t.type === 'address') return $g(e)
  if (t.type === 'bool') return jg(e)
  if (t.type.startsWith('bytes')) return Bg(e, t, { staticPosition: n })
  if (t.type.startsWith('uint') || t.type.startsWith('int')) return Rg(e, t)
  if (t.type === 'string') return Mg(e, { staticPosition: n })
  throw new Iy(t.type, { docsPath: '/docs/contract/decodeAbiParameters' })
}
const Xc = 32,
  Mu = 32
function $g(e) {
  const t = e.readBytes(32)
  return [Zi(oe(Up(t, -20))), 32]
}
function Fg(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const s = lt(e.readBytes(Mu)),
      u = r + s,
      a = u + Xc
    e.setPosition(u)
    const l = lt(e.readBytes(Xc)),
      f = qr(t)
    let c = 0
    const d = []
    for (let g = 0; g < l; ++g) {
      e.setPosition(a + (f ? g * 32 : c))
      const [v, y] = Bn(e, t, { staticPosition: a })
      ;(c += y), d.push(v)
    }
    return e.setPosition(r + 32), [d, 32]
  }
  if (qr(t)) {
    const s = lt(e.readBytes(Mu)),
      u = r + s,
      a = []
    for (let l = 0; l < n; ++l) {
      e.setPosition(u + l * 32)
      const [f] = Bn(e, t, { staticPosition: u })
      a.push(f)
    }
    return e.setPosition(r + 32), [a, 32]
  }
  let o = 0
  const i = []
  for (let s = 0; s < n; ++s) {
    const [u, a] = Bn(e, t, { staticPosition: r + o })
    ;(o += a), i.push(u)
  }
  return [i, o]
}
function jg(e) {
  return [zg(e.readBytes(32), { size: 32 }), 32]
}
function Bg(e, t, { staticPosition: n }) {
  const [r, o] = t.type.split('bytes')
  if (!o) {
    const s = lt(e.readBytes(32))
    e.setPosition(n + s)
    const u = lt(e.readBytes(32))
    if (u === 0) return e.setPosition(n + 32), ['0x', 32]
    const a = e.readBytes(u)
    return e.setPosition(n + 32), [oe(a), 32]
  }
  return [oe(e.readBytes(Number.parseInt(o), 32)), 32]
}
function Rg(e, t) {
  const n = t.type.startsWith('int'),
    r = Number.parseInt(t.type.split('int')[1] || '256'),
    o = e.readBytes(32)
  return [r > 48 ? Og(o, { signed: n }) : lt(o, { signed: n }), 32]
}
function Lg(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: s }) => !s),
    o = r ? [] : {}
  let i = 0
  if (qr(t)) {
    const s = lt(e.readBytes(Mu)),
      u = n + s
    for (let a = 0; a < t.components.length; ++a) {
      const l = t.components[a]
      e.setPosition(u + i)
      const [f, c] = Bn(e, l, { staticPosition: u })
      ;(i += c), (o[r ? a : l == null ? void 0 : l.name] = f)
    }
    return e.setPosition(n + 32), [o, 32]
  }
  for (let s = 0; s < t.components.length; ++s) {
    const u = t.components[s],
      [a, l] = Bn(e, u, { staticPosition: n })
    ;(o[r ? s : u == null ? void 0 : u.name] = a), (i += l)
  }
  return [o, i]
}
function Mg(e, { staticPosition: t }) {
  const n = lt(e.readBytes(32)),
    r = t + n
  e.setPosition(r)
  const o = lt(e.readBytes(32))
  if (o === 0) return e.setPosition(t + 32), ['', 32]
  const i = e.readBytes(o, 32),
    s = Ag(Wn(i))
  return e.setPosition(t + 32), [s, 32]
}
function qr(e) {
  var r
  const { type: t } = e
  if (t === 'string' || t === 'bytes' || t.endsWith('[]')) return !0
  if (t === 'tuple') return (r = e.components) == null ? void 0 : r.some(qr)
  const n = il(e.type)
  return !!(n && qr({ ...e, type: n[1] }))
}
function Dg(e) {
  const { abi: t, data: n } = e,
    r = Wr(n, 0, 4)
  if (r === '0x') throw new Ki()
  const i = [...(t || []), Tg, Ng].find(
    (s) => s.type === 'error' && r === sl(ht(s)),
  )
  if (!i) throw new Tp(r, { docsPath: '/docs/contract/decodeErrorResult' })
  return {
    abiItem: i,
    args:
      'inputs' in i && i.inputs && i.inputs.length > 0
        ? es(i.inputs, Wr(n, 4))
        : void 0,
    errorName: i.name,
  }
}
const ue = (e, t, n) =>
  JSON.stringify(
    e,
    (r, o) => {
      const i = typeof o == 'bigint' ? o.toString() : o
      return typeof t == 'function' ? t(r, i) : i
    },
    n,
  )
function qp({
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
            typeof t[i] == 'object' ? ue(t[i]) : t[i]
          }`,
      )
      .join(', ')})`
}
const Qp = { gwei: 9, wei: 18 },
  Ug = { ether: -9, wei: 9 }
function Kp(e, t) {
  let n = e.toString()
  const r = n.startsWith('-')
  r && (n = n.slice(1)), (n = n.padStart(t, '0'))
  let [o, i] = [n.slice(0, n.length - t), n.slice(n.length - t)]
  return (
    (i = i.replace(/(0+)$/, '')),
    `${r ? '-' : ''}${o || '0'}${i ? `.${i}` : ''}`
  )
}
function al(e, t = 'wei') {
  return Kp(e, Qp[t])
}
function ke(e, t = 'wei') {
  return Kp(e, Ug[t])
}
class Gg extends k {
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
class Hg extends k {
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
function Zc(e) {
  return e.reduce(
    (t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`,
    '',
  )
}
function Vg(e) {
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
            (o += Zc(r.state))),
          r.stateDiff &&
            ((o += `      stateDiff:
`),
            (o += Zc(r.stateDiff))),
          o
        )
      },
      `  State Override:
`,
    )
    .slice(0, -1)
}
function bo(e) {
  const t = Object.entries(e)
      .map(([r, o]) => (o === void 0 || o === !1 ? null : [r, o]))
      .filter(Boolean),
    n = t.reduce((r, [o]) => Math.max(r, o.length), 0)
  return t
    .map(([r, o]) => `  ${`${r}:`.padEnd(n + 1)}  ${o}`)
    .join(`
`)
}
class Wg extends k {
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
class qg extends k {
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
class Qg extends k {
  constructor({ transaction: t }) {
    super('Cannot infer a transaction type from provided transaction.', {
      metaMessages: [
        'Provided Transaction:',
        '{',
        bo(t),
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
class Kg extends k {
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
class Yg extends k {
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
    var v
    const g = bo({
      chain:
        o &&
        `${o == null ? void 0 : o.name} (id: ${o == null ? void 0 : o.id})`,
      from: n == null ? void 0 : n.address,
      to: c,
      value:
        typeof d < 'u' &&
        `${al(d)} ${
          ((v = o == null ? void 0 : o.nativeCurrency) == null
            ? void 0
            : v.symbol) || 'ETH'
        }`,
      data: i,
      gas: s,
      gasPrice: typeof u < 'u' && `${ke(u)} gwei`,
      maxFeePerGas: typeof a < 'u' && `${ke(a)} gwei`,
      maxPriorityFeePerGas: typeof l < 'u' && `${ke(l)} gwei`,
      nonce: f,
    })
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
        'Request Arguments:',
        g,
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
class Yp extends k {
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
class Xp extends k {
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
class Xg extends k {
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
class Zp extends k {
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
      stateOverride: g,
    },
  ) {
    var E
    const v = n ? Le(n) : void 0
    let y = bo({
      from: v == null ? void 0 : v.address,
      to: c,
      value:
        typeof d < 'u' &&
        `${al(d)} ${
          ((E = o == null ? void 0 : o.nativeCurrency) == null
            ? void 0
            : E.symbol) || 'ETH'
        }`,
      data: i,
      gas: s,
      gasPrice: typeof u < 'u' && `${ke(u)} gwei`,
      maxFeePerGas: typeof a < 'u' && `${ke(a)} gwei`,
      maxPriorityFeePerGas: typeof l < 'u' && `${ke(l)} gwei`,
      nonce: f,
    })
    g &&
      (y += `
${Vg(g)}`),
      super(t.shortMessage, {
        cause: t,
        docsPath: r,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
          'Raw Call Arguments:',
          y,
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
class Zg extends k {
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
    const a = vo({ abi: n, args: r, name: s }),
      l = a
        ? qp({ abiItem: a, args: r, includeFunctionName: !1, includeName: !1 })
        : void 0,
      f = a ? ht(a, { includeName: !0 }) : void 0,
      c = bo({
        address: o && wy(o),
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
class Du extends k {
  constructor({ abi: t, data: n, functionName: r, message: o }) {
    let i, s, u, a
    if (n && n !== '0x')
      try {
        s = Dg({ abi: t, data: n })
        const { abiItem: f, errorName: c, args: d } = s
        if (c === 'Error') a = d[0]
        else if (c === 'Panic') {
          const [g] = d
          a = Vp[g]
        } else {
          const g = f ? ht(f, { includeName: !0 }) : void 0,
            v =
              f && d
                ? qp({
                    abiItem: f,
                    args: d,
                    includeFunctionName: !1,
                    includeName: !1,
                  })
                : void 0
          u = [
            g ? `Error: ${g}` : '',
            v && v !== '()'
              ? `       ${[
                  ...Array((c == null ? void 0 : c.length) ?? 0).keys(),
                ]
                  .map(() => ' ')
                  .join('')}${v}`
              : '',
          ]
        }
      } catch (f) {
        i = f
      }
    else o && (a = o)
    let l
    i instanceof Tp &&
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
class Jg extends k {
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
class ll extends k {
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
class Tr extends k {
  constructor({ body: t, details: n, headers: r, status: o, url: i }) {
    super('HTTP request failed.', {
      details: n,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${Za(i)}`,
        t && `Request body: ${ue(t)}`,
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
class Jp extends k {
  constructor({ body: t, error: n, url: r }) {
    super('RPC Request failed.', {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${Za(r)}`, `Request body: ${ue(t)}`],
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
class Jc extends k {
  constructor({ body: t, url: n }) {
    super('The request took too long to respond.', {
      details: 'The request timed out.',
      metaMessages: [`URL: ${Za(n)}`, `Request body: ${ue(t)}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TimeoutError',
      })
  }
}
const ev = -1
class Se extends k {
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
      (this.code = t instanceof Jp ? t.code : n ?? ev)
  }
}
class Jn extends Se {
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
class Qr extends Se {
  constructor(t) {
    super(t, {
      code: Qr.code,
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
Object.defineProperty(Qr, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
})
class Kr extends Se {
  constructor(t) {
    super(t, {
      code: Kr.code,
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
Object.defineProperty(Kr, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
})
class Yr extends Se {
  constructor(t) {
    super(t, {
      code: Yr.code,
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
Object.defineProperty(Yr, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
})
class Xr extends Se {
  constructor(t) {
    super(t, {
      code: Xr.code,
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
Object.defineProperty(Xr, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
})
class dn extends Se {
  constructor(t) {
    super(t, {
      code: dn.code,
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
Object.defineProperty(dn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
})
class pn extends Se {
  constructor(t) {
    super(t, {
      code: pn.code,
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
Object.defineProperty(pn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
})
class Zr extends Se {
  constructor(t) {
    super(t, { code: Zr.code, shortMessage: 'Requested resource not found.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'ResourceNotFoundRpcError',
      })
  }
}
Object.defineProperty(Zr, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
})
class Jr extends Se {
  constructor(t) {
    super(t, {
      code: Jr.code,
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
Object.defineProperty(Jr, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
})
class eo extends Se {
  constructor(t) {
    super(t, { code: eo.code, shortMessage: 'Transaction creation failed.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'TransactionRejectedRpcError',
      })
  }
}
Object.defineProperty(eo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
})
class to extends Se {
  constructor(t) {
    super(t, { code: to.code, shortMessage: 'Method is not implemented.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'MethodNotSupportedRpcError',
      })
  }
}
Object.defineProperty(to, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
})
class qn extends Se {
  constructor(t) {
    super(t, { code: qn.code, shortMessage: 'Request exceeds defined limit.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'LimitExceededRpcError',
      })
  }
}
Object.defineProperty(qn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
})
class no extends Se {
  constructor(t) {
    super(t, {
      code: no.code,
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
Object.defineProperty(no, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
})
class Rn extends Jn {
  constructor(t) {
    super(t, { code: Rn.code, shortMessage: 'User rejected the request.' }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'UserRejectedRequestError',
      })
  }
}
Object.defineProperty(Rn, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
})
class ro extends Jn {
  constructor(t) {
    super(t, {
      code: ro.code,
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
Object.defineProperty(ro, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
})
class oo extends Jn {
  constructor(t) {
    super(t, {
      code: oo.code,
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
Object.defineProperty(oo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
})
class io extends Jn {
  constructor(t) {
    super(t, {
      code: io.code,
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
Object.defineProperty(io, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
})
class so extends Jn {
  constructor(t) {
    super(t, {
      code: so.code,
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
Object.defineProperty(so, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
})
class uo extends Jn {
  constructor(t) {
    super(t, {
      code: uo.code,
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
Object.defineProperty(uo, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
})
class tv extends Se {
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
const nv = 3
function ao(
  e,
  { abi: t, address: n, args: r, docsPath: o, functionName: i, sender: s },
) {
  const {
      code: u,
      data: a,
      message: l,
      shortMessage: f,
    } = e instanceof ll
      ? e
      : e instanceof k
        ? e.walk((d) => 'data' in d) || e.walk()
        : {},
    c = (() =>
      e instanceof Ki
        ? new Jg({ functionName: i })
        : [nv, dn.code].includes(u) && (a || l || f)
          ? new Du({
              abi: t,
              data: typeof a == 'object' ? a.data : a,
              functionName: i,
              message: f ?? l,
            })
          : e)()
  return new Zg(c, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: o,
    functionName: i,
    sender: s,
  })
}
class rv extends k {
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
    var v
    const g = bo({
      from: n == null ? void 0 : n.address,
      to: c,
      value:
        typeof d < 'u' &&
        `${al(d)} ${
          ((v = o == null ? void 0 : o.nativeCurrency) == null
            ? void 0
            : v.symbol) || 'ETH'
        }`,
      data: i,
      gas: s,
      gasPrice: typeof u < 'u' && `${ke(u)} gwei`,
      maxFeePerGas: typeof a < 'u' && `${ke(a)} gwei`,
      maxPriorityFeePerGas: typeof l < 'u' && `${ke(l)} gwei`,
      nonce: f,
    })
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, ' '] : []),
        'Estimate Gas Arguments:',
        g,
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
class In extends k {
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
Object.defineProperty(In, 'code', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
})
Object.defineProperty(In, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
})
class hn extends k {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${ke(n)} gwei` : ''
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
Object.defineProperty(hn, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
})
class Uu extends k {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${ke(n)}` : ''
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
Object.defineProperty(Uu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
})
class Gu extends k {
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
Object.defineProperty(Gu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
})
class Hu extends k {
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
Object.defineProperty(Hu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
})
class Vu extends k {
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
Object.defineProperty(Vu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
})
class Wu extends k {
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
Object.defineProperty(Wu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/,
})
class qu extends k {
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
Object.defineProperty(qu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
})
class Qu extends k {
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
Object.defineProperty(Qu, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
})
class Ku extends k {
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
Object.defineProperty(Ku, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
})
class lo extends k {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          n ? ` = ${ke(n)} gwei` : ''
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          r ? ` = ${ke(r)} gwei` : ''
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
Object.defineProperty(lo, 'nodeMessage', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
})
class ts extends k {
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
function cl(e, t) {
  const n = (e.details || '').toLowerCase(),
    r = e instanceof k ? e.walk((o) => o.code === In.code) : e
  return r instanceof k
    ? new In({ cause: e, message: r.details })
    : In.nodeMessage.test(n)
      ? new In({ cause: e, message: e.details })
      : hn.nodeMessage.test(n)
        ? new hn({
            cause: e,
            maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
          })
        : Uu.nodeMessage.test(n)
          ? new Uu({
              cause: e,
              maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
            })
          : Gu.nodeMessage.test(n)
            ? new Gu({ cause: e, nonce: t == null ? void 0 : t.nonce })
            : Hu.nodeMessage.test(n)
              ? new Hu({ cause: e, nonce: t == null ? void 0 : t.nonce })
              : Vu.nodeMessage.test(n)
                ? new Vu({ cause: e, nonce: t == null ? void 0 : t.nonce })
                : Wu.nodeMessage.test(n)
                  ? new Wu({ cause: e })
                  : qu.nodeMessage.test(n)
                    ? new qu({ cause: e, gas: t == null ? void 0 : t.gas })
                    : Qu.nodeMessage.test(n)
                      ? new Qu({ cause: e, gas: t == null ? void 0 : t.gas })
                      : Ku.nodeMessage.test(n)
                        ? new Ku({ cause: e })
                        : lo.nodeMessage.test(n)
                          ? new lo({
                              cause: e,
                              maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
                              maxPriorityFeePerGas:
                                t == null ? void 0 : t.maxPriorityFeePerGas,
                            })
                          : new ts({ cause: e })
}
function ov(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = cl(e, n)
    return o instanceof ts ? e : o
  })()
  return new rv(r, { docsPath: t, ...n })
}
function fl(e, { format: t }) {
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
const iv = { legacy: '0x0', eip2930: '0x1', eip1559: '0x2', eip4844: '0x3' }
function ns(e) {
  const t = { ...e }
  return (
    typeof e.blobs < 'u' &&
      typeof e.blobs[0] != 'string' &&
      (t.blobs = e.blobs.map((n) => oe(n))),
    typeof e.gas < 'u' && (t.gas = A(e.gas)),
    typeof e.gasPrice < 'u' && (t.gasPrice = A(e.gasPrice)),
    typeof e.maxFeePerBlobGas < 'u' &&
      (t.maxFeePerBlobGas = A(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < 'u' && (t.maxFeePerGas = A(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < 'u' &&
      (t.maxPriorityFeePerGas = A(e.maxPriorityFeePerGas)),
    typeof e.nonce < 'u' && (t.nonce = A(e.nonce)),
    typeof e.type < 'u' && (t.type = iv[e.type]),
    typeof e.value < 'u' && (t.value = A(e.value)),
    t
  )
}
function xo(e) {
  const {
      account: t,
      gasPrice: n,
      maxFeePerGas: r,
      maxPriorityFeePerGas: o,
      to: i,
    } = e,
    s = t ? Le(t) : void 0
  if (s && !Ie(s.address)) throw new et({ address: s.address })
  if (i && !Ie(i)) throw new et({ address: i })
  if (typeof n < 'u' && (typeof r < 'u' || typeof o < 'u')) throw new Wg()
  if (r && r > 2n ** 256n - 1n) throw new hn({ maxFeePerGas: r })
  if (o && r && o > r)
    throw new lo({ maxFeePerGas: r, maxPriorityFeePerGas: o })
}
class sv extends k {
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
class dl extends k {
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
class uv extends k {
  constructor({ maxPriorityFeePerGas: t }) {
    super(
      `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${ke(
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
class e0 extends k {
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
const t0 = {
  '0x0': 'legacy',
  '0x1': 'eip2930',
  '0x2': 'eip1559',
  '0x3': 'eip4844',
}
function n0(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? mt(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? mt(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? t0[e.type] : void 0,
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
function r0(e) {
  var n
  const t =
    (n = e.transactions) == null
      ? void 0
      : n.map((r) => (typeof r == 'string' ? r : n0(r)))
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
async function Mt(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: o } = {},
) {
  var f, c, d
  const i = r ?? 'latest',
    s = o ?? !1,
    u = n !== void 0 ? A(n) : void 0
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
    throw new e0({ blockHash: t, blockNumber: n })
  return (
    ((d =
      (c = (f = e.chain) == null ? void 0 : f.formatters) == null
        ? void 0
        : c.block) == null
      ? void 0
      : d.format) || r0
  )(a)
}
async function pl(e) {
  const t = await e.request({ method: 'eth_gasPrice' })
  return BigInt(t)
}
async function av(e, t) {
  return o0(e, t)
}
async function o0(e, t) {
  var i, s, u
  const { block: n, chain: r = e.chain, request: o } = t || {}
  if (
    typeof ((i = r == null ? void 0 : r.fees) == null
      ? void 0
      : i.defaultPriorityFee) == 'function'
  ) {
    const a = n || (await O(e, Mt, 'getBlock')({}))
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
    return Xi(a)
  } catch {
    const [a, l] = await Promise.all([
      n ? Promise.resolve(n) : O(e, Mt, 'getBlock')({}),
      O(e, pl, 'getGasPrice')({}),
    ])
    if (typeof a.baseFeePerGas != 'bigint') throw new dl()
    const f = l - a.baseFeePerGas
    return f < 0n ? 0n : f
  }
}
async function lv(e, t) {
  return Yu(e, t)
}
async function Yu(e, t) {
  var d, g
  const {
      block: n,
      chain: r = e.chain,
      request: o,
      type: i = 'eip1559',
    } = t || {},
    s = await (async () => {
      var v, y
      return typeof ((v = r == null ? void 0 : r.fees) == null
        ? void 0
        : v.baseFeeMultiplier) == 'function'
        ? r.fees.baseFeeMultiplier({ block: n, client: e, request: o })
        : ((y = r == null ? void 0 : r.fees) == null
            ? void 0
            : y.baseFeeMultiplier) ?? 1.2
    })()
  if (s < 1) throw new sv()
  const a =
      10 **
      (((d = s.toString().split('.')[1]) == null ? void 0 : d.length) ?? 0),
    l = (v) => (v * BigInt(Math.ceil(s * a))) / BigInt(a),
    f = n || (await O(e, Mt, 'getBlock')({}))
  if (
    typeof ((g = r == null ? void 0 : r.fees) == null
      ? void 0
      : g.estimateFeesPerGas) == 'function'
  )
    return r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: l,
      request: o,
      type: i,
    })
  if (i === 'eip1559') {
    if (typeof f.baseFeePerGas != 'bigint') throw new dl()
    const v =
        typeof (o == null ? void 0 : o.maxPriorityFeePerGas) == 'bigint'
          ? o.maxPriorityFeePerGas
          : await o0(e, { block: f, chain: r, request: o }),
      y = l(f.baseFeePerGas)
    return {
      maxFeePerGas: (o == null ? void 0 : o.maxFeePerGas) ?? y + v,
      maxPriorityFeePerGas: v,
    }
  }
  return {
    gasPrice:
      (o == null ? void 0 : o.gasPrice) ?? l(await O(e, pl, 'getGasPrice')({})),
  }
}
async function i0(e, { address: t, blockTag: n = 'latest', blockNumber: r }) {
  const o = await e.request({
    method: 'eth_getTransactionCount',
    params: [t, r ? A(r) : n],
  })
  return mt(o)
}
function s0(e) {
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
  throw new Qg({ transaction: e })
}
async function Po(e) {
  const t = await e.request({ method: 'eth_chainId' })
  return mt(t)
}
async function rs(e, t) {
  const {
      account: n = e.account,
      chain: r,
      chainId: o,
      gas: i,
      nonce: s,
      parameters: u = ['chainId', 'fees', 'gas', 'nonce', 'type'],
      type: a,
    } = t,
    l = n ? Le(n) : void 0,
    f = await O(e, Mt, 'getBlock')({ blockTag: 'latest' }),
    c = { ...t, ...(l ? { from: l == null ? void 0 : l.address } : {}) }
  if (
    (u.includes('chainId') &&
      (r
        ? (c.chainId = r.id)
        : typeof o < 'u'
          ? (c.chainId = o)
          : (c.chainId = await O(e, Po, 'getChainId')({}))),
    u.includes('nonce') &&
      typeof s > 'u' &&
      l &&
      (c.nonce = await O(
        e,
        i0,
        'getTransactionCount',
      )({ address: l.address, blockTag: 'pending' })),
    (u.includes('fees') || u.includes('type')) && typeof a > 'u')
  )
    try {
      c.type = s0(c)
    } catch {
      c.type = typeof f.baseFeePerGas == 'bigint' ? 'eip1559' : 'legacy'
    }
  if (u.includes('fees'))
    if (c.type === 'eip1559' || c.type === 'eip4844') {
      const { maxFeePerGas: d, maxPriorityFeePerGas: g } = await Yu(e, {
        block: f,
        chain: r,
        request: c,
      })
      if (
        typeof t.maxPriorityFeePerGas > 'u' &&
        t.maxFeePerGas &&
        t.maxFeePerGas < g
      )
        throw new uv({ maxPriorityFeePerGas: g })
      ;(c.maxPriorityFeePerGas = g), (c.maxFeePerGas = d)
    } else {
      if (typeof t.maxFeePerGas < 'u' || typeof t.maxPriorityFeePerGas < 'u')
        throw new dl()
      const { gasPrice: d } = await Yu(e, {
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
      (c.gas = await O(
        e,
        hl,
        'estimateGas',
      )({
        ...c,
        account: l ? { address: l.address, type: 'json-rpc' } : void 0,
      })),
    xo(c),
    delete c.parameters,
    c
  )
}
async function hl(e, t) {
  var o, i, s
  const n = t.account ?? e.account,
    r = n ? Le(n) : void 0
  try {
    const {
        accessList: u,
        blobs: a,
        blockNumber: l,
        blockTag: f,
        data: c,
        gas: d,
        gasPrice: g,
        maxFeePerBlobGas: v,
        maxFeePerGas: y,
        maxPriorityFeePerGas: E,
        nonce: h,
        to: p,
        value: m,
        ...w
      } = (r == null ? void 0 : r.type) === 'local' ? await rs(e, t) : t,
      x = (l ? A(l) : void 0) || f
    xo(t)
    const b =
        (s =
          (i = (o = e.chain) == null ? void 0 : o.formatters) == null
            ? void 0
            : i.transactionRequest) == null
          ? void 0
          : s.format,
      _ = (b || ns)({
        ...fl(w, { format: b }),
        from: r == null ? void 0 : r.address,
        accessList: u,
        blobs: a,
        data: c,
        gas: d,
        gasPrice: g,
        maxFeePerBlobGas: v,
        maxFeePerGas: y,
        maxPriorityFeePerGas: E,
        nonce: h,
        to: p,
        value: m,
      }),
      I = await e.request({
        method: 'eth_estimateGas',
        params: x ? [_, x] : [_],
      })
    return BigInt(I)
  } catch (u) {
    throw ov(u, { ...t, account: r, chain: e.chain })
  }
}
async function cv(e, t) {
  const { abi: n, address: r, args: o, functionName: i, ...s } = t,
    u = qt({ abi: n, args: o, functionName: i })
  try {
    return await O(e, hl, 'estimateGas')({ data: u, to: r, ...s })
  } catch (a) {
    const l = s.account ? Le(s.account) : void 0
    throw ao(a, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/estimateContractGas',
      functionName: i,
      sender: l == null ? void 0 : l.address,
    })
  }
}
const ef = '/docs/contract/decodeEventLog'
function ml(e) {
  const { abi: t, data: n, strict: r, topics: o } = e,
    i = r ?? !0,
    [s, ...u] = o
  if (!s) throw new Sy({ docsPath: ef })
  const a = t.find((y) => y.type === 'event' && s === nl(ht(y)))
  if (!(a && 'name' in a) || a.type !== 'event')
    throw new Np(s, { docsPath: ef })
  const { name: l, inputs: f } = a,
    c = f == null ? void 0 : f.some((y) => !('name' in y && y.name))
  let d = c ? [] : {}
  const g = f.filter((y) => 'indexed' in y && y.indexed)
  for (let y = 0; y < g.length; y++) {
    const E = g[y],
      h = u[y]
    if (!h) throw new Yi({ abiItem: a, param: E })
    d[E.name || y] = fv({ param: E, value: h })
  }
  const v = f.filter((y) => !('indexed' in y && y.indexed))
  if (v.length > 0) {
    if (n && n !== '0x')
      try {
        const y = es(v, n)
        if (y)
          if (c) d = [...d, ...y]
          else for (let E = 0; E < v.length; E++) d[v[E].name] = y[E]
      } catch (y) {
        if (i)
          throw y instanceof Cp || y instanceof Wp
            ? new Vr({ abiItem: a, data: n, params: v, size: Y(n) })
            : y
      }
    else if (i) throw new Vr({ abiItem: a, data: '0x', params: v, size: 0 })
  }
  return { eventName: l, args: Object.values(d).length > 0 ? d : void 0 }
}
function fv({ param: e, value: t }) {
  return e.type === 'string' ||
    e.type === 'bytes' ||
    e.type === 'tuple' ||
    e.type.match(/^(.*)\[(\d+)?\]$/)
    ? t
    : (es([e], t) || [])[0]
}
function yl({ abi: e, eventName: t, logs: n, strict: r = !0 }) {
  return n
    .map((o) => {
      var i
      try {
        const s = ml({ ...o, abi: e, strict: r })
        return t && !t.includes(s.eventName) ? null : { ...s, ...o }
      } catch (s) {
        let u, a
        if (s instanceof Np) return null
        if (s instanceof Vr || s instanceof Yi) {
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
function Dt(e, { args: t, eventName: n } = {}) {
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
async function gl(
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
    ((c = [f.flatMap((v) => wo({ abi: [v], eventName: v.name, args: u }))]),
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
            fromBlock: typeof r == 'bigint' ? A(r) : r,
            toBlock: typeof o == 'bigint' ? A(o) : o,
          },
        ],
      }))
  const g = d.map((v) => Dt(v))
  return f ? yl({ abi: f, logs: g, strict: l }) : g
}
async function u0(e, t) {
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
    f = s ? vo({ abi: n, name: s }) : void 0,
    c = f ? void 0 : n.filter((d) => d.type === 'event')
  return O(
    e,
    gl,
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
const Ds = '/docs/contract/decodeFunctionResult'
function er(e) {
  const { abi: t, args: n, functionName: r, data: o } = e
  let i = t[0]
  if (r) {
    const u = vo({ abi: t, args: n, name: r })
    if (!u) throw new Ii(r, { docsPath: Ds })
    i = u
  }
  if (i.type !== 'function') throw new Ii(void 0, { docsPath: Ds })
  if (!i.outputs) throw new Cy(i.name, { docsPath: Ds })
  const s = es(i.outputs, o)
  if (s && s.length > 1) return s
  if (s && s.length === 1) return s[0]
}
const dv = 'modulepreload',
  pv = (e) => '/' + e,
  tf = {},
  hv = (t, n, r) => {
    if (!n || n.length === 0) return t()
    const o = document.getElementsByTagName('link')
    return Promise.all(
      n.map((i) => {
        if (((i = pv(i)), i in tf)) return
        tf[i] = !0
        const s = i.endsWith('.css'),
          u = s ? '[rel="stylesheet"]' : ''
        if (!!r)
          for (let f = o.length - 1; f >= 0; f--) {
            const c = o[f]
            if (c.href === i && (!s || c.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${i}"]${u}`)) return
        const l = document.createElement('link')
        if (
          ((l.rel = s ? 'stylesheet' : dv),
          s || ((l.as = 'script'), (l.crossOrigin = '')),
          (l.href = i),
          document.head.appendChild(l),
          s)
        )
          return new Promise((f, c) => {
            l.addEventListener('load', f),
              l.addEventListener('error', () =>
                c(new Error(`Unable to preload CSS for ${i}`)),
              )
          })
      }),
    )
      .then(() => t())
      .catch((i) => {
        const s = new Event('vite:preloadError', { cancelable: !0 })
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented))
          throw i
      })
  },
  Xu = [
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
  a0 = [
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
  l0 = [
    ...a0,
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
  mv = [
    ...a0,
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
  nf = [
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
  rf = [
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
  yv = [
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
  gv = '0x82ad56cb'
class Zu extends k {
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
class vv extends k {
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
class wv extends k {
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
class c0 extends k {
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
class vl extends k {
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
function tr({ blockNumber: e, chain: t, contract: n }) {
  var o
  const r = (o = t == null ? void 0 : t.contracts) == null ? void 0 : o[n]
  if (!r) throw new Zu({ chain: t, contract: { name: n } })
  if (e && r.blockCreated && r.blockCreated > e)
    throw new Zu({
      blockNumber: e,
      chain: t,
      contract: { name: n, blockCreated: r.blockCreated },
    })
  return r.address
}
function bv(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = cl(e, n)
    return o instanceof ts ? e : o
  })()
  return new Zp(r, { docsPath: t, ...n })
}
const Us = new Map()
function f0({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: o }) {
  const i = async () => {
      const f = a()
      s()
      const c = f.map(({ args: d }) => d)
      c.length !== 0 &&
        e(c)
          .then((d) => {
            var g
            o && Array.isArray(d) && d.sort(o)
            for (let v = 0; v < f.length; v++) {
              const { pendingPromise: y } = f[v]
              ;(g = y.resolve) == null || g.call(y, [d[v], d])
            }
          })
          .catch((d) => {
            var g
            for (let v = 0; v < f.length; v++) {
              const { pendingPromise: y } = f[v]
              ;(g = y.reject) == null || g.call(y, d)
            }
          })
    },
    s = () => Us.delete(t),
    u = () => a().map(({ args: f }) => f),
    a = () => Us.get(t) || [],
    l = (f) => Us.set(t, [...a(), f])
  return {
    flush: s,
    async schedule(f) {
      const c = {},
        d = new Promise((y, E) => {
          ;(c.resolve = y), (c.reject = E)
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
async function os(e, t) {
  var w, P, x, b
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
      maxPriorityFeePerGas: g,
      nonce: v,
      to: y,
      value: E,
      stateOverride: h,
      ...p
    } = t,
    m = n ? Le(n) : void 0
  try {
    xo(t)
    const _ = (o ? A(o) : void 0) || i,
      I = Sv(h),
      R =
        (b =
          (x = (P = e.chain) == null ? void 0 : P.formatters) == null
            ? void 0
            : x.transactionRequest) == null
          ? void 0
          : b.format,
      ee = (R || ns)({
        ...fl(p, { format: R }),
        from: m == null ? void 0 : m.address,
        accessList: s,
        blobs: u,
        data: a,
        gas: l,
        gasPrice: f,
        maxFeePerBlobGas: c,
        maxFeePerGas: d,
        maxPriorityFeePerGas: g,
        nonce: v,
        to: y,
        value: E,
      })
    if (r && xv({ request: ee }) && !I)
      try {
        return await Pv(e, { ...ee, blockNumber: o, blockTag: i })
      } catch (nr) {
        if (!(nr instanceof c0) && !(nr instanceof Zu)) throw nr
      }
    const Qt = await e.request({
      method: 'eth_call',
      params: I ? [ee, _, I] : [ee, _],
    })
    return Qt === '0x' ? { data: void 0 } : { data: Qt }
  } catch (C) {
    const _ = Ev(C),
      { offchainLookup: I, offchainLookupSignature: R } = await hv(
        () => import('./ccip-4d4f8bcf.js'),
        [],
      )
    if ((_ == null ? void 0 : _.slice(0, 10)) === R && y)
      return { data: await I(e, { data: _, to: y }) }
    throw bv(C, { ...t, account: m, chain: e.chain })
  }
}
function xv({ request: e }) {
  const { data: t, to: n, ...r } = e
  return !(
    !t ||
    t.startsWith(gv) ||
    !n ||
    Object.values(r).filter((o) => typeof o < 'u').length > 0
  )
}
async function Pv(e, t) {
  var y
  const { batchSize: n = 1024, wait: r = 0 } =
      typeof ((y = e.batch) == null ? void 0 : y.multicall) == 'object'
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
    if (!e.chain) throw new c0()
    l = tr({ blockNumber: o, chain: e.chain, contract: 'multicall3' })
  }
  const c = (o ? A(o) : void 0) || i,
    { schedule: d } = f0({
      id: `${e.uid}.${c}`,
      wait: r,
      shouldSplitBatch(E) {
        return E.reduce((p, { data: m }) => p + (m.length - 2), 0) > n * 2
      },
      fn: async (E) => {
        const h = E.map((w) => ({
            allowFailure: !0,
            callData: w.data,
            target: w.to,
          })),
          p = qt({ abi: Xu, args: [h], functionName: 'aggregate3' }),
          m = await e.request({
            method: 'eth_call',
            params: [{ data: p, to: l }, c],
          })
        return er({
          abi: Xu,
          args: [h],
          functionName: 'aggregate3',
          data: m || '0x',
        })
      },
    }),
    [{ returnData: g, success: v }] = await d({ data: s, to: a })
  if (!v) throw new ll({ data: g })
  return g === '0x' ? { data: void 0 } : { data: g }
}
function Ev(e) {
  var n
  if (!(e instanceof k)) return
  const t = e.walk()
  return typeof (t == null ? void 0 : t.data) == 'object'
    ? (n = t.data) == null
      ? void 0
      : n.data
    : t.data
}
function of(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Dc({ size: n.length, targetSize: 66, type: 'hex' })
      if (r.length !== 66)
        throw new Dc({ size: r.length, targetSize: 66, type: 'hex' })
      return (t[n] = r), t
    }, {})
}
function kv(e) {
  const { balance: t, nonce: n, state: r, stateDiff: o, code: i } = e,
    s = {}
  if (
    (i !== void 0 && (s.code = i),
    t !== void 0 && (s.balance = A(t, { size: 32 })),
    n !== void 0 && (s.nonce = A(n, { size: 8 })),
    r !== void 0 && (s.state = of(r)),
    o !== void 0)
  ) {
    if (s.state) throw new Hg()
    s.stateDiff = of(o)
  }
  return s
}
function Sv(e) {
  if (!e) return
  const t = {}
  for (const { address: n, ...r } of e) {
    if (!Ie(n, { strict: !1 })) throw new et({ address: n })
    if (t[n]) throw new Gg({ address: n })
    t[n] = kv(r)
  }
  return t
}
async function Ut(e, t) {
  const { abi: n, address: r, args: o, functionName: i, ...s } = t,
    u = qt({ abi: n, args: o, functionName: i })
  try {
    const { data: a } = await O(e, os, 'call')({ ...s, data: u, to: r })
    return er({ abi: n, args: o, functionName: i, data: a || '0x' })
  } catch (a) {
    throw ao(a, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/readContract',
      functionName: i,
    })
  }
}
async function Cv(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      dataSuffix: i,
      functionName: s,
      ...u
    } = t,
    a = u.account ? Le(u.account) : e.account,
    l = qt({ abi: n, args: o, functionName: s })
  try {
    const { data: f } = await O(
        e,
        os,
        'call',
      )({
        batch: !1,
        data: `${l}${i ? i.replace('0x', '') : ''}`,
        to: r,
        ...u,
        account: a,
      }),
      c = er({ abi: n, args: o, functionName: s, data: f || '0x' }),
      d = n.filter((g) => 'name' in g && g.name === t.functionName)
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
    throw ao(f, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/simulateContract',
      functionName: s,
      sender: a == null ? void 0 : a.address,
    })
  }
}
const Gs = new Map(),
  sf = new Map()
let Tv = 0
function Gt(e, t, n) {
  const r = ++Tv,
    o = () => Gs.get(e) || [],
    i = () => {
      const f = o()
      Gs.set(
        e,
        f.filter((c) => c.id !== r),
      )
    },
    s = () => {
      const f = sf.get(e)
      o().length === 1 && f && f(), i()
    },
    u = o()
  if ((Gs.set(e, [...u, { id: r, fns: t }]), u && u.length > 0)) return s
  const a = {}
  for (const f in t)
    a[f] = (...c) => {
      var g, v
      const d = o()
      if (d.length !== 0)
        for (const y of d) (v = (g = y.fns)[f]) == null || v.call(g, ...c)
    }
  const l = n(a)
  return typeof l == 'function' && sf.set(e, l), s
}
async function Ju(e) {
  return new Promise((t) => setTimeout(t, e))
}
function Eo(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let o = !0
  const i = () => (o = !1)
  return (
    (async () => {
      let u
      t && (u = await e({ unpoll: i }))
      const a = (await (n == null ? void 0 : n(u))) ?? r
      await Ju(a)
      const l = async () => {
        o && (await e({ unpoll: i }), await Ju(r), l())
      }
      l()
    })(),
    i
  )
}
const Nv = new Map(),
  _v = new Map()
function Iv(e) {
  const t = (o, i) => ({
      clear: () => i.delete(o),
      get: () => i.get(o),
      set: (s) => i.set(o, s),
    }),
    n = t(e, Nv),
    r = t(e, _v)
  return {
    clear: () => {
      n.clear(), r.clear()
    },
    promise: n,
    response: r,
  }
}
async function Ov(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
  const r = Iv(t),
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
const zv = (e) => `blockNumber.${e}`
async function ko(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await Ov(() => e.request({ method: 'eth_blockNumber' }), {
    cacheKey: zv(e.uid),
    cacheTime: t,
  })
  return BigInt(n)
}
async function is(e, { filter: t }) {
  const n = 'strict' in t && t.strict,
    r = await t.request({ method: 'eth_getFilterChanges', params: [t.id] })
  if (typeof r[0] == 'string') return r
  const o = r.map((i) => Dt(i))
  return !('abi' in t) || !t.abi ? o : yl({ abi: t.abi, logs: o, strict: n })
}
async function ss(e, { filter: t }) {
  return t.request({ method: 'eth_uninstallFilter', params: [t.id] })
}
function Av(e, t) {
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
        const y = c ?? !1,
          E = ue(['watchContractEvent', r, o, i, e.uid, s, f, y])
        return Gt(E, { onLogs: a, onError: u }, (h) => {
          let p,
            m,
            w = !1
          const P = Eo(
            async () => {
              var x
              if (!w) {
                try {
                  m = await O(
                    e,
                    Hp,
                    'createContractEventFilter',
                  )({ abi: n, address: r, args: o, eventName: s, strict: y })
                } catch {}
                w = !0
                return
              }
              try {
                let b
                if (m) b = await O(e, is, 'getFilterChanges')({ filter: m })
                else {
                  const C = await O(e, ko, 'getBlockNumber')({})
                  p && p !== C
                    ? (b = await O(
                        e,
                        u0,
                        'getContractEvents',
                      )({
                        abi: n,
                        address: r,
                        args: o,
                        eventName: s,
                        fromBlock: p + 1n,
                        toBlock: C,
                        strict: y,
                      }))
                    : (b = []),
                    (p = C)
                }
                if (b.length === 0) return
                if (i) h.onLogs(b)
                else for (const C of b) h.onLogs([C])
              } catch (b) {
                m && b instanceof pn && (w = !1),
                  (x = h.onError) == null || x.call(h, b)
              }
            },
            { emitOnBegin: !0, interval: f },
          )
          return async () => {
            m && (await O(e, ss, 'uninstallFilter')({ filter: m })), P()
          }
        })
      })()
    : (() => {
        const y = c ?? !1,
          E = ue(['watchContractEvent', r, o, i, e.uid, s, f, y])
        let h = !0,
          p = () => (h = !1)
        return Gt(
          E,
          { onLogs: a, onError: u },
          (m) => (
            (async () => {
              try {
                const w = s ? wo({ abi: n, eventName: s, args: o }) : [],
                  { unsubscribe: P } = await e.transport.subscribe({
                    params: ['logs', { address: r, topics: w }],
                    onData(x) {
                      var C
                      if (!h) return
                      const b = x.result
                      try {
                        const { eventName: _, args: I } = ml({
                            abi: n,
                            data: b.data,
                            topics: b.topics,
                            strict: c,
                          }),
                          R = Dt(b, { args: I, eventName: _ })
                        m.onLogs([R])
                      } catch (_) {
                        let I, R
                        if (_ instanceof Vr || _ instanceof Yi) {
                          if (c) return
                          ;(I = _.abiItem.name),
                            (R =
                              (C = _.abiItem.inputs) == null
                                ? void 0
                                : C.some((ee) => !('name' in ee && ee.name)))
                        }
                        const pe = Dt(b, { args: R ? [] : {}, eventName: I })
                        m.onLogs([pe])
                      }
                    },
                    onError(x) {
                      var b
                      ;(b = m.onError) == null || b.call(m, x)
                    },
                  })
                ;(p = P), h || p()
              } catch (w) {
                u == null || u(w)
              }
            })(),
            () => p()
          ),
        )
      })()
}
class us extends k {
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
class $v extends k {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3ConnectionError')
  }
}
class Fv extends k {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3PolicyViolationError')
  }
}
class jv extends k {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3ConfigurationError')
  }
}
function d0(e) {
  const { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == 'string' ? 'hex' : 'bytes'),
    r = typeof e.blobs[0] == 'string' ? e.blobs.map((i) => Lt(i)) : e.blobs,
    o = []
  for (const i of r) o.push(Uint8Array.from(t.blobToKzgCommitment(i)))
  return n === 'bytes' ? o : o.map((i) => oe(i))
}
function p0(e) {
  const { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == 'string' ? 'hex' : 'bytes'),
    r = typeof e.blobs[0] == 'string' ? e.blobs.map((s) => Lt(s)) : e.blobs,
    o =
      typeof e.commitments[0] == 'string'
        ? e.commitments.map((s) => Lt(s))
        : e.commitments,
    i = []
  for (let s = 0; s < r.length; s++) {
    const u = r[s],
      a = o[s]
    i.push(Uint8Array.from(t.computeBlobKzgProof(u, a)))
  }
  return n === 'bytes' ? i : i.map((s) => oe(s))
}
function Bv(e, t, n, r) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, n, r)
  const o = BigInt(32),
    i = BigInt(4294967295),
    s = Number((n >> o) & i),
    u = Number(n & i),
    a = r ? 4 : 0,
    l = r ? 0 : 4
  e.setUint32(t + a, s, r), e.setUint32(t + l, u, r)
}
class Rv extends $p {
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
      (this.view = Ls(this.buffer))
  }
  update(t) {
    Oi(this)
    const { view: n, buffer: r, blockLen: o } = this
    t = el(t)
    const i = t.length
    for (let s = 0; s < i; ) {
      const u = Math.min(o - this.pos, i - s)
      if (u === o) {
        const a = Ls(t)
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
    Oi(this), Ap(t, this), (this.finished = !0)
    const { buffer: n, view: r, blockLen: o, isLE: i } = this
    let { pos: s } = this
    ;(n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > o - s && (this.process(r, 0), (s = 0))
    for (let c = s; c < o; c++) n[c] = 0
    Bv(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0)
    const u = Ls(t),
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
const Lv = (e, t, n) => (e & t) ^ (~e & n),
  Mv = (e, t, n) => (e & t) ^ (e & n) ^ (t & n),
  Dv = new Uint32Array([
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
  wt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  bt = new Uint32Array(64)
class Uv extends Rv {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = wt[0] | 0),
      (this.B = wt[1] | 0),
      (this.C = wt[2] | 0),
      (this.D = wt[3] | 0),
      (this.E = wt[4] | 0),
      (this.F = wt[5] | 0),
      (this.G = wt[6] | 0),
      (this.H = wt[7] | 0)
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
    for (let c = 0; c < 16; c++, n += 4) bt[c] = t.getUint32(n, !1)
    for (let c = 16; c < 64; c++) {
      const d = bt[c - 15],
        g = bt[c - 2],
        v = Ke(d, 7) ^ Ke(d, 18) ^ (d >>> 3),
        y = Ke(g, 17) ^ Ke(g, 19) ^ (g >>> 10)
      bt[c] = (y + bt[c - 7] + v + bt[c - 16]) | 0
    }
    let { A: r, B: o, C: i, D: s, E: u, F: a, G: l, H: f } = this
    for (let c = 0; c < 64; c++) {
      const d = Ke(u, 6) ^ Ke(u, 11) ^ Ke(u, 25),
        g = (f + d + Lv(u, a, l) + Dv[c] + bt[c]) | 0,
        y = ((Ke(r, 2) ^ Ke(r, 13) ^ Ke(r, 22)) + Mv(r, o, i)) | 0
      ;(f = l),
        (l = a),
        (a = u),
        (u = (s + g) | 0),
        (s = i),
        (i = o),
        (o = r),
        (r = (g + y) | 0)
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
    bt.fill(0)
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
  }
}
const Gv = Fp(() => new Uv())
function Hv(e, t) {
  const n = t || 'hex',
    r = Gv(qe(e, { strict: !1 }) ? Rt(e) : e)
  return n === 'bytes' ? r : F(r)
}
function Vv(e) {
  const { commitment: t, version: n = 1 } = e,
    r = e.to ?? (typeof t == 'string' ? 'hex' : 'bytes'),
    o = Hv(t, 'bytes')
  return o.set([n], 0), r === 'bytes' ? o : oe(o)
}
function Wv(e) {
  const { commitments: t, version: n } = e,
    r = e.to ?? (typeof t[0] == 'string' ? 'hex' : 'bytes'),
    o = []
  for (const i of t) o.push(Vv({ commitment: i, to: r, version: n }))
  return o
}
const uf = 6,
  h0 = 32,
  wl = 4096,
  m0 = h0 * wl,
  af = m0 * uf - 1 - 1 * wl * uf,
  y0 = 1
class qv extends k {
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
class g0 extends k {
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
class Qv extends k {
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
class Kv extends k {
  constructor({ hash: t, version: n }) {
    super(`Versioned hash "${t}" version is invalid.`, {
      metaMessages: [`Expected: ${y0}`, `Received: ${n}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'InvalidVersionedHashVersionError',
      })
  }
}
function Yv(e) {
  const t = e.to ?? (typeof e.data == 'string' ? 'hex' : 'bytes'),
    n = typeof e.data == 'string' ? Lt(e.data) : e.data,
    r = Y(n)
  if (!r) throw new g0()
  if (r > af) throw new qv({ maxSize: af, size: r })
  const o = []
  let i = !0,
    s = 0
  while (i) {
    const u = ul(new Uint8Array(m0))
    let a = 0
    while (a < wl) {
      const l = n.slice(s, s + (h0 - 1))
      if ((u.pushByte(0), u.pushBytes(l), l.length < 31)) {
        u.pushByte(128), (i = !1)
        break
      }
      a++, (s += 31)
    }
    o.push(u)
  }
  return t === 'bytes' ? o.map((u) => u.bytes) : o.map((u) => oe(u.bytes))
}
function Xv(e) {
  const { data: t, kzg: n, to: r } = e,
    o = e.blobs ?? Yv({ data: t, to: r }),
    i = e.commitments ?? d0({ blobs: o, kzg: n, to: r }),
    s = e.proofs ?? p0({ blobs: o, commitments: i, kzg: n, to: r }),
    u = []
  for (let a = 0; a < o.length; a++)
    u.push({ blob: o[a], commitment: i[a], proof: s[a] })
  return u
}
function co(e, t = 'hex') {
  const n = v0(e),
    r = ul(new Uint8Array(n.length))
  return n.encode(r), t === 'hex' ? oe(r.bytes) : r.bytes
}
function v0(e) {
  return Array.isArray(e) ? Zv(e.map((t) => v0(t))) : Jv(e)
}
function Zv(e) {
  const t = e.reduce((o, i) => o + i.length, 0),
    n = w0(t)
  return {
    length: (() => (t <= 55 ? 1 + t : 1 + n + t))(),
    encode(o) {
      t <= 55
        ? o.pushByte(192 + t)
        : (o.pushByte(192 + 55 + n),
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
function Jv(e) {
  const t = typeof e == 'string' ? Lt(e) : e,
    n = w0(t.length)
  return {
    length: (() =>
      t.length === 1 && t[0] < 128
        ? 1
        : t.length <= 55
          ? 1 + t.length
          : 1 + n + t.length)(),
    encode(o) {
      t.length === 1 && t[0] < 128
        ? o.pushBytes(t)
        : t.length <= 55
          ? (o.pushByte(128 + t.length), o.pushBytes(t))
          : (o.pushByte(128 + 55 + n),
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
function w0(e) {
  if (e < 2 ** 8) return 1
  if (e < 2 ** 16) return 2
  if (e < 2 ** 24) return 3
  if (e < 2 ** 32) return 4
  throw new k('Length is too large.')
}
function e1(e) {
  const { blobVersionedHashes: t } = e
  if (t) {
    if (t.length === 0) throw new g0()
    for (const n of t) {
      const r = Y(n),
        o = mt(Wr(n, 0, 1))
      if (r !== 32) throw new Qv({ hash: n, size: r })
      if (o !== y0) throw new Kv({ hash: n, version: o })
    }
  }
  b0(e)
}
function b0(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: o } = e
  if (t <= 0) throw new vl({ chainId: t })
  if (o && !Ie(o)) throw new et({ address: o })
  if (r && r > 2n ** 256n - 1n) throw new hn({ maxFeePerGas: r })
  if (n && r && n > r)
    throw new lo({ maxFeePerGas: r, maxPriorityFeePerGas: n })
}
function t1(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: o,
    to: i,
  } = e
  if (t <= 0) throw new vl({ chainId: t })
  if (i && !Ie(i)) throw new et({ address: i })
  if (n || o)
    throw new k(
      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.',
    )
  if (r && r > 2n ** 256n - 1n) throw new hn({ maxFeePerGas: r })
}
function n1(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: o,
    to: i,
    accessList: s,
  } = e
  if (i && !Ie(i)) throw new et({ address: i })
  if (typeof t < 'u' && t <= 0) throw new vl({ chainId: t })
  if (n || o)
    throw new k(
      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.',
    )
  if (r && r > 2n ** 256n - 1n) throw new hn({ maxFeePerGas: r })
  if (s)
    throw new k('`accessList` is not a valid Legacy Transaction attribute.')
}
function bl(e) {
  if (!e || e.length === 0) return []
  const t = []
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: o } = e[n]
    for (let i = 0; i < o.length; i++)
      if (o[i].length - 2 !== 64) throw new Kg({ storageKey: o[i] })
    if (!Ie(r, { strict: !1 })) throw new et({ address: r })
    t.push([r, o])
  }
  return t
}
function r1(e, t) {
  const n = s0(e)
  return n === 'eip1559'
    ? i1(e, t)
    : n === 'eip2930'
      ? s1(e, t)
      : n === 'eip4844'
        ? o1(e, t)
        : u1(e, t)
}
function o1(e, t) {
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
  e1(e)
  let d = e.blobVersionedHashes,
    g = e.sidecars
  if (e.blobs) {
    const m =
        typeof e.blobs[0] == 'string' ? e.blobs : e.blobs.map((b) => oe(b)),
      w = e.kzg,
      P = d0({ blobs: m, kzg: w }),
      x = p0({ blobs: m, commitments: P, kzg: w })
    ;(d = Wv({ commitments: P })),
      g !== !1 && (g = Xv({ blobs: m, commitments: P, proofs: x }))
  }
  const v = bl(f),
    y = [
      F(n),
      o ? F(o) : '0x',
      l ? F(l) : '0x',
      a ? F(a) : '0x',
      r ? F(r) : '0x',
      i ?? '0x',
      s ? F(s) : '0x',
      c ?? '0x',
      v,
      u ? F(u) : '0x',
      d ?? [],
      ...xl(e, t),
    ],
    E = [],
    h = [],
    p = []
  if (g)
    for (let m = 0; m < g.length; m++) {
      const { blob: w, commitment: P, proof: x } = g[m]
      E.push(w), h.push(P), p.push(x)
    }
  return Zn(['0x03', co(g ? [y, E, h, p] : y)])
}
function i1(e, t) {
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
  b0(e)
  const c = bl(l),
    d = [
      F(n),
      o ? F(o) : '0x',
      a ? F(a) : '0x',
      u ? F(u) : '0x',
      r ? F(r) : '0x',
      i ?? '0x',
      s ? F(s) : '0x',
      f ?? '0x',
      c,
      ...xl(e, t),
    ]
  return Zn(['0x02', co(d)])
}
function s1(e, t) {
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
  t1(e)
  const f = bl(a),
    c = [
      F(n),
      i ? F(i) : '0x',
      l ? F(l) : '0x',
      r ? F(r) : '0x',
      s ?? '0x',
      u ? F(u) : '0x',
      o ?? '0x',
      f,
      ...xl(e, t),
    ]
  return Zn(['0x01', co(c)])
}
function u1(e, t) {
  const {
    chainId: n = 0,
    gas: r,
    data: o,
    nonce: i,
    to: s,
    value: u,
    gasPrice: a,
  } = e
  n1(e)
  let l = [
    i ? F(i) : '0x',
    a ? F(a) : '0x',
    r ? F(r) : '0x',
    s ?? '0x',
    u ? F(u) : '0x',
    o ?? '0x',
  ]
  if (t) {
    const f = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n)
      if (n > 0) return BigInt(n * 2) + BigInt(35n + t.v - 27n)
      const c = 27n + (t.v === 27n ? 0n : 1n)
      if (t.v !== c) throw new qg({ v: t.v })
      return c
    })()
    l = [...l, F(f), t.r, t.s]
  } else n > 0 && (l = [...l, F(n), '0x', '0x'])
  return co(l)
}
function xl(e, t) {
  const { r: n, s: r, v: o, yParity: i } = t ?? e
  return typeof n > 'u'
    ? []
    : typeof r > 'u'
      ? []
      : typeof o > 'u' && typeof i > 'u'
        ? []
        : [
            (() =>
              typeof i == 'number'
                ? i
                  ? F(1)
                  : '0x'
                : o === 0n
                  ? '0x'
                  : o === 1n
                    ? F(1)
                    : o === 27n
                      ? '0x'
                      : F(1))(),
            Wn(n),
            Wn(r),
          ]
}
function a1(e) {
  const t = e.result.transaction.workflow_results.policyResults
    .filter(
      (n) =>
        n.policyDecision.toLowerCase() === 'block' ||
        n.policyDecision.toLowerCase() === 'mfa',
    )
    .map((n) => n.name)
  return JSON.stringify(t)
}
async function x0(e, t, n, r) {
  const o = JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_simulateTransaction',
      params: [t, n],
      id: 42,
    }),
    i = `https://rpc.shield3.com/v3/0x${r}/rpc?apiKey=${e}`,
    s = { 'Content-Type': 'application/json' }
  try {
    const u = await fetch(i, { method: 'POST', headers: s, body: o })
    if (!u.ok)
      throw new $v('Could not connect to Shield3', { response: u.json() })
    const a = await u.json()
    if (a.error.message !== void 0)
      throw new jv(`Shield3 Configuration Error ${a.error.message}`)
    if (a.result.decision !== 'Allow')
      throw new Fv(`Policy violation(s): ${a1(a)}`)
    return a
  } catch (u) {
    throw (console.error(u), u)
  }
}
async function l1(e, t) {
  if (t === 'undefined') {
    console.log(
      "Your Shield3 api key is undefined. Add SHIELD3_API_KEY=your-api-key to your .env file in your project's root directory for added protection. Then run 'cd ./node_modules/viem && yarn run configure_shield3'",
    )
    return
  }
  const n = r1(e)
  return await x0(t, n, e.from.toString(), e.chainId.toString(16))
}
async function c1(e, t, n, r) {
  if (e === void 0) {
    console.log(
      "Your Shield3 api key is undefined. Add SHIELD3_API_KEY=your-api-key to your .env.local file in your project's root directory for added protection.",
    )
    return
  }
  return await x0(e, t, r, n)
}
function P0({ chain: e, currentChainId: t }) {
  if (!e) throw new wv()
  if (t !== e.id) throw new vv({ chain: e, currentChainId: t })
}
function f1(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = cl(e, n)
    return o instanceof ts ? e : o
  })()
  return new Yg(r, { docsPath: t, ...n })
}
async function Pl(e, { serializedTransaction: t }) {
  var r
  const n = (r = e.chain) != null && r.custom ? e.chain.custom.apiKey : void 0
  return (
    n &&
      typeof n == 'string' &&
      (await c1(n, t, e.chain.id.toString(16), e.account.toString())),
    e.request(
      { method: 'eth_sendRawTransaction', params: [t] },
      { retryCount: 0 },
    )
  )
}
async function El(e, t) {
  var p, m, w, P, x
  console.log(1)
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
    to: g,
    value: v,
    ...y
  } = t
  if (!n) throw new us({ docsPath: '/docs/actions/wallet/sendTransaction' })
  const E = Le(n)
  async function h() {
    let b
    return (
      r !== null &&
        ((b = await O(e, Po, 'getChainId')({})),
        P0({ currentChainId: b, chain: r })),
      await O(
        e,
        rs,
        'prepareTransactionRequest',
      )({
        account: E,
        accessList: o,
        blobs: i,
        chain: r,
        chainId: b,
        data: s,
        gas: u,
        gasPrice: a,
        maxFeePerBlobGas: l,
        maxFeePerGas: f,
        maxPriorityFeePerGas: c,
        nonce: d,
        to: g,
        value: v,
        ...y,
      })
    )
  }
  try {
    if ((xo(t), E.type === 'local')) {
      const pe = await h(),
        ee =
          (p = r == null ? void 0 : r.serializers) == null
            ? void 0
            : p.transaction,
        Qt = await E.signTransaction(pe, { serializer: ee })
      return await O(e, Pl, 'sendRawTransaction')({ serializedTransaction: Qt })
    }
    const b =
        (P =
          (w = (m = e.chain) == null ? void 0 : m.formatters) == null
            ? void 0
            : w.transactionRequest) == null
          ? void 0
          : P.format,
      _ = (b || ns)({
        ...fl(y, { format: b }),
        accessList: o,
        blobs: i,
        data: s,
        from: E.address,
        gas: u,
        gasPrice: a,
        maxFeePerBlobGas: l,
        maxFeePerGas: f,
        maxPriorityFeePerGas: c,
        nonce: d,
        to: g,
        value: v,
      }),
      I = await h()
    console.log('sendTransaction', e.chain)
    const R = (x = e.chain) != null && x.custom ? e.chain.custom.apiKey : void 0
    return (
      R && typeof R == 'string' && (await l1(I, R)),
      await e.request(
        { method: 'eth_sendTransaction', params: [_] },
        { retryCount: 0 },
      )
    )
  } catch (b) {
    throw f1(b, { ...t, account: E, chain: t.chain || void 0 })
  }
}
async function d1(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      dataSuffix: i,
      functionName: s,
      ...u
    } = t,
    a = qt({ abi: n, args: o, functionName: s })
  return O(
    e,
    El,
    'sendTransaction',
  )({ data: `${a}${i ? i.replace('0x', '') : ''}`, to: r, ...u })
}
async function p1(e, { chain: t }) {
  const { id: n, name: r, nativeCurrency: o, rpcUrls: i, blockExplorers: s } = t
  await e.request(
    {
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: A(n),
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
const ea = 256
let Vo = ea,
  Wo
function h1(e = 11) {
  if (!Wo || Vo + e > ea * 2) {
    ;(Wo = ''), (Vo = 0)
    for (let t = 0; t < ea; t++)
      Wo += ((256 + Math.random() * 256) | 0).toString(16).substring(1)
  }
  return Wo.substring(Vo, Vo++ + e)
}
function E0(e) {
  const {
      batch: t,
      cacheTime: n = e.pollingInterval ?? 4e3,
      key: r = 'base',
      name: o = 'Base Client',
      pollingInterval: i = 4e3,
      type: s = 'base',
    } = e,
    u = e.chain,
    a = e.account ? Le(e.account) : void 0,
    {
      config: l,
      request: f,
      value: c,
    } = e.transport({ chain: u, pollingInterval: i }),
    d = { ...l, ...c },
    g = {
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
      uid: h1(),
    }
  function v(y) {
    return (E) => {
      const h = E(y)
      for (const m in g) delete h[m]
      const p = { ...y, ...h }
      return Object.assign(p, { extend: v(p) })
    }
  }
  return Object.assign(g, { extend: v(g) })
}
function ta(
  e,
  { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {},
) {
  return new Promise((o, i) => {
    const s = async ({ count: u = 0 } = {}) => {
      const a = async ({ error: l }) => {
        const f = typeof t == 'function' ? t({ count: u, error: l }) : t
        f && (await Ju(f)), s({ count: u + 1 })
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
function m1(e, t = {}) {
  return async (n, r = {}) => {
    const { retryDelay: o = 150, retryCount: i = 3 } = { ...t, ...r }
    return ta(
      async () => {
        try {
          return await e(n)
        } catch (s) {
          const u = s
          switch (u.code) {
            case Qr.code:
              throw new Qr(u)
            case Kr.code:
              throw new Kr(u)
            case Yr.code:
              throw new Yr(u)
            case Xr.code:
              throw new Xr(u)
            case dn.code:
              throw new dn(u)
            case pn.code:
              throw new pn(u)
            case Zr.code:
              throw new Zr(u)
            case Jr.code:
              throw new Jr(u)
            case eo.code:
              throw new eo(u)
            case to.code:
              throw new to(u)
            case qn.code:
              throw new qn(u)
            case no.code:
              throw new no(u)
            case Rn.code:
              throw new Rn(u)
            case ro.code:
              throw new ro(u)
            case oo.code:
              throw new oo(u)
            case io.code:
              throw new io(u)
            case so.code:
              throw new so(u)
            case uo.code:
              throw new uo(u)
            case 5e3:
              throw new Rn(u)
            default:
              throw s instanceof k ? s : new tv(u)
          }
        }
      },
      {
        delay: ({ count: s, error: u }) => {
          var a
          if (u && u instanceof Tr) {
            const l =
              (a = u == null ? void 0 : u.headers) == null
                ? void 0
                : a.get('Retry-After')
            if (l != null && l.match(/\d/)) return Number.parseInt(l) * 1e3
          }
          return ~~(1 << s) * o
        },
        retryCount: i,
        shouldRetry: ({ error: s }) => y1(s),
      },
    )
  }
}
function y1(e) {
  return 'code' in e && typeof e.code == 'number'
    ? e.code === -1 || e.code === qn.code || e.code === dn.code
    : e instanceof Tr && e.status
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
function k0(
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
    request: m1(n, { retryCount: r, retryDelay: o }),
    value: u,
  }
}
function g1(e, t = {}) {
  const { key: n = 'custom', name: r = 'Custom Provider', retryDelay: o } = t
  return ({ retryCount: i }) =>
    k0({
      key: n,
      name: r,
      request: e.request.bind(e),
      retryCount: t.retryCount ?? i,
      retryDelay: o,
      type: 'custom',
    })
}
class v1 extends k {
  constructor() {
    super(
      'No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.',
      { docsPath: '/docs/clients/intro' },
    )
  }
}
function w1(
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
function b1() {
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
const lf = b1()
function x1(e, t = {}) {
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
        const c = await w1(
          async ({ signal: g }) =>
            await fetch(e, {
              ...o,
              body: Array.isArray(r)
                ? ue(
                    r.map((y) => ({
                      jsonrpc: '2.0',
                      id: y.id ?? lf.take(),
                      ...y,
                    })),
                  )
                : ue({ jsonrpc: '2.0', id: r.id ?? lf.take(), ...r }),
              headers: { ...u, 'Content-Type': 'application/json' },
              method: a || 'POST',
              signal: l || (s > 0 ? g : null),
            }),
          {
            errorInstance: new Jc({ body: r, url: e }),
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
          throw new Tr({
            body: r,
            details: ue(d.error) || c.statusText,
            headers: c.headers,
            status: c.status,
            url: e,
          })
        return d
      } catch (c) {
        throw c instanceof Tr || c instanceof Jc
          ? c
          : new Tr({ body: r, details: c.message, url: e })
      }
    },
  }
}
function P1(e, t = {}) {
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
      g = t.retryCount ?? l,
      v = f ?? t.timeout ?? 1e4,
      y = e || (a == null ? void 0 : a.rpcUrls.default.http[0])
    if (!y) throw new v1()
    const E = x1(y, { fetchOptions: r, onResponse: s, timeout: v })
    return k0(
      {
        key: o,
        name: i,
        async request({ method: h, params: p }) {
          const m = { method: h, params: p },
            { schedule: w } = f0({
              id: `${e}`,
              wait: d,
              shouldSplitBatch(C) {
                return C.length > c
              },
              fn: (C) => E.request({ body: C }),
              sort: (C, _) => C.id - _.id,
            }),
            P = async (C) => (n ? w(C) : [await E.request({ body: C })]),
            [{ error: x, result: b }] = await P(m)
          if (x) throw new Jp({ body: m, error: x, url: y })
          return b
        },
        retryCount: g,
        retryDelay: u,
        timeout: v,
        type: 'http',
      },
      { fetchOptions: r, url: y },
    )
  }
}
function kl(e, t) {
  var r, o, i, s, u, a
  if (!(e instanceof k)) return !1
  const n = e.walk((l) => l instanceof Du)
  return n instanceof Du
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
        (t === 'reverse' && n.reason === Vp[50])
      )
    : !1
}
function S0(e) {
  if (e.length !== 66 || e.indexOf('[') !== 0 || e.indexOf(']') !== 65)
    return null
  const t = `0x${e.slice(1, 65)}`
  return qe(t) ? t : null
}
function ii(e) {
  let t = new Uint8Array(32).fill(0)
  if (!e) return oe(t)
  const n = e.split('.')
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const o = S0(n[r]),
      i = o ? Rt(o) : be(at(n[r]), 'bytes')
    t = be(yt([t, i]), 'bytes')
  }
  return oe(t)
}
function E1(e) {
  return `[${e.slice(2)}]`
}
function k1(e) {
  const t = new Uint8Array(32).fill(0)
  return e ? S0(e) || be(at(e)) : oe(t)
}
function as(e) {
  const t = e.replace(/^\.|\.$/gm, '')
  if (t.length === 0) return new Uint8Array(1)
  const n = new Uint8Array(at(t).byteLength + 2)
  let r = 0
  const o = t.split('.')
  for (let i = 0; i < o.length; i++) {
    let s = at(o[i])
    s.byteLength > 255 && (s = at(E1(k1(o[i])))),
      (n[r] = s.length),
      n.set(s, r + 1),
      (r += s.length + 1)
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n
}
async function S1(
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
    a = tr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  try {
    const l = qt({
        abi: rf,
        functionName: 'addr',
        ...(r != null ? { args: [ii(o), BigInt(r)] } : { args: [ii(o)] }),
      }),
      f = {
        address: a,
        abi: l0,
        functionName: 'resolve',
        args: [F(as(o)), l],
        blockNumber: t,
        blockTag: n,
      },
      c = O(e, Ut, 'readContract'),
      d = i ? await c({ ...f, args: [...f.args, i] }) : await c(f)
    if (d[0] === '0x') return null
    const g = er({
      abi: rf,
      args: r != null ? [ii(o), BigInt(r)] : void 0,
      functionName: 'addr',
      data: d[0],
    })
    return g === '0x' || Wn(g) === '0x00' ? null : g
  } catch (l) {
    if (s) throw l
    if (kl(l, 'resolve')) return null
    throw l
  }
}
class C1 extends k {
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
class pr extends k {
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
class Sl extends k {
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
class T1 extends k {
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
const N1 =
    /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  _1 =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  I1 = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  O1 = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/
async function z1(e) {
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
function cf(e, t) {
  return e ? (e.endsWith('/') ? e.slice(0, -1) : e) : t
}
function C0({ uri: e, gatewayUrls: t }) {
  const n = I1.test(e)
  if (n) return { uri: e, isOnChain: !0, isEncoded: n }
  const r = cf(t == null ? void 0 : t.ipfs, 'https://ipfs.io'),
    o = cf(t == null ? void 0 : t.arweave, 'https://arweave.net'),
    i = e.match(N1),
    {
      protocol: s,
      subpath: u,
      target: a,
      subtarget: l = '',
    } = (i == null ? void 0 : i.groups) || {},
    f = s === 'ipns:/' || u === 'ipns/',
    c = s === 'ipfs:/' || u === 'ipfs/' || _1.test(e)
  if (e.startsWith('http') && !f && !c) {
    let g = e
    return (
      t != null &&
        t.arweave &&
        (g = e.replace(
          /https:\/\/arweave.net/g,
          t == null ? void 0 : t.arweave,
        )),
      { uri: g, isOnChain: !1, isEncoded: !1 }
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
  let d = e.replace(O1, '')
  if (
    (d.startsWith('<svg') && (d = `data:image/svg+xml;base64,${btoa(d)}`),
    d.startsWith('data:') || d.startsWith('{'))
  )
    return { uri: d, isOnChain: !0, isEncoded: !1 }
  throw new Sl({ uri: e })
}
function T0(e) {
  if (
    typeof e != 'object' ||
    (!('image' in e) && !('image_url' in e) && !('image_data' in e))
  )
    throw new C1({ data: e })
  return e.image || e.image_url || e.image_data
}
async function A1({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((o) => o.json())
    return await Cl({ gatewayUrls: e, uri: T0(n) })
  } catch {
    throw new Sl({ uri: t })
  }
}
async function Cl({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = C0({ uri: t, gatewayUrls: e })
  if (r || (await z1(n))) return n
  throw new Sl({ uri: t })
}
function $1(e) {
  let t = e
  t.startsWith('did:nft:') && (t = t.replace('did:nft:', '').replace(/_/g, '/'))
  const [n, r, o] = t.split('/'),
    [i, s] = n.split(':'),
    [u, a] = r.split(':')
  if (!i || i.toLowerCase() !== 'eip155')
    throw new pr({ reason: 'Only EIP-155 supported' })
  if (!s) throw new pr({ reason: 'Chain ID not found' })
  if (!a) throw new pr({ reason: 'Contract address not found' })
  if (!o) throw new pr({ reason: 'Token ID not found' })
  if (!u) throw new pr({ reason: 'ERC namespace not found' })
  return {
    chainID: Number.parseInt(s),
    namespace: u.toLowerCase(),
    contractAddress: a,
    tokenID: o,
  }
}
async function F1(e, { nft: t }) {
  if (t.namespace === 'erc721')
    return Ut(e, {
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
    return Ut(e, {
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
  throw new T1({ namespace: t.namespace })
}
async function j1(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n)
    ? B1(e, { gatewayUrls: t, record: n })
    : Cl({ uri: n, gatewayUrls: t })
}
async function B1(e, { gatewayUrls: t, record: n }) {
  const r = $1(n),
    o = await F1(e, { nft: r }),
    { uri: i, isOnChain: s, isEncoded: u } = C0({ uri: o, gatewayUrls: t })
  if (s && (i.includes('data:application/json;base64,') || i.startsWith('{'))) {
    const l = u ? atob(i.replace('data:application/json;base64,', '')) : i,
      f = JSON.parse(l)
    return Cl({ uri: T0(f), gatewayUrls: t })
  }
  let a = r.tokenID
  return (
    r.namespace === 'erc1155' && (a = a.replace('0x', '').padStart(64, '0')),
    A1({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, a) })
  )
}
async function N0(
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
    a = tr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  try {
    const l = {
        address: a,
        abi: l0,
        functionName: 'resolve',
        args: [
          F(as(r)),
          qt({ abi: nf, functionName: 'text', args: [ii(r), o] }),
        ],
        blockNumber: t,
        blockTag: n,
      },
      f = O(e, Ut, 'readContract'),
      c = i ? await f({ ...l, args: [...l.args, i] }) : await f(l)
    if (c[0] === '0x') return null
    const d = er({ abi: nf, functionName: 'text', data: c[0] })
    return d === '' ? null : d
  } catch (l) {
    if (s) throw l
    if (kl(l, 'resolve')) return null
    throw l
  }
}
async function R1(
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
  const a = await O(
    e,
    N0,
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
    return await j1(e, { record: a, gatewayUrls: r })
  } catch {
    return null
  }
}
async function L1(
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
    u = tr({ blockNumber: n, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  const a = `${t.toLowerCase().substring(2)}.addr.reverse`
  try {
    const l = {
        address: u,
        abi: mv,
        functionName: 'reverse',
        args: [F(as(a))],
        blockNumber: n,
        blockTag: r,
      },
      f = O(e, Ut, 'readContract'),
      [c, d] = o ? await f({ ...l, args: [...l.args, o] }) : await f(l)
    return t.toLowerCase() !== d.toLowerCase() ? null : c
  } catch (l) {
    if (i) throw l
    if (kl(l, 'reverse')) return null
    throw l
  }
}
async function M1(
  e,
  { blockNumber: t, blockTag: n, name: r, universalResolverAddress: o },
) {
  let i = o
  if (!i) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    i = tr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  const [s] = await O(
    e,
    Ut,
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
    args: [F(as(r))],
    blockNumber: t,
    blockTag: n,
  })
  return s
}
async function D1(e) {
  const t = Ji(e, { method: 'eth_newBlockFilter' }),
    n = await e.request({ method: 'eth_newBlockFilter' })
  return { id: n, request: t(n), type: 'block' }
}
async function _0(
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
    l = Ji(e, { method: 'eth_newFilter' })
  let f = []
  a &&
    ((f = [a.flatMap((d) => wo({ abi: [d], eventName: d.name, args: n }))]),
    r && (f = f[0]))
  const c = await e.request({
    method: 'eth_newFilter',
    params: [
      {
        address: t,
        fromBlock: typeof i == 'bigint' ? A(i) : i,
        toBlock: typeof u == 'bigint' ? A(u) : u,
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
async function I0(e) {
  const t = Ji(e, { method: 'eth_newPendingTransactionFilter' }),
    n = await e.request({ method: 'eth_newPendingTransactionFilter' })
  return { id: n, request: t(n), type: 'transaction' }
}
async function U1(e, { address: t, blockNumber: n, blockTag: r = 'latest' }) {
  const o = n ? A(n) : void 0,
    i = await e.request({ method: 'eth_getBalance', params: [t, o || r] })
  return BigInt(i)
}
async function G1(e) {
  const t = await e.request({ method: 'eth_blobBaseFee' })
  return BigInt(t)
}
async function H1(
  e,
  { blockHash: t, blockNumber: n, blockTag: r = 'latest' } = {},
) {
  const o = n !== void 0 ? A(n) : void 0
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
    mt(i)
  )
}
async function V1(e, { address: t, blockNumber: n, blockTag: r = 'latest' }) {
  const o = n !== void 0 ? A(n) : void 0,
    i = await e.request({ method: 'eth_getCode', params: [t, o || r] })
  if (i !== '0x') return i
}
function W1(e) {
  var t
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward:
      (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r))),
  }
}
async function q1(
  e,
  {
    blockCount: t,
    blockNumber: n,
    blockTag: r = 'latest',
    rewardPercentiles: o,
  },
) {
  const i = n ? A(n) : void 0,
    s = await e.request({ method: 'eth_feeHistory', params: [A(t), i || r, o] })
  return W1(s)
}
async function Q1(e, { filter: t }) {
  const n = t.strict ?? !1,
    o = (await t.request({ method: 'eth_getFilterLogs', params: [t.id] })).map(
      (i) => Dt(i),
    )
  return t.abi ? yl({ abi: t.abi, logs: o, strict: n }) : o
}
function K1(e) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...e }
}
const Y1 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  X1 =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/
function Z1(e) {
  const { domain: t = {}, message: n, primaryType: r } = e,
    o = { EIP712Domain: j0({ domain: t }), ...e.types }
  F0({ domain: t, message: n, primaryType: r, types: o })
  const i = ['0x1901']
  return (
    t && i.push(J1({ domain: t, types: o })),
    r !== 'EIP712Domain' && i.push(O0({ data: n, primaryType: r, types: o })),
    be(yt(i))
  )
}
function J1({ domain: e, types: t }) {
  return O0({ data: e, primaryType: 'EIP712Domain', types: t })
}
function O0({ data: e, primaryType: t, types: n }) {
  const r = z0({ data: e, primaryType: t, types: n })
  return be(r)
}
function z0({ data: e, primaryType: t, types: n }) {
  const r = [{ type: 'bytes32' }],
    o = [ew({ primaryType: t, types: n })]
  for (const i of n[t]) {
    const [s, u] = $0({
      types: n,
      name: i.name,
      type: i.type,
      value: e[i.name],
    })
    r.push(s), o.push(u)
  }
  return go(r, o)
}
function ew({ primaryType: e, types: t }) {
  const n = F(tw({ primaryType: e, types: t }))
  return be(n)
}
function tw({ primaryType: e, types: t }) {
  let n = ''
  const r = A0({ primaryType: e, types: t })
  r.delete(e)
  const o = [e, ...Array.from(r).sort()]
  for (const i of o)
    n += `${i}(${t[i].map(({ name: s, type: u }) => `${u} ${s}`).join(',')})`
  return n
}
function A0({ primaryType: e, types: t }, n = new Set()) {
  const r = e.match(/^\w*/u),
    o = r == null ? void 0 : r[0]
  if (n.has(o) || t[o] === void 0) return n
  n.add(o)
  for (const i of t[o]) A0({ primaryType: i.type, types: t }, n)
  return n
}
function $0({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [{ type: 'bytes32' }, be(z0({ data: r, primaryType: n, types: e }))]
  if (n === 'bytes')
    return (
      (r = `0x${(r.length % 2 ? '0' : '') + r.slice(2)}`),
      [{ type: 'bytes32' }, be(r)]
    )
  if (n === 'string') return [{ type: 'bytes32' }, be(F(r))]
  if (n.lastIndexOf(']') === n.length - 1) {
    const o = n.slice(0, n.lastIndexOf('[')),
      i = r.map((s) => $0({ name: t, type: o, types: e, value: s }))
    return [
      { type: 'bytes32' },
      be(
        go(
          i.map(([s]) => s),
          i.map(([, s]) => s),
        ),
      ),
    ]
  }
  return [{ type: n }, r]
}
function F0(e) {
  const { domain: t, message: n, primaryType: r, types: o } = e,
    i = (s, u) => {
      for (const a of s) {
        const { name: l, type: f } = a,
          c = u[l],
          d = f.match(X1)
        if (d && (typeof c == 'number' || typeof c == 'bigint')) {
          const [y, E, h] = d
          A(c, { signed: E === 'int', size: Number.parseInt(h) / 8 })
        }
        if (f === 'address' && typeof c == 'string' && !Ie(c))
          throw new et({ address: c })
        const g = f.match(Y1)
        if (g) {
          const [y, E] = g
          if (E && Y(c) !== Number.parseInt(E))
            throw new Ny({ expectedSize: Number.parseInt(E), givenSize: Y(c) })
        }
        const v = o[f]
        v && i(v, c)
      }
    }
  if ((o.EIP712Domain && t && i(o.EIP712Domain, t), r !== 'EIP712Domain')) {
    const s = o[r]
    i(s, n)
  }
}
function j0({ domain: e }) {
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
const Hs = '/docs/contract/encodeDeployData'
function B0(e) {
  const { abi: t, args: n, bytecode: r } = e
  if (!n || n.length === 0) return r
  const o = t.find((s) => 'type' in s && s.type === 'constructor')
  if (!o) throw new xy({ docsPath: Hs })
  if (!('inputs' in o)) throw new Lc({ docsPath: Hs })
  if (!o.inputs || o.inputs.length === 0) throw new Lc({ docsPath: Hs })
  const i = go(o.inputs, n)
  return Zn([r, i])
}
const nw = { '0x0': 'reverted', '0x1': 'success' }
function rw(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Dt(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? mt(e.transactionIndex) : null,
    status: e.status ? nw[e.status] : null,
    type: e.type ? t0[e.type] || e.type : null,
  }
  return (
    e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
    t
  )
}
const ow = `Ethereum Signed Message:
`
function iw(e, t) {
  const n = (() =>
      typeof e == 'string'
        ? at(e)
        : e.raw instanceof Uint8Array
          ? e.raw
          : Rt(e.raw))(),
    r = at(`${ow}${n.length}`)
  return be(yt([r, n]), t)
}
function sw(e, t) {
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
function uw(e, t = 'wei') {
  return sw(e, Qp[t])
}
function aw(e) {
  return e.map((t) => ({ ...t, value: BigInt(t.value) }))
}
function lw(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? mt(e.nonce) : void 0,
    storageProof: e.storageProof ? aw(e.storageProof) : void 0,
  }
}
async function cw(
  e,
  { address: t, blockNumber: n, blockTag: r, storageKeys: o },
) {
  const i = r ?? 'latest',
    s = n !== void 0 ? A(n) : void 0,
    u = await e.request({ method: 'eth_getProof', params: [t, o, s || i] })
  return lw(u)
}
async function fw(
  e,
  { address: t, blockNumber: n, blockTag: r = 'latest', slot: o },
) {
  const i = n !== void 0 ? A(n) : void 0
  return await e.request({ method: 'eth_getStorageAt', params: [t, o, i || r] })
}
async function Tl(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, hash: o, index: i },
) {
  var f, c, d
  const s = r || 'latest',
    u = n !== void 0 ? A(n) : void 0
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
            params: [t, A(i)],
          }))
        : (u || s) &&
          (a = await e.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [u || s, A(i)],
          })),
    !a)
  )
    throw new Yp({
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
      : d.format) || n0
  )(a)
}
async function dw(e, { hash: t, transactionReceipt: n }) {
  const [r, o] = await Promise.all([
      O(e, ko, 'getBlockNumber')({}),
      t ? O(e, Tl, 'getBlockNumber')({ hash: t }) : void 0,
    ]),
    i =
      (n == null ? void 0 : n.blockNumber) ||
      (o == null ? void 0 : o.blockNumber)
  return i ? r - i + 1n : 0n
}
async function na(e, { hash: t }) {
  var o, i, s
  const n = await e.request({
    method: 'eth_getTransactionReceipt',
    params: [t],
  })
  if (!n) throw new Xp({ hash: t })
  return (
    ((s =
      (i = (o = e.chain) == null ? void 0 : o.formatters) == null
        ? void 0
        : i.transactionReceipt) == null
      ? void 0
      : s.format) || rw
  )(n)
}
async function pw(e, t) {
  var E
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
      ((typeof ((E = e.batch) == null ? void 0 : E.multicall) == 'object' &&
        e.batch.multicall.batchSize) ||
        1024)
  let f = s
  if (!f) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. multicallAddress is required.',
      )
    f = tr({ blockNumber: o, chain: e.chain, contract: 'multicall3' })
  }
  const c = [[]]
  let d = 0,
    g = 0
  for (let h = 0; h < a.length; h++) {
    const { abi: p, address: m, args: w, functionName: P } = a[h]
    try {
      const x = qt({ abi: p, args: w, functionName: P })
      ;(g += (x.length - 2) / 2),
        l > 0 &&
          g > l &&
          c[d].length > 0 &&
          (d++, (g = (x.length - 2) / 2), (c[d] = [])),
        (c[d] = [...c[d], { allowFailure: !0, callData: x, target: m }])
    } catch (x) {
      const b = ao(x, {
        abi: p,
        address: m,
        args: w,
        docsPath: '/docs/contract/multicall',
        functionName: P,
      })
      if (!n) throw b
      c[d] = [...c[d], { allowFailure: !0, callData: '0x', target: m }]
    }
  }
  const v = await Promise.allSettled(
      c.map((h) =>
        O(
          e,
          Ut,
          'readContract',
        )({
          abi: Xu,
          address: f,
          args: [h],
          blockNumber: o,
          blockTag: i,
          functionName: 'aggregate3',
          stateOverride: u,
        }),
      ),
    ),
    y = []
  for (let h = 0; h < v.length; h++) {
    const p = v[h]
    if (p.status === 'rejected') {
      if (!n) throw p.reason
      for (let w = 0; w < c[h].length; w++)
        y.push({ status: 'failure', error: p.reason, result: void 0 })
      continue
    }
    const m = p.value
    for (let w = 0; w < m.length; w++) {
      const { returnData: P, success: x } = m[w],
        { callData: b } = c[h][w],
        { abi: C, address: _, functionName: I, args: R } = a[y.length]
      try {
        if (b === '0x') throw new Ki()
        if (!x) throw new ll({ data: P })
        const pe = er({ abi: C, args: R, data: P, functionName: I })
        y.push(n ? { result: pe, status: 'success' } : pe)
      } catch (pe) {
        const ee = ao(pe, {
          abi: C,
          address: _,
          args: R,
          docsPath: '/docs/contract/multicall',
          functionName: I,
        })
        if (!n) throw ee
        y.push({ error: ee, result: void 0, status: 'failure' })
      }
    }
  }
  if (y.length !== a.length) throw new k('multicall results mismatch')
  return y
}
const hw =
  '0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572' /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0)
BigInt(1)
BigInt(2)
function mw(e, t) {
  if (e.length !== t.length) return !1
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
function yw(e, t) {
  const n = qe(e) ? Rt(e) : e,
    r = qe(t) ? Rt(t) : t
  return mw(n, r)
}
async function R0(e, { address: t, hash: n, signature: r, ...o }) {
  const i = qe(r) ? r : F(r)
  try {
    const { data: s } = await O(
      e,
      os,
      'call',
    )({ data: B0({ abi: yv, args: [t, n, i], bytecode: hw }), ...o })
    return yw(s ?? '0x0', '0x1')
  } catch (s) {
    if (s instanceof Zp) return !1
    throw s
  }
}
async function gw(e, { address: t, message: n, signature: r, ...o }) {
  const i = iw(n)
  return R0(e, { address: t, hash: i, signature: r, ...o })
}
async function vw(e, t) {
  const {
      address: n,
      signature: r,
      message: o,
      primaryType: i,
      types: s,
      domain: u,
      ...a
    } = t,
    l = Z1({ message: o, primaryType: i, types: s, domain: u })
  return R0(e, { address: n, hash: l, signature: r, ...a })
}
function L0(
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
        const c = ue(['watchBlockNumber', e.uid, t, n, s])
        return Gt(c, { onBlockNumber: r, onError: o }, (d) =>
          Eo(
            async () => {
              var g
              try {
                const v = await O(e, ko, 'getBlockNumber')({ cacheTime: 0 })
                if (a) {
                  if (v === a) return
                  if (v - a > 1 && n)
                    for (let y = a + 1n; y < v; y++)
                      d.onBlockNumber(y, a), (a = y)
                }
                ;(!a || v > a) && (d.onBlockNumber(v, a), (a = v))
              } catch (v) {
                ;(g = d.onError) == null || g.call(d, v)
              }
            },
            { emitOnBegin: t, interval: s },
          ),
        )
      })()
    : (() => {
        const c = ue(['watchBlockNumber', e.uid, t, n])
        return Gt(c, { onBlockNumber: r, onError: o }, (d) => {
          let g = !0,
            v = () => (g = !1)
          return (
            (async () => {
              try {
                const { unsubscribe: y } = await e.transport.subscribe({
                  params: ['newHeads'],
                  onData(E) {
                    var p
                    if (!g) return
                    const h = Xi((p = E.result) == null ? void 0 : p.number)
                    d.onBlockNumber(h, a), (a = h)
                  },
                  onError(E) {
                    var h
                    ;(h = d.onError) == null || h.call(d, E)
                  },
                })
                ;(v = y), g || v()
              } catch (y) {
                o == null || o(y)
              }
            })(),
            () => v()
          )
        })
      })()
}
async function ww(
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
  const a = ue(['waitForTransactionReceipt', e.uid, n])
  let l,
    f,
    c,
    d = !1
  return new Promise((g, v) => {
    u && setTimeout(() => v(new Xg({ hash: n })), u)
    const y = Gt(a, { onReplaced: r, resolve: g, reject: v }, (E) => {
      const h = O(
        e,
        L0,
        'watchBlockNumber',
      )({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: o,
        async onBlockNumber(p) {
          if (d) return
          let m = p
          const w = (P) => {
            h(), P(), y()
          }
          try {
            if (c) {
              if (t > 1 && (!c.blockNumber || m - c.blockNumber + 1n < t))
                return
              w(() => E.resolve(c))
              return
            }
            if (
              (l ||
                ((d = !0),
                await ta(
                  async () => {
                    ;(l = await O(e, Tl, 'getTransaction')({ hash: n })),
                      l.blockNumber && (m = l.blockNumber)
                  },
                  { delay: s, retryCount: i },
                ),
                (d = !1)),
              (c = await O(e, na, 'getTransactionReceipt')({ hash: n })),
              t > 1 && (!c.blockNumber || m - c.blockNumber + 1n < t))
            )
              return
            w(() => E.resolve(c))
          } catch (P) {
            if (P instanceof Yp || P instanceof Xp) {
              if (!l) {
                d = !1
                return
              }
              try {
                ;(f = l), (d = !0)
                const x = await ta(
                  () =>
                    O(
                      e,
                      Mt,
                      'getBlock',
                    )({ blockNumber: m, includeTransactions: !0 }),
                  {
                    delay: s,
                    retryCount: i,
                    shouldRetry: ({ error: _ }) => _ instanceof e0,
                  },
                )
                d = !1
                const b = x.transactions.find(
                  ({ from: _, nonce: I }) => _ === f.from && I === f.nonce,
                )
                if (
                  !b ||
                  ((c = await O(
                    e,
                    na,
                    'getTransactionReceipt',
                  )({ hash: b.hash })),
                  t > 1 && (!c.blockNumber || m - c.blockNumber + 1n < t))
                )
                  return
                let C = 'replaced'
                b.to === f.to && b.value === f.value
                  ? (C = 'repriced')
                  : b.from === b.to && b.value === 0n && (C = 'cancelled'),
                  w(() => {
                    var _
                    ;(_ = E.onReplaced) == null ||
                      _.call(E, {
                        reason: C,
                        replacedTransaction: f,
                        transaction: b,
                        transactionReceipt: c,
                      }),
                      E.resolve(c)
                  })
              } catch (x) {
                w(() => E.reject(x))
              }
            } else w(() => E.reject(P))
          }
        },
      })
    })
  })
}
function bw(
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
        const v = ue(['watchBlocks', e.uid, n, r, f, a])
        return Gt(v, { onBlock: o, onError: i }, (y) =>
          Eo(
            async () => {
              var E
              try {
                const h = await O(
                  e,
                  Mt,
                  'getBlock',
                )({ blockTag: t, includeTransactions: f })
                if (h.number && c != null && c.number) {
                  if (h.number === c.number) return
                  if (h.number - c.number > 1 && n)
                    for (
                      let p = (c == null ? void 0 : c.number) + 1n;
                      p < h.number;
                      p++
                    ) {
                      const m = await O(
                        e,
                        Mt,
                        'getBlock',
                      )({ blockNumber: p, includeTransactions: f })
                      y.onBlock(m, c), (c = m)
                    }
                }
                ;(!(c != null && c.number) ||
                  (t === 'pending' && !(h != null && h.number)) ||
                  (h.number && h.number > c.number)) &&
                  (y.onBlock(h, c), (c = h))
              } catch (h) {
                ;(E = y.onError) == null || E.call(y, h)
              }
            },
            { emitOnBegin: r, interval: a },
          ),
        )
      })()
    : (() => {
        let v = !0,
          y = () => (v = !1)
        return (
          (async () => {
            try {
              const { unsubscribe: E } = await e.transport.subscribe({
                params: ['newHeads'],
                onData(h) {
                  var w, P, x
                  if (!v) return
                  const m = (
                    ((x =
                      (P = (w = e.chain) == null ? void 0 : w.formatters) ==
                      null
                        ? void 0
                        : P.block) == null
                      ? void 0
                      : x.format) || r0
                  )(h.result)
                  o(m, c), (c = m)
                },
                onError(h) {
                  i == null || i(h)
                },
              })
              ;(y = E), v || y()
            } catch (E) {
              i == null || i(E)
            }
          })(),
          () => y()
        )
      })()
}
function xw(
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
        const y = ue(['watchEvent', t, n, r, e.uid, o, l])
        return Gt(y, { onLogs: u, onError: s }, (E) => {
          let h,
            p,
            m = !1
          const w = Eo(
            async () => {
              var P
              if (!m) {
                try {
                  p = await O(
                    e,
                    _0,
                    'createEventFilter',
                  )({ address: t, args: n, event: o, events: i, strict: d })
                } catch {}
                m = !0
                return
              }
              try {
                let x
                if (p) x = await O(e, is, 'getFilterChanges')({ filter: p })
                else {
                  const b = await O(e, ko, 'getBlockNumber')({})
                  h && h !== b
                    ? (x = await O(
                        e,
                        gl,
                        'getLogs',
                      )({
                        address: t,
                        args: n,
                        event: o,
                        events: i,
                        fromBlock: h + 1n,
                        toBlock: b,
                      }))
                    : (x = []),
                    (h = b)
                }
                if (x.length === 0) return
                if (r) E.onLogs(x)
                else for (const b of x) E.onLogs([b])
              } catch (x) {
                p && x instanceof pn && (m = !1),
                  (P = E.onError) == null || P.call(E, x)
              }
            },
            { emitOnBegin: !0, interval: l },
          )
          return async () => {
            p && (await O(e, ss, 'uninstallFilter')({ filter: p })), w()
          }
        })
      })()
    : (() => {
        let y = !0,
          E = () => (y = !1)
        return (
          (async () => {
            try {
              const h = i ?? (o ? [o] : void 0)
              let p = []
              h &&
                ((p = [
                  h.flatMap((w) =>
                    wo({ abi: [w], eventName: w.name, args: n }),
                  ),
                ]),
                o && (p = p[0]))
              const { unsubscribe: m } = await e.transport.subscribe({
                params: ['logs', { address: t, topics: p }],
                onData(w) {
                  var x
                  if (!y) return
                  const P = w.result
                  try {
                    const { eventName: b, args: C } = ml({
                        abi: h ?? [],
                        data: P.data,
                        topics: P.topics,
                        strict: d,
                      }),
                      _ = Dt(P, { args: C, eventName: b })
                    u([_])
                  } catch (b) {
                    let C, _
                    if (b instanceof Vr || b instanceof Yi) {
                      if (f) return
                      ;(C = b.abiItem.name),
                        (_ =
                          (x = b.abiItem.inputs) == null
                            ? void 0
                            : x.some((R) => !('name' in R && R.name)))
                    }
                    const I = Dt(P, { args: _ ? [] : {}, eventName: C })
                    u([I])
                  }
                },
                onError(w) {
                  s == null || s(w)
                },
              })
              ;(E = m), y || E()
            } catch (h) {
              s == null || s(h)
            }
          })(),
          () => E()
        )
      })()
}
function Pw(
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
        const l = ue(['watchPendingTransactions', e.uid, t, i])
        return Gt(l, { onTransactions: r, onError: n }, (f) => {
          let c
          const d = Eo(
            async () => {
              var g
              try {
                if (!c)
                  try {
                    c = await O(e, I0, 'createPendingTransactionFilter')({})
                    return
                  } catch (y) {
                    throw (d(), y)
                  }
                const v = await O(e, is, 'getFilterChanges')({ filter: c })
                if (v.length === 0) return
                if (t) f.onTransactions(v)
                else for (const y of v) f.onTransactions([y])
              } catch (v) {
                ;(g = f.onError) == null || g.call(f, v)
              }
            },
            { emitOnBegin: !0, interval: i },
          )
          return async () => {
            c && (await O(e, ss, 'uninstallFilter')({ filter: c })), d()
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
                  const g = d.result
                  r([g])
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
function Ew(e) {
  return {
    call: (t) => os(e, t),
    createBlockFilter: () => D1(e),
    createContractEventFilter: (t) => Hp(e, t),
    createEventFilter: (t) => _0(e, t),
    createPendingTransactionFilter: () => I0(e),
    estimateContractGas: (t) => cv(e, t),
    estimateGas: (t) => hl(e, t),
    getBalance: (t) => U1(e, t),
    getBlobBaseFee: () => G1(e),
    getBlock: (t) => Mt(e, t),
    getBlockNumber: (t) => ko(e, t),
    getBlockTransactionCount: (t) => H1(e, t),
    getBytecode: (t) => V1(e, t),
    getChainId: () => Po(e),
    getContractEvents: (t) => u0(e, t),
    getEnsAddress: (t) => S1(e, t),
    getEnsAvatar: (t) => R1(e, t),
    getEnsName: (t) => L1(e, t),
    getEnsResolver: (t) => M1(e, t),
    getEnsText: (t) => N0(e, t),
    getFeeHistory: (t) => q1(e, t),
    estimateFeesPerGas: (t) => lv(e, t),
    getFilterChanges: (t) => is(e, t),
    getFilterLogs: (t) => Q1(e, t),
    getGasPrice: () => pl(e),
    getLogs: (t) => gl(e, t),
    getProof: (t) => cw(e, t),
    estimateMaxPriorityFeePerGas: (t) => av(e, t),
    getStorageAt: (t) => fw(e, t),
    getTransaction: (t) => Tl(e, t),
    getTransactionConfirmations: (t) => dw(e, t),
    getTransactionCount: (t) => i0(e, t),
    getTransactionReceipt: (t) => na(e, t),
    multicall: (t) => pw(e, t),
    prepareTransactionRequest: (t) => rs(e, t),
    readContract: (t) => Ut(e, t),
    sendRawTransaction: (t) => Pl(e, t),
    simulateContract: (t) => Cv(e, t),
    verifyMessage: (t) => gw(e, t),
    verifyTypedData: (t) => vw(e, t),
    uninstallFilter: (t) => ss(e, t),
    waitForTransactionReceipt: (t) => ww(e, t),
    watchBlocks: (t) => bw(e, t),
    watchBlockNumber: (t) => L0(e, t),
    watchContractEvent: (t) => Av(e, t),
    watchEvent: (t) => xw(e, t),
    watchPendingTransactions: (t) => Pw(e, t),
  }
}
function kw(e) {
  const { key: t = 'public', name: n = 'Public Client' } = e
  return E0({ ...e, key: t, name: n, type: 'publicClient' }).extend(Ew)
}
function Sw(e, t) {
  const { abi: n, args: r, bytecode: o, ...i } = t,
    s = B0({ abi: n, args: r, bytecode: o })
  return El(e, { ...i, data: s })
}
async function Cw(e) {
  var n
  return ((n = e.account) == null ? void 0 : n.type) === 'local'
    ? [e.account.address]
    : (await e.request({ method: 'eth_accounts' })).map((r) => Zi(r))
}
async function Tw(e) {
  return await e.request({ method: 'wallet_getPermissions' })
}
async function Nw(e) {
  return (
    await e.request({ method: 'eth_requestAccounts' }, { retryCount: 0 })
  ).map((n) => hg(n))
}
async function _w(e, t) {
  return e.request(
    { method: 'wallet_requestPermissions', params: [t] },
    { retryCount: 0 },
  )
}
async function Iw(e, { account: t = e.account, message: n }) {
  if (!t) throw new us({ docsPath: '/docs/actions/wallet/signMessage' })
  const r = Le(t)
  if (r.type === 'local') return r.signMessage({ message: n })
  const o = (() =>
    typeof n == 'string'
      ? Ja(n)
      : n.raw instanceof Uint8Array
        ? F(n.raw)
        : n.raw)()
  return e.request(
    { method: 'personal_sign', params: [o, r.address] },
    { retryCount: 0 },
  )
}
async function Ow(e, t) {
  var f, c, d, g
  const { account: n = e.account, chain: r = e.chain, ...o } = t
  if (!n) throw new us({ docsPath: '/docs/actions/wallet/signTransaction' })
  const i = Le(n)
  xo({ account: i, ...t })
  const s = await O(e, Po, 'getChainId')({})
  r !== null && P0({ currentChainId: s, chain: r })
  const u =
      (r == null ? void 0 : r.formatters) ||
      ((f = e.chain) == null ? void 0 : f.formatters),
    a =
      ((c = u == null ? void 0 : u.transactionRequest) == null
        ? void 0
        : c.format) || ns
  if (i.type === 'local')
    return i.signTransaction(
      { ...o, chainId: s },
      {
        serializer:
          (g = (d = e.chain) == null ? void 0 : d.serializers) == null
            ? void 0
            : g.transaction,
      },
    )
  const l = { ...a(o) }
  return (
    console.log(l),
    await e.request(
      {
        method: 'eth_signTransaction',
        params: [{ ...a(o), chainId: A(s), from: i.address }],
      },
      { retryCount: 0 },
    )
  )
}
async function zw(e, t) {
  const { account: n = e.account, domain: r, message: o, primaryType: i } = t
  if (!n) throw new us({ docsPath: '/docs/actions/wallet/signTypedData' })
  const s = Le(n),
    u = { EIP712Domain: j0({ domain: r }), ...t.types }
  if (
    (F0({ domain: r, message: o, primaryType: i, types: u }),
    s.type === 'local')
  )
    return s.signTypedData({ domain: r, message: o, primaryType: i, types: u })
  const a = ue(
    { domain: r ?? {}, message: o, primaryType: i, types: u },
    (l, f) => (qe(f) ? f.toLowerCase() : f),
  )
  return e.request(
    { method: 'eth_signTypedData_v4', params: [s.address, a] },
    { retryCount: 0 },
  )
}
async function Aw(e, { id: t }) {
  await e.request(
    { method: 'wallet_switchEthereumChain', params: [{ chainId: A(t) }] },
    { retryCount: 0 },
  )
}
async function $w(e, t) {
  return await e.request(
    { method: 'wallet_watchAsset', params: t },
    { retryCount: 0 },
  )
}
function Fw(e) {
  return {
    addChain: (t) => p1(e, t),
    deployContract: (t) => Sw(e, t),
    getAddresses: () => Cw(e),
    getChainId: () => Po(e),
    getPermissions: () => Tw(e),
    prepareTransactionRequest: (t) => rs(e, t),
    requestAddresses: () => Nw(e),
    requestPermissions: (t) => _w(e, t),
    sendRawTransaction: (t) => Pl(e, t),
    sendTransaction: (t) => El(e, t),
    signMessage: (t) => Iw(e, t),
    signTransaction: (t) => Ow(e, t),
    signTypedData: (t) => zw(e, t),
    switchChain: (t) => Aw(e, t),
    watchAsset: (t) => $w(e, t),
    writeContract: (t) => d1(e, t),
  }
}
function jw(e) {
  const { key: t = 'wallet', name: n = 'Wallet Client', transport: r } = e
  return E0({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: 'walletClient',
  }).extend(Fw)
}
const M0 = K1({
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
  Bw = (e, t) => ({ ...e, custom: { ...e.custom, apiKey: t } }),
  Rw = kw({ chain: M0, transport: P1() }),
  D0 = 'ylJR7KB81p6BdOykf56203KQiNAf3FNrXHCxs9r4'
console.log('index.tsx', D0)
const ff = jw({ chain: Bw(M0, D0), transport: g1(window.ethereum) })
function Lw() {
  const [e, t] = en.useState(),
    [n, r] = en.useState(),
    [o, i] = en.useState(),
    s = Ol.createRef(),
    u = Ol.createRef(),
    a = async () => {
      const [f] = await ff.requestAddresses()
      t(f)
    },
    l = async () => {
      if (!e) return
      const f = await ff.sendTransaction({
        account: e,
        to: s.current.value,
        value: uw(u.current.value),
      })
      r(f)
    }
  return (
    en.useEffect(() => {
      ;(async () => {
        if (n) {
          const f = await Rw.waitForTransactionReceipt({ hash: n })
          i(f)
        }
      })()
    }, [n]),
    e
      ? ps(ch, {
          children: [
            ps('div', { children: ['Connected: ', e] }),
            Xt('input', { ref: s, placeholder: 'address' }),
            Xt('input', { ref: u, placeholder: 'value (ether)' }),
            Xt('button', { onClick: l, children: 'Send' }),
            o &&
              ps('div', {
                children: [
                  'Receipt:',
                  ' ',
                  Xt('pre', {
                    children: Xt('code', { children: ue(o, null, 2) }),
                  }),
                ],
              }),
          ],
        })
      : Xt('button', { onClick: a, children: 'Connect Wallet' })
  )
}
Vs.createRoot(document.getElementById('root')).render(Xt(Lw, {}))
export {
  k as B,
  Tr as H,
  et as I,
  yt as a,
  qe as b,
  os as c,
  Dg as d,
  go as e,
  Za as g,
  Ie as i,
  ue as s,
}
