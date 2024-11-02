"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95489], {
        72690: function(e, n, t) {
            t.r(n), t.d(n, {
                AssetItemOverlay: function() {
                    return h
                }
            });
            var o = t(87394),
                s = t(52322),
                r = t(6514),
                i = t(1284),
                a = t(41707),
                d = t(89082),
                c = t(14339),
                u = t(44297),
                l = t(94909),
                f = t(2784),
                h = function(e) {
                    var n = e.addToCollectionViewsHandler,
                        t = e.asset,
                        h = e.gridItems,
                        v = e.isHovered,
                        p = e.setIsHovered,
                        g = e.isUserLoggedIn,
                        I = e.onAssetModalHandler,
                        A = e.showAssetTypeIcon,
                        w = (0, o.Z)((0, f.useState)(!1), 2),
                        C = w[0],
                        m = w[1],
                        y = (0, l.d)(),
                        H = (0, u.vh)(null == t ? void 0 : t.type),
                        k = (0, c.i)({
                            isHovered: v,
                            showAssetTypeIcon: A
                        }).showTopLeftContent;
                    return (0, s.jsx)(i.j, {
                        asset: t,
                        BottomLeftContentComponent: (0, s.jsx)(a.A, {
                            asset: t,
                            isHovered: v
                        }),
                        BottomRightContentComponent: !y && !H && (C || v) && (0, s.jsx)(r.M, {
                            addToCollectionViewsHandler: n,
                            asset: t,
                            gridItems: h,
                            isUserLoggedIn: g,
                            setIsOverlayOpen: m,
                            setIsHovered: p
                        }),
                        isActive: C || v,
                        onAssetModalHandler: I,
                        showPreviewIcon: !0,
                        TopLeftContentComponent: (0, s.jsx)(d.V, {
                            asset: t,
                            isHovered: v,
                            showAssetTypeIcon: A
                        }),
                        forceTopLeftContent: k,
                        withGradient: v
                    })
                };
            h.defaultProps = {
                gridItems: [],
                isHovered: !1,
                isUserLoggedIn: !1,
                setIsHovered: function() {},
                onAssetModalHandler: function() {},
                showAssetTypeIcon: !1
            }
        },
        6514: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return c
                },
                n: function() {
                    return d
                }
            });
            var o = t(50930),
                s = t(52322),
                r = t(25237),
                i = t.n(r),
                a = (0, t(8740).ZL)()(function(e) {
                    var n = e.spacing,
                        t = e.tokens,
                        o = t.color,
                        s = t.size;
                    return {
                        actionSkeleton: {
                            width: s.density.high,
                            height: s.density.high,
                            borderRadius: "100%",
                            backgroundColor: o.gray["onyx-38"],
                            marginLeft: n(1)
                        }
                    }
                }),
                d = function(e) {
                    var n = e.buttonCount,
                        t = a().classes;
                    return (0, o.Z)(Array(void 0 === n ? 3 : n).keys()).map(function(e) {
                        return (0, s.jsx)("div", {
                            className: t.actionSkeleton
                        }, "AssetActionsSkeleton-".concat(e))
                    })
                },
                c = i()(function() {
                    return Promise.all([t.e(27310), t.e(55199), t.e(23182), t.e(7668), t.e(56256), t.e(348), t.e(38032)]).then(t.bind(t, 3279)).then(function(e) {
                        return e.AssetActions
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [3279]
                        }
                    },
                    loading: function() {
                        return (0, s.jsx)(d, {})
                    },
                    ssr: !1
                })
        }
    }
]);
//# sourceMappingURL=EcommAssetItemOverlay.8ca54617ab7fdd76.js.map