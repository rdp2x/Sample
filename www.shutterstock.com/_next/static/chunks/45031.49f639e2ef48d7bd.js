"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45031, 68533, 39107, 69026, 53007, 26625], {
        68245: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return a
                }
            });
            var r = n(70865),
                i = n(38398),
                a = function(e) {
                    var t = e.urlParams,
                        n = e.queryParams,
                        a = "/bundle/".concat((void 0 === t ? {} : t).filename),
                        o = (0, r.Z)({}, void 0 === n ? {} : n);
                    return {
                        url: a,
                        defaultParams: o,
                        formattedUrl: (0, i.format)({
                            pathname: a,
                            query: o
                        })
                    }
                }
        },
        90751: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return b
                }
            });
            var r = n(70865),
                i = n(87394),
                a = n(52322),
                o = n(66358),
                s = n(80578),
                c = n(57048),
                u = n(39232),
                l = n(31666),
                d = n(776),
                v = n(2784),
                f = function(e) {
                    var t = e.assetType;
                    return t === u.k4 ? o.eSS : t === u.pX ? o.AtB : null
                },
                p = function() {
                    var e = (0, d.yh)().analytics,
                        t = (0, l.d)().assetType;
                    return (0, v.useCallback)(function() {
                        var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).pageSection,
                            r = f({
                                assetType: t
                            });
                        return n && r && e.click({
                            pageSection: n,
                            eventLabel: r
                        })
                    }, [e, t])
                },
                m = n(52309),
                g = n(25237),
                h = n.n(g)()(function() {
                    return Promise.all([n.e(27310), n.e(81503), n.e(97993), n.e(42861), n.e(55531), n.e(45504), n.e(50288), n.e(34933), n.e(41762), n.e(64009)]).then(n.bind(n, 64920)).then(function(e) {
                        return e.PreviewModalEcomm
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64920]
                        }
                    },
                    ssr: !1
                }),
                y = function(e) {
                    var t = e.isModalOpen;
                    return (0, m.B)(t) ? (0, a.jsx)(h, (0, r.Z)({}, e)) : null
                },
                b = function(e) {
                    var t = e.addToCartViewsHandler,
                        n = e.addToCollectionViewsHandler,
                        r = e.assets,
                        a = void 0 === r ? [] : r,
                        u = e.compLicensingHandler,
                        l = e.licensingAssetId,
                        f = e.withGoToPageAction,
                        m = e.withNavigationArrows,
                        g = e.withProductClickWhereYouLeftOffTracking,
                        h = void 0 !== g && g,
                        b = e.listId,
                        S = e.assetActionsProps,
                        w = e.SecondaryActionsComponent,
                        T = (0, d.wU)(),
                        I = (0, s.T)(),
                        A = (0, c.D)(),
                        _ = p(),
                        Z = (0, i.Z)((0, v.useState)(a[0]), 2),
                        C = Z[0],
                        k = Z[1],
                        R = (0, i.Z)((0, v.useState)(!1), 2),
                        O = R[0],
                        P = R[1],
                        L = (0, v.useCallback)(function(e) {
                            var t = e.assetId,
                                n = e.eventLabel,
                                r = a.find(function(e) {
                                    var n = e.id,
                                        r = e.mediaItem,
                                        i = (void 0 === r ? {} : r).id;
                                    return i ? i === t : n === t
                                });
                            k(r), r && (P(!0), _({
                                pageSection: T
                            }), I({
                                eventLabel: n,
                                asset: r,
                                gridItems: a,
                                isPreview: !0,
                                pageSection: T,
                                listId: b
                            })), h && A({
                                eventLabel: o.e3M
                            })
                        }, [a, h, _, T, I, b, A]);
                    return {
                        previewModalProps: {
                            addToCartViewsHandler: t,
                            addToCollectionViewsHandler: n,
                            asset: C,
                            closeModal: (0, v.useCallback)(function() {
                                P(!1)
                            }, []),
                            compLicensingHandler: u,
                            gridItems: a,
                            isModalOpen: O,
                            licensingAssetId: l,
                            setAsset: k,
                            withGoToPageAction: f,
                            withNavigationArrows: m,
                            showActionIcons: !0,
                            assetActionsProps: void 0 === S ? {} : S,
                            SecondaryActionsComponent: void 0 === w ? void 0 : w
                        },
                        onAssetModalHandler: L,
                        PreviewModal: y
                    }
                }
        },
        26625: function(e, t, n) {
            n.r(t), n.d(t, {
                Snackbar: function() {
                    return f
                }
            });
            var r = n(70865),
                i = n(96670),
                a = n(52322),
                o = n(44417),
                s = n(44699),
                c = n(3081),
                u = n(93181),
                l = n(75),
                d = n(59877),
                v = function(e) {
                    var t = e.status,
                        n = e.isSizeLimitWarning,
                        r = e.alertLabels;
                    return n ? r.sizeLimitWarning : t === s.MR ? r.addToCartSuccess : r.addToCartWarning
                },
                f = function(e) {
                    var t = e.isOpen,
                        n = e.isSizeLimitWarning,
                        f = e.addToCartStatus,
                        p = e.snackBarActionAllowed,
                        m = e.handleSnackbarClose,
                        g = (0, d.$G)(l.jey).t,
                        h = (0, u.W)(),
                        y = f.status,
                        b = f.error,
                        S = {
                            addToCartSuccess: g("common:actions_added_to_cart"),
                            addToCartWarning: g("notifications:label_add_to_cart_failure"),
                            sizeLimitWarning: g("ent:cart_size_limit_warning", {
                                LIMIT: c.fv
                            }),
                            viewActionLabel: g("common:actions_view")
                        },
                        w = v({
                            status: y,
                            isSizeLimitWarning: void 0 !== n && n,
                            alertLabels: S
                        }),
                        T = {
                            onClick: h,
                            label: S.viewActionLabel
                        };
                    return (0, a.jsx)(o.Y, (0, i.Z)((0, r.Z)({}, f.status === s.MR && (void 0 === p || p) && {
                        alertAction: T
                    }), {
                        alertSeverity: y,
                        error: b,
                        handleSnackbarClose: m,
                        isOpen: t && !!y,
                        message: w
                    }))
                }
        },
        51852: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return g
                },
                t: function() {
                    return h
                }
            });
            var r = n(98788),
                i = n(87394),
                a = n(5163),
                o = n(52322),
                s = n(10185),
                c = n(52309),
                u = n(2784),
                l = n(70865),
                d = n(26297),
                v = n(25237),
                f = n.n(v)()(function() {
                    return Promise.all([n.e(27310), n.e(81503), n.e(24394), n.e(88629), n.e(28903), n.e(88103), n.e(24502), n.e(18901), n.e(78958), n.e(79637), n.e(67127), n.e(54776), n.e(19423)]).then(n.bind(n, 73605)).then(function(e) {
                        return e.AddToCartDialog
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [73605]
                        }
                    },
                    ssr: !1
                }),
                p = function(e) {
                    var t = e.isActive,
                        n = (0, d.Z)(e, ["isActive"]);
                    return (0, c.B)(t) && (0, o.jsx)(f, (0, l.Z)({
                        isActive: t
                    }, n))
                },
                m = n(26625),
                g = function(e) {
                    var t = e.addToCartStatus,
                        n = e.assets,
                        r = e.eventLabel,
                        i = e.gridItems,
                        a = e.isAddToCartDialogActive,
                        s = e.isPrimary,
                        u = e.isSnackBarOpen,
                        l = e.isSizeLimitWarning,
                        d = e.onAddToCart,
                        v = e.onAlertSnackbarClose,
                        f = e.setIsAddToCartDialogActive,
                        g = e.pageSection,
                        h = e.listId,
                        y = e.snackBarActionAllowed;
                    return (0, c.B)(n) ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p, {
                            assets: n,
                            eventLabel: r,
                            gridItems: i,
                            isActive: a,
                            isPrimary: s,
                            listId: h,
                            onAddToCart: d,
                            pageSection: g,
                            setIsActive: f
                        }), (0, o.jsx)(m.Snackbar, {
                            snackBarActionAllowed: y,
                            addToCartStatus: t,
                            handleSnackbarClose: v,
                            isOpen: u,
                            isSizeLimitWarning: l
                        })]
                    }) : null
                };
            g.defaultProps = {
                snackBarActionAllowed: !0,
                addToCartStatus: {
                    status: "",
                    error: void 0
                },
                assets: null,
                gridItems: null
            };
            var h = function() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = n.withOptimisticUpdate,
                    c = void 0 === o || o,
                    l = n.setIsVerifying,
                    d = n.snackBarActionAllowed,
                    v = void 0 === d || d,
                    f = (0, i.Z)((0, u.useState)(!1), 2),
                    p = f[0],
                    m = f[1],
                    h = (0, i.Z)((0, u.useState)(!1), 2),
                    y = h[0],
                    b = h[1],
                    S = (0, i.Z)((0, u.useState)(null), 2),
                    w = S[0],
                    T = S[1],
                    I = (0, i.Z)((0, u.useState)(null), 2),
                    A = I[0],
                    _ = I[1],
                    Z = (0, i.Z)((0, u.useState)(!0), 2),
                    C = Z[0],
                    k = Z[1],
                    R = (0, i.Z)((0, u.useState)(null), 2),
                    O = R[0],
                    P = R[1],
                    L = (0, i.Z)((0, u.useState)(null), 2),
                    E = L[0],
                    N = L[1],
                    x = (0, i.Z)((0, u.useState)(null), 2),
                    U = x[0],
                    F = x[1],
                    z = (0, s.gV)(),
                    D = z.addCartItems,
                    B = z.moveToSaveForLater,
                    j = z.moveToPrimary,
                    M = z.addToCartStatus,
                    q = z.isSizeLimitWarning,
                    H = z.notAddedSelectVideos;
                (0, u.useEffect)(function() {
                    return function() {
                        return T(null)
                    }
                }, []);
                var V = (0, u.useCallback)(function(e) {
                        var t = e.assets,
                            n = e.eventLabel,
                            r = e.licenseId,
                            i = e.formatType,
                            a = e.licensePrice,
                            o = e.cart,
                            s = e.mutateCart,
                            u = e.notAddedSelectVideoIds,
                            d = e.pageSection,
                            v = e.listId;
                        null == l || l(!0), b(!0), D({
                            cart: o,
                            eventLabel: n,
                            gridItems: A,
                            isPrimary: C,
                            itemsToAdd: t || w,
                            licenseId: r,
                            formatType: i,
                            licensePrice: a,
                            mutateCart: s,
                            notAddedSelectVideoIds: u,
                            withOptimisticUpdate: c,
                            pageSection: d,
                            listId: v
                        })
                    }, [w, A, D, C, l, c]),
                    W = (0, u.useCallback)((e = (0, r.Z)(function(e) {
                        var t, n, r, i;
                        return (0, a.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.itemsToMove, n = e.primaryCart, r = e.mutatePrimaryCart, i = e.mutateSavedForLaterCart, null == l || l(!0), b(!0), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, j({
                                        itemsToMove: t,
                                        primaryCart: n,
                                        mutatePrimaryCart: r,
                                        mutateSavedForLaterCart: i
                                    })];
                                case 2:
                                    return a.sent(), [3, 4];
                                case 3:
                                    return a.sent(), null == l || l(!1), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }), [j, l]),
                    G = (0, u.useCallback)((t = (0, r.Z)(function(e) {
                        var t, n, r, i, o;
                        return (0, a.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.itemsToMove, n = e.primaryCart, r = e.savedForLaterCart, i = e.mutatePrimaryCart, o = e.mutateSavedForLaterCart, null == l || l(!0), b(!0), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, B({
                                        itemsToMove: t,
                                        primaryCart: n,
                                        savedForLaterCart: r,
                                        mutatePrimaryCart: i,
                                        mutateSavedForLaterCart: o
                                    })];
                                case 2:
                                    return a.sent(), [3, 4];
                                case 3:
                                    return a.sent(), null == l || l(!1), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }), function(e) {
                        return t.apply(this, arguments)
                    }), [B, l]);
                return {
                    addToCartViewsProps: (0, u.useMemo)(function() {
                        return {
                            addToCartStatus: M,
                            assets: w,
                            eventLabel: U,
                            gridItems: A,
                            isAddToCartDialogActive: p,
                            isPrimary: C,
                            isSizeLimitWarning: q,
                            isSnackBarOpen: y,
                            onAddToCart: V,
                            onAlertSnackbarClose: function() {
                                return b(!1)
                            },
                            notAddedSelectVideos: H,
                            setIsAddToCartDialogActive: m,
                            pageSection: O,
                            listId: E,
                            snackBarActionAllowed: v
                        }
                    }, [w, A, M, U, E, O, p, C, q, y, H, V, v]),
                    addToCartViewsHandler: (0, u.useCallback)(function(e) {
                        var t = e.assets,
                            n = e.eventLabel,
                            r = e.gridItems,
                            i = e.isMoveToPrimaryCart,
                            a = e.isMoveToSavedForLaterCart,
                            o = e.isPrimaryCart,
                            s = e.mutatePrimaryCart,
                            c = e.mutateSavedForLaterCart,
                            u = e.primaryCart,
                            l = e.savedForLaterCart,
                            d = e.withDialog,
                            v = e.licenseId,
                            f = e.licensePrice,
                            p = e.pageSection,
                            g = e.listId;
                        if (T(t), k(void 0 === o || o), P(p), F(n), N(g), r && _(r), void 0 !== i && i) {
                            W({
                                itemsToMove: t,
                                primaryCart: u,
                                mutatePrimaryCart: s,
                                mutateSavedForLaterCart: c
                            });
                            return
                        }
                        if (void 0 !== a && a) {
                            G({
                                itemsToMove: t,
                                primaryCart: u,
                                savedForLaterCart: l,
                                mutatePrimaryCart: s,
                                mutateSavedForLaterCart: c
                            });
                            return
                        }
                        void 0 === d || d ? m(!0) : V({
                            assets: t,
                            eventLabel: n,
                            cart: u,
                            licenseId: v,
                            licensePrice: f,
                            mutateCart: s,
                            pageSection: p
                        })
                    }, [V, W, G]),
                    AddToCartViews: g
                }
            }
        },
        46481: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return q
                }
            });
            var r = n(52322),
                i = n(23490),
                a = n(65532),
                o = n(75),
                s = n(15741),
                c = n(70865),
                u = n(96670),
                l = n(87394),
                d = n(50930),
                v = n(39232),
                f = n(11181),
                p = n(16642),
                m = n(37546),
                g = n(44297),
                h = n(63256),
                y = n(97021),
                b = n(96109),
                S = n(48439),
                w = n.n(S),
                T = n(70314),
                I = n.n(T),
                A = n(20701),
                _ = n(42448),
                Z = n(27764),
                C = I()().publicRuntimeConfig.shutterstockBaseUrl,
                k = function(e) {
                    var t = e.asset,
                        n = t.contributor.publicInformation,
                        r = n.displayName,
                        i = n.portfolioUrl,
                        a = t.type,
                        o = "".concat(i).concat(a === v.FM ? "/".concat(v.pX) : "");
                    return {
                        "@context": p.ke,
                        "@type": p.Rm.BREADCRUMBSLIST,
                        itemListElement: [{
                            "@type": "ListItem",
                            position: 1,
                            item: {
                                "@id": o,
                                name: r
                            }
                        }]
                    }
                },
                R = function(e) {
                    var t, n = e.asset,
                        r = e.baseUrl,
                        i = void 0 === r ? C : r,
                        a = e.locale,
                        o = e.keywords,
                        s = e.sourceOrganizationName,
                        l = void 0 === s ? f.BRANDS.SSTK : s,
                        d = e.contentUrl,
                        m = e.representativeOfPage,
                        h = e.width,
                        y = e.height,
                        S = n.contributor,
                        T = (void 0 === S ? {} : S).publicInformation,
                        I = void 0 === T ? {} : T,
                        k = I.displayName,
                        R = I.portfolioUrl,
                        O = n.description,
                        P = void 0 === O ? "" : O,
                        L = n.id,
                        E = n.title,
                        N = n.descriptionLanguageMap,
                        x = n.byline,
                        U = n.locationName,
                        F = void 0 === U ? "" : U,
                        z = n.uploadedDate,
                        D = void 0 === z ? "1970-01-01" : z,
                        B = (0, g.aT)(n),
                        j = (0, g.k7)(n),
                        M = w()((void 0 === k ? "" : k) || (void 0 === x ? "" : x).split("/")[0]),
                        q = (0, A.gL)(E || P, a, N),
                        H = (null == n ? void 0 : n.link) || (null === (t = (0, b.r)({
                            assetType: v.pX,
                            id: L,
                            slug: (0, _.l)({
                                description: P
                            }),
                            description: P
                        })) || void 0 === t ? void 0 : t[0]) || "";
                    return (0, c.Z)((0, u.Z)((0, c.Z)((0, u.Z)((0, c.Z)((0, u.Z)((0, c.Z)({
                        "@context": p.ke,
                        "@type": p.Rm.IMAGE_OBJECT
                    }, M ? {
                        author: (0, c.Z)({
                            "@type": j ? p.Rm.THING : p.Rm.PERSON,
                            name: M
                        }, R ? {
                            url: "".concat(R)
                        } : {}),
                        copyrightHolder: "".concat(M, " // ").concat(f.BRANDS.SSTK),
                        creditText: "".concat(M, " // ").concat(f.BRANDS.SSTK),
                        creator: (0, c.Z)({
                            "@type": p.Rm.PERSON,
                            name: M
                        }, R ? {
                            url: "".concat(R)
                        } : {}),
                        copyrightNotice: M
                    } : {}), {
                        license: (0, Z.Wg)({
                            pathname: "/license",
                            baseUrl: i,
                            language: a
                        }),
                        acquireLicensePage: (0, Z.Wg)({
                            pathname: H,
                            baseUrl: i,
                            language: a,
                            query: B ? p.iN : ""
                        }),
                        contentUrl: d,
                        identifier: "".concat(L),
                        description: w()(P),
                        fileFormat: d && d.replace(/^.+\.(.+)$/, "image/$1").replace("jpg", "jpeg")
                    }), (null == o ? void 0 : o.length) > 0 ? {
                        keywords: w()(o.join(","))
                    } : {}), {
                        name: q,
                        sourceOrganization: l
                    }), F ? {
                        locationCreated: {
                            "@type": "Place",
                            address: F
                        },
                        contentLocation: {
                            "@type": "Place",
                            address: F
                        }
                    } : {}), {
                        uploadDate: D && new Date(D).toISOString(),
                        representativeOfPage: void 0 !== m && m
                    }), h ? {
                        width: Math.floor(h)
                    } : {}, y ? {
                        height: Math.floor(y)
                    } : {})
                },
                O = function(e) {
                    var t = e.baseUrl,
                        n = void 0 === t ? C : t,
                        r = e.asset,
                        i = e.locale,
                        a = e.sourceOrganizationName,
                        o = void 0 === a ? f.BRANDS.SSTK : a,
                        s = e.displaySizes,
                        c = void 0 === s ? ["260Nw"] : s,
                        u = e.representativeOfPage,
                        l = void 0 !== u && u,
                        d = r.displays,
                        v = r.keywords;
                    if (1 === c.length) {
                        var p, m = null !== (p = null == d ? void 0 : d[null == c ? void 0 : c[0]]) && void 0 !== p ? p : {},
                            g = m.src,
                            h = m.width,
                            y = m.height;
                        return g ? [R({
                            asset: r,
                            baseUrl: n,
                            contentUrl: g,
                            locale: i,
                            keywords: v,
                            sourceOrganizationName: o,
                            representativeOfPage: l,
                            width: h,
                            height: y
                        })] : []
                    }
                    return c.map(function(e) {
                        var t, a = null !== (t = null == d ? void 0 : d[e]) && void 0 !== t ? t : {},
                            s = a.src,
                            c = a.width,
                            u = a.height;
                        return s ? R({
                            asset: r,
                            baseUrl: n,
                            contentUrl: s,
                            locale: i,
                            keywords: v,
                            sourceOrganizationName: o,
                            representativeOfPage: l,
                            width: c,
                            height: u
                        }) : {}
                    })
                },
                P = function(e) {
                    var t = function(e) {
                            return "".concat(e < 10 ? "0" : "").concat(e)
                        },
                        n = new Date(2017, 0, 0, 0, 0, e < 1 ? 1 : e);
                    return "PT".concat(t(n.getHours()), "H").concat(t(n.getMinutes()), "M").concat(t(n.getSeconds()), "S")
                },
                L = function(e) {
                    var t = e.baseUrl,
                        n = void 0 === t ? C : t,
                        r = e.asset,
                        i = e.locale,
                        a = void 0 === i ? "en" : i,
                        o = r.description,
                        s = r.duration,
                        d = r.id,
                        g = r.keywords,
                        h = r.sizes,
                        S = r.thumbImageUrl,
                        T = r.uploadedDate,
                        I = void 0 === T ? "1970-01-01" : T,
                        k = r.contributor,
                        R = (void 0 === k ? {} : k).publicInformation,
                        O = void 0 === R ? {} : R,
                        L = O.displayName,
                        E = O.portfolioUrl,
                        N = r.previewVideoUrls.mp4,
                        x = r.descriptionLanguageMap,
                        U = r.byline,
                        F = w()((void 0 === L ? "" : L) || (void 0 === U ? "" : U).split("/")[0]),
                        z = (0, A.gL)(o, a, x),
                        D = (0, _.l)({
                            description: o
                        }),
                        B = (0, l.Z)((0, b.r)({
                            assetType: v.pX,
                            id: d,
                            slug: D,
                            description: o
                        }), 1)[0],
                        j = (0, m.mF)(h),
                        M = j ? {
                            videoQuality: j.toUpperCase()
                        } : {},
                        q = (0, y.R)({
                            asset: r,
                            baseUrl: n
                        });
                    return (0, c.Z)((0, u.Z)((0, c.Z)((0, u.Z)((0, c.Z)((0, u.Z)((0, c.Z)({
                        "@context": p.ke,
                        "@type": p.Rm.VIDEO_OBJECT,
                        name: z,
                        identifier: d,
                        description: w()(o)
                    }, (null == g ? void 0 : g.length) > 0 ? {
                        keywords: w()(g.join(","))
                    } : {}), {
                        url: "https://www.shutterstock.com".concat(B),
                        thumbnailUrl: S,
                        playerType: "HTML5"
                    }), M), {
                        license: (0, Z.Wg)({
                            pathname: "/license",
                            baseUrl: n,
                            language: a
                        }),
                        acquireLicensePage: (0, Z.Wg)({
                            pathname: B,
                            baseUrl: n,
                            language: a
                        }),
                        duration: P(s)
                    }), F ? {
                        author: (0, c.Z)({
                            "@type": p.Rm.PERSON,
                            name: F
                        }, E ? {
                            url: "".concat(E, "/").concat(v.pX)
                        } : {}),
                        creditText: "".concat(F, " // ").concat(f.BRANDS.SSTK),
                        creator: (0, c.Z)({
                            "@type": p.Rm.PERSON,
                            name: F
                        }, E ? {
                            url: "".concat(E)
                        } : {}),
                        copyrightNotice: F
                    } : {}), {
                        uploadDate: I && new Date(I).toISOString()
                    }), q ? {
                        embedUrl: q
                    } : {
                        contentUrl: N
                    })
                },
                E = function(e) {
                    var t = e.baseUrl,
                        n = void 0 === t ? C : t,
                        r = e.asset,
                        i = r.artists,
                        a = r.description,
                        o = r.keywords,
                        s = r.title,
                        d = r.id,
                        f = r.previewMp3,
                        m = r.previewOgg,
                        g = r.nativeDuration,
                        h = r.created,
                        y = void 0 === h ? "1970-01-01" : h,
                        S = r.waveformPng,
                        T = e.locale,
                        I = void 0 === T ? "en" : T,
                        A = i && i[0],
                        k = A ? "/music/search/?artist=".concat(A.toLocaleLowerCase(I).replace(/\s/g, "-")) : "",
                        R = (0, _.l)({
                            description: a
                        }),
                        O = (0, l.Z)((0, b.r)({
                            assetType: v.jr,
                            id: d,
                            slug: R,
                            description: a
                        }), 1)[0],
                        L = y ? new Date("".concat(y).concat(y.endsWith("Z") || y.includes("+") ? "" : "Z")).toISOString() : "";
                    return (0, u.Z)((0, c.Z)((0, u.Z)((0, c.Z)((0, u.Z)((0, c.Z)({
                        "@context": p.ke,
                        "@type": [p.Rm.MUSIC_RECORDING, p.Rm.PRODUCT],
                        name: w()(s),
                        identifier: d,
                        url: "https://www.shutterstock.com".concat(O),
                        description: w()(a)
                    }, (null == o ? void 0 : o.length) > 0 ? {
                        keywords: w()(o.join(","))
                    } : {}), {
                        sku: "track-".concat(d)
                    }), y && {
                        datePublished: L
                    }, S && {
                        image: S
                    }), {
                        offers: {
                            "@type": p.Rm.OFFER,
                            availability: "https://schema.org/InStock",
                            price: "49.00",
                            priceCurrency: "USD"
                        },
                        duration: P(g),
                        license: (0, Z.Wg)({
                            pathname: "/license",
                            baseUrl: n,
                            language: I
                        })
                    }), A && {
                        byArtist: {
                            "@type": p.Rm.MUSIC_GROUP,
                            name: w()(A),
                            url: (0, Z.Wg)({
                                pathname: k,
                                baseUrl: n,
                                language: I
                            })
                        }
                    }), {
                        audio: (0, c.Z)({
                            "@context": p.ke,
                            "@type": p.Rm.AUDIO_OBJECT,
                            name: s,
                            identifier: d,
                            playerType: "HTML5",
                            license: (0, Z.Wg)({
                                pathname: "/license",
                                baseUrl: n,
                                language: I
                            }),
                            acquireLicensePage: (0, Z.Wg)({
                                pathname: O,
                                baseUrl: n,
                                language: I
                            }),
                            duration: P(g),
                            contentUrl: f || m,
                            encodingFormat: f ? "audio/mpeg" : "audio/ogg"
                        }, y && {
                            uploadDate: L
                        }, A && {
                            author: {
                                "@type": p.Rm.MUSIC_GROUP,
                                name: w()(A),
                                url: (0, Z.Wg)({
                                    pathname: k,
                                    baseUrl: n,
                                    language: I
                                })
                            }
                        })
                    })
                },
                N = function(e) {
                    var t = e.assets,
                        n = e.breadcrumbs,
                        r = void 0 === n || n,
                        i = e.locale,
                        a = void 0 === i ? "en" : i,
                        o = e.displaySizes,
                        s = void 0 === o ? ["260Nw"] : o,
                        c = e.representativeOfPage,
                        u = void 0 !== c && c;
                    return t && Array.isArray(t) && (null == t ? void 0 : t.length) !== 0 ? t.reduce(function(e, t) {
                        var n, i, o = (0, g.Tp)(t);
                        return [v.k4, v.Y_].includes(o) && (e.push.apply(e, (0, d.Z)(O({
                            asset: t,
                            locale: a,
                            displaySizes: s,
                            representativeOfPage: u
                        }))), r && (null === (n = t.contributor) || void 0 === n ? void 0 : n.publicInformation) && e.push(k({
                            asset: t,
                            locale: a
                        }))), [v.pX, v.FM].includes(o) && (e.push(L({
                            asset: t
                        })), e.push(R({
                            asset: t,
                            locale: a,
                            contentUrl: (0, h.vG)(t.previewImageUrl)
                        })), r && (null === (i = t.contributor) || void 0 === i ? void 0 : i.publicInformation) && e.push(k({
                            asset: t
                        }))), [v.j0, v.xF, v.IK, v.jr].includes(o) && e.push(E({
                            asset: t
                        })), e
                    }, []) : []
                },
                x = function(e) {
                    var t = e.assets,
                        n = e.schemas,
                        r = e.t,
                        i = {};
                    return t.forEach(function(e) {
                        i[e.id] = e
                    }), (void 0 === n ? [] : n).reduce(function(e, t) {
                        if ("BreadcrumbList" === t["@type"]) return e.push(t), e;
                        var n = i[t.identifier];
                        if (n) {
                            var a, s = (0, g.Tp)(n),
                                l = n.description,
                                d = n.id,
                                f = n.imageType,
                                p = void 0 === f ? "" : f,
                                m = (n.duration, n.sizes, (v.wW.includes(p.toLowerCase()) ? p : v.pV).toLowerCase());
                            if (s === v.k4) {
                                var h = t.name;
                                a = (0, u.Z)((0, c.Z)({}, t), {
                                    name: r("".concat(o.w7u, "::image:seo_title_").concat(m), {
                                        ASSET_ID: d,
                                        DESCRIPTION: h
                                    })
                                })
                            }
                            s === v.pX && (a = (0, u.Z)((0, c.Z)({}, t), {
                                description: r("".concat(o.VLi, "::footage:clip_details_meta_title_id"), {
                                    TITLE: l,
                                    ID: d
                                })
                            })), [v.j0, v.xF, v.IK, v.jr].includes(s) && (a = (0, c.Z)({}, t)), e.push(a)
                        } else e.push(t);
                        return e
                    }, [])
                },
                U = n(97729),
                F = n.n(U),
                z = n(59877),
                D = n(2784),
                B = function(e) {
                    var t = e.assets,
                        n = e.displaySizes,
                        r = e.locale;
                    return n ? n.map(function(e) {
                        return N({
                            assets: t,
                            breadcrumbs: !1,
                            locale: r,
                            displaySizes: [e]
                        })
                    }).filter(function(e) {
                        return e.length
                    }) : N({
                        assets: t,
                        breadcrumbs: !1,
                        locale: r
                    })
                },
                j = function(e) {
                    var t = e.assets,
                        n = e.schemas,
                        r = e.t;
                    return e.isMultipleDisplays ? n.map(function(e) {
                        return x({
                            assets: t,
                            schemas: e,
                            t: r
                        })
                    }) : x({
                        assets: t,
                        schemas: n,
                        t: r
                    })
                },
                M = function(e) {
                    var t = e.schemas;
                    return e.isMultipleDisplays ? t.map(function(e) {
                        return (0, s.oc)({
                            html: e
                        })
                    }) : [(0, s.oc)({
                        html: t
                    })]
                },
                q = (0, D.memo)(function(e) {
                    var t = e.assets,
                        n = e.displaySizes,
                        s = (0, i.N)().isBot,
                        c = (0, a.PE)().locale,
                        u = (0, z.$G)([o.w7u, o.VLi]).t,
                        l = null;
                    if (s) {
                        var d = {},
                            v = B({
                                assets: t,
                                displaySizes: n,
                                locale: c
                            });
                        if ((null == t ? void 0 : t.length) && (null == v ? void 0 : v.length)) {
                            var f = j({
                                assets: t,
                                isMultipleDisplays: !!n,
                                schemas: v,
                                t: u
                            });
                            d.schemas = M({
                                isMultipleDisplays: !!n,
                                schemas: f
                            })
                        }
                        l = (0, r.jsx)(F(), {
                            children: d.schemas && d.schemas.map(function(e) {
                                var t = e.type,
                                    n = e.contentType,
                                    i = e.innerHTML;
                                return (0, r.jsx)("script", {
                                    type: t,
                                    dangerouslySetInnerHTML: {
                                        __html: i
                                    }
                                }, n)
                            })
                        })
                    }
                    return l
                })
        },
        44417: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return d
                }
            });
            var r = n(87394),
                i = n(52322),
                a = n(44699),
                o = n(86406),
                s = n(25237),
                c = n.n(s),
                u = n(2784),
                l = c()(function() {
                    return Promise.all([n.e(27310), n.e(88272), n.e(60102)]).then(n.bind(n, 83725)).then(function(e) {
                        return e.Snackbar
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [83725]
                        }
                    },
                    ssr: !1
                }),
                d = function(e) {
                    var t = e.alertAction,
                        n = e.alertSeverity,
                        s = void 0 === n ? a.H_ : n,
                        c = e.error,
                        d = e.handleSnackbarClose,
                        v = void 0 === d ? o.Z : d,
                        f = e.isOpen,
                        p = e.message,
                        m = void 0 === p ? "" : p,
                        g = e.onSnackbarExited,
                        h = void 0 === g ? o.Z : g,
                        y = e.isDismissible,
                        b = (0, r.Z)((0, u.useState)(!1), 2),
                        S = b[0],
                        w = b[1];
                    return f || S ? (0, i.jsx)(l, {
                        alertAction: void 0 === t ? {} : t,
                        alertSeverity: s,
                        error: void 0 === c ? void 0 : c,
                        handleSnackbarClose: v,
                        isOpen: f,
                        message: m,
                        onSnackbarExited: h,
                        setEntered: w,
                        isDismissible: void 0 === y || y
                    }, m) : null
                }
        },
        36221: function(e, t, n) {
            n.d(t, {
                C8: function() {
                    return l
                },
                GG: function() {
                    return r
                },
                TT: function() {
                    return o
                },
                _I: function() {
                    return s
                },
                jK: function() {
                    return u
                },
                o1: function() {
                    return i
                },
                sR: function() {
                    return c
                },
                up: function() {
                    return a
                }
            });
            var r = "profile",
                i = "/users/current/email",
                a = "/credentials/change",
                o = "/logout",
                s = "/iframe-landing",
                c = "shutterstockAuth:success",
                u = "signup",
                l = "login"
        },
        19522: function(e, t, n) {
            n.d(t, {
                KQ: function() {
                    return a
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
                    return o
                }
            });
            var r = "jpg",
                i = "eps",
                a = "JPEG",
                o = "png",
                s = "tiff",
                c = "mp3",
                u = "wav"
        },
        31905: function(e, t, n) {
            n.d(t, {
                Jv: function() {
                    return o
                },
                ST: function() {
                    return r
                },
                pG: function() {
                    return i
                },
                v6: function() {
                    return a
                }
            });
            var r = {
                    view: [],
                    license: [],
                    comp: [],
                    mediaTypeLicense: [],
                    mediaTypeComp: []
                },
                i = [{
                    containerWidth: 1920,
                    height: 300
                }, {
                    containerWidth: 1024,
                    height: 280
                }, {
                    containerWidth: 0,
                    height: 260
                }],
                a = "",
                o = 880
        },
        65537: function(e, t, n) {
            n.d(t, {
                IC: function() {
                    return r
                },
                tS: function() {
                    return i
                },
                xn: function() {
                    return a
                }
            });
            var r = "centimeters",
                i = "inches",
                a = "pixels"
        },
        80353: function(e, t, n) {
            n.d(t, {
                Dq: function() {
                    return s
                },
                Hn: function() {
                    return c
                },
                Uw: function() {
                    return i
                },
                ad: function() {
                    return o
                },
                qy: function() {
                    return r
                },
                vP: function() {
                    return a
                }
            });
            var r = "organization_admin",
                i = "editor",
                a = "owner",
                o = "viewer",
                s = "Remove",
                c = "none"
        },
        16642: function(e, t, n) {
            n.d(t, {
                FL: function() {
                    return c
                },
                H2: function() {
                    return a
                },
                Hf: function() {
                    return s
                },
                M8: function() {
                    return o
                },
                Rm: function() {
                    return i
                },
                iN: function() {
                    return u
                },
                ke: function() {
                    return r
                }
            });
            var r = "https://schema.org",
                i = {
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
                a = {
                    ORGANIZATION: i.ORGANIZATION.toLocaleLowerCase(),
                    WEB_SITE: i.WEB_SITE.toLocaleLowerCase(),
                    FAQPAGE: i.FAQPAGE.toLocaleLowerCase(),
                    HOWTO: i.HOWTO.toLocaleLowerCase()
                },
                o = "noindex",
                s = "noindex-nofollow",
                c = "canonicalize",
                u = "utm_source=schema&utm_medium=googleimages&utm_campaign=image"
        },
        55988: function(e, t, n) {
            n.d(t, {
                HV: function() {
                    return r
                },
                mC: function() {
                    return a
                },
                mh: function() {
                    return i
                }
            });
            var r = "sstk-org",
                i = "shutterstock-photo",
                a = "shutterstock-premier"
        },
        91644: function(e, t, n) {
            n.d(t, {
                KK: function() {
                    return g
                },
                Jj: function() {
                    return T
                },
                GA: function() {
                    return m
                },
                tU: function() {
                    return p
                },
                Hg: function() {
                    return f
                },
                c: function() {
                    return _
                },
                P1: function() {
                    return Z
                },
                Tw: function() {
                    return w
                },
                $6: function() {
                    return S
                }
            });
            var r = n(70865),
                i = n(96670),
                a = n(87394),
                o = n(50930),
                s = n(39232),
                c = n(3081),
                u = ["contributor_inactive", "contributor_opted_out", "MEDIA_NOT_AVAILABLE"],
                l = n(18505),
                d = n(26710),
                v = n(44297),
                f = function(e) {
                    var t = e.licenseName,
                        n = e.cartData,
                        r = e.asset;
                    return t ? !!(null == n ? void 0 : n.items.find(function(e) {
                        return e.id === (null == r ? void 0 : r.id) && e.licenseId === t
                    })) : !!(null == n ? void 0 : n.items.find(function(e) {
                        return e.id === (null == r ? void 0 : r.id)
                    }))
                },
                p = function(e) {
                    var t = e.asset;
                    return !e.unavailableAssets.find(function(e) {
                        return e.contentId === (0, v.OP)({
                            asset: t
                        }) && e.contentType === t.type
                    })
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.errors;
                    return (void 0 === t ? [] : t).some(function(e) {
                        return u.includes(e)
                    })
                },
                g = function(e) {
                    var t = e.cachedCart,
                        n = e.newItems,
                        a = (0, o.Z)((null == t ? void 0 : t.items) || []).concat((0, o.Z)(n));
                    return (0, i.Z)((0, r.Z)({}, t), {
                        items: a,
                        count: a.length
                    })
                },
                h = function(e) {
                    var t = e.item,
                        n = e.licensedAssets;
                    return (null == n ? void 0 : n.find(function(e) {
                        return e.contentId === String(t.id)
                    })) ? 0 : t.isUnlimited ? .1 : parseFloat(t.price)
                },
                y = function(e) {
                    var t = e.item1,
                        n = e.item2,
                        r = e.sortOrder,
                        i = e.licensedAssets,
                        a = h({
                            item: void 0 === t ? {} : t,
                            licensedAssets: i
                        }),
                        o = h({
                            item: void 0 === n ? {} : n,
                            licensedAssets: i
                        });
                    return r === l.sl ? a - o : o - a
                },
                b = function(e) {
                    var t = e.item1,
                        n = e.item2,
                        r = e.sortField,
                        i = void 0 === r ? "addedTime" : r;
                    return e.sortOrder === l.sl ? Number(new Date(n[i])) - Number(new Date(t[i])) : Number(new Date(t[i])) - Number(new Date(n[i]))
                },
                S = function(e) {
                    var t = e.primaryCart,
                        n = e.sortField,
                        r = e.sortOrder,
                        i = e.alreadyLicensedPrimaryAssets;
                    return t.sort(function(e, t) {
                        return n === c.TK.ADDED_TIME ? b({
                            item1: e,
                            item2: t,
                            sortField: n,
                            sortOrder: r
                        }) : y({
                            item1: e,
                            item2: t,
                            sortField: n,
                            sortOrder: r,
                            licensedAssets: i
                        })
                    })
                },
                w = function(e) {
                    var t, n = e.rolodexAddress,
                        r = (0, a.Z)((null === (t = n.streetLines) || void 0 === t ? void 0 : t.split("\n")) || [], 2),
                        i = r[0],
                        o = r[1],
                        s = n.locality,
                        c = n.postalCode,
                        u = n.region;
                    return {
                        country: n.country,
                        company: n.company,
                        city: s,
                        zip: c,
                        state: u,
                        address1: i,
                        address2: o
                    }
                },
                T = function(e) {
                    var t, n = e.billingEntity;
                    return (null == n ? void 0 : null === (t = n.rolodexAddresses) || void 0 === t ? void 0 : t.find(function(e) {
                        var t;
                        return "licensing" === e.addressType || (null === (t = e.usages) || void 0 === t ? void 0 : t.includes("licensing"))
                    })) || {}
                },
                I = function(e) {
                    var t = e.asset,
                        n = e.alreadyLicensedAssets;
                    return (null == t ? void 0 : t.price) === s.q9 || (0, d.te)({
                        alreadyLicensedAssets: n,
                        asset: t
                    })
                },
                A = function(e) {
                    var t = e.acc,
                        n = e.asset;
                    return I({
                        asset: n,
                        alreadyLicensedAssets: e.alreadyLicensedAssets
                    }) ? t : t + parseFloat(null == n ? void 0 : n.price)
                },
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t ? e.filter(function(e) {
                        return !e.isUnavailableAsset
                    }).reduce(function(e, n) {
                        return A({
                            acc: e,
                            asset: n,
                            alreadyLicensedAssets: t
                        })
                    }, 0) : 0
                },
                Z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return e.every(function(e) {
                        return e.price === s.q9
                    }) ? s.q9 : _(e, t)
                }
        },
        15111: function(e, t, n) {
            n.d(t, {
                w4: function() {
                    return S
                },
                wZ: function() {
                    return _
                },
                U0: function() {
                    return I
                },
                Nb: function() {
                    return m
                },
                fg: function() {
                    return g
                },
                E4: function() {
                    return A
                },
                Ak: function() {
                    return h
                },
                $m: function() {
                    return T
                },
                WP: function() {
                    return w
                }
            });
            var r, i = n(70865),
                a = n(96670),
                o = n(87394),
                s = n(47842),
                c = n(39232),
                u = n(32456),
                l = (r = {}, (0, s.Z)(r, c.k4, u.Zk), (0, s.Z)(r, c.Y_, u.Zk), (0, s.Z)(r, c.xF, u.Zi), (0, s.Z)(r, c.pX, u.K2), (0, s.Z)(r, c.FM, u.K2), r),
                d = n(80353),
                v = n(29292),
                f = n(37546),
                p = n(44297),
                m = function(e) {
                    return "Untitled" === e
                },
                g = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).items;
                    return e && 0 === e.length
                },
                h = function(e) {
                    var t = !(null == e ? void 0 : e.role) && !(null == e ? void 0 : e.isPublic);
                    return (null == e ? void 0 : e.role) === d.ad || t
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = (0, o.Z)((void 0 === t ? "" : t).split("-"), 3),
                        r = n[1];
                    return {
                        id: n[2],
                        type: r === c.j0 ? c.xF : r,
                        aspect: 1,
                        src: "",
                        previewImageUrl: ""
                    }
                },
                b = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.metadata,
                        a = void 0 === r ? {} : r,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (a.tracking) {
                        try {
                            e = (0, v.Be)({
                                trackingId: null === (t = JSON.parse(a.tracking)) || void 0 === t ? void 0 : t.search
                            })
                        } catch (t) {
                            e = (0, v.Be)({
                                trackingId: a.tracking
                            })
                        }
                        return (0, i.Z)({
                            search_context: e
                        }, o)
                    }
                    return o
                },
                S = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (null === (e = t.mediaItem) || void 0 === e ? void 0 : e.id) ? (0, f.Sw)(t.mediaItem) : n && y(t)
                },
                w = function(e, t) {
                    return e ? e.reduce(function(e, n) {
                        var r = S(n, t);
                        return e.collectionItems.push((0, a.Z)((0, i.Z)({}, n), {
                            mediaItem: (0, a.Z)((0, i.Z)({}, r), {
                                meta: b(n, null == n ? void 0 : n.meta)
                            })
                        })), r && e.mediaItems.push((0, a.Z)((0, i.Z)({}, r), {
                            meta: b(n, null == r ? void 0 : r.meta)
                        })), e
                    }, {
                        collectionItems: [],
                        mediaItems: []
                    }) : {
                        collectionItems: e
                    }
                },
                T = function(e) {
                    var t = e.assetType,
                        n = e.t,
                        r = e.totalItemCount,
                        i = t === c.gP,
                        a = i ? "ent:collection_editorial_total_single" : "feature-collections:number_".concat(c.d_[t], "_single"),
                        o = i ? "ent:collection_editorial_total_plural" : "feature-collections:number_".concat(c.d_[t], "_plural");
                    return n(1 === r ? a : o, {
                        NUM_TRACKS: r
                    })
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return !!e.find(function(e) {
                        return e.type === u.A8
                    })
                },
                A = function(e) {
                    var t = e.assets,
                        n = void 0 === t ? [] : t;
                    switch (e.assetType) {
                        case c.xF:
                        case c.j0:
                            return n.some(function(e) {
                                return (0, p.O)({
                                    track: e
                                })
                            });
                        case c.k4:
                            return n.some(function(e) {
                                return (0, p.PD)(e)
                            });
                        default:
                            return !1
                    }
                },
                _ = function(e) {
                    var t = e.assetType;
                    return e.isBrandSstk ? l[t] : u.sE[t]
                }
        },
        83451: function(e, t, n) {
            n.d(t, {
                Oo: function() {
                    return U
                },
                rB: function() {
                    return Z
                }
            });
            var r, i, a, o, s = n(98788),
                c = n(70865),
                u = n(87394),
                l = n(5163),
                d = n(81740),
                v = n(19522),
                f = n(97258),
                p = n(39232),
                m = n(85330),
                g = n(84833),
                h = n(94054),
                y = n(67661),
                b = n(9009),
                S = n(81232),
                w = n(37546),
                T = n(44297),
                I = n(18411),
                A = n(61765),
                _ = function(e) {
                    var t, n, r = e.asset,
                        i = r.angle,
                        a = r.selectedFormatType,
                        o = r.selectedShadowsOption;
                    return (0, c.Z)({
                        angle: i || (null == r ? void 0 : null === (t = r.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.angle) || "H01",
                        content_size: f.JF
                    }, a === v.yI && {
                        include_shadows: "on" === o
                    })
                },
                Z = function(e) {
                    var t, n, r = e.asset;
                    return (null == r ? void 0 : null === (t = r.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.sizes) || r.sizes
                },
                C = (r = (0, s.Z)(function(e) {
                    var t, n, r, i;
                    return (0, l.__generator)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!((null == (t = e.asset) ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.cart) && !t.metadata.cart.sizes)) return [3, 2];
                                return r = (0, T.so)(t), i = {
                                    id: t.id
                                }, r && (i.channel = m.$S, i.content_provider = g._e), [4, y.uS.get((0, d.om)({
                                    queryParams: i
                                }).formattedUrl).then(function(e) {
                                    var t = e.data;
                                    return (0, b.O)(t)
                                })];
                            case 1:
                                return [2, a.sent().sizes];
                            case 2:
                                return [2, Z({
                                    asset: t
                                })]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                k = function(e) {
                    var t, n, r, i, a = e.asset,
                        o = e.is3dObject,
                        s = e.isRexEditorial,
                        c = e.selectedAssetSize;
                    return a.licenseAsJpeg || (null === (t = a.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.licenseAsJpeg) ? "jpeg" : o && a.selectedFormatType ? "3dByFormat" : o && (null === (r = a.metadata) || void 0 === r ? void 0 : null === (i = r.cart) || void 0 === i ? void 0 : i.size) ? "3dBySize" : I.Bg[c] ? "comped" : s ? "rexEditorial" : "default"
                },
                R = function(e) {
                    var t, n, r, i, a = e.asset,
                        o = e.licenseStrategy,
                        s = e.selectedAssetSize,
                        c = e.sizesToUseArray,
                        l = function() {
                            switch (o) {
                                case "jpeg":
                                    return c.find(function(e) {
                                        return e.format === v._3
                                    });
                                case "3dByFormat":
                                    return c.find(function(e) {
                                        return e.format === a.selectedFormatType
                                    });
                                case "3dBySize":
                                    return;
                                case "comped":
                                    return (0, w.AR)({
                                        sizes: c,
                                        compSizeImage: s
                                    });
                                default:
                                    return (0, w.Nf)(c)
                            }
                        }(),
                        d = (null == l ? void 0 : l.format) || (null === (t = a.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.format);
                    switch (o) {
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
                                size: null == a ? void 0 : null === (r = a.metadata) || void 0 === r ? void 0 : null === (i = r.cart) || void 0 === i ? void 0 : i.size,
                                format: d
                            };
                        default:
                            return {
                                size: I.nd[(0, S.z)(l.name)].downloadName,
                                format: d
                            }
                    }
                },
                O = function(e) {
                    var t, n, r, i, a = e.selectedAssetSize,
                        o = e.asset,
                        s = Z({
                            asset: o
                        }),
                        u = (0, T.EK)(o),
                        l = (0, T.f8)(o),
                        d = l ? _({
                            asset: o,
                            selectedAssetSize: a,
                            sizesToUse: s
                        }) : {};
                    if (!s && (null == o ? void 0 : null === (t = o.metadata) || void 0 === t ? void 0 : null === (n = t.cart) || void 0 === n ? void 0 : n.size) && (null == o ? void 0 : null === (r = o.metadata) || void 0 === r ? void 0 : null === (i = r.cart) || void 0 === i ? void 0 : i.format)) return (0, c.Z)({
                        content_size: u ? f.vD : o.metadata.cart.size,
                        content_format: o.metadata.cart.format
                    }, d);
                    var v = Object.values(s),
                        p = k({
                            asset: o,
                            is3dObject: l,
                            isRexEditorial: u,
                            selectedAssetSize: a
                        }),
                        m = R({
                            asset: o,
                            licenseStrategy: p,
                            selectedAssetSize: a,
                            sizesToUseArray: v
                        }),
                        g = m.size,
                        h = m.format;
                    return (0, c.Z)({
                        content_size: g,
                        content_format: h
                    }, d)
                },
                P = function(e) {
                    var t = e.map[e.licenseName];
                    return t === f.T0 ? f.qY : t
                },
                L = function(e) {
                    var t = e.asset,
                        n = e.licenseName,
                        r = e.isVideoComp,
                        i = e.selectedAssetSize,
                        a = e.sizes,
                        o = (0, T.EK)(t),
                        s = (0, T.cL)(t),
                        c = (0, T.$Q)({
                            sizes: Object.values(a)
                        });
                    return !r && c ? P({
                        map: I.Q1,
                        licenseName: n
                    }) : r || n === h.f12 || o || s ? !i || o || s ? (0, w.mF)(a) : I.kR[i] : P({
                        map: I.kR,
                        licenseName: n
                    })
                },
                E = (i = (0, s.Z)(function(e) {
                    var t, n, r, i, a, o, s, c;
                    return (0, l.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return t = e.asset, n = e.licenseName, r = e.isVideoComp, i = e.selectedAssetSize, [4, C({
                                    asset: t
                                })];
                            case 1:
                                return o = L({
                                    asset: t,
                                    licenseName: n,
                                    isVideoComp: r,
                                    selectedAssetSize: i,
                                    sizes: a = u.sent()
                                }), s = (0, T.EK)(t), c = Object.values(a).find(function(e) {
                                    var t = e.resolution;
                                    return I.wb[null == t ? void 0 : t.toLowerCase()] === o
                                }), [2, {
                                    content_size: s ? f.vD : o,
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
                        content_format: n === v.iH ? v.iH : v._Y
                    }
                },
                x = (a = (0, s.Z)(function(e) {
                    var t, n, r, i, a, o;
                    return (0, l.__generator)(this, function(s) {
                        switch (s.label) {
                            case 0:
                                switch (t = e.asset, n = e.licenseName, r = e.isVideoComp, i = e.selectedAssetSize, a = e.format, o = (0, A.qw)({
                                    asset: t
                                }), (0, T.so)(t) && (o = p.A7), o) {
                                    case p.pX:
                                    case p.A7:
                                        return [3, 1];
                                    case p.j0:
                                        return [3, 3];
                                    case p.tn:
                                        return [3, 4]
                                }
                                return [3, 5];
                            case 1:
                                return [4, E({
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
                                    content_format: p.j0
                                }];
                            case 4:
                                return [2, N({
                                    selectedAssetSize: i,
                                    format: a
                                })];
                            case 5:
                                return [2, O({
                                    selectedAssetSize: i,
                                    asset: t
                                })];
                            case 6:
                                return [2]
                        }
                    })
                }), function(e) {
                    return a.apply(this, arguments)
                }),
                U = (o = (0, s.Z)(function(e) {
                    var t, n, r, i, a, o, s, u;
                    return (0, l.__generator)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return t = e.licenseName, n = e.selectedAssetSize, r = e.asset, i = e.isVideoComp, a = e.format, o = (0, A.qw)({
                                    asset: r
                                }), u = [{
                                    content_id: s = r.id.toString(),
                                    content_type: (0, A.JD)({
                                        assetType: o,
                                        assetId: s
                                    })
                                }], [4, x({
                                    asset: r,
                                    licenseName: t,
                                    isVideoComp: i,
                                    selectedAssetSize: n,
                                    format: a
                                })];
                            case 1:
                                return [2, c.Z.apply(void 0, u.concat([l.sent()]))]
                        }
                    })
                }), function(e) {
                    return o.apply(this, arguments)
                })
        },
        61765: function(e, t, n) {
            n.d(t, {
                Fy: function() {
                    return u
                },
                JD: function() {
                    return o
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
                a = n(44297),
                o = function(e) {
                    var t = e.assetId,
                        n = e.assetType;
                    if ((0, a.EK)({
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
                    if ((0, a.EK)(n)) return r.gP;
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
                    if ((0, a.N3)(t)) return r.gP;
                    if ((0, a.so)(t)) return r.cF;
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
                    if ((0, a.N3)(t)) return r.nX;
                    if ((0, a.so)(t)) return r.A7;
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
        26710: function(e, t, n) {
            n.d(t, {
                Ax: function() {
                    return b
                },
                H8: function() {
                    return f
                },
                Hl: function() {
                    return S
                },
                NV: function() {
                    return v
                },
                Tp: function() {
                    return w
                },
                aW: function() {
                    return T
                },
                iI: function() {
                    return g
                },
                j2: function() {
                    return h
                },
                lW: function() {
                    return y
                },
                te: function() {
                    return p
                },
                uP: function() {
                    return d
                }
            });
            var r = n(70865),
                i = n(96670),
                a = n(50930),
                o = n(19522),
                s = n(39232),
                c = n(94054),
                u = n(44297),
                l = n(61765),
                d = function(e) {
                    var t, n, r = e.license,
                        i = e.existingAssetsLicenses;
                    if (!i) return !((null == r ? void 0 : r.licenseName) && c.b53.includes(null == r ? void 0 : r.licenseName)) && i;
                    var a = (0, l.Fy)({
                        asset: r.mediaItem
                    });
                    return !!(null == i ? void 0 : null === (n = i[null === (t = r.mediaItem) || void 0 === t ? void 0 : t.id]) || void 0 === n ? void 0 : n.some(function(e) {
                        return e !== c._rW[a]
                    }))
                },
                v = function(e) {
                    var t = e.subscriptions;
                    return (void 0 === t ? [] : t).some(function(e) {
                        var t = e.redeemableFor;
                        return c.SkX.some(function(e) {
                            return e === t
                        })
                    }) ? c.s5m : c.Hv9
                },
                f = function(e) {
                    return e.reduce(function(e, t) {
                        var n = t.licenseId;
                        return e.includes(n) || e.push(n), e
                    }, [])
                },
                p = function(e) {
                    var t = e.alreadyLicensedAssets,
                        n = e.asset;
                    return !!t.find(function(e) {
                        var t = e.contentId,
                            r = e.contentType,
                            i = e.licenseId,
                            a = n.type === s.k4 ? s.pV : n.type;
                        return t === n.id && r === a && i === n.licenseId
                    })
                },
                m = function(e) {
                    var t = e.licenseType,
                        n = e.existingLicenses,
                        r = e.asset,
                        i = e.isSelect,
                        o = ["footage_".concat(t, "_sd"), "footage_".concat(t, "_hd")],
                        s = (0, a.Z)(o).concat(["footage_".concat(t, "_lowres")]);
                    return (void 0 !== i && i && o.push("footage_".concat(t, "_4k")), r.licenseId === "footage_".concat(t, "_sd")) ? null == n ? void 0 : n.some(function(e) {
                        return !!o.includes(e)
                    }) : r.licenseId === "footage_".concat(t, "_lowres") && (null == n ? void 0 : n.some(function(e) {
                        return !!s.includes(e)
                    }))
                },
                g = function(e) {
                    var t, n = e.existingLicenses,
                        r = e.asset;
                    switch (r.type) {
                        case s.FM:
                        case s.pX:
                            if (c.oPg.some(function(e) {
                                    return m({
                                        asset: r,
                                        licenseType: e,
                                        existingLicenses: n
                                    })
                                })) return !0;
                            return !!(null == n ? void 0 : n.includes(r.licenseId));
                        case s.k4:
                        default:
                            return !!(null == n ? void 0 : n.includes(null === (t = r.licenseId) || void 0 === t ? void 0 : t.replace(/_unlimited/, "")))
                    }
                },
                h = function(e) {
                    var t = e.error,
                        n = e.t,
                        r = (void 0 === t ? {} : t).meta,
                        i = void 0 === r ? {} : r;
                    if ((null == i ? void 0 : i.exception_type) === c.JW1) {
                        var a = i.errors.slice(-1).pop().value,
                            o = "comp_limit" === a.name;
                        return n("P1M" === a.period_length ? o ? "ent:monthly_comp_limit_reached" : "ent:monthly_licensing_limit_reached" : o ? "ent:daily_comp_limit_reached" : "ent:daily_licensing_limit_reached")
                    }
                    return n("ent:license_now_error_message")
                },
                y = function(e) {
                    var t = e.error,
                        n = void 0 === t ? {} : t,
                        r = e.user,
                        i = n.title,
                        o = n.detail,
                        s = n.message,
                        u = n.name,
                        l = n.meta,
                        d = void 0 === l ? {} : l,
                        v = (void 0 === r ? {} : r) || {},
                        f = v.id,
                        p = v.username,
                        m = v.organizationId,
                        g = null == d ? void 0 : d.exception_type;
                    switch (g) {
                        case c.JW1:
                            var h, y, b = null === (y = d.errors) || void 0 === y ? void 0 : y.map(function(e) {
                                var t = e.value;
                                return null == t ? void 0 : t.name
                            });
                            h = "".concat(i, ": ").concat(b.join(","));
                            break;
                        case c.vFJ:
                            var S, w = null === (S = d.errors) || void 0 === S ? void 0 : S.map(function(e) {
                                var t = e.code,
                                    n = e.value;
                                return "".concat(t, ": ").concat(null == n ? void 0 : n.content_type, " - ").concat(null == n ? void 0 : n.content_id, " - ").concat(null == n ? void 0 : n.content_size)
                            });
                            h = "".concat(i, ": ").concat(w.join(","));
                            break;
                        default:
                            h = [g, i, o, s, u].reduce(function(e, t) {
                                return t && !e.includes(t) ? (0, a.Z)(e).concat([t]) : e
                            }, []).join(", ")
                    }
                    return {
                        organizationId: m,
                        userId: f,
                        username: p,
                        errorSummary: h,
                        error: n
                    }
                },
                b = function(e) {
                    var t = e.organizationId;
                    return "organization-".concat(t)
                },
                S = function(e) {
                    var t = e.user,
                        n = e.isItemLoaded,
                        r = e.labels;
                    return "" !== t ? t : n ? r.notAwailable : ""
                },
                w = function(e) {
                    var t = e.isEligibilityLoading,
                        n = e.existingCurrentAssetLiceses;
                    return t ? void 0 : n || []
                },
                T = function(e) {
                    var t = e.asset,
                        n = e.selectedLicenseId,
                        a = e.activeFormatType,
                        s = e.selectedShadowsOption;
                    return (0, r.Z)((0, i.Z)((0, r.Z)({}, t), {
                        itemType: t.itemType || (0, l.rw)({
                            asset: t
                        }),
                        licenseId: n
                    }), a === o._3 && {
                        licenseAsJpeg: !0
                    }, (0, u.f8)(t) ? {
                        selectedFormatType: a,
                        selectedShadowsOption: s
                    } : {})
                }
        },
        80104: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return o
                }
            });
            var r = n(47842),
                i = n(70865),
                a = n(7297),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.trackingId,
                        n = e.headers,
                        o = void 0 === n ? {} : n;
                    if (t || Object.keys(o).length) return {
                        headers: (0, i.Z)({}, o, t && (0, r.Z)({}, a.HC, t))
                    }
                }
        },
        97021: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var r = n(44297),
                i = (0, n(5967).j)().shutterstockBaseUrl;

            function a(e) {
                var t = e.asset,
                    n = e.baseUrl;
                if (!(!t.id || (0, r.EK)(t))) return "".concat(null != n ? n : i, "/video/embed/").concat(t.id)
            }
        },
        38849: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return a
                }
            });
            var r = n(39232),
                i = n(44297),
                a = function(e) {
                    var t = e.assets,
                        n = void 0 === t ? [] : t;
                    return (0, i.N3)(null == n ? void 0 : n[0]) ? r.nX : (0, i.so)(null == n ? void 0 : n[0]) ? r.A7 : (0, i.vV)(null == n ? void 0 : n[0]) ? r.ox : (0, i.Tp)(null == n ? void 0 : n[0])
                }
        },
        86358: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var r = n(39232),
                i = n(23583),
                a = function(e) {
                    var t = e.assetType,
                        n = e.contentTier,
                        a = void 0 === n ? 0 : n,
                        o = e.subscriptions;
                    if (!o || !t) return {};
                    switch (t) {
                        case r.nX:
                            return {
                                compSubscriptions: o.editorialImageCompSubscriptions,
                                subscriptions: (0, i.c)({
                                    assetType: t,
                                    subscriptions: o.editorialImageSubscriptions,
                                    contentTier: a
                                })
                            };
                        case r.A7:
                            return {
                                compSubscriptions: o.editorialVideoCompSubscriptions,
                                subscriptions: (0, i.c)({
                                    assetType: t,
                                    subscriptions: o.editorialVideoSubscriptions,
                                    contentTier: a
                                })
                            };
                        case r.pX:
                            return {
                                compSubscriptions: o.videoCompSubscriptions,
                                subscriptions: (0, i.c)({
                                    assetType: t,
                                    subscriptions: o.videoSubscriptions,
                                    contentTier: a
                                })
                            };
                        case r.xF:
                        case r.j0:
                            return {
                                compSubscriptions: o.musicCompSubscriptions,
                                subscriptions: (0, i.c)({
                                    assetType: t,
                                    subscriptions: o.musicSubscriptions,
                                    contentTier: a
                                })
                            };
                        case r.tn:
                            return {
                                compSubscriptions: o.sfxCompSubscriptions,
                                subscriptions: (0, i.c)({
                                    assetType: t,
                                    subscriptions: o.sfxSubscriptions,
                                    contentTier: a
                                })
                            };
                        case r.k4:
                        default:
                            return {
                                compSubscriptions: o.imageCompSubscriptions,
                                subscriptions: (0, i.c)({
                                    assetType: t,
                                    subscriptions: o.imageSubscriptions,
                                    contentTier: a
                                })
                            }
                    }
                }
        },
        23583: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return c
                }
            });
            var r = n(50930),
                i = n(24861),
                a = n(51455),
                o = function(e) {
                    var t = e.item;
                    return e.uniqueSubsAcc.find(function(e) {
                        var n = e.redeemableFor,
                            r = e.name;
                        return t.redeemableFor === n || t.name && t.name === r
                    })
                },
                s = function(e) {
                    var t = e.subscriptionToUse,
                        n = e.licenseName,
                        r = null == t ? void 0 : t.currentLicenses;
                    return !!r && r.length && !(null == r ? void 0 : r.find(function(e) {
                        return e.redeemableFor === (null == n ? void 0 : n.replace("/_unlimited/", ""))
                    }))
                },
                c = function(e) {
                    var t, n = e.subscriptions,
                        c = void 0 === n ? [] : n,
                        u = e.contentTier,
                        l = e.assetType;
                    return (t = c.reduce(function(e, t) {
                        var n = t.redeemableFor || t.name,
                            i = (0, a.$)({
                                subscriptions: c,
                                licenseName: n,
                                contentTier: u,
                                assetType: l
                            });
                        return !i || s({
                            subscriptionToUse: i,
                            licenseName: n
                        }) || o({
                            item: t,
                            uniqueSubsAcc: e
                        }) ? e : (0, r.Z)(e).concat([i])
                    }, [])).every(function(e) {
                        var t = e.activityTracking,
                            n = e.creditType,
                            r = e.priceAsAbsolute;
                        return t === i.nm && n === i.vh && !!r
                    }) ? t.sort(function(e, t) {
                        var n = e.priceAsAbsolute,
                            r = (void 0 === n ? {} : n).price,
                            i = t.priceAsAbsolute,
                            a = (void 0 === i ? {} : i).price;
                        return (void 0 === a ? 0 : a) - (void 0 === r ? 0 : r)
                    }) : t.sort(function(e, t) {
                        return t.creditPrice - e.creditPrice
                    })
                }
        },
        57048: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return s
                }
            });
            var r = n(66358),
                i = n(29292),
                a = n(776),
                o = n(2784),
                s = function() {
                    var e = (0, a.yh)().analytics;
                    return (0, o.useCallback)(function(t) {
                        var n = t.eventLabel;
                        e.inlineClick((0, i.SO)({
                            trackAnalytics: {
                                label: void 0 === n ? "" : n,
                                section: r._Ad
                            }
                        }))
                    }, [e])
                }
        },
        98408: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return d
                }
            });
            var r = n(70865),
                i = n(96670),
                a = n(87394),
                o = n(39232),
                s = n(29292),
                c = n(68533),
                u = n(776),
                l = n(2784),
                d = function() {
                    var e = (0, u.yh)().analytics,
                        t = (0, c.Y)().getSearchContext,
                        n = (0, l.useCallback)(function(t) {
                            var n = t.cartId,
                                r = (t.items || []).map(function(e, t) {
                                    return (0, s.zm)({
                                        asset: e,
                                        cartId: n,
                                        index: t
                                    })
                                }),
                                i = r.reduce(function(e, t) {
                                    return {
                                        totalPrice: e.totalPrice + Number(t.price),
                                        toBeBilled: e.toBeBilled + 1
                                    }
                                }, {
                                    totalPrice: 0,
                                    toBeBilled: 0
                                });
                            e.cartViewed({
                                products: r,
                                cartId: n,
                                cartTotal: Math.round(100 * i.totalPrice) / 100,
                                numItemsBilledToCard: i.toBeBilled,
                                shouldCheckout: i.totalPrice > 0,
                                shouldDownload: r.length > 0 && 0 === i.totalPrice
                            })
                        }, [e]);
                    return {
                        productAddedAnalyticsEvent: (0, l.useCallback)(function(n) {
                            var r = n.cart,
                                i = n.eventLabel,
                                a = n.gridItems,
                                o = n.items,
                                c = n.licenseId,
                                u = n.licensePrice,
                                l = n.listId,
                                d = n.pageSection;
                            e.productAdded({
                                products: o.map(function(e) {
                                    return (0, s.bR)({
                                        asset: e,
                                        cartData: r,
                                        getSearchContext: t,
                                        gridItems: a,
                                        licenseId: c,
                                        licensePrice: u,
                                        pageSection: d
                                    })
                                }),
                                eventLabel: i,
                                list_id: null != l ? l : ""
                            })
                        }, [e, t]),
                        productRemovedAnalyticsEvent: (0, l.useCallback)(function(n) {
                            var c = n.cart,
                                u = n.eventLabel,
                                l = n.gridItems,
                                d = n.items,
                                v = n.listId,
                                f = n.matchingCartItem,
                                p = n.pageSection;
                            if (f) {
                                var m = (0, a.Z)(d, 1)[0];
                                e.productRemoved((0, i.Z)((0, r.Z)({}, (0, s.bR)({
                                    asset: m,
                                    cartData: c,
                                    getSearchContext: t,
                                    gridItems: l,
                                    pageSection: p
                                })), {
                                    price: f.price === o.q9 ? 0 : Number(f.price),
                                    variant: f.licenseId,
                                    eventLabel: u,
                                    list_id: null != v ? v : ""
                                }))
                            } else e.productRemoved({
                                products: d.map(function(e) {
                                    return (0, s.bR)({
                                        asset: e,
                                        cartData: c,
                                        getSearchContext: t,
                                        gridItems: l,
                                        pageSection: p
                                    })
                                }),
                                eventLabel: u,
                                list_id: null != v ? v : ""
                            })
                        }, [e, t]),
                        cartViewedAnalyticsEvent: n
                    }
                }
        },
        30337: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return u
                }
            });
            var r = n(70865),
                i = n(66358),
                a = n(65532),
                o = n(29292),
                s = n(776),
                c = n(2784),
                u = function() {
                    var e = (0, s.yh)().analytics,
                        t = (0, a.PE)().locale;
                    return (0, c.useCallback)(function(n) {
                        var a = n.assets,
                            s = void 0 === a ? [] : a,
                            c = n.audioContext,
                            u = n.eventLabel,
                            l = n.licenseId,
                            d = n.isRedownload,
                            v = n.isQuickDownload,
                            f = n.isPaid,
                            p = n.isComp,
                            m = n.pageSection,
                            g = n.listId,
                            h = u || p && i.Vp1 || void 0;
                        e.productDownloaded((0, r.Z)({
                            products: s.map(function(e) {
                                return (0, o.bR)({
                                    asset: e,
                                    shouldGetSearchContextFromAsset: !0,
                                    licenseId: l,
                                    pageSection: m
                                })
                            }),
                            download_context: (0, o.OB)({
                                asset: s[0],
                                isComp: p,
                                isPaid: f,
                                isQuickDownload: v,
                                isRedownload: d,
                                language: t
                            }),
                            eventLabel: h,
                            list_id: null != g ? g : ""
                        }, c && {
                            audio_context: (0, r.Z)({}, c)
                        }))
                    }, [e, t])
                }
        },
        80578: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return u
                }
            });
            var r = n(70865),
                i = n(29292),
                a = n(44297),
                o = n(776),
                s = n(2784),
                c = n(68533),
                u = function() {
                    var e = (0, o.yh)().analytics,
                        t = (0, c.Y)().getSearchContext;
                    return (0, s.useCallback)(function(n) {
                        var o = n.asset,
                            s = n.eventLabel,
                            c = n.gridItems,
                            u = n.isPreview,
                            l = n.listId,
                            d = n.pageSection,
                            v = (0, i.qI)(o),
                            f = (0, i.f_)(o),
                            p = (0, i.Rz)(o);
                        e.productViewed((0, r.Z)({
                            eventLabel: s,
                            list_id: null != l ? l : "",
                            page_section: d,
                            asset_type: (0, a.ZZ)(o),
                            category: (0, i.CP)(o),
                            channels: (0, i.Ky)(o),
                            is_preview: u,
                            name: (0, i.LJ)(o),
                            product_id: v,
                            search_context: t(o),
                            sku: v
                        }, c && (null == c ? void 0 : c.length) > 1 ? (0, i.mq)({
                            gridItems: c,
                            item: o
                        }) : {}, f && {
                            brand: f
                        }, p && {
                            product_line: p
                        }))
                    }, [e, t])
                }
        },
        68533: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return u
                }
            });
            var r = n(58272),
                i = n(29292),
                a = n(9823),
                o = n(3661),
                s = n(21805),
                c = n(2784),
                u = function() {
                    var e = (0, a.D)().isBrandSstk;
                    return {
                        setSearchContext: (0, c.useCallback)(function(t) {
                            var n = t.trackingId,
                                i = t.term;
                            if (n) {
                                if ((0, o.H7)() === n) return;
                                (0, o.tc)(n), (0, o.Cl)(i), e && s.Z.set(r.d6, n, {
                                    expires: r.Dy,
                                    sameSite: "strict"
                                })
                            }
                        }, [e]),
                        getSearchContext: (0, c.useCallback)(function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.meta,
                                r = (0, i.lt)({
                                    asset: t
                                }) || (0, o.H7)();
                            return (0, i.Be)({
                                trackingId: (null == r ? void 0 : r.uuid) || r,
                                searchTerm: (null == n ? void 0 : n.query) || (null == n ? void 0 : null === (e = n.search_context) || void 0 === e ? void 0 : e.search_term) || (0, o.He)()
                            })
                        }, []),
                        getSearchContextFromAssets: (0, c.useCallback)(function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                n = (null == t ? void 0 : t[0]) || t,
                                r = n.meta,
                                a = (0, i.lt)({
                                    asset: n
                                }) || (0, o.H7)();
                            return (0, i.Be)({
                                trackingId: a,
                                searchTerm: (null == r ? void 0 : r.query) || (null == r ? void 0 : null === (e = r.search_context) || void 0 === e ? void 0 : e.search_term) || (0, o.He)()
                            })
                        }, [])
                    }
                }
        },
        43012: function(e, t, n) {
            n.d(t, {
                GB: function() {
                    return c
                }
            });
            var r = n(75),
                i = n(59877),
                a = n(2784),
                o = n(9823),
                s = "ent:license_",
                c = function() {
                    var e = (0, i.$G)(r.PRh).t,
                        t = (0, o.D)().isBrandSstk;
                    return (0, a.useCallback)(function() {
                        var n, r, i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = a.licenseName,
                            c = a.subscription;
                        return (o && (n = "".concat(s).concat(null == o ? void 0 : o.replace(/_unlimited/, ""))), c && (t && (n = "".concat("ecomm:license_").concat(null === (r = c.product) || void 0 === r ? void 0 : r.name)), !t && c.redeemableFor && (n = "".concat(s).concat(null === (i = c.redeemableFor) || void 0 === i ? void 0 : i.replace(/_unlimited/, "")))), n) ? e(n) : ""
                    }, [t, e])
                }
        },
        41273: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return l
                }
            });
            var r = n(87394),
                i = n(38419),
                a = n(9823),
                o = n(43110),
                s = n(32780),
                c = n(5632),
                u = n(2784),
                l = function() {
                    var e = (0, a.D)().isBrandSstk,
                        t = (0, c.useRouter)(),
                        n = (0, o.B)(),
                        l = (0, s.j)({
                            isLoggedInUser: n,
                            isBrandSstk: e
                        });
                    return (0, u.useMemo)(function() {
                        var n = (0, r.Z)(l, 1)[0];
                        return e ? (0, i.DW)({
                            language: t.locale,
                            relativePath: n
                        }) : n
                    }, [l, e, t])
                }
        },
        93181: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return u
                }
            });
            var r = n(70865),
                i = n(96670),
                a = n(9823),
                o = n(5632),
                s = n(2784),
                c = n(41273),
                u = function() {
                    var e = (0, c.k)(),
                        t = (0, a.D)().isBrandSstk,
                        n = (0, o.useRouter)();
                    return (0, s.useCallback)(function() {
                        if (t) {
                            var a, o;
                            null === (a = window.NREUM) || void 0 === a || null === (o = a.addPageAction) || void 0 === o || o.call(a, "UP3-1623 assign useCartRedirect cartHref to href", (0, i.Z)((0, r.Z)({}, window.location || {}), {
                                cartHref: e,
                                isBrandSstk: t
                            })), window.location.href = e
                        } else n.push(e)
                    }, [e, t, n])
                }
        },
        31666: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return d
                },
                t: function() {
                    return l
                }
            });
            var r = n(87394),
                i = n(58370),
                a = n(27764),
                o = n(5632),
                s = /\/search/,
                c = (0, r.Z)((0, i.Zz)(), 1)[0],
                u = (0, r.Z)((0, i.ii)(), 1)[0],
                l = function() {
                    var e = (0, o.useRouter)().asPath,
                        t = [c, u].some(function(t) {
                            return null == e ? void 0 : e.includes(t)
                        });
                    return s.test(e) && !t
                },
                d = function() {
                    var e = (0, o.useRouter)(),
                        t = e.asPath,
                        n = e.query;
                    return {
                        assetType: (0, a.qw)(t),
                        searchTerm: n.term || ""
                    }
                }
        },
        58898: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return o
                }
            });
            var r = n(87394),
                i = n(36221),
                a = n(2784),
                o = function(e) {
                    var t = (0, r.Z)((0, a.useState)(!1), 2),
                        n = t[0],
                        o = t[1],
                        s = (0, r.Z)((0, a.useState)(null), 2),
                        c = s[0],
                        u = s[1],
                        l = "".concat(i.C8, ":").concat(i.sR).concat((null == e ? void 0 : e.preset) ? ":".concat(e.preset) : ""),
                        d = "".concat(i.jK, ":").concat(i.sR).concat((null == e ? void 0 : e.preset) ? ":".concat(e.preset) : ""),
                        v = (0, a.useCallback)(function(e) {
                            var t = e.newValue,
                                n = e.key;
                            t === window.location.origin && (n === l || n === d) && (o(!0), u(n === d))
                        }, [o, l, d]),
                        f = (0, a.useCallback)(function(e) {
                            var t = e.origin,
                                n = e.data;
                            t === window.location.origin && (n === l || n === d) && (o(!0), u(n === d))
                        }, [o, l, d]);
                    return (0, a.useEffect)(function() {
                        return window.addEventListener("storage", v), window.addEventListener("message", f),
                            function() {
                                window.removeEventListener("storage", v), window.removeEventListener("message", f)
                            }
                    }, [v, f]), {
                        isAuthSuccess: n,
                        isNewUser: c
                    }
                }
        },
        52309: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return i
                }
            });
            var r = n(2784),
                i = function(e) {
                    var t = (0, r.useRef)(!1);
                    return !t.current && e && (t.current = !0), t.current
                }
        },
        97024: function(e, t, n) {
            n.d(t, {
                JI: function() {
                    return v
                },
                MJ: function() {
                    return l
                },
                Wo: function() {
                    return c
                },
                Ws: function() {
                    return p
                },
                a$: function() {
                    return u
                },
                jm: function() {
                    return d
                }
            });
            var r = n(39232),
                i = n(18505),
                a = n(21770),
                o = n(27764),
                s = n(5632),
                c = function() {
                    var e = (0, s.useRouter)().query[i.jS];
                    return Number(void 0 === e ? 1 : e)
                },
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.defaultPageSize,
                        n = void 0 === t ? 10 : t,
                        r = (0, s.useRouter)().query[i.dp],
                        o = void 0 === r ? n : r;
                    return (0, a.k)(o) ? Number(o) : n
                },
                l = function() {
                    var e = (0, s.useRouter)().query;
                    return {
                        endDate: e[i.BD],
                        startDate: e[i.yZ]
                    }
                },
                d = function() {
                    return {
                        orderBy: (0, s.useRouter)().query[i.qk]
                    }
                },
                v = function() {
                    var e, t = (0, s.useRouter)(),
                        n = t.query,
                        a = n[i.Tv],
                        c = n[i.cb],
                        u = t.asPath,
                        l = (0, o.oY)(u),
                        d = r.cp[c],
                        v = (null === (e = l.match(o._g)) || void 0 === e ? void 0 : e[1]) || a || r.k4,
                        f = (0, o.N6)(l),
                        p = a || d || f,
                        m = (0, o.EV)(l, p),
                        g = r.p_[p];
                    return {
                        assetType: v,
                        assetSubType: m,
                        fullAssetType: p,
                        fullAssetTypeFromPath: f,
                        editorialAssetType: g
                    }
                },
                f = /^\/editorial/i,
                p = function() {
                    var e = (0, s.useRouter)().asPath;
                    return f.test(e)
                }
        },
        82603: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return h
                },
                n: function() {
                    return y
                }
            });
            var r, i = n(47842),
                a = n(70865),
                o = n(81740),
                s = n(11181),
                c = n(65537),
                u = n(55988),
                l = n(52884),
                d = n(67661),
                v = n(9009),
                f = n(3255),
                p = n(9823),
                m = n(43110),
                g = (r = {}, (0, i.Z)(r, s.BRANDS.SSTK, u.mh), (0, i.Z)(r, s.BRANDS.ENTERPRISE, u.mC), r),
                h = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).queryParams,
                        t = (0, m.B)(),
                        n = (0, p.D)().brand,
                        r = (0, a.Z)({
                            site_name: g[n]
                        }, e);
                    return (0, f.ZP)(t && (0, o.nI)({
                        queryParams: r
                    }).formattedUrl, function(e) {
                        return d.uS.get(e).then(function(e) {
                            return (0, v.O)(e.data)
                        })
                    }, {
                        dedupingInterval: l.yR
                    })
                },
                y = function() {
                    var e = h().data;
                    return (null == e ? void 0 : e.displayUnits) || c.xn
                }
        },
        92067: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return l
                }
            });
            var r = n(81740),
                i = n(52884),
                a = n(9823),
                o = n(67661),
                s = n(9009),
                c = n(3255),
                u = n(43110),
                l = function(e) {
                    var t = e.fetchTrigger,
                        n = (0, a.D)(),
                        l = n.isBrandEnterprise,
                        d = n.isBrandSstk,
                        v = (0, u.B)(),
                        f = (0, c.ZP)(l && v && t ? (0, r.OC)().formattedUrl : null, function(e) {
                            return o.uS.get(e).then(function(e) {
                                return (0, s.O)(e.data)
                            })
                        }, {
                            dedupingInterval: i.no,
                            shouldRetryOnError: !1
                        }),
                        p = f.data,
                        m = f.error;
                    return (null == m ? void 0 : m.status) >= 400 || !v || d ? null : p
                }
        },
        19819: function(e, t, n) {
            n.d(t, {
                A_: function() {
                    return _
                },
                QH: function() {
                    return k
                },
                VM: function() {
                    return O
                },
                Zc: function() {
                    return L
                },
                mJ: function() {
                    return C
                },
                oe: function() {
                    return P
                },
                uG: function() {
                    return Z
                }
            });
            var r, i, a, o = n(98788),
                s = n(70865),
                c = n(96670),
                u = n(50930),
                l = n(5163),
                d = n(68245),
                v = n(81740),
                f = n(19522),
                p = n(97258),
                m = n(39232),
                g = n(85330),
                h = n(94054),
                y = n(83451),
                b = n(37546),
                S = n(44297),
                w = n(37154),
                T = n(91855),
                I = n(67661),
                A = n(84159),
                _ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.name,
                        r = t.target,
                        i = document.createElement("a");
                    i.setAttribute("data-automation", "FeatureDownload_utils_link"), i.style.display = "none", i.href = e, i.target = void 0 === r ? "_self" : r, i.download = n || e, document.body.appendChild(i), i.click(), (0, A.bK)() || document.body.removeChild(i)
                },
                Z = (r = (0, o.Z)(function(e) {
                    var t, n;
                    return (0, l.__generator)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = e.downloadBundlePayload, n = (0, d.e)({
                                    urlParams: {
                                        filename: t.bundleFilename
                                    }
                                }).formattedUrl, [4, T.jl.post(n, t.content)];
                            case 1:
                                return [2, r.sent().data.public_url]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                C = function(e) {
                    var t = e.licensedContent,
                        n = e.supplementalUrlType,
                        r = t[0],
                        i = r.downloadUrl,
                        a = r.supplementalUrls;
                    if ((null == a ? void 0 : a.length) && n) {
                        var o = (a.find(function(e) {
                            return e.type === n
                        }) || {}).url;
                        return void 0 === o ? i : o
                    }
                    return i
                },
                k = (i = (0, o.Z)(function(e) {
                    var t, n, r, i, a;
                    return (0, l.__generator)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return t = e.downloadPayload, n = e.supplementalUrlType, r = e.licenseeIdentifier, i = (0, v.f$)({
                                    urlParams: {
                                        licenseeIdentifier: r
                                    }
                                }).formattedUrl, [4, I.uS.post(i, t)];
                            case 1:
                                return [2, {
                                    downloadUrl: C({
                                        licensedContent: a = o.sent().data.meta.licensedContent,
                                        supplementalUrlType: n
                                    }),
                                    licensedContent: a
                                }]
                        }
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                }),
                R = function(e) {
                    var t = e.existingAssetLicenses,
                        n = e.contentType,
                        r = e.licenseName,
                        i = e.subscriptions;
                    switch (n) {
                        case m.pX:
                            var a, o, s = (0, w.I)({
                                existingAssetLicenses: t,
                                subscriptions: (0, u.Z)(null !== (a = null == i ? void 0 : i.videoSubscriptions) && void 0 !== a ? a : []).concat((0, u.Z)(null !== (o = null == i ? void 0 : i.videoCompSubscriptions) && void 0 !== o ? o : [])),
                                licenseName: r
                            });
                            return (null == s ? void 0 : s.redeemableFor) || r;
                        case m.j0:
                            return r || h.zUW;
                        case m.tn:
                            return r || h.i9D;
                        case m.pV:
                        default:
                            return r
                    }
                },
                O = (a = (0, o.Z)(function(e) {
                    var t, n, r, i, a;
                    return (0, l.__generator)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                var d;
                                return t = e.assets, n = e.existingAssetLicenses, r = e.format, i = e.selectedAssetSize, a = e.subscriptions, [4, Promise.all(t.map((d = (0, o.Z)(function(e) {
                                    var t, o;
                                    return (0, l.__generator)(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return t = (0, b.SS)({
                                                    asset: e
                                                }), [4, (0, y.Oo)({
                                                    asset: e,
                                                    licenseName: e.licenseId,
                                                    selectedAssetSize: i
                                                })];
                                            case 1:
                                                return o = u.sent(), [2, (0, c.Z)((0, s.Z)({}, o, t === m.tn && {
                                                    override_filename: "".concat(g.Oq, "_").concat(e.id, ".").concat(r || o.content_format)
                                                }, (0, S.f8)(e) && (0, s.Z)({
                                                    content_provider: "pixelsquid-media",
                                                    content_size: p.JF
                                                }, e.selectedFormatType === f.yI && {
                                                    include_shadows: "on" === e.selectedShadowsOption
                                                })), {
                                                    license_name: R({
                                                        existingAssetLicenses: n,
                                                        contentType: t,
                                                        licenseName: e.licenseId,
                                                        subscriptions: a
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
                    return a.apply(this, arguments)
                }),
                P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e && e.id && (e.title || e.description) && e.type && window.localStorage.setItem("sstk_ent_asset_preview", JSON.stringify({
                        id: e.id,
                        title: e.title || e.description,
                        thumb: e.src || e.previewImageUrl || "",
                        video: e.previewVideoUrls,
                        url: e.link,
                        type: (0, S.Tp)(e),
                        isRex: e.isRexEditorial
                    }))
                },
                L = function(e) {
                    var t;
                    return requestAnimationFrame ? function() {
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        t && cancelAnimationFrame(t), t = requestAnimationFrame(function() {
                            e.apply(void 0, (0, u.Z)(r))
                        })
                    } : e
                }
        },
        69026: function(e, t, n) {
            n.r(t), n.d(t, {
                Edit: function() {
                    return o
                }
            });
            var r = n(70865),
                i = n(52322),
                a = (0, n(6620).Z)((0, i.jsx)("path", {
                    d: "M5.467 22.8l-2.8 6.533 6.56-2.733-3.76-3.8zM10.56 25.253L6.787 21.48 25.56 2.667l3.773 3.773L10.56 25.253z"
                }), "Edit.svg"),
                o = function(e) {
                    return (0, i.jsx)(a, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        53007: function(e, t, n) {
            n.r(t), n.d(t, {
                Share: function() {
                    return o
                }
            });
            var r = n(70865),
                i = n(52322),
                a = (0, n(6620).Z)((0, i.jsx)("path", {
                    d: "M14.667 8.4v16.267h2.667V8.534l4.267 4.133 1.867-1.867-7.467-7.467L8.534 10.8l2 1.867zM20 15.333V18h4v9.333H8V18h4v-2.667H5.333V30h21.333V15.333z"
                }), "Share.svg"),
                o = function(e) {
                    return (0, i.jsx)(a, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        91855: function(e, t, n) {
            n.d(t, {
                z1: function() {
                    return N
                },
                ey: function() {
                    return x
                },
                jm: function() {
                    return U
                },
                cR: function() {
                    return D
                },
                IZ: function() {
                    return B
                },
                jl: function() {
                    return M
                },
                mV: function() {
                    return H
                },
                IU: function() {
                    return V
                },
                kO: function() {
                    return G
                },
                xj: function() {
                    return X
                },
                j: function() {
                    return J
                }
            });
            var r, i, a = n(47293),
                o = n(70314),
                s = n.n(o),
                c = n(98788),
                u = n(90581),
                l = n(47842),
                d = n(70865),
                v = n(96670),
                f = n(87394),
                p = n(5163),
                m = n(7297),
                g = n(71162),
                h = "application/json",
                y = s()().publicRuntimeConfig._app,
                b = (i = {}, (0, l.Z)(i, m.eJ, h), (0, l.Z)(i, m.P8, y.name), (0, l.Z)(i, m.hU, y.version), i),
                S = (0, l.Z)({
                    Accept: h
                }, m.zv, h),
                w = (r = (0, c.Z)(function(e, t) {
                    var n, r, i, a, o, s;
                    return (0, p.__generator)(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return n = e.toString(), r = null == t ? void 0 : t.body, [4, fetch(n, (0, v.Z)((0, d.Z)({}, t), {
                                    headers: (0, d.Z)({}, b, r && (0, d.Z)({}, S), null == t ? void 0 : t.headers)
                                }))];
                            case 1:
                                a = (i = c.sent()).headers.get(m.zv), c.label = 2;
                            case 2:
                                if (c.trys.push([2, 9, , 10]), !(null == a ? void 0 : a.includes(h))) return [3, 4];
                                return [4, i.json()];
                            case 3:
                                i.data = c.sent(), c.label = 4;
                            case 4:
                                if (!(null == a ? void 0 : a.includes("text/plain"))) return [3, 6];
                                return [4, i.text()];
                            case 5:
                                i.data = c.sent(), c.label = 6;
                            case 6:
                                if (!(null == a ? void 0 : a.includes("application/pdf"))) return [3, 8];
                                return [4, i.blob()];
                            case 7:
                                i.data = c.sent(), c.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                return c.sent(), [2, i];
                            case 10:
                                var u;
                                if ((u = i.status) >= g.HO && u < g.C7) return [2, i];
                                return i.data && (s = i.data.errors, o = (0, f.Z)(s || [], 1)[0]), [2, Promise.reject(o || i)]
                        }
                    })
                }), function(e, t) {
                    return r.apply(this, arguments)
                }),
                T = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = "[object Object]",
                        r = "[object Array]",
                        i = function(e, t) {
                            return null != e ? "".concat(e, "[").concat(t, "]") : t
                        },
                        a = function(e, t, o) {
                            var s = Object.prototype.toString.call(e),
                                c = o;
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
                                            a(l, i(t, u), c);
                                            break;
                                        default:
                                            c[i(t, u)] = l
                                    }
                                }
                            return c
                        },
                        o = Object.entries(a(e)).map(function(e) {
                            return e.join("=")
                        }).join("&");
                    return t ? encodeURIComponent(o) : o
                },
                I = function() {
                    function e(t) {
                        (0, u.Z)(this, e), this.baseUrl = t, this.deleteHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return w(t, (0, d.Z)({
                                method: "DELETE"
                            }, n))
                        }, this.fetchHttpMethod = function(e) {
                            return w(e.url, e.options)
                        }, this.getHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return w(t, (0, d.Z)({
                                method: "GET"
                            }, n))
                        }, this.patchHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return w(t, (0, d.Z)({
                                method: "PATCH"
                            }, n))
                        }, this.postHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return w(t, (0, d.Z)({
                                method: "POST"
                            }, n))
                        }, this.putHttpMethod = function(e) {
                            var t = e.url,
                                n = e.options;
                            return w(t, (0, d.Z)({
                                method: "PUT"
                            }, n))
                        }, this.requestInterceptors = [], this.responseInterceptors = []
                    }
                    var t = e.prototype;
                    return t.createUrlObject = function(e, t) {
                        var n = (t || {}).params,
                            r = "";
                        n && (r = T(n, !1));
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
                            var r, i, a;
                            return (0, p.__generator)(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return r = n.createUrlObject(e, t), i = n.runRequestInterceptors({
                                            url: r,
                                            options: t
                                        }), [4, n.getHttpMethod(i)];
                                    case 1:
                                        return a = o.sent(), [2, n.runResponseInterceptors(a)]
                                }
                            })
                        })()
                    }, t.delete = function(e, t) {
                        var n = this;
                        return (0, c.Z)(function() {
                            var r, i, a, o, s;
                            return (0, p.__generator)(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return i = (r = null == t ? void 0 : t.data) ? JSON.stringify(null == t ? void 0 : t.data) : null, r && (null == t || delete t.data), a = n.createUrlObject(e, t), o = n.runRequestInterceptors({
                                            url: a,
                                            options: (0, v.Z)((0, d.Z)({}, t), {
                                                body: i
                                            })
                                        }), [4, n.deleteHttpMethod(o)];
                                    case 1:
                                        return s = c.sent(), [2, n.runResponseInterceptors(s)]
                                }
                            })
                        })()
                    }, t.fetch = function(t, n) {
                        var r = this;
                        return (0, c.Z)(function() {
                            var i, a, o, s, c;
                            return (0, p.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return i = null == n ? void 0 : n.data, (a = n ? e.getRequestBody(i) : null) && (null == n || delete n.data), o = r.createUrlObject(t, n), s = r.runRequestInterceptors({
                                            url: o,
                                            options: (0, v.Z)((0, d.Z)({}, n), {
                                                body: a
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
                            var a, o, s, c;
                            return (0, p.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (a = n || (null == r ? void 0 : r.data) ? e.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), o = i.createUrlObject(t, r), s = i.runRequestInterceptors({
                                            url: o,
                                            options: (0, v.Z)((0, d.Z)({}, r), {
                                                body: a
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
                            var a, o, s, c;
                            return (0, p.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (a = n || (null == r ? void 0 : r.data) ? e.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), o = i.createUrlObject(t, r), s = i.runRequestInterceptors({
                                            url: o,
                                            options: (0, v.Z)((0, d.Z)({}, r), {
                                                body: a
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
                            var a, o, s, c;
                            return (0, p.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return (a = n || (null == r ? void 0 : r.data) ? e.getRequestBody(n || (null == r ? void 0 : r.data)) : null) && (null == r || delete r.data), o = i.createUrlObject(t, r), s = i.runRequestInterceptors({
                                            url: o,
                                            options: (0, v.Z)((0, d.Z)({}, r), {
                                                body: a
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
                A = n(4842),
                _ = n(74147),
                Z = n(21805),
                C = n(6364),
                k = s()().publicRuntimeConfig.authSsoCookieName,
                R = function(e) {
                    var t, n = e.url,
                        r = e.options,
                        i = (null == r ? void 0 : null === (t = r.headers) || void 0 === t ? void 0 : t[m.cp]) || (0, C.Z)();
                    return {
                        url: n,
                        options: (0, v.Z)((0, d.Z)({}, r), {
                            headers: (0, v.Z)((0, d.Z)({}, null == r ? void 0 : r.headers), (0, l.Z)({}, m.cp, i))
                        })
                    }
                },
                O = function(e) {
                    401 === e.status || e.status;
                    var t, n, r = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : null === (n = t.errors) || void 0 === n ? void 0 : n[0],
                        i = null == e ? void 0 : e.data;
                    return r || i || e
                },
                P = function(e) {
                    if (!e.ok) return O(e);
                    if ("string" == typeof(null == e ? void 0 : e.data)) return e;
                    var t, n = null === (t = e.headers.get(m.zv)) || void 0 === t ? void 0 : t.includes("application/json");
                    return !new URL(e.url).pathname.startsWith(a.a) && n && (e.data = (0, _.Y)(e.data)), e
                },
                L = s()().publicRuntimeConfig.apiEndpoints,
                E = function(e) {
                    return L[e], "".concat(window.location.origin).concat(a.a)
                },
                N = new I(E("accounts")),
                x = new I(E("airtable"));
            new I(E("planning"));
            var U = new I(E("enterpriseApi")),
                F = new I(E("enterpriseApi")),
                z = new I(E("graphGateway")),
                D = new I(E("identitySettings")),
                B = new I(E("mailingApi")),
                j = new I(E(a.a)),
                M = new I(E("shutterstockBundler")),
                q = new I(E("studio"));
            new I(E("studio"));
            var H = new I(E("unityGroup")),
                V = new I(E("unityInvoice")),
                W = new I(E("userAssetsService")),
                G = new I(E("userPropertiesApi")),
                X = new I(E("visitorTracking")),
                J = {
                    postVisitorTracking: function(e, t) {
                        return X.post("/visit", e, t)
                    },
                    postReferrals: function(e, t) {
                        return X.post("/events/referral", e, t)
                    }
                };
            q.requestInterceptors.push(function(e) {
                var t, n = e.url,
                    r = e.options;
                if ((null == r ? void 0 : null === (t = r.method) || void 0 === t ? void 0 : t.toLowerCase()) === "get") {
                    var i = n.pathname.split("?")[0];
                    if (A.M.includes(i)) {
                        var a = Z.Z.get(k);
                        a && "-undefined" !== a && n.searchParams.set(A.D, a)
                    }
                }
                return {
                    url: n,
                    options: r
                }
            }), [q, U, F, V, V, D].forEach(function(e) {
                return e.responseInterceptors.push(P)
            }), [N, x, U, F, z, B, j, M, q, H, V, W, X].forEach(function(e) {
                return e.requestInterceptors.push(R)
            })
        },
        96109: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return f
                }
            });
            var r, i = n(39232),
                a = n(24114),
                o = n(90856),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.slug,
                        r = "".concat(n, "-").concat(t),
                        a = "/".concat(i.k4, "-").concat(i.w5, "/").concat(r);
                    return [a, a]
                },
                c = n(12355),
                u = n(47842);
            n(38398);
            var l = n(85208);
            (0, u.Z)({}, i.xN, (r = {}, (0, u.Z)(r, l.Dx, "/".concat(i.xN)), (0, u.Z)(r, "category", "/".concat(i.xN, "/[slug]")), (0, u.Z)(r, "subCategory", "/".concat(i.xN, "/[slug]/[slug]")), r));
            var d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.slug,
                        r = "create-".concat(n ? "".concat(n, "-").concat(t) : t),
                        a = "/".concat(i.xN, "/").concat(r);
                    return [a, a]
                },
                v = n(28307),
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = e.id,
                        r = e.slug,
                        u = e.link,
                        l = e.permalink,
                        f = e.isIllustration,
                        p = e.isVector,
                        m = e.description;
                    switch (t) {
                        case i.pX:
                        case i.FM:
                        case i.cF:
                            return (0, v.f0)({
                                id: n,
                                slug: r,
                                permalink: l
                            });
                        case i.j0:
                        case i.xF:
                        case i.IK:
                        case i.jr:
                            return (0, o.o)({
                                id: n,
                                slug: r
                            });
                        case i.tn:
                            return (0, c.I)({
                                id: n,
                                slug: r
                            });
                        case i.hv:
                            return d({
                                id: n,
                                slug: r
                            });
                        case i.w5:
                            return s({
                                id: n,
                                slug: r
                            });
                        case i.k4:
                        case i.Y_:
                        case i.gP:
                        default:
                            return (0, a.Q)({
                                link: u,
                                permalink: l,
                                isIllustration: f,
                                isVector: p,
                                id: n,
                                description: m
                            })
                    }
                }
        },
        32780: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return m
                },
                j: function() {
                    return p
                }
            });
            var r, i = n(47842),
                a = n(3081),
                o = n(38398),
                s = n.n(o),
                c = n(85208),
                u = "cart",
                l = "content-license",
                d = "ecomm-logged-in",
                v = "success",
                f = (0, i.Z)({}, u, (r = {}, (0, i.Z)(r, c.Dx, a.Is), (0, i.Z)(r, d, a.nK), (0, i.Z)(r, l, (0, i.Z)({}, v, "".concat(a.Is, "/").concat(l, "/").concat(v))), r)),
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.isLoggedInUser,
                        n = e.isBrandSstk,
                        r = f[u][t && n ? d : c.Dx];
                    return [r, r]
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = s().format({
                            pathname: f[u][l][v],
                            query: e
                        });
                    return [t, t]
                }
        },
        68445: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return T
                },
                _: function() {
                    return w
                }
            });
            var r, i, a, o, s, c = n(47842),
                u = n(26297),
                l = n(39232),
                d = n(44297),
                v = n(38398),
                f = n.n(v),
                p = n(85208),
                m = "collections",
                g = (s = {}, (0, c.Z)(s, m, (r = {}, (0, c.Z)(r, p.Dx, "/".concat(m)), (0, c.Z)(r, p.ID, "/".concat(m, "/[id]")), r)), (0, c.Z)(s, l.pX, (0, c.Z)({}, m, (i = {}, (0, c.Z)(i, p.Dx, "/".concat(l.pX, "/").concat(m)), (0, c.Z)(i, p.ID, "/".concat(l.pX, "/").concat(m, "/[id]")), i))), (0, c.Z)(s, l.xF, (0, c.Z)({}, m, (a = {}, (0, c.Z)(a, p.Dx, "/".concat(l.xF, "/").concat(m)), (0, c.Z)(a, p.ID, "/".concat(l.xF, "/").concat(m, "/[id]")), a))), (0, c.Z)(s, l.gP, (0, c.Z)({}, m, (o = {}, (0, c.Z)(o, p.Dx, "/".concat(l.gP, "/").concat(m)), (0, c.Z)(o, p.ID, "/".concat(l.gP, "/").concat(m, "/[id]")), o))), s),
                h = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).query,
                        t = f().format({
                            pathname: g[m][p.Dx],
                            query: e
                        });
                    return [t, t]
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.query,
                        r = f().format({
                            pathname: "/".concat(m, "/").concat(t),
                            query: n
                        });
                    return [r, r]
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? l.k4 : t,
                        r = e.id,
                        i = e.query,
                        a = f().format({
                            pathname: "/".concat(n, "/").concat(m, "/").concat(r),
                            query: i
                        });
                    return [a, a]
                },
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? l.k4 : t,
                        r = e.query,
                        i = f().format({
                            pathname: "/".concat(n, "/").concat(m),
                            query: r
                        });
                    return [i, i]
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? l.k4 : t,
                        r = e.query;
                    switch (n) {
                        case l.pX:
                        case l.xF:
                        case l.tn:
                        case l.gP:
                            return S({
                                assetType: n,
                                query: r
                            });
                        case l.k4:
                        default:
                            return h({
                                query: r
                            })
                    }
                },
                T = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.assetType,
                        n = void 0 === t ? l.k4 : t,
                        r = e.id,
                        i = e.verificationCode,
                        a = e.query,
                        o = ((void 0 === a ? {} : a).id, (0, u.Z)(e.query, ["id"])),
                        s = (0, d.Xo)(n) ? l.gP : n;
                    if (!r) return w({
                        assetType: s
                    });
                    var c = i ? "".concat(r, "-").concat(i) : r;
                    switch (s) {
                        case l.pX:
                        case l.xF:
                        case l.tn:
                        case l.gP:
                            return b({
                                assetType: s,
                                id: c,
                                query: o
                            });
                        case l.k4:
                        default:
                            return y({
                                id: c,
                                query: o
                            })
                    }
                }
        },
        15741: function(e, t, n) {
            n.d(t, {
                Q_: function() {
                    return p
                },
                SX: function() {
                    return v
                },
                oc: function() {
                    return d
                },
                t0: function() {
                    return f
                },
                vO: function() {
                    return m
                }
            });
            var r = n(70865),
                i = n(11181),
                a = n(85129),
                o = n(16642),
                s = n(70314),
                c = n.n(s),
                u = i.BRANDS.SSTK,
                l = c()().publicRuntimeConfig.shutterstockBaseUrl,
                d = function(e) {
                    var t = e.contentType,
                        n = e.html;
                    return (0, r.Z)({
                        type: "application/ld+json",
                        innerHTML: JSON.stringify(n)
                    }, t ? {
                        contentType: t
                    } : {})
                },
                v = d({
                    contentType: o.H2.ORGANIZATION,
                    html: {
                        "@context": o.ke,
                        "@type": o.Rm.ORGANIZATION,
                        name: u,
                        url: l,
                        aggregateRating: {
                            "@type": o.Rm.AGGREGATE_RATING,
                            ratingValue: "4.4",
                            bestRating: "5",
                            ratingCount: "507"
                        },
                        logo: a.Br,
                        sameAs: ["https://www.facebook.com/Shutterstock", "https://twitter.com/shutterstock", "https://www.linkedin.com/company/shutterstock", "https://www.youtube.com/user/ShutterstockInc", "https://instagram.com/shutterstock/"]
                    }
                }),
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return d({
                        html: {
                            "@context": "http://schema.org",
                            "@type": o.Rm.BREADCRUMBSLIST,
                            itemListElement: e.map(function(t, n) {
                                var r, i, a = t.title,
                                    o = t.href;
                                return a && (e.length - 1 === n || o) || null === (r = window.NREUM) || void 0 === r || null === (i = r.noticeError) || void 0 === i || i.call(r, Error("Breadcrumb for linked data is malformed: potential SEO impact"), {
                                    msg: 'Breadcrumb items must have a shape of "{ name: String, url: String }", currently: "{ name: '.concat(a, ", url: ").concat(o, ' }"')
                                }), {
                                    "@type": "ListItem",
                                    position: n + 1,
                                    item: {
                                        "@id": o,
                                        name: a
                                    }
                                }
                            })
                        }
                    })
                },
                p = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e = n ? t.map(function(e) {
                        var t, n, r = e.fields,
                            i = r.cmsFaqItemTitle,
                            a = r.cmsFaqItemBody;
                        return i && a || null === (t = window.NREUM) || void 0 === t || null === (n = t.noticeError) || void 0 === n || n.call(t, Error("FAQ Items for linked data is malformed: potential SEO impact"), {
                            msg: "FAQ items must have a shape of `{ question: String, answer: String }`"
                        }), {
                            "@type": "Question",
                            name: i,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: a
                            }
                        }
                    }) : t.map(function(e) {
                        var t, n, r = e.cmsFaqItemTitle,
                            i = e.cmsFaqItemBody;
                        return r && i || null === (t = window.NREUM) || void 0 === t || null === (n = t.noticeError) || void 0 === n || n.call(t, Error("FAQ Items for linked data is malformed: potential SEO impact"), {
                            msg: "FAQ items must have a shape of `{ question: String, answer: String }`"
                        }), {
                            "@type": "Question",
                            name: r,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: i
                            }
                        }
                    }), d({
                        contentType: o.H2.FAQPAGE,
                        html: {
                            "@context": "http://schema.org",
                            "@type": o.Rm.FAQPAGE,
                            mainEntity: e
                        }
                    })
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.linksListTitle,
                        n = e.linksListLinks;
                    return t ? d({
                        contentType: o.H2.HOWTO,
                        html: {
                            "@context": "http://schema.org",
                            "@type": o.Rm.HOWTO,
                            name: t,
                            step: (void 0 === n ? [] : n).map(function(e) {
                                if (!e) {
                                    var t, n;
                                    null === (t = window.NREUM) || void 0 === t || null === (n = t.noticeError) || void 0 === n || n.call(t, Error("How To items for linked data is malformed: potential SEO impact"), {
                                        msg: "How To items must be present, it is ".concat(e)
                                    })
                                }
                                return {
                                    "@type": o.Rm.HOWTOSTEP,
                                    text: e
                                }
                            })
                        }
                    }) : {
                        innerHTML: void 0
                    }
                }
        },
        21985: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return r
                }
            });
            var r = function(e) {
                return e && "string" == typeof e ? "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)) : ""
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
//# sourceMappingURL=45031.49f639e2ef48d7bd.js.map