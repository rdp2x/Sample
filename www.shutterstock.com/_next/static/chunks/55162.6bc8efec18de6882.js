"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55162], {
        19825: function(t, e, a) {
            a.d(e, {
                j: function() {
                    return l
                }
            });
            var r = a(47842),
                i = a(70865),
                n = a(26297),
                s = a(52322),
                o = a(49210),
                c = (0, a(8740).ZL)()(function(t) {
                    var e = t.tokens.spacing;
                    return {
                        icon: {
                            position: "absolute",
                            bottom: e.s,
                            left: e.s,
                            pointerEvents: "none",
                            zIndex: 2
                        },
                        imageIcon: {
                            height: "20px",
                            width: "auto"
                        },
                        iconTop: {
                            top: e.s
                        }
                    }
                }),
                l = function(t) {
                    var e, a = t.isVertical,
                        l = t.url,
                        u = (0, n.Z)(t, ["isVertical", "url"]),
                        d = c(),
                        p = d.classes,
                        m = d.cx;
                    return (0, s.jsx)(o.h, (0, i.Z)({
                        className: m(p.icon, (e = {}, (0, r.Z)(e, p.iconTop, a), (0, r.Z)(e, p.imageIcon, !!l), e)),
                        url: l
                    }, u))
                }
        },
        55162: function(t, e, a) {
            a.r(e), a.d(e, {
                CmsImageItem: function() {
                    return f
                }
            });
            var r = a(70865),
                i = a(96670),
                n = a(52322),
                s = a(77601),
                o = a(19825),
                c = a(95438),
                l = a(9390),
                u = a(13011),
                d = a(29292),
                p = a(61327),
                m = a(45268),
                f = function(t) {
                    var e = t.asPath,
                        a = t.cardAspect,
                        u = t.cardSpacing,
                        f = t.href,
                        h = t.icon,
                        g = t.image,
                        v = t.subtitle,
                        y = t.target,
                        x = t.title,
                        w = t.trackAnalytics,
                        b = t.withOverlay,
                        j = t.dataOptimize,
                        S = (0, m.c)({
                            withOverlay: b
                        }).classes,
                        k = (0, s.zh)({
                            cardSpacing: u,
                            cardAspectAsPercent: "".concat(100 * a, "%")
                        }).classes,
                        z = (0, d.SO)({
                            trackAnalytics: w
                        });
                    return (0, n.jsx)(l.r, {
                        clickAnalyticsLabel: z,
                        linkAs: e,
                        href: f,
                        target: y,
                        children: (0, n.jsxs)("div", {
                            className: S.wrapper,
                            children: [(0, n.jsxs)("div", {
                                className: S.overlay,
                                children: [b && x && (0, n.jsx)(p.j, {
                                    subtitle: v,
                                    title: x
                                }), h && (0, n.jsx)(o.j, (0, i.Z)((0, r.Z)({}, h), {
                                    isVertical: !1
                                }))]
                            }), (0, n.jsx)(c.J, {
                                image: g,
                                classesProps: k,
                                dataOptimize: void 0 === j ? null : j
                            })]
                        })
                    })
                };
            f.defaultProps = {
                asPath: null,
                cardAspect: u.Th,
                cardSpacing: null,
                href: "",
                image: {},
                target: null,
                title: "",
                trackAnalytics: null,
                withOverlay: !0
            }
        },
        61327: function(t, e, a) {
            a.d(e, {
                j: function() {
                    return o
                }
            });
            var r = a(52322),
                i = a(62197),
                n = a(90369),
                s = a(45268),
                o = function(t) {
                    var e = t.title,
                        a = t.subtitle,
                        o = (0, s.L)().classes;
                    return (0, r.jsxs)("div", {
                        className: o.copyContainer,
                        "data-optimize": "carousel-card-text",
                        children: [e && (0, r.jsx)(n.h, {
                            stringToTransform: e,
                            classes: o.title,
                            Component: (0, r.jsx)(i.Z, {
                                variant: "h6",
                                component: "p"
                            })
                        }), a && (0, r.jsx)(n.h, {
                            stringToTransform: a,
                            Component: (0, r.jsx)(i.Z, {
                                variant: "subtitle2",
                                component: "p"
                            })
                        })]
                    })
                };
            o.defaultProps = {
                subtitle: null
            }
        },
        45268: function(t, e, a) {
            a.d(e, {
                L: function() {
                    return o
                },
                c: function() {
                    return s
                }
            });
            var r = a(47842),
                i = a(8740),
                n = function(t) {
                    var e = t.opacity,
                        a = t.withOverlay,
                        r = t.onHover;
                    return a && !r || r && !a ? "rgba(0, 0, 0, ".concat(e["20"], ")") : "transparent"
                },
                s = (0, i.ZL)()(function(t, e, a) {
                    var i = t.transitions,
                        s = t.tokens,
                        o = s.color,
                        c = s.opacity,
                        l = s.radius,
                        u = e.withOverlay;
                    return {
                        overlay: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            pointerEvents: "none",
                            borderRadius: l.m,
                            color: o.white,
                            height: "100%",
                            width: "100%",
                            background: n({
                                opacity: c,
                                withOverlay: u,
                                onHover: !1
                            }),
                            transition: i.create(["background"], {
                                easing: i.easing.easeInOut,
                                duration: i.duration.shortest
                            }),
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            zIndex: 3
                        },
                        img: {
                            objectFit: "cover",
                            width: "100%"
                        },
                        link: {
                            overflow: "hidden",
                            display: "flex",
                            borderRadius: l.m
                        },
                        wrapper: (0, r.Z)({
                            position: "relative"
                        }, "&:hover > .".concat(a.overlay), {
                            background: n({
                                opacity: c,
                                withOverlay: u,
                                onHover: !0
                            })
                        })
                    }
                }),
                o = (0, i.ZL)()(function(t) {
                    var e = t.textShadows;
                    return {
                        copyContainer: {
                            webkitTransform: "translate(-50%, -50%)",
                            left: "50%",
                            margin: "0 auto",
                            padding: t.tokens.spacing.s,
                            position: "absolute",
                            textAlign: "center",
                            textShadow: e.primary,
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            whiteSpace: "pre-line",
                            width: "inherit",
                            zIndex: 2
                        },
                        title: {
                            overflowWrap: "break-word",
                            hyphens: "auto"
                        }
                    }
                })
        },
        95438: function(t, e, a) {
            a.d(e, {
                J: function() {
                    return d
                }
            });
            var r = a(70865),
                i = a(96670),
                n = a(52322),
                s = a(2784),
                o = a(21647),
                c = a(27050),
                l = a(25721),
                u = a(77601),
                d = function(t) {
                    var e = t.image,
                        a = e.type,
                        d = e.url,
                        p = e.srcSet,
                        m = e.title,
                        f = e.description,
                        h = e.fit,
                        g = t.lazyLoadImage,
                        v = t.contentNamespace,
                        y = t.classesProps,
                        x = t.dataOptimize,
                        w = t.fetchPriority,
                        b = t.overideImageStyle,
                        j = (0, u.f7)(),
                        S = j.classes,
                        k = j.cx;
                    try {
                        if (!d) return (0, n.jsx)(o.Z, {
                            variant: "rectangular",
                            className: y.root
                        });
                        return (0, n.jsx)("div", {
                            className: y.root,
                            children: (0, n.jsxs)("picture", {
                                "data-optimize": x,
                                children: [p && (0, l.am)(a) && Object.keys(p).map(function(t) {
                                    return (0, s.createElement)("source", (0, i.Z)((0, r.Z)({
                                        type: "image/".concat(l.FJ),
                                        srcSet: (0, l.LA)({
                                            srcSetSizes: p[t],
                                            imageUrl: d,
                                            typeOfImage: l.FJ,
                                            fit: h
                                        })
                                    }, "default" === t ? {} : {
                                        media: (0, l.Dt)(t)
                                    }), {
                                        key: "webp-".concat(t)
                                    }))
                                }), p && Object.keys(p).map(function(t) {
                                    return (0, s.createElement)("source", (0, i.Z)((0, r.Z)({
                                        srcSet: (0, l.LA)({
                                            srcSetSizes: p[t],
                                            imageUrl: d,
                                            typeOfImage: (0, l.TC)(a) ? l.Vy : "",
                                            fit: h
                                        })
                                    }, "default" === t ? {} : {
                                        media: (0, l.Dt)(t)
                                    }), {
                                        key: t
                                    }))
                                }), (0, n.jsx)("img", {
                                    fetchpriority: w,
                                    loading: void 0 === g || g ? "lazy" : "eager",
                                    src: p ? (0, l.Bl)({
                                        srcSetSizes: p.default,
                                        imageUrl: d
                                    }) : d,
                                    alt: f || m,
                                    title: (0, c.zo)(v) ? "" : m,
                                    className: b ? y.image : k(S.image, y.image),
                                    width: p ? (0, l.sw)({
                                        srcSetSizes: p.default
                                    }).width : 0,
                                    height: p ? (0, l.sw)({
                                        srcSetSizes: p.default
                                    }).height : 0
                                })]
                            })
                        })
                    } catch (t) {
                        return (0, c.qr)(t, "CmsImageSourceTags")
                    }
                };
            d.defaultProps = {
                image: {},
                fetchPriority: "auto",
                classesProps: {
                    root: "",
                    image: ""
                },
                overideImageStyle: !1
            }
        }
    }
]);
//# sourceMappingURL=55162.6bc8efec18de6882.js.map