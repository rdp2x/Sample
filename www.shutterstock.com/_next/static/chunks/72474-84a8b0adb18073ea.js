"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [72474], {
        72474: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return X
                }
            });
            var r = n(87394),
                o = n(52322),
                i = n(16642),
                a = n(71162),
                s = n(39232),
                c = n(84833),
                u = n(18505),
                l = n(65532),
                d = n(19799),
                g = n(48417),
                p = n(89522),
                m = n(31037),
                h = n(57858),
                v = n(27764),
                f = n(61970),
                y = n(70314),
                x = n.n(y),
                j = n(5632),
                S = n(2784),
                T = n(31294),
                k = n(9823),
                w = [u.Z$, u.jS],
                _ = [u.oy, u.G4, u.in, u.gG],
                A = x()().publicRuntimeConfig,
                C = A.enterpriseBaseUrl,
                E = A.shutterstockBaseUrl,
                L = /\/search(\?|\/).+$/,
                N = /\/editorial\/(?:video\/)?search\/.+$/,
                R = /\/video\/editorial\/?search/,
                O = /\/music\/search\/ras\/.+$/,
                b = /\/music\/search(\?|\/).+$/,
                I = /\/video\/search(\?|\/).+$/,
                P = /\/video\/embed\/\d+$/,
                B = function(e) {
                    return L.test(e) && !(N.test(e) || O.test(e))
                },
                F = RegExp("^/editorial/(".concat(c.Nm.join("|"), ")/")),
                Z = function(e, t) {
                    if (!t) return n;
                    var n, o = (0, f.jq)(t).query,
                        i = b.test(t) && !(N.test(t) || O.test(t)),
                        a = Object.entries(o).reduce(function(e, n) {
                            var o = (0, r.Z)(n, 2),
                                a = o[0],
                                s = o[1];
                            if (i && _.includes(a) && (e.push([a, Array.isArray(s) ? s[0] : s]), i = !1), w.includes(a) && !Array.isArray(s)) {
                                if ((B(t) || I.test(t) && !(N.test(t) || O.test(t))) && a === u.jS) return e;
                                e.push([a, s])
                            }
                            return e
                        }, []);
                    if (a && !a.length) return n;
                    var s = Object.fromEntries(a.sort());
                    return (0, f.BQ)({
                        pathname: e,
                        query: s
                    })
                },
                G = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).asset,
                        t = (0, k.D)().isBrandSstk ? E : C,
                        n = (0, j.useRouter)().asPath,
                        o = (0, l.PE)().locale,
                        i = (0, d.ug)(),
                        a = i.query,
                        c = i.spellcheckInfo,
                        u = c.spellcheckedQuery,
                        h = void 0 === u ? "" : u,
                        y = c.origResultsCount,
                        x = (0, T.Q)().encodeSearchTerm,
                        w = (0, r.Z)((0, p.KC)({
                            asset: e
                        }), 1)[0];
                    return {
                        getCanonicalLink: (0, S.useCallback)(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = e.appendLocale,
                                c = e.code,
                                u = e.overriddenSearchTerm,
                                l = null !== (k = null === (T = (0, f.jq)((0, v.oY)(n))) || void 0 === T ? void 0 : T.pathname) && void 0 !== k ? k : "",
                                d = l;
                            if (p = d, R.test(p) && (d = d.replace("video/editorial", "editorial/video")), j = d, F.test(j) && (d = d.replace(F, "/editorial/livefeed/")), "/" !== w && (S = d, P.test(S)) && (d = w), B(n)) {
                                var p, j, S, T, k, _ = Z(l, n);
                                _ && (d = _);
                                var A = (0, g.aT)(u || (0 === y && h ? h : a), o),
                                    C = (0, f.jq)(n).query;
                                d = C.image_type === s.e3 && C.entity && "" === A ? (0, r.Z)((0, m.NJ)(), 1)[0] : (0, v.Iz)({
                                    path: d,
                                    term: x(A)
                                })
                            }
                            return "/templates/search" === d && (d = "/templates"), (0, v.ws)(t + d, i && (c || o))
                        }, [n, t, o, w, y, h, a, x])
                    }
                },
                M = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.overriddenSearchTerm,
                        r = t.asset,
                        o = t.assets,
                        i = (0, d.ug)().queryTranslations,
                        a = G({
                            asset: r
                        }).getCanonicalLink,
                        s = (0, j.useRouter)().asPath,
                        c = (0, l.PE)().locale,
                        u = (0, T.Q)().encodeSearchTerm,
                        g = a({
                            appendLocale: !0,
                            overriddenSearchTerm: n
                        }),
                        p = B(s),
                        m = !p || "en" === c && o && o.length > 0 ? a() : "en" !== c && i.en ? a({
                            overriddenSearchTerm: i.en
                        }) : void 0,
                        v = h.Ft.map(function(e) {
                            if (!i[e] && c !== e && p || "en" !== c && "en" === e && g.includes(i.en) && p) return null;
                            var t = i[e] || i.en,
                                n = a({
                                    code: e,
                                    appendLocale: !0
                                });
                            return p && t && (n = n.replace(/\/search\/[^/?]*/, "/search/".concat(u(t)))), {
                                href: n,
                                hrefLang: e
                            }
                        }).filter(function(e) {
                            return !!e
                        });
                    return B(s) && (null === (e = v.find(function(e) {
                        return e.hrefLang === c
                    })) || void 0 === e ? void 0 : e.href) !== g && (v = []), B(s) && 1 === v.length && v[0].hrefLang === c && (v = []), {
                        altDefaultLink: m,
                        altLinks: v,
                        canonicalLink: g
                    }
                },
                D = n(97024),
                U = n(75),
                q = n(68871),
                H = n(97729),
                Q = n.n(H),
                W = n(59877),
                $ = "Shutterstock",
                J = "Shutterstock Editorial",
                z = [
                    ["twitter:site", "@shutterstock"],
                    ["twitter:card", "summary_large_image"],
                    ["apple-itunes-app", "app-id=473347409, app-argument=http://www.shutterstock.com/"],
                    ["google-site-verification", "1wsiFwGziBzqCcMecpMDlbZgN1jKL-Fh6m05QXpg4QY"]
                ],
                V = function(e) {
                    var t = e.isBrandSstk,
                        n = (0, D.Ws)();
                    return t && n ? J : $
                },
                K = function(e) {
                    var t = e.metaTitle,
                        n = e.isBrandSstk,
                        r = (0, D.Ws)() && n;
                    return t.includes($) ? r ? t.replace($, J) : t : "".concat(t, " | ").concat(r ? J : $)
                },
                Y = function(e) {
                    var t = e.statusCode,
                        n = (0, W.$G)([U.ocu, U._eB]).t,
                        r = (0, k.D)(),
                        i = r.isBrandSstk,
                        s = r.isBrandEnterprise,
                        c = (0, q.U3)(t) ? t : a.Vj,
                        u = n("error:status_".concat(c, "_title")),
                        l = n(s && t === a.gB ? "".concat(U._eB, "::ent:no_access_content") : "error:status_".concat(c, "_subtitle")),
                        d = K({
                            metaTitle: u,
                            isBrandSstk: i
                        });
                    return (0, o.jsxs)(Q(), {
                        children: [(0, o.jsx)("title", {
                            children: d
                        }, "title"), (0, o.jsx)("meta", {
                            name: "description",
                            content: l
                        }, "description"), (0, o.jsx)("meta", {
                            content: d,
                            property: "og:title"
                        }, "og:title"), (0, o.jsx)("meta", {
                            content: l,
                            property: "og:description"
                        }, "og:description")]
                    })
                },
                X = function(e) {
                    var t, n, s, c = e.assets,
                        u = e.description,
                        l = e.image,
                        d = void 0 === l ? {} : l,
                        g = e.title,
                        p = e.schemas,
                        m = e.statusCode,
                        h = e.noIndex,
                        v = e.noIndexNoFollow,
                        f = e.keywords,
                        y = e.isAdultContent,
                        x = e.contributor,
                        j = void 0 === x ? {} : x,
                        S = e.children,
                        T = e.seoServiceData,
                        w = e.asset,
                        _ = e.pageDescription,
                        A = (0, W.$G)(U.aGO).t,
                        C = M({
                            overriddenSearchTerm: null == T ? void 0 : T.taxonomyCanonical,
                            asset: w,
                            assets: c
                        }),
                        E = C.altDefaultLink,
                        L = C.altLinks,
                        N = C.canonicalLink,
                        R = (0, k.D)(),
                        O = R.isBrandSstk,
                        b = R.isBrandEnterprise,
                        I = {
                            title: g || A("home:lihp_meta_title"),
                            description: u || A("home:lihp_meta_description")
                        },
                        P = I.title,
                        B = I.description,
                        F = V({
                            isBrandSstk: O
                        }),
                        Z = K({
                            metaTitle: P,
                            isBrandSstk: O
                        }),
                        G = (null == T ? void 0 : T.disposition) === i.M8 && (null == T ? void 0 : T.isSeoServiceActive),
                        D = (null == T ? void 0 : T.disposition) === i.Hf && (null == T ? void 0 : T.isSeoServiceActive),
                        q = (h || G) && !b,
                        H = (v || D) && !b,
                        $ = (null == T ? void 0 : T.disposition) === i.FL && (null == T ? void 0 : T.canonicalURL) || N;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [m > a.HO ? (0, o.jsx)(Y, {
                            statusCode: m
                        }) : (0, o.jsxs)(Q(), {
                            children: [(0, o.jsx)("title", {
                                children: Z
                            }, "title"), (0, o.jsx)("meta", {
                                name: "description",
                                content: _ || B
                            }, "description"), (0, o.jsx)("meta", {
                                content: Z,
                                property: "og:title"
                            }, "og:title"), (0, o.jsx)("meta", {
                                content: B,
                                property: "og:description"
                            }, "og:description"), S]
                        }), (0, o.jsxs)(Q(), {
                            children: [z.map(function(e) {
                                var t = (0, r.Z)(e, 2),
                                    n = t[0],
                                    i = t[1];
                                return (0, o.jsx)("meta", {
                                    name: n,
                                    content: i
                                }, n)
                            }), (0, o.jsx)("meta", {
                                content: "website",
                                property: "og:type"
                            }, "type"), (0, o.jsx)("meta", {
                                content: F,
                                property: "og:site_name"
                            }, "site"), (0, o.jsx)("meta", {
                                content: "604800",
                                property: "og:ttl"
                            }, "og:ttl"), j.twitterUsername && (0, o.jsx)("meta", {
                                content: "@".concat(j.twitterUsername),
                                name: "twitter:creator"
                            }, "twitter:creator"), d.url && (0, o.jsx)("meta", {
                                content: d.url,
                                property: "og:image"
                            }, "og:image"), d.width && (0, o.jsx)("meta", {
                                content: Math.round(d.width),
                                property: "og:image:width"
                            }, "og:image:width"), d.height && (0, o.jsx)("meta", {
                                content: Math.round(d.height),
                                property: "og:image:height"
                            }, "og:image:height"), (null == d ? void 0 : null === (t = d.imageSmall) || void 0 === t ? void 0 : t.url) && (0, o.jsx)("meta", {
                                content: d.imageSmall.url,
                                property: "og:image"
                            }, "og:imageSmall"), (null == d ? void 0 : null === (n = d.imageSmall) || void 0 === n ? void 0 : n.width) && (0, o.jsx)("meta", {
                                content: Math.round(d.imageSmall.width),
                                property: "og:image:width"
                            }, "og:imageSmall:width"), (null == d ? void 0 : null === (s = d.imageSmall) || void 0 === s ? void 0 : s.height) && (0, o.jsx)("meta", {
                                content: Math.round(d.imageSmall.height),
                                property: "og:image:height"
                            }, "og:imageSmall:height"), d.alt && (0, o.jsx)("meta", {
                                content: d.alt,
                                property: "og:image:alt"
                            }, "og:image:alt"), (null == d ? void 0 : d.videoUrl) && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("meta", {
                                    content: d.videoUrl,
                                    property: "og:video:url"
                                }, "og:video:url"), (0, o.jsx)("meta", {
                                    content: d.videoUrl,
                                    property: "og:video:secure_url"
                                }, "og:video:secure_url"), d.width && (0, o.jsx)("meta", {
                                    content: d.width,
                                    property: "og:video:width"
                                }, "og:video:width"), d.height && (0, o.jsx)("meta", {
                                    content: d.height,
                                    property: "og:video:height"
                                }, "og:video:height"), (0, o.jsx)("meta", {
                                    content: d.videoUrl,
                                    property: "twitter:player"
                                }, "twitter:player")]
                            }), $ && (0, o.jsx)("meta", {
                                content: $,
                                property: "og:url"
                            }, "og:url"), H || q ? (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("meta", {
                                    name: "robots",
                                    content: "noindex".concat(H ? ",nofollow" : "")
                                }, "robots"), (0, o.jsx)("meta", {
                                    name: "googlebot",
                                    content: "noindex".concat(H ? ",nofollow" : "")
                                }, "googlebot")]
                            }) : null, y ? (0, o.jsx)("meta", {
                                name: "rating",
                                content: "adult"
                            }) : null, q || H || b ? null : (0, o.jsx)("meta", {
                                name: "robots",
                                content: "max-image-preview:large"
                            }), p && p.map(function(e) {
                                var t = e.type,
                                    n = e.contentType,
                                    r = e.innerHTML;
                                return (0, o.jsx)("script", {
                                    type: t,
                                    dangerouslySetInnerHTML: {
                                        __html: r
                                    }
                                }, n)
                            }), $ && (0, o.jsx)("link", {
                                rel: "canonical",
                                href: $
                            }), L && L.map(function(e) {
                                var t = e.href,
                                    n = e.hrefLang;
                                return (0, o.jsx)("link", {
                                    rel: "alternate",
                                    href: t,
                                    hrefLang: n
                                }, n)
                            }), E && (0, o.jsx)("link", {
                                rel: "alternate",
                                href: E,
                                hrefLang: "x-default"
                            }), !!(null == f ? void 0 : f.length) && (0, o.jsx)("meta", {
                                name: "keywords",
                                content: f.join(", ")
                            })]
                        })]
                    })
                };
            X.defaultProps = {
                description: void 0,
                image: {},
                title: void 0,
                schemas: void 0,
                statusCode: void 0,
                noIndex: !1,
                noIndexNoFollow: !1,
                keywords: [],
                contributor: {},
                isAdultContent: !1,
                children: void 0,
                seoServiceData: {},
                asset: void 0,
                assets: [],
                pageDescription: void 0
            }
        },
        16642: function(e, t, n) {
            n.d(t, {
                FL: function() {
                    return c
                },
                H2: function() {
                    return i
                },
                Hf: function() {
                    return s
                },
                M8: function() {
                    return a
                },
                Rm: function() {
                    return o
                },
                iN: function() {
                    return u
                },
                ke: function() {
                    return r
                }
            });
            var r = "https://schema.org",
                o = {
                    IMAGE_OBJECT: "ImageObject",
                    VIDEO_OBJECT: "VideoObject",
                    AUDIO_OBJECT: "AudioObject",
                    MUSIC_GROUP: "MusicGroup",
                    MUSIC_RECORDING: "MusicRecording",
                    PRODUCT: "Product",
                    OFFER: "Offer",
                    ORGANIZATION: "Organization",
                    PERSON: "Person",
                    THING: "Thing",
                    SEARCH_ACTION: "SearchAction",
                    WEB_SITE: "WebSite",
                    BREADCRUMBSLIST: "BreadcrumbList",
                    FAQPAGE: "FAQPage",
                    HOWTO: "HowTo",
                    HOWTOSTEP: "HowToStep",
                    AGGREGATE_RATING: "AggregateRating"
                },
                i = {
                    ORGANIZATION: o.ORGANIZATION.toLocaleLowerCase(),
                    WEB_SITE: o.WEB_SITE.toLocaleLowerCase(),
                    FAQPAGE: o.FAQPAGE.toLocaleLowerCase(),
                    HOWTO: o.HOWTO.toLocaleLowerCase()
                },
                a = "noindex",
                s = "noindex-nofollow",
                c = "canonicalize",
                u = "utm_source=schema&utm_medium=googleimages&utm_campaign=image"
        },
        89522: function(e, t, n) {
            n.d(t, {
                KC: function() {
                    return h
                }
            });
            var r = n(70865),
                o = n(96670),
                i = n(26297),
                a = n(39232),
                s = n(65532),
                c = n(37546),
                u = n(44297),
                l = n(96109),
                d = n(57858);
            n(2784);
            var g = n(78809),
                p = function(e) {
                    var t, n = e.asset,
                        r = e.assetType,
                        o = e.slugify,
                        i = e.locale;
                    if (null == n ? void 0 : n.isRexEditorial) return o({
                        description: n.description
                    });
                    switch (r) {
                        case a.hv:
                            return o({
                                description: null == n ? void 0 : n.description
                            });
                        case a.pX:
                            return o({
                                description: !n.description && n.description_language_map ? null !== (t = n.description_language_map[i]) && void 0 !== t ? t : n.description_language_map[d.NZ] : n.description
                            });
                        case a.tn:
                        case a.xF:
                        case a.IK:
                            return (null == n ? void 0 : n.slug) || o({
                                description: null == n ? void 0 : n.title
                            });
                        default:
                            return null
                    }
                },
                m = function(e) {
                    var t = e.asset,
                        n = e.getRoutePathProps,
                        a = e.slugify,
                        s = e.locale,
                        l = (0, i.Z)(e, ["asset", "getRoutePathProps", "slugify", "locale"]),
                        d = (0, u.Tp)(t),
                        g = (0, c.Lr)(t),
                        m = p({
                            asset: g,
                            slugify: a,
                            assetType: d,
                            locale: s
                        });
                    return n((0, r.Z)((0, o.Z)((0, r.Z)({}, g), {
                        item: t,
                        assetType: d,
                        slug: m
                    }), l))
                },
                h = function(e) {
                    var t = e.asset,
                        n = e.getRoutePathProps,
                        o = void 0 === n ? l.r : n,
                        a = (0, i.Z)(e, ["asset", "getRoutePathProps"]),
                        c = (0, g.M)(),
                        u = (0, s.PE)().locale;
                    return m((0, r.Z)({
                        asset: t,
                        getRoutePathProps: o,
                        slugify: c,
                        locale: u
                    }, a))
                }
        },
        31294: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return i
                }
            });
            var r = n(48417),
                o = n(2784),
                i = function() {
                    return {
                        encodeSearchTerm: (0, o.useCallback)(function(e) {
                            return (0, r.U9)(e)
                        }, []),
                        decodeSearchTerm: (0, o.useCallback)(function(e) {
                            return (0, r.JF)(e)
                        }, [])
                    }
                }
        },
        78809: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return c
                }
            });
            var r = n(70865),
                o = n(96670),
                i = n(65532),
                a = n(42448),
                s = n(2784),
                c = function() {
                    var e = (0, i.PE)().fullLocale;
                    return (0, s.useCallback)(function(t) {
                        return (0, a.l)((0, o.Z)((0, r.Z)({}, t), {
                            locale: e
                        }))
                    }, [e])
                }
        },
        97024: function(e, t, n) {
            n.d(t, {
                JI: function() {
                    return g
                },
                MJ: function() {
                    return l
                },
                Wo: function() {
                    return c
                },
                Ws: function() {
                    return m
                },
                a$: function() {
                    return u
                },
                jm: function() {
                    return d
                }
            });
            var r = n(39232),
                o = n(18505),
                i = n(21770),
                a = n(27764),
                s = n(5632),
                c = function() {
                    var e = (0, s.useRouter)().query[o.jS];
                    return Number(void 0 === e ? 1 : e)
                },
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.defaultPageSize,
                        n = void 0 === t ? 10 : t,
                        r = (0, s.useRouter)().query[o.dp],
                        a = void 0 === r ? n : r;
                    return (0, i.k)(a) ? Number(a) : n
                },
                l = function() {
                    var e = (0, s.useRouter)().query;
                    return {
                        endDate: e[o.BD],
                        startDate: e[o.yZ]
                    }
                },
                d = function() {
                    return {
                        orderBy: (0, s.useRouter)().query[o.qk]
                    }
                },
                g = function() {
                    var e, t = (0, s.useRouter)(),
                        n = t.query,
                        i = n[o.Tv],
                        c = n[o.cb],
                        u = t.asPath,
                        l = (0, a.oY)(u),
                        d = r.cp[c],
                        g = (null === (e = l.match(a._g)) || void 0 === e ? void 0 : e[1]) || i || r.k4,
                        p = (0, a.N6)(l),
                        m = i || d || p,
                        h = (0, a.EV)(l, m),
                        v = r.p_[m];
                    return {
                        assetType: g,
                        assetSubType: h,
                        fullAssetType: m,
                        fullAssetTypeFromPath: p,
                        editorialAssetType: v
                    }
                },
                p = /^\/editorial/i,
                m = function() {
                    var e = (0, s.useRouter)().asPath;
                    return p.test(e)
                }
        },
        96109: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return p
                }
            });
            var r, o = n(39232),
                i = n(24114),
                a = n(90856),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.slug,
                        r = "".concat(n, "-").concat(t),
                        i = "/".concat(o.k4, "-").concat(o.w5, "/").concat(r);
                    return [i, i]
                },
                c = n(12355),
                u = n(47842);
            n(38398);
            var l = n(85208);
            (0, u.Z)({}, o.xN, (r = {}, (0, u.Z)(r, l.Dx, "/".concat(o.xN)), (0, u.Z)(r, "category", "/".concat(o.xN, "/[slug]")), (0, u.Z)(r, "subCategory", "/".concat(o.xN, "/[slug]/[slug]")), r));
            var d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.slug,
                        r = "create-".concat(n ? "".concat(n, "-").concat(t) : t),
                        i = "/".concat(o.xN, "/").concat(r);
                    return [i, i]
                },
                g = n(28307),
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = e.id,
                        r = e.slug,
                        u = e.link,
                        l = e.permalink,
                        p = e.isIllustration,
                        m = e.isVector,
                        h = e.description;
                    switch (t) {
                        case o.pX:
                        case o.FM:
                        case o.cF:
                            return (0, g.f0)({
                                id: n,
                                slug: r,
                                permalink: l
                            });
                        case o.j0:
                        case o.xF:
                        case o.IK:
                        case o.jr:
                            return (0, a.o)({
                                id: n,
                                slug: r
                            });
                        case o.tn:
                            return (0, c.I)({
                                id: n,
                                slug: r
                            });
                        case o.hv:
                            return d({
                                id: n,
                                slug: r
                            });
                        case o.w5:
                            return s({
                                id: n,
                                slug: r
                            });
                        case o.k4:
                        case o.Y_:
                        case o.gP:
                        default:
                            return (0, i.Q)({
                                link: u,
                                permalink: l,
                                isIllustration: p,
                                isVector: m,
                                id: n,
                                description: h
                            })
                    }
                }
        },
        21770: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return r
                }
            });
            var r = function(e) {
                return !Number.isNaN(Number.parseFloat(e)) && !Number.isNaN(+e)
            }
        }
    }
]);
//# sourceMappingURL=72474-84a8b0adb18073ea.js.map