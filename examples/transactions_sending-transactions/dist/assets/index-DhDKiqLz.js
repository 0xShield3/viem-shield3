function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Hm = Object.defineProperty
var Gm = (e, t, n) =>
  t in e
    ? Hm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var w = (e, t, n) => (Gm(e, typeof t != 'symbol' ? t + '' : t, n), n)
;(() => {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const s = {}
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const s = n(o)
    fetch(o.href, s)
  }
})()
function Vm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Qf = { exports: {} },
  Ri = {},
  Kf = { exports: {} },
  L = {} /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho = Symbol.for('react.element'),
  Wm = Symbol.for('react.portal'),
  qm = Symbol.for('react.fragment'),
  Qm = Symbol.for('react.strict_mode'),
  Km = Symbol.for('react.profiler'),
  Jm = Symbol.for('react.provider'),
  Xm = Symbol.for('react.context'),
  Ym = Symbol.for('react.forward_ref'),
  Zm = Symbol.for('react.suspense'),
  ey = Symbol.for('react.memo'),
  ty = Symbol.for('react.lazy'),
  Yc = Symbol.iterator
function ny(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Yc && e[Yc]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Jf = {
    isMounted: () => !1,
    enqueueForceUpdate: () => {},
    enqueueReplaceState: () => {},
    enqueueSetState: () => {},
  },
  Xf = Object.assign,
  Yf = {}
function ir(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Yf),
    (this.updater = n || Jf)
}
ir.prototype.isReactComponent = {}
ir.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Zf() {}
Zf.prototype = ir.prototype
function wu(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Yf),
    (this.updater = n || Jf)
}
var xu = (wu.prototype = new Zf())
xu.constructor = wu
Xf(xu, ir.prototype)
xu.isPureReactComponent = !0
var Zc = Array.isArray,
  ep = Object.prototype.hasOwnProperty,
  Eu = { current: null },
  tp = { key: !0, ref: !0, __self: !0, __source: !0 }
function np(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      ep.call(t, r) && !tp.hasOwnProperty(r) && (o[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) o.children = n
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2]
    o.children = l
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r])
  return { $$typeof: ho, type: e, key: s, ref: i, props: o, _owner: Eu.current }
}
function ry(e, t) {
  return {
    $$typeof: ho,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Su(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ho
}
function oy(e) {
  var t = { '=': '=0', ':': '=2' }
  return '$' + e.replace(/[=:]/g, (n) => t[n])
}
var ed = /\/+/g
function va(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? oy('' + e.key)
    : t.toString(36)
}
function fs(e, t, n, r, o) {
  var s = typeof e
  ;(s === 'undefined' || s === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (s) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case ho:
          case Wm:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + va(i, 0) : r),
      Zc(o)
        ? ((n = ''),
          e != null && (n = e.replace(ed, '$&/') + '/'),
          fs(o, t, n, '', (u) => u))
        : o != null &&
          (Su(o) &&
            (o = ry(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ed, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Zc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a]
      var l = r + va(s, a)
      i += fs(s, t, n, l, o)
    }
  else if (((l = ny(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + va(s, a++)), (i += fs(s, t, n, l, o))
  else if (s === 'object')
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
  return i
}
function Bo(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return fs(e, r, '', '', (s) => t.call(n, s, o++)), r
}
function sy(e) {
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
var ke = { current: null },
  ps = { transition: null },
  iy = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: ps,
    ReactCurrentOwner: Eu,
  }
L.Children = {
  map: Bo,
  forEach: (e, t, n) => {
    Bo(
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
      Bo(e, () => {
        t++
      }),
      t
    )
  },
  toArray: (e) => Bo(e, (t) => t) || [],
  only: (e) => {
    if (!Su(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
L.Component = ir
L.Fragment = qm
L.Profiler = Km
L.PureComponent = wu
L.StrictMode = Qm
L.Suspense = Zm
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy
L.cloneElement = (e, t, n) => {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = Xf({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Eu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (l in t)
      ep.call(t, l) &&
        !tp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    a = Array(l)
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2]
    r.children = a
  }
  return { $$typeof: ho, type: e.type, key: o, ref: s, props: r, _owner: i }
}
L.createContext = (e) => (
  (e = {
    $$typeof: Xm,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  }),
  (e.Provider = { $$typeof: Jm, _context: e }),
  (e.Consumer = e)
)
L.createElement = np
L.createFactory = (e) => {
  var t = np.bind(null, e)
  return (t.type = e), t
}
L.createRef = () => ({ current: null })
L.forwardRef = (e) => ({ $$typeof: Ym, render: e })
L.isValidElement = Su
L.lazy = (e) => ({
  $$typeof: ty,
  _payload: { _status: -1, _result: e },
  _init: sy,
})
L.memo = (e, t) => ({ $$typeof: ey, type: e, compare: t === void 0 ? null : t })
L.startTransition = (e) => {
  var t = ps.transition
  ps.transition = {}
  try {
    e()
  } finally {
    ps.transition = t
  }
}
L.unstable_act = () => {
  throw Error('act(...) is not supported in production builds of React.')
}
L.useCallback = (e, t) => ke.current.useCallback(e, t)
L.useContext = (e) => ke.current.useContext(e)
L.useDebugValue = () => {}
L.useDeferredValue = (e) => ke.current.useDeferredValue(e)
L.useEffect = (e, t) => ke.current.useEffect(e, t)
L.useId = () => ke.current.useId()
L.useImperativeHandle = (e, t, n) => ke.current.useImperativeHandle(e, t, n)
L.useInsertionEffect = (e, t) => ke.current.useInsertionEffect(e, t)
L.useLayoutEffect = (e, t) => ke.current.useLayoutEffect(e, t)
L.useMemo = (e, t) => ke.current.useMemo(e, t)
L.useReducer = (e, t, n) => ke.current.useReducer(e, t, n)
L.useRef = (e) => ke.current.useRef(e)
L.useState = (e) => ke.current.useState(e)
L.useSyncExternalStore = (e, t, n) => ke.current.useSyncExternalStore(e, t, n)
L.useTransition = () => ke.current.useTransition()
L.version = '18.2.0'
Kf.exports = L
var fn = Kf.exports
const td = Vm(fn) /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ay = fn,
  ly = Symbol.for('react.element'),
  uy = Symbol.for('react.fragment'),
  cy = Object.prototype.hasOwnProperty,
  dy = ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  fy = { key: !0, ref: !0, __self: !0, __source: !0 }
function rp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) cy.call(t, r) && !fy.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: ly, type: e, key: s, ref: i, props: o, _owner: dy.current }
}
Ri.Fragment = uy
Ri.jsx = rp
Ri.jsxs = rp
Qf.exports = Ri
var ku = Qf.exports
const py = ku.Fragment,
  un = ku.jsx,
  wa = ku.jsxs
var tl = {},
  op = { exports: {} },
  Oe = {},
  sp = { exports: {} },
  ip = {} /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
;((e) => {
  function t(F, z) {
    var O = F.length
    F.push(z)
    while (0 < O) {
      var Y = (O - 1) >>> 1,
        se = F[Y]
      if (0 < o(se, z)) (F[Y] = z), (F[O] = se), (O = Y)
      else break
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0]
  }
  function r(F) {
    if (F.length === 0) return null
    var z = F[0],
      O = F.pop()
    if (O !== z) {
      F[0] = O
      for (var Y = 0, se = F.length, No = se >>> 1; Y < No; ) {
        var an = 2 * (Y + 1) - 1,
          ga = F[an],
          ln = an + 1,
          Fo = F[ln]
        if (0 > o(ga, O))
          ln < se && 0 > o(Fo, ga)
            ? ((F[Y] = Fo), (F[ln] = O), (Y = ln))
            : ((F[Y] = ga), (F[an] = O), (Y = an))
        else if (ln < se && 0 > o(Fo, O)) (F[Y] = Fo), (F[ln] = O), (Y = ln)
        else break
      }
    }
    return z
  }
  function o(F, z) {
    var O = F.sortIndex - z.sortIndex
    return O !== 0 ? O : F.id - z.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance
    e.unstable_now = () => s.now()
  } else {
    var i = Date,
      a = i.now()
    e.unstable_now = () => i.now() - a
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    v = !1,
    g = !1,
    m = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(F) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u)
      else if (z.startTime <= F) r(u), (z.sortIndex = z.expirationTime), t(l, z)
      else break
      z = n(u)
    }
  }
  function x(F) {
    if (((m = !1), y(F), !g))
      if (n(l) !== null) (g = !0), ma(C)
      else {
        var z = n(u)
        z !== null && ya(x, z.startTime - F)
      }
  }
  function C(F, z) {
    ;(g = !1), m && ((m = !1), p(A), (A = -1)), (v = !0)
    var O = f
    try {
      for (
        y(z), c = n(l);
        c !== null && (!(c.expirationTime > z) || (F && !j()));
      ) {
        var Y = c.callback
        if (typeof Y == 'function') {
          ;(c.callback = null), (f = c.priorityLevel)
          var se = Y(c.expirationTime <= z)
          ;(z = e.unstable_now()),
            typeof se == 'function' ? (c.callback = se) : c === n(l) && r(l),
            y(z)
        } else r(l)
        c = n(l)
      }
      if (c !== null) var No = !0
      else {
        var an = n(u)
        an !== null && ya(x, an.startTime - z), (No = !1)
      }
      return No
    } finally {
      ;(c = null), (f = O), (v = !1)
    }
  }
  var S = !1,
    b = null,
    A = -1,
    B = 5,
    I = -1
  function j() {
    return !(e.unstable_now() - I < B)
  }
  function we() {
    if (b !== null) {
      var F = e.unstable_now()
      I = F
      var z = !0
      try {
        z = b(!0, F)
      } finally {
        z ? he() : ((S = !1), (b = null))
      }
    } else S = !1
  }
  var he
  if (typeof h == 'function')
    he = () => {
      h(we)
    }
  else if (typeof MessageChannel < 'u') {
    var hr = new MessageChannel(),
      mr = hr.port2
    ;(hr.port1.onmessage = we),
      (he = () => {
        mr.postMessage(null)
      })
  } else
    he = () => {
      E(we, 0)
    }
  function ma(F) {
    ;(b = F), S || ((S = !0), he())
  }
  function ya(F, z) {
    A = E(() => {
      F(e.unstable_now())
    }, z)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = (F) => {
      F.callback = null
    }),
    (e.unstable_continueExecution = () => {
      g || v || ((g = !0), ma(C))
    }),
    (e.unstable_forceFrameRate = (F) => {
      0 > F || 125 < F
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (B = 0 < F ? Math.floor(1e3 / F) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = () => f),
    (e.unstable_getFirstCallbackNode = () => n(l)),
    (e.unstable_next = (F) => {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var z = 3
          break
        default:
          z = f
      }
      var O = f
      f = z
      try {
        return F()
      } finally {
        f = O
      }
    }),
    (e.unstable_pauseExecution = () => {}),
    (e.unstable_requestPaint = () => {}),
    (e.unstable_runWithPriority = (F, z) => {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          F = 3
      }
      var O = f
      f = F
      try {
        return z()
      } finally {
        f = O
      }
    }),
    (e.unstable_scheduleCallback = (F, z, O) => {
      var Y = e.unstable_now()
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? Y + O : Y))
          : (O = Y),
        F)
      ) {
        case 1:
          var se = -1
          break
        case 2:
          se = 250
          break
        case 5:
          se = 1073741823
          break
        case 4:
          se = 1e4
          break
        default:
          se = 5e3
      }
      return (
        (se = O + se),
        (F = {
          id: d++,
          callback: z,
          priorityLevel: F,
          startTime: O,
          expirationTime: se,
          sortIndex: -1,
        }),
        O > Y
          ? ((F.sortIndex = O),
            t(u, F),
            n(l) === null &&
              F === n(u) &&
              (m ? (p(A), (A = -1)) : (m = !0), ya(x, O - Y)))
          : ((F.sortIndex = se), t(l, F), g || v || ((g = !0), ma(C))),
        F
      )
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = (F) => {
      var z = f
      return function () {
        var O = f
        f = z
        try {
          return F.apply(this, arguments)
        } finally {
          f = O
        }
      }
    })
})(ip)
sp.exports = ip
var hy = sp.exports /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap = fn,
  $e = hy
function T(e) {
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
var lp = new Set(),
  Hr = {}
function bn(e, t) {
  Qn(e, t), Qn(e + 'Capture', t)
}
function Qn(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) lp.add(t[e])
}
var Et = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  nl = Object.prototype.hasOwnProperty,
  my =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nd = {},
  rd = {}
function yy(e) {
  return nl.call(rd, e)
    ? !0
    : nl.call(nd, e)
      ? !1
      : my.test(e)
        ? (rd[e] = !0)
        : ((nd[e] = !0), !1)
}
function gy(e, t, n, r) {
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
function vy(e, t, n, r) {
  if (t === null || typeof t > 'u' || gy(e, t, n, r)) return !0
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
function be(e, t, n, r, o, s, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i)
}
var pe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach((e) => {
    pe[e] = new be(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach((e) => {
  var t = e[0]
  pe[t] = new be(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach((e) => {
  pe[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach((e) => {
  pe[e] = new be(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach((e) => {
    pe[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach((e) => {
  pe[e] = new be(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach((e) => {
  pe[e] = new be(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach((e) => {
  pe[e] = new be(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach((e) => {
  pe[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var bu = /[\-:]([a-z])/g
function Cu(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach((e) => {
    var t = e.replace(bu, Cu)
    pe[t] = new be(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach((e) => {
    var t = e.replace(bu, Cu)
    pe[t] = new be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach((e) => {
  var t = e.replace(bu, Cu)
  pe[t] = new be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach((e) => {
  pe[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
pe.xlinkHref = new be(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach((e) => {
  pe[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Pu(e, t, n, r) {
  var o = pe.hasOwnProperty(t) ? pe[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (vy(t, n, o, r) && (n = null),
    r || o === null
      ? yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var At = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Io = Symbol.for('react.element'),
  An = Symbol.for('react.portal'),
  Nn = Symbol.for('react.fragment'),
  Tu = Symbol.for('react.strict_mode'),
  rl = Symbol.for('react.profiler'),
  up = Symbol.for('react.provider'),
  cp = Symbol.for('react.context'),
  Au = Symbol.for('react.forward_ref'),
  ol = Symbol.for('react.suspense'),
  sl = Symbol.for('react.suspense_list'),
  Nu = Symbol.for('react.memo'),
  Rt = Symbol.for('react.lazy'),
  dp = Symbol.for('react.offscreen'),
  od = Symbol.iterator
function yr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (od && e[od]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var J = Object.assign,
  xa
function Ar(e) {
  if (xa === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      xa = (t && t[1]) || ''
    }
  return (
    `
` +
    xa +
    e
  )
}
var Ea = !1
function Sa(e, t) {
  if (!e || Ea) return ''
  Ea = !0
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
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];
      )
        a--
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var l =
                  `
` + o[i].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= i && 0 <= a)
          break
        }
    }
  } finally {
    ;(Ea = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Ar(e) : ''
}
function wy(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type)
    case 16:
      return Ar('Lazy')
    case 13:
      return Ar('Suspense')
    case 19:
      return Ar('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Sa(e.type, !1)), e
    case 11:
      return (e = Sa(e.type.render, !1)), e
    case 1:
      return (e = Sa(e.type, !0)), e
    default:
      return ''
  }
}
function il(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Nn:
      return 'Fragment'
    case An:
      return 'Portal'
    case rl:
      return 'Profiler'
    case Tu:
      return 'StrictMode'
    case ol:
      return 'Suspense'
    case sl:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case cp:
        return (e.displayName || 'Context') + '.Consumer'
      case up:
        return (e._context.displayName || 'Context') + '.Provider'
      case Au:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Nu:
        return (
          (t = e.displayName || null), t !== null ? t : il(e.type) || 'Memo'
        )
      case Rt:
        ;(t = e._payload), (e = e._init)
        try {
          return il(e(t))
        } catch {}
    }
  return null
}
function xy(e) {
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
      return il(t)
    case 8:
      return t === Tu ? 'StrictMode' : 'Mode'
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
function Qt(e) {
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
function fp(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Ey(e) {
  var t = fp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      s = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (i) {
          ;(r = '' + i), s.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: () => r,
        setValue: (i) => {
          r = '' + i
        },
        stopTracking: () => {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ro(e) {
  e._valueTracker || (e._valueTracker = Ey(e))
}
function pp(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = fp(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function As(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function al(e, t) {
  var n = t.checked
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function sd(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function hp(e, t) {
  ;(t = t.checked), t != null && Pu(e, 'checked', t, !1)
}
function ll(e, t) {
  hp(e, t)
  var n = Qt(t.value),
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
    ? ul(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ul(e, t.type, Qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function id(e, t, n) {
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
function ul(e, t, n) {
  ;(t !== 'number' || As(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Nr = Array.isArray
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Qt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91))
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function ad(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92))
      if (Nr(n)) {
        if (1 < n.length) throw Error(T(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Qt(n) }
}
function mp(e, t) {
  var n = Qt(t.value),
    r = Qt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function ld(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function yp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function dl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? yp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var _o,
  gp = ((e) =>
    typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? (t, n, r, o) => {
          MSApp.execUnsafeLocalFunction(() => e(t, n, r, o))
        }
      : e)((e, t) => {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        _o = _o || document.createElement('div'),
          _o.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = _o.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild)
      while (t.firstChild) e.appendChild(t.firstChild)
    }
  })
function Gr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Ir = {
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
  Sy = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Ir).forEach((e) => {
  Sy.forEach((t) => {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e])
  })
})
function vp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
      ? ('' + t).trim()
      : t + 'px'
}
function wp(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = vp(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var ky = J(
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
function fl(e, t) {
  if (t) {
    if (ky[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(T(62))
  }
}
function pl(e, t) {
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
var hl = null
function Fu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var ml = null,
  jn = null,
  Hn = null
function ud(e) {
  if ((e = go(e))) {
    if (typeof ml != 'function') throw Error(T(280))
    var t = e.stateNode
    t && ((t = Li(t)), ml(e.stateNode, e.type, t))
  }
}
function xp(e) {
  jn ? (Hn ? Hn.push(e) : (Hn = [e])) : (jn = e)
}
function Ep() {
  if (jn) {
    var e = jn,
      t = Hn
    if (((Hn = jn = null), ud(e), t)) for (e = 0; e < t.length; e++) ud(t[e])
  }
}
function Sp(e, t) {
  return e(t)
}
function kp() {}
var ka = !1
function bp(e, t, n) {
  if (ka) return e(t, n)
  ka = !0
  try {
    return Sp(e, t, n)
  } finally {
    ;(ka = !1), (jn !== null || Hn !== null) && (kp(), Ep())
  }
}
function Vr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Li(n)
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
  if (n && typeof n != 'function') throw Error(T(231, t, typeof n))
  return n
}
var yl = !1
if (Et)
  try {
    var gr = {}
    Object.defineProperty(gr, 'passive', {
      get: () => {
        yl = !0
      },
    }),
      window.addEventListener('test', gr, gr),
      window.removeEventListener('test', gr, gr)
  } catch {
    yl = !1
  }
function by(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var Rr = !1,
  Ns = null,
  Fs = !1,
  gl = null,
  Cy = {
    onError: (e) => {
      ;(Rr = !0), (Ns = e)
    },
  }
function Py(e, t, n, r, o, s, i, a, l) {
  ;(Rr = !1), (Ns = null), by.apply(Cy, arguments)
}
function Ty(e, t, n, r, o, s, i, a, l) {
  if ((Py.apply(this, arguments), Rr)) {
    if (Rr) {
      var u = Ns
      ;(Rr = !1), (Ns = null)
    } else throw Error(T(198))
    Fs || ((Fs = !0), (gl = u))
  }
}
function Cn(e) {
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
function Cp(e) {
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
function cd(e) {
  if (Cn(e) !== e) throw Error(T(188))
}
function Ay(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(T(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var s = o.alternate
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return cd(o), e
        if (s === r) return cd(o), t
        s = s.sibling
      }
      throw Error(T(188))
    }
    if (n.return !== r.return) (n = o), (r = s)
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          ;(i = !0), (n = o), (r = s)
          break
        }
        if (a === r) {
          ;(i = !0), (r = o), (n = s)
          break
        }
        a = a.sibling
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            ;(i = !0), (n = s), (r = o)
            break
          }
          if (a === r) {
            ;(i = !0), (r = s), (n = o)
            break
          }
          a = a.sibling
        }
        if (!i) throw Error(T(189))
      }
    }
    if (n.alternate !== r) throw Error(T(190))
  }
  if (n.tag !== 3) throw Error(T(188))
  return n.stateNode.current === n ? e : t
}
function Pp(e) {
  return (e = Ay(e)), e !== null ? Tp(e) : null
}
function Tp(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Tp(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Ap = $e.unstable_scheduleCallback,
  dd = $e.unstable_cancelCallback,
  Ny = $e.unstable_shouldYield,
  Fy = $e.unstable_requestPaint,
  Z = $e.unstable_now,
  By = $e.unstable_getCurrentPriorityLevel,
  Bu = $e.unstable_ImmediatePriority,
  Np = $e.unstable_UserBlockingPriority,
  Bs = $e.unstable_NormalPriority,
  Iy = $e.unstable_LowPriority,
  Fp = $e.unstable_IdlePriority,
  _i = null,
  at = null
function Ry(e) {
  if (at && typeof at.onCommitFiberRoot == 'function')
    try {
      at.onCommitFiberRoot(_i, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : $y,
  _y = Math.log,
  zy = Math.LN2
function $y(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_y(e) / zy) | 0)) | 0
}
var zo = 64,
  $o = 4194304
function Fr(e) {
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
function Is(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var a = i & ~o
    a !== 0 ? (r = Fr(a)) : ((s &= i), s !== 0 && (r = Fr(s)))
  } else (i = n & ~o), i !== 0 ? (r = Fr(i)) : s !== 0 && (r = Fr(s))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function Oy(e, t) {
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
function Ly(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - Ye(s),
      a = 1 << i,
      l = o[i]
    l === -1
      ? (!(a & n) || a & r) && (o[i] = Oy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a)
  }
}
function vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Bp() {
  var e = zo
  return (zo <<= 1), !(zo & 4194240) && (zo = 64), e
}
function ba(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function mo(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n)
}
function Dy(e, t) {
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
    var o = 31 - Ye(n),
      s = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s)
  }
}
function Iu(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var H = 0
function Ip(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Rp,
  Ru,
  _p,
  zp,
  $p,
  wl = !1,
  Oo = [],
  Dt = null,
  Mt = null,
  Ut = null,
  Wr = new Map(),
  qr = new Map(),
  zt = [],
  My =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function fd(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Dt = null
      break
    case 'dragenter':
    case 'dragleave':
      Mt = null
      break
    case 'mouseover':
    case 'mouseout':
      Ut = null
      break
    case 'pointerover':
    case 'pointerout':
      Wr.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      qr.delete(t.pointerId)
  }
}
function vr(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = go(t)), t !== null && Ru(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Uy(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Dt = vr(Dt, e, t, n, r, o)), !0
    case 'dragenter':
      return (Mt = vr(Mt, e, t, n, r, o)), !0
    case 'mouseover':
      return (Ut = vr(Ut, e, t, n, r, o)), !0
    case 'pointerover':
      var s = o.pointerId
      return Wr.set(s, vr(Wr.get(s) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (s = o.pointerId), qr.set(s, vr(qr.get(s) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function Op(e) {
  var t = pn(e.target)
  if (t !== null) {
    var n = Cn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Cp(n)), t !== null)) {
          ;(e.blockedOn = t),
            $p(e.priority, () => {
              _p(n)
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
function hs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(hl = r), n.target.dispatchEvent(r), (hl = null)
    } else return (t = go(n)), t !== null && Ru(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function pd(e, t, n) {
  hs(e) && n.delete(t)
}
function jy() {
  ;(wl = !1),
    Dt !== null && hs(Dt) && (Dt = null),
    Mt !== null && hs(Mt) && (Mt = null),
    Ut !== null && hs(Ut) && (Ut = null),
    Wr.forEach(pd),
    qr.forEach(pd)
}
function wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wl ||
      ((wl = !0), $e.unstable_scheduleCallback($e.unstable_NormalPriority, jy)))
}
function Qr(e) {
  function t(o) {
    return wr(o, e)
  }
  if (0 < Oo.length) {
    wr(Oo[0], e)
    for (var n = 1; n < Oo.length; n++) {
      var r = Oo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Dt !== null && wr(Dt, e),
      Mt !== null && wr(Mt, e),
      Ut !== null && wr(Ut, e),
      Wr.forEach(t),
      qr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null)
  while (0 < zt.length && ((n = zt[0]), n.blockedOn === null))
    Op(n), n.blockedOn === null && zt.shift()
}
var Gn = At.ReactCurrentBatchConfig,
  Rs = !0
function Hy(e, t, n, r) {
  var o = H,
    s = Gn.transition
  Gn.transition = null
  try {
    ;(H = 1), _u(e, t, n, r)
  } finally {
    ;(H = o), (Gn.transition = s)
  }
}
function Gy(e, t, n, r) {
  var o = H,
    s = Gn.transition
  Gn.transition = null
  try {
    ;(H = 4), _u(e, t, n, r)
  } finally {
    ;(H = o), (Gn.transition = s)
  }
}
function _u(e, t, n, r) {
  if (Rs) {
    var o = xl(e, t, n, r)
    if (o === null) _a(e, t, r, _s, n), fd(e, r)
    else if (Uy(o, e, t, n, r)) r.stopPropagation()
    else if ((fd(e, r), t & 4 && -1 < My.indexOf(e))) {
      while (o !== null) {
        var s = go(o)
        if (
          (s !== null && Rp(s),
          (s = xl(e, t, n, r)),
          s === null && _a(e, t, r, _s, n),
          s === o)
        )
          break
        o = s
      }
      o !== null && r.stopPropagation()
    } else _a(e, t, r, null, n)
  }
}
var _s = null
function xl(e, t, n, r) {
  if (((_s = null), (e = Fu(r)), (e = pn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Cp(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (_s = e), null
}
function Lp(e) {
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
      switch (By()) {
        case Bu:
          return 1
        case Np:
          return 4
        case Bs:
        case Iy:
          return 16
        case Fp:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Ot = null,
  zu = null,
  ms = null
function Dp() {
  if (ms) return ms
  var e,
    t = zu,
    n = t.length,
    r,
    o = 'value' in Ot ? Ot.value : Ot.textContent,
    s = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (ms = o.slice(e, 1 < r ? 1 - r : void 0))
}
function ys(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Lo() {
  return !0
}
function hd() {
  return !1
}
function Le(e) {
  function t(n, r, o, s, i) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null)
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]))
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null
          ? s.defaultPrevented
          : s.returnValue === !1
      )
        ? Lo
        : hd),
      (this.isPropagationStopped = hd),
      this
    )
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Lo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lo))
      },
      persist: () => {},
      isPersistent: Lo,
    }),
    t
  )
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: (e) => e.timeStamp || Date.now(),
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $u = Le(ar),
  yo = J({}, ar, { view: 0, detail: 0 }),
  Vy = Le(yo),
  Ca,
  Pa,
  xr,
  zi = J({}, yo, {
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
    getModifierState: Ou,
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
        : (e !== xr &&
            (xr && e.type === 'mousemove'
              ? ((Ca = e.screenX - xr.screenX), (Pa = e.screenY - xr.screenY))
              : (Pa = Ca = 0),
            (xr = e)),
          Ca),
    movementY: (e) => ('movementY' in e ? e.movementY : Pa),
  }),
  md = Le(zi),
  Wy = J({}, zi, { dataTransfer: 0 }),
  qy = Le(Wy),
  Qy = J({}, yo, { relatedTarget: 0 }),
  Ta = Le(Qy),
  Ky = J({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jy = Le(Ky),
  Xy = J({}, ar, {
    clipboardData: (e) =>
      'clipboardData' in e ? e.clipboardData : window.clipboardData,
  }),
  Yy = Le(Xy),
  Zy = J({}, ar, { data: 0 }),
  yd = Le(Zy),
  e1 = {
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
  t1 = {
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
  n1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function r1(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = n1[e]) ? !!t[e] : !1
}
function Ou() {
  return r1
}
var o1 = J({}, yo, {
    key: (e) => {
      if (e.key) {
        var t = e1[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ys(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? t1[e.keyCode] || 'Unidentified'
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
    getModifierState: Ou,
    charCode: (e) => (e.type === 'keypress' ? ys(e) : 0),
    keyCode: (e) =>
      e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0,
    which: (e) =>
      e.type === 'keypress'
        ? ys(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0,
  }),
  s1 = Le(o1),
  i1 = J({}, zi, {
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
  gd = Le(i1),
  a1 = J({}, yo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ou,
  }),
  l1 = Le(a1),
  u1 = J({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c1 = Le(u1),
  d1 = J({}, zi, {
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
  f1 = Le(d1),
  p1 = [9, 13, 27, 32],
  Lu = Et && 'CompositionEvent' in window,
  _r = null
Et && 'documentMode' in document && (_r = document.documentMode)
var h1 = Et && 'TextEvent' in window && !_r,
  Mp = Et && (!Lu || (_r && 8 < _r && 11 >= _r)),
  vd = ' ',
  wd = !1
function Up(e, t) {
  switch (e) {
    case 'keyup':
      return p1.indexOf(t.keyCode) !== -1
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
function jp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Fn = !1
function m1(e, t) {
  switch (e) {
    case 'compositionend':
      return jp(t)
    case 'keypress':
      return t.which !== 32 ? null : ((wd = !0), vd)
    case 'textInput':
      return (e = t.data), e === vd && wd ? null : e
    default:
      return null
  }
}
function y1(e, t) {
  if (Fn)
    return e === 'compositionend' || (!Lu && Up(e, t))
      ? ((e = Dp()), (ms = zu = Ot = null), (Fn = !1), e)
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
      return Mp && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var g1 = {
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
function xd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!g1[e.type] : t === 'textarea'
}
function Hp(e, t, n, r) {
  xp(r),
    (t = zs(t, 'onChange')),
    0 < t.length &&
      ((n = new $u('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var zr = null,
  Kr = null
function v1(e) {
  e0(e, 0)
}
function $i(e) {
  var t = Rn(e)
  if (pp(t)) return e
}
function w1(e, t) {
  if (e === 'change') return t
}
var Gp = !1
if (Et) {
  var Aa
  if (Et) {
    var Na = 'oninput' in document
    if (!Na) {
      var Ed = document.createElement('div')
      Ed.setAttribute('oninput', 'return;'),
        (Na = typeof Ed.oninput == 'function')
    }
    Aa = Na
  } else Aa = !1
  Gp = Aa && (!document.documentMode || 9 < document.documentMode)
}
function Sd() {
  zr && (zr.detachEvent('onpropertychange', Vp), (Kr = zr = null))
}
function Vp(e) {
  if (e.propertyName === 'value' && $i(Kr)) {
    var t = []
    Hp(t, Kr, e, Fu(e)), bp(v1, t)
  }
}
function x1(e, t, n) {
  e === 'focusin'
    ? (Sd(), (zr = t), (Kr = n), zr.attachEvent('onpropertychange', Vp))
    : e === 'focusout' && Sd()
}
function E1(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return $i(Kr)
}
function S1(e, t) {
  if (e === 'click') return $i(t)
}
function k1(e, t) {
  if (e === 'input' || e === 'change') return $i(t)
}
function b1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var et = typeof Object.is == 'function' ? Object.is : b1
function Jr(e, t) {
  if (et(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!nl.call(t, o) || !et(e[o], t[o])) return !1
  }
  return !0
}
function kd(e) {
  while (e && e.firstChild) e = e.firstChild
  return e
}
function bd(e, t) {
  var n = kd(e)
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
    n = kd(n)
  }
}
function Wp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Wp(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function qp() {
  for (var e = window, t = As(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = As(e.document)
  }
  return t
}
function Du(e) {
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
function C1(e) {
  var t = qp(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Du(n)) {
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
          s = Math.min(r.start, o)
        ;(r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = bd(n, s))
        var i = bd(n, r)
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var P1 = Et && 'documentMode' in document && 11 >= document.documentMode,
  Bn = null,
  El = null,
  $r = null,
  Sl = !1
function Cd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Sl ||
    Bn == null ||
    Bn !== As(r) ||
    ((r = Bn),
    'selectionStart' in r && Du(r)
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
    ($r && Jr($r, r)) ||
      (($r = r),
      (r = zs(El, 'onSelect')),
      0 < r.length &&
        ((t = new $u('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Bn))))
}
function Do(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var In = {
    animationend: Do('Animation', 'AnimationEnd'),
    animationiteration: Do('Animation', 'AnimationIteration'),
    animationstart: Do('Animation', 'AnimationStart'),
    transitionend: Do('Transition', 'TransitionEnd'),
  },
  Fa = {},
  Qp = {}
Et &&
  ((Qp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  'TransitionEvent' in window || delete In.transitionend.transition)
function Oi(e) {
  if (Fa[e]) return Fa[e]
  if (!In[e]) return e
  var t = In[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Qp) return (Fa[e] = t[n])
  return e
}
var Kp = Oi('animationend'),
  Jp = Oi('animationiteration'),
  Xp = Oi('animationstart'),
  Yp = Oi('transitionend'),
  Zp = new Map(),
  Pd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function nn(e, t) {
  Zp.set(e, t), bn(t, [e])
}
for (var Ba = 0; Ba < Pd.length; Ba++) {
  var Ia = Pd[Ba],
    T1 = Ia.toLowerCase(),
    A1 = Ia[0].toUpperCase() + Ia.slice(1)
  nn(T1, 'on' + A1)
}
nn(Kp, 'onAnimationEnd')
nn(Jp, 'onAnimationIteration')
nn(Xp, 'onAnimationStart')
nn('dblclick', 'onDoubleClick')
nn('focusin', 'onFocus')
nn('focusout', 'onBlur')
nn(Yp, 'onTransitionEnd')
Qn('onMouseEnter', ['mouseout', 'mouseover'])
Qn('onMouseLeave', ['mouseout', 'mouseover'])
Qn('onPointerEnter', ['pointerout', 'pointerover'])
Qn('onPointerLeave', ['pointerout', 'pointerover'])
bn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
bn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
bn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
bn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
bn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
bn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var Br =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  N1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Br))
function Td(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Ty(r, t, void 0, e), (e.currentTarget = null)
}
function e0(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var s = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            l = a.instance,
            u = a.currentTarget
          if (((a = a.listener), l !== s && o.isPropagationStopped())) break e
          Td(o, a, u), (s = l)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && o.isPropagationStopped())
          )
            break e
          Td(o, a, u), (s = l)
        }
    }
  }
  if (Fs) throw ((e = gl), (Fs = !1), (gl = null), e)
}
function V(e, t) {
  var n = t[Tl]
  n === void 0 && (n = t[Tl] = new Set())
  var r = e + '__bubble'
  n.has(r) || (t0(t, e, 2, !1), n.add(r))
}
function Ra(e, t, n) {
  var r = 0
  t && (r |= 4), t0(n, e, r, t)
}
var Mo = '_reactListening' + Math.random().toString(36).slice(2)
function Xr(e) {
  if (!e[Mo]) {
    ;(e[Mo] = !0),
      lp.forEach((n) => {
        n !== 'selectionchange' && (N1.has(n) || Ra(n, !1, e), Ra(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Mo] || ((t[Mo] = !0), Ra('selectionchange', !1, t))
  }
}
function t0(e, t, n, r) {
  switch (Lp(t)) {
    case 1:
      var o = Hy
      break
    case 4:
      o = Gy
      break
    default:
      o = _u
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !yl ||
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
function _a(e, t, n, r, o) {
  var s = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var l = i.tag
            if (
              (l === 3 || l === 4) &&
              ((l = i.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return
            i = i.return
          }
        while (a !== null) {
          if (((i = pn(a)), i === null)) return
          if (((l = i.tag), l === 5 || l === 6)) {
            r = s = i
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  bp(() => {
    var u = s,
      d = Fu(n),
      c = []
    e: {
      var f = Zp.get(e)
      if (f !== void 0) {
        var v = $u,
          g = e
        switch (e) {
          case 'keypress':
            if (ys(n) === 0) break e
          case 'keydown':
          case 'keyup':
            v = s1
            break
          case 'focusin':
            ;(g = 'focus'), (v = Ta)
            break
          case 'focusout':
            ;(g = 'blur'), (v = Ta)
            break
          case 'beforeblur':
          case 'afterblur':
            v = Ta
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
            v = md
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = qy
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = l1
            break
          case Kp:
          case Jp:
          case Xp:
            v = Jy
            break
          case Yp:
            v = c1
            break
          case 'scroll':
            v = Vy
            break
          case 'wheel':
            v = f1
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = Yy
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = gd
        }
        var m = (t & 4) !== 0,
          E = !m && e === 'scroll',
          p = m ? (f !== null ? f + 'Capture' : null) : f
        m = []
        for (var h = u, y; h !== null; ) {
          y = h
          var x = y.stateNode
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              p !== null && ((x = Vr(h, p)), x != null && m.push(Yr(h, x, y)))),
            E)
          )
            break
          h = h.return
        }
        0 < m.length &&
          ((f = new v(f, g, null, n, d)), c.push({ event: f, listeners: m }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== hl &&
            (g = n.relatedTarget || n.fromElement) &&
            (pn(g) || g[St]))
        )
          break e
        if (
          (v || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? pn(g) : null),
              g !== null &&
                ((E = Cn(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((m = md),
            (x = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = gd),
              (x = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (E = v == null ? f : Rn(v)),
            (y = g == null ? f : Rn(g)),
            (f = new m(x, h + 'leave', v, n, d)),
            (f.target = E),
            (f.relatedTarget = y),
            (x = null),
            pn(d) === u &&
              ((m = new m(p, h + 'enter', g, n, d)),
              (m.target = y),
              (m.relatedTarget = E),
              (x = m)),
            (E = x),
            v && g)
          )
            t: {
              for (m = v, p = g, h = 0, y = m; y; y = Tn(y)) h++
              for (y = 0, x = p; x; x = Tn(x)) y++
              while (0 < h - y) (m = Tn(m)), h--
              while (0 < y - h) (p = Tn(p)), y--
              while (h--) {
                if (m === p || (p !== null && m === p.alternate)) break t
                ;(m = Tn(m)), (p = Tn(p))
              }
              m = null
            }
          else m = null
          v !== null && Ad(c, f, v, m, !1),
            g !== null && E !== null && Ad(c, E, g, m, !0)
        }
      }
      e: {
        if (
          ((f = u ? Rn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && f.type === 'file'))
        )
          var C = w1
        else if (xd(f))
          if (Gp) C = k1
          else {
            C = E1
            var S = x1
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (C = S1)
        if (C && (C = C(e, u))) {
          Hp(c, C, n, d)
          break e
        }
        S && S(e, f, u),
          e === 'focusout' &&
            (S = f._wrapperState) &&
            S.controlled &&
            f.type === 'number' &&
            ul(f, 'number', f.value)
      }
      switch (((S = u ? Rn(u) : window), e)) {
        case 'focusin':
          ;(xd(S) || S.contentEditable === 'true') &&
            ((Bn = S), (El = u), ($r = null))
          break
        case 'focusout':
          $r = El = Bn = null
          break
        case 'mousedown':
          Sl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Sl = !1), Cd(c, n, d)
          break
        case 'selectionchange':
          if (P1) break
        case 'keydown':
        case 'keyup':
          Cd(c, n, d)
      }
      var b
      if (Lu)
        e: {
          switch (e) {
            case 'compositionstart':
              var A = 'onCompositionStart'
              break e
            case 'compositionend':
              A = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              A = 'onCompositionUpdate'
              break e
          }
          A = void 0
        }
      else
        Fn
          ? Up(e, n) && (A = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (A = 'onCompositionStart')
      A &&
        (Mp &&
          n.locale !== 'ko' &&
          (Fn || A !== 'onCompositionStart'
            ? A === 'onCompositionEnd' && Fn && (b = Dp())
            : ((Ot = d),
              (zu = 'value' in Ot ? Ot.value : Ot.textContent),
              (Fn = !0))),
        (S = zs(u, A)),
        0 < S.length &&
          ((A = new yd(A, e, null, n, d)),
          c.push({ event: A, listeners: S }),
          b ? (A.data = b) : ((b = jp(n)), b !== null && (A.data = b)))),
        (b = h1 ? m1(e, n) : y1(e, n)) &&
          ((u = zs(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new yd('onBeforeInput', 'beforeinput', null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = b)))
    }
    e0(c, t)
  })
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function zs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      s = o.stateNode
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Vr(e, n)),
      s != null && r.unshift(Yr(e, s, o)),
      (s = Vr(e, t)),
      s != null && r.push(Yr(e, s, o))),
      (e = e.return)
  }
  return r
}
function Tn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Ad(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode
    if (l !== null && l === r) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Vr(n, s)), l != null && i.unshift(Yr(n, l, a)))
        : o || ((l = Vr(n, s)), l != null && i.push(Yr(n, l, a)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var F1 = /\r\n?/g,
  B1 = /\u0000|\uFFFD/g
function Nd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      F1,
      `
`,
    )
    .replace(B1, '')
}
function Uo(e, t, n) {
  if (((t = Nd(t)), Nd(e) !== t && n)) throw Error(T(425))
}
function $s() {}
var kl = null,
  bl = null
function Cl(e, t) {
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
var Pl = typeof setTimeout == 'function' ? setTimeout : void 0,
  I1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fd = typeof Promise == 'function' ? Promise : void 0,
  R1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fd < 'u'
        ? (e) => Fd.resolve(null).then(e).catch(_1)
        : Pl
function _1(e) {
  setTimeout(() => {
    throw e
  })
}
function za(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Qr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Qr(t)
}
function jt(e) {
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
function Bd(e) {
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
var lr = Math.random().toString(36).slice(2),
  st = '__reactFiber$' + lr,
  Zr = '__reactProps$' + lr,
  St = '__reactContainer$' + lr,
  Tl = '__reactEvents$' + lr,
  z1 = '__reactListeners$' + lr,
  $1 = '__reactHandles$' + lr
function pn(e) {
  var t = e[st]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[st])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bd(e); e !== null; ) {
          if ((n = e[st])) return n
          e = Bd(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function go(e) {
  return (
    (e = e[st] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(T(33))
}
function Li(e) {
  return e[Zr] || null
}
var Al = [],
  _n = -1
function rn(e) {
  return { current: e }
}
function W(e) {
  0 > _n || ((e.current = Al[_n]), (Al[_n] = null), _n--)
}
function G(e, t) {
  _n++, (Al[_n] = e.current), (e.current = t)
}
var Kt = {},
  ve = rn(Kt),
  Ae = rn(!1),
  vn = Kt
function Kn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Kt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    s
  for (s in n) o[s] = t[s]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Ne(e) {
  return (e = e.childContextTypes), e != null
}
function Os() {
  W(Ae), W(ve)
}
function Id(e, t, n) {
  if (ve.current !== Kt) throw Error(T(168))
  G(ve, t), G(Ae, n)
}
function n0(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(T(108, xy(e) || 'Unknown', o))
  return J({}, n, r)
}
function Ls(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
    (vn = ve.current),
    G(ve, e),
    G(Ae, Ae.current),
    !0
  )
}
function Rd(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(T(169))
  n
    ? ((e = n0(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Ae),
      W(ve),
      G(ve, e))
    : W(Ae),
    G(Ae, n)
}
var pt = null,
  Di = !1,
  $a = !1
function r0(e) {
  pt === null ? (pt = [e]) : pt.push(e)
}
function O1(e) {
  ;(Di = !0), r0(e)
}
function on() {
  if (!$a && pt !== null) {
    $a = !0
    var e = 0,
      t = H
    try {
      var n = pt
      for (H = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(pt = null), (Di = !1)
    } catch (o) {
      throw (pt !== null && (pt = pt.slice(e + 1)), Ap(Bu, on), o)
    } finally {
      ;(H = t), ($a = !1)
    }
  }
  return null
}
var zn = [],
  $n = 0,
  Ds = null,
  Ms = 0,
  De = [],
  Me = 0,
  wn = null,
  mt = 1,
  yt = ''
function cn(e, t) {
  ;(zn[$n++] = Ms), (zn[$n++] = Ds), (Ds = e), (Ms = t)
}
function o0(e, t, n) {
  ;(De[Me++] = mt), (De[Me++] = yt), (De[Me++] = wn), (wn = e)
  var r = mt
  e = yt
  var o = 32 - Ye(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var s = 32 - Ye(t) + o
  if (30 < s) {
    var i = o - (o % 5)
    ;(s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (mt = (1 << (32 - Ye(t) + o)) | (n << o) | r),
      (yt = s + e)
  } else (mt = (1 << s) | (n << o) | r), (yt = e)
}
function Mu(e) {
  e.return !== null && (cn(e, 1), o0(e, 1, 0))
}
function Uu(e) {
  while (e === Ds)
    (Ds = zn[--$n]), (zn[$n] = null), (Ms = zn[--$n]), (zn[$n] = null)
  while (e === wn)
    (wn = De[--Me]),
      (De[Me] = null),
      (yt = De[--Me]),
      (De[Me] = null),
      (mt = De[--Me]),
      (De[Me] = null)
}
var ze = null,
  _e = null,
  q = !1,
  Xe = null
function s0(e, t) {
  var n = Ue(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function _d(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (_e = jt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (_e = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: mt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (_e = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Fl(e) {
  if (q) {
    var t = _e
    if (t) {
      var n = t
      if (!_d(e, t)) {
        if (Nl(e)) throw Error(T(418))
        t = jt(n.nextSibling)
        var r = ze
        t && _d(e, t)
          ? s0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e))
      }
    } else {
      if (Nl(e)) throw Error(T(418))
      ;(e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e)
    }
  }
}
function zd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ze = e
}
function jo(e) {
  if (e !== ze) return !1
  if (!q) return zd(e), (q = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Cl(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (Nl(e)) throw (i0(), Error(T(418)))
    while (t) s0(e, t), (t = jt(t.nextSibling))
  }
  if ((zd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              _e = jt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      _e = null
    }
  } else _e = ze ? jt(e.stateNode.nextSibling) : null
  return !0
}
function i0() {
  for (var e = _e; e; ) e = jt(e.nextSibling)
}
function Jn() {
  ;(_e = ze = null), (q = !1)
}
function ju(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e)
}
var L1 = At.ReactCurrentBatchConfig
function Ke(e, t) {
  if (e && e.defaultProps) {
    ;(t = J({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Us = rn(null),
  js = null,
  On = null,
  Hu = null
function Gu() {
  Hu = On = js = null
}
function Vu(e) {
  var t = Us.current
  W(Us), (e._currentValue = t)
}
function Bl(e, t, n) {
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
function Vn(e, t) {
  ;(js = e),
    (Hu = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null))
}
function Ge(e) {
  var t = e._currentValue
  if (Hu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (js === null) throw Error(T(308))
      ;(On = e), (js.dependencies = { lanes: 0, firstContext: e })
    } else On = On.next = e
  return t
}
var hn = null
function Wu(e) {
  hn === null ? (hn = [e]) : hn.push(e)
}
function a0(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Wu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    kt(e, r)
  )
}
function kt(e, t) {
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
var _t = !1
function qu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function l0(e, t) {
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
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Ht(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), M & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      kt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Wu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    kt(e, n)
  )
}
function gs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Iu(e, n)
  }
}
function $d(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next)
      } while (n !== null)
      s === null ? (o = s = t) : (s = s.next = t)
    } else o = s = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
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
function Hs(e, t, n, r) {
  var o = e.updateQueue
  _t = !1
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending
  if (a !== null) {
    o.shared.pending = null
    var l = a,
      u = l.next
    ;(l.next = null), i === null ? (s = u) : (i.next = u), (i = l)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)))
  }
  if (s !== null) {
    var c = o.baseState
    ;(i = 0), (d = u = l = null), (a = s)
    do {
      var f = a.lane,
        v = a.eventTime
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var g = e,
            m = a
          switch (((f = t), (v = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == 'function')) {
                c = g.call(v, c, f)
                break e
              }
              c = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (
                ((g = m.payload),
                (f = typeof g == 'function' ? g.call(v, c, f) : g),
                f == null)
              )
                break e
              c = J({}, c, f)
              break e
            case 2:
              _t = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a))
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (l = c)) : (d = d.next = v),
          (i |= f)
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break
        ;(f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (d === null && (l = c),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (i |= o.lane), (o = o.next)
      while (o !== t)
    } else s === null && (o.shared.lanes = 0)
    ;(En |= i), (e.lanes = i), (e.memoizedState = c)
  }
}
function Od(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(T(191, o))
        o.call(r)
      }
    }
}
var u0 = new ap.Component().refs
function Il(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mi = {
  isMounted: (e) => ((e = e._reactInternals) ? Cn(e) === e : !1),
  enqueueSetState: (e, t, n) => {
    e = e._reactInternals
    var r = Ee(),
      o = Vt(e),
      s = gt(r, o)
    ;(s.payload = t),
      n != null && (s.callback = n),
      (t = Ht(e, s, o)),
      t !== null && (Ze(t, e, o, r), gs(t, e, o))
  },
  enqueueReplaceState: (e, t, n) => {
    e = e._reactInternals
    var r = Ee(),
      o = Vt(e),
      s = gt(r, o)
    ;(s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ht(e, s, o)),
      t !== null && (Ze(t, e, o, r), gs(t, e, o))
  },
  enqueueForceUpdate: (e, t) => {
    e = e._reactInternals
    var n = Ee(),
      r = Vt(e),
      o = gt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Ht(e, o, r)),
      t !== null && (Ze(t, e, r, n), gs(t, e, r))
  },
}
function Ld(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jr(n, r) || !Jr(o, s)
        : !0
  )
}
function c0(e, t, n) {
  var r = !1,
    o = Kt,
    s = t.contextType
  return (
    typeof s == 'object' && s !== null
      ? (s = Ge(s))
      : ((o = Ne(t) ? vn : ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Kn(e, o) : Kt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  )
}
function Dd(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mi.enqueueReplaceState(t, t.state, null)
}
function Rl(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = u0), qu(e)
  var s = t.contextType
  typeof s == 'object' && s !== null
    ? (o.context = Ge(s))
    : ((s = Ne(t) ? vn : ve.current), (o.context = Kn(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Il(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Mi.enqueueReplaceState(o, o.state, null),
      Hs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Er(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309))
        var r = n.stateNode
      }
      if (!r) throw Error(T(147, e))
      var o = r,
        s = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = (i) => {
            var a = o.refs
            a === u0 && (a = o.refs = {}), i === null ? delete a[s] : (a[s] = i)
          }),
          (t._stringRef = s),
          t)
    }
    if (typeof e != 'string') throw Error(T(284))
    if (!n._owner) throw Error(T(290, e))
  }
  return e
}
function Ho(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Md(e) {
  var t = e._init
  return t(e._payload)
}
function d0(e) {
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
    return (p = Wt(p, h)), (p.index = 0), (p.sibling = null), p
  }
  function s(p, h, y) {
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
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function a(p, h, y, x) {
    return h === null || h.tag !== 6
      ? ((h = Ha(y, p.mode, x)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h)
  }
  function l(p, h, y, x) {
    var C = y.type
    return C === Nn
      ? d(p, h, y.props.children, x, y.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === Rt &&
              Md(C) === h.type))
        ? ((x = o(h, y.props)), (x.ref = Er(p, h, y)), (x.return = p), x)
        : ((x = ks(y.type, y.key, y.props, null, p.mode, x)),
          (x.ref = Er(p, h, y)),
          (x.return = p),
          x)
  }
  function u(p, h, y, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Ga(y, p.mode, x)), (h.return = p), h)
      : ((h = o(h, y.children || [])), (h.return = p), h)
  }
  function d(p, h, y, x, C) {
    return h === null || h.tag !== 7
      ? ((h = gn(y, p.mode, x, C)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h)
  }
  function c(p, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ha('' + h, p.mode, y)), (h.return = p), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Io:
          return (
            (y = ks(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = Er(p, null, h)),
            (y.return = p),
            y
          )
        case An:
          return (h = Ga(h, p.mode, y)), (h.return = p), h
        case Rt:
          var x = h._init
          return c(p, x(h._payload), y)
      }
      if (Nr(h) || yr(h)) return (h = gn(h, p.mode, y, null)), (h.return = p), h
      Ho(p, h)
    }
    return null
  }
  function f(p, h, y, x) {
    var C = h !== null ? h.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return C !== null ? null : a(p, h, '' + y, x)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Io:
          return y.key === C ? l(p, h, y, x) : null
        case An:
          return y.key === C ? u(p, h, y, x) : null
        case Rt:
          return (C = y._init), f(p, h, C(y._payload), x)
      }
      if (Nr(y) || yr(y)) return C !== null ? null : d(p, h, y, x, null)
      Ho(p, y)
    }
    return null
  }
  function v(p, h, y, x, C) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (p = p.get(y) || null), a(h, p, '' + x, C)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Io:
          return (p = p.get(x.key === null ? y : x.key) || null), l(h, p, x, C)
        case An:
          return (p = p.get(x.key === null ? y : x.key) || null), u(h, p, x, C)
        case Rt:
          var S = x._init
          return v(p, h, y, S(x._payload), C)
      }
      if (Nr(x) || yr(x)) return (p = p.get(y) || null), d(h, p, x, C, null)
      Ho(h, x)
    }
    return null
  }
  function g(p, h, y, x) {
    for (
      var C = null, S = null, b = h, A = (h = 0), B = null;
      b !== null && A < y.length;
      A++
    ) {
      b.index > A ? ((B = b), (b = null)) : (B = b.sibling)
      var I = f(p, b, y[A], x)
      if (I === null) {
        b === null && (b = B)
        break
      }
      e && b && I.alternate === null && t(p, b),
        (h = s(I, h, A)),
        S === null ? (C = I) : (S.sibling = I),
        (S = I),
        (b = B)
    }
    if (A === y.length) return n(p, b), q && cn(p, A), C
    if (b === null) {
      for (; A < y.length; A++)
        (b = c(p, y[A], x)),
          b !== null &&
            ((h = s(b, h, A)), S === null ? (C = b) : (S.sibling = b), (S = b))
      return q && cn(p, A), C
    }
    for (b = r(p, b); A < y.length; A++)
      (B = v(b, p, A, y[A], x)),
        B !== null &&
          (e && B.alternate !== null && b.delete(B.key === null ? A : B.key),
          (h = s(B, h, A)),
          S === null ? (C = B) : (S.sibling = B),
          (S = B))
    return e && b.forEach((j) => t(p, j)), q && cn(p, A), C
  }
  function m(p, h, y, x) {
    var C = yr(y)
    if (typeof C != 'function') throw Error(T(150))
    if (((y = C.call(y)), y == null)) throw Error(T(151))
    for (
      var S = (C = null), b = h, A = (h = 0), B = null, I = y.next();
      b !== null && !I.done;
      A++, I = y.next()
    ) {
      b.index > A ? ((B = b), (b = null)) : (B = b.sibling)
      var j = f(p, b, I.value, x)
      if (j === null) {
        b === null && (b = B)
        break
      }
      e && b && j.alternate === null && t(p, b),
        (h = s(j, h, A)),
        S === null ? (C = j) : (S.sibling = j),
        (S = j),
        (b = B)
    }
    if (I.done) return n(p, b), q && cn(p, A), C
    if (b === null) {
      for (; !I.done; A++, I = y.next())
        (I = c(p, I.value, x)),
          I !== null &&
            ((h = s(I, h, A)), S === null ? (C = I) : (S.sibling = I), (S = I))
      return q && cn(p, A), C
    }
    for (b = r(p, b); !I.done; A++, I = y.next())
      (I = v(b, p, A, I.value, x)),
        I !== null &&
          (e && I.alternate !== null && b.delete(I.key === null ? A : I.key),
          (h = s(I, h, A)),
          S === null ? (C = I) : (S.sibling = I),
          (S = I))
    return e && b.forEach((we) => t(p, we)), q && cn(p, A), C
  }
  function E(p, h, y, x) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Nn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Io:
          e: {
            for (var C = y.key, S = h; S !== null; ) {
              if (S.key === C) {
                if (((C = y.type), C === Nn)) {
                  if (S.tag === 7) {
                    n(p, S.sibling),
                      (h = o(S, y.props.children)),
                      (h.return = p),
                      (p = h)
                    break e
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Rt &&
                    Md(C) === S.type)
                ) {
                  n(p, S.sibling),
                    (h = o(S, y.props)),
                    (h.ref = Er(p, S, y)),
                    (h.return = p),
                    (p = h)
                  break e
                }
                n(p, S)
                break
              } else t(p, S)
              S = S.sibling
            }
            y.type === Nn
              ? ((h = gn(y.props.children, p.mode, x, y.key)),
                (h.return = p),
                (p = h))
              : ((x = ks(y.type, y.key, y.props, null, p.mode, x)),
                (x.ref = Er(p, h, y)),
                (x.return = p),
                (p = x))
          }
          return i(p)
        case An:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S)
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
            ;(h = Ga(y, p.mode, x)), (h.return = p), (p = h)
          }
          return i(p)
        case Rt:
          return (S = y._init), E(p, h, S(y._payload), x)
      }
      if (Nr(y)) return g(p, h, y, x)
      if (yr(y)) return m(p, h, y, x)
      Ho(p, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, y)), (h.return = p), (p = h))
          : (n(p, h), (h = Ha(y, p.mode, x)), (h.return = p), (p = h)),
        i(p))
      : n(p, h)
  }
  return E
}
var Xn = d0(!0),
  f0 = d0(!1),
  vo = {},
  lt = rn(vo),
  eo = rn(vo),
  to = rn(vo)
function mn(e) {
  if (e === vo) throw Error(T(174))
  return e
}
function Qu(e, t) {
  switch ((G(to, t), G(eo, e), G(lt, vo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : dl(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = dl(t, e))
  }
  W(lt), G(lt, t)
}
function Yn() {
  W(lt), W(eo), W(to)
}
function p0(e) {
  mn(to.current)
  var t = mn(lt.current),
    n = dl(t, e.type)
  t !== n && (G(eo, e), G(lt, n))
}
function Ku(e) {
  eo.current === e && (W(lt), W(eo))
}
var Q = rn(0)
function Gs(e) {
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
var Oa = []
function Ju() {
  for (var e = 0; e < Oa.length; e++) Oa[e]._workInProgressVersionPrimary = null
  Oa.length = 0
}
var vs = At.ReactCurrentDispatcher,
  La = At.ReactCurrentBatchConfig,
  xn = 0,
  K = null,
  re = null,
  ie = null,
  Vs = !1,
  Or = !1,
  no = 0,
  D1 = 0
function me() {
  throw Error(T(321))
}
function Xu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1
  return !0
}
function Yu(e, t, n, r, o, s) {
  if (
    ((xn = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vs.current = e === null || e.memoizedState === null ? H1 : G1),
    (e = n(r, o)),
    Or)
  ) {
    s = 0
    do {
      if (((Or = !1), (no = 0), 25 <= s)) throw Error(T(301))
      ;(s += 1),
        (ie = re = null),
        (t.updateQueue = null),
        (vs.current = V1),
        (e = n(r, o))
    } while (Or)
  }
  if (
    ((vs.current = Ws),
    (t = re !== null && re.next !== null),
    (xn = 0),
    (ie = re = K = null),
    (Vs = !1),
    t)
  )
    throw Error(T(300))
  return e
}
function Zu() {
  var e = no !== 0
  return (no = 0), e
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ie === null ? (K.memoizedState = ie = e) : (ie = ie.next = e), ie
}
function Ve() {
  if (re === null) {
    var e = K.alternate
    e = e !== null ? e.memoizedState : null
  } else e = re.next
  var t = ie === null ? K.memoizedState : ie.next
  if (t !== null) (ie = t), (re = e)
  else {
    if (e === null) throw Error(T(310))
    ;(re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      ie === null ? (K.memoizedState = ie = e) : (ie = ie.next = e)
  }
  return ie
}
function ro(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Da(e) {
  var t = Ve(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = re,
    o = r.baseQueue,
    s = n.pending
  if (s !== null) {
    if (o !== null) {
      var i = o.next
      ;(o.next = s.next), (s.next = i)
    }
    ;(r.baseQueue = o = s), (n.pending = null)
  }
  if (o !== null) {
    ;(s = o.next), (r = r.baseState)
    var a = (i = null),
      l = null,
      u = s
    do {
      var d = u.lane
      if ((xn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        l === null ? ((a = l = c), (i = r)) : (l = l.next = c),
          (K.lanes |= d),
          (En |= d)
      }
      u = u.next
    } while (u !== null && u !== s)
    l === null ? (i = r) : (l.next = a),
      et(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (s = o.lane), (K.lanes |= s), (En |= s), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ma(e) {
  var t = Ve(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState
  if (o !== null) {
    n.pending = null
    var i = (o = o.next)
    do (s = e(s, i.action)), (i = i.next)
    while (i !== o)
    et(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s)
  }
  return [s, r]
}
function h0() {}
function m0(e, t) {
  var n = K,
    r = Ve(),
    o = t(),
    s = !et(r.memoizedState, o)
  if (
    (s && ((r.memoizedState = o), (Pe = !0)),
    (r = r.queue),
    ec(v0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      oo(9, g0.bind(null, n, r, o, t), void 0, null),
      ae === null)
    )
      throw Error(T(349))
    xn & 30 || y0(n, t, o)
  }
  return o
}
function y0(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function g0(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), w0(t) && x0(e)
}
function v0(e, t, n) {
  return n(() => {
    w0(t) && x0(e)
  })
}
function w0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !et(e, n)
  } catch {
    return !0
  }
}
function x0(e) {
  var t = kt(e, 1)
  t !== null && Ze(t, e, 1, -1)
}
function Ud(e) {
  var t = ot()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ro,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = j1.bind(null, K, e)),
    [t.memoizedState, e]
  )
}
function oo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function E0() {
  return Ve().memoizedState
}
function ws(e, t, n, r) {
  var o = ot()
  ;(K.flags |= e),
    (o.memoizedState = oo(1 | t, n, void 0, r === void 0 ? null : r))
}
function Ui(e, t, n, r) {
  var o = Ve()
  r = r === void 0 ? null : r
  var s = void 0
  if (re !== null) {
    var i = re.memoizedState
    if (((s = i.destroy), r !== null && Xu(r, i.deps))) {
      o.memoizedState = oo(t, n, s, r)
      return
    }
  }
  ;(K.flags |= e), (o.memoizedState = oo(1 | t, n, s, r))
}
function jd(e, t) {
  return ws(8390656, 8, e, t)
}
function ec(e, t) {
  return Ui(2048, 8, e, t)
}
function S0(e, t) {
  return Ui(4, 2, e, t)
}
function k0(e, t) {
  return Ui(4, 4, e, t)
}
function b0(e, t) {
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
function C0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ui(4, 4, b0.bind(null, t, e), n)
  )
}
function tc() {}
function P0(e, t) {
  var n = Ve()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function T0(e, t) {
  var n = Ve()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function A0(e, t, n) {
  return xn & 21
    ? (et(n, t) || ((n = Bp()), (K.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n))
}
function M1(e, t) {
  var n = H
  ;(H = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = La.transition
  La.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(H = n), (La.transition = r)
  }
}
function N0() {
  return Ve().memoizedState
}
function U1(e, t, n) {
  var r = Vt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    F0(e))
  )
    B0(t, n)
  else if (((n = a0(e, t, n, r)), n !== null)) {
    var o = Ee()
    Ze(n, e, r, o), I0(n, t, r)
  }
}
function j1(e, t, n) {
  var r = Vt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (F0(e)) B0(t, o)
  else {
    var s = e.alternate
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n)
        if (((o.hasEagerState = !0), (o.eagerState = a), et(a, i))) {
          var l = t.interleaved
          l === null
            ? ((o.next = o), Wu(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = a0(e, t, o, r)),
      n !== null && ((o = Ee()), Ze(n, e, r, o), I0(n, t, r))
  }
}
function F0(e) {
  var t = e.alternate
  return e === K || (t !== null && t === K)
}
function B0(e, t) {
  Or = Vs = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function I0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Iu(e, n)
  }
}
var Ws = {
    readContext: Ge,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  H1 = {
    readContext: Ge,
    useCallback: (e, t) => (
      (ot().memoizedState = [e, t === void 0 ? null : t]), e
    ),
    useContext: Ge,
    useEffect: jd,
    useImperativeHandle: (e, t, n) => (
      (n = n != null ? n.concat([e]) : null),
      ws(4194308, 4, b0.bind(null, t, e), n)
    ),
    useLayoutEffect: (e, t) => ws(4194308, 4, e, t),
    useInsertionEffect: (e, t) => ws(4, 2, e, t),
    useMemo: (e, t) => {
      var n = ot()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: (e, t, n) => {
      var r = ot()
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
        (e = e.dispatch = U1.bind(null, K, e)),
        [r.memoizedState, e]
      )
    },
    useRef: (e) => {
      var t = ot()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ud,
    useDebugValue: tc,
    useDeferredValue: (e) => (ot().memoizedState = e),
    useTransition: () => {
      var e = Ud(!1),
        t = e[0]
      return (e = M1.bind(null, e[1])), (ot().memoizedState = e), [t, e]
    },
    useMutableSource: () => {},
    useSyncExternalStore: (e, t, n) => {
      var r = K,
        o = ot()
      if (q) {
        if (n === void 0) throw Error(T(407))
        n = n()
      } else {
        if (((n = t()), ae === null)) throw Error(T(349))
        xn & 30 || y0(r, t, n)
      }
      o.memoizedState = n
      var s = { value: n, getSnapshot: t }
      return (
        (o.queue = s),
        jd(v0.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        oo(9, g0.bind(null, r, s, n, t), void 0, null),
        n
      )
    },
    useId: () => {
      var e = ot(),
        t = ae.identifierPrefix
      if (q) {
        var n = yt,
          r = mt
        ;(n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = no++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = D1++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  G1 = {
    readContext: Ge,
    useCallback: P0,
    useContext: Ge,
    useEffect: ec,
    useImperativeHandle: C0,
    useInsertionEffect: S0,
    useLayoutEffect: k0,
    useMemo: T0,
    useReducer: Da,
    useRef: E0,
    useState: () => Da(ro),
    useDebugValue: tc,
    useDeferredValue: (e) => {
      var t = Ve()
      return A0(t, re.memoizedState, e)
    },
    useTransition: () => {
      var e = Da(ro)[0],
        t = Ve().memoizedState
      return [e, t]
    },
    useMutableSource: h0,
    useSyncExternalStore: m0,
    useId: N0,
    unstable_isNewReconciler: !1,
  },
  V1 = {
    readContext: Ge,
    useCallback: P0,
    useContext: Ge,
    useEffect: ec,
    useImperativeHandle: C0,
    useInsertionEffect: S0,
    useLayoutEffect: k0,
    useMemo: T0,
    useReducer: Ma,
    useRef: E0,
    useState: () => Ma(ro),
    useDebugValue: tc,
    useDeferredValue: (e) => {
      var t = Ve()
      return re === null ? (t.memoizedState = e) : A0(t, re.memoizedState, e)
    },
    useTransition: () => {
      var e = Ma(ro)[0],
        t = Ve().memoizedState
      return [e, t]
    },
    useMutableSource: h0,
    useSyncExternalStore: m0,
    useId: N0,
    unstable_isNewReconciler: !1,
  }
function Zn(e, t) {
  try {
    var n = '',
      r = t
    do (n += wy(r)), (r = r.return)
    while (r)
    var o = n
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function Ua(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function _l(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(() => {
      throw n
    })
  }
}
var W1 = typeof WeakMap == 'function' ? WeakMap : Map
function R0(e, t, n) {
  ;(n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = () => {
      Qs || ((Qs = !0), (Gl = r)), _l(e, t)
    }),
    n
  )
}
function _0(e, t, n) {
  ;(n = gt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = () => r(o)),
      (n.callback = () => {
        _l(e, t)
      })
  }
  var s = e.stateNode
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        _l(e, t),
          typeof r != 'function' &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function Hd(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new W1()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = ig.bind(null, e, t, n)), t.then(e, e))
}
function Gd(e) {
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
function Vd(e, t, n, r, o) {
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
              : ((t = gt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var q1 = At.ReactCurrentOwner,
  Pe = !1
function xe(e, t, n, r) {
  t.child = e === null ? f0(t, null, n, r) : Xn(t, e.child, n, r)
}
function Wd(e, t, n, r, o) {
  n = n.render
  var s = t.ref
  return (
    Vn(t, o),
    (r = Yu(e, t, n, r, s, o)),
    (n = Zu()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        bt(e, t, o))
      : (q && n && Mu(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  )
}
function qd(e, t, n, r, o) {
  if (e === null) {
    var s = n.type
    return typeof s == 'function' &&
      !uc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), z0(e, t, s, r, o))
      : ((e = ks(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(i, r) && e.ref === t.ref)
    )
      return bt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Wt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function z0(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps
    if (Jr(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Pe = !0)
      else return (t.lanes = e.lanes), bt(e, t, o)
  }
  return zl(e, t, n, r, o)
}
function $0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Dn, Re),
        (Re |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(Dn, Re),
          (Re |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        G(Dn, Re),
        (Re |= r)
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(Dn, Re),
      (Re |= r)
  return xe(e, t, o, n), t.child
}
function O0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function zl(e, t, n, r, o) {
  var s = Ne(n) ? vn : ve.current
  return (
    (s = Kn(t, s)),
    Vn(t, o),
    (n = Yu(e, t, n, r, s, o)),
    (r = Zu()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        bt(e, t, o))
      : (q && r && Mu(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  )
}
function Qd(e, t, n, r, o) {
  if (Ne(n)) {
    var s = !0
    Ls(t)
  } else s = !1
  if ((Vn(t, o), t.stateNode === null))
    xs(e, t), c0(t, n, r), Rl(t, n, r, o), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps
    i.props = a
    var l = i.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = Ge(u))
      : ((u = Ne(n) ? vn : ve.current), (u = Kn(t, u)))
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Dd(t, i, r, u)),
      (_t = !1)
    var f = t.memoizedState
    ;(i.state = f),
      Hs(t, r, i, o),
      (l = t.memoizedState),
      a !== r || f !== l || Ae.current || _t
        ? (typeof d == 'function' && (Il(t, n, d, r), (l = t.memoizedState)),
          (a = _t || Ld(t, n, a, r, f, l, u))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (i.props = r),
          (i.state = l),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      l0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ke(t.type, a)),
      (i.props = u),
      (c = t.pendingProps),
      (f = i.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Ge(l))
        : ((l = Ne(n) ? vn : ve.current), (l = Kn(t, l)))
    var v = n.getDerivedStateFromProps
    ;(d =
      typeof v == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== c || f !== l) && Dd(t, i, r, l)),
      (_t = !1),
      (f = t.memoizedState),
      (i.state = f),
      Hs(t, r, i, o)
    var g = t.memoizedState
    a !== c || f !== g || Ae.current || _t
      ? (typeof v == 'function' && (Il(t, n, v, r), (g = t.memoizedState)),
        (u = _t || Ld(t, n, u, r, f, g, l) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, g, l),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, g, l)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = l),
        (r = u))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return $l(e, t, n, r, s, o)
}
function $l(e, t, n, r, o, s) {
  O0(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return o && Rd(t, n, !1), bt(e, t, s)
  ;(r = t.stateNode), (q1.current = t)
  var a =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Xn(t, e.child, null, s)), (t.child = Xn(t, null, a, s)))
      : xe(e, t, a, s),
    (t.memoizedState = r.state),
    o && Rd(t, n, !0),
    t.child
  )
}
function L0(e) {
  var t = e.stateNode
  t.pendingContext
    ? Id(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Id(e, t.context, !1),
    Qu(e, t.containerInfo)
}
function Kd(e, t, n, r, o) {
  return Jn(), ju(o), (t.flags |= 256), xe(e, t, n, r), t.child
}
var Ol = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ll(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function D0(e, t, n) {
  var r = t.pendingProps,
    o = Q.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    G(Q, o & 1),
    e === null)
  )
    return (
      Fl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Gi(i, r, 0, null)),
              (e = gn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ll(n)),
              (t.memoizedState = Ol),
              e)
            : nc(t, i))
    )
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Q1(e, t, i, r, a, o, n)
  if (s) {
    ;(s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Wt(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = Wt(a, s)) : ((s = gn(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ll(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ol),
      r
    )
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Wt(s, { mode: 'visible', children: r.children })),
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
function nc(e, t) {
  return (
    (t = Gi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Go(e, t, n, r) {
  return (
    r !== null && ju(r),
    Xn(t, e.child, null, n),
    (e = nc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Q1(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ua(Error(T(422)))), Go(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Gi({ mode: 'visible', children: r.children }, o, 0, null)),
          (s = gn(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Xn(t, e.child, null, i),
          (t.child.memoizedState = Ll(i)),
          (t.memoizedState = Ol),
          s)
  if (!(t.mode & 1)) return Go(e, t, i, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (s = Error(T(419))), (r = Ua(s, r, void 0)), Go(e, t, i, r)
  }
  if (((a = (i & e.childLanes) !== 0), Pe || a)) {
    if (((r = ae), r !== null)) {
      switch (i & -i) {
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
      ;(o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), kt(e, o), Ze(r, e, o, -1))
    }
    return lc(), (r = Ua(Error(T(421)))), Go(e, t, i, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ag.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (_e = jt(o.nextSibling)),
      (ze = t),
      (q = !0),
      (Xe = null),
      e !== null &&
        ((De[Me++] = mt),
        (De[Me++] = yt),
        (De[Me++] = wn),
        (mt = e.id),
        (yt = e.overflow),
        (wn = t)),
      (t = nc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Jd(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Bl(e.return, t, n)
}
function ja(e, t, n, r, o) {
  var s = e.memoizedState
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o))
}
function M0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail
  if ((xe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jd(e, n, t)
        else if (e.tag === 19) Jd(e, n, t)
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
  if ((G(Q, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Gs(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ja(t, !1, o, n, s)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Gs(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        ja(t, !0, n, null, s)
        break
      case 'together':
        ja(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function xs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(T(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function K1(e, t, n) {
  switch (t.tag) {
    case 3:
      L0(t), Jn()
      break
    case 5:
      p0(t)
      break
    case 1:
      Ne(t.type) && Ls(t)
      break
    case 4:
      Qu(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      G(Us, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? D0(e, t, n)
            : (G(Q, Q.current & 1),
              (e = bt(e, t, n)),
              e !== null ? e.sibling : null)
      G(Q, Q.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return M0(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        G(Q, Q.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), $0(e, t, n)
  }
  return bt(e, t, n)
}
var U0, Dl, j0, H0
U0 = (e, t) => {
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
Dl = () => {}
j0 = (e, t, n, r) => {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), mn(lt.current)
    var s = null
    switch (n) {
      case 'input':
        ;(o = al(e, o)), (r = al(e, r)), (s = [])
        break
      case 'select':
        ;(o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (s = [])
        break
      case 'textarea':
        ;(o = cl(e, o)), (r = cl(e, r)), (s = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = $s)
    }
    fl(n, r)
    var i
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u]
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Hr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
    for (u in r) {
      var l = r[u]
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (l && l.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''))
            for (i in l)
              l.hasOwnProperty(i) &&
                a[i] !== l[i] &&
                (n || (n = {}), (n[i] = l[i]))
          } else n || (s || (s = []), s.push(u, n)), (n = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (s = s || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Hr.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && V('scroll', e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l))
    }
    n && (s = s || []).push('style', n)
    var u = s
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
H0 = (e, t, n, r) => {
  n !== r && (t.flags |= 4)
}
function Sr(e, t) {
  if (!q)
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
function ye(e) {
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
function J1(e, t, n) {
  var r = t.pendingProps
  switch ((Uu(t), t.tag)) {
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
      return ye(t), null
    case 1:
      return Ne(t.type) && Os(), ye(t), null
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        W(Ae),
        W(ve),
        Ju(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (ql(Xe), (Xe = null)))),
        Dl(e, t),
        ye(t),
        null
      )
    case 5:
      Ku(t)
      var o = mn(to.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        j0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166))
          return ye(t), null
        }
        if (((e = mn(lt.current)), jo(t))) {
          ;(r = t.stateNode), (n = t.type)
          var s = t.memoizedProps
          switch (((r[st] = t), (r[Zr] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              V('cancel', r), V('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Br.length; o++) V(Br[o], r)
              break
            case 'source':
              V('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r)
              break
            case 'details':
              V('toggle', r)
              break
            case 'input':
              sd(r, s), V('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!s.multiple }),
                V('invalid', r)
              break
            case 'textarea':
              ad(r, s), V('invalid', r)
          }
          fl(n, s), (o = null)
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i]
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Uo(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Uo(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Hr.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  V('scroll', r)
            }
          switch (n) {
            case 'input':
              Ro(r), id(r, s, !0)
              break
            case 'textarea':
              Ro(r), ld(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof s.onClick == 'function' && (r.onclick = $s)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = yp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[st] = t),
            (e[Zr] = r),
            U0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = pl(n, r)), n)) {
              case 'dialog':
                V('cancel', e), V('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                V('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Br.length; o++) V(Br[o], e)
                o = r
                break
              case 'source':
                V('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                V('error', e), V('load', e), (o = r)
                break
              case 'details':
                V('toggle', e), (o = r)
                break
              case 'input':
                sd(e, r), (o = al(e, r)), V('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = J({}, r, { value: void 0 })),
                  V('invalid', e)
                break
              case 'textarea':
                ad(e, r), (o = cl(e, r)), V('invalid', e)
                break
              default:
                o = r
            }
            fl(n, o), (a = o)
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s]
                s === 'style'
                  ? wp(e, l)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && gp(e, l))
                    : s === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Gr(e, l)
                        : typeof l == 'number' && Gr(e, '' + l)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (Hr.hasOwnProperty(s)
                          ? l != null && s === 'onScroll' && V('scroll', e)
                          : l != null && Pu(e, s, l, i))
              }
            switch (n) {
              case 'input':
                Ro(e), id(e, r, !1)
                break
              case 'textarea':
                Ro(e), ld(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Qt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Un(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = $s)
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
      return ye(t), null
    case 6:
      if (e && t.stateNode != null) H0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(T(166))
        if (((n = mn(to.current)), mn(lt.current), jo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[st] = t),
            (s = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Uo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Uo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          s && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[st] = t),
            (t.stateNode = r)
      }
      return ye(t), null
    case 13:
      if (
        (W(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && _e !== null && t.mode & 1 && !(t.flags & 128))
          i0(), Jn(), (t.flags |= 98560), (s = !1)
        else if (((s = jo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318))
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317))
            s[st] = t
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          ye(t), (s = !1)
        } else Xe !== null && (ql(Xe), (Xe = null)), (s = !0)
        if (!s) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? oe === 0 && (oe = 3) : lc())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null)
    case 4:
      return (
        Yn(), Dl(e, t), e === null && Xr(t.stateNode.containerInfo), ye(t), null
      )
    case 10:
      return Vu(t.type._context), ye(t), null
    case 17:
      return Ne(t.type) && Os(), ye(t), null
    case 19:
      if ((W(Q), (s = t.memoizedState), s === null)) return ye(t), null
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Sr(s, !1)
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Gs(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sr(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return G(Q, (Q.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          s.tail !== null &&
            Z() > er &&
            ((t.flags |= 128), (r = !0), Sr(s, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Gs(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !i.alternate && !q)
            )
              return ye(t), null
          } else
            2 * Z() - s.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(s, !1), (t.lanes = 4194304))
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i))
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Q.current),
          G(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null)
    case 22:
    case 23:
      return (
        ac(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(T(156, t.tag))
}
function X1(e, t) {
  switch ((Uu(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && Os(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Yn(),
        W(Ae),
        W(ve),
        Ju(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ku(t), null
    case 13:
      if ((W(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340))
        Jn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return W(Q), null
    case 4:
      return Yn(), null
    case 10:
      return Vu(t.type._context), null
    case 22:
    case 23:
      return ac(), null
    case 24:
      return null
    default:
      return null
  }
}
var Vo = !1,
  ge = !1,
  Y1 = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null
function Ln(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        X(e, t, r)
      }
    else n.current = null
}
function Ml(e, t, n) {
  try {
    n()
  } catch (r) {
    X(e, t, r)
  }
}
var Xd = !1
function Z1(e, t) {
  if (((kl = Rs), (e = qp()), Du(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            s = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, s.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = e,
            f = null
          t: for (;;) {
            for (
              var v;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = i + o),
                c !== s || (r !== 0 && c.nodeType !== 3) || (l = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (v = c.firstChild) !== null;
            )
              (f = c), (c = v)
            for (;;) {
              if (c === e) break t
              if (
                (f === n && ++u === o && (a = i),
                f === s && ++d === r && (l = i),
                (v = c.nextSibling) !== null)
              )
                break
              ;(c = f), (f = c.parentNode)
            }
            c = v
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (bl = { focusedElem: e, selectionRange: n }, Rs = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e)
    else
      while (N !== null) {
        t = N
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
                    E = g.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Ke(t.type, m),
                      E,
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
                throw Error(T(163))
            }
        } catch (x) {
          X(t, t.return, x)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (N = e)
          break
        }
        N = t.return
      }
  return (g = Xd), (Xd = !1), g
}
function Lr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy
        ;(o.destroy = void 0), s !== void 0 && Ml(t, n, s)
      }
      o = o.next
    } while (o !== r)
  }
}
function ji(e, t) {
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
function Ul(e) {
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
function G0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), G0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[st], delete t[Zr], delete t[Tl], delete t[z1], delete t[$1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function V0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Yd(e) {
  e: for (;;) {
    while (e.sibling === null) {
      if (e.return === null || V0(e.return)) return null
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
function jl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = $s))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jl(e, t, n), e = e.sibling; e !== null; ) jl(e, t, n), (e = e.sibling)
}
function Hl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), (e = e.sibling)
}
var ce = null,
  Je = !1
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) W0(e, t, n), (n = n.sibling)
}
function W0(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == 'function')
    try {
      at.onCommitFiberUnmount(_i, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Ln(n, t)
    case 6:
      var r = ce,
        o = Je
      ;(ce = null),
        Nt(e, t, n),
        (ce = r),
        (Je = o),
        ce !== null &&
          (Je
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode))
      break
    case 18:
      ce !== null &&
        (Je
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? za(e.parentNode, n)
              : e.nodeType === 1 && za(e, n),
            Qr(e))
          : za(ce, n.stateNode))
      break
    case 4:
      ;(r = ce),
        (o = Je),
        (ce = n.stateNode.containerInfo),
        (Je = !0),
        Nt(e, t, n),
        (ce = r),
        (Je = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var s = o,
            i = s.destroy
          ;(s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Ml(n, t, i),
            (o = o.next)
        } while (o !== r)
      }
      Nt(e, t, n)
      break
    case 1:
      if (
        !ge &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (a) {
          X(n, t, a)
        }
      Nt(e, t, n)
      break
    case 21:
      Nt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), Nt(e, t, n), (ge = r))
        : Nt(e, t, n)
      break
    default:
      Nt(e, t, n)
  }
}
function Zd(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Y1()),
      t.forEach((r) => {
        var o = lg.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Qe(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var s = e,
          i = t,
          a = i
        e: while (a !== null) {
          switch (a.tag) {
            case 5:
              ;(ce = a.stateNode), (Je = !1)
              break e
            case 3:
              ;(ce = a.stateNode.containerInfo), (Je = !0)
              break e
            case 4:
              ;(ce = a.stateNode.containerInfo), (Je = !0)
              break e
          }
          a = a.return
        }
        if (ce === null) throw Error(T(160))
        W0(s, i, o), (ce = null), (Je = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (u) {
        X(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) q0(t, e), (t = t.sibling)
}
function q0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), nt(e), r & 4)) {
        try {
          Lr(3, e, e.return), ji(3, e)
        } catch (m) {
          X(e, e.return, m)
        }
        try {
          Lr(5, e, e.return)
        } catch (m) {
          X(e, e.return, m)
        }
      }
      break
    case 1:
      Qe(t, e), nt(e), r & 512 && n !== null && Ln(n, n.return)
      break
    case 5:
      if (
        (Qe(t, e),
        nt(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Gr(o, '')
        } catch (m) {
          X(e, e.return, m)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && hp(o, s),
              pl(a, i)
            var u = pl(a, s)
            for (i = 0; i < l.length; i += 2) {
              var d = l[i],
                c = l[i + 1]
              d === 'style'
                ? wp(o, c)
                : d === 'dangerouslySetInnerHTML'
                  ? gp(o, c)
                  : d === 'children'
                    ? Gr(o, c)
                    : Pu(o, d, c, u)
            }
            switch (a) {
              case 'input':
                ll(o, s)
                break
              case 'textarea':
                mp(o, s)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!s.multiple
                var v = s.value
                v != null
                  ? Un(o, !!s.multiple, v, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Un(o, !!s.multiple, s.defaultValue, !0)
                      : Un(o, !!s.multiple, s.multiple ? [] : '', !1))
            }
            o[Zr] = s
          } catch (m) {
            X(e, e.return, m)
          }
      }
      break
    case 6:
      if ((Qe(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162))
        ;(o = e.stateNode), (s = e.memoizedProps)
        try {
          o.nodeValue = s
        } catch (m) {
          X(e, e.return, m)
        }
      }
      break
    case 3:
      if (
        (Qe(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qr(t.containerInfo)
        } catch (m) {
          X(e, e.return, m)
        }
      break
    case 4:
      Qe(t, e), nt(e)
      break
    case 13:
      Qe(t, e),
        nt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (sc = Z())),
        r & 4 && Zd(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || d), Qe(t, e), (ge = u)) : Qe(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (N = e, d = e.child; d !== null; ) {
            for (c = N = d; N !== null; ) {
              switch (((f = N), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, f, f.return)
                  break
                case 1:
                  Ln(f, f.return)
                  var g = f.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (m) {
                      X(r, n, m)
                    }
                  }
                  break
                case 5:
                  Ln(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    tf(c)
                    continue
                  }
              }
              v !== null ? ((v.return = f), (N = v)) : tf(c)
            }
            d = d.sibling
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c
              try {
                ;(o = c.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (i =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = vp('display', i)))
              } catch (m) {
                X(e, e.return, m)
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? '' : c.memoizedProps
              } catch (m) {
                X(e, e.return, m)
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
            d === c && (d = null), (c = c.return)
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling)
        }
      }
      break
    case 19:
      Qe(t, e), nt(e), r & 4 && Zd(e)
      break
    case 21:
      break
    default:
      Qe(t, e), nt(e)
  }
}
function nt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (V0(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(T(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Gr(o, ''), (r.flags &= -33))
          var s = Yd(e)
          Hl(e, s, o)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Yd(e)
          jl(e, a, i)
          break
        default:
          throw Error(T(161))
      }
    } catch (l) {
      X(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function eg(e, t, n) {
  ;(N = e), Q0(e)
}
function Q0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N,
      s = o.child
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Vo
      if (!i) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || ge
        a = Vo
        var u = ge
        if (((Vo = i), (ge = l) && !u))
          for (N = o; N !== null; )
            (i = N),
              (l = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? nf(o)
                : l !== null
                  ? ((l.return = i), (N = l))
                  : nf(o)
        while (s !== null) (N = s), Q0(s), (s = s.sibling)
        ;(N = o), (Vo = a), (ge = u)
      }
      ef(e)
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (N = s)) : ef(e)
  }
}
function ef(e) {
  while (N !== null) {
    var t = N
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || ji(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var s = t.updateQueue
              s !== null && Od(t, s, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Od(t, i, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
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
                var u = t.alternate
                if (u !== null) {
                  var d = u.memoizedState
                  if (d !== null) {
                    var c = d.dehydrated
                    c !== null && Qr(c)
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
              throw Error(T(163))
          }
        ge || (t.flags & 512 && Ul(t))
      } catch (f) {
        X(t, t.return, f)
      }
    }
    if (t === e) {
      N = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (N = n)
      break
    }
    N = t.return
  }
}
function tf(e) {
  while (N !== null) {
    var t = N
    if (t === e) {
      N = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (N = n)
      break
    }
    N = t.return
  }
}
function nf(e) {
  while (N !== null) {
    var t = N
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ji(4, t)
          } catch (l) {
            X(t, n, l)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (l) {
              X(t, o, l)
            }
          }
          var s = t.return
          try {
            Ul(t)
          } catch (l) {
            X(t, s, l)
          }
          break
        case 5:
          var i = t.return
          try {
            Ul(t)
          } catch (l) {
            X(t, i, l)
          }
      }
    } catch (l) {
      X(t, t.return, l)
    }
    if (t === e) {
      N = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (N = a)
      break
    }
    N = t.return
  }
}
var tg = Math.ceil,
  qs = At.ReactCurrentDispatcher,
  rc = At.ReactCurrentOwner,
  je = At.ReactCurrentBatchConfig,
  M = 0,
  ae = null,
  te = null,
  de = 0,
  Re = 0,
  Dn = rn(0),
  oe = 0,
  so = null,
  En = 0,
  Hi = 0,
  oc = 0,
  Dr = null,
  Ce = null,
  sc = 0,
  er = 1 / 0,
  ft = null,
  Qs = !1,
  Gl = null,
  Gt = null,
  Wo = !1,
  Lt = null,
  Ks = 0,
  Mr = 0,
  Vl = null,
  Es = -1,
  Ss = 0
function Ee() {
  return M & 6 ? Z() : Es !== -1 ? Es : (Es = Z())
}
function Vt(e) {
  return e.mode & 1
    ? M & 2 && de !== 0
      ? de & -de
      : L1.transition !== null
        ? (Ss === 0 && (Ss = Bp()), Ss)
        : ((e = H),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lp(e.type))),
          e)
    : 1
}
function Ze(e, t, n, r) {
  if (50 < Mr) throw ((Mr = 0), (Vl = null), Error(T(185)))
  mo(e, n, r),
    (!(M & 2) || e !== ae) &&
      (e === ae && (!(M & 2) && (Hi |= n), oe === 4 && $t(e, de)),
      Fe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((er = Z() + 500), Di && on()))
}
function Fe(e, t) {
  var n = e.callbackNode
  Ly(e, t)
  var r = Is(e, e === ae ? de : 0)
  if (r === 0)
    n !== null && dd(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && dd(n), t === 1))
      e.tag === 0 ? O1(rf.bind(null, e)) : r0(rf.bind(null, e)),
        R1(() => {
          !(M & 6) && on()
        }),
        (n = null)
    else {
      switch (Ip(r)) {
        case 1:
          n = Bu
          break
        case 4:
          n = Np
          break
        case 16:
          n = Bs
          break
        case 536870912:
          n = Fp
          break
        default:
          n = Bs
      }
      n = nh(n, K0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function K0(e, t) {
  if (((Es = -1), (Ss = 0), M & 6)) throw Error(T(327))
  var n = e.callbackNode
  if (Wn() && e.callbackNode !== n) return null
  var r = Is(e, e === ae ? de : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Js(e, r)
  else {
    t = r
    var o = M
    M |= 2
    var s = X0()
    ;(ae !== e || de !== t) && ((ft = null), (er = Z() + 500), yn(e, t))
    do
      try {
        og()
        break
      } catch (a) {
        J0(e, a)
      }
    while (!0)
    Gu(),
      (qs.current = s),
      (M = o),
      te !== null ? (t = 0) : ((ae = null), (de = 0), (t = oe))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = vl(e)), o !== 0 && ((r = o), (t = Wl(e, o)))), t === 1)
    )
      throw ((n = so), yn(e, 0), $t(e, r), Fe(e, Z()), n)
    if (t === 6) $t(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ng(o) &&
          ((t = Js(e, r)),
          t === 2 && ((s = vl(e)), s !== 0 && ((r = s), (t = Wl(e, s)))),
          t === 1))
      )
        throw ((n = so), yn(e, 0), $t(e, r), Fe(e, Z()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345))
        case 2:
          dn(e, Ce, ft)
          break
        case 3:
          if (
            ($t(e, r), (r & 130023424) === r && ((t = sc + 500 - Z()), 10 < t))
          ) {
            if (Is(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Pl(dn.bind(null, e, Ce, ft), t)
            break
          }
          dn(e, Ce, ft)
          break
        case 4:
          if (($t(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ye(r)
            ;(s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s)
          }
          if (
            ((r = o),
            (r = Z() - r),
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
                          : 1960 * tg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pl(dn.bind(null, e, Ce, ft), r)
            break
          }
          dn(e, Ce, ft)
          break
        case 5:
          dn(e, Ce, ft)
          break
        default:
          throw Error(T(329))
      }
    }
  }
  return Fe(e, Z()), e.callbackNode === n ? K0.bind(null, e) : null
}
function Wl(e, t) {
  var n = Dr
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = Js(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && ql(t)),
    e
  )
}
function ql(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e)
}
function ng(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot
          o = o.value
          try {
            if (!et(s(), o)) return !1
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
function $t(e, t) {
  for (
    t &= ~oc,
      t &= ~Hi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ye(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function rf(e) {
  if (M & 6) throw Error(T(327))
  Wn()
  var t = Is(e, 0)
  if (!(t & 1)) return Fe(e, Z()), null
  var n = Js(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = vl(e)
    r !== 0 && ((t = r), (n = Wl(e, r)))
  }
  if (n === 1) throw ((n = so), yn(e, 0), $t(e, t), Fe(e, Z()), n)
  if (n === 6) throw Error(T(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Ce, ft),
    Fe(e, Z()),
    null
  )
}
function ic(e, t) {
  var n = M
  M |= 1
  try {
    return e(t)
  } finally {
    ;(M = n), M === 0 && ((er = Z() + 500), Di && on())
  }
}
function Sn(e) {
  Lt !== null && Lt.tag === 0 && !(M & 6) && Wn()
  var t = M
  M |= 1
  var n = je.transition,
    r = H
  try {
    if (((je.transition = null), (H = 1), e)) return e()
  } finally {
    ;(H = r), (je.transition = n), (M = t), !(M & 6) && on()
  }
}
function ac() {
  ;(Re = Dn.current), W(Dn)
}
function yn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), I1(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n
      switch ((Uu(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Os()
          break
        case 3:
          Yn(), W(Ae), W(ve), Ju()
          break
        case 5:
          Ku(r)
          break
        case 4:
          Yn()
          break
        case 13:
          W(Q)
          break
        case 19:
          W(Q)
          break
        case 10:
          Vu(r.type._context)
          break
        case 22:
        case 23:
          ac()
      }
      n = n.return
    }
  if (
    ((ae = e),
    (te = e = Wt(e.current, null)),
    (de = Re = t),
    (oe = 0),
    (so = null),
    (oc = Hi = En = 0),
    (Ce = Dr = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          s = n.pending
        if (s !== null) {
          var i = s.next
          ;(s.next = o), (r.next = i)
        }
        n.pending = r
      }
    hn = null
  }
  return e
}
function J0(e, t) {
  do {
    var n = te
    try {
      if ((Gu(), (vs.current = Ws), Vs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Vs = !1
      }
      if (
        ((xn = 0),
        (ie = re = K = null),
        (Or = !1),
        (no = 0),
        (rc.current = null),
        n === null || n.return === null)
      ) {
        ;(oe = 1), (so = t), (te = null)
        break
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          l = t
        if (
          ((t = de),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            d = a,
            c = d.tag
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var v = Gd(i)
          if (v !== null) {
            ;(v.flags &= -257),
              Vd(v, i, a, s, t),
              v.mode & 1 && Hd(s, u, t),
              (t = v),
              (l = u)
            var g = t.updateQueue
            if (g === null) {
              var m = new Set()
              m.add(l), (t.updateQueue = m)
            } else g.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Hd(s, u, t), lc()
              break e
            }
            l = Error(T(426))
          }
        } else if (q && a.mode & 1) {
          var E = Gd(i)
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Vd(E, i, a, s, t),
              ju(Zn(l, a))
            break e
          }
        }
        ;(s = l = Zn(l, a)),
          oe !== 4 && (oe = 2),
          Dr === null ? (Dr = [s]) : Dr.push(s),
          (s = i)
        do {
          switch (s.tag) {
            case 3:
              ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
              var p = R0(s, l, t)
              $d(s, p)
              break e
            case 1:
              a = l
              var h = s.type,
                y = s.stateNode
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Gt === null || !Gt.has(y))))
              ) {
                ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
                var x = _0(s, a, t)
                $d(s, x)
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      Z0(n)
    } catch (C) {
      ;(t = C), te === n && n !== null && (te = n = n.return)
      continue
    }
    break
  } while (!0)
}
function X0() {
  var e = qs.current
  return (qs.current = Ws), e === null ? Ws : e
}
function lc() {
  ;(oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ae === null || (!(En & 268435455) && !(Hi & 268435455)) || $t(ae, de)
}
function Js(e, t) {
  var n = M
  M |= 2
  var r = X0()
  ;(ae !== e || de !== t) && ((ft = null), yn(e, t))
  do
    try {
      rg()
      break
    } catch (o) {
      J0(e, o)
    }
  while (!0)
  if ((Gu(), (M = n), (qs.current = r), te !== null)) throw Error(T(261))
  return (ae = null), (de = 0), oe
}
function rg() {
  while (te !== null) Y0(te)
}
function og() {
  while (te !== null && !Ny()) Y0(te)
}
function Y0(e) {
  var t = th(e.alternate, e, Re)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Z0(e) : (te = t),
    (rc.current = null)
}
function Z0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = X1(n, t)), n !== null)) {
        ;(n.flags &= 32767), (te = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(oe = 6), (te = null)
        return
      }
    } else if (((n = J1(n, t, Re)), n !== null)) {
      te = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      te = t
      return
    }
    te = t = e
  } while (t !== null)
  oe === 0 && (oe = 5)
}
function dn(e, t, n) {
  var r = H,
    o = je.transition
  try {
    ;(je.transition = null), (H = 1), sg(e, t, n, r)
  } finally {
    ;(je.transition = o), (H = r)
  }
  return null
}
function sg(e, t, n, r) {
  do Wn()
  while (Lt !== null)
  if (M & 6) throw Error(T(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var s = n.lanes | n.childLanes
  if (
    (Dy(e, s),
    e === ae && ((te = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wo ||
      ((Wo = !0), nh(Bs, () => (Wn(), null))),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ;(s = je.transition), (je.transition = null)
    var i = H
    H = 1
    var a = M
    ;(M |= 4),
      (rc.current = null),
      Z1(e, n),
      q0(n, e),
      C1(bl),
      (Rs = !!kl),
      (bl = kl = null),
      (e.current = n),
      eg(n),
      Fy(),
      (M = a),
      (H = i),
      (je.transition = s)
  } else e.current = n
  if (
    (Wo && ((Wo = !1), (Lt = e), (Ks = o)),
    (s = e.pendingLanes),
    s === 0 && (Gt = null),
    Ry(n.stateNode),
    Fe(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Qs) throw ((Qs = !1), (e = Gl), (Gl = null), e)
  return (
    Ks & 1 && e.tag !== 0 && Wn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Vl ? Mr++ : ((Mr = 0), (Vl = e))) : (Mr = 0),
    on(),
    null
  )
}
function Wn() {
  if (Lt !== null) {
    var e = Ip(Ks),
      t = je.transition,
      n = H
    try {
      if (((je.transition = null), (H = 16 > e ? 16 : e), Lt === null))
        var r = !1
      else {
        if (((e = Lt), (Lt = null), (Ks = 0), M & 6)) throw Error(T(331))
        var o = M
        for (M |= 4, N = e.current; N !== null; ) {
          var s = N,
            i = s.child
          if (N.flags & 16) {
            var a = s.deletions
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l]
                for (N = u; N !== null; ) {
                  var d = N
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, d, s)
                  }
                  var c = d.child
                  if (c !== null) (c.return = d), (N = c)
                  else
                    while (N !== null) {
                      d = N
                      var f = d.sibling,
                        v = d.return
                      if ((G0(d), d === u)) {
                        N = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = v), (N = f)
                        break
                      }
                      N = v
                    }
                }
              }
              var g = s.alternate
              if (g !== null) {
                var m = g.child
                if (m !== null) {
                  g.child = null
                  do {
                    var E = m.sibling
                    ;(m.sibling = null), (m = E)
                  } while (m !== null)
                }
              }
              N = s
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (N = i)
          else
            while (N !== null) {
              if (((s = N), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lr(9, s, s.return)
                }
              var p = s.sibling
              if (p !== null) {
                ;(p.return = s.return), (N = p)
                break
              }
              N = s.return
            }
        }
        var h = e.current
        for (N = h; N !== null; ) {
          i = N
          var y = i.child
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (N = y)
          else
            for (i = h; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ji(9, a)
                  }
                } catch (C) {
                  X(a, a.return, C)
                }
              if (a === i) {
                N = null
                break
              }
              var x = a.sibling
              if (x !== null) {
                ;(x.return = a.return), (N = x)
                break
              }
              N = a.return
            }
        }
        if (
          ((M = o), on(), at && typeof at.onPostCommitFiberRoot == 'function')
        )
          try {
            at.onPostCommitFiberRoot(_i, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(H = n), (je.transition = t)
    }
  }
  return !1
}
function of(e, t, n) {
  ;(t = Zn(n, t)),
    (t = R0(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Ee()),
    e !== null && (mo(e, 1, t), Fe(e, t))
}
function X(e, t, n) {
  if (e.tag === 3) of(e, e, n)
  else
    while (t !== null) {
      if (t.tag === 3) {
        of(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Gt === null || !Gt.has(r)))
        ) {
          ;(e = Zn(n, e)),
            (e = _0(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Ee()),
            t !== null && (mo(t, 1, e), Fe(t, e))
          break
        }
      }
      t = t.return
    }
}
function ig(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (oe === 4 || (oe === 3 && (de & 130023424) === de && 500 > Z() - sc)
        ? yn(e, 0)
        : (oc |= n)),
    Fe(e, t)
}
function eh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $o), ($o <<= 1), !($o & 130023424) && ($o = 4194304))
      : (t = 1))
  var n = Ee()
  ;(e = kt(e, t)), e !== null && (mo(e, t, n), Fe(e, n))
}
function ag(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), eh(e, n)
}
function lg(e, t) {
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
      throw Error(T(314))
  }
  r !== null && r.delete(t), eh(e, n)
}
var th
th = (e, t, n) => {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Pe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), K1(e, t, n)
      Pe = !!(e.flags & 131072)
    }
  else (Pe = !1), q && t.flags & 1048576 && o0(t, Ms, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      xs(e, t), (e = t.pendingProps)
      var o = Kn(t, ve.current)
      Vn(t, n), (o = Yu(null, t, r, e, o, n))
      var s = Zu()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((s = !0), Ls(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            qu(t),
            (o.updater = Mi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Rl(t, r, e, n),
            (t = $l(null, t, r, !0, s, n)))
          : ((t.tag = 0), q && s && Mu(t), xe(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (xs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = cg(r)),
          (e = Ke(r, e)),
          o)
        ) {
          case 0:
            t = zl(null, t, r, e, n)
            break e
          case 1:
            t = Qd(null, t, r, e, n)
            break e
          case 11:
            t = Wd(null, t, r, e, n)
            break e
          case 14:
            t = qd(null, t, r, Ke(r.type, e), n)
            break e
        }
        throw Error(T(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        zl(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Qd(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((L0(t), e === null)) throw Error(T(387))
        ;(r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          l0(e, t),
          Hs(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ;(o = Zn(Error(T(423)), t)), (t = Kd(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Zn(Error(T(424)), t)), (t = Kd(e, t, r, n, o))
            break e
          } else
            for (
              _e = jt(t.stateNode.containerInfo.firstChild),
                ze = t,
                q = !0,
                Xe = null,
                n = f0(t, null, r, n),
                t.child = n;
              n;
            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Jn(), r === o)) {
            t = bt(e, t, n)
            break e
          }
          xe(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        p0(t),
        e === null && Fl(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Cl(r, o) ? (i = null) : s !== null && Cl(r, s) && (t.flags |= 32),
        O0(e, t),
        xe(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && Fl(t), null
    case 13:
      return D0(e, t, n)
    case 4:
      return (
        Qu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Wd(e, t, r, o, n)
      )
    case 7:
      return xe(e, t, t.pendingProps, n), t.child
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          G(Us, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (et(s.value, i)) {
            if (s.children === o.children && !Ae.current) {
              t = bt(e, t, n)
              break e
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies
              if (a !== null) {
                i = s.child
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ;(l = gt(-1, n & -n)), (l.tag = 2)
                      var u = s.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var d = u.pending
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Bl(s.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(T(341))
                ;(i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Bl(i, n, t),
                  (i = s.sibling)
              } else i = s.child
              if (i !== null) i.return = s
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((s = i.sibling), s !== null)) {
                    ;(s.return = i.return), (i = s)
                    break
                  }
                  i = i.return
                }
              s = i
            }
        xe(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Vn(t, n),
        (o = Ge(o)),
        (r = r(o)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = Ke(r, t.pendingProps)),
        (o = Ke(r.type, o)),
        qd(e, t, r, o, n)
      )
    case 15:
      return z0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        xs(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), Ls(t)) : (e = !1),
        Vn(t, n),
        c0(t, r, o),
        Rl(t, r, o, n),
        $l(null, t, r, !0, e, n)
      )
    case 19:
      return M0(e, t, n)
    case 22:
      return $0(e, t, n)
  }
  throw Error(T(156, t.tag))
}
function nh(e, t) {
  return Ap(e, t)
}
function ug(e, t, n, r) {
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
function Ue(e, t, n, r) {
  return new ug(e, t, n, r)
}
function uc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function cg(e) {
  if (typeof e == 'function') return uc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Au)) return 11
    if (e === Nu) return 14
  }
  return 2
}
function Wt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
function ks(e, t, n, r, o, s) {
  var i = 2
  if (((r = e), typeof e == 'function')) uc(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case Nn:
        return gn(n.children, o, s, t)
      case Tu:
        ;(i = 8), (o |= 8)
        break
      case rl:
        return (e = Ue(12, n, t, o | 2)), (e.elementType = rl), (e.lanes = s), e
      case ol:
        return (e = Ue(13, n, t, o)), (e.elementType = ol), (e.lanes = s), e
      case sl:
        return (e = Ue(19, n, t, o)), (e.elementType = sl), (e.lanes = s), e
      case dp:
        return Gi(n, o, s, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case up:
              i = 10
              break e
            case cp:
              i = 9
              break e
            case Au:
              i = 11
              break e
            case Nu:
              i = 14
              break e
            case Rt:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(T(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ue(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  )
}
function gn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e
}
function Gi(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = dp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ha(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e
}
function Ga(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function dg(e, t, n, r, o) {
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
    (this.eventTimes = ba(0)),
    (this.expirationTimes = ba(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ba(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function cc(e, t, n, r, o, s, i, a, l) {
  return (
    (e = new dg(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ue(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qu(s),
    e
  )
}
function fg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: An,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function rh(e) {
  if (!e) return Kt
  e = e._reactInternals
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(T(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(T(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ne(n)) return n0(e, n, t)
  }
  return t
}
function oh(e, t, n, r, o, s, i, a, l) {
  return (
    (e = cc(n, r, !0, e, o, s, i, a, l)),
    (e.context = rh(null)),
    (n = e.current),
    (r = Ee()),
    (o = Vt(n)),
    (s = gt(r, o)),
    (s.callback = t ?? null),
    Ht(n, s, o),
    (e.current.lanes = o),
    mo(e, o, r),
    Fe(e, r),
    e
  )
}
function Vi(e, t, n, r) {
  var o = t.current,
    s = Ee(),
    i = Vt(o)
  return (
    (n = rh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(o, t, i)),
    e !== null && (Ze(e, o, i, s), gs(e, o, i)),
    i
  )
}
function Xs(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function sf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function dc(e, t) {
  sf(e, t), (e = e.alternate) && sf(e, t)
}
function pg() {
  return null
}
var sh =
  typeof reportError == 'function'
    ? reportError
    : (e) => {
        console.error(e)
      }
function fc(e) {
  this._internalRoot = e
}
Wi.prototype.render = fc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(T(409))
  Vi(e, t, null, null)
}
Wi.prototype.unmount = fc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Sn(() => {
      Vi(null, e, null, null)
    }),
      (t[St] = null)
  }
}
function Wi(e) {
  this._internalRoot = e
}
Wi.prototype.unstable_scheduleHydration = (e) => {
  if (e) {
    var t = zp()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Op(e)
  }
}
function pc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function af() {}
function hg(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var s = r
      r = () => {
        var u = Xs(i)
        s.call(u)
      }
    }
    var i = oh(t, r, e, 0, null, !1, !1, '', af)
    return (
      (e._reactRootContainer = i),
      (e[St] = i.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      Sn(),
      i
    )
  }
  while ((o = e.lastChild)) e.removeChild(o)
  if (typeof r == 'function') {
    var a = r
    r = () => {
      var u = Xs(l)
      a.call(u)
    }
  }
  var l = cc(e, 0, !1, null, null, !1, !1, '', af)
  return (
    (e._reactRootContainer = l),
    (e[St] = l.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    Sn(() => {
      Vi(t, l, n, r)
    }),
    l
  )
}
function Qi(e, t, n, r, o) {
  var s = n._reactRootContainer
  if (s) {
    var i = s
    if (typeof o == 'function') {
      var a = o
      o = () => {
        var l = Xs(i)
        a.call(l)
      }
    }
    Vi(t, i, e, o)
  } else i = hg(n, t, e, o, r)
  return Xs(i)
}
Rp = (e) => {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes)
        n !== 0 &&
          (Iu(t, n | 1), Fe(t, Z()), !(M & 6) && ((er = Z() + 500), on()))
      }
      break
    case 13:
      Sn(() => {
        var r = kt(e, 1)
        if (r !== null) {
          var o = Ee()
          Ze(r, e, 1, o)
        }
      }),
        dc(e, 1)
  }
}
Ru = (e) => {
  if (e.tag === 13) {
    var t = kt(e, 134217728)
    if (t !== null) {
      var n = Ee()
      Ze(t, e, 134217728, n)
    }
    dc(e, 134217728)
  }
}
_p = (e) => {
  if (e.tag === 13) {
    var t = Vt(e),
      n = kt(e, t)
    if (n !== null) {
      var r = Ee()
      Ze(n, e, t, r)
    }
    dc(e, t)
  }
}
zp = () => H
$p = (e, t) => {
  var n = H
  try {
    return (H = e), t()
  } finally {
    H = n
  }
}
ml = (e, t, n) => {
  switch (t) {
    case 'input':
      if ((ll(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = Li(r)
            if (!o) throw Error(T(90))
            pp(r), ll(r, o)
          }
        }
      }
      break
    case 'textarea':
      mp(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Un(e, !!n.multiple, t, !1)
  }
}
Sp = ic
kp = Sn
var mg = { usingClientEntryPoint: !1, Events: [go, Rn, Li, xp, Ep, ic] },
  kr = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  yg = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: (e) => (
      (e = Pp(e)), e === null ? null : e.stateNode
    ),
    findFiberByHostInstance: kr.findFiberByHostInstance || pg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      ;(_i = qo.inject(yg)), (at = qo)
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mg
Oe.createPortal = (e, t) => {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!pc(t)) throw Error(T(200))
  return fg(e, t, null, n)
}
Oe.createRoot = (e, t) => {
  if (!pc(e)) throw Error(T(299))
  var n = !1,
    r = '',
    o = sh
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = cc(e, 1, !1, null, null, n, !1, r, o)),
    (e[St] = t.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new fc(t)
  )
}
Oe.findDOMNode = (e) => {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(T(188))
      : ((e = Object.keys(e).join(',')), Error(T(268, e)))
  return (e = Pp(t)), (e = e === null ? null : e.stateNode), e
}
Oe.flushSync = (e) => Sn(e)
Oe.hydrate = (e, t, n) => {
  if (!qi(t)) throw Error(T(200))
  return Qi(null, e, t, !0, n)
}
Oe.hydrateRoot = (e, t, n) => {
  if (!pc(e)) throw Error(T(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = '',
    i = sh
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = oh(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[St] = t.current),
    Xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Wi(t)
}
Oe.render = (e, t, n) => {
  if (!qi(t)) throw Error(T(200))
  return Qi(null, e, t, !1, n)
}
Oe.unmountComponentAtNode = (e) => {
  if (!qi(e)) throw Error(T(40))
  return e._reactRootContainer
    ? (Sn(() => {
        Qi(null, null, e, !1, () => {
          ;(e._reactRootContainer = null), (e[St] = null)
        })
      }),
      !0)
    : !1
}
Oe.unstable_batchedUpdates = ic
Oe.unstable_renderSubtreeIntoContainer = (e, t, n, r) => {
  if (!qi(n)) throw Error(T(200))
  if (e == null || e._reactInternals === void 0) throw Error(T(38))
  return Qi(e, t, n, !1, r)
}
Oe.version = '18.2.0-next-9e3b772b8-20220608'
function ih() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ih)
    } catch (e) {
      console.error(e)
    }
}
ih(), (op.exports = Oe)
var gg = op.exports,
  lf = gg
;(tl.createRoot = lf.createRoot), (tl.hydrateRoot = lf.hydrateRoot)
function vg(e, t) {
  const n = e.exec(t)
  return n == null ? void 0 : n.groups
}
const uf = /^tuple(?<array>(\[(\d*)\])*)$/
function Ql(e) {
  let t = e.type
  if (uf.test(e.type) && 'components' in e) {
    t = '('
    const n = e.components.length
    for (let o = 0; o < n; o++) {
      const s = e.components[o]
      ;(t += Ql(s)), o < n - 1 && (t += ', ')
    }
    const r = vg(uf, e.type)
    return (
      (t += `)${(r == null ? void 0 : r.array) ?? ''}`), Ql({ ...e, type: t })
    )
  }
  return (
    'indexed' in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  )
}
function br(e) {
  let t = ''
  const n = e.length
  for (let r = 0; r < n; r++) {
    const o = e[r]
    ;(t += Ql(o)), r !== n - 1 && (t += ', ')
  }
  return t
}
function wg(e) {
  return e.type === 'function'
    ? `function ${e.name}(${br(e.inputs)})${
        e.stateMutability && e.stateMutability !== 'nonpayable'
          ? ` ${e.stateMutability}`
          : ''
      }${e.outputs.length ? ` returns (${br(e.outputs)})` : ''}`
    : e.type === 'event'
      ? `event ${e.name}(${br(e.inputs)})`
      : e.type === 'error'
        ? `error ${e.name}(${br(e.inputs)})`
        : e.type === 'constructor'
          ? `constructor(${br(e.inputs)})${
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
function Ct(e, { includeName: t = !1 } = {}) {
  if (e.type !== 'function' && e.type !== 'event' && e.type !== 'error')
    throw new zg(e.type)
  return `${e.name}(${Ki(e.inputs, { includeName: t })})`
}
function Ki(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => xg(n, { includeName: t })).join(t ? ', ' : ',') : ''
}
function xg(e, { includeName: t }) {
  return e.type.startsWith('tuple')
    ? `(${Ki(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : '')
}
function tt(e, { strict: t = !0 } = {}) {
  return !e || typeof e != 'string'
    ? !1
    : t
      ? /^0x[0-9a-fA-F]*$/.test(e)
      : e.startsWith('0x')
}
function ee(e) {
  return tt(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length
}
const Eg = '2.8.18',
  Sg = (e) => e,
  hc = (e) => e,
  kg = () => `viem@${Eg}`
class P extends Error {
  constructor(n, r = {}) {
    var i
    super()
    w(this, 'details')
    w(this, 'docsPath')
    w(this, 'metaMessages')
    w(this, 'shortMessage')
    w(this, 'name', 'ViemError')
    w(this, 'version', kg())
    const o =
        r.cause instanceof P
          ? r.cause.details
          : (i = r.cause) != null && i.message
            ? r.cause.message
            : r.details,
      s = (r.cause instanceof P && r.cause.docsPath) || r.docsPath
    ;(this.message = [
      n || 'An error occurred.',
      '',
      ...(r.metaMessages ? [...r.metaMessages, ''] : []),
      ...(s
        ? [`Docs: https://viem.sh${s}${r.docsSlug ? `#${r.docsSlug}` : ''}`]
        : []),
      ...(o ? [`Details: ${o}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      r.cause && (this.cause = r.cause),
      (this.details = o),
      (this.docsPath = s),
      (this.metaMessages = r.metaMessages),
      (this.shortMessage = n)
  }
  walk(n) {
    return ah(this, n)
  }
}
function ah(e, t) {
  return t != null && t(e)
    ? e
    : e && typeof e == 'object' && 'cause' in e
      ? ah(e.cause, t)
      : t
        ? null
        : e
}
class bg extends P {
  constructor({ docsPath: n }) {
    super(
      [
        'A constructor was not found on the ABI.',
        'Make sure you are using the correct ABI and that the constructor exists on it.',
      ].join(`
`),
      { docsPath: n },
    )
    w(this, 'name', 'AbiConstructorNotFoundError')
  }
}
class cf extends P {
  constructor({ docsPath: n }) {
    super(
      [
        'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
        'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.',
      ].join(`
`),
      { docsPath: n },
    )
    w(this, 'name', 'AbiConstructorParamsNotFoundError')
  }
}
class lh extends P {
  constructor({ data: n, params: r, size: o }) {
    super(
      [`Data size of ${o} bytes is too small for given parameters.`].join(`
`),
      {
        metaMessages: [
          `Params: (${Ki(r, { includeName: !0 })})`,
          `Data:   ${n} (${o} bytes)`,
        ],
      },
    )
    w(this, 'name', 'AbiDecodingDataSizeTooSmallError')
    w(this, 'data')
    w(this, 'params')
    w(this, 'size')
    ;(this.data = n), (this.params = r), (this.size = o)
  }
}
class Ji extends P {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.')
    w(this, 'name', 'AbiDecodingZeroDataError')
  }
}
class Cg extends P {
  constructor({ expectedLength: n, givenLength: r, type: o }) {
    super(
      [
        `ABI encoding array length mismatch for type ${o}.`,
        `Expected length: ${n}`,
        `Given length: ${r}`,
      ].join(`
`),
    )
    w(this, 'name', 'AbiEncodingArrayLengthMismatchError')
  }
}
class Pg extends P {
  constructor({ expectedSize: n, value: r }) {
    super(
      `Size of bytes "${r}" (bytes${ee(
        r,
      )}) does not match expected size (bytes${n}).`,
    )
    w(this, 'name', 'AbiEncodingBytesSizeMismatchError')
  }
}
class Tg extends P {
  constructor({ expectedLength: n, givenLength: r }) {
    super(
      [
        'ABI encoding params/values length mismatch.',
        `Expected length (params): ${n}`,
        `Given length (values): ${r}`,
      ].join(`
`),
    )
    w(this, 'name', 'AbiEncodingLengthMismatchError')
  }
}
class uh extends P {
  constructor(n, { docsPath: r }) {
    super(
      [
        `Encoded error signature "${n}" not found on ABI.`,
        'Make sure you are using the correct ABI and that the error exists on it.',
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${n}.`,
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'AbiErrorSignatureNotFoundError')
    w(this, 'signature')
    this.signature = n
  }
}
class Ag extends P {
  constructor({ docsPath: n }) {
    super('Cannot extract event signature from empty topics.', { docsPath: n })
    w(this, 'name', 'AbiEventSignatureEmptyTopicsError')
  }
}
class ch extends P {
  constructor(n, { docsPath: r }) {
    super(
      [
        `Encoded event signature "${n}" not found on ABI.`,
        'Make sure you are using the correct ABI and that the event exists on it.',
        `You can look up the signature here: https://openchain.xyz/signatures?query=${n}.`,
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'AbiEventSignatureNotFoundError')
  }
}
class df extends P {
  constructor(n, { docsPath: r } = {}) {
    super(
      [
        `Event ${n ? `"${n}" ` : ''}not found on ABI.`,
        'Make sure you are using the correct ABI and that the event exists on it.',
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'AbiEventNotFoundError')
  }
}
class Ys extends P {
  constructor(n, { docsPath: r } = {}) {
    super(
      [
        `Function ${n ? `"${n}" ` : ''}not found on ABI.`,
        'Make sure you are using the correct ABI and that the function exists on it.',
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'AbiFunctionNotFoundError')
  }
}
class Ng extends P {
  constructor(n, { docsPath: r }) {
    super(
      [
        `Function "${n}" does not contain any \`outputs\` on ABI.`,
        'Cannot decode function result without knowing what the parameter types are.',
        'Make sure you are using the correct ABI and that the function exists on it.',
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'AbiFunctionOutputsNotFoundError')
  }
}
class Fg extends P {
  constructor(n, r) {
    super('Found ambiguous types in overloaded ABI items.', {
      metaMessages: [
        `\`${n.type}\` in \`${Ct(n.abiItem)}\`, and`,
        `\`${r.type}\` in \`${Ct(r.abiItem)}\``,
        '',
        'These types encode differently and cannot be distinguished at runtime.',
        'Remove one of the ambiguous items in the ABI.',
      ],
    })
    w(this, 'name', 'AbiItemAmbiguityError')
  }
}
class Bg extends P {
  constructor({ expectedSize: n, givenSize: r }) {
    super(`Expected bytes${n}, got bytes${r}.`)
    w(this, 'name', 'BytesSizeMismatchError')
  }
}
class io extends P {
  constructor({ abiItem: n, data: r, params: o, size: s }) {
    super(
      [
        `Data size of ${s} bytes is too small for non-indexed event parameters.`,
      ].join(`
`),
      {
        metaMessages: [
          `Params: (${Ki(o, { includeName: !0 })})`,
          `Data:   ${r} (${s} bytes)`,
        ],
      },
    )
    w(this, 'name', 'DecodeLogDataMismatch')
    w(this, 'abiItem')
    w(this, 'data')
    w(this, 'params')
    w(this, 'size')
    ;(this.abiItem = n), (this.data = r), (this.params = o), (this.size = s)
  }
}
class Xi extends P {
  constructor({ abiItem: n, param: r }) {
    super(
      [
        `Expected a topic for indexed event parameter${
          r.name ? ` "${r.name}"` : ''
        } on event "${Ct(n, { includeName: !0 })}".`,
      ].join(`
`),
    )
    w(this, 'name', 'DecodeLogTopicsMismatch')
    w(this, 'abiItem')
    this.abiItem = n
  }
}
class Ig extends P {
  constructor(n, { docsPath: r }) {
    super(
      [
        `Type "${n}" is not a valid encoding type.`,
        'Please provide a valid ABI type.',
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'InvalidAbiEncodingType')
  }
}
class Rg extends P {
  constructor(n, { docsPath: r }) {
    super(
      [
        `Type "${n}" is not a valid decoding type.`,
        'Please provide a valid ABI type.',
      ].join(`
`),
      { docsPath: r },
    )
    w(this, 'name', 'InvalidAbiDecodingType')
  }
}
class _g extends P {
  constructor(n) {
    super(
      [`Value "${n}" is not a valid array.`].join(`
`),
    )
    w(this, 'name', 'InvalidArrayError')
  }
}
class zg extends P {
  constructor(n) {
    super(
      [
        `"${n}" is not a valid definition type.`,
        'Valid types: "function", "event", "error"',
      ].join(`
`),
    )
    w(this, 'name', 'InvalidDefinitionTypeError')
  }
}
class $g extends P {
  constructor(n) {
    super(`Filter type "${n}" is not supported.`)
    w(this, 'name', 'FilterTypeNotSupportedError')
  }
}
class dh extends P {
  constructor({ offset: n, position: r, size: o }) {
    super(
      `Slice ${
        r === 'start' ? 'starting' : 'ending'
      } at offset "${n}" is out-of-bounds (size: ${o}).`,
    )
    w(this, 'name', 'SliceOffsetOutOfBoundsError')
  }
}
class fh extends P {
  constructor({ size: n, targetSize: r, type: o }) {
    super(
      `${o.charAt(0).toUpperCase()}${o
        .slice(1)
        .toLowerCase()} size (${n}) exceeds padding size (${r}).`,
    )
    w(this, 'name', 'SizeExceedsPaddingSizeError')
  }
}
class ff extends P {
  constructor({ size: n, targetSize: r, type: o }) {
    super(
      `${o.charAt(0).toUpperCase()}${o
        .slice(1)
        .toLowerCase()} is expected to be ${r} ${o} long, but is ${n} ${o} long.`,
    )
    w(this, 'name', 'InvalidBytesLengthError')
  }
}
function ur(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == 'string'
    ? qt(e, { dir: t, size: n })
    : Og(e, { dir: t, size: n })
}
function qt(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e
  const r = e.replace('0x', '')
  if (r.length > n * 2)
    throw new fh({ size: Math.ceil(r.length / 2), targetSize: n, type: 'hex' })
  return `0x${r[t === 'right' ? 'padEnd' : 'padStart'](n * 2, '0')}`
}
function Og(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e
  if (e.length > n)
    throw new fh({ size: e.length, targetSize: n, type: 'bytes' })
  const r = new Uint8Array(n)
  for (let o = 0; o < n; o++) {
    const s = t === 'right'
    r[s ? o : n - o - 1] = e[s ? o : e.length - o - 1]
  }
  return r
}
class Lg extends P {
  constructor({ max: n, min: r, signed: o, size: s, value: i }) {
    super(
      `Number "${i}" is not in safe ${
        s ? `${s * 8}-bit ${o ? 'signed' : 'unsigned'} ` : ''
      }integer range ${n ? `(${r} to ${n})` : `(above ${r})`}`,
    )
    w(this, 'name', 'IntegerOutOfRangeError')
  }
}
class Dg extends P {
  constructor(n) {
    super(
      `Bytes value "${n}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
    )
    w(this, 'name', 'InvalidBytesBooleanError')
  }
}
class Mg extends P {
  constructor({ givenSize: n, maxSize: r }) {
    super(`Size cannot exceed ${r} bytes. Given size: ${n} bytes.`)
    w(this, 'name', 'SizeOverflowError')
  }
}
function tr(e, { dir: t = 'left' } = {}) {
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
function ut(e, { size: t }) {
  if (ee(e) > t) throw new Mg({ givenSize: ee(e), maxSize: t })
}
function ht(e, t = {}) {
  const { signed: n } = t
  t.size && ut(e, { size: t.size })
  const r = BigInt(e)
  if (!n) return r
  const o = (e.length - 2) / 2,
    s = (1n << (BigInt(o) * 8n - 1n)) - 1n
  return r <= s ? r : r - BigInt(`0x${'f'.padStart(o * 2, 'f')}`) - 1n
}
function Pt(e, t = {}) {
  return Number(ht(e, t))
}
const Ug = Array.from({ length: 256 }, (e, t) =>
  t.toString(16).padStart(2, '0'),
)
function $(e, t = {}) {
  return typeof e == 'number' || typeof e == 'bigint'
    ? _(e, t)
    : typeof e == 'string'
      ? mc(e, t)
      : typeof e == 'boolean'
        ? ph(e, t)
        : le(e, t)
}
function ph(e, t = {}) {
  const n = `0x${Number(e)}`
  return typeof t.size == 'number'
    ? (ut(n, { size: t.size }), ur(n, { size: t.size }))
    : n
}
function le(e, t = {}) {
  let n = ''
  for (let o = 0; o < e.length; o++) n += Ug[e[o]]
  const r = `0x${n}`
  return typeof t.size == 'number'
    ? (ut(r, { size: t.size }), ur(r, { dir: 'right', size: t.size }))
    : r
}
function _(e, t = {}) {
  const { signed: n, size: r } = t,
    o = BigInt(e)
  let s
  r
    ? n
      ? (s = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (s = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == 'number' && (s = BigInt(Number.MAX_SAFE_INTEGER))
  const i = typeof s == 'bigint' && n ? -s - 1n : 0
  if ((s && o > s) || o < i) {
    const l = typeof e == 'bigint' ? 'n' : ''
    throw new Lg({
      max: s ? `${s}${l}` : void 0,
      min: `${i}${l}`,
      signed: n,
      size: r,
      value: `${e}${l}`,
    })
  }
  const a = `0x${(n && o < 0 ? (1n << BigInt(r * 8)) + BigInt(o) : o).toString(
    16,
  )}`
  return r ? ur(a, { size: r }) : a
}
const jg = new TextEncoder()
function mc(e, t = {}) {
  const n = jg.encode(e)
  return le(n, t)
}
const Hg = new TextEncoder()
function Jt(e, t = {}) {
  return typeof e == 'number' || typeof e == 'bigint'
    ? Vg(e, t)
    : typeof e == 'boolean'
      ? Gg(e, t)
      : tt(e)
        ? Xt(e, t)
        : vt(e, t)
}
function Gg(e, t = {}) {
  const n = new Uint8Array(1)
  return (
    (n[0] = Number(e)),
    typeof t.size == 'number'
      ? (ut(n, { size: t.size }), ur(n, { size: t.size }))
      : n
  )
}
const dt = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 }
function pf(e) {
  if (e >= dt.zero && e <= dt.nine) return e - dt.zero
  if (e >= dt.A && e <= dt.F) return e - (dt.A - 10)
  if (e >= dt.a && e <= dt.f) return e - (dt.a - 10)
}
function Xt(e, t = {}) {
  let n = e
  t.size &&
    (ut(n, { size: t.size }), (n = ur(n, { dir: 'right', size: t.size })))
  let r = n.slice(2)
  r.length % 2 && (r = `0${r}`)
  const o = r.length / 2,
    s = new Uint8Array(o)
  for (let i = 0, a = 0; i < o; i++) {
    const l = pf(r.charCodeAt(a++)),
      u = pf(r.charCodeAt(a++))
    if (l === void 0 || u === void 0)
      throw new P(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`)
    s[i] = l * 16 + u
  }
  return s
}
function Vg(e, t) {
  const n = _(e, t)
  return Xt(n)
}
function vt(e, t = {}) {
  const n = Hg.encode(e)
  return typeof t.size == 'number'
    ? (ut(n, { size: t.size }), ur(n, { dir: 'right', size: t.size }))
    : n
}
function hf(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`)
}
function hh(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array')
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(
      `Expected Uint8Array of length ${t}, not of length=${e.length}`,
    )
}
function Zs(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed')
  if (t && e.finished) throw new Error('Hash#digest() has already been called')
}
function mh(e, t) {
  hh(e)
  const n = t.outputLen
  if (e.length < n)
    throw new Error(
      `digestInto() expects output buffer of length at least ${n}`,
    )
}
const Qo = BigInt(2 ** 32 - 1),
  mf = BigInt(32)
function Wg(e, t = !1) {
  return t
    ? { h: Number(e & Qo), l: Number((e >> mf) & Qo) }
    : { h: Number((e >> mf) & Qo) | 0, l: Number(e & Qo) | 0 }
}
function qg(e, t = !1) {
  const n = new Uint32Array(e.length),
    r = new Uint32Array(e.length)
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: i } = Wg(e[o], t)
    ;[n[o], r[o]] = [s, i]
  }
  return [n, r]
}
const Qg = (e, t, n) => (e << n) | (t >>> (32 - n)),
  Kg = (e, t, n) => (t << n) | (e >>> (32 - n)),
  Jg = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  Xg = (e, t, n) =>
    (e << (n - 32)) |
    (t >>>
      (64 -
        n)) /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Yg = (e) => e instanceof Uint8Array,
  Zg = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  Va = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  rt = (e, t) => (e << (32 - t)) | (e >>> t),
  ev = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68
if (!ev) throw new Error('Non little-endian hardware is not supported')
function tv(e) {
  if (typeof e != 'string')
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`)
  return new Uint8Array(new TextEncoder().encode(e))
}
function yc(e) {
  if ((typeof e == 'string' && (e = tv(e)), !Yg(e)))
    throw new Error(`expected Uint8Array, got ${typeof e}`)
  return e
}
class yh {
  clone() {
    return this._cloneInto()
  }
}
function gh(e) {
  const t = (r) => e().update(yc(r)).digest(),
    n = e()
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  )
}
const [vh, wh, xh] = [[], [], []],
  nv = BigInt(0),
  Cr = BigInt(1),
  rv = BigInt(2),
  ov = BigInt(7),
  sv = BigInt(256),
  iv = BigInt(113)
for (let e = 0, t = Cr, n = 1, r = 0; e < 24; e++) {
  ;([n, r] = [r, (2 * n + 3 * r) % 5]),
    vh.push(2 * (5 * r + n)),
    wh.push((((e + 1) * (e + 2)) / 2) % 64)
  let o = nv
  for (let s = 0; s < 7; s++)
    (t = ((t << Cr) ^ ((t >> ov) * iv)) % sv),
      t & rv && (o ^= Cr << ((Cr << BigInt(s)) - Cr))
  xh.push(o)
}
const [av, lv] = qg(xh, !0),
  yf = (e, t, n) => (n > 32 ? Jg(e, t, n) : Qg(e, t, n)),
  gf = (e, t, n) => (n > 32 ? Xg(e, t, n) : Kg(e, t, n))
function uv(e, t = 24) {
  const n = new Uint32Array(10)
  for (let r = 24 - t; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40]
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10,
        l = (i + 2) % 10,
        u = n[l],
        d = n[l + 1],
        c = yf(u, d, 1) ^ n[a],
        f = gf(u, d, 1) ^ n[a + 1]
      for (let v = 0; v < 50; v += 10) (e[i + v] ^= c), (e[i + v + 1] ^= f)
    }
    let o = e[2],
      s = e[3]
    for (let i = 0; i < 24; i++) {
      const a = wh[i],
        l = yf(o, s, a),
        u = gf(o, s, a),
        d = vh[i]
      ;(o = e[d]), (s = e[d + 1]), (e[d] = l), (e[d + 1] = u)
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++) n[a] = e[i + a]
      for (let a = 0; a < 10; a++)
        e[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10]
    }
    ;(e[0] ^= av[r]), (e[1] ^= lv[r])
  }
  n.fill(0)
}
class gc extends yh {
  constructor(t, n, r, o = !1, s = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = n),
      (this.outputLen = r),
      (this.enableXOF = o),
      (this.rounds = s),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      hf(r),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function')
    ;(this.state = new Uint8Array(200)), (this.state32 = Zg(this.state))
  }
  keccak() {
    uv(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0)
  }
  update(t) {
    Zs(this)
    const { blockLen: n, state: r } = this
    t = yc(t)
    const o = t.length
    for (let s = 0; s < o; ) {
      const i = Math.min(n - this.pos, o - s)
      for (let a = 0; a < i; a++) r[this.pos++] ^= t[s++]
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
    Zs(this, !1), hh(t), this.finish()
    const n = this.state,
      { blockLen: r } = this
    for (let o = 0, s = t.length; o < s; ) {
      this.posOut >= r && this.keccak()
      const i = Math.min(r - this.posOut, s - o)
      t.set(n.subarray(this.posOut, this.posOut + i), o),
        (this.posOut += i),
        (o += i)
    }
    return t
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error('XOF is not possible for this instance')
    return this.writeInto(t)
  }
  xof(t) {
    return hf(t), this.xofInto(new Uint8Array(t))
  }
  digestInto(t) {
    if ((mh(t, this), this.finished))
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
      rounds: s,
      enableXOF: i,
    } = this
    return (
      t || (t = new gc(n, r, o, i, s)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = s),
      (t.suffix = r),
      (t.outputLen = o),
      (t.enableXOF = i),
      (t.destroyed = this.destroyed),
      t
    )
  }
}
const cv = (e, t, n) => gh(() => new gc(t, e, n)),
  dv = cv(1, 136, 256 / 8)
function Te(e, t) {
  const n = t || 'hex',
    r = dv(tt(e, { strict: !1 }) ? Jt(e) : e)
  return n === 'bytes' ? r : $(r)
}
const fv = (e) => Te(Jt(e))
function pv(e) {
  return fv(e)
}
function hv(e) {
  let t = !0,
    n = '',
    r = 0,
    o = '',
    s = !1
  for (let i = 0; i < e.length; i++) {
    const a = e[i]
    if (
      (['(', ')', ','].includes(a) && (t = !0),
      a === '(' && r++,
      a === ')' && r--,
      !!t)
    ) {
      if (r === 0) {
        if (a === ' ' && ['event', 'function', ''].includes(o)) o = ''
        else if (((o += a), a === ')')) {
          s = !0
          break
        }
        continue
      }
      if (a === ' ') {
        e[i - 1] !== ',' && n !== ',' && n !== ',(' && ((n = ''), (t = !1))
        continue
      }
      ;(o += a), (n += a)
    }
  }
  if (!s) throw new P('Unable to normalize signature.')
  return o
}
const mv = (e) => {
  const t = typeof e == 'string' ? e : wg(e)
  return hv(t)
}
function Eh(e) {
  return pv(mv(e))
}
const vc = Eh
class We extends P {
  constructor({ address: n }) {
    super(`Address "${n}" is invalid.`, {
      metaMessages: [
        '- Address must be a hex value of 20 bytes (40 hex characters).',
        '- Address must match its checksum counterpart.',
      ],
    })
    w(this, 'name', 'InvalidAddressError')
  }
}
class yv extends Map {
  constructor(n) {
    super()
    w(this, 'maxSize')
    this.maxSize = n
  }
  set(n, r) {
    return (
      super.set(n, r),
      this.maxSize &&
        this.size > this.maxSize &&
        this.delete(this.keys().next().value),
      this
    )
  }
}
function Yi(e, t) {
  const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    r = Te(vt(n), 'bytes'),
    o = (t ? n.substring(`${t}0x`.length) : n).split('')
  for (let s = 0; s < 40; s += 2)
    r[s >> 1] >> 4 >= 8 && o[s] && (o[s] = o[s].toUpperCase()),
      (r[s >> 1] & 15) >= 8 && o[s + 1] && (o[s + 1] = o[s + 1].toUpperCase())
  return `0x${o.join('')}`
}
function gv(e, t) {
  if (!Se(e)) throw new We({ address: e })
  return Yi(e, t)
}
const vv = /^0x[a-fA-F0-9]{40}$/,
  Wa = new yv(8192)
function Se(e, { strict: t = !0 } = {}) {
  if (Wa.has(e)) return Wa.get(e)
  const n = vv.test(e)
    ? e.toLowerCase() === e
      ? !0
      : t
        ? Yi(e) === e
        : !0
    : !1
  return Wa.set(e, n), n
}
function Tt(e) {
  return typeof e[0] == 'string' ? Pn(e) : wv(e)
}
function wv(e) {
  let t = 0
  for (const o of e) t += o.length
  const n = new Uint8Array(t)
  let r = 0
  for (const o of e) n.set(o, r), (r += o.length)
  return n
}
function Pn(e) {
  return `0x${e.reduce((t, n) => t + n.replace('0x', ''), '')}`
}
function ao(e, t, n, { strict: r } = {}) {
  return tt(e, { strict: !1 })
    ? xv(e, t, n, { strict: r })
    : bh(e, t, n, { strict: r })
}
function Sh(e, t) {
  if (typeof t == 'number' && t > 0 && t > ee(e) - 1)
    throw new dh({ offset: t, position: 'start', size: ee(e) })
}
function kh(e, t, n) {
  if (typeof t == 'number' && typeof n == 'number' && ee(e) !== n - t)
    throw new dh({ offset: n, position: 'end', size: ee(e) })
}
function bh(e, t, n, { strict: r } = {}) {
  Sh(e, t)
  const o = e.slice(t, n)
  return r && kh(o, t, n), o
}
function xv(e, t, n, { strict: r } = {}) {
  Sh(e, t)
  const o = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (n ?? e.length) * 2)}`
  return r && kh(o, t, n), o
}
function wo(e, t) {
  if (e.length !== t.length)
    throw new Tg({ expectedLength: e.length, givenLength: t.length })
  const n = Ev({ params: e, values: t }),
    r = xc(n)
  return r.length === 0 ? '0x' : r
}
function Ev({ params: e, values: t }) {
  const n = []
  for (let r = 0; r < e.length; r++) n.push(wc({ param: e[r], value: t[r] }))
  return n
}
function wc({ param: e, value: t }) {
  const n = Ec(e.type)
  if (n) {
    const [r, o] = n
    return kv(t, { length: r, param: { ...e, type: o } })
  }
  if (e.type === 'tuple') return Av(t, { param: e })
  if (e.type === 'address') return Sv(t)
  if (e.type === 'bool') return Cv(t)
  if (e.type.startsWith('uint') || e.type.startsWith('int')) {
    const r = e.type.startsWith('int')
    return Pv(t, { signed: r })
  }
  if (e.type.startsWith('bytes')) return bv(t, { param: e })
  if (e.type === 'string') return Tv(t)
  throw new Ig(e.type, { docsPath: '/docs/contract/encodeAbiParameters' })
}
function xc(e) {
  let t = 0
  for (let s = 0; s < e.length; s++) {
    const { dynamic: i, encoded: a } = e[s]
    i ? (t += 32) : (t += ee(a))
  }
  const n = [],
    r = []
  let o = 0
  for (let s = 0; s < e.length; s++) {
    const { dynamic: i, encoded: a } = e[s]
    i ? (n.push(_(t + o, { size: 32 })), r.push(a), (o += ee(a))) : n.push(a)
  }
  return Tt([...n, ...r])
}
function Sv(e) {
  if (!Se(e)) throw new We({ address: e })
  return { dynamic: !1, encoded: qt(e.toLowerCase()) }
}
function kv(e, { length: t, param: n }) {
  const r = t === null
  if (!Array.isArray(e)) throw new _g(e)
  if (!r && e.length !== t)
    throw new Cg({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`,
    })
  let o = !1
  const s = []
  for (let i = 0; i < e.length; i++) {
    const a = wc({ param: n, value: e[i] })
    a.dynamic && (o = !0), s.push(a)
  }
  if (r || o) {
    const i = xc(s)
    if (r) {
      const a = _(s.length, { size: 32 })
      return { dynamic: !0, encoded: s.length > 0 ? Tt([a, i]) : a }
    }
    if (o) return { dynamic: !0, encoded: i }
  }
  return { dynamic: !1, encoded: Tt(s.map(({ encoded: i }) => i)) }
}
function bv(e, { param: t }) {
  const [, n] = t.type.split('bytes'),
    r = ee(e)
  if (!n) {
    let o = e
    return (
      r % 32 !== 0 &&
        (o = qt(o, {
          dir: 'right',
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: Tt([qt(_(r, { size: 32 })), o]) }
    )
  }
  if (r !== parseInt(n)) throw new Pg({ expectedSize: parseInt(n), value: e })
  return { dynamic: !1, encoded: qt(e, { dir: 'right' }) }
}
function Cv(e) {
  if (typeof e != 'boolean')
    throw new P(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`,
    )
  return { dynamic: !1, encoded: qt(ph(e)) }
}
function Pv(e, { signed: t }) {
  return { dynamic: !1, encoded: _(e, { size: 32, signed: t }) }
}
function Tv(e) {
  const t = mc(e),
    n = Math.ceil(ee(t) / 32),
    r = []
  for (let o = 0; o < n; o++)
    r.push(qt(ao(t, o * 32, (o + 1) * 32), { dir: 'right' }))
  return { dynamic: !0, encoded: Tt([qt(_(ee(t), { size: 32 })), ...r]) }
}
function Av(e, { param: t }) {
  let n = !1
  const r = []
  for (let o = 0; o < t.components.length; o++) {
    const s = t.components[o],
      i = Array.isArray(e) ? o : s.name,
      a = wc({ param: s, value: e[i] })
    r.push(a), a.dynamic && (n = !0)
  }
  return { dynamic: n, encoded: n ? xc(r) : Tt(r.map(({ encoded: o }) => o)) }
}
function Ec(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/)
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
const Sc = (e) => ao(Eh(e), 0, 4)
function xo(e) {
  const { abi: t, args: n = [], name: r } = e,
    o = tt(r, { strict: !1 }),
    s = t.filter((a) =>
      o
        ? a.type === 'function'
          ? Sc(a) === r
          : a.type === 'event'
            ? vc(a) === r
            : !1
        : 'name' in a && a.name === r,
    )
  if (s.length === 0) return
  if (s.length === 1) return s[0]
  let i
  for (const a of s) {
    if (!('inputs' in a)) continue
    if (!n || n.length === 0) {
      if (!a.inputs || a.inputs.length === 0) return a
      continue
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
      continue
    if (
      n.every((u, d) => {
        const c = 'inputs' in a && a.inputs[d]
        return c ? Kl(u, c) : !1
      })
    ) {
      if (i && 'inputs' in i && i.inputs) {
        const u = Ch(a.inputs, i.inputs, n)
        if (u)
          throw new Fg({ abiItem: a, type: u[0] }, { abiItem: i, type: u[1] })
      }
      i = a
    }
  }
  return i || s[0]
}
function Kl(e, t) {
  const n = typeof e,
    r = t.type
  switch (r) {
    case 'address':
      return Se(e, { strict: !1 })
    case 'bool':
      return n === 'boolean'
    case 'function':
      return n === 'string'
    case 'string':
      return n === 'string'
    default:
      return r === 'tuple' && 'components' in t
        ? Object.values(t.components).every((o, s) =>
            Kl(Object.values(e)[s], o),
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
                  Kl(o, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, '') }),
                )
              : !1
  }
}
function Ch(e, t, n) {
  for (const r in e) {
    const o = e[r],
      s = t[r]
    if (
      o.type === 'tuple' &&
      s.type === 'tuple' &&
      'components' in o &&
      'components' in s
    )
      return Ch(o.components, s.components, n[r])
    const i = [o.type, s.type]
    if (
      i.includes('address') && i.includes('bytes20')
        ? !0
        : i.includes('address') && i.includes('string')
          ? Se(n[r], { strict: !1 })
          : i.includes('address') && i.includes('bytes')
            ? Se(n[r], { strict: !1 })
            : !1
    )
      return i
  }
}
const vf = '/docs/contract/encodeEventTopics'
function Eo(e) {
  var l
  const { abi: t, eventName: n, args: r } = e
  let o = t[0]
  if (n) {
    const u = xo({ abi: t, name: n })
    if (!u) throw new df(n, { docsPath: vf })
    o = u
  }
  if (o.type !== 'event') throw new df(void 0, { docsPath: vf })
  const s = Ct(o),
    i = vc(s)
  let a = []
  if (r && 'inputs' in o) {
    const u =
        (l = o.inputs) == null
          ? void 0
          : l.filter((c) => 'indexed' in c && c.indexed),
      d = Array.isArray(r)
        ? r
        : Object.values(r).length > 0
          ? (u == null ? void 0 : u.map((c) => r[c.name])) ?? []
          : []
    d.length > 0 &&
      (a =
        (u == null
          ? void 0
          : u.map((c, f) =>
              Array.isArray(d[f])
                ? d[f].map((v, g) => wf({ param: c, value: d[f][g] }))
                : d[f]
                  ? wf({ param: c, value: d[f] })
                  : null,
            )) ?? [])
  }
  return [i, ...a]
}
function wf({ param: e, value: t }) {
  if (e.type === 'string' || e.type === 'bytes') return Te(Jt(t))
  if (e.type === 'tuple' || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new $g(e.type)
  return wo([e], [t])
}
function Zi(e, { method: t }) {
  var r, o
  const n = {}
  return (
    e.transport.type === 'fallback' &&
      ((o = (r = e.transport).onResponse) == null ||
        o.call(r, ({ method: s, response: i, status: a, transport: l }) => {
          a === 'success' && t === s && (n[i] = l.request)
        })),
    (s) => n[s] || e.request
  )
}
async function Ph(e, t) {
  const {
      address: n,
      abi: r,
      args: o,
      eventName: s,
      fromBlock: i,
      strict: a,
      toBlock: l,
    } = t,
    u = Zi(e, { method: 'eth_newFilter' }),
    d = s ? Eo({ abi: r, args: o, eventName: s }) : void 0,
    c = await e.request({
      method: 'eth_newFilter',
      params: [
        {
          address: n,
          fromBlock: typeof i == 'bigint' ? _(i) : i,
          toBlock: typeof l == 'bigint' ? _(l) : l,
          topics: d,
        },
      ],
    })
  return {
    abi: r,
    args: o,
    eventName: s,
    id: c,
    request: u(c),
    strict: !!a,
    type: 'event',
  }
}
function qe(e) {
  return typeof e == 'string' ? { address: e, type: 'json-rpc' } : e
}
const xf = '/docs/contract/encodeFunctionData'
function Nv(e) {
  const { abi: t, args: n, functionName: r } = e
  let o = t[0]
  if (r) {
    const s = xo({ abi: t, args: n, name: r })
    if (!s) throw new Ys(r, { docsPath: xf })
    o = s
  }
  if (o.type !== 'function') throw new Ys(void 0, { docsPath: xf })
  return { abi: [o], functionName: Sc(Ct(o)) }
}
function sn(e) {
  const { args: t } = e,
    { abi: n, functionName: r } = (() => {
      var a
      return e.abi.length === 1 &&
        (a = e.functionName) != null &&
        a.startsWith('0x')
        ? e
        : Nv(e)
    })(),
    o = n[0],
    s = r,
    i = 'inputs' in o && o.inputs ? wo(o.inputs, t ?? []) : void 0
  return Pn([s, i ?? '0x'])
}
const Th = {
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
  Fv = {
    inputs: [{ name: 'message', type: 'string' }],
    name: 'Error',
    type: 'error',
  },
  Bv = {
    inputs: [{ name: 'reason', type: 'uint256' }],
    name: 'Panic',
    type: 'error',
  }
class Ef extends P {
  constructor({ offset: n }) {
    super(`Offset \`${n}\` cannot be negative.`)
    w(this, 'name', 'NegativeOffsetError')
  }
}
class Ah extends P {
  constructor({ length: n, position: r }) {
    super(`Position \`${r}\` is out of bounds (\`0 < position < ${n}\`).`)
    w(this, 'name', 'PositionOutOfBoundsError')
  }
}
class Iv extends P {
  constructor({ count: n, limit: r }) {
    super(
      `Recursive read limit of \`${r}\` exceeded (recursive read count: \`${n}\`).`,
    )
    w(this, 'name', 'RecursiveReadLimitExceededError')
  }
}
const Rv = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: 1 / 0,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Iv({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      })
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Ah({ length: this.bytes.length, position: e })
  },
  decrementPosition(e) {
    if (e < 0) throw new Ef({ offset: e })
    const t = this.position - e
    this.assertPosition(t), (this.position = t)
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0
  },
  incrementPosition(e) {
    if (e < 0) throw new Ef({ offset: e })
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
function kc(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(Rv)
  return (
    (n.bytes = e),
    (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (n.positionReadCount = new Map()),
    (n.recursiveReadLimit = t),
    n
  )
}
function _v(e, t = {}) {
  typeof t.size < 'u' && ut(e, { size: t.size })
  const n = le(e, t)
  return ht(n, t)
}
function zv(e, t = {}) {
  let n = e
  if (
    (typeof t.size < 'u' && (ut(n, { size: t.size }), (n = tr(n))),
    n.length > 1 || n[0] > 1)
  )
    throw new Dg(n)
  return !!n[0]
}
function wt(e, t = {}) {
  typeof t.size < 'u' && ut(e, { size: t.size })
  const n = le(e, t)
  return Pt(n, t)
}
function $v(e, t = {}) {
  let n = e
  return (
    typeof t.size < 'u' &&
      (ut(n, { size: t.size }), (n = tr(n, { dir: 'right' }))),
    new TextDecoder().decode(n)
  )
}
function ea(e, t) {
  const n = typeof t == 'string' ? Xt(t) : t,
    r = kc(n)
  if (ee(n) === 0 && e.length > 0) throw new Ji()
  if (ee(t) && ee(t) < 32)
    throw new lh({
      data: typeof t == 'string' ? t : le(t),
      params: e,
      size: ee(t),
    })
  let o = 0
  const s = []
  for (let i = 0; i < e.length; ++i) {
    const a = e[i]
    r.setPosition(o)
    const [l, u] = qn(r, a, { staticPosition: 0 })
    ;(o += u), s.push(l)
  }
  return s
}
function qn(e, t, { staticPosition: n }) {
  const r = Ec(t.type)
  if (r) {
    const [o, s] = r
    return Lv(e, { ...t, type: s }, { length: o, staticPosition: n })
  }
  if (t.type === 'tuple') return jv(e, t, { staticPosition: n })
  if (t.type === 'address') return Ov(e)
  if (t.type === 'bool') return Dv(e)
  if (t.type.startsWith('bytes')) return Mv(e, t, { staticPosition: n })
  if (t.type.startsWith('uint') || t.type.startsWith('int')) return Uv(e, t)
  if (t.type === 'string') return Hv(e, { staticPosition: n })
  throw new Rg(t.type, { docsPath: '/docs/contract/decodeAbiParameters' })
}
const Sf = 32,
  Jl = 32
function Ov(e) {
  const t = e.readBytes(32)
  return [Yi(le(bh(t, -20))), 32]
}
function Lv(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const i = wt(e.readBytes(Jl)),
      a = r + i,
      l = a + Sf
    e.setPosition(a)
    const u = wt(e.readBytes(Sf)),
      d = lo(t)
    let c = 0
    const f = []
    for (let v = 0; v < u; ++v) {
      e.setPosition(l + (d ? v * 32 : c))
      const [g, m] = qn(e, t, { staticPosition: l })
      ;(c += m), f.push(g)
    }
    return e.setPosition(r + 32), [f, 32]
  }
  if (lo(t)) {
    const i = wt(e.readBytes(Jl)),
      a = r + i,
      l = []
    for (let u = 0; u < n; ++u) {
      e.setPosition(a + u * 32)
      const [d] = qn(e, t, { staticPosition: a })
      l.push(d)
    }
    return e.setPosition(r + 32), [l, 32]
  }
  let o = 0
  const s = []
  for (let i = 0; i < n; ++i) {
    const [a, l] = qn(e, t, { staticPosition: r + o })
    ;(o += l), s.push(a)
  }
  return [s, o]
}
function Dv(e) {
  return [zv(e.readBytes(32), { size: 32 }), 32]
}
function Mv(e, t, { staticPosition: n }) {
  const [r, o] = t.type.split('bytes')
  if (!o) {
    const i = wt(e.readBytes(32))
    e.setPosition(n + i)
    const a = wt(e.readBytes(32))
    if (a === 0) return e.setPosition(n + 32), ['0x', 32]
    const l = e.readBytes(a)
    return e.setPosition(n + 32), [le(l), 32]
  }
  return [le(e.readBytes(parseInt(o), 32)), 32]
}
function Uv(e, t) {
  const n = t.type.startsWith('int'),
    r = parseInt(t.type.split('int')[1] || '256'),
    o = e.readBytes(32)
  return [r > 48 ? _v(o, { signed: n }) : wt(o, { signed: n }), 32]
}
function jv(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: i }) => !i),
    o = r ? [] : {}
  let s = 0
  if (lo(t)) {
    const i = wt(e.readBytes(Jl)),
      a = n + i
    for (let l = 0; l < t.components.length; ++l) {
      const u = t.components[l]
      e.setPosition(a + s)
      const [d, c] = qn(e, u, { staticPosition: a })
      ;(s += c), (o[r ? l : u == null ? void 0 : u.name] = d)
    }
    return e.setPosition(n + 32), [o, 32]
  }
  for (let i = 0; i < t.components.length; ++i) {
    const a = t.components[i],
      [l, u] = qn(e, a, { staticPosition: n })
    ;(o[r ? i : a == null ? void 0 : a.name] = l), (s += u)
  }
  return [o, s]
}
function Hv(e, { staticPosition: t }) {
  const n = wt(e.readBytes(32)),
    r = t + n
  e.setPosition(r)
  const o = wt(e.readBytes(32))
  if (o === 0) return e.setPosition(t + 32), ['', 32]
  const s = e.readBytes(o, 32),
    i = $v(tr(s))
  return e.setPosition(t + 32), [i, 32]
}
function lo(e) {
  var r
  const { type: t } = e
  if (t === 'string' || t === 'bytes' || t.endsWith('[]')) return !0
  if (t === 'tuple') return (r = e.components) == null ? void 0 : r.some(lo)
  const n = Ec(e.type)
  return !!(n && lo({ ...e, type: n[1] }))
}
function Gv(e) {
  const { abi: t, data: n } = e,
    r = ao(n, 0, 4)
  if (r === '0x') throw new Ji()
  const s = [...(t || []), Fv, Bv].find(
    (i) => i.type === 'error' && r === Sc(Ct(i)),
  )
  if (!s) throw new uh(r, { docsPath: '/docs/contract/decodeErrorResult' })
  return {
    abiItem: s,
    args:
      'inputs' in s && s.inputs && s.inputs.length > 0
        ? ea(s.inputs, ao(n, 4))
        : void 0,
    errorName: s.name,
  }
}
const fe = (e, t, n) =>
  JSON.stringify(
    e,
    (r, o) => {
      const s = typeof o == 'bigint' ? o.toString() : o
      return typeof t == 'function' ? t(r, s) : s
    },
    n,
  )
function Nh({
  abiItem: e,
  args: t,
  includeFunctionName: n = !0,
  includeName: r = !1,
}) {
  if ('name' in e && 'inputs' in e && e.inputs)
    return `${n ? e.name : ''}(${e.inputs
      .map(
        (o, s) =>
          `${r && o.name ? `${o.name}: ` : ''}${
            typeof t[s] == 'object' ? fe(t[s]) : t[s]
          }`,
      )
      .join(', ')})`
}
const Fh = { gwei: 9, wei: 18 },
  Vv = { ether: -9, wei: 9 }
function Bh(e, t) {
  let n = e.toString()
  const r = n.startsWith('-')
  r && (n = n.slice(1)), (n = n.padStart(t, '0'))
  let [o, s] = [n.slice(0, n.length - t), n.slice(n.length - t)]
  return (
    (s = s.replace(/(0+)$/, '')),
    `${r ? '-' : ''}${o || '0'}${s ? `.${s}` : ''}`
  )
}
function bc(e, t = 'wei') {
  return Bh(e, Fh[t])
}
function Be(e, t = 'wei') {
  return Bh(e, Vv[t])
}
class Wv extends P {
  constructor({ address: n }) {
    super(`State for account "${n}" is set multiple times.`)
    w(this, 'name', 'AccountStateConflictError')
  }
}
class qv extends P {
  constructor() {
    super('state and stateDiff are set on the same account.')
    w(this, 'name', 'StateAssignmentConflictError')
  }
}
function kf(e) {
  return e.reduce(
    (t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`,
    '',
  )
}
function Qv(e) {
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
            (o += kf(r.state))),
          r.stateDiff &&
            ((o += `      stateDiff:
`),
            (o += kf(r.stateDiff))),
          o
        )
      },
      `  State Override:
`,
    )
    .slice(0, -1)
}
function So(e) {
  const t = Object.entries(e)
      .map(([r, o]) => (o === void 0 || o === !1 ? null : [r, o]))
      .filter(Boolean),
    n = t.reduce((r, [o]) => Math.max(r, o.length), 0)
  return t
    .map(([r, o]) => `  ${`${r}:`.padEnd(n + 1)}  ${o}`)
    .join(`
`)
}
class Kv extends P {
  constructor() {
    super(
      [
        'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
        'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
      ].join(`
`),
    )
    w(this, 'name', 'FeeConflictError')
  }
}
class Jv extends P {
  constructor({ v: n }) {
    super(`Invalid \`v\` value "${n}". Expected 27 or 28.`)
    w(this, 'name', 'InvalidLegacyVError')
  }
}
class Xv extends P {
  constructor({ transaction: n }) {
    super('Cannot infer a transaction type from provided transaction.', {
      metaMessages: [
        'Provided Transaction:',
        '{',
        So(n),
        '}',
        '',
        'To infer the type, either provide:',
        '- a `type` to the Transaction, or',
        '- an EIP-1559 Transaction with `maxFeePerGas`, or',
        '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
        '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
        '- a Legacy Transaction with `gasPrice`',
      ],
    })
    w(this, 'name', 'InvalidSerializableTransactionError')
  }
}
class Yv extends P {
  constructor({ storageKey: n }) {
    super(
      `Size for storage key "${n}" is invalid. Expected 32 bytes. Got ${Math.floor(
        (n.length - 2) / 2,
      )} bytes.`,
    )
    w(this, 'name', 'InvalidStorageKeySizeError')
  }
}
class Zv extends P {
  constructor(
    n,
    {
      account: r,
      docsPath: o,
      chain: s,
      data: i,
      gas: a,
      gasPrice: l,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      nonce: c,
      to: f,
      value: v,
    },
  ) {
    var m
    const g = So({
      chain:
        s &&
        `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
      from: r == null ? void 0 : r.address,
      to: f,
      value:
        typeof v < 'u' &&
        `${bc(v)} ${
          ((m = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : m.symbol) || 'ETH'
        }`,
      data: i,
      gas: a,
      gasPrice: typeof l < 'u' && `${Be(l)} gwei`,
      maxFeePerGas: typeof u < 'u' && `${Be(u)} gwei`,
      maxPriorityFeePerGas: typeof d < 'u' && `${Be(d)} gwei`,
      nonce: c,
    })
    super(n.shortMessage, {
      cause: n,
      docsPath: o,
      metaMessages: [
        ...(n.metaMessages ? [...n.metaMessages, ' '] : []),
        'Request Arguments:',
        g,
      ].filter(Boolean),
    })
    w(this, 'cause')
    w(this, 'name', 'TransactionExecutionError')
    this.cause = n
  }
}
class Ih extends P {
  constructor({
    blockHash: n,
    blockNumber: r,
    blockTag: o,
    hash: s,
    index: i,
  }) {
    let a = 'Transaction'
    o &&
      i !== void 0 &&
      (a = `Transaction at block time "${o}" at index "${i}"`),
      n &&
        i !== void 0 &&
        (a = `Transaction at block hash "${n}" at index "${i}"`),
      r &&
        i !== void 0 &&
        (a = `Transaction at block number "${r}" at index "${i}"`),
      s && (a = `Transaction with hash "${s}"`)
    super(`${a} could not be found.`)
    w(this, 'name', 'TransactionNotFoundError')
  }
}
class Rh extends P {
  constructor({ hash: n }) {
    super(
      `Transaction receipt with hash "${n}" could not be found. The Transaction may not be processed on a block yet.`,
    )
    w(this, 'name', 'TransactionReceiptNotFoundError')
  }
}
class ew extends P {
  constructor({ hash: n }) {
    super(
      `Timed out while waiting for transaction with hash "${n}" to be confirmed.`,
    )
    w(this, 'name', 'WaitForTransactionReceiptTimeoutError')
  }
}
class _h extends P {
  constructor(
    n,
    {
      account: r,
      docsPath: o,
      chain: s,
      data: i,
      gas: a,
      gasPrice: l,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      nonce: c,
      to: f,
      value: v,
      stateOverride: g,
    },
  ) {
    var p
    const m = r ? qe(r) : void 0
    let E = So({
      from: m == null ? void 0 : m.address,
      to: f,
      value:
        typeof v < 'u' &&
        `${bc(v)} ${
          ((p = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : p.symbol) || 'ETH'
        }`,
      data: i,
      gas: a,
      gasPrice: typeof l < 'u' && `${Be(l)} gwei`,
      maxFeePerGas: typeof u < 'u' && `${Be(u)} gwei`,
      maxPriorityFeePerGas: typeof d < 'u' && `${Be(d)} gwei`,
      nonce: c,
    })
    g &&
      (E += `
${Qv(g)}`)
    super(n.shortMessage, {
      cause: n,
      docsPath: o,
      metaMessages: [
        ...(n.metaMessages ? [...n.metaMessages, ' '] : []),
        'Raw Call Arguments:',
        E,
      ].filter(Boolean),
    })
    w(this, 'cause')
    w(this, 'name', 'CallExecutionError')
    this.cause = n
  }
}
class tw extends P {
  constructor(
    n,
    {
      abi: r,
      args: o,
      contractAddress: s,
      docsPath: i,
      functionName: a,
      sender: l,
    },
  ) {
    const u = xo({ abi: r, args: o, name: a }),
      d = u
        ? Nh({ abiItem: u, args: o, includeFunctionName: !1, includeName: !1 })
        : void 0,
      c = u ? Ct(u, { includeName: !0 }) : void 0,
      f = So({
        address: s && Sg(s),
        function: c,
        args:
          d &&
          d !== '()' &&
          `${[...Array((a == null ? void 0 : a.length) ?? 0).keys()]
            .map(() => ' ')
            .join('')}${d}`,
        sender: l,
      })
    super(
      n.shortMessage ||
        `An unknown error occurred while executing the contract function "${a}".`,
      {
        cause: n,
        docsPath: i,
        metaMessages: [
          ...(n.metaMessages ? [...n.metaMessages, ' '] : []),
          'Contract Call:',
          f,
        ].filter(Boolean),
      },
    )
    w(this, 'abi')
    w(this, 'args')
    w(this, 'cause')
    w(this, 'contractAddress')
    w(this, 'formattedArgs')
    w(this, 'functionName')
    w(this, 'sender')
    w(this, 'name', 'ContractFunctionExecutionError')
    ;(this.abi = r),
      (this.args = o),
      (this.cause = n),
      (this.contractAddress = s),
      (this.functionName = a),
      (this.sender = l)
  }
}
class Xl extends P {
  constructor({ abi: n, data: r, functionName: o, message: s }) {
    let i, a, l, u
    if (r && r !== '0x')
      try {
        a = Gv({ abi: n, data: r })
        const { abiItem: c, errorName: f, args: v } = a
        if (f === 'Error') u = v[0]
        else if (f === 'Panic') {
          const [g] = v
          u = Th[g]
        } else {
          const g = c ? Ct(c, { includeName: !0 }) : void 0,
            m =
              c && v
                ? Nh({
                    abiItem: c,
                    args: v,
                    includeFunctionName: !1,
                    includeName: !1,
                  })
                : void 0
          l = [
            g ? `Error: ${g}` : '',
            m && m !== '()'
              ? `       ${[
                  ...Array((f == null ? void 0 : f.length) ?? 0).keys(),
                ]
                  .map(() => ' ')
                  .join('')}${m}`
              : '',
          ]
        }
      } catch (c) {
        i = c
      }
    else s && (u = s)
    let d
    i instanceof uh &&
      ((d = i.signature),
      (l = [
        `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
        'Make sure you are using the correct ABI and that the error exists on it.',
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
      ]))
    super(
      (u && u !== 'execution reverted') || d
        ? [
            `The contract function "${o}" reverted with the following ${
              d ? 'signature' : 'reason'
            }:`,
            u || d,
          ].join(`
`)
        : `The contract function "${o}" reverted.`,
      { cause: i, metaMessages: l },
    )
    w(this, 'name', 'ContractFunctionRevertedError')
    w(this, 'data')
    w(this, 'reason')
    w(this, 'signature')
    ;(this.data = a), (this.reason = u), (this.signature = d)
  }
}
class nw extends P {
  constructor({ functionName: n }) {
    super(`The contract function "${n}" returned no data ("0x").`, {
      metaMessages: [
        'This could be due to any of the following:',
        `  - The contract does not have the function "${n}",`,
        '  - The parameters passed to the contract function may be invalid, or',
        '  - The address is not a contract.',
      ],
    })
    w(this, 'name', 'ContractFunctionZeroDataError')
  }
}
class Cc extends P {
  constructor({ data: n, message: r }) {
    super(r || '')
    w(this, 'code', 3)
    w(this, 'name', 'RawContractError')
    w(this, 'data')
    this.data = n
  }
}
class Ur extends P {
  constructor({ body: n, details: r, headers: o, status: s, url: i }) {
    super('HTTP request failed.', {
      details: r,
      metaMessages: [
        s && `Status: ${s}`,
        `URL: ${hc(i)}`,
        n && `Request body: ${fe(n)}`,
      ].filter(Boolean),
    })
    w(this, 'name', 'HttpRequestError')
    w(this, 'body')
    w(this, 'headers')
    w(this, 'status')
    w(this, 'url')
    ;(this.body = n), (this.headers = o), (this.status = s), (this.url = i)
  }
}
class zh extends P {
  constructor({ body: n, error: r, url: o }) {
    super('RPC Request failed.', {
      cause: r,
      details: r.message,
      metaMessages: [`URL: ${hc(o)}`, `Request body: ${fe(n)}`],
    })
    w(this, 'name', 'RpcRequestError')
    w(this, 'code')
    this.code = r.code
  }
}
class bf extends P {
  constructor({ body: n, url: r }) {
    super('The request took too long to respond.', {
      details: 'The request timed out.',
      metaMessages: [`URL: ${hc(r)}`, `Request body: ${fe(n)}`],
    })
    w(this, 'name', 'TimeoutError')
  }
}
const rw = -1
class Ie extends P {
  constructor(n, { code: r, docsPath: o, metaMessages: s, shortMessage: i }) {
    super(i, {
      cause: n,
      docsPath: o,
      metaMessages: s || (n == null ? void 0 : n.metaMessages),
    })
    w(this, 'name', 'RpcError')
    w(this, 'code')
    ;(this.name = n.name), (this.code = n instanceof zh ? n.code : r ?? rw)
  }
}
class cr extends Ie {
  constructor(n, r) {
    super(n, r)
    w(this, 'name', 'ProviderRpcError')
    w(this, 'data')
    this.data = r.data
  }
}
const mi = class mi extends Ie {
  constructor(n) {
    super(n, {
      code: mi.code,
      shortMessage:
        'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    })
    w(this, 'name', 'ParseRpcError')
  }
}
w(mi, 'code', -32700)
const ei = mi
const yi = class yi extends Ie {
  constructor(n) {
    super(n, {
      code: yi.code,
      shortMessage: 'JSON is not a valid request object.',
    })
    w(this, 'name', 'InvalidRequestRpcError')
  }
}
w(yi, 'code', -32600)
const ti = yi
const gi = class gi extends Ie {
  constructor(n) {
    super(n, {
      code: gi.code,
      shortMessage: 'The method does not exist / is not available.',
    })
    w(this, 'name', 'MethodNotFoundRpcError')
  }
}
w(gi, 'code', -32601)
const ni = gi
const vi = class vi extends Ie {
  constructor(n) {
    super(n, {
      code: vi.code,
      shortMessage: [
        'Invalid parameters were provided to the RPC method.',
        'Double check you have provided the correct parameters.',
      ].join(`
`),
    })
    w(this, 'name', 'InvalidParamsRpcError')
  }
}
w(vi, 'code', -32602)
const ri = vi
const wi = class wi extends Ie {
  constructor(n) {
    super(n, { code: wi.code, shortMessage: 'An internal error was received.' })
    w(this, 'name', 'InternalRpcError')
  }
}
w(wi, 'code', -32603)
const nr = wi
const xi = class xi extends Ie {
  constructor(n) {
    super(n, {
      code: xi.code,
      shortMessage: [
        'Missing or invalid parameters.',
        'Double check you have provided the correct parameters.',
      ].join(`
`),
    })
    w(this, 'name', 'InvalidInputRpcError')
  }
}
w(xi, 'code', -32e3)
const rr = xi
const Ei = class Ei extends Ie {
  constructor(n) {
    super(n, { code: Ei.code, shortMessage: 'Requested resource not found.' })
    w(this, 'name', 'ResourceNotFoundRpcError')
  }
}
w(Ei, 'code', -32001)
const oi = Ei
const Si = class Si extends Ie {
  constructor(n) {
    super(n, {
      code: Si.code,
      shortMessage: 'Requested resource not available.',
    })
    w(this, 'name', 'ResourceUnavailableRpcError')
  }
}
w(Si, 'code', -32002)
const si = Si
const ki = class ki extends Ie {
  constructor(n) {
    super(n, { code: ki.code, shortMessage: 'Transaction creation failed.' })
    w(this, 'name', 'TransactionRejectedRpcError')
  }
}
w(ki, 'code', -32003)
const ii = ki
const bi = class bi extends Ie {
  constructor(n) {
    super(n, { code: bi.code, shortMessage: 'Method is not implemented.' })
    w(this, 'name', 'MethodNotSupportedRpcError')
  }
}
w(bi, 'code', -32004)
const ai = bi
const Ci = class Ci extends Ie {
  constructor(n) {
    super(n, { code: Ci.code, shortMessage: 'Request exceeds defined limit.' })
    w(this, 'name', 'LimitExceededRpcError')
  }
}
w(Ci, 'code', -32005)
const uo = Ci
const Pi = class Pi extends Ie {
  constructor(n) {
    super(n, {
      code: Pi.code,
      shortMessage: 'Version of JSON-RPC protocol is not supported.',
    })
    w(this, 'name', 'JsonRpcVersionUnsupportedError')
  }
}
w(Pi, 'code', -32006)
const li = Pi
const Ti = class Ti extends cr {
  constructor(n) {
    super(n, { code: Ti.code, shortMessage: 'User rejected the request.' })
    w(this, 'name', 'UserRejectedRequestError')
  }
}
w(Ti, 'code', 4001)
const jr = Ti
const Ai = class Ai extends cr {
  constructor(n) {
    super(n, {
      code: Ai.code,
      shortMessage:
        'The requested method and/or account has not been authorized by the user.',
    })
    w(this, 'name', 'UnauthorizedProviderError')
  }
}
w(Ai, 'code', 4100)
const ui = Ai
const Ni = class Ni extends cr {
  constructor(n) {
    super(n, {
      code: Ni.code,
      shortMessage: 'The Provider does not support the requested method.',
    })
    w(this, 'name', 'UnsupportedProviderMethodError')
  }
}
w(Ni, 'code', 4200)
const ci = Ni
const Fi = class Fi extends cr {
  constructor(n) {
    super(n, {
      code: Fi.code,
      shortMessage: 'The Provider is disconnected from all chains.',
    })
    w(this, 'name', 'ProviderDisconnectedError')
  }
}
w(Fi, 'code', 4900)
const di = Fi
const Bi = class Bi extends cr {
  constructor(n) {
    super(n, {
      code: Bi.code,
      shortMessage: 'The Provider is not connected to the requested chain.',
    })
    w(this, 'name', 'ChainDisconnectedError')
  }
}
w(Bi, 'code', 4901)
const fi = Bi
const Ii = class Ii extends cr {
  constructor(n) {
    super(n, {
      code: Ii.code,
      shortMessage: 'An error occurred when attempting to switch chain.',
    })
    w(this, 'name', 'SwitchChainError')
  }
}
w(Ii, 'code', 4902)
const pi = Ii
class ow extends Ie {
  constructor(n) {
    super(n, { shortMessage: 'An unknown RPC error occurred.' })
    w(this, 'name', 'UnknownRpcError')
  }
}
const sw = 3
function co(
  e,
  { abi: t, address: n, args: r, docsPath: o, functionName: s, sender: i },
) {
  const {
      code: a,
      data: l,
      message: u,
      shortMessage: d,
    } = e instanceof Cc
      ? e
      : e instanceof P
        ? e.walk((f) => 'data' in f) || e.walk()
        : {},
    c =
      e instanceof Ji
        ? new nw({ functionName: s })
        : [sw, nr.code].includes(a) && (l || u || d)
          ? new Xl({
              abi: t,
              data: typeof l == 'object' ? l.data : l,
              functionName: s,
              message: d ?? u,
            })
          : e
  return new tw(c, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: o,
    functionName: s,
    sender: i,
  })
}
class iw extends P {
  constructor(
    n,
    {
      account: r,
      docsPath: o,
      chain: s,
      data: i,
      gas: a,
      gasPrice: l,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      nonce: c,
      to: f,
      value: v,
    },
  ) {
    var m
    const g = So({
      from: r == null ? void 0 : r.address,
      to: f,
      value:
        typeof v < 'u' &&
        `${bc(v)} ${
          ((m = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : m.symbol) || 'ETH'
        }`,
      data: i,
      gas: a,
      gasPrice: typeof l < 'u' && `${Be(l)} gwei`,
      maxFeePerGas: typeof u < 'u' && `${Be(u)} gwei`,
      maxPriorityFeePerGas: typeof d < 'u' && `${Be(d)} gwei`,
      nonce: c,
    })
    super(n.shortMessage, {
      cause: n,
      docsPath: o,
      metaMessages: [
        ...(n.metaMessages ? [...n.metaMessages, ' '] : []),
        'Estimate Gas Arguments:',
        g,
      ].filter(Boolean),
    })
    w(this, 'cause')
    w(this, 'name', 'EstimateGasExecutionError')
    this.cause = n
  }
}
class Mn extends P {
  constructor({ cause: n, message: r } = {}) {
    var s
    const o =
      (s = r == null ? void 0 : r.replace('execution reverted: ', '')) == null
        ? void 0
        : s.replace('execution reverted', '')
    super(
      `Execution reverted ${
        o ? `with reason: ${o}` : 'for an unknown reason'
      }.`,
      { cause: n },
    )
    w(this, 'name', 'ExecutionRevertedError')
  }
}
w(Mn, 'code', 3), w(Mn, 'nodeMessage', /execution reverted/)
class kn extends P {
  constructor({ cause: n, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${Be(r)} gwei` : ''
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: n },
    )
    w(this, 'name', 'FeeCapTooHigh')
  }
}
w(
  kn,
  'nodeMessage',
  /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
)
class Yl extends P {
  constructor({ cause: n, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${Be(r)}` : ''
      } gwei) cannot be lower than the block base fee.`,
      { cause: n },
    )
    w(this, 'name', 'FeeCapTooLow')
  }
}
w(
  Yl,
  'nodeMessage',
  /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
)
class Zl extends P {
  constructor({ cause: n, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ''
      }is higher than the next one expected.`,
      { cause: n },
    )
    w(this, 'name', 'NonceTooHighError')
  }
}
w(Zl, 'nodeMessage', /nonce too high/)
class eu extends P {
  constructor({ cause: n, nonce: r } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          r ? `(${r}) ` : ''
        }is lower than the current nonce of the account.`,
        'Try increasing the nonce or find the latest nonce with `getTransactionCount`.',
      ].join(`
`),
      { cause: n },
    )
    w(this, 'name', 'NonceTooLowError')
  }
}
w(eu, 'nodeMessage', /nonce too low|transaction already imported|already known/)
class tu extends P {
  constructor({ cause: n, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ''
      }exceeds the maximum allowed nonce.`,
      { cause: n },
    )
    w(this, 'name', 'NonceMaxValueError')
  }
}
w(tu, 'nodeMessage', /nonce has max value/)
class nu extends P {
  constructor({ cause: n } = {}) {
    super(
      [
        'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.',
      ].join(`
`),
      {
        cause: n,
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
    )
    w(this, 'name', 'InsufficientFundsError')
  }
}
w(nu, 'nodeMessage', /insufficient funds/)
class ru extends P {
  constructor({ cause: n, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ''
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: n },
    )
    w(this, 'name', 'IntrinsicGasTooHighError')
  }
}
w(ru, 'nodeMessage', /intrinsic gas too high|gas limit reached/)
class ou extends P {
  constructor({ cause: n, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ''
      }provided for the transaction is too low.`,
      { cause: n },
    )
    w(this, 'name', 'IntrinsicGasTooLowError')
  }
}
w(ou, 'nodeMessage', /intrinsic gas too low/)
class su extends P {
  constructor({ cause: n }) {
    super('The transaction type is not supported for this chain.', { cause: n })
    w(this, 'name', 'TransactionTypeNotSupportedError')
  }
}
w(su, 'nodeMessage', /transaction type not valid/)
class fo extends P {
  constructor({ cause: n, maxPriorityFeePerGas: r, maxFeePerGas: o } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          r ? ` = ${Be(r)} gwei` : ''
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          o ? ` = ${Be(o)} gwei` : ''
        }).`,
      ].join(`
`),
      { cause: n },
    )
    w(this, 'name', 'TipAboveFeeCapError')
  }
}
w(
  fo,
  'nodeMessage',
  /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
)
class ta extends P {
  constructor({ cause: n }) {
    super(
      `An error occurred while executing: ${
        n == null ? void 0 : n.shortMessage
      }`,
      { cause: n },
    )
    w(this, 'name', 'UnknownNodeError')
  }
}
function Pc(e, t) {
  const n = (e.details || '').toLowerCase(),
    r = e instanceof P ? e.walk((o) => o.code === Mn.code) : e
  return r instanceof P
    ? new Mn({ cause: e, message: r.details })
    : Mn.nodeMessage.test(n)
      ? new Mn({ cause: e, message: e.details })
      : kn.nodeMessage.test(n)
        ? new kn({
            cause: e,
            maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
          })
        : Yl.nodeMessage.test(n)
          ? new Yl({
              cause: e,
              maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
            })
          : Zl.nodeMessage.test(n)
            ? new Zl({ cause: e, nonce: t == null ? void 0 : t.nonce })
            : eu.nodeMessage.test(n)
              ? new eu({ cause: e, nonce: t == null ? void 0 : t.nonce })
              : tu.nodeMessage.test(n)
                ? new tu({ cause: e, nonce: t == null ? void 0 : t.nonce })
                : nu.nodeMessage.test(n)
                  ? new nu({ cause: e })
                  : ru.nodeMessage.test(n)
                    ? new ru({ cause: e, gas: t == null ? void 0 : t.gas })
                    : ou.nodeMessage.test(n)
                      ? new ou({ cause: e, gas: t == null ? void 0 : t.gas })
                      : su.nodeMessage.test(n)
                        ? new su({ cause: e })
                        : fo.nodeMessage.test(n)
                          ? new fo({
                              cause: e,
                              maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
                              maxPriorityFeePerGas:
                                t == null ? void 0 : t.maxPriorityFeePerGas,
                            })
                          : new ta({ cause: e })
}
function aw(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = Pc(e, n)
    return o instanceof ta ? e : o
  })()
  return new iw(r, { docsPath: t, ...n })
}
function Tc(e, { format: t }) {
  if (!t) return {}
  const n = {}
  function r(s) {
    const i = Object.keys(s)
    for (const a of i)
      a in e && (n[a] = e[a]),
        s[a] && typeof s[a] == 'object' && !Array.isArray(s[a]) && r(s[a])
  }
  const o = t(e || {})
  return r(o), n
}
function Ac(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (o) => {
      const s = t(o)
      if (n) for (const i of n) delete s[i]
      return { ...s, ...r(o) }
    },
    type: e,
  })
}
const lw = { legacy: '0x0', eip2930: '0x1', eip1559: '0x2', eip4844: '0x3' }
function na(e) {
  const t = { ...e }
  return (
    typeof e.blobs < 'u' &&
      typeof e.blobs[0] != 'string' &&
      (t.blobs = e.blobs.map((n) => le(n))),
    typeof e.gas < 'u' && (t.gas = _(e.gas)),
    typeof e.gasPrice < 'u' && (t.gasPrice = _(e.gasPrice)),
    typeof e.maxFeePerBlobGas < 'u' &&
      (t.maxFeePerBlobGas = _(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < 'u' && (t.maxFeePerGas = _(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < 'u' &&
      (t.maxPriorityFeePerGas = _(e.maxPriorityFeePerGas)),
    typeof e.nonce < 'u' && (t.nonce = _(e.nonce)),
    typeof e.type < 'u' && (t.type = lw[e.type]),
    typeof e.value < 'u' && (t.value = _(e.value)),
    t
  )
}
function ko(e) {
  const {
      account: t,
      gasPrice: n,
      maxFeePerGas: r,
      maxPriorityFeePerGas: o,
      to: s,
    } = e,
    i = t ? qe(t) : void 0
  if (i && !Se(i.address)) throw new We({ address: i.address })
  if (s && !Se(s)) throw new We({ address: s })
  if (typeof n < 'u' && (typeof r < 'u' || typeof o < 'u')) throw new Kv()
  if (r && r > 2n ** 256n - 1n) throw new kn({ maxFeePerGas: r })
  if (o && r && o > r)
    throw new fo({ maxFeePerGas: r, maxPriorityFeePerGas: o })
}
class uw extends P {
  constructor() {
    super('`baseFeeMultiplier` must be greater than 1.')
    w(this, 'name', 'BaseFeeScalarError')
  }
}
class Nc extends P {
  constructor() {
    super('Chain does not support EIP-1559 fees.')
    w(this, 'name', 'Eip1559FeesNotSupportedError')
  }
}
class cw extends P {
  constructor({ maxPriorityFeePerGas: n }) {
    super(
      `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Be(
        n,
      )} gwei).`,
    )
    w(this, 'name', 'MaxFeePerGasTooLowError')
  }
}
class $h extends P {
  constructor({ blockHash: n, blockNumber: r }) {
    let o = 'Block'
    n && (o = `Block at hash "${n}"`), r && (o = `Block at number "${r}"`)
    super(`${o} could not be found.`)
    w(this, 'name', 'BlockNotFoundError')
  }
}
const Oh = {
  '0x0': 'legacy',
  '0x1': 'eip2930',
  '0x2': 'eip1559',
  '0x3': 'eip4844',
}
function ra(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? Pt(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? Pt(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? Oh[e.type] : void 0,
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
const dw = Ac('transaction', ra)
function Fc(e) {
  var n
  const t =
    (n = e.transactions) == null
      ? void 0
      : n.map((r) => (typeof r == 'string' ? r : ra(r)))
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
const fw = Ac('block', Fc)
async function Yt(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: o } = {},
) {
  var d, c, f
  const s = r ?? 'latest',
    i = o ?? !1,
    a = n !== void 0 ? _(n) : void 0
  let l = null
  if (
    (t
      ? (l = await e.request({ method: 'eth_getBlockByHash', params: [t, i] }))
      : (l = await e.request({
          method: 'eth_getBlockByNumber',
          params: [a || s, i],
        })),
    !l)
  )
    throw new $h({ blockHash: t, blockNumber: n })
  return (
    ((f =
      (c = (d = e.chain) == null ? void 0 : d.formatters) == null
        ? void 0
        : c.block) == null
      ? void 0
      : f.format) || Fc
  )(l)
}
async function Bc(e) {
  const t = await e.request({ method: 'eth_gasPrice' })
  return BigInt(t)
}
async function pw(e, t) {
  return Lh(e, t)
}
async function Lh(e, t) {
  var s, i, a
  const { block: n, chain: r = e.chain, request: o } = t || {}
  if (
    typeof ((s = r == null ? void 0 : r.fees) == null
      ? void 0
      : s.defaultPriorityFee) == 'function'
  ) {
    const l = n || (await R(e, Yt, 'getBlock')({}))
    return r.fees.defaultPriorityFee({ block: l, client: e, request: o })
  }
  if (
    typeof ((i = r == null ? void 0 : r.fees) == null
      ? void 0
      : i.defaultPriorityFee) < 'u'
  )
    return (a = r == null ? void 0 : r.fees) == null
      ? void 0
      : a.defaultPriorityFee
  try {
    const l = await e.request({ method: 'eth_maxPriorityFeePerGas' })
    return ht(l)
  } catch {
    const [l, u] = await Promise.all([
      n ? Promise.resolve(n) : R(e, Yt, 'getBlock')({}),
      R(e, Bc, 'getGasPrice')({}),
    ])
    if (typeof l.baseFeePerGas != 'bigint') throw new Nc()
    const d = u - l.baseFeePerGas
    return d < 0n ? 0n : d
  }
}
async function hw(e, t) {
  return iu(e, t)
}
async function iu(e, t) {
  var f, v
  const {
      block: n,
      chain: r = e.chain,
      request: o,
      type: s = 'eip1559',
    } = t || {},
    i = await (async () => {
      var g, m
      return typeof ((g = r == null ? void 0 : r.fees) == null
        ? void 0
        : g.baseFeeMultiplier) == 'function'
        ? r.fees.baseFeeMultiplier({ block: n, client: e, request: o })
        : ((m = r == null ? void 0 : r.fees) == null
            ? void 0
            : m.baseFeeMultiplier) ?? 1.2
    })()
  if (i < 1) throw new uw()
  const l =
      10 **
      (((f = i.toString().split('.')[1]) == null ? void 0 : f.length) ?? 0),
    u = (g) => (g * BigInt(Math.ceil(i * l))) / BigInt(l),
    d = n || (await R(e, Yt, 'getBlock')({}))
  if (
    typeof ((v = r == null ? void 0 : r.fees) == null
      ? void 0
      : v.estimateFeesPerGas) == 'function'
  )
    return r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: u,
      request: o,
      type: s,
    })
  if (s === 'eip1559') {
    if (typeof d.baseFeePerGas != 'bigint') throw new Nc()
    const g =
        typeof (o == null ? void 0 : o.maxPriorityFeePerGas) == 'bigint'
          ? o.maxPriorityFeePerGas
          : await Lh(e, { block: d, chain: r, request: o }),
      m = u(d.baseFeePerGas)
    return {
      maxFeePerGas: (o == null ? void 0 : o.maxFeePerGas) ?? m + g,
      maxPriorityFeePerGas: g,
    }
  }
  return {
    gasPrice:
      (o == null ? void 0 : o.gasPrice) ?? u(await R(e, Bc, 'getGasPrice')({})),
  }
}
async function Dh(e, { address: t, blockTag: n = 'latest', blockNumber: r }) {
  const o = await e.request({
    method: 'eth_getTransactionCount',
    params: [t, r ? _(r) : n],
  })
  return Pt(o)
}
function Mh(e) {
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
  throw new Xv({ transaction: e })
}
async function bo(e) {
  const t = await e.request({ method: 'eth_chainId' })
  return Pt(t)
}
async function oa(e, t) {
  const {
      account: n = e.account,
      chain: r,
      chainId: o,
      gas: s,
      nonce: i,
      parameters: a = ['chainId', 'fees', 'gas', 'nonce', 'type'],
      type: l,
    } = t,
    u = n ? qe(n) : void 0,
    d = await R(e, Yt, 'getBlock')({ blockTag: 'latest' }),
    c = { ...t, ...(u ? { from: u == null ? void 0 : u.address } : {}) }
  if (
    (a.includes('chainId') &&
      (r
        ? (c.chainId = r.id)
        : typeof o < 'u'
          ? (c.chainId = o)
          : (c.chainId = await R(e, bo, 'getChainId')({}))),
    a.includes('nonce') &&
      typeof i > 'u' &&
      u &&
      (c.nonce = await R(
        e,
        Dh,
        'getTransactionCount',
      )({ address: u.address, blockTag: 'pending' })),
    (a.includes('fees') || a.includes('type')) && typeof l > 'u')
  )
    try {
      c.type = Mh(c)
    } catch {
      c.type = typeof d.baseFeePerGas == 'bigint' ? 'eip1559' : 'legacy'
    }
  if (a.includes('fees'))
    if (c.type === 'eip1559' || c.type === 'eip4844') {
      const { maxFeePerGas: f, maxPriorityFeePerGas: v } = await iu(e, {
        block: d,
        chain: r,
        request: c,
      })
      if (
        typeof t.maxPriorityFeePerGas > 'u' &&
        t.maxFeePerGas &&
        t.maxFeePerGas < v
      )
        throw new cw({ maxPriorityFeePerGas: v })
      ;(c.maxPriorityFeePerGas = v), (c.maxFeePerGas = f)
    } else {
      if (typeof t.maxFeePerGas < 'u' || typeof t.maxPriorityFeePerGas < 'u')
        throw new Nc()
      const { gasPrice: f } = await iu(e, {
        block: d,
        chain: r,
        request: c,
        type: 'legacy',
      })
      c.gasPrice = f
    }
  return (
    a.includes('gas') &&
      typeof s > 'u' &&
      (c.gas = await R(
        e,
        Ic,
        'estimateGas',
      )({
        ...c,
        account: u ? { address: u.address, type: 'json-rpc' } : void 0,
      })),
    ko(c),
    delete c.parameters,
    c
  )
}
async function Ic(e, t) {
  var o, s, i
  const n = t.account ?? e.account,
    r = n ? qe(n) : void 0
  try {
    const {
        accessList: a,
        blobs: l,
        blockNumber: u,
        blockTag: d,
        data: c,
        gas: f,
        gasPrice: v,
        maxFeePerBlobGas: g,
        maxFeePerGas: m,
        maxPriorityFeePerGas: E,
        nonce: p,
        to: h,
        value: y,
        ...x
      } = (r == null ? void 0 : r.type) === 'local' ? await oa(e, t) : t,
      S = (u ? _(u) : void 0) || d
    ko(t)
    const b =
        (i =
          (s = (o = e.chain) == null ? void 0 : o.formatters) == null
            ? void 0
            : s.transactionRequest) == null
          ? void 0
          : i.format,
      B = (b || na)({
        ...Tc(x, { format: b }),
        from: r == null ? void 0 : r.address,
        accessList: a,
        blobs: l,
        data: c,
        gas: f,
        gasPrice: v,
        maxFeePerBlobGas: g,
        maxFeePerGas: m,
        maxPriorityFeePerGas: E,
        nonce: p,
        to: h,
        value: y,
      }),
      I = await e.request({
        method: 'eth_estimateGas',
        params: S ? [B, S] : [B],
      })
    return BigInt(I)
  } catch (a) {
    throw aw(a, { ...t, account: r, chain: e.chain })
  }
}
async function mw(e, t) {
  const { abi: n, address: r, args: o, functionName: s, ...i } = t,
    a = sn({ abi: n, args: o, functionName: s })
  try {
    return await R(e, Ic, 'estimateGas')({ data: a, to: r, ...i })
  } catch (l) {
    const u = i.account ? qe(i.account) : void 0
    throw co(l, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/estimateContractGas',
      functionName: s,
      sender: u == null ? void 0 : u.address,
    })
  }
}
const Cf = '/docs/contract/decodeEventLog'
function Rc(e) {
  const { abi: t, data: n, strict: r, topics: o } = e,
    s = r ?? !0,
    [i, ...a] = o
  if (!i) throw new Ag({ docsPath: Cf })
  const l = t.find((m) => m.type === 'event' && i === vc(Ct(m)))
  if (!(l && 'name' in l) || l.type !== 'event')
    throw new ch(i, { docsPath: Cf })
  const { name: u, inputs: d } = l,
    c = d == null ? void 0 : d.some((m) => !('name' in m && m.name))
  let f = c ? [] : {}
  const v = d.filter((m) => 'indexed' in m && m.indexed)
  for (let m = 0; m < v.length; m++) {
    const E = v[m],
      p = a[m]
    if (!p) throw new Xi({ abiItem: l, param: E })
    f[E.name || m] = yw({ param: E, value: p })
  }
  const g = d.filter((m) => !('indexed' in m && m.indexed))
  if (g.length > 0) {
    if (n && n !== '0x')
      try {
        const m = ea(g, n)
        if (m)
          if (c) f = [...f, ...m]
          else for (let E = 0; E < g.length; E++) f[g[E].name] = m[E]
      } catch (m) {
        if (s)
          throw m instanceof lh || m instanceof Ah
            ? new io({ abiItem: l, data: n, params: g, size: ee(n) })
            : m
      }
    else if (s) throw new io({ abiItem: l, data: '0x', params: g, size: 0 })
  }
  return { eventName: u, args: Object.values(f).length > 0 ? f : void 0 }
}
function yw({ param: e, value: t }) {
  return e.type === 'string' ||
    e.type === 'bytes' ||
    e.type === 'tuple' ||
    e.type.match(/^(.*)\[(\d+)?\]$/)
    ? t
    : (ea([e], t) || [])[0]
}
function _c({ abi: e, eventName: t, logs: n, strict: r = !0 }) {
  return n
    .map((o) => {
      var s
      try {
        const i = Rc({ ...o, abi: e, strict: r })
        return t && !t.includes(i.eventName) ? null : { ...i, ...o }
      } catch (i) {
        let a, l
        if (i instanceof ch) return null
        if (i instanceof io || i instanceof Xi) {
          if (r) return null
          ;(a = i.abiItem.name),
            (l =
              (s = i.abiItem.inputs) == null
                ? void 0
                : s.some((u) => !('name' in u && u.name)))
        }
        return { ...o, args: l ? [] : {}, eventName: a }
      }
    })
    .filter(Boolean)
}
function Zt(e, { args: t, eventName: n } = {}) {
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
async function zc(
  e,
  {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: o,
    event: s,
    events: i,
    args: a,
    strict: l,
  } = {},
) {
  const u = l ?? !1,
    d = i ?? (s ? [s] : void 0)
  let c = []
  d &&
    ((c = [d.flatMap((g) => Eo({ abi: [g], eventName: g.name, args: a }))]),
    s && (c = c[0]))
  let f
  n
    ? (f = await e.request({
        method: 'eth_getLogs',
        params: [{ address: t, topics: c, blockHash: n }],
      }))
    : (f = await e.request({
        method: 'eth_getLogs',
        params: [
          {
            address: t,
            topics: c,
            fromBlock: typeof r == 'bigint' ? _(r) : r,
            toBlock: typeof o == 'bigint' ? _(o) : o,
          },
        ],
      }))
  const v = f.map((g) => Zt(g))
  return d ? _c({ abi: d, logs: v, strict: u }) : v
}
async function Uh(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      blockHash: s,
      eventName: i,
      fromBlock: a,
      toBlock: l,
      strict: u,
    } = t,
    d = i ? xo({ abi: n, name: i }) : void 0,
    c = d ? void 0 : n.filter((f) => f.type === 'event')
  return R(
    e,
    zc,
    'getLogs',
  )({
    address: r,
    args: o,
    blockHash: s,
    event: d,
    events: c,
    fromBlock: a,
    toBlock: l,
    strict: u,
  })
}
const qa = '/docs/contract/decodeFunctionResult'
function dr(e) {
  const { abi: t, args: n, functionName: r, data: o } = e
  let s = t[0]
  if (r) {
    const a = xo({ abi: t, args: n, name: r })
    if (!a) throw new Ys(r, { docsPath: qa })
    s = a
  }
  if (s.type !== 'function') throw new Ys(void 0, { docsPath: qa })
  if (!s.outputs) throw new Ng(s.name, { docsPath: qa })
  const i = ea(s.outputs, o)
  if (i && i.length > 1) return i
  if (i && i.length === 1) return i[0]
}
const gw = 'modulepreload',
  vw = (e) => '/' + e,
  Pf = {},
  ww = (t, n, r) => {
    let o = Promise.resolve()
    if (n && n.length > 0) {
      const s = document.getElementsByTagName('link')
      o = Promise.all(
        n.map((i) => {
          if (((i = vw(i)), i in Pf)) return
          Pf[i] = !0
          const a = i.endsWith('.css'),
            l = a ? '[rel="stylesheet"]' : ''
          if (!!r)
            for (let c = s.length - 1; c >= 0; c--) {
              const f = s[c]
              if (f.href === i && (!a || f.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${i}"]${l}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = a ? 'stylesheet' : gw),
            a || ((d.as = 'script'), (d.crossOrigin = '')),
            (d.href = i),
            document.head.appendChild(d),
            a)
          )
            return new Promise((c, f) => {
              d.addEventListener('load', c),
                d.addEventListener('error', () =>
                  f(new Error(`Unable to preload CSS for ${i}`)),
                )
            })
        }),
      )
    }
    return o
      .then(() => t())
      .catch((s) => {
        const i = new Event('vite:preloadError', { cancelable: !0 })
        if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented))
          throw s
      })
  },
  au = [
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
  jh = [
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
  Hh = [
    ...jh,
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
  xw = [
    ...jh,
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
  Tf = [
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
  Af = [
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
  Ew = [
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
  Sw = '0x82ad56cb'
class lu extends P {
  constructor({ blockNumber: n, chain: r, contract: o }) {
    super(`Chain "${r.name}" does not support contract "${o.name}".`, {
      metaMessages: [
        'This could be due to any of the following:',
        ...(n && o.blockCreated && o.blockCreated > n
          ? [
              `- The contract "${o.name}" was not deployed until block ${o.blockCreated} (current block ${n}).`,
            ]
          : [`- The chain does not have the contract "${o.name}" configured.`]),
      ],
    })
    w(this, 'name', 'ChainDoesNotSupportContract')
  }
}
class kw extends P {
  constructor({ chain: n, currentChainId: r }) {
    super(
      `The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${n.id} – ${n.name}).`,
      {
        metaMessages: [
          `Current Chain ID:  ${r}`,
          `Expected Chain ID: ${n.id} – ${n.name}`,
        ],
      },
    )
    w(this, 'name', 'ChainMismatchError')
  }
}
class bw extends P {
  constructor() {
    super(
      [
        'No chain was provided to the request.',
        'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.',
      ].join(`
`),
    )
    w(this, 'name', 'ChainNotFoundError')
  }
}
class Gh extends P {
  constructor() {
    super('No chain was provided to the Client.')
    w(this, 'name', 'ClientChainNotConfiguredError')
  }
}
class $c extends P {
  constructor({ chainId: n }) {
    super(
      typeof n == 'number'
        ? `Chain ID "${n}" is invalid.`
        : 'Chain ID is invalid.',
    )
    w(this, 'name', 'InvalidChainIdError')
  }
}
function fr({ blockNumber: e, chain: t, contract: n }) {
  var o
  const r = (o = t == null ? void 0 : t.contracts) == null ? void 0 : o[n]
  if (!r) throw new lu({ chain: t, contract: { name: n } })
  if (e && r.blockCreated && r.blockCreated > e)
    throw new lu({
      blockNumber: e,
      chain: t,
      contract: { name: n, blockCreated: r.blockCreated },
    })
  return r.address
}
function Cw(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = Pc(e, n)
    return o instanceof ta ? e : o
  })()
  return new _h(r, { docsPath: t, ...n })
}
const Qa = new Map()
function Vh({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: o }) {
  const s = async () => {
      const d = l()
      i()
      const c = d.map(({ args: f }) => f)
      c.length !== 0 &&
        e(c)
          .then((f) => {
            var v
            o && Array.isArray(f) && f.sort(o)
            for (let g = 0; g < d.length; g++) {
              const { pendingPromise: m } = d[g]
              ;(v = m.resolve) == null || v.call(m, [f[g], f])
            }
          })
          .catch((f) => {
            var v
            for (let g = 0; g < d.length; g++) {
              const { pendingPromise: m } = d[g]
              ;(v = m.reject) == null || v.call(m, f)
            }
          })
    },
    i = () => Qa.delete(t),
    a = () => l().map(({ args: d }) => d),
    l = () => Qa.get(t) || [],
    u = (d) => Qa.set(t, [...l(), d])
  return {
    flush: i,
    async schedule(d) {
      const c = {},
        f = new Promise((m, E) => {
          ;(c.resolve = m), (c.reject = E)
        })
      return (
        (n == null ? void 0 : n([...a(), d])) && s(),
        l().length > 0
          ? (u({ args: d, pendingPromise: c }), f)
          : (u({ args: d, pendingPromise: c }), setTimeout(s, r), f)
      )
    },
  }
}
async function sa(e, t) {
  var x, C, S, b
  const {
      account: n = e.account,
      batch: r = !!((x = e.batch) != null && x.multicall),
      blockNumber: o,
      blockTag: s = 'latest',
      accessList: i,
      blobs: a,
      data: l,
      gas: u,
      gasPrice: d,
      maxFeePerBlobGas: c,
      maxFeePerGas: f,
      maxPriorityFeePerGas: v,
      nonce: g,
      to: m,
      value: E,
      stateOverride: p,
      ...h
    } = t,
    y = n ? qe(n) : void 0
  try {
    ko(t)
    const B = (o ? _(o) : void 0) || s,
      I = Fw(p),
      j =
        (b =
          (S = (C = e.chain) == null ? void 0 : C.formatters) == null
            ? void 0
            : S.transactionRequest) == null
          ? void 0
          : b.format,
      he = (j || na)({
        ...Tc(h, { format: j }),
        from: y == null ? void 0 : y.address,
        accessList: i,
        blobs: a,
        data: l,
        gas: u,
        gasPrice: d,
        maxFeePerBlobGas: c,
        maxFeePerGas: f,
        maxPriorityFeePerGas: v,
        nonce: g,
        to: m,
        value: E,
      })
    if (r && Pw({ request: he }) && !I)
      try {
        return await Tw(e, { ...he, blockNumber: o, blockTag: s })
      } catch (mr) {
        if (!(mr instanceof Gh) && !(mr instanceof lu)) throw mr
      }
    const hr = await e.request({
      method: 'eth_call',
      params: I ? [he, B, I] : [he, B],
    })
    return hr === '0x' ? { data: void 0 } : { data: hr }
  } catch (A) {
    const B = Aw(A),
      { offchainLookup: I, offchainLookupSignature: j } = await ww(
        () => import('./ccip-CeNe6DQ0.js'),
        __vite__mapDeps([]),
      )
    if ((B == null ? void 0 : B.slice(0, 10)) === j && m)
      return { data: await I(e, { data: B, to: m }) }
    throw Cw(A, { ...t, account: y, chain: e.chain })
  }
}
function Pw({ request: e }) {
  const { data: t, to: n, ...r } = e
  return !(
    !t ||
    t.startsWith(Sw) ||
    !n ||
    Object.values(r).filter((o) => typeof o < 'u').length > 0
  )
}
async function Tw(e, t) {
  var m
  const { batchSize: n = 1024, wait: r = 0 } =
      typeof ((m = e.batch) == null ? void 0 : m.multicall) == 'object'
        ? e.batch.multicall
        : {},
    {
      blockNumber: o,
      blockTag: s = 'latest',
      data: i,
      multicallAddress: a,
      to: l,
    } = t
  let u = a
  if (!u) {
    if (!e.chain) throw new Gh()
    u = fr({ blockNumber: o, chain: e.chain, contract: 'multicall3' })
  }
  const c = (o ? _(o) : void 0) || s,
    { schedule: f } = Vh({
      id: `${e.uid}.${c}`,
      wait: r,
      shouldSplitBatch(E) {
        return E.reduce((h, { data: y }) => h + (y.length - 2), 0) > n * 2
      },
      fn: async (E) => {
        const p = E.map((x) => ({
            allowFailure: !0,
            callData: x.data,
            target: x.to,
          })),
          h = sn({ abi: au, args: [p], functionName: 'aggregate3' }),
          y = await e.request({
            method: 'eth_call',
            params: [{ data: h, to: u }, c],
          })
        return dr({
          abi: au,
          args: [p],
          functionName: 'aggregate3',
          data: y || '0x',
        })
      },
    }),
    [{ returnData: v, success: g }] = await f({ data: i, to: l })
  if (!g) throw new Cc({ data: v })
  return v === '0x' ? { data: void 0 } : { data: v }
}
function Aw(e) {
  var n
  if (!(e instanceof P)) return
  const t = e.walk()
  return typeof (t == null ? void 0 : t.data) == 'object'
    ? (n = t.data) == null
      ? void 0
      : n.data
    : t.data
}
function Nf(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new ff({ size: n.length, targetSize: 66, type: 'hex' })
      if (r.length !== 66)
        throw new ff({ size: r.length, targetSize: 66, type: 'hex' })
      return (t[n] = r), t
    }, {})
}
function Nw(e) {
  const { balance: t, nonce: n, state: r, stateDiff: o, code: s } = e,
    i = {}
  if (
    (s !== void 0 && (i.code = s),
    t !== void 0 && (i.balance = _(t, { size: 32 })),
    n !== void 0 && (i.nonce = _(n, { size: 8 })),
    r !== void 0 && (i.state = Nf(r)),
    o !== void 0)
  ) {
    if (i.state) throw new qv()
    i.stateDiff = Nf(o)
  }
  return i
}
function Fw(e) {
  if (!e) return
  const t = {}
  for (const { address: n, ...r } of e) {
    if (!Se(n, { strict: !1 })) throw new We({ address: n })
    if (t[n]) throw new Wv({ address: n })
    t[n] = Nw(r)
  }
  return t
}
async function en(e, t) {
  const { abi: n, address: r, args: o, functionName: s, ...i } = t,
    a = sn({ abi: n, args: o, functionName: s })
  try {
    const { data: l } = await R(e, sa, 'call')({ ...i, data: a, to: r })
    return dr({ abi: n, args: o, functionName: s, data: l || '0x' })
  } catch (l) {
    throw co(l, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/readContract',
      functionName: s,
    })
  }
}
async function Bw(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      dataSuffix: s,
      functionName: i,
      ...a
    } = t,
    l = a.account ? qe(a.account) : e.account,
    u = sn({ abi: n, args: o, functionName: i })
  try {
    const { data: d } = await R(
        e,
        sa,
        'call',
      )({
        batch: !1,
        data: `${u}${s ? s.replace('0x', '') : ''}`,
        to: r,
        ...a,
        account: l,
      }),
      c = dr({ abi: n, args: o, functionName: i, data: d || '0x' }),
      f = n.filter((v) => 'name' in v && v.name === t.functionName)
    return {
      result: c,
      request: {
        abi: f,
        address: r,
        args: o,
        dataSuffix: s,
        functionName: i,
        ...a,
        account: l,
      },
    }
  } catch (d) {
    throw co(d, {
      abi: n,
      address: r,
      args: o,
      docsPath: '/docs/contract/simulateContract',
      functionName: i,
      sender: l == null ? void 0 : l.address,
    })
  }
}
const Ka = new Map(),
  Ff = new Map()
let Iw = 0
function tn(e, t, n) {
  const r = ++Iw,
    o = () => Ka.get(e) || [],
    s = () => {
      const d = o()
      Ka.set(
        e,
        d.filter((c) => c.id !== r),
      )
    },
    i = () => {
      const d = Ff.get(e)
      o().length === 1 && d && d(), s()
    },
    a = o()
  if ((Ka.set(e, [...a, { id: r, fns: t }]), a && a.length > 0)) return i
  const l = {}
  for (const d in t)
    l[d] = (...c) => {
      var v, g
      const f = o()
      if (f.length !== 0)
        for (const m of f) (g = (v = m.fns)[d]) == null || g.call(v, ...c)
    }
  const u = n(l)
  return typeof u == 'function' && Ff.set(e, u), i
}
async function uu(e) {
  return new Promise((t) => setTimeout(t, e))
}
function Co(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let o = !0
  const s = () => (o = !1)
  return (
    (async () => {
      let a
      t && (a = await e({ unpoll: s }))
      const l = (await (n == null ? void 0 : n(a))) ?? r
      await uu(l)
      const u = async () => {
        o && (await e({ unpoll: s }), await uu(r), u())
      }
      u()
    })(),
    s
  )
}
const Rw = new Map(),
  _w = new Map()
function zw(e) {
  const t = (o, s) => ({
      clear: () => s.delete(o),
      get: () => s.get(o),
      set: (i) => s.set(o, i),
    }),
    n = t(e, Rw),
    r = t(e, _w)
  return {
    clear: () => {
      n.clear(), r.clear()
    },
    promise: n,
    response: r,
  }
}
async function $w(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
  const r = zw(t),
    o = r.response.get()
  if (o && n > 0 && new Date().getTime() - o.created.getTime() < n)
    return o.data
  let s = r.promise.get()
  s || ((s = e()), r.promise.set(s))
  try {
    const i = await s
    return r.response.set({ created: new Date(), data: i }), i
  } finally {
    r.promise.clear()
  }
}
const Ow = (e) => `blockNumber.${e}`
async function Po(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await $w(() => e.request({ method: 'eth_blockNumber' }), {
    cacheKey: Ow(e.uid),
    cacheTime: t,
  })
  return BigInt(n)
}
async function ia(e, { filter: t }) {
  const n = 'strict' in t && t.strict,
    r = await t.request({ method: 'eth_getFilterChanges', params: [t.id] })
  if (typeof r[0] == 'string') return r
  const o = r.map((s) => Zt(s))
  return !('abi' in t) || !t.abi ? o : _c({ abi: t.abi, logs: o, strict: n })
}
async function aa(e, { filter: t }) {
  return t.request({ method: 'eth_uninstallFilter', params: [t.id] })
}
function Lw(e, t) {
  const {
    abi: n,
    address: r,
    args: o,
    batch: s = !0,
    eventName: i,
    onError: a,
    onLogs: l,
    poll: u,
    pollingInterval: d = e.pollingInterval,
    strict: c,
  } = t
  return (typeof u < 'u' ? u : e.transport.type !== 'webSocket')
    ? (() => {
        const m = c ?? !1,
          E = fe(['watchContractEvent', r, o, s, e.uid, i, d, m])
        return tn(E, { onLogs: l, onError: a }, (p) => {
          let h,
            y,
            x = !1
          const C = Co(
            async () => {
              var S
              if (!x) {
                try {
                  y = await R(
                    e,
                    Ph,
                    'createContractEventFilter',
                  )({ abi: n, address: r, args: o, eventName: i, strict: m })
                } catch {}
                x = !0
                return
              }
              try {
                let b
                if (y) b = await R(e, ia, 'getFilterChanges')({ filter: y })
                else {
                  const A = await R(e, Po, 'getBlockNumber')({})
                  h && h !== A
                    ? (b = await R(
                        e,
                        Uh,
                        'getContractEvents',
                      )({
                        abi: n,
                        address: r,
                        args: o,
                        eventName: i,
                        fromBlock: h + 1n,
                        toBlock: A,
                        strict: m,
                      }))
                    : (b = []),
                    (h = A)
                }
                if (b.length === 0) return
                if (s) p.onLogs(b)
                else for (const A of b) p.onLogs([A])
              } catch (b) {
                y && b instanceof rr && (x = !1),
                  (S = p.onError) == null || S.call(p, b)
              }
            },
            { emitOnBegin: !0, interval: d },
          )
          return async () => {
            y && (await R(e, aa, 'uninstallFilter')({ filter: y })), C()
          }
        })
      })()
    : (() => {
        const m = c ?? !1,
          E = fe(['watchContractEvent', r, o, s, e.uid, i, d, m])
        let p = !0,
          h = () => (p = !1)
        return tn(
          E,
          { onLogs: l, onError: a },
          (y) => (
            (async () => {
              try {
                const x = i ? Eo({ abi: n, eventName: i, args: o }) : [],
                  { unsubscribe: C } = await e.transport.subscribe({
                    params: ['logs', { address: r, topics: x }],
                    onData(S) {
                      var A
                      if (!p) return
                      const b = S.result
                      try {
                        const { eventName: B, args: I } = Rc({
                            abi: n,
                            data: b.data,
                            topics: b.topics,
                            strict: c,
                          }),
                          j = Zt(b, { args: I, eventName: B })
                        y.onLogs([j])
                      } catch (B) {
                        let I, j
                        if (B instanceof io || B instanceof Xi) {
                          if (c) return
                          ;(I = B.abiItem.name),
                            (j =
                              (A = B.abiItem.inputs) == null
                                ? void 0
                                : A.some((he) => !('name' in he && he.name)))
                        }
                        const we = Zt(b, { args: j ? [] : {}, eventName: I })
                        y.onLogs([we])
                      }
                    },
                    onError(S) {
                      var b
                      ;(b = y.onError) == null || b.call(y, S)
                    },
                  })
                ;(h = C), p || h()
              } catch (x) {
                a == null || a(x)
              }
            })(),
            () => h()
          ),
        )
      })()
}
function Wh(e, t) {
  return () => e.apply(t, arguments)
}
const { toString: Dw } = Object.prototype,
  { getPrototypeOf: Oc } = Object,
  la = ((e) => (t) => {
    const n = Dw.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  ct = (e) => ((e = e.toLowerCase()), (t) => la(t) === e),
  ua = (e) => (t) => typeof t === e,
  { isArray: pr } = Array,
  po = ua('undefined')
function Mw(e) {
  return (
    e !== null &&
    !po(e) &&
    e.constructor !== null &&
    !po(e.constructor) &&
    He(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const qh = ct('ArrayBuffer')
function Uw(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && qh(e.buffer)),
    t
  )
}
const jw = ua('string'),
  He = ua('function'),
  Qh = ua('number'),
  ca = (e) => e !== null && typeof e == 'object',
  Hw = (e) => e === !0 || e === !1,
  bs = (e) => {
    if (la(e) !== 'object') return !1
    const t = Oc(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Gw = ct('Date'),
  Vw = ct('File'),
  Ww = ct('Blob'),
  qw = ct('FileList'),
  Qw = (e) => ca(e) && He(e.pipe),
  Kw = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (He(e.append) &&
          ((t = la(e)) === 'formdata' ||
            (t === 'object' &&
              He(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  Jw = ct('URLSearchParams'),
  Xw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function To(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), pr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length
    let a
    for (r = 0; r < i; r++) (a = s[r]), t.call(null, e[a], a, e)
  }
}
function Kh(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  while (r-- > 0) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Jh =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Xh = (e) => !po(e) && e !== Jh
function cu() {
  const { caseless: e } = (Xh(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && Kh(t, o)) || o
      bs(t[s]) && bs(r)
        ? (t[s] = cu(t[s], r))
        : bs(r)
          ? (t[s] = cu({}, r))
          : pr(r)
            ? (t[s] = r.slice())
            : (t[s] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && To(arguments[r], n)
  return t
}
const Yw = (e, t, n, { allOwnKeys: r } = {}) => (
    To(
      t,
      (o, s) => {
        n && He(o) ? (e[s] = Wh(o, n)) : (e[s] = o)
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Zw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  e2 = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  t2 = (e, t, n, r) => {
    let o, s, i
    const a = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0))
      e = n !== !1 && Oc(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  n2 = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  r2 = (e) => {
    if (!e) return null
    if (pr(e)) return e
    let t = e.length
    if (!Qh(t)) return null
    const n = new Array(t)
    while (t-- > 0) n[t] = e[t]
    return n
  },
  o2 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Oc(Uint8Array)),
  s2 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    while ((o = r.next()) && !o.done) {
      const s = o.value
      t.call(e, s[0], s[1])
    }
  },
  i2 = (e, t) => {
    let n
    const r = []
    while ((n = e.exec(t)) !== null) r.push(n)
    return r
  },
  a2 = ct('HTMLFormElement'),
  l2 = (e) =>
    e
      .toLowerCase()
      .replace(/[-_\s]([a-z\d])(\w*)/g, (n, r, o) => r.toUpperCase() + o),
  Bf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  u2 = ct('RegExp'),
  Yh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    To(n, (o, s) => {
      let i
      ;(i = t(o, s, e)) !== !1 && (r[s] = i || o)
    }),
      Object.defineProperties(e, r)
  },
  c2 = (e) => {
    Yh(e, (t, n) => {
      if (He(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (He(r)) {
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
  d2 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0
        })
      }
    return pr(e) ? r(e) : r(String(e).split(t)), n
  },
  f2 = () => {},
  p2 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ja = 'abcdefghijklmnopqrstuvwxyz',
  If = '0123456789',
  Zh = { DIGIT: If, ALPHA: Ja, ALPHA_DIGIT: Ja + Ja.toUpperCase() + If },
  h2 = (e = 16, t = Zh.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    while (e--) n += t[(Math.random() * r) | 0]
    return n
  }
function m2(e) {
  return !!(
    e &&
    He(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const y2 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ca(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const s = pr(r) ? [] : {}
            return (
              To(r, (i, a) => {
                const l = n(i, o + 1)
                !po(l) && (s[a] = l)
              }),
              (t[o] = void 0),
              s
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  g2 = ct('AsyncFunction'),
  v2 = (e) => e && (ca(e) || He(e)) && He(e.then) && He(e.catch),
  k = {
    isArray: pr,
    isArrayBuffer: qh,
    isBuffer: Mw,
    isFormData: Kw,
    isArrayBufferView: Uw,
    isString: jw,
    isNumber: Qh,
    isBoolean: Hw,
    isObject: ca,
    isPlainObject: bs,
    isUndefined: po,
    isDate: Gw,
    isFile: Vw,
    isBlob: Ww,
    isRegExp: u2,
    isFunction: He,
    isStream: Qw,
    isURLSearchParams: Jw,
    isTypedArray: o2,
    isFileList: qw,
    forEach: To,
    merge: cu,
    extend: Yw,
    trim: Xw,
    stripBOM: Zw,
    inherits: e2,
    toFlatObject: t2,
    kindOf: la,
    kindOfTest: ct,
    endsWith: n2,
    toArray: r2,
    forEachEntry: s2,
    matchAll: i2,
    isHTMLForm: a2,
    hasOwnProperty: Bf,
    hasOwnProp: Bf,
    reduceDescriptors: Yh,
    freezeMethods: c2,
    toObjectSet: d2,
    toCamelCase: l2,
    noop: f2,
    toFiniteNumber: p2,
    findKey: Kh,
    global: Jh,
    isContextDefined: Xh,
    ALPHABET: Zh,
    generateString: h2,
    isSpecCompliantForm: m2,
    toJSONObject: y2,
    isAsyncFn: g2,
    isThenable: v2,
  }
function D(e, t, n, r, o) {
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
k.inherits(D, Error, {
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
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const em = D.prototype,
  tm = {}
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
  tm[e] = { value: e }
})
Object.defineProperties(D, tm)
Object.defineProperty(em, 'isAxiosError', { value: !0 })
D.from = (e, t, n, r, o, s) => {
  const i = Object.create(em)
  return (
    k.toFlatObject(
      e,
      i,
      (l) => l !== Error.prototype,
      (a) => a !== 'isAxiosError',
    ),
    D.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  )
}
const w2 = null
function du(e) {
  return k.isPlainObject(e) || k.isArray(e)
}
function nm(e) {
  return k.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Rf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map((o, s) => ((o = nm(o)), !n && s ? '[' + o + ']' : o))
        .join(n ? '.' : '')
    : t
}
function x2(e) {
  return k.isArray(e) && !e.some(du)
}
const E2 = k.toFlatObject(k, {}, null, (t) => /^is[A-Z]/.test(t))
function da(e, t, n) {
  if (!k.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      (m, E) => !k.isUndefined(E[m]),
    ))
  const r = n.metaTokens,
    o = n.visitor || d,
    s = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && k.isSpecCompliantForm(t)
  if (!k.isFunction(o)) throw new TypeError('visitor must be a function')
  function u(g) {
    if (g === null) return ''
    if (k.isDate(g)) return g.toISOString()
    if (!l && k.isBlob(g))
      throw new D('Blob is not supported. Use a Buffer instead.')
    return k.isArrayBuffer(g) || k.isTypedArray(g)
      ? l && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g
  }
  function d(g, m, E) {
    let p = g
    if (g && !E && typeof g == 'object') {
      if (k.endsWith(m, '{}'))
        (m = r ? m : m.slice(0, -2)), (g = JSON.stringify(g))
      else if (
        (k.isArray(g) && x2(g)) ||
        ((k.isFileList(g) || k.endsWith(m, '[]')) && (p = k.toArray(g)))
      )
        return (
          (m = nm(m)),
          p.forEach((y, x) => {
            !(k.isUndefined(y) || y === null) &&
              t.append(
                i === !0 ? Rf([m], x, s) : i === null ? m : m + '[]',
                u(y),
              )
          }),
          !1
        )
    }
    return du(g) ? !0 : (t.append(Rf(E, m, s), u(g)), !1)
  }
  const c = [],
    f = Object.assign(E2, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: du,
    })
  function v(g, m) {
    if (!k.isUndefined(g)) {
      if (c.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + m.join('.'))
      c.push(g),
        k.forEach(g, (p, h) => {
          ;(!(k.isUndefined(p) || p === null) &&
            o.call(t, p, k.isString(h) ? h.trim() : h, m, f)) === !0 &&
            v(p, m ? m.concat(h) : [h])
        }),
        c.pop()
    }
  }
  if (!k.isObject(e)) throw new TypeError('data must be an object')
  return v(e), t
}
function _f(e) {
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
function Lc(e, t) {
  ;(this._pairs = []), e && da(e, this, t)
}
const rm = Lc.prototype
rm.append = function (t, n) {
  this._pairs.push([t, n])
}
rm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, _f)
      }
    : _f
  return this._pairs.map((o) => n(o[0]) + '=' + n(o[1]), '').join('&')
}
function S2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function om(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || S2,
    o = n && n.serialize
  let s
  if (
    (o
      ? (s = o(t, n))
      : (s = k.isURLSearchParams(t) ? t.toString() : new Lc(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + s)
  }
  return e
}
class zf {
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
    k.forEach(this.handlers, (r) => {
      r !== null && t(r)
    })
  }
}
const sm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  k2 = typeof URLSearchParams < 'u' ? URLSearchParams : Lc,
  b2 = typeof FormData < 'u' ? FormData : null,
  C2 = typeof Blob < 'u' ? Blob : null,
  P2 = {
    isBrowser: !0,
    classes: { URLSearchParams: k2, FormData: b2, Blob: C2 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  im = typeof window < 'u' && typeof document < 'u',
  T2 = ((e) => im && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  A2 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  N2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: im,
        hasStandardBrowserEnv: T2,
        hasStandardBrowserWebWorkerEnv: A2,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  it = { ...N2, ...P2 }
function F2(e, t) {
  return da(
    e,
    new it.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return it.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : s.defaultVisitor.apply(this, arguments)
        },
      },
      t,
    ),
  )
}
function B2(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function I2(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let s
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s])
  return t
}
function am(e) {
  function t(n, r, o, s) {
    let i = n[s++]
    if (i === '__proto__') return !0
    const a = Number.isFinite(+i),
      l = s >= n.length
    return (
      (i = !i && k.isArray(o) ? o.length : i),
      l
        ? (k.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !k.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && k.isArray(o[i]) && (o[i] = I2(o[i])),
          !a)
    )
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {}
    return (
      k.forEachEntry(e, (r, o) => {
        t(B2(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function R2(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const Dc = {
  transitional: sm,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        s = k.isObject(t)
      if ((s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return o ? JSON.stringify(am(t)) : t
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t)
      )
        return t
      if (k.isArrayBufferView(t)) return t.buffer
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        )
      let a
      if (s) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return F2(t, this.formSerializer).toString()
        if ((a = k.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData
          return da(a ? { 'files[]': t } : t, l && new l(), this.formSerializer)
        }
      }
      return s || o ? (n.setContentType('application/json', !1), R2(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Dc.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && k.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (a) {
          if (i)
            throw a.name === 'SyntaxError'
              ? D.from(a, D.ERR_BAD_RESPONSE, this, null, this.response)
              : a
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
  env: { FormData: it.classes.FormData, Blob: it.classes.Blob },
  validateStatus: (t) => t >= 200 && t < 300,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
}
k.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Dc.headers[e] = {}
})
const Mc = Dc,
  _2 = k.toObjectSet([
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
  z2 = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(`
`)
          .forEach((i) => {
            ;(o = i.indexOf(':')),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && _2[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  $f = Symbol('internals')
function Pr(e) {
  return e && String(e).trim().toLowerCase()
}
function Cs(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Cs) : String(e)
}
function $2(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  while ((r = n.exec(e))) t[r[1]] = r[2]
  return t
}
const O2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Xa(e, t, n, r, o) {
  if (k.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1
    if (k.isRegExp(r)) return r.test(t)
  }
}
function L2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function D2(e, t) {
  const n = k.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i)
      },
      configurable: !0,
    })
  })
}
class fa {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function s(a, l, u) {
      const d = Pr(l)
      if (!d) throw new Error('header name must be a non-empty string')
      const c = k.findKey(o, d)
      ;(!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || l] = Cs(a))
    }
    const i = (a, l) => k.forEach(a, (u, d) => s(u, d, l))
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : k.isString(t) && (t = t.trim()) && !O2(t)
          ? i(z2(t), n)
          : t != null && s(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = Pr(t)), t)) {
      const r = k.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return $2(o)
        if (k.isFunction(n)) return n.call(this, o, r)
        if (k.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Pr(t)), t)) {
      const r = k.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Xa(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function s(i) {
      if (((i = Pr(i)), i)) {
        const a = k.findKey(r, i)
        a && (!n || Xa(r, r[a], a, n)) && (delete r[a], (o = !0))
      }
    }
    return k.isArray(t) ? t.forEach(s) : s(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    while (r--) {
      const s = n[r]
      ;(!t || Xa(this, this[s], s, t, !0)) && (delete this[s], (o = !0))
    }
    return o
  }
  normalize(t) {
    const r = {}
    return (
      k.forEach(this, (o, s) => {
        const i = k.findKey(r, s)
        if (i) {
          ;(this[i] = Cs(o)), delete this[s]
          return
        }
        const a = t ? L2(s) : String(s).trim()
        a !== s && delete this[s], (this[a] = Cs(o)), (r[a] = !0)
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
      k.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(', ') : r)
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
    const r = (this[$f] = this[$f] = { accessors: {} }).accessors,
      o = this.prototype
    function s(i) {
      const a = Pr(i)
      r[a] || (D2(o, i), (r[a] = !0))
    }
    return k.isArray(t) ? t.forEach(s) : s(t), this
  }
}
fa.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
k.reduceDescriptors(fa.prototype, ({ value: e }, t) => {
  const n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    },
  }
})
k.freezeMethods(fa)
const xt = fa
function Ya(e, t) {
  const n = this || Mc,
    r = t || n,
    o = xt.from(r.headers)
  let s = r.data
  return (
    k.forEach(e, (a) => {
      s = a.call(n, s, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    s
  )
}
function lm(e) {
  return !!(e && e.__CANCEL__)
}
function Ao(e, t, n) {
  D.call(this, e ?? 'canceled', D.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
k.inherits(Ao, D, { __CANCEL__: !0 })
function M2(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new D(
          'Request failed with status code ' + n.status,
          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      )
}
const U2 = it.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, s) {
        const i = [e + '=' + encodeURIComponent(t)]
        k.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
          k.isString(r) && i.push('path=' + r),
          k.isString(o) && i.push('domain=' + o),
          s === !0 && i.push('secure'),
          (document.cookie = i.join('; '))
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
function j2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function H2(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function um(e, t) {
  return e && !j2(t) ? H2(e, t) : t
}
const G2 = it.hasStandardBrowserEnv
  ? (() => {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(s) {
        let i = s
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
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
        (i) => {
          const a = k.isString(i) ? o(i) : i
          return a.protocol === r.protocol && a.host === r.host
        }
      )
    })()
  : (
      () => () =>
        !0
    )()
function V2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function W2(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    s = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    (l) => {
      const u = Date.now(),
        d = r[s]
      i || (i = u), (n[o] = l), (r[o] = u)
      let c = s,
        f = 0
      while (c !== o) (f += n[c++]), (c = c % e)
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - i < t)) return
      const v = d && u - d
      return v ? Math.round((f * 1e3) / v) : void 0
    }
  )
}
function Of(e, t) {
  let n = 0
  const r = W2(50, 250)
  return (o) => {
    const s = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = s - n,
      l = r(a),
      u = s <= i
    n = s
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && i && u ? (i - s) / l : void 0,
      event: o,
    }
    ;(d[t ? 'download' : 'upload'] = !0), e(d)
  }
}
const q2 = typeof XMLHttpRequest < 'u',
  Q2 =
    q2 &&
    ((e) =>
      new Promise((n, r) => {
        const o = e.data
        const s = xt.from(e.headers).normalize()
        let { responseType: i, withXSRFToken: a } = e,
          l
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener('abort', l)
        }
        let d
        if (k.isFormData(o)) {
          if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1)
          else if ((d = s.getContentType()) !== !1) {
            const [m, ...E] = d
              ? d
                  .split(';')
                  .map((p) => p.trim())
                  .filter(Boolean)
              : []
            s.setContentType([m || 'multipart/form-data', ...E].join('; '))
          }
        }
        let c = new XMLHttpRequest()
        if (e.auth) {
          const m = e.auth.username || '',
            E = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          s.set('Authorization', 'Basic ' + btoa(m + ':' + E))
        }
        const f = um(e.baseURL, e.url)
        c.open(e.method.toUpperCase(), om(f, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout)
        function v() {
          if (!c) return
          const m = xt.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
            ),
            p = {
              data:
                !i || i === 'text' || i === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: m,
              config: e,
              request: c,
            }
          M2(
            (y) => {
              n(y), u()
            },
            (y) => {
              r(y), u()
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
            c && (r(new D('Request aborted', D.ECONNABORTED, e, c)), (c = null))
          }),
          (c.onerror = () => {
            r(new D('Network Error', D.ERR_NETWORK, e, c)), (c = null)
          }),
          (c.ontimeout = () => {
            let E = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const p = e.transitional || sm
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
              r(
                new D(
                  E,
                  p.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                  e,
                  c,
                ),
              ),
              (c = null)
          }),
          it.hasStandardBrowserEnv &&
            (a && k.isFunction(a) && (a = a(e)), a || (a !== !1 && G2(f))))
        ) {
          const m =
            e.xsrfHeaderName && e.xsrfCookieName && U2.read(e.xsrfCookieName)
          m && s.set(e.xsrfHeaderName, m)
        }
        o === void 0 && s.setContentType(null),
          'setRequestHeader' in c &&
            k.forEach(s.toJSON(), (E, p) => {
              c.setRequestHeader(p, E)
            }),
          k.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            c.addEventListener('progress', Of(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', Of(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (m) => {
              c &&
                (r(!m || m.type ? new Ao(null, e, c) : m),
                c.abort(),
                (c = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener('abort', l)))
        const g = V2(f)
        if (g && it.protocols.indexOf(g) === -1) {
          r(new D('Unsupported protocol ' + g + ':', D.ERR_BAD_REQUEST, e))
          return
        }
        c.send(o || null)
      })),
  fu = { http: w2, xhr: Q2 }
k.forEach(fu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Lf = (e) => `- ${e}`,
  K2 = (e) => k.isFunction(e) || e === null || e === !1,
  cm = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let s = 0; s < t; s++) {
        n = e[s]
        let i
        if (
          ((r = n),
          !K2(n) && ((r = fu[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new D(`Unknown adapter '${i}'`)
        if (r) break
        o[i || '#' + s] = r
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        )
        const i = t
          ? s.length > 1
            ? `since :
` +
              s.map(Lf).join(`
`)
            : ' ' + Lf(s[0])
          : 'as no adapter specified'
        throw new D(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT',
        )
      }
      return r
    },
    adapters: fu,
  }
function Za(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ao(null, e)
}
function Df(e) {
  return (
    Za(e),
    (e.headers = xt.from(e.headers)),
    (e.data = Ya.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    cm
      .getAdapter(e.adapter || Mc.adapter)(e)
      .then(
        (r) => (
          Za(e),
          (r.data = Ya.call(e, e.transformResponse, r)),
          (r.headers = xt.from(r.headers)),
          r
        ),
        (r) => (
          lm(r) ||
            (Za(e),
            r &&
              r.response &&
              ((r.response.data = Ya.call(e, e.transformResponse, r.response)),
              (r.response.headers = xt.from(r.response.headers)))),
          Promise.reject(r)
        ),
      )
  )
}
const Mf = (e) => (e instanceof xt ? { ...e } : e)
function or(e, t) {
  t = t || {}
  const n = {}
  function r(u, d, c) {
    return k.isPlainObject(u) && k.isPlainObject(d)
      ? k.merge.call({ caseless: c }, u, d)
      : k.isPlainObject(d)
        ? k.merge({}, d)
        : k.isArray(d)
          ? d.slice()
          : d
  }
  function o(u, d, c) {
    if (k.isUndefined(d)) {
      if (!k.isUndefined(u)) return r(void 0, u, c)
    } else return r(u, d, c)
  }
  function s(u, d) {
    if (!k.isUndefined(d)) return r(void 0, d)
  }
  function i(u, d) {
    if (k.isUndefined(d)) {
      if (!k.isUndefined(u)) return r(void 0, u)
    } else return r(void 0, d)
  }
  function a(u, d, c) {
    if (c in t) return r(u, d)
    if (c in e) return r(void 0, u)
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, d) => o(Mf(u), Mf(d), !0),
  }
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), (d) => {
      const c = l[d] || o,
        f = c(e[d], t[d], d)
      ;(k.isUndefined(f) && c !== a) || (n[d] = f)
    }),
    n
  )
}
const dm = '1.6.8',
  Uc = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Uc[e] = (r) => typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  },
)
const Uf = {}
Uc.transitional = (t, n, r) => {
  function o(s, i) {
    return (
      '[Axios v' +
      dm +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? '. ' + r : '')
    )
  }
  return (s, i, a) => {
    if (t === !1)
      throw new D(
        o(i, ' has been removed' + (n ? ' in ' + n : '')),
        D.ERR_DEPRECATED,
      )
    return (
      n &&
        !Uf[i] &&
        ((Uf[i] = !0),
        console.warn(
          o(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(s, i, a) : !0
    )
  }
}
function J2(e, t, n) {
  if (typeof e != 'object')
    throw new D('options must be an object', D.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  while (o-- > 0) {
    const s = r[o],
      i = t[s]
    if (i) {
      const a = e[s],
        l = a === void 0 || i(a, s, e)
      if (l !== !0)
        throw new D('option ' + s + ' must be ' + l, D.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new D('Unknown option ' + s, D.ERR_BAD_OPTION)
  }
}
const pu = { assertOptions: J2, validators: Uc },
  Ft = pu.validators
class hi {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new zf(), response: new zf() })
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
        const s = o.stack ? o.stack.replace(/^.+\n/, '') : ''
        r.stack
          ? s &&
            !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + s)
          : (r.stack = s)
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = or(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: s } = n
    r !== void 0 &&
      pu.assertOptions(
        r,
        {
          silentJSONParsing: Ft.transitional(Ft.boolean),
          forcedJSONParsing: Ft.transitional(Ft.boolean),
          clarifyTimeoutError: Ft.transitional(Ft.boolean),
        },
        !1,
      ),
      o != null &&
        (k.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : pu.assertOptions(
              o,
              { encode: Ft.function, serialize: Ft.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    const i = s && k.merge(s.common, s[n.method])
    s &&
      k.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (g) => {
          delete s[g]
        },
      ),
      (n.headers = xt.concat(i, s))
    const a = []
    let l = !0
    this.interceptors.request.forEach((m) => {
      ;(typeof m.runWhen == 'function' && m.runWhen(n) === !1) ||
        ((l = l && m.synchronous), a.unshift(m.fulfilled, m.rejected))
    })
    const u = []
    this.interceptors.response.forEach((m) => {
      u.push(m.fulfilled, m.rejected)
    })
    let d,
      c = 0,
      f
    if (!l) {
      const g = [Df.bind(this), void 0]
      for (
        g.unshift.apply(g, a),
          g.push.apply(g, u),
          f = g.length,
          d = Promise.resolve(n);
        c < f;
      )
        d = d.then(g[c++], g[c++])
      return d
    }
    f = a.length
    let v = n
    for (c = 0; c < f; ) {
      const g = a[c++],
        m = a[c++]
      try {
        v = g(v)
      } catch (E) {
        m.call(this, E)
        break
      }
    }
    try {
      d = Df.call(this, v)
    } catch (g) {
      return Promise.reject(g)
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++])
    return d
  }
  getUri(t) {
    t = or(this.defaults, t)
    const n = um(t.baseURL, t.url)
    return om(n, t.params, t.paramsSerializer)
  }
}
k.forEach(['delete', 'get', 'head', 'options'], (t) => {
  hi.prototype[t] = function (n, r) {
    return this.request(
      or(r || {}, { method: t, url: n, data: (r || {}).data }),
    )
  }
})
k.forEach(['post', 'put', 'patch'], (t) => {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        or(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: s,
          data: i,
        }),
      )
    }
  }
  ;(hi.prototype[t] = n()), (hi.prototype[t + 'Form'] = n(!0))
})
const Ps = hi
class jc {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise((s) => {
      n = s
    })
    this.promise.then((o) => {
      if (!this._listeners) return
      let s = this._listeners.length
      while (s-- > 0) this._listeners[s](o)
      this._listeners = null
    }),
      (this.promise.then = (o) => {
        let s
        const i = new Promise((a) => {
          this.subscribe(a), (s = a)
        }).then(o)
        return (
          (i.cancel = () => {
            this.unsubscribe(s)
          }),
          i
        )
      }),
      t((s, i, a) => {
        this.reason || ((this.reason = new Ao(s, i, a)), n(this.reason))
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
      token: new jc((o) => {
        t = o
      }),
      cancel: t,
    }
  }
}
const X2 = jc
function Y2(e) {
  return (n) => e.apply(null, n)
}
function Z2(e) {
  return k.isObject(e) && e.isAxiosError === !0
}
const hu = {
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
Object.entries(hu).forEach(([e, t]) => {
  hu[t] = e
})
const ex = hu
function fm(e) {
  const t = new Ps(e),
    n = Wh(Ps.prototype.request, t)
  return (
    k.extend(n, Ps.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = (o) => fm(or(e, o))),
    n
  )
}
const ne = fm(Mc)
ne.Axios = Ps
ne.CanceledError = Ao
ne.CancelToken = X2
ne.isCancel = lm
ne.VERSION = dm
ne.toFormData = da
ne.AxiosError = D
ne.Cancel = ne.CanceledError
ne.all = (t) => Promise.all(t)
ne.spread = Y2
ne.isAxiosError = Z2
ne.mergeConfig = or
ne.AxiosHeaders = xt
ne.formToJSON = (e) => am(k.isHTMLForm(e) ? new FormData(e) : e)
ne.getAdapter = cm.getAdapter
ne.HttpStatusCode = ex
ne.default = ne
class tx extends P {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3ConnectionError')
  }
}
class nx extends P {
  constructor(t, n) {
    super(t, n), (this.name = 'Shield3PolicyViolationError')
  }
}
var rx = { BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }
function ox(e) {
  const t = e.data.result.transaction.workflow_results.policyResults
    .filter(
      (n) =>
        n.policyDecision.toLowerCase() === 'block' ||
        n.policyDecision.toLowerCase() === 'mfa',
    )
    .map((n) => n.name)
  return JSON.stringify(t)
}
async function sx(e, t, n) {
  const r = rx.local.VITE_SHIELD3_API_KEY,
    o = JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_simulateTransaction',
      params: [e, t],
      id: 42,
    }),
    s = {
      method: 'post',
      url: `https://rpc.shield3.com/v3/0x${n}/rpc?apiKey=${r}`,
      headers: { 'Content-Type': 'application/json' },
      data: o,
    }
  try {
    const i = await ne(s)
    if (i.status !== 200)
      throw new tx('Could not connect to Shield3', { response: i.data })
    if (i.data.result.decision !== 'Allow')
      throw new nx(`Policy violation(s): ${ox(i)}`)
    return i
  } catch (i) {
    throw (console.error(i), i)
  }
}
async function mu(e) {
  let t
  return (
    e.Type !== 'string' ? (t = Dm(e)) : (t = e),
    await sx(t, e.from.toString(), e.chainId.toString(16))
  )
}
class pa extends P {
  constructor({ docsPath: n } = {}) {
    super(
      [
        'Could not find an Account to execute with this Action.',
        'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.',
      ].join(`
`),
      { docsPath: n, docsSlug: 'account' },
    )
    w(this, 'name', 'AccountNotFoundError')
  }
}
function pm({ chain: e, currentChainId: t }) {
  if (!e) throw new bw()
  if (t !== e.id) throw new kw({ chain: e, currentChainId: t })
}
function ix(e, { docsPath: t, ...n }) {
  const r = (() => {
    const o = Pc(e, n)
    return o instanceof ta ? e : o
  })()
  return new Zv(r, { docsPath: t, ...n })
}
async function Hc(e, { serializedTransaction: t }) {
  return (
    mu(t),
    e.request(
      { method: 'eth_sendRawTransaction', params: [t] },
      { retryCount: 0 },
    )
  )
}
async function Gc(e, t) {
  var h, y, x, C
  const {
    account: n = e.account,
    chain: r = e.chain,
    accessList: o,
    blobs: s,
    data: i,
    gas: a,
    gasPrice: l,
    maxFeePerBlobGas: u,
    maxFeePerGas: d,
    maxPriorityFeePerGas: c,
    nonce: f,
    to: v,
    value: g,
    ...m
  } = t
  if (!n) throw new pa({ docsPath: '/docs/actions/wallet/sendTransaction' })
  const E = qe(n)
  async function p() {
    let S
    return (
      r !== null &&
        ((S = await R(e, bo, 'getChainId')({})),
        pm({ currentChainId: S, chain: r })),
      await R(
        e,
        oa,
        'prepareTransactionRequest',
      )({
        account: E,
        accessList: o,
        blobs: s,
        chain: r,
        chainId: S,
        data: i,
        gas: a,
        gasPrice: l,
        maxFeePerBlobGas: u,
        maxFeePerGas: d,
        maxPriorityFeePerGas: c,
        nonce: f,
        to: v,
        value: g,
        ...m,
      })
    )
  }
  try {
    if ((ko(t), E.type === 'local')) {
      const I = await p()
      await mu(p)
      const j =
          (h = r == null ? void 0 : r.serializers) == null
            ? void 0
            : h.transaction,
        we = await E.signTransaction(I, { serializer: j })
      return await R(e, Hc, 'sendRawTransaction')({ serializedTransaction: we })
    }
    const S =
        (C =
          (x = (y = e.chain) == null ? void 0 : y.formatters) == null
            ? void 0
            : x.transactionRequest) == null
          ? void 0
          : C.format,
      A = (S || na)({
        ...Tc(m, { format: S }),
        accessList: o,
        blobs: s,
        data: i,
        from: E.address,
        gas: a,
        gasPrice: l,
        maxFeePerBlobGas: u,
        maxFeePerGas: d,
        maxPriorityFeePerGas: c,
        nonce: f,
        to: v,
        value: g,
      }),
      B = await p()
    return (
      await mu(B),
      await e.request(
        { method: 'eth_sendTransaction', params: [A] },
        { retryCount: 0 },
      )
    )
  } catch (S) {
    throw ix(S, { ...t, account: E, chain: t.chain || void 0 })
  }
}
async function ax(e, t) {
  const {
      abi: n,
      address: r,
      args: o,
      dataSuffix: s,
      functionName: i,
      ...a
    } = t,
    l = sn({ abi: n, args: o, functionName: i })
  return R(
    e,
    Gc,
    'sendTransaction',
  )({ data: `${l}${s ? s.replace('0x', '') : ''}`, to: r, ...a })
}
async function lx(e, { chain: t }) {
  const { id: n, name: r, nativeCurrency: o, rpcUrls: s, blockExplorers: i } = t
  await e.request(
    {
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: _(n),
          chainName: r,
          nativeCurrency: o,
          rpcUrls: s.default.http,
          blockExplorerUrls: i
            ? Object.values(i).map(({ url: a }) => a)
            : void 0,
        },
      ],
    },
    { retryCount: 0 },
  )
}
const yu = 256
let Ko = yu,
  Jo
function ux(e = 11) {
  if (!Jo || Ko + e > yu * 2) {
    ;(Jo = ''), (Ko = 0)
    for (let t = 0; t < yu; t++)
      Jo += ((256 + Math.random() * 256) | 0).toString(16).substring(1)
  }
  return Jo.substring(Ko, Ko++ + e)
}
function hm(e) {
  const {
      batch: t,
      cacheTime: n = e.pollingInterval ?? 4e3,
      key: r = 'base',
      name: o = 'Base Client',
      pollingInterval: s = 4e3,
      type: i = 'base',
    } = e,
    a = e.chain,
    l = e.account ? qe(e.account) : void 0,
    {
      config: u,
      request: d,
      value: c,
    } = e.transport({ chain: a, pollingInterval: s }),
    f = { ...u, ...c },
    v = {
      account: l,
      batch: t,
      cacheTime: n,
      chain: a,
      key: r,
      name: o,
      pollingInterval: s,
      request: d,
      transport: f,
      type: i,
      uid: ux(),
    }
  function g(m) {
    return (E) => {
      const p = E(m)
      for (const y in v) delete p[y]
      const h = { ...m, ...p }
      return Object.assign(h, { extend: g(h) })
    }
  }
  return Object.assign(v, { extend: g(v) })
}
function gu(
  e,
  { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {},
) {
  return new Promise((o, s) => {
    const i = async ({ count: a = 0 } = {}) => {
      const l = async ({ error: u }) => {
        const d = typeof t == 'function' ? t({ count: a, error: u }) : t
        d && (await uu(d)), i({ count: a + 1 })
      }
      try {
        const u = await e()
        o(u)
      } catch (u) {
        if (a < n && (await r({ count: a, error: u }))) return l({ error: u })
        s(u)
      }
    }
    i()
  })
}
function cx(e, t = {}) {
  return async (n, r = {}) => {
    const { retryDelay: o = 150, retryCount: s = 3 } = { ...t, ...r }
    return gu(
      async () => {
        try {
          return await e(n)
        } catch (i) {
          const a = i
          switch (a.code) {
            case ei.code:
              throw new ei(a)
            case ti.code:
              throw new ti(a)
            case ni.code:
              throw new ni(a)
            case ri.code:
              throw new ri(a)
            case nr.code:
              throw new nr(a)
            case rr.code:
              throw new rr(a)
            case oi.code:
              throw new oi(a)
            case si.code:
              throw new si(a)
            case ii.code:
              throw new ii(a)
            case ai.code:
              throw new ai(a)
            case uo.code:
              throw new uo(a)
            case li.code:
              throw new li(a)
            case jr.code:
              throw new jr(a)
            case ui.code:
              throw new ui(a)
            case ci.code:
              throw new ci(a)
            case di.code:
              throw new di(a)
            case fi.code:
              throw new fi(a)
            case pi.code:
              throw new pi(a)
            case 5e3:
              throw new jr(a)
            default:
              throw i instanceof P ? i : new ow(a)
          }
        }
      },
      {
        delay: ({ count: i, error: a }) => {
          var l
          if (a && a instanceof Ur) {
            const u =
              (l = a == null ? void 0 : a.headers) == null
                ? void 0
                : l.get('Retry-After')
            if (u != null && u.match(/\d/)) return parseInt(u) * 1e3
          }
          return ~~(1 << i) * o
        },
        retryCount: s,
        shouldRetry: ({ error: i }) => dx(i),
      },
    )
  }
}
function dx(e) {
  return 'code' in e && typeof e.code == 'number'
    ? e.code === -1 || e.code === uo.code || e.code === nr.code
    : e instanceof Ur && e.status
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
function mm(
  {
    key: e,
    name: t,
    request: n,
    retryCount: r = 3,
    retryDelay: o = 150,
    timeout: s,
    type: i,
  },
  a,
) {
  return {
    config: {
      key: e,
      name: t,
      request: n,
      retryCount: r,
      retryDelay: o,
      timeout: s,
      type: i,
    },
    request: cx(n, { retryCount: r, retryDelay: o }),
    value: a,
  }
}
function fx(e, t = {}) {
  const { key: n = 'custom', name: r = 'Custom Provider', retryDelay: o } = t
  return ({ retryCount: s }) =>
    mm({
      key: n,
      name: r,
      request: e.request.bind(e),
      retryCount: t.retryCount ?? s,
      retryDelay: o,
      type: 'custom',
    })
}
class px extends P {
  constructor() {
    super(
      'No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.',
      { docsPath: '/docs/clients/intro' },
    )
  }
}
function hx(
  e,
  { errorInstance: t = new Error('timed out'), timeout: n, signal: r },
) {
  return new Promise((o, s) => {
    ;(async () => {
      let i
      try {
        const a = new AbortController()
        n > 0 &&
          (i = setTimeout(() => {
            r ? a.abort() : s(t)
          }, n)),
          o(await e({ signal: (a == null ? void 0 : a.signal) || null }))
      } catch (a) {
        a.name === 'AbortError' && s(t), s(a)
      } finally {
        clearTimeout(i)
      }
    })()
  })
}
function mx() {
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
const jf = mx()
function yx(e, t = {}) {
  return {
    async request(n) {
      var d
      const {
          body: r,
          fetchOptions: o = {},
          onResponse: s = t.onResponse,
          timeout: i = t.timeout ?? 1e4,
        } = n,
        { headers: a, method: l, signal: u } = { ...t.fetchOptions, ...o }
      try {
        const c = await hx(
          async ({ signal: v }) =>
            await fetch(e, {
              ...o,
              body: Array.isArray(r)
                ? fe(
                    r.map((m) => ({
                      jsonrpc: '2.0',
                      id: m.id ?? jf.take(),
                      ...m,
                    })),
                  )
                : fe({ jsonrpc: '2.0', id: r.id ?? jf.take(), ...r }),
              headers: { ...a, 'Content-Type': 'application/json' },
              method: l || 'POST',
              signal: u || (i > 0 ? v : null),
            }),
          {
            errorInstance: new bf({ body: r, url: e }),
            timeout: i,
            signal: !0,
          },
        )
        s && (await s(c))
        let f
        if (
          ((d = c.headers.get('Content-Type')) != null &&
          d.startsWith('application/json')
            ? (f = await c.json())
            : (f = await c.text()),
          !c.ok)
        )
          throw new Ur({
            body: r,
            details: fe(f.error) || c.statusText,
            headers: c.headers,
            status: c.status,
            url: e,
          })
        return f
      } catch (c) {
        throw c instanceof Ur || c instanceof bf
          ? c
          : new Ur({ body: r, details: c.message, url: e })
      }
    },
  }
}
function gx(e, t = {}) {
  const {
    batch: n,
    fetchOptions: r,
    key: o = 'http',
    name: s = 'HTTP JSON-RPC',
    onFetchResponse: i,
    retryDelay: a,
  } = t
  return ({ chain: l, retryCount: u, timeout: d }) => {
    const { batchSize: c = 1e3, wait: f = 0 } = typeof n == 'object' ? n : {},
      v = t.retryCount ?? u,
      g = d ?? t.timeout ?? 1e4,
      m = e || (l == null ? void 0 : l.rpcUrls.default.http[0])
    if (!m) throw new px()
    const E = yx(m, { fetchOptions: r, onResponse: i, timeout: g })
    return mm(
      {
        key: o,
        name: s,
        async request({ method: p, params: h }) {
          const y = { method: p, params: h },
            { schedule: x } = Vh({
              id: `${e}`,
              wait: f,
              shouldSplitBatch(A) {
                return A.length > c
              },
              fn: (A) => E.request({ body: A }),
              sort: (A, B) => A.id - B.id,
            }),
            C = async (A) => (n ? x(A) : [await E.request({ body: A })]),
            [{ error: S, result: b }] = await C(y)
          if (S) throw new zh({ body: y, error: S, url: m })
          return b
        },
        retryCount: v,
        retryDelay: a,
        timeout: g,
        type: 'http',
      },
      { fetchOptions: r, url: m },
    )
  }
}
function Vc(e, t) {
  var r, o, s, i, a, l
  if (!(e instanceof P)) return !1
  const n = e.walk((u) => u instanceof Xl)
  return n instanceof Xl
    ? !!(
        ((r = n.data) == null ? void 0 : r.errorName) === 'ResolverNotFound' ||
        ((o = n.data) == null ? void 0 : o.errorName) ===
          'ResolverWildcardNotSupported' ||
        ((s = n.data) == null ? void 0 : s.errorName) ===
          'ResolverNotContract' ||
        ((i = n.data) == null ? void 0 : i.errorName) === 'ResolverError' ||
        ((a = n.data) == null ? void 0 : a.errorName) === 'HttpError' ||
        ((l = n.reason) != null &&
          l.includes('Wildcard on non-extended resolvers is not supported')) ||
        (t === 'reverse' && n.reason === Th[50])
      )
    : !1
}
function ym(e) {
  if (e.length !== 66 || e.indexOf('[') !== 0 || e.indexOf(']') !== 65)
    return null
  const t = `0x${e.slice(1, 65)}`
  return tt(t) ? t : null
}
function Ts(e) {
  let t = new Uint8Array(32).fill(0)
  if (!e) return le(t)
  const n = e.split('.')
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const o = ym(n[r]),
      s = o ? Jt(o) : Te(vt(n[r]), 'bytes')
    t = Te(Tt([t, s]), 'bytes')
  }
  return le(t)
}
function vx(e) {
  return `[${e.slice(2)}]`
}
function wx(e) {
  const t = new Uint8Array(32).fill(0)
  return e ? ym(e) || Te(vt(e)) : le(t)
}
function ha(e) {
  const t = e.replace(/^\.|\.$/gm, '')
  if (t.length === 0) return new Uint8Array(1)
  const n = new Uint8Array(vt(t).byteLength + 2)
  let r = 0
  const o = t.split('.')
  for (let s = 0; s < o.length; s++) {
    let i = vt(o[s])
    i.byteLength > 255 && (i = vt(vx(wx(o[s])))),
      (n[r] = i.length),
      n.set(i, r + 1),
      (r += i.length + 1)
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n
}
async function xx(
  e,
  {
    blockNumber: t,
    blockTag: n,
    coinType: r,
    name: o,
    gatewayUrls: s,
    strict: i,
    universalResolverAddress: a,
  },
) {
  let l = a
  if (!l) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    l = fr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  try {
    const u = sn({
        abi: Af,
        functionName: 'addr',
        ...(r != null ? { args: [Ts(o), BigInt(r)] } : { args: [Ts(o)] }),
      }),
      d = {
        address: l,
        abi: Hh,
        functionName: 'resolve',
        args: [$(ha(o)), u],
        blockNumber: t,
        blockTag: n,
      },
      c = R(e, en, 'readContract'),
      f = s ? await c({ ...d, args: [...d.args, s] }) : await c(d)
    if (f[0] === '0x') return null
    const v = dr({
      abi: Af,
      args: r != null ? [Ts(o), BigInt(r)] : void 0,
      functionName: 'addr',
      data: f[0],
    })
    return v === '0x' || tr(v) === '0x00' ? null : v
  } catch (u) {
    if (i) throw u
    if (Vc(u, 'resolve')) return null
    throw u
  }
}
class Ex extends P {
  constructor({ data: n }) {
    super(
      'Unable to extract image from metadata. The metadata may be malformed or invalid.',
      {
        metaMessages: [
          '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
          '',
          `Provided data: ${JSON.stringify(n)}`,
        ],
      },
    )
    w(this, 'name', 'EnsAvatarInvalidMetadataError')
  }
}
class Tr extends P {
  constructor({ reason: n }) {
    super(`ENS NFT avatar URI is invalid. ${n}`)
    w(this, 'name', 'EnsAvatarInvalidNftUriError')
  }
}
class Wc extends P {
  constructor({ uri: n }) {
    super(
      `Unable to resolve ENS avatar URI "${n}". The URI may be malformed, invalid, or does not respond with a valid image.`,
    )
    w(this, 'name', 'EnsAvatarUriResolutionError')
  }
}
class Sx extends P {
  constructor({ namespace: n }) {
    super(
      `ENS NFT avatar namespace "${n}" is not supported. Must be "erc721" or "erc1155".`,
    )
    w(this, 'name', 'EnsAvatarUnsupportedNamespaceError')
  }
}
const kx =
    /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  bx =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  Cx = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  Px = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/
async function Tx(e) {
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
function Hf(e, t) {
  return e ? (e.endsWith('/') ? e.slice(0, -1) : e) : t
}
function gm({ uri: e, gatewayUrls: t }) {
  const n = Cx.test(e)
  if (n) return { uri: e, isOnChain: !0, isEncoded: n }
  const r = Hf(t == null ? void 0 : t.ipfs, 'https://ipfs.io'),
    o = Hf(t == null ? void 0 : t.arweave, 'https://arweave.net'),
    s = e.match(kx),
    {
      protocol: i,
      subpath: a,
      target: l,
      subtarget: u = '',
    } = (s == null ? void 0 : s.groups) || {},
    d = i === 'ipns:/' || a === 'ipns/',
    c = i === 'ipfs:/' || a === 'ipfs/' || bx.test(e)
  if (e.startsWith('http') && !d && !c) {
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
  if ((d || c) && l)
    return {
      uri: `${r}/${d ? 'ipns' : 'ipfs'}/${l}${u}`,
      isOnChain: !1,
      isEncoded: !1,
    }
  if (i === 'ar:/' && l)
    return { uri: `${o}/${l}${u || ''}`, isOnChain: !1, isEncoded: !1 }
  let f = e.replace(Px, '')
  if (
    (f.startsWith('<svg') && (f = `data:image/svg+xml;base64,${btoa(f)}`),
    f.startsWith('data:') || f.startsWith('{'))
  )
    return { uri: f, isOnChain: !0, isEncoded: !1 }
  throw new Wc({ uri: e })
}
function vm(e) {
  if (
    typeof e != 'object' ||
    (!('image' in e) && !('image_url' in e) && !('image_data' in e))
  )
    throw new Ex({ data: e })
  return e.image || e.image_url || e.image_data
}
async function Ax({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((o) => o.json())
    return await qc({ gatewayUrls: e, uri: vm(n) })
  } catch {
    throw new Wc({ uri: t })
  }
}
async function qc({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = gm({ uri: t, gatewayUrls: e })
  if (r || (await Tx(n))) return n
  throw new Wc({ uri: t })
}
function Nx(e) {
  let t = e
  t.startsWith('did:nft:') && (t = t.replace('did:nft:', '').replace(/_/g, '/'))
  const [n, r, o] = t.split('/'),
    [s, i] = n.split(':'),
    [a, l] = r.split(':')
  if (!s || s.toLowerCase() !== 'eip155')
    throw new Tr({ reason: 'Only EIP-155 supported' })
  if (!i) throw new Tr({ reason: 'Chain ID not found' })
  if (!l) throw new Tr({ reason: 'Contract address not found' })
  if (!o) throw new Tr({ reason: 'Token ID not found' })
  if (!a) throw new Tr({ reason: 'ERC namespace not found' })
  return {
    chainID: parseInt(i),
    namespace: a.toLowerCase(),
    contractAddress: l,
    tokenID: o,
  }
}
async function Fx(e, { nft: t }) {
  if (t.namespace === 'erc721')
    return en(e, {
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
    return en(e, {
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
  throw new Sx({ namespace: t.namespace })
}
async function Bx(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n)
    ? Ix(e, { gatewayUrls: t, record: n })
    : qc({ uri: n, gatewayUrls: t })
}
async function Ix(e, { gatewayUrls: t, record: n }) {
  const r = Nx(n),
    o = await Fx(e, { nft: r }),
    { uri: s, isOnChain: i, isEncoded: a } = gm({ uri: o, gatewayUrls: t })
  if (i && (s.includes('data:application/json;base64,') || s.startsWith('{'))) {
    const u = a ? atob(s.replace('data:application/json;base64,', '')) : s,
      d = JSON.parse(u)
    return qc({ uri: vm(d), gatewayUrls: t })
  }
  let l = r.tokenID
  return (
    r.namespace === 'erc1155' && (l = l.replace('0x', '').padStart(64, '0')),
    Ax({ gatewayUrls: t, uri: s.replace(/(?:0x)?{id}/, l) })
  )
}
async function wm(
  e,
  {
    blockNumber: t,
    blockTag: n,
    name: r,
    key: o,
    gatewayUrls: s,
    strict: i,
    universalResolverAddress: a,
  },
) {
  let l = a
  if (!l) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    l = fr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  try {
    const u = {
        address: l,
        abi: Hh,
        functionName: 'resolve',
        args: [
          $(ha(r)),
          sn({ abi: Tf, functionName: 'text', args: [Ts(r), o] }),
        ],
        blockNumber: t,
        blockTag: n,
      },
      d = R(e, en, 'readContract'),
      c = s ? await d({ ...u, args: [...u.args, s] }) : await d(u)
    if (c[0] === '0x') return null
    const f = dr({ abi: Tf, functionName: 'text', data: c[0] })
    return f === '' ? null : f
  } catch (u) {
    if (i) throw u
    if (Vc(u, 'resolve')) return null
    throw u
  }
}
async function Rx(
  e,
  {
    blockNumber: t,
    blockTag: n,
    assetGatewayUrls: r,
    name: o,
    gatewayUrls: s,
    strict: i,
    universalResolverAddress: a,
  },
) {
  const l = await R(
    e,
    wm,
    'getEnsText',
  )({
    blockNumber: t,
    blockTag: n,
    key: 'avatar',
    name: o,
    universalResolverAddress: a,
    gatewayUrls: s,
    strict: i,
  })
  if (!l) return null
  try {
    return await Bx(e, { record: l, gatewayUrls: r })
  } catch {
    return null
  }
}
async function _x(
  e,
  {
    address: t,
    blockNumber: n,
    blockTag: r,
    gatewayUrls: o,
    strict: s,
    universalResolverAddress: i,
  },
) {
  let a = i
  if (!a) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    a = fr({ blockNumber: n, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  const l = `${t.toLowerCase().substring(2)}.addr.reverse`
  try {
    const u = {
        address: a,
        abi: xw,
        functionName: 'reverse',
        args: [$(ha(l))],
        blockNumber: n,
        blockTag: r,
      },
      d = R(e, en, 'readContract'),
      [c, f] = o ? await d({ ...u, args: [...u.args, o] }) : await d(u)
    return t.toLowerCase() !== f.toLowerCase() ? null : c
  } catch (u) {
    if (s) throw u
    if (Vc(u, 'reverse')) return null
    throw u
  }
}
async function zx(
  e,
  { blockNumber: t, blockTag: n, name: r, universalResolverAddress: o },
) {
  let s = o
  if (!s) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. universalResolverAddress is required.',
      )
    s = fr({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' })
  }
  const [i] = await R(
    e,
    en,
    'readContract',
  )({
    address: s,
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
    args: [$(ha(r))],
    blockNumber: t,
    blockTag: n,
  })
  return i
}
async function $x(e) {
  const t = Zi(e, { method: 'eth_newBlockFilter' }),
    n = await e.request({ method: 'eth_newBlockFilter' })
  return { id: n, request: t(n), type: 'block' }
}
async function xm(
  e,
  {
    address: t,
    args: n,
    event: r,
    events: o,
    fromBlock: s,
    strict: i,
    toBlock: a,
  } = {},
) {
  const l = o ?? (r ? [r] : void 0),
    u = Zi(e, { method: 'eth_newFilter' })
  let d = []
  l &&
    ((d = [l.flatMap((f) => Eo({ abi: [f], eventName: f.name, args: n }))]),
    r && (d = d[0]))
  const c = await e.request({
    method: 'eth_newFilter',
    params: [
      {
        address: t,
        fromBlock: typeof s == 'bigint' ? _(s) : s,
        toBlock: typeof a == 'bigint' ? _(a) : a,
        ...(d.length ? { topics: d } : {}),
      },
    ],
  })
  return {
    abi: l,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: s,
    id: c,
    request: u(c),
    strict: !!i,
    toBlock: a,
    type: 'event',
  }
}
async function Em(e) {
  const t = Zi(e, { method: 'eth_newPendingTransactionFilter' }),
    n = await e.request({ method: 'eth_newPendingTransactionFilter' })
  return { id: n, request: t(n), type: 'transaction' }
}
async function Ox(e, { address: t, blockNumber: n, blockTag: r = 'latest' }) {
  const o = n ? _(n) : void 0,
    s = await e.request({ method: 'eth_getBalance', params: [t, o || r] })
  return BigInt(s)
}
async function Lx(e) {
  const t = await e.request({ method: 'eth_blobBaseFee' })
  return BigInt(t)
}
async function Dx(
  e,
  { blockHash: t, blockNumber: n, blockTag: r = 'latest' } = {},
) {
  const o = n !== void 0 ? _(n) : void 0
  let s
  return (
    t
      ? (s = await e.request({
          method: 'eth_getBlockTransactionCountByHash',
          params: [t],
        }))
      : (s = await e.request({
          method: 'eth_getBlockTransactionCountByNumber',
          params: [o || r],
        })),
    Pt(s)
  )
}
async function Mx(e, { address: t, blockNumber: n, blockTag: r = 'latest' }) {
  const o = n !== void 0 ? _(n) : void 0,
    s = await e.request({ method: 'eth_getCode', params: [t, o || r] })
  if (s !== '0x') return s
}
function Ux(e) {
  var t
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward:
      (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r))),
  }
}
async function jx(
  e,
  {
    blockCount: t,
    blockNumber: n,
    blockTag: r = 'latest',
    rewardPercentiles: o,
  },
) {
  const s = n ? _(n) : void 0,
    i = await e.request({ method: 'eth_feeHistory', params: [_(t), s || r, o] })
  return Ux(i)
}
async function Hx(e, { filter: t }) {
  const n = t.strict ?? !1,
    o = (await t.request({ method: 'eth_getFilterLogs', params: [t.id] })).map(
      (s) => Zt(s),
    )
  return t.abi ? _c({ abi: t.abi, logs: o, strict: n }) : o
}
function ue(e) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...e }
}
const Gx = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Vx =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/
function Wx(e) {
  const { domain: t = {}, message: n, primaryType: r } = e,
    o = { EIP712Domain: Tm({ domain: t }), ...e.types }
  Pm({ domain: t, message: n, primaryType: r, types: o })
  const s = ['0x1901']
  return (
    t && s.push(qx({ domain: t, types: o })),
    r !== 'EIP712Domain' && s.push(Sm({ data: n, primaryType: r, types: o })),
    Te(Tt(s))
  )
}
function qx({ domain: e, types: t }) {
  return Sm({ data: e, primaryType: 'EIP712Domain', types: t })
}
function Sm({ data: e, primaryType: t, types: n }) {
  const r = km({ data: e, primaryType: t, types: n })
  return Te(r)
}
function km({ data: e, primaryType: t, types: n }) {
  const r = [{ type: 'bytes32' }],
    o = [Qx({ primaryType: t, types: n })]
  for (const s of n[t]) {
    const [i, a] = Cm({
      types: n,
      name: s.name,
      type: s.type,
      value: e[s.name],
    })
    r.push(i), o.push(a)
  }
  return wo(r, o)
}
function Qx({ primaryType: e, types: t }) {
  const n = $(Kx({ primaryType: e, types: t }))
  return Te(n)
}
function Kx({ primaryType: e, types: t }) {
  let n = ''
  const r = bm({ primaryType: e, types: t })
  r.delete(e)
  const o = [e, ...Array.from(r).sort()]
  for (const s of o)
    n += `${s}(${t[s].map(({ name: i, type: a }) => `${a} ${i}`).join(',')})`
  return n
}
function bm({ primaryType: e, types: t }, n = new Set()) {
  const r = e.match(/^\w*/u),
    o = r == null ? void 0 : r[0]
  if (n.has(o) || t[o] === void 0) return n
  n.add(o)
  for (const s of t[o]) bm({ primaryType: s.type, types: t }, n)
  return n
}
function Cm({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [{ type: 'bytes32' }, Te(km({ data: r, primaryType: n, types: e }))]
  if (n === 'bytes')
    return (
      (r = `0x${(r.length % 2 ? '0' : '') + r.slice(2)}`),
      [{ type: 'bytes32' }, Te(r)]
    )
  if (n === 'string') return [{ type: 'bytes32' }, Te($(r))]
  if (n.lastIndexOf(']') === n.length - 1) {
    const o = n.slice(0, n.lastIndexOf('[')),
      s = r.map((i) => Cm({ name: t, type: o, types: e, value: i }))
    return [
      { type: 'bytes32' },
      Te(
        wo(
          s.map(([i]) => i),
          s.map(([, i]) => i),
        ),
      ),
    ]
  }
  return [{ type: n }, r]
}
function Pm(e) {
  const { domain: t, message: n, primaryType: r, types: o } = e,
    s = (i, a) => {
      for (const l of i) {
        const { name: u, type: d } = l,
          c = a[u],
          f = d.match(Vx)
        if (f && (typeof c == 'number' || typeof c == 'bigint')) {
          const [m, E, p] = f
          _(c, { signed: E === 'int', size: parseInt(p) / 8 })
        }
        if (d === 'address' && typeof c == 'string' && !Se(c))
          throw new We({ address: c })
        const v = d.match(Gx)
        if (v) {
          const [m, E] = v
          if (E && ee(c) !== parseInt(E))
            throw new Bg({ expectedSize: parseInt(E), givenSize: ee(c) })
        }
        const g = o[d]
        g && s(g, c)
      }
    }
  if ((o.EIP712Domain && t && s(o.EIP712Domain, t), r !== 'EIP712Domain')) {
    const i = o[r]
    s(i, n)
  }
}
function Tm({ domain: e }) {
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
const el = '/docs/contract/encodeDeployData'
function Am(e) {
  const { abi: t, args: n, bytecode: r } = e
  if (!n || n.length === 0) return r
  const o = t.find((i) => 'type' in i && i.type === 'constructor')
  if (!o) throw new bg({ docsPath: el })
  if (!('inputs' in o)) throw new cf({ docsPath: el })
  if (!o.inputs || o.inputs.length === 0) throw new cf({ docsPath: el })
  const s = wo(o.inputs, n)
  return Pn([r, s])
}
function sr(e, t = 'hex') {
  const n = Nm(e),
    r = kc(new Uint8Array(n.length))
  return n.encode(r), t === 'hex' ? le(r.bytes) : r.bytes
}
function Nm(e) {
  return Array.isArray(e) ? Jx(e.map((t) => Nm(t))) : Xx(e)
}
function Jx(e) {
  const t = e.reduce((o, s) => o + s.length, 0),
    n = Fm(t)
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
      for (const { encode: s } of e) s(o)
    },
  }
}
function Xx(e) {
  const t = typeof e == 'string' ? Xt(e) : e,
    n = Fm(t.length)
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
function Fm(e) {
  if (e < 2 ** 8) return 1
  if (e < 2 ** 16) return 2
  if (e < 2 ** 24) return 3
  if (e < 2 ** 32) return 4
  throw new P('Length is too large.')
}
const Yx = { '0x0': 'reverted', '0x1': 'success' }
function Bm(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Zt(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Pt(e.transactionIndex) : null,
    status: e.status ? Yx[e.status] : null,
    type: e.type ? Oh[e.type] || e.type : null,
  }
  return (
    e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
    t
  )
}
const Zx = Ac('transactionReceipt', Bm)
function e6(e, t, n, r) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, n, r)
  const o = BigInt(32),
    s = BigInt(4294967295),
    i = Number((n >> o) & s),
    a = Number(n & s),
    l = r ? 4 : 0,
    u = r ? 0 : 4
  e.setUint32(t + l, i, r), e.setUint32(t + u, a, r)
}
class t6 extends yh {
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
      (this.view = Va(this.buffer))
  }
  update(t) {
    Zs(this)
    const { view: n, buffer: r, blockLen: o } = this
    t = yc(t)
    const s = t.length
    for (let i = 0; i < s; ) {
      const a = Math.min(o - this.pos, s - i)
      if (a === o) {
        const l = Va(t)
        for (; o <= s - i; i += o) this.process(l, i)
        continue
      }
      r.set(t.subarray(i, i + a), this.pos),
        (this.pos += a),
        (i += a),
        this.pos === o && (this.process(n, 0), (this.pos = 0))
    }
    return (this.length += t.length), this.roundClean(), this
  }
  digestInto(t) {
    Zs(this), mh(t, this), (this.finished = !0)
    const { buffer: n, view: r, blockLen: o, isLE: s } = this
    let { pos: i } = this
    ;(n[i++] = 128),
      this.buffer.subarray(i).fill(0),
      this.padOffset > o - i && (this.process(r, 0), (i = 0))
    for (let c = i; c < o; c++) n[c] = 0
    e6(r, o - 8, BigInt(this.length * 8), s), this.process(r, 0)
    const a = Va(t),
      l = this.outputLen
    if (l % 4) throw new Error('_sha2: outputLen should be aligned to 32bit')
    const u = l / 4,
      d = this.get()
    if (u > d.length) throw new Error('_sha2: outputLen bigger than state')
    for (let c = 0; c < u; c++) a.setUint32(4 * c, d[c], s)
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
      finished: s,
      destroyed: i,
      pos: a,
    } = this
    return (
      (t.length = o),
      (t.pos = a),
      (t.finished = s),
      (t.destroyed = i),
      o % n && t.buffer.set(r),
      t
    )
  }
}
const n6 = (e, t, n) => (e & t) ^ (~e & n),
  r6 = (e, t, n) => (e & t) ^ (e & n) ^ (t & n),
  o6 = new Uint32Array([
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
  Bt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  It = new Uint32Array(64)
class s6 extends t6 {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Bt[0] | 0),
      (this.B = Bt[1] | 0),
      (this.C = Bt[2] | 0),
      (this.D = Bt[3] | 0),
      (this.E = Bt[4] | 0),
      (this.F = Bt[5] | 0),
      (this.G = Bt[6] | 0),
      (this.H = Bt[7] | 0)
  }
  get() {
    const { A: t, B: n, C: r, D: o, E: s, F: i, G: a, H: l } = this
    return [t, n, r, o, s, i, a, l]
  }
  set(t, n, r, o, s, i, a, l) {
    ;(this.A = t | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = o | 0),
      (this.E = s | 0),
      (this.F = i | 0),
      (this.G = a | 0),
      (this.H = l | 0)
  }
  process(t, n) {
    for (let c = 0; c < 16; c++, n += 4) It[c] = t.getUint32(n, !1)
    for (let c = 16; c < 64; c++) {
      const f = It[c - 15],
        v = It[c - 2],
        g = rt(f, 7) ^ rt(f, 18) ^ (f >>> 3),
        m = rt(v, 17) ^ rt(v, 19) ^ (v >>> 10)
      It[c] = (m + It[c - 7] + g + It[c - 16]) | 0
    }
    let { A: r, B: o, C: s, D: i, E: a, F: l, G: u, H: d } = this
    for (let c = 0; c < 64; c++) {
      const f = rt(a, 6) ^ rt(a, 11) ^ rt(a, 25),
        v = (d + f + n6(a, l, u) + o6[c] + It[c]) | 0,
        m = ((rt(r, 2) ^ rt(r, 13) ^ rt(r, 22)) + r6(r, o, s)) | 0
      ;(d = u),
        (u = l),
        (l = a),
        (a = (i + v) | 0),
        (i = s),
        (s = o),
        (o = r),
        (r = (v + m) | 0)
    }
    ;(r = (r + this.A) | 0),
      (o = (o + this.B) | 0),
      (s = (s + this.C) | 0),
      (i = (i + this.D) | 0),
      (a = (a + this.E) | 0),
      (l = (l + this.F) | 0),
      (u = (u + this.G) | 0),
      (d = (d + this.H) | 0),
      this.set(r, o, s, i, a, l, u, d)
  }
  roundClean() {
    It.fill(0)
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
  }
}
const i6 = gh(() => new s6())
function a6(e, t) {
  const n = t || 'hex',
    r = i6(tt(e, { strict: !1 }) ? Jt(e) : e)
  return n === 'bytes' ? r : $(r)
}
const l6 = `Ethereum Signed Message:
`
function u6(e, t) {
  const n =
      typeof e == 'string'
        ? vt(e)
        : e.raw instanceof Uint8Array
          ? e.raw
          : Jt(e.raw),
    r = vt(`${l6}${n.length}`)
  return Te(Tt([r, n]), t)
}
const Im = 1
class c6 extends P {
  constructor({ maxSize: n, size: r }) {
    super('Blob size is too large.', {
      metaMessages: [`Max: ${n} bytes`, `Given: ${r} bytes`],
    })
    w(this, 'name', 'BlobSizeTooLargeError')
  }
}
class Rm extends P {
  constructor() {
    super('Blob data must not be empty.')
    w(this, 'name', 'EmptyBlobError')
  }
}
class d6 extends P {
  constructor({ hash: n, size: r }) {
    super(`Versioned hash "${n}" size is invalid.`, {
      metaMessages: ['Expected: 32', `Received: ${r}`],
    })
    w(this, 'name', 'InvalidVersionedHashSizeError')
  }
}
class f6 extends P {
  constructor({ hash: n, version: r }) {
    super(`Versioned hash "${n}" version is invalid.`, {
      metaMessages: [`Expected: ${Im}`, `Received: ${r}`],
    })
    w(this, 'name', 'InvalidVersionedHashVersionError')
  }
}
function p6(e) {
  const { blobVersionedHashes: t } = e
  if (t) {
    if (t.length === 0) throw new Rm()
    for (const n of t) {
      const r = ee(n),
        o = Pt(ao(n, 0, 1))
      if (r !== 32) throw new d6({ hash: n, size: r })
      if (o !== Im) throw new f6({ hash: n, version: o })
    }
  }
  _m(e)
}
function _m(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: o } = e
  if (t <= 0) throw new $c({ chainId: t })
  if (o && !Se(o)) throw new We({ address: o })
  if (r && r > 2n ** 256n - 1n) throw new kn({ maxFeePerGas: r })
  if (n && r && n > r)
    throw new fo({ maxFeePerGas: r, maxPriorityFeePerGas: n })
}
function h6(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: o,
    to: s,
  } = e
  if (t <= 0) throw new $c({ chainId: t })
  if (s && !Se(s)) throw new We({ address: s })
  if (n || o)
    throw new P(
      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.',
    )
  if (r && r > 2n ** 256n - 1n) throw new kn({ maxFeePerGas: r })
}
function m6(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: o,
    to: s,
    accessList: i,
  } = e
  if (s && !Se(s)) throw new We({ address: s })
  if (typeof t < 'u' && t <= 0) throw new $c({ chainId: t })
  if (n || o)
    throw new P(
      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.',
    )
  if (r && r > 2n ** 256n - 1n) throw new kn({ maxFeePerGas: r })
  if (i)
    throw new P('`accessList` is not a valid Legacy Transaction attribute.')
}
function zm(e) {
  const { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == 'string' ? 'hex' : 'bytes'),
    r = typeof e.blobs[0] == 'string' ? e.blobs.map((s) => Xt(s)) : e.blobs,
    o = []
  for (const s of r) o.push(Uint8Array.from(t.blobToKzgCommitment(s)))
  return n === 'bytes' ? o : o.map((s) => le(s))
}
function $m(e) {
  const { kzg: t } = e,
    n = e.to ?? (typeof e.blobs[0] == 'string' ? 'hex' : 'bytes'),
    r = typeof e.blobs[0] == 'string' ? e.blobs.map((i) => Xt(i)) : e.blobs,
    o =
      typeof e.commitments[0] == 'string'
        ? e.commitments.map((i) => Xt(i))
        : e.commitments,
    s = []
  for (let i = 0; i < r.length; i++) {
    const a = r[i],
      l = o[i]
    s.push(Uint8Array.from(t.computeBlobKzgProof(a, l)))
  }
  return n === 'bytes' ? s : s.map((i) => le(i))
}
const Gf = 6,
  Om = 32,
  Qc = 4096,
  Lm = Om * Qc,
  Vf = Lm * Gf - 1 - 1 * Qc * Gf
function y6(e) {
  const t = e.to ?? (typeof e.data == 'string' ? 'hex' : 'bytes'),
    n = typeof e.data == 'string' ? Xt(e.data) : e.data,
    r = ee(n)
  if (!r) throw new Rm()
  if (r > Vf) throw new c6({ maxSize: Vf, size: r })
  const o = []
  let s = !0,
    i = 0
  while (s) {
    const a = kc(new Uint8Array(Lm))
    let l = 0
    while (l < Qc) {
      const u = n.slice(i, i + (Om - 1))
      if ((a.pushByte(0), a.pushBytes(u), u.length < 31)) {
        a.pushByte(128), (s = !1)
        break
      }
      l++, (i += 31)
    }
    o.push(a)
  }
  return t === 'bytes' ? o.map((a) => a.bytes) : o.map((a) => le(a.bytes))
}
function g6(e) {
  const { data: t, kzg: n, to: r } = e,
    o = e.blobs ?? y6({ data: t, to: r }),
    s = e.commitments ?? zm({ blobs: o, kzg: n, to: r }),
    i = e.proofs ?? $m({ blobs: o, commitments: s, kzg: n, to: r }),
    a = []
  for (let l = 0; l < o.length; l++)
    a.push({ blob: o[l], commitment: s[l], proof: i[l] })
  return a
}
function v6(e) {
  const { commitment: t, version: n = 1 } = e,
    r = e.to ?? (typeof t == 'string' ? 'hex' : 'bytes'),
    o = a6(t, 'bytes')
  return o.set([n], 0), r === 'bytes' ? o : le(o)
}
function w6(e) {
  const { commitments: t, version: n } = e,
    r = e.to ?? (typeof t[0] == 'string' ? 'hex' : 'bytes'),
    o = []
  for (const s of t) o.push(v6({ commitment: s, to: r, version: n }))
  return o
}
function Kc(e) {
  if (!e || e.length === 0) return []
  const t = []
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: o } = e[n]
    for (let s = 0; s < o.length; s++)
      if (o[s].length - 2 !== 64) throw new Yv({ storageKey: o[s] })
    if (!Se(r, { strict: !1 })) throw new We({ address: r })
    t.push([r, o])
  }
  return t
}
function Dm(e, t) {
  const n = Mh(e)
  return n === 'eip1559'
    ? E6(e, t)
    : n === 'eip2930'
      ? S6(e, t)
      : n === 'eip4844'
        ? x6(e, t)
        : k6(e, t)
}
function x6(e, t) {
  const {
    chainId: n,
    gas: r,
    nonce: o,
    to: s,
    value: i,
    maxFeePerBlobGas: a,
    maxFeePerGas: l,
    maxPriorityFeePerGas: u,
    accessList: d,
    data: c,
  } = e
  p6(e)
  let f = e.blobVersionedHashes,
    v = e.sidecars
  if (e.blobs) {
    const y =
        typeof e.blobs[0] == 'string' ? e.blobs : e.blobs.map((b) => le(b)),
      x = e.kzg,
      C = zm({ blobs: y, kzg: x }),
      S = $m({ blobs: y, commitments: C, kzg: x })
    ;(f = w6({ commitments: C })),
      v !== !1 && (v = g6({ blobs: y, commitments: C, proofs: S }))
  }
  const g = Kc(d),
    m = [
      $(n),
      o ? $(o) : '0x',
      u ? $(u) : '0x',
      l ? $(l) : '0x',
      r ? $(r) : '0x',
      s ?? '0x',
      i ? $(i) : '0x',
      c ?? '0x',
      g,
      a ? $(a) : '0x',
      f ?? [],
      ...Jc(e, t),
    ],
    E = [],
    p = [],
    h = []
  if (v)
    for (let y = 0; y < v.length; y++) {
      const { blob: x, commitment: C, proof: S } = v[y]
      E.push(x), p.push(C), h.push(S)
    }
  return Pn(['0x03', sr(v ? [m, E, p, h] : m)])
}
function E6(e, t) {
  const {
    chainId: n,
    gas: r,
    nonce: o,
    to: s,
    value: i,
    maxFeePerGas: a,
    maxPriorityFeePerGas: l,
    accessList: u,
    data: d,
  } = e
  _m(e)
  const c = Kc(u),
    f = [
      $(n),
      o ? $(o) : '0x',
      l ? $(l) : '0x',
      a ? $(a) : '0x',
      r ? $(r) : '0x',
      s ?? '0x',
      i ? $(i) : '0x',
      d ?? '0x',
      c,
      ...Jc(e, t),
    ]
  return Pn(['0x02', sr(f)])
}
function S6(e, t) {
  const {
    chainId: n,
    gas: r,
    data: o,
    nonce: s,
    to: i,
    value: a,
    accessList: l,
    gasPrice: u,
  } = e
  h6(e)
  const d = Kc(l),
    c = [
      $(n),
      s ? $(s) : '0x',
      u ? $(u) : '0x',
      r ? $(r) : '0x',
      i ?? '0x',
      a ? $(a) : '0x',
      o ?? '0x',
      d,
      ...Jc(e, t),
    ]
  return Pn(['0x01', sr(c)])
}
function k6(e, t) {
  const {
    chainId: n = 0,
    gas: r,
    data: o,
    nonce: s,
    to: i,
    value: a,
    gasPrice: l,
  } = e
  m6(e)
  let u = [
    s ? $(s) : '0x',
    l ? $(l) : '0x',
    r ? $(r) : '0x',
    i ?? '0x',
    a ? $(a) : '0x',
    o ?? '0x',
  ]
  if (t) {
    const d = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n)
      if (n > 0) return BigInt(n * 2) + BigInt(35n + t.v - 27n)
      const c = 27n + (t.v === 27n ? 0n : 1n)
      if (t.v !== c) throw new Jv({ v: t.v })
      return c
    })()
    u = [...u, $(d), t.r, t.s]
  } else n > 0 && (u = [...u, $(n), '0x', '0x'])
  return sr(u)
}
function Jc(e, t) {
  const { r: n, s: r, v: o, yParity: s } = t ?? e
  return typeof n > 'u'
    ? []
    : typeof r > 'u'
      ? []
      : typeof o > 'u' && typeof s > 'u'
        ? []
        : [
            typeof s == 'number'
              ? s
                ? $(1)
                : '0x'
              : o === 0n
                ? '0x'
                : o === 1n
                  ? $(1)
                  : o === 27n
                    ? '0x'
                    : $(1),
            tr(n),
            tr(r),
          ]
}
function b6(e, t) {
  let [n, r = '0'] = e.split('.')
  const o = n.startsWith('-')
  if ((o && (n = n.slice(1)), (r = r.replace(/(0+)$/, '')), t === 0))
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), (r = '')
  else if (r.length > t) {
    const [s, i, a] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
      l = Math.round(+`${i}.${a}`)
    l > 9
      ? (r = `${BigInt(s) + BigInt(1)}0`.padStart(s.length + 1, '0'))
      : (r = `${s}${l}`),
      r.length > t && ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
      (r = r.slice(0, t))
  } else r = r.padEnd(t, '0')
  return BigInt(`${o ? '-' : ''}${n}${r}`)
}
function C6(e, t = 'wei') {
  return b6(e, Fh[t])
}
function P6(e) {
  return e.map((t) => ({ ...t, value: BigInt(t.value) }))
}
function T6(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? Pt(e.nonce) : void 0,
    storageProof: e.storageProof ? P6(e.storageProof) : void 0,
  }
}
async function A6(
  e,
  { address: t, blockNumber: n, blockTag: r, storageKeys: o },
) {
  const s = r ?? 'latest',
    i = n !== void 0 ? _(n) : void 0,
    a = await e.request({ method: 'eth_getProof', params: [t, o, i || s] })
  return T6(a)
}
async function N6(
  e,
  { address: t, blockNumber: n, blockTag: r = 'latest', slot: o },
) {
  const s = n !== void 0 ? _(n) : void 0
  return await e.request({ method: 'eth_getStorageAt', params: [t, o, s || r] })
}
async function Xc(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, hash: o, index: s },
) {
  var d, c, f
  const i = r || 'latest',
    a = n !== void 0 ? _(n) : void 0
  let l = null
  if (
    (o
      ? (l = await e.request({
          method: 'eth_getTransactionByHash',
          params: [o],
        }))
      : t
        ? (l = await e.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [t, _(s)],
          }))
        : (a || i) &&
          (l = await e.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [a || i, _(s)],
          })),
    !l)
  )
    throw new Ih({
      blockHash: t,
      blockNumber: n,
      blockTag: i,
      hash: o,
      index: s,
    })
  return (
    ((f =
      (c = (d = e.chain) == null ? void 0 : d.formatters) == null
        ? void 0
        : c.transaction) == null
      ? void 0
      : f.format) || ra
  )(l)
}
async function F6(e, { hash: t, transactionReceipt: n }) {
  const [r, o] = await Promise.all([
      R(e, Po, 'getBlockNumber')({}),
      t ? R(e, Xc, 'getBlockNumber')({ hash: t }) : void 0,
    ]),
    s =
      (n == null ? void 0 : n.blockNumber) ||
      (o == null ? void 0 : o.blockNumber)
  return s ? r - s + 1n : 0n
}
async function vu(e, { hash: t }) {
  var o, s, i
  const n = await e.request({
    method: 'eth_getTransactionReceipt',
    params: [t],
  })
  if (!n) throw new Rh({ hash: t })
  return (
    ((i =
      (s = (o = e.chain) == null ? void 0 : o.formatters) == null
        ? void 0
        : s.transactionReceipt) == null
      ? void 0
      : i.format) || Bm
  )(n)
}
async function B6(e, t) {
  var E
  const {
      allowFailure: n = !0,
      batchSize: r,
      blockNumber: o,
      blockTag: s,
      multicallAddress: i,
      stateOverride: a,
    } = t,
    l = t.contracts,
    u =
      r ??
      ((typeof ((E = e.batch) == null ? void 0 : E.multicall) == 'object' &&
        e.batch.multicall.batchSize) ||
        1024)
  let d = i
  if (!d) {
    if (!e.chain)
      throw new Error(
        'client chain not configured. multicallAddress is required.',
      )
    d = fr({ blockNumber: o, chain: e.chain, contract: 'multicall3' })
  }
  const c = [[]]
  let f = 0,
    v = 0
  for (let p = 0; p < l.length; p++) {
    const { abi: h, address: y, args: x, functionName: C } = l[p]
    try {
      const S = sn({ abi: h, args: x, functionName: C })
      ;(v += (S.length - 2) / 2),
        u > 0 &&
          v > u &&
          c[f].length > 0 &&
          (f++, (v = (S.length - 2) / 2), (c[f] = [])),
        (c[f] = [...c[f], { allowFailure: !0, callData: S, target: y }])
    } catch (S) {
      const b = co(S, {
        abi: h,
        address: y,
        args: x,
        docsPath: '/docs/contract/multicall',
        functionName: C,
      })
      if (!n) throw b
      c[f] = [...c[f], { allowFailure: !0, callData: '0x', target: y }]
    }
  }
  const g = await Promise.allSettled(
      c.map((p) =>
        R(
          e,
          en,
          'readContract',
        )({
          abi: au,
          address: d,
          args: [p],
          blockNumber: o,
          blockTag: s,
          functionName: 'aggregate3',
          stateOverride: a,
        }),
      ),
    ),
    m = []
  for (let p = 0; p < g.length; p++) {
    const h = g[p]
    if (h.status === 'rejected') {
      if (!n) throw h.reason
      for (let x = 0; x < c[p].length; x++)
        m.push({ status: 'failure', error: h.reason, result: void 0 })
      continue
    }
    const y = h.value
    for (let x = 0; x < y.length; x++) {
      const { returnData: C, success: S } = y[x],
        { callData: b } = c[p][x],
        { abi: A, address: B, functionName: I, args: j } = l[m.length]
      try {
        if (b === '0x') throw new Ji()
        if (!S) throw new Cc({ data: C })
        const we = dr({ abi: A, args: j, data: C, functionName: I })
        m.push(n ? { result: we, status: 'success' } : we)
      } catch (we) {
        const he = co(we, {
          abi: A,
          address: B,
          args: j,
          docsPath: '/docs/contract/multicall',
          functionName: I,
        })
        if (!n) throw he
        m.push({ error: he, result: void 0, status: 'failure' })
      }
    }
  }
  if (m.length !== l.length) throw new P('multicall results mismatch')
  return m
}
const I6 =
  '0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572' /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0)
BigInt(1)
BigInt(2)
function R6(e, t) {
  if (e.length !== t.length) return !1
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
function _6(e, t) {
  const n = tt(e) ? Jt(e) : e,
    r = tt(t) ? Jt(t) : t
  return R6(n, r)
}
async function Mm(e, { address: t, hash: n, signature: r, ...o }) {
  const s = tt(r) ? r : $(r)
  try {
    const { data: i } = await R(
      e,
      sa,
      'call',
    )({ data: Am({ abi: Ew, args: [t, n, s], bytecode: I6 }), ...o })
    return _6(i ?? '0x0', '0x1')
  } catch (i) {
    if (i instanceof _h) return !1
    throw i
  }
}
async function z6(e, { address: t, message: n, signature: r, ...o }) {
  const s = u6(n)
  return Mm(e, { address: t, hash: s, signature: r, ...o })
}
async function $6(e, t) {
  const {
      address: n,
      signature: r,
      message: o,
      primaryType: s,
      types: i,
      domain: a,
      ...l
    } = t,
    u = Wx({ message: o, primaryType: s, types: i, domain: a })
  return Mm(e, { address: n, hash: u, signature: r, ...l })
}
function Um(
  e,
  {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: o,
    poll: s,
    pollingInterval: i = e.pollingInterval,
  },
) {
  const a = typeof s < 'u' ? s : e.transport.type !== 'webSocket'
  let l
  return a
    ? (() => {
        const c = fe(['watchBlockNumber', e.uid, t, n, i])
        return tn(c, { onBlockNumber: r, onError: o }, (f) =>
          Co(
            async () => {
              var v
              try {
                const g = await R(e, Po, 'getBlockNumber')({ cacheTime: 0 })
                if (l) {
                  if (g === l) return
                  if (g - l > 1 && n)
                    for (let m = l + 1n; m < g; m++)
                      f.onBlockNumber(m, l), (l = m)
                }
                ;(!l || g > l) && (f.onBlockNumber(g, l), (l = g))
              } catch (g) {
                ;(v = f.onError) == null || v.call(f, g)
              }
            },
            { emitOnBegin: t, interval: i },
          ),
        )
      })()
    : (() => {
        const c = fe(['watchBlockNumber', e.uid, t, n])
        return tn(c, { onBlockNumber: r, onError: o }, (f) => {
          let v = !0,
            g = () => (v = !1)
          return (
            (async () => {
              try {
                const { unsubscribe: m } = await e.transport.subscribe({
                  params: ['newHeads'],
                  onData(E) {
                    var h
                    if (!v) return
                    const p = ht((h = E.result) == null ? void 0 : h.number)
                    f.onBlockNumber(p, l), (l = p)
                  },
                  onError(E) {
                    var p
                    ;(p = f.onError) == null || p.call(f, E)
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
async function O6(
  e,
  {
    confirmations: t = 1,
    hash: n,
    onReplaced: r,
    pollingInterval: o = e.pollingInterval,
    retryCount: s = 6,
    retryDelay: i = ({ count: l }) => ~~(1 << l) * 200,
    timeout: a,
  },
) {
  const l = fe(['waitForTransactionReceipt', e.uid, n])
  let u,
    d,
    c,
    f = !1
  return new Promise((v, g) => {
    a && setTimeout(() => g(new ew({ hash: n })), a)
    const m = tn(l, { onReplaced: r, resolve: v, reject: g }, (E) => {
      const p = R(
        e,
        Um,
        'watchBlockNumber',
      )({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: o,
        async onBlockNumber(h) {
          if (f) return
          let y = h
          const x = (C) => {
            p(), C(), m()
          }
          try {
            if (c) {
              if (t > 1 && (!c.blockNumber || y - c.blockNumber + 1n < t))
                return
              x(() => E.resolve(c))
              return
            }
            if (
              (u ||
                ((f = !0),
                await gu(
                  async () => {
                    ;(u = await R(e, Xc, 'getTransaction')({ hash: n })),
                      u.blockNumber && (y = u.blockNumber)
                  },
                  { delay: i, retryCount: s },
                ),
                (f = !1)),
              (c = await R(e, vu, 'getTransactionReceipt')({ hash: n })),
              t > 1 && (!c.blockNumber || y - c.blockNumber + 1n < t))
            )
              return
            x(() => E.resolve(c))
          } catch (C) {
            if (C instanceof Ih || C instanceof Rh) {
              if (!u) {
                f = !1
                return
              }
              try {
                ;(d = u), (f = !0)
                const S = await gu(
                  () =>
                    R(
                      e,
                      Yt,
                      'getBlock',
                    )({ blockNumber: y, includeTransactions: !0 }),
                  {
                    delay: i,
                    retryCount: s,
                    shouldRetry: ({ error: B }) => B instanceof $h,
                  },
                )
                f = !1
                const b = S.transactions.find(
                  ({ from: B, nonce: I }) => B === d.from && I === d.nonce,
                )
                if (
                  !b ||
                  ((c = await R(
                    e,
                    vu,
                    'getTransactionReceipt',
                  )({ hash: b.hash })),
                  t > 1 && (!c.blockNumber || y - c.blockNumber + 1n < t))
                )
                  return
                let A = 'replaced'
                b.to === d.to && b.value === d.value
                  ? (A = 'repriced')
                  : b.from === b.to && b.value === 0n && (A = 'cancelled'),
                  x(() => {
                    var B
                    ;(B = E.onReplaced) == null ||
                      B.call(E, {
                        reason: A,
                        replacedTransaction: d,
                        transaction: b,
                        transactionReceipt: c,
                      }),
                      E.resolve(c)
                  })
              } catch (S) {
                x(() => E.reject(S))
              }
            } else x(() => E.reject(C))
          }
        },
      })
    })
  })
}
function L6(
  e,
  {
    blockTag: t = 'latest',
    emitMissed: n = !1,
    emitOnBegin: r = !1,
    onBlock: o,
    onError: s,
    includeTransactions: i,
    poll: a,
    pollingInterval: l = e.pollingInterval,
  },
) {
  const u = typeof a < 'u' ? a : e.transport.type !== 'webSocket',
    d = i ?? !1
  let c
  return u
    ? (() => {
        const g = fe(['watchBlocks', e.uid, n, r, d, l])
        return tn(g, { onBlock: o, onError: s }, (m) =>
          Co(
            async () => {
              var E
              try {
                const p = await R(
                  e,
                  Yt,
                  'getBlock',
                )({ blockTag: t, includeTransactions: d })
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
                        Yt,
                        'getBlock',
                      )({ blockNumber: h, includeTransactions: d })
                      m.onBlock(y, c), (c = y)
                    }
                }
                ;(!(c != null && c.number) ||
                  (t === 'pending' && !(p != null && p.number)) ||
                  (p.number && p.number > c.number)) &&
                  (m.onBlock(p, c), (c = p))
              } catch (p) {
                ;(E = m.onError) == null || E.call(m, p)
              }
            },
            { emitOnBegin: r, interval: l },
          ),
        )
      })()
    : (() => {
        let g = !0,
          m = () => (g = !1)
        return (
          (async () => {
            try {
              const { unsubscribe: E } = await e.transport.subscribe({
                params: ['newHeads'],
                onData(p) {
                  var x, C, S
                  if (!g) return
                  const y = (
                    ((S =
                      (C = (x = e.chain) == null ? void 0 : x.formatters) ==
                      null
                        ? void 0
                        : C.block) == null
                      ? void 0
                      : S.format) || Fc
                  )(p.result)
                  o(y, c), (c = y)
                },
                onError(p) {
                  s == null || s(p)
                },
              })
              ;(m = E), g || m()
            } catch (E) {
              s == null || s(E)
            }
          })(),
          () => m()
        )
      })()
}
function D6(
  e,
  {
    address: t,
    args: n,
    batch: r = !0,
    event: o,
    events: s,
    onError: i,
    onLogs: a,
    poll: l,
    pollingInterval: u = e.pollingInterval,
    strict: d,
  },
) {
  const c = typeof l < 'u' ? l : e.transport.type !== 'webSocket',
    f = d ?? !1
  return c
    ? (() => {
        const m = fe(['watchEvent', t, n, r, e.uid, o, u])
        return tn(m, { onLogs: a, onError: i }, (E) => {
          let p,
            h,
            y = !1
          const x = Co(
            async () => {
              var C
              if (!y) {
                try {
                  h = await R(
                    e,
                    xm,
                    'createEventFilter',
                  )({ address: t, args: n, event: o, events: s, strict: f })
                } catch {}
                y = !0
                return
              }
              try {
                let S
                if (h) S = await R(e, ia, 'getFilterChanges')({ filter: h })
                else {
                  const b = await R(e, Po, 'getBlockNumber')({})
                  p && p !== b
                    ? (S = await R(
                        e,
                        zc,
                        'getLogs',
                      )({
                        address: t,
                        args: n,
                        event: o,
                        events: s,
                        fromBlock: p + 1n,
                        toBlock: b,
                      }))
                    : (S = []),
                    (p = b)
                }
                if (S.length === 0) return
                if (r) E.onLogs(S)
                else for (const b of S) E.onLogs([b])
              } catch (S) {
                h && S instanceof rr && (y = !1),
                  (C = E.onError) == null || C.call(E, S)
              }
            },
            { emitOnBegin: !0, interval: u },
          )
          return async () => {
            h && (await R(e, aa, 'uninstallFilter')({ filter: h })), x()
          }
        })
      })()
    : (() => {
        let m = !0,
          E = () => (m = !1)
        return (
          (async () => {
            try {
              const p = s ?? (o ? [o] : void 0)
              let h = []
              p &&
                ((h = [
                  p.flatMap((x) =>
                    Eo({ abi: [x], eventName: x.name, args: n }),
                  ),
                ]),
                o && (h = h[0]))
              const { unsubscribe: y } = await e.transport.subscribe({
                params: ['logs', { address: t, topics: h }],
                onData(x) {
                  var S
                  if (!m) return
                  const C = x.result
                  try {
                    const { eventName: b, args: A } = Rc({
                        abi: p ?? [],
                        data: C.data,
                        topics: C.topics,
                        strict: f,
                      }),
                      B = Zt(C, { args: A, eventName: b })
                    a([B])
                  } catch (b) {
                    let A, B
                    if (b instanceof io || b instanceof Xi) {
                      if (d) return
                      ;(A = b.abiItem.name),
                        (B =
                          (S = b.abiItem.inputs) == null
                            ? void 0
                            : S.some((j) => !('name' in j && j.name)))
                    }
                    const I = Zt(C, { args: B ? [] : {}, eventName: A })
                    a([I])
                  }
                },
                onError(x) {
                  i == null || i(x)
                },
              })
              ;(E = y), m || E()
            } catch (p) {
              i == null || i(p)
            }
          })(),
          () => E()
        )
      })()
}
function M6(
  e,
  {
    batch: t = !0,
    onError: n,
    onTransactions: r,
    poll: o,
    pollingInterval: s = e.pollingInterval,
  },
) {
  return (typeof o < 'u' ? o : e.transport.type !== 'webSocket')
    ? (() => {
        const u = fe(['watchPendingTransactions', e.uid, t, s])
        return tn(u, { onTransactions: r, onError: n }, (d) => {
          let c
          const f = Co(
            async () => {
              var v
              try {
                if (!c)
                  try {
                    c = await R(e, Em, 'createPendingTransactionFilter')({})
                    return
                  } catch (m) {
                    throw (f(), m)
                  }
                const g = await R(e, ia, 'getFilterChanges')({ filter: c })
                if (g.length === 0) return
                if (t) d.onTransactions(g)
                else for (const m of g) d.onTransactions([m])
              } catch (g) {
                ;(v = d.onError) == null || v.call(d, g)
              }
            },
            { emitOnBegin: !0, interval: s },
          )
          return async () => {
            c && (await R(e, aa, 'uninstallFilter')({ filter: c })), f()
          }
        })
      })()
    : (() => {
        let u = !0,
          d = () => (u = !1)
        return (
          (async () => {
            try {
              const { unsubscribe: c } = await e.transport.subscribe({
                params: ['newPendingTransactions'],
                onData(f) {
                  if (!u) return
                  const v = f.result
                  r([v])
                },
                onError(f) {
                  n == null || n(f)
                },
              })
              ;(d = c), u || d()
            } catch (c) {
              n == null || n(c)
            }
          })(),
          () => d()
        )
      })()
}
function U6(e) {
  return {
    call: (t) => sa(e, t),
    createBlockFilter: () => $x(e),
    createContractEventFilter: (t) => Ph(e, t),
    createEventFilter: (t) => xm(e, t),
    createPendingTransactionFilter: () => Em(e),
    estimateContractGas: (t) => mw(e, t),
    estimateGas: (t) => Ic(e, t),
    getBalance: (t) => Ox(e, t),
    getBlobBaseFee: () => Lx(e),
    getBlock: (t) => Yt(e, t),
    getBlockNumber: (t) => Po(e, t),
    getBlockTransactionCount: (t) => Dx(e, t),
    getBytecode: (t) => Mx(e, t),
    getChainId: () => bo(e),
    getContractEvents: (t) => Uh(e, t),
    getEnsAddress: (t) => xx(e, t),
    getEnsAvatar: (t) => Rx(e, t),
    getEnsName: (t) => _x(e, t),
    getEnsResolver: (t) => zx(e, t),
    getEnsText: (t) => wm(e, t),
    getFeeHistory: (t) => jx(e, t),
    estimateFeesPerGas: (t) => hw(e, t),
    getFilterChanges: (t) => ia(e, t),
    getFilterLogs: (t) => Hx(e, t),
    getGasPrice: () => Bc(e),
    getLogs: (t) => zc(e, t),
    getProof: (t) => A6(e, t),
    estimateMaxPriorityFeePerGas: (t) => pw(e, t),
    getStorageAt: (t) => N6(e, t),
    getTransaction: (t) => Xc(e, t),
    getTransactionConfirmations: (t) => F6(e, t),
    getTransactionCount: (t) => Dh(e, t),
    getTransactionReceipt: (t) => vu(e, t),
    multicall: (t) => B6(e, t),
    prepareTransactionRequest: (t) => oa(e, t),
    readContract: (t) => en(e, t),
    sendRawTransaction: (t) => Hc(e, t),
    simulateContract: (t) => Bw(e, t),
    verifyMessage: (t) => z6(e, t),
    verifyTypedData: (t) => $6(e, t),
    uninstallFilter: (t) => aa(e, t),
    waitForTransactionReceipt: (t) => O6(e, t),
    watchBlocks: (t) => L6(e, t),
    watchBlockNumber: (t) => Um(e, t),
    watchContractEvent: (t) => Lw(e, t),
    watchEvent: (t) => D6(e, t),
    watchPendingTransactions: (t) => M6(e, t),
  }
}
function j6(e) {
  const { key: t = 'public', name: n = 'Public Client' } = e
  return hm({ ...e, key: t, name: n, type: 'publicClient' }).extend(U6)
}
function H6(e, t) {
  const { abi: n, args: r, bytecode: o, ...s } = t,
    i = Am({ abi: n, args: r, bytecode: o })
  return Gc(e, { ...s, data: i })
}
async function G6(e) {
  var n
  return ((n = e.account) == null ? void 0 : n.type) === 'local'
    ? [e.account.address]
    : (await e.request({ method: 'eth_accounts' })).map((r) => Yi(r))
}
async function V6(e) {
  return await e.request({ method: 'wallet_getPermissions' })
}
async function W6(e) {
  return (
    await e.request({ method: 'eth_requestAccounts' }, { retryCount: 0 })
  ).map((n) => gv(n))
}
async function q6(e, t) {
  return e.request(
    { method: 'wallet_requestPermissions', params: [t] },
    { retryCount: 0 },
  )
}
async function Q6(e, { account: t = e.account, message: n }) {
  if (!t) throw new pa({ docsPath: '/docs/actions/wallet/signMessage' })
  const r = qe(t)
  if (r.type === 'local') return r.signMessage({ message: n })
  const o =
    typeof n == 'string'
      ? mc(n)
      : n.raw instanceof Uint8Array
        ? $(n.raw)
        : n.raw
  return e.request(
    { method: 'personal_sign', params: [o, r.address] },
    { retryCount: 0 },
  )
}
async function K6(e, t) {
  var u, d, c, f, v, g
  const { account: n = e.account, chain: r = e.chain, ...o } = t
  if (!n) throw new pa({ docsPath: '/docs/actions/wallet/signTransaction' })
  const s = qe(n)
  ko({ account: s, ...t })
  const i = await R(e, bo, 'getChainId')({})
  r !== null && pm({ currentChainId: i, chain: r })
  const a =
      (r == null ? void 0 : r.formatters) ||
      ((u = e.chain) == null ? void 0 : u.formatters),
    l =
      ((d = a == null ? void 0 : a.transactionRequest) == null
        ? void 0
        : d.format) || na
  return s.type === 'local'
    ? s.signTransaction(
        { ...o, chainId: i },
        {
          serializer:
            (f = (c = e.chain) == null ? void 0 : c.serializers) == null
              ? void 0
              : f.transaction,
        },
      )
    : (console.log(
        { ...o, chainId: i },
        {
          serializer:
            (g = (v = e.chain) == null ? void 0 : v.serializers) == null
              ? void 0
              : g.transaction,
        },
      ),
      console.log({ ...l(o), chainId: _(i), from: s.address }),
      await e.request(
        {
          method: 'eth_signTransaction',
          params: [{ ...l(o), chainId: _(i), from: s.address }],
        },
        { retryCount: 0 },
      ))
}
async function J6(e, t) {
  const { account: n = e.account, domain: r, message: o, primaryType: s } = t
  if (!n) throw new pa({ docsPath: '/docs/actions/wallet/signTypedData' })
  const i = qe(n),
    a = { EIP712Domain: Tm({ domain: r }), ...t.types }
  if (
    (Pm({ domain: r, message: o, primaryType: s, types: a }),
    i.type === 'local')
  )
    return i.signTypedData({ domain: r, message: o, primaryType: s, types: a })
  const l = fe(
    { domain: r ?? {}, message: o, primaryType: s, types: a },
    (u, d) => (tt(d) ? d.toLowerCase() : d),
  )
  return e.request(
    { method: 'eth_signTypedData_v4', params: [i.address, l] },
    { retryCount: 0 },
  )
}
async function X6(e, { id: t }) {
  await e.request(
    { method: 'wallet_switchEthereumChain', params: [{ chainId: _(t) }] },
    { retryCount: 0 },
  )
}
async function Y6(e, t) {
  return await e.request(
    { method: 'wallet_watchAsset', params: t },
    { retryCount: 0 },
  )
}
function Z6(e) {
  return {
    addChain: (t) => lx(e, t),
    deployContract: (t) => H6(e, t),
    getAddresses: () => G6(e),
    getChainId: () => bo(e),
    getPermissions: () => V6(e),
    prepareTransactionRequest: (t) => oa(e, t),
    requestAddresses: () => W6(e),
    requestPermissions: (t) => q6(e, t),
    sendRawTransaction: (t) => Hc(e, t),
    sendTransaction: (t) => Gc(e, t),
    signMessage: (t) => Q6(e, t),
    signTransaction: (t) => K6(e, t),
    signTypedData: (t) => J6(e, t),
    switchChain: (t) => X6(e, t),
    watchAsset: (t) => Y6(e, t),
    writeContract: (t) => ax(e, t),
  }
}
function eE(e) {
  const { key: t = 'wallet', name: n = 'Wallet Client', transport: r } = e
  return hm({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: 'walletClient',
  }).extend(Z6)
}
const tE = {
    gasPriceOracle: { address: '0x420000000000000000000000000000000000000F' },
    l1Block: { address: '0x4200000000000000000000000000000000000015' },
    l2CrossDomainMessenger: {
      address: '0x4200000000000000000000000000000000000007',
    },
    l2Erc721Bridge: { address: '0x4200000000000000000000000000000000000014' },
    l2StandardBridge: { address: '0x4200000000000000000000000000000000000010' },
    l2ToL1MessagePasser: {
      address: '0x4200000000000000000000000000000000000016',
    },
  },
  nE = {
    block: fw({
      format(e) {
        var n
        return {
          transactions:
            (n = e.transactions) == null
              ? void 0
              : n.map((r) => {
                  if (typeof r == 'string') return r
                  const o = ra(r)
                  return (
                    o.typeHex === '0x7e' &&
                      ((o.isSystemTx = r.isSystemTx),
                      (o.mint = r.mint ? ht(r.mint) : void 0),
                      (o.sourceHash = r.sourceHash),
                      (o.type = 'deposit')),
                    o
                  )
                }),
          stateRoot: e.stateRoot,
        }
      },
    }),
    transaction: dw({
      format(e) {
        const t = {}
        return (
          e.type === '0x7e' &&
            ((t.isSystemTx = e.isSystemTx),
            (t.mint = e.mint ? ht(e.mint) : void 0),
            (t.sourceHash = e.sourceHash),
            (t.type = 'deposit')),
          t
        )
      },
    }),
    transactionReceipt: Zx({
      format(e) {
        return {
          l1GasPrice: e.l1GasPrice ? ht(e.l1GasPrice) : null,
          l1GasUsed: e.l1GasUsed ? ht(e.l1GasUsed) : null,
          l1Fee: e.l1Fee ? ht(e.l1Fee) : null,
          l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
        }
      },
    }),
  }
function rE(e, t) {
  return iE(e) ? sE(e) : Dm(e, t)
}
const oE = { transaction: rE }
function sE(e) {
  aE(e)
  const {
      sourceHash: t,
      data: n,
      from: r,
      gas: o,
      isSystemTx: s,
      mint: i,
      to: a,
      value: l,
    } = e,
    u = [
      t,
      r,
      a ?? '0x',
      i ? $(i) : '0x',
      l ? $(l) : '0x',
      o ? $(o) : '0x',
      s ? '0x1' : '0x',
      n ?? '0x',
    ]
  return Pn(['0x7e', sr(u)])
}
function iE(e) {
  return e.type === 'deposit' || typeof e.sourceHash < 'u'
}
function aE(e) {
  const { from: t, to: n } = e
  if (t && !Se(t)) throw new We({ address: t })
  if (n && !Se(n)) throw new We({ address: n })
}
const U = { contracts: tE, formatters: nE, serializers: oE },
  Xo = 1
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: Xo + '',
    portal: Xo + '',
    l1StandardBridge: Xo + '',
  },
})
const Yo = 11155111
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: Yo + '',
    portal: Yo + '',
    l1StandardBridge: Yo + '',
  },
})
const Zo = 1
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: Zo + '',
    portal: Zo + '',
    l1StandardBridge: Zo + '',
  },
})
const es = 5
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: es + '',
    portal: es + '',
    l1StandardBridge: es + '',
  },
})
const ts = 11155111
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: ts + '',
    portal: ts + '',
    l1StandardBridge: ts + '',
  },
})
const ns = 1
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: ns + '',
    portal: ns + '',
    l1StandardBridge: ns + '',
  },
})
const rs = 17e3
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: rs + '',
    portal: rs + '',
    l1StandardBridge: rs + '',
  },
})
ue({
  id: 13473,
  name: 'Immutable zkEVM Testnet',
  nativeCurrency: { decimals: 18, name: 'Immutable Coin', symbol: 'IMX' },
  rpcUrls: { default: { http: ['https://rpc.testnet.immutable.com'] } },
  blockExplorers: {
    default: {
      name: 'Immutable Testnet Explorer',
      url: 'https://explorer.testnet.immutable.com/',
    },
  },
  contracts: {
    multicall3: {
      address: '0x2CC787Ed364600B0222361C4188308Fa8E68bA60',
      blockCreated: 5977391,
    },
  },
  testnet: !0,
})
const os = 11155111
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: os + '',
    portal: os + '',
    l1StandardBridge: os + '',
  },
})
const ss = 1
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: ss + '',
    portal: ss + '',
    l1StandardBridge: ss + '',
  },
})
const is = 5
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: is + '',
    portal: is + '',
    l1StandardBridge: is + '',
  },
})
const as = 11155111
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: as + '',
    portal: as + '',
    l1StandardBridge: as + '',
  },
})
const ls = 1
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: ls + '',
    portal: ls + '',
    l1StandardBridge: ls + '',
  },
})
const us = 11155111
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: us + '',
    portal: us + '',
    l1StandardBridge: us + '',
  },
})
const jm = ue({
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
  cs = 1
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: cs + '',
    portal: cs + '',
    l1StandardBridge: cs + '',
  },
})
const ds = 11155111
;({
  ...U,
  contracts: {
    ...U.contracts,
    l2OutputOracle: ds + '',
    portal: ds + '',
    l1StandardBridge: ds + '',
  },
})
const Wf = 5
;({ ...U, contracts: { ...U.contracts, portal: Wf + '' } })
const lE = j6({ chain: jm, transport: gx() }),
  qf = eE({ chain: jm, transport: fx(window.ethereum) })
function uE() {
  const [e, t] = fn.useState(),
    [n, r] = fn.useState(),
    [o, s] = fn.useState(),
    i = td.createRef(),
    a = td.createRef(),
    l = async () => {
      const [d] = await qf.requestAddresses()
      t(d)
    },
    u = async () => {
      if (!e) return
      const d = await qf.sendTransaction({
        account: e,
        to: i.current.value,
        value: C6(a.current.value),
      })
      r(d)
    }
  return (
    fn.useEffect(() => {
      ;(async () => {
        if (n) {
          const d = await lE.waitForTransactionReceipt({ hash: n })
          s(d)
        }
      })()
    }, [n]),
    e
      ? wa(py, {
          children: [
            wa('div', { children: ['Connected: ', e] }),
            un('input', { ref: i, placeholder: 'address' }),
            un('input', { ref: a, placeholder: 'value (ether)' }),
            un('button', { onClick: u, children: 'Send' }),
            o &&
              wa('div', {
                children: [
                  'Receipt:',
                  ' ',
                  un('pre', {
                    children: un('code', { children: fe(o, null, 2) }),
                  }),
                ],
              }),
          ],
        })
      : un('button', { onClick: l, children: 'Connect Wallet' })
  )
}
tl.createRoot(document.getElementById('root')).render(un(uE, {}))
export {
  P as B,
  Ur as H,
  We as I,
  Tt as a,
  tt as b,
  sa as c,
  Gv as d,
  wo as e,
  hc as g,
  Se as i,
  fe as s,
}