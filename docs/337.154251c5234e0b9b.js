(self.webpackChunksample_demo_app =
  self.webpackChunksample_demo_app || []).push([
  [337],
  {
    5835: (vi) => {
      vi.exports = [
        {
          id: "65a92309-da2d-4c18-92bf-abc1590d9741",
          title: "Product A",
          subtitle: "Product sample A",
          status: "Available",
          color: "#0C97A1",
          description:
            "\n      Excepteur sint occaecat cupidatat non proident, \n      sunt in culpa qui officia deserunt mollit anim \n      id est laborum.\n      ",
          details: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor incididunt",
          ],
        },
        {
          id: "ea3acac8-27ad-4c3e-a731-24498f24290e",
          title: "Product B",
          subtitle: "Product sample B",
          status: "Unavailable",
          color: "#3F4040",
          description:
            "\n      Excepteur sint occaecat cupidatat non proident, \n      sunt in culpa qui officia deserunt mollit anim \n      id est laborum.\n      ",
          details: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor incididunt",
          ],
        },
        {
          id: "b4f024b4-96f9-4405-8588-c0fd3013068e",
          title: "Product C",
          subtitle: "Product sample C",
          status: "Available",
          color: "#607d8b",
          description:
            "\n      Excepteur sint occaecat cupidatat non proident, \n      sunt in culpa qui officia deserunt mollit anim \n      id est laborum.\n      ",
          details: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor incididunt",
          ],
        },
      ];
    },
    5337: (vi, yi, g) => {
      "use strict";
      g.r(yi), g.d(yi, { ProductsModule: () => cu });
      var y = g(9808),
        o = g(5e3),
        G = g(9646),
        he = g(9751),
        gr = g(4351),
        ie = g(9300),
        R = g(4004);
      class bi {}
      class Ci {}
      class q {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((e) => {
                            const n = e.indexOf(":");
                            if (n > 0) {
                              const r = e.slice(0, n),
                                s = r.toLowerCase(),
                                a = e.slice(n + 1).trim();
                              this.maybeSetNormalizedName(r, s),
                                this.headers.has(s)
                                  ? this.headers.get(s).push(a)
                                  : this.headers.set(s, [a]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof q
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new q();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof q
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let n = t.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case "d":
              const s = t.value;
              if (s) {
                let a = this.headers.get(e);
                if (!a) return;
                (a = a.filter((l) => -1 === s.indexOf(l))),
                  0 === a.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, a);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class vr {
        encodeKey(t) {
          return wi(t);
        }
        encodeValue(t) {
          return wi(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      const br = /%(\d[a-f0-9])/gi,
        Cr = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "2B": "+",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function wi(i) {
        return encodeURIComponent(i).replace(br, (t, e) => {
          var n;
          return null !== (n = Cr[e]) && void 0 !== n ? n : t;
        });
      }
      function Mi(i) {
        return `${i}`;
      }
      class Q {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new vr()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function yr(i, t) {
              const e = new Map();
              return (
                i.length > 0 &&
                  i
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((r) => {
                      const s = r.indexOf("="),
                        [a, l] =
                          -1 == s
                            ? [t.decodeKey(r), ""]
                            : [
                                t.decodeKey(r.slice(0, s)),
                                t.decodeValue(r.slice(s + 1)),
                              ],
                        c = e.get(a) || [];
                      c.push(l), e.set(a, c);
                    }),
                e
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: "a" });
        }
        appendAll(t) {
          const e = [];
          return (
            Object.keys(t).forEach((n) => {
              const r = t[n];
              Array.isArray(r)
                ? r.forEach((s) => {
                    e.push({ param: n, value: s, op: "a" });
                  })
                : e.push({ param: n, value: r, op: "a" });
            }),
            this.clone(e)
          );
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((n) => e + "=" + this.encoder.encodeValue(n))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const e = new Q({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat(t)),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const e =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(Mi(t.value)), this.map.set(t.param, e);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let n = this.map.get(t.param) || [];
                      const r = n.indexOf(Mi(t.value));
                      -1 !== r && n.splice(r, 1),
                        n.length > 0
                          ? this.map.set(t.param, n)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class wr {
        constructor() {
          this.map = new Map();
        }
        set(t, e) {
          return this.map.set(t, e), this;
        }
        get(t) {
          return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
          );
        }
        delete(t) {
          return this.map.delete(t), this;
        }
        has(t) {
          return this.map.has(t);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Ei(i) {
        return "undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer;
      }
      function Si(i) {
        return "undefined" != typeof Blob && i instanceof Blob;
      }
      function xi(i) {
        return "undefined" != typeof FormData && i instanceof FormData;
      }
      class be {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function Mr(i) {
              switch (i) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.context && (this.context = s.context),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new q()),
            this.context || (this.context = new wr()),
            this.params)
          ) {
            const a = this.params.toString();
            if (0 === a.length) this.urlWithParams = e;
            else {
              const l = e.indexOf("?");
              this.urlWithParams =
                e + (-1 === l ? "?" : l < e.length - 1 ? "&" : "") + a;
            }
          } else (this.params = new Q()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ei(this.body) ||
              Si(this.body) ||
              xi(this.body) ||
              (function Er(i) {
                return (
                  "undefined" != typeof URLSearchParams &&
                  i instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Q
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || xi(this.body)
            ? null
            : Si(this.body)
            ? this.body.type || null
            : Ei(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Q
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          var e;
          const n = t.method || this.method,
            r = t.url || this.url,
            s = t.responseType || this.responseType,
            a = void 0 !== t.body ? t.body : this.body,
            l =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            c =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let d = t.headers || this.headers,
            u = t.params || this.params;
          const m = null !== (e = t.context) && void 0 !== e ? e : this.context;
          return (
            void 0 !== t.setHeaders &&
              (d = Object.keys(t.setHeaders).reduce(
                (x, w) => x.set(w, t.setHeaders[w]),
                d
              )),
            t.setParams &&
              (u = Object.keys(t.setParams).reduce(
                (x, w) => x.set(w, t.setParams[w]),
                u
              )),
            new be(n, r, a, {
              params: u,
              headers: d,
              context: m,
              reportProgress: c,
              responseType: s,
              withCredentials: l,
            })
          );
        }
      }
      var I = (() => (
        ((I = I || {})[(I.Sent = 0)] = "Sent"),
        (I[(I.UploadProgress = 1)] = "UploadProgress"),
        (I[(I.ResponseHeader = 2)] = "ResponseHeader"),
        (I[(I.DownloadProgress = 3)] = "DownloadProgress"),
        (I[(I.Response = 4)] = "Response"),
        (I[(I.User = 5)] = "User"),
        I
      ))();
      class _t {
        constructor(t, e = 200, n = "OK") {
          (this.headers = t.headers || new q()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class gt extends _t {
        constructor(t = {}) {
          super(t), (this.type = I.ResponseHeader);
        }
        clone(t = {}) {
          return new gt({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Pe extends _t {
        constructor(t = {}) {
          super(t),
            (this.type = I.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new Pe({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Ai extends _t {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || "(unknown url)"}`
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function vt(i, t) {
        return {
          body: t,
          headers: i.headers,
          context: i.context,
          observe: i.observe,
          params: i.params,
          reportProgress: i.reportProgress,
          responseType: i.responseType,
          withCredentials: i.withCredentials,
        };
      }
      let Le = (() => {
        class i {
          constructor(e) {
            this.handler = e;
          }
          request(e, n, r = {}) {
            let s;
            if (e instanceof be) s = e;
            else {
              let c, d;
              (c = r.headers instanceof q ? r.headers : new q(r.headers)),
                r.params &&
                  (d =
                    r.params instanceof Q
                      ? r.params
                      : new Q({ fromObject: r.params })),
                (s = new be(e, n, void 0 !== r.body ? r.body : null, {
                  headers: c,
                  context: r.context,
                  params: d,
                  reportProgress: r.reportProgress,
                  responseType: r.responseType || "json",
                  withCredentials: r.withCredentials,
                }));
            }
            const a = (0, G.of)(s).pipe(
              (0, gr.b)((c) => this.handler.handle(c))
            );
            if (e instanceof be || "events" === r.observe) return a;
            const l = a.pipe((0, ie.h)((c) => c instanceof Pe));
            switch (r.observe || "body") {
              case "body":
                switch (s.responseType) {
                  case "arraybuffer":
                    return l.pipe(
                      (0, R.U)((c) => {
                        if (null !== c.body && !(c.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return c.body;
                      })
                    );
                  case "blob":
                    return l.pipe(
                      (0, R.U)((c) => {
                        if (null !== c.body && !(c.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return c.body;
                      })
                    );
                  case "text":
                    return l.pipe(
                      (0, R.U)((c) => {
                        if (null !== c.body && "string" != typeof c.body)
                          throw new Error("Response is not a string.");
                        return c.body;
                      })
                    );
                  default:
                    return l.pipe((0, R.U)((c) => c.body));
                }
              case "response":
                return l;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${r.observe}}`
                );
            }
          }
          delete(e, n = {}) {
            return this.request("DELETE", e, n);
          }
          get(e, n = {}) {
            return this.request("GET", e, n);
          }
          head(e, n = {}) {
            return this.request("HEAD", e, n);
          }
          jsonp(e, n) {
            return this.request("JSONP", e, {
              params: new Q().append(n, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(e, n = {}) {
            return this.request("OPTIONS", e, n);
          }
          patch(e, n, r = {}) {
            return this.request("PATCH", e, vt(r, n));
          }
          post(e, n, r = {}) {
            return this.request("POST", e, vt(r, n));
          }
          put(e, n, r = {}) {
            return this.request("PUT", e, vt(r, n));
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.LFG(bi));
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
          i
        );
      })();
      class ki {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const Oi = new o.OlP("HTTP_INTERCEPTORS");
      let Sr = (() => {
        class i {
          intercept(e, n) {
            return n.handle(e);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
          i
        );
      })();
      const xr = /^\)\]\}',?\n/;
      let Di = (() => {
        class i {
          constructor(e) {
            this.xhrFactory = e;
          }
          handle(e) {
            if ("JSONP" === e.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new he.y((n) => {
              const r = this.xhrFactory.build();
              if (
                (r.open(e.method, e.urlWithParams),
                e.withCredentials && (r.withCredentials = !0),
                e.headers.forEach((w, E) => r.setRequestHeader(w, E.join(","))),
                e.headers.has("Accept") ||
                  r.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !e.headers.has("Content-Type"))
              ) {
                const w = e.detectContentTypeHeader();
                null !== w && r.setRequestHeader("Content-Type", w);
              }
              if (e.responseType) {
                const w = e.responseType.toLowerCase();
                r.responseType = "json" !== w ? w : "text";
              }
              const s = e.serializeBody();
              let a = null;
              const l = () => {
                  if (null !== a) return a;
                  const w = r.statusText || "OK",
                    E = new q(r.getAllResponseHeaders()),
                    A =
                      (function Ar(i) {
                        return "responseURL" in i && i.responseURL
                          ? i.responseURL
                          : /^X-Request-URL:/m.test(i.getAllResponseHeaders())
                          ? i.getResponseHeader("X-Request-URL")
                          : null;
                      })(r) || e.url;
                  return (
                    (a = new gt({
                      headers: E,
                      status: r.status,
                      statusText: w,
                      url: A,
                    })),
                    a
                  );
                },
                c = () => {
                  let { headers: w, status: E, statusText: A, url: C } = l(),
                    f = null;
                  204 !== E &&
                    (f = void 0 === r.response ? r.responseText : r.response),
                    0 === E && (E = f ? 200 : 0);
                  let p = E >= 200 && E < 300;
                  if ("json" === e.responseType && "string" == typeof f) {
                    const h = f;
                    f = f.replace(xr, "");
                    try {
                      f = "" !== f ? JSON.parse(f) : null;
                    } catch (_) {
                      (f = h), p && ((p = !1), (f = { error: _, text: f }));
                    }
                  }
                  p
                    ? (n.next(
                        new Pe({
                          body: f,
                          headers: w,
                          status: E,
                          statusText: A,
                          url: C || void 0,
                        })
                      ),
                      n.complete())
                    : n.error(
                        new Ai({
                          error: f,
                          headers: w,
                          status: E,
                          statusText: A,
                          url: C || void 0,
                        })
                      );
                },
                d = (w) => {
                  const { url: E } = l(),
                    A = new Ai({
                      error: w,
                      status: r.status || 0,
                      statusText: r.statusText || "Unknown Error",
                      url: E || void 0,
                    });
                  n.error(A);
                };
              let u = !1;
              const m = (w) => {
                  u || (n.next(l()), (u = !0));
                  let E = { type: I.DownloadProgress, loaded: w.loaded };
                  w.lengthComputable && (E.total = w.total),
                    "text" === e.responseType &&
                      !!r.responseText &&
                      (E.partialText = r.responseText),
                    n.next(E);
                },
                x = (w) => {
                  let E = { type: I.UploadProgress, loaded: w.loaded };
                  w.lengthComputable && (E.total = w.total), n.next(E);
                };
              return (
                r.addEventListener("load", c),
                r.addEventListener("error", d),
                r.addEventListener("timeout", d),
                r.addEventListener("abort", d),
                e.reportProgress &&
                  (r.addEventListener("progress", m),
                  null !== s &&
                    r.upload &&
                    r.upload.addEventListener("progress", x)),
                r.send(s),
                n.next({ type: I.Sent }),
                () => {
                  r.removeEventListener("error", d),
                    r.removeEventListener("abort", d),
                    r.removeEventListener("load", c),
                    r.removeEventListener("timeout", d),
                    e.reportProgress &&
                      (r.removeEventListener("progress", m),
                      null !== s &&
                        r.upload &&
                        r.upload.removeEventListener("progress", x)),
                    r.readyState !== r.DONE && r.abort();
                }
              );
            });
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.LFG(y.JF));
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
          i
        );
      })();
      const yt = new o.OlP("XSRF_COOKIE_NAME"),
        bt = new o.OlP("XSRF_HEADER_NAME");
      class Fi {}
      let kr = (() => {
          class i {
            constructor(e, n, r) {
              (this.doc = e),
                (this.platform = n),
                (this.cookieName = r),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const e = this.doc.cookie || "";
              return (
                e !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, y.Mx)(e, this.cookieName)),
                  (this.lastCookieString = e)),
                this.lastToken
              );
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(y.K0), o.LFG(o.Lbi), o.LFG(yt));
            }),
            (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
            i
          );
        })(),
        Ct = (() => {
          class i {
            constructor(e, n) {
              (this.tokenService = e), (this.headerName = n);
            }
            intercept(e, n) {
              const r = e.url.toLowerCase();
              if (
                "GET" === e.method ||
                "HEAD" === e.method ||
                r.startsWith("http://") ||
                r.startsWith("https://")
              )
                return n.handle(e);
              const s = this.tokenService.getToken();
              return (
                null !== s &&
                  !e.headers.has(this.headerName) &&
                  (e = e.clone({ headers: e.headers.set(this.headerName, s) })),
                n.handle(e)
              );
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(Fi), o.LFG(bt));
            }),
            (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
            i
          );
        })(),
        Or = (() => {
          class i {
            constructor(e, n) {
              (this.backend = e), (this.injector = n), (this.chain = null);
            }
            handle(e) {
              if (null === this.chain) {
                const n = this.injector.get(Oi, []);
                this.chain = n.reduceRight(
                  (r, s) => new ki(r, s),
                  this.backend
                );
              }
              return this.chain.handle(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(Ci), o.LFG(o.zs3));
            }),
            (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
            i
          );
        })(),
        Dr = (() => {
          class i {
            static disable() {
              return {
                ngModule: i,
                providers: [{ provide: Ct, useClass: Sr }],
              };
            }
            static withOptions(e = {}) {
              return {
                ngModule: i,
                providers: [
                  e.cookieName ? { provide: yt, useValue: e.cookieName } : [],
                  e.headerName ? { provide: bt, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({
              providers: [
                Ct,
                { provide: Oi, useExisting: Ct, multi: !0 },
                { provide: Fi, useClass: kr },
                { provide: yt, useValue: "XSRF-TOKEN" },
                { provide: bt, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            i
          );
        })(),
        Fr = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({
              providers: [
                Le,
                { provide: bi, useClass: Or },
                Di,
                { provide: Ci, useExisting: Di },
              ],
              imports: [
                [
                  Dr.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            i
          );
        })();
      var Ir = g(457),
        Tr = g(4742),
        wt = g(8421),
        Rr = g(3269),
        Ve = g(5403),
        Ii = g(3268),
        Pr = g(1810);
      let Ri = (() => {
          class i {
            constructor(e, n) {
              (this._renderer = e),
                (this._elementRef = n),
                (this.onChange = (r) => {}),
                (this.onTouched = () => {});
            }
            setProperty(e, n) {
              this._renderer.setProperty(this._elementRef.nativeElement, e, n);
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            registerOnChange(e) {
              this.onChange = e;
            }
            setDisabledState(e) {
              this.setProperty("disabled", e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(o.Qsj), o.Y36(o.SBq));
            }),
            (i.ɵdir = o.lG2({ type: i })),
            i
          );
        })(),
        ne = (() => {
          class i extends Ri {}
          return (
            (i.ɵfac = (function () {
              let t;
              return function (n) {
                return (t || (t = o.n5z(i)))(n || i);
              };
            })()),
            (i.ɵdir = o.lG2({ type: i, features: [o.qOj] })),
            i
          );
        })();
      const U = new o.OlP("NgValueAccessor"),
        Vr = { provide: U, useExisting: (0, o.Gpc)(() => Ne), multi: !0 },
        Br = new o.OlP("CompositionEventMode");
      let Ne = (() => {
        class i extends Ri {
          constructor(e, n, r) {
            super(e, n),
              (this._compositionMode = r),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Nr() {
                  const i = (0, y.q)() ? (0, y.q)().getUserAgent() : "";
                  return /android (\d+)/.test(i.toLowerCase());
                })());
          }
          writeValue(e) {
            this.setProperty("value", null == e ? "" : e);
          }
          _handleInput(e) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(e);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(e) {
            (this._composing = !1), this._compositionMode && this.onChange(e);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(o.Qsj), o.Y36(o.SBq), o.Y36(Br, 8));
          }),
          (i.ɵdir = o.lG2({
            type: i,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (e, n) {
              1 & e &&
                o.NdJ("input", function (s) {
                  return n._handleInput(s.target.value);
                })("blur", function () {
                  return n.onTouched();
                })("compositionstart", function () {
                  return n._compositionStart();
                })("compositionend", function (s) {
                  return n._compositionEnd(s.target.value);
                });
            },
            features: [o._Bn([Vr]), o.qOj],
          })),
          i
        );
      })();
      function ee(i) {
        return null == i || 0 === i.length;
      }
      function Li(i) {
        return null != i && "number" == typeof i.length;
      }
      const P = new o.OlP("NgValidators"),
        te = new o.OlP("NgAsyncValidators"),
        Hr =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class N {
        static min(t) {
          return (function Vi(i) {
            return (t) => {
              if (ee(t.value) || ee(i)) return null;
              const e = parseFloat(t.value);
              return !isNaN(e) && e < i
                ? { min: { min: i, actual: t.value } }
                : null;
            };
          })(t);
        }
        static max(t) {
          return (function Ni(i) {
            return (t) => {
              if (ee(t.value) || ee(i)) return null;
              const e = parseFloat(t.value);
              return !isNaN(e) && e > i
                ? { max: { max: i, actual: t.value } }
                : null;
            };
          })(t);
        }
        static required(t) {
          return (function Bi(i) {
            return ee(i.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function Hi(i) {
            return !0 === i.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function zi(i) {
            return ee(i.value) || Hr.test(i.value) ? null : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function Gi(i) {
            return (t) =>
              ee(t.value) || !Li(t.value)
                ? null
                : t.value.length < i
                ? {
                    minlength: {
                      requiredLength: i,
                      actualLength: t.value.length,
                    },
                  }
                : null;
          })(t);
        }
        static maxLength(t) {
          return Ui(t);
        }
        static pattern(t) {
          return (function ji(i) {
            if (!i) return Be;
            let t, e;
            return (
              "string" == typeof i
                ? ((e = ""),
                  "^" !== i.charAt(0) && (e += "^"),
                  (e += i),
                  "$" !== i.charAt(i.length - 1) && (e += "$"),
                  (t = new RegExp(e)))
                : ((e = i.toString()), (t = i)),
              (n) => {
                if (ee(n.value)) return null;
                const r = n.value;
                return t.test(r)
                  ? null
                  : { pattern: { requiredPattern: e, actualValue: r } };
              }
            );
          })(t);
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          return Xi(t);
        }
        static composeAsync(t) {
          return Ji(t);
        }
      }
      function Ui(i) {
        return (t) =>
          Li(t.value) && t.value.length > i
            ? { maxlength: { requiredLength: i, actualLength: t.value.length } }
            : null;
      }
      function Be(i) {
        return null;
      }
      function Yi(i) {
        return null != i;
      }
      function Zi(i) {
        const t = (0, o.QGY)(i) ? (0, Ir.D)(i) : i;
        return (0, o.CqO)(t), t;
      }
      function qi(i) {
        let t = {};
        return (
          i.forEach((e) => {
            t = null != e ? Object.assign(Object.assign({}, t), e) : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function Wi(i, t) {
        return t.map((e) => e(i));
      }
      function $i(i) {
        return i.map((t) =>
          (function zr(i) {
            return !i.validate;
          })(t)
            ? t
            : (e) => t.validate(e)
        );
      }
      function Xi(i) {
        if (!i) return null;
        const t = i.filter(Yi);
        return 0 == t.length
          ? null
          : function (e) {
              return qi(Wi(e, t));
            };
      }
      function Mt(i) {
        return null != i ? Xi($i(i)) : null;
      }
      function Ji(i) {
        if (!i) return null;
        const t = i.filter(Yi);
        return 0 == t.length
          ? null
          : function (e) {
              return (function Ti(...i) {
                const t = (0, Rr.jO)(i),
                  { args: e, keys: n } = (0, Tr.D)(i),
                  r = new he.y((s) => {
                    const { length: a } = e;
                    if (!a) return void s.complete();
                    const l = new Array(a);
                    let c = a,
                      d = a;
                    for (let u = 0; u < a; u++) {
                      let m = !1;
                      (0, wt.Xf)(e[u]).subscribe(
                        (0, Ve.x)(
                          s,
                          (x) => {
                            m || ((m = !0), d--), (l[u] = x);
                          },
                          () => c--,
                          void 0,
                          () => {
                            (!c || !m) &&
                              (d || s.next(n ? (0, Pr.n)(n, l) : l),
                              s.complete());
                          }
                        )
                      );
                    }
                  });
                return t ? r.pipe((0, Ii.Z)(t)) : r;
              })(Wi(e, t).map(Zi)).pipe((0, R.U)(qi));
            };
      }
      function Et(i) {
        return null != i ? Ji($i(i)) : null;
      }
      function Ki(i, t) {
        return null === i ? [t] : Array.isArray(i) ? [...i, t] : [i, t];
      }
      function Qi(i) {
        return i._rawValidators;
      }
      function en(i) {
        return i._rawAsyncValidators;
      }
      function St(i) {
        return i ? (Array.isArray(i) ? i : [i]) : [];
      }
      function He(i, t) {
        return Array.isArray(i) ? i.includes(t) : i === t;
      }
      function tn(i, t) {
        const e = St(t);
        return (
          St(i).forEach((r) => {
            He(e, r) || e.push(r);
          }),
          e
        );
      }
      function nn(i, t) {
        return St(t).filter((e) => !He(i, e));
      }
      class on {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(t) {
          (this._rawValidators = t || []),
            (this._composedValidatorFn = Mt(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = Et(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(t) {
          this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((t) => t()),
            (this._onDestroyCallbacks = []);
        }
        reset(t) {
          this.control && this.control.reset(t);
        }
        hasError(t, e) {
          return !!this.control && this.control.hasError(t, e);
        }
        getError(t, e) {
          return this.control ? this.control.getError(t, e) : null;
        }
      }
      class Y extends on {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class L extends on {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class rn {
        constructor(t) {
          this._cd = t;
        }
        is(t) {
          var e, n, r;
          return "submitted" === t
            ? !!(null === (e = this._cd) || void 0 === e ? void 0 : e.submitted)
            : !!(null ===
                (r =
                  null === (n = this._cd) || void 0 === n
                    ? void 0
                    : n.control) || void 0 === r
                ? void 0
                : r[t]);
        }
      }
      let sn = (() => {
          class i extends rn {
            constructor(e) {
              super(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(Y, 2));
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (e, n) {
                2 & e &&
                  o.ekj("ng-untouched", n.is("untouched"))(
                    "ng-touched",
                    n.is("touched")
                  )("ng-pristine", n.is("pristine"))("ng-dirty", n.is("dirty"))(
                    "ng-valid",
                    n.is("valid")
                  )("ng-invalid", n.is("invalid"))(
                    "ng-pending",
                    n.is("pending")
                  );
              },
              features: [o.qOj],
            })),
            i
          );
        })(),
        an = (() => {
          class i extends rn {
            constructor(e) {
              super(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(L, 10));
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (e, n) {
                2 & e &&
                  o.ekj("ng-untouched", n.is("untouched"))(
                    "ng-touched",
                    n.is("touched")
                  )("ng-pristine", n.is("pristine"))("ng-dirty", n.is("dirty"))(
                    "ng-valid",
                    n.is("valid")
                  )("ng-invalid", n.is("invalid"))(
                    "ng-pending",
                    n.is("pending")
                  )("ng-submitted", n.is("submitted"));
              },
              features: [o.qOj],
            })),
            i
          );
        })();
      function Ge(i, t) {
        return [...t.path, i];
      }
      function Ce(i, t) {
        kt(i, t),
          t.valueAccessor.writeValue(i.value),
          (function $r(i, t) {
            t.valueAccessor.registerOnChange((e) => {
              (i._pendingValue = e),
                (i._pendingChange = !0),
                (i._pendingDirty = !0),
                "change" === i.updateOn && cn(i, t);
            });
          })(i, t),
          (function Jr(i, t) {
            const e = (n, r) => {
              t.valueAccessor.writeValue(n), r && t.viewToModelUpdate(n);
            };
            i.registerOnChange(e),
              t._registerOnDestroy(() => {
                i._unregisterOnChange(e);
              });
          })(i, t),
          (function Xr(i, t) {
            t.valueAccessor.registerOnTouched(() => {
              (i._pendingTouched = !0),
                "blur" === i.updateOn && i._pendingChange && cn(i, t),
                "submit" !== i.updateOn && i.markAsTouched();
            });
          })(i, t),
          (function Wr(i, t) {
            if (t.valueAccessor.setDisabledState) {
              const e = (n) => {
                t.valueAccessor.setDisabledState(n);
              };
              i.registerOnDisabledChange(e),
                t._registerOnDestroy(() => {
                  i._unregisterOnDisabledChange(e);
                });
            }
          })(i, t);
      }
      function Ue(i, t, e = !0) {
        const n = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(n),
          t.valueAccessor.registerOnTouched(n)),
          Ye(i, t),
          i &&
            (t._invokeOnDestroyCallbacks(),
            i._registerOnCollectionChange(() => {}));
      }
      function je(i, t) {
        i.forEach((e) => {
          e.registerOnValidatorChange && e.registerOnValidatorChange(t);
        });
      }
      function kt(i, t) {
        const e = Qi(i);
        null !== t.validator
          ? i.setValidators(Ki(e, t.validator))
          : "function" == typeof e && i.setValidators([e]);
        const n = en(i);
        null !== t.asyncValidator
          ? i.setAsyncValidators(Ki(n, t.asyncValidator))
          : "function" == typeof n && i.setAsyncValidators([n]);
        const r = () => i.updateValueAndValidity();
        je(t._rawValidators, r), je(t._rawAsyncValidators, r);
      }
      function Ye(i, t) {
        let e = !1;
        if (null !== i) {
          if (null !== t.validator) {
            const r = Qi(i);
            if (Array.isArray(r) && r.length > 0) {
              const s = r.filter((a) => a !== t.validator);
              s.length !== r.length && ((e = !0), i.setValidators(s));
            }
          }
          if (null !== t.asyncValidator) {
            const r = en(i);
            if (Array.isArray(r) && r.length > 0) {
              const s = r.filter((a) => a !== t.asyncValidator);
              s.length !== r.length && ((e = !0), i.setAsyncValidators(s));
            }
          }
        }
        const n = () => {};
        return je(t._rawValidators, n), je(t._rawAsyncValidators, n), e;
      }
      function cn(i, t) {
        i._pendingDirty && i.markAsDirty(),
          i.setValue(i._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(i._pendingValue),
          (i._pendingChange = !1);
      }
      function dn(i, t) {
        kt(i, t);
      }
      function hn(i, t) {
        i._syncPendingControls(),
          t.forEach((e) => {
            const n = e.control;
            "submit" === n.updateOn &&
              n._pendingChange &&
              (e.viewToModelUpdate(n._pendingValue), (n._pendingChange = !1));
          });
      }
      function Ft(i, t) {
        const e = i.indexOf(t);
        e > -1 && i.splice(e, 1);
      }
      const we = "VALID",
        Ze = "INVALID",
        fe = "PENDING",
        Me = "DISABLED";
      function Tt(i) {
        return (qe(i) ? i.validators : i) || null;
      }
      function fn(i) {
        return Array.isArray(i) ? Mt(i) : i || null;
      }
      function Rt(i, t) {
        return (qe(t) ? t.asyncValidators : i) || null;
      }
      function pn(i) {
        return Array.isArray(i) ? Et(i) : i || null;
      }
      function qe(i) {
        return null != i && !Array.isArray(i) && "object" == typeof i;
      }
      const Pt = (i) => i instanceof Vt,
        We = (i) => i instanceof $e,
        mn = (i) => i instanceof yn;
      function _n(i) {
        return Pt(i) ? i.value : i.getRawValue();
      }
      function gn(i, t) {
        const e = We(i),
          n = i.controls;
        if (!(e ? Object.keys(n) : n).length) throw new o.vHH(1e3, "");
        if (!n[t]) throw new o.vHH(1001, "");
      }
      function vn(i, t) {
        We(i),
          i._forEachChild((n, r) => {
            if (void 0 === t[r]) throw new o.vHH(1002, "");
          });
      }
      class Lt {
        constructor(t, e) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = fn(this._rawValidators)),
            (this._composedAsyncValidatorFn = pn(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === we;
        }
        get invalid() {
          return this.status === Ze;
        }
        get pending() {
          return this.status == fe;
        }
        get disabled() {
          return this.status === Me;
        }
        get enabled() {
          return this.status !== Me;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = fn(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = pn(t));
        }
        addValidators(t) {
          this.setValidators(tn(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(tn(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(nn(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(nn(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return He(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return He(this._rawAsyncValidators, t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((e) => {
              e.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((e) => {
              e.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = fe),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = Me),
            (this.errors = null),
            this._forEachChild((n) => {
              n.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((n) => n(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = we),
            this._forEachChild((n) => {
              n.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((n) => n(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === we || this.status === fe) &&
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Me : we;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = fe), (this._hasOwnPendingAsyncValidator = !0);
            const e = Zi(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((n) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(n, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function ts(i, t, e) {
            if (
              null == t ||
              (Array.isArray(t) || (t = t.split(e)),
              Array.isArray(t) && 0 === t.length)
            )
              return null;
            let n = i;
            return (
              t.forEach((r) => {
                n = We(n)
                  ? n.controls.hasOwnProperty(r)
                    ? n.controls[r]
                    : null
                  : (mn(n) && n.at(r)) || null;
              }),
              n
            );
          })(this, t, ".");
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new o.vpe()), (this.statusChanges = new o.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Me
            : this.errors
            ? Ze
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(fe)
            ? fe
            : this._anyControlsHaveStatus(Ze)
            ? Ze
            : we;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            "value" in t &&
            "disabled" in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          qe(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class Vt extends Lt {
        constructor(t = null, e, n) {
          super(Tt(e), Rt(n, e)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            qe(e) &&
              e.initialValueIsDefault &&
              (this.defaultValue = this._isBoxedValue(t) ? t.value : t);
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((n) =>
                n(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = this.defaultValue, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          Ft(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          Ft(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class $e extends Lt {
        constructor(t, e, n) {
          super(Tt(e), Rt(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e, n = {}) {
          this.registerControl(t, e),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        setControl(t, e, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          vn(this, t),
            Object.keys(t).forEach((n) => {
              gn(this, n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (Object.keys(t).forEach((n) => {
              this.controls[n] &&
                this.controls[n].patchValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, e, n) => ((t[n] = _n(e)), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (e, n) => !!n._syncPendingControls() || e
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => {
            const n = this.controls[e];
            n && t(n, e);
          });
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const n = this.controls[e];
            if (this.contains(e) && t(n)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((r, s) => {
              n = e(n, r, s);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
      }
      class yn extends Lt {
        constructor(t, e, n) {
          super(Tt(e), Rt(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(t) {
          return this.controls[t];
        }
        push(t, e = {}) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        insert(t, e, n = {}) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity({ emitEvent: n.emitEvent });
        }
        removeAt(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity({ emitEvent: e.emitEvent });
        }
        setControl(t, e, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          vn(this, t),
            t.forEach((n, r) => {
              gn(this, r),
                this.at(r).setValue(n, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (t.forEach((n, r) => {
              this.at(r) &&
                this.at(r).patchValue(n, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) => _n(t));
        }
        clear(t = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((e) => e._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (e, n) => !!n._syncPendingControls() || e,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const is = { provide: L, useExisting: (0, o.Gpc)(() => Se) },
        Ee = (() => Promise.resolve(null))();
      let Se = (() => {
          class i extends L {
            constructor(e, n) {
              super(),
                (this.submitted = !1),
                (this._directives = new Set()),
                (this.ngSubmit = new o.vpe()),
                (this.form = new $e({}, Mt(e), Et(n)));
            }
            ngAfterViewInit() {
              this._setUpdateStrategy();
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            get controls() {
              return this.form.controls;
            }
            addControl(e) {
              Ee.then(() => {
                const n = this._findContainer(e.path);
                (e.control = n.registerControl(e.name, e.control)),
                  Ce(e.control, e),
                  e.control.updateValueAndValidity({ emitEvent: !1 }),
                  this._directives.add(e);
              });
            }
            getControl(e) {
              return this.form.get(e.path);
            }
            removeControl(e) {
              Ee.then(() => {
                const n = this._findContainer(e.path);
                n && n.removeControl(e.name), this._directives.delete(e);
              });
            }
            addFormGroup(e) {
              Ee.then(() => {
                const n = this._findContainer(e.path),
                  r = new $e({});
                dn(r, e),
                  n.registerControl(e.name, r),
                  r.updateValueAndValidity({ emitEvent: !1 });
              });
            }
            removeFormGroup(e) {
              Ee.then(() => {
                const n = this._findContainer(e.path);
                n && n.removeControl(e.name);
              });
            }
            getFormGroup(e) {
              return this.form.get(e.path);
            }
            updateModel(e, n) {
              Ee.then(() => {
                this.form.get(e.path).setValue(n);
              });
            }
            setValue(e) {
              this.control.setValue(e);
            }
            onSubmit(e) {
              return (
                (this.submitted = !0),
                hn(this.form, this._directives),
                this.ngSubmit.emit(e),
                !1
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(e) {
              this.form.reset(e), (this.submitted = !1);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.form._updateOn = this.options.updateOn);
            }
            _findContainer(e) {
              return e.pop(), e.length ? this.form.get(e) : this.form;
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(P, 10), o.Y36(te, 10));
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
                ["ng-form"],
                ["", "ngForm", ""],
              ],
              hostBindings: function (e, n) {
                1 & e &&
                  o.NdJ("submit", function (s) {
                    return n.onSubmit(s);
                  })("reset", function () {
                    return n.onReset();
                  });
              },
              inputs: { options: ["ngFormOptions", "options"] },
              outputs: { ngSubmit: "ngSubmit" },
              exportAs: ["ngForm"],
              features: [o._Bn([is]), o.qOj],
            })),
            i
          );
        })(),
        bn = (() => {
          class i extends L {
            ngOnInit() {
              this._checkParentType(), this.formDirective.addFormGroup(this);
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeFormGroup(this);
            }
            get control() {
              return this.formDirective.getFormGroup(this);
            }
            get path() {
              return Ge(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
          }
          return (
            (i.ɵfac = (function () {
              let t;
              return function (n) {
                return (t || (t = o.n5z(i)))(n || i);
              };
            })()),
            (i.ɵdir = o.lG2({ type: i, features: [o.qOj] })),
            i
          );
        })(),
        En = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            i
          );
        })(),
        xn = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({})),
            i
          );
        })();
      const Nt = new o.OlP("NgModelWithFormControlWarning"),
        ds = { provide: L, useExisting: (0, o.Gpc)(() => pe) };
      let pe = (() => {
        class i extends L {
          constructor(e, n) {
            super(),
              (this.validators = e),
              (this.asyncValidators = n),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new o.vpe()),
              this._setValidators(e),
              this._setAsyncValidators(n);
          }
          ngOnChanges(e) {
            this._checkFormPresent(),
              e.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (Ye(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(e) {
            const n = this.form.get(e.path);
            return (
              Ce(n, e),
              n.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(e),
              n
            );
          }
          getControl(e) {
            return this.form.get(e.path);
          }
          removeControl(e) {
            Ue(e.control || null, e, !1), Ft(this.directives, e);
          }
          addFormGroup(e) {
            this._setUpFormContainer(e);
          }
          removeFormGroup(e) {
            this._cleanUpFormContainer(e);
          }
          getFormGroup(e) {
            return this.form.get(e.path);
          }
          addFormArray(e) {
            this._setUpFormContainer(e);
          }
          removeFormArray(e) {
            this._cleanUpFormContainer(e);
          }
          getFormArray(e) {
            return this.form.get(e.path);
          }
          updateModel(e, n) {
            this.form.get(e.path).setValue(n);
          }
          onSubmit(e) {
            return (
              (this.submitted = !0),
              hn(this.form, this.directives),
              this.ngSubmit.emit(e),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(e) {
            this.form.reset(e), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((e) => {
              const n = e.control,
                r = this.form.get(e.path);
              n !== r &&
                (Ue(n || null, e), Pt(r) && (Ce(r, e), (e.control = r)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(e) {
            const n = this.form.get(e.path);
            dn(n, e), n.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(e) {
            if (this.form) {
              const n = this.form.get(e.path);
              n &&
                (function Kr(i, t) {
                  return Ye(i, t);
                })(n, e) &&
                n.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            kt(this.form, this), this._oldForm && Ye(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(P, 10), o.Y36(te, 10));
          }),
          (i.ɵdir = o.lG2({
            type: i,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (e, n) {
              1 & e &&
                o.NdJ("submit", function (s) {
                  return n.onSubmit(s);
                })("reset", function () {
                  return n.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [o._Bn([ds]), o.qOj, o.TTD],
          })),
          i
        );
      })();
      const us = { provide: L, useExisting: (0, o.Gpc)(() => Bt) };
      let Bt = (() => {
        class i extends bn {
          constructor(e, n, r) {
            super(),
              (this._parent = e),
              this._setValidators(n),
              this._setAsyncValidators(r);
          }
          _checkParentType() {
            Dn(this._parent);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(L, 13), o.Y36(P, 10), o.Y36(te, 10));
          }),
          (i.ɵdir = o.lG2({
            type: i,
            selectors: [["", "formGroupName", ""]],
            inputs: { name: ["formGroupName", "name"] },
            features: [o._Bn([us]), o.qOj],
          })),
          i
        );
      })();
      const hs = { provide: L, useExisting: (0, o.Gpc)(() => Xe) };
      let Xe = (() => {
        class i extends L {
          constructor(e, n, r) {
            super(),
              (this._parent = e),
              this._setValidators(n),
              this._setAsyncValidators(r);
          }
          ngOnInit() {
            this._checkParentType(), this.formDirective.addFormArray(this);
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormArray(this);
          }
          get control() {
            return this.formDirective.getFormArray(this);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get path() {
            return Ge(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          _checkParentType() {
            Dn(this._parent);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(L, 13), o.Y36(P, 10), o.Y36(te, 10));
          }),
          (i.ɵdir = o.lG2({
            type: i,
            selectors: [["", "formArrayName", ""]],
            inputs: { name: ["formArrayName", "name"] },
            features: [o._Bn([hs]), o.qOj],
          })),
          i
        );
      })();
      function Dn(i) {
        return !(i instanceof Bt || i instanceof pe || i instanceof Xe);
      }
      const fs = { provide: Y, useExisting: (0, o.Gpc)(() => Ht) };
      let Ht = (() => {
        class i extends Y {
          constructor(e, n, r, s, a) {
            super(),
              (this._ngModelWarningConfig = a),
              (this._added = !1),
              (this.update = new o.vpe()),
              (this._ngModelWarningSent = !1),
              (this._parent = e),
              this._setValidators(n),
              this._setAsyncValidators(r),
              (this.valueAccessor = (function Dt(i, t) {
                if (!t) return null;
                let e, n, r;
                return (
                  Array.isArray(t),
                  t.forEach((s) => {
                    s.constructor === Ne
                      ? (e = s)
                      : (function es(i) {
                          return Object.getPrototypeOf(i.constructor) === ne;
                        })(s)
                      ? (n = s)
                      : (r = s);
                  }),
                  r || n || e || null
                );
              })(0, s));
          }
          set isDisabled(e) {}
          ngOnChanges(e) {
            this._added || this._setUpControl(),
              (function Ot(i, t) {
                if (!i.hasOwnProperty("model")) return !1;
                const e = i.model;
                return !!e.isFirstChange() || !Object.is(t, e.currentValue);
              })(e, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(e) {
            (this.viewModel = e), this.update.emit(e);
          }
          get path() {
            return Ge(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled &&
                this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (
          (i._ngModelWarningSentOnce = !1),
          (i.ɵfac = function (e) {
            return new (e || i)(
              o.Y36(L, 13),
              o.Y36(P, 10),
              o.Y36(te, 10),
              o.Y36(U, 10),
              o.Y36(Nt, 8)
            );
          }),
          (i.ɵdir = o.lG2({
            type: i,
            selectors: [["", "formControlName", ""]],
            inputs: {
              name: ["formControlName", "name"],
              isDisabled: ["disabled", "isDisabled"],
              model: ["ngModel", "model"],
            },
            outputs: { update: "ngModelChange" },
            features: [o._Bn([fs]), o.qOj, o.TTD],
          })),
          i
        );
      })();
      let oe = (() => {
        class i {
          constructor() {
            this._validator = Be;
          }
          ngOnChanges(e) {
            if (this.inputName in e) {
              const n = this.normalizeInput(e[this.inputName].currentValue);
              (this._enabled = this.enabled(n)),
                (this._validator = this._enabled
                  ? this.createValidator(n)
                  : Be),
                this._onChange && this._onChange();
            }
          }
          validate(e) {
            return this._validator(e);
          }
          registerOnValidatorChange(e) {
            this._onChange = e;
          }
          enabled(e) {
            return null != e;
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵdir = o.lG2({ type: i, features: [o.TTD] })),
          i
        );
      })();
      const As = { provide: P, useExisting: (0, o.Gpc)(() => jt), multi: !0 };
      let jt = (() => {
          class i extends oe {
            constructor() {
              super(...arguments),
                (this.inputName = "maxlength"),
                (this.normalizeInput = (e) =>
                  (function Tn(i) {
                    return "number" == typeof i ? i : parseInt(i, 10);
                  })(e)),
                (this.createValidator = (e) => Ui(e));
            }
          }
          return (
            (i.ɵfac = (function () {
              let t;
              return function (n) {
                return (t || (t = o.n5z(i)))(n || i);
              };
            })()),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["", "maxlength", "", "formControlName", ""],
                ["", "maxlength", "", "formControl", ""],
                ["", "maxlength", "", "ngModel", ""],
              ],
              hostVars: 1,
              hostBindings: function (e, n) {
                2 & e && o.uIk("maxlength", n._enabled ? n.maxlength : null);
              },
              inputs: { maxlength: "maxlength" },
              features: [o._Bn([As]), o.qOj],
            })),
            i
          );
        })(),
        Os = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[xn]] })),
            i
          );
        })(),
        zn = (() => {
          class i {
            static withConfig(e) {
              return {
                ngModule: i,
                providers: [
                  { provide: Nt, useValue: e.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [Os] })),
            i
          );
        })(),
        Fs = (() => {
          class i {
            group(e, n = null) {
              const r = this._reduceControls(e);
              let l,
                s = null,
                a = null;
              return (
                null != n &&
                  ((function Ds(i) {
                    return (
                      void 0 !== i.asyncValidators ||
                      void 0 !== i.validators ||
                      void 0 !== i.updateOn
                    );
                  })(n)
                    ? ((s = null != n.validators ? n.validators : null),
                      (a =
                        null != n.asyncValidators ? n.asyncValidators : null),
                      (l = null != n.updateOn ? n.updateOn : void 0))
                    : ((s = null != n.validator ? n.validator : null),
                      (a =
                        null != n.asyncValidator ? n.asyncValidator : null))),
                new $e(r, { asyncValidators: a, updateOn: l, validators: s })
              );
            }
            control(e, n, r) {
              return new Vt(e, n, r);
            }
            array(e, n, r) {
              const s = e.map((a) => this._createControl(a));
              return new yn(s, n, r);
            }
            _reduceControls(e) {
              const n = {};
              return (
                Object.keys(e).forEach((r) => {
                  n[r] = this._createControl(e[r]);
                }),
                n
              );
            }
            _createControl(e) {
              return Pt(e) || We(e) || mn(e)
                ? e
                : Array.isArray(e)
                ? this.control(
                    e[0],
                    e.length > 1 ? e[1] : null,
                    e.length > 2 ? e[2] : null
                  )
                : this.control(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: zn })),
            i
          );
        })();
      var W = g(226);
      let Yt;
      try {
        Yt = "undefined" != typeof Intl && Intl.v8BreakIterator;
      } catch (i) {
        Yt = !1;
      }
      let me,
        z = (() => {
          class i {
            constructor(e) {
              (this._platformId = e),
                (this.isBrowser = this._platformId
                  ? (0, y.NF)(this._platformId)
                  : "object" == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !Yt) &&
                  "undefined" != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !("MSStream" in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(o.Lbi));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })();
      const Un = [
        "color",
        "button",
        "checkbox",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ];
      function jn() {
        if (me) return me;
        if ("object" != typeof document || !document)
          return (me = new Set(Un)), me;
        let i = document.createElement("input");
        return (
          (me = new Set(
            Un.filter((t) => (i.setAttribute("type", t), i.type === t))
          )),
          me
        );
      }
      let xe, re, Zt;
      function Je(i) {
        return (function Is() {
          if (null == xe && "undefined" != typeof window)
            try {
              window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", { get: () => (xe = !0) })
              );
            } finally {
              xe = xe || !1;
            }
          return xe;
        })()
          ? i
          : !!i.capture;
      }
      function Ts() {
        if (null == re) {
          if (
            "object" != typeof document ||
            !document ||
            "function" != typeof Element ||
            !Element
          )
            return (re = !1), re;
          if ("scrollBehavior" in document.documentElement.style) re = !0;
          else {
            const i = Element.prototype.scrollTo;
            re = !!i && !/\{\s*\[native code\]\s*\}/.test(i.toString());
          }
        }
        return re;
      }
      function Yn(i) {
        if (
          (function Rs() {
            if (null == Zt) {
              const i = "undefined" != typeof document ? document.head : null;
              Zt = !(!i || (!i.createShadowRoot && !i.attachShadow));
            }
            return Zt;
          })()
        ) {
          const t = i.getRootNode ? i.getRootNode() : null;
          if (
            "undefined" != typeof ShadowRoot &&
            ShadowRoot &&
            t instanceof ShadowRoot
          )
            return t;
        }
        return null;
      }
      function se(i) {
        return i.composedPath ? i.composedPath()[0] : i.target;
      }
      function qt() {
        return (
          ("undefined" != typeof __karma__ && !!__karma__) ||
          ("undefined" != typeof jasmine && !!jasmine) ||
          ("undefined" != typeof jest && !!jest) ||
          ("undefined" != typeof Mocha && !!Mocha)
        );
      }
      var F = g(7579),
        $ = g(727),
        Ps = g(1135);
      function Ae(i, ...t) {
        return t.length
          ? t.some((e) => i[e])
          : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey;
      }
      var Qe = g(8505),
        $n = g(8372),
        Ws = g(5684),
        Xn = g(1884),
        B = g(2722),
        v = g(3191);
      class Ks extends class Js {
        constructor(t) {
          (this._items = t),
            (this._activeItemIndex = -1),
            (this._activeItem = null),
            (this._wrap = !1),
            (this._letterKeyStream = new F.x()),
            (this._typeaheadSubscription = $.w0.EMPTY),
            (this._vertical = !0),
            (this._allowedModifierKeys = []),
            (this._homeAndEnd = !1),
            (this._skipPredicateFn = (e) => e.disabled),
            (this._pressedLetters = []),
            (this.tabOut = new F.x()),
            (this.change = new F.x()),
            t instanceof o.n_E &&
              t.changes.subscribe((e) => {
                if (this._activeItem) {
                  const r = e.toArray().indexOf(this._activeItem);
                  r > -1 &&
                    r !== this._activeItemIndex &&
                    (this._activeItemIndex = r);
                }
              });
        }
        skipPredicate(t) {
          return (this._skipPredicateFn = t), this;
        }
        withWrap(t = !0) {
          return (this._wrap = t), this;
        }
        withVerticalOrientation(t = !0) {
          return (this._vertical = t), this;
        }
        withHorizontalOrientation(t) {
          return (this._horizontal = t), this;
        }
        withAllowedModifierKeys(t) {
          return (this._allowedModifierKeys = t), this;
        }
        withTypeAhead(t = 200) {
          return (
            this._typeaheadSubscription.unsubscribe(),
            (this._typeaheadSubscription = this._letterKeyStream
              .pipe(
                (0, Qe.b)((e) => this._pressedLetters.push(e)),
                (0, $n.b)(t),
                (0, ie.h)(() => this._pressedLetters.length > 0),
                (0, R.U)(() => this._pressedLetters.join(""))
              )
              .subscribe((e) => {
                const n = this._getItemsArray();
                for (let r = 1; r < n.length + 1; r++) {
                  const s = (this._activeItemIndex + r) % n.length,
                    a = n[s];
                  if (
                    !this._skipPredicateFn(a) &&
                    0 === a.getLabel().toUpperCase().trim().indexOf(e)
                  ) {
                    this.setActiveItem(s);
                    break;
                  }
                }
                this._pressedLetters = [];
              })),
            this
          );
        }
        withHomeAndEnd(t = !0) {
          return (this._homeAndEnd = t), this;
        }
        setActiveItem(t) {
          const e = this._activeItem;
          this.updateActiveItem(t),
            this._activeItem !== e && this.change.next(this._activeItemIndex);
        }
        onKeydown(t) {
          const e = t.keyCode,
            r = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
              (s) => !t[s] || this._allowedModifierKeys.indexOf(s) > -1
            );
          switch (e) {
            case 9:
              return void this.tabOut.next();
            case 40:
              if (this._vertical && r) {
                this.setNextItemActive();
                break;
              }
              return;
            case 38:
              if (this._vertical && r) {
                this.setPreviousItemActive();
                break;
              }
              return;
            case 39:
              if (this._horizontal && r) {
                "rtl" === this._horizontal
                  ? this.setPreviousItemActive()
                  : this.setNextItemActive();
                break;
              }
              return;
            case 37:
              if (this._horizontal && r) {
                "rtl" === this._horizontal
                  ? this.setNextItemActive()
                  : this.setPreviousItemActive();
                break;
              }
              return;
            case 36:
              if (this._homeAndEnd && r) {
                this.setFirstItemActive();
                break;
              }
              return;
            case 35:
              if (this._homeAndEnd && r) {
                this.setLastItemActive();
                break;
              }
              return;
            default:
              return void (
                (r || Ae(t, "shiftKey")) &&
                (t.key && 1 === t.key.length
                  ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
                  : ((e >= 65 && e <= 90) || (e >= 48 && e <= 57)) &&
                    this._letterKeyStream.next(String.fromCharCode(e)))
              );
          }
          (this._pressedLetters = []), t.preventDefault();
        }
        get activeItemIndex() {
          return this._activeItemIndex;
        }
        get activeItem() {
          return this._activeItem;
        }
        isTyping() {
          return this._pressedLetters.length > 0;
        }
        setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        setNextItemActive() {
          this._activeItemIndex < 0
            ? this.setFirstItemActive()
            : this._setActiveItemByDelta(1);
        }
        setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap
            ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
        }
        updateActiveItem(t) {
          const e = this._getItemsArray(),
            n = "number" == typeof t ? t : e.indexOf(t),
            r = e[n];
          (this._activeItem = null == r ? null : r),
            (this._activeItemIndex = n);
        }
        _setActiveItemByDelta(t) {
          this._wrap
            ? this._setActiveInWrapMode(t)
            : this._setActiveInDefaultMode(t);
        }
        _setActiveInWrapMode(t) {
          const e = this._getItemsArray();
          for (let n = 1; n <= e.length; n++) {
            const r = (this._activeItemIndex + t * n + e.length) % e.length;
            if (!this._skipPredicateFn(e[r])) return void this.setActiveItem(r);
          }
        }
        _setActiveInDefaultMode(t) {
          this._setActiveItemByIndex(this._activeItemIndex + t, t);
        }
        _setActiveItemByIndex(t, e) {
          const n = this._getItemsArray();
          if (n[t]) {
            for (; this._skipPredicateFn(n[t]); ) if (!n[(t += e)]) return;
            this.setActiveItem(t);
          }
        }
        _getItemsArray() {
          return this._items instanceof o.n_E
            ? this._items.toArray()
            : this._items;
        }
      } {
        setActiveItem(t) {
          this.activeItem && this.activeItem.setInactiveStyles(),
            super.setActiveItem(t),
            this.activeItem && this.activeItem.setActiveStyles();
        }
      }
      function eo(i) {
        return 0 === i.buttons || (0 === i.offsetX && 0 === i.offsetY);
      }
      function to(i) {
        const t =
          (i.touches && i.touches[0]) ||
          (i.changedTouches && i.changedTouches[0]);
        return !(
          !t ||
          -1 !== t.identifier ||
          (null != t.radiusX && 1 !== t.radiusX) ||
          (null != t.radiusY && 1 !== t.radiusY)
        );
      }
      const oa = new o.OlP("cdk-input-modality-detector-options"),
        ra = { ignoreKeys: [18, 17, 224, 91, 16] },
        _e = Je({ passive: !0, capture: !0 });
      let sa = (() => {
        class i {
          constructor(e, n, r, s) {
            (this._platform = e),
              (this._mostRecentTarget = null),
              (this._modality = new Ps.X(null)),
              (this._lastTouchMs = 0),
              (this._onKeydown = (a) => {
                var l, c;
                (null ===
                  (c =
                    null === (l = this._options) || void 0 === l
                      ? void 0
                      : l.ignoreKeys) || void 0 === c
                  ? void 0
                  : c.some((d) => d === a.keyCode)) ||
                  (this._modality.next("keyboard"),
                  (this._mostRecentTarget = se(a)));
              }),
              (this._onMousedown = (a) => {
                Date.now() - this._lastTouchMs < 650 ||
                  (this._modality.next(eo(a) ? "keyboard" : "mouse"),
                  (this._mostRecentTarget = se(a)));
              }),
              (this._onTouchstart = (a) => {
                to(a)
                  ? this._modality.next("keyboard")
                  : ((this._lastTouchMs = Date.now()),
                    this._modality.next("touch"),
                    (this._mostRecentTarget = se(a)));
              }),
              (this._options = Object.assign(Object.assign({}, ra), s)),
              (this.modalityDetected = this._modality.pipe((0, Ws.T)(1))),
              (this.modalityChanged = this.modalityDetected.pipe((0, Xn.x)())),
              e.isBrowser &&
                n.runOutsideAngular(() => {
                  r.addEventListener("keydown", this._onKeydown, _e),
                    r.addEventListener("mousedown", this._onMousedown, _e),
                    r.addEventListener("touchstart", this._onTouchstart, _e);
                });
          }
          get mostRecentModality() {
            return this._modality.value;
          }
          ngOnDestroy() {
            this._modality.complete(),
              this._platform.isBrowser &&
                (document.removeEventListener("keydown", this._onKeydown, _e),
                document.removeEventListener(
                  "mousedown",
                  this._onMousedown,
                  _e
                ),
                document.removeEventListener(
                  "touchstart",
                  this._onTouchstart,
                  _e
                ));
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(
              o.LFG(z),
              o.LFG(o.R0b),
              o.LFG(y.K0),
              o.LFG(oa, 8)
            );
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      const aa = new o.OlP("liveAnnouncerElement", {
          providedIn: "root",
          factory: function la() {
            return null;
          },
        }),
        ca = new o.OlP("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
      let da = (() => {
        class i {
          constructor(e, n, r, s) {
            (this._ngZone = n),
              (this._defaultOptions = s),
              (this._document = r),
              (this._liveElement = e || this._createLiveElement());
          }
          announce(e, ...n) {
            const r = this._defaultOptions;
            let s, a;
            return (
              1 === n.length && "number" == typeof n[0]
                ? (a = n[0])
                : ([s, a] = n),
              this.clear(),
              clearTimeout(this._previousTimeout),
              s || (s = r && r.politeness ? r.politeness : "polite"),
              null == a && r && (a = r.duration),
              this._liveElement.setAttribute("aria-live", s),
              this._ngZone.runOutsideAngular(
                () =>
                  new Promise((l) => {
                    clearTimeout(this._previousTimeout),
                      (this._previousTimeout = setTimeout(() => {
                        (this._liveElement.textContent = e),
                          l(),
                          "number" == typeof a &&
                            (this._previousTimeout = setTimeout(
                              () => this.clear(),
                              a
                            ));
                      }, 100));
                  })
              )
            );
          }
          clear() {
            this._liveElement && (this._liveElement.textContent = "");
          }
          ngOnDestroy() {
            var e;
            clearTimeout(this._previousTimeout),
              null === (e = this._liveElement) || void 0 === e || e.remove(),
              (this._liveElement = null);
          }
          _createLiveElement() {
            const e = "cdk-live-announcer-element",
              n = this._document.getElementsByClassName(e),
              r = this._document.createElement("div");
            for (let s = 0; s < n.length; s++) n[s].remove();
            return (
              r.classList.add(e),
              r.classList.add("cdk-visually-hidden"),
              r.setAttribute("aria-atomic", "true"),
              r.setAttribute("aria-live", "polite"),
              this._document.body.appendChild(r),
              r
            );
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(
              o.LFG(aa, 8),
              o.LFG(o.R0b),
              o.LFG(y.K0),
              o.LFG(ca, 8)
            );
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      const ua = new o.OlP("cdk-focus-monitor-default-options"),
        et = Je({ passive: !0, capture: !0 });
      let ha = (() => {
        class i {
          constructor(e, n, r, s, a) {
            (this._ngZone = e),
              (this._platform = n),
              (this._inputModalityDetector = r),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._originFromTouchInteraction = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._rootNodeFocusListenerCount = new Map()),
              (this._windowFocusListener = () => {
                (this._windowFocused = !0),
                  (this._windowFocusTimeoutId = window.setTimeout(
                    () => (this._windowFocused = !1)
                  ));
              }),
              (this._stopInputModalityDetector = new F.x()),
              (this._rootNodeFocusAndBlurListener = (l) => {
                const c = se(l),
                  d = "focus" === l.type ? this._onFocus : this._onBlur;
                for (let u = c; u; u = u.parentElement) d.call(this, l, u);
              }),
              (this._document = s),
              (this._detectionMode =
                (null == a ? void 0 : a.detectionMode) || 0);
          }
          monitor(e, n = !1) {
            const r = (0, v.fI)(e);
            if (!this._platform.isBrowser || 1 !== r.nodeType)
              return (0, G.of)(null);
            const s = Yn(r) || this._getDocument(),
              a = this._elementInfo.get(r);
            if (a) return n && (a.checkChildren = !0), a.subject;
            const l = { checkChildren: n, subject: new F.x(), rootNode: s };
            return (
              this._elementInfo.set(r, l),
              this._registerGlobalListeners(l),
              l.subject
            );
          }
          stopMonitoring(e) {
            const n = (0, v.fI)(e),
              r = this._elementInfo.get(n);
            r &&
              (r.subject.complete(),
              this._setClasses(n),
              this._elementInfo.delete(n),
              this._removeGlobalListeners(r));
          }
          focusVia(e, n, r) {
            const s = (0, v.fI)(e);
            s === this._getDocument().activeElement
              ? this._getClosestElementsInfo(s).forEach(([l, c]) =>
                  this._originChanged(l, n, c)
                )
              : (this._setOrigin(n),
                "function" == typeof s.focus && s.focus(r));
          }
          ngOnDestroy() {
            this._elementInfo.forEach((e, n) => this.stopMonitoring(n));
          }
          _getDocument() {
            return this._document || document;
          }
          _getWindow() {
            return this._getDocument().defaultView || window;
          }
          _getFocusOrigin(e) {
            return this._origin
              ? this._originFromTouchInteraction
                ? this._shouldBeAttributedToTouch(e)
                  ? "touch"
                  : "program"
                : this._origin
              : this._windowFocused && this._lastFocusOrigin
              ? this._lastFocusOrigin
              : "program";
          }
          _shouldBeAttributedToTouch(e) {
            return (
              1 === this._detectionMode ||
              !!(null == e
                ? void 0
                : e.contains(this._inputModalityDetector._mostRecentTarget))
            );
          }
          _setClasses(e, n) {
            e.classList.toggle("cdk-focused", !!n),
              e.classList.toggle("cdk-touch-focused", "touch" === n),
              e.classList.toggle("cdk-keyboard-focused", "keyboard" === n),
              e.classList.toggle("cdk-mouse-focused", "mouse" === n),
              e.classList.toggle("cdk-program-focused", "program" === n);
          }
          _setOrigin(e, n = !1) {
            this._ngZone.runOutsideAngular(() => {
              (this._origin = e),
                (this._originFromTouchInteraction = "touch" === e && n),
                0 === this._detectionMode &&
                  (clearTimeout(this._originTimeoutId),
                  (this._originTimeoutId = setTimeout(
                    () => (this._origin = null),
                    this._originFromTouchInteraction ? 650 : 1
                  )));
            });
          }
          _onFocus(e, n) {
            const r = this._elementInfo.get(n),
              s = se(e);
            !r ||
              (!r.checkChildren && n !== s) ||
              this._originChanged(n, this._getFocusOrigin(s), r);
          }
          _onBlur(e, n) {
            const r = this._elementInfo.get(n);
            !r ||
              (r.checkChildren &&
                e.relatedTarget instanceof Node &&
                n.contains(e.relatedTarget)) ||
              (this._setClasses(n), this._emitOrigin(r.subject, null));
          }
          _emitOrigin(e, n) {
            this._ngZone.run(() => e.next(n));
          }
          _registerGlobalListeners(e) {
            if (!this._platform.isBrowser) return;
            const n = e.rootNode,
              r = this._rootNodeFocusListenerCount.get(n) || 0;
            r ||
              this._ngZone.runOutsideAngular(() => {
                n.addEventListener(
                  "focus",
                  this._rootNodeFocusAndBlurListener,
                  et
                ),
                  n.addEventListener(
                    "blur",
                    this._rootNodeFocusAndBlurListener,
                    et
                  );
              }),
              this._rootNodeFocusListenerCount.set(n, r + 1),
              1 == ++this._monitoredElementCount &&
                (this._ngZone.runOutsideAngular(() => {
                  this._getWindow().addEventListener(
                    "focus",
                    this._windowFocusListener
                  );
                }),
                this._inputModalityDetector.modalityDetected
                  .pipe((0, B.R)(this._stopInputModalityDetector))
                  .subscribe((s) => {
                    this._setOrigin(s, !0);
                  }));
          }
          _removeGlobalListeners(e) {
            const n = e.rootNode;
            if (this._rootNodeFocusListenerCount.has(n)) {
              const r = this._rootNodeFocusListenerCount.get(n);
              r > 1
                ? this._rootNodeFocusListenerCount.set(n, r - 1)
                : (n.removeEventListener(
                    "focus",
                    this._rootNodeFocusAndBlurListener,
                    et
                  ),
                  n.removeEventListener(
                    "blur",
                    this._rootNodeFocusAndBlurListener,
                    et
                  ),
                  this._rootNodeFocusListenerCount.delete(n));
            }
            --this._monitoredElementCount ||
              (this._getWindow().removeEventListener(
                "focus",
                this._windowFocusListener
              ),
              this._stopInputModalityDetector.next(),
              clearTimeout(this._windowFocusTimeoutId),
              clearTimeout(this._originTimeoutId));
          }
          _originChanged(e, n, r) {
            this._setClasses(e, n),
              this._emitOrigin(r.subject, n),
              (this._lastFocusOrigin = n);
          }
          _getClosestElementsInfo(e) {
            const n = [];
            return (
              this._elementInfo.forEach((r, s) => {
                (s === e || (r.checkChildren && s.contains(e))) &&
                  n.push([s, r]);
              }),
              n
            );
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(
              o.LFG(o.R0b),
              o.LFG(z),
              o.LFG(sa),
              o.LFG(y.K0, 8),
              o.LFG(ua, 8)
            );
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      const no = "cdk-high-contrast-black-on-white",
        oo = "cdk-high-contrast-white-on-black",
        Kt = "cdk-high-contrast-active";
      let fa = (() => {
        class i {
          constructor(e, n) {
            (this._platform = e), (this._document = n);
          }
          getHighContrastMode() {
            if (!this._platform.isBrowser) return 0;
            const e = this._document.createElement("div");
            (e.style.backgroundColor = "rgb(1,2,3)"),
              (e.style.position = "absolute"),
              this._document.body.appendChild(e);
            const n = this._document.defaultView || window,
              r = n && n.getComputedStyle ? n.getComputedStyle(e) : null,
              s = ((r && r.backgroundColor) || "").replace(/ /g, "");
            switch ((e.remove(), s)) {
              case "rgb(0,0,0)":
                return 2;
              case "rgb(255,255,255)":
                return 1;
            }
            return 0;
          }
          _applyBodyHighContrastModeCssClasses() {
            if (
              !this._hasCheckedHighContrastMode &&
              this._platform.isBrowser &&
              this._document.body
            ) {
              const e = this._document.body.classList;
              e.remove(Kt),
                e.remove(no),
                e.remove(oo),
                (this._hasCheckedHighContrastMode = !0);
              const n = this.getHighContrastMode();
              1 === n
                ? (e.add(Kt), e.add(no))
                : 2 === n && (e.add(Kt), e.add(oo));
            }
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.LFG(z), o.LFG(y.K0));
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      var ke = g(6360);
      function pa(i, t) {
        if ((1 & i && o._UZ(0, "mat-pseudo-checkbox", 4), 2 & i)) {
          const e = o.oxw();
          o.Q6J("state", e.selected ? "checked" : "unchecked")(
            "disabled",
            e.disabled
          );
        }
      }
      function ma(i, t) {
        if ((1 & i && (o.TgZ(0, "span", 5), o._uU(1), o.qZA()), 2 & i)) {
          const e = o.oxw();
          o.xp6(1), o.hij("(", e.group.label, ")");
        }
      }
      const _a = ["*"],
        va = new o.OlP("mat-sanity-checks", {
          providedIn: "root",
          factory: function ga() {
            return !0;
          },
        });
      let V = (() => {
        class i {
          constructor(e, n, r) {
            (this._sanityChecks = n),
              (this._document = r),
              (this._hasDoneGlobalChecks = !1),
              e._applyBodyHighContrastModeCssClasses(),
              this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
          }
          _checkIsEnabled(e) {
            return (
              !qt() &&
              ("boolean" == typeof this._sanityChecks
                ? this._sanityChecks
                : !!this._sanityChecks[e])
            );
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.LFG(fa), o.LFG(va, 8), o.LFG(y.K0));
          }),
          (i.ɵmod = o.oAB({ type: i })),
          (i.ɵinj = o.cJS({ imports: [[W.vT], W.vT] })),
          i
        );
      })();
      function so(i) {
        return class extends i {
          constructor(...t) {
            super(...t), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(t) {
            this._disabled = (0, v.Ig)(t);
          }
        };
      }
      function Qt(i, t) {
        return class extends i {
          constructor(...e) {
            super(...e), (this.defaultColor = t), (this.color = t);
          }
          get color() {
            return this._color;
          }
          set color(e) {
            const n = e || this.defaultColor;
            n !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  `mat-${this._color}`
                ),
              n && this._elementRef.nativeElement.classList.add(`mat-${n}`),
              (this._color = n));
          }
        };
      }
      function ao(i) {
        return class extends i {
          constructor(...t) {
            super(...t), (this._disableRipple = !1);
          }
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(t) {
            this._disableRipple = (0, v.Ig)(t);
          }
        };
      }
      function ya(i, t = 0) {
        return class extends i {
          constructor(...e) {
            super(...e), (this._tabIndex = t), (this.defaultTabIndex = t);
          }
          get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
          }
          set tabIndex(e) {
            this._tabIndex = null != e ? (0, v.su)(e) : this.defaultTabIndex;
          }
        };
      }
      function lo(i) {
        return class extends i {
          constructor(...t) {
            super(...t),
              (this.stateChanges = new F.x()),
              (this.errorState = !1);
          }
          updateErrorState() {
            const t = this.errorState,
              s = (
                this.errorStateMatcher || this._defaultErrorStateMatcher
              ).isErrorState(
                this.ngControl ? this.ngControl.control : null,
                this._parentFormGroup || this._parentForm
              );
            s !== t && ((this.errorState = s), this.stateChanges.next());
          }
        };
      }
      let ei = (() => {
        class i {
          isErrorState(e, n) {
            return !!(e && e.invalid && (e.touched || (n && n.submitted)));
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      class Ca {
        constructor(t, e, n) {
          (this._renderer = t),
            (this.element = e),
            (this.config = n),
            (this.state = 3);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const co = { enterDuration: 225, exitDuration: 150 },
        ti = Je({ passive: !0 }),
        uo = ["mousedown", "touchstart"],
        ho = ["mouseup", "mouseleave", "touchend", "touchcancel"];
      class Ma {
        constructor(t, e, n, r) {
          (this._target = t),
            (this._ngZone = e),
            (this._isPointerDown = !1),
            (this._activeRipples = new Set()),
            (this._pointerUpEventsRegistered = !1),
            r.isBrowser && (this._containerElement = (0, v.fI)(n));
        }
        fadeInRipple(t, e, n = {}) {
          const r = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            s = Object.assign(Object.assign({}, co), n.animation);
          n.centered &&
            ((t = r.left + r.width / 2), (e = r.top + r.height / 2));
          const a =
              n.radius ||
              (function Sa(i, t, e) {
                const n = Math.max(Math.abs(i - e.left), Math.abs(i - e.right)),
                  r = Math.max(Math.abs(t - e.top), Math.abs(t - e.bottom));
                return Math.sqrt(n * n + r * r);
              })(t, e, r),
            l = t - r.left,
            c = e - r.top,
            d = s.enterDuration,
            u = document.createElement("div");
          u.classList.add("mat-ripple-element"),
            (u.style.left = l - a + "px"),
            (u.style.top = c - a + "px"),
            (u.style.height = 2 * a + "px"),
            (u.style.width = 2 * a + "px"),
            null != n.color && (u.style.backgroundColor = n.color),
            (u.style.transitionDuration = `${d}ms`),
            this._containerElement.appendChild(u),
            (function Ea(i) {
              window.getComputedStyle(i).getPropertyValue("opacity");
            })(u),
            (u.style.transform = "scale(1)");
          const m = new Ca(this, u, n);
          return (
            (m.state = 0),
            this._activeRipples.add(m),
            n.persistent || (this._mostRecentTransientRipple = m),
            this._runTimeoutOutsideZone(() => {
              const x = m === this._mostRecentTransientRipple;
              (m.state = 1),
                !n.persistent && (!x || !this._isPointerDown) && m.fadeOut();
            }, d),
            m
          );
        }
        fadeOutRipple(t) {
          const e = this._activeRipples.delete(t);
          if (
            (t === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !e)
          )
            return;
          const n = t.element,
            r = Object.assign(Object.assign({}, co), t.config.animation);
          (n.style.transitionDuration = `${r.exitDuration}ms`),
            (n.style.opacity = "0"),
            (t.state = 2),
            this._runTimeoutOutsideZone(() => {
              (t.state = 3), n.remove();
            }, r.exitDuration);
        }
        fadeOutAll() {
          this._activeRipples.forEach((t) => t.fadeOut());
        }
        fadeOutAllNonPersistent() {
          this._activeRipples.forEach((t) => {
            t.config.persistent || t.fadeOut();
          });
        }
        setupTriggerEvents(t) {
          const e = (0, v.fI)(t);
          !e ||
            e === this._triggerElement ||
            (this._removeTriggerEvents(),
            (this._triggerElement = e),
            this._registerEvents(uo));
        }
        handleEvent(t) {
          "mousedown" === t.type
            ? this._onMousedown(t)
            : "touchstart" === t.type
            ? this._onTouchStart(t)
            : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._registerEvents(ho),
              (this._pointerUpEventsRegistered = !0));
        }
        _onMousedown(t) {
          const e = eo(t),
            n =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800;
          !this._target.rippleDisabled &&
            !e &&
            !n &&
            ((this._isPointerDown = !0),
            this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
        }
        _onTouchStart(t) {
          if (!this._target.rippleDisabled && !to(t)) {
            (this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0);
            const e = t.changedTouches;
            for (let n = 0; n < e.length; n++)
              this.fadeInRipple(
                e[n].clientX,
                e[n].clientY,
                this._target.rippleConfig
              );
          }
        }
        _onPointerUp() {
          !this._isPointerDown ||
            ((this._isPointerDown = !1),
            this._activeRipples.forEach((t) => {
              !t.config.persistent &&
                (1 === t.state ||
                  (t.config.terminateOnPointerUp && 0 === t.state)) &&
                t.fadeOut();
            }));
        }
        _runTimeoutOutsideZone(t, e = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(t, e));
        }
        _registerEvents(t) {
          this._ngZone.runOutsideAngular(() => {
            t.forEach((e) => {
              this._triggerElement.addEventListener(e, this, ti);
            });
          });
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            (uo.forEach((t) => {
              this._triggerElement.removeEventListener(t, this, ti);
            }),
            this._pointerUpEventsRegistered &&
              ho.forEach((t) => {
                this._triggerElement.removeEventListener(t, this, ti);
              }));
        }
      }
      const xa = new o.OlP("mat-ripple-global-options");
      let ii = (() => {
          class i {
            constructor(e, n, r, s, a) {
              (this._elementRef = e),
                (this._animationMode = a),
                (this.radius = 0),
                (this._disabled = !1),
                (this._isInitialized = !1),
                (this._globalOptions = s || {}),
                (this._rippleRenderer = new Ma(this, n, e, r));
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(e) {
              e && this.fadeOutAllNonPersistent(),
                (this._disabled = e),
                this._setupTriggerEventsIfEnabled();
            }
            get trigger() {
              return this._trigger || this._elementRef.nativeElement;
            }
            set trigger(e) {
              (this._trigger = e), this._setupTriggerEventsIfEnabled();
            }
            ngOnInit() {
              (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
            }
            ngOnDestroy() {
              this._rippleRenderer._removeTriggerEvents();
            }
            fadeOutAll() {
              this._rippleRenderer.fadeOutAll();
            }
            fadeOutAllNonPersistent() {
              this._rippleRenderer.fadeOutAllNonPersistent();
            }
            get rippleConfig() {
              return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: Object.assign(
                  Object.assign(
                    Object.assign({}, this._globalOptions.animation),
                    "NoopAnimations" === this._animationMode
                      ? { enterDuration: 0, exitDuration: 0 }
                      : {}
                  ),
                  this.animation
                ),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
              };
            }
            get rippleDisabled() {
              return this.disabled || !!this._globalOptions.disabled;
            }
            _setupTriggerEventsIfEnabled() {
              !this.disabled &&
                this._isInitialized &&
                this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
            launch(e, n = 0, r) {
              return "number" == typeof e
                ? this._rippleRenderer.fadeInRipple(
                    e,
                    n,
                    Object.assign(Object.assign({}, this.rippleConfig), r)
                  )
                : this._rippleRenderer.fadeInRipple(
                    0,
                    0,
                    Object.assign(Object.assign({}, this.rippleConfig), e)
                  );
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.Y36(o.SBq),
                o.Y36(o.R0b),
                o.Y36(z),
                o.Y36(xa, 8),
                o.Y36(ke.Qb, 8)
              );
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["", "mat-ripple", ""],
                ["", "matRipple", ""],
              ],
              hostAttrs: [1, "mat-ripple"],
              hostVars: 2,
              hostBindings: function (e, n) {
                2 & e && o.ekj("mat-ripple-unbounded", n.unbounded);
              },
              inputs: {
                color: ["matRippleColor", "color"],
                unbounded: ["matRippleUnbounded", "unbounded"],
                centered: ["matRippleCentered", "centered"],
                radius: ["matRippleRadius", "radius"],
                animation: ["matRippleAnimation", "animation"],
                disabled: ["matRippleDisabled", "disabled"],
                trigger: ["matRippleTrigger", "trigger"],
              },
              exportAs: ["matRipple"],
            })),
            i
          );
        })(),
        fo = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[V], V] })),
            i
          );
        })(),
        Aa = (() => {
          class i {
            constructor(e) {
              (this._animationMode = e),
                (this.state = "unchecked"),
                (this.disabled = !1);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(ke.Qb, 8));
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["mat-pseudo-checkbox"]],
              hostAttrs: [1, "mat-pseudo-checkbox"],
              hostVars: 8,
              hostBindings: function (e, n) {
                2 & e &&
                  o.ekj(
                    "mat-pseudo-checkbox-indeterminate",
                    "indeterminate" === n.state
                  )("mat-pseudo-checkbox-checked", "checked" === n.state)(
                    "mat-pseudo-checkbox-disabled",
                    n.disabled
                  )(
                    "_mat-animation-noopable",
                    "NoopAnimations" === n._animationMode
                  );
              },
              inputs: { state: "state", disabled: "disabled" },
              decls: 0,
              vars: 0,
              template: function (e, n) {},
              styles: [
                '.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            i
          );
        })(),
        ka = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[V]] })),
            i
          );
        })();
      const po = new o.OlP("MAT_OPTION_PARENT_COMPONENT"),
        mo = new o.OlP("MatOptgroup");
      let Oa = 0;
      class Da {
        constructor(t, e = !1) {
          (this.source = t), (this.isUserInput = e);
        }
      }
      let Fa = (() => {
          class i {
            constructor(e, n, r, s) {
              (this._element = e),
                (this._changeDetectorRef = n),
                (this._parent = r),
                (this.group = s),
                (this._selected = !1),
                (this._active = !1),
                (this._disabled = !1),
                (this._mostRecentViewValue = ""),
                (this.id = "mat-option-" + Oa++),
                (this.onSelectionChange = new o.vpe()),
                (this._stateChanges = new F.x());
            }
            get multiple() {
              return this._parent && this._parent.multiple;
            }
            get selected() {
              return this._selected;
            }
            get disabled() {
              return (this.group && this.group.disabled) || this._disabled;
            }
            set disabled(e) {
              this._disabled = (0, v.Ig)(e);
            }
            get disableRipple() {
              return !(!this._parent || !this._parent.disableRipple);
            }
            get active() {
              return this._active;
            }
            get viewValue() {
              return (this._getHostElement().textContent || "").trim();
            }
            select() {
              this._selected ||
                ((this._selected = !0),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent());
            }
            deselect() {
              this._selected &&
                ((this._selected = !1),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent());
            }
            focus(e, n) {
              const r = this._getHostElement();
              "function" == typeof r.focus && r.focus(n);
            }
            setActiveStyles() {
              this._active ||
                ((this._active = !0), this._changeDetectorRef.markForCheck());
            }
            setInactiveStyles() {
              this._active &&
                ((this._active = !1), this._changeDetectorRef.markForCheck());
            }
            getLabel() {
              return this.viewValue;
            }
            _handleKeydown(e) {
              (13 === e.keyCode || 32 === e.keyCode) &&
                !Ae(e) &&
                (this._selectViaInteraction(), e.preventDefault());
            }
            _selectViaInteraction() {
              this.disabled ||
                ((this._selected = !this.multiple || !this._selected),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent(!0));
            }
            _getAriaSelected() {
              return this.selected || (!this.multiple && null);
            }
            _getTabIndex() {
              return this.disabled ? "-1" : "0";
            }
            _getHostElement() {
              return this._element.nativeElement;
            }
            ngAfterViewChecked() {
              if (this._selected) {
                const e = this.viewValue;
                e !== this._mostRecentViewValue &&
                  ((this._mostRecentViewValue = e), this._stateChanges.next());
              }
            }
            ngOnDestroy() {
              this._stateChanges.complete();
            }
            _emitSelectionChangeEvent(e = !1) {
              this.onSelectionChange.emit(new Da(this, e));
            }
          }
          return (
            (i.ɵfac = function (e) {
              o.$Z();
            }),
            (i.ɵdir = o.lG2({
              type: i,
              inputs: { value: "value", id: "id", disabled: "disabled" },
              outputs: { onSelectionChange: "onSelectionChange" },
            })),
            i
          );
        })(),
        _o = (() => {
          class i extends Fa {
            constructor(e, n, r, s) {
              super(e, n, r, s);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.Y36(o.SBq),
                o.Y36(o.sBO),
                o.Y36(po, 8),
                o.Y36(mo, 8)
              );
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["mat-option"]],
              hostAttrs: [
                "role",
                "option",
                1,
                "mat-option",
                "mat-focus-indicator",
              ],
              hostVars: 12,
              hostBindings: function (e, n) {
                1 & e &&
                  o.NdJ("click", function () {
                    return n._selectViaInteraction();
                  })("keydown", function (s) {
                    return n._handleKeydown(s);
                  }),
                  2 & e &&
                    (o.Ikx("id", n.id),
                    o.uIk("tabindex", n._getTabIndex())(
                      "aria-selected",
                      n._getAriaSelected()
                    )("aria-disabled", n.disabled.toString()),
                    o.ekj("mat-selected", n.selected)(
                      "mat-option-multiple",
                      n.multiple
                    )("mat-active", n.active)(
                      "mat-option-disabled",
                      n.disabled
                    ));
              },
              exportAs: ["matOption"],
              features: [o.qOj],
              ngContentSelectors: _a,
              decls: 5,
              vars: 4,
              consts: [
                [
                  "class",
                  "mat-option-pseudo-checkbox",
                  3,
                  "state",
                  "disabled",
                  4,
                  "ngIf",
                ],
                [1, "mat-option-text"],
                ["class", "cdk-visually-hidden", 4, "ngIf"],
                [
                  "mat-ripple",
                  "",
                  1,
                  "mat-option-ripple",
                  3,
                  "matRippleTrigger",
                  "matRippleDisabled",
                ],
                [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"],
                [1, "cdk-visually-hidden"],
              ],
              template: function (e, n) {
                1 & e &&
                  (o.F$t(),
                  o.YNc(0, pa, 1, 2, "mat-pseudo-checkbox", 0),
                  o.TgZ(1, "span", 1),
                  o.Hsn(2),
                  o.qZA(),
                  o.YNc(3, ma, 2, 1, "span", 2),
                  o._UZ(4, "div", 3)),
                  2 & e &&
                    (o.Q6J("ngIf", n.multiple),
                    o.xp6(3),
                    o.Q6J("ngIf", n.group && n.group._inert),
                    o.xp6(1),
                    o.Q6J("matRippleTrigger", n._getHostElement())(
                      "matRippleDisabled",
                      n.disabled || n.disableRipple
                    ));
              },
              directives: [Aa, y.O5, ii],
              styles: [
                ".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            i
          );
        })();
      function go(i, t, e) {
        if (e.length) {
          let n = t.toArray(),
            r = e.toArray(),
            s = 0;
          for (let a = 0; a < i + 1; a++)
            n[a].group && n[a].group === r[s] && s++;
          return s;
        }
        return 0;
      }
      let vo = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = o.oAB({ type: i })),
          (i.ɵinj = o.cJS({ imports: [[fo, y.ez, V, ka]] })),
          i
        );
      })();
      const Ta = ["mat-button", ""],
        Ra = ["*"],
        La = [
          "mat-button",
          "mat-flat-button",
          "mat-icon-button",
          "mat-raised-button",
          "mat-stroked-button",
          "mat-mini-fab",
          "mat-fab",
        ],
        Va = Qt(
          so(
            ao(
              class {
                constructor(i) {
                  this._elementRef = i;
                }
              }
            )
          )
        );
      let ni = (() => {
          class i extends Va {
            constructor(e, n, r) {
              super(e),
                (this._focusMonitor = n),
                (this._animationMode = r),
                (this.isRoundButton = this._hasHostAttributes(
                  "mat-fab",
                  "mat-mini-fab"
                )),
                (this.isIconButton =
                  this._hasHostAttributes("mat-icon-button"));
              for (const s of La)
                this._hasHostAttributes(s) &&
                  this._getHostElement().classList.add(s);
              e.nativeElement.classList.add("mat-button-base"),
                this.isRoundButton && (this.color = "accent");
            }
            ngAfterViewInit() {
              this._focusMonitor.monitor(this._elementRef, !0);
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            focus(e, n) {
              e
                ? this._focusMonitor.focusVia(this._getHostElement(), e, n)
                : this._getHostElement().focus(n);
            }
            _getHostElement() {
              return this._elementRef.nativeElement;
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled;
            }
            _hasHostAttributes(...e) {
              return e.some((n) => this._getHostElement().hasAttribute(n));
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(o.SBq), o.Y36(ha), o.Y36(ke.Qb, 8));
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [
                ["button", "mat-button", ""],
                ["button", "mat-raised-button", ""],
                ["button", "mat-icon-button", ""],
                ["button", "mat-fab", ""],
                ["button", "mat-mini-fab", ""],
                ["button", "mat-stroked-button", ""],
                ["button", "mat-flat-button", ""],
              ],
              viewQuery: function (e, n) {
                if ((1 & e && o.Gf(ii, 5), 2 & e)) {
                  let r;
                  o.iGM((r = o.CRH())) && (n.ripple = r.first);
                }
              },
              hostAttrs: [1, "mat-focus-indicator"],
              hostVars: 5,
              hostBindings: function (e, n) {
                2 & e &&
                  (o.uIk("disabled", n.disabled || null),
                  o.ekj(
                    "_mat-animation-noopable",
                    "NoopAnimations" === n._animationMode
                  )("mat-button-disabled", n.disabled));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                color: "color",
              },
              exportAs: ["matButton"],
              features: [o.qOj],
              attrs: Ta,
              ngContentSelectors: Ra,
              decls: 4,
              vars: 5,
              consts: [
                [1, "mat-button-wrapper"],
                [
                  "matRipple",
                  "",
                  1,
                  "mat-button-ripple",
                  3,
                  "matRippleDisabled",
                  "matRippleCentered",
                  "matRippleTrigger",
                ],
                [1, "mat-button-focus-overlay"],
              ],
              template: function (e, n) {
                1 & e &&
                  (o.F$t(),
                  o.TgZ(0, "span", 0),
                  o.Hsn(1),
                  o.qZA(),
                  o._UZ(2, "span", 1)(3, "span", 2)),
                  2 & e &&
                    (o.xp6(2),
                    o.ekj(
                      "mat-button-ripple-round",
                      n.isRoundButton || n.isIconButton
                    ),
                    o.Q6J("matRippleDisabled", n._isRippleDisabled())(
                      "matRippleCentered",
                      n.isIconButton
                    )("matRippleTrigger", n._getHostElement()));
              },
              directives: [ii],
              styles: [
                ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            i
          );
        })(),
        Na = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[fo, V], V] })),
            i
          );
        })();
      var yo = g(2843),
        oi = g(262);
      g(8746), g(3099), g(2313);
      let Za = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[V], V] })),
            i
          );
        })(),
        So = (() => {
          class i {
            create(e) {
              return "undefined" == typeof MutationObserver
                ? null
                : new MutationObserver(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        qa = (() => {
          class i {
            constructor(e) {
              (this._mutationObserverFactory = e),
                (this._observedElements = new Map());
            }
            ngOnDestroy() {
              this._observedElements.forEach((e, n) =>
                this._cleanupObserver(n)
              );
            }
            observe(e) {
              const n = (0, v.fI)(e);
              return new he.y((r) => {
                const a = this._observeElement(n).subscribe(r);
                return () => {
                  a.unsubscribe(), this._unobserveElement(n);
                };
              });
            }
            _observeElement(e) {
              if (this._observedElements.has(e))
                this._observedElements.get(e).count++;
              else {
                const n = new F.x(),
                  r = this._mutationObserverFactory.create((s) => n.next(s));
                r &&
                  r.observe(e, {
                    characterData: !0,
                    childList: !0,
                    subtree: !0,
                  }),
                  this._observedElements.set(e, {
                    observer: r,
                    stream: n,
                    count: 1,
                  });
              }
              return this._observedElements.get(e).stream;
            }
            _unobserveElement(e) {
              this._observedElements.has(e) &&
                (this._observedElements.get(e).count--,
                this._observedElements.get(e).count ||
                  this._cleanupObserver(e));
            }
            _cleanupObserver(e) {
              if (this._observedElements.has(e)) {
                const { observer: n, stream: r } =
                  this._observedElements.get(e);
                n && n.disconnect(),
                  r.complete(),
                  this._observedElements.delete(e);
              }
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(So));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        Wa = (() => {
          class i {
            constructor(e, n, r) {
              (this._contentObserver = e),
                (this._elementRef = n),
                (this._ngZone = r),
                (this.event = new o.vpe()),
                (this._disabled = !1),
                (this._currentSubscription = null);
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(e) {
              (this._disabled = (0, v.Ig)(e)),
                this._disabled ? this._unsubscribe() : this._subscribe();
            }
            get debounce() {
              return this._debounce;
            }
            set debounce(e) {
              (this._debounce = (0, v.su)(e)), this._subscribe();
            }
            ngAfterContentInit() {
              !this._currentSubscription && !this.disabled && this._subscribe();
            }
            ngOnDestroy() {
              this._unsubscribe();
            }
            _subscribe() {
              this._unsubscribe();
              const e = this._contentObserver.observe(this._elementRef);
              this._ngZone.runOutsideAngular(() => {
                this._currentSubscription = (
                  this.debounce ? e.pipe((0, $n.b)(this.debounce)) : e
                ).subscribe(this.event);
              });
            }
            _unsubscribe() {
              var e;
              null === (e = this._currentSubscription) ||
                void 0 === e ||
                e.unsubscribe();
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(qa), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [["", "cdkObserveContent", ""]],
              inputs: {
                disabled: ["cdkObserveContentDisabled", "disabled"],
                debounce: "debounce",
              },
              outputs: { event: "cdkObserveContent" },
              exportAs: ["cdkObserveContent"],
            })),
            i
          );
        })(),
        $a = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ providers: [So] })),
            i
          );
        })();
      var Fe = g(6451),
        si = g(5577),
        Xa = g(1144),
        le = g(576);
      const Ja = ["addListener", "removeListener"],
        Ka = ["addEventListener", "removeEventListener"],
        Qa = ["on", "off"];
      function nt(i, t, e, n) {
        if (((0, le.m)(e) && ((n = e), (e = void 0)), n))
          return nt(i, t, e).pipe((0, Ii.Z)(n));
        const [r, s] = (function il(i) {
          return (
            (0, le.m)(i.addEventListener) && (0, le.m)(i.removeEventListener)
          );
        })(i)
          ? Ka.map((a) => (l) => i[a](t, l, e))
          : (function el(i) {
              return (0, le.m)(i.addListener) && (0, le.m)(i.removeListener);
            })(i)
          ? Ja.map(xo(i, t))
          : (function tl(i) {
              return (0, le.m)(i.on) && (0, le.m)(i.off);
            })(i)
          ? Qa.map(xo(i, t))
          : [];
        if (!r && (0, Xa.z)(i))
          return (0, si.z)((a) => nt(a, t, e))((0, wt.Xf)(i));
        if (!r) throw new TypeError("Invalid event target");
        return new he.y((a) => {
          const l = (...c) => a.next(1 < c.length ? c : c[0]);
          return r(l), () => s(l);
        });
      }
      function xo(i, t) {
        return (e) => (n) => i[e](t, n);
      }
      var Ie = g(8675),
        ge = g(5698),
        O = g(1777);
      const nl = ["connectionContainer"],
        ol = ["inputContainer"],
        rl = ["label"];
      function sl(i, t) {
        1 & i &&
          (o.ynx(0),
          o.TgZ(1, "div", 14),
          o._UZ(2, "div", 15)(3, "div", 16)(4, "div", 17),
          o.qZA(),
          o.TgZ(5, "div", 18),
          o._UZ(6, "div", 15)(7, "div", 16)(8, "div", 17),
          o.qZA(),
          o.BQk());
      }
      function al(i, t) {
        if (1 & i) {
          const e = o.EpF();
          o.TgZ(0, "div", 19),
            o.NdJ("cdkObserveContent", function () {
              return o.CHM(e), o.oxw().updateOutlineGap();
            }),
            o.Hsn(1, 1),
            o.qZA();
        }
        if (2 & i) {
          const e = o.oxw();
          o.Q6J("cdkObserveContentDisabled", "outline" != e.appearance);
        }
      }
      function ll(i, t) {
        if (
          (1 & i &&
            (o.ynx(0),
            o.Hsn(1, 2),
            o.TgZ(2, "span"),
            o._uU(3),
            o.qZA(),
            o.BQk()),
          2 & i)
        ) {
          const e = o.oxw(2);
          o.xp6(3), o.Oqu(e._control.placeholder);
        }
      }
      function cl(i, t) {
        1 & i && o.Hsn(0, 3, ["*ngSwitchCase", "true"]);
      }
      function dl(i, t) {
        1 & i && (o.TgZ(0, "span", 23), o._uU(1, " *"), o.qZA());
      }
      function ul(i, t) {
        if (1 & i) {
          const e = o.EpF();
          o.TgZ(0, "label", 20, 21),
            o.NdJ("cdkObserveContent", function () {
              return o.CHM(e), o.oxw().updateOutlineGap();
            }),
            o.YNc(2, ll, 4, 1, "ng-container", 12),
            o.YNc(3, cl, 1, 0, "ng-content", 12),
            o.YNc(4, dl, 2, 0, "span", 22),
            o.qZA();
        }
        if (2 & i) {
          const e = o.oxw();
          o.ekj("mat-empty", e._control.empty && !e._shouldAlwaysFloat())(
            "mat-form-field-empty",
            e._control.empty && !e._shouldAlwaysFloat()
          )("mat-accent", "accent" == e.color)("mat-warn", "warn" == e.color),
            o.Q6J("cdkObserveContentDisabled", "outline" != e.appearance)(
              "id",
              e._labelId
            )("ngSwitch", e._hasLabel()),
            o.uIk("for", e._control.id)("aria-owns", e._control.id),
            o.xp6(2),
            o.Q6J("ngSwitchCase", !1),
            o.xp6(1),
            o.Q6J("ngSwitchCase", !0),
            o.xp6(1),
            o.Q6J(
              "ngIf",
              !e.hideRequiredMarker &&
                e._control.required &&
                !e._control.disabled
            );
        }
      }
      function hl(i, t) {
        1 & i && (o.TgZ(0, "div", 24), o.Hsn(1, 4), o.qZA());
      }
      function fl(i, t) {
        if (
          (1 & i && (o.TgZ(0, "div", 25), o._UZ(1, "span", 26), o.qZA()), 2 & i)
        ) {
          const e = o.oxw();
          o.xp6(1),
            o.ekj("mat-accent", "accent" == e.color)(
              "mat-warn",
              "warn" == e.color
            );
        }
      }
      function pl(i, t) {
        if ((1 & i && (o.TgZ(0, "div"), o.Hsn(1, 5), o.qZA()), 2 & i)) {
          const e = o.oxw();
          o.Q6J("@transitionMessages", e._subscriptAnimationState);
        }
      }
      function ml(i, t) {
        if ((1 & i && (o.TgZ(0, "div", 30), o._uU(1), o.qZA()), 2 & i)) {
          const e = o.oxw(2);
          o.Q6J("id", e._hintLabelId), o.xp6(1), o.Oqu(e.hintLabel);
        }
      }
      function _l(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "div", 27),
            o.YNc(1, ml, 2, 2, "div", 28),
            o.Hsn(2, 6),
            o._UZ(3, "div", 29),
            o.Hsn(4, 7),
            o.qZA()),
          2 & i)
        ) {
          const e = o.oxw();
          o.Q6J("@transitionMessages", e._subscriptAnimationState),
            o.xp6(1),
            o.Q6J("ngIf", e.hintLabel);
        }
      }
      const gl = [
          "*",
          [["", "matPrefix", ""]],
          [["mat-placeholder"]],
          [["mat-label"]],
          [["", "matSuffix", ""]],
          [["mat-error"]],
          [["mat-hint", 3, "align", "end"]],
          [["mat-hint", "align", "end"]],
        ],
        vl = [
          "*",
          "[matPrefix]",
          "mat-placeholder",
          "mat-label",
          "[matSuffix]",
          "mat-error",
          "mat-hint:not([align='end'])",
          "mat-hint[align='end']",
        ];
      let yl = 0;
      const Ao = new o.OlP("MatError");
      let bl = (() => {
        class i {
          constructor(e, n) {
            (this.id = "mat-error-" + yl++),
              e || n.nativeElement.setAttribute("aria-live", "polite");
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.$8M("aria-live"), o.Y36(o.SBq));
          }),
          (i.ɵdir = o.lG2({
            type: i,
            selectors: [["mat-error"]],
            hostAttrs: ["aria-atomic", "true", 1, "mat-error"],
            hostVars: 1,
            hostBindings: function (e, n) {
              2 & e && o.uIk("id", n.id);
            },
            inputs: { id: "id" },
            features: [o._Bn([{ provide: Ao, useExisting: i }])],
          })),
          i
        );
      })();
      const Cl = {
        transitionMessages: (0, O.X$)("transitionMessages", [
          (0, O.SB)(
            "enter",
            (0, O.oB)({ opacity: 1, transform: "translateY(0%)" })
          ),
          (0, O.eR)("void => enter", [
            (0, O.oB)({ opacity: 0, transform: "translateY(-5px)" }),
            (0, O.jt)("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
          ]),
        ]),
      };
      let ot = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = o.lG2({ type: i })),
            i
          );
        })(),
        wl = 0;
      const ko = new o.OlP("MatHint");
      let Ml = (() => {
          class i {
            constructor() {
              (this.align = "start"), (this.id = "mat-hint-" + wl++);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [["mat-hint"]],
              hostAttrs: [1, "mat-hint"],
              hostVars: 4,
              hostBindings: function (e, n) {
                2 & e &&
                  (o.uIk("id", n.id)("align", null),
                  o.ekj("mat-form-field-hint-end", "end" === n.align));
              },
              inputs: { align: "align", id: "id" },
              features: [o._Bn([{ provide: ko, useExisting: i }])],
            })),
            i
          );
        })(),
        ai = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = o.lG2({ type: i, selectors: [["mat-label"]] })),
            i
          );
        })(),
        El = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = o.lG2({ type: i, selectors: [["mat-placeholder"]] })),
            i
          );
        })();
      const Sl = new o.OlP("MatPrefix"),
        Oo = new o.OlP("MatSuffix");
      let xl = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [["", "matSuffix", ""]],
              features: [o._Bn([{ provide: Oo, useExisting: i }])],
            })),
            i
          );
        })(),
        Do = 0;
      const kl = Qt(
          class {
            constructor(i) {
              this._elementRef = i;
            }
          },
          "primary"
        ),
        Io = new o.OlP("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
        li = new o.OlP("MatFormField");
      let Ol = (() => {
          class i extends kl {
            constructor(e, n, r, s, a, l, c) {
              super(e),
                (this._changeDetectorRef = n),
                (this._dir = r),
                (this._defaults = s),
                (this._platform = a),
                (this._ngZone = l),
                (this._outlineGapCalculationNeededImmediately = !1),
                (this._outlineGapCalculationNeededOnStable = !1),
                (this._destroyed = new F.x()),
                (this._showAlwaysAnimate = !1),
                (this._subscriptAnimationState = ""),
                (this._hintLabel = ""),
                (this._hintLabelId = "mat-hint-" + Do++),
                (this._labelId = "mat-form-field-label-" + Do++),
                (this.floatLabel = this._getDefaultFloatLabelState()),
                (this._animationsEnabled = "NoopAnimations" !== c),
                (this.appearance = s && s.appearance ? s.appearance : "legacy"),
                (this._hideRequiredMarker =
                  !(!s || null == s.hideRequiredMarker) &&
                  s.hideRequiredMarker);
            }
            get appearance() {
              return this._appearance;
            }
            set appearance(e) {
              const n = this._appearance;
              (this._appearance =
                e || (this._defaults && this._defaults.appearance) || "legacy"),
                "outline" === this._appearance &&
                  n !== e &&
                  (this._outlineGapCalculationNeededOnStable = !0);
            }
            get hideRequiredMarker() {
              return this._hideRequiredMarker;
            }
            set hideRequiredMarker(e) {
              this._hideRequiredMarker = (0, v.Ig)(e);
            }
            _shouldAlwaysFloat() {
              return "always" === this.floatLabel && !this._showAlwaysAnimate;
            }
            _canLabelFloat() {
              return "never" !== this.floatLabel;
            }
            get hintLabel() {
              return this._hintLabel;
            }
            set hintLabel(e) {
              (this._hintLabel = e), this._processHints();
            }
            get floatLabel() {
              return "legacy" !== this.appearance &&
                "never" === this._floatLabel
                ? "auto"
                : this._floatLabel;
            }
            set floatLabel(e) {
              e !== this._floatLabel &&
                ((this._floatLabel = e || this._getDefaultFloatLabelState()),
                this._changeDetectorRef.markForCheck());
            }
            get _control() {
              return (
                this._explicitFormFieldControl ||
                this._controlNonStatic ||
                this._controlStatic
              );
            }
            set _control(e) {
              this._explicitFormFieldControl = e;
            }
            getLabelId() {
              return this._hasFloatingLabel() ? this._labelId : null;
            }
            getConnectedOverlayOrigin() {
              return this._connectionContainerRef || this._elementRef;
            }
            ngAfterContentInit() {
              this._validateControlChild();
              const e = this._control;
              e.controlType &&
                this._elementRef.nativeElement.classList.add(
                  `mat-form-field-type-${e.controlType}`
                ),
                e.stateChanges.pipe((0, Ie.O)(null)).subscribe(() => {
                  this._validatePlaceholders(),
                    this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                e.ngControl &&
                  e.ngControl.valueChanges &&
                  e.ngControl.valueChanges
                    .pipe((0, B.R)(this._destroyed))
                    .subscribe(() => this._changeDetectorRef.markForCheck()),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable
                    .pipe((0, B.R)(this._destroyed))
                    .subscribe(() => {
                      this._outlineGapCalculationNeededOnStable &&
                        this.updateOutlineGap();
                    });
                }),
                (0, Fe.T)(
                  this._prefixChildren.changes,
                  this._suffixChildren.changes
                ).subscribe(() => {
                  (this._outlineGapCalculationNeededOnStable = !0),
                    this._changeDetectorRef.markForCheck();
                }),
                this._hintChildren.changes
                  .pipe((0, Ie.O)(null))
                  .subscribe(() => {
                    this._processHints(),
                      this._changeDetectorRef.markForCheck();
                  }),
                this._errorChildren.changes
                  .pipe((0, Ie.O)(null))
                  .subscribe(() => {
                    this._syncDescribedByIds(),
                      this._changeDetectorRef.markForCheck();
                  }),
                this._dir &&
                  this._dir.change
                    .pipe((0, B.R)(this._destroyed))
                    .subscribe(() => {
                      "function" == typeof requestAnimationFrame
                        ? this._ngZone.runOutsideAngular(() => {
                            requestAnimationFrame(() =>
                              this.updateOutlineGap()
                            );
                          })
                        : this.updateOutlineGap();
                    });
            }
            ngAfterContentChecked() {
              this._validateControlChild(),
                this._outlineGapCalculationNeededImmediately &&
                  this.updateOutlineGap();
            }
            ngAfterViewInit() {
              (this._subscriptAnimationState = "enter"),
                this._changeDetectorRef.detectChanges();
            }
            ngOnDestroy() {
              this._destroyed.next(), this._destroyed.complete();
            }
            _shouldForward(e) {
              const n = this._control ? this._control.ngControl : null;
              return n && n[e];
            }
            _hasPlaceholder() {
              return !!(
                (this._control && this._control.placeholder) ||
                this._placeholderChild
              );
            }
            _hasLabel() {
              return !(!this._labelChildNonStatic && !this._labelChildStatic);
            }
            _shouldLabelFloat() {
              return (
                this._canLabelFloat() &&
                ((this._control && this._control.shouldLabelFloat) ||
                  this._shouldAlwaysFloat())
              );
            }
            _hideControlPlaceholder() {
              return (
                ("legacy" === this.appearance && !this._hasLabel()) ||
                (this._hasLabel() && !this._shouldLabelFloat())
              );
            }
            _hasFloatingLabel() {
              return (
                this._hasLabel() ||
                ("legacy" === this.appearance && this._hasPlaceholder())
              );
            }
            _getDisplayedMessages() {
              return this._errorChildren &&
                this._errorChildren.length > 0 &&
                this._control.errorState
                ? "error"
                : "hint";
            }
            _animateAndLockLabel() {
              this._hasFloatingLabel() &&
                this._canLabelFloat() &&
                (this._animationsEnabled &&
                  this._label &&
                  ((this._showAlwaysAnimate = !0),
                  nt(this._label.nativeElement, "transitionend")
                    .pipe((0, ge.q)(1))
                    .subscribe(() => {
                      this._showAlwaysAnimate = !1;
                    })),
                (this.floatLabel = "always"),
                this._changeDetectorRef.markForCheck());
            }
            _validatePlaceholders() {}
            _processHints() {
              this._validateHints(), this._syncDescribedByIds();
            }
            _validateHints() {}
            _getDefaultFloatLabelState() {
              return (this._defaults && this._defaults.floatLabel) || "auto";
            }
            _syncDescribedByIds() {
              if (this._control) {
                let e = [];
                if (
                  (this._control.userAriaDescribedBy &&
                    "string" == typeof this._control.userAriaDescribedBy &&
                    e.push(...this._control.userAriaDescribedBy.split(" ")),
                  "hint" === this._getDisplayedMessages())
                ) {
                  const n = this._hintChildren
                      ? this._hintChildren.find((s) => "start" === s.align)
                      : null,
                    r = this._hintChildren
                      ? this._hintChildren.find((s) => "end" === s.align)
                      : null;
                  n
                    ? e.push(n.id)
                    : this._hintLabel && e.push(this._hintLabelId),
                    r && e.push(r.id);
                } else
                  this._errorChildren &&
                    e.push(...this._errorChildren.map((n) => n.id));
                this._control.setDescribedByIds(e);
              }
            }
            _validateControlChild() {}
            updateOutlineGap() {
              const e = this._label ? this._label.nativeElement : null,
                n = this._connectionContainerRef.nativeElement,
                r = ".mat-form-field-outline-start",
                s = ".mat-form-field-outline-gap";
              if ("outline" !== this.appearance || !this._platform.isBrowser)
                return;
              if (!e || !e.children.length || !e.textContent.trim()) {
                const u = n.querySelectorAll(`${r}, ${s}`);
                for (let m = 0; m < u.length; m++) u[m].style.width = "0";
                return;
              }
              if (!this._isAttachedToDOM())
                return void (this._outlineGapCalculationNeededImmediately = !0);
              let a = 0,
                l = 0;
              const c = n.querySelectorAll(r),
                d = n.querySelectorAll(s);
              if (this._label && this._label.nativeElement.children.length) {
                const u = n.getBoundingClientRect();
                if (0 === u.width && 0 === u.height)
                  return (
                    (this._outlineGapCalculationNeededOnStable = !0),
                    void (this._outlineGapCalculationNeededImmediately = !1)
                  );
                const m = this._getStartEnd(u),
                  x = e.children,
                  w = this._getStartEnd(x[0].getBoundingClientRect());
                let E = 0;
                for (let A = 0; A < x.length; A++) E += x[A].offsetWidth;
                (a = Math.abs(w - m) - 5), (l = E > 0 ? 0.75 * E + 10 : 0);
              }
              for (let u = 0; u < c.length; u++) c[u].style.width = `${a}px`;
              for (let u = 0; u < d.length; u++) d[u].style.width = `${l}px`;
              this._outlineGapCalculationNeededOnStable =
                this._outlineGapCalculationNeededImmediately = !1;
            }
            _getStartEnd(e) {
              return this._dir && "rtl" === this._dir.value ? e.right : e.left;
            }
            _isAttachedToDOM() {
              const e = this._elementRef.nativeElement;
              if (e.getRootNode) {
                const n = e.getRootNode();
                return n && n !== e;
              }
              return document.documentElement.contains(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.Y36(o.SBq),
                o.Y36(o.sBO),
                o.Y36(W.Is, 8),
                o.Y36(Io, 8),
                o.Y36(z),
                o.Y36(o.R0b),
                o.Y36(ke.Qb, 8)
              );
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["mat-form-field"]],
              contentQueries: function (e, n, r) {
                if (
                  (1 & e &&
                    (o.Suo(r, ot, 5),
                    o.Suo(r, ot, 7),
                    o.Suo(r, ai, 5),
                    o.Suo(r, ai, 7),
                    o.Suo(r, El, 5),
                    o.Suo(r, Ao, 5),
                    o.Suo(r, ko, 5),
                    o.Suo(r, Sl, 5),
                    o.Suo(r, Oo, 5)),
                  2 & e)
                ) {
                  let s;
                  o.iGM((s = o.CRH())) && (n._controlNonStatic = s.first),
                    o.iGM((s = o.CRH())) && (n._controlStatic = s.first),
                    o.iGM((s = o.CRH())) && (n._labelChildNonStatic = s.first),
                    o.iGM((s = o.CRH())) && (n._labelChildStatic = s.first),
                    o.iGM((s = o.CRH())) && (n._placeholderChild = s.first),
                    o.iGM((s = o.CRH())) && (n._errorChildren = s),
                    o.iGM((s = o.CRH())) && (n._hintChildren = s),
                    o.iGM((s = o.CRH())) && (n._prefixChildren = s),
                    o.iGM((s = o.CRH())) && (n._suffixChildren = s);
                }
              },
              viewQuery: function (e, n) {
                if ((1 & e && (o.Gf(nl, 7), o.Gf(ol, 5), o.Gf(rl, 5)), 2 & e)) {
                  let r;
                  o.iGM((r = o.CRH())) && (n._connectionContainerRef = r.first),
                    o.iGM((r = o.CRH())) && (n._inputContainerRef = r.first),
                    o.iGM((r = o.CRH())) && (n._label = r.first);
                }
              },
              hostAttrs: [1, "mat-form-field"],
              hostVars: 40,
              hostBindings: function (e, n) {
                2 & e &&
                  o.ekj(
                    "mat-form-field-appearance-standard",
                    "standard" == n.appearance
                  )("mat-form-field-appearance-fill", "fill" == n.appearance)(
                    "mat-form-field-appearance-outline",
                    "outline" == n.appearance
                  )(
                    "mat-form-field-appearance-legacy",
                    "legacy" == n.appearance
                  )("mat-form-field-invalid", n._control.errorState)(
                    "mat-form-field-can-float",
                    n._canLabelFloat()
                  )("mat-form-field-should-float", n._shouldLabelFloat())(
                    "mat-form-field-has-label",
                    n._hasFloatingLabel()
                  )(
                    "mat-form-field-hide-placeholder",
                    n._hideControlPlaceholder()
                  )("mat-form-field-disabled", n._control.disabled)(
                    "mat-form-field-autofilled",
                    n._control.autofilled
                  )("mat-focused", n._control.focused)(
                    "ng-untouched",
                    n._shouldForward("untouched")
                  )("ng-touched", n._shouldForward("touched"))(
                    "ng-pristine",
                    n._shouldForward("pristine")
                  )("ng-dirty", n._shouldForward("dirty"))(
                    "ng-valid",
                    n._shouldForward("valid")
                  )("ng-invalid", n._shouldForward("invalid"))(
                    "ng-pending",
                    n._shouldForward("pending")
                  )("_mat-animation-noopable", !n._animationsEnabled);
              },
              inputs: {
                color: "color",
                appearance: "appearance",
                hideRequiredMarker: "hideRequiredMarker",
                hintLabel: "hintLabel",
                floatLabel: "floatLabel",
              },
              exportAs: ["matFormField"],
              features: [o._Bn([{ provide: li, useExisting: i }]), o.qOj],
              ngContentSelectors: vl,
              decls: 15,
              vars: 8,
              consts: [
                [1, "mat-form-field-wrapper"],
                [1, "mat-form-field-flex", 3, "click"],
                ["connectionContainer", ""],
                [4, "ngIf"],
                [
                  "class",
                  "mat-form-field-prefix",
                  3,
                  "cdkObserveContentDisabled",
                  "cdkObserveContent",
                  4,
                  "ngIf",
                ],
                [1, "mat-form-field-infix"],
                ["inputContainer", ""],
                [1, "mat-form-field-label-wrapper"],
                [
                  "class",
                  "mat-form-field-label",
                  3,
                  "cdkObserveContentDisabled",
                  "id",
                  "mat-empty",
                  "mat-form-field-empty",
                  "mat-accent",
                  "mat-warn",
                  "ngSwitch",
                  "cdkObserveContent",
                  4,
                  "ngIf",
                ],
                ["class", "mat-form-field-suffix", 4, "ngIf"],
                ["class", "mat-form-field-underline", 4, "ngIf"],
                [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"],
                [4, "ngSwitchCase"],
                ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"],
                [1, "mat-form-field-outline"],
                [1, "mat-form-field-outline-start"],
                [1, "mat-form-field-outline-gap"],
                [1, "mat-form-field-outline-end"],
                [1, "mat-form-field-outline", "mat-form-field-outline-thick"],
                [
                  1,
                  "mat-form-field-prefix",
                  3,
                  "cdkObserveContentDisabled",
                  "cdkObserveContent",
                ],
                [
                  1,
                  "mat-form-field-label",
                  3,
                  "cdkObserveContentDisabled",
                  "id",
                  "ngSwitch",
                  "cdkObserveContent",
                ],
                ["label", ""],
                [
                  "class",
                  "mat-placeholder-required mat-form-field-required-marker",
                  "aria-hidden",
                  "true",
                  4,
                  "ngIf",
                ],
                [
                  "aria-hidden",
                  "true",
                  1,
                  "mat-placeholder-required",
                  "mat-form-field-required-marker",
                ],
                [1, "mat-form-field-suffix"],
                [1, "mat-form-field-underline"],
                [1, "mat-form-field-ripple"],
                [1, "mat-form-field-hint-wrapper"],
                ["class", "mat-hint", 3, "id", 4, "ngIf"],
                [1, "mat-form-field-hint-spacer"],
                [1, "mat-hint", 3, "id"],
              ],
              template: function (e, n) {
                1 & e &&
                  (o.F$t(gl),
                  o.TgZ(0, "div", 0)(1, "div", 1, 2),
                  o.NdJ("click", function (s) {
                    return (
                      n._control.onContainerClick &&
                      n._control.onContainerClick(s)
                    );
                  }),
                  o.YNc(3, sl, 9, 0, "ng-container", 3),
                  o.YNc(4, al, 2, 1, "div", 4),
                  o.TgZ(5, "div", 5, 6),
                  o.Hsn(7),
                  o.TgZ(8, "span", 7),
                  o.YNc(9, ul, 5, 16, "label", 8),
                  o.qZA()(),
                  o.YNc(10, hl, 2, 0, "div", 9),
                  o.qZA(),
                  o.YNc(11, fl, 2, 4, "div", 10),
                  o.TgZ(12, "div", 11),
                  o.YNc(13, pl, 2, 1, "div", 12),
                  o.YNc(14, _l, 5, 2, "div", 13),
                  o.qZA()()),
                  2 & e &&
                    (o.xp6(3),
                    o.Q6J("ngIf", "outline" == n.appearance),
                    o.xp6(1),
                    o.Q6J("ngIf", n._prefixChildren.length),
                    o.xp6(5),
                    o.Q6J("ngIf", n._hasFloatingLabel()),
                    o.xp6(1),
                    o.Q6J("ngIf", n._suffixChildren.length),
                    o.xp6(1),
                    o.Q6J("ngIf", "outline" != n.appearance),
                    o.xp6(1),
                    o.Q6J("ngSwitch", n._getDisplayedMessages()),
                    o.xp6(1),
                    o.Q6J("ngSwitchCase", "error"),
                    o.xp6(1),
                    o.Q6J("ngSwitchCase", "hint"));
              },
              directives: [y.O5, Wa, y.RF, y.n9],
              styles: [
                ".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n",
                '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n',
                '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n',
                ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n",
                ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n",
                ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n",
              ],
              encapsulation: 2,
              data: { animation: [Cl.transitionMessages] },
              changeDetection: 0,
            })),
            i
          );
        })(),
        rt = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[y.ez, V, $a], V] })),
            i
          );
        })();
      var Dl = g(515);
      const To = Je({ passive: !0 });
      let Fl = (() => {
          class i {
            constructor(e, n) {
              (this._platform = e),
                (this._ngZone = n),
                (this._monitoredElements = new Map());
            }
            monitor(e) {
              if (!this._platform.isBrowser) return Dl.E;
              const n = (0, v.fI)(e),
                r = this._monitoredElements.get(n);
              if (r) return r.subject;
              const s = new F.x(),
                a = "cdk-text-field-autofilled",
                l = (c) => {
                  "cdk-text-field-autofill-start" !== c.animationName ||
                  n.classList.contains(a)
                    ? "cdk-text-field-autofill-end" === c.animationName &&
                      n.classList.contains(a) &&
                      (n.classList.remove(a),
                      this._ngZone.run(() =>
                        s.next({ target: c.target, isAutofilled: !1 })
                      ))
                    : (n.classList.add(a),
                      this._ngZone.run(() =>
                        s.next({ target: c.target, isAutofilled: !0 })
                      ));
                };
              return (
                this._ngZone.runOutsideAngular(() => {
                  n.addEventListener("animationstart", l, To),
                    n.classList.add("cdk-text-field-autofill-monitored");
                }),
                this._monitoredElements.set(n, {
                  subject: s,
                  unlisten: () => {
                    n.removeEventListener("animationstart", l, To);
                  },
                }),
                s
              );
            }
            stopMonitoring(e) {
              const n = (0, v.fI)(e),
                r = this._monitoredElements.get(n);
              r &&
                (r.unlisten(),
                r.subject.complete(),
                n.classList.remove("cdk-text-field-autofill-monitored"),
                n.classList.remove("cdk-text-field-autofilled"),
                this._monitoredElements.delete(n));
            }
            ngOnDestroy() {
              this._monitoredElements.forEach((e, n) => this.stopMonitoring(n));
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(z), o.LFG(o.R0b));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        Ro = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({})),
            i
          );
        })();
      const Il = new o.OlP("MAT_INPUT_VALUE_ACCESSOR"),
        Tl = [
          "button",
          "checkbox",
          "file",
          "hidden",
          "image",
          "radio",
          "range",
          "reset",
          "submit",
        ];
      let Rl = 0;
      const Pl = lo(
        class {
          constructor(i, t, e, n) {
            (this._defaultErrorStateMatcher = i),
              (this._parentForm = t),
              (this._parentFormGroup = e),
              (this.ngControl = n);
          }
        }
      );
      let Ll = (() => {
          class i extends Pl {
            constructor(e, n, r, s, a, l, c, d, u, m) {
              super(l, s, a, r),
                (this._elementRef = e),
                (this._platform = n),
                (this._autofillMonitor = d),
                (this._formField = m),
                (this._uid = "mat-input-" + Rl++),
                (this.focused = !1),
                (this.stateChanges = new F.x()),
                (this.controlType = "mat-input"),
                (this.autofilled = !1),
                (this._disabled = !1),
                (this._type = "text"),
                (this._readonly = !1),
                (this._neverEmptyInputTypes = [
                  "date",
                  "datetime",
                  "datetime-local",
                  "month",
                  "time",
                  "week",
                ].filter((E) => jn().has(E))),
                (this._iOSKeyupListener = (E) => {
                  const A = E.target;
                  !A.value &&
                    0 === A.selectionStart &&
                    0 === A.selectionEnd &&
                    (A.setSelectionRange(1, 1), A.setSelectionRange(0, 0));
                });
              const x = this._elementRef.nativeElement,
                w = x.nodeName.toLowerCase();
              (this._inputValueAccessor = c || x),
                (this._previousNativeValue = this.value),
                (this.id = this.id),
                n.IOS &&
                  u.runOutsideAngular(() => {
                    e.nativeElement.addEventListener(
                      "keyup",
                      this._iOSKeyupListener
                    );
                  }),
                (this._isServer = !this._platform.isBrowser),
                (this._isNativeSelect = "select" === w),
                (this._isTextarea = "textarea" === w),
                (this._isInFormField = !!m),
                this._isNativeSelect &&
                  (this.controlType = x.multiple
                    ? "mat-native-select-multiple"
                    : "mat-native-select");
            }
            get disabled() {
              return this.ngControl && null !== this.ngControl.disabled
                ? this.ngControl.disabled
                : this._disabled;
            }
            set disabled(e) {
              (this._disabled = (0, v.Ig)(e)),
                this.focused && ((this.focused = !1), this.stateChanges.next());
            }
            get id() {
              return this._id;
            }
            set id(e) {
              this._id = e || this._uid;
            }
            get required() {
              var e, n, r, s;
              return (
                null !==
                  (s =
                    null !== (e = this._required) && void 0 !== e
                      ? e
                      : null ===
                          (r =
                            null === (n = this.ngControl) || void 0 === n
                              ? void 0
                              : n.control) || void 0 === r
                      ? void 0
                      : r.hasValidator(N.required)) &&
                void 0 !== s &&
                s
              );
            }
            set required(e) {
              this._required = (0, v.Ig)(e);
            }
            get type() {
              return this._type;
            }
            set type(e) {
              (this._type = e || "text"),
                this._validateType(),
                !this._isTextarea &&
                  jn().has(this._type) &&
                  (this._elementRef.nativeElement.type = this._type);
            }
            get value() {
              return this._inputValueAccessor.value;
            }
            set value(e) {
              e !== this.value &&
                ((this._inputValueAccessor.value = e),
                this.stateChanges.next());
            }
            get readonly() {
              return this._readonly;
            }
            set readonly(e) {
              this._readonly = (0, v.Ig)(e);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                this._autofillMonitor
                  .monitor(this._elementRef.nativeElement)
                  .subscribe((e) => {
                    (this.autofilled = e.isAutofilled),
                      this.stateChanges.next();
                  });
            }
            ngOnChanges() {
              this.stateChanges.next();
            }
            ngOnDestroy() {
              this.stateChanges.complete(),
                this._platform.isBrowser &&
                  this._autofillMonitor.stopMonitoring(
                    this._elementRef.nativeElement
                  ),
                this._platform.IOS &&
                  this._elementRef.nativeElement.removeEventListener(
                    "keyup",
                    this._iOSKeyupListener
                  );
            }
            ngDoCheck() {
              this.ngControl && this.updateErrorState(),
                this._dirtyCheckNativeValue(),
                this._dirtyCheckPlaceholder();
            }
            focus(e) {
              this._elementRef.nativeElement.focus(e);
            }
            _focusChanged(e) {
              e !== this.focused &&
                ((this.focused = e), this.stateChanges.next());
            }
            _onInput() {}
            _dirtyCheckPlaceholder() {
              var e, n;
              const r = (
                null ===
                  (n =
                    null === (e = this._formField) || void 0 === e
                      ? void 0
                      : e._hideControlPlaceholder) || void 0 === n
                  ? void 0
                  : n.call(e)
              )
                ? null
                : this.placeholder;
              if (r !== this._previousPlaceholder) {
                const s = this._elementRef.nativeElement;
                (this._previousPlaceholder = r),
                  r
                    ? s.setAttribute("placeholder", r)
                    : s.removeAttribute("placeholder");
              }
            }
            _dirtyCheckNativeValue() {
              const e = this._elementRef.nativeElement.value;
              this._previousNativeValue !== e &&
                ((this._previousNativeValue = e), this.stateChanges.next());
            }
            _validateType() {
              Tl.indexOf(this._type);
            }
            _isNeverEmpty() {
              return this._neverEmptyInputTypes.indexOf(this._type) > -1;
            }
            _isBadInput() {
              let e = this._elementRef.nativeElement.validity;
              return e && e.badInput;
            }
            get empty() {
              return !(
                this._isNeverEmpty() ||
                this._elementRef.nativeElement.value ||
                this._isBadInput() ||
                this.autofilled
              );
            }
            get shouldLabelFloat() {
              if (this._isNativeSelect) {
                const e = this._elementRef.nativeElement,
                  n = e.options[0];
                return (
                  this.focused ||
                  e.multiple ||
                  !this.empty ||
                  !!(e.selectedIndex > -1 && n && n.label)
                );
              }
              return this.focused || !this.empty;
            }
            setDescribedByIds(e) {
              e.length
                ? this._elementRef.nativeElement.setAttribute(
                    "aria-describedby",
                    e.join(" ")
                  )
                : this._elementRef.nativeElement.removeAttribute(
                    "aria-describedby"
                  );
            }
            onContainerClick() {
              this.focused || this.focus();
            }
            _isInlineSelect() {
              const e = this._elementRef.nativeElement;
              return this._isNativeSelect && (e.multiple || e.size > 1);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.Y36(o.SBq),
                o.Y36(z),
                o.Y36(Y, 10),
                o.Y36(Se, 8),
                o.Y36(pe, 8),
                o.Y36(ei),
                o.Y36(Il, 10),
                o.Y36(Fl),
                o.Y36(o.R0b),
                o.Y36(li, 8)
              );
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["input", "matInput", ""],
                ["textarea", "matInput", ""],
                ["select", "matNativeControl", ""],
                ["input", "matNativeControl", ""],
                ["textarea", "matNativeControl", ""],
              ],
              hostAttrs: [
                1,
                "mat-input-element",
                "mat-form-field-autofill-control",
              ],
              hostVars: 12,
              hostBindings: function (e, n) {
                1 & e &&
                  o.NdJ("focus", function () {
                    return n._focusChanged(!0);
                  })("blur", function () {
                    return n._focusChanged(!1);
                  })("input", function () {
                    return n._onInput();
                  }),
                  2 & e &&
                    (o.Ikx("disabled", n.disabled)("required", n.required),
                    o.uIk("id", n.id)("data-placeholder", n.placeholder)(
                      "name",
                      n.name || null
                    )("readonly", (n.readonly && !n._isNativeSelect) || null)(
                      "aria-invalid",
                      n.empty && n.required ? null : n.errorState
                    )("aria-required", n.required),
                    o.ekj("mat-input-server", n._isServer)(
                      "mat-native-select-inline",
                      n._isInlineSelect()
                    ));
              },
              inputs: {
                disabled: "disabled",
                id: "id",
                placeholder: "placeholder",
                name: "name",
                required: "required",
                type: "type",
                errorStateMatcher: "errorStateMatcher",
                userAriaDescribedBy: [
                  "aria-describedby",
                  "userAriaDescribedBy",
                ],
                value: "value",
                readonly: "readonly",
              },
              exportAs: ["matInput"],
              features: [
                o._Bn([{ provide: ot, useExisting: i }]),
                o.qOj,
                o.TTD,
              ],
            })),
            i
          );
        })(),
        Vl = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({
              providers: [ei],
              imports: [[Ro, rt, V], Ro, rt],
            })),
            i
          );
        })();
      var Po = g(4408);
      const Te = {
        schedule(i) {
          let t = requestAnimationFrame,
            e = cancelAnimationFrame;
          const { delegate: n } = Te;
          n && ((t = n.requestAnimationFrame), (e = n.cancelAnimationFrame));
          const r = t((s) => {
            (e = void 0), i(s);
          });
          return new $.w0(() => (null == e ? void 0 : e(r)));
        },
        requestAnimationFrame(...i) {
          const { delegate: t } = Te;
          return (
            (null == t ? void 0 : t.requestAnimationFrame) ||
            requestAnimationFrame
          )(...i);
        },
        cancelAnimationFrame(...i) {
          const { delegate: t } = Te;
          return (
            (null == t ? void 0 : t.cancelAnimationFrame) ||
            cancelAnimationFrame
          )(...i);
        },
        delegate: void 0,
      };
      var Lo = g(7565);
      new (class Bl extends Lo.v {
        flush(t) {
          this._active = !0;
          const e = this._scheduled;
          this._scheduled = void 0;
          const { actions: n } = this;
          let r;
          t = t || n.shift();
          do {
            if ((r = t.execute(t.state, t.delay))) break;
          } while ((t = n[0]) && t.id === e && n.shift());
          if (((this._active = !1), r)) {
            for (; (t = n[0]) && t.id === e && n.shift(); ) t.unsubscribe();
            throw r;
          }
        }
      })(
        class Nl extends Po.o {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          requestAsyncId(t, e, n = 0) {
            return null !== n && n > 0
              ? super.requestAsyncId(t, e, n)
              : (t.actions.push(this),
                t._scheduled ||
                  (t._scheduled = Te.requestAnimationFrame(() =>
                    t.flush(void 0)
                  )));
          }
          recycleAsyncId(t, e, n = 0) {
            if ((null != n && n > 0) || (null == n && this.delay > 0))
              return super.recycleAsyncId(t, e, n);
            t.actions.some((r) => r.id === e) ||
              (Te.cancelAnimationFrame(e), (t._scheduled = void 0));
          }
        }
      );
      let ci,
        zl = 1;
      const st = {};
      function Vo(i) {
        return i in st && (delete st[i], !0);
      }
      const Gl = {
          setImmediate(i) {
            const t = zl++;
            return (
              (st[t] = !0),
              ci || (ci = Promise.resolve()),
              ci.then(() => Vo(t) && i()),
              t
            );
          },
          clearImmediate(i) {
            Vo(i);
          },
        },
        { setImmediate: Ul, clearImmediate: jl } = Gl,
        at = {
          setImmediate(...i) {
            const { delegate: t } = at;
            return ((null == t ? void 0 : t.setImmediate) || Ul)(...i);
          },
          clearImmediate(i) {
            const { delegate: t } = at;
            return ((null == t ? void 0 : t.clearImmediate) || jl)(i);
          },
          delegate: void 0,
        };
      new (class Zl extends Lo.v {
        flush(t) {
          this._active = !0;
          const e = this._scheduled;
          this._scheduled = void 0;
          const { actions: n } = this;
          let r;
          t = t || n.shift();
          do {
            if ((r = t.execute(t.state, t.delay))) break;
          } while ((t = n[0]) && t.id === e && n.shift());
          if (((this._active = !1), r)) {
            for (; (t = n[0]) && t.id === e && n.shift(); ) t.unsubscribe();
            throw r;
          }
        }
      })(
        class Yl extends Po.o {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          requestAsyncId(t, e, n = 0) {
            return null !== n && n > 0
              ? super.requestAsyncId(t, e, n)
              : (t.actions.push(this),
                t._scheduled ||
                  (t._scheduled = at.setImmediate(t.flush.bind(t, void 0))));
          }
          recycleAsyncId(t, e, n = 0) {
            if ((null != n && n > 0) || (null == n && this.delay > 0))
              return super.recycleAsyncId(t, e, n);
            t.actions.some((r) => r.id === e) ||
              (at.clearImmediate(e), (t._scheduled = void 0));
          }
        }
      );
      var No = g(4986),
        Bo = g(4482),
        $l = g(3532),
        Xl = g(1165);
      function Ho(i, t = No.z) {
        return (function Wl(i) {
          return (0, Bo.e)((t, e) => {
            let n = !1,
              r = null,
              s = null,
              a = !1;
            const l = () => {
                if ((null == s || s.unsubscribe(), (s = null), n)) {
                  n = !1;
                  const d = r;
                  (r = null), e.next(d);
                }
                a && e.complete();
              },
              c = () => {
                (s = null), a && e.complete();
              };
            t.subscribe(
              (0, Ve.x)(
                e,
                (d) => {
                  (n = !0),
                    (r = d),
                    s || (0, wt.Xf)(i(d)).subscribe((s = (0, Ve.x)(e, l, c)));
                },
                () => {
                  (a = !0), (!n || !s || s.closed) && e.complete();
                }
              )
            );
          });
        })(() =>
          (function Jl(i = 0, t, e = No.P) {
            let n = -1;
            return (
              null != t && ((0, $l.K)(t) ? (e = t) : (n = t)),
              new he.y((r) => {
                let s = (0, Xl.q)(i) ? +i - e.now() : i;
                s < 0 && (s = 0);
                let a = 0;
                return e.schedule(function () {
                  r.closed ||
                    (r.next(a++),
                    0 <= n ? this.schedule(void 0, n) : r.complete());
                }, s);
              })
            );
          })(i, t)
        );
      }
      let Ql = (() => {
          class i {
            constructor(e, n, r) {
              (this._ngZone = e),
                (this._platform = n),
                (this._scrolled = new F.x()),
                (this._globalSubscription = null),
                (this._scrolledCount = 0),
                (this.scrollContainers = new Map()),
                (this._document = r);
            }
            register(e) {
              this.scrollContainers.has(e) ||
                this.scrollContainers.set(
                  e,
                  e.elementScrolled().subscribe(() => this._scrolled.next(e))
                );
            }
            deregister(e) {
              const n = this.scrollContainers.get(e);
              n && (n.unsubscribe(), this.scrollContainers.delete(e));
            }
            scrolled(e = 20) {
              return this._platform.isBrowser
                ? new he.y((n) => {
                    this._globalSubscription || this._addGlobalListener();
                    const r =
                      e > 0
                        ? this._scrolled.pipe(Ho(e)).subscribe(n)
                        : this._scrolled.subscribe(n);
                    return (
                      this._scrolledCount++,
                      () => {
                        r.unsubscribe(),
                          this._scrolledCount--,
                          this._scrolledCount || this._removeGlobalListener();
                      }
                    );
                  })
                : (0, G.of)();
            }
            ngOnDestroy() {
              this._removeGlobalListener(),
                this.scrollContainers.forEach((e, n) => this.deregister(n)),
                this._scrolled.complete();
            }
            ancestorScrolled(e, n) {
              const r = this.getAncestorScrollContainers(e);
              return this.scrolled(n).pipe(
                (0, ie.h)((s) => !s || r.indexOf(s) > -1)
              );
            }
            getAncestorScrollContainers(e) {
              const n = [];
              return (
                this.scrollContainers.forEach((r, s) => {
                  this._scrollableContainsElement(s, e) && n.push(s);
                }),
                n
              );
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _scrollableContainsElement(e, n) {
              let r = (0, v.fI)(n),
                s = e.getElementRef().nativeElement;
              do {
                if (r == s) return !0;
              } while ((r = r.parentElement));
              return !1;
            }
            _addGlobalListener() {
              this._globalSubscription = this._ngZone.runOutsideAngular(() =>
                nt(this._getWindow().document, "scroll").subscribe(() =>
                  this._scrolled.next()
                )
              );
            }
            _removeGlobalListener() {
              this._globalSubscription &&
                (this._globalSubscription.unsubscribe(),
                (this._globalSubscription = null));
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(o.R0b), o.LFG(z), o.LFG(y.K0, 8));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        lt = (() => {
          class i {
            constructor(e, n, r) {
              (this._platform = e),
                (this._change = new F.x()),
                (this._changeListener = (s) => {
                  this._change.next(s);
                }),
                (this._document = r),
                n.runOutsideAngular(() => {
                  if (e.isBrowser) {
                    const s = this._getWindow();
                    s.addEventListener("resize", this._changeListener),
                      s.addEventListener(
                        "orientationchange",
                        this._changeListener
                      );
                  }
                  this.change().subscribe(() => (this._viewportSize = null));
                });
            }
            ngOnDestroy() {
              if (this._platform.isBrowser) {
                const e = this._getWindow();
                e.removeEventListener("resize", this._changeListener),
                  e.removeEventListener(
                    "orientationchange",
                    this._changeListener
                  );
              }
              this._change.complete();
            }
            getViewportSize() {
              this._viewportSize || this._updateViewportSize();
              const e = {
                width: this._viewportSize.width,
                height: this._viewportSize.height,
              };
              return this._platform.isBrowser || (this._viewportSize = null), e;
            }
            getViewportRect() {
              const e = this.getViewportScrollPosition(),
                { width: n, height: r } = this.getViewportSize();
              return {
                top: e.top,
                left: e.left,
                bottom: e.top + r,
                right: e.left + n,
                height: r,
                width: n,
              };
            }
            getViewportScrollPosition() {
              if (!this._platform.isBrowser) return { top: 0, left: 0 };
              const e = this._document,
                n = this._getWindow(),
                r = e.documentElement,
                s = r.getBoundingClientRect();
              return {
                top:
                  -s.top || e.body.scrollTop || n.scrollY || r.scrollTop || 0,
                left:
                  -s.left ||
                  e.body.scrollLeft ||
                  n.scrollX ||
                  r.scrollLeft ||
                  0,
              };
            }
            change(e = 20) {
              return e > 0 ? this._change.pipe(Ho(e)) : this._change;
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _updateViewportSize() {
              const e = this._getWindow();
              this._viewportSize = this._platform.isBrowser
                ? { width: e.innerWidth, height: e.innerHeight }
                : { width: 0, height: 0 };
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(z), o.LFG(o.R0b), o.LFG(y.K0, 8));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        di = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({})),
            i
          );
        })(),
        zo = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[W.vT, di], W.vT, di] })),
            i
          );
        })();
      class ui {
        attach(t) {
          return (this._attachedHost = t), t.attach(this);
        }
        detach() {
          let t = this._attachedHost;
          null != t && ((this._attachedHost = null), t.detach());
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class tc extends ui {
        constructor(t, e, n, r) {
          super(),
            (this.component = t),
            (this.viewContainerRef = e),
            (this.injector = n),
            (this.componentFactoryResolver = r);
        }
      }
      class Go extends ui {
        constructor(t, e, n) {
          super(),
            (this.templateRef = t),
            (this.viewContainerRef = e),
            (this.context = n);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(t, e = this.context) {
          return (this.context = e), super.attach(t);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class ic extends ui {
        constructor(t) {
          super(), (this.element = t instanceof o.SBq ? t.nativeElement : t);
        }
      }
      class oc extends class nc {
        constructor() {
          (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(t) {
          return t instanceof tc
            ? ((this._attachedPortal = t), this.attachComponentPortal(t))
            : t instanceof Go
            ? ((this._attachedPortal = t), this.attachTemplatePortal(t))
            : this.attachDomPortal && t instanceof ic
            ? ((this._attachedPortal = t), this.attachDomPortal(t))
            : void 0;
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      } {
        constructor(t, e, n, r, s) {
          super(),
            (this.outletElement = t),
            (this._componentFactoryResolver = e),
            (this._appRef = n),
            (this._defaultInjector = r),
            (this.attachDomPortal = (a) => {
              const l = a.element,
                c = this._document.createComment("dom-portal");
              l.parentNode.insertBefore(c, l),
                this.outletElement.appendChild(l),
                (this._attachedPortal = a),
                super.setDisposeFn(() => {
                  c.parentNode && c.parentNode.replaceChild(l, c);
                });
            }),
            (this._document = s);
        }
        attachComponentPortal(t) {
          const n = (
            t.componentFactoryResolver || this._componentFactoryResolver
          ).resolveComponentFactory(t.component);
          let r;
          return (
            t.viewContainerRef
              ? ((r = t.viewContainerRef.createComponent(
                  n,
                  t.viewContainerRef.length,
                  t.injector || t.viewContainerRef.injector
                )),
                this.setDisposeFn(() => r.destroy()))
              : ((r = n.create(t.injector || this._defaultInjector)),
                this._appRef.attachView(r.hostView),
                this.setDisposeFn(() => {
                  this._appRef.detachView(r.hostView), r.destroy();
                })),
            this.outletElement.appendChild(this._getComponentRootNode(r)),
            (this._attachedPortal = t),
            r
          );
        }
        attachTemplatePortal(t) {
          let e = t.viewContainerRef,
            n = e.createEmbeddedView(t.templateRef, t.context);
          return (
            n.rootNodes.forEach((r) => this.outletElement.appendChild(r)),
            n.detectChanges(),
            this.setDisposeFn(() => {
              let r = e.indexOf(n);
              -1 !== r && e.remove(r);
            }),
            (this._attachedPortal = t),
            n
          );
        }
        dispose() {
          super.dispose(), this.outletElement.remove();
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      let rc = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = o.oAB({ type: i })),
          (i.ɵinj = o.cJS({})),
          i
        );
      })();
      const Uo = Ts();
      class ac {
        constructor(t, e) {
          (this._viewportRuler = t),
            (this._previousHTMLStyles = { top: "", left: "" }),
            (this._isEnabled = !1),
            (this._document = e);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const t = this._document.documentElement;
            (this._previousScrollPosition =
              this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = t.style.left || ""),
              (this._previousHTMLStyles.top = t.style.top || ""),
              (t.style.left = (0, v.HM)(-this._previousScrollPosition.left)),
              (t.style.top = (0, v.HM)(-this._previousScrollPosition.top)),
              t.classList.add("cdk-global-scrollblock"),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const t = this._document.documentElement,
              n = t.style,
              r = this._document.body.style,
              s = n.scrollBehavior || "",
              a = r.scrollBehavior || "";
            (this._isEnabled = !1),
              (n.left = this._previousHTMLStyles.left),
              (n.top = this._previousHTMLStyles.top),
              t.classList.remove("cdk-global-scrollblock"),
              Uo && (n.scrollBehavior = r.scrollBehavior = "auto"),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top
              ),
              Uo && ((n.scrollBehavior = s), (r.scrollBehavior = a));
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              "cdk-global-scrollblock"
            ) ||
            this._isEnabled
          )
            return !1;
          const e = this._document.body,
            n = this._viewportRuler.getViewportSize();
          return e.scrollHeight > n.height || e.scrollWidth > n.width;
        }
      }
      class lc {
        constructor(t, e, n, r) {
          (this._scrollDispatcher = t),
            (this._ngZone = e),
            (this._viewportRuler = n),
            (this._config = r),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(t) {
          this._overlayRef = t;
        }
        enable() {
          if (this._scrollSubscription) return;
          const t = this._scrollDispatcher.scrolled(0);
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition =
                this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = t.subscribe(() => {
                const e = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(e - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = t.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class jo {
        enable() {}
        disable() {}
        attach() {}
      }
      function hi(i, t) {
        return t.some(
          (e) =>
            i.bottom < e.top ||
            i.top > e.bottom ||
            i.right < e.left ||
            i.left > e.right
        );
      }
      function Yo(i, t) {
        return t.some(
          (e) =>
            i.top < e.top ||
            i.bottom > e.bottom ||
            i.left < e.left ||
            i.right > e.right
        );
      }
      class cc {
        constructor(t, e, n, r) {
          (this._scrollDispatcher = t),
            (this._viewportRuler = e),
            (this._ngZone = n),
            (this._config = r),
            (this._scrollSubscription = null);
        }
        attach(t) {
          this._overlayRef = t;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const e =
                      this._overlayRef.overlayElement.getBoundingClientRect(),
                    { width: n, height: r } =
                      this._viewportRuler.getViewportSize();
                  hi(e, [
                    {
                      width: n,
                      height: r,
                      bottom: r,
                      right: n,
                      top: 0,
                      left: 0,
                    },
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let dc = (() => {
        class i {
          constructor(e, n, r, s) {
            (this._scrollDispatcher = e),
              (this._viewportRuler = n),
              (this._ngZone = r),
              (this.noop = () => new jo()),
              (this.close = (a) =>
                new lc(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  a
                )),
              (this.block = () => new ac(this._viewportRuler, this._document)),
              (this.reposition = (a) =>
                new cc(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  a
                )),
              (this._document = s);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(
              o.LFG(Ql),
              o.LFG(lt),
              o.LFG(o.R0b),
              o.LFG(y.K0)
            );
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      class Zo {
        constructor(t) {
          if (
            ((this.scrollStrategy = new jo()),
            (this.panelClass = ""),
            (this.hasBackdrop = !1),
            (this.backdropClass = "cdk-overlay-dark-backdrop"),
            (this.disposeOnNavigation = !1),
            t)
          ) {
            const e = Object.keys(t);
            for (const n of e) void 0 !== t[n] && (this[n] = t[n]);
          }
        }
      }
      class uc {
        constructor(t, e) {
          (this.connectionPair = t), (this.scrollableViewProperties = e);
        }
      }
      class hc {
        constructor(t, e, n, r, s, a, l, c, d) {
          (this._portalOutlet = t),
            (this._host = e),
            (this._pane = n),
            (this._config = r),
            (this._ngZone = s),
            (this._keyboardDispatcher = a),
            (this._document = l),
            (this._location = c),
            (this._outsideClickDispatcher = d),
            (this._backdropElement = null),
            (this._backdropClick = new F.x()),
            (this._attachments = new F.x()),
            (this._detachments = new F.x()),
            (this._locationChanges = $.w0.EMPTY),
            (this._backdropClickHandler = (u) => this._backdropClick.next(u)),
            (this._backdropTransitionendHandler = (u) => {
              this._disposeBackdrop(u.target);
            }),
            (this._keydownEvents = new F.x()),
            (this._outsidePointerEvents = new F.x()),
            r.scrollStrategy &&
              ((this._scrollStrategy = r.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = r.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(t) {
          let e = this._portalOutlet.attach(t);
          return (
            !this._host.parentElement &&
              this._previousHostParent &&
              this._previousHostParent.appendChild(this._host),
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe((0, ge.q)(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose()
              )),
            this._outsideClickDispatcher.add(this),
            e
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const t = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher.remove(this),
            t
          );
        }
        dispose() {
          var t;
          const e = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this._disposeBackdrop(this._backdropElement),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher.remove(this),
            null === (t = this._host) || void 0 === t || t.remove(),
            (this._previousHostParent = this._pane = this._host = null),
            e && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(t) {
          t !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = t),
            this.hasAttached() && (t.attach(this), this.updatePosition()));
        }
        updateSize(t) {
          (this._config = Object.assign(Object.assign({}, this._config), t)),
            this._updateElementSize();
        }
        setDirection(t) {
          (this._config = Object.assign(Object.assign({}, this._config), {
            direction: t,
          })),
            this._updateElementDirection();
        }
        addPanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !0);
        }
        removePanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !1);
        }
        getDirection() {
          const t = this._config.direction;
          return t ? ("string" == typeof t ? t : t.value) : "ltr";
        }
        updateScrollStrategy(t) {
          t !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = t),
            this.hasAttached() && (t.attach(this), t.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute("dir", this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const t = this._pane.style;
          (t.width = (0, v.HM)(this._config.width)),
            (t.height = (0, v.HM)(this._config.height)),
            (t.minWidth = (0, v.HM)(this._config.minWidth)),
            (t.minHeight = (0, v.HM)(this._config.minHeight)),
            (t.maxWidth = (0, v.HM)(this._config.maxWidth)),
            (t.maxHeight = (0, v.HM)(this._config.maxHeight));
        }
        _togglePointerEvents(t) {
          this._pane.style.pointerEvents = t ? "" : "none";
        }
        _attachBackdrop() {
          const t = "cdk-overlay-backdrop-showing";
          (this._backdropElement = this._document.createElement("div")),
            this._backdropElement.classList.add("cdk-overlay-backdrop"),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host
            ),
            this._backdropElement.addEventListener(
              "click",
              this._backdropClickHandler
            ),
            "undefined" != typeof requestAnimationFrame
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(t);
                  });
                })
              : this._backdropElement.classList.add(t);
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          const t = this._backdropElement;
          !t ||
            (t.classList.remove("cdk-overlay-backdrop-showing"),
            this._ngZone.runOutsideAngular(() => {
              t.addEventListener(
                "transitionend",
                this._backdropTransitionendHandler
              );
            }),
            (t.style.pointerEvents = "none"),
            (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
              setTimeout(() => {
                this._disposeBackdrop(t);
              }, 500)
            )));
        }
        _toggleClasses(t, e, n) {
          const r = (0, v.Eq)(e || []).filter((s) => !!s);
          r.length && (n ? t.classList.add(...r) : t.classList.remove(...r));
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const t = this._ngZone.onStable
              .pipe((0, B.R)((0, Fe.T)(this._attachments, this._detachments)))
              .subscribe(() => {
                (!this._pane ||
                  !this._host ||
                  0 === this._pane.children.length) &&
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._host.remove()),
                  t.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const t = this._scrollStrategy;
          t && (t.disable(), t.detach && t.detach());
        }
        _disposeBackdrop(t) {
          t &&
            (t.removeEventListener("click", this._backdropClickHandler),
            t.removeEventListener(
              "transitionend",
              this._backdropTransitionendHandler
            ),
            t.remove(),
            this._backdropElement === t && (this._backdropElement = null)),
            this._backdropTimeout &&
              (clearTimeout(this._backdropTimeout),
              (this._backdropTimeout = void 0));
        }
      }
      let qo = (() => {
        class i {
          constructor(e, n) {
            (this._platform = n), (this._document = e);
          }
          ngOnDestroy() {
            var e;
            null === (e = this._containerElement) || void 0 === e || e.remove();
          }
          getContainerElement() {
            return (
              this._containerElement || this._createContainer(),
              this._containerElement
            );
          }
          _createContainer() {
            const e = "cdk-overlay-container";
            if (this._platform.isBrowser || qt()) {
              const r = this._document.querySelectorAll(
                `.${e}[platform="server"], .${e}[platform="test"]`
              );
              for (let s = 0; s < r.length; s++) r[s].remove();
            }
            const n = this._document.createElement("div");
            n.classList.add(e),
              qt()
                ? n.setAttribute("platform", "test")
                : this._platform.isBrowser ||
                  n.setAttribute("platform", "server"),
              this._document.body.appendChild(n),
              (this._containerElement = n);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.LFG(y.K0), o.LFG(z));
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      const Wo = "cdk-overlay-connected-position-bounding-box",
        fc = /([A-Za-z%]+)$/;
      class pc {
        constructor(t, e, n, r, s) {
          (this._viewportRuler = e),
            (this._document = n),
            (this._platform = r),
            (this._overlayContainer = s),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new F.x()),
            (this._resizeSubscription = $.w0.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(t);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(t) {
          this._validatePositions(),
            t.hostElement.classList.add(Wo),
            (this._overlayRef = t),
            (this._boundingBox = t.hostElement),
            (this._pane = t.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect()),
            (this._containerRect = this._overlayContainer
              .getContainerElement()
              .getBoundingClientRect());
          const t = this._originRect,
            e = this._overlayRect,
            n = this._viewportRect,
            r = this._containerRect,
            s = [];
          let a;
          for (let l of this._preferredPositions) {
            let c = this._getOriginPoint(t, r, l),
              d = this._getOverlayPoint(c, e, l),
              u = this._getOverlayFit(d, e, n, l);
            if (u.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(l, c);
            this._canFitWithFlexibleDimensions(u, d, n)
              ? s.push({
                  position: l,
                  origin: c,
                  overlayRect: e,
                  boundingBoxRect: this._calculateBoundingBoxRect(c, l),
                })
              : (!a || a.overlayFit.visibleArea < u.visibleArea) &&
                (a = {
                  overlayFit: u,
                  overlayPoint: d,
                  originPoint: c,
                  position: l,
                  overlayRect: e,
                });
          }
          if (s.length) {
            let l = null,
              c = -1;
            for (const d of s) {
              const u =
                d.boundingBoxRect.width *
                d.boundingBoxRect.height *
                (d.position.weight || 1);
              u > c && ((c = u), (l = d));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(l.position, l.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(a.position, a.originPoint)
            );
          this._applyPosition(a.position, a.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              ce(this._boundingBox.style, {
                top: "",
                left: "",
                right: "",
                bottom: "",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: "",
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(Wo),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          const t = this._lastPosition;
          if (t) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect()),
              (this._containerRect = this._overlayContainer
                .getContainerElement()
                .getBoundingClientRect());
            const e = this._getOriginPoint(
              this._originRect,
              this._containerRect,
              t
            );
            this._applyPosition(t, e);
          } else this.apply();
        }
        withScrollableContainers(t) {
          return (this._scrollables = t), this;
        }
        withPositions(t) {
          return (
            (this._preferredPositions = t),
            -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(t) {
          return (this._viewportMargin = t), this;
        }
        withFlexibleDimensions(t = !0) {
          return (this._hasFlexibleDimensions = t), this;
        }
        withGrowAfterOpen(t = !0) {
          return (this._growAfterOpen = t), this;
        }
        withPush(t = !0) {
          return (this._canPush = t), this;
        }
        withLockedPosition(t = !0) {
          return (this._positionLocked = t), this;
        }
        setOrigin(t) {
          return (this._origin = t), this;
        }
        withDefaultOffsetX(t) {
          return (this._offsetX = t), this;
        }
        withDefaultOffsetY(t) {
          return (this._offsetY = t), this;
        }
        withTransformOriginOn(t) {
          return (this._transformOriginSelector = t), this;
        }
        _getOriginPoint(t, e, n) {
          let r, s;
          if ("center" == n.originX) r = t.left + t.width / 2;
          else {
            const a = this._isRtl() ? t.right : t.left,
              l = this._isRtl() ? t.left : t.right;
            r = "start" == n.originX ? a : l;
          }
          return (
            e.left < 0 && (r -= e.left),
            (s =
              "center" == n.originY
                ? t.top + t.height / 2
                : "top" == n.originY
                ? t.top
                : t.bottom),
            e.top < 0 && (s -= e.top),
            { x: r, y: s }
          );
        }
        _getOverlayPoint(t, e, n) {
          let r, s;
          return (
            (r =
              "center" == n.overlayX
                ? -e.width / 2
                : "start" === n.overlayX
                ? this._isRtl()
                  ? -e.width
                  : 0
                : this._isRtl()
                ? 0
                : -e.width),
            (s =
              "center" == n.overlayY
                ? -e.height / 2
                : "top" == n.overlayY
                ? 0
                : -e.height),
            { x: t.x + r, y: t.y + s }
          );
        }
        _getOverlayFit(t, e, n, r) {
          const s = Xo(e);
          let { x: a, y: l } = t,
            c = this._getOffset(r, "x"),
            d = this._getOffset(r, "y");
          c && (a += c), d && (l += d);
          let x = 0 - l,
            w = l + s.height - n.height,
            E = this._subtractOverflows(s.width, 0 - a, a + s.width - n.width),
            A = this._subtractOverflows(s.height, x, w),
            C = E * A;
          return {
            visibleArea: C,
            isCompletelyWithinViewport: s.width * s.height === C,
            fitsInViewportVertically: A === s.height,
            fitsInViewportHorizontally: E == s.width,
          };
        }
        _canFitWithFlexibleDimensions(t, e, n) {
          if (this._hasFlexibleDimensions) {
            const r = n.bottom - e.y,
              s = n.right - e.x,
              a = $o(this._overlayRef.getConfig().minHeight),
              l = $o(this._overlayRef.getConfig().minWidth),
              d = t.fitsInViewportHorizontally || (null != l && l <= s);
            return (t.fitsInViewportVertically || (null != a && a <= r)) && d;
          }
          return !1;
        }
        _pushOverlayOnScreen(t, e, n) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: t.x + this._previousPushAmount.x,
              y: t.y + this._previousPushAmount.y,
            };
          const r = Xo(e),
            s = this._viewportRect,
            a = Math.max(t.x + r.width - s.width, 0),
            l = Math.max(t.y + r.height - s.height, 0),
            c = Math.max(s.top - n.top - t.y, 0),
            d = Math.max(s.left - n.left - t.x, 0);
          let u = 0,
            m = 0;
          return (
            (u =
              r.width <= s.width
                ? d || -a
                : t.x < this._viewportMargin
                ? s.left - n.left - t.x
                : 0),
            (m =
              r.height <= s.height
                ? c || -l
                : t.y < this._viewportMargin
                ? s.top - n.top - t.y
                : 0),
            (this._previousPushAmount = { x: u, y: m }),
            { x: t.x + u, y: t.y + m }
          );
        }
        _applyPosition(t, e) {
          if (
            (this._setTransformOrigin(t),
            this._setOverlayElementStyles(e, t),
            this._setBoundingBoxStyles(e, t),
            t.panelClass && this._addPanelClasses(t.panelClass),
            (this._lastPosition = t),
            this._positionChanges.observers.length)
          ) {
            const n = this._getScrollVisibility(),
              r = new uc(t, n);
            this._positionChanges.next(r);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(t) {
          if (!this._transformOriginSelector) return;
          const e = this._boundingBox.querySelectorAll(
            this._transformOriginSelector
          );
          let n,
            r = t.overlayY;
          n =
            "center" === t.overlayX
              ? "center"
              : this._isRtl()
              ? "start" === t.overlayX
                ? "right"
                : "left"
              : "start" === t.overlayX
              ? "left"
              : "right";
          for (let s = 0; s < e.length; s++)
            e[s].style.transformOrigin = `${n} ${r}`;
        }
        _calculateBoundingBoxRect(t, e) {
          const n = this._viewportRect,
            r = this._isRtl();
          let s, a, l, u, m, x;
          if ("top" === e.overlayY)
            (a = t.y), (s = n.height - a + this._viewportMargin);
          else if ("bottom" === e.overlayY)
            (l = n.height - t.y + 2 * this._viewportMargin),
              (s = n.height - l + this._viewportMargin);
          else {
            const w = Math.min(n.bottom - t.y + n.top, t.y),
              E = this._lastBoundingBoxSize.height;
            (s = 2 * w),
              (a = t.y - w),
              s > E &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (a = t.y - E / 2);
          }
          if (("end" === e.overlayX && !r) || ("start" === e.overlayX && r))
            (x = n.width - t.x + this._viewportMargin),
              (u = t.x - this._viewportMargin);
          else if (
            ("start" === e.overlayX && !r) ||
            ("end" === e.overlayX && r)
          )
            (m = t.x), (u = n.right - t.x);
          else {
            const w = Math.min(n.right - t.x + n.left, t.x),
              E = this._lastBoundingBoxSize.width;
            (u = 2 * w),
              (m = t.x - w),
              u > E &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (m = t.x - E / 2);
          }
          return { top: a, left: m, bottom: l, right: x, width: u, height: s };
        }
        _setBoundingBoxStyles(t, e) {
          const n = this._calculateBoundingBoxRect(t, e);
          !this._isInitialRender &&
            !this._growAfterOpen &&
            ((n.height = Math.min(n.height, this._lastBoundingBoxSize.height)),
            (n.width = Math.min(n.width, this._lastBoundingBoxSize.width)));
          const r = {};
          if (this._hasExactPosition())
            (r.top = r.left = "0"),
              (r.bottom = r.right = r.maxHeight = r.maxWidth = ""),
              (r.width = r.height = "100%");
          else {
            const s = this._overlayRef.getConfig().maxHeight,
              a = this._overlayRef.getConfig().maxWidth;
            (r.height = (0, v.HM)(n.height)),
              (r.top = (0, v.HM)(n.top)),
              (r.bottom = (0, v.HM)(n.bottom)),
              (r.width = (0, v.HM)(n.width)),
              (r.left = (0, v.HM)(n.left)),
              (r.right = (0, v.HM)(n.right)),
              (r.alignItems =
                "center" === e.overlayX
                  ? "center"
                  : "end" === e.overlayX
                  ? "flex-end"
                  : "flex-start"),
              (r.justifyContent =
                "center" === e.overlayY
                  ? "center"
                  : "bottom" === e.overlayY
                  ? "flex-end"
                  : "flex-start"),
              s && (r.maxHeight = (0, v.HM)(s)),
              a && (r.maxWidth = (0, v.HM)(a));
          }
          (this._lastBoundingBoxSize = n), ce(this._boundingBox.style, r);
        }
        _resetBoundingBoxStyles() {
          ce(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          });
        }
        _resetOverlayElementStyles() {
          ce(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: "",
          });
        }
        _setOverlayElementStyles(t, e) {
          const n = {},
            r = this._hasExactPosition(),
            s = this._hasFlexibleDimensions,
            a = this._overlayRef.getConfig();
          if (r) {
            const u = this._viewportRuler.getViewportScrollPosition();
            ce(n, this._getExactOverlayY(e, t, u)),
              ce(n, this._getExactOverlayX(e, t, u));
          } else n.position = "static";
          let l = "",
            c = this._getOffset(e, "x"),
            d = this._getOffset(e, "y");
          c && (l += `translateX(${c}px) `),
            d && (l += `translateY(${d}px)`),
            (n.transform = l.trim()),
            a.maxHeight &&
              (r
                ? (n.maxHeight = (0, v.HM)(a.maxHeight))
                : s && (n.maxHeight = "")),
            a.maxWidth &&
              (r
                ? (n.maxWidth = (0, v.HM)(a.maxWidth))
                : s && (n.maxWidth = "")),
            ce(this._pane.style, n);
        }
        _getExactOverlayY(t, e, n) {
          let r = { top: "", bottom: "" },
            s = this._getOverlayPoint(e, this._overlayRect, t);
          return (
            this._isPushed &&
              (s = this._pushOverlayOnScreen(s, this._overlayRect, n)),
            "bottom" === t.overlayY
              ? (r.bottom =
                  this._document.documentElement.clientHeight -
                  (s.y + this._overlayRect.height) +
                  "px")
              : (r.top = (0, v.HM)(s.y)),
            r
          );
        }
        _getExactOverlayX(t, e, n) {
          let a,
            r = { left: "", right: "" },
            s = this._getOverlayPoint(e, this._overlayRect, t);
          return (
            this._isPushed &&
              (s = this._pushOverlayOnScreen(s, this._overlayRect, n)),
            (a = this._isRtl()
              ? "end" === t.overlayX
                ? "left"
                : "right"
              : "end" === t.overlayX
              ? "right"
              : "left"),
            "right" === a
              ? (r.right =
                  this._document.documentElement.clientWidth -
                  (s.x + this._overlayRect.width) +
                  "px")
              : (r.left = (0, v.HM)(s.x)),
            r
          );
        }
        _getScrollVisibility() {
          const t = this._getOriginRect(),
            e = this._pane.getBoundingClientRect(),
            n = this._scrollables.map((r) =>
              r.getElementRef().nativeElement.getBoundingClientRect()
            );
          return {
            isOriginClipped: Yo(t, n),
            isOriginOutsideView: hi(t, n),
            isOverlayClipped: Yo(e, n),
            isOverlayOutsideView: hi(e, n),
          };
        }
        _subtractOverflows(t, ...e) {
          return e.reduce((n, r) => n - Math.max(r, 0), t);
        }
        _getNarrowedViewportRect() {
          const t = this._document.documentElement.clientWidth,
            e = this._document.documentElement.clientHeight,
            n = this._viewportRuler.getViewportScrollPosition();
          return {
            top: n.top + this._viewportMargin,
            left: n.left + this._viewportMargin,
            right: n.left + t - this._viewportMargin,
            bottom: n.top + e - this._viewportMargin,
            width: t - 2 * this._viewportMargin,
            height: e - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return "rtl" === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(t, e) {
          return "x" === e
            ? null == t.offsetX
              ? this._offsetX
              : t.offsetX
            : null == t.offsetY
            ? this._offsetY
            : t.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(t) {
          this._pane &&
            (0, v.Eq)(t).forEach((e) => {
              "" !== e &&
                -1 === this._appliedPanelClasses.indexOf(e) &&
                (this._appliedPanelClasses.push(e),
                this._pane.classList.add(e));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((t) => {
              this._pane.classList.remove(t);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const t = this._origin;
          if (t instanceof o.SBq)
            return t.nativeElement.getBoundingClientRect();
          if (t instanceof Element) return t.getBoundingClientRect();
          const e = t.width || 0,
            n = t.height || 0;
          return {
            top: t.y,
            bottom: t.y + n,
            left: t.x,
            right: t.x + e,
            height: n,
            width: e,
          };
        }
      }
      function ce(i, t) {
        for (let e in t) t.hasOwnProperty(e) && (i[e] = t[e]);
        return i;
      }
      function $o(i) {
        if ("number" != typeof i && null != i) {
          const [t, e] = i.split(fc);
          return e && "px" !== e ? null : parseFloat(t);
        }
        return i || null;
      }
      function Xo(i) {
        return {
          top: Math.floor(i.top),
          right: Math.floor(i.right),
          bottom: Math.floor(i.bottom),
          left: Math.floor(i.left),
          width: Math.floor(i.width),
          height: Math.floor(i.height),
        };
      }
      const Jo = "cdk-global-overlay-wrapper";
      class mc {
        constructor() {
          (this._cssPosition = "static"),
            (this._topOffset = ""),
            (this._bottomOffset = ""),
            (this._leftOffset = ""),
            (this._rightOffset = ""),
            (this._alignItems = ""),
            (this._justifyContent = ""),
            (this._width = ""),
            (this._height = "");
        }
        attach(t) {
          const e = t.getConfig();
          (this._overlayRef = t),
            this._width && !e.width && t.updateSize({ width: this._width }),
            this._height && !e.height && t.updateSize({ height: this._height }),
            t.hostElement.classList.add(Jo),
            (this._isDisposed = !1);
        }
        top(t = "") {
          return (
            (this._bottomOffset = ""),
            (this._topOffset = t),
            (this._alignItems = "flex-start"),
            this
          );
        }
        left(t = "") {
          return (
            (this._rightOffset = ""),
            (this._leftOffset = t),
            (this._justifyContent = "flex-start"),
            this
          );
        }
        bottom(t = "") {
          return (
            (this._topOffset = ""),
            (this._bottomOffset = t),
            (this._alignItems = "flex-end"),
            this
          );
        }
        right(t = "") {
          return (
            (this._leftOffset = ""),
            (this._rightOffset = t),
            (this._justifyContent = "flex-end"),
            this
          );
        }
        width(t = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: t })
              : (this._width = t),
            this
          );
        }
        height(t = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: t })
              : (this._height = t),
            this
          );
        }
        centerHorizontally(t = "") {
          return this.left(t), (this._justifyContent = "center"), this;
        }
        centerVertically(t = "") {
          return this.top(t), (this._alignItems = "center"), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement.style,
            n = this._overlayRef.getConfig(),
            { width: r, height: s, maxWidth: a, maxHeight: l } = n,
            c = !(
              ("100%" !== r && "100vw" !== r) ||
              (a && "100%" !== a && "100vw" !== a)
            ),
            d = !(
              ("100%" !== s && "100vh" !== s) ||
              (l && "100%" !== l && "100vh" !== l)
            );
          (t.position = this._cssPosition),
            (t.marginLeft = c ? "0" : this._leftOffset),
            (t.marginTop = d ? "0" : this._topOffset),
            (t.marginBottom = this._bottomOffset),
            (t.marginRight = this._rightOffset),
            c
              ? (e.justifyContent = "flex-start")
              : "center" === this._justifyContent
              ? (e.justifyContent = "center")
              : "rtl" === this._overlayRef.getConfig().direction
              ? "flex-start" === this._justifyContent
                ? (e.justifyContent = "flex-end")
                : "flex-end" === this._justifyContent &&
                  (e.justifyContent = "flex-start")
              : (e.justifyContent = this._justifyContent),
            (e.alignItems = d ? "flex-start" : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement,
            n = e.style;
          e.classList.remove(Jo),
            (n.justifyContent =
              n.alignItems =
              t.marginTop =
              t.marginBottom =
              t.marginLeft =
              t.marginRight =
              t.position =
                ""),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let _c = (() => {
          class i {
            constructor(e, n, r, s) {
              (this._viewportRuler = e),
                (this._document = n),
                (this._platform = r),
                (this._overlayContainer = s);
            }
            global() {
              return new mc();
            }
            flexibleConnectedTo(e) {
              return new pc(
                e,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(lt), o.LFG(y.K0), o.LFG(z), o.LFG(qo));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        Ko = (() => {
          class i {
            constructor(e) {
              (this._attachedOverlays = []), (this._document = e);
            }
            ngOnDestroy() {
              this.detach();
            }
            add(e) {
              this.remove(e), this._attachedOverlays.push(e);
            }
            remove(e) {
              const n = this._attachedOverlays.indexOf(e);
              n > -1 && this._attachedOverlays.splice(n, 1),
                0 === this._attachedOverlays.length && this.detach();
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(y.K0));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        gc = (() => {
          class i extends Ko {
            constructor(e, n) {
              super(e),
                (this._ngZone = n),
                (this._keydownListener = (r) => {
                  const s = this._attachedOverlays;
                  for (let a = s.length - 1; a > -1; a--)
                    if (s[a]._keydownEvents.observers.length > 0) {
                      const l = s[a]._keydownEvents;
                      this._ngZone
                        ? this._ngZone.run(() => l.next(r))
                        : l.next(r);
                      break;
                    }
                });
            }
            add(e) {
              super.add(e),
                this._isAttached ||
                  (this._ngZone
                    ? this._ngZone.runOutsideAngular(() =>
                        this._document.body.addEventListener(
                          "keydown",
                          this._keydownListener
                        )
                      )
                    : this._document.body.addEventListener(
                        "keydown",
                        this._keydownListener
                      ),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  "keydown",
                  this._keydownListener
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(y.K0), o.LFG(o.R0b, 8));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        vc = (() => {
          class i extends Ko {
            constructor(e, n, r) {
              super(e),
                (this._platform = n),
                (this._ngZone = r),
                (this._cursorStyleIsSet = !1),
                (this._pointerDownListener = (s) => {
                  this._pointerDownEventTarget = se(s);
                }),
                (this._clickListener = (s) => {
                  const a = se(s),
                    l =
                      "click" === s.type && this._pointerDownEventTarget
                        ? this._pointerDownEventTarget
                        : a;
                  this._pointerDownEventTarget = null;
                  const c = this._attachedOverlays.slice();
                  for (let d = c.length - 1; d > -1; d--) {
                    const u = c[d];
                    if (
                      u._outsidePointerEvents.observers.length < 1 ||
                      !u.hasAttached()
                    )
                      continue;
                    if (
                      u.overlayElement.contains(a) ||
                      u.overlayElement.contains(l)
                    )
                      break;
                    const m = u._outsidePointerEvents;
                    this._ngZone
                      ? this._ngZone.run(() => m.next(s))
                      : m.next(s);
                  }
                });
            }
            add(e) {
              if ((super.add(e), !this._isAttached)) {
                const n = this._document.body;
                this._ngZone
                  ? this._ngZone.runOutsideAngular(() =>
                      this._addEventListeners(n)
                    )
                  : this._addEventListeners(n),
                  this._platform.IOS &&
                    !this._cursorStyleIsSet &&
                    ((this._cursorOriginalValue = n.style.cursor),
                    (n.style.cursor = "pointer"),
                    (this._cursorStyleIsSet = !0)),
                  (this._isAttached = !0);
              }
            }
            detach() {
              if (this._isAttached) {
                const e = this._document.body;
                e.removeEventListener(
                  "pointerdown",
                  this._pointerDownListener,
                  !0
                ),
                  e.removeEventListener("click", this._clickListener, !0),
                  e.removeEventListener("auxclick", this._clickListener, !0),
                  e.removeEventListener("contextmenu", this._clickListener, !0),
                  this._platform.IOS &&
                    this._cursorStyleIsSet &&
                    ((e.style.cursor = this._cursorOriginalValue),
                    (this._cursorStyleIsSet = !1)),
                  (this._isAttached = !1);
              }
            }
            _addEventListeners(e) {
              e.addEventListener("pointerdown", this._pointerDownListener, !0),
                e.addEventListener("click", this._clickListener, !0),
                e.addEventListener("auxclick", this._clickListener, !0),
                e.addEventListener("contextmenu", this._clickListener, !0);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(y.K0), o.LFG(z), o.LFG(o.R0b, 8));
            }),
            (i.ɵprov = o.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        yc = 0,
        ct = (() => {
          class i {
            constructor(e, n, r, s, a, l, c, d, u, m, x) {
              (this.scrollStrategies = e),
                (this._overlayContainer = n),
                (this._componentFactoryResolver = r),
                (this._positionBuilder = s),
                (this._keyboardDispatcher = a),
                (this._injector = l),
                (this._ngZone = c),
                (this._document = d),
                (this._directionality = u),
                (this._location = m),
                (this._outsideClickDispatcher = x);
            }
            create(e) {
              const n = this._createHostElement(),
                r = this._createPaneElement(n),
                s = this._createPortalOutlet(r),
                a = new Zo(e);
              return (
                (a.direction = a.direction || this._directionality.value),
                new hc(
                  s,
                  n,
                  r,
                  a,
                  this._ngZone,
                  this._keyboardDispatcher,
                  this._document,
                  this._location,
                  this._outsideClickDispatcher
                )
              );
            }
            position() {
              return this._positionBuilder;
            }
            _createPaneElement(e) {
              const n = this._document.createElement("div");
              return (
                (n.id = "cdk-overlay-" + yc++),
                n.classList.add("cdk-overlay-pane"),
                e.appendChild(n),
                n
              );
            }
            _createHostElement() {
              const e = this._document.createElement("div");
              return (
                this._overlayContainer.getContainerElement().appendChild(e), e
              );
            }
            _createPortalOutlet(e) {
              return (
                this._appRef || (this._appRef = this._injector.get(o.z2F)),
                new oc(
                  e,
                  this._componentFactoryResolver,
                  this._appRef,
                  this._injector,
                  this._document
                )
              );
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.LFG(dc),
                o.LFG(qo),
                o.LFG(o._Vd),
                o.LFG(_c),
                o.LFG(gc),
                o.LFG(o.zs3),
                o.LFG(o.R0b),
                o.LFG(y.K0),
                o.LFG(W.Is),
                o.LFG(y.Ye),
                o.LFG(vc)
              );
            }),
            (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
            i
          );
        })();
      const bc = [
          {
            originX: "start",
            originY: "bottom",
            overlayX: "start",
            overlayY: "top",
          },
          {
            originX: "start",
            originY: "top",
            overlayX: "start",
            overlayY: "bottom",
          },
          {
            originX: "end",
            originY: "top",
            overlayX: "end",
            overlayY: "bottom",
          },
          {
            originX: "end",
            originY: "bottom",
            overlayX: "end",
            overlayY: "top",
          },
        ],
        Qo = new o.OlP("cdk-connected-overlay-scroll-strategy");
      let er = (() => {
          class i {
            constructor(e) {
              this.elementRef = e;
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.Y36(o.SBq));
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["", "cdk-overlay-origin", ""],
                ["", "overlay-origin", ""],
                ["", "cdkOverlayOrigin", ""],
              ],
              exportAs: ["cdkOverlayOrigin"],
            })),
            i
          );
        })(),
        tr = (() => {
          class i {
            constructor(e, n, r, s, a) {
              (this._overlay = e),
                (this._dir = a),
                (this._hasBackdrop = !1),
                (this._lockPosition = !1),
                (this._growAfterOpen = !1),
                (this._flexibleDimensions = !1),
                (this._push = !1),
                (this._backdropSubscription = $.w0.EMPTY),
                (this._attachSubscription = $.w0.EMPTY),
                (this._detachSubscription = $.w0.EMPTY),
                (this._positionSubscription = $.w0.EMPTY),
                (this.viewportMargin = 0),
                (this.open = !1),
                (this.disableClose = !1),
                (this.backdropClick = new o.vpe()),
                (this.positionChange = new o.vpe()),
                (this.attach = new o.vpe()),
                (this.detach = new o.vpe()),
                (this.overlayKeydown = new o.vpe()),
                (this.overlayOutsideClick = new o.vpe()),
                (this._templatePortal = new Go(n, r)),
                (this._scrollStrategyFactory = s),
                (this.scrollStrategy = this._scrollStrategyFactory());
            }
            get offsetX() {
              return this._offsetX;
            }
            set offsetX(e) {
              (this._offsetX = e),
                this._position && this._updatePositionStrategy(this._position);
            }
            get offsetY() {
              return this._offsetY;
            }
            set offsetY(e) {
              (this._offsetY = e),
                this._position && this._updatePositionStrategy(this._position);
            }
            get hasBackdrop() {
              return this._hasBackdrop;
            }
            set hasBackdrop(e) {
              this._hasBackdrop = (0, v.Ig)(e);
            }
            get lockPosition() {
              return this._lockPosition;
            }
            set lockPosition(e) {
              this._lockPosition = (0, v.Ig)(e);
            }
            get flexibleDimensions() {
              return this._flexibleDimensions;
            }
            set flexibleDimensions(e) {
              this._flexibleDimensions = (0, v.Ig)(e);
            }
            get growAfterOpen() {
              return this._growAfterOpen;
            }
            set growAfterOpen(e) {
              this._growAfterOpen = (0, v.Ig)(e);
            }
            get push() {
              return this._push;
            }
            set push(e) {
              this._push = (0, v.Ig)(e);
            }
            get overlayRef() {
              return this._overlayRef;
            }
            get dir() {
              return this._dir ? this._dir.value : "ltr";
            }
            ngOnDestroy() {
              this._attachSubscription.unsubscribe(),
                this._detachSubscription.unsubscribe(),
                this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe(),
                this._overlayRef && this._overlayRef.dispose();
            }
            ngOnChanges(e) {
              this._position &&
                (this._updatePositionStrategy(this._position),
                this._overlayRef.updateSize({
                  width: this.width,
                  minWidth: this.minWidth,
                  height: this.height,
                  minHeight: this.minHeight,
                }),
                e.origin && this.open && this._position.apply()),
                e.open &&
                  (this.open ? this._attachOverlay() : this._detachOverlay());
            }
            _createOverlay() {
              (!this.positions || !this.positions.length) &&
                (this.positions = bc);
              const e = (this._overlayRef = this._overlay.create(
                this._buildConfig()
              ));
              (this._attachSubscription = e
                .attachments()
                .subscribe(() => this.attach.emit())),
                (this._detachSubscription = e
                  .detachments()
                  .subscribe(() => this.detach.emit())),
                e.keydownEvents().subscribe((n) => {
                  this.overlayKeydown.next(n),
                    27 === n.keyCode &&
                      !this.disableClose &&
                      !Ae(n) &&
                      (n.preventDefault(), this._detachOverlay());
                }),
                this._overlayRef.outsidePointerEvents().subscribe((n) => {
                  this.overlayOutsideClick.next(n);
                });
            }
            _buildConfig() {
              const e = (this._position =
                  this.positionStrategy || this._createPositionStrategy()),
                n = new Zo({
                  direction: this._dir,
                  positionStrategy: e,
                  scrollStrategy: this.scrollStrategy,
                  hasBackdrop: this.hasBackdrop,
                });
              return (
                (this.width || 0 === this.width) && (n.width = this.width),
                (this.height || 0 === this.height) && (n.height = this.height),
                (this.minWidth || 0 === this.minWidth) &&
                  (n.minWidth = this.minWidth),
                (this.minHeight || 0 === this.minHeight) &&
                  (n.minHeight = this.minHeight),
                this.backdropClass && (n.backdropClass = this.backdropClass),
                this.panelClass && (n.panelClass = this.panelClass),
                n
              );
            }
            _updatePositionStrategy(e) {
              const n = this.positions.map((r) => ({
                originX: r.originX,
                originY: r.originY,
                overlayX: r.overlayX,
                overlayY: r.overlayY,
                offsetX: r.offsetX || this.offsetX,
                offsetY: r.offsetY || this.offsetY,
                panelClass: r.panelClass || void 0,
              }));
              return e
                .setOrigin(this._getFlexibleConnectedPositionStrategyOrigin())
                .withPositions(n)
                .withFlexibleDimensions(this.flexibleDimensions)
                .withPush(this.push)
                .withGrowAfterOpen(this.growAfterOpen)
                .withViewportMargin(this.viewportMargin)
                .withLockedPosition(this.lockPosition)
                .withTransformOriginOn(this.transformOriginSelector);
            }
            _createPositionStrategy() {
              const e = this._overlay
                .position()
                .flexibleConnectedTo(
                  this._getFlexibleConnectedPositionStrategyOrigin()
                );
              return this._updatePositionStrategy(e), e;
            }
            _getFlexibleConnectedPositionStrategyOrigin() {
              return this.origin instanceof er
                ? this.origin.elementRef
                : this.origin;
            }
            _attachOverlay() {
              this._overlayRef
                ? (this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop)
                : this._createOverlay(),
                this._overlayRef.hasAttached() ||
                  this._overlayRef.attach(this._templatePortal),
                this.hasBackdrop
                  ? (this._backdropSubscription = this._overlayRef
                      .backdropClick()
                      .subscribe((e) => {
                        this.backdropClick.emit(e);
                      }))
                  : this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe(),
                this.positionChange.observers.length > 0 &&
                  (this._positionSubscription = this._position.positionChanges
                    .pipe(
                      (function sc(i, t = !1) {
                        return (0, Bo.e)((e, n) => {
                          let r = 0;
                          e.subscribe(
                            (0, Ve.x)(n, (s) => {
                              const a = i(s, r++);
                              (a || t) && n.next(s), !a && n.complete();
                            })
                          );
                        });
                      })(() => this.positionChange.observers.length > 0)
                    )
                    .subscribe((e) => {
                      this.positionChange.emit(e),
                        0 === this.positionChange.observers.length &&
                          this._positionSubscription.unsubscribe();
                    }));
            }
            _detachOverlay() {
              this._overlayRef && this._overlayRef.detach(),
                this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe();
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.Y36(ct),
                o.Y36(o.Rgc),
                o.Y36(o.s_b),
                o.Y36(Qo),
                o.Y36(W.Is, 8)
              );
            }),
            (i.ɵdir = o.lG2({
              type: i,
              selectors: [
                ["", "cdk-connected-overlay", ""],
                ["", "connected-overlay", ""],
                ["", "cdkConnectedOverlay", ""],
              ],
              inputs: {
                origin: ["cdkConnectedOverlayOrigin", "origin"],
                positions: ["cdkConnectedOverlayPositions", "positions"],
                positionStrategy: [
                  "cdkConnectedOverlayPositionStrategy",
                  "positionStrategy",
                ],
                offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
                offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
                width: ["cdkConnectedOverlayWidth", "width"],
                height: ["cdkConnectedOverlayHeight", "height"],
                minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
                minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
                backdropClass: [
                  "cdkConnectedOverlayBackdropClass",
                  "backdropClass",
                ],
                panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
                viewportMargin: [
                  "cdkConnectedOverlayViewportMargin",
                  "viewportMargin",
                ],
                scrollStrategy: [
                  "cdkConnectedOverlayScrollStrategy",
                  "scrollStrategy",
                ],
                open: ["cdkConnectedOverlayOpen", "open"],
                disableClose: [
                  "cdkConnectedOverlayDisableClose",
                  "disableClose",
                ],
                transformOriginSelector: [
                  "cdkConnectedOverlayTransformOriginOn",
                  "transformOriginSelector",
                ],
                hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
                lockPosition: [
                  "cdkConnectedOverlayLockPosition",
                  "lockPosition",
                ],
                flexibleDimensions: [
                  "cdkConnectedOverlayFlexibleDimensions",
                  "flexibleDimensions",
                ],
                growAfterOpen: [
                  "cdkConnectedOverlayGrowAfterOpen",
                  "growAfterOpen",
                ],
                push: ["cdkConnectedOverlayPush", "push"],
              },
              outputs: {
                backdropClick: "backdropClick",
                positionChange: "positionChange",
                attach: "attach",
                detach: "detach",
                overlayKeydown: "overlayKeydown",
                overlayOutsideClick: "overlayOutsideClick",
              },
              exportAs: ["cdkConnectedOverlay"],
              features: [o.TTD],
            })),
            i
          );
        })();
      const wc = {
        provide: Qo,
        deps: [ct],
        useFactory: function Cc(i) {
          return () => i.scrollStrategies.reposition();
        },
      };
      let Mc = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = o.oAB({ type: i })),
          (i.ɵinj = o.cJS({
            providers: [ct, wc],
            imports: [[W.vT, rc, zo], zo],
          })),
          i
        );
      })();
      class Ec {
        constructor(t = !1, e, n = !0) {
          (this._multiple = t),
            (this._emitChanges = n),
            (this._selection = new Set()),
            (this._deselectedToEmit = []),
            (this._selectedToEmit = []),
            (this.changed = new F.x()),
            e &&
              e.length &&
              (t
                ? e.forEach((r) => this._markSelected(r))
                : this._markSelected(e[0]),
              (this._selectedToEmit.length = 0));
        }
        get selected() {
          return (
            this._selected ||
              (this._selected = Array.from(this._selection.values())),
            this._selected
          );
        }
        select(...t) {
          this._verifyValueAssignment(t),
            t.forEach((e) => this._markSelected(e)),
            this._emitChangeEvent();
        }
        deselect(...t) {
          this._verifyValueAssignment(t),
            t.forEach((e) => this._unmarkSelected(e)),
            this._emitChangeEvent();
        }
        toggle(t) {
          this.isSelected(t) ? this.deselect(t) : this.select(t);
        }
        clear() {
          this._unmarkAll(), this._emitChangeEvent();
        }
        isSelected(t) {
          return this._selection.has(t);
        }
        isEmpty() {
          return 0 === this._selection.size;
        }
        hasValue() {
          return !this.isEmpty();
        }
        sort(t) {
          this._multiple && this.selected && this._selected.sort(t);
        }
        isMultipleSelection() {
          return this._multiple;
        }
        _emitChangeEvent() {
          (this._selected = null),
            (this._selectedToEmit.length || this._deselectedToEmit.length) &&
              (this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit,
              }),
              (this._deselectedToEmit = []),
              (this._selectedToEmit = []));
        }
        _markSelected(t) {
          this.isSelected(t) ||
            (this._multiple || this._unmarkAll(),
            this._selection.add(t),
            this._emitChanges && this._selectedToEmit.push(t));
        }
        _unmarkSelected(t) {
          this.isSelected(t) &&
            (this._selection.delete(t),
            this._emitChanges && this._deselectedToEmit.push(t));
        }
        _unmarkAll() {
          this.isEmpty() ||
            this._selection.forEach((t) => this._unmarkSelected(t));
        }
        _verifyValueAssignment(t) {}
      }
      var Sc = g(9770),
        ir = g(3900);
      const xc = ["trigger"],
        Ac = ["panel"];
      function kc(i, t) {
        if ((1 & i && (o.TgZ(0, "span", 8), o._uU(1), o.qZA()), 2 & i)) {
          const e = o.oxw();
          o.xp6(1), o.Oqu(e.placeholder);
        }
      }
      function Oc(i, t) {
        if ((1 & i && (o.TgZ(0, "span", 12), o._uU(1), o.qZA()), 2 & i)) {
          const e = o.oxw(2);
          o.xp6(1), o.Oqu(e.triggerValue);
        }
      }
      function Dc(i, t) {
        1 & i && o.Hsn(0, 0, ["*ngSwitchCase", "true"]);
      }
      function Fc(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "span", 9),
            o.YNc(1, Oc, 2, 1, "span", 10),
            o.YNc(2, Dc, 1, 0, "ng-content", 11),
            o.qZA()),
          2 & i)
        ) {
          const e = o.oxw();
          o.Q6J("ngSwitch", !!e.customTrigger),
            o.xp6(2),
            o.Q6J("ngSwitchCase", !0);
        }
      }
      function Ic(i, t) {
        if (1 & i) {
          const e = o.EpF();
          o.TgZ(0, "div", 13)(1, "div", 14, 15),
            o.NdJ("@transformPanel.done", function (r) {
              return (
                o.CHM(e), o.oxw()._panelDoneAnimatingStream.next(r.toState)
              );
            })("keydown", function (r) {
              return o.CHM(e), o.oxw()._handleKeydown(r);
            }),
            o.Hsn(3, 1),
            o.qZA()();
        }
        if (2 & i) {
          const e = o.oxw();
          o.Q6J("@transformPanelWrap", void 0),
            o.xp6(1),
            o.Gre("mat-select-panel ", e._getPanelTheme(), ""),
            o.Udp("transform-origin", e._transformOrigin)(
              "font-size",
              e._triggerFontSize,
              "px"
            ),
            o.Q6J("ngClass", e.panelClass)(
              "@transformPanel",
              e.multiple ? "showing-multiple" : "showing"
            ),
            o.uIk("id", e.id + "-panel")("aria-multiselectable", e.multiple)(
              "aria-label",
              e.ariaLabel || null
            )("aria-labelledby", e._getPanelAriaLabelledby());
        }
      }
      const Tc = [[["mat-select-trigger"]], "*"],
        Rc = ["mat-select-trigger", "*"],
        nr = {
          transformPanelWrap: (0, O.X$)("transformPanelWrap", [
            (0, O.eR)(
              "* => void",
              (0, O.IO)("@transformPanel", [(0, O.pV)()], { optional: !0 })
            ),
          ]),
          transformPanel: (0, O.X$)("transformPanel", [
            (0, O.SB)(
              "void",
              (0, O.oB)({
                transform: "scaleY(0.8)",
                minWidth: "100%",
                opacity: 0,
              })
            ),
            (0, O.SB)(
              "showing",
              (0, O.oB)({
                opacity: 1,
                minWidth: "calc(100% + 32px)",
                transform: "scaleY(1)",
              })
            ),
            (0, O.SB)(
              "showing-multiple",
              (0, O.oB)({
                opacity: 1,
                minWidth: "calc(100% + 64px)",
                transform: "scaleY(1)",
              })
            ),
            (0, O.eR)(
              "void => *",
              (0, O.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")
            ),
            (0, O.eR)(
              "* => void",
              (0, O.jt)("100ms 25ms linear", (0, O.oB)({ opacity: 0 }))
            ),
          ]),
        };
      let or = 0;
      const sr = new o.OlP("mat-select-scroll-strategy"),
        Nc = new o.OlP("MAT_SELECT_CONFIG"),
        Bc = {
          provide: sr,
          deps: [ct],
          useFactory: function Vc(i) {
            return () => i.scrollStrategies.reposition();
          },
        };
      class Hc {
        constructor(t, e) {
          (this.source = t), (this.value = e);
        }
      }
      const zc = ao(
          ya(
            so(
              lo(
                class {
                  constructor(i, t, e, n, r) {
                    (this._elementRef = i),
                      (this._defaultErrorStateMatcher = t),
                      (this._parentForm = e),
                      (this._parentFormGroup = n),
                      (this.ngControl = r);
                  }
                }
              )
            )
          )
        ),
        Gc = new o.OlP("MatSelectTrigger");
      let Uc = (() => {
          class i extends zc {
            constructor(e, n, r, s, a, l, c, d, u, m, x, w, E, A) {
              var C, f, p;
              super(a, s, c, d, m),
                (this._viewportRuler = e),
                (this._changeDetectorRef = n),
                (this._ngZone = r),
                (this._dir = l),
                (this._parentFormField = u),
                (this._liveAnnouncer = E),
                (this._defaultOptions = A),
                (this._panelOpen = !1),
                (this._compareWith = (h, _) => h === _),
                (this._uid = "mat-select-" + or++),
                (this._triggerAriaLabelledBy = null),
                (this._destroy = new F.x()),
                (this._onChange = () => {}),
                (this._onTouched = () => {}),
                (this._valueId = "mat-select-value-" + or++),
                (this._panelDoneAnimatingStream = new F.x()),
                (this._overlayPanelClass =
                  (null === (C = this._defaultOptions) || void 0 === C
                    ? void 0
                    : C.overlayPanelClass) || ""),
                (this._focused = !1),
                (this.controlType = "mat-select"),
                (this._multiple = !1),
                (this._disableOptionCentering =
                  null !==
                    (p =
                      null === (f = this._defaultOptions) || void 0 === f
                        ? void 0
                        : f.disableOptionCentering) &&
                  void 0 !== p &&
                  p),
                (this.ariaLabel = ""),
                (this.optionSelectionChanges = (0, Sc.P)(() => {
                  const h = this.options;
                  return h
                    ? h.changes.pipe(
                        (0, Ie.O)(h),
                        (0, ir.w)(() =>
                          (0, Fe.T)(...h.map((_) => _.onSelectionChange))
                        )
                      )
                    : this._ngZone.onStable.pipe(
                        (0, ge.q)(1),
                        (0, ir.w)(() => this.optionSelectionChanges)
                      );
                })),
                (this.openedChange = new o.vpe()),
                (this._openedStream = this.openedChange.pipe(
                  (0, ie.h)((h) => h),
                  (0, R.U)(() => {})
                )),
                (this._closedStream = this.openedChange.pipe(
                  (0, ie.h)((h) => !h),
                  (0, R.U)(() => {})
                )),
                (this.selectionChange = new o.vpe()),
                (this.valueChange = new o.vpe()),
                this.ngControl && (this.ngControl.valueAccessor = this),
                null != (null == A ? void 0 : A.typeaheadDebounceInterval) &&
                  (this._typeaheadDebounceInterval =
                    A.typeaheadDebounceInterval),
                (this._scrollStrategyFactory = w),
                (this._scrollStrategy = this._scrollStrategyFactory()),
                (this.tabIndex = parseInt(x) || 0),
                (this.id = this.id);
            }
            get focused() {
              return this._focused || this._panelOpen;
            }
            get placeholder() {
              return this._placeholder;
            }
            set placeholder(e) {
              (this._placeholder = e), this.stateChanges.next();
            }
            get required() {
              var e, n, r, s;
              return (
                null !==
                  (s =
                    null !== (e = this._required) && void 0 !== e
                      ? e
                      : null ===
                          (r =
                            null === (n = this.ngControl) || void 0 === n
                              ? void 0
                              : n.control) || void 0 === r
                      ? void 0
                      : r.hasValidator(N.required)) &&
                void 0 !== s &&
                s
              );
            }
            set required(e) {
              (this._required = (0, v.Ig)(e)), this.stateChanges.next();
            }
            get multiple() {
              return this._multiple;
            }
            set multiple(e) {
              this._multiple = (0, v.Ig)(e);
            }
            get disableOptionCentering() {
              return this._disableOptionCentering;
            }
            set disableOptionCentering(e) {
              this._disableOptionCentering = (0, v.Ig)(e);
            }
            get compareWith() {
              return this._compareWith;
            }
            set compareWith(e) {
              (this._compareWith = e),
                this._selectionModel && this._initializeSelection();
            }
            get value() {
              return this._value;
            }
            set value(e) {
              this._assignValue(e) && this._onChange(e);
            }
            get typeaheadDebounceInterval() {
              return this._typeaheadDebounceInterval;
            }
            set typeaheadDebounceInterval(e) {
              this._typeaheadDebounceInterval = (0, v.su)(e);
            }
            get id() {
              return this._id;
            }
            set id(e) {
              (this._id = e || this._uid), this.stateChanges.next();
            }
            ngOnInit() {
              (this._selectionModel = new Ec(this.multiple)),
                this.stateChanges.next(),
                this._panelDoneAnimatingStream
                  .pipe((0, Xn.x)(), (0, B.R)(this._destroy))
                  .subscribe(() => this._panelDoneAnimating(this.panelOpen));
            }
            ngAfterContentInit() {
              this._initKeyManager(),
                this._selectionModel.changed
                  .pipe((0, B.R)(this._destroy))
                  .subscribe((e) => {
                    e.added.forEach((n) => n.select()),
                      e.removed.forEach((n) => n.deselect());
                  }),
                this.options.changes
                  .pipe((0, Ie.O)(null), (0, B.R)(this._destroy))
                  .subscribe(() => {
                    this._resetOptions(), this._initializeSelection();
                  });
            }
            ngDoCheck() {
              const e = this._getTriggerAriaLabelledby(),
                n = this.ngControl;
              if (e !== this._triggerAriaLabelledBy) {
                const r = this._elementRef.nativeElement;
                (this._triggerAriaLabelledBy = e),
                  e
                    ? r.setAttribute("aria-labelledby", e)
                    : r.removeAttribute("aria-labelledby");
              }
              n &&
                (this._previousControl !== n.control &&
                  (void 0 !== this._previousControl &&
                    null !== n.disabled &&
                    n.disabled !== this.disabled &&
                    (this.disabled = n.disabled),
                  (this._previousControl = n.control)),
                this.updateErrorState());
            }
            ngOnChanges(e) {
              e.disabled && this.stateChanges.next(),
                e.typeaheadDebounceInterval &&
                  this._keyManager &&
                  this._keyManager.withTypeAhead(
                    this._typeaheadDebounceInterval
                  );
            }
            ngOnDestroy() {
              this._destroy.next(),
                this._destroy.complete(),
                this.stateChanges.complete();
            }
            toggle() {
              this.panelOpen ? this.close() : this.open();
            }
            open() {
              this._canOpen() &&
                ((this._panelOpen = !0),
                this._keyManager.withHorizontalOrientation(null),
                this._highlightCorrectOption(),
                this._changeDetectorRef.markForCheck());
            }
            close() {
              this._panelOpen &&
                ((this._panelOpen = !1),
                this._keyManager.withHorizontalOrientation(
                  this._isRtl() ? "rtl" : "ltr"
                ),
                this._changeDetectorRef.markForCheck(),
                this._onTouched());
            }
            writeValue(e) {
              this._assignValue(e);
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              (this.disabled = e),
                this._changeDetectorRef.markForCheck(),
                this.stateChanges.next();
            }
            get panelOpen() {
              return this._panelOpen;
            }
            get selected() {
              var e, n;
              return this.multiple
                ? (null === (e = this._selectionModel) || void 0 === e
                    ? void 0
                    : e.selected) || []
                : null === (n = this._selectionModel) || void 0 === n
                ? void 0
                : n.selected[0];
            }
            get triggerValue() {
              if (this.empty) return "";
              if (this._multiple) {
                const e = this._selectionModel.selected.map((n) => n.viewValue);
                return this._isRtl() && e.reverse(), e.join(", ");
              }
              return this._selectionModel.selected[0].viewValue;
            }
            _isRtl() {
              return !!this._dir && "rtl" === this._dir.value;
            }
            _handleKeydown(e) {
              this.disabled ||
                (this.panelOpen
                  ? this._handleOpenKeydown(e)
                  : this._handleClosedKeydown(e));
            }
            _handleClosedKeydown(e) {
              const n = e.keyCode,
                r = 40 === n || 38 === n || 37 === n || 39 === n,
                s = 13 === n || 32 === n,
                a = this._keyManager;
              if (
                (!a.isTyping() && s && !Ae(e)) ||
                ((this.multiple || e.altKey) && r)
              )
                e.preventDefault(), this.open();
              else if (!this.multiple) {
                const l = this.selected;
                a.onKeydown(e);
                const c = this.selected;
                c && l !== c && this._liveAnnouncer.announce(c.viewValue, 1e4);
              }
            }
            _handleOpenKeydown(e) {
              const n = this._keyManager,
                r = e.keyCode,
                s = 40 === r || 38 === r,
                a = n.isTyping();
              if (s && e.altKey) e.preventDefault(), this.close();
              else if (a || (13 !== r && 32 !== r) || !n.activeItem || Ae(e))
                if (!a && this._multiple && 65 === r && e.ctrlKey) {
                  e.preventDefault();
                  const l = this.options.some(
                    (c) => !c.disabled && !c.selected
                  );
                  this.options.forEach((c) => {
                    c.disabled || (l ? c.select() : c.deselect());
                  });
                } else {
                  const l = n.activeItemIndex;
                  n.onKeydown(e),
                    this._multiple &&
                      s &&
                      e.shiftKey &&
                      n.activeItem &&
                      n.activeItemIndex !== l &&
                      n.activeItem._selectViaInteraction();
                }
              else e.preventDefault(), n.activeItem._selectViaInteraction();
            }
            _onFocus() {
              this.disabled || ((this._focused = !0), this.stateChanges.next());
            }
            _onBlur() {
              (this._focused = !1),
                !this.disabled &&
                  !this.panelOpen &&
                  (this._onTouched(),
                  this._changeDetectorRef.markForCheck(),
                  this.stateChanges.next());
            }
            _onAttached() {
              this._overlayDir.positionChange
                .pipe((0, ge.q)(1))
                .subscribe(() => {
                  this._changeDetectorRef.detectChanges(),
                    this._positioningSettled();
                });
            }
            _getPanelTheme() {
              return this._parentFormField
                ? `mat-${this._parentFormField.color}`
                : "";
            }
            get empty() {
              return !this._selectionModel || this._selectionModel.isEmpty();
            }
            _initializeSelection() {
              Promise.resolve().then(() => {
                this.ngControl && (this._value = this.ngControl.value),
                  this._setSelectionByValue(this._value),
                  this.stateChanges.next();
              });
            }
            _setSelectionByValue(e) {
              if (
                (this._selectionModel.selected.forEach((n) =>
                  n.setInactiveStyles()
                ),
                this._selectionModel.clear(),
                this.multiple && e)
              )
                Array.isArray(e),
                  e.forEach((n) => this._selectOptionByValue(n)),
                  this._sortValues();
              else {
                const n = this._selectOptionByValue(e);
                n
                  ? this._keyManager.updateActiveItem(n)
                  : this.panelOpen || this._keyManager.updateActiveItem(-1);
              }
              this._changeDetectorRef.markForCheck();
            }
            _selectOptionByValue(e) {
              const n = this.options.find((r) => {
                if (this._selectionModel.isSelected(r)) return !1;
                try {
                  return null != r.value && this._compareWith(r.value, e);
                } catch (s) {
                  return !1;
                }
              });
              return n && this._selectionModel.select(n), n;
            }
            _assignValue(e) {
              return (
                !!(e !== this._value || (this._multiple && Array.isArray(e))) &&
                (this.options && this._setSelectionByValue(e),
                (this._value = e),
                !0)
              );
            }
            _initKeyManager() {
              (this._keyManager = new Ks(this.options)
                .withTypeAhead(this._typeaheadDebounceInterval)
                .withVerticalOrientation()
                .withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr")
                .withHomeAndEnd()
                .withAllowedModifierKeys(["shiftKey"])),
                this._keyManager.tabOut
                  .pipe((0, B.R)(this._destroy))
                  .subscribe(() => {
                    this.panelOpen &&
                      (!this.multiple &&
                        this._keyManager.activeItem &&
                        this._keyManager.activeItem._selectViaInteraction(),
                      this.focus(),
                      this.close());
                  }),
                this._keyManager.change
                  .pipe((0, B.R)(this._destroy))
                  .subscribe(() => {
                    this._panelOpen && this.panel
                      ? this._scrollOptionIntoView(
                          this._keyManager.activeItemIndex || 0
                        )
                      : !this._panelOpen &&
                        !this.multiple &&
                        this._keyManager.activeItem &&
                        this._keyManager.activeItem._selectViaInteraction();
                  });
            }
            _resetOptions() {
              const e = (0, Fe.T)(this.options.changes, this._destroy);
              this.optionSelectionChanges.pipe((0, B.R)(e)).subscribe((n) => {
                this._onSelect(n.source, n.isUserInput),
                  n.isUserInput &&
                    !this.multiple &&
                    this._panelOpen &&
                    (this.close(), this.focus());
              }),
                (0, Fe.T)(...this.options.map((n) => n._stateChanges))
                  .pipe((0, B.R)(e))
                  .subscribe(() => {
                    this._changeDetectorRef.markForCheck(),
                      this.stateChanges.next();
                  });
            }
            _onSelect(e, n) {
              const r = this._selectionModel.isSelected(e);
              null != e.value || this._multiple
                ? (r !== e.selected &&
                    (e.selected
                      ? this._selectionModel.select(e)
                      : this._selectionModel.deselect(e)),
                  n && this._keyManager.setActiveItem(e),
                  this.multiple && (this._sortValues(), n && this.focus()))
                : (e.deselect(),
                  this._selectionModel.clear(),
                  null != this.value && this._propagateChanges(e.value)),
                r !== this._selectionModel.isSelected(e) &&
                  this._propagateChanges(),
                this.stateChanges.next();
            }
            _sortValues() {
              if (this.multiple) {
                const e = this.options.toArray();
                this._selectionModel.sort((n, r) =>
                  this.sortComparator
                    ? this.sortComparator(n, r, e)
                    : e.indexOf(n) - e.indexOf(r)
                ),
                  this.stateChanges.next();
              }
            }
            _propagateChanges(e) {
              let n = null;
              (n = this.multiple
                ? this.selected.map((r) => r.value)
                : this.selected
                ? this.selected.value
                : e),
                (this._value = n),
                this.valueChange.emit(n),
                this._onChange(n),
                this.selectionChange.emit(this._getChangeEvent(n)),
                this._changeDetectorRef.markForCheck();
            }
            _highlightCorrectOption() {
              this._keyManager &&
                (this.empty
                  ? this._keyManager.setFirstItemActive()
                  : this._keyManager.setActiveItem(
                      this._selectionModel.selected[0]
                    ));
            }
            _canOpen() {
              var e;
              return (
                !this._panelOpen &&
                !this.disabled &&
                (null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.length) > 0
              );
            }
            focus(e) {
              this._elementRef.nativeElement.focus(e);
            }
            _getPanelAriaLabelledby() {
              var e;
              if (this.ariaLabel) return null;
              const n =
                null === (e = this._parentFormField) || void 0 === e
                  ? void 0
                  : e.getLabelId();
              return this.ariaLabelledby
                ? (n ? n + " " : "") + this.ariaLabelledby
                : n;
            }
            _getAriaActiveDescendant() {
              return this.panelOpen &&
                this._keyManager &&
                this._keyManager.activeItem
                ? this._keyManager.activeItem.id
                : null;
            }
            _getTriggerAriaLabelledby() {
              var e;
              if (this.ariaLabel) return null;
              const n =
                null === (e = this._parentFormField) || void 0 === e
                  ? void 0
                  : e.getLabelId();
              let r = (n ? n + " " : "") + this._valueId;
              return this.ariaLabelledby && (r += " " + this.ariaLabelledby), r;
            }
            _panelDoneAnimating(e) {
              this.openedChange.emit(e);
            }
            setDescribedByIds(e) {
              this._ariaDescribedby = e.join(" ");
            }
            onContainerClick() {
              this.focus(), this.open();
            }
            get shouldLabelFloat() {
              return (
                this._panelOpen ||
                !this.empty ||
                (this._focused && !!this._placeholder)
              );
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                o.Y36(lt),
                o.Y36(o.sBO),
                o.Y36(o.R0b),
                o.Y36(ei),
                o.Y36(o.SBq),
                o.Y36(W.Is, 8),
                o.Y36(Se, 8),
                o.Y36(pe, 8),
                o.Y36(li, 8),
                o.Y36(Y, 10),
                o.$8M("tabindex"),
                o.Y36(sr),
                o.Y36(da),
                o.Y36(Nc, 8)
              );
            }),
            (i.ɵdir = o.lG2({
              type: i,
              viewQuery: function (e, n) {
                if ((1 & e && (o.Gf(xc, 5), o.Gf(Ac, 5), o.Gf(tr, 5)), 2 & e)) {
                  let r;
                  o.iGM((r = o.CRH())) && (n.trigger = r.first),
                    o.iGM((r = o.CRH())) && (n.panel = r.first),
                    o.iGM((r = o.CRH())) && (n._overlayDir = r.first);
                }
              },
              inputs: {
                panelClass: "panelClass",
                placeholder: "placeholder",
                required: "required",
                multiple: "multiple",
                disableOptionCentering: "disableOptionCentering",
                compareWith: "compareWith",
                value: "value",
                ariaLabel: ["aria-label", "ariaLabel"],
                ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                errorStateMatcher: "errorStateMatcher",
                typeaheadDebounceInterval: "typeaheadDebounceInterval",
                sortComparator: "sortComparator",
                id: "id",
              },
              outputs: {
                openedChange: "openedChange",
                _openedStream: "opened",
                _closedStream: "closed",
                selectionChange: "selectionChange",
                valueChange: "valueChange",
              },
              features: [o.qOj, o.TTD],
            })),
            i
          );
        })(),
        jc = (() => {
          class i extends Uc {
            constructor() {
              super(...arguments),
                (this._scrollTop = 0),
                (this._triggerFontSize = 0),
                (this._transformOrigin = "top"),
                (this._offsetY = 0),
                (this._positions = [
                  {
                    originX: "start",
                    originY: "top",
                    overlayX: "start",
                    overlayY: "top",
                  },
                  {
                    originX: "start",
                    originY: "bottom",
                    overlayX: "start",
                    overlayY: "bottom",
                  },
                ]);
            }
            _calculateOverlayScroll(e, n, r) {
              const s = this._getItemHeight();
              return Math.min(Math.max(0, s * e - n + s / 2), r);
            }
            ngOnInit() {
              super.ngOnInit(),
                this._viewportRuler
                  .change()
                  .pipe((0, B.R)(this._destroy))
                  .subscribe(() => {
                    this.panelOpen &&
                      ((this._triggerRect =
                        this.trigger.nativeElement.getBoundingClientRect()),
                      this._changeDetectorRef.markForCheck());
                  });
            }
            open() {
              super._canOpen() &&
                (super.open(),
                (this._triggerRect =
                  this.trigger.nativeElement.getBoundingClientRect()),
                (this._triggerFontSize = parseInt(
                  getComputedStyle(this.trigger.nativeElement).fontSize || "0"
                )),
                this._calculateOverlayPosition(),
                this._ngZone.onStable.pipe((0, ge.q)(1)).subscribe(() => {
                  this._triggerFontSize &&
                    this._overlayDir.overlayRef &&
                    this._overlayDir.overlayRef.overlayElement &&
                    (this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`);
                }));
            }
            _scrollOptionIntoView(e) {
              const n = go(e, this.options, this.optionGroups),
                r = this._getItemHeight();
              this.panel.nativeElement.scrollTop =
                0 === e && 1 === n
                  ? 0
                  : (function Ia(i, t, e, n) {
                      return i < e
                        ? i
                        : i + t > e + n
                        ? Math.max(0, i - n + t)
                        : e;
                    })((e + n) * r, r, this.panel.nativeElement.scrollTop, 256);
            }
            _positioningSettled() {
              this._calculateOverlayOffsetX(),
                (this.panel.nativeElement.scrollTop = this._scrollTop);
            }
            _panelDoneAnimating(e) {
              this.panelOpen
                ? (this._scrollTop = 0)
                : ((this._overlayDir.offsetX = 0),
                  this._changeDetectorRef.markForCheck()),
                super._panelDoneAnimating(e);
            }
            _getChangeEvent(e) {
              return new Hc(this, e);
            }
            _calculateOverlayOffsetX() {
              const e =
                  this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),
                n = this._viewportRuler.getViewportSize(),
                r = this._isRtl(),
                s = this.multiple ? 56 : 32;
              let a;
              if (this.multiple) a = 40;
              else if (this.disableOptionCentering) a = 16;
              else {
                let d = this._selectionModel.selected[0] || this.options.first;
                a = d && d.group ? 32 : 16;
              }
              r || (a *= -1);
              const l = 0 - (e.left + a - (r ? s : 0)),
                c = e.right + a - n.width + (r ? 0 : s);
              l > 0 ? (a += l + 8) : c > 0 && (a -= c + 8),
                (this._overlayDir.offsetX = Math.round(a)),
                this._overlayDir.overlayRef.updatePosition();
            }
            _calculateOverlayOffsetY(e, n, r) {
              const s = this._getItemHeight(),
                a = (s - this._triggerRect.height) / 2,
                l = Math.floor(256 / s);
              let c;
              return this.disableOptionCentering
                ? 0
                : ((c =
                    0 === this._scrollTop
                      ? e * s
                      : this._scrollTop === r
                      ? (e - (this._getItemCount() - l)) * s +
                        (s - ((this._getItemCount() * s - 256) % s))
                      : n - s / 2),
                  Math.round(-1 * c - a));
            }
            _checkOverlayWithinViewport(e) {
              const n = this._getItemHeight(),
                r = this._viewportRuler.getViewportSize(),
                s = this._triggerRect.top - 8,
                a = r.height - this._triggerRect.bottom - 8,
                l = Math.abs(this._offsetY),
                d =
                  Math.min(this._getItemCount() * n, 256) -
                  l -
                  this._triggerRect.height;
              d > a
                ? this._adjustPanelUp(d, a)
                : l > s
                ? this._adjustPanelDown(l, s, e)
                : (this._transformOrigin = this._getOriginBasedOnOption());
            }
            _adjustPanelUp(e, n) {
              const r = Math.round(e - n);
              (this._scrollTop -= r),
                (this._offsetY -= r),
                (this._transformOrigin = this._getOriginBasedOnOption()),
                this._scrollTop <= 0 &&
                  ((this._scrollTop = 0),
                  (this._offsetY = 0),
                  (this._transformOrigin = "50% bottom 0px"));
            }
            _adjustPanelDown(e, n, r) {
              const s = Math.round(e - n);
              if (
                ((this._scrollTop += s),
                (this._offsetY += s),
                (this._transformOrigin = this._getOriginBasedOnOption()),
                this._scrollTop >= r)
              )
                return (
                  (this._scrollTop = r),
                  (this._offsetY = 0),
                  void (this._transformOrigin = "50% top 0px")
                );
            }
            _calculateOverlayPosition() {
              const e = this._getItemHeight(),
                n = this._getItemCount(),
                r = Math.min(n * e, 256),
                a = n * e - r;
              let l;
              (l = this.empty
                ? 0
                : Math.max(
                    this.options
                      .toArray()
                      .indexOf(this._selectionModel.selected[0]),
                    0
                  )),
                (l += go(l, this.options, this.optionGroups));
              const c = r / 2;
              (this._scrollTop = this._calculateOverlayScroll(l, c, a)),
                (this._offsetY = this._calculateOverlayOffsetY(l, c, a)),
                this._checkOverlayWithinViewport(a);
            }
            _getOriginBasedOnOption() {
              const e = this._getItemHeight(),
                n = (e - this._triggerRect.height) / 2;
              return `50% ${Math.abs(this._offsetY) - n + e / 2}px 0px`;
            }
            _getItemHeight() {
              return 3 * this._triggerFontSize;
            }
            _getItemCount() {
              return this.options.length + this.optionGroups.length;
            }
          }
          return (
            (i.ɵfac = (function () {
              let t;
              return function (n) {
                return (t || (t = o.n5z(i)))(n || i);
              };
            })()),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["mat-select"]],
              contentQueries: function (e, n, r) {
                if (
                  (1 & e && (o.Suo(r, Gc, 5), o.Suo(r, _o, 5), o.Suo(r, mo, 5)),
                  2 & e)
                ) {
                  let s;
                  o.iGM((s = o.CRH())) && (n.customTrigger = s.first),
                    o.iGM((s = o.CRH())) && (n.options = s),
                    o.iGM((s = o.CRH())) && (n.optionGroups = s);
                }
              },
              hostAttrs: [
                "role",
                "combobox",
                "aria-autocomplete",
                "none",
                "aria-haspopup",
                "true",
                1,
                "mat-select",
              ],
              hostVars: 20,
              hostBindings: function (e, n) {
                1 & e &&
                  o.NdJ("keydown", function (s) {
                    return n._handleKeydown(s);
                  })("focus", function () {
                    return n._onFocus();
                  })("blur", function () {
                    return n._onBlur();
                  }),
                  2 & e &&
                    (o.uIk("id", n.id)("tabindex", n.tabIndex)(
                      "aria-controls",
                      n.panelOpen ? n.id + "-panel" : null
                    )("aria-expanded", n.panelOpen)(
                      "aria-label",
                      n.ariaLabel || null
                    )("aria-required", n.required.toString())(
                      "aria-disabled",
                      n.disabled.toString()
                    )("aria-invalid", n.errorState)(
                      "aria-describedby",
                      n._ariaDescribedby || null
                    )("aria-activedescendant", n._getAriaActiveDescendant()),
                    o.ekj("mat-select-disabled", n.disabled)(
                      "mat-select-invalid",
                      n.errorState
                    )("mat-select-required", n.required)(
                      "mat-select-empty",
                      n.empty
                    )("mat-select-multiple", n.multiple));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                tabIndex: "tabIndex",
              },
              exportAs: ["matSelect"],
              features: [
                o._Bn([
                  { provide: ot, useExisting: i },
                  { provide: po, useExisting: i },
                ]),
                o.qOj,
              ],
              ngContentSelectors: Rc,
              decls: 9,
              vars: 12,
              consts: [
                ["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"],
                ["origin", "cdkOverlayOrigin", "trigger", ""],
                [1, "mat-select-value", 3, "ngSwitch"],
                [
                  "class",
                  "mat-select-placeholder mat-select-min-line",
                  4,
                  "ngSwitchCase",
                ],
                [
                  "class",
                  "mat-select-value-text",
                  3,
                  "ngSwitch",
                  4,
                  "ngSwitchCase",
                ],
                [1, "mat-select-arrow-wrapper"],
                [1, "mat-select-arrow"],
                [
                  "cdk-connected-overlay",
                  "",
                  "cdkConnectedOverlayLockPosition",
                  "",
                  "cdkConnectedOverlayHasBackdrop",
                  "",
                  "cdkConnectedOverlayBackdropClass",
                  "cdk-overlay-transparent-backdrop",
                  3,
                  "cdkConnectedOverlayPanelClass",
                  "cdkConnectedOverlayScrollStrategy",
                  "cdkConnectedOverlayOrigin",
                  "cdkConnectedOverlayOpen",
                  "cdkConnectedOverlayPositions",
                  "cdkConnectedOverlayMinWidth",
                  "cdkConnectedOverlayOffsetY",
                  "backdropClick",
                  "attach",
                  "detach",
                ],
                [1, "mat-select-placeholder", "mat-select-min-line"],
                [1, "mat-select-value-text", 3, "ngSwitch"],
                ["class", "mat-select-min-line", 4, "ngSwitchDefault"],
                [4, "ngSwitchCase"],
                [1, "mat-select-min-line"],
                [1, "mat-select-panel-wrap"],
                ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"],
                ["panel", ""],
              ],
              template: function (e, n) {
                if (
                  (1 & e &&
                    (o.F$t(Tc),
                    o.TgZ(0, "div", 0, 1),
                    o.NdJ("click", function () {
                      return n.toggle();
                    }),
                    o.TgZ(3, "div", 2),
                    o.YNc(4, kc, 2, 1, "span", 3),
                    o.YNc(5, Fc, 3, 2, "span", 4),
                    o.qZA(),
                    o.TgZ(6, "div", 5),
                    o._UZ(7, "div", 6),
                    o.qZA()(),
                    o.YNc(8, Ic, 4, 14, "ng-template", 7),
                    o.NdJ("backdropClick", function () {
                      return n.close();
                    })("attach", function () {
                      return n._onAttached();
                    })("detach", function () {
                      return n.close();
                    })),
                  2 & e)
                ) {
                  const r = o.MAs(1);
                  o.uIk("aria-owns", n.panelOpen ? n.id + "-panel" : null),
                    o.xp6(3),
                    o.Q6J("ngSwitch", n.empty),
                    o.uIk("id", n._valueId),
                    o.xp6(1),
                    o.Q6J("ngSwitchCase", !0),
                    o.xp6(1),
                    o.Q6J("ngSwitchCase", !1),
                    o.xp6(3),
                    o.Q6J(
                      "cdkConnectedOverlayPanelClass",
                      n._overlayPanelClass
                    )("cdkConnectedOverlayScrollStrategy", n._scrollStrategy)(
                      "cdkConnectedOverlayOrigin",
                      r
                    )("cdkConnectedOverlayOpen", n.panelOpen)(
                      "cdkConnectedOverlayPositions",
                      n._positions
                    )(
                      "cdkConnectedOverlayMinWidth",
                      null == n._triggerRect ? null : n._triggerRect.width
                    )("cdkConnectedOverlayOffsetY", n._offsetY);
                }
              },
              directives: [er, y.RF, y.n9, y.ED, tr, y.mk],
              styles: [
                '.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;opacity:0}\n',
              ],
              encapsulation: 2,
              data: { animation: [nr.transformPanelWrap, nr.transformPanel] },
              changeDetection: 0,
            })),
            i
          );
        })(),
        Yc = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({
              providers: [Bc],
              imports: [[y.ez, Mc, vo, V], di, rt, vo, V],
            })),
            i
          );
        })();
      var Zc = g(9764),
        S = g(5620),
        X = g(4394),
        Z = (() => {
          return (
            ((i = Z || (Z = {})).LoadProducts = "[Products] Load Products"),
            (i.LoadProductsSuccess = "[Products] Load Products Success"),
            (i.LoadProductsFail = "[Products] Load Products Fail"),
            (i.AddProduct = "[Products] Add Product"),
            (i.AddProductSuccess = "[Products] Add Product Success"),
            (i.AddProductFail = "[Products] Add Product Fail"),
            (i.ResetProducts = "[Products] Reset Products"),
            Z
          );
          var i;
        })();
      const fi = (0, S.PH)(Z.LoadProducts),
        ar = (0, S.PH)(Z.LoadProductsSuccess, (0, S.Ky)()),
        lr = (0, S.PH)(Z.LoadProductsFail, (0, S.Ky)()),
        cr = (0, S.PH)(Z.AddProduct, (0, S.Ky)()),
        pi = (0, S.PH)(Z.AddProductSuccess, (0, S.Ky)()),
        qc = (0, S.PH)(Z.AddProductFail, (0, S.Ky)()),
        Wc = (0, S.PH)(Z.ResetProducts);
      var b = (() => {
        return (
          ((i = b || (b = {}))[(i.EntitiesOnly = 0)] = "EntitiesOnly"),
          (i[(i.Both = 1)] = "Both"),
          (i[(i.None = 2)] = "None"),
          b
        );
        var i;
      })();
      function D(i) {
        return function (e, n) {
          const r = {
              ids: [...n.ids],
              entities: Object.assign({}, n.entities),
            },
            s = i(e, r);
          return s === b.Both
            ? Object.assign({}, n, r)
            : s === b.EntitiesOnly
            ? Object.assign(Object.assign({}, n), { entities: r.entities })
            : n;
        };
      }
      function J(i, t) {
        const e = t(i);
        return (
          (0, o.X6Q)() &&
            void 0 === e &&
            console.warn(
              "@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.",
              "You should probably provide your own `selectId` implementation.",
              "The entity that was passed:",
              i,
              "The `selectId` implementation:",
              t.toString()
            ),
          e
        );
      }
      function dr(i) {
        function t(C, f) {
          const p = J(C, i);
          return p in f.entities
            ? b.None
            : (f.ids.push(p), (f.entities[p] = C), b.Both);
        }
        function e(C, f) {
          let p = !1;
          for (const h of C) p = t(h, f) !== b.None || p;
          return p ? b.Both : b.None;
        }
        function r(C, f) {
          const p = J(C, i);
          return p in f.entities
            ? ((f.entities[p] = C), b.EntitiesOnly)
            : (f.ids.push(p), (f.entities[p] = C), b.Both);
        }
        function l(C, f) {
          const h =
            (C instanceof Array ? C : f.ids.filter((_) => C(f.entities[_])))
              .filter((_) => _ in f.entities)
              .map((_) => delete f.entities[_]).length > 0;
          return (
            h && (f.ids = f.ids.filter((_) => _ in f.entities)),
            h ? b.Both : b.None
          );
        }
        function u(C, f) {
          return m([C], f);
        }
        function m(C, f) {
          const p = {};
          return (C = C.filter((_) => _.id in f.entities)).length > 0
            ? C.filter((M) =>
                (function d(C, f, p) {
                  const _ = Object.assign({}, p.entities[f.id], f.changes),
                    M = J(_, i),
                    k = M !== f.id;
                  return (
                    k && ((C[f.id] = M), delete p.entities[f.id]),
                    (p.entities[M] = _),
                    k
                  );
                })(p, M, f)
              ).length > 0
              ? ((f.ids = f.ids.map((M) => p[M] || M)), b.Both)
              : b.EntitiesOnly
            : b.None;
        }
        function A(C, f) {
          const p = [],
            h = [];
          for (const k of C) {
            const T = J(k, i);
            T in f.entities ? h.push({ id: T, changes: k }) : p.push(k);
          }
          const _ = m(h, f),
            M = e(p, f);
          switch (!0) {
            case M === b.None && _ === b.None:
              return b.None;
            case M === b.Both || _ === b.Both:
              return b.Both;
            default:
              return b.EntitiesOnly;
          }
        }
        return {
          removeAll: function c(C) {
            return Object.assign({}, C, { ids: [], entities: {} });
          },
          addOne: D(t),
          addMany: D(e),
          setAll: D(function n(C, f) {
            return (f.ids = []), (f.entities = {}), e(C, f), b.Both;
          }),
          setOne: D(r),
          setMany: D(function s(C, f) {
            const p = C.map((h) => r(h, f));
            switch (!0) {
              case p.some((h) => h === b.Both):
                return b.Both;
              case p.some((h) => h === b.EntitiesOnly):
                return b.EntitiesOnly;
              default:
                return b.None;
            }
          }),
          updateOne: D(u),
          updateMany: D(m),
          upsertOne: D(function E(C, f) {
            return A([C], f);
          }),
          upsertMany: D(A),
          removeOne: D(function a(C, f) {
            return l([C], f);
          }),
          removeMany: D(l),
          map: D(function x(C, f) {
            return m(
              f.ids
                .reduce((_, M) => {
                  const k = C(f.entities[M]);
                  return (
                    k !== f.entities[M] && _.push({ id: M, changes: k }), _
                  );
                }, [])
                .filter(({ id: _ }) => _ in f.entities),
              f
            );
          }),
          mapOne: D(function w({ map: C, id: f }, p) {
            const h = p.entities[f];
            return h ? u({ id: f, changes: C(h) }, p) : b.None;
          }),
        };
      }
      const ut = (function Qc(i = {}) {
          var t, e;
          const { selectId: n, sortComparer: r } = {
              selectId:
                null !== (t = i.selectId) && void 0 !== t ? t : (c) => c.id,
              sortComparer: null !== (e = i.sortComparer) && void 0 !== e && e,
            },
            s = (function Xc() {
              return {
                getInitialState: function i(t = {}) {
                  return Object.assign({ ids: [], entities: {} }, t);
                },
              };
            })(),
            a = (function Jc() {
              return {
                getSelectors: function i(t) {
                  const e = (a) => a.ids,
                    n = (a) => a.entities,
                    r = (0, S.P1)(e, n, (a, l) => a.map((c) => l[c])),
                    s = (0, S.P1)(e, (a) => a.length);
                  return t
                    ? {
                        selectIds: (0, S.P1)(t, e),
                        selectEntities: (0, S.P1)(t, n),
                        selectAll: (0, S.P1)(t, r),
                        selectTotal: (0, S.P1)(t, s),
                      }
                    : {
                        selectIds: e,
                        selectEntities: n,
                        selectAll: r,
                        selectTotal: s,
                      };
                },
              };
            })(),
            l = r
              ? (function Kc(i, t) {
                  const { removeOne: e, removeMany: n, removeAll: r } = dr(i);
                  function s(p, h) {
                    return a([p], h);
                  }
                  function a(p, h) {
                    const _ = p.filter((M) => !(J(M, i) in h.entities));
                    return 0 === _.length ? b.None : (f(_, h), b.Both);
                  }
                  function c(p, h) {
                    const _ = J(p, i);
                    return _ in h.entities
                      ? ((h.ids = h.ids.filter((M) => M !== _)),
                        f([p], h),
                        b.Both)
                      : s(p, h);
                  }
                  function u(p, h) {
                    return x([p], h);
                  }
                  function x(p, h) {
                    const _ = [],
                      M =
                        p.filter((k) =>
                          (function m(p, h, _) {
                            if (!(h.id in _.entities)) return !1;
                            const k = Object.assign(
                                {},
                                _.entities[h.id],
                                h.changes
                              ),
                              T = J(k, i);
                            return (
                              delete _.entities[h.id], p.push(k), T !== h.id
                            );
                          })(_, k, h)
                        ).length > 0;
                    if (0 === _.length) return b.None;
                    {
                      const k = h.ids,
                        T = [];
                      return (
                        (h.ids = h.ids.filter(
                          (j, ue) => j in h.entities || (T.push(ue), !1)
                        )),
                        f(_, h),
                        !M && T.every((j) => h.ids[j] === k[j])
                          ? b.EntitiesOnly
                          : b.Both
                      );
                    }
                  }
                  function C(p, h) {
                    const _ = [],
                      M = [];
                    for (const j of p) {
                      const ue = J(j, i);
                      ue in h.entities
                        ? M.push({ id: ue, changes: j })
                        : _.push(j);
                    }
                    const k = x(M, h),
                      T = a(_, h);
                    switch (!0) {
                      case T === b.None && k === b.None:
                        return b.None;
                      case T === b.Both || k === b.Both:
                        return b.Both;
                      default:
                        return b.EntitiesOnly;
                    }
                  }
                  function f(p, h) {
                    p.sort(t);
                    const _ = [];
                    let M = 0,
                      k = 0;
                    for (; M < p.length && k < h.ids.length; ) {
                      const T = p[M],
                        j = J(T, i),
                        ue = h.ids[k];
                      t(T, h.entities[ue]) <= 0
                        ? (_.push(j), M++)
                        : (_.push(ue), k++);
                    }
                    (h.ids = _.concat(
                      M < p.length ? p.slice(M).map(i) : h.ids.slice(k)
                    )),
                      p.forEach((T, j) => {
                        h.entities[i(T)] = T;
                      });
                  }
                  return {
                    removeOne: e,
                    removeMany: n,
                    removeAll: r,
                    addOne: D(s),
                    updateOne: D(u),
                    upsertOne: D(function A(p, h) {
                      return C([p], h);
                    }),
                    setAll: D(function l(p, h) {
                      return (h.entities = {}), (h.ids = []), a(p, h), b.Both;
                    }),
                    setOne: D(c),
                    setMany: D(function d(p, h) {
                      const _ = p.map((M) => c(M, h));
                      switch (!0) {
                        case _.some((M) => M === b.Both):
                          return b.Both;
                        case _.some((M) => M === b.EntitiesOnly):
                          return b.EntitiesOnly;
                        default:
                          return b.None;
                      }
                    }),
                    addMany: D(a),
                    updateMany: D(x),
                    upsertMany: D(C),
                    map: D(function w(p, h) {
                      return x(
                        h.ids.reduce((M, k) => {
                          const T = p(h.entities[k]);
                          return (
                            T !== h.entities[k] &&
                              M.push({ id: k, changes: T }),
                            M
                          );
                        }, []),
                        h
                      );
                    }),
                    mapOne: D(function E({ map: p, id: h }, _) {
                      const M = _.entities[h];
                      return M ? u({ id: h, changes: p(M) }, _) : b.None;
                    }),
                  };
                })(n, r)
              : dr(n);
          return Object.assign(
            Object.assign(
              Object.assign({ selectId: n, sortComparer: r }, s),
              a
            ),
            l
          );
        })({
          selectId: function td(i) {
            return i.id;
          },
        }),
        ur = ut.getInitialState({ loading: !1, loaded: !1, error: null }),
        id = (0, S.Lq)(
          ur,
          (0, S.on)(fi, (i) =>
            Object.assign(Object.assign({}, i), { loading: !0 })
          ),
          (0, S.on)(ar, (i, t) =>
            Object.assign(Object.assign({}, ut.setAll(t.products, i)), {
              loading: !1,
              loaded: !0,
              error: null,
            })
          ),
          (0, S.on)(lr, (i, t) => {
            const { error: e } = t;
            return Object.assign(Object.assign({}, i), {
              loading: !1,
              loaded: !1,
              error: e.error,
            });
          }),
          (0, S.on)(pi, (i, t) => Object.assign({}, ut.addOne(t.product, i))),
          (0, S.on)(Wc, () => ur)
        ),
        { selectAll: nd, selectEntities: od } = ut.getSelectors(),
        cd = nd,
        dd = od,
        hr = "products",
        ud = { products: id },
        hd = (0, S.ZF)(hr);
      var ht = g(2273);
      const ye = (0, S.P1)(hd, (i) => i.products),
        fd = ((0, S.P1)(ye, (i) => i.loading), (0, S.P1)(ye, (i) => i.loaded)),
        pd = (0, S.P1)(ye, dd),
        md = (0, S.P1)(ye, cd),
        _d = (0, S.P1)(ye, (i) => i.ids),
        gd = (0, S.P1)(pd, ht.OE("productId"), (i, t) => i[t]);
      (0, S.P1)(ye, (i) => i.error);
      var vd = g(5835);
      let yd = (() => {
        class i {
          constructor(e) {
            (this.http = e), (this.BASE_URL = "/api/products");
          }
          getProducts() {
            return (0, G.of)(vd);
          }
          addProduct(e) {
            const n = Math.random().toString(36).slice(2),
              r = Object.assign(Object.assign({}, e), { id: n });
            return (0, G.of)(r);
          }
          handleError(e) {
            return (0, yo._)(() => e);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.LFG(Le));
          }),
          (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac, providedIn: "any" })),
          i
        );
      })();
      const bd = [
        (() => {
          class i {
            constructor(e, n, r) {
              (this.productsService = e),
                (this.actions$ = n),
                (this.store = r),
                (this.loadProducts$ = (0, X.GW)(() =>
                  this.actions$.pipe(
                    (0, X.l4)(fi),
                    (0, X.IC)(() => this.store.pipe((0, S.Ys)(fd))),
                    (0, ie.h)(([, s]) => !s),
                    (0, si.z)(() =>
                      this.productsService.getProducts().pipe(
                        (0, R.U)((s) => ar({ products: s })),
                        (0, oi.K)((s) => (0, G.of)(lr({ error: s })))
                      )
                    )
                  )
                )),
                (this.addProduct$ = (0, X.GW)(() =>
                  this.actions$.pipe(
                    (0, X.l4)(cr),
                    (0, si.z)(({ product: s }) =>
                      this.productsService.addProduct(s).pipe(
                        (0, R.U)((a) => pi({ product: a })),
                        (0, oi.K)((a) => (0, G.of)(qc({ error: a })))
                      )
                    )
                  )
                )),
                (this.addProductSuccess$ = (0, X.GW)(() =>
                  this.actions$.pipe(
                    (0, X.l4)(pi),
                    (0, R.U)(({ product: s }) =>
                      ht.go({ path: ["main", "products", s.id] })
                    )
                  )
                ));
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(o.LFG(yd), o.LFG(X.eX), o.LFG(S.yh));
            }),
            (i.ɵprov = o.Yz7({ token: i, factory: i.ɵfac })),
            i
          );
        })(),
      ];
      var ft = g(5215),
        H = g(7093);
      let Cd = (() => {
        class i {
          constructor() {
            this.addProduct = new o.vpe();
          }
          onAddProduct() {
            this.addProduct.emit();
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-products-header"]],
            outputs: { addProduct: "addProduct" },
            decls: 5,
            vars: 0,
            consts: [
              [
                "fxLayout",
                "row",
                "fxLayoutAlign",
                "space-between center",
                "fxLayoutAlign.xs",
                "center center",
                1,
                "products-header",
              ],
              [1, "products-header__panel", "products-header__panel--left"],
              [1, "products-header__panel", "products-header__panel--right"],
              [
                "mat-stroked-button",
                "",
                1,
                "products-header__button",
                3,
                "click",
              ],
            ],
            template: function (e, n) {
              1 & e &&
                (o.TgZ(0, "div", 0),
                o._UZ(1, "div", 1),
                o.TgZ(2, "div", 2)(3, "button", 3),
                o.NdJ("click", function () {
                  return n.onAddProduct();
                }),
                o._uU(4, " Add Product "),
                o.qZA()()());
            },
            directives: [H.xw, H.Wh, ni],
            styles: [
              ".products-header[_ngcontent-%COMP%]{border-bottom:.063rem solid #dddddd;margin-bottom:2rem;padding:1rem}",
            ],
          })),
          i
        );
      })();
      const fr = (0, O.X$)("slideUp", [
        (0, O.eR)("void => *", [
          (0, O.oB)({ opacity: 0.1, transform: "translateY(100px)" }),
          (0, O.jt)("600ms ease-in"),
        ]),
      ]);
      let pr = (() => {
          class i {
            constructor() {
              this.colorFill = "#f5f5f5";
            }
            set color(e) {
              e && (this.colorFill = e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["app-svg"]],
              inputs: { color: "color" },
              decls: 3,
              vars: 1,
              consts: [
                [
                  "version",
                  "1.1",
                  "id",
                  "Capa_1",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  0,
                  "xmlns",
                  "xlink",
                  "http://www.w3.org/1999/xlink",
                  "width",
                  "100%",
                  "height",
                  "100%",
                  "viewBox",
                  "0 0 70 70",
                  0,
                  "xml",
                  "space",
                  "preserve",
                ],
                [2, "transform", "translate(10px, 10px)"],
                [
                  "d",
                  "M45.961,18.702c-0.033-0.038-0.061-0.075-0.1-0.112l-1.717-1.657c1.424-0.323,2.957-1.516,2.957-2.74\n\t\tc0-1.426-1.979-1.932-3.668-1.932c-1.766,0-1.971,1.21-1.992,2.065l-4.43-4.271c-0.9-0.891-2.607-1.592-3.883-1.592H24.5h-0.002\n\t\th-8.63c-1.275,0-2.981,0.701-3.882,1.592l-4.429,4.271c-0.023-0.855-0.228-2.065-1.992-2.065c-1.691,0-3.669,0.506-3.669,1.932\n\t\tc0,1.224,1.534,2.417,2.958,2.74l-1.717,1.657c-0.039,0.037-0.066,0.074-0.1,0.112C1.2,20.272,0,23.184,0,25.297v6.279\n\t\tc0,1.524,0.601,2.907,1.572,3.938v2.435c0,1.424,1.192,2.585,2.658,2.585h3.214c1.466,0,2.657-1.159,2.657-2.585v-0.623h14.397\n\t\tH24.5h14.396v0.623c0,1.426,1.19,2.585,2.658,2.585h3.213c1.467,0,2.657-1.161,2.657-2.585v-2.435\n\t\tc0.972-1.031,1.572-2.414,1.572-3.938v-6.279C48.998,23.184,47.798,20.272,45.961,18.702z M13.613,11.953\n\t\tc0.623-0.519,1.712-0.913,2.255-0.913h8.63H24.5h8.63c0.543,0,1.632,0.394,2.255,0.913l5.809,5.63H24.5h-0.002H7.805L13.613,11.953\n\t\tz M1.993,24.347c0-1.546,1.21-2.801,2.704-2.801c1.493,0,6.372,2.864,6.372,4.41s-4.879,1.188-6.372,1.188\n\t\tC3.203,27.144,1.993,25.894,1.993,24.347z M10.102,34.573H9.587H9.072l-3.055,0.005c-0.848-0.264-1.446-0.572-1.869-0.903\n\t\tc-0.214-0.167-0.378-0.341-0.506-0.514c-0.129-0.175-0.223-0.347-0.284-0.519c-0.38-1.074,0.405-2.061,0.405-2.061h5.214\n\t\tl3.476,3.99L10.102,34.573L10.102,34.573z M31.996,34.575H24.5h-0.002h-7.496c-1.563,0-2.832-1.269-2.832-2.831h10.328H24.5h10.328\n\t\tC34.828,33.308,33.559,34.575,31.996,34.575z M32.654,29.812H24.5h-0.002h-8.154c-1.7,0-3.08-2.096-3.08-4.681h11.234H24.5h11.234\n\t\tC35.734,27.717,34.354,29.812,32.654,29.812z M45.641,32.644c-0.062,0.172-0.156,0.344-0.285,0.518\n\t\tc-0.127,0.173-0.291,0.347-0.506,0.514c-0.422,0.331-1.021,0.641-1.869,0.903l-3.055-0.005h-0.515h-0.515h-2.353l3.478-3.99h5.213\n\t\tC45.234,30.583,46.02,31.568,45.641,32.644z M44.301,27.144c-1.492,0-6.371,0.356-6.371-1.188s4.879-4.41,6.371-4.41\n\t\tc1.494,0,2.704,1.255,2.704,2.801C47.005,25.892,45.795,27.144,44.301,27.144z",
                ],
              ],
              template: function (e, n) {
                1 & e &&
                  (o.O4$(),
                  o.TgZ(0, "svg", 0)(1, "g", 1),
                  o._UZ(2, "path", 2),
                  o.qZA()()),
                  2 & e && o.uIk("fill", n.colorFill);
              },
              styles: [""],
            })),
            i
          );
        })(),
        mi = (() => {
          class i {
            constructor() {
              this.color = "#DDDDDD";
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["app-color-swatch"]],
              inputs: { color: "color" },
              decls: 1,
              vars: 2,
              consts: [[1, "color-swatch"]],
              template: function (e, n) {
                1 & e && o._UZ(0, "div", 0),
                  2 & e && o.Udp("background-color", n.color);
              },
              styles: [
                ".color-swatch[_ngcontent-%COMP%]{border-radius:50%;box-shadow:0 .188rem .375rem #ddd;height:2rem;width:2rem}",
              ],
            })),
            i
          );
        })();
      const wd = function (i) {
        return ["/main", "products", i];
      };
      function Md(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "div", 1)(1, "a", 2)(2, "div", 3),
            o._UZ(3, "app-svg", 4),
            o.qZA(),
            o.TgZ(4, "div", 5)(5, "div", 6)(6, "p", 7),
            o._uU(7),
            o.qZA(),
            o.TgZ(8, "small", 8),
            o._uU(9),
            o.qZA()(),
            o.TgZ(10, "div", 9),
            o._UZ(11, "app-color-swatch", 4),
            o.qZA()()()()),
          2 & i)
        ) {
          const e = o.oxw();
          o.xp6(1),
            o.Q6J("routerLink", o.VKq(5, wd, e.product.id)),
            o.xp6(2),
            o.Q6J("color", e.product.color),
            o.xp6(4),
            o.Oqu(e.product.title),
            o.xp6(2),
            o.Oqu(e.product.subtitle),
            o.xp6(2),
            o.Q6J("color", e.product.color);
        }
      }
      let Ed = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-product-card"]],
            inputs: { product: "product" },
            decls: 1,
            vars: 1,
            consts: [
              ["class", "product-card", 4, "ngIf"],
              [1, "product-card"],
              [1, "product-card__link", 3, "routerLink"],
              [1, "product-card__image-container"],
              [3, "color"],
              [
                "fxLayout",
                "row",
                "fxLayoutAlign",
                "space-between center",
                1,
                "product-card__content",
              ],
              [1, "product-card__panel", "product-card__panel--left"],
              [1, "product-card__title", "mat-subheading-1"],
              [1, "product-card__subtitle"],
              [1, "product-card__panel", "product-card__panel--right"],
            ],
            template: function (e, n) {
              1 & e && o.YNc(0, Md, 12, 7, "div", 0),
                2 & e && o.Q6J("ngIf", n.product);
            },
            directives: [y.O5, ft.yS, pr, H.xw, H.Wh, mi],
            styles: [
              ".product-card[_ngcontent-%COMP%]:hover   .product-card__image-container[_ngcontent-%COMP%]{box-shadow:0 0 .5rem #797979;transition:box-shadow .2s ease-in}.product-card__link[_ngcontent-%COMP%]{text-decoration:none;color:inherit;cursor:pointer}.product-card__image-container[_ngcontent-%COMP%]{background:#dddddd;min-width:11.5rem;min-height:15rem}.product-card__content[_ngcontent-%COMP%]{padding:1rem 0}.product-card__title[_ngcontent-%COMP%]{margin-bottom:0;word-break:break-all}.product-card__subtitle[_ngcontent-%COMP%]{word-break:break-all}",
            ],
          })),
          i
        );
      })();
      function Sd(i, t) {
        1 & i && o._UZ(0, "app-product-card", 2),
          2 & i && o.Q6J("product", t.$implicit);
      }
      let xd = (() => {
        class i {
          constructor() {
            this.products = [];
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-products-grid"]],
            inputs: { products: "products" },
            decls: 2,
            vars: 2,
            consts: [
              [1, "products-grid"],
              [3, "product", 4, "ngFor", "ngForOf"],
              [3, "product"],
            ],
            template: function (e, n) {
              1 & e &&
                (o.TgZ(0, "div", 0),
                o.YNc(1, Sd, 1, 1, "app-product-card", 1),
                o.qZA()),
                2 & e &&
                  (o.Q6J("@slideUp", void 0),
                  o.xp6(1),
                  o.Q6J("ngForOf", n.products));
            },
            directives: [y.sg, Ed],
            styles: [
              ".products-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));grid-gap:1rem;gap:1rem}",
            ],
            data: { animation: [fr] },
          })),
          i
        );
      })();
      function Ad(i, t) {
        if ((1 & i && (o.O4$(), o._UZ(0, "circle", 4)), 2 & i)) {
          const e = o.oxw(),
            n = o.MAs(1);
          o.Udp(
            "animation-name",
            "mat-progress-spinner-stroke-rotate-" + e._spinnerAnimationLabel
          )("stroke-dashoffset", e._getStrokeDashOffset(), "px")(
            "stroke-dasharray",
            e._getStrokeCircumference(),
            "px"
          )(
            "stroke-width",
            e._getCircleStrokeWidth(),
            "%"
          )("transform-origin", e._getCircleTransformOrigin(n)),
            o.uIk("r", e._getCircleRadius());
        }
      }
      function kd(i, t) {
        if ((1 & i && (o.O4$(), o._UZ(0, "circle", 4)), 2 & i)) {
          const e = o.oxw(),
            n = o.MAs(1);
          o.Udp("stroke-dashoffset", e._getStrokeDashOffset(), "px")(
            "stroke-dasharray",
            e._getStrokeCircumference(),
            "px"
          )(
            "stroke-width",
            e._getCircleStrokeWidth(),
            "%"
          )("transform-origin", e._getCircleTransformOrigin(n)),
            o.uIk("r", e._getCircleRadius());
        }
      }
      const Dd = Qt(
          class {
            constructor(i) {
              this._elementRef = i;
            }
          },
          "primary"
        ),
        Fd = new o.OlP("mat-progress-spinner-default-options", {
          providedIn: "root",
          factory: function Id() {
            return { diameter: 100 };
          },
        });
      class K extends Dd {
        constructor(t, e, n, r, s, a, l, c) {
          super(t),
            (this._document = n),
            (this._diameter = 100),
            (this._value = 0),
            (this._resizeSubscription = $.w0.EMPTY),
            (this.mode = "determinate");
          const d = K._diameters;
          (this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
            d.has(n.head) || d.set(n.head, new Set([100])),
            (this._noopAnimations =
              "NoopAnimations" === r && !!s && !s._forceAnimations),
            "mat-spinner" === t.nativeElement.nodeName.toLowerCase() &&
              (this.mode = "indeterminate"),
            s &&
              (s.diameter && (this.diameter = s.diameter),
              s.strokeWidth && (this.strokeWidth = s.strokeWidth)),
            e.isBrowser &&
              e.SAFARI &&
              l &&
              a &&
              c &&
              (this._resizeSubscription = l.change(150).subscribe(() => {
                "indeterminate" === this.mode && c.run(() => a.markForCheck());
              }));
        }
        get diameter() {
          return this._diameter;
        }
        set diameter(t) {
          (this._diameter = (0, v.su)(t)),
            (this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
            this._styleRoot && this._attachStyleNode();
        }
        get strokeWidth() {
          return this._strokeWidth || this.diameter / 10;
        }
        set strokeWidth(t) {
          this._strokeWidth = (0, v.su)(t);
        }
        get value() {
          return "determinate" === this.mode ? this._value : 0;
        }
        set value(t) {
          this._value = Math.max(0, Math.min(100, (0, v.su)(t)));
        }
        ngOnInit() {
          const t = this._elementRef.nativeElement;
          (this._styleRoot = Yn(t) || this._document.head),
            this._attachStyleNode(),
            t.classList.add("mat-progress-spinner-indeterminate-animation");
        }
        ngOnDestroy() {
          this._resizeSubscription.unsubscribe();
        }
        _getCircleRadius() {
          return (this.diameter - 10) / 2;
        }
        _getViewBox() {
          const t = 2 * this._getCircleRadius() + this.strokeWidth;
          return `0 0 ${t} ${t}`;
        }
        _getStrokeCircumference() {
          return 2 * Math.PI * this._getCircleRadius();
        }
        _getStrokeDashOffset() {
          return "determinate" === this.mode
            ? (this._getStrokeCircumference() * (100 - this._value)) / 100
            : null;
        }
        _getCircleStrokeWidth() {
          return (this.strokeWidth / this.diameter) * 100;
        }
        _getCircleTransformOrigin(t) {
          var e;
          const n =
            50 * (null !== (e = t.currentScale) && void 0 !== e ? e : 1);
          return `${n}% ${n}%`;
        }
        _attachStyleNode() {
          const t = this._styleRoot,
            e = this._diameter,
            n = K._diameters;
          let r = n.get(t);
          if (!r || !r.has(e)) {
            const s = this._document.createElement("style");
            s.setAttribute(
              "mat-spinner-animation",
              this._spinnerAnimationLabel
            ),
              (s.textContent = this._getAnimationText()),
              t.appendChild(s),
              r || ((r = new Set()), n.set(t, r)),
              r.add(e);
          }
        }
        _getAnimationText() {
          const t = this._getStrokeCircumference();
          return "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n"
            .replace(/START_VALUE/g, "" + 0.95 * t)
            .replace(/END_VALUE/g, "" + 0.2 * t)
            .replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
        }
        _getSpinnerAnimationLabel() {
          return this.diameter.toString().replace(".", "_");
        }
      }
      (K._diameters = new WeakMap()),
        (K.ɵfac = function (t) {
          return new (t || K)(
            o.Y36(o.SBq),
            o.Y36(z),
            o.Y36(y.K0, 8),
            o.Y36(ke.Qb, 8),
            o.Y36(Fd),
            o.Y36(o.sBO),
            o.Y36(lt),
            o.Y36(o.R0b)
          );
        }),
        (K.ɵcmp = o.Xpm({
          type: K,
          selectors: [["mat-progress-spinner"], ["mat-spinner"]],
          hostAttrs: [
            "role",
            "progressbar",
            "tabindex",
            "-1",
            1,
            "mat-progress-spinner",
            "mat-spinner",
          ],
          hostVars: 10,
          hostBindings: function (t, e) {
            2 & t &&
              (o.uIk("aria-valuemin", "determinate" === e.mode ? 0 : null)(
                "aria-valuemax",
                "determinate" === e.mode ? 100 : null
              )("aria-valuenow", "determinate" === e.mode ? e.value : null)(
                "mode",
                e.mode
              ),
              o.Udp("width", e.diameter, "px")("height", e.diameter, "px"),
              o.ekj("_mat-animation-noopable", e._noopAnimations));
          },
          inputs: {
            color: "color",
            diameter: "diameter",
            strokeWidth: "strokeWidth",
            mode: "mode",
            value: "value",
          },
          exportAs: ["matProgressSpinner"],
          features: [o.qOj],
          decls: 4,
          vars: 8,
          consts: [
            [
              "preserveAspectRatio",
              "xMidYMid meet",
              "focusable",
              "false",
              "aria-hidden",
              "true",
              3,
              "ngSwitch",
            ],
            ["svg", ""],
            [
              "cx",
              "50%",
              "cy",
              "50%",
              3,
              "animation-name",
              "stroke-dashoffset",
              "stroke-dasharray",
              "stroke-width",
              "transform-origin",
              4,
              "ngSwitchCase",
            ],
            [
              "cx",
              "50%",
              "cy",
              "50%",
              3,
              "stroke-dashoffset",
              "stroke-dasharray",
              "stroke-width",
              "transform-origin",
              4,
              "ngSwitchCase",
            ],
            ["cx", "50%", "cy", "50%"],
          ],
          template: function (t, e) {
            1 & t &&
              (o.O4$(),
              o.TgZ(0, "svg", 0, 1),
              o.YNc(2, Ad, 1, 11, "circle", 2),
              o.YNc(3, kd, 1, 9, "circle", 3),
              o.qZA()),
              2 & t &&
                (o.Udp("width", e.diameter, "px")("height", e.diameter, "px"),
                o.Q6J("ngSwitch", "indeterminate" === e.mode),
                o.uIk("viewBox", e._getViewBox()),
                o.xp6(2),
                o.Q6J("ngSwitchCase", !0),
                o.xp6(1),
                o.Q6J("ngSwitchCase", !1));
          },
          directives: [y.RF, y.n9],
          styles: [
            ".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n",
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      let Rd = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[V, y.ez], V] })),
            i
          );
        })(),
        Pd = (() => {
          class i {
            constructor() {
              this.diameter = 50;
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["app-loading"]],
              inputs: { diameter: "diameter" },
              decls: 1,
              vars: 1,
              consts: [[1, "loading", 3, "diameter"]],
              template: function (e, n) {
                1 & e && o._UZ(0, "mat-spinner", 0),
                  2 & e && o.Q6J("diameter", n.diameter);
              },
              directives: [K],
              styles: [".loading[_ngcontent-%COMP%]{margin:auto}"],
            })),
            i
          );
        })();
      function Ld(i, t) {
        1 & i && o._UZ(0, "app-products-grid", 5),
          2 & i && o.Q6J("products", t.ngIf);
      }
      function Vd(i, t) {
        1 & i && o._UZ(0, "app-loading");
      }
      let mr = (() => {
        class i {
          constructor(e) {
            this.store = e;
          }
          ngOnInit() {
            (this.products$ = this.store.pipe(
              (0, S.Ys)(md),
              (0, ie.h)((e) => !!e.length)
            )),
              this.store.dispatch(fi());
          }
          onAddProduct() {
            this.store.dispatch(ht.go({ path: ["main", "products", "add"] }));
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(S.yh));
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-products"]],
            decls: 8,
            vars: 4,
            consts: [
              [1, "products"],
              [1, "products__title"],
              [3, "addProduct"],
              [3, "products", 4, "ngIf", "ngIfElse"],
              ["loading", ""],
              [3, "products"],
            ],
            template: function (e, n) {
              if (
                (1 & e &&
                  (o.TgZ(0, "section", 0)(1, "h1", 1),
                  o._uU(2, "Products"),
                  o.qZA(),
                  o.TgZ(3, "app-products-header", 2),
                  o.NdJ("addProduct", function () {
                    return n.onAddProduct();
                  }),
                  o.qZA(),
                  o.YNc(4, Ld, 1, 1, "app-products-grid", 3),
                  o.ALo(5, "async"),
                  o.YNc(6, Vd, 1, 0, "ng-template", null, 4, o.W1O),
                  o.qZA()),
                2 & e)
              ) {
                const r = o.MAs(7);
                o.xp6(4),
                  o.Q6J("ngIf", o.lcZ(5, 2, n.products$))("ngIfElse", r);
              }
            },
            directives: [Cd, y.O5, xd, Pd],
            pipes: [y.Ov],
            styles: [".products__title[_ngcontent-%COMP%]{text-align:center}"],
            changeDetection: 0,
          })),
          i
        );
      })();
      function Nd(i, t) {
        if (
          (1 & i && (o.TgZ(0, "li", 17)(1, "span", 12), o._uU(2), o.qZA()()),
          2 & i)
        ) {
          const e = t.$implicit;
          o.xp6(2), o.Oqu(e);
        }
      }
      function Bd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "div", 14)(1, "div", 11),
            o._uU(2, "Details"),
            o.qZA(),
            o.TgZ(3, "ul", 15),
            o.YNc(4, Nd, 3, 1, "li", 16),
            o.qZA()()),
          2 & i)
        ) {
          const e = o.oxw(2);
          o.xp6(4), o.Q6J("ngForOf", e.product.details);
        }
      }
      function Hd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3),
            o._uU(3),
            o.qZA(),
            o.TgZ(4, "div", 4),
            o._uU(5),
            o.qZA(),
            o.TgZ(6, "div", 5)(7, "div", 6),
            o._uU(8, "Color"),
            o.qZA(),
            o.TgZ(9, "div", 7),
            o._UZ(10, "app-color-swatch", 8),
            o.qZA()(),
            o.TgZ(11, "div", 5)(12, "div", 6),
            o._uU(13, "Status"),
            o.qZA(),
            o.TgZ(14, "div", 9),
            o._uU(15),
            o.qZA()()(),
            o.TgZ(16, "div", 10)(17, "div", 11),
            o._uU(18, "Description"),
            o.qZA(),
            o.TgZ(19, "p", 12)(20, "span"),
            o._uU(21),
            o.qZA()()(),
            o.YNc(22, Bd, 5, 1, "div", 13),
            o.qZA()),
          2 & i)
        ) {
          const e = o.oxw();
          o.xp6(3),
            o.Oqu(e.product.title),
            o.xp6(2),
            o.Oqu(e.product.subtitle),
            o.xp6(5),
            o.Q6J("color", e.product.color),
            o.xp6(5),
            o.hij(" ", e.product.status, " "),
            o.xp6(6),
            o.Oqu(e.product.description),
            o.xp6(1),
            o.Q6J(
              "ngIf",
              null == e.product.details ? null : e.product.details.length
            );
        }
      }
      let zd = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-product-details"]],
            inputs: { product: "product" },
            decls: 1,
            vars: 1,
            consts: [
              ["class", "product-details", 4, "ngIf"],
              [1, "product-details"],
              [1, "product-details__header"],
              [1, "product-details__title"],
              [1, "product-details__subtitle"],
              [1, "product-details__group"],
              [1, "product-details__label"],
              [1, "product-details__value"],
              [1, "product-details__color", 3, "color"],
              [1, "product-details__value", "product-details__status"],
              [1, "product-details__description"],
              [1, "mat-headline-1"],
              [1, "product-details__text"],
              ["class", "product-details__details", 4, "ngIf"],
              [1, "product-details__details"],
              [1, "product-details__details-items"],
              ["class", "product-details__details-item", 4, "ngFor", "ngForOf"],
              [1, "product-details__details-item"],
            ],
            template: function (e, n) {
              1 & e && o.YNc(0, Hd, 23, 6, "div", 0),
                2 & e && o.Q6J("ngIf", n.product);
            },
            directives: [y.O5, mi, y.sg],
            styles: [
              ".product-details__header[_ngcontent-%COMP%]{margin-bottom:2rem}.product-details__title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.product-details__subtitle[_ngcontent-%COMP%]{font-size:1rem}.product-details__group[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center;margin:.5em 0}.product-details__label[_ngcontent-%COMP%]{color:#5c5d5d;font-size:1rem}.product-details__status[_ngcontent-%COMP%]{color:#3f4040;border:.063rem solid #c5c6c6;border-radius:.25rem;padding:.25rem .5rem;text-transform:uppercase}.product-details__text[_ngcontent-%COMP%]{word-break:break-word}",
            ],
          })),
          i
        );
      })();
      var de = (() => {
          return (
            ((i = de || (de = {})).Required = "required"),
            (i.Minlength = "minlength"),
            (i.Maxlength = "maxlength"),
            (i.MaxDetails = "maxDetails"),
            de
          );
          var i;
        })(),
        pt = (() => {
          return (
            ((i = pt || (pt = {})).Available = "available"),
            (i.Unavailable = "unavailable"),
            (i["Low Supply"] = "lowSupply"),
            pt
          );
          var i;
        })(),
        mt = (() => {
          return (
            ((i = mt || (mt = {})).C1 = "#0C97A1"),
            (i.C2 = "#3F4040"),
            (i.C3 = "#607d8b"),
            mt
          );
          var i;
        })();
      function Gd(i, t) {
        if (1 & i) {
          const e = o.EpF();
          o.TgZ(0, "app-color-swatch", 4),
            o.NdJ("click", function () {
              const s = o.CHM(e).$implicit;
              return o.oxw().onSelectColor(s.value);
            }),
            o.qZA();
        }
        if (2 & i) {
          const e = t.$implicit,
            n = o.oxw();
          o.ekj("active", e.value === n.colorValue), o.Q6J("color", e.value);
        }
      }
      const Ud = [[["", "message", ""]]],
        jd = ["[message]"];
      let Yd = (() => {
          class i {
            constructor() {
              (this.colorValue = ""),
                (this.onChange = (e) => {}),
                (this.onTouched = () => {}),
                (this.label = "Color"),
                (this.colors = []);
            }
            writeValue(e) {
              this.colorValue = e;
            }
            registerOnChange(e) {
              this.onChange = e;
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            onSelectColor(e) {
              (this.colorValue = e), this.onTouched(), this.onChange(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵcmp = o.Xpm({
              type: i,
              selectors: [["app-color-selector"]],
              inputs: { label: "label", colors: "colors" },
              features: [o._Bn([{ provide: U, multi: !0, useExisting: i }])],
              ngContentSelectors: jd,
              decls: 7,
              vars: 2,
              consts: [
                [1, "color-selector"],
                [
                  "fxLayout",
                  "row",
                  "fxLayoutAlign",
                  "start center",
                  "fxLayoutGap",
                  "15px",
                ],
                [
                  "class",
                  "color-selector__swatch",
                  3,
                  "active",
                  "color",
                  "click",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "color-selector__message-container"],
                [1, "color-selector__swatch", 3, "color", "click"],
              ],
              template: function (e, n) {
                1 & e &&
                  (o.F$t(Ud),
                  o.TgZ(0, "div", 0)(1, "div", 1)(2, "div"),
                  o._uU(3),
                  o.qZA(),
                  o.YNc(4, Gd, 1, 3, "app-color-swatch", 2),
                  o.qZA(),
                  o.TgZ(5, "div", 3),
                  o.Hsn(6),
                  o.qZA()()),
                  2 & e &&
                    (o.xp6(3),
                    o.Oqu(n.label),
                    o.xp6(1),
                    o.Q6J("ngForOf", n.colors));
              },
              directives: [H.xw, H.Wh, H.SQ, y.sg, mi],
              styles: [
                ".color-selector[_ngcontent-%COMP%]{margin-bottom:1rem;padding:.5rem 0}.color-selector__swatch[_ngcontent-%COMP%]{cursor:pointer}.color-selector__message-container[_ngcontent-%COMP%]{font-size:75%;margin-top:.67rem;padding:0 1rem}.color-selector[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:.063rem 0 .313rem .5rem #ddd;border-radius:50%}",
              ],
            })),
            i
          );
        })(),
        Zd = (() => {
          class i {
            constructor() {
              this.errorMessageLookup = {
                [de.Required]: () => "This is a required field",
                [de.Minlength]: (e) => `Min length ${e.requiredLength}`,
                [de.Maxlength]: (e) => `Max length ${e.requiredLength}`,
                [de.MaxDetails]: (e) => `Max ${e.requiredLength} details`,
              };
            }
            transform(e, ...n) {
              const r = Object.keys(e)[0];
              return this.errorMessageLookup[r](e[r]);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵpipe = o.Yjl({ name: "formError", type: i, pure: !0 })),
            i
          );
        })();
      function qd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error"), o._uU(1), o.ALo(2, "formError"), o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function Wd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error"), o._uU(1), o.ALo(2, "formError"), o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function $d(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error", 15),
            o._uU(1),
            o.ALo(2, "formError"),
            o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function Xd(i, t) {
        if ((1 & i && (o.TgZ(0, "mat-option", 16), o._uU(1), o.qZA()), 2 & i)) {
          const e = t.$implicit;
          o.Q6J("value", e.value), o.xp6(1), o.hij(" ", e.key, " ");
        }
      }
      function Jd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error"), o._uU(1), o.ALo(2, "formError"), o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function Kd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error"), o._uU(1), o.ALo(2, "formError"), o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function Qd(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error"), o._uU(1), o.ALo(2, "formError"), o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function eu(i, t) {
        if (1 & i) {
          const e = o.EpF();
          o.TgZ(0, "mat-form-field")(1, "mat-label"),
            o._uU(2, "Detail"),
            o.qZA(),
            o._UZ(3, "input", 17),
            o.TgZ(4, "div", 18)(5, "button", 19),
            o.NdJ("click", function () {
              const s = o.CHM(e).index;
              return o.oxw().removeDetail(s);
            }),
            o._uU(6, " X "),
            o.qZA()(),
            o.YNc(7, Qd, 3, 3, "mat-error", 2),
            o.qZA();
        }
        if (2 & i) {
          const e = t.index,
            n = o.oxw();
          o.xp6(3),
            o.Q6J("formControlName", e)("maxlength", n.FIELD_MAX_LIMITS.detail),
            o.xp6(4),
            o.Q6J("ngIf", n.details.at(e).errors);
        }
      }
      function tu(i, t) {
        if (
          (1 & i &&
            (o.TgZ(0, "mat-error"), o._uU(1), o.ALo(2, "formError"), o.qZA()),
          2 & i)
        ) {
          const e = t.ngIf;
          o.xp6(1), o.hij(" ", o.lcZ(2, 1, e), " ");
        }
      }
      function iu(i, t) {
        1 & i &&
          (o.TgZ(0, "mat-hint"), o._uU(1, "Max detail limit reached"), o.qZA());
      }
      let nu = (() => {
        class i {
          constructor(e) {
            (this.fb = e),
              (this.FIELD_MAX_LIMITS = {
                details: 4,
                title: 32,
                subtitle: 32,
                description: 300,
                detail: 75,
              }),
              (this.options = {}),
              (this.ngUnsubscribe$ = new F.x()),
              (this.colorSelect = new o.vpe()),
              (this.submitEvent = new o.vpe()),
              (this.maxDetailsValidator = (r) => (s) => {
                const a = s.value.length;
                return a > r
                  ? { maxDetails: { requiredLength: r, actualLength: a } }
                  : null;
              }),
              (this.options = this.getOptions());
            const n = this.options.colors[0];
            this.form = this.fb.group({
              title: [
                "",
                [
                  N.required,
                  N.minLength(2),
                  N.maxLength(this.FIELD_MAX_LIMITS.title),
                ],
              ],
              subtitle: [
                "",
                [
                  N.required,
                  N.minLength(2),
                  N.maxLength(this.FIELD_MAX_LIMITS.subtitle),
                ],
              ],
              status: ["", [N.required]],
              color: [n.value, [N.required]],
              description: ["", [N.required, N.maxLength(300)]],
              details: this.fb.array(
                [],
                [this.maxDetailsValidator(this.FIELD_MAX_LIMITS.details)]
              ),
            });
          }
          get details() {
            return this.form.get("details");
          }
          ngOnInit() {
            const e = this.form.get("color");
            e.valueChanges
              .pipe((0, B.R)(this.ngUnsubscribe$))
              .subscribe((n) => this.colorSelect.emit(n)),
              this.colorSelect.emit(e.value);
          }
          ngOnDestroy() {
            this.ngUnsubscribe$.next(), this.ngUnsubscribe$.complete();
          }
          getOptions() {
            return [
              { key: "statuses", types: pt },
              { key: "colors", types: mt },
            ].reduce((n, r) => {
              const { key: s, types: a } = r,
                l = Object.entries(a).map(([c, d]) => ({ key: c, value: d }));
              return Object.assign(Object.assign({}, n), { [s]: l });
            }, {});
          }
          createDetail(e = "") {
            return this.fb.control(e, [
              N.required,
              N.maxLength(this.FIELD_MAX_LIMITS.detail),
            ]);
          }
          addDetail() {
            if (this.details.value.length < this.FIELD_MAX_LIMITS.details) {
              const e = this.createDetail();
              this.details.push(e);
            }
          }
          removeDetail(e) {
            this.details.removeAt(e);
          }
          onSubmit() {
            const { value: e, valid: n } = this.form;
            this.form.markAllAsTouched(), n && this.submitEvent.emit(e);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(Fs));
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-product-form"]],
            inputs: { product: "product" },
            outputs: { colorSelect: "colorSelect", submitEvent: "submitEvent" },
            decls: 35,
            vars: 15,
            consts: [
              [1, "product-form", 3, "formGroup", "submit"],
              ["matInput", "", "formControlName", "title", 3, "maxlength"],
              [4, "ngIf"],
              ["matInput", "", "formControlName", "subtitle", 3, "maxlength"],
              ["formControlName", "color", 3, "label", "colors"],
              ["message", "", 4, "ngIf"],
              ["formControlName", "status"],
              [3, "value", 4, "ngFor", "ngForOf"],
              [
                "matInput",
                "",
                "formControlName",
                "description",
                3,
                "maxlength",
              ],
              ["formArrayName", "details", 1, "product-form__details"],
              [1, "product-form__details-header"],
              [
                "fxLayout",
                "row inline",
                "fxLayoutAlign",
                "start center",
                "fxLayoutGap",
                "5px",
              ],
              [
                "type",
                "button",
                "mat-stroked-button",
                "",
                1,
                "product-form__button-circle",
                3,
                "click",
              ],
              [4, "ngFor", "ngForOf"],
              [
                "type",
                "submit",
                "mat-stroked-button",
                "",
                1,
                "product-form__button-stroked",
              ],
              ["message", ""],
              [3, "value"],
              ["matInput", "", 3, "formControlName", "maxlength"],
              ["matSuffix", ""],
              [
                "type",
                "button",
                "mat-button",
                "",
                1,
                "product-form__button-circle",
                3,
                "click",
              ],
            ],
            template: function (e, n) {
              if (
                (1 & e &&
                  (o.TgZ(0, "form", 0),
                  o.NdJ("submit", function () {
                    return n.onSubmit();
                  }),
                  o.TgZ(1, "mat-form-field")(2, "mat-label"),
                  o._uU(3, "Title"),
                  o.qZA(),
                  o._UZ(4, "input", 1),
                  o.YNc(5, qd, 3, 3, "mat-error", 2),
                  o.qZA(),
                  o.TgZ(6, "mat-form-field")(7, "mat-label"),
                  o._uU(8, "Subtitle"),
                  o.qZA(),
                  o._UZ(9, "input", 3),
                  o.YNc(10, Wd, 3, 3, "mat-error", 2),
                  o.qZA(),
                  o.TgZ(11, "app-color-selector", 4),
                  o.YNc(12, $d, 3, 3, "mat-error", 5),
                  o.qZA(),
                  o.TgZ(13, "mat-form-field")(14, "mat-label"),
                  o._uU(15, "Status"),
                  o.qZA(),
                  o.TgZ(16, "mat-select", 6),
                  o.YNc(17, Xd, 2, 2, "mat-option", 7),
                  o.qZA(),
                  o.YNc(18, Jd, 3, 3, "mat-error", 2),
                  o.qZA(),
                  o.TgZ(19, "mat-form-field")(20, "mat-label"),
                  o._uU(21, "Description"),
                  o.qZA(),
                  o._UZ(22, "textarea", 8),
                  o.YNc(23, Kd, 3, 3, "mat-error", 2),
                  o.qZA(),
                  o.TgZ(24, "div", 9)(25, "div", 10)(26, "div", 11)(
                    27,
                    "button",
                    12
                  ),
                  o.NdJ("click", function () {
                    return n.addDetail();
                  }),
                  o._uU(28, " Add Detail "),
                  o.qZA()()(),
                  o.YNc(29, eu, 8, 3, "mat-form-field", 13),
                  o.YNc(30, tu, 3, 3, "mat-error", 2),
                  o.YNc(31, iu, 2, 0, "mat-hint", 2),
                  o.qZA(),
                  o.TgZ(32, "div")(33, "button", 14),
                  o._uU(34, " Save "),
                  o.qZA()()()),
                2 & e)
              ) {
                let r, s, a, l, c;
                o.Q6J("formGroup", n.form),
                  o.xp6(4),
                  o.Q6J("maxlength", n.FIELD_MAX_LIMITS.title),
                  o.xp6(1),
                  o.Q6J(
                    "ngIf",
                    null == (r = n.form.get("title")) ? null : r.errors
                  ),
                  o.xp6(4),
                  o.Q6J("maxlength", n.FIELD_MAX_LIMITS.subtitle),
                  o.xp6(1),
                  o.Q6J(
                    "ngIf",
                    null == (s = n.form.get("subtitle")) ? null : s.errors
                  ),
                  o.xp6(1),
                  o.Q6J("label", "Color")("colors", n.options.colors),
                  o.xp6(1),
                  o.Q6J(
                    "ngIf",
                    (null == (a = n.form.get("color")) ? null : a.touched) &&
                      (null == (a = n.form.get("color")) ? null : a.errors)
                  ),
                  o.xp6(5),
                  o.Q6J("ngForOf", n.options.statuses),
                  o.xp6(1),
                  o.Q6J(
                    "ngIf",
                    null == (l = n.form.get("status")) ? null : l.errors
                  ),
                  o.xp6(4),
                  o.Q6J("maxlength", n.FIELD_MAX_LIMITS.description),
                  o.xp6(1),
                  o.Q6J(
                    "ngIf",
                    null == (c = n.form.get("description")) ? null : c.errors
                  ),
                  o.xp6(6),
                  o.Q6J("ngForOf", n.details.controls),
                  o.xp6(1),
                  o.Q6J("ngIf", n.details.errors),
                  o.xp6(1),
                  o.Q6J(
                    "ngIf",
                    !n.details.errors &&
                      n.details.value.length === n.FIELD_MAX_LIMITS.details
                  );
              }
            },
            directives: [
              En,
              an,
              pe,
              Ol,
              ai,
              Ll,
              Ne,
              sn,
              Ht,
              jt,
              y.O5,
              bl,
              Yd,
              jc,
              y.sg,
              _o,
              Xe,
              H.xw,
              H.Wh,
              H.SQ,
              ni,
              xl,
              Ml,
            ],
            pipes: [Zd],
            styles: [
              ".product-form__details[_ngcontent-%COMP%]{margin:.5rem 0 2.5rem}.product-form__details-header[_ngcontent-%COMP%]{margin-bottom:.5rem}.product-form__button-text[_ngcontent-%COMP%]{font-size:1.8rem;position:relative;top:-.375rem}.product-form__button-stroked[_ngcontent-%COMP%]{width:100%}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
      function ou(i, t) {
        1 & i && o._UZ(0, "app-product-details", 12),
          2 & i && o.Q6J("product", t.ngIf);
      }
      function ru(i, t) {
        if (1 & i) {
          const e = o.EpF();
          o.TgZ(0, "app-product-form", 13),
            o.NdJ("colorSelect", function (r) {
              return o.CHM(e), (o.oxw().color = r);
            })("submitEvent", function (r) {
              return o.CHM(e), o.oxw().onSubmit(r);
            }),
            o.qZA();
        }
      }
      let gi = (() => {
        class i {
          constructor(e) {
            (this.store = e), (this.color = "");
          }
          ngOnInit() {
            this.product$ = this.store.pipe((0, S.Ys)(gd));
          }
          onBack() {
            this.store.dispatch(ht.go({ path: ["main", "products"] }));
          }
          onSubmit(e) {
            this.store.dispatch(cr({ product: e }));
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(o.Y36(S.yh));
          }),
          (i.ɵcmp = o.Xpm({
            type: i,
            selectors: [["app-product-item"]],
            decls: 17,
            vars: 8,
            consts: [
              [1, "product-item"],
              [1, "product-item__header"],
              [
                "mat-button",
                "",
                1,
                "product-item__button",
                "product-item__button-back",
                3,
                "click",
              ],
              [
                "fxLayout",
                "row",
                "fxLayoutAlign",
                "center center",
                "fxLayoutGap",
                "3px",
              ],
              ["src", "assets/icons/chevron-left-icon.svg", "alt", "<"],
              [
                "fxLayout",
                "row",
                "fxLayout.xs",
                "column",
                "fxLayoutGap",
                "30px",
                1,
                "product-item__content",
              ],
              [
                "fxFlex",
                "1 0 0",
                1,
                "product-item__panel",
                "product-item__panel--left",
              ],
              [1, "product-item__image-container"],
              [3, "color"],
              [
                "fxFlex",
                "1 0 0",
                1,
                "product-item__panel",
                "product-item__panel--right",
              ],
              [3, "product", 4, "ngIf", "ngIfElse"],
              ["productForm", ""],
              [3, "product"],
              [3, "colorSelect", "submitEvent"],
            ],
            template: function (e, n) {
              if (
                (1 & e &&
                  (o.TgZ(0, "div", 0)(1, "div", 1)(2, "button", 2),
                  o.NdJ("click", function () {
                    return n.onBack();
                  }),
                  o.TgZ(3, "span", 3),
                  o._UZ(4, "img", 4),
                  o.TgZ(5, "span"),
                  o._uU(6, "Back"),
                  o.qZA()()()(),
                  o.TgZ(7, "div", 5)(8, "div", 6)(9, "div", 7),
                  o._UZ(10, "app-svg", 8),
                  o.ALo(11, "async"),
                  o.qZA()(),
                  o.TgZ(12, "div", 9),
                  o.YNc(13, ou, 1, 1, "app-product-details", 10),
                  o.ALo(14, "async"),
                  o.YNc(15, ru, 1, 0, "ng-template", null, 11, o.W1O),
                  o.qZA()()()),
                2 & e)
              ) {
                const r = o.MAs(16);
                let s;
                o.xp6(7),
                  o.Q6J("@slideUp", void 0),
                  o.xp6(3),
                  o.Q6J(
                    "color",
                    (null == (s = o.lcZ(11, 4, n.product$)) ? null : s.color) ||
                      n.color
                  ),
                  o.xp6(3),
                  o.Q6J("ngIf", o.lcZ(14, 6, n.product$))("ngIfElse", r);
              }
            },
            directives: [ni, H.xw, H.Wh, H.SQ, H.yH, pr, y.O5, zd, nu],
            pipes: [y.Ov],
            styles: [
              ".product-item__header[_ngcontent-%COMP%]{margin-bottom:1rem}.product-item__button[_ngcontent-%COMP%]{vertical-align:middle}.product-item__panel--left[_ngcontent-%COMP%]{text-align:center}.product-item__image-container[_ngcontent-%COMP%]{background:#dddddd;display:inline-block;min-width:11.5rem;min-height:15rem}",
            ],
            data: { animation: [fr] },
            changeDetection: 0,
          })),
          i
        );
      })();
      const su = [
        { path: "", component: mr },
        { path: "add", component: gi },
        {
          path: ":productId",
          component: gi,
          canActivate: [
            (() => {
              class i {
                constructor(e, n) {
                  (this.router = e), (this.store = n);
                }
                canActivate(e) {
                  return this.store.pipe(
                    (0, S.Ys)(_d),
                    (0, R.U)((n) => {
                      const { productId: r } = e.params;
                      return (
                        !!n.includes(r) ||
                        this.router.createUrlTree(["main", "products"])
                      );
                    }),
                    (0, ge.q)(1)
                  );
                }
              }
              return (
                (i.ɵfac = function (e) {
                  return new (e || i)(o.LFG(ft.F0), o.LFG(S.yh));
                }),
                (i.ɵprov = o.Yz7({
                  token: i,
                  factory: i.ɵfac,
                  providedIn: "root",
                })),
                i
              );
            })(),
          ],
        },
      ];
      let au = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[ft.Bz.forChild(su)], ft.Bz] })),
            i
          );
        })(),
        lu = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({ imports: [[y.ez, Rd]] })),
            i
          );
        })(),
        cu = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = o.oAB({ type: i })),
            (i.ɵinj = o.cJS({
              providers: [
                {
                  provide: Io,
                  useValue: { appearance: "outline", hideRequiredMarker: !0 },
                },
              ],
              imports: [
                [
                  y.ez,
                  Fr,
                  zn,
                  au,
                  S.Aw.forFeature(hr, ud),
                  X.sQ.forFeature(bd),
                  Na,
                  Za,
                  rt,
                  Vl,
                  Yc,
                  Zc.o9,
                  lu,
                ],
              ],
            })),
            i
          );
        })();
    },
  },
]);
