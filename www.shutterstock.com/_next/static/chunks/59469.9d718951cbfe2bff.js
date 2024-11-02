"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [59469], {
        39856: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return b
                }
            });
            var r = n(47842),
                o = n(70865),
                i = n(87394),
                a = n(52322),
                s = n(47746),
                l = n(2784),
                u = function(e) {
                    var t, n, r;
                    return (null === (t = e.current) || void 0 === t ? void 0 : null === (n = t.firstChild) || void 0 === n ? void 0 : n.clientHeight) - 16 > (null === (r = e.current) || void 0 === r ? void 0 : r.clientHeight)
                },
                c = function(e) {
                    var t = (0, i.Z)((0, l.useState)(!0), 2),
                        n = t[0],
                        r = t[1],
                        o = (0, l.useRef)();
                    if ("templates" === e) {
                        var a = u(o);
                        a !== n && r(a)
                    }
                    return [o, n]
                },
                d = n(9867),
                m = n(97e3),
                p = n(8740),
                h = function(e) {
                    var t, n, a = e.themeBreakpoints,
                        s = e.breakpointCols,
                        l = a.values,
                        u = a.keys;
                    return Object.entries(s).reduce(function(e, a, c) {
                        var d = (0, i.Z)(a, 2),
                            m = d[0],
                            p = d[1],
                            h = c === Object.keys(s).length - 1,
                            f = l[m],
                            C = u.indexOf(m),
                            b = u[C + 1],
                            y = b ? l[b] : f;
                        return (!n || f > n) && (n = l[m], t = m), (0, o.Z)({}, e, b && (0, r.Z)({}, y - 1, p), h && {
                            default: s[t]
                        })
                    }, {})
                },
                f = function(e) {
                    var t = e.gridGap;
                    return "string" == typeof t ? "-".concat(t) : -t
                },
                C = (0, p.ZL)()(function(e, t) {
                    var n, i = e.breakpoints,
                        a = e.tokens,
                        s = t.gridGap,
                        l = t.itemRadius,
                        u = t.mobileItemLimit,
                        c = t.limitHeight;
                    return {
                        root: {
                            position: "relative"
                        },
                        masonryGrid: (0, r.Z)({
                            display: "flex",
                            marginLeft: f,
                            width: "auto"
                        }, i.down("sm"), {
                            marginBottom: f
                        }),
                        masonryGridColumn: {
                            "&:not(:first-child)": {
                                paddingLeft: s
                            },
                            backgroundClip: "padding-box",
                            "& > *": (0, o.Z)({
                                marginBottom: s,
                                overflow: "hidden",
                                borderRadius: l
                            }, u && (0, r.Z)({}, i.down("sm"), (0, r.Z)({}, "&:nth-child(n + ".concat(u + 1, ")"), {
                                display: "none"
                            })))
                        },
                        singleColumn: {
                            width: "100%"
                        },
                        limitHeight: (0, r.Z)({}, i.up("sm"), {
                            maxHeight: c,
                            overflow: "hidden"
                        }),
                        gradientOverlay: (n = {
                            display: "none"
                        }, (0, r.Z)(n, i.up("sm"), {
                            display: "flex"
                        }), (0, r.Z)(n, "background", "\n    linear-gradient(\n      to top,\n      ".concat(a.color.black, " -50%,\n      transparent 100%\n    )")), (0, r.Z)(n, "content", '""'), (0, r.Z)(n, "position", "sticky"), (0, r.Z)(n, "width", "100%"), (0, r.Z)(n, "bottom", 0), (0, r.Z)(n, "left", 0), (0, r.Z)(n, "height", 80), (0, r.Z)(n, "pointerEvents", "none"), (0, r.Z)(n, "zIndex", a.zIndex["2"]), n)
                    }
                }),
                b = function(e) {
                    var t = e.children,
                        n = e.breakpointCols,
                        o = e.itemRadius,
                        u = e.gridGap,
                        d = e.mobileItemLimit,
                        p = e.limitHeight,
                        f = e.assetType,
                        b = (0, s.Z)().breakpoints,
                        y = C({
                            itemRadius: o,
                            gridGap: u,
                            mobileItemLimit: d,
                            limitHeight: p
                        }),
                        g = y.classes,
                        w = y.cx,
                        v = (0, l.useMemo)(function() {
                            return "object" == typeof n ? h({
                                themeBreakpoints: b,
                                breakpointCols: n
                            }) : n
                        }, [b, n]),
                        k = (0, i.Z)(c(f), 2),
                        O = k[0],
                        Z = k[1];
                    return (0, a.jsxs)("div", {
                        ref: O,
                        className: w(g.root, (0, r.Z)({}, g.limitHeight, p)),
                        children: [(0, a.jsx)(m.Z, {
                            className: g.masonryGrid,
                            columnClassName: g.masonryGridColumn,
                            breakpointCols: v,
                            children: t
                        }), Z && p && (0, a.jsx)("div", {
                            className: g.gradientOverlay
                        })]
                    })
                };
            b.defaultProps = {
                breakpointCols: {
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 6,
                    xl: 8
                },
                gridGap: d.W0.base,
                itemRadius: d.q0.l,
                mobileItemLimit: null,
                limitHeight: null,
                assetType: ""
            }
        },
        8367: function(e, t, n) {
            n.r(t), n.d(t, {
                CmsMasonryGrid: function() {
                    return O
                }
            });
            var r, o = n(47842),
                i = n(70865),
                a = n(52322),
                s = n(53957),
                l = n(39856),
                u = n(24747),
                c = n(43110),
                d = n(97024),
                m = n(8740),
                p = n(39232),
                h = n(25237),
                f = n.n(h),
                C = f()(function() {
                    return Promise.all([n.e(79637), n.e(16081)]).then(n.bind(n, 85721)).then(function(e) {
                        return e.MasonryTrackItemCard
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85721]
                        }
                    },
                    ssr: !0
                }),
                b = f()(function() {
                    return n.e(61157).then(n.bind(n, 61157)).then(function(e) {
                        return e.MasonryCmsCopyText
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [61157]
                        }
                    },
                    ssr: !0
                }),
                y = f()(function() {
                    return n.e(71201).then(n.bind(n, 71201)).then(function(e) {
                        return e.MasonryAssetGridItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [71201]
                        }
                    },
                    ssr: !0
                }),
                g = s.wF.copyText,
                w = (r = {}, (0, o.Z)(r, p.jr, C), (0, o.Z)(r, g, b), (0, o.Z)(r, "default", y), r),
                v = s.wF.assetItem,
                k = (0, m.ZL)()(function(e) {
                    var t = e.breakpoints,
                        n = e.spacing;
                    return {
                        root: (0, o.Z)({
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            marginTop: n(4)
                        }, t.up("md"), {
                            marginTop: "0px"
                        }),
                        trackItemCardContainer: {
                            height: "auto"
                        }
                    }
                }),
                O = function(e) {
                    var t = e.assetItems,
                        n = e.items,
                        r = e.button,
                        o = e.showAssetTypeIcon,
                        s = e.assetFormatter,
                        m = e.breakpointColumns,
                        p = e.category,
                        h = e.onAssetModalHandler,
                        f = e.addToCollectionViewsHandler,
                        C = e.addToCartViewsHandler,
                        b = e.compLicensingHandler,
                        y = e.downloadTrackViewsHandler,
                        g = (0, c.B)(),
                        O = k().classes,
                        Z = (0, d.JI)().assetType;
                    return (0, a.jsxs)("div", {
                        className: O.root,
                        "data-automation": "CmsMasonryGrid_MasonryAssetGrid",
                        children: [(0, a.jsx)(l.X, {
                            mobileItemLimit: 4,
                            breakpointCols: m,
                            limitHeight: 1700,
                            assetType: Z,
                            children: (g ? t : n).map(function(e, t) {
                                var r = e.contentType !== v ? e.contentType : e.type,
                                    i = (null == w ? void 0 : w[r]) || w.default;
                                return (0, a.jsx)(i, {
                                    item: s ? s(e, p) : e,
                                    items: n,
                                    itemIndex: t,
                                    onAssetModalHandler: h,
                                    addToCollectionViewsHandler: f,
                                    addToCartViewsHandler: C,
                                    downloadTrackViewsHandler: y,
                                    compLicensingHandler: b,
                                    showAssetTypeIcon: o
                                }, e.id)
                            })
                        }), r && (0, a.jsx)(u.L, (0, i.Z)({}, r))]
                    })
                };
            O.defaultProps = {
                assetItems: [],
                items: [],
                button: null,
                showAssetTypeIcon: !0,
                assetFormatter: null,
                breakpointColumns: {
                    xs: 1,
                    sm: 2,
                    md: 3
                },
                category: ""
            }
        },
        59469: function(e, t, n) {
            n.r(t), n.d(t, {
                CmsMasonryGrid: function() {
                    return i.CmsMasonryGrid
                },
                DynamicCmsMasonryGrid: function() {
                    return o
                }
            });
            var r = n(25237),
                o = n.n(r)()(function() {
                    return Promise.resolve().then(n.bind(n, 8367)).then(function(e) {
                        return e.CmsMasonryGrid
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8367]
                        }
                    },
                    ssr: !0
                }),
                i = n(8367)
        },
        97e3: function(e, t, n) {
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        var r, o;
                        r = e, o = n[t], t in r ? Object.defineProperty(r, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            class s extends r.Component {
                constructor(e) {
                    let t;
                    super(e), this.reCalculateColumnCount = this.reCalculateColumnCount.bind(this), this.reCalculateColumnCountDebounce = this.reCalculateColumnCountDebounce.bind(this), t = this.props.breakpointCols && this.props.breakpointCols.default ? this.props.breakpointCols.default : parseInt(this.props.breakpointCols) || 2, this.state = {
                        columnCount: t
                    }
                }
                componentDidMount() {
                    this.reCalculateColumnCount(), window && window.addEventListener("resize", this.reCalculateColumnCountDebounce)
                }
                componentDidUpdate() {
                    this.reCalculateColumnCount()
                }
                componentWillUnmount() {
                    window && window.removeEventListener("resize", this.reCalculateColumnCountDebounce)
                }
                reCalculateColumnCountDebounce() {
                    if (!window || !window.requestAnimationFrame) {
                        this.reCalculateColumnCount();
                        return
                    }
                    window.cancelAnimationFrame && window.cancelAnimationFrame(this._lastRecalculateAnimationFrame), this._lastRecalculateAnimationFrame = window.requestAnimationFrame(() => {
                        this.reCalculateColumnCount()
                    })
                }
                reCalculateColumnCount() {
                    let e = window && window.innerWidth || 1 / 0,
                        t = this.props.breakpointCols;
                    "object" != typeof t && (t = {
                        default: parseInt(t) || 2
                    });
                    let n = 1 / 0,
                        r = t.default || 2;
                    for (let o in t) {
                        let i = parseInt(o),
                            a = i > 0 && e <= i;
                        a && i < n && (n = i, r = t[o])
                    }
                    r = Math.max(1, parseInt(r) || 1), this.state.columnCount !== r && this.setState({
                        columnCount: r
                    })
                }
                itemsInColumns() {
                    let e = this.state.columnCount,
                        t = Array(e),
                        n = r.Children.toArray(this.props.children);
                    for (let r = 0; r < n.length; r++) {
                        let o = r % e;
                        t[o] || (t[o] = []), t[o].push(n[r])
                    }
                    return t
                }
                renderColumns() {
                    let {
                        column: e,
                        columnAttrs: t = {},
                        columnClassName: n
                    } = this.props, i = this.itemsInColumns(), s = `${100/i.length}%`, l = n;
                    l && "string" != typeof l && (this.logDeprecated('The property "columnClassName" requires a string'), void 0 === l && (l = "my-masonry-grid_column"));
                    let u = a(a(a({}, e), t), {}, {
                        style: a(a({}, t.style), {}, {
                            width: s
                        }),
                        className: l
                    });
                    return i.map((e, t) => r.createElement("div", o({}, u, {
                        key: t
                    }), e))
                }
                logDeprecated(e) {
                    console.error("[Masonry]", e)
                }
                render() {
                    let e = this.props,
                        {
                            children: t,
                            breakpointCols: n,
                            columnClassName: i,
                            columnAttrs: a,
                            column: s,
                            className: l
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }(e, ["children", "breakpointCols", "columnClassName", "columnAttrs", "column", "className"]),
                        c = l;
                    return "string" != typeof l && (this.logDeprecated('The property "className" requires a string'), void 0 === l && (c = "my-masonry-grid")), r.createElement("div", o({}, u, {
                        className: c
                    }), this.renderColumns())
                }
            }
            s.defaultProps = {
                breakpointCols: void 0,
                className: void 0,
                columnClassName: void 0,
                children: void 0,
                columnAttrs: void 0,
                column: void 0
            }, t.Z = s
        }
    }
]);
//# sourceMappingURL=59469.9d718951cbfe2bff.js.map