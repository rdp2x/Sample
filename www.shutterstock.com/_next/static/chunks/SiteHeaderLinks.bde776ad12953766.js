"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33577, 68657], {
        34742: function(e, n, t) {
            t.r(n), t.d(n, {
                SiteHeaderLinks: function() {
                    return B
                }
            });
            var r = t(47842),
                i = t(70865),
                o = t(96670),
                a = t(87394),
                s = t(52322),
                u = t(48289),
                l = t(83249),
                c = t(62197),
                f = t(9390),
                d = t(99118),
                v = t(87042),
                m = t(23490),
                p = t(52309),
                h = t(50273),
                b = t(25237),
                k = t.n(b),
                w = t(2784),
                x = t(8740),
                M = k()(function() {
                    return t.e(87406).then(t.bind(t, 87406)).then(function(e) {
                        return e.CrawlableMenuDropdownContent
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [87406]
                        }
                    },
                    ssr: !0
                }),
                L = (0, x.ZL)()(function(e, n) {
                    var t = e.tokens.fontWeight,
                        r = n.isPricingDropdown;
                    return {
                        dropdown: (0, o.Z)((0, i.Z)({}, r && {
                            position: "relative"
                        }), {
                            display: "inline-block"
                        }),
                        buttonLabel: {
                            fontSize: "inherit",
                            fontWeight: t.bold
                        }
                    }
                }),
                Z = function(e) {
                    var n = e.buttonLabel,
                        t = e.buttonClasses,
                        r = e.links,
                        i = e.clickAnalyticsLabel,
                        o = e.href,
                        u = e.target,
                        b = e.openedMenu,
                        k = e.setOpenedMenu,
                        x = L({
                            isPricingDropdown: /^\/pricing/.test(o)
                        }).classes,
                        Z = (0, a.Z)((0, w.useState)(!1), 2),
                        y = Z[0],
                        g = Z[1],
                        j = (0, a.Z)((0, w.useState)(0), 2),
                        N = j[0],
                        C = j[1],
                        I = (0, w.useRef)(),
                        D = (0, a.Z)((0, w.useState)(), 2),
                        S = D[0],
                        A = D[1],
                        E = S === r.length - 1,
                        P = 0 === S,
                        O = (0, p.B)(y),
                        B = (0, m.N)().isBot,
                        T = function() {
                            clearTimeout(N), g(!0), k(o)
                        },
                        _ = (0, w.useCallback)(function() {
                            clearTimeout(N), g(!1), A(void 0), k(null)
                        }, [N, k]),
                        z = function() {
                            C(setTimeout(_, 1e3))
                        },
                        F = function(e) {
                            if (e.key === v.Mf && !e.shiftKey) {
                                if (e.preventDefault(), E) {
                                    _();
                                    return
                                }
                                g(!0), A(void 0 === S ? 0 : S + 1)
                            }
                            if (e.key === v.Mf && e.shiftKey) {
                                if (void 0 === S) {
                                    _();
                                    return
                                }
                                if (P) {
                                    setTimeout(function() {
                                        var e;
                                        return null == I ? void 0 : null === (e = I.current) || void 0 === e ? void 0 : e.focus()
                                    }, 0), A(void 0);
                                    return
                                }
                                A(S - 1)
                            }
                        };
                    return (0, w.useEffect)(function() {
                        var e = b === o;
                        b && !e && y && !e && _()
                    }, [b, o, y, _]), (0, s.jsx)(d.Z, {
                        onClickAway: _,
                        children: (0, s.jsxs)("div", {
                            className: x.dropdown,
                            onMouseLeave: function() {
                                return y && z()
                            },
                            children: [(0, s.jsx)(l.Z, {
                                "aria-controls": y ? "".concat(n, "-menu") : void 0,
                                "aria-haspopup": "true",
                                "aria-label": n,
                                "data-automation": "menuDropDownButton_".concat(n),
                                linkAs: o || r[0].as,
                                classes: t,
                                clickAnalyticsLabel: i,
                                component: f.r,
                                endIcon: (0, s.jsx)(h._, {}),
                                href: o || r[0].href,
                                target: u,
                                variant: "text",
                                onKeyDown: F,
                                onMouseEnter: T,
                                onMouseLeave: _,
                                onClick: _,
                                ref: I,
                                children: (0, s.jsx)(c.Z, {
                                    className: x.buttonLabel,
                                    color: "inherit",
                                    children: n
                                })
                            }), (O || B) && (0, s.jsx)(M, {
                                links: r,
                                href: o,
                                buttonLabel: n,
                                isMenuOpen: y,
                                openMenu: T,
                                closeMenu: z,
                                closeMenuNow: _,
                                optionSelectedIndex: S,
                                handleTabNavigation: F,
                                isLastItem: E
                            })]
                        })
                    })
                },
                y = t(9823),
                g = t(50930),
                j = t(30299),
                N = t(66358),
                C = t(73906),
                I = t(85801),
                D = t(47999),
                S = k()(function() {
                    return t.e(87406).then(t.bind(t, 87406)).then(function(e) {
                        return e.CrawlableMenuDropdownContent
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [87406]
                        }
                    },
                    ssr: !0
                }),
                A = (0, x.ZL)()(function(e) {
                    var n = e.tokens,
                        t = n.color;
                    return {
                        dropdown: {
                            display: "inline-block"
                        },
                        overflowMenuButton: {
                            marginRight: n.spacing["4xl"],
                            color: t["black-50"]
                        }
                    }
                }),
                E = function(e) {
                    var n = e.links,
                        t = e.clickAnalyticsLabel,
                        r = e.href,
                        i = e.openedMenu,
                        o = e.setOpenedMenu,
                        u = A().classes,
                        l = (0, a.Z)((0, w.useState)(!1), 2),
                        c = l[0],
                        f = l[1],
                        h = (0, a.Z)((0, w.useState)(0), 2),
                        b = h[0],
                        k = h[1],
                        x = (0, w.useRef)(),
                        M = (0, a.Z)((0, w.useState)(), 2),
                        L = M[0],
                        Z = M[1],
                        y = L === n.length - 1,
                        g = 0 === L,
                        j = (0, p.B)(c),
                        N = (0, m.N)().isBot,
                        E = function() {
                            clearTimeout(b), f(!0), o(r)
                        },
                        P = (0, w.useCallback)(function() {
                            clearTimeout(b), f(!1), Z(void 0), o(null)
                        }, [b, o]),
                        O = function() {
                            k(setTimeout(P, 1e3))
                        },
                        B = function(e) {
                            if (e.key === v.Mf && !e.shiftKey) {
                                if (e.preventDefault(), y) {
                                    P();
                                    return
                                }
                                f(!0), Z(void 0 === L ? 0 : L + 1)
                            }
                            if (e.key === v.Mf && e.shiftKey) {
                                if (void 0 === L) {
                                    P();
                                    return
                                }
                                if (g) {
                                    setTimeout(function() {
                                        return null == x ? void 0 : x.current
                                    }, 0), Z(void 0);
                                    return
                                }
                                Z(L - 1)
                            }
                        };
                    return (0, w.useEffect)(function() {
                        var e = i === r;
                        i && !e && c && !e && P()
                    }, [i, r, c, P]), (0, s.jsx)(d.Z, {
                        onClickAway: P,
                        children: (0, s.jsxs)("div", {
                            className: u.dropdown,
                            onMouseLeave: function() {
                                return c && O()
                            },
                            children: [(0, s.jsx)(D.z, {
                                "aria-controls": c ? "overflow-menu" : void 0,
                                "aria-haspopup": "true",
                                "aria-label": "overflow-menu",
                                "data-automation": "menuDropDownButton_overflow-menu",
                                component: I.Z,
                                variant: "text",
                                onKeyDown: B,
                                onMouseEnter: E,
                                onMouseLeave: P,
                                className: u.overflowMenuButton,
                                clickTrackProp: "clickAnalyticsLabel",
                                clickAnalyticsLabel: t,
                                children: (0, s.jsx)(C.Z, {})
                            }), (j || N) && (0, s.jsx)(S, {
                                links: n,
                                subMenuCols: n,
                                buttonLabel: "",
                                isMenuOpen: c,
                                openMenu: E,
                                closeMenu: O,
                                closeMenuNow: P,
                                optionSelectedIndex: L,
                                handleTabNavigation: B,
                                isLastItem: y,
                                href: "",
                                useInViewFlag: !0
                            })]
                        })
                    })
                },
                P = t(5129),
                O = function(e) {
                    var n = e.responsiveLinkProps,
                        t = e.overflowMenuItems,
                        r = e.setOverflowMenuItems,
                        l = e.link,
                        c = e.nextItem,
                        f = e.primaryItems,
                        d = e.openedMenu,
                        v = e.setOpenedMenu,
                        m = e.children,
                        p = (0, P.y)().classes,
                        h = (0, a.Z)((0, w.useState)(null), 2)[1],
                        b = function() {
                            return h(null)
                        },
                        k = (0, w.useMemo)(function() {
                            return f.filter(function(e) {
                                return t.find(function(n) {
                                    return n.label === e.label
                                })
                            })
                        }, [t, f]),
                        x = k[0] && k[0].label === (null == c ? void 0 : c.label);
                    (0, w.useEffect)(function() {
                        return null == window || window.addEventListener("resize", b),
                            function() {
                                window.removeEventListener("resize", b)
                            }
                    }, []);
                    var M = (0, a.Z)((0, w.useState)(!0), 2),
                        L = M[0],
                        Z = M[1],
                        y = (0, j.YD)({
                            threshold: .96,
                            initialInView: !0,
                            rootMargin: "500px 0px 0px 0px",
                            onChange: function(e) {
                                Z(e), e ? r(function(e) {
                                    var n = e.filter(function(e) {
                                        return e.label !== l.label
                                    });
                                    return (0, g.Z)(n)
                                }) : r(function(e) {
                                    return e.find(function(e) {
                                        return e.label === l.label
                                    }) ? e : [l].concat((0, g.Z)(e))
                                })
                            }
                        }).ref;
                    return (0, s.jsxs)("div", {
                        className: p.primaryNavItem,
                        ref: y,
                        children: [(0, s.jsx)("div", (0, o.Z)((0, i.Z)({}, n), {
                            className: L ? p.showPrimaryNavItem : p.hidePrimaryNavItem,
                            children: m
                        })), x && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.Z, {
                                className: p.overflowButtonDivider,
                                orientation: "vertical"
                            }), (0, s.jsx)(E, {
                                links: k,
                                clickAnalyticsLabel: N.Yjv,
                                href: "overflow",
                                openedMenu: d,
                                setOpenedMenu: v
                            })]
                        })]
                    })
                },
                B = function(e) {
                    var n = e.classesProps,
                        t = e.isPrimary,
                        d = void 0 !== t && t,
                        v = e.links,
                        m = e.className,
                        p = (0, P.y)(),
                        h = p.classes,
                        b = p.cx,
                        k = (0, y.D)().isBrandSstk,
                        x = (0, a.Z)((0, w.useState)(null), 2),
                        M = x[0],
                        L = x[1],
                        g = (0, a.Z)((0, w.useState)([]), 2),
                        j = g[0],
                        N = g[1];
                    return (0, s.jsx)(s.Fragment, {
                        children: v.map(function(e, t) {
                            var a, p = e.clickAnalyticsLabel,
                                x = e.label,
                                y = e.href,
                                g = e.isAbsoluteUrl,
                                C = e.isCoreUrl,
                                I = e.subMenuLinks,
                                D = e.hideLgDown,
                                S = e.hideLgCustomDown,
                                A = e.hideLgCustomUp,
                                E = e.hasLeftDivider,
                                P = e.target,
                                B = e.dataOptimize,
                                T = D || S || A ? {
                                    className: b((a = {}, (0, r.Z)(a, h.hideLgCustomDown, S), (0, r.Z)(a, h.hideLgDown, D), (0, r.Z)(a, h.hideLgCustomUp, A), a))
                                } : {};
                            return I ? (0, s.jsx)(w.Fragment, {
                                children: (0, s.jsxs)(O, (0, o.Z)((0, i.Z)({}, T), {
                                    overflowMenuItems: j,
                                    setOverflowMenuItems: N,
                                    link: e,
                                    nextItem: v[t + 1],
                                    primaryItems: v,
                                    openedMenu: M,
                                    setOpenedMenu: L,
                                    children: [E && (0, s.jsxs)(s.Fragment, {
                                        children: [" ", (0, s.jsx)(u.Z, {
                                            className: h.divider,
                                            orientation: "vertical"
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: m,
                                        "data-optimize": B,
                                        children: (0, s.jsx)(Z, {
                                            buttonClasses: {
                                                root: b(h.navPrimary, h.navSpacing, null == n ? void 0 : n.textColor, (0, r.Z)({}, h.sstkPrimaryNavLinks, k)),
                                                endIcon: h.endIcon
                                            },
                                            buttonLabel: x,
                                            href: y,
                                            links: I,
                                            clickAnalyticsLabel: p,
                                            target: P,
                                            openedMenu: M,
                                            setOpenedMenu: L
                                        })
                                    })]
                                }))
                            }, x) : (0, s.jsx)(w.Fragment, {
                                children: (0, s.jsxs)(O, (0, o.Z)((0, i.Z)({}, T), {
                                    overflowMenuItems: j,
                                    setOverflowMenuItems: N,
                                    link: e,
                                    nextItem: v[t + 1],
                                    primaryItems: v,
                                    openedMenu: M,
                                    setOpenedMenu: L,
                                    children: [E && (0, s.jsxs)(s.Fragment, {
                                        children: [" ", (0, s.jsx)(u.Z, {
                                            className: h.divider,
                                            orientation: "vertical"
                                        })]
                                    }), (0, s.jsx)(l.Z, {
                                        "aria-label": x,
                                        className: b(h.navPrimary, h.pointerEventsNone, null == n ? void 0 : n.textColor, 0 === t && d ? h.navPrimaryLeftSpace : h.navSpacing, m),
                                        clickAnalyticsLabel: p,
                                        component: f.r,
                                        onMouseEnter: function() {
                                            return M && L(y)
                                        },
                                        href: y,
                                        isAbsoluteUrl: g,
                                        rel: y ? "noopener noreferrer" : void 0,
                                        isCoreUrl: C,
                                        role: "link",
                                        target: P || (C ? "_blank" : "_self"),
                                        variant: "text",
                                        "data-optimize": B,
                                        children: (0, s.jsx)(c.Z, {
                                            className: b(h.navPrimary, h.pointerEventsAuto, h.bold, null == n ? void 0 : n.textColor, (0, r.Z)({}, h.sstkPrimaryNavLinks, k)),
                                            color: "inherit",
                                            children: x
                                        })
                                    })]
                                }))
                            }, x)
                        })
                    })
                }
        },
        87042: function(e, n, t) {
            t.d(n, {
                Ft: function() {
                    return i
                },
                Mf: function() {
                    return s
                },
                hY: function() {
                    return a
                },
                pe: function() {
                    return r
                },
                q7: function() {
                    return o
                },
                zD: function() {
                    return u
                }
            });
            var r = "ArrowLeft",
                i = "ArrowRight",
                o = "Enter",
                a = "Escape",
                s = "Tab",
                u = "submit"
        },
        52309: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return i
                }
            });
            var r = t(2784),
                i = function(e) {
                    var n = (0, r.useRef)(!1);
                    return !n.current && e && (n.current = !0), n.current
                }
        },
        50273: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return a
                }
            });
            var r = t(70865),
                i = t(52322),
                o = (0, t(6620).Z)((0, i.jsx)("path", {
                    d: "M9.867 12.133L8 14l8 8 8-8-1.867-1.867L16 18.266l-6.133-6.133z"
                }), "ChevronDown.svg"),
                a = function(e) {
                    return (0, i.jsx)(o, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        }
    }
]);
//# sourceMappingURL=SiteHeaderLinks.bde776ad12953766.js.map