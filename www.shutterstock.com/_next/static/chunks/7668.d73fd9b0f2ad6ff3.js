"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7668, 56878], {
        68245: function(e, n, t) {
            t.d(n, {
                e: function() {
                    return a
                }
            });
            var i = t(70865),
                r = t(38398),
                a = function(e) {
                    var n = e.urlParams,
                        t = e.queryParams,
                        a = "/bundle/".concat((void 0 === n ? {} : n).filename),
                        o = (0, i.Z)({}, void 0 === t ? {} : t);
                    return {
                        url: a,
                        defaultParams: o,
                        formattedUrl: (0, r.format)({
                            pathname: a,
                            query: o
                        })
                    }
                }
        },
        14625: function(e, n, t) {
            t.d(n, {
                GN: function() {
                    return y
                },
                K9: function() {
                    return _
                },
                NP: function() {
                    return l
                },
                PU: function() {
                    return u
                },
                Ui: function() {
                    return f
                },
                Up: function() {
                    return g
                },
                XC: function() {
                    return d
                },
                Xh: function() {
                    return h
                },
                Y4: function() {
                    return b
                },
                l_: function() {
                    return w
                },
                wZ: function() {
                    return Z
                }
            });
            var i, r, a = t(47842),
                o = t(70865),
                s = t(96670),
                c = t(27739),
                u = "subscription",
                d = "onDemand",
                l = "enhanced",
                p = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: c.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
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
                },
                m = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer", "activation-drawers:sub_product_sub_disclaimer"]
                    },
                    items: [{
                        name: c.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.cz,
                        translations: {
                            price: "activation-drawers:price_per_month"
                        }
                    }, {
                        name: c.dF,
                        translations: {
                            price: "activation-drawers:price_per_month"
                        }
                    }]
                },
                _ = {
                    translations: {
                        title: "choose_a_plan",
                        caption: ["activation-drawers:sub_product_sub_disclaimer"]
                    },
                    items: [{
                        name: c.EV,
                        translations: {
                            price: "activation-drawers:price_per_year",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: c.KB,
                        translations: {
                            price: "activation-drawers:price_per_year"
                        }
                    }, {
                        name: c.Dy,
                        translations: {
                            price: "activation-drawers:price_per_year"
                        }
                    }]
                },
                f = {
                    translations: {
                        title: "on_demand_title",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: c._x
                    }, {
                        name: c.vC
                    }, {
                        name: c.cL
                    }]
                },
                v = {
                    translations: {
                        title: "on_demand_title",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: c.cd,
                        translations: {
                            price: "price_standard_license"
                        }
                    }, {
                        name: c.vC,
                        translations: {
                            price: "price_standard_license"
                        }
                    }, {
                        name: c._x,
                        translations: {
                            price: "price_standard_license"
                        }
                    }, {
                        name: c.cL,
                        translations: {
                            price: "price_standard_license"
                        }
                    }],
                    initialItemIndex: 1
                },
                g = {
                    translations: {
                        title: "enhanced_legal_protections",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: c.vI
                    }, {
                        name: c.zW
                    }, {
                        name: c.jh
                    }]
                },
                h = (i = {}, (0, a.Z)(i, u, p), (0, a.Z)(i, d, v), (0, a.Z)(i, l, g), i),
                y = (r = {}, (0, a.Z)(r, u, p), (0, a.Z)(r, d, f), (0, a.Z)(r, l, g), r),
                b = (0, s.Z)((0, o.Z)({}, h), (0, a.Z)({}, u, m)),
                w = (0, s.Z)((0, o.Z)({}, y), (0, a.Z)({}, u, m)),
                Z = [{
                    translations: "subscriptions",
                    analyticsLabel: "subscriptionTab"
                }, {
                    translations: "on_demand_packs",
                    analyticsLabel: "onDemandTab"
                }]
        },
        91948: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return s
                }
            });
            var i = t(80875),
                r = t(2784),
                a = t(88849),
                o = t(27673),
                s = function(e) {
                    var n = e.flagID,
                        t = e.metadata,
                        s = e.variations,
                        c = (0, i.I)(n),
                        u = c.reason,
                        d = c.variation,
                        l = c.error,
                        p = c.isLoading,
                        m = (0, r.useMemo)(function() {
                            if (d !== a.NM && d) return s[d] || void 0
                        }, [d, s]),
                        _ = (0, o.z)({
                            error: l,
                            flagID: n,
                            name: t.name,
                            reason: u,
                            variantKey: d
                        }).recordImpression;
                    return {
                        config: m,
                        isLoading: void 0 !== p && p,
                        recordImpression: u === a.M6 ? _ : function() {
                            return ""
                        }
                    }
                }
        },
        42606: function(e, n, t) {
            t.d(n, {
                C5: function() {
                    return f
                },
                Di: function() {
                    return c
                },
                VP: function() {
                    return b
                },
                jm: function() {
                    return s
                },
                nk: function() {
                    return v
                },
                rN: function() {
                    return g
                },
                sZ: function() {
                    return u
                },
                wZ: function() {
                    return h
                }
            });
            var i, r = t(47842),
                a = t(14625),
                o = t(27739),
                s = "p3-1546-price-reset",
                c = "Price reset",
                u = {
                    flagID: s,
                    id: "P3-1546",
                    name: c
                },
                d = "2_credit_pack",
                l = "5_credit_pack",
                p = "30_credit_pack",
                m = "125_credit_pack",
                _ = "250_credit_pack",
                f = [d, l, p, m, _],
                v = "creditPack",
                g = "pricingCardCreditPack",
                h = [{
                    translations: "subscriptions",
                    analyticsLabel: "subscriptionTab"
                }, {
                    translations: "credit_packs",
                    analyticsLabel: "creditPacksTab"
                }],
                y = {
                    translations: {
                        title: "choose_monthly_plan",
                        caption: ["activation-drawers:sub_product_disclaimer"]
                    },
                    items: [{
                        name: o.tq,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }, {
                        name: o.v8,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details_images_and_music"
                        }
                    }, {
                        name: o.dm,
                        translations: {
                            price: "activation-drawers:price_per_month",
                            description: "flex_sub_details"
                        }
                    }]
                },
                b = (i = {}, (0, r.Z)(i, a.PU, y), (0, r.Z)(i, a.XC, {
                    translations: {
                        title: "credit_packs_title",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: l
                    }, {
                        name: d
                    }, {
                        name: p
                    }]
                }), (0, r.Z)(i, a.NP, {
                    translations: {
                        title: "enhanced_generic_legal_protections",
                        caption: "on_demand_caption"
                    },
                    items: [{
                        name: p
                    }, {
                        name: m
                    }, {
                        name: _
                    }]
                }), i)
        },
        5466: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return o
                }
            });
            var i = t(42606),
                r = t(91948),
                a = {
                    variantA: {
                        productId: "flex10_cmt_x12-var-0014",
                        preset: "p31193",
                        creditAllotments: {
                            image: 1,
                            video: 25,
                            music: 4
                        },
                        title: "credit_packs"
                    }
                },
                o = function() {
                    var e = (0, r.b)({
                        flagID: i.jm,
                        metadata: {
                            name: i.Di
                        },
                        variations: a
                    }).config;
                    return {
                        productId: null == e ? void 0 : e.productId,
                        preset: null == e ? void 0 : e.preset,
                        creditAllotments: null == e ? void 0 : e.creditAllotments,
                        title: null == e ? void 0 : e.title
                    }
                }
        },
        66970: function(e, n, t) {
            t.d(n, {
                DW: function() {
                    return s
                },
                a8: function() {
                    return o
                }
            });
            var i = t(87394),
                r = t(97258),
                a = t(39232),
                o = function() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null == n ? void 0 : null === (e = n.sizes) || void 0 === e ? void 0 : e[r.v2]
                },
                s = function(e) {
                    var n, t, r = e.assetType,
                        o = e.assetSize,
                        s = void 0 === o ? {} : o,
                        c = "",
                        u = "";
                    switch (r) {
                        case a.pX:
                            c = s.resolution, u = s.format;
                            break;
                        case a.k4:
                        default:
                            c = (t = (0, i.Z)((null == s ? void 0 : null === (n = s.name) || void 0 === n ? void 0 : n.split("_")) || [], 2))[0], u = t[1]
                    }
                    return {
                        size: c,
                        format: u
                    }
                }
        },
        18167: function(e, n, t) {
            t.d(n, {
                t: function() {
                    return c
                }
            });
            var i = t(70865),
                r = t(66970),
                a = t(44297),
                o = t(38398),
                s = t(60591),
                c = function(e) {
                    var n = e.asset,
                        t = e.couponCode,
                        c = e.productId,
                        u = e.selectedAssetSize,
                        d = e.vatNumber,
                        l = e.preset,
                        p = e.seatCount,
                        m = e.doNotRedirect,
                        _ = void 0 !== m && m,
                        f = e.existingUserRedirect,
                        v = void 0 !== f && f,
                        g = e.customLandingPage,
                        h = e.host,
                        y = e.license,
                        b = void 0 === y ? s.ur : y,
                        w = (0, a.OP)({
                            asset: n
                        }),
                        Z = (0, a.Tp)(n),
                        P = (0, r.DW)({
                            assetType: Z,
                            assetSize: u
                        }),
                        k = P.size,
                        U = P.format;
                    return (0, o.format)({
                        pathname: null != g ? g : "/order",
                        query: (0, i.Z)({}, Z && {
                            assetType: Z
                        }, w && {
                            assetId: w
                        }, t && {
                            couponCode: t
                        }, d && {
                            vatNumber: d
                        }, k && {
                            size: k
                        }, U && {
                            format: U
                        }, p && {
                            seatCount: p
                        }, _ && {
                            doNotRedirect: _
                        }, v && {
                            existingUserRedirect: v
                        }, l && {
                            preset: l
                        }, c && {
                            productId: c
                        }, h && {
                            host: h
                        }, b && {
                            license: b
                        })
                    })
                }
        },
        33919: function(e, n, t) {
            t.d(n, {
                S: function() {
                    return h
                }
            });
            var i = t(70865),
                r = t(96670),
                a = t(87394),
                o = t(27739),
                s = t(39232),
                c = t(37546),
                u = t(44297),
                d = t(18167),
                l = t(21370),
                p = t(78809),
                m = t(24114),
                _ = t(96109),
                f = t(2784),
                v = t(50860),
                g = t(43110),
                h = function(e) {
                    var n = e.asset,
                        t = e.labels,
                        h = void 0 === t ? {} : t,
                        y = h.download,
                        b = h.downloadForFree,
                        w = (0, g.B)(),
                        Z = (0, p.M)(),
                        P = (0, l._)({
                            asset: n
                        }),
                        k = n.type,
                        U = n.description,
                        x = (0, f.useMemo)(function() {
                            var e = (0, u.aT)(n),
                                t = (0, u.EK)(n),
                                l = e && !t && !w,
                                p = (0, a.Z)((0, m.Q)(n) || [], 2)[1],
                                f = (0, c.Lr)(n),
                                v = (0, a.Z)((0, _.r)((0, r.Z)((0, i.Z)({}, f), {
                                    assetType: k,
                                    slug: Z({
                                        description: U
                                    })
                                })), 1)[0];
                            return {
                                downloadLabel: l ? b : y,
                                signUpQuery: l ? (0, i.Z)({
                                    landing_page: (0, d.t)({
                                        asset: n,
                                        couponCode: o.Xd,
                                        productId: o.Pv,
                                        existingUserRedirect: p
                                    }),
                                    view: o.E6
                                }, (null == n ? void 0 : n.type) === s.Y_ && {
                                    assetType: null == n ? void 0 : n.type,
                                    imageId: null == n ? void 0 : n.id
                                }) : t ? {
                                    landing_page: "".concat(v, "?showDrawerOnLoad=true")
                                } : {},
                                isRexEditorialAsset: t
                            }
                        }, [n, k, U, y, b, w, Z]),
                        I = x.downloadLabel,
                        C = x.signUpQuery,
                        q = x.isRexEditorialAsset,
                        S = (0, v.P)({
                            query: C
                        }),
                        A = q ? S : P.signUpPageRedirectHandler;
                    return {
                        downloadLabel: I,
                        loggedOutOnClickHandler: (0, f.useCallback)(function() {
                            A()
                        }, [A])
                    }
                }
        },
        21370: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return d
                }
            });
            var i = t(70865),
                r = t(27739),
                a = t(39232),
                o = t(5466),
                s = t(18167),
                c = t(59979),
                u = t(50860),
                d = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).asset,
                        n = (0, o.m)(),
                        t = n.productId,
                        d = n.preset,
                        l = (0, s.t)({
                            asset: e,
                            couponCode: r.Q9,
                            productId: t || r.v8
                        }),
                        p = (0, i.Z)({
                            landing_page: l,
                            view: r.Em
                        }, (null == e ? void 0 : e.type) === a.Y_ && {
                            assetType: null == e ? void 0 : e.type,
                            imageId: null == e ? void 0 : e.id
                        }, d && {
                            preset: d
                        }),
                        m = (0, c.cM)(p),
                        _ = (0, u.P)({
                            query: p
                        });
                    return {
                        href: m,
                        landingPage: l,
                        signUpPageRedirectHandler: _
                    }
                }
        },
        59979: function(e, n, t) {
            t.d(n, {
                Sl: function() {
                    return q
                },
                Ov: function() {
                    return C
                },
                cM: function() {
                    return I
                }
            });
            var i, r, a = t(47842),
                o = t(70865),
                s = t(26297),
                c = t(87394),
                u = t(39232),
                d = t(38398),
                l = t.n(d),
                p = "signup",
                m = "login",
                _ = (i = {}, (0, a.Z)(i, p, "/".concat(p)), (0, a.Z)(i, m, "/".concat(m)), i),
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.query,
                        t = l().format({
                            pathname: _[p],
                            query: void 0 === n ? {} : n
                        });
                    return [t, t]
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.query,
                        t = l().format({
                            pathname: _[m],
                            query: void 0 === n ? {} : n
                        });
                    return [t, t]
                },
                g = t(21805),
                h = t(70314),
                y = t.n(h)()().publicRuntimeConfig.authSsoCookieName,
                b = function() {
                    var e, n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).cookies;
                    return "-undefined" === (n ? n[y] : g.Z.get(y))
                },
                w = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).cookies,
                        n = b({
                            cookies: e
                        });
                    return {
                        getPathProps: n ? v : f,
                        isSignUp: !n
                    }
                },
                Z = t(9823),
                P = t(27764),
                k = t(5632),
                U = (r = {}, (0, a.Z)(r, u.k4, u.k4), (0, a.Z)(r, u.pX, u.gW), (0, a.Z)(r, u.VT, u.gP), (0, a.Z)(r, u.nj, u.gP), (0, a.Z)(r, u.xF, u.xF), (0, a.Z)(r, u.Nk, "aigen"), r),
                x = function(e) {
                    var n = e.getPathProps,
                        t = e.query,
                        i = (void 0 === t ? {} : t).landing_page,
                        r = (0, s.Z)(e.query, ["landing_page"]),
                        a = (0, k.useRouter)().asPath,
                        u = (0, Z.D)(),
                        d = u.isBrandSstk,
                        l = u.isBrandEnterprise,
                        p = U[(0, P.N6)(a)],
                        m = i || (l ? "/" === a ? null : a : null),
                        _ = (0, o.Z)({}, d && {
                            site: p
                        }, m && {
                            landing_page: decodeURIComponent(m)
                        }, r);
                    return (0, c.Z)(n({
                        query: _
                    }), 1)[0]
                },
                I = function(e) {
                    return x({
                        getPathProps: f,
                        query: e
                    })
                },
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return x({
                        getPathProps: v,
                        query: (0, Z.D)().isBrandEnterprise ? {
                            site: "premier"
                        } : e
                    })
                },
                q = function(e) {
                    var n = e.cookies,
                        t = e.queryParams,
                        i = e.signUpView,
                        r = w({
                            cookies: n
                        }),
                        a = r.getPathProps,
                        s = r.isSignUp;
                    return x({
                        getPathProps: a,
                        query: (0, o.Z)({}, t, s && i ? {
                            view: i
                        } : {})
                    })
                }
        },
        50860: function(e, n, t) {
            t.d(n, {
                P: function() {
                    return d
                }
            });
            var i = t(70865),
                r = t(96670),
                a = t(72075),
                o = t(2784),
                s = t(27764),
                c = t(19819),
                u = t(59979),
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.asset,
                        t = e.query,
                        d = e.shouldSetLocalStorage,
                        l = void 0 !== d && d,
                        p = (0, u.cM)(t);
                    return (0, o.useCallback)(function() {
                        if (a.j) {
                            var e, t;
                            l && (0, c.oe)(n), null === (e = window.NREUM) || void 0 === e || null === (t = e.addPageAction) || void 0 === t || t.call(e, "UP3-1623 assign useSignUpPageRedirect signUpPath to href", (0, r.Z)((0, i.Z)({}, window.location || {}), {
                                shouldSetLocalStorage: l,
                                signUpPath: p
                            })), (0, s.iz)(p, "signUpPageRedirect")
                        }
                    }, [p, n, l])
                }
        },
        19819: function(e, n, t) {
            t.d(n, {
                A_: function() {
                    return U
                },
                QH: function() {
                    return C
                },
                VM: function() {
                    return S
                },
                Zc: function() {
                    return L
                },
                mJ: function() {
                    return I
                },
                oe: function() {
                    return A
                },
                uG: function() {
                    return x
                }
            });
            var i, r, a, o = t(98788),
                s = t(70865),
                c = t(96670),
                u = t(50930),
                d = t(5163),
                l = t(68245),
                p = t(81740),
                m = t(19522),
                _ = t(97258),
                f = t(39232),
                v = t(85330),
                g = t(94054),
                h = t(83451),
                y = t(37546),
                b = t(44297),
                w = t(37154),
                Z = t(91855),
                P = t(67661),
                k = t(84159),
                U = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.name,
                        i = n.target,
                        r = document.createElement("a");
                    r.setAttribute("data-automation", "FeatureDownload_utils_link"), r.style.display = "none", r.href = e, r.target = void 0 === i ? "_self" : i, r.download = t || e, document.body.appendChild(r), r.click(), (0, k.bK)() || document.body.removeChild(r)
                },
                x = (i = (0, o.Z)(function(e) {
                    var n, t;
                    return (0, d.__generator)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return n = e.downloadBundlePayload, t = (0, l.e)({
                                    urlParams: {
                                        filename: n.bundleFilename
                                    }
                                }).formattedUrl, [4, Z.jl.post(t, n.content)];
                            case 1:
                                return [2, i.sent().data.public_url]
                        }
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                }),
                I = function(e) {
                    var n = e.licensedContent,
                        t = e.supplementalUrlType,
                        i = n[0],
                        r = i.downloadUrl,
                        a = i.supplementalUrls;
                    if ((null == a ? void 0 : a.length) && t) {
                        var o = (a.find(function(e) {
                            return e.type === t
                        }) || {}).url;
                        return void 0 === o ? r : o
                    }
                    return r
                },
                C = (r = (0, o.Z)(function(e) {
                    var n, t, i, r, a;
                    return (0, d.__generator)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = e.downloadPayload, t = e.supplementalUrlType, i = e.licenseeIdentifier, r = (0, p.f$)({
                                    urlParams: {
                                        licenseeIdentifier: i
                                    }
                                }).formattedUrl, [4, P.uS.post(r, n)];
                            case 1:
                                return [2, {
                                    downloadUrl: I({
                                        licensedContent: a = o.sent().data.meta.licensedContent,
                                        supplementalUrlType: t
                                    }),
                                    licensedContent: a
                                }]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                q = function(e) {
                    var n = e.existingAssetLicenses,
                        t = e.contentType,
                        i = e.licenseName,
                        r = e.subscriptions;
                    switch (t) {
                        case f.pX:
                            var a, o, s = (0, w.I)({
                                existingAssetLicenses: n,
                                subscriptions: (0, u.Z)(null !== (a = null == r ? void 0 : r.videoSubscriptions) && void 0 !== a ? a : []).concat((0, u.Z)(null !== (o = null == r ? void 0 : r.videoCompSubscriptions) && void 0 !== o ? o : [])),
                                licenseName: i
                            });
                            return (null == s ? void 0 : s.redeemableFor) || i;
                        case f.j0:
                            return i || g.zUW;
                        case f.tn:
                            return i || g.i9D;
                        case f.pV:
                        default:
                            return i
                    }
                },
                S = (a = (0, o.Z)(function(e) {
                    var n, t, i, r, a;
                    return (0, d.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                var l;
                                return n = e.assets, t = e.existingAssetLicenses, i = e.format, r = e.selectedAssetSize, a = e.subscriptions, [4, Promise.all(n.map((l = (0, o.Z)(function(e) {
                                    var n, o;
                                    return (0, d.__generator)(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return n = (0, y.SS)({
                                                    asset: e
                                                }), [4, (0, h.Oo)({
                                                    asset: e,
                                                    licenseName: e.licenseId,
                                                    selectedAssetSize: r
                                                })];
                                            case 1:
                                                return o = u.sent(), [2, (0, c.Z)((0, s.Z)({}, o, n === f.tn && {
                                                    override_filename: "".concat(v.Oq, "_").concat(e.id, ".").concat(i || o.content_format)
                                                }, (0, b.f8)(e) && (0, s.Z)({
                                                    content_provider: "pixelsquid-media",
                                                    content_size: _.JF
                                                }, e.selectedFormatType === m.yI && {
                                                    include_shadows: "on" === e.selectedShadowsOption
                                                })), {
                                                    license_name: q({
                                                        existingAssetLicenses: t,
                                                        contentType: n,
                                                        licenseName: e.licenseId,
                                                        subscriptions: a
                                                    }),
                                                    show_modal: !0
                                                })]
                                        }
                                    })
                                }), function(e) {
                                    return l.apply(this, arguments)
                                })))];
                            case 1:
                                return [2, {
                                    required_cookies: "",
                                    content: u.sent()
                                }]
                        }
                    })
                }), function(e) {
                    return a.apply(this, arguments)
                }),
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e && e.id && (e.title || e.description) && e.type && window.localStorage.setItem("sstk_ent_asset_preview", JSON.stringify({
                        id: e.id,
                        title: e.title || e.description,
                        thumb: e.src || e.previewImageUrl || "",
                        video: e.previewVideoUrls,
                        url: e.link,
                        type: (0, b.Tp)(e),
                        isRex: e.isRexEditorial
                    }))
                },
                L = function(e) {
                    var n;
                    return requestAnimationFrame ? function() {
                        for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                        n && cancelAnimationFrame(n), n = requestAnimationFrame(function() {
                            e.apply(void 0, (0, u.Z)(i))
                        })
                    } : e
                }
        },
        56878: function(e, n, t) {
            t.r(n), t.d(n, {
                Download: function() {
                    return o
                }
            });
            var i = t(70865),
                r = t(52322),
                a = (0, t(6620).Z)((0, r.jsx)("path", {
                    d: "M24.933 15.733l-1.867-1.867-5.733 5.733V3.332h-2.667v16.267l-5.733-5.733-1.867 1.867 8.933 8.933 8.933-8.933zm-22.266 11.6V30h26.667v-2.667H2.667z"
                }), "Download.svg"),
                o = function(e) {
                    return (0, r.jsx)(a, (0, i.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        }
    }
]);
//# sourceMappingURL=7668.d73fd9b0f2ad6ff3.js.map