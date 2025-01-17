"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55199], {
        55199: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return Z
                }
            });
            var o = n(28193),
                r = n(26831),
                i = n(29172),
                a = n(93918),
                s = n(2784),
                f = n(84501),
                p = n(21399),
                c = n(36855),
                l = n(66208),
                u = n(69075),
                d = n(83820),
                m = n(15672);

            function h(e) {
                return (0, m.Z)("MuiPopperUnstyled", e)
            }(0, n(69222).Z)("MuiPopperUnstyled", ["root"]);
            var v = n(82057),
                y = n(52322);
            let g = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"],
                b = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"];

            function w(e) {
                return "function" == typeof e ? e() : e
            }
            let x = () => (0, u.Z)({
                    root: ["root"]
                }, h, {}),
                O = {},
                E = s.forwardRef(function(e, t) {
                    var n;
                    let {
                        anchorEl: o,
                        children: r,
                        component: c,
                        direction: u,
                        disablePortal: d,
                        modifiers: m,
                        open: h,
                        ownerState: b,
                        placement: O,
                        popperOptions: E,
                        popperRef: j,
                        slotProps: P = {},
                        slots: D = {},
                        TransitionProps: A
                    } = e, R = (0, a.Z)(e, g), k = s.useRef(null), M = (0, f.Z)(k, t), Z = s.useRef(null), L = (0, f.Z)(Z, j), W = s.useRef(L);
                    (0, p.Z)(() => {
                        W.current = L
                    }, [L]), s.useImperativeHandle(j, () => Z.current, []);
                    let B = function(e, t) {
                            if ("ltr" === t) return e;
                            switch (e) {
                                case "bottom-end":
                                    return "bottom-start";
                                case "bottom-start":
                                    return "bottom-end";
                                case "top-end":
                                    return "top-start";
                                case "top-start":
                                    return "top-end";
                                default:
                                    return e
                            }
                        }(O, u),
                        [T, H] = s.useState(B),
                        [S, C] = s.useState(w(o));
                    s.useEffect(() => {
                        Z.current && Z.current.forceUpdate()
                    }), s.useEffect(() => {
                        o && C(w(o))
                    }, [o]), (0, p.Z)(() => {
                        if (!S || !h) return;
                        let e = e => {
                                H(e.placement)
                            },
                            t = [{
                                name: "preventOverflow",
                                options: {
                                    altBoundary: d
                                }
                            }, {
                                name: "flip",
                                options: {
                                    altBoundary: d
                                }
                            }, {
                                name: "onUpdate",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: ({
                                    state: t
                                }) => {
                                    e(t)
                                }
                            }];
                        null != m && (t = t.concat(m)), E && null != E.modifiers && (t = t.concat(E.modifiers));
                        let n = (0, l.fi)(S, k.current, (0, i.Z)({
                            placement: B
                        }, E, {
                            modifiers: t
                        }));
                        return W.current(n), () => {
                            n.destroy(), W.current(null)
                        }
                    }, [S, d, m, h, E, B]);
                    let V = {
                        placement: T
                    };
                    null !== A && (V.TransitionProps = A);
                    let q = x(),
                        N = null != (n = null != c ? c : D.root) ? n : "div",
                        U = (0, v.Z)({
                            elementType: N,
                            externalSlotProps: P.root,
                            externalForwardedProps: R,
                            additionalProps: {
                                role: "tooltip",
                                ref: M
                            },
                            ownerState: (0, i.Z)({}, e, b),
                            className: q.root
                        });
                    return (0, y.jsx)(N, (0, i.Z)({}, U, {
                        children: "function" == typeof r ? r(V) : r
                    }))
                }),
                j = s.forwardRef(function(e, t) {
                    let {
                        anchorEl: n,
                        children: o,
                        container: r,
                        direction: f = "ltr",
                        disablePortal: p = !1,
                        keepMounted: l = !1,
                        modifiers: u,
                        open: m,
                        placement: h = "bottom",
                        popperOptions: v = O,
                        popperRef: g,
                        style: x,
                        transition: j = !1
                    } = e, P = (0, a.Z)(e, b), [D, A] = s.useState(!0), R = () => {
                        A(!1)
                    }, k = () => {
                        A(!0)
                    };
                    if (!l && !m && (!j || D)) return null;
                    let M = r || (n ? (0, c.Z)(w(n)).body : void 0);
                    return (0, y.jsx)(d.Z, {
                        disablePortal: p,
                        container: M,
                        children: (0, y.jsx)(E, (0, i.Z)({
                            anchorEl: n,
                            direction: f,
                            disablePortal: p,
                            modifiers: u,
                            ref: t,
                            open: j ? !D : m,
                            placement: h,
                            popperOptions: v,
                            popperRef: g
                        }, P, {
                            style: (0, i.Z)({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                display: !m && l && (!j || D) ? "none" : null
                            }, x),
                            TransitionProps: j ? { in: m,
                                onEnter: R,
                                onExited: k
                            } : null,
                            children: o
                        }))
                    })
                });
            var P = n(38457),
                D = n(65992),
                A = n(43853);
            let R = ["components", "componentsProps", "slots", "slotProps"],
                k = (0, D.ZP)(j, {
                    name: "MuiPopper",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({}),
                M = s.forwardRef(function(e, t) {
                    var n;
                    let i = (0, P.Z)(),
                        a = (0, A.Z)({
                            props: e,
                            name: "MuiPopper"
                        }),
                        {
                            components: s,
                            componentsProps: f,
                            slots: p,
                            slotProps: c
                        } = a,
                        l = (0, r.Z)(a, R),
                        u = null != (n = null == p ? void 0 : p.root) ? n : null == s ? void 0 : s.Root;
                    return (0, y.jsx)(k, (0, o.Z)({
                        direction: null == i ? void 0 : i.direction,
                        slots: {
                            root: u
                        },
                        slotProps: null != c ? c : f
                    }, l, {
                        ref: t
                    }))
                });
            var Z = M
        },
        66208: function(e, t, n) {
            function o(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function r(e) {
                var t = o(e).Element;
                return e instanceof t || e instanceof Element
            }

            function i(e) {
                var t = o(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function a(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = o(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
            n.d(t, {
                fi: function() {
                    return ep
                }
            });
            var s, f, p, c, l, u = Math.max,
                d = Math.min,
                m = Math.round;

            function h() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function v() {
                return !/^((?!chrome|android).)*safari/i.test(h())
            }

            function y(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var a = e.getBoundingClientRect(),
                    s = 1,
                    f = 1;
                t && i(e) && (s = e.offsetWidth > 0 && m(a.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && m(a.height) / e.offsetHeight || 1);
                var p = (r(e) ? o(e) : window).visualViewport,
                    c = !v() && n,
                    l = (a.left + (c && p ? p.offsetLeft : 0)) / s,
                    u = (a.top + (c && p ? p.offsetTop : 0)) / f,
                    d = a.width / s,
                    h = a.height / f;
                return {
                    width: d,
                    height: h,
                    top: u,
                    right: l + d,
                    bottom: u + h,
                    left: l,
                    x: l,
                    y: u
                }
            }

            function g(e) {
                var t = o(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function b(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function w(e) {
                return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function x(e) {
                return y(w(e)).left + g(e).scrollLeft
            }

            function O(e) {
                return o(e).getComputedStyle(e)
            }

            function E(e) {
                var t = O(e),
                    n = t.overflow,
                    o = t.overflowX,
                    r = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + r + o)
            }

            function j(e) {
                var t = y(e),
                    n = e.offsetWidth,
                    o = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - o) && (o = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: o
                }
            }

            function P(e) {
                return "html" === b(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || w(e)
            }

            function D(e, t) {
                void 0 === t && (t = []);
                var n, r = function e(t) {
                        return ["html", "body", "#document"].indexOf(b(t)) >= 0 ? t.ownerDocument.body : i(t) && E(t) ? t : e(P(t))
                    }(e),
                    a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    s = o(r),
                    f = a ? [s].concat(s.visualViewport || [], E(r) ? r : []) : r,
                    p = t.concat(f);
                return a ? p : p.concat(D(P(f)))
            }

            function A(e) {
                return i(e) && "fixed" !== O(e).position ? e.offsetParent : null
            }

            function R(e) {
                for (var t = o(e), n = A(e); n && ["table", "td", "th"].indexOf(b(n)) >= 0 && "static" === O(n).position;) n = A(n);
                return n && ("html" === b(n) || "body" === b(n) && "static" === O(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(h());
                    if (/Trident/i.test(h()) && i(e) && "fixed" === O(e).position) return null;
                    var n = P(e);
                    for (a(n) && (n = n.host); i(n) && 0 > ["html", "body"].indexOf(b(n));) {
                        var o = O(n);
                        if ("none" !== o.transform || "none" !== o.perspective || "paint" === o.contain || -1 !== ["transform", "perspective"].indexOf(o.willChange) || t && "filter" === o.willChange || t && o.filter && "none" !== o.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var k = "bottom",
                M = "right",
                Z = "left",
                L = "auto",
                W = ["top", k, M, Z],
                B = "start",
                T = "viewport",
                H = "popper",
                S = W.reduce(function(e, t) {
                    return e.concat([t + "-" + B, t + "-end"])
                }, []),
                C = [].concat(W, [L]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + B, t + "-end"])
                }, []),
                V = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                q = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function N() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var U = {
                passive: !0
            };

            function _(e) {
                return e.split("-")[0]
            }

            function I(e) {
                return e.split("-")[1]
            }

            function F(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function z(e) {
                var t, n = e.reference,
                    o = e.element,
                    r = e.placement,
                    i = r ? _(r) : null,
                    a = r ? I(r) : null,
                    s = n.x + n.width / 2 - o.width / 2,
                    f = n.y + n.height / 2 - o.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: n.y - o.height
                        };
                        break;
                    case k:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case M:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case Z:
                        t = {
                            x: n.x - o.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var p = i ? F(i) : null;
                if (null != p) {
                    var c = "y" === p ? "height" : "width";
                    switch (a) {
                        case B:
                            t[p] = t[p] - (n[c] / 2 - o[c] / 2);
                            break;
                        case "end":
                            t[p] = t[p] + (n[c] / 2 - o[c] / 2)
                    }
                }
                return t
            }
            var X = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function Y(e) {
                var t, n, r, i, a, s, f = e.popper,
                    p = e.popperRect,
                    c = e.placement,
                    l = e.variation,
                    u = e.offsets,
                    d = e.position,
                    h = e.gpuAcceleration,
                    v = e.adaptive,
                    y = e.roundOffsets,
                    g = e.isFixed,
                    b = u.x,
                    x = void 0 === b ? 0 : b,
                    E = u.y,
                    j = void 0 === E ? 0 : E,
                    P = "function" == typeof y ? y({
                        x: x,
                        y: j
                    }) : {
                        x: x,
                        y: j
                    };
                x = P.x, j = P.y;
                var D = u.hasOwnProperty("x"),
                    A = u.hasOwnProperty("y"),
                    L = Z,
                    W = "top",
                    B = window;
                if (v) {
                    var T = R(f),
                        H = "clientHeight",
                        S = "clientWidth";
                    T === o(f) && "static" !== O(T = w(f)).position && "absolute" === d && (H = "scrollHeight", S = "scrollWidth"), ("top" === c || (c === Z || c === M) && "end" === l) && (W = k, j -= (g && T === B && B.visualViewport ? B.visualViewport.height : T[H]) - p.height, j *= h ? 1 : -1), (c === Z || ("top" === c || c === k) && "end" === l) && (L = M, x -= (g && T === B && B.visualViewport ? B.visualViewport.width : T[S]) - p.width, x *= h ? 1 : -1)
                }
                var C = Object.assign({
                        position: d
                    }, v && X),
                    V = !0 === y ? (n = (t = {
                        x: x,
                        y: j
                    }).x, r = t.y, {
                        x: m(n * (i = window.devicePixelRatio || 1)) / i || 0,
                        y: m(r * i) / i || 0
                    }) : {
                        x: x,
                        y: j
                    };
                return (x = V.x, j = V.y, h) ? Object.assign({}, C, ((s = {})[W] = A ? "0" : "", s[L] = D ? "0" : "", s.transform = 1 >= (B.devicePixelRatio || 1) ? "translate(" + x + "px, " + j + "px)" : "translate3d(" + x + "px, " + j + "px, 0)", s)) : Object.assign({}, C, ((a = {})[W] = A ? j + "px" : "", a[L] = D ? x + "px" : "", a.transform = "", a))
            }
            var G = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function J(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return G[e]
                })
            }
            var K = {
                start: "end",
                end: "start"
            };

            function Q(e) {
                return e.replace(/start|end/g, function(e) {
                    return K[e]
                })
            }

            function $(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && a(n)) {
                    var o = t;
                    do {
                        if (o && e.isSameNode(o)) return !0;
                        o = o.parentNode || o.host
                    } while (o)
                }
                return !1
            }

            function ee(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function et(e, t, n) {
                var i, a, s, f, p, c, l, d, m, h;
                return t === T ? ee(function(e, t) {
                    var n = o(e),
                        r = w(e),
                        i = n.visualViewport,
                        a = r.clientWidth,
                        s = r.clientHeight,
                        f = 0,
                        p = 0;
                    if (i) {
                        a = i.width, s = i.height;
                        var c = v();
                        (c || !c && "fixed" === t) && (f = i.offsetLeft, p = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: f + x(e),
                        y: p
                    }
                }(e, n)) : r(t) ? ((i = y(t, !1, "fixed" === n)).top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i) : ee((a = w(e), f = w(a), p = g(a), c = null == (s = a.ownerDocument) ? void 0 : s.body, l = u(f.scrollWidth, f.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = u(f.scrollHeight, f.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), m = -p.scrollLeft + x(a), h = -p.scrollTop, "rtl" === O(c || f).direction && (m += u(f.clientWidth, c ? c.clientWidth : 0) - l), {
                    width: l,
                    height: d,
                    x: m,
                    y: h
                }))
            }

            function en() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function eo(e) {
                return Object.assign({}, en(), e)
            }

            function er(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function ei(e, t) {
                void 0 === t && (t = {});
                var n, o, a, s, f, p, c, l = t,
                    m = l.placement,
                    h = void 0 === m ? e.placement : m,
                    v = l.strategy,
                    g = void 0 === v ? e.strategy : v,
                    x = l.boundary,
                    E = l.rootBoundary,
                    j = l.elementContext,
                    A = void 0 === j ? H : j,
                    Z = l.altBoundary,
                    L = l.padding,
                    B = void 0 === L ? 0 : L,
                    S = eo("number" != typeof B ? B : er(B, W)),
                    C = e.rects.popper,
                    V = e.elements[void 0 !== Z && Z ? A === H ? "reference" : H : A],
                    q = (n = r(V) ? V : V.contextElement || w(e.elements.popper), p = (f = [].concat("clippingParents" === (o = void 0 === x ? "clippingParents" : x) ? (a = D(P(n)), r(s = ["absolute", "fixed"].indexOf(O(n).position) >= 0 && i(n) ? R(n) : n) ? a.filter(function(e) {
                        return r(e) && $(e, s) && "body" !== b(e)
                    }) : []) : [].concat(o), [void 0 === E ? T : E]))[0], (c = f.reduce(function(e, t) {
                        var o = et(n, t, g);
                        return e.top = u(o.top, e.top), e.right = d(o.right, e.right), e.bottom = d(o.bottom, e.bottom), e.left = u(o.left, e.left), e
                    }, et(n, p, g))).width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c),
                    N = y(e.elements.reference),
                    U = z({
                        reference: N,
                        element: C,
                        strategy: "absolute",
                        placement: h
                    }),
                    _ = ee(Object.assign({}, C, U)),
                    I = A === H ? _ : N,
                    F = {
                        top: q.top - I.top + S.top,
                        bottom: I.bottom - q.bottom + S.bottom,
                        left: q.left - I.left + S.left,
                        right: I.right - q.right + S.right
                    },
                    X = e.modifiersData.offset;
                if (A === H && X) {
                    var Y = X[h];
                    Object.keys(F).forEach(function(e) {
                        var t = [M, k].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", k].indexOf(e) >= 0 ? "y" : "x";
                        F[e] += Y[n] * t
                    })
                }
                return F
            }

            function ea(e, t, n) {
                return u(e, d(t, n))
            }

            function es(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ef(e) {
                return ["top", M, k, Z].some(function(t) {
                    return e[t] >= 0
                })
            }
            var ep = (p = void 0 === (f = (s = {
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            r = e.options,
                            i = r.scroll,
                            a = void 0 === i || i,
                            s = r.resize,
                            f = void 0 === s || s,
                            p = o(t.elements.popper),
                            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return a && c.forEach(function(e) {
                                e.addEventListener("scroll", n.update, U)
                            }), f && p.addEventListener("resize", n.update, U),
                            function() {
                                a && c.forEach(function(e) {
                                    e.removeEventListener("scroll", n.update, U)
                                }), f && p.removeEventListener("resize", n.update, U)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = z({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = n.gpuAcceleration,
                            r = n.adaptive,
                            i = n.roundOffsets,
                            a = void 0 === i || i,
                            s = {
                                placement: _(t.placement),
                                variation: I(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: void 0 === o || o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Y(Object.assign({}, s, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === r || r,
                            roundOffsets: a
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Y(Object.assign({}, s, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: a
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function(e) {
                            var n = t.styles[e] || {},
                                o = t.attributes[e] || {},
                                r = t.elements[e];
                            i(r) && b(r) && (Object.assign(r.style, n), Object.keys(o).forEach(function(e) {
                                var t = o[e];
                                !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                            }))
                        })
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach(function(e) {
                                    var o = t.elements[e],
                                        r = t.attributes[e] || {},
                                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                            return e[t] = "", e
                                        }, {});
                                    i(o) && b(o) && (Object.assign(o.style, a), Object.keys(r).forEach(function(e) {
                                        o.removeAttribute(e)
                                    }))
                                })
                            }
                    },
                    requires: ["computeStyles"]
                }, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name,
                            r = n.offset,
                            i = void 0 === r ? [0, 0] : r,
                            a = C.reduce(function(e, n) {
                                var o, r, a, s, f, p;
                                return e[n] = (o = t.rects, a = [Z, "top"].indexOf(r = _(n)) >= 0 ? -1 : 1, f = (s = "function" == typeof i ? i(Object.assign({}, o, {
                                    placement: n
                                })) : i)[0], p = s[1], f = f || 0, p = (p || 0) * a, [Z, M].indexOf(r) >= 0 ? {
                                    x: p,
                                    y: f
                                } : {
                                    x: f,
                                    y: p
                                }), e
                            }, {}),
                            s = a[t.placement],
                            f = s.x,
                            p = s.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = a
                    }
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name;
                        if (!t.modifiersData[o]._skip) {
                            for (var r = n.mainAxis, i = void 0 === r || r, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, p = n.padding, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, h = n.allowedAutoPlacements, v = t.options.placement, y = _(v), g = [v].concat(f || (y !== v && m ? function(e) {
                                    if (_(e) === L) return [];
                                    var t = J(e);
                                    return [Q(e), t, Q(t)]
                                }(v) : [J(v)])).reduce(function(e, n) {
                                    var o, r, i, a, s, f, u, d, v, y, g, b;
                                    return e.concat(_(n) === L ? (r = (o = {
                                        placement: n,
                                        boundary: c,
                                        rootBoundary: l,
                                        padding: p,
                                        flipVariations: m,
                                        allowedAutoPlacements: h
                                    }).placement, i = o.boundary, a = o.rootBoundary, s = o.padding, f = o.flipVariations, d = void 0 === (u = o.allowedAutoPlacements) ? C : u, 0 === (g = (y = (v = I(r)) ? f ? S : S.filter(function(e) {
                                        return I(e) === v
                                    }) : W).filter(function(e) {
                                        return d.indexOf(e) >= 0
                                    })).length && (g = y), Object.keys(b = g.reduce(function(e, n) {
                                        return e[n] = ei(t, {
                                            placement: n,
                                            boundary: i,
                                            rootBoundary: a,
                                            padding: s
                                        })[_(n)], e
                                    }, {})).sort(function(e, t) {
                                        return b[e] - b[t]
                                    })) : n)
                                }, []), b = t.rects.reference, w = t.rects.popper, x = new Map, O = !0, E = g[0], j = 0; j < g.length; j++) {
                                var P = g[j],
                                    D = _(P),
                                    A = I(P) === B,
                                    R = ["top", k].indexOf(D) >= 0,
                                    T = R ? "width" : "height",
                                    H = ei(t, {
                                        placement: P,
                                        boundary: c,
                                        rootBoundary: l,
                                        altBoundary: u,
                                        padding: p
                                    }),
                                    V = R ? A ? M : Z : A ? k : "top";
                                b[T] > w[T] && (V = J(V));
                                var q = J(V),
                                    N = [];
                                if (i && N.push(H[D] <= 0), s && N.push(H[V] <= 0, H[q] <= 0), N.every(function(e) {
                                        return e
                                    })) {
                                    E = P, O = !1;
                                    break
                                }
                                x.set(P, N)
                            }
                            if (O)
                                for (var U = m ? 3 : 1, F = function(e) {
                                        var t = g.find(function(t) {
                                            var n = x.get(t);
                                            if (n) return n.slice(0, e).every(function(e) {
                                                return e
                                            })
                                        });
                                        if (t) return E = t, "break"
                                    }, z = U; z > 0 && "break" !== F(z); z--);
                            t.placement !== E && (t.modifiersData[o]._skip = !0, t.placement = E, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name,
                            r = n.mainAxis,
                            i = n.altAxis,
                            a = n.boundary,
                            s = n.rootBoundary,
                            f = n.altBoundary,
                            p = n.padding,
                            c = n.tether,
                            l = void 0 === c || c,
                            m = n.tetherOffset,
                            h = void 0 === m ? 0 : m,
                            v = ei(t, {
                                boundary: a,
                                rootBoundary: s,
                                padding: p,
                                altBoundary: f
                            }),
                            y = _(t.placement),
                            g = I(t.placement),
                            b = !g,
                            w = F(y),
                            x = "x" === w ? "y" : "x",
                            O = t.modifiersData.popperOffsets,
                            E = t.rects.reference,
                            P = t.rects.popper,
                            D = "function" == typeof h ? h(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : h,
                            A = "number" == typeof D ? {
                                mainAxis: D,
                                altAxis: D
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, D),
                            L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            W = {
                                x: 0,
                                y: 0
                            };
                        if (O) {
                            if (void 0 === r || r) {
                                var T, H = "y" === w ? "top" : Z,
                                    S = "y" === w ? k : M,
                                    C = "y" === w ? "height" : "width",
                                    V = O[w],
                                    q = V + v[H],
                                    N = V - v[S],
                                    U = l ? -P[C] / 2 : 0,
                                    z = g === B ? E[C] : P[C],
                                    X = g === B ? -P[C] : -E[C],
                                    Y = t.elements.arrow,
                                    G = l && Y ? j(Y) : {
                                        width: 0,
                                        height: 0
                                    },
                                    J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : en(),
                                    K = J[H],
                                    Q = J[S],
                                    $ = ea(0, E[C], G[C]),
                                    ee = b ? E[C] / 2 - U - $ - K - A.mainAxis : z - $ - K - A.mainAxis,
                                    et = b ? -E[C] / 2 + U + $ + Q + A.mainAxis : X + $ + Q + A.mainAxis,
                                    eo = t.elements.arrow && R(t.elements.arrow),
                                    er = eo ? "y" === w ? eo.clientTop || 0 : eo.clientLeft || 0 : 0,
                                    es = null != (T = null == L ? void 0 : L[w]) ? T : 0,
                                    ef = ea(l ? d(q, V + ee - es - er) : q, V, l ? u(N, V + et - es) : N);
                                O[w] = ef, W[w] = ef - V
                            }
                            if (void 0 !== i && i) {
                                var ep, ec, el = O[x],
                                    eu = "y" === x ? "height" : "width",
                                    ed = el + v["x" === w ? "top" : Z],
                                    em = el - v["x" === w ? k : M],
                                    eh = -1 !== ["top", Z].indexOf(y),
                                    ev = null != (ep = null == L ? void 0 : L[x]) ? ep : 0,
                                    ey = eh ? ed : el - E[eu] - P[eu] - ev + A.altAxis,
                                    eg = eh ? el + E[eu] + P[eu] - ev - A.altAxis : em,
                                    eb = l && eh ? (ec = ea(ey, el, eg)) > eg ? eg : ec : ea(l ? ey : ed, el, l ? eg : em);
                                O[x] = eb, W[x] = eb - el
                            }
                            t.modifiersData[o] = W
                        }
                    },
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t, n, o = e.state,
                            r = e.name,
                            i = e.options,
                            a = o.elements.arrow,
                            s = o.modifiersData.popperOffsets,
                            f = _(o.placement),
                            p = F(f),
                            c = [Z, M].indexOf(f) >= 0 ? "height" : "width";
                        if (a && s) {
                            var l = eo("number" != typeof(t = "function" == typeof(t = i.padding) ? t(Object.assign({}, o.rects, {
                                    placement: o.placement
                                })) : t) ? t : er(t, W)),
                                u = j(a),
                                d = o.rects.reference[c] + o.rects.reference[p] - s[p] - o.rects.popper[c],
                                m = s[p] - o.rects.reference[p],
                                h = R(a),
                                v = h ? "y" === p ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                                y = l["y" === p ? "top" : Z],
                                g = v - u[c] - l["y" === p ? k : M],
                                b = v / 2 - u[c] / 2 + (d / 2 - m / 2),
                                w = ea(y, b, g);
                            o.modifiersData[r] = ((n = {})[p] = w, n.centerOffset = w - b, n)
                        }
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = e.options.element,
                            o = void 0 === n ? "[data-popper-arrow]" : n;
                        null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && $(t.elements.popper, o) && (t.elements.arrow = o)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            o = t.rects.reference,
                            r = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            a = ei(t, {
                                elementContext: "reference"
                            }),
                            s = ei(t, {
                                altBoundary: !0
                            }),
                            f = es(a, o),
                            p = es(s, r, i),
                            c = ef(f),
                            l = ef(p);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: f,
                            popperEscapeOffsets: p,
                            isReferenceHidden: c,
                            hasPopperEscaped: l
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": c,
                            "data-popper-escaped": l
                        })
                    }
                }]
            }).defaultModifiers) ? [] : f, l = void 0 === (c = s.defaultOptions) ? q : c, function(e, t, n) {
                void 0 === n && (n = l);
                var a, s = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, q, l),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    f = [],
                    c = !1,
                    u = {
                        state: s,
                        setOptions: function(n) {
                            var o, i, a, c, m, h = "function" == typeof n ? n(s.options) : n;
                            d(), s.options = Object.assign({}, l, s.options, h), s.scrollParents = {
                                reference: r(e) ? D(e) : e.contextElement ? D(e.contextElement) : [],
                                popper: D(t)
                            };
                            var v = (i = Object.keys(o = [].concat(p, s.options.modifiers).reduce(function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }, {})).map(function(e) {
                                return o[e]
                            }), a = new Map, c = new Set, m = [], i.forEach(function(e) {
                                a.set(e.name, e)
                            }), i.forEach(function(e) {
                                c.has(e.name) || function e(t) {
                                    c.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                        if (!c.has(t)) {
                                            var n = a.get(t);
                                            n && e(n)
                                        }
                                    }), m.push(t)
                                }(e)
                            }), V.reduce(function(e, t) {
                                return e.concat(m.filter(function(e) {
                                    return e.phase === t
                                }))
                            }, []));
                            return s.orderedModifiers = v.filter(function(e) {
                                return e.enabled
                            }), s.orderedModifiers.forEach(function(e) {
                                var t = e.name,
                                    n = e.options,
                                    o = e.effect;
                                if ("function" == typeof o) {
                                    var r = o({
                                        state: s,
                                        name: t,
                                        instance: u,
                                        options: void 0 === n ? {} : n
                                    });
                                    f.push(r || function() {})
                                }
                            }), u.update()
                        },
                        forceUpdate: function() {
                            if (!c) {
                                var e, t, n, r, a, f, p, l, d, h, v, O, P = s.elements,
                                    D = P.reference,
                                    A = P.popper;
                                if (N(D, A)) {
                                    s.rects = {
                                        reference: (t = R(A), n = "fixed" === s.options.strategy, r = i(t), l = i(t) && (f = m((a = t.getBoundingClientRect()).width) / t.offsetWidth || 1, p = m(a.height) / t.offsetHeight || 1, 1 !== f || 1 !== p), d = w(t), h = y(D, l, n), v = {
                                            scrollLeft: 0,
                                            scrollTop: 0
                                        }, O = {
                                            x: 0,
                                            y: 0
                                        }, (r || !r && !n) && (("body" !== b(t) || E(d)) && (v = (e = t) !== o(e) && i(e) ? {
                                            scrollLeft: e.scrollLeft,
                                            scrollTop: e.scrollTop
                                        } : g(e)), i(t) ? (O = y(t, !0), O.x += t.clientLeft, O.y += t.clientTop) : d && (O.x = x(d))), {
                                            x: h.left + v.scrollLeft - O.x,
                                            y: h.top + v.scrollTop - O.y,
                                            width: h.width,
                                            height: h.height
                                        }),
                                        popper: j(A)
                                    }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(e) {
                                        return s.modifiersData[e.name] = Object.assign({}, e.data)
                                    });
                                    for (var k = 0; k < s.orderedModifiers.length; k++) {
                                        if (!0 === s.reset) {
                                            s.reset = !1, k = -1;
                                            continue
                                        }
                                        var M = s.orderedModifiers[k],
                                            Z = M.fn,
                                            L = M.options,
                                            W = void 0 === L ? {} : L,
                                            B = M.name;
                                        "function" == typeof Z && (s = Z({
                                            state: s,
                                            options: W,
                                            name: B,
                                            instance: u
                                        }) || s)
                                    }
                                }
                            }
                        },
                        update: function() {
                            return a || (a = new Promise(function(e) {
                                Promise.resolve().then(function() {
                                    a = void 0, e(new Promise(function(e) {
                                        u.forceUpdate(), e(s)
                                    }))
                                })
                            })), a
                        },
                        destroy: function() {
                            d(), c = !0
                        }
                    };
                if (!N(e, t)) return u;

                function d() {
                    f.forEach(function(e) {
                        return e()
                    }), f = []
                }
                return u.setOptions(n).then(function(e) {
                    !c && n.onFirstUpdate && n.onFirstUpdate(e)
                }), u
            })
        }
    }
]);
//# sourceMappingURL=55199-6c550b4de962fe79.js.map