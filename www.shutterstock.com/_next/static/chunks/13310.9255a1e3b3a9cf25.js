"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13310], {
        13310: function(e, n, r) {
            r.r(n), r.d(n, {
                WaveformImageProgress: function() {
                    return s
                }
            });
            var t = r(52322),
                o = r(19161),
                a = r(90588),
                u = r(41929),
                s = function(e) {
                    var n = e.classes,
                        r = e.cx,
                        s = e.height,
                        c = e.track,
                        i = e.waveformWidth,
                        l = e.waveformPng,
                        g = (0, o.E)({
                            track: c,
                            highRefreshRate: !0
                        }),
                        f = g.position,
                        d = g.duration,
                        h = g.seekTo,
                        v = g.percentComplete,
                        m = (0, a.u)({
                            duration: d,
                            handleSeekTo: h,
                            initialProgress: f
                        }),
                        p = m.ghostProgress,
                        k = m.handleMouse,
                        x = m.clearGhostProgress,
                        P = m.handleMouseEnd;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("div", {
                            role: "button",
                            className: r(n.overlayImage, n.waveformImage),
                            onMouseMove: k,
                            onMouseEnter: k,
                            onMouseLeave: x,
                            onMouseUp: P,
                            onClick: u.X0,
                            tabIndex: 0,
                            children: (0, t.jsx)("div", {
                                role: "img",
                                className: r(n.overlayImage, n.waveformImage, n.ghostProgress),
                                style: {
                                    clip: "rect(0px, ".concat(i * p, "px, ").concat(s, "px, 0px)"),
                                    backgroundImage: "url(".concat(l, ")")
                                }
                            })
                        }), (0, t.jsx)("div", {
                            className: r(n.overlayImage, n.waveformImage, n.progressImage),
                            role: "img",
                            style: {
                                clip: "rect(0px, ".concat(i / (100 / v), "px, ").concat(s, "px, 0px)"),
                                backgroundImage: "url(".concat(l, ")")
                            }
                        })]
                    })
                }
        },
        90588: function(e, n, r) {
            r.d(n, {
                u: function() {
                    return i
                }
            });
            var t = r(87394),
                o = r(36616),
                a = r(2784),
                u = function(e, n) {
                    return (e - n.getBoundingClientRect().left) / n.offsetWidth
                },
                s = function(e) {
                    return u(e.pageX, e.currentTarget)
                },
                c = function(e) {
                    var n = e.touches,
                        r = e.currentTarget;
                    return u(n[0].pageX, r)
                },
                i = function(e) {
                    var n = e.initialProgress,
                        r = e.handleSeekTo,
                        u = e.duration,
                        i = (0, o.R)().audioElementRef,
                        l = (0, t.Z)((0, a.useState)(n), 2),
                        g = l[0],
                        f = l[1],
                        d = (0, a.useCallback)(function() {
                            return f(0)
                        }, []),
                        h = (0, a.useCallback)(function(e) {
                            f(c(e))
                        }, []),
                        v = (0, a.useCallback)(function(e) {
                            return f(s(e))
                        }, []),
                        m = (0, a.useCallback)(function(e) {
                            r(e * u), d()
                        }, [r, u, d]),
                        p = (0, a.useCallback)(function(e) {
                            m(s(e))
                        }, [m]);
                    return {
                        handleTouch: h,
                        handleMouse: v,
                        handleInputEnd: m,
                        handleMouseEnd: p,
                        ghostProgress: g,
                        clearGhostProgress: d,
                        setGhostProgress: f,
                        getProgress: (0, a.useCallback)(function() {
                            var e, n = null == i ? void 0 : null === (e = i.current) || void 0 === e ? void 0 : e.currentTime;
                            return n && u ? n / u : 0
                        }, [u])
                    }
                }
        },
        41929: function(e, n, r) {
            r.d(n, {
                PF: function() {
                    return t
                },
                X0: function() {
                    return o
                },
                th: function() {
                    return a
                }
            });
            var t = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    return function(n) {
                        return n && n.preventDefault(), e(n)
                    }
                },
                o = function(e) {
                    e && e.stopPropagation()
                },
                a = function(e) {
                    return function(n) {
                        "Enter" !== n.key || n.shiftKey || n.nativeEvent.isComposing || (n.preventDefault(), e())
                    }
                }
        }
    }
]);
//# sourceMappingURL=13310.9255a1e3b3a9cf25.js.map