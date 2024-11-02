"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [46454], {
        72841: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return R
                }
            });
            var n = t(26831),
                o = t(28193),
                i = t(2784),
                a = t(6277),
                c = t(69075),
                u = t(28165),
                s = t(7342),
                l = t(43853),
                f = t(65992),
                d = t(69222),
                p = t(15672);

            function m(e) {
                return (0, p.Z)("MuiCircularProgress", e)
            }(0, d.Z)("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
            var v = t(52322);
            let h = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"],
                g = e => e,
                k, b, Z, y, x = (0, u.F4)(k || (k = g `
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),
                w = (0, u.F4)(b || (b = g `
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),
                j = e => {
                    let {
                        classes: r,
                        variant: t,
                        color: n,
                        disableShrink: o
                    } = e, i = {
                        root: ["root", t, `color${(0,s.Z)(n)}`],
                        svg: ["svg"],
                        circle: ["circle", `circle${(0,s.Z)(t)}`, o && "circleDisableShrink"]
                    };
                    return (0, c.Z)(i, m, r)
                },
                S = (0, f.ZP)("span", {
                    name: "MuiCircularProgress",
                    slot: "Root",
                    overridesResolver: (e, r) => {
                        let {
                            ownerState: t
                        } = e;
                        return [r.root, r[t.variant], r[`color${(0,s.Z)(t.color)}`]]
                    }
                })(({
                    ownerState: e,
                    theme: r
                }) => (0, o.Z)({
                    display: "inline-block"
                }, "determinate" === e.variant && {
                    transition: r.transitions.create("transform")
                }, "inherit" !== e.color && {
                    color: (r.vars || r).palette[e.color].main
                }), ({
                    ownerState: e
                }) => "indeterminate" === e.variant && (0, u.iv)(Z || (Z = g `
      animation: ${0} 1.4s linear infinite;
    `), x)),
                C = (0, f.ZP)("svg", {
                    name: "MuiCircularProgress",
                    slot: "Svg",
                    overridesResolver: (e, r) => r.svg
                })({
                    display: "block"
                }),
                P = (0, f.ZP)("circle", {
                    name: "MuiCircularProgress",
                    slot: "Circle",
                    overridesResolver: (e, r) => {
                        let {
                            ownerState: t
                        } = e;
                        return [r.circle, r[`circle${(0,s.Z)(t.variant)}`], t.disableShrink && r.circleDisableShrink]
                    }
                })(({
                    ownerState: e,
                    theme: r
                }) => (0, o.Z)({
                    stroke: "currentColor"
                }, "determinate" === e.variant && {
                    transition: r.transitions.create("stroke-dashoffset")
                }, "indeterminate" === e.variant && {
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: 0
                }), ({
                    ownerState: e
                }) => "indeterminate" === e.variant && !e.disableShrink && (0, u.iv)(y || (y = g `
      animation: ${0} 1.4s ease-in-out infinite;
    `), w)),
                M = i.forwardRef(function(e, r) {
                    let t = (0, l.Z)({
                            props: e,
                            name: "MuiCircularProgress"
                        }),
                        {
                            className: i,
                            color: c = "primary",
                            disableShrink: u = !1,
                            size: s = 40,
                            style: f,
                            thickness: d = 3.6,
                            value: p = 0,
                            variant: m = "indeterminate"
                        } = t,
                        g = (0, n.Z)(t, h),
                        k = (0, o.Z)({}, t, {
                            color: c,
                            disableShrink: u,
                            size: s,
                            thickness: d,
                            value: p,
                            variant: m
                        }),
                        b = j(k),
                        Z = {},
                        y = {},
                        x = {};
                    if ("determinate" === m) {
                        let e = 2 * Math.PI * ((44 - d) / 2);
                        Z.strokeDasharray = e.toFixed(3), x["aria-valuenow"] = Math.round(p), Z.strokeDashoffset = `${((100-p)/100*e).toFixed(3)}px`, y.transform = "rotate(-90deg)"
                    }
                    return (0, v.jsx)(S, (0, o.Z)({
                        className: (0, a.Z)(b.root, i),
                        style: (0, o.Z)({
                            width: s,
                            height: s
                        }, y, f),
                        ownerState: k,
                        ref: r,
                        role: "progressbar"
                    }, x, g, {
                        children: (0, v.jsx)(C, {
                            className: b.svg,
                            ownerState: k,
                            viewBox: "22 22 44 44",
                            children: (0, v.jsx)(P, {
                                className: b.circle,
                                style: Z,
                                ownerState: k,
                                cx: 44,
                                cy: 44,
                                r: (44 - d) / 2,
                                fill: "none",
                                strokeWidth: d
                            })
                        })
                    }))
                });
            var R = M
        },
        14339: function(e, r, t) {
            t.d(r, {
                i: function() {
                    return o
                }
            });
            var n = t(94909),
                o = function(e) {
                    var r = e.isHovered,
                        t = e.hideResolution,
                        o = e.showAssetTypeIcon,
                        i = (0, n.d)({
                            defaultMatches: !0
                        }),
                        a = r && !i;
                    return {
                        showBottomRightContent: a,
                        showTopLeftContent: o || a && !t
                    }
                }
        },
        59312: function(e, r, t) {
            t.d(r, {
                l: function() {
                    return g
                }
            });
            var n = t(47842),
                o = t(70865),
                i = t(96670),
                a = t(26297),
                c = t(87394),
                u = t(52322),
                s = t(67550),
                l = t(91609),
                f = t(776),
                d = t(25237),
                p = t.n(d),
                m = t(2784),
                v = (0, t(8740).ZL)()(function(e) {
                    var r = e.palette,
                        t = e.tokens.color,
                        n = r.mode === l.oc.DARK,
                        o = n ? t["white-96"] : t.gray["onyx-87"];
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
                                color: n ? r.common.black : r.common.white,
                                backgroundColor: o
                            }
                        },
                        arrow: {
                            "&&": {
                                color: o
                            }
                        },
                        tooltipHidden: {
                            "&&": {
                                visibility: "hidden"
                            }
                        }
                    }
                }),
                h = p()(function() {
                    return Promise.all([t.e(27310), t.e(55199), t.e(23182), t.e(38507)]).then(t.bind(t, 97415))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [97415]
                        }
                    },
                    ssr: !1
                }),
                g = function(e) {
                    var r = e.className,
                        t = e.tooltipClassName,
                        l = e.children,
                        d = e.title,
                        p = e.isHidden,
                        g = e.analyticsEventLabel,
                        k = e.onMouseEnter,
                        b = (0, a.Z)(e, ["className", "tooltipClassName", "children", "title", "isHidden", "analyticsEventLabel", "onMouseEnter"]),
                        Z = v(),
                        y = Z.classes,
                        x = Z.cx,
                        w = (0, c.Z)((0, m.useState)(!1), 2),
                        j = w[0],
                        S = w[1],
                        C = (0, c.Z)((0, m.useState)(!1), 2),
                        P = C[0],
                        M = C[1],
                        R = (0, f.yh)().analytics,
                        D = (0, f.wU)();
                    return (0, m.useEffect)(function() {
                        M(!0)
                    }, [j]), (0, u.jsx)(u.Fragment, {
                        children: d ? (0, u.jsx)(s.Z, {
                            className: x(y.root, r),
                            onMouseEnter: function(e) {
                                S(!0), k ? k(e) : g && R.hover({
                                    pageSection: D,
                                    eventLabel: g
                                })
                            },
                            onClick: function() {
                                g && R.click({
                                    pageSection: D,
                                    eventLabel: g
                                })
                            },
                            children: P && (0, u.jsx)(h, (0, i.Z)((0, o.Z)({
                                disableInteractive: !0,
                                title: d,
                                "data-automation": d,
                                classes: {
                                    tooltip: x(y.tooltip, t, (0, n.Z)({}, y.tooltipHidden, p)),
                                    arrow: y.arrow,
                                    popper: y.popper
                                }
                            }, b), {
                                children: l
                            })) || l
                        }) : (0, u.jsx)(u.Fragment, {
                            children: l
                        })
                    })
                }
        },
        47999: function(e, r, t) {
            t.d(r, {
                z: function() {
                    return o
                }
            });
            var n = t(83249),
                o = (0, t(12281).g)(n.Z)
        },
        59481: function(e, r, t) {
            t.d(r, {
                h: function() {
                    return o
                }
            });
            var n = t(85801),
                o = (0, t(12281).g)(n.Z)
        },
        33301: function(e, r, t) {
            t.d(r, {
                $: function() {
                    return i
                },
                $5: function() {
                    return m
                },
                $M: function() {
                    return c
                },
                C6: function() {
                    return I
                },
                C_: function() {
                    return p
                },
                Cl: function() {
                    return C
                },
                GX: function() {
                    return B
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
                    return A
                },
                Mh: function() {
                    return y
                },
                NV: function() {
                    return D
                },
                O8: function() {
                    return q
                },
                Pl: function() {
                    return F
                },
                Px: function() {
                    return W
                },
                QF: function() {
                    return f
                },
                Qs: function() {
                    return X
                },
                Si: function() {
                    return v
                },
                T$: function() {
                    return U
                },
                TJ: function() {
                    return O
                },
                V3: function() {
                    return E
                },
                VV: function() {
                    return b
                },
                WX: function() {
                    return Y
                },
                Xd: function() {
                    return et
                },
                Y$: function() {
                    return H
                },
                YV: function() {
                    return z
                },
                _x: function() {
                    return k
                },
                ak: function() {
                    return V
                },
                bq: function() {
                    return j
                },
                cM: function() {
                    return S
                },
                cR: function() {
                    return h
                },
                ck: function() {
                    return er
                },
                f: function() {
                    return g
                },
                fX: function() {
                    return s
                },
                fb: function() {
                    return N
                },
                fn: function() {
                    return l
                },
                hK: function() {
                    return $
                },
                iH: function() {
                    return M
                },
                ik: function() {
                    return x
                },
                jI: function() {
                    return G
                },
                jM: function() {
                    return Z
                },
                lP: function() {
                    return Q
                },
                lm: function() {
                    return R
                },
                mF: function() {
                    return a
                },
                mX: function() {
                    return K
                },
                pG: function() {
                    return o
                },
                pO: function() {
                    return _
                },
                qR: function() {
                    return d
                },
                qf: function() {
                    return T
                },
                vD: function() {
                    return ee
                },
                vb: function() {
                    return n
                },
                wt: function() {
                    return w
                },
                yY: function() {
                    return L
                }
            });
            var n = "sstk1-dam",
                o = "dam-on-e-comm-fast-follow",
                i = "dam-advanced-collection-sharing",
                a = "UP2-1693-enterprise-custom-metadata",
                c = "up-2-1740-remember-last-used-metadata",
                u = "reverse-audio-search",
                s = "predict-uploads-ecomm",
                l = "predict-v2-pages",
                f = "predict-color-palette",
                d = "catalog-upload-allow-all-files",
                p = "next-remove-team-users",
                m = "next-quote-gen-tool",
                v = "createapp-homepage",
                h = "createapp-homepage-enterprise",
                g = "createapp-catalog",
                k = "createapp-catalog-foxtrot",
                b = "create-flow-homepage",
                Z = "create-flow-homepage-enterprise",
                y = "b2l2-user-address-in-cart",
                x = "analyze-pages",
                w = "up-2-1665-e-comm-allow-premium-editorial-licensing",
                j = "catalog-collections-default-alpha-sort",
                S = "fact-157-catalog-video-render-downloads",
                C = "create-video",
                P = "create-video-entry-points-pre-licensed",
                M = "create-video-entry-points-licensed",
                R = "create-video-enterprise",
                D = "up-2-1847-support-free-assets-on-shutterstock-for-dream-partnership",
                N = "adyen-3ds",
                E = "dam-holding-contribute-button",
                $ = "generate-chatbot-release",
                F = "generative-pride-month",
                q = "synthetic-generative-assets-beta",
                H = "rtn-774-3d-objects-ecomm-beta",
                V = "color-insights",
                L = "keyword-insights",
                T = "FACT-90-pixelsquid-in-catalog",
                _ = "SDAQ-56-pixel-squid-on-enterprise",
                A = "sdaq-96-help-center-on-enterprise",
                I = "NOV-1882-block-card-testing-on-billing-page",
                O = "project-peacock",
                X = "project-peacock-design-canvas-tab",
                z = "project-peacock-remove-background",
                B = "ii-438-ip-review-for-generated-assets",
                K = "project-peacock-remove-background",
                Q = "project-peacock-magic-erase",
                U = "project-peacock-generate-variations",
                W = "project-peacock-magic-brush",
                G = "project-peacock-filters",
                Y = "project-peacock-crop",
                J = "project-peacock-zoom-out",
                ee = "project-peacock-undo-redo",
                er = "project-peacock-like-edit",
                et = "project-peacock-edit-in-create"
        },
        5528: function(e, r, t) {
            t.d(r, {
                c: function() {
                    return a
                }
            });
            var n = t(85129),
                o = t(11181),
                i = t(5632),
                a = function() {
                    return (0, i.useRouter)().pathname === n.aD[o.BRANDS.SSTK]
                }
        },
        99110: function(e, r, t) {
            t.d(r, {
                W: function() {
                    return o
                }
            });
            var n = t(2784),
                o = function(e) {
                    var r = (0, n.useRef)();
                    return void 0 !== e && (r.current = e), r.current
                }
        },
        92405: function(e, r, t) {
            t.d(r, {
                p: function() {
                    return w
                }
            });
            var n = t(47842),
                o = t(70865),
                i = t(96670),
                a = t(26297),
                c = t(23945),
                u = t(81740),
                s = t(7297),
                l = t(65532),
                f = t(9823),
                d = t(13271),
                p = t(88436),
                m = t(67661),
                v = t(5632),
                h = t(3255),
                g = t(99110),
                k = t(43110),
                b = "auto",
                Z = {},
                y = function(e) {
                    return "flag[".concat(e, "]")
                },
                x = function(e, r) {
                    var t = y(e);
                    return r[t] === b ? b : "true" === r[t]
                };

            function w(e, r, t, w) {
                var j = (0, p.r)(),
                    S = (0, k.jy)().data,
                    C = (void 0 === S ? {} : S).id,
                    P = (0, v.useRouter)().query,
                    M = (0, l.PE)(),
                    R = M.locale,
                    D = M.region,
                    N = (0, f.D)().brand,
                    E = (0, u.Hx)(R, N).formattedUrl,
                    $ = (0, h.ZP)(!t && (w && !C || C) && j ? E : null, function(e) {
                        var r;
                        return m.uS.get(e, {
                            headers: (r = {}, (0, n.Z)(r, s.yx, j), (0, n.Z)(r, s.L5, R), (0, n.Z)(r, s.UQ, N), (0, n.Z)(r, s.cT, D), r)
                        }).then(function(e) {
                            return e.data
                        })
                    }, {
                        shouldRetryOnError: !1
                    }).data,
                    F = (0, d._)("forcedFlags", Z),
                    q = F.storedValue,
                    H = F.setValue,
                    V = function(e, r) {
                        var t = q[e],
                            u = (0, a.Z)(q, [e].map(c.Z));
                        r === b && e in q ? H(u) : r !== b && t !== r && H((0, i.Z)((0, o.Z)({}, u), (0, n.Z)({}, e, r)))
                    },
                    L = (0, g.W)(null != $ ? $ : e ? (0, n.Z)({}, e, r) : void 0);
                if (L && void 0 !== e) {
                    if (y(e) in P) {
                        var T = x(e, P);
                        return V(e, T), T === b ? L[e] : T
                    }
                    return e in q ? Boolean(q[e]) : L[e]
                }
                return L && void 0 === e && Object.keys(L).forEach(function(e) {
                    if (y(e) in P) {
                        var r = x(e, P);
                        r !== b && (L[e] = r), V(e, r)
                    } else e in q && (L[e] = q[e])
                }), L
            }
        }
    }
]);
//# sourceMappingURL=46454.2efce219a3fd4b24.js.map