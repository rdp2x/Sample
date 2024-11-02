"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60687], {
        1061: function(t, e, n) {
            n.d(e, {
                C: function() {
                    return f
                }
            });
            var o = n(47842),
                i = n(70865),
                a = n(96670),
                r = n(52322),
                s = n(67550),
                l = n(62197),
                c = n(27050),
                d = n(53957),
                m = n(52566),
                h = n(29296),
                u = n(48417),
                p = n(40374),
                g = n(27764),
                x = n(5632),
                b = (0, n(8740).ZL)()(function(t, e) {
                    var n = t.breakpoints,
                        a = t.spacing,
                        r = t.tokens,
                        s = r.border,
                        l = r.color,
                        m = r.fontWeight,
                        h = t.typography.fontWeightBold,
                        u = e.typeOfStyle,
                        p = e.contentNamespace;
                    return {
                        keywordTitle: {
                            fontWeight: h,
                            whiteSpace: "nowrap"
                        },
                        root: (0, o.Z)({
                            display: "flex",
                            overflowX: "auto",
                            paddingBottom: a(4)
                        }, n.down("sm"), {
                            maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)",
                            msOverflowStyle: "none",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            },
                            scrollbarWidth: "none"
                        }),
                        keyItemLink: {
                            "&:focus-visible > div": (0, i.Z)({}, (0, c.zo)(p) ? u === d.zw.whiteOutline ? {
                                background: "none",
                                border: "".concat(s.width.m, " solid ").concat(l.white)
                            } : {
                                background: l.gray["onyx-50"],
                                border: "".concat(s.width.m, " solid ").concat(l.blue.azure)
                            } : {})
                        },
                        keyItemRoot: (0, i.Z)({}, (0, c.zo)(p) ? u === d.zw.whiteOutline ? {
                            fontWeight: m.bold,
                            border: "1.5px solid ".concat(l.white),
                            margin: 0,
                            "& > svg": {
                                color: "".concat(l.white, " !important")
                            },
                            "&&": {
                                background: "transparent",
                                marginBottom: 0,
                                "&:hover": {
                                    background: "transparent"
                                }
                            }
                        } : {
                            backdropFilter: "blur(3px)",
                            fontWeight: m.bold,
                            margin: 0,
                            "&&": {
                                background: l.gray["onyx-38"],
                                marginBottom: 0,
                                "&:hover": {
                                    background: l.gray["onyx-50"]
                                }
                            }
                        } : {
                            marginBottom: "0px"
                        })
                    }
                }),
                f = function(t) {
                    var e, n, o, i = t.classesProps,
                        a = t.items,
                        p = t.title,
                        f = t.variant,
                        k = t.dataAutomation,
                        y = t.dataOptimize,
                        w = t.customFieldsElementData,
                        Z = t.contentNamespace;
                    w && (e = void 0 === (o = (void 0 === (n = w.fields) ? {} : n).typeOfStyle) ? d.zw.default : o);
                    var v = b({
                            typeOfStyle: e,
                            contentNamespace: Z
                        }),
                        C = v.cx,
                        L = v.classes,
                        N = (0, x.useRouter)().pathname,
                        j = (0, g.oY)(N);
                    try {
                        return (0, r.jsxs)(s.Z, {
                            display: "flex",
                            overflow: "auto",
                            className: i.wrapper,
                            children: [p && (0, r.jsx)(s.Z, {
                                className: i.title,
                                mr: 4,
                                children: (0, r.jsx)(l.Z, {
                                    className: L.keywordTitle,
                                    color: "primary",
                                    children: p
                                })
                            }), (0, r.jsx)("div", {
                                className: C(L.root, i.keywordsRoot),
                                "data-automation": k,
                                children: null == a ? void 0 : a.map(function(t) {
                                    var e = t.label,
                                        n = t.href,
                                        o = t.trackAnalytics,
                                        a = t.tags,
                                        s = n;
                                    return (d.oN[j] && void 0 !== e && (s = "".concat(d.oN[j], "/").concat((0, u.U9)(e))), "" === e || "" === s || void 0 === e) ? null : (0, r.jsx)(m.k, {
                                        Component: (0, r.jsx)(h.K, {
                                            href: s,
                                            classesProps: {
                                                keyItemRoot: i.keyItemRoot ? i.keyItemRoot : L.keyItemRoot,
                                                keyItemLink: i.keyItemLink ? i.keyItemLink : L.keyItemLink
                                            },
                                            variant: f,
                                            label: e,
                                            trackAnalytics: o,
                                            dataOptimize: y,
                                            tags: a
                                        }, "".concat(e, "-").concat(n)),
                                        tags: a
                                    }, e)
                                })
                            })]
                        })
                    } catch (t) {
                        return (0, c.qr)(t, "CmsKeywords")
                    }
                };
            f.defaultProps = (0, a.Z)((0, i.Z)({}, p.E), {
                classesProps: {},
                dataOptimize: null
            })
        },
        60687: function(t, e, n) {
            n.r(e), n.d(e, {
                CmsLinksList: function() {
                    return K
                }
            });
            var o, i, a, r = n(47842),
                s = n(70865),
                l = n(96670),
                c = n(26297),
                d = n(50930),
                m = n(52322),
                h = n(62197),
                u = n(21647),
                p = n(78675),
                g = n(63040),
                x = n(67550),
                b = n(27050),
                f = n(53957),
                k = n(1061),
                y = n(37168),
                w = n(66755),
                Z = n(9390),
                v = n(36232),
                C = n(29292),
                L = n(48417),
                N = n(40374),
                j = n(27764),
                B = n(8740),
                S = n(41075),
                P = "border",
                T = "noBorder",
                I = "desktop",
                R = "mobile",
                W = {
                    xs: 2,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 4
                },
                O = (0, l.Z)((0, s.Z)({}, W), {
                    xl: 6
                }),
                H = function(t) {
                    var e = t.columnCount;
                    return {
                        xs: e.xs,
                        sm: e.sm,
                        md: e.md - 1,
                        lg: e.lg - 1,
                        xl: e.xl - 1
                    }
                },
                z = function(t) {
                    var e = t.columnCount;
                    return {
                        xs: 12 / e.xs,
                        sm: 12 / e.sm,
                        md: 12 / e.md,
                        lg: 12 / e.lg,
                        xl: 12 / e.xl
                    }
                },
                E = (a = {}, (0, r.Z)(a, I, (o = {}, (0, r.Z)(o, P, 45), (0, r.Z)(o, T, 32), o)), (0, r.Z)(a, R, (i = {}, (0, r.Z)(i, P, 65), (0, r.Z)(i, T, 45), i)), a),
                A = function(t) {
                    var e = t.itemLength,
                        n = t.breakpoint,
                        o = t.isMobile,
                        i = t.withBorder;
                    return Math.ceil(e / t.columnSpan[n]) * E[void 0 !== o && o ? R : I][i ? P : T]
                },
                M = (0, B.ZL)()(function(t, e) {
                    var n, o, i = t.palette,
                        a = t.breakpoints,
                        l = t.tokens,
                        c = l.spacing,
                        d = l.border,
                        m = e.itemLength,
                        h = e.withBorder,
                        u = e.columnSpan,
                        p = e.isTabtableNamespace;
                    return {
                        container: {
                            width: "calc(100% + ".concat(c.base, ")"),
                            overflow: "hidden"
                        },
                        insetTitle: {
                            marginTop: 0,
                            marginRight: c.l,
                            height: "1000vh"
                        },
                        fixedHeight: (n = {
                            marginTop: 0,
                            marginRight: c.l,
                            maxHeight: A({
                                itemLength: m,
                                breakpoint: "xs",
                                isMobile: !0,
                                withBorder: h,
                                columnSpan: u
                            })
                        }, (0, r.Z)(n, a.up("sm"), {
                            maxHeight: A({
                                itemLength: m,
                                breakpoint: "sm",
                                isMobile: !1,
                                withBorder: h,
                                columnSpan: u
                            })
                        }), (0, r.Z)(n, a.up("md"), {
                            maxHeight: A({
                                itemLength: m,
                                breakpoint: "md",
                                isMobile: !1,
                                withBorder: h,
                                columnSpan: u
                            })
                        }), (0, r.Z)(n, a.up("lg"), {
                            maxHeight: A({
                                itemLength: m,
                                breakpoint: "lg",
                                isMobile: !1,
                                withBorder: h,
                                columnSpan: u
                            })
                        }), (0, r.Z)(n, a.up("xl"), {
                            maxHeight: A({
                                itemLength: m,
                                breakpoint: "xl",
                                isMobile: !1,
                                withBorder: h,
                                columnSpan: u
                            })
                        }), n),
                        link: {
                            alignSelf: "center",
                            padding: "".concat(h ? c.s : c.xs, " 0"),
                            width: "100%"
                        },
                        divider: {
                            marginRight: c.m,
                            alignSelf: "flex-end"
                        },
                        item: (o = {
                            display: "flex",
                            height: "".concat(E[R][h ? P : T], "px"),
                            maxHeight: "".concat(E[R][h ? P : T], "px")
                        }, (0, r.Z)(o, a.up("sm"), {
                            height: "".concat(E[I][h ? P : T], "px"),
                            maxHeight: "".concat(E[I][h ? P : T], "px")
                        }), (0, r.Z)(o, "overflow", "hidden"), (0, r.Z)(o, "marginRight", c.base), (0, r.Z)(o, "borderBottom", h ? "".concat(d.width.s, " solid ").concat(i.border1Color) : "none"), o),
                        gridItem: (0, s.Z)({}, !p && {
                            width: "100%"
                        }),
                        root: {
                            overflow: "hidden"
                        },
                        skeletonContainer: {
                            width: "100%",
                            display: "flex"
                        },
                        skeleton: {
                            margin: "auto"
                        }
                    }
                }),
                _ = function(t) {
                    var e = t.analyticsPageSection,
                        n = t.GridItem,
                        o = t.isInsetTitle,
                        i = t.items,
                        a = t.maxWidth,
                        r = t.title,
                        d = t.withBorder,
                        h = t.contentNamespace,
                        u = a ? W : O,
                        p = H({
                            columnCount: u
                        }),
                        x = z({
                            columnCount: u
                        }),
                        f = M({
                            itemLength: i.length,
                            withBorder: d,
                            columnSpan: o ? p : u,
                            isTabtableNamespace: (0, b.qp)({
                                contentNamespace: h
                            })
                        }),
                        k = f.classes,
                        y = f.cx;
                    return (0, m.jsxs)(S.ZP, {
                        container: !0,
                        direction: "column",
                        className: y(k.container, k.fixedHeight),
                        children: [o && (0, m.jsx)(g.Z, {
                            mdDown: !0,
                            children: (0, m.jsx)(S.ZP, (0, l.Z)((0, s.Z)({
                                className: k.gridItem,
                                item: !0
                            }, x), {
                                children: (0, m.jsx)(w.y, {
                                    className: y(k.fixedHeight, k.insetTitle),
                                    title: r,
                                    headingComponent: "h2"
                                })
                            }))
                        }), i.map(function(t) {
                            var o = t.id,
                                i = (0, c.Z)(t, ["id"]);
                            return (0, m.jsx)(S.ZP, (0, l.Z)((0, s.Z)({
                                container: !0,
                                className: k.gridItem
                            }, x), {
                                children: (0, m.jsx)("div", {
                                    className: k.item,
                                    children: (0, m.jsx)(n, (0, s.Z)({
                                        analyticsPageSection: e,
                                        classes: k,
                                        withBorder: d
                                    }, i))
                                })
                            }), o)
                        })]
                    })
                };
            _.defaultProps = {
                analyticsPageSection: "",
                maxWidth: !1,
                title: null,
                withBorder: !1,
                contentNamespace: ""
            };
            var G = (0, d.Z)(Array(10)).map(function(t, e) {
                    return {
                        id: "skeleton-".concat(e)
                    }
                }),
                q = (0, B.ZL)()(function(t, e) {
                    var n = t.tokens.spacing,
                        o = e.bgColor,
                        i = e.textColor;
                    return {
                        root: {
                            width: "100%",
                            padding: "".concat(n.xl, " ").concat(n.m),
                            backgroundColor: o,
                            color: i
                        },
                        textColor: {
                            color: i
                        },
                        container: {
                            width: "calc(100% + ".concat(n.base, ")")
                        },
                        buttonContainer: {
                            display: "flex"
                        },
                        orderedListRoot: {
                            width: "100%",
                            paddingBottom: n.xl
                        }
                    }
                }),
                D = function(t) {
                    var e = t.analyticsPageSection,
                        n = t.classes,
                        o = t.href,
                        i = t.label,
                        a = t.withBorder,
                        r = (0, j.Bf)({
                            href: o
                        }),
                        s = r ? o.replace(r, (0, L.U9)(r)) : o,
                        l = e ? (0, C.SO)({
                            trackAnalytics: {
                                section: e,
                                label: i
                            }
                        }) : "";
                    return (0, m.jsx)(Z.r, {
                        clickAnalyticsLabel: l,
                        href: s,
                        underline: !0,
                        className: n.link,
                        children: (0, m.jsx)(h.Z, {
                            variant: a ? "body1" : "body2",
                            color: a ? "textPrimary" : "textSecondary",
                            children: i
                        })
                    })
                },
                F = function(t) {
                    var e = t.classes,
                        n = t.withBorder;
                    return (0, m.jsx)(h.Z, {
                        className: e.skeletonContainer,
                        variant: n ? "body1" : "body2",
                        color: n ? "textPrimary" : "textSecondary",
                        children: (0, m.jsx)(u.Z, {
                            className: e.skeleton,
                            width: "100%"
                        })
                    })
                },
                K = function(t) {
                    var e = t.items,
                        n = t.maxWidth,
                        o = t.linksListTitle,
                        i = t.titlePosition,
                        a = t.listContentType,
                        l = (t.listCta, t.textColor),
                        d = t.bgColor,
                        h = t.linksListLinksElements,
                        u = t.listCtaElement,
                        Z = t.cmsBgContainerProps,
                        C = t.linkListLayout,
                        L = t.linksListShowNumbers,
                        N = t.componentProps,
                        j = t.contentType,
                        B = (0, c.Z)(t, ["items", "maxWidth", "linksListTitle", "titlePosition", "listContentType", "listCta", "textColor", "bgColor", "linksListLinksElements", "listCtaElement", "cmsBgContainerProps", "linkListLayout", "linksListShowNumbers", "componentProps", "contentType"]),
                        S = (null == N ? void 0 : N[j]) || {},
                        P = S.bgColor,
                        T = q({
                            textColor: S.textColor || l,
                            bgColor: P || d
                        }),
                        I = T.cx,
                        R = T.classes;
                    try {
                        var W = o && i === f.nf,
                            O = o && !e,
                            H = a === f.Cs.orderedList;
                        if (a === f.Cs.cmsKeywords) return (0, m.jsx)(k.C, (0, s.Z)({
                            variant: "default",
                            dataAutomation: "Hero_LinksList_Container",
                            dataOptimize: "cms-keywords",
                            items: e
                        }, B));
                        var z = H ? (0, m.jsxs)("div", {
                            className: R.orderedListRoot,
                            children: [(0, m.jsx)(y.u, {
                                layout: C,
                                showNumbers: L,
                                children: h
                            }), u && (0, m.jsx)("div", {
                                className: R.buttonContainer,
                                children: u
                            })]
                        }) : (0, m.jsx)(_, (0, s.Z)({
                            GridItem: O ? F : D,
                            isInsetTitle: W,
                            items: O ? G : e,
                            title: o,
                            maxWidth: n
                        }, B));
                        return (0, m.jsx)(v.I, {
                            cmsBgContainerProps: Z,
                            children: (0, m.jsx)("div", {
                                className: I((0, r.Z)({}, R.root, H)),
                                children: (0, m.jsxs)(p.Z, {
                                    maxWidth: n,
                                    disableGutters: !0,
                                    children: [o && (W ? (0, m.jsxs)(m.Fragment, {
                                        children: [(0, m.jsx)(g.Z, {
                                            mdUp: !0,
                                            children: (0, m.jsx)(w.y, {
                                                title: o,
                                                headingComponent: "h3",
                                                className: I((0, r.Z)({}, R.textColor, H))
                                            })
                                        }), (0, m.jsx)(g.Z, {
                                            smDown: !0,
                                            children: (0, m.jsx)(x.Z, {
                                                pt: 7
                                            })
                                        })]
                                    }) : (0, m.jsx)(w.y, {
                                        title: o,
                                        headingComponent: "h3",
                                        className: I((0, r.Z)({}, R.textColor, H))
                                    })), z]
                                })
                            })
                        })
                    } catch (t) {
                        return (0, b.qr)(t, "CmsLinksList")
                    }
                };
            K.defaultProps = (0, l.Z)((0, s.Z)({}, N.E), {
                maxWidth: "lg",
                withBorder: !1
            })
        },
        37168: function(t, e, n) {
            n.d(e, {
                u: function() {
                    return i
                }
            });
            var o = n(25237),
                i = n.n(o)()(function() {
                    return n.e(574).then(n.bind(n, 20710)).then(function(t) {
                        return t.CmsOrderedList
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [20710]
                        }
                    }
                })
        },
        66755: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return s
                }
            });
            var o = n(52322),
                i = n(62197),
                a = n(77601),
                r = n(90369),
                s = function(t) {
                    var e = t.className,
                        n = t.title,
                        s = t.headingComponent,
                        l = t.isCentered,
                        c = t.titleVariant,
                        d = (0, a.TT)(),
                        m = d.classes,
                        h = m.title,
                        u = m.centeredTitle,
                        p = d.cx;
                    return (0, o.jsx)(r.h, {
                        stringToTransform: n,
                        classes: "".concat(p(h, e), " ").concat(l ? u : ""),
                        Component: (0, o.jsx)(i.Z, {
                            color: "primary",
                            variant: c,
                            component: s
                        })
                    })
                };
            s.defaultProps = {
                className: null,
                headingComponent: "h5",
                titleVariant: "h5",
                isCentered: !1
            }
        }
    }
]);
//# sourceMappingURL=60687.dba00e0c38090508.js.map