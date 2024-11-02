"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [86783, 68533, 39107], {
        77601: function(t, e, n) {
            n.d(e, {
                TT: function() {
                    return s
                },
                Uo: function() {
                    return c
                },
                f7: function() {
                    return d
                },
                oP: function() {
                    return l
                },
                zh: function() {
                    return u
                }
            });
            var i = n(47842),
                r = n(70865),
                o = n(96670),
                a = n(8740),
                s = (0, a.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.tokens,
                        r = n.spacing,
                        o = n.fontSize,
                        a = n.lineHeight;
                    return {
                        title: (0, i.Z)({
                            marginBottom: r.s
                        }, e.up("sm"), {
                            marginBottom: r.base
                        }),
                        centeredTitle: {
                            textAlign: "center",
                            fontSize: o["3xl"],
                            lineHeight: a.m
                        }
                    }
                }),
                l = (0, a.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.tokens,
                        r = n.spacing,
                        o = n.fontSize,
                        a = n.lineHeight,
                        s = n.opacity;
                    return {
                        text: (0, i.Z)({
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            fontSize: o.m,
                            lineHeight: a.s,
                            marginBottom: r.m,
                            marginTop: r.s,
                            opacity: s[90]
                        }, e.up("sm"), {
                            marginBottom: r.base
                        })
                    }
                }),
                c = (0, a.ZL)()(function(t) {
                    var e = t.spacing,
                        n = t.breakpoints;
                    return {
                        container: (0, i.Z)({
                            paddingBottom: e(3)
                        }, n.up("lg"), {
                            paddingBottom: e(4)
                        })
                    }
                }),
                d = (0, a.ZL)()(function() {
                    return {
                        image: {
                            objectFit: "cover",
                            width: "100%",
                            height: "100%"
                        }
                    }
                }),
                u = (0, a.ZL)()(function(t, e) {
                    var n, a = t.breakpoints,
                        s = t.palette,
                        l = t.tokens.radius,
                        c = e.cardSpacing,
                        d = e.cardAspectAsPercent;
                    return {
                        root: (0, o.Z)((0, r.Z)({
                            backgroundColor: s.border1Color,
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            paddingTop: d,
                            borderRadius: l.m
                        }, c && (n = {}, (0, i.Z)(n, a.up("sm"), {
                            paddingTop: c.sm && "calc(".concat(d, " + ").concat(c.sm, "px)")
                        }), (0, i.Z)(n, a.up("md"), {
                            paddingTop: c.md && "calc(".concat(d, " + ").concat(c.md, "px)")
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
        85087: function(t, e, n) {
            n.d(e, {
                T: function() {
                    return f
                }
            });
            var i = n(47842),
                r = n(52322),
                o = n(62197),
                a = n(75),
                s = n(59877),
                l = n(2784),
                c = n(8740),
                d = function(t, e, n, i, r) {
                    if (i) {
                        t.current.textContent = "";
                        return
                    }
                    var o = t.current.textContent,
                        a = r ? o.length + 1 : o.length + (n ? 1 : -1),
                        s = e.slice(0, a);
                    t.current.textContent = s
                },
                u = function(t) {
                    var e = t.targetElementRef,
                        n = t.animatedListOfWords,
                        i = void 0 === n ? [] : n,
                        r = null,
                        o = i[0],
                        a = !1,
                        s = 0,
                        c = function() {
                            s >= i.length && (s = 0), o = i[s]
                        },
                        u = function(t) {
                            var n, i = !0,
                                l = !1,
                                m = e.current.textContent;
                            t && (null == m ? void 0 : m.length) < (null == o ? void 0 : o.length) ? n = 100 : m.length > 0 ? (i = !1, n = 100, m.length !== o.length || a ? a = !1 : (a = !0, n = 1200)) : (l = !0, a = !1, s += 1, c(), n = 2e3), d(e, o, i, l, a), r = setTimeout(u.bind(null, i), n)
                        };
                    (0, l.useEffect)(function() {
                        return u(!0),
                            function() {
                                return clearTimeout(r)
                            }
                    }, [i, u])
                },
                m = (0, c.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.textShadows,
                        r = t.palette;
                    return {
                        size: {
                            minHeight: "7rem"
                        },
                        container: (0, i.Z)({
                            display: "inline-block"
                        }, e.down("md"), {
                            display: "block"
                        }),
                        cursor: {
                            display: "inline-block",
                            marginLeft: "0.1rem",
                            backgroundColor: r.text.primary,
                            width: "3px",
                            color: r.text.primary,
                            textShadow: null == n ? void 0 : n.primary,
                            animation: "$blink 1s infinite"
                        },
                        "@keyframes blink": {
                            "0%": {
                                backgroundColor: "#ffffff"
                            },
                            "49%": {
                                backgroundColor: "#ffffff"
                            },
                            "50%": {
                                backgroundColor: "transparent"
                            },
                            "99%": {
                                backgroundColor: "transparent"
                            },
                            "100%": {
                                backgroundColor: "#ffffff"
                            }
                        }
                    }
                }),
                p = function(t) {
                    var e = t.t;
                    return {
                        staticCMSTitle: e("home:cms_animated_headline_static_title"),
                        dynamicCMSTitle1: e("home:cms_animated_headline_dynamic_title_1"),
                        dynamicCMSTitle2: e("home:cms_animated_headline_dynamic_title_2"),
                        dynamicCMSTitle3: e("home:cms_animated_headline_dynamic_title_3"),
                        dynamicCMSTitle4: e("home:cms_animated_headline_dynamic_title_4")
                    }
                },
                f = function(t) {
                    var e = t.classes,
                        n = m().classes,
                        i = p({
                            t: (0, s.$G)(a.kU9).t
                        }),
                        c = (0, l.useRef)(null);
                    return u({
                        targetElementRef: c,
                        animatedListOfWords: [i.dynamicCMSTitle1, i.dynamicCMSTitle2, i.dynamicCMSTitle3, i.dynamicCMSTitle4]
                    }), (0, r.jsx)("div", {
                        className: "".concat(e.title, " ").concat(n.size),
                        children: (0, r.jsxs)(o.Z, {
                            color: "primary",
                            variant: "h3",
                            component: "h1",
                            children: [i.staticCMSTitle, (0, r.jsx)("br", {}), (0, r.jsxs)("span", {
                                className: n.container,
                                children: [(0, r.jsx)("span", {
                                    "data-automation": "dynamicSpanRef",
                                    ref: c
                                }), (0, r.jsx)("span", {
                                    className: n.cursor,
                                    children: "\xa0"
                                })]
                            })]
                        })
                    })
                };
            f.defaultProps = {
                classes: {}
            }
        },
        71486: function(t, e, n) {
            n.d(e, {
                D: function() {
                    return l
                }
            });
            var i = n(52322),
                r = n(8740),
                o = n(15545),
                a = n(10460),
                s = (0, r.ZL)()(function(t) {
                    return {
                        root: {
                            display: "flex",
                            alignItems: "center"
                        },
                        icon: {
                            marginRight: (0, t.spacing)(4)
                        }
                    }
                }),
                l = function(t) {
                    var e = t.asset,
                        n = t.classesProps,
                        r = t.contributorVariant,
                        l = t.gridItems,
                        c = t.withAssetTitle,
                        d = t.withAssetTypeIcon,
                        u = t.openInANewTab,
                        m = s(),
                        p = m.classes,
                        f = m.cx;
                    return (0, i.jsxs)("div", {
                        className: f(p.root, n.root),
                        children: [d && (0, i.jsx)("div", {
                            className: p.icon,
                            children: (0, i.jsx)(a.m, {
                                asset: e
                            })
                        }), (0, i.jsx)(o.J, {
                            asset: e,
                            classesProps: n,
                            contributorVariant: r,
                            gridItems: l,
                            withAssetTitle: c,
                            isUploaded: null == e ? void 0 : e.isUpload,
                            openInANewTab: u
                        })]
                    })
                };
            l.defaultProps = {
                classesProps: {},
                contributorVariant: "caption",
                gridItems: [],
                withAssetTitle: !1,
                withAssetTypeIcon: !1,
                openInANewTab: !1
            }
        },
        15545: function(t, e, n) {
            n.d(e, {
                J: function() {
                    return I
                }
            });
            var i = n(52322),
                r = n(41929),
                o = n(8740),
                a = n(87394),
                s = n(21647),
                l = n(9390),
                c = n(787),
                d = n(39232),
                u = n(65532),
                m = n(44297),
                p = n(42005),
                f = n(89522),
                h = n(20580),
                g = n(12847),
                x = (0, o.ZL)()(function(t) {
                    var e = t.spacing,
                        n = t.palette;
                    return {
                        titleContainer: {
                            fontWeight: t.typography.fontWeightBold,
                            marginBottom: 0,
                            color: n.primary.main
                        },
                        root: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: e(2)
                        },
                        trackLogo: {
                            display: "flex",
                            alignItems: "center",
                            marginRight: e(3)
                        },
                        title: {
                            "&:focus": {
                                textDecoration: "underline",
                                outline: "none"
                            }
                        },
                        copy: {
                            cursor: "text"
                        }
                    }
                }),
                y = function(t) {
                    var e = t.asset,
                        n = t.assetType,
                        i = t.locale,
                        r = "",
                        o = n !== d.xF;
                    switch (n) {
                        case d.pX:
                            r = null == e ? void 0 : e.description;
                            break;
                        case d.tn:
                        case d.xF:
                        default:
                            r = (null == e ? void 0 : e.title) || (null == e ? void 0 : e.name)
                    }
                    return r = (0, g.ZV)(r, i), o ? (0, g.aS)(r, 28) : r
                },
                v = function(t) {
                    var e = t.asset,
                        n = t.classesProps,
                        o = t.gridItems,
                        g = t.asLink,
                        v = t.isUploaded,
                        b = t.openInANewTab,
                        k = x(),
                        Z = k.classes,
                        w = k.cx,
                        C = (0, u.PE)().locale,
                        j = (0, p.w)(),
                        P = (0, m.Tp)(e),
                        T = y({
                            asset: e,
                            assetType: P,
                            locale: C
                        }),
                        I = (0, a.Z)((0, f.KC)({
                            asset: e
                        }), 2),
                        S = I[0],
                        L = I[1],
                        _ = P === d.xF,
                        N = (0, m.O)({
                            track: e,
                            useContentTier: !0
                        }),
                        A = g ? (0, i.jsx)(l.r, {
                            className: w(n.title, Z.title, Z.titleContainer),
                            underline: !0,
                            href: S,
                            linkAs: L,
                            onClick: (0, h.h)(function() {
                                j({
                                    asset: e,
                                    gridItems: o,
                                    eventLabel: P === d.xF ? "trackTitle" : ""
                                })
                            }),
                            "data-automation": "AssetTitleLink",
                            "data-optimize": "hero-assetTitle",
                            target: b ? "_blank" : "_self",
                            children: T
                        }) : (0, i.jsx)("span", {
                            role: "none",
                            onClick: r.X0,
                            className: w(Z.copy, Z.titleContainer),
                            children: T
                        });
                    return (0, i.jsxs)("div", {
                        className: Z.root,
                        children: [_ && !v && (0, i.jsx)("div", {
                            className: Z.trackLogo,
                            children: (0, i.jsx)(c.IC, {
                                isPremiumBeat: N
                            })
                        }), T ? A : (0, i.jsx)(s.Z, {
                            width: 240
                        })]
                    })
                };
            v.defaultProps = {
                classesProps: {},
                gridItems: [],
                asLink: !0,
                isUploaded: !1,
                openInANewTab: !1
            };
            var b = n(62197),
                k = n(776),
                Z = n(75),
                w = n(59877),
                C = n(9877),
                j = (0, o.ZL)()(function(t) {
                    var e = t.palette;
                    return {
                        contributorLink: {
                            color: e.info.main,
                            "&:focus": {
                                textDecoration: "underline",
                                outline: "none"
                            }
                        },
                        colorPrimary: {
                            color: "".concat(e.primary.main, " !important")
                        },
                        root: {
                            display: "flex",
                            alignItems: "center"
                        }
                    }
                }),
                P = function(t) {
                    var e = t.asset,
                        n = t.classesProps,
                        o = t.contributorVariant,
                        a = t.openInANewTab,
                        c = j(),
                        d = c.classes,
                        u = c.cx,
                        p = (0, w.$G)(Z.fLX),
                        f = p.t,
                        h = p.ready,
                        g = (0, k.wU)(),
                        x = (0, m.Cs)({
                            asset: e
                        }),
                        y = x.contributor,
                        v = x.contributorHref,
                        P = x.contributorAsPath,
                        T = {
                            contributorLink: (0, m.zz)(e) ? (0, i.jsx)("span", {
                                className: u(n.contributorLink, d.colorPrimary)
                            }) : (0, i.jsx)(l.r, {
                                className: u(d.contributorLink, n.contributorLink),
                                href: v,
                                linkAs: P,
                                onClick: r.X0,
                                underline: !0,
                                clickAnalyticsLabel: "".concat(g, ".artistName"),
                                "data-optimize": "hero-assetAttribution",
                                target: a ? "_blank" : "_self"
                            })
                        };
                    return v && h ? (0, i.jsx)(b.Z, {
                        className: u(n.contributorWrapper, n.contributorName, d.root),
                        variant: o,
                        color: "primary",
                        children: (0, i.jsx)(w.cC, {
                            i18nKey: "ent:by_contributor_link",
                            ns: Z.fLX,
                            t: f,
                            components: T,
                            values: {
                                CONTRIBUTOR: y
                            }
                        })
                    }) : (0, i.jsx)(s.Z, {
                        className: u(d.root, n.contributorWrapper),
                        width: C.f0
                    })
                };
            P.defaultProps = {
                classesProps: {},
                contributorVariant: "caption",
                openInANewTab: !1
            };
            var T = (0, o.ZL)()(function() {
                    return {
                        root: {
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            justifyContent: "center"
                        }
                    }
                }),
                I = function(t) {
                    var e = t.asset,
                        n = t.classesProps,
                        o = t.contributorVariant,
                        a = t.gridItems,
                        s = t.withAssetTitle,
                        l = t.asLink,
                        c = t.externalId,
                        d = t.isUploaded,
                        u = t.openInANewTab,
                        m = T().classes,
                        p = (e || {}).isUpload;
                    return (0, i.jsxs)("div", {
                        className: m.root,
                        children: [s && (0, i.jsx)(v, {
                            asset: e,
                            classesProps: n,
                            gridItems: a,
                            asLink: l,
                            isUploaded: d,
                            openInANewTab: u
                        }), !p && (0, i.jsx)(P, {
                            asset: e,
                            classesProps: n,
                            contributorVariant: o,
                            gridItems: a,
                            openInANewTab: u
                        }), !p && c && (0, i.jsx)("strong", {
                            role: "none",
                            onClick: r.X0,
                            children: c
                        })]
                    })
                };
            I.defaultProps = {
                classesProps: {
                    root: "",
                    contributorName: "",
                    contributorLink: "",
                    contributorWrapper: "",
                    title: ""
                },
                externalId: "",
                contributorVariant: "",
                gridItems: [],
                withAssetTitle: !1,
                asLink: !0,
                isUploaded: !1,
                openInANewTab: !1
            }
        },
        10460: function(t, e, n) {
            n.d(e, {
                m: function() {
                    return l
                }
            });
            var i = n(52322),
                r = n(21647),
                o = n(25237),
                a = n.n(o),
                s = n(9877),
                l = a()(function() {
                    return n.e(37297).then(n.bind(n, 37297)).then(function(t) {
                        return t.AssetTypeIcon
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [37297]
                        }
                    },
                    loading: function() {
                        return (0, i.jsx)(r.Z, {
                            width: s.Iu,
                            height: s.Iu
                        })
                    },
                    ssr: !1
                })
        },
        9877: function(t, e, n) {
            n.d(e, {
                Er: function() {
                    return o
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
                o = 16
        },
        96503: function(t, e, n) {
            n.d(e, {
                q: function() {
                    return r
                }
            });
            var i = n(25237),
                r = n.n(i)()(function() {
                    return n.e(26100).then(n.bind(n, 26100)).then(function(t) {
                        return t.CmsCopyTextUHP
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [26100]
                        }
                    },
                    ssr: !0
                })
        },
        86783: function(t, e, n) {
            n.r(e), n.d(e, {
                CmsHero: function() {
                    return q
                }
            });
            var i, r, o = n(47842),
                a = n(70865),
                s = n(96670),
                l = n(26297),
                c = n(87394),
                d = n(52322),
                u = n(78675),
                m = n(62197),
                p = n(96976),
                f = n(53957),
                h = n(71486),
                g = n(95438),
                x = n(14910),
                y = n(7884),
                v = n(91609),
                b = n(73469),
                k = n(94909),
                Z = n(2784),
                w = n(8740),
                C = n(4418),
                j = n(96503),
                P = n(67550),
                T = n(99619),
                I = n(62021),
                S = n(37205),
                L = function(t) {
                    var e = t.initialProps;
                    return (0, d.jsx)(S.v, (0, a.Z)({}, e))
                },
                _ = n(88849),
                N = {
                    flagID: "rn-394-lihp-search-asset-type-content-mix",
                    id: "RN-394",
                    name: "Search Asset Type Content Mix",
                    treatments: (i = {}, (0, o.Z)(i, _.NM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, Z.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var i = (0, s.Z)((0, a.Z)({}, n), {
                            shouldUseContentMixForDropdown: !1
                        });
                        return (0, d.jsx)(L, {
                            initialProps: i
                        })
                    }), (0, o.Z)(i, _.vG, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, Z.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var i = (0, s.Z)((0, a.Z)({}, n), {
                            shouldUseContentMixForDropdown: !0
                        });
                        return (0, d.jsx)(L, {
                            initialProps: i
                        })
                    }), i)
                },
                A = function() {
                    return (0, d.jsx)(d.Fragment, {})
                },
                z = function(t) {
                    return (0, d.jsx)(I.K, {
                        config: N,
                        initialProps: t,
                        Portal: L,
                        SkeletonLoader: A
                    })
                },
                R = n(85087),
                D = n(90369),
                B = function(t) {
                    var e = t.classes,
                        n = t.withTitle,
                        i = t.withSubtitle,
                        r = t.displayAnimatedHeadline,
                        o = t.title,
                        a = t.subtitle;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [n && (r ? (0, d.jsx)(R.T, {
                            classes: e
                        }) : (0, d.jsx)("div", {
                            className: e.title,
                            children: (0, d.jsx)(D.h, {
                                stringToTransform: o,
                                Component: (0, d.jsx)(m.Z, {
                                    color: "primary",
                                    variant: "h3",
                                    component: "h1",
                                    "data-optimize": "cms-headline"
                                })
                            })
                        })), i && (0, d.jsx)(P.Z, {
                            pb: 5,
                            pt: 2,
                            children: (0, d.jsx)(D.h, {
                                stringToTransform: a,
                                Component: (0, d.jsx)(m.Z, {
                                    fontWeight: "fontWeightRegular",
                                    variant: "h6",
                                    component: "h2",
                                    color: "primary",
                                    "data-optimize": "cms-sub-headline"
                                })
                            })
                        })]
                    })
                };
            B.defaultProps = {
                subtitle: "",
                title: "",
                classes: {},
                withTitle: !1,
                withSubtitle: !1,
                displayAnimatedHeadline: !1
            };
            var H = function(t) {
                    var e = t.initialProps;
                    return (0, d.jsx)(B, (0, a.Z)({}, e))
                },
                M = n(59877),
                O = n(75),
                E = {
                    flagID: "rn-337-lihp-hero-copy-generic",
                    id: "RN-337",
                    name: "updated messaging on the LIHP",
                    treatments: (r = {}, (0, o.Z)(r, _.NM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        return (0, Z.useEffect)(function() {
                            e.recordImpression()
                        }, []), (0, d.jsx)(H, {
                            initialProps: n
                        })
                    }), (0, o.Z)(r, _.vG, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, Z.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var i = (0, M.$G)(O.kU9).t,
                            r = (0, s.Z)((0, a.Z)({}, n), {
                                displayAnimatedHeadline: !1,
                                title: i("hero_title_everything_you_need"),
                                subtitle: i("hero_subtitle_all_at_your_fingertips")
                            });
                        return (0, d.jsx)(H, {
                            initialProps: r
                        })
                    }), (0, o.Z)(r, _._Z, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, Z.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var i = (0, M.$G)(O.kU9).t,
                            r = (0, s.Z)((0, a.Z)({}, n), {
                                displayAnimatedHeadline: !1,
                                title: i("hero_title_bring_ideas"),
                                subtitle: i("hero_subtitle_any_content_you_need")
                            });
                        return (0, d.jsx)(H, {
                            initialProps: r
                        })
                    }), (0, o.Z)(r, _.Dh, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        (0, Z.useEffect)(function() {
                            e.recordImpression()
                        }, []);
                        var i = (0, M.$G)(O.kU9).t,
                            r = (0, s.Z)((0, a.Z)({}, n), {
                                displayAnimatedHeadline: !1,
                                title: i("hero_title_support_artists"),
                                subtitle: i("hero_subtitle_get_assets_you_need")
                            });
                        return (0, d.jsx)(H, {
                            initialProps: r
                        })
                    }), r)
                },
                W = function() {
                    return (0, d.jsx)(d.Fragment, {})
                },
                U = function(t) {
                    return (0, d.jsx)(I.K, {
                        config: E,
                        initialProps: t,
                        Portal: H,
                        SkeletonLoader: W
                    })
                },
                F = (0, w.ZL)()(function(t, e) {
                    var n = t.breakpoints,
                        i = t.textShadows,
                        r = t.palette,
                        a = t.tokens,
                        s = a.border,
                        l = a.color,
                        c = a.spacing,
                        d = e.withSubtitle,
                        u = e.isCenterAlign;
                    return {
                        title: (0, o.Z)({
                            display: "flex",
                            justifyContent: d ? "flex-start" : "center",
                            textAlign: d && !u ? "left" : "center",
                            paddingBottom: d ? 0 : c.base
                        }, n.down("md"), {
                            justifyContent: "center",
                            textAlign: "center"
                        }),
                        text: {
                            color: r.text.primary,
                            textShadow: i.primary,
                            textAlign: u && "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: u && "center"
                        },
                        buttonContainer: (0, o.Z)({
                            display: "flex",
                            flexDirection: "column"
                        }, n.up("sm"), {
                            flexDirection: "row",
                            justifyContent: u && "center"
                        }),
                        button: (0, o.Z)({
                            marginBottom: c.s
                        }, n.up("sm"), {
                            marginBottom: 0,
                            marginRight: c.base
                        }),
                        logo: {
                            margin: u ? "0 auto" : "0 auto 0 0"
                        },
                        keywordsRoot: {
                            gap: c.s
                        },
                        keywordsTitle: {
                            display: "flex",
                            alignItems: "center",
                            textShadow: i.primary,
                            paddingBottom: c.base
                        },
                        searchBar: (0, o.Z)({
                            margin: "0 -".concat(c.base),
                            backdropFilter: "blur(3px)",
                            background: l.gray["onyx-38"],
                            padding: c.base
                        }, n.up("sm"), {
                            borderRadius: s.radius.l,
                            margin: 0
                        }),
                        heroLinksWrapper: {
                            minHeight: "calc(".concat(c.xl, " + ").concat(c.s, ")")
                        }
                    }
                }),
                G = (0, Z.memo)(function(t) {
                    var e, n = t.alignment,
                        i = t.buttons,
                        r = t.hideSearchByAsset,
                        o = t.linksList,
                        l = t.logo,
                        c = t.preTitle,
                        u = t.subtitle,
                        h = t.title,
                        g = t.dynamicData,
                        x = t.withSearchBar,
                        y = t.showSubtitle,
                        k = t.showTitle,
                        w = t.classesProps,
                        j = t.displayAnimatedHeadline,
                        I = (0, b.i)({
                            themeMode: v.oc.DARK
                        }).theme,
                        S = y || u && (i || x || !h.trim()),
                        L = k && (j || h),
                        _ = F({
                            isCenterAlign: n === f.AE,
                            withSubtitle: S
                        }),
                        N = _.classes,
                        A = _.cx,
                        R = i && i.length > 1;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(p.Z, {
                            theme: I,
                            children: (0, d.jsxs)("div", {
                                className: A(N.text, w.text),
                                children: [c && (0, d.jsx)(m.Z, {
                                    variant: "h6",
                                    color: "primary",
                                    children: (0, d.jsx)(P.Z, {
                                        fontWeight: "fontWeightRegular",
                                        children: c
                                    })
                                }), l && (0, d.jsx)("img", {
                                    alt: l.title,
                                    className: N.logo,
                                    loading: "lazy",
                                    src: l.url,
                                    style: {
                                        height: l.height
                                    }
                                }), (L || S) && (0, d.jsx)(U, {
                                    classes: N,
                                    withSubtitle: S,
                                    withTitle: L,
                                    displayAnimatedHeadline: j,
                                    title: h,
                                    subtitle: u
                                })]
                            })
                        }), x && (0, d.jsx)("div", {
                            className: N.searchBar,
                            children: (0, d.jsx)(z, {
                                hideSearchByAsset: r,
                                splitCategories: !0
                            })
                        }), i && (0, d.jsx)(p.Z, {
                            theme: I,
                            children: (0, d.jsx)("div", {
                                className: N.buttonContainer,
                                children: i.map(function(t, n) {
                                    return (0, Z.createElement)(C.Y, (0, s.Z)((0, a.Z)({}, t), {
                                        classesProps: {
                                            button: R ? N.button : ""
                                        },
                                        key: null !== (e = t.id) && void 0 !== e ? e : n
                                    }))
                                })
                            })
                        }), o && (0, d.jsx)(p.Z, {
                            theme: I,
                            children: (0, d.jsx)(P.Z, {
                                display: "flex",
                                justifyContent: "center",
                                pt: 3,
                                className: N.heroLinksWrapper,
                                children: (0, d.jsx)(T.GB, (0, s.Z)((0, a.Z)({
                                    variant: "default",
                                    dataAutomation: "Hero_LinksList_Container",
                                    classesProps: {
                                        title: N.keywordsTitle,
                                        keywordsRoot: N.keywordsRoot
                                    }
                                }, o), {
                                    dynamicData: g,
                                    contentNamespace: f.wF.hero,
                                    dataOptimize: "cms-keywords"
                                }))
                            })
                        })]
                    })
                });
            G.defaultProps = {
                alignment: f.zo,
                buttons: null,
                hideSearchByAsset: !0,
                showTitle: !0,
                classesProps: {}
            };
            var K = "30vh",
                V = (0, w.ZL)()(function(t, e) {
                    var n, i = t.breakpoints,
                        r = t.textShadows,
                        l = t.tokens,
                        c = l.color,
                        d = l.spacing,
                        u = l.zIndex,
                        m = t.transitions,
                        p = t.typography,
                        f = e.backgroundColor,
                        h = e.isShortHero,
                        g = e.imageRight,
                        x = e.isSplitHero,
                        y = e.containerHeight,
                        v = (0, o.Z)({
                            position: "absolute",
                            height: "100%",
                            left: "50%",
                            right: "50%",
                            margin: "0 calc(-50% - ".concat(d.m, ")")
                        }, i.down("sm"), {
                            margin: "0 calc(-50% - ".concat(d.base, ")")
                        }),
                        b = (0, a.Z)({
                            backgroundColor: f || c.gray.slate
                        }, v);
                    return {
                        creditLine: (0, s.Z)((0, a.Z)({}, v), (0, o.Z)({
                            textShadow: r.primary,
                            textAlign: "right",
                            height: "auto",
                            bottom: 0,
                            paddingRight: d.xs
                        }, i.up("md"), {
                            paddingBottom: d.xxs,
                            paddingRight: d.s
                        })),
                        heroImageRoot: (0, s.Z)((0, a.Z)({}, b), {
                            overflow: "hidden"
                        }),
                        heroImage: {
                            height: "auto",
                            minHeight: "100%"
                        },
                        heroContainer: (0, s.Z)((0, a.Z)((0, o.Z)({
                            zIndex: u[1],
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: h ? K : "40vh"
                        }, i.up("lg"), (0, a.Z)({}, !y && {
                            minHeight: h ? K : "550px"
                        })), y && {
                            height: "".concat(y),
                            minHeight: "".concat(y)
                        }), {
                            "&:before": (0, s.Z)((0, a.Z)({}, b), {
                                content: '""',
                                top: 0
                            })
                        }),
                        heroContent: (0, a.Z)({
                            position: "relative",
                            padding: "".concat(d["3xl"], " 0")
                        }, x && {
                            flex: "50%",
                            padding: 0,
                            maxWidth: "100%"
                        }),
                        videoRoot: {
                            visibility: "hidden",
                            opacity: 0,
                            transition: m.create(["opacity"], {
                                easing: m.easing.sharp,
                                duration: m.duration.short
                            }),
                            "&&": (0, s.Z)((0, a.Z)({}, v), {
                                top: 0,
                                width: "auto",
                                "& video": {
                                    objectFit: "cover"
                                }
                            }),
                            "& > div": {
                                paddingTop: "0"
                            }
                        },
                        videoVisible: {
                            opacity: 1,
                            visibility: "visible"
                        },
                        assetIconMeta: (0, o.Z)({
                            zIndex: 1,
                            position: "absolute",
                            height: "auto",
                            bottom: 0,
                            left: 0,
                            paddingBottom: d.s
                        }, i.up("lg"), {
                            paddingBottom: d.base
                        }),
                        title: {
                            fontWeight: p.fontWeightRegular
                        },
                        contributorName: (0, o.Z)({}, i.down("sm"), {
                            marginTop: d.xs
                        }),
                        contributorLink: (0, o.Z)({
                            marginLeft: d.xs,
                            marginRight: d.xs
                        }, i.down("sm"), {
                            display: "inline-block",
                            minWidth: d.xl
                        }),
                        bottomGradientOverlay: (n = {
                            position: "absolute",
                            bottom: 0,
                            pointerEvents: "none",
                            background: "\n      linear-gradient(\n        to top,\n        ".concat(c.gray["onyx-50"], " 0%,\n        ").concat(c.gray["onyx-38"], " 35%,\n        transparent 60%,\n        transparent 100%\n      )"),
                            left: "-".concat(d.base),
                            right: "-".concat(d.base),
                            height: "100px"
                        }, (0, o.Z)(n, i.up("sm"), {
                            left: "-".concat(d.m),
                            right: "-".concat(d.m)
                        }), (0, o.Z)(n, i.up("lg"), {
                            height: "160px"
                        }), n),
                        splitHero: {
                            display: "flex",
                            flexDirection: g ? "row" : "row-reverse",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            margin: "0 auto",
                            maxWidth: 1200,
                            "&:before": {
                                backgroundColor: "transparent"
                            }
                        },
                        twoCols: {
                            flex: "50%",
                            maxWidth: "100%"
                        }
                    }
                }),
                q = function(t) {
                    var e = t.backgroundColor,
                        n = t.creditLine,
                        i = t.ContentComponent,
                        r = t.image,
                        w = t.images,
                        P = t.isShortHero,
                        T = t.video,
                        I = t.customAssetMetadata,
                        S = (t.heroMediaModuleLayout, t.heroType),
                        L = t.imageLocation,
                        _ = t.copyText,
                        N = t.contentType,
                        A = t.dynamicData,
                        z = t.showIconMeta,
                        R = t.containerHeight,
                        D = (0, l.Z)(t, ["backgroundColor", "creditLine", "ContentComponent", "image", "images", "isShortHero", "video", "customAssetMetadata", "heroMediaModuleLayout", "heroType", "imageLocation", "copyText", "contentType", "dynamicData", "showIconMeta", "containerHeight"]),
                        B = S === f.nu.split,
                        H = L === f.O_,
                        M = (0, b.i)({
                            themeMode: v.oc.DARK
                        }).theme,
                        O = V({
                            isShortHero: P,
                            backgroundColor: e,
                            imageRight: H,
                            isSplitHero: B,
                            containerHeight: R
                        }),
                        E = O.classes,
                        W = O.cx,
                        U = (0, k.d)({
                            breakpoint: "sm",
                            defaultMatches: !0
                        }),
                        F = (0, c.Z)((0, Z.useState)(!1), 2),
                        G = F[0],
                        K = F[1],
                        q = (0, d.jsx)(i, (0, s.Z)((0, a.Z)({}, D), {
                            dynamicData: A
                        }));
                    return _ && (q = (0, d.jsx)(j.q, {
                        childrenData: [_.copyTextCta],
                        contentNamespace: N,
                        CmsDynamicEntryContainer: C.Y,
                        sanitizedCopy: _.sanitizedCopy,
                        textAlignment: _.textAlignment,
                        title: _.title
                    })), (0, d.jsxs)("div", {
                        className: W(E.heroContainer, (0, o.Z)({}, E.splitHero, B)),
                        children: [r && !w && (0, d.jsx)(g.J, {
                            image: r,
                            lazyLoadImage: !1,
                            fetchPriority: "high",
                            dataOptimize: "hero-image",
                            classesProps: {
                                root: E.heroImageRoot,
                                image: E.heroImage
                            },
                            contentNamespace: f.wF.hero
                        }), T && !U && (0, d.jsx)(y.M, {
                            posterUrl: null == r ? void 0 : r.url,
                            classesProps: {
                                root: W(E.videoRoot, (0, o.Z)({}, E.videoVisible, G))
                            },
                            video: T,
                            controls: !1,
                            onCanPlay: function() {
                                return K(!0)
                            }
                        }), w && (0, d.jsx)("div", {
                            className: E.twoCols,
                            children: (0, d.jsx)(x.O, {
                                heroMediaModulesElementsData: w.map(function(t) {
                                    return {
                                        fields: {
                                            imageHeroImage: {
                                                title: t.title,
                                                url: t.url
                                            }
                                        }
                                    }
                                })
                            })
                        }), (0, d.jsx)(u.Z, {
                            maxWidth: "lg",
                            classes: {
                                root: E.heroContent
                            },
                            children: q
                        }), n && (0, d.jsx)(p.Z, {
                            theme: M,
                            children: (0, d.jsx)(m.Z, {
                                className: E.creditLine,
                                color: "primary",
                                variant: "caption",
                                children: n
                            })
                        }), z && I && (0, d.jsx)(p.Z, {
                            theme: M,
                            children: (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)("div", {
                                    className: E.assetIconMeta,
                                    children: (0, d.jsx)(h.D, {
                                        classesProps: E,
                                        asset: I,
                                        withAssetTitle: !0,
                                        withAssetTypeIcon: !0
                                    })
                                }), (0, d.jsx)("div", {
                                    className: E.bottomGradientOverlay
                                })]
                            })
                        })]
                    })
                };
            q.defaultProps = {
                ContentComponent: G,
                hideSearchByAsset: !0,
                isShortHero: !1,
                showIconMeta: !0,
                showTitle: !0,
                preTitle: "",
                containerHeight: null
            }
        },
        95438: function(t, e, n) {
            n.d(e, {
                J: function() {
                    return u
                }
            });
            var i = n(70865),
                r = n(96670),
                o = n(52322),
                a = n(2784),
                s = n(21647),
                l = n(27050),
                c = n(25721),
                d = n(77601),
                u = function(t) {
                    var e = t.image,
                        n = e.type,
                        u = e.url,
                        m = e.srcSet,
                        p = e.title,
                        f = e.description,
                        h = e.fit,
                        g = t.lazyLoadImage,
                        x = t.contentNamespace,
                        y = t.classesProps,
                        v = t.dataOptimize,
                        b = t.fetchPriority,
                        k = t.overideImageStyle,
                        Z = (0, d.f7)(),
                        w = Z.classes,
                        C = Z.cx;
                    try {
                        if (!u) return (0, o.jsx)(s.Z, {
                            variant: "rectangular",
                            className: y.root
                        });
                        return (0, o.jsx)("div", {
                            className: y.root,
                            children: (0, o.jsxs)("picture", {
                                "data-optimize": v,
                                children: [m && (0, c.am)(n) && Object.keys(m).map(function(t) {
                                    return (0, a.createElement)("source", (0, r.Z)((0, i.Z)({
                                        type: "image/".concat(c.FJ),
                                        srcSet: (0, c.LA)({
                                            srcSetSizes: m[t],
                                            imageUrl: u,
                                            typeOfImage: c.FJ,
                                            fit: h
                                        })
                                    }, "default" === t ? {} : {
                                        media: (0, c.Dt)(t)
                                    }), {
                                        key: "webp-".concat(t)
                                    }))
                                }), m && Object.keys(m).map(function(t) {
                                    return (0, a.createElement)("source", (0, r.Z)((0, i.Z)({
                                        srcSet: (0, c.LA)({
                                            srcSetSizes: m[t],
                                            imageUrl: u,
                                            typeOfImage: (0, c.TC)(n) ? c.Vy : "",
                                            fit: h
                                        })
                                    }, "default" === t ? {} : {
                                        media: (0, c.Dt)(t)
                                    }), {
                                        key: t
                                    }))
                                }), (0, o.jsx)("img", {
                                    fetchpriority: b,
                                    loading: void 0 === g || g ? "lazy" : "eager",
                                    src: m ? (0, c.Bl)({
                                        srcSetSizes: m.default,
                                        imageUrl: u
                                    }) : u,
                                    alt: f || p,
                                    title: (0, l.zo)(x) ? "" : p,
                                    className: k ? y.image : C(w.image, y.image),
                                    width: m ? (0, c.sw)({
                                        srcSetSizes: m.default
                                    }).width : 0,
                                    height: m ? (0, c.sw)({
                                        srcSetSizes: m.default
                                    }).height : 0
                                })]
                            })
                        })
                    } catch (t) {
                        return (0, l.qr)(t, "CmsImageSourceTags")
                    }
                };
            u.defaultProps = {
                image: {},
                fetchPriority: "auto",
                classesProps: {
                    root: "",
                    image: ""
                },
                overideImageStyle: !1
            }
        },
        52566: function(t, e, n) {
            n.d(e, {
                k: function() {
                    return s
                }
            });
            var i = n(65532),
                r = function(t) {
                    var e = t.tags,
                        n = t.geoLocation;
                    return e.includes("EXCLUDE") ? !e.includes(n) : e.includes(n)
                },
                o = function(t) {
                    var e = t.tags,
                        n = void 0 === e ? [] : e,
                        o = (0, i.PE)().region;
                    return !!(0 === n.length || r({
                        tags: n,
                        geoLocation: void 0 === o ? "US" : o
                    }))
                },
                a = n(2784),
                s = (0, a.memo)(function(t) {
                    var e = t.Component;
                    return o({
                        tags: t.tags
                    }) ? (0, a.cloneElement)(e) : null
                });
            s.displayName = "CmsTags"
        },
        14910: function(t, e, n) {
            n.d(e, {
                O: function() {
                    return r
                }
            });
            var i = n(25237),
                r = n.n(i)()(function() {
                    return Promise.all([n.e(9069), n.e(2144), n.e(72797)]).then(n.bind(n, 93385)).then(function(t) {
                        return t.CmsTutorialCarousel
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [93385]
                        }
                    },
                    ssr: !0
                })
        },
        29296: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return w
                },
                L: function() {
                    return j
                }
            });
            var i = n(47842),
                r = n(70865),
                o = n(87394),
                a = n(50930),
                s = n(52322),
                l = n(62197),
                c = n(66198),
                d = n(9390),
                u = n(66358),
                m = n(39232),
                p = n(18505),
                f = n(65532),
                h = n(29292),
                g = n(75298),
                x = n(97024),
                y = n(67361),
                v = n(3661),
                b = n(12847),
                k = n(2784),
                Z = (0, n(8740).ZL)()(function(t) {
                    var e = t.palette,
                        n = t.tokens,
                        i = n.border,
                        r = n.fontWeight,
                        o = n.spacing,
                        a = n.fontSize;
                    return {
                        root: {
                            marginRight: o.s,
                            marginBottom: o.s,
                            paddingLeft: o.s,
                            fontSize: a.xs
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
                            padding: o.s,
                            borderRadius: o.xs,
                            border: "solid ".concat(i.width.s, " ").concat(e.border1Color),
                            display: "inline-block"
                        }
                    }
                }),
                w = function(t) {
                    var e = t.classesProps,
                        n = void 0 === e ? {} : e,
                        i = t.label,
                        r = t.href,
                        o = t.variant,
                        a = t.trackAnalytics,
                        m = t.dataOptimize,
                        g = t.dataAutomation,
                        x = Z(),
                        k = x.classes,
                        w = x.cx,
                        C = (0, f.PE)().locale,
                        j = (0, b.ZV)(i, C),
                        P = (0, h.SO)({
                            trackAnalytics: a
                        }) || "".concat(u.fPZ, ".").concat(u._Y7);
                    return (0, s.jsx)(s.Fragment, {
                        children: "" === r ? (0, s.jsx)(l.Z, {
                            className: w(k.root, k.standardKeyword),
                            children: j
                        }) : (0, s.jsx)(d.r, {
                            clickAnalyticsLabel: P,
                            clickTrackOptions: a ? void 0 : {
                                label: i
                            },
                            href: r,
                            onClick: function() {
                                (0, v.JD)(p.QP.RELATED)
                            },
                            className: w(k.link, n.keyItemLink),
                            "data-optimize": void 0 === m ? null : m,
                            "data-automation": void 0 === g ? null : g,
                            children: (0, s.jsx)(c.Z, {
                                classes: {
                                    label: k.label,
                                    root: w(k.root, n.keyItemRoot)
                                },
                                label: j,
                                variant: o,
                                clickable: !0,
                                tabIndex: -1,
                                icon: (0, s.jsx)(y.Search, {
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
                        d = t.variant,
                        u = t.dataOptimize,
                        f = void 0 === u ? null : u,
                        h = (0, x.JI)().assetType;
                    return (0, k.useMemo)(function() {
                        return n && (0, a.Z)(new Set(n)).slice(0, l || n.length).filter(Boolean).map(function(t) {
                            var n = (0, o.Z)(c((0, r.Z)({
                                term: t
                            }, [m.pV, m.X2, m.ox].includes(h) ? (0, i.Z)({}, p.Tv, h) : {})), 1)[0];
                            return (0, s.jsx)(w, {
                                classesProps: e,
                                label: t,
                                variant: d,
                                href: n,
                                dataOptimize: f
                            }, t)
                        })
                    }, [n, l, c, h, e, d, f])
                },
                j = function(t) {
                    var e = t.classesProps,
                        n = t.isCentered,
                        i = t.keywords,
                        r = t.getPathProps,
                        a = t.fullRender,
                        l = t.limit,
                        c = t.variant,
                        d = t.dataOptimize,
                        u = Z().classes,
                        m = (0, o.Z)((0, g.I)({
                            triggerOnce: !0
                        }), 2),
                        p = m[0],
                        f = m[1],
                        h = C({
                            classesProps: e,
                            keywords: i,
                            getPathProps: r,
                            limit: l,
                            variant: c,
                            dataOptimize: d
                        });
                    return h ? (0, s.jsx)("div", {
                        className: n ? u.centerKeywords : void 0,
                        ref: f,
                        children: (a || p) && h
                    }) : null
                };
            j.defaultProps = {
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
        787: function(t, e, n) {
            n.d(e, {
                IC: function() {
                    return p
                }
            });
            var i = n(52322),
                r = n(21647),
                o = n(9877),
                a = n(25237),
                s = n.n(a),
                l = n(8740),
                c = function(t) {
                    var e = t.size,
                        n = void 0 === e ? o.Er : e;
                    return (0, i.jsx)(r.Z, {
                        width: n,
                        height: n,
                        sx: {
                            transform: "none"
                        }
                    })
                },
                d = s()(function() {
                    return n.e(22604).then(n.bind(n, 22604)).then(function(t) {
                        return t.PbLogo
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
                u = s()(function() {
                    return n.e(25488).then(n.bind(n, 25488)).then(function(t) {
                        return t.Brackets
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
                m = (0, l.ZL)()(function(t, e) {
                    var n = e.size;
                    return {
                        icon: {
                            width: n,
                            height: n
                        }
                    }
                }),
                p = function(t) {
                    var e = t.isPremiumBeat,
                        n = t.className,
                        r = t.size,
                        o = m({
                            size: r
                        }),
                        a = o.classes,
                        s = o.cx;
                    return void 0 === e ? (0, i.jsx)(c, {
                        size: r
                    }) : (0, i.jsx)(e ? d : u, {
                        className: s(n, a.icon)
                    })
                };
            p.defaultProps = {
                className: null,
                isPremiumBeat: void 0,
                size: o.Er
            }
        },
        7884: function(t, e, n) {
            n.d(e, {
                M: function() {
                    return o
                },
                y: function() {
                    return a
                }
            });
            var i = n(25237),
                r = n.n(i),
                o = r()(function() {
                    return n.e(86319).then(n.bind(n, 86319)).then(function(t) {
                        return t.VideoPlayer
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [86319]
                        }
                    },
                    ssr: !1
                }),
                a = r()(function() {
                    return n.e(86319).then(n.bind(n, 86319)).then(function(t) {
                        return t.VideoPlayer
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [86319]
                        }
                    },
                    ssr: !0
                })
        },
        99619: function(t, e, n) {
            n.d(e, {
                GB: function() {
                    return S
                }
            });
            var i, r = n(52322),
                o = n(62021),
                a = n(70865),
                s = n(47842),
                l = n(96670),
                c = n(62197),
                d = n(67550),
                u = n(27050),
                m = n(53957),
                p = n(52566),
                f = n(29296),
                h = n(48417),
                g = n(5528),
                x = n(40374),
                y = n(75),
                v = n(27764),
                b = n(5632),
                k = n(59877),
                Z = (0, n(8740).ZL)()(function(t, e) {
                    var n = t.breakpoints,
                        i = t.spacing,
                        r = t.tokens,
                        o = r.border,
                        l = r.color,
                        c = r.fontWeight,
                        d = t.typography.fontWeightBold,
                        p = e.typeOfStyle,
                        f = e.contentNamespace,
                        h = e.popularTitleColor;
                    return {
                        keywordTitle: {
                            fontWeight: d,
                            whiteSpace: "nowrap"
                        },
                        popularTitle: {
                            paddingTop: i(1),
                            color: h
                        },
                        root: (0, s.Z)({
                            display: "flex",
                            overflowX: "auto",
                            paddingBottom: i(4)
                        }, n.down("sm"), {
                            maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)",
                            msOverflowStyle: "none",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            },
                            scrollbarWidth: "none"
                        }),
                        keyItemLink: {
                            "&:focus-visible > div": (0, a.Z)({}, (0, u.zo)(f) ? p === m.zw.whiteOutline ? {
                                background: "none",
                                border: "".concat(o.width.m, " solid ").concat(l.white)
                            } : {
                                background: l.gray["onyx-50"],
                                border: "".concat(o.width.m, " solid ").concat(l.blue.azure)
                            } : {})
                        },
                        keyItemRoot: (0, a.Z)({}, (0, u.zo)(f) ? p === m.zw.whiteOutline ? {
                            fontWeight: c.bold,
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
                            fontWeight: c.bold,
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
                w = function(t) {
                    var e, n, i, o, s = t.classesProps,
                        x = t.items,
                        w = t.title,
                        C = t.variant,
                        j = t.dataAutomation,
                        P = t.dataOptimize,
                        T = t.customFieldsElementData,
                        I = t.contentNamespace,
                        S = t.popularTitleColor,
                        L = void 0 === S ? "none" : S,
                        _ = t.tags,
                        N = t.dynamicData,
                        A = t.enableDynamicData,
                        z = void 0 !== A && A;
                    T && (e = void 0 === (i = (void 0 === (n = T.fields) ? {} : n).typeOfStyle) ? m.zw.default : i);
                    var R = (0, g.c)(),
                        D = (0, k.$G)(y.kU9).t,
                        B = Z({
                            typeOfStyle: e,
                            contentNamespace: I,
                            popularTitleColor: L
                        }),
                        H = B.cx,
                        M = B.classes,
                        O = (0, b.useRouter)().pathname,
                        E = (0, v.oY)(O),
                        W = (null == _ ? void 0 : _.includes(m.qq)) && (null == N ? void 0 : N.trendingKeywords),
                        U = W && z && R ? N.trendingKeywords.map(function(t) {
                            return (0, l.Z)((0, a.Z)({}, t), {
                                trackAnalytics: {
                                    section: "searchBar",
                                    action: "click",
                                    label: "suggestedKeywords - ".concat(t.keyword)
                                }
                            })
                        }) : x,
                        F = (0, r.jsx)(r.Fragment, {
                            children: null == U ? void 0 : U.map(function(t) {
                                var e = t.label,
                                    n = t.href,
                                    i = t.trackAnalytics,
                                    o = t.linkTags,
                                    a = n;
                                return (m.oN[E] && void 0 !== e && (a = "".concat(m.oN[E], "/").concat((0, h.U9)(e))), "" === e || "" === a || void 0 === e) ? null : (0, r.jsx)(p.k, {
                                    Component: (0, r.jsx)(f.K, {
                                        href: a,
                                        classesProps: {
                                            keyItemRoot: s.keyItemRoot ? s.keyItemRoot : M.keyItemRoot,
                                            keyItemLink: s.keyItemLink ? s.keyItemLink : M.keyItemLink
                                        },
                                        variant: C,
                                        label: e,
                                        trackAnalytics: i,
                                        dataOptimize: P,
                                        dataAutomation: W ? "".concat(m.qq, "-").concat(e) : null,
                                        tags: _
                                    }, "".concat(e, "-").concat(n)),
                                    tags: o
                                }, e)
                            })
                        });
                    o = L && "none" !== L && z && R ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.Z, {
                            className: H(M.keywordTitle, M.popularTitle),
                            children: D("common:filters_sort_by_popular")
                        }), F]
                    }) : F;
                    try {
                        return (0, r.jsxs)(d.Z, {
                            display: "flex",
                            overflow: "auto",
                            className: s.wrapper,
                            children: [w && (0, r.jsx)(d.Z, {
                                className: s.title,
                                mr: 4,
                                children: (0, r.jsx)(c.Z, {
                                    className: M.keywordTitle,
                                    color: "primary",
                                    children: w
                                })
                            }), (0, r.jsx)("div", {
                                className: H(M.root, s.keywordsRoot),
                                "data-automation": j,
                                children: o
                            })]
                        })
                    } catch (t) {
                        return (0, u.qr)(t, "CmsKeywords")
                    }
                };
            w.defaultProps = (0, l.Z)((0, a.Z)({}, x.E), {
                classesProps: {},
                dataOptimize: null
            });
            var C = function(t) {
                    var e = t.initialProps;
                    return (0, r.jsx)(w, (0, a.Z)({}, e))
                },
                j = n(88849),
                P = n(2784),
                T = {
                    flagID: "locms-441-experiment-long-term-trends",
                    id: "LOCMS-441",
                    name: "LOCMS-441 Dynamic trends - experiment - long term trends",
                    treatments: (i = {}, (0, s.Z)(i, j.NM, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        return (0, P.useEffect)(function() {
                            e.recordImpression()
                        }, []), (0, r.jsx)(C, {
                            initialProps: (0, l.Z)((0, a.Z)({}, n), {
                                popularTitleColor: "none"
                            })
                        })
                    }), (0, s.Z)(i, j.vG, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        return (0, P.useEffect)(function() {
                            e.recordImpression()
                        }), (0, r.jsx)(C, {
                            initialProps: (0, l.Z)((0, a.Z)({}, n), {
                                enableDynamicData: !0,
                                popularTitleColor: "none"
                            })
                        })
                    }), (0, s.Z)(i, j._Z, function(t) {
                        var e = t.experiment,
                            n = t.initialProps;
                        return (0, P.useEffect)(function() {
                            e.recordImpression()
                        }), (0, r.jsx)(C, {
                            initialProps: (0, l.Z)((0, a.Z)({}, n), {
                                enableDynamicData: !0,
                                popularTitleColor: n.popularTitleColor ? n.popularTitleColor : "#ffffff"
                            })
                        })
                    }), i)
                },
                I = function() {
                    return (0, r.jsx)(r.Fragment, {})
                },
                S = function(t) {
                    return (0, r.jsx)(o.K, {
                        config: T,
                        initialProps: t,
                        Portal: C,
                        SkeletonLoader: I
                    })
                }
        },
        42005: function(t, e, n) {
            n.d(e, {
                w: function() {
                    return u
                }
            });
            var i = n(70865),
                r = n(96670),
                o = n(29292),
                a = n(44297),
                s = n(776),
                l = n(5632),
                c = n(2784),
                d = n(68533),
                u = function() {
                    var t = (0, s.yh)().analytics,
                        e = (0, s.wU)(),
                        n = (0, l.useRouter)().asPath,
                        u = (0, d.Y)(),
                        m = u.setSearchContext,
                        p = u.getSearchContext;
                    return (0, c.useCallback)(function(s) {
                        var l, c = s.asset,
                            d = s.gridItems,
                            u = s.eventLabel,
                            f = s.listId,
                            h = void 0 === f ? "" : f;
                        if (c.link !== n) {
                            m({
                                trackingId: (0, o.lt)({
                                    asset: c
                                }),
                                term: null === (l = c.meta) || void 0 === l ? void 0 : l.query
                            });
                            var g = (0, o.qI)(c);
                            t.productClicked((0, r.Z)((0, i.Z)({
                                asset_type: (0, a.ZZ)(c),
                                category: (0, o.CP)(c),
                                channels: (0, o.Ky)(c),
                                name: (0, o.LJ)(c),
                                product_id: g,
                                sku: g
                            }, e ? {
                                pageSection: e,
                                eventLabel: void 0 === u ? "" : u
                            } : {}, d ? (0, o.mq)({
                                gridItems: d,
                                item: c
                            }) : {}, h ? {
                                list_id: h
                            } : {}), {
                                search_context: p(c)
                            }))
                        }
                    }, [t, n, p, e, m])
                }
        },
        68533: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return c
                }
            });
            var i = n(58272),
                r = n(29292),
                o = n(9823),
                a = n(3661),
                s = n(21805),
                l = n(2784),
                c = function() {
                    var t = (0, o.D)().isBrandSstk;
                    return {
                        setSearchContext: (0, l.useCallback)(function(e) {
                            var n = e.trackingId,
                                r = e.term;
                            if (n) {
                                if ((0, a.H7)() === n) return;
                                (0, a.tc)(n), (0, a.Cl)(r), t && s.Z.set(i.d6, n, {
                                    expires: i.Dy,
                                    sameSite: "strict"
                                })
                            }
                        }, [t]),
                        getSearchContext: (0, l.useCallback)(function() {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.meta,
                                i = (0, r.lt)({
                                    asset: e
                                }) || (0, a.H7)();
                            return (0, r.Be)({
                                trackingId: (null == i ? void 0 : i.uuid) || i,
                                searchTerm: (null == n ? void 0 : n.query) || (null == n ? void 0 : null === (t = n.search_context) || void 0 === t ? void 0 : t.search_term) || (0, a.He)()
                            })
                        }, []),
                        getSearchContextFromAssets: (0, l.useCallback)(function() {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                n = (null == e ? void 0 : e[0]) || e,
                                i = n.meta,
                                o = (0, r.lt)({
                                    asset: n
                                }) || (0, a.H7)();
                            return (0, r.Be)({
                                trackingId: o,
                                searchTerm: (null == i ? void 0 : i.query) || (null == i ? void 0 : null === (t = i.search_context) || void 0 === t ? void 0 : t.search_term) || (0, a.He)()
                            })
                        }, [])
                    }
                }
        },
        20580: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return i
                }
            });
            var i = function(t) {
                return function(e) {
                    e.stopPropagation(), t(e)
                }
            }
        },
        41929: function(t, e, n) {
            n.d(e, {
                PF: function() {
                    return i
                },
                X0: function() {
                    return r
                },
                th: function() {
                    return o
                }
            });
            var i = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    return function(e) {
                        return e && e.preventDefault(), t(e)
                    }
                },
                r = function(t) {
                    t && t.stopPropagation()
                },
                o = function(t) {
                    return function(e) {
                        "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), t())
                    }
                }
        }
    }
]);
//# sourceMappingURL=86783-7c7ab1d2c8fe7906.js.map