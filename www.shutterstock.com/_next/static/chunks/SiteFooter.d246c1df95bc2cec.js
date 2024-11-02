"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19515, 99220], {
        63452: function(t, e, a) {
            a.d(e, {
                S: function() {
                    return M
                }
            });
            var r = a(47842),
                o = a(70865),
                n = a(26297),
                c = a(52322),
                i = a(41075),
                s = a(8740),
                l = a(98788),
                u = a(96670),
                d = a(87394),
                f = a(5163),
                p = a(67550),
                h = a(62197),
                m = a(47999),
                k = a(66358),
                g = a(58272),
                b = a(19799),
                v = a(31294),
                w = a(43794),
                x = a(99220),
                y = a(50273),
                Z = a(75),
                S = a(31683),
                j = a(97536),
                _ = a(27764),
                L = a(21805),
                C = a(5632),
                F = a(59877),
                z = a(2784),
                A = a(38398),
                P = a.n(A),
                T = "languageSelectContent",
                N = (0, s.ZL)()(function(t, e) {
                    var a, o = t.shadows,
                        n = t.breakpoints,
                        c = t.palette,
                        i = t.zIndex,
                        s = t.tokens,
                        l = s.border,
                        u = s.size,
                        d = s.spacing,
                        f = s.radius,
                        p = s.fontSize,
                        h = s.color,
                        m = e.darkMode,
                        k = e.dropdownProps;
                    return {
                        anchor: {
                            textDecoration: "none",
                            color: m ? c.common.white : "inherit",
                            fontSize: p.m
                        },
                        dropdown: {
                            position: "relative",
                            marginBottom: d.s,
                            display: "inline-block"
                        },
                        dropdownButton: {
                            backgroundColor: "transparent",
                            color: m ? c.common.white : "inherit",
                            border: "".concat(l.width.m, " solid ").concat(c.grey[200]),
                            cursor: "pointer",
                            borderRadius: f.pill,
                            height: u.density.high,
                            width: "100%"
                        },
                        dropdownContent: (a = {
                            display: "flex",
                            visibility: k.visible ? "visible" : "hidden",
                            position: "absolute",
                            left: d.s,
                            top: k.visible ? k.y : void 0,
                            bottom: k.visible ? void 0 : 0,
                            backgroundColor: m ? "#282C38" : c.common.white,
                            minWidth: "calc(".concat(d["4xl"], " * 3.5)"),
                            zIndex: i.tooltip,
                            height: "auto",
                            maxHeight: "calc(".concat(d["4xl"], " * 3)"),
                            padding: 0,
                            boxShadow: o[4],
                            borderRadius: f.s
                        }, (0, r.Z)(a, n.down("md"), {
                            display: "block",
                            width: "85%",
                            maxHeight: "85vh",
                            minWidth: "calc(".concat(d["4xl"], " * 1.5)"),
                            overflowY: "scroll"
                        }), (0, r.Z)(a, n.up("md"), {
                            flexDirection: "column",
                            flexWrap: "wrap",
                            width: "95%"
                        }), (0, r.Z)(a, "& li", {
                            listStyleType: "none",
                            flex: "1 0 25%"
                        }), (0, r.Z)(a, "& a", {
                            padding: "".concat(d.s, " ").concat(d.m),
                            display: "block"
                        }), (0, r.Z)(a, "& a:hover", {
                            backgroundColor: m ? h["white-12"] : h.gray["onyx-6"]
                        }), a),
                        selectedLanguage: {
                            backgroundColor: m ? h["white-12"] : h.gray["onyx-6"]
                        }
                    }
                }),
                B = function(t) {
                    var e, a = t.languagePreference,
                        r = t.onChange,
                        n = t.darkMode,
                        s = (0, d.Z)((0, z.useState)({}), 2),
                        A = s[0],
                        B = s[1],
                        I = (0, d.Z)((0, z.useState)(!1), 2),
                        M = I[0],
                        D = I[1],
                        R = N({
                            dropdownProps: A,
                            darkMode: n
                        }),
                        U = R.classes,
                        E = R.cx,
                        H = (0, b.ug)().queryTranslations,
                        W = (0, v.Q)().encodeSearchTerm,
                        q = (0, F.$G)(Z.aGO).t,
                        O = (0, C.useRouter)(),
                        V = (0, z.useRef)(),
                        X = (0, z.useRef)(),
                        $ = (0, w.f)().setUserLanguage,
                        K = a || O.locale,
                        Q = (j.se.find(function(t) {
                            return t.code === K
                        }) || {}).name,
                        Y = H && Object.keys(H).length,
                        G = function(t) {
                            t.preventDefault(), t.stopPropagation()
                        },
                        J = function() {
                            var t, e, a = window.innerHeight - (null === (t = null == V ? void 0 : null === (e = V.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || void 0 === t ? void 0 : t.bottom),
                                r = ((null == X ? void 0 : X.current) || {}).clientHeight;
                            B({
                                y: a < r ? a - r : 0,
                                visible: !0
                            })
                        },
                        tt = function() {
                            B((0, u.Z)((0, o.Z)({}, A), {
                                visible: !1
                            }))
                        };
                    (0, z.useEffect)(function() {
                        return M ? (document.addEventListener("wheel", G, {
                                passive: !1
                            }), J()) : tt(),
                            function() {
                                document.removeEventListener("wheel", G)
                            }
                    }, [M]);
                    var te = function(t) {
                            var e = t.language,
                                a = (0, _.oY)(O.asPath);
                            if (Y) {
                                var r, o = H[e] || (null == O ? void 0 : null === (r = O.query) || void 0 === r ? void 0 : r.term);
                                a = (0, _.Iz)({
                                    path: a,
                                    term: W(o)
                                }), a = P().parse(a).pathname
                            }
                            var n = "/" !== a ? a : "";
                            return "".concat("en" !== e ? "/".concat(e) : "").concat(n) || "/"
                        },
                        ta = function(t) {
                            var e, a = t.language;
                            if (null == O ? void 0 : null === (e = O.query) || void 0 === e ? void 0 : e.term) return Y && H[a] ? void 0 : "nofollow"
                        },
                        tr = j.se.map(function(t) {
                            return (0, u.Z)((0, o.Z)({}, t), {
                                href: te({
                                    language: t.code
                                }),
                                rel: ta({
                                    language: t.code
                                })
                            })
                        }),
                        to = (0, S.u4)() ? g.Wn : void 0,
                        tn = (e = (0, l.Z)(function(t, e) {
                            var a, n;
                            return (0, f.__generator)(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (t.preventDefault(), L.Z.set(g.Ky, e), L.Z.set(g.uQ, e, to), L.Z.set(g.ki, e, to), !r) return [3, 2];
                                        return [4, r(e)];
                                    case 1:
                                        c.sent(), c.label = 2;
                                    case 2:
                                        return $({
                                            language: e,
                                            shouldShowSnackBar: !1
                                        }), null === (a = window.NREUM) || void 0 === a || null === (n = a.addPageAction) || void 0 === n || n.call(a, "UP3-1623 assign localized url to href", (0, u.Z)((0, o.Z)({}, window.location || {}), {
                                            language: e,
                                            shouldShowSnackBar: !1,
                                            sstkLocaleOptions: to
                                        })), window.location.href = te({
                                            language: e
                                        }), [2]
                                }
                            })
                        }), function(t, a) {
                            return e.apply(this, arguments)
                        });
                    return (0, c.jsx)(c.Fragment, {
                        children: (0, c.jsxs)(i.ZP, {
                            sm: !0,
                            xs: !0,
                            item: !0,
                            className: U.dropdown,
                            onMouseLeave: function() {
                                return D(!1)
                            },
                            onClick: function() {
                                return D(!0)
                            },
                            ref: V,
                            children: [(0, c.jsx)(m.z, {
                                className: U.dropdownButton,
                                "aria-label": q("ent:select_language"),
                                type: "button",
                                "data-automation": T,
                                labelTrack: k.JbN,
                                children: (0, c.jsxs)(i.ZP, {
                                    container: !0,
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    children: [(0, c.jsx)(p.Z, {
                                        mr: 3,
                                        ml: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        children: (0, c.jsx)(x.Language, {})
                                    }), (0, c.jsx)(h.Z, {
                                        variant: "body1",
                                        "data-automation": "".concat(T, "-optionSelected"),
                                        children: Q
                                    }), (0, c.jsx)(p.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        mr: 3,
                                        children: (0, c.jsx)(y._, {})
                                    })]
                                })
                            }), (0, c.jsx)("ul", {
                                ref: X,
                                className: U.dropdownContent,
                                children: tr.map(function(t) {
                                    var e = t.code,
                                        a = t.name,
                                        r = t.href,
                                        o = t.rel;
                                    return (0, c.jsx)("li", {
                                        className: E(Q === a && U.selectedLanguage),
                                        children: (0, c.jsx)("a", {
                                            rel: o,
                                            href: r,
                                            className: U.anchor,
                                            onClick: function(t) {
                                                return tn(t, e)
                                            },
                                            "data-automation": "".concat(T, "-").concat(e),
                                            children: a
                                        })
                                    }, e)
                                })
                            })]
                        })
                    })
                };
            B.defaultProps = {
                languagePreference: null,
                darkMode: !1
            };
            var I = (0, s.ZL)()(function(t) {
                    var e = t.palette,
                        a = t.tokens,
                        r = a.border,
                        o = a.radius,
                        n = a.size,
                        c = a.spacing;
                    return {
                        maxWidth: {
                            maxWidth: "200px"
                        },
                        loadingContainer: {
                            height: n.density.high,
                            border: "".concat(r.width.s, " solid ").concat(e.border1Color),
                            borderRadius: o.pill,
                            display: "flex",
                            justifyContent: "center",
                            margin: "".concat(c.s, " ").concat(c.s, " ").concat(c.base)
                        }
                    }
                }),
                M = function(t) {
                    var e = t.fullWidth,
                        a = (0, n.Z)(t, ["fullWidth"]),
                        s = I(),
                        l = s.classes,
                        u = s.cx;
                    return (0, c.jsx)(i.ZP, {
                        className: u((0, r.Z)({}, l.maxWidth, !e)),
                        container: !0,
                        spacing: 4,
                        alignItems: "flex-end",
                        children: (0, c.jsx)(B, (0, o.Z)({}, a))
                    })
                }
        },
        85966: function(t, e, a) {
            a.d(e, {
                H: function() {
                    return o
                }
            });
            var r = a(15873),
                o = (0, a(12281).g)(r.ZP)
        },
        12733: function(t, e, a) {
            a.d(e, {
                T: function() {
                    return x
                }
            });
            var r = a(47842),
                o = a(70865),
                n = a(96670),
                c = a(26297),
                i = a(87394),
                s = a(52322),
                l = a(83993),
                u = a(82056),
                d = a(62197),
                f = a(41033),
                p = a(80422),
                h = a(9390),
                m = a(85966),
                k = a(52720),
                g = a(50273),
                b = a(2784),
                v = (0, a(8740).ZL)()(function(t) {
                    var e = t.tokens,
                        a = e.fontSize,
                        r = e.spacing,
                        o = t.typography;
                    return {
                        nested: {
                            paddingLeft: r.base
                        },
                        label: {
                            fontSize: a.s
                        },
                        bold: {
                            fontWeight: o.fontWeightBold
                        }
                    }
                }),
                w = function(t) {
                    var e = t.href,
                        a = t.withoutLocalePrefix,
                        r = t.clickAnalyticsLabel;
                    return e ? a ? {
                        component: "a",
                        props: {}
                    } : {
                        component: h.r,
                        props: {
                            clickAnalyticsLabel: r
                        }
                    } : {
                        component: "span",
                        props: {}
                    }
                },
                x = function(t) {
                    var e = t.classesProps,
                        a = t.dropdownTextColor,
                        h = t.headerLabel,
                        y = t.IconComponent,
                        Z = t.isExpandedDefault,
                        S = t.links,
                        j = t.dataAutomation,
                        _ = t.onClick,
                        L = t.isNested,
                        C = t.clickTrack,
                        F = v(),
                        z = F.classes,
                        A = F.cx,
                        P = (0, i.Z)((0, b.useState)(Z), 2),
                        T = P[0],
                        N = P[1];
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(m.H, {
                            button: !0,
                            onClick: function() {
                                return N(!T)
                            },
                            "aria-label": "".concat(h, "-content"),
                            "data-automation": j,
                            clickTrack: C,
                            classes: {
                                root: A((0, r.Z)({}, e.nestedListItemRoot, L))
                            },
                            children: [y && (0, s.jsx)(l.Z, {
                                classes: {
                                    root: e.iconRoot
                                },
                                children: (0, s.jsx)(y, {
                                    color: "primary"
                                })
                            }), (0, s.jsx)(u.Z, {
                                classes: {
                                    root: z.headerLabel
                                },
                                primary: (0, s.jsx)(d.Z, (0, n.Z)((0, o.Z)({}, L && {
                                    variant: "body2"
                                }), {
                                    color: L ? "textSecondary" : "textPrimary",
                                    className: A((0, r.Z)({}, z.bold, !L)),
                                    children: h
                                }))
                            }), T ? (0, s.jsx)(k.K, {
                                color: "primary"
                            }) : (0, s.jsx)(g._, {
                                color: "primary"
                            })]
                        }), (0, s.jsx)(f.Z, { in: T,
                            timeout: "auto",
                            classes: {
                                wrapper: z.nested
                            },
                            "data-automation": "".concat(h, "_collapse"),
                            children: (0, s.jsx)(p.Z, {
                                disablePadding: !0,
                                children: S.map(function(t) {
                                    var r = t.label,
                                        i = t.withoutLocalePrefix,
                                        l = t.href,
                                        u = t.clickAnalyticsLabel,
                                        f = t.subMenuLinks,
                                        p = t.clickLabel,
                                        h = (0, c.Z)(t, ["label", "withoutLocalePrefix", "href", "clickAnalyticsLabel", "subMenuLinks", "clickLabel"]);
                                    if (f) return (0, s.jsx)(x, {
                                        dataAutomation: "".concat(r, "-content"),
                                        classesProps: e,
                                        headerLabel: r,
                                        links: f,
                                        onClick: _,
                                        isNested: !0
                                    }, r);
                                    var k = w({
                                            href: l,
                                            withoutLocalePrefix: i,
                                            clickAnalyticsLabel: u
                                        }),
                                        g = k.component,
                                        b = k.props;
                                    return (0, s.jsx)(m.H, (0, n.Z)((0, o.Z)({
                                        "aria-label": r,
                                        "data-automation": "".concat(r, "-link"),
                                        classes: {
                                            root: e.listItemDetailsRoot
                                        },
                                        color: "inherit",
                                        component: g,
                                        href: l,
                                        onClick: _,
                                        clickTrack: "profileDrawer.".concat(p)
                                    }, b, h), {
                                        children: (0, s.jsx)(d.Z, {
                                            className: z.label,
                                            color: a,
                                            children: r
                                        })
                                    }), r)
                                })
                            })
                        })]
                    })
                };
            x.defaultProps = {
                classesProps: {
                    iconRoot: "",
                    listItemDetailsRoot: ""
                },
                dropdownTextColor: "textSecondary",
                IconComponent: "",
                isExpandedDefault: !1,
                isNested: !1,
                dataAutomation: ""
            }
        },
        85635: function(t, e, a) {
            a.r(e), a.d(e, {
                SiteFooter: function() {
                    return tv
                }
            });
            var r, o = a(47842),
                n = a(52322),
                c = a(78675),
                i = a(41075),
                s = a(63040),
                l = a(62197),
                u = a(8740),
                d = new Date().getFullYear(),
                f = (0, u.ZL)()(function(t) {
                    return {
                        root: {
                            fontSize: t.tokens.fontSize.xs
                        }
                    }
                }),
                p = function(t) {
                    var e = t.t,
                        a = f().classes;
                    return (0, n.jsx)(l.Z, {
                        variant: "body2",
                        color: "textSecondary",
                        align: "center",
                        className: a.root,
                        children: e("site-footer:copyright", {
                            CURRENT_YEAR: d
                        })
                    })
                },
                h = a(63452),
                m = a(12733),
                k = a(46452),
                g = a(33301),
                b = a(65532),
                v = a(9823),
                w = a(92067),
                x = a(92405),
                y = a(2784),
                Z = a(70865),
                S = a(96670),
                j = a(26297),
                _ = a(80422),
                L = a(15873),
                C = a(9390),
                F = (0, u.ZL)()(function(t) {
                    var e = t.palette,
                        a = t.tokens,
                        r = a.fontSize,
                        o = a.fontWeight,
                        n = a.spacing;
                    return {
                        navLink: {
                            fontSize: r.xs,
                            "&:hover": {
                                color: e.text.primary,
                                cursor: "pointer"
                            }
                        },
                        headerTitle: {
                            padding: n.s,
                            paddingLeft: 0,
                            fontWeight: o.bold
                        },
                        link: {
                            width: "auto",
                            padding: n.s,
                            paddingLeft: 0
                        },
                        listRoot: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }
                    }
                }),
                z = function(t) {
                    var e = t.headerClass,
                        a = t.headerLabel,
                        r = t.links,
                        o = F(),
                        c = o.classes,
                        i = o.cx;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l.Z, {
                            className: i(c.headerTitle, e),
                            color: "textPrimary",
                            children: a
                        }), (0, n.jsx)(_.Z, {
                            classes: {
                                root: c.listRoot
                            },
                            component: "div",
                            disablePadding: !0,
                            children: r.map(function(t) {
                                var e = t.label,
                                    a = t.onClick,
                                    r = t.href,
                                    o = (0, j.Z)(t, ["label", "onClick", "href"]);
                                return (0, n.jsx)(L.ZP, (0, S.Z)((0, Z.Z)({
                                    "aria-label": e,
                                    onClick: a,
                                    className: c.link,
                                    component: r ? C.r : "span",
                                    href: r,
                                    button: !!a
                                }, o), {
                                    children: (0, n.jsx)(l.Z, {
                                        className: c.navLink,
                                        color: "textSecondary",
                                        children: e
                                    })
                                }), e)
                            })
                        })]
                    })
                };
            z.defaultProps = {
                headerClass: ""
            };
            var A = a(66890),
                P = a(39232),
                T = a(62021),
                N = a(23490),
                B = a(87394),
                I = a(81740),
                M = a(27050),
                D = {
                    data: {
                        entries: [{
                            id: "123ABC",
                            fields: {
                                copyTextBodyCopy: {
                                    cs: 'Ke 30.\xa0z\xe1ř\xed 2022 jsme nab\xedzeli v\xedce než <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424\xa0milionů sn\xedmků</a>.',
                                    da: 'Vi har mere end <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 millioner billeder</a> fra og med 30. september 2022.',
                                    de: 'Seit 30.\xa0September 2022 finden Sie bei uns mehr als <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424\xa0Millionen Bilder</a>.',
                                    el: 'Έως τις 30 Σεπτεμβρίου 2022, είχαμε διαθέσιμες περισσότερες από <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 εκατομμύρια εικόνες</a>.',
                                    en: 'We have more than <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 million images</a> as of September 30, 2022.',
                                    es: 'Al 30 de septiembre de 2022, contamos m\xe1s de <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424\xa0millones de im\xe1genes</a>.',
                                    fi: 'Meill\xe4 on yli <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 miljoonaa kuvaa</a> 30. syyskuuta 2022 l\xe4htien.',
                                    fr: 'Nous proposons plus de <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424\xa0millions d’images</a> au 30\xa0septembre\xa02022.',
                                    hi: 'हमारे पास 30 सितंबर 2022 तक की <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 मिलियन से भी ज़्यादा इमेज</a> हैं.',
                                    hu: '2022. szeptember 30-i adataink szerint t\xf6bb mint <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 milli\xf3 k\xe9ppel</a> rendelkez\xfcnk.',
                                    id: 'Per 30 September 2022, kami memiliki lebih dari <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 juta gambar</a>.',
                                    it: 'Offriamo oltre <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 milioni di immagini</a> (al 30 settembre 2022).',
                                    ja: '2022年9月30日現在、<a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">4億2,400万点を超える画像</a>があります。',
                                    ko: '2022년 9월 30일 기준 <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">4억 2천 4백만 개 이상의 이미지</a>를 보유하고 있습니다.',
                                    mr: 'आमच्याकडे 30 सप्टेंबर 2022 पर्यंत <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 दशलक्षाहून</a> अधिक प्रतिमा आहेत.',
                                    nb: 'Vi har mer enn <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 millioner bilder</a> per 30. september 2022.',
                                    nl: 'We hebben vanaf 30 september 2022 meer dan <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 miljoen afbeeldingen</a>.',
                                    pl: 'Na dzień 30\xa0września 2022\xa0r. mamy ponad <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424\xa0miliony obraz\xf3w</a>.',
                                    pt: 'Contamos com mais de <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 milh\xf5es de imagens</a> em 30 de setembro de 2022.',
                                    ro: 'Avem peste <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 de milioane de imagini</a>, la 30 septembrie 2022.',
                                    ru: 'У нас есть более <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424\xa0млн изображений</a> (по состоянию на 30\xa0сентября 2022\xa0г.).',
                                    sv: 'Vi har fler \xe4n <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 miljoner bilder</a> per den 30 september, 2022.',
                                    ta: 'செப்டெம்பர் 30, 2022 நிலவரப்படி எங்களிடம் <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 மில்லியனுக்கும் அதிகமான படங்கள்</a> உள்ளன.',
                                    te: 'సెప్టెంబర్ 30, 2022 నాటికి మా వద్ద <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 మిలియన్ల కంటే ఎక్కువ చిత్రాలు</a> ఉన్నాయి.',
                                    th: 'เรามีกว่า <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 ล้านภาพ</a> ณ วันที่ 30 กันยายน 2022',
                                    tr: '30 Eyl\xfcl 2022 tarihinden itibaren <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 milyondan fazla g\xf6rselimiz</a> var.',
                                    vi: 'T\xednh đến ng\xe0y 30 th\xe1ng 9 năm 2022, ch\xfang t\xf4i đ\xe3 sở hữu tr\xean <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">424 triệu ảnh</a>.',
                                    zh: '截至 2022 年 9 月 30 日，我们有超过 <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">4.24 亿张图片</a>。',
                                    zhHant: '截至 2022 年 9 月 30 日，我們擁有超過 <a href="https://www.shutterstock.com/explore/royalty-free-images" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-image">4.24 億張圖片</a>。'
                                }
                            }
                        }, {
                            id: "456XYZ",
                            fields: {
                                copyTextBodyCopy: {
                                    cs: 'Ke 30.\xa0z\xe1ř\xed 2022 jsme nab\xedzeli v\xedce než <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27\xa0milionů vide\xed</a>.',
                                    da: 'Vi har mere end <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 millioner videoer</a> fra og med 30. september 2022.',
                                    de: 'Seit 30.\xa0September\xa02022 finden Sie bei uns mehr als <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27\xa0Millionen Videos</a>.',
                                    el: 'Έως τις 30 Σεπτεμβρίου 2022, είχαμε διαθέσιμα περισσότερα από <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 εκατομμύρια κλιπ βίντεο</a>.',
                                    en: 'We have more than <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 million videos</a> as of September 30, 2022.',
                                    es: 'Al 30 de septiembre de 2022, contamos con m\xe1s de <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27\xa0millones de videos</a>.',
                                    fi: 'Meill\xe4 on yli <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 miljoonaa videota</a> 30. syyskuuta 2022 l\xe4htien.',
                                    fr: 'Nous proposons plus de <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27\xa0millions de vid\xe9os</a> au 30\xa0septembre\xa02022.',
                                    hi: 'हमारे पास 30 सितंबर 2022 तक के <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 मिलियन से भी ज़्यादा वीडियो</a> हैं.',
                                    hu: '2022. szeptember 30-i adataink szerint t\xf6bb mint <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 milli\xf3 vide\xf3val</a> rendelkez\xfcnk.',
                                    id: 'Per 30 September 2022, kami memiliki lebih dari <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 juta video</a>.',
                                    it: 'Offriamo oltre <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 milioni di video</a> (al 30 settembre 2022).',
                                    ja: '2022年9月30日現在、<a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">2,700万点を超える動画</a>があります。',
                                    ko: '2022년 9월 30일 기준 <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">2천7백만 개 이상의 동영상</a>을 보유하고 있습니다.',
                                    mr: 'आमच्याकडे 30 सप्टेंबर 2022 पर्यंत <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 दशलक्षाहून</a> अधिक व्हिडिओज आहेत.',
                                    nb: 'Vi har mer enn <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 millioner videoer</a> per 30. september 2022.',
                                    nl: 'We hebben vanaf 30 september 2022 meer dan <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 miljoen video\'s</a>.',
                                    pl: 'Na dzień 30\xa0września 2022\xa0r. mamy ponad <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27\xa0milion\xf3w klip\xf3w wideo</a>.',
                                    pt: 'Contamos com mais de <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 milh\xf5es de v\xeddeos</a> em 30 de setembro de 2022.',
                                    ro: 'Avem peste <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 de milioane de clipuri video</a>, la 30 septembrie 2022.',
                                    ru: 'У нас есть более <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27\xa0млн видео</a> (по состоянию на 30\xa0сентября 2022\xa0г.).',
                                    sv: 'Vi har fler \xe4n <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 miljoner videor</a> per den 30 september, 2022.',
                                    ta: 'செப்டெம்பர் 30, 2022 நிலவரப்படி எங்களிடம் <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 மில்லியனுக்கும் அதிகமான வீடியோக்கள்</a> உள்ளன.',
                                    te: 'సెప్టెంబర్ 30, 2022 నాటికి మా వద్ద <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 మిలియన్ల కంటే ఎక్కువ వీడియోలు</a> ఉన్నాయి.',
                                    th: 'เรามีกว่า <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 ล้านวิดีโอ</a> ณ วันที่ 30 กันยายน 2022',
                                    tr: '30 Eyl\xfcl 2022 tarihinden itibaren <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 milyondan fazla videomuz</a> var.',
                                    vi: 'T\xednh đến ng\xe0y 30 th\xe1ng 9 năm 2022, ch\xfang t\xf4i đ\xe3 sở hữu tr\xean <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">27 triệu video</a>.',
                                    zh: '截至 2022 年 9 月 30 日，我们有超过 <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">2700 万个视频</a>。',
                                    zhHant: '截至 2022 年 9 月 30 日，我們擁有超過 <a href="https://www.shutterstock.com/royalty-free/video-categories" data-track-action="click" data-track-section="SiteFooter" data-track-label="stats-video">2700 萬支影片</a>。'
                                }
                            }
                        }],
                        fields: {
                            modules: {
                                en: [{
                                    sys: {
                                        id: "123ABC"
                                    }
                                }, {
                                    sys: {
                                        id: "456XYZ"
                                    }
                                }]
                            }
                        }
                    }
                },
                R = a(67661),
                U = a(9009),
                E = a(3255),
                H = function(t) {
                    var e = t.assetType,
                        a = t.data,
                        r = t.langCode,
                        o = void 0 === r ? "en" : r,
                        n = (0, M.bH)(a),
                        c = "zh-Hant" === o ? "zhHant" : o;
                    if (n) {
                        var i, s, l, u, d, f, p, h, m, k, g = (0, B.Z)(n, 2),
                            b = g[0],
                            v = g[1],
                            w = null !== (m = null === (i = b.fields) || void 0 === i ? void 0 : null === (s = i.copyTextBodyCopy) || void 0 === s ? void 0 : s[c]) && void 0 !== m ? m : null === (l = b.fields) || void 0 === l ? void 0 : null === (u = l.copyTextBodyCopy) || void 0 === u ? void 0 : u.en,
                            x = null !== (k = null === (d = v.fields) || void 0 === d ? void 0 : null === (f = d.copyTextBodyCopy) || void 0 === f ? void 0 : f[c]) && void 0 !== k ? k : null === (p = b.fields) || void 0 === p ? void 0 : null === (h = p.copyTextBodyCopy) || void 0 === h ? void 0 : h.en;
                        return e === P.k4 ? w : x
                    }
                    return null
                },
                W = function(t) {
                    var e, a, r = t.assetType,
                        o = (0, b.PE)().locale,
                        n = (0, E.ZP)((0, I.Dn)({
                            queryParams: {
                                contentType: "fetchComponentsContainer",
                                fieldName: "slug",
                                fieldValue: "footer-stats",
                                language: "*",
                                include: "entries"
                            }
                        }).formattedUrl, function(t) {
                            return R.uS.get(t).then(function(t) {
                                return (0, U.O)(t.data)
                            })
                        }),
                        c = n.data,
                        i = n.error;
                    return i ? (null === (e = window.NREUM) || void 0 === e || null === (a = e.noticeError) || void 0 === a || a.call(e, i, {
                        msg: "graceful degradation of footer stats, error fetching CMS footer stats, falling back to statsFallback",
                        referrerPath: window.location.pathname,
                        referrerQuery: window.location.search
                    }), H({
                        assetType: r,
                        data: D.data,
                        langCode: o
                    })) : c ? H({
                        assetType: r,
                        data: c,
                        langCode: o
                    }) : H({
                        assetType: r,
                        data: D.data,
                        langCode: o
                    })
                },
                q = (0, u.ZL)()(function(t, e) {
                    var a = t.palette,
                        r = e.hasUnderLine;
                    return {
                        skeleton: {
                            maxWidth: "100%",
                            margin: "auto"
                        },
                        copyText: {
                            "& a": {
                                color: e.isWhite ? a.text.primary : a.text.secondary,
                                textDecoration: r ? "underline" : "none",
                                "&:hover": {
                                    color: a.text.primary,
                                    textDecoration: r ? "underline" : "none"
                                }
                            }
                        }
                    }
                }),
                O = function(t) {
                    var e = t.assetType,
                        a = t.hasUnderLine,
                        r = t.isWhite,
                        o = t.isInNumber,
                        c = (0, N.N)().isBot,
                        i = W({
                            assetType: e
                        }),
                        s = q({
                            hasUnderLine: void 0 !== a && a,
                            isWhite: void 0 !== r && r
                        }).classes;
                    if (c) return (0, n.jsx)(l.Z, {
                        variant: "body2",
                        color: "textSecondary",
                        align: "center",
                        className: s.copyText,
                        children: i && (0, n.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        })
                    });
                    if (i) {
                        var u, d, f, p, h, m = new DOMParser().parseFromString(i, "text/html"),
                            k = m.querySelector("a"),
                            g = Array.from(m.body.childNodes).filter(function(t) {
                                return t.nodeType === Node.TEXT_NODE
                            }),
                            b = {
                                href: null == k ? void 0 : k.getAttribute("href"),
                                trackAnalytics: {
                                    action: null == k ? void 0 : k.getAttribute("data-track-action"),
                                    section: null == k ? void 0 : k.getAttribute("data-track-section"),
                                    label: null == k ? void 0 : k.getAttribute("data-track-label")
                                },
                                text: null == k ? void 0 : k.textContent
                            },
                            v = g.map(function(t) {
                                return t.textContent
                            });
                        return (0, n.jsxs)(l.Z, {
                            variant: "body2",
                            color: "textSecondary",
                            align: "center",
                            className: s.copyText,
                            children: [v[0], (0, n.jsx)(C.r, {
                                clickAnalyticsLabel: "".concat(null == b ? void 0 : null === (u = b.trackAnalytics) || void 0 === u ? void 0 : u.section, ".").concat(null == b ? void 0 : null === (d = b.trackAnalytics) || void 0 === d ? void 0 : d.label),
                                href: null == b ? void 0 : b.href,
                                asLink: null == b ? void 0 : b.href,
                                "data-track-action": null == b ? void 0 : null === (f = b.trackAnalytics) || void 0 === f ? void 0 : f.action,
                                "data-track-section": null == b ? void 0 : null === (p = b.trackAnalytics) || void 0 === p ? void 0 : p.section,
                                "data-track-label": null == b ? void 0 : null === (h = b.trackAnalytics) || void 0 === h ? void 0 : h.label,
                                children: void 0 !== o && o ? function(t) {
                                    var e = /\b(million)\b/gi;
                                    if (e.test(t)) {
                                        var a = parseFloat(t.replace(e, "").trim()),
                                            r = (1e6 * a).toLocaleString();
                                        return t.replace(e, "").replace(a, r).trim()
                                    }
                                    return t
                                }(null == b ? void 0 : b.text) : null == b ? void 0 : b.text
                            }), v[1]]
                        })
                    }
                    return null
                };
            O.defaultProps = {
                assetType: P.k4
            };
            var V = function(t) {
                    var e = t.initialProps;
                    return (0, n.jsx)(O, (0, Z.Z)({}, e))
                },
                X = a(88849),
                $ = {
                    flagID: "locms-392-emphasize-footer-count-ii",
                    id: "LOCMS-392",
                    name: "Emphasize footer asset count link (II)",
                    treatments: (r = {}, (0, o.Z)(r, X.NM, function(t) {
                        var e = t.experiment,
                            a = t.initialProps;
                        return (0, y.useEffect)(function() {
                            e.recordImpression()
                        }, []), (0, n.jsx)(V, {
                            initialProps: a
                        })
                    }), (0, o.Z)(r, X.vG, function(t) {
                        var e = t.experiment,
                            a = t.initialProps;
                        return (0, y.useEffect)(function() {
                            e.recordImpression()
                        }, []), (0, n.jsx)(V, {
                            initialProps: (0, S.Z)((0, Z.Z)({}, a), {
                                hasUnderLine: !0,
                                isWhite: !0,
                                isInNumber: !0
                            })
                        })
                    }), r)
                },
                K = function() {
                    return (0, n.jsx)(n.Fragment, {})
                },
                Q = function(t) {
                    return (0, n.jsx)(T.K, {
                        config: $,
                        initialProps: t,
                        Portal: V,
                        SkeletonLoader: K
                    })
                },
                Y = a(27764),
                G = a(5632),
                J = (0, u.ZL)()(function(t) {
                    var e = t.breakpoints,
                        a = t.tokens.spacing;
                    return {
                        root: (0, o.Z)({
                            padding: "".concat(a.base, " 0")
                        }, e.up("md"), {
                            padding: "".concat(a.xl, " 0")
                        }),
                        placeholder: {
                            height: "20px"
                        }
                    }
                }),
                tt = function() {
                    var t = J().classes;
                    return (0, n.jsx)("div", {
                        className: t.placeholder
                    })
                },
                te = function() {
                    var t = J().classes,
                        e = (0, G.useRouter)().asPath,
                        a = (0, Y.qw)(e),
                        r = a === P.k4 || a === P.pX;
                    return (0, n.jsx)(i.ZP, {
                        classes: {
                            root: t.root
                        },
                        children: r ? (0, n.jsx)(Q, {
                            assetType: a
                        }) : (0, n.jsx)(tt, {})
                    })
                },
                ta = a(50930),
                tr = a(11181),
                to = a(31556),
                tn = a(38204),
                tc = "footerNav",
                ti = (0, tn.u9)(),
                ts = (0, tn.dk)(),
                tl = (0, tn.jH)(),
                tu = function() {
                    var t;
                    return null == window ? void 0 : null === (t = window.OneTrust) || void 0 === t ? void 0 : t.ToggleInfoDisplay()
                },
                td = (0, tn.ad)(),
                tf = (0, tn.W5)(),
                tp = (0, tn._8)(),
                th = (0, tn.j$)(),
                tm = (0, B.Z)((0, to.Ni)(), 1)[0],
                tk = function(t) {
                    var e = t.brand,
                        a = t.enterpriseHelpLinkFlag,
                        r = t.t,
                        o = {
                            label: r("site-footer:help"),
                            href: null,
                            target: "_blank"
                        },
                        n = {
                            label: r("ent:usa_phone_number"),
                            href: "tel:".concat(r("ent:usa_phone_number").replace(/\D/g, ""))
                        };
                    return e === tr.BRANDS.SSTK ? (o.href = td, [o]) : e === tr.BRANDS.ENTERPRISE && a ? (o.href = tf, [o, n]) : [n]
                },
                tg = function(t) {
                    var e = t.brand,
                        a = t.t,
                        r = t.representativeInfo,
                        o = t.langCode,
                        n = t.region,
                        c = tk({
                            brand: e,
                            enterpriseHelpLinkFlag: t.enterpriseHelpLinkFlag,
                            t: a
                        }),
                        i = [{
                            clickAnalyticsLabel: "".concat(tc, ".sellContent"),
                            label: a("site-footer:sell"),
                            href: (0, Y.oo)("https://submit.shutterstock.com/?language=__lang__", o, {
                                langPlaceholder: "__lang__"
                            }),
                            rel: "noreferrer noopener",
                            target: "_blank"
                        }, {
                            clickAnalyticsLabel: "".concat(tc, ".aboutUs"),
                            label: a("site-footer:about"),
                            href: (0, Y.oo)("https://www.shutterstock.com/about", o),
                            rel: "noreferrer noopener",
                            target: "_blank"
                        }, {
                            clickAnalyticsLabel: "".concat(tc, ".careers"),
                            label: a("site-footer:careers"),
                            href: (0, Y.oo)("https://careers.shutterstock.com", o),
                            rel: "noreferrer noopener",
                            target: "_blank"
                        }, {
                            clickAnalyticsLabel: "".concat(tc, ".pressMedia"),
                            label: a("site-footer:press"),
                            href: (0, Y.oo)("https://www.shutterstock.com/press", o),
                            rel: "noreferrer noopener nofollow",
                            target: "_blank"
                        }, {
                            clickAnalyticsLabel: "".concat(tc, ".investorRelations"),
                            label: a("site-footer:investors"),
                            href: "https://investor.shutterstock.com",
                            rel: "noreferrer noopener",
                            target: "_blank"
                        }, {
                            clickAnalyticsLabel: "".concat(tc, ".blog"),
                            label: a("ent:shutterstock_blog"),
                            href: (0, Y.oo)("https://www.shutterstock.com/blog", o),
                            rel: "noreferrer noopener",
                            target: "_blank"
                        }];
                    e === tr.BRANDS.SSTK && (i.push({
                        clickAnalyticsLabel: "".concat(tc, ".popularSearches"),
                        label: a("site-footer:popular_searches"),
                        href: (0, Y.oo)("https://www.shutterstock.com/explore/sitemap", o),
                        rel: "noreferrer noopener",
                        target: "_blank"
                    }), i.push({
                        clickAnalyticsLabel: "".concat(tc, ".coupons"),
                        label: a("site-footer:coupons"),
                        href: (0, Y.oo)("https://www.shutterstock.com/explore/coupons", o),
                        rel: "noreferrer noopener",
                        target: "_blank"
                    }));
                    var s = [e === tr.BRANDS.SSTK ? {
                        clickAnalyticsLabel: "".concat(tc, ".colorPaletteGenerator"),
                        label: a("color_palette_generator"),
                        href: (0, Y.oo)("https://www.shutterstock.com/colors/color-palette-generator", o),
                        rel: "noreferrer noopener",
                        target: "_blank"
                    } : {}];
                    return [{
                        label: a("site-footer:company"),
                        links: i
                    }, {
                        groupOfFooterLinks: [{
                            label: a("apps_and_plugins"),
                            links: (0, ta.Z)(s).concat([{
                                clickAnalyticsLabel: "".concat(tc, ".aiStyles"),
                                label: a("generate_style_breadcrumb_ai_styles"),
                                href: (0, Y.oo)("https://www.shutterstock.com/ai-image-generator/styles", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".iosApp"),
                                label: a("ent:ios_app"),
                                href: (0, Y.oo)("https://apps.apple.com/__lang__/app/apple-store/id473347409", o, {
                                    langPlaceholder: "__lang__"
                                }),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".androidApp"),
                                label: a("ent:android_app"),
                                href: (0, Y.oo)("https://play.google.com/store/apps/details?id=com.shutterstock.consumer&hl=__lang__&referrer=utm_source%3Dsstk.com%2520lohp", o, {
                                    langPlaceholder: "__lang__"
                                }),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".mobileApp"),
                                label: a("shutterstock_mobile_app"),
                                href: (0, Y.oo)("https://www.shutterstock.com/explore/customer-mobile-app", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".stockPhotoPlugins"),
                                label: a("stock_photo_plugins"),
                                href: (0, Y.oo)("https://www.shutterstock.com/explore/plugins", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }])
                        }, {
                            label: a("site-footer:partner"),
                            links: [{
                                clickAnalyticsLabel: "".concat(tc, ".developers"),
                                label: a("site-footer:developers"),
                                href: (0, Y.oo)("https://www.shutterstock.com/developers", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".affiliateReseller"),
                                label: a("site-footer:affiliates"),
                                href: (0, Y.oo)("https://www.shutterstock.com/explore/affiliates", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".internationalReseller"),
                                label: a("site-footer:international"),
                                href: (0, Y.oo)("https://www.shutterstock.com/business/international-creative-reseller", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }]
                        }]
                    }, {
                        groupOfFooterLinks: [{
                            label: a("site-footer:legal"),
                            links: [{
                                clickAnalyticsLabel: "".concat(tc, ".websiteTermsOfUse"),
                                label: a("ent:website_terms_of_use"),
                                href: tl,
                                isCoreUrl: !0,
                                isAbsoluteUrl: !0,
                                rel: "noreferrer noopener nofollow",
                                target: "_blank"
                            }, (0, Z.Z)({
                                clickAnalyticsLabel: "".concat(tc, ".termsOfService"),
                                label: a("ent:terms_of_service"),
                                rel: "noreferrer noopener nofollow",
                                target: "_blank"
                            }, e === tr.BRANDS.ENTERPRISE ? {
                                href: tm
                            } : {
                                href: tp,
                                isCoreUrl: !0,
                                isAbsoluteUrl: !0
                            }), {
                                clickAnalyticsLabel: "".concat(tc, ".privacyPolicy"),
                                label: a("site-footer:privacy_policy"),
                                href: ti,
                                isCoreUrl: !0,
                                isAbsoluteUrl: !0,
                                rel: "noreferrer noopener nofollow",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".modernSlaveryStatement"),
                                label: a("site-footer:modern_slavery_statement"),
                                href: ts,
                                isCoreUrl: !0,
                                isAbsoluteUrl: !0,
                                rel: "noreferrer noopener nofollow",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".cookiePreferences"),
                                label: a("site-footer:cookie_preferences"),
                                isCoreUrl: !0,
                                isAbsoluteUrl: !1,
                                onClick: tu,
                                rel: "noreferrer noopener nofollow"
                            }].concat((0, ta.Z)(["DE", "AT", "CH"].includes(n) ? [{
                                clickAnalyticsLabel: "".concat(tc, ".impressum"),
                                label: a("site-footer:impressum"),
                                rel: "noreferrer noopener nofollow",
                                target: "_blank",
                                href: th,
                                isCoreUrl: !0,
                                isAbsoluteUrl: !0
                            }] : []))
                        }, {
                            label: a("innovation"),
                            links: [{
                                clickAnalyticsLabel: "".concat(tc, ".shutterstockAI"),
                                label: a("shutterstock-ai"),
                                href: (0, Y.oo)("https://www.shutterstock.com/discover/shutterstock-ai", o),
                                rel: "noreferrer noopener nofollow",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".imageGenerator"),
                                label: a("ai-image-generator"),
                                href: (0, Y.oo)("https://www.shutterstock.com/ai-image-generator", o),
                                rel: "noreferrer noopener nofollow",
                                target: "_blank"
                            }]
                        }]
                    }, {
                        groupOfFooterLinks: [{
                            label: a("site-header:contact_us"),
                            links: (0, ta.Z)((null == r ? void 0 : r.phone) ? [{
                                label: r.phone
                            }] : []).concat((0, ta.Z)(c), (0, ta.Z)((null == r ? void 0 : r.email) ? [{
                                label: a("pricing:email_us_card_button_text"),
                                href: "mailto:".concat(r.email)
                            }] : []))
                        }, {
                            label: a("site-footer:services"),
                            links: [{
                                clickAnalyticsLabel: "".concat(tc, ".liveAssignments"),
                                label: a("site-footer:live_assignments"),
                                href: (0, Y.oo)("https://www.shutterstock.com/editorial/event-photography-assignments", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, {
                                clickAnalyticsLabel: "".concat(tc, ".rightsAndClearance"),
                                label: a("site-footer:rights_and_clearance"),
                                href: (0, Y.oo)("https://www.shutterstock.com/business/editorial-rights-and-clearance", o),
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }]
                        }]
                    }]
                },
                tb = (0, u.ZL)()(function(t, e) {
                    var a, r = t.breakpoints,
                        n = t.palette,
                        c = t.transitions,
                        i = t.tokens,
                        s = i.border,
                        l = i.spacing;
                    return {
                        root: (a = {
                            padding: "0 ".concat(l.m, " ").concat(l.m),
                            borderTop: "".concat(s.width.s, " solid ").concat(n.border1Color),
                            marginTop: "auto",
                            backgroundColor: n.background.default
                        }, (0, o.Z)(a, r.down("md"), {
                            marginBottom: k.e$
                        }), (0, o.Z)(a, r.down("sm"), {
                            marginBottom: e ? 0 : k.e$
                        }), (0, o.Z)(a, "transition", c.create("margin", {
                            easing: c.easing.sharp,
                            duration: c.duration.leavingScreen
                        })), a),
                        container: (0, o.Z)({
                            padding: 0
                        }, r.up("md"), {
                            padding: "0 ".concat(l.s)
                        }),
                        desktopHeaderLabel: {
                            marginTop: l.s
                        },
                        footerContent: (0, o.Z)({}, r.up("md"), {
                            paddingBottom: l.xxl
                        }),
                        footerTail: (0, o.Z)({
                            paddingTop: l.l,
                            borderTop: "".concat(s.width.s, " solid ").concat(n.border1Color),
                            flexDirection: "column",
                            alignItems: "center"
                        }, r.up("md"), {
                            flexDirection: "row-reverse",
                            justifyContent: "space-between"
                        }),
                        socialMedia: (0, o.Z)({
                            marginBottom: l.s
                        }, r.up("md"), {
                            marginBottom: 0
                        }),
                        languageContainer: (0, o.Z)({
                            flexBasis: "auto",
                            order: 0,
                            width: "100%"
                        }, r.up("md"), {
                            flexBasis: 0,
                            order: 1,
                            width: "unset",
                            marginRight: "100px"
                        }),
                        linkContainer: {
                            order: 1
                        }
                    }
                }),
                tv = function(t) {
                    var e = t.t,
                        a = (0, v.D)(),
                        r = a.brand,
                        o = tb(a.isBrandSstk),
                        l = o.classes,
                        u = o.cx,
                        d = (0, w.z)({
                            fetchTrigger: !0
                        }),
                        f = (0, x.p)(g.Kn, !1),
                        k = (0, b.PE)(),
                        Z = k.locale,
                        S = k.region,
                        j = (0, y.useMemo)(function() {
                            return tg({
                                brand: r,
                                representativeInfo: d,
                                t: e,
                                langCode: Z,
                                region: S,
                                enterpriseHelpLinkFlag: f
                            })
                        }, [r, d, e, Z, S, f]);
                    return (0, n.jsxs)("div", {
                        className: l.root,
                        children: [(0, n.jsx)(te, {}), (0, n.jsxs)(c.Z, {
                            className: l.container,
                            maxWidth: "lg",
                            children: [(0, n.jsxs)(i.ZP, {
                                classes: {
                                    root: l.footerContent
                                },
                                container: !0,
                                children: [(0, n.jsx)(i.ZP, {
                                    item: !0,
                                    className: l.languageContainer,
                                    xs: 12,
                                    md: !0,
                                    children: (0, n.jsx)(h.S, {
                                        fullWidth: !0,
                                        darkMode: !0
                                    })
                                }), j.map(function(t) {
                                    return t.groupOfFooterLinks ? (0, n.jsx)(i.ZP, {
                                        className: l.linkContainer,
                                        item: !0,
                                        xs: 12,
                                        md: !0,
                                        children: t.groupOfFooterLinks.map(function(t, e) {
                                            var a = t.label,
                                                r = t.links;
                                            return (0, n.jsxs)(y.Fragment, {
                                                children: [(0, n.jsx)(s.Z, {
                                                    mdUp: !0,
                                                    implementation: "css",
                                                    children: (0, n.jsx)(m.T, {
                                                        classesProps: l,
                                                        headerLabel: a,
                                                        links: r
                                                    })
                                                }), (0, n.jsx)(s.Z, {
                                                    mdDown: !0,
                                                    implementation: "css",
                                                    children: (0, n.jsx)(z, {
                                                        headerClass: u(0 !== e ? l.desktopHeaderLabel : null),
                                                        headerLabel: a,
                                                        links: r
                                                    })
                                                })]
                                            }, a)
                                        })
                                    }, t.groupOfFooterLinks[0].label) : (0, n.jsxs)(i.ZP, {
                                        className: l.linkContainer,
                                        item: !0,
                                        xs: 12,
                                        md: !0,
                                        children: [(0, n.jsx)(s.Z, {
                                            mdUp: !0,
                                            implementation: "css",
                                            children: (0, n.jsx)(m.T, {
                                                classesProps: l,
                                                headerLabel: t.label,
                                                links: t.links
                                            })
                                        }), (0, n.jsx)(s.Z, {
                                            mdDown: !0,
                                            implementation: "css",
                                            children: (0, n.jsx)(z, {
                                                headerLabel: t.label,
                                                links: t.links
                                            })
                                        })]
                                    }, t.label)
                                })]
                            }), (0, n.jsxs)(i.ZP, {
                                container: !0,
                                classes: {
                                    root: l.footerTail
                                },
                                children: [(0, n.jsx)(A.u, {
                                    containerClass: l.socialMedia
                                }), (0, n.jsx)(p, {
                                    t: e
                                })]
                            })]
                        })]
                    })
                }
        },
        66890: function(t, e, a) {
            a.d(e, {
                u: function() {
                    return m
                }
            });
            var r = a(52322),
                o = a(9390),
                n = a(73572),
                c = a(67855),
                i = a(11849),
                s = a(13739),
                l = a(58430),
                u = a(39702),
                d = a(8740),
                f = a(40876),
                p = [{
                    ariaLabel: n.vq,
                    link: "https://www.facebook.com/Shutterstock",
                    IconComponent: c.s
                }, {
                    ariaLabel: n.Ib,
                    link: "https://twitter.com/Shutterstock",
                    IconComponent: i.t
                }, {
                    ariaLabel: n.Er,
                    link: "https://www.instagram.com/shutterstock",
                    IconComponent: s.m
                }, {
                    ariaLabel: n.fW,
                    link: "https://www.linkedin.com/company/shutterstock",
                    IconComponent: l.n
                }, {
                    ariaLabel: n.VU,
                    link: "https://www.youtube.com/c/shutterstock",
                    IconComponent: u._
                }, {
                    ariaLabel: n.iC,
                    link: "https://vimeo.com/shutterstock",
                    IconComponent: f.k
                }],
                h = (0, d.ZL)()(function(t) {
                    var e = t.tokens.spacing;
                    return {
                        socialMediaContainer: {
                            display: "flex",
                            alignItems: "center"
                        },
                        link: {
                            color: t.palette.text.primary,
                            "&:not(:last-child)": {
                                marginRight: e.base
                            }
                        }
                    }
                }),
                m = function(t) {
                    var e = t.containerClass,
                        a = t.externalLinks,
                        n = h(),
                        c = n.classes,
                        i = n.cx;
                    return (0, r.jsx)("div", {
                        className: i(c.socialMediaContainer, e),
                        children: a.map(function(t) {
                            var e = t.ariaLabel,
                                a = t.link,
                                n = t.IconComponent;
                            return (0, r.jsx)(o.r, {
                                className: c.link,
                                href: a,
                                rel: "nofollow noreferrer noopener",
                                target: "_blank",
                                "aria-label": e,
                                children: (0, r.jsx)(n, {})
                            }, a + e)
                        })
                    })
                };
            m.defaultProps = {
                containerClass: "",
                externalLinks: p
            }
        },
        40876: function(t, e, a) {
            a.d(e, {
                k: function() {
                    return n
                }
            });
            var r = a(52322),
                o = a(5007),
                n = function() {
                    return (0, r.jsx)(o.Z, {
                        fontSize: "small",
                        children: (0, r.jsx)("path", {
                            d: "M22 7.42c-.09 1.95-1.45 4.62-4.08 8.02C15.2 19 12.9 20.75 11 20.75c-1.15 0-2.14-1.08-2.95-3.25c-.55-1.96-1.05-3.94-1.61-5.92c-.6-2.16-1.24-3.24-1.94-3.24c-.14 0-.66.32-1.56.95L2 8.07c1-.87 1.96-1.74 2.92-2.61c1.32-1.14 2.31-1.74 2.96-1.8c1.56-.16 2.52.92 2.88 3.2c.39 2.47.66 4 .81 4.6c.43 2.04.93 3.04 1.48 3.04c.42 0 1.05-.64 1.89-1.97c.84-1.32 1.29-2.33 1.35-3.03c.12-1.14-.33-1.71-1.35-1.71c-.48 0-.97.11-1.48.33c.98-3.23 2.86-4.8 5.63-4.71c2.06.06 3.03 1.4 2.91 4.01z"
                        })
                    })
                }
        },
        33301: function(t, e, a) {
            a.d(e, {
                $: function() {
                    return n
                },
                $5: function() {
                    return h
                },
                $M: function() {
                    return i
                },
                C6: function() {
                    return H
                },
                C_: function() {
                    return p
                },
                Cl: function() {
                    return _
                },
                GX: function() {
                    return V
                },
                Hl: function() {
                    return J
                },
                I6: function() {
                    return s
                },
                Jo: function() {
                    return L
                },
                Kn: function() {
                    return E
                },
                Mh: function() {
                    return x
                },
                NV: function() {
                    return z
                },
                O8: function() {
                    return B
                },
                Pl: function() {
                    return N
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
                    return m
                },
                T$: function() {
                    return K
                },
                TJ: function() {
                    return W
                },
                V3: function() {
                    return P
                },
                VV: function() {
                    return v
                },
                WX: function() {
                    return G
                },
                Xd: function() {
                    return ta
                },
                Y$: function() {
                    return I
                },
                YV: function() {
                    return O
                },
                _x: function() {
                    return b
                },
                ak: function() {
                    return M
                },
                bq: function() {
                    return S
                },
                cM: function() {
                    return j
                },
                cR: function() {
                    return k
                },
                ck: function() {
                    return te
                },
                f: function() {
                    return g
                },
                fX: function() {
                    return l
                },
                fb: function() {
                    return A
                },
                fn: function() {
                    return u
                },
                hK: function() {
                    return T
                },
                iH: function() {
                    return C
                },
                ik: function() {
                    return y
                },
                jI: function() {
                    return Y
                },
                jM: function() {
                    return w
                },
                lP: function() {
                    return $
                },
                lm: function() {
                    return F
                },
                mF: function() {
                    return c
                },
                mX: function() {
                    return X
                },
                pG: function() {
                    return o
                },
                pO: function() {
                    return U
                },
                qR: function() {
                    return f
                },
                qf: function() {
                    return R
                },
                vD: function() {
                    return tt
                },
                vb: function() {
                    return r
                },
                wt: function() {
                    return Z
                },
                yY: function() {
                    return D
                }
            });
            var r = "sstk1-dam",
                o = "dam-on-e-comm-fast-follow",
                n = "dam-advanced-collection-sharing",
                c = "UP2-1693-enterprise-custom-metadata",
                i = "up-2-1740-remember-last-used-metadata",
                s = "reverse-audio-search",
                l = "predict-uploads-ecomm",
                u = "predict-v2-pages",
                d = "predict-color-palette",
                f = "catalog-upload-allow-all-files",
                p = "next-remove-team-users",
                h = "next-quote-gen-tool",
                m = "createapp-homepage",
                k = "createapp-homepage-enterprise",
                g = "createapp-catalog",
                b = "createapp-catalog-foxtrot",
                v = "create-flow-homepage",
                w = "create-flow-homepage-enterprise",
                x = "b2l2-user-address-in-cart",
                y = "analyze-pages",
                Z = "up-2-1665-e-comm-allow-premium-editorial-licensing",
                S = "catalog-collections-default-alpha-sort",
                j = "fact-157-catalog-video-render-downloads",
                _ = "create-video",
                L = "create-video-entry-points-pre-licensed",
                C = "create-video-entry-points-licensed",
                F = "create-video-enterprise",
                z = "up-2-1847-support-free-assets-on-shutterstock-for-dream-partnership",
                A = "adyen-3ds",
                P = "dam-holding-contribute-button",
                T = "generate-chatbot-release",
                N = "generative-pride-month",
                B = "synthetic-generative-assets-beta",
                I = "rtn-774-3d-objects-ecomm-beta",
                M = "color-insights",
                D = "keyword-insights",
                R = "FACT-90-pixelsquid-in-catalog",
                U = "SDAQ-56-pixel-squid-on-enterprise",
                E = "sdaq-96-help-center-on-enterprise",
                H = "NOV-1882-block-card-testing-on-billing-page",
                W = "project-peacock",
                q = "project-peacock-design-canvas-tab",
                O = "project-peacock-remove-background",
                V = "ii-438-ip-review-for-generated-assets",
                X = "project-peacock-remove-background",
                $ = "project-peacock-magic-erase",
                K = "project-peacock-generate-variations",
                Q = "project-peacock-magic-brush",
                Y = "project-peacock-filters",
                G = "project-peacock-crop",
                J = "project-peacock-zoom-out",
                tt = "project-peacock-undo-redo",
                te = "project-peacock-like-edit",
                ta = "project-peacock-edit-in-create"
        },
        13011: function(t, e, a) {
            a.d(e, {
                Cp: function() {
                    return o
                },
                E: function() {
                    return f
                },
                G: function() {
                    return s
                },
                M: function() {
                    return j
                },
                Mz: function() {
                    return g
                },
                NJ: function() {
                    return i
                },
                On: function() {
                    return x
                },
                P7: function() {
                    return v
                },
                So: function() {
                    return m
                },
                Th: function() {
                    return p
                },
                W6: function() {
                    return l
                },
                ZN: function() {
                    return y
                },
                _X: function() {
                    return c
                },
                gO: function() {
                    return r
                },
                kH: function() {
                    return S
                },
                mD: function() {
                    return b
                },
                pG: function() {
                    return w
                },
                pP: function() {
                    return u
                },
                pQ: function() {
                    return Z
                },
                r0: function() {
                    return _
                },
                rh: function() {
                    return h
                },
                sQ: function() {
                    return d
                },
                yF: function() {
                    return n
                },
                zf: function() {
                    return k
                }
            });
            var r = 150,
                o = 24,
                n = 175,
                c = 54,
                i = 40,
                s = 200,
                l = 14,
                u = 100,
                d = 12,
                f = 160,
                p = 9 / 16,
                h = "".concat(100 * p, "%"),
                m = 1 / p,
                k = 1.775,
                g = 40,
                b = 1,
                v = 57,
                w = 280,
                x = "350px",
                y = 90,
                Z = 90,
                S = 135,
                j = {
                    elevation: 0
                },
                _ = "140px"
        },
        73572: function(t, e, a) {
            a.d(e, {
                Er: function() {
                    return n
                },
                Ib: function() {
                    return o
                },
                QD: function() {
                    return l
                },
                VU: function() {
                    return i
                },
                fW: function() {
                    return c
                },
                iC: function() {
                    return s
                },
                rg: function() {
                    return u
                },
                uc: function() {
                    return d
                },
                vq: function() {
                    return r
                }
            });
            var r = "Facebook",
                o = "Twitter",
                n = "Instagram",
                c = "LinkedIn",
                i = "YouTube",
                s = "Vimeo",
                l = "#4267B2",
                u = "#FD1D1D",
                d = "#E60023"
        },
        31294: function(t, e, a) {
            a.d(e, {
                Q: function() {
                    return n
                }
            });
            var r = a(48417),
                o = a(2784),
                n = function() {
                    return {
                        encodeSearchTerm: (0, o.useCallback)(function(t) {
                            return (0, r.U9)(t)
                        }, []),
                        decodeSearchTerm: (0, o.useCallback)(function(t) {
                            return (0, r.JF)(t)
                        }, [])
                    }
                }
        },
        99110: function(t, e, a) {
            a.d(e, {
                W: function() {
                    return o
                }
            });
            var r = a(2784),
                o = function(t) {
                    var e = (0, r.useRef)();
                    return void 0 !== t && (e.current = t), e.current
                }
        },
        43794: function(t, e, a) {
            a.d(e, {
                f: function() {
                    return p
                }
            });
            var r = a(98788),
                o = a(5163),
                n = a(81740),
                c = a(44699),
                i = a(42405),
                s = a(43110),
                l = a(67661),
                u = a(75),
                d = a(59877),
                f = a(2784),
                p = function() {
                    var t, e = (0, i.D)().enqueueSnackbar,
                        a = (0, s.Zv)().mutate,
                        p = (0, d.$G)(u.pDn).t;
                    return {
                        setUserLanguage: (0, f.useCallback)((t = (0, r.Z)(function(t) {
                            var r, i, s;
                            return (0, o.__generator)(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        r = t.language, i = t.shouldShowSnackBar, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, 4, 5]), [4, l.uS.patch((0, n.qS)().formattedUrl, {
                                            language: r
                                        })];
                                    case 2:
                                        return o.sent(), i && e({
                                            alertSeverity: c.MR,
                                            message: p("notifications:settings_updated")
                                        }), [3, 5];
                                    case 3:
                                        return s = o.sent(), i && e({
                                            alertSeverity: c.pn,
                                            error: s,
                                            jiraReference: "VTL-718",
                                            message: p("notifications:label_generic_failure"),
                                            reason: "set user language"
                                        }), [3, 5];
                                    case 4:
                                        return null == a || a(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        }), function(e) {
                            return t.apply(this, arguments)
                        }), [e, p, a])
                    }
                }
        },
        92067: function(t, e, a) {
            a.d(e, {
                z: function() {
                    return u
                }
            });
            var r = a(81740),
                o = a(52884),
                n = a(9823),
                c = a(67661),
                i = a(9009),
                s = a(3255),
                l = a(43110),
                u = function(t) {
                    var e = t.fetchTrigger,
                        a = (0, n.D)(),
                        u = a.isBrandEnterprise,
                        d = a.isBrandSstk,
                        f = (0, l.B)(),
                        p = (0, s.ZP)(u && f && e ? (0, r.OC)().formattedUrl : null, function(t) {
                            return c.uS.get(t).then(function(t) {
                                return (0, i.O)(t.data)
                            })
                        }, {
                            dedupingInterval: o.no,
                            shouldRetryOnError: !1
                        }),
                        h = p.data,
                        m = p.error;
                    return (null == m ? void 0 : m.status) >= 400 || !f || d ? null : h
                }
        },
        92405: function(t, e, a) {
            a.d(e, {
                p: function() {
                    return Z
                }
            });
            var r = a(47842),
                o = a(70865),
                n = a(96670),
                c = a(26297),
                i = a(23945),
                s = a(81740),
                l = a(7297),
                u = a(65532),
                d = a(9823),
                f = a(13271),
                p = a(88436),
                h = a(67661),
                m = a(5632),
                k = a(3255),
                g = a(99110),
                b = a(43110),
                v = "auto",
                w = {},
                x = function(t) {
                    return "flag[".concat(t, "]")
                },
                y = function(t, e) {
                    var a = x(t);
                    return e[a] === v ? v : "true" === e[a]
                };

            function Z(t, e, a, Z) {
                var S = (0, p.r)(),
                    j = (0, b.jy)().data,
                    _ = (void 0 === j ? {} : j).id,
                    L = (0, m.useRouter)().query,
                    C = (0, u.PE)(),
                    F = C.locale,
                    z = C.region,
                    A = (0, d.D)().brand,
                    P = (0, s.Hx)(F, A).formattedUrl,
                    T = (0, k.ZP)(!a && (Z && !_ || _) && S ? P : null, function(t) {
                        var e;
                        return h.uS.get(t, {
                            headers: (e = {}, (0, r.Z)(e, l.yx, S), (0, r.Z)(e, l.L5, F), (0, r.Z)(e, l.UQ, A), (0, r.Z)(e, l.cT, z), e)
                        }).then(function(t) {
                            return t.data
                        })
                    }, {
                        shouldRetryOnError: !1
                    }).data,
                    N = (0, f._)("forcedFlags", w),
                    B = N.storedValue,
                    I = N.setValue,
                    M = function(t, e) {
                        var a = B[t],
                            s = (0, c.Z)(B, [t].map(i.Z));
                        e === v && t in B ? I(s) : e !== v && a !== e && I((0, n.Z)((0, o.Z)({}, s), (0, r.Z)({}, t, e)))
                    },
                    D = (0, g.W)(null != T ? T : t ? (0, r.Z)({}, t, e) : void 0);
                if (D && void 0 !== t) {
                    if (x(t) in L) {
                        var R = y(t, L);
                        return M(t, R), R === v ? D[t] : R
                    }
                    return t in B ? Boolean(B[t]) : D[t]
                }
                return D && void 0 === t && Object.keys(D).forEach(function(t) {
                    if (x(t) in L) {
                        var e = y(t, L);
                        e !== v && (D[t] = e), M(t, e)
                    } else t in B && (D[t] = B[t])
                }), D
            }
        },
        50273: function(t, e, a) {
            a.d(e, {
                _: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M9.867 12.133L8 14l8 8 8-8-1.867-1.867L16 18.266l-6.133-6.133z"
                }), "ChevronDown.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        52720: function(t, e, a) {
            a.d(e, {
                K: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M22.133 21.2L24 19.333l-8-8-8 8L9.867 21.2 16 15.067l6.133 6.133z"
                }), "ChevronUp.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        67855: function(t, e, a) {
            a.d(e, {
                s: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M27.333 4H4.666c-.8 0-1.333.667-1.333 1.333v22.533c0 .8.667 1.333 1.333 1.333h12.133v-9.867h-3.333v-3.867h3.333v-2.533c0-3.333 2-5.067 4.933-5.067 1.333 0 2.533.133 2.933.133v3.333h-2c-1.6 0-1.867.8-1.867 1.867v2.4h3.733l-.533 3.867h-3.333v9.867h6.4c.8 0 1.333-.667 1.333-1.333V5.332c.267-.667-.4-1.333-1.067-1.333z"
                }), "Facebook.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        13739: function(t, e, a) {
            a.d(e, {
                m: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M16 9.867c-3.733 0-6.8 3.067-6.8 6.8s3.067 6.8 6.8 6.8 6.8-3.067 6.8-6.8-3.067-6.8-6.8-6.8zm0 11.2c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4zM23.067 8c-.933 0-1.6.667-1.6 1.6s.667 1.6 1.6 1.6 1.6-.667 1.6-1.6S24 8 23.067 8zm6.133 3.2c0-1.467-.267-2.4-.667-3.2-.4-.933-.8-1.6-1.6-2.4s-1.467-1.2-2.4-1.6c-.8-.267-1.867-.533-3.2-.667H16c-3.6 0-4.133 0-5.467.133-1.467 0-2.4.267-3.2.667C6.4 4.4 5.6 4.8 4.933 5.6c-.8.667-1.2 1.467-1.6 2.267C3.066 8.8 2.8 9.734 2.8 11.2c-.133 1.333-.133 1.867-.133 5.467s0 4.133.133 5.467c0 1.467.267 2.4.667 3.2.4.933.8 1.6 1.6 2.4s1.467 1.2 2.4 1.6c.8.267 1.867.533 3.2.667H16c3.6 0 4.133 0 5.467-.133 1.467 0 2.4-.267 3.2-.667.933-.4 1.6-.8 2.4-1.6s1.2-1.467 1.6-2.4c.267-.8.533-1.867.667-3.2 0-1.467.133-1.867.133-5.467s-.133-4-.267-5.333zM26.8 22c0 1.333-.267 2-.4 2.533-.267.667-.533 1.067-.933 1.467s-.933.8-1.467.933c-.533.133-1.2.4-2.533.4-1.467 0-1.867.133-5.333.133s-4 0-5.333-.133c-1.333 0-2-.267-2.533-.4-.8-.133-1.2-.4-1.6-.933-.4-.4-.8-.933-.933-1.467-.267-.533-.533-1.2-.533-2.533 0-1.467-.133-1.867-.133-5.333s0-4 .133-5.333c0-1.333.267-2 .4-2.533.267-.667.533-1.067 1.067-1.467.4-.4.933-.8 1.467-.933.533-.267 1.2-.533 2.533-.533 1.467 0 1.867-.133 5.333-.133s4 0 5.333.133c1.333 0 2 .267 2.533.4.667.267 1.067.533 1.467 1.067.4.4.8.933.933 1.467.267.533.533 1.2.533 2.533 0 1.467.133 1.867.133 5.333s0 4-.133 5.333z"
                }), "Instagram.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        99220: function(t, e, a) {
            a.r(e), a.d(e, {
                Language: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M16 2.667c-7.333 0-13.333 6-13.333 13.333s6 13.333 13.333 13.333 13.333-6 13.333-13.333S23.333 2.667 16 2.667zm9.2 8h-3.867c-.4-1.6-1.067-3.2-1.867-4.8 2.4.933 4.533 2.533 5.733 4.8zM16 5.333c1.067 1.6 2 3.333 2.533 5.333h-5.067c.533-1.867 1.467-3.733 2.533-5.333zM5.733 18.667c-.267-.8-.4-1.733-.4-2.667s.133-1.867.4-2.667h4.533c-.133.933-.133 1.733-.133 2.667s.133 1.733.133 2.667H5.733zM6.8 21.333h4c.4 1.6 1.067 3.333 1.867 4.8C10.134 25.2 8 23.6 6.8 21.333zm3.867-10.666h-4C8 8.4 10 6.8 12.4 5.867c-.667 1.6-1.2 3.2-1.733 4.8zm5.333 16c-1.067-1.6-2-3.333-2.533-5.333h5.067c-.533 1.867-1.467 3.733-2.533 5.333zm3.067-8h-6.133c-.133-.933-.267-1.733-.267-2.667s.133-1.867.267-2.667h6.267c.133.8.267 1.733.267 2.667s-.267 1.733-.4 2.667zm.4 7.466c.8-1.467 1.467-3.067 1.867-4.8h3.867c-1.2 2.133-3.333 3.867-5.733 4.8zm2.4-7.466C22 17.734 22 16.934 22 16s-.133-1.733-.133-2.667H26.4c.267.8.4 1.733.4 2.667s-.133 1.867-.4 2.667h-4.533z"
                }), "Language.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        58430: function(t, e, a) {
            a.d(e, {
                n: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M26.8 4H5.2c-1.067 0-1.867.8-1.867 1.867V27.6c0 1.067.8 1.867 1.867 1.867h21.6c1.067 0 1.867-.8 1.867-1.867V5.867C28.667 4.8 27.867 4 26.8 4zm-16 21.6H7.067V13.467H10.8V25.6zM8.933 11.867c-1.2 0-2.133-.933-2.133-2.133s.933-2.133 2.133-2.133 2.133.933 2.133 2.133c.133 1.2-.933 2.133-2.133 2.133zm16 13.733H21.2v-5.867c0-1.467 0-3.2-2-3.2S16.933 18 16.933 19.6v6H13.2V13.467h3.6v1.6c.533-.933 1.733-2 3.6-2 3.867 0 4.533 2.533 4.533 5.733v6.8z"
                }), "Linkedin.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        11849: function(t, e, a) {
            a.d(e, {
                t: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M11.067 27.333C20.934 27.333 26.4 19.066 26.4 12v-.667c1.067-.8 2-1.733 2.667-2.8-.933.4-2 .667-3.067.8 1.2-.667 2-1.733 2.4-2.933-1.067.667-2.133 1.067-3.467 1.333C24 6.666 22.533 6 21.066 6c-2.933 0-5.333 2.4-5.333 5.333 0 .4 0 .8.133 1.2-4.533-.133-8.533-2.267-11.2-5.6-.4.8-.667 1.733-.667 2.8 0 1.867.933 3.467 2.4 4.533-.933 0-1.733-.267-2.4-.667v.133c0 2.667 1.867 4.8 4.267 5.333-.4.133-.933.133-1.467.133-.4 0-.667 0-1.067-.133.667 2.133 2.667 3.733 5.067 3.733-1.867 1.467-4.133 2.267-6.667 2.267-.4 0-.8 0-1.333-.133 2.4 1.467 5.333 2.4 8.267 2.4z"
                }), "Twitter.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        39702: function(t, e, a) {
            a.d(e, {
                _: function() {
                    return c
                }
            });
            var r = a(70865),
                o = a(52322),
                n = (0, a(6620).Z)((0, o.jsx)("path", {
                    d: "M29.067 11.333S28.8 9.466 28 8.666c-1.067-1.067-2.133-1.067-2.667-1.067C21.6 7.332 16 7.332 16 7.332s-5.6 0-9.333.267c-.533 0-1.6 0-2.667 1.067-.8.8-1.067 2.667-1.067 2.667s-.267 2.133-.267 4.267v2c0 2.267.267 4.4.267 4.4S3.2 23.867 4 24.667c1.067 1.067 2.4 1.067 2.933 1.2C9.066 26 16 26 16 26s5.6 0 9.333-.267c.533 0 1.6-.133 2.667-1.067.8-.8 1.067-2.667 1.067-2.667s.267-2.133.267-4.267v-2c0-2.267-.267-4.4-.267-4.4zm-15.867 8.8v-7.467l7.2 3.733-7.2 3.733z"
                }), "YouTube.svg"),
                c = function(t) {
                    return (0, o.jsx)(n, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, t))
                }
        },
        38204: function(t, e, a) {
            a.d(e, {
                $3: function() {
                    return $
                },
                An: function() {
                    return tk
                },
                B5: function() {
                    return ts
                },
                Bj: function() {
                    return G
                },
                Ly: function() {
                    return tr
                },
                P1: function() {
                    return ta
                },
                Qd: function() {
                    return W
                },
                Si: function() {
                    return to
                },
                U2: function() {
                    return td
                },
                V6: function() {
                    return H
                },
                W5: function() {
                    return tb
                },
                X2: function() {
                    return tm
                },
                Xx: function() {
                    return th
                },
                YT: function() {
                    return O
                },
                _8: function() {
                    return J
                },
                ad: function() {
                    return te
                },
                b1: function() {
                    return K
                },
                dN: function() {
                    return tc
                },
                dk: function() {
                    return tu
                },
                gX: function() {
                    return tl
                },
                j$: function() {
                    return tt
                },
                jH: function() {
                    return q
                },
                k_: function() {
                    return Y
                },
                kn: function() {
                    return ti
                },
                nA: function() {
                    return tp
                },
                nT: function() {
                    return tf
                },
                pA: function() {
                    return Q
                },
                rm: function() {
                    return X
                },
                tW: function() {
                    return tn
                },
                u9: function() {
                    return V
                },
                ym: function() {
                    return tg
                }
            });
            var r, o, n, c, i, s = a(47842),
                l = a(70865),
                u = a(39232),
                d = a(38398),
                f = a.n(d),
                p = a(85208),
                h = "api-terms",
                m = "blog",
                k = "business",
                g = "request-demo",
                b = "flex-subscriptions",
                v = "editor",
                w = "image",
                x = "help",
                y = "privacy",
                Z = "studios",
                S = "terms",
                j = "license",
                _ = "impressum",
                L = "purchase",
                C = "support",
                F = "article",
                z = "explore",
                A = "contact-us",
                P = "create",
                T = "editor",
                N = "new-from-asset",
                B = "new-from-upload",
                I = "media-register",
                M = "developers",
                D = "documentation",
                R = "pricing",
                U = "modern-slavery-statement",
                E = (i = {}, (0, s.Z)(i, "api", (0, s.Z)({}, R, "/".concat("api", "/").concat(R))), (0, s.Z)(i, m, "/".concat(m)), (0, s.Z)(i, k, (r = {}, (0, s.Z)(r, Z, "/".concat(k, "/").concat(Z)), (0, s.Z)(r, g, "/".concat(k, "#").concat(g)), (0, s.Z)(r, b, "/".concat(k, "/").concat(b, "#").concat("footer")), (0, s.Z)(r, I, "/".concat(k, "/").concat(I)), r)), (0, s.Z)(i, P, (0, s.Z)({}, v, (o = {}, (0, s.Z)(o, N, "/".concat(P, "/").concat(v, "/").concat(N)), (0, s.Z)(o, B, "/".concat(P, "/").concat(v, "/").concat(B)), o))), (0, s.Z)(i, M, (n = {}, (0, s.Z)(n, p.Dx, "/".concat(M)), (0, s.Z)(n, h, "/".concat(M, "/").concat(h)), (0, s.Z)(n, A, "/".concat(M, "/").concat(A)), (0, s.Z)(n, D, "/".concat(M, "/").concat(D)), n)), (0, s.Z)(i, z, (0, s.Z)({}, b, "/".concat(z, "/").concat(b))), (0, s.Z)(i, v, (0, s.Z)({}, w, "/".concat(v, "/").concat(w))), (0, s.Z)(i, P, (c = {}, (0, s.Z)(c, "new", "/".concat(P, "/").concat(T, "/").concat("new")), (0, s.Z)(c, N, "/".concat(P, "/").concat(T, "/").concat(N)), (0, s.Z)(c, B, "/".concat(P, "/").concat(v, "/").concat(B)), (0, s.Z)(c, u.zo, "/".concat(P, "/").concat("go", "/").concat(u.xN)), c)), (0, s.Z)(i, x, "/".concat(x)), (0, s.Z)(i, y, "/".concat(y)), (0, s.Z)(i, S, "/".concat(S)), (0, s.Z)(i, j, "/".concat(j)), (0, s.Z)(i, _, "/".concat(_)), (0, s.Z)(i, U, "/".concat(U)), (0, s.Z)(i, L, "/".concat(L)), (0, s.Z)(i, C, (0, s.Z)({}, F, "/".concat(C, "/").concat(F))), i),
                H = function() {
                    return E.api[R]
                },
                W = function() {
                    return f().format({
                        protocol: "https",
                        host: "studios.shutterstock.com",
                        pathname: "/"
                    })
                },
                q = function() {
                    return E[S]
                },
                O = function() {
                    return E[m]
                },
                V = function() {
                    return E[y]
                },
                X = function(t) {
                    return "/create/editor/".concat(t)
                },
                $ = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return f().format({
                        pathname: "".concat(E[v][w], "/").concat(t),
                        query: (0, l.Z)({}, e)
                    })
                },
                K = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.k4;
                    return f().format({
                        pathname: "".concat(E[P][N]),
                        query: (0, l.Z)((0, s.Z)({}, "".concat(a, "Id"), t), e)
                    })
                },
                Q = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.k4;
                    return f().format({
                        pathname: "".concat(E[P][B]),
                        query: (0, l.Z)((0, s.Z)({}, "".concat(a, "Id"), t), e)
                    })
                },
                Y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f().format({
                        pathname: "".concat(E[P][u.zo]),
                        query: (0, l.Z)({}, t)
                    })
                },
                G = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f().format({
                        pathname: "".concat(E[P].new),
                        query: (0, l.Z)({}, t)
                    })
                },
                J = function() {
                    return E[j]
                },
                tt = function() {
                    return E[_]
                },
                te = function() {
                    return E[x]
                },
                ta = function() {
                    return "".concat(E[x], "#").concat(A)
                },
                tr = function() {
                    return E[k][g]
                },
                to = function() {
                    return E[z][b]
                },
                tn = function() {
                    return E[k][b]
                },
                tc = function() {
                    return E[M][p.Dx]
                },
                ti = function() {
                    return E[M][h]
                },
                ts = function() {
                    return E[M][A]
                },
                tl = function() {
                    return E[M][D]
                },
                tu = function() {
                    return E[U]
                },
                td = function(t) {
                    var e = t.queryParams;
                    return f().format({
                        pathname: E[L],
                        query: (0, l.Z)({}, e)
                    })
                },
                tf = function(t, e) {
                    return f().format({
                        protocol: "https",
                        host: "support.shutterstock.com",
                        pathname: "/s/".concat(e),
                        query: {
                            language: t
                        }
                    })
                },
                tp = function(t) {
                    var e = t.queryParams;
                    return f().format({
                        protocol: "https",
                        host: "s1045775785.t.eloqua.com",
                        pathname: "/e/f2.aspx",
                        query: (0, l.Z)({}, e)
                    })
                },
                th = function() {
                    return f().format({
                        protocol: "https",
                        host: "api-reference.shutterstock.com"
                    })
                },
                tm = {
                    en: "en_US",
                    id: "in",
                    nb: "no",
                    nl: "nl_NL",
                    pt: "pt_BR",
                    zh: "zh_CN",
                    "zh-Hant": "zh_TW"
                },
                tk = function() {
                    return E[k][I]
                },
                tg = function(t) {
                    return f().format({
                        protocol: "https",
                        hostname: "help.instagram.com",
                        pathname: t
                    })
                },
                tb = function() {
                    return f().format({
                        protocol: "https",
                        hostname: "qa-shutterstockcommunities.cs245.force.com",
                        pathname: "enterprisesupport/s/",
                        query: {
                            language: tm.en
                        }
                    })
                }
        },
        31556: function(t, e, a) {
            a.d(e, {
                I$: function() {
                    return s
                },
                Ni: function() {
                    return u
                },
                _b: function() {
                    return l
                }
            });
            var r, o = a(47842),
                n = "home",
                c = "static-tos",
                i = "subscribe",
                s = (r = {}, (0, o.Z)(r, n, "/"), (0, o.Z)(r, c, "/".concat(c)), (0, o.Z)(r, i, "/".concat(i)), r),
                l = function() {
                    return [s[n], s[n]]
                },
                u = function() {
                    return [s[c], s[c]]
                }
        }
    }
]);
//# sourceMappingURL=SiteFooter.d246c1df95bc2cec.js.map