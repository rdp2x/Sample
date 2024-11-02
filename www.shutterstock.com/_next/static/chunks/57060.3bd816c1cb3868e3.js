"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [57060], {
        57060: function(n, e, t) {
            t.r(e), t.d(e, {
                TrackMeta: function() {
                    return l
                }
            });
            var r = t(52322),
                a = t(62197),
                s = t(21647),
                i = t(44297),
                c = t(75),
                u = t(59877),
                d = (0, t(8740).ZL)()(function(n) {
                    return {
                        trackTimeContainer: {
                            display: "flex",
                            marginLeft: n.tokens.spacing.base
                        },
                        flexEnd: {
                            justifyContent: "flex-end"
                        },
                        center: {
                            justifyContent: "center"
                        }
                    }
                }),
                l = function(n) {
                    var e = n.track,
                        t = n.justifyContent,
                        l = (0, u.$G)(c.mpT),
                        f = l.ready,
                        o = l.t,
                        x = !e.id || !f,
                        h = (0, i.Fz)({
                            track: e
                        }),
                        j = (null == e ? void 0 : e.beatsPerMinute) ? o("music:track_bpm", {
                            BPM: e.beatsPerMinute
                        }) : null,
                        k = d({
                            trackLength: h
                        }),
                        p = k.classes,
                        b = k.cx;
                    return (0, r.jsxs)("div", {
                        className: b(p.trackTimeContainer, p[t]),
                        children: [h && (0, r.jsx)(a.Z, {
                            variant: "body2",
                            children: x ? (0, r.jsx)(s.Z, {
                                width: 30
                            }) : (0, r.jsx)("span", {
                                children: h
                            })
                        }), h && j && (0, r.jsx)(r.Fragment, {
                            children: "\xa0/\xa0"
                        }), j && (0, r.jsx)(a.Z, {
                            variant: "body2",
                            children: x ? (0, r.jsx)(s.Z, {
                                width: 30
                            }) : (0, r.jsx)("span", {
                                children: j
                            })
                        })]
                    })
                };
            l.defaultProps = {
                justifyContent: "flexEnd"
            }
        }
    }
]);
//# sourceMappingURL=57060.3bd816c1cb3868e3.js.map