"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [79637], {
        39860: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return c
                },
                t: function() {
                    return l
                }
            });
            var r = n(87394),
                o = n(44297),
                a = n(54073),
                i = n.n(a),
                s = n(2784),
                c = function(e) {
                    var t = e.asset,
                        n = (0, r.Z)((0, s.useState)(!1), 2),
                        a = n[0],
                        c = n[1],
                        l = (0, o.Am)(t),
                        d = function() {
                            return c(!0)
                        },
                        u = i()(d, 200);
                    return {
                        isHovered: a,
                        setIsHovered: c,
                        onMouseEnter: l ? u : d,
                        onMouseLeave: function() {
                            l && u.cancel(), c(!1)
                        }
                    }
                },
                l = function(e) {
                    var t = e.withSsr,
                        n = (0, r.Z)((0, s.useState)(t), 2);
                    return {
                        isAssetLoaded: n[0],
                        setIsAssetLoaded: n[1]
                    }
                }
        },
        71486: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return c
                }
            });
            var r = n(52322),
                o = n(8740),
                a = n(15545),
                i = n(10460),
                s = (0, o.ZL)()(function(e) {
                    return {
                        root: {
                            display: "flex",
                            alignItems: "center"
                        },
                        icon: {
                            marginRight: (0, e.spacing)(4)
                        }
                    }
                }),
                c = function(e) {
                    var t = e.asset,
                        n = e.classesProps,
                        o = e.contributorVariant,
                        c = e.gridItems,
                        l = e.withAssetTitle,
                        d = e.withAssetTypeIcon,
                        u = e.openInANewTab,
                        p = s(),
                        f = p.classes,
                        m = p.cx;
                    return (0, r.jsxs)("div", {
                        className: m(f.root, n.root),
                        children: [d && (0, r.jsx)("div", {
                            className: f.icon,
                            children: (0, r.jsx)(i.m, {
                                asset: t
                            })
                        }), (0, r.jsx)(a.J, {
                            asset: t,
                            classesProps: n,
                            contributorVariant: o,
                            gridItems: c,
                            withAssetTitle: l,
                            isUploaded: null == t ? void 0 : t.isUpload,
                            openInANewTab: u
                        })]
                    })
                };
            c.defaultProps = {
                classesProps: {},
                contributorVariant: "caption",
                gridItems: [],
                withAssetTitle: !1,
                withAssetTypeIcon: !1,
                openInANewTab: !1
            }
        },
        15545: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return j
                }
            });
            var r = n(52322),
                o = n(41929),
                a = n(8740),
                i = n(87394),
                s = n(21647),
                c = n(9390),
                l = n(787),
                d = n(39232),
                u = n(65532),
                p = n(44297),
                f = n(42005),
                m = n(89522),
                h = n(20580),
                v = n(12847),
                g = (0, a.ZL)()(function(e) {
                    var t = e.spacing,
                        n = e.palette;
                    return {
                        titleContainer: {
                            fontWeight: e.typography.fontWeightBold,
                            marginBottom: 0,
                            color: n.primary.main
                        },
                        root: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: t(2)
                        },
                        trackLogo: {
                            display: "flex",
                            alignItems: "center",
                            marginRight: t(3)
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
                k = function(e) {
                    var t = e.asset,
                        n = e.assetType,
                        r = e.locale,
                        o = "",
                        a = n !== d.xF;
                    switch (n) {
                        case d.pX:
                            o = null == t ? void 0 : t.description;
                            break;
                        case d.tn:
                        case d.xF:
                        default:
                            o = (null == t ? void 0 : t.title) || (null == t ? void 0 : t.name)
                    }
                    return o = (0, v.ZV)(o, r), a ? (0, v.aS)(o, 28) : o
                },
                b = function(e) {
                    var t = e.asset,
                        n = e.classesProps,
                        a = e.gridItems,
                        v = e.asLink,
                        b = e.isUploaded,
                        w = e.openInANewTab,
                        x = g(),
                        y = x.classes,
                        I = x.cx,
                        A = (0, u.PE)().locale,
                        T = (0, f.w)(),
                        P = (0, p.Tp)(t),
                        C = k({
                            asset: t,
                            assetType: P,
                            locale: A
                        }),
                        j = (0, i.Z)((0, m.KC)({
                            asset: t
                        }), 2),
                        N = j[0],
                        L = j[1],
                        Z = P === d.xF,
                        M = (0, p.O)({
                            track: t,
                            useContentTier: !0
                        }),
                        R = v ? (0, r.jsx)(c.r, {
                            className: I(n.title, y.title, y.titleContainer),
                            underline: !0,
                            href: N,
                            linkAs: L,
                            onClick: (0, h.h)(function() {
                                T({
                                    asset: t,
                                    gridItems: a,
                                    eventLabel: P === d.xF ? "trackTitle" : ""
                                })
                            }),
                            "data-automation": "AssetTitleLink",
                            "data-optimize": "hero-assetTitle",
                            target: w ? "_blank" : "_self",
                            children: C
                        }) : (0, r.jsx)("span", {
                            role: "none",
                            onClick: o.X0,
                            className: I(y.copy, y.titleContainer),
                            children: C
                        });
                    return (0, r.jsxs)("div", {
                        className: y.root,
                        children: [Z && !b && (0, r.jsx)("div", {
                            className: y.trackLogo,
                            children: (0, r.jsx)(l.IC, {
                                isPremiumBeat: M
                            })
                        }), C ? R : (0, r.jsx)(s.Z, {
                            width: 240
                        })]
                    })
                };
            b.defaultProps = {
                classesProps: {},
                gridItems: [],
                asLink: !0,
                isUploaded: !1,
                openInANewTab: !1
            };
            var w = n(62197),
                x = n(776),
                y = n(75),
                I = n(59877),
                A = n(9877),
                T = (0, a.ZL)()(function(e) {
                    var t = e.palette;
                    return {
                        contributorLink: {
                            color: t.info.main,
                            "&:focus": {
                                textDecoration: "underline",
                                outline: "none"
                            }
                        },
                        colorPrimary: {
                            color: "".concat(t.primary.main, " !important")
                        },
                        root: {
                            display: "flex",
                            alignItems: "center"
                        }
                    }
                }),
                P = function(e) {
                    var t = e.asset,
                        n = e.classesProps,
                        a = e.contributorVariant,
                        i = e.openInANewTab,
                        l = T(),
                        d = l.classes,
                        u = l.cx,
                        f = (0, I.$G)(y.fLX),
                        m = f.t,
                        h = f.ready,
                        v = (0, x.wU)(),
                        g = (0, p.Cs)({
                            asset: t
                        }),
                        k = g.contributor,
                        b = g.contributorHref,
                        P = g.contributorAsPath,
                        C = {
                            contributorLink: (0, p.zz)(t) ? (0, r.jsx)("span", {
                                className: u(n.contributorLink, d.colorPrimary)
                            }) : (0, r.jsx)(c.r, {
                                className: u(d.contributorLink, n.contributorLink),
                                href: b,
                                linkAs: P,
                                onClick: o.X0,
                                underline: !0,
                                clickAnalyticsLabel: "".concat(v, ".artistName"),
                                "data-optimize": "hero-assetAttribution",
                                target: i ? "_blank" : "_self"
                            })
                        };
                    return b && h ? (0, r.jsx)(w.Z, {
                        className: u(n.contributorWrapper, n.contributorName, d.root),
                        variant: a,
                        color: "primary",
                        children: (0, r.jsx)(I.cC, {
                            i18nKey: "ent:by_contributor_link",
                            ns: y.fLX,
                            t: m,
                            components: C,
                            values: {
                                CONTRIBUTOR: k
                            }
                        })
                    }) : (0, r.jsx)(s.Z, {
                        className: u(d.root, n.contributorWrapper),
                        width: A.f0
                    })
                };
            P.defaultProps = {
                classesProps: {},
                contributorVariant: "caption",
                openInANewTab: !1
            };
            var C = (0, a.ZL)()(function() {
                    return {
                        root: {
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            justifyContent: "center"
                        }
                    }
                }),
                j = function(e) {
                    var t = e.asset,
                        n = e.classesProps,
                        a = e.contributorVariant,
                        i = e.gridItems,
                        s = e.withAssetTitle,
                        c = e.asLink,
                        l = e.externalId,
                        d = e.isUploaded,
                        u = e.openInANewTab,
                        p = C().classes,
                        f = (t || {}).isUpload;
                    return (0, r.jsxs)("div", {
                        className: p.root,
                        children: [s && (0, r.jsx)(b, {
                            asset: t,
                            classesProps: n,
                            gridItems: i,
                            asLink: c,
                            isUploaded: d,
                            openInANewTab: u
                        }), !f && (0, r.jsx)(P, {
                            asset: t,
                            classesProps: n,
                            contributorVariant: a,
                            gridItems: i,
                            openInANewTab: u
                        }), !f && l && (0, r.jsx)("strong", {
                            role: "none",
                            onClick: o.X0,
                            children: l
                        })]
                    })
                };
            j.defaultProps = {
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
        10460: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return c
                }
            });
            var r = n(52322),
                o = n(21647),
                a = n(25237),
                i = n.n(a),
                s = n(9877),
                c = i()(function() {
                    return n.e(37297).then(n.bind(n, 37297)).then(function(e) {
                        return e.AssetTypeIcon
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [37297]
                        }
                    },
                    loading: function() {
                        return (0, r.jsx)(o.Z, {
                            width: s.Iu,
                            height: s.Iu
                        })
                    },
                    ssr: !1
                })
        },
        9938: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return x
                }
            });
            var r = n(70865),
                o = n(52322),
                a = n(25237),
                i = n.n(a),
                s = i()(function() {
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
                c = i()(function() {
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
                l = n(69639),
                d = n(39232),
                u = n(44297),
                p = n(9823),
                f = n(94909),
                m = n(43110),
                h = i()(function() {
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
                v = i()(function() {
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
                g = i()(function() {
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
                k = i()(function() {
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
                b = i()(function() {
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
                        n = (0, u._L)(t),
                        a = (0, f.d)(),
                        i = (0, m.B)();
                    switch (n) {
                        case d.tn:
                        case d.xF:
                            return (0, o.jsx)(g, (0, r.Z)({}, e));
                        case d.C_:
                        case d.zo:
                            return (0, o.jsx)(k, (0, r.Z)({}, e));
                        case d.k4:
                            return a || i ? (0, o.jsx)(s, (0, r.Z)({}, e)) : (0, o.jsx)(b, (0, r.Z)({}, e));
                        case d.hv:
                            return (0, o.jsx)(c, (0, r.Z)({}, e));
                        case d.Nk:
                            return (0, o.jsx)(l.z, (0, r.Z)({}, e));
                        default:
                            return (0, o.jsx)(h, (0, r.Z)({}, e))
                    }
                },
                x = function(e) {
                    var t = (0, p.D)().isBrandEnterprise,
                        n = (0, m.B)(),
                        a = e.asset;
                    if (t) {
                        if (void 0 === n) return null;
                        if (n) return (0, u.t1)(a) ? (0, o.jsx)(l.z, (0, r.Z)({}, e)) : a.type === d.zo ? (0, o.jsx)(k, (0, r.Z)({}, e)) : (0, o.jsx)(v, (0, r.Z)({}, e))
                    }
                    return (0, o.jsx)(w, (0, r.Z)({
                        isUserLoggedIn: n
                    }, e))
                }
        },
        69639: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return o
                }
            });
            var r = n(25237),
                o = n.n(r)()(function() {
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
        33070: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return m
                }
            });
            var r = n(87394),
                o = n(52322),
                a = n(13011),
                i = n(36616),
                s = n(75298),
                c = n(25237),
                l = n.n(c),
                d = n(2784),
                u = n(8740),
                p = l()(n.e(13310).then(n.bind(n, 13310)).then(function(e) {
                    return e.WaveformImageProgress
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [13310]
                        }
                    },
                    ssr: !1
                }),
                f = (0, u.ZL)()(function(e, t) {
                    var n = t.display,
                        r = t.height,
                        o = t.invertWaveform;
                    return {
                        root: {
                            width: "100%",
                            display: "flex",
                            position: "relative"
                        },
                        waveformImage: {
                            width: "100%",
                            height: r,
                            backgroundPositionX: 1,
                            backgroundPositionY: 0,
                            backgroundSize: "100% ".concat(4 * r, "px"),
                            display: n ? "block" : "none"
                        },
                        overlayImage: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: r,
                            cursor: "pointer"
                        },
                        progressImage: {
                            filter: "brightness(2)".concat(o ? " invert(1)" : ""),
                            pointerEvents: "none",
                            zIndex: 1
                        },
                        ghostProgress: {
                            filter: "brightness(1.125)".concat(o ? " invert(1)" : ""),
                            zIndex: 1
                        }
                    }
                }),
                m = function(e) {
                    var t, n, c = e.height,
                        l = e.track,
                        u = e.invertWaveform,
                        m = (0, r.Z)((0, d.useState)(!1), 2),
                        h = m[0],
                        v = m[1],
                        g = (0, r.Z)((0, s.I)({
                            triggerOnce: !0,
                            rootMargin: "0px 0px ".concat(a.On, " 0px")
                        }), 2),
                        k = g[0],
                        b = g[1],
                        w = l.waveformPng,
                        x = f({
                            height: c,
                            invertWaveform: u,
                            display: h
                        }),
                        y = x.classes,
                        I = x.cx,
                        A = (0, i.R)().playing,
                        T = (null == A ? void 0 : null === (t = A.activeTrack) || void 0 === t ? void 0 : t.id) === l.id,
                        P = (0, d.useRef)(),
                        C = null === (n = P.current) || void 0 === n ? void 0 : n.getBoundingClientRect().width;
                    return (0, d.useEffect)(function() {
                        k && v(!0)
                    }, [k]), (0, o.jsxs)("div", {
                        className: y.root,
                        ref: b,
                        children: [T && (0, o.jsx)(p, {
                            classes: y,
                            cx: I,
                            height: c,
                            isActive: T,
                            track: l,
                            waveformWidth: C,
                            waveformPng: w
                        }), (0, o.jsx)("div", {
                            ref: P,
                            role: "img",
                            "aria-label": l.description,
                            className: y.waveformImage,
                            style: {
                                backgroundImage: "url(".concat(w, ")")
                            }
                        })]
                    })
                };
            m.defaultProps = {
                invertWaveform: !1,
                height: 25
            }
        },
        41563: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return c
                }
            });
            var r = n(70865),
                o = n(52322),
                a = n(36616),
                i = n(19161),
                s = function(e) {
                    return (0, e.children)()
                },
                c = function(e) {
                    var t = e.track,
                        n = e.highRefreshRate,
                        c = e.children,
                        l = e.shouldRenderHook;
                    return (0, a.R)().playing.activeTrack.id === (null == t ? void 0 : t.id) && l ? (0, o.jsx)(s, {
                        children: function() {
                            return c((0, r.Z)({}, (0, i.E)({
                                track: t,
                                highRefreshRate: n
                            })))
                        }
                    }) : c()
                };
            c.defaultProps = {
                shouldRenderHook: !0
            }
        },
        97556: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return b
                }
            });
            var r = n(70865),
                o = n(96670),
                a = n(50930),
                i = n(52322),
                s = n(21647),
                c = n(71486),
                l = n(87422),
                d = n(44297),
                u = n(75),
                p = n(25237),
                f = n.n(p),
                m = n(59877),
                h = n(2784),
                v = n(8740),
                g = f()(function() {
                    return n.e(57060).then(n.bind(n, 57060)).then(function(e) {
                        return e.TrackMeta
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57060]
                        }
                    },
                    ssr: !1
                }),
                k = (0, v.ZL)()(function(e) {
                    return {
                        root: {
                            display: "flex",
                            overflow: "hidden"
                        },
                        assetIconMetaContainer: {
                            marginLeft: (0, e.spacing)(4),
                            minWidth: 0,
                            flex: 1
                        }
                    }
                }),
                b = function(e) {
                    var t = e.brokenMediaItemsList,
                        n = e.classesProps,
                        p = e.children,
                        f = e.setBrokenMediaItemsList,
                        v = e.showTrackMeta,
                        b = e.track,
                        w = e.tracks,
                        x = e.openInANewTab,
                        y = k(),
                        I = y.classes,
                        A = y.cx,
                        T = (0, m.$G)(u.mpT).ready,
                        P = b.id,
                        C = !P || !T,
                        j = !C && (0, d.Nn)({
                            asset: b
                        }),
                        N = (0, h.useMemo)(function() {
                            return (0, o.Z)((0, r.Z)({}, n), {
                                root: A(I.assetIconMetaContainer, n.assetIconMetaContainer)
                            })
                        }, [I.assetIconMetaContainer, n, A]);
                    return j && !t.includes(P) && f((0, a.Z)(t).concat([P])), (0, i.jsxs)("div", {
                        className: A(I.root, n.root),
                        children: [C ? (0, i.jsx)(s.Z, {
                            variant: "circular",
                            width: 44,
                            height: 44,
                            sx: {
                                flexShrink: 0,
                                ml: 2
                            }
                        }) : (0, i.jsx)(l.s, {
                            tracks: w,
                            track: b,
                            disabled: j
                        }), (0, i.jsx)(c.D, {
                            asset: b,
                            classesProps: N,
                            gridItems: w,
                            withAssetTitle: !0,
                            openInANewTab: x
                        }), p, v && (0, i.jsx)(g, {
                            track: b
                        })]
                    })
                };
            b.defaultProps = {
                brokenMediaItemsList: [],
                children: null,
                classesProps: {},
                setBrokenMediaItemsList: function() {},
                showTrackMeta: !1,
                track: {},
                tracks: []
            }
        },
        87422: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return m
                }
            });
            var r = n(52322),
                o = n(480),
                a = n(31913),
                i = n(59481),
                s = n(41563),
                c = n(15445),
                l = n(66358),
                d = n(36616),
                u = n(9823),
                p = n(776),
                f = (0, n(8740).ZL)()(function(e, t) {
                    var n = e.palette,
                        r = e.spacing,
                        o = t.isBrandEnterprise,
                        a = t.isPlaying;
                    return {
                        playButton: {
                            borderStyle: "solid",
                            borderWidth: 2,
                            borderColor: n.border2Color,
                            color: o && a ? n.waveformColorAccent : n.primary.main,
                            marginLeft: r(2),
                            padding: r(3)
                        },
                        circularProgress: {
                            position: "absolute",
                            transition: "none"
                        },
                        circleStatic: {
                            "&&": {
                                transition: "none"
                            }
                        },
                        circleRoot: {
                            position: "absolute"
                        }
                    }
                }),
                m = function(e) {
                    var t = e.classesProps,
                        n = e.disabled,
                        m = e.disableRipple,
                        h = e.track,
                        v = e.tracks,
                        g = e.withAudioPosition,
                        k = e.setShowPlaceHolder,
                        b = (0, d.R)(),
                        w = b.playerActions,
                        x = b.playing,
                        y = (0, u.D)().isBrandEnterprise,
                        I = x.isPlaying && x.activeTrack.id === h.id,
                        A = f({
                            isBrandEnterprise: y,
                            isPlaying: I
                        }),
                        T = A.classes,
                        P = A.cx,
                        C = (0, p.wU)(),
                        j = "".concat(C, ".").concat(I ? l.Nng : l.czb),
                        N = I ? o.Z : a.Z;
                    return (0, r.jsxs)(i.h, {
                        onClick: function(e) {
                            var t, n;
                            e.stopPropagation(), e.preventDefault(), h.isUpload && (null == h ? void 0 : null === (t = h.processingStatuses) || void 0 === t ? void 0 : null === (n = t.preview) || void 0 === n ? void 0 : n.status) !== "success" ? k && k(!0) : w.handlePlay({
                                track: h,
                                tracks: v
                            })
                        },
                        clickTrack: j,
                        className: P(t.playButton, T.playButton),
                        "aria-label": "Play Track",
                        disabled: n,
                        disableRipple: m,
                        size: "large",
                        children: [g && (0, r.jsx)(s.r, {
                            track: h,
                            shouldRenderHook: !0,
                            highRefreshRate: !0,
                            children: function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).percentComplete;
                                return (0, r.jsx)(c.e, {
                                    radius: 25,
                                    stroke: 2,
                                    progress: e
                                })
                            }
                        }), (0, r.jsx)(N, {
                            className: t.svgIcon
                        })]
                    })
                };
            m.defaultProps = {
                classesProps: {},
                disabled: !1,
                disableRipple: !1,
                track: {},
                tracks: [],
                withAudioPosition: !0,
                setShowPlaceHolder: !1
            }
        },
        79637: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return R
                }
            });
            var r = n(70865),
                o = n(26297),
                a = n(52322),
                i = n(47746),
                s = n(96976),
                c = n(91609),
                l = n(36616),
                d = n(73469),
                u = n(52309),
                p = n(9867),
                f = n(47842),
                m = n(33070),
                h = n(97556),
                v = n(37546),
                g = n(44297),
                k = n(34558),
                b = n(25237),
                w = n.n(b),
                x = n(8740),
                y = n(39860),
                I = n(9938),
                A = "linear-gradient(to right, ".concat(p.$_.gray.onyx, " 0%, ").concat(p.$_.gray.coal, " 100%)"),
                T = p.$_.gray.coal,
                P = w()(function() {
                    return Promise.all([n.e(27310), n.e(55199), n.e(23182), n.e(66198), n.e(65808), n.e(7668), n.e(56256), n.e(348), n.e(42823)]).then(n.bind(n, 24253)).then(function(e) {
                        return e.ExpandedActionsRow
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [24253]
                        }
                    },
                    ssr: !1
                }),
                C = "".concat(56, "px"),
                j = (0, x.ZL)()(function(e, t) {
                    var n = e.breakpoints,
                        r = e.palette,
                        o = e.tokens,
                        a = o.spacing,
                        i = o.radius,
                        s = o.size,
                        c = t.backgroundColor,
                        l = t.trackCardMode,
                        d = t.trackRowMode,
                        u = t.isCurrentTrackActive,
                        p = t.showOverlayActions,
                        m = r.skeleton;
                    return d && (m = u ? r.common.white : c || r.common.black), l && (m = c || r.common.black), {
                        assetIconMetaContainer: (0, f.Z)({
                            minWidth: 100,
                            width: 100
                        }, n.up("sm"), {
                            minWidth: 200,
                            width: 200
                        }),
                        backgroundColor: {
                            background: m,
                            "&:hover": {
                                background: (l || d && !u) && T
                            }
                        },
                        bottomSpacerForOverlayActions: {
                            height: "40px"
                        },
                        bottomSpacerForTrackOverlayActions: {
                            height: C,
                            position: "relative"
                        },
                        contributorName: {
                            lineHeight: a.base,
                            display: "flex",
                            overflow: "hidden"
                        },
                        contributorLink: {
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            paddingLeft: a.xs
                        },
                        expandedFullWidthContent: {
                            display: "flex",
                            padding: "0 ".concat(a.base, " ").concat(a.base),
                            justifyContent: "space-between"
                        },
                        infoPlayButton: {
                            display: "flex",
                            bottom: 0,
                            padding: d ? "".concat(a.m, " ").concat(a.base) : a.base,
                            width: "100%",
                            color: r.primary.main
                        },
                        infoPlayButtonRoot: {
                            width: "100%",
                            paddingRight: a.xs,
                            justifyContent: "center",
                            alignItems: "flex-start"
                        },
                        infoPlayButtonRootFullWidth: {
                            alignItems: "center"
                        },
                        title: {
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        trackActions: {
                            display: "flex"
                        },
                        trackItemCardContainer: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            borderRadius: i.l,
                            overflow: "hidden",
                            width: "100%",
                            height: "100%"
                        },
                        waveformImage: {
                            width: "100%",
                            padding: p || d ? "".concat(a.s, " ").concat(a.m) : "".concat(a.s, " ").concat(a.m, " ").concat(a.m)
                        },
                        trackItemCardContainerAssetRecommendations: {
                            position: "absolute",
                            paddingTop: s.density.high
                        }
                    }
                }),
                N = function(e) {
                    var t = e.trackCardMode,
                        n = e.trackRowMode,
                        r = e.showOverlayActions;
                    return {
                        showTrackActionsSpacer: !n && !t && r,
                        showTrackActionsOverlaySpacer: t && r
                    }
                },
                L = function(e) {
                    var t = e.showTrackActionsSpacer,
                        n = e.showTrackActionsOverlaySpacer,
                        r = e.classes,
                        o = e.item,
                        i = e.items,
                        s = e.itemIndex,
                        c = e.isHovered,
                        l = e.addToCollectionViewsHandler;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [t && (0, a.jsx)("div", {
                            className: r.bottomSpacerForOverlayActions
                        }), n && (0, a.jsx)("div", {
                            className: r.bottomSpacerForTrackOverlayActions,
                            children: (0, a.jsx)(I.B, {
                                asset: o,
                                gridItems: i,
                                isHovered: c,
                                isAssetLoaded: !0,
                                itemIndex: s,
                                licensingAssetId: o.id,
                                addToCollectionViewsHandler: l
                            })
                        })]
                    })
                },
                Z = function(e) {
                    var t, n = e.addToCollectionViewsHandler,
                        o = e.backgroundColor,
                        i = e.classesProps,
                        s = e.invertWaveform,
                        c = e.isCurrentTrackActive,
                        l = e.item,
                        d = e.itemIndex,
                        u = e.items,
                        p = e.enterprisePageAssetActionsProps,
                        b = e.showBackgroundImage,
                        w = e.showOverlayActions,
                        x = e.showTrackMeta,
                        I = e.showWaveform,
                        A = e.trackCardMode,
                        T = e.trackHasPlayed,
                        C = e.trackRowMode,
                        Z = e.topicId,
                        M = e.openInANewTab,
                        R = (0, v.Lr)(l),
                        B = (0, g.A7)(u),
                        O = N({
                            trackCardMode: A,
                            trackRowMode: C,
                            showOverlayActions: w
                        }),
                        S = O.showTrackActionsSpacer,
                        W = O.showTrackActionsOverlaySpacer,
                        H = !C && (null == R ? void 0 : R.waveformPng) && I,
                        E = j({
                            backgroundColor: o,
                            isCurrentTrackActive: c,
                            showOverlayActions: w,
                            trackCardMode: A,
                            trackRowMode: C
                        }),
                        F = E.classes,
                        G = E.cx,
                        _ = (0, r.Z)({
                            contributorName: F.contributorName,
                            contributorLink: F.contributorLink,
                            root: G(F.infoPlayButtonRoot, (0, f.Z)({}, F.infoPlayButtonRootFullWidth, C)),
                            title: F.title
                        }, C && I && {
                            assetIconMetaContainer: F.assetIconMetaContainer
                        }),
                        V = (0, y.T)({
                            asset: l
                        }),
                        z = V.isHovered,
                        D = V.onMouseEnter,
                        U = V.onMouseLeave;
                    return (0, a.jsxs)("div", {
                        onMouseEnter: D,
                        onMouseLeave: U,
                        className: G(F.trackItemCardContainer, i.trackItemCardContainer, (t = {}, (0, f.Z)(t, F.backgroundColor, !b), (0, f.Z)(t, F.trackItemCardContainerAssetRecommendations, Z), t)),
                        style: {
                            backgroundImage: b ? "url(".concat((0, k.en)(null == R ? void 0 : R.id, k.fi), ")") : null
                        },
                        children: [(0, a.jsx)("div", {
                            className: G(F.infoPlayButton, i.infoPlayButton),
                            children: (0, a.jsx)(h.m, {
                                classesProps: _,
                                showTrackMeta: x,
                                track: R,
                                tracks: B,
                                openInANewTab: M,
                                children: C && R.waveformPng && I && (0, a.jsx)("div", {
                                    className: G(F.waveformImage, i.waveformImage),
                                    children: (0, a.jsx)(m.h, {
                                        track: R,
                                        invertWaveform: s
                                    })
                                })
                            })
                        }), H && (0, a.jsx)("div", {
                            className: G(F.waveformImage, i.waveformImage),
                            children: (0, a.jsx)(m.h, {
                                track: R,
                                invertWaveform: s
                            })
                        }), C && T && (0, a.jsx)(P, {
                            classes: F,
                            track: l,
                            tracks: u,
                            isExpanded: c,
                            addToCollectionViewsHandler: n,
                            enterprisePageAssetActionsProps: p
                        }), (0, a.jsx)(L, {
                            showTrackActionsSpacer: S,
                            showTrackActionsOverlaySpacer: W,
                            classes: F,
                            item: l,
                            items: u,
                            itemIndex: d,
                            isHovered: z,
                            addToCollectionViewsHandler: n
                        }), (0, a.jsxs)("audio", {
                            preload: "none",
                            controls: !1,
                            children: [(null == l ? void 0 : l.previewMp3) && (0, a.jsx)("source", {
                                src: null == l ? void 0 : l.previewMp3,
                                type: "audio/mpeg"
                            }), (null == l ? void 0 : l.previewOgg) && (0, a.jsx)("source", {
                                src: null == l ? void 0 : l.previewOgg,
                                type: "audio/ogg"
                            })]
                        })]
                    })
                };
            Z.defaultProps = {
                addToCollectionViewsHandler: null,
                backgroundColor: A,
                classesProps: {},
                invertWaveform: !1,
                isCurrentTrackActive: !1,
                item: {},
                itemIndex: 0,
                items: [],
                enterprisePageAssetActionsProps: null,
                showBackgroundImage: !1,
                showOverlayActions: !1,
                showTrackMeta: !0,
                showWaveform: !0,
                trackCardMode: !1,
                trackHasPlayed: !1,
                trackRowMode: !1,
                openInANewTab: !1
            };
            var M = "linear-gradient(to right, ".concat(p.$_.gray.onyx, " 0%, ").concat(p.$_.gray.coal, " 100%)"),
                R = function(e) {
                    var t, n = e.item,
                        p = e.showBackgroundImage,
                        f = void 0 !== p && p,
                        m = e.trackRowMode,
                        h = void 0 !== m && m,
                        v = e.openInANewTab,
                        g = (0, o.Z)(e, ["item", "showBackgroundImage", "trackRowMode", "openInANewTab"]),
                        k = (0, l.R)(),
                        b = k.playing,
                        w = k.setOpenLinksInANewTab,
                        x = (null == b ? void 0 : null === (t = b.activeTrack) || void 0 === t ? void 0 : t.parentTrack) || (null == b ? void 0 : b.activeTrack),
                        y = (null == x ? void 0 : x.id) === n.id,
                        I = (0, u.B)(y),
                        A = (0, i.Z)().palette.mode === c.oc.DARK,
                        T = h && !y || !h && f || A && !h ? c.oc.DARK : c.oc.LIGHT,
                        P = (0, d.i)({
                            themeMode: T
                        }).theme,
                        C = T === c.oc.LIGHT;
                    return w(!!v), (0, a.jsx)(s.Z, {
                        theme: P,
                        children: (0, a.jsx)(Z, (0, r.Z)({
                            invertWaveform: C,
                            isCurrentTrackActive: y,
                            item: n,
                            showBackgroundImage: f,
                            trackHasPlayed: I,
                            trackRowMode: h,
                            openInANewTab: v
                        }, g))
                    })
                };
            R.defaultProps = {
                backgroundColor: M,
                item: {},
                items: [],
                showBackgroundImage: !1,
                trackRowMode: !1,
                openInANewTab: !1
            }
        },
        15445: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return i
                }
            });
            var r = n(52322),
                o = n(47746),
                a = (0, n(8740).ZL)()({
                    svg: {
                        position: "absolute",
                        transform: "rotate(-90deg)"
                    }
                }),
                i = function(e) {
                    var t = e.radius,
                        n = e.stroke,
                        i = e.strokeColor,
                        s = e.progress,
                        c = a().classes,
                        l = (0, o.Z)().palette.common,
                        d = t - 2 * n,
                        u = 2 * d * Math.PI;
                    return (0, r.jsx)("svg", {
                        height: 2 * t,
                        width: 2 * t,
                        className: c.svg,
                        children: (0, r.jsx)("circle", {
                            stroke: i || l.white,
                            fill: "transparent",
                            strokeWidth: n,
                            strokeDasharray: "".concat(u),
                            strokeDashoffset: "".concat(u - (void 0 === s ? 0 : s) / 100 * u),
                            r: d,
                            cx: t,
                            cy: t
                        })
                    })
                }
        },
        34558: function(e, t, n) {
            n.d(t, {
                en: function() {
                    return i
                },
                fi: function() {
                    return a
                }
            });
            var r = n(50930),
                o = "/assets/images/track-bg-images",
                a = (0, r.Z)([, , , , , ]).map(function(e, t) {
                    return "".concat(o, "/track-hero-").concat(t, ".jpg")
                });
            (0, r.Z)([, , , , , ]).map(function(e, t) {
                return "".concat(o, "/track-card-").concat(t, ".jpg")
            });
            var i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100 * Math.random(),
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t[Math.round(e) % t.length]
            }
        },
        19161: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return i
                }
            });
            var r = n(87394),
                o = n(36616),
                a = n(2784),
                i = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.track,
                        i = t.highRefreshRate,
                        s = void 0 !== i && i,
                        c = t.fps,
                        l = void 0 === c ? 30 : c,
                        d = (0, o.R)(),
                        u = d.audioElementRef,
                        p = d.playing,
                        f = (0, r.Z)((0, a.useState)(0), 2),
                        m = f[0],
                        h = f[1],
                        v = u.current,
                        g = (null == n ? void 0 : n.id) === (null === (e = p.activeTrack) || void 0 === e ? void 0 : e.id);
                    (0, a.useLayoutEffect)(function() {
                        var e, t, n = 0;
                        if (g && v && p.isPlaying) {
                            if (s) {
                                var r = function(t) {
                                    e = requestAnimationFrame(r), t - n < 1e3 / l - .1 || (n = t, h(v.getCurrentTime()))
                                };
                                e = requestAnimationFrame(r)
                            } else t = window.setInterval(function() {
                                return h(v.getCurrentTime())
                            }, 1e3)
                        }
                        return function() {
                            clearTimeout(t), cancelAnimationFrame(e)
                        }
                    }, [l, s, v, p.isPlaying, h, g]);
                    var k = (0, a.useCallback)(function(e) {
                            v.seekTo(parseFloat(e), "seconds"), h(e)
                        }, [v, h]),
                        b = (0, a.useMemo)(function() {
                            return g ? (m / p.duration * 100 || 0).toFixed(1) : 0
                        }, [g, p.duration, m]);
                    return {
                        position: m,
                        duration: Math.floor(p.duration),
                        seekTo: k,
                        percentComplete: b
                    }
                }
        },
        20580: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return r
                }
            });
            var r = function(e) {
                return function(t) {
                    t.stopPropagation(), e(t)
                }
            }
        },
        41929: function(e, t, n) {
            n.d(t, {
                PF: function() {
                    return r
                },
                X0: function() {
                    return o
                },
                th: function() {
                    return a
                }
            });
            var r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    return function(t) {
                        return t && t.preventDefault(), e(t)
                    }
                },
                o = function(e) {
                    e && e.stopPropagation()
                },
                a = function(e) {
                    return function(t) {
                        "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), e())
                    }
                }
        }
    }
]);
//# sourceMappingURL=79637-a95ff09f1e04842a.js.map