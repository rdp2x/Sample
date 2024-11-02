"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13417], {
        17055: function(e, t, i) {
            var n = i(28193),
                r = i(26831),
                o = i(2784),
                s = i(37198),
                l = i(47746),
                a = i(84319),
                d = i(98659),
                u = i(52322);
            let c = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
                h = {
                    entering: {
                        opacity: 1
                    },
                    entered: {
                        opacity: 1
                    }
                },
                v = o.forwardRef(function(e, t) {
                    let i = (0, l.Z)(),
                        v = {
                            enter: i.transitions.duration.enteringScreen,
                            exit: i.transitions.duration.leavingScreen
                        },
                        {
                            addEndListener: p,
                            appear: m = !0,
                            children: f,
                            easing: g,
                            in: w,
                            onEnter: y,
                            onEntered: x,
                            onEntering: E,
                            onExit: L,
                            onExited: k,
                            onExiting: b,
                            style: I,
                            timeout: S = v,
                            TransitionComponent: j = s.ZP
                        } = e,
                        C = (0, r.Z)(e, c),
                        N = o.useRef(null),
                        H = (0, d.Z)(N, f.ref, t),
                        T = e => t => {
                            if (e) {
                                let i = N.current;
                                void 0 === t ? e(i) : e(i, t)
                            }
                        },
                        Z = T(E),
                        U = T((e, t) => {
                            (0, a.n)(e);
                            let n = (0, a.C)({
                                style: I,
                                timeout: S,
                                easing: g
                            }, {
                                mode: "enter"
                            });
                            e.style.webkitTransition = i.transitions.create("opacity", n), e.style.transition = i.transitions.create("opacity", n), y && y(e, t)
                        }),
                        R = T(x),
                        A = T(b),
                        z = T(e => {
                            let t = (0, a.C)({
                                style: I,
                                timeout: S,
                                easing: g
                            }, {
                                mode: "exit"
                            });
                            e.style.webkitTransition = i.transitions.create("opacity", t), e.style.transition = i.transitions.create("opacity", t), L && L(e)
                        }),
                        W = T(k),
                        V = e => {
                            p && p(N.current, e)
                        };
                    return (0, u.jsx)(j, (0, n.Z)({
                        appear: m,
                        in: w,
                        nodeRef: N,
                        onEnter: U,
                        onEntered: R,
                        onEntering: Z,
                        onExit: z,
                        onExited: W,
                        onExiting: A,
                        addEndListener: V,
                        timeout: S
                    }, C, {
                        children: (e, t) => o.cloneElement(f, (0, n.Z)({
                            style: (0, n.Z)({
                                opacity: 0,
                                visibility: "exited" !== e || w ? void 0 : "hidden"
                            }, h[e], I, f.props.style),
                            ref: H
                        }, t))
                    }))
                });
            t.Z = v
        },
        91927: function(e, t, i) {
            i.d(t, {
                F: function() {
                    return L
                }
            });
            var n = i(52322),
                r = i(68043),
                o = i(97258),
                s = i(39232),
                l = i(44297),
                a = i(63256),
                d = i(75),
                u = i(59877),
                c = i(8740),
                h = i(44647),
                v = i(52131),
                p = i(87394),
                m = i(2784),
                f = function(e) {
                    return "string" == typeof e
                },
                g = function(e) {
                    var t = e.src,
                        i = e.id,
                        n = e.onLoadHandler,
                        r = e.onErrorHandler,
                        o = e.defaults,
                        s = void 0 === o ? {
                            displaySkeleton: !1,
                            isImageLoaded: !1
                        } : o,
                        l = (0, m.useRef)(),
                        a = (0, p.Z)((0, m.useState)(s.isImageLoaded), 2),
                        d = a[0],
                        u = a[1],
                        c = (0, p.Z)((0, m.useState)(!1), 2),
                        h = c[0],
                        v = c[1],
                        g = h || !t && f(t),
                        w = !d && !g && s.displaySkeleton;
                    return (0, m.useEffect)(function() {
                        var e;
                        (null === (e = l.current) || void 0 === e ? void 0 : e.complete) && !d && t && u(!0)
                    }, [d, t]), (0, m.useEffect)(function() {
                        n && n(!w)
                    }, [w, n]), (0, m.useEffect)(function() {
                        g && r && r(i)
                    }, [g, r, i]), (0, m.useEffect)(function() {
                        t && l.current && l.current.src !== t && u(!1)
                    }, [t]), {
                        imgRef: l,
                        setIsImageLoaded: u,
                        setImageError: v,
                        showBrokenImage: g,
                        displaySkeleton: w
                    }
                },
                w = function(e) {
                    var t = e.src,
                        i = e.alt,
                        o = e.title,
                        s = e.id,
                        l = e.onLoadHandler,
                        a = e.onErrorHandler,
                        d = e.imgClassName,
                        u = e.withLoadingSkeletons,
                        c = e.style,
                        p = e.assetType,
                        m = e.width,
                        w = e.height,
                        y = e.highQualitySrc,
                        x = g({
                            src: t,
                            id: s,
                            onLoadHandler: l,
                            onErrorHandler: a,
                            defaults: {
                                displaySkeleton: !r.hq.ENABLED,
                                isImageLoaded: r.hq.ENABLED
                            }
                        }),
                        E = x.imgRef,
                        L = x.setIsImageLoaded,
                        k = x.setImageError,
                        b = x.showBrokenImage,
                        I = x.displaySkeleton,
                        S = !t && !f(t);
                    return b ? (0, n.jsx)(h.x, {
                        assetType: p,
                        isMissing: S
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("picture", {
                            children: [y && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("source", {
                                    srcSet: y,
                                    media: "(min-width: ".concat(4096, "px)")
                                }), (0, n.jsx)("source", {
                                    srcSet: t,
                                    media: "(max-width: ".concat(4096, "px)")
                                })]
                            }), (0, n.jsx)("img", {
                                ref: E,
                                className: d,
                                src: y || t,
                                alt: i,
                                title: o,
                                onLoad: function() {
                                    return L(!0)
                                },
                                onError: function() {
                                    return k(!0)
                                },
                                style: c,
                                width: m,
                                height: w
                            })]
                        }), u && I && (0, n.jsx)(v.S, {})]
                    })
                };
            w.defaultProps = {
                onLoadHandler: null,
                imgClassName: null,
                withLoadingSkeletons: !1,
                width: 0,
                height: 0,
                highQualitySrc: void 0
            };
            var y = (0, c.ZL)()({
                    thumbnail: {
                        width: "100.5%",
                        height: "auto"
                    }
                }),
                x = [s.bz, s.X2, s.k4, s.pV, s.hv, s.IK, s.ox, s.pX],
                E = function(e) {
                    var t = e.t,
                        i = e.assetTypeLabel,
                        n = e.alt,
                        r = e.isEditorial;
                    return {
                        altWithAssetType: x.includes(i) ? t("asset:alt:".concat(i).concat(r ? ":editorial" : ""), {
                            ALT: n
                        }) : n
                    }
                },
                L = function(e) {
                    var t, i, s = e.withSsr,
                        c = e.asset,
                        h = e.onLoadHandler,
                        v = e.onErrorHandler,
                        p = e.withLoadingSkeletons,
                        m = e.imgClassName,
                        f = e.style,
                        g = e.useCssGrid,
                        x = y().classes,
                        L = (0, a.lR)(c),
                        k = c.id,
                        b = c.title,
                        I = c.description,
                        S = c.alt,
                        j = c.isEditorial,
                        C = c.isRexEditorial,
                        N = b || I,
                        H = S || N,
                        T = m || x.thumbnail,
                        Z = (0, l.Tp)(c),
                        U = (0, l.zs)({
                            asset: c
                        }),
                        R = (0, a.r8)(c),
                        A = R.width,
                        z = R.height,
                        W = g && A < r.hq.MAX_ASSET_WIDTH && (null == c ? void 0 : null === (t = c.displays) || void 0 === t ? void 0 : null === (i = t[o.bm]) || void 0 === i ? void 0 : i.src),
                        V = (0, u.$G)(d.Zcw),
                        F = V.t,
                        G = V.ready,
                        _ = E({
                            t: F,
                            alt: H,
                            assetTypeLabel: U,
                            isEditorial: j || C
                        });
                    return s && !p ? (0, n.jsx)("img", {
                        className: T,
                        src: L,
                        alt: G ? _.altWithAssetType : H,
                        title: N,
                        style: f,
                        width: A,
                        height: z
                    }) : (0, n.jsx)(w, {
                        id: k,
                        alt: G ? _.altWithAssetType : H,
                        title: N,
                        src: L,
                        assetType: Z,
                        onLoadHandler: h,
                        onErrorHandler: v,
                        imgClassName: T,
                        style: f,
                        withLoadingSkeletons: p,
                        width: A,
                        height: z,
                        highQualitySrc: W
                    })
                }
        },
        13417: function(e, t, i) {
            i.r(t), i.d(t, {
                VideoGridItem: function() {
                    return v
                }
            });
            var n = i(87394),
                r = i(52322),
                o = i(85749),
                s = i(37546),
                l = i(63256),
                a = i(94909),
                d = i(2784),
                u = i(8740),
                c = i(91927),
                h = (0, u.ZL)()(function(e) {
                    return {
                        video: {
                            left: 0,
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1,
                            minWidth: "100%"
                        },
                        previewImage: {
                            display: "block",
                            minHeight: "100%",
                            width: "100%",
                            height: "100%",
                            margin: "auto"
                        },
                        fullWidth: {
                            "&&": {
                                width: "100%"
                            }
                        },
                        thumbnailContainer: {
                            height: "100%",
                            backgroundColor: e.palette.skeleton
                        }
                    }
                }),
                v = function(e) {
                    var t = e.asset,
                        i = e.imgClassName,
                        u = e.isHovered,
                        v = e.onErrorHandler,
                        p = e.onLoadHandler,
                        m = e.withLoadingSkeletons,
                        f = e.withSsr,
                        g = e.videoClassName,
                        w = e.withFullWidth,
                        y = h(),
                        x = y.classes,
                        E = y.cx,
                        L = (0, s.Lr)(t),
                        k = (0, n.Z)((0, d.useState)(!1), 2),
                        b = k[0],
                        I = k[1],
                        S = (0, l.fp)(L),
                        j = S.previewImageUrl,
                        C = S.previewVideoUrls,
                        N = void 0 === C ? {} : C,
                        H = N.webm,
                        T = N.mp4,
                        Z = (0, a.d)(),
                        U = (0, d.useRef)();
                    return (0, d.useEffect)(function() {
                        var e, t;
                        u ? null === (e = U.current) || void 0 === e || e.play().then(function() {
                            I(!0)
                        }).catch(function() {
                            I(!1)
                        }) : (null === (t = U.current) || void 0 === t || t.pause(), I(!1))
                    }, [U, u]), (0, r.jsxs)("div", {
                        style: {
                            height: "100%",
                            width: "100%"
                        },
                        children: [u && !Z && (0, r.jsx)(o.t, {
                            isLoading: u && !b
                        }), u && !Z && !!(H && T) && (0, r.jsxs)("video", {
                            ref: U,
                            poster: j,
                            muted: !0,
                            playsInline: !0,
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            loop: !0,
                            className: E(x.video, g),
                            children: [(0, r.jsx)("track", {
                                kind: "captions"
                            }), (0, r.jsx)("source", {
                                src: H,
                                type: "video/webm"
                            }), (0, r.jsx)("source", {
                                src: T,
                                type: "video/mp4"
                            })]
                        }), (0, r.jsx)("div", {
                            className: x.thumbnailContainer,
                            children: (0, r.jsx)(c.F, {
                                asset: L,
                                onLoadHandler: p,
                                onErrorHandler: v,
                                imgClassName: E(x.previewImage, i, w && x.fullWidth),
                                withSsr: f,
                                withLoadingSkeletons: m
                            })
                        })]
                    })
                };
            v.defaultProps = {
                onLoadHandler: null,
                onErrorHandler: null,
                withSsr: !1,
                withFullWidth: !1
            }
        },
        44647: function(e, t, i) {
            i.d(t, {
                x: function() {
                    return r
                }
            });
            var n = i(25237),
                r = i.n(n)()(function() {
                    return i.e(13567).then(i.bind(i, 13567)).then(function(e) {
                        return e.BrokenImg
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [13567]
                        }
                    },
                    ssr: !1
                })
        },
        85749: function(e, t, i) {
            i.d(t, {
                t: function() {
                    return a
                }
            });
            var n = i(52322),
                r = i(17055),
                o = i(72841),
                s = i(2784),
                l = (0, i(8740).ZL)()(function(e) {
                    var t = e.tokens.color;
                    return {
                        progress: {
                            color: t.white
                        },
                        progressContainer: {
                            left: "50%",
                            position: "absolute",
                            top: "50%",
                            transform: "translate(-50%, -50%)"
                        },
                        progressOverlay: {
                            background: "\n      linear-gradient(\n      to top,\n      transparent 0,\n      ".concat(t.gray["onyx-60"], "\n    )"),
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            width: "100%"
                        }
                    }
                }),
                a = function(e) {
                    var t = e.isLoading,
                        i = l().classes,
                        a = (0, s.useRef)();
                    return (0, s.useEffect)(function() {
                        return function() {
                            clearTimeout(a.current)
                        }
                    }, []), (0, n.jsx)(r.Z, { in: t,
                        style: {
                            transitionDelay: t ? "300ms" : "0ms"
                        },
                        unmountOnExit: !0,
                        children: (0, n.jsx)("div", {
                            className: t ? i.progressOverlay : null,
                            children: (0, n.jsx)("div", {
                                className: i.progressContainer,
                                children: (0, n.jsx)(o.Z, {
                                    className: i.progress,
                                    size: 60
                                })
                            })
                        })
                    })
                }
        },
        63256: function(e, t, i) {
            i.d(t, {
                KW: function() {
                    return v
                },
                VC: function() {
                    return p
                },
                fp: function() {
                    return u
                },
                lR: function() {
                    return c
                },
                ok: function() {
                    return m
                },
                qG: function() {
                    return h
                },
                r8: function() {
                    return f
                },
                vG: function() {
                    return d
                }
            });
            var n = i(87394),
                r = i(97258),
                o = i(39232),
                s = i(44297),
                l = i(31683),
                a = [o.pX],
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    if (!l.n5 || "string" != typeof e || e.includes("ip=x".concat(t))) return e;
                    try {
                        var i = new URL(e);
                        return i.searchParams.set("ip", "x".concat(t)), i.href
                    } catch (t) {
                        return e
                    }
                },
                u = function(e) {
                    var t, i, n;
                    return (null == e ? void 0 : e.mediaItem) ? {
                        previewImageUrl: null === (i = e.mediaItem) || void 0 === i ? void 0 : i.previewImageUrl,
                        previewVideoUrls: null === (n = e.mediaItem) || void 0 === n ? void 0 : n.previewVideoUrls
                    } : {
                        previewImageUrl: (null == e ? void 0 : e.thumbImageUrl) || (null == e ? void 0 : null === (t = e.image) || void 0 === t ? void 0 : t.url) || (null == e ? void 0 : e.previewImageUrl),
                        previewVideoUrls: null == e ? void 0 : e.previewVideoUrls
                    }
                },
                c = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    return (0, s.Am)(t) ? d(u(t).previewImageUrl, i) : t.src || (null === (e = t.image) || void 0 === e ? void 0 : e.url)
                },
                h = function(e) {
                    return e.assetType === o.pX ? "mp4" : null
                },
                v = function(e) {
                    var t = e.asset;
                    return a.includes((0, s.Tp)(t)) && !(0, s.so)(t)
                },
                p = function() {
                    var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ((0, s.vh)(null == i ? void 0 : i.type)) return (null == i ? void 0 : i.width) > 1e3 ? "".concat(null == i ? void 0 : i.previewUrls[0], "?width=1000") : null == i ? void 0 : i.previewUrls[0];
                    var n = (0, s.EK)(i) ? r.bm : r.RA,
                        o = null == i ? void 0 : null === (e = i.displays) || void 0 === e ? void 0 : null === (t = e[n]) || void 0 === t ? void 0 : t.src;
                    return (0, s.f8)(i) ? o.replace(/\/([A-Z]\d\d)./, "/".concat(i.angle, ".")) : o
                },
                m = function() {
                    var e, t, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        l = (0, s.Tp)(n);
                    return l === o.k4 || l === o.zo || l === o.Nk ? (null == n ? void 0 : null === (e = n.displays) || void 0 === e ? void 0 : null === (t = e[r.bm]) || void 0 === t ? void 0 : t.src) || (null == n ? void 0 : n.src) : l === o.bz ? null == n ? void 0 : null === (i = n.imageVariants) || void 0 === i ? void 0 : i["1500"] : l === o.xF || l === o.tn ? null == n ? void 0 : n.previewMp3 : l === o.hv ? null == n ? void 0 : n.previewUrls[0] : null
                },
                f = function() {
                    var e, t, i, r, o, l, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        u = {
                            width: null !== (r = null !== (i = a.width) && void 0 !== i ? i : null === (e = a.mediaItem) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0,
                            height: null !== (l = null !== (o = a.height) && void 0 !== o ? o : null === (t = a.mediaItem) || void 0 === t ? void 0 : t.height) && void 0 !== l ? l : 0
                        };
                    if ((0, s.Am)(a) && (!u.width || !u.height) && a.sizes) {
                        var c = Object.keys(a.sizes).find(function(e) {
                            return a.sizes[e]
                        });
                        u.width = c && a.sizes[c].width || 0, u.height = c && a.sizes[c].height || 0
                    }
                    if (d && (!u.width || !u.height) && a.aspectRatioCommon) {
                        var h = (0, n.Z)(a.aspectRatioCommon.split(":"), 2),
                            v = h[0],
                            p = h[1];
                        u.width = Number(v), u.height = Number(p)
                    }
                    return u
                }
        }
    }
]);
//# sourceMappingURL=13417.00e9384d7970e8fa.js.map