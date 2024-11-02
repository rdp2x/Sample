"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98265], {
        98265: function(e, t, a) {
            a.r(t), a.d(t, {
                CmsAppStoreBadgeItem: function() {
                    return l
                }
            });
            var r = a(52322),
                n = a(27050),
                i = a(53957),
                p = (0, a(8740).ZL)()(function(e) {
                    return {
                        image: {
                            height: "40px"
                        },
                        root: {
                            cursor: "pointer",
                            paddingLeft: e.tokens.spacing.s,
                            "&:item:first-of-type": {
                                paddingLeft: 0
                            }
                        }
                    }
                }),
                l = function(e) {
                    var t = e.appStoreUrl,
                        a = e.appStoreBadgeImage,
                        l = e.parentContentType,
                        s = p().classes;
                    try {
                        var o = i.DT[l];
                        if (!t || !a || !a.url || !a.title) return null;
                        return (0, r.jsx)("div", {
                            className: s.root,
                            children: (0, r.jsx)("a", {
                                href: t,
                                target: "_blank",
                                "data-track-action": "click",
                                "data-track-label": "appBadge",
                                "data-track-section": o,
                                rel: "noreferrer",
                                children: (0, r.jsx)("div", {
                                    className: s.imageContainer,
                                    children: (0, r.jsx)("img", {
                                        className: s.image,
                                        src: a.url,
                                        alt: a.description || a.title,
                                        title: a.title,
                                        loading: "lazy"
                                    })
                                })
                            })
                        })
                    } catch (e) {
                        return (0, n.qr)(e, "CmsAppStoreBadgeItem")
                    }
                };
            l.defaultProps = {
                appStoreUrl: "",
                appStoreBadgeImage: null,
                parentContentType: i.wF.appStoreBadge
            }
        }
    }
]);
//# sourceMappingURL=98265.89e446f7f252c553.js.map