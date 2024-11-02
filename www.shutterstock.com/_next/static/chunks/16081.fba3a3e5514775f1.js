(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16081], {
        480: function(e, t, n) {
            "use strict";
            var i = n(95122);
            t.Z = void 0;
            var r = i(n(68671)),
                s = n(52322),
                a = (0, r.default)((0, s.jsx)("path", {
                    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                }), "Pause");
            t.Z = a
        },
        31913: function(e, t, n) {
            "use strict";
            var i = n(95122);
            t.Z = void 0;
            var r = i(n(68671)),
                s = n(52322),
                a = (0, r.default)((0, s.jsx)("path", {
                    d: "M8 5v14l11-7z"
                }), "PlayArrow");
            t.Z = a
        },
        68671: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i.createSvgIcon
                }
            });
            var i = n(1708)
        },
        5209: function(e, t, n) {
            "use strict";
            var i = n(78419);
            t.Z = i.Z
        },
        1708: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                capitalize: function() {
                    return r.Z
                },
                createChainedFunction: function() {
                    return s.Z
                },
                createSvgIcon: function() {
                    return a.Z
                },
                debounce: function() {
                    return o.Z
                },
                deprecatedPropType: function() {
                    return u
                },
                isMuiElement: function() {
                    return c.Z
                },
                ownerDocument: function() {
                    return l.Z
                },
                ownerWindow: function() {
                    return d.Z
                },
                requirePropFactory: function() {
                    return f
                },
                setRef: function() {
                    return v
                },
                unstable_ClassNameGenerator: function() {
                    return k
                },
                unstable_useEnhancedEffect: function() {
                    return h.Z
                },
                unstable_useId: function() {
                    return p.Z
                },
                unsupportedProp: function() {
                    return g
                },
                useControlled: function() {
                    return m.Z
                },
                useEventCallback: function() {
                    return I.Z
                },
                useForkRef: function() {
                    return x.Z
                },
                useIsFocusVisible: function() {
                    return w.Z
                }
            });
            var i = n(68542),
                r = n(7342),
                s = n(5209),
                a = n(6620),
                o = n(29673),
                u = function(e, t) {
                    return () => null
                },
                c = n(19763),
                l = n(46425),
                d = n(98043);
            n(56961);
            var f = function(e, t) {
                    return () => null
                },
                v = n(75377).Z,
                h = n(25691),
                p = n(85954),
                g = function(e, t, n, i, r) {
                    return null
                },
                m = n(19570),
                I = n(78647),
                x = n(98659),
                w = n(8250);
            let k = {
                configure: e => {
                    i.Z.configure(e)
                }
            }
        },
        19763: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                r = function(e, t) {
                    return i.isValidElement(e) && -1 !== t.indexOf(e.type.muiName)
                }
        },
        46425: function(e, t, n) {
            "use strict";
            var i = n(36855);
            t.Z = i.Z
        },
        85954: function(e, t, n) {
            "use strict";
            var i = n(23803);
            t.Z = i.Z
        },
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
                var u, c, l, d, f, v, h = 0,
                    p = !1,
                    g = !1,
                    m = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function I(t) {
                    var n = u,
                        i = c;
                    return u = c = void 0, h = t, d = e.apply(i, n)
                }

                function x(e) {
                    var n = e - v,
                        i = e - h;
                    return void 0 === v || n >= t || n < 0 || g && i >= l
                }

                function w() {
                    var e, n, i, s = r();
                    if (x(s)) return k(s);
                    f = setTimeout(w, (e = s - v, n = s - h, i = t - e, g ? o(i, l - n) : i))
                }

                function k(e) {
                    return (f = void 0, m && u) ? I(e) : (u = c = void 0, d)
                }

                function P() {
                    var e, n = r(),
                        i = x(n);
                    if (u = arguments, c = this, v = n, i) {
                        if (void 0 === f) return h = e = v, f = setTimeout(w, t), p ? I(e) : d;
                        if (g) return clearTimeout(f), f = setTimeout(w, t), I(v)
                    }
                    return void 0 === f && (f = setTimeout(w, t)), d
                }
                return t = s(t) || 0, i(n) && (p = !!n.leading, l = (g = "maxWait" in n) ? a(s(n.maxWait) || 0, t) : l, m = "trailing" in n ? !!n.trailing : m), P.cancel = function() {
                    void 0 !== f && clearTimeout(f), h = 0, u = v = c = f = void 0
                }, P.flush = function() {
                    return void 0 === f ? d : k(r())
                }, P
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
                    return C
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
                v = n(44297),
                h = n(42005),
                p = n(57048),
                g = n(89522),
                m = n(92405),
                I = n(776),
                x = n(96109),
                w = n(2784),
                k = (0, n(8740).ZL)()(function(e) {
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
                P = function(e) {
                    var t, n = e.hasExpansionRows,
                        x = e.withLink,
                        w = e.inView,
                        P = e.asset,
                        C = e.gridItems,
                        b = e.getRoutePathProps,
                        y = e.itemIndex,
                        L = e.openGridItemInNewTab,
                        Z = e.withProductClickTracking,
                        j = e.withProductClickWhereYouLeftOffTracking,
                        _ = e.gridItemLinkClassName,
                        E = e.rowIndex,
                        T = e.handleClick,
                        R = k(),
                        O = R.classes,
                        N = R.cx,
                        A = (0, s.Z)((0, g.KC)({
                            asset: P,
                            gridItems: C,
                            getRoutePathProps: b,
                            itemIndex: y
                        }), 2),
                        S = A[0],
                        M = A[1],
                        G = (0, h.w)(),
                        F = (0, p.D)(),
                        z = (0, f.N)().isBot,
                        B = (0, I.wU)(),
                        D = w && S ? o.r : u.n,
                        H = (0, m.p)(d.Y$, !1, !1, !0),
                        V = (0, v.f8)(P) && H && (null === (t = P.displays["600W"]) || void 0 === t ? void 0 : t.src);
                    return x ? (0, a.jsx)(D, (0, r.Z)((0, i.Z)({
                        className: N(O.link, _),
                        href: S,
                        target: L ? "_blank" : void 0,
                        "data-automation": "AssetGrids_GridItemClickableArea_link"
                    }, D !== u.n && {
                        linkAs: M
                    }), {
                        onClick: z ? null : function(e) {
                            n && e.preventDefault(), Z && G((0, r.Z)((0, i.Z)({
                                asset: P,
                                gridItems: C,
                                eventLabel: l.D7F
                            }, j ? {
                                listId: l.YQz
                            } : {}), {
                                pageSection: B
                            })), j && F({
                                eventLabel: l.LRD
                            }), T({
                                asset: P,
                                rowIndex: E
                            })
                        },
                        "aria-label": P.title || P.description,
                        tabIndex: 0,
                        children: V && (0, a.jsx)(c.E, {
                            asset: P
                        })
                    })) : null
                };
            P.defaultProps = {
                openGridItemInNewTab: !1,
                withLink: !0,
                withProductClickTracking: !0,
                withProductClickWhereYouLeftOffTracking: !1,
                hasExpansionRows: !1,
                rowIndex: null,
                gridItemLinkClassName: null,
                handleClick: function() {},
                getRoutePathProps: x.r
            };
            var C = (0, w.memo)(P)
        },
        34354: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return Z
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
                v = n(63256),
                h = n(25204),
                p = n(33967),
                g = n(75298),
                m = n(11800),
                I = n(96109),
                x = n(68138),
                w = n(2784),
                k = n(8740),
                P = n(39860),
                C = function(e) {
                    return "string" == typeof e ? e : Math.floor((e - 1e-5) * 1e3) / 1e3
                },
                b = (0, k.ZL)()(function(e) {
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
                y = function(e, t) {
                    var n, i = (0, p.a)({
                            contributor: {
                                id: e.contributorId
                            }
                        }),
                        r = i.isLoading,
                        s = i.isAssetFreeToDownload;
                    return !r && ((null == t ? void 0 : null === (n = t.restrictions) || void 0 === n ? void 0 : n.isOverlayRestricted) || s)
                },
                L = function(e) {
                    var t, n, p, I = e.asset,
                        k = e.AssetItem,
                        L = e.assetItemProps,
                        Z = e.AssetOverlay,
                        j = e.assetOverlayProps,
                        _ = e.getRoutePathProps,
                        E = e.gridItemClassName,
                        T = e.gridItemLinkClassName,
                        R = e.gridItems,
                        O = e.height,
                        N = e.isInfiniteGrid,
                        A = e.isPopperOpen,
                        S = e.itemIndex,
                        M = e.rowIndex,
                        G = e.licensingAssetId,
                        F = e.listId,
                        z = e.openGridItemInNewTab,
                        B = e.spacing,
                        D = e.width,
                        H = e.withFixedDimensions,
                        V = e.withSsr,
                        W = e.withItemBackground,
                        q = e.withLink,
                        Y = e.withProductClickTracking,
                        K = e.eagerAssetOverlayCount,
                        J = e.useCssGrid,
                        X = e.hasExpansionRows,
                        U = e.handleClick,
                        Q = e.skeletonOnly,
                        $ = (0, a.Z)(e, ["asset", "AssetItem", "assetItemProps", "AssetOverlay", "assetOverlayProps", "getRoutePathProps", "gridItemClassName", "gridItemLinkClassName", "gridItems", "height", "isInfiniteGrid", "isPopperOpen", "itemIndex", "rowIndex", "licensingAssetId", "listId", "openGridItemInNewTab", "spacing", "width", "withFixedDimensions", "withSsr", "withItemBackground", "withLink", "withProductClickTracking", "eagerAssetOverlayCount", "useCssGrid", "hasExpansionRows", "handleClick", "skeletonOnly"]),
                        ee = b({
                            width: D,
                            height: O
                        }),
                        et = ee.classes,
                        en = ee.cx,
                        ei = (0, h.u)(),
                        er = (0, P.T)({
                            asset: I
                        }),
                        es = er.isHovered,
                        ea = er.setIsHovered,
                        eo = er.onMouseEnter,
                        eu = er.onMouseLeave,
                        ec = (0, o.Z)((0, w.useState)(!0), 2),
                        el = ec[0],
                        ed = ec[1],
                        ef = (0, o.Z)((0, g.I)({
                            triggerOnce: J || !N,
                            defaultIsVisible: S < K
                        }), 2),
                        ev = ef[0],
                        eh = ef[1],
                        ep = (0, P.t)({
                            withSsr: V
                        }),
                        eg = ep.isAssetLoaded,
                        em = ep.setIsAssetLoaded,
                        eI = (0, o.Z)((0, w.useState)({
                            height: C(O),
                            width: C(D)
                        }), 2),
                        ex = eI[0],
                        ew = eI[1];
                    (0, m.L)(function() {
                        H && !J && ew({
                            height: O,
                            width: D
                        }), ev && F && ei({
                            listId: F,
                            position: S,
                            asset: I
                        }), !J && N && ed(ev)
                    }, [O, D, H, J, Q, ei, ev, S, F, I, N]);
                    var ek = (0, v.r8)(I, !0),
                        eP = l.hq.SIZE + l.hq.STEP;
                    if (ek.height !== eP) {
                        var eC = (ek.height - eP) / ek.height;
                        ek.height = eP, ek.width -= ek.width * eC
                    }
                    var eb = (0, x.cK)(ek).classes,
                        ey = y(I, j);
                    return (0, u.jsx)("div", {
                        role: "img",
                        "aria-label": "Asset ".concat(null !== (n = I.description) && void 0 !== n ? n : "").trim(),
                        "data-automation": "AssetGrids_GridItemContainer_div",
                        onMouseEnter: eo,
                        onMouseLeave: eu,
                        ref: eh,
                        style: (0, s.Z)((0, r.Z)({}, H && !J && ex, B && {
                            margin: "".concat(B, "px")
                        }), {
                            "--itemFlexBasis": (0, x.OM)(0, ek),
                            "--itemFlexBasisLg": (0, x.OM)(l.hq.STEP, ek),
                            "--itemFlexBasisMd": (0, x.OM)(2 * l.hq.STEP, ek),
                            "--itemFlexBasisSm": (0, x.OM)(4 * l.hq.STEP, ek),
                            "--itemFlexGrow": (0, x.kw)(ek)
                        }),
                        className: en(et.item, E, J && eb.item, W && eg && et.background),
                        children: el && (0, u.jsxs)(u.Fragment, {
                            children: [!Q && (0, u.jsx)(d.J, {
                                asset: I,
                                inView: ev,
                                withLink: q,
                                rowIndex: M,
                                itemIndex: S,
                                gridItems: R,
                                handleClick: U,
                                hasExpansionRows: X,
                                getRoutePathProps: _,
                                gridItemLinkClassName: T,
                                openGridItemInNewTab: z,
                                withProductClickTracking: Y,
                                withProductClickWhereYouLeftOffTracking: j.withProductClickWhereYouLeftOffTracking
                            }), (ev || S < K) && !ey && !!Z && !Q && (0, u.jsx)(Z, (0, r.Z)({
                                listId: F,
                                asset: I,
                                gridItems: R,
                                isHovered: es,
                                setIsHovered: ea,
                                isAssetLoaded: eg,
                                itemIndex: S,
                                licensingAssetId: G,
                                width: D
                            }, j, $)), k && (0, u.jsxs)(u.Fragment, {
                                children: [!Q && (0, u.jsx)("div", {
                                    style: {
                                        "--assetItemContainerDisplay": (0, x.wj)(ek) ? "flex" : null,
                                        "--assetItemContainerAlignItems": (0, x.wj)(ek) ? "center" : null
                                    },
                                    className: en(et.assetItemContainer, J && eb.assetItemContainer, (0, i.Z)({}, et.withAspectRatioSizing, !H)),
                                    children: (null == L ? void 0 : null === (t = L.holding) || void 0 === t ? void 0 : t.isLoading) ? (0, u.jsx)(c.Z, {
                                        variant: "rounded",
                                        className: et.assetItemSkeleton
                                    }) : (0, u.jsx)("div", {
                                        style: {
                                            "--letterboxingWrapperPadding": J && (0, x.wj)(ek) ? "".concat((0, x.Px)(ek), "%") : null
                                        },
                                        className: en((p = {}, (0, i.Z)(p, eb.letterboxingWrapper, J && !(0, x.wj)(ek)), (0, i.Z)(p, eb.letterboxingWrapperWithPseudo, J && (0, x.wj)(ek)), (0, i.Z)(p, et.blankTemplateWrapper, (null == I ? void 0 : I.type) === f.C_), p)),
                                        children: (0, u.jsx)(k, (0, r.Z)({
                                            asset: I,
                                            gridItems: R,
                                            isHovered: A || es,
                                            onLoadHandler: em,
                                            withSsr: V,
                                            itemIndex: S,
                                            useCssGrid: J
                                        }, L, $))
                                    })
                                }), !H && (0, u.jsx)("div", {
                                    style: {
                                        paddingBottom: D && O && "".concat(O / D * 100, "%")
                                    }
                                }), J && (0, u.jsx)("div", {
                                    style: {
                                        paddingBottom: "".concat((ek.height / (0, x.hq)(ek) * 100).toFixed(3), "%")
                                    }
                                })]
                            })]
                        })
                    })
                };
            L.defaultProps = {
                AssetOverlay: null,
                assetItemProps: {},
                assetOverlayProps: {},
                eagerAssetOverlayCount: 0,
                getRoutePathProps: I.r,
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
            var Z = (0, w.memo)(L)
        },
        9877: function(e, t, n) {
            "use strict";
            n.d(t, {
                Er: function() {
                    return s
                },
                Iu: function() {
                    return r
                },
                f0: function() {
                    return i
                }
            });
            var i = 240,
                r = 24,
                s = 16
        },
        85721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MasonryTrackItemCard: function() {
                    return f
                }
            });
            var i = n(52322),
                r = n(34354),
                s = n(9938),
                a = n(79637),
                o = n(44297),
                u = n(94909),
                c = n(43110),
                l = (0, n(8740).ZL)()({
                    trackItemCardContainer: {
                        "&&": {
                            height: "auto"
                        }
                    },
                    trackInfoPlayButton: {
                        zIndex: 2
                    }
                }),
                d = function(e) {
                    var t = e.asset,
                        n = e.assets,
                        r = l().classes,
                        s = (0, u.d)(),
                        d = (0, c.B)(),
                        f = n.filter(o.w5);
                    return (0, i.jsx)(a.E, {
                        item: t,
                        items: f,
                        classesProps: {
                            trackItemCardContainer: r.trackItemCardContainer,
                            infoPlayButton: r.trackInfoPlayButton
                        },
                        showBackgroundImage: !0,
                        showOverlayActions: !(d && s)
                    })
                },
                f = function(e) {
                    var t = e.addToCollectionViewsHandler,
                        n = e.addToCartViewsHandler,
                        a = e.compLicensingHandler,
                        o = e.downloadTrackViewsHandler,
                        u = e.item,
                        c = e.itemIndex,
                        l = e.items;
                    return (0, i.jsx)(r.e, {
                        AssetItem: d,
                        AssetOverlay: s.B,
                        assetOverlayProps: {
                            showAddToCollectionsIcon: !0,
                            showAssetTypeIcon: !1,
                            showPreviewIcon: !1,
                            addToCartViewsHandler: n,
                            addToCollectionViewsHandler: t,
                            downloadTrackViewsHandler: o,
                            compLicensingHandler: a
                        },
                        gridItems: l,
                        asset: u,
                        assets: l,
                        itemIndex: c,
                        height: "auto",
                        width: "auto",
                        withFixedDimensions: !0,
                        withLink: !1
                    }, u.id)
                }
        },
        787: function(e, t, n) {
            "use strict";
            n.d(t, {
                IC: function() {
                    return v
                }
            });
            var i = n(52322),
                r = n(21647),
                s = n(9877),
                a = n(25237),
                o = n.n(a),
                u = n(8740),
                c = function(e) {
                    var t = e.size,
                        n = void 0 === t ? s.Er : t;
                    return (0, i.jsx)(r.Z, {
                        width: n,
                        height: n,
                        sx: {
                            transform: "none"
                        }
                    })
                },
                l = o()(function() {
                    return n.e(22604).then(n.bind(n, 22604)).then(function(e) {
                        return e.PbLogo
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [22604]
                        }
                    },
                    loading: c,
                    ssr: !0
                }),
                d = o()(function() {
                    return n.e(25488).then(n.bind(n, 25488)).then(function(e) {
                        return e.Brackets
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [25488]
                        }
                    },
                    loading: c,
                    ssr: !0
                }),
                f = (0, u.ZL)()(function(e, t) {
                    var n = t.size;
                    return {
                        icon: {
                            width: n,
                            height: n
                        }
                    }
                }),
                v = function(e) {
                    var t = e.isPremiumBeat,
                        n = e.className,
                        r = e.size,
                        s = f({
                            size: r
                        }),
                        a = s.classes,
                        o = s.cx;
                    return void 0 === t ? (0, i.jsx)(c, {
                        size: r
                    }) : (0, i.jsx)(t ? l : d, {
                        className: o(n, a.icon)
                    })
                };
            v.defaultProps = {
                className: null,
                isPremiumBeat: void 0,
                size: s.Er
            }
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
                    return g
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
                v = function(e) {
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
                h = function(e) {
                    var t = e.asset,
                        n = t.validLatitudes,
                        i = t.cameraType;
                    return n || ("top_half" === i || "half_spinner" === i ? c : o)
                },
                p = function(e) {
                    var t, n, i = e.imageSrc;
                    return (null == i ? void 0 : i.split("jpeg-600/").length) > 1 ? (null === (t = null == i ? void 0 : i.split("jpeg-600/")[1]) || void 0 === t ? void 0 : t.split(".jpg")[0]) || "H01" : (null === (n = null == i ? void 0 : i.split("previews/")[1]) || void 0 === n ? void 0 : n.split("-")[0]) || "H01"
                },
                g = function(e) {
                    var t = e.asset,
                        n = e.canvasRef,
                        s = e.autoRotate,
                        a = (0, r.useMemo)(function() {
                            return h({
                                asset: t
                            })
                        }, [t]),
                        o = t.validLongitudes || u,
                        c = (0, i.Z)((0, r.useState)(0), 2),
                        g = c[0],
                        m = c[1],
                        I = (0, i.Z)((0, r.useState)(), 2),
                        x = I[0],
                        w = I[1],
                        k = t.displays["600W"].src,
                        P = null == k ? void 0 : k.substring(0, k.lastIndexOf("/") + 1),
                        C = p({
                            imageSrc: k
                        }),
                        b = (0, r.useRef)(),
                        y = (0, r.useRef)();
                    (0, r.useEffect)(function() {
                        b.current = null, y.current = null
                    }, [t]);
                    var L = (0, r.useMemo)(function() {
                            return f({
                                latitudes: a,
                                longitudes: o
                            })
                        }, [a, o]).imageIndexes,
                        Z = (0, r.useCallback)(function(e) {
                            var t = e.horizontal,
                                i = e.vertical,
                                r = b.current || C,
                                s = y.current;
                            if (!s || r === s) {
                                var u = v({
                                    latitudes: a,
                                    longitudes: o,
                                    currentImageIndex: r,
                                    horizontal: t,
                                    vertical: i
                                });
                                r !== u && (y.current = u, l({
                                    imageIndex: u,
                                    canvasRef: n,
                                    imagePath: P,
                                    onLoad: function() {
                                        b.current = u
                                    }
                                }))
                            }
                        }, [n, P, a, o, C]),
                        j = function(e) {
                            var t = e.currentPosition,
                                n = e.previousPosition;
                            return t > n ? 1 : t < n ? -1 : 0
                        };
                    return (0, r.useEffect)(function() {
                        l({
                            imageIndex: C,
                            canvasRef: n,
                            imagePath: P,
                            onLoad: function() {
                                b.current = C
                            }
                        });
                        var e = n.current;
                        if (s) {
                            var t, i = function() {
                                Z({
                                    horizontal: 1,
                                    vertical: 0
                                })
                            };
                            e.addEventListener("mouseover", function() {
                                d({
                                    imageIndexes: L,
                                    setLoading: m,
                                    imagePath: P
                                }), t = setInterval(i, 100)
                            }), e.addEventListener("mouseout", function() {
                                clearInterval(t), l({
                                    imageIndex: C,
                                    canvasRef: n,
                                    imagePath: P,
                                    onLoad: function() {
                                        b.current = C, y.current = null
                                    }
                                })
                            })
                        } else {
                            d({
                                imageIndexes: L,
                                setLoading: m,
                                imagePath: P
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
                                    w(b.current), t.preventDefault(), r = !0, a = {
                                        x: n,
                                        y: i
                                    }
                                },
                                u = function(e) {
                                    var t = e.e,
                                        n = e.x,
                                        i = e.y;
                                    if (t.preventDefault(), r) {
                                        var s = j({
                                            currentPosition: n,
                                            previousPosition: a.x
                                        });
                                        Z({
                                            vertical: j({
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
                                    w(b.current), e.preventDefault(), r = !1
                                },
                                f = function(e) {
                                    return o({
                                        e: e,
                                        x: e.clientX,
                                        y: e.clientY
                                    })
                                },
                                v = function(e) {
                                    return u({
                                        e: e,
                                        x: e.clientX,
                                        y: e.clientY
                                    })
                                };
                            return e.addEventListener("mousedown", f), e.addEventListener("mousemove", v), e.addEventListener("mouseup", c), e.addEventListener("touchstart", function(e) {
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
                                    e.removeEventListener("mousedown", f), e.removeEventListener("mousemove", v), e.removeEventListener("mouseup", c)
                                }
                        }
                        return function() {}
                    }, [L, n, Z, P, C, s, m]), {
                        loading: g,
                        angle: x,
                        initialAngle: C
                    }
                }
        },
        36616: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return s
                }
            });
            var i = n(2784),
                r = n(82008),
                s = function() {
                    return (0, i.useContext)(r.D)
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
                        v = d.getSearchContext;
                    return (0, c.useCallback)(function(o) {
                        var u, c = o.asset,
                            l = o.gridItems,
                            d = o.eventLabel,
                            h = o.listId,
                            p = void 0 === h ? "" : h;
                        if (c.link !== n) {
                            f({
                                trackingId: (0, s.lt)({
                                    asset: c
                                }),
                                term: null === (u = c.meta) || void 0 === u ? void 0 : u.query
                            });
                            var g = (0, s.qI)(c);
                            e.productClicked((0, r.Z)((0, i.Z)({
                                asset_type: (0, a.ZZ)(c),
                                category: (0, s.CP)(c),
                                channels: (0, s.Ky)(c),
                                name: (0, s.LJ)(c),
                                product_id: g,
                                sku: g
                            }, t ? {
                                pageSection: t,
                                eventLabel: void 0 === d ? "" : d
                            } : {}, l ? (0, s.mq)({
                                gridItems: l,
                                item: c
                            }) : {}, p ? {
                                list_id: p
                            } : {}), {
                                search_context: v(c)
                            }))
                        }
                    }, [e, n, v, t, f])
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
                v = function(e) {
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
                h = function(e) {
                    var t = e.asset,
                        n = e.getRoutePathProps,
                        a = e.slugify,
                        o = e.locale,
                        l = (0, s.Z)(e, ["asset", "getRoutePathProps", "slugify", "locale"]),
                        d = (0, c.Tp)(t),
                        f = (0, u.Lr)(t),
                        h = v({
                            asset: f,
                            slugify: a,
                            assetType: d,
                            locale: o
                        });
                    return n((0, i.Z)((0, r.Z)((0, i.Z)({}, f), {
                        item: t,
                        assetType: d,
                        slug: h
                    }), l))
                },
                p = function(e) {
                    var t = e.asset,
                        n = e.getRoutePathProps,
                        r = void 0 === n ? l.r : n,
                        a = (0, s.Z)(e, ["asset", "getRoutePathProps"]),
                        u = (0, f.M)(),
                        c = (0, o.PE)().locale;
                    return h((0, i.Z)({
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
        },
        95122: function(e) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    }
]);
//# sourceMappingURL=16081.fba3a3e5514775f1.js.map