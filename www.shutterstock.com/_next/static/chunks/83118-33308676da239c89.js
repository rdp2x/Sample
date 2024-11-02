"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83118, 94845], {
        31931: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return w
                }
            });
            var r = t(70865),
                i = t(96670),
                o = t(87394),
                a = t(52322),
                s = t(67550),
                u = t(89041),
                c = t(83024),
                l = t(97599),
                d = t(95299),
                p = t(16113),
                g = t(37205),
                m = t(23490),
                f = t(21028),
                h = t(53881),
                v = t(75298),
                y = t(97593),
                b = t(25237),
                O = t.n(b),
                _ = t(2784),
                x = t(8740),
                T = t(83081),
                C = O()(function() {
                    return t.e(47279).then(t.bind(t, 47279)).then(function(n) {
                        return n.CmsDynamicModules
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [47279]
                        }
                    },
                    ssr: !0
                }),
                k = (0, x.ZL)()(function(n) {
                    return {
                        searchBarContainer: {
                            paddingBottom: (0, n.spacing)(4)
                        }
                    }
                }),
                w = function(n) {
                    var e, t, i, b = n.modulesProps,
                        O = k().classes,
                        x = (0, m.N)().isBot,
                        w = (0, h.n)().isMobileServer,
                        Z = (0, f.hw)(),
                        I = Z.hero,
                        P = Z.cmsModules,
                        N = Z.breadcrumbs,
                        S = Z.metadata,
                        E = Z.shouldIndex,
                        L = Z.entries,
                        R = Z.statusCode,
                        A = Z.legalText,
                        M = Z.topNavigationType,
                        j = Z.uniformModuleSpacing,
                        D = Z.showSearchBar,
                        B = Z.pageTitle,
                        V = Z.primaryHero,
                        F = (0, o.Z)((0, v.I)({
                            triggerOnce: !0,
                            rootMargin: "100000px 0px ".concat(w ? "0px" : "100px", " 0px")
                        }), 2),
                        H = F[0],
                        U = F[1],
                        q = (0, _.useMemo)(function() {
                            if (P) {
                                var n = P.some(function(n) {
                                    var e, t;
                                    return (null == n ? void 0 : n.id) && (null === (e = L[n.id]) || void 0 === e ? void 0 : null === (t = e.fields) || void 0 === t ? void 0 : t.jumpLinkId)
                                });
                                return H || x || n ? P : P.slice(0, 4)
                            }
                            return []
                        }, [P, L, x, H]);
                    if (R) return (0, a.jsx)(l.F, {
                        statusCode: R
                    });
                    var W = N && N[N.length - 1],
                        z = null !== (i = null == I ? void 0 : I.id) && void 0 !== i ? i : null == V ? void 0 : V.id;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [S && (0, a.jsx)(u.z, {
                            metadata: S,
                            pageTitle: B,
                            hero: I,
                            noIndex: !E
                        }), D && (0, a.jsx)("div", {
                            className: O.searchBarContainer,
                            children: (0, a.jsx)(g.v, {})
                        }), N && M === y.XF.TOP_NAV_SEARCH && (0, a.jsx)(T.p, {
                            id: W.id,
                            contentType: null == L ? void 0 : null === (e = L[W.id]) || void 0 === e ? void 0 : e.contentType,
                            breadcrumbs: N
                        }), (I || V) && (0, a.jsx)(T.p, (0, r.Z)({
                            id: z,
                            hideSearchByAsset: !1,
                            contentType: null == L ? void 0 : null === (t = L[z]) || void 0 === t ? void 0 : t.contentType,
                            isPrimaryHero: !0,
                            topNavigationType: M
                        }, b)), P && (0, a.jsx)(s.Z, {
                            mx: {
                                xs: -4,
                                sm: -5
                            },
                            children: !!(null == q ? void 0 : q.length) && (0, a.jsx)(C, (0, r.Z)({
                                cmsModules: q,
                                CustomContainerComponent: d.H,
                                CustomContainerComponentDarkTheme: p.I,
                                entries: L,
                                isContentfulLP: !0,
                                uniformModuleSpacing: j
                            }, b))
                        }), (0, a.jsx)("div", {
                            ref: U
                        }), A && (0, a.jsx)(c.U, {
                            legalText: A,
                            uniformModuleSpacing: j
                        }), P && !(H || x) && (0, a.jsx)("div", {
                            style: {
                                minHeight: "400px"
                            }
                        })]
                    })
                };
            w.defaultProps = (0, i.Z)((0, r.Z)({}, y.qR), {
                modulesProps: {
                    customComponentMap: {},
                    componentProps: {},
                    isAlternatingBackground: void 0
                }
            })
        },
        83024: function(n, e, t) {
            t.d(e, {
                U: function() {
                    return c
                }
            });
            var r = t(52322),
                i = t(67550),
                o = t(62197),
                a = t(90369),
                s = t(36232),
                u = (0, t(8740).ZL)()(function(n) {
                    return {
                        box: {
                            textAlign: "center",
                            justifyContent: "center",
                            marginTop: "3rem",
                            marginBottom: "3rem",
                            display: "flex",
                            flexDirection: "column",
                            opacity: n.tokens.opacity[60]
                        }
                    }
                }),
                c = function(n) {
                    var e = n.legalText,
                        t = n.isFullWidth,
                        c = n.uniformModuleSpacing,
                        l = u().classes;
                    return e && (0, r.jsx)(s.I, {
                        cmsBgContainerProps: {
                            index: 0,
                            isFullWidth: t,
                            uniformModuleSpacing: c,
                            respectLastItem: !1
                        },
                        children: (0, r.jsx)(i.Z, {
                            className: l.box,
                            children: (0, r.jsx)(a.h, {
                                stringToTransform: e,
                                Component: (0, r.jsx)(o.Z, {
                                    color: "primary",
                                    variant: "subtitle2"
                                })
                            })
                        })
                    })
                };
            c.defaultProps = {
                legalText: null,
                isFullWidth: !1
            }
        },
        89041: function(n, e, t) {
            t.d(e, {
                z: function() {
                    return a
                }
            });
            var r = t(52322),
                i = t(27050),
                o = t(72474),
                a = function(n) {
                    var e = n.metadata,
                        t = e.ogTitle,
                        a = e.ogDescription,
                        s = e.ogImage,
                        u = e.pageDescription,
                        c = n.hero,
                        l = n.noIndex,
                        d = n.schemas,
                        p = n.pageTitle,
                        g = t || p || (null == c ? void 0 : c.title),
                        m = a || (null == c ? void 0 : c.subtitle),
                        f = u || (null == c ? void 0 : c.subtitle),
                        h = s || (null == c ? void 0 : c.image) && (0, i.Co)(c.image);
                    return (0, r.jsx)(o.B, {
                        description: m,
                        title: g,
                        image: h,
                        noIndexNoFollow: l,
                        schemas: d,
                        pageDescription: f
                    })
                };
            a.defaultProps = {
                hero: null,
                schemas: void 0,
                noIndex: !1,
                pageTitle: ""
            }
        },
        90369: function(n, e, t) {
            t.d(e, {
                h: function() {
                    return s
                }
            });
            var r = t(70865),
                i = t(52322),
                o = t(2784),
                a = (0, t(8740).ZL)()(function() {
                    return {
                        newline: {
                            whiteSpace: "pre-line"
                        }
                    }
                }),
                s = (0, o.memo)(function(n) {
                    var e = n.stringToTransform,
                        t = n.classes,
                        s = n.Component,
                        u = a(),
                        c = u.classes.newline,
                        l = {
                            className: (0, u.cx)(t, c),
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        };
                    return s ? (0, o.cloneElement)(s, l) : (0, i.jsx)("div", (0, r.Z)({}, l))
                })
        },
        36232: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return h
                }
            });
            var r = t(47842),
                i = t(70865),
                o = t(96670),
                a = t(52322),
                s = t(96976),
                u = t(53957),
                c = t(91609),
                l = t(9823),
                d = t(73469),
                p = t(8740),
                g = t(41519),
                m = (0, p.ZL)()(function(n, e) {
                    var t = n.breakpoints,
                        a = n.tokens.spacing,
                        s = e.backgroundColor,
                        c = e.isHero,
                        l = e.isFullWidth,
                        d = e.uniformModuleSpacing,
                        p = e.respectLastItem,
                        g = function(n, e) {
                            return (0, i.Z)({
                                padding: "".concat(n, " ").concat(e)
                            }, p && {
                                "&:last-of-type": {
                                    padding: "".concat(n, " ").concat(e, " 0 ").concat(e)
                                }
                            })
                        };
                    return {
                        container: (0, i.Z)((0, o.Z)((0, i.Z)({}, !c && !l && {
                            "&&&>*": {
                                maxWidth: "1280px",
                                margin: "auto"
                            }
                        }, !c && l && {
                            "&&&>*": {
                                maxWidth: "100%",
                                margin: "auto"
                            }
                        }), {
                            backgroundColor: s
                        }), function() {
                            var n, e, s;
                            switch (d) {
                                case u.dv:
                                    return (0, o.Z)((0, i.Z)({}, g(a.s, a.base)), (n = {}, (0, r.Z)(n, t.up("sm"), (0, i.Z)({}, g(a.s, a.m))), (0, r.Z)(n, t.up("md"), (0, i.Z)({}, g(a.base, a.m))), n));
                                case u.ps:
                                    return (0, o.Z)((0, i.Z)({}, g(a.base, a.base)), (e = {}, (0, r.Z)(e, t.up("sm"), (0, i.Z)({}, g(a.base, a.m))), (0, r.Z)(e, t.up("md"), (0, i.Z)({}, g(a.m, a.m))), e));
                                case u.ON:
                                    return (0, o.Z)((0, i.Z)({}, g(a.m, a.base)), (s = {}, (0, r.Z)(s, t.up("sm"), (0, i.Z)({}, g(a.l, a.m))), (0, r.Z)(s, t.up("md"), (0, i.Z)({}, g(a.xl, a.m))), s));
                                default:
                                    return (0, r.Z)({
                                        padding: "0 ".concat(a.base)
                                    }, t.up("sm"), {
                                        padding: "0 ".concat(a.m)
                                    })
                            }
                        }())
                    }
                }),
                f = function(n) {
                    var e = n.index,
                        t = n.isBlackMode,
                        r = n.theme;
                    return t ? r.palette.common.black : r.themeName === c.iA ? r.palette.background.default : e % 2 == 0 ? r.palette.background.default : r.palette.skeleton
                },
                h = function(n) {
                    var e = n.children,
                        t = n.className,
                        r = n.cmsBgContainerProps,
                        i = r.index,
                        o = r.isFullWidth,
                        p = r.uniformModuleSpacing,
                        h = void 0 === p ? u.ps : p,
                        v = r.respectLastItem,
                        y = n.themeMode,
                        b = n.isHero,
                        O = (0, l.D)().themeMode,
                        _ = (0, d.i)({
                            themeMode: y === u.Ji || y === u.VH || O === c.oc.DARK ? c.oc.DARK : c.oc.LIGHT
                        }).theme,
                        x = f({
                            index: i,
                            isBlackMode: y === u.Ji,
                            theme: _
                        }),
                        T = m({
                            backgroundColor: x,
                            isHero: b,
                            isFullWidth: o,
                            uniformModuleSpacing: h,
                            respectLastItem: void 0 === v || v
                        }),
                        C = T.classes,
                        k = T.cx;
                    return "number" != typeof i ? (0, a.jsx)(a.Fragment, {
                        children: e
                    }) : (0, a.jsx)(s.Z, {
                        theme: _,
                        children: (0, a.jsx)(g.j.Provider, {
                            value: x,
                            children: (0, a.jsx)("div", {
                                className: k(C.container, t),
                                children: e
                            })
                        })
                    })
                };
            h.defaultProps = {
                themeMode: u.sn,
                className: "",
                isHero: !1,
                cmsBgContainerProps: {}
            }
        },
        56398: function(n, e, t) {
            t.d(e, {
                B9: function() {
                    return d
                },
                C5: function() {
                    return b
                },
                D7: function() {
                    return T
                },
                Eq: function() {
                    return a
                },
                Hj: function() {
                    return i
                },
                Lb: function() {
                    return v
                },
                M2: function() {
                    return o
                },
                QT: function() {
                    return y
                },
                QY: function() {
                    return p
                },
                T2: function() {
                    return x
                },
                Vg: function() {
                    return k
                },
                WL: function() {
                    return c
                },
                Xp: function() {
                    return g
                },
                YR: function() {
                    return s
                },
                ZW: function() {
                    return _
                },
                de: function() {
                    return l
                },
                gK: function() {
                    return O
                },
                l9: function() {
                    return u
                },
                oD: function() {
                    return m
                },
                px: function() {
                    return f
                },
                wO: function() {
                    return h
                },
                xf: function() {
                    return C
                },
                xt: function() {
                    return r
                }
            });
            var r = "CARD_PAYMENT",
                i = "tex-7621",
                o = "credit_card",
                a = "sepa_direct_debit",
                s = "paypal",
                u = "products",
                c = "invoices",
                l = "sfx",
                d = "complimentary",
                p = "shutterstock_bill_payment",
                g = "NL",
                m = "za_vat",
                f = "vat",
                h = "tw",
                v = "ZAR",
                y = "TWD",
                b = "EUR",
                O = "music",
                _ = "video",
                x = "image",
                T = "elements",
                C = "sfx",
                k = 28
        },
        75445: function(n, e, t) {
            t.d(e, {
                a: function() {
                    return r
                }
            });
            var r = "USD"
        },
        21028: function(n, e, t) {
            t.d(e, {
                $L: function() {
                    return o
                },
                QW: function() {
                    return s
                },
                hw: function() {
                    return a
                }
            });
            var r = t(52322),
                i = t(2784),
                o = (0, i.createContext)({}),
                a = function() {
                    return (0, i.useContext)(o)
                },
                s = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = n.value,
                        t = n.children;
                    return (0, r.jsx)(o.Provider, {
                        value: e,
                        children: t
                    })
                }
        },
        13591: function(n, e, t) {
            t.d(e, {
                C5: function() {
                    return p
                },
                nk: function() {
                    return g
                }
            });
            var r, i = t(47842),
                o = t(14625),
                a = t(27739),
                s = "2_credit_pack",
                u = "5_credit_pack",
                c = "30_credit_pack",
                l = "125_credit_pack",
                d = "250_credit_pack",
                p = [s, u, c, l, d],
                g = "creditPack",
                m = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: a.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details_images_and_music"
                        }
                    }, {
                        name: a.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: a.dm,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }]
                };
            r = {}, (0, i.Z)(r, o.PU, m), (0, i.Z)(r, o.XC, {
                translations: {
                    title: "credit_packs_title",
                    caption: "on_demand_caption"
                },
                items: [{
                    name: u
                }, {
                    name: s
                }, {
                    name: c
                }]
            }), (0, i.Z)(r, o.NP, {
                translations: {
                    title: "enhanced_generic_legal_protections",
                    caption: "on_demand_caption"
                },
                items: [{
                    name: c
                }, {
                    name: l
                }, {
                    name: d
                }]
            })
        },
        87414: function(n, e, t) {
            t.d(e, {
                $A: function() {
                    return y
                },
                Dg: function() {
                    return f
                },
                Jr: function() {
                    return v
                },
                Kg: function() {
                    return h
                },
                OG: function() {
                    return g
                },
                XD: function() {
                    return O
                },
                Yc: function() {
                    return c
                },
                Yy: function() {
                    return p
                },
                g7: function() {
                    return m
                },
                p_: function() {
                    return b
                }
            });
            var r = t(50930),
                i = t(27739),
                o = t(56495),
                a = t(75445),
                s = t(60591),
                u = t(13591),
                c = function(n) {
                    return n.product.repeatInterval === s.MQ
                },
                l = {
                    CHF: "EUR",
                    DKK: "EUR",
                    NOK: "EUR",
                    SEK: "EUR"
                },
                d = function(n) {
                    var e = n.currency,
                        t = n.prices,
                        r = l[e];
                    return t[r] ? r : a.a
                },
                p = function(n) {
                    var e = n.prices,
                        t = void 0 === e ? {} : e,
                        r = n.localeCurrency;
                    return t[r.toLowerCase()] ? r.toUpperCase() : d({
                        currency: r,
                        prices: t
                    })
                },
                g = function(n) {
                    var e = n.product;
                    return (void 0 === e ? {} : e).activityTracking === i.bk
                },
                m = function(n) {
                    var e = n.product,
                        t = void 0 === e ? {} : e,
                        r = t.allotmentCredits,
                        i = t.downloadCredits;
                    return r && !i
                },
                f = function(n) {
                    var e = n.product,
                        t = (void 0 === e ? {} : e).name;
                    return u.C5.includes(t)
                },
                h = function(n) {
                    var e, t = n.paymentPlans,
                        r = n.licenseType,
                        o = n.selectedPaymentPlan;
                    return (null == o ? void 0 : o.cost) ? o.cost : null === (e = (void 0 === t ? [] : t).find(function(n) {
                        var e = n.activityTracking,
                            t = n.isEligibleForDownload,
                            o = n.license;
                        return o === r && e === i.bk && (t || !t && o === s.ur)
                    })) || void 0 === e ? void 0 : e.cost
                },
                v = function(n) {
                    var e = n.productName;
                    return (0, r.Z)(o.LY).concat([o.i3, o.Y_]).includes(void 0 === e ? "" : e)
                },
                y = function(n, e) {
                    return null == n ? void 0 : n.find(function(n) {
                        return n.name === e
                    })
                },
                b = function(n) {
                    var e = n.products,
                        t = n.productsToReplace,
                        r = new Map((void 0 === t ? [] : t).map(function(n) {
                            return [n.name, n]
                        }));
                    return (void 0 === e ? [] : e).map(function(n) {
                        return r.get(n.name) || n
                    })
                },
                O = function() {
                    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).name;
                    return s.$I.includes(n)
                }
        },
        22921: function(n, e, t) {
            t.d(e, {
                P: function() {
                    return g
                },
                o: function() {
                    return p
                }
            });
            var r = t(47842),
                i = t(39232),
                o = t(24861),
                a = t(65532),
                s = t(75),
                u = t(59877),
                c = t(2784),
                l = function(n) {
                    var e = n.t,
                        t = n.price;
                    return {
                        compCredits: e("comp_credits", {
                            PRICE: t
                        }),
                        credit: e(["1", 1].includes(t) ? "credit" : "credits", {
                            PRICE: t
                        }),
                        licenseCredits: e("license_credits", {
                            PRICE: t
                        }),
                        unavailable: e("ent:unavailable"),
                        unlimited: e("ent:unlimited")
                    }
                },
                d = function(n) {
                    var e, t = n.labels,
                        i = void 0 === t ? {} : t;
                    return e = {}, (0, r.Z)(e, o.vh, i.credit), (0, r.Z)(e, o.un, i.compCredits), (0, r.Z)(e, o.eM, i.licenseCredits), e
                },
                p = function() {
                    var n = (0, a.PE)(),
                        e = n.fullLocale,
                        t = n.currencyData,
                        r = (void 0 === t ? {} : t).currency,
                        p = void 0 === r ? "USD" : r,
                        g = (0, u.$G)(s.Pkf).t;
                    return (0, c.useCallback)(function(n) {
                        var t = n.price,
                            r = n.localeCurrencyOverride,
                            a = n.priceType,
                            s = void 0 === a ? o.Br : a,
                            u = n.fixedFractionDigits,
                            c = l({
                                t: g,
                                price: t
                            });
                        if (t === i.nZ) return c.unavailable;
                        if (t === i.q9) return c.unlimited;
                        var m = d({
                                labels: c
                            }),
                            f = null == m ? void 0 : m[s];
                        return f || new Intl.NumberFormat(e, {
                            style: "currency",
                            currency: (void 0 === r ? "" : r) || p,
                            minimumFractionDigits: null != u ? u : t % 1 == 0 ? 0 : 2
                        }).format(t)
                    }, [p, e, g])
                },
                g = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Br;
                    return p()({
                        price: n,
                        localeCurrencyOverride: e,
                        priceType: t
                    })
                }
        },
        70008: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return i
                }
            });
            var r = t(65532),
                i = function() {
                    return {
                        isIndiaRegion: "IN" === (0, r.PE)().region
                    }
                }
        },
        40490: function(n, e, t) {
            t.d(e, {
                V: function() {
                    return s
                }
            });
            var r = t(53957),
                i = t(13980),
                o = t.n(i),
                a = t(72505),
                s = {
                    linkAs: o().string,
                    href: o().string,
                    id: o().string,
                    label: o().string,
                    trackAnalytics: o().shape(a.E),
                    variant: o().oneOf([r.xJ, r.Qh])
                }
        },
        38097: function(n, e, t) {
            t.d(e, {
                Lh: function() {
                    return c
                },
                St: function() {
                    return s
                },
                ou: function() {
                    return u
                }
            });
            var r = t(13980),
                i = t.n(r);
            i().arrayOf(i().shape({
                id: i().string,
                props: i().objectOf(i().any)
            }));
            var o = {
                    id: i().string,
                    referenceType: i().oneOf(["asset", "entry"])
                },
                a = {
                    contentType: i().string,
                    fields: i().objectOf(i().any),
                    id: i().string
                },
                s = i().shape(a),
                u = i().objectOf(s),
                c = i().shape(o)
        },
        42931: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return s
                },
                H: function() {
                    return a
                }
            });
            var r = t(13980),
                i = t.n(r),
                o = {
                    descriptor: i().string,
                    height: i().number,
                    width: i().number
                },
                a = {
                    xl: i().arrayOf(i().shape(o)),
                    lg: i().arrayOf(i().shape(o)),
                    md: i().arrayOf(i().shape(o)),
                    sm: i().arrayOf(i().shape(o)),
                    default: i().arrayOf(i().shape(o))
                },
                s = {
                    height: i().number,
                    id: i().oneOfType([i().string, i().number]),
                    sizes: i().string,
                    srcSet: i().shape(a),
                    title: i().string,
                    type: i().string,
                    url: i().string.isRequired,
                    width: i().number
                }
        },
        9796: function(n, e, t) {
            t.d(e, {
                EQ: function() {
                    return l
                },
                G_: function() {
                    return c
                }
            });
            var r = t(13980),
                i = t.n(r),
                o = t(40490),
                a = t(42931),
                s = t(72505),
                u = {
                    xs: i().number,
                    sm: i().number,
                    md: i().number,
                    lg: i().number,
                    xl: i().number
                },
                c = {
                    id: i().oneOfType([i().string, i().number]).isRequired,
                    subtitle: i().oneOfType([i().string, i().node]),
                    title: i().oneOfType([i().string, i().node]),
                    asPath: i().string,
                    href: i().oneOfType([i().string, i().shape({
                        pathname: i().string,
                        query: i().shape({})
                    })]),
                    image: i().shape(a.B),
                    icon: i().shape({
                        height: i().number,
                        id: i().oneOfType([i().string, i().number]),
                        sizes: i().string,
                        srcSet: i().shape(a.H),
                        title: i().string,
                        type: i().string,
                        url: i().string,
                        width: i().number,
                        name: i().string
                    }),
                    trackAnalytics: i().shape(s.E)
                },
                l = {
                    button: i().shape(o.V),
                    inlineContent: i().shape(o.V),
                    id: i().oneOfType([i().string, i().number]),
                    title: i().string,
                    items: i().arrayOf(i().shape(c)),
                    layout: i().string,
                    withOverlay: i().bool,
                    itemsPerBreakpoint: i().shape(u)
                }
        },
        40374: function(n, e, t) {
            t.d(e, {
                E: function() {
                    return u
                },
                P: function() {
                    return s
                }
            });
            var r = t(53957),
                i = t(13980),
                o = t.n(i),
                a = t(40490),
                s = {
                    dataAutomation: o().string,
                    id: o().string,
                    items: o().arrayOf(o().shape(a.V)),
                    linksListTitle: o().string,
                    titlePosition: o().oneOf([r.gO, r.nf]),
                    textColor: o().string,
                    bgColor: o().string,
                    type: o().string,
                    listCta: o().shape(a.V),
                    linkListLayout: o().oneOf([r.e_, r.ED]),
                    linksListShowNumbers: o().bool
                },
                u = {
                    dataAutomation: "",
                    titlePosition: r.gO,
                    items: [],
                    textColor: "#FFF",
                    bgColor: "#2C4AE0",
                    linkListLayout: r.e_,
                    linksListShowNumbers: !1
                }
        },
        97593: function(n, e, t) {
            t.d(e, {
                qR: function() {
                    return w
                },
                XF: function() {
                    return C
                }
            });
            var r = t(13980),
                i = t.n(r),
                o = t(38097),
                a = t(70865),
                s = t(96670),
                u = t(53957),
                c = t(39232),
                l = t(43526),
                d = i().shape({
                    assetClass: i().string.isRequired,
                    externalUrl: i().string.isRequired,
                    nativeDuration: i().number.isRequired
                }),
                p = {
                    artists: i().arrayOf(i().string),
                    beatsPerMinute: i().oneOfType([i().string, i().number]),
                    description: i().string,
                    nativeDuration: i().oneOfType([i().string, i().number]),
                    instruments: i().oneOfType([i().arrayOf(i().string), i().shape({
                        keywords: i().arrayOf(i().string),
                        title: i().string,
                        link: i().string
                    })]),
                    genres: i().oneOfType([i().arrayOf(i().string), i().shape({
                        keywords: i().arrayOf(i().string),
                        title: i().string,
                        link: i().string
                    })]),
                    moods: i().arrayOf(i().string),
                    sourceExternalId: i().string,
                    title: i().string,
                    previewMp3: i().string,
                    trackAssets: i().shape({
                        loops: i().arrayOf(d),
                        shorts: i().arrayOf(d),
                        stems: i().arrayOf(d)
                    })
                },
                g = i().shape((0, a.Z)({}, p)),
                m = i().arrayOf(i().shape({
                    key: i().string.isRequired,
                    docCount: i().number.isRequired
                }));
            i().shape({
                instruments: m,
                genres: m,
                moods: m
            });
            var f = t(20107),
                h = {
                    id: i().string,
                    assetId: i().string,
                    assetType: i().oneOf([c.k4, c.xF, c.Xy, c.pX]),
                    mediaItems: i().oneOfType([i().shape(l.R), g, i().shape(f.o)]),
                    contentType: i().oneOf([u.wF.assetItem])
                },
                v = t(40490),
                y = t(42931),
                b = t(40374),
                O = {
                    title: i().string,
                    type: i().string,
                    tracks: i().arrayOf(g)
                },
                _ = {
                    alignment: i().oneOf([u.AE, u.zo, u.O_]),
                    buttons: i().arrayOf(i().shape(v.V)),
                    backgroundColor: i().string,
                    image: i().shape(y.B),
                    isShortHero: i().bool,
                    subtitle: i().string,
                    title: i().string,
                    video: i().shape({
                        previewVideoUrls: i().shape({
                            mp4: i().string,
                            webm: i().string
                        })
                    }),
                    logo: i().shape({
                        url: i().string,
                        title: i().string,
                        size: i().number
                    }),
                    linksList: i().shape(b.P),
                    customAssetMetadata: i().shape(h),
                    showSubtitle: i().bool,
                    showTitle: i().bool,
                    showIconMeta: i().bool,
                    containerHeight: i().string
                };
            i().arrayOf(i().shape(v.V)), i().string, i().shape(y.B), i().string, i().string, i().shape(h), (0, s.Z)((0, a.Z)({}, _, O), {
                button: i().shape(v.V),
                heroSecondaryCta: null
            });
            var x = t(9796),
                T = {
                    ogImage: i().shape({
                        url: i().string,
                        width: i().number,
                        height: i().number,
                        alt: i().string
                    }),
                    ogTitle: i().string.isRequired,
                    ogDescription: i().string
                };
            i().shape(T).isRequired, i().shape(_).isRequired, i().arrayOf(i().shape(x.EQ)).isRequired;
            var C = {
                    TOP_NAV_HIDE: "No Top Navigation",
                    TOP_NAV_OVERLAY: "Overlay",
                    TOP_NAV_SEARCH: "Top Navigation + Search Bar",
                    TOP_NAV_UTILITY: "Top Navigation + Utility Bar",
                    TOP_NAV_SEARCH_OVERLAY: "Top Navigation + Search Bar Overlaid",
                    TOP_NAV_DEVELOPERS: "Top Navigation developers"
                },
                k = {
                    SPACING_NONE: "None",
                    SPACING_SMALL: "Small",
                    SPACING_MEDIUM: "Medium",
                    SPACING_LARGE: "Large"
                };
            i().arrayOf(i().shape({
                title: i().string,
                url: i().string
            })), i().string, o.ou, i().string, o.St, i().arrayOf(o.St), i().string, o.St, i().bool, i().oneOf(Object.values(C)), i().bool, i().string, i().string, i().oneOf(Object.keys(k).map(function(n) {
                return k[n]
            }));
            var w = {
                breadcrumbs: [],
                canonicalUrl: void 0,
                entries: void 0,
                legalText: void 0,
                metadata: {},
                modules: void 0,
                primaryHero: {},
                shouldIndex: void 0,
                topNavigationType: void 0,
                showTopNavigation: void 0,
                title: void 0,
                url: void 0,
                spacingModule: void 0
            }
        },
        43526: function(n, e, t) {
            t.d(e, {
                R: function() {
                    return s
                }
            });
            var r = t(13980),
                i = t.n(r),
                o = {
                    format: i().string,
                    dpi: i().number,
                    name: i().string,
                    width: i().number,
                    height: i().number,
                    display_name: i().string,
                    size_in_bytes: i().number,
                    human_readable_size: i().string,
                    width_in: i().string,
                    height_in: i().string,
                    width_cm: i().string,
                    height_cm: i().string
                },
                a = {
                    src: i().string,
                    width: i().number,
                    height: i().number
                },
                s = {
                    alt: i().string,
                    aspect: i().number,
                    categories: i().arrayOf(i().shape({
                        id: i().oneOfType([i().string, i().number]),
                        type: i().string,
                        name: i().string
                    })),
                    channels: i().arrayOf(i().string),
                    contentTier: i().number,
                    contributor: i().shape({
                        id: i().string,
                        publicInformation: i().shape({}),
                        type: i().string
                    }),
                    description: i().string,
                    descriptionLanguageMap: i().shape({
                        en: i().string
                    }),
                    displays: i().shape({
                        "260nw": i().shape(a),
                        "600w": i().shape(a),
                        "1500w": i().shape(a)
                    }),
                    hasModelRelease: i().bool,
                    hasPropertyRelease: i().bool,
                    height: i().number,
                    id: i().oneOfType([i().string, i().number]),
                    imageScores: i().shape({
                        id: i().string,
                        type: i().string
                    }),
                    imageType: i().string,
                    isEditorial: i().oneOfType([i().bool, i().number]),
                    keywords: i().arrayOf(i().string),
                    link: i().string,
                    meta: i().shape({
                        trackingId: i().string
                    }),
                    modelReleaseInfo: i().string,
                    releases: i().arrayOf(i().number),
                    sizes: i().shape({
                        vectorEps: i().shape(o),
                        mediumJpg: i().shape(o),
                        hugeTiff: i().shape(o),
                        smallJpg: i().shape(o),
                        hugeJpg: i().shape(o)
                    }),
                    src: i().string,
                    status: i().string,
                    title: i().string,
                    type: i().string,
                    width: i().number
                }
        },
        72505: function(n, e, t) {
            t.d(e, {
                E: function() {
                    return o
                }
            });
            var r = t(13980),
                i = t.n(r),
                o = {
                    label: i().string,
                    section: i().string
                }
        },
        20107: function(n, e, t) {
            t.d(e, {
                o: function() {
                    return o
                }
            });
            var r = t(13980),
                i = t.n(r);
            i().string, i().string, i().number, i().number, i().string, i().number, i().string, i().string, i().string;
            var o = {
                aspectRatio: i().string,
                contributorId: i().string,
                contributorName: i().string,
                contributorPhoto: i().string,
                contributorDetailsUrl: i().shape({
                    type: i().string,
                    payload: i().shape({
                        id: i().string
                    })
                }),
                description: i().string,
                duration: i().oneOfType([i().string, i().number]),
                id: i().string,
                isEditorial: i().oneOfType([i().bool, i().number]),
                keywords: i().arrayOf(i().string),
                licenseType: i().oneOf(["editorial", "model", "standard"]),
                meta: i().shape({
                    resolution: i().string,
                    name: i().string,
                    trackingId: i().string
                }),
                mp4Url: i().string,
                poster: i().string,
                webmUrl: i().string
            }
        },
        24114: function(n, e, t) {
            t.d(e, {
                Q: function() {
                    return g
                }
            });
            var r = t(87394),
                i = t(39232),
                o = t(44297),
                a = t(42448),
                s = t(85208),
                u = t(31556),
                c = function(n) {
                    var e = n.isVector,
                        t = n.isIllustration;
                    return e ? i.ox : t ? i.X2 : i.pV
                },
                l = function(n) {
                    var e = n.link,
                        t = (0, r.Z)(e.split("/"), 3),
                        i = t[1],
                        o = t[2];
                    return {
                        imageType: i,
                        title: o,
                        path: e,
                        hrefQuery: {
                            title: o
                        }
                    }
                },
                d = function(n) {
                    var e = n.permalink,
                        t = c({
                            isVector: n.isVector,
                            isIllustration: n.isIllustration
                        }),
                        o = (0, r.Z)(e.split("/"), 3),
                        a = o[1],
                        s = o[2],
                        u = (0, r.Z)(a.split("-"), 2)[1],
                        l = "".concat(i.k4, "-").concat(t),
                        d = "".concat(s, "-").concat(u);
                    return {
                        imageType: l,
                        title: d,
                        path: "/".concat(l, "/").concat(d)
                    }
                },
                p = function(n) {
                    var e = n.id,
                        t = n.description,
                        r = (0, a.l)({
                            description: t
                        }),
                        o = "/".concat(i.gP, "/").concat(i.k4, "-").concat(i.gP, "/").concat(r, "-").concat(e);
                    return [o, o]
                },
                g = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = n.link,
                        t = n.permalink,
                        r = n.isIllustration,
                        a = n.isVector,
                        c = n.id,
                        g = n.description;
                    if (n.type === i.zo) return [e, e];
                    if ((0, o.EK)({
                            id: c
                        })) return p({
                        id: c,
                        description: g
                    });
                    if (!e && !t) return [u.I$[s.Sd], u.I$[s.Sd]];
                    var m = (t ? d({
                        permalink: t,
                        isVector: a,
                        isIllustration: r
                    }) : l({
                        link: e
                    })).path;
                    return [m, m]
                }
        },
        42448: function(n, e, t) {
            t.d(e, {
                l: function() {
                    return c
                }
            });
            var r = t(87394),
                i = t(38398),
                o = t(95324),
                a = /\w\.\w/,
                s = function(n) {
                    return n.indexOf("?") >= 0
                },
                u = function(n) {
                    var e = n;
                    if (a.test(n)) {
                        var t = n.indexOf("://") > 0 ? n : "noop://".concat(n),
                            o = (0, i.parse)(t);
                        o.hostname && (e = (0, r.Z)(o.hostname.split(".").slice(-2), 1)[0])
                    }
                    return e
                },
                c = function(n) {
                    var e = n.description,
                        t = n.locale,
                        r = void 0 === t ? "en" : t,
                        i = n.slugLength,
                        c = n.spaceChar,
                        l = n.removeStopWords,
                        d = void 0 === l || l,
                        p = "".concat(void 0 === e ? "" : e).split(/\s/).filter(function(n) {
                            var e, t;
                            return e = n, t = d, e && (!t || !o.O.en[e.toLowerCase()]) && (!s(e) || s(e) && a.test(e))
                        }).map(function(n) {
                            return u(n).toLocaleLowerCase(r).replace(/[.,\/#!$%\^&\*;:{}=\`~()]/g, "").trim()
                        });
                    return Array.from(new Set(p)).slice(0, void 0 === i ? 7 : i).join(void 0 === c ? "-" : c)
                }
        }
    }
]);
//# sourceMappingURL=83118-33308676da239c89.js.map