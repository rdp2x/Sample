(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96573], {
        43213: function(e) {
            var t, n, o, r, a;
            e.exports = (t = function() {
                function e() {}
                return e.loadScript = function(e) {
                    return new Promise(function(t, n) {
                        var o = document.createElement("script");
                        o.src = e.src, o.type = "text/javascript", o.async = e.async || !0, o.defer = e.defer || !0, (e.attributes || []).forEach(function(e) {
                            return o.setAttribute(e.name, e.value)
                        }), o.onload = function() {
                            t()
                        }, o.onerror = function() {
                            n(Error("Unable to load script."))
                        }, document.getElementsByTagName("head")[0].appendChild(o)
                    })
                }, e.setCookie = function(e, t, n) {
                    void 0 === n && (n = 0);
                    var o = "";
                    if (n) {
                        var r = new Date;
                        r.setTime(r.getTime() + 24 * n * 36e5), o = '; expiryDate=" ' + r.toUTCString()
                    }
                    document.cookie = e + "=" + (t || "") + o + "; path=/"
                }, e.getCookie = function(e) {
                    for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o += 1) {
                        for (var r = n[o];
                            " " === r.charAt(0);) r = r.substring(1, r.length);
                        if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                    }
                    return null
                }, e
            }(), n = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PO", "PT", "RO", "SK", "SI", "ES", "SE"], o = {
                C0001: ["A/B testing", "Security & Fraud", "Tag Managers"],
                C0002: ["Analytics", "Customer Success", "Feature Flagging", "Performance Monitoring", "Raw Data", "Surveys", "Video"],
                C0003: ["CRM", "Heatmaps & Recordings", "Livechat", "Personalization", "Storage Destinations"],
                C0004: ["Advertising", "Attribution", "Deep linking", "Email", "Email Marketing", "Enrichment", "Marketing Automation"],
                C0005: ["Referrals", "SMS & Push Notifications"]
            }, r = "consentlibrary-geo-variant", a = "OptanonCachedGroups", function() {
                function e(e) {
                    var n = this;
                    this.loadGeoVariant = function() {
                        var e = n.getGeoVariant();
                        e && (window.OneTrust = {
                            geolocationResponse: {
                                countryCode: e.country,
                                stateCode: e.state
                            }
                        })
                    }, this.createOptanonWrapper = function() {
                        window.OptanonWrapper = function() {
                            n.provider = window.Optanon, console.debug("[ConsentLibrary] Onetrust loaded with " + window.OptanonActiveGroups + " categories."), n.getCachedCookieGroups() || n.updateCachedCookieGroups(), window.Optanon.OnConsentChanged(function() {
                                console.debug("[ConsentLibrary] OnConsentChanged called by Onetrust."), n.getCachedCookieGroups() !== window.OptanonActiveGroups ? (console.debug("[ConsentLibrary] Categories are different. Refreshing cookie for: " + window.OptanonActiveGroups + " and calling callback"), n.updateCachedCookieGroups(), n.params.onConsentChanged = n.params.onConsentChanged || function() {}, n.params.onConsentChanged(n.getAcceptedCategories())) : console.debug("[ConsentLibrary] Categories are still the same, skiping callback")
                            }), window.isConsentLibraryLoaded = !0, !n.loaded && n.params.onLoad && n.params.onLoad(), n.loaded = !0
                        }
                    }, this.getOneTrustAcceptedCategories = function() {
                        return window.OptanonActiveGroups ? window.OptanonActiveGroups.split(",").filter(function(e) {
                            return e && e.length > 0
                        }) : []
                    }, this.getGeoVariant = function() {
                        var e, t, n, o = null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem(r);
                        return o ? {
                            country: null === (t = o.trim().split(",")[0]) || void 0 === t ? void 0 : t.trim(),
                            state: null === (n = o.trim().split(",")[1]) || void 0 === n ? void 0 : n.trim()
                        } : null
                    }, this.getCachedCookieGroups = function() {
                        return t.getCookie(a)
                    }, this.updateCachedCookieGroups = function() {
                        t.setCookie(a, window.OptanonActiveGroups, 365)
                    }, this.params = e, this.loaded = !1, this.params.onConsentChanged = this.params.onConsentChanged || function() {}
                }
                return e.prototype.load = function() {
                    var e = this;
                    return new Promise(function(n, o) {
                        if (!0 === window.isConsentLibraryLoaded) return console.debug("[ConsentLibrary] Onetrust is already loaded"), o(Error("Onetrust already loaded"));
                        e.loadGeoVariant(), e.createOptanonWrapper();
                        var r = {
                            src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                            attributes: [{
                                name: "data-domain-script",
                                value: e.params.id
                            }, {
                                name: "data-document-language",
                                value: "true"
                            }]
                        };
                        t.loadScript(r).then(n).catch(o)
                    })
                }, e.prototype.isGDPR = function() {
                    var e = this.getProvider().getGeolocationData();
                    return n.indexOf(e.country.toUpperCase()) >= 0
                }, e.prototype.isCCPA = function() {
                    var e = this.getProvider().getGeolocationData();
                    return "US" === e.country.toUpperCase() && "CA" === e.state.toUpperCase()
                }, e.togglePreferenceDisplay = function() {
                    return !(!window.OneTrust || !Object.prototype.hasOwnProperty.call(window.OneTrust, "ToggleInfoDisplay")) && (window.OneTrust.ToggleInfoDisplay(), !0)
                }, e.prototype.getSegmentAcceptedCategories = function() {
                    var e = this.getOneTrustAcceptedCategories(),
                        t = [];
                    return e.forEach(function(e) {
                        t.push.apply(t, o[e])
                    }), t
                }, e.prototype.getAcceptedCategories = function() {
                    return {
                        provider: this.getOneTrustAcceptedCategories(),
                        segment: this.getSegmentAcceptedCategories()
                    }
                }, e.prototype.getProvider = function() {
                    return this.provider
                }, e.setGeoVariant = function(e, t) {
                    var n;
                    null === (n = window.localStorage) || void 0 === n || n.setItem(r, e + "," + t)
                }, e.clearGeoVariant = function() {
                    var e;
                    null === (e = window.localStorage) || void 0 === e || e.removeItem(r)
                }, e
            }())
        }
    }
]);
//# sourceMappingURL=ConsentLibrary.61179fc605711a17.js.map