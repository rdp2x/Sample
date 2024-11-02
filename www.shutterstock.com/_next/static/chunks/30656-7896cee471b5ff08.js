"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30656], {
        39593: function(e, r, t) {
            t.d(r, {
                B: function() {
                    return u
                }
            });
            var n = t(52322),
                i = t(62197),
                o = t(13980),
                a = t.n(o),
                s = (0, t(8740).ZL)()(function(e) {
                    var r = e.palette,
                        t = e.tokens,
                        n = t.fontSize,
                        i = t.fontWeight;
                    return {
                        pricing: {
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "baseline",
                            justifyContent: "center",
                            gap: "0 5px"
                        },
                        pricingDetails: {
                            fontSize: n.xl,
                            fontWeight: i.normal
                        },
                        pricingDetailsAnnotation: {
                            flexBasis: "100%",
                            fontSize: n.s,
                            fontWeight: i.normal,
                            display: "block",
                            color: r.action.active,
                            whiteSpace: "pre-wrap"
                        }
                    }
                }),
                u = function(e) {
                    var r = e.productPrice,
                        t = e.pricingDetails,
                        o = e.pricingDetailsAnnotation,
                        a = s().classes;
                    return (0, n.jsxs)(i.Z, {
                        className: a.pricing,
                        variant: "h4",
                        align: "center",
                        children: [(0, n.jsx)("span", {
                            children: r
                        }), t && (0, n.jsx)("span", {
                            className: a.pricingDetails,
                            children: " ".concat(t)
                        }), o && (0, n.jsx)("span", {
                            className: a.pricingDetailsAnnotation,
                            children: " ".concat(o)
                        })]
                    })
                };
            a().string.isRequired, a().string, a().string, u.defaultProps = {
                pricingDetails: null,
                pricingDetailsAnnotation: null
            }
        },
        48976: function(e, r, t) {
            t.d(r, {
                uM: function() {
                    return h
                },
                sZ: function() {
                    return y
                }
            });
            var n, i = t(52322),
                o = t(21647),
                a = t(62021),
                s = t(70865),
                u = t(39593),
                c = function(e) {
                    var r = e.initialProps;
                    return (0, i.jsx)(u.B, (0, s.Z)({}, r))
                },
                d = t(47842),
                l = t(88849),
                p = t(2784),
                f = t(96670),
                v = t(87414),
                m = t(22921),
                y = {
                    flagID: "lego-9-inr-pricing-pages",
                    id: "LEGO-171",
                    name: "INR Currency On Pricing Pages",
                    treatments: (n = {}, (0, d.Z)(n, l.NM, function(e) {
                        var r = e.experiment,
                            t = e.initialProps;
                        return (0, p.useEffect)(function() {
                            r.recordImpression()
                        }, []), (0, i.jsx)(c, {
                            initialProps: t
                        })
                    }), (0, d.Z)(n, l.vG, function(e) {
                        var r = e.experiment,
                            t = e.initialProps;
                        (0, p.useEffect)(function() {
                            r.recordImpression()
                        }, []);
                        var n = t.product || {},
                            o = n.prices,
                            a = void 0 === o ? {} : o,
                            u = n.pricesPerSeat,
                            d = n.seatCount,
                            l = (0, v.Yy)({
                                prices: a,
                                localeCurrency: "INR"
                            }),
                            y = a[null == l ? void 0 : l.toLowerCase()],
                            g = (void 0 === u ? {} : u)[null == l ? void 0 : l.toLowerCase()],
                            h = y;
                        g && d && (h = y + g * d);
                        var C = (0, f.Z)((0, s.Z)({}, t), {
                            productPrice: (0, m.P)(h, l)
                        });
                        return (0, i.jsx)(c, {
                            initialProps: C
                        })
                    }), n)
                },
                g = function() {
                    return (0, i.jsx)(o.Z, {
                        variant: "text"
                    })
                },
                h = function(e) {
                    return (0, i.jsx)(a.K, {
                        config: y,
                        initialProps: e,
                        Portal: c,
                        SkeletonLoader: g
                    })
                }
        },
        30656: function(e, r, t) {
            t.d(r, {
                Q: function() {
                    return K
                }
            });
            var n, i = t(98788),
                o = t(47842),
                a = t(70865),
                s = t(96670),
                u = t(87394),
                c = t(5163),
                d = t(27739),
                l = t(44699),
                p = t(60591),
                f = t(65532),
                v = t(75445),
                m = t(23490),
                y = t(88849),
                g = t(4122),
                h = t(87414),
                C = t(48976),
                P = function(e) {
                    var r = e.prices,
                        t = void 0 === r ? {} : r,
                        n = (0, g.a)(C.sZ).experiment,
                        i = (0, m.N)().isBot,
                        o = (0, f.PE)(),
                        a = o.region,
                        s = o.currencyData.currency,
                        u = void 0 === s ? v.a : s;
                    return i || n.isInactiveForUser || n.isLoading ? (0, h.Yy)({
                        prices: t,
                        localeCurrency: u
                    }) : n.variant.treatmentID === y.vG && "IN" === a ? (0, h.Yy)({
                        prices: t,
                        localeCurrency: "INR"
                    }) : (0, h.Yy)({
                        prices: t,
                        localeCurrency: u
                    })
                },
                I = t(66970),
                b = t(81740),
                D = t(56398),
                w = t(97258),
                Z = t(39232),
                N = t(44297),
                x = t(67661),
                _ = t(9009),
                k = function(e) {
                    switch (e.paymentMethod) {
                        case D.M2:
                            return {
                                paymentId: e.id,
                                expirationMonth: e.creditCard.expMonth,
                                expirationYear: e.creditCard.expYear,
                                maskedNumber: e.creditCard.maskedNumber,
                                cardType: e.creditCard.type,
                                isDefault: e.isDefault,
                                paymentMethod: e.paymentMethod,
                                businessUnit: e.businessUnit
                            };
                        case D.Eq:
                            return {
                                paymentId: e.id,
                                bic: e.sepaDirectDebit.bic,
                                maskedIBAN: e.sepaDirectDebit.maskedIban,
                                isDefault: e.isDefault,
                                paymentMethod: e.paymentMethod,
                                businessUnit: e.businessUnit
                            };
                        case D.YR:
                            return {
                                paymentId: e.id,
                                isDefault: e.isDefault,
                                paymentMethod: e.paymentMethod,
                                businessUnit: e.businessUnit,
                                email: e.email
                            };
                        default:
                            return null
                    }
                },
                M = function(e) {
                    var r = e.paymentProfiles,
                        t = void 0 === r ? [] : r;
                    return Array.isArray(t) && 0 !== t.length ? k(t.find(function(e) {
                        return !0 === e.isDefault
                    }) || t[0]) : null
                },
                R = function(e) {
                    var r = e.orderItems,
                        t = e.license,
                        n = e.country;
                    return r.map(function(e) {
                        var r = e.product,
                            i = void 0 === r ? {} : r,
                            o = i.id,
                            s = i.eligibleForRebilling,
                            u = i.seatCount,
                            c = e.productType,
                            l = e.assets,
                            f = e.paymentMethod,
                            v = e.subscriptionIdentifier,
                            m = e.cancellationReason,
                            y = v && m ? {
                                subscription_identifier: v,
                                cancellation_reason: m
                            } : {},
                            g = [];
                        return u && (y.seat_count = u), (null == f ? void 0 : f.type) !== D.xt && (y.subscription_id = null == f ? void 0 : f.id), (null == l ? void 0 : l.length) && (g = l.map(function(e) {
                            var r = e.asset,
                                n = e.selectedAssetSize,
                                i = (null == r ? void 0 : r.type) === Z.tn,
                                o = r.overrideAssetTypeForP31209 ? r.overrideAssetTypeForP31209 : (0, N._L)(r);
                            return (0, a.Z)({
                                type: o,
                                id: r.id,
                                license: t
                            }, r.overrideAssetTypeForP31209 && !i && {
                                format: w.vD,
                                size: w.vD
                            }, (null == n ? void 0 : n.size) && !i && {
                                size: n.size
                            }, (null == n ? void 0 : n.format) && {
                                format: n.format
                            }, o === Z.IK && {
                                headline: r.title
                            })
                        })), y.auto_renewal = s && c === p.Cs && !d.ik.includes(n) && !d.yD.includes(e.product.name), (0, a.Z)({
                            product: {
                                id: o,
                                type: c || p.cs
                            }
                        }, g && {
                            media: g
                        }, Object.keys(y).length > 0 && {
                            meta: y
                        })
                    })
                },
                S = function(e) {
                    var r = e.currency,
                        t = e.country,
                        n = e.paymentProfileId,
                        i = e.items,
                        o = e.couponCode;
                    return {
                        data: {
                            type: "orders",
                            attributes: {
                                currency: r,
                                items: i,
                                country: t,
                                payment_profile_id: n,
                                coupons: o ? [{
                                    type: "coupon",
                                    name: "coupon",
                                    coupon_code: o
                                }] : [],
                                client_data: {},
                                vat_override: e.vatNumber || void 0
                            }
                        }
                    }
                },
                T = (n = (0, i.Z)(function(e) {
                    var r, t, n, i, o, a, s, u, d, l, f, v;
                    return (0, c.__generator)(this, function(c) {
                        return r = e.country, t = e.couponCode, n = e.currency, i = e.orderItems, o = e.paymentProfileId, a = e.vatNumber, u = void 0 === (s = e.configs) ? {} : s, l = R({
                            orderItems: i,
                            license: void 0 === (d = e.license) ? p.ur : d,
                            country: r
                        }), f = (0, b.Tn)().formattedUrl, v = S({
                            country: r,
                            couponCode: t,
                            currency: n,
                            items: l,
                            paymentProfileId: o,
                            vatNumber: a
                        }), [2, x.uS.post(f, v, u).then(function(e) {
                            return {
                                headers: e.headers,
                                data: (0, _.O)(e.data)
                            }
                        })]
                    })
                }), function(e) {
                    return n.apply(this, arguments)
                }),
                U = function(e) {
                    var r = e.couponCode,
                        t = e.productName,
                        n = null;
                    return t === d.Pv && r === d.Xd ? n = d.E6 : t === d.fn && r === d.Q9 && (n = d.Em), n
                },
                A = t(38419),
                j = t(18167),
                z = t(38367),
                E = t(59979),
                O = t(70008),
                L = t(40233),
                q = t(43110),
                F = t(25936),
                B = t(24114),
                Y = t(38204),
                W = t(21805),
                Q = t(5632),
                G = t(2784),
                H = function(e) {
                    var r = e.couponCode,
                        t = (0, Q.useRouter)();
                    return (0, G.useCallback)(function(e) {
                        var n, i = e.orderId,
                            s = (0, A.DW)({
                                language: t.locale,
                                relativePath: (0, Y.U2)({
                                    queryParams: (0, a.Z)({
                                        orderId: i
                                    }, (null == t ? void 0 : t.query) || {}, r ? (n = {}, (0, o.Z)(n, p.d9, r), (0, o.Z)(n, p.Gp, r), n) : {})
                                })
                            });
                        t.push(s)
                    }, [r, t])
                },
                K = function(e) {
                    var r = e.products,
                        t = e.asset,
                        n = e.assetSize,
                        o = e.couponCode,
                        v = e.productId,
                        m = e.productType,
                        y = void 0 === m ? p.Cs : m,
                        g = e.productOverride,
                        C = e.seatCount,
                        b = e.setCreateOrderStatus,
                        D = void 0 === b ? function() {} : b,
                        w = e.setIsInvalidCoupon,
                        Z = void 0 === w ? function() {} : w,
                        x = e.vatNumber,
                        _ = e.license,
                        k = e.isLicenseDrawer,
                        R = void 0 !== k && k,
                        S = e.preset,
                        A = void 0 === S ? void 0 : S,
                        Y = e.existingUserRedirectPath,
                        K = (0, f.PE)().region,
                        V = (0, O.B)().isIndiaRegion,
                        X = (0, q.jy)().data,
                        $ = (0, F.u)().data,
                        J = (0, q.B)(),
                        ee = (0, u.Z)((0, G.useState)(!1), 2),
                        er = ee[0],
                        et = ee[1],
                        en = (0, u.Z)((0, B.Q)(t) || [], 2)[1],
                        ei = (0, G.useMemo)(function() {
                            return null != g ? g : (0, a.Z)({}, (0, h.$A)(r, v), C ? {
                                seatCount: C
                            } : {})
                        }, [g, v, r, C]),
                        eo = null == ei ? void 0 : ei.id,
                        ea = P({
                            prices: null == ei ? void 0 : ei.prices
                        }),
                        es = (0, z.Z)({
                            shouldFetch: !!J
                        }).data,
                        eu = o || ei.couponCode,
                        ec = U({
                            couponCode: eu,
                            productName: null == ei ? void 0 : ei.name
                        }),
                        ed = (0, E.Sl)({
                            queryParams: (0, a.Z)({
                                landing_page: (0, j.t)({
                                    couponCode: eu,
                                    productId: eo,
                                    vatNumber: x,
                                    seatCount: null == ei ? void 0 : ei.seatCount,
                                    doNotRedirect: !0,
                                    asset: V ? t : void 0,
                                    existingUserRedirect: Y || en
                                })
                            }, A && {
                                preset: A
                            }),
                            signUpView: ec
                        }),
                        el = (0, Q.useRouter)().asPath,
                        ep = (0, G.useCallback)(function() {
                            if (window) {
                                var e, r;
                                W.Z.set("referer_page", el), null === (e = window.NREUM) || void 0 === e || null === (r = e.addPageAction) || void 0 === r || r.call(e, "UP3-1623 assign loggedOutHandler authRedirectPath to href", (0, s.Z)((0, a.Z)({}, window.location || {}), {
                                    asPath: el,
                                    authRedirectPath: ed
                                })), window.location.href = ed
                            }
                        }, [el, ed]),
                        ef = M({
                            paymentProfiles: es
                        }),
                        ev = (0, G.useCallback)(function(e) {
                            var r, t, n = {
                                createTime: null == X ? void 0 : X.createTime,
                                component: "useCreateOrder.js",
                                errorCode: e.code,
                                errorStatus: e.status,
                                errorDetail: e.detail,
                                errorMessage: e.message,
                                errorStack: e.stack || "useCreateOrder",
                                errorTitle: e.title,
                                impersonatorId: $.impersonatorId,
                                msg: "UP1-2650 Order creation failed",
                                organizationId: null == X ? void 0 : X.organizationId,
                                referrerPath: window.location.pathname,
                                referrerQuery: window.location.search,
                                userId: null == X ? void 0 : X.id,
                                username: null == X ? void 0 : X.username,
                                isLicenseDrawer: R
                            };
                            null === (r = window.NREUM) || void 0 === r || null === (t = r.noticeError) || void 0 === t || t.call(r, e, n)
                        }, [$, X, R]),
                        em = H({
                            couponCode: eu
                        }),
                        ey = (0, L.d)(),
                        eg = (0, G.useCallback)((0, i.Z)(function() {
                            var e, r, i, o;
                            return (0, c.__generator)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (u.trys.push([0, 3, , 4]), D({
                                                status: "",
                                                error: void 0
                                            }), et(!0), V && d.Tj.includes(eu)) throw Error("free trial offer not available in India");
                                        if (!es) return [3, 2];
                                        return e = t ? {
                                            assets: [{
                                                asset: t,
                                                selectedAssetSize: (0, I.DW)({
                                                    assetType: (0, N.Tp)(t),
                                                    assetSize: n
                                                })
                                            }]
                                        } : {}, [4, T({
                                            country: K,
                                            currency: ea,
                                            paymentProfileId: null == ef ? void 0 : ef.paymentId,
                                            orderItems: [(0, s.Z)((0, a.Z)({}, e), {
                                                product: ei,
                                                productType: y
                                            })],
                                            vatNumber: x,
                                            couponCode: eu,
                                            license: _
                                        })];
                                    case 1:
                                        r = u.sent().data, D({
                                            status: l.MR,
                                            error: void 0
                                        }), et(!1), em({
                                            orderId: r.id
                                        }), ey({
                                            actionName: "convert - order creation success",
                                            customAttributes: {
                                                productName: ei.name,
                                                productType: y,
                                                country: K,
                                                currency: ea,
                                                assetType: (0, N.Tp)(t),
                                                assetSize: n,
                                                license: _,
                                                isLicenseDrawer: R
                                            }
                                        }), u.label = 2;
                                    case 2:
                                        return [3, 4];
                                    case 3:
                                        return i = u.sent(), D({
                                            status: l.cM,
                                            error: i
                                        }), et(!1), (null == i ? void 0 : null === (o = i.detail) || void 0 === o ? void 0 : o.toLowerCase()) === p.LQ && Z(!0), ev(i), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        }), [D, V, eu, es, t, n, K, ea, null == ef ? void 0 : ef.paymentId, ei, y, x, _, R, em, ev, Z, ey]);
                    return {
                        createOrderHandler: J ? eg : ep,
                        isCreateOrderInProgress: er,
                        product: ei
                    }
                }
        },
        38367: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return u
                }
            });
            var n = t(81740),
                i = t(67661),
                o = t(9009),
                a = t(3255),
                s = function(e) {
                    var r = e.queryParams;
                    return (0, n.cF)({
                        queryParams: r
                    }).formattedUrl
                },
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.queryParams,
                        t = e.shouldFetch;
                    return (0, a.ZP)(void 0 === t || t ? s({
                        queryParams: void 0 === r ? {} : r
                    }) : null, function(e) {
                        return i.uS.get(e).then(function(e) {
                            return (0, o.O)(e.data)
                        })
                    })
                }
        }
    }
]);
//# sourceMappingURL=30656-7896cee471b5ff08.js.map