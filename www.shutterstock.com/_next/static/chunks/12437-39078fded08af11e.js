"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [12437, 68657, 67361], {
        70958: function(e, n, t) {
            t.d(n, {
                K: function() {
                    return f
                }
            });
            var r = t(70865),
                a = t(96670),
                i = t(52322),
                o = t(62197),
                u = t(72),
                c = t.n(u),
                l = t(79262),
                s = t.n(l),
                h = (0, t(8740).ZL)()(function(e) {
                    var n = e.tokens,
                        t = n.fontWeight,
                        r = n.spacing;
                    return {
                        unhighlightedText: {
                            fontWeight: t.normal
                        },
                        highlightedText: {
                            fontWeight: t.bold,
                            whiteSpace: "pre"
                        },
                        autocompleteOption: {
                            marginLeft: r.s
                        }
                    }
                }),
                d = function(e) {
                    var n = e.facet,
                        t = e.option,
                        u = e.inputValue,
                        l = e.autoCompleteProps,
                        d = c()(t, u),
                        f = s()(t, d),
                        p = h().classes;
                    return (0, i.jsxs)("li", (0, a.Z)((0, r.Z)({}, l), {
                        children: [f.map(function(e) {
                            return (0, i.jsx)("span", {
                                className: e.highlight ? p.unhighlightedText : p.highlightedText,
                                children: e.text
                            }, "".concat(e.highlight, "-").concat(e.text))
                        }), n && (0, i.jsx)(o.Z, {
                            classes: {
                                root: p.autocompleteOption
                            },
                            variant: "overline",
                            component: "span",
                            color: "textSecondary",
                            children: n
                        })]
                    }))
                },
                f = function(e, n, t) {
                    var r = n.facet,
                        a = n.option,
                        o = t.inputValue;
                    return (0, i.jsx)(d, {
                        facet: r,
                        option: a,
                        inputValue: o,
                        autoCompleteProps: e
                    })
                };
            d.defaultProps = {
                facet: void 0
            }
        },
        27606: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return h
                }
            });
            var r = t(47842),
                a = t(52322),
                i = t(35469),
                o = t(85801),
                u = t(92128),
                c = t(75),
                l = t(59877),
                s = (0, t(8740).ZL)()(function(e) {
                    return {
                        clearInputIcon: {
                            padding: e.tokens.spacing.xs,
                            visibility: "hidden"
                        },
                        clearInputIconVisible: {
                            visibility: "visible"
                        }
                    }
                }),
                h = function(e) {
                    var n = e.clearInput,
                        t = e.inputIsFocused,
                        h = s(),
                        d = h.classes,
                        f = h.cx,
                        p = {
                            closeLabel: (0, ({
                                t: (0, l.$G)(c.WuT).t
                            }).t)("common:actions_close")
                        }.closeLabel;
                    return (0, a.jsx)(i.Z, {
                        position: "end",
                        children: (0, a.jsx)(o.Z, {
                            "aria-label": p,
                            className: f(d.clearInputIcon, (0, r.Z)({}, d.clearInputIconVisible, t)),
                            onClick: n,
                            size: "small",
                            children: (0, a.jsx)(u.x, {
                                fontSize: "small"
                            })
                        })
                    })
                }
        },
        78122: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return s
                }
            });
            var r = t(87394),
                a = t(52322),
                i = t(98720),
                o = t(25237),
                u = t.n(o),
                c = t(8400),
                l = u()(function() {
                    return Promise.all([t.e(66198), t.e(97361), t.e(37546), t.e(35573), t.e(18165)]).then(t.bind(t, 56578)).then(function(e) {
                        return e.FilterPills
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [56578]
                        }
                    },
                    ssr: !1,
                    loading: c.T
                }),
                s = function(e) {
                    var n = e.limit,
                        t = e.isInput;
                    return (0, r.Z)((0, i.Q3)(), 1)[0] ? (0, a.jsx)(l, {
                        limit: n,
                        isInput: t
                    }) : null
                };
            s.defaultProps = {
                limit: -1,
                isInput: !0
            }
        },
        8400: function(e, n, t) {
            t.d(n, {
                T: function() {
                    return u
                }
            });
            var r = t(52322),
                a = t(41075),
                i = t(21647),
                o = (0, t(8740).ZL)()(function(e) {
                    var n = e.spacing;
                    return {
                        pillRoot: {
                            marginRight: n(3)
                        },
                        colorLabel: {
                            paddingRight: 0
                        },
                        appliedFiltersSkeleton: {
                            transform: "none",
                            height: "100%",
                            marginRight: n(3)
                        },
                        gridItemStyles: {
                            paddingBottom: n(3)
                        }
                    }
                }),
                u = function() {
                    var e = o().classes;
                    return (0, r.jsx)(a.ZP, {
                        className: e.gridItemStyles,
                        item: !0,
                        children: (0, r.jsx)(i.Z, {
                            className: e.appliedFiltersSkeleton,
                            height: 32,
                            width: 90
                        })
                    })
                }
        },
        8083: function(e, n, t) {
            t.d(n, {
                E: function() {
                    return k
                }
            });
            var r = t(70865),
                a = t(96670),
                i = t(87394),
                o = t(52322),
                u = t(22653),
                c = t(70958),
                l = t(39232),
                s = t(87042),
                h = t(33002),
                d = t(51793),
                f = t(82087),
                p = t(97024),
                v = t(2784),
                I = t(8740),
                Z = t(47842),
                _ = t(26297),
                m = t(45596),
                E = t(78122),
                g = t(98720),
                A = t(776),
                T = t(75),
                S = t(59877),
                C = t(27606),
                R = t(9867).dp.density.base,
                O = (0, I.ZL)()({
                    input: {
                        "&&&": {
                            paddingTop: 0,
                            paddingBottom: 0,
                            height: R
                        }
                    },
                    inputRoot: {
                        "&&&": {
                            paddingTop: 0,
                            paddingBottom: 0
                        }
                    }
                }),
                y = (0, I.ZL)()(function(e) {
                    var n = e.palette,
                        t = e.tokens,
                        r = t.radius,
                        a = t.spacing;
                    return {
                        textRoot: {
                            width: "100%"
                        },
                        inputRoot: {
                            background: n.background.default,
                            borderRadius: "0 ".concat(r.l, " ").concat(r.l, " 0"),
                            paddingRight: 0,
                            '& input[type="search"]::-webkit-search-cancel-button': {
                                display: "none"
                            }
                        },
                        inputNotFocused: {
                            "&&&": {
                                flexGrow: 0,
                                width: "auto",
                                minWidth: "auto"
                            }
                        },
                        notchedOutline: {
                            border: 0
                        },
                        searchIcon: {
                            margin: a.base
                        }
                    }
                }),
                b = function(e) {
                    var n, t = e.t;
                    return {
                        placeholderCopy: (n = {}, (0, Z.Z)(n, l.k4, t("site-header:search_for_all_images_mobile")), (0, Z.Z)(n, l.pV, t("site-header:search_for_photos")), (0, Z.Z)(n, l.ox, t("site-header:search_for_vectors")), (0, Z.Z)(n, l.X2, t("site-header:search_for_illustrations")), (0, Z.Z)(n, l.xF, t("site-header:search_for_music")), (0, Z.Z)(n, l.pX, t("site-header:search_for_videos")), (0, Z.Z)(n, l.gP, t("ent:search_for_editorial")), (0, Z.Z)(n, l.VT, t("site-header:search_for_editorial_images")), (0, Z.Z)(n, l.nj, t("site-header:search_for_editorial_videos")), (0, Z.Z)(n, l.q$, t("site-header:search_for_recommended_images")), (0, Z.Z)(n, l.tn, t("site-header:search_for_sound_effects")), (0, Z.Z)(n, l.hv, t("site-header:search_for_templates")), (0, Z.Z)(n, l.Nk, t("generate_ai_generator_prompt_placeholder")), (0, Z.Z)(n, l.w5, t("site-header:search_for_3d-objects")), (0, Z.Z)(n, l.e3, t("site-header:search_for_ai_generated_images")), n)
                    }
                },
                L = function(e) {
                    var n, t = e.classesProps,
                        u = e.disableClearable,
                        c = e.handleChange,
                        l = e.handleFocus,
                        s = e.handleBlur,
                        h = e.InputProps,
                        d = e.inputProps,
                        f = e.params,
                        p = e.searchBarType,
                        I = e.value,
                        Z = e.hasFilterPills,
                        R = e.dataOptimize,
                        L = e.overridePlaceholder,
                        P = (0, _.Z)(e, ["classesProps", "disableClearable", "handleChange", "handleFocus", "handleBlur", "InputProps", "inputProps", "params", "searchBarType", "value", "hasFilterPills", "dataOptimize", "overridePlaceholder"]),
                        k = y(),
                        H = k.classes,
                        V = k.cx,
                        D = O().classes,
                        x = b({
                            t: (0, S.$G)(T.WuT).t
                        }).placeholderCopy,
                        N = (0, i.Z)((0, v.useState)(!1), 2),
                        M = N[0],
                        w = N[1],
                        F = (0, g.mN)().filterType,
                        B = null === (n = x[p]) || void 0 === n ? void 0 : n.length;
                    I ? B = I.length : L && (B = L.length);
                    var q = (0, A.yh)().analytics;
                    return (0, o.jsx)(m.Z, (0, a.Z)((0, r.Z)({}, f, P), {
                        onChange: c,
                        placeholder: L || x[p],
                        variant: "outlined",
                        inputProps: (0, a.Z)((0, r.Z)({}, d), {
                            "aria-label": x[p],
                            size: B ? B + 12 : null,
                            value: I,
                            "data-optimize": R
                        }),
                        classes: {
                            root: H.textRoot
                        },
                        InputProps: (0, a.Z)((0, r.Z)({
                            type: "search"
                        }, h), {
                            classes: {
                                root: V(H.inputRoot, D.inputRoot, t.inputRoot),
                                notchedOutline: H.notchedOutline,
                                input: V(D.input, !M && H.inputNotFocused)
                            },
                            endAdornment: (0, o.jsxs)(o.Fragment, {
                                children: [!!F && Z && (0, o.jsx)(E.H, {
                                    limit: M ? 2 : void 0
                                }), !u && I && (0, o.jsx)(C.q, {
                                    clearInput: function() {
                                        return c({
                                            target: {
                                                value: ""
                                            }
                                        })
                                    },
                                    inputIsFocused: M
                                })]
                            }),
                            onBlur: function() {
                                s(), w(!1)
                            },
                            onFocus: function() {
                                q.inlineClick("searchBar.textField"), l(), w(!0)
                            }
                        })
                    }))
                };
            L.defaultProps = {
                classesProps: {},
                disableClearable: !1,
                handleChange: function() {},
                handleFocus: function() {},
                handleBlur: function() {},
                hasFilterPills: !1,
                InputProps: {},
                inputProps: {},
                params: {},
                value: "",
                dataOptimize: null,
                overridePlaceholder: void 0
            };
            var P = (0, I.ZL)()(function(e) {
                    return {
                        dynamicSearchBar: {
                            width: "100%"
                        },
                        autocompleteRoot: {
                            "& .MuiInputBase-root": {
                                flexWrap: "nowrap"
                            },
                            "&&& .MuiInputBase-adornedEnd": {
                                paddingRight: 0
                            }
                        },
                        autocompleteOption: {
                            marginLeft: e.tokens.spacing.s
                        }
                    }
                }),
                k = function(e) {
                    var n = e.searchTerm,
                        t = e.handleLoad,
                        I = e.selectedAsset,
                        Z = e.inputRef,
                        _ = e.hasFilterPills,
                        m = e.isTermChangedExternally,
                        E = e.customSearch,
                        g = e.overridePlaceholder,
                        A = (0, i.Z)((0, v.useState)(!1), 2),
                        T = A[0],
                        S = A[1],
                        C = (0, i.Z)((0, v.useState)(!1), 2),
                        R = C[0],
                        y = C[1],
                        b = (0, v.useRef)(),
                        k = P().classes,
                        H = O().classes,
                        V = (0, d.Rx)({
                            assetType: I
                        }),
                        D = V.doSearch,
                        x = V.selectMusicAutocomplete,
                        N = (0, p.JI)().assetType,
                        M = (0, f.M)({
                            initialSearchTerm: n,
                            assetType: I,
                            userGeneratedEvent: R
                        }),
                        w = M.handleChange,
                        F = M.options,
                        B = M.setInputValue,
                        q = M.value,
                        U = function() {
                            y(!0)
                        },
                        j = function() {
                            return y(!1)
                        },
                        G = function(e, n) {
                            return E ? E(e) : D(e, n)
                        },
                        z = (0, v.useRef)(n);
                    n !== z.current && (B(n), z.current = n), b.current = !1, (0, v.useEffect)(function() {
                        t && t()
                    }, [t]);
                    var X = (0, v.useCallback)(function(e) {
                        return (0, o.jsx)(L, {
                            handleChange: w,
                            hasFilterPills: _,
                            inputProps: (0, a.Z)((0, r.Z)({}, e.inputProps), {
                                "data-automation": "SearchBar_Loaded"
                            }),
                            InputProps: (0, a.Z)((0, r.Z)({}, e.InputProps), {
                                inputRef: Z
                            }),
                            params: e,
                            searchBarType: I,
                            value: q,
                            handleFocus: U,
                            handleBlur: j,
                            dataOptimize: "search-bar-input",
                            overridePlaceholder: g
                        })
                    }, [w, _, Z, I, q, g]);
                    return (0, o.jsx)(u.Z, {
                        autoComplete: !0,
                        classes: {
                            root: k.autocompleteRoot,
                            inputRoot: H.inputRoot,
                            input: H.input
                        },
                        className: k.dynamicSearchBar,
                        freeSolo: !0,
                        getOptionLabel: function(e) {
                            var n = e.option;
                            return void 0 === n ? "" : n
                        },
                        onChange: function(e, n, t) {
                            var r = (0, h.l)(t);
                            if (((0, h.B)(t) && N === I || r) && !T) {
                                b.current = !0;
                                var a = F.findIndex(function(e) {
                                    return e.option === n.option
                                });
                                if (I === l.xF && r) B(""), x(n, a + 1);
                                else {
                                    var i = "string" == typeof n ? n : n.option;
                                    B(i), G(i, a + 1), S(!1)
                                }
                            }
                        },
                        onKeyDown: function(e) {
                            e.key !== s.q7 || b.current || (S(!0), N !== I || m ? (G(q), S(!1)) : "" === q && (G(), S(!1)))
                        },
                        options: F,
                        renderInput: X,
                        renderOption: c.K,
                        value: "",
                        filterOptions: function(e) {
                            return e
                        }
                    })
                };
            k.defaultProps = {
                hasFilterPills: void 0,
                isTermChangedExternally: !1,
                inputRef: {},
                searchTerm: "",
                handleLoad: void 0,
                customSearch: void 0,
                overridePlaceholder: void 0
            }
        },
        16133: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return l
                }
            });
            var r = t(52322),
                a = t(59481),
                i = t(67361),
                o = t(75),
                u = t(59877),
                c = (0, t(8740).ZL)()(function(e) {
                    var n = e.palette,
                        t = e.tokens.border;
                    return {
                        searchIcon: {
                            borderRadius: "0 ".concat(t.radius.l, " ").concat(t.radius.l, " 0"),
                            backgroundColor: n.secondary.main,
                            color: n.secondary.contrastText,
                            "&:hover": {
                                backgroundColor: n.secondary.dark
                            }
                        }
                    }
                }),
                l = function(e) {
                    var n = e.className,
                        t = e.onClick,
                        l = e.clickTrack,
                        s = (0, u.$G)(o.C8c).t,
                        h = c(),
                        d = h.classes,
                        f = h.cx;
                    return (0, r.jsx)(a.h, {
                        clickTrack: l,
                        "aria-label": s("common:actions_search"),
                        classes: {
                            root: f(n, d.searchIcon)
                        },
                        color: "secondary",
                        onClick: t,
                        size: "large",
                        children: (0, r.jsx)(i.Search, {})
                    })
                };
            l.defaultProps = {
                clickTrack: void 0,
                className: null,
                onClick: function() {}
            }
        },
        87042: function(e, n, t) {
            t.d(n, {
                Ft: function() {
                    return a
                },
                Mf: function() {
                    return u
                },
                hY: function() {
                    return o
                },
                pe: function() {
                    return r
                },
                q7: function() {
                    return i
                },
                zD: function() {
                    return c
                }
            });
            var r = "ArrowLeft",
                a = "ArrowRight",
                i = "Enter",
                o = "Escape",
                u = "Tab",
                c = "submit"
        },
        31045: function(e, n, t) {
            t.d(n, {
                $: function() {
                    return a
                }
            });
            var r = t(39232),
                a = {
                    apiQuery: "filter[assetTypes]",
                    defaultValue: null,
                    buildApiValue: function(e) {
                        return e === r.pX ? r.FM : r.Y_
                    },
                    primaryText: "ent:filters_product_type",
                    urlValue: t(18505).cb,
                    columnCount: 2,
                    showInSearchBar: !1,
                    filters: [{
                        label: "common:links_images",
                        isDefault: !0,
                        value: r.k4
                    }, {
                        label: "contributor_portfolio:tab_label_videos",
                        value: r.pX
                    }]
                }
        },
        91407: function(e, n, t) {
            t.d(n, {
                d: function() {
                    return s
                },
                e: function() {
                    return l
                }
            });
            var r = t(70865),
                a = t(96670),
                i = t(50930),
                o = t(39232),
                u = t(18505),
                c = [o.pV, o.ox, o.X2, o.w5, "all"],
                l = {
                    apiQuery: "filter[image_type]",
                    defaultValue: null,
                    buildApiValue: function(e) {
                        return c.includes(e) ? e : null
                    },
                    primaryText: "image:filters_image_type",
                    urlValue: u.Tv,
                    getPillLabel: function(e, n) {
                        return (0, e.t)(n.label)
                    },
                    showInSearchBar: !0,
                    filters: [{
                        label: "common:filters_all_image_types",
                        isDefault: !0,
                        analyticsLabel: "allimages",
                        urlValuesToRemove: [o.pV, o.ox, o.X2, o.w5],
                        value: null
                    }, {
                        label: "common:filters_image_type_photo",
                        analyticsLabel: "photos",
                        value: o.pV
                    }, {
                        label: "common:filters_image_type_vector",
                        analyticsLabel: "vectors",
                        value: o.ox
                    }, {
                        label: "common:filters_image_type_illustration",
                        analyticsLabel: "illustrations",
                        value: o.X2
                    }]
                },
                s = (0, a.Z)((0, r.Z)({}, l), {
                    filters: (0, i.Z)(l.filters).concat([{
                        label: "common:filters_image_type_3d",
                        analyticsLabel: "3d-objects",
                        value: o.w5
                    }])
                })
        },
        3704: function(e, n, t) {
            t.d(n, {
                Ib: function() {
                    return es
                },
                QS: function() {
                    return Q
                },
                QV: function() {
                    return w
                },
                RA: function() {
                    return $
                },
                RX: function() {
                    return eo
                },
                Ud: function() {
                    return el
                },
                WF: function() {
                    return en
                },
                eb: function() {
                    return eu
                },
                et: function() {
                    return Y
                },
                hI: function() {
                    return eh
                },
                iA: function() {
                    return ec
                },
                ky: function() {
                    return ea
                },
                kz: function() {
                    return W
                },
                lC: function() {
                    return M
                },
                n8: function() {
                    return F
                },
                p0: function() {
                    return j
                },
                pR: function() {
                    return X
                },
                q2: function() {
                    return B
                },
                tU: function() {
                    return U
                },
                tV: function() {
                    return q
                },
                y8: function() {
                    return er
                }
            });
            var r, a, i, o, u = t(47842),
                c = t(70865),
                l = t(96670),
                s = t(26297),
                h = t(87394),
                d = t(50930),
                f = t(29858),
                p = t(18505),
                v = t(58370),
                I = t(98382),
                Z = t(27586),
                _ = t(18348),
                m = t(51578),
                E = t(87152),
                g = t(27764),
                A = /^(\d+)-(\d+)$/,
                T = {
                    px: 1,
                    in_300: 300,
                    in_150: 150,
                    in_50: 50,
                    cm_300: 118.11,
                    cm_150: 59.055,
                    cm_50: 19.685
                },
                S = (a = {}, (0, u.Z)(a, p.hh.IMAGE_SEARCH, v.cJ), (0, u.Z)(a, p.hh.AI_SEARCH, v.cJ), (0, u.Z)(a, p.hh.PREDICT_SEARCH, I.Y), (0, u.Z)(a, p.hh.MUSIC_SEARCH, v.Bx), (0, u.Z)(a, p.hh.SFX_SEARCH, v.O2), (0, u.Z)(a, p.hh.VIDEO_SEARCH, v.EM), (0, u.Z)(a, p.hh.VIDEO_EDITORIAL_SEARCH, v.WV), (0, u.Z)(a, p.hh.TEMPLATES_SEARCH, v.Hr), (0, u.Z)(a, p.hh.EDITORIAL_IMAGE_SEARCH, v.Zz), (0, u.Z)(a, p.hh.EDITORIAL_VIDEO_SEARCH, v.ii), (0, u.Z)(a, p.hh.LICENSE_HISTORY, function(e, n) {
                    return (0, Z.P)({
                        assetType: n,
                        query: e
                    })
                }), (0, u.Z)(a, p.hh.EDITORIAL_LATEST_EVENTS, _.Sf), (0, u.Z)(a, p.hh.EDITORIAL_PUBLICATION, _.tK), (0, u.Z)(a, p.hh.EDITORIAL_COMPILATION, _.aW), (0, u.Z)(a, p.hh.CATALOG, g.Wx), (0, u.Z)(a, p.hh.COLLECTIONS, g.Wx), (0, u.Z)(a, p.hh.ACCOUNT_INVOICES, function(e) {
                    return (0, m.Oo)({
                        query: e
                    })
                }), a),
                C = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.withPathname,
                        a = void 0 === r || r;
                    return function(n) {
                        return function(r) {
                            var i, o = e.reduce(function(e, n) {
                                var t = r[n];
                                return t && (e[n] = t), e
                            }, {});
                            return n((0, c.Z)({}, Object.keys(o).length ? o : {}, a ? {
                                pathname: null === (i = t.g.location) || void 0 === i ? void 0 : i.pathname
                            } : {}))
                        }
                    }
                },
                R = function(e) {
                    return function(n) {
                        return function(t) {
                            for (var r = t[e], a = arguments.length, i = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                            return n.apply(void 0, [(0, c.Z)({}, r ? (0, u.Z)({}, e, r) : {})].concat((0, d.Z)(i)))
                        }
                    }
                },
                O = R("term"),
                y = R("q"),
                b = C(["q", "sort"]),
                L = C(["slug", "sort"]),
                P = C(["slug", p.dp]),
                k = function(e) {
                    return function(n) {
                        for (var t = n.term, r = n[p.cb], a = arguments.length, i = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return e.apply(void 0, [(0, c.Z)({}, t ? {
                            term: t
                        } : {}, r && (0, u.Z)({}, p.cb, r))].concat((0, d.Z)(i)))
                    }
                },
                H = (0, l.Z)((0, c.Z)({}, S), (i = {}, (0, u.Z)(i, p.hh.IMAGE_SEARCH, (r = v.cJ, function(e) {
                    for (var n, t = e.term, a = e[p.HX], i = e[p.Aw], o = e[p.Tv], l = arguments.length, s = Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++) s[h - 1] = arguments[h];
                    return r.apply(void 0, [(0, c.Z)({}, t ? {
                        term: t
                    } : {}, a && i ? (0, c.Z)((n = {}, (0, u.Z)(n, p.HX, a), (0, u.Z)(n, p.Aw, i), n), o ? (0, u.Z)({}, p.Tv, o) : {}) : {})].concat((0, d.Z)(s)))
                })), (0, u.Z)(i, p.hh.PREDICT_SEARCH, y(I.Y)), (0, u.Z)(i, p.hh.MUSIC_SEARCH, O(v.Bx)), (0, u.Z)(i, p.hh.SFX_SEARCH, O(v.O2)), (0, u.Z)(i, p.hh.VIDEO_SEARCH, O(v.EM)), (0, u.Z)(i, p.hh.VIDEO_EDITORIAL_SEARCH, O(v.WV)), (0, u.Z)(i, p.hh.EDITORIAL_IMAGE_SEARCH, k(v.Zz)), (0, u.Z)(i, p.hh.EDITORIAL_VIDEO_SEARCH, k(v.ii)), (0, u.Z)(i, p.hh.EDITORIAL_LATEST_EVENTS, function(e) {
                    e.publicationRoot;
                    var n = (0, s.Z)(e, ["publicationRoot"]);
                    return (0, _.Sf)(n)
                }), (0, u.Z)(i, p.hh.EDITORIAL_PUBLICATION, function(e) {
                    e.attendees;
                    var n = (0, s.Z)(e, ["attendees"]);
                    return (0, _.tK)(n)
                }), (0, u.Z)(i, p.hh.EDITORIAL_COMPILATION, function(e) {
                    e.attendees;
                    var n = (0, s.Z)(e, ["attendees"]);
                    return (0, _.aW)(n)
                }), (0, u.Z)(i, p.hh.TEMPLATES_SEARCH, O(v.Hr)), (0, u.Z)(i, p.hh.CATALOG, b(g.Wx)), (0, u.Z)(i, p.hh.COLLECTIONS, L(g.Wx)), (0, u.Z)(i, p.hh.ACCOUNT_INVOICES, P(function(e) {
                    return (0, m.Oo)({
                        query: e
                    })
                })), i)),
                V = "mreleased",
                D = ["age", "ethnicity", "gender", "number_of_people"],
                x = ["min_height", "min_width"],
                N = function(e) {
                    return x.includes(e)
                },
                M = function(e) {
                    var n = e.currentValue,
                        t = e.showAsAppliedForValues;
                    return t && Array.isArray(t) && t.filter(function(e) {
                        return Array.isArray(n) ? n.includes(e) : n === e
                    }).length > 0
                },
                w = function(e) {
                    var n, t = e.router,
                        r = e.urlValue;
                    return null == t ? void 0 : null === (n = t.query) || void 0 === n ? void 0 : n[r]
                },
                F = function(e) {
                    var n = e.router,
                        t = e.urlValue,
                        r = e.value,
                        a = e.isDefault,
                        i = e.urlValuesToRemove,
                        o = e.showAsAppliedForValues,
                        u = w({
                            router: n,
                            urlValue: t
                        }),
                        c = M({
                            currentValue: u,
                            showAsAppliedForValues: o
                        }),
                        l = Array.isArray(u) ? u.includes(r) : u === r;
                    return i ? !i.some(function(e) {
                        return u === e
                    }) : l || c || !u && a
                },
                B = function(e, n) {
                    return (n ? H : S)[e]
                },
                q = function(e) {
                    var n = e.arr,
                        t = e.element,
                        r = n.includes(t) ? n.filter(function(e) {
                            return e !== t
                        }) : (0, d.Z)(n).concat([t]);
                    return r.length ? r : null
                },
                U = function(e) {
                    var n = e.currentValue,
                        t = e.value;
                    return t === n ? null : t
                },
                j = function(e, n) {
                    var t = n.filters,
                        r = (0, s.Z)(n, ["filters"]);
                    return (0, l.Z)((0, c.Z)({}, r), {
                        filters: t.filter(function(n) {
                            return n.tags.includes(e)
                        })
                    })
                },
                G = (o = {}, (0, u.Z)(o, p.mm, function(e) {
                    return !!e && e !== p.Rr.SHUTTERSTOCK && ["channel", e]
                }), (0, u.Z)(o, p.rH, function(e) {
                    return !!e && [p.rH, e]
                }), (0, u.Z)(o, "image_type", function(e) {
                    return !!e && "all" !== e && ["image_type", e]
                }), (0, u.Z)(o, "media_type", function(e) {
                    return !!e && "all" !== e && ["media_type", e]
                }), (0, u.Z)(o, "page", function(e) {
                    return e && Number(e) > 1 && ["page", e]
                }), (0, u.Z)(o, "folderView", function(e) {
                    return "false" === String(e) && ["folderView", e]
                }), (0, u.Z)(o, "missingAssetId", function() {
                    return null
                }), (0, u.Z)(o, "lng", function() {
                    return null
                }), (0, u.Z)(o, "subpath", function() {
                    return null
                }), (0, u.Z)(o, "host", function() {
                    return null
                }), (0, u.Z)(o, "unlimited", function(e) {
                    return !1 === e || "false" === e ? ["unlimited", !1] : null
                }), o),
                z = function(e) {
                    var n = (0, h.Z)(e, 2),
                        t = n[0],
                        r = n[1];
                    return (G[t] || function(e) {
                        return !!e && [t, e]
                    })(r)
                },
                X = function(e) {
                    return Object.entries(e).reduce(function(e, n) {
                        var t = (0, h.Z)(n, 2),
                            r = z([t[0], t[1]]);
                        return (0, c.Z)({}, e, r ? (0, E.s)([r]) : {})
                    }, {})
                },
                W = function(e) {
                    var n = e.filterId,
                        t = e.toggledValue;
                    return e.router.route.startsWith((0, v.Zz)()[0]) ? [] : n === V && ["false", null].includes(t) ? D.map(function(e) {
                        return {
                            urlValue: e,
                            value: null
                        }
                    }) : D.includes(n) && null !== t ? [{
                        urlValue: V,
                        value: "true"
                    }] : []
                },
                $ = function(e) {
                    var n = e.filterId,
                        t = e.currentValue,
                        r = e.router;
                    return N(n) && null === t && 1 === Object.keys(r.query).filter(function(e) {
                        return N(e)
                    }).length ? [{
                        urlValue: "measurement",
                        value: null
                    }] : []
                },
                Y = function(e) {
                    return "publicationRoot" === e.filterId ? [{
                        urlValue: "folder",
                        value: null
                    }] : []
                },
                Q = function(e) {
                    var n = e.filterId,
                        t = e.currentValue;
                    return "color" !== n || t ? [] : [{
                        urlValue: "showSolidBackgrounds",
                        value: null
                    }]
                },
                J = /\s>\s|\s\/\s|\s/g,
                K = /\.|&/g,
                ee = /\s>\s/,
                en = function(e) {
                    return e.replace(J, "-").replace(K, "").toLowerCase()
                },
                et = function(e) {
                    var n = e.split(ee);
                    return n[n.length - 1]
                },
                er = function(e, n, t) {
                    var r;
                    return {
                        value: en(e),
                        label: n === f.aA ? t[e] : (r = et(e), "common:filters_".concat(n, "_").concat(en(r).replace("/", "-")))
                    }
                },
                ea = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "OR",
                        t = Array.isArray(e) ? e : [e];
                    return t.length > 1 ? "(".concat(t.join(" ".concat(n, " ")), ")") : t[0]
                },
                ei = function(e) {
                    var n = A.exec(e);
                    if (n) {
                        var t = Number(n[1]),
                            r = Number(n[2]);
                        if (t <= r) return {
                            min: t,
                            max: r
                        }
                    }
                    return null
                },
                eo = function(e) {
                    var n = ei(e);
                    if (n) {
                        var t = n.min,
                            r = n.max;
                        return "[".concat(t, " TO ").concat(r, "]")
                    }
                    return null
                },
                eu = function(e) {
                    var n = e.reduce(function(e, n) {
                        var t = n.value,
                            r = n.children;
                        return (0, l.Z)((0, c.Z)({}, e), (0, u.Z)({}, t, (void 0 === r ? [] : r).map(function(e) {
                            return e.value
                        })))
                    });
                    return function(e) {
                        var t, r = [].concat(e);
                        return r.filter(function(e) {
                            var t;
                            return !(null === (t = n[e]) || void 0 === t ? void 0 : t.some(function(e) {
                                return r.includes(e)
                            }))
                        }).join(",")
                    }
                },
                ec = function(e, n) {
                    return Math.floor(e * (T[n] || 1))
                },
                el = function(e) {
                    return function(n, t) {
                        var r = n.format,
                            a = n.t,
                            i = t.value,
                            o = (0, h.Z)(i.split("-"), 2),
                            u = o[0],
                            c = o[1];
                        return a(e, {
                            MIN: r(u),
                            MAX: r(c),
                            interpolation: {
                                unescapePrefix: "DASH"
                            }
                        })
                    }
                },
                es = function(e) {
                    return e.replace(/-/g, "_").toUpperCase()
                },
                eh = function(e) {
                    var n = e.isModelReleased,
                        t = e.peopleNumber;
                    return t && "false" !== n ? t : void 0 !== n ? "true" === n ? "*" : "0" : void 0
                }
        },
        33002: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return a
                },
                l: function() {
                    return r
                }
            });
            var r = function(e) {
                    return "selectOption" === e
                },
                a = function(e) {
                    return "createOption" === e
                }
        },
        74173: function(e, n, t) {
            t.d(n, {
                N4: function() {
                    return I
                }
            });
            var r = t(50930),
                a = t(81740),
                i = t(39232),
                o = t(85330),
                u = t(52884),
                c = t(9823),
                l = t(67661),
                s = t(9009),
                h = t(27764),
                d = t(5632),
                f = t(2784),
                p = t(3255),
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.assetType,
                        t = void 0 === n ? i.Y_ : n,
                        r = (0, c.D)().isBrandSstk ? o.Oq : o.$S;
                    return (0, p.ZP)((0, a.Zg)({
                        queryParams: {
                            assetType: t,
                            channel: r
                        }
                    }).formattedUrl, function(e) {
                        return l.uS.get(e).then(function(e) {
                            return (0, s.O)(e.data)
                        })
                    }, {
                        dedupingInterval: u.Ho
                    }).data
                },
                I = function() {
                    var e = (0, d.useRouter)().asPath,
                        n = (0, h.tc)(e),
                        t = v({
                            assetType: i._M[n]
                        });
                    return {
                        filters: (0, f.useMemo)(function() {
                            var e = (null == t ? void 0 : t.map(function(e) {
                                return {
                                    label: e.label,
                                    value: e.id
                                }
                            })) || [];
                            return [{
                                label: "ent:filters_editorial_all_content",
                                value: void 0,
                                isDefault: !0
                            }].concat((0, r.Z)(e))
                        }, [t]),
                        key: "collections"
                    }
                }
        },
        98720: function(e, n, t) {
            t.d(n, {
                Q3: function() {
                    return p
                },
                bO: function() {
                    return _
                },
                e$: function() {
                    return I
                },
                mN: function() {
                    return f
                }
            });
            var r, a, i = t(47842),
                o = t(18505),
                u = t(75),
                c = t(27764),
                l = t(5632),
                s = t(59877),
                h = t(87111),
                d = function(e) {
                    var n = e.pathname;
                    switch ((0, c.oY)(n).replace(/\/workbench/, "").replace(/\/\[term\]/, "")) {
                        case "/search":
                        case "/s":
                            return o.hh.IMAGE_SEARCH;
                        case "/video/search":
                            return o.hh.VIDEO_SEARCH;
                        case "/video/editorial/search":
                            return o.hh.VIDEO_EDITORIAL_SEARCH;
                        case "/music/search":
                            return o.hh.MUSIC_SEARCH;
                        case "/sound-effects/search":
                            return o.hh.SFX_SEARCH;
                        case "/account/invoices/[slug]":
                            return o.hh.ACCOUNT_INVOICES;
                        case "/editorial/search":
                            return o.hh.EDITORIAL_IMAGE_SEARCH;
                        case "/editorial/video/search":
                            return o.hh.EDITORIAL_VIDEO_SEARCH;
                        case "/editorial/[publicationRoot]":
                        case "/editorial/latest-events":
                            return o.hh.EDITORIAL_LATEST_EVENTS;
                        case "/editorial/livefeed/[permalink]":
                        case "/editorial/[publicationRoot]/[permalink]":
                            return o.hh.EDITORIAL_PUBLICATION;
                        case "/editorial/compilations/[permalink]":
                            return o.hh.EDITORIAL_COMPILATION;
                        case "/catalog":
                        case "/catalog/uploads":
                        case "/catalog/licenses":
                        case "/catalog/designs":
                        case "/catalog/shared-with-you":
                            return o.hh.CATALOG;
                        case "/catalog/collections":
                        case "/catalog/collections/[slug]":
                            return o.hh.COLLECTIONS;
                        case "/templates/search":
                            return o.hh.TEMPLATES_SEARCH;
                        case "/predict":
                        case "/predict/[id]":
                            return o.hh.PREDICT_SEARCH;
                        default:
                            if (n.startsWith("/licenses")) return o.hh.LICENSE_HISTORY;
                            return null
                    }
                },
                f = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).overrideFilterType,
                        n = (0, l.useRouter)(),
                        t = n.pathname,
                        r = n.query;
                    return {
                        filterType: e || d({
                            pathname: t,
                            query: r
                        }),
                        query: r
                    }
                },
                p = function() {
                    var e = (0, l.useRouter)().query,
                        n = f().filterType,
                        t = (0, h.k)({
                            filterType: n
                        });
                    return [t && Object.values(t).some(function(n) {
                        return !!e[n.urlValue]
                    }), !!t]
                },
                v = (r = {}, (0, i.Z)(r, o.hh.ACCOUNT_INVOICES, u.b_Q), (0, i.Z)(r, o.hh.IMAGE_SEARCH, u.Zae), (0, i.Z)(r, o.hh.VIDEO_SEARCH, u.A89), (0, i.Z)(r, o.hh.VIDEO_EDITORIAL_SEARCH, u.n5R), (0, i.Z)(r, o.hh.MUSIC_SEARCH, u.mE7), (0, i.Z)(r, o.hh.SFX_SEARCH, u.nln), (0, i.Z)(r, o.hh.TEMPLATES_SEARCH, u.vkC), (0, i.Z)(r, o.hh.EDITORIAL_IMAGE_SEARCH, u.C_m), (0, i.Z)(r, o.hh.EDITORIAL_VIDEO_SEARCH, u.n5R), (0, i.Z)(r, o.hh.LICENSE_HISTORY, u.nMb), (0, i.Z)(r, o.hh.EDITORIAL_LATEST_EVENTS, u.RMh), (0, i.Z)(r, o.hh.EDITORIAL_PUBLICATION, u.kq$), (0, i.Z)(r, o.hh.EDITORIAL_COMPILATION, u.kq$), (0, i.Z)(r, o.hh.CATALOG, u.tcn), (0, i.Z)(r, o.hh.COLLECTIONS, u.tcn), (0, i.Z)(r, o.hh.AI_SEARCH, u.mU8), (0, i.Z)(r, o.hh.PREDICT_SEARCH, u.Zae), r),
                I = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).overrideFilterType,
                        n = v[f({
                            overrideFilterType: e
                        }).filterType],
                        t = (0, s.$G)(n);
                    return {
                        t: t.t,
                        ready: t.ready,
                        ns: n
                    }
                },
                Z = (a = {}, (0, i.Z)(a, o.hh.IMAGE_SEARCH, u.VIT), (0, i.Z)(a, o.hh.VIDEO_SEARCH, u.VIT), (0, i.Z)(a, o.hh.VIDEO_EDITORIAL_SEARCH, u.U2P), (0, i.Z)(a, o.hh.MUSIC_SEARCH, u.VIT), (0, i.Z)(a, o.hh.EDITORIAL_IMAGE_SEARCH, u.U2P), (0, i.Z)(a, o.hh.EDITORIAL_VIDEO_SEARCH, u.U2P), (0, i.Z)(a, o.hh.EDITORIAL_LATEST_EVENTS, u.RMh), (0, i.Z)(a, o.hh.ACCOUNT_INVOICES, u.U2P), (0, i.Z)(a, o.hh.CATALOG, u.tcn), (0, i.Z)(a, o.hh.COLLECTIONS, u.tcn), (0, i.Z)(a, o.hh.PREDICT_SEARCH, u.VIT), a),
                _ = function() {
                    var e = Z[f().filterType],
                        n = (0, s.$G)(e);
                    return {
                        t: n.t,
                        ready: n.ready,
                        ns: e
                    }
                }
        },
        87111: function(e, n, t) {
            t.d(n, {
                k: function() {
                    return d
                }
            });
            var r, a = t(47842),
                i = t(70865),
                o = t(96670),
                u = t(87394),
                c = t(18505),
                l = t(74173),
                s = t(2784),
                h = (r = {}, (0, a.Z)(r, c.hh.EDITORIAL_IMAGE_SEARCH, l.N4), (0, a.Z)(r, c.hh.EDITORIAL_VIDEO_SEARCH, l.N4), (0, a.Z)(r, c.hh.VIDEO_EDITORIAL_SEARCH, l.N4), r),
                d = function(e) {
                    var n = e.filterType,
                        r = void 0 === n ? c.hh.IMAGE_SEARCH : n,
                        l = (0, u.Z)((0, s.useState)(!1), 2),
                        d = l[0],
                        f = l[1],
                        p = (0, u.Z)((0, s.useState)(null), 2),
                        v = p[0],
                        I = p[1],
                        Z = (h[r] || function() {
                            return {}
                        })(),
                        _ = Z.filters,
                        m = Z.key,
                        E = (0, s.useCallback)(function(e) {
                            I((0, i.Z)({}, e, e[m] ? (0, a.Z)({}, m, (0, o.Z)((0, i.Z)({}, e[m]), {
                                filters: _
                            })) : {})), f(!0)
                        }, [_, m, I, f]);
                    return (0, s.useEffect)(function() {
                        switch (r) {
                            case c.hh.MUSIC_SEARCH:
                                Promise.all([t.e(91607), t.e(65253)]).then(t.bind(t, 91607)).then(E);
                                break;
                            case c.hh.SFX_SEARCH:
                                t.e(23770).then(t.bind(t, 6737)).then(E);
                                break;
                            case c.hh.VIDEO_SEARCH:
                                t.e(41053).then(t.bind(t, 64277)).then(E);
                                break;
                            case c.hh.IMAGE_SEARCH:
                            case c.hh.PREDICT_SEARCH:
                                Promise.all([t.e(46287), t.e(8691)]).then(t.bind(t, 46287)).then(E);
                                break;
                            case c.hh.EDITORIAL_IMAGE_SEARCH:
                                Promise.all([t.e(97361), t.e(93613)]).then(t.bind(t, 78069)).then(E);
                                break;
                            case c.hh.VIDEO_EDITORIAL_SEARCH:
                            case c.hh.EDITORIAL_VIDEO_SEARCH:
                                Promise.all([t.e(97361), t.e(85457)]).then(t.bind(t, 23389)).then(E);
                                break;
                            case c.hh.EDITORIAL_PUBLICATION:
                            case c.hh.EDITORIAL_COMPILATION:
                                t.e(46483).then(t.bind(t, 49243)).then(E);
                                break;
                            case c.hh.LICENSE_HISTORY:
                                t.e(4095).then(t.bind(t, 4774)).then(E);
                                break;
                            case c.hh.EDITORIAL_LATEST_EVENTS:
                                t.e(22251).then(t.bind(t, 76342)).then(E);
                                break;
                            case c.hh.ACCOUNT_INVOICES:
                                t.e(83483).then(t.bind(t, 24236)).then(E);
                                break;
                            case c.hh.CATALOG:
                            case c.hh.COLLECTIONS:
                                t.e(79162).then(t.bind(t, 66867)).then(E);
                                break;
                            case c.hh.AI_SEARCH:
                                t.e(49194).then(t.bind(t, 20835)).then(E);
                                break;
                            case c.hh.TEMPLATES_SEARCH:
                                t.e(55980).then(t.bind(t, 26123)).then(E)
                        }
                    }, [r, E]), d && v
                }
        },
        51793: function(e, n, t) {
            t.d(n, {
                DI: function() {
                    return F
                },
                Iw: function() {
                    return U
                },
                Rx: function() {
                    return w
                },
                zU: function() {
                    return B
                }
            });
            var r = t(47842),
                a = t(70865),
                i = t(96670),
                o = t(26297),
                u = t(87394),
                c = t(23945),
                l = t(81740),
                s = t(66358),
                h = t(39232),
                d = t(29858),
                f = t(18505),
                p = t(65532),
                v = t(3704),
                I = t(31045),
                Z = t(91407),
                _ = t(44297),
                m = t(38419),
                E = t(9823),
                g = t(776),
                A = t(67661),
                T = t(9009),
                S = t(58370),
                C = t(90856),
                R = t(84159),
                O = t(3661),
                y = t(5632),
                b = t(2784),
                L = t(3255),
                P = t(99110),
                k = t(97024),
                H = "autocompletion",
                V = "select",
                D = [h.VT, h.nj],
                x = function(e) {
                    var n = (0, _.Lt)(e);
                    return D.includes(e) ? (0, r.Z)({}, I.$.urlValue, h.p_[e]) : n ? (0, r.Z)({}, Z.e.urlValue, e) : {}
                },
                N = function(e) {
                    var n = e.isBrandSstk,
                        t = e.language,
                        r = e.searchHref;
                    return n && (0, m.DM)({
                        language: t,
                        relativePath: r
                    })
                },
                M = function(e) {
                    var n = e.option,
                        t = e.facet,
                        a = e.id,
                        i = e.slug;
                    return [d.xG, d.BX, d.ru].includes(t) ? (0, S.oi)((0, r.Z)({}, t, (0, v.WF)(n))) : t === d.to ? (0, S.oi)({
                        artist: i
                    }) : (0, C.o)({
                        id: a,
                        slug: i
                    })
                },
                w = function(e) {
                    var n = e.assetType,
                        t = void 0 === n ? h.k4 : n,
                        l = (0, g.yh)().analytics,
                        d = (0, k.JI)().fullAssetType,
                        p = (0, y.useRouter)(),
                        I = p.query,
                        m = Z.e.urlValue,
                        A = (I.term, I[m], (0, o.Z)(I, ["term", m].map(c.Z))),
                        T = p.pathname,
                        C = p.asPath,
                        L = (0, E.D)().isBrandSstk;
                    return {
                        doSearch: (0, b.useCallback)(function() {
                            var e, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                I = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                Z = (0, _.Xo)(t),
                                m = x(t),
                                E = Z ? (0, r.Z)({}, f.rH, "") : (0, r.Z)({}, f.jS, 1),
                                g = T.includes("/".concat(f.mo)) && d === t ? (0, a.Z)({}, A, E) : {},
                                y = T.includes("/".concat(h.pX, "/").concat(V)),
                                b = t === h.q$ || t === h.nj ? {
                                    currentUrl: C.replace(/(\?.*)|(#.*)/g, "")
                                } : {};
                            l.inlineClick("".concat(s.Yii, ".").concat("initiateSearch")), c && l.inlineClick("".concat(s.Yii, ".").concat(H, "-").concat(c)), (0, O.JD)(f.QP.SEARCH_BAR), (0, R.Z7)({
                                assetType: t,
                                isImageType: (0, _.Lt)(t),
                                isEditorialType: D.includes(t),
                                isRecommendedImageType: (0, _.z)(t)
                            });
                            var P = (0, u.Z)((0, S.J1)((0, v.pR)((0, a.Z)((0, i.Z)((0, a.Z)({}, g, m, y ? {
                                    channel: V
                                } : {}), {
                                    term: o
                                }), b, I)), t), 2),
                                k = P[0],
                                M = P[1],
                                w = N({
                                    isBrandSstk: L,
                                    language: p.locale,
                                    searchHref: k
                                });
                            if (w) {
                                null === (e = window.NREUM) || void 0 === e || null === (n = e.addPageAction) || void 0 === n || n.call(e, "UP3-1623 assign doSearch externalHref to href", (0, i.Z)((0, a.Z)({}, window.location || {}), {
                                    externalHref: w,
                                    isBrandSstk: L,
                                    searchAs: M,
                                    searchHref: k
                                })), window.location.href = w;
                                return
                            }
                            p.push(k, M)
                        }, [t, T, d, A, C, l, L, p]),
                        selectMusicAutocomplete: (0, b.useCallback)(function() {
                            var e, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                o = r.option,
                                c = r.facet,
                                d = r.id,
                                f = r.slug,
                                v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                            if (t === h.xF) {
                                v && l.inlineClick("".concat(s.Yii, ".").concat(H, "-").concat(v));
                                var I = (0, u.Z)(M({
                                        option: o,
                                        facet: c,
                                        id: d,
                                        slug: f
                                    }), 2),
                                    Z = I[0],
                                    _ = I[1],
                                    m = N({
                                        isBrandSstk: L,
                                        language: p.locale,
                                        searchHref: Z
                                    });
                                if (m) {
                                    null === (e = window.NREUM) || void 0 === e || null === (n = e.addPageAction) || void 0 === n || n.call(e, "UP3-1623 assign selectMusicAutocomplete externalHref to href", (0, i.Z)((0, a.Z)({}, window.location || {}), {
                                        assetType: t,
                                        externalHref: m,
                                        isBrandSstk: L,
                                        searchAs: _,
                                        searchHref: Z
                                    })), window.location.href = m;
                                    return
                                }
                                p.push(Z, _)
                            }
                        }, [l, t, L, p])
                    }
                },
                F = function(e) {
                    var n = e.assets,
                        t = (0, _.m3)({
                            assets: n
                        }).pagination,
                        r = void 0 === t ? {} : t,
                        a = r.totalPages;
                    return {
                        currentPage: r.pageNumber,
                        totalPageCount: a,
                        totalRecords: r.totalRecords
                    }
                },
                B = function(e) {
                    var n = e.assets,
                        t = e.pageSize,
                        r = void 0 === t ? 50 : t,
                        a = (0, _.m3)({
                            assets: n
                        }).pagination,
                        i = void 0 === a ? {} : a,
                        o = i.start,
                        u = i.total;
                    return {
                        currentPage: Math.round((o + r) / r) || 1,
                        totalPageCount: u && Math.max(Math.ceil(u / r), 1),
                        totalRecords: u
                    }
                },
                q = function(e) {
                    var n = e.assets,
                        t = e.pageSize,
                        r = (0, _.m3)({
                            assets: n
                        }).facetFields;
                    return {
                        pagination: B({
                            assets: n,
                            pageSize: t
                        }),
                        facetFields: r
                    }
                },
                U = function(e) {
                    var n = e.queryParams,
                        t = n.pageSize,
                        r = void 0 === t ? f.Ig : t,
                        i = n.page,
                        u = (0, o.Z)(e.queryParams, ["pageSize", "page"]),
                        c = (0, p.PE)(),
                        s = c.locale,
                        h = c.region,
                        d = (0, a.Z)({
                            language: s,
                            country: h,
                            "page[size]": r,
                            "page[offset]": ((void 0 === i ? 1 : i) - 1) * r
                        }, u),
                        v = (0, L.ZP)((0, l.uS)({
                            queryParams: d
                        }).formattedUrl, function(e) {
                            return A.uS.get(e).then(function(e) {
                                return (0, T.O)(e.data) || []
                            })
                        }).data,
                        I = (0, P.W)(v),
                        Z = q({
                            assets: I,
                            pageSize: r
                        }),
                        _ = Z.pagination,
                        m = Z.facetFields;
                    return {
                        stickyAssets: I,
                        assets: v,
                        pagination: _,
                        facetFields: m
                    }
                }
        },
        82087: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return T
                }
            });
            var r, a = t(87394),
                i = t(2784),
                o = t(47842),
                u = t(70865),
                c = t(26297),
                l = t(50930),
                s = t(81740),
                h = t(39232),
                d = t(85330),
                f = t(7297),
                p = t(52884),
                v = t(65532),
                I = t(44297),
                Z = t(9823),
                _ = t(88436),
                m = t(67661),
                E = t(3255),
                g = (r = {}, (0, o.Z)(r, h.k4, 10), (0, o.Z)(r, h.pX, 10), (0, o.Z)(r, h.xF, 30), r),
                A = function(e) {
                    var n, t = e.query,
                        r = e.assetType,
                        A = (0, _.r)(),
                        T = (0, v.PE)().locale,
                        S = (0, I.Xo)(r),
                        C = (0, a.Z)((0, i.useState)([]), 2),
                        R = C[0],
                        O = C[1],
                        y = (0, Z.D)().isBrandSstk ? d.Oq : d.$S;
                    if ([h.tn, h.Nk, h.hv].includes(r)) n = null;
                    else if (r === h.xF) n = (0, s.Cr)({
                        queryParams: {
                            q: t,
                            language: T,
                            pageSize: g[h.xF],
                            channel: y
                        }
                    }).formattedUrl;
                    else {
                        var b = (0, I.Lt)(r),
                            L = (0, I.z)(r),
                            P = b || L ? h.k4 : r;
                        n = (0, s.bn)({
                            queryParams: {
                                q: t,
                                mediaType: P,
                                language: T,
                                pageSize: g[P]
                            }
                        }).formattedUrl
                    }
                    var k = "" === t;
                    k && 0 !== R.length && O([]);
                    var H = S || k ? null : n,
                        V = (0, E.ZP)(H, function(e) {
                            return m.uS.get(e, {
                                headers: (0, o.Z)({}, f.yx, A)
                            }).then(function(e) {
                                var n, t = e.data;
                                return r === h.xF ? Object.entries(null != t ? t : {}).reduce(function(e, n) {
                                    var t = (0, a.Z)(n, 2),
                                        r = t[0],
                                        i = t[1];
                                    return (0, l.Z)(e).concat((0, l.Z)(i.map(function(e) {
                                        var n = e.term,
                                            t = (0, c.Z)(e, ["term"]);
                                        return (0, u.Z)({
                                            facet: r,
                                            option: n
                                        }, t)
                                    })))
                                }, []) : (null != t ? t : []).map(function(e) {
                                    return {
                                        option: e
                                    }
                                })
                            })
                        }, {
                            dedupingInterval: p.no
                        }).data;
                    return (0, i.useEffect)(function() {
                        V && O(V)
                    }, [V]), {
                        options: R
                    }
                },
                T = function(e) {
                    var n, t, r, o, u = e.initialSearchTerm,
                        c = e.assetType,
                        l = e.userGeneratedEvent,
                        s = (0, a.Z)((0, i.useState)(u), 2),
                        h = s[0],
                        d = s[1],
                        f = (t = (n = (0, a.Z)((0, i.useState)(h), 2))[0], r = n[1], o = (0, i.useRef)(!0), (0, i.useEffect)(function() {
                            if (!0 === o.current) {
                                r(h), o.current = !1;
                                return
                            }
                            var e = setTimeout(function() {
                                r(h)
                            }, 100);
                            return function() {
                                clearTimeout(e)
                            }
                        }, [h, 100, !0]), t);
                    return {
                        handleChange: function(e) {
                            return d(e.target.value)
                        },
                        options: A({
                            query: void 0 === l || l ? f : "",
                            assetType: c
                        }).options,
                        setInputValue: d,
                        value: h
                    }
                }
        },
        67361: function(e, n, t) {
            t.r(n), t.d(n, {
                Search: function() {
                    return o
                }
            });
            var r = t(70865),
                a = t(52322),
                i = (0, t(6620).Z)((0, a.jsx)("path", {
                    d: "M29.333 27.453l-7.587-7.587c1.399-1.787 2.243-4.067 2.243-6.544 0-5.891-4.776-10.667-10.667-10.667S2.655 7.431 2.655 13.322s4.776 10.667 10.667 10.667c2.477 0 4.757-.844 6.567-2.261l7.563 7.604zm-24-14.12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
                }), "Search.svg"),
                o = function(e) {
                    return (0, a.jsx)(i, (0, r.Z)({
                        viewBox: "0 0 32 32"
                    }, e))
                }
        },
        27586: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return v
                },
                P: function() {
                    return I
                }
            });
            var r, a, i, o = t(47842),
                u = t(58013),
                c = t(77251),
                l = t(39232),
                s = t(38398),
                h = t.n(s),
                d = "licenses",
                f = "catalog",
                p = (i = {}, (0, o.Z)(i, d, (r = {}, (0, o.Z)(r, l.k4, "/".concat(d, "/").concat(l.k4)), (0, o.Z)(r, l.pX, "/".concat(d, "/").concat(l.pX)), (0, o.Z)(r, l.xF, "/".concat(d, "/").concat(l.xF)), (0, o.Z)(r, l.tn, "/".concat(d, "/").concat(l.tn)), (0, o.Z)(r, l.gP, "/".concat(d, "/").concat(l.gP)), (0, o.Z)(r, l.D8, "/".concat(d, "/").concat(l.D8)), r)), (0, o.Z)(i, f, (a = {}, (0, o.Z)(a, l.k4, "/".concat(f, "/").concat(d)), (0, o.Z)(a, l.pX, "/".concat(f, "/").concat(d)), (0, o.Z)(a, l.gW, "/".concat(f, "/").concat(d)), (0, o.Z)(a, l.xF, "/".concat(f, "/").concat(d)), (0, o.Z)(a, l.tn, "/".concat(f, "/").concat(d)), (0, o.Z)(a, l.gP, "/".concat(f, "/").concat(d)), (0, o.Z)(a, l.D8, "/".concat(d, "/").concat(l.D8)), a)), i),
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            assetType: l.k4
                        },
                        n = e.assetType,
                        t = void 0 === n ? l.k4 : n,
                        r = h().format({
                            pathname: p[f][t]
                        });
                    return [r, r]
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            assetType: l.k4,
                            query: {}
                        },
                        n = e.assetType,
                        t = void 0 === n ? l.k4 : n,
                        r = e.query,
                        a = (0, u.Z)({}, (0, c.Z)(void 0 === r ? {} : r)),
                        i = h().format({
                            pathname: p[d][t],
                            query: a
                        });
                    return [i, i]
                }
        },
        87152: function(e, n, t) {
            t.d(n, {
                s: function() {
                    return o
                }
            });
            var r = t(47842),
                a = t(70865),
                i = t(96670),
                o = function(e) {
                    return e.reduce(function(e, n) {
                        return (0, i.Z)((0, a.Z)({}, e), (0, r.Z)({}, n[0], n[1]))
                    }, {})
                }
        }
    }
]);
//# sourceMappingURL=12437-39078fded08af11e.js.map