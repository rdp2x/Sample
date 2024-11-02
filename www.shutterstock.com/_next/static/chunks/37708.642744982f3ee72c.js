"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37708], {
        92096: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return y
                }
            });
            var a = r(28193),
                o = r(26831),
                i = r(2784),
                n = r(6277),
                s = r(69075),
                c = r(65992),
                l = r(43853),
                u = r(35744),
                d = r(69222),
                f = r(15672);

            function p(t) {
                return (0, f.Z)("MuiCard", t)
            }(0, d.Z)("MuiCard", ["root"]);
            var g = r(52322);
            let h = ["className", "raised"],
                m = t => {
                    let {
                        classes: e
                    } = t;
                    return (0, s.Z)({
                        root: ["root"]
                    }, p, e)
                },
                v = (0, c.ZP)(u.Z, {
                    name: "MuiCard",
                    slot: "Root",
                    overridesResolver: (t, e) => e.root
                })(() => ({
                    overflow: "hidden"
                })),
                Z = i.forwardRef(function(t, e) {
                    let r = (0, l.Z)({
                            props: t,
                            name: "MuiCard"
                        }),
                        {
                            className: i,
                            raised: s = !1
                        } = r,
                        c = (0, o.Z)(r, h),
                        u = (0, a.Z)({}, r, {
                            raised: s
                        }),
                        d = m(u);
                    return (0, g.jsx)(v, (0, a.Z)({
                        className: (0, n.Z)(d.root, i),
                        elevation: s ? 8 : void 0,
                        ref: e,
                        ownerState: u
                    }, c))
                });
            var y = Z
        },
        7671: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return Z
                }
            });
            var a = r(28193),
                o = r(26831),
                i = r(2784),
                n = r(6277),
                s = r(69075),
                c = r(65992),
                l = r(43853),
                u = r(69222),
                d = r(15672);

            function f(t) {
                return (0, d.Z)("MuiCardContent", t)
            }(0, u.Z)("MuiCardContent", ["root"]);
            var p = r(52322);
            let g = ["className", "component"],
                h = t => {
                    let {
                        classes: e
                    } = t;
                    return (0, s.Z)({
                        root: ["root"]
                    }, f, e)
                },
                m = (0, c.ZP)("div", {
                    name: "MuiCardContent",
                    slot: "Root",
                    overridesResolver: (t, e) => e.root
                })(() => ({
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 24
                    }
                })),
                v = i.forwardRef(function(t, e) {
                    let r = (0, l.Z)({
                            props: t,
                            name: "MuiCardContent"
                        }),
                        {
                            className: i,
                            component: s = "div"
                        } = r,
                        c = (0, o.Z)(r, g),
                        u = (0, a.Z)({}, r, {
                            component: s
                        }),
                        d = h(u);
                    return (0, p.jsx)(m, (0, a.Z)({
                        as: s,
                        className: (0, n.Z)(d.root, i),
                        ownerState: u,
                        ref: e
                    }, c))
                });
            var Z = v
        },
        37708: function(t, e, r) {
            r.r(e), r.d(e, {
                VerticalCarouselCard: function() {
                    return R
                }
            });
            var a = r(70865),
                o = r(96670),
                i = r(52322),
                n = r(92096),
                s = r(28193),
                c = r(26831),
                l = r(2784),
                u = r(6277),
                d = r(69075),
                f = r(43853),
                p = r(65992),
                g = r(69222),
                h = r(15672);

            function m(t) {
                return (0, h.Z)("MuiCardActionArea", t)
            }
            let v = (0, g.Z)("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]);
            var Z = r(31373);
            let y = ["children", "className", "focusVisibleClassName"],
                C = t => {
                    let {
                        classes: e
                    } = t;
                    return (0, d.Z)({
                        root: ["root"],
                        focusHighlight: ["focusHighlight"]
                    }, m, e)
                },
                b = (0, p.ZP)(Z.Z, {
                    name: "MuiCardActionArea",
                    slot: "Root",
                    overridesResolver: (t, e) => e.root
                })(({
                    theme: t
                }) => ({
                    display: "block",
                    textAlign: "inherit",
                    width: "100%",
                    [`&:hover .${v.focusHighlight}`]: {
                        opacity: (t.vars || t).palette.action.hoverOpacity,
                        "@media (hover: none)": {
                            opacity: 0
                        }
                    },
                    [`&.${v.focusVisible} .${v.focusHighlight}`]: {
                        opacity: (t.vars || t).palette.action.focusOpacity
                    }
                })),
                x = (0, p.ZP)("span", {
                    name: "MuiCardActionArea",
                    slot: "FocusHighlight",
                    overridesResolver: (t, e) => e.focusHighlight
                })(({
                    theme: t
                }) => ({
                    overflow: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: "inherit",
                    opacity: 0,
                    backgroundColor: "currentcolor",
                    transition: t.transitions.create("opacity", {
                        duration: t.transitions.duration.short
                    })
                })),
                A = l.forwardRef(function(t, e) {
                    let r = (0, f.Z)({
                            props: t,
                            name: "MuiCardActionArea"
                        }),
                        {
                            children: a,
                            className: o,
                            focusVisibleClassName: n
                        } = r,
                        l = (0, c.Z)(r, y),
                        d = C(r);
                    return (0, i.jsxs)(b, (0, s.Z)({
                        className: (0, u.Z)(d.root, o),
                        focusVisibleClassName: (0, u.Z)(n, d.focusVisible),
                        ref: e,
                        ownerState: r
                    }, l, {
                        children: [a, (0, i.jsx)(x, {
                            className: d.focusHighlight,
                            ownerState: r
                        })]
                    }))
                });
            var w = r(7671),
                S = r(33701),
                k = r(77601),
                j = r(19825),
                z = r(95438),
                N = r(9390),
                O = r(29292),
                I = r(8740),
                P = "".concat(100 * S.Hm, "%"),
                M = (0, I.ZL)()(function(t, e) {
                    var r = t.transitions,
                        a = t.tokens,
                        o = a.color,
                        i = a.radius,
                        n = a.spacing,
                        s = e.isOverlayCentered;
                    return {
                        actionArea: {
                            color: o.white
                        },
                        content: {
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            zIndex: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            width: "100%",
                            padding: n.base,
                            whiteSpace: "initial",
                            justifyContent: s ? "flex-start" : "flex-end",
                            height: s ? "100%" : "45%"
                        },
                        card: {
                            position: "relative",
                            "&:after": {
                                position: "absolute",
                                content: '""',
                                bottom: 0,
                                top: 0,
                                zIndex: 1,
                                display: "block",
                                pointerEvents: "none",
                                width: "100%",
                                height: "100%",
                                borderRadius: i.s,
                                transition: r.create("opacity", {
                                    easing: r.easing.easeInOut,
                                    duration: r.duration.short
                                }),
                                backgroundImage: s ? "\n              linear-gradient(\n              to top,\n              transparent 15%,\n              ".concat(o["black-50"], " 50%,\n               transparent 75%\n            )") : "\n              linear-gradient(\n              -180deg,\n              transparent 40%,\n              ".concat(o["black-50"], " 100%\n            )")
                            },
                            "&:hover:after": {
                                opacity: 0
                            }
                        }
                    }
                }),
                R = function(t) {
                    var e = t.asPath,
                        r = t.href,
                        s = t.icon,
                        c = t.image,
                        l = t.isOverlayCentered,
                        u = t.target,
                        d = t.trackAnalytics,
                        f = t.addDataOptAttr,
                        p = t.cardContent,
                        g = M({
                            isOverlayCentered: l
                        }).classes,
                        h = (0, O.SO)({
                            trackAnalytics: d
                        }),
                        m = (0, k.zh)({
                            cardAspectAsPercent: P
                        }).classes;
                    return (0, i.jsx)(n.Z, {
                        classes: {
                            root: g.card
                        },
                        "data-optimize": "carousel-card",
                        children: (0, i.jsxs)(A, {
                            clickAnalyticsLabel: h,
                            component: r ? N.r : "a",
                            href: r,
                            linkAs: e,
                            target: u,
                            classes: {
                                root: g.actionArea
                            },
                            children: [s && (0, i.jsx)(j.j, (0, o.Z)((0, a.Z)({}, s), {
                                isVertical: !0
                            })), (0, i.jsx)(w.Z, {
                                classes: {
                                    root: g.content
                                },
                                children: p
                            }), (0, i.jsx)(z.J, (0, a.Z)({
                                image: c,
                                classesProps: m
                            }, f && {
                                dataOptimize: "carousel-card-picture"
                            }))]
                        })
                    })
                };
            R.defaultProps = {
                asPath: null,
                href: "",
                image: {},
                target: null,
                icon: "",
                trackAnalytics: null,
                isOverlayCentered: !1,
                addDataOptAttr: !1
            }
        },
        19825: function(t, e, r) {
            r.d(e, {
                j: function() {
                    return l
                }
            });
            var a = r(47842),
                o = r(70865),
                i = r(26297),
                n = r(52322),
                s = r(49210),
                c = (0, r(8740).ZL)()(function(t) {
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
                    var e, r = t.isVertical,
                        l = t.url,
                        u = (0, i.Z)(t, ["isVertical", "url"]),
                        d = c(),
                        f = d.classes,
                        p = d.cx;
                    return (0, n.jsx)(s.h, (0, o.Z)({
                        className: p(f.icon, (e = {}, (0, a.Z)(e, f.iconTop, r), (0, a.Z)(e, f.imageIcon, !!l), e)),
                        url: l
                    }, u))
                }
        },
        95438: function(t, e, r) {
            r.d(e, {
                J: function() {
                    return d
                }
            });
            var a = r(70865),
                o = r(96670),
                i = r(52322),
                n = r(2784),
                s = r(21647),
                c = r(27050),
                l = r(25721),
                u = r(77601),
                d = function(t) {
                    var e = t.image,
                        r = e.type,
                        d = e.url,
                        f = e.srcSet,
                        p = e.title,
                        g = e.description,
                        h = e.fit,
                        m = t.lazyLoadImage,
                        v = t.contentNamespace,
                        Z = t.classesProps,
                        y = t.dataOptimize,
                        C = t.fetchPriority,
                        b = t.overideImageStyle,
                        x = (0, u.f7)(),
                        A = x.classes,
                        w = x.cx;
                    try {
                        if (!d) return (0, i.jsx)(s.Z, {
                            variant: "rectangular",
                            className: Z.root
                        });
                        return (0, i.jsx)("div", {
                            className: Z.root,
                            children: (0, i.jsxs)("picture", {
                                "data-optimize": y,
                                children: [f && (0, l.am)(r) && Object.keys(f).map(function(t) {
                                    return (0, n.createElement)("source", (0, o.Z)((0, a.Z)({
                                        type: "image/".concat(l.FJ),
                                        srcSet: (0, l.LA)({
                                            srcSetSizes: f[t],
                                            imageUrl: d,
                                            typeOfImage: l.FJ,
                                            fit: h
                                        })
                                    }, "default" === t ? {} : {
                                        media: (0, l.Dt)(t)
                                    }), {
                                        key: "webp-".concat(t)
                                    }))
                                }), f && Object.keys(f).map(function(t) {
                                    return (0, n.createElement)("source", (0, o.Z)((0, a.Z)({
                                        srcSet: (0, l.LA)({
                                            srcSetSizes: f[t],
                                            imageUrl: d,
                                            typeOfImage: (0, l.TC)(r) ? l.Vy : "",
                                            fit: h
                                        })
                                    }, "default" === t ? {} : {
                                        media: (0, l.Dt)(t)
                                    }), {
                                        key: t
                                    }))
                                }), (0, i.jsx)("img", {
                                    fetchpriority: C,
                                    loading: void 0 === m || m ? "lazy" : "eager",
                                    src: f ? (0, l.Bl)({
                                        srcSetSizes: f.default,
                                        imageUrl: d
                                    }) : d,
                                    alt: g || p,
                                    title: (0, c.zo)(v) ? "" : p,
                                    className: b ? Z.image : w(A.image, Z.image),
                                    width: f ? (0, l.sw)({
                                        srcSetSizes: f.default
                                    }).width : 0,
                                    height: f ? (0, l.sw)({
                                        srcSetSizes: f.default
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
//# sourceMappingURL=37708.642744982f3ee72c.js.map