"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71728], {
        92790: function(e, n, t) {
            t.d(n, {
                K: function() {
                    return s
                },
                Z: function() {
                    return r
                }
            });
            var i = t(38398),
                r = function() {
                    var e = "/email/ss_premier_sub_account_activation_email";
                    return {
                        url: e,
                        formattedUrl: (0, i.format)({
                            pathname: e
                        })
                    }
                },
                s = function() {
                    var e = "/email/premier_cart_confirmation";
                    return {
                        url: e,
                        formattedUrl: (0, i.format)({
                            pathname: e
                        })
                    }
                }
        },
        71728: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return A
                }
            });
            var i = t(98788),
                r = t(87394),
                s = t(5163),
                a = t(15111),
                o = t(30337),
                c = t(23747),
                l = t(4686),
                u = t(55112),
                d = t(2784),
                p = t(52322),
                m = t(70865),
                f = t(26297),
                v = t(52309),
                g = t(25237),
                _ = t.n(g),
                h = _()(function() {
                    return Promise.all([t.e(88103), t.e(35756), t.e(10185), t.e(67127), t.e(83542)]).then(t.bind(t, 59066)).then(function(e) {
                        return e.CompLicensingDialog
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59066]
                        }
                    },
                    ssr: !1
                }),
                b = function(e) {
                    var n = e.isOpen,
                        t = (0, f.Z)(e, ["isOpen"]);
                    return (0, v.B)(n) && (0, p.jsx)(h, (0, m.Z)({
                        isOpen: n
                    }, t))
                },
                S = _()(function() {
                    return Promise.all([t.e(27310), t.e(81503), t.e(20932), t.e(20585), t.e(78958), t.e(79637), t.e(41036)]).then(t.bind(t, 92637)).then(function(e) {
                        return e.CompLicensingDrawer
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [92637]
                        }
                    },
                    ssr: !1
                }),
                y = function(e) {
                    var n = e.isOpen,
                        t = (0, f.Z)(e, ["isOpen"]);
                    return (0, v.B)(n) && (0, p.jsx)(S, (0, m.Z)({
                        isOpen: n
                    }, t))
                },
                C = _()(function() {
                    return t.e(92986).then(t.bind(t, 92986)).then(function(e) {
                        return e.CompLicensingSnackbar
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [92986]
                        }
                    },
                    ssr: !1
                }),
                Z = function(e) {
                    var n = e.isOpen,
                        t = (0, f.Z)(e, ["isOpen"]);
                    return (0, v.B)(n) && (0, p.jsx)(C, (0, m.Z)({
                        isOpen: n
                    }, t))
                },
                I = t(26710),
                w = t(75),
                z = t(59877),
                L = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.licensingError,
                        t = (0, z.$G)(w.clK).t;
                    return {
                        cancel: t("common:actions_cancel"),
                        downloadComp: t("common:actions_download_comp"),
                        enterpriseCompLicense: t("ent:license_enterprise_comp"),
                        genericErrorMessage: t("ent:license_now_error_message"),
                        licensingError: (0, I.j2)({
                            error: void 0 === n ? {} : n,
                            t: t
                        }),
                        licenseSuccess: t("ent:confirmation_alert_message"),
                        licenseFormLabels: {
                            buttonLabel: t("common:actions_download_comp"),
                            disclaimer: (0, p.jsx)(z.cC, {
                                i18nKey: "ent:comp_disclaimer",
                                ns: w.clK,
                                components: {
                                    bold: (0, p.jsx)("strong", {})
                                }
                            }),
                            addMetadataToAsset: t("ent:add_metadata_to_asset_comp"),
                            metadataFound: t("ent:previous_metadata_found_comp"),
                            metadataMissing: t("ent:previous_metadata_missing_comp"),
                            title: t("ent:add_metadata_to_comp")
                        }
                    }
                },
                O = function(e) {
                    var n = e.assets,
                        t = e.compLicensingHandler,
                        i = e.isDialogOpen,
                        r = e.isDrawerOpen,
                        s = e.isLicensing,
                        a = e.isSnackBarOpen,
                        o = e.licensingError,
                        c = e.onDialogClose,
                        l = e.onDrawerClose,
                        u = e.onSnackbarClose,
                        d = e.selectedAssetSize,
                        m = e.setSelectedAssetSize,
                        f = e.settingsData,
                        v = L({
                            licensingError: o
                        });
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(b, {
                            assets: n,
                            isOpen: i,
                            onClose: c,
                            onLicense: t,
                            labels: v,
                            isLicensing: s,
                            selectedAssetSize: d,
                            setSelectedAssetSize: m,
                            settingsData: f
                        }), (0, p.jsx)(y, {
                            assets: n,
                            isLicensing: s,
                            isOpen: r,
                            labels: v,
                            onClose: l,
                            onLicense: t,
                            selectedAssetSize: d
                        }), (0, p.jsx)(Z, {
                            isOpen: a,
                            message: v.licensingError,
                            onClose: u
                        })]
                    })
                };
            O.defaultProps = {
                assets: null,
                isDialogOpen: !1,
                isDrawerOpen: !1,
                isLicensing: !1,
                isSnackBarOpen: !1,
                licensingError: {},
                selectedAssetSize: "",
                settingsData: {}
            };
            var T = t(73551),
                A = function() {
                    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        p = t.allowMetadata,
                        m = void 0 === p || p,
                        f = (0, r.Z)((0, d.useState)(null), 2),
                        v = f[0],
                        g = f[1],
                        _ = (0, r.Z)((0, d.useState)(""), 2),
                        h = _[0],
                        b = _[1],
                        S = (0, r.Z)((0, d.useState)(""), 2),
                        y = S[0],
                        C = S[1],
                        Z = (0, r.Z)((0, d.useState)(!1), 2),
                        I = Z[0],
                        w = Z[1],
                        z = (0, r.Z)((0, d.useState)(!1), 2),
                        L = z[0],
                        A = z[1],
                        E = (0, r.Z)((0, d.useState)(!1), 2),
                        k = E[0],
                        P = E[1],
                        M = (0, c.Zo)(),
                        j = M.isLicensing,
                        D = M.licensingError,
                        U = M.licensingStatus,
                        N = M.setLicensingStatus,
                        x = M.licensingAssetsHandler,
                        F = (0, o.U)(),
                        q = (0, u.B)().data,
                        R = (0, l.h)(q),
                        B = (0, d.useCallback)((e = (0, i.Z)(function(e) {
                            var n, t, i, r, a, o, c, l, u, d, p, m;
                            return (0, s.__generator)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        t = void 0 === (n = e.assets) ? [] : n, i = e.assetSize, r = e.eventLabel, a = e.format, o = e.metadata, c = e.pageSection, l = e.listId, b(t[0].id), u = !1, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 6, , 7]), [4, (0, T.qP)({
                                            assets: t,
                                            assetSize: i,
                                            format: a,
                                            metadata: o,
                                            selectedAssetSize: y
                                        })];
                                    case 2:
                                        return [4, x(s.sent())];
                                    case 3:
                                        if (d = s.sent().data, (0, T.bj)(t) && 1 === t.length) return [3, 5];
                                        return m = (0, T.aT)(t) ? R : void 0, [4, (0, T.tX)({
                                            assets: t,
                                            compSize: m,
                                            licensedContent: null == d ? void 0 : null === (p = d.meta) || void 0 === p ? void 0 : p.licensedContent
                                        })];
                                    case 4:
                                        s.sent(), F({
                                            assets: t,
                                            eventLabel: r,
                                            isRedownload: !1,
                                            isQuickDownload: !1,
                                            isPaid: !1,
                                            isComp: !0,
                                            pageSection: c,
                                            listId: l
                                        }), s.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return u = s.sent(), [3, 7];
                                    case 7:
                                        return b(""), u && !L && P(!0), [2, {
                                            error: u
                                        }]
                                }
                            })
                        }), function(n) {
                            return e.apply(this, arguments)
                        }), [L, R, x, F, y]),
                        V = (0, d.useCallback)((n = (0, i.Z)(function(e) {
                            var n, t, i, r, o, c, l;
                            return (0, s.__generator)(this, function(s) {
                                return (n = e.assets, t = e.assetSize, i = e.format, r = e.eventLabel, o = e.metadata, c = e.pageSection, l = e.listId, g(n), N(""), !I && (0, a.U0)(n)) ? (w(!0), [2, Promise.resolve(null)]) : !L && (null == q ? void 0 : q.requireMetadataForComp) && !o && m ? (t && C(t), A(!0), [2, Promise.resolve(null)]) : [2, B({
                                    assets: n,
                                    assetSize: t,
                                    eventLabel: r,
                                    format: i,
                                    metadata: o,
                                    pageSection: c,
                                    listId: l
                                })]
                            })
                        }), function(e) {
                            return n.apply(this, arguments)
                        }), [m, B, I, L, q, N]),
                        G = (0, d.useMemo)(function() {
                            return {
                                assets: v,
                                compLicensingHandler: V,
                                compLicensingRequest: B,
                                isDialogOpen: I,
                                isDrawerOpen: L,
                                isLicensing: j,
                                isSnackBarOpen: k,
                                licensingError: D,
                                onDialogClose: function() {
                                    return w(!1)
                                },
                                onDrawerClose: function() {
                                    return A(!1)
                                },
                                onSnackbarClose: function() {
                                    return P(!1)
                                },
                                selectedAssetSize: y,
                                setSelectedAssetSize: C,
                                settingsData: q
                            }
                        }, [v, V, B, I, L, j, k, D, y, q]);
                    return {
                        assetsToLicense: v,
                        compLicensingHandler: V,
                        compLicensingProps: G,
                        CompLicensingViews: O,
                        licensingAssetId: h,
                        licensingStatus: U
                    }
                }
        },
        73551: function(e, n, t) {
            t.d(n, {
                SN: function() {
                    return C
                },
                aT: function() {
                    return O
                },
                bj: function() {
                    return L
                },
                qP: function() {
                    return z
                },
                tX: function() {
                    return Z
                }
            });
            var i, r, s, a, o = t(98788),
                c = t(47842),
                l = t(70865),
                u = t(96670),
                d = t(5163),
                p = t(68245),
                m = t(81740),
                f = t(39232),
                v = t(94054),
                g = t(78753),
                _ = t(61765),
                h = t(44297),
                b = t(19819),
                S = t(67661),
                y = t(91855),
                C = (i = (0, o.Z)(function(e) {
                    var n, t, i, r, s, a, o, c, l, u, p, f, v, _, b, y;
                    return (0, d.__generator)(this, function(d) {
                        switch (d.label) {
                            case 0:
                                if (n = e.assets, t = e.compSize, i = e.licensedContent, r = e.supplementalUrlType, a = (s = i[0] || {}).downloadUrl, o = s.contentId, c = s.contentFormat, l = s.contentSize, (null == (u = s.supplementalUrls) ? void 0 : u.length) && r) return [2, void 0 === (p = (u.find(function(e) {
                                    return e.type === r
                                }) || {}).url) ? a : p];
                                if (f = n.find(function(e) {
                                        return e.id === o
                                    }) || {}, v = (0, h.Tp)(f), b = (_ = (0, g.G)({
                                        assets: n,
                                        contentId: o
                                    })).filename, !_.shouldUpdateFilename) return [3, 4];
                                d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]), [4, S.uS.post((0, m.u8)().formattedUrl, {
                                    data: [{
                                        media_id: f.id,
                                        media_type: v,
                                        comp_size: t,
                                        media_size: l,
                                        media_format: c,
                                        filename: b
                                    }]
                                })];
                            case 2:
                                return [2, ((null == (y = d.sent().data) ? void 0 : y.data[0]) || {}).attributes.url || a];
                            case 3:
                                return d.sent(), [2, a];
                            case 4:
                                return [2, a]
                        }
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                }),
                Z = (r = (0, o.Z)(function(e) {
                    var n, t, i, r, s, a, o, c, l, u;
                    return (0, d.__generator)(this, function(d) {
                        switch (d.label) {
                            case 0:
                                if (t = void 0 === (n = e.assets) ? [] : n, i = e.compSize, r = e.assetSize, !((a = void 0 === (s = e.licensedContent) ? [] : s).length > 1)) return [3, 2];
                                return o = (0, g.r)({
                                    assets: t,
                                    licensedContent: a
                                }), c = (0, p.e)({
                                    urlParams: {
                                        filename: o.bundleFilename
                                    }
                                }).formattedUrl, [4, y.jl.post(c, o.content)];
                            case 1:
                                return l = d.sent().data.public_url, [2, (0, b.A_)(l)];
                            case 2:
                                return [4, C({
                                    assets: t,
                                    compSize: i,
                                    assetSize: r,
                                    licensedContent: a
                                })];
                            case 3:
                                return u = d.sent(), [2, (0, b.A_)(u)]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map(function(e) {
                        var n = (0, _.Fy)({
                            asset: e
                        });
                        return (0, u.Z)((0, l.Z)({}, e), {
                            assetType: n,
                            licenseId: v._rW[n]
                        })
                    })
                },
                w = (s = (0, o.Z)(function() {
                    var e;
                    return (0, d.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                e = (0, m.d0)().url, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, S.uS.get(e).then(function(e) {
                                    return null == e ? void 0 : e.data
                                })];
                            case 2:
                                return [2, n.sent().reduce(function(e, n) {
                                    return (0, u.Z)((0, l.Z)({}, e), (0, c.Z)({}, n.name, "-"))
                                }, {})];
                            case 3:
                                return n.sent(), [2, {}];
                            case 4:
                                return [2]
                        }
                    })
                }), function() {
                    return s.apply(this, arguments)
                }),
                z = (a = (0, o.Z)(function() {
                    var e, n, t, i, r, s, a, o = arguments;
                    return (0, d.__generator)(this, function(c) {
                        switch (c.label) {
                            case 0:
                                if (n = (e = o.length > 0 && void 0 !== o[0] ? o[0] : {}).assets, t = e.assetSize, i = e.format, r = e.metadata, s = e.selectedAssetSize, a = r) return [3, 2];
                                return [4, w()];
                            case 1:
                                a = c.sent(), c.label = 2;
                            case 2:
                                return [2, {
                                    assets: I(n),
                                    format: i || "",
                                    licenseMetadata: a,
                                    licensingType: v.dWU,
                                    selectedAssetSize: t || s || "",
                                    isVideoComp: !0
                                }]
                        }
                    })
                }), function() {
                    return a.apply(this, arguments)
                }),
                L = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return (0, _.qw)({
                        asset: e[0] || {}
                    }) === f.j0
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return [f.pV, f.k4, f.ox].includes((0, _.qw)({
                        asset: e[0] || {}
                    }))
                }
        },
        78753: function(e, n, t) {
            t.d(n, {
                G: function() {
                    return c
                },
                r: function() {
                    return l
                }
            });
            var i = t(44297),
                r = t(12847),
                s = "shutterstock",
                a = "shutterstock_editorial",
                o = function(e) {
                    var n = e.asset;
                    return (0, i.PD)(n) ? {
                        prefix: "shutterstock_offset",
                        shouldUpdateFilename: !0
                    } : (0, i.tS)({
                        asset: n
                    }) ? {
                        prefix: a,
                        shouldUpdateFilename: !1
                    } : {
                        prefix: s,
                        shouldUpdateFilename: !1
                    }
                },
                c = function(e) {
                    var n = e.assets,
                        t = e.contentId,
                        i = o({
                            asset: n.find(function(e) {
                                return e.id === t
                            }) || {}
                        }),
                        r = i.prefix,
                        s = i.shouldUpdateFilename;
                    return {
                        filename: "".concat(r, "_").concat(t),
                        shouldUpdateFilename: s
                    }
                },
                l = function(e) {
                    var n = e.assets,
                        t = void 0 === n ? [] : n,
                        o = e.licensedContent,
                        l = t.every(function(e) {
                            return (0, i.tS)({
                                asset: e
                            })
                        }),
                        u = (void 0 === o ? [] : o).map(function(e) {
                            var n = e.contentId,
                                i = e.downloadUrl,
                                r = e.contentFormat,
                                s = c({
                                    assets: t,
                                    contentId: n
                                }).filename,
                                a = i.split("/").pop().split(".").pop();
                            return (a.length > 4 || a.length < 2) && (a = r), {
                                filename: "".concat(s, ".").concat(a),
                                url: i
                            }
                        }),
                        d = (0, r.zs)();
                    return {
                        bundleFilename: "".concat(l ? a : s, "_").concat(d, ".zip"),
                        content: u
                    }
                }
        },
        46848: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return r
                }
            });
            var i = t(80353),
                r = function(e) {
                    var n, t = e.user;
                    return null == t ? void 0 : null === (n = t.roles) || void 0 === n ? void 0 : n.includes(i.qy)
                }
        },
        4686: function(e, n, t) {
            t.d(n, {
                h: function() {
                    return s
                }
            });
            var i = t(46848),
                r = t(43110),
                s = function(e) {
                    var n = (0, r.jy)().data;
                    return (0, i.H)({
                        user: n
                    }) ? null == e ? void 0 : e.compSizeImage : null == e ? void 0 : e.compSizeSubImage
                }
        },
        23747: function(e, n, t) {
            t.d(n, {
                Zo: function() {
                    return ed
                }
            });
            var i, r = t(98788),
                s = t(47842),
                a = t(70865),
                o = t(96670),
                c = t(87394),
                l = t(50930),
                u = t(5163),
                d = t(81740),
                p = t(44699),
                m = t(39232),
                f = t(85330),
                v = t(94054),
                g = t(24861),
                _ = t(65532),
                h = t(61765),
                b = t(83451),
                S = t(26710),
                y = t(18411),
                C = t(80104),
                Z = t(68781),
                I = t(51455),
                w = t(65448),
                z = t(9823),
                L = t(44297),
                O = t(67661),
                T = t(2784),
                A = function(e) {
                    var n, t = e.assets,
                        i = (0, L.Tp)(t[0]);
                    return {
                        include: "subscriptions",
                        content_type: (0, h.JD)({
                            assetType: i,
                            assetId: null === (n = t[0]) || void 0 === n ? void 0 : n.id
                        }),
                        content_ids: t.reduce(function(e, n) {
                            return (0, l.Z)(e).concat([n.id.toString()])
                        }, []).join(",")
                    }
                },
                E = function(e) {
                    var n = e.assets,
                        t = {};
                    return n.forEach(function(e) {
                        var n = (0, L.Tp)(e),
                            i = (0, h.JD)({
                                assetId: e.id,
                                assetType: n
                            });
                        t[i] = (0, l.Z)(t[i] ? t[i] : []).concat([e])
                    }), t
                },
                k = function(e) {
                    var n = e.assetEligibility,
                        t = n.permittedLicenses,
                        i = n.subscriptions;
                    return null == i ? void 0 : i.filter(function(e) {
                        var n = e.license;
                        return t.includes(n.replace("_unlimited", ""))
                    })
                },
                P = function(e) {
                    var n, t = e.assets,
                        i = e.user;
                    return null === (n = Object.values(E({
                        assets: void 0 === t ? [] : t
                    }))) || void 0 === n ? void 0 : n.map(function(e) {
                        var n = A({
                                assets: e
                            }),
                            t = (0, d.Td)({
                                urlParams: {
                                    licenseeIdentifier: "organization-".concat(null == i ? void 0 : i.organizationId)
                                },
                                queryParams: n
                            }).formattedUrl;
                        return O.uS.get(t)
                    })
                },
                M = function(e) {
                    var n = e.data,
                        t = [];
                    return n.map(function(e) {
                        var n = e.id.split("-"),
                            i = n[n.length - 1],
                            r = k({
                                assetEligibility: e
                            });
                        return t.push({
                            assetId: i,
                            subscriptions: r
                        })
                    }), t
                },
                j = t(776),
                D = t(9009),
                U = t(32819),
                N = t(3661),
                x = t(29292),
                F = t(68533),
                q = function() {
                    var e = (0, j.yh)().analytics,
                        n = (0, (0, F.Y)().getSearchContext)();
                    return (0, T.useCallback)(function(t) {
                        var i = t.assets;
                        e.productLicensed({
                            products: (void 0 === i ? [] : i).map(function(e) {
                                return (0, x.bR)({
                                    asset: e,
                                    shouldGetSearchContextFromAsset: !0
                                })
                            }),
                            search_context: n
                        })
                    }, [e, n])
                },
                R = t(22921),
                B = t(43110),
                V = t(20865),
                G = t(92790),
                H = t(91644),
                $ = t(91855),
                K = t(75),
                Y = t(21985),
                W = t(59877),
                X = t(96812),
                J = t.n(X),
                Q = t(55112),
                ee = t(82603),
                en = t(92067),
                et = RegExp(J()),
                ei = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.emailCartCheckoutConfirmation,
                        t = e.orderEmail;
                    return n && t ? t.split(",").filter(function(e) {
                        return et.test(e)
                    }) : []
                },
                er = function(e) {
                    var n = e.purchaseOrder;
                    return "".concat(null == n ? void 0 : n[0], " : ").concat(null == n ? void 0 : n[1]).split(" ").map(function(e) {
                        return (0, Y.k)(e)
                    }).join(" ")
                },
                es = function(e) {
                    var n = e.t,
                        t = e.keys,
                        i = t.currentYear,
                        r = t.emailAddress,
                        s = t.purchaseOrder;
                    return {
                        copyright: n("site-footer:copyright", {
                            CURRENT_YEAR: i
                        }),
                        emailSentTo: n("ent:email_sent_to", {
                            EMAIL_ADDRESS: r
                        }),
                        emailSubjectLine: "".concat(n("ent:order_confirmation_email_subject"), " | ").concat(er({
                            purchaseOrder: s
                        })),
                        name: n("account:profile_name"),
                        needAssistance: n("ent:contact_sales_representative"),
                        orderConfirmation: n("ent:order_confirmation"),
                        purchaseInformation: n("ent:purchase_information_key"),
                        shutterstockAddress: n("tos:tos_2020_09_04_part_v_24_table_r2_c2_l2"),
                        shutterstockInc: n("tos:tos_2020_09_04_part_v_24_table_r2_c2_l1"),
                        subtotal: n("ent:order_confirmation_email_subtotal"),
                        thisIsNotAnInvoice: n("ent:not_an_invoice")
                    }
                },
                ea = function() {
                    var e = (0, W.$G)(K.jp5).t,
                        n = (0, B.jy)().data,
                        t = (0, ee.b)().data,
                        i = (0, Q.B)().data,
                        r = (0, en.z)({
                            fetchTrigger: !0
                        }) || {},
                        s = r.name,
                        a = r.email,
                        o = r.phone,
                        c = (0, _.PE)(),
                        u = c.locale,
                        d = c.fullLocale,
                        p = (0, R.o)();
                    return {
                        sendOrderConfirmationEmails: (0, T.useCallback)(function() {
                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                c = r.cartTotalCurrency,
                                m = r.filteredOrderMetadata,
                                f = r.licenseMetadata,
                                v = r.priceType,
                                g = (0, l.Z)((null == t ? void 0 : t.emailCartCheckoutConfirmation) ? [null == n ? void 0 : n.email] : []).concat((0, l.Z)(ei(i)));
                            if (g.length && (null == m ? void 0 : m.length)) {
                                var _, h, b, S, y = es({
                                    t: e,
                                    keys: {
                                        currentYear: new Date().getFullYear(),
                                        emailAddress: null == n ? void 0 : n.email,
                                        purchaseOrder: Object.entries(f)[0],
                                        repName: s,
                                        repPhoneNumber: o,
                                        repEmail: a
                                    }
                                });
                                try {
                                    var C = {
                                        cartItems: m,
                                        fullName: null == n ? void 0 : n.fullName,
                                        invoiceDate: new Intl.DateTimeFormat(d).format(new Date),
                                        labels: y,
                                        licenseMetadata: f,
                                        repEmail: a,
                                        repName: s,
                                        repPhoneNumber: o,
                                        totalAmount: p({
                                            price: (0, H.P1)(m, []),
                                            localeCurrencyOverride: c,
                                            priceType: v
                                        }),
                                        username: null == n ? void 0 : n.username
                                    };
                                    $.IZ.post((0, G.K)().formattedUrl, {
                                        emails: (0, l.Z)(new Set(g)),
                                        emailBody: C,
                                        emailSubject: "".concat(y.emailSubjectLine),
                                        language: u
                                    })
                                } catch (e) {
                                    null === (_ = window.NREUM) || void 0 === _ || null === (h = _.setTransactionName) || void 0 === h || h.call(_, "sendOrderConfirmationEmail/".concat("noticeError")), null === (b = window.NREUM) || void 0 === b || null === (S = b.noticeError) || void 0 === S || S.call(b, e, {
                                        message: "Failed sending order confirmation emails to: ".concat(g.join(", "))
                                    })
                                }
                            }
                        }, [d, u, i, p, a, s, o, e, null == n ? void 0 : n.email, null == n ? void 0 : n.fullName, null == n ? void 0 : n.username, null == t ? void 0 : t.emailCartCheckoutConfirmation])
                    }
                },
                eo = t(43012),
                ec = (i = {}, (0, s.Z)(i, v.dWU, d.CE), (0, s.Z)(i, v.zM6, d.s0), i),
                el = function(e) {
                    var n, t, i = e.asset,
                        r = e.subscriptions,
                        s = (0, h.qw)({
                            asset: i
                        }),
                        a = i.licenseId,
                        o = i.contentTier;
                    switch (s) {
                        case m.pX:
                            return (0, Z.I)({
                                assetType: m.pX,
                                subscriptions: (0, l.Z)(null !== (n = null == r ? void 0 : r.videoSubscriptions) && void 0 !== n ? n : []).concat((0, l.Z)(null !== (t = null == r ? void 0 : r.videoCompSubscriptions) && void 0 !== t ? t : [])),
                                selectedLicenseId: a
                            });
                        case m.xF:
                        case m.j0:
                            return (0, I.$)({
                                subscriptions: (0, l.Z)(r.musicSubscriptions).concat((0, l.Z)(r.musicCompSubscriptions)),
                                licenseName: i.licenseId
                            });
                        case m.tn:
                            return (0, I.$)({
                                subscriptions: (0, l.Z)(r.sfxSubscriptions).concat((0, l.Z)(r.sfxCompSubscriptions)),
                                licenseName: i.licenseId
                            });
                        case m.gP:
                            return (0, I.$)({
                                subscriptions: (0, l.Z)(r.editorialImageSubscriptions).concat((0, l.Z)(r.editorialImageCompSubscriptions), (0, l.Z)(r.editorialVideoSubscriptions), (0, l.Z)(r.editorialVideoCompSubscriptions)),
                                licenseName: i.licenseId,
                                contentTier: o
                            });
                        case m.k4:
                        default:
                            return (0, I.$)({
                                subscriptions: (0, l.Z)(r.imageSubscriptions).concat((0, l.Z)(r.imageCompSubscriptions)),
                                licenseName: i.licenseId,
                                contentTier: o
                            })
                    }
                },
                eu = function(e) {
                    var n = el({
                        asset: e.asset,
                        subscriptions: e.subscriptions
                    });
                    return (0, w.q)({
                        subscription: n
                    }) ? (0, o.Z)((0, a.Z)({}, n), {
                        creditPrice: m.q9,
                        creditType: g.Zm
                    }) : n
                },
                ed = function() {
                    var e, n = (0, z.D)().isBrandEnterprise,
                        t = (0, V.av)().data,
                        i = (0, c.Z)((0, T.useState)(!1), 2),
                        s = i[0],
                        l = i[1],
                        d = (0, c.Z)((0, T.useState)(""), 2),
                        g = d[0],
                        I = d[1],
                        w = (0, c.Z)((0, T.useState)({}), 2),
                        L = w[0],
                        A = w[1],
                        E = (0, B.jy)().data,
                        k = (0, c.Z)((0, U.VM)(function(e) {
                            return e
                        }), 2)[1],
                        x = (0, j.uA)() || (0, N.H7)(),
                        F = q(),
                        G = (0, R.o)(),
                        H = (0, eo.GB)(),
                        $ = (0, _.PE)().locale,
                        K = ea().sendOrderConfirmationEmails;
                    return {
                        isLicensing: s,
                        licensingAssetsHandler: (0, T.useCallback)((e = (0, r.Z)(function(e) {
                            var i, s, c, d, g, _, w, z, L, T, j, U, N, q, R, B, V, Y, W, X, J, Q, ee, en, et, ei, er, es, ea, eo, el;
                            return (0, u.__generator)(this, function(ed) {
                                switch (ed.label) {
                                    case 0:
                                        var ep;
                                        s = void 0 === (i = e.alreadyLicensedAssets) ? [] : i, d = void 0 === (c = e.assets) ? [] : c, _ = void 0 === (g = e.cartMetadata) ? {} : g, z = void 0 === (w = e.format) ? "" : w, T = void 0 === (L = e.licenseeMetadata) ? {} : L, U = void 0 !== (j = e.isVideoComp) && j, q = void 0 === (N = e.licenseMetadata) ? {} : N, R = e.licensingType, V = void 0 === (B = e.selectedAssetSize) ? "" : B, ep = (0, r.Z)(function() {
                                            var e;
                                            return (0, u.__generator)(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, Promise.all(P({
                                                            assets: d,
                                                            user: E
                                                        }))];
                                                    case 1:
                                                        var s;
                                                        return e = M({
                                                            data: i.sent().map(function(e) {
                                                                var n = e.data;
                                                                return (0, D.O)(n)
                                                            }).flat()
                                                        }), [4, Promise.all(d.map((s = (0, r.Z)(function(n) {
                                                            var t, i, r, s, c, l, d;
                                                            return (0, u.__generator)(this, function(u) {
                                                                switch (u.label) {
                                                                    case 0:
                                                                        return t = (0, h.qw)({
                                                                            asset: n
                                                                        }), i = n.licenseId, r = ((null == e ? void 0 : e.find(function(e) {
                                                                            return e.assetId === String(n.id)
                                                                        })) || {}).subscriptions, c = (s = (0, Z.I)({
                                                                            assetType: t,
                                                                            subscriptions: r,
                                                                            selectedLicenseId: i
                                                                        }) || {}).id, l = s.license, [4, (0, b.Oo)({
                                                                            asset: n,
                                                                            format: z,
                                                                            selectedAssetSize: V,
                                                                            licenseName: l,
                                                                            isVideoComp: U
                                                                        })];
                                                                    case 1:
                                                                        return d = u.sent(), [2, (0, o.Z)((0, a.Z)({}, d, V && y.Bg[V] && {
                                                                            comp_size: V
                                                                        }, t === m.tn && {
                                                                            override_filename: "".concat(f.Oq, "_").concat(n.id, ".").concat(z || d.content_format)
                                                                        }, t === m.w5 && {
                                                                            content_provider: m._R
                                                                        }), {
                                                                            license_name: l,
                                                                            show_modal: !0,
                                                                            subscription_id: c
                                                                        })]
                                                                }
                                                            })
                                                        }), function(e) {
                                                            return s.apply(this, arguments)
                                                        })))];
                                                    case 2:
                                                        return [2, {
                                                            licensingPayload: {
                                                                content: i.sent(),
                                                                license_metadata: q,
                                                                required_cookies: "",
                                                                decode_hadron_ids: n
                                                            },
                                                            orderMetadata: d.map(function(e) {
                                                                var n = e.currency,
                                                                    i = e.description,
                                                                    r = e.descriptionLanguageMap,
                                                                    s = e.id,
                                                                    a = e.itemType,
                                                                    o = e.headline,
                                                                    c = e.licenseId,
                                                                    l = e.preview,
                                                                    u = e.price,
                                                                    d = e.priceType,
                                                                    p = e.src,
                                                                    m = e.thumb,
                                                                    f = e.thumbImageUrl,
                                                                    v = e.title,
                                                                    g = e.type,
                                                                    _ = n,
                                                                    h = u,
                                                                    b = d;
                                                                if (!_ || !h || !b) {
                                                                    var S = eu({
                                                                            asset: e,
                                                                            subscriptions: t
                                                                        }),
                                                                        y = S.creditCurrency,
                                                                        C = S.creditPrice,
                                                                        Z = S.creditType;
                                                                    _ = _ || y, h = h || C, b = d || Z
                                                                }
                                                                return _ && !Y && (Y = _), b && !W && (W = b), {
                                                                    description: (void 0 === r ? {} : r)[$] || i,
                                                                    formattedPrice: G({
                                                                        price: h,
                                                                        localeCurrencyOverride: _,
                                                                        priceType: b
                                                                    }),
                                                                    headline: o,
                                                                    id: s,
                                                                    itemType: a,
                                                                    licenseId: c,
                                                                    licenseName: H({
                                                                        licenseName: c
                                                                    }),
                                                                    price: h,
                                                                    priceType: b,
                                                                    thumbnailSrc: p || f || (void 0 === l ? {} : l).url || m,
                                                                    title: v,
                                                                    type: g
                                                                }
                                                            })
                                                        }]
                                                }
                                            })
                                        }), X = function() {
                                            return ep.apply(this, arguments)
                                        }, ed.label = 1;
                                    case 1:
                                        return ed.trys.push([1, 4, 5, 6]), l(!0), I(""), [4, X({
                                            assets: d.map(function(e) {
                                                return e.mediaItem ? (0, o.Z)((0, a.Z)({}, e.mediaItem), {
                                                    licenseId: e.licenseId
                                                }) : e
                                            }),
                                            isVideoComp: U,
                                            licenseMetadata: q,
                                            selectedAssetSize: V,
                                            subscriptions: t
                                        })];
                                    case 2:
                                        return en = (ee = ed.sent()).licensingPayload, et = ee.orderMetadata, ei = ec[R]({
                                            urlParams: {
                                                licenseeIdentifier: "organization-".concat(null == E ? void 0 : E.organizationId)
                                            }
                                        }).formattedUrl, [4, O.uS.post(ei, en, (0, C.S)({
                                            trackingId: x
                                        }))];
                                    case 3:
                                        return er = ed.sent(), F({
                                            assets: d
                                        }), k({
                                            assets: d,
                                            metadata: _,
                                            licensedContent: (null === (J = (0, D.O)(er.data)) || void 0 === J ? void 0 : null === (Q = J.meta) || void 0 === Q ? void 0 : Q.licensedContent) || []
                                        }), d.some(function(e) {
                                            var n = e.licenseId;
                                            return v.b53.includes(n)
                                        }) || K({
                                            cartTotalCurrency: Y,
                                            filteredOrderMetadata: et.filter(function(e) {
                                                return !(0, S.te)({
                                                    alreadyLicensedAssets: s,
                                                    asset: e
                                                })
                                            }),
                                            licenseMetadata: T,
                                            priceType: W
                                        }), I(p.MR), [2, er];
                                    case 4:
                                        throw es = ed.sent(), el = (0, S.lW)({
                                            error: es,
                                            user: E
                                        }), null === (ea = window.NREUM) || void 0 === ea || null === (eo = ea.addPageAction) || void 0 === eo || eo.call(ea, "Enterprise licensing error", (0, o.Z)((0, a.Z)({}, el), {
                                            alreadyLicensedAssets: s,
                                            assets: d.map(function(e) {
                                                return {
                                                    id: e.id,
                                                    type: e.type
                                                }
                                            }),
                                            cartMetadata: _,
                                            format: z,
                                            licenseeMetadata: T,
                                            isVideoComp: U,
                                            licenseMetadata: q,
                                            licensingType: R,
                                            selectedAssetSize: V
                                        })), A(es), I(p.cM), es;
                                    case 5:
                                        return l(!1), [7];
                                    case 6:
                                        return [2]
                                }
                            })
                        }), function(n) {
                            return e.apply(this, arguments)
                        }), [E, n, $, G, H, t, x, F, k, K]),
                        licensingError: L,
                        licensingStatus: g,
                        setIsLicensing: l,
                        setLicensingStatus: I
                    }
                }
        },
        55112: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return p
                }
            });
            var i = t(70865),
                r = t(81740),
                s = t(94054),
                a = t(55988),
                o = t(52884),
                c = t(67661),
                l = t(9009),
                u = t(3255),
                d = t(43110),
                p = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).queryParams,
                        n = (0, d.jy)().data,
                        t = (0, i.Z)({
                            target: s.dlz,
                            site_name: a.mC,
                            setting_type: s.dlz
                        }, e);
                    return (0, u.ZP)((null == n ? void 0 : n.id) && (null == n ? void 0 : n.organizationId) && (0, r.nI)({
                        queryParams: t
                    }).formattedUrl, function(e) {
                        return c.uS.get(e).then(function(e) {
                            return (0, l.O)(e.data)
                        })
                    }, {
                        dedupingInterval: o.yR
                    })
                }
        }
    }
]);
//# sourceMappingURL=71728-02f27df9984d7951.js.map