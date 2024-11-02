"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68], {
        1129: function(t, n, e) {
            e.r(n), e.d(n, {
                CmsBreadcrumbs: function() {
                    return C
                }
            });
            var r = e(70865),
                i = e(96670),
                o = e(87394),
                a = e(52322),
                s = e(82393),
                c = e(62197),
                l = e(21647),
                u = e(9390),
                m = e(13011),
                d = e(23490),
                p = e(9823),
                f = e(29043),
                h = e(15741),
                g = e(97729),
                v = e.n(g),
                x = (0, e(8740).ZL)()(function(t) {
                    var n = t.palette,
                        e = t.tokens.spacing;
                    return {
                        breadcrumbs: {
                            color: n.info.main
                        },
                        separator: {
                            margin: e.xs
                        }
                    }
                }),
                C = function(t) {
                    var n = t.breadcrumbs,
                        e = t.ariaLabel,
                        g = t.breadcrumbRoutePathProps,
                        C = x().classes,
                        y = (0, d.N)().isBot,
                        b = (0, p.D)().isBrandEnterprise,
                        j = n.map(function(t) {
                            return b && "/explore/royalty-free-images" === t.href ? (0, i.Z)((0, r.Z)({}, t), {
                                href: "/category"
                            }) : t
                        }).reverse(),
                        k = (0, h.t0)(j),
                        Z = j.pop();
                    return j.length ? (0, a.jsxs)(a.Fragment, {
                        children: [y && (0, a.jsx)(v(), {
                            children: (0, a.jsx)("script", {
                                type: k.type,
                                dangerouslySetInnerHTML: {
                                    __html: k.innerHTML
                                }
                            })
                        }), (0, a.jsxs)(s.Z, {
                            classes: {
                                separator: C.separator
                            },
                            separator: (0, a.jsx)(f._, {
                                fontSize: "small"
                            }),
                            "aria-label": e,
                            children: [j.map(function(t, n) {
                                var e = t.linkAs,
                                    r = t.id,
                                    i = t.title,
                                    s = t.href,
                                    l = (0, o.Z)(g[n] ? g[n]() : [s, e], 2),
                                    m = l[0],
                                    d = l[1];
                                return (0, a.jsx)(c.Z, {
                                    variant: "subtitle2",
                                    className: C.breadcrumbs,
                                    children: (0, a.jsx)(u.r, {
                                        linkAs: d,
                                        href: m,
                                        underline: !0,
                                        children: i
                                    })
                                }, r || "breadcrumb_".concat(n))
                            }), (0, a.jsx)(c.Z, {
                                color: "textPrimary",
                                variant: "subtitle2",
                                children: Z.title || (0, a.jsx)(l.Z, {
                                    variant: "text",
                                    width: m.pP
                                })
                            })]
                        })]
                    }) : (0, a.jsx)(a.Fragment, {})
                };
            C.defaultProps = {
                breadcrumbRoutePathProps: []
            }
        },
        45567: function(t, n, e) {
            e.d(n, {
                p: function() {
                    return h
                }
            });
            var r = e(47842),
                i = e(70865),
                o = e(96670),
                a = e(52322),
                s = e(53957),
                c = e(2784),
                l = e(8740),
                u = e(83081),
                m = e(93212),
                d = function(t) {
                    var n = t.cmsModule,
                        e = t.customComponentMap,
                        r = t.componentProps,
                        o = n.contentType,
                        s = e[o] || m.P[o],
                        c = r[o] || {};
                    return s ? (0, a.jsx)(s, (0, i.Z)({}, n, c)) : null
                };
            d.defaultProps = {
                cmsModule: {},
                customComponentMap: {},
                componentProps: {}
            };
            var p = function(t) {
                    var n = t.children;
                    return (0, a.jsx)(a.Fragment, {
                        children: n
                    })
                },
                f = (0, l.ZL)()(function(t, n) {
                    var e, a, s = t.breakpoints,
                        c = t.tokens.spacing,
                        l = n.lastChildSpacing,
                        u = n.nthChild;
                    return {
                        withoutSpacing: {
                            padding: "0 !important"
                        },
                        verticalSpacing: {
                            "&&&>*": (0, o.Z)((0, i.Z)((e = {
                                padding: "".concat(c.m, " ").concat(c.base)
                            }, (0, r.Z)(e, s.up("sm"), {
                                padding: "".concat(c.l, " ").concat(c.m)
                            }), (0, r.Z)(e, s.up("md"), {
                                padding: "".concat(c.l, " ").concat(c.m)
                            }), (0, r.Z)(e, s.up("lg"), {
                                padding: "".concat(c.xl, " ").concat(c.m)
                            }), e), u ? (0, r.Z)({}, "&:nth-of-type(".concat(u, ")"), (a = {}, (0, r.Z)(a, s.up("md"), {
                                padding: "".concat(c.l, " ").concat(c.m)
                            }), (0, r.Z)(a, s.up("lg"), {
                                padding: "".concat(c.xl, " ").concat(c.m)
                            }), a)) : {}), {
                                "&:last-child": {
                                    marginBottom: l ? "-".concat(c.xl) : 0
                                }
                            })
                        }
                    }
                }),
                h = function(t) {
                    var n = t.cmsModules,
                        e = t.customComponentMap,
                        l = t.componentProps,
                        m = t.CustomContainerComponent,
                        p = t.CustomContainerComponentDarkTheme,
                        h = t.containerProps,
                        g = t.withVerticalSpacing,
                        v = t.lastChildSpacing,
                        x = t.isContentfulLP,
                        C = t.entries,
                        y = t.isFullWidth,
                        b = t.isAlternatingBackground,
                        j = t.uniformModuleSpacing,
                        k = t.classesProps,
                        Z = f({
                            lastChildSpacing: v,
                            nthChild: h.nthChild
                        }),
                        P = Z.classes,
                        w = Z.cx,
                        T = (0, c.useMemo)(function() {
                            var t;
                            return t = {}, (0, r.Z)(t, s.Ji, p), (0, r.Z)(t, s.VH, p), (0, r.Z)(t, s.sn, m), t
                        }, [p, m]);
                    return x ? (0, a.jsx)(a.Fragment, {
                        children: null == n ? void 0 : n.map(function() {
                            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = arguments.length > 1 ? arguments[1] : void 0;
                            return (0, a.jsx)(u.p, {
                                id: null == n ? void 0 : n.id,
                                contentType: null == C ? void 0 : null === (t = C[null == n ? void 0 : n.id]) || void 0 === t ? void 0 : t.contentType,
                                customComponentMap: e,
                                componentProps: l,
                                isContentfulLP: !0,
                                cmsBgContainerProps: {
                                    index: b ? r : 0,
                                    isFullWidth: y,
                                    uniformModuleSpacing: j
                                },
                                maxWidth: !1
                            }, (null == n ? void 0 : n.id) ? "".concat(null == n ? void 0 : n.id, "-").concat(r) : r)
                        })
                    }) : (0, a.jsx)("div", {
                        className: w((0, r.Z)({}, P.verticalSpacing, g), k.modulesWrapper),
                        children: null == n ? void 0 : n.map(function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0,
                                r = T[null == t ? void 0 : t.themeMode] || m,
                                c = ((null == l ? void 0 : l[null == t ? void 0 : t.contentType]) || {}).className;
                            return (0, a.jsx)(r, (0, o.Z)((0, i.Z)({
                                index: n,
                                isBlackMode: (null == t ? void 0 : t.themeMode) === s.Ji
                            }, c && {
                                className: P[c]
                            }, h), {
                                children: (0, a.jsx)(d, {
                                    cmsModule: t,
                                    customComponentMap: e,
                                    componentProps: l
                                })
                            }), (null == t ? void 0 : t.id) ? "".concat(null == t ? void 0 : t.id, "-").concat(n) : n)
                        })
                    })
                };
            h.defaultProps = {
                cmsModules: null,
                customComponentMap: {},
                CustomContainerComponent: p,
                CustomContainerComponentBlackTheme: p,
                CustomContainerComponentDarkTheme: p,
                containerProps: {},
                lastChildSpacing: !0,
                withVerticalSpacing: !0,
                isFullWidth: !1,
                isAlternatingBackground: !1,
                uniformModuleSpacing: s.ps,
                classesProps: {},
                afterSSRModulesRef: null
            }
        },
        62996: function(t, n, e) {
            e.d(n, {
                v: function() {
                    return i
                }
            });
            var r = e(25237),
                i = e.n(r)()(function() {
                    return Promise.all([e.e(49210), e.e(55162)]).then(e.bind(e, 55162)).then(function(t) {
                        return t.CmsImageItem
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55162]
                        }
                    },
                    ssr: !0
                })
        },
        50478: function(t, n, e) {
            e.r(n), e.d(n, {
                CmsImageParagraphs: function() {
                    return R
                }
            });
            var r = e(47842),
                i = e(70865),
                o = e(96670),
                a = e(26297),
                s = e(87394),
                c = e(52322),
                l = e(62197),
                u = e(41075),
                m = e(78675),
                d = e(53957),
                p = e(77601),
                f = e(75863),
                h = e(90369),
                g = e(36232),
                v = e(2784),
                x = e(8740),
                C = e(4418),
                y = e(95438),
                b = (0, x.ZL)()(function(t) {
                    var n = t.tokens.spacing,
                        e = t.palette;
                    return {
                        title: {
                            marginTop: n.s
                        },
                        copy: {
                            marginTop: n.xs,
                            marginBottom: n.base,
                            a: {
                                textDecoration: "none",
                                color: e.info.main,
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }
                        }
                    }
                }),
                j = function(t) {
                    var n = t.title,
                        e = t.copy,
                        r = b().classes,
                        i = (0, s.Z)((0, v.useState)(void 0), 2),
                        o = i[0],
                        a = i[1];
                    return (0, v.useEffect)(function() {
                        a(e)
                    }, [e]), (0, c.jsxs)(c.Fragment, {
                        children: [n && (0, c.jsx)(h.h, {
                            stringToTransform: n,
                            classes: r.title,
                            Component: (0, c.jsx)(l.Z, {
                                variant: "h5"
                            })
                        }), e && (0, c.jsx)(h.h, {
                            stringToTransform: o,
                            classes: r.copy,
                            Component: (0, c.jsx)(l.Z, {
                                color: "textSecondary"
                            })
                        })]
                    })
                },
                k = (0, x.ZL)()(function(t, n) {
                    var e = t.tokens,
                        r = e.border,
                        o = e.color,
                        a = n.isbordered;
                    return {
                        container: {
                            position: "relative"
                        },
                        image: (0, i.Z)({
                            objectFit: "cover",
                            width: "100%"
                        }, a && {
                            borderRadius: r.radius.l,
                            border: "8px solid ".concat(o.black),
                            objectFit: "fill"
                        })
                    }
                }),
                Z = function(t) {
                    var n = t.image,
                        e = t.video,
                        r = k({
                            isbordered: e && e.coverImageFrame === d.cJ
                        }).classes;
                    return (0, c.jsxs)("div", {
                        className: r.container,
                        children: [n && (0, c.jsx)(y.J, {
                            classesProps: {
                                image: r.image
                            },
                            overideImageStyle: !0,
                            image: n
                        }), e && (0, c.jsx)(f.P, {
                            video: e
                        })]
                    })
                },
                P = (0, x.ZL)()(function(t) {
                    return {
                        item: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            marginBottom: t.tokens.spacing.base
                        }
                    }
                }),
                w = function(t) {
                    var n = t.items,
                        e = t.isContentfulLP,
                        r = P().classes,
                        a = (0, v.useMemo)(function() {
                            return 0 === n.length ? null : 1 === n.length || 2 === n.length || 4 === n.length ? 6 : 4
                        }, [n.length]);
                    return (0, c.jsx)(u.ZP, {
                        container: !0,
                        spacing: 5,
                        children: n.length && n.map(function(t) {
                            var n = t.id,
                                s = t.image,
                                l = t.button,
                                m = t.title,
                                d = t.copy,
                                p = t.video;
                            return (0, c.jsxs)(u.ZP, {
                                xs: 12,
                                md: e ? a : 6,
                                className: r.item,
                                item: !0,
                                children: [(0, c.jsxs)("div", {
                                    children: [(0, c.jsx)(Z, {
                                        video: p,
                                        image: s
                                    }), (0, c.jsx)(j, {
                                        title: m,
                                        copy: d
                                    })]
                                }), l && (0, c.jsx)(C.Y, (0, o.Z)((0, i.Z)({}, l), {
                                    justifyContent: "left",
                                    isContentfulLP: e
                                }))]
                            }, n)
                        })
                    })
                },
                T = (0, x.ZL)()(function(t, n) {
                    var e = t.breakpoints,
                        i = t.tokens.spacing,
                        o = n.layout;
                    return {
                        container: (0, r.Z)({
                            marginBottom: i.base,
                            flexDirection: o.right ? "row-reverse" : "row"
                        }, e.down("lg"), {
                            flexDirection: "row"
                        })
                    }
                }),
                S = function(t) {
                    var n = t.id,
                        e = t.image,
                        r = t.button,
                        a = t.title,
                        s = t.copy,
                        l = t.video,
                        m = t.layout,
                        d = t.isEvenRow,
                        p = t.isContentfulLP,
                        f = m.left,
                        h = m.right,
                        g = T({
                            layout: (0, o.Z)((0, i.Z)({}, m), {
                                left: f ? m.left && d : m.right && !d,
                                right: h ? m.right && d : m.left && !d
                            })
                        }).classes;
                    return (0, c.jsxs)(u.ZP, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        spacing: 4,
                        className: g.container,
                        container: !0,
                        children: [(0, c.jsx)(u.ZP, {
                            xs: 12,
                            md: 6,
                            item: !0,
                            children: (0, c.jsx)(Z, {
                                video: l,
                                image: e
                            })
                        }), (0, c.jsxs)(u.ZP, {
                            xs: 12,
                            md: 5,
                            item: !0,
                            children: [(0, c.jsx)(j, {
                                title: a,
                                copy: s
                            }), r && (0, c.jsx)(C.Y, (0, o.Z)((0, i.Z)({}, r), {
                                justifyContent: "left",
                                isContentfulLP: p
                            }))]
                        }, n)]
                    })
                },
                L = function(t) {
                    var n = t.items,
                        e = t.layout,
                        r = t.isContentfulLP;
                    return n.length && n.map(function(t, n) {
                        var s = t.id,
                            l = (0, a.Z)(t, ["id"]);
                        return (0, c.jsx)(S, (0, o.Z)((0, i.Z)({
                            isEvenRow: n % 2 == 0,
                            layout: e
                        }, l), {
                            isContentfulLP: r
                        }), s)
                    })
                },
                R = function(t) {
                    var n, e = t.title,
                        i = t.items,
                        o = t.maxWidth,
                        a = t.cmsBgContainerProps,
                        s = t.isContentfulLP,
                        u = t.imageParagraphLayout,
                        f = (0, p.TT)().classes.title,
                        h = (n = {}, (0, r.Z)(n, d.zo, u === d.Up), (0, r.Z)(n, d.O_, u === d.NY), n);
                    return (0, c.jsx)(g.I, {
                        cmsBgContainerProps: a,
                        children: (0, c.jsxs)(m.Z, {
                            maxWidth: o,
                            disableGutters: !0,
                            children: [e && (!s || u === d._y) && (0, c.jsx)(l.Z, {
                                variant: "h5",
                                className: f,
                                children: e
                            }), i && (0, c.jsx)(c.Fragment, {
                                children: h.left || h.right ? (0, c.jsx)(L, {
                                    items: i,
                                    layout: h,
                                    isContentfulLP: s
                                }) : (0, c.jsx)(w, {
                                    items: i,
                                    isContentfulLP: s
                                })
                            })]
                        })
                    })
                };
            R.defaultProps = {
                maxWidth: "lg",
                cmsBgContainerProps: {},
                imageParagraphLayout: d.NY
            }
        },
        13936: function(t, n, e) {
            e.d(n, {
                E: function() {
                    return p
                }
            });
            var r = e(70865),
                i = e(52322),
                o = e(67550),
                a = e(4418),
                s = e(86783),
                c = e(54806),
                l = e(89041),
                u = e(37205),
                m = e(85499),
                d = e(2784),
                p = function(t) {
                    var n = t.metadata,
                        e = t.imageLinks,
                        p = t.hero,
                        f = t.button;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(l.z, {
                            metadata: n,
                            hero: p
                        }), (0, i.jsx)(u.v, {}), (0, i.jsx)(o.Z, {
                            mt: 4
                        }), p && (0, i.jsx)(s.CmsHero, {
                            image: p.image,
                            title: p.title,
                            subtitle: p.subtitle,
                            isShortHero: p.isShortHero
                        }), e && e.map(function(t) {
                            var n = t.id,
                                e = t.title,
                                r = t.items,
                                o = t.layout;
                            return (0, i.jsxs)(d.Fragment, {
                                children: [(0, i.jsx)(m.e, {}), (0, i.jsx)(c.J, {
                                    title: e,
                                    items: r,
                                    layout: o
                                })]
                            }, n)
                        }), f && (0, i.jsx)(a.Y, (0, r.Z)({
                            mt: 4,
                            color: "primary"
                        }, f))]
                    })
                }
        },
        68: function(t, n, e) {
            e.r(n), e.d(n, {
                CmsAudioHero: function() {
                    return I
                },
                CmsBreadcrumbs: function() {
                    return V.CmsBreadcrumbs
                },
                CmsButton: function() {
                    return _.Y
                },
                CmsButtonModule: function() {
                    return X.L
                },
                CmsCarousel: function() {
                    return ti.v
                },
                CmsDynamicEntry: function() {
                    return ts.p
                },
                CmsDynamicModules: function() {
                    return ta.p
                },
                CmsFaq: function() {
                    return i.b
                },
                CmsHero: function() {
                    return Z.CmsHero
                },
                CmsImageGrid: function() {
                    return Y.c
                },
                CmsImageItem: function() {
                    return Q.v
                },
                CmsImageLinks: function() {
                    return U.J
                },
                CmsImageParagraphs: function() {
                    return $.CmsImageParagraphs
                },
                CmsLinksList: function() {
                    return te.CmsLinksList
                },
                CmsMarketingLandingPage: function() {
                    return J.E
                },
                CmsMetadata: function() {
                    return K.z
                },
                CmsSplitHero: function() {
                    return G
                },
                CmsTabTable: function() {
                    return q.p
                },
                CmsTrustMarks: function() {
                    return tr.N
                },
                CmsValueProps: function() {
                    return tt.j
                },
                DynamicCmsBanner: function() {
                    return r.G
                },
                DynamicCmsLinksList: function() {
                    return tn.F
                },
                DynamicCmsOrderedList: function() {
                    return to.u
                }
            });
            var r = e(97319),
                i = e(12502),
                o = e(47842),
                a = e(87394),
                s = e(52322),
                c = e(62197),
                l = e(41075),
                u = e(67550),
                m = e(48289),
                d = e(35744),
                p = e(83249),
                f = e(53957),
                h = e(9390),
                g = e(87422),
                v = e(29858),
                x = e(42005),
                C = e(41130),
                y = e(89522),
                b = e(75),
                j = e(59877),
                k = e(8740),
                Z = e(86783),
                P = (0, k.ZL)()(function(t) {
                    var n = t.tokens,
                        e = n.spacing,
                        r = n.fontWeight;
                    return {
                        icon: {
                            marginRight: e.s
                        },
                        cta: {
                            fontWeight: r.normal
                        },
                        paper: {
                            padding: e.l
                        },
                        title: {
                            fontWeight: r.normal
                        }
                    }
                }),
                w = (0, k.ZL)()(function(t) {
                    var n = t.breakpoints,
                        e = t.tokens.spacing;
                    return {
                        divider: (0, o.Z)({}, n.up("sm"), {
                            marginRight: e.m
                        })
                    }
                }),
                T = function(t) {
                    var n = t.label,
                        e = t.addSeparator,
                        r = t.href;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(h.r, {
                            href: r,
                            underline: !0,
                            children: (0, s.jsx)(c.Z, {
                                variant: "caption",
                                children: n
                            })
                        }), !!e && (0, s.jsx)(c.Z, {
                            variant: "caption",
                            children: ", "
                        })]
                    })
                },
                S = function(t) {
                    var n = t.moods,
                        e = (0, j.$G)(b.fC8).t,
                        r = (0, C.wY)({
                            t: e,
                            facets: n,
                            maxFacets: 2,
                            facetType: v.ru
                        });
                    return !!r && r.map(function(t, n) {
                        var e = t.label,
                            i = t.href;
                        return (0, s.jsx)(T, {
                            label: e,
                            addSeparator: n < 1 && !!r[n + 1],
                            href: i
                        }, e)
                    })
                },
                L = function(t) {
                    var n = t.track,
                        e = t.tracks,
                        r = w().classes,
                        i = (0, a.Z)((0, y.KC)({
                            asset: n
                        }), 2),
                        o = i[0],
                        d = i[1],
                        p = (0, x.w)();
                    return (0, s.jsxs)(l.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: [(0, s.jsxs)(u.Z, {
                            display: "flex",
                            py: 4,
                            alignItems: "center",
                            children: [(0, s.jsx)(g.s, {
                                tracks: e,
                                track: n
                            }), (0, s.jsxs)(u.Z, {
                                ml: 4,
                                children: [(0, s.jsx)(h.r, {
                                    href: o,
                                    linkAs: d,
                                    underline: !0,
                                    onClick: function() {
                                        return p({
                                            asset: n,
                                            gridItems: e
                                        })
                                    },
                                    children: (0, s.jsx)(c.Z, {
                                        children: n.title
                                    })
                                }), !!n.moods && !!n.moods.length && (0, s.jsx)(S, {
                                    moods: n.moods
                                })]
                            })]
                        }), (0, s.jsx)(m.Z, {
                            className: r.divider
                        })]
                    })
                },
                R = function(t) {
                    var n = t.NoAssetsComponent,
                        e = t.tracks;
                    return !!(n && (null === e || e && !e.length))
                },
                A = function(t) {
                    var n = t.NoAssetsComponent,
                        e = t.IconComponent,
                        r = t.title,
                        i = t.tracks,
                        o = t.alignment,
                        a = t.button,
                        m = t.maxTracks,
                        g = P().classes,
                        v = R({
                            NoAssetsComponent: n,
                            tracks: i
                        }),
                        x = !!(i && i.length);
                    return (0, s.jsx)(l.ZP, {
                        container: !0,
                        justifyContent: o === f.O_ ? "flex-end" : "flex-start",
                        children: (0, s.jsx)(l.ZP, {
                            item: !0,
                            xs: 12,
                            md: 10,
                            lg: 8,
                            children: (0, s.jsxs)(d.Z, {
                                classes: {
                                    root: g.paper
                                },
                                children: [(0, s.jsxs)(u.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 4,
                                    children: [e && (0, s.jsx)(e, {
                                        fontSize: "large",
                                        className: g.icon
                                    }), (0, s.jsx)(c.Z, {
                                        component: "h2",
                                        variant: "h5",
                                        className: g.title,
                                        children: r
                                    })]
                                }), (0, s.jsx)(l.ZP, {
                                    container: !0,
                                    children: x ? i.slice(0, m || i.length).map(function(t, n) {
                                        return (0, s.jsx)(L, {
                                            track: t,
                                            tracks: i
                                        }, "hero_".concat(t.id, "_").concat(n))
                                    }) : v && (0, s.jsx)(n, {})
                                }), (0, s.jsx)(u.Z, {
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: a ? 6 : 4,
                                    children: a && x && (0, s.jsx)(p.Z, {
                                        classes: {
                                            root: g.cta
                                        },
                                        component: h.r,
                                        href: a.href,
                                        role: "link",
                                        size: "medium",
                                        variant: "outlined",
                                        children: a.label
                                    })
                                })]
                            })
                        })
                    })
                },
                I = function(t) {
                    var n = t.backgroundColor,
                        e = t.image,
                        r = t.tracks,
                        i = t.title,
                        o = t.maxTracks,
                        a = t.button,
                        c = t.IconComponent,
                        l = t.alignment,
                        u = t.NoAssetsComponent;
                    return (0, s.jsx)(Z.CmsHero, {
                        ContentComponent: A,
                        backgroundColor: n,
                        image: e,
                        title: i,
                        isShortHero: !1,
                        tracks: r,
                        button: a,
                        IconComponent: c,
                        alignment: l,
                        maxTracks: o,
                        NoAssetsComponent: u
                    })
                };
            I.defaultProps = {
                IconComponent: null,
                maxTracks: null,
                alignment: f.zo
            };
            var M = e(70865),
                E = e(26297),
                N = e(78675),
                B = e(95438),
                F = e(96670),
                H = e(2784),
                _ = e(4418),
                D = e(37205),
                O = (0, k.ZL)()(function(t) {
                    var n, e = t.breakpoints,
                        r = t.palette,
                        i = t.tokens.spacing;
                    return {
                        text: {
                            width: "100%",
                            color: r.text.primary,
                            display: "flex",
                            flexDirection: "column"
                        },
                        buttonContainer: (0, o.Z)({
                            display: "flex",
                            flexDirection: "column"
                        }, e.up("sm"), {
                            flexDirection: "row"
                        }),
                        button: (n = {
                            marginBottom: i.s,
                            background: r.secondary.main
                        }, (0, o.Z)(n, e.up("sm"), {
                            marginBottom: 0,
                            marginRight: i.base
                        }), (0, o.Z)(n, "&:hover", {
                            background: r.secondary.dark
                        }), n)
                    }
                }),
                W = function(t) {
                    var n = t.buttons,
                        e = t.subtitle,
                        r = t.title,
                        i = t.showSubtitle,
                        o = t.searchBarLocation,
                        a = O(),
                        l = a.classes,
                        m = a.cx;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: m(l.text),
                            children: [(0, s.jsx)(c.Z, {
                                variant: "h3",
                                component: "h1",
                                "data-optimize": "cms-headline",
                                children: r
                            }), (i || e) && (0, s.jsx)(u.Z, {
                                pb: 5,
                                pt: 2,
                                children: (0, s.jsx)(c.Z, {
                                    variant: "h6",
                                    component: "h2",
                                    "data-optimize": "cms-sub-headline",
                                    children: (0, s.jsx)(u.Z, {
                                        fontWeight: "fontWeightRegular",
                                        dangerouslySetInnerHTML: {
                                            __html: e
                                        }
                                    })
                                })
                            })]
                        }), n && (0, s.jsx)("div", {
                            className: l.buttonContainer,
                            children: n.map(function(t) {
                                return (0, H.createElement)(_.Y, (0, F.Z)((0, M.Z)({}, t), {
                                    classesProps: {
                                        button: l.button
                                    },
                                    key: t.id
                                }))
                            })
                        }), o && (0, s.jsx)(D.v, {
                            showSelectedAssetTypeLabel: !1
                        })]
                    })
                };
            W.defaultProps = {};
            var z = (0, k.ZL)()(function(t, n) {
                    var e = t.breakpoints,
                        r = n.imageRight;
                    return {
                        heroContainer: (0, o.Z)({
                            display: "flex",
                            flexDirection: r ? "row-reverse" : "row",
                            alignItems: "center",
                            minHeight: "40vh"
                        }, e.up("lg"), {
                            minHeight: "550px"
                        }),
                        heroContent: {
                            flex: 1,
                            padding: 50
                        },
                        imageContent: (0, o.Z)({
                            flex: 1,
                            padding: 50
                        }, e.down("md"), {
                            display: "none"
                        }),
                        heroImage: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }
                    }
                }),
                G = function(t) {
                    var n = t.backgroundColor,
                        e = t.ContentComponent,
                        r = t.image,
                        i = t.imageLocation,
                        o = (t.customAssetMetadata, (0, E.Z)(t, ["backgroundColor", "ContentComponent", "image", "imageLocation", "customAssetMetadata"])),
                        a = z({
                            backgroundColor: n,
                            imageRight: "Right" === i
                        }).classes;
                    return (0, s.jsxs)("div", {
                        className: a.heroContainer,
                        children: [r && (0, s.jsx)("div", {
                            className: a.imageContent,
                            children: (0, s.jsx)(B.J, {
                                image: r,
                                lazyLoadImage: !1,
                                dataOptimize: "split-hero-image",
                                classesProps: {
                                    image: a.heroImage
                                }
                            })
                        }), (0, s.jsx)(N.Z, {
                            maxWidth: "lg",
                            classes: {
                                root: a.heroContent
                            },
                            children: (0, s.jsx)(e, (0, M.Z)({}, o))
                        })]
                    })
                };
            G.defaultProps = {
                ContentComponent: W,
                hideSearchByAsset: !0,
                preTitle: "",
                imageLocation: "Right"
            };
            var Q = e(62996),
                U = e(54806),
                V = e(1129),
                q = e(21144),
                J = e(13936),
                Y = e(92616),
                $ = e(50478),
                K = e(89041),
                X = e(24747),
                tt = e(95469),
                tn = e(98702),
                te = e(60687),
                tr = e(28012),
                ti = e(68591),
                to = e(37168),
                ta = e(45567),
                ts = e(83081)
        },
        41563: function(t, n, e) {
            e.d(n, {
                r: function() {
                    return c
                }
            });
            var r = e(70865),
                i = e(52322),
                o = e(36616),
                a = e(19161),
                s = function(t) {
                    return (0, t.children)()
                },
                c = function(t) {
                    var n = t.track,
                        e = t.highRefreshRate,
                        c = t.children,
                        l = t.shouldRenderHook;
                    return (0, o.R)().playing.activeTrack.id === (null == n ? void 0 : n.id) && l ? (0, i.jsx)(s, {
                        children: function() {
                            return c((0, r.Z)({}, (0, a.E)({
                                track: n,
                                highRefreshRate: e
                            })))
                        }
                    }) : c()
                };
            c.defaultProps = {
                shouldRenderHook: !0
            }
        },
        87422: function(t, n, e) {
            e.d(n, {
                s: function() {
                    return f
                }
            });
            var r = e(52322),
                i = e(480),
                o = e(31913),
                a = e(59481),
                s = e(41563),
                c = e(15445),
                l = e(66358),
                u = e(36616),
                m = e(9823),
                d = e(776),
                p = (0, e(8740).ZL)()(function(t, n) {
                    var e = t.palette,
                        r = t.spacing,
                        i = n.isBrandEnterprise,
                        o = n.isPlaying;
                    return {
                        playButton: {
                            borderStyle: "solid",
                            borderWidth: 2,
                            borderColor: e.border2Color,
                            color: i && o ? e.waveformColorAccent : e.primary.main,
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
                f = function(t) {
                    var n = t.classesProps,
                        e = t.disabled,
                        f = t.disableRipple,
                        h = t.track,
                        g = t.tracks,
                        v = t.withAudioPosition,
                        x = t.setShowPlaceHolder,
                        C = (0, u.R)(),
                        y = C.playerActions,
                        b = C.playing,
                        j = (0, m.D)().isBrandEnterprise,
                        k = b.isPlaying && b.activeTrack.id === h.id,
                        Z = p({
                            isBrandEnterprise: j,
                            isPlaying: k
                        }),
                        P = Z.classes,
                        w = Z.cx,
                        T = (0, d.wU)(),
                        S = "".concat(T, ".").concat(k ? l.Nng : l.czb),
                        L = k ? i.Z : o.Z;
                    return (0, r.jsxs)(a.h, {
                        onClick: function(t) {
                            var n, e;
                            t.stopPropagation(), t.preventDefault(), h.isUpload && (null == h ? void 0 : null === (n = h.processingStatuses) || void 0 === n ? void 0 : null === (e = n.preview) || void 0 === e ? void 0 : e.status) !== "success" ? x && x(!0) : y.handlePlay({
                                track: h,
                                tracks: g
                            })
                        },
                        clickTrack: S,
                        className: w(n.playButton, P.playButton),
                        "aria-label": "Play Track",
                        disabled: e,
                        disableRipple: f,
                        size: "large",
                        children: [v && (0, r.jsx)(s.r, {
                            track: h,
                            shouldRenderHook: !0,
                            highRefreshRate: !0,
                            children: function() {
                                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).percentComplete;
                                return (0, r.jsx)(c.e, {
                                    radius: 25,
                                    stroke: 2,
                                    progress: t
                                })
                            }
                        }), (0, r.jsx)(L, {
                            className: n.svgIcon
                        })]
                    })
                };
            f.defaultProps = {
                classesProps: {},
                disabled: !1,
                disableRipple: !1,
                track: {},
                tracks: [],
                withAudioPosition: !0,
                setShowPlaceHolder: !1
            }
        },
        15445: function(t, n, e) {
            e.d(n, {
                e: function() {
                    return a
                }
            });
            var r = e(52322),
                i = e(47746),
                o = (0, e(8740).ZL)()({
                    svg: {
                        position: "absolute",
                        transform: "rotate(-90deg)"
                    }
                }),
                a = function(t) {
                    var n = t.radius,
                        e = t.stroke,
                        a = t.strokeColor,
                        s = t.progress,
                        c = o().classes,
                        l = (0, i.Z)().palette.common,
                        u = n - 2 * e,
                        m = 2 * u * Math.PI;
                    return (0, r.jsx)("svg", {
                        height: 2 * n,
                        width: 2 * n,
                        className: c.svg,
                        children: (0, r.jsx)("circle", {
                            stroke: a || l.white,
                            fill: "transparent",
                            strokeWidth: e,
                            strokeDasharray: "".concat(m),
                            strokeDashoffset: "".concat(m - (void 0 === s ? 0 : s) / 100 * m),
                            r: u,
                            cx: n,
                            cy: n
                        })
                    })
                }
        },
        85499: function(t, n, e) {
            e.d(n, {
                e: function() {
                    return o
                }
            });
            var r = e(52322),
                i = e(67550),
                o = function(t) {
                    var n = t.verticalSpacing;
                    return (0, r.jsx)(i.Z, {
                        pt: n
                    })
                };
            o.defaultProps = {
                verticalSpacing: {
                    xs: 4,
                    sm: 5,
                    md: 6
                }
            }
        },
        60203: function(t, n, e) {
            e.d(n, {
                i: function() {
                    return r
                }
            });
            var r = (0, e(2784).createContext)(void 0)
        },
        7569: function(t, n, e) {
            e.r(n), e.d(n, {
                globalCategories: function() {
                    return o
                }
            });
            var r = e(18505),
                i = e(3704),
                o = {
                    apiQuery: "filter[categories]",
                    buildApiValue: function(t) {
                        return (0, i.ky)(t, "AND")
                    },
                    primaryText: "common:filters_category",
                    urlValue: r.En,
                    defaultValue: [],
                    getPillLabel: function(t, n) {
                        var e;
                        return null === (e = (0, t.getCategory)(n.value)) || void 0 === e ? void 0 : e.value
                    },
                    inputLabel: "common:filters_select_a_category",
                    showInSearchBar: !0,
                    filters: []
                }
        },
        19161: function(t, n, e) {
            e.d(n, {
                E: function() {
                    return a
                }
            });
            var r = e(87394),
                i = e(36616),
                o = e(2784),
                a = function() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = n.track,
                        a = n.highRefreshRate,
                        s = void 0 !== a && a,
                        c = n.fps,
                        l = void 0 === c ? 30 : c,
                        u = (0, i.R)(),
                        m = u.audioElementRef,
                        d = u.playing,
                        p = (0, r.Z)((0, o.useState)(0), 2),
                        f = p[0],
                        h = p[1],
                        g = m.current,
                        v = (null == e ? void 0 : e.id) === (null === (t = d.activeTrack) || void 0 === t ? void 0 : t.id);
                    (0, o.useLayoutEffect)(function() {
                        var t, n, e = 0;
                        if (v && g && d.isPlaying) {
                            if (s) {
                                var r = function(n) {
                                    t = requestAnimationFrame(r), n - e < 1e3 / l - .1 || (e = n, h(g.getCurrentTime()))
                                };
                                t = requestAnimationFrame(r)
                            } else n = window.setInterval(function() {
                                return h(g.getCurrentTime())
                            }, 1e3)
                        }
                        return function() {
                            clearTimeout(n), cancelAnimationFrame(t)
                        }
                    }, [l, s, g, d.isPlaying, h, v]);
                    var x = (0, o.useCallback)(function(t) {
                            g.seekTo(parseFloat(t), "seconds"), h(t)
                        }, [g, h]),
                        C = (0, o.useMemo)(function() {
                            return v ? (f / d.duration * 100 || 0).toFixed(1) : 0
                        }, [v, d.duration, f]);
                    return {
                        position: f,
                        duration: Math.floor(d.duration),
                        seekTo: x,
                        percentComplete: C
                    }
                }
        },
        41130: function(t, n, e) {
            e.d(n, {
                $J: function() {
                    return b
                },
                wY: function() {
                    return y
                },
                IQ: function() {
                    return C
                },
                ku: function() {
                    return x
                }
            });
            var r = e(47842),
                i = e(70865),
                o = e(96670),
                a = e(87394),
                s = e(50930),
                c = e(39232),
                l = e(29858),
                u = e(18505),
                m = e(2784),
                d = e(60203),
                p = e(3704),
                f = e(7569),
                h = e(58370),
                g = e(87152),
                v = {
                    ambisonic: "ambisonic",
                    5.1: "surround_5_1"
                },
                x = function() {
                    var t = (0, a.Z)((0, m.useState)({}), 2),
                        n = t[0],
                        e = t[1],
                        s = ((0, m.useContext)(d.i) || {})[u.hh.MUSIC_SEARCH];
                    return (0, m.useMemo)(function() {
                        s && e((0, g.s)(Object.entries(s).map(function(t) {
                            var n = (0, a.Z)(t, 2);
                            return [n[0], n[1].reduce(function(t, n) {
                                var e = n.docCount,
                                    a = n.key;
                                return (0, o.Z)((0, i.Z)({}, t), (0, r.Z)({}, (0, p.WF)(a), {
                                    count: e,
                                    originalValue: a
                                }))
                            }, {})]
                        })))
                    }, [s]), n
                },
                C = function() {
                    var t, n = x().artists;
                    return {
                        getArtistName: (0, m.useCallback)(function(e) {
                            var r;
                            return null !== (t = null == n ? void 0 : null === (r = n[e]) || void 0 === r ? void 0 : r.originalValue) && void 0 !== t ? t : e
                        }, [n])
                    }
                },
                y = function(t) {
                    var n = t.t,
                        e = t.facets,
                        i = t.maxFacets,
                        o = t.facetType,
                        u = t.assetType,
                        d = t.publishedAssets,
                        g = t.translatedCategories;
                    return (0, m.useMemo)(function() {
                        var t = !!e && e.slice(0, i || e.length).map(function(t) {
                            var e = t ? (0, p.y8)(t, o, g) : {},
                                i = e.label,
                                s = e.value;
                            return {
                                href: (0, a.Z)(u === c.tn ? (0, h.UO)((0, r.Z)({}, f.globalCategories.urlValue, s)) : (0, h.oi)((0, r.Z)({}, o, s)), 1)[0],
                                label: u === c.tn ? i : i && n([i, ""])
                            }
                        }).reduce(function(t, n) {
                            var e = n.label,
                                r = n.href;
                            return e && (t[e] = r), t
                        }, {});
                        return t || o !== l.$z || (t = (0, s.Z)(new Set(d.map(function(t) {
                            return t.audioLayout
                        }))).filter(function(t) {
                            return v[t]
                        }).map(function(t) {
                            return {
                                label: n(v[t]),
                                href: ""
                            }
                        }).reduce(function(t, n) {
                            var e = n.label,
                                r = n.href;
                            return e && (t[e] = r), t
                        }, {})), t ? Object.keys(t).sort().map(function(n) {
                            return {
                                label: n,
                                href: t[n]
                            }
                        }) : null
                    }, [n, e, i, o, u, d, g])
                },
                b = function(t) {
                    var n = t.facets,
                        e = t.t,
                        r = t.maxFacets,
                        i = t.facetType;
                    return y({
                        t: e,
                        facets: (0, m.useMemo)(function() {
                            return n ? (0, s.Z)(n).reverse().map(function(t) {
                                return t.key
                            }) : null
                        }, [n]),
                        maxFacets: r,
                        facetType: i
                    })
                }
        },
        29043: function(t, n, e) {
            e.d(n, {
                _: function() {
                    return a
                }
            });
            var r = e(70865),
                i = e(52322),
                o = (0, e(6620).Z)((0, i.jsx)("path", {
                    d: "M11.467 22.8l1.867 1.867 8-8-8-8-1.867 1.867 6.133 6.133-6.133 6.133z"
                }), "ChevronRight.svg"),
                a = function(t) {
                    return (0, i.jsx)(o, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        15741: function(t, n, e) {
            e.d(n, {
                Q_: function() {
                    return f
                },
                SX: function() {
                    return d
                },
                oc: function() {
                    return m
                },
                t0: function() {
                    return p
                },
                vO: function() {
                    return h
                }
            });
            var r = e(70865),
                i = e(11181),
                o = e(85129),
                a = e(16642),
                s = e(70314),
                c = e.n(s),
                l = i.BRANDS.SSTK,
                u = c()().publicRuntimeConfig.shutterstockBaseUrl,
                m = function(t) {
                    var n = t.contentType,
                        e = t.html;
                    return (0, r.Z)({
                        type: "application/ld+json",
                        innerHTML: JSON.stringify(e)
                    }, n ? {
                        contentType: n
                    } : {})
                },
                d = m({
                    contentType: a.H2.ORGANIZATION,
                    html: {
                        "@context": a.ke,
                        "@type": a.Rm.ORGANIZATION,
                        name: l,
                        url: u,
                        aggregateRating: {
                            "@type": a.Rm.AGGREGATE_RATING,
                            ratingValue: "4.4",
                            bestRating: "5",
                            ratingCount: "507"
                        },
                        logo: o.Br,
                        sameAs: ["https://www.facebook.com/Shutterstock", "https://twitter.com/shutterstock", "https://www.linkedin.com/company/shutterstock", "https://www.youtube.com/user/ShutterstockInc", "https://instagram.com/shutterstock/"]
                    }
                }),
                p = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return m({
                        html: {
                            "@context": "http://schema.org",
                            "@type": a.Rm.BREADCRUMBSLIST,
                            itemListElement: t.map(function(n, e) {
                                var r, i, o = n.title,
                                    a = n.href;
                                return o && (t.length - 1 === e || a) || null === (r = window.NREUM) || void 0 === r || null === (i = r.noticeError) || void 0 === i || i.call(r, Error("Breadcrumb for linked data is malformed: potential SEO impact"), {
                                    msg: 'Breadcrumb items must have a shape of "{ name: String, url: String }", currently: "{ name: '.concat(o, ", url: ").concat(a, ' }"')
                                }), {
                                    "@type": "ListItem",
                                    position: e + 1,
                                    item: {
                                        "@id": a,
                                        name: o
                                    }
                                }
                            })
                        }
                    })
                },
                f = function() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t = e ? n.map(function(t) {
                        var n, e, r = t.fields,
                            i = r.cmsFaqItemTitle,
                            o = r.cmsFaqItemBody;
                        return i && o || null === (n = window.NREUM) || void 0 === n || null === (e = n.noticeError) || void 0 === e || e.call(n, Error("FAQ Items for linked data is malformed: potential SEO impact"), {
                            msg: "FAQ items must have a shape of `{ question: String, answer: String }`"
                        }), {
                            "@type": "Question",
                            name: i,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: o
                            }
                        }
                    }) : n.map(function(t) {
                        var n, e, r = t.cmsFaqItemTitle,
                            i = t.cmsFaqItemBody;
                        return r && i || null === (n = window.NREUM) || void 0 === n || null === (e = n.noticeError) || void 0 === e || e.call(n, Error("FAQ Items for linked data is malformed: potential SEO impact"), {
                            msg: "FAQ items must have a shape of `{ question: String, answer: String }`"
                        }), {
                            "@type": "Question",
                            name: r,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: i
                            }
                        }
                    }), m({
                        contentType: a.H2.FAQPAGE,
                        html: {
                            "@context": "http://schema.org",
                            "@type": a.Rm.FAQPAGE,
                            mainEntity: t
                        }
                    })
                },
                h = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.linksListTitle,
                        e = t.linksListLinks;
                    return n ? m({
                        contentType: a.H2.HOWTO,
                        html: {
                            "@context": "http://schema.org",
                            "@type": a.Rm.HOWTO,
                            name: n,
                            step: (void 0 === e ? [] : e).map(function(t) {
                                if (!t) {
                                    var n, e;
                                    null === (n = window.NREUM) || void 0 === n || null === (e = n.noticeError) || void 0 === e || e.call(n, Error("How To items for linked data is malformed: potential SEO impact"), {
                                        msg: "How To items must be present, it is ".concat(t)
                                    })
                                }
                                return {
                                    "@type": a.Rm.HOWTOSTEP,
                                    text: t
                                }
                            })
                        }
                    }) : {
                        innerHTML: void 0
                    }
                }
        }
    }
]);
//# sourceMappingURL=68.99b7ee7bb81155ba.js.map