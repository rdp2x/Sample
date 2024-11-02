"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31421, 34116], {
        80984: function(n, t, o) {
            o.d(t, {
                x: function() {
                    return c
                }
            });
            var e = o(70865),
                i = o(26297),
                r = o(52322),
                a = o(12250),
                c = function(n) {
                    var t = n.addToCollectionViewsHandler,
                        o = n.asset,
                        c = n.gridItems,
                        l = n.tooltipPlacement,
                        s = (0, i.Z)(n, ["addToCollectionViewsHandler", "asset", "gridItems", "tooltipPlacement"]);
                    return (0, r.jsx)(a.I, (0, e.Z)({
                        onClickHandler: function() {
                            return t({
                                assets: o,
                                gridItems: c,
                                openModal: !0
                            })
                        },
                        tooltipPlacement: l,
                        withBackground: !0
                    }, s))
                };
            c.defaultProps = {
                tooltipPlacement: "top"
            }
        },
        14770: function(n, t, o) {
            o.r(t), o.d(t, {
                TrackOverlay: function() {
                    return p
                }
            });
            var e = o(70865),
                i = o(96670),
                r = o(87394),
                a = o(52322),
                c = o(6514),
                l = o(94909),
                s = o(65860),
                d = o(2784),
                u = o(80984),
                p = function(n) {
                    var t = (0, r.Z)((0, d.useState)(!1), 2),
                        o = t[0],
                        p = t[1],
                        f = n.isHovered,
                        g = (0, s.a)().classes,
                        h = (0, l.d)();
                    return (0, a.jsx)("div", {
                        className: g.root,
                        children: (0, a.jsxs)("div", {
                            className: g.bottomRightContainer,
                            children: [h && (0, a.jsx)(u.x, (0, e.Z)({}, n)), !h && (o || f) && (0, a.jsx)(c.M, (0, i.Z)((0, e.Z)({}, n), {
                                setIsOverlayOpen: p
                            }))]
                        })
                    })
                }
        },
        73180: function(n, t, o) {
            o.d(t, {
                U: function() {
                    return e
                }
            });
            var e = function(n) {
                return (null == n ? void 0 : n.aspect) >= .4 && (null == n ? void 0 : n.aspect) <= 1.3
            }
        },
        59312: function(n, t, o) {
            o.d(t, {
                l: function() {
                    return v
                }
            });
            var e = o(47842),
                i = o(70865),
                r = o(96670),
                a = o(26297),
                c = o(87394),
                l = o(52322),
                s = o(67550),
                d = o(91609),
                u = o(776),
                p = o(25237),
                f = o.n(p),
                g = o(2784),
                h = (0, o(8740).ZL)()(function(n) {
                    var t = n.palette,
                        o = n.tokens.color,
                        e = t.mode === d.oc.DARK,
                        i = e ? o["white-96"] : o.gray["onyx-87"];
                    return {
                        root: {
                            position: "relative",
                            display: "inline-flex",
                            verticalAlign: "middle"
                        },
                        popper: {
                            pointerEvents: "all"
                        },
                        tooltip: {
                            "&&": {
                                color: e ? t.common.black : t.common.white,
                                backgroundColor: i
                            }
                        },
                        arrow: {
                            "&&": {
                                color: i
                            }
                        },
                        tooltipHidden: {
                            "&&": {
                                visibility: "hidden"
                            }
                        }
                    }
                }),
                x = f()(function() {
                    return Promise.all([o.e(27310), o.e(55199), o.e(23182), o.e(38507)]).then(o.bind(o, 97415))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [97415]
                        }
                    },
                    ssr: !1
                }),
                v = function(n) {
                    var t = n.className,
                        o = n.tooltipClassName,
                        d = n.children,
                        p = n.title,
                        f = n.isHidden,
                        v = n.analyticsEventLabel,
                        m = n.onMouseEnter,
                        b = (0, a.Z)(n, ["className", "tooltipClassName", "children", "title", "isHidden", "analyticsEventLabel", "onMouseEnter"]),
                        k = h(),
                        y = k.classes,
                        C = k.cx,
                        Z = (0, c.Z)((0, g.useState)(!1), 2),
                        w = Z[0],
                        L = Z[1],
                        j = (0, c.Z)((0, g.useState)(!1), 2),
                        I = j[0],
                        E = j[1],
                        H = (0, u.yh)().analytics,
                        P = (0, u.wU)();
                    return (0, g.useEffect)(function() {
                        E(!0)
                    }, [w]), (0, l.jsx)(l.Fragment, {
                        children: p ? (0, l.jsx)(s.Z, {
                            className: C(y.root, t),
                            onMouseEnter: function(n) {
                                L(!0), m ? m(n) : v && H.hover({
                                    pageSection: P,
                                    eventLabel: v
                                })
                            },
                            onClick: function() {
                                v && H.click({
                                    pageSection: P,
                                    eventLabel: v
                                })
                            },
                            children: I && (0, l.jsx)(x, (0, r.Z)((0, i.Z)({
                                disableInteractive: !0,
                                title: p,
                                "data-automation": p,
                                classes: {
                                    tooltip: C(y.tooltip, o, (0, e.Z)({}, y.tooltipHidden, f)),
                                    arrow: y.arrow,
                                    popper: y.popper
                                }
                            }, b), {
                                children: d
                            })) || d
                        }) : (0, l.jsx)(l.Fragment, {
                            children: d
                        })
                    })
                }
        },
        59481: function(n, t, o) {
            o.d(t, {
                h: function() {
                    return i
                }
            });
            var e = o(85801),
                i = (0, o(12281).g)(e.Z)
        },
        12250: function(n, t, o) {
            o.d(t, {
                I: function() {
                    return f
                }
            });
            var e = o(70865),
                i = o(96670),
                r = o(52322),
                a = o(59312),
                c = o(59481),
                l = o(66358),
                s = o(34116),
                d = o(75),
                u = o(59877),
                p = o(33943),
                f = function(n) {
                    var t = n.brandCategory,
                        o = n.onClickHandler,
                        f = n.productLine,
                        g = n.withBackground,
                        h = n.tooltipPlacement,
                        x = (0, p.c)().classes,
                        v = (0, (0, u.$G)(d.tuJ).t)("common:actions_save"),
                        m = (0, e.Z)({}, t && {
                            brandCategory: t
                        }, f && {
                            productLine: f
                        });
                    return (0, r.jsx)(a.l, {
                        title: v,
                        placement: h,
                        children: (0, r.jsx)(c.h, (0, i.Z)((0, e.Z)({
                            "aria-label": v,
                            classes: {
                                root: g ? x.darkBackgroundIcon : x.iconRoot
                            },
                            labelTrack: l.bOs,
                            onClick: o,
                            rel: "nofollow",
                            size: "large",
                            disableRipple: !0
                        }, m), {
                            children: (0, r.jsx)(s.Heart, {
                                className: x.iconContainer
                            })
                        }))
                    })
                };
            f.defaultProps = {
                brandCategory: void 0,
                onClickHandler: function() {},
                withBackground: !1,
                tooltipPlacement: "top",
                productLine: void 0
            }
        },
        33943: function(n, t, o) {
            o.d(t, {
                c: function() {
                    return r
                }
            });
            var e = o(70865),
                i = o(96670),
                r = (0, o(8740).ZL)()(function(n) {
                    var t = n.tokens,
                        o = t.color,
                        r = t.spacing,
                        a = {
                            display: "flex",
                            flexDirection: "column"
                        };
                    return {
                        darkBackgroundIcon: {
                            padding: r.s,
                            marginLeft: r.xxs,
                            backgroundColor: o.gray["onyx-38"],
                            color: o.white,
                            "&:hover": {
                                backgroundColor: o.gray["onyx-60"]
                            }
                        },
                        iconContainer: (0, i.Z)((0, e.Z)({}, a), {
                            color: o.white,
                            "&:hover": {
                                color: o["white-70"]
                            }
                        }),
                        iconContainerDisabled: (0, i.Z)((0, e.Z)({}, a), {
                            color: o["white-70"]
                        }),
                        iconRoot: {
                            padding: r.s,
                            "&:hover": {
                                background: "none"
                            }
                        },
                        iconWrapper: {
                            position: "relative"
                        },
                        iconProgress: {
                            top: r.xxs,
                            left: "calc(".concat(r.xxs, ")"),
                            zIndex: 1,
                            position: "absolute",
                            color: o.white
                        },
                        iconLabel: {
                            "&:hover": {
                                color: o["white-70"]
                            },
                            color: o.white,
                            display: "flex",
                            flexDirection: "column"
                        }
                    }
                })
        },
        6514: function(n, t, o) {
            o.d(t, {
                M: function() {
                    return s
                },
                n: function() {
                    return l
                }
            });
            var e = o(50930),
                i = o(52322),
                r = o(25237),
                a = o.n(r),
                c = (0, o(8740).ZL)()(function(n) {
                    var t = n.spacing,
                        o = n.tokens,
                        e = o.color,
                        i = o.size;
                    return {
                        actionSkeleton: {
                            width: i.density.high,
                            height: i.density.high,
                            borderRadius: "100%",
                            backgroundColor: e.gray["onyx-38"],
                            marginLeft: t(1)
                        }
                    }
                }),
                l = function(n) {
                    var t = n.buttonCount,
                        o = c().classes;
                    return (0, e.Z)(Array(void 0 === t ? 3 : t).keys()).map(function(n) {
                        return (0, i.jsx)("div", {
                            className: o.actionSkeleton
                        }, "AssetActionsSkeleton-".concat(n))
                    })
                },
                s = a()(function() {
                    return Promise.all([o.e(27310), o.e(55199), o.e(23182), o.e(7668), o.e(56256), o.e(348), o.e(38032)]).then(o.bind(o, 3279)).then(function(n) {
                        return n.AssetActions
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [3279]
                        }
                    },
                    loading: function() {
                        return (0, i.jsx)(l, {})
                    },
                    ssr: !1
                })
        },
        34116: function(n, t, o) {
            o.r(t), o.d(t, {
                Heart: function() {
                    return a
                }
            });
            var e = o(70865),
                i = o(52322),
                r = (0, o(6620).Z)((0, i.jsx)("path", {
                    d: "M15.667 7.6C7.267-.96-2.92 9.427 5.48 17.987l10.187 10.387L25.84 17.987C34.28 9.334 24.093-1 15.667 7.6zM24 16.12l-8.267 8.44-8.347-8.44c-2.147-2.187-2.893-4.6-2.053-6.613.596-1.443 1.992-2.44 3.621-2.44h.062-.003c1.907.142 3.58 1.039 4.739 2.391l.008.009 1.907 1.947 1.893-1.947c1.179-1.377 2.871-2.285 4.777-2.425l.023-.001h.029c1.626 0 3.021.99 3.615 2.401l.01.026c.84 2.027.093 4.453-2.013 6.653z"
                }), "Heart.svg"),
                a = function(n) {
                    return (0, i.jsx)(r, (0, e.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        65860: function(n, t, o) {
            o.d(t, {
                a: function() {
                    return s
                }
            });
            var e = o(73180),
                i = o(37546),
                r = o(44297),
                a = o(9823),
                c = o(8740),
                l = "100px",
                s = (0, c.ZL)()(function(n) {
                    var t = n.tokens,
                        o = t.spacing,
                        c = t.color,
                        s = t.zIndex,
                        d = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).asset,
                        u = (0, a.D)().isBrandSstk,
                        p = (0, r.EK)(d),
                        f = (0, e.U)(d) && !p && u && !(0, r.k7)(d),
                        g = (0, i.Lr)(d),
                        h = (0, r.PD)(g),
                        x = (0, r.f8)(d),
                        v = u && (h || x),
                        m = f && (null == d ? void 0 : d.description.length) < 5,
                        b = "0px";
                    return h && f && (b = "35px"), f && (b = "30px"), {
                        root: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: 0,
                            zIndex: s["2"],
                            height: "100%",
                            pointerEvents: "none",
                            "& > *": {
                                pointerEvents: "auto"
                            }
                        },
                        topOverlay: {
                            position: "absolute",
                            width: "100%",
                            top: 0,
                            left: 0,
                            background: "\n      linear-gradient(\n        to bottom,\n        ".concat(c.gray["onyx-38"], " 0,\n        ").concat(c.gray["onyx-12"], " ").concat(p ? o.xl : o.l, ",\n        transparent ").concat(p ? o["3xl"] : o.xxl, "\n      )"),
                            height: l,
                            pointerEvents: "none"
                        },
                        bottomOverlay: {
                            width: "100%",
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            background: "\n        linear-gradient(\n        to top,\n        ".concat(c.gray["onyx-38"], " 0,\n        ").concat(c.gray["onyx-12"], " ").concat(o.xl, ",\n        transparent ").concat(o.xxl, "\n      )"),
                            height: l,
                            pointerEvents: "none"
                        },
                        topLeftContainer: {
                            zIndex: s["1"],
                            position: "absolute",
                            top: 0,
                            left: 0,
                            marginTop: "".concat(v ? "14px" : o.s),
                            marginLeft: "".concat(v ? o.xl : o.s)
                        },
                        topRightContainer: {
                            position: "absolute",
                            right: 0,
                            top: m ? 0 : "".concat(b),
                            zIndex: s["1"],
                            margin: o.s,
                            minWidth: "calc(100% - ".concat(o.s, " - ").concat(o.s, ")"),
                            justifyContent: "flex-end",
                            display: "flex",
                            pointerEvents: "none",
                            "& > *": {
                                pointerEvents: "auto"
                            }
                        },
                        bottomLeftContainer: {
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            zIndex: s["1"],
                            paddingLeft: o.s,
                            paddingBottom: o.s
                        },
                        bottomRightContainer: {
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            paddingRight: o.s,
                            paddingBottom: o.s,
                            zIndex: s["1"]
                        }
                    }
                })
        }
    }
]);
//# sourceMappingURL=TrackOverlay.65d016f93f672a7f.js.map