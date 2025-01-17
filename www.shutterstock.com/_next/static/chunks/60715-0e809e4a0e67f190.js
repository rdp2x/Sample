"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60715, 70100, 57631, 25681, 95693, 68702, 30046, 22939, 67808, 74680, 12112, 21610, 69026, 34116, 87565, 35038, 40094], {
        93087: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return d
                }
            });
            var a = n(70865),
                o = n(96670),
                i = n(26297),
                r = n(52322),
                c = n(47999),
                l = n(59979),
                s = n(75),
                u = n(59877),
                d = function(e) {
                    var t = e.buttonClass,
                        n = e.size,
                        d = e.query,
                        m = (0, i.Z)(e, ["buttonClass", "size", "query"]),
                        h = (0, u.$G)(s.aGO).t,
                        f = (0, l.Ov)(d);
                    return (0, r.jsx)(c.z, (0, o.Z)((0, a.Z)({
                        className: t,
                        component: "a",
                        "data-automation": "loginButton",
                        href: f,
                        labelTrack: "logIn",
                        role: "link",
                        size: n,
                        variant: "outlined",
                        rel: "nofollow"
                    }, m), {
                        children: h("auth:login_form_log_in")
                    }))
                };
            d.defaultProps = {
                buttonClass: "",
                size: "",
                query: void 0
            }
        },
        14568: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return T
                }
            });
            var a = n(70865),
                o = n(96670),
                i = n(87394),
                r = n(52322),
                c = n(69089),
                l = n(67550),
                s = n(85801),
                u = n(72841),
                d = n(31905),
                m = n(58898),
                h = n(40233),
                f = n(92128),
                p = n(5632),
                v = n(2784),
                g = n(8740),
                b = "cvrt839",
                k = n(62197),
                y = n(36221),
                x = n(59979),
                Z = n(75),
                _ = n(59877),
                L = n(38398),
                B = function(e) {
                    var t = e.customAttributes,
                        n = e.pathname;
                    return (0, L.format)({
                        pathname: n,
                        query: (0, a.Z)({}, t)
                    })
                },
                w = (0, g.ZL)()(function(e) {
                    var t = e.tokens,
                        n = t.color,
                        a = t.font,
                        o = t.spacing,
                        i = t.zIndex;
                    return {
                        loginHeading: {
                            fontSize: a.size["3xl"],
                            color: n.gray["onyx-87"],
                            marginBottom: o.m,
                            fontWeight: a.weight.bold,
                            zIndex: i["2"],
                            position: "relative",
                            marginTop: o.s
                        }
                    }
                }),
                j = function(e) {
                    var t = e.title,
                        n = e.locale,
                        a = e.onIframeLoad,
                        o = w().classes,
                        i = (0, _.$G)(Z.kJP).t,
                        c = null != t ? t : i("login_or_signup"),
                        l = B({
                            pathname: y._I,
                            customAttributes: {
                                preset: b
                            }
                        }),
                        s = (0, x.Ov)({
                            embedded: !0,
                            preset: b,
                            landing_page: l,
                            hl: n
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(k.Z, {
                            className: o.loginHeading,
                            component: "h1",
                            align: "left",
                            pl: 4,
                            children: c
                        }), (0, r.jsx)("iframe", {
                            style: {
                                height: 600,
                                border: "none",
                                width: "100%",
                                overflow: "none"
                            },
                            onLoad: a,
                            title: "Login",
                            src: s,
                            loading: "eager",
                            id: "login-iframe"
                        })]
                    })
                },
                C = (0, g.ZL)()(function(e) {
                    var t = e.tokens,
                        n = t.color,
                        a = t.font,
                        o = t.spacing;
                    return {
                        container: {
                            flex: 1,
                            maxWidth: "50%",
                            width: d.Jv / 2,
                            padding: o.l
                        },
                        sectionHeading: {
                            fontSize: a.size["3xl"],
                            color: n.white,
                            marginBottom: o.m,
                            fontWeight: a.weight.bold,
                            lineHeight: o.l
                        },
                        sectionSubHeading: {
                            marginBottom: o.m,
                            color: n.white
                        }
                    }
                }),
                M = function() {
                    var e = C().classes,
                        t = (0, _.$G)(Z.kJP).t;
                    return (0, r.jsx)(l.Z, {
                        className: e.container,
                        style: {
                            background: 'no-repeat center/cover url("/assets/images/login_marketing_content_banner.jpg")'
                        },
                        children: (0, r.jsxs)(l.Z, {
                            mt: 10,
                            p: 3,
                            children: [(0, r.jsx)(k.Z, {
                                className: e.sectionHeading,
                                component: "h1",
                                align: "center",
                                children: t("auth:login_form_marketing_title")
                            }), (0, r.jsx)(k.Z, {
                                className: e.sectionSubHeading,
                                component: "p",
                                align: "center",
                                children: t("auth:login_form_marketing_sub_title")
                            })]
                        })
                    })
                },
                A = (0, g.ZL)()(function(e) {
                    var t = e.tokens,
                        n = t.spacing,
                        a = t.color,
                        o = t.zIndex;
                    return {
                        flexRoot: {
                            display: "flex",
                            alignItems: "stretch",
                            height: "100%",
                            width: "100%"
                        },
                        flexChild: {
                            flex: 1,
                            maxWidth: "50%",
                            width: d.Jv / 2,
                            padding: n.l
                        },
                        closeButtonContainer: {
                            position: "absolute",
                            top: n.xs,
                            right: n.xs
                        },
                        loadingContainer: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: d.Jv,
                            height: 760,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: o["5"],
                            backgroundColor: a.white
                        }
                    }
                }),
                T = function(e) {
                    var t, n, d, g = e.loginButtonComponent,
                        k = e.loginButtonProps,
                        y = e.marketingComponent,
                        x = e.children,
                        Z = A().classes,
                        _ = (0, i.Z)((0, v.useState)(!1), 2),
                        L = _[0],
                        B = _[1],
                        w = (0, i.Z)((0, v.useState)(!1), 2),
                        C = w[0],
                        T = w[1],
                        F = (0, h.d)(),
                        I = (0, p.useRouter)(),
                        S = I.asPath,
                        N = I.locale,
                        V = function() {
                            T(!1)
                        };
                    return (0, m.Q)({
                        preset: b
                    }).isAuthSuccess && C && (n = "".concat("en" !== N ? "/".concat(N) : "").concat(S), d = new URL(n, null == window ? void 0 : null === (t = window.location) || void 0 === t ? void 0 : t.origin), F({
                        actionName: "UP3-1623 assign handleOnLoginSuccess url to href",
                        customAttributes: {
                            relativeURL: n
                        }
                    }), window.location.href = d.toString(), V()), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(g, (0, o.Z)((0, a.Z)({
                            onClick: function(e) {
                                F({
                                    actionName: "convert - login modal opened"
                                }), e.preventDefault(), T(!0)
                            }
                        }, k), {
                            children: x
                        })), (0, r.jsx)(c.Z, {
                            open: C,
                            onClose: V,
                            maxWidth: "lg",
                            children: (0, r.jsxs)("div", {
                                className: Z.flexRoot,
                                children: [(0, r.jsx)(void 0 === y ? M : y, {}), (0, r.jsxs)(l.Z, {
                                    className: Z.flexChild,
                                    children: [(0, r.jsx)(l.Z, {
                                        className: Z.closeButtonContainer,
                                        children: (0, r.jsx)(s.Z, {
                                            onClick: V,
                                            size: "large",
                                            children: (0, r.jsx)(f.x, {})
                                        })
                                    }), (0, r.jsx)(j, {
                                        locale: N,
                                        onIframeLoad: function(e) {
                                            e.preventDefault(), B(!0)
                                        }
                                    })]
                                }), !L && (0, r.jsx)(l.Z, {
                                    className: Z.loadingContainer,
                                    children: (0, r.jsx)(u.Z, {
                                        color: "inherit",
                                        size: 60,
                                        disableShrink: !0
                                    })
                                })]
                            })
                        })]
                    })
                }
        },
        65072: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return d
                }
            });
            var a = n(70865),
                o = n(96670),
                i = n(26297),
                r = n(52322),
                c = n(47999),
                l = n(59979),
                s = n(75),
                u = n(59877),
                d = function(e) {
                    var t = e.buttonClass,
                        n = e.color,
                        d = e.size,
                        m = e.query,
                        h = (0, i.Z)(e, ["buttonClass", "color", "size", "query"]),
                        f = (0, u.$G)(s.aGO).t,
                        p = (0, l.cM)(m);
                    return (0, r.jsx)(c.z, (0, o.Z)((0, a.Z)({
                        role: "link",
                        size: d,
                        href: p,
                        component: "a",
                        className: t,
                        "data-automation": "signupButton",
                        variant: "contained",
                        rel: "nofollow",
                        labelTrack: "signUp"
                    }, n && {
                        color: n
                    }, h), {
                        children: f("site-header:sign_up")
                    }))
                };
            d.defaultProps = {
                buttonClass: "",
                color: "",
                query: void 0,
                size: ""
            }
        },
        61776: function(e, t, n) {
            n.d(t, {
                TR: function() {
                    return d
                }
            });
            var a = n(47842),
                o = n(52322),
                i = n(83249),
                r = n(85129),
                c = n(9823),
                l = n(56024),
                s = n(2784),
                u = (0, n(8740).ZL)()(function(e) {
                    var t, n = e.breakpoints;
                    return {
                        root: {
                            height: "100%",
                            width: "auto",
                            margin: 0,
                            padding: 0,
                            "&:hover": {
                                boxShadow: "none",
                                backgroundColor: "transparent"
                            }
                        },
                        mobileLogo: (t = {
                            height: 20,
                            display: "flex"
                        }, (0, a.Z)(t, n.up("lg"), {
                            display: "none"
                        }), (0, a.Z)(t, n.up("md"), {
                            height: 24
                        }), t),
                        desktopLogo: (0, a.Z)({
                            height: 24,
                            display: "flex"
                        }, n.down("lg"), {
                            display: "none"
                        }),
                        sstkLogo: (0, a.Z)({
                            height: 20,
                            display: "flex",
                            minWidth: "var(--logoMinWidthMobile)"
                        }, n.up("lg"), {
                            height: 24,
                            minWidth: "var(--logoMinWidthDesktop)"
                        })
                    }
                }),
                d = (0, s.memo)(function(e) {
                    var t = e.buttonClass,
                        n = e.overlayTopNavigation,
                        a = (0, c.D)(),
                        s = a.isBrandSstk,
                        d = a.logo || {},
                        m = d.alt,
                        h = d.src,
                        f = void 0 === h ? {} : h,
                        p = f.desktop,
                        v = f.mobile,
                        g = u(),
                        b = g.classes,
                        k = g.cx;
                    return s && n ? (0, o.jsx)(i.Z, {
                        "aria-label": "Shutterstock logo",
                        classes: {
                            root: k(b.root, t)
                        },
                        disableRipple: !0,
                        children: (0, o.jsx)(l.DQ, {
                            viewBox: p.viewBox,
                            className: b.sstkLogo,
                            alt: m,
                            style: {
                                "--logoMinWidthDesktop": "".concat(p.minWidth, "px"),
                                "--logoMinWidthMobile": "".concat(v.minWidth, "px")
                            }
                        })
                    }) : s ? (0, o.jsx)(i.Z, {
                        "aria-label": "Shutterstock logo",
                        classes: {
                            root: k(b.root, t)
                        },
                        disableRipple: !0,
                        children: (0, o.jsx)(l.HO, {
                            viewBox: p.viewBox,
                            className: b.sstkLogo,
                            alt: m,
                            style: {
                                "--logoMinWidthDesktop": "".concat(p.minWidth, "px"),
                                "--logoMinWidthMobile": "".concat(v.minWidth, "px")
                            }
                        })
                    }) : (n && (p.src = "".concat(r.aK, "/shutterstock-ent-logo-neg.svg"), v.src = "".concat(r.aK, "/shutterstock-ent-logo-mobile-neg.svg")), (0, o.jsxs)(i.Z, {
                        "aria-label": "Shutterstock logo",
                        classes: {
                            root: k(b.root, t)
                        },
                        disableRipple: !0,
                        children: [(0, o.jsx)("img", {
                            src: p.src,
                            className: b.desktopLogo,
                            alt: m,
                            style: {
                                minWidth: p.minWidth
                            },
                            width: 162,
                            height: 24
                        }), (0, o.jsx)("img", {
                            src: v.src,
                            className: b.mobileLogo,
                            alt: m,
                            style: {
                                minWidth: v.minWidth
                            },
                            width: 135,
                            height: 20
                        })]
                    }))
                });
            d.displayName = "Logo", d.defaultProps = {
                buttonClass: null,
                overlayTopNavigation: !1
            }
        },
        41519: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return i
                },
                j: function() {
                    return o
                }
            });
            var a = n(2784),
                o = (0, a.createContext)(void 0),
                i = function() {
                    return (0, a.useContext)(o)
                }
        },
        95299: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return d
                }
            });
            var a = n(52322),
                o = n(47746),
                i = n(82182),
                r = n(91609),
                c = n(8740),
                l = n(41519),
                s = (0, c.ZL)()(function(e, t) {
                    var n = e.tokens.spacing;
                    return {
                        container: {
                            backgroundColor: t.backgroundColor,
                            padding: "0 ".concat(n.m)
                        }
                    }
                }),
                u = function(e) {
                    var t = e.nthChild,
                        n = e.index,
                        a = e.isBlackMode,
                        o = e.theme;
                    if (a) return o.palette.common.black;
                    if (o.themeName === r.iA) return o.palette.background.default;
                    var c = n % 2 == 0;
                    return t === i.Qs && c || t === i.zr && !c ? o.palette.background.default : o.palette.skeleton
                },
                d = function(e) {
                    var t = e.children,
                        n = e.className,
                        i = e.index,
                        r = e.isBlackMode,
                        c = u({
                            nthChild: e.nthChild,
                            index: i,
                            isBlackMode: r,
                            theme: (0, o.Z)()
                        }),
                        d = s({
                            backgroundColor: c
                        }),
                        m = d.classes,
                        h = d.cx;
                    return (0, a.jsx)(l.j.Provider, {
                        value: c,
                        children: (0, a.jsx)("div", {
                            className: h(m.container, n),
                            "data-optimize": "BackgroundContainer-".concat(i),
                            children: t
                        })
                    })
                };
            d.defaultProps = {
                backgroundColor: void 0,
                className: "",
                isBlackMode: !1,
                nthChild: i.Qs
            }
        },
        16113: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return s
                }
            });
            var a = n(52322),
                o = n(96976),
                i = n(82182),
                r = n(91609),
                c = n(73469),
                l = n(95299),
                s = function(e) {
                    var t = e.children,
                        n = e.nthChild,
                        i = e.className,
                        s = e.isBlackMode,
                        u = (0, c.i)({
                            themeMode: r.oc.DARK
                        }).theme;
                    return (0, a.jsx)(o.Z, {
                        theme: u,
                        children: (0, a.jsx)(l.H, {
                            className: i,
                            isBlackMode: s,
                            nthChild: n,
                            children: t
                        })
                    })
                };
            s.defaultProps = {
                className: "",
                isBlackMode: !1,
                nthChild: i.zr
            }
        },
        10821: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return l
                }
            });
            var a = n(52322),
                o = n(83249),
                i = n(9390),
                r = n(75),
                c = n(59877),
                l = function(e) {
                    var t = e.buttonClass,
                        n = e.size,
                        l = (0, c.$G)(r.aGO).t;
                    return (0, a.jsx)(o.Z, {
                        className: t,
                        color: "primary",
                        component: i.r,
                        "data-automation": "requestDemoButton",
                        href: "/business/pricing",
                        isAbsoluteUrl: !0,
                        isCoreUrl: !0,
                        nocolorinherit: !0,
                        role: "link",
                        size: n,
                        variant: "contained",
                        children: l("site-header:premier_request_demo")
                    })
                }
        },
        23594: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return W
                }
            });
            var a = n(47842),
                o = n(70865),
                i = n(87394),
                r = n(52322),
                c = n(21647),
                l = n(96976),
                s = n(16113),
                u = n(66358),
                d = n(81150),
                m = n(5632),
                h = function() {
                    var e = (0, m.useRouter)();
                    return (0, d.L2)(e.pathname)
                },
                f = n(31666),
                p = n(776),
                v = n(48417),
                g = n(3972),
                b = n(75),
                k = n(59877),
                y = n(67550),
                x = n(9390),
                Z = n(70828),
                _ = "".concat(u.kxJ, ".").concat(u.UhU),
                L = function(e) {
                    var t = e.palette,
                        n = e.spacing;
                    return {
                        background: t.skeleton,
                        p: n(4, 5),
                        textAlign: "center",
                        a: {
                            display: "inline-flex",
                            alignItems: "center",
                            color: t.info.main,
                            "&:hover": {
                                color: t.text.primary
                            }
                        },
                        svg: {
                            fontSize: "inherit",
                            mb: n(1)
                        }
                    }
                },
                B = function(e) {
                    var t = e.bannerText,
                        n = e.feedbackText,
                        a = e.feedbackUrl;
                    return (0, r.jsxs)(y.Z, {
                        sx: L,
                        children: [t, "\xa0", (0, r.jsxs)(x.r, {
                            href: a,
                            rel: "noreferrer noopener",
                            target: "_blank",
                            clickAnalyticsLabel: _,
                            children: [n, "\xa0", (0, r.jsx)(Z._, {})]
                        })]
                    })
                },
                w = function() {
                    var e = (0, m.useRouter)().query,
                        t = e.prompt,
                        n = e.id,
                        a = (0, k.$G)(b.FJM).t,
                        o = (0, g.KI)({
                            prompt: (0, v.DO)({
                                term: t || ""
                            }).term,
                            trackingId: n
                        });
                    return (0, r.jsx)(B, {
                        bannerText: a("generate:feedback_banner_text"),
                        feedbackText: a("feedback:links_feedback_text_search"),
                        feedbackUrl: o
                    })
                },
                j = n(8563),
                C = n(2784),
                M = j.bv.PRODUCT_IMPACTED,
                A = j.bv.SEARCH_TERM,
                T = function() {
                    var e = (0, k.$G)(b.Ht6),
                        t = e.t,
                        n = e.ready,
                        a = {
                            feedbackTitle: t("feedback:links_feedback_title_search"),
                            feedbackText: t("feedback:links_feedback_text_search")
                        },
                        o = (0, f.d)(),
                        i = o.assetType,
                        c = o.searchTerm,
                        l = (0, C.useMemo)(function() {
                            var e = new URL(j.uf);
                            return e.searchParams.append(A, c), e.searchParams.append(M, j.f0[i]), e.href
                        }, [c, i]);
                    return n ? (0, r.jsx)(B, {
                        bannerText: a.feedbackTitle,
                        feedbackText: a.feedbackText,
                        feedbackUrl: l
                    }) : null
                },
                F = function() {
                    var e = h(),
                        t = (0, f.t)();
                    return e || t ? (0, r.jsx)(p.Mp, {
                        value: u.kxJ,
                        children: (0, r.jsx)(t ? T : w, {})
                    }) : null
                },
                I = n(46452),
                S = n(91609),
                N = n(23490),
                V = n(53881),
                z = n(73469),
                D = n(75298),
                H = n(43110),
                P = n(27764),
                R = n(25237),
                E = n.n(R),
                O = (0, n(8740).ZL)()(function(e) {
                    var t, n = e.breakpoints;
                    return {
                        footer: (0, a.Z)({
                            padding: "20px"
                        }, n.down("md"), {
                            marginBottom: I.e$
                        }),
                        skeleton: (t = {}, (0, a.Z)(t, n.down("md"), {
                            height: "464px"
                        }), (0, a.Z)(t, n.up("md"), {
                            height: "563px"
                        }), t)
                    }
                }),
                q = function() {
                    var e = O().classes;
                    return (0, r.jsx)(s.I, {
                        className: e.footer,
                        children: (0, r.jsx)(c.Z, {
                            width: "100%",
                            className: e.skeleton,
                            variant: "rounded"
                        })
                    })
                },
                G = E()(function() {
                    return Promise.all([n.e(27310), n.e(41075), n.e(31e3), n.e(67121), n.e(26960), n.e(19515)]).then(n.bind(n, 85635)).then(function(e) {
                        return e.SiteFooter
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85635]
                        }
                    },
                    ssr: !0,
                    loading: q
                }),
                W = function(e) {
                    var t = (0, z.i)({
                            themeMode: S.oc.DARK
                        }).theme,
                        n = (0, N.N)().isBot,
                        a = (0, V.n)().isMobileServer,
                        c = (0, i.Z)((0, D.I)({
                            triggerOnce: !0,
                            rootMargin: "0px 0px ".concat(a ? "100px" : "200px", " 0px")
                        }), 2),
                        s = c[0],
                        u = c[1],
                        d = (0, m.useRouter)(),
                        h = (0, H.B)();
                    return (0, P.s4)(d) && h ? null : (0, r.jsxs)("div", {
                        ref: u,
                        children: [(0, r.jsx)(F, {}), n || s ? (0, r.jsx)(l.Z, {
                            theme: t,
                            children: (0, r.jsx)(G, (0, o.Z)({}, e))
                        }) : (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(q, {})
                        })]
                    })
                }
        },
        6020: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return s
                }
            });
            var a = n(52322),
                o = n(35862),
                i = n(9390),
                r = n(59481),
                c = n(3081),
                l = n(35038),
                s = function(e) {
                    var t = e.cartIconButtonLabel,
                        n = e.cartItemsQuantity,
                        c = e.classesProps,
                        s = e.cx,
                        u = e.iconButtonRootClass,
                        d = e.isDisabled,
                        m = e.href;
                    return (0, a.jsx)(o.Z, {
                        className: c.dynamicMargin,
                        badgeContent: n,
                        color: "primary",
                        overlap: "circular",
                        componentsProps: {
                            badge: {
                                "data-automation": "siteHeader_cartButton_badge"
                            }
                        },
                        children: (0, a.jsx)(r.h, {
                            "aria-label": t,
                            color: "primary",
                            href: m,
                            component: i.r,
                            classes: {
                                root: s(c.root, u)
                            },
                            "data-automation": "siteHeader_cartButton",
                            disabled: d,
                            size: "large",
                            labelTrack: "cart",
                            children: (0, a.jsx)(l.ShoppingCart, {})
                        })
                    })
                };
            s.defaultProps = {
                cartIconButtonLabel: "",
                cartItemsQuantity: 0,
                classesProps: {},
                cx: function() {},
                href: c.Is,
                iconButtonRootClass: "",
                isDisabled: !1
            }
        },
        96062: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return i
                }
            });
            var a = n(70865),
                o = n(58287),
                i = (0, n(8740).ZL)()(function(e) {
                    var t = e.spacing,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.cartItemsQuantity,
                        r = void 0 === i ? "" : i,
                        c = r.toString().length;
                    return {
                        dynamicMargin: (0, a.Z)({}, r && {
                            marginRight: "".concat((0, o.C)(t(3)) * c, "px")
                        }),
                        root: {
                            padding: t(3)
                        }
                    }
                })
        },
        41895: function(e, t, n) {
            n.d(t, {
                BH: function() {
                    return o
                },
                Rk: function() {
                    return a
                }
            });
            var a = [{
                    to: "/video/search/animals-wildlife",
                    key: "animals-wildlife",
                    label: "common:filters_category_animals_wildlife"
                }, {
                    to: "/video/search/buildings-landmarks",
                    key: "buildings-landmarks",
                    label: "common:filters_category_buildings_landmarks"
                }, {
                    to: "/video/search/backgrounds-textures",
                    key: "backgrounds-textures",
                    label: "common:filters_category_backgrounds_textures"
                }, {
                    to: "/video/search/business-finance",
                    key: "business-finance",
                    label: "common:filters_category_business_finance"
                }, {
                    to: "/video/search/education",
                    key: "education",
                    label: "common:filters_category_education"
                }, {
                    to: "/video/search/food-drink",
                    key: "food-and-drink",
                    label: "common:filters_category_food_and_drink"
                }, {
                    to: "/video/search/health-care",
                    key: "health-care",
                    label: "common:filters_category_health_care"
                }, {
                    to: "/video/search/holidays",
                    key: "holidays",
                    label: "common:filters_category_holidays"
                }, {
                    to: "/video/search/objects",
                    key: "objects",
                    label: "common:filters_category_objects"
                }, {
                    to: "/video/search/industrial",
                    key: "industrial",
                    label: "common:filters_category_industrial"
                }, {
                    to: "/video/search/art",
                    key: "art",
                    label: "common:filters_category_art"
                }, {
                    to: "/video/search/nature",
                    key: "nature",
                    label: "common:filters_category_nature"
                }, {
                    to: "/video/search/people",
                    key: "people",
                    label: "common:filters_category_people"
                }, {
                    to: "/video/search/religion",
                    key: "religion",
                    label: "common:filters_category_religion"
                }, {
                    to: "/video/search/science",
                    key: "science",
                    label: "common:filters_category_science"
                }, {
                    to: "/video/search/technology",
                    key: "technology",
                    label: "common:filters_category_technology"
                }, {
                    to: "/video/search/signs-symbols",
                    key: "signs-symbols",
                    label: "common:filters_category_signs_symbols"
                }, {
                    to: "/video/search/sports-recreation",
                    key: "sports-recreation",
                    label: "common:filters_category_sports_recreation"
                }, {
                    to: "/video/search/transportation",
                    key: "transportation",
                    label: "common:filters_category_transportation"
                }, {
                    to: "/video/search/editorial",
                    key: "editorial",
                    label: "common:filters_category_editorial"
                }],
                o = [{
                    id: "26",
                    to: "/category/abstract",
                    key: "abstract",
                    label: "common:filters_category_abstract",
                    value: "Abstract"
                }, {
                    id: "1",
                    to: "/category/animals-wildlife",
                    key: "animals_wildlife",
                    label: "common:filters_category_animals_wildlife",
                    value: "Animals/Wildlife"
                }, {
                    id: "11",
                    to: "/category/the-arts",
                    key: "the_arts",
                    label: "common:filters_category_the_arts",
                    value: "The Arts"
                }, {
                    id: "3",
                    to: "/category/backgrounds-textures",
                    key: "backgrounds_textures",
                    label: "common:filters_category_backgrounds_textures",
                    value: "Backgrounds/Textures"
                }, {
                    id: "27",
                    to: "/category/beauty-fashion",
                    key: "beauty_fashion",
                    label: "common:filters_category_beauty_fashion",
                    value: "Beauty/Fashion"
                }, {
                    id: "2",
                    to: "/category/buildings-landmarks",
                    key: "buildings_landmarks",
                    label: "common:filters_category_buildings_landmarks",
                    value: "Buildings/Landmarks"
                }, {
                    id: "4",
                    to: "/category/business-finance",
                    key: "business_finance",
                    label: "common:filters_category_business_finance",
                    value: "Business/Finance"
                }, {
                    id: "31",
                    to: "/category/celebrities",
                    key: "celebrities",
                    label: "common:filters_category_celebrities",
                    value: "Celebrities"
                }, {
                    id: "28",
                    to: "/category/editorial",
                    key: "editorial",
                    label: "common:filters_category_editorial",
                    value: "Editorial"
                }, {
                    id: "5",
                    to: "/category/education",
                    key: "education",
                    label: "common:filters_category_education",
                    value: "Education"
                }, {
                    id: "6",
                    to: "/category/food-and-drink",
                    key: "food_and_drink",
                    label: "common:filters_category_food_and_drink",
                    value: "Food and Drink"
                }, {
                    id: "7",
                    to: "/category/healthcare-medical",
                    key: "healthcare_medical",
                    label: "common:filters_category_healthcare_medical",
                    value: "Healthcare/Medical"
                }, {
                    id: "8",
                    to: "/category/holidays",
                    key: "holidays",
                    label: "common:filters_category_holidays",
                    value: "Holidays"
                }, {
                    id: "23",
                    to: "/category/illustrations-clip-art",
                    key: "illustrations_clip_art",
                    label: "common:filters_category_illustrations_clip_art",
                    value: "Illustrations/Clip-Art"
                }, {
                    id: "10",
                    to: "/category/industrial",
                    key: "industrial",
                    label: "common:filters_category_industrial",
                    value: "Industrial"
                }, {
                    id: "21",
                    to: "/category/interiors",
                    key: "interiors",
                    label: "common:filters_category_interiors",
                    value: "Interiors"
                }, {
                    id: "22",
                    to: "/category/miscellaneous",
                    key: "miscellaneous",
                    label: "common:filters_category_miscellaneous",
                    value: "Miscellaneous"
                }, {
                    id: "12",
                    to: "/category/nature",
                    key: "nature",
                    label: "common:filters_category_nature",
                    value: "Nature"
                }, {
                    id: "9",
                    to: "/category/objects",
                    key: "objects",
                    label: "common:filters_category_objects",
                    value: "Objects"
                }, {
                    id: "25",
                    to: "/category/parks-outdoor",
                    key: "parks_outdoor",
                    label: "common:filters_category_parks_outdoor",
                    value: "Parks/Outdoor"
                }, {
                    id: "13",
                    to: "/category/people",
                    key: "people",
                    label: "common:filters_category_people",
                    value: "People"
                }, {
                    id: "14",
                    to: "/category/religion",
                    key: "religion",
                    label: "common:filters_category_religion",
                    value: "Religion"
                }, {
                    id: "15",
                    to: "/category/science",
                    key: "science",
                    label: "common:filters_category_science",
                    value: "Science"
                }, {
                    id: "17",
                    to: "/category/signs-symbols",
                    key: "signs_symbols",
                    label: "common:filters_category_signs_symbols",
                    value: "Signs/Symbols"
                }, {
                    id: "18",
                    to: "/category/sports-recreation",
                    key: "sports_recreation",
                    label: "common:filters_category_sports_recreation",
                    value: "Sports/Recreation"
                }, {
                    id: "16",
                    to: "/category/technology",
                    key: "technology",
                    label: "common:filters_category_technology",
                    value: "Technology"
                }, {
                    id: "0",
                    to: "/category/transportation",
                    key: "transportation",
                    label: "common:filters_category_transportation",
                    value: "Transportation"
                }, {
                    id: "29",
                    to: "/category/vectors",
                    key: "vectors",
                    label: "common:filters_category_vectors",
                    value: "Vectors"
                }, {
                    id: "24",
                    to: "/category/vintage",
                    key: "vintage",
                    label: "common:filters_category_vintage",
                    value: "Vintage"
                }]
        },
        5129: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return i
                }
            });
            var a = n(47842),
                o = n(13011),
                i = (0, n(8740).ZL)({
                    uniqId: "SiteHeader"
                })(function(e, t, n) {
                    var i = e.breakpoints,
                        r = e.palette,
                        c = e.zIndex,
                        l = e.tokens,
                        s = l.color,
                        u = l.fontSize,
                        d = l.fontWeight,
                        m = l.spacing;
                    return {
                        gridItemContainer: {
                            display: "flex",
                            alignItems: "center"
                        },
                        iconButtonRoot: {
                            marginLeft: m.xs,
                            color: r.text.info,
                            "&&": {
                                padding: m.s
                            }
                        },
                        iconButtonLighten: {
                            color: r.text.secondary
                        },
                        navPrimary: {
                            fontSize: u.xs,
                            textTransform: "uppercase",
                            color: r.text.secondary,
                            "&:hover": {
                                background: "none",
                                color: r.text.primary
                            }
                        },
                        navPrimaryLeftSpace: {
                            marginLeft: m.l
                        },
                        navSpacing: {
                            display: "flex",
                            marginLeft: m.s,
                            whiteSpace: "nowrap"
                        },
                        pointerEventsAuto: {
                            pointerEvents: "auto"
                        },
                        pointerEventsNone: {
                            pointerEvents: "none"
                        },
                        root: (0, a.Z)({
                            zIndex: c.appBar,
                            marginBottom: m.s,
                            paddingTop: m.s,
                            paddingRight: m.base,
                            paddingBottom: m.s,
                            paddingLeft: m.base,
                            width: "auto"
                        }, i.up("sm"), {
                            paddingRight: m.m,
                            paddingLeft: m.m
                        }),
                        noBottomSpacing: {
                            marginBottom: 0
                        },
                        enterpriseHeader: {
                            borderWidth: o.mD,
                            borderStyle: "solid",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                            borderImageWidth: 1,
                            borderImageSlice: 1,
                            borderImageSource: "linear-gradient(to right, ".concat(s.goldGradient.from, ", ").concat(s.goldGradient.to, ")"),
                            marginBottom: m.m
                        },
                        eCommHeader: {
                            borderStyle: "solid",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                            borderWidth: o.mD,
                            borderImageWidth: 1,
                            borderImageSlice: 1,
                            color: "".concat(s.gray["onyx-12"]),
                            marginBottom: m.m
                        },
                        container: {
                            height: o.Mz,
                            flexWrap: "nowrap"
                        },
                        logo: {
                            display: "flex",
                            marginRight: m.s
                        },
                        disabled: {
                            "&&": {
                                cursor: "default"
                            }
                        },
                        bold: {
                            fontWeight: d.bold
                        },
                        endIcon: {
                            marginLeft: m.xs,
                            marginRight: "-".concat(m.s),
                            "&& > svg": {
                                fontSize: u.s
                            }
                        },
                        primaryNavLinkContainer: (0, a.Z)({
                            overflow: "hidden",
                            flexGrow: 1
                        }, "& ".concat(n.primaryNavLinks, " & ").concat(n.secondaryNavLinks), {
                            flexWrap: "nowrap",
                            alignItems: "center"
                        }),
                        primaryNavLinks: {
                            display: "flex"
                        },
                        sstkPrimaryNavLinks: (0, a.Z)({
                            fontSize: "calc(15px * 0.867)",
                            transform: "translateY(1px)"
                        }, "& ".concat(n.navPrimary), {
                            fontSize: "inherit"
                        }),
                        secondaryNavLinks: {
                            display: "flex"
                        },
                        sstkSecondaryNavLinks: {
                            marginLeft: "auto",
                            "& a": {
                                textTransform: "none"
                            }
                        },
                        hideLgDown: {
                            display: "flex"
                        },
                        hideMdDown: (0, a.Z)({
                            display: "flex"
                        }, i.down("md"), {
                            display: "none"
                        }),
                        hideLgCustomDown: {
                            display: "flex"
                        },
                        hideLgCustomUp: {
                            display: "flex"
                        },
                        menuButton: {
                            marginRight: "-".concat(m.s)
                        },
                        menuButtonLight: {
                            borderTopWidth: 1,
                            borderColor: "transparent",
                            borderStyle: "solid",
                            color: s.gray["onyx-60"],
                            fontWeight: "normal",
                            fontSize: u.xs,
                            "&:hover": {
                                color: s.gray["onyx-87"],
                                backgroundColor: "transparent"
                            }
                        },
                        divider: {
                            height: m.m,
                            marginLeft: m.s,
                            marginTop: m.s
                        },
                        iconOnlyProfileIcon: {
                            "& > button": {
                                minWidth: 0,
                                paddingRight: 0,
                                paddingLeft: 0
                            }
                        },
                        overflowMenuButton: {
                            marginRight: m["3xl"],
                            color: s["black-50"]
                        },
                        primaryNavItem: {
                            display: "flex"
                        },
                        hidePrimaryNavItem: {
                            opacity: 0,
                            visibility: "hidden"
                        },
                        showPrimaryNavItem: {
                            opacity: 1,
                            visibility: "visible",
                            display: "flex"
                        },
                        overflowButtonDivider: {
                            height: m.m,
                            marginLeft: m.s,
                            marginTop: "12px"
                        }
                    }
                })
        },
        88127: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return c
                }
            });
            var a = n(52322),
                o = n(62197),
                i = n(2784),
                r = (0, n(8740).ZL)()(function(e) {
                    var t = e.tokens,
                        n = t.spacing,
                        a = t.font;
                    return {
                        root: {
                            padding: "0 ".concat(n.xs),
                            fontSize: a.size.xs,
                            fontFamily: "".concat(a.family.primary, ", Arial"),
                            lineHeight: a.lineHeight.l,
                            width: "100%",
                            textAlign: "center"
                        }
                    }
                }),
                c = (0, i.memo)(function(e) {
                    var t = e.text,
                        n = r().classes;
                    return (0, a.jsx)(o.Z, {
                        className: n.root,
                        children: t
                    })
                });
            c.displayName = "TabLabel"
        },
        46452: function(e, t, n) {
            n.d(t, {
                CD: function() {
                    return c
                },
                J8: function() {
                    return i
                },
                WT: function() {
                    return o
                },
                e$: function() {
                    return a
                },
                ub: function() {
                    return r
                }
            });
            var a = 65,
                o = 70,
                i = 50,
                r = "utility-bar",
                c = "utility-bar-global-styles"
        },
        36221: function(e, t, n) {
            n.d(t, {
                C8: function() {
                    return u
                },
                GG: function() {
                    return a
                },
                TT: function() {
                    return r
                },
                _I: function() {
                    return c
                },
                jK: function() {
                    return s
                },
                o1: function() {
                    return o
                },
                sR: function() {
                    return l
                },
                up: function() {
                    return i
                }
            });
            var a = "profile",
                o = "/users/current/email",
                i = "/credentials/change",
                r = "/logout",
                c = "/iframe-landing",
                l = "shutterstockAuth:success",
                s = "signup",
                u = "login"
        },
        8563: function(e, t, n) {
            n.d(t, {
                H9: function() {
                    return d
                },
                QA: function() {
                    return c
                },
                Sz: function() {
                    return u
                },
                Vc: function() {
                    return p
                },
                Vh: function() {
                    return b
                },
                bv: function() {
                    return f
                },
                f0: function() {
                    return h
                },
                lF: function() {
                    return x
                },
                mU: function() {
                    return s
                },
                p7: function() {
                    return k
                },
                sR: function() {
                    return v
                },
                t6: function() {
                    return y
                },
                uf: function() {
                    return m
                },
                w4: function() {
                    return g
                },
                xH: function() {
                    return l
                }
            });
            var a, o, i = n(47842),
                r = n(39232),
                c = "Details",
                l = "Observation",
                s = "Rating Scale",
                u = "Vote",
                d = "Nuggets",
                m = "https://airtable.com/shrvkt1mdbRbG3nLd",
                h = (a = {}, (0, i.Z)(a, r.k4, "Shutterstock Image"), (0, i.Z)(a, r.pX, "Shutterstock Video"), (0, i.Z)(a, r.xF, "Shutterstock Music"), a),
                f = {
                    SEARCH_TERM: "prefill_Search term",
                    PRODUCT_IMPACTED: "prefill_Product impacted"
                },
                p = 5,
                v = "Show me more like this",
                g = "I'm not interested in this",
                b = (o = {}, (0, i.Z)(o, "Research method", ["Website feedback module"]), (0, i.Z)(o, "Project", ["recUj6s28JmD0WPL1"]), (0, i.Z)(o, c, ""), (0, i.Z)(o, s, ""), (0, i.Z)(o, u, ""), o),
                k = "https://airtable.com/shrpjmYv3aiExHaTQ",
                y = {
                    FIELD_CONTEXT: "prefill_context",
                    FIELD_PAGE_SECTION: "prefill_pageSection",
                    FIELD_PROMT_TEXT: "prefill_Prompt Text",
                    FIELD_TRACKING_ID: "prefill_trackingId",
                    FIELD_USER_ID: "prefill_userId",
                    HIDE_CONTEXT: "hide_context",
                    HIDE_PAGE_SECTION: "hide_pageSection",
                    HIDE_PROMT_TEXT: "hide_Prompt Text",
                    HIDE_TRACKING_ID: "hide_trackingId",
                    HIDE_USER_ID: "hide_userId"
                },
                x = "https://airtable.com/shrkgYNDY9Onb5TS8"
        },
        45089: function(e, t, n) {
            n.d(t, {
                AZ: function() {
                    return m
                },
                L0: function() {
                    return p
                },
                VT: function() {
                    return h
                },
                bj: function() {
                    return B
                },
                c3: function() {
                    return g
                },
                dh: function() {
                    return v
                },
                kR: function() {
                    return _
                },
                mk: function() {
                    return Z
                },
                n1: function() {
                    return L
                },
                nj: function() {
                    return f
                },
                q8: function() {
                    return b
                },
                ry: function() {
                    return w
                },
                vA: function() {
                    return j
                },
                yw: function() {
                    return k
                }
            });
            var a, o = n(47842),
                i = n(39232),
                r = n(57631),
                c = n(68702),
                l = n(95693),
                s = n(75855),
                u = n(44015),
                d = n(75),
                m = {
                    IMAGE: i.Y_,
                    VIDEO: i.FM,
                    AUDIO: i.jr,
                    ELEMENT: i.D8,
                    SFX: i.tn
                },
                h = "editorial-image",
                f = "editorial-video",
                p = {
                    DESIGN: i.bz
                },
                v = (a = {}, (0, o.Z)(a, i.Y_, r.AllImages), (0, o.Z)(a, i.jr, c.Music), (0, o.Z)(a, i.FM, l.Video), (0, o.Z)(a, i.D8, l.Video), (0, o.Z)(a, i.bz, s.$), (0, o.Z)(a, i.tn, u.SoundEffects), a),
                g = {
                    lowres: {
                        name: "low",
                        quality: 1,
                        label: "common:resolutions_low"
                    },
                    lowres_mpeg: {
                        name: "low",
                        quality: 1,
                        label: "common:resolutions_low"
                    },
                    lowres_original: {
                        name: "low",
                        quality: 1,
                        label: "common:resolutions_low"
                    },
                    low: {
                        name: "low",
                        quality: 1,
                        label: "common:resolutions_low"
                    },
                    sd: {
                        name: "sd",
                        quality: 2,
                        label: "common:resolutions_sd"
                    },
                    sd_mpeg: {
                        name: "sd",
                        quality: 2,
                        label: "common:resolutions_sd"
                    },
                    sd_original: {
                        name: "sd",
                        quality: 2,
                        label: "common:resolutions_sd"
                    },
                    nonhd: {
                        name: "sd",
                        quality: 2,
                        label: "common:resolutions_sd"
                    },
                    hd: {
                        name: "hd",
                        quality: 3,
                        label: "common:resolutions_hd"
                    },
                    hd_mpeg: {
                        name: "hd",
                        quality: 3,
                        label: "common:resolutions_hd"
                    },
                    hd_original: {
                        name: "hd",
                        quality: 3,
                        label: "common:resolutions_hd"
                    },
                    "4k": {
                        name: "4k",
                        quality: 4,
                        label: "common:resolutions_4k"
                    },
                    ultrahd4k: {
                        name: "4k",
                        quality: 4,
                        label: "common:resolutions_4k"
                    },
                    ultrahd4k_original: {
                        name: "4k",
                        quality: 4,
                        label: "common:resolutions_4k"
                    }
                },
                b = {
                    comped: "".concat(d.aRr, "::workspaces:comped"),
                    licensed: "".concat(d.aRr, "::workspaces:licensed"),
                    saved: "".concat(d.aRr, "::workspaces:saved"),
                    uploaded: "".concat(d.aRr, "::workspaces:uploaded"),
                    "in-design": "".concat(d.aRr, "::workspaces:used_in_a_design")
                },
                k = "-createdAt",
                y = {
                    buckets: []
                },
                x = {},
                Z = {
                    aggregations: {
                        assetType: x,
                        assetStatus: x,
                        targetChannel: x,
                        targetGeography: x,
                        usageRights: x,
                        licenseName: y,
                        licensedBy: y
                    },
                    pagination: {
                        size: 0,
                        number: 0,
                        totalPages: 0,
                        totalRecords: 0
                    },
                    sort: "name"
                },
                _ = {
                    data: [],
                    meta: Z
                },
                L = {
                    pagination: {
                        size: 16,
                        number: 0,
                        totalPages: 0,
                        totalRecords: 0
                    },
                    sort: "-createdAt"
                },
                B = {
                    data: [],
                    meta: L
                },
                w = {
                    data: void 0,
                    meta: void 0
                },
                j = 4e3
        },
        31905: function(e, t, n) {
            n.d(t, {
                Jv: function() {
                    return r
                },
                ST: function() {
                    return a
                },
                pG: function() {
                    return o
                },
                v6: function() {
                    return i
                }
            });
            var a = {
                    view: [],
                    license: [],
                    comp: [],
                    mediaTypeLicense: [],
                    mediaTypeComp: []
                },
                o = [{
                    containerWidth: 1920,
                    height: 300
                }, {
                    containerWidth: 1024,
                    height: 280
                }, {
                    containerWidth: 0,
                    height: 260
                }],
                i = "",
                r = 880
        },
        33301: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                },
                $5: function() {
                    return f
                },
                $M: function() {
                    return c
                },
                C6: function() {
                    return E
                },
                C_: function() {
                    return h
                },
                Cl: function() {
                    return w
                },
                GX: function() {
                    return W
                },
                Hl: function() {
                    return Y
                },
                I6: function() {
                    return l
                },
                Jo: function() {
                    return j
                },
                Kn: function() {
                    return R
                },
                Mh: function() {
                    return x
                },
                NV: function() {
                    return A
                },
                O8: function() {
                    return N
                },
                Pl: function() {
                    return S
                },
                Px: function() {
                    return Q
                },
                QF: function() {
                    return d
                },
                Qs: function() {
                    return q
                },
                Si: function() {
                    return p
                },
                T$: function() {
                    return K
                },
                TJ: function() {
                    return O
                },
                V3: function() {
                    return F
                },
                VV: function() {
                    return k
                },
                WX: function() {
                    return J
                },
                Xd: function() {
                    return en
                },
                Y$: function() {
                    return V
                },
                YV: function() {
                    return G
                },
                _x: function() {
                    return b
                },
                ak: function() {
                    return z
                },
                bq: function() {
                    return L
                },
                cM: function() {
                    return B
                },
                cR: function() {
                    return v
                },
                ck: function() {
                    return et
                },
                f: function() {
                    return g
                },
                fX: function() {
                    return s
                },
                fb: function() {
                    return T
                },
                fn: function() {
                    return u
                },
                hK: function() {
                    return I
                },
                iH: function() {
                    return C
                },
                ik: function() {
                    return Z
                },
                jI: function() {
                    return $
                },
                jM: function() {
                    return y
                },
                lP: function() {
                    return X
                },
                lm: function() {
                    return M
                },
                mF: function() {
                    return r
                },
                mX: function() {
                    return U
                },
                pG: function() {
                    return o
                },
                pO: function() {
                    return P
                },
                qR: function() {
                    return m
                },
                qf: function() {
                    return H
                },
                vD: function() {
                    return ee
                },
                vb: function() {
                    return a
                },
                wt: function() {
                    return _
                },
                yY: function() {
                    return D
                }
            });
            var a = "sstk1-dam",
                o = "dam-on-e-comm-fast-follow",
                i = "dam-advanced-collection-sharing",
                r = "UP2-1693-enterprise-custom-metadata",
                c = "up-2-1740-remember-last-used-metadata",
                l = "reverse-audio-search",
                s = "predict-uploads-ecomm",
                u = "predict-v2-pages",
                d = "predict-color-palette",
                m = "catalog-upload-allow-all-files",
                h = "next-remove-team-users",
                f = "next-quote-gen-tool",
                p = "createapp-homepage",
                v = "createapp-homepage-enterprise",
                g = "createapp-catalog",
                b = "createapp-catalog-foxtrot",
                k = "create-flow-homepage",
                y = "create-flow-homepage-enterprise",
                x = "b2l2-user-address-in-cart",
                Z = "analyze-pages",
                _ = "up-2-1665-e-comm-allow-premium-editorial-licensing",
                L = "catalog-collections-default-alpha-sort",
                B = "fact-157-catalog-video-render-downloads",
                w = "create-video",
                j = "create-video-entry-points-pre-licensed",
                C = "create-video-entry-points-licensed",
                M = "create-video-enterprise",
                A = "up-2-1847-support-free-assets-on-shutterstock-for-dream-partnership",
                T = "adyen-3ds",
                F = "dam-holding-contribute-button",
                I = "generate-chatbot-release",
                S = "generative-pride-month",
                N = "synthetic-generative-assets-beta",
                V = "rtn-774-3d-objects-ecomm-beta",
                z = "color-insights",
                D = "keyword-insights",
                H = "FACT-90-pixelsquid-in-catalog",
                P = "SDAQ-56-pixel-squid-on-enterprise",
                R = "sdaq-96-help-center-on-enterprise",
                E = "NOV-1882-block-card-testing-on-billing-page",
                O = "project-peacock",
                q = "project-peacock-design-canvas-tab",
                G = "project-peacock-remove-background",
                W = "ii-438-ip-review-for-generated-assets",
                U = "project-peacock-remove-background",
                X = "project-peacock-magic-erase",
                K = "project-peacock-generate-variations",
                Q = "project-peacock-magic-brush",
                $ = "project-peacock-filters",
                J = "project-peacock-crop",
                Y = "project-peacock-zoom-out",
                ee = "project-peacock-undo-redo",
                et = "project-peacock-like-edit",
                en = "project-peacock-edit-in-create"
        },
        82182: function(e, t, n) {
            n.d(t, {
                Qs: function() {
                    return o
                },
                zr: function() {
                    return a
                }
            });
            var a = "even",
                o = "odd"
        },
        72262: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return i
                }
            });
            var a = n(2784),
                o = n(76023),
                i = function() {
                    return (0, a.useContext)(o.s)
                }
        },
        45728: function(e, t, n) {
            n.d(t, {
                GH: function() {
                    return a
                }
            });
            var a = n(68125).G
        },
        68125: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return s
                }
            });
            var a = n(58272),
                o = n(67661),
                i = n(9009),
                r = n(21805),
                c = n(3255),
                l = n(30954),
                s = function(e) {
                    var t = e.cartNamespace,
                        n = e.fetchFullCart,
                        s = r.Z.get(a.$6);
                    return (0, c.ZP)(s ? (0, l.k)({
                        cartNamespace: t,
                        fetchFullCart: n
                    }) : null, function(e) {
                        return o.uS.get(e).then(function(e) {
                            return (0, i.O)(e.data)
                        })
                    })
                }
        },
        30954: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var a = n(81740),
                o = function(e) {
                    var t = e.cartNamespace,
                        n = e.fetchFullCart;
                    return (0, a.dv)({
                        cartNamespace: t,
                        fetchFullCart: n
                    }).formattedUrl
                }
        },
        54350: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return r
                }
            });
            var a = n(33301),
                o = n(9823),
                i = n(92405),
                r = function(e) {
                    var t = (0, o.D)(),
                        n = t.isBrandEnterprise,
                        r = t.isBrandSstk,
                        c = (0, i.p)(a.vb, e);
                    return n && c || r
                }
        },
        29284: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return l
                }
            });
            var a = n(33301),
                o = n(92405),
                i = n(72075),
                r = n(5632),
                c = n(2784),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.O8,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = (0, r.useRouter)(),
                        l = (0, o.p)(e, void 0, !1, !0),
                        s = void 0 === l,
                        u = !s && l,
                        d = !s && !u && (null == t ? void 0 : t.trim().length) > 0 && i.j;
                    return (0, c.useEffect)(function() {
                        d && n.replace(t)
                    }, [n, d, t]), {
                        isLoading: s,
                        hasAccess: u,
                        isRedirecting: d
                    }
                }
        },
        3972: function(e, t, n) {
            n.d(t, {
                KI: function() {
                    return f
                },
                nw: function() {
                    return o
                }
            });
            var a, o, i, r, c = n(47842),
                l = n(8563),
                s = n(43110),
                u = n(776),
                d = n(2784);
            (a = o || (o = {})).CHATBOT = "CHATBOT", a.IMAGE_GENERATOR = "IMAGE_GENERATOR";
            var m = (i = {}, (0, c.Z)(i, o.CHATBOT, l.lF), (0, c.Z)(i, o.IMAGE_GENERATOR, l.p7), i),
                h = (r = {}, (0, c.Z)(r, o.CHATBOT, "ChatBotnotrackingid"), (0, c.Z)(r, o.IMAGE_GENERATOR, "GRPnotrackingid"), r),
                f = function(e) {
                    var t = e.context,
                        n = e.prompt,
                        a = void 0 === n ? "GRPnoprompttext" : n,
                        i = e.trackingId,
                        r = e.feedbackType,
                        c = void 0 === r ? o.IMAGE_GENERATOR : r,
                        f = (0, u.wU)(),
                        p = (0, s.jy)().data,
                        v = (void 0 === p ? {} : p).id,
                        g = void 0 === v ? 0 : v;
                    return (0, d.useMemo)(function() {
                        var e = new URL(m[c]),
                            n = c === o.IMAGE_GENERATOR;
                        return e.searchParams.append(l.t6.HIDE_CONTEXT, "true"), e.searchParams.append(l.t6.HIDE_PAGE_SECTION, "true"), e.searchParams.append(l.t6.HIDE_TRACKING_ID, "true"), e.searchParams.append(l.t6.HIDE_USER_ID, "true"), n && (e.searchParams.append(l.t6.HIDE_PROMT_TEXT, "true"), e.searchParams.append(l.t6.FIELD_PROMT_TEXT, a)), t && e.searchParams.append(l.t6.FIELD_CONTEXT, t), f && e.searchParams.append(l.t6.FIELD_PAGE_SECTION, f), e.searchParams.append(l.t6.FIELD_USER_ID, g), e.searchParams.append(l.t6.FIELD_TRACKING_ID, i || h[c]), e.href
                    }, [t, a, i, c, f, g])
                }
        },
        41273: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return u
                }
            });
            var a = n(87394),
                o = n(38419),
                i = n(9823),
                r = n(43110),
                c = n(32780),
                l = n(5632),
                s = n(2784),
                u = function() {
                    var e = (0, i.D)().isBrandSstk,
                        t = (0, l.useRouter)(),
                        n = (0, r.B)(),
                        u = (0, c.j)({
                            isLoggedInUser: n,
                            isBrandSstk: e
                        });
                    return (0, s.useMemo)(function() {
                        var n = (0, a.Z)(u, 1)[0];
                        return e ? (0, o.DW)({
                            language: t.locale,
                            relativePath: n
                        }) : n
                    }, [u, e, t])
                }
        },
        31666: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return d
                },
                t: function() {
                    return u
                }
            });
            var a = n(87394),
                o = n(58370),
                i = n(27764),
                r = n(5632),
                c = /\/search/,
                l = (0, a.Z)((0, o.Zz)(), 1)[0],
                s = (0, a.Z)((0, o.ii)(), 1)[0],
                u = function() {
                    var e = (0, r.useRouter)().asPath,
                        t = [l, s].some(function(t) {
                            return null == e ? void 0 : e.includes(t)
                        });
                    return c.test(e) && !t
                },
                d = function() {
                    var e = (0, r.useRouter)(),
                        t = e.asPath,
                        n = e.query;
                    return {
                        assetType: (0, i.qw)(t),
                        searchTerm: n.term || ""
                    }
                }
        },
        58898: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return r
                }
            });
            var a = n(87394),
                o = n(36221),
                i = n(2784),
                r = function(e) {
                    var t = (0, a.Z)((0, i.useState)(!1), 2),
                        n = t[0],
                        r = t[1],
                        c = (0, a.Z)((0, i.useState)(null), 2),
                        l = c[0],
                        s = c[1],
                        u = "".concat(o.C8, ":").concat(o.sR).concat((null == e ? void 0 : e.preset) ? ":".concat(e.preset) : ""),
                        d = "".concat(o.jK, ":").concat(o.sR).concat((null == e ? void 0 : e.preset) ? ":".concat(e.preset) : ""),
                        m = (0, i.useCallback)(function(e) {
                            var t = e.newValue,
                                n = e.key;
                            t === window.location.origin && (n === u || n === d) && (r(!0), s(n === d))
                        }, [r, u, d]),
                        h = (0, i.useCallback)(function(e) {
                            var t = e.origin,
                                n = e.data;
                            t === window.location.origin && (n === u || n === d) && (r(!0), s(n === d))
                        }, [r, u, d]);
                    return (0, i.useEffect)(function() {
                        return window.addEventListener("storage", m), window.addEventListener("message", h),
                            function() {
                                window.removeEventListener("storage", m), window.removeEventListener("message", h)
                            }
                    }, [m, h]), {
                        isAuthSuccess: n,
                        isNewUser: l
                    }
                }
        },
        75298: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return r
                }
            });
            var a = n(26297),
                o = n(87394),
                i = n(2784),
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.triggerOnce,
                        n = e.defaultIsVisible,
                        r = (0, a.Z)(e, ["triggerOnce", "defaultIsVisible"]),
                        c = (0, o.Z)((0, i.useState)(void 0 !== n && n), 2),
                        l = c[0],
                        s = c[1],
                        u = (0, i.useRef)(null),
                        d = (0, i.useRef)(null),
                        m = l && void 0 !== t && t,
                        h = function() {
                            var e, t;
                            return null == u ? void 0 : null === (e = u.current) || void 0 === e ? void 0 : null === (t = e.disconnect) || void 0 === t ? void 0 : t.call(e)
                        };
                    return (0, i.useEffect)(function() {
                        var e = null == d ? void 0 : d.current;
                        return window.IntersectionObserver && !m && e && (u.current = new IntersectionObserver(function(e) {
                            var t = (0, o.Z)(e, 1)[0];
                            m || s(t.isIntersecting)
                        }, r), u.current.observe(e)), h
                    }, [d, r, m]), [l, d]
                }
        },
        40233: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return l
                }
            });
            var a = n(70865),
                o = n(96670),
                i = n(2784),
                r = n(43110),
                c = n(25936),
                l = function() {
                    var e = (0, r.jy)().data,
                        t = (0, c.u)().data;
                    return (0, i.useCallback)(function(n) {
                        var i, r, c = n.actionName,
                            l = n.customAttributes,
                            s = (0, o.Z)((0, a.Z)({}, void 0 === l ? {} : l), {
                                userId: null == e ? void 0 : e.id,
                                impersonatorId: t.impersonatorId,
                                organizationId: null == e ? void 0 : e.organizationId,
                                msg: c,
                                referrerPath: window.location.pathname,
                                referrerQuery: window.location.search
                            });
                        null === (i = window.NREUM) || void 0 === i || null === (r = i.addPageAction) || void 0 === r || r.call(i, c, (0, a.Z)({}, window.location || {}, s))
                    }, [e, t])
                }
        },
        63112: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return l
                }
            });
            var a = n(90581),
                o = n(87394),
                i = n(2784),
                r = function() {
                    function e() {
                        (0, a.Z)(this, e), this.setters = []
                    }
                    var t = e.prototype;
                    return t.setState = function(e) {
                        this.value = e, this.setters.forEach(function(t) {
                            return t(e)
                        })
                    }, t.addSetter = function(e) {
                        this.setters.includes(e) || this.setters.push(e)
                    }, t.removeSetter = function(e) {
                        this.setters = this.setters.filter(function(t) {
                            return t !== e
                        })
                    }, e
                }(),
                c = {},
                l = function(e) {
                    e in c || (c[e] = new r);
                    var t = c[e],
                        n = (0, o.Z)((0, i.useState)(t.value), 2),
                        a = n[0],
                        l = n[1];
                    return t.addSetter(l), (0, i.useEffect)(function() {
                        return function() {
                            return t.removeSetter(l)
                        }
                    }, [t]), [a, function(e) {
                        return t.setState(e)
                    }]
                }
        },
        99110: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var a = n(2784),
                o = function(e) {
                    var t = (0, a.useRef)();
                    return void 0 !== e && (t.current = e), t.current
                }
        },
        92067: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return u
                }
            });
            var a = n(81740),
                o = n(52884),
                i = n(9823),
                r = n(67661),
                c = n(9009),
                l = n(3255),
                s = n(43110),
                u = function(e) {
                    var t = e.fetchTrigger,
                        n = (0, i.D)(),
                        u = n.isBrandEnterprise,
                        d = n.isBrandSstk,
                        m = (0, s.B)(),
                        h = (0, l.ZP)(u && m && t ? (0, a.OC)().formattedUrl : null, function(e) {
                            return r.uS.get(e).then(function(e) {
                                return (0, c.O)(e.data)
                            })
                        }, {
                            dedupingInterval: o.no,
                            shouldRetryOnError: !1
                        }),
                        f = h.data,
                        p = h.error;
                    return (null == p ? void 0 : p.status) >= 400 || !m || d ? null : f
                }
        },
        92277: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return d
                }
            });
            var a = n(98788),
                o = n(5163),
                i = n(81740),
                r = n(52884),
                c = n(43110),
                l = n(67661),
                s = n(2784),
                u = n(3255),
                d = function() {
                    var e = (0, i.e5)().formattedUrl,
                        t = (0, c.B)(),
                        n = (0, u.ZP)(t ? e : null, function(e) {
                            return l.uS.get(e).then(function(e) {
                                var t = e.data;
                                return !!(void 0 === t ? {} : t).agreedTime
                            })
                        }, {
                            dedupingInterval: r.no
                        }).data;
                    return {
                        onAcceptTos: (0, s.useCallback)((0, a.Z)(function() {
                            return (0, o.__generator)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 3, , 4]), [4, l.uS.post(e)];
                                    case 1:
                                        return t.sent(), [4, (0, u.JG)(e)];
                                    case 2:
                                    case 3:
                                        return t.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        }), [e]),
                        tosStatus: void 0 === n || n
                    }
                }
        },
        92405: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return _
                }
            });
            var a = n(47842),
                o = n(70865),
                i = n(96670),
                r = n(26297),
                c = n(23945),
                l = n(81740),
                s = n(7297),
                u = n(65532),
                d = n(9823),
                m = n(13271),
                h = n(88436),
                f = n(67661),
                p = n(5632),
                v = n(3255),
                g = n(99110),
                b = n(43110),
                k = "auto",
                y = {},
                x = function(e) {
                    return "flag[".concat(e, "]")
                },
                Z = function(e, t) {
                    var n = x(e);
                    return t[n] === k ? k : "true" === t[n]
                };

            function _(e, t, n, _) {
                var L = (0, h.r)(),
                    B = (0, b.jy)().data,
                    w = (void 0 === B ? {} : B).id,
                    j = (0, p.useRouter)().query,
                    C = (0, u.PE)(),
                    M = C.locale,
                    A = C.region,
                    T = (0, d.D)().brand,
                    F = (0, l.Hx)(M, T).formattedUrl,
                    I = (0, v.ZP)(!n && (_ && !w || w) && L ? F : null, function(e) {
                        var t;
                        return f.uS.get(e, {
                            headers: (t = {}, (0, a.Z)(t, s.yx, L), (0, a.Z)(t, s.L5, M), (0, a.Z)(t, s.UQ, T), (0, a.Z)(t, s.cT, A), t)
                        }).then(function(e) {
                            return e.data
                        })
                    }, {
                        shouldRetryOnError: !1
                    }).data,
                    S = (0, m._)("forcedFlags", y),
                    N = S.storedValue,
                    V = S.setValue,
                    z = function(e, t) {
                        var n = N[e],
                            l = (0, r.Z)(N, [e].map(c.Z));
                        t === k && e in N ? V(l) : t !== k && n !== t && V((0, i.Z)((0, o.Z)({}, l), (0, a.Z)({}, e, t)))
                    },
                    D = (0, g.W)(null != I ? I : e ? (0, a.Z)({}, e, t) : void 0);
                if (D && void 0 !== e) {
                    if (x(e) in j) {
                        var H = Z(e, j);
                        return z(e, H), H === k ? D[e] : H
                    }
                    return e in N ? Boolean(N[e]) : D[e]
                }
                return D && void 0 === e && Object.keys(D).forEach(function(e) {
                    if (x(e) in j) {
                        var t = Z(e, j);
                        t !== k && (D[e] = t), z(e, t)
                    } else e in N && (D[e] = N[e])
                }), D
            }
        },
        57613: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("path", {
                        d: "M25.0039 0.00837148L25.0039 4.06302L25.0039 7.29395L23.0446 7.29395L23.0446 3.55119L23.0446 1.96772L21.4931 1.96772L19.3978 1.96772L17.5904 1.96772L17.5904 0.00837157L17.8623 0.00837156L19.8456 0.00837154L21.8849 0.00837152L23.8523 0.00837149L25.0039 0.00837148Z"
                    }), (0, o.jsx)("path", {
                        d: "M25.0039 12.2999L25.0039 13.7154C25.0039 16.5065 23.0526 18.8417 20.4294 19.4415C19.8296 22.0566 17.5024 24 14.7033 24L0.995911 24L0.995911 18.7617L0.995911 16.7144L0.995911 10.3006C0.995911 9.62879 1.11587 8.98101 1.3318 8.37321C1.54773 7.71743 1.88361 7.11763 2.30747 6.5978C2.77132 6.02199 3.34713 5.54215 3.99491 5.16628C4.48275 4.89437 5.01057 4.68644 5.57038 4.55848C6.17019 1.94335 8.49741 6.69445e-07 11.2965 6.36066e-07L12.584 6.20712e-07L12.584 1.95935L11.2965 1.95935C9.64903 1.95935 8.24149 2.97501 7.66569 4.41453L20.5814 4.41453L20.5814 17.3462C22.0289 16.7704 23.0446 15.3629 23.0446 13.7154L23.0446 12.2999L25.0039 12.2999ZM7.38578 13.4915C11.9283 13.2196 15.9509 10.9883 18.622 7.62946L18.622 6.38987L17.0546 6.38987C14.7513 9.27691 11.2965 11.2123 7.38578 11.4762L7.38578 13.4915V13.4915ZM7.38578 17.4662C11.6244 17.2742 15.5111 15.7068 18.622 13.2196L18.622 10.5485C15.679 13.3955 11.7443 15.2189 7.38578 15.4588L7.38578 17.4662V17.4662ZM15.0872 17.6341L18.622 17.6341L18.622 15.6668C17.5184 16.4265 16.3348 17.0983 15.0872 17.6341ZM2.95526 22.0487L14.7113 22.0487C16.3588 22.0487 17.7663 21.033 18.3421 19.5935L5.42643 19.5935L5.42643 19.4255L5.42643 17.4662L5.42643 15.4508L5.42643 13.4915L5.42643 11.4762L5.42643 9.50883L5.42643 7.4935L5.42643 6.66978C5.03456 6.82972 4.67468 7.04565 4.36279 7.31756C3.81097 7.78141 3.39511 8.38121 3.15519 9.09297C3.02723 9.47684 2.96325 9.8927 2.96325 10.3166L2.96325 22.0407L2.95526 22.0487ZM7.37778 9.51683C10.0809 9.2929 12.5281 8.14928 14.3834 6.38187L10.9926 6.38187C9.89694 6.96568 8.67335 7.35755 7.36979 7.48551L7.36979 9.50883L7.37778 9.51683Z"
                    })]
                }), "AiGenerator.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 26 24"
                    }, e))
                }
        },
        57631: function(e, t, n) {
            n.r(t), n.d(t, {
                AllImages: function() {
                    return l
                },
                allImagesSvgPath: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = "M10 15.333c1.067 0 2-.933 2-2s-.933-2-2-2-2 .933-2 2 .933 2 2 2zM2.667 6v21.333H24c2.933 0 5.333-2.4 5.333-5.333V6H2.666zm24 16c0 1.467-1.2 2.667-2.667 2.667H7.2l3.467-3.467 2.667 2.667 8-8 5.333 5.333v.8zm0-4.533l-5.333-5.333-8 8-2.667-2.667L5.334 22.8V8.667h21.333v8.8z",
                c = (0, i.Z)((0, o.jsx)("path", {
                    d: r
                }), "AllImages.svg"),
                l = function(e) {
                    return (0, o.jsx)(c, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        21610: function(e, t, n) {
            n.r(t), n.d(t, {
                Blog: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M14.8 4.133H3.6v11.2h11.2v-11.2zm-2.533 8.8H6.134V6.666h6.267v6.267zm10.666 2.534c3.067 0 5.6-2.533 5.6-5.6s-2.533-5.6-5.6-5.6-5.6 2.4-5.6 5.467 2.533 5.733 5.6 5.733zm0-8.8C24.666 6.667 26 8.134 26 9.734s-1.467 3.067-3.067 3.067-3.067-1.467-3.067-3.067 1.333-3.067 3.067-3.067zM2.667 29.2h14.267L9.867 16.667 2.667 29.2zm4.266-2.533l2.8-4.933 2.8 4.933h-5.6zM22.8 16.133l-6.533 6.533 3.2 6.533H26l3.2-6.533-6.4-6.533zm1.733 10.534h-3.467L19.333 23.2l3.467-3.467 3.467 3.467-1.733 3.467z"
                }), "Blog.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        19349: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M20 4H6.667v24L16 24l9.333 4V9.333C25.333 6 23.466 4 20 4z"
                }), "Bookmark.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        30046: function(e, t, n) {
            n.r(t), n.d(t, {
                Calendar: function() {
                    return s
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = n(5007),
                c = n(2784),
                l = (0, i.Z)((0, o.jsx)("path", {
                    d: "M18 3c0-.6-.5-1-1-1s-1 .4-1 1H8c0-.6-.5-1-1-1s-1 .4-1 1H2v18h15c2.8 0 5-2.2 5-5V3h-4zm-.9 15.9v-1.8h2.6c-.4 1-1.5 1.7-2.6 1.8zm2.8-4H15v3.9H4.1V11h15.8v3.9zm0-5.9H4.1V5.1h1.8v.8C5.9 6.5 6.4 7 7 7s1.1-.5 1.1-1.1v-.8H16v.8c-.1.6.4 1.1 1 1.1s1.1-.5 1.1-1.1v-.8h1.8V9z"
                }), "Calendar.svg"),
                s = (0, c.forwardRef)(function(e, t) {
                    return (0, o.jsx)(l, (0, a.Z)({
                        viewBox: "0 0 24 24",
                        ref: t
                    }, e))
                });
            s.displayName = "CalendarIcon", s.muiName = r.Z.muiName
        },
        73829: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return l
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = n(5007),
                c = (0, i.Z)((0, o.jsxs)("g", {
                    children: [(0, o.jsx)("path", {
                        d: "M19.8,3H4.2L2,12.8L2,21h20v-8L19.8,3z M18.2,5l1.6,7.1H4.2L5.8,5H18.2z M4,19v-5h16v5H4z"
                    }), (0, o.jsx)("rect", {
                        x: "7",
                        y: "9",
                        width: "10",
                        height: "2"
                    }), (0, o.jsx)("rect", {
                        x: "8",
                        y: "6",
                        width: "8",
                        height: "2"
                    })]
                }), "Catalog.svg"),
                l = function(e) {
                    return (0, o.jsx)(c, (0, a.Z)({
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                    }, e))
                };
            l.muiName = r.Z.muiName
        },
        92784: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("path", {
                        d: "M8 9.333h2.667V12H8V9.333z"
                    }), (0, o.jsx)("path", {
                        d: "M2.667 2.667v26.667H24c2.946 0 5.333-2.388 5.333-5.333V2.668zm24 21.333c0 1.473-1.194 2.667-2.667 2.667H5.333V5.334h21.333z"
                    }), (0, o.jsx)("path", {
                        d: "M13.333 9.333H24V12H13.333V9.333zM8 14.667h2.667v2.667H8v-2.667zM13.333 14.667H24v2.667H13.333v-2.667zM8 20h2.667v2.667H8V20zM13.333 20H24v2.667H13.333V20z"
                    })]
                }), "Document.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        69026: function(e, t, n) {
            n.r(t), n.d(t, {
                Edit: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M5.467 22.8l-2.8 6.533 6.56-2.733-3.76-3.8zM10.56 25.253L6.787 21.48 25.56 2.667l3.773 3.773L10.56 25.253z"
                }), "Edit.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        75855: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return u
                },
                M: function() {
                    return d
                }
            });
            var a = n(70865),
                o = n(96670),
                i = n(52322),
                r = n(6620),
                c = n(5007),
                l = n(2784),
                s = (0, r.Z)((0, i.jsx)(function() {
                    return (0, i.jsx)("path", {
                        d: "M5.333 5.333h8V2.666H2.666v10.667h2.667v-8zM26.667 18.667V24c0 1.473-1.194 2.667-2.667 2.667h-5.333v2.667H24c2.946 0 5.333-2.388 5.333-5.333v-5.333zM8.12 20.12l-2.8 6.533 6.56-2.733-3.76-3.8zM22.716 5.515l3.771 3.771-13.199 13.199-3.771-3.771L22.716 5.515z"
                    })
                }, {}), "Editor.svg"),
                u = function(e) {
                    return (0, i.jsx)(s, (0, a.Z)({
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32"
                    }, e))
                },
                d = (0, l.forwardRef)(function(e, t) {
                    return (0, i.jsx)(u, (0, o.Z)((0, a.Z)({}, e), {
                        ref: t
                    }))
                });
            d.displayName = "EditorIcon", d.muiName = c.Z.muiName
        },
        25681: function(e, t, n) {
            n.r(t), n.d(t, {
                Editorial: function() {
                    return l
                },
                editorialSvgPath: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = "M8 16h16v2.667H8V16zM8 8h16v5.333H8V8zM8 21.333h12V24H8v-2.667z M2.667 2.667v26.667H24c2.933 0 5.333-2.4 5.333-5.333V2.668H2.666zm21.333 24H5.333V5.334h21.333v18.667c0 1.467-1.2 2.667-2.667 2.667z",
                c = (0, i.Z)((0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("path", {
                        d: r
                    })
                }), "Editorial.svg"),
                l = function(e) {
                    return (0, o.jsx)(c, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        34116: function(e, t, n) {
            n.r(t), n.d(t, {
                Heart: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M15.667 7.6C7.267-.96-2.92 9.427 5.48 17.987l10.187 10.387L25.84 17.987C34.28 9.334 24.093-1 15.667 7.6zM24 16.12l-8.267 8.44-8.347-8.44c-2.147-2.187-2.893-4.6-2.053-6.613.596-1.443 1.992-2.44 3.621-2.44h.062-.003c1.907.142 3.58 1.039 4.739 2.391l.008.009 1.907 1.947 1.893-1.947c1.179-1.377 2.871-2.285 4.777-2.425l.023-.001h.029c1.626 0 3.021.99 3.615 2.401l.01.026c.84 2.027.093 4.453-2.013 6.653z"
                }), "Heart.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        1119: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return s
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = n(5007),
                c = n(2784),
                l = (0, i.Z)((0, o.jsx)("path", {
                    d: "M16 3.333l-12 12V30h10.667V19.333h2.667V30h10.667V15.333l-12-12zm9.333 24H20V16.666h-8v10.667H6.667V16.4L16 7.067l9.333 9.333v10.933z"
                }), "Home.svg"),
                s = (0, c.forwardRef)(function(e, t) {
                    return (0, o.jsx)(l, (0, a.Z)({
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        ref: t
                    }, e))
                });
            s.displayName = "HomeIcon", s.muiName = r.Z.muiName
        },
        12820: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return s
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = n(5007),
                c = n(2784),
                l = (0, i.Z)((0, o.jsx)("path", {
                    d: "M5.333 15.333h21.333V18H5.333v-2.667zm0-6.666h21.333v2.667H5.333V8.667zm0 13.333h21.333v2.667H5.333V22z"
                }), "Menu.svg"),
                s = (0, c.forwardRef)(function(e, t) {
                    return (0, o.jsx)(l, (0, a.Z)({
                        viewBox: "0 0 32 32",
                        ref: t
                    }, e))
                });
            s.displayName = "MenuIcon", s.muiName = r.Z.muiName
        },
        68702: function(e, t, n) {
            n.r(t), n.d(t, {
                Music: function() {
                    return l
                },
                musicSvgPath: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = "M18,18c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S19.1,18,18,18z M6,20c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C8,19.1,7.1,20,6,20z M22,16l0-14L11.7,5.1C8.4,6.1,8,8.8,8,11v3.6 C7.4,14.2,6.7,14,6,14c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4v-7c0-2.4,0.6-3.5,2.3-4.1L20,4.7l0,7.9c-0.6-0.3-1.3-0.6-2-0.6 c-2.2,0-4,1.8-4,4s1.8,4,4,4S22,18.2,22,16L22,16L22,16z",
                c = (0, i.Z)((0, o.jsx)("path", {
                    d: r
                }), "Music.svg"),
                l = function(e) {
                    return (0, o.jsx)(c, (0, a.Z)({
                        viewBox: "0 0 24 24"
                    }, e))
                }
        },
        70828: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("path", {
                        d: "M25.333 22.667c0 2-.8 2.667-2.667 2.667h-16V6.667h9.333V4h-12v24h18.667c.156.018.338.028.521.028 2.673 0 4.84-2.167 4.84-4.84 0-.184-.01-.365-.03-.543l.002.022V16h-2.667z"
                    }), (0, o.jsx)("path", {
                        d: "M18.667 4v2.667h4.787L10.347 19.774l1.88 1.88L25.334 8.547v4.787h2.667V4.001h-9.333z"
                    })]
                }), "OpenInNew.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        22939: function(e, t, n) {
            n.r(t), n.d(t, {
                Photos: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M22.667 9.333v-4H9.334v4H2.667v17.333H24c2.946 0 5.333-2.388 5.333-5.333v-12zm4 12C26.667 22.806 25.473 24 24 24H5.333V12h5.333c.736 0 1.333-.597 1.333-1.333V8h8v2.667c0 .736.597 1.333 1.333 1.333h5.333zM16 12c-2.946 0-5.333 2.388-5.333 5.333s2.388 5.333 5.333 5.333c2.946 0 5.333-2.388 5.333-5.333S18.945 12 16 12zm0 8c-1.473 0-2.667-1.194-2.667-2.667s1.194-2.667 2.667-2.667c1.473 0 2.667 1.194 2.667 2.667S17.473 20 16 20z"
                }), "Photos.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        13288: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 2H2V18H16C17.1046 18 18 17.1046 18 16V2ZM0 0V20H16C18.2091 20 20 18.2091 20 16V0H0Z",
                        stroke: "none"
                    }), (0, o.jsx)("rect", {
                        x: "11",
                        y: "4",
                        width: "5",
                        height: "5",
                        stroke: "none"
                    }), (0, o.jsx)("rect", {
                        x: "4",
                        y: "4",
                        width: "5",
                        height: "5",
                        stroke: "none"
                    }), (0, o.jsx)("rect", {
                        x: "11",
                        y: "11",
                        width: "5",
                        height: "5",
                        stroke: "none"
                    })]
                }), "Predict.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        width: "24",
                        height: "24",
                        viewBox: "-2 0 24 24"
                    }, e))
                }
        },
        87565: function(e, t, n) {
            n.r(t), n.d(t, {
                Question: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M16 8.667c-2.933 0-5.333 2.4-5.333 5.333h2.667c0-1.467 1.2-2.667 2.667-2.667s2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667h-1.333v4h2.667V19.2c2.267-.533 4-2.667 4-5.2 0-2.933-2.4-5.333-5.333-5.333zm-1.333 16h2.667V22h-2.667v2.667zM16 3.333c-7.333 0-13.333 6-13.333 13.333s6 13.333 13.333 13.333 13.333-6 13.333-13.333S23.333 3.333 16 3.333zm0 24c-5.867 0-10.667-4.8-10.667-10.667S10.133 5.999 16 5.999s10.667 4.8 10.667 10.667S21.867 27.333 16 27.333z"
                }), "Question.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        35038: function(e, t, n) {
            n.r(t), n.d(t, {
                ShoppingCart: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M22.667 24.667c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667c0-1.467-1.2-2.667-2.667-2.667zm-10.667 0c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667c0-1.467-1.2-2.667-2.667-2.667zm14.667-12V7.334H9.734l-.533-4h-5.2c0 1.467 1.2 2.667 2.667 2.667h.133l2.667 17.333h15.867c0-1.467-1.2-2.667-2.667-2.667h-10.8l-.4-2.667h9.867c2.933 0 5.333-2.4 5.333-5.333zm-15.734 2.666l-.8-5.333H24v2.667c0 1.467-1.2 2.667-2.667 2.667h-10.4z"
                }), "ShoppingCart.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        44015: function(e, t, n) {
            n.r(t), n.d(t, {
                SoundEffects: function() {
                    return l
                },
                soundEffectsSvgPath: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = "M10,22c-0.5,0-0.9-0.3-1-0.8L6.7,10.9l-0.8,1.5C5.7,12.8,5.4,13,5,13H2v-2h2.4l1.7-3.4C6.3,7.2,6.7,7,7.1,7\n		c0.4,0,0.8,0.4,0.9,0.8l2,8.7l3-13.7C13.1,2.3,13.5,2,14,2c0,0,0,0,0,0c0.5,0,0.9,0.3,1,0.8l2.4,10.3l0.8-1.5\n		c0.2-0.3,0.5-0.6,0.9-0.6h3v2h-2.4l-1.7,3.4c-0.2,0.4-0.6,0.6-1,0.5c-0.4,0-0.8-0.4-0.9-0.8l-2-8.7l-3,13.7\n		C10.9,21.7,10.5,22,10,22C10,22,10,22,10,22z",
                c = (0, i.Z)((0, o.jsx)("path", {
                    d: r
                }), "SoundEffects.svg"),
                l = function(e) {
                    return (0, o.jsx)(c, (0, a.Z)({
                        viewBox: "0 0 22 24"
                    }, e))
                }
        },
        70100: function(e, t, n) {
            n.r(t), n.d(t, {
                Team: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M11.333 4c-3.314 0-6 2.686-6 6s2.686 6 6 6c3.309 0 5.992-2.679 6-5.986v-.001c0-3.316-2.685-6.006-5.999-6.013h-.001zm0 9.333C9.492 13.333 8 11.841 8 10s1.492-3.333 3.333-3.333c1.841 0 3.333 1.492 3.333 3.333v.014-.001c-.008 1.835-1.497 3.32-3.333 3.32zM15.667 18.667H7c-2.427 0-4.333 2.547-4.333 5.827v3.507H20v-3.507c0-3.28-1.907-5.827-4.333-5.827zm1.666 6.666h-12v-.827c0-1.987.973-3.173 1.667-3.173h8.667c.693 0 1.667 1.2 1.667 3.173zM20.667 4c-.937.006-1.822.227-2.608.616l.035-.016c.534.662.984 1.424 1.312 2.247l.021.06c.36-.152.779-.24 1.219-.24h.022-.001C22.508 6.667 24 8.159 24 10s-1.492 3.333-3.333 3.333a3.2275 3.2275 0 01-1.261-.261l.021.008c-.35.887-.799 1.654-1.347 2.338l.014-.018c.748.362 1.628.573 2.556.573 3.306 0 5.987-2.68 5.987-5.987 0-3.3-2.671-5.977-5.969-5.987h-.001zM25 18.667h-4.213c.573.76 1.028 1.648 1.318 2.607l.016.06h2.827c.693 0 1.667 1.2 1.667 3.16v.84h-3.947v2.667h6.667v-3.493c0-3.28-1.907-5.84-4.333-5.84z"
                }), "Team.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        74680: function(e, t, n) {
            n.r(t), n.d(t, {
                Templates: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M14.667 14.667v10.667H12V6.667h2.667V12h10.667v2.667H14.667zM4 4h24v18.667C28 25.608 25.608 28 22.667 28H4V4zm18.667 21.333c1.471 0 2.667-1.196 2.667-2.667v-16H6.667v18.667h16z"
                }), "Templates.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        40094: function(e, t, n) {
            n.r(t), n.d(t, {
                ThreeD: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M921.6 772.267l-110.933-72.533v-298.667l-256-128v-145.067c0-21.333-17.067-42.667-42.667-42.667s-42.667 17.067-42.667 42.667v145.067l-256 128v298.667l-110.933 72.533c-17.067 12.8-21.333 38.4-8.533 55.467 8.533 12.8 21.333 17.067 34.133 17.067 8.533 0 17.067-4.267 25.6-8.533l106.667-72.533 251.733 132.267 251.733-123.733 106.667 72.533c8.533 4.267 17.067 8.533 25.6 8.533 12.8 0 25.6-8.533 34.133-17.067 12.8-25.6 8.533-51.2-8.533-64zM512 503.467l-162.133-76.8 162.133-81.067 162.133 81.067-162.133 76.8zM298.667 494.933l170.667 85.333v200.533l-170.667-85.333v-200.533zM554.667 780.8v-200.533l170.667-85.333v200.533l-170.667 85.333z"
                }), "ThreeD.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 1000 1000"
                    }, e))
                }
        },
        95693: function(e, t, n) {
            n.r(t), n.d(t, {
                Video: function() {
                    return l
                },
                videoSvgPath: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = n(6620),
                r = "M12 11.867v9.6l9.6-4.8-9.6-4.8zM2.667 6v21.333H24c2.933 0 5.333-2.4 5.333-5.333V6H2.666zm24 16c0 1.467-1.2 2.667-2.667 2.667H5.333v-16h21.333V22z",
                c = (0, i.Z)((0, o.jsx)("path", {
                    d: r
                }), "Video.svg"),
                l = function(e) {
                    return (0, o.jsx)(c, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        12112: function(e, t, n) {
            n.r(t), n.d(t, {
                VideoCamera: function() {
                    return r
                }
            });
            var a = n(70865),
                o = n(52322),
                i = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "M29.333 22.667V9.334L24 11.441v-3.44H2.667v16h16.021c2.534 0 4.656-1.768 5.199-4.138l.007-.036zm-24-12h16v8c0 1.473-1.194 2.667-2.667 2.667H5.333zM24 16.907V14.24l2.667-1.133v5z"
                }), "VideoCamera.svg"),
                r = function(e) {
                    return (0, o.jsx)(i, (0, a.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        60715: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return nS
                }
            });
            var a, o, i, r, c = n(47842),
                l = n(70865),
                s = n(96670),
                u = n(52322),
                d = n(78675),
                m = n(67550),
                h = n(47034),
                f = n(23594),
                p = n(87394),
                v = n(50930),
                g = n(31373),
                b = n(65992),
                k = n(62197),
                y = n(47999),
                x = n(25237),
                Z = n.n(x),
                _ = n(8740),
                L = n(92067),
                B = n(2784),
                w = function() {
                    var e = (0, p.Z)((0, B.useState)(!1), 2),
                        t = e[0],
                        n = e[1],
                        a = (0, p.Z)((0, B.useState)(!1), 2),
                        o = a[0],
                        i = a[1],
                        r = (0, B.useRef)(null),
                        c = (0, L.z)({
                            fetchTrigger: o
                        });
                    return {
                        buttonRef: r,
                        isContactUsOpen: t,
                        loadContactUsContent: o,
                        onClickAwayHandler: function() {
                            return n(!1)
                        },
                        onClickButtonHandler: function(e) {
                            e.stopPropagation(), o || i(!0), n(!t)
                        },
                        representativeInfo: c
                    }
                },
                j = "contactUsDropdown",
                C = Z()(function() {
                    return n.e(55916).then(n.bind(n, 55916)).then(function(e) {
                        return e.ContactUsContent
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55916]
                        }
                    },
                    ssr: !1
                }),
                M = (0, _.ZL)()(function(e, t) {
                    var n = e.palette,
                        a = t.isUtilityBar;
                    return {
                        root: (0, l.Z)({
                            color: n.text.secondary,
                            "&:hover": {
                                background: "none",
                                color: n.text.primary
                            }
                        }, a && {
                            margin: "-".concat(27, "px 0 -").concat(5, "px"),
                            padding: "".concat(27, "px 0 ").concat(5, "px"),
                            height: "auto",
                            width: "100%"
                        })
                    }
                }),
                A = function(e) {
                    var t = e.label,
                        n = e.isUtilityBar,
                        a = e.clickTrack,
                        o = w(),
                        i = o.buttonRef,
                        r = o.isContactUsOpen,
                        c = o.loadContactUsContent,
                        l = o.onClickAwayHandler,
                        s = o.onClickButtonHandler,
                        d = o.representativeInfo,
                        m = M({
                            isUtilityBar: n
                        }).classes;
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(y.z, {
                            "aria-label": t,
                            "aria-controls": r ? j : void 0,
                            "aria-haspopup": "true",
                            classes: m,
                            clickTrack: a,
                            onClick: s,
                            ref: i,
                            size: "small",
                            children: (0, u.jsx)(k.Z, {
                                variant: "caption",
                                color: "inherit",
                                children: t
                            })
                        }), c && (0, u.jsx)(C, {
                            ariaControlId: j,
                            buttonRef: i,
                            isContactUsOpen: r,
                            onClickAwayHandler: l,
                            representativeInfo: d,
                            isUtilityBar: n
                        })]
                    })
                },
                T = n(9390),
                F = n(88127),
                I = n(33301),
                S = n(53881),
                N = n(9823),
                V = n(94909),
                z = n(43110),
                D = n(92277),
                H = n(62512),
                P = n(92405),
                R = n(63112),
                E = n(1119),
                O = n(12820),
                q = n(92784),
                G = n(87565),
                W = n(57613),
                U = n(73829),
                X = n(75855),
                K = n(13288),
                Q = n(30046),
                $ = n(12281),
                J = n(31037),
                Y = n(75),
                ee = n(27764),
                et = n(5632),
                en = n(59877),
                ea = n(54112),
                eo = n(92228),
                ei = n(72262),
                er = n(56219),
                ec = n(95193);

            function el() {
                var e = (0, eo.Z)(["\n0% {\n  opacity: 0;\n  transform: scale(0);\n}\n100% {\n  opacity: 1;\n  transform: scale(1);\n}\n"]);
                return el = function() {
                    return e
                }, e
            }

            function es() {
                var e = (0, eo.Z)(["\n0% {\n  opacity: 1;\n  transform: translateX(0) scale(1)\n}\n100% {\n  opacity: 0;\n  transform: translateX(-40px) scale(0) \n}\n"]);
                return es = function() {
                    return e
                }, e
            }
            var eu = (0, ec.F4)(el()),
                ed = (0, ec.F4)(es()),
                em = function() {
                    var e = (0, ei.r)(),
                        t = e.animationType,
                        n = e.mediaItem,
                        a = e.timeout / 3,
                        o = (0, _.ZL)()(function(e) {
                            var t = e.transitions,
                                n = e.tokens;
                            return {
                                root: {
                                    position: "absolute",
                                    width: n.spacing.xl,
                                    top: 0,
                                    left: n.spacing.xl,
                                    borderRadius: n.border.radius.l,
                                    objectFit: "fill"
                                },
                                containerEnter: {
                                    animation: "".concat(eu, " ").concat(a, "ms ").concat(t.easing.easeIn, " forwards")
                                },
                                containerExit: {
                                    animation: "".concat(ed, " ").concat(a, "ms ").concat(t.easing.easeOut, " forwards"),
                                    animationDelay: "".concat(a, "ms")
                                }
                            }
                        })(),
                        i = o.classes,
                        r = o.cx,
                        c = (0, p.Z)((0, B.useState)(i.containerEnter), 2),
                        l = c[0],
                        s = c[1];
                    if ((0, B.useEffect)(function() {
                            return "catalog" === t && n && setTimeout(function() {
                                s(i.containerExit)
                            }, a), s(i.containerEnter)
                        }, [i.containerExit, i.containerEnter, a, t, n]), "catalog" !== t || !n || !(0, er.YN)(n)) return null;
                    var d = (0, er.Qs)(n);
                    return (0, u.jsx)("img", {
                        "data-automation": "AddAssetToCatalogAnimation_image",
                        className: r(i.root, l),
                        src: null != d ? d : "",
                        alt: "preview"
                    })
                },
                eh = n(46452),
                ef = n(776),
                ep = function(e) {
                    var t = e.labelTrack,
                        n = e.timeBeforeTrack,
                        a = e.hoverTrackOptions,
                        o = e.trackTimes,
                        i = void 0 === o ? 1 : o,
                        r = (0, ef.yh)().analytics,
                        c = (0, ef.wU)(),
                        l = (0, B.useRef)(0),
                        s = (0, B.useRef)(0);
                    return (0, B.useEffect)(function() {
                        return function() {
                            return clearTimeout(l.current)
                        }
                    }, [l]), {
                        mouseHover: function(e) {
                            s.current < i && (l.current = setTimeout(function() {
                                r.inlineHover(e || "".concat(c, ".").concat(t), a), s.current += 1
                            }, n))
                        },
                        mouseLeave: function() {
                            clearTimeout(l.current)
                        }
                    }
                },
                ev = n(26297),
                eg = n(23883),
                eb = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return (0, v.Z)(Array.isArray(e) ? e : [e])
                },
                ek = n(43894),
                ey = ek.Z.tooltipPlacementTop,
                ex = ek.Z.tooltipPlacementRight,
                eZ = ek.Z.tooltipPlacementBottom,
                e_ = ek.Z.tooltipPlacementLeft,
                eL = ek.Z.arrow,
                eB = ek.Z.tooltip,
                ew = {
                    width: "2em",
                    height: "1.4em"
                },
                ej = {
                    height: "2em",
                    width: "1.4em"
                },
                eC = "calc(-1.71em * 0.8)",
                eM = {
                    popper: (a = {}, (0, c.Z)(a, "& .".concat(eB), (0, c.Z)({
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        padding: 2,
                        boxShadow: 3,
                        borderRadius: "16px",
                        maxWidth: "min-content"
                    }, "& .".concat(eL), (0, c.Z)({
                        color: "background.paper"
                    }, "::before", {
                        boxShadow: function(e) {
                            return e.shadows[1]
                        },
                        borderRadius: "4px"
                    }))), (0, c.Z)(a, ".".concat(ex, " .").concat(eL), (0, s.Z)((0, l.Z)({}, ej), {
                        marginLeft: eC
                    })), (0, c.Z)(a, ".".concat(e_, " .").concat(eL), (0, s.Z)((0, l.Z)({}, ej), {
                        marginRight: eC
                    })), (0, c.Z)(a, ".".concat(ey, " .").concat(eL), (0, s.Z)((0, l.Z)({}, ew), {
                        marginBottom: eC
                    })), (0, c.Z)(a, ".".concat(eZ, " .").concat(eL), (0, s.Z)((0, l.Z)({}, ew), {
                        marginTop: eC
                    })), a)
                },
                eA = function(e) {
                    var t, n = e.children,
                        a = e.p,
                        o = e.title,
                        i = e.sx,
                        r = e.slotProps,
                        c = void 0 === r ? {} : r,
                        d = c.popper,
                        h = (0, ev.Z)(c, ["popper"]);
                    return (0, u.jsx)(eg.Z, (0, s.Z)((0, l.Z)({}, e), {
                        title: (0, u.jsx)(m.Z, {
                            p: void 0 === a ? 4 : a,
                            children: o
                        }),
                        sx: i,
                        slotProps: (0, s.Z)((0, l.Z)({}, h), {
                            popper: (0, s.Z)((0, l.Z)({}, d), {
                                sx: null !== (t = null == d ? void 0 : d.sx) && void 0 !== t ? t : [eM.popper].concat((0, v.Z)(eb(i)))
                            })
                        }),
                        children: n
                    }))
                },
                eT = function(e) {
                    var t = e.src,
                        n = e.altText,
                        a = e.tooltipText;
                    return (0, u.jsxs)("div", {
                        style: {
                            margin: "30px"
                        },
                        children: [(0, u.jsx)("img", {
                            style: {
                                borderRadius: "8px"
                            },
                            draggable: "false",
                            src: t,
                            width: "270",
                            height: "151",
                            alt: n
                        }), (0, u.jsx)(k.Z, {
                            marginTop: "30px",
                            textAlign: "center",
                            variant: "body1",
                            children: a
                        })]
                    })
                },
                eF = function(e) {
                    var t = e.src,
                        n = e.altText,
                        a = e.tooltipText,
                        o = e.children,
                        i = e.tabName,
                        r = e.isLoggedInUser,
                        c = e.isMobile,
                        l = ep({
                            timeBeforeTrack: 1500,
                            trackTimes: 999
                        }),
                        s = l.mouseHover,
                        d = l.mouseLeave;
                    return r || c ? (0, u.jsx)(m.Z, {
                        onMouseEnter: function() {
                            return s("utilityBar.".concat(i))
                        },
                        onMouseLeave: function() {
                            return d()
                        },
                        children: o
                    }) : (0, u.jsx)(eA, {
                        placement: "right-start",
                        title: (0, u.jsx)(eT, {
                            src: t,
                            altText: n,
                            tooltipText: a
                        }),
                        children: (0, u.jsx)(m.Z, {
                            onMouseEnter: function() {
                                return s("utilityBar.".concat(i))
                            },
                            onMouseLeave: function() {
                                return d()
                            },
                            children: o
                        })
                    })
                },
                eI = n(75053),
                eS = n(13011),
                eN = n(58287),
                eV = (0, _.ZL)()(function() {
                    var e, t, n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = a.zIndex,
                        i = a.breakpoints,
                        r = a.palette,
                        l = a.spacing,
                        s = a.tokens,
                        u = s.spacing,
                        d = s.font,
                        m = s.size,
                        h = s.zIndex,
                        f = arguments.length > 1 ? arguments[1] : void 0,
                        p = f.isBrandSstk,
                        v = f.isDrawerOpen,
                        g = f.isPageScrollable,
                        b = f.primaryNavItemCount,
                        k = f.secondaryNavItemCount,
                        y = f.pushBottomUp,
                        x = f.showHeaderBanner,
                        Z = (0, eN.C)(l(4)) + (0, eN.C)(m.density.base),
                        _ = (0, eN.C)(l(5)) + (0, eN.C)(l(4)) + (b + k) * Z + (0, eN.C)(l(5)),
                        L = eS.P7 + (x ? eI.ep : 0) + (0, eN.C)(l(3));
                    return {
                        utilityBar: (e = {
                            borderTop: p ? "1px solid ".concat(r.border1Color) : "none",
                            zIndex: h.fixed[10] + 1,
                            position: "fixed",
                            bottom: 0,
                            width: "100vw",
                            maxWidth: "100vw",
                            padding: u.s,
                            height: eh.e$
                        }, (0, c.Z)(e, i.up("md"), (0, c.Z)({
                            borderRight: "1px solid ".concat(r.border1Color),
                            width: eh.WT,
                            minWidth: eh.WT,
                            position: "sticky",
                            top: -1,
                            height: g ? "100vh" : "calc(100vh - ".concat(eS.P7, "px)"),
                            padding: "".concat(u.m, " 0 0"),
                            minHeight: _
                        }, "@media screen and (max-height: ".concat(_, "px)"), {
                            height: "auto"
                        })), (0, c.Z)(e, i.down("sm"), {
                            "&": {
                                borderTop: "1px solid ".concat(r.border1Color, " !important"),
                                zIndex: v ? o.modal + 1 : h.fixed[10] + 1
                            }
                        }), e),
                        secondaryList: (t = {
                            paddingTop: u.base,
                            paddingBottom: y ? "110px" : u.m,
                            borderTop: "1px solid ".concat(r.border1Color),
                            width: eh.WT,
                            position: "fixed",
                            bottom: "0",
                            left: "0",
                            backgroundColor: "rgba(150, 150, 150, 0.06)"
                        }, (0, c.Z)(t, "@media screen and (max-height: ".concat(_ + L + (y ? 50 : 0), "px)"), {
                            position: "relative",
                            height: "calc(100% - ".concat(b * Z, "px)")
                        }), (0, c.Z)(t, i.down("md"), {
                            display: "none"
                        }), t),
                        tab: (n = {
                            padding: 0,
                            opacity: 1,
                            width: eh.WT,
                            textTransform: "none",
                            color: r.text.secondary,
                            display: "flex",
                            flexDirection: "column",
                            minHeight: m.density.base,
                            minWidth: m.density.base,
                            "&:hover": {
                                color: r.text.primary
                            },
                            "& p": {
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }
                        }, (0, c.Z)(n, i.down("md"), {
                            width: eh.J8,
                            "& p": {
                                padding: 0
                            }
                        }), (0, c.Z)(n, i.between("sm", "md"), {
                            margin: "0 ".concat(u.s)
                        }), (0, c.Z)(n, "borderBottom", "3px solid transparent"), (0, c.Z)(n, i.up("md"), {
                            borderBottom: "none",
                            borderLeft: "3px solid transparent"
                        }), n),
                        desktop: (0, c.Z)({}, i.up("md"), {
                            width: "100%",
                            marginBottom: u.base
                        }),
                        mobileMenuTrigger: (0, c.Z)({}, i.up("md"), {
                            "&&": {
                                display: "none"
                            }
                        }),
                        icon: {
                            "&&&": {
                                marginBottom: 0
                            }
                        },
                        tabLabel: {
                            padding: "0 ".concat(u.xs),
                            fontSize: d.size.xs,
                            fontFamily: "".concat(d.family.primary, ", Arial"),
                            lineHeight: d.lineHeight.l,
                            width: "100%",
                            textAlign: "center"
                        },
                        selected: {
                            "&&": (0, c.Z)({
                                color: r.text.primary,
                                borderBottom: "3px solid ".concat(r.text.primary),
                                borderLeft: "none",
                                position: "relative"
                            }, i.up("md"), {
                                borderBottom: "none",
                                borderLeft: "3px solid ".concat(r.text.primary)
                            })
                        }
                    }
                }),
                ez = /^(\/_shutterstock)?\/?(video|music|images)?\/?$/,
                eD = (0, J.NJ)()[0],
                eH = [eD, "/generate"],
                eP = ["/catalog", "/create", "/planning", "/account/plans", "/predict"].concat((0, v.Z)(eH)),
                eR = (0, $.g)(function(e) {
                    return (0, u.jsx)(g.Z, (0, s.Z)((0, l.Z)({}, e), {
                        role: "tab"
                    }))
                }),
                eE = (0, b.ZP)(function(e) {
                    return (0, u.jsx)(m.Z, (0, s.Z)((0, l.Z)({}, e), {
                        role: "tablist"
                    }))
                })(function(e) {
                    var t, n = e.theme,
                        a = n.breakpoints,
                        o = n.spacing;
                    return t = {
                        display: "flex"
                    }, (0, c.Z)(t, a.down("sm"), {
                        padding: o(0, 3),
                        justifyContent: "space-between"
                    }), (0, c.Z)(t, a.between("sm", "md"), {
                        justifyContent: "center"
                    }), (0, c.Z)(t, a.up("md"), {
                        flexDirection: "column"
                    }), t
                }),
                eO = function(e, t, n) {
                    if (n) return "menu";
                    if (ez.test(e)) return "home";
                    var a = t ? "/".concat(e.split("/")[2]) : "/".concat(e.split("/")[1]);
                    return !!eP.includes(a) && a
                },
                eq = function(e) {
                    var t = e.className,
                        n = e.showHeaderBanner,
                        a = (0, ea.D)({
                            namespace: Y.PyX,
                            translationKeys: {
                                generateTooltip: "utility_bar_tooltip_generate",
                                catalogTooltip: "utility_bar_tooltip_catalog",
                                createTooltip: "utility_bar_tooltip_create",
                                predictTooltip: "utility_bar_tooltip_predict",
                                planTooltip: "utility_bar_tooltip_plan"
                            }
                        }),
                        o = a.t,
                        i = a.labels,
                        r = (0, en.$G)(Y.aGO).t,
                        c = (0, V.d)(),
                        s = (0, S.n)().isMobileServer,
                        d = (0, et.useRouter)() || {},
                        m = d.asPath,
                        h = d.pathname,
                        f = void 0 === h ? "" : h,
                        g = (0, p.Z)((0, R.O)("menuDrawerOpen"), 2),
                        b = g[0],
                        k = g[1],
                        y = (0, H.U)().userCanViewPortfolio,
                        x = (0, z.B)(),
                        Z = !((0, ee.s4)({
                            asPath: m,
                            pathname: f
                        }) && x),
                        _ = (0, D.O)().tosStatus,
                        L = (0, N.D)(),
                        w = L.isBrandSstk,
                        j = L.isBrandEnterprise,
                        C = eO(f, w, b),
                        M = !j && (!x || w),
                        $ = (0, P.p)(I.cR, !1),
                        J = (0, P.p)(I.O8, void 0, !1, !0),
                        eo = w || J,
                        ei = (w || j && $) && !(c || s),
                        er = x && !y,
                        ec = eV({
                            isDrawerOpen: !!b,
                            isPageScrollable: Z,
                            primaryNavItemCount: 3 + [M, ei, eo].filter(Boolean).length,
                            secondaryNavItemCount: 1 + [y, er].filter(Boolean).length,
                            isBrandSstk: w,
                            pushBottomUp: !_,
                            showHeaderBanner: n
                        }),
                        el = ec.classes,
                        es = ec.cx,
                        eu = (0, B.useCallback)(function() {
                            k(!1)
                        }, []),
                        ed = "home" === C,
                        ef = (0, B.useMemo)(function() {
                            return (0, u.jsxs)(eR, {
                                component: T.r,
                                href: "/",
                                onClick: eu,
                                "data-automation": "".concat(eh.ub, "_home"),
                                "data-optimize": "UtilityBar_HomeTab",
                                className: es(el.tab, el.desktop, ed && el.selected),
                                clickTrack: "utilityBar.home",
                                "aria-selected": String(ed),
                                children: [(0, u.jsx)(E.S, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("site-footer:home")
                                })]
                            })
                        }, [el.desktop, el.icon, el.selected, el.tab, es, eu, ed, r]),
                        ep = (0, B.useMemo)(function() {
                            return (0, u.jsxs)(eR, {
                                onClick: function() {
                                    return k(!b)
                                },
                                clickTrack: "utilityBar.mobileMenu",
                                "data-automation": "".concat(eh.ub, "_menu"),
                                className: es(el.tab, el.mobileMenuTrigger),
                                children: [(0, u.jsx)(O.v, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("site-header:menu")
                                })]
                            })
                        }, [el.icon, el.mobileMenuTrigger, el.tab, es, b, r]),
                        ev = (0, B.useMemo)(function() {
                            return er && (0, u.jsxs)(eR, {
                                onClick: eu,
                                component: T.r,
                                href: "/account/profile",
                                value: "/profile",
                                "data-automation": "".concat(eh.ub, "_profile"),
                                className: es(el.tab, el.desktop),
                                clickTrack: "utilityBar.profile",
                                children: [(0, u.jsx)(q.B, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("account")
                                })]
                            })
                        }, [el.desktop, el.icon, el.tab, es, eu, er, r]),
                        eg = (0, B.useMemo)(function() {
                            return y && (0, u.jsxs)(eR, {
                                onClick: eu,
                                component: T.r,
                                href: "/account/portfolio",
                                value: "/portfolio",
                                "data-automation": "".concat(eh.ub, "_portfolio"),
                                clickTrack: "utilityBar.portfolio",
                                className: es(el.tab, el.desktop),
                                children: [(0, u.jsx)(q.B, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("ent:menu_item_portfolio")
                                })]
                            })
                        }, [el.desktop, el.icon, el.tab, es, eu, r, y]),
                        eb = (0, B.useMemo)(function() {
                            return (0, u.jsxs)(eR, {
                                "data-automation": "".concat(eh.ub, "_help"),
                                "data-optimize": "UtilityBar_HelpTab",
                                className: es(el.tab, el.desktop),
                                clickTrack: "utilityBar.help",
                                component: j ? "div" : "a",
                                target: "_blank",
                                href: j ? void 0 : "/help",
                                onClick: eu,
                                children: [(0, u.jsx)(G.Question, {
                                    className: el.icon
                                }), w && (0, u.jsx)(F.H, {
                                    text: r("site-footer:help")
                                }), j && (0, u.jsx)(A, {
                                    label: r("site-footer:help"),
                                    isUtilityBar: !0,
                                    clickTrack: "utilityBar.help"
                                })]
                            })
                        }, [el.desktop, el.icon, el.tab, es, j, w, eu, r]),
                        ek = function(e) {
                            return (0, B.useMemo)(function() {
                                return (0, u.jsx)(eF, {
                                    isMobile: c,
                                    isLoggedInUser: x,
                                    tabName: e.tabName,
                                    src: e.src,
                                    altText: e.altText,
                                    tooltipText: (0, u.jsx)(en.cC, {
                                        i18nKey: e.i18nKey,
                                        ns: Y.PyX,
                                        t: o,
                                        components: {
                                            b: (0, u.jsx)("b", {})
                                        }
                                    }),
                                    children: (0, u.jsxs)(u.Fragment, {
                                        children: ["catalog" === e.tabName && (0, u.jsx)(em, {}), (0, u.jsx)(eR, {
                                            component: T.r,
                                            onClick: eu,
                                            href: e.href,
                                            className: es(el.tab, el.desktop, e.selectedClassName && el.selected),
                                            clickTrack: e.clickTrack,
                                            "data-automation": e.dataAutomation,
                                            "aria-selected": String(e.ariaSelected),
                                            "data-tour-stop": e.dataTourStop,
                                            "data-optimize": e.dataOptimize,
                                            children: e.tabChildren
                                        })]
                                    })
                                }, e.uniqueKey)
                            }, [e])
                        },
                        ey = eH.includes(String(C)),
                        ex = "/catalog" === C,
                        eZ = "/create" === C,
                        e_ = "/predict" === C,
                        eL = "/planning" === C,
                        eB = {
                            altText: "Generate",
                            uniqueKey: "a",
                            ariaSelected: ey,
                            clickTrack: "utilityBar.generate",
                            dataAutomation: "".concat(eh.ub, "_generate"),
                            href: eD,
                            i18nKey: i.generateTooltip,
                            selectedClassName: ey,
                            src: "/assets/images/launchpad-tooltips/Generate.gif",
                            tabName: "generate",
                            tabChildren: (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(W.C, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("generate_button")
                                })]
                            })
                        },
                        ew = {
                            altText: "Catalog",
                            uniqueKey: "b",
                            ariaSelected: ex,
                            clickTrack: "utilityBar.catalog",
                            dataAutomation: "".concat(eh.ub, "_catalog"),
                            dataOptimize: "UtilityBar_CatalogTab",
                            href: "/catalog",
                            i18nKey: i.catalogTooltip,
                            selectedClassName: ex,
                            src: "/assets/images/launchpad-tooltips/Catalog.gif",
                            tabName: "catalog",
                            value: "/catalog",
                            tabChildren: (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(U.g, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("catalog")
                                })]
                            })
                        },
                        ej = {
                            altText: "Create",
                            uniqueKey: "c",
                            ariaSelected: eZ,
                            clickTrack: "utilityBar.create",
                            dataAutomation: "".concat(eh.ub, "_create"),
                            dataTourStop: "utility-bar-create",
                            href: "/create/home",
                            i18nKey: i.createTooltip,
                            selectedClassName: eZ,
                            src: "/assets/images/launchpad-tooltips/Create.gif",
                            tabName: "create",
                            tabChildren: (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(X.M, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("create")
                                })]
                            })
                        },
                        eC = {
                            altText: "Predict",
                            uniqueKey: "d",
                            ariaSelected: e_,
                            clickTrack: "utilityBar.predict",
                            dataAutomation: "".concat(eh.ub, "_predict"),
                            href: "/predict",
                            i18nKey: i.predictTooltip,
                            selectedClassName: e_,
                            src: "/assets/images/launchpad-tooltips/Predict.gif",
                            tabName: "predict",
                            tabChildren: (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(K.R, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("predict")
                                })]
                            })
                        },
                        eM = {
                            altText: "Plan",
                            uniqueKey: "e",
                            ariaSelected: eL,
                            clickTrack: "utilityBar.planner",
                            dataAutomation: "".concat(eh.ub, "_planning"),
                            href: "/planning",
                            i18nKey: i.planTooltip,
                            selectedClassName: eL,
                            src: "/assets/images/launchpad-tooltips/Plan.gif",
                            tabName: "plan",
                            tabChildren: (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(Q.Calendar, {
                                    className: el.icon
                                }), (0, u.jsx)(F.H, {
                                    text: r("plan")
                                })]
                            })
                        },
                        eA = (0, v.Z)(eo ? [eB] : []).concat([ew], (0, v.Z)(ei ? [ej] : []), (0, v.Z)(M ? [eC] : []), (0, v.Z)(j ? [] : [eM])).map(function(e) {
                            return (0, u.jsx)(ek, (0, l.Z)({}, e), e.tabName)
                        });
                    return (0, u.jsxs)("div", {
                        className: es(t, el.utilityBar, eh.CD),
                        children: [(0, u.jsxs)(eE, {
                            id: "primaryNavItems",
                            "data-automation": "".concat(eh.ub, "_primary-nav"),
                            children: [ef, eA, ep]
                        }), (0, u.jsxs)(eE, {
                            className: el.secondaryList,
                            children: [ev, eg, eb]
                        })]
                    })
                },
                eG = n(62021),
                eW = n(63040),
                eU = n(41075),
                eX = n(58013),
                eK = n(77251),
                eQ = n(6897),
                e$ = (0, _.ZL)()({
                    root: {
                        background: "none",
                        boxShadow: "none"
                    }
                }),
                eJ = function(e) {
                    var t = (0, eX.Z)({}, (0, eK.Z)(e)),
                        n = e$().classes;
                    return (0, u.jsx)(eQ.Z, (0, l.Z)({
                        classes: {
                            root: n.root
                        }
                    }, t))
                },
                eY = n(61776),
                e0 = n(20932),
                e1 = n(54350),
                e2 = Z()(function() {
                    return Promise.all([n.e(31e3), n.e(96480), n.e(38372), n.e(74927)]).then(n.bind(n, 74927)).then(function(e) {
                        return e.DynamicMenuDrawerContent
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [74927]
                        }
                    },
                    ssr: !1
                }),
                e3 = (0, _.ZL)()(function() {
                    return {
                        fullSize: {
                            top: 0,
                            left: 0,
                            width: "100vw"
                        }
                    }
                }),
                e6 = function(e) {
                    var t = e.isMenuDrawerOpen,
                        n = e.primaryNavLinks,
                        a = e.secondaryNavLinks,
                        o = e.toggleMenuDrawer,
                        i = (0, p.Z)((0, B.useState)(!1), 2),
                        r = i[0],
                        c = i[1],
                        l = e3().classes,
                        s = (0, e1.j)();
                    return (0, B.useEffect)(function() {
                        t && c(!0)
                    }, [t]), (0, u.jsx)(e0.ZP, {
                        classes: {
                            paper: s ? l.fullSize : ""
                        },
                        anchor: s ? "bottom" : "right",
                        onClose: o(!1),
                        open: t,
                        "data-automation": "menu-drawer_drawer",
                        children: r && (0, u.jsx)(e2, {
                            primaryNavLinks: n,
                            secondaryNavLinks: a,
                            toggleMenuDrawer: o,
                            isDamExperience: s
                        })
                    })
                };
            e6.defaultProps = {
                isMenuDrawerOpen: !1
            };
            var e4 = n(66358),
                e7 = n(23490),
                e5 = n(31556),
                e8 = n(84159),
                e9 = n(45728),
                te = n(41273),
                tt = n(6020),
                tn = n(39232),
                ta = [tn.k4, tn.pX, tn.xF, tn.Qp],
                to = function(e) {
                    var t = e.router,
                        n = e.items,
                        a = (0, ee.qw)(t.asPath),
                        o = (0, ee.qz)(t),
                        i = (0, ee.gs)(t),
                        r = (0, ee.Kn)(t),
                        c = "" === (0, ee.oY)(t.pathname) && n.length,
                        l = (0, ee.V7)(t),
                        s = (0, ee.A6)(t),
                        u = (0, ee.RV)(t),
                        d = (l || s || u) && n.length;
                    return r || !(ta.includes(a) || o || i || c || d)
                },
                ti = n(96062),
                tr = function(e) {
                    var t = e.cartIconButtonLabel,
                        n = e.iconButtonRootClass,
                        a = (0, te.k)(),
                        o = (0, et.useRouter)(),
                        i = (0, e9.GH)({
                            fetchFullCart: !0
                        }).data,
                        r = (void 0 === i ? {} : i).items,
                        c = void 0 === r ? [] : r,
                        l = null == c ? void 0 : c.length,
                        s = (0, ti.y)({
                            cartItemsQuantity: l
                        }),
                        d = s.classes,
                        m = s.cx;
                    return to({
                        router: o,
                        items: c
                    }) ? null : (0, u.jsx)(tt.w, {
                        cartIconButtonLabel: t,
                        cartItemsQuantity: l,
                        classesProps: d,
                        cx: m,
                        iconButtonRootClass: n,
                        href: a
                    })
                };
            tr.defaultProps = {
                cartIconButtonLabel: "",
                iconButtonRootClass: ""
            };
            var tc = n(59481),
                tl = n(59979),
                ts = n(34116),
                tu = n(25070),
                td = n(68445),
                tm = function(e) {
                    var t = e.ariaLabels,
                        n = e.rootButtonClass,
                        a = (0, e1.j)(),
                        o = (0, N.D)().isBrandEnterprise,
                        i = (0, z.B)(),
                        r = (0, tl.cM)(),
                        c = (0, P.p)(I.pG),
                        l = "";
                    l = i ? a && (o || c) ? (0, tu.GK)()[0] : (0, td._)()[0] : r;
                    var s = i ? T.r : "a";
                    return (0, u.jsx)(tc.h, {
                        "aria-label": t.collectionsIconButton,
                        classes: {
                            root: n
                        },
                        color: "primary",
                        component: s,
                        href: l,
                        rel: "nofollow",
                        "data-automation": "SiteHeader_CollectionsButton",
                        size: "large",
                        clickTrack: "topNav.collections",
                        children: (0, u.jsx)(ts.Heart, {})
                    })
                },
                th = n(5129),
                tf = n(11181),
                tp = n(65532),
                tv = n(29284),
                tg = {
                    music: "music",
                    video: "video",
                    "royalty-free": "video",
                    image: "image",
                    editorial: "editorial",
                    business: "premier",
                    "sound-effects": "music"
                },
                tb = tg.image,
                tk = function(e) {
                    var t, n, a = e.asPath,
                        o = e.identifiers,
                        i = void 0 === o ? tg : o,
                        r = (void 0 === a ? "" : a).split("/").filter(function(e) {
                            return "_shutterstock" !== e
                        });
                    return r && (t = (0, p.Z)(r, 2)[1]), null !== (n = null == i ? void 0 : i[t]) && void 0 !== n ? n : tb
                },
                ty = n(22939),
                tx = n(25681),
                tZ = n(12112),
                t_ = n(68702),
                tL = n(44015),
                tB = n(69026),
                tw = n(19349),
                tj = n(18348),
                tC = n(58370),
                tM = n(28307);
            n(38398);
            var tA = n(85208),
                tT = "category",
                tF = (0, c.Z)({}, tT, (o = {}, (0, c.Z)(o, tA.Dx, "/".concat(tT)), (0, c.Z)(o, tT, (0, c.Z)({}, tA.Dx, "/".concat(tT, "/[").concat(tT, "]"))), o)),
                tI = n(19004),
                tS = n(90856),
                tN = n(12355),
                tV = (0, c.Z)({}, tA.Sd, "/".concat(tn.Y_)),
                tz = (0, c.Z)({}, tn.ew, (0, c.Z)({}, tA.Dx, "/".concat(tn.ew))),
                tD = n(38204),
                tH = ["da", "es", "fi", "fi", "fr", "hu", "it", "ja", "nl", "pl", "pt", "ru"],
                tP = n(88622),
                tR = n(74680),
                tE = n(57631),
                tO = n(95693),
                tq = n(40094),
                tG = n(21610),
                tW = n(70100),
                tU = n(41895),
                tX = n(76768),
                tK = (0, tX.N)("/assets/images/pricing/image_pricing_plans.png"),
                tQ = (0, tX.N)("/assets/images/pricing/video_pricing_plans.png"),
                t$ = (0, tX.N)("/assets/images/pricing/music_pricing_plans.png"),
                tJ = function(e) {
                    var t = e.withCreateEntrypoints,
                        n = e.isMobile,
                        a = e.t;
                    return [(0, l.Z)({
                        id: "image-pricing",
                        label: a(n ? "site-header:image_pricing" : "account:plans_page_image_plans_heading"),
                        href: t3.default,
                        clickAnalyticsLabel: "".concat(e4.F2B, ".imagePricingPage"),
                        clickTrackOptions: "Image"
                    }, !n && {
                        imgSrc: tK,
                        description: a("pricing_image_description")
                    }), (0, l.Z)({
                        id: "footage-pricing",
                        label: a(n ? "site-header:footage_pricing" : "pricing_video_title"),
                        href: t3.video,
                        clickAnalyticsLabel: "".concat(e4.F2B, ".footagePricingPage"),
                        clickTrackOptions: "Footage"
                    }, !n && {
                        imgSrc: tQ,
                        description: a("pricing_video_description")
                    }), (0, l.Z)({
                        id: "music-pricing",
                        label: a(n ? "site-header:music_pricing" : "account:plans_page_music_plans_heading"),
                        href: t3.music,
                        clickAnalyticsLabel: "".concat(e4.F2B, ".musicPricingPage"),
                        clickTrackOptions: "Music"
                    }, !n && {
                        imgSrc: t$,
                        description: a("pricing_music_description")
                    }), (0, l.Z)({
                        id: "editorial-pricing",
                        label: a(n ? "site-header:editorial_pricing" : "account:plans_page_editorial_plans_heading"),
                        href: t3.editorial,
                        clickAnalyticsLabel: "".concat(e4.F2B, ".editorialPricingPage"),
                        clickTrackOptions: "Editorial"
                    }, !n && {
                        description: a("pricing_editorial_description")
                    })].concat((0, v.Z)(t ? [(0, l.Z)({
                        id: "creative-flow-pricing",
                        label: a("site-header:creative_flow"),
                        href: t3.creativeFlow,
                        clickAnalyticsLabel: "".concat(e4.F2B, ".creativeflowPricingPage"),
                        clickTrackOptions: "Creative Flow"
                    }, !n && {
                        description: a("pricing_dev_api_description")
                    })] : []), [(0, l.Z)({
                        id: "dev-api-pricing",
                        label: a("site-header:dev_api_pricing"),
                        href: t3.devApi,
                        clickAnalyticsLabel: "".concat(e4.F2B, ".devapiPricingPage"),
                        clickTrackOptions: "Dev API"
                    }, !n && {
                        description: a("pricing_dev_api_description")
                    })])
                },
                tY = ["de", "es", "fr", "it", "ja", "ko", "pl", "ru"],
                t0 = ["de", "es", "fr", "pt", "ru"],
                t1 = function(e, t) {
                    return "pt" === t ? "".concat(e, "pt_br/") : "zh" === t ? "".concat(e, "zh_cn/") : tY.includes(t) ? "".concat(e).concat(t, "/") : e
                },
                t2 = function(e, t, n) {
                    var a, o = (a = {}, (0, c.Z)(a, tP.VX, "sstk-top-nav-link"), (0, c.Z)(a, tP.lP, "referral"), (0, c.Z)(a, tP.b3, "shutterstock"), a),
                        i = new URLSearchParams(o);
                    return t0.includes(n) ? "".concat(e, "/").concat(n).concat(t, "?").concat(i) : "".concat(e).concat(t, "?").concat(i)
                },
                t3 = {
                    editorial: "/pricing/editorial",
                    video: "/pricing/video",
                    music: "/pricing/music",
                    devApi: "/api/pricing",
                    creativeFlow: "/pricing/creative-flow",
                    default: "/pricing"
                },
                t6 = (i = {}, (0, c.Z)(i, tf.BRANDS.SSTK, {
                    getLinks: function(e) {
                        var t = e.t,
                            n = e.language,
                            a = e.siteIdentifier,
                            o = e.withCreateEntrypoints,
                            i = e.with3DObjects,
                            r = e.isMobile,
                            c = {
                                id: "templates",
                                IconComponent: tR.Templates,
                                label: t("common:links_templates"),
                                labelMobile: t("common:links_templates"),
                                href: "/templates",
                                icon: "templates",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".templates"),
                                dataOptimize: "top-nav-templates",
                                subMenuLinks: [{
                                    id: "templates-home",
                                    label: t("site-header:templates_home"),
                                    href: "/templates",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".templates-home")
                                }, {
                                    id: "social-media",
                                    label: t("social-media"),
                                    href: "/templates/instagram",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".templates-social-media"),
                                    subMenuLinks: [{
                                        id: "instagram",
                                        label: "Instagram",
                                        href: "/templates/instagram",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".instagram"),
                                        subMenuLinks: [{
                                            id: "instagram-all",
                                            label: t("instagram-all"),
                                            href: "/templates/instagram",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".instagram-home")
                                        }, {
                                            id: "instagram-posts",
                                            label: t("posts"),
                                            href: "/templates/instagram-posts",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".instagram-post")
                                        }, {
                                            id: "instagram-profiles",
                                            label: t("profiles"),
                                            href: "/templates/instagram-profiles",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".instagram-profiles")
                                        }, {
                                            id: "instagram-story",
                                            label: t("story"),
                                            href: "/templates/instagram-story",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".instagram-story")
                                        }, {
                                            id: "instagram-highlight-covers",
                                            label: t("highlight-covers"),
                                            href: "/templates/instagram-highlight-covers",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".instagram-highlightCovers")
                                        }]
                                    }, {
                                        id: "facebook",
                                        label: "Facebook",
                                        href: "/templates/facebook",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".facebook"),
                                        subMenuLinks: [{
                                            id: "facebook-all",
                                            label: t("facebook-all"),
                                            href: "/templates/facebook",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-home")
                                        }, {
                                            id: "facebook-ads",
                                            label: t("ads"),
                                            href: "/templates/facebook-ads",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-ads")
                                        }, {
                                            id: "facebook-carousel-ads",
                                            label: t("carousel-ads"),
                                            href: "/templates/facebook-carousel-ads",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-carouselAds")
                                        }, {
                                            id: "facebook-cover-photos",
                                            label: t("cover-photos"),
                                            href: "/templates/facebook-cover-photos",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-coverPhotos")
                                        }, {
                                            id: "facebook-event-covers",
                                            label: t("event-covers"),
                                            href: "/templates/facebook-event-covers",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-eventCovers")
                                        }, {
                                            id: "facebook-posts",
                                            label: t("posts"),
                                            href: "/templates/facebook-posts",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-posts")
                                        }, {
                                            id: "facebook-shop",
                                            label: t("shop"),
                                            href: "/templates/facebook-shop",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-shop")
                                        }, {
                                            id: "facebook-story",
                                            label: t("story"),
                                            href: "/templates/facebook-story",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".facebook-story")
                                        }]
                                    }, {
                                        id: "youtube",
                                        label: "YouTube",
                                        href: "/templates/youtube",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".youtube"),
                                        subMenuLinks: [{
                                            id: "youtube-all",
                                            label: t("youtube-all"),
                                            href: "/templates/youtube",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".youtube-home")
                                        }, {
                                            id: "youtube-thumbnails",
                                            label: t("thumbnails"),
                                            href: "/templates/youtube-thumbnails",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".youtube-thumbnails")
                                        }, {
                                            id: "youtube-channel-art",
                                            label: t("channel-art"),
                                            href: "/templates/youtube-channel-art",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".youtube-channel-art")
                                        }]
                                    }, {
                                        id: "linkedin",
                                        label: "Linkedin",
                                        href: "/templates/linkedin-covers",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".linkedin")
                                    }, {
                                        id: "etsy",
                                        label: "Etsy",
                                        href: "/templates/etsy",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".etsy"),
                                        subMenuLinks: [{
                                            id: "etsy-all",
                                            label: t("etsy-all"),
                                            href: "/templates/etsy",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".etsy-home")
                                        }, {
                                            id: "etsy-big-banner",
                                            label: t("etsy-big-banner"),
                                            href: "/templates/etsy-big-banner",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".etsy-big-banner")
                                        }, {
                                            id: "etsy-mini-banner",
                                            label: t("etsy-mini-banner"),
                                            href: "/templates/etsy-mini-banner",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".etsy-mini-banner")
                                        }, {
                                            id: "etsy-shop-icon",
                                            label: t("etsy-shop-icon"),
                                            href: "/templates/etsy-shop-icon",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".etsy-shop-icon")
                                        }]
                                    }, {
                                        id: "pinterest",
                                        label: "Pinterest",
                                        href: "/templates/pinterest",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".pinterest"),
                                        subMenuLinks: [{
                                            id: "pinterest-all",
                                            label: t("pinterest-all"),
                                            href: "/templates/pinterest",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".pinterest-home")
                                        }, {
                                            id: "pinterest-pins",
                                            label: t("pinterest-pins"),
                                            href: "/templates/pinterest-pins",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".pinterest-pins")
                                        }]
                                    }, {
                                        id: "twitter",
                                        label: "Twitter",
                                        href: "/templates/twitter",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".twitter"),
                                        subMenuLinks: [{
                                            id: "twitter-all",
                                            label: t("twitter-all"),
                                            href: "/templates/twitter",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".twitter-home")
                                        }, {
                                            id: "twitter-banner",
                                            label: t("common:links_templates_twitter_banner"),
                                            href: "/templates/twitter-banner",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".twitter-banner")
                                        }]
                                    }]
                                }, {
                                    id: "business",
                                    label: t("audience:business"),
                                    href: "/templates/flyers-infographics",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".templates-business"),
                                    subMenuLinks: [{
                                        id: "business-email",
                                        label: t("email"),
                                        href: "/templates/email",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".business-email")
                                    }, {
                                        id: "business-infographics",
                                        label: t("infographics"),
                                        href: "/templates/flyers-infographics",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".business-infographics")
                                    }, {
                                        id: "business-labels",
                                        label: t("labels"),
                                        href: "/templates/labels",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".business-labels")
                                    }, {
                                        id: "business-letterhead",
                                        label: t("letterhead"),
                                        href: "/templates/letterhead",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".business-letterhead")
                                    }, {
                                        id: "business-zoom-backgrounds",
                                        label: t("site-header:zoom_backgrounds"),
                                        href: "/templates/zoom-backgrounds",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".business-zoom-backgrounds")
                                    }]
                                }, {
                                    id: "marketing",
                                    label: t("marketing"),
                                    href: "/templates/ads",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".templates-marketing"),
                                    subMenuLinks: [{
                                        id: "marketing-ads",
                                        label: t("ads"),
                                        href: "/templates/ads",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-ads")
                                    }, {
                                        id: "marketing-announcements",
                                        label: t("announcements"),
                                        href: "/templates/announcements",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-announcements")
                                    }, {
                                        id: "marketing-banners",
                                        label: t("banners"),
                                        href: "/templates/banners",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-banners")
                                    }, {
                                        id: "marketing-certificates",
                                        label: t("certificates"),
                                        href: "/templates/certificates",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-certificates"),
                                        subMenuLinks: [{
                                            id: "marketing-certificates-certificates",
                                            label: t("certificates"),
                                            href: "/templates/certificates",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-certificates-home")
                                        }, {
                                            id: "marketing-certificates-gift-certificates",
                                            label: t("gift-certificates"),
                                            href: "/templates/gift-certificates",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-certificates-gift-certificates")
                                        }]
                                    }, {
                                        id: "marketing-flyers",
                                        label: t("flyers"),
                                        href: "/templates/flyers",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-flyers"),
                                        subMenuLinks: [{
                                            id: "marketing-flyers-all",
                                            label: t("flyers-all"),
                                            href: "/templates/flyers",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-flyers-home")
                                        }, {
                                            id: "marketing-flyers-real-estate",
                                            label: t("real-estate-flyer"),
                                            href: "/templates/flyers-real-estate",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-flyers-real-estate")
                                        }]
                                    }, {
                                        id: "marketing-logos",
                                        label: t("site-header:logos"),
                                        href: "/templates/logos",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-logos")
                                    }, {
                                        id: "marketing-posters",
                                        label: t("posters"),
                                        href: "/templates/posters",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-posters")
                                    }, {
                                        id: "marketing-travel-brochures",
                                        label: t("travel-brochures"),
                                        href: "/templates/travel-brochures",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".marketing-travel-brochures")
                                    }]
                                }, {
                                    id: "cards-and-invitations",
                                    label: t("cards-invitations"),
                                    href: "/templates/cards",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".templates-cards-and-invitations"),
                                    subMenuLinks: [{
                                        id: "cards-and-invitations-cards",
                                        label: t("site-header:cards"),
                                        href: "/templates/cards",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-cards"),
                                        subMenuLinks: [{
                                            id: "cards-and-invitations-anniversary-cards",
                                            label: t("cards-anniversary"),
                                            href: "/templates/cards-anniversary",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-anniversary-cards")
                                        }, {
                                            id: "cards-and-invitations-baby-shower-cards",
                                            label: t("cards-baby-shower"),
                                            href: "/templates/cards-baby-shower",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-baby-shower-cards")
                                        }, {
                                            id: "cards-and-invitations-christmas-cards",
                                            label: t("christmas-cards"),
                                            href: "/templates/card-christmas",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-christmas-cards")
                                        }, {
                                            id: "cards-and-invitations-easter-cards",
                                            label: t("easter-cards"),
                                            href: "/templates/cards-easter",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-easter-cards")
                                        }, {
                                            id: "cards-and-invitations-cards-mothers-day",
                                            label: t("mothers-day-cards"),
                                            href: "/templates/cards-mothers-day",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-cards-mothers-day")
                                        }, {
                                            id: "cards-and-invitations-cards-photo",
                                            label: t("cards-photo"),
                                            href: "/templates/cards-photo",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-cards-photo")
                                        }, {
                                            id: "cards-and-invitations-cards-thanksgiving",
                                            label: t("cards-thanksgiving"),
                                            href: "/templates/cards-thanksgiving",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-cards-thanksgiving")
                                        }, {
                                            id: "cards-and-invitations-cards-wedding",
                                            label: t("cards-wedding"),
                                            href: "/templates/cards-wedding",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-cards-wedding")
                                        }]
                                    }, {
                                        id: "cards-and-invitations-invitations",
                                        label: t("site-header:invitations"),
                                        href: "/templates/invitations",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-invitations"),
                                        subMenuLinks: [{
                                            id: "cards-and-invitations-invitations-all",
                                            label: t("invitations-all"),
                                            href: "/templates/invitations",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-invitations-home")
                                        }, {
                                            id: "cards-and-invitations-party-invitations",
                                            label: t("party-invitations"),
                                            href: "/templates/invitations-party",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-party-invitations")
                                        }, {
                                            id: "cards-and-invitations-wedding-invitations",
                                            label: t("wedding-invitations"),
                                            href: "/templates/invitations-wedding",
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".cards-and-invitations-wedding-invitations")
                                        }]
                                    }]
                                }, {
                                    id: "personal",
                                    label: t("personal"),
                                    href: "/templates/calendars",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".templates-personal"),
                                    subMenuLinks: [{
                                        id: "personal-book-covers",
                                        label: t("book-covers"),
                                        href: "/templates/book-covers",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".personal-book-covers")
                                    }, {
                                        id: "personal-calendars",
                                        label: t("calendars"),
                                        href: "/templates/calendars",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".personal-calendars")
                                    }, {
                                        id: "personal-planners",
                                        label: t("planners"),
                                        href: "/templates/planners",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".personal-planners")
                                    }, {
                                        id: "personal-resume",
                                        label: t("resume"),
                                        href: "/templates/resumes",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".personal-resume")
                                    }, {
                                        id: "personal-schedule",
                                        label: t("schedules"),
                                        href: "/templates/schedules",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".personal-schedule")
                                    }]
                                }]
                            },
                            u = tH.includes(n);
                        return {
                            primaryNavLinks: [{
                                id: "images",
                                IconComponent: tE.AllImages,
                                primarySpacing: !0,
                                href: "/images",
                                label: t("common:links_images"),
                                labelMobile: t("common:links_images"),
                                icon: "all-images",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".images"),
                                dataOptimize: "top-nav-images",
                                subMenuLinks: [{
                                    id: "images-home",
                                    label: t("site-header:images_home"),
                                    href: "/images",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images")
                                }, {
                                    id: "curated-collections",
                                    label: t("site-header:curated_collections"),
                                    href: "/featured-collections",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".curated-collections")
                                }, {
                                    id: "photos",
                                    label: t("common:links_photos"),
                                    href: "/photos",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images-photos")
                                }].concat((0, v.Z)(void 0 !== i && i ? [{
                                    id: "3d-objects",
                                    label: t("site-header:3d-objects"),
                                    href: "/3d-objects",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".3d-objects")
                                }] : []), [{
                                    id: "vectors",
                                    label: t("common:links_vectors"),
                                    href: "/vectors",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images-vectors")
                                }, {
                                    id: "ai-image-generator",
                                    label: t("ai-image-generator"),
                                    href: "/ai-image-generator",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images-generator")
                                }, {
                                    id: "offset-images",
                                    label: t("site-header:offset_images"),
                                    href: "/offset",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".offset-images")
                                }, {
                                    id: "image-categories",
                                    label: t("common:links_categories"),
                                    href: "/explore/royalty-free-images",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images-categories"),
                                    subMenuCols: u ? 2 : 3,
                                    subMenuLinks: (0, v.Z)(tU.BH.map(function(e) {
                                        return (0, s.Z)((0, l.Z)({}, e), {
                                            href: e.to,
                                            label: t(e.label),
                                            id: e.key,
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".").concat(e.key)
                                        })
                                    })).concat([{
                                        id: "all-categories",
                                        label: t("common:links_all_categories"),
                                        href: "/explore/royalty-free-images",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".images-all-categories")
                                    }])
                                }])
                            }, {
                                id: "footage",
                                IconComponent: tO.Video,
                                label: t("common:links_footage"),
                                labelMobile: t("common:links_footage"),
                                href: "/video",
                                icon: "video",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".video"),
                                dataOptimize: "top-nav-footage",
                                subMenuLinks: [{
                                    id: "footage-home",
                                    label: t("site-header:footage_home"),
                                    href: "/video",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video")
                                }].concat((0, v.Z)(r ? [] : [{
                                    id: "footage-pond5-home",
                                    label: t("site-header:footage_pond5_home"),
                                    href: t2("https://www.pond5.com", "/stock-footage", n),
                                    target: "_blank",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".pond5")
                                }]), [{
                                    id: "editorial-video",
                                    label: t("ent:editorial_video"),
                                    href: "/video/editorial/search",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-video")
                                }, {
                                    id: "directors-choice",
                                    label: t("common:links_curated_collections"),
                                    href: "/video/featured",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video-directorsChoice")
                                }, {
                                    id: "footage-select-home",
                                    label: t("common:links_footage_select_home"),
                                    href: "/video/select",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video-select-home")
                                }, {
                                    id: "footage-elements-home",
                                    label: t("common:links_footage_elements_homepage"),
                                    href: "/video/elements",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video-elements-home")
                                }, {
                                    id: "footage-categories",
                                    label: t("common:links_categories"),
                                    href: "/royalty-free/video-categories",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video-categories"),
                                    subMenuCols: u ? 2 : 3,
                                    subMenuLinks: (0, v.Z)(tU.Rk.map(function(e) {
                                        return (0, s.Z)((0, l.Z)({}, e), {
                                            href: e.to,
                                            label: t(e.label),
                                            id: e.key,
                                            clickAnalyticsLabel: "".concat(e4.F2B, ".").concat(e.key)
                                        })
                                    })).concat([{
                                        id: "all-categories",
                                        label: t("common:links_all_categories"),
                                        href: "/royalty-free/video-categories",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".video-all-categories")
                                    }])
                                }])
                            }, {
                                id: "music",
                                IconComponent: t_.Music,
                                label: t("common:links_music"),
                                labelMobile: t("common:links_music"),
                                icon: "music",
                                href: "/music",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".music"),
                                dataOptimize: "top-nav-music",
                                subMenuLinks: [{
                                    id: "music-home",
                                    label: t("site-header:music_home"),
                                    href: "/music",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".music")
                                }, {
                                    id: "premiumbeat",
                                    label: t("site-header:premiumbeat"),
                                    href: "https://www.premiumbeat.com",
                                    target: "_blank",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".premiumbeat")
                                }, {
                                    id: "sfx",
                                    IconComponent: tL.SoundEffects,
                                    label: t("site-header:sfx_home"),
                                    labelMobile: t("site-header:sfx_home"),
                                    icon: "sound-effects",
                                    href: "/sound-effects",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".sfx"),
                                    dataOptimize: "top-nav-sound-effects"
                                }]
                            }, (0, s.Z)((0, l.Z)({}, c), {
                                hideLgCustomDown: !0
                            }), {
                                id: "editorial",
                                IconComponent: tx.Editorial,
                                label: t("common:links_editorial"),
                                labelMobile: t("common:links_editorial"),
                                icon: "editorial",
                                href: "/editorial",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".editorial"),
                                dataOptimize: "top-nav-editorial",
                                subMenuLinks: [{
                                    id: "editorial-home",
                                    label: t("site-header:editorial_home"),
                                    href: "/editorial",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-home")
                                }, {
                                    id: "editorial-video",
                                    label: t("ent:editorial_video"),
                                    href: "/editorial/video/search",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-video")
                                }, {
                                    id: "entertainment",
                                    label: t("common:links_entertainment"),
                                    href: "/editorial/entertainment",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-entertainment")
                                }, {
                                    id: "news",
                                    label: t("common:links_news"),
                                    href: "/editorial/news",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-news")
                                }, {
                                    id: "royalty",
                                    label: t("common:links_royalty"),
                                    href: "/editorial/royalty",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-royalty")
                                }, {
                                    id: "sports",
                                    label: t("common:links_sports"),
                                    href: "/editorial/sports",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-sports")
                                }]
                            }, {
                                id: "3dmodels",
                                IconComponent: tq.ThreeD,
                                label: t("common:links_3dmodels"),
                                labelMobile: t("common:links_3dmodels"),
                                icon: "threed",
                                target: "_blank",
                                href: t1("https://www.turbosquid.com/", n),
                                clickAnalyticsLabel: "".concat(e4.F2B, ".3dModels"),
                                hideLgDown: !0,
                                hideLgCustomDown: u,
                                doInfix: !1,
                                dataOptimize: "top-nav-3dmodels",
                                subMenuLinks: [{
                                    id: "3dmodels-turbosquid",
                                    label: t("site-header:3dmodels_turbosquid_home"),
                                    href: t1("https://www.turbosquid.com/", n),
                                    target: "_blank",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".turboSquid"),
                                    doInfix: !1
                                }, {
                                    id: "3dmodels-pixelsquid",
                                    label: t("site-header:3dmodels_pixelsquid"),
                                    href: "https://www.pixelsquid.com",
                                    target: "_blank",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".pixelSquid"),
                                    doInfix: !1
                                }]
                            }, {
                                id: "creative-flow",
                                IconComponent: X.M,
                                label: t("common:links_creative_flow"),
                                labelMobile: t("common:links_creative_flow"),
                                href: "/creative-flow",
                                icon: "editor",
                                hideLgDown: !0,
                                hideLgCustomDown: u,
                                clickAnalyticsLabel: "".concat(e4.F2B, ".tools-creativeFlow"),
                                dataOptimize: "top-nav-creative-flow",
                                subMenuLinks: [{
                                    id: "about-creative-flow",
                                    label: t("common:links_about_creative_flow"),
                                    href: "/creative-flow",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-about")
                                }].concat((0, v.Z)(o ? [{
                                    id: "create",
                                    label: t("common:links_create_editor"),
                                    href: "/create/home",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-create")
                                }] : []), [{
                                    id: "catalog",
                                    label: t("catalog"),
                                    href: "/catalog",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-catalog")
                                }, {
                                    id: "predict",
                                    label: t("predict"),
                                    href: "/predict",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-predict")
                                }, {
                                    id: "content-calendar",
                                    label: t("common:links_content_calendar"),
                                    href: "/planning",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-plan")
                                }, {
                                    id: "design-tools",
                                    label: t("common:links_design_tools"),
                                    href: "/image-resizer",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-designTools"),
                                    subMenuLinks: [{
                                        id: "photo-editor",
                                        label: t("site-header:photo_editor"),
                                        href: "https://sstk.shutterstock.com/explore/photo-editor",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-photoEditor")
                                    }, {
                                        id: "background-remover",
                                        label: t("site-header:background_remover"),
                                        href: "/explore/background-remover",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-backgroundRemover")
                                    }, {
                                        id: "collage-maker",
                                        label: t("site-header:collage_maker"),
                                        href: "/explore/collage-maker",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-collageMaker")
                                    }, {
                                        id: "crop-images",
                                        label: t("crop_image"),
                                        href: "/explore/crop-images",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".cropImage")
                                    }, {
                                        id: "image-resizer",
                                        label: t("site-header:image_resizer"),
                                        href: "/image-resizer",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-imageResizer")
                                    }, {
                                        id: "color-palettes",
                                        label: t("common:links_color_palettes"),
                                        href: "/colors",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-colorPalettes")
                                    }, {
                                        id: "color-palette-generator",
                                        label: t("color_palette_generator"),
                                        href: "/colors/color-palette-generator",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-colorPaletteGenerator")
                                    }, {
                                        id: "image-converter",
                                        label: t("common:links_image_converter"),
                                        href: "/file-converter",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-imageConverter")
                                    }].concat((0, v.Z)(o ? [] : [{
                                        id: "editor",
                                        label: t("common:links_editor"),
                                        href: "/editor",
                                        clickAnalyticsLabel: "".concat(e4.F2B, ".tools-shutterstock-editor")
                                    }]))
                                }])
                            }].concat((0, v.Z)("en" === n ? [{
                                id: "blog",
                                IconComponent: tG.Blog,
                                label: t("common:links_blog"),
                                labelMobile: t("common:links_blog"),
                                icon: "blog",
                                hideLgDown: !0,
                                href: "/blog",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".blog-home"),
                                dataOptimize: "top-nav-blog",
                                subMenuLinks: [{
                                    id: "blog-home",
                                    label: t("site-header:blog_home"),
                                    href: "/blog",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".blog-home")
                                }, {
                                    id: "design",
                                    label: t("site-header:design"),
                                    href: "/blog/design",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".blog-design"),
                                    doInfix: !1
                                }, {
                                    id: "video-production",
                                    label: t("site-header:video"),
                                    href: "/blog/video-production",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".blog-videoProduction"),
                                    doInfix: !1
                                }, {
                                    id: "contributor",
                                    label: t("site-header:contributor"),
                                    href: "/blog/contributors",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".blog-contributor"),
                                    doInfix: !1
                                }, {
                                    id: "news",
                                    label: t("common:links_news"),
                                    href: "/blog/news",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".blog-news"),
                                    doInfix: !1
                                }, {
                                    id: "premiumbeat-blog",
                                    label: t("site-header:premiumbeat-blog"),
                                    href: "https://www.premiumbeat.com/blog",
                                    target: "_blank",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".premiumbeat-blog"),
                                    doInfix: !1
                                }]
                            }] : []), [{
                                id: "enterprise",
                                IconComponent: tW.Team,
                                label: t("site-header:enterprise"),
                                labelMobile: t("site-header:enterprise"),
                                icon: "team",
                                hideLgDown: !0,
                                href: "/business",
                                clickAnalyticsLabel: "".concat(e4.F2B, ".enterprise"),
                                hasLeftDivider: !0,
                                target: "_blank",
                                dataOptimize: "top-nav-enterprise"
                            }]),
                            secondaryNavLinks: [{
                                id: "pricing",
                                label: t("site-header:pricing"),
                                labelMobile: t("site-header:pricing"),
                                href: t3[a] || t3.default,
                                showOnlyForHasNoPlan: !0,
                                clickAnalyticsLabel: "".concat(e4.F2B, ".pricingPage"),
                                hasMobileDivider: !0,
                                dataOptimize: "top-nav-pricing",
                                subMenuLinks: tJ({
                                    withCreateEntrypoints: o,
                                    isMobile: r,
                                    t: t
                                })
                            }],
                            contactUs: {
                                label: t("site-header:contact_us")
                            },
                            labels: {
                                menuCta: t("site-header:menu"),
                                logoIconButton: t("site-header:icon_logo"),
                                cartIconButton: t("footage:conversion_panel_cart"),
                                loggedInButtons: {
                                    collectionsIconButton: t("site-header:collections"),
                                    profileIconButton: t("ent:user_profile")
                                }
                            }
                        }
                    },
                    namespace: Y.Go4
                }), (0, c.Z)(i, tf.BRANDS.ENTERPRISE, {
                    getLinks: function(e) {
                        var t = e.t,
                            n = e.withGenerateAccess,
                            a = e.withCreateEntrypoints,
                            o = e.language,
                            i = (0, p.Z)((0, tj.dg)(), 2),
                            r = i[0],
                            c = i[1],
                            l = (0, p.Z)((0, tC.ii)(), 2),
                            s = l[0],
                            u = l[1],
                            d = (0, p.Z)((0, tj.wH)(), 2),
                            m = d[0],
                            h = d[1],
                            f = (0, p.Z)((0, tj.Sf)(), 2),
                            g = f[0],
                            b = f[1],
                            k = (0, p.Z)((0, tM.iG)(), 2),
                            y = k[0],
                            x = k[1],
                            Z = (0, p.Z)((0, tM.oR)(), 2),
                            _ = Z[0],
                            L = Z[1],
                            B = (0, p.Z)([tF[tT][tA.Dx], tF[tT][tA.Dx]], 2),
                            w = B[0],
                            j = B[1],
                            C = (0, p.Z)((0, tI.$F)(), 2),
                            M = C[0],
                            A = C[1],
                            T = (0, p.Z)((0, tS.EZ)(), 2),
                            F = T[0],
                            I = T[1],
                            S = (0, p.Z)((0, tN.b)(), 2),
                            N = S[0],
                            V = S[1],
                            z = (0, p.Z)([tV[tA.Sd], tV[tA.Sd]], 2),
                            D = z[0],
                            H = z[1],
                            P = (0, p.Z)([tz[tn.ew][tA.Dx], tz[tn.ew][tA.Dx]], 2),
                            R = P[0],
                            E = P[1],
                            O = (0, p.Z)((0, tI.$F)({
                                title: null,
                                id: null,
                                assetType: tn.pX
                            }), 2),
                            q = O[0],
                            G = O[1],
                            W = (0, tD.Qd)(),
                            U = (0, tD.YT)(),
                            K = tH.includes(o);
                        return {
                            primaryNavLinks: [{
                                clickAnalyticsLabel: "".concat(e4.F2B, ".images"),
                                IconComponent: ty.Photos,
                                href: D,
                                label: t("common:links_images"),
                                labelMobile: t("common:links_images"),
                                subMenuLinks: [{
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images"),
                                    linkAs: H,
                                    href: D,
                                    label: t("site-header:images_home")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".curated-collections"),
                                    linkAs: A,
                                    href: M,
                                    label: t("common:links_curated_collections")
                                }].concat((0, v.Z)(n ? [{
                                    label: t("ai-image-generator"),
                                    href: "/ai-image-generator",
                                    linkAs: "/ai-image-generator",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images-generator")
                                }] : []), [{
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".offset-images"),
                                    linkAs: E,
                                    href: R,
                                    label: t("site-header:offset_images")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".images-categories"),
                                    linkAs: j,
                                    href: w,
                                    label: t("common:links_categories")
                                }])
                            }, {
                                clickAnalyticsLabel: "".concat(e4.F2B, ".editorial"),
                                IconComponent: tx.Editorial,
                                href: r,
                                label: t("common:links_editorial"),
                                labelMobile: t("common:links_editorial"),
                                subMenuLinks: [{
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-home"),
                                    linkAs: c,
                                    href: r,
                                    label: t("site-header:editorial_home")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-video"),
                                    linkAs: u,
                                    href: s,
                                    label: t("ent:editorial_video")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-livefeed"),
                                    linkAs: b,
                                    href: g,
                                    label: t("ent:live_feed_title")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-compilation"),
                                    linkAs: h,
                                    href: m,
                                    label: t("ent:compilations")
                                }]
                            }, {
                                clickAnalyticsLabel: "".concat(e4.F2B, ".video"),
                                IconComponent: tZ.VideoCamera,
                                href: y,
                                label: t("site-header:video"),
                                labelMobile: t("site-header:video"),
                                subMenuLinks: [{
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video"),
                                    linkAs: x,
                                    href: y,
                                    label: t("site-header:video_home")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video-directorsChoice"),
                                    linkAs: G,
                                    href: q,
                                    label: t("common:links_curated_collections")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".video-select-home"),
                                    linkAs: L,
                                    href: _,
                                    label: t("common:links_footage_select_home")
                                }, {
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".editorial-video"),
                                    linkAs: u,
                                    href: s,
                                    label: t("ent:editorial_video")
                                }]
                            }, {
                                clickAnalyticsLabel: "".concat(e4.F2B, ".music"),
                                linkAs: I,
                                href: F,
                                IconComponent: t_.Music,
                                label: t("common:links_music"),
                                labelMobile: t("common:links_music"),
                                subMenuLinks: [{
                                    id: "music-home",
                                    label: t("site-header:music_home"),
                                    labelMobile: t("site-header:music_home"),
                                    linkAs: I,
                                    href: F,
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".music")
                                }, {
                                    id: "sfx",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".sfx"),
                                    href: N,
                                    linkAs: V,
                                    IconComponent: tL.SoundEffects,
                                    label: t("sound_effects_home"),
                                    labelMobile: t("sound_effects_home")
                                }]
                            }, {
                                clickAnalyticsLabel: "".concat(e4.F2B, ".custom").concat("Legacy"),
                                href: W,
                                IconComponent: tB.Edit,
                                isAbsoluteUrl: !1,
                                isCoreUrl: !0,
                                label: t("ent:studios_capitalized"),
                                labelMobile: t("site-footer:custom")
                            }, {
                                id: "creative-flow",
                                IconComponent: X.M,
                                label: t("common:links_creative_flow"),
                                labelMobile: t("common:links_creative_flow"),
                                href: "/creative-flow",
                                icon: "editor",
                                hideLgDown: !0,
                                hideLgCustomDown: K,
                                clickAnalyticsLabel: "".concat(e4.F2B, ".tools-creativeFlow"),
                                dataOptimize: "top-nav-creative-flow",
                                subMenuLinks: [{
                                    id: "about-creative-flow",
                                    label: t("".concat(Y.Go4, "::common:links_about_creative_flow")),
                                    href: "/creative-flow",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-about")
                                }].concat((0, v.Z)(a ? [{
                                    id: "create",
                                    label: t("".concat(Y.Go4, "::common:links_create_editor")),
                                    href: "/create/home",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-create")
                                }] : []), [{
                                    id: "catalog",
                                    label: t("catalog"),
                                    href: "/catalog",
                                    clickAnalyticsLabel: "".concat(e4.F2B, ".tools-catalog")
                                }])
                            }, {
                                clickAnalyticsLabel: "".concat(e4.F2B, ".blog"),
                                href: U,
                                IconComponent: tw.r,
                                isAbsoluteUrl: !0,
                                isCoreUrl: !0,
                                label: t("common:links_blog"),
                                labelMobile: t("common:links_blog")
                            }],
                            secondaryNavLinks: [],
                            contactUs: {
                                label: t("site-header:contact_us")
                            },
                            labels: {
                                menuCta: t("site-header:menu"),
                                logoIconButton: t("ent:logo_enterprise"),
                                cartIconButton: t("footage:conversion_panel_cart"),
                                loggedInButtons: {
                                    collectionsIconButton: t("site-header:collections"),
                                    profileIconButton: t("ent:user_profile")
                                }
                            }
                        }
                    },
                    namespace: Y.aGO
                }), i),
                t4 = t6[tf.BRANDS.SSTK],
                t7 = function() {
                    var e = (0, N.D)(),
                        t = e.brand,
                        n = e.isBrandSstk,
                        a = e.isBrandEnterprise,
                        o = t6[t] || t4,
                        i = o.namespace,
                        r = o.getLinks,
                        c = (0, en.$G)(i).t,
                        l = (0, tp.PE)().locale,
                        s = tk({
                            asPath: (0, et.useRouter)().asPath
                        }),
                        u = (0, P.p)(I.Si, !1, !1, !0),
                        d = (0, V.d)(),
                        m = (0, S.n)().isMobileServer,
                        h = n ? I.Y$ : I.pO,
                        f = (0, P.p)(h, !1, !1, !0),
                        p = (0, tv.d)().hasAccess;
                    return (0, B.useMemo)(function() {
                        return r({
                            language: l,
                            siteIdentifier: s,
                            t: c,
                            with3DObjects: f,
                            withCreateEntrypoints: Boolean(u && (n || a) && !(d && m)),
                            withGenerateAccess: n || p,
                            isMobile: d
                        })
                    }, [r, l, s, c, f, u, n, a, d, m, p])
                },
                t5 = n(65072),
                t8 = n(93087),
                t9 = n(14568),
                ne = function(e) {
                    var t = e.buttonClass,
                        n = e.size,
                        a = e.onClick,
                        o = (0, ev.Z)(e, ["buttonClass", "size", "onClick"]),
                        i = (0, en.$G)(Y.aGO).t;
                    return (0, u.jsx)(y.z, (0, s.Z)((0, l.Z)({
                        className: t,
                        component: "a",
                        "data-automation": "loginButton",
                        labelTrack: "logIn",
                        role: "link",
                        size: n,
                        variant: "outlined",
                        rel: "nofollow",
                        onClick: a
                    }, o), {
                        children: i("auth:login_form_log_in")
                    }))
                },
                nt = n(10821),
                nn = n(21370),
                na = function(e) {
                    var t = e.buttonClass,
                        n = e.size,
                        a = e.color,
                        o = (0, en.$G)(Y.aGO).t,
                        i = (0, nn._)().href;
                    return (0, u.jsx)(y.z, {
                        role: "link",
                        size: void 0 === n ? "" : n,
                        href: i,
                        component: "a",
                        className: void 0 === t ? "" : t,
                        "data-automation": "freeTrialButton",
                        variant: "contained",
                        rel: "nofollow",
                        labelTrack: "freeTrial",
                        color: a,
                        children: o("site-header:free_trial")
                    })
                },
                no = (0, _.ZL)()(function(e) {
                    var t = e.palette.secondary,
                        n = e.tokens,
                        a = n.fontSize,
                        o = n.color,
                        i = n.border,
                        r = n.lineHeight,
                        c = n.spacing;
                    return {
                        actionHover: {
                            "&:hover": {
                                background: t.main,
                                color: t.contrastText,
                                borderColor: t.main
                            }
                        },
                        contained: {
                            backgroundColor: o.gray["onyx-12"],
                            color: o.gray["onyx-60"],
                            fontSize: a.s
                        },
                        outlined: {
                            borderColor: o.gray["onyx-12"],
                            color: o.gray["onyx-60"],
                            fontSize: a.s
                        },
                        inversed: {
                            background: o.red.tomato,
                            color: t.contrastText,
                            borderColor: t.main,
                            fontSize: a.s,
                            fontWeight: 700,
                            lineHeight: r.l,
                            borderRadius: i.radius.pill
                        },
                        navSpacing: {
                            display: "flex",
                            marginLeft: c.s,
                            whiteSpace: "nowrap"
                        }
                    }
                }),
                ni = function(e) {
                    var t, n = e.buttonClass,
                        a = no(),
                        o = a.classes,
                        i = a.cx,
                        r = (0, N.D)().isBrandEnterprise,
                        s = (0, tp.PE)().region,
                        d = (0, et.useRouter)(),
                        m = (0, ee.xn)(d),
                        h = (0, V.d)(),
                        f = i(o.contained, n, o.actionHover),
                        p = {
                            size: "small",
                            query: {
                                landing_page: ""
                            },
                            buttonClass: i(n, (t = {}, (0, c.Z)(t, o.outlined, !r), (0, c.Z)(t, o.actionHover, !r), t))
                        },
                        v = h || m || "IN" === s ? (0, u.jsx)(t5.g, {
                            size: "small",
                            buttonClass: f,
                            color: null,
                            query: {}
                        }) : (0, u.jsx)(na, {
                            buttonClass: o.navSpacing,
                            size: "small",
                            color: "secondary"
                        });
                    return (0, u.jsxs)(u.Fragment, {
                        children: [h || r ? (0, u.jsx)(t8.T, (0, l.Z)({}, p)) : (0, u.jsx)(t9._, {
                            loginButtonComponent: ne,
                            loginButtonProps: p
                        }), r ? (0, u.jsx)(nt.Q, {
                            size: "small",
                            buttonClass: n
                        }) : v]
                    })
                },
                nr = Z()(function() {
                    return Promise.all([n.e(50640), n.e(61575)]).then(n.bind(n, 50640)).then(function(e) {
                        return e.ProfileDrawerIcon
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [50640]
                        }
                    },
                    ssr: !0
                }),
                nc = function(e) {
                    var t = e.labels,
                        n = e.showTextLabels,
                        a = e.classesProps,
                        o = e.reverse,
                        i = (0, th.y)(),
                        r = i.classes,
                        l = i.cx;
                    return (0, z.B)() ? (0, u.jsx)("div", {
                        className: l((0, c.Z)({}, r.iconOnlyProfileIcon, !n)),
                        children: (0, u.jsx)(nr, {
                            ariaLabels: t.loggedInButtons,
                            showTextLabels: n,
                            reverse: o
                        })
                    }) : (0, u.jsx)("div", {
                        className: r.hideMdDown,
                        children: (0, u.jsx)(ni, {
                            buttonClass: l(r.navSpacing, null == a ? void 0 : a.textColor)
                        })
                    })
                },
                nl = Z()(function() {
                    return Promise.all([n.e(67369), n.e(33577)]).then(n.bind(n, 34742)).then(function(e) {
                        return e.SiteHeaderLinks
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [34742]
                        }
                    }
                }),
                ns = Z()(function() {
                    return Promise.all([n.e(10185), n.e(58122)]).then(n.bind(n, 45885)).then(function(e) {
                        return e.EnterpriseCart
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [45885]
                        }
                    },
                    ssr: !0
                }),
                nu = function(e) {
                    var t = e.classes,
                        n = e.cx,
                        a = e.labels,
                        o = e.showHeaderLinks,
                        i = e.overlayTopNavigation,
                        r = (0, p.Z)((0, e5._b)(), 2),
                        d = r[0],
                        m = r[1],
                        h = o ? T.r : "div";
                    return (0, u.jsx)(h, (0, s.Z)((0, l.Z)({
                        "data-automation": "SiteHeader_Logo_link",
                        onClick: function() {
                            return (0, e8.RC)()
                        },
                        className: n(t.logo, (0, c.Z)({}, t.disabled, !o))
                    }, o ? {
                        href: d,
                        linkAs: m,
                        labelTrack: e4.q5x
                    } : {}), {
                        children: (0, u.jsx)(eY.TR, {
                            ariaLabel: a.logoIconButton,
                            buttonClass: o ? "" : t.disabled,
                            overlayTopNavigation: i
                        })
                    }))
                },
                nd = function(e) {
                    var t = e.className,
                        n = e.labels,
                        a = e.toggleMenuDrawer;
                    return e.isDamExperience ? null : (0, u.jsx)(eW.Z, {
                        mdUp: !0,
                        implementation: "css",
                        children: (0, u.jsx)(y.z, {
                            className: t,
                            "aria-label": n.menuCta,
                            "data-automation": "siteHeader_menu",
                            onClick: a(!0),
                            labelTrack: e4.AFS,
                            children: n.menuCta
                        })
                    })
                },
                nm = (0, B.memo)(function(e) {
                    var t, n = e.classesProps,
                        a = e.noBottomSpacing,
                        o = e.overlayTopNavigation,
                        i = (0, th.y)(),
                        r = i.classes,
                        d = i.cx,
                        m = (0, et.useRouter)(),
                        h = (0, V.d)(),
                        f = (0, S.n)().isMobileServer,
                        v = (0, e7.N)().isBot,
                        g = (0, N.D)(),
                        b = g.isBrandEnterprise,
                        k = g.isBrandSstk,
                        y = (0, p.Z)((0, R.O)("menuDrawerOpen"), 2),
                        x = y[0],
                        Z = y[1],
                        _ = t7(),
                        L = _.primaryNavLinks,
                        B = _.secondaryNavLinks,
                        w = void 0 === B ? [] : B,
                        j = _.contactUs,
                        C = _.labels,
                        M = (0, z.B)(),
                        T = (0, P.p)(I.vb),
                        F = M || !b,
                        D = (0, ee.fM)(m),
                        H = v || !h && !f,
                        E = function(e) {
                            return function(t) {
                                t && "keydown" === t.type && ("Tab" === t.key || "Shift" === t.key) || Z(e)
                            }
                        },
                        O = M && b;
                    return (0, u.jsxs)(ef.Mp, {
                        value: e4.F2B,
                        children: [(0, u.jsx)(eJ, {
                            className: d(r.root, null == n ? void 0 : n.sideHeader, (t = {}, (0, c.Z)(t, r.enterpriseHeader, b), (0, c.Z)(t, r.eCommHeader, D && k), (0, c.Z)(t, r.noBottomSpacing, a), t)),
                            position: "relative",
                            children: (0, u.jsxs)(eU.ZP, {
                                className: r.container,
                                container: !0,
                                direction: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [(0, u.jsxs)(eU.ZP, {
                                    item: !0,
                                    classes: {
                                        root: r.primaryNavLinkContainer,
                                        item: r.gridItemContainer
                                    },
                                    children: [(0, u.jsx)(nu, {
                                        classes: r,
                                        cx: d,
                                        labels: C,
                                        showHeaderLinks: F,
                                        overlayTopNavigation: o
                                    }), F && H && (0, u.jsx)(nl, {
                                        classesProps: n,
                                        className: r.primaryNavLinks,
                                        isPrimary: !0,
                                        links: L
                                    })]
                                }), F && (0, u.jsx)(eU.ZP, {
                                    item: !0,
                                    children: (0, u.jsx)(eW.Z, (0, s.Z)((0, l.Z)({
                                        implementation: "css"
                                    }, b ? {
                                        lgDown: !0
                                    } : {
                                        mdDown: !0
                                    }), {
                                        children: (0, u.jsx)("div", {
                                            className: d(r.secondaryNavLinks, (0, c.Z)({}, r.sstkSecondaryNavLinks, k)),
                                            children: H && (0, u.jsx)(nl, {
                                                classesProps: n,
                                                isPrimary: !1,
                                                links: w
                                            })
                                        })
                                    }))
                                }), (0, u.jsxs)(eU.ZP, {
                                    item: !0,
                                    classes: {
                                        item: r.gridItemContainer
                                    },
                                    children: [O && !T && (0, u.jsx)(eW.Z, {
                                        mdDown: !0,
                                        children: (0, u.jsx)("div", {
                                            className: r.navSpacing,
                                            children: (0, u.jsx)(A, {
                                                label: j.label,
                                                isUtilityBar: !1,
                                                clickTrack: null
                                            })
                                        })
                                    }), F && (0, u.jsx)(eW.Z, (0, s.Z)((0, l.Z)({
                                        implementation: "css"
                                    }, b && {
                                        mdDown: !0
                                    }), {
                                        children: (0, u.jsx)(tm, {
                                            ariaLabels: C.loggedInButtons,
                                            rootButtonClass: d(r.iconButtonRoot, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.iconButtonLighten, k))
                                        })
                                    })), O && (0, u.jsx)(ns, {
                                        cartIconButtonLabel: C.cartIconButton,
                                        iconButtonRootClass: d(r.iconButtonRoot, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.iconButtonLighten, k))
                                    }), k && (0, u.jsxs)(u.Fragment, {
                                        children: [(0, u.jsx)(tr, {
                                            cartIconButtonLabel: C.cartIconButton,
                                            iconButtonRootClass: d(r.iconButtonRoot, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.iconButtonLighten, k))
                                        }), (0, u.jsx)(nc, {
                                            classesProps: n,
                                            showTextLabels: !1,
                                            labels: C
                                        })]
                                    }), (0, u.jsx)(nd, {
                                        className: d(r.menuButton, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.menuButtonLight, !b)),
                                        toggleMenuDrawer: E,
                                        labels: C,
                                        isDamExperience: Boolean(T)
                                    }), b && (0, u.jsx)(nc, {
                                        showTextLabels: !0,
                                        labels: C,
                                        reverse: Boolean(o)
                                    })]
                                })]
                            })
                        }), (0, u.jsx)(e6, {
                            isMenuDrawerOpen: x,
                            primaryNavLinks: L,
                            secondaryNavLinks: w,
                            toggleMenuDrawer: E
                        })]
                    })
                }),
                nh = function(e) {
                    var t = e.initialProps;
                    return (0, u.jsx)(nm, (0, l.Z)({}, t))
                },
                nf = n(88849),
                np = (0, _.ZL)({
                    uniqId: "SiteHeaderSdaq158"
                })(function(e, t, n) {
                    var a = e.breakpoints,
                        o = e.palette,
                        i = e.zIndex,
                        r = e.tokens,
                        l = r.color,
                        s = r.spacing;
                    return {
                        gridItemContainer: {
                            display: "flex"
                        },
                        root: (0, c.Z)({
                            zIndex: i.appBar,
                            marginBottom: s.s,
                            paddingTop: s.s,
                            paddingRight: s.base,
                            paddingBottom: s.s,
                            paddingLeft: s.base,
                            width: "auto"
                        }, a.up("sm"), {
                            paddingRight: s.m,
                            paddingLeft: s.m
                        }),
                        eCommHeader: {
                            borderStyle: "solid",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                            borderWidth: eS.mD,
                            borderImageWidth: 1,
                            borderImageSlice: 1,
                            color: "".concat(l.gray["onyx-12"]),
                            marginBottom: s.m
                        },
                        noBottomSpacing: {
                            marginBottom: 0
                        },
                        container: {
                            height: eS.Mz,
                            flexWrap: "nowrap"
                        },
                        iconButtonRoot: {
                            marginLeft: s.xs,
                            color: o.info.main,
                            "&&": {
                                padding: s.s
                            }
                        },
                        iconButtonLighten: {
                            color: o.text.secondary
                        },
                        primaryNavLinkContainer: (0, c.Z)({
                            overflow: "hidden",
                            flexGrow: 1
                        }, "& ".concat(n.primaryNavLinks, " & ").concat(n.secondaryNavLinks), {
                            flexWrap: "nowrap",
                            alignItems: "center"
                        }),
                        primaryNavLinks: {
                            display: "flex"
                        },
                        secondaryNavLinks: {
                            display: "flex"
                        }
                    }
                }),
                nv = function(e) {
                    var t = e.ariaLabel,
                        n = e.classes,
                        a = e.cx,
                        o = e.overlayTopNavigation,
                        i = e.showHeaderLinks,
                        r = (0, p.Z)((0, e5._b)(), 2),
                        d = r[0],
                        m = r[1],
                        h = i ? T.r : "div";
                    return (0, u.jsx)(h, (0, s.Z)((0, l.Z)({
                        "data-automation": "SiteHeader_Logo_link",
                        onClick: function() {
                            return (0, e8.RC)()
                        },
                        className: a(n.logo, (0, c.Z)({}, n.disabled, !i))
                    }, i ? {
                        href: d,
                        linkAs: m,
                        labelTrack: e4.q5x
                    } : {}), {
                        children: (0, u.jsx)(eY.TR, {
                            ariaLabel: t,
                            buttonClass: i ? "" : n.disabled,
                            overlayTopNavigation: o
                        })
                    }))
                },
                ng = function(e) {
                    var t = e.ariaLabel,
                        n = e.isBrandEnterprise,
                        a = e.isDamExperience,
                        o = e.rootButtonClass,
                        i = e.toggleMenuDrawer;
                    return (!n || a) && n ? null : (0, u.jsx)(eW.Z, {
                        mdUp: !0,
                        implementation: "css",
                        children: (0, u.jsx)(tc.h, {
                            "aria-label": t,
                            classes: {
                                root: o
                            },
                            color: "primary",
                            "data-automation": "siteHeader_menu_icon",
                            labelTrack: e4.AFS,
                            onClick: i(!0),
                            size: "large",
                            children: (0, u.jsx)(O.v, {})
                        })
                    })
                },
                nb = (0, B.memo)(function(e) {
                    var t, n = e.classesProps,
                        a = e.noBottomSpacing,
                        o = e.overlayTopNavigation,
                        i = np(),
                        r = i.classes,
                        d = i.cx,
                        m = (0, et.useRouter)(),
                        h = (0, N.D)(),
                        f = h.isBrandEnterprise,
                        v = h.isBrandSstk,
                        g = (0, p.Z)((0, R.O)("menuDrawerOpen"), 2),
                        b = g[0],
                        k = g[1],
                        y = t7(),
                        x = y.primaryNavLinks,
                        Z = y.secondaryNavLinks,
                        _ = y.labels,
                        L = (0, z.B)(),
                        B = (0, P.p)(I.vb),
                        w = L || !f,
                        j = (0, ee.fM)(m),
                        C = function(e) {
                            return function(t) {
                                t && "keydown" === t.type && ("Tab" === t.key || "Shift" === t.key) || k(e)
                            }
                        };
                    return (0, u.jsxs)(ef.Mp, {
                        value: e4.F2B,
                        children: [(0, u.jsx)(eJ, {
                            className: d(r.root, null == n ? void 0 : n.sideHeader, (t = {}, (0, c.Z)(t, r.eCommHeader, j && v), (0, c.Z)(t, r.noBottomSpacing, a), t)),
                            position: "relative",
                            children: (0, u.jsxs)(eU.ZP, {
                                className: r.container,
                                container: !0,
                                direction: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [(0, u.jsxs)(eU.ZP, {
                                    item: !0,
                                    classes: {
                                        root: r.primaryNavLinkContainer,
                                        item: r.gridItemContainer
                                    },
                                    children: [(0, u.jsx)(ng, {
                                        toggleMenuDrawer: C,
                                        ariaLabel: _.menuCta,
                                        isDamExperience: Boolean(B),
                                        isBrandEnterprise: Boolean(f),
                                        rootButtonClass: d(r.iconButtonRoot, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.iconButtonLighten, v))
                                    }), (0, u.jsx)(nv, {
                                        ariaLabel: _.logoIconButton,
                                        classes: r,
                                        cx: d,
                                        showHeaderLinks: w,
                                        overlayTopNavigation: o
                                    })]
                                }), (0, u.jsxs)(eU.ZP, {
                                    item: !0,
                                    classes: {
                                        item: r.gridItemContainer
                                    },
                                    children: [w && (0, u.jsx)(eW.Z, (0, s.Z)((0, l.Z)({
                                        implementation: "css"
                                    }, f && {
                                        mdDown: !0
                                    }), {
                                        children: (0, u.jsx)(tm, {
                                            ariaLabels: _.loggedInButtons,
                                            rootButtonClass: d(r.iconButtonRoot, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.iconButtonLighten, v))
                                        })
                                    })), v && (0, u.jsxs)(u.Fragment, {
                                        children: [(0, u.jsx)(tr, {
                                            cartIconButtonLabel: _.cartIconButton,
                                            iconButtonRootClass: d(r.iconButtonRoot, null == n ? void 0 : n.textColor, (0, c.Z)({}, r.iconButtonLighten, v))
                                        }), (0, u.jsx)(nc, {
                                            classesProps: n,
                                            showTextLabels: !1,
                                            labels: _
                                        })]
                                    })]
                                })]
                            })
                        }), (0, u.jsx)(e6, {
                            isMenuDrawerOpen: b,
                            primaryNavLinks: x,
                            secondaryNavLinks: void 0 === Z ? [] : Z,
                            toggleMenuDrawer: C
                        })]
                    })
                }),
                nk = {
                    flagID: "sdaq-158-mobile-menu",
                    id: "SDAQ-158",
                    name: "Change menu button",
                    treatments: (r = {}, (0, c.Z)(r, nf.NM, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, B.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, u.jsx)(nh, {
                            initialProps: n
                        })
                    }), (0, c.Z)(r, nf.vG, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, B.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, u.jsx)(nb, (0, l.Z)({}, n))
                    }), r)
                },
                ny = function() {
                    return (0, u.jsx)("div", {
                        style: {
                            height: "64px"
                        }
                    })
                },
                nx = function(e) {
                    return (0, u.jsx)(eG.K, {
                        config: nk,
                        initialProps: e,
                        Portal: nh,
                        SkeletonLoader: ny
                    })
                },
                nZ = n(98788),
                n_ = n(5163),
                nL = n(77710),
                nB = function() {
                    var e = (0, p.Z)((0, B.useState)(), 2),
                        t = e[0],
                        n = e[1],
                        a = (0, p.Z)((0, B.useState)([]), 2),
                        o = a[0],
                        i = a[1],
                        r = (0, z.B)();
                    return (0, B.useEffect)(function() {
                        r && (0, nZ.Z)(function() {
                            var e, t, a;
                            return (0, n_.__generator)(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, (0, nL.$v)({
                                            surveyId: nL.pk
                                        })];
                                    case 1:
                                        return t = (e = o.sent().items).find(function(e) {
                                            return e.entityType === nL.eX.surveyInteraction
                                        }), a = e.filter(function(e) {
                                            return e.entityType === nL.eX.surveyAnswer
                                        }), t && (n(t), i(a)), [3, 3];
                                    case 2:
                                        return o.sent(), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })()
                    }, [r]), {
                        interaction: t,
                        setInteraction: n,
                        answeredQuestions: o
                    }
                },
                nw = Z()(function() {
                    return Promise.all([n.e(24394), n.e(20925), n.e(65697), n.e(54995)]).then(n.bind(n, 54995)).then(function(e) {
                        return e.ExperimentUTLZ197
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [54995]
                        }
                    },
                    ssr: !1
                }),
                nj = Z()(function() {
                    return n.e(90593).then(n.bind(n, 90593)).then(function(e) {
                        return e.ExperimentSDAQ238
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [90593]
                        }
                    },
                    ssr: !1
                }),
                nC = Z()(function() {
                    return n.e(69744).then(n.bind(n, 69744)).then(function(e) {
                        return e.ExperimentSDAQ239
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69744]
                        }
                    },
                    ssr: !1
                }),
                nM = Z()(function() {
                    return n.e(48333).then(n.bind(n, 48333)).then(function(e) {
                        return e.ExperimentRN373
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [48333]
                        }
                    },
                    ssr: !1
                }),
                nA = Z()(function() {
                    return n.e(36009).then(n.bind(n, 36009)).then(function(e) {
                        return e.ExperimentRN400
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [36009]
                        }
                    },
                    ssr: !1
                }),
                nT = (0, _.ZL)()(function(e, t) {
                    var n = e.palette,
                        a = e.breakpoints,
                        o = e.tokens,
                        i = o.spacing,
                        r = o.color,
                        u = t.contentNoBottomSpacing,
                        d = t.overlayTopNavigation,
                        m = t.hideUtilityBar,
                        h = t.contentNoSideSpacing;
                    return {
                        root: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        noTopSpacing: {
                            marginTop: "-".concat(i.m)
                        },
                        utilityBarWithoutSpacing: (0, c.Z)({}, a.up("md"), {
                            "&&": {
                                marginTop: 0
                            }
                        }),
                        utilityBar: {
                            backgroundColor: n.background.default
                        },
                        utilityBarWithoutTopBorder: {
                            backgroundColor: n.background.default,
                            borderTop: "none"
                        },
                        enterpriseUtilityBar: {
                            marginTop: "-".concat(i.m)
                        },
                        sstkUtilityBar: {
                            marginTop: "-".concat(i.m)
                        },
                        content: (0, s.Z)((0, l.Z)({
                            padding: h ? "0" : "0 ".concat(i.base),
                            minHeight: "80vh"
                        }, u ? {} : {
                            marginBottom: i.xl
                        }), (0, c.Z)({
                            display: "flex",
                            flexDirection: "column"
                        }, a.up("sm"), {
                            padding: h ? "0" : "0 ".concat(i.m)
                        })),
                        sideHeader: (0, l.Z)({}, d && (0, s.Z)((0, l.Z)({
                            position: "absolute"
                        }, !m && {
                            left: eh.WT
                        }), {
                            right: "0",
                            top: "0",
                            left: "0"
                        })),
                        siteHeaderTextColor: (0, l.Z)({}, d && {
                            color: "".concat(r.white, " !important"),
                            "&:hover": {
                                background: "none",
                                color: r.white
                            }
                        }),
                        secondaryBackground: {
                            backgroundColor: n.background.secondary
                        }
                    }
                }),
                nF = (0, _.ZL)()(function(e) {
                    var t = e.breakpoints;
                    return {
                        utilityBarSkeleton: (0, c.Z)({}, t.up("md"), {
                            width: eh.WT,
                            minWidth: eh.WT
                        })
                    }
                }),
                nI = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.className,
                        n = e.isBrandSstk,
                        a = e.hideUtilityBar,
                        o = e.showHeaderBanner,
                        i = (0, V.d)({
                            breakpoint: "sm"
                        }),
                        r = (0, e1.j)(),
                        c = nF(),
                        l = c.classes,
                        s = c.cx;
                    return a || i && n ? null : r ? (0, u.jsx)(ef.Mp, {
                        value: e4.cH8,
                        children: (0, u.jsx)(eq, {
                            className: s(t, !r && l.utilityBarSkeleton),
                            showHeaderBanner: o
                        })
                    }) : (0, u.jsx)("div", {
                        className: t
                    })
                },
                nS = function(e) {
                    var t, n, a = e.children,
                        o = e.hideFooter,
                        i = e.hideUtilityBar,
                        r = void 0 !== i && i,
                        l = e.hideTopNavigation,
                        s = e.overlayTopNavigation,
                        h = void 0 !== s && s,
                        p = e.showHeaderBanner,
                        v = e.useSecondaryBackground,
                        g = e.headerNoBottomSpacing,
                        b = e.contentNoTopSpacing,
                        k = void 0 !== b && b,
                        y = e.contentNoBottomSpacing,
                        x = e.contentNoSideSpacing,
                        Z = nT({
                            contentNoBottomSpacing: void 0 !== y && y,
                            overlayTopNavigation: h,
                            hideUtilityBar: r,
                            contentNoSideSpacing: void 0 !== x && x
                        }),
                        _ = Z.classes,
                        L = Z.cx,
                        B = (0, et.useRouter)(),
                        w = (0, en.$G)(Y.aGO).t,
                        j = (0, N.D)(),
                        C = j.isBrandEnterprise,
                        M = j.isBrandSstk,
                        A = (0, ee.fM)(B),
                        T = (0, V.d)({
                            breakpoint: "sm"
                        }),
                        F = nB(),
                        I = F.interaction,
                        S = F.setInteraction,
                        z = F.answeredQuestions,
                        D = !T && I && !I.abandoned && !I.completed,
                        H = (0, V.d)({
                            breakpoint: "md"
                        });
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsxs)(d.Z, {
                            disableGutters: !0,
                            className: _.root,
                            maxWidth: !1,
                            children: [!(void 0 !== l && l) && (0, u.jsx)(M && H ? nx : nm, {
                                classesProps: {
                                    textColor: _.siteHeaderTextColor,
                                    sideHeader: _.sideHeader
                                },
                                overlayTopNavigation: h,
                                noBottomSpacing: void 0 !== g && g
                            }), (0, u.jsxs)(m.Z, {
                                maxWidth: "100vw",
                                display: "flex",
                                flexDirection: "row",
                                className: L((t = {}, (0, c.Z)(t, _.secondaryBackground, void 0 !== v && v), (0, c.Z)(t, _.noTopSpacing, k && C), t)),
                                children: [(0, u.jsx)(nI, {
                                    isBrandSstk: M,
                                    hideUtilityBar: r,
                                    className: L((n = {}, (0, c.Z)(n, _.utilityBarWithoutTopBorder, A), (0, c.Z)(n, _.utilityBar, !A), (0, c.Z)(n, _.enterpriseUtilityBar, C), (0, c.Z)(n, _.sstkUtilityBar, M && A), (0, c.Z)(n, _.utilityBarWithoutSpacing, k), n)),
                                    showHeaderBanner: p
                                }), (0, u.jsxs)(m.Z, {
                                    flex: "1",
                                    minWidth: 0,
                                    children: [(0, u.jsx)("div", {
                                        className: _.content,
                                        children: a
                                    }), !(void 0 !== o && o) && (0, u.jsx)(f.p, {
                                        t: w
                                    })]
                                })]
                            })]
                        }), (0, u.jsx)(nj, {}), (0, u.jsx)(nC, {}), D && (0, u.jsx)(nw, {
                            interaction: I,
                            setInteraction: S,
                            answeredQuestions: z
                        }), (0, u.jsx)(nM, {}), (0, u.jsx)(nA, {})]
                    })
                };
            nS.defaultProps = {
                hideUtilityBar: !1
            }, nS.headerBanner = {
                type: h.CmsDarkHeaderBanner
            }
        },
        32780: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return p
                },
                j: function() {
                    return f
                }
            });
            var a, o = n(47842),
                i = n(3081),
                r = n(38398),
                c = n.n(r),
                l = n(85208),
                s = "cart",
                u = "content-license",
                d = "ecomm-logged-in",
                m = "success",
                h = (0, o.Z)({}, s, (a = {}, (0, o.Z)(a, l.Dx, i.Is), (0, o.Z)(a, d, i.nK), (0, o.Z)(a, u, (0, o.Z)({}, m, "".concat(i.Is, "/").concat(u, "/").concat(m))), a)),
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.isLoggedInUser,
                        n = e.isBrandSstk,
                        a = h[s][t && n ? d : l.Dx];
                    return [a, a]
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = c().format({
                            pathname: h[s][u][m],
                            query: e
                        });
                    return [t, t]
                }
        },
        25070: function(e, t, n) {
            n.d(t, {
                GK: function() {
                    return y
                },
                NX: function() {
                    return b
                },
                Oe: function() {
                    return _
                },
                Oy: function() {
                    return g
                },
                gw: function() {
                    return Z
                },
                jj: function() {
                    return v
                },
                yD: function() {
                    return x
                },
                zT: function() {
                    return k
                }
            });
            var a, o, i = n(47842),
                r = n(38398),
                c = n.n(r),
                l = n(85208),
                s = "collections",
                u = "catalog",
                d = "designs",
                m = "uploads",
                h = "licenses",
                f = "shared-with-you",
                p = (0, i.Z)({}, u, (o = {}, (0, i.Z)(o, l.Dx, "/".concat(u)), (0, i.Z)(o, s, (a = {}, (0, i.Z)(a, l.Dx, "/".concat(u, "/").concat(s)), (0, i.Z)(a, l.ID, function(e) {
                    return "/".concat(u, "/").concat(s, "/").concat(e)
                }), a)), (0, i.Z)(o, d, (0, i.Z)({}, l.Dx, "/".concat(u, "/").concat(d))), (0, i.Z)(o, m, (0, i.Z)({}, l.Dx, "/".concat(u, "/").concat(m))), (0, i.Z)(o, h, (0, i.Z)({}, l.Dx, "/".concat(u, "/").concat(h))), (0, i.Z)(o, f, (0, i.Z)({}, l.Dx, "/".concat(u, "/").concat(f))), o)),
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.query,
                        n = c().format({
                            pathname: p[u][l.Dx],
                            query: void 0 === t ? void 0 : t
                        });
                    return [n, n]
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.query,
                        n = c().format({
                            pathname: p[u][d][l.Dx],
                            query: void 0 === t ? void 0 : t
                        });
                    return [n, n]
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.query,
                        n = c().format({
                            pathname: p[u][m][l.Dx],
                            query: void 0 === t ? void 0 : t
                        });
                    return [n, n]
                },
                k = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.query,
                        n = c().format({
                            pathname: p[u][h][l.Dx],
                            query: void 0 === t ? void 0 : t
                        });
                    return [n, n]
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.query,
                        n = c().format({
                            pathname: p[u][s][l.Dx],
                            query: void 0 === t ? void 0 : t
                        });
                    return [n, n]
                },
                x = function(e) {
                    var t = e.id,
                        n = e.shareCode,
                        a = void 0 === n ? "" : n,
                        o = e.query,
                        i = a ? "".concat(t, "-").concat(a) : t,
                        r = c().format({
                            pathname: p[u][s][l.ID](i),
                            query: void 0 === o ? void 0 : o
                        });
                    return [r, r]
                },
                Z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.query,
                        n = c().format({
                            pathname: p[u][f][l.Dx],
                            query: void 0 === t ? void 0 : t
                        });
                    return [n, n]
                },
                _ = "/".concat(u, "/").concat(s, "/[slug]")
        },
        68445: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return Z
                },
                _: function() {
                    return x
                }
            });
            var a, o, i, r, c, l = n(47842),
                s = n(26297),
                u = n(39232),
                d = n(44297),
                m = n(38398),
                h = n.n(m),
                f = n(85208),
                p = "collections",
                v = (c = {}, (0, l.Z)(c, p, (a = {}, (0, l.Z)(a, f.Dx, "/".concat(p)), (0, l.Z)(a, f.ID, "/".concat(p, "/[id]")), a)), (0, l.Z)(c, u.pX, (0, l.Z)({}, p, (o = {}, (0, l.Z)(o, f.Dx, "/".concat(u.pX, "/").concat(p)), (0, l.Z)(o, f.ID, "/".concat(u.pX, "/").concat(p, "/[id]")), o))), (0, l.Z)(c, u.xF, (0, l.Z)({}, p, (i = {}, (0, l.Z)(i, f.Dx, "/".concat(u.xF, "/").concat(p)), (0, l.Z)(i, f.ID, "/".concat(u.xF, "/").concat(p, "/[id]")), i))), (0, l.Z)(c, u.gP, (0, l.Z)({}, p, (r = {}, (0, l.Z)(r, f.Dx, "/".concat(u.gP, "/").concat(p)), (0, l.Z)(r, f.ID, "/".concat(u.gP, "/").concat(p, "/[id]")), r))), c),
                g = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).query,
                        t = h().format({
                            pathname: v[p][f.Dx],
                            query: e
                        });
                    return [t, t]
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.query,
                        a = h().format({
                            pathname: "/".concat(p, "/").concat(t),
                            query: n
                        });
                    return [a, a]
                },
                k = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? u.k4 : t,
                        a = e.id,
                        o = e.query,
                        i = h().format({
                            pathname: "/".concat(n, "/").concat(p, "/").concat(a),
                            query: o
                        });
                    return [i, i]
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? u.k4 : t,
                        a = e.query,
                        o = h().format({
                            pathname: "/".concat(n, "/").concat(p),
                            query: a
                        });
                    return [o, o]
                },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? u.k4 : t,
                        a = e.query;
                    switch (n) {
                        case u.pX:
                        case u.xF:
                        case u.tn:
                        case u.gP:
                            return y({
                                assetType: n,
                                query: a
                            });
                        case u.k4:
                        default:
                            return g({
                                query: a
                            })
                    }
                },
                Z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? u.k4 : t,
                        a = e.id,
                        o = e.verificationCode,
                        i = e.query,
                        r = ((void 0 === i ? {} : i).id, (0, s.Z)(e.query, ["id"])),
                        c = (0, d.Xo)(n) ? u.gP : n;
                    if (!a) return x({
                        assetType: c
                    });
                    var l = o ? "".concat(a, "-").concat(o) : a;
                    switch (c) {
                        case u.pX:
                        case u.xF:
                        case u.tn:
                        case u.gP:
                            return k({
                                assetType: c,
                                id: l,
                                query: r
                            });
                        case u.k4:
                        default:
                            return b({
                                id: l,
                                query: r
                            })
                    }
                }
        },
        18348: function(e, t, n) {
            n.d(t, {
                D_: function() {
                    return N
                },
                I$: function() {
                    return x
                },
                Sf: function() {
                    return C
                },
                aW: function() {
                    return T
                },
                bH: function() {
                    return I
                },
                dg: function() {
                    return _
                },
                tH: function() {
                    return S
                },
                tK: function() {
                    return M
                },
                wH: function() {
                    return A
                },
                zH: function() {
                    return F
                }
            });
            var a, o, i, r = n(47842),
                c = n(70865),
                l = n(96670),
                s = n(26297),
                u = n(50930),
                d = n(39232),
                m = n(84833),
                h = n(61618),
                f = n(2005),
                p = n(38398),
                v = n.n(p),
                g = n(85208),
                b = "publication",
                k = "[permalink]",
                y = function(e) {
                    var t;
                    return t = {}, (0, r.Z)(t, g.Sd, "/".concat(d.gP, "/").concat(e)), (0, r.Z)(t, g.Dx, "/".concat(d.gP, "/").concat(e)), (0, r.Z)(t, b, "/".concat(d.gP, "/").concat(e, "/").concat(k)), t
                },
                x = (0, r.Z)({}, d.gP, (0, l.Z)((0, c.Z)((o = {}, (0, r.Z)(o, g.Dx, "/".concat(d.gP)), (0, r.Z)(o, m.k8, (a = {}, (0, r.Z)(a, g.Sd, "/".concat(d.gP, "/").concat(m.nt)), (0, r.Z)(a, g.Dx, "/".concat(d.gP, "/").concat(m.k8)), (0, r.Z)(a, b, "/".concat(d.gP, "/").concat(m.k8, "/").concat(k)), a)), o), [m.jk].concat((0, u.Z)(m.Nm)).reduce(function(e, t) {
                    return (0, l.Z)((0, c.Z)({}, e), (0, r.Z)({}, t, y(t)))
                }, {})), (0, r.Z)({}, g.Oe, (i = {}, (0, r.Z)(i, g.Dx, "/".concat(d.gP, "/").concat(g.Oe)), (0, r.Z)(i, g.ID, "/".concat(d.gP, "/").concat(g.Oe, "/[id]")), i)))),
                Z = function(e) {
                    var t = e.publicationId;
                    return e.permalink || (0, h.p)(void 0 === t ? "" : t)
                },
                _ = function() {
                    return [x[d.gP][g.Dx], x[d.gP][g.Dx]]
                },
                L = function(e) {
                    var t = e.folderView,
                        n = e.folder;
                    return "false" === String(t) ? {
                        folderView: t
                    } : n && {
                        folder: n
                    }
                },
                B = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.publicationId,
                        n = e.query,
                        a = e.id,
                        o = e.folder,
                        i = e.publicationRoot,
                        r = e.folderView,
                        l = [o, a].filter(function(e) {
                            return e
                        }).join("/"),
                        u = n || {
                            publicationId: t,
                            publicationRoot: i
                        },
                        h = (u.publicationId, u.publicationRoot),
                        f = (0, s.Z)(u, ["publicationId", "publicationRoot"]),
                        p = m.Nm.includes(h) ? h : m.k8;
                    return v().format({
                        pathname: x[d.gP][p][g.Sd],
                        query: (0, c.Z)({}, L({
                            folderView: r,
                            folder: l
                        }), f)
                    })
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.attendees,
                        n = e.publicationType,
                        a = void 0 === n ? m.k8 : n,
                        o = e.publicationRoot;
                    if (e.forPdf) return v().format({
                        pathname: "".concat(x[d.gP][a][g.Dx], "/").concat(m.x1),
                        query: {
                            publicationId: (0, h.w)(Z(e))
                        }
                    });
                    var i = m.Nm.includes(o) ? o : a;
                    return v().format({
                        pathname: "".concat(x[d.gP][i][g.Dx], "/").concat(Z(e)),
                        query: (0, c.Z)({}, t && {
                            attendees: t
                        }, L(e))
                    })
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.attendees;
                    return v().format({
                        pathname: "".concat(x[d.gP][m.jk][g.Dx], "/").concat(Z(e)),
                        query: (0, c.Z)({}, t && {
                            attendees: t
                        })
                    })
                },
                C = function(e) {
                    var t = B(e);
                    return [t, t]
                },
                M = function(e) {
                    var t = w(e);
                    return [t, t]
                },
                A = function() {
                    var e = x[d.gP][m.jk][g.Sd];
                    return [e, e]
                },
                T = function(e) {
                    var t = j(e);
                    return [t, t]
                },
                F = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.asset,
                        n = (void 0 === t ? {} : t).id,
                        a = e.setnum || (0, f.wP)(void 0 === n ? "" : n),
                        o = "".concat(x[d.gP][g.Oe][g.Dx], "/").concat(a);
                    return [v().format({
                        pathname: o,
                        query: {
                            id: a
                        }
                    }), o]
                },
                I = function() {
                    var e = "/support/article/How-can-I-use-editorial-content";
                    return [e, e]
                },
                S = function() {
                    var e = "/business/media-register";
                    return [e, e]
                },
                N = function() {
                    var e = "/pricing/editorial";
                    return [e, e]
                }
        },
        38204: function(e, t, n) {
            n.d(t, {
                $3: function() {
                    return X
                },
                An: function() {
                    return ev
                },
                B5: function() {
                    return el
                },
                Bj: function() {
                    return J
                },
                Ly: function() {
                    return ea
                },
                P1: function() {
                    return en
                },
                Qd: function() {
                    return O
                },
                Si: function() {
                    return eo
                },
                U2: function() {
                    return ed
                },
                V6: function() {
                    return E
                },
                W5: function() {
                    return eb
                },
                X2: function() {
                    return ep
                },
                Xx: function() {
                    return ef
                },
                YT: function() {
                    return G
                },
                _8: function() {
                    return Y
                },
                ad: function() {
                    return et
                },
                b1: function() {
                    return K
                },
                dN: function() {
                    return er
                },
                dk: function() {
                    return eu
                },
                gX: function() {
                    return es
                },
                j$: function() {
                    return ee
                },
                jH: function() {
                    return q
                },
                k_: function() {
                    return $
                },
                kn: function() {
                    return ec
                },
                nA: function() {
                    return eh
                },
                nT: function() {
                    return em
                },
                pA: function() {
                    return Q
                },
                rm: function() {
                    return U
                },
                tW: function() {
                    return ei
                },
                u9: function() {
                    return W
                },
                ym: function() {
                    return eg
                }
            });
            var a, o, i, r, c, l = n(47842),
                s = n(70865),
                u = n(39232),
                d = n(38398),
                m = n.n(d),
                h = n(85208),
                f = "api-terms",
                p = "blog",
                v = "business",
                g = "request-demo",
                b = "flex-subscriptions",
                k = "editor",
                y = "image",
                x = "help",
                Z = "privacy",
                _ = "studios",
                L = "terms",
                B = "license",
                w = "impressum",
                j = "purchase",
                C = "support",
                M = "article",
                A = "explore",
                T = "contact-us",
                F = "create",
                I = "editor",
                S = "new-from-asset",
                N = "new-from-upload",
                V = "media-register",
                z = "developers",
                D = "documentation",
                H = "pricing",
                P = "modern-slavery-statement",
                R = (c = {}, (0, l.Z)(c, "api", (0, l.Z)({}, H, "/".concat("api", "/").concat(H))), (0, l.Z)(c, p, "/".concat(p)), (0, l.Z)(c, v, (a = {}, (0, l.Z)(a, _, "/".concat(v, "/").concat(_)), (0, l.Z)(a, g, "/".concat(v, "#").concat(g)), (0, l.Z)(a, b, "/".concat(v, "/").concat(b, "#").concat("footer")), (0, l.Z)(a, V, "/".concat(v, "/").concat(V)), a)), (0, l.Z)(c, F, (0, l.Z)({}, k, (o = {}, (0, l.Z)(o, S, "/".concat(F, "/").concat(k, "/").concat(S)), (0, l.Z)(o, N, "/".concat(F, "/").concat(k, "/").concat(N)), o))), (0, l.Z)(c, z, (i = {}, (0, l.Z)(i, h.Dx, "/".concat(z)), (0, l.Z)(i, f, "/".concat(z, "/").concat(f)), (0, l.Z)(i, T, "/".concat(z, "/").concat(T)), (0, l.Z)(i, D, "/".concat(z, "/").concat(D)), i)), (0, l.Z)(c, A, (0, l.Z)({}, b, "/".concat(A, "/").concat(b))), (0, l.Z)(c, k, (0, l.Z)({}, y, "/".concat(k, "/").concat(y))), (0, l.Z)(c, F, (r = {}, (0, l.Z)(r, "new", "/".concat(F, "/").concat(I, "/").concat("new")), (0, l.Z)(r, S, "/".concat(F, "/").concat(I, "/").concat(S)), (0, l.Z)(r, N, "/".concat(F, "/").concat(k, "/").concat(N)), (0, l.Z)(r, u.zo, "/".concat(F, "/").concat("go", "/").concat(u.xN)), r)), (0, l.Z)(c, x, "/".concat(x)), (0, l.Z)(c, Z, "/".concat(Z)), (0, l.Z)(c, L, "/".concat(L)), (0, l.Z)(c, B, "/".concat(B)), (0, l.Z)(c, w, "/".concat(w)), (0, l.Z)(c, P, "/".concat(P)), (0, l.Z)(c, j, "/".concat(j)), (0, l.Z)(c, C, (0, l.Z)({}, M, "/".concat(C, "/").concat(M))), c),
                E = function() {
                    return R.api[H]
                },
                O = function() {
                    return m().format({
                        protocol: "https",
                        host: "studios.shutterstock.com",
                        pathname: "/"
                    })
                },
                q = function() {
                    return R[L]
                },
                G = function() {
                    return R[p]
                },
                W = function() {
                    return R[Z]
                },
                U = function(e) {
                    return "/create/editor/".concat(e)
                },
                X = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return m().format({
                        pathname: "".concat(R[k][y], "/").concat(e),
                        query: (0, s.Z)({}, t)
                    })
                },
                K = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.k4;
                    return m().format({
                        pathname: "".concat(R[F][S]),
                        query: (0, s.Z)((0, l.Z)({}, "".concat(n, "Id"), e), t)
                    })
                },
                Q = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.k4;
                    return m().format({
                        pathname: "".concat(R[F][N]),
                        query: (0, s.Z)((0, l.Z)({}, "".concat(n, "Id"), e), t)
                    })
                },
                $ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return m().format({
                        pathname: "".concat(R[F][u.zo]),
                        query: (0, s.Z)({}, e)
                    })
                },
                J = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return m().format({
                        pathname: "".concat(R[F].new),
                        query: (0, s.Z)({}, e)
                    })
                },
                Y = function() {
                    return R[B]
                },
                ee = function() {
                    return R[w]
                },
                et = function() {
                    return R[x]
                },
                en = function() {
                    return "".concat(R[x], "#").concat(T)
                },
                ea = function() {
                    return R[v][g]
                },
                eo = function() {
                    return R[A][b]
                },
                ei = function() {
                    return R[v][b]
                },
                er = function() {
                    return R[z][h.Dx]
                },
                ec = function() {
                    return R[z][f]
                },
                el = function() {
                    return R[z][T]
                },
                es = function() {
                    return R[z][D]
                },
                eu = function() {
                    return R[P]
                },
                ed = function(e) {
                    var t = e.queryParams;
                    return m().format({
                        pathname: R[j],
                        query: (0, s.Z)({}, t)
                    })
                },
                em = function(e, t) {
                    return m().format({
                        protocol: "https",
                        host: "support.shutterstock.com",
                        pathname: "/s/".concat(t),
                        query: {
                            language: e
                        }
                    })
                },
                eh = function(e) {
                    var t = e.queryParams;
                    return m().format({
                        protocol: "https",
                        host: "s1045775785.t.eloqua.com",
                        pathname: "/e/f2.aspx",
                        query: (0, s.Z)({}, t)
                    })
                },
                ef = function() {
                    return m().format({
                        protocol: "https",
                        host: "api-reference.shutterstock.com"
                    })
                },
                ep = {
                    en: "en_US",
                    id: "in",
                    nb: "no",
                    nl: "nl_NL",
                    pt: "pt_BR",
                    zh: "zh_CN",
                    "zh-Hant": "zh_TW"
                },
                ev = function() {
                    return R[v][V]
                },
                eg = function(e) {
                    return m().format({
                        protocol: "https",
                        hostname: "help.instagram.com",
                        pathname: e
                    })
                },
                eb = function() {
                    return m().format({
                        protocol: "https",
                        hostname: "qa-shutterstockcommunities.cs245.force.com",
                        pathname: "enterprisesupport/s/",
                        query: {
                            language: ep.en
                        }
                    })
                }
        },
        19004: function(e, t, n) {
            n.d(t, {
                $F: function() {
                    return _
                },
                JN: function() {
                    return L
                }
            });
            var a, o, i, r = n(47842),
                c = n(39232),
                l = n(84833),
                s = n(38398),
                u = n.n(s),
                d = n(85208),
                m = n(18348),
                h = "archive",
                f = "featured",
                p = "featured-collections",
                v = "slug",
                g = "".concat("title", "-").concat(d.ID),
                b = (i = {}, (0, r.Z)(i, p, (a = {}, (0, r.Z)(a, d.Dx, "/".concat([p])), (0, r.Z)(a, h, "/".concat([p], "/").concat(h)), (0, r.Z)(a, g, "/".concat([p], "/[").concat(g, "]")), a)), (0, r.Z)(i, c.pX, (0, r.Z)({}, p, (0, r.Z)({}, d.Dx, "/".concat(c.pX, "/").concat([f])))), (0, r.Z)(i, c.xF, (0, r.Z)({}, p, (o = {}, (0, r.Z)(o, d.Dx, "/".concat(c.xF, "/").concat(f, "-").concat(d.Ul)), (0, r.Z)(o, v, "/".concat(c.xF, "/").concat(f, "-").concat(d.Ul, "/[").concat(v, "]")), o))), i),
                k = function(e) {
                    var t = e.title,
                        n = e.id,
                        a = "".concat(t, "-").concat(n),
                        o = "".concat(b[p][d.Dx], "/").concat(a);
                    return [o, o]
                },
                y = function(e) {
                    var t = e.title,
                        n = e.id,
                        a = t.replace(/[^a-z0-9]+/gi, "-"),
                        o = "".concat(a, "-Stock-Footage-").concat(n),
                        i = "".concat(b[c.pX][p][d.Dx], "/").concat(o);
                    return [i, i]
                },
                x = function(e) {
                    var t = e.title,
                        n = "".concat(b[c.xF][p][d.Dx], "/").concat(t);
                    return [n, n]
                },
                Z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.title,
                        n = e.id;
                    switch (e.assetType) {
                        case c.xF:
                            return x({
                                title: t
                            });
                        case c.pX:
                            return y({
                                title: t,
                                id: n
                            });
                        case c.k4:
                        default:
                            return k({
                                title: t,
                                id: n
                            })
                    }
                },
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.title,
                        n = e.id,
                        a = e.assetType;
                    if (t && n) return Z({
                        title: t,
                        id: n,
                        assetType: a
                    });
                    switch (a) {
                        case c.xF:
                            return [b[c.xF][p][d.Dx], b[c.xF][p][d.Dx]];
                        case c.pX:
                            return [b[c.pX][p][d.Dx], b[c.pX][p][d.Dx]];
                        case c.gP:
                            return [m.I$[c.gP][l.k8][d.Sd], m.I$[c.gP][l.k8][d.Sd]];
                        case c.k4:
                        default:
                            return [b[p][d.Dx], b[p][d.Dx]]
                    }
                },
                L = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.assetType,
                        a = void 0 === n ? c.k4 : n,
                        o = t.query;
                    switch (a) {
                        case c.xF:
                            e = b[c.xF][p][d.Dx];
                            break;
                        case c.pX:
                            e = b[c.pX][p][d.Dx];
                            break;
                        case c.k4:
                        default:
                            e = b[p][h]
                    }
                    var i = u().format({
                        pathname: e,
                        query: o
                    });
                    return [i, i]
                }
        },
        31556: function(e, t, n) {
            n.d(t, {
                I$: function() {
                    return l
                },
                Ni: function() {
                    return u
                },
                _b: function() {
                    return s
                }
            });
            var a, o = n(47842),
                i = "home",
                r = "static-tos",
                c = "subscribe",
                l = (a = {}, (0, o.Z)(a, i, "/"), (0, o.Z)(a, r, "/".concat(r)), (0, o.Z)(a, c, "/".concat(c)), a),
                s = function() {
                    return [l[i], l[i]]
                },
                u = function() {
                    return [l[r], l[r]]
                }
        },
        12355: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return l
                },
                b: function() {
                    return s
                }
            });
            var a, o = n(47842),
                i = n(39232),
                r = n(85208),
                c = (0, o.Z)({}, i.tn, (a = {}, (0, o.Z)(a, r.Dx, "/".concat(i.Qp)), (0, o.Z)(a, i.$N, "/".concat(i.Qp, "/[slug]")), a)),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.slug,
                        a = "".concat(i.$N, "-").concat(t, "-").concat(n),
                        o = "/".concat(i.Qp, "/").concat(a);
                    return [o, o]
                },
                s = function() {
                    return [c[i.tn][r.Dx], c[i.tn][r.Dx]]
                }
        },
        28307: function(e, t, n) {
            n.d(t, {
                f0: function() {
                    return f
                },
                iG: function() {
                    return m
                },
                oR: function() {
                    return h
                }
            });
            var a, o = n(47842),
                i = n(87394),
                r = n(39232),
                c = n(44297),
                l = n(85208),
                s = "select",
                u = (0, o.Z)({}, r.pX, (a = {}, (0, o.Z)(a, l.Dx, "/".concat(r.pX)), (0, o.Z)(a, "clip", "/".concat(r.pX, "/[slug]")), (0, o.Z)(a, s, "/".concat(r.pX, "/").concat(s)), a)),
                d = function(e) {
                    var t = e.permalink,
                        n = (0, i.Z)(t.split("/"), 3),
                        a = n[0],
                        o = n[1],
                        r = n[2],
                        c = (0, i.Z)(o.split("-"), 2)[1],
                        l = "clip-".concat(c, "-").concat(r),
                        s = "/".concat(a, "/").concat(l);
                    return [s, s]
                },
                m = function() {
                    return [u[r.pX][l.Dx], u[r.pX][l.Dx]]
                },
                h = function() {
                    return [u[r.pX][s], u[r.pX][s]]
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.slug,
                        a = e.permalink;
                    if (a) return d({
                        permalink: a
                    });
                    var o = "clip-".concat(t, "-").concat(n),
                        i = "/".concat(r.pX, "/").concat(o);
                    return (0, c.EK)({
                        id: t
                    }) && (i = "/".concat(r.gP).concat(i)), [i, i]
                }
        },
        56024: function(e, t, n) {
            n.d(t, {
                DQ: function() {
                    return r
                },
                HO: function() {
                    return i
                },
                c5: function() {
                    return c
                }
            });
            var a = n(52322),
                o = n(6620),
                i = (0, o.Z)((0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("g", {
                        fill: "#fc3441",
                        fillRule: "evenodd",
                        children: (0, a.jsx)("path", {
                            d: "m104.44 14.78-1.41-.25c-1.4-.26-2.6-.6-2.6-2.05 0-1.25 1.27-1.83 2.85-1.83 2.35 0 4.42 1.1 4.65 1.22l1.3-3.5c-.5-.26-2.6-1.42-5.91-1.42-3.03 0-6.73 1.64-6.73 5.7 0 3.65 2.53 4.82 4.97 5.26l1.7.3c1.64.29 2.54.92 2.54 2.02 0 1.4-1.28 2.06-3.22 2.06-3.1 0-4.92-.95-5.45-1.18l-1.42 3.43c.44.23 2.56 1.46 6.69 1.46 4 0 7.22-2.04 7.22-5.84-.03-3.54-2.34-4.88-5.18-5.38M116.69.58l-3.8 2.16V7.3h-2v3.73h2v8.07c0 3.44 1.38 6.53 6.24 6.53h1.52V21.9h-.57c-2.4 0-3.4-1.42-3.4-3.34v-7.53h4.36V7.3h-4.35V.58m29.64 10.17c1.48 0 3 .69 3.45 2.36l3.44-1.34c-.96-3.5-4.13-4.82-6.92-4.82-5 0-7.02 3.2-7.02 6.3v6.45c0 3.1 2.02 6.3 7.02 6.3 2.8 0 5.96-1.31 6.92-4.82l-3.44-1.34c-.46 1.67-1.97 2.37-3.45 2.37-2.58 0-3.26-1.45-3.26-3.1v-5.26c0-1.65.68-3.1 3.26-3.1m16.22 4.79 7.1-8.23h-4.67l-6.1 7.18V.58h-3.8v25.06h3.8v-5.83l1.24-1.45 5.44 7.28h4.55l-7.56-10.1M131.66 11.3h-3.95c-.63 0-1.14.53-1.14 1.18v4.4h-3.89v-4.4a5.1 5.1 0 0 1 5.03-5.17h3.95v4m-3.21 10.33h3.94c.63 0 1.14-.52 1.14-1.16v-4.4h3.89v4.4a5.1 5.1 0 0 1-5.03 5.16h-3.94v-4M64.1 7.3h4.36v3.74H64.1v7.53c0 1.92 1 3.34 3.4 3.34h.56v3.73h-1.52c-4.86 0-6.23-3.09-6.23-6.53v-8.07h-6.39v7.53c0 1.92 1 3.34 3.4 3.34h.56v3.73h-1.52c-4.86 0-6.23-3.09-6.23-6.53v-8.07H48.2V7.3h1.93V2.74l3.8-2.16v6.73h6.38V2.74L64.1.58v6.73m-40.96-.36c-1.2 0-2.42.24-3.51.72V.58h-3.8v25.06h3.8V11.32c.76-.5 1.86-.8 2.93-.8 2.39 0 3.5 1.37 3.5 3.38v11.74h3.8V13.37c0-3.7-2.6-6.42-6.72-6.42M42.37 22c-.72.4-1.63.63-2.54.63-2.83 0-3.9-1.49-3.9-3.53V7.3h-3.79v11.87c0 4.61 2.6 6.83 7.23 6.83 2.21 0 4.67-.58 6.8-1.52V7.3h-3.8V22M8.74 14.78l-1.42-.25c-1.4-.26-2.6-.6-2.6-2.05 0-1.25 1.27-1.83 2.85-1.83 2.36 0 4.42 1.1 4.66 1.22l1.28-3.5c-.49-.26-2.59-1.42-5.9-1.42-3.03 0-6.73 1.64-6.73 5.7 0 3.65 2.53 4.82 4.97 5.26l1.7.3c1.64.29 2.54.92 2.54 2.02 0 1.4-1.28 2.06-3.21 2.06-3.1 0-4.93-.95-5.45-1.18L0 24.54C.45 24.77 2.56 26 6.7 26c4 0 7.22-2.04 7.22-5.84-.04-3.54-2.35-4.88-5.18-5.38m71.61.31h-6.4v-1.34c0-1.49.73-3.08 3.22-3.08 2.4 0 3.18 1.55 3.18 3v1.42zm3.8-1.84c0-3.35-2.49-6.3-6.96-6.3-5.07 0-7.02 3.26-7.02 6.3v6.1c0 4.2 2.62 6.65 7.02 6.65 3.89 0 5.9-2.31 6.5-3.7l-3.2-1.98c-.27.82-1.54 1.96-3.27 1.96-2.35 0-3.25-1.34-3.25-3.03l-.01-1h10.19v-5zm2.43.01v12.38h3.79V13.6c0-1.05.58-2.85 3.36-2.85.44 0 1.43.13 1.74.2v-3.8a9.3 9.3 0 0 0-1.93-.19c-4.82 0-6.96 3.11-6.96 6.31"
                        })
                    })
                }), "shutterstock-logo-pos.svg"),
                r = (0, o.Z)((0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("g", {
                        fill: "#fcfcfc",
                        fillRule: "evenodd",
                        children: (0, a.jsx)("path", {
                            d: "m104.44 14.78-1.41-.25c-1.4-.26-2.6-.6-2.6-2.05 0-1.25 1.27-1.83 2.85-1.83 2.35 0 4.42 1.1 4.65 1.22l1.3-3.5c-.5-.26-2.6-1.42-5.91-1.42-3.03 0-6.73 1.64-6.73 5.7 0 3.65 2.53 4.82 4.97 5.26l1.7.3c1.64.29 2.54.92 2.54 2.02 0 1.4-1.28 2.06-3.22 2.06-3.1 0-4.92-.95-5.45-1.18l-1.42 3.43c.44.23 2.56 1.46 6.69 1.46 4 0 7.22-2.04 7.22-5.84-.03-3.54-2.34-4.88-5.18-5.38M116.69.58l-3.8 2.16V7.3h-2v3.73h2v8.07c0 3.44 1.38 6.53 6.24 6.53h1.52V21.9h-.57c-2.4 0-3.4-1.42-3.4-3.34v-7.53h4.36V7.3h-4.35V.58m29.64 10.17c1.48 0 3 .69 3.45 2.36l3.44-1.34c-.96-3.5-4.13-4.82-6.92-4.82-5 0-7.02 3.2-7.02 6.3v6.45c0 3.1 2.02 6.3 7.02 6.3 2.8 0 5.96-1.31 6.92-4.82l-3.44-1.34c-.46 1.67-1.97 2.37-3.45 2.37-2.58 0-3.26-1.45-3.26-3.1v-5.26c0-1.65.68-3.1 3.26-3.1m16.22 4.79 7.1-8.23h-4.67l-6.1 7.18V.58h-3.8v25.06h3.8v-5.83l1.24-1.45 5.44 7.28h4.55l-7.56-10.1M131.66 11.3h-3.95c-.63 0-1.14.53-1.14 1.18v4.4h-3.89v-4.4a5.1 5.1 0 0 1 5.03-5.17h3.95v4m-3.21 10.33h3.94c.63 0 1.14-.52 1.14-1.16v-4.4h3.89v4.4a5.1 5.1 0 0 1-5.03 5.16h-3.94v-4M64.1 7.3h4.36v3.74H64.1v7.53c0 1.92 1 3.34 3.4 3.34h.56v3.73h-1.52c-4.86 0-6.23-3.09-6.23-6.53v-8.07h-6.39v7.53c0 1.92 1 3.34 3.4 3.34h.56v3.73h-1.52c-4.86 0-6.23-3.09-6.23-6.53v-8.07H48.2V7.3h1.93V2.74l3.8-2.16v6.73h6.38V2.74L64.1.58v6.73m-40.96-.36c-1.2 0-2.42.24-3.51.72V.58h-3.8v25.06h3.8V11.32c.76-.5 1.86-.8 2.93-.8 2.39 0 3.5 1.37 3.5 3.38v11.74h3.8V13.37c0-3.7-2.6-6.42-6.72-6.42M42.37 22c-.72.4-1.63.63-2.54.63-2.83 0-3.9-1.49-3.9-3.53V7.3h-3.79v11.87c0 4.61 2.6 6.83 7.23 6.83 2.21 0 4.67-.58 6.8-1.52V7.3h-3.8V22M8.74 14.78l-1.42-.25c-1.4-.26-2.6-.6-2.6-2.05 0-1.25 1.27-1.83 2.85-1.83 2.36 0 4.42 1.1 4.66 1.22l1.28-3.5c-.49-.26-2.59-1.42-5.9-1.42-3.03 0-6.73 1.64-6.73 5.7 0 3.65 2.53 4.82 4.97 5.26l1.7.3c1.64.29 2.54.92 2.54 2.02 0 1.4-1.28 2.06-3.21 2.06-3.1 0-4.93-.95-5.45-1.18L0 24.54C.45 24.77 2.56 26 6.7 26c4 0 7.22-2.04 7.22-5.84-.04-3.54-2.35-4.88-5.18-5.38m71.61.31h-6.4v-1.34c0-1.49.73-3.08 3.22-3.08 2.4 0 3.18 1.55 3.18 3v1.42zm3.8-1.84c0-3.35-2.49-6.3-6.96-6.3-5.07 0-7.02 3.26-7.02 6.3v6.1c0 4.2 2.62 6.65 7.02 6.65 3.89 0 5.9-2.31 6.5-3.7l-3.2-1.98c-.27.82-1.54 1.96-3.27 1.96-2.35 0-3.25-1.34-3.25-3.03l-.01-1h10.19v-5zm2.43.01v12.38h3.79V13.6c0-1.05.58-2.85 3.36-2.85.44 0 1.43.13 1.74.2v-3.8a9.3 9.3 0 0 0-1.93-.19c-4.82 0-6.96 3.11-6.96 6.31"
                        })
                    })
                }), "shutterstock-logo-neg.svg");
            (0, o.Z)((0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("defs", {
                    children: (0, a.jsx)("path", {
                        id: "a",
                        d: "M.128.101h7.505v13.865H.128z"
                    })
                }), (0, a.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [(0, a.jsx)("path", {
                        fill: "#000",
                        d: "M58.605 7.748c-.147-.026-.64-.108-.785-.135-.78-.14-1.448-.323-1.448-1.107 0-.674.706-.989 1.585-.989 1.308 0 2.456.593 2.586.659l.718-1.892c-.276-.143-1.443-.767-3.282-.767-1.683 0-3.74.884-3.74 3.084 0 1.968 1.407 2.6 2.763 2.838.187.035.775.136.943.164.912.155 1.413.494 1.413 1.091 0 .757-.711 1.112-1.788 1.112-1.724 0-2.735-.514-3.028-.634l-.794 1.85c.247.128 1.423.792 3.72.792 2.228 0 4.016-1.104 4.016-3.158-.017-1.912-1.302-2.638-2.879-2.908M65.41.072 63.3 1.24v2.47h-1.11v2.017h1.11v4.36c0 1.863.766 3.536 3.466 3.536h.845v-2.02h-.317c-1.327 0-1.884-.765-1.884-1.805v-4.07h2.422V3.71H65.41V.072M81.886 5.568c.823 0 1.666.374 1.92 1.28l1.913-.728c-.536-1.894-2.296-2.603-3.848-2.603-2.782 0-3.903 1.727-3.903 3.406v3.484c0 1.678 1.121 3.407 3.903 3.407 1.552 0 3.312-.71 3.848-2.604l-1.914-.728c-.253.905-1.096 1.282-1.919 1.282-1.433 0-1.813-.785-1.813-1.68v-2.84c0-.893.38-1.676 1.813-1.676M90.904 8.162l3.943-4.453h-2.594L88.862 7.59V.073h-2.111v13.549h2.111v-3.155l.692-.782 3.02 3.937h2.531zM73.731 5.872h-2.193a.632.632 0 0 0-.631.631v2.38h-2.164v-2.38a2.793 2.793 0 0 1 2.795-2.794h2.193v2.163M71.946 11.458h2.195c.347 0 .63-.282.63-.63v-2.38h2.164v2.38a2.794 2.794 0 0 1-2.794 2.794h-2.195v-2.164M36.182 3.71h2.422v2.016h-2.422v4.07c0 1.041.557 1.807 1.883 1.807h.317v2.019h-.845c-2.7 0-3.464-1.673-3.464-3.535v-4.36h-3.55v4.07c0 1.04.558 1.806 1.885 1.806h.315v2.019h-.845c-2.7 0-3.465-1.673-3.465-3.535v-4.36h-1.07V3.708h1.07V1.24l2.11-1.167V3.71h3.55V1.24L36.182.072V3.71M13.414 3.517c-.667 0-1.344.13-1.954.387V.072H9.351v13.55h2.11V5.876c.423-.266 1.033-.425 1.63-.425 1.326 0 1.95.737 1.95 1.824v6.347h2.107V6.987c0-2-1.45-3.47-3.734-3.47M24.104 11.65c-.4.217-.908.34-1.413.34-1.574 0-2.166-.801-2.166-1.907V3.709h-2.109v6.413c0 2.492 1.44 3.692 4.015 3.692 1.234 0 2.599-.312 3.782-.824V3.71h-2.109v7.94M5.408 7.748c-.147-.026-.641-.108-.786-.135-.779-.14-1.448-.323-1.448-1.107 0-.674.706-.989 1.586-.989 1.308 0 2.455.593 2.586.659l.717-1.892c-.274-.143-1.443-.767-3.282-.767-1.682 0-3.739.884-3.739 3.084 0 1.968 1.405 2.6 2.762 2.838.187.035.776.136.945.164.912.155 1.41.494 1.41 1.091 0 .757-.709 1.112-1.785 1.112-1.726 0-2.737-.514-3.03-.634l-.793 1.85c.247.128 1.423.792 3.72.792 2.228 0 4.017-1.104 4.017-3.158-.02-1.912-1.304-2.638-2.88-2.908M45.215 7.914h-3.556v-.721c0-.805.404-1.667 1.789-1.667 1.335 0 1.767.84 1.767 1.628v.76Zm2.11-.99c0-1.814-1.382-3.408-3.867-3.408-2.82 0-3.904 1.762-3.904 3.407v3.292c0 2.278 1.455 3.599 3.904 3.599 2.16 0 3.28-1.249 3.613-1.999l-1.78-1.07c-.152.44-.857 1.059-1.82 1.059-1.304 0-1.805-.728-1.805-1.64l-.007-.542h5.665V6.923ZM48.674 6.927v6.695h2.107V7.107c0-.569.323-1.541 1.87-1.541.244 0 .793.069.969.102V3.623a5.33 5.33 0 0 0-1.076-.107c-2.68 0-3.87 1.682-3.87 3.41M96.972 4.272c0-.078-.05-.152-.182-.152h-.133v.334h.133c.143 0 .182-.064.182-.167v-.015Zm-.02.708a.028.028 0 0 1-.025-.014l-.157-.345h-.113v.34c0 .01-.005.019-.015.019h-.196c-.01 0-.02-.01-.02-.02V3.944h.393c.265 0 .384.167.384.324v.02a.35.35 0 0 1-.207.325l.197.349c.005.01 0 .019-.01.019h-.23Zm-.162-1.298c-.447 0-.772.35-.772.797 0 .418.33.772.772.772a.76.76 0 0 0 .767-.772c0-.443-.35-.797-.767-.797Zm0 1.8c-.57 0-1.032-.433-1.032-1.003a1.03 1.03 0 0 1 2.06 0c0 .57-.458 1.003-1.028 1.003ZM107.76 7.378c0-1.836-.946-2.853-2.618-2.853-1.417 0-2.525.927-2.525 2.725v.927h5.142v-.8Zm.835 4.088c.127.073.182.182.109.345-.527 1.218-1.617 1.98-3.453 1.98-2.434 0-3.78-1.49-3.78-3.76V7.214c0-2.253 1.582-3.67 3.69-3.67 2.253 0 3.725 1.326 3.725 3.888v1.254c0 .29-.164.418-.455.418h-5.814v.872c0 1.69.836 2.834 2.634 2.834 1.49 0 2.145-.635 2.527-1.471.09-.182.181-.2.308-.11l.509.237ZM116.89 13.628c-.11 0-.2-.018-.2-.163V7.123c0-1.49-.381-2.58-1.98-2.58-1.2 0-2.345.927-2.89 2.017v6.905c0 .145-.09.163-.217.163h-.71c-.108 0-.217-.018-.217-.163V3.87c0-.145.09-.163.218-.163h.69c.11 0 .2.018.2.163v1.436c.745-1.017 1.854-1.763 3.234-1.763 1.926 0 2.799 1.29 2.799 3.198v6.724c0 .145-.091.163-.2.163h-.727ZM123.37 13.628c-1.78 0-2.726-.49-2.726-2.743V4.979h-1.326c-.145 0-.164-.09-.164-.2v-.527c0-.109.019-.2.164-.2h1.326V1.745c0-.146.091-.182.219-.182h.708c.109 0 .2.036.2.182v2.307h2.017c.145 0 .163.091.163.2v.527c0 .11-.018.2-.163.2h-2.017v6.033c0 1.344.563 1.635 1.599 1.635h.636c.163 0 .236.091.236.2v.527c0 .182-.036.254-.272.254h-.6ZM131.7 7.378c0-1.836-.946-2.853-2.617-2.853-1.417 0-2.526.927-2.526 2.725v.927h5.143v-.8Zm.835 4.088c.128.073.182.182.11.345-.528 1.218-1.618 1.98-3.453 1.98-2.435 0-3.78-1.49-3.78-3.76V7.214c0-2.253 1.581-3.67 3.69-3.67 2.252 0 3.724 1.326 3.724 3.888v1.254c0 .29-.163.418-.454.418h-5.815v.872c0 1.69.836 2.834 2.635 2.834 1.49 0 2.144-.635 2.526-1.471.09-.182.182-.2.309-.11l.508.237ZM134.834 13.628c-.11 0-.218-.018-.218-.163V3.87c0-.145.109-.163.218-.163h.69c.11 0 .2.036.2.181v1.945c.545-1.181 1.872-2.29 3.126-2.29.218 0 .254.073.236.255l-.109.745c-.018.145-.109.182-.2.2-.163 0-.29-.018-.4 0-1.29.145-2.362 1.29-2.616 2.271v6.45c0 .146-.11.164-.218.164h-.709Z"
                    }), (0, a.jsxs)("g", {
                        transform: "translate(140.38 3.442)",
                        children: [(0, a.jsx)("mask", {
                            id: "b",
                            fill: "#fff",
                            children: (0, a.jsx)("use", {
                                xlinkHref: "#a"
                            })
                        }), (0, a.jsx)("path", {
                            fill: "#000",
                            d: "M6.506 4.062c0-1.835-.654-2.943-2.326-2.943-1.508 0-2.907 1.326-2.907 3.07v2.726c0 1.435 1.072 2.453 2.653 2.453 1.526 0 2.58-.872 2.58-3.07V4.061Zm-6.16 9.904c-.11 0-.218-.018-.218-.164V.41c0-.145.109-.164.218-.164h.709c.109 0 .2.019.2.164v1.545C1.671 1.209 2.78.1 4.324.1c2.108 0 3.308 1.308 3.308 3.816v2.49c0 2.525-1.6 3.942-3.58 3.942-1.563 0-2.453-.799-2.78-1.453v4.906c0 .146-.11.164-.218.164h-.71Z",
                            mask: "url(#b)"
                        })]
                    }), (0, a.jsx)("path", {
                        fill: "#000",
                        d: "M150.198 13.628c-.11 0-.218-.018-.218-.163V3.87c0-.145.109-.163.218-.163h.69c.11 0 .2.036.2.181v1.945c.545-1.181 1.872-2.29 3.126-2.29.218 0 .254.073.236.255l-.109.745c-.018.145-.11.182-.2.2-.164 0-.29-.018-.4 0-1.29.145-2.362 1.29-2.617 2.271v6.45c0 .146-.109.164-.217.164h-.71ZM156.107 13.628c-.145 0-.236-.072-.236-.236v-9.43c0-.2.127-.255.255-.255h.653c.146 0 .237.073.237.236v9.43c0 .2-.127.255-.255.255h-.654Zm0-11.448c-.145 0-.236-.072-.236-.236V.236c0-.145.09-.236.236-.236h.654c.164 0 .255.072.255.236v1.69c0 .2-.11.254-.255.254h-.654ZM164.362 6.142c-.127.036-.2.036-.254-.127-.291-.945-.854-1.49-2.09-1.49-1.18 0-1.944.58-1.944 1.599 0 2.435 5.142 1.344 5.142 4.978 0 1.49-1.235 2.69-3.198 2.69-1.635 0-2.907-.782-3.288-2.253-.037-.182.018-.291.163-.327l.6-.2c.145-.055.236-.019.272.145.2.909.872 1.672 2.253 1.672 1.272 0 2.108-.709 2.108-1.708 0-2.708-5.142-1.563-5.142-4.98 0-1.525 1.254-2.598 3.089-2.598 1.69 0 2.707.927 3.052 2.145.055.181-.018.272-.145.308l-.618.146ZM173.021 7.378c0-1.836-.945-2.853-2.617-2.853-1.417 0-2.525.927-2.525 2.725v.927h5.142v-.8Zm.836 4.088c.127.073.181.182.109.345-.527 1.218-1.617 1.98-3.453 1.98-2.435 0-3.78-1.49-3.78-3.76V7.214c0-2.253 1.582-3.67 3.69-3.67 2.253 0 3.725 1.326 3.725 3.888v1.254c0 .29-.164.418-.455.418h-5.814v.872c0 1.69.835 2.834 2.634 2.834 1.49 0 2.144-.635 2.526-1.471.091-.182.182-.2.31-.11l.508.237Z"
                    })]
                })]
            }), "shutterstock-ent-logo-pos.svg"), (0, o.Z)((0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("defs", {
                    children: (0, a.jsx)("path", {
                        id: "a",
                        d: "M.128.101h7.505v13.865H.128z"
                    })
                }), (0, a.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [(0, a.jsx)("path", {
                        fill: "#FFF",
                        d: "M58.605 7.748c-.147-.026-.64-.108-.785-.135-.78-.14-1.448-.323-1.448-1.107 0-.674.706-.989 1.585-.989 1.308 0 2.456.593 2.586.659l.718-1.892c-.276-.143-1.443-.767-3.282-.767-1.683 0-3.74.884-3.74 3.084 0 1.968 1.407 2.6 2.763 2.838.187.035.775.136.943.164.912.155 1.413.494 1.413 1.091 0 .757-.711 1.112-1.788 1.112-1.724 0-2.735-.514-3.028-.634l-.794 1.85c.247.128 1.423.792 3.72.792 2.228 0 4.016-1.104 4.016-3.158-.017-1.912-1.302-2.638-2.879-2.908M65.41.072 63.3 1.24v2.47h-1.11v2.017h1.11v4.36c0 1.863.766 3.536 3.466 3.536h.845v-2.02h-.317c-1.327 0-1.884-.765-1.884-1.805v-4.07h2.422V3.71H65.41V.072M81.886 5.568c.823 0 1.666.374 1.92 1.28l1.913-.728c-.536-1.894-2.296-2.603-3.848-2.603-2.782 0-3.903 1.727-3.903 3.406v3.484c0 1.678 1.121 3.407 3.903 3.407 1.552 0 3.312-.71 3.848-2.604l-1.914-.728c-.253.905-1.096 1.282-1.919 1.282-1.433 0-1.813-.785-1.813-1.68v-2.84c0-.893.38-1.676 1.813-1.676M90.904 8.162l3.943-4.453h-2.594L88.862 7.59V.073h-2.111v13.549h2.111v-3.155l.692-.782 3.02 3.937h2.531zM73.731 5.872h-2.193a.632.632 0 0 0-.631.631v2.38h-2.164v-2.38a2.793 2.793 0 0 1 2.795-2.794h2.193v2.163M71.946 11.458h2.195c.347 0 .63-.282.63-.63v-2.38h2.164v2.38a2.794 2.794 0 0 1-2.794 2.794h-2.195v-2.164M36.182 3.71h2.422v2.016h-2.422v4.07c0 1.041.557 1.807 1.883 1.807h.317v2.019h-.845c-2.7 0-3.464-1.673-3.464-3.535v-4.36h-3.55v4.07c0 1.04.558 1.806 1.885 1.806h.315v2.019h-.845c-2.7 0-3.465-1.673-3.465-3.535v-4.36h-1.07V3.708h1.07V1.24l2.11-1.167V3.71h3.55V1.24L36.182.072V3.71M13.414 3.517c-.667 0-1.344.13-1.954.387V.072H9.351v13.55h2.11V5.876c.423-.266 1.033-.425 1.63-.425 1.326 0 1.95.737 1.95 1.824v6.347h2.107V6.987c0-2-1.45-3.47-3.734-3.47M24.104 11.65c-.4.217-.908.34-1.413.34-1.574 0-2.166-.801-2.166-1.907V3.709h-2.109v6.413c0 2.492 1.44 3.692 4.015 3.692 1.234 0 2.599-.312 3.782-.824V3.71h-2.109v7.94M5.408 7.748c-.147-.026-.641-.108-.786-.135-.779-.14-1.448-.323-1.448-1.107 0-.674.706-.989 1.586-.989 1.308 0 2.455.593 2.586.659l.717-1.892c-.274-.143-1.443-.767-3.282-.767-1.682 0-3.739.884-3.739 3.084 0 1.968 1.405 2.6 2.762 2.838.187.035.776.136.945.164.912.155 1.41.494 1.41 1.091 0 .757-.709 1.112-1.785 1.112-1.726 0-2.737-.514-3.03-.634l-.793 1.85c.247.128 1.423.792 3.72.792 2.228 0 4.017-1.104 4.017-3.158-.02-1.912-1.304-2.638-2.88-2.908M45.215 7.914h-3.556v-.721c0-.805.404-1.667 1.789-1.667 1.335 0 1.767.84 1.767 1.628v.76Zm2.11-.99c0-1.814-1.382-3.408-3.867-3.408-2.82 0-3.904 1.762-3.904 3.407v3.292c0 2.278 1.455 3.599 3.904 3.599 2.16 0 3.28-1.249 3.613-1.999l-1.78-1.07c-.152.44-.857 1.059-1.82 1.059-1.304 0-1.805-.728-1.805-1.64l-.007-.542h5.665V6.923ZM48.674 6.927v6.695h2.107V7.107c0-.569.323-1.541 1.87-1.541.244 0 .793.069.969.102V3.623a5.33 5.33 0 0 0-1.076-.107c-2.68 0-3.87 1.682-3.87 3.41M96.972 4.272c0-.078-.05-.152-.182-.152h-.133v.334h.133c.143 0 .182-.064.182-.167v-.015Zm-.02.708a.028.028 0 0 1-.025-.014l-.157-.345h-.113v.34c0 .01-.005.019-.015.019h-.196c-.01 0-.02-.01-.02-.02V3.944h.393c.265 0 .384.167.384.324v.02a.35.35 0 0 1-.207.325l.197.349c.005.01 0 .019-.01.019h-.23Zm-.162-1.298c-.447 0-.772.35-.772.797 0 .418.33.772.772.772a.76.76 0 0 0 .767-.772c0-.443-.35-.797-.767-.797Zm0 1.8c-.57 0-1.032-.433-1.032-1.003a1.03 1.03 0 0 1 2.06 0c0 .57-.458 1.003-1.028 1.003ZM107.76 7.378c0-1.836-.946-2.853-2.618-2.853-1.417 0-2.525.927-2.525 2.725v.927h5.142v-.8Zm.835 4.088c.127.073.182.182.109.345-.527 1.218-1.617 1.98-3.453 1.98-2.434 0-3.78-1.49-3.78-3.76V7.214c0-2.253 1.582-3.67 3.69-3.67 2.253 0 3.725 1.326 3.725 3.888v1.254c0 .29-.164.418-.455.418h-5.814v.872c0 1.69.836 2.834 2.634 2.834 1.49 0 2.145-.635 2.527-1.471.09-.182.181-.2.308-.11l.509.237ZM116.89 13.628c-.11 0-.2-.018-.2-.163V7.123c0-1.49-.381-2.58-1.98-2.58-1.2 0-2.345.927-2.89 2.017v6.905c0 .145-.09.163-.217.163h-.71c-.108 0-.217-.018-.217-.163V3.87c0-.145.09-.163.218-.163h.69c.11 0 .2.018.2.163v1.436c.745-1.017 1.854-1.763 3.234-1.763 1.926 0 2.799 1.29 2.799 3.198v6.724c0 .145-.091.163-.2.163h-.727ZM123.37 13.628c-1.78 0-2.726-.49-2.726-2.743V4.979h-1.326c-.145 0-.164-.09-.164-.2v-.527c0-.109.019-.2.164-.2h1.326V1.745c0-.146.091-.182.219-.182h.708c.109 0 .2.036.2.182v2.307h2.017c.145 0 .163.091.163.2v.527c0 .11-.018.2-.163.2h-2.017v6.033c0 1.344.563 1.635 1.599 1.635h.636c.163 0 .236.091.236.2v.527c0 .182-.036.254-.272.254h-.6ZM131.7 7.378c0-1.836-.946-2.853-2.617-2.853-1.417 0-2.526.927-2.526 2.725v.927h5.143v-.8Zm.835 4.088c.128.073.182.182.11.345-.528 1.218-1.618 1.98-3.453 1.98-2.435 0-3.78-1.49-3.78-3.76V7.214c0-2.253 1.581-3.67 3.69-3.67 2.252 0 3.724 1.326 3.724 3.888v1.254c0 .29-.163.418-.454.418h-5.815v.872c0 1.69.836 2.834 2.635 2.834 1.49 0 2.144-.635 2.526-1.471.09-.182.182-.2.309-.11l.508.237ZM134.834 13.628c-.11 0-.218-.018-.218-.163V3.87c0-.145.109-.163.218-.163h.69c.11 0 .2.036.2.181v1.945c.545-1.181 1.872-2.29 3.126-2.29.218 0 .254.073.236.255l-.109.745c-.018.145-.109.182-.2.2-.163 0-.29-.018-.4 0-1.29.145-2.362 1.29-2.616 2.271v6.45c0 .146-.11.164-.218.164h-.709Z"
                    }), (0, a.jsxs)("g", {
                        transform: "translate(140.38 3.442)",
                        children: [(0, a.jsx)("mask", {
                            id: "b",
                            fill: "#fff",
                            children: (0, a.jsx)("use", {
                                xlinkHref: "#a"
                            })
                        }), (0, a.jsx)("path", {
                            fill: "#FFF",
                            d: "M6.506 4.062c0-1.835-.654-2.943-2.326-2.943-1.508 0-2.907 1.326-2.907 3.07v2.726c0 1.435 1.072 2.453 2.653 2.453 1.526 0 2.58-.872 2.58-3.07V4.061Zm-6.16 9.904c-.11 0-.218-.018-.218-.164V.41c0-.145.109-.164.218-.164h.709c.109 0 .2.019.2.164v1.545C1.671 1.209 2.78.1 4.324.1c2.108 0 3.308 1.308 3.308 3.816v2.49c0 2.525-1.6 3.942-3.58 3.942-1.563 0-2.453-.799-2.78-1.453v4.906c0 .146-.11.164-.218.164h-.71Z",
                            mask: "url(#b)"
                        })]
                    }), (0, a.jsx)("path", {
                        fill: "#FFF",
                        d: "M150.198 13.628c-.11 0-.218-.018-.218-.163V3.87c0-.145.109-.163.218-.163h.69c.11 0 .2.036.2.181v1.945c.545-1.181 1.872-2.29 3.126-2.29.218 0 .254.073.236.255l-.109.745c-.018.145-.11.182-.2.2-.164 0-.29-.018-.4 0-1.29.145-2.362 1.29-2.617 2.271v6.45c0 .146-.109.164-.217.164h-.71ZM156.107 13.628c-.145 0-.236-.072-.236-.236v-9.43c0-.2.127-.255.255-.255h.653c.146 0 .237.073.237.236v9.43c0 .2-.127.255-.255.255h-.654Zm0-11.448c-.145 0-.236-.072-.236-.236V.236c0-.145.09-.236.236-.236h.654c.164 0 .255.072.255.236v1.69c0 .2-.11.254-.255.254h-.654ZM164.362 6.142c-.127.036-.2.036-.254-.127-.291-.945-.854-1.49-2.09-1.49-1.18 0-1.944.58-1.944 1.599 0 2.435 5.142 1.344 5.142 4.978 0 1.49-1.235 2.69-3.198 2.69-1.635 0-2.907-.782-3.288-2.253-.037-.182.018-.291.163-.327l.6-.2c.145-.055.236-.019.272.145.2.909.872 1.672 2.253 1.672 1.272 0 2.108-.709 2.108-1.708 0-2.708-5.142-1.563-5.142-4.98 0-1.525 1.254-2.598 3.089-2.598 1.69 0 2.707.927 3.052 2.145.055.181-.018.272-.145.308l-.618.146ZM173.021 7.378c0-1.836-.945-2.853-2.617-2.853-1.417 0-2.525.927-2.525 2.725v.927h5.142v-.8Zm.836 4.088c.127.073.181.182.109.345-.527 1.218-1.617 1.98-3.453 1.98-2.435 0-3.78-1.49-3.78-3.76V7.214c0-2.253 1.582-3.67 3.69-3.67 2.253 0 3.725 1.326 3.725 3.888v1.254c0 .29-.164.418-.455.418h-5.814v.872c0 1.69.835 2.834 2.634 2.834 1.49 0 2.144-.635 2.526-1.471.091-.182.182-.2.31-.11l.508.237Z"
                    })]
                })]
            }), "shutterstock-ent-logo-neg.svg"), (0, o.Z)((0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("g", {
                    fill: "#000",
                    fillRule: "evenodd",
                    children: [(0, a.jsx)("path", {
                        d: "m88.12 12.08-1.19-.2c-1.19-.21-2.2-.49-2.2-1.68 0-1 1.07-1.5 2.4-1.5a9.29 9.29 0 0 1 3.93 1l1.09-2.87a10.45 10.45 0 0 0-5-1.17c-2.56 0-5.68 1.34-5.68 4.68 0 3 2.14 3.95 4.19 4.31l1.44.25c1.38.23 2.14.75 2.14 1.65 0 1.15-1.08 1.69-2.71 1.69a10.66 10.66 0 0 1-4.6-1l-1.2 2.81a11.49 11.49 0 0 0 5.64 1.2c3.38 0 6.1-1.68 6.1-4.79 0-2.91-2-4-4.37-4.42M98.45.43 95.24 2.2V6h-1.68v3h1.68v6.62c0 2.83 1.17 5.37 5.27 5.37h1.28v-3.06h-.48a2.53 2.53 0 0 1-2.86-2.74V9h3.67V6h-3.67V.43M123.45 8.77a2.83 2.83 0 0 1 2.92 2l2.9-1.11c-.81-2.87-3.48-3.95-5.84-3.95-4.22 0-5.92 2.62-5.92 5.17v5.29c0 2.55 1.7 5.17 5.92 5.17 2.36 0 5-1.08 5.84-3.95l-2.9-1.11a2.83 2.83 0 0 1-2.92 1.95c-2.17 0-2.75-1.19-2.75-2.55v-4.36c0-1.36.58-2.55 2.75-2.55M137.14 12.71l5.99-6.76h-3.94l-5.15 5.89V.43h-3.2V21h3.2v-4.79l1.05-1.19 4.59 5.98h3.84l-6.38-8.29M111.08 9.24h-3.33a1 1 0 0 0-1 .95v3.62h-3.28v-3.62A4.24 4.24 0 0 1 107.75 6h3.33v3.29M108.37 17.71h3.33a1 1 0 0 0 1-.95v-3.61h3.28v3.61A4.24 4.24 0 0 1 111.7 21h-3.33v-3.29M54.08 6h3.68v3h-3.68v6.18a2.53 2.53 0 0 0 2.86 2.74h.48V21h-1.28c-4.1 0-5.26-2.54-5.26-5.37V9h-5.39v6.18a2.53 2.53 0 0 0 2.86 2.74h.48V21h-1.28c-4.1 0-5.26-2.54-5.26-5.37V9h-1.62V6h1.62V2.2l3.2-1.77V6h5.39V2.2l3.2-1.77V6M19.52 5.66a7.67 7.67 0 0 0-3 .59V.43h-3.2V21h3.2V9.24A4.87 4.87 0 0 1 19 8.6c2 0 3 1.12 3 2.76V21h3.2V10.93c0-3-2.2-5.27-5.67-5.27M35.75 18a4.72 4.72 0 0 1-2.14.51c-2.39 0-3.29-1.21-3.29-2.89V6h-3.2v9.74c0 3.78 2.18 5.6 6.09 5.6 2-.054 3.97-.51 5.79-1.34V6h-3.2v12M7.37 12.08l-1.19-.2C5 11.67 4 11.39 4 10.2c0-1 1.07-1.5 2.41-1.5a9.22 9.22 0 0 1 3.92 1l1.07-2.87a10.41 10.41 0 0 0-5-1.17C3.87 5.66.75 7 .75 10.34c0 3 2.13 3.95 4.19 4.31l1.43.25c1.39.23 2.14.75 2.14 1.65 0 1.15-1.07 1.69-2.71 1.69a10.71 10.71 0 0 1-4.6-1L0 20.09a11.55 11.55 0 0 0 5.65 1.2c3.38 0 6.09-1.68 6.09-4.79 0-2.91-2-4-4.37-4.42"
                    }), (0, a.jsx)("path", {
                        fillRule: "nonzero",
                        d: "M71 10.83c0-2.75-2.09-5.17-5.86-5.17-4.29 0-5.93 2.67-5.93 5.17v5c0 3.46 2.21 5.46 5.93 5.46a5.81 5.81 0 0 0 5.48-3l-2.7-1.63a3 3 0 0 1-2.76 1.61c-2 0-2.74-1.11-2.74-2.49v-.82H71v-4.13Zm-3.2 1.54h-5.4v-1.1a2.38 2.38 0 0 1 2.71-2.53 2.36 2.36 0 0 1 2.68 2.47l.01 1.16Z"
                    }), (0, a.jsx)("path", {
                        d: "M73 10.84V21h3.2v-9.89c0-.86.49-2.34 2.84-2.34a12 12 0 0 1 1.47.16V5.82a8.074 8.074 0 0 0-1.63-.16c-4.03 0-5.88 2.55-5.88 5.18"
                    }), (0, a.jsx)("path", {
                        fillRule: "nonzero",
                        d: "M146.08 8.64a1.52 1.52 0 0 1-1.57-1.52 1.57 1.57 0 0 1 3.13 0 1.52 1.52 0 0 1-1.56 1.52Zm0-2.73a1.19 1.19 0 1 0 0 2.38 1.15 1.15 0 0 0 1.16-1.17 1.19 1.19 0 0 0-1.16-1.21Zm.24 2-.23-.52h-.17v.51h-.3V6.31h.6a.51.51 0 0 1 .58.49.52.52 0 0 1-.31.49l.3.53-.47.09Zm0-1.07c0-.12-.07-.23-.27-.23h-.2v.5h.2c.21 0 .27-.09.27-.25v-.02Z"
                    })]
                })
            }), "shutterstock-ent-logo-mobile-pos.svg"), (0, o.Z)((0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("g", {
                    fill: "#FFF",
                    fillRule: "evenodd",
                    children: [(0, a.jsx)("path", {
                        d: "m88.12 12.08-1.19-.2c-1.19-.21-2.2-.49-2.2-1.68 0-1 1.07-1.5 2.4-1.5a9.29 9.29 0 0 1 3.93 1l1.09-2.87a10.45 10.45 0 0 0-5-1.17c-2.56 0-5.68 1.34-5.68 4.68 0 3 2.14 3.95 4.19 4.31l1.44.25c1.38.23 2.14.75 2.14 1.65 0 1.15-1.08 1.69-2.71 1.69a10.66 10.66 0 0 1-4.6-1l-1.2 2.81a11.49 11.49 0 0 0 5.64 1.2c3.38 0 6.1-1.68 6.1-4.79 0-2.91-2-4-4.37-4.42M98.45.43 95.24 2.2V6h-1.68v3h1.68v6.62c0 2.83 1.17 5.37 5.27 5.37h1.28v-3.06h-.48a2.53 2.53 0 0 1-2.86-2.74V9h3.67V6h-3.67V.43M123.45 8.77a2.83 2.83 0 0 1 2.92 2l2.9-1.11c-.81-2.87-3.48-3.95-5.84-3.95-4.22 0-5.92 2.62-5.92 5.17v5.29c0 2.55 1.7 5.17 5.92 5.17 2.36 0 5-1.08 5.84-3.95l-2.9-1.11a2.83 2.83 0 0 1-2.92 1.95c-2.17 0-2.75-1.19-2.75-2.55v-4.36c0-1.36.58-2.55 2.75-2.55M137.14 12.71l5.99-6.76h-3.94l-5.15 5.89V.43h-3.2V21h3.2v-4.79l1.05-1.19 4.59 5.98h3.84l-6.38-8.29M111.08 9.24h-3.33a1 1 0 0 0-1 .95v3.62h-3.28v-3.62A4.24 4.24 0 0 1 107.75 6h3.33v3.29M108.37 17.71h3.33a1 1 0 0 0 1-.95v-3.61h3.28v3.61A4.24 4.24 0 0 1 111.7 21h-3.33v-3.29M54.08 6h3.68v3h-3.68v6.18a2.53 2.53 0 0 0 2.86 2.74h.48V21h-1.28c-4.1 0-5.26-2.54-5.26-5.37V9h-5.39v6.18a2.53 2.53 0 0 0 2.86 2.74h.48V21h-1.28c-4.1 0-5.26-2.54-5.26-5.37V9h-1.62V6h1.62V2.2l3.2-1.77V6h5.39V2.2l3.2-1.77V6M19.52 5.66a7.67 7.67 0 0 0-3 .59V.43h-3.2V21h3.2V9.24A4.87 4.87 0 0 1 19 8.6c2 0 3 1.12 3 2.76V21h3.2V10.93c0-3-2.2-5.27-5.67-5.27M35.75 18a4.72 4.72 0 0 1-2.14.51c-2.39 0-3.29-1.21-3.29-2.89V6h-3.2v9.74c0 3.78 2.18 5.6 6.09 5.6 2-.054 3.97-.51 5.79-1.34V6h-3.2v12M7.37 12.08l-1.19-.2C5 11.67 4 11.39 4 10.2c0-1 1.07-1.5 2.41-1.5a9.22 9.22 0 0 1 3.92 1l1.07-2.87a10.41 10.41 0 0 0-5-1.17C3.87 5.66.75 7 .75 10.34c0 3 2.13 3.95 4.19 4.31l1.43.25c1.39.23 2.14.75 2.14 1.65 0 1.15-1.07 1.69-2.71 1.69a10.71 10.71 0 0 1-4.6-1L0 20.09a11.55 11.55 0 0 0 5.65 1.2c3.38 0 6.09-1.68 6.09-4.79 0-2.91-2-4-4.37-4.42"
                    }), (0, a.jsx)("path", {
                        fillRule: "nonzero",
                        d: "M71 10.83c0-2.75-2.09-5.17-5.86-5.17-4.29 0-5.93 2.67-5.93 5.17v5c0 3.46 2.21 5.46 5.93 5.46a5.81 5.81 0 0 0 5.48-3l-2.7-1.63a3 3 0 0 1-2.76 1.61c-2 0-2.74-1.11-2.74-2.49v-.82H71v-4.13Zm-3.2 1.54h-5.4v-1.1a2.38 2.38 0 0 1 2.71-2.53 2.36 2.36 0 0 1 2.68 2.47l.01 1.16Z"
                    }), (0, a.jsx)("path", {
                        d: "M73 10.84V21h3.2v-9.89c0-.86.49-2.34 2.84-2.34a12 12 0 0 1 1.47.16V5.82a8.074 8.074 0 0 0-1.63-.16c-4.03 0-5.88 2.55-5.88 5.18"
                    }), (0, a.jsx)("path", {
                        fillRule: "nonzero",
                        d: "M146.08 8.64a1.52 1.52 0 0 1-1.57-1.52 1.57 1.57 0 0 1 3.13 0 1.52 1.52 0 0 1-1.56 1.52Zm0-2.73a1.19 1.19 0 1 0 0 2.38 1.15 1.15 0 0 0 1.16-1.17 1.19 1.19 0 0 0-1.16-1.21Zm.24 2-.23-.52h-.17v.51h-.3V6.31h.6a.51.51 0 0 1 .58.49.52.52 0 0 1-.31.49l.3.53-.47.09Zm0-1.07c0-.12-.07-.23-.27-.23h-.2v.5h.2c.21 0 .27-.09.27-.25v-.02Z"
                    })]
                })
            }), "shutterstock-ent-logo-mobile-neg.svg");
            var c = (0, o.Z)((0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("g", {
                    clipPath: "url(#clip0_1_3258)",
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 24H24V0H0V24Z",
                        fill: "#FC3441"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.4031 7.58382H9.95479C9.40636 7.58382 8.9614 8.03515 8.9614 8.58847V12.3797H5.55969V8.58847C5.55969 6.12953 7.52608 4.13782 9.95479 4.13782H13.4031V7.58382Z",
                        fill: "white"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.5963 16.4834H14.0469C14.593 16.4834 15.0391 16.0326 15.0391 15.4775V11.6874H18.4403V15.4775C18.4403 17.9365 16.4733 19.93 14.0469 19.93H10.5963V16.4834Z",
                        fill: "white"
                    })]
                })
            }), "shutterstock-ecomm-logo-square.svg")
        },
        77710: function(e, t, n) {
            n.d(t, {
                $v: function() {
                    return h
                },
                KZ: function() {
                    return p
                },
                WX: function() {
                    return m
                },
                eX: function() {
                    return u
                },
                pk: function() {
                    return d
                },
                w4: function() {
                    return f
                }
            });
            var a, o, i, r = n(98788),
                c = n(5163),
                l = n(91855),
                s = "/user-properties",
                u = {
                    surveyAnswer: "survey_answer",
                    surveyInteraction: "survey_interaction",
                    modalsDisplayed: "modalsDisplayed"
                },
                d = 2,
                m = "HAS_SEEN_FBA_COUPON_MODAL",
                h = (a = (0, r.Z)(function(e) {
                    return (0, c.__generator)(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, l.kO.post("".concat(s, "/search"), e)];
                            case 1:
                                return [2, t.sent().data]
                        }
                    })
                }), function(e) {
                    return a.apply(this, arguments)
                }),
                f = (o = (0, r.Z)(function(e) {
                    return (0, c.__generator)(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, l.kO.post("".concat(s), e)];
                            case 1:
                                return [2, t.sent().data]
                        }
                    })
                }), function(e) {
                    return o.apply(this, arguments)
                }),
                p = (i = (0, r.Z)(function(e) {
                    return (0, c.__generator)(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, l.kO.post("".concat(s, "/update"), e)];
                            case 1:
                                return [2, t.sent().data]
                        }
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                })
        },
        56219: function(e, t, n) {
            n.d(t, {
                $8: function() {
                    return y
                },
                GI: function() {
                    return k
                },
                Lj: function() {
                    return h
                },
                Mz: function() {
                    return _
                },
                Qs: function() {
                    return B
                },
                WT: function() {
                    return x
                },
                YN: function() {
                    return d
                },
                aA: function() {
                    return v
                },
                gS: function() {
                    return m
                },
                ii: function() {
                    return Z
                },
                jO: function() {
                    return g
                },
                sU: function() {
                    return b
                },
                sX: function() {
                    return L
                },
                tK: function() {
                    return f
                },
                tq: function() {
                    return p
                }
            });
            var a = n(68827),
                o = n(45089),
                i = o.AZ.IMAGE,
                r = o.AZ.VIDEO,
                c = o.AZ.AUDIO,
                l = o.AZ.ELEMENT,
                s = o.AZ.SFX,
                u = o.L0.DESIGN,
                d = function(e) {
                    return e.type === i && !e.isWithdrawn && !e.isRexEditorial
                },
                m = function(e) {
                    return e.type === i && !e.isWithdrawn && !!e.isRexEditorial
                },
                h = function(e) {
                    return e.type === c && !e.isWithdrawn && !e.isRexEditorial
                },
                f = function(e) {
                    return e.type === r && !e.isWithdrawn && !e.isRexEditorial
                },
                p = function(e) {
                    return e.type === r && !e.isWithdrawn && !!e.isRexEditorial
                },
                v = function(e) {
                    return e.type === l && !e.isWithdrawn
                },
                g = function(e) {
                    return e.type !== u && !!e.isWithdrawn
                },
                b = function(e) {
                    return e.type === u
                },
                k = function(e) {
                    return e.type === s
                },
                y = function(e) {
                    return !e.isWithdrawn && !!e.isRexEditorial
                },
                x = function(e, t, n) {
                    var a = e.t;
                    return (b(t) || h(t) || k(t) || t.isUpload ? null == t ? void 0 : t.title : n) || a("common:adjectives_untitled")
                },
                Z = function(e) {
                    var t, n, o;
                    return !!(null === (t = e.holding) || void 0 === t ? void 0 : t.lastLicensedAt) || (null === (n = e.holding) || void 0 === n ? void 0 : n.assetStatus.includes(a.O1)) || (null === (o = e.holding) || void 0 === o ? void 0 : o.assetStatus.includes(a.Th))
                },
                _ = function(e) {
                    var t, n, o;
                    return (null === (t = e.holding) || void 0 === t ? void 0 : t.assetStatus) !== void 0 && (null === (n = e.holding) || void 0 === n ? void 0 : null === (o = n.assetStatus) || void 0 === o ? void 0 : o.includes(a.nQ))
                },
                L = function(e) {
                    var t, n = {
                        assetType: e.mediaItem.type,
                        aspect: null !== (t = e.mediaItem.aspect) && void 0 !== t ? t : 1,
                        url: e.mediaItem.src || e.mediaItem.thumbnailUrl || ""
                    };
                    return f(e.mediaItem) || p(e.mediaItem) ? n.url = e.mediaItem.src : b(e.mediaItem) ? n.url = e.mediaItem.thumbnailUrl || "" : (d(e.mediaItem) || m(e.mediaItem)) && (n.url = e.mediaItem.src, n.aspect = e.mediaItem.aspect), n
                },
                B = function(e) {
                    return f(e) || p(e) ? e.previewImageUrl : b(e) ? e.thumbnailUrl : d(e) || m(e) ? e.src : h(e) || k(e) ? e.waveformPng : null
                }
        },
        58287: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return a
                }
            });
            var a = function(e) {
                return parseInt(e, 10)
            }
        },
        76768: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return i
                }
            });
            var a = n(70314),
                o = n.n(a)()().publicRuntimeConfig.basePath,
                i = function(e) {
                    return "".concat(null != o ? o : "").concat(e)
                }
        }
    }
]);
//# sourceMappingURL=60715-0e809e4a0e67f190.js.map