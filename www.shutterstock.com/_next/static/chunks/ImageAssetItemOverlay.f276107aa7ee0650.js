"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55053, 13279, 34116, 38315, 27963], {
        27064: function(n, t, e) {
            e.d(t, {
                f: function() {
                    return x
                }
            });
            var o = e(70865),
                r = e(96670),
                a = e(52322),
                i = e(67550),
                c = e(85801),
                u = e(62197),
                s = e(52309),
                d = e(94909),
                l = e(92128),
                f = e(75),
                _ = e(25237),
                p = e.n(_),
                m = e(59877),
                h = e(83858),
                v = p()(function() {
                    return Promise.all([e.e(27310), e.e(81503), e.e(11700)]).then(e.bind(e, 41834))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [41834]
                        }
                    },
                    ssr: !1
                }),
                g = function(n) {
                    var t = n.children,
                        e = n.classes,
                        _ = n.containerClassName,
                        p = n.containerPadding,
                        h = n.onClose,
                        g = n.onEscapeKeyDown,
                        x = n.open,
                        Z = n.description,
                        y = n.title,
                        w = n.titleVariant,
                        k = n.width,
                        C = n.height,
                        b = n.maxWidth,
                        j = n.fullScreen,
                        P = n.scroll,
                        I = n.disableStylingBox,
                        H = n.fullWidth,
                        S = (0, d.d)({
                            breakpoint: "sm"
                        }),
                        T = (0, m.$G)(f.w8U).t,
                        M = (0, s.B)(x),
                        L = (0, a.jsxs)(a.Fragment, {
                            children: [h && (0, a.jsx)(i.Z, {
                                position: "absolute",
                                top: "0",
                                right: "0",
                                display: "flex",
                                justifyContent: "flex-end",
                                p: 4,
                                children: (0, a.jsx)(c.Z, {
                                    "aria-label": T("common:actions_close"),
                                    onClick: h,
                                    size: "large",
                                    children: (0, a.jsx)(l.x, {})
                                })
                            }), y && (0, a.jsx)(u.Z, {
                                variant: w,
                                "data-automation": "DialogTitle",
                                children: (0, a.jsx)(i.Z, {
                                    fontWeight: "fontWeightBold",
                                    children: y
                                })
                            }), t]
                        });
                    return (0, a.jsx)(a.Fragment, {
                        children: M && (0, a.jsx)(v, {
                            classes: e,
                            fullWidth: H,
                            fullScreen: S || j,
                            open: x,
                            onClose: function(n, t) {
                                "escapeKeyDown" === t && void 0 !== g ? g(n) : void 0 !== h && h(n)
                            },
                            maxWidth: b,
                            scroll: P,
                            "aria-labelledby": y,
                            "aria-describedby": Z,
                            children: I ? L : (0, a.jsx)(i.Z, (0, r.Z)((0, o.Z)({
                                className: _ || "",
                                p: p
                            }, !S && {
                                width: b ? null : k,
                                minHeight: C
                            }), {
                                children: L
                            }))
                        })
                    })
                };
            g.defaultProps = {
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
            var x = (0, h.a)(g)
        },
        59312: function(n, t, e) {
            e.d(t, {
                l: function() {
                    return v
                }
            });
            var o = e(47842),
                r = e(70865),
                a = e(96670),
                i = e(26297),
                c = e(87394),
                u = e(52322),
                s = e(67550),
                d = e(91609),
                l = e(776),
                f = e(25237),
                _ = e.n(f),
                p = e(2784),
                m = (0, e(8740).ZL)()(function(n) {
                    var t = n.palette,
                        e = n.tokens.color,
                        o = t.mode === d.oc.DARK,
                        r = o ? e["white-96"] : e.gray["onyx-87"];
                    return {
                        root: {
                            position: "relative",
                            display: "inline-flex",
                            verticalAlign: "middle"
                        },
                        popper: {
                            pointerEvents: "all"
                        },
                        tooltip: {
                            "&&": {
                                color: o ? t.common.black : t.common.white,
                                backgroundColor: r
                            }
                        },
                        arrow: {
                            "&&": {
                                color: r
                            }
                        },
                        tooltipHidden: {
                            "&&": {
                                visibility: "hidden"
                            }
                        }
                    }
                }),
                h = _()(function() {
                    return Promise.all([e.e(27310), e.e(55199), e.e(23182), e.e(38507)]).then(e.bind(e, 97415))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [97415]
                        }
                    },
                    ssr: !1
                }),
                v = function(n) {
                    var t = n.className,
                        e = n.tooltipClassName,
                        d = n.children,
                        f = n.title,
                        _ = n.isHidden,
                        v = n.analyticsEventLabel,
                        g = n.onMouseEnter,
                        x = (0, i.Z)(n, ["className", "tooltipClassName", "children", "title", "isHidden", "analyticsEventLabel", "onMouseEnter"]),
                        Z = m(),
                        y = Z.classes,
                        w = Z.cx,
                        k = (0, c.Z)((0, p.useState)(!1), 2),
                        C = k[0],
                        b = k[1],
                        j = (0, c.Z)((0, p.useState)(!1), 2),
                        P = j[0],
                        I = j[1],
                        H = (0, l.yh)().analytics,
                        S = (0, l.wU)();
                    return (0, p.useEffect)(function() {
                        I(!0)
                    }, [C]), (0, u.jsx)(u.Fragment, {
                        children: f ? (0, u.jsx)(s.Z, {
                            className: w(y.root, t),
                            onMouseEnter: function(n) {
                                b(!0), g ? g(n) : v && H.hover({
                                    pageSection: S,
                                    eventLabel: v
                                })
                            },
                            onClick: function() {
                                v && H.click({
                                    pageSection: S,
                                    eventLabel: v
                                })
                            },
                            children: P && (0, u.jsx)(h, (0, a.Z)((0, r.Z)({
                                disableInteractive: !0,
                                title: f,
                                "data-automation": f,
                                classes: {
                                    tooltip: w(y.tooltip, e, (0, o.Z)({}, y.tooltipHidden, _)),
                                    arrow: y.arrow,
                                    popper: y.popper
                                }
                            }, x), {
                                children: d
                            })) || d
                        }) : (0, u.jsx)(u.Fragment, {
                            children: d
                        })
                    })
                }
        },
        47999: function(n, t, e) {
            e.d(t, {
                z: function() {
                    return r
                }
            });
            var o = e(83249),
                r = (0, e(12281).g)(o.Z)
        },
        59481: function(n, t, e) {
            e.d(t, {
                h: function() {
                    return r
                }
            });
            var o = e(85801),
                r = (0, e(12281).g)(o.Z)
        },
        37124: function(n, t, e) {
            e.d(t, {
                e: function() {
                    return Z
                }
            });
            var o = e(47842),
                r = e(70865),
                a = e(50930),
                i = e(52322),
                c = e(66358),
                u = e(29292),
                s = e(44297),
                d = e(47875),
                l = e(54112),
                f = e(94909),
                _ = e(65094),
                p = e(34116),
                m = e(75),
                h = e(2784),
                v = e(8740),
                g = e(68054),
                x = (0, v.ZL)()(function(n) {
                    var t, e = n.breakpoints,
                        r = n.tokens,
                        a = r.color,
                        i = r.spacing;
                    return {
                        overlayButtonRoot: (t = {
                            padding: i.s,
                            marginBottom: 0
                        }, (0, o.Z)(t, e.up("md"), {
                            padding: i.base
                        }), (0, o.Z)(t, "backgroundColor", a.gray["onyx-38"]), (0, o.Z)(t, "color", a.white), (0, o.Z)(t, "&:hover", {
                            backgroundColor: a.gray["onyx-60"]
                        }), t),
                        overlayRootContainer: {
                            marginTop: 0,
                            alignItems: "center",
                            display: "flex"
                        }
                    }
                }),
                Z = function(n) {
                    var t = n.asset,
                        e = n.addToCollectionViewsHandler,
                        o = (0, _.E)({
                            asset: t
                        }).showSaveButton,
                        v = x().classes,
                        Z = (0, s.PD)(t),
                        y = (0, f.d)({
                            breakpoint: "sm"
                        }),
                        w = (0, d.L)(),
                        k = (0, l.D)({
                            namespace: m.tuJ,
                            translationKeys: {
                                save: "common:actions_save"
                            }
                        }).labels,
                        C = (0, h.useMemo)(function() {
                            return (0, a.Z)(o ? [(0, r.Z)({
                                label: k.save,
                                onClick: function() {
                                    e({
                                        assets: [t],
                                        gridItems: [],
                                        redirectToCollectionDetailsPage: w,
                                        openModal: !0
                                    })
                                },
                                rel: "nofollow",
                                Icon: (0, i.jsx)(p.Heart, {}),
                                clickAnalyticsLabel: c.bOs
                            }, Z && {
                                brandCategory: (0, u.f_)(t),
                                productLine: (0, u.Rz)(t)
                            })] : [])
                        }, [o, k.save, Z, t, e, w]);
                    return (0, i.jsx)(g.p, {
                        buttons: C,
                        withActionLabel: !y,
                        classesProps: {
                            buttonRoot: v.overlayButtonRoot,
                            rootContainer: v.overlayRootContainer
                        }
                    })
                };
            Z.defaultProps = {
                addToCollectionViewsHandler: function() {}
            }
        },
        6514: function(n, t, e) {
            e.d(t, {
                M: function() {
                    return s
                },
                n: function() {
                    return u
                }
            });
            var o = e(50930),
                r = e(52322),
                a = e(25237),
                i = e.n(a),
                c = (0, e(8740).ZL)()(function(n) {
                    var t = n.spacing,
                        e = n.tokens,
                        o = e.color,
                        r = e.size;
                    return {
                        actionSkeleton: {
                            width: r.density.high,
                            height: r.density.high,
                            borderRadius: "100%",
                            backgroundColor: o.gray["onyx-38"],
                            marginLeft: t(1)
                        }
                    }
                }),
                u = function(n) {
                    var t = n.buttonCount,
                        e = c().classes;
                    return (0, o.Z)(Array(void 0 === t ? 3 : t).keys()).map(function(n) {
                        return (0, r.jsx)("div", {
                            className: e.actionSkeleton
                        }, "AssetActionsSkeleton-".concat(n))
                    })
                },
                s = i()(function() {
                    return Promise.all([e.e(27310), e.e(55199), e.e(23182), e.e(7668), e.e(56256), e.e(348), e.e(38032)]).then(e.bind(e, 3279)).then(function(n) {
                        return n.AssetActions
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [3279]
                        }
                    },
                    loading: function() {
                        return (0, r.jsx)(u, {})
                    },
                    ssr: !1
                })
        },
        76218: function(n, t, e) {
            e.d(t, {
                i: function() {
                    return i
                }
            });
            var o = e(52322),
                r = e(6514),
                a = e(25237),
                i = e.n(a)()(function() {
                    return Promise.all([e.e(27310), e.e(55199), e.e(23182), e.e(78450)]).then(e.bind(e, 71360)).then(function(n) {
                        return n.ImageAssetActions
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [71360]
                        }
                    },
                    loading: function() {
                        return (0, o.jsx)(r.n, {
                            buttonCount: 2
                        })
                    },
                    ssr: !1
                })
        },
        98927: function(n, t, e) {
            e.r(t), e.d(t, {
                ImageAssetItemOverlay: function() {
                    return ns
                }
            });
            var o = e(70865),
                r = e(87394),
                a = e(52322),
                i = e(6514),
                c = e(1284),
                u = e(41707),
                s = e(89082),
                d = e(73180),
                l = e(37124),
                f = e(67550),
                _ = e(48289),
                p = e(62197),
                m = e(72841),
                h = e(27064),
                v = e(27739),
                g = e(31905),
                x = e(88167),
                Z = e(81372),
                y = e(58898),
                w = e(96670),
                k = e(36221),
                C = e(18167),
                b = e(59979),
                j = e(24114),
                P = e(5632),
                I = function(n) {
                    var t = n.asset,
                        e = n.productId,
                        a = n.preset,
                        i = n.couponCode,
                        c = n.view,
                        u = (0, r.Z)((0, j.Q)(t) || [], 2)[1],
                        s = (0, P.useRouter)().locale,
                        d = (0, w.Z)((0, o.Z)({
                            asset: t
                        }, i && {
                            couponCode: i
                        }, e && {
                            productId: e
                        }), {
                            existingUserRedirect: u
                        }),
                        l = (0, C.t)((0, w.Z)((0, o.Z)({}, d, a && {
                            preset: a
                        }), {
                            customLandingPage: k._I
                        })),
                        f = (0, o.Z)((0, w.Z)((0, o.Z)({}, c && {
                            view: c
                        }), {
                            assetType: null == t ? void 0 : t.type,
                            landing_page: l,
                            hl: s,
                            embedded: !0
                        }), a && {
                            preset: a
                        });
                    return {
                        signUpPath: (0, b.cM)(f),
                        landingPage: (0, C.t)((0, o.Z)({}, d))
                    }
                },
                H = e(40233),
                S = e(27963),
                T = e(92784),
                M = e(13279),
                L = e(38315),
                R = e(75),
                z = e(59877),
                D = e(2784),
                N = e(8740),
                A = e(50930),
                B = e(33927),
                E = e(21647),
                V = e(9390),
                q = e(51578),
                F = e(38204),
                U = (0, N.ZL)()(function(n) {
                    var t = n.palette,
                        e = n.tokens,
                        o = e.font,
                        r = e.spacing,
                        a = e.zIndex,
                        i = e.color;
                    return {
                        sectionHeading: {
                            fontSize: o.size["3xl"],
                            color: i.gray["onyx-87"],
                            marginBottom: r.m,
                            fontWeight: o.weight.bold,
                            zIndex: a["2"],
                            position: "relative",
                            lineHeight: r.l,
                            paddingRight: r.l
                        },
                        sectionSubHeading: {
                            display: "flex",
                            width: "100%",
                            color: i.gray["onyx-87"],
                            marginBottom: r.m,
                            alignItems: "top",
                            paddingRight: r.l
                        },
                        iconContainer: {
                            marginRight: r.m,
                            display: "flex",
                            fontWeight: o.weight.bold,
                            marginTop: r.s
                        },
                        link: {
                            color: t.info.main,
                            textDecoration: "none",
                            "&:hover": {
                                textDecoration: "underline"
                            }
                        },
                        cancelTerms: {
                            color: i.gray["onyx-60"],
                            fontSize: "10px",
                            marginTop: r.xxl,
                            paddingRight: r.l
                        }
                    }
                }),
                W = function() {
                    return (0, a.jsxs)(B.Z, {
                        spacing: 1,
                        children: [(0, a.jsx)(E.Z, {
                            variant: "text",
                            sx: {
                                fontSize: "4rem",
                                marginBottom: "10px"
                            }
                        }), (0, A.Z)([, , , ]).map(function(n) {
                            return (0, a.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "10px"
                                },
                                children: [(0, a.jsx)(E.Z, {
                                    variant: "circular",
                                    width: 20,
                                    height: 20,
                                    sx: {
                                        marginRight: "5px"
                                    }
                                }), (0, a.jsx)(E.Z, {
                                    variant: "rounded",
                                    width: "100%",
                                    height: 60
                                })]
                            }, n)
                        }), (0, a.jsx)(E.Z, {
                            variant: "rounded",
                            width: "100%",
                            height: 150,
                            sx: {
                                fontSize: "2rem"
                            }
                        })]
                    })
                },
                K = function(n) {
                    var t = n.title,
                        e = n.bannerContent,
                        o = n.shouldShowCancellationTerms,
                        i = U().classes,
                        c = (0, r.Z)((0, q.a9)(), 1)[0],
                        u = (0, F.ad)(),
                        s = (0, D.useMemo)(function() {
                            return {
                                help: u,
                                plans: c
                            }
                        }, [u, c]),
                        d = s.help,
                        l = s.plans;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(p.Z, {
                            className: i.sectionHeading,
                            component: "h1",
                            align: "left",
                            children: t
                        }), e.map(function(n) {
                            var t = n.icon,
                                e = n.text;
                            return (0, a.jsxs)(p.Z, {
                                className: i.sectionSubHeading,
                                component: "p",
                                align: "left",
                                children: [t && (0, a.jsx)("span", {
                                    className: i.iconContainer,
                                    children: t
                                }), (0, a.jsx)("div", {
                                    children: e
                                })]
                            }, e)
                        }), (void 0 === o || o) && (0, a.jsx)(p.Z, {
                            className: i.cancelTerms,
                            component: "p",
                            align: "left",
                            children: (0, a.jsx)(z.cC, {
                                ns: R.kJP,
                                i18nKey: "cancellation_terms",
                                components: {
                                    plansLink: (0, a.jsx)(V.r, {
                                        linkAs: l,
                                        href: l,
                                        className: i.link,
                                        target: "_blank",
                                        underline: "hover"
                                    }),
                                    helpLink: (0, a.jsx)(V.r, {
                                        linkAs: d,
                                        href: d,
                                        className: i.link,
                                        target: "_blank",
                                        underline: "hover"
                                    })
                                }
                            })
                        })]
                    })
                },
                O = "FreeTrialSignUpModal",
                X = (0, N.ZL)()(function(n) {
                    var t = n.tokens,
                        e = t.font,
                        o = t.spacing,
                        r = t.zIndex,
                        a = t.color;
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
                            zIndex: r["5"],
                            backgroundColor: a.white
                        },
                        flexRoot: {
                            display: "flex",
                            alignItems: "stretch",
                            height: "100%",
                            width: g.Jv
                        },
                        flexChild: {
                            flex: 1,
                            maxWidth: "50%",
                            width: g.Jv / 2,
                            padding: o.s,
                            height: 600,
                            position: "relative"
                        },
                        marketingArea: {
                            overflow: "auto"
                        },
                        divider: {
                            height: "auto"
                        },
                        sectionHeading: {
                            fontSize: e.size["3xl"],
                            color: a.gray["onyx-87"],
                            marginBottom: o.m,
                            fontWeight: e.weight.bold,
                            zIndex: r["2"],
                            position: "relative",
                            lineHeight: o.l,
                            paddingRight: o.l
                        }
                    }
                }),
                $ = function(n) {
                    var t, e, i, c = n.asset,
                        u = n.isModalOpen,
                        s = n.handleModalClose,
                        d = n.MarketingContent,
                        l = (0, r.Z)((0, D.useState)(!1), 2),
                        g = l[0],
                        w = l[1],
                        k = X(),
                        C = k.classes,
                        b = k.cx,
                        j = (0, P.useRouter)(),
                        N = j.locale,
                        A = j.asPath,
                        B = (0, z.$G)(R.kJP),
                        E = B.t,
                        V = B.ready,
                        q = (0, H.d)(),
                        F = I({
                            asset: c,
                            couponCode: v.Q9,
                            productId: v.v8,
                            view: v.Em,
                            preset: O
                        }),
                        U = F.landingPage,
                        $ = F.signUpPath,
                        G = (0, Z.K)({
                            productId: v.v8
                        }).data,
                        Q = (0, x.LG)({
                            product: G
                        }),
                        Y = (0, D.useCallback)(function(n) {
                            var t = n.translationKey,
                                e = n.translationProps;
                            return (0, a.jsx)(z.cC, {
                                ns: R.kJP,
                                i18nKey: t,
                                components: {
                                    b: (0, a.jsx)("b", {})
                                },
                                values: (0, o.Z)({}, e),
                                t: E
                            })
                        }, [E]),
                        J = (0, D.useMemo)(function() {
                            return [{
                                icon: (0, a.jsx)(S.User, {}),
                                text: Y({
                                    translationKey: "risk_free"
                                })
                            }, {
                                icon: (0, a.jsx)(T.B, {}),
                                text: Y({
                                    translationKey: "keep_what_you_have_licensed"
                                })
                            }, {
                                icon: (0, a.jsx)(M.Success, {}),
                                text: Y({
                                    translationKey: "save_more",
                                    translationProps: {
                                        PRICE: Q
                                    }
                                })
                            }, {
                                icon: (0, a.jsx)(L.MosaicView, {}),
                                text: Y({
                                    translationKey: "full_access"
                                })
                            }]
                        }, [Q, Y]),
                        nn = (0, D.useMemo)(function() {
                            return E("get_content_for_1_month")
                        }, [E]),
                        nt = (0, y.Q)({
                            preset: O
                        }),
                        ne = nt.isAuthSuccess,
                        no = nt.isNewUser;
                    return ne && u && null !== no && (e = "".concat("en" !== N ? "/".concat(N) : "").concat(no ? U : A), i = new URL(e, null == window ? void 0 : null === (t = window.location) || void 0 === t ? void 0 : t.origin), q({
                        actionName: "convert - free trial signup successful"
                    }), window.location.href = i.toString()), (0, a.jsxs)(h.f, {
                        open: u,
                        onClose: s,
                        maxWidth: "lg",
                        width: "lg",
                        themeModeOverride: void 0,
                        children: [(0, a.jsxs)("div", {
                            className: C.flexRoot,
                            children: [(0, a.jsx)(f.Z, {
                                className: b(C.flexChild, C.marketingArea),
                                children: V ? (0, a.jsx)(void 0 === d ? K : d, {
                                    title: nn,
                                    bannerContent: J
                                }) : (0, a.jsx)(W, {})
                            }), (0, a.jsx)(_.Z, {
                                className: C.divider,
                                orientation: "vertical"
                            }), (0, a.jsxs)(f.Z, {
                                className: C.flexChild,
                                children: [(0, a.jsx)(p.Z, {
                                    className: C.sectionHeading,
                                    component: "h1",
                                    align: "left",
                                    pl: 6,
                                    children: E("try_shutterstock_free")
                                }), (0, a.jsx)("iframe", {
                                    onLoad: function(n) {
                                        n.preventDefault(), w(!0), q({
                                            actionName: "convert - free trial modal opened"
                                        })
                                    },
                                    style: {
                                        height: 600,
                                        border: "none",
                                        width: "100%",
                                        overflow: "none",
                                        marginTop: "-40px",
                                        paddingLeft: "20px"
                                    },
                                    title: "SignUp",
                                    src: $,
                                    loading: "eager"
                                })]
                            })]
                        }), !g && (0, a.jsx)(f.Z, {
                            className: C.loaderContainer,
                            children: (0, a.jsx)(m.Z, {
                                color: "inherit",
                                size: 60,
                                disableShrink: !0
                            })
                        })]
                    })
                },
                G = e(66358),
                Q = e(23490),
                Y = e(44297),
                J = e(70008),
                nn = e(94909),
                nt = e(43110),
                ne = e(25237),
                no = e.n(ne),
                nr = e(76218),
                na = e(85237),
                ni = (0, N.ZL)()(function(n) {
                    var t = n.tokens.spacing,
                        e = n.palette,
                        o = e.primary,
                        r = e.secondary;
                    return {
                        bottomRightContentComponent: {
                            maxWidth: "100%"
                        },
                        topRightContentComponent: {
                            display: "flex",
                            alignItems: "center"
                        },
                        iconButtonDarkBackground: {
                            backgroundColor: r.main,
                            padding: t.s,
                            marginLeft: t.xxs,
                            "&:hover": {
                                backgroundColor: r.dark
                            }
                        },
                        iconButtonContainer: {
                            display: "flex",
                            color: o.contrastText
                        }
                    }
                }),
                nc = no()(function() {
                    return e.e(10195).then(e.bind(e, 10195)).then(function(n) {
                        return n.ExperimentSDAQ84
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10195]
                        }
                    },
                    ssr: !1
                }),
                nu = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, nn.d)(),
                        e = (0, P.useRouter)().asPath.includes("/search");
                    return t && e ? (0, a.jsx)(nc, (0, o.Z)({}, n)) : (0, a.jsx)(c.j, (0, o.Z)({}, n))
                },
                ns = function(n) {
                    var t = n.asset,
                        e = n.isHovered,
                        c = n.setIsHovered,
                        f = n.onAssetModalHandler,
                        _ = n.showAssetTypeIcon,
                        p = n.gridItems,
                        m = n.addToCollectionViewsHandler,
                        h = n.width,
                        v = (0, r.Z)((0, D.useState)(!1), 2),
                        g = v[0],
                        x = v[1],
                        Z = (0, r.Z)((0, D.useState)(!1), 2),
                        y = Z[0],
                        w = Z[1],
                        k = (0, Q.N)().isBot,
                        C = ni().classes,
                        b = (0, nn.d)(),
                        j = (0, nt.B)(),
                        P = (0, Y.vh)(null == t ? void 0 : t.type),
                        I = (0, Y.PD)(t),
                        H = (0, d.U)(t),
                        S = (0, J.B)().isIndiaRegion,
                        T = (0, Y.f8)(t),
                        M = (0, Y.k7)(t),
                        L = !b && !P && (g || e),
                        R = (0, D.useCallback)(function() {
                            w(!1), c(!1)
                        }, [c]),
                        z = (0, D.useMemo)(function() {
                            return (0, a.jsx)($, {
                                isModalOpen: y,
                                handleModalClose: R,
                                asset: t
                            })
                        }, [t, y, R]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(nu, {
                            asset: t,
                            isActive: g || e,
                            onAssetModalHandler: f,
                            forceTopLeftContent: k,
                            classesProps: {
                                bottomRightContent: C.bottomRightContentComponent,
                                preview: C.topRightContentComponent
                            },
                            TopRightContentComponent: !L || T || M ? null : (0, a.jsx)(l.e, {
                                asset: t,
                                addToCollectionViewsHandler: m
                            }),
                            TopLeftContentComponent: (0, a.jsx)(s.V, {
                                asset: t,
                                isHovered: e,
                                showAssetTypeIcon: _
                            }),
                            BottomLeftContentComponent: (0, a.jsx)(u.A, {
                                asset: t,
                                isHovered: e
                            }),
                            BottomRightContentComponent: L ? j || S || I ? (0, a.jsx)(i.M, {
                                asset: t,
                                openLicenseDrawerButtonClasses: {
                                    darkBackgroundIcon: C.iconButtonDarkBackground,
                                    iconContainer: C.iconButtonContainer
                                },
                                gridItems: p,
                                setIsOverlayOpen: x,
                                setIsHovered: c,
                                addToCollectionViewsHandler: m,
                                onAssetModalHandler: f
                            }) : (0, a.jsx)(function() {
                                var n = (0, o.Z)({}, !b && !j && {
                                    onClickHandler: function() {
                                        w(!0)
                                    }
                                });
                                return (0, a.jsxs)(H ? function(n) {
                                    var t = n.children;
                                    return (0, a.jsx)("div", {
                                        children: t
                                    })
                                } : function(n) {
                                    var t = n.children;
                                    return (0, a.jsx)(a.Fragment, {
                                        children: t
                                    })
                                }, {
                                    children: [(0, a.jsx)(nr.i, {
                                        addToCollectionViewsHandler: m,
                                        asset: t,
                                        gridItems: p,
                                        onAssetModalHandler: f
                                    }), (0, a.jsx)(na.$, (0, o.Z)({
                                        asset: t,
                                        analyticsTrackLabel: G.vNe,
                                        width: h
                                    }, n))]
                                })
                            }, {}) : null,
                            forceBottomContent: !0,
                            showPreviewIcon: b || e,
                            withGradient: e,
                            experimentSDAQ84Props: {
                                gridItems: p,
                                addToCollectionViewsHandler: m
                            }
                        }), z]
                    })
                };
            ns.defaultProps = {
                width: null,
                isHovered: !1,
                showAssetTypeIcon: !1,
                setIsHovered: function() {},
                onAssetModalHandler: function() {},
                addToCollectionViewsHandler: function() {}
            }
        },
        85237: function(n, t, e) {
            e.d(t, {
                $: function() {
                    return f
                },
                y: function() {
                    return l
                }
            });
            var o = e(52322),
                r = e(67550),
                a = e(47999),
                i = e(44297),
                c = e(33919),
                u = e(56878),
                s = e(75),
                d = e(59877),
                l = (0, e(8740).ZL)()(function(n) {
                    var t = n.spacing;
                    return {
                        button: {
                            padding: "calc(".concat(t(2), " + ").concat(t(3), ") calc(").concat(t(2), " + ").concat(t(4), ")"),
                            whiteSpace: "nowrap",
                            maxWidth: "100%",
                            marginLeft: t(3)
                        },
                        label: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginLeft: t(2)
                        }
                    }
                }),
                f = function(n) {
                    var t = n.asset,
                        e = n.analyticsTrackLabel,
                        f = n.onClickHandler,
                        _ = l().classes,
                        p = (0, d.$G)(s.Otp),
                        m = p.t,
                        h = p.ready,
                        v = m("image:logout_adp_free_trial_download_variant_b"),
                        g = (0, c.S)({
                            asset: t
                        }).loggedOutOnClickHandler,
                        x = (0, i.f8)(t);
                    return h && !x ? (0, o.jsxs)(a.z, {
                        className: _.button,
                        onClick: f || g,
                        labelTrack: e,
                        "aria-label": v,
                        color: "secondary",
                        variant: "contained",
                        fullWidth: !0,
                        children: [(0, o.jsx)(u.Download, {
                            fontSize: "small"
                        }), (0, o.jsx)(r.Z, {
                            className: _.label,
                            children: v
                        })]
                    }) : null
                };
            f.defaultProps = {
                asset: {},
                analyticsTrackLabel: "",
                onClickHandler: null
            }
        },
        83858: function(n, t, e) {
            e.d(t, {
                a: function() {
                    return s
                }
            });
            var o = e(70865),
                r = e(26297),
                a = e(52322),
                i = e(96976),
                c = e(73469),
                u = function(n) {
                    var t = n.children,
                        e = n.themeModeOverride,
                        o = (0, c.i)({
                            themeMode: e
                        }).theme;
                    return (0, a.jsx)(i.Z, {
                        theme: o,
                        children: t
                    })
                },
                s = function(n) {
                    return function(t) {
                        var e = t.themeModeOverride,
                            i = (0, r.Z)(t, ["themeModeOverride"]);
                        return (0, a.jsx)(u, {
                            themeModeOverride: e,
                            children: (0, a.jsx)(n, (0, o.Z)({}, i))
                        })
                    }
                }
        },
        27739: function(n, t, e) {
            e.d(t, {
                Ak: function() {
                    return I
                },
                Ao: function() {
                    return nw
                },
                CN: function() {
                    return nv
                },
                Dy: function() {
                    return $
                },
                E6: function() {
                    return F
                },
                EV: function() {
                    return j
                },
                Em: function() {
                    return k
                },
                Hz: function() {
                    return U
                },
                KB: function() {
                    return B
                },
                Kg: function() {
                    return np
                },
                MJ: function() {
                    return ny
                },
                NH: function() {
                    return nd
                },
                PS: function() {
                    return nm
                },
                Pv: function() {
                    return V
                },
                Q9: function() {
                    return w
                },
                RD: function() {
                    return m
                },
                RY: function() {
                    return x
                },
                SK: function() {
                    return N
                },
                TV: function() {
                    return nk
                },
                Tj: function() {
                    return K
                },
                Ts: function() {
                    return ng
                },
                UA: function() {
                    return nl
                },
                WN: function() {
                    return Y
                },
                XW: function() {
                    return nC
                },
                Xd: function() {
                    return q
                },
                Xv: function() {
                    return nf
                },
                YW: function() {
                    return nZ
                },
                _x: function() {
                    return L
                },
                bQ: function() {
                    return p
                },
                bk: function() {
                    return h
                },
                cL: function() {
                    return z
                },
                cd: function() {
                    return S
                },
                cz: function() {
                    return A
                },
                dF: function() {
                    return X
                },
                dm: function() {
                    return P
                },
                do: function() {
                    return nx
                },
                fn: function() {
                    return y
                },
                h$: function() {
                    return Z
                },
                ik: function() {
                    return nP
                },
                jh: function() {
                    return D
                },
                ks: function() {
                    return nb
                },
                nj: function() {
                    return W
                },
                pK: function() {
                    return ns
                },
                qi: function() {
                    return v
                },
                tq: function() {
                    return b
                },
                v8: function() {
                    return g
                },
                vC: function() {
                    return T
                },
                vI: function() {
                    return M
                },
                x1: function() {
                    return H
                },
                yD: function() {
                    return nj
                },
                zC: function() {
                    return nh
                },
                zV: function() {
                    return n_
                },
                zW: function() {
                    return R
                }
            });
            var o, r, a = e(47842),
                i = e(50930),
                c = e(97258),
                u = "ultrahd4k_video",
                s = "hd_video",
                d = "sd_video",
                l = "enhanced_footage_4k_clips",
                f = "enhanced_footage_hd_clips",
                _ = "enhanced_footage_sd_clips",
                p = (o = {}, (0, a.Z)(o, c.yF, l), (0, a.Z)(o, c.HD, f), (0, a.Z)(o, c.SD, _), o),
                m = (r = {}, (0, a.Z)(r, c.yF, u), (0, a.Z)(r, c.HD, s), (0, a.Z)(r, c.SD, d), r),
                h = "portfolio_credit_rules",
                v = "flex10_monthly",
                g = "flex10_cmt_x12",
                x = "flex10_cmt_upfront",
                Z = [v, g, x],
                y = g,
                w = "TRYFLEX10",
                k = "freetrialflex10",
                C = "flex25_monthly",
                b = "flex25_cmt_x12",
                j = "flex25_cmt_upfront",
                P = "flex350_ecomm_cmt_x12",
                I = "flex350_ecomm_cmt_upfront",
                H = (0, i.Z)(Z).concat((0, i.Z)([C, b, j]), (0, i.Z)(["flex50_ecomm_monthly", "flex50_ecomm_cmt_x12", "flex50_ecomm_cmt_upfront"]), (0, i.Z)(["flex150_ecomm_monthly", "flex150_ecomm_cmt_x12", "flex150_ecomm_cmt_upfront"]), (0, i.Z)(["flex350_ecomm_monthly", P, I]), (0, i.Z)(["flex750_ecomm_monthly", "flex750_ecomm_cmt_x12", "flex750_ecomm_cmt_upfront"]), (0, i.Z)(["flex150_cmt_x12", "flex150_annual_upf", "flex300_cmt_x12", "flex300_annual_upf", "flex500_cmt_x12", "flex500_annual_upf", "flex750_cmt_x12", "flex750_annual_upf", "flex1000_cmt_x12", "flex1000_annual_upf"])),
                S = "on_demand_large_1_download",
                T = "on_demand_large_2_download",
                M = "enhanced_2_download_365_day",
                L = "on_demand_large_5_download",
                R = "enhanced_5_download_365_day",
                z = "on_demand_large_25_download",
                D = "enhanced_25_download_365_day",
                N = (0, i.Z)([T, M]).concat((0, i.Z)([L, R]), (0, i.Z)([z, D])),
                A = "monthly_10_download_1_month_cmt_x12",
                B = "monthly_10_download_12_month_upf",
                E = ["monthly_10_download_1_month_upf", A, B],
                V = A,
                q = "PICK10FREE",
                F = "freetrialimage",
                U = "freetrialimageaips",
                W = "CREATEFREE",
                K = [q, W, w],
                O = ["monthly_50_download_1_month_upf", "monthly_50_download_1_month_cmt_x12", "monthly_50_download_12_month_upf"],
                X = "monthly_350_download_1_month_no_ro_cmt_x12",
                $ = "monthly_350_download_12_month_upf",
                G = ["monthly_350_download_1_month_no_ro_upf", X, $],
                Q = ["monthly_750_download_1_month_no_ro_upf", "monthly_750_download_1_month_no_ro_cmt_x12", "monthly_750_download_12_month_upf"];
            (0, i.Z)(E).concat((0, i.Z)(O), (0, i.Z)(G), (0, i.Z)(Q));
            var Y = "standard",
                J = ["footage_5_download_nonhd", "footage_5_download_hd", "footage_5_download_ultrahd4k"],
                nn = ["enhanced_footage_sd_5_pack", "enhanced_footage_hd_5_pack", "enhanced_footage_4k_5_pack"];
            ["footage_5_download_lowres"].concat((0, i.Z)(J), (0, i.Z)(nn));
            var nt = ["footage_10_download_nonhd", "footage_10_download_hd", "footage_10_download_ultrahd4k"],
                ne = ["enhanced_footage_sd_10_pack", "enhanced_footage_hd_10_pack", "enhanced_footage_4k_10_pack"];
            ["footage_10_download_lowres"].concat((0, i.Z)(nt), (0, i.Z)(ne));
            var no = ["footage_25_download_nonhd", "footage_25_download_hd", "footage_25_download_ultrahd4k"],
                nr = ["enhanced_footage_sd_25_pack", "enhanced_footage_hd_25_pack", "enhanced_footage_4k_25_pack"];
            ["footage_25_download_lowres"].concat((0, i.Z)(no), (0, i.Z)(nr));
            var na = (0, i.Z)(J).concat((0, i.Z)(nt), (0, i.Z)(no), (0, i.Z)(nn), (0, i.Z)(ne), (0, i.Z)(nr));
            (0, i.Z)([d, s, u]).concat((0, i.Z)([_, f, l]), (0, i.Z)(na));
            var ni = ["footage_monthly_5_download_1_month_upf", "footage_monthly_5_download_1_month_cmt_x12", "footage_monthly_5_download_12_month_upf"],
                nc = ["footage_monthly_10_download_1_month_cmt_x12", "footage_monthly_10_download_12_month_upf", "footage_monthly_10_download_1_month_upf"],
                nu = ["footage_monthly_20_download_1_month_upf", "footage_monthly_20_download_1_month_cmt_x12", "footage_monthly_20_download_12_month_upf"];
            (0, i.Z)(ni).concat((0, i.Z)(nc), (0, i.Z)(nu));
            var ns = "on_demand_editorial_25_download",
                nd = "creative_flow_plus_monthly",
                nl = [nd, "creative_flow_plus_cmt_upfront"],
                nf = ["hd_video", "ultrahd4k_video", "select_video", "sd_video", "audio_standard_track", "audio_enhanced_track", "footage_elements_low", "footage_elements_medium", "footage_elements_high", "sfx_standard_track", "sfx_enhanced_track", "editorial_footage_ecomm_clips", "single_image_standard_license", l, f, _, "single_premium_image_standard_license", "single_premium_image_enhanced_license"],
                n_ = "OUT_OF_CREDITS",
                np = ["shared_monthly_1000_download_1_month_cmt_x12", "shared_monthly_12000_download_12_month_upf", "shared_monthly_12000_download_365_day", "shared_monthly_750_download_1_month_cmt_x12", "shared_monthly_9000_download_12_month_upf", "shared_monthly_9000_download_365_day", "shared_standard_1_month_cmt_x12", "shared_standard_12_month_upf", "shared_standard_365_day"],
                nm = "multi_share",
                nh = "footage_standard",
                nv = "footage_enhanced",
                ng = /^.*(_nonhd|_sd|sd_).*$/gm,
                nx = /^.*(_hd|hd_).*$/gm,
                nZ = /^.*(_ultrahd4k|_4k_|ultrahd4k_).*$/gm,
                ny = [v, g, x, C, b, j],
                nw = (0, i.Z)(E).concat((0, i.Z)(O), (0, i.Z)(G), (0, i.Z)(Q), ["shared_monthly_750_download_1_month_plus_cmt_x12_2"]),
                nk = (0, i.Z)(ni).concat((0, i.Z)(nc), (0, i.Z)(nu)),
                nC = [T, L, z],
                nb = [M, R, D],
                nj = (0, i.Z)([S, "enhanced_1_download_365_day"]),
                nP = ["IN"]
        },
        36221: function(n, t, e) {
            e.d(t, {
                C8: function() {
                    return d
                },
                GG: function() {
                    return o
                },
                TT: function() {
                    return i
                },
                _I: function() {
                    return c
                },
                jK: function() {
                    return s
                },
                o1: function() {
                    return r
                },
                sR: function() {
                    return u
                },
                up: function() {
                    return a
                }
            });
            var o = "profile",
                r = "/users/current/email",
                a = "/credentials/change",
                i = "/logout",
                c = "/iframe-landing",
                u = "shutterstockAuth:success",
                s = "signup",
                d = "login"
        },
        75445: function(n, t, e) {
            e.d(t, {
                a: function() {
                    return o
                }
            });
            var o = "USD"
        },
        31905: function(n, t, e) {
            e.d(t, {
                Jv: function() {
                    return i
                },
                ST: function() {
                    return o
                },
                pG: function() {
                    return r
                },
                v6: function() {
                    return a
                }
            });
            var o = {
                    view: [],
                    license: [],
                    comp: [],
                    mediaTypeLicense: [],
                    mediaTypeComp: []
                },
                r = [{
                    containerWidth: 1920,
                    height: 300
                }, {
                    containerWidth: 1024,
                    height: 280
                }, {
                    containerWidth: 0,
                    height: 260
                }],
                a = "",
                i = 880
        },
        33301: function(n, t, e) {
            e.d(t, {
                $: function() {
                    return a
                },
                $5: function() {
                    return p
                },
                $M: function() {
                    return c
                },
                C6: function() {
                    return q
                },
                C_: function() {
                    return _
                },
                Cl: function() {
                    return j
                },
                GX: function() {
                    return K
                },
                Hl: function() {
                    return J
                },
                I6: function() {
                    return u
                },
                Jo: function() {
                    return P
                },
                Kn: function() {
                    return V
                },
                Mh: function() {
                    return y
                },
                NV: function() {
                    return S
                },
                O8: function() {
                    return z
                },
                Pl: function() {
                    return R
                },
                Px: function() {
                    return G
                },
                QF: function() {
                    return l
                },
                Qs: function() {
                    return U
                },
                Si: function() {
                    return m
                },
                T$: function() {
                    return $
                },
                TJ: function() {
                    return F
                },
                V3: function() {
                    return M
                },
                VV: function() {
                    return x
                },
                WX: function() {
                    return Y
                },
                Xd: function() {
                    return ne
                },
                Y$: function() {
                    return D
                },
                YV: function() {
                    return W
                },
                _x: function() {
                    return g
                },
                ak: function() {
                    return N
                },
                bq: function() {
                    return C
                },
                cM: function() {
                    return b
                },
                cR: function() {
                    return h
                },
                ck: function() {
                    return nt
                },
                f: function() {
                    return v
                },
                fX: function() {
                    return s
                },
                fb: function() {
                    return T
                },
                fn: function() {
                    return d
                },
                hK: function() {
                    return L
                },
                iH: function() {
                    return I
                },
                ik: function() {
                    return w
                },
                jI: function() {
                    return Q
                },
                jM: function() {
                    return Z
                },
                lP: function() {
                    return X
                },
                lm: function() {
                    return H
                },
                mF: function() {
                    return i
                },
                mX: function() {
                    return O
                },
                pG: function() {
                    return r
                },
                pO: function() {
                    return E
                },
                qR: function() {
                    return f
                },
                qf: function() {
                    return B
                },
                vD: function() {
                    return nn
                },
                vb: function() {
                    return o
                },
                wt: function() {
                    return k
                },
                yY: function() {
                    return A
                }
            });
            var o = "sstk1-dam",
                r = "dam-on-e-comm-fast-follow",
                a = "dam-advanced-collection-sharing",
                i = "UP2-1693-enterprise-custom-metadata",
                c = "up-2-1740-remember-last-used-metadata",
                u = "reverse-audio-search",
                s = "predict-uploads-ecomm",
                d = "predict-v2-pages",
                l = "predict-color-palette",
                f = "catalog-upload-allow-all-files",
                _ = "next-remove-team-users",
                p = "next-quote-gen-tool",
                m = "createapp-homepage",
                h = "createapp-homepage-enterprise",
                v = "createapp-catalog",
                g = "createapp-catalog-foxtrot",
                x = "create-flow-homepage",
                Z = "create-flow-homepage-enterprise",
                y = "b2l2-user-address-in-cart",
                w = "analyze-pages",
                k = "up-2-1665-e-comm-allow-premium-editorial-licensing",
                C = "catalog-collections-default-alpha-sort",
                b = "fact-157-catalog-video-render-downloads",
                j = "create-video",
                P = "create-video-entry-points-pre-licensed",
                I = "create-video-entry-points-licensed",
                H = "create-video-enterprise",
                S = "up-2-1847-support-free-assets-on-shutterstock-for-dream-partnership",
                T = "adyen-3ds",
                M = "dam-holding-contribute-button",
                L = "generate-chatbot-release",
                R = "generative-pride-month",
                z = "synthetic-generative-assets-beta",
                D = "rtn-774-3d-objects-ecomm-beta",
                N = "color-insights",
                A = "keyword-insights",
                B = "FACT-90-pixelsquid-in-catalog",
                E = "SDAQ-56-pixel-squid-on-enterprise",
                V = "sdaq-96-help-center-on-enterprise",
                q = "NOV-1882-block-card-testing-on-billing-page",
                F = "project-peacock",
                U = "project-peacock-design-canvas-tab",
                W = "project-peacock-remove-background",
                K = "ii-438-ip-review-for-generated-assets",
                O = "project-peacock-remove-background",
                X = "project-peacock-magic-erase",
                $ = "project-peacock-generate-variations",
                G = "project-peacock-magic-brush",
                Q = "project-peacock-filters",
                Y = "project-peacock-crop",
                J = "project-peacock-zoom-out",
                nn = "project-peacock-undo-redo",
                nt = "project-peacock-like-edit",
                ne = "project-peacock-edit-in-create"
        },
        13591: function(n, t, e) {
            e.d(t, {
                C5: function() {
                    return f
                },
                nk: function() {
                    return _
                }
            });
            var o, r = e(47842),
                a = e(14625),
                i = e(27739),
                c = "2_credit_pack",
                u = "5_credit_pack",
                s = "30_credit_pack",
                d = "125_credit_pack",
                l = "250_credit_pack",
                f = [c, u, s, d, l],
                _ = "creditPack",
                p = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: i.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details_images_and_music"
                        }
                    }, {
                        name: i.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: i.dm,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }]
                };
            o = {}, (0, r.Z)(o, a.PU, p), (0, r.Z)(o, a.XC, {
                translations: {
                    title: "credit_packs_title",
                    caption: "on_demand_caption"
                },
                items: [{
                    name: u
                }, {
                    name: c
                }, {
                    name: s
                }]
            }), (0, r.Z)(o, a.NP, {
                translations: {
                    title: "enhanced_generic_legal_protections",
                    caption: "on_demand_caption"
                },
                items: [{
                    name: s
                }, {
                    name: d
                }, {
                    name: l
                }]
            })
        },
        87414: function(n, t, e) {
            e.d(t, {
                $A: function() {
                    return g
                },
                Dg: function() {
                    return m
                },
                Jr: function() {
                    return v
                },
                Kg: function() {
                    return h
                },
                OG: function() {
                    return _
                },
                XD: function() {
                    return Z
                },
                Yc: function() {
                    return s
                },
                Yy: function() {
                    return f
                },
                g7: function() {
                    return p
                },
                p_: function() {
                    return x
                }
            });
            var o = e(50930),
                r = e(27739),
                a = e(56495),
                i = e(75445),
                c = e(60591),
                u = e(13591),
                s = function(n) {
                    return n.product.repeatInterval === c.MQ
                },
                d = {
                    CHF: "EUR",
                    DKK: "EUR",
                    NOK: "EUR",
                    SEK: "EUR"
                },
                l = function(n) {
                    var t = n.currency,
                        e = n.prices,
                        o = d[t];
                    return e[o] ? o : i.a
                },
                f = function(n) {
                    var t = n.prices,
                        e = void 0 === t ? {} : t,
                        o = n.localeCurrency;
                    return e[o.toLowerCase()] ? o.toUpperCase() : l({
                        currency: o,
                        prices: e
                    })
                },
                _ = function(n) {
                    var t = n.product;
                    return (void 0 === t ? {} : t).activityTracking === r.bk
                },
                p = function(n) {
                    var t = n.product,
                        e = void 0 === t ? {} : t,
                        o = e.allotmentCredits,
                        r = e.downloadCredits;
                    return o && !r
                },
                m = function(n) {
                    var t = n.product,
                        e = (void 0 === t ? {} : t).name;
                    return u.C5.includes(e)
                },
                h = function(n) {
                    var t, e = n.paymentPlans,
                        o = n.licenseType,
                        a = n.selectedPaymentPlan;
                    return (null == a ? void 0 : a.cost) ? a.cost : null === (t = (void 0 === e ? [] : e).find(function(n) {
                        var t = n.activityTracking,
                            e = n.isEligibleForDownload,
                            a = n.license;
                        return a === o && t === r.bk && (e || !e && a === c.ur)
                    })) || void 0 === t ? void 0 : t.cost
                },
                v = function(n) {
                    var t = n.productName;
                    return (0, o.Z)(a.LY).concat([a.i3, a.Y_]).includes(void 0 === t ? "" : t)
                },
                g = function(n, t) {
                    return null == n ? void 0 : n.find(function(n) {
                        return n.name === t
                    })
                },
                x = function(n) {
                    var t = n.products,
                        e = n.productsToReplace,
                        o = new Map((void 0 === e ? [] : e).map(function(n) {
                            return [n.name, n]
                        }));
                    return (void 0 === t ? [] : t).map(function(n) {
                        return o.get(n.name) || n
                    })
                },
                Z = function() {
                    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).name;
                    return c.$I.includes(n)
                }
        },
        81372: function(n, t, e) {
            e.d(t, {
                K: function() {
                    return u
                }
            });
            var o = e(81740),
                r = e(67661),
                a = e(9009),
                i = e(3255),
                c = function(n) {
                    var t = n.productId;
                    return (0, o.wv)({
                        urlParams: {
                            productId: t
                        }
                    }).formattedUrl
                },
                u = function(n) {
                    var t = n.productId,
                        e = n.shouldFetch,
                        o = (0, i.ZP)((void 0 === e || e) && c({
                            productId: t
                        }), function(n) {
                            return r.uS.get(n).then(function(n) {
                                return (0, a.O)(n.data)
                            })
                        }),
                        u = o.data,
                        s = o.error;
                    return {
                        data: u,
                        loading: !u && !s
                    }
                }
        },
        88167: function(n, t, e) {
            e.d(t, {
                IW: function() {
                    return p
                },
                LG: function() {
                    return f
                },
                cm: function() {
                    return m
                },
                st: function() {
                    return s
                },
                tP: function() {
                    return l
                },
                vN: function() {
                    return _
                }
            });
            var o = e(75445),
                r = e(94054),
                a = e(65532),
                i = e(87414),
                c = e(2784),
                u = e(22921),
                s = function(n) {
                    var t = n.prices,
                        e = (0, a.PE)().currencyData.currency,
                        r = void 0 === e ? o.a : e;
                    return (0, i.Yy)({
                        prices: void 0 === t ? [] : t,
                        localeCurrency: r
                    })
                },
                d = function(n, t, e) {
                    return n + t * e
                },
                l = function(n) {
                    var t = n.product || {},
                        e = t.prices,
                        o = void 0 === e ? {} : e,
                        r = t.pricesPerSeat,
                        a = t.seatCount,
                        i = t.downloadCredits,
                        c = t.commitmentLength,
                        l = s({
                            prices: o
                        }),
                        f = o[null == l ? void 0 : l.toLowerCase()],
                        _ = (void 0 === r ? {} : r)[null == l ? void 0 : l.toLowerCase()],
                        p = f;
                    return _ && a && (p = d(f, _, a)), (0, u.P)(p / (1 === c ? 12 * i : i), l)
                },
                f = function(n) {
                    var t = n.product || {},
                        e = t.prices,
                        o = void 0 === e ? {} : e,
                        r = t.pricesPerSeat,
                        a = t.seatCount,
                        i = s({
                            prices: o
                        }),
                        c = o[null == i ? void 0 : i.toLowerCase()],
                        l = (void 0 === r ? {} : r)[null == i ? void 0 : i.toLowerCase()],
                        f = c;
                    return l && a && (f = d(c, l, a)), (0, u.P)(f, i)
                },
                _ = function(n) {
                    var t = n.price,
                        e = (n.product || {}).prices,
                        o = s({
                            prices: void 0 === e ? {} : e
                        });
                    return (0, u.P)(t, o)
                },
                p = function(n) {
                    var t = n.product,
                        e = n.downloadsPerMonth,
                        o = n.discountPercentage,
                        a = void 0 === o ? 0 : o,
                        d = n.selectedProductLicenseType,
                        l = void 0 === d ? "" : d,
                        f = s({
                            prices: t.prices
                        }),
                        _ = (0, c.useMemo)(function() {
                            var n = t.allotmentCredits,
                                o = (0, i.g7)({
                                    product: t
                                }),
                                c = (0, i.Dg)({
                                    product: t
                                }),
                                u = l === r.cNV,
                                s = (0, i.Yc)({
                                    product: t
                                }),
                                d = s && !c ? 12 : 1,
                                _ = t.prices[f.toLowerCase()],
                                p = s ? (_ / 12).toFixed(2) : _,
                                m = (_ / d / (o ? u ? n / 20 : n : e)).toFixed(2),
                                h = a ? ((_ - _ / 100 * a) / d / (o ? n : e)).toFixed(2) : m;
                            return {
                                pricePerMonth: p,
                                pricePerAsset: m,
                                pricePerAssetDiscounted: h,
                                pricePerPaymentInterval: _
                            }
                        }, [f, e, t, a, l]),
                        p = _.pricePerPaymentInterval,
                        m = _.pricePerMonth,
                        h = _.pricePerAsset,
                        v = _.pricePerAssetDiscounted;
                    return {
                        formattedPricePerPaymentInterval: (0, u.P)(p, f),
                        formattedPricePerMonth: (0, u.P)(m, f),
                        formattedPricePerAsset: (0, u.P)(h, f),
                        formattedPricePerAssetDiscounted: (0, u.P)(v, f)
                    }
                },
                m = function(n) {
                    var t = n.product,
                        e = n.singleClipProduct,
                        o = s({
                            prices: t.prices
                        }),
                        r = t.prices[o.toLowerCase()],
                        a = null == e ? void 0 : e.prices[o.toLowerCase()],
                        i = (r / t.downloadCredits).toFixed(2),
                        c = ((a - i) * t.downloadCredits).toFixed(0);
                    return {
                        formattedPackagePrice: (0, u.P)(r, o),
                        formattedPricePerAsset: (0, u.P)(i, o),
                        formattedSaveAmount: (0, u.P)(c, o)
                    }
                }
        },
        22921: function(n, t, e) {
            e.d(t, {
                P: function() {
                    return _
                },
                o: function() {
                    return f
                }
            });
            var o = e(47842),
                r = e(39232),
                a = e(24861),
                i = e(65532),
                c = e(75),
                u = e(59877),
                s = e(2784),
                d = function(n) {
                    var t = n.t,
                        e = n.price;
                    return {
                        compCredits: t("comp_credits", {
                            PRICE: e
                        }),
                        credit: t(["1", 1].includes(e) ? "credit" : "credits", {
                            PRICE: e
                        }),
                        licenseCredits: t("license_credits", {
                            PRICE: e
                        }),
                        unavailable: t("ent:unavailable"),
                        unlimited: t("ent:unlimited")
                    }
                },
                l = function(n) {
                    var t, e = n.labels,
                        r = void 0 === e ? {} : e;
                    return t = {}, (0, o.Z)(t, a.vh, r.credit), (0, o.Z)(t, a.un, r.compCredits), (0, o.Z)(t, a.eM, r.licenseCredits), t
                },
                f = function() {
                    var n = (0, i.PE)(),
                        t = n.fullLocale,
                        e = n.currencyData,
                        o = (void 0 === e ? {} : e).currency,
                        f = void 0 === o ? "USD" : o,
                        _ = (0, u.$G)(c.Pkf).t;
                    return (0, s.useCallback)(function(n) {
                        var e = n.price,
                            o = n.localeCurrencyOverride,
                            i = n.priceType,
                            c = void 0 === i ? a.Br : i,
                            u = n.fixedFractionDigits,
                            s = d({
                                t: _,
                                price: e
                            });
                        if (e === r.nZ) return s.unavailable;
                        if (e === r.q9) return s.unlimited;
                        var p = l({
                                labels: s
                            }),
                            m = null == p ? void 0 : p[c];
                        return m || new Intl.NumberFormat(t, {
                            style: "currency",
                            currency: (void 0 === o ? "" : o) || f,
                            minimumFractionDigits: null != u ? u : e % 1 == 0 ? 0 : 2
                        }).format(e)
                    }, [f, t, _])
                },
                _ = function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Br;
                    return f()({
                        price: n,
                        localeCurrencyOverride: t,
                        priceType: e
                    })
                }
        },
        47875: function(n, t, e) {
            e.d(t, {
                L: function() {
                    return c
                }
            });
            var o = e(50930),
                r = e(68445),
                a = e(5632),
                i = e(2784),
                c = function() {
                    var n = (0, a.useRouter)();
                    return (0, i.useCallback)(function(t) {
                        var e = t.assetType,
                            a = t.collectionId,
                            i = t.verificationCode,
                            c = (0, r.B)({
                                assetType: e,
                                id: a,
                                verificationCode: i
                            });
                        n.push.apply(n, (0, o.Z)(c))
                    }, [n])
                }
        },
        58898: function(n, t, e) {
            e.d(t, {
                Q: function() {
                    return i
                }
            });
            var o = e(87394),
                r = e(36221),
                a = e(2784),
                i = function(n) {
                    var t = (0, o.Z)((0, a.useState)(!1), 2),
                        e = t[0],
                        i = t[1],
                        c = (0, o.Z)((0, a.useState)(null), 2),
                        u = c[0],
                        s = c[1],
                        d = "".concat(r.C8, ":").concat(r.sR).concat((null == n ? void 0 : n.preset) ? ":".concat(n.preset) : ""),
                        l = "".concat(r.jK, ":").concat(r.sR).concat((null == n ? void 0 : n.preset) ? ":".concat(n.preset) : ""),
                        f = (0, a.useCallback)(function(n) {
                            var t = n.newValue,
                                e = n.key;
                            t === window.location.origin && (e === d || e === l) && (i(!0), s(e === l))
                        }, [i, d, l]),
                        _ = (0, a.useCallback)(function(n) {
                            var t = n.origin,
                                e = n.data;
                            t === window.location.origin && (e === d || e === l) && (i(!0), s(e === l))
                        }, [i, d, l]);
                    return (0, a.useEffect)(function() {
                        return window.addEventListener("storage", f), window.addEventListener("message", _),
                            function() {
                                window.removeEventListener("storage", f), window.removeEventListener("message", _)
                            }
                    }, [f, _]), {
                        isAuthSuccess: e,
                        isNewUser: u
                    }
                }
        },
        70008: function(n, t, e) {
            e.d(t, {
                B: function() {
                    return r
                }
            });
            var o = e(65532),
                r = function() {
                    return {
                        isIndiaRegion: "IN" === (0, o.PE)().region
                    }
                }
        },
        52309: function(n, t, e) {
            e.d(t, {
                B: function() {
                    return r
                }
            });
            var o = e(2784),
                r = function(n) {
                    var t = (0, o.useRef)(!1);
                    return !t.current && n && (t.current = !0), t.current
                }
        },
        5528: function(n, t, e) {
            e.d(t, {
                c: function() {
                    return i
                }
            });
            var o = e(85129),
                r = e(11181),
                a = e(5632),
                i = function() {
                    return (0, a.useRouter)().pathname === o.aD[r.BRANDS.SSTK]
                }
        },
        40233: function(n, t, e) {
            e.d(t, {
                d: function() {
                    return u
                }
            });
            var o = e(70865),
                r = e(96670),
                a = e(2784),
                i = e(43110),
                c = e(25936),
                u = function() {
                    var n = (0, i.jy)().data,
                        t = (0, c.u)().data;
                    return (0, a.useCallback)(function(e) {
                        var a, i, c = e.actionName,
                            u = e.customAttributes,
                            s = (0, r.Z)((0, o.Z)({}, void 0 === u ? {} : u), {
                                userId: null == n ? void 0 : n.id,
                                impersonatorId: t.impersonatorId,
                                organizationId: null == n ? void 0 : n.organizationId,
                                msg: c,
                                referrerPath: window.location.pathname,
                                referrerQuery: window.location.search
                            });
                        null === (a = window.NREUM) || void 0 === a || null === (i = a.addPageAction) || void 0 === i || i.call(a, c, (0, o.Z)({}, window.location || {}, s))
                    }, [n, t])
                }
        },
        99110: function(n, t, e) {
            e.d(t, {
                W: function() {
                    return r
                }
            });
            var o = e(2784),
                r = function(n) {
                    var t = (0, o.useRef)();
                    return void 0 !== n && (t.current = n), t.current
                }
        },
        92405: function(n, t, e) {
            e.d(t, {
                p: function() {
                    return k
                }
            });
            var o = e(47842),
                r = e(70865),
                a = e(96670),
                i = e(26297),
                c = e(23945),
                u = e(81740),
                s = e(7297),
                d = e(65532),
                l = e(9823),
                f = e(13271),
                _ = e(88436),
                p = e(67661),
                m = e(5632),
                h = e(3255),
                v = e(99110),
                g = e(43110),
                x = "auto",
                Z = {},
                y = function(n) {
                    return "flag[".concat(n, "]")
                },
                w = function(n, t) {
                    var e = y(n);
                    return t[e] === x ? x : "true" === t[e]
                };

            function k(n, t, e, k) {
                var C = (0, _.r)(),
                    b = (0, g.jy)().data,
                    j = (void 0 === b ? {} : b).id,
                    P = (0, m.useRouter)().query,
                    I = (0, d.PE)(),
                    H = I.locale,
                    S = I.region,
                    T = (0, l.D)().brand,
                    M = (0, u.Hx)(H, T).formattedUrl,
                    L = (0, h.ZP)(!e && (k && !j || j) && C ? M : null, function(n) {
                        var t;
                        return p.uS.get(n, {
                            headers: (t = {}, (0, o.Z)(t, s.yx, C), (0, o.Z)(t, s.L5, H), (0, o.Z)(t, s.UQ, T), (0, o.Z)(t, s.cT, S), t)
                        }).then(function(n) {
                            return n.data
                        })
                    }, {
                        shouldRetryOnError: !1
                    }).data,
                    R = (0, f._)("forcedFlags", Z),
                    z = R.storedValue,
                    D = R.setValue,
                    N = function(n, t) {
                        var e = z[n],
                            u = (0, i.Z)(z, [n].map(c.Z));
                        t === x && n in z ? D(u) : t !== x && e !== t && D((0, a.Z)((0, r.Z)({}, u), (0, o.Z)({}, n, t)))
                    },
                    A = (0, v.W)(null != L ? L : n ? (0, o.Z)({}, n, t) : void 0);
                if (A && void 0 !== n) {
                    if (y(n) in P) {
                        var B = w(n, P);
                        return N(n, B), B === x ? A[n] : B
                    }
                    return n in z ? Boolean(z[n]) : A[n]
                }
                return A && void 0 === n && Object.keys(A).forEach(function(n) {
                    if (y(n) in P) {
                        var t = w(n, P);
                        t !== x && (A[n] = t), N(n, t)
                    } else n in z && (A[n] = z[n])
                }), A
            }
        },
        92128: function(n, t, e) {
            e.d(t, {
                x: function() {
                    return i
                }
            });
            var o = e(70865),
                r = e(52322),
                a = (0, e(6620).Z)((0, r.jsx)("path", {
                    d: "M25.333 9.2l-1.867-1.867-7.467 7.467-7.467-7.467L6.665 9.2l7.467 7.467-7.467 7.467 1.867 1.867 7.467-7.467 7.467 7.467 1.867-1.867-7.467-7.467L25.333 9.2z"
                }), "Close.svg"),
                i = function(n) {
                    return (0, r.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        92784: function(n, t, e) {
            e.d(t, {
                B: function() {
                    return i
                }
            });
            var o = e(70865),
                r = e(52322),
                a = (0, e(6620).Z)((0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("path", {
                        d: "M8 9.333h2.667V12H8V9.333z"
                    }), (0, r.jsx)("path", {
                        d: "M2.667 2.667v26.667H24c2.946 0 5.333-2.388 5.333-5.333V2.668zm24 21.333c0 1.473-1.194 2.667-2.667 2.667H5.333V5.334h21.333z"
                    }), (0, r.jsx)("path", {
                        d: "M13.333 9.333H24V12H13.333V9.333zM8 14.667h2.667v2.667H8v-2.667zM13.333 14.667H24v2.667H13.333v-2.667zM8 20h2.667v2.667H8V20zM13.333 20H24v2.667H13.333V20z"
                    })]
                }), "Document.svg"),
                i = function(n) {
                    return (0, r.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        34116: function(n, t, e) {
            e.r(t), e.d(t, {
                Heart: function() {
                    return i
                }
            });
            var o = e(70865),
                r = e(52322),
                a = (0, e(6620).Z)((0, r.jsx)("path", {
                    d: "M15.667 7.6C7.267-.96-2.92 9.427 5.48 17.987l10.187 10.387L25.84 17.987C34.28 9.334 24.093-1 15.667 7.6zM24 16.12l-8.267 8.44-8.347-8.44c-2.147-2.187-2.893-4.6-2.053-6.613.596-1.443 1.992-2.44 3.621-2.44h.062-.003c1.907.142 3.58 1.039 4.739 2.391l.008.009 1.907 1.947 1.893-1.947c1.179-1.377 2.871-2.285 4.777-2.425l.023-.001h.029c1.626 0 3.021.99 3.615 2.401l.01.026c.84 2.027.093 4.453-2.013 6.653z"
                }), "Heart.svg"),
                i = function(n) {
                    return (0, r.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        38315: function(n, t, e) {
            e.r(t), e.d(t, {
                MosaicView: function() {
                    return i
                }
            });
            var o = e(70865),
                r = e(52322),
                a = (0, e(6620).Z)((0, r.jsx)("path", {
                    d: "M18.667 6h-5.333v5.333h5.333V6zm2.666 0v5.333h5.333V6h-5.333zM10.667 6H5.334v5.333h5.333V6zm10.666 13.333h5.333V14h-5.333v5.333zM18.667 14H5.334v5.333h13.333V14zm-5.334 13.333h13.333V22H13.333v5.333zm-8 0h5.333V22H5.333v5.333z"
                }), "MosaicView.svg"),
                i = function(n) {
                    return (0, r.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        13279: function(n, t, e) {
            e.r(t), e.d(t, {
                Success: function() {
                    return s
                }
            });
            var o = e(70865),
                r = e(52322),
                a = e(6620),
                i = e(5007),
                c = e(2784),
                u = (0, a.Z)((0, r.jsx)("path", {
                    d: "M21.733 11.867L14 19.6l-4-4.133-2 1.867 6 6 9.6-9.6zM16 3.333c-7.333 0-13.333 6-13.333 13.333s6 13.333 13.333 13.333 13.333-6 13.333-13.333S23.333 3.333 16 3.333zm0 24c-5.867 0-10.667-4.8-10.667-10.667S10.133 5.999 16 5.999s10.667 4.8 10.667 10.667S21.867 27.333 16 27.333z"
                }), "Success.svg"),
                s = (0, c.forwardRef)(function(n, t) {
                    return (0, r.jsx)(u, (0, o.Z)({
                        viewBox: "0 0 32 32",
                        ref: t
                    }, n))
                });
            s.displayName = "SuccessIcon", s.muiName = i.Z.muiName
        },
        27963: function(n, t, e) {
            e.r(t), e.d(t, {
                User: function() {
                    return i
                }
            });
            var o = e(70865),
                r = e(52322),
                a = (0, e(6620).Z)((0, r.jsx)("path", {
                    d: "M16 16.667c3.733 0 6.667-2.933 6.667-6.667S19.734 3.333 16 3.333 9.333 6.266 9.333 10s2.933 6.667 6.667 6.667zM16 6c2.267 0 4 1.733 4 4s-1.733 4-4 4-4-1.733-4-4 1.733-4 4-4zm6.667 13.333H9.334c-3.733 0-6.667 2.933-6.667 6.667v4h26.667v-4c0-3.733-2.933-6.667-6.667-6.667zm4 8H5.334V26c0-2.267 1.733-4 4-4h13.333c2.267 0 4 1.733 4 4v1.333z"
                }), "User.svg"),
                i = function(n) {
                    return (0, r.jsx)(a, (0, o.Z)({
                        viewBox: "0 0 32 32"
                    }, n))
                }
        },
        68445: function(n, t, e) {
            e.d(t, {
                B: function() {
                    return w
                },
                _: function() {
                    return y
                }
            });
            var o, r, a, i, c, u = e(47842),
                s = e(26297),
                d = e(39232),
                l = e(44297),
                f = e(38398),
                _ = e.n(f),
                p = e(85208),
                m = "collections",
                h = (c = {}, (0, u.Z)(c, m, (o = {}, (0, u.Z)(o, p.Dx, "/".concat(m)), (0, u.Z)(o, p.ID, "/".concat(m, "/[id]")), o)), (0, u.Z)(c, d.pX, (0, u.Z)({}, m, (r = {}, (0, u.Z)(r, p.Dx, "/".concat(d.pX, "/").concat(m)), (0, u.Z)(r, p.ID, "/".concat(d.pX, "/").concat(m, "/[id]")), r))), (0, u.Z)(c, d.xF, (0, u.Z)({}, m, (a = {}, (0, u.Z)(a, p.Dx, "/".concat(d.xF, "/").concat(m)), (0, u.Z)(a, p.ID, "/".concat(d.xF, "/").concat(m, "/[id]")), a))), (0, u.Z)(c, d.gP, (0, u.Z)({}, m, (i = {}, (0, u.Z)(i, p.Dx, "/".concat(d.gP, "/").concat(m)), (0, u.Z)(i, p.ID, "/".concat(d.gP, "/").concat(m, "/[id]")), i))), c),
                v = function() {
                    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).query,
                        t = _().format({
                            pathname: h[m][p.Dx],
                            query: n
                        });
                    return [t, t]
                },
                g = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.id,
                        e = n.query,
                        o = _().format({
                            pathname: "/".concat(m, "/").concat(t),
                            query: e
                        });
                    return [o, o]
                },
                x = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.assetType,
                        e = void 0 === t ? d.k4 : t,
                        o = n.id,
                        r = n.query,
                        a = _().format({
                            pathname: "/".concat(e, "/").concat(m, "/").concat(o),
                            query: r
                        });
                    return [a, a]
                },
                Z = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.assetType,
                        e = void 0 === t ? d.k4 : t,
                        o = n.query,
                        r = _().format({
                            pathname: "/".concat(e, "/").concat(m),
                            query: o
                        });
                    return [r, r]
                },
                y = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.assetType,
                        e = void 0 === t ? d.k4 : t,
                        o = n.query;
                    switch (e) {
                        case d.pX:
                        case d.xF:
                        case d.tn:
                        case d.gP:
                            return Z({
                                assetType: e,
                                query: o
                            });
                        case d.k4:
                        default:
                            return v({
                                query: o
                            })
                    }
                },
                w = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.assetType,
                        e = void 0 === t ? d.k4 : t,
                        o = n.id,
                        r = n.verificationCode,
                        a = n.query,
                        i = ((void 0 === a ? {} : a).id, (0, s.Z)(n.query, ["id"])),
                        c = (0, l.Xo)(e) ? d.gP : e;
                    if (!o) return y({
                        assetType: c
                    });
                    var u = r ? "".concat(o, "-").concat(r) : o;
                    switch (c) {
                        case d.pX:
                        case d.xF:
                        case d.tn:
                        case d.gP:
                            return x({
                                assetType: c,
                                id: u,
                                query: i
                            });
                        case d.k4:
                        default:
                            return g({
                                id: u,
                                query: i
                            })
                    }
                }
        },
        38204: function(n, t, e) {
            e.d(t, {
                $3: function() {
                    return X
                },
                An: function() {
                    return nh
                },
                B5: function() {
                    return nu
                },
                Bj: function() {
                    return Y
                },
                Ly: function() {
                    return no
                },
                P1: function() {
                    return ne
                },
                Qd: function() {
                    return F
                },
                Si: function() {
                    return nr
                },
                U2: function() {
                    return nl
                },
                V6: function() {
                    return q
                },
                W5: function() {
                    return ng
                },
                X2: function() {
                    return nm
                },
                Xx: function() {
                    return np
                },
                YT: function() {
                    return W
                },
                _8: function() {
                    return J
                },
                ad: function() {
                    return nt
                },
                b1: function() {
                    return $
                },
                dN: function() {
                    return ni
                },
                dk: function() {
                    return nd
                },
                gX: function() {
                    return ns
                },
                j$: function() {
                    return nn
                },
                jH: function() {
                    return U
                },
                k_: function() {
                    return Q
                },
                kn: function() {
                    return nc
                },
                nA: function() {
                    return n_
                },
                nT: function() {
                    return nf
                },
                pA: function() {
                    return G
                },
                rm: function() {
                    return O
                },
                tW: function() {
                    return na
                },
                u9: function() {
                    return K
                },
                ym: function() {
                    return nv
                }
            });
            var o, r, a, i, c, u = e(47842),
                s = e(70865),
                d = e(39232),
                l = e(38398),
                f = e.n(l),
                _ = e(85208),
                p = "api-terms",
                m = "blog",
                h = "business",
                v = "request-demo",
                g = "flex-subscriptions",
                x = "editor",
                Z = "image",
                y = "help",
                w = "privacy",
                k = "studios",
                C = "terms",
                b = "license",
                j = "impressum",
                P = "purchase",
                I = "support",
                H = "article",
                S = "explore",
                T = "contact-us",
                M = "create",
                L = "editor",
                R = "new-from-asset",
                z = "new-from-upload",
                D = "media-register",
                N = "developers",
                A = "documentation",
                B = "pricing",
                E = "modern-slavery-statement",
                V = (c = {}, (0, u.Z)(c, "api", (0, u.Z)({}, B, "/".concat("api", "/").concat(B))), (0, u.Z)(c, m, "/".concat(m)), (0, u.Z)(c, h, (o = {}, (0, u.Z)(o, k, "/".concat(h, "/").concat(k)), (0, u.Z)(o, v, "/".concat(h, "#").concat(v)), (0, u.Z)(o, g, "/".concat(h, "/").concat(g, "#").concat("footer")), (0, u.Z)(o, D, "/".concat(h, "/").concat(D)), o)), (0, u.Z)(c, M, (0, u.Z)({}, x, (r = {}, (0, u.Z)(r, R, "/".concat(M, "/").concat(x, "/").concat(R)), (0, u.Z)(r, z, "/".concat(M, "/").concat(x, "/").concat(z)), r))), (0, u.Z)(c, N, (a = {}, (0, u.Z)(a, _.Dx, "/".concat(N)), (0, u.Z)(a, p, "/".concat(N, "/").concat(p)), (0, u.Z)(a, T, "/".concat(N, "/").concat(T)), (0, u.Z)(a, A, "/".concat(N, "/").concat(A)), a)), (0, u.Z)(c, S, (0, u.Z)({}, g, "/".concat(S, "/").concat(g))), (0, u.Z)(c, x, (0, u.Z)({}, Z, "/".concat(x, "/").concat(Z))), (0, u.Z)(c, M, (i = {}, (0, u.Z)(i, "new", "/".concat(M, "/").concat(L, "/").concat("new")), (0, u.Z)(i, R, "/".concat(M, "/").concat(L, "/").concat(R)), (0, u.Z)(i, z, "/".concat(M, "/").concat(x, "/").concat(z)), (0, u.Z)(i, d.zo, "/".concat(M, "/").concat("go", "/").concat(d.xN)), i)), (0, u.Z)(c, y, "/".concat(y)), (0, u.Z)(c, w, "/".concat(w)), (0, u.Z)(c, C, "/".concat(C)), (0, u.Z)(c, b, "/".concat(b)), (0, u.Z)(c, j, "/".concat(j)), (0, u.Z)(c, E, "/".concat(E)), (0, u.Z)(c, P, "/".concat(P)), (0, u.Z)(c, I, (0, u.Z)({}, H, "/".concat(I, "/").concat(H))), c),
                q = function() {
                    return V.api[B]
                },
                F = function() {
                    return f().format({
                        protocol: "https",
                        host: "studios.shutterstock.com",
                        pathname: "/"
                    })
                },
                U = function() {
                    return V[C]
                },
                W = function() {
                    return V[m]
                },
                K = function() {
                    return V[w]
                },
                O = function(n) {
                    return "/create/editor/".concat(n)
                },
                X = function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return f().format({
                        pathname: "".concat(V[x][Z], "/").concat(n),
                        query: (0, s.Z)({}, t)
                    })
                },
                $ = function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.k4;
                    return f().format({
                        pathname: "".concat(V[M][R]),
                        query: (0, s.Z)((0, u.Z)({}, "".concat(e, "Id"), n), t)
                    })
                },
                G = function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.k4;
                    return f().format({
                        pathname: "".concat(V[M][z]),
                        query: (0, s.Z)((0, u.Z)({}, "".concat(e, "Id"), n), t)
                    })
                },
                Q = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f().format({
                        pathname: "".concat(V[M][d.zo]),
                        query: (0, s.Z)({}, n)
                    })
                },
                Y = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f().format({
                        pathname: "".concat(V[M].new),
                        query: (0, s.Z)({}, n)
                    })
                },
                J = function() {
                    return V[b]
                },
                nn = function() {
                    return V[j]
                },
                nt = function() {
                    return V[y]
                },
                ne = function() {
                    return "".concat(V[y], "#").concat(T)
                },
                no = function() {
                    return V[h][v]
                },
                nr = function() {
                    return V[S][g]
                },
                na = function() {
                    return V[h][g]
                },
                ni = function() {
                    return V[N][_.Dx]
                },
                nc = function() {
                    return V[N][p]
                },
                nu = function() {
                    return V[N][T]
                },
                ns = function() {
                    return V[N][A]
                },
                nd = function() {
                    return V[E]
                },
                nl = function(n) {
                    var t = n.queryParams;
                    return f().format({
                        pathname: V[P],
                        query: (0, s.Z)({}, t)
                    })
                },
                nf = function(n, t) {
                    return f().format({
                        protocol: "https",
                        host: "support.shutterstock.com",
                        pathname: "/s/".concat(t),
                        query: {
                            language: n
                        }
                    })
                },
                n_ = function(n) {
                    var t = n.queryParams;
                    return f().format({
                        protocol: "https",
                        host: "s1045775785.t.eloqua.com",
                        pathname: "/e/f2.aspx",
                        query: (0, s.Z)({}, t)
                    })
                },
                np = function() {
                    return f().format({
                        protocol: "https",
                        host: "api-reference.shutterstock.com"
                    })
                },
                nm = {
                    en: "en_US",
                    id: "in",
                    nb: "no",
                    nl: "nl_NL",
                    pt: "pt_BR",
                    zh: "zh_CN",
                    "zh-Hant": "zh_TW"
                },
                nh = function() {
                    return V[h][D]
                },
                nv = function(n) {
                    return f().format({
                        protocol: "https",
                        hostname: "help.instagram.com",
                        pathname: n
                    })
                },
                ng = function() {
                    return f().format({
                        protocol: "https",
                        hostname: "qa-shutterstockcommunities.cs245.force.com",
                        pathname: "enterprisesupport/s/",
                        query: {
                            language: nm.en
                        }
                    })
                }
        }
    }
]);
//# sourceMappingURL=ImageAssetItemOverlay.f276107aa7ee0650.js.map