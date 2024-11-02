"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68555, 65204], {
        46590: function(n, t, e) {
            e.d(t, {
                y: function() {
                    return i
                }
            });
            var o = e(47842),
                i = (0, e(8740).ZL)()(function(n) {
                    var t, e = n.breakpoints,
                        i = n.palette,
                        r = n.tokens,
                        s = r.spacing,
                        a = r.fontSize;
                    return {
                        root: (t = {
                            color: i.info.main,
                            display: "flex",
                            marginTop: s.s
                        }, (0, o.Z)(t, e.up("sm"), {
                            marginTop: s.base
                        }), (0, o.Z)(t, "& > *:not(:first-of-type)", (0, o.Z)({
                            marginLeft: s.s
                        }, e.up("md"), {
                            marginLeft: s.base
                        })), t),
                        buttonWrapper: {
                            display: "flex"
                        },
                        buttonProgress: {
                            position: "absolute"
                        },
                        actionLabel: (0, o.Z)({}, e.down("md"), {
                            display: "none"
                        }),
                        iconSizeMedium: {
                            "& > *:first-of-type": (0, o.Z)({}, e.down("md"), {
                                fontSize: a.icon
                            })
                        },
                        startIcon: (0, o.Z)({}, e.down("md"), {
                            margin: 0
                        })
                    }
                })
        },
        10460: function(n, t, e) {
            e.d(t, {
                m: function() {
                    return l
                }
            });
            var o = e(52322),
                i = e(21647),
                r = e(25237),
                s = e.n(r),
                a = e(9877),
                l = s()(function() {
                    return e.e(37297).then(e.bind(e, 37297)).then(function(n) {
                        return n.AssetTypeIcon
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [37297]
                        }
                    },
                    loading: function() {
                        return (0, o.jsx)(i.Z, {
                            width: a.Iu,
                            height: a.Iu
                        })
                    },
                    ssr: !1
                })
        },
        9877: function(n, t, e) {
            e.d(t, {
                Er: function() {
                    return r
                },
                Iu: function() {
                    return i
                },
                f0: function() {
                    return o
                }
            });
            var o = 240,
                i = 24,
                r = 16
        },
        1284: function(n, t, e) {
            e.d(t, {
                j: function() {
                    return v
                }
            });
            var o = e(52322),
                i = e(73601),
                r = e(66358),
                s = e(37546),
                a = e(44297),
                l = e(9823),
                c = e(94909),
                u = e(5528),
                d = e(65860),
                p = e(2784),
                h = e(62967),
                f = function(n) {
                    var t = n.asset,
                        e = n.onAssetModalHandler,
                        a = n.tooltipPlacement,
                        l = (0, c.d)(),
                        u = (0, s.Lr)(t).id,
                        d = (0, p.useCallback)(function() {
                            e({
                                assetId: u,
                                eventLabel: r.tLd
                            })
                        }, [u, e]);
                    return (0, o.jsx)(i.M, {
                        isMobile: l,
                        onClickHandler: d,
                        tooltipPlacement: a
                    })
                },
                m = function(n) {
                    var t = n.asset,
                        e = n.classesProps,
                        i = n.cx,
                        r = n.overlayClasses,
                        s = n.showPreview,
                        c = n.onAssetModalHandler,
                        u = n.TopRightContentComponent,
                        d = (0, l.D)().isBrandSstk,
                        p = (0, a.aT)(t) && !(0, a.N3)(t) && !(0, a.k7)(t) && d;
                    return s || u ? (0, o.jsxs)("div", {
                        className: i(r.topRightContainer, e.preview),
                        children: [u, !p && s && (0, o.jsx)(f, {
                            asset: t,
                            onAssetModalHandler: c
                        })]
                    }) : null
                },
                v = function(n) {
                    var t = n.asset,
                        e = n.BottomLeftContentComponent,
                        i = n.BottomRightContentComponent,
                        r = n.CenterContentComponent,
                        s = n.FullSizeContentComponent,
                        l = n.classesProps,
                        c = n.isActive,
                        f = n.onAssetModalHandler,
                        v = n.overlayClassName,
                        g = n.showPreviewIcon,
                        b = n.TopLeftContentComponent,
                        x = n.TopRightContentComponent,
                        C = n.withGradient,
                        y = n.forceTopLeftContent,
                        w = n.forceBottomRightContent,
                        B = n.isEnterprise,
                        L = (0, h.b)({
                            asset: t
                        }),
                        j = L.classes,
                        k = L.cx,
                        P = (0, d.a)({
                            asset: t,
                            isEnterprise: B
                        }).classes,
                        Z = (0, u.c)(),
                        A = g && f && !(0, a.w5)(t) && !(0, a.f8)(t) && (!(0, a.eh)(t) || Z),
                        I = (0, p.useMemo)(function() {
                            return (0, o.jsx)(m, {
                                asset: t,
                                cx: k,
                                classesProps: l,
                                overlayClasses: P,
                                showPreviewIcon: g,
                                onAssetModalHandler: f,
                                TopRightContentComponent: x,
                                showPreview: A
                            })
                        }, [x, t, l, k, f, P, g, A]);
                    return (0, o.jsxs)("div", {
                        className: k(P.root, v),
                        children: [(c || y) && !!b && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                className: k(P.topLeftContainer, j.topLeftContent),
                                children: b
                            }), C && (0, o.jsx)("div", {
                                className: k(P.topOverlay, l.topOverlay)
                            })]
                        }), e && e, !!s && (0, o.jsx)("div", {
                            className: j.fullSizeContent,
                            children: s
                        }), I, !!r && (0, o.jsx)("div", {
                            className: j.centerContent,
                            children: r
                        }), (c || w) && !!i && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                className: k(P.bottomRightContainer, l.bottomRightContent),
                                children: i
                            }), C && (0, o.jsx)("div", {
                                className: k(P.bottomOverlay, l.bottomOverlay)
                            })]
                        })]
                    })
                };
            v.defaultProps = {
                BottomLeftContentComponent: null,
                BottomRightContentComponent: null,
                classesProps: {
                    preview: ""
                },
                CenterContentComponent: null,
                FullSizeContentComponent: null,
                isActive: !1,
                onAssetModalHandler: null,
                overlayClassName: null,
                showPreviewIcon: !0,
                TopLeftContentComponent: null,
                TopRightContentComponent: null,
                withGradient: !0,
                forceBottomRightContent: !1,
                forceTopLeftContent: !1,
                isEnterprise: !1
            }
        },
        41707: function(n, t, e) {
            e.d(t, {
                A: function() {
                    return d
                }
            });
            var o = e(52322),
                i = e(61245),
                r = e(38237),
                s = e(37546),
                a = e(25237),
                l = e.n(a)()(function() {
                    return e.e(78088).then(e.bind(e, 78088)).then(function(n) {
                        return n.ContentTierLogoOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [78088]
                        }
                    },
                    ssr: !1
                }),
                c = function(n) {
                    var t = n.asset,
                        e = n.isActive,
                        i = (0, s.Lr)(t),
                        a = i.isFootageSelect,
                        c = i.isPremium;
                    return a || c ? (0, o.jsx)(l, {
                        type: a ? r.S7 : r.Rf,
                        isExpanded: !c && e
                    }) : null
                };
            c.defaultProps = {
                isActive: !1
            };
            var u = e(44297),
                d = function(n) {
                    var t = n.asset,
                        e = n.isHovered;
                    return (0, u.Am)(t) ? (0, o.jsx)(c, {
                        asset: t,
                        isActive: e
                    }) : (0, o.jsx)(i.ImageOverlayBottomLeftContent, {
                        asset: t,
                        isActive: e
                    })
                };
            d.defaultProps = {
                isHovered: !1
            }
        },
        89082: function(n, t, e) {
            e.d(t, {
                V: function() {
                    return g
                }
            });
            var o = e(52322),
                i = e(10460),
                r = e(62197),
                s = e(37546),
                a = e(8740),
                l = (0, a.ZL)()(function(n) {
                    return {
                        title: {
                            fontWeight: n.typography.fontWeightBold
                        },
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "100%",
                            overflow: "hidden"
                        }
                    }
                }),
                c = function(n) {
                    var t = n.asset,
                        e = n.isVideo,
                        i = (0, s.Lr)(t),
                        a = i.title,
                        c = i.description,
                        u = i.dateTaken,
                        d = l().classes;
                    return (0, o.jsxs)("div", {
                        className: d.container,
                        children: [(0, o.jsxs)(r.Z, {
                            className: d.title,
                            color: "inherit",
                            variant: "subtitle1",
                            noWrap: !0,
                            children: [e ? a : c, (0, o.jsx)("br", {})]
                        }), (0, o.jsx)(r.Z, {
                            color: "inherit",
                            variant: "caption",
                            children: u
                        })]
                    })
                };
            c.defaultProps = {
                isVideo: !1
            };
            var u = (0, a.ZL)()(function(n) {
                    return {
                        title: {
                            fontWeight: n.typography.fontWeightBold
                        },
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "100%",
                            overflow: "hidden"
                        }
                    }
                }),
                d = function(n) {
                    var t = n.asset,
                        e = n.isBrandEnterprise,
                        i = t.title,
                        s = t.id,
                        a = u().classes;
                    return (0, o.jsxs)("div", {
                        className: a.container,
                        children: [(0, o.jsx)(r.Z, {
                            className: a.title,
                            color: "inherit",
                            variant: "subtitle1",
                            noWrap: !0,
                            children: i
                        }), e && (0, o.jsx)(r.Z, {
                            color: "inherit",
                            variant: "subtitle2",
                            children: s
                        })]
                    })
                },
                p = e(8928),
                h = e(44297),
                f = e(9823),
                m = e(62967),
                v = function(n) {
                    var t = n.asset,
                        e = n.hideResolution,
                        i = n.isBrandEnterprise,
                        r = (0, h.EK)(t),
                        s = (0, h.Am)(t),
                        a = (0, h.aT)(t);
                    return r ? (0, o.jsx)(c, {
                        asset: t,
                        isVideo: s
                    }) : s ? (0, o.jsx)(p.F, {
                        asset: t,
                        hideResolution: e
                    }) : a && i || a ? (0, o.jsx)(d, {
                        asset: t,
                        isBrandEnterprise: i
                    }) : null
                },
                g = function(n) {
                    var t = n.asset,
                        e = n.isHovered,
                        r = n.hideResolution,
                        a = n.showAssetTypeIcon,
                        l = (0, m.b)({
                            asset: t
                        }).classes,
                        c = (0, f.D)(),
                        u = c.isBrandSstk,
                        d = c.isBrandEnterprise,
                        p = (0, s.Lr)(t),
                        g = (0, h.PD)(p),
                        b = (0, h.aT)(t),
                        x = (0, h.EK)(t);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(u && e || a) && !(u && g) && !(u && b && !x) && (0, o.jsx)("div", {
                            className: l.assetTypeIcon,
                            children: (0, o.jsx)(i.m, {
                                asset: t,
                                color: "primary.contrastText"
                            })
                        }), (0, o.jsx)(v, {
                            asset: t,
                            isHovered: e,
                            hideResolution: r,
                            isBrandEnterprise: d,
                            showAssetTypeIcon: a
                        })]
                    })
                };
            g.defaultProps = {
                asset: null,
                isHovered: !1,
                hideResolution: !1,
                showAssetTypeIcon: !1
            }
        },
        62967: function(n, t, e) {
            e.d(t, {
                b: function() {
                    return a
                }
            });
            var o = e(73180),
                i = e(37546),
                r = e(44297),
                s = e(8740);
            (0, s.ZL)()(function(n, t) {
                var e = t.size;
                return {
                    root: {
                        position: "relative",
                        width: e,
                        height: e
                    }
                }
            });
            var a = (0, s.ZL)()(function(n) {
                var t = n.tokens,
                    e = t.color,
                    s = t.spacing,
                    a = t.font.lineHeight,
                    l = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).asset,
                    c = (0, o.U)(l),
                    u = (0, i.Lr)(l),
                    d = (0, r.PD)(u),
                    p = "60%";
                return d && (p = "50%"), d && c ? p = "70%" : c && (p = "90%"), {
                    centerContent: {
                        padding: "0 ".concat(s.m),
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        "&&": {
                            pointerEvents: "none"
                        }
                    },
                    fullSizeContent: {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        height: "100%",
                        width: "100%"
                    },
                    assetTypeIcon: {
                        marginRight: s.s,
                        lineHeight: a.s
                    },
                    topLeftContent: {
                        color: e.white,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        maxWidth: "".concat(p),
                        width: "fit-content"
                    }
                }
            })
        },
        73180: function(n, t, e) {
            e.d(t, {
                U: function() {
                    return o
                }
            });
            var o = function(n) {
                return (null == n ? void 0 : n.aspect) >= .4 && (null == n ? void 0 : n.aspect) <= 1.3
            }
        },
        61245: function(n, t, e) {
            e.r(t), e.d(t, {
                ImageOverlayBottomLeftContent: function() {
                    return T
                }
            });
            var o = e(52322),
                i = e(47842),
                r = e(87394),
                s = e(50930),
                a = e(73180),
                l = e(66358),
                c = e(37546),
                u = e(44297),
                d = e(54112),
                p = e(94909),
                h = e(5528),
                f = e(43110),
                m = e(65094),
                v = e(65204),
                g = e(58370),
                b = e(75),
                x = e(2784),
                C = e(8740),
                y = e(68054),
                w = (0, C.ZL)()(function(n, t) {
                    var e, o = n.breakpoints,
                        r = n.tokens,
                        s = r.color,
                        a = r.spacing,
                        l = t.isUserLoggedIn,
                        c = t.isUniversalHome;
                    return {
                        overlayButtonRoot: (e = {
                            padding: a.s,
                            marginBottom: 0
                        }, (0, i.Z)(e, o.up("md"), {
                            padding: a.base
                        }), (0, i.Z)(e, "backgroundColor", s.gray["onyx-38"]), (0, i.Z)(e, "color", s.white), (0, i.Z)(e, "&:hover", {
                            backgroundColor: s.gray["onyx-60"]
                        }), e),
                        overlayRootContainer: {
                            marginTop: 0,
                            alignItems: "center",
                            display: "flex"
                        },
                        similarButtonOverlay: {
                            cursor: "pointer",
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            zIndex: 3,
                            margin: a.s
                        },
                        similarButtonOverlayThinAssets: {
                            cursor: "pointer",
                            position: "absolute",
                            right: l ? 0 : "calc(-".concat(a.base, " + ").concat(a.xs, ")"),
                            left: c ? 0 : null,
                            bottom: c ? 0 : a.l,
                            zIndex: 3,
                            marginBottom: a.base,
                            marginRight: l ? a.s : "calc(".concat(a.m, " - ").concat(a.xs, ")"),
                            margin: c ? a.s : null
                        }
                    }
                }),
                B = function(n) {
                    var t = n.asset,
                        e = n.isHovered,
                        i = (0, m.E)({
                            asset: t
                        }).showSimilarButton,
                        C = (0, f.B)(),
                        B = w({
                            isUserLoggedIn: C,
                            isUniversalHome: (0, h.c)()
                        }).classes,
                        L = (0, p.d)({
                            breakpoint: "sm"
                        }),
                        j = (0, c.Lr)(t).id,
                        k = (0, u.Tp)(t),
                        P = (0, r.Z)((0, g.u8)({
                            id: j,
                            assetType: k
                        }), 1)[0],
                        Z = (0, a.U)(t),
                        A = (0, d.D)({
                            namespace: b.tuJ,
                            translationKeys: {
                                similar: "common:actions_similar"
                            }
                        }).labels,
                        I = (0, x.useMemo)(function() {
                            return (0, s.Z)(i ? [{
                                label: A.similar,
                                href: P,
                                rel: "nofollow",
                                Icon: (0, o.jsx)(v.VisuallySimilar, {}),
                                clickAnalyticsLabel: l.Kgh
                            }] : [])
                        }, [i, A.similar, P]);
                    return e && !L && (0, o.jsx)("div", {
                        className: Z && !C ? B.similarButtonOverlayThinAssets : B.similarButtonOverlay,
                        children: (0, o.jsx)(y.p, {
                            buttons: I,
                            withActionLabel: !L,
                            classesProps: {
                                buttonRoot: B.overlayButtonRoot,
                                rootContainer: B.overlayRootContainer
                            }
                        })
                    })
                };
            B.defaultProps = {
                isHovered: !1
            };
            var L = e(38237),
                j = e(9823),
                k = e(25237),
                P = e.n(k),
                Z = e(56641),
                A = P()(function() {
                    return e.e(43874).then(e.bind(e, 43874)).then(function(n) {
                        return n.OffsetLogoOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [43874]
                        }
                    },
                    ssr: !1
                }),
                I = P()(function() {
                    return e.e(78088).then(e.bind(e, 78088)).then(function(n) {
                        return n.ContentTierLogoOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [78088]
                        }
                    },
                    ssr: !1
                }),
                R = P()(function() {
                    return Promise.all([e.e(55199), e.e(23845)]).then(e.bind(e, 75092)).then(function(n) {
                        return n.AiSearchLogoOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75092]
                        }
                    },
                    ssr: !1
                }),
                T = function(n) {
                    var t, e = n.asset,
                        i = n.isActive,
                        r = (0, j.D)().isBrandEnterprise,
                        s = (0, c.Lr)(e),
                        a = (0, u.PD)(s),
                        l = (0, u.f8)(e),
                        d = (0, u.aT)(e) && !(0, u.EK)(e);
                    return a ? (0, o.jsx)(A, {
                        positionY: r ? "bottom" : "top"
                    }) : l ? (0, o.jsx)(Z.s, {
                        positionY: r ? "bottom" : "top"
                    }) : s.isPremium ? (0, o.jsx)(I, {
                        type: L.Rf,
                        isExpanded: i
                    }) : (null == e ? void 0 : null === (t = e.meta) || void 0 === t ? void 0 : t.isAiSearch) ? (0, o.jsx)(R, {
                        asset: e
                    }) : d ? (0, o.jsx)(B, {
                        asset: e,
                        isHovered: i
                    }) : null
                };
            T.defaultProps = {
                isActive: !1
            }
        },
        56641: function(n, t, e) {
            e.d(t, {
                s: function() {
                    return i
                }
            });
            var o = e(25237),
                i = e.n(o)()(function() {
                    return Promise.all([e.e(45504), e.e(63082)]).then(e.bind(e, 63082)).then(function(n) {
                        return n.PixelSquidLogoOverlay
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [63082]
                        }
                    },
                    ssr: !1
                })
        },
        68054: function(n, t, e) {
            e.d(t, {
                p: function() {
                    return g
                }
            });
            var o = e(70865),
                i = e(96670),
                r = e(26297),
                s = e(52322),
                a = e(72841),
                l = e(67550),
                c = e(46590),
                u = e(59312),
                d = e(47999),
                p = e(59481),
                h = e(9823),
                f = function(n) {
                    var t = n.hasIcon,
                        e = n.withActionLabel;
                    return t && e ? "contained" : e ? "text" : void 0
                },
                m = function(n) {
                    var t = n.Icon,
                        e = n.withActionLabel,
                        o = !!t;
                    return {
                        color: o ? "primary" : "inherit",
                        variant: f({
                            hasIcon: o,
                            withActionLabel: e
                        }),
                        startIcon: e ? t : void 0,
                        size: e ? "medium" : "small"
                    }
                },
                v = function(n) {
                    var t = n.label,
                        e = n.withActionLabel,
                        l = n.classesProps,
                        c = n.classes,
                        u = n.ButtonComponent,
                        d = n.isBrandSstk,
                        p = n.href,
                        h = n.onClick,
                        f = n.isLoading,
                        v = n.disabled,
                        g = n.Icon,
                        b = n.clickAnalyticsLabel,
                        x = (0, r.Z)(n, ["label", "withActionLabel", "classesProps", "classes", "ButtonComponent", "isBrandSstk", "href", "onClick", "isLoading", "disabled", "Icon", "clickAnalyticsLabel"]);
                    return (0, s.jsx)(u, (0, i.Z)((0, o.Z)({
                        classes: {
                            root: l.buttonRoot,
                            iconSizeMedium: c.iconSizeMedium,
                            startIcon: c.startIcon
                        },
                        onClick: h,
                        href: p,
                        disabled: f || v,
                        "aria-label": t,
                        labelTrack: d ? b : t,
                        "data-automation": t
                    }, m({
                        Icon: g,
                        withActionLabel: e
                    }), x), {
                        children: e ? (0, s.jsxs)(s.Fragment, {
                            children: [f && (0, s.jsx)(a.Z, {
                                color: "inherit",
                                size: 18,
                                className: c.buttonProgress
                            }), (0, s.jsx)("span", {
                                className: c.actionLabel,
                                children: t
                            })]
                        }) : g
                    }))
                },
                g = function(n) {
                    var t = n.classesProps,
                        e = n.buttons,
                        i = n.withActionLabel,
                        a = (0, c.y)(),
                        f = a.classes,
                        m = a.cx,
                        g = i ? d.z : p.h,
                        b = (0, h.D)().isBrandSstk;
                    return (0, s.jsx)(l.Z, {
                        className: m(f.root, t.rootContainer),
                        children: e.map(function(n) {
                            var e = n.show,
                                a = n.label,
                                c = n.hasTooltip,
                                d = (0, r.Z)(n, ["show", "label", "hasTooltip"]);
                            return (void 0 === e || e) && (0, s.jsx)(l.Z, {
                                className: f.buttonWrapper,
                                children: c ? (0, s.jsx)(u.l, {
                                    title: a,
                                    placement: "top",
                                    children: v((0, o.Z)({
                                        label: a,
                                        withActionLabel: i,
                                        classesProps: t,
                                        classes: f,
                                        ButtonComponent: g,
                                        isBrandSstk: b
                                    }, d))
                                }) : v((0, o.Z)({
                                    label: a,
                                    withActionLabel: i,
                                    classesProps: t,
                                    classes: f,
                                    ButtonComponent: g,
                                    isBrandSstk: b
                                }, d))
                            }, a)
                        })
                    })
                };
            g.defaultProps = {
                classesProps: {},
                withActionLabel: !0
            }
        },
        73601: function(n, t, e) {
            e.d(t, {
                M: function() {
                    return p
                }
            });
            var o = e(70865),
                i = e(96670),
                r = e(52322),
                s = e(85801),
                a = e(59312),
                l = e(52691),
                c = e(75),
                u = e(59877),
                d = e(33943),
                p = function(n) {
                    var t = n.onClickHandler,
                        e = n.isMobile,
                        p = n.tooltipPlacement,
                        h = (0, d.c)().classes,
                        f = (0, (0, u.$G)(c.tuJ).t)("common:actions_preview"),
                        m = {
                            classes: {
                                root: h.darkBackgroundIcon
                            },
                            disableRipple: !0,
                            "aria-label": f,
                            onClick: t
                        };
                    return e ? (0, r.jsx)(s.Z, (0, i.Z)((0, o.Z)({
                        size: "large"
                    }, m), {
                        children: (0, r.jsx)(l.E, {})
                    })) : (0, r.jsx)(a.l, {
                        title: f,
                        placement: p,
                        children: (0, r.jsx)(s.Z, (0, i.Z)((0, o.Z)({
                            size: "large"
                        }, m), {
                            children: (0, r.jsx)(l.E, {
                                className: h.iconContainer
                            })
                        }))
                    })
                };
            p.defaultProps = {
                onClickHandler: function() {},
                tooltipPlacement: "bottom"
            }
        },
        33943: function(n, t, e) {
            e.d(t, {
                c: function() {
                    return r
                }
            });
            var o = e(70865),
                i = e(96670),
                r = (0, e(8740).ZL)()(function(n) {
                    var t = n.tokens,
                        e = t.color,
                        r = t.spacing,
                        s = {
                            display: "flex",
                            flexDirection: "column"
                        };
                    return {
                        darkBackgroundIcon: {
                            padding: r.s,
                            marginLeft: r.xxs,
                            backgroundColor: e.gray["onyx-38"],
                            color: e.white,
                            "&:hover": {
                                backgroundColor: e.gray["onyx-60"]
                            }
                        },
                        iconContainer: (0, i.Z)((0, o.Z)({}, s), {
                            color: e.white,
                            "&:hover": {
                                color: e["white-70"]
                            }
                        }),
                        iconContainerDisabled: (0, i.Z)((0, o.Z)({}, s), {
                            color: e["white-70"]
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
                            color: e.white
                        },
                        iconLabel: {
                            "&:hover": {
                                color: e["white-70"]
                            },
                            color: e.white,
                            display: "flex",
                            flexDirection: "column"
                        }
                    }
                })
        },
        8928: function(n, t, e) {
            e.d(t, {
                F: function() {
                    return l
                }
            });
            var o = e(52322),
                i = e(62197),
                r = e(37546),
                s = e(81631),
                a = (0, e(8740).ZL)()({
                    resolution: {
                        fontWeight: "bold",
                        lineHeight: "inherit"
                    }
                }),
                l = function(n) {
                    var t = n.asset,
                        e = n.hideResolution,
                        l = a().classes,
                        c = (0, r.Lr)(t),
                        u = c.duration,
                        d = c.sizes,
                        p = !e && (0, r.mF)(d);
                    return (0, o.jsx)(i.Z, {
                        variant: "subtitle2",
                        color: "inherit",
                        noWrap: !0,
                        children: (0, o.jsx)("div", {
                            className: l.resolution,
                            children: "".concat(p ? p.toLocaleUpperCase() : "", " ").concat((0, s.mr)(u))
                        })
                    })
                };
            l.defaultProps = {
                hideResolution: !1
            }
        },
        38237: function(n, t, e) {
            e.d(t, {
                Rf: function() {
                    return o
                },
                S7: function() {
                    return i
                },
                sK: function() {
                    return r
                }
            });
            var o = "premium",
                i = "select",
                r = "call_for_price"
        },
        84866: function(n, t, e) {
            e.d(t, {
                bI: function() {
                    return s
                },
                n_: function() {
                    return a
                }
            });
            var o = e(70314),
                i = e.n(o),
                r = function(n) {
                    var t = n.name,
                        e = i()().publicRuntimeConfig.campaign;
                    return (null == e ? void 0 : e[t]) || null
                },
                s = function(n) {
                    var t = i()().publicRuntimeConfig.assets.cdnHostURL;
                    if (t && n.id) return "".concat(t, "/").concat("dream/photos", "/").concat(n.id, ".jpg")
                },
                a = function(n) {
                    var t, e = n.contributorId,
                        o = null === (t = r({
                            name: "dream"
                        })) || void 0 === t ? void 0 : t.contributorId;
                    return !!o && (Array.isArray(o) || (o = [o]), !!e && o.includes(Number(e)))
                }
        },
        33967: function(n, t, e) {
            e.d(t, {
                a: function() {
                    return u
                }
            });
            var o = e(33301),
                i = e(84866),
                r = e(43110),
                s = e(92405),
                a = e(2784),
                l = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.isLoading,
                        e = n.withinCampaign,
                        o = void 0 !== e && e;
                    return {
                        isLoading: void 0 !== t && t,
                        isAssetFreeToDownload: o,
                        canPreview: !o,
                        canShare: !o,
                        canEdit: !o,
                        canTry: !o,
                        canSaveToCollection: !o,
                        canSeeDetailsModal: !o
                    }
                },
                c = function() {
                    var n = (0, s.p)(o.NV);
                    return {
                        data: {
                            isDreamCampaignEnabled: n
                        },
                        isValidating: void 0 === n
                    }
                },
                u = function(n) {
                    var t = (n || {}).contributor,
                        e = c(),
                        o = e.data,
                        s = e.isValidating,
                        u = (0, r.B)(),
                        d = null == t ? void 0 : t.id;
                    return (0, a.useMemo)(function() {
                        var n = u && s;
                        return !n && o.isDreamCampaignEnabled && u && (0, i.n_)({
                            contributorId: null != d ? d : ""
                        }) ? l({
                            withinCampaign: !0
                        }) : l({
                            isLoading: n
                        })
                    }, [s, o, d, u])
                }
        },
        65094: function(n, t, e) {
            e.d(t, {
                E: function() {
                    return h
                }
            });
            var o = e(33301),
                i = e(29858),
                r = e(44297),
                s = e(33967),
                a = e(9823),
                l = e(5528),
                c = e(5632),
                u = e(10728),
                d = e(92405),
                p = function(n) {
                    var t = (n || {}).contributor,
                        e = (0, s.a)({
                            contributor: t
                        }),
                        o = e.isLoading;
                    return {
                        showDownloadForFreeButton: e.isAssetFreeToDownload,
                        isEditRestrictedByCampaign: !e.canEdit || o,
                        isShareRestrictedByCampaign: !e.canShare || o,
                        isTryRestrictedByCampaign: !e.canTry || o,
                        isCollectionSaveRestrictedByCampaign: !e.canSaveToCollection || o
                    }
                },
                h = function(n) {
                    var t = n.asset,
                        e = n.isCatalog,
                        s = void 0 !== e && e,
                        h = n.withGoToPageAction,
                        f = n.isExternalToOrg,
                        m = void 0 !== f && f,
                        v = n.showPreviewIcon,
                        g = n.onAssetModalHandler,
                        b = (0, a.D)(),
                        x = b.isBrandSstk,
                        C = b.isBrandEnterprise,
                        y = (0, c.useRouter)().asPath,
                        w = p(t),
                        B = w.showDownloadForFreeButton,
                        L = w.isEditRestrictedByCampaign,
                        j = w.isShareRestrictedByCampaign,
                        k = w.isTryRestrictedByCampaign,
                        P = w.isCollectionSaveRestrictedByCampaign,
                        Z = (0, r.EK)(t),
                        A = (0, r.zz)(t),
                        I = (0, r.w5)(t),
                        R = (0, r.PD)(t),
                        T = (0, r.ML)(t),
                        E = (0, r.vh)(t.type),
                        S = (0, r.yw)({
                            asset: t
                        }),
                        z = (0, r.aT)(t),
                        H = (0, r.EK)(t),
                        D = (0, r.fn)(t),
                        N = (null == y ? void 0 : y.includes(i.H5)) && (null == y ? void 0 : y.includes("clip-".concat(t.id))),
                        M = (0, r.Am)(t),
                        O = (0, r.f8)(t),
                        F = M && Z,
                        V = (0, d.p)(o.cR, !1),
                        W = (0, u.d)(),
                        G = (0, d.p)(o.Jo),
                        U = (0, d.p)(o.iH),
                        _ = z && !H && !S,
                        K = (0, l.c)(),
                        J = !(s || A || E || T || P),
                        Q = !(H || x && R || A || N || O || S);
                    return {
                        showEditButtonOnAQV: (z || D || M && W && U) && !Z && (x || V && C) && !R && !(D && m) && !I && !(O && s),
                        showSimilarButtonOnAQV: !H && !(x && R) && !s && !E && !S,
                        showOpenInSameButton: void 0 !== h && h && !s,
                        showEditDesignButton: T && !Z && !m,
                        showEditTemplateButton: E && !Z,
                        showShareButton: !(F || A || D || T || j || S),
                        showEditButton: (z || E || (D || T) && !m || M && W && G) && !(Z || x && R || L || O),
                        showTryButton: x && !(F || A || E || T || k || S || O),
                        showSaveButton: J,
                        showSimilarButton: Q,
                        showDownloadForFreeButton: B,
                        showCreateButton: !R && (z && !E || !H),
                        showGenerateMoreButton: S,
                        showGenerateActionButtons: S,
                        showPreviewButton: void 0 !== v && v && g && _ && !I && !O && K,
                        showSaveButtonOverlay: J && (!(_ || R) || O),
                        showSimilarButtonOverlay: Q && !_
                    }
                }
        },
        10728: function(n, t, e) {
            e.d(t, {
                d: function() {
                    return s
                }
            });
            var o = e(33301),
                i = e(9823),
                r = e(92405);

            function s() {
                var n = (0, r.p)(),
                    t = (0, i.D)().isBrandEnterprise;
                if (!n) return !1;
                var e = n[o.Cl],
                    s = n[o.lm];
                return t ? s : e
            }
        },
        52691: function(n, t, e) {
            e.d(t, {
                E: function() {
                    return l
                }
            });
            var o = e(70865),
                i = e(52322),
                r = e(6620),
                s = e(2784),
                a = (0, r.Z)((0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("path", {
                        d: "M14.667 8H12v4H8v2.667h4v4h2.667v-4h4V12h-4V8z"
                    }), (0, i.jsx)("path", {
                        d: "M21.747 19.867c1.399-1.787 2.243-4.067 2.243-6.544 0-5.891-4.776-10.667-10.667-10.667S2.656 7.432 2.656 13.323 7.432 23.99 13.323 23.99c2.477 0 4.757-.844 6.567-2.261l7.563 7.604 1.88-1.88zm-8.414 1.466c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
                    })]
                }), "LargePreview.svg"),
                l = (0, s.memo)(function(n) {
                    return (0, i.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                });
            l.displayName = "LargePreview"
        },
        65204: function(n, t, e) {
            e.r(t), e.d(t, {
                VisuallySimilar: function() {
                    return s
                }
            });
            var o = e(70865),
                i = e(52322),
                r = (0, e(6620).Z)((0, i.jsx)("path", {
                    d: "M24 3.333H8V6h16V3.333zM2.667 14v16h26.667V14H2.667zm24 13.333H5.334V16.666h21.333v10.667zm0-18.666H5.334v2.667h21.333V8.667z"
                }), "VisuallySimilar.svg"),
                s = function(n) {
                    return (0, i.jsx)(r, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        65860: function(n, t, e) {
            e.d(t, {
                a: function() {
                    return c
                }
            });
            var o = e(73180),
                i = e(37546),
                r = e(44297),
                s = e(9823),
                a = e(8740),
                l = "100px",
                c = (0, a.ZL)()(function(n) {
                    var t = n.tokens,
                        e = t.spacing,
                        a = t.color,
                        c = t.zIndex,
                        u = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).asset,
                        d = (0, s.D)().isBrandSstk,
                        p = (0, r.EK)(u),
                        h = (0, o.U)(u) && !p && d && !(0, r.k7)(u),
                        f = (0, i.Lr)(u),
                        m = (0, r.PD)(f),
                        v = (0, r.f8)(u),
                        g = d && (m || v),
                        b = h && (null == u ? void 0 : u.description.length) < 5,
                        x = "0px";
                    return m && h && (x = "35px"), h && (x = "30px"), {
                        root: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: 0,
                            zIndex: c["2"],
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
                            background: "\n      linear-gradient(\n        to bottom,\n        ".concat(a.gray["onyx-38"], " 0,\n        ").concat(a.gray["onyx-12"], " ").concat(p ? e.xl : e.l, ",\n        transparent ").concat(p ? e["3xl"] : e.xxl, "\n      )"),
                            height: l,
                            pointerEvents: "none"
                        },
                        bottomOverlay: {
                            width: "100%",
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            background: "\n        linear-gradient(\n        to top,\n        ".concat(a.gray["onyx-38"], " 0,\n        ").concat(a.gray["onyx-12"], " ").concat(e.xl, ",\n        transparent ").concat(e.xxl, "\n      )"),
                            height: l,
                            pointerEvents: "none"
                        },
                        topLeftContainer: {
                            zIndex: c["1"],
                            position: "absolute",
                            top: 0,
                            left: 0,
                            marginTop: "".concat(g ? "14px" : e.s),
                            marginLeft: "".concat(g ? e.xl : e.s)
                        },
                        topRightContainer: {
                            position: "absolute",
                            right: 0,
                            top: b ? 0 : "".concat(x),
                            zIndex: c["1"],
                            margin: e.s,
                            minWidth: "calc(100% - ".concat(e.s, " - ").concat(e.s, ")"),
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
                            zIndex: c["1"],
                            paddingLeft: e.s,
                            paddingBottom: e.s
                        },
                        bottomRightContainer: {
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            paddingRight: e.s,
                            paddingBottom: e.s,
                            zIndex: c["1"]
                        }
                    }
                })
        }
    }
]);
//# sourceMappingURL=68555-071b7d946198206f.js.map