(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71201], {
        51242: function(e, t, n) {
            var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = i
        },
        37772: function(e, t, n) {
            var i = n(51242),
                r = "object" == typeof self && self && self.Object === Object && self,
                s = i || r || Function("return this")();
            e.exports = s
        },
        54073: function(e, t, n) {
            var i = n(29259),
                r = n(61100),
                s = n(7642),
                a = Math.max,
                o = Math.min;
            e.exports = function(e, t, n) {
                var u, c, l, d, f, h, v = 0,
                    p = !1,
                    m = !1,
                    g = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function x(t) {
                    var n = u,
                        i = c;
                    return u = c = void 0, v = t, d = e.apply(i, n)
                }

                function I(e) {
                    var n = e - h,
                        i = e - v;
                    return void 0 === h || n >= t || n < 0 || m && i >= l
                }

                function w() {
                    var e, n, i, s = r();
                    if (I(s)) return b(s);
                    f = setTimeout(w, (e = s - h, n = s - v, i = t - e, m ? o(i, l - n) : i))
                }

                function b(e) {
                    return (f = void 0, g && u) ? x(e) : (u = c = void 0, d)
                }

                function k() {
                    var e, n = r(),
                        i = I(n);
                    if (u = arguments, c = this, h = n, i) {
                        if (void 0 === f) return v = e = h, f = setTimeout(w, t), p ? x(e) : d;
                        if (m) return clearTimeout(f), f = setTimeout(w, t), x(h)
                    }
                    return void 0 === f && (f = setTimeout(w, t)), d
                }
                return t = s(t) || 0, i(n) && (p = !!n.leading, l = (m = "maxWait" in n) ? a(s(n.maxWait) || 0, t) : l, g = "trailing" in n ? !!n.trailing : g), k.cancel = function() {
                    void 0 !== f && clearTimeout(f), v = 0, u = h = c = f = void 0
                }, k.flush = function() {
                    return void 0 === f ? d : b(r())
                }, k
            }
        },
        29259: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        61100: function(e, t, n) {
            var i = n(37772);
            e.exports = function() {
                return i.Date.now()
            }
        },
        7642: function(e) {
            e.exports = function(e) {
                return e
            }
        },
        86292: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return P
                }
            });
            var i = n(70865),
                r = n(96670),
                s = n(87394),
                a = n(52322),
                o = n(9390),
                u = n(79436),
                c = n(96225),
                l = n(66358),
                d = n(33301),
                f = n(23490),
                h = n(44297),
                v = n(42005),
                p = n(57048),
                m = n(89522),
                g = n(92405),
                x = n(776),
                I = n(96109),
                w = n(2784),
                b = (0, n(8740).ZL)()(function(e) {
                    var t = e.palette,
                        n = e.tokens.spacing;
                    return {
                        link: {
                            position: "absolute",
                            overflow: "hidden",
                            display: "block",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            zIndex: 2,
                            "&:focus-visible": {
                                border: "".concat(n.xs, " solid ").concat(t.primary.main),
                                outline: 0
                            }
                        },
                        button: {
                            all: "unset",
                            position: "absolute",
                            overflow: "hidden",
                            display: "block",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            zIndex: 2,
                            cursor: "pointer"
                        }
                    }
                }),
                k = function(e) {
                    var t, n = e.hasExpansionRows,
                        I = e.withLink,
                        w = e.inView,
                        k = e.asset,
                        P = e.gridItems,
                        y = e.getRoutePathProps,
                        C = e.itemIndex,
                        j = e.openGridItemInNewTab,
                        L = e.withProductClickTracking,
                        Z = e.withProductClickWhereYouLeftOffTracking,
                        T = e.gridItemLinkClassName,
                        E = e.rowIndex,
                        _ = e.handleClick,
                        A = b(),
                        G = A.classes,
                        O = A.cx,
                        S = (0, s.Z)((0, m.KC)({
                            asset: k,
                            gridItems: P,
                            getRoutePathProps: y,
                            itemIndex: C
                        }), 2),
                        R = S[0],
                        N = S[1],
                        M = (0, v.w)(),
                        F = (0, p.D)(),
                        D = (0, f.N)().isBot,
                        z = (0, x.wU)(),
                        H = w && R ? o.r : u.n,
                        B = (0, g.p)(d.Y$, !1, !1, !0),
                        V = (0, h.f8)(k) && B && (null === (t = k.displays["600W"]) || void 0 === t ? void 0 : t.src);
                    return I ? (0, a.jsx)(H, (0, r.Z)((0, i.Z)({
                        className: O(G.link, T),
                        href: R,
                        target: j ? "_blank" : void 0,
                        "data-automation": "AssetGrids_GridItemClickableArea_link"
                    }, H !== u.n && {
                        linkAs: N
                    }), {
                        onClick: D ? null : function(e) {
                            n && e.preventDefault(), L && M((0, r.Z)((0, i.Z)({
                                asset: k,
                                gridItems: P,
                                eventLabel: l.D7F
                            }, Z ? {
                                listId: l.YQz
                            } : {}), {
                                pageSection: z
                            })), Z && F({
                                eventLabel: l.LRD
                            }), _({
                                asset: k,
                                rowIndex: E
                            })
                        },
                        "aria-label": k.title || k.description,
                        tabIndex: 0,
                        children: V && (0, a.jsx)(c.E, {
                            asset: k
                        })
                    })) : null
                };
            k.defaultProps = {
                openGridItemInNewTab: !1,
                withLink: !0,
                withProductClickTracking: !0,
                withProductClickWhereYouLeftOffTracking: !1,
                hasExpansionRows: !1,
                rowIndex: null,
                gridItemLinkClassName: null,
                handleClick: function() {},
                getRoutePathProps: I.r
            };
            var P = (0, w.memo)(k)
        },
        34354: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return L
                }
            });
            var i = n(47842),
                r = n(70865),
                s = n(96670),
                a = n(26297),
                o = n(87394),
                u = n(52322),
                c = n(21647),
                l = n(68043),
                d = n(86292),
                f = n(39232),
                h = n(63256),
                v = n(25204),
                p = n(33967),
                m = n(75298),
                g = n(11800),
                x = n(96109),
                I = n(68138),
                w = n(2784),
                b = n(8740),
                k = n(39860),
                P = function(e) {
                    return "string" == typeof e ? e : Math.floor((e - 1e-5) * 1e3) / 1e3
                },
                y = (0, b.ZL)()(function(e) {
                    var t = e.palette,
                        n = e.tokens,
                        i = n.color,
                        r = n.spacing;
                    return {
                        item: {
                            display: "block",
                            overflow: "hidden",
                            position: "relative"
                        },
                        link: {
                            position: "absolute",
                            overflow: "hidden",
                            display: "block",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            zIndex: 2,
                            "&:focus-visible": {
                                border: "".concat(r.xs, " solid ").concat(t.primary.main),
                                outline: 0
                            }
                        },
                        background: {
                            backgroundColor: i.black
                        },
                        withAspectRatioSizing: {
                            position: "absolute",
                            width: "100%",
                            height: "100%"
                        },
                        assetItemContainer: {
                            width: "100%",
                            height: "100%"
                        },
                        blankTemplateWrapper: {
                            display: "flex",
                            height: "100%"
                        },
                        assetItemSkeleton: {
                            height: "100%"
                        }
                    }
                }),
                C = function(e, t) {
                    var n, i = (0, p.a)({
                            contributor: {
                                id: e.contributorId
                            }
                        }),
                        r = i.isLoading,
                        s = i.isAssetFreeToDownload;
                    return !r && ((null == t ? void 0 : null === (n = t.restrictions) || void 0 === n ? void 0 : n.isOverlayRestricted) || s)
                },
                j = function(e) {
                    var t, n, p, x = e.asset,
                        b = e.AssetItem,
                        j = e.assetItemProps,
                        L = e.AssetOverlay,
                        Z = e.assetOverlayProps,
                        T = e.getRoutePathProps,
                        E = e.gridItemClassName,
                        _ = e.gridItemLinkClassName,
                        A = e.gridItems,
                        G = e.height,
                        O = e.isInfiniteGrid,
                        S = e.isPopperOpen,
                        R = e.itemIndex,
                        N = e.rowIndex,
                        M = e.licensingAssetId,
                        F = e.listId,
                        D = e.openGridItemInNewTab,
                        z = e.spacing,
                        H = e.width,
                        B = e.withFixedDimensions,
                        V = e.withSsr,
                        W = e.withItemBackground,
                        q = e.withLink,
                        Y = e.withProductClickTracking,
                        K = e.eagerAssetOverlayCount,
                        X = e.useCssGrid,
                        J = e.hasExpansionRows,
                        U = e.handleClick,
                        Q = e.skeletonOnly,
                        $ = (0, a.Z)(e, ["asset", "AssetItem", "assetItemProps", "AssetOverlay", "assetOverlayProps", "getRoutePathProps", "gridItemClassName", "gridItemLinkClassName", "gridItems", "height", "isInfiniteGrid", "isPopperOpen", "itemIndex", "rowIndex", "licensingAssetId", "listId", "openGridItemInNewTab", "spacing", "width", "withFixedDimensions", "withSsr", "withItemBackground", "withLink", "withProductClickTracking", "eagerAssetOverlayCount", "useCssGrid", "hasExpansionRows", "handleClick", "skeletonOnly"]),
                        ee = y({
                            width: H,
                            height: G
                        }),
                        et = ee.classes,
                        en = ee.cx,
                        ei = (0, v.u)(),
                        er = (0, k.T)({
                            asset: x
                        }),
                        es = er.isHovered,
                        ea = er.setIsHovered,
                        eo = er.onMouseEnter,
                        eu = er.onMouseLeave,
                        ec = (0, o.Z)((0, w.useState)(!0), 2),
                        el = ec[0],
                        ed = ec[1],
                        ef = (0, o.Z)((0, m.I)({
                            triggerOnce: X || !O,
                            defaultIsVisible: R < K
                        }), 2),
                        eh = ef[0],
                        ev = ef[1],
                        ep = (0, k.t)({
                            withSsr: V
                        }),
                        em = ep.isAssetLoaded,
                        eg = ep.setIsAssetLoaded,
                        ex = (0, o.Z)((0, w.useState)({
                            height: P(G),
                            width: P(H)
                        }), 2),
                        eI = ex[0],
                        ew = ex[1];
                    (0, g.L)(function() {
                        B && !X && ew({
                            height: G,
                            width: H
                        }), eh && F && ei({
                            listId: F,
                            position: R,
                            asset: x
                        }), !X && O && ed(eh)
                    }, [G, H, B, X, Q, ei, eh, R, F, x, O]);
                    var eb = (0, h.r8)(x, !0),
                        ek = l.hq.SIZE + l.hq.STEP;
                    if (eb.height !== ek) {
                        var eP = (eb.height - ek) / eb.height;
                        eb.height = ek, eb.width -= eb.width * eP
                    }
                    var ey = (0, I.cK)(eb).classes,
                        eC = C(x, Z);
                    return (0, u.jsx)("div", {
                        role: "img",
                        "aria-label": "Asset ".concat(null !== (n = x.description) && void 0 !== n ? n : "").trim(),
                        "data-automation": "AssetGrids_GridItemContainer_div",
                        onMouseEnter: eo,
                        onMouseLeave: eu,
                        ref: ev,
                        style: (0, s.Z)((0, r.Z)({}, B && !X && eI, z && {
                            margin: "".concat(z, "px")
                        }), {
                            "--itemFlexBasis": (0, I.OM)(0, eb),
                            "--itemFlexBasisLg": (0, I.OM)(l.hq.STEP, eb),
                            "--itemFlexBasisMd": (0, I.OM)(2 * l.hq.STEP, eb),
                            "--itemFlexBasisSm": (0, I.OM)(4 * l.hq.STEP, eb),
                            "--itemFlexGrow": (0, I.kw)(eb)
                        }),
                        className: en(et.item, E, X && ey.item, W && em && et.background),
                        children: el && (0, u.jsxs)(u.Fragment, {
                            children: [!Q && (0, u.jsx)(d.J, {
                                asset: x,
                                inView: eh,
                                withLink: q,
                                rowIndex: N,
                                itemIndex: R,
                                gridItems: A,
                                handleClick: U,
                                hasExpansionRows: J,
                                getRoutePathProps: T,
                                gridItemLinkClassName: _,
                                openGridItemInNewTab: D,
                                withProductClickTracking: Y,
                                withProductClickWhereYouLeftOffTracking: Z.withProductClickWhereYouLeftOffTracking
                            }), (eh || R < K) && !eC && !!L && !Q && (0, u.jsx)(L, (0, r.Z)({
                                listId: F,
                                asset: x,
                                gridItems: A,
                                isHovered: es,
                                setIsHovered: ea,
                                isAssetLoaded: em,
                                itemIndex: R,
                                licensingAssetId: M,
                                width: H
                            }, Z, $)), b && (0, u.jsxs)(u.Fragment, {
                                children: [!Q && (0, u.jsx)("div", {
                                    style: {
                                        "--assetItemContainerDisplay": (0, I.wj)(eb) ? "flex" : null,
                                        "--assetItemContainerAlignItems": (0, I.wj)(eb) ? "center" : null
                                    },
                                    className: en(et.assetItemContainer, X && ey.assetItemContainer, (0, i.Z)({}, et.withAspectRatioSizing, !B)),
                                    children: (null == j ? void 0 : null === (t = j.holding) || void 0 === t ? void 0 : t.isLoading) ? (0, u.jsx)(c.Z, {
                                        variant: "rounded",
                                        className: et.assetItemSkeleton
                                    }) : (0, u.jsx)("div", {
                                        style: {
                                            "--letterboxingWrapperPadding": X && (0, I.wj)(eb) ? "".concat((0, I.Px)(eb), "%") : null
                                        },
                                        className: en((p = {}, (0, i.Z)(p, ey.letterboxingWrapper, X && !(0, I.wj)(eb)), (0, i.Z)(p, ey.letterboxingWrapperWithPseudo, X && (0, I.wj)(eb)), (0, i.Z)(p, et.blankTemplateWrapper, (null == x ? void 0 : x.type) === f.C_), p)),
                                        children: (0, u.jsx)(b, (0, r.Z)({
                                            asset: x,
                                            gridItems: A,
                                            isHovered: S || es,
                                            onLoadHandler: eg,
                                            withSsr: V,
                                            itemIndex: R,
                                            useCssGrid: X
                                        }, j, $))
                                    })
                                }), !B && (0, u.jsx)("div", {
                                    style: {
                                        paddingBottom: H && G && "".concat(G / H * 100, "%")
                                    }
                                }), X && (0, u.jsx)("div", {
                                    style: {
                                        paddingBottom: "".concat((eb.height / (0, I.hq)(eb) * 100).toFixed(3), "%")
                                    }
                                })]
                            })]
                        })
                    })
                };
            j.defaultProps = {
                AssetOverlay: null,
                assetItemProps: {},
                assetOverlayProps: {},
                eagerAssetOverlayCount: 0,
                getRoutePathProps: x.r,
                gridItemClassName: null,
                gridItemLinkClassName: null,
                isInfiniteGrid: !1,
                isPopperOpen: !1,
                licensingAssetId: "",
                listId: "",
                openGridItemInNewTab: !1,
                spacing: 0,
                withFixedDimensions: !0,
                withItemBackground: !1,
                withLink: !0,
                withProductClickTracking: !0,
                withSsr: !1,
                hasExpansionRows: !1,
                rowIndex: null,
                handleClick: function() {}
            };
            var L = (0, w.memo)(j)
        },
        39860: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return u
                },
                t: function() {
                    return c
                }
            });
            var i = n(87394),
                r = n(44297),
                s = n(54073),
                a = n.n(s),
                o = n(2784),
                u = function(e) {
                    var t = e.asset,
                        n = (0, i.Z)((0, o.useState)(!1), 2),
                        s = n[0],
                        u = n[1],
                        c = (0, r.Am)(t),
                        l = function() {
                            return u(!0)
                        },
                        d = a()(l, 200);
                    return {
                        isHovered: s,
                        setIsHovered: u,
                        onMouseEnter: c ? d : l,
                        onMouseLeave: function() {
                            c && d.cancel(), u(!1)
                        }
                    }
                },
                c = function(e) {
                    var t = e.withSsr,
                        n = (0, i.Z)((0, o.useState)(t), 2);
                    return {
                        isAssetLoaded: n[0],
                        setIsAssetLoaded: n[1]
                    }
                }
        },
        39724: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return Z
                }
            });
            var i, r = n(70865),
                s = n(52322),
                a = n(39232),
                o = n(32456),
                u = n(62021),
                c = n(52131),
                l = n(25237),
                d = n.n(l),
                f = d()(function() {
                    return Promise.all([n.e(27310), n.e(44675)]).then(n.bind(n, 44675)).then(function(e) {
                        return e.VideoGridItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [44675]
                        }
                    },
                    ssr: !0,
                    loading: c.S
                }),
                h = function(e) {
                    var t = e.initialProps;
                    return (0, s.jsx)(f, (0, r.Z)({}, t))
                },
                v = n(47842),
                p = n(88849),
                m = n(2784),
                g = n(96670),
                x = {
                    flagID: "seo-1351-video-srp-autoplay-mobile",
                    id: "SEO-1351",
                    name: "Video SRPs will autoplay on mobile",
                    treatments: (i = {}, (0, v.Z)(i, p.NM, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, m.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, s.jsx)(h, {
                            initialProps: n
                        })
                    }), (0, v.Z)(i, p.vG, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, m.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, s.jsx)(h, {
                            initialProps: (0, g.Z)((0, r.Z)({}, n), {
                                seo1351Treatment: p.vG
                            })
                        })
                    }), (0, v.Z)(i, p._Z, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, m.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, s.jsx)(h, {
                            initialProps: (0, g.Z)((0, r.Z)({}, n), {
                                seo1351Treatment: p._Z
                            })
                        })
                    }), i)
                },
                I = function() {
                    return (0, s.jsx)(s.Fragment, {})
                },
                w = function(e) {
                    return (0, s.jsx)(u.K, {
                        config: x,
                        initialProps: e,
                        Portal: h,
                        SkeletonLoader: I
                    })
                },
                b = n(44297),
                k = n(94909),
                P = d()(function() {
                    return n.e(91794).then(n.bind(n, 91794)).then(function(e) {
                        return e.BlankTemplateAssetItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [91794]
                        }
                    },
                    ssr: !0,
                    loading: c.S
                }),
                y = n(58647),
                C = d()(function() {
                    return Promise.all([n.e(79637), n.e(45294)]).then(n.bind(n, 8948)).then(function(e) {
                        return e.MusicGridItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8948]
                        }
                    },
                    ssr: !0,
                    loading: c.S
                }),
                j = d()(function() {
                    return n.e(39730).then(n.bind(n, 39730)).then(function(e) {
                        return e.TemplateGridItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [39730]
                        }
                    },
                    ssr: !0,
                    loading: c.S
                }),
                L = n(21030),
                Z = function(e) {
                    var t = e.asset,
                        n = (0, b.Tp)(t),
                        i = (0, k.d)({
                            breakpoint: "sm"
                        });
                    switch (n) {
                        case a.pX:
                            return i ? (0, s.jsx)(w, (0, r.Z)({}, e)) : (0, s.jsx)(L.x, (0, r.Z)({}, e));
                        case a.A7:
                            return (0, s.jsx)(L.x, (0, r.Z)({}, e));
                        case a.xF:
                        case a.tn:
                            return (0, s.jsx)(C, (0, r.Z)({}, e));
                        case a.k4:
                        case o.du:
                        case a.oI:
                        case a.nX:
                        case a.Nk:
                        case a.zo:
                            return (0, s.jsx)(y.N, (0, r.Z)({}, e));
                        case a.C_:
                            return (0, s.jsx)(P, (0, r.Z)({}, e));
                        case a.hv:
                            return (0, s.jsx)(j, (0, r.Z)({}, e));
                        default:
                            return (0, s.jsx)(c.S, {})
                    }
                }
        },
        52131: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return a
                }
            });
            var i = n(52322),
                r = n(21647),
                s = (0, n(8740).ZL)()(function(e) {
                    return {
                        skeleton: {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            zIndex: -1,
                            backgroundColor: e.palette.background.default
                        }
                    }
                }),
                a = function() {
                    var e = s().classes;
                    return (0, i.jsx)("div", {
                        className: e.skeleton,
                        children: (0, i.jsx)(r.Z, {
                            variant: "rectangular",
                            height: "100%",
                            width: "100%",
                            "data-automation": "ThumbnailSkeleton"
                        })
                    })
                }
        },
        58647: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return a
                }
            });
            var i = n(25237),
                r = n.n(i),
                s = n(52131),
                a = r()(function() {
                    return n.e(16354).then(n.bind(n, 16354)).then(function(e) {
                        return e.ImageGridItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16354]
                        }
                    },
                    ssr: !0,
                    loading: s.S
                })
        },
        21030: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return a
                }
            });
            var i = n(25237),
                r = n.n(i),
                s = n(52131),
                a = r()(function() {
                    return Promise.all([n.e(27310), n.e(13417)]).then(n.bind(n, 13417)).then(function(e) {
                        return e.VideoGridItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [13417]
                        }
                    },
                    ssr: !0,
                    loading: s.S
                })
        },
        9938: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return b
                }
            });
            var i = n(70865),
                r = n(52322),
                s = n(25237),
                a = n.n(s),
                o = a()(function() {
                    return Promise.all([n.e(34095), n.e(68555), n.e(7668), n.e(55053)]).then(n.bind(n, 98927)).then(function(e) {
                        return e.ImageAssetItemOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98927]
                        }
                    },
                    ssr: !0
                }),
                u = a()(function() {
                    return Promise.all([n.e(68555), n.e(46454), n.e(14315)]).then(n.bind(n, 4407)).then(function(e) {
                        return e.TemplateAssetItemOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4407]
                        }
                    },
                    ssr: !0
                }),
                c = n(69639),
                l = n(39232),
                d = n(44297),
                f = n(9823),
                h = n(94909),
                v = n(43110),
                p = a()(function() {
                    return Promise.all([n.e(68555), n.e(46454), n.e(95489)]).then(n.bind(n, 72690)).then(function(e) {
                        return e.AssetItemOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [72690]
                        }
                    },
                    ssr: !0
                }),
                m = a()(function() {
                    return Promise.all([n.e(68555), n.e(46454), n.e(73449)]).then(n.bind(n, 64533)).then(function(e) {
                        return e.EnterpriseAssetItemOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64533]
                        }
                    },
                    ssr: !0
                }),
                g = a()(function() {
                    return n.e(31421).then(n.bind(n, 14770)).then(function(e) {
                        return e.TrackOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14770]
                        }
                    },
                    ssr: !0
                }),
                x = a()(function() {
                    return Promise.all([n.e(27310), n.e(81503), n.e(41075), n.e(34095), n.e(3465), n.e(68555), n.e(7668), n.e(55053), n.e(49151)]).then(n.bind(n, 25508)).then(function(e) {
                        return e.CreateTemplateOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [25508]
                        }
                    },
                    ssr: !0
                }),
                I = a()(function() {
                    return Promise.all([n.e(27310), n.e(81503), n.e(41075), n.e(34095), n.e(3465), n.e(68555), n.e(7668), n.e(55053), n.e(49151)]).then(n.bind(n, 64980)).then(function(e) {
                        return e.ExperimentCVRT1059
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64980]
                        }
                    },
                    ssr: !0
                }),
                w = function(e) {
                    var t = e.asset,
                        n = (0, d._L)(t),
                        s = (0, h.d)(),
                        a = (0, v.B)();
                    switch (n) {
                        case l.tn:
                        case l.xF:
                            return (0, r.jsx)(g, (0, i.Z)({}, e));
                        case l.C_:
                        case l.zo:
                            return (0, r.jsx)(x, (0, i.Z)({}, e));
                        case l.k4:
                            return s || a ? (0, r.jsx)(o, (0, i.Z)({}, e)) : (0, r.jsx)(I, (0, i.Z)({}, e));
                        case l.hv:
                            return (0, r.jsx)(u, (0, i.Z)({}, e));
                        case l.Nk:
                            return (0, r.jsx)(c.z, (0, i.Z)({}, e));
                        default:
                            return (0, r.jsx)(p, (0, i.Z)({}, e))
                    }
                },
                b = function(e) {
                    var t = (0, f.D)().isBrandEnterprise,
                        n = (0, v.B)(),
                        s = e.asset;
                    if (t) {
                        if (void 0 === n) return null;
                        if (n) return (0, d.t1)(s) ? (0, r.jsx)(c.z, (0, i.Z)({}, e)) : s.type === l.zo ? (0, r.jsx)(x, (0, i.Z)({}, e)) : (0, r.jsx)(m, (0, i.Z)({}, e))
                    }
                    return (0, r.jsx)(w, (0, i.Z)({
                        isUserLoggedIn: n
                    }, e))
                }
        },
        71201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MasonryAssetGridItem: function() {
                    return o
                }
            });
            var i = n(52322),
                r = n(34354),
                s = n(39724),
                a = n(9938),
                o = function(e) {
                    var t, n, o, u, c = e.item,
                        l = e.items,
                        d = e.onAssetModalHandler,
                        f = e.addToCartViewsHandler,
                        h = e.addToCollectionViewsHandler,
                        v = e.compLicensingHandler,
                        p = e.itemIndex,
                        m = e.showAssetTypeIcon;
                    return (0, i.jsx)(r.e, {
                        AssetItem: s.k,
                        AssetOverlay: a.B,
                        assetOverlayProps: {
                            showAssetTypeIcon: m,
                            onAssetModalHandler: d,
                            addToCartViewsHandler: f,
                            addToCollectionViewsHandler: h,
                            compLicensingHandler: v
                        },
                        gridItems: l,
                        asset: c,
                        itemIndex: p,
                        height: c.height || (null === (t = Object.values(c.sizes || {})) || void 0 === t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.height),
                        width: c.width || (null === (o = Object.values(c.sizes || {})) || void 0 === o ? void 0 : null === (u = o[0]) || void 0 === u ? void 0 : u.width),
                        withFixedDimensions: !1
                    }, c.id)
                };
            o.defaultProps = {
                showAssetTypeIcon: !0
            }
        },
        69639: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return r
                }
            });
            var i = n(25237),
                r = n.n(i)()(function() {
                    return Promise.all([n.e(27310), n.e(55199), n.e(23182), n.e(97993), n.e(50288), n.e(98318)]).then(n.bind(n, 14138)).then(function(e) {
                        return e.GenerateAssetItemOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14138]
                        }
                    },
                    ssr: !0
                })
        },
        96225: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return l
                }
            });
            var i = n(52322),
                r = n(67550),
                s = n(2784),
                a = n(8740),
                o = JSON.parse('{"productId":"2471210954516338071","name":"Guitar","signature_image":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","initialImage":"G03","sprites_300":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-300/atlas-300.jpg","sprites_600":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/atlas-600.jpg","displays":{"600W":{"src":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","width":600,"height":600}},"extensions":{"atlas":{"camera_type_code":"full_spinner"}},"atlas":{"camera_type_code":"full_spinner"}}'),
                u = n(88351),
                c = (0, a.ZL)()(function(e) {
                    return {
                        canvasContainer: {
                            width: "100%",
                            position: "relative",
                            outline: 0,
                            borderColor: e.palette.border1Color,
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center"
                        },
                        canvas: {
                            width: "100%",
                            height: "100%"
                        }
                    }
                }),
                l = function(e) {
                    var t = e.asset,
                        n = e.className,
                        a = c(),
                        o = a.classes,
                        l = a.cx,
                        d = (0, s.useRef)(null);
                    return (0, u.k)({
                        asset: t,
                        canvasRef: d,
                        autoRotate: !0
                    }), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(r.Z, {
                            className: l(o.canvasContainer, n),
                            children: (0, i.jsx)("canvas", {
                                ref: d,
                                className: o.canvas,
                                width: 600,
                                height: 600
                            })
                        })
                    })
                };
            l.defaultProps = {
                asset: o
            }
        },
        88351: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return m
                }
            });
            var i = n(87394),
                r = n(2784),
                s = n(98788),
                a = n(5163),
                o = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
                u = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16"],
                c = ["B", "C", "D", "E", "F", "G", "H", "I"],
                l = function(e) {
                    var t = e.imageIndex,
                        n = e.canvasRef,
                        i = e.onLoad,
                        r = e.imagePath;
                    if (n.current) {
                        var s = n.current,
                            a = s.getContext("2d"),
                            o = "".concat(r).concat(t, ".jpg"),
                            u = new Image;
                        u.src = o, u.onload = function() {
                            i(t), a.drawImage(u, 0, 0, s.width, s.height)
                        }
                    }
                },
                d = function(e) {
                    var t, n = e.imageIndexes,
                        i = e.setLoading,
                        r = e.imagePath,
                        o = 0;
                    n.forEach((t = (0, s.Z)(function(e) {
                        var t;
                        return (0, a.__generator)(this, function(s) {
                            return (t = new Image).src = "".concat(r).concat(e, ".jpg"), t.onload = function() {
                                i(Math.round(100 * (o += 1) / n.length))
                            }, [2]
                        })
                    }), function(e) {
                        return t.apply(this, arguments)
                    }))
                },
                f = function(e) {
                    var t = e.latitudes,
                        n = e.longitudes,
                        i = [];
                    return t.forEach(function(e) {
                        n.forEach(function(t) {
                            i.push(e + t)
                        })
                    }), {
                        imageIndexes: i
                    }
                },
                h = function(e) {
                    var t = e.latitudes,
                        n = e.longitudes,
                        i = e.currentImageIndex,
                        r = void 0 === i ? "" : i,
                        s = e.vertical,
                        a = e.horizontal,
                        o = r.substring(0, 1),
                        u = r.substring(1),
                        c = t.indexOf(o),
                        l = n.indexOf(u);
                    return c -= s, l -= a, c < 0 ? c = 0 : c >= t.length && (c = t.length - 1), l < 0 ? l += n.length : l >= n.length && (l -= n.length), t[c] + n[l]
                },
                v = function(e) {
                    var t = e.asset,
                        n = t.validLatitudes,
                        i = t.cameraType;
                    return n || ("top_half" === i || "half_spinner" === i ? c : o)
                },
                p = function(e) {
                    var t, n, i = e.imageSrc;
                    return (null == i ? void 0 : i.split("jpeg-600/").length) > 1 ? (null === (t = null == i ? void 0 : i.split("jpeg-600/")[1]) || void 0 === t ? void 0 : t.split(".jpg")[0]) || "H01" : (null === (n = null == i ? void 0 : i.split("previews/")[1]) || void 0 === n ? void 0 : n.split("-")[0]) || "H01"
                },
                m = function(e) {
                    var t = e.asset,
                        n = e.canvasRef,
                        s = e.autoRotate,
                        a = (0, r.useMemo)(function() {
                            return v({
                                asset: t
                            })
                        }, [t]),
                        o = t.validLongitudes || u,
                        c = (0, i.Z)((0, r.useState)(0), 2),
                        m = c[0],
                        g = c[1],
                        x = (0, i.Z)((0, r.useState)(), 2),
                        I = x[0],
                        w = x[1],
                        b = t.displays["600W"].src,
                        k = null == b ? void 0 : b.substring(0, b.lastIndexOf("/") + 1),
                        P = p({
                            imageSrc: b
                        }),
                        y = (0, r.useRef)(),
                        C = (0, r.useRef)();
                    (0, r.useEffect)(function() {
                        y.current = null, C.current = null
                    }, [t]);
                    var j = (0, r.useMemo)(function() {
                            return f({
                                latitudes: a,
                                longitudes: o
                            })
                        }, [a, o]).imageIndexes,
                        L = (0, r.useCallback)(function(e) {
                            var t = e.horizontal,
                                i = e.vertical,
                                r = y.current || P,
                                s = C.current;
                            if (!s || r === s) {
                                var u = h({
                                    latitudes: a,
                                    longitudes: o,
                                    currentImageIndex: r,
                                    horizontal: t,
                                    vertical: i
                                });
                                r !== u && (C.current = u, l({
                                    imageIndex: u,
                                    canvasRef: n,
                                    imagePath: k,
                                    onLoad: function() {
                                        y.current = u
                                    }
                                }))
                            }
                        }, [n, k, a, o, P]),
                        Z = function(e) {
                            var t = e.currentPosition,
                                n = e.previousPosition;
                            return t > n ? 1 : t < n ? -1 : 0
                        };
                    return (0, r.useEffect)(function() {
                        l({
                            imageIndex: P,
                            canvasRef: n,
                            imagePath: k,
                            onLoad: function() {
                                y.current = P
                            }
                        });
                        var e = n.current;
                        if (s) {
                            var t, i = function() {
                                L({
                                    horizontal: 1,
                                    vertical: 0
                                })
                            };
                            e.addEventListener("mouseover", function() {
                                d({
                                    imageIndexes: j,
                                    setLoading: g,
                                    imagePath: k
                                }), t = setInterval(i, 100)
                            }), e.addEventListener("mouseout", function() {
                                clearInterval(t), l({
                                    imageIndex: P,
                                    canvasRef: n,
                                    imagePath: k,
                                    onLoad: function() {
                                        y.current = P, C.current = null
                                    }
                                })
                            })
                        } else {
                            d({
                                imageIndexes: j,
                                setLoading: g,
                                imagePath: k
                            });
                            var r = !1,
                                a = {
                                    x: null,
                                    y: null
                                },
                                o = function(e) {
                                    var t = e.e,
                                        n = e.x,
                                        i = e.y;
                                    w(y.current), t.preventDefault(), r = !0, a = {
                                        x: n,
                                        y: i
                                    }
                                },
                                u = function(e) {
                                    var t = e.e,
                                        n = e.x,
                                        i = e.y;
                                    if (t.preventDefault(), r) {
                                        var s = Z({
                                            currentPosition: n,
                                            previousPosition: a.x
                                        });
                                        L({
                                            vertical: Z({
                                                currentPosition: i,
                                                previousPosition: a.y
                                            }),
                                            horizontal: s
                                        }), a = {
                                            x: n,
                                            y: i
                                        }
                                    }
                                },
                                c = function(e) {
                                    w(y.current), e.preventDefault(), r = !1
                                },
                                f = function(e) {
                                    return o({
                                        e: e,
                                        x: e.clientX,
                                        y: e.clientY
                                    })
                                },
                                h = function(e) {
                                    return u({
                                        e: e,
                                        x: e.clientX,
                                        y: e.clientY
                                    })
                                };
                            return e.addEventListener("mousedown", f), e.addEventListener("mousemove", h), e.addEventListener("mouseup", c), e.addEventListener("touchstart", function(e) {
                                    var t = e.touches[0];
                                    o({
                                        e: e,
                                        x: t.clientX,
                                        y: t.clientY
                                    })
                                }), e.addEventListener("touchmove", function(e) {
                                    var t = e.touches[0];
                                    u({
                                        e: e,
                                        x: t.clientX,
                                        y: t.clientY
                                    })
                                }), e.addEventListener("touchend", c),
                                function() {
                                    e.removeEventListener("mousedown", f), e.removeEventListener("mousemove", h), e.removeEventListener("mouseup", c)
                                }
                        }
                        return function() {}
                    }, [j, n, L, k, P, s, g]), {
                        loading: m,
                        angle: I,
                        initialAngle: P
                    }
                }
        },
        84866: function(e, t, n) {
            "use strict";
            n.d(t, {
                bI: function() {
                    return a
                },
                n_: function() {
                    return o
                }
            });
            var i = n(70314),
                r = n.n(i),
                s = function(e) {
                    var t = e.name,
                        n = r()().publicRuntimeConfig.campaign;
                    return (null == n ? void 0 : n[t]) || null
                },
                a = function(e) {
                    var t = r()().publicRuntimeConfig.assets.cdnHostURL;
                    if (t && e.id) return "".concat(t, "/").concat("dream/photos", "/").concat(e.id, ".jpg")
                },
                o = function(e) {
                    var t, n = e.contributorId,
                        i = null === (t = s({
                            name: "dream"
                        })) || void 0 === t ? void 0 : t.contributorId;
                    return !!i && (Array.isArray(i) || (i = [i]), !!n && i.includes(Number(n)))
                }
        },
        25204: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return o
                }
            });
            var i = n(29292),
                r = n(776),
                s = n(2784),
                a = n(68533),
                o = function() {
                    var e = (0, r.yh)().analytics,
                        t = (0, a.Y)().getSearchContextFromAssets;
                    return (0, s.useCallback)(function(n) {
                        var r = n.asset,
                            s = n.listId,
                            a = n.position,
                            o = (0, i.qI)(r),
                            u = (0, i.f_)(r),
                            c = (0, i.Rz)(r);
                        s && e.assetViewed({
                            list_id: s,
                            position: a,
                            search_context: t([r]),
                            product_id: o,
                            sku: o,
                            brand: u || (0, i.jN)(r),
                            product_line: c
                        })
                    }, [e, t])
                }
        },
        42005: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return d
                }
            });
            var i = n(70865),
                r = n(96670),
                s = n(29292),
                a = n(44297),
                o = n(776),
                u = n(5632),
                c = n(2784),
                l = n(68533),
                d = function() {
                    var e = (0, o.yh)().analytics,
                        t = (0, o.wU)(),
                        n = (0, u.useRouter)().asPath,
                        d = (0, l.Y)(),
                        f = d.setSearchContext,
                        h = d.getSearchContext;
                    return (0, c.useCallback)(function(o) {
                        var u, c = o.asset,
                            l = o.gridItems,
                            d = o.eventLabel,
                            v = o.listId,
                            p = void 0 === v ? "" : v;
                        if (c.link !== n) {
                            f({
                                trackingId: (0, s.lt)({
                                    asset: c
                                }),
                                term: null === (u = c.meta) || void 0 === u ? void 0 : u.query
                            });
                            var m = (0, s.qI)(c);
                            e.productClicked((0, r.Z)((0, i.Z)({
                                asset_type: (0, a.ZZ)(c),
                                category: (0, s.CP)(c),
                                channels: (0, s.Ky)(c),
                                name: (0, s.LJ)(c),
                                product_id: m,
                                sku: m
                            }, t ? {
                                pageSection: t,
                                eventLabel: void 0 === d ? "" : d
                            } : {}, l ? (0, s.mq)({
                                gridItems: l,
                                item: c
                            }) : {}, p ? {
                                list_id: p
                            } : {}), {
                                search_context: h(c)
                            }))
                        }
                    }, [e, n, h, t, f])
                }
        },
        33967: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return l
                }
            });
            var i = n(33301),
                r = n(84866),
                s = n(43110),
                a = n(92405),
                o = n(2784),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.isLoading,
                        n = e.withinCampaign,
                        i = void 0 !== n && n;
                    return {
                        isLoading: void 0 !== t && t,
                        isAssetFreeToDownload: i,
                        canPreview: !i,
                        canShare: !i,
                        canEdit: !i,
                        canTry: !i,
                        canSaveToCollection: !i,
                        canSeeDetailsModal: !i
                    }
                },
                c = function() {
                    var e = (0, a.p)(i.NV);
                    return {
                        data: {
                            isDreamCampaignEnabled: e
                        },
                        isValidating: void 0 === e
                    }
                },
                l = function(e) {
                    var t = (e || {}).contributor,
                        n = c(),
                        i = n.data,
                        a = n.isValidating,
                        l = (0, s.B)(),
                        d = null == t ? void 0 : t.id;
                    return (0, o.useMemo)(function() {
                        var e = l && a;
                        return !e && i.isDreamCampaignEnabled && l && (0, r.n_)({
                            contributorId: null != d ? d : ""
                        }) ? u({
                            withinCampaign: !0
                        }) : u({
                            isLoading: e
                        })
                    }, [a, i, d, l])
                }
        },
        89522: function(e, t, n) {
            "use strict";
            n.d(t, {
                KC: function() {
                    return p
                }
            });
            var i = n(70865),
                r = n(96670),
                s = n(26297),
                a = n(39232),
                o = n(65532),
                u = n(37546),
                c = n(44297),
                l = n(96109),
                d = n(57858);
            n(2784);
            var f = n(78809),
                h = function(e) {
                    var t, n = e.asset,
                        i = e.assetType,
                        r = e.slugify,
                        s = e.locale;
                    if (null == n ? void 0 : n.isRexEditorial) return r({
                        description: n.description
                    });
                    switch (i) {
                        case a.hv:
                            return r({
                                description: null == n ? void 0 : n.description
                            });
                        case a.pX:
                            return r({
                                description: !n.description && n.description_language_map ? null !== (t = n.description_language_map[s]) && void 0 !== t ? t : n.description_language_map[d.NZ] : n.description
                            });
                        case a.tn:
                        case a.xF:
                        case a.IK:
                            return (null == n ? void 0 : n.slug) || r({
                                description: null == n ? void 0 : n.title
                            });
                        default:
                            return null
                    }
                },
                v = function(e) {
                    var t = e.asset,
                        n = e.getRoutePathProps,
                        a = e.slugify,
                        o = e.locale,
                        l = (0, s.Z)(e, ["asset", "getRoutePathProps", "slugify", "locale"]),
                        d = (0, c.Tp)(t),
                        f = (0, u.Lr)(t),
                        v = h({
                            asset: f,
                            slugify: a,
                            assetType: d,
                            locale: o
                        });
                    return n((0, i.Z)((0, r.Z)((0, i.Z)({}, f), {
                        item: t,
                        assetType: d,
                        slug: v
                    }), l))
                },
                p = function(e) {
                    var t = e.asset,
                        n = e.getRoutePathProps,
                        r = void 0 === n ? l.r : n,
                        a = (0, s.Z)(e, ["asset", "getRoutePathProps"]),
                        u = (0, f.M)(),
                        c = (0, o.PE)().locale;
                    return v((0, i.Z)({
                        asset: t,
                        getRoutePathProps: r,
                        slugify: u,
                        locale: c
                    }, a))
                }
        },
        78809: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return u
                }
            });
            var i = n(70865),
                r = n(96670),
                s = n(65532),
                a = n(42448),
                o = n(2784),
                u = function() {
                    var e = (0, s.PE)().fullLocale;
                    return (0, o.useCallback)(function(t) {
                        return (0, a.l)((0, r.Z)((0, i.Z)({}, t), {
                            locale: e
                        }))
                    }, [e])
                }
        }
    }
]);
//# sourceMappingURL=71201.2088ac0065ba2616.js.map