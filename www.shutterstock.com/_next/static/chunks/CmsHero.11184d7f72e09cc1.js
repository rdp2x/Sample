"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90074, 88680], {
        74293: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return i
                }
            });
            var i = (0, n(8740).ZL)()(function(e) {
                var t = e.tokens,
                    n = t.spacing,
                    i = t.color,
                    o = t.lineHeight;
                return {
                    caption: {
                        margin: "".concat(n.l, " 0"),
                        fontWeight: "bolder",
                        fontStyle: "normal",
                        fontSize: "2.5rem",
                        lineHeight: o.m
                    },
                    captionBottom: {
                        lineHeight: o.m,
                        fontWeight: "bolder",
                        margin: "".concat(n.m, " 0")
                    },
                    text: {
                        fontWeight: "700",
                        fontSize: "1.125rem",
                        a: {
                            color: i.blue.azure,
                            ":hover": {
                                textDecoration: "underline"
                            }
                        }
                    },
                    image: {
                        width: "100%",
                        maxWidth: "575px"
                    },
                    list: {
                        paddingInlineStart: n.s
                    },
                    listItem: {
                        listStylePosition: "inside",
                        span: {
                            marginLeft: "-2px",
                            verticalAlign: "-3px"
                        },
                        "::marker": {
                            fontSize: "0.625rem",
                            marginTop: "-3px"
                        }
                    },
                    root: {
                        marginBottom: n.l
                    }
                }
            })
        },
        15907: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return l
                }
            });
            var i = n(52322),
                o = n(9390),
                a = n(75),
                r = n(59877),
                s = n(74293),
                c = n(54652),
                l = function() {
                    var e = (0, s.y)(),
                        t = e.classes,
                        n = e.cx,
                        l = (0, r.$G)(a.WmD).t,
                        d = {
                            caption: l("design-tool-callout:caption"),
                            descriptionTitle: l("design-tool-callout:description-title"),
                            descriptionGeneral: l("design-tool-callout:description-general"),
                            startDesigning: l("design-tool-callout:start-designing")
                        },
                        m = (0, i.jsxs)("ul", {
                            className: t.list,
                            children: [(0, i.jsx)("li", {
                                className: n(t.text, t.listItem),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)(r.cC, {
                                        i18nKey: "design-tool-callout:smart-resize",
                                        t: l,
                                        components: {
                                            a: (0, i.jsx)(o.r, {
                                                labelTrack: "smartResize",
                                                href: "/create/home"
                                            })
                                        }
                                    })
                                })
                            }), (0, i.jsx)("li", {
                                className: n(t.text, t.listItem),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)(r.cC, {
                                        i18nKey: "design-tool-callout:font-pairings",
                                        t: l,
                                        components: {
                                            a: (0, i.jsx)(o.r, {
                                                labelTrack: "fontPairing",
                                                href: "/create/go/photos?tool=text"
                                            })
                                        }
                                    })
                                })
                            }), (0, i.jsx)("li", {
                                className: n(t.text, t.listItem),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)(r.cC, {
                                        i18nKey: "design-tool-callout:remove-background",
                                        t: l,
                                        components: {
                                            a: (0, i.jsx)(o.r, {
                                                labelTrack: "removeBackground",
                                                href: "/explore/background-remover"
                                            })
                                        }
                                    })
                                })
                            })]
                        });
                    return (0, c.Y)(t, d, m)
                }
        },
        54652: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return l
                }
            });
            var i = n(52322),
                o = n(78675),
                a = n(62197),
                r = n(41075),
                s = n(47999),
                c = n(776),
                l = function(e, t, n) {
                    return (0, i.jsx)(c.Mp, {
                        value: "designTools",
                        children: (0, i.jsxs)(o.Z, {
                            className: e.root,
                            children: [(0, i.jsx)(a.Z, {
                                component: "h2",
                                className: e.caption,
                                align: "center",
                                children: t.caption
                            }), (0, i.jsxs)(r.ZP, {
                                container: !0,
                                justifyContent: "space-around",
                                alignItems: "center",
                                spacing: 4,
                                children: [(0, i.jsx)(r.ZP, {
                                    item: !0,
                                    md: 7,
                                    lg: 6,
                                    children: (0, i.jsx)("img", {
                                        className: e.image,
                                        src: "/assets/images/design_callout.jpg",
                                        alt: "Design tool"
                                    })
                                }, "callout"), (0, i.jsxs)(r.ZP, {
                                    item: !0,
                                    xs: 12,
                                    sm: 9,
                                    md: 5,
                                    lg: 6,
                                    children: [(0, i.jsx)(a.Z, {
                                        component: "h3",
                                        variant: "h4",
                                        className: e.captionBottom,
                                        align: "left",
                                        children: t.descriptionTitle
                                    }), (0, i.jsx)("span", {
                                        className: e.text,
                                        children: t.descriptionGeneral
                                    }), n, (0, i.jsx)(s.z, {
                                        variant: "outlined",
                                        labelTrack: "startDesigning",
                                        href: "/create/home",
                                        size: "large",
                                        children: t.startDesigning
                                    })]
                                }, "callout_description")]
                            })]
                        })
                    })
                }
        },
        36616: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var i = n(2784),
                o = n(82008),
                a = function() {
                    return (0, i.useContext)(o.D)
                }
        },
        37925: function(e, t, n) {
            n.r(t), n.d(t, {
                ExperimentFACT432: function() {
                    return er
                },
                SkeletonLoader: function() {
                    return ea
                },
                experimentConfig: function() {
                    return eo
                }
            });
            var i, o = n(52322),
                a = n(62021),
                r = n(70865),
                s = n(67550),
                c = n(78675),
                l = n(62197),
                d = n(1129),
                m = n(47999),
                h = n(66358),
                u = n(6620),
                g = (0, u.Z)((0, o.jsx)("path", {
                    d: "m80,66c0,1.09985-.8999,2-2,2h-10v10c0,1.09985-.8999,2-2,2s-2-.90015-2-2v-10h-10c-1.1001,0-2-.90015-2-2,0-1.1001.8999-2,2-2h10v-10c0-1.1001.8999-2,2-2s2,.8999,2,2v10h10c1.1001,0,2,.8999,2,2Zm-8-50H24c-4.41821,0-8,3.58179-8,8v48c0,4.41821,3.58179,8,8,8h26c1.10449,0,2-.89551,2-2,0-1.10474-.89551-2-2-2h-26c-2.20557,0-4-1.79443-4-4V24c0-2.20557,1.79443-4,4-4h48c2.20557,0,4,1.79443,4,4v26c0,1.10449.89551,2,2,2s2-.89551,2-2v-26c0-4.41821-3.58179-8-8-8Zm-36,16c0-2.20923-1.79077-4-4-4-2.20898,0-4,1.79077-4,4,0,2.20898,1.79102,4,4,4,2.20923,0,4-1.79102,4-4Zm-11.62695,27.16406c.39062.54688,1.00391.83594,1.62891.83594.40234,0,.80859-.12109,1.16016-.37109l26.62109-19.01562,6.80273,6.80078c.78125.78125,2.04688.78125,2.82812,0s.78125-2.04688,0-2.82812l-8-8c-.69336-.69141-1.78516-.78516-2.57617-.21484l-28,20c-.89844.64453-1.10742,1.89062-.46484,2.79297Z"
                }), "AddImage.svg"),
                p = function(e) {
                    return (0, o.jsx)(g, (0, r.Z)({
                        viewBox: "0 0 96 96"
                    }, e))
                },
                x = n(8658),
                f = (0, u.Z)((0, o.jsx)("path", {
                    d: "m30.58594,45.41406c-.78125-.78125-.78125-2.04688,0-2.82812s2.04688-.78125,2.82812,0l12.58594,12.58594V20c0-1.10474.89551-2,2-2s2,.89526,2,2v35.17188l12.58594-12.58594c.78125-.78125,2.04688-.78125,2.82812,0s.78125,2.04688,0,2.82812l-16,16c-.39062.39062-.90234.58594-1.41406.58594s-1.02344-.19531-1.41406-.58594l-16-16Zm45.41406,8.58594c-1.10449,0-2,.89526-2,2v14c0,2.20557-1.79443,4-4,4H26c-2.20557,0-4-1.79443-4-4v-14c0-1.10474-.89551-2-2-2s-2,.89526-2,2v14c0,4.41821,3.58179,8,8,8h44c4.41821,0,8-3.58179,8-8v-14c0-1.10474-.89551-2-2-2Z"
                }), "Download96.svg"),
                b = function(e) {
                    return (0, o.jsx)(f, (0, r.Z)({
                        viewBox: "0 0 96 96"
                    }, e))
                },
                v = n(54544),
                y = n(80430),
                j = n(88680),
                Z = (0, u.Z)((0, o.jsx)("path", {
                    xmlns: "http://www.w3.org/2000/svg",
                    d: "m72,16H24c-4.41821,0-8,3.58154-8,8v48c0,4.41821,3.58179,8,8,8h48c4.41821,0,8-3.58179,8-8V24c0-4.41846-3.58179-8-8-8Zm4,56c0,2.20557-1.79443,4-4,4H24c-2.20557,0-4-1.79443-4-4V24c0-2.20557,1.79443-4,4-4h48c2.20557,0,4,1.79443,4,4v48Zm-48-4h40L28,28v40Zm4-30.34326l26.34302,26.34326h-26.34302v-26.34326Zm23.93311-3.65674c0-3.31372,2.68628-6,6-6s6,2.68628,6,6c0,3.31348-2.68628,5.99976-6,5.99976s-6-2.68628-6-5.99976Z"
                }), "Templates96.svg"),
                w = function(e) {
                    return (0, o.jsx)(Z, (0, r.Z)({
                        viewBox: "0 0 96 96"
                    }, e))
                },
                k = (0, u.Z)((0, o.jsx)("path", {
                    d: "M26.97 48H31.5C31.8978 48 32.2794 48.158 32.5607 48.4393C32.842 48.7206 33 49.1022 33 49.5C33 49.8978 32.842 50.2794 32.5607 50.5607C32.2794 50.842 31.8978 51 31.5 51H19.5C19.1022 51 18.7206 50.842 18.4393 50.5607C18.158 50.2794 18 49.8978 18 49.5C18 49.1022 18.158 48.7206 18.4393 48.4393C18.7206 48.158 19.1022 48 19.5 48H23.97V12H8.97V16.5C8.97008 16.8927 8.81617 17.2697 8.54132 17.5502C8.26647 17.8307 7.8926 17.9921 7.5 18C7.10218 18 6.72064 17.842 6.43934 17.5607C6.15804 17.2794 6 16.8978 6 16.5V10.5C6 10.1022 6.15804 9.72064 6.43934 9.43934C6.72064 9.15804 7.10218 9 7.5 9H43.47C43.8678 9 44.2494 9.15804 44.5307 9.43934C44.812 9.72064 44.97 10.1022 44.97 10.5V16.5C44.97 16.8978 44.812 17.2794 44.5307 17.5607C44.2494 17.842 43.8678 18 43.47 18C43.0722 18 42.6906 17.842 42.4093 17.5607C42.128 17.2794 41.97 16.8978 41.97 16.5V12H26.97V48ZM34.5 27H52.5C52.8926 27.0079 53.2665 27.1693 53.5413 27.4498C53.8162 27.7303 53.9701 28.1073 53.97 28.5V31.5C53.97 31.8978 53.812 32.2794 53.5307 32.5607C53.2494 32.842 52.8678 33 52.47 33C52.0722 33 51.6906 32.842 51.4093 32.5607C51.128 32.2794 50.97 31.8978 50.97 31.5V30H44.97V48H46.5C46.8978 48 47.2794 48.158 47.5607 48.4393C47.842 48.7206 48 49.1022 48 49.5C48 49.8978 47.842 50.2794 47.5607 50.5607C47.2794 50.842 46.8978 51 46.5 51H40.5C40.1022 51 39.7206 50.842 39.4393 50.5607C39.158 50.2794 39 49.8978 39 49.5C39 49.1022 39.158 48.7206 39.4393 48.4393C39.7206 48.158 40.1022 48 40.5 48H42V30H36V31.5C36 31.8978 35.842 32.2794 35.5607 32.5607C35.2794 32.842 34.8978 33 34.5 33C34.1022 33 33.7206 32.842 33.4393 32.5607C33.158 32.2794 33 31.8978 33 31.5V28.5C33 28.1022 33.158 27.7206 33.4393 27.4393C33.7206 27.158 34.1022 27 34.5 27Z"
                }), "TextStyle.svg"),
                C = function(e) {
                    return (0, o.jsx)(k, (0, r.Z)({
                        viewBox: "0 0 60 60"
                    }, e))
                },
                _ = n(776),
                T = n(75),
                I = n(59877),
                B = n(72474),
                S = {
                    UPLOAD_IMAGE: "uploadImage",
                    TRY_ME_IMAGES: "tryMeImages"
                },
                N = n(87394),
                R = n(23119),
                P = n(96758),
                H = n(52616),
                A = n(61640),
                z = n(2784),
                D = n(47842),
                L = (0, n(8740).ZL)()(function(e) {
                    var t, n, i, o, a, r, s = e.breakpoints,
                        c = e.palette,
                        l = e.tokens,
                        d = l.radius,
                        m = l.spacing,
                        h = l.font,
                        u = l.color,
                        g = l.opacity;
                    return {
                        container: (0, D.Z)({
                            padding: "".concat(m.xl, " ").concat(m.base, " 0"),
                            margin: "0 -".concat(m.base),
                            overflowX: "hidden"
                        }, s.up("sm"), {
                            margin: "0 -".concat(m.m)
                        }),
                        breadcrumbs: (0, D.Z)({
                            display: "none"
                        }, s.up("md"), {
                            display: "block"
                        }),
                        ctaContainer: {
                            width: "100%",
                            backgroundColor: u.lightBlueBackground,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        casesSectionContainer: {
                            width: "100%",
                            backgroundColor: c.grey.A100,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        sectionPadding: {
                            padding: "".concat(m.l, " ").concat(m.l)
                        },
                        sectionContainer: (0, D.Z)({}, s.up("md"), {
                            display: "flex"
                        }),
                        iconSectionContainer: (0, D.Z)({}, s.up("md"), {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }),
                        sectionMargin: (0, D.Z)({
                            marginTop: m.m
                        }, s.up("md"), {
                            marginTop: m.xl
                        }),
                        backgroundRemoverSectionMargin: {
                            marginBottom: m.l
                        },
                        sectionHeaderText: (0, D.Z)({
                            fontWeight: h.weight.bold,
                            fontSize: h.size.xxl,
                            marginTop: m.s
                        }, s.up("md"), {
                            fontSize: h.size["3xl"]
                        }),
                        sectionBodyText: {
                            fontWeight: h.weight.normal,
                            fontSize: h.size.m
                        },
                        imageContainer: (t = {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "".concat(m.s, " ").concat(m.m)
                        }, (0, D.Z)(t, s.up("xs"), {
                            width: "230px"
                        }), (0, D.Z)(t, s.up("sm"), {
                            width: "400px"
                        }), t),
                        previewRadios: {
                            marginTop: m.xs,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                        },
                        uploadButton: (0, D.Z)({
                            marginBottom: m.m
                        }, s.up("md"), {
                            marginRight: m.base,
                            marginBottom: "initial"
                        }),
                        tryCreateButton: {
                            width: "280px"
                        },
                        tryCreateButtonContainer: {
                            marginTop: m.l,
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center"
                        },
                        ctaBannerContainer: {
                            margin: "0 -".concat(m.m)
                        },
                        linkSectionContainer: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        discoverFeaturesHeader: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        creativeFlowImage: {
                            height: "17px",
                            width: "219px",
                            marginBottom: "".concat(m.s)
                        },
                        uploadImage: (n = {
                            margin: "".concat(m.s, " 0 ").concat(m.m)
                        }, (0, D.Z)(n, s.up("sm"), {
                            minWidth: "415px"
                        }), (0, D.Z)(n, s.up("md"), {
                            margin: "".concat(m.l, " 0 ").concat(m.xxl)
                        }), n),
                        title: (0, D.Z)({
                            marginBottom: m.s,
                            fontSize: h.size["3xl"]
                        }, s.up("md"), {
                            fontSize: h.size["4xl"]
                        }),
                        subTitle: (0, D.Z)({
                            marginBottom: m.l,
                            fontWeight: h.weight.normal,
                            fontSize: h.size.l
                        }, s.up("md"), {
                            fontSize: h.size.xl
                        }),
                        subTitleMargin: {
                            margin: "".concat(m.s, " 0")
                        },
                        trySampleContainer: (0, D.Z)({
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "row",
                            alignItems: "start"
                        }, s.up("sm"), {
                            width: "415px"
                        }),
                        trySampleText: (0, D.Z)({
                            fontWeight: h.weight.bold,
                            fontSize: h.size.s
                        }, s.up("md"), {
                            fontSize: h.size.m
                        }),
                        trySampleThumbnail: {
                            borderRadius: d.s,
                            height: "60px",
                            width: "60px",
                            background: u.gray.slate,
                            "&:hover": {
                                cursor: "pointer"
                            },
                            objectFit: "cover"
                        },
                        bgPreviewImage: (i = {
                            borderRadius: m.s,
                            objectFit: "contain"
                        }, (0, D.Z)(i, s.up("xs"), {
                            height: "230px"
                        }), (0, D.Z)(i, s.up("sm"), {
                            height: "350px"
                        }), i),
                        leftColumn: (o = {}, (0, D.Z)(o, s.up("sm"), {
                            paddingRight: m.base
                        }), (0, D.Z)(o, s.up("md"), {
                            paddingRight: m.xl,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minWidth: "55%"
                        }), o),
                        rightColumn: {
                            minWidth: "45%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        buttonsContainer: (a = {
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column"
                        }, (0, D.Z)(a, s.up("sm"), {
                            textAlign: "left",
                            display: "block",
                            flexDirection: "initial"
                        }), (0, D.Z)(a, s.up("md"), {
                            marginBottom: "initial"
                        }), a),
                        bodyText: {
                            maxWidth: "425px"
                        },
                        casesImageContainer: {
                            marginTop: m.m,
                            display: "flex",
                            flexDirection: "column"
                        },
                        image: {
                            height: "200px"
                        },
                        imageTitle: {
                            fontSize: h.size.l,
                            fontWeight: h.weight.bold
                        },
                        centeredContent: (0, D.Z)({
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "start"
                        }, s.up("md"), {
                            marginLeft: m.l
                        }),
                        headerText: (0, D.Z)({
                            fontWeight: h.weight.bold,
                            fontSize: h.size.xxl,
                            margin: "".concat(m.xs, " 0")
                        }, s.up("md"), {
                            fontSize: h.size["3xl"],
                            marginBottom: m.s
                        }),
                        logoButtonContainer: (0, D.Z)({
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: m.base,
                            marginTop: m.m
                        }, s.up("md"), {
                            marginTop: m.xxl
                        }),
                        sectionColumn: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minWidth: "50%"
                        },
                        iconsContainer: (0, D.Z)({}, s.up("md"), {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }),
                        icon: {
                            display: "flex",
                            fontSize: h.size["5xl"],
                            justifyContent: "center",
                            marginBottom: m.s
                        },
                        textContainer: (0, D.Z)({
                            padding: "0 32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }, s.down("sm"), {
                            padding: "0 8px"
                        }),
                        uploadBox: (r = {
                            margin: "".concat(m.l, " 0"),
                            borderRadius: "16px",
                            backgroundColor: u.white,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "280px",
                            height: "200px"
                        }, (0, D.Z)(r, s.up("sm"), {
                            width: "500px",
                            height: "200px"
                        }), (0, D.Z)(r, s.up("md"), {
                            height: "300px",
                            width: "700px",
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='27%2c 27%2c 27%2c 27' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")"
                        }), r),
                        uploadCtaImage: (0, D.Z)({
                            margin: "".concat(m.m, " 0")
                        }, s.down("sm"), {
                            maxWidth: "260px"
                        }),
                        textLink: {
                            color: c.info.main,
                            textDecoration: "underline"
                        },
                        linkItemContainer: {
                            display: "flex",
                            flexDirection: "row"
                        },
                        linkItemTextMargin: {
                            marginTop: m.s
                        },
                        boldText: {
                            fontWeight: h.weight.bold
                        },
                        wrapper: {
                            position: "relative",
                            zIndex: 1,
                            height: "fit-content"
                        },
                        overlay: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 3,
                            background: "transparent",
                            borderRadius: d.m,
                            "&:hover": {
                                background: "rgba(0, 0, 0, ".concat(g["20"], ")")
                            }
                        },
                        linkImage: {
                            objectFit: "fill",
                            borderRadius: d.m,
                            width: "100%",
                            display: "block"
                        }
                    }
                }),
                W = "background-remover-preview",
                M = "/assets/images/background-remover-page/removeBg-video-2.mp4",
                G = "Original",
                F = "BackgroundRemoved",
                E = function() {
                    var e = (0, N.Z)((0, z.useState)(M), 2),
                        t = e[0],
                        n = e[1],
                        i = (0, N.Z)((0, z.useState)(F), 2),
                        a = i[0],
                        r = i[1],
                        d = L(),
                        h = d.classes,
                        u = d.cx,
                        g = (0, I.$G)([T.k0u, T.NRe, T.PeY]).t,
                        p = (0, _.wU)(),
                        x = (0, _.yh)().analytics,
                        f = function(e) {
                            setTimeout(function() {
                                return n(e)
                            }, 60), r(F), x.inlineClick("".concat(p, ".").concat(S.TRY_ME_IMAGES))
                        },
                        b = function(e) {
                            return (0, o.jsx)(s.Z, {
                                component: "img",
                                className: h.trySampleThumbnail,
                                src: e,
                                alt: W,
                                onClick: function() {
                                    return f("".concat(e.substring(0, e.indexOf(".webp")), "_rm.webp"))
                                }
                            })
                        },
                        v = function() {
                            return t === M
                        };
                    return (0, o.jsxs)(c.Z, {
                        maxWidth: "lg",
                        className: u(h.sectionContainer, h.backgroundRemoverSectionMargin),
                        children: [(0, o.jsxs)(s.Z, {
                            className: h.leftColumn,
                            children: [(0, o.jsx)("img", {
                                className: h.creativeFlowImage,
                                src: "/assets/images/background-remover-page/shutterstock_creative_flow.webp",
                                alt: W
                            }), (0, o.jsx)(l.Z, {
                                variant: "h3",
                                className: h.title,
                                children: (0, o.jsx)(I.cC, {
                                    ns: T.k0u,
                                    i18nKey: "1_click_bg_remover",
                                    components: {
                                        strong: (0, o.jsx)("strong", {}),
                                        br: (0, o.jsx)("br", {})
                                    },
                                    t: g
                                })
                            }), (0, o.jsx)(l.Z, {
                                variant: "h6",
                                className: u(h.subTitle, h.subTitleMargin),
                                children: (0, o.jsx)(I.cC, {
                                    ns: T.k0u,
                                    i18nKey: "remove_background_fast",
                                    components: {
                                        span: (0, o.jsx)("span", {}),
                                        a: (0, o.jsx)(R.Z, {
                                            className: h.textLink,
                                            href: "https://www.shutterstock.com/create/editor"
                                        })
                                    },
                                    t: g
                                })
                            }), (0, o.jsxs)(s.Z, {
                                className: h.buttonsContainer,
                                children: [(0, o.jsx)(m.z, {
                                    size: "large",
                                    variant: "contained",
                                    href: "https://www.shutterstock.com/create/editor",
                                    color: "secondary",
                                    disableRipple: !0,
                                    disableTouchRipple: !0,
                                    className: u(h.uploadButton, h.uploadImage),
                                    clickTrack: "".concat(p, ".").concat(S.UPLOAD_IMAGE),
                                    children: g("".concat(T.NRe, "::upload_an_image"))
                                }), (0, o.jsxs)(s.Z, {
                                    className: h.trySampleContainer,
                                    children: [(0, o.jsx)(l.Z, {
                                        variant: "body1",
                                        className: h.trySampleText,
                                        children: g("".concat(T.NRe, "::try_a_sample"))
                                    }), b("/assets/images/background-remover-page/Shutterstock_2136448507.webp"), b("/assets/images/background-remover-page/Shutterstock_2028085574.webp"), b("/assets/images/background-remover-page/Shutterstock_265147070.webp")]
                                })]
                            })]
                        }), (0, o.jsx)(s.Z, {
                            className: h.rightColumn,
                            children: (0, o.jsxs)(s.Z, {
                                className: h.imageContainer,
                                children: [v() ? (0, o.jsx)("video", {
                                    className: h.bgPreviewImage,
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    loop: !0,
                                    children: (0, o.jsx)("source", {
                                        src: M,
                                        type: "video/mp4"
                                    })
                                }) : (0, o.jsx)(s.Z, {
                                    component: "img",
                                    className: h.bgPreviewImage,
                                    src: t,
                                    alt: W
                                }), v() ? null : (0, o.jsxs)(P.Z, {
                                    className: h.previewRadios,
                                    value: a,
                                    onChange: function(e) {
                                        var i = e.target.value;
                                        i !== a && (r(i), n(i === G ? "".concat(t.substring(0, t.indexOf("_rm")), ".webp") : "".concat(t.substring(0, t.indexOf(".webp")), "_rm.webp")))
                                    },
                                    row: !0,
                                    children: [(0, o.jsx)(H.Z, {
                                        value: G,
                                        control: (0, o.jsx)(A.Z, {}),
                                        label: g("".concat(T.PeY, "::filter_original"))
                                    }), (0, o.jsx)(H.Z, {
                                        value: F,
                                        control: (0, o.jsx)(A.Z, {}),
                                        label: g("background_removed")
                                    })]
                                })]
                            })
                        })]
                    })
                },
                V = n(41075),
                O = function(e) {
                    var t = e.url,
                        n = e.title,
                        i = L().classes;
                    return (0, o.jsx)(V.ZP, {
                        item: !0,
                        justifyContent: "center",
                        alignContent: "center",
                        children: (0, o.jsxs)(s.Z, {
                            className: i.casesImageContainer,
                            children: [(0, o.jsx)("img", {
                                className: i.image,
                                src: t,
                                alt: "background-removal-use-case"
                            }), (0, o.jsx)(l.Z, {
                                variant: "body1",
                                align: "center",
                                className: i.imageTitle,
                                children: n
                            })]
                        })
                    })
                },
                Y = function() {
                    var e = L(),
                        t = e.classes,
                        n = e.cx,
                        i = (0, I.$G)([T.k0u]).t;
                    return (0, o.jsxs)(s.Z, {
                        className: n(t.casesSectionContainer, t.sectionPadding),
                        children: [(0, o.jsx)(l.Z, {
                            variant: "h6",
                            className: t.headerText,
                            align: "center",
                            children: i("use_cases")
                        }), (0, o.jsx)(s.Z, {
                            className: t.bodyText,
                            children: (0, o.jsx)(l.Z, {
                                variant: "body1",
                                align: "center",
                                className: t.sectionBodyText,
                                children: i("use_cases_copy")
                            })
                        }), (0, o.jsxs)(V.ZP, {
                            container: !0,
                            justifyContent: "center",
                            alignContent: "center",
                            spacing: {
                                xs: 2,
                                md: 9
                            },
                            children: [(0, o.jsx)(O, {
                                url: "/assets/images/background-remover-page/original_image.webp",
                                title: i("original_image")
                            }), (0, o.jsx)(O, {
                                url: "/assets/images/background-remover-page/create_profile_pic_image.webp",
                                title: i("create_profile_pics")
                            }), (0, o.jsx)(O, {
                                url: "/assets/images/background-remover-page/replace_backgound_image.webp",
                                title: i("replace_background")
                            })]
                        })]
                    })
                },
                U = function(e) {
                    var t = e.iconProps,
                        n = L(),
                        i = n.classes,
                        a = n.cx,
                        r = (0, I.$G)(t.filter(function(e) {
                            return void 0 !== e.linkTransNamespace
                        }).map(function(e) {
                            return e.linkTransNamespace
                        })).t;
                    return (0, o.jsx)(c.Z, {
                        maxWidth: "lg",
                        className: a(i.iconsContainer, i.sectionMargin),
                        children: (0, o.jsx)(V.ZP, {
                            container: !0,
                            justifyContent: "space-around",
                            alignContent: "space-around",
                            spacing: 4,
                            children: t.map(function(e) {
                                return (0, o.jsxs)(V.ZP, {
                                    item: !0,
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                    justifyContent: "center",
                                    children: [(0, o.jsx)(s.Z, {
                                        className: i.icon,
                                        children: e.icon
                                    }), (0, o.jsxs)(s.Z, {
                                        className: i.textContainer,
                                        children: [(0, o.jsx)(l.Z, {
                                            variant: "h5",
                                            component: "p",
                                            align: "center",
                                            justifyContent: "center",
                                            children: e.title
                                        }), (0, o.jsx)(l.Z, {
                                            color: "textSecondary",
                                            variant: "body2",
                                            align: "center",
                                            justifyContent: "center",
                                            children: e.linkTransKey && e.linkTransNamespace && e.linkHref ? (0, o.jsx)(I.cC, {
                                                ns: e.linkTransNamespace,
                                                i18nKey: e.linkTransKey,
                                                components: {
                                                    span: (0, o.jsx)("span", {}),
                                                    a: (0, o.jsx)(R.Z, {
                                                        className: i.textLink,
                                                        href: e.linkHref
                                                    })
                                                },
                                                t: r
                                            }) : e.copy
                                        })]
                                    })]
                                }, e.title)
                            })
                        })
                    })
                },
                K = function(e) {
                    var t = e.imageLinkData,
                        n = L(),
                        i = n.classes,
                        a = n.cx,
                        r = (0, I.$G)([T.k0u]).t;
                    return (0, o.jsxs)(c.Z, {
                        maxWidth: "lg",
                        className: a(i.linkSectionContainer, i.sectionMargin),
                        children: [(0, o.jsx)(l.Z, {
                            variant: "h6",
                            className: i.sectionHeaderText,
                            children: r("background_remover_tips")
                        }), (0, o.jsx)(s.Z, {
                            children: (0, o.jsx)(V.ZP, {
                                container: !0,
                                spacing: 4,
                                className: i.linkItemContainer,
                                children: t.map(function(e) {
                                    return (0, o.jsxs)(V.ZP, {
                                        item: !0,
                                        xs: 12,
                                        sm: 6,
                                        md: 4,
                                        children: [(0, o.jsx)(R.Z, {
                                            href: e.href,
                                            children: (0, o.jsxs)(s.Z, {
                                                className: i.wrapper,
                                                children: [(0, o.jsx)("img", {
                                                    src: e.image,
                                                    alt: "background-remover-blog-link",
                                                    className: i.linkImage
                                                }), (0, o.jsx)("span", {
                                                    className: i.overlay
                                                })]
                                            })
                                        }), (0, o.jsx)(l.Z, {
                                            variant: "body1",
                                            className: a(i.sectionBodyText, i.boldText, i.linkItemTextMargin),
                                            children: e.title
                                        }), (0, o.jsx)(l.Z, {
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: e.subtitle
                                        })]
                                    }, e.title)
                                })
                            })
                        })]
                    })
                },
                q = function() {
                    var e = L(),
                        t = e.classes,
                        n = e.cx,
                        i = (0, I.$G)([T.k0u]).t;
                    return (0, o.jsx)(s.Z, {
                        className: n(t.ctaContainer, t.sectionPadding),
                        children: (0, o.jsxs)(c.Z, {
                            maxWidth: "lg",
                            className: t.sectionContainer,
                            children: [(0, o.jsxs)(s.Z, {
                                className: n(t.sectionColumn, t.centeredContent),
                                children: [(0, o.jsx)(l.Z, {
                                    variant: "h6",
                                    className: t.headerText,
                                    children: i("standout_logo")
                                }), (0, o.jsx)(s.Z, {
                                    className: t.bodyText,
                                    children: (0, o.jsx)(l.Z, {
                                        variant: "body1",
                                        className: t.sectionBodyText,
                                        children: i("standout_logo_copy")
                                    })
                                }), (0, o.jsx)(s.Z, {
                                    className: t.logoButtonContainer,
                                    children: (0, o.jsx)(m.z, {
                                        component: "a",
                                        role: "link",
                                        size: "large",
                                        variant: "contained",
                                        href: "https://www.shutterstock.com/create/editor",
                                        color: "secondary",
                                        disableRipple: !0,
                                        disableTouchRipple: !0,
                                        className: t.uploadButton,
                                        children: i("upload_your_logo")
                                    })
                                })]
                            }), (0, o.jsx)(s.Z, {
                                className: t.sectionColumn,
                                children: (0, o.jsx)(s.Z, {
                                    className: t.casesImageContainer,
                                    children: (0, o.jsx)("img", {
                                        src: "/assets/images/background-remover-page/logo_before_and_after.webp",
                                        alt: "background-removal-use-case"
                                    })
                                })
                            })]
                        })
                    })
                },
                $ = function() {
                    var e = L(),
                        t = e.classes,
                        n = e.cx,
                        i = (0, I.$G)([T.k0u, T.NRe]).t;
                    return (0, o.jsxs)(s.Z, {
                        className: n(t.ctaContainer, t.sectionPadding),
                        children: [(0, o.jsx)(l.Z, {
                            variant: "h6",
                            className: t.sectionHeaderText,
                            children: i("try_background_remover")
                        }), (0, o.jsx)(s.Z, {
                            className: t.buttonsContainer,
                            children: (0, o.jsx)(m.z, {
                                component: "a",
                                role: "link",
                                size: "large",
                                variant: "contained",
                                href: "https://www.shutterstock.com/create/editor",
                                color: "secondary",
                                disableRipple: !0,
                                disableTouchRipple: !0,
                                className: n(t.uploadButton, t.uploadCtaImage),
                                children: i("".concat(T.NRe, "::upload_an_image"))
                            })
                        })]
                    })
                },
                Q = function() {
                    var e = L(),
                        t = e.classes,
                        n = e.cx,
                        i = (0, I.$G)([T.k0u, T.m7X, T.aGO, T.Go4, T.Lg7, T.Cgc, T.wdp]).t,
                        a = (0, _.wU)(),
                        r = [{
                            title: i("choose_your_image"),
                            copy: i("choose_your_image_copy"),
                            icon: (0, o.jsx)(p, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("remove_background"),
                            copy: i("remove_background_copy"),
                            icon: (0, o.jsx)(y.U, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("".concat(T.Cgc, "::common:actions_download")),
                            copy: i("download_copy"),
                            icon: (0, o.jsx)(b, {
                                fontSize: "inherit"
                            }),
                            linkTransKey: "download_copy",
                            linkTransNamespace: T.k0u,
                            linkHref: "https://www.shutterstock.com/create"
                        }],
                        u = [{
                            title: i("edit_your_photos"),
                            copy: i("edit_your_photos_copy"),
                            icon: (0, o.jsx)(v.I, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("resize_images"),
                            copy: i("resize_images_copy"),
                            icon: (0, o.jsx)(j.SmartResizeCms, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("replace_background"),
                            copy: i("choose_your_image_copy"),
                            icon: (0, o.jsx)(y.U, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("add_animations"),
                            copy: i("add_animations_copy"),
                            icon: (0, o.jsx)(x.r, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("add_text_styles"),
                            copy: i("add_text_styles_copy"),
                            icon: (0, o.jsx)(C, {
                                fontSize: "inherit"
                            })
                        }, {
                            title: i("start_with_a_template"),
                            copy: i("start_with_a_template_copy"),
                            icon: (0, o.jsx)(w, {
                                fontSize: "inherit"
                            })
                        }],
                        g = [{
                            title: i("".concat(T.Go4, "::site-header:background_remover"))
                        }, {
                            title: i("".concat(T.Go4, "::common:links_design_tools")),
                            href: "/image-resizer"
                        }, {
                            title: i("".concat(T.aGO, "::common:links_creative_flow")),
                            href: "/creative-flow"
                        }, {
                            title: i("".concat(T.Lg7, "::audience:home")),
                            href: "/"
                        }],
                        f = [{
                            href: "https://www.shutterstock.com/blog/how-to-remove-backgrounds-in-photos",
                            title: i("how_to_remove_background"),
                            subtitle: i("how_to_remove_background_copy"),
                            image: "/assets/images/background-remover-page/cutting_a_background_create_cover.webp"
                        }, {
                            href: "https://www.shutterstock.com/blog/background-designs",
                            title: i("create_your_own_designs"),
                            subtitle: i("create_your_own_designs_copy"),
                            image: "/assets/images/background-remover-page/stylish_background_create_cover1.webp"
                        }, {
                            href: "https://www.shutterstock.com/blog/background-remover-inspiration-and-ideas",
                            title: i("great_looks"),
                            subtitle: i("great_looks_copy"),
                            image: "/assets/images/background-remover-page/background_remover_create_cover.webp"
                        }];
                    return (0, o.jsxs)(s.Z, {
                        children: [(0, o.jsx)(B.B, {
                            title: i("remove_background_meta_title"),
                            description: i("remove_background_meta_description")
                        }), (0, o.jsxs)(_.Mp, {
                            value: h.HP0,
                            children: [(0, o.jsx)(s.Z, {
                                my: 3,
                                className: t.breadcrumbs,
                                children: (0, o.jsx)(d.CmsBreadcrumbs, {
                                    breadcrumbs: g,
                                    ariaLabel: void 0
                                })
                            }), (0, o.jsxs)(s.Z, {
                                className: t.container,
                                children: [(0, o.jsx)(E, {}), (0, o.jsx)(s.Z, {
                                    className: t.ctaBannerContainer,
                                    children: (0, o.jsx)(Y, {})
                                }), (0, o.jsx)(s.Z, {
                                    className: t.ctaBannerContainer,
                                    children: (0, o.jsx)(q, {})
                                }), (0, o.jsxs)(c.Z, {
                                    maxWidth: "lg",
                                    className: n(t.iconSectionContainer, t.sectionMargin),
                                    children: [(0, o.jsx)(l.Z, {
                                        variant: "h6",
                                        className: t.sectionHeaderText,
                                        align: "center",
                                        children: i("how_to_remove")
                                    }), (0, o.jsx)(U, {
                                        iconProps: r
                                    })]
                                }), (0, o.jsx)(s.Z, {
                                    className: n(t.ctaBannerContainer, t.sectionMargin),
                                    children: (0, o.jsx)($, {})
                                }), (0, o.jsxs)(c.Z, {
                                    maxWidth: "lg",
                                    className: n(t.iconSectionContainer, t.sectionMargin),
                                    children: [(0, o.jsxs)(s.Z, {
                                        className: t.discoverFeaturesHeader,
                                        children: [(0, o.jsx)("img", {
                                            className: t.creativeFlowImage,
                                            src: "/assets/images/background-remover-page/shutterstock_creative_flow.webp",
                                            alt: "background-removal-use-case"
                                        }), (0, o.jsx)(l.Z, {
                                            variant: "h6",
                                            className: n(t.sectionHeaderText),
                                            alignItems: "center",
                                            children: "".concat(i("design_more"))
                                        })]
                                    }), (0, o.jsx)(U, {
                                        iconProps: u
                                    }), (0, o.jsx)(s.Z, {
                                        className: t.tryCreateButtonContainer,
                                        children: (0, o.jsx)(m.z, {
                                            size: "large",
                                            variant: "contained",
                                            href: "https://www.shutterstock.com/create/editor",
                                            color: "secondary",
                                            disableRipple: !0,
                                            disableTouchRipple: !0,
                                            className: t.tryCreateButton,
                                            clickTrack: "".concat(a, ".").concat(S.UPLOAD_IMAGE),
                                            children: i("".concat(T.wdp, "::creative-flow:create_button"))
                                        })
                                    })]
                                })]
                            }), (0, o.jsx)(K, {
                                imageLinkData: f
                            })]
                        })]
                    })
                },
                J = n(31931),
                X = n(21028),
                ee = function(e) {
                    var t = e.cmsData,
                        n = e.renderCmsPage;
                    return void 0 === n || n ? (0, o.jsx)(X.QW, {
                        value: (0, r.Z)({}, t),
                        children: (0, o.jsx)(J.B, {})
                    }) : (0, o.jsx)(Q, {})
                },
                et = function(e) {
                    var t = e.initialProps;
                    return (0, o.jsx)(ee, (0, r.Z)({}, t))
                },
                en = n(88849),
                ei = n(96670),
                eo = {
                    flagID: "fact-416-background-remover-landing-page-design",
                    id: "FACT-432",
                    name: "Bg remover landing page design",
                    treatments: (i = {}, (0, D.Z)(i, en.NM, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, z.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, o.jsx)(et, {
                            initialProps: n
                        })
                    }), (0, D.Z)(i, en.vG, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, z.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, o.jsx)(ee, (0, ei.Z)((0, r.Z)({}, n), {
                            renderCmsPage: !1
                        }))
                    }), i)
                },
                ea = function() {
                    return (0, o.jsx)(o.Fragment, {})
                },
                er = function(e) {
                    return (0, o.jsx)(a.K, {
                        config: eo,
                        initialProps: e,
                        Portal: et,
                        SkeletonLoader: ea
                    })
                }
        },
        22514: function(e, t, n) {
            n.r(t), n.d(t, {
                ExperimentRN365: function() {
                    return T
                },
                SkeletonLoader: function() {
                    return _
                },
                experimentConfig: function() {
                    return C
                }
            });
            var i, o = n(52322),
                a = n(62021),
                r = n(70865),
                s = n(86783),
                c = function(e) {
                    var t = e.initialProps;
                    return (0, o.jsx)(s.CmsHero, (0, r.Z)({}, t))
                },
                l = n(47842),
                d = n(88849),
                m = n(2784),
                h = n(96670),
                u = n(87394),
                g = n(27050),
                p = n(33701),
                x = n(32787),
                f = {
                    id: "videoImageId",
                    referenceType: "asset",
                    title: "VHP Hero Poster 5-27",
                    url: "//images.ctfassets.net/hrltx12pl8hq/3h7ygvV17LPY9FnpJYHbXe/fc648ebdae72126e99962afd1c7cbbe6/VHP_5-27-Poster.jpg",
                    details: {
                        size: 501444,
                        image: {
                            width: 2800,
                            height: 900
                        }
                    },
                    fileName: "VHP 5-27-Poster.jpg",
                    contentType: "image/jpeg"
                },
                b = {
                    id: "heroMp4Id",
                    referenceType: "asset",
                    title: "VHP Hero 5-27 mp4",
                    url: "//videos.ctfassets.net/hrltx12pl8hq/3bKgIThGu45EkuskISpXNz/ff02bc431029a98c6cc5f1ef8e10a6c8/VHP_5-27_V5.mp4",
                    details: {
                        size: 16538057
                    },
                    fileName: "VHP 5-27 V5.mp4",
                    contentType: "video/mp4"
                },
                v = {
                    id: "heroWebmId",
                    referenceType: "asset",
                    title: "VHP Hero 5-27 webm",
                    url: "//videos.ctfassets.net/hrltx12pl8hq/TGSzZa2En50mkWusMrs4A/408bf8b903d46c786f57746298d3ccf7/VHP_5-27.webm",
                    details: {
                        size: 6271929
                    },
                    fileName: "VHP 5-27.webm",
                    contentType: "video/webm"
                },
                y = {
                    id: "musicImageId",
                    referenceType: "asset",
                    title: "blurred bokeh waves particles. violet-blue gradient on a dark background. beautiful abstract background. universe of technology particle field abstract digital wave.",
                    url: "//images.ctfassets.net/hrltx12pl8hq/3TPPjvuJCmIjQ4nCmEWMBy/da09af61e6e5a43e06d4224742e97c61/content_mix_music.jpg",
                    details: {
                        size: 772365,
                        image: {
                            width: 3840,
                            height: 2160
                        }
                    },
                    fileName: "content_mix_music.jpg",
                    contentType: "image/jpeg"
                },
                j = {
                    id: "photoImageId",
                    referenceType: "asset",
                    title: "Blurred early flowers meadow with snow capped mountains landscape photo. Highland. Nature scenery photography. Ambient light. High quality picture for wallpaper, travel blog, magazine, article",
                    url: "//images.ctfassets.net/hrltx12pl8hq/6TTUDDJnBCHMfVBescbdps/a0e441247179c073cc1b1a35facae9e2/content_mix_image.jpg",
                    details: {
                        size: 625911,
                        image: {
                            width: 5084,
                            height: 3389
                        }
                    },
                    fileName: "content_mix_image.jpg",
                    contentType: "image/jpeg"
                },
                Z = {
                    id: "aiImageId",
                    referenceType: "asset",
                    title: "abstract 3d render holographic iridescent neon curved wave in motion background. gradient design element for banners, black background, wallpaper,highly detailed,photorealism, vivid colors, octane design",
                    url: "//images.ctfassets.net/hrltx12pl8hq/3LBg5oRYrhvPw1iqCzWQsY/e7f63e09471a5682a31ff138155ed44f/content_mix_ai.jpg",
                    details: {
                        size: 880062,
                        image: {
                            width: 1024,
                            height: 1024
                        }
                    },
                    fileName: "content_mix_ai.jpg",
                    contentType: "image/jpeg"
                },
                w = {
                    editorialImage: {
                        id: "editorialImageId",
                        referenceType: "asset",
                        title: "eComm Editorial Hero - Image - Montage",
                        url: "//images.ctfassets.net/hrltx12pl8hq/665n0XVitwBuS6Ix2OaSNX/c5843d65b58f3f7ac360676bea106aeb/content_mix_editorial.webp",
                        details: {
                            size: 172444,
                            image: {
                                width: 2880,
                                height: 900
                            }
                        },
                        fileName: "content_mix_editorial.webp",
                        contentType: "image/webp"
                    },
                    editorialVideo: f,
                    imageGenerated: Z,
                    imageAigen: Z,
                    imageIllustration: {
                        id: "illustrationImageId",
                        referenceType: "asset",
                        title: "Watercolor painted background. Abstract Illustration wallpaper. Brush stroked painting.",
                        url: "//images.ctfassets.net/hrltx12pl8hq/TOtUBbGlWebGxlQHtgBnK/c8492111cb9909e1794e87affcb87b0f/content_mix_illustration.jpg",
                        details: {
                            size: 501379,
                            image: {
                                width: 4e3,
                                height: 2040
                            }
                        },
                        fileName: "content_mix_illustration.jpg",
                        contentType: "image/jpeg"
                    },
                    imagePhoto: j,
                    imageVector: {
                        id: "vectorImageId",
                        referenceType: "asset",
                        title: "Futuristic Color Design Geometric Wave Shape, Lines. For Your Design Wallpapers Presentation. Vector Illustration with Color Gradient",
                        url: "//images.ctfassets.net/hrltx12pl8hq/EtOVaxcuQ9IBVg52hljZY/751e12a4aafda21c48aef9fc03bfbc94/content_mix_vector.jpg",
                        details: {
                            size: 722421,
                            image: {
                                width: 5625,
                                height: 3250
                            }
                        },
                        fileName: "content_mix_vector.jpg",
                        contentType: "image/jpeg"
                    },
                    music: y,
                    sfx: y,
                    template: j,
                    video: f
                },
                k = function(e) {
                    var t;
                    return (null === (t = Object.entries(e || {}).sort(function(e, t) {
                        return (0, u.Z)(e, 2)[1] > (0, u.Z)(t, 2)[1] ? -1 : 1
                    })[0]) || void 0 === t ? void 0 : t[0]) || "imagePhoto"
                },
                C = {
                    flagID: "rn-365-lihp-hero-image-content-mix",
                    id: "RN-365",
                    name: "lihp hero image content mix",
                    treatments: (i = {}, (0, l.Z)(i, d.NM, function(e) {
                        var t = e.experiment,
                            n = e.initialProps;
                        return (0, m.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, o.jsx)(c, {
                            initialProps: n
                        })
                    }), (0, l.Z)(i, d.vG, function(e) {
                        var t, n, i, a = e.experiment,
                            s = e.initialProps;
                        (0, m.useEffect)(function() {
                            a.recordImpression()
                        }, []);
                        var l = (0, x.w)().data,
                            d = k((null == l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : null === (n = t.attributes) || void 0 === n ? void 0 : null === (i = n.contentMix) || void 0 === i ? void 0 : i.licensed) || {}),
                            u = w[d] || j,
                            f = (0, g.U2)({
                                image: u,
                                srcSet: (0, g.cK)({
                                    heroSize: p.Os,
                                    isSplitHero: !1
                                }),
                                fit: void 0
                            }),
                            y = "video" === d || "editorialVideo" === d ? (0, g.JU)({
                                mp4: b,
                                webm: v
                            }) : null,
                            Z = (0, r.Z)((0, h.Z)((0, r.Z)({}, s), {
                                image: f
                            }), y ? {
                                video: y
                            } : {});
                        return (0, o.jsx)(c, {
                            initialProps: Z
                        })
                    }), i)
                },
                _ = function() {
                    return (0, o.jsx)(o.Fragment, {})
                },
                T = function(e) {
                    return (0, o.jsx)(a.K, {
                        config: C,
                        initialProps: e,
                        Portal: c,
                        SkeletonLoader: _
                    })
                }
        },
        69118: function(e, t, n) {
            n.r(t), n.d(t, {
                ExperimentSDAQ169: function() {
                    return b
                },
                SkeletonLoader: function() {
                    return f
                },
                experimentConfig: function() {
                    return x
                }
            });
            var i, o = n(52322),
                a = n(62021),
                r = function() {
                    return null
                },
                s = n(47842),
                c = n(88849),
                l = n(2784),
                d = n(15907),
                m = n(74293),
                h = n(54652),
                u = n(9390),
                g = n(59877),
                p = n(75),
                x = {
                    flagID: "SDAQ-169-lo-uhp-design-tool-banner-v2",
                    id: "SDAQ-169",
                    name: "LO UHP Design tool banner",
                    treatments: (i = {}, (0, s.Z)(i, c.NM, function(e) {
                        var t = e.experiment;
                        return (0, l.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, o.jsx)(r, {})
                    }), (0, s.Z)(i, c.vG, function(e) {
                        var t = e.experiment;
                        return (0, l.useEffect)(function() {
                            t.recordImpression()
                        }, []), (0, o.jsx)(d.X, {})
                    }), (0, s.Z)(i, c._Z, function(e) {
                        var t = e.experiment;
                        (0, l.useEffect)(function() {
                            t.recordImpression()
                        }, []);
                        var n = (0, m.y)(),
                            i = n.classes,
                            a = n.cx,
                            r = (0, g.$G)(p.WmD).t,
                            s = {
                                caption: r("design-tool-callout:caption"),
                                descriptionTitle: r("design-tool-callout:description-title"),
                                descriptionGeneral: r("design-tool-callout:description-general"),
                                startDesigning: r("design-tool-callout:start-designing")
                            },
                            c = (0, o.jsxs)("ul", {
                                className: i.list,
                                children: [(0, o.jsx)("li", {
                                    className: a(i.text, i.listItem),
                                    children: (0, o.jsx)("span", {
                                        children: (0, o.jsx)(g.cC, {
                                            i18nKey: "design-tool-callout:templates",
                                            t: r,
                                            components: {
                                                a: (0, o.jsx)(u.r, {
                                                    labelTrack: "templates",
                                                    href: "/templates"
                                                })
                                            }
                                        })
                                    })
                                }), (0, o.jsx)("li", {
                                    className: a(i.text, i.listItem),
                                    children: (0, o.jsx)("span", {
                                        children: (0, o.jsx)(g.cC, {
                                            i18nKey: "design-tool-callout:animation",
                                            t: r,
                                            components: {
                                                a: (0, o.jsx)(u.r, {
                                                    labelTrack: "animations",
                                                    href: "/create/home"
                                                })
                                            }
                                        })
                                    })
                                }), (0, o.jsx)("li", {
                                    className: a(i.text, i.listItem),
                                    children: (0, o.jsx)("span", {
                                        children: (0, o.jsx)(g.cC, {
                                            i18nKey: "design-tool-callout:resize-images",
                                            t: r,
                                            components: {
                                                a: (0, o.jsx)(u.r, {
                                                    labelTrack: "resizeImages",
                                                    href: "/image-resizer"
                                                })
                                            }
                                        })
                                    })
                                })]
                            });
                        return (0, h.Y)(i, s, c)
                    }), i)
                },
                f = function() {
                    return null
                },
                b = function() {
                    return (0, o.jsx)(a.K, {
                        config: x,
                        initialProps: {},
                        Portal: r,
                        SkeletonLoader: f
                    })
                }
        },
        50617: function(e, t, n) {
            n.r(t), n.d(t, {
                ExperimentSDAQ255: function() {
                    return eM
                },
                config: function() {
                    return eW
                }
            });
            var i, o = n(70865),
                a = n(96670),
                r = n(52322),
                s = n(62021),
                c = "/assets/images/SDAQ-255/UHPHeroV1VideoBackground.mp4",
                l = n(86783),
                d = function(e) {
                    var t = e.initialProps;
                    return (0, r.jsx)(l.CmsHero, (0, o.Z)({}, t))
                },
                m = n(21647),
                h = n(53957),
                u = n(53881),
                g = n(94909),
                p = n(8740),
                x = (0, p.ZL)()(function(e, t) {
                    return {
                        mobileHeroContainer: {
                            height: t.isMobile ? 556 : h.SZ
                        }
                    }
                }),
                f = function() {
                    var e = (0, g.d)(),
                        t = (0, u.n)().isMobileServer,
                        n = x({
                            isMobile: e || t
                        }).classes;
                    return (0, r.jsx)(m.Z, {
                        className: n.mobileHeroContainer,
                        variant: "rectangular"
                    })
                },
                b = n(47842),
                v = n(88849),
                y = n(2784),
                j = n(75),
                Z = n(59877),
                w = n(67550),
                k = n(62197),
                C = n(96976),
                _ = n(85087),
                T = n(4418),
                I = n(90369),
                B = n(37205),
                S = n(91609),
                N = n(99619),
                R = n(73469),
                P = "blur(3px)",
                H = (0, p.ZL)()(function(e, t) {
                    var n = e.breakpoints,
                        i = e.textShadows,
                        a = e.palette,
                        r = e.tokens,
                        s = r.border,
                        c = r.color,
                        l = r.font,
                        d = r.spacing,
                        m = t.withSubtitle,
                        h = t.isCenterAlign;
                    return {
                        title: (0, b.Z)({
                            display: "flex",
                            justifyContent: m ? "flex-start" : "center",
                            textAlign: m && !h ? "left" : "center",
                            paddingBottom: m ? 0 : d.base
                        }, n.down("md"), {
                            justifyContent: "center",
                            textAlign: "center"
                        }),
                        text: (0, o.Z)({
                            color: a.text.primary,
                            textShadow: i.primary,
                            display: "flex",
                            flexDirection: "column"
                        }, h && {
                            textAlign: "center"
                        }, h && {
                            alignItems: "center"
                        }),
                        buttonContainer: (0, b.Z)({
                            display: "flex",
                            flexDirection: "column"
                        }, n.up("sm"), (0, o.Z)({
                            flexDirection: "row"
                        }, h && {
                            justifyContent: "center"
                        })),
                        button: (0, b.Z)({
                            marginBottom: d.s
                        }, n.up("sm"), {
                            marginBottom: 0,
                            marginRight: d.base
                        }),
                        logo: {
                            margin: h ? "0 auto" : "0 auto 0 0"
                        },
                        keywordsRoot: {
                            gap: d.s
                        },
                        keywordsTitle: {
                            display: "flex",
                            alignItems: "center",
                            textShadow: i.primary,
                            paddingBottom: d.base
                        },
                        keyItemLink: {
                            "&:focus-visible > div": {
                                background: c.gray["onyx-50"],
                                border: "".concat(s.width.m, " solid ").concat(c.blue.azure)
                            }
                        },
                        keyItemRoot: {
                            backdropFilter: P,
                            fontWeight: l.weight.bold,
                            margin: 0,
                            "&&": {
                                background: c.gray["onyx-38"],
                                marginBottom: 0,
                                "&:hover": {
                                    background: c.gray["onyx-50"]
                                }
                            }
                        },
                        searchBar: (0, b.Z)({
                            margin: "-".concat(d.xxl, " -").concat(d.base, " 0 -").concat(d.base),
                            backdropFilter: P,
                            background: c.gray["onyx-38"],
                            padding: d.base
                        }, n.up("sm"), {
                            margin: "-".concat(d.xxl, " -").concat(d.base, " 0 -").concat(d.base),
                            borderRadius: s.radius.l
                        }),
                        heroLinksWrapper: {
                            minHeight: "calc(".concat(d.xl, " + ").concat(d.s, ")"),
                            marginBottom: d.xxl
                        }
                    }
                }),
                A = (0, y.memo)(function(e) {
                    var t, n = e.alignment,
                        i = e.buttons,
                        s = e.hideSearchByAsset,
                        c = e.linksList,
                        l = e.logo,
                        d = e.preTitle,
                        m = e.subtitle,
                        u = e.title,
                        g = e.withSearchBar,
                        p = e.showSubtitle,
                        x = e.classesProps,
                        f = e.displayAnimatedHeadline,
                        b = e.dynamicData,
                        v = (0, R.i)({
                            themeMode: S.oc.DARK
                        }).theme,
                        j = p || m && (i || g || !u.trim()),
                        Z = H({
                            isCenterAlign: n === h.AE,
                            withSubtitle: j
                        }),
                        P = Z.classes,
                        A = Z.cx,
                        z = i && i.length > 1;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [g && (0, r.jsx)("div", {
                            className: P.searchBar,
                            children: (0, r.jsx)(B.v, {
                                hideSearchByAsset: s,
                                splitCategories: !0
                            })
                        }), c && (0, r.jsx)(C.Z, {
                            theme: v,
                            children: (0, r.jsx)(w.Z, {
                                display: "flex",
                                justifyContent: "center",
                                pt: 3,
                                className: A(P.heroLinksWrapper, x.heroLinksWrapper),
                                children: (0, r.jsx)(N.GB, (0, a.Z)((0, o.Z)({
                                    variant: "default",
                                    dataAutomation: "Hero_LinksList_Container",
                                    classesProps: {
                                        title: P.keywordsTitle,
                                        keywordsRoot: P.keywordsRoot
                                    }
                                }, c), {
                                    dynamicData: b,
                                    contentNamespace: h.wF.hero,
                                    dataOptimize: "cms-keywords"
                                }))
                            })
                        }), (0, r.jsx)(C.Z, {
                            theme: v,
                            children: (0, r.jsxs)("div", {
                                className: A(P.text, x.text),
                                children: [d && (0, r.jsx)(k.Z, {
                                    variant: "h6",
                                    color: "primary",
                                    children: (0, r.jsx)(w.Z, {
                                        fontWeight: "fontWeightRegular",
                                        children: d
                                    })
                                }), l && (0, r.jsx)("img", {
                                    alt: l.title,
                                    className: P.logo,
                                    loading: "lazy",
                                    src: l.url,
                                    style: {
                                        height: l.height
                                    }
                                }), f ? (0, r.jsx)(_.T, {
                                    classes: P
                                }) : (0, r.jsx)("div", {
                                    className: P.title,
                                    children: (0, r.jsx)(I.h, {
                                        stringToTransform: u,
                                        Component: (0, r.jsx)(k.Z, {
                                            color: "primary",
                                            variant: "h3",
                                            component: "h1",
                                            "data-optimize": "cms-headline"
                                        })
                                    })
                                }), j && (0, r.jsx)(w.Z, {
                                    pb: 5,
                                    pt: 2,
                                    children: (0, r.jsx)(k.Z, {
                                        variant: "h6",
                                        component: "h2",
                                        color: "primary",
                                        "data-optimize": "cms-sub-headline",
                                        children: (0, r.jsx)(w.Z, {
                                            fontWeight: "fontWeightRegular",
                                            children: (0, r.jsx)(I.h, {
                                                stringToTransform: m
                                            })
                                        })
                                    })
                                })]
                            })
                        }), i && (0, r.jsx)(C.Z, {
                            theme: v,
                            children: (0, r.jsx)("div", {
                                className: P.buttonContainer,
                                children: i.map(function(e, n) {
                                    return (0, y.createElement)(T.Y, (0, a.Z)((0, o.Z)({}, e), {
                                        classesProps: {
                                            button: z ? P.button : x.button
                                        },
                                        key: null !== (t = e.id) && void 0 !== t ? t : n
                                    }))
                                })
                            })
                        })]
                    })
                });
            A.defaultProps = {
                alignment: h.zo,
                buttons: null,
                hideSearchByAsset: !0,
                classesProps: {}
            };
            var z = n(26297),
                D = n(87394),
                L = n(78675),
                W = n(71486),
                M = n(96503),
                G = n(95438),
                F = n(14910),
                E = n(7884),
                V = "30vh",
                O = (0, p.ZL)()(function(e, t) {
                    var n, i = e.breakpoints,
                        r = e.palette,
                        s = e.textShadows,
                        c = e.tokens,
                        l = c.color,
                        d = c.spacing,
                        m = c.zIndex,
                        h = e.transitions,
                        u = e.typography,
                        g = t.backgroundColor,
                        p = t.isShortHero,
                        x = t.imageRight,
                        f = t.isSplitHero,
                        v = t.containerHeight,
                        y = (0, b.Z)({
                            position: "absolute",
                            height: "100%",
                            left: "50%",
                            right: "50%",
                            margin: "0 calc(-50% - ".concat(d.m, ")")
                        }, i.down("sm"), {
                            margin: "0 calc(-50% - ".concat(d.base, ")")
                        }),
                        j = (0, o.Z)({
                            backgroundColor: g || l.gray.slate
                        }, y);
                    return {
                        creditLine: (0, a.Z)((0, o.Z)({}, y), (0, b.Z)({
                            textShadow: s.primary,
                            textAlign: "right",
                            height: "auto",
                            bottom: 0,
                            paddingRight: d.xs
                        }, i.up("md"), {
                            paddingBottom: d.xxs,
                            paddingRight: d.s
                        })),
                        heroImageRoot: (0, a.Z)((0, o.Z)({}, j), {
                            overflow: "hidden"
                        }),
                        heroImage: {
                            height: "auto",
                            minHeight: "100%"
                        },
                        heroContainer: (0, a.Z)((0, o.Z)((0, b.Z)({
                            zIndex: m[1],
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: p ? V : "40vh"
                        }, i.up("lg"), (0, o.Z)({}, !v && {
                            minHeight: p ? V : "550px"
                        })), v && {
                            height: "".concat(v),
                            minHeight: "".concat(v)
                        }), {
                            "&:before": (0, a.Z)((0, o.Z)({}, j), {
                                content: '""',
                                top: 0,
                                borderTop: "1px solid ".concat(r.border1Color)
                            })
                        }),
                        heroContent: (0, o.Z)({
                            position: "relative",
                            padding: "calc(".concat(d.xl, " + ").concat(d.xs, ") 0 0 0")
                        }, f && {
                            flex: "50%",
                            padding: 0,
                            maxWidth: "100%"
                        }),
                        videoRoot: {
                            visibility: "hidden",
                            opacity: 0,
                            transition: h.create(["opacity"], {
                                easing: h.easing.sharp,
                                duration: h.duration.short
                            }),
                            "&&": (0, a.Z)((0, o.Z)({}, y), {
                                top: 0,
                                width: "auto",
                                "& video": {
                                    objectFit: "cover"
                                }
                            }),
                            "& > div": {
                                paddingTop: "0"
                            }
                        },
                        videoVisible: {
                            opacity: 1,
                            visibility: "visible"
                        },
                        assetIconMeta: (0, b.Z)({
                            zIndex: 1,
                            position: "absolute",
                            height: "auto",
                            bottom: 0,
                            left: 0,
                            paddingBottom: d.s
                        }, i.up("lg"), {
                            paddingBottom: d.base
                        }),
                        title: {
                            fontWeight: u.fontWeightRegular
                        },
                        contributorName: (0, b.Z)({}, i.down("sm"), {
                            marginTop: d.xs
                        }),
                        contributorLink: (0, b.Z)({
                            marginLeft: d.xs
                        }, i.down("sm"), {
                            display: "inline-block",
                            minWidth: d.xl
                        }),
                        bottomGradientOverlay: (n = {
                            position: "absolute",
                            bottom: 0,
                            pointerEvents: "none",
                            background: "\n      linear-gradient(\n        to top,\n        ".concat(l.gray["onyx-50"], " 0%,\n        ").concat(l.gray["onyx-38"], " 35%,\n        transparent 60%,\n        transparent 100%\n      )"),
                            left: "-".concat(d.base),
                            right: "-".concat(d.base),
                            height: "100px"
                        }, (0, b.Z)(n, i.up("sm"), {
                            left: "-".concat(d.m),
                            right: "-".concat(d.m)
                        }), (0, b.Z)(n, i.up("lg"), {
                            height: "160px"
                        }), n),
                        splitHero: {
                            display: "flex",
                            flexDirection: x ? "row" : "row-reverse",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            margin: "0 auto",
                            maxWidth: 1200,
                            "&:before": {
                                backgroundColor: "transparent"
                            }
                        },
                        twoCols: {
                            flex: "50%",
                            maxWidth: "100%"
                        }
                    }
                }),
                Y = "blur(3px)",
                U = (0, p.ZL)()(function(e, t) {
                    var n, i = e.breakpoints,
                        r = e.textShadows,
                        s = e.palette,
                        c = e.tokens,
                        l = c.border,
                        d = c.color,
                        m = c.font,
                        h = c.spacing,
                        u = t.withSubtitle,
                        g = t.isCenterAlign;
                    return {
                        title: (0, b.Z)({
                            display: "flex",
                            justifyContent: u ? "flex-start" : "center",
                            textAlign: "left",
                            paddingBottom: u ? 0 : h.base,
                            marginBottom: h.m
                        }, i.down("md"), {
                            justifyContent: "center"
                        }),
                        text: (0, a.Z)((0, o.Z)({
                            color: s.text.primary,
                            display: "flex",
                            flexDirection: "column",
                            width: "50%",
                            textAlign: "left",
                            justifyContent: "center"
                        }, g && {
                            alignItems: "center"
                        }), (0, b.Z)({}, i.down("sm"), {
                            width: "100%",
                            justifyContent: "center"
                        })),
                        buttonContainer: (0, b.Z)({
                            display: "flex",
                            flexDirection: "column"
                        }, i.up("sm"), (0, o.Z)({
                            flexDirection: "row"
                        }, g && {
                            justifyContent: "center"
                        })),
                        button: (0, b.Z)({
                            marginBottom: h.s
                        }, i.up("sm"), {
                            marginBottom: 0,
                            marginRight: h.base
                        }),
                        logo: {
                            margin: g ? "0 auto" : "0 auto 0 0"
                        },
                        keywordsRoot: {
                            gap: h.s
                        },
                        keywordsTitle: {
                            display: "flex",
                            alignItems: "center",
                            textShadow: r.primary,
                            paddingBottom: h.base
                        },
                        keyItemLink: {
                            "&:focus-visible > div": {
                                background: d.gray["onyx-50"],
                                border: "".concat(l.width.m, " solid ").concat(d.blue.azure)
                            }
                        },
                        keyItemRoot: {
                            backdropFilter: Y,
                            fontWeight: m.weight.normal,
                            margin: 0,
                            "&&": {
                                background: d.white,
                                marginBottom: 0,
                                border: "1px solid ".concat(s.border2Color),
                                "&:hover": {
                                    border: "1px solid ".concat(d.black),
                                    fontWeight: m.weight.bold
                                }
                            }
                        },
                        searchBar: (0, b.Z)({
                            margin: "-".concat(h.xxl, " -").concat(h.base, " 0 -").concat(h.base),
                            backdropFilter: Y,
                            padding: h.base
                        }, i.up("sm"), {
                            margin: "-".concat(h.xxl, " -").concat(h.base, " 0 -").concat(h.base),
                            borderRadius: l.radius.l
                        }),
                        heroLinksWrapper: {
                            minHeight: "calc(".concat(h.xl, " + ").concat(h.s, ")"),
                            paddingTop: 0,
                            marginBottom: h.m
                        },
                        videoContainer: (n = {
                            display: "flex",
                            flexWrap: "nowrap",
                            justifyContent: "end",
                            alignItems: "center"
                        }, (0, b.Z)(n, i.up("lg"), {
                            maxWidth: 726,
                            height: 400
                        }), (0, b.Z)(n, i.down("lg"), {
                            maxWidth: 500,
                            height: 300
                        }), (0, b.Z)(n, i.down("md"), {
                            maxWidth: 400,
                            height: 220,
                            justifyContent: "center",
                            margin: "0 auto"
                        }), (0, b.Z)(n, i.down("sm"), {
                            height: 220
                        }), n),
                        videoContent: (0, b.Z)({
                            maxWidth: "90%",
                            borderRadius: l.radius.l
                        }, i.down("sm"), {
                            maxWidth: "100%"
                        }),
                        heroMediaWrapper: (0, b.Z)({}, i.up("sm"), {
                            display: "flex"
                        })
                    }
                }),
                K = n(41075),
                q = n(63040),
                $ = n(32041),
                Q = n(44500),
                J = n(59312),
                X = n(41080),
                ee = n(59481),
                et = n(57202),
                en = n(22863),
                ei = n(38613),
                eo = n(8083),
                ea = n(16133),
                er = n(66358),
                es = n(39232),
                ec = n(33301),
                el = n(31294),
                ed = n(51793),
                em = n(9823),
                eh = n(92405),
                eu = n(97024),
                eg = n(10312),
                ep = n(776),
                ex = n(25237),
                ef = n.n(ex),
                eb = n(5632),
                ev = n(18505),
                ey = (0, p.ZL)()(function(e, t) {
                    var n = e.breakpoints,
                        i = e.palette,
                        a = e.tokens,
                        r = a.border,
                        s = a.spacing,
                        c = a.radius,
                        l = t.splitCategories;
                    return {
                        gridRoot: (0, o.Z)({
                            width: "100%",
                            borderRadius: r.radius.l,
                            maxHeight: ev.GL
                        }, l && {
                            background: "transparent"
                        }),
                        searchBarGridRoot: (0, o.Z)({
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            position: "relative",
                            border: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            overflow: "hidden",
                            background: i.background.default
                        }, l && {
                            borderRadius: "".concat(c.l, " 0 0 ").concat(c.l)
                        }),
                        filterDrawerIcon: (0, b.Z)({
                            borderRadius: 0,
                            borderTop: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            borderBottom: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            borderLeft: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            color: i.primary.main
                        }, n.up("sm"), {
                            display: "none"
                        }),
                        searchByAssetGridRoot: {
                            display: "flex",
                            alignItems: "center",
                            border: "solid ".concat(i.border2Color),
                            borderWidth: "".concat(r.width.s, " 0 ").concat(r.width.s, " 0"),
                            background: i.background.default
                        },
                        searchByAssetIconButton: {
                            padding: "0 ".concat(s.s)
                        },
                        assetTypeSelection: (0, o.Z)({
                            display: "flex",
                            background: i.background.default,
                            borderRadius: "".concat(c.l, " 0 0 ").concat(c.l)
                        }, l && (0, b.Z)({
                            marginRight: s.m,
                            borderRadius: "".concat(c.l)
                        }, n.down("md"), {
                            marginRight: s.s
                        })),
                        aiSearchButton: {
                            marginLeft: s.xs
                        },
                        searchBarButtons: {
                            display: "flex"
                        },
                        searchButton: {
                            height: "100%"
                        },
                        reverseSearchImageButton: {
                            paddingLeft: s.base,
                            paddingRight: s.base,
                            borderRadius: r.radius.l,
                            borderLeft: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            borderRight: "".concat(r.width.s, " solid ").concat(i.border2Color)
                        },
                        reverseSearchImageGrid: {
                            marginLeft: s.s,
                            borderRadius: r.radius.l
                        },
                        reverseSearchImageText: {
                            color: i.common.black
                        }
                    }
                }),
                ej = ef()(function() {
                    return n.e(57758).then(n.bind(n, 34025)).then(function(e) {
                        return e.RASDetailsTour
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [34025]
                        }
                    },
                    ssr: !1
                }),
                eZ = ef()(function() {
                    return Promise.all([n.e(31563), n.e(4252)]).then(n.bind(n, 98334)).then(function(e) {
                        return e.SearchByAssetDialog
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98334]
                        }
                    },
                    ssr: !1
                }),
                ew = function(e) {
                    var t = e.className,
                        n = e.disableBorder,
                        i = e.hasFilterPills,
                        o = e.hideSearchByAsset,
                        a = e.openFilterDrawer,
                        s = e.showSelectedAssetTypeLabel,
                        c = e.allowFilterDrawerIcon,
                        l = e.splitCategories,
                        d = (0, eb.useRouter)(),
                        m = ey({
                            splitCategories: l
                        }),
                        h = m.classes,
                        u = m.cx,
                        g = (0, Z.$G)([j.WuT]).t,
                        p = (0, el.Q)().decodeSearchTerm,
                        x = (0, em.D)().isBrandEnterprise,
                        f = d.query,
                        v = f.term,
                        w = f.prompt,
                        C = (0, eu.JI)(),
                        _ = C.assetSubType,
                        T = p(C.fullAssetType === es.Nk ? w : v),
                        I = (0, D.Z)((0, y.useState)(_), 2),
                        B = I[0],
                        S = I[1],
                        N = (0, eh.p)(ec.I6),
                        R = (0, y.useMemo)(function() {
                            var e;
                            return e = {}, (0, b.Z)(e, es.k4, !ei.dA.includes(es.wW[B] || B) && !o), (0, b.Z)(e, es.xF, (!0 === N || !x) && B === es.xF && !o), e
                        }, [B, o, N, x]),
                        P = (0, y.useRef)(null);
                    (0, y.useEffect)(function() {
                        S(_)
                    }, [_]);
                    var H = (0, ed.Rx)({
                            assetType: B
                        }).doSearch,
                        A = function() {
                            var e;
                            H(null === (e = P.current) || void 0 === e ? void 0 : e.value)
                        },
                        z = (0, D.Z)((0, y.useState)(null), 2),
                        L = z[0],
                        W = z[1],
                        M = R[es.xF] ? ei.sT : "",
                        G = R[es.k4] || R[es.xF],
                        F = (0, y.useMemo)(function() {
                            return Object.keys(ei.lH).filter(function(e) {
                                return R[e]
                            }).map(function(e) {
                                var t = ei.lH[e],
                                    n = t.title,
                                    i = t.Icon;
                                return (0, r.jsx)(K.ZP, {
                                    item: !0,
                                    classes: {
                                        root: G ? u(h.searchByAssetGridRoot, h.reverseSearchImageGrid) : u(h.searchByAssetGridRoot, h.searchByAssetIconButton)
                                    },
                                    "data-tour-stop": M,
                                    children: (0, r.jsx)(q.Z, {
                                        implementation: "css",
                                        lgDown: !0,
                                        children: (0, r.jsx)(J.l, {
                                            title: g(n),
                                            placement: "top",
                                            children: (0, r.jsxs)(ee.h, {
                                                "aria-label": g(n),
                                                classes: {
                                                    root: G ? h.reverseSearchImageButton : h.searchByAssetIconButton
                                                },
                                                onClick: function() {
                                                    return W(e)
                                                },
                                                clickTrack: "".concat(er.Yii, ".").concat(en.BE[e].value, "Button"),
                                                size: "large",
                                                children: [(0, r.jsx)(i, {}), G && (0, r.jsx)(k.Z, {
                                                    ml: 3,
                                                    "data-automation": "ReverseSearch_ImageButton",
                                                    className: h.reverseSearchImageText,
                                                    children: g(B === es.xF ? "music:reverse_audio_search_page_title" : "image:reverse_image_search_page_title")
                                                })]
                                            })
                                        })
                                    })
                                }, e)
                            })
                        }, [R, G, u, h, M, g, B]),
                        E = (0, y.useMemo)(function() {
                            return M && (0, r.jsx)(q.Z, {
                                lgDown: !0,
                                children: (0, r.jsx)(Q.Y, {
                                    children: (0, r.jsx)(ej, {})
                                })
                            })
                        }, [M]);
                    return (0, r.jsx)(ep.Mp, {
                        value: er.Yii,
                        children: (0, r.jsxs)(K.ZP, {
                            container: !0,
                            className: t,
                            classes: {
                                root: h.gridRoot
                            },
                            children: [(0, r.jsx)(K.ZP, {
                                item: !0,
                                xs: "auto",
                                className: h.assetTypeSelection,
                                children: (0, r.jsx)(et.B, {
                                    disableBorder: n,
                                    searchTerm: T,
                                    selectedAssetType: B,
                                    setSelectedAssetType: S,
                                    showSelectedAssetTypeLabel: s,
                                    showSearchByAsset: R,
                                    openSearchDialog: W,
                                    splitCategories: l
                                })
                            }), (0, r.jsxs)(K.ZP, {
                                item: !0,
                                xs: !0,
                                classes: {
                                    root: h.searchBarGridRoot
                                },
                                children: [(0, r.jsx)("div", {
                                    className: h.aiSearchButton,
                                    children: (0, r.jsx)($.$, {
                                        searchBarType: B
                                    })
                                }), (0, r.jsx)(eo.E, {
                                    hasFilterPills: i,
                                    inputRef: P,
                                    searchTerm: T,
                                    selectedAsset: B
                                })]
                            }), !G && F, (0, r.jsxs)(K.ZP, {
                                item: !0,
                                className: h.searchBarButtons,
                                children: [c && (0, r.jsx)(ee.h, {
                                    "aria-label": g("license-history:filter_button_closed"),
                                    classes: {
                                        root: h.filterDrawerIcon
                                    },
                                    onClick: a,
                                    size: "large",
                                    children: (0, r.jsx)(eg.Filter, {})
                                }), B === es.Nk ? (0, r.jsx)(X.c, {
                                    className: h.searchButton,
                                    onClick: A
                                }) : (0, r.jsx)(ea.m, {
                                    className: h.searchButton,
                                    onClick: A
                                }), G && F]
                            }), L && (0, r.jsx)(eZ, {
                                closeDialog: function() {
                                    return W(null)
                                },
                                dialogType: L,
                                assetType: B,
                                isDialogOpen: !0
                            }), E]
                        })
                    })
                },
                ek = (0, y.memo)(ew);
            ew.defaultProps = {
                className: "",
                disableBorder: !1,
                hasFilterPills: void 0,
                hideSearchByAsset: !1,
                openFilterDrawer: function() {},
                showSelectedAssetTypeLabel: !0,
                allowFilterDrawerIcon: !1,
                splitCategories: !1
            };
            var eC = (0, y.memo)(function(e) {
                var t, n = e.alignment,
                    i = e.buttons,
                    s = e.shouldUseVideoBackground,
                    l = e.hideSearchByAsset,
                    d = e.linksList,
                    m = e.logo,
                    u = e.preTitle,
                    g = e.subtitle,
                    p = e.title,
                    x = e.withSearchBar,
                    f = e.showSubtitle,
                    b = e.classesProps,
                    v = e.displayAnimatedHeadline,
                    j = e.dynamicData,
                    Z = (0, R.i)({
                        themeMode: S.oc.LIGHT
                    }).theme,
                    B = f || g && (i || x || !p.trim()),
                    P = U({
                        isCenterAlign: n === h.AE,
                        withSubtitle: B
                    }),
                    H = P.classes,
                    A = P.cx,
                    z = i && i.length > 1;
                return (0, r.jsxs)(r.Fragment, {
                    children: [x && (0, r.jsx)("div", {
                        className: H.searchBar,
                        children: (0, r.jsx)(ek, {
                            hideSearchByAsset: l,
                            splitCategories: !0
                        })
                    }), d && (0, r.jsx)(C.Z, {
                        theme: Z,
                        children: (0, r.jsx)(w.Z, {
                            display: "flex",
                            justifyContent: "center",
                            pt: 3,
                            className: A(H.heroLinksWrapper, b.heroLinksWrapper),
                            children: (0, r.jsx)(N.GB, (0, a.Z)((0, o.Z)({
                                variant: "default",
                                dataAutomation: "Hero_LinksList_Container",
                                classesProps: {
                                    keyItemLink: H.keyItemLink,
                                    keyItemRoot: H.keyItemRoot,
                                    title: H.keywordsTitle,
                                    keywordsRoot: H.keywordsRoot
                                }
                            }, d), {
                                dynamicData: j,
                                dataOptimize: "cms-keywords",
                                popularTitleColor: "#685C5C"
                            }))
                        })
                    }), (0, r.jsx)(C.Z, {
                        theme: Z,
                        children: (0, r.jsxs)("div", {
                            className: H.heroMediaWrapper,
                            children: [(0, r.jsxs)("div", {
                                className: A(H.text, b.text),
                                children: [u && (0, r.jsx)(k.Z, {
                                    variant: "h6",
                                    color: "primary",
                                    children: (0, r.jsx)(w.Z, {
                                        fontWeight: "fontWeightRegular",
                                        children: u
                                    })
                                }), m && (0, r.jsx)("img", {
                                    alt: m.title,
                                    className: H.logo,
                                    loading: "lazy",
                                    src: m.url,
                                    style: {
                                        height: m.height
                                    }
                                }), v ? (0, r.jsx)(_.T, {
                                    classes: H
                                }) : (0, r.jsx)("div", {
                                    className: H.title,
                                    children: (0, r.jsx)(I.h, {
                                        stringToTransform: p,
                                        Component: (0, r.jsx)(k.Z, {
                                            color: "primary",
                                            variant: "h3",
                                            component: "h1",
                                            "data-optimize": "cms-headline"
                                        })
                                    })
                                }), B && (0, r.jsx)(w.Z, {
                                    pb: 5,
                                    pt: 2,
                                    children: (0, r.jsx)(k.Z, {
                                        variant: "h6",
                                        component: "h2",
                                        color: "primary",
                                        "data-optimize": "cms-sub-headline",
                                        children: (0, r.jsx)(w.Z, {
                                            fontWeight: "fontWeightRegular",
                                            children: (0, r.jsx)(I.h, {
                                                stringToTransform: g
                                            })
                                        })
                                    })
                                })]
                            }), s && (0, r.jsx)(w.Z, {
                                className: H.videoContainer,
                                "data-automation": "hero-video-background",
                                children: (0, r.jsx)("video", {
                                    className: H.videoContent,
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    loop: !0,
                                    children: (0, r.jsx)("source", {
                                        src: c,
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    }), i && (0, r.jsx)(C.Z, {
                        theme: Z,
                        children: (0, r.jsx)("div", {
                            className: H.buttonContainer,
                            children: i.map(function(e, n) {
                                return (0, y.createElement)(T.Y, (0, a.Z)((0, o.Z)({}, e), {
                                    classesProps: {
                                        button: z ? H.button : b.button
                                    },
                                    key: null !== (t = e.id) && void 0 !== t ? t : n
                                }))
                            })
                        })
                    })]
                })
            });
            eC.defaultProps = {
                alignment: h.zo,
                buttons: null,
                hideSearchByAsset: !0,
                classesProps: {}
            };
            var e_ = function(e) {
                var t = e.backgroundColor,
                    n = e.creditLine,
                    i = e.ContentComponent,
                    a = e.image,
                    s = e.images,
                    c = e.isShortHero,
                    l = e.video,
                    d = e.customAssetMetadata,
                    m = (e.heroMediaModuleLayout, e.heroType),
                    u = e.imageLocation,
                    p = e.copyText,
                    x = e.contentType,
                    f = e.showIconMeta,
                    v = e.containerHeight,
                    j = (0, z.Z)(e, ["backgroundColor", "creditLine", "ContentComponent", "image", "images", "isShortHero", "video", "customAssetMetadata", "heroMediaModuleLayout", "heroType", "imageLocation", "copyText", "contentType", "showIconMeta", "containerHeight"]),
                    Z = m === h.nu.split,
                    w = u === h.O_,
                    _ = (0, R.i)({
                        themeMode: S.oc.DARK
                    }).theme,
                    I = O({
                        isShortHero: c,
                        backgroundColor: t,
                        imageRight: w,
                        isSplitHero: Z,
                        containerHeight: v
                    }),
                    B = I.classes,
                    N = I.cx,
                    P = (0, g.d)({
                        breakpoint: "sm",
                        defaultMatches: !0
                    }),
                    H = (0, D.Z)((0, y.useState)(!1), 2),
                    A = H[0],
                    V = H[1],
                    Y = (0, r.jsx)(i, (0, o.Z)({}, j));
                return p && (Y = (0, r.jsx)(M.q, {
                    childrenData: [p.copyTextCta],
                    contentNamespace: x,
                    CmsDynamicEntryContainer: T.Y,
                    sanitizedCopy: p.sanitizedCopy,
                    textAlignment: p.textAlignment,
                    title: p.title
                })), (0, r.jsxs)("div", {
                    className: N(B.heroContainer, (0, b.Z)({}, B.splitHero, Z)),
                    children: [a && !s && (0, r.jsx)(G.J, {
                        image: a,
                        lazyLoadImage: !1,
                        fetchPriority: "high",
                        dataOptimize: "hero-image",
                        classesProps: {
                            root: B.heroImageRoot,
                            image: B.heroImage
                        },
                        contentNamespace: h.wF.hero
                    }), l && !P && (0, r.jsx)(E.M, {
                        posterUrl: null == a ? void 0 : a.url,
                        classesProps: {
                            root: N(B.videoRoot, (0, b.Z)({}, B.videoVisible, A))
                        },
                        video: l,
                        controls: !1,
                        onCanPlay: function() {
                            return V(!0)
                        }
                    }), (null == s ? void 0 : s.length) && (0, r.jsx)("div", {
                        className: B.twoCols,
                        children: (0, r.jsx)(F.O, {
                            heroMediaModulesElementsData: s.map(function(e) {
                                return {
                                    fields: {
                                        imageHeroImage: {
                                            title: e.title,
                                            url: e.url
                                        }
                                    }
                                }
                            })
                        })
                    }), (0, r.jsx)(L.Z, {
                        maxWidth: "lg",
                        classes: {
                            root: B.heroContent
                        },
                        children: Y
                    }), n && (0, r.jsx)(C.Z, {
                        theme: _,
                        children: (0, r.jsx)(k.Z, {
                            className: B.creditLine,
                            color: "primary",
                            variant: "caption",
                            children: n
                        })
                    }), f && d && (0, r.jsx)(C.Z, {
                        theme: _,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: B.assetIconMeta,
                                children: (0, r.jsx)(W.D, {
                                    classesProps: B,
                                    asset: d,
                                    withAssetTitle: !0,
                                    withAssetTypeIcon: !0
                                })
                            }), (0, r.jsx)("div", {
                                className: B.bottomGradientOverlay
                            })]
                        })
                    })]
                })
            };
            e_.defaultProps = {
                ContentComponent: eC,
                hideSearchByAsset: !0,
                isShortHero: !1,
                showIconMeta: !0,
                showTitle: !0,
                preTitle: "",
                containerHeight: null
            };
            var eT = "30vh",
                eI = (0, p.ZL)()(function(e, t) {
                    var n, i = e.breakpoints,
                        r = e.palette,
                        s = e.textShadows,
                        c = e.tokens,
                        l = c.color,
                        d = c.spacing,
                        m = c.zIndex,
                        h = e.transitions,
                        u = e.typography,
                        g = t.backgroundColor,
                        p = t.isShortHero,
                        x = t.imageRight,
                        f = t.isSplitHero,
                        v = t.containerHeight,
                        y = (0, b.Z)({
                            position: "absolute",
                            height: "100%",
                            left: "50%",
                            right: "50%",
                            margin: "0 calc(-50% - ".concat(d.m, ")")
                        }, i.down("sm"), {
                            margin: "0 calc(-50% - ".concat(d.base, ")")
                        }),
                        j = (0, o.Z)({
                            backgroundColor: g || l.gray.slate
                        }, y);
                    return {
                        creditLine: (0, a.Z)((0, o.Z)({}, y), (0, b.Z)({
                            textShadow: s.primary,
                            textAlign: "right",
                            height: "auto",
                            bottom: 0,
                            paddingRight: d.xs
                        }, i.up("md"), {
                            paddingBottom: d.xxs,
                            paddingRight: d.s
                        })),
                        heroImageRoot: (0, a.Z)((0, o.Z)({}, j), {
                            overflow: "hidden"
                        }),
                        heroImage: {
                            height: "auto",
                            minHeight: "100%"
                        },
                        heroContainer: (0, a.Z)((0, o.Z)((0, b.Z)({
                            zIndex: m[1],
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: p ? eT : "40vh"
                        }, i.up("lg"), (0, o.Z)({}, !v && {
                            minHeight: p ? eT : "550px"
                        })), v && {
                            height: "".concat(v),
                            minHeight: "".concat(v)
                        }), {
                            "&:before": (0, a.Z)((0, o.Z)({}, j), {
                                content: '""',
                                top: 0,
                                borderTop: "1px solid ".concat(r.border1Color)
                            })
                        }),
                        heroContent: (0, o.Z)({
                            position: "relative",
                            padding: "calc(".concat(d.xl, " + ").concat(d.xs, ") 0 0 0")
                        }, f && {
                            flex: "50%",
                            padding: 0,
                            maxWidth: "100%"
                        }),
                        videoRoot: {
                            visibility: "hidden",
                            opacity: 0,
                            transition: h.create(["opacity"], {
                                easing: h.easing.sharp,
                                duration: h.duration.short
                            }),
                            "&&": (0, a.Z)((0, o.Z)({}, y), {
                                top: 0,
                                width: "auto",
                                "& video": {
                                    objectFit: "cover"
                                }
                            }),
                            "& > div": {
                                paddingTop: "0"
                            }
                        },
                        videoVisible: {
                            opacity: 1,
                            visibility: "visible"
                        },
                        assetIconMeta: (0, b.Z)({
                            zIndex: 1,
                            position: "absolute",
                            height: "auto",
                            bottom: 0,
                            left: 0,
                            paddingBottom: d.s
                        }, i.up("lg"), {
                            paddingBottom: d.base
                        }),
                        title: {
                            fontWeight: u.fontWeightRegular
                        },
                        contributorName: (0, b.Z)({}, i.down("sm"), {
                            marginTop: d.xs
                        }),
                        contributorLink: (0, b.Z)({
                            marginLeft: d.xs
                        }, i.down("sm"), {
                            display: "inline-block",
                            minWidth: d.xl
                        }),
                        bottomGradientOverlay: (n = {
                            position: "absolute",
                            bottom: 0,
                            pointerEvents: "none",
                            background: "\n      linear-gradient(\n        to top,\n        ".concat(l.gray["onyx-50"], " 0%,\n        ").concat(l.gray["onyx-38"], " 35%,\n        transparent 60%,\n        transparent 100%\n      )"),
                            left: "-".concat(d.base),
                            right: "-".concat(d.base),
                            height: "100px"
                        }, (0, b.Z)(n, i.up("sm"), {
                            left: "-".concat(d.m),
                            right: "-".concat(d.m)
                        }), (0, b.Z)(n, i.up("lg"), {
                            height: "160px"
                        }), n),
                        splitHero: {
                            display: "flex",
                            flexDirection: x ? "row" : "row-reverse",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            margin: "0 auto",
                            maxWidth: 1200,
                            "&:before": {
                                backgroundColor: "transparent"
                            }
                        },
                        twoCols: {
                            flex: "50%",
                            maxWidth: "100%"
                        }
                    }
                }),
                eB = "blur(3px)",
                eS = (0, p.ZL)()(function(e, t) {
                    var n, i = e.breakpoints,
                        r = e.textShadows,
                        s = e.palette,
                        c = e.tokens,
                        l = c.border,
                        d = c.color,
                        m = c.font,
                        h = c.spacing,
                        u = t.withSubtitle,
                        g = t.isCenterAlign;
                    return {
                        title: (0, b.Z)({
                            display: "flex",
                            justifyContent: u ? "flex-start" : "center",
                            textAlign: "left",
                            paddingBottom: u ? 0 : h.base,
                            marginBottom: h.m
                        }, i.down("md"), {
                            justifyContent: "center"
                        }),
                        text: (0, a.Z)((0, o.Z)({
                            color: s.text.primary,
                            display: "flex",
                            flexDirection: "column",
                            width: "50%",
                            textAlign: "left",
                            justifyContent: "center"
                        }, g && {
                            alignItems: "center"
                        }), (0, b.Z)({}, i.down("sm"), {
                            width: "100%",
                            justifyContent: "center"
                        })),
                        buttonContainer: (0, b.Z)({
                            display: "flex",
                            flexDirection: "column"
                        }, i.up("sm"), (0, o.Z)({
                            flexDirection: "row"
                        }, g && {
                            justifyContent: "center"
                        })),
                        button: (0, b.Z)({
                            marginBottom: h.s
                        }, i.up("sm"), {
                            marginBottom: 0,
                            marginRight: h.base
                        }),
                        logo: {
                            margin: g ? "0 auto" : "0 auto 0 0"
                        },
                        keywordsRoot: {
                            gap: h.s
                        },
                        keywordsTitle: {
                            display: "flex",
                            alignItems: "center",
                            textShadow: r.primary,
                            paddingBottom: h.base
                        },
                        keyItemLink: {
                            "&:focus-visible > div": {
                                background: d.gray["onyx-50"],
                                border: "".concat(l.width.m, " solid ").concat(d.blue.azure)
                            }
                        },
                        keyItemRoot: {
                            backdropFilter: eB,
                            fontWeight: m.weight.normal,
                            margin: 0,
                            "&&": {
                                background: d.white,
                                marginBottom: 0,
                                border: "1px solid ".concat(s.border2Color),
                                "&:hover": {
                                    border: "1px solid ".concat(d.black),
                                    fontWeight: m.weight.bold
                                }
                            }
                        },
                        searchBar: (0, b.Z)({
                            margin: "-".concat(h.xxl, " -").concat(h.base, " 0 -").concat(h.base),
                            backdropFilter: eB,
                            padding: h.base
                        }, i.up("sm"), {
                            margin: "-".concat(h.xxl, " -").concat(h.base, " 0 -").concat(h.base),
                            borderRadius: l.radius.l
                        }),
                        heroLinksWrapper: {
                            minHeight: "calc(".concat(h.xl, " + ").concat(h.s, ")"),
                            paddingTop: 0,
                            marginBottom: h.m
                        },
                        videoContainer: (n = {
                            display: "flex",
                            flexWrap: "nowrap",
                            justifyContent: "end",
                            alignItems: "center"
                        }, (0, b.Z)(n, i.up("lg"), {
                            maxWidth: 726,
                            height: 400
                        }), (0, b.Z)(n, i.down("lg"), {
                            maxWidth: 500,
                            height: 300
                        }), (0, b.Z)(n, i.down("md"), {
                            maxWidth: 400,
                            height: 220,
                            justifyContent: "center",
                            margin: "0 auto"
                        }), (0, b.Z)(n, i.down("sm"), {
                            height: 220
                        }), n),
                        videoContent: (0, b.Z)({
                            maxWidth: "90%",
                            borderRadius: l.radius.l
                        }, i.down("sm"), {
                            maxWidth: "100%"
                        }),
                        heroMediaWrapper: (0, b.Z)({}, i.up("sm"), {
                            display: "flex"
                        })
                    }
                }),
                eN = (0, p.ZL)()(function(e, t) {
                    var n = e.breakpoints,
                        i = e.palette,
                        a = e.tokens,
                        r = a.border,
                        s = a.spacing,
                        c = a.radius,
                        l = t.splitCategories;
                    return {
                        gridRoot: (0, o.Z)({
                            width: "100%",
                            borderRadius: r.radius.l,
                            maxHeight: ev.GL
                        }, l && {
                            background: "transparent"
                        }),
                        searchBarGridRoot: (0, o.Z)({
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            position: "relative",
                            border: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            overflow: "hidden",
                            background: i.background.default
                        }, l && {
                            borderRadius: "".concat(c.l, " 0 0 ").concat(c.l)
                        }),
                        filterDrawerIcon: (0, b.Z)({
                            borderRadius: 0,
                            borderTop: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            borderBottom: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            borderLeft: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            color: i.primary.main
                        }, n.up("sm"), {
                            display: "none"
                        }),
                        searchByAssetGridRoot: {
                            display: "flex",
                            alignItems: "center",
                            border: "solid ".concat(i.border2Color),
                            borderWidth: "".concat(r.width.s, " 0 ").concat(r.width.s, " 0"),
                            background: i.background.default
                        },
                        searchByAssetIconButton: {
                            padding: "0 ".concat(s.s)
                        },
                        assetTypeSelection: (0, o.Z)({
                            display: "flex",
                            background: i.background.default,
                            borderRadius: "".concat(c.l, " 0 0 ").concat(c.l)
                        }, l && (0, b.Z)({
                            marginRight: s.m,
                            borderRadius: "".concat(c.l)
                        }, n.down("md"), {
                            marginRight: s.s
                        })),
                        aiSearchButton: {
                            marginLeft: s.xs
                        },
                        searchBarButtons: {
                            display: "flex"
                        },
                        searchButton: {
                            height: "100%"
                        },
                        reverseSearchImageButton: {
                            paddingLeft: s.base,
                            paddingRight: s.base,
                            borderRadius: r.radius.l,
                            borderLeft: "".concat(r.width.s, " solid ").concat(i.border2Color),
                            borderRight: "".concat(r.width.s, " solid ").concat(i.border2Color)
                        },
                        reverseSearchImageGrid: {
                            marginLeft: s.s,
                            borderRadius: r.radius.l
                        },
                        reverseSearchImageText: {
                            color: i.common.black
                        }
                    }
                }),
                eR = ef()(function() {
                    return n.e(57758).then(n.bind(n, 34025)).then(function(e) {
                        return e.RASDetailsTour
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [34025]
                        }
                    },
                    ssr: !1
                }),
                eP = ef()(function() {
                    return Promise.all([n.e(31563), n.e(4252)]).then(n.bind(n, 98334)).then(function(e) {
                        return e.SearchByAssetDialog
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98334]
                        }
                    },
                    ssr: !1
                }),
                eH = function(e) {
                    var t = e.className,
                        n = e.disableBorder,
                        i = e.hasFilterPills,
                        o = e.hideSearchByAsset,
                        a = e.openFilterDrawer,
                        s = e.showSelectedAssetTypeLabel,
                        c = e.allowFilterDrawerIcon,
                        l = e.splitCategories,
                        d = (0, eb.useRouter)(),
                        m = eN({
                            splitCategories: l
                        }),
                        h = m.classes,
                        u = m.cx,
                        g = (0, Z.$G)([j.WuT]).t,
                        p = (0, el.Q)().decodeSearchTerm,
                        x = (0, em.D)().isBrandEnterprise,
                        f = d.query,
                        v = f.term,
                        w = f.prompt,
                        C = (0, eu.JI)(),
                        _ = C.assetSubType,
                        T = p(C.fullAssetType === es.Nk ? w : v),
                        I = (0, D.Z)((0, y.useState)(_), 2),
                        B = I[0],
                        S = I[1],
                        N = (0, eh.p)(ec.I6),
                        R = (0, y.useMemo)(function() {
                            var e;
                            return e = {}, (0, b.Z)(e, es.k4, !ei.dA.includes(es.wW[B] || B) && !o), (0, b.Z)(e, es.xF, (!0 === N || !x) && B === es.xF && !o), e
                        }, [B, o, N, x]),
                        P = (0, y.useRef)(null);
                    (0, y.useEffect)(function() {
                        S(_)
                    }, [_]);
                    var H = (0, ed.Rx)({
                            assetType: B
                        }).doSearch,
                        A = function() {
                            var e;
                            H(null === (e = P.current) || void 0 === e ? void 0 : e.value)
                        },
                        z = (0, D.Z)((0, y.useState)(null), 2),
                        L = z[0],
                        W = z[1],
                        M = R[es.xF] ? ei.sT : "",
                        G = R[es.k4] || R[es.xF],
                        F = (0, y.useMemo)(function() {
                            return Object.keys(ei.lH).filter(function(e) {
                                return R[e]
                            }).map(function(e) {
                                var t = ei.lH[e],
                                    n = t.title,
                                    i = t.Icon;
                                return (0, r.jsx)(K.ZP, {
                                    item: !0,
                                    classes: {
                                        root: G ? u(h.searchByAssetGridRoot, h.reverseSearchImageGrid) : u(h.searchByAssetGridRoot, h.searchByAssetIconButton)
                                    },
                                    "data-tour-stop": M,
                                    children: (0, r.jsx)(q.Z, {
                                        implementation: "css",
                                        lgDown: !0,
                                        children: (0, r.jsx)(J.l, {
                                            title: g(n),
                                            placement: "top",
                                            children: (0, r.jsxs)(ee.h, {
                                                "aria-label": g(n),
                                                classes: {
                                                    root: G ? h.reverseSearchImageButton : h.searchByAssetIconButton
                                                },
                                                onClick: function() {
                                                    return W(e)
                                                },
                                                clickTrack: "".concat(er.Yii, ".").concat(en.BE[e].value, "Button"),
                                                size: "large",
                                                children: [(0, r.jsx)(i, {}), G && (0, r.jsx)(k.Z, {
                                                    ml: 3,
                                                    "data-automation": "ReverseSearch_ImageButton",
                                                    className: h.reverseSearchImageText,
                                                    children: g(B === es.xF ? "music:reverse_audio_search_page_title" : "image:reverse_image_search_page_title")
                                                })]
                                            })
                                        })
                                    })
                                }, e)
                            })
                        }, [R, G, u, h, M, g, B]),
                        E = (0, y.useMemo)(function() {
                            return M && (0, r.jsx)(q.Z, {
                                lgDown: !0,
                                children: (0, r.jsx)(Q.Y, {
                                    children: (0, r.jsx)(eR, {})
                                })
                            })
                        }, [M]);
                    return (0, r.jsx)(ep.Mp, {
                        value: er.Yii,
                        children: (0, r.jsxs)(K.ZP, {
                            container: !0,
                            className: t,
                            classes: {
                                root: h.gridRoot
                            },
                            children: [(0, r.jsx)(K.ZP, {
                                item: !0,
                                xs: "auto",
                                className: h.assetTypeSelection,
                                children: (0, r.jsx)(et.B, {
                                    disableBorder: n,
                                    searchTerm: T,
                                    selectedAssetType: B,
                                    setSelectedAssetType: S,
                                    showSelectedAssetTypeLabel: s,
                                    showSearchByAsset: R,
                                    openSearchDialog: W,
                                    splitCategories: l
                                })
                            }), (0, r.jsxs)(K.ZP, {
                                item: !0,
                                xs: !0,
                                classes: {
                                    root: h.searchBarGridRoot
                                },
                                children: [(0, r.jsx)("div", {
                                    className: h.aiSearchButton,
                                    children: (0, r.jsx)($.$, {
                                        searchBarType: B
                                    })
                                }), (0, r.jsx)(eo.E, {
                                    hasFilterPills: i,
                                    inputRef: P,
                                    searchTerm: T,
                                    selectedAsset: B
                                })]
                            }), !G && F, (0, r.jsxs)(K.ZP, {
                                item: !0,
                                className: h.searchBarButtons,
                                children: [c && (0, r.jsx)(ee.h, {
                                    "aria-label": g("license-history:filter_button_closed"),
                                    classes: {
                                        root: h.filterDrawerIcon
                                    },
                                    onClick: a,
                                    size: "large",
                                    children: (0, r.jsx)(eg.Filter, {})
                                }), B === es.Nk ? (0, r.jsx)(X.c, {
                                    className: h.searchButton,
                                    onClick: A
                                }) : (0, r.jsx)(ea.m, {
                                    className: h.searchButton,
                                    onClick: A
                                }), G && F]
                            }), L && (0, r.jsx)(eP, {
                                closeDialog: function() {
                                    return W(null)
                                },
                                dialogType: L,
                                assetType: B,
                                isDialogOpen: !0
                            }), E]
                        })
                    })
                },
                eA = (0, y.memo)(eH);
            eH.defaultProps = {
                className: "",
                disableBorder: !1,
                hasFilterPills: void 0,
                hideSearchByAsset: !1,
                openFilterDrawer: function() {},
                showSelectedAssetTypeLabel: !0,
                allowFilterDrawerIcon: !1,
                splitCategories: !1
            };
            var ez = (0, y.memo)(function(e) {
                var t, n = e.alignment,
                    i = e.buttons,
                    s = e.shouldUseVideoBackground,
                    l = e.hideSearchByAsset,
                    d = e.linksList,
                    m = e.logo,
                    u = e.preTitle,
                    g = e.subtitle,
                    p = e.title,
                    x = e.withSearchBar,
                    f = e.showSubtitle,
                    b = e.classesProps,
                    v = e.displayAnimatedHeadline,
                    j = e.dynamicData,
                    Z = (0, R.i)({
                        themeMode: S.oc.LIGHT
                    }).theme,
                    B = f || g && (i || x || !p.trim()),
                    P = eS({
                        isCenterAlign: n === h.AE,
                        withSubtitle: B
                    }),
                    H = P.classes,
                    A = P.cx,
                    z = i && i.length > 1;
                return (0, r.jsxs)(r.Fragment, {
                    children: [x && (0, r.jsx)("div", {
                        className: H.searchBar,
                        children: (0, r.jsx)(eA, {
                            hideSearchByAsset: l,
                            splitCategories: !0
                        })
                    }), d && (0, r.jsx)(C.Z, {
                        theme: Z,
                        children: (0, r.jsx)(w.Z, {
                            display: "flex",
                            justifyContent: "center",
                            pt: 3,
                            className: A(H.heroLinksWrapper, b.heroLinksWrapper),
                            children: (0, r.jsx)(N.GB, (0, a.Z)((0, o.Z)({
                                variant: "default",
                                dataAutomation: "Hero_LinksList_Container",
                                classesProps: {
                                    keyItemLink: H.keyItemLink,
                                    keyItemRoot: H.keyItemRoot,
                                    title: H.keywordsTitle,
                                    keywordsRoot: H.keywordsRoot
                                }
                            }, d), {
                                dynamicData: j,
                                dataOptimize: "cms-keywords",
                                popularTitleColor: "#685C5C"
                            }))
                        })
                    }), (0, r.jsx)(C.Z, {
                        theme: Z,
                        children: (0, r.jsxs)("div", {
                            className: H.heroMediaWrapper,
                            children: [(0, r.jsxs)("div", {
                                className: A(H.text, b.text),
                                children: [u && (0, r.jsx)(k.Z, {
                                    variant: "h6",
                                    color: "primary",
                                    children: (0, r.jsx)(w.Z, {
                                        fontWeight: "fontWeightRegular",
                                        children: u
                                    })
                                }), m && (0, r.jsx)("img", {
                                    alt: m.title,
                                    className: H.logo,
                                    loading: "lazy",
                                    src: m.url,
                                    style: {
                                        height: m.height
                                    }
                                }), v ? (0, r.jsx)(_.T, {
                                    classes: H
                                }) : (0, r.jsx)("div", {
                                    className: H.title,
                                    children: (0, r.jsx)(I.h, {
                                        stringToTransform: p,
                                        Component: (0, r.jsx)(k.Z, {
                                            color: "primary",
                                            variant: "h3",
                                            component: "h1",
                                            "data-optimize": "cms-headline"
                                        })
                                    })
                                }), B && (0, r.jsx)(w.Z, {
                                    pb: 5,
                                    pt: 2,
                                    children: (0, r.jsx)(k.Z, {
                                        variant: "h6",
                                        component: "h2",
                                        color: "primary",
                                        "data-optimize": "cms-sub-headline",
                                        children: (0, r.jsx)(w.Z, {
                                            fontWeight: "fontWeightRegular",
                                            children: (0, r.jsx)(I.h, {
                                                stringToTransform: g
                                            })
                                        })
                                    })
                                })]
                            }), s && (0, r.jsx)(w.Z, {
                                className: H.videoContainer,
                                "data-automation": "hero-video-background",
                                children: (0, r.jsx)("video", {
                                    className: H.videoContent,
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    loop: !0,
                                    children: (0, r.jsx)("source", {
                                        src: c,
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    }), i && (0, r.jsx)(C.Z, {
                        theme: Z,
                        children: (0, r.jsx)("div", {
                            className: H.buttonContainer,
                            children: i.map(function(e, n) {
                                return (0, y.createElement)(T.Y, (0, a.Z)((0, o.Z)({}, e), {
                                    classesProps: {
                                        button: z ? H.button : b.button
                                    },
                                    key: null !== (t = e.id) && void 0 !== t ? t : n
                                }))
                            })
                        })
                    })]
                })
            });
            ez.defaultProps = {
                alignment: h.zo,
                buttons: null,
                hideSearchByAsset: !0,
                classesProps: {}
            };
            var eD = function(e) {
                var t = e.backgroundColor,
                    n = e.creditLine,
                    i = e.ContentComponent,
                    a = e.image,
                    s = e.images,
                    c = e.isShortHero,
                    l = e.video,
                    d = e.customAssetMetadata,
                    m = (e.heroMediaModuleLayout, e.heroType),
                    u = e.imageLocation,
                    p = e.copyText,
                    x = e.contentType,
                    f = e.showIconMeta,
                    v = e.containerHeight,
                    j = (0, z.Z)(e, ["backgroundColor", "creditLine", "ContentComponent", "image", "images", "isShortHero", "video", "customAssetMetadata", "heroMediaModuleLayout", "heroType", "imageLocation", "copyText", "contentType", "showIconMeta", "containerHeight"]),
                    Z = m === h.nu.split,
                    w = u === h.O_,
                    _ = (0, R.i)({
                        themeMode: S.oc.DARK
                    }).theme,
                    I = eI({
                        isShortHero: c,
                        backgroundColor: t,
                        imageRight: w,
                        isSplitHero: Z,
                        containerHeight: v
                    }),
                    B = I.classes,
                    N = I.cx,
                    P = (0, g.d)({
                        breakpoint: "sm",
                        defaultMatches: !0
                    }),
                    H = (0, D.Z)((0, y.useState)(!1), 2),
                    A = H[0],
                    V = H[1],
                    O = (0, r.jsx)(i, (0, o.Z)({}, j));
                return p && (O = (0, r.jsx)(M.q, {
                    childrenData: [p.copyTextCta],
                    contentNamespace: x,
                    CmsDynamicEntryContainer: T.Y,
                    sanitizedCopy: p.sanitizedCopy,
                    textAlignment: p.textAlignment,
                    title: p.title
                })), (0, r.jsxs)("div", {
                    className: N(B.heroContainer, (0, b.Z)({}, B.splitHero, Z)),
                    children: [a && !s && (0, r.jsx)(G.J, {
                        image: a,
                        lazyLoadImage: !1,
                        fetchPriority: "high",
                        dataOptimize: "hero-image",
                        classesProps: {
                            root: B.heroImageRoot,
                            image: B.heroImage
                        },
                        contentNamespace: h.wF.hero
                    }), l && !P && (0, r.jsx)(E.M, {
                        posterUrl: null == a ? void 0 : a.url,
                        classesProps: {
                            root: N(B.videoRoot, (0, b.Z)({}, B.videoVisible, A))
                        },
                        video: l,
                        controls: !1,
                        onCanPlay: function() {
                            return V(!0)
                        }
                    }), (null == s ? void 0 : s.length) && (0, r.jsx)("div", {
                        className: B.twoCols,
                        children: (0, r.jsx)(F.O, {
                            heroMediaModulesElementsData: s.map(function(e) {
                                return {
                                    fields: {
                                        imageHeroImage: {
                                            title: e.title,
                                            url: e.url
                                        }
                                    }
                                }
                            })
                        })
                    }), (0, r.jsx)(L.Z, {
                        maxWidth: "lg",
                        classes: {
                            root: B.heroContent
                        },
                        children: O
                    }), n && (0, r.jsx)(C.Z, {
                        theme: _,
                        children: (0, r.jsx)(k.Z, {
                            className: B.creditLine,
                            color: "primary",
                            variant: "caption",
                            children: n
                        })
                    }), f && d && (0, r.jsx)(C.Z, {
                        theme: _,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: B.assetIconMeta,
                                children: (0, r.jsx)(W.D, {
                                    classesProps: B,
                                    asset: d,
                                    withAssetTitle: !0,
                                    withAssetTypeIcon: !0
                                })
                            }), (0, r.jsx)("div", {
                                className: B.bottomGradientOverlay
                            })]
                        })
                    })]
                })
            };
            eD.defaultProps = {
                ContentComponent: ez,
                hideSearchByAsset: !0,
                isShortHero: !1,
                showIconMeta: !0,
                showTitle: !0,
                preTitle: "",
                containerHeight: null
            };
            var eL = (i = {}, (0, b.Z)(i, v.NM, function(e) {
                    var t = e.experiment,
                        n = e.initialProps;
                    return (0, y.useEffect)(function() {
                        t.recordImpression()
                    }, []), (0, r.jsx)(d, {
                        initialProps: (0, o.Z)({}, n)
                    })
                }), (0, b.Z)(i, v.vG, function(e) {
                    var t = e.experiment,
                        n = e.initialProps;
                    (0, y.useEffect)(function() {
                        t.recordImpression()
                    }, []);
                    var i = (0, Z.$G)(j.kU9).t,
                        s = (0, a.Z)((0, o.Z)({}, n), {
                            displayAnimatedHeadline: !1,
                            title: i("hero_title_everything_you_need"),
                            subtitle: i("hero_subtitle_all_at_your_fingertips")
                        });
                    return (0, r.jsx)(d, {
                        initialProps: (0, a.Z)((0, o.Z)({}, s), {
                            showIconMeta: !1,
                            ContentComponent: A
                        })
                    })
                }), (0, b.Z)(i, v._Z, function(e) {
                    var t = e.experiment,
                        n = e.initialProps;
                    (0, y.useEffect)(function() {
                        t.recordImpression()
                    }, []);
                    var i = (0, a.Z)((0, o.Z)({}, n), {
                        displayAnimatedHeadline: !0,
                        backgroundColor: "#fff",
                        images: []
                    });
                    return (0, r.jsx)(e_, (0, a.Z)((0, o.Z)({}, i), {
                        showIconMeta: !1,
                        shouldUseVideoBackground: !0
                    }))
                }), (0, b.Z)(i, v.Dh, function(e) {
                    var t = e.experiment,
                        n = e.initialProps;
                    (0, y.useEffect)(function() {
                        t.recordImpression()
                    }, []);
                    var i = (0, Z.$G)(j.kU9).t,
                        s = (0, a.Z)((0, o.Z)({}, n), {
                            displayAnimatedHeadline: !1,
                            title: i("hero_title_everything_you_need"),
                            subtitle: i("hero_subtitle_all_at_your_fingertips"),
                            backgroundColor: "#fff",
                            images: []
                        });
                    return (0, r.jsx)(eD, (0, a.Z)((0, o.Z)({}, s), {
                        showIconMeta: !1,
                        shouldUseVideoBackground: !0
                    }))
                }), i),
                eW = (0, a.Z)((0, o.Z)({}, {
                    flagID: "SDAQ-255-lo-uhp-hero-background-and-copy-experiment",
                    id: "SDAQ-255",
                    name: "LO UHP Hero: Background and Copy"
                }), {
                    treatments: eL
                }),
                eM = function(e) {
                    return (0, r.jsx)(s.K, {
                        config: eW,
                        initialProps: e,
                        Portal: d,
                        SkeletonLoader: f
                    })
                }
        },
        8658: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return r
                }
            });
            var i = n(70865),
                o = n(52322),
                a = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "m10.25,10.75H2.5c-.27614,0-.5-.22386-.5-.5v-.25c0-.27614.22386-.5.5-.5h7.75c.27614,0,.5.22386.5.5v.25c0,.27614-.22386.5-.5.5Zm1.75,3.25v-.25c0-.27614-.22386-.5-.5-.5h-6.5c-.27614,0-.5.22386-.5.5v.25c0,.27614.22386.5.5.5h6.5c.27614,0,.5-.22386.5-.5Zm7.28038,7.85107c.18433-.15747.26123-.40649.19776-.64026l-1.77981-6.52527,4.11871-4.11865c.16297-.16296.22278-.40222.15625-.62317-.06653-.22034-.24964-.38635-.47547-.43152l-5.95039-1.19019-2.98832-6.00433c-.21241-.42358-.90577-.42358-1.11818,0l-1.87502,3.77838c-.15442.30884-.0293.6842.27954.83862.30823.15381.68482.02991.83863-.27954l1.31593-2.63245,2.56595,5.13184c.08606.17273.2472.29541.43641.33325l5.10505,1.02112-3.54924,3.54919c-.15869.15869-.22034.39001-.16113.60608l1.52468,5.59082-5.6623-2.57385c-.18067-.08362-.39002-.07446-.56214.02258l-4.22125,2.34497.74159-2.22595c.10925-.32776-.06775-.68176-.3949-.79041-.33081-.11047-.68177.06775-.79042.3949l-1.25002,3.75c-.08179.24475-.00488.51392.19348.67871.19776.16418.4773.18982.70252.06531l5.35041-2.9718,6.58761,2.99438c.08301.03784.1709.05615.25879.05615.14588,0,.28992-.05127.40528-.14893Z"
                }), "Animate.svg"),
                r = function(e) {
                    return (0, o.jsx)(a, (0, i.Z)({
                        viewBox: "0 0 24 24"
                    }, e))
                }
        },
        54544: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return r
                }
            });
            var i = n(70865),
                o = n(52322),
                a = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "m5.75,10.125V2.625c0-.34523.27985-.625.625-.625.34523,0,.625.27977.625.625v7.5c0,.34515-.27977.625-.625.625-.34515,0-.625-.27985-.625-.625Zm11.875,3.125c-.34515,0-.625.27977-.625.625v7.5c0,.34515.27985.625.625.625s.625-.27985.625-.625v-7.5c0-.34523-.27985-.625-.625-.625Zm-6.875,1.25v2.5c0,.69031-.55962,1.25-1.25,1.25h-2.5v3.125c0,.34515-.27977.625-.625.625-.34515,0-.625-.27985-.625-.625v-3.125h-2.5c-.69031,0-1.25-.55969-1.25-1.25v-2.5c0-.69038.55969-1.25,1.25-1.25h6.25c.69038,0,1.25.55962,1.25,1.25Zm-1.25,0H3.25v2.5h6.25v-2.5Zm12.5-7.5v2.5c0,.69031-.55962,1.25-1.25,1.25h-6.25c-.69038,0-1.25-.55969-1.25-1.25v-2.5c0-.69038.55962-1.25,1.25-1.25h2.5v-3.125c0-.34523.27985-.625.625-.625s.625.27977.625.625v3.125h2.5c.69038,0,1.25.55962,1.25,1.25Zm-1.25,0h-6.25v2.5h6.25v-2.5Z"
                }), "Edits.svg"),
                r = function(e) {
                    return (0, o.jsx)(a, (0, i.Z)({
                        viewBox: "0 0 24 24"
                    }, e))
                }
        },
        80430: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return r
                }
            });
            var i = n(70865),
                o = n(52322),
                a = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "m72,23.15717h-28v-6c0-1.10461-.89539-2-2-2-1.10455,0-2,.89539-2,2v6h-16c-4.41827,0-8,3.58173-8,8v32c0,4.41827,3.58173,8,8,8h16v6c0,1.10455.89545,2,2,2,1.10461,0,2-.89545,2-2v-6h28c4.41827,0,8-3.58173,8-8V31.15717c0-4.41827-3.58173-8-8-8Zm-48,44c-2.20557,0-4-1.79443-4-4V31.15717c0-2.20563,1.79443-4,4-4h16v40h-16Zm52-24h-8v8h8v8h-8v8h-8v-8h-8v8h-8v-8h8v-8h-8v-8h8v-8h-8v-8h8v8h8v-8h8v8h8v8Zm-8-8v8h-8v-8h8Zm-8,16h8v8h-8v-8Zm0,0h-8v-8h8v8Z"
                }), "RemoveBackground.svg"),
                r = function(e) {
                    return (0, o.jsx)(a, (0, i.Z)({
                        viewBox: "0 0 96 96"
                    }, e))
                }
        },
        88680: function(e, t, n) {
            n.r(t), n.d(t, {
                SmartResizeCms: function() {
                    return r
                }
            });
            var i = n(70865),
                o = n(52322),
                a = (0, n(6620).Z)((0, o.jsx)("path", {
                    d: "m72,16H24c-4.41821,0-8,3.58154-8,8v48c0,4.41821,3.58179,8,8,8h6c1.10449,0,2-.89551,2-2,0-1.10474-.89551-2-2-2h-6c-2.20557,0-4-1.79443-4-4v-24h40c2.20923,0,4-1.79102,4-4v-24h8c2.20557,0,4,1.79443,4,4v6c0,1.10449.89551,2,2,2s2-.89551,2-2v-6c0-4.41846-3.58179-8-8-8Zm-12,28H20v-20c0-2.20557,1.79443-4,4-4h36v24Zm20,22v6c0,4.41821-3.58179,8-8,8h-6c-1.10449,0-2-.89551-2-2,0-1.10474.89551-2,2-2h6c2.20557,0,4-1.79443,4-4v-6c0-1.10474.89551-2,2-2s2,.89526,2,2Zm0-24v12c0,1.10449-.89551,2-2,2s-2-.89551-2-2v-12c0-1.10474.89551-2,2-2s2,.89526,2,2Zm-24,36c0,1.10449-.89551,2-2,2h-12c-1.10449,0-2-.89551-2-2,0-1.10474.89551-2,2-2h12c1.10449,0,2,.89526,2,2Z"
                }), "SmartResizeCms.svg"),
                r = function(e) {
                    return (0, o.jsx)(a, (0, i.Z)({
                        viewBox: "0 0 96 96"
                    }, e))
                }
        }
    }
]);
//# sourceMappingURL=CmsHero.11184d7f72e09cc1.js.map