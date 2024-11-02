"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55531], {
        94193: function(e, t, i) {
            i.d(t, {
                VL: function() {
                    return F
                }
            });
            var n, o = i(87394),
                r = i(52322),
                s = i(40233),
                a = i(2784),
                l = function() {
                    var e = (0, o.Z)((0, a.useState)(!1), 2),
                        t = e[0],
                        i = e[1],
                        n = (0, s.d)();
                    return {
                        isModalOpen: t,
                        handleOpenModal: function() {
                            n({
                                actionName: "convert - signup modal opened"
                            }), i(!0)
                        },
                        handleCloseModal: function() {
                            i(!1)
                        }
                    }
                },
                d = i(33301),
                c = i(7197),
                u = i(44297),
                p = i(59979),
                v = i(47875),
                f = i(52309),
                m = i(94909),
                g = i(98788),
                h = i(47842),
                C = i(70865),
                I = i(5163),
                w = i(81740),
                y = i(44699),
                T = i(39232),
                S = i(32456),
                A = i(7297),
                b = i(29292),
                P = i(86795),
                O = i(15111),
                k = i(18027),
                Z = i(12787),
                U = i(9823),
                _ = i(776),
                M = i(67661),
                D = i(9009),
                x = i(3255),
                R = i(52494),
                N = function(e) {
                    var t = e.queryParams;
                    return (0, w.nS)({
                        queryParams: t
                    }).formattedUrl
                },
                V = function(e) {
                    var t = e.assetId,
                        i = e.asset,
                        n = i.id,
                        o = i.tier,
                        r = i.src,
                        s = i.aspect,
                        a = i.width,
                        l = i.height;
                    return {
                        metadata: {
                            notes: {
                                media_id: t,
                                alpha_num_id: n,
                                rex_id: n,
                                media_type: T.gP,
                                tier: void 0 === o ? 10 : o,
                                media: {
                                    aspect: s,
                                    width: a,
                                    height: l,
                                    url: r
                                }
                            }
                        }
                    }
                },
                E = (n = (0, g.Z)(function(e) {
                    var t, i, n, o, r, s, a, l, d, c, p, v, f;
                    return (0, I.__generator)(this, function(m) {
                        switch (m.label) {
                            case 0:
                                if (t = e.isRexEditorial, i = e.collectionId, n = e.verificationCode, o = e.setAsCover, r = e.firstAsset, s = e.collectionType, (l = (0, u.A8)(r)) !== T.VT) return [2];
                                return d = {
                                    id: i,
                                    verificationCode: n,
                                    collectionType: s
                                }, c = (0, w.Yz)({
                                    queryParams: d
                                }).formattedUrl, [4, M.uS.get(c).then(function(e) {
                                    return (0, D.O)(e.data) || {}
                                })];
                            case 1:
                                if (null == (p = m.sent()) ? void 0 : null === (a = p.coverItem) || void 0 === a ? void 0 : a.id) return [3, 3];
                                return v = (0, u.OP)({
                                    asset: r,
                                    isRexEditorial: t
                                }), f = (0, P.Q)({
                                    collectionId: i,
                                    mappedAssetType: l,
                                    assetId: v
                                }), [4, o({
                                    collection: {
                                        id: i
                                    },
                                    mediaItem: {
                                        id: f
                                    }
                                })];
                            case 2:
                                m.sent(), m.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                }), function(e) {
                    return n.apply(this, arguments)
                }),
                z = function() {
                    var e, t = (0, o.Z)((0, a.useState)({
                            status: "",
                            error: void 0
                        }), 2),
                        i = t[0],
                        n = t[1],
                        r = (0, o.Z)((0, a.useState)(""), 2),
                        s = r[0],
                        l = r[1],
                        d = (0, o.Z)((0, a.useState)(""), 2),
                        c = d[0],
                        p = d[1],
                        v = (0, Z.J)(),
                        f = (0, R.w)().setAsCover,
                        m = (0, U.D)().isBrandSstk,
                        D = (0, _.yh)().analytics,
                        z = (0, b.UM)(D),
                        J = (0, x.kY)().mutate;
                    return {
                        add: (0, a.useCallback)((e = (0, g.Z)(function(e) {
                            var t, i, o, r, s, a, d, c, g, b, Z, U, _, D, x, R, B, j, q, G, L, H, W;
                            return (0, I.__generator)(this, function(I) {
                                switch (I.label) {
                                    case 0:
                                        t = e.assets, i = e.assetType, o = e.gridItems, r = e.groupedOptions, s = e.id, a = e.title, d = e.verificationCode, c = e.pageSection, g = e.listId, b = (0, O.wZ)({
                                            assetType: i,
                                            isBrandSstk: m
                                        }), I.label = 1;
                                    case 1:
                                        if (I.trys.push([1, 6, 7, 9]), n({
                                                status: y.MR,
                                                error: void 0
                                            }), Z = (0, u.Xo)(i), U = s, _ = d, r && r.length && (D = r.find(function(e) {
                                                return e.title === a
                                            })) && (U = D.id, _ = D.verificationCode), U) return [3, 3];
                                        return x = (0, w.A6)().formattedUrl, R = {
                                            data: {
                                                attributes: {
                                                    title: a,
                                                    collectionType: b,
                                                    isPublic: !1
                                                },
                                                type: S.Ul
                                            }
                                        }, [4, M.uS.post(x, R)];
                                    case 2:
                                        j = (B = I.sent().data).id, q = B.attributes.verificationCode, U = j, _ = q, I.label = 3;
                                    case 3:
                                        return G = {
                                            data: t.map(function(e) {
                                                var t = (0, u.OP)({
                                                        asset: e,
                                                        isRexEditorial: Z
                                                    }),
                                                    i = (0, u.A8)(e);
                                                return (0, C.Z)({
                                                    type: S.A8,
                                                    id: (0, P.Q)({
                                                        collectionId: U,
                                                        mappedAssetType: i,
                                                        assetId: t
                                                    })
                                                }, i === T.VT && V({
                                                    assetId: t,
                                                    asset: e
                                                }))
                                            })
                                        }, L = (0, w.mp)({
                                            urlParams: {
                                                id: U
                                            },
                                            queryParams: {
                                                isRexEditorial: Z
                                            }
                                        }).formattedUrl, H = (0, k.y)(z), [4, M.uS.post(L, G, H ? {
                                            headers: (0, h.Z)({}, A.as, H)
                                        } : void 0)];
                                    case 4:
                                        return I.sent(), [4, E({
                                            isRexEditorial: Z,
                                            collectionId: U,
                                            verificationCode: _,
                                            setAsCover: f,
                                            firstAsset: t[0],
                                            collectionType: b
                                        })];
                                    case 5:
                                        return I.sent(), v({
                                            collectionId: U,
                                            collectionName: a,
                                            gridItems: o,
                                            assets: t,
                                            pageSection: c,
                                            listId: g
                                        }), l(U), p(_), [3, 9];
                                    case 6:
                                        return W = I.sent(), n({
                                            status: y.cM,
                                            error: W
                                        }), [3, 9];
                                    case 7:
                                        return [4, J(N({
                                            queryParams: {
                                                "filter[type]": b
                                            }
                                        }))];
                                    case 8:
                                        return I.sent(), [7];
                                    case 9:
                                        return [2]
                                }
                            })
                        }), function(t) {
                            return e.apply(this, arguments)
                        }), [m, z, f, v, J]),
                        collectionId: s,
                        setStatus: n,
                        status: i,
                        verificationCode: c
                    }
                },
                J = i(43110),
                B = i(92405),
                j = i(25237),
                q = i.n(j),
                G = i(26297),
                L = q()(function() {
                    return Promise.all([i.e(27310), i.e(81503), i.e(24394), i.e(88629), i.e(28903), i.e(90391), i.e(83218), i.e(78958), i.e(79637), i.e(86771)]).then(i.bind(i, 92805)).then(function(e) {
                        return e.CollectionModal
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [92805]
                        }
                    },
                    ssr: !1
                }),
                H = function(e) {
                    var t = e.isOpen,
                        i = (0, G.Z)(e, ["isOpen"]);
                    return (0, f.B)(t) && (0, r.jsx)(L, (0, C.Z)({
                        isOpen: t
                    }, i))
                },
                W = q()(function() {
                    return Promise.all([i.e(27310), i.e(81503), i.e(58584), i.e(24394), i.e(88629), i.e(28903), i.e(97993), i.e(6798), i.e(25437), i.e(4196), i.e(39699), i.e(81142), i.e(64918), i.e(28154), i.e(3387), i.e(58679), i.e(1193), i.e(60484)]).then(i.bind(i, 266)).then(function(e) {
                        return e.OneClickSaveAddToCollectionModalProviderWrapped
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [266]
                        }
                    },
                    ssr: !1
                }),
                X = q()(function() {
                    return i.e(8880).then(i.bind(i, 8880)).then(function(e) {
                        return e.Snackbar
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8880]
                        }
                    },
                    ssr: !1
                }),
                Y = function(e) {
                    var t = e.assets,
                        i = e.assetType,
                        n = e.collectionId,
                        o = e.collectionTitle,
                        s = e.gridItems,
                        l = e.isDialogActive,
                        c = e.isSnackBarOpen,
                        u = e.onAddToCollections,
                        p = e.onAlertSnackbarClose,
                        v = e.onAddToCollectionsComplete,
                        m = e.redirectToCDPAction,
                        g = e.setIsDialogActive,
                        h = e.showCopyToModalTitle,
                        C = e.status,
                        I = e.verificationCode,
                        w = e.pageSection,
                        y = (0, B.p)(d.vb),
                        T = (0, B.p)(d.pG),
                        S = (0, f.B)(t),
                        A = (0, a.useCallback)(function() {
                            return g(!1)
                        }, [g]);
                    return S ? y || T && l ? (0, r.jsx)(W, {
                        onClose: A,
                        isOpen: l,
                        items: t,
                        onAddToCollectionsComplete: v,
                        pageSection: w
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(H, {
                            assets: t,
                            assetType: i,
                            collectionId: n,
                            gridItems: s,
                            isOpen: l,
                            onAddToCollections: u,
                            setIsDialogActive: g,
                            showCopyToModalTitle: h,
                            pageSection: w
                        }), (0, r.jsx)(X, {
                            assetType: i,
                            collectionId: n,
                            collectionTitle: o,
                            isOpen: c,
                            onAlertSnackbarClose: p,
                            redirectToCDPAction: m,
                            status: C,
                            verificationCode: I
                        })]
                    }) : null
                };
            Y.defaultProps = {
                assetType: "",
                assets: null,
                gridItems: null,
                onAddToCollectionsComplete: void 0,
                redirectToCDPAction: {}
            };
            var F = function(e) {
                var t = e.initialAssetType,
                    i = (0, o.Z)((0, a.useState)(!1), 2),
                    n = i[0],
                    r = i[1],
                    s = (0, o.Z)((0, a.useState)(!1), 2),
                    d = s[0],
                    f = s[1],
                    g = (0, o.Z)((0, a.useState)(!1), 2),
                    h = g[0],
                    C = g[1],
                    I = (0, o.Z)((0, a.useState)(""), 2),
                    w = I[0],
                    y = I[1],
                    T = (0, o.Z)((0, a.useState)(null), 2),
                    S = T[0],
                    A = T[1],
                    b = (0, o.Z)((0, a.useState)(t), 2),
                    P = b[0],
                    O = b[1],
                    k = (0, o.Z)((0, a.useState)(null), 2),
                    Z = k[0],
                    U = k[1],
                    _ = (0, o.Z)((0, a.useState)(null), 2),
                    M = _[0],
                    D = _[1],
                    x = (0, o.Z)((0, a.useState)(null), 2),
                    R = x[0],
                    N = x[1],
                    V = (0, J.B)(),
                    E = (0, p.cM)(),
                    B = (0, v.L)(),
                    j = (0, m.d)(),
                    q = l(),
                    G = q.isModalOpen,
                    L = q.handleCloseModal,
                    H = q.handleOpenModal,
                    W = (0, o.Z)((0, a.useState)({
                        shouldHandleRedirect: !1,
                        redirectToCollectionDetailsPage: B
                    }), 2),
                    X = W[0],
                    F = W[1],
                    K = z(),
                    Q = K.add,
                    $ = K.status,
                    ee = K.collectionId,
                    et = K.verificationCode;
                (0, a.useEffect)(function() {
                    return function() {
                        return A(null)
                    }
                }, []), (0, a.useEffect)(function() {
                    return function() {
                        return O("")
                    }
                }, []);
                var ei = (0, a.useCallback)(function(e) {
                    var t = e.formattedAssets,
                        i = e.gridItems,
                        n = e.isCopyToCollection,
                        o = e.mappedAssetType,
                        s = e.redirectToCollectionDetailsPage,
                        a = e.pageSection,
                        l = e.listId;
                    O(o), A(t), D(a), N(l), n && C(!0), i && U(i), s && F({
                        shouldHandleRedirect: !0,
                        redirectToCollectionDetailsPage: s
                    }), r(!0)
                }, []);
                return (0, a.useEffect)(function() {
                    (0, c.DZ)({
                        showAddToCollectionModal: ei,
                        isLoggedInUser: V
                    })
                }, [V, ei]), {
                    addToCollectionViewsProps: (0, a.useMemo)(function() {
                        return {
                            assets: S,
                            pageSection: M,
                            assetType: P,
                            collectionId: ee,
                            collectionTitle: w,
                            gridItems: Z,
                            isDialogActive: n,
                            isSnackBarOpen: d,
                            onAddToCollections: function(e) {
                                var t = e.id,
                                    i = e.title,
                                    n = e.verificationCode,
                                    o = e.groupedOptions,
                                    s = e.pageSection;
                                return y(i), r(!1), f(!0), Q({
                                    assetType: P,
                                    assets: S,
                                    gridItems: Z,
                                    groupedOptions: o,
                                    id: t,
                                    title: i,
                                    verificationCode: n,
                                    pageSection: s || M,
                                    listId: R
                                })
                            },
                            onAlertSnackbarClose: function() {
                                return f(!1)
                            },
                            redirectToCDPAction: X,
                            setIsDialogActive: r,
                            showCopyToModalTitle: h,
                            status: $,
                            verificationCode: et
                        }
                    }, [S, Z, Q, R, M, P, ee, w, n, d, X, h, $, et]),
                    addToCollectionViewsHandler: (0, a.useCallback)(function(e) {
                        var t = e.assets,
                            i = e.gridItems,
                            n = e.isCopyToCollection,
                            o = e.redirectToCollectionDetailsPage,
                            r = e.pageSection,
                            s = e.listId,
                            a = e.openModal;
                        if (V) {
                            var l = [].concat(t);
                            ei({
                                formattedAssets: l,
                                gridItems: i,
                                isCopyToCollection: void 0 !== n && n,
                                mappedAssetType: (0, u.A8)(l[0]),
                                redirectToCollectionDetailsPage: o,
                                pageSection: r,
                                listId: s
                            })
                        } else void 0 !== a && a && !j ? (t && window.sessionStorage.setItem(c.Iz, JSON.stringify(t)), i && window.sessionStorage.setItem(c.em, JSON.stringify(i)), H()) : (0, c.JO)({
                            assets: t,
                            gridItems: i,
                            signUpPath: E
                        })
                    }, [H, V, j, ei, E]),
                    AddToCollectionViews: Y,
                    isModalOpen: G,
                    handleCloseModal: L
                }
            }
        },
        7197: function(e, t, i) {
            i.d(t, {
                DZ: function() {
                    return a
                },
                Iz: function() {
                    return o
                },
                JO: function() {
                    return s
                },
                em: function() {
                    return r
                }
            });
            var n = i(44297),
                o = "add_to_collection_asset",
                r = "add_to_collection_grid_items",
                s = function(e) {
                    var t = e.assets,
                        i = e.gridItems,
                        n = e.signUpPath;
                    window && (t && window.sessionStorage.setItem(o, JSON.stringify(t)), i && window.sessionStorage.setItem(r, JSON.stringify(i)), window.location = n)
                },
                a = function(e) {
                    var t = e.showAddToCollectionModal,
                        i = e.isLoggedInUser;
                    if (void 0 !== i) {
                        if (i) {
                            var s = window.sessionStorage.getItem(o),
                                a = window.sessionStorage.getItem(r),
                                l = function(e) {
                                    return e && "undefined" !== e
                                };
                            if (l(s) && l(a)) {
                                var d = JSON.parse(s),
                                    c = JSON.parse(a),
                                    u = [].concat(d);
                                t({
                                    formattedAssets: u,
                                    gridItems: c,
                                    mappedAssetType: (0, n.A8)(u[0]),
                                    isCopyToCollection: !1,
                                    redirectToCollectionDetailsPage: !1
                                })
                            }
                        }
                        window.sessionStorage.removeItem(o), window.sessionStorage.removeItem(r)
                    }
                }
        },
        63256: function(e, t, i) {
            i.d(t, {
                KW: function() {
                    return v
                },
                VC: function() {
                    return f
                },
                fp: function() {
                    return c
                },
                lR: function() {
                    return u
                },
                ok: function() {
                    return m
                },
                qG: function() {
                    return p
                },
                r8: function() {
                    return g
                },
                vG: function() {
                    return d
                }
            });
            var n = i(87394),
                o = i(97258),
                r = i(39232),
                s = i(44297),
                a = i(31683),
                l = [r.pX],
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    if (!a.n5 || "string" != typeof e || e.includes("ip=x".concat(t))) return e;
                    try {
                        var i = new URL(e);
                        return i.searchParams.set("ip", "x".concat(t)), i.href
                    } catch (t) {
                        return e
                    }
                },
                c = function(e) {
                    var t, i, n;
                    return (null == e ? void 0 : e.mediaItem) ? {
                        previewImageUrl: null === (i = e.mediaItem) || void 0 === i ? void 0 : i.previewImageUrl,
                        previewVideoUrls: null === (n = e.mediaItem) || void 0 === n ? void 0 : n.previewVideoUrls
                    } : {
                        previewImageUrl: (null == e ? void 0 : e.thumbImageUrl) || (null == e ? void 0 : null === (t = e.image) || void 0 === t ? void 0 : t.url) || (null == e ? void 0 : e.previewImageUrl),
                        previewVideoUrls: null == e ? void 0 : e.previewVideoUrls
                    }
                },
                u = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480;
                    return (0, s.Am)(t) ? d(c(t).previewImageUrl, i) : t.src || (null === (e = t.image) || void 0 === e ? void 0 : e.url)
                },
                p = function(e) {
                    return e.assetType === r.pX ? "mp4" : null
                },
                v = function(e) {
                    var t = e.asset;
                    return l.includes((0, s.Tp)(t)) && !(0, s.so)(t)
                },
                f = function() {
                    var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ((0, s.vh)(null == i ? void 0 : i.type)) return (null == i ? void 0 : i.width) > 1e3 ? "".concat(null == i ? void 0 : i.previewUrls[0], "?width=1000") : null == i ? void 0 : i.previewUrls[0];
                    var n = (0, s.EK)(i) ? o.bm : o.RA,
                        r = null == i ? void 0 : null === (e = i.displays) || void 0 === e ? void 0 : null === (t = e[n]) || void 0 === t ? void 0 : t.src;
                    return (0, s.f8)(i) ? r.replace(/\/([A-Z]\d\d)./, "/".concat(i.angle, ".")) : r
                },
                m = function() {
                    var e, t, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = (0, s.Tp)(n);
                    return a === r.k4 || a === r.zo || a === r.Nk ? (null == n ? void 0 : null === (e = n.displays) || void 0 === e ? void 0 : null === (t = e[o.bm]) || void 0 === t ? void 0 : t.src) || (null == n ? void 0 : n.src) : a === r.bz ? null == n ? void 0 : null === (i = n.imageVariants) || void 0 === i ? void 0 : i["1500"] : a === r.xF || a === r.tn ? null == n ? void 0 : n.previewMp3 : a === r.hv ? null == n ? void 0 : n.previewUrls[0] : null
                },
                g = function() {
                    var e, t, i, o, r, a, l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        c = {
                            width: null !== (o = null !== (i = l.width) && void 0 !== i ? i : null === (e = l.mediaItem) || void 0 === e ? void 0 : e.width) && void 0 !== o ? o : 0,
                            height: null !== (a = null !== (r = l.height) && void 0 !== r ? r : null === (t = l.mediaItem) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
                        };
                    if ((0, s.Am)(l) && (!c.width || !c.height) && l.sizes) {
                        var u = Object.keys(l.sizes).find(function(e) {
                            return l.sizes[e]
                        });
                        c.width = u && l.sizes[u].width || 0, c.height = u && l.sizes[u].height || 0
                    }
                    if (d && (!c.width || !c.height) && l.aspectRatioCommon) {
                        var p = (0, n.Z)(l.aspectRatioCommon.split(":"), 2),
                            v = p[0],
                            f = p[1];
                        c.width = Number(v), c.height = Number(f)
                    }
                    return c
                }
        },
        18027: function(e, t, i) {
            i.d(t, {
                y: function() {
                    return n
                }
            });
            var n = function(e) {
                return [e.subPage, e.pageType].join("-")
            }
        },
        12787: function(e, t, i) {
            i.d(t, {
                J: function() {
                    return a
                }
            });
            var n = i(29292),
                o = i(776),
                r = i(2784),
                s = i(68533),
                a = function() {
                    var e = (0, o.yh)().analytics,
                        t = (0, s.Y)().getSearchContext;
                    return (0, r.useCallback)(function(i) {
                        var o = i.collectionId,
                            r = i.collectionName,
                            s = i.gridItems,
                            a = i.assets,
                            l = i.pageSection,
                            d = i.listId;
                        e.productAddedToWishlist({
                            products: a.map(function(e) {
                                return (0, n.bR)({
                                    asset: e,
                                    getSearchContext: t,
                                    gridItems: s,
                                    pageSection: l
                                })
                            }),
                            wishlist_id: o,
                            wishlist_name: r,
                            list_id: null != d ? d : ""
                        })
                    }, [e, t])
                }
        },
        47875: function(e, t, i) {
            i.d(t, {
                L: function() {
                    return a
                }
            });
            var n = i(50930),
                o = i(68445),
                r = i(5632),
                s = i(2784),
                a = function() {
                    var e = (0, r.useRouter)();
                    return (0, s.useCallback)(function(t) {
                        var i = t.assetType,
                            r = t.collectionId,
                            s = t.verificationCode,
                            a = (0, o.B)({
                                assetType: i,
                                id: r,
                                verificationCode: s
                            });
                        e.push.apply(e, (0, n.Z)(a))
                    }, [e])
                }
        },
        52494: function(e, t, i) {
            i.d(t, {
                w: function() {
                    return u
                }
            });
            var n = i(98788),
                o = i(87394),
                r = i(5163),
                s = i(81740),
                a = i(44699),
                l = i(32456),
                d = i(67661),
                c = i(2784),
                u = function() {
                    var e, t = (0, o.Z)((0, c.useState)({
                            status: "",
                            error: void 0
                        }), 2),
                        i = t[0],
                        u = t[1],
                        p = (0, c.useCallback)((e = (0, n.Z)(function(e) {
                            var t, i, n, o, c;
                            return (0, r.__generator)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = e.collection, i = e.mediaItem, n = (0, s.df)({
                                            urlParams: {
                                                id: t.id
                                            }
                                        }).formattedUrl, o = {
                                            data: {
                                                id: t.id,
                                                relationships: {
                                                    "cover-item": {
                                                        data: {
                                                            id: "".concat(i.id),
                                                            type: l.A8
                                                        }
                                                    }
                                                },
                                                type: l.Ul
                                            }
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), u({
                                            status: a.MR,
                                            error: void 0
                                        }), [4, d.uS.patch(n, o)];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return c = r.sent(), u({
                                            status: a.cM,
                                            error: c
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        }), function(t) {
                            return e.apply(this, arguments)
                        }), []);
                    return {
                        status: i,
                        setStatus: u,
                        setAsCover: p
                    }
                }
        }
    }
]);
//# sourceMappingURL=55531-31a3b8089270c5ee.js.map