"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [63599], {
        81205: function(n, t, e) {
            e.d(t, {
                N: function() {
                    return d
                }
            });
            var r = e(47842),
                i = e(52322),
                a = e(41075),
                s = e(84038),
                o = e(13011),
                u = e(68138),
                c = e(14749),
                d = function(n) {
                    var t, e = n.xs,
                        o = n.sm,
                        d = n.md,
                        l = n.lg,
                        m = n.xl,
                        f = n.numOfSkeletonRows,
                        g = n.maxRows,
                        p = n.cardAspectRatio,
                        x = n.spacing,
                        v = n.withContainerSpacing,
                        h = (0, u.rr)(),
                        w = h.classes,
                        k = h.cx,
                        S = (0, s.ub)({
                            xs: e,
                            sm: o,
                            md: d,
                            lg: l,
                            xl: m,
                            numOfSkeletonRows: f,
                            maxRows: g,
                            withLoadingSkeletons: !0
                        }),
                        P = S.itemsPerBreakpoint,
                        R = S.gridItems,
                        b = (0, u.eD)({
                            itemsPerBreakpoint: P
                        }).classes.container;
                    return (0, i.jsx)(a.ZP, {
                        className: k((t = {}, (0, r.Z)(t, w.gridContainer, v), (0, r.Z)(t, b, P), t)),
                        style: {
                            "--customGridSpacing": "".concat(x, "px")
                        },
                        container: !0,
                        children: R.map(function(n, t) {
                            return (0, i.jsx)(a.ZP, {
                                className: k(!v && w.gridItem),
                                style: {
                                    "--customGridSpacing": "".concat(x, "px")
                                },
                                xs: e,
                                sm: o,
                                md: d,
                                lg: l,
                                xl: m,
                                item: !0,
                                children: (0, i.jsx)(c.H, {
                                    cardAspectRatio: p
                                })
                            }, "skeleton_grid_".concat(t))
                        })
                    })
                };
            d.defaultProps = {
                cardAspectRatio: o.Th,
                numOfSkeletonRows: 2,
                spacing: u.gP,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
                xl: 2,
                withContainerSpacing: !1
            }
        },
        14749: function(n, t, e) {
            e.d(t, {
                H: function() {
                    return o
                }
            });
            var r = e(52322),
                i = e(21647),
                a = e(13011),
                s = (0, e(8740).ZL)()(function(n, t) {
                    var e = t.cardAspectRatio;
                    return {
                        skeleton: {
                            paddingTop: "".concat(100 * e, "%"),
                            width: "100%"
                        }
                    }
                }),
                o = function(n) {
                    var t = s({
                        cardAspectRatio: n.cardAspectRatio
                    }).classes;
                    return (0, r.jsx)(i.Z, {
                        variant: "rectangular",
                        className: t.skeleton,
                        "data-automation": "SkeletonGridItem"
                    })
                };
            o.defaultProps = {
                cardAspectRatio: a.Th
            }
        },
        84038: function(n, t, e) {
            e.d(t, {
                ub: function() {
                    return u
                }
            });
            var r = e(50930),
                i = e(2784),
                a = e(83303),
                s = function(n) {
                    var t = n.xs,
                        e = n.sm,
                        r = n.md,
                        s = n.lg,
                        o = n.xl,
                        u = n.maxRows;
                    return (0, i.useMemo)(function() {
                        return u ? {
                            xs: (0, a.Vr)(t, u),
                            sm: (0, a.Vr)(e, u),
                            md: (0, a.Vr)(r, u),
                            lg: (0, a.Vr)(s, u),
                            xl: (0, a.Vr)(o, u)
                        } : null
                    }, [t, e, r, s, o, u])
                },
                o = function(n) {
                    var t = n.assets,
                        e = void 0 === t ? [] : t,
                        s = n.maxItems,
                        o = n.fillCemetery,
                        u = n.showSkeletonsOnLoad,
                        c = n.isGridLoading,
                        d = s && (c && u || o);
                    return (0, i.useMemo)(function() {
                        if (!d) return e;
                        var n = (0, a.yt)({
                                assets: e,
                                maxItems: s
                            }),
                            t = s ? e.slice(0, s) : e;
                        return n ? (0, r.Z)(t).concat((0, r.Z)(n)) : t
                    }, [e, d, s])
                },
                u = function(n) {
                    var t = n.assets,
                        e = n.xs,
                        r = n.sm,
                        i = n.md,
                        u = n.lg,
                        c = n.xl,
                        d = n.numOfSkeletonRows,
                        l = n.maxRows,
                        m = n.fillCemetery,
                        f = n.withLoadingSkeletons,
                        g = (0, a.pb)(t).isGridLoading,
                        p = g && d || l,
                        x = s({
                            xs: e,
                            sm: r,
                            md: i,
                            lg: u,
                            xl: c,
                            maxRows: p
                        }),
                        v = p ? x.xl : null;
                    return {
                        itemsPerBreakpoint: x,
                        gridItems: o({
                            assets: t,
                            fillCemetery: m,
                            isGridLoading: g,
                            maxItems: v,
                            showSkeletonsOnLoad: !!f || !!d
                        })
                    }
                }
        },
        83303: function(n, t, e) {
            e.d(t, {
                UP: function() {
                    return s
                },
                V$: function() {
                    return d
                },
                Vr: function() {
                    return c
                },
                XQ: function() {
                    return f
                },
                fL: function() {
                    return a
                },
                o1: function() {
                    return o
                },
                pb: function() {
                    return u
                },
                yl: function() {
                    return m
                },
                yt: function() {
                    return l
                }
            });
            var r = e(50930),
                i = "skeleton",
                a = function(n) {
                    return n.height * n.aspect
                },
                s = function(n) {
                    return n.width / n.aspect
                },
                o = function(n) {
                    return n.width / n.height
                },
                u = function(n) {
                    var t = !n,
                        e = n && !n.length;
                    return {
                        isGridLoading: t,
                        isGridEmpty: e,
                        isGridReady: !t && !e
                    }
                },
                c = function(n, t) {
                    return 12 / n * t
                },
                d = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return n.type === i
                },
                l = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.assets,
                        e = n.maxItems - (void 0 === t ? [] : t).length;
                    return e > 0 ? (0, r.Z)(Array(e)).map(function(n, t) {
                        return {
                            id: t,
                            type: i
                        }
                    }) : null
                },
                m = function(n) {
                    var t = n.defaultHeight,
                        e = n.gridSizingOptions,
                        r = n.spacing,
                        i = n.width,
                        a = null == e ? void 0 : e.find(function(n) {
                            return i >= n.containerWidth
                        });
                    return ((null == a ? void 0 : a.height) || t) - 2 * r
                },
                f = function(n) {
                    var t, e = n.activeExpansionRow,
                        r = n.asset;
                    return (null == r ? void 0 : r.id) === (null == e ? void 0 : null === (t = e.asset) || void 0 === t ? void 0 : t.id)
                }
        },
        76790: function(n, t, e) {
            e.d(t, {
                U: function() {
                    return i
                }
            });
            var r = e(25237),
                i = e.n(r)()(function() {
                    return e.e(52292).then(e.bind(e, 52292)).then(function(n) {
                        return n.CarouselNavigation
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [52292]
                        }
                    },
                    ssr: !1
                })
        },
        63599: function(n, t, e) {
            e.d(t, {
                s: function() {
                    return k
                }
            });
            var r = e(47842),
                i = e(70865),
                a = e(52322),
                s = e(81205),
                o = e(83303),
                u = e(68138),
                c = e(76790),
                d = e(60587),
                l = e(87394),
                m = e(50930),
                f = e(54073),
                g = e.n(f),
                p = e(2784),
                x = e(61487),
                v = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 230,
                        t = window.innerWidth,
                        e = (0, l.Z)((0, p.useState)(t), 2),
                        r = e[0],
                        i = e[1];
                    return (0, p.useEffect)(function() {
                        var t = function() {
                            return i(window.innerWidth)
                        };
                        return window.addEventListener("resize", g()(t, n)),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }, [t, !0, r, n]), r
                },
                h = function(n) {
                    var t = n.windowWidth,
                        e = n.perPage,
                        r = n.perPageSSR,
                        i = (0, l.Z)((0, p.useState)(r), 2),
                        a = i[0],
                        s = i[1];
                    return (0, p.useEffect)(function() {
                        s((0, m.Z)(e).sort(function(n, t) {
                            return t.breakpoint - n.breakpoint
                        }).find(function(n) {
                            return n.breakpoint <= t
                        }))
                    }, [t, e]), a
                },
                w = function(n) {
                    var t = n.assets,
                        e = n.perPage,
                        r = n.perPageSSR,
                        i = (0, l.Z)((0, p.useState)(0), 2),
                        a = i[0],
                        s = i[1],
                        o = (0, l.Z)((0, p.useState)(0), 2),
                        u = o[0],
                        c = o[1],
                        d = h({
                            windowWidth: v(),
                            perPage: e,
                            perPageSSR: r
                        }),
                        m = d.show,
                        f = d.navigate,
                        g = 100 / m,
                        w = t && t.length - 1,
                        k = (w + 1 - m) * g,
                        S = (0, x.kr)({
                            itemIndex: u,
                            maxIndex: w,
                            translateX: a,
                            maxTranslateAmount: k
                        });
                    return {
                        itemWidthPercentage: g,
                        isPrevDisabled: (0, x.kq)({
                            itemIndex: u,
                            translateX: a
                        }),
                        isNextDisabled: S,
                        onPrevious: function() {
                            s(a - g * f), c(u - f)
                        },
                        onNext: function() {
                            s(a + g * f), c(u + f)
                        },
                        showNavigation: (0, x.AW)({
                            maxTranslateAmount: k
                        }),
                        translateX: a
                    }
                },
                k = function(n) {
                    var t = n.AssetItem,
                        e = n.assetItemProps,
                        l = n.assets,
                        m = n.hasTextBelowCards,
                        f = n.isVertical,
                        g = n.maxRows,
                        p = n.numOfSkeletonRows,
                        x = n.perPage,
                        v = n.perPageSSR,
                        h = n.trackAnalytics,
                        k = n.withLoadingSkeletons,
                        S = n.withGridItemSpacing,
                        P = n.withOverlay,
                        R = n.xl,
                        b = (0, u.rr)().classes,
                        y = (0, d.t)(),
                        I = y.classes,
                        N = y.cx,
                        A = w({
                            assets: l,
                            perPage: x,
                            perPageSSR: v
                        }),
                        Z = A.onNext,
                        G = A.onPrevious,
                        L = A.isNextDisabled,
                        O = A.isPrevDisabled,
                        C = A.translateX,
                        j = A.itemWidthPercentage,
                        W = A.showNavigation,
                        T = "".concat(j, "%"),
                        V = (0, o.pb)(l),
                        E = V.isGridEmpty,
                        X = V.isGridLoading,
                        _ = V.isGridReady;
                    return E ? null : (0, a.jsx)("div", {
                        className: I.root,
                        children: (0, a.jsxs)("div", {
                            className: N(b.gridContainer, I.container),
                            style: {
                                "--customGridSpacing": "".concat(u.gP, "px")
                            },
                            children: [X && k && (0, a.jsx)(s.N, {
                                numOfSkeletonRows: p,
                                maxRows: g,
                                xl: R
                            }), _ && (0, a.jsxs)(a.Fragment, {
                                children: [W && (0, a.jsx)(c.U, {
                                    onPrevious: G,
                                    onNext: Z,
                                    trackAnalytics: h.navigation,
                                    isNextDisabled: L,
                                    isPrevDisabled: O
                                }), (0, a.jsx)("div", {
                                    className: I.carousel,
                                    style: {
                                        transform: "translateX(-".concat(C, "%)")
                                    },
                                    children: l.map(function(n, s) {
                                        return (0, a.jsx)("div", {
                                            className: N((0, r.Z)({}, b.gridItem, S)),
                                            style: {
                                                width: T,
                                                minWidth: T,
                                                "--customGridSpacing": "".concat(u.gP, "px")
                                            },
                                            children: (0, a.jsx)(t, (0, i.Z)({
                                                gridItems: l,
                                                index: s,
                                                item: n,
                                                isVertical: f,
                                                withOverlay: P,
                                                hasTextBelowCards: m
                                            }, e))
                                        }, "gridItem_".concat(n.id, "_").concat(s))
                                    })
                                })]
                            })]
                        })
                    })
                };
            k.defaultProps = {
                assets: void 0,
                assetItemProps: {},
                isVertical: !1,
                hasTextBelowCards: !1,
                maxRows: 3,
                numOfSkeletonRows: 1,
                perPage: [{
                    breakpoint: 0,
                    show: 2,
                    navigate: 1
                }, {
                    breakpoint: 600,
                    show: 3,
                    navigate: 1
                }, {
                    breakpoint: 1024,
                    show: 4,
                    navigate: 1
                }, {
                    breakpoint: 1280,
                    show: 4,
                    navigate: 1
                }],
                trackAnalytics: {
                    navigation: {
                        next: {},
                        previous: {}
                    }
                },
                perPageSSR: {
                    breakpoint: 0,
                    show: 4,
                    navigate: 1
                },
                withGridItemSpacing: !1,
                withLoadingSkeletons: !0,
                withOverlay: !0,
                xl: 1
            }
        },
        60587: function(n, t, e) {
            e.d(t, {
                t: function() {
                    return i
                }
            });
            var r = e(47842),
                i = (0, e(8740).ZL)()(function(n) {
                    var t = n.breakpoints,
                        e = n.transitions;
                    return {
                        root: {
                            position: "relative"
                        },
                        container: (0, r.Z)({
                            flexWrap: "wrap",
                            overflow: "hidden"
                        }, t.down("md"), {
                            overflow: "auto"
                        }),
                        carousel: {
                            display: "flex",
                            transition: e.create("transform", {
                                easing: e.easing.easeInOut,
                                duration: e.duration.standard
                            })
                        }
                    }
                })
        },
        61487: function(n, t, e) {
            e.d(t, {
                AW: function() {
                    return a
                },
                kq: function() {
                    return i
                },
                kr: function() {
                    return r
                }
            });
            var r = function(n) {
                    var t = n.itemIndex,
                        e = n.maxIndex,
                        r = n.translateX,
                        i = n.maxTranslateAmount;
                    return t >= e || r >= i
                },
                i = function(n) {
                    var t = n.itemIndex,
                        e = n.translateX;
                    return t <= 0 || e <= 0
                },
                a = function(n) {
                    return n.maxTranslateAmount > 0
                }
        }
    }
]);
//# sourceMappingURL=63599.3715ff02a635e4bc.js.map