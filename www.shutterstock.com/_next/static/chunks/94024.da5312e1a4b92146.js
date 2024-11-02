"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94024, 67361], {
        78287: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return k
                }
            });
            var o = n(26831),
                r = n(28193),
                a = n(2784),
                i = n(6277),
                s = n(69075),
                l = n(31373),
                c = n(7342),
                u = n(43853),
                d = n(65992),
                p = n(69222),
                f = n(15672);

            function m(t) {
                return (0, f.Z)("MuiTab", t)
            }
            let b = (0, p.Z)("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
            var h = n(52322);
            let y = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"],
                g = t => {
                    let {
                        classes: e,
                        textColor: n,
                        fullWidth: o,
                        wrapped: r,
                        icon: a,
                        label: i,
                        selected: l,
                        disabled: u
                    } = t, d = {
                        root: ["root", a && i && "labelIcon", `textColor${(0,c.Z)(n)}`, o && "fullWidth", r && "wrapped", l && "selected", u && "disabled"],
                        iconWrapper: ["iconWrapper"]
                    };
                    return (0, s.Z)(d, m, e)
                },
                v = (0, d.ZP)(l.Z, {
                    name: "MuiTab",
                    slot: "Root",
                    overridesResolver: (t, e) => {
                        let {
                            ownerState: n
                        } = t;
                        return [e.root, n.label && n.icon && e.labelIcon, e[`textColor${(0,c.Z)(n.textColor)}`], n.fullWidth && e.fullWidth, n.wrapped && e.wrapped]
                    }
                })(({
                    theme: t,
                    ownerState: e
                }) => (0, r.Z)({}, t.typography.button, {
                    maxWidth: 360,
                    minWidth: 90,
                    position: "relative",
                    minHeight: 48,
                    flexShrink: 0,
                    padding: "12px 16px",
                    overflow: "hidden",
                    whiteSpace: "normal",
                    textAlign: "center"
                }, e.label && {
                    flexDirection: "top" === e.iconPosition || "bottom" === e.iconPosition ? "column" : "row"
                }, {
                    lineHeight: 1.25
                }, e.icon && e.label && {
                    minHeight: 72,
                    paddingTop: 9,
                    paddingBottom: 9,
                    [`& > .${b.iconWrapper}`]: (0, r.Z)({}, "top" === e.iconPosition && {
                        marginBottom: 6
                    }, "bottom" === e.iconPosition && {
                        marginTop: 6
                    }, "start" === e.iconPosition && {
                        marginRight: t.spacing(1)
                    }, "end" === e.iconPosition && {
                        marginLeft: t.spacing(1)
                    })
                }, "inherit" === e.textColor && {
                    color: "inherit",
                    opacity: .6,
                    [`&.${b.selected}`]: {
                        opacity: 1
                    },
                    [`&.${b.disabled}`]: {
                        opacity: (t.vars || t).palette.action.disabledOpacity
                    }
                }, "primary" === e.textColor && {
                    color: (t.vars || t).palette.text.secondary,
                    [`&.${b.selected}`]: {
                        color: (t.vars || t).palette.primary.main
                    },
                    [`&.${b.disabled}`]: {
                        color: (t.vars || t).palette.text.disabled
                    }
                }, "secondary" === e.textColor && {
                    color: (t.vars || t).palette.text.secondary,
                    [`&.${b.selected}`]: {
                        color: (t.vars || t).palette.secondary.main
                    },
                    [`&.${b.disabled}`]: {
                        color: (t.vars || t).palette.text.disabled
                    }
                }, e.fullWidth && {
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0,
                    maxWidth: "none"
                }, e.wrapped && {
                    fontSize: t.typography.pxToRem(12)
                })),
                x = a.forwardRef(function(t, e) {
                    let n = (0, u.Z)({
                            props: t,
                            name: "MuiTab"
                        }),
                        {
                            className: s,
                            disabled: l = !1,
                            disableFocusRipple: c = !1,
                            fullWidth: d,
                            icon: p,
                            iconPosition: f = "top",
                            indicator: m,
                            label: b,
                            onChange: x,
                            onClick: k,
                            onFocus: w,
                            selected: Z,
                            selectionFollowsFocus: C,
                            textColor: T = "inherit",
                            value: P,
                            wrapped: S = !1
                        } = n,
                        j = (0, o.Z)(n, y),
                        L = (0, r.Z)({}, n, {
                            disabled: l,
                            disableFocusRipple: c,
                            selected: Z,
                            icon: !!p,
                            iconPosition: f,
                            label: !!b,
                            fullWidth: d,
                            textColor: T,
                            wrapped: S
                        }),
                        I = g(L),
                        z = p && b && a.isValidElement(p) ? a.cloneElement(p, {
                            className: (0, i.Z)(I.iconWrapper, p.props.className)
                        }) : p,
                        N = t => {
                            !Z && x && x(t, P), k && k(t)
                        },
                        R = t => {
                            C && !Z && x && x(t, P), w && w(t)
                        };
                    return (0, h.jsxs)(v, (0, r.Z)({
                        focusRipple: !c,
                        className: (0, i.Z)(I.root, s),
                        ref: e,
                        role: "tab",
                        "aria-selected": Z,
                        disabled: l,
                        onClick: N,
                        onFocus: R,
                        ownerState: L,
                        tabIndex: Z ? 0 : -1
                    }, j, {
                        children: ["top" === f || "start" === f ? (0, h.jsxs)(a.Fragment, {
                            children: [z, b]
                        }) : (0, h.jsxs)(a.Fragment, {
                            children: [b, z]
                        }), m]
                    }))
                });
            var k = x
        },
        86839: function(t, e, n) {
            n(2784);
            var o = n(6620),
                r = n(52322);
            e.Z = (0, o.Z)((0, r.jsx)("path", {
                d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
            }), "KeyboardArrowLeft")
        },
        76081: function(t, e, n) {
            n(2784);
            var o = n(6620),
                r = n(52322);
            e.Z = (0, o.Z)((0, r.jsx)("path", {
                d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
            }), "KeyboardArrowRight")
        },
        46425: function(t, e, n) {
            var o = n(36855);
            e.Z = o.Z
        },
        77601: function(t, e, n) {
            n.d(e, {
                TT: function() {
                    return s
                },
                Uo: function() {
                    return c
                },
                f7: function() {
                    return u
                },
                oP: function() {
                    return l
                },
                zh: function() {
                    return d
                }
            });
            var o = n(47842),
                r = n(70865),
                a = n(96670),
                i = n(8740),
                s = (0, i.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.tokens,
                        r = n.spacing,
                        a = n.fontSize,
                        i = n.lineHeight;
                    return {
                        title: (0, o.Z)({
                            marginBottom: r.s
                        }, e.up("sm"), {
                            marginBottom: r.base
                        }),
                        centeredTitle: {
                            textAlign: "center",
                            fontSize: a["3xl"],
                            lineHeight: i.m
                        }
                    }
                }),
                l = (0, i.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.tokens,
                        r = n.spacing,
                        a = n.fontSize,
                        i = n.lineHeight,
                        s = n.opacity;
                    return {
                        text: (0, o.Z)({
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            fontSize: a.m,
                            lineHeight: i.s,
                            marginBottom: r.m,
                            marginTop: r.s,
                            opacity: s[90]
                        }, e.up("sm"), {
                            marginBottom: r.base
                        })
                    }
                }),
                c = (0, i.ZL)()(function(t) {
                    var e = t.spacing,
                        n = t.breakpoints;
                    return {
                        container: (0, o.Z)({
                            paddingBottom: e(3)
                        }, n.up("lg"), {
                            paddingBottom: e(4)
                        })
                    }
                }),
                u = (0, i.ZL)()(function() {
                    return {
                        image: {
                            objectFit: "cover",
                            width: "100%",
                            height: "100%"
                        }
                    }
                }),
                d = (0, i.ZL)()(function(t, e) {
                    var n, i = t.breakpoints,
                        s = t.palette,
                        l = t.tokens.radius,
                        c = e.cardSpacing,
                        u = e.cardAspectAsPercent;
                    return {
                        root: (0, a.Z)((0, r.Z)({
                            backgroundColor: s.border1Color,
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            paddingTop: u,
                            borderRadius: l.m
                        }, c && (n = {}, (0, o.Z)(n, i.up("sm"), {
                            paddingTop: c.sm && "calc(".concat(u, " + ").concat(c.sm, "px)")
                        }), (0, o.Z)(n, i.up("md"), {
                            paddingTop: c.md && "calc(".concat(u, " + ").concat(c.md, "px)")
                        }), n)), {
                            "& > picture": {
                                display: "flex",
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: 0,
                                top: 0
                            }
                        })
                    }
                })
        },
        1061: function(t, e, n) {
            n.d(e, {
                C: function() {
                    return g
                }
            });
            var o = n(47842),
                r = n(70865),
                a = n(96670),
                i = n(52322),
                s = n(67550),
                l = n(62197),
                c = n(27050),
                u = n(53957),
                d = n(52566),
                p = n(29296),
                f = n(48417),
                m = n(40374),
                b = n(27764),
                h = n(5632),
                y = (0, n(8740).ZL)()(function(t, e) {
                    var n = t.breakpoints,
                        a = t.spacing,
                        i = t.tokens,
                        s = i.border,
                        l = i.color,
                        d = i.fontWeight,
                        p = t.typography.fontWeightBold,
                        f = e.typeOfStyle,
                        m = e.contentNamespace;
                    return {
                        keywordTitle: {
                            fontWeight: p,
                            whiteSpace: "nowrap"
                        },
                        root: (0, o.Z)({
                            display: "flex",
                            overflowX: "auto",
                            paddingBottom: a(4)
                        }, n.down("sm"), {
                            maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)",
                            msOverflowStyle: "none",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            },
                            scrollbarWidth: "none"
                        }),
                        keyItemLink: {
                            "&:focus-visible > div": (0, r.Z)({}, (0, c.zo)(m) ? f === u.zw.whiteOutline ? {
                                background: "none",
                                border: "".concat(s.width.m, " solid ").concat(l.white)
                            } : {
                                background: l.gray["onyx-50"],
                                border: "".concat(s.width.m, " solid ").concat(l.blue.azure)
                            } : {})
                        },
                        keyItemRoot: (0, r.Z)({}, (0, c.zo)(m) ? f === u.zw.whiteOutline ? {
                            fontWeight: d.bold,
                            border: "1.5px solid ".concat(l.white),
                            margin: 0,
                            "& > svg": {
                                color: "".concat(l.white, " !important")
                            },
                            "&&": {
                                background: "transparent",
                                marginBottom: 0,
                                "&:hover": {
                                    background: "transparent"
                                }
                            }
                        } : {
                            backdropFilter: "blur(3px)",
                            fontWeight: d.bold,
                            margin: 0,
                            "&&": {
                                background: l.gray["onyx-38"],
                                marginBottom: 0,
                                "&:hover": {
                                    background: l.gray["onyx-50"]
                                }
                            }
                        } : {
                            marginBottom: "0px"
                        })
                    }
                }),
                g = function(t) {
                    var e, n, o, r = t.classesProps,
                        a = t.items,
                        m = t.title,
                        g = t.variant,
                        v = t.dataAutomation,
                        x = t.dataOptimize,
                        k = t.customFieldsElementData,
                        w = t.contentNamespace;
                    k && (e = void 0 === (o = (void 0 === (n = k.fields) ? {} : n).typeOfStyle) ? u.zw.default : o);
                    var Z = y({
                            typeOfStyle: e,
                            contentNamespace: w
                        }),
                        C = Z.cx,
                        T = Z.classes,
                        P = (0, h.useRouter)().pathname,
                        S = (0, b.oY)(P);
                    try {
                        return (0, i.jsxs)(s.Z, {
                            display: "flex",
                            overflow: "auto",
                            className: r.wrapper,
                            children: [m && (0, i.jsx)(s.Z, {
                                className: r.title,
                                mr: 4,
                                children: (0, i.jsx)(l.Z, {
                                    className: T.keywordTitle,
                                    color: "primary",
                                    children: m
                                })
                            }), (0, i.jsx)("div", {
                                className: C(T.root, r.keywordsRoot),
                                "data-automation": v,
                                children: null == a ? void 0 : a.map(function(t) {
                                    var e = t.label,
                                        n = t.href,
                                        o = t.trackAnalytics,
                                        a = t.tags,
                                        s = n;
                                    return (u.oN[S] && void 0 !== e && (s = "".concat(u.oN[S], "/").concat((0, f.U9)(e))), "" === e || "" === s || void 0 === e) ? null : (0, i.jsx)(d.k, {
                                        Component: (0, i.jsx)(p.K, {
                                            href: s,
                                            classesProps: {
                                                keyItemRoot: r.keyItemRoot ? r.keyItemRoot : T.keyItemRoot,
                                                keyItemLink: r.keyItemLink ? r.keyItemLink : T.keyItemLink
                                            },
                                            variant: g,
                                            label: e,
                                            trackAnalytics: o,
                                            dataOptimize: x,
                                            tags: a
                                        }, "".concat(e, "-").concat(n)),
                                        tags: a
                                    }, e)
                                })
                            })]
                        })
                    } catch (t) {
                        return (0, c.qr)(t, "CmsKeywords")
                    }
                };
            g.defaultProps = (0, a.Z)((0, r.Z)({}, m.E), {
                classesProps: {},
                dataOptimize: null
            })
        },
        56655: function(t, e, n) {
            n.r(e), n.d(e, {
                CmsTabTable: function() {
                    return N
                }
            });
            var o = n(47842),
                r = n(70865),
                a = n(96670),
                i = n(87394),
                s = n(52322),
                l = n(78675),
                c = n(41075),
                u = n(67550),
                d = n(62197),
                p = n(70180),
                f = n(78287),
                m = n(53957),
                b = n(77601),
                h = n(16050),
                y = n(1061),
                g = n(98702),
                v = n(25237),
                x = n.n(v)()(function() {
                    return Promise.all([n.e(10185), n.e(71728), n.e(55531), n.e(79637), n.e(24949)]).then(n.bind(n, 83391)).then(function(t) {
                        return t.CmsTrackTable
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [83391]
                        }
                    },
                    ssr: !0
                }),
                k = n(90369),
                w = n(36232),
                Z = n(29292),
                C = n(776),
                T = n(3221),
                P = n(2784),
                S = n(8740),
                j = {
                    tab: "tab",
                    tabPanel: "tab_panel"
                },
                L = (0, S.ZL)()(function(t, e) {
                    var n, r = t.palette,
                        a = t.spacing,
                        i = t.breakpoints,
                        s = t.tokens.fontSize,
                        l = e.hasInlineContent;
                    return {
                        tabsRoot: {
                            fontSize: s.m,
                            borderBottomWidth: 1,
                            borderStyle: "solid",
                            borderColor: r.border1Color
                        },
                        inlineContent: (n = {
                            paddingTop: a(3)
                        }, (0, o.Z)(n, i.up("md"), {
                            paddingTop: a(4)
                        }), (0, o.Z)(n, "overflowY", "auto"), n),
                        inlineContentTabsContainer: (0, o.Z)({
                            width: "100%",
                            display: "flex",
                            flexDirection: "column"
                        }, i.up("md"), {
                            flexDirection: "row",
                            justifyContent: l ? "space-between" : "center"
                        })
                    }
                }),
                I = (0, S.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.spacing;
                    return {
                        title: (0, o.Z)({
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: n(3)
                        }, e.up("md"), {
                            paddingBottom: n(4)
                        }),
                        wrapper: (0, o.Z)({
                            flexDirection: "column"
                        }, e.up("md"), {
                            flexDirection: "row",
                            alignItems: "center"
                        })
                    }
                }),
                z = function(t) {
                    var e = t.content,
                        n = t.maxWidth,
                        o = t.showAssetTypeIcon,
                        i = t.assetFormatter;
                    switch (e.type) {
                        case m.wF.assetGrid:
                            return (0, s.jsx)(h.E, (0, a.Z)((0, r.Z)({}, e), {
                                showAssetTypeIcon: o,
                                assetFormatter: i
                            }));
                        case m.wF.audioTrackList:
                            return (0, s.jsx)(x, (0, r.Z)({}, e));
                        case m.wF.linksList:
                        default:
                            return (0, s.jsx)(g.F, (0, a.Z)((0, r.Z)({}, e), {
                                maxWidth: n,
                                withBorder: !0
                            }))
                    }
                },
                N = function(t) {
                    var e = t.analyticsLabels,
                        n = t.assetFormatter,
                        o = t.dataOptimize,
                        h = t.items,
                        g = t.maxWidth,
                        v = t.showAssetTypeIcon,
                        x = t.tabTableTitle,
                        S = t.tabTableInlineContentData,
                        N = t.tabTableThemeMode,
                        R = t.titleVariant,
                        A = t.withConsistentHeight,
                        W = t.cmsBgContainerProps,
                        F = (0, i.Z)((0, P.useState)(0), 2),
                        O = F[0],
                        E = F[1],
                        $ = (0, i.Z)((0, P.useState)(0), 2),
                        B = $[0],
                        _ = $[1],
                        M = (0, P.useRef)(),
                        D = (0, T.t)().classes,
                        H = L({
                            hasInlineContent: !!(null == S ? void 0 : S.fields)
                        }).classes,
                        V = (0, b.Uo)().classes,
                        K = I().classes,
                        q = (0, C.yh)().analytics,
                        J = function(t) {
                            if (t) {
                                var e = (0, Z.SO)({
                                    trackAnalytics: t
                                });
                                q.inlineClick(e)
                            }
                        };
                    return (0, P.useEffect)(function() {
                        var t = function() {
                            return _(0)
                        };
                        return window.addEventListener("resize", t),
                            function() {
                                return window.removeEventListener("resize", t)
                            }
                    }, []), (0, s.jsx)(w.I, {
                        cmsBgContainerProps: W,
                        themeMode: N,
                        children: (0, s.jsx)(C.Mp, {
                            value: null == e ? void 0 : e.section,
                            children: (0, s.jsx)(l.Z, (0, a.Z)((0, r.Z)({
                                maxWidth: g,
                                className: V.container,
                                disableGutters: !0,
                                ref: M,
                                style: {
                                    minHeight: B
                                }
                            }, o && {
                                "data-automation": o
                            }), {
                                children: (0, s.jsxs)(c.ZP, {
                                    container: !0,
                                    children: [x && (0, s.jsx)(c.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, s.jsx)(u.Z, {
                                            pb: 3,
                                            "data-optimize": "CmsTabTable-title",
                                            children: (0, s.jsx)(k.h, {
                                                stringToTransform: x,
                                                Component: (0, s.jsx)(d.Z, {
                                                    color: "primary",
                                                    variant: R,
                                                    component: "h2"
                                                })
                                            })
                                        })
                                    }), (0, s.jsxs)(c.ZP, {
                                        item: !0,
                                        xs: 12,
                                        className: H.inlineContentTabsContainer,
                                        children: [(null == S ? void 0 : S.fields) && (0, s.jsx)("div", {
                                            className: H.inlineContent,
                                            children: (0, s.jsx)(y.C, (0, r.Z)({
                                                classesProps: K,
                                                variant: "outlined",
                                                contentNamespace: m.wF.tabTable
                                            }, S.fields))
                                        }), (0, s.jsx)(u.Z, {
                                            display: "flex",
                                            justifyContent: "center",
                                            ml: {
                                                md: 6
                                            },
                                            pb: {
                                                md: 4
                                            },
                                            children: (0, s.jsx)(p.Z, {
                                                value: O,
                                                onChange: function(t, e) {
                                                    if (A && M.current) {
                                                        var n = M.current.clientHeight;
                                                        n > B && _(n)
                                                    }
                                                    E(e)
                                                },
                                                indicatorColor: "primary",
                                                textColor: "primary",
                                                children: h.map(function(t, e) {
                                                    var n = t.label,
                                                        o = t.trackAnalytics;
                                                    return (0, s.jsx)(f.Z, {
                                                        role: "tab",
                                                        className: D.inlineTabIcon,
                                                        onClick: function() {
                                                            return J(o)
                                                        },
                                                        id: "".concat(j.tab, "_").concat(n),
                                                        "aria-controls": "".concat(j.tabPanel, "_").concat(n.replace(/\s/gi, "_")),
                                                        label: n,
                                                        value: e,
                                                        classes: {
                                                            root: H.tabsRoot
                                                        }
                                                    }, "".concat(j.tab, "_").concat(n))
                                                })
                                            })
                                        })]
                                    }), (0, s.jsxs)(c.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: [(0, s.jsx)(u.Z, {
                                            mt: 3
                                        }), h.map(function(t, e) {
                                            var o = t.label,
                                                r = t.content;
                                            return (0, s.jsx)(u.Z, {
                                                display: "flex",
                                                justifyContent: "center",
                                                role: "tabpanel",
                                                id: "".concat(j.tabPanel, "_").concat(o.replace(/\s/gi, "_")),
                                                "aria-labelledby": "".concat(j.tab, "_").concat(o),
                                                hidden: O !== e,
                                                children: O === e && (0, s.jsx)(z, {
                                                    content: r,
                                                    maxWidth: g,
                                                    showAssetTypeIcon: v,
                                                    assetFormatter: n
                                                })
                                            }, "".concat(j.tabPanel, "_").concat(o.replace(/\s/gi, "_")))
                                        })]
                                    })]
                                })
                            }))
                        })
                    })
                };
            N.defaultProps = {
                items: [],
                tabTableTitle: null,
                tabTableInlineContentData: null,
                trackAnalyticsElementData: null,
                tabTableThemeMode: m.sn,
                dataOptimize: null,
                withConsistentHeight: !1,
                titleVariant: "h5",
                maxWidth: "lg",
                showAssetTypeIcon: !0,
                analyticsLabels: {},
                assetFormatter: null,
                cmsBgContainerProps: {}
            }
        },
        52566: function(t, e, n) {
            n.d(e, {
                k: function() {
                    return s
                }
            });
            var o = n(65532),
                r = function(t) {
                    var e = t.tags,
                        n = t.geoLocation;
                    return e.includes("EXCLUDE") ? !e.includes(n) : e.includes(n)
                },
                a = function(t) {
                    var e = t.tags,
                        n = void 0 === e ? [] : e,
                        a = (0, o.PE)().region;
                    return !!(0 === n.length || r({
                        tags: n,
                        geoLocation: void 0 === a ? "US" : a
                    }))
                },
                i = n(2784),
                s = (0, i.memo)(function(t) {
                    var e = t.Component;
                    return a({
                        tags: t.tags
                    }) ? (0, i.cloneElement)(e) : null
                });
            s.displayName = "CmsTags"
        },
        90369: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return s
                }
            });
            var o = n(70865),
                r = n(52322),
                a = n(2784),
                i = (0, n(8740).ZL)()(function() {
                    return {
                        newline: {
                            whiteSpace: "pre-line"
                        }
                    }
                }),
                s = (0, a.memo)(function(t) {
                    var e = t.stringToTransform,
                        n = t.classes,
                        s = t.Component,
                        l = i(),
                        c = l.classes.newline,
                        u = {
                            className: (0, l.cx)(n, c),
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        };
                    return s ? (0, a.cloneElement)(s, u) : (0, r.jsx)("div", (0, o.Z)({}, u))
                })
        },
        29296: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return Z
                },
                L: function() {
                    return T
                }
            });
            var o = n(47842),
                r = n(70865),
                a = n(87394),
                i = n(50930),
                s = n(52322),
                l = n(62197),
                c = n(66198),
                u = n(9390),
                d = n(66358),
                p = n(39232),
                f = n(18505),
                m = n(65532),
                b = n(29292),
                h = n(75298),
                y = n(97024),
                g = n(67361),
                v = n(3661),
                x = n(12847),
                k = n(2784),
                w = (0, n(8740).ZL)()(function(t) {
                    var e = t.palette,
                        n = t.tokens,
                        o = n.border,
                        r = n.fontWeight,
                        a = n.spacing,
                        i = n.fontSize;
                    return {
                        root: {
                            marginRight: a.s,
                            marginBottom: a.s,
                            paddingLeft: a.s,
                            fontSize: i.xs
                        },
                        centerKeywords: {
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        },
                        link: {
                            "&:focus-visible": {
                                fontWeight: r.bold,
                                outline: 0
                            }
                        },
                        searchIcon: {
                            height: "".concat(16, "px"),
                            width: "".concat(16, "px")
                        },
                        standardKeyword: {
                            padding: a.s,
                            borderRadius: a.xs,
                            border: "solid ".concat(o.width.s, " ").concat(e.border1Color),
                            display: "inline-block"
                        }
                    }
                }),
                Z = function(t) {
                    var e = t.classesProps,
                        n = void 0 === e ? {} : e,
                        o = t.label,
                        r = t.href,
                        a = t.variant,
                        i = t.trackAnalytics,
                        p = t.dataOptimize,
                        h = t.dataAutomation,
                        y = w(),
                        k = y.classes,
                        Z = y.cx,
                        C = (0, m.PE)().locale,
                        T = (0, x.ZV)(o, C),
                        P = (0, b.SO)({
                            trackAnalytics: i
                        }) || "".concat(d.fPZ, ".").concat(d._Y7);
                    return (0, s.jsx)(s.Fragment, {
                        children: "" === r ? (0, s.jsx)(l.Z, {
                            className: Z(k.root, k.standardKeyword),
                            children: T
                        }) : (0, s.jsx)(u.r, {
                            clickAnalyticsLabel: P,
                            clickTrackOptions: i ? void 0 : {
                                label: o
                            },
                            href: r,
                            onClick: function() {
                                (0, v.JD)(f.QP.RELATED)
                            },
                            className: Z(k.link, n.keyItemLink),
                            "data-optimize": void 0 === p ? null : p,
                            "data-automation": void 0 === h ? null : h,
                            children: (0, s.jsx)(c.Z, {
                                classes: {
                                    label: k.label,
                                    root: Z(k.root, n.keyItemRoot)
                                },
                                label: T,
                                variant: a,
                                clickable: !0,
                                tabIndex: -1,
                                icon: (0, s.jsx)(g.Search, {
                                    className: k.searchIcon
                                })
                            })
                        })
                    })
                },
                C = function(t) {
                    var e = t.classesProps,
                        n = t.keywords,
                        l = t.limit,
                        c = t.getPathProps,
                        u = t.variant,
                        d = t.dataOptimize,
                        m = void 0 === d ? null : d,
                        b = (0, y.JI)().assetType;
                    return (0, k.useMemo)(function() {
                        return n && (0, i.Z)(new Set(n)).slice(0, l || n.length).filter(Boolean).map(function(t) {
                            var n = (0, a.Z)(c((0, r.Z)({
                                term: t
                            }, [p.pV, p.X2, p.ox].includes(b) ? (0, o.Z)({}, f.Tv, b) : {})), 1)[0];
                            return (0, s.jsx)(Z, {
                                classesProps: e,
                                label: t,
                                variant: u,
                                href: n,
                                dataOptimize: m
                            }, t)
                        })
                    }, [n, l, c, b, e, u, m])
                },
                T = function(t) {
                    var e = t.classesProps,
                        n = t.isCentered,
                        o = t.keywords,
                        r = t.getPathProps,
                        i = t.fullRender,
                        l = t.limit,
                        c = t.variant,
                        u = t.dataOptimize,
                        d = w().classes,
                        p = (0, a.Z)((0, h.I)({
                            triggerOnce: !0
                        }), 2),
                        f = p[0],
                        m = p[1],
                        b = C({
                            classesProps: e,
                            keywords: o,
                            getPathProps: r,
                            limit: l,
                            variant: c,
                            dataOptimize: u
                        });
                    return b ? (0, s.jsx)("div", {
                        className: n ? d.centerKeywords : void 0,
                        ref: m,
                        children: (i || f) && b
                    }) : null
                };
            T.defaultProps = {
                classesProps: {
                    keyItemRoot: ""
                },
                isCentered: !1,
                fullRender: !1,
                getPathProps: function() {},
                keywords: void 0,
                limit: null,
                variant: void 0,
                dataOptimize: null
            }
        },
        97024: function(t, e, n) {
            n.d(e, {
                JI: function() {
                    return p
                },
                MJ: function() {
                    return u
                },
                Wo: function() {
                    return l
                },
                Ws: function() {
                    return m
                },
                a$: function() {
                    return c
                },
                jm: function() {
                    return d
                }
            });
            var o = n(39232),
                r = n(18505),
                a = n(21770),
                i = n(27764),
                s = n(5632),
                l = function() {
                    var t = (0, s.useRouter)().query[r.jS];
                    return Number(void 0 === t ? 1 : t)
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.defaultPageSize,
                        n = void 0 === e ? 10 : e,
                        o = (0, s.useRouter)().query[r.dp],
                        i = void 0 === o ? n : o;
                    return (0, a.k)(i) ? Number(i) : n
                },
                u = function() {
                    var t = (0, s.useRouter)().query;
                    return {
                        endDate: t[r.BD],
                        startDate: t[r.yZ]
                    }
                },
                d = function() {
                    return {
                        orderBy: (0, s.useRouter)().query[r.qk]
                    }
                },
                p = function() {
                    var t, e = (0, s.useRouter)(),
                        n = e.query,
                        a = n[r.Tv],
                        l = n[r.cb],
                        c = e.asPath,
                        u = (0, i.oY)(c),
                        d = o.cp[l],
                        p = (null === (t = u.match(i._g)) || void 0 === t ? void 0 : t[1]) || a || o.k4,
                        f = (0, i.N6)(u),
                        m = a || d || f,
                        b = (0, i.EV)(u, m),
                        h = o.p_[m];
                    return {
                        assetType: p,
                        assetSubType: b,
                        fullAssetType: m,
                        fullAssetTypeFromPath: f,
                        editorialAssetType: h
                    }
                },
                f = /^\/editorial/i,
                m = function() {
                    var t = (0, s.useRouter)().asPath;
                    return f.test(t)
                }
        },
        67361: function(t, e, n) {
            n.r(e), n.d(e, {
                Search: function() {
                    return i
                }
            });
            var o = n(70865),
                r = n(52322),
                a = (0, n(6620).Z)((0, r.jsx)("path", {
                    d: "M29.333 27.453l-7.587-7.587c1.399-1.787 2.243-4.067 2.243-6.544 0-5.891-4.776-10.667-10.667-10.667S2.655 7.431 2.655 13.322s4.776 10.667 10.667 10.667c2.477 0 4.757-.844 6.567-2.261l7.563 7.604zm-24-14.12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
                }), "Search.svg"),
                i = function(t) {
                    return (0, r.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        40490: function(t, e, n) {
            n.d(e, {
                V: function() {
                    return s
                }
            });
            var o = n(53957),
                r = n(13980),
                a = n.n(r),
                i = n(72505),
                s = {
                    linkAs: a().string,
                    href: a().string,
                    id: a().string,
                    label: a().string,
                    trackAnalytics: a().shape(i.E),
                    variant: a().oneOf([o.xJ, o.Qh])
                }
        },
        40374: function(t, e, n) {
            n.d(e, {
                E: function() {
                    return l
                },
                P: function() {
                    return s
                }
            });
            var o = n(53957),
                r = n(13980),
                a = n.n(r),
                i = n(40490),
                s = {
                    dataAutomation: a().string,
                    id: a().string,
                    items: a().arrayOf(a().shape(i.V)),
                    linksListTitle: a().string,
                    titlePosition: a().oneOf([o.gO, o.nf]),
                    textColor: a().string,
                    bgColor: a().string,
                    type: a().string,
                    listCta: a().shape(i.V),
                    linkListLayout: a().oneOf([o.e_, o.ED]),
                    linksListShowNumbers: a().bool
                },
                l = {
                    dataAutomation: "",
                    titlePosition: o.gO,
                    items: [],
                    textColor: "#FFF",
                    bgColor: "#2C4AE0",
                    linkListLayout: o.e_,
                    linksListShowNumbers: !1
                }
        },
        72505: function(t, e, n) {
            n.d(e, {
                E: function() {
                    return a
                }
            });
            var o = n(13980),
                r = n.n(o),
                a = {
                    label: r().string,
                    section: r().string
                }
        },
        21770: function(t, e, n) {
            n.d(e, {
                k: function() {
                    return o
                }
            });
            var o = function(t) {
                return !Number.isNaN(Number.parseFloat(t)) && !Number.isNaN(+t)
            }
        },
        66866: function(t, e) {
            /**
             * @license React
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n, o = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                l = Symbol.for("react.provider"),
                c = Symbol.for("react.context"),
                u = Symbol.for("react.server_context"),
                d = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                f = Symbol.for("react.suspense_list"),
                m = Symbol.for("react.memo"),
                b = Symbol.for("react.lazy"),
                h = Symbol.for("react.offscreen");

            function y(t) {
                if ("object" == typeof t && null !== t) {
                    var e = t.$$typeof;
                    switch (e) {
                        case o:
                            switch (t = t.type) {
                                case a:
                                case s:
                                case i:
                                case p:
                                case f:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case u:
                                        case c:
                                        case d:
                                        case b:
                                        case m:
                                        case l:
                                            return t;
                                        default:
                                            return e
                                    }
                            }
                        case r:
                            return e
                    }
                }
            }
            n = Symbol.for("react.module.reference"), e.ContextConsumer = c, e.ContextProvider = l, e.Element = o, e.ForwardRef = d, e.Fragment = a, e.Lazy = b, e.Memo = m, e.Portal = r, e.Profiler = s, e.StrictMode = i, e.Suspense = p, e.SuspenseList = f, e.isAsyncMode = function() {
                return !1
            }, e.isConcurrentMode = function() {
                return !1
            }, e.isContextConsumer = function(t) {
                return y(t) === c
            }, e.isContextProvider = function(t) {
                return y(t) === l
            }, e.isElement = function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === o
            }, e.isForwardRef = function(t) {
                return y(t) === d
            }, e.isFragment = function(t) {
                return y(t) === a
            }, e.isLazy = function(t) {
                return y(t) === b
            }, e.isMemo = function(t) {
                return y(t) === m
            }, e.isPortal = function(t) {
                return y(t) === r
            }, e.isProfiler = function(t) {
                return y(t) === s
            }, e.isStrictMode = function(t) {
                return y(t) === i
            }, e.isSuspense = function(t) {
                return y(t) === p
            }, e.isSuspenseList = function(t) {
                return y(t) === f
            }, e.isValidElementType = function(t) {
                return "string" == typeof t || "function" == typeof t || t === a || t === s || t === i || t === p || t === f || t === h || "object" == typeof t && null !== t && (t.$$typeof === b || t.$$typeof === m || t.$$typeof === l || t.$$typeof === c || t.$$typeof === d || t.$$typeof === n || void 0 !== t.getModuleId)
            }, e.typeOf = y
        },
        48570: function(t, e, n) {
            t.exports = n(66866)
        }
    }
]);
//# sourceMappingURL=94024.da5312e1a4b92146.js.map