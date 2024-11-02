"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78784, 50138, 51576], {
        27064: function(e, n, i) {
            i.d(n, {
                f: function() {
                    return j
                }
            });
            var t = i(70865),
                o = i(96670),
                r = i(52322),
                a = i(67550),
                s = i(85801),
                l = i(62197),
                c = i(52309),
                d = i(94909),
                h = i(92128),
                u = i(75),
                x = i(25237),
                f = i.n(x),
                v = i(59877),
                m = i(83858),
                g = f()(function() {
                    return Promise.all([i.e(27310), i.e(81503), i.e(11700)]).then(i.bind(i, 41834))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [41834]
                        }
                    },
                    ssr: !1
                }),
                p = function(e) {
                    var n = e.children,
                        i = e.classes,
                        x = e.containerClassName,
                        f = e.containerPadding,
                        m = e.onClose,
                        p = e.onEscapeKeyDown,
                        j = e.open,
                        y = e.description,
                        w = e.title,
                        Z = e.titleVariant,
                        b = e.width,
                        _ = e.height,
                        C = e.maxWidth,
                        z = e.fullScreen,
                        M = e.scroll,
                        N = e.disableStylingBox,
                        S = e.fullWidth,
                        k = (0, d.d)({
                            breakpoint: "sm"
                        }),
                        H = (0, v.$G)(u.w8U).t,
                        I = (0, c.B)(j),
                        V = (0, r.jsxs)(r.Fragment, {
                            children: [m && (0, r.jsx)(a.Z, {
                                position: "absolute",
                                top: "0",
                                right: "0",
                                display: "flex",
                                justifyContent: "flex-end",
                                p: 4,
                                children: (0, r.jsx)(s.Z, {
                                    "aria-label": H("common:actions_close"),
                                    onClick: m,
                                    size: "large",
                                    children: (0, r.jsx)(h.x, {})
                                })
                            }), w && (0, r.jsx)(l.Z, {
                                variant: Z,
                                "data-automation": "DialogTitle",
                                children: (0, r.jsx)(a.Z, {
                                    fontWeight: "fontWeightBold",
                                    children: w
                                })
                            }), n]
                        });
                    return (0, r.jsx)(r.Fragment, {
                        children: I && (0, r.jsx)(g, {
                            classes: i,
                            fullWidth: S,
                            fullScreen: k || z,
                            open: j,
                            onClose: function(e, n) {
                                "escapeKeyDown" === n && void 0 !== p ? p(e) : void 0 !== m && m(e)
                            },
                            maxWidth: C,
                            scroll: M,
                            "aria-labelledby": w,
                            "aria-describedby": y,
                            children: N ? V : (0, r.jsx)(a.Z, (0, o.Z)((0, t.Z)({
                                className: x || "",
                                p: f
                            }, !k && {
                                width: C ? null : b,
                                minHeight: _
                            }), {
                                children: V
                            }))
                        })
                    })
                };
            p.defaultProps = {
                classes: {},
                containerClassName: void 0,
                containerPadding: 7,
                height: 0,
                onClose: void 0,
                onEscapeKeyDown: void 0,
                title: "",
                titleVariant: "h3",
                description: "",
                width: 444,
                maxWidth: null,
                scroll: "paper",
                disableStylingBox: !1,
                fullWidth: !1
            };
            var j = (0, m.a)(p)
        },
        78784: function(e, n, i) {
            i.d(n, {
                X: function() {
                    return L
                }
            });
            var t, o = i(70865),
                r = i(96670),
                a = i(87394),
                s = i(52322),
                l = i(48289),
                c = i(67550),
                d = i(62197),
                h = i(72841),
                u = i(27064),
                x = i(36221),
                f = i(62021),
                v = i(75),
                m = i(59877),
                g = i(2784),
                p = i(31905),
                j = (0, i(8740).ZL)()(function(e) {
                    var n = e.tokens,
                        i = n.font,
                        t = n.spacing,
                        o = n.zIndex,
                        r = n.color;
                    return {
                        loaderContainer: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: 800,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: o["5"],
                            backgroundColor: r.white
                        },
                        flexRoot: {
                            display: "flex",
                            alignItems: "stretch",
                            height: "100%",
                            width: p.Jv
                        },
                        flexChild: {
                            flex: 1,
                            maxWidth: "50%",
                            width: p.Jv / 2,
                            padding: t.s
                        },
                        divider: {
                            height: "auto"
                        },
                        sectionHeading: {
                            fontSize: i.size["3xl"],
                            color: r.gray["onyx-87"],
                            marginBottom: t.m,
                            fontWeight: i.weight.bold,
                            zIndex: o["2"],
                            position: "relative",
                            lineHeight: t.l
                        },
                        sectionSubHeading: {
                            display: "flex",
                            width: "100%",
                            color: r.gray["onyx-60"],
                            marginBottom: t.m,
                            alignItems: "center"
                        },
                        iconContainer: {
                            marginRight: t.m,
                            display: "flex"
                        }
                    }
                }),
                y = function(e) {
                    var n = e.bannerData,
                        i = j().classes,
                        t = (0, m.$G)(v.kJP).t;
                    return (0, s.jsxs)(c.Z, {
                        className: i.flexChild,
                        children: [(0, s.jsx)(d.Z, {
                            className: i.sectionHeading,
                            component: "h1",
                            align: "left",
                            children: t("access_exclusive_features")
                        }), n.map(function(e) {
                            var n = e.icon,
                                o = e.text;
                            return (0, s.jsxs)(d.Z, {
                                className: i.sectionSubHeading,
                                component: "p",
                                variant: "body1",
                                align: "left",
                                children: [(0, s.jsx)("span", {
                                    className: i.iconContainer,
                                    children: n
                                }), t(o)]
                            }, o)
                        })]
                    })
                },
                w = function(e) {
                    var n = e.initialProps;
                    return (0, s.jsx)(y, (0, o.Z)({}, n))
                },
                Z = i(47842),
                b = i(88849),
                _ = i(65359),
                C = i(99769),
                z = i(69026),
                M = i(50138),
                N = i(57613),
                S = [{
                    icon: (0, s.jsx)(_.I, {}),
                    text: "try_before_you_buy"
                }, {
                    icon: (0, s.jsx)(C.r, {}),
                    text: "save_sort_collection"
                }, {
                    icon: (0, s.jsx)(z.Edit, {}),
                    text: "save_designs_re_edit_later"
                }, {
                    icon: (0, s.jsx)(M.History, {}),
                    text: "keep_track_history"
                }, {
                    icon: (0, s.jsx)(N.C, {}),
                    text: "try_ai_generator"
                }],
                k = {
                    flagID: "cvrt-1004-sign-up-modal-copy-changes",
                    id: "CVRT-1004",
                    name: "Sign up modal copy changes",
                    treatments: (t = {}, (0, Z.Z)(t, b.NM, function(e) {
                        var n = e.experiment,
                            i = e.initialProps;
                        return (0, g.useEffect)(function() {
                            n.recordImpression()
                        }, []), (0, s.jsx)(w, {
                            initialProps: i
                        })
                    }), (0, Z.Z)(t, b.vG, function(e) {
                        var n = e.experiment;
                        return (0, g.useEffect)(function() {
                            n.recordImpression()
                        }, []), (0, s.jsx)(y, (0, o.Z)({}, {
                            bannerData: S
                        }))
                    }), t)
                },
                H = function() {
                    return (0, s.jsx)(s.Fragment, {})
                },
                I = function(e) {
                    return (0, s.jsx)(f.K, {
                        config: k,
                        initialProps: e,
                        Portal: w,
                        SkeletonLoader: H
                    })
                },
                V = i(59979),
                P = i(58898),
                B = i(40233),
                W = i(53007),
                D = i(51576),
                R = i(5632),
                E = [{
                    icon: (0, s.jsx)(C.r, {}),
                    text: "save_sort_collection"
                }, {
                    icon: (0, s.jsx)(W.Share, {}),
                    text: "share_collections"
                }, {
                    icon: (0, s.jsx)(_.I, {}),
                    text: "try_before_purchase"
                }, {
                    icon: (0, s.jsx)(D.Visibility, {}),
                    text: "keep_track_history"
                }],
                L = function(e) {
                    var n, i, t, f, p = e.modalIsOpen,
                        y = e.handleClose,
                        w = (0, a.Z)((0, g.useState)(!1), 2),
                        Z = w[0],
                        b = w[1],
                        _ = (0, B.d)(),
                        C = (0, R.useRouter)(),
                        z = C.locale,
                        M = C.asPath,
                        N = (0, m.$G)(v.kJP).t,
                        S = j().classes,
                        k = (0, V.cM)({
                            landing_page: x._I,
                            embedded: !0,
                            preset: "cvrt837",
                            hl: z
                        });
                    return (0, P.Q)().isAuthSuccess && p && (f = new URL(M, null == window ? void 0 : null === (n = window.location) || void 0 === n ? void 0 : n.origin), _({
                        actionName: "convert - signup from modal successful"
                    }), null === (i = window.NREUM) || void 0 === i || null === (t = i.addPageAction) || void 0 === t || t.call(i, "UP3-1623 assign useTryButton url to href", (0, r.Z)((0, o.Z)({}, window.location || {}), {
                        locale: z,
                        relativeURL: M
                    })), window.location.href = f.toString(), y()), (0, s.jsxs)(u.f, {
                        open: p,
                        onClose: y,
                        maxWidth: "lg",
                        width: "lg",
                        themeModeOverride: void 0,
                        children: [(0, s.jsxs)("div", {
                            className: S.flexRoot,
                            children: [(0, s.jsx)(I, {
                                bannerData: E
                            }), (0, s.jsx)(l.Z, {
                                className: S.divider,
                                orientation: "vertical"
                            }), (0, s.jsxs)(c.Z, {
                                className: S.flexChild,
                                children: [(0, s.jsx)(d.Z, {
                                    className: S.sectionHeading,
                                    component: "h1",
                                    align: "left",
                                    pl: 4,
                                    children: N("site-header:sign_up")
                                }), (0, s.jsx)("iframe", {
                                    onLoad: function(e) {
                                        e.preventDefault(), b(!0)
                                    },
                                    style: {
                                        height: 600,
                                        border: "none",
                                        width: "100%",
                                        overflow: "none"
                                    },
                                    title: "SignIn",
                                    src: k,
                                    loading: "eager"
                                })]
                            })]
                        }), !Z && (0, s.jsx)(c.Z, {
                            className: S.loaderContainer,
                            children: (0, s.jsx)(h.Z, {
                                color: "inherit",
                                size: 60,
                                disableShrink: !0
                            })
                        })]
                    })
                }
        },
        83858: function(e, n, i) {
            i.d(n, {
                a: function() {
                    return c
                }
            });
            var t = i(70865),
                o = i(26297),
                r = i(52322),
                a = i(96976),
                s = i(73469),
                l = function(e) {
                    var n = e.children,
                        i = e.themeModeOverride,
                        t = (0, s.i)({
                            themeMode: i
                        }).theme;
                    return (0, r.jsx)(a.Z, {
                        theme: t,
                        children: n
                    })
                },
                c = function(e) {
                    return function(n) {
                        var i = n.themeModeOverride,
                            a = (0, o.Z)(n, ["themeModeOverride"]);
                        return (0, r.jsx)(l, {
                            themeModeOverride: i,
                            children: (0, r.jsx)(e, (0, t.Z)({}, a))
                        })
                    }
                }
        },
        65359: function(e, n, i) {
            i.d(n, {
                I: function() {
                    return a
                }
            });
            var t = i(70865),
                o = i(52322),
                r = (0, i(6620).Z)((0, o.jsx)("path", {
                    d: "M24.933 15.733l-1.867-1.867-5.733 5.733V3.332h-2.667v16.267l-5.733-5.733-1.867 1.867 8.933 8.933 8.933-8.933zM12 30h8v-2.667h-8V30zm-9.333 0h6.667v-2.667H2.667V30zm20-2.667V30h6.667v-2.667h-6.667z"
                }), "DownloadComp.svg"),
                a = function(e) {
                    return (0, o.jsx)(r, (0, t.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        50138: function(e, n, i) {
            i.r(n), i.d(n, {
                History: function() {
                    return a
                }
            });
            var t = i(70865),
                o = i(52322),
                r = (0, i(6620).Z)((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("path", {
                        d: "M17.773 7.627h-2.667v6.92l-4.933 4.813 2 1.867 5.6-5.6v-8zM5.667 16.96H3c.19 2.6 1.165 4.941 2.685 6.823l-.018-.023 1.867-1.867c-1.042-1.365-1.721-3.058-1.865-4.901l-.002-.032zM7.773 26.067a13.1476 13.1476 0 007.275 3.195l.058.005v-2.6c-2.116-.23-3.996-1.1-5.477-2.409l.011.009zM7.8 9.093L5.933 7.226a12.3664 12.3664 0 00-2.93 7.021L3 14.292h2.667c.283-1.981 1.041-3.746 2.154-5.229l-.021.029z"
                    }), (0, o.jsx)("path", {
                        d: "M16.44 2.733c-.034 0-.074-.001-.114-.001-2.186 0-4.241.558-6.031 1.54l.065-.033-.72-1.107-.8 3.733 3.733.8-.773-1.2c1.325-.673 2.889-1.067 4.545-1.067h.1-.005c5.753.177 10.349 4.883 10.349 10.662 0 5.308-3.877 9.711-8.954 10.53l-.061.008v2.667c6.54-.926 11.515-6.486 11.515-13.209 0-7.193-5.696-13.056-12.824-13.324l-.024-.001z"
                    })]
                }), "History.svg"),
                a = function(e) {
                    return (0, o.jsx)(r, (0, t.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        99769: function(e, n, i) {
            i.d(n, {
                r: function() {
                    return c
                }
            });
            var t = i(70865),
                o = i(52322),
                r = i(6620),
                a = i(5007),
                s = i(2784),
                l = (0, r.Z)((0, o.jsx)("path", {
                    d: "M22.667 26.667H1.334V5.334h13.333v4H20v2.667h-5.333c-.045.003-.098.005-.151.005-1.392 0-2.52-1.128-2.52-2.52 0-.053.002-.106.005-.158v.007-1.333h-8v16h18.667c1.867 0 2.667-.667 2.667-2.667v-4h2.667v4c.018.156.028.338.028.521 0 2.673-2.167 4.84-4.84 4.84-.184 0-.365-.01-.543-.03l.022.002zm5.333-12h-2.667V12h-2.667V9.333h2.667V6.666H28v2.667h2.667V12H28z"
                }), "SaveToCollection.svg"),
                c = (0, s.forwardRef)(function(e, n) {
                    return (0, o.jsx)(l, (0, t.Z)({
                        viewBox: "0 0 32 32",
                        ref: n
                    }, e))
                });
            c.displayName = "SaveToCollectionIcon", c.muiName = a.Z.muiName
        },
        51576: function(e, n, i) {
            i.r(n), i.d(n, {
                Visibility: function() {
                    return a
                }
            });
            var t = i(70865),
                o = i(52322),
                r = (0, i(6620).Z)((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("path", {
                        d: "M16 9.333c-3.733 0-6.667 2.933-6.667 6.667s2.933 6.667 6.667 6.667c3.733 0 6.667-2.933 6.667-6.667S19.734 9.333 16 9.333zM16 20c-2.267 0-4-1.733-4-4s1.733-4 4-4 4 1.733 4 4-1.733 4-4 4z"
                    }), (0, o.jsx)("path", {
                        d: "M16 5.333C4.8 5.333 1.333 16 1.333 16 5.733 26.533 16 26.667 16 26.667 26.933 26.667 30.667 16 30.667 16 26.134 5.467 16 5.333 16 5.333zM16 24s-7.067.267-11.733-8.133c0 0 2.933-8 11.733-8 0 0 7.733 0 11.733 8.133 0 .133-3.333 8-11.733 8z"
                    })]
                }), "Visibility.svg"),
                a = function(e) {
                    return (0, o.jsx)(r, (0, t.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        }
    }
]);
//# sourceMappingURL=78784-9d05f7e99d0b8c21.js.map