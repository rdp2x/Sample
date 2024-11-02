"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95093], {
        49076: function(t, e, n) {
            n.d(e, {
                l: function() {
                    return c
                }
            });
            var l = n(70865),
                i = n(52322),
                s = n(41075),
                o = n(67550),
                a = n(62197),
                r = n(4418),
                c = function(t) {
                    var e = t.button,
                        n = t.subtitle,
                        c = t.title,
                        u = t.boldSubtitle;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.ZP, {
                            alignItems: "center",
                            container: !0,
                            justifyContent: "space-around",
                            spacing: 4,
                            children: (0, i.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                md: 8,
                                children: (0, i.jsxs)(o.Z, {
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    my: 4,
                                    children: [c && (0, i.jsx)(a.Z, {
                                        align: "center",
                                        color: "primary",
                                        component: "h4",
                                        variant: "h3",
                                        children: c
                                    }), n && (0, i.jsx)(a.Z, {
                                        align: "center",
                                        color: "primary",
                                        component: "p",
                                        variant: "h6",
                                        children: (0, i.jsx)(o.Z, {
                                            my: 4,
                                            fontWeight: u ? "bold" : "normal",
                                            component: "span",
                                            children: n
                                        })
                                    })]
                                })
                            })
                        }), e && (0, i.jsx)(r.Y, (0, l.Z)({}, e))]
                    })
                };
            c.defaultProps = {
                button: null,
                subtitle: null,
                title: null,
                boldSubtitle: !1
            }
        },
        95093: function(t, e, n) {
            n.r(e), n.d(e, {
                CmsTrustMarks: function() {
                    return v
                }
            });
            var l = n(47842),
                i = n(52322),
                s = n(78675),
                o = n(21647),
                a = n(67550),
                r = n(62197),
                c = n(4418),
                u = n(49076),
                d = n(66358),
                m = n(85129),
                g = n(11181),
                h = n(75),
                p = n(5632),
                x = n(59877),
                _ = n(8740),
                f = function(t) {
                    var e = t.t;
                    return {
                        entry_link_to_form_title: e("entry_link_to_form_title"),
                        request_quote: e("request_quote"),
                        trusted_by_largest_companies: e("trusted_by_largest_companies")
                    }
                },
                b = (0, _.ZL)()(function(t) {
                    var e = t.breakpoints,
                        n = t.tokens.spacing;
                    return {
                        logosContainer: {
                            alignItems: "center",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                            padding: n.s
                        },
                        logoImage: (0, l.Z)({
                            width: "auto",
                            height: n.l,
                            margin: n.base
                        }, e.up("sm"), {
                            margin: n.m
                        }),
                        logoSkeleton: (0, l.Z)({
                            height: "".concat(204, "px"),
                            margin: "0",
                            width: "100%"
                        }, e.up("sm"), {
                            height: "".concat(84, "px"),
                            margin: "0 ".concat(n.xl, " 0")
                        })
                    }
                }),
                v = function(t) {
                    var e = t.logos,
                        n = t.subtitle,
                        l = t.title,
                        _ = t.classesProps,
                        v = (0, x.$G)([h.h3h, h.Fx_]),
                        y = v.t,
                        j = v.ready,
                        k = f({
                            t: y
                        }),
                        Z = b(),
                        S = Z.classes,
                        w = Z.cx,
                        C = (0, p.useRouter)().pathname,
                        q = C === m.aD[g.BRANDS.SSTK],
                        I = C === "".concat(m.aD[g.BRANDS.SSTK], "/images"),
                        N = q || I,
                        D = j && N ? k.trusted_by_largest_companies : null;
                    return (0, i.jsxs)(s.Z, {
                        maxWidth: "lg",
                        children: [N ? (0, i.jsx)(u.l, {
                            subtitle: D,
                            boldSubtitle: !0
                        }) : (l || n) && (0, i.jsx)(u.l, {
                            title: l,
                            subtitle: n
                        }), (0, i.jsx)("div", {
                            className: w(S.logosContainer, _.logosContainer),
                            children: (null == e ? void 0 : e.length) ? e.map(function(t, e) {
                                var n, l, s, o;
                                return (0, i.jsx)("img", {
                                    loading: "lazy",
                                    alt: t.description || t.title,
                                    title: t.title,
                                    className: w(S.logoImage, _.logoImage),
                                    src: t.url,
                                    width: null === (n = t.details) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.width,
                                    height: null === (s = t.details) || void 0 === s ? void 0 : null === (o = s.image) || void 0 === o ? void 0 : o.height
                                }, "".concat(t.id, "-").concat(e))
                            }) : (0, i.jsx)(o.Z, {
                                className: S.logoSkeleton,
                                variant: "rectangular"
                            })
                        }), N && (0, i.jsxs)(a.Z, {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            children: [(0, i.jsx)(r.Z, {
                                display: "block",
                                children: j && k.entry_link_to_form_title
                            }), (0, i.jsx)(c.Y, {
                                trackAnalytics: {
                                    label: d.wkm,
                                    section: d.qjS
                                },
                                variant: "contained",
                                color: "secondary",
                                label: j && k.request_quote,
                                href: "/business#request-demo",
                                mt: 4
                            })]
                        })]
                    })
                };
            v.defaultProps = {
                logos: null,
                subtitle: null,
                title: null,
                classesProps: {}
            }
        }
    }
]);
//# sourceMappingURL=95093.68ce2ef135757243.js.map