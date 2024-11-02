"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48333], {
        19785: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });

            function o(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        31200: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = n(19785);

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var a = n(66700);

            function i(e) {
                return (0, o.Z)(1, arguments), (!! function(e) {
                    return (0, o.Z)(1, arguments), e instanceof Date || "object" === r(e) && "[object Date]" === Object.prototype.toString.call(e)
                }(e) || "number" == typeof e) && !isNaN(Number((0, a.Z)(e)))
            }
        },
        66700: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var o = n(19785);

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                (0, o.Z)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === r(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "undefined" != typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
        },
        49438: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return f
                }
            });
            var o = n(52322),
                r = n(69089),
                a = n(67550),
                i = n(62197),
                c = n(59481),
                l = n(47999),
                s = n(8740),
                u = n(92128),
                m = n(73377),
                f = function(e) {
                    var t = e.title,
                        n = e.content,
                        f = e.ctaText,
                        d = e.bannerUrl,
                        p = e.ctaGAEvent,
                        g = e.closeGAEvent,
                        b = e.ctaUrl,
                        v = e.isOpen,
                        x = e.pageSection,
                        y = e.closeModal,
                        _ = e.footer,
                        h = (0, s.ZL)()(function(e) {
                            var t = e.palette,
                                n = e.tokens,
                                o = n.fontSize,
                                r = n.spacing,
                                a = n.radius;
                            return {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    padding: "6px 32px 32px 38px"
                                },
                                closeBtn: {
                                    align: "right",
                                    alignSelf: "flex-end",
                                    marginRight: -25
                                },
                                bannerContainer: {
                                    marginTop: 12,
                                    lineHeight: 0
                                },
                                gifBannerShimmer: {
                                    position: "absolute",
                                    maxWidth: "100%",
                                    width: 530,
                                    height: 299,
                                    borderRadius: a.l
                                },
                                videoContainer: {
                                    maxWidth: "100%",
                                    borderRadius: a.l
                                },
                                title: {
                                    fontSize: o.xl,
                                    fontWeight: "bold",
                                    marginTop: 22,
                                    alignSelf: "center"
                                },
                                content: {
                                    fontSize: o.m,
                                    marginTop: r.m,
                                    alignSelf: "center",
                                    textAlign: "center",
                                    width: 458,
                                    maxWidth: "90%"
                                },
                                ctaBtn: {
                                    marginTop: r.m,
                                    alignSelf: "center",
                                    width: "fit-content",
                                    padding: "8px 40px",
                                    fontSize: o.s,
                                    lineHeight: "24px",
                                    color: t.common.white,
                                    backgroundColor: t.secondary.main,
                                    "&:hover": {
                                        backgroundColor: t.secondary.dark,
                                        color: t.common.white
                                    }
                                }
                            }
                        })().classes;
                    return (0, o.jsx)(r.Z, {
                        open: v,
                        children: (0, o.jsxs)(a.Z, {
                            className: h.container,
                            children: [(0, o.jsx)("div", {
                                className: h.closeBtn,
                                children: (0, o.jsx)(c.h, {
                                    "aria-label": "Close",
                                    onClick: y,
                                    size: "large",
                                    clickTrack: (0, m.U_)({
                                        pageSection: x,
                                        eventLabel: g
                                    }),
                                    children: (0, o.jsx)(u.x, {
                                        color: "primary"
                                    })
                                })
                            }), (0, o.jsx)("div", {
                                className: h.bannerContainer,
                                children: (0, o.jsx)("video", {
                                    playsInline: !0,
                                    className: h.videoContainer,
                                    controls: !1,
                                    "data-automation": "VideoPlayer",
                                    loop: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    height: "100%",
                                    width: "100%",
                                    "aria-label": "video-player",
                                    children: (0, o.jsx)("source", {
                                        src: d,
                                        type: "video/mp4"
                                    })
                                })
                            }), (0, o.jsx)(i.Z, {
                                component: "h3",
                                className: h.title,
                                children: t
                            }), (0, o.jsx)(i.Z, {
                                className: h.content,
                                children: n
                            }), (0, o.jsx)(l.z, {
                                variant: "contained",
                                clickTrack: (0, m.U_)({
                                    pageSection: x,
                                    eventLabel: p
                                }),
                                onClick: function() {
                                    window.open(b, "_blank")
                                },
                                className: h.ctaBtn,
                                children: f
                            }), _]
                        })
                    })
                }
        },
        40204: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return r
                }
            });
            var o = n(31200),
                r = function(e) {
                    var t = localStorage.getItem(e);
                    if (null != t) {
                        var n = new Date(t);
                        if ((0, o.Z)(n)) return n
                    }
                }
        },
        48333: function(e, t, n) {
            n.r(t), n.d(t, {
                ExperimentRN373: function() {
                    return N
                },
                SkeletonLoader: function() {
                    return Z
                },
                experimentConfig: function() {
                    return k
                }
            });
            var o, r = n(52322),
                a = n(62021),
                i = function() {
                    return (0, r.jsx)(r.Fragment, {})
                },
                c = n(47842),
                l = n(88849),
                s = n(2784),
                u = n(70865),
                m = n(59877),
                f = n(66358),
                d = n(75),
                p = n(96670),
                g = n(87394),
                b = n(24861),
                v = n(43110),
                x = n(20865),
                y = "_SSTK_last_visit_ts",
                _ = "_SSTK_seen_welcome_modal",
                h = n(40204),
                w = n(49438),
                S = function(e) {
                    var t, n = e.title,
                        o = (0, g.Z)((0, s.useState)(!1), 2),
                        a = o[0],
                        i = o[1],
                        c = (0, v.j3)(),
                        l = c.data,
                        m = c.isLoading,
                        f = (0, h.H)(y),
                        d = "true" === localStorage.getItem(_),
                        S = (0, x.DJ)(),
                        j = S.data,
                        k = S.isLoading,
                        Z = (0, s.useCallback)(function() {
                            i(!1)
                        }, []);
                    return (0, s.useEffect)(function() {
                        var e = new Date,
                            t = null == j ? void 0 : j.some(function(e) {
                                return e.plan === b.Vz[1]
                            }),
                            n = !m && !k && null != l && !d && t && void 0 !== f && e.getTime() - f.getTime() > 864e5;
                        n ? (localStorage.setItem(_, "true"), i(n)) : m || k || localStorage.setItem(y, new Date().toString())
                    }, [l, m, j, k]), (0, r.jsx)(w.P, (0, p.Z)((0, u.Z)({}, e), {
                        isOpen: a,
                        title: (null == l ? void 0 : l.fullName) != null && (null == l ? void 0 : null === (t = l.fullName) || void 0 === t ? void 0 : t.trim()) !== "" ? "".concat(n, ", ").concat(l.fullName, "!") : "".concat(n, "!"),
                        closeModal: Z
                    }))
                },
                j = n(31880),
                k = {
                    flagID: "rn-373-personalization-welcomeback2nd-flex",
                    id: "RN-373",
                    name: "welcome on 2nd session with a modal",
                    treatments: (o = {}, (0, c.Z)(o, l.NM, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, s.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, r.jsx)(i, {
                            initialProps: n
                        })
                    }), (0, c.Z)(o, l.vG, function(e) {
                        var t = e.experiment;
                        (0, s.useEffect)(function() {
                            t.recordImpression()
                        }, []);
                        var n = (0, m.$G)(d.kU9).t,
                            o = {
                                title: n("welcome_back_modal:welcome_title"),
                                content: n("welcome_back_modal:ai_gen_body"),
                                ctaText: n("welcome_back_modal:ai_gen_cta_text"),
                                bannerUrl: "/assets/images/welcome-modal/generate.mp4",
                                closeGAEvent: f.gjE,
                                ctaGAEvent: f.DwD,
                                ctaUrl: "/ai-image-generator",
                                pageSection: f.adA
                            };
                        return (0, r.jsx)(S, (0, u.Z)({}, o))
                    }), (0, c.Z)(o, l._Z, function(e) {
                        var t = e.experiment;
                        (0, s.useEffect)(function() {
                            t.recordImpression()
                        }, []);
                        var n = (0, j.$G)(d.kU9).t,
                            o = {
                                title: n("welcome_back_modal:welcome_title"),
                                content: n("welcome_back_modal:create_body"),
                                ctaText: n("welcome_back_modal:create_cta_text"),
                                bannerUrl: "/assets/images/welcome-modal/create.mp4",
                                closeGAEvent: f.lxu,
                                ctaGAEvent: f.m$N,
                                ctaUrl: "/create/home",
                                pageSection: f.adA
                            };
                        return (0, r.jsx)(S, (0, u.Z)({}, o))
                    }), (0, c.Z)(o, l.Dh, function(e) {
                        var t = e.experiment;
                        (0, s.useEffect)(function() {
                            t.recordImpression()
                        }, []);
                        var n = (0, j.$G)(d.kU9).t,
                            o = {
                                title: n("welcome_back_modal:welcome_title"),
                                content: n("welcome_back_modal:browse_body"),
                                ctaText: n("welcome_back_modal:browse_cta_text"),
                                bannerUrl: "/assets/images/welcome-modal/browse.mp4",
                                closeGAEvent: f.Pl8,
                                ctaGAEvent: f.lbw,
                                ctaUrl: "/",
                                pageSection: f.adA
                            };
                        return (0, r.jsx)(S, (0, u.Z)({}, o))
                    }), o)
                },
                Z = function() {
                    return (0, r.jsx)(r.Fragment, {})
                },
                N = function(e) {
                    return (0, r.jsx)(a.K, {
                        config: k,
                        initialProps: e,
                        Portal: i,
                        SkeletonLoader: Z
                    })
                }
        },
        73377: function(e, t, n) {
            n.d(t, {
                OK: function() {
                    return c
                },
                U_: function() {
                    return l
                },
                gR: function() {
                    return a
                },
                wE: function() {
                    return i
                }
            });
            var o = n(26297),
                r = n(87394),
                a = function(e) {
                    e.sort, e.page;
                    var t = (0, o.Z)(e, ["sort", "page"]);
                    return 0 === Object.keys(t).length ? {} : {
                        filters: Object.entries(t).map(function(e) {
                            var t = (0, r.Z)(e, 2),
                                n = t[0],
                                o = t[1];
                            return {
                                type: n,
                                value: o.join ? o.join(",") : "".concat(o)
                            }
                        })
                    }
                },
                i = function(e) {
                    var t = e.sort,
                        n = void 0 === t ? "" : t;
                    if (!n) return {};
                    var o = n.charAt(0),
                        r = "asc",
                        a = n.slice(1);
                    return "-" === o ? r = "desc" : "+" !== o && (a = n), {
                        sort: [{
                            type: a,
                            value: r
                        }]
                    }
                },
                c = function(e) {
                    var t = e.page;
                    return {
                        pagination: {
                            page: Number(void 0 === t ? 1 : t)
                        }
                    }
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.pageSection,
                        n = e.eventLabel;
                    return t && n ? "".concat(t, ".").concat(n) : ""
                }
        }
    }
]);
//# sourceMappingURL=48333.ecc0852e25ce7adc.js.map