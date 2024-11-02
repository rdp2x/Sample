(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19900], {
        45567: function(e, n, t) {
            "use strict";
            t.d(n, {
                p: function() {
                    return h
                }
            });
            var i = t(47842),
                r = t(70865),
                a = t(96670),
                c = t(52322),
                o = t(53957),
                s = t(2784),
                l = t(8740),
                u = t(83081),
                d = t(93212),
                m = function(e) {
                    var n = e.cmsModule,
                        t = e.customComponentMap,
                        i = e.componentProps,
                        a = n.contentType,
                        o = t[a] || d.P[a],
                        s = i[a] || {};
                    return o ? (0, c.jsx)(o, (0, r.Z)({}, n, s)) : null
                };
            m.defaultProps = {
                cmsModule: {},
                customComponentMap: {},
                componentProps: {}
            };
            var p = function(e) {
                    var n = e.children;
                    return (0, c.jsx)(c.Fragment, {
                        children: n
                    })
                },
                f = (0, l.ZL)()(function(e, n) {
                    var t, c, o = e.breakpoints,
                        s = e.tokens.spacing,
                        l = n.lastChildSpacing,
                        u = n.nthChild;
                    return {
                        withoutSpacing: {
                            padding: "0 !important"
                        },
                        verticalSpacing: {
                            "&&&>*": (0, a.Z)((0, r.Z)((t = {
                                padding: "".concat(s.m, " ").concat(s.base)
                            }, (0, i.Z)(t, o.up("sm"), {
                                padding: "".concat(s.l, " ").concat(s.m)
                            }), (0, i.Z)(t, o.up("md"), {
                                padding: "".concat(s.l, " ").concat(s.m)
                            }), (0, i.Z)(t, o.up("lg"), {
                                padding: "".concat(s.xl, " ").concat(s.m)
                            }), t), u ? (0, i.Z)({}, "&:nth-of-type(".concat(u, ")"), (c = {}, (0, i.Z)(c, o.up("md"), {
                                padding: "".concat(s.l, " ").concat(s.m)
                            }), (0, i.Z)(c, o.up("lg"), {
                                padding: "".concat(s.xl, " ").concat(s.m)
                            }), c)) : {}), {
                                "&:last-child": {
                                    marginBottom: l ? "-".concat(s.xl) : 0
                                }
                            })
                        }
                    }
                }),
                h = function(e) {
                    var n = e.cmsModules,
                        t = e.customComponentMap,
                        l = e.componentProps,
                        d = e.CustomContainerComponent,
                        p = e.CustomContainerComponentDarkTheme,
                        h = e.containerProps,
                        v = e.withVerticalSpacing,
                        g = e.lastChildSpacing,
                        k = e.isContentfulLP,
                        b = e.entries,
                        x = e.isFullWidth,
                        y = e.isAlternatingBackground,
                        _ = e.uniformModuleSpacing,
                        C = e.classesProps,
                        L = f({
                            lastChildSpacing: g,
                            nthChild: h.nthChild
                        }),
                        Z = L.classes,
                        w = L.cx,
                        P = (0, s.useMemo)(function() {
                            var e;
                            return e = {}, (0, i.Z)(e, o.Ji, p), (0, i.Z)(e, o.VH, p), (0, i.Z)(e, o.sn, d), e
                        }, [p, d]);
                    return k ? (0, c.jsx)(c.Fragment, {
                        children: null == n ? void 0 : n.map(function() {
                            var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = arguments.length > 1 ? arguments[1] : void 0;
                            return (0, c.jsx)(u.p, {
                                id: null == n ? void 0 : n.id,
                                contentType: null == b ? void 0 : null === (e = b[null == n ? void 0 : n.id]) || void 0 === e ? void 0 : e.contentType,
                                customComponentMap: t,
                                componentProps: l,
                                isContentfulLP: !0,
                                cmsBgContainerProps: {
                                    index: y ? i : 0,
                                    isFullWidth: x,
                                    uniformModuleSpacing: _
                                },
                                maxWidth: !1
                            }, (null == n ? void 0 : n.id) ? "".concat(null == n ? void 0 : n.id, "-").concat(i) : i)
                        })
                    }) : (0, c.jsx)("div", {
                        className: w((0, i.Z)({}, Z.verticalSpacing, v), C.modulesWrapper),
                        children: null == n ? void 0 : n.map(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0,
                                i = P[null == e ? void 0 : e.themeMode] || d,
                                s = ((null == l ? void 0 : l[null == e ? void 0 : e.contentType]) || {}).className;
                            return (0, c.jsx)(i, (0, a.Z)((0, r.Z)({
                                index: n,
                                isBlackMode: (null == e ? void 0 : e.themeMode) === o.Ji
                            }, s && {
                                className: Z[s]
                            }, h), {
                                children: (0, c.jsx)(m, {
                                    cmsModule: e,
                                    customComponentMap: t,
                                    componentProps: l
                                })
                            }), (null == e ? void 0 : e.id) ? "".concat(null == e ? void 0 : e.id, "-").concat(n) : n)
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
                uniformModuleSpacing: o.ps,
                classesProps: {},
                afterSSRModulesRef: null
            }
        },
        36232: function(e, n, t) {
            "use strict";
            t.d(n, {
                I: function() {
                    return v
                }
            });
            var i = t(47842),
                r = t(70865),
                a = t(96670),
                c = t(52322),
                o = t(96976),
                s = t(53957),
                l = t(91609),
                u = t(9823),
                d = t(73469),
                m = t(8740),
                p = t(41519),
                f = (0, m.ZL)()(function(e, n) {
                    var t = e.breakpoints,
                        c = e.tokens.spacing,
                        o = n.backgroundColor,
                        l = n.isHero,
                        u = n.isFullWidth,
                        d = n.uniformModuleSpacing,
                        m = n.respectLastItem,
                        p = function(e, n) {
                            return (0, r.Z)({
                                padding: "".concat(e, " ").concat(n)
                            }, m && {
                                "&:last-of-type": {
                                    padding: "".concat(e, " ").concat(n, " 0 ").concat(n)
                                }
                            })
                        };
                    return {
                        container: (0, r.Z)((0, a.Z)((0, r.Z)({}, !l && !u && {
                            "&&&>*": {
                                maxWidth: "1280px",
                                margin: "auto"
                            }
                        }, !l && u && {
                            "&&&>*": {
                                maxWidth: "100%",
                                margin: "auto"
                            }
                        }), {
                            backgroundColor: o
                        }), function() {
                            var e, n, o;
                            switch (d) {
                                case s.dv:
                                    return (0, a.Z)((0, r.Z)({}, p(c.s, c.base)), (e = {}, (0, i.Z)(e, t.up("sm"), (0, r.Z)({}, p(c.s, c.m))), (0, i.Z)(e, t.up("md"), (0, r.Z)({}, p(c.base, c.m))), e));
                                case s.ps:
                                    return (0, a.Z)((0, r.Z)({}, p(c.base, c.base)), (n = {}, (0, i.Z)(n, t.up("sm"), (0, r.Z)({}, p(c.base, c.m))), (0, i.Z)(n, t.up("md"), (0, r.Z)({}, p(c.m, c.m))), n));
                                case s.ON:
                                    return (0, a.Z)((0, r.Z)({}, p(c.m, c.base)), (o = {}, (0, i.Z)(o, t.up("sm"), (0, r.Z)({}, p(c.l, c.m))), (0, i.Z)(o, t.up("md"), (0, r.Z)({}, p(c.xl, c.m))), o));
                                default:
                                    return (0, i.Z)({
                                        padding: "0 ".concat(c.base)
                                    }, t.up("sm"), {
                                        padding: "0 ".concat(c.m)
                                    })
                            }
                        }())
                    }
                }),
                h = function(e) {
                    var n = e.index,
                        t = e.isBlackMode,
                        i = e.theme;
                    return t ? i.palette.common.black : i.themeName === l.iA ? i.palette.background.default : n % 2 == 0 ? i.palette.background.default : i.palette.skeleton
                },
                v = function(e) {
                    var n = e.children,
                        t = e.className,
                        i = e.cmsBgContainerProps,
                        r = i.index,
                        a = i.isFullWidth,
                        m = i.uniformModuleSpacing,
                        v = void 0 === m ? s.ps : m,
                        g = i.respectLastItem,
                        k = e.themeMode,
                        b = e.isHero,
                        x = (0, u.D)().themeMode,
                        y = (0, d.i)({
                            themeMode: k === s.Ji || k === s.VH || x === l.oc.DARK ? l.oc.DARK : l.oc.LIGHT
                        }).theme,
                        _ = h({
                            index: r,
                            isBlackMode: k === s.Ji,
                            theme: y
                        }),
                        C = f({
                            backgroundColor: _,
                            isHero: b,
                            isFullWidth: a,
                            uniformModuleSpacing: v,
                            respectLastItem: void 0 === g || g
                        }),
                        L = C.classes,
                        Z = C.cx;
                    return "number" != typeof r ? (0, c.jsx)(c.Fragment, {
                        children: n
                    }) : (0, c.jsx)(o.Z, {
                        theme: y,
                        children: (0, c.jsx)(p.j.Provider, {
                            value: _,
                            children: (0, c.jsx)("div", {
                                className: Z(L.container, t),
                                children: n
                            })
                        })
                    })
                };
            v.defaultProps = {
                themeMode: s.sn,
                className: "",
                isHero: !1,
                cmsBgContainerProps: {}
            }
        },
        56398: function(e, n, t) {
            "use strict";
            t.d(n, {
                B9: function() {
                    return d
                },
                C5: function() {
                    return b
                },
                D7: function() {
                    return C
                },
                Eq: function() {
                    return c
                },
                Hj: function() {
                    return r
                },
                Lb: function() {
                    return g
                },
                M2: function() {
                    return a
                },
                QT: function() {
                    return k
                },
                QY: function() {
                    return m
                },
                T2: function() {
                    return _
                },
                Vg: function() {
                    return Z
                },
                WL: function() {
                    return l
                },
                Xp: function() {
                    return p
                },
                YR: function() {
                    return o
                },
                ZW: function() {
                    return y
                },
                de: function() {
                    return u
                },
                gK: function() {
                    return x
                },
                l9: function() {
                    return s
                },
                oD: function() {
                    return f
                },
                px: function() {
                    return h
                },
                wO: function() {
                    return v
                },
                xf: function() {
                    return L
                },
                xt: function() {
                    return i
                }
            });
            var i = "CARD_PAYMENT",
                r = "tex-7621",
                a = "credit_card",
                c = "sepa_direct_debit",
                o = "paypal",
                s = "products",
                l = "invoices",
                u = "sfx",
                d = "complimentary",
                m = "shutterstock_bill_payment",
                p = "NL",
                f = "za_vat",
                h = "vat",
                v = "tw",
                g = "ZAR",
                k = "TWD",
                b = "EUR",
                x = "music",
                y = "video",
                _ = "image",
                C = "elements",
                L = "sfx",
                Z = 28
        },
        75445: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return i
                }
            });
            var i = "USD"
        },
        21028: function(e, n, t) {
            "use strict";
            t.d(n, {
                $L: function() {
                    return a
                },
                QW: function() {
                    return o
                },
                hw: function() {
                    return c
                }
            });
            var i = t(52322),
                r = t(2784),
                a = (0, r.createContext)({}),
                c = function() {
                    return (0, r.useContext)(a)
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.value,
                        t = e.children;
                    return (0, i.jsx)(a.Provider, {
                        value: n,
                        children: t
                    })
                }
        },
        13591: function(e, n, t) {
            "use strict";
            t.d(n, {
                C5: function() {
                    return m
                },
                nk: function() {
                    return p
                }
            });
            var i, r = t(47842),
                a = t(14625),
                c = t(27739),
                o = "2_credit_pack",
                s = "5_credit_pack",
                l = "30_credit_pack",
                u = "125_credit_pack",
                d = "250_credit_pack",
                m = [o, s, l, u, d],
                p = "creditPack",
                f = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: c.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details_images_and_music"
                        }
                    }, {
                        name: c.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.dm,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }]
                };
            i = {}, (0, r.Z)(i, a.PU, f), (0, r.Z)(i, a.XC, {
                translations: {
                    title: "credit_packs_title",
                    caption: "on_demand_caption"
                },
                items: [{
                    name: s
                }, {
                    name: o
                }, {
                    name: l
                }]
            }), (0, r.Z)(i, a.NP, {
                translations: {
                    title: "enhanced_generic_legal_protections",
                    caption: "on_demand_caption"
                },
                items: [{
                    name: l
                }, {
                    name: u
                }, {
                    name: d
                }]
            })
        },
        49632: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                ExperimentSDAQ181: function() {
                    return R
                },
                SkeletonLoader: function() {
                    return F
                },
                experimentConfig: function() {
                    return E
                }
            });
            var i, r = t(52322),
                a = t(62021),
                c = t(70865),
                o = t(47842),
                s = t(96670),
                l = t(53957),
                u = t(45567),
                d = t(95299),
                m = t(16113),
                p = t(82182),
                f = t(2784),
                h = {
                    nthChild: p.Qs
                },
                v = {
                    titleVariant: "h3"
                },
                g = {
                    titleVariant: "h4"
                },
                k = function(e) {
                    var n = e.isUniversalHome,
                        t = e.assetFormatter,
                        i = e.homepageCmsModules,
                        a = e.modulesProps,
                        p = (0, f.useMemo)(function() {
                            var e;
                            return e = {}, (0, o.Z)(e, l.wF.carousel, v), (0, o.Z)(e, l.wF.imageLinks, g), (0, o.Z)(e, l.wF.tabTable, (0, s.Z)((0, c.Z)({}, v), {
                                showAssetTypeIcon: n,
                                assetFormatter: t
                            })), (0, o.Z)(e, l.wF.pricingComponent, {
                                className: "withoutSpacing"
                            }), e
                        }, [n, t]);
                    return (null == i ? void 0 : i.length) ? (0, r.jsx)(u.p, (0, c.Z)({
                        cmsModules: i,
                        CustomContainerComponent: d.H,
                        CustomContainerComponentDarkTheme: m.I,
                        containerProps: (0, c.Z)({}, h),
                        componentProps: p
                    }, a)) : null
                },
                b = function(e) {
                    var n = e.initialProps;
                    return (0, r.jsx)(k, (0, c.Z)({}, n))
                },
                x = t(88849),
                y = t(77149),
                _ = t(67550),
                C = t(62197),
                L = t(41075),
                Z = t(9390),
                w = t(66358),
                P = t(776),
                j = t(75),
                I = t(59877),
                A = (0, t(8740).ZL)()(function(e) {
                    var n = e.tokens,
                        t = n.spacing,
                        i = n.color,
                        r = n.lineHeight;
                    return {
                        blockContainer: {
                            margin: "auto"
                        },
                        item: {
                            padding: t.m
                        },
                        itemImage: {
                            borderRadius: "8px",
                            width: "100%"
                        },
                        itemText: {
                            fontSize: "1rem"
                        },
                        link: {
                            color: i.blue.azure,
                            ":hover": {
                                fontStyle: "underline"
                            }
                        },
                        itemTitle: {},
                        title: {
                            margin: "".concat(t.l, " auto"),
                            maxWidth: "960px",
                            fontWeight: "bolder",
                            fontStyle: "normal",
                            fontSize: "2.5rem",
                            lineHeight: r.m
                        }
                    }
                }),
                M = function(e) {
                    var n = e.t,
                        t = e.classes;
                    return [{
                        title: n("common:links_images"),
                        preview: "content_images",
                        previewAnalyticsLabel: "imagesThumbnail",
                        thumbnailLink: "/images",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "image_card_description",
                            namespace: j.P5d,
                            components: {
                                premiumImagesLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".images"),
                                    className: t.link,
                                    href: "/search?sort=random"
                                }),
                                photosLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".photos"),
                                    className: t.link,
                                    href: "/photos"
                                }),
                                vectorsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".vectors"),
                                    className: t.link,
                                    href: "/search?image_type=vector&sort=random"
                                }),
                                illustrationsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".illustrations"),
                                    className: t.link,
                                    href: "/search?image_type=illustration&sort=random"
                                })
                            }
                        })
                    }, {
                        title: n("common:video_asset_type"),
                        preview: "content_video",
                        previewAnalyticsLabel: "videosThumbnail",
                        thumbnailLink: "/video",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "video_card_description",
                            namespace: j.P5d,
                            components: {
                                videosLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".videos"),
                                    className: t.link,
                                    href: "/video/search?channel=select&sort=random"
                                }),
                                videoEffectsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".videoEffects"),
                                    className: t.link,
                                    href: "/video/elements"
                                })
                            }
                        })
                    }, {
                        title: n("music"),
                        preview: "content_music",
                        previewAnalyticsLabel: "musicThumbnail",
                        thumbnailLink: "/music",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "music_card_description",
                            namespace: j.P5d,
                            components: {
                                musicLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".music"),
                                    className: t.link,
                                    href: "/music/search"
                                }),
                                premiumBeatLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".premiumBeatExclusiveLibrary"),
                                    className: t.link,
                                    href: "/music/search?contentTier=onlyPremiumBeat"
                                })
                            }
                        })
                    }, {
                        title: n("sound_effects"),
                        preview: "content_sfx",
                        previewAnalyticsLabel: "sfxThumbnail",
                        thumbnailLink: "/sound-effects",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "sfx_card_description",
                            namespace: j.P5d,
                            components: {
                                sfxLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".sfx"),
                                    className: t.link,
                                    href: "/sound-effects"
                                })
                            }
                        })
                    }, {
                        title: n("ai_generated_images"),
                        preview: "content_ai_generated",
                        previewAnalyticsLabel: "aiThumbnail",
                        thumbnailLink: "/ai-image-generator",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "ai_image_card_description",
                            namespace: j.P5d,
                            components: {
                                aiGeneratedImageLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".aiGeneratedImageLibrary"),
                                    className: t.link,
                                    href: "/search?image_type=generated"
                                }),
                                customVisualEffectsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".aiCreateCustomVisualsInstantly"),
                                    className: t.link,
                                    href: "/ai-image-generator"
                                })
                            }
                        })
                    }, {
                        title: n("common:links_editorial"),
                        preview: "content_editorial",
                        previewAnalyticsLabel: "editorialThumbnail",
                        thumbnailLink: "/editorial",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "editorial_card_description",
                            namespace: j.P5d,
                            components: {
                                newsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".news"),
                                    className: t.link,
                                    href: "/editorial/news"
                                }),
                                sportsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".sports"),
                                    className: t.link,
                                    href: "/editorial/sports"
                                }),
                                entertainmentLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".entertainment"),
                                    className: t.link,
                                    href: "/editorial/entertainment"
                                }),
                                archivalPhotosLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".archivalPhotos"),
                                    className: t.link,
                                    href: "/editorial/search?category=Archival"
                                }),
                                editorialVideoLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".editorialVideos"),
                                    className: t.link,
                                    href: "/editorial/video/search?sort=popular"
                                })
                            }
                        })
                    }, {
                        title: n("3d_models"),
                        preview: "content_3d_model",
                        previewAnalyticsLabel: "3dThumbnail",
                        thumbnailLink: "https://www.turbosquid.com",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "3d_card_description",
                            namespace: j.P5d,
                            components: {
                                turboSquidLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".turboSquid"),
                                    className: t.link,
                                    href: "https://www.turbosquid.com"
                                }),
                                pixelSquidLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".pixelSquid"),
                                    className: t.link,
                                    href: "https://www.pixelsquid.com"
                                })
                            }
                        })
                    }, {
                        title: n("common:links_templates"),
                        preview: "content_templates",
                        previewAnalyticsLabel: "templatesThumbnail",
                        thumbnailLink: "/templates",
                        description: (0, r.jsx)(I.cC, {
                            t: n,
                            i18nKey: "templates_card_description",
                            namespace: j.P5d,
                            components: {
                                templatesSocialMediaLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".templatesSocialMedia"),
                                    className: t.link,
                                    href: "/templates/instagram"
                                }),
                                templatesBusinessLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".templatesBusiness"),
                                    className: t.link,
                                    href: "/templates/flyers-infographics"
                                }),
                                templatesMarketingLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".templatesMarketing"),
                                    className: t.link,
                                    href: "/templates/ads"
                                }),
                                templatesCardsAndInvitationsLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".templatesCardsAndInvitations"),
                                    className: t.link,
                                    href: "/templates/cards"
                                }),
                                templatesPersonalLink: (0, r.jsx)(Z.r, {
                                    underline: !0,
                                    clickAnalyticsLabel: "".concat(w.Ieh, ".templatesPersonal"),
                                    className: t.link,
                                    href: "/templates/calendars"
                                })
                            }
                        })
                    }]
                },
                N = {
                    nthChild: p.Qs
                },
                T = {
                    titleVariant: "h3"
                },
                S = {
                    titleVariant: "h4"
                },
                E = {
                    flagID: "sdaq-181-lo-uhp-sstk-content-experiment",
                    id: "SDAQ-181",
                    name: "LO UHP SSTK content experiment",
                    treatments: (i = {}, (0, o.Z)(i, x.NM, function(e) {
                        var n = e.experiment,
                            t = e.initialProps;
                        return (0, f.useEffect)(function() {
                            n.recordImpression()
                        }, []), (0, r.jsx)(b, {
                            initialProps: t
                        })
                    }), (0, o.Z)(i, x.vG, function(e) {
                        var n = e.experiment,
                            t = e.initialProps,
                            i = t.modulesProps,
                            a = t.homepageCmsModules,
                            p = t.isUniversalHome,
                            h = t.assetFormatter;
                        (0, f.useEffect)(function() {
                            n.recordImpression()
                        }, []);
                        var v = (0, I.$G)(j.P5d).t,
                            g = (0, f.useMemo)(function() {
                                var e;
                                return e = {}, (0, o.Z)(e, l.wF.carousel, T), (0, o.Z)(e, l.wF.imageLinks, S), (0, o.Z)(e, l.wF.tabTable, (0, s.Z)((0, c.Z)({}, T), {
                                    showAssetTypeIcon: p,
                                    assetFormatter: h
                                })), e
                            }, [p, h]),
                            k = A().classes,
                            b = M({
                                t: v,
                                classes: k
                            }),
                            x = (0, y.Z)(a).slice(1);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(P.Mp, {
                                value: w.Ieh,
                                children: (0, r.jsxs)(_.Z, {
                                    className: k.blockContainer,
                                    maxWidth: "lg",
                                    display: "flex",
                                    flexDirection: "column",
                                    "data-automation": "UHPContent_experiment_181",
                                    children: [(0, r.jsx)(C.Z, {
                                        className: k.title,
                                        component: "h2",
                                        align: "center",
                                        children: v("content_block_title")
                                    }), (0, r.jsx)(L.ZP, {
                                        container: !0,
                                        children: b.map(function(e) {
                                            return (0, r.jsxs)(L.ZP, {
                                                className: k.item,
                                                item: !0,
                                                xs: 12,
                                                sm: 6,
                                                md: 3,
                                                lg: 3,
                                                children: [(0, r.jsx)(Z.r, {
                                                    clickAnalyticsLabel: "".concat(w.Ieh, ".").concat(e.previewAnalyticsLabel),
                                                    href: e.thumbnailLink,
                                                    children: (0, r.jsx)("img", {
                                                        className: k.itemImage,
                                                        alt: e.title,
                                                        src: "/assets/images/sdaq-181/".concat(e.preview, ".jpg")
                                                    })
                                                }), (0, r.jsx)(C.Z, {
                                                    className: k.itemTitle,
                                                    component: "h5",
                                                    variant: "h5",
                                                    children: e.title
                                                }), (0, r.jsx)(C.Z, {
                                                    className: k.itemText,
                                                    children: e.description
                                                })]
                                            }, e.title)
                                        })
                                    })]
                                })
                            }), (0, r.jsx)(u.p, (0, c.Z)({
                                cmsModules: x,
                                CustomContainerComponent: d.H,
                                CustomContainerComponentDarkTheme: m.I,
                                containerProps: (0, c.Z)({}, N),
                                componentProps: g
                            }, i))]
                        })
                    }), i)
                },
                F = function() {
                    return (0, r.jsx)(r.Fragment, {})
                },
                R = function(e) {
                    return (0, r.jsx)(a.K, {
                        config: E,
                        initialProps: e,
                        Portal: b,
                        SkeletonLoader: F
                    })
                }
        },
        87414: function(e, n, t) {
            "use strict";
            t.d(n, {
                $A: function() {
                    return k
                },
                Dg: function() {
                    return h
                },
                Jr: function() {
                    return g
                },
                Kg: function() {
                    return v
                },
                OG: function() {
                    return p
                },
                XD: function() {
                    return x
                },
                Yc: function() {
                    return l
                },
                Yy: function() {
                    return m
                },
                g7: function() {
                    return f
                },
                p_: function() {
                    return b
                }
            });
            var i = t(50930),
                r = t(27739),
                a = t(56495),
                c = t(75445),
                o = t(60591),
                s = t(13591),
                l = function(e) {
                    return e.product.repeatInterval === o.MQ
                },
                u = {
                    CHF: "EUR",
                    DKK: "EUR",
                    NOK: "EUR",
                    SEK: "EUR"
                },
                d = function(e) {
                    var n = e.currency,
                        t = e.prices,
                        i = u[n];
                    return t[i] ? i : c.a
                },
                m = function(e) {
                    var n = e.prices,
                        t = void 0 === n ? {} : n,
                        i = e.localeCurrency;
                    return t[i.toLowerCase()] ? i.toUpperCase() : d({
                        currency: i,
                        prices: t
                    })
                },
                p = function(e) {
                    var n = e.product;
                    return (void 0 === n ? {} : n).activityTracking === r.bk
                },
                f = function(e) {
                    var n = e.product,
                        t = void 0 === n ? {} : n,
                        i = t.allotmentCredits,
                        r = t.downloadCredits;
                    return i && !r
                },
                h = function(e) {
                    var n = e.product,
                        t = (void 0 === n ? {} : n).name;
                    return s.C5.includes(t)
                },
                v = function(e) {
                    var n, t = e.paymentPlans,
                        i = e.licenseType,
                        a = e.selectedPaymentPlan;
                    return (null == a ? void 0 : a.cost) ? a.cost : null === (n = (void 0 === t ? [] : t).find(function(e) {
                        var n = e.activityTracking,
                            t = e.isEligibleForDownload,
                            a = e.license;
                        return a === i && n === r.bk && (t || !t && a === o.ur)
                    })) || void 0 === n ? void 0 : n.cost
                },
                g = function(e) {
                    var n = e.productName;
                    return (0, i.Z)(a.LY).concat([a.i3, a.Y_]).includes(void 0 === n ? "" : n)
                },
                k = function(e, n) {
                    return null == e ? void 0 : e.find(function(e) {
                        return e.name === n
                    })
                },
                b = function(e) {
                    var n = e.products,
                        t = e.productsToReplace,
                        i = new Map((void 0 === t ? [] : t).map(function(e) {
                            return [e.name, e]
                        }));
                    return (void 0 === n ? [] : n).map(function(e) {
                        return i.get(e.name) || e
                    })
                },
                x = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).name;
                    return o.$I.includes(e)
                }
        },
        22921: function(e, n, t) {
            "use strict";
            t.d(n, {
                P: function() {
                    return p
                },
                o: function() {
                    return m
                }
            });
            var i = t(47842),
                r = t(39232),
                a = t(24861),
                c = t(65532),
                o = t(75),
                s = t(59877),
                l = t(2784),
                u = function(e) {
                    var n = e.t,
                        t = e.price;
                    return {
                        compCredits: n("comp_credits", {
                            PRICE: t
                        }),
                        credit: n(["1", 1].includes(t) ? "credit" : "credits", {
                            PRICE: t
                        }),
                        licenseCredits: n("license_credits", {
                            PRICE: t
                        }),
                        unavailable: n("ent:unavailable"),
                        unlimited: n("ent:unlimited")
                    }
                },
                d = function(e) {
                    var n, t = e.labels,
                        r = void 0 === t ? {} : t;
                    return n = {}, (0, i.Z)(n, a.vh, r.credit), (0, i.Z)(n, a.un, r.compCredits), (0, i.Z)(n, a.eM, r.licenseCredits), n
                },
                m = function() {
                    var e = (0, c.PE)(),
                        n = e.fullLocale,
                        t = e.currencyData,
                        i = (void 0 === t ? {} : t).currency,
                        m = void 0 === i ? "USD" : i,
                        p = (0, s.$G)(o.Pkf).t;
                    return (0, l.useCallback)(function(e) {
                        var t = e.price,
                            i = e.localeCurrencyOverride,
                            c = e.priceType,
                            o = void 0 === c ? a.Br : c,
                            s = e.fixedFractionDigits,
                            l = u({
                                t: p,
                                price: t
                            });
                        if (t === r.nZ) return l.unavailable;
                        if (t === r.q9) return l.unlimited;
                        var f = d({
                                labels: l
                            }),
                            h = null == f ? void 0 : f[o];
                        return h || new Intl.NumberFormat(n, {
                            style: "currency",
                            currency: (void 0 === i ? "" : i) || m,
                            minimumFractionDigits: null != s ? s : t % 1 == 0 ? 0 : 2
                        }).format(t)
                    }, [m, n, p])
                },
                p = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Br;
                    return m()({
                        price: e,
                        localeCurrencyOverride: n,
                        priceType: t
                    })
                }
        },
        68262: function(e, n, t) {
            "use strict";
            var i = t(23586);

            function r() {}

            function a() {}
            a.resetWarningCache = r, e.exports = function() {
                function e(e, n, t, r, a, c) {
                    if (c !== i) {
                        var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation", o
                    }
                }

                function n() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: n,
                    element: e,
                    elementType: e,
                    instanceOf: n,
                    node: e,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: a,
                    resetWarningCache: r
                };
                return t.PropTypes = t, t
            }
        },
        13980: function(e, n, t) {
            e.exports = t(68262)()
        },
        23586: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        77149: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return o
                }
            });
            var i = t(18770),
                r = t(33579),
                a = t(93520),
                c = t(15459);

            function o(e) {
                return (0, i.Z)(e) || (0, r.Z)(e) || (0, c.Z)(e) || (0, a.Z)()
            }
        },
        30299: function(e, n, t) {
            "use strict";
            let i;
            t.d(n, {
                YD: function() {
                    return s
                }
            });
            var r = t(2784);
            let a = new Map,
                c = new WeakMap,
                o = 0;

            function s({
                threshold: e,
                delay: n,
                trackVisibility: t,
                rootMargin: s,
                root: l,
                triggerOnce: u,
                skip: d,
                initialInView: m,
                fallbackInView: p,
                onChange: f
            } = {}) {
                var h;
                let [v, g] = r.useState(null), k = r.useRef(), [b, x] = r.useState({
                    inView: !!m,
                    entry: void 0
                });
                k.current = f, r.useEffect(() => {
                    let r;
                    if (!d && v) return r = function(e, n, t = {}, r = i) {
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let i = e.getBoundingClientRect();
                            return n(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof t.threshold ? t.threshold : 0,
                                time: 0,
                                boundingClientRect: i,
                                intersectionRect: i,
                                rootBounds: i
                            }), () => {}
                        }
                        let {
                            id: s,
                            observer: l,
                            elements: u
                        } = function(e) {
                            let n = Object.keys(e).sort().filter(n => void 0 !== e[n]).map(n => {
                                    var t;
                                    return `${n}_${"root"===n?(t=e.root)?(c.has(t)||(o+=1,c.set(t,o.toString())),c.get(t)):"0":e[n]}`
                                }).toString(),
                                t = a.get(n);
                            if (!t) {
                                let i;
                                let r = new Map,
                                    c = new IntersectionObserver(n => {
                                        n.forEach(n => {
                                            var t;
                                            let a = n.isIntersecting && i.some(e => n.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === n.isVisible && (n.isVisible = a), null == (t = r.get(n.target)) || t.forEach(e => {
                                                e(a, n)
                                            })
                                        })
                                    }, e);
                                i = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), t = {
                                    id: n,
                                    observer: c,
                                    elements: r
                                }, a.set(n, t)
                            }
                            return t
                        }(t), d = u.get(e) || [];
                        return u.has(e) || u.set(e, d), d.push(n), l.observe(e),
                            function() {
                                d.splice(d.indexOf(n), 1), 0 === d.length && (u.delete(e), l.unobserve(e)), 0 === u.size && (l.disconnect(), a.delete(s))
                            }
                    }(v, (e, n) => {
                        x({
                            inView: e,
                            entry: n
                        }), k.current && k.current(e, n), n.isIntersecting && u && r && (r(), r = void 0)
                    }, {
                        root: l,
                        rootMargin: s,
                        threshold: e,
                        trackVisibility: t,
                        delay: n
                    }, p), () => {
                        r && r()
                    }
                }, [Array.isArray(e) ? e.toString() : e, v, l, s, u, d, t, p, n]);
                let y = null == (h = b.entry) ? void 0 : h.target;
                r.useEffect(() => {
                    v || !y || u || d || x({
                        inView: !!m,
                        entry: void 0
                    })
                }, [v, y, u, d, m]);
                let _ = [g, b.inView, b.entry];
                return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
            }
        }
    }
]);
//# sourceMappingURL=ExperimentSDAQ181.9171754a2439c88a.js.map