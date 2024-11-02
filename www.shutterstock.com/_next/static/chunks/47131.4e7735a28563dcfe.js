"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47131], {
        68245: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(70865),
                i = n(38398),
                o = function(e) {
                    var t = e.urlParams,
                        n = e.queryParams,
                        o = "/bundle/".concat((void 0 === t ? {} : t).filename),
                        a = (0, r.Z)({}, void 0 === n ? {} : n);
                    return {
                        url: o,
                        defaultParams: a,
                        formattedUrl: (0, i.format)({
                            pathname: o,
                            query: a
                        })
                    }
                }
        },
        77601: function(e, t, n) {
            n.d(t, {
                TT: function() {
                    return s
                },
                Uo: function() {
                    return u
                },
                f7: function() {
                    return l
                },
                oP: function() {
                    return c
                },
                zh: function() {
                    return d
                }
            });
            var r = n(47842),
                i = n(70865),
                o = n(96670),
                a = n(8740),
                s = (0, a.ZL)()(function(e) {
                    var t = e.breakpoints,
                        n = e.tokens,
                        i = n.spacing,
                        o = n.fontSize,
                        a = n.lineHeight;
                    return {
                        title: (0, r.Z)({
                            marginBottom: i.s
                        }, t.up("sm"), {
                            marginBottom: i.base
                        }),
                        centeredTitle: {
                            textAlign: "center",
                            fontSize: o["3xl"],
                            lineHeight: a.m
                        }
                    }
                }),
                c = (0, a.ZL)()(function(e) {
                    var t = e.breakpoints,
                        n = e.tokens,
                        i = n.spacing,
                        o = n.fontSize,
                        a = n.lineHeight,
                        s = n.opacity;
                    return {
                        text: (0, r.Z)({
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            fontSize: o.m,
                            lineHeight: a.s,
                            marginBottom: i.m,
                            marginTop: i.s,
                            opacity: s[90]
                        }, t.up("sm"), {
                            marginBottom: i.base
                        })
                    }
                }),
                u = (0, a.ZL)()(function(e) {
                    var t = e.spacing,
                        n = e.breakpoints;
                    return {
                        container: (0, r.Z)({
                            paddingBottom: t(3)
                        }, n.up("lg"), {
                            paddingBottom: t(4)
                        })
                    }
                }),
                l = (0, a.ZL)()(function() {
                    return {
                        image: {
                            objectFit: "cover",
                            width: "100%",
                            height: "100%"
                        }
                    }
                }),
                d = (0, a.ZL)()(function(e, t) {
                    var n, a = e.breakpoints,
                        s = e.palette,
                        c = e.tokens.radius,
                        u = t.cardSpacing,
                        l = t.cardAspectAsPercent;
                    return {
                        root: (0, o.Z)((0, i.Z)({
                            backgroundColor: s.border1Color,
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            paddingTop: l,
                            borderRadius: c.m
                        }, u && (n = {}, (0, r.Z)(n, a.up("sm"), {
                            paddingTop: u.sm && "calc(".concat(l, " + ").concat(u.sm, "px)")
                        }), (0, r.Z)(n, a.up("md"), {
                            paddingTop: u.md && "calc(".concat(l, " + ").concat(u.md, "px)")
                        }), n)), {
                            "& > picture": {
                                display: "flex",
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: 0,
                                top: 0
                            }
                        })
                    }
                })
        },
        56836: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return p
                }
            });
            var r = n(47842),
                i = n(52322),
                o = n(13011),
                a = n(37546),
                s = n(44297),
                c = n(8740),
                u = function(e) {
                    var t = e.asset,
                        n = e.cardAspectRatio,
                        r = (0, a.jz)(t);
                    return t ? Math.min(r, n) : n
                },
                l = function(e) {
                    var t = e.isImageAsset,
                        n = e.cardAspectRatio,
                        r = e.assetAspectRatio;
                    if (t) return 0;
                    var i = (n - r) * 100;
                    return i ? i / 2 : 0
                },
                d = (0, c.ZL)()(function(e, t) {
                    var n = e.palette,
                        r = t.minHeight;
                    return {
                        container: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        withBackground: {
                            backgroundColor: n.skeleton
                        },
                        assetContainer: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        },
                        imageContainer: {
                            height: "108%"
                        },
                        minHeight: {
                            minHeight: r && "".concat(r, "px")
                        },
                        asset: {
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: n.skeleton
                        }
                    }
                }),
                p = function(e) {
                    var t, n, o = e.asset,
                        a = e.cardAspectRatio,
                        c = e.children,
                        p = e.classesProps,
                        f = e.minHeight,
                        m = e.withBackground,
                        v = e.withFullWidth,
                        h = (0, s.aT)(o),
                        g = d({
                            minHeight: f
                        }),
                        b = g.classes,
                        y = g.cx,
                        w = v ? a : u({
                            asset: o,
                            cardAspectRatio: a
                        }),
                        Z = v ? 0 : l({
                            isImageAsset: h,
                            assetAspectRatio: w,
                            cardAspectRatio: a
                        });
                    return (0, i.jsx)("div", {
                        className: y(b.container, p.container, (t = {}, (0, r.Z)(t, b.withBackground, m), (0, r.Z)(t, b.minHeight, f), t)),
                        style: {
                            paddingTop: "".concat(100 * a, "%")
                        },
                        children: (0, i.jsx)("div", {
                            className: y(b.assetContainer, (n = {}, (0, r.Z)(n, b.imageContainer, h), (0, r.Z)(n, b.minHeight, f), n)),
                            style: {
                                marginTop: "".concat(Z, "%"),
                                paddingTop: "".concat(100 * w, "%")
                            },
                            children: (0, i.jsx)("div", {
                                className: y(b.assetContainer, b.asset),
                                children: c
                            })
                        })
                    })
                };
            p.defaultProps = {
                cardAspectRatio: o.Th,
                classesProps: {},
                minHeight: null,
                withBackground: !0
            }
        },
        49076: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return u
                }
            });
            var r = n(70865),
                i = n(52322),
                o = n(41075),
                a = n(67550),
                s = n(62197),
                c = n(4418),
                u = function(e) {
                    var t = e.button,
                        n = e.subtitle,
                        u = e.title,
                        l = e.boldSubtitle;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.ZP, {
                            alignItems: "center",
                            container: !0,
                            justifyContent: "space-around",
                            spacing: 4,
                            children: (0, i.jsx)(o.ZP, {
                                item: !0,
                                xs: 12,
                                md: 8,
                                children: (0, i.jsxs)(a.Z, {
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    my: 4,
                                    children: [u && (0, i.jsx)(s.Z, {
                                        align: "center",
                                        color: "primary",
                                        component: "h4",
                                        variant: "h3",
                                        children: u
                                    }), n && (0, i.jsx)(s.Z, {
                                        align: "center",
                                        color: "primary",
                                        component: "p",
                                        variant: "h6",
                                        children: (0, i.jsx)(a.Z, {
                                            my: 4,
                                            fontWeight: l ? "bold" : "normal",
                                            component: "span",
                                            children: n
                                        })
                                    })]
                                })
                            })
                        }), t && (0, i.jsx)(c.Y, (0, r.Z)({}, t))]
                    })
                };
            u.defaultProps = {
                button: null,
                subtitle: null,
                title: null,
                boldSubtitle: !1
            }
        },
        47131: function(e, t, n) {
            n.r(t), n.d(t, {
                CmsGatedDownload: function() {
                    return M
                }
            });
            var r = n(70865),
                i = n(96670),
                o = n(52322),
                a = n(78675),
                s = n(41075),
                c = n(77601),
                u = n(36232),
                l = n(43110),
                d = n(27050),
                p = n(56836),
                f = n(95438),
                m = n(39232),
                v = n(63256),
                h = n(8740),
                g = n(33701),
                b = n(62197),
                y = n(83249),
                w = n(90369),
                Z = n(9390),
                j = n(36888),
                x = n(75),
                _ = n(59877),
                z = n(50860),
                S = {
                    target: "_blank"
                },
                U = function(e) {
                    var t = (0, z.P)({
                        shouldSetLocalStorage: !1
                    });
                    return (0, r.Z)({
                        href: e,
                        role: "link"
                    }, e ? S : {
                        onClick: t
                    })
                },
                A = (0, h.ZL)()(function(e) {
                    var t = e.palette,
                        n = e.tokens,
                        r = n.spacing;
                    return {
                        copy: {
                            fontWeight: n.fontWeight.bold,
                            marginTop: r.s
                        },
                        contributor: {
                            a: {
                                textDecoration: "none",
                                color: t.info.main,
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }
                        },
                        button: {
                            marginTop: r.s
                        }
                    }
                }),
                I = function(e) {
                    var t = e.copy,
                        n = e.downloadUrl,
                        a = e.contributorName,
                        s = e.contributorUrl,
                        c = (0, j.bo)().classes.buttonAnchor,
                        u = A().classes,
                        l = (0, _.$G)(x.XCT).t,
                        d = l("common:actions_download"),
                        p = U(n),
                        f = l("cms:by_contributor", {
                            CONTRIBUTOR_NAME: a,
                            CONTRIBUTOR_URL: s
                        });
                    return (0, o.jsxs)(o.Fragment, {
                        children: [t && (0, o.jsx)(b.Z, {
                            color: "primary",
                            variant: "subtitle2",
                            component: "p",
                            className: u.copy,
                            children: t
                        }), a && s && (0, o.jsx)(w.h, {
                            stringToTransform: f,
                            classes: u.contributor,
                            Component: (0, o.jsx)(b.Z, {
                                color: "textSecondary",
                                variant: "body2"
                            })
                        }), (0, o.jsx)("div", {
                            className: u.button,
                            children: (0, o.jsx)(y.Z, (0, i.Z)((0, r.Z)({}, p), {
                                component: n ? Z.r : y.Z,
                                className: c,
                                children: d
                            }))
                        })]
                    })
                },
                C = (0, h.ZL)()(function(e) {
                    return {
                        link: {
                            borderRadius: e.tokens.radius.m,
                            cursor: "pointer",
                            display: "block",
                            overflow: "hidden"
                        }
                    }
                }),
                T = function(e) {
                    var t = e.asset,
                        n = e.imgUrl,
                        a = (0, c.f7)().classes;
                    if ((null == t ? void 0 : t.imageType) === m.pV) {
                        var s = (0, i.Z)((0, r.Z)({}, t), {
                                url: n
                            }),
                            u = (0, d.U2)({
                                image: s,
                                srcSet: g.V_
                            });
                        return (0, o.jsx)("div", {
                            className: a.image,
                            children: (0, o.jsx)(f.J, {
                                image: u
                            })
                        })
                    }
                    var l = t.alt,
                        p = t.title,
                        h = (0, v.lR)(t);
                    return (0, o.jsx)("img", {
                        loading: "lazy",
                        src: h,
                        alt: l || p,
                        title: p,
                        className: a.image
                    })
                },
                k = function(e) {
                    var t = e.asset,
                        n = e.copy,
                        a = e.downloadUrl,
                        s = e.imgUrl,
                        c = e.contributorName,
                        u = e.contributorUrl,
                        l = C().classes,
                        d = U(a);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [t && (0, o.jsx)("a", (0, i.Z)((0, r.Z)({}, d), {
                            className: l.link,
                            children: (0, o.jsx)(p.A, {
                                asset: t,
                                withFullWidth: !0,
                                children: (0, o.jsx)(T, {
                                    asset: t,
                                    imgUrl: s
                                })
                            })
                        })), n && (0, o.jsx)(I, {
                            downloadUrl: a,
                            copy: n,
                            contributorName: c,
                            contributorUrl: u
                        })]
                    })
                };
            k.defaultProps = {
                asset: {},
                downloadUrl: null,
                copy: ""
            };
            var R = n(47842),
                N = n(49076),
                P = n(59979),
                O = function(e) {
                    var t = e.ctaLabel,
                        n = e.withCta,
                        r = (0, j.bo)().classes.buttonMediumPadding,
                        i = (0, _.$G)(x.XCT).t,
                        o = (0, P.cM)();
                    return n ? {
                        className: r,
                        color: "secondary",
                        label: t || i("ent:team_onboarding_button"),
                        href: o,
                        linkAs: o,
                        role: "link",
                        variant: "contained",
                        component: "a",
                        rel: "nofollow"
                    } : null
                },
                L = (0, h.ZL)()(function(e) {
                    var t = e.breakpoints,
                        n = e.spacing;
                    return {
                        root: (0, R.Z)({
                            marginTop: n(5),
                            marginBottom: n(5)
                        }, t.up("sm"), {
                            marginTop: n(7),
                            marginBottom: n(7)
                        })
                    }
                }),
                F = function(e) {
                    var t = e.ctaLabel,
                        n = e.maxWidth,
                        r = e.subtitle,
                        i = e.title,
                        s = e.withCta,
                        u = L(),
                        l = u.cx,
                        d = u.classes,
                        p = (0, c.Uo)().classes,
                        f = O({
                            ctaLabel: t,
                            withCta: s
                        });
                    return (0, o.jsx)(a.Z, {
                        className: l(d.root, p.container),
                        maxWidth: n,
                        disableGutters: !0,
                        children: (0, o.jsx)(N.l, {
                            button: f,
                            title: i,
                            subtitle: r
                        })
                    })
                };
            F.defaultProps = {
                ctaLabel: null,
                subtitle: null,
                title: null,
                withCta: !0
            };
            var B = n(67550),
                q = n(4418),
                H = function(e) {
                    var t = e.button,
                        n = e.title,
                        a = e.subtitle;
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)(B.Z, {
                            mb: 4,
                            mr: {
                                xs: 0,
                                lg: 4
                            },
                            children: [n && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(b.Z, {
                                    color: "primary",
                                    variant: "h3",
                                    component: "h3",
                                    children: n
                                }), (0, o.jsx)(B.Z, {
                                    mb: 2
                                })]
                            }), a && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(b.Z, {
                                    color: "textSecondary",
                                    variant: "h6",
                                    component: "p",
                                    children: (0, o.jsx)(B.Z, {
                                        fontWeight: "normal",
                                        component: "span",
                                        children: a
                                    })
                                }), (0, o.jsx)(B.Z, {
                                    mb: 4
                                })]
                            }), t && (0, o.jsx)(q.Y, (0, i.Z)((0, r.Z)({}, t), {
                                justifyContent: "center"
                            }))]
                        })
                    })
                };
            H.defaultProps = {
                button: null,
                title: "",
                subtitle: ""
            };
            var M = function(e) {
                var t = e.ctaLabel,
                    n = e.title,
                    d = e.subtitle,
                    p = e.items,
                    f = e.withCta,
                    m = e.maxWidth,
                    v = e.cmsBgContainerProps,
                    h = e.gatedDownloadThemeMode,
                    g = O({
                        ctaLabel: t,
                        withCta: f
                    }),
                    b = (0, c.Uo)().classes,
                    y = null == p ? void 0 : p.length,
                    w = (0, l.B)(),
                    Z = y ? (0, o.jsx)(a.Z, {
                        maxWidth: m,
                        disableGutters: !0,
                        className: b.container,
                        children: (0, o.jsxs)(s.ZP, {
                            container: !0,
                            justifyContent: "space-around",
                            alignItems: "center",
                            spacing: 4,
                            children: [!w && (0, o.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: (0, o.jsx)(H, {
                                    button: g,
                                    subtitle: d,
                                    title: n
                                })
                            }), null == p ? void 0 : p.map(function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return (0, o.jsx)(s.ZP, {
                                    item: !0,
                                    xs: 6,
                                    md: w ? 6 : 4,
                                    children: (0, o.jsx)(k, (0, i.Z)((0, r.Z)({}, e), {
                                        downloadUrl: w ? e.downloadUrl : null,
                                        imgUrl: e.downloadUrl
                                    }))
                                }, e.id)
                            })]
                        })
                    }) : (0, o.jsx)(F, {
                        ctaLabel: t,
                        maxWidth: m,
                        subtitle: d,
                        title: n,
                        withCta: f
                    });
                return (0, o.jsx)(u.I, {
                    cmsBgContainerProps: v,
                    themeMode: h,
                    children: Z
                })
            };
            M.defaultProps = {
                containerClassName: "",
                ctaLabel: "",
                maxWidth: "lg",
                subtitle: "",
                title: "",
                withCta: !0,
                cmsBgContainerProps: {}
            }
        },
        95438: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return d
                }
            });
            var r = n(70865),
                i = n(96670),
                o = n(52322),
                a = n(2784),
                s = n(21647),
                c = n(27050),
                u = n(25721),
                l = n(77601),
                d = function(e) {
                    var t = e.image,
                        n = t.type,
                        d = t.url,
                        p = t.srcSet,
                        f = t.title,
                        m = t.description,
                        v = t.fit,
                        h = e.lazyLoadImage,
                        g = e.contentNamespace,
                        b = e.classesProps,
                        y = e.dataOptimize,
                        w = e.fetchPriority,
                        Z = e.overideImageStyle,
                        j = (0, l.f7)(),
                        x = j.classes,
                        _ = j.cx;
                    try {
                        if (!d) return (0, o.jsx)(s.Z, {
                            variant: "rectangular",
                            className: b.root
                        });
                        return (0, o.jsx)("div", {
                            className: b.root,
                            children: (0, o.jsxs)("picture", {
                                "data-optimize": y,
                                children: [p && (0, u.am)(n) && Object.keys(p).map(function(e) {
                                    return (0, a.createElement)("source", (0, i.Z)((0, r.Z)({
                                        type: "image/".concat(u.FJ),
                                        srcSet: (0, u.LA)({
                                            srcSetSizes: p[e],
                                            imageUrl: d,
                                            typeOfImage: u.FJ,
                                            fit: v
                                        })
                                    }, "default" === e ? {} : {
                                        media: (0, u.Dt)(e)
                                    }), {
                                        key: "webp-".concat(e)
                                    }))
                                }), p && Object.keys(p).map(function(e) {
                                    return (0, a.createElement)("source", (0, i.Z)((0, r.Z)({
                                        srcSet: (0, u.LA)({
                                            srcSetSizes: p[e],
                                            imageUrl: d,
                                            typeOfImage: (0, u.TC)(n) ? u.Vy : "",
                                            fit: v
                                        })
                                    }, "default" === e ? {} : {
                                        media: (0, u.Dt)(e)
                                    }), {
                                        key: e
                                    }))
                                }), (0, o.jsx)("img", {
                                    fetchpriority: w,
                                    loading: void 0 === h || h ? "lazy" : "eager",
                                    src: p ? (0, u.Bl)({
                                        srcSetSizes: p.default,
                                        imageUrl: d
                                    }) : d,
                                    alt: m || f,
                                    title: (0, c.zo)(g) ? "" : f,
                                    className: Z ? b.image : _(x.image, b.image),
                                    width: p ? (0, u.sw)({
                                        srcSetSizes: p.default
                                    }).width : 0,
                                    height: p ? (0, u.sw)({
                                        srcSetSizes: p.default
                                    }).height : 0
                                })]
                            })
                        })
                    } catch (e) {
                        return (0, c.qr)(e, "CmsImageSourceTags")
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
        },
        90369: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return s
                }
            });
            var r = n(70865),
                i = n(52322),
                o = n(2784),
                a = (0, n(8740).ZL)()(function() {
                    return {
                        newline: {
                            whiteSpace: "pre-line"
                        }
                    }
                }),
                s = (0, o.memo)(function(e) {
                    var t = e.stringToTransform,
                        n = e.classes,
                        s = e.Component,
                        c = a(),
                        u = c.classes.newline,
                        l = {
                            className: (0, c.cx)(n, u),
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        };
                    return s ? (0, o.cloneElement)(s, l) : (0, i.jsx)("div", (0, r.Z)({}, l))
                })
        },
        19522: function(e, t, n) {
            n.d(t, {
                KQ: function() {
                    return o
                },
                LX: function() {
                    return s
                },
                Qs: function() {
                    return i
                },
                _3: function() {
                    return r
                },
                _Y: function() {
                    return u
                },
                iH: function() {
                    return c
                },
                yI: function() {
                    return a
                }
            });
            var r = "jpg",
                i = "eps",
                o = "JPEG",
                a = "png",
                s = "tiff",
                c = "mp3",
                u = "wav"
        },
        83451: function(e, t, n) {
            n.d(t, {
                Oo: function() {
                    return O
                },
                rB: function() {
                    return S
                }
            });
            var r, i, o, a, s = n(98788),
                c = n(70865),
                u = n(87394),
                l = n(5163),
                d = n(81740),
                p = n(19522),
                f = n(97258),
                m = n(39232),
                v = n(85330),
                h = n(84833),
                g = n(94054),
                b = n(67661),
                y = n(9009),
                w = n(81232),
                Z = n(37546),
                j = n(44297),
                x = n(18411),
                _ = n(61765),
                z = function(e) {
                    var t, n, r = e.asset,
                        i = r.angle,
                        o = r.selectedFormatType,
                        a = r.selectedShadowsOption;
                    return (0, c.Z)({
                        angle: i || (null == r ? void 0 : null === (t = r.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.angle) || "H01",
                        content_size: f.JF
                    }, o === p.yI && {
                        include_shadows: "on" === a
                    })
                },
                S = function(e) {
                    var t, n, r = e.asset;
                    return (null == r ? void 0 : null === (t = r.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.sizes) || r.sizes
                },
                U = (r = (0, s.Z)(function(e) {
                    var t, n, r, i;
                    return (0, l.__generator)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!((null == (t = e.asset) ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.cart) && !t.metadata.cart.sizes)) return [3, 2];
                                return r = (0, j.so)(t), i = {
                                    id: t.id
                                }, r && (i.channel = v.$S, i.content_provider = h._e), [4, b.uS.get((0, d.om)({
                                    queryParams: i
                                }).formattedUrl).then(function(e) {
                                    var t = e.data;
                                    return (0, y.O)(t)
                                })];
                            case 1:
                                return [2, o.sent().sizes];
                            case 2:
                                return [2, S({
                                    asset: t
                                })]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                A = function(e) {
                    var t, n, r, i, o = e.asset,
                        a = e.is3dObject,
                        s = e.isRexEditorial,
                        c = e.selectedAssetSize;
                    return o.licenseAsJpeg || (null === (t = o.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.licenseAsJpeg) ? "jpeg" : a && o.selectedFormatType ? "3dByFormat" : a && (null === (r = o.metadata) || void 0 === r ? void 0 : null === (i = r.cart) || void 0 === i ? void 0 : i.size) ? "3dBySize" : x.Bg[c] ? "comped" : s ? "rexEditorial" : "default"
                },
                I = function(e) {
                    var t, n, r, i, o = e.asset,
                        a = e.licenseStrategy,
                        s = e.selectedAssetSize,
                        c = e.sizesToUseArray,
                        l = function() {
                            switch (a) {
                                case "jpeg":
                                    return c.find(function(e) {
                                        return e.format === p._3
                                    });
                                case "3dByFormat":
                                    return c.find(function(e) {
                                        return e.format === o.selectedFormatType
                                    });
                                case "3dBySize":
                                    return;
                                case "comped":
                                    return (0, Z.AR)({
                                        sizes: c,
                                        compSizeImage: s
                                    });
                                default:
                                    return (0, Z.Nf)(c)
                            }
                        }(),
                        d = (null == l ? void 0 : l.format) || (null === (t = o.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.format);
                    switch (a) {
                        case "rexEditorial":
                            return {
                                size: f.vD,
                                format: d
                            };
                        case "3dByFormat":
                            return {
                                size: (0, u.Z)(l.name.split("_"), 1)[0],
                                format: d
                            };
                        case "3dBySize":
                            return {
                                size: null == o ? void 0 : null === (r = o.metadata) || void 0 === r ? void 0 : null === (i = r.cart) || void 0 === i ? void 0 : i.size,
                                format: d
                            };
                        default:
                            return {
                                size: x.nd[(0, w.z)(l.name)].downloadName,
                                format: d
                            }
                    }
                },
                C = function(e) {
                    var t, n, r, i, o = e.selectedAssetSize,
                        a = e.asset,
                        s = S({
                            asset: a
                        }),
                        u = (0, j.EK)(a),
                        l = (0, j.f8)(a),
                        d = l ? z({
                            asset: a,
                            selectedAssetSize: o,
                            sizesToUse: s
                        }) : {};
                    if (!s && (null == a ? void 0 : null === (t = a.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.size) && (null == a ? void 0 : null === (r = a.metadata) || void 0 === r ? void 0 : null === (i = r.cart) || void 0 === i ? void 0 : i.format)) return (0, c.Z)({
                        content_size: u ? f.vD : a.metadata.cart.size,
                        content_format: a.metadata.cart.format
                    }, d);
                    var p = Object.values(s),
                        m = A({
                            asset: a,
                            is3dObject: l,
                            isRexEditorial: u,
                            selectedAssetSize: o
                        }),
                        v = I({
                            asset: a,
                            licenseStrategy: m,
                            selectedAssetSize: o,
                            sizesToUseArray: p
                        }),
                        h = v.size,
                        g = v.format;
                    return (0, c.Z)({
                        content_size: h,
                        content_format: g
                    }, d)
                },
                T = function(e) {
                    var t = e.map[e.licenseName];
                    return t === f.T0 ? f.qY : t
                },
                k = function(e) {
                    var t = e.asset,
                        n = e.licenseName,
                        r = e.isVideoComp,
                        i = e.selectedAssetSize,
                        o = e.sizes,
                        a = (0, j.EK)(t),
                        s = (0, j.cL)(t),
                        c = (0, j.$Q)({
                            sizes: Object.values(o)
                        });
                    return !r && c ? T({
                        map: x.Q1,
                        licenseName: n
                    }) : r || n === g.f12 || a || s ? !i || a || s ? (0, Z.mF)(o) : x.kR[i] : T({
                        map: x.kR,
                        licenseName: n
                    })
                },
                R = (i = (0, s.Z)(function(e) {
                    var t, n, r, i, o, a, s, c;
                    return (0, l.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return t = e.asset, n = e.licenseName, r = e.isVideoComp, i = e.selectedAssetSize, [4, U({
                                    asset: t
                                })];
                            case 1:
                                return a = k({
                                    asset: t,
                                    licenseName: n,
                                    isVideoComp: r,
                                    selectedAssetSize: i,
                                    sizes: o = u.sent()
                                }), s = (0, j.EK)(t), c = Object.values(o).find(function(e) {
                                    var t = e.resolution;
                                    return x.wb[null == t ? void 0 : t.toLowerCase()] === a
                                }), [2, {
                                    content_size: s ? f.vD : a,
                                    content_format: null == c ? void 0 : c.format
                                }]
                        }
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                }),
                N = function(e) {
                    var t, n = e.format;
                    switch (e.selectedAssetSize) {
                        case "stereo":
                            t = f.cs;
                            break;
                        case "5.1":
                            t = f.gp;
                            break;
                        default:
                            t = f.yy
                    }
                    return {
                        content_size: t,
                        content_format: n === p.iH ? p.iH : p._Y
                    }
                },
                P = (o = (0, s.Z)(function(e) {
                    var t, n, r, i, o, a;
                    return (0, l.__generator)(this, function(s) {
                        switch (s.label) {
                            case 0:
                                switch (t = e.asset, n = e.licenseName, r = e.isVideoComp, i = e.selectedAssetSize, o = e.format, a = (0, _.qw)({
                                    asset: t
                                }), (0, j.so)(t) && (a = m.A7), a) {
                                    case m.pX:
                                    case m.A7:
                                        return [3, 1];
                                    case m.j0:
                                        return [3, 3];
                                    case m.tn:
                                        return [3, 4]
                                }
                                return [3, 5];
                            case 1:
                                return [4, R({
                                    asset: t,
                                    licenseName: n,
                                    isVideoComp: r,
                                    selectedAssetSize: i
                                })];
                            case 2:
                                return [2, s.sent()];
                            case 3:
                                return [2, {
                                    content_size: f.Ng,
                                    content_format: m.j0
                                }];
                            case 4:
                                return [2, N({
                                    selectedAssetSize: i,
                                    format: o
                                })];
                            case 5:
                                return [2, C({
                                    selectedAssetSize: i,
                                    asset: t
                                })];
                            case 6:
                                return [2]
                        }
                    })
                }), function(e) {
                    return o.apply(this, arguments)
                }),
                O = (a = (0, s.Z)(function(e) {
                    var t, n, r, i, o, a, s, u;
                    return (0, l.__generator)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return t = e.licenseName, n = e.selectedAssetSize, r = e.asset, i = e.isVideoComp, o = e.format, a = (0, _.qw)({
                                    asset: r
                                }), u = [{
                                    content_id: s = r.id.toString(),
                                    content_type: (0, _.JD)({
                                        assetType: a,
                                        assetId: s
                                    })
                                }], [4, P({
                                    asset: r,
                                    licenseName: t,
                                    isVideoComp: i,
                                    selectedAssetSize: n,
                                    format: o
                                })];
                            case 1:
                                return [2, c.Z.apply(void 0, u.concat([l.sent()]))]
                        }
                    })
                }), function(e) {
                    return a.apply(this, arguments)
                })
        },
        61765: function(e, t, n) {
            n.d(t, {
                Fy: function() {
                    return u
                },
                JD: function() {
                    return a
                },
                Js: function() {
                    return l
                },
                qw: function() {
                    return s
                },
                rw: function() {
                    return c
                }
            });
            var r = n(39232),
                i = n(94054),
                o = n(44297),
                a = function(e) {
                    var t = e.assetId,
                        n = e.assetType;
                    if ((0, o.EK)({
                            id: t
                        })) return r.gP;
                    switch (n) {
                        case r.k4:
                        case r.Y_:
                        case r.ox:
                        case r.w5:
                            return r.pV;
                        case r.FM:
                            return r.pX;
                        case r.xF:
                        case r.jr:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return n
                    }
                },
                s = function(e) {
                    var t, n = e.asset;
                    if (null === (t = n.image) || void 0 === t ? void 0 : t.isVector) return r.ox;
                    if ((0, o.EK)(n)) return r.gP;
                    var i = n.imageType || n.itemType || n.type;
                    switch (i) {
                        case r.e3:
                        case r.X2:
                        case r.Y_:
                            return r.k4;
                        case r.FM:
                            return r.pX;
                        case r.jr:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return i
                    }
                },
                c = function(e) {
                    var t = e.asset;
                    if ((0, o.N3)(t)) return r.gP;
                    if ((0, o.so)(t)) return r.cF;
                    var n = t.imageType || t.itemType || t.type;
                    switch (n) {
                        case r.ox:
                        case r.pV:
                        case r.e3:
                        case r.X2:
                        case r.Y_:
                            return r.k4;
                        case r.FM:
                            return r.pX;
                        case r.jr:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return n
                    }
                },
                u = function(e) {
                    var t = e.asset;
                    if ((0, o.N3)(t)) return r.nX;
                    if ((0, o.so)(t)) return r.A7;
                    var n = t.imageType || t.itemType || t.type;
                    switch (n) {
                        case r.ox:
                        case r.pV:
                        case r.e3:
                        case r.X2:
                        case r.Y_:
                            return r.k4;
                        case r.FM:
                            return r.pX;
                        case r.jr:
                        case r.xF:
                            return r.j0;
                        case r.tn:
                            return r.tn;
                        default:
                            return n
                    }
                },
                l = function(e) {
                    var t = u({
                        asset: e.mediaItem
                    });
                    return e.licenseName === i._rW[t]
                }
        },
        63256: function(e, t, n) {
            n.d(t, {
                KW: function() {
                    return f
                },
                VC: function() {
                    return m
                },
                fp: function() {
                    return l
                },
                lR: function() {
                    return d
                },
                ok: function() {
                    return v
                },
                qG: function() {
                    return p
                },
                r8: function() {
                    return h
                },
                vG: function() {
                    return u
                }
            });
            var r = n(87394),
                i = n(97258),
                o = n(39232),
                a = n(44297),
                s = n(31683),
                c = [o.pX],
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    if (!s.n5 || "string" != typeof e || e.includes("ip=x".concat(t))) return e;
                    try {
                        var n = new URL(e);
                        return n.searchParams.set("ip", "x".concat(t)), n.href
                    } catch (t) {
                        return e
                    }
                },
                l = function(e) {
                    var t, n, r;
                    return (null == e ? void 0 : e.mediaItem) ? {
                        previewImageUrl: null === (n = e.mediaItem) || void 0 === n ? void 0 : n.previewImageUrl,
                        previewVideoUrls: null === (r = e.mediaItem) || void 0 === r ? void 0 : r.previewVideoUrls
                    } : {
                        previewImageUrl: (null == e ? void 0 : e.thumbImageUrl) || (null == e ? void 0 : null === (t = e.image) || void 0 === t ? void 0 : t.url) || (null == e ? void 0 : e.previewImageUrl),
                        previewVideoUrls: null == e ? void 0 : e.previewVideoUrls
                    }
                },
                d = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    return (0, a.Am)(t) ? u(l(t).previewImageUrl, n) : t.src || (null === (e = t.image) || void 0 === e ? void 0 : e.url)
                },
                p = function(e) {
                    return e.assetType === o.pX ? "mp4" : null
                },
                f = function(e) {
                    var t = e.asset;
                    return c.includes((0, a.Tp)(t)) && !(0, a.so)(t)
                },
                m = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ((0, a.vh)(null == n ? void 0 : n.type)) return (null == n ? void 0 : n.width) > 1e3 ? "".concat(null == n ? void 0 : n.previewUrls[0], "?width=1000") : null == n ? void 0 : n.previewUrls[0];
                    var r = (0, a.EK)(n) ? i.bm : i.RA,
                        o = null == n ? void 0 : null === (e = n.displays) || void 0 === e ? void 0 : null === (t = e[r]) || void 0 === t ? void 0 : t.src;
                    return (0, a.f8)(n) ? o.replace(/\/([A-Z]\d\d)./, "/".concat(n.angle, ".")) : o
                },
                v = function() {
                    var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        s = (0, a.Tp)(r);
                    return s === o.k4 || s === o.zo || s === o.Nk ? (null == r ? void 0 : null === (e = r.displays) || void 0 === e ? void 0 : null === (t = e[i.bm]) || void 0 === t ? void 0 : t.src) || (null == r ? void 0 : r.src) : s === o.bz ? null == r ? void 0 : null === (n = r.imageVariants) || void 0 === n ? void 0 : n["1500"] : s === o.xF || s === o.tn ? null == r ? void 0 : r.previewMp3 : s === o.hv ? null == r ? void 0 : r.previewUrls[0] : null
                },
                h = function() {
                    var e, t, n, i, o, s, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = {
                            width: null !== (i = null !== (n = c.width) && void 0 !== n ? n : null === (e = c.mediaItem) || void 0 === e ? void 0 : e.width) && void 0 !== i ? i : 0,
                            height: null !== (s = null !== (o = c.height) && void 0 !== o ? o : null === (t = c.mediaItem) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0
                        };
                    if ((0, a.Am)(c) && (!l.width || !l.height) && c.sizes) {
                        var d = Object.keys(c.sizes).find(function(e) {
                            return c.sizes[e]
                        });
                        l.width = d && c.sizes[d].width || 0, l.height = d && c.sizes[d].height || 0
                    }
                    if (u && (!l.width || !l.height) && c.aspectRatioCommon) {
                        var p = (0, r.Z)(c.aspectRatioCommon.split(":"), 2),
                            f = p[0],
                            m = p[1];
                        l.width = Number(f), l.height = Number(m)
                    }
                    return l
                }
        },
        50860: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return l
                }
            });
            var r = n(70865),
                i = n(96670),
                o = n(72075),
                a = n(2784),
                s = n(27764),
                c = n(19819),
                u = n(59979),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.asset,
                        n = e.query,
                        l = e.shouldSetLocalStorage,
                        d = void 0 !== l && l,
                        p = (0, u.cM)(n);
                    return (0, a.useCallback)(function() {
                        if (o.j) {
                            var e, n;
                            d && (0, c.oe)(t), null === (e = window.NREUM) || void 0 === e || null === (n = e.addPageAction) || void 0 === n || n.call(e, "UP3-1623 assign useSignUpPageRedirect signUpPath to href", (0, i.Z)((0, r.Z)({}, window.location || {}), {
                                shouldSetLocalStorage: d,
                                signUpPath: p
                            })), (0, s.iz)(p, "signUpPageRedirect")
                        }
                    }, [p, t, d])
                }
        },
        19819: function(e, t, n) {
            n.d(t, {
                A_: function() {
                    return z
                },
                QH: function() {
                    return A
                },
                VM: function() {
                    return C
                },
                Zc: function() {
                    return k
                },
                mJ: function() {
                    return U
                },
                oe: function() {
                    return T
                },
                uG: function() {
                    return S
                }
            });
            var r, i, o, a = n(98788),
                s = n(70865),
                c = n(96670),
                u = n(50930),
                l = n(5163),
                d = n(68245),
                p = n(81740),
                f = n(19522),
                m = n(97258),
                v = n(39232),
                h = n(85330),
                g = n(94054),
                b = n(83451),
                y = n(37546),
                w = n(44297),
                Z = n(37154),
                j = n(91855),
                x = n(67661),
                _ = n(84159),
                z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.name,
                        r = t.target,
                        i = document.createElement("a");
                    i.setAttribute("data-automation", "FeatureDownload_utils_link"), i.style.display = "none", i.href = e, i.target = void 0 === r ? "_self" : r, i.download = n || e, document.body.appendChild(i), i.click(), (0, _.bK)() || document.body.removeChild(i)
                },
                S = (r = (0, a.Z)(function(e) {
                    var t, n;
                    return (0, l.__generator)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = e.downloadBundlePayload, n = (0, d.e)({
                                    urlParams: {
                                        filename: t.bundleFilename
                                    }
                                }).formattedUrl, [4, j.jl.post(n, t.content)];
                            case 1:
                                return [2, r.sent().data.public_url]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                U = function(e) {
                    var t = e.licensedContent,
                        n = e.supplementalUrlType,
                        r = t[0],
                        i = r.downloadUrl,
                        o = r.supplementalUrls;
                    if ((null == o ? void 0 : o.length) && n) {
                        var a = (o.find(function(e) {
                            return e.type === n
                        }) || {}).url;
                        return void 0 === a ? i : a
                    }
                    return i
                },
                A = (i = (0, a.Z)(function(e) {
                    var t, n, r, i, o;
                    return (0, l.__generator)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return t = e.downloadPayload, n = e.supplementalUrlType, r = e.licenseeIdentifier, i = (0, p.f$)({
                                    urlParams: {
                                        licenseeIdentifier: r
                                    }
                                }).formattedUrl, [4, x.uS.post(i, t)];
                            case 1:
                                return [2, {
                                    downloadUrl: U({
                                        licensedContent: o = a.sent().data.meta.licensedContent,
                                        supplementalUrlType: n
                                    }),
                                    licensedContent: o
                                }]
                        }
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                }),
                I = function(e) {
                    var t = e.existingAssetLicenses,
                        n = e.contentType,
                        r = e.licenseName,
                        i = e.subscriptions;
                    switch (n) {
                        case v.pX:
                            var o, a, s = (0, Z.I)({
                                existingAssetLicenses: t,
                                subscriptions: (0, u.Z)(null !== (o = null == i ? void 0 : i.videoSubscriptions) && void 0 !== o ? o : []).concat((0, u.Z)(null !== (a = null == i ? void 0 : i.videoCompSubscriptions) && void 0 !== a ? a : [])),
                                licenseName: r
                            });
                            return (null == s ? void 0 : s.redeemableFor) || r;
                        case v.j0:
                            return r || g.zUW;
                        case v.tn:
                            return r || g.i9D;
                        case v.pV:
                        default:
                            return r
                    }
                },
                C = (o = (0, a.Z)(function(e) {
                    var t, n, r, i, o;
                    return (0, l.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                var d;
                                return t = e.assets, n = e.existingAssetLicenses, r = e.format, i = e.selectedAssetSize, o = e.subscriptions, [4, Promise.all(t.map((d = (0, a.Z)(function(e) {
                                    var t, a;
                                    return (0, l.__generator)(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return t = (0, y.SS)({
                                                    asset: e
                                                }), [4, (0, b.Oo)({
                                                    asset: e,
                                                    licenseName: e.licenseId,
                                                    selectedAssetSize: i
                                                })];
                                            case 1:
                                                return a = u.sent(), [2, (0, c.Z)((0, s.Z)({}, a, t === v.tn && {
                                                    override_filename: "".concat(h.Oq, "_").concat(e.id, ".").concat(r || a.content_format)
                                                }, (0, w.f8)(e) && (0, s.Z)({
                                                    content_provider: "pixelsquid-media",
                                                    content_size: m.JF
                                                }, e.selectedFormatType === f.yI && {
                                                    include_shadows: "on" === e.selectedShadowsOption
                                                })), {
                                                    license_name: I({
                                                        existingAssetLicenses: n,
                                                        contentType: t,
                                                        licenseName: e.licenseId,
                                                        subscriptions: o
                                                    }),
                                                    show_modal: !0
                                                })]
                                        }
                                    })
                                }), function(e) {
                                    return d.apply(this, arguments)
                                })))];
                            case 1:
                                return [2, {
                                    required_cookies: "",
                                    content: u.sent()
                                }]
                        }
                    })
                }), function(e) {
                    return o.apply(this, arguments)
                }),
                T = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e && e.id && (e.title || e.description) && e.type && window.localStorage.setItem("sstk_ent_asset_preview", JSON.stringify({
                        id: e.id,
                        title: e.title || e.description,
                        thumb: e.src || e.previewImageUrl || "",
                        video: e.previewVideoUrls,
                        url: e.link,
                        type: (0, w.Tp)(e),
                        isRex: e.isRexEditorial
                    }))
                },
                k = function(e) {
                    var t;
                    return requestAnimationFrame ? function() {
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        t && cancelAnimationFrame(t), t = requestAnimationFrame(function() {
                            e.apply(void 0, (0, u.Z)(r))
                        })
                    } : e
                }
        },
        91855: function(e, t, n) {
            n.d(t, {
                z1: function() {
                    return N
                },
                ey: function() {
                    return P
                },
                jm: function() {
                    return O
                },
                cR: function() {
                    return B
                },
                IZ: function() {
                    return q
                },
                jl: function() {
                    return M
                },
                mV: function() {
                    return V
                },
                IU: function() {
                    return J
                },
                kO: function() {
                    return W
                },
                xj: function() {
                    return X
                },
                j: function() {
                    return G
                }
            });
            var r, i, o = n(47293),
                a = n(70314),
                s = n.n(a),
                c = n(98788),
                u = n(90581),
                l = n(47842),
                d = n(70865),
                p = n(96670),
                f = n(87394),
                m = n(5163),
                v = n(7297),
                h = n(71162),
                g = "application/json",
                b = s()().publicRuntimeConfig._app,
                y = (i = {}, (0, l.Z)(i, v.eJ, g), (0, l.Z)(i, v.P8, b.name), (0, l.Z)(i, v.hU, b.version), i),
                w = (0, l.Z)({
                    Accept: g
                }, v.zv, g),
                Z = (r = (0, c.Z)(function(e, t) {
                    var n, r, i, o, a, s;
                    return (0, m.__generator)(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return n = e.toString(), r = null == t ? void 0 : t.body, [4, fetch(n, (0, p.Z)((0, d.Z)({}, t), {
                                    headers: (0, d.Z)({}, y, r && (0, d.Z)({}, w), null == t ? void 0 : t.headers)
                                }))];
                            case 1:
                                o = (i = c.sent()).headers.get(v.zv), c.label = 2;
                            case 2:
                                if (c.trys.push([2, 9, , 10]), !(null == o ? void 0 : o.includes(g))) return [3, 4];
                                return [4, i.json()];
                            case 3:
                                i.data = c.sent(), c.label = 4;
                            case 4:
                                if (!(null == o ? void 0 : o.includes("text/plain"))) return [3, 6];
                                return [4, i.text()];
                            case 5:
                                i.data = c.sent(), c.label = 6;
                            case 6:
                                if (!(null == o ? void 0 : o.includes("application/pdf"))) return [3, 8];
                                return [4, i.blob()];
                            case 7:
                                i.data = c.sent(), c.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                return c.sent(), [2, i];
                            case 10:
                                var u;
                                if ((u = i.status) >= h.HO && u < h.C7) return [2, i];
                                return i.data && (s = i.data.errors, a = (0, f.Z)(s || [], 1)[0]), [2, Promise.reject(a || i)]
                        }
                    })
                }), function(e, t) {
                    return r.apply(this, arguments)
                }),
                j = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = "[object Object]",
                        r = "[object Array]",
                        i = function(e, t) {
                            return null != e ? "".concat(e, "[").concat(t, "]") : t
                        },
                        o = function(e, t, a) {
                            var s = Object.prototype.toString.call(e),
                                c = a;
                            if (void 0 === c) {
                                if (s === n) c = {};
                                else {
                                    if (s !== r) return {};
                                    c = []
                                }
                            }
                            for (var u in e)
                                if (Object.prototype.hasOwnProperty.call(e, u)) {
                                    var l = e[u];
                                    if (l) switch (Object.prototype.toString.call(l)) {
                                        case r:
                                        case n:
                                            o(l, i(t, u), c);
                                            break;
                                        default:
                                            c[i(t, u)] = l
                                    }
                                }
                            return c
                        },
                        a = Object.entries(o(e)).map(function(e) {
                            return e.join("=")
                        }).join("&");
                    return t ? encodeURIComponent(a) : a
                },
                x = function() {
                    function e(t) {
                        (0, u.Z)(this, e), this.baseUrl = t, this.deleteHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return Z(t, (0, d.Z)({
                                method: "DELETE"
                            }, n))
                        }, this.fetchHttpMethod = function(e) {
                            return Z(e.url, e.options)
                        }, this.getHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return Z(t, (0, d.Z)({
                                method: "GET"
                            }, n))
                        }, this.patchHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return Z(t, (0, d.Z)({
                                method: "PATCH"
                            }, n))
                        }, this.postHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return Z(t, (0, d.Z)({
                                method: "POST"
                            }, n))
                        }, this.putHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return Z(t, (0, d.Z)({
                                method: "PUT"
                            }, n))
                        }, this.requestInterceptors = [], this.responseInterceptors = []
                    }
                    var t = e.prototype;
                    return t.createUrlObject = function(e, t) {
                        var n = (t || {}).params,
                            r = "";
                        n && (r = j(n, !1));
                        var i = n ? "".concat(e, "?").concat(r) : e;
                        return new URL("".concat(this.baseUrl).concat(i))
                    }, t.runRequestInterceptors = function(e) {
                        return 0 === this.requestInterceptors.length ? e : this.requestInterceptors.reduce(function(e, t) {
                            return t(e)
                        }, e)
                    }, t.runResponseInterceptors = function(e) {
                        return 0 === this.responseInterceptors.length ? e : this.responseInterceptors.reduce(function(e, t) {
                            return t(e)
                        }, e)
                    }, t.get = function(e, t) {
                        var n = this;
                        return (0, c.Z)(function() {
                            var r, i, o;
                            return (0, m.__generator)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = n.createUrlObject(e, t), i = n.runRequestInterceptors({
                                            url: r,
                                            options: t
                                        }), [4, n.getHttpMethod(i)];
                                    case 1:
                                        return o = a.sent(), [2, n.runResponseInterceptors(o)]
                                }
                            })
                        })()
                    }, t.delete = function(e, t) {
                        var n = this;
                        return (0, c.Z)(function() {
                            var r, i, o, a, s;
                            return (0, m.__generator)(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return i = (r = null == t ? void 0 : t.data) ? JSON.stringify(null == t ? void 0 : t.data) : null, r && (null == t || delete t.data), o = n.createUrlObject(e, t), a = n.runRequestInterceptors({
                                            url: o,
                                            options: (0, p.Z)((0, d.Z)({}, t), {
                                                body: i
                                            })
                                        }), [4, n.deleteHttpMethod(a)];
                                    case 1:
                                        return s = c.sent(), [2, n.runResponseInterceptors(s)]
                                }
                            })
                        })()
                    }, t.fetch = function(t, n) {
                        var r = this;
                        return (0, c.Z)(function() {
                            var i, o, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return i = null == n ? void 0 : n.data, (o = n ? e.getRequestBody(i) : null) && (null == n || delete n.data), a = r.createUrlObject(t, n), s = r.runRequestInterceptors({
                                            url: a,
                                            options: (0, p.Z)((0, d.Z)({}, n), {
                                                body: o
                                            })
                                        }), [4, r.fetchHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, r.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, t.patch = function(t, n, r) {
                        var i = this;
                        return (0, c.Z)(function() {
                            var o, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (o = n || (null == r ? void 0 : r.data) ? e.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), a = i.createUrlObject(t, r), s = i.runRequestInterceptors({
                                            url: a,
                                            options: (0, p.Z)((0, d.Z)({}, r), {
                                                body: o
                                            })
                                        }), [4, i.patchHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, i.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, t.post = function(t, n, r) {
                        var i = this;
                        return (0, c.Z)(function() {
                            var o, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (o = n || (null == r ? void 0 : r.data) ? e.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), a = i.createUrlObject(t, r), s = i.runRequestInterceptors({
                                            url: a,
                                            options: (0, p.Z)((0, d.Z)({}, r), {
                                                body: o
                                            })
                                        }), [4, i.postHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, i.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, t.put = function(t, n, r) {
                        var i = this;
                        return (0, c.Z)(function() {
                            var o, a, s, c;
                            return (0, m.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (o = n || (null == r ? void 0 : r.data) ? e.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), a = i.createUrlObject(t, r), s = i.runRequestInterceptors({
                                            url: a,
                                            options: (0, p.Z)((0, d.Z)({}, r), {
                                                body: o
                                            })
                                        }), [4, i.putHttpMethod(s)];
                                    case 1:
                                        return c = u.sent(), [2, i.runResponseInterceptors(c)]
                                }
                            })
                        })()
                    }, e.getRequestBody = function(e) {
                        return e && Object.keys(e).length > 0 ? JSON.stringify(e) : null
                    }, e
                }(),
                _ = n(4842),
                z = n(74147),
                S = n(21805),
                U = n(6364),
                A = s()().publicRuntimeConfig.authSsoCookieName,
                I = function(e) {
                    var t, n = e.url,
                        r = e.options,
                        i = (null == r ? void 0 : null === (t = r.headers) || void 0 === t ? void 0 : t[v.cp]) || (0, U.Z)();
                    return {
                        url: n,
                        options: (0, p.Z)((0, d.Z)({}, r), {
                            headers: (0, p.Z)((0, d.Z)({}, null == r ? void 0 : r.headers), (0, l.Z)({}, v.cp, i))
                        })
                    }
                },
                C = function(e) {
                    401 === e.status || e.status;
                    var t, n, r = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : null === (n = t.errors) || void 0 === n ? void 0 : n[0],
                        i = null == e ? void 0 : e.data;
                    return r || i || e
                },
                T = function(e) {
                    if (!e.ok) return C(e);
                    if ("string" == typeof(null == e ? void 0 : e.data)) return e;
                    var t, n = null === (t = e.headers.get(v.zv)) || void 0 === t ? void 0 : t.includes("application/json");
                    return !new URL(e.url).pathname.startsWith(o.a) && n && (e.data = (0, z.Y)(e.data)), e
                },
                k = s()().publicRuntimeConfig.apiEndpoints,
                R = function(e) {
                    return k[e], "".concat(window.location.origin).concat(o.a)
                },
                N = new x(R("accounts")),
                P = new x(R("airtable"));
            new x(R("planning"));
            var O = new x(R("enterpriseApi")),
                L = new x(R("enterpriseApi")),
                F = new x(R("graphGateway")),
                B = new x(R("identitySettings")),
                q = new x(R("mailingApi")),
                H = new x(R(o.a)),
                M = new x(R("shutterstockBundler")),
                E = new x(R("studio"));
            new x(R("studio"));
            var V = new x(R("unityGroup")),
                J = new x(R("unityInvoice")),
                D = new x(R("userAssetsService")),
                W = new x(R("userPropertiesApi")),
                X = new x(R("visitorTracking")),
                G = {
                    postVisitorTracking: function(e, t) {
                        return X.post("/visit", e, t)
                    },
                    postReferrals: function(e, t) {
                        return X.post("/events/referral", e, t)
                    }
                };
            E.requestInterceptors.push(function(e) {
                var t, n = e.url,
                    r = e.options;
                if ((null == r ? void 0 : null === (t = r.method) || void 0 === t ? void 0 : t.toLowerCase()) === "get") {
                    var i = n.pathname.split("?")[0];
                    if (_.M.includes(i)) {
                        var o = S.Z.get(A);
                        o && "-undefined" !== o && n.searchParams.set(_.D, o)
                    }
                }
                return {
                    url: n,
                    options: r
                }
            }), [E, O, L, J, J, B].forEach(function(e) {
                return e.responseInterceptors.push(T)
            }), [N, P, O, L, F, q, H, M, E, V, J, D, X].forEach(function(e) {
                return e.requestInterceptors.push(I)
            })
        }
    }
]);
//# sourceMappingURL=47131.4e7735a28563dcfe.js.map