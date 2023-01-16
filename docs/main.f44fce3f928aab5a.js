"use strict";
(self.webpackChunksample_demo_app =
  self.webpackChunksample_demo_app || []).push([
  [179],
  {
    259: (le, j, v) => {
      v.r(j), v.d(j, { MainModule: () => Y });
      var o = v(9808),
        C = v(5215),
        F = v(5e3);
      const J = [
        {
          path: "",
          component: (() => {
            class L {}
            return (
              (L.ɵfac = function (Z) {
                return new (Z || L)();
              }),
              (L.ɵcmp = F.Xpm({
                type: L,
                selectors: [["app-main"]],
                decls: 2,
                vars: 0,
                consts: [[1, "main"]],
                template: function (Z, $) {
                  1 & Z &&
                    (F.TgZ(0, "div", 0), F._UZ(1, "router-outlet"), F.qZA());
                },
                directives: [C.lC],
                styles: [
                  ".main[_ngcontent-%COMP%]{box-sizing:border-box;max-width:60rem;margin:auto;padding:2rem}",
                ],
              })),
              L
            );
          })(),
          children: [
            { path: "", redirectTo: "products", pathMatch: "full" },
            {
              path: "products",
              loadChildren: () =>
                v
                  .e(337)
                  .then(v.bind(v, 5337))
                  .then((L) => L.ProductsModule),
            },
          ],
        },
      ];
      let W = (() => {
          class L {}
          return (
            (L.ɵfac = function (Z) {
              return new (Z || L)();
            }),
            (L.ɵmod = F.oAB({ type: L })),
            (L.ɵinj = F.cJS({ imports: [[C.Bz.forChild(J)], C.Bz] })),
            L
          );
        })(),
        Y = (() => {
          class L {}
          return (
            (L.ɵfac = function (Z) {
              return new (Z || L)();
            }),
            (L.ɵmod = F.oAB({ type: L })),
            (L.ɵinj = F.cJS({ imports: [[o.ez, W]] })),
            L
          );
        })();
    },
    2273: (le, j, v) => {
      v.d(j, {
        p$: () => He,
        Sz: () => $,
        go: () => F,
        ll: () => Ze,
        OE: () => je,
      });
      var o = v(5620),
        C = (() => {
          return (
            ((Me = C || (C = {})).Go = "[Router] Go"),
            (Me.Back = "[Router] Back"),
            (Me.Forward = "[Router] Forward"),
            C
          );
          var Me;
        })();
      const F = (0, o.PH)(C.Go, (0, o.Ky)()),
        B = (0, o.PH)(C.Back),
        U = (0, o.PH)(C.Forward);
      var J = v(8505),
        W = v(4394),
        Y = v(5e3),
        L = v(5215),
        V = v(9808);
      const $ = [
        (() => {
          class Me {
            constructor(ye, ge, he) {
              (this.router = ye),
                (this.location = ge),
                (this.actions$ = he),
                (this.navigate$ = (0, W.GW)(
                  () =>
                    this.actions$.pipe(
                      (0, W.l4)(F),
                      (0, J.b)(({ path: xe, query: ue, extras: tt }) =>
                        this.router.navigate(
                          xe,
                          Object.assign({ queryParams: ue }, tt)
                        )
                      )
                    ),
                  { dispatch: !1 }
                )),
                (this.navigateBack$ = (0, W.GW)(() =>
                  this.actions$.pipe(
                    (0, W.l4)(B),
                    (0, J.b)(() => this.location.back())
                  )
                )),
                (this.navigateForward$ = (0, W.GW)(() =>
                  this.actions$.pipe(
                    (0, W.l4)(U),
                    (0, J.b)(() => this.location.forward())
                  )
                ));
            }
          }
          return (
            (Me.ɵfac = function (ye) {
              return new (ye || Me)(Y.LFG(L.F0), Y.LFG(V.Ye), Y.LFG(W.eX));
            }),
            (Me.ɵprov = Y.Yz7({ token: Me, factory: Me.ɵfac })),
            Me
          );
        })(),
      ];
      var Oe = v(2182);
      class He {
        serialize(ie) {
          let ye = ie.root;
          for (; ye.firstChild; ) ye = ye.firstChild;
          const {
              url: ge,
              root: { queryParams: he },
            } = ie,
            { params: xe } = ye;
          return { url: ge, params: xe, queryParams: he };
        }
      }
      const Ze = { router: Oe.mg },
        Ge = (0, o.ZF)("router"),
        Se = (0, o.P1)(Ge, (Me) => Me.state),
        oe = (0, o.P1)(Se, (Me) => Me.params),
        je = (Me) => (0, o.P1)(oe, (ie) => ie && ie[Me]);
      (0, o.P1)(Se, (Me) => Me.queryParams);
    },
    73: (le, j, v) => {
      var o = v(2313),
        C = v(5e3),
        F = v(6360),
        B = v(9764),
        U = v(5620),
        J = v(4394),
        W = v(2182),
        Y = v(9565),
        L = v(2273),
        V = v(5215);
      let Z = (() => {
          class Me {}
          return (
            (Me.ɵfac = function (ye) {
              return new (ye || Me)();
            }),
            (Me.ɵcmp = C.Xpm({
              type: Me,
              selectors: [["app-header"]],
              decls: 1,
              vars: 0,
              consts: [[1, "header"]],
              template: function (ye, ge) {
                1 & ye && C._UZ(0, "header", 0);
              },
              styles: [
                ".header[_ngcontent-%COMP%]{box-shadow:0 .188rem .375rem #ddd;box-sizing:border-box;height:3.75rem;padding:1rem;position:relative;z-index:10}",
              ],
            })),
            Me
          );
        })(),
        $ = (() => {
          class Me {
            constructor() {
              this.copyright = "\xa9 2022 Ianacodev";
            }
          }
          return (
            (Me.ɵfac = function (ye) {
              return new (ye || Me)();
            }),
            (Me.ɵcmp = C.Xpm({
              type: Me,
              selectors: [["app-footer"]],
              decls: 3,
              vars: 1,
              consts: [
                [1, "footer"],
                [1, "footer__copyright"],
              ],
              template: function (ye, ge) {
                1 & ye &&
                  (C.TgZ(0, "footer", 0)(1, "div", 1), C._uU(2), C.qZA()()),
                  2 & ye && (C.xp6(2), C.Oqu(ge.copyright));
              },
              styles: [
                ".footer[_ngcontent-%COMP%]{border-top:.063rem solid #dddddd;min-height:5rem;padding:1rem}",
              ],
            })),
            Me
          );
        })();
      const Te = function () {
        return ["/main", "products"];
      };
      const Pe = [
        { path: "", redirectTo: "main", pathMatch: "full" },
        {
          path: "main",
          loadChildren: () =>
            Promise.resolve()
              .then(v.bind(v, 259))
              .then((Me) => Me.MainModule),
        },
        {
          path: "**",
          component: (() => {
            class Me {}
            return (
              (Me.ɵfac = function (ye) {
                return new (ye || Me)();
              }),
              (Me.ɵcmp = C.Xpm({
                type: Me,
                selectors: [["app-page-not-found"]],
                decls: 5,
                vars: 2,
                consts: [
                  [1, "page-not-found"],
                  [1, "mat-headline-1"],
                  [3, "routerLink"],
                ],
                template: function (ye, ge) {
                  1 & ye &&
                    (C.TgZ(0, "div", 0)(1, "p", 1),
                    C._uU(2, "Oops, page not found."),
                    C.qZA(),
                    C.TgZ(3, "a", 2),
                    C._uU(4, "Back to products"),
                    C.qZA()()),
                    2 & ye && (C.xp6(3), C.Q6J("routerLink", C.DdM(1, Te)));
                },
                directives: [V.yS],
                styles: [
                  ".page-not-found[_ngcontent-%COMP%]{padding:2rem;text-align:center}",
                ],
              })),
              Me
            );
          })(),
        },
      ];
      let He = (() => {
        class Me {}
        return (
          (Me.ɵfac = function (ye) {
            return new (ye || Me)();
          }),
          (Me.ɵmod = C.oAB({ type: Me })),
          (Me.ɵinj = C.cJS({
            imports: [
              [V.Bz.forRoot(Pe, { scrollPositionRestoration: "enabled" })],
              V.Bz,
            ],
          })),
          Me
        );
      })();
      var Ze = v(9808);
      let Ge = (() => {
        class Me {}
        return (
          (Me.ɵfac = function (ye) {
            return new (ye || Me)();
          }),
          (Me.ɵmod = C.oAB({ type: Me })),
          (Me.ɵinj = C.cJS({ imports: [[Ze.ez, V.Bz]] })),
          Me
        );
      })();
      var Se = v(259),
        oe = v(7093);
      let je = (() => {
        class Me {}
        return (
          (Me.ɵfac = function (ye) {
            return new (ye || Me)();
          }),
          (Me.ɵcmp = C.Xpm({
            type: Me,
            selectors: [["app-root"]],
            decls: 5,
            vars: 0,
            consts: [
              ["fxLayout", "column", 1, "app"],
              ["fxFlex", "1 0 0", "role", "main", 1, "app__content"],
            ],
            template: function (ye, ge) {
              1 & ye &&
                (C.TgZ(0, "div", 0),
                C._UZ(1, "app-header"),
                C.TgZ(2, "main", 1),
                C._UZ(3, "router-outlet"),
                C.qZA(),
                C._UZ(4, "app-footer"),
                C.qZA());
            },
            directives: [oe.xw, Z, oe.yH, V.lC, $],
            styles: [
              ".app[_ngcontent-%COMP%]{height:100%}.app__content[_ngcontent-%COMP%]{padding:1rem}",
            ],
          })),
          Me
        );
      })();
      let et = (() => {
        class Me {}
        return (
          (Me.ɵfac = function (ye) {
            return new (ye || Me)();
          }),
          (Me.ɵmod = C.oAB({ type: Me, bootstrap: [je] })),
          (Me.ɵinj = C.cJS({
            providers: [],
            imports: [
              [
                o.b2,
                F.PW,
                He,
                U.Aw.forRoot(L.ll),
                J.sQ.forRoot(L.Sz),
                W.Qi.forRoot({ serializer: L.p$ }),
                Y.FT.instrument({ maxAge: 25, logOnly: true, autoPause: !0 }),
                B.o9,
                Ge,
                Se.MainModule,
              ],
            ],
          })),
          Me
        );
      })();
      (0, C.G48)(),
        o
          .q6()
          .bootstrapModule(et)
          .catch((Me) => console.error(Me));
    },
    1135: (le, j, v) => {
      v.d(j, { X: () => C });
      var o = v(7579);
      class C extends o.x {
        constructor(B) {
          super(), (this._value = B);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(B) {
          const U = super._subscribe(B);
          return !U.closed && B.next(this._value), U;
        }
        getValue() {
          const { hasError: B, thrownError: U, _value: J } = this;
          if (B) throw U;
          return this._throwIfClosed(), J;
        }
        next(B) {
          super.next((this._value = B));
        }
      }
    },
    9751: (le, j, v) => {
      v.d(j, { y: () => Y });
      var o = v(930),
        C = v(727),
        F = v(8822),
        B = v(9635),
        U = v(2416),
        J = v(576),
        W = v(2806);
      let Y = (() => {
        class $ {
          constructor(Te) {
            Te && (this._subscribe = Te);
          }
          lift(Te) {
            const Ae = new $();
            return (Ae.source = this), (Ae.operator = Te), Ae;
          }
          subscribe(Te, Ae, Je) {
            const Pe = (function Z($) {
              return (
                ($ && $ instanceof o.Lv) ||
                ((function V($) {
                  return (
                    $ &&
                    (0, J.m)($.next) &&
                    (0, J.m)($.error) &&
                    (0, J.m)($.complete)
                  );
                })($) &&
                  (0, C.Nn)($))
              );
            })(Te)
              ? Te
              : new o.Hp(Te, Ae, Je);
            return (
              (0, W.x)(() => {
                const { operator: He, source: Ze } = this;
                Pe.add(
                  He
                    ? He.call(Pe, Ze)
                    : Ze
                    ? this._subscribe(Pe)
                    : this._trySubscribe(Pe)
                );
              }),
              Pe
            );
          }
          _trySubscribe(Te) {
            try {
              return this._subscribe(Te);
            } catch (Ae) {
              Te.error(Ae);
            }
          }
          forEach(Te, Ae) {
            return new (Ae = L(Ae))((Je, Pe) => {
              const He = new o.Hp({
                next: (Ze) => {
                  try {
                    Te(Ze);
                  } catch (Ge) {
                    Pe(Ge), He.unsubscribe();
                  }
                },
                error: Pe,
                complete: Je,
              });
              this.subscribe(He);
            });
          }
          _subscribe(Te) {
            var Ae;
            return null === (Ae = this.source) || void 0 === Ae
              ? void 0
              : Ae.subscribe(Te);
          }
          [F.L]() {
            return this;
          }
          pipe(...Te) {
            return (0, B.U)(Te)(this);
          }
          toPromise(Te) {
            return new (Te = L(Te))((Ae, Je) => {
              let Pe;
              this.subscribe(
                (He) => (Pe = He),
                (He) => Je(He),
                () => Ae(Pe)
              );
            });
          }
        }
        return ($.create = (Oe) => new $(Oe)), $;
      })();
      function L($) {
        var Oe;
        return null !== (Oe = null != $ ? $ : U.v.Promise) && void 0 !== Oe
          ? Oe
          : Promise;
      }
    },
    4707: (le, j, v) => {
      v.d(j, { t: () => F });
      var o = v(7579),
        C = v(6063);
      class F extends o.x {
        constructor(U = 1 / 0, J = 1 / 0, W = C.l) {
          super(),
            (this._bufferSize = U),
            (this._windowTime = J),
            (this._timestampProvider = W),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = J === 1 / 0),
            (this._bufferSize = Math.max(1, U)),
            (this._windowTime = Math.max(1, J));
        }
        next(U) {
          const {
            isStopped: J,
            _buffer: W,
            _infiniteTimeWindow: Y,
            _timestampProvider: L,
            _windowTime: V,
          } = this;
          J || (W.push(U), !Y && W.push(L.now() + V)),
            this._trimBuffer(),
            super.next(U);
        }
        _subscribe(U) {
          this._throwIfClosed(), this._trimBuffer();
          const J = this._innerSubscribe(U),
            { _infiniteTimeWindow: W, _buffer: Y } = this,
            L = Y.slice();
          for (let V = 0; V < L.length && !U.closed; V += W ? 1 : 2)
            U.next(L[V]);
          return this._checkFinalizedStatuses(U), J;
        }
        _trimBuffer() {
          const {
              _bufferSize: U,
              _timestampProvider: J,
              _buffer: W,
              _infiniteTimeWindow: Y,
            } = this,
            L = (Y ? 1 : 2) * U;
          if ((U < 1 / 0 && L < W.length && W.splice(0, W.length - L), !Y)) {
            const V = J.now();
            let Z = 0;
            for (let $ = 1; $ < W.length && W[$] <= V; $ += 2) Z = $;
            Z && W.splice(0, Z + 1);
          }
        }
      }
    },
    7579: (le, j, v) => {
      v.d(j, { x: () => W });
      var o = v(9751),
        C = v(727);
      const B = (0, v(3888).d)(
        (L) =>
          function () {
            L(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var U = v(8737),
        J = v(2806);
      let W = (() => {
        class L extends o.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(Z) {
            const $ = new Y(this, this);
            return ($.operator = Z), $;
          }
          _throwIfClosed() {
            if (this.closed) throw new B();
          }
          next(Z) {
            (0, J.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const $ of this.currentObservers) $.next(Z);
              }
            });
          }
          error(Z) {
            (0, J.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = Z);
                const { observers: $ } = this;
                for (; $.length; ) $.shift().error(Z);
              }
            });
          }
          complete() {
            (0, J.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: Z } = this;
                for (; Z.length; ) Z.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var Z;
            return (
              (null === (Z = this.observers) || void 0 === Z
                ? void 0
                : Z.length) > 0
            );
          }
          _trySubscribe(Z) {
            return this._throwIfClosed(), super._trySubscribe(Z);
          }
          _subscribe(Z) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(Z),
              this._innerSubscribe(Z)
            );
          }
          _innerSubscribe(Z) {
            const { hasError: $, isStopped: Oe, observers: Te } = this;
            return $ || Oe
              ? C.Lc
              : ((this.currentObservers = null),
                Te.push(Z),
                new C.w0(() => {
                  (this.currentObservers = null), (0, U.P)(Te, Z);
                }));
          }
          _checkFinalizedStatuses(Z) {
            const { hasError: $, thrownError: Oe, isStopped: Te } = this;
            $ ? Z.error(Oe) : Te && Z.complete();
          }
          asObservable() {
            const Z = new o.y();
            return (Z.source = this), Z;
          }
        }
        return (L.create = (V, Z) => new Y(V, Z)), L;
      })();
      class Y extends W {
        constructor(V, Z) {
          super(), (this.destination = V), (this.source = Z);
        }
        next(V) {
          var Z, $;
          null ===
            ($ =
              null === (Z = this.destination) || void 0 === Z
                ? void 0
                : Z.next) ||
            void 0 === $ ||
            $.call(Z, V);
        }
        error(V) {
          var Z, $;
          null ===
            ($ =
              null === (Z = this.destination) || void 0 === Z
                ? void 0
                : Z.error) ||
            void 0 === $ ||
            $.call(Z, V);
        }
        complete() {
          var V, Z;
          null ===
            (Z =
              null === (V = this.destination) || void 0 === V
                ? void 0
                : V.complete) ||
            void 0 === Z ||
            Z.call(V);
        }
        _subscribe(V) {
          var Z, $;
          return null !==
            ($ =
              null === (Z = this.source) || void 0 === Z
                ? void 0
                : Z.subscribe(V)) && void 0 !== $
            ? $
            : C.Lc;
        }
      }
    },
    930: (le, j, v) => {
      v.d(j, { Hp: () => Je, Lv: () => $ });
      var o = v(576),
        C = v(727),
        F = v(2416),
        B = v(7849),
        U = v(5032);
      const J = L("C", void 0, void 0);
      function L(Se, oe, je) {
        return { kind: Se, value: oe, error: je };
      }
      var V = v(3410),
        Z = v(2806);
      class $ extends C.w0 {
        constructor(oe) {
          super(),
            (this.isStopped = !1),
            oe
              ? ((this.destination = oe), (0, C.Nn)(oe) && oe.add(this))
              : (this.destination = Ge);
        }
        static create(oe, je, Ve) {
          return new Je(oe, je, Ve);
        }
        next(oe) {
          this.isStopped
            ? Ze(
                (function Y(Se) {
                  return L("N", Se, void 0);
                })(oe),
                this
              )
            : this._next(oe);
        }
        error(oe) {
          this.isStopped
            ? Ze(
                (function W(Se) {
                  return L("E", void 0, Se);
                })(oe),
                this
              )
            : ((this.isStopped = !0), this._error(oe));
        }
        complete() {
          this.isStopped
            ? Ze(J, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(oe) {
          this.destination.next(oe);
        }
        _error(oe) {
          try {
            this.destination.error(oe);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Oe = Function.prototype.bind;
      function Te(Se, oe) {
        return Oe.call(Se, oe);
      }
      class Ae {
        constructor(oe) {
          this.partialObserver = oe;
        }
        next(oe) {
          const { partialObserver: je } = this;
          if (je.next)
            try {
              je.next(oe);
            } catch (Ve) {
              Pe(Ve);
            }
        }
        error(oe) {
          const { partialObserver: je } = this;
          if (je.error)
            try {
              je.error(oe);
            } catch (Ve) {
              Pe(Ve);
            }
          else Pe(oe);
        }
        complete() {
          const { partialObserver: oe } = this;
          if (oe.complete)
            try {
              oe.complete();
            } catch (je) {
              Pe(je);
            }
        }
      }
      class Je extends $ {
        constructor(oe, je, Ve) {
          let et;
          if ((super(), (0, o.m)(oe) || !oe))
            et = {
              next: null != oe ? oe : void 0,
              error: null != je ? je : void 0,
              complete: null != Ve ? Ve : void 0,
            };
          else {
            let Me;
            this && F.v.useDeprecatedNextContext
              ? ((Me = Object.create(oe)),
                (Me.unsubscribe = () => this.unsubscribe()),
                (et = {
                  next: oe.next && Te(oe.next, Me),
                  error: oe.error && Te(oe.error, Me),
                  complete: oe.complete && Te(oe.complete, Me),
                }))
              : (et = oe);
          }
          this.destination = new Ae(et);
        }
      }
      function Pe(Se) {
        F.v.useDeprecatedSynchronousErrorHandling ? (0, Z.O)(Se) : (0, B.h)(Se);
      }
      function Ze(Se, oe) {
        const { onStoppedNotification: je } = F.v;
        je && V.z.setTimeout(() => je(Se, oe));
      }
      const Ge = {
        closed: !0,
        next: U.Z,
        error: function He(Se) {
          throw Se;
        },
        complete: U.Z,
      };
    },
    727: (le, j, v) => {
      v.d(j, { Lc: () => J, w0: () => U, Nn: () => W });
      var o = v(576);
      const F = (0, v(3888).d)(
        (L) =>
          function (Z) {
            L(this),
              (this.message = Z
                ? `${Z.length} errors occurred during unsubscription:\n${Z.map(
                    ($, Oe) => `${Oe + 1}) ${$.toString()}`
                  ).join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = Z);
          }
      );
      var B = v(8737);
      class U {
        constructor(V) {
          (this.initialTeardown = V),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let V;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: Z } = this;
            if (Z)
              if (((this._parentage = null), Array.isArray(Z)))
                for (const Te of Z) Te.remove(this);
              else Z.remove(this);
            const { initialTeardown: $ } = this;
            if ((0, o.m)($))
              try {
                $();
              } catch (Te) {
                V = Te instanceof F ? Te.errors : [Te];
              }
            const { _finalizers: Oe } = this;
            if (Oe) {
              this._finalizers = null;
              for (const Te of Oe)
                try {
                  Y(Te);
                } catch (Ae) {
                  (V = null != V ? V : []),
                    Ae instanceof F ? (V = [...V, ...Ae.errors]) : V.push(Ae);
                }
            }
            if (V) throw new F(V);
          }
        }
        add(V) {
          var Z;
          if (V && V !== this)
            if (this.closed) Y(V);
            else {
              if (V instanceof U) {
                if (V.closed || V._hasParent(this)) return;
                V._addParent(this);
              }
              (this._finalizers =
                null !== (Z = this._finalizers) && void 0 !== Z ? Z : []).push(
                V
              );
            }
        }
        _hasParent(V) {
          const { _parentage: Z } = this;
          return Z === V || (Array.isArray(Z) && Z.includes(V));
        }
        _addParent(V) {
          const { _parentage: Z } = this;
          this._parentage = Array.isArray(Z) ? (Z.push(V), Z) : Z ? [Z, V] : V;
        }
        _removeParent(V) {
          const { _parentage: Z } = this;
          Z === V
            ? (this._parentage = null)
            : Array.isArray(Z) && (0, B.P)(Z, V);
        }
        remove(V) {
          const { _finalizers: Z } = this;
          Z && (0, B.P)(Z, V), V instanceof U && V._removeParent(this);
        }
      }
      U.EMPTY = (() => {
        const L = new U();
        return (L.closed = !0), L;
      })();
      const J = U.EMPTY;
      function W(L) {
        return (
          L instanceof U ||
          (L &&
            "closed" in L &&
            (0, o.m)(L.remove) &&
            (0, o.m)(L.add) &&
            (0, o.m)(L.unsubscribe))
        );
      }
      function Y(L) {
        (0, o.m)(L) ? L() : L.unsubscribe();
      }
    },
    2416: (le, j, v) => {
      v.d(j, { v: () => o });
      const o = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    7272: (le, j, v) => {
      v.d(j, { z: () => U });
      var o = v(8189),
        F = v(3269),
        B = v(457);
      function U(...J) {
        return (function C() {
          return (0, o.J)(1);
        })()((0, B.D)(J, (0, F.yG)(J)));
      }
    },
    9770: (le, j, v) => {
      v.d(j, { P: () => F });
      var o = v(9751),
        C = v(8421);
      function F(B) {
        return new o.y((U) => {
          (0, C.Xf)(B()).subscribe(U);
        });
      }
    },
    515: (le, j, v) => {
      v.d(j, { E: () => C });
      const C = new (v(9751).y)((U) => U.complete());
    },
    457: (le, j, v) => {
      v.d(j, { D: () => je });
      var o = v(8421),
        C = v(5363),
        F = v(4482);
      function B(Ve, et = 0) {
        return (0, F.e)((Me, ie) => {
          ie.add(Ve.schedule(() => Me.subscribe(ie), et));
        });
      }
      var W = v(9751),
        L = v(2202),
        V = v(576),
        Z = v(9672);
      function Oe(Ve, et) {
        if (!Ve) throw new Error("Iterable cannot be null");
        return new W.y((Me) => {
          (0, Z.f)(Me, et, () => {
            const ie = Ve[Symbol.asyncIterator]();
            (0, Z.f)(
              Me,
              et,
              () => {
                ie.next().then((ye) => {
                  ye.done ? Me.complete() : Me.next(ye.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Te = v(3670),
        Ae = v(8239),
        Je = v(1144),
        Pe = v(6495),
        He = v(2206),
        Ze = v(4532),
        Ge = v(3260);
      function je(Ve, et) {
        return et
          ? (function oe(Ve, et) {
              if (null != Ve) {
                if ((0, Te.c)(Ve))
                  return (function U(Ve, et) {
                    return (0, o.Xf)(Ve).pipe(B(et), (0, C.Q)(et));
                  })(Ve, et);
                if ((0, Je.z)(Ve))
                  return (function Y(Ve, et) {
                    return new W.y((Me) => {
                      let ie = 0;
                      return et.schedule(function () {
                        ie === Ve.length
                          ? Me.complete()
                          : (Me.next(Ve[ie++]), Me.closed || this.schedule());
                      });
                    });
                  })(Ve, et);
                if ((0, Ae.t)(Ve))
                  return (function J(Ve, et) {
                    return (0, o.Xf)(Ve).pipe(B(et), (0, C.Q)(et));
                  })(Ve, et);
                if ((0, He.D)(Ve)) return Oe(Ve, et);
                if ((0, Pe.T)(Ve))
                  return (function $(Ve, et) {
                    return new W.y((Me) => {
                      let ie;
                      return (
                        (0, Z.f)(Me, et, () => {
                          (ie = Ve[L.h]()),
                            (0, Z.f)(
                              Me,
                              et,
                              () => {
                                let ye, ge;
                                try {
                                  ({ value: ye, done: ge } = ie.next());
                                } catch (he) {
                                  return void Me.error(he);
                                }
                                ge ? Me.complete() : Me.next(ye);
                              },
                              0,
                              !0
                            );
                        }),
                        () =>
                          (0, V.m)(null == ie ? void 0 : ie.return) &&
                          ie.return()
                      );
                    });
                  })(Ve, et);
                if ((0, Ge.L)(Ve))
                  return (function Se(Ve, et) {
                    return Oe((0, Ge.Q)(Ve), et);
                  })(Ve, et);
              }
              throw (0, Ze.z)(Ve);
            })(Ve, et)
          : (0, o.Xf)(Ve);
      }
    },
    8421: (le, j, v) => {
      v.d(j, { Xf: () => Oe });
      var o = v(655),
        C = v(1144),
        F = v(8239),
        B = v(9751),
        U = v(3670),
        J = v(2206),
        W = v(4532),
        Y = v(6495),
        L = v(3260),
        V = v(576),
        Z = v(7849),
        $ = v(8822);
      function Oe(Se) {
        if (Se instanceof B.y) return Se;
        if (null != Se) {
          if ((0, U.c)(Se))
            return (function Te(Se) {
              return new B.y((oe) => {
                const je = Se[$.L]();
                if ((0, V.m)(je.subscribe)) return je.subscribe(oe);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(Se);
          if ((0, C.z)(Se))
            return (function Ae(Se) {
              return new B.y((oe) => {
                for (let je = 0; je < Se.length && !oe.closed; je++)
                  oe.next(Se[je]);
                oe.complete();
              });
            })(Se);
          if ((0, F.t)(Se))
            return (function Je(Se) {
              return new B.y((oe) => {
                Se.then(
                  (je) => {
                    oe.closed || (oe.next(je), oe.complete());
                  },
                  (je) => oe.error(je)
                ).then(null, Z.h);
              });
            })(Se);
          if ((0, J.D)(Se)) return He(Se);
          if ((0, Y.T)(Se))
            return (function Pe(Se) {
              return new B.y((oe) => {
                for (const je of Se) if ((oe.next(je), oe.closed)) return;
                oe.complete();
              });
            })(Se);
          if ((0, L.L)(Se))
            return (function Ze(Se) {
              return He((0, L.Q)(Se));
            })(Se);
        }
        throw (0, W.z)(Se);
      }
      function He(Se) {
        return new B.y((oe) => {
          (function Ge(Se, oe) {
            var je, Ve, et, Me;
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                for (je = (0, o.KL)(Se); !(Ve = yield je.next()).done; )
                  if ((oe.next(Ve.value), oe.closed)) return;
              } catch (ie) {
                et = { error: ie };
              } finally {
                try {
                  Ve && !Ve.done && (Me = je.return) && (yield Me.call(je));
                } finally {
                  if (et) throw et.error;
                }
              }
              oe.complete();
            });
          })(Se, oe).catch((je) => oe.error(je));
        });
      }
    },
    6451: (le, j, v) => {
      v.d(j, { T: () => J });
      var o = v(8189),
        C = v(8421),
        F = v(515),
        B = v(3269),
        U = v(457);
      function J(...W) {
        const Y = (0, B.yG)(W),
          L = (0, B._6)(W, 1 / 0),
          V = W;
        return V.length
          ? 1 === V.length
            ? (0, C.Xf)(V[0])
            : (0, o.J)(L)((0, U.D)(V, Y))
          : F.E;
      }
    },
    9646: (le, j, v) => {
      v.d(j, { of: () => F });
      var o = v(3269),
        C = v(457);
      function F(...B) {
        const U = (0, o.yG)(B);
        return (0, C.D)(B, U);
      }
    },
    2843: (le, j, v) => {
      v.d(j, { _: () => F });
      var o = v(9751),
        C = v(576);
      function F(B, U) {
        const J = (0, C.m)(B) ? B : () => B,
          W = (Y) => Y.error(J());
        return new o.y(U ? (Y) => U.schedule(W, 0, Y) : W);
      }
    },
    5403: (le, j, v) => {
      v.d(j, { x: () => C, Q: () => F });
      var o = v(930);
      function C(B, U, J, W, Y) {
        return new F(B, U, J, W, Y);
      }
      class F extends o.Lv {
        constructor(U, J, W, Y, L, V) {
          super(U),
            (this.onFinalize = L),
            (this.shouldUnsubscribe = V),
            (this._next = J
              ? function (Z) {
                  try {
                    J(Z);
                  } catch ($) {
                    U.error($);
                  }
                }
              : super._next),
            (this._error = Y
              ? function (Z) {
                  try {
                    Y(Z);
                  } catch ($) {
                    U.error($);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = W
              ? function () {
                  try {
                    W();
                  } catch (Z) {
                    U.error(Z);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var U;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: J } = this;
            super.unsubscribe(),
              !J &&
                (null === (U = this.onFinalize) ||
                  void 0 === U ||
                  U.call(this));
          }
        }
      }
    },
    262: (le, j, v) => {
      v.d(j, { K: () => B });
      var o = v(8421),
        C = v(5403),
        F = v(4482);
      function B(U) {
        return (0, F.e)((J, W) => {
          let V,
            Y = null,
            L = !1;
          (Y = J.subscribe(
            (0, C.x)(W, void 0, void 0, (Z) => {
              (V = (0, o.Xf)(U(Z, B(U)(J)))),
                Y ? (Y.unsubscribe(), (Y = null), V.subscribe(W)) : (L = !0);
            })
          )),
            L && (Y.unsubscribe(), (Y = null), V.subscribe(W));
        });
      }
    },
    4351: (le, j, v) => {
      v.d(j, { b: () => F });
      var o = v(5577),
        C = v(576);
      function F(B, U) {
        return (0, C.m)(U) ? (0, o.z)(B, U, 1) : (0, o.z)(B, 1);
      }
    },
    8372: (le, j, v) => {
      v.d(j, { b: () => B });
      var o = v(4986),
        C = v(4482),
        F = v(5403);
      function B(U, J = o.z) {
        return (0, C.e)((W, Y) => {
          let L = null,
            V = null,
            Z = null;
          const $ = () => {
            if (L) {
              L.unsubscribe(), (L = null);
              const Te = V;
              (V = null), Y.next(Te);
            }
          };
          function Oe() {
            const Te = Z + U,
              Ae = J.now();
            if (Ae < Te)
              return (L = this.schedule(void 0, Te - Ae)), void Y.add(L);
            $();
          }
          W.subscribe(
            (0, F.x)(
              Y,
              (Te) => {
                (V = Te),
                  (Z = J.now()),
                  L || ((L = J.schedule(Oe, U)), Y.add(L));
              },
              () => {
                $(), Y.complete();
              },
              void 0,
              () => {
                V = L = null;
              }
            )
          );
        });
      }
    },
    1884: (le, j, v) => {
      v.d(j, { x: () => B });
      var o = v(4671),
        C = v(4482),
        F = v(5403);
      function B(J, W = o.y) {
        return (
          (J = null != J ? J : U),
          (0, C.e)((Y, L) => {
            let V,
              Z = !0;
            Y.subscribe(
              (0, F.x)(L, ($) => {
                const Oe = W($);
                (Z || !J(V, Oe)) && ((Z = !1), (V = Oe), L.next($));
              })
            );
          })
        );
      }
      function U(J, W) {
        return J === W;
      }
    },
    9300: (le, j, v) => {
      v.d(j, { h: () => F });
      var o = v(4482),
        C = v(5403);
      function F(B, U) {
        return (0, o.e)((J, W) => {
          let Y = 0;
          J.subscribe((0, C.x)(W, (L) => B.call(U, L, Y++) && W.next(L)));
        });
      }
    },
    8746: (le, j, v) => {
      v.d(j, { x: () => C });
      var o = v(4482);
      function C(F) {
        return (0, o.e)((B, U) => {
          try {
            B.subscribe(U);
          } finally {
            U.add(F);
          }
        });
      }
    },
    4004: (le, j, v) => {
      v.d(j, { U: () => F });
      var o = v(4482),
        C = v(5403);
      function F(B, U) {
        return (0, o.e)((J, W) => {
          let Y = 0;
          J.subscribe(
            (0, C.x)(W, (L) => {
              W.next(B.call(U, L, Y++));
            })
          );
        });
      }
    },
    8189: (le, j, v) => {
      v.d(j, { J: () => F });
      var o = v(5577),
        C = v(4671);
      function F(B = 1 / 0) {
        return (0, o.z)(C.y, B);
      }
    },
    5577: (le, j, v) => {
      v.d(j, { z: () => Y });
      var o = v(4004),
        C = v(8421),
        F = v(4482),
        B = v(9672),
        U = v(5403),
        W = v(576);
      function Y(L, V, Z = 1 / 0) {
        return (0, W.m)(V)
          ? Y(
              ($, Oe) =>
                (0, o.U)((Te, Ae) => V($, Te, Oe, Ae))((0, C.Xf)(L($, Oe))),
              Z
            )
          : ("number" == typeof V && (Z = V),
            (0, F.e)(($, Oe) =>
              (function J(L, V, Z, $, Oe, Te, Ae, Je) {
                const Pe = [];
                let He = 0,
                  Ze = 0,
                  Ge = !1;
                const Se = () => {
                    Ge && !Pe.length && !He && V.complete();
                  },
                  oe = (Ve) => (He < $ ? je(Ve) : Pe.push(Ve)),
                  je = (Ve) => {
                    Te && V.next(Ve), He++;
                    let et = !1;
                    (0, C.Xf)(Z(Ve, Ze++)).subscribe(
                      (0, U.x)(
                        V,
                        (Me) => {
                          null == Oe || Oe(Me), Te ? oe(Me) : V.next(Me);
                        },
                        () => {
                          et = !0;
                        },
                        void 0,
                        () => {
                          if (et)
                            try {
                              for (He--; Pe.length && He < $; ) {
                                const Me = Pe.shift();
                                Ae ? (0, B.f)(V, Ae, () => je(Me)) : je(Me);
                              }
                              Se();
                            } catch (Me) {
                              V.error(Me);
                            }
                        }
                      )
                    );
                  };
                return (
                  L.subscribe(
                    (0, U.x)(V, oe, () => {
                      (Ge = !0), Se();
                    })
                  ),
                  () => {
                    null == Je || Je();
                  }
                );
              })($, Oe, L, Z)
            ));
      }
    },
    5363: (le, j, v) => {
      v.d(j, { Q: () => B });
      var o = v(9672),
        C = v(4482),
        F = v(5403);
      function B(U, J = 0) {
        return (0, C.e)((W, Y) => {
          W.subscribe(
            (0, F.x)(
              Y,
              (L) => (0, o.f)(Y, U, () => Y.next(L), J),
              () => (0, o.f)(Y, U, () => Y.complete(), J),
              (L) => (0, o.f)(Y, U, () => Y.error(L), J)
            )
          );
        });
      }
    },
    5026: (le, j, v) => {
      v.d(j, { R: () => B });
      var o = v(4482),
        C = v(5403);
      function F(U, J, W, Y, L) {
        return (V, Z) => {
          let $ = W,
            Oe = J,
            Te = 0;
          V.subscribe(
            (0, C.x)(
              Z,
              (Ae) => {
                const Je = Te++;
                (Oe = $ ? U(Oe, Ae, Je) : (($ = !0), Ae)), Y && Z.next(Oe);
              },
              L &&
                (() => {
                  $ && Z.next(Oe), Z.complete();
                })
            )
          );
        };
      }
      function B(U, J) {
        return (0, o.e)(F(U, J, arguments.length >= 2, !0));
      }
    },
    3099: (le, j, v) => {
      v.d(j, { B: () => J });
      var o = v(457),
        C = v(5698),
        F = v(7579),
        B = v(930),
        U = v(4482);
      function J(Y = {}) {
        const {
          connector: L = () => new F.x(),
          resetOnError: V = !0,
          resetOnComplete: Z = !0,
          resetOnRefCountZero: $ = !0,
        } = Y;
        return (Oe) => {
          let Te = null,
            Ae = null,
            Je = null,
            Pe = 0,
            He = !1,
            Ze = !1;
          const Ge = () => {
              null == Ae || Ae.unsubscribe(), (Ae = null);
            },
            Se = () => {
              Ge(), (Te = Je = null), (He = Ze = !1);
            },
            oe = () => {
              const je = Te;
              Se(), null == je || je.unsubscribe();
            };
          return (0, U.e)((je, Ve) => {
            Pe++, !Ze && !He && Ge();
            const et = (Je = null != Je ? Je : L());
            Ve.add(() => {
              Pe--, 0 === Pe && !Ze && !He && (Ae = W(oe, $));
            }),
              et.subscribe(Ve),
              Te ||
                ((Te = new B.Hp({
                  next: (Me) => et.next(Me),
                  error: (Me) => {
                    (Ze = !0), Ge(), (Ae = W(Se, V, Me)), et.error(Me);
                  },
                  complete: () => {
                    (He = !0), Ge(), (Ae = W(Se, Z)), et.complete();
                  },
                })),
                (0, o.D)(je).subscribe(Te));
          })(Oe);
        };
      }
      function W(Y, L, ...V) {
        return !0 === L
          ? (Y(), null)
          : !1 === L
          ? null
          : L(...V)
              .pipe((0, C.q)(1))
              .subscribe(() => Y());
      }
    },
    5684: (le, j, v) => {
      v.d(j, { T: () => C });
      var o = v(9300);
      function C(F) {
        return (0, o.h)((B, U) => F <= U);
      }
    },
    8675: (le, j, v) => {
      v.d(j, { O: () => B });
      var o = v(7272),
        C = v(3269),
        F = v(4482);
      function B(...U) {
        const J = (0, C.yG)(U);
        return (0, F.e)((W, Y) => {
          (J ? (0, o.z)(U, W, J) : (0, o.z)(U, W)).subscribe(Y);
        });
      }
    },
    3900: (le, j, v) => {
      v.d(j, { w: () => B });
      var o = v(8421),
        C = v(4482),
        F = v(5403);
      function B(U, J) {
        return (0, C.e)((W, Y) => {
          let L = null,
            V = 0,
            Z = !1;
          const $ = () => Z && !L && Y.complete();
          W.subscribe(
            (0, F.x)(
              Y,
              (Oe) => {
                null == L || L.unsubscribe();
                let Te = 0;
                const Ae = V++;
                (0, o.Xf)(U(Oe, Ae)).subscribe(
                  (L = (0, F.x)(
                    Y,
                    (Je) => Y.next(J ? J(Oe, Je, Ae, Te++) : Je),
                    () => {
                      (L = null), $();
                    }
                  ))
                );
              },
              () => {
                (Z = !0), $();
              }
            )
          );
        });
      }
    },
    5698: (le, j, v) => {
      v.d(j, { q: () => B });
      var o = v(515),
        C = v(4482),
        F = v(5403);
      function B(U) {
        return U <= 0
          ? () => o.E
          : (0, C.e)((J, W) => {
              let Y = 0;
              J.subscribe(
                (0, F.x)(W, (L) => {
                  ++Y <= U && (W.next(L), U <= Y && W.complete());
                })
              );
            });
      }
    },
    2722: (le, j, v) => {
      v.d(j, { R: () => U });
      var o = v(4482),
        C = v(5403),
        F = v(8421),
        B = v(5032);
      function U(J) {
        return (0, o.e)((W, Y) => {
          (0, F.Xf)(J).subscribe((0, C.x)(Y, () => Y.complete(), B.Z)),
            !Y.closed && W.subscribe(Y);
        });
      }
    },
    8505: (le, j, v) => {
      v.d(j, { b: () => U });
      var o = v(576),
        C = v(4482),
        F = v(5403),
        B = v(4671);
      function U(J, W, Y) {
        const L =
          (0, o.m)(J) || W || Y ? { next: J, error: W, complete: Y } : J;
        return L
          ? (0, C.e)((V, Z) => {
              var $;
              null === ($ = L.subscribe) || void 0 === $ || $.call(L);
              let Oe = !0;
              V.subscribe(
                (0, F.x)(
                  Z,
                  (Te) => {
                    var Ae;
                    null === (Ae = L.next) || void 0 === Ae || Ae.call(L, Te),
                      Z.next(Te);
                  },
                  () => {
                    var Te;
                    (Oe = !1),
                      null === (Te = L.complete) || void 0 === Te || Te.call(L),
                      Z.complete();
                  },
                  (Te) => {
                    var Ae;
                    (Oe = !1),
                      null === (Ae = L.error) ||
                        void 0 === Ae ||
                        Ae.call(L, Te),
                      Z.error(Te);
                  },
                  () => {
                    var Te, Ae;
                    Oe &&
                      (null === (Te = L.unsubscribe) ||
                        void 0 === Te ||
                        Te.call(L)),
                      null === (Ae = L.finalize) || void 0 === Ae || Ae.call(L);
                  }
                )
              );
            })
          : B.y;
      }
    },
    7414: (le, j, v) => {
      v.d(j, { V: () => L });
      var o = v(4986),
        C = v(1165),
        F = v(4482),
        B = v(8421),
        U = v(3888),
        J = v(5403),
        W = v(9672);
      const Y = (0, U.d)(
        (Z) =>
          function (Oe = null) {
            Z(this),
              (this.message = "Timeout has occurred"),
              (this.name = "TimeoutError"),
              (this.info = Oe);
          }
      );
      function L(Z, $) {
        const {
          first: Oe,
          each: Te,
          with: Ae = V,
          scheduler: Je = null != $ ? $ : o.z,
          meta: Pe = null,
        } = (0, C.q)(Z) ? { first: Z } : "number" == typeof Z ? { each: Z } : Z;
        if (null == Oe && null == Te)
          throw new TypeError("No timeout provided.");
        return (0, F.e)((He, Ze) => {
          let Ge,
            Se,
            oe = null,
            je = 0;
          const Ve = (et) => {
            Se = (0, W.f)(
              Ze,
              Je,
              () => {
                try {
                  Ge.unsubscribe(),
                    (0, B.Xf)(
                      Ae({ meta: Pe, lastValue: oe, seen: je })
                    ).subscribe(Ze);
                } catch (Me) {
                  Ze.error(Me);
                }
              },
              et
            );
          };
          (Ge = He.subscribe(
            (0, J.x)(
              Ze,
              (et) => {
                null == Se || Se.unsubscribe(),
                  je++,
                  Ze.next((oe = et)),
                  Te > 0 && Ve(Te);
              },
              void 0,
              void 0,
              () => {
                (null == Se ? void 0 : Se.closed) ||
                  null == Se ||
                  Se.unsubscribe(),
                  (oe = null);
              }
            )
          )),
            !je &&
              Ve(
                null != Oe ? ("number" == typeof Oe ? Oe : +Oe - Je.now()) : Te
              );
        });
      }
      function V(Z) {
        throw new Y(Z);
      }
    },
    1365: (le, j, v) => {
      v.d(j, { M: () => W });
      var o = v(4482),
        C = v(5403),
        F = v(8421),
        B = v(4671),
        U = v(5032),
        J = v(3269);
      function W(...Y) {
        const L = (0, J.jO)(Y);
        return (0, o.e)((V, Z) => {
          const $ = Y.length,
            Oe = new Array($);
          let Te = Y.map(() => !1),
            Ae = !1;
          for (let Je = 0; Je < $; Je++)
            (0, F.Xf)(Y[Je]).subscribe(
              (0, C.x)(
                Z,
                (Pe) => {
                  (Oe[Je] = Pe),
                    !Ae &&
                      !Te[Je] &&
                      ((Te[Je] = !0), (Ae = Te.every(B.y)) && (Te = null));
                },
                U.Z
              )
            );
          V.subscribe(
            (0, C.x)(Z, (Je) => {
              if (Ae) {
                const Pe = [Je, ...Oe];
                Z.next(L ? L(...Pe) : Pe);
              }
            })
          );
        });
      }
    },
    4408: (le, j, v) => {
      v.d(j, { o: () => U });
      var o = v(727);
      class C extends o.w0 {
        constructor(W, Y) {
          super();
        }
        schedule(W, Y = 0) {
          return this;
        }
      }
      const F = {
        setInterval(J, W, ...Y) {
          const { delegate: L } = F;
          return (null == L ? void 0 : L.setInterval)
            ? L.setInterval(J, W, ...Y)
            : setInterval(J, W, ...Y);
        },
        clearInterval(J) {
          const { delegate: W } = F;
          return ((null == W ? void 0 : W.clearInterval) || clearInterval)(J);
        },
        delegate: void 0,
      };
      var B = v(8737);
      class U extends C {
        constructor(W, Y) {
          super(W, Y),
            (this.scheduler = W),
            (this.work = Y),
            (this.pending = !1);
        }
        schedule(W, Y = 0) {
          if (this.closed) return this;
          this.state = W;
          const L = this.id,
            V = this.scheduler;
          return (
            null != L && (this.id = this.recycleAsyncId(V, L, Y)),
            (this.pending = !0),
            (this.delay = Y),
            (this.id = this.id || this.requestAsyncId(V, this.id, Y)),
            this
          );
        }
        requestAsyncId(W, Y, L = 0) {
          return F.setInterval(W.flush.bind(W, this), L);
        }
        recycleAsyncId(W, Y, L = 0) {
          if (null != L && this.delay === L && !1 === this.pending) return Y;
          F.clearInterval(Y);
        }
        execute(W, Y) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const L = this._execute(W, Y);
          if (L) return L;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(W, Y) {
          let V,
            L = !1;
          try {
            this.work(W);
          } catch (Z) {
            (L = !0),
              (V = Z || new Error("Scheduled action threw falsy error"));
          }
          if (L) return this.unsubscribe(), V;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: W, scheduler: Y } = this,
              { actions: L } = Y;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              (0, B.P)(L, this),
              null != W && (this.id = this.recycleAsyncId(Y, W, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
    },
    7565: (le, j, v) => {
      v.d(j, { v: () => F });
      var o = v(6063);
      class C {
        constructor(U, J = C.now) {
          (this.schedulerActionCtor = U), (this.now = J);
        }
        schedule(U, J = 0, W) {
          return new this.schedulerActionCtor(this, U).schedule(W, J);
        }
      }
      C.now = o.l.now;
      class F extends C {
        constructor(U, J = C.now) {
          super(U, J),
            (this.actions = []),
            (this._active = !1),
            (this._scheduled = void 0);
        }
        flush(U) {
          const { actions: J } = this;
          if (this._active) return void J.push(U);
          let W;
          this._active = !0;
          do {
            if ((W = U.execute(U.state, U.delay))) break;
          } while ((U = J.shift()));
          if (((this._active = !1), W)) {
            for (; (U = J.shift()); ) U.unsubscribe();
            throw W;
          }
        }
      }
    },
    4986: (le, j, v) => {
      v.d(j, { z: () => F, P: () => B });
      var o = v(4408);
      const F = new (v(7565).v)(o.o),
        B = F;
    },
    6063: (le, j, v) => {
      v.d(j, { l: () => o });
      const o = { now: () => (o.delegate || Date).now(), delegate: void 0 };
    },
    233: (le, j, v) => {
      v.d(j, { N: () => U });
      var o = v(4408),
        F = v(7565);
      const U = new (class B extends F.v {})(
        class C extends o.o {
          constructor(Y, L) {
            super(Y, L), (this.scheduler = Y), (this.work = L);
          }
          schedule(Y, L = 0) {
            return L > 0
              ? super.schedule(Y, L)
              : ((this.delay = L),
                (this.state = Y),
                this.scheduler.flush(this),
                this);
          }
          execute(Y, L) {
            return L > 0 || this.closed
              ? super.execute(Y, L)
              : this._execute(Y, L);
          }
          requestAsyncId(Y, L, V = 0) {
            return (null != V && V > 0) || (null == V && this.delay > 0)
              ? super.requestAsyncId(Y, L, V)
              : Y.flush(this);
          }
        }
      );
    },
    3410: (le, j, v) => {
      v.d(j, { z: () => o });
      const o = {
        setTimeout(C, F, ...B) {
          const { delegate: U } = o;
          return (null == U ? void 0 : U.setTimeout)
            ? U.setTimeout(C, F, ...B)
            : setTimeout(C, F, ...B);
        },
        clearTimeout(C) {
          const { delegate: F } = o;
          return ((null == F ? void 0 : F.clearTimeout) || clearTimeout)(C);
        },
        delegate: void 0,
      };
    },
    2202: (le, j, v) => {
      v.d(j, { h: () => C });
      const C = (function o() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    8822: (le, j, v) => {
      v.d(j, { L: () => o });
      const o =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    3269: (le, j, v) => {
      v.d(j, { jO: () => B, yG: () => U, _6: () => J });
      var o = v(576),
        C = v(3532);
      function F(W) {
        return W[W.length - 1];
      }
      function B(W) {
        return (0, o.m)(F(W)) ? W.pop() : void 0;
      }
      function U(W) {
        return (0, C.K)(F(W)) ? W.pop() : void 0;
      }
      function J(W, Y) {
        return "number" == typeof F(W) ? W.pop() : Y;
      }
    },
    4742: (le, j, v) => {
      v.d(j, { D: () => U });
      const { isArray: o } = Array,
        { getPrototypeOf: C, prototype: F, keys: B } = Object;
      function U(W) {
        if (1 === W.length) {
          const Y = W[0];
          if (o(Y)) return { args: Y, keys: null };
          if (
            (function J(W) {
              return W && "object" == typeof W && C(W) === F;
            })(Y)
          ) {
            const L = B(Y);
            return { args: L.map((V) => Y[V]), keys: L };
          }
        }
        return { args: W, keys: null };
      }
    },
    8737: (le, j, v) => {
      function o(C, F) {
        if (C) {
          const B = C.indexOf(F);
          0 <= B && C.splice(B, 1);
        }
      }
      v.d(j, { P: () => o });
    },
    3888: (le, j, v) => {
      function o(C) {
        const B = C((U) => {
          Error.call(U), (U.stack = new Error().stack);
        });
        return (
          (B.prototype = Object.create(Error.prototype)),
          (B.prototype.constructor = B),
          B
        );
      }
      v.d(j, { d: () => o });
    },
    1810: (le, j, v) => {
      function o(C, F) {
        return C.reduce((B, U, J) => ((B[U] = F[J]), B), {});
      }
      v.d(j, { n: () => o });
    },
    2806: (le, j, v) => {
      v.d(j, { x: () => F, O: () => B });
      var o = v(2416);
      let C = null;
      function F(U) {
        if (o.v.useDeprecatedSynchronousErrorHandling) {
          const J = !C;
          if ((J && (C = { errorThrown: !1, error: null }), U(), J)) {
            const { errorThrown: W, error: Y } = C;
            if (((C = null), W)) throw Y;
          }
        } else U();
      }
      function B(U) {
        o.v.useDeprecatedSynchronousErrorHandling &&
          C &&
          ((C.errorThrown = !0), (C.error = U));
      }
    },
    9672: (le, j, v) => {
      function o(C, F, B, U = 0, J = !1) {
        const W = F.schedule(function () {
          B(), J ? C.add(this.schedule(null, U)) : this.unsubscribe();
        }, U);
        if ((C.add(W), !J)) return W;
      }
      v.d(j, { f: () => o });
    },
    4671: (le, j, v) => {
      function o(C) {
        return C;
      }
      v.d(j, { y: () => o });
    },
    1144: (le, j, v) => {
      v.d(j, { z: () => o });
      const o = (C) =>
        C && "number" == typeof C.length && "function" != typeof C;
    },
    2206: (le, j, v) => {
      v.d(j, { D: () => C });
      var o = v(576);
      function C(F) {
        return (
          Symbol.asyncIterator &&
          (0, o.m)(null == F ? void 0 : F[Symbol.asyncIterator])
        );
      }
    },
    1165: (le, j, v) => {
      function o(C) {
        return C instanceof Date && !isNaN(C);
      }
      v.d(j, { q: () => o });
    },
    576: (le, j, v) => {
      function o(C) {
        return "function" == typeof C;
      }
      v.d(j, { m: () => o });
    },
    3670: (le, j, v) => {
      v.d(j, { c: () => F });
      var o = v(8822),
        C = v(576);
      function F(B) {
        return (0, C.m)(B[o.L]);
      }
    },
    6495: (le, j, v) => {
      v.d(j, { T: () => F });
      var o = v(2202),
        C = v(576);
      function F(B) {
        return (0, C.m)(null == B ? void 0 : B[o.h]);
      }
    },
    8239: (le, j, v) => {
      v.d(j, { t: () => C });
      var o = v(576);
      function C(F) {
        return (0, o.m)(null == F ? void 0 : F.then);
      }
    },
    3260: (le, j, v) => {
      v.d(j, { Q: () => F, L: () => B });
      var o = v(655),
        C = v(576);
      function F(U) {
        return (0, o.FC)(this, arguments, function* () {
          const W = U.getReader();
          try {
            for (;;) {
              const { value: Y, done: L } = yield (0, o.qq)(W.read());
              if (L) return yield (0, o.qq)(void 0);
              yield yield (0, o.qq)(Y);
            }
          } finally {
            W.releaseLock();
          }
        });
      }
      function B(U) {
        return (0, C.m)(null == U ? void 0 : U.getReader);
      }
    },
    3532: (le, j, v) => {
      v.d(j, { K: () => C });
      var o = v(576);
      function C(F) {
        return F && (0, o.m)(F.schedule);
      }
    },
    4482: (le, j, v) => {
      v.d(j, { A: () => C, e: () => F });
      var o = v(576);
      function C(B) {
        return (0, o.m)(null == B ? void 0 : B.lift);
      }
      function F(B) {
        return (U) => {
          if (C(U))
            return U.lift(function (J) {
              try {
                return B(J, this);
              } catch (W) {
                this.error(W);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    3268: (le, j, v) => {
      v.d(j, { Z: () => B });
      var o = v(4004);
      const { isArray: C } = Array;
      function B(U) {
        return (0, o.U)((J) =>
          (function F(U, J) {
            return C(J) ? U(...J) : U(J);
          })(U, J)
        );
      }
    },
    5032: (le, j, v) => {
      function o() {}
      v.d(j, { Z: () => o });
    },
    9635: (le, j, v) => {
      v.d(j, { z: () => C, U: () => F });
      var o = v(4671);
      function C(...B) {
        return F(B);
      }
      function F(B) {
        return 0 === B.length
          ? o.y
          : 1 === B.length
          ? B[0]
          : function (J) {
              return B.reduce((W, Y) => Y(W), J);
            };
      }
    },
    7849: (le, j, v) => {
      v.d(j, { h: () => F });
      var o = v(2416),
        C = v(3410);
      function F(B) {
        C.z.setTimeout(() => {
          const { onUnhandledError: U } = o.v;
          if (!U) throw B;
          U(B);
        });
      }
    },
    4532: (le, j, v) => {
      function o(C) {
        return new TypeError(
          `You provided ${
            null !== C && "object" == typeof C ? "an invalid object" : `'${C}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      v.d(j, { z: () => o });
    },
    655: (le, j, v) => {
      function Y(ie, ye, ge, he) {
        return new (ge || (ge = Promise))(function (ue, tt) {
          function ft(gt) {
            try {
              ot(he.next(gt));
            } catch (fn) {
              tt(fn);
            }
          }
          function wt(gt) {
            try {
              ot(he.throw(gt));
            } catch (fn) {
              tt(fn);
            }
          }
          function ot(gt) {
            gt.done
              ? ue(gt.value)
              : (function xe(ue) {
                  return ue instanceof ge
                    ? ue
                    : new ge(function (tt) {
                        tt(ue);
                      });
                })(gt.value).then(ft, wt);
          }
          ot((he = he.apply(ie, ye || [])).next());
        });
      }
      function Pe(ie) {
        return this instanceof Pe ? ((this.v = ie), this) : new Pe(ie);
      }
      function He(ie, ye, ge) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var xe,
          he = ge.apply(ie, ye || []),
          ue = [];
        return (
          (xe = {}),
          tt("next"),
          tt("throw"),
          tt("return"),
          (xe[Symbol.asyncIterator] = function () {
            return this;
          }),
          xe
        );
        function tt(Wt) {
          he[Wt] &&
            (xe[Wt] = function (Yt) {
              return new Promise(function (st, kt) {
                ue.push([Wt, Yt, st, kt]) > 1 || ft(Wt, Yt);
              });
            });
        }
        function ft(Wt, Yt) {
          try {
            !(function wt(Wt) {
              Wt.value instanceof Pe
                ? Promise.resolve(Wt.value.v).then(ot, gt)
                : fn(ue[0][2], Wt);
            })(he[Wt](Yt));
          } catch (st) {
            fn(ue[0][3], st);
          }
        }
        function ot(Wt) {
          ft("next", Wt);
        }
        function gt(Wt) {
          ft("throw", Wt);
        }
        function fn(Wt, Yt) {
          Wt(Yt), ue.shift(), ue.length && ft(ue[0][0], ue[0][1]);
        }
      }
      function Ge(ie) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var ge,
          ye = ie[Symbol.asyncIterator];
        return ye
          ? ye.call(ie)
          : ((ie = (function $(ie) {
              var ye = "function" == typeof Symbol && Symbol.iterator,
                ge = ye && ie[ye],
                he = 0;
              if (ge) return ge.call(ie);
              if (ie && "number" == typeof ie.length)
                return {
                  next: function () {
                    return (
                      ie && he >= ie.length && (ie = void 0),
                      { value: ie && ie[he++], done: !ie }
                    );
                  },
                };
              throw new TypeError(
                ye
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(ie)),
            (ge = {}),
            he("next"),
            he("throw"),
            he("return"),
            (ge[Symbol.asyncIterator] = function () {
              return this;
            }),
            ge);
        function he(ue) {
          ge[ue] =
            ie[ue] &&
            function (tt) {
              return new Promise(function (ft, wt) {
                !(function xe(ue, tt, ft, wt) {
                  Promise.resolve(wt).then(function (ot) {
                    ue({ value: ot, done: ft });
                  }, tt);
                })(ft, wt, (tt = ie[ue](tt)).done, tt.value);
              });
            };
        }
      }
      v.d(j, { mG: () => Y, qq: () => Pe, FC: () => He, KL: () => Ge });
    },
    1777: (le, j, v) => {
      v.d(j, {
        l3: () => F,
        _j: () => o,
        LC: () => C,
        ZN: () => He,
        jt: () => U,
        pV: () => Oe,
        IO: () => Ae,
        vP: () => W,
        SB: () => L,
        oB: () => Y,
        eR: () => Z,
        X$: () => B,
        ZE: () => Ze,
        k1: () => Ge,
      });
      class o {}
      class C {}
      const F = "*";
      function B(Se, oe) {
        return { type: 7, name: Se, definitions: oe, options: {} };
      }
      function U(Se, oe = null) {
        return { type: 4, styles: oe, timings: Se };
      }
      function W(Se, oe = null) {
        return { type: 2, steps: Se, options: oe };
      }
      function Y(Se) {
        return { type: 6, styles: Se, offset: null };
      }
      function L(Se, oe, je) {
        return { type: 0, name: Se, styles: oe, options: je };
      }
      function Z(Se, oe, je = null) {
        return { type: 1, expr: Se, animation: oe, options: je };
      }
      function Oe(Se = null) {
        return { type: 9, options: Se };
      }
      function Ae(Se, oe, je = null) {
        return { type: 11, selector: Se, animation: oe, options: je };
      }
      function Pe(Se) {
        Promise.resolve(null).then(Se);
      }
      class He {
        constructor(oe = 0, je = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = oe + je);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((oe) => oe()),
            (this._onDoneFns = []));
        }
        onStart(oe) {
          this._onStartFns.push(oe);
        }
        onDone(oe) {
          this._onDoneFns.push(oe);
        }
        onDestroy(oe) {
          this._onDestroyFns.push(oe);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Pe(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((oe) => oe()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((oe) => oe()),
            (this._onDestroyFns = []));
        }
        reset() {
          this._started = !1;
        }
        setPosition(oe) {
          this._position = this.totalTime ? oe * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(oe) {
          const je = "start" == oe ? this._onStartFns : this._onDoneFns;
          je.forEach((Ve) => Ve()), (je.length = 0);
        }
      }
      class Ze {
        constructor(oe) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = oe);
          let je = 0,
            Ve = 0,
            et = 0;
          const Me = this.players.length;
          0 == Me
            ? Pe(() => this._onFinish())
            : this.players.forEach((ie) => {
                ie.onDone(() => {
                  ++je == Me && this._onFinish();
                }),
                  ie.onDestroy(() => {
                    ++Ve == Me && this._onDestroy();
                  }),
                  ie.onStart(() => {
                    ++et == Me && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (ie, ye) => Math.max(ie, ye.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((oe) => oe()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((oe) => oe.init());
        }
        onStart(oe) {
          this._onStartFns.push(oe);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((oe) => oe()),
            (this._onStartFns = []));
        }
        onDone(oe) {
          this._onDoneFns.push(oe);
        }
        onDestroy(oe) {
          this._onDestroyFns.push(oe);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((oe) => oe.play());
        }
        pause() {
          this.players.forEach((oe) => oe.pause());
        }
        restart() {
          this.players.forEach((oe) => oe.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((oe) => oe.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((oe) => oe.destroy()),
            this._onDestroyFns.forEach((oe) => oe()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((oe) => oe.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(oe) {
          const je = oe * this.totalTime;
          this.players.forEach((Ve) => {
            const et = Ve.totalTime ? Math.min(1, je / Ve.totalTime) : 1;
            Ve.setPosition(et);
          });
        }
        getPosition() {
          const oe = this.players.reduce(
            (je, Ve) => (null === je || Ve.totalTime > je.totalTime ? Ve : je),
            null
          );
          return null != oe ? oe.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((oe) => {
            oe.beforeDestroy && oe.beforeDestroy();
          });
        }
        triggerCallback(oe) {
          const je = "start" == oe ? this._onStartFns : this._onDoneFns;
          je.forEach((Ve) => Ve()), (je.length = 0);
        }
      }
      const Ge = "!";
    },
    226: (le, j, v) => {
      v.d(j, { vT: () => L, Is: () => W });
      var o = v(5e3),
        C = v(9808);
      const F = new o.OlP("cdk-dir-doc", {
          providedIn: "root",
          factory: function B() {
            return (0, o.f3M)(C.K0);
          },
        }),
        U =
          /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      let W = (() => {
          class V {
            constructor($) {
              if (((this.value = "ltr"), (this.change = new o.vpe()), $)) {
                const Te = $.documentElement ? $.documentElement.dir : null;
                this.value = (function J(V) {
                  const Z = (null == V ? void 0 : V.toLowerCase()) || "";
                  return "auto" === Z &&
                    "undefined" != typeof navigator &&
                    (null == navigator ? void 0 : navigator.language)
                    ? U.test(navigator.language)
                      ? "rtl"
                      : "ltr"
                    : "rtl" === Z
                    ? "rtl"
                    : "ltr";
                })(($.body ? $.body.dir : null) || Te || "ltr");
              }
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            (V.ɵfac = function ($) {
              return new ($ || V)(o.LFG(F, 8));
            }),
            (V.ɵprov = o.Yz7({
              token: V,
              factory: V.ɵfac,
              providedIn: "root",
            })),
            V
          );
        })(),
        L = (() => {
          class V {}
          return (
            (V.ɵfac = function ($) {
              return new ($ || V)();
            }),
            (V.ɵmod = o.oAB({ type: V })),
            (V.ɵinj = o.cJS({})),
            V
          );
        })();
    },
    3191: (le, j, v) => {
      v.d(j, {
        Eq: () => U,
        Ig: () => C,
        HM: () => J,
        fI: () => W,
        su: () => F,
      });
      var o = v(5e3);
      function C(L) {
        return null != L && "false" != `${L}`;
      }
      function F(L, V = 0) {
        return (function B(L) {
          return !isNaN(parseFloat(L)) && !isNaN(Number(L));
        })(L)
          ? Number(L)
          : V;
      }
      function U(L) {
        return Array.isArray(L) ? L : [L];
      }
      function J(L) {
        return null == L ? "" : "string" == typeof L ? L : `${L}px`;
      }
      function W(L) {
        return L instanceof o.SBq ? L.nativeElement : L;
      }
    },
    9808: (le, j, v) => {
      v.d(j, {
        mr: () => Ze,
        Ov: () => Ce,
        ez: () => Ji,
        K0: () => W,
        Do: () => Se,
        V_: () => V,
        Ye: () => oe,
        S$: () => Pe,
        mk: () => Cr,
        sg: () => me,
        O5: () => Qe,
        PC: () => Jr,
        RF: () => Zt,
        n9: () => Bt,
        ED: () => bn,
        b0: () => Ge,
        lw: () => Y,
        EM: () => zr,
        JF: () => Fn,
        NF: () => _r,
        PM: () => jr,
        w_: () => J,
        bD: () => Ar,
        q: () => F,
        Mx: () => Nr,
        HT: () => U,
      });
      var o = v(5e3);
      let C = null;
      function F() {
        return C;
      }
      function U(_) {
        C || (C = _);
      }
      class J {}
      const W = new o.OlP("DocumentToken");
      let Y = (() => {
        class _ {
          historyGo(y) {
            throw new Error("Not implemented");
          }
        }
        return (
          (_.ɵfac = function (y) {
            return new (y || _)();
          }),
          (_.ɵprov = o.Yz7({
            token: _,
            factory: function () {
              return (function L() {
                return (0, o.LFG)(Z);
              })();
            },
            providedIn: "platform",
          })),
          _
        );
      })();
      const V = new o.OlP("Location Initialized");
      let Z = (() => {
        class _ extends Y {
          constructor(y) {
            super(), (this._doc = y), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return F().getBaseHref(this._doc);
          }
          onPopState(y) {
            const O = F().getGlobalEventTarget(this._doc, "window");
            return (
              O.addEventListener("popstate", y, !1),
              () => O.removeEventListener("popstate", y)
            );
          }
          onHashChange(y) {
            const O = F().getGlobalEventTarget(this._doc, "window");
            return (
              O.addEventListener("hashchange", y, !1),
              () => O.removeEventListener("hashchange", y)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(y) {
            this.location.pathname = y;
          }
          pushState(y, O, ne) {
            $() ? this._history.pushState(y, O, ne) : (this.location.hash = ne);
          }
          replaceState(y, O, ne) {
            $()
              ? this._history.replaceState(y, O, ne)
              : (this.location.hash = ne);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(y = 0) {
            this._history.go(y);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (_.ɵfac = function (y) {
            return new (y || _)(o.LFG(W));
          }),
          (_.ɵprov = o.Yz7({
            token: _,
            factory: function () {
              return (function Oe() {
                return new Z((0, o.LFG)(W));
              })();
            },
            providedIn: "platform",
          })),
          _
        );
      })();
      function $() {
        return !!window.history.pushState;
      }
      function Te(_, S) {
        if (0 == _.length) return S;
        if (0 == S.length) return _;
        let y = 0;
        return (
          _.endsWith("/") && y++,
          S.startsWith("/") && y++,
          2 == y ? _ + S.substring(1) : 1 == y ? _ + S : _ + "/" + S
        );
      }
      function Ae(_) {
        const S = _.match(/#|\?|$/),
          y = (S && S.index) || _.length;
        return _.slice(0, y - ("/" === _[y - 1] ? 1 : 0)) + _.slice(y);
      }
      function Je(_) {
        return _ && "?" !== _[0] ? "?" + _ : _;
      }
      let Pe = (() => {
        class _ {
          historyGo(y) {
            throw new Error("Not implemented");
          }
        }
        return (
          (_.ɵfac = function (y) {
            return new (y || _)();
          }),
          (_.ɵprov = o.Yz7({
            token: _,
            factory: function () {
              return (function He(_) {
                const S = (0, o.LFG)(W).location;
                return new Ge((0, o.LFG)(Y), (S && S.origin) || "");
              })();
            },
            providedIn: "root",
          })),
          _
        );
      })();
      const Ze = new o.OlP("appBaseHref");
      let Ge = (() => {
          class _ extends Pe {
            constructor(y, O) {
              if (
                (super(),
                (this._platformLocation = y),
                (this._removeListenerFns = []),
                null == O && (O = this._platformLocation.getBaseHrefFromDOM()),
                null == O)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = O;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(y) {
              return Te(this._baseHref, y);
            }
            path(y = !1) {
              const O =
                  this._platformLocation.pathname +
                  Je(this._platformLocation.search),
                ne = this._platformLocation.hash;
              return ne && y ? `${O}${ne}` : O;
            }
            pushState(y, O, ne, Ie) {
              const Ue = this.prepareExternalUrl(ne + Je(Ie));
              this._platformLocation.pushState(y, O, Ue);
            }
            replaceState(y, O, ne, Ie) {
              const Ue = this.prepareExternalUrl(ne + Je(Ie));
              this._platformLocation.replaceState(y, O, Ue);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(y = 0) {
              var O, ne;
              null === (ne = (O = this._platformLocation).historyGo) ||
                void 0 === ne ||
                ne.call(O, y);
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)(o.LFG(Y), o.LFG(Ze, 8));
            }),
            (_.ɵprov = o.Yz7({ token: _, factory: _.ɵfac })),
            _
          );
        })(),
        Se = (() => {
          class _ extends Pe {
            constructor(y, O) {
              super(),
                (this._platformLocation = y),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != O && (this._baseHref = O);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(y = !1) {
              let O = this._platformLocation.hash;
              return null == O && (O = "#"), O.length > 0 ? O.substring(1) : O;
            }
            prepareExternalUrl(y) {
              const O = Te(this._baseHref, y);
              return O.length > 0 ? "#" + O : O;
            }
            pushState(y, O, ne, Ie) {
              let Ue = this.prepareExternalUrl(ne + Je(Ie));
              0 == Ue.length && (Ue = this._platformLocation.pathname),
                this._platformLocation.pushState(y, O, Ue);
            }
            replaceState(y, O, ne, Ie) {
              let Ue = this.prepareExternalUrl(ne + Je(Ie));
              0 == Ue.length && (Ue = this._platformLocation.pathname),
                this._platformLocation.replaceState(y, O, Ue);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(y = 0) {
              var O, ne;
              null === (ne = (O = this._platformLocation).historyGo) ||
                void 0 === ne ||
                ne.call(O, y);
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)(o.LFG(Y), o.LFG(Ze, 8));
            }),
            (_.ɵprov = o.Yz7({ token: _, factory: _.ɵfac })),
            _
          );
        })(),
        oe = (() => {
          class _ {
            constructor(y, O) {
              (this._subject = new o.vpe()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = y);
              const ne = this._platformStrategy.getBaseHref();
              (this._platformLocation = O),
                (this._baseHref = Ae(et(ne))),
                this._platformStrategy.onPopState((Ie) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: Ie.state,
                    type: Ie.type,
                  });
                });
            }
            path(y = !1) {
              return this.normalize(this._platformStrategy.path(y));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(y, O = "") {
              return this.path() == this.normalize(y + Je(O));
            }
            normalize(y) {
              return _.stripTrailingSlash(
                (function Ve(_, S) {
                  return _ && S.startsWith(_) ? S.substring(_.length) : S;
                })(this._baseHref, et(y))
              );
            }
            prepareExternalUrl(y) {
              return (
                y && "/" !== y[0] && (y = "/" + y),
                this._platformStrategy.prepareExternalUrl(y)
              );
            }
            go(y, O = "", ne = null) {
              this._platformStrategy.pushState(ne, "", y, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + Je(O)),
                  ne
                );
            }
            replaceState(y, O = "", ne = null) {
              this._platformStrategy.replaceState(ne, "", y, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + Je(O)),
                  ne
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(y = 0) {
              var O, ne;
              null === (ne = (O = this._platformStrategy).historyGo) ||
                void 0 === ne ||
                ne.call(O, y);
            }
            onUrlChange(y) {
              this._urlChangeListeners.push(y),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((O) => {
                    this._notifyUrlChangeListeners(O.url, O.state);
                  }));
            }
            _notifyUrlChangeListeners(y = "", O) {
              this._urlChangeListeners.forEach((ne) => ne(y, O));
            }
            subscribe(y, O, ne) {
              return this._subject.subscribe({
                next: y,
                error: O,
                complete: ne,
              });
            }
          }
          return (
            (_.normalizeQueryParams = Je),
            (_.joinWithSlash = Te),
            (_.stripTrailingSlash = Ae),
            (_.ɵfac = function (y) {
              return new (y || _)(o.LFG(Pe), o.LFG(Y));
            }),
            (_.ɵprov = o.Yz7({
              token: _,
              factory: function () {
                return (function je() {
                  return new oe((0, o.LFG)(Pe), (0, o.LFG)(Y));
                })();
              },
              providedIn: "root",
            })),
            _
          );
        })();
      function et(_) {
        return _.replace(/\/index.html$/, "");
      }
      function Nr(_, S) {
        S = encodeURIComponent(S);
        for (const y of _.split(";")) {
          const O = y.indexOf("="),
            [ne, Ie] = -1 == O ? [y, ""] : [y.slice(0, O), y.slice(O + 1)];
          if (ne.trim() === S) return decodeURIComponent(Ie);
        }
        return null;
      }
      let Cr = (() => {
        class _ {
          constructor(y, O, ne, Ie) {
            (this._iterableDiffers = y),
              (this._keyValueDiffers = O),
              (this._ngEl = ne),
              (this._renderer = Ie),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(y) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof y ? y.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(y) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof y ? y.split(/\s+/) : y),
              this._rawClass &&
                ((0, o.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const y = this._iterableDiffer.diff(this._rawClass);
              y && this._applyIterableChanges(y);
            } else if (this._keyValueDiffer) {
              const y = this._keyValueDiffer.diff(this._rawClass);
              y && this._applyKeyValueChanges(y);
            }
          }
          _applyKeyValueChanges(y) {
            y.forEachAddedItem((O) => this._toggleClass(O.key, O.currentValue)),
              y.forEachChangedItem((O) =>
                this._toggleClass(O.key, O.currentValue)
              ),
              y.forEachRemovedItem((O) => {
                O.previousValue && this._toggleClass(O.key, !1);
              });
          }
          _applyIterableChanges(y) {
            y.forEachAddedItem((O) => {
              if ("string" != typeof O.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  o.AaK)(O.item)}`
                );
              this._toggleClass(O.item, !0);
            }),
              y.forEachRemovedItem((O) => this._toggleClass(O.item, !1));
          }
          _applyClasses(y) {
            y &&
              (Array.isArray(y) || y instanceof Set
                ? y.forEach((O) => this._toggleClass(O, !0))
                : Object.keys(y).forEach((O) => this._toggleClass(O, !!y[O])));
          }
          _removeClasses(y) {
            y &&
              (Array.isArray(y) || y instanceof Set
                ? y.forEach((O) => this._toggleClass(O, !1))
                : Object.keys(y).forEach((O) => this._toggleClass(O, !1)));
          }
          _toggleClass(y, O) {
            (y = y.trim()) &&
              y.split(/\s+/g).forEach((ne) => {
                O
                  ? this._renderer.addClass(this._ngEl.nativeElement, ne)
                  : this._renderer.removeClass(this._ngEl.nativeElement, ne);
              });
          }
        }
        return (
          (_.ɵfac = function (y) {
            return new (y || _)(
              o.Y36(o.ZZ4),
              o.Y36(o.aQg),
              o.Y36(o.SBq),
              o.Y36(o.Qsj)
            );
          }),
          (_.ɵdir = o.lG2({
            type: _,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          _
        );
      })();
      class Re {
        constructor(S, y, O, ne) {
          (this.$implicit = S),
            (this.ngForOf = y),
            (this.index = O),
            (this.count = ne);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let me = (() => {
        class _ {
          constructor(y, O, ne) {
            (this._viewContainer = y),
              (this._template = O),
              (this._differs = ne),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(y) {
            (this._ngForOf = y), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(y) {
            this._trackByFn = y;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(y) {
            y && (this._template = y);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const y = this._ngForOf;
              !this._differ &&
                y &&
                (this._differ = this._differs
                  .find(y)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const y = this._differ.diff(this._ngForOf);
              y && this._applyChanges(y);
            }
          }
          _applyChanges(y) {
            const O = this._viewContainer;
            y.forEachOperation((ne, Ie, Ue) => {
              if (null == ne.previousIndex)
                O.createEmbeddedView(
                  this._template,
                  new Re(ne.item, this._ngForOf, -1, -1),
                  null === Ue ? void 0 : Ue
                );
              else if (null == Ue) O.remove(null === Ie ? void 0 : Ie);
              else if (null !== Ie) {
                const yt = O.get(Ie);
                O.move(yt, Ue), we(yt, ne);
              }
            });
            for (let ne = 0, Ie = O.length; ne < Ie; ne++) {
              const yt = O.get(ne).context;
              (yt.index = ne), (yt.count = Ie), (yt.ngForOf = this._ngForOf);
            }
            y.forEachIdentityChange((ne) => {
              we(O.get(ne.currentIndex), ne);
            });
          }
          static ngTemplateContextGuard(y, O) {
            return !0;
          }
        }
        return (
          (_.ɵfac = function (y) {
            return new (y || _)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(o.ZZ4));
          }),
          (_.ɵdir = o.lG2({
            type: _,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          _
        );
      })();
      function we(_, S) {
        _.context.$implicit = S.item;
      }
      let Qe = (() => {
        class _ {
          constructor(y, O) {
            (this._viewContainer = y),
              (this._context = new Et()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = O);
          }
          set ngIf(y) {
            (this._context.$implicit = this._context.ngIf = y),
              this._updateView();
          }
          set ngIfThen(y) {
            Dn("ngIfThen", y),
              (this._thenTemplateRef = y),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(y) {
            Dn("ngIfElse", y),
              (this._elseTemplateRef = y),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(y, O) {
            return !0;
          }
        }
        return (
          (_.ɵfac = function (y) {
            return new (y || _)(o.Y36(o.s_b), o.Y36(o.Rgc));
          }),
          (_.ɵdir = o.lG2({
            type: _,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          _
        );
      })();
      class Et {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Dn(_, S) {
        if (S && !S.createEmbeddedView)
          throw new Error(
            `${_} must be a TemplateRef, but received '${(0, o.AaK)(S)}'.`
          );
      }
      class en {
        constructor(S, y) {
          (this._viewContainerRef = S),
            (this._templateRef = y),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(S) {
          S && !this._created
            ? this.create()
            : !S && this._created && this.destroy();
        }
      }
      let Zt = (() => {
          class _ {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(y) {
              (this._ngSwitch = y),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(y) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(y);
            }
            _matchCase(y) {
              const O = y == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || O),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                O
              );
            }
            _updateDefaultCases(y) {
              if (this._defaultViews && y !== this._defaultUsed) {
                this._defaultUsed = y;
                for (let O = 0; O < this._defaultViews.length; O++)
                  this._defaultViews[O].enforceState(y);
              }
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)();
            }),
            (_.ɵdir = o.lG2({
              type: _,
              selectors: [["", "ngSwitch", ""]],
              inputs: { ngSwitch: "ngSwitch" },
            })),
            _
          );
        })(),
        Bt = (() => {
          class _ {
            constructor(y, O, ne) {
              (this.ngSwitch = ne), ne._addCase(), (this._view = new en(y, O));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(Zt, 9));
            }),
            (_.ɵdir = o.lG2({
              type: _,
              selectors: [["", "ngSwitchCase", ""]],
              inputs: { ngSwitchCase: "ngSwitchCase" },
            })),
            _
          );
        })(),
        bn = (() => {
          class _ {
            constructor(y, O, ne) {
              ne._addDefault(new en(y, O));
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(Zt, 9));
            }),
            (_.ɵdir = o.lG2({
              type: _,
              selectors: [["", "ngSwitchDefault", ""]],
            })),
            _
          );
        })(),
        Jr = (() => {
          class _ {
            constructor(y, O, ne) {
              (this._ngEl = y),
                (this._differs = O),
                (this._renderer = ne),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(y) {
              (this._ngStyle = y),
                !this._differ &&
                  y &&
                  (this._differ = this._differs.find(y).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const y = this._differ.diff(this._ngStyle);
                y && this._applyChanges(y);
              }
            }
            _setStyle(y, O) {
              const [ne, Ie] = y.split(".");
              null != (O = null != O && Ie ? `${O}${Ie}` : O)
                ? this._renderer.setStyle(this._ngEl.nativeElement, ne, O)
                : this._renderer.removeStyle(this._ngEl.nativeElement, ne);
            }
            _applyChanges(y) {
              y.forEachRemovedItem((O) => this._setStyle(O.key, null)),
                y.forEachAddedItem((O) =>
                  this._setStyle(O.key, O.currentValue)
                ),
                y.forEachChangedItem((O) =>
                  this._setStyle(O.key, O.currentValue)
                );
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)(o.Y36(o.SBq), o.Y36(o.aQg), o.Y36(o.Qsj));
            }),
            (_.ɵdir = o.lG2({
              type: _,
              selectors: [["", "ngStyle", ""]],
              inputs: { ngStyle: "ngStyle" },
            })),
            _
          );
        })();
      class Qi {
        createSubscription(S, y) {
          return S.subscribe({
            next: y,
            error: (O) => {
              throw O;
            },
          });
        }
        dispose(S) {
          S.unsubscribe();
        }
        onDestroy(S) {
          S.unsubscribe();
        }
      }
      class T {
        createSubscription(S, y) {
          return S.then(y, (O) => {
            throw O;
          });
        }
        dispose(S) {}
        onDestroy(S) {}
      }
      const ce = new T(),
        H = new Qi();
      let Ce = (() => {
          class _ {
            constructor(y) {
              (this._ref = y),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            ngOnDestroy() {
              this._subscription && this._dispose();
            }
            transform(y) {
              return this._obj
                ? y !== this._obj
                  ? (this._dispose(), this.transform(y))
                  : this._latestValue
                : (y && this._subscribe(y), this._latestValue);
            }
            _subscribe(y) {
              (this._obj = y),
                (this._strategy = this._selectStrategy(y)),
                (this._subscription = this._strategy.createSubscription(
                  y,
                  (O) => this._updateLatestValue(y, O)
                ));
            }
            _selectStrategy(y) {
              if ((0, o.QGY)(y)) return ce;
              if ((0, o.F4k)(y)) return H;
              throw (function Kn(_, S) {
                return new o.vHH(2100, "");
              })();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(y, O) {
              y === this._obj &&
                ((this._latestValue = O), this._ref.markForCheck());
            }
          }
          return (
            (_.ɵfac = function (y) {
              return new (y || _)(o.Y36(o.sBO, 16));
            }),
            (_.ɵpipe = o.Yjl({ name: "async", type: _, pure: !1 })),
            _
          );
        })(),
        Ji = (() => {
          class _ {}
          return (
            (_.ɵfac = function (y) {
              return new (y || _)();
            }),
            (_.ɵmod = o.oAB({ type: _ })),
            (_.ɵinj = o.cJS({})),
            _
          );
        })();
      const Ar = "browser";
      function _r(_) {
        return _ === Ar;
      }
      function jr(_) {
        return "server" === _;
      }
      let zr = (() => {
        class _ {}
        return (
          (_.ɵprov = (0, o.Yz7)({
            token: _,
            providedIn: "root",
            factory: () => new oi((0, o.LFG)(W), window),
          })),
          _
        );
      })();
      class oi {
        constructor(S, y) {
          (this.document = S), (this.window = y), (this.offset = () => [0, 0]);
        }
        setOffset(S) {
          this.offset = Array.isArray(S) ? () => S : S;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(S) {
          this.supportsScrolling() && this.window.scrollTo(S[0], S[1]);
        }
        scrollToAnchor(S) {
          if (!this.supportsScrolling()) return;
          const y = (function Ai(_, S) {
            const y = _.getElementById(S) || _.getElementsByName(S)[0];
            if (y) return y;
            if (
              "function" == typeof _.createTreeWalker &&
              _.body &&
              (_.body.createShadowRoot || _.body.attachShadow)
            ) {
              const O = _.createTreeWalker(_.body, NodeFilter.SHOW_ELEMENT);
              let ne = O.currentNode;
              for (; ne; ) {
                const Ie = ne.shadowRoot;
                if (Ie) {
                  const Ue =
                    Ie.getElementById(S) || Ie.querySelector(`[name="${S}"]`);
                  if (Ue) return Ue;
                }
                ne = O.nextNode();
              }
            }
            return null;
          })(this.document, S);
          y && (this.scrollToElement(y), y.focus());
        }
        setHistoryScrollRestoration(S) {
          if (this.supportScrollRestoration()) {
            const y = this.window.history;
            y && y.scrollRestoration && (y.scrollRestoration = S);
          }
        }
        scrollToElement(S) {
          const y = S.getBoundingClientRect(),
            O = y.left + this.window.pageXOffset,
            ne = y.top + this.window.pageYOffset,
            Ie = this.offset();
          this.window.scrollTo(O - Ie[0], ne - Ie[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const S =
              Ui(this.window.history) ||
              Ui(Object.getPrototypeOf(this.window.history));
            return !(!S || (!S.writable && !S.set));
          } catch (S) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (S) {
            return !1;
          }
        }
      }
      function Ui(_) {
        return Object.getOwnPropertyDescriptor(_, "scrollRestoration");
      }
      class Fn {}
    },
    5e3: (le, j, v) => {
      v.d(j, {
        deG: () => wp,
        tb: () => tp,
        AFp: () => Zg,
        ip1: () => qg,
        CZH: () => Lu,
        hGG: () => PC,
        z2F: () => Vu,
        sBO: () => vC,
        Sil: () => XD,
        _Vd: () => Ia,
        EJc: () => qD,
        SBq: () => Vo,
        qLn: () => aa,
        vpe: () => Li,
        tBr: () => na,
        XFs: () => St,
        OlP: () => rr,
        zs3: () => hi,
        ZZ4: () => Yu,
        aQg: () => Qu,
        soG: () => ku,
        YKP: () => lg,
        h0i: () => so,
        PXZ: () => cC,
        R0b: () => yi,
        FiY: () => Co,
        Lbi: () => ep,
        g9A: () => Jg,
        n_E: () => Fa,
        Qsj: () => KE,
        FYo: () => ig,
        JOm: () => Oi,
        q3G: () => ir,
        PiD: () => Qa,
        tp0: () => xo,
        Rgc: () => Wo,
        dDg: () => sp,
        GfV: () => sg,
        s_b: () => La,
        ifc: () => at,
        eFA: () => lp,
        G48: () => yC,
        Gpc: () => Z,
        f3M: () => pc,
        X6Q: () => mC,
        _c5: () => FC,
        VLi: () => aC,
        c2e: () => np,
        zSh: () => Vl,
        wAp: () => Pt,
        vHH: () => Ae,
        EiD: () => Oc,
        mCW: () => wo,
        qzn: () => Ns,
        JVY: () => rm,
        pB0: () => am,
        eBb: () => sm,
        L6k: () => im,
        LAX: () => om,
        cg1: () => hu,
        kL8: () => bh,
        yhl: () => Cc,
        dqk: () => jt,
        sIi: () => Po,
        CqO: () => Ff,
        QGY: () => iu,
        F4k: () => Rf,
        RDi: () => Ui,
        AaK: () => Y,
        z3N: () => Wi,
        qOj: () => Kl,
        TTD: () => ei,
        _Bn: () => tg,
        xp6: () => ud,
        uIk: () => ql,
        Gre: () => yh,
        ekj: () => uu,
        Suo: () => bg,
        Xpm: () => k,
        lG2: () => Q,
        Yz7: () => st,
        cJS: () => Ln,
        oAB: () => ct,
        Yjl: () => R,
        Y36: () => No,
        _UZ: () => ru,
        BQk: () => xa,
        ynx: () => Ca,
        qZA: () => Da,
        TgZ: () => Ea,
        EpF: () => If,
        n5z: () => Qr,
        Ikx: () => fu,
        LFG: () => Dr,
        $8M: () => Ds,
        $Z: () => Tf,
        NdJ: () => su,
        CRH: () => Tg,
        O4$: () => lr,
        oxw: () => kf,
        ALo: () => _g,
        lcZ: () => Eg,
        Hsn: () => jf,
        F$t: () => Bf,
        Q6J: () => tu,
        DdM: () => fg,
        VKq: () => hg,
        iGM: () => Sg,
        MAs: () => vf,
        CHM: () => bs,
        LSH: () => rl,
        Udp: () => lu,
        YNc: () => yf,
        W1O: () => Fg,
        _uU: () => lh,
        Oqu: () => du,
        hij: () => wa,
        Gf: () => Mg,
      });
      var o = v(7579),
        C = v(727),
        F = v(9751),
        B = v(6451),
        U = v(3099);
      function J(e) {
        for (let t in e) if (e[t] === J) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function W(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Y(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Y).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function L(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const V = J({ __forward_ref__: J });
      function Z(e) {
        return (
          (e.__forward_ref__ = Z),
          (e.toString = function () {
            return Y(this());
          }),
          e
        );
      }
      function $(e) {
        return Oe(e) ? e() : e;
      }
      function Oe(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(V) &&
          e.__forward_ref__ === Z
        );
      }
      class Ae extends Error {
        constructor(t, n) {
          super(
            (function Je(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function Pe(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function He(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : Pe(e);
      }
      function oe(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new Ae(-201, `No provider for ${He(e)} found${n}`);
      }
      function ot(e, t) {
        null == e &&
          (function gt(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function st(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Ln(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Qt(e) {
        return hn(e, qt) || hn(e, zn);
      }
      function hn(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function vn(e) {
        return e && (e.hasOwnProperty(Bn) || e.hasOwnProperty(Zn))
          ? e[Bn]
          : null;
      }
      const qt = J({ ɵprov: J }),
        Bn = J({ ɵinj: J }),
        zn = J({ ngInjectableDef: J }),
        Zn = J({ ngInjectorDef: J });
      var St = (() => (
        ((St = St || {})[(St.Default = 0)] = "Default"),
        (St[(St.Host = 1)] = "Host"),
        (St[(St.Self = 2)] = "Self"),
        (St[(St.SkipSelf = 4)] = "SkipSelf"),
        (St[(St.Optional = 8)] = "Optional"),
        St
      ))();
      let Xn;
      function wn(e) {
        const t = Xn;
        return (Xn = e), t;
      }
      function In(e, t, n) {
        const r = Qt(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & St.Optional
          ? null
          : void 0 !== t
          ? t
          : void oe(Y(e), "Injector");
      }
      function jn(e) {
        return { toString: e }.toString();
      }
      var _n = (() => (
          ((_n = _n || {})[(_n.OnPush = 0)] = "OnPush"),
          (_n[(_n.Default = 1)] = "Default"),
          _n
        ))(),
        at = (() => {
          return (
            ((e = at || (at = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            at
          );
          var e;
        })();
      const Ct = "undefined" != typeof globalThis && globalThis,
        mt = "undefined" != typeof window && window,
        $n =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        jt = Ct || ("undefined" != typeof global && global) || mt || $n,
        M = {},
        I = [],
        se = J({ ɵcmp: J }),
        pe = J({ ɵdir: J }),
        qe = J({ ɵpipe: J }),
        nt = J({ ɵmod: J }),
        ee = J({ ɵfac: J }),
        Ke = J({ __NG_ELEMENT_ID__: J });
      let ve = 0;
      function k(e) {
        return jn(() => {
          const n = {},
            r = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === _n.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || I,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || at.Emulated,
              id: "c",
              styles: e.styles || I,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.directives,
            s = e.features,
            a = e.pipes;
          return (
            (r.id += ve++),
            (r.inputs = fe(e.inputs, n)),
            (r.outputs = fe(e.outputs)),
            s && s.forEach((f) => f(r)),
            (r.directiveDefs = i
              ? () => ("function" == typeof i ? i() : i).map(de)
              : null),
            (r.pipeDefs = a
              ? () => ("function" == typeof a ? a() : a).map(Ne)
              : null),
            r
          );
        });
      }
      function de(e) {
        return (
          ae(e) ||
          (function Le(e) {
            return e[pe] || null;
          })(e)
        );
      }
      function Ne(e) {
        return (function rt(e) {
          return e[qe] || null;
        })(e);
      }
      const ze = {};
      function ct(e) {
        return jn(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || I,
            declarations: e.declarations || I,
            imports: e.imports || I,
            exports: e.exports || I,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (ze[e.id] = e.type), t;
        });
      }
      function fe(e, t) {
        if (null == e) return M;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              s = i;
            Array.isArray(i) && ((s = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = s);
          }
        return n;
      }
      const Q = k;
      function R(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function ae(e) {
        return e[se] || null;
      }
      function _t(e, t) {
        const n = e[nt] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Y(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Zt(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Bt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function bn(e) {
        return 0 != (8 & e.flags);
      }
      function xr(e) {
        return 2 == (2 & e.flags);
      }
      function vr(e) {
        return 1 == (1 & e.flags);
      }
      function Jn(e) {
        return null !== e.template;
      }
      function Jr(e) {
        return 0 != (512 & e[2]);
      }
      function kr(e, t) {
        return e.hasOwnProperty(ee) ? e[ee] : null;
      }
      class cs {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function ei() {
        return Ci;
      }
      function Ci(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Br), Bi;
      }
      function Bi() {
        const e = Ar(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === M) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Br(e, t, n, r) {
        const i =
            Ar(e) ||
            (function ds(e, t) {
              return (e[Ji] = t);
            })(e, { previous: M, current: null }),
          s = i.current || (i.current = {}),
          a = i.previous,
          f = this.declaredInputs[n],
          g = a[f];
        (s[f] = new cs(g && g.currentValue, t, a === M)), (e[r] = t);
      }
      ei.ngInherit = !0;
      const Ji = "__ngSimpleChanges__";
      function Ar(e) {
        return e[Ji] || null;
      }
      let oi;
      function Ui(e) {
        oi = e;
      }
      function Fn(e) {
        return !!e.listen;
      }
      const _ = {
        createRenderer: (e, t) =>
          (function Ai() {
            return void 0 !== oi
              ? oi
              : "undefined" != typeof document
              ? document
              : void 0;
          })(),
      };
      function y(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Ie(e, t) {
        return y(t[e]);
      }
      function Ue(e, t) {
        return y(t[e.index]);
      }
      function mn(e, t) {
        return e.data[t];
      }
      function un(e, t) {
        return e[t];
      }
      function Gt(e, t) {
        const n = t[e];
        return Zt(n) ? n : n[0];
      }
      function Jt(e) {
        return 4 == (4 & e[2]);
      }
      function Gn(e) {
        return 128 == (128 & e[2]);
      }
      function Tn(e, t) {
        return null == t ? null : e[t];
      }
      function br(e) {
        e[18] = 0;
      }
      function Er(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const Ot = {
        lFrame: bt(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function ns() {
        return Ot.bindingsEnabled;
      }
      function $e() {
        return Ot.lFrame.lView;
      }
      function tn() {
        return Ot.lFrame.tView;
      }
      function bs(e) {
        return (Ot.lFrame.contextLView = e), e[8];
      }
      function kn() {
        let e = Ts();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Ts() {
        return Ot.lFrame.currentTNode;
      }
      function Ur(e, t) {
        const n = Ot.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function ps() {
        return Ot.lFrame.isParent;
      }
      function ai() {
        Ot.lFrame.isParent = !1;
      }
      function Gi() {
        return Ot.isInCheckNoChangesMode;
      }
      function Vi(e) {
        Ot.isInCheckNoChangesMode = e;
      }
      function hr() {
        const e = Ot.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function x() {
        return Ot.lFrame.bindingIndex++;
      }
      function l(e) {
        const t = Ot.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function A(e, t) {
        const n = Ot.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), q(t);
      }
      function q(e) {
        Ot.lFrame.currentDirectiveIndex = e;
      }
      function Ee() {
        return Ot.lFrame.currentQueryIndex;
      }
      function ke(e) {
        Ot.lFrame.currentQueryIndex = e;
      }
      function ut(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function At(e, t, n) {
        if (n & St.SkipSelf) {
          let i = t,
            s = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              n & St.Host ||
              ((i = ut(s)), null === i || ((s = s[15]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = s);
        }
        const r = (Ot.lFrame = Kt());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Rt(e) {
        const t = Kt(),
          n = e[1];
        (Ot.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Kt() {
        const e = Ot.lFrame,
          t = null === e ? null : e.child;
        return null === t ? bt(e) : t;
      }
      function bt(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Vt() {
        const e = Ot.lFrame;
        return (
          (Ot.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const gn = Vt;
      function Vn() {
        const e = Vt();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function rn() {
        return Ot.lFrame.selectedIndex;
      }
      function wr(e) {
        Ot.lFrame.selectedIndex = e;
      }
      function dn() {
        const e = Ot.lFrame;
        return mn(e.tView, e.selectedIndex);
      }
      function lr() {
        Ot.lFrame.currentNamespace = "svg";
      }
      function Vr(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const s = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: f,
              ngAfterViewInit: g,
              ngAfterViewChecked: D,
              ngOnDestroy: w,
            } = s;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            f &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, f),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, f)),
            g && (e.viewHooks || (e.viewHooks = [])).push(-n, g),
            D &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, D),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, D)),
            null != w && (e.destroyHooks || (e.destroyHooks = [])).push(n, w);
        }
      }
      function Si(e, t, n) {
        pt(e, t, 3, n);
      }
      function $i(e, t, n, r) {
        (3 & e[2]) === n && pt(e, t, n, r);
      }
      function Dt(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function pt(e, t, n, r) {
        const s = null != r ? r : -1,
          a = t.length - 1;
        let f = 0;
        for (let g = void 0 !== r ? 65535 & e[18] : 0; g < a; g++)
          if ("number" == typeof t[g + 1]) {
            if (((f = t[g]), null != r && f >= r)) break;
          } else
            t[g] < 0 && (e[18] += 65536),
              (f < s || -1 == s) &&
                (Ft(e, n, t, g), (e[18] = (4294901760 & e[18]) + g + 2)),
              g++;
      }
      function Ft(e, t, n, r) {
        const i = n[r] < 0,
          s = n[r + 1],
          f = e[i ? -n[r] : n[r]];
        if (i) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              s.call(f);
            } finally {
            }
          }
        } else
          try {
            s.call(f);
          } finally {
          }
      }
      class Pn {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Mr(e, t, n) {
        const r = Fn(e);
        let i = 0;
        for (; i < n.length; ) {
          const s = n[i];
          if ("number" == typeof s) {
            if (0 !== s) break;
            i++;
            const a = n[i++],
              f = n[i++],
              g = n[i++];
            r ? e.setAttribute(t, f, g, a) : t.setAttributeNS(a, f, g);
          } else {
            const a = s,
              f = n[++i];
            Fr(a)
              ? r && e.setProperty(t, a, f)
              : r
              ? e.setAttribute(t, a, f)
              : t.setAttribute(a, f),
              i++;
          }
        }
        return i;
      }
      function ui(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Fr(e) {
        return 64 === e.charCodeAt(0);
      }
      function vs(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              "number" == typeof i
                ? (n = i)
                : 0 === n ||
                  Qo(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function Qo(e, t, n, r, i) {
        let s = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; s < e.length; ) {
            const f = e[s++];
            if ("number" == typeof f) {
              if (f === t) {
                a = -1;
                break;
              }
              if (f > t) {
                a = s - 1;
                break;
              }
            }
          }
        for (; s < e.length; ) {
          const f = e[s];
          if ("number" == typeof f) break;
          if (f === n) {
            if (null === r) return void (null !== i && (e[s + 1] = i));
            if (r === e[s + 1]) return void (e[s + 2] = i);
          }
          s++, null !== r && s++, null !== i && s++;
        }
        -1 !== a && (e.splice(a, 0, t), (s = a + 1)),
          e.splice(s++, 0, n),
          null !== r && e.splice(s++, 0, r),
          null !== i && e.splice(s++, 0, i);
      }
      function qo(e) {
        return -1 !== e;
      }
      function rs(e) {
        return 32767 & e;
      }
      function is(e, t) {
        let n = (function Ga(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let fo = !0;
      function _s(e) {
        const t = fo;
        return (fo = e), t;
      }
      let ho = 0;
      function Es(e, t) {
        const n = go(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Is(r.data, e),
          Is(t, null),
          Is(r.blueprint, null));
        const i = po(e, t),
          s = e.injectorIndex;
        if (qo(i)) {
          const a = rs(i),
            f = is(i, t),
            g = f[1].data;
          for (let D = 0; D < 8; D++) t[s + D] = f[a + D] | g[a + D];
        }
        return (t[s + 8] = i), s;
      }
      function Is(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function go(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function po(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          const s = i[1],
            a = s.type;
          if (((r = 2 === a ? s.declTNode : 1 === a ? i[6] : null), null === r))
            return -1;
          if ((n++, (i = i[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function h(e, t, n) {
        !(function Va(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Ke) && (r = n[Ke]),
            null == r && (r = n[Ke] = ho++);
          const i = 255 & r;
          t.data[e + (i >> 5)] |= 1 << i;
        })(e, t, n);
      }
      function u(e, t, n) {
        if (n & St.Optional) return e;
        oe(t, "NodeInjector");
      }
      function m(e, t, n, r) {
        if (
          (n & St.Optional && void 0 === r && (r = null),
          0 == (n & (St.Self | St.Host)))
        ) {
          const i = e[9],
            s = wn(void 0);
          try {
            return i ? i.get(t, r, n & St.Optional) : In(t, r, n & St.Optional);
          } finally {
            wn(s);
          }
        }
        return u(r, t, n);
      }
      function E(e, t, n, r = St.Default, i) {
        if (null !== e) {
          const s = (function Xt(e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(Ke) ? e[Ke] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : G) : t;
          })(n);
          if ("function" == typeof s) {
            if (!At(t, e, r)) return r & St.Host ? u(i, n, r) : m(t, n, r, i);
            try {
              const a = s(r);
              if (null != a || r & St.Optional) return a;
              oe(n);
            } finally {
              gn();
            }
          } else if ("number" == typeof s) {
            let a = null,
              f = go(e, t),
              g = -1,
              D = r & St.Host ? t[16][6] : null;
            for (
              (-1 === f || r & St.SkipSelf) &&
              ((g = -1 === f ? po(e, t) : t[f + 8]),
              -1 !== g && yn(r, !1)
                ? ((a = t[1]), (f = rs(g)), (t = is(g, t)))
                : (f = -1));
              -1 !== f;

            ) {
              const w = t[1];
              if (Mt(s, f, w.data)) {
                const N = re(f, t, n, a, r, D);
                if (N !== b) return N;
              }
              (g = t[f + 8]),
                -1 !== g && yn(r, t[1].data[f + 8] === D) && Mt(s, f, t)
                  ? ((a = w), (f = rs(g)), (t = is(g, t)))
                  : (f = -1);
            }
          }
        }
        return m(t, n, r, i);
      }
      const b = {};
      function G() {
        return new sn(kn(), $e());
      }
      function re(e, t, n, r, i, s) {
        const a = t[1],
          f = a.data[e + 8],
          w = Fe(
            f,
            a,
            n,
            null == r ? xr(f) && fo : r != a && 0 != (3 & f.type),
            i & St.Host && s === f
          );
        return null !== w ? dt(t, a, w, f) : b;
      }
      function Fe(e, t, n, r, i) {
        const s = e.providerIndexes,
          a = t.data,
          f = 1048575 & s,
          g = e.directiveStart,
          w = s >> 20,
          te = i ? f + w : e.directiveEnd;
        for (let _e = r ? f : f + w; _e < te; _e++) {
          const Be = a[_e];
          if ((_e < g && n === Be) || (_e >= g && Be.type === n)) return _e;
        }
        if (i) {
          const _e = a[g];
          if (_e && Jn(_e) && _e.type === n) return g;
        }
        return null;
      }
      function dt(e, t, n, r) {
        let i = e[n];
        const s = t.data;
        if (
          (function Sr(e) {
            return e instanceof Pn;
          })(i)
        ) {
          const a = i;
          a.resolving &&
            (function Ze(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new Ae(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(He(s[n]));
          const f = _s(a.canSeeViewProviders);
          a.resolving = !0;
          const g = a.injectImpl ? wn(a.injectImpl) : null;
          At(e, r, St.Default);
          try {
            (i = e[n] = a.factory(void 0, s, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function Hi(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: s,
                  } = t.type.prototype;
                  if (r) {
                    const a = Ci(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  i &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, i),
                    s &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, s));
                })(n, s[n], t);
          } finally {
            null !== g && wn(g), _s(f), (a.resolving = !1), gn();
          }
        }
        return i;
      }
      function Mt(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function yn(e, t) {
        return !(e & St.Self || (e & St.Host && t));
      }
      class sn {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return E(this._tNode, this._lView, t, r, n);
        }
      }
      function Qr(e) {
        return jn(() => {
          const t = e.prototype.constructor,
            n = t[ee] || ci(t),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const s = i[ee] || ci(i);
            if (s && s !== n) return s;
            i = Object.getPrototypeOf(i);
          }
          return (s) => new s();
        });
      }
      function ci(e) {
        return Oe(e)
          ? () => {
              const t = ci($(e));
              return t && t();
            }
          : kr(e);
      }
      function Ds(e) {
        return (function d(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const s = n[i];
              if (ui(s)) break;
              if (0 === s) i += 2;
              else if ("number" == typeof s)
                for (i++; i < r && "string" == typeof n[i]; ) i++;
              else {
                if (s === t) return n[i + 1];
                i += 2;
              }
            }
          }
          return null;
        })(kn(), e);
      }
      const ri = "__parameters__";
      function Rs(e, t, n) {
        return jn(() => {
          const r = (function Ha(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const i in r) this[i] = r[i];
              }
            };
          })(t);
          function i(...s) {
            if (this instanceof i) return r.apply(this, s), this;
            const a = new i(...s);
            return (f.annotation = a), f;
            function f(g, D, w) {
              const N = g.hasOwnProperty(ri)
                ? g[ri]
                : Object.defineProperty(g, ri, { value: [] })[ri];
              for (; N.length <= w; ) N.push(null);
              return (N[w] = N[w] || []).push(a), g;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      class rr {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = st({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const wp = new rr("AnalyzeForEntryComponents");
      function ii(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), ii(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function Mi(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Mi(n, t) : t(n)));
      }
      function ac(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Jo(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function vo(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function qr(e, t, n) {
        let r = Fs(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function bp(e, t, n, r) {
                let i = e.length;
                if (i == t) e.push(n, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = n);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > t; )
                    (e[i] = e[i - 2]), i--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function za(e, t) {
        const n = Fs(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Fs(e, t) {
        return (function cc(e, t, n) {
          let r = 0,
            i = e.length >> n;
          for (; i !== r; ) {
            const s = r + ((i - r) >> 1),
              a = e[s << n];
            if (t === a) return s << n;
            a > t ? (i = s) : (r = s + 1);
          }
          return ~(i << n);
        })(e, t, 1);
      }
      const _o = {},
        Ka = "__NG_DI_FLAG__",
        ta = "ngTempTokenPath",
        Lp = /\n/gm,
        fc = "__source",
        kp = J({ provide: String, useValue: J });
      let Eo;
      function hc(e) {
        const t = Eo;
        return (Eo = e), t;
      }
      function Bp(e, t = St.Default) {
        if (void 0 === Eo) throw new Ae(203, "");
        return null === Eo
          ? In(e, void 0, t)
          : Eo.get(e, t & St.Optional ? null : void 0, t);
      }
      function Dr(e, t = St.Default) {
        return (
          (function Cn() {
            return Xn;
          })() || Bp
        )($(e), t);
      }
      const pc = Dr;
      function Ya(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = $(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Ae(900, "");
            let i,
              s = St.Default;
            for (let a = 0; a < r.length; a++) {
              const f = r[a],
                g = jp(f);
              "number" == typeof g
                ? -1 === g
                  ? (i = f.token)
                  : (s |= g)
                : (i = f);
            }
            t.push(Dr(i, s));
          } else t.push(Dr(r));
        }
        return t;
      }
      function Do(e, t) {
        return (e[Ka] = t), (e.prototype[Ka] = t), e;
      }
      function jp(e) {
        return e[Ka];
      }
      const na = Do(
          Rs("Inject", (e) => ({ token: e })),
          -1
        ),
        Co = Do(Rs("Optional"), 8),
        Qa = Do(Rs("Self"), 2),
        xo = Do(Rs("SkipSelf"), 4);
      let ia;
      function Ls(e) {
        var t;
        return (
          (null ===
            (t = (function Za() {
              if (void 0 === ia && ((ia = null), jt.trustedTypes))
                try {
                  ia = jt.trustedTypes.createPolicy("angular", {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {}
              return ia;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(e)) || e
        );
      }
      class Cs {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class Xp extends Cs {
        getTypeName() {
          return "HTML";
        }
      }
      class Jp extends Cs {
        getTypeName() {
          return "Style";
        }
      }
      class em extends Cs {
        getTypeName() {
          return "Script";
        }
      }
      class tm extends Cs {
        getTypeName() {
          return "URL";
        }
      }
      class nm extends Cs {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function Wi(e) {
        return e instanceof Cs ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Ns(e, t) {
        const n = Cc(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === t;
      }
      function Cc(e) {
        return (e instanceof Cs && e.getTypeName()) || null;
      }
      function rm(e) {
        return new Xp(e);
      }
      function im(e) {
        return new Jp(e);
      }
      function sm(e) {
        return new em(e);
      }
      function om(e) {
        return new tm(e);
      }
      function am(e) {
        return new nm(e);
      }
      class lm {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              Ls(t),
              "text/html"
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch (n) {
            return null;
          }
        }
      }
      class um {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              )),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(n);
            const r = this.inertDocument.createElement("body");
            n.appendChild(r);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          if ("content" in n) return (n.innerHTML = Ls(t)), n;
          const r = this.inertDocument.createElement("body");
          return (
            (r.innerHTML = Ls(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(r),
            r
          );
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let i = n.length - 1; 0 < i; i--) {
            const a = n.item(i).name;
            ("xmlns:ns1" === a || 0 === a.indexOf("ns1:")) &&
              t.removeAttribute(a);
          }
          let r = t.firstChild;
          for (; r; )
            r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r),
              (r = r.nextSibling);
        }
      }
      const dm =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        fm =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function wo(e) {
        return (e = String(e)).match(dm) || e.match(fm) ? e : "unsafe:" + e;
      }
      function bi(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function So(...e) {
        const t = {};
        for (const n of e)
          for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const wc = bi("area,br,col,hr,img,wbr"),
        Sc = bi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Mc = bi("rp,rt"),
        Ja = So(
          wc,
          So(
            Sc,
            bi(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          So(
            Mc,
            bi(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          So(Mc, Sc)
        ),
        el = bi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        tl = bi("srcset"),
        bc = So(
          el,
          tl,
          bi(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          bi(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        hm = bi("script,style,template");
      class gm {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let i = this.checkClobberedElement(n, n.nextSibling);
                if (i) {
                  n = i;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!Ja.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !hm.hasOwnProperty(n);
          this.buf.push("<"), this.buf.push(n);
          const r = t.attributes;
          for (let i = 0; i < r.length; i++) {
            const s = r.item(i),
              a = s.name,
              f = a.toLowerCase();
            if (!bc.hasOwnProperty(f)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let g = s.value;
            el[f] && (g = wo(g)),
              tl[f] &&
                ((e = g),
                (g = (e = String(e))
                  .split(",")
                  .map((t) => wo(t.trim()))
                  .join(", "))),
              this.buf.push(" ", a, '="', Tc(g), '"');
          }
          var e;
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          Ja.hasOwnProperty(n) &&
            !wc.hasOwnProperty(n) &&
            (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(Tc(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const pm = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        mm = /([^\#-~ |!])/g;
      function Tc(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(pm, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(mm, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let oa;
      function Oc(e, t) {
        let n = null;
        try {
          oa =
            oa ||
            (function xc(e) {
              const t = new um(e);
              return (function cm() {
                try {
                  return !!new window.DOMParser().parseFromString(
                    Ls(""),
                    "text/html"
                  );
                } catch (e) {
                  return !1;
                }
              })()
                ? new lm(t)
                : t;
            })(e);
          let r = t ? String(t) : "";
          n = oa.getInertBodyElement(r);
          let i = 5,
            s = r;
          do {
            if (0 === i)
              throw new Error(
                "Failed to sanitize html because the input is unstable"
              );
            i--, (r = s), (s = n.innerHTML), (n = oa.getInertBodyElement(r));
          } while (r !== s);
          return Ls(new gm().sanitizeChildren(nl(n) || n));
        } finally {
          if (n) {
            const r = nl(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function nl(e) {
        return "content" in e &&
          (function ym(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var ir = (() => (
        ((ir = ir || {})[(ir.NONE = 0)] = "NONE"),
        (ir[(ir.HTML = 1)] = "HTML"),
        (ir[(ir.STYLE = 2)] = "STYLE"),
        (ir[(ir.SCRIPT = 3)] = "SCRIPT"),
        (ir[(ir.URL = 4)] = "URL"),
        (ir[(ir.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        ir
      ))();
      function rl(e) {
        const t = (function Mo() {
          const e = $e();
          return e && e[12];
        })();
        return t
          ? t.sanitize(ir.URL, e) || ""
          : Ns(e, "URL")
          ? Wi(e)
          : wo(Pe(e));
      }
      const Fc = "__ngContext__";
      function Or(e, t) {
        e[Fc] = t;
      }
      function sl(e) {
        const t = (function bo(e) {
          return e[Fc] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function al(e) {
        return e.ngOriginalError;
      }
      function Pm(e, ...t) {
        e.error(...t);
      }
      class aa {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            r = (function Fm(e) {
              return (e && e.ngErrorLogger) || Pm;
            })(t);
          r(this._console, "ERROR", t),
            n && r(this._console, "ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && al(t);
          for (; n && al(n); ) n = al(n);
          return n || null;
        }
      }
      const $m = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(jt))();
      function Ti(e) {
        return e instanceof Function ? e() : e;
      }
      var Oi = (() => (
        ((Oi = Oi || {})[(Oi.Important = 1)] = "Important"),
        (Oi[(Oi.DashCase = 2)] = "DashCase"),
        Oi
      ))();
      function ul(e, t) {
        return undefined(e, t);
      }
      function To(e) {
        const t = e[3];
        return Bt(t) ? t[3] : t;
      }
      function cl(e) {
        return Vc(e[13]);
      }
      function dl(e) {
        return Vc(e[4]);
      }
      function Vc(e) {
        for (; null !== e && !Bt(e); ) e = e[4];
        return e;
      }
      function Bs(e, t, n, r, i) {
        if (null != r) {
          let s,
            a = !1;
          Bt(r) ? (s = r) : Zt(r) && ((a = !0), (r = r[0]));
          const f = y(r);
          0 === e && null !== n
            ? null == i
              ? Yc(t, n, f)
              : xs(t, n, f, i || null, !0)
            : 1 === e && null !== n
            ? xs(t, n, f, i || null, !0)
            : 2 === e
            ? (function td(e, t, n) {
                const r = la(e, t);
                r &&
                  (function iy(e, t, n, r) {
                    Fn(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, f, a)
            : 3 === e && t.destroyNode(f),
            null != s &&
              (function ay(e, t, n, r, i) {
                const s = n[7];
                s !== y(n) && Bs(t, e, r, s, i);
                for (let f = 10; f < n.length; f++) {
                  const g = n[f];
                  Oo(g[1], g, e, t, r, s);
                }
              })(t, e, s, n, i);
        }
      }
      function hl(e, t, n) {
        if (Fn(e)) return e.createElement(t, n);
        {
          const r =
            null !== n
              ? (function zr(e) {
                  const t = e.toLowerCase();
                  return "svg" === t
                    ? "http://www.w3.org/2000/svg"
                    : "math" === t
                    ? "http://www.w3.org/1998/MathML/"
                    : null;
                })(n)
              : null;
          return null === r ? e.createElement(t) : e.createElementNS(r, t);
        }
      }
      function $c(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          i = t[3];
        1024 & t[2] && ((t[2] &= -1025), Er(i, -1)), n.splice(r, 1);
      }
      function gl(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const i = r[17];
          null !== i && i !== e && $c(i, r), t > 0 && (e[n - 1][4] = r[4]);
          const s = Jo(e, 10 + t);
          !(function qm(e, t) {
            Oo(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const a = s[19];
          null !== a && a.detachView(s[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function zc(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          Fn(n) && n.destroyNode && Oo(e, t, n, 3, null, null),
            (function Jm(e) {
              let t = e[13];
              if (!t) return pl(e[1], e);
              for (; t; ) {
                let n = null;
                if (Zt(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Zt(t) && pl(t[1], t), (t = t[3]);
                  null === t && (t = e), Zt(t) && pl(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function pl(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function ry(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof Pn)) {
                    const s = n[r + 1];
                    if (Array.isArray(s))
                      for (let a = 0; a < s.length; a += 2) {
                        const f = i[s[a]],
                          g = s[a + 1];
                        try {
                          g.call(f);
                        } finally {
                        }
                      }
                    else
                      try {
                        s.call(i);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function ny(e, t) {
              const n = e.cleanup,
                r = t[7];
              let i = -1;
              if (null !== n)
                for (let s = 0; s < n.length - 1; s += 2)
                  if ("string" == typeof n[s]) {
                    const a = n[s + 1],
                      f = "function" == typeof a ? a(t) : y(t[a]),
                      g = r[(i = n[s + 2])],
                      D = n[s + 3];
                    "boolean" == typeof D
                      ? f.removeEventListener(n[s], g, D)
                      : D >= 0
                      ? r[(i = D)]()
                      : r[(i = -D)].unsubscribe(),
                      (s += 2);
                  } else {
                    const a = r[(i = n[s + 1])];
                    n[s].call(a);
                  }
              if (null !== r) {
                for (let s = i + 1; s < r.length; s++) r[s]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && Fn(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && Bt(t[3])) {
            n !== t[3] && $c(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function Wc(e, t, n) {
        return (function Kc(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const i = e.data[r.directiveStart].encapsulation;
            if (i === at.None || i === at.Emulated) return null;
          }
          return Ue(r, n);
        })(e, t.parent, n);
      }
      function xs(e, t, n, r, i) {
        Fn(e) ? e.insertBefore(t, n, r, i) : t.insertBefore(n, r, i);
      }
      function Yc(e, t, n) {
        Fn(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function Qc(e, t, n, r, i) {
        null !== r ? xs(e, t, n, r, i) : Yc(e, t, n);
      }
      function la(e, t) {
        return Fn(e) ? e.parentNode(t) : t.parentNode;
      }
      function qc(e, t, n) {
        return Xc(e, t, n);
      }
      let Xc = function Zc(e, t, n) {
        return 40 & e.type ? Ue(e, n) : null;
      };
      function ua(e, t, n, r) {
        const i = Wc(e, r, t),
          s = t[11],
          f = qc(r.parent || t[6], r, t);
        if (null != i)
          if (Array.isArray(n))
            for (let g = 0; g < n.length; g++) Qc(s, i, n[g], f, !1);
          else Qc(s, i, n, f, !1);
      }
      function ca(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Ue(t, e);
          if (4 & n) return yl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return ca(e, r);
            {
              const i = e[t.index];
              return Bt(i) ? yl(-1, i) : y(i);
            }
          }
          if (32 & n) return ul(t, e)() || y(e[t.index]);
          {
            const r = ed(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : ca(To(e[16]), r)
              : ca(e, t.next);
          }
        }
        return null;
      }
      function ed(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function yl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[1].firstChild;
          if (null !== i) return ca(r, i);
        }
        return t[7];
      }
      function vl(e, t, n, r, i, s, a) {
        for (; null != n; ) {
          const f = r[n.index],
            g = n.type;
          if (
            (a && 0 === t && (f && Or(y(f), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & g) vl(e, t, n.child, r, i, s, !1), Bs(t, e, i, f, s);
            else if (32 & g) {
              const D = ul(n, r);
              let w;
              for (; (w = D()); ) Bs(t, e, i, w, s);
              Bs(t, e, i, f, s);
            } else 16 & g ? nd(e, t, r, n, i, s) : Bs(t, e, i, f, s);
          n = a ? n.projectionNext : n.next;
        }
      }
      function Oo(e, t, n, r, i, s) {
        vl(n, r, e.firstChild, t, i, s, !1);
      }
      function nd(e, t, n, r, i, s) {
        const a = n[16],
          g = a[6].projection[r.projection];
        if (Array.isArray(g))
          for (let D = 0; D < g.length; D++) Bs(t, e, i, g[D], s);
        else vl(e, t, g, a[3], i, s, !0);
      }
      function rd(e, t, n) {
        Fn(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function _l(e, t, n) {
        Fn(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function id(e, t, n) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const s = t.length;
            if (i + s === r || e.charCodeAt(i + s) <= 32) return i;
          }
          n = i + 1;
        }
      }
      const sd = "ng-template";
      function uy(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let i = e[r++];
          if (n && "class" === i) {
            if (((i = e[r]), -1 !== id(i.toLowerCase(), t, 0))) return !0;
          } else if (1 === i) {
            for (; r < e.length && "string" == typeof (i = e[r++]); )
              if (i.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function od(e) {
        return 4 === e.type && e.value !== sd;
      }
      function cy(e, t, n) {
        return t === (4 !== e.type || n ? e.value : sd);
      }
      function dy(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          s = (function gy(e) {
            for (let t = 0; t < e.length; t++) if (ui(e[t])) return t;
            return e.length;
          })(i);
        let a = !1;
        for (let f = 0; f < t.length; f++) {
          const g = t[f];
          if ("number" != typeof g) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== g && !cy(e, g, n)) || ("" === g && 1 === t.length))
                ) {
                  if (di(r)) return !1;
                  a = !0;
                }
              } else {
                const D = 8 & r ? g : t[++f];
                if (8 & r && null !== e.attrs) {
                  if (!uy(e.attrs, D, n)) {
                    if (di(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const N = fy(8 & r ? "class" : g, i, od(e), n);
                if (-1 === N) {
                  if (di(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== D) {
                  let te;
                  te = N > s ? "" : i[N + 1].toLowerCase();
                  const _e = 8 & r ? te : null;
                  if ((_e && -1 !== id(_e, D, 0)) || (2 & r && D !== te)) {
                    if (di(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !di(r) && !di(g)) return !1;
            if (a && di(g)) continue;
            (a = !1), (r = g | (1 & r));
          }
        }
        return di(r) || a;
      }
      function di(e) {
        return 0 == (1 & e);
      }
      function fy(e, t, n, r) {
        if (null === t) return -1;
        let i = 0;
        if (r || !n) {
          let s = !1;
          for (; i < t.length; ) {
            const a = t[i];
            if (a === e) return i;
            if (3 === a || 6 === a) s = !0;
            else {
              if (1 === a || 2 === a) {
                let f = t[++i];
                for (; "string" == typeof f; ) f = t[++i];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                i += 4;
                continue;
              }
            }
            i += s ? 1 : 2;
          }
          return -1;
        }
        return (function py(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function ad(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (dy(e, t[r], n)) return !0;
        return !1;
      }
      function my(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function ld(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function yy(e) {
        let t = e[0],
          n = 1,
          r = 2,
          i = "",
          s = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              const f = e[++n];
              i += "[" + a + (f.length > 0 ? '="' + f + '"' : "") + "]";
            } else 8 & r ? (i += "." + a) : 4 & r && (i += " " + a);
          else
            "" !== i && !di(a) && ((t += ld(s, i)), (i = "")),
              (r = a),
              (s = s || !di(r));
          n++;
        }
        return "" !== i && (t += ld(s, i)), t;
      }
      const zt = {};
      function ud(e) {
        cd(tn(), $e(), rn() + e, Gi());
      }
      function cd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const s = e.preOrderCheckHooks;
            null !== s && Si(t, s, n);
          } else {
            const s = e.preOrderHooks;
            null !== s && $i(t, s, 0, n);
          }
        wr(n);
      }
      function da(e, t) {
        return (e << 17) | (t << 2);
      }
      function fi(e) {
        return (e >> 17) & 32767;
      }
      function El(e) {
        return 2 | e;
      }
      function Ki(e) {
        return (131068 & e) >> 2;
      }
      function Dl(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Cl(e) {
        return 1 | e;
      }
      function Dd(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r],
              s = n[r + 1];
            if (-1 !== s) {
              const a = e.data[s];
              ke(i), a.contentQueries(2, t[s], s);
            }
          }
      }
      function Io(e, t, n, r, i, s, a, f, g, D) {
        const w = t.blueprint.slice();
        return (
          (w[0] = i),
          (w[2] = 140 | r),
          br(w),
          (w[3] = w[15] = e),
          (w[8] = n),
          (w[10] = a || (e && e[10])),
          (w[11] = f || (e && e[11])),
          (w[12] = g || (e && e[12]) || null),
          (w[9] = D || (e && e[9]) || null),
          (w[6] = s),
          (w[16] = 2 == t.type ? e[16] : w),
          w
        );
      }
      function js(e, t, n, r, i) {
        let s = e.data[t];
        if (null === s)
          (s = (function Il(e, t, n, r, i) {
            const s = Ts(),
              a = ps(),
              g = (e.data[t] = (function Ly(e, t, n, r, i, s) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: i,
                  attrs: s,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? s : s && s.parent, n, t, r, i));
            return (
              null === e.firstChild && (e.firstChild = g),
              null !== s &&
                (a
                  ? null == s.child && null !== g.parent && (s.child = g)
                  : null === s.next && (s.next = g)),
              g
            );
          })(e, t, n, r, i)),
            (function c() {
              return Ot.lFrame.inI18n;
            })() && (s.flags |= 64);
        else if (64 & s.type) {
          (s.type = n), (s.value = r), (s.attrs = i);
          const a = (function Wr() {
            const e = Ot.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          s.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return Ur(s, !0), s;
      }
      function Us(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let s = 0; s < n; s++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function Ro(e, t, n) {
        Rt(t);
        try {
          const r = e.viewQuery;
          null !== r && Ul(1, r, n);
          const i = e.template;
          null !== i && Cd(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Dd(e, t),
            e.staticViewQueries && Ul(2, e.viewQuery, n);
          const s = e.components;
          null !== s &&
            (function Ry(e, t) {
              for (let n = 0; n < t.length; n++) Jy(e, t[n]);
            })(t, s);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Vn();
        }
      }
      function Gs(e, t, n, r) {
        const i = t[2];
        if (256 == (256 & i)) return;
        Rt(t);
        const s = Gi();
        try {
          br(t),
            (function uo(e) {
              return (Ot.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && Cd(e, t, n, 2, r);
          const a = 3 == (3 & i);
          if (!s)
            if (a) {
              const D = e.preOrderCheckHooks;
              null !== D && Si(t, D, null);
            } else {
              const D = e.preOrderHooks;
              null !== D && $i(t, D, 0, null), Dt(t, 0);
            }
          if (
            ((function Zy(e) {
              for (let t = cl(e); null !== t; t = dl(t)) {
                if (!t[2]) continue;
                const n = t[9];
                for (let r = 0; r < n.length; r++) {
                  const i = n[r],
                    s = i[3];
                  0 == (1024 & i[2]) && Er(s, 1), (i[2] |= 1024);
                }
              }
            })(t),
            (function qy(e) {
              for (let t = cl(e); null !== t; t = dl(t))
                for (let n = 10; n < t.length; n++) {
                  const r = t[n],
                    i = r[1];
                  Gn(r) && Gs(i, r, i.template, r[8]);
                }
            })(t),
            null !== e.contentQueries && Dd(e, t),
            !s)
          )
            if (a) {
              const D = e.contentCheckHooks;
              null !== D && Si(t, D);
            } else {
              const D = e.contentHooks;
              null !== D && $i(t, D, 1), Dt(t, 1);
            }
          !(function Oy(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const i = n[r];
                  if (i < 0) wr(~i);
                  else {
                    const s = i,
                      a = n[++r],
                      f = n[++r];
                    A(a, s), f(2, t[s]);
                  }
                }
              } finally {
                wr(-1);
              }
          })(e, t);
          const f = e.components;
          null !== f &&
            (function Iy(e, t) {
              for (let n = 0; n < t.length; n++) Xy(e, t[n]);
            })(t, f);
          const g = e.viewQuery;
          if ((null !== g && Ul(2, g, r), !s))
            if (a) {
              const D = e.viewCheckHooks;
              null !== D && Si(t, D);
            } else {
              const D = e.viewHooks;
              null !== D && $i(t, D, 2), Dt(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            s || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), Er(t[3], -1));
        } finally {
          Vn();
        }
      }
      function Fy(e, t, n, r) {
        const i = t[10],
          s = !Gi(),
          a = Jt(t);
        try {
          s && !a && i.begin && i.begin(), a && Ro(e, t, r), Gs(e, t, n, r);
        } finally {
          s && !a && i.end && i.end();
        }
      }
      function Cd(e, t, n, r, i) {
        const s = rn(),
          a = 2 & r;
        try {
          wr(-1), a && t.length > 20 && cd(e, t, 20, Gi()), n(r, i);
        } finally {
          wr(s);
        }
      }
      function xd(e, t, n) {
        if (bn(t)) {
          const i = t.directiveEnd;
          for (let s = t.directiveStart; s < i; s++) {
            const a = e.data[s];
            a.contentQueries && a.contentQueries(1, n[s], s);
          }
        }
      }
      function Rl(e, t, n) {
        !ns() ||
          ((function Vy(e, t, n, r) {
            const i = n.directiveStart,
              s = n.directiveEnd;
            e.firstCreatePass || Es(n, t), Or(r, t);
            const a = n.initialInputs;
            for (let f = i; f < s; f++) {
              const g = e.data[f],
                D = Jn(g);
              D && Ky(t, n, g);
              const w = dt(t, e, f, n);
              Or(w, t),
                null !== a && Yy(0, f - i, w, g, 0, a),
                D && (Gt(n.index, t)[8] = w);
            }
          })(e, t, n, Ue(n, t)),
          128 == (128 & n.flags) &&
            (function Hy(e, t, n) {
              const r = n.directiveStart,
                i = n.directiveEnd,
                a = n.index,
                f = (function P() {
                  return Ot.lFrame.currentDirectiveIndex;
                })();
              try {
                wr(a);
                for (let g = r; g < i; g++) {
                  const D = e.data[g],
                    w = t[g];
                  q(g),
                    (null !== D.hostBindings ||
                      0 !== D.hostVars ||
                      null !== D.hostAttrs) &&
                      Id(D, w);
                }
              } finally {
                wr(-1), q(f);
              }
            })(e, t, n));
      }
      function Fl(e, t, n = Ue) {
        const r = t.localNames;
        if (null !== r) {
          let i = t.index + 1;
          for (let s = 0; s < r.length; s += 2) {
            const a = r[s + 1],
              f = -1 === a ? n(t, e) : e[a];
            e[i++] = f;
          }
        }
      }
      function Ad(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = ga(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function ga(e, t, n, r, i, s, a, f, g, D) {
        const w = 20 + r,
          N = w + i,
          te = (function Py(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : zt);
            return n;
          })(w, N),
          _e = "function" == typeof D ? D() : D;
        return (te[1] = {
          type: e,
          blueprint: te,
          template: n,
          queries: null,
          viewQuery: f,
          declTNode: t,
          data: te.slice().fill(null, w),
          bindingStartIndex: w,
          expandoStartIndex: N,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof s ? s() : s,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: g,
          consts: _e,
          incompleteFirstPass: !1,
        });
      }
      function Md(e, t, n, r) {
        const i = kd(t);
        null === n
          ? i.push(r)
          : (i.push(n), e.firstCreatePass && Bd(e).push(r, i.length - 1));
      }
      function bd(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const i = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, i)
              : (n[r] = [t, i]);
          }
        return n;
      }
      function Zr(e, t, n, r, i, s, a, f) {
        const g = Ue(t, n);
        let w,
          D = t.inputs;
        !f && null != D && (w = D[r])
          ? (Gd(e, n, w, r, i),
            xr(t) &&
              (function By(e, t) {
                const n = Gt(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function ky(e) {
              return "class" === e
                ? "className"
                : "for" === e
                ? "htmlFor"
                : "formaction" === e
                ? "formAction"
                : "innerHtml" === e
                ? "innerHTML"
                : "readonly" === e
                ? "readOnly"
                : "tabindex" === e
                ? "tabIndex"
                : e;
            })(r)),
            (i = null != a ? a(i, t.value || "", r) : i),
            Fn(s)
              ? s.setProperty(g, r, i)
              : Fr(r) || (g.setProperty ? g.setProperty(r, i) : (g[r] = i)));
      }
      function Pl(e, t, n, r) {
        let i = !1;
        if (ns()) {
          const s = (function $y(e, t, n) {
              const r = e.directiveRegistry;
              let i = null;
              if (r)
                for (let s = 0; s < r.length; s++) {
                  const a = r[s];
                  ad(n, a.selectors, !1) &&
                    (i || (i = []),
                    h(Es(n, t), e, a.type),
                    Jn(a) ? (Rd(e, n), i.unshift(a)) : i.push(a));
                }
              return i;
            })(e, t, n),
            a = null === r ? null : { "": -1 };
          if (null !== s) {
            (i = !0), Fd(n, e.data.length, s.length);
            for (let w = 0; w < s.length; w++) {
              const N = s[w];
              N.providersResolver && N.providersResolver(N);
            }
            let f = !1,
              g = !1,
              D = Us(e, t, s.length, null);
            for (let w = 0; w < s.length; w++) {
              const N = s[w];
              (n.mergedAttrs = vs(n.mergedAttrs, N.hostAttrs)),
                Pd(e, n, t, D, N),
                Wy(D, N, a),
                null !== N.contentQueries && (n.flags |= 8),
                (null !== N.hostBindings ||
                  null !== N.hostAttrs ||
                  0 !== N.hostVars) &&
                  (n.flags |= 128);
              const te = N.type.prototype;
              !f &&
                (te.ngOnChanges || te.ngOnInit || te.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (f = !0)),
                !g &&
                  (te.ngOnChanges || te.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (g = !0)),
                D++;
            }
            !(function Ny(e, t) {
              const r = t.directiveEnd,
                i = e.data,
                s = t.attrs,
                a = [];
              let f = null,
                g = null;
              for (let D = t.directiveStart; D < r; D++) {
                const w = i[D],
                  N = w.inputs,
                  te = null === s || od(t) ? null : Qy(N, s);
                a.push(te), (f = bd(N, D, f)), (g = bd(w.outputs, D, g));
              }
              null !== f &&
                (f.hasOwnProperty("class") && (t.flags |= 16),
                f.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = a),
                (t.inputs = f),
                (t.outputs = g);
            })(e, n);
          }
          a &&
            (function zy(e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let i = 0; i < t.length; i += 2) {
                  const s = n[t[i + 1]];
                  if (null == s) throw new Ae(-301, !1);
                  r.push(t[i], s);
                }
              }
            })(n, r, a);
        }
        return (n.mergedAttrs = vs(n.mergedAttrs, n.attrs)), i;
      }
      function Od(e, t, n, r, i, s) {
        const a = s.hostBindings;
        if (a) {
          let f = e.hostBindingOpCodes;
          null === f && (f = e.hostBindingOpCodes = []);
          const g = ~t.index;
          (function Gy(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(f) != g && f.push(g),
            f.push(r, i, a);
        }
      }
      function Id(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Rd(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Wy(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Jn(t) && (n[""] = e);
        }
      }
      function Fd(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Pd(e, t, n, r, i) {
        e.data[r] = i;
        const s = i.factory || (i.factory = kr(i.type)),
          a = new Pn(s, Jn(i), null);
        (e.blueprint[r] = a),
          (n[r] = a),
          Od(e, t, 0, r, Us(e, n, i.hostVars, zt), i);
      }
      function Ky(e, t, n) {
        const r = Ue(t, e),
          i = Ad(n),
          s = e[10],
          a = pa(
            e,
            Io(
              e,
              i,
              null,
              n.onPush ? 64 : 16,
              r,
              t,
              s,
              s.createRenderer(r, n),
              null,
              null
            )
          );
        e[t.index] = a;
      }
      function Ii(e, t, n, r, i, s) {
        const a = Ue(e, t);
        !(function Ll(e, t, n, r, i, s, a) {
          if (null == s)
            Fn(e) ? e.removeAttribute(t, i, n) : t.removeAttribute(i);
          else {
            const f = null == a ? Pe(s) : a(s, r || "", i);
            Fn(e)
              ? e.setAttribute(t, i, f, n)
              : n
              ? t.setAttributeNS(n, i, f)
              : t.setAttribute(i, f);
          }
        })(t[11], a, s, e.value, n, r, i);
      }
      function Yy(e, t, n, r, i, s) {
        const a = s[t];
        if (null !== a) {
          const f = r.setInput;
          for (let g = 0; g < a.length; ) {
            const D = a[g++],
              w = a[g++],
              N = a[g++];
            null !== f ? r.setInput(n, N, D, w) : (n[w] = N);
          }
        }
      }
      function Qy(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const i = t[r];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              e.hasOwnProperty(i) &&
                (null === n && (n = []), n.push(i, e[i], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Ld(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function Xy(e, t) {
        const n = Gt(t, e);
        if (Gn(n)) {
          const r = n[1];
          80 & n[2] ? Gs(r, n, r.template, n[8]) : n[5] > 0 && Nl(n);
        }
      }
      function Nl(e) {
        for (let r = cl(e); null !== r; r = dl(r))
          for (let i = 10; i < r.length; i++) {
            const s = r[i];
            if (1024 & s[2]) {
              const a = s[1];
              Gs(a, s, a.template, s[8]);
            } else s[5] > 0 && Nl(s);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = Gt(n[r], e);
            Gn(i) && i[5] > 0 && Nl(i);
          }
      }
      function Jy(e, t) {
        const n = Gt(t, e),
          r = n[1];
        (function ev(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Ro(r, n, n[8]);
      }
      function pa(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function kl(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = To(e);
          if (Jr(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function jl(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          Gs(e, t, e.template, n);
        } catch (i) {
          throw (Ud(t, i), i);
        } finally {
          r.end && r.end();
        }
      }
      function Nd(e) {
        !(function Bl(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = sl(n),
              i = r[1];
            Fy(i, r, i.template, n);
          }
        })(e[8]);
      }
      function Ul(e, t, n) {
        ke(0), t(e, n);
      }
      const iv = (() => Promise.resolve(null))();
      function kd(e) {
        return e[7] || (e[7] = []);
      }
      function Bd(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Ud(e, t) {
        const n = e[9],
          r = n ? n.get(aa, null) : null;
        r && r.handleError(t);
      }
      function Gd(e, t, n, r, i) {
        for (let s = 0; s < n.length; ) {
          const a = n[s++],
            f = n[s++],
            g = t[a],
            D = e.data[a];
          null !== D.setInput ? D.setInput(g, i, r, f) : (g[f] = i);
        }
      }
      function Yi(e, t, n) {
        const r = Ie(t, e);
        !(function Hc(e, t, n) {
          Fn(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], r, n);
      }
      function ma(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          s = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const f = t[a];
            "number" == typeof f
              ? (s = f)
              : 1 == s
              ? (i = L(i, f))
              : 2 == s && (r = L(r, f + ": " + t[++a] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      const Gl = new rr("INJECTOR", -1);
      class Vd {
        get(t, n = _o) {
          if (n === _o) {
            const r = new Error(`NullInjectorError: No provider for ${Y(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      const Vl = new rr("Set Injector scope."),
        Fo = {},
        av = {};
      let Hl;
      function Hd() {
        return void 0 === Hl && (Hl = new Vd()), Hl;
      }
      function $d(e, t = null, n = null, r) {
        const i = zd(e, t, n, r);
        return i._resolveInjectorDefTypes(), i;
      }
      function zd(e, t = null, n = null, r) {
        return new lv(e, n, t || Hd(), r);
      }
      class lv {
        constructor(t, n, r, i = null) {
          (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          n && Mi(n, (f) => this.processProvider(f, t, n)),
            Mi([t], (f) => this.processInjectorType(f, [], s)),
            this.records.set(Gl, Vs(void 0, this));
          const a = this.records.get(Vl);
          (this.scope = null != a ? a.value : null),
            (this.source = i || ("object" == typeof t ? null : Y(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, n = _o, r = St.Default) {
          this.assertNotDestroyed();
          const i = hc(this),
            s = wn(void 0);
          try {
            if (!(r & St.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const g =
                  (function mv(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof rr)
                    );
                  })(t) && Qt(t);
                (f = g && this.injectableDefInScope(g) ? Vs($l(t), Fo) : null),
                  this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & St.Self ? Hd() : this.parent).get(
              t,
              (n = r & St.Optional && n === _o ? null : n)
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[ta] = a[ta] || []).unshift(Y(t)), i)) throw a;
              return (function Up(e, t, n, r) {
                const i = e[ta];
                throw (
                  (t[fc] && i.unshift(t[fc]),
                  (e.message = (function Gp(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let i = Y(t);
                    if (Array.isArray(t)) i = t.map(Y).join(" -> ");
                    else if ("object" == typeof t) {
                      let s = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let f = t[a];
                          s.push(
                            a +
                              ":" +
                              ("string" == typeof f ? JSON.stringify(f) : Y(f))
                          );
                        }
                      i = `{${s.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(
                      Lp,
                      "\n  "
                    )}`;
                  })("\n" + e.message, i, n, r)),
                  (e.ngTokenPath = i),
                  (e[ta] = null),
                  e)
                );
              })(a, t, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            wn(s), hc(i);
          }
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((r, i) => t.push(Y(i))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Ae(205, !1);
        }
        processInjectorType(t, n, r) {
          if (!(t = $(t))) return !1;
          let i = vn(t);
          const s = (null == i && t.ngModule) || void 0,
            a = void 0 === s ? t : s,
            f = -1 !== r.indexOf(a);
          if ((void 0 !== s && (i = vn(s)), null == i)) return !1;
          if (null != i.imports && !f) {
            let w;
            r.push(a);
            try {
              Mi(i.imports, (N) => {
                this.processInjectorType(N, n, r) &&
                  (void 0 === w && (w = []), w.push(N));
              });
            } finally {
            }
            if (void 0 !== w)
              for (let N = 0; N < w.length; N++) {
                const { ngModule: te, providers: _e } = w[N];
                Mi(_e, (Be) => this.processProvider(Be, te, _e || I));
              }
          }
          this.injectorDefTypes.add(a);
          const g = kr(a) || (() => new a());
          this.records.set(a, Vs(g, Fo));
          const D = i.providers;
          if (null != D && !f) {
            const w = t;
            Mi(D, (N) => this.processProvider(N, w, D));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, n, r) {
          let i = Hs((t = $(t))) ? t : $(t && t.provide);
          const s = (function cv(e, t, n) {
            return Kd(e) ? Vs(void 0, e.useValue) : Vs(Wd(e), Fo);
          })(t);
          if (Hs(t) || !0 !== t.multi) this.records.get(i);
          else {
            let a = this.records.get(i);
            a ||
              ((a = Vs(void 0, Fo, !0)),
              (a.factory = () => Ya(a.multi)),
              this.records.set(i, a)),
              (i = t),
              a.multi.push(t);
          }
          this.records.set(i, s);
        }
        hydrate(t, n) {
          return (
            n.value === Fo && ((n.value = av), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function pv(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this.onDestroy.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = $(t.providedIn);
          return "string" == typeof n
            ? "any" === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function $l(e) {
        const t = Qt(e),
          n = null !== t ? t.factory : kr(e);
        if (null !== n) return n;
        if (e instanceof rr) throw new Ae(204, !1);
        if (e instanceof Function)
          return (function uv(e) {
            const t = e.length;
            if (t > 0) throw (vo(t, "?"), new Ae(204, !1));
            const n = (function An(e) {
              const t = e && (e[qt] || e[zn]);
              if (t) {
                const n = (function Nn(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Ae(204, !1);
      }
      function Wd(e, t, n) {
        let r;
        if (Hs(e)) {
          const i = $(e);
          return kr(i) || $l(i);
        }
        if (Kd(e)) r = () => $(e.useValue);
        else if (
          (function fv(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Ya(e.deps || []));
        else if (
          (function dv(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => Dr($(e.useExisting));
        else {
          const i = $(e && (e.useClass || e.provide));
          if (
            !(function gv(e) {
              return !!e.deps;
            })(e)
          )
            return kr(i) || $l(i);
          r = () => new i(...Ya(e.deps));
        }
        return r;
      }
      function Vs(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Kd(e) {
        return null !== e && "object" == typeof e && kp in e;
      }
      function Hs(e) {
        return "function" == typeof e;
      }
      let hi = (() => {
        class e {
          static create(n, r) {
            var i;
            if (Array.isArray(n)) return $d({ name: "" }, r, n, "");
            {
              const s = null !== (i = n.name) && void 0 !== i ? i : "";
              return $d({ name: s }, n.parent, n.providers, s);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = _o),
          (e.NULL = new Vd()),
          (e.ɵprov = st({
            token: e,
            providedIn: "any",
            factory: () => Dr(Gl),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function Av(e, t) {
        Vr(sl(e)[1], kn());
      }
      function Kl(e) {
        let t = (function af(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let i;
          if (Jn(e)) i = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new Ae(903, "");
            i = t.ɵdir;
          }
          if (i) {
            if (n) {
              r.push(i);
              const a = e;
              (a.inputs = Yl(e.inputs)),
                (a.declaredInputs = Yl(e.declaredInputs)),
                (a.outputs = Yl(e.outputs));
              const f = i.hostBindings;
              f && bv(e, f);
              const g = i.viewQuery,
                D = i.contentQueries;
              if (
                (g && Sv(e, g),
                D && Mv(e, D),
                W(e.inputs, i.inputs),
                W(e.declaredInputs, i.declaredInputs),
                W(e.outputs, i.outputs),
                Jn(i) && i.data.animation)
              ) {
                const w = e.data;
                w.animation = (w.animation || []).concat(i.data.animation);
              }
            }
            const s = i.features;
            if (s)
              for (let a = 0; a < s.length; a++) {
                const f = s[a];
                f && f.ngInherit && f(e), f === Kl && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function wv(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = t += i.hostVars),
              (i.hostAttrs = vs(i.hostAttrs, (n = vs(n, i.hostAttrs))));
          }
        })(r);
      }
      function Yl(e) {
        return e === M ? {} : e === I ? [] : e;
      }
      function Sv(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function Mv(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, i, s) => {
              t(r, i, s), n(r, i, s);
            }
          : t;
      }
      function bv(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      let ya = null;
      function $s() {
        if (!ya) {
          const e = jt.Symbol;
          if (e && e.iterator) ya = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (ya = r);
            }
          }
        }
        return ya;
      }
      function Po(e) {
        return (
          !!Ql(e) && (Array.isArray(e) || (!(e instanceof Map) && $s() in e))
        );
      }
      function Ql(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Ri(e, t, n) {
        return (e[t] = n);
      }
      function Ir(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function ql(e, t, n, r) {
        const i = $e();
        return Ir(i, x(), t) && (tn(), Ii(dn(), i, e, t, n, r)), ql;
      }
      function Ws(e, t, n, r) {
        return Ir(e, x(), n) ? t + Pe(n) + r : zt;
      }
      function yf(e, t, n, r, i, s, a, f) {
        const g = $e(),
          D = tn(),
          w = e + 20,
          N = D.firstCreatePass
            ? (function Lv(e, t, n, r, i, s, a, f, g) {
                const D = t.consts,
                  w = js(t, e, 4, a || null, Tn(D, f));
                Pl(t, n, w, Tn(D, g)), Vr(t, w);
                const N = (w.tViews = ga(
                  2,
                  w,
                  r,
                  i,
                  s,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  D
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, w),
                    (N.queries = t.queries.embeddedTView(w))),
                  w
                );
              })(w, D, g, t, n, r, i, s, a)
            : D.data[w];
        Ur(N, !1);
        const te = g[11].createComment("");
        ua(D, g, te, N),
          Or(te, g),
          pa(g, (g[w] = Ld(te, g, te, N))),
          vr(N) && Rl(D, g, N),
          null != a && Fl(g, N, f);
      }
      function vf(e) {
        return un(
          (function ms() {
            return Ot.lFrame.contextLView;
          })(),
          20 + e
        );
      }
      function No(e, t = St.Default) {
        const n = $e();
        return null === n ? Dr(e, t) : E(kn(), n, $(e), t);
      }
      function Tf() {
        throw new Error("invalid");
      }
      function tu(e, t, n) {
        const r = $e();
        return Ir(r, x(), t) && Zr(tn(), dn(), r, e, t, r[11], n, !1), tu;
      }
      function nu(e, t, n, r, i) {
        const a = i ? "class" : "style";
        Gd(e, n, t.inputs[a], a, r);
      }
      function Ea(e, t, n, r) {
        const i = $e(),
          s = tn(),
          a = 20 + e,
          f = i[11],
          g = (i[a] = hl(
            f,
            t,
            (function Os() {
              return Ot.lFrame.currentNamespace;
            })()
          )),
          D = s.firstCreatePass
            ? (function n_(e, t, n, r, i, s, a) {
                const f = t.consts,
                  D = js(t, e, 2, i, Tn(f, s));
                return (
                  Pl(t, n, D, Tn(f, a)),
                  null !== D.attrs && ma(D, D.attrs, !1),
                  null !== D.mergedAttrs && ma(D, D.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, D),
                  D
                );
              })(a, s, i, 0, t, n, r)
            : s.data[a];
        Ur(D, !0);
        const w = D.mergedAttrs;
        null !== w && Mr(f, g, w);
        const N = D.classes;
        null !== N && _l(f, g, N);
        const te = D.styles;
        return (
          null !== te && rd(f, g, te),
          64 != (64 & D.flags) && ua(s, i, g, D),
          0 ===
            (function es() {
              return Ot.lFrame.elementDepthCount;
            })() && Or(g, i),
          (function wi() {
            Ot.lFrame.elementDepthCount++;
          })(),
          vr(D) && (Rl(s, i, D), xd(s, D, i)),
          null !== r && Fl(i, D),
          Ea
        );
      }
      function Da() {
        let e = kn();
        ps() ? ai() : ((e = e.parent), Ur(e, !1));
        const t = e;
        !(function ts() {
          Ot.lFrame.elementDepthCount--;
        })();
        const n = tn();
        return (
          n.firstCreatePass && (Vr(n, e), bn(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function ys(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            nu(n, t, $e(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function co(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            nu(n, t, $e(), t.stylesWithoutHost, !1),
          Da
        );
      }
      function ru(e, t, n, r) {
        return Ea(e, t, n, r), Da(), ru;
      }
      function Ca(e, t, n) {
        const r = $e(),
          i = tn(),
          s = e + 20,
          a = i.firstCreatePass
            ? (function r_(e, t, n, r, i) {
                const s = t.consts,
                  a = Tn(s, r),
                  f = js(t, e, 8, "ng-container", a);
                return (
                  null !== a && ma(f, a, !0),
                  Pl(t, n, f, Tn(s, i)),
                  null !== t.queries && t.queries.elementStart(t, f),
                  f
                );
              })(s, i, r, t, n)
            : i.data[s];
        Ur(a, !0);
        const f = (r[s] = r[11].createComment(""));
        return (
          ua(i, r, f, a),
          Or(f, r),
          vr(a) && (Rl(i, r, a), xd(i, a, r)),
          null != n && Fl(r, a),
          Ca
        );
      }
      function xa() {
        let e = kn();
        const t = tn();
        return (
          ps() ? ai() : ((e = e.parent), Ur(e, !1)),
          t.firstCreatePass && (Vr(t, e), bn(e) && t.queries.elementEnd(e)),
          xa
        );
      }
      function If() {
        return $e();
      }
      function iu(e) {
        return !!e && "function" == typeof e.then;
      }
      function Rf(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const Ff = Rf;
      function su(e, t, n, r) {
        const i = $e(),
          s = tn(),
          a = kn();
        return (
          (function Lf(e, t, n, r, i, s, a, f) {
            const g = vr(r),
              w = e.firstCreatePass && Bd(e),
              N = t[8],
              te = kd(t);
            let _e = !0;
            if (3 & r.type || f) {
              const lt = Ue(r, t),
                xt = f ? f(lt) : lt,
                We = te.length,
                It = f ? (on) => f(y(on[r.index])) : r.index;
              if (Fn(n)) {
                let on = null;
                if (
                  (!f &&
                    g &&
                    (on = (function i_(e, t, n, r) {
                      const i = e.cleanup;
                      if (null != i)
                        for (let s = 0; s < i.length - 1; s += 2) {
                          const a = i[s];
                          if (a === n && i[s + 1] === r) {
                            const f = t[7],
                              g = i[s + 2];
                            return f.length > g ? f[g] : null;
                          }
                          "string" == typeof a && (s += 2);
                        }
                      return null;
                    })(e, t, i, r.index)),
                  null !== on)
                )
                  ((on.__ngLastListenerFn__ || on).__ngNextListenerFn__ = s),
                    (on.__ngLastListenerFn__ = s),
                    (_e = !1);
                else {
                  s = ou(r, t, N, s, !1);
                  const xn = n.listen(xt, i, s);
                  te.push(s, xn), w && w.push(i, It, We, We + 1);
                }
              } else
                (s = ou(r, t, N, s, !0)),
                  xt.addEventListener(i, s, a),
                  te.push(s),
                  w && w.push(i, It, We, a);
            } else s = ou(r, t, N, s, !1);
            const Be = r.outputs;
            let Xe;
            if (_e && null !== Be && (Xe = Be[i])) {
              const lt = Xe.length;
              if (lt)
                for (let xt = 0; xt < lt; xt += 2) {
                  const Xr = t[Xe[xt]][Xe[xt + 1]].subscribe(s),
                    Ms = te.length;
                  te.push(s, Xr), w && w.push(i, r.index, Ms, -(Ms + 1));
                }
            }
          })(s, i, i[11], a, e, t, !!n, r),
          su
        );
      }
      function Nf(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (i) {
          return Ud(e, i), !1;
        }
      }
      function ou(e, t, n, r, i) {
        return function s(a) {
          if (a === Function) return r;
          const f = 2 & e.flags ? Gt(e.index, t) : t;
          0 == (32 & t[2]) && kl(f);
          let g = Nf(t, 0, r, a),
            D = s.__ngNextListenerFn__;
          for (; D; ) (g = Nf(t, 0, D, a) && g), (D = D.__ngNextListenerFn__);
          return i && !1 === g && (a.preventDefault(), (a.returnValue = !1)), g;
        };
      }
      function kf(e = 1) {
        return (function qn(e) {
          return (Ot.lFrame.contextLView = (function gr(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Ot.lFrame.contextLView))[8];
        })(e);
      }
      function s_(e, t) {
        let n = null;
        const r = (function hy(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let i = 0; i < t.length; i++) {
          const s = t[i];
          if ("*" !== s) {
            if (null === r ? ad(e, s, !0) : my(r, s)) return i;
          } else n = i;
        }
        return n;
      }
      function Bf(e) {
        const t = $e()[16][6];
        if (!t.projection) {
          const r = (t.projection = vo(e ? e.length : 1, null)),
            i = r.slice();
          let s = t.child;
          for (; null !== s; ) {
            const a = e ? s_(s, e) : 0;
            null !== a &&
              (i[a] ? (i[a].projectionNext = s) : (r[a] = s), (i[a] = s)),
              (s = s.next);
          }
        }
      }
      function jf(e, t = 0, n) {
        const r = $e(),
          i = tn(),
          s = js(i, 20 + e, 16, null, n || null);
        null === s.projection && (s.projection = t),
          ai(),
          64 != (64 & s.flags) &&
            (function oy(e, t, n) {
              nd(t[11], 0, t, n, Wc(e, n, t), qc(n.parent || t[6], n, t));
            })(i, r, s);
      }
      function Qf(e, t, n, r, i) {
        const s = e[n + 1],
          a = null === t;
        let f = r ? fi(s) : Ki(s),
          g = !1;
        for (; 0 !== f && (!1 === g || a); ) {
          const w = e[f + 1];
          l_(e[f], t) && ((g = !0), (e[f + 1] = r ? Cl(w) : El(w))),
            (f = r ? fi(w) : Ki(w));
        }
        g && (e[n + 1] = r ? El(s) : Cl(s));
      }
      function l_(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && Fs(e, t) >= 0)
        );
      }
      const yr = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function qf(e) {
        return e.substring(yr.key, yr.keyEnd);
      }
      function Zf(e, t) {
        const n = yr.textEnd;
        return n === t
          ? -1
          : ((t = yr.keyEnd =
              (function f_(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (yr.key = t), n)),
            to(e, t, n));
      }
      function to(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function lu(e, t, n) {
        return pi(e, t, n, !1), lu;
      }
      function uu(e, t) {
        return pi(e, t, null, !0), uu;
      }
      function Pi(e, t) {
        for (
          let n = (function c_(e) {
            return (
              (function Jf(e) {
                (yr.key = 0),
                  (yr.keyEnd = 0),
                  (yr.value = 0),
                  (yr.valueEnd = 0),
                  (yr.textEnd = e.length);
              })(e),
              Zf(e, to(e, 0, yr.textEnd))
            );
          })(t);
          n >= 0;
          n = Zf(t, n)
        )
          qr(e, qf(t), !0);
      }
      function pi(e, t, n, r) {
        const i = $e(),
          s = tn(),
          a = l(2);
        s.firstUpdatePass && rh(s, e, a, r),
          t !== zt &&
            Ir(i, a, t) &&
            sh(
              s,
              s.data[rn()],
              i,
              i[11],
              e,
              (i[a + 1] = (function x_(e, t) {
                return (
                  null == e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = Y(Wi(e)))),
                  e
                );
              })(t, n)),
              r,
              a
            );
      }
      function nh(e, t) {
        return t >= e.expandoStartIndex;
      }
      function rh(e, t, n, r) {
        const i = e.data;
        if (null === i[n + 1]) {
          const s = i[rn()],
            a = nh(e, n);
          ah(s, r) && null === t && !a && (t = !1),
            (t = (function y_(e, t, n, r) {
              const i = (function X(e) {
                const t = Ot.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let s = r ? t.residualClasses : t.residualStyles;
              if (null === i)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = ko((n = cu(null, e, t, n, r)), t.attrs, r)),
                  (s = null));
              else {
                const a = t.directiveStylingLast;
                if (-1 === a || e[a] !== i)
                  if (((n = cu(i, e, t, n, r)), null === s)) {
                    let g = (function v_(e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== Ki(r)) return e[fi(r)];
                    })(e, t, r);
                    void 0 !== g &&
                      Array.isArray(g) &&
                      ((g = cu(null, e, t, g[1], r)),
                      (g = ko(g, t.attrs, r)),
                      (function __(e, t, n, r) {
                        e[fi(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, g));
                  } else
                    s = (function E_(e, t, n) {
                      let r;
                      const i = t.directiveEnd;
                      for (let s = 1 + t.directiveStylingLast; s < i; s++)
                        r = ko(r, e[s].hostAttrs, n);
                      return ko(r, t.attrs, n);
                    })(e, t, r);
              }
              return (
                void 0 !== s &&
                  (r ? (t.residualClasses = s) : (t.residualStyles = s)),
                n
              );
            })(i, s, t, r)),
            (function o_(e, t, n, r, i, s) {
              let a = s ? t.classBindings : t.styleBindings,
                f = fi(a),
                g = Ki(a);
              e[r] = n;
              let w,
                D = !1;
              if (Array.isArray(n)) {
                const N = n;
                (w = N[1]), (null === w || Fs(N, w) > 0) && (D = !0);
              } else w = n;
              if (i)
                if (0 !== g) {
                  const te = fi(e[f + 1]);
                  (e[r + 1] = da(te, f)),
                    0 !== te && (e[te + 1] = Dl(e[te + 1], r)),
                    (e[f + 1] = (function Ey(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[f + 1], r));
                } else
                  (e[r + 1] = da(f, 0)),
                    0 !== f && (e[f + 1] = Dl(e[f + 1], r)),
                    (f = r);
              else
                (e[r + 1] = da(g, 0)),
                  0 === f ? (f = r) : (e[g + 1] = Dl(e[g + 1], r)),
                  (g = r);
              D && (e[r + 1] = El(e[r + 1])),
                Qf(e, w, r, !0),
                Qf(e, w, r, !1),
                (function a_(e, t, n, r, i) {
                  const s = i ? e.residualClasses : e.residualStyles;
                  null != s &&
                    "string" == typeof t &&
                    Fs(s, t) >= 0 &&
                    (n[r + 1] = Cl(n[r + 1]));
                })(t, w, e, r, s),
                (a = da(f, g)),
                s ? (t.classBindings = a) : (t.styleBindings = a);
            })(i, s, t, n, a, r);
        }
      }
      function cu(e, t, n, r, i) {
        let s = null;
        const a = n.directiveEnd;
        let f = n.directiveStylingLast;
        for (
          -1 === f ? (f = n.directiveStart) : f++;
          f < a && ((s = t[f]), (r = ko(r, s.hostAttrs, i)), s !== e);

        )
          f++;
        return null !== e && (n.directiveStylingLast = f), r;
      }
      function ko(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            "number" == typeof a
              ? (i = a)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                qr(e, a, !!n || t[++s]));
          }
        return void 0 === e ? null : e;
      }
      function sh(e, t, n, r, i, s, a, f) {
        if (!(3 & t.type)) return;
        const g = e.data,
          D = g[f + 1];
        Aa(
          (function hd(e) {
            return 1 == (1 & e);
          })(D)
            ? oh(g, t, n, i, Ki(D), a)
            : void 0
        ) ||
          (Aa(s) ||
            ((function fd(e) {
              return 2 == (2 & e);
            })(D) &&
              (s = oh(g, null, n, i, f, a))),
          (function ly(e, t, n, r, i) {
            const s = Fn(e);
            if (t)
              i
                ? s
                  ? e.addClass(n, r)
                  : n.classList.add(r)
                : s
                ? e.removeClass(n, r)
                : n.classList.remove(r);
            else {
              let a = -1 === r.indexOf("-") ? void 0 : Oi.DashCase;
              if (null == i)
                s ? e.removeStyle(n, r, a) : n.style.removeProperty(r);
              else {
                const f = "string" == typeof i && i.endsWith("!important");
                f && ((i = i.slice(0, -10)), (a |= Oi.Important)),
                  s
                    ? e.setStyle(n, r, i, a)
                    : n.style.setProperty(r, i, f ? "important" : "");
              }
            }
          })(r, a, Ie(rn(), n), i, s));
      }
      function oh(e, t, n, r, i, s) {
        const a = null === t;
        let f;
        for (; i > 0; ) {
          const g = e[i],
            D = Array.isArray(g),
            w = D ? g[1] : g,
            N = null === w;
          let te = n[i + 1];
          te === zt && (te = N ? I : void 0);
          let _e = N ? za(te, r) : w === r ? te : void 0;
          if ((D && !Aa(_e) && (_e = za(g, r)), Aa(_e) && ((f = _e), a)))
            return f;
          const Be = e[i + 1];
          i = a ? fi(Be) : Ki(Be);
        }
        if (null !== t) {
          let g = s ? t.residualClasses : t.residualStyles;
          null != g && (f = za(g, r));
        }
        return f;
      }
      function Aa(e) {
        return void 0 !== e;
      }
      function ah(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function lh(e, t = "") {
        const n = $e(),
          r = tn(),
          i = e + 20,
          s = r.firstCreatePass ? js(r, i, 1, t, null) : r.data[i],
          a = (n[i] = (function fl(e, t) {
            return Fn(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        ua(r, n, a, s), Ur(s, !1);
      }
      function du(e) {
        return wa("", e, ""), du;
      }
      function wa(e, t, n) {
        const r = $e(),
          i = Ws(r, e, t, n);
        return i !== zt && Yi(r, rn(), i), wa;
      }
      function yh(e, t, n) {
        !(function mi(e, t, n, r) {
          const i = tn(),
            s = l(2);
          i.firstUpdatePass && rh(i, null, s, r);
          const a = $e();
          if (n !== zt && Ir(a, s, n)) {
            const f = i.data[rn()];
            if (ah(f, r) && !nh(i, s)) {
              let g = r ? f.classesWithoutHost : f.stylesWithoutHost;
              null !== g && (n = L(g, n || "")), nu(i, f, a, n, r);
            } else
              !(function C_(e, t, n, r, i, s, a, f) {
                i === zt && (i = I);
                let g = 0,
                  D = 0,
                  w = 0 < i.length ? i[0] : null,
                  N = 0 < s.length ? s[0] : null;
                for (; null !== w || null !== N; ) {
                  const te = g < i.length ? i[g + 1] : void 0,
                    _e = D < s.length ? s[D + 1] : void 0;
                  let Xe,
                    Be = null;
                  w === N
                    ? ((g += 2), (D += 2), te !== _e && ((Be = N), (Xe = _e)))
                    : null === N || (null !== w && w < N)
                    ? ((g += 2), (Be = w))
                    : ((D += 2), (Be = N), (Xe = _e)),
                    null !== Be && sh(e, t, n, r, Be, Xe, a, f),
                    (w = g < i.length ? i[g] : null),
                    (N = D < s.length ? s[D] : null);
                }
              })(
                i,
                f,
                a,
                a[11],
                a[s + 1],
                (a[s + 1] = (function D_(e, t, n) {
                  if (null == n || "" === n) return I;
                  const r = [],
                    i = Wi(n);
                  if (Array.isArray(i))
                    for (let s = 0; s < i.length; s++) e(r, i[s], !0);
                  else if ("object" == typeof i)
                    for (const s in i) i.hasOwnProperty(s) && e(r, s, i[s]);
                  else "string" == typeof i && t(r, i);
                  return r;
                })(e, t, n)),
                r,
                s
              );
          }
        })(qr, Pi, Ws($e(), e, t, n), !0);
      }
      function fu(e, t, n) {
        const r = $e();
        return Ir(r, x(), t) && Zr(tn(), dn(), r, e, t, r[11], n, !0), fu;
      }
      const ws = void 0;
      var V_ = [
        "en",
        [["a", "p"], ["AM", "PM"], ws],
        [["AM", "PM"], ws, ws],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        ws,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        ws,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", ws, "{1} 'at' {0}", ws],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function G_(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let no = {};
      function hu(e) {
        const t = (function H_(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Th(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = Th(r)), n)) return n;
        if ("en" === r) return V_;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function bh(e) {
        return hu(e)[Pt.PluralCase];
      }
      function Th(e) {
        return (
          e in no ||
            (no[e] =
              jt.ng &&
              jt.ng.common &&
              jt.ng.common.locales &&
              jt.ng.common.locales[e]),
          no[e]
        );
      }
      var Pt = (() => (
        ((Pt = Pt || {})[(Pt.LocaleId = 0)] = "LocaleId"),
        (Pt[(Pt.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (Pt[(Pt.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (Pt[(Pt.DaysFormat = 3)] = "DaysFormat"),
        (Pt[(Pt.DaysStandalone = 4)] = "DaysStandalone"),
        (Pt[(Pt.MonthsFormat = 5)] = "MonthsFormat"),
        (Pt[(Pt.MonthsStandalone = 6)] = "MonthsStandalone"),
        (Pt[(Pt.Eras = 7)] = "Eras"),
        (Pt[(Pt.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (Pt[(Pt.WeekendRange = 9)] = "WeekendRange"),
        (Pt[(Pt.DateFormat = 10)] = "DateFormat"),
        (Pt[(Pt.TimeFormat = 11)] = "TimeFormat"),
        (Pt[(Pt.DateTimeFormat = 12)] = "DateTimeFormat"),
        (Pt[(Pt.NumberSymbols = 13)] = "NumberSymbols"),
        (Pt[(Pt.NumberFormats = 14)] = "NumberFormats"),
        (Pt[(Pt.CurrencyCode = 15)] = "CurrencyCode"),
        (Pt[(Pt.CurrencySymbol = 16)] = "CurrencySymbol"),
        (Pt[(Pt.CurrencyName = 17)] = "CurrencyName"),
        (Pt[(Pt.Currencies = 18)] = "Currencies"),
        (Pt[(Pt.Directionality = 19)] = "Directionality"),
        (Pt[(Pt.PluralCase = 20)] = "PluralCase"),
        (Pt[(Pt.ExtraData = 21)] = "ExtraData"),
        Pt
      ))();
      const Sa = "en-US";
      let Oh = Sa;
      function mu(e, t, n, r, i) {
        if (((e = $(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) mu(e[s], t, n, r, i);
        else {
          const s = tn(),
            a = $e();
          let f = Hs(e) ? e : $(e.provide),
            g = Wd(e);
          const D = kn(),
            w = 1048575 & D.providerIndexes,
            N = D.directiveStart,
            te = D.providerIndexes >> 20;
          if (Hs(e) || !e.multi) {
            const _e = new Pn(g, i, No),
              Be = vu(f, t, i ? w : w + te, N);
            -1 === Be
              ? (h(Es(D, a), s, f),
                yu(s, e, t.length),
                t.push(f),
                D.directiveStart++,
                D.directiveEnd++,
                i && (D.providerIndexes += 1048576),
                n.push(_e),
                a.push(_e))
              : ((n[Be] = _e), (a[Be] = _e));
          } else {
            const _e = vu(f, t, w + te, N),
              Be = vu(f, t, w, w + te),
              Xe = _e >= 0 && n[_e],
              lt = Be >= 0 && n[Be];
            if ((i && !lt) || (!i && !Xe)) {
              h(Es(D, a), s, f);
              const xt = (function GE(e, t, n, r, i) {
                const s = new Pn(e, n, No);
                return (
                  (s.multi = []),
                  (s.index = t),
                  (s.componentProviders = 0),
                  eg(s, i, r && !n),
                  s
                );
              })(i ? UE : jE, n.length, i, r, g);
              !i && lt && (n[Be].providerFactory = xt),
                yu(s, e, t.length, 0),
                t.push(f),
                D.directiveStart++,
                D.directiveEnd++,
                i && (D.providerIndexes += 1048576),
                n.push(xt),
                a.push(xt);
            } else yu(s, e, _e > -1 ? _e : Be, eg(n[i ? Be : _e], g, !i && r));
            !i && r && lt && n[Be].componentProviders++;
          }
        }
      }
      function yu(e, t, n, r) {
        const i = Hs(t),
          s = (function hv(e) {
            return !!e.useClass;
          })(t);
        if (i || s) {
          const g = (s ? $(t.useClass) : t).prototype.ngOnDestroy;
          if (g) {
            const D = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              const w = D.indexOf(n);
              -1 === w ? D.push(n, [r, g]) : D[w + 1].push(r, g);
            } else D.push(n, g);
          }
        }
      }
      function eg(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function vu(e, t, n, r) {
        for (let i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function jE(e, t, n, r) {
        return _u(this.multi, []);
      }
      function UE(e, t, n, r) {
        const i = this.multi;
        let s;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            f = dt(n, n[1], this.providerFactory.index, r);
          (s = f.slice(0, a)), _u(i, s);
          for (let g = a; g < f.length; g++) s.push(f[g]);
        } else (s = []), _u(i, s);
        return s;
      }
      function _u(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function tg(e, t = []) {
        return (n) => {
          n.providersResolver = (r, i) =>
            (function BE(e, t, n) {
              const r = tn();
              if (r.firstCreatePass) {
                const i = Jn(e);
                mu(n, r.data, r.blueprint, i, !0),
                  mu(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class ng {}
      class $E {
        resolveComponentFactory(t) {
          throw (function HE(e) {
            const t = Error(
              `No component factory found for ${Y(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Ia = (() => {
        class e {}
        return (e.NULL = new $E()), e;
      })();
      function zE() {
        return io(kn(), $e());
      }
      function io(e, t) {
        return new Vo(Ue(e, t));
      }
      let Vo = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = zE), e;
      })();
      function WE(e) {
        return e instanceof Vo ? e.nativeElement : e;
      }
      class ig {}
      let KE = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function QE() {
                const e = $e(),
                  n = Gt(kn().index, e);
                return (function YE(e) {
                  return e[11];
                })(Zt(n) ? n : e);
              })()),
            e
          );
        })(),
        qE = (() => {
          class e {}
          return (
            (e.ɵprov = st({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class sg {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const ZE = new sg("13.2.7"),
        Eu = {};
      function Ra(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const s = t[n.index];
          if ((null !== s && r.push(y(s)), Bt(s)))
            for (let f = 10; f < s.length; f++) {
              const g = s[f],
                D = g[1].firstChild;
              null !== D && Ra(g[1], g, D, r);
            }
          const a = n.type;
          if (8 & a) Ra(e, t, n.child, r);
          else if (32 & a) {
            const f = ul(n, t);
            let g;
            for (; (g = f()); ) r.push(g);
          } else if (16 & a) {
            const f = ed(t, n);
            if (Array.isArray(f)) r.push(...f);
            else {
              const g = To(t[16]);
              Ra(g[1], g, f, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      class Ho {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Ra(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Bt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (gl(t, r), Jo(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          zc(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Md(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          kl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          jl(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function nv(e, t, n) {
            Vi(!0);
            try {
              jl(e, t, n);
            } finally {
              Vi(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef) throw new Ae(902, "");
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Xm(e, t) {
              Oo(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new Ae(902, "");
          this._appRef = t;
        }
      }
      class XE extends Ho {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Nd(this._view);
        }
        checkNoChanges() {
          !(function rv(e) {
            Vi(!0);
            try {
              Nd(e);
            } finally {
              Vi(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      class og extends Ia {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = ae(t);
          return new Du(n, this.ngModule);
        }
      }
      function ag(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Du extends ng {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function vy(e) {
              return e.map(yy).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return ag(this.componentDef.inputs);
        }
        get outputs() {
          return ag(this.componentDef.outputs);
        }
        create(t, n, r, i) {
          const s = (i = i || this.ngModule)
              ? (function eD(e, t) {
                  return {
                    get: (n, r, i) => {
                      const s = e.get(n, Eu, i);
                      return s !== Eu || r === Eu ? s : t.get(n, r, i);
                    },
                  };
                })(t, i.injector)
              : t,
            a = s.get(ig, _),
            f = s.get(qE, null),
            g = a.createRenderer(null, this.componentDef),
            D = this.componentDef.selectors[0][0] || "div",
            w = r
              ? (function Sd(e, t, n) {
                  if (Fn(e)) return e.selectRootElement(t, n === at.ShadowDom);
                  let r = "string" == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ""), r;
                })(g, r, this.componentDef.encapsulation)
              : hl(
                  a.createRenderer(null, this.componentDef),
                  D,
                  (function JE(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(D)
                ),
            N = this.componentDef.onPush ? 576 : 528,
            te = (function sf(e, t) {
              return {
                components: [],
                scheduler: e || $m,
                clean: iv,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            _e = ga(0, null, null, 1, 0, null, null, null, null, null),
            Be = Io(null, _e, te, N, null, null, a, g, f, s);
          let Xe, lt;
          Rt(Be);
          try {
            const xt = (function nf(e, t, n, r, i, s) {
              const a = n[1];
              n[20] = e;
              const g = js(a, 20, 2, "#host", null),
                D = (g.mergedAttrs = t.hostAttrs);
              null !== D &&
                (ma(g, D, !0),
                null !== e &&
                  (Mr(i, e, D),
                  null !== g.classes && _l(i, e, g.classes),
                  null !== g.styles && rd(i, e, g.styles)));
              const w = r.createRenderer(e, t),
                N = Io(
                  n,
                  Ad(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  g,
                  r,
                  w,
                  s || null,
                  null
                );
              return (
                a.firstCreatePass &&
                  (h(Es(g, n), a, t.type), Rd(a, g), Fd(g, n.length, 1)),
                pa(n, N),
                (n[20] = N)
              );
            })(w, this.componentDef, Be, a, g);
            if (w)
              if (r) Mr(g, w, ["ng-version", ZE.full]);
              else {
                const { attrs: We, classes: It } = (function _y(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    i = 2;
                  for (; r < e.length; ) {
                    let s = e[r];
                    if ("string" == typeof s)
                      2 === i
                        ? "" !== s && t.push(s, e[++r])
                        : 8 === i && n.push(s);
                    else {
                      if (!di(i)) break;
                      i = s;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                We && Mr(g, w, We),
                  It && It.length > 0 && _l(g, w, It.join(" "));
              }
            if (((lt = mn(_e, 20)), void 0 !== n)) {
              const We = (lt.projection = []);
              for (let It = 0; It < this.ngContentSelectors.length; It++) {
                const on = n[It];
                We.push(null != on ? Array.from(on) : null);
              }
            }
            (Xe = (function rf(e, t, n, r, i) {
              const s = n[1],
                a = (function Uy(e, t, n) {
                  const r = kn();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Pd(e, r, t, Us(e, t, 1, null), n));
                  const i = dt(t, e, r.directiveStart, r);
                  Or(i, t);
                  const s = Ue(r, t);
                  return s && Or(s, t), i;
                })(s, n, t);
              if (
                (r.components.push(a),
                (e[8] = a),
                i && i.forEach((g) => g(a, t)),
                t.contentQueries)
              ) {
                const g = kn();
                t.contentQueries(1, a, g.directiveStart);
              }
              const f = kn();
              return (
                !s.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (wr(f.index),
                  Od(n[1], f, 0, f.directiveStart, f.directiveEnd, t),
                  Id(t, a)),
                a
              );
            })(xt, this.componentDef, Be, te, [Av])),
              Ro(_e, Be, null);
          } finally {
            Vn();
          }
          return new nD(this.componentType, Xe, io(lt, Be), Be, lt);
        }
      }
      class nD extends class VE {} {
        constructor(t, n, r, i, s) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = s),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new XE(i)),
            (this.componentType = t);
        }
        get injector() {
          return new sn(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      class so {}
      class lg {}
      const oo = new Map();
      class dg extends so {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new og(this));
          const r = _t(t);
          (this._bootstrapComponents = Ti(r.bootstrap)),
            (this._r3Injector = zd(
              t,
              n,
              [
                { provide: so, useValue: this },
                { provide: Ia, useValue: this.componentFactoryResolver },
              ],
              Y(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = hi.THROW_IF_NOT_FOUND, r = St.Default) {
          return t === hi || t === so || t === Gl
            ? this
            : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Cu extends lg {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== _t(t) &&
              (function iD(e) {
                const t = new Set();
                !(function n(r) {
                  const i = _t(r, !0),
                    s = i.id;
                  null !== s &&
                    ((function ug(e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${Y(
                            t
                          )} vs ${Y(t.name)}`
                        );
                    })(s, oo.get(s), r),
                    oo.set(s, r));
                  const a = Ti(i.imports);
                  for (const f of a) t.has(f) || (t.add(f), n(f));
                })(e);
              })(t);
        }
        create(t) {
          return new dg(this.moduleType, t);
        }
      }
      function fg(e, t, n) {
        const r = hr() + e,
          i = $e();
        return i[r] === zt
          ? Ri(i, r, n ? t.call(n) : t())
          : (function Lo(e, t) {
              return e[t];
            })(i, r);
      }
      function hg(e, t, n, r) {
        return gg($e(), hr(), e, t, n, r);
      }
      function gg(e, t, n, r, i, s) {
        const a = t + n;
        return Ir(e, a, i)
          ? Ri(e, a + 1, s ? r.call(s, i) : r(i))
          : (function $o(e, t) {
              const n = e[t];
              return n === zt ? void 0 : n;
            })(e, a + 1);
      }
      function _g(e, t) {
        const n = tn();
        let r;
        const i = e + 20;
        n.firstCreatePass
          ? ((r = (function hD(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[i] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy))
          : (r = n.data[i]);
        const s = r.factory || (r.factory = kr(r.type)),
          a = wn(No);
        try {
          const f = _s(!1),
            g = s();
          return (
            _s(f),
            (function Nv(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, $e(), i, g),
            g
          );
        } finally {
          wn(a);
        }
      }
      function Eg(e, t, n) {
        const r = e + 20,
          i = $e(),
          s = un(i, r);
        return (function zo(e, t) {
          return e[1].data[t].pure;
        })(i, r)
          ? gg(i, hr(), t, s.transform, n, s)
          : s.transform(n);
      }
      function xu(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Li = class vD extends o.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var i, s, a;
          let f = t,
            g = n || (() => null),
            D = r;
          if (t && "object" == typeof t) {
            const N = t;
            (f = null === (i = N.next) || void 0 === i ? void 0 : i.bind(N)),
              (g = null === (s = N.error) || void 0 === s ? void 0 : s.bind(N)),
              (D =
                null === (a = N.complete) || void 0 === a ? void 0 : a.bind(N));
          }
          this.__isAsync && ((g = xu(g)), f && (f = xu(f)), D && (D = xu(D)));
          const w = super.subscribe({ next: f, error: g, complete: D });
          return t instanceof C.w0 && t.add(w), w;
        }
      };
      function _D() {
        return this._results[$s()]();
      }
      class Fa {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = $s(),
            r = Fa.prototype;
          r[n] || (r[n] = _D);
        }
        get changes() {
          return this._changes || (this._changes = new Li());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const i = ii(t);
          (this._changesDetected = !(function Sp(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                s = t[r];
              if ((n && ((i = n(i)), (s = n(s))), s !== i)) return !1;
            }
            return !0;
          })(r._results, i, n)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      let Wo = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = CD), e;
      })();
      const ED = Wo,
        DD = class extends ED {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              r = Io(
                this._declarationLView,
                n,
                t,
                16,
                null,
                n.declTNode,
                null,
                null,
                null,
                null
              );
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const s = this._declarationLView[19];
            return (
              null !== s && (r[19] = s.createEmbeddedView(n)),
              Ro(n, r, t),
              new Ho(r)
            );
          }
        };
      function CD() {
        return Pa(kn(), $e());
      }
      function Pa(e, t) {
        return 4 & e.type ? new DD(t, e, io(e, t)) : null;
      }
      let La = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = xD), e;
      })();
      function xD() {
        return xg(kn(), $e());
      }
      const AD = La,
        Dg = class extends AD {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return io(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new sn(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = po(this._hostTNode, this._hostLView);
            if (qo(t)) {
              const n = is(t, this._hostLView),
                r = rs(t);
              return new sn(n[1].data[r + 8], n);
            }
            return new sn(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Cg(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            const i = t.createEmbeddedView(n || {});
            return this.insert(i, r), i;
          }
          createComponent(t, n, r, i, s) {
            const a =
              t &&
              !(function yo(e) {
                return "function" == typeof e;
              })(t);
            let f;
            if (a) f = n;
            else {
              const N = n || {};
              (f = N.index),
                (r = N.injector),
                (i = N.projectableNodes),
                (s = N.ngModuleRef);
            }
            const g = a ? t : new Du(ae(t)),
              D = r || this.parentInjector;
            if (!s && null == g.ngModule) {
              const te = (a ? D : this.parentInjector).get(so, null);
              te && (s = te);
            }
            const w = g.create(D, i, void 0, s);
            return this.insert(w.hostView, f), w;
          }
          insert(t, n) {
            const r = t._lView,
              i = r[1];
            if (
              (function cn(e) {
                return Bt(e[3]);
              })(r)
            ) {
              const w = this.indexOf(t);
              if (-1 !== w) this.detach(w);
              else {
                const N = r[3],
                  te = new Dg(N, N[6], N[3]);
                te.detach(te.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              a = this._lContainer;
            !(function ey(e, t, n, r) {
              const i = 10 + r,
                s = n.length;
              r > 0 && (n[i - 1][4] = t),
                r < s - 10
                  ? ((t[4] = n[i]), ac(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const a = t[17];
              null !== a &&
                n !== a &&
                (function ty(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(a, t);
              const f = t[19];
              null !== f && f.insertView(e), (t[2] |= 128);
            })(i, r, a, s);
            const f = yl(s, a),
              g = r[11],
              D = la(g, a[7]);
            return (
              null !== D &&
                (function Zm(e, t, n, r, i, s) {
                  (r[0] = i), (r[6] = t), Oo(e, r, n, 1, i, s);
                })(i, a[6], g, r, D, f),
              t.attachToViewContainerRef(),
              ac(Au(a), s, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Cg(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = gl(this._lContainer, n);
            r && (Jo(Au(this._lContainer), n), zc(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = gl(this._lContainer, n);
            return r && null != Jo(Au(this._lContainer), n) ? new Ho(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function Cg(e) {
        return e[8];
      }
      function Au(e) {
        return e[8] || (e[8] = []);
      }
      function xg(e, t) {
        let n;
        const r = t[e.index];
        if (Bt(r)) n = r;
        else {
          let i;
          if (8 & e.type) i = y(r);
          else {
            const s = t[11];
            i = s.createComment("");
            const a = Ue(e, t);
            xs(
              s,
              la(s, a),
              i,
              (function sy(e, t) {
                return Fn(e) ? e.nextSibling(t) : t.nextSibling;
              })(s, a),
              !1
            );
          }
          (t[e.index] = n = Ld(r, t, i, e)), pa(t, n);
        }
        return new Dg(n, e, t);
      }
      class wu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new wu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Su {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              i = [];
            for (let s = 0; s < r; s++) {
              const a = n.getByIndex(s);
              i.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new Su(i);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Rg(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Ag {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class Mu {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== n ? n.length : 0,
              s = this.getByIndex(r).embeddedTView(t, i);
            s &&
              ((s.indexInDeclarationView = r),
              null !== n ? n.push(s) : (n = [s]));
          }
          return null !== n ? new Mu(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class bu {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new bu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const s = r[i];
              this.matchTNodeWithReadOption(t, n, MD(n, s)),
                this.matchTNodeWithReadOption(t, n, Fe(n, t, s, !1, !1));
            }
          else
            r === Wo
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Fe(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === Vo || i === La || (i === Wo && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const s = Fe(n, t, i, !1, !1);
                null !== s && this.addMatch(n.index, s);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function MD(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function TD(e, t, n, r) {
        return -1 === n
          ? (function bD(e, t) {
              return 11 & e.type ? io(e, t) : 4 & e.type ? Pa(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function OD(e, t, n) {
              return n === Vo
                ? io(t, e)
                : n === Wo
                ? Pa(t, e)
                : n === La
                ? xg(t, e)
                : void 0;
            })(e, t, r)
          : dt(e, e[1], n, t);
      }
      function wg(e, t, n, r) {
        const i = t[19].queries[r];
        if (null === i.matches) {
          const s = e.data,
            a = n.matches,
            f = [];
          for (let g = 0; g < a.length; g += 2) {
            const D = a[g];
            f.push(D < 0 ? null : TD(t, s[D], a[g + 1], n.metadata.read));
          }
          i.matches = f;
        }
        return i.matches;
      }
      function Tu(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          s = i.matches;
        if (null !== s) {
          const a = wg(e, t, i, n);
          for (let f = 0; f < s.length; f += 2) {
            const g = s[f];
            if (g > 0) r.push(a[f / 2]);
            else {
              const D = s[f + 1],
                w = t[-g];
              for (let N = 10; N < w.length; N++) {
                const te = w[N];
                te[17] === te[3] && Tu(te[1], te, D, r);
              }
              if (null !== w[9]) {
                const N = w[9];
                for (let te = 0; te < N.length; te++) {
                  const _e = N[te];
                  Tu(_e[1], _e, D, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Sg(e) {
        const t = $e(),
          n = tn(),
          r = Ee();
        ke(r + 1);
        const i = Rg(n, r);
        if (e.dirty && Jt(t) === (2 == (2 & i.metadata.flags))) {
          if (null === i.matches) e.reset([]);
          else {
            const s = i.crossesNgTemplate ? Tu(n, t, r, []) : wg(n, t, i, r);
            e.reset(s, WE), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Mg(e, t, n) {
        const r = tn();
        r.firstCreatePass &&
          (Ig(r, new Ag(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          Og(r, $e(), t);
      }
      function bg(e, t, n, r) {
        const i = tn();
        if (i.firstCreatePass) {
          const s = kn();
          Ig(i, new Ag(t, n, r), s.index),
            (function RD(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        Og(i, $e(), n);
      }
      function Tg() {
        return (function ID(e, t) {
          return e[19].queries[t].queryList;
        })($e(), Ee());
      }
      function Og(e, t, n) {
        const r = new Fa(4 == (4 & n));
        Md(e, t, r, r.destroy),
          null === t[19] && (t[19] = new Su()),
          t[19].queries.push(new wu(r));
      }
      function Ig(e, t, n) {
        null === e.queries && (e.queries = new Mu()),
          e.queries.track(new bu(t, n));
      }
      function Rg(e, t) {
        return e.queries.getByIndex(t);
      }
      function Fg(e, t) {
        return Pa(e, t);
      }
      function Ba(...e) {}
      const qg = new rr("Application Initializer");
      let Lu = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Ba),
              (this.reject = Ba),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, i) => {
                (this.resolve = r), (this.reject = i);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let i = 0; i < this.appInits.length; i++) {
                const s = this.appInits[i]();
                if (iu(s)) n.push(s);
                else if (Ff(s)) {
                  const a = new Promise((f, g) => {
                    s.subscribe({ complete: f, error: g });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((i) => {
                this.reject(i);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dr(qg, 8));
          }),
          (e.ɵprov = st({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Zg = new rr("AppId", {
        providedIn: "root",
        factory: function Xg() {
          return `${Nu()}${Nu()}${Nu()}`;
        },
      });
      function Nu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Jg = new rr("Platform Initializer"),
        ep = new rr("Platform ID"),
        tp = new rr("appBootstrapListener");
      let np = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = st({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const ku = new rr("LocaleId", {
          providedIn: "root",
          factory: () =>
            pc(ku, St.Optional | St.SkipSelf) ||
            (function QD() {
              return (
                ("undefined" != typeof $localize && $localize.locale) || Sa
              );
            })(),
        }),
        qD = new rr("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      class ZD {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let XD = (() => {
        class e {
          compileModuleSync(n) {
            return new Cu(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              s = Ti(_t(n).declarations).reduce((a, f) => {
                const g = ae(f);
                return g && a.push(new Du(g)), a;
              }, []);
            return new ZD(r, s);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = st({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const eC = (() => Promise.resolve(0))();
      function Bu(e) {
        "undefined" == typeof Zone
          ? eC.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class yi {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Li(!1)),
            (this.onMicrotaskEmpty = new Li(!1)),
            (this.onStable = new Li(!1)),
            (this.onError = new Li(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && n),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function tC() {
              let e = jt.requestAnimationFrame,
                t = jt.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function iC(e) {
              const t = () => {
                !(function rC(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(jt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Uu(e),
                                (e.isCheckStableRunning = !0),
                                ju(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Uu(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, s, a, f) => {
                  try {
                    return rp(e), n.invokeTask(i, s, a, f);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      ip(e);
                  }
                },
                onInvoke: (n, r, i, s, a, f, g) => {
                  try {
                    return rp(e), n.invoke(i, s, a, f, g);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), ip(e);
                  }
                },
                onHasTask: (n, r, i, s) => {
                  n.hasTask(i, s),
                    r === i &&
                      ("microTask" == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          Uu(e),
                          ju(e))
                        : "macroTask" == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (n, r, i, s) => (
                  n.handleError(i, s),
                  e.runOutsideAngular(() => e.onError.emit(s)),
                  !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return (
            "undefined" != typeof Zone &&
            !0 === Zone.current.get("isAngularZone")
          );
        }
        static assertInAngularZone() {
          if (!yi.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (yi.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const s = this._inner,
            a = s.scheduleEventTask("NgZoneEvent: " + i, t, nC, Ba, Ba);
          try {
            return s.runTask(a, n, r);
          } finally {
            s.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const nC = {};
      function ju(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Uu(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function rp(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ip(e) {
        e._nesting--, ju(e);
      }
      class sC {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Li()),
            (this.onMicrotaskEmpty = new Li()),
            (this.onStable = new Li()),
            (this.onError = new Li());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, i) {
          return t.apply(n, r);
        }
      }
      let sp = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      yi.assertNotInAngularZone(),
                        Bu(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Bu(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, i) {
              let s = -1;
              r &&
                r > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== s
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: s, updateCb: i });
            }
            whenStable(n, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, r, i) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(Dr(yi));
            }),
            (e.ɵprov = st({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        op = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), Gu.addToWindow(this);
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return Gu.findTestabilityInTree(this, n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = st({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class oC {
        addToWindow(t) {}
        findTestabilityInTree(t, n, r) {
          return null;
        }
      }
      function aC(e) {
        Gu = e;
      }
      let vi,
        Gu = new oC();
      const ap = new rr("AllowMultipleToken");
      class cC {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function lp(e, t, n = []) {
        const r = `Platform: ${t}`,
          i = new rr(r);
        return (s = []) => {
          let a = up();
          if (!a || a.injector.get(ap, !1))
            if (e) e(n.concat(s).concat({ provide: i, useValue: !0 }));
            else {
              const f = n
                .concat(s)
                .concat(
                  { provide: i, useValue: !0 },
                  { provide: Vl, useValue: "platform" }
                );
              !(function dC(e) {
                if (vi && !vi.destroyed && !vi.injector.get(ap, !1))
                  throw new Ae(400, "");
                vi = e.get(cp);
                const t = e.get(Jg, null);
                t && t.forEach((n) => n());
              })(hi.create({ providers: f, name: r }));
            }
          return (function fC(e) {
            const t = up();
            if (!t) throw new Ae(401, "");
            return t;
          })();
        };
      }
      function up() {
        return vi && !vi.destroyed ? vi : null;
      }
      let cp = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const f = (function hC(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new sC()
                      : ("zone.js" === e ? void 0 : e) ||
                        new yi({
                          enableLongStackTrace: !1,
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(r ? r.ngZone : void 0, {
                ngZoneEventCoalescing: (r && r.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (r && r.ngZoneRunCoalescing) || !1,
              }),
              g = [{ provide: yi, useValue: f }];
            return f.run(() => {
              const D = hi.create({
                  providers: g,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                w = n.create(D),
                N = w.injector.get(aa, null);
              if (!N) throw new Ae(402, "");
              return (
                f.runOutsideAngular(() => {
                  const te = f.onError.subscribe({
                    next: (_e) => {
                      N.handleError(_e);
                    },
                  });
                  w.onDestroy(() => {
                    Hu(this._modules, w), te.unsubscribe();
                  });
                }),
                (function gC(e, t, n) {
                  try {
                    const r = n();
                    return iu(r)
                      ? r.catch((i) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(i)), i)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(N, f, () => {
                  const te = w.injector.get(Lu);
                  return (
                    te.runInitializers(),
                    te.donePromise.then(
                      () => (
                        (function K_(e) {
                          ot(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (Oh = e.toLowerCase().replace(/_/g, "-"));
                        })(w.injector.get(ku, Sa) || Sa),
                        this._moduleDoBootstrap(w),
                        w
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const i = dp({}, r);
            return (function lC(e, t, n) {
              const r = new Cu(n);
              return Promise.resolve(r);
            })(0, 0, n).then((s) => this.bootstrapModuleFactory(s, i));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(Vu);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((i) => r.bootstrap(i));
            else {
              if (!n.instance.ngDoBootstrap) throw new Ae(403, "");
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Ae(404, "");
            this._modules.slice().forEach((n) => n.destroy()),
              this._destroyListeners.forEach((n) => n()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dr(hi));
          }),
          (e.ɵprov = st({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function dp(e, t) {
        return Array.isArray(t)
          ? t.reduce(dp, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let Vu = (() => {
        class e {
          constructor(n, r, i, s, a) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = i),
              (this._componentFactoryResolver = s),
              (this._initStatus = a),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const f = new F.y((D) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    D.next(this._stable), D.complete();
                  });
              }),
              g = new F.y((D) => {
                let w;
                this._zone.runOutsideAngular(() => {
                  w = this._zone.onStable.subscribe(() => {
                    yi.assertNotInAngularZone(),
                      Bu(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), D.next(!0));
                      });
                  });
                });
                const N = this._zone.onUnstable.subscribe(() => {
                  yi.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        D.next(!1);
                      }));
                });
                return () => {
                  w.unsubscribe(), N.unsubscribe();
                };
              });
            this.isStable = (0, B.T)(f, g.pipe((0, U.B)()));
          }
          bootstrap(n, r) {
            if (!this._initStatus.done) throw new Ae(405, "");
            let i;
            (i =
              n instanceof ng
                ? n
                : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(i.componentType);
            const s = (function uC(e) {
                return e.isBoundToModule;
              })(i)
                ? void 0
                : this._injector.get(so),
              f = i.create(hi.NULL, [], r || i.selector, s),
              g = f.location.nativeElement,
              D = f.injector.get(sp, null),
              w = D && f.injector.get(op);
            return (
              D && w && w.registerApplication(g, D),
              f.onDestroy(() => {
                this.detachView(f.hostView),
                  Hu(this.components, f),
                  w && w.unregisterApplication(g);
              }),
              this._loadComponent(f),
              f
            );
          }
          tick() {
            if (this._runningTick) throw new Ae(101, "");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            Hu(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(tp, [])
                .concat(this._bootstrapListeners)
                .forEach((i) => i(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dr(yi), Dr(hi), Dr(aa), Dr(Ia), Dr(Lu));
          }),
          (e.ɵprov = st({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function Hu(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let hp = !0,
        gp = !1;
      function mC() {
        return (gp = !0), hp;
      }
      function yC() {
        if (gp)
          throw new Error("Cannot enable prod mode after platform setup.");
        hp = !1;
      }
      let vC = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = _C), e;
      })();
      function _C(e) {
        return (function EC(e, t, n) {
          if (xr(e) && !n) {
            const r = Gt(e.index, t);
            return new Ho(r, r);
          }
          return 47 & e.type ? new Ho(t[16], t) : null;
        })(kn(), $e(), 16 == (16 & e));
      }
      class vp {
        constructor() {}
        supports(t) {
          return Po(t);
        }
        create(t) {
          return new SC(t);
        }
      }
      const wC = (e, t) => t;
      class SC {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || wC);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            i = 0,
            s = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < Ep(r, i, s)) ? n : r,
              f = Ep(a, i, s),
              g = a.currentIndex;
            if (a === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) i++;
            else {
              s || (s = []);
              const D = f - i,
                w = g - i;
              if (D != w) {
                for (let te = 0; te < D; te++) {
                  const _e = te < s.length ? s[te] : (s[te] = 0),
                    Be = _e + te;
                  w <= Be && Be < D && (s[te] = _e + 1);
                }
                s[a.previousIndex] = w - D;
              }
            }
            f !== g && t(a, f, g);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Po(t))) throw new Ae(900, "");
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let i,
            s,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let f = 0; f < this.length; f++)
              (s = t[f]),
                (a = this._trackByFn(f, s)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, s, a, f)),
                    Object.is(n.item, s) || this._addIdentityChange(n, s))
                  : ((n = this._mismatch(n, s, a, f)), (r = !0)),
                (n = n._next);
          } else
            (i = 0),
              (function Pv(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[$s()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (f) => {
                (a = this._trackByFn(i, f)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, f, a, i)),
                      Object.is(n.item, f) || this._addIdentityChange(n, f))
                    : ((n = this._mismatch(n, f, a, i)), (r = !0)),
                  (n = n._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, i) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, s, i))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, i))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, s, i))
              : (t = this._addAfter(new MC(n, r), s, i)),
            t
          );
        }
        _verifyReinsertion(t, n, r, i) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, i))
              : t.currentIndex != i &&
                ((t.currentIndex = i), this._addToMoves(t, i)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const i = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === i ? (this._removalsHead = s) : (i._nextRemoved = s),
            null === s ? (this._removalsTail = i) : (s._prevRemoved = i),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const i = null === n ? this._itHead : n._next;
          return (
            (t._next = i),
            (t._prev = n),
            null === i ? (this._itTail = t) : (i._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new _p()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new _p()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class MC {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class bC {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class _p {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new bC()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const i = this.map.get(t);
          return i ? i.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Ep(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class Dp {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ql(t);
        }
        create() {
          return new TC();
        }
      }
      class TC {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Ql(t))) throw new Ae(900, "");
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, i) => {
              if (n && n.key === i)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const s = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, s);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            const s = i._prev,
              a = i._next;
            return (
              s && (s._next = a),
              a && (a._prev = s),
              (i._next = null),
              (i._prev = null),
              i
            );
          }
          const r = new OC(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class OC {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Cp() {
        return new Yu([new vp()]);
      }
      let Yu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Cp()),
              deps: [[e, new xo(), new Co()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new Ae(901, "");
          }
        }
        return (e.ɵprov = st({ token: e, providedIn: "root", factory: Cp })), e;
      })();
      function xp() {
        return new Qu([new Dp()]);
      }
      let Qu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || xp()),
              deps: [[e, new xo(), new Co()]],
            };
          }
          find(n) {
            const r = this.factories.find((s) => s.supports(n));
            if (r) return r;
            throw new Ae(901, "");
          }
        }
        return (e.ɵprov = st({ token: e, providedIn: "root", factory: xp })), e;
      })();
      const FC = lp(null, "core", [
        { provide: ep, useValue: "unknown" },
        { provide: cp, deps: [hi] },
        { provide: op, deps: [] },
        { provide: np, deps: [] },
      ]);
      let PC = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dr(Vu));
          }),
          (e.ɵmod = ct({ type: e })),
          (e.ɵinj = Ln({})),
          e
        );
      })();
    },
    9042: (le, j, v) => {
      function o(V) {
        for (let Z in V) {
          let $ = V[Z] || "";
          switch (Z) {
            case "display":
              V.display =
                "flex" === $
                  ? ["-webkit-flex", "flex"]
                  : "inline-flex" === $
                  ? ["-webkit-inline-flex", "inline-flex"]
                  : $;
              break;
            case "align-items":
            case "align-self":
            case "align-content":
            case "flex":
            case "flex-basis":
            case "flex-flow":
            case "flex-grow":
            case "flex-shrink":
            case "flex-wrap":
            case "justify-content":
              V["-webkit-" + Z] = $;
              break;
            case "flex-direction":
              ($ = $ || "row"),
                (V["-webkit-flex-direction"] = $),
                (V["flex-direction"] = $);
              break;
            case "order":
              V.order = V["-webkit-" + Z] = isNaN(+$) ? "0" : $;
          }
        }
        return V;
      }
      v.d(j, {
        iQ: () => F,
        GK: () => o,
        Ar: () => B,
        kt: () => L,
        tj: () => J,
      });
      const C = "inline",
        F = ["row", "column", "row-reverse", "column-reverse"];
      function B(V) {
        let [Z, $, Oe] = U(V);
        return (function Y(V, Z = null, $ = !1) {
          return {
            display: $ ? "inline-flex" : "flex",
            "box-sizing": "border-box",
            "flex-direction": V,
            "flex-wrap": Z || null,
          };
        })(Z, $, Oe);
      }
      function U(V) {
        var Z;
        V =
          null !== (Z = null == V ? void 0 : V.toLowerCase()) && void 0 !== Z
            ? Z
            : "";
        let [$, Oe, Te] = V.split(" ");
        return (
          F.find((Ae) => Ae === $) || ($ = F[0]),
          Oe === C && ((Oe = Te !== C ? Te : ""), (Te = C)),
          [$, W(Oe), !!Te]
        );
      }
      function J(V) {
        let [Z] = U(V);
        return Z.indexOf("row") > -1;
      }
      function W(V) {
        if (V)
          switch (V.toLowerCase()) {
            case "reverse":
            case "wrap-reverse":
            case "reverse-wrap":
              V = "wrap-reverse";
              break;
            case "no":
            case "none":
            case "nowrap":
              V = "nowrap";
              break;
            default:
              V = "wrap";
          }
        return V;
      }
      function L(V, ...Z) {
        if (null == V)
          throw TypeError("Cannot convert undefined or null to object");
        for (let $ of Z)
          if (null != $)
            for (let Oe in $) $.hasOwnProperty(Oe) && (V[Oe] = $[Oe]);
        return V;
      }
    },
    3270: (le, j, v) => {
      v.d(j, {
        Bs: () => Ze,
        iR: () => wn,
        IR: () => Oe,
        g5: () => Je,
        WU: () => Pe,
        yB: () => Xn,
        wY: () => He,
        QI: () => Se,
        RK: () => oe,
        Ot: () => mt,
        FL: () => jt,
      });
      var o = v(5e3),
        C = v(9808),
        F = v(1135),
        B = v(9751),
        U = v(6451),
        J = v(7579),
        W = v(9042),
        Y = v(9300),
        L = v(8505);
      const Z = {
          provide: o.tb,
          useFactory: function V(De, be) {
            return () => {
              if ((0, C.NF)(be)) {
                const M = Array.from(De.querySelectorAll(`[class*=${$}]`)),
                  I = /\bflex-layout-.+?\b/g;
                M.forEach((se) => {
                  se.classList.contains(`${$}ssr`) && se.parentNode
                    ? se.parentNode.removeChild(se)
                    : se.className.replace(I, "");
                });
              }
            };
          },
          deps: [C.K0, o.Lbi],
          multi: !0,
        },
        $ = "flex-layout-";
      let Oe = (() => {
        class De {}
        return (
          (De.ɵfac = function (M) {
            return new (M || De)();
          }),
          (De.ɵmod = o.oAB({ type: De })),
          (De.ɵinj = o.cJS({ providers: [Z] })),
          De
        );
      })();
      class Te {
        constructor(be = !1, M = "all", I = "", se = "", pe = 0) {
          (this.matches = be),
            (this.mediaQuery = M),
            (this.mqAlias = I),
            (this.suffix = se),
            (this.priority = pe),
            (this.property = "");
        }
        clone() {
          return new Te(
            this.matches,
            this.mediaQuery,
            this.mqAlias,
            this.suffix
          );
        }
      }
      let Ae = (() => {
        class De {
          constructor() {
            this.stylesheet = new Map();
          }
          addStyleToElement(M, I, se) {
            const pe = this.stylesheet.get(M);
            pe ? pe.set(I, se) : this.stylesheet.set(M, new Map([[I, se]]));
          }
          clearStyles() {
            this.stylesheet.clear();
          }
          getStyleForElement(M, I) {
            const se = this.stylesheet.get(M);
            let pe = "";
            if (se) {
              const qe = se.get(I);
              ("number" == typeof qe || "string" == typeof qe) &&
                (pe = qe + "");
            }
            return pe;
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)();
          }),
          (De.ɵprov = o.Yz7({
            token: De,
            factory: De.ɵfac,
            providedIn: "root",
          })),
          De
        );
      })();
      const Je = {
          addFlexToParent: !0,
          addOrientationBps: !1,
          disableDefaultBps: !1,
          disableVendorPrefixes: !1,
          serverLoaded: !1,
          useColumnBasisZero: !0,
          printWithBreakpoints: [],
          mediaTriggerAutoRestore: !0,
          ssrObserveBreakpoints: [],
          multiplier: void 0,
          defaultUnit: "px",
          detectLayoutDisplay: !1,
        },
        Pe = new o.OlP("Flex Layout token, config options for the library", {
          providedIn: "root",
          factory: () => Je,
        }),
        He = new o.OlP("FlexLayoutServerLoaded", {
          providedIn: "root",
          factory: () => !1,
        }),
        Ze = new o.OlP(
          "Flex Layout token, collect all breakpoints into one provider",
          { providedIn: "root", factory: () => null }
        );
      function Ge(De, be) {
        return (
          (De = De ? De.clone() : new Te()),
          be &&
            ((De.mqAlias = be.alias),
            (De.mediaQuery = be.mediaQuery),
            (De.suffix = be.suffix),
            (De.priority = be.priority)),
          De
        );
      }
      class Se {
        constructor() {
          this.shouldCache = !0;
        }
        sideEffect(be, M, I) {}
      }
      let oe = (() => {
        class De {
          constructor(M, I, se, pe) {
            (this._serverStylesheet = M),
              (this._serverModuleLoaded = I),
              (this._platformId = se),
              (this.layoutConfig = pe);
          }
          applyStyleToElement(M, I, se = null) {
            let pe = {};
            "string" == typeof I && ((pe[I] = se), (I = pe)),
              (pe = this.layoutConfig.disableVendorPrefixes ? I : (0, W.GK)(I)),
              this._applyMultiValueStyleToElement(pe, M);
          }
          applyStyleToElements(M, I = []) {
            const se = this.layoutConfig.disableVendorPrefixes
              ? M
              : (0, W.GK)(M);
            I.forEach((pe) => {
              this._applyMultiValueStyleToElement(se, pe);
            });
          }
          getFlowDirection(M) {
            const I = "flex-direction";
            let se = this.lookupStyle(M, I);
            return [
              se || "row",
              this.lookupInlineStyle(M, I) ||
              ((0, C.PM)(this._platformId) && this._serverModuleLoaded)
                ? se
                : "",
            ];
          }
          hasWrap(M) {
            return "wrap" === this.lookupStyle(M, "flex-wrap");
          }
          lookupAttributeValue(M, I) {
            var se;
            return null !== (se = M.getAttribute(I)) && void 0 !== se ? se : "";
          }
          lookupInlineStyle(M, I) {
            return (0, C.NF)(this._platformId)
              ? M.style.getPropertyValue(I)
              : (function je(De, be) {
                  var M;
                  return null !== (M = Me(De)[be]) && void 0 !== M ? M : "";
                })(M, I);
          }
          lookupStyle(M, I, se = !1) {
            let pe = "";
            return (
              M &&
                ((pe = this.lookupInlineStyle(M, I)) ||
                  ((0, C.NF)(this._platformId)
                    ? se || (pe = getComputedStyle(M).getPropertyValue(I))
                    : this._serverModuleLoaded &&
                      (pe = this._serverStylesheet.getStyleForElement(M, I)))),
              pe ? pe.trim() : ""
            );
          }
          _applyMultiValueStyleToElement(M, I) {
            Object.keys(M)
              .sort()
              .forEach((se) => {
                const pe = M[se],
                  qe = Array.isArray(pe) ? pe : [pe];
                qe.sort();
                for (let nt of qe)
                  (nt = nt ? nt + "" : ""),
                    (0, C.NF)(this._platformId) || !this._serverModuleLoaded
                      ? (0, C.NF)(this._platformId)
                        ? I.style.setProperty(se, nt)
                        : Ve(I, se, nt)
                      : this._serverStylesheet.addStyleToElement(I, se, nt);
              });
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)(o.LFG(Ae), o.LFG(He), o.LFG(o.Lbi), o.LFG(Pe));
          }),
          (De.ɵprov = o.Yz7({
            token: De,
            factory: De.ɵfac,
            providedIn: "root",
          })),
          De
        );
      })();
      function Ve(De, be, M) {
        be = be.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        const I = Me(De);
        (I[be] = null != M ? M : ""),
          (function et(De, be) {
            let M = "";
            for (const I in be) be[I] && (M += `${I}:${be[I]};`);
            De.setAttribute("style", M);
          })(De, I);
      }
      function Me(De) {
        const be = {},
          M = De.getAttribute("style");
        if (M) {
          const I = M.split(/;+/g);
          for (let se = 0; se < I.length; se++) {
            const pe = I[se].trim();
            if (pe.length > 0) {
              const qe = pe.indexOf(":");
              if (-1 === qe) throw new Error(`Invalid CSS style: ${pe}`);
              be[pe.substr(0, qe).trim()] = pe.substr(qe + 1).trim();
            }
          }
        }
        return be;
      }
      function ie(De, be) {
        return ((be && be.priority) || 0) - ((De && De.priority) || 0);
      }
      function ye(De, be) {
        return (De.priority || 0) - (be.priority || 0);
      }
      let ge = (() => {
        class De {
          constructor(M, I, se) {
            (this._zone = M),
              (this._platformId = I),
              (this._document = se),
              (this.source = new F.X(new Te(!0))),
              (this.registry = new Map()),
              (this.pendingRemoveListenerFns = []),
              (this._observable$ = this.source.asObservable());
          }
          get activations() {
            const M = [];
            return (
              this.registry.forEach((I, se) => {
                I.matches && M.push(se);
              }),
              M
            );
          }
          isActive(M) {
            var I;
            const se = this.registry.get(M);
            return null !== (I = null == se ? void 0 : se.matches) &&
              void 0 !== I
              ? I
              : this.registerQuery(M).some((pe) => pe.matches);
          }
          observe(M, I = !1) {
            if (M && M.length) {
              const se = this._observable$.pipe(
                  (0, Y.h)((qe) => !I || M.indexOf(qe.mediaQuery) > -1)
                ),
                pe = new B.y((qe) => {
                  const nt = this.registerQuery(M);
                  if (nt.length) {
                    const ee = nt.pop();
                    nt.forEach((Ke) => {
                      qe.next(Ke);
                    }),
                      this.source.next(ee);
                  }
                  qe.complete();
                });
              return (0, U.T)(pe, se);
            }
            return this._observable$;
          }
          registerQuery(M) {
            const I = Array.isArray(M) ? M : [M],
              se = [];
            return (
              (function xe(De, be) {
                const M = De.filter((I) => !he[I]);
                if (M.length > 0) {
                  const I = M.join(", ");
                  try {
                    const se = be.createElement("style");
                    se.setAttribute("type", "text/css"),
                      se.styleSheet ||
                        se.appendChild(
                          be.createTextNode(
                            `\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${I} {.fx-query-test{ }}\n`
                          )
                        ),
                      be.head.appendChild(se),
                      M.forEach((pe) => (he[pe] = se));
                  } catch (se) {
                    console.error(se);
                  }
                }
              })(I, this._document),
              I.forEach((pe) => {
                const qe = (ee) => {
                  this._zone.run(() =>
                    this.source.next(new Te(ee.matches, pe))
                  );
                };
                let nt = this.registry.get(pe);
                nt ||
                  ((nt = this.buildMQL(pe)),
                  nt.addListener(qe),
                  this.pendingRemoveListenerFns.push(() =>
                    nt.removeListener(qe)
                  ),
                  this.registry.set(pe, nt)),
                  nt.matches && se.push(new Te(!0, pe));
              }),
              se
            );
          }
          ngOnDestroy() {
            let M;
            for (; (M = this.pendingRemoveListenerFns.pop()); ) M();
          }
          buildMQL(M) {
            return (function ue(De, be) {
              return be && window.matchMedia("all").addListener
                ? window.matchMedia(De)
                : {
                    matches: "all" === De || "" === De,
                    media: De,
                    addListener: () => {},
                    removeListener: () => {},
                    onchange: null,
                    addEventListener() {},
                    removeEventListener() {},
                    dispatchEvent: () => !1,
                  };
            })(M, (0, C.NF)(this._platformId));
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)(o.LFG(o.R0b), o.LFG(o.Lbi), o.LFG(C.K0));
          }),
          (De.ɵprov = o.Yz7({
            token: De,
            factory: De.ɵfac,
            providedIn: "root",
          })),
          De
        );
      })();
      const he = {},
        tt = [
          {
            alias: "xs",
            mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)",
            priority: 1e3,
          },
          {
            alias: "sm",
            mediaQuery:
              "screen and (min-width: 600px) and (max-width: 959.98px)",
            priority: 900,
          },
          {
            alias: "md",
            mediaQuery:
              "screen and (min-width: 960px) and (max-width: 1279.98px)",
            priority: 800,
          },
          {
            alias: "lg",
            mediaQuery:
              "screen and (min-width: 1280px) and (max-width: 1919.98px)",
            priority: 700,
          },
          {
            alias: "xl",
            mediaQuery:
              "screen and (min-width: 1920px) and (max-width: 4999.98px)",
            priority: 600,
          },
          {
            alias: "lt-sm",
            overlapping: !0,
            mediaQuery: "screen and (max-width: 599.98px)",
            priority: 950,
          },
          {
            alias: "lt-md",
            overlapping: !0,
            mediaQuery: "screen and (max-width: 959.98px)",
            priority: 850,
          },
          {
            alias: "lt-lg",
            overlapping: !0,
            mediaQuery: "screen and (max-width: 1279.98px)",
            priority: 750,
          },
          {
            alias: "lt-xl",
            overlapping: !0,
            priority: 650,
            mediaQuery: "screen and (max-width: 1919.98px)",
          },
          {
            alias: "gt-xs",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 600px)",
            priority: -950,
          },
          {
            alias: "gt-sm",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 960px)",
            priority: -850,
          },
          {
            alias: "gt-md",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 1280px)",
            priority: -750,
          },
          {
            alias: "gt-lg",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 1920px)",
            priority: -650,
          },
        ],
        ft = "(orientation: portrait) and (max-width: 599.98px)",
        wt = "(orientation: landscape) and (max-width: 959.98px)",
        ot =
          "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",
        gt =
          "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",
        fn = "(orientation: portrait) and (min-width: 840px)",
        Wt = "(orientation: landscape) and (min-width: 1280px)",
        Yt = {
          HANDSET: `${ft}, ${wt}`,
          TABLET: `${ot} , ${gt}`,
          WEB: `${fn}, ${Wt} `,
          HANDSET_PORTRAIT: `${ft}`,
          TABLET_PORTRAIT: `${ot} `,
          WEB_PORTRAIT: `${fn}`,
          HANDSET_LANDSCAPE: `${wt}`,
          TABLET_LANDSCAPE: `${gt}`,
          WEB_LANDSCAPE: `${Wt}`,
        },
        st = [
          { alias: "handset", priority: 2e3, mediaQuery: Yt.HANDSET },
          {
            alias: "handset.landscape",
            priority: 2e3,
            mediaQuery: Yt.HANDSET_LANDSCAPE,
          },
          {
            alias: "handset.portrait",
            priority: 2e3,
            mediaQuery: Yt.HANDSET_PORTRAIT,
          },
          { alias: "tablet", priority: 2100, mediaQuery: Yt.TABLET },
          {
            alias: "tablet.landscape",
            priority: 2100,
            mediaQuery: Yt.TABLET_LANDSCAPE,
          },
          {
            alias: "tablet.portrait",
            priority: 2100,
            mediaQuery: Yt.TABLET_PORTRAIT,
          },
          { alias: "web", priority: 2200, mediaQuery: Yt.WEB, overlapping: !0 },
          {
            alias: "web.landscape",
            priority: 2200,
            mediaQuery: Yt.WEB_LANDSCAPE,
            overlapping: !0,
          },
          {
            alias: "web.portrait",
            priority: 2200,
            mediaQuery: Yt.WEB_PORTRAIT,
            overlapping: !0,
          },
        ],
        kt = /(\.|-|_)/g;
      function Ln(De) {
        let be = De.length > 0 ? De.charAt(0) : "",
          M = De.length > 1 ? De.slice(1) : "";
        return be.toUpperCase() + M;
      }
      const Nn = new o.OlP("Token (@angular/flex-layout) Breakpoints", {
        providedIn: "root",
        factory: () => {
          const De = (0, o.f3M)(Ze),
            be = (0, o.f3M)(Pe),
            M = [].concat.apply(
              [],
              (De || []).map((se) => (Array.isArray(se) ? se : [se]))
            );
          return (function An(De, be = []) {
            const M = {};
            return (
              De.forEach((I) => {
                M[I.alias] = I;
              }),
              be.forEach((I) => {
                M[I.alias] ? (0, W.kt)(M[I.alias], I) : (M[I.alias] = I);
              }),
              (function hn(De) {
                return (
                  De.forEach((be) => {
                    be.suffix ||
                      ((be.suffix = (function Qt(De) {
                        return De.replace(kt, "|").split("|").map(Ln).join("");
                      })(be.alias)),
                      (be.overlapping = !!be.overlapping));
                  }),
                  De
                );
              })(Object.keys(M).map((I) => M[I]))
            );
          })(
            (be.disableDefaultBps ? [] : tt).concat(
              be.addOrientationBps ? st : []
            ),
            M
          );
        },
      });
      let vn = (() => {
        class De {
          constructor(M) {
            (this.findByMap = new Map()), (this.items = [...M].sort(ye));
          }
          findByAlias(M) {
            return M ? this.findWithPredicate(M, (I) => I.alias === M) : null;
          }
          findByQuery(M) {
            return this.findWithPredicate(M, (I) => I.mediaQuery === M);
          }
          get overlappings() {
            return this.items.filter((M) => M.overlapping);
          }
          get aliases() {
            return this.items.map((M) => M.alias);
          }
          get suffixes() {
            return this.items.map((M) => {
              var I;
              return null !== (I = null == M ? void 0 : M.suffix) &&
                void 0 !== I
                ? I
                : "";
            });
          }
          findWithPredicate(M, I) {
            var se;
            let pe = this.findByMap.get(M);
            return (
              pe ||
                ((pe =
                  null !== (se = this.items.find(I)) && void 0 !== se
                    ? se
                    : null),
                this.findByMap.set(M, pe)),
              null != pe ? pe : null
            );
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)(o.LFG(Nn));
          }),
          (De.ɵprov = o.Yz7({
            token: De,
            factory: De.ɵfac,
            providedIn: "root",
          })),
          De
        );
      })();
      const qt = "print",
        Bn = { alias: qt, mediaQuery: qt, priority: 1e3 };
      let zn = (() => {
        class De {
          constructor(M, I, se) {
            (this.breakpoints = M),
              (this.layoutConfig = I),
              (this._document = se),
              (this.registeredBeforeAfterPrintHooks = !1),
              (this.isPrintingBeforeAfterEvent = !1),
              (this.beforePrintEventListeners = []),
              (this.afterPrintEventListeners = []),
              (this.formerActivations = null),
              (this.isPrinting = !1),
              (this.queue = new Zn()),
              (this.deactivations = []);
          }
          withPrintQuery(M) {
            return [...M, qt];
          }
          isPrintEvent(M) {
            return M.mediaQuery.startsWith(qt);
          }
          get printAlias() {
            var M;
            return [
              ...(null !== (M = this.layoutConfig.printWithBreakpoints) &&
              void 0 !== M
                ? M
                : []),
            ];
          }
          get printBreakPoints() {
            return this.printAlias
              .map((M) => this.breakpoints.findByAlias(M))
              .filter((M) => null !== M);
          }
          getEventBreakpoints({ mediaQuery: M }) {
            const I = this.breakpoints.findByQuery(M);
            return (
              I ? [...this.printBreakPoints, I] : this.printBreakPoints
            ).sort(ie);
          }
          updateEvent(M) {
            var I;
            let se = this.breakpoints.findByQuery(M.mediaQuery);
            return (
              this.isPrintEvent(M) &&
                ((se = this.getEventBreakpoints(M)[0]),
                (M.mediaQuery =
                  null !== (I = null == se ? void 0 : se.mediaQuery) &&
                  void 0 !== I
                    ? I
                    : "")),
              Ge(M, se)
            );
          }
          registerBeforeAfterPrintHooks(M) {
            if (
              !this._document.defaultView ||
              this.registeredBeforeAfterPrintHooks
            )
              return;
            this.registeredBeforeAfterPrintHooks = !0;
            const I = () => {
                this.isPrinting ||
                  ((this.isPrintingBeforeAfterEvent = !0),
                  this.startPrinting(
                    M,
                    this.getEventBreakpoints(new Te(!0, qt))
                  ),
                  M.updateStyles());
              },
              se = () => {
                (this.isPrintingBeforeAfterEvent = !1),
                  this.isPrinting && (this.stopPrinting(M), M.updateStyles());
              };
            this._document.defaultView.addEventListener("beforeprint", I),
              this._document.defaultView.addEventListener("afterprint", se),
              this.beforePrintEventListeners.push(I),
              this.afterPrintEventListeners.push(se);
          }
          interceptEvents(M) {
            return (I) => {
              this.isPrintEvent(I)
                ? I.matches && !this.isPrinting
                  ? (this.startPrinting(M, this.getEventBreakpoints(I)),
                    M.updateStyles())
                  : !I.matches &&
                    this.isPrinting &&
                    !this.isPrintingBeforeAfterEvent &&
                    (this.stopPrinting(M), M.updateStyles())
                : this.collectActivations(M, I);
            };
          }
          blockPropagation() {
            return (M) => !(this.isPrinting || this.isPrintEvent(M));
          }
          startPrinting(M, I) {
            (this.isPrinting = !0),
              (this.formerActivations = M.activatedBreakpoints),
              (M.activatedBreakpoints = this.queue.addPrintBreakpoints(I));
          }
          stopPrinting(M) {
            (M.activatedBreakpoints = this.deactivations),
              (this.deactivations = []),
              (this.formerActivations = null),
              this.queue.clear(),
              (this.isPrinting = !1);
          }
          collectActivations(M, I) {
            if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
              if (!this.isPrintingBeforeAfterEvent)
                return void (this.deactivations = []);
              if (!I.matches) {
                const se = this.breakpoints.findByQuery(I.mediaQuery);
                if (se) {
                  const pe =
                      this.formerActivations &&
                      this.formerActivations.includes(se),
                    qe =
                      !this.formerActivations &&
                      M.activatedBreakpoints.includes(se);
                  (pe || qe) &&
                    (this.deactivations.push(se), this.deactivations.sort(ie));
                }
              }
            }
          }
          ngOnDestroy() {
            this._document.defaultView &&
              (this.beforePrintEventListeners.forEach((M) =>
                this._document.defaultView.removeEventListener("beforeprint", M)
              ),
              this.afterPrintEventListeners.forEach((M) =>
                this._document.defaultView.removeEventListener("afterprint", M)
              ));
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)(o.LFG(vn), o.LFG(Pe), o.LFG(C.K0));
          }),
          (De.ɵprov = o.Yz7({
            token: De,
            factory: De.ɵfac,
            providedIn: "root",
          })),
          De
        );
      })();
      class Zn {
        constructor() {
          this.printBreakpoints = [];
        }
        addPrintBreakpoints(be) {
          return (
            be.push(Bn),
            be.sort(ie),
            be.forEach((M) => this.addBreakpoint(M)),
            this.printBreakpoints
          );
        }
        addBreakpoint(be) {
          be &&
            void 0 ===
              this.printBreakpoints.find(
                (I) => I.mediaQuery === be.mediaQuery
              ) &&
            (this.printBreakpoints = (function St(De) {
              var be;
              return (
                null !==
                  (be = null == De ? void 0 : De.mediaQuery.startsWith(qt)) &&
                void 0 !== be &&
                be
              );
            })(be)
              ? [be, ...this.printBreakpoints]
              : [...this.printBreakpoints, be]);
        }
        clear() {
          this.printBreakpoints = [];
        }
      }
      let Xn = (() => {
        class De {
          constructor(M, I, se) {
            (this.matchMedia = M),
              (this.breakpoints = I),
              (this.hook = se),
              (this._useFallbacks = !0),
              (this._activatedBreakpoints = []),
              (this.elementMap = new Map()),
              (this.elementKeyMap = new WeakMap()),
              (this.watcherMap = new WeakMap()),
              (this.updateMap = new WeakMap()),
              (this.clearMap = new WeakMap()),
              (this.subject = new J.x()),
              this.observeActivations();
          }
          get activatedAlias() {
            var M, I;
            return null !==
              (I =
                null === (M = this.activatedBreakpoints[0]) || void 0 === M
                  ? void 0
                  : M.alias) && void 0 !== I
              ? I
              : "";
          }
          set activatedBreakpoints(M) {
            this._activatedBreakpoints = [...M];
          }
          get activatedBreakpoints() {
            return [...this._activatedBreakpoints];
          }
          set useFallbacks(M) {
            this._useFallbacks = M;
          }
          onMediaChange(M) {
            const I = this.findByQuery(M.mediaQuery);
            if (I) {
              M = Ge(M, I);
              const se = this.activatedBreakpoints.indexOf(I);
              M.matches && -1 === se
                ? (this._activatedBreakpoints.push(I),
                  this._activatedBreakpoints.sort(ie),
                  this.updateStyles())
                : !M.matches &&
                  -1 !== se &&
                  (this._activatedBreakpoints.splice(se, 1),
                  this._activatedBreakpoints.sort(ie),
                  this.updateStyles());
            }
          }
          init(M, I, se, pe, qe = []) {
            Cn(this.updateMap, M, I, se),
              Cn(this.clearMap, M, I, pe),
              this.buildElementKeyMap(M, I),
              this.watchExtraTriggers(M, I, qe);
          }
          getValue(M, I, se) {
            const pe = this.elementMap.get(M);
            if (pe) {
              const qe =
                void 0 !== se ? pe.get(se) : this.getActivatedValues(pe, I);
              if (qe) return qe.get(I);
            }
          }
          hasValue(M, I) {
            const se = this.elementMap.get(M);
            if (se) {
              const pe = this.getActivatedValues(se, I);
              if (pe) return void 0 !== pe.get(I) || !1;
            }
            return !1;
          }
          setValue(M, I, se, pe) {
            var qe;
            let nt = this.elementMap.get(M);
            if (nt) {
              const Ke = (
                null !== (qe = nt.get(pe)) && void 0 !== qe ? qe : new Map()
              ).set(I, se);
              nt.set(pe, Ke), this.elementMap.set(M, nt);
            } else
              (nt = new Map().set(pe, new Map().set(I, se))),
                this.elementMap.set(M, nt);
            const ee = this.getValue(M, I);
            void 0 !== ee && this.updateElement(M, I, ee);
          }
          trackValue(M, I) {
            return this.subject
              .asObservable()
              .pipe((0, Y.h)((se) => se.element === M && se.key === I));
          }
          updateStyles() {
            this.elementMap.forEach((M, I) => {
              const se = new Set(this.elementKeyMap.get(I));
              let pe = this.getActivatedValues(M);
              pe &&
                pe.forEach((qe, nt) => {
                  this.updateElement(I, nt, qe), se.delete(nt);
                }),
                se.forEach((qe) => {
                  if (((pe = this.getActivatedValues(M, qe)), pe)) {
                    const nt = pe.get(qe);
                    this.updateElement(I, qe, nt);
                  } else this.clearElement(I, qe);
                });
            });
          }
          clearElement(M, I) {
            const se = this.clearMap.get(M);
            if (se) {
              const pe = se.get(I);
              pe &&
                (pe(), this.subject.next({ element: M, key: I, value: "" }));
            }
          }
          updateElement(M, I, se) {
            const pe = this.updateMap.get(M);
            if (pe) {
              const qe = pe.get(I);
              qe &&
                (qe(se), this.subject.next({ element: M, key: I, value: se }));
            }
          }
          releaseElement(M) {
            const I = this.watcherMap.get(M);
            I &&
              (I.forEach((pe) => pe.unsubscribe()), this.watcherMap.delete(M));
            const se = this.elementMap.get(M);
            se &&
              (se.forEach((pe, qe) => se.delete(qe)),
              this.elementMap.delete(M));
          }
          triggerUpdate(M, I) {
            const se = this.elementMap.get(M);
            if (se) {
              const pe = this.getActivatedValues(se, I);
              pe &&
                (I
                  ? this.updateElement(M, I, pe.get(I))
                  : pe.forEach((qe, nt) => this.updateElement(M, nt, qe)));
            }
          }
          buildElementKeyMap(M, I) {
            let se = this.elementKeyMap.get(M);
            se || ((se = new Set()), this.elementKeyMap.set(M, se)), se.add(I);
          }
          watchExtraTriggers(M, I, se) {
            if (se && se.length) {
              let pe = this.watcherMap.get(M);
              if (
                (pe || ((pe = new Map()), this.watcherMap.set(M, pe)),
                !pe.get(I))
              ) {
                const nt = (0, U.T)(...se).subscribe(() => {
                  const ee = this.getValue(M, I);
                  this.updateElement(M, I, ee);
                });
                pe.set(I, nt);
              }
            }
          }
          findByQuery(M) {
            return this.breakpoints.findByQuery(M);
          }
          getActivatedValues(M, I) {
            for (let pe = 0; pe < this.activatedBreakpoints.length; pe++) {
              const nt = M.get(this.activatedBreakpoints[pe].alias);
              if (nt && (void 0 === I || (nt.has(I) && null != nt.get(I))))
                return nt;
            }
            if (!this._useFallbacks) return;
            const se = M.get("");
            return void 0 === I || (se && se.has(I)) ? se : void 0;
          }
          observeActivations() {
            const M = this.breakpoints.items.map((I) => I.mediaQuery);
            this.hook.registerBeforeAfterPrintHooks(this),
              this.matchMedia
                .observe(this.hook.withPrintQuery(M))
                .pipe(
                  (0, L.b)(this.hook.interceptEvents(this)),
                  (0, Y.h)(this.hook.blockPropagation())
                )
                .subscribe(this.onMediaChange.bind(this));
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)(o.LFG(ge), o.LFG(vn), o.LFG(zn));
          }),
          (De.ɵprov = o.Yz7({
            token: De,
            factory: De.ɵfac,
            providedIn: "root",
          })),
          De
        );
      })();
      function Cn(De, be, M, I) {
        var se;
        if (void 0 !== I) {
          const pe =
            null !== (se = De.get(be)) && void 0 !== se ? se : new Map();
          pe.set(M, I), De.set(be, pe);
        }
      }
      let wn = (() => {
        class De {
          constructor(M, I, se, pe) {
            (this.elementRef = M),
              (this.styleBuilder = I),
              (this.styler = se),
              (this.marshal = pe),
              (this.DIRECTIVE_KEY = ""),
              (this.inputs = []),
              (this.mru = {}),
              (this.destroySubject = new J.x()),
              (this.styleCache = new Map());
          }
          get parentElement() {
            return this.elementRef.nativeElement.parentElement;
          }
          get nativeElement() {
            return this.elementRef.nativeElement;
          }
          get activatedValue() {
            return this.marshal.getValue(
              this.nativeElement,
              this.DIRECTIVE_KEY
            );
          }
          set activatedValue(M) {
            this.marshal.setValue(
              this.nativeElement,
              this.DIRECTIVE_KEY,
              M,
              this.marshal.activatedAlias
            );
          }
          ngOnChanges(M) {
            Object.keys(M).forEach((I) => {
              if (-1 !== this.inputs.indexOf(I)) {
                const se = I.split(".").slice(1).join(".");
                this.setValue(M[I].currentValue, se);
              }
            });
          }
          ngOnDestroy() {
            this.destroySubject.next(),
              this.destroySubject.complete(),
              this.marshal.releaseElement(this.nativeElement);
          }
          init(M = []) {
            this.marshal.init(
              this.elementRef.nativeElement,
              this.DIRECTIVE_KEY,
              this.updateWithValue.bind(this),
              this.clearStyles.bind(this),
              M
            );
          }
          addStyles(M, I) {
            const se = this.styleBuilder,
              pe = se.shouldCache;
            let qe = this.styleCache.get(M);
            (!qe || !pe) &&
              ((qe = se.buildStyles(M, I)), pe && this.styleCache.set(M, qe)),
              (this.mru = Object.assign({}, qe)),
              this.applyStyleToElement(qe),
              se.sideEffect(M, qe, I);
          }
          clearStyles() {
            Object.keys(this.mru).forEach((M) => {
              this.mru[M] = "";
            }),
              this.applyStyleToElement(this.mru),
              (this.mru = {}),
              (this.currentValue = void 0);
          }
          triggerUpdate() {
            this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
          }
          getFlexFlowDirection(M, I = !1) {
            if (M) {
              const [se, pe] = this.styler.getFlowDirection(M);
              if (!pe && I) {
                const qe = (0, W.Ar)(se);
                this.styler.applyStyleToElements(qe, [M]);
              }
              return se.trim();
            }
            return "row";
          }
          hasWrap(M) {
            return this.styler.hasWrap(M);
          }
          applyStyleToElement(M, I, se = this.nativeElement) {
            this.styler.applyStyleToElement(se, M, I);
          }
          setValue(M, I) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, M, I);
          }
          updateWithValue(M) {
            this.currentValue !== M &&
              (this.addStyles(M), (this.currentValue = M));
          }
        }
        return (
          (De.ɵfac = function (M) {
            return new (M || De)(o.Y36(o.SBq), o.Y36(Se), o.Y36(oe), o.Y36(Xn));
          }),
          (De.ɵdir = o.lG2({ type: De, features: [o.TTD] })),
          De
        );
      })();
      function mt(De, be = "1", M = "1") {
        let I = [be, M, De],
          se = De.indexOf("calc");
        if (se > 0) {
          I[2] = $n(De.substring(se).trim());
          let pe = De.substr(0, se).trim().split(" ");
          2 == pe.length && ((I[0] = pe[0]), (I[1] = pe[1]));
        } else if (0 == se) I[2] = $n(De.trim());
        else {
          let pe = De.split(" ");
          I = 3 === pe.length ? pe : [be, M, De];
        }
        return I;
      }
      function $n(De) {
        return De.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& ");
      }
      function jt(De, be) {
        if (void 0 === be) return De;
        const M = (I) => {
          const se = +I.slice(0, -"x".length);
          return De.endsWith("x") && !isNaN(se)
            ? `${se * be.value}${be.unit}`
            : De;
        };
        return De.includes(" ") ? De.split(" ").map(M).join(" ") : M(De);
      }
    },
    7093: (le, j, v) => {
      v.d(j, {
        yH: () => ue,
        Wh: () => $n,
        xw: () => Z,
        SQ: () => He,
        ae: () => nt,
      });
      var o = v(5e3),
        C = v(226),
        F = v(3270),
        B = v(9042),
        U = v(7579),
        J = v(2722);
      let W = (() => {
        class ee extends F.QI {
          buildStyles(ve, { display: k }) {
            const K = (0, B.Ar)(ve);
            return Object.assign(Object.assign({}, K), {
              display: "none" === k ? k : K.display,
            });
          }
        }
        return (
          (ee.ɵfac = (function () {
            let Ke;
            return function (k) {
              return (Ke || (Ke = o.n5z(ee)))(k || ee);
            };
          })()),
          (ee.ɵprov = o.Yz7({
            token: ee,
            factory: ee.ɵfac,
            providedIn: "root",
          })),
          ee
        );
      })();
      const Y = [
        "fxLayout",
        "fxLayout.xs",
        "fxLayout.sm",
        "fxLayout.md",
        "fxLayout.lg",
        "fxLayout.xl",
        "fxLayout.lt-sm",
        "fxLayout.lt-md",
        "fxLayout.lt-lg",
        "fxLayout.lt-xl",
        "fxLayout.gt-xs",
        "fxLayout.gt-sm",
        "fxLayout.gt-md",
        "fxLayout.gt-lg",
      ];
      let V = (() => {
          class ee extends F.iR {
            constructor(ve, k, K, de, Ne) {
              super(ve, K, k, de),
                (this._config = Ne),
                (this.DIRECTIVE_KEY = "layout"),
                this.init();
            }
            updateWithValue(ve) {
              var k;
              const de = this._config.detectLayoutDisplay
                ? this.styler.lookupStyle(this.nativeElement, "display")
                : "";
              (this.styleCache =
                null !== (k = $.get(de)) && void 0 !== k ? k : new Map()),
                $.set(de, this.styleCache),
                this.currentValue !== ve &&
                  (this.addStyles(ve, { display: de }),
                  (this.currentValue = ve));
            }
          }
          return (
            (ee.ɵfac = function (ve) {
              return new (ve || ee)(
                o.Y36(o.SBq),
                o.Y36(F.RK),
                o.Y36(W),
                o.Y36(F.yB),
                o.Y36(F.WU)
              );
            }),
            (ee.ɵdir = o.lG2({ type: ee, features: [o.qOj] })),
            ee
          );
        })(),
        Z = (() => {
          class ee extends V {
            constructor() {
              super(...arguments), (this.inputs = Y);
            }
          }
          return (
            (ee.ɵfac = (function () {
              let Ke;
              return function (k) {
                return (Ke || (Ke = o.n5z(ee)))(k || ee);
              };
            })()),
            (ee.ɵdir = o.lG2({
              type: ee,
              selectors: [
                ["", "fxLayout", ""],
                ["", "fxLayout.xs", ""],
                ["", "fxLayout.sm", ""],
                ["", "fxLayout.md", ""],
                ["", "fxLayout.lg", ""],
                ["", "fxLayout.xl", ""],
                ["", "fxLayout.lt-sm", ""],
                ["", "fxLayout.lt-md", ""],
                ["", "fxLayout.lt-lg", ""],
                ["", "fxLayout.lt-xl", ""],
                ["", "fxLayout.gt-xs", ""],
                ["", "fxLayout.gt-sm", ""],
                ["", "fxLayout.gt-md", ""],
                ["", "fxLayout.gt-lg", ""],
              ],
              inputs: {
                fxLayout: "fxLayout",
                "fxLayout.xs": "fxLayout.xs",
                "fxLayout.sm": "fxLayout.sm",
                "fxLayout.md": "fxLayout.md",
                "fxLayout.lg": "fxLayout.lg",
                "fxLayout.xl": "fxLayout.xl",
                "fxLayout.lt-sm": "fxLayout.lt-sm",
                "fxLayout.lt-md": "fxLayout.lt-md",
                "fxLayout.lt-lg": "fxLayout.lt-lg",
                "fxLayout.lt-xl": "fxLayout.lt-xl",
                "fxLayout.gt-xs": "fxLayout.gt-xs",
                "fxLayout.gt-sm": "fxLayout.gt-sm",
                "fxLayout.gt-md": "fxLayout.gt-md",
                "fxLayout.gt-lg": "fxLayout.gt-lg",
              },
              features: [o.qOj],
            })),
            ee
          );
        })();
      const $ = new Map(),
        Oe = {
          "margin-left": null,
          "margin-right": null,
          "margin-top": null,
          "margin-bottom": null,
        };
      let Te = (() => {
        class ee extends F.QI {
          constructor(ve, k) {
            super(), (this._styler = ve), (this._config = k);
          }
          buildStyles(ve, k) {
            return ve.endsWith(je)
              ? ((ve = ve.slice(0, ve.indexOf(je))),
                (function et(ee, Ke) {
                  const [ve, k] = ee.split(" "),
                    de = (Ut) => `-${Ut}`;
                  let Ne = "0px",
                    ze = de(null != k ? k : ve),
                    ct = "0px";
                  return (
                    "rtl" === Ke ? (ct = de(ve)) : (Ne = de(ve)),
                    { margin: `0px ${Ne} ${ze} ${ct}` }
                  );
                })(
                  (ve = (0, F.FL)(ve, this._config.multiplier)),
                  k.directionality
                ))
              : {};
          }
          sideEffect(ve, k, K) {
            const de = K.items;
            if (ve.endsWith(je)) {
              ve = ve.slice(0, ve.indexOf(je));
              const Ne = (function Ve(ee, Ke) {
                const [ve, k] = ee.split(" ");
                let de = "0px",
                  ze = "0px";
                return (
                  "rtl" === Ke ? (ze = ve) : (de = ve),
                  { padding: `0px ${de} ${null != k ? k : ve} ${ze}` }
                );
              })(
                (ve = (0, F.FL)(ve, this._config.multiplier)),
                K.directionality
              );
              this._styler.applyStyleToElements(Ne, K.items);
            } else {
              (ve = (0, F.FL)(ve, this._config.multiplier)),
                (ve = this.addFallbackUnit(ve));
              const Ne = de.pop(),
                ze = (function ie(ee, Ke) {
                  const ve = Me(Ke.directionality, Ke.layout),
                    k = Object.assign({}, Oe);
                  return (k[ve] = ee), k;
                })(ve, K);
              this._styler.applyStyleToElements(ze, de),
                this._styler.applyStyleToElements(Oe, [Ne]);
            }
          }
          addFallbackUnit(ve) {
            return isNaN(+ve) ? ve : `${ve}${this._config.defaultUnit}`;
          }
        }
        return (
          (ee.ɵfac = function (ve) {
            return new (ve || ee)(o.LFG(F.RK), o.LFG(F.WU));
          }),
          (ee.ɵprov = o.Yz7({
            token: ee,
            factory: ee.ɵfac,
            providedIn: "root",
          })),
          ee
        );
      })();
      const Ae = [
        "fxLayoutGap",
        "fxLayoutGap.xs",
        "fxLayoutGap.sm",
        "fxLayoutGap.md",
        "fxLayoutGap.lg",
        "fxLayoutGap.xl",
        "fxLayoutGap.lt-sm",
        "fxLayoutGap.lt-md",
        "fxLayoutGap.lt-lg",
        "fxLayoutGap.lt-xl",
        "fxLayoutGap.gt-xs",
        "fxLayoutGap.gt-sm",
        "fxLayoutGap.gt-md",
        "fxLayoutGap.gt-lg",
      ];
      let Pe = (() => {
          class ee extends F.iR {
            constructor(ve, k, K, de, Ne, ze) {
              super(ve, Ne, de, ze),
                (this.zone = k),
                (this.directionality = K),
                (this.styleUtils = de),
                (this.layout = "row"),
                (this.DIRECTIVE_KEY = "layout-gap"),
                (this.observerSubject = new U.x());
              const ct = [
                this.directionality.change,
                this.observerSubject.asObservable(),
              ];
              this.init(ct),
                this.marshal
                  .trackValue(this.nativeElement, "layout")
                  .pipe((0, J.R)(this.destroySubject))
                  .subscribe(this.onLayoutChange.bind(this));
            }
            get childrenNodes() {
              const ve = this.nativeElement.children,
                k = [];
              for (let K = ve.length; K--; ) k[K] = ve[K];
              return k;
            }
            ngAfterContentInit() {
              this.buildChildObservable(), this.triggerUpdate();
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this.observer && this.observer.disconnect();
            }
            onLayoutChange(ve) {
              const K = ve.value.split(" ");
              (this.layout = K[0]),
                B.iQ.find((de) => de === this.layout) || (this.layout = "row"),
                this.triggerUpdate();
            }
            updateWithValue(ve) {
              const k = this.childrenNodes
                .filter((K) => 1 === K.nodeType && this.willDisplay(K))
                .sort((K, de) => {
                  const Ne = +this.styler.lookupStyle(K, "order"),
                    ze = +this.styler.lookupStyle(de, "order");
                  return isNaN(Ne) || isNaN(ze) || Ne === ze
                    ? 0
                    : Ne > ze
                    ? 1
                    : -1;
                });
              if (k.length > 0) {
                const K = this.directionality.value,
                  de = this.layout;
                "row" === de && "rtl" === K
                  ? (this.styleCache = Ze)
                  : "row" === de && "rtl" !== K
                  ? (this.styleCache = Se)
                  : "column" === de && "rtl" === K
                  ? (this.styleCache = Ge)
                  : "column" === de && "rtl" !== K && (this.styleCache = oe),
                  this.addStyles(ve, {
                    directionality: K,
                    items: k,
                    layout: de,
                  });
              }
            }
            clearStyles() {
              const ve = Object.keys(this.mru).length > 0,
                k = ve ? "padding" : Me(this.directionality.value, this.layout);
              ve && super.clearStyles(),
                this.styleUtils.applyStyleToElements(
                  { [k]: "" },
                  this.childrenNodes
                );
            }
            willDisplay(ve) {
              const k = this.marshal.getValue(ve, "show-hide");
              return (
                !0 === k ||
                (void 0 === k &&
                  "none" !== this.styleUtils.lookupStyle(ve, "display"))
              );
            }
            buildChildObservable() {
              this.zone.runOutsideAngular(() => {
                "undefined" != typeof MutationObserver &&
                  ((this.observer = new MutationObserver((ve) => {
                    ve.some(
                      (K) =>
                        (K.addedNodes && K.addedNodes.length > 0) ||
                        (K.removedNodes && K.removedNodes.length > 0)
                    ) && this.observerSubject.next();
                  })),
                  this.observer.observe(this.nativeElement, { childList: !0 }));
              });
            }
          }
          return (
            (ee.ɵfac = function (ve) {
              return new (ve || ee)(
                o.Y36(o.SBq),
                o.Y36(o.R0b),
                o.Y36(C.Is),
                o.Y36(F.RK),
                o.Y36(Te),
                o.Y36(F.yB)
              );
            }),
            (ee.ɵdir = o.lG2({ type: ee, features: [o.qOj] })),
            ee
          );
        })(),
        He = (() => {
          class ee extends Pe {
            constructor() {
              super(...arguments), (this.inputs = Ae);
            }
          }
          return (
            (ee.ɵfac = (function () {
              let Ke;
              return function (k) {
                return (Ke || (Ke = o.n5z(ee)))(k || ee);
              };
            })()),
            (ee.ɵdir = o.lG2({
              type: ee,
              selectors: [
                ["", "fxLayoutGap", ""],
                ["", "fxLayoutGap.xs", ""],
                ["", "fxLayoutGap.sm", ""],
                ["", "fxLayoutGap.md", ""],
                ["", "fxLayoutGap.lg", ""],
                ["", "fxLayoutGap.xl", ""],
                ["", "fxLayoutGap.lt-sm", ""],
                ["", "fxLayoutGap.lt-md", ""],
                ["", "fxLayoutGap.lt-lg", ""],
                ["", "fxLayoutGap.lt-xl", ""],
                ["", "fxLayoutGap.gt-xs", ""],
                ["", "fxLayoutGap.gt-sm", ""],
                ["", "fxLayoutGap.gt-md", ""],
                ["", "fxLayoutGap.gt-lg", ""],
              ],
              inputs: {
                fxLayoutGap: "fxLayoutGap",
                "fxLayoutGap.xs": "fxLayoutGap.xs",
                "fxLayoutGap.sm": "fxLayoutGap.sm",
                "fxLayoutGap.md": "fxLayoutGap.md",
                "fxLayoutGap.lg": "fxLayoutGap.lg",
                "fxLayoutGap.xl": "fxLayoutGap.xl",
                "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
                "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
                "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
                "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
                "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
                "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
                "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
                "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg",
              },
              features: [o.qOj],
            })),
            ee
          );
        })();
      const Ze = new Map(),
        Ge = new Map(),
        Se = new Map(),
        oe = new Map(),
        je = " grid";
      function Me(ee, Ke) {
        switch (Ke) {
          case "column":
            return "margin-bottom";
          case "column-reverse":
            return "margin-top";
          case "row":
          default:
            return "rtl" === ee ? "margin-left" : "margin-right";
          case "row-reverse":
            return "rtl" === ee ? "margin-right" : "margin-left";
        }
      }
      let ye = (() => {
        class ee extends F.QI {
          constructor(ve) {
            super(), (this.layoutConfig = ve);
          }
          buildStyles(ve, k) {
            let [K, de, ...Ne] = ve.split(" "),
              ze = Ne.join(" ");
            const ct = k.direction.indexOf("column") > -1 ? "column" : "row",
              Ut = (0, B.tj)(ct) ? "max-width" : "max-height",
              fe = (0, B.tj)(ct) ? "min-width" : "min-height",
              Q = String(ze).indexOf("calc") > -1,
              R = Q || "auto" === ze,
              ae = String(ze).indexOf("%") > -1 && !Q,
              Le =
                String(ze).indexOf("px") > -1 ||
                String(ze).indexOf("rem") > -1 ||
                String(ze).indexOf("em") > -1 ||
                String(ze).indexOf("vw") > -1 ||
                String(ze).indexOf("vh") > -1;
            let rt = Q || Le;
            (K = "0" == K ? 0 : K), (de = "0" == de ? 0 : de);
            const _t = !K && !de;
            let ht = {};
            const $t = {
              "max-width": null,
              "max-height": null,
              "min-width": null,
              "min-height": null,
            };
            switch (ze || "") {
              case "":
                const Mn = !1 !== this.layoutConfig.useColumnBasisZero;
                ze = "row" === ct ? "0%" : Mn ? "0.000000001px" : "auto";
                break;
              case "initial":
              case "nogrow":
                (K = 0), (ze = "auto");
                break;
              case "grow":
                ze = "100%";
                break;
              case "noshrink":
                (de = 0), (ze = "auto");
                break;
              case "auto":
                break;
              case "none":
                (K = 0), (de = 0), (ze = "auto");
                break;
              default:
                !rt && !ae && !isNaN(ze) && (ze += "%"),
                  "0%" === ze && (rt = !0),
                  "0px" === ze && (ze = "0%"),
                  (ht = (0, B.kt)(
                    $t,
                    Q
                      ? {
                          "flex-grow": K,
                          "flex-shrink": de,
                          "flex-basis": rt ? ze : "100%",
                        }
                      : { flex: `${K} ${de} ${rt ? ze : "100%"}` }
                  ));
            }
            return (
              ht.flex ||
                ht["flex-grow"] ||
                (ht = (0, B.kt)(
                  $t,
                  Q
                    ? { "flex-grow": K, "flex-shrink": de, "flex-basis": ze }
                    : { flex: `${K} ${de} ${ze}` }
                )),
              "0%" !== ze &&
                "0px" !== ze &&
                "0.000000001px" !== ze &&
                "auto" !== ze &&
                ((ht[fe] = _t || (rt && K) ? ze : null),
                (ht[Ut] = _t || (!R && de) ? ze : null)),
              ht[fe] || ht[Ut]
                ? k.hasWrap &&
                  (ht[Q ? "flex-basis" : "flex"] = ht[Ut]
                    ? Q
                      ? ht[Ut]
                      : `${K} ${de} ${ht[Ut]}`
                    : Q
                    ? ht[fe]
                    : `${K} ${de} ${ht[fe]}`)
                : (ht = (0, B.kt)(
                    $t,
                    Q
                      ? { "flex-grow": K, "flex-shrink": de, "flex-basis": ze }
                      : { flex: `${K} ${de} ${ze}` }
                  )),
              (0, B.kt)(ht, { "box-sizing": "border-box" })
            );
          }
        }
        return (
          (ee.ɵfac = function (ve) {
            return new (ve || ee)(o.LFG(F.WU));
          }),
          (ee.ɵprov = o.Yz7({
            token: ee,
            factory: ee.ɵfac,
            providedIn: "root",
          })),
          ee
        );
      })();
      const ge = [
        "fxFlex",
        "fxFlex.xs",
        "fxFlex.sm",
        "fxFlex.md",
        "fxFlex.lg",
        "fxFlex.xl",
        "fxFlex.lt-sm",
        "fxFlex.lt-md",
        "fxFlex.lt-lg",
        "fxFlex.lt-xl",
        "fxFlex.gt-xs",
        "fxFlex.gt-sm",
        "fxFlex.gt-md",
        "fxFlex.gt-lg",
      ];
      let xe = (() => {
          class ee extends F.iR {
            constructor(ve, k, K, de, Ne) {
              super(ve, de, k, Ne),
                (this.layoutConfig = K),
                (this.marshal = Ne),
                (this.DIRECTIVE_KEY = "flex"),
                (this.direction = void 0),
                (this.wrap = void 0),
                (this.flexGrow = "1"),
                (this.flexShrink = "1"),
                this.init();
            }
            get shrink() {
              return this.flexShrink;
            }
            set shrink(ve) {
              (this.flexShrink = ve || "1"), this.triggerReflow();
            }
            get grow() {
              return this.flexGrow;
            }
            set grow(ve) {
              (this.flexGrow = ve || "1"), this.triggerReflow();
            }
            ngOnInit() {
              this.parentElement &&
                (this.marshal
                  .trackValue(this.parentElement, "layout")
                  .pipe((0, J.R)(this.destroySubject))
                  .subscribe(this.onLayoutChange.bind(this)),
                this.marshal
                  .trackValue(this.nativeElement, "layout-align")
                  .pipe((0, J.R)(this.destroySubject))
                  .subscribe(this.triggerReflow.bind(this)));
            }
            onLayoutChange(ve) {
              const K = ve.value.split(" ");
              (this.direction = K[0]),
                (this.wrap = void 0 !== K[1] && "wrap" === K[1]),
                this.triggerUpdate();
            }
            updateWithValue(ve) {
              void 0 === this.direction &&
                (this.direction = this.getFlexFlowDirection(
                  this.parentElement,
                  !1 !== this.layoutConfig.addFlexToParent
                )),
                void 0 === this.wrap &&
                  (this.wrap = this.hasWrap(this.parentElement));
              const K = this.direction,
                de = K.startsWith("row"),
                Ne = this.wrap;
              de && Ne
                ? (this.styleCache = wt)
                : de && !Ne
                ? (this.styleCache = tt)
                : !de && Ne
                ? (this.styleCache = ot)
                : !de && !Ne && (this.styleCache = ft);
              const ze = String(ve).replace(";", ""),
                ct = (0, F.Ot)(ze, this.flexGrow, this.flexShrink);
              this.addStyles(ct.join(" "), { direction: K, hasWrap: Ne });
            }
            triggerReflow() {
              const ve = this.activatedValue;
              if (void 0 !== ve) {
                const k = (0, F.Ot)(ve + "", this.flexGrow, this.flexShrink);
                this.marshal.updateElement(
                  this.nativeElement,
                  this.DIRECTIVE_KEY,
                  k.join(" ")
                );
              }
            }
          }
          return (
            (ee.ɵfac = function (ve) {
              return new (ve || ee)(
                o.Y36(o.SBq),
                o.Y36(F.RK),
                o.Y36(F.WU),
                o.Y36(ye),
                o.Y36(F.yB)
              );
            }),
            (ee.ɵdir = o.lG2({
              type: ee,
              inputs: {
                shrink: ["fxShrink", "shrink"],
                grow: ["fxGrow", "grow"],
              },
              features: [o.qOj],
            })),
            ee
          );
        })(),
        ue = (() => {
          class ee extends xe {
            constructor() {
              super(...arguments), (this.inputs = ge);
            }
          }
          return (
            (ee.ɵfac = (function () {
              let Ke;
              return function (k) {
                return (Ke || (Ke = o.n5z(ee)))(k || ee);
              };
            })()),
            (ee.ɵdir = o.lG2({
              type: ee,
              selectors: [
                ["", "fxFlex", ""],
                ["", "fxFlex.xs", ""],
                ["", "fxFlex.sm", ""],
                ["", "fxFlex.md", ""],
                ["", "fxFlex.lg", ""],
                ["", "fxFlex.xl", ""],
                ["", "fxFlex.lt-sm", ""],
                ["", "fxFlex.lt-md", ""],
                ["", "fxFlex.lt-lg", ""],
                ["", "fxFlex.lt-xl", ""],
                ["", "fxFlex.gt-xs", ""],
                ["", "fxFlex.gt-sm", ""],
                ["", "fxFlex.gt-md", ""],
                ["", "fxFlex.gt-lg", ""],
              ],
              inputs: {
                fxFlex: "fxFlex",
                "fxFlex.xs": "fxFlex.xs",
                "fxFlex.sm": "fxFlex.sm",
                "fxFlex.md": "fxFlex.md",
                "fxFlex.lg": "fxFlex.lg",
                "fxFlex.xl": "fxFlex.xl",
                "fxFlex.lt-sm": "fxFlex.lt-sm",
                "fxFlex.lt-md": "fxFlex.lt-md",
                "fxFlex.lt-lg": "fxFlex.lt-lg",
                "fxFlex.lt-xl": "fxFlex.lt-xl",
                "fxFlex.gt-xs": "fxFlex.gt-xs",
                "fxFlex.gt-sm": "fxFlex.gt-sm",
                "fxFlex.gt-md": "fxFlex.gt-md",
                "fxFlex.gt-lg": "fxFlex.gt-lg",
              },
              features: [o.qOj],
            })),
            ee
          );
        })();
      const tt = new Map(),
        ft = new Map(),
        wt = new Map(),
        ot = new Map();
      let Sn = (() => {
        class ee extends F.QI {
          buildStyles(ve, k) {
            const K = {},
              [de, Ne] = ve.split(" ");
            switch (de) {
              case "center":
                K["justify-content"] = "center";
                break;
              case "space-around":
                K["justify-content"] = "space-around";
                break;
              case "space-between":
                K["justify-content"] = "space-between";
                break;
              case "space-evenly":
                K["justify-content"] = "space-evenly";
                break;
              case "end":
              case "flex-end":
                K["justify-content"] = "flex-end";
                break;
              default:
                K["justify-content"] = "flex-start";
            }
            switch (Ne) {
              case "start":
              case "flex-start":
                K["align-items"] = K["align-content"] = "flex-start";
                break;
              case "center":
                K["align-items"] = K["align-content"] = "center";
                break;
              case "end":
              case "flex-end":
                K["align-items"] = K["align-content"] = "flex-end";
                break;
              case "space-between":
                (K["align-content"] = "space-between"),
                  (K["align-items"] = "stretch");
                break;
              case "space-around":
                (K["align-content"] = "space-around"),
                  (K["align-items"] = "stretch");
                break;
              case "baseline":
                (K["align-content"] = "stretch"),
                  (K["align-items"] = "baseline");
                break;
              default:
                K["align-items"] = K["align-content"] = "stretch";
            }
            return (0, B.kt)(K, {
              display: k.inline ? "inline-flex" : "flex",
              "flex-direction": k.layout,
              "box-sizing": "border-box",
              "max-width":
                "stretch" === Ne ? ((0, B.tj)(k.layout) ? null : "100%") : null,
              "max-height":
                "stretch" === Ne && (0, B.tj)(k.layout) ? "100%" : null,
            });
          }
        }
        return (
          (ee.ɵfac = (function () {
            let Ke;
            return function (k) {
              return (Ke || (Ke = o.n5z(ee)))(k || ee);
            };
          })()),
          (ee.ɵprov = o.Yz7({
            token: ee,
            factory: ee.ɵfac,
            providedIn: "root",
          })),
          ee
        );
      })();
      const at = [
        "fxLayoutAlign",
        "fxLayoutAlign.xs",
        "fxLayoutAlign.sm",
        "fxLayoutAlign.md",
        "fxLayoutAlign.lg",
        "fxLayoutAlign.xl",
        "fxLayoutAlign.lt-sm",
        "fxLayoutAlign.lt-md",
        "fxLayoutAlign.lt-lg",
        "fxLayoutAlign.lt-xl",
        "fxLayoutAlign.gt-xs",
        "fxLayoutAlign.gt-sm",
        "fxLayoutAlign.gt-md",
        "fxLayoutAlign.gt-lg",
      ];
      let mt = (() => {
          class ee extends F.iR {
            constructor(ve, k, K, de) {
              super(ve, K, k, de),
                (this.DIRECTIVE_KEY = "layout-align"),
                (this.layout = "row"),
                (this.inline = !1),
                this.init(),
                this.marshal
                  .trackValue(this.nativeElement, "layout")
                  .pipe((0, J.R)(this.destroySubject))
                  .subscribe(this.onLayoutChange.bind(this));
            }
            updateWithValue(ve) {
              const k = this.layout || "row",
                K = this.inline;
              "row" === k && K
                ? (this.styleCache = M)
                : "row" !== k || K
                ? "row-reverse" === k && K
                  ? (this.styleCache = se)
                  : "row-reverse" !== k || K
                  ? "column" === k && K
                    ? (this.styleCache = I)
                    : "column" !== k || K
                    ? "column-reverse" === k && K
                      ? (this.styleCache = pe)
                      : "column-reverse" === k && !K && (this.styleCache = be)
                    : (this.styleCache = jt)
                  : (this.styleCache = De)
                : (this.styleCache = Wn),
                this.addStyles(ve, { layout: k, inline: K });
            }
            onLayoutChange(ve) {
              const k = ve.value.split(" ");
              (this.layout = k[0]),
                (this.inline = ve.value.includes("inline")),
                B.iQ.find((K) => K === this.layout) || (this.layout = "row"),
                this.triggerUpdate();
            }
          }
          return (
            (ee.ɵfac = function (ve) {
              return new (ve || ee)(
                o.Y36(o.SBq),
                o.Y36(F.RK),
                o.Y36(Sn),
                o.Y36(F.yB)
              );
            }),
            (ee.ɵdir = o.lG2({ type: ee, features: [o.qOj] })),
            ee
          );
        })(),
        $n = (() => {
          class ee extends mt {
            constructor() {
              super(...arguments), (this.inputs = at);
            }
          }
          return (
            (ee.ɵfac = (function () {
              let Ke;
              return function (k) {
                return (Ke || (Ke = o.n5z(ee)))(k || ee);
              };
            })()),
            (ee.ɵdir = o.lG2({
              type: ee,
              selectors: [
                ["", "fxLayoutAlign", ""],
                ["", "fxLayoutAlign.xs", ""],
                ["", "fxLayoutAlign.sm", ""],
                ["", "fxLayoutAlign.md", ""],
                ["", "fxLayoutAlign.lg", ""],
                ["", "fxLayoutAlign.xl", ""],
                ["", "fxLayoutAlign.lt-sm", ""],
                ["", "fxLayoutAlign.lt-md", ""],
                ["", "fxLayoutAlign.lt-lg", ""],
                ["", "fxLayoutAlign.lt-xl", ""],
                ["", "fxLayoutAlign.gt-xs", ""],
                ["", "fxLayoutAlign.gt-sm", ""],
                ["", "fxLayoutAlign.gt-md", ""],
                ["", "fxLayoutAlign.gt-lg", ""],
              ],
              inputs: {
                fxLayoutAlign: "fxLayoutAlign",
                "fxLayoutAlign.xs": "fxLayoutAlign.xs",
                "fxLayoutAlign.sm": "fxLayoutAlign.sm",
                "fxLayoutAlign.md": "fxLayoutAlign.md",
                "fxLayoutAlign.lg": "fxLayoutAlign.lg",
                "fxLayoutAlign.xl": "fxLayoutAlign.xl",
                "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
                "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
                "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
                "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
                "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
                "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
                "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
                "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg",
              },
              features: [o.qOj],
            })),
            ee
          );
        })();
      const Wn = new Map(),
        jt = new Map(),
        De = new Map(),
        be = new Map(),
        M = new Map(),
        I = new Map(),
        se = new Map(),
        pe = new Map();
      let nt = (() => {
        class ee {}
        return (
          (ee.ɵfac = function (ve) {
            return new (ve || ee)();
          }),
          (ee.ɵmod = o.oAB({ type: ee })),
          (ee.ɵinj = o.cJS({ imports: [[F.IR, C.vT]] })),
          ee
        );
      })();
    },
    9764: (le, j, v) => {
      v.d(j, { o9: () => Qi });
      var o = v(5e3),
        C = v(3270),
        F = v(9808);
      v(3191), v(2722), v(2313);
      let ot = (() => {
        class T {}
        return (
          (T.ɵfac = function (H) {
            return new (H || T)();
          }),
          (T.ɵmod = o.oAB({ type: T })),
          (T.ɵinj = o.cJS({ imports: [[C.IR]] })),
          T
        );
      })();
      var gt = v(7093);
      let ki = (() => {
          class T {}
          return (
            (T.ɵfac = function (H) {
              return new (H || T)();
            }),
            (T.ɵmod = o.oAB({ type: T })),
            (T.ɵinj = o.cJS({ imports: [[C.IR]] })),
            T
          );
        })(),
        Qi = (() => {
          class T {
            constructor(H, Ce) {
              (0, F.PM)(Ce) &&
                !H &&
                console.warn(
                  "Warning: Flex Layout loaded on the server without FlexLayoutServerModule"
                );
            }
            static withConfig(H, Ce = []) {
              return {
                ngModule: T,
                providers: H.serverLoaded
                  ? [
                      {
                        provide: C.WU,
                        useValue: Object.assign(Object.assign({}, C.g5), H),
                      },
                      { provide: C.Bs, useValue: Ce, multi: !0 },
                      { provide: C.wY, useValue: !0 },
                    ]
                  : [
                      {
                        provide: C.WU,
                        useValue: Object.assign(Object.assign({}, C.g5), H),
                      },
                      { provide: C.Bs, useValue: Ce, multi: !0 },
                    ],
              };
            }
          }
          return (
            (T.ɵfac = function (H) {
              return new (H || T)(o.LFG(C.wY), o.LFG(o.Lbi));
            }),
            (T.ɵmod = o.oAB({ type: T })),
            (T.ɵinj = o.cJS({ imports: [[gt.ae, ot, ki], gt.ae, ot, ki] })),
            T
          );
        })();
    },
    6360: (le, j, v) => {
      v.d(j, { Qb: () => ms, PW: () => Kr });
      var o = v(5e3),
        C = v(2313),
        F = v(1777);
      const B = !1;
      function J(x) {
        return new o.vHH(3e3, B);
      }
      function kt() {
        return "undefined" != typeof window && void 0 !== window.document;
      }
      function Ln() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function Qt(x) {
        switch (x.length) {
          case 0:
            return new F.ZN();
          case 1:
            return x[0];
          default:
            return new F.ZE(x);
        }
      }
      function hn(x, l, c, p, A = {}, P = {}) {
        const q = [],
          X = [];
        let Ee = -1,
          ke = null;
        if (
          (p.forEach((ut) => {
            const At = ut.offset,
              Rt = At == Ee,
              Kt = (Rt && ke) || {};
            Object.keys(ut).forEach((bt) => {
              let Vt = bt,
                gn = ut[bt];
              if ("offset" !== bt)
                switch (((Vt = l.normalizePropertyName(Vt, q)), gn)) {
                  case F.k1:
                    gn = A[bt];
                    break;
                  case F.l3:
                    gn = P[bt];
                    break;
                  default:
                    gn = l.normalizeStyleValue(bt, Vt, gn, q);
                }
              Kt[Vt] = gn;
            }),
              Rt || X.push(Kt),
              (ke = Kt),
              (Ee = At);
          }),
          q.length)
        )
          throw (function he(x) {
            return new o.vHH(3502, B);
          })();
        return X;
      }
      function An(x, l, c, p) {
        switch (l) {
          case "start":
            x.onStart(() => p(c && Nn(c, "start", x)));
            break;
          case "done":
            x.onDone(() => p(c && Nn(c, "done", x)));
            break;
          case "destroy":
            x.onDestroy(() => p(c && Nn(c, "destroy", x)));
        }
      }
      function Nn(x, l, c) {
        const p = c.totalTime,
          P = vn(
            x.element,
            x.triggerName,
            x.fromState,
            x.toState,
            l || x.phaseName,
            null == p ? x.totalTime : p,
            !!c.disabled
          ),
          q = x._data;
        return null != q && (P._data = q), P;
      }
      function vn(x, l, c, p, A = "", P = 0, q) {
        return {
          element: x,
          triggerName: l,
          fromState: c,
          toState: p,
          phaseName: A,
          totalTime: P,
          disabled: !!q,
        };
      }
      function qt(x, l, c) {
        let p;
        return (
          x instanceof Map
            ? ((p = x.get(l)), p || x.set(l, (p = c)))
            : ((p = x[l]), p || (p = x[l] = c)),
          p
        );
      }
      function Bn(x) {
        const l = x.indexOf(":");
        return [x.substring(1, l), x.substr(l + 1)];
      }
      let zn = (x, l) => !1,
        Zn = (x, l, c) => [],
        St = null;
      function Xn(x) {
        const l = x.parentNode || x.host;
        return l === St ? null : l;
      }
      (Ln() || "undefined" != typeof Element) &&
        (kt()
          ? ((St = (() => document.documentElement)()),
            (zn = (x, l) => {
              for (; l; ) {
                if (l === x) return !0;
                l = Xn(l);
              }
              return !1;
            }))
          : (zn = (x, l) => x.contains(l)),
        (Zn = (x, l, c) => {
          if (c) return Array.from(x.querySelectorAll(l));
          const p = x.querySelector(l);
          return p ? [p] : [];
        }));
      let In = null,
        Hn = !1;
      function jn(x) {
        In ||
          ((In =
            (function _n() {
              return "undefined" != typeof document ? document.body : null;
            })() || {}),
          (Hn = !!In.style && "WebkitAppearance" in In.style));
        let l = !0;
        return (
          In.style &&
            !(function wn(x) {
              return "ebkit" == x.substring(1, 6);
            })(x) &&
            ((l = x in In.style),
            !l &&
              Hn &&
              (l =
                "Webkit" + x.charAt(0).toUpperCase() + x.substr(1) in
                In.style)),
          l
        );
      }
      const Un = zn,
        Sn = Zn;
      let Ct = (() => {
          class x {
            validateStyleProperty(c) {
              return jn(c);
            }
            matchesElement(c, p) {
              return !1;
            }
            containsElement(c, p) {
              return Un(c, p);
            }
            getParentElement(c) {
              return Xn(c);
            }
            query(c, p, A) {
              return Sn(c, p, A);
            }
            computeStyle(c, p, A) {
              return A || "";
            }
            animate(c, p, A, P, q, X = [], Ee) {
              return new F.ZN(A, P);
            }
          }
          return (
            (x.ɵfac = function (c) {
              return new (c || x)();
            }),
            (x.ɵprov = o.Yz7({ token: x, factory: x.ɵfac })),
            x
          );
        })(),
        mt = (() => {
          class x {}
          return (x.NOOP = new Ct()), x;
        })();
      const De = "ng-enter",
        be = "ng-leave",
        M = "ng-trigger",
        I = ".ng-trigger",
        se = "ng-animating",
        pe = ".ng-animating";
      function qe(x) {
        if ("number" == typeof x) return x;
        const l = x.match(/^(-?[\.\d]+)(m?s)/);
        return !l || l.length < 2 ? 0 : nt(parseFloat(l[1]), l[2]);
      }
      function nt(x, l) {
        return "s" === l ? 1e3 * x : x;
      }
      function ee(x, l, c) {
        return x.hasOwnProperty("duration")
          ? x
          : (function Ke(x, l, c) {
              let A,
                P = 0,
                q = "";
              if ("string" == typeof x) {
                const X = x.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === X)
                  return l.push(J()), { duration: 0, delay: 0, easing: "" };
                A = nt(parseFloat(X[1]), X[2]);
                const Ee = X[3];
                null != Ee && (P = nt(parseFloat(Ee), X[4]));
                const ke = X[5];
                ke && (q = ke);
              } else A = x;
              if (!c) {
                let X = !1,
                  Ee = l.length;
                A < 0 &&
                  (l.push(
                    (function W() {
                      return new o.vHH(3100, B);
                    })()
                  ),
                  (X = !0)),
                  P < 0 &&
                    (l.push(
                      (function Y() {
                        return new o.vHH(3101, B);
                      })()
                    ),
                    (X = !0)),
                  X && l.splice(Ee, 0, J());
              }
              return { duration: A, delay: P, easing: q };
            })(x, l, c);
      }
      function ve(x, l = {}) {
        return (
          Object.keys(x).forEach((c) => {
            l[c] = x[c];
          }),
          l
        );
      }
      function K(x, l, c = {}) {
        if (l) for (let p in x) c[p] = x[p];
        else ve(x, c);
        return c;
      }
      function de(x, l, c) {
        return c ? l + ":" + c + ";" : "";
      }
      function Ne(x) {
        let l = "";
        for (let c = 0; c < x.style.length; c++) {
          const p = x.style.item(c);
          l += de(0, p, x.style.getPropertyValue(p));
        }
        for (const c in x.style)
          x.style.hasOwnProperty(c) &&
            !c.startsWith("_") &&
            (l += de(0, ht(c), x.style[c]));
        x.setAttribute("style", l);
      }
      function ze(x, l, c) {
        x.style &&
          (Object.keys(l).forEach((p) => {
            const A = _t(p);
            c && !c.hasOwnProperty(p) && (c[p] = x.style[A]),
              (x.style[A] = l[p]);
          }),
          Ln() && Ne(x));
      }
      function ct(x, l) {
        x.style &&
          (Object.keys(l).forEach((c) => {
            const p = _t(c);
            x.style[p] = "";
          }),
          Ln() && Ne(x));
      }
      function Ut(x) {
        return Array.isArray(x) ? (1 == x.length ? x[0] : (0, F.vP)(x)) : x;
      }
      const Q = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function R(x) {
        let l = [];
        if ("string" == typeof x) {
          let c;
          for (; (c = Q.exec(x)); ) l.push(c[1]);
          Q.lastIndex = 0;
        }
        return l;
      }
      function ae(x, l, c) {
        const p = x.toString(),
          A = p.replace(Q, (P, q) => {
            let X = l[q];
            return (
              l.hasOwnProperty(q) ||
                (c.push(
                  (function V(x) {
                    return new o.vHH(3003, B);
                  })()
                ),
                (X = "")),
              X.toString()
            );
          });
        return A == p ? x : A;
      }
      function Le(x) {
        const l = [];
        let c = x.next();
        for (; !c.done; ) l.push(c.value), (c = x.next());
        return l;
      }
      const rt = /-+([a-z0-9])/g;
      function _t(x) {
        return x.replace(rt, (...l) => l[1].toUpperCase());
      }
      function ht(x) {
        return x.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function an(x, l, c) {
        switch (l.type) {
          case 7:
            return x.visitTrigger(l, c);
          case 0:
            return x.visitState(l, c);
          case 1:
            return x.visitTransition(l, c);
          case 2:
            return x.visitSequence(l, c);
          case 3:
            return x.visitGroup(l, c);
          case 4:
            return x.visitAnimate(l, c);
          case 5:
            return x.visitKeyframes(l, c);
          case 6:
            return x.visitStyle(l, c);
          case 8:
            return x.visitReference(l, c);
          case 9:
            return x.visitAnimateChild(l, c);
          case 10:
            return x.visitAnimateRef(l, c);
          case 11:
            return x.visitQuery(l, c);
          case 12:
            return x.visitStagger(l, c);
          default:
            throw (function Z(x) {
              return new o.vHH(3004, B);
            })();
        }
      }
      function pn(x, l) {
        return window.getComputedStyle(x)[l];
      }
      function Rn(x, l) {
        const c = [];
        return (
          "string" == typeof x
            ? x.split(/\s*,\s*/).forEach((p) =>
                (function cr(x, l, c) {
                  if (":" == x[0]) {
                    const Ee = (function ln(x, l) {
                      switch (x) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (c, p) => parseFloat(p) > parseFloat(c);
                        case ":decrement":
                          return (c, p) => parseFloat(p) < parseFloat(c);
                        default:
                          return (
                            l.push(
                              (function Me(x) {
                                return new o.vHH(3016, B);
                              })()
                            ),
                            "* => *"
                          );
                      }
                    })(x, c);
                    if ("function" == typeof Ee) return void l.push(Ee);
                    x = Ee;
                  }
                  const p = x.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == p || p.length < 4)
                    return (
                      c.push(
                        (function et(x) {
                          return new o.vHH(3015, B);
                        })()
                      ),
                      l
                    );
                  const A = p[1],
                    P = p[2],
                    q = p[3];
                  l.push(Nt(A, q));
                  "<" == P[0] && !("*" == A && "*" == q) && l.push(Nt(q, A));
                })(p, c, l)
              )
            : c.push(x),
          c
        );
      }
      const or = new Set(["true", "1"]),
        dr = new Set(["false", "0"]);
      function Nt(x, l) {
        const c = or.has(x) || dr.has(x),
          p = or.has(l) || dr.has(l);
        return (A, P) => {
          let q = "*" == x || x == A,
            X = "*" == l || l == P;
          return (
            !q && c && "boolean" == typeof A && (q = A ? or.has(x) : dr.has(x)),
            !X && p && "boolean" == typeof P && (X = P ? or.has(l) : dr.has(l)),
            q && X
          );
        };
      }
      const Cr = new RegExp("s*:selfs*,?", "g");
      function z(x, l, c, p) {
        return new me(x).build(l, c, p);
      }
      class me {
        constructor(l) {
          this._driver = l;
        }
        build(l, c, p) {
          const A = new Qe(c);
          this._resetContextStyleTimingState(A);
          const P = an(this, Ut(l), A);
          return (
            A.unsupportedCSSPropertiesFound.size &&
              A.unsupportedCSSPropertiesFound.keys(),
            P
          );
        }
        _resetContextStyleTimingState(l) {
          (l.currentQuerySelector = ""),
            (l.collectedStyles = {}),
            (l.collectedStyles[""] = {}),
            (l.currentTime = 0);
        }
        visitTrigger(l, c) {
          let p = (c.queryCount = 0),
            A = (c.depCount = 0);
          const P = [],
            q = [];
          return (
            "@" == l.name.charAt(0) &&
              c.errors.push(
                (function Oe() {
                  return new o.vHH(3006, B);
                })()
              ),
            l.definitions.forEach((X) => {
              if ((this._resetContextStyleTimingState(c), 0 == X.type)) {
                const Ee = X,
                  ke = Ee.name;
                ke
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((ut) => {
                    (Ee.name = ut), P.push(this.visitState(Ee, c));
                  }),
                  (Ee.name = ke);
              } else if (1 == X.type) {
                const Ee = this.visitTransition(X, c);
                (p += Ee.queryCount), (A += Ee.depCount), q.push(Ee);
              } else
                c.errors.push(
                  (function Te() {
                    return new o.vHH(3007, B);
                  })()
                );
            }),
            {
              type: 7,
              name: l.name,
              states: P,
              transitions: q,
              queryCount: p,
              depCount: A,
              options: null,
            }
          );
        }
        visitState(l, c) {
          const p = this.visitStyle(l.styles, c),
            A = (l.options && l.options.params) || null;
          if (p.containsDynamicStyles) {
            const P = new Set(),
              q = A || {};
            p.styles.forEach((X) => {
              if (Dn(X)) {
                const Ee = X;
                Object.keys(Ee).forEach((ke) => {
                  R(Ee[ke]).forEach((ut) => {
                    q.hasOwnProperty(ut) || P.add(ut);
                  });
                });
              }
            }),
              P.size &&
                (Le(P.values()),
                c.errors.push(
                  (function Ae(x, l) {
                    return new o.vHH(3008, B);
                  })()
                ));
          }
          return {
            type: 0,
            name: l.name,
            style: p,
            options: A ? { params: A } : null,
          };
        }
        visitTransition(l, c) {
          (c.queryCount = 0), (c.depCount = 0);
          const p = an(this, Ut(l.animation), c);
          return {
            type: 1,
            matchers: Rn(l.expr, c.errors),
            animation: p,
            queryCount: c.queryCount,
            depCount: c.depCount,
            options: Zt(l.options),
          };
        }
        visitSequence(l, c) {
          return {
            type: 2,
            steps: l.steps.map((p) => an(this, p, c)),
            options: Zt(l.options),
          };
        }
        visitGroup(l, c) {
          const p = c.currentTime;
          let A = 0;
          const P = l.steps.map((q) => {
            c.currentTime = p;
            const X = an(this, q, c);
            return (A = Math.max(A, c.currentTime)), X;
          });
          return (
            (c.currentTime = A), { type: 3, steps: P, options: Zt(l.options) }
          );
        }
        visitAnimate(l, c) {
          const p = (function en(x, l) {
            let c = null;
            if (x.hasOwnProperty("duration")) c = x;
            else if ("number" == typeof x) return Bt(ee(x, l).duration, 0, "");
            const p = x;
            if (
              p
                .split(/\s+/)
                .some((P) => "{" == P.charAt(0) && "{" == P.charAt(1))
            ) {
              const P = Bt(0, 0, "");
              return (P.dynamic = !0), (P.strValue = p), P;
            }
            return (c = c || ee(p, l)), Bt(c.duration, c.delay, c.easing);
          })(l.timings, c.errors);
          c.currentAnimateTimings = p;
          let A,
            P = l.styles ? l.styles : (0, F.oB)({});
          if (5 == P.type) A = this.visitKeyframes(P, c);
          else {
            let q = l.styles,
              X = !1;
            if (!q) {
              X = !0;
              const ke = {};
              p.easing && (ke.easing = p.easing), (q = (0, F.oB)(ke));
            }
            c.currentTime += p.duration + p.delay;
            const Ee = this.visitStyle(q, c);
            (Ee.isEmptyStep = X), (A = Ee);
          }
          return (
            (c.currentAnimateTimings = null),
            { type: 4, timings: p, style: A, options: null }
          );
        }
        visitStyle(l, c) {
          const p = this._makeStyleAst(l, c);
          return this._validateStyleAst(p, c), p;
        }
        _makeStyleAst(l, c) {
          const p = [];
          Array.isArray(l.styles)
            ? l.styles.forEach((q) => {
                "string" == typeof q
                  ? q == F.l3
                    ? p.push(q)
                    : c.errors.push(
                        (function Je(x) {
                          return new o.vHH(3002, B);
                        })()
                      )
                  : p.push(q);
              })
            : p.push(l.styles);
          let A = !1,
            P = null;
          return (
            p.forEach((q) => {
              if (Dn(q)) {
                const X = q,
                  Ee = X.easing;
                if ((Ee && ((P = Ee), delete X.easing), !A))
                  for (let ke in X)
                    if (X[ke].toString().indexOf("{{") >= 0) {
                      A = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: p,
              easing: P,
              offset: l.offset,
              containsDynamicStyles: A,
              options: null,
            }
          );
        }
        _validateStyleAst(l, c) {
          const p = c.currentAnimateTimings;
          let A = c.currentTime,
            P = c.currentTime;
          p && P > 0 && (P -= p.duration + p.delay),
            l.styles.forEach((q) => {
              "string" != typeof q &&
                Object.keys(q).forEach((X) => {
                  if (!this._driver.validateStyleProperty(X))
                    return (
                      delete q[X], void c.unsupportedCSSPropertiesFound.add(X)
                    );
                  const Ee = c.collectedStyles[c.currentQuerySelector],
                    ke = Ee[X];
                  let ut = !0;
                  ke &&
                    (P != A &&
                      P >= ke.startTime &&
                      A <= ke.endTime &&
                      (c.errors.push(
                        (function He(x, l, c, p, A) {
                          return new o.vHH(3010, B);
                        })()
                      ),
                      (ut = !1)),
                    (P = ke.startTime)),
                    ut && (Ee[X] = { startTime: P, endTime: A }),
                    c.options &&
                      (function fe(x, l, c) {
                        const p = l.params || {},
                          A = R(x);
                        A.length &&
                          A.forEach((P) => {
                            p.hasOwnProperty(P) ||
                              c.push(
                                (function L(x) {
                                  return new o.vHH(3001, B);
                                })()
                              );
                          });
                      })(q[X], c.options, c.errors);
                });
            });
        }
        visitKeyframes(l, c) {
          const p = { type: 5, styles: [], options: null };
          if (!c.currentAnimateTimings)
            return (
              c.errors.push(
                (function Ze() {
                  return new o.vHH(3011, B);
                })()
              ),
              p
            );
          let P = 0;
          const q = [];
          let X = !1,
            Ee = !1,
            ke = 0;
          const ut = l.steps.map((Vn) => {
            const qn = this._makeStyleAst(Vn, c);
            let gr =
                null != qn.offset
                  ? qn.offset
                  : (function Et(x) {
                      if ("string" == typeof x) return null;
                      let l = null;
                      if (Array.isArray(x))
                        x.forEach((c) => {
                          if (Dn(c) && c.hasOwnProperty("offset")) {
                            const p = c;
                            (l = parseFloat(p.offset)), delete p.offset;
                          }
                        });
                      else if (Dn(x) && x.hasOwnProperty("offset")) {
                        const c = x;
                        (l = parseFloat(c.offset)), delete c.offset;
                      }
                      return l;
                    })(qn.styles),
              rn = 0;
            return (
              null != gr && (P++, (rn = qn.offset = gr)),
              (Ee = Ee || rn < 0 || rn > 1),
              (X = X || rn < ke),
              (ke = rn),
              q.push(rn),
              qn
            );
          });
          Ee &&
            c.errors.push(
              (function Ge() {
                return new o.vHH(3012, B);
              })()
            ),
            X &&
              c.errors.push(
                (function Se() {
                  return new o.vHH(3200, B);
                })()
              );
          const At = l.steps.length;
          let Rt = 0;
          P > 0 && P < At
            ? c.errors.push(
                (function oe() {
                  return new o.vHH(3202, B);
                })()
              )
            : 0 == P && (Rt = 1 / (At - 1));
          const Kt = At - 1,
            bt = c.currentTime,
            Vt = c.currentAnimateTimings,
            gn = Vt.duration;
          return (
            ut.forEach((Vn, qn) => {
              const gr = Rt > 0 ? (qn == Kt ? 1 : Rt * qn) : q[qn],
                rn = gr * gn;
              (c.currentTime = bt + Vt.delay + rn),
                (Vt.duration = rn),
                this._validateStyleAst(Vn, c),
                (Vn.offset = gr),
                p.styles.push(Vn);
            }),
            p
          );
        }
        visitReference(l, c) {
          return {
            type: 8,
            animation: an(this, Ut(l.animation), c),
            options: Zt(l.options),
          };
        }
        visitAnimateChild(l, c) {
          return c.depCount++, { type: 9, options: Zt(l.options) };
        }
        visitAnimateRef(l, c) {
          return {
            type: 10,
            animation: this.visitReference(l.animation, c),
            options: Zt(l.options),
          };
        }
        visitQuery(l, c) {
          const p = c.currentQuerySelector,
            A = l.options || {};
          c.queryCount++, (c.currentQuery = l);
          const [P, q] = (function we(x) {
            const l = !!x.split(/\s*,\s*/).find((c) => ":self" == c);
            return (
              l && (x = x.replace(Cr, "")),
              (x = x
                .replace(/@\*/g, I)
                .replace(/@\w+/g, (c) => I + "-" + c.substr(1))
                .replace(/:animating/g, pe)),
              [x, l]
            );
          })(l.selector);
          (c.currentQuerySelector = p.length ? p + " " + P : P),
            qt(c.collectedStyles, c.currentQuerySelector, {});
          const X = an(this, Ut(l.animation), c);
          return (
            (c.currentQuery = null),
            (c.currentQuerySelector = p),
            {
              type: 11,
              selector: P,
              limit: A.limit || 0,
              optional: !!A.optional,
              includeSelf: q,
              animation: X,
              originalSelector: l.selector,
              options: Zt(l.options),
            }
          );
        }
        visitStagger(l, c) {
          c.currentQuery ||
            c.errors.push(
              (function je() {
                return new o.vHH(3013, B);
              })()
            );
          const p =
            "full" === l.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : ee(l.timings, c.errors, !0);
          return {
            type: 12,
            animation: an(this, Ut(l.animation), c),
            timings: p,
            options: null,
          };
        }
      }
      class Qe {
        constructor(l) {
          (this.errors = l),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null),
            (this.unsupportedCSSPropertiesFound = new Set());
        }
      }
      function Dn(x) {
        return !Array.isArray(x) && "object" == typeof x;
      }
      function Zt(x) {
        return (
          x
            ? (x = ve(x)).params &&
              (x.params = (function Ye(x) {
                return x ? ve(x) : null;
              })(x.params))
            : (x = {}),
          x
        );
      }
      function Bt(x, l, c) {
        return { duration: x, delay: l, easing: c };
      }
      function bn(x, l, c, p, A, P, q = null, X = !1) {
        return {
          type: 1,
          element: x,
          keyframes: l,
          preStyleProps: c,
          postStyleProps: p,
          duration: A,
          delay: P,
          totalTime: A + P,
          easing: q,
          subTimeline: X,
        };
      }
      class xr {
        constructor() {
          this._map = new Map();
        }
        get(l) {
          return this._map.get(l) || [];
        }
        append(l, c) {
          let p = this._map.get(l);
          p || this._map.set(l, (p = [])), p.push(...c);
        }
        has(l) {
          return this._map.has(l);
        }
        clear() {
          this._map.clear();
        }
      }
      const Jr = new RegExp(":enter", "g"),
        ki = new RegExp(":leave", "g");
      function Kn(x, l, c, p, A, P = {}, q = {}, X, Ee, ke = []) {
        return new Qi().buildKeyframes(x, l, c, p, A, P, q, X, Ee, ke);
      }
      class Qi {
        buildKeyframes(l, c, p, A, P, q, X, Ee, ke, ut = []) {
          ke = ke || new xr();
          const At = new ce(l, c, ke, A, P, ut, []);
          (At.options = Ee),
            At.currentTimeline.setStyles([q], null, At.errors, Ee),
            an(this, p, At);
          const Rt = At.timelines.filter((Kt) => Kt.containsAnimation());
          if (Object.keys(X).length) {
            let Kt;
            for (let bt = Rt.length - 1; bt >= 0; bt--) {
              const Vt = Rt[bt];
              if (Vt.element === c) {
                Kt = Vt;
                break;
              }
            }
            Kt &&
              !Kt.allowOnlyTimelineStyles() &&
              Kt.setStyles([X], null, At.errors, Ee);
          }
          return Rt.length
            ? Rt.map((Kt) => Kt.buildKeyframes())
            : [bn(c, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(l, c) {}
        visitState(l, c) {}
        visitTransition(l, c) {}
        visitAnimateChild(l, c) {
          const p = c.subInstructions.get(c.element);
          if (p) {
            const A = c.createSubContext(l.options),
              P = c.currentTimeline.currentTime,
              q = this._visitSubInstructions(p, A, A.options);
            P != q && c.transformIntoNewTimeline(q);
          }
          c.previousNode = l;
        }
        visitAnimateRef(l, c) {
          const p = c.createSubContext(l.options);
          p.transformIntoNewTimeline(),
            this.visitReference(l.animation, p),
            c.transformIntoNewTimeline(p.currentTimeline.currentTime),
            (c.previousNode = l);
        }
        _visitSubInstructions(l, c, p) {
          let P = c.currentTimeline.currentTime;
          const q = null != p.duration ? qe(p.duration) : null,
            X = null != p.delay ? qe(p.delay) : null;
          return (
            0 !== q &&
              l.forEach((Ee) => {
                const ke = c.appendInstructionToTimeline(Ee, q, X);
                P = Math.max(P, ke.duration + ke.delay);
              }),
            P
          );
        }
        visitReference(l, c) {
          c.updateOptions(l.options, !0),
            an(this, l.animation, c),
            (c.previousNode = l);
        }
        visitSequence(l, c) {
          const p = c.subContextCount;
          let A = c;
          const P = l.options;
          if (
            P &&
            (P.params || P.delay) &&
            ((A = c.createSubContext(P)),
            A.transformIntoNewTimeline(),
            null != P.delay)
          ) {
            6 == A.previousNode.type &&
              (A.currentTimeline.snapshotCurrentStyles(), (A.previousNode = T));
            const q = qe(P.delay);
            A.delayNextStep(q);
          }
          l.steps.length &&
            (l.steps.forEach((q) => an(this, q, A)),
            A.currentTimeline.applyStylesToKeyframe(),
            A.subContextCount > p && A.transformIntoNewTimeline()),
            (c.previousNode = l);
        }
        visitGroup(l, c) {
          const p = [];
          let A = c.currentTimeline.currentTime;
          const P = l.options && l.options.delay ? qe(l.options.delay) : 0;
          l.steps.forEach((q) => {
            const X = c.createSubContext(l.options);
            P && X.delayNextStep(P),
              an(this, q, X),
              (A = Math.max(A, X.currentTimeline.currentTime)),
              p.push(X.currentTimeline);
          }),
            p.forEach((q) => c.currentTimeline.mergeTimelineCollectedStyles(q)),
            c.transformIntoNewTimeline(A),
            (c.previousNode = l);
        }
        _visitTiming(l, c) {
          if (l.dynamic) {
            const p = l.strValue;
            return ee(c.params ? ae(p, c.params, c.errors) : p, c.errors);
          }
          return { duration: l.duration, delay: l.delay, easing: l.easing };
        }
        visitAnimate(l, c) {
          const p = (c.currentAnimateTimings = this._visitTiming(l.timings, c)),
            A = c.currentTimeline;
          p.delay && (c.incrementTime(p.delay), A.snapshotCurrentStyles());
          const P = l.style;
          5 == P.type
            ? this.visitKeyframes(P, c)
            : (c.incrementTime(p.duration),
              this.visitStyle(P, c),
              A.applyStylesToKeyframe()),
            (c.currentAnimateTimings = null),
            (c.previousNode = l);
        }
        visitStyle(l, c) {
          const p = c.currentTimeline,
            A = c.currentAnimateTimings;
          !A && p.getCurrentStyleProperties().length && p.forwardFrame();
          const P = (A && A.easing) || l.easing;
          l.isEmptyStep
            ? p.applyEmptyStep(P)
            : p.setStyles(l.styles, P, c.errors, c.options),
            (c.previousNode = l);
        }
        visitKeyframes(l, c) {
          const p = c.currentAnimateTimings,
            A = c.currentTimeline.duration,
            P = p.duration,
            X = c.createSubContext().currentTimeline;
          (X.easing = p.easing),
            l.styles.forEach((Ee) => {
              X.forwardTime((Ee.offset || 0) * P),
                X.setStyles(Ee.styles, Ee.easing, c.errors, c.options),
                X.applyStylesToKeyframe();
            }),
            c.currentTimeline.mergeTimelineCollectedStyles(X),
            c.transformIntoNewTimeline(A + P),
            (c.previousNode = l);
        }
        visitQuery(l, c) {
          const p = c.currentTimeline.currentTime,
            A = l.options || {},
            P = A.delay ? qe(A.delay) : 0;
          P &&
            (6 === c.previousNode.type ||
              (0 == p &&
                c.currentTimeline.getCurrentStyleProperties().length)) &&
            (c.currentTimeline.snapshotCurrentStyles(), (c.previousNode = T));
          let q = p;
          const X = c.invokeQuery(
            l.selector,
            l.originalSelector,
            l.limit,
            l.includeSelf,
            !!A.optional,
            c.errors
          );
          c.currentQueryTotal = X.length;
          let Ee = null;
          X.forEach((ke, ut) => {
            c.currentQueryIndex = ut;
            const At = c.createSubContext(l.options, ke);
            P && At.delayNextStep(P),
              ke === c.element && (Ee = At.currentTimeline),
              an(this, l.animation, At),
              At.currentTimeline.applyStylesToKeyframe(),
              (q = Math.max(q, At.currentTimeline.currentTime));
          }),
            (c.currentQueryIndex = 0),
            (c.currentQueryTotal = 0),
            c.transformIntoNewTimeline(q),
            Ee &&
              (c.currentTimeline.mergeTimelineCollectedStyles(Ee),
              c.currentTimeline.snapshotCurrentStyles()),
            (c.previousNode = l);
        }
        visitStagger(l, c) {
          const p = c.parentContext,
            A = c.currentTimeline,
            P = l.timings,
            q = Math.abs(P.duration),
            X = q * (c.currentQueryTotal - 1);
          let Ee = q * c.currentQueryIndex;
          switch (P.duration < 0 ? "reverse" : P.easing) {
            case "reverse":
              Ee = X - Ee;
              break;
            case "full":
              Ee = p.currentStaggerTime;
          }
          const ut = c.currentTimeline;
          Ee && ut.delayNextStep(Ee);
          const At = ut.currentTime;
          an(this, l.animation, c),
            (c.previousNode = l),
            (p.currentStaggerTime =
              A.currentTime - At + (A.startTime - p.currentTimeline.startTime));
        }
      }
      const T = {};
      class ce {
        constructor(l, c, p, A, P, q, X, Ee) {
          (this._driver = l),
            (this.element = c),
            (this.subInstructions = p),
            (this._enterClassName = A),
            (this._leaveClassName = P),
            (this.errors = q),
            (this.timelines = X),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = T),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = Ee || new H(this._driver, c, 0)),
            X.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(l, c) {
          if (!l) return;
          const p = l;
          let A = this.options;
          null != p.duration && (A.duration = qe(p.duration)),
            null != p.delay && (A.delay = qe(p.delay));
          const P = p.params;
          if (P) {
            let q = A.params;
            q || (q = this.options.params = {}),
              Object.keys(P).forEach((X) => {
                (!c || !q.hasOwnProperty(X)) &&
                  (q[X] = ae(P[X], q, this.errors));
              });
          }
        }
        _copyOptions() {
          const l = {};
          if (this.options) {
            const c = this.options.params;
            if (c) {
              const p = (l.params = {});
              Object.keys(c).forEach((A) => {
                p[A] = c[A];
              });
            }
          }
          return l;
        }
        createSubContext(l = null, c, p) {
          const A = c || this.element,
            P = new ce(
              this._driver,
              A,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(A, p || 0)
            );
          return (
            (P.previousNode = this.previousNode),
            (P.currentAnimateTimings = this.currentAnimateTimings),
            (P.options = this._copyOptions()),
            P.updateOptions(l),
            (P.currentQueryIndex = this.currentQueryIndex),
            (P.currentQueryTotal = this.currentQueryTotal),
            (P.parentContext = this),
            this.subContextCount++,
            P
          );
        }
        transformIntoNewTimeline(l) {
          return (
            (this.previousNode = T),
            (this.currentTimeline = this.currentTimeline.fork(this.element, l)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(l, c, p) {
          const A = {
              duration: null != c ? c : l.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != p ? p : 0) +
                l.delay,
              easing: "",
            },
            P = new Ce(
              this._driver,
              l.element,
              l.keyframes,
              l.preStyleProps,
              l.postStyleProps,
              A,
              l.stretchStartingKeyframe
            );
          return this.timelines.push(P), A;
        }
        incrementTime(l) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + l);
        }
        delayNextStep(l) {
          l > 0 && this.currentTimeline.delayNextStep(l);
        }
        invokeQuery(l, c, p, A, P, q) {
          let X = [];
          if ((A && X.push(this.element), l.length > 0)) {
            l = (l = l.replace(Jr, "." + this._enterClassName)).replace(
              ki,
              "." + this._leaveClassName
            );
            let ke = this._driver.query(this.element, l, 1 != p);
            0 !== p &&
              (ke =
                p < 0 ? ke.slice(ke.length + p, ke.length) : ke.slice(0, p)),
              X.push(...ke);
          }
          return (
            !P &&
              0 == X.length &&
              q.push(
                (function Ve(x) {
                  return new o.vHH(3014, B);
                })()
              ),
            X
          );
        }
      }
      class H {
        constructor(l, c, p, A) {
          (this._driver = l),
            (this.element = c),
            (this.startTime = p),
            (this._elementTimelineStylesLookup = A),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(c)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                c,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(l) {
          const c =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || c
            ? (this.forwardTime(this.currentTime + l),
              c && this.snapshotCurrentStyles())
            : (this.startTime += l);
        }
        fork(l, c) {
          return (
            this.applyStylesToKeyframe(),
            new H(
              this._driver,
              l,
              c || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(l) {
          this.applyStylesToKeyframe(),
            (this.duration = l),
            this._loadKeyframe();
        }
        _updateStyle(l, c) {
          (this._localTimelineStyles[l] = c),
            (this._globalTimelineStyles[l] = c),
            (this._styleSummary[l] = { time: this.currentTime, value: c });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(l) {
          l && (this._previousKeyframe.easing = l),
            Object.keys(this._globalTimelineStyles).forEach((c) => {
              (this._backFill[c] = this._globalTimelineStyles[c] || F.l3),
                (this._currentKeyframe[c] = F.l3);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(l, c, p, A) {
          c && (this._previousKeyframe.easing = c);
          const P = (A && A.params) || {},
            q = (function Tt(x, l) {
              const c = {};
              let p;
              return (
                x.forEach((A) => {
                  "*" === A
                    ? ((p = p || Object.keys(l)),
                      p.forEach((P) => {
                        c[P] = F.l3;
                      }))
                    : K(A, !1, c);
                }),
                c
              );
            })(l, this._globalTimelineStyles);
          Object.keys(q).forEach((X) => {
            const Ee = ae(q[X], P, p);
            (this._pendingStyles[X] = Ee),
              this._localTimelineStyles.hasOwnProperty(X) ||
                (this._backFill[X] = this._globalTimelineStyles.hasOwnProperty(
                  X
                )
                  ? this._globalTimelineStyles[X]
                  : F.l3),
              this._updateStyle(X, Ee);
          });
        }
        applyStylesToKeyframe() {
          const l = this._pendingStyles,
            c = Object.keys(l);
          0 != c.length &&
            ((this._pendingStyles = {}),
            c.forEach((p) => {
              this._currentKeyframe[p] = l[p];
            }),
            Object.keys(this._localTimelineStyles).forEach((p) => {
              this._currentKeyframe.hasOwnProperty(p) ||
                (this._currentKeyframe[p] = this._localTimelineStyles[p]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((l) => {
            const c = this._localTimelineStyles[l];
            (this._pendingStyles[l] = c), this._updateStyle(l, c);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const l = [];
          for (let c in this._currentKeyframe) l.push(c);
          return l;
        }
        mergeTimelineCollectedStyles(l) {
          Object.keys(l._styleSummary).forEach((c) => {
            const p = this._styleSummary[c],
              A = l._styleSummary[c];
            (!p || A.time > p.time) && this._updateStyle(c, A.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const l = new Set(),
            c = new Set(),
            p = 1 === this._keyframes.size && 0 === this.duration;
          let A = [];
          this._keyframes.forEach((X, Ee) => {
            const ke = K(X, !0);
            Object.keys(ke).forEach((ut) => {
              const At = ke[ut];
              At == F.k1 ? l.add(ut) : At == F.l3 && c.add(ut);
            }),
              p || (ke.offset = Ee / this.duration),
              A.push(ke);
          });
          const P = l.size ? Le(l.values()) : [],
            q = c.size ? Le(c.values()) : [];
          if (p) {
            const X = A[0],
              Ee = ve(X);
            (X.offset = 0), (Ee.offset = 1), (A = [X, Ee]);
          }
          return bn(
            this.element,
            A,
            P,
            q,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Ce extends H {
        constructor(l, c, p, A, P, q, X = !1) {
          super(l, c, q.delay),
            (this.keyframes = p),
            (this.preStyleProps = A),
            (this.postStyleProps = P),
            (this._stretchStartingKeyframe = X),
            (this.timings = {
              duration: q.duration,
              delay: q.delay,
              easing: q.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let l = this.keyframes,
            { delay: c, duration: p, easing: A } = this.timings;
          if (this._stretchStartingKeyframe && c) {
            const P = [],
              q = p + c,
              X = c / q,
              Ee = K(l[0], !1);
            (Ee.offset = 0), P.push(Ee);
            const ke = K(l[0], !1);
            (ke.offset = vt(X)), P.push(ke);
            const ut = l.length - 1;
            for (let At = 1; At <= ut; At++) {
              let Rt = K(l[At], !1);
              (Rt.offset = vt((c + Rt.offset * p) / q)), P.push(Rt);
            }
            (p = q), (c = 0), (A = ""), (l = P);
          }
          return bn(
            this.element,
            l,
            this.preStyleProps,
            this.postStyleProps,
            p,
            c,
            A,
            !0
          );
        }
      }
      function vt(x, l = 3) {
        const c = Math.pow(10, l - 1);
        return Math.round(x * c) / c;
      }
      class ar {}
      class qi extends ar {
        normalizePropertyName(l, c) {
          return _t(l);
        }
        normalizeStyleValue(l, c, p, A) {
          let P = "";
          const q = p.toString().trim();
          if (Zi[c] && 0 !== p && "0" !== p)
            if ("number" == typeof p) P = "px";
            else {
              const X = p.match(/^[+-]?[\d\.]+([a-z]*)$/);
              X &&
                0 == X[1].length &&
                A.push(
                  (function $(x, l) {
                    return new o.vHH(3005, B);
                  })()
                );
            }
          return q + P;
        }
      }
      const Zi = (() =>
        (function _i(x) {
          const l = {};
          return x.forEach((c) => (l[c] = !0)), l;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function Ei(x, l, c, p, A, P, q, X, Ee, ke, ut, At, Rt) {
        return {
          type: 0,
          element: x,
          triggerName: l,
          isRemovalTransition: A,
          fromState: c,
          fromStyles: P,
          toState: p,
          toStyles: q,
          timelines: X,
          queriedElements: Ee,
          preStyleProps: ke,
          postStyleProps: ut,
          totalTime: At,
          errors: Rt,
        };
      }
      const $r = {};
      class Di {
        constructor(l, c, p) {
          (this._triggerName = l), (this.ast = c), (this._stateStyles = p);
        }
        match(l, c, p, A) {
          return (function Xi(x, l, c, p, A) {
            return x.some((P) => P(l, c, p, A));
          })(this.ast.matchers, l, c, p, A);
        }
        buildStyles(l, c, p) {
          const A = this._stateStyles["*"],
            P = this._stateStyles[l],
            q = A ? A.buildStyles(c, p) : {};
          return P ? P.buildStyles(c, p) : q;
        }
        build(l, c, p, A, P, q, X, Ee, ke, ut) {
          const At = [],
            Rt = (this.ast.options && this.ast.options.params) || $r,
            bt = this.buildStyles(p, (X && X.params) || $r, At),
            Vt = (Ee && Ee.params) || $r,
            gn = this.buildStyles(A, Vt, At),
            Vn = new Set(),
            qn = new Map(),
            gr = new Map(),
            rn = "void" === A,
            wr = { params: Object.assign(Object.assign({}, Rt), Vt) },
            dn = ut
              ? []
              : Kn(l, c, this.ast.animation, P, q, bt, gn, wr, ke, At);
          let lr = 0;
          if (
            (dn.forEach((Gr) => {
              lr = Math.max(Gr.duration + Gr.delay, lr);
            }),
            At.length)
          )
            return Ei(
              c,
              this._triggerName,
              p,
              A,
              rn,
              bt,
              gn,
              [],
              [],
              qn,
              gr,
              lr,
              At
            );
          dn.forEach((Gr) => {
            const Yr = Gr.element,
              Os = qt(qn, Yr, {});
            Gr.preStyleProps.forEach((Vr) => (Os[Vr] = !0));
            const Hi = qt(gr, Yr, {});
            Gr.postStyleProps.forEach((Vr) => (Hi[Vr] = !0)),
              Yr !== c && Vn.add(Yr);
          });
          const Rr = Le(Vn.values());
          return Ei(c, this._triggerName, p, A, rn, bt, gn, dn, Rr, qn, gr, lr);
        }
      }
      class ls {
        constructor(l, c, p) {
          (this.styles = l), (this.defaultParams = c), (this.normalizer = p);
        }
        buildStyles(l, c) {
          const p = {},
            A = ve(this.defaultParams);
          return (
            Object.keys(l).forEach((P) => {
              const q = l[P];
              null != q && (A[P] = q);
            }),
            this.styles.styles.forEach((P) => {
              if ("string" != typeof P) {
                const q = P;
                Object.keys(q).forEach((X) => {
                  let Ee = q[X];
                  Ee.length > 1 && (Ee = ae(Ee, A, c));
                  const ke = this.normalizer.normalizePropertyName(X, c);
                  (Ee = this.normalizer.normalizeStyleValue(X, ke, Ee, c)),
                    (p[ke] = Ee);
                });
              }
            }),
            p
          );
        }
      }
      class kr {
        constructor(l, c, p) {
          (this.name = l),
            (this.ast = c),
            (this._normalizer = p),
            (this.transitionFactories = []),
            (this.states = {}),
            c.states.forEach((A) => {
              this.states[A.name] = new ls(
                A.style,
                (A.options && A.options.params) || {},
                p
              );
            }),
            ei(this.states, "true", "1"),
            ei(this.states, "false", "0"),
            c.transitions.forEach((A) => {
              this.transitionFactories.push(new Di(l, A, this.states));
            }),
            (this.fallbackTransition = (function cs(x, l, c) {
              return new Di(
                x,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [(q, X) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                l
              );
            })(l, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(l, c, p, A) {
          return (
            this.transitionFactories.find((q) => q.match(l, c, p, A)) || null
          );
        }
        matchStyles(l, c, p) {
          return this.fallbackTransition.buildStyles(l, c, p);
        }
      }
      function ei(x, l, c) {
        x.hasOwnProperty(l)
          ? x.hasOwnProperty(c) || (x[c] = x[l])
          : x.hasOwnProperty(c) && (x[l] = x[c]);
      }
      const Ci = new xr();
      class Bi {
        constructor(l, c, p) {
          (this.bodyNode = l),
            (this._driver = c),
            (this._normalizer = p),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(l, c) {
          const p = [],
            P = z(this._driver, c, p, []);
          if (p.length)
            throw (function xe(x) {
              return new o.vHH(3503, B);
            })();
          this._animations[l] = P;
        }
        _buildPlayer(l, c, p) {
          const A = l.element,
            P = hn(0, this._normalizer, 0, l.keyframes, c, p);
          return this._driver.animate(
            A,
            P,
            l.duration,
            l.delay,
            l.easing,
            [],
            !0
          );
        }
        create(l, c, p = {}) {
          const A = [],
            P = this._animations[l];
          let q;
          const X = new Map();
          if (
            (P
              ? ((q = Kn(this._driver, c, P, De, be, {}, {}, p, Ci, A)),
                q.forEach((ut) => {
                  const At = qt(X, ut.element, {});
                  ut.postStyleProps.forEach((Rt) => (At[Rt] = null));
                }))
              : (A.push(
                  (function ue() {
                    return new o.vHH(3300, B);
                  })()
                ),
                (q = [])),
            A.length)
          )
            throw (function tt(x) {
              return new o.vHH(3504, B);
            })();
          X.forEach((ut, At) => {
            Object.keys(ut).forEach((Rt) => {
              ut[Rt] = this._driver.computeStyle(At, Rt, F.l3);
            });
          });
          const ke = Qt(
            q.map((ut) => {
              const At = X.get(ut.element);
              return this._buildPlayer(ut, {}, At);
            })
          );
          return (
            (this._playersById[l] = ke),
            ke.onDestroy(() => this.destroy(l)),
            this.players.push(ke),
            ke
          );
        }
        destroy(l) {
          const c = this._getPlayer(l);
          c.destroy(), delete this._playersById[l];
          const p = this.players.indexOf(c);
          p >= 0 && this.players.splice(p, 1);
        }
        _getPlayer(l) {
          const c = this._playersById[l];
          if (!c)
            throw (function ft(x) {
              return new o.vHH(3301, B);
            })();
          return c;
        }
        listen(l, c, p, A) {
          const P = vn(c, "", "", "");
          return An(this._getPlayer(l), p, P, A), () => {};
        }
        command(l, c, p, A) {
          if ("register" == p) return void this.register(l, A[0]);
          if ("create" == p) return void this.create(l, c, A[0] || {});
          const P = this._getPlayer(l);
          switch (p) {
            case "play":
              P.play();
              break;
            case "pause":
              P.pause();
              break;
            case "reset":
              P.reset();
              break;
            case "restart":
              P.restart();
              break;
            case "finish":
              P.finish();
              break;
            case "init":
              P.init();
              break;
            case "setPosition":
              P.setPosition(parseFloat(A[0]));
              break;
            case "destroy":
              this.destroy(l);
          }
        }
      }
      const Br = "ng-animate-queued",
        Ar = "ng-animate-disabled",
        _r = [],
        jr = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        xi = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        fr = "__ng_removed";
      class ti {
        constructor(l, c = "") {
          this.namespaceId = c;
          const p = l && l.hasOwnProperty("value");
          if (
            ((this.value = (function _(x) {
              return null != x ? x : null;
            })(p ? l.value : l)),
            p)
          ) {
            const P = ve(l);
            delete P.value, (this.options = P);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(l) {
          const c = l.params;
          if (c) {
            const p = this.options.params;
            Object.keys(c).forEach((A) => {
              null == p[A] && (p[A] = c[A]);
            });
          }
        }
      }
      const zr = "void",
        oi = new ti(zr);
      class Ui {
        constructor(l, c, p) {
          (this.id = l),
            (this.hostElement = c),
            (this._engine = p),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + l),
            Ue(c, this._hostClassName);
        }
        listen(l, c, p, A) {
          if (!this._triggers.hasOwnProperty(c))
            throw (function wt(x, l) {
              return new o.vHH(3302, B);
            })();
          if (null == p || 0 == p.length)
            throw (function ot(x) {
              return new o.vHH(3303, B);
            })();
          if (
            !(function y(x) {
              return "start" == x || "done" == x;
            })(p)
          )
            throw (function gt(x, l) {
              return new o.vHH(3400, B);
            })();
          const P = qt(this._elementListeners, l, []),
            q = { name: c, phase: p, callback: A };
          P.push(q);
          const X = qt(this._engine.statesByElement, l, {});
          return (
            X.hasOwnProperty(c) || (Ue(l, M), Ue(l, M + "-" + c), (X[c] = oi)),
            () => {
              this._engine.afterFlush(() => {
                const Ee = P.indexOf(q);
                Ee >= 0 && P.splice(Ee, 1), this._triggers[c] || delete X[c];
              });
            }
          );
        }
        register(l, c) {
          return !this._triggers[l] && ((this._triggers[l] = c), !0);
        }
        _getTrigger(l) {
          const c = this._triggers[l];
          if (!c)
            throw (function fn(x) {
              return new o.vHH(3401, B);
            })();
          return c;
        }
        trigger(l, c, p, A = !0) {
          const P = this._getTrigger(c),
            q = new hs(this.id, c, l);
          let X = this._engine.statesByElement.get(l);
          X ||
            (Ue(l, M),
            Ue(l, M + "-" + c),
            this._engine.statesByElement.set(l, (X = {})));
          let Ee = X[c];
          const ke = new ti(p, this.id);
          if (
            (!(p && p.hasOwnProperty("value")) &&
              Ee &&
              ke.absorbOptions(Ee.options),
            (X[c] = ke),
            Ee || (Ee = oi),
            ke.value !== zr && Ee.value === ke.value)
          ) {
            if (
              !(function Jt(x, l) {
                const c = Object.keys(x),
                  p = Object.keys(l);
                if (c.length != p.length) return !1;
                for (let A = 0; A < c.length; A++) {
                  const P = c[A];
                  if (!l.hasOwnProperty(P) || x[P] !== l[P]) return !1;
                }
                return !0;
              })(Ee.params, ke.params)
            ) {
              const Vt = [],
                gn = P.matchStyles(Ee.value, Ee.params, Vt),
                Vn = P.matchStyles(ke.value, ke.params, Vt);
              Vt.length
                ? this._engine.reportError(Vt)
                : this._engine.afterFlush(() => {
                    ct(l, gn), ze(l, Vn);
                  });
            }
            return;
          }
          const Rt = qt(this._engine.playersByElement, l, []);
          Rt.forEach((Vt) => {
            Vt.namespaceId == this.id &&
              Vt.triggerName == c &&
              Vt.queued &&
              Vt.destroy();
          });
          let Kt = P.matchTransition(Ee.value, ke.value, l, ke.params),
            bt = !1;
          if (!Kt) {
            if (!A) return;
            (Kt = P.fallbackTransition), (bt = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: l,
              triggerName: c,
              transition: Kt,
              fromState: Ee,
              toState: ke,
              player: q,
              isFallbackTransition: bt,
            }),
            bt ||
              (Ue(l, Br),
              q.onStart(() => {
                yt(l, Br);
              })),
            q.onDone(() => {
              let Vt = this.players.indexOf(q);
              Vt >= 0 && this.players.splice(Vt, 1);
              const gn = this._engine.playersByElement.get(l);
              if (gn) {
                let Vn = gn.indexOf(q);
                Vn >= 0 && gn.splice(Vn, 1);
              }
            }),
            this.players.push(q),
            Rt.push(q),
            q
          );
        }
        deregister(l) {
          delete this._triggers[l],
            this._engine.statesByElement.forEach((c, p) => {
              delete c[l];
            }),
            this._elementListeners.forEach((c, p) => {
              this._elementListeners.set(
                p,
                c.filter((A) => A.name != l)
              );
            });
        }
        clearElementCache(l) {
          this._engine.statesByElement.delete(l),
            this._elementListeners.delete(l);
          const c = this._engine.playersByElement.get(l);
          c &&
            (c.forEach((p) => p.destroy()),
            this._engine.playersByElement.delete(l));
        }
        _signalRemovalForInnerTriggers(l, c) {
          const p = this._engine.driver.query(l, I, !0);
          p.forEach((A) => {
            if (A[fr]) return;
            const P = this._engine.fetchNamespacesByElement(A);
            P.size
              ? P.forEach((q) => q.triggerLeaveAnimation(A, c, !1, !0))
              : this.clearElementCache(A);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              p.forEach((A) => this.clearElementCache(A))
            );
        }
        triggerLeaveAnimation(l, c, p, A) {
          const P = this._engine.statesByElement.get(l),
            q = new Map();
          if (P) {
            const X = [];
            if (
              (Object.keys(P).forEach((Ee) => {
                if ((q.set(Ee, P[Ee].value), this._triggers[Ee])) {
                  const ke = this.trigger(l, Ee, zr, A);
                  ke && X.push(ke);
                }
              }),
              X.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, l, !0, c, q),
                p && Qt(X).onDone(() => this._engine.processLeaveNode(l)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(l) {
          const c = this._elementListeners.get(l),
            p = this._engine.statesByElement.get(l);
          if (c && p) {
            const A = new Set();
            c.forEach((P) => {
              const q = P.name;
              if (A.has(q)) return;
              A.add(q);
              const Ee = this._triggers[q].fallbackTransition,
                ke = p[q] || oi,
                ut = new ti(zr),
                At = new hs(this.id, q, l);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: l,
                  triggerName: q,
                  transition: Ee,
                  fromState: ke,
                  toState: ut,
                  player: At,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(l, c) {
          const p = this._engine;
          if (
            (l.childElementCount && this._signalRemovalForInnerTriggers(l, c),
            this.triggerLeaveAnimation(l, c, !0))
          )
            return;
          let A = !1;
          if (p.totalAnimations) {
            const P = p.players.length ? p.playersByQueriedElement.get(l) : [];
            if (P && P.length) A = !0;
            else {
              let q = l;
              for (; (q = q.parentNode); )
                if (p.statesByElement.get(q)) {
                  A = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(l), A))
            p.markElementAsRemoved(this.id, l, !1, c);
          else {
            const P = l[fr];
            (!P || P === jr) &&
              (p.afterFlush(() => this.clearElementCache(l)),
              p.destroyInnerAnimations(l),
              p._onRemovalComplete(l, c));
          }
        }
        insertNode(l, c) {
          Ue(l, this._hostClassName);
        }
        drainQueuedTransitions(l) {
          const c = [];
          return (
            this._queue.forEach((p) => {
              const A = p.player;
              if (A.destroyed) return;
              const P = p.element,
                q = this._elementListeners.get(P);
              q &&
                q.forEach((X) => {
                  if (X.name == p.triggerName) {
                    const Ee = vn(
                      P,
                      p.triggerName,
                      p.fromState.value,
                      p.toState.value
                    );
                    (Ee._data = l), An(p.player, X.phase, Ee, X.callback);
                  }
                }),
                A.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      A.destroy();
                    })
                  : c.push(p);
            }),
            (this._queue = []),
            c.sort((p, A) => {
              const P = p.transition.ast.depCount,
                q = A.transition.ast.depCount;
              return 0 == P || 0 == q
                ? P - q
                : this._engine.driver.containsElement(p.element, A.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(l) {
          this.players.forEach((c) => c.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, l);
        }
        elementContainsData(l) {
          let c = !1;
          return (
            this._elementListeners.has(l) && (c = !0),
            (c = !!this._queue.find((p) => p.element === l) || c),
            c
          );
        }
      }
      class Ai {
        constructor(l, c, p) {
          (this.bodyNode = l),
            (this.driver = c),
            (this._normalizer = p),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (A, P) => {});
        }
        _onRemovalComplete(l, c) {
          this.onRemovalComplete(l, c);
        }
        get queuedPlayers() {
          const l = [];
          return (
            this._namespaceList.forEach((c) => {
              c.players.forEach((p) => {
                p.queued && l.push(p);
              });
            }),
            l
          );
        }
        createNamespace(l, c) {
          const p = new Ui(l, c, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, c)
              ? this._balanceNamespaceList(p, c)
              : (this.newHostElements.set(c, p), this.collectEnterElement(c)),
            (this._namespaceLookup[l] = p)
          );
        }
        _balanceNamespaceList(l, c) {
          const p = this._namespaceList,
            A = this.namespacesByHostElement,
            P = p.length - 1;
          if (P >= 0) {
            let q = !1;
            if (void 0 !== this.driver.getParentElement) {
              let X = this.driver.getParentElement(c);
              for (; X; ) {
                const Ee = A.get(X);
                if (Ee) {
                  const ke = p.indexOf(Ee);
                  p.splice(ke + 1, 0, l), (q = !0);
                  break;
                }
                X = this.driver.getParentElement(X);
              }
            } else
              for (let X = P; X >= 0; X--)
                if (this.driver.containsElement(p[X].hostElement, c)) {
                  p.splice(X + 1, 0, l), (q = !0);
                  break;
                }
            q || p.unshift(l);
          } else p.push(l);
          return A.set(c, l), l;
        }
        register(l, c) {
          let p = this._namespaceLookup[l];
          return p || (p = this.createNamespace(l, c)), p;
        }
        registerTrigger(l, c, p) {
          let A = this._namespaceLookup[l];
          A && A.register(c, p) && this.totalAnimations++;
        }
        destroy(l, c) {
          if (!l) return;
          const p = this._fetchNamespace(l);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(p.hostElement),
              delete this._namespaceLookup[l];
            const A = this._namespaceList.indexOf(p);
            A >= 0 && this._namespaceList.splice(A, 1);
          }),
            this.afterFlushAnimationsDone(() => p.destroy(c));
        }
        _fetchNamespace(l) {
          return this._namespaceLookup[l];
        }
        fetchNamespacesByElement(l) {
          const c = new Set(),
            p = this.statesByElement.get(l);
          if (p) {
            const A = Object.keys(p);
            for (let P = 0; P < A.length; P++) {
              const q = p[A[P]].namespaceId;
              if (q) {
                const X = this._fetchNamespace(q);
                X && c.add(X);
              }
            }
          }
          return c;
        }
        trigger(l, c, p, A) {
          if (S(c)) {
            const P = this._fetchNamespace(l);
            if (P) return P.trigger(c, p, A), !0;
          }
          return !1;
        }
        insertNode(l, c, p, A) {
          if (!S(c)) return;
          const P = c[fr];
          if (P && P.setForRemoval) {
            (P.setForRemoval = !1), (P.setForMove = !0);
            const q = this.collectedLeaveElements.indexOf(c);
            q >= 0 && this.collectedLeaveElements.splice(q, 1);
          }
          if (l) {
            const q = this._fetchNamespace(l);
            q && q.insertNode(c, p);
          }
          A && this.collectEnterElement(c);
        }
        collectEnterElement(l) {
          this.collectedEnterElements.push(l);
        }
        markElementAsDisabled(l, c) {
          c
            ? this.disabledNodes.has(l) ||
              (this.disabledNodes.add(l), Ue(l, Ar))
            : this.disabledNodes.has(l) &&
              (this.disabledNodes.delete(l), yt(l, Ar));
        }
        removeNode(l, c, p, A) {
          if (S(c)) {
            const P = l ? this._fetchNamespace(l) : null;
            if (
              (P ? P.removeNode(c, A) : this.markElementAsRemoved(l, c, !1, A),
              p)
            ) {
              const q = this.namespacesByHostElement.get(c);
              q && q.id !== l && q.removeNode(c, A);
            }
          } else this._onRemovalComplete(c, A);
        }
        markElementAsRemoved(l, c, p, A, P) {
          this.collectedLeaveElements.push(c),
            (c[fr] = {
              namespaceId: l,
              setForRemoval: A,
              hasAnimation: p,
              removedBeforeQueried: !1,
              previousTriggersValues: P,
            });
        }
        listen(l, c, p, A, P) {
          return S(c) ? this._fetchNamespace(l).listen(c, p, A, P) : () => {};
        }
        _buildInstruction(l, c, p, A, P) {
          return l.transition.build(
            this.driver,
            l.element,
            l.fromState.value,
            l.toState.value,
            p,
            A,
            l.fromState.options,
            l.toState.options,
            c,
            P
          );
        }
        destroyInnerAnimations(l) {
          let c = this.driver.query(l, I, !0);
          c.forEach((p) => this.destroyActiveAnimationsForElement(p)),
            0 != this.playersByQueriedElement.size &&
              ((c = this.driver.query(l, pe, !0)),
              c.forEach((p) => this.finishActiveQueriedAnimationOnElement(p)));
        }
        destroyActiveAnimationsForElement(l) {
          const c = this.playersByElement.get(l);
          c &&
            c.forEach((p) => {
              p.queued ? (p.markedForDestroy = !0) : p.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(l) {
          const c = this.playersByQueriedElement.get(l);
          c && c.forEach((p) => p.finish());
        }
        whenRenderingDone() {
          return new Promise((l) => {
            if (this.players.length) return Qt(this.players).onDone(() => l());
            l();
          });
        }
        processLeaveNode(l) {
          var c;
          const p = l[fr];
          if (p && p.setForRemoval) {
            if (((l[fr] = jr), p.namespaceId)) {
              this.destroyInnerAnimations(l);
              const A = this._fetchNamespace(p.namespaceId);
              A && A.clearElementCache(l);
            }
            this._onRemovalComplete(l, p.setForRemoval);
          }
          (null === (c = l.classList) || void 0 === c
            ? void 0
            : c.contains(Ar)) && this.markElementAsDisabled(l, !1),
            this.driver.query(l, ".ng-animate-disabled", !0).forEach((A) => {
              this.markElementAsDisabled(A, !1);
            });
        }
        flush(l = -1) {
          let c = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((p, A) =>
                this._balanceNamespaceList(p, A)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let p = 0; p < this.collectedEnterElements.length; p++)
              Ue(this.collectedEnterElements[p], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const p = [];
            try {
              c = this._flushAnimations(p, l);
            } finally {
              for (let A = 0; A < p.length; A++) p[A]();
            }
          } else
            for (let p = 0; p < this.collectedLeaveElements.length; p++)
              this.processLeaveNode(this.collectedLeaveElements[p]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((p) => p()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const p = this._whenQuietFns;
            (this._whenQuietFns = []),
              c.length
                ? Qt(c).onDone(() => {
                    p.forEach((A) => A());
                  })
                : p.forEach((A) => A());
          }
        }
        reportError(l) {
          throw (function Wt(x) {
            return new o.vHH(3402, B);
          })();
        }
        _flushAnimations(l, c) {
          const p = new xr(),
            A = [],
            P = new Map(),
            q = [],
            X = new Map(),
            Ee = new Map(),
            ke = new Map(),
            ut = new Set();
          this.disabledNodes.forEach((Dt) => {
            ut.add(Dt);
            const pt = this.driver.query(Dt, ".ng-animate-queued", !0);
            for (let Ft = 0; Ft < pt.length; Ft++) ut.add(pt[Ft]);
          });
          const At = this.bodyNode,
            Rt = Array.from(this.statesByElement.keys()),
            Kt = Ie(Rt, this.collectedEnterElements),
            bt = new Map();
          let Vt = 0;
          Kt.forEach((Dt, pt) => {
            const Ft = De + Vt++;
            bt.set(pt, Ft), Dt.forEach((Ht) => Ue(Ht, Ft));
          });
          const gn = [],
            Vn = new Set(),
            qn = new Set();
          for (let Dt = 0; Dt < this.collectedLeaveElements.length; Dt++) {
            const pt = this.collectedLeaveElements[Dt],
              Ft = pt[fr];
            Ft &&
              Ft.setForRemoval &&
              (gn.push(pt),
              Vn.add(pt),
              Ft.hasAnimation
                ? this.driver
                    .query(pt, ".ng-star-inserted", !0)
                    .forEach((Ht) => Vn.add(Ht))
                : qn.add(pt));
          }
          const gr = new Map(),
            rn = Ie(Rt, Array.from(Vn));
          rn.forEach((Dt, pt) => {
            const Ft = be + Vt++;
            gr.set(pt, Ft), Dt.forEach((Ht) => Ue(Ht, Ft));
          }),
            l.push(() => {
              Kt.forEach((Dt, pt) => {
                const Ft = bt.get(pt);
                Dt.forEach((Ht) => yt(Ht, Ft));
              }),
                rn.forEach((Dt, pt) => {
                  const Ft = gr.get(pt);
                  Dt.forEach((Ht) => yt(Ht, Ft));
                }),
                gn.forEach((Dt) => {
                  this.processLeaveNode(Dt);
                });
            });
          const wr = [],
            dn = [];
          for (let Dt = this._namespaceList.length - 1; Dt >= 0; Dt--)
            this._namespaceList[Dt].drainQueuedTransitions(c).forEach((Ft) => {
              const Ht = Ft.player,
                Pn = Ft.element;
              if ((wr.push(Ht), this.collectedEnterElements.length)) {
                const pr = Pn[fr];
                if (pr && pr.setForMove) {
                  if (
                    pr.previousTriggersValues &&
                    pr.previousTriggersValues.has(Ft.triggerName)
                  ) {
                    const li = pr.previousTriggersValues.get(Ft.triggerName),
                      Mr = this.statesByElement.get(Ft.element);
                    Mr && Mr[Ft.triggerName] && (Mr[Ft.triggerName].value = li);
                  }
                  return void Ht.destroy();
                }
              }
              const Sr = !At || !this.driver.containsElement(At, Pn),
                tr = gr.get(Pn),
                Tr = bt.get(Pn),
                On = this._buildInstruction(Ft, p, Tr, tr, Sr);
              if (On.errors && On.errors.length) return void dn.push(On);
              if (Sr)
                return (
                  Ht.onStart(() => ct(Pn, On.fromStyles)),
                  Ht.onDestroy(() => ze(Pn, On.toStyles)),
                  void A.push(Ht)
                );
              if (Ft.isFallbackTransition)
                return (
                  Ht.onStart(() => ct(Pn, On.fromStyles)),
                  Ht.onDestroy(() => ze(Pn, On.toStyles)),
                  void A.push(Ht)
                );
              const ys = [];
              On.timelines.forEach((pr) => {
                (pr.stretchStartingKeyframe = !0),
                  this.disabledNodes.has(pr.element) || ys.push(pr);
              }),
                (On.timelines = ys),
                p.append(Pn, On.timelines),
                q.push({ instruction: On, player: Ht, element: Pn }),
                On.queriedElements.forEach((pr) => qt(X, pr, []).push(Ht)),
                On.preStyleProps.forEach((pr, li) => {
                  const Mr = Object.keys(pr);
                  if (Mr.length) {
                    let ui = Ee.get(li);
                    ui || Ee.set(li, (ui = new Set())),
                      Mr.forEach((Fr) => ui.add(Fr));
                  }
                }),
                On.postStyleProps.forEach((pr, li) => {
                  const Mr = Object.keys(pr);
                  let ui = ke.get(li);
                  ui || ke.set(li, (ui = new Set())),
                    Mr.forEach((Fr) => ui.add(Fr));
                });
            });
          if (dn.length) {
            const Dt = [];
            dn.forEach((pt) => {
              Dt.push(
                (function st(x, l) {
                  return new o.vHH(3505, B);
                })()
              );
            }),
              wr.forEach((pt) => pt.destroy()),
              this.reportError(Dt);
          }
          const lr = new Map(),
            Rr = new Map();
          q.forEach((Dt) => {
            const pt = Dt.element;
            p.has(pt) &&
              (Rr.set(pt, pt),
              this._beforeAnimationBuild(
                Dt.player.namespaceId,
                Dt.instruction,
                lr
              ));
          }),
            A.forEach((Dt) => {
              const pt = Dt.element;
              this._getPreviousPlayers(
                pt,
                !1,
                Dt.namespaceId,
                Dt.triggerName,
                null
              ).forEach((Ht) => {
                qt(lr, pt, []).push(Ht), Ht.destroy();
              });
            });
          const Gr = gn.filter((Dt) => Gn(Dt, Ee, ke)),
            Yr = new Map();
          ne(Yr, this.driver, qn, ke, F.l3).forEach((Dt) => {
            Gn(Dt, Ee, ke) && Gr.push(Dt);
          });
          const Hi = new Map();
          Kt.forEach((Dt, pt) => {
            ne(Hi, this.driver, new Set(Dt), Ee, F.k1);
          }),
            Gr.forEach((Dt) => {
              const pt = Yr.get(Dt),
                Ft = Hi.get(Dt);
              Yr.set(Dt, Object.assign(Object.assign({}, pt), Ft));
            });
          const Vr = [],
            Si = [],
            $i = {};
          q.forEach((Dt) => {
            const { element: pt, player: Ft, instruction: Ht } = Dt;
            if (p.has(pt)) {
              if (ut.has(pt))
                return (
                  Ft.onDestroy(() => ze(pt, Ht.toStyles)),
                  (Ft.disabled = !0),
                  Ft.overrideTotalTime(Ht.totalTime),
                  void A.push(Ft)
                );
              let Pn = $i;
              if (Rr.size > 1) {
                let tr = pt;
                const Tr = [];
                for (; (tr = tr.parentNode); ) {
                  const On = Rr.get(tr);
                  if (On) {
                    Pn = On;
                    break;
                  }
                  Tr.push(tr);
                }
                Tr.forEach((On) => Rr.set(On, Pn));
              }
              const Sr = this._buildAnimation(
                Ft.namespaceId,
                Ht,
                lr,
                P,
                Hi,
                Yr
              );
              if ((Ft.setRealPlayer(Sr), Pn === $i)) Vr.push(Ft);
              else {
                const tr = this.playersByElement.get(Pn);
                tr && tr.length && (Ft.parentPlayer = Qt(tr)), A.push(Ft);
              }
            } else
              ct(pt, Ht.fromStyles),
                Ft.onDestroy(() => ze(pt, Ht.toStyles)),
                Si.push(Ft),
                ut.has(pt) && A.push(Ft);
          }),
            Si.forEach((Dt) => {
              const pt = P.get(Dt.element);
              if (pt && pt.length) {
                const Ft = Qt(pt);
                Dt.setRealPlayer(Ft);
              }
            }),
            A.forEach((Dt) => {
              Dt.parentPlayer
                ? Dt.syncPlayerEvents(Dt.parentPlayer)
                : Dt.destroy();
            });
          for (let Dt = 0; Dt < gn.length; Dt++) {
            const pt = gn[Dt],
              Ft = pt[fr];
            if ((yt(pt, be), Ft && Ft.hasAnimation)) continue;
            let Ht = [];
            if (X.size) {
              let Sr = X.get(pt);
              Sr && Sr.length && Ht.push(...Sr);
              let tr = this.driver.query(pt, pe, !0);
              for (let Tr = 0; Tr < tr.length; Tr++) {
                let On = X.get(tr[Tr]);
                On && On.length && Ht.push(...On);
              }
            }
            const Pn = Ht.filter((Sr) => !Sr.destroyed);
            Pn.length ? mn(this, pt, Pn) : this.processLeaveNode(pt);
          }
          return (
            (gn.length = 0),
            Vr.forEach((Dt) => {
              this.players.push(Dt),
                Dt.onDone(() => {
                  Dt.destroy();
                  const pt = this.players.indexOf(Dt);
                  this.players.splice(pt, 1);
                }),
                Dt.play();
            }),
            Vr
          );
        }
        elementContainsData(l, c) {
          let p = !1;
          const A = c[fr];
          return (
            A && A.setForRemoval && (p = !0),
            this.playersByElement.has(c) && (p = !0),
            this.playersByQueriedElement.has(c) && (p = !0),
            this.statesByElement.has(c) && (p = !0),
            this._fetchNamespace(l).elementContainsData(c) || p
          );
        }
        afterFlush(l) {
          this._flushFns.push(l);
        }
        afterFlushAnimationsDone(l) {
          this._whenQuietFns.push(l);
        }
        _getPreviousPlayers(l, c, p, A, P) {
          let q = [];
          if (c) {
            const X = this.playersByQueriedElement.get(l);
            X && (q = X);
          } else {
            const X = this.playersByElement.get(l);
            if (X) {
              const Ee = !P || P == zr;
              X.forEach((ke) => {
                ke.queued || (!Ee && ke.triggerName != A) || q.push(ke);
              });
            }
          }
          return (
            (p || A) &&
              (q = q.filter(
                (X) => !((p && p != X.namespaceId) || (A && A != X.triggerName))
              )),
            q
          );
        }
        _beforeAnimationBuild(l, c, p) {
          const P = c.element,
            q = c.isRemovalTransition ? void 0 : l,
            X = c.isRemovalTransition ? void 0 : c.triggerName;
          for (const Ee of c.timelines) {
            const ke = Ee.element,
              ut = ke !== P,
              At = qt(p, ke, []);
            this._getPreviousPlayers(ke, ut, q, X, c.toState).forEach((Kt) => {
              const bt = Kt.getRealPlayer();
              bt.beforeDestroy && bt.beforeDestroy(), Kt.destroy(), At.push(Kt);
            });
          }
          ct(P, c.fromStyles);
        }
        _buildAnimation(l, c, p, A, P, q) {
          const X = c.triggerName,
            Ee = c.element,
            ke = [],
            ut = new Set(),
            At = new Set(),
            Rt = c.timelines.map((bt) => {
              const Vt = bt.element;
              ut.add(Vt);
              const gn = Vt[fr];
              if (gn && gn.removedBeforeQueried)
                return new F.ZN(bt.duration, bt.delay);
              const Vn = Vt !== Ee,
                qn = (function un(x) {
                  const l = [];
                  return Gt(x, l), l;
                })((p.get(Vt) || _r).map((lr) => lr.getRealPlayer())).filter(
                  (lr) => !!lr.element && lr.element === Vt
                ),
                gr = P.get(Vt),
                rn = q.get(Vt),
                wr = hn(0, this._normalizer, 0, bt.keyframes, gr, rn),
                dn = this._buildPlayer(bt, wr, qn);
              if ((bt.subTimeline && A && At.add(Vt), Vn)) {
                const lr = new hs(l, X, Vt);
                lr.setRealPlayer(dn), ke.push(lr);
              }
              return dn;
            });
          ke.forEach((bt) => {
            qt(this.playersByQueriedElement, bt.element, []).push(bt),
              bt.onDone(() =>
                (function Fn(x, l, c) {
                  let p;
                  if (x instanceof Map) {
                    if (((p = x.get(l)), p)) {
                      if (p.length) {
                        const A = p.indexOf(c);
                        p.splice(A, 1);
                      }
                      0 == p.length && x.delete(l);
                    }
                  } else if (((p = x[l]), p)) {
                    if (p.length) {
                      const A = p.indexOf(c);
                      p.splice(A, 1);
                    }
                    0 == p.length && delete x[l];
                  }
                  return p;
                })(this.playersByQueriedElement, bt.element, bt)
              );
          }),
            ut.forEach((bt) => Ue(bt, se));
          const Kt = Qt(Rt);
          return (
            Kt.onDestroy(() => {
              ut.forEach((bt) => yt(bt, se)), ze(Ee, c.toStyles);
            }),
            At.forEach((bt) => {
              qt(A, bt, []).push(Kt);
            }),
            Kt
          );
        }
        _buildPlayer(l, c, p) {
          return c.length > 0
            ? this.driver.animate(
                l.element,
                c,
                l.duration,
                l.delay,
                l.easing,
                p
              )
            : new F.ZN(l.duration, l.delay);
        }
      }
      class hs {
        constructor(l, c, p) {
          (this.namespaceId = l),
            (this.triggerName = c),
            (this.element = p),
            (this._player = new F.ZN()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(l) {
          this._containsRealPlayer ||
            ((this._player = l),
            Object.keys(this._queuedCallbacks).forEach((c) => {
              this._queuedCallbacks[c].forEach((p) => An(l, c, void 0, p));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(l.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(l) {
          this.totalTime = l;
        }
        syncPlayerEvents(l) {
          const c = this._player;
          c.triggerCallback && l.onStart(() => c.triggerCallback("start")),
            l.onDone(() => this.finish()),
            l.onDestroy(() => this.destroy());
        }
        _queueEvent(l, c) {
          qt(this._queuedCallbacks, l, []).push(c);
        }
        onDone(l) {
          this.queued && this._queueEvent("done", l), this._player.onDone(l);
        }
        onStart(l) {
          this.queued && this._queueEvent("start", l), this._player.onStart(l);
        }
        onDestroy(l) {
          this.queued && this._queueEvent("destroy", l),
            this._player.onDestroy(l);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(l) {
          this.queued || this._player.setPosition(l);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(l) {
          const c = this._player;
          c.triggerCallback && c.triggerCallback(l);
        }
      }
      function S(x) {
        return x && 1 === x.nodeType;
      }
      function O(x, l) {
        const c = x.style.display;
        return (x.style.display = null != l ? l : "none"), c;
      }
      function ne(x, l, c, p, A) {
        const P = [];
        c.forEach((Ee) => P.push(O(Ee)));
        const q = [];
        p.forEach((Ee, ke) => {
          const ut = {};
          Ee.forEach((At) => {
            const Rt = (ut[At] = l.computeStyle(ke, At, A));
            (!Rt || 0 == Rt.length) && ((ke[fr] = xi), q.push(ke));
          }),
            x.set(ke, ut);
        });
        let X = 0;
        return c.forEach((Ee) => O(Ee, P[X++])), q;
      }
      function Ie(x, l) {
        const c = new Map();
        if ((x.forEach((X) => c.set(X, [])), 0 == l.length)) return c;
        const A = new Set(l),
          P = new Map();
        function q(X) {
          if (!X) return 1;
          let Ee = P.get(X);
          if (Ee) return Ee;
          const ke = X.parentNode;
          return (
            (Ee = c.has(ke) ? ke : A.has(ke) ? 1 : q(ke)), P.set(X, Ee), Ee
          );
        }
        return (
          l.forEach((X) => {
            const Ee = q(X);
            1 !== Ee && c.get(Ee).push(X);
          }),
          c
        );
      }
      function Ue(x, l) {
        var c;
        null === (c = x.classList) || void 0 === c || c.add(l);
      }
      function yt(x, l) {
        var c;
        null === (c = x.classList) || void 0 === c || c.remove(l);
      }
      function mn(x, l, c) {
        Qt(c).onDone(() => x.processLeaveNode(l));
      }
      function Gt(x, l) {
        for (let c = 0; c < x.length; c++) {
          const p = x[c];
          p instanceof F.ZE ? Gt(p.players, l) : l.push(p);
        }
      }
      function Gn(x, l, c) {
        const p = c.get(x);
        if (!p) return !1;
        let A = l.get(x);
        return A ? p.forEach((P) => A.add(P)) : l.set(x, p), c.delete(x), !0;
      }
      class cn {
        constructor(l, c, p) {
          (this.bodyNode = l),
            (this._driver = c),
            (this._normalizer = p),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (A, P) => {}),
            (this._transitionEngine = new Ai(l, c, p)),
            (this._timelineEngine = new Bi(l, c, p)),
            (this._transitionEngine.onRemovalComplete = (A, P) =>
              this.onRemovalComplete(A, P));
        }
        registerTrigger(l, c, p, A, P) {
          const q = l + "-" + A;
          let X = this._triggerCache[q];
          if (!X) {
            const Ee = [],
              ut = z(this._driver, P, Ee, []);
            if (Ee.length)
              throw (function ge(x, l) {
                return new o.vHH(3404, B);
              })();
            (X = (function us(x, l, c) {
              return new kr(x, l, c);
            })(A, ut, this._normalizer)),
              (this._triggerCache[q] = X);
          }
          this._transitionEngine.registerTrigger(c, A, X);
        }
        register(l, c) {
          this._transitionEngine.register(l, c);
        }
        destroy(l, c) {
          this._transitionEngine.destroy(l, c);
        }
        onInsert(l, c, p, A) {
          this._transitionEngine.insertNode(l, c, p, A);
        }
        onRemove(l, c, p, A) {
          this._transitionEngine.removeNode(l, c, A || !1, p);
        }
        disableAnimations(l, c) {
          this._transitionEngine.markElementAsDisabled(l, c);
        }
        process(l, c, p, A) {
          if ("@" == p.charAt(0)) {
            const [P, q] = Bn(p);
            this._timelineEngine.command(P, c, q, A);
          } else this._transitionEngine.trigger(l, c, p, A);
        }
        listen(l, c, p, A, P) {
          if ("@" == p.charAt(0)) {
            const [q, X] = Bn(p);
            return this._timelineEngine.listen(q, c, X, P);
          }
          return this._transitionEngine.listen(l, c, p, A, P);
        }
        flush(l = -1) {
          this._transitionEngine.flush(l);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      let br = (() => {
        class x {
          constructor(c, p, A) {
            (this._element = c),
              (this._startStyles = p),
              (this._endStyles = A),
              (this._state = 0);
            let P = x.initialStylesByElement.get(c);
            P || x.initialStylesByElement.set(c, (P = {})),
              (this._initialStyles = P);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                ze(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (ze(this._element, this._initialStyles),
                this._endStyles &&
                  (ze(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (x.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (ct(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (ct(this._element, this._endStyles),
                  (this._endStyles = null)),
                ze(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (x.initialStylesByElement = new WeakMap()), x;
      })();
      function Er(x) {
        let l = null;
        const c = Object.keys(x);
        for (let p = 0; p < c.length; p++) {
          const A = c[p];
          Ot(A) && ((l = l || {}), (l[A] = x[A]));
        }
        return l;
      }
      function Ot(x) {
        return "display" === x || "position" === x;
      }
      class ni {
        constructor(l, c, p, A) {
          (this.element = l),
            (this.keyframes = c),
            (this.options = p),
            (this._specialStyles = A),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = p.duration),
            (this._delay = p.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((l) => l()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const l = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            l,
            this.options
          )),
            (this._finalKeyframe = l.length ? l[l.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(l, c, p) {
          return l.animate(c, p);
        }
        onStart(l) {
          this._onStartFns.push(l);
        }
        onDone(l) {
          this._onDoneFns.push(l);
        }
        onDestroy(l) {
          this._onDestroyFns.push(l);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((l) => l()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((l) => l()),
            (this._onDestroyFns = []));
        }
        setPosition(l) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = l * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const l = {};
          if (this.hasStarted()) {
            const c = this._finalKeyframe;
            Object.keys(c).forEach((p) => {
              "offset" != p &&
                (l[p] = this._finished ? c[p] : pn(this.element, p));
            });
          }
          this.currentSnapshot = l;
        }
        triggerCallback(l) {
          const c = "start" == l ? this._onStartFns : this._onDoneFns;
          c.forEach((p) => p()), (c.length = 0);
        }
      }
      class es {
        validateStyleProperty(l) {
          return jn(l);
        }
        matchesElement(l, c) {
          return !1;
        }
        containsElement(l, c) {
          return Un(l, c);
        }
        getParentElement(l) {
          return Xn(l);
        }
        query(l, c, p) {
          return Sn(l, c, p);
        }
        computeStyle(l, c, p) {
          return window.getComputedStyle(l)[c];
        }
        animate(l, c, p, A, P, q = []) {
          const Ee = {
            duration: p,
            delay: A,
            fill: 0 == A ? "both" : "forwards",
          };
          P && (Ee.easing = P);
          const ke = {},
            ut = q.filter((Rt) => Rt instanceof ni);
          (function $t(x, l) {
            return 0 === x || 0 === l;
          })(p, A) &&
            ut.forEach((Rt) => {
              let Kt = Rt.currentSnapshot;
              Object.keys(Kt).forEach((bt) => (ke[bt] = Kt[bt]));
            }),
            (c = (function Mn(x, l, c) {
              const p = Object.keys(c);
              if (p.length && l.length) {
                let P = l[0],
                  q = [];
                if (
                  (p.forEach((X) => {
                    P.hasOwnProperty(X) || q.push(X), (P[X] = c[X]);
                  }),
                  q.length)
                )
                  for (var A = 1; A < l.length; A++) {
                    let X = l[A];
                    q.forEach(function (Ee) {
                      X[Ee] = pn(x, Ee);
                    });
                  }
              }
              return l;
            })(l, (c = c.map((Rt) => K(Rt, !1))), ke));
          const At = (function Tn(x, l) {
            let c = null,
              p = null;
            return (
              Array.isArray(l) && l.length
                ? ((c = Er(l[0])), l.length > 1 && (p = Er(l[l.length - 1])))
                : l && (c = Er(l)),
              c || p ? new br(x, c, p) : null
            );
          })(l, c);
          return new ni(l, c, Ee, At);
        }
      }
      var wi = v(9808);
      let ts = (() => {
        class x extends F._j {
          constructor(c, p) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = c.createRenderer(p.body, {
                id: "0",
                encapsulation: o.ifc.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(c) {
            const p = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const A = Array.isArray(c) ? (0, F.vP)(c) : c;
            return (
              gs(this._renderer, null, p, "register", [A]),
              new ns(p, this._renderer)
            );
          }
        }
        return (
          (x.ɵfac = function (c) {
            return new (c || x)(o.LFG(o.FYo), o.LFG(wi.K0));
          }),
          (x.ɵprov = o.Yz7({ token: x, factory: x.ɵfac })),
          x
        );
      })();
      class ns extends F.LC {
        constructor(l, c) {
          super(), (this._id = l), (this._renderer = c);
        }
        create(l, c) {
          return new lo(this._id, l, c || {}, this._renderer);
        }
      }
      class lo {
        constructor(l, c, p, A) {
          (this.id = l),
            (this.element = c),
            (this._renderer = A),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", p);
        }
        _listen(l, c) {
          return this._renderer.listen(this.element, `@@${this.id}:${l}`, c);
        }
        _command(l, ...c) {
          return gs(this._renderer, this.element, this.id, l, c);
        }
        onDone(l) {
          this._listen("done", l);
        }
        onStart(l) {
          this._listen("start", l);
        }
        onDestroy(l) {
          this._listen("destroy", l);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(l) {
          this._command("setPosition", l);
        }
        getPosition() {
          var l, c;
          return null !==
            (c =
              null === (l = this._renderer.engine.players[+this.id]) ||
              void 0 === l
                ? void 0
                : l.getPosition()) && void 0 !== c
            ? c
            : 0;
        }
      }
      function gs(x, l, c, p, A) {
        return x.setProperty(l, `@@${c}:${p}`, A);
      }
      const tn = "@.disabled";
      let bs = (() => {
        class x {
          constructor(c, p, A) {
            (this.delegate = c),
              (this.engine = p),
              (this._zone = A),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (p.onRemovalComplete = (P, q) => {
                const X = null == q ? void 0 : q.parentNode(P);
                X && q.removeChild(X, P);
              });
          }
          createRenderer(c, p) {
            const P = this.delegate.createRenderer(c, p);
            if (!(c && p && p.data && p.data.animation)) {
              let ut = this._rendererCache.get(P);
              return (
                ut ||
                  ((ut = new kn("", P, this.engine)),
                  this._rendererCache.set(P, ut)),
                ut
              );
            }
            const q = p.id,
              X = p.id + "-" + this._currentId;
            this._currentId++, this.engine.register(X, c);
            const Ee = (ut) => {
              Array.isArray(ut)
                ? ut.forEach(Ee)
                : this.engine.registerTrigger(q, X, c, ut.name, ut);
            };
            return (
              p.data.animation.forEach(Ee), new Ts(this, X, P, this.engine)
            );
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(c, p, A) {
            c >= 0 && c < this._microtaskId
              ? this._zone.run(() => p(A))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((P) => {
                        const [q, X] = P;
                        q(X);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([p, A]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (x.ɵfac = function (c) {
            return new (c || x)(o.LFG(o.FYo), o.LFG(cn), o.LFG(o.R0b));
          }),
          (x.ɵprov = o.Yz7({ token: x, factory: x.ɵfac })),
          x
        );
      })();
      class kn {
        constructor(l, c, p) {
          (this.namespaceId = l),
            (this.delegate = c),
            (this.engine = p),
            (this.destroyNode = this.delegate.destroyNode
              ? (A) => c.destroyNode(A)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(l, c) {
          return this.delegate.createElement(l, c);
        }
        createComment(l) {
          return this.delegate.createComment(l);
        }
        createText(l) {
          return this.delegate.createText(l);
        }
        appendChild(l, c) {
          this.delegate.appendChild(l, c),
            this.engine.onInsert(this.namespaceId, c, l, !1);
        }
        insertBefore(l, c, p, A = !0) {
          this.delegate.insertBefore(l, c, p),
            this.engine.onInsert(this.namespaceId, c, l, A);
        }
        removeChild(l, c, p) {
          this.engine.onRemove(this.namespaceId, c, this.delegate, p);
        }
        selectRootElement(l, c) {
          return this.delegate.selectRootElement(l, c);
        }
        parentNode(l) {
          return this.delegate.parentNode(l);
        }
        nextSibling(l) {
          return this.delegate.nextSibling(l);
        }
        setAttribute(l, c, p, A) {
          this.delegate.setAttribute(l, c, p, A);
        }
        removeAttribute(l, c, p) {
          this.delegate.removeAttribute(l, c, p);
        }
        addClass(l, c) {
          this.delegate.addClass(l, c);
        }
        removeClass(l, c) {
          this.delegate.removeClass(l, c);
        }
        setStyle(l, c, p, A) {
          this.delegate.setStyle(l, c, p, A);
        }
        removeStyle(l, c, p) {
          this.delegate.removeStyle(l, c, p);
        }
        setProperty(l, c, p) {
          "@" == c.charAt(0) && c == tn
            ? this.disableAnimations(l, !!p)
            : this.delegate.setProperty(l, c, p);
        }
        setValue(l, c) {
          this.delegate.setValue(l, c);
        }
        listen(l, c, p) {
          return this.delegate.listen(l, c, p);
        }
        disableAnimations(l, c) {
          this.engine.disableAnimations(l, c);
        }
      }
      class Ts extends kn {
        constructor(l, c, p, A) {
          super(c, p, A), (this.factory = l), (this.namespaceId = c);
        }
        setProperty(l, c, p) {
          "@" == c.charAt(0)
            ? "." == c.charAt(1) && c == tn
              ? this.disableAnimations(l, (p = void 0 === p || !!p))
              : this.engine.process(this.namespaceId, l, c.substr(1), p)
            : this.delegate.setProperty(l, c, p);
        }
        listen(l, c, p) {
          if ("@" == c.charAt(0)) {
            const A = (function Wr(x) {
              switch (x) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return x;
              }
            })(l);
            let P = c.substr(1),
              q = "";
            return (
              "@" != P.charAt(0) &&
                ([P, q] = (function Ur(x) {
                  const l = x.indexOf(".");
                  return [x.substring(0, l), x.substr(l + 1)];
                })(P)),
              this.engine.listen(this.namespaceId, A, P, q, (X) => {
                this.factory.scheduleListenerCallback(X._data || -1, p, X);
              })
            );
          }
          return this.delegate.listen(l, c, p);
        }
      }
      let ps = (() => {
        class x extends cn {
          constructor(c, p, A) {
            super(c.body, p, A);
          }
          ngOnDestroy() {
            this.flush();
          }
        }
        return (
          (x.ɵfac = function (c) {
            return new (c || x)(o.LFG(wi.K0), o.LFG(mt), o.LFG(ar));
          }),
          (x.ɵprov = o.Yz7({ token: x, factory: x.ɵfac })),
          x
        );
      })();
      const ms = new o.OlP("AnimationModuleType"),
        Gi = [
          { provide: F._j, useClass: ts },
          {
            provide: ar,
            useFactory: function ai() {
              return new qi();
            },
          },
          { provide: cn, useClass: ps },
          {
            provide: o.FYo,
            useFactory: function Yo(x, l, c) {
              return new bs(x, l, c);
            },
            deps: [C.se, cn, o.R0b],
          },
        ],
        Vi = [
          { provide: mt, useFactory: () => new es() },
          { provide: ms, useValue: "BrowserAnimations" },
          ...Gi,
        ],
        hr = [
          { provide: mt, useClass: Ct },
          { provide: ms, useValue: "NoopAnimations" },
          ...Gi,
        ];
      let Kr = (() => {
        class x {
          static withConfig(c) {
            return { ngModule: x, providers: c.disableAnimations ? hr : Vi };
          }
        }
        return (
          (x.ɵfac = function (c) {
            return new (c || x)();
          }),
          (x.ɵmod = o.oAB({ type: x })),
          (x.ɵinj = o.cJS({ providers: Vi, imports: [C.b2] })),
          x
        );
      })();
    },
    2313: (le, j, v) => {
      v.d(j, { b2: () => zn, H7: () => Ne, q6: () => qt, se: () => xe });
      var o = v(9808),
        C = v(5e3);
      class F extends o.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class B extends F {
        static makeCurrent() {
          (0, o.HT)(new B());
        }
        onAndCancel(Q, R, ae) {
          return (
            Q.addEventListener(R, ae, !1),
            () => {
              Q.removeEventListener(R, ae, !1);
            }
          );
        }
        dispatchEvent(Q, R) {
          Q.dispatchEvent(R);
        }
        remove(Q) {
          Q.parentNode && Q.parentNode.removeChild(Q);
        }
        createElement(Q, R) {
          return (R = R || this.getDefaultDocument()).createElement(Q);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(Q) {
          return Q.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(Q) {
          return Q instanceof DocumentFragment;
        }
        getGlobalEventTarget(Q, R) {
          return "window" === R
            ? window
            : "document" === R
            ? Q
            : "body" === R
            ? Q.body
            : null;
        }
        getBaseHref(Q) {
          const R = (function J() {
            return (
              (U = U || document.querySelector("base")),
              U ? U.getAttribute("href") : null
            );
          })();
          return null == R
            ? null
            : (function Y(fe) {
                (W = W || document.createElement("a")),
                  W.setAttribute("href", fe);
                const Q = W.pathname;
                return "/" === Q.charAt(0) ? Q : `/${Q}`;
              })(R);
        }
        resetBaseElement() {
          U = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(Q) {
          return (0, o.Mx)(document.cookie, Q);
        }
      }
      let W,
        U = null;
      const L = new C.OlP("TRANSITION_ID"),
        Z = [
          {
            provide: C.ip1,
            useFactory: function V(fe, Q, R) {
              return () => {
                R.get(C.CZH).donePromise.then(() => {
                  const ae = (0, o.q)(),
                    Le = Q.querySelectorAll(`style[ng-transition="${fe}"]`);
                  for (let rt = 0; rt < Le.length; rt++) ae.remove(Le[rt]);
                });
              };
            },
            deps: [L, o.K0, C.zs3],
            multi: !0,
          },
        ];
      class $ {
        static init() {
          (0, C.VLi)(new $());
        }
        addToWindow(Q) {
          (C.dqk.getAngularTestability = (ae, Le = !0) => {
            const rt = Q.findTestabilityInTree(ae, Le);
            if (null == rt)
              throw new Error("Could not find testability for element.");
            return rt;
          }),
            (C.dqk.getAllAngularTestabilities = () => Q.getAllTestabilities()),
            (C.dqk.getAllAngularRootElements = () => Q.getAllRootElements()),
            C.dqk.frameworkStabilizers || (C.dqk.frameworkStabilizers = []),
            C.dqk.frameworkStabilizers.push((ae) => {
              const Le = C.dqk.getAllAngularTestabilities();
              let rt = Le.length,
                _t = !1;
              const ht = function ($t) {
                (_t = _t || $t), rt--, 0 == rt && ae(_t);
              };
              Le.forEach(function ($t) {
                $t.whenStable(ht);
              });
            });
        }
        findTestabilityInTree(Q, R, ae) {
          if (null == R) return null;
          const Le = Q.getTestability(R);
          return null != Le
            ? Le
            : ae
            ? (0, o.q)().isShadowRoot(R)
              ? this.findTestabilityInTree(Q, R.host, !0)
              : this.findTestabilityInTree(Q, R.parentElement, !0)
            : null;
        }
      }
      let Oe = (() => {
        class fe {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (fe.ɵfac = function (R) {
            return new (R || fe)();
          }),
          (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
          fe
        );
      })();
      const Te = new C.OlP("EventManagerPlugins");
      let Ae = (() => {
        class fe {
          constructor(R, ae) {
            (this._zone = ae),
              (this._eventNameToPlugin = new Map()),
              R.forEach((Le) => (Le.manager = this)),
              (this._plugins = R.slice().reverse());
          }
          addEventListener(R, ae, Le) {
            return this._findPluginFor(ae).addEventListener(R, ae, Le);
          }
          addGlobalEventListener(R, ae, Le) {
            return this._findPluginFor(ae).addGlobalEventListener(R, ae, Le);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(R) {
            const ae = this._eventNameToPlugin.get(R);
            if (ae) return ae;
            const Le = this._plugins;
            for (let rt = 0; rt < Le.length; rt++) {
              const _t = Le[rt];
              if (_t.supports(R)) return this._eventNameToPlugin.set(R, _t), _t;
            }
            throw new Error(`No event manager plugin found for event ${R}`);
          }
        }
        return (
          (fe.ɵfac = function (R) {
            return new (R || fe)(C.LFG(Te), C.LFG(C.R0b));
          }),
          (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
          fe
        );
      })();
      class Je {
        constructor(Q) {
          this._doc = Q;
        }
        addGlobalEventListener(Q, R, ae) {
          const Le = (0, o.q)().getGlobalEventTarget(this._doc, Q);
          if (!Le)
            throw new Error(`Unsupported event target ${Le} for event ${R}`);
          return this.addEventListener(Le, R, ae);
        }
      }
      let Pe = (() => {
          class fe {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(R) {
              const ae = new Set();
              R.forEach((Le) => {
                this._stylesSet.has(Le) ||
                  (this._stylesSet.add(Le), ae.add(Le));
              }),
                this.onStylesAdded(ae);
            }
            onStylesAdded(R) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (fe.ɵfac = function (R) {
              return new (R || fe)();
            }),
            (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
            fe
          );
        })(),
        He = (() => {
          class fe extends Pe {
            constructor(R) {
              super(),
                (this._doc = R),
                (this._hostNodes = new Map()),
                this._hostNodes.set(R.head, []);
            }
            _addStylesToHost(R, ae, Le) {
              R.forEach((rt) => {
                const _t = this._doc.createElement("style");
                (_t.textContent = rt), Le.push(ae.appendChild(_t));
              });
            }
            addHost(R) {
              const ae = [];
              this._addStylesToHost(this._stylesSet, R, ae),
                this._hostNodes.set(R, ae);
            }
            removeHost(R) {
              const ae = this._hostNodes.get(R);
              ae && ae.forEach(Ze), this._hostNodes.delete(R);
            }
            onStylesAdded(R) {
              this._hostNodes.forEach((ae, Le) => {
                this._addStylesToHost(R, Le, ae);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((R) => R.forEach(Ze));
            }
          }
          return (
            (fe.ɵfac = function (R) {
              return new (R || fe)(C.LFG(o.K0));
            }),
            (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
            fe
          );
        })();
      function Ze(fe) {
        (0, o.q)().remove(fe);
      }
      const Ge = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Se = /%COMP%/g;
      function ye(fe, Q, R) {
        for (let ae = 0; ae < Q.length; ae++) {
          let Le = Q[ae];
          Array.isArray(Le)
            ? ye(fe, Le, R)
            : ((Le = Le.replace(Se, fe)), R.push(Le));
        }
        return R;
      }
      function ge(fe) {
        return (Q) => {
          if ("__ngUnwrap__" === Q) return fe;
          !1 === fe(Q) && (Q.preventDefault(), (Q.returnValue = !1));
        };
      }
      let xe = (() => {
        class fe {
          constructor(R, ae, Le) {
            (this.eventManager = R),
              (this.sharedStylesHost = ae),
              (this.appId = Le),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new ue(R));
          }
          createRenderer(R, ae) {
            if (!R || !ae) return this.defaultRenderer;
            switch (ae.encapsulation) {
              case C.ifc.Emulated: {
                let Le = this.rendererByCompId.get(ae.id);
                return (
                  Le ||
                    ((Le = new wt(
                      this.eventManager,
                      this.sharedStylesHost,
                      ae,
                      this.appId
                    )),
                    this.rendererByCompId.set(ae.id, Le)),
                  Le.applyToHost(R),
                  Le
                );
              }
              case 1:
              case C.ifc.ShadowDom:
                return new ot(this.eventManager, this.sharedStylesHost, R, ae);
              default:
                if (!this.rendererByCompId.has(ae.id)) {
                  const Le = ye(ae.id, ae.styles, []);
                  this.sharedStylesHost.addStyles(Le),
                    this.rendererByCompId.set(ae.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (fe.ɵfac = function (R) {
            return new (R || fe)(C.LFG(Ae), C.LFG(He), C.LFG(C.AFp));
          }),
          (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
          fe
        );
      })();
      class ue {
        constructor(Q) {
          (this.eventManager = Q),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(Q, R) {
          return R
            ? document.createElementNS(Ge[R] || R, Q)
            : document.createElement(Q);
        }
        createComment(Q) {
          return document.createComment(Q);
        }
        createText(Q) {
          return document.createTextNode(Q);
        }
        appendChild(Q, R) {
          Q.appendChild(R);
        }
        insertBefore(Q, R, ae) {
          Q && Q.insertBefore(R, ae);
        }
        removeChild(Q, R) {
          Q && Q.removeChild(R);
        }
        selectRootElement(Q, R) {
          let ae = "string" == typeof Q ? document.querySelector(Q) : Q;
          if (!ae)
            throw new Error(`The selector "${Q}" did not match any elements`);
          return R || (ae.textContent = ""), ae;
        }
        parentNode(Q) {
          return Q.parentNode;
        }
        nextSibling(Q) {
          return Q.nextSibling;
        }
        setAttribute(Q, R, ae, Le) {
          if (Le) {
            R = Le + ":" + R;
            const rt = Ge[Le];
            rt ? Q.setAttributeNS(rt, R, ae) : Q.setAttribute(R, ae);
          } else Q.setAttribute(R, ae);
        }
        removeAttribute(Q, R, ae) {
          if (ae) {
            const Le = Ge[ae];
            Le ? Q.removeAttributeNS(Le, R) : Q.removeAttribute(`${ae}:${R}`);
          } else Q.removeAttribute(R);
        }
        addClass(Q, R) {
          Q.classList.add(R);
        }
        removeClass(Q, R) {
          Q.classList.remove(R);
        }
        setStyle(Q, R, ae, Le) {
          Le & (C.JOm.DashCase | C.JOm.Important)
            ? Q.style.setProperty(
                R,
                ae,
                Le & C.JOm.Important ? "important" : ""
              )
            : (Q.style[R] = ae);
        }
        removeStyle(Q, R, ae) {
          ae & C.JOm.DashCase ? Q.style.removeProperty(R) : (Q.style[R] = "");
        }
        setProperty(Q, R, ae) {
          Q[R] = ae;
        }
        setValue(Q, R) {
          Q.nodeValue = R;
        }
        listen(Q, R, ae) {
          return "string" == typeof Q
            ? this.eventManager.addGlobalEventListener(Q, R, ge(ae))
            : this.eventManager.addEventListener(Q, R, ge(ae));
        }
      }
      class wt extends ue {
        constructor(Q, R, ae, Le) {
          super(Q), (this.component = ae);
          const rt = ye(Le + "-" + ae.id, ae.styles, []);
          R.addStyles(rt),
            (this.contentAttr = (function Me(fe) {
              return "_ngcontent-%COMP%".replace(Se, fe);
            })(Le + "-" + ae.id)),
            (this.hostAttr = (function ie(fe) {
              return "_nghost-%COMP%".replace(Se, fe);
            })(Le + "-" + ae.id));
        }
        applyToHost(Q) {
          super.setAttribute(Q, this.hostAttr, "");
        }
        createElement(Q, R) {
          const ae = super.createElement(Q, R);
          return super.setAttribute(ae, this.contentAttr, ""), ae;
        }
      }
      class ot extends ue {
        constructor(Q, R, ae, Le) {
          super(Q),
            (this.sharedStylesHost = R),
            (this.hostEl = ae),
            (this.shadowRoot = ae.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const rt = ye(Le.id, Le.styles, []);
          for (let _t = 0; _t < rt.length; _t++) {
            const ht = document.createElement("style");
            (ht.textContent = rt[_t]), this.shadowRoot.appendChild(ht);
          }
        }
        nodeOrShadowRoot(Q) {
          return Q === this.hostEl ? this.shadowRoot : Q;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(Q, R) {
          return super.appendChild(this.nodeOrShadowRoot(Q), R);
        }
        insertBefore(Q, R, ae) {
          return super.insertBefore(this.nodeOrShadowRoot(Q), R, ae);
        }
        removeChild(Q, R) {
          return super.removeChild(this.nodeOrShadowRoot(Q), R);
        }
        parentNode(Q) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(Q))
          );
        }
      }
      let gt = (() => {
        class fe extends Je {
          constructor(R) {
            super(R);
          }
          supports(R) {
            return !0;
          }
          addEventListener(R, ae, Le) {
            return (
              R.addEventListener(ae, Le, !1),
              () => this.removeEventListener(R, ae, Le)
            );
          }
          removeEventListener(R, ae, Le) {
            return R.removeEventListener(ae, Le);
          }
        }
        return (
          (fe.ɵfac = function (R) {
            return new (R || fe)(C.LFG(o.K0));
          }),
          (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
          fe
        );
      })();
      const fn = ["alt", "control", "meta", "shift"],
        Yt = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        st = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        kt = {
          alt: (fe) => fe.altKey,
          control: (fe) => fe.ctrlKey,
          meta: (fe) => fe.metaKey,
          shift: (fe) => fe.shiftKey,
        };
      let Ln = (() => {
        class fe extends Je {
          constructor(R) {
            super(R);
          }
          supports(R) {
            return null != fe.parseEventName(R);
          }
          addEventListener(R, ae, Le) {
            const rt = fe.parseEventName(ae),
              _t = fe.eventCallback(rt.fullKey, Le, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, o.q)().onAndCancel(R, rt.domEventName, _t)
              );
          }
          static parseEventName(R) {
            const ae = R.toLowerCase().split("."),
              Le = ae.shift();
            if (0 === ae.length || ("keydown" !== Le && "keyup" !== Le))
              return null;
            const rt = fe._normalizeKey(ae.pop());
            let _t = "";
            if (
              (fn.forEach(($t) => {
                const Mn = ae.indexOf($t);
                Mn > -1 && (ae.splice(Mn, 1), (_t += $t + "."));
              }),
              (_t += rt),
              0 != ae.length || 0 === rt.length)
            )
              return null;
            const ht = {};
            return (ht.domEventName = Le), (ht.fullKey = _t), ht;
          }
          static getEventFullKey(R) {
            let ae = "",
              Le = (function Qt(fe) {
                let Q = fe.key;
                if (null == Q) {
                  if (((Q = fe.keyIdentifier), null == Q))
                    return "Unidentified";
                  Q.startsWith("U+") &&
                    ((Q = String.fromCharCode(parseInt(Q.substring(2), 16))),
                    3 === fe.location && st.hasOwnProperty(Q) && (Q = st[Q]));
                }
                return Yt[Q] || Q;
              })(R);
            return (
              (Le = Le.toLowerCase()),
              " " === Le ? (Le = "space") : "." === Le && (Le = "dot"),
              fn.forEach((rt) => {
                rt != Le && kt[rt](R) && (ae += rt + ".");
              }),
              (ae += Le),
              ae
            );
          }
          static eventCallback(R, ae, Le) {
            return (rt) => {
              fe.getEventFullKey(rt) === R && Le.runGuarded(() => ae(rt));
            };
          }
          static _normalizeKey(R) {
            return "esc" === R ? "escape" : R;
          }
        }
        return (
          (fe.ɵfac = function (R) {
            return new (R || fe)(C.LFG(o.K0));
          }),
          (fe.ɵprov = C.Yz7({ token: fe, factory: fe.ɵfac })),
          fe
        );
      })();
      const qt = (0, C.eFA)(C._c5, "browser", [
          { provide: C.Lbi, useValue: o.bD },
          {
            provide: C.g9A,
            useValue: function hn() {
              B.makeCurrent(), $.init();
            },
            multi: !0,
          },
          {
            provide: o.K0,
            useFactory: function Nn() {
              return (0, C.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Bn = [
          { provide: C.zSh, useValue: "root" },
          {
            provide: C.qLn,
            useFactory: function An() {
              return new C.qLn();
            },
            deps: [],
          },
          { provide: Te, useClass: gt, multi: !0, deps: [o.K0, C.R0b, C.Lbi] },
          { provide: Te, useClass: Ln, multi: !0, deps: [o.K0] },
          { provide: xe, useClass: xe, deps: [Ae, He, C.AFp] },
          { provide: C.FYo, useExisting: xe },
          { provide: Pe, useExisting: He },
          { provide: He, useClass: He, deps: [o.K0] },
          { provide: C.dDg, useClass: C.dDg, deps: [C.R0b] },
          { provide: Ae, useClass: Ae, deps: [Te, C.R0b] },
          { provide: o.JF, useClass: Oe, deps: [] },
        ];
      let zn = (() => {
        class fe {
          constructor(R) {
            if (R)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(R) {
            return {
              ngModule: fe,
              providers: [
                { provide: C.AFp, useValue: R.appId },
                { provide: L, useExisting: C.AFp },
                Z,
              ],
            };
          }
        }
        return (
          (fe.ɵfac = function (R) {
            return new (R || fe)(C.LFG(fe, 12));
          }),
          (fe.ɵmod = C.oAB({ type: fe })),
          (fe.ɵinj = C.cJS({ providers: Bn, imports: [o.ez, C.hGG] })),
          fe
        );
      })();
      "undefined" != typeof window && window;
      let Ne = (() => {
          class fe {}
          return (
            (fe.ɵfac = function (R) {
              return new (R || fe)();
            }),
            (fe.ɵprov = C.Yz7({
              token: fe,
              factory: function (R) {
                let ae = null;
                return (ae = R ? new (R || fe)() : C.LFG(ct)), ae;
              },
              providedIn: "root",
            })),
            fe
          );
        })(),
        ct = (() => {
          class fe extends Ne {
            constructor(R) {
              super(), (this._doc = R);
            }
            sanitize(R, ae) {
              if (null == ae) return null;
              switch (R) {
                case C.q3G.NONE:
                  return ae;
                case C.q3G.HTML:
                  return (0, C.qzn)(ae, "HTML")
                    ? (0, C.z3N)(ae)
                    : (0, C.EiD)(this._doc, String(ae)).toString();
                case C.q3G.STYLE:
                  return (0, C.qzn)(ae, "Style") ? (0, C.z3N)(ae) : ae;
                case C.q3G.SCRIPT:
                  if ((0, C.qzn)(ae, "Script")) return (0, C.z3N)(ae);
                  throw new Error("unsafe value used in a script context");
                case C.q3G.URL:
                  return (
                    (0, C.yhl)(ae),
                    (0, C.qzn)(ae, "URL")
                      ? (0, C.z3N)(ae)
                      : (0, C.mCW)(String(ae))
                  );
                case C.q3G.RESOURCE_URL:
                  if ((0, C.qzn)(ae, "ResourceURL")) return (0, C.z3N)(ae);
                  throw new Error(
                    "unsafe value used in a resource URL context (see https://g.co/ng/security#xss)"
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${R} (see https://g.co/ng/security#xss)`
                  );
              }
            }
            bypassSecurityTrustHtml(R) {
              return (0, C.JVY)(R);
            }
            bypassSecurityTrustStyle(R) {
              return (0, C.L6k)(R);
            }
            bypassSecurityTrustScript(R) {
              return (0, C.eBb)(R);
            }
            bypassSecurityTrustUrl(R) {
              return (0, C.LAX)(R);
            }
            bypassSecurityTrustResourceUrl(R) {
              return (0, C.pB0)(R);
            }
          }
          return (
            (fe.ɵfac = function (R) {
              return new (R || fe)(C.LFG(o.K0));
            }),
            (fe.ɵprov = C.Yz7({
              token: fe,
              factory: function (R) {
                let ae = null;
                return (
                  (ae = R
                    ? new R()
                    : (function ze(fe) {
                        return new ct(fe.get(o.K0));
                      })(C.LFG(C.zs3))),
                  ae
                );
              },
              providedIn: "root",
            })),
            fe
          );
        })();
    },
    5215: (le, j, v) => {
      v.d(j, {
        gk: () => qt,
        m2: () => vn,
        Q3: () => Bn,
        OD: () => Nn,
        F0: () => pt,
        yS: () => Sr,
        Bz: () => rs,
        lC: () => zr,
        R9: () => zn,
      });
      var o = v(5e3),
        C = v(9751),
        F = v(4742),
        B = v(457),
        U = v(4671),
        J = v(3268),
        W = v(3269),
        Y = v(1810),
        L = v(5403),
        V = v(9672);
      function Oe(h, d, u) {
        h ? (0, V.f)(u, h, d) : d();
      }
      const Ae = (0, v(3888).d)(
        (h) =>
          function () {
            h(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      var Je = v(727),
        Pe = v(4482);
      function He() {
        return (0, Pe.e)((h, d) => {
          let u = null;
          h._refCount++;
          const m = (0, L.x)(d, void 0, void 0, void 0, () => {
            if (!h || h._refCount <= 0 || 0 < --h._refCount)
              return void (u = null);
            const E = h._connection,
              b = u;
            (u = null),
              E && (!b || E === b) && E.unsubscribe(),
              d.unsubscribe();
          });
          h.subscribe(m), m.closed || (u = h.connect());
        });
      }
      class Ze extends C.y {
        constructor(d, u) {
          super(),
            (this.source = d),
            (this.subjectFactory = u),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Pe.A)(d) && (this.lift = d.lift);
        }
        _subscribe(d) {
          return this.getSubject().subscribe(d);
        }
        getSubject() {
          const d = this._subject;
          return (
            (!d || d.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: d } = this;
          (this._subject = this._connection = null),
            null == d || d.unsubscribe();
        }
        connect() {
          let d = this._connection;
          if (!d) {
            d = this._connection = new Je.w0();
            const u = this.getSubject();
            d.add(
              this.source.subscribe(
                (0, L.x)(
                  u,
                  void 0,
                  () => {
                    this._teardown(), u.complete();
                  },
                  (m) => {
                    this._teardown(), u.error(m);
                  },
                  () => this._teardown()
                )
              )
            ),
              d.closed && ((this._connection = null), (d = Je.w0.EMPTY));
          }
          return d;
        }
        refCount() {
          return He()(this);
        }
      }
      var Ge = v(9646),
        Se = v(1135),
        oe = v(2843),
        je = v(7272),
        Ve = v(9770),
        et = v(515),
        Me = v(7579),
        ie = v(9300);
      function ye(h) {
        return h <= 0
          ? () => et.E
          : (0, Pe.e)((d, u) => {
              let m = [];
              d.subscribe(
                (0, L.x)(
                  u,
                  (E) => {
                    m.push(E), h < m.length && m.shift();
                  },
                  () => {
                    for (const E of m) u.next(E);
                    u.complete();
                  },
                  void 0,
                  () => {
                    m = null;
                  }
                )
              );
            });
      }
      function ge(h = he) {
        return (0, Pe.e)((d, u) => {
          let m = !1;
          d.subscribe(
            (0, L.x)(
              u,
              (E) => {
                (m = !0), u.next(E);
              },
              () => (m ? u.complete() : u.error(h()))
            )
          );
        });
      }
      function he() {
        return new Ae();
      }
      function xe(h) {
        return (0, Pe.e)((d, u) => {
          let m = !1;
          d.subscribe(
            (0, L.x)(
              u,
              (E) => {
                (m = !0), u.next(E);
              },
              () => {
                m || u.next(h), u.complete();
              }
            )
          );
        });
      }
      var tt = v(5698);
      function ft(h, d) {
        const u = arguments.length >= 2;
        return (m) =>
          m.pipe(
            h ? (0, ie.h)((E, b) => h(E, b, m)) : U.y,
            (0, tt.q)(1),
            u ? xe(d) : ge(() => new Ae())
          );
      }
      var wt = v(4004),
        ot = v(3900),
        gt = v(8675),
        fn = v(5026),
        Wt = v(262),
        Yt = v(4351),
        st = v(5577),
        kt = v(8505),
        Ln = v(8746),
        Qt = v(8189),
        hn = v(9808);
      class An {
        constructor(d, u) {
          (this.id = d), (this.url = u);
        }
      }
      class Nn extends An {
        constructor(d, u, m = "imperative", E = null) {
          super(d, u), (this.navigationTrigger = m), (this.restoredState = E);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class vn extends An {
        constructor(d, u, m) {
          super(d, u), (this.urlAfterRedirects = m);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class qt extends An {
        constructor(d, u, m) {
          super(d, u), (this.reason = m);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Bn extends An {
        constructor(d, u, m) {
          super(d, u), (this.error = m);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class zn extends An {
        constructor(d, u, m, E) {
          super(d, u), (this.urlAfterRedirects = m), (this.state = E);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Zn extends An {
        constructor(d, u, m, E) {
          super(d, u), (this.urlAfterRedirects = m), (this.state = E);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class St extends An {
        constructor(d, u, m, E, b) {
          super(d, u),
            (this.urlAfterRedirects = m),
            (this.state = E),
            (this.shouldActivate = b);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Xn extends An {
        constructor(d, u, m, E) {
          super(d, u), (this.urlAfterRedirects = m), (this.state = E);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Cn extends An {
        constructor(d, u, m, E) {
          super(d, u), (this.urlAfterRedirects = m), (this.state = E);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class wn {
        constructor(d) {
          this.route = d;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class In {
        constructor(d) {
          this.route = d;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Hn {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class jn {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class _n {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Un {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Sn {
        constructor(d, u, m) {
          (this.routerEvent = d), (this.position = u), (this.anchor = m);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const at = "primary";
      class Ct {
        constructor(d) {
          this.params = d || {};
        }
        has(d) {
          return Object.prototype.hasOwnProperty.call(this.params, d);
        }
        get(d) {
          if (this.has(d)) {
            const u = this.params[d];
            return Array.isArray(u) ? u[0] : u;
          }
          return null;
        }
        getAll(d) {
          if (this.has(d)) {
            const u = this.params[d];
            return Array.isArray(u) ? u : [u];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function mt(h) {
        return new Ct(h);
      }
      const $n = "ngNavigationCancelingError";
      function Wn(h) {
        const d = Error("NavigationCancelingError: " + h);
        return (d[$n] = !0), d;
      }
      function De(h, d, u) {
        const m = u.path.split("/");
        if (
          m.length > h.length ||
          ("full" === u.pathMatch && (d.hasChildren() || m.length < h.length))
        )
          return null;
        const E = {};
        for (let b = 0; b < m.length; b++) {
          const G = m[b],
            re = h[b];
          if (G.startsWith(":")) E[G.substring(1)] = re;
          else if (G !== re.path) return null;
        }
        return { consumed: h.slice(0, m.length), posParams: E };
      }
      function M(h, d) {
        const u = h ? Object.keys(h) : void 0,
          m = d ? Object.keys(d) : void 0;
        if (!u || !m || u.length != m.length) return !1;
        let E;
        for (let b = 0; b < u.length; b++)
          if (((E = u[b]), !I(h[E], d[E]))) return !1;
        return !0;
      }
      function I(h, d) {
        if (Array.isArray(h) && Array.isArray(d)) {
          if (h.length !== d.length) return !1;
          const u = [...h].sort(),
            m = [...d].sort();
          return u.every((E, b) => m[b] === E);
        }
        return h === d;
      }
      function se(h) {
        return Array.prototype.concat.apply([], h);
      }
      function pe(h) {
        return h.length > 0 ? h[h.length - 1] : null;
      }
      function nt(h, d) {
        for (const u in h) h.hasOwnProperty(u) && d(h[u], u);
      }
      function ee(h) {
        return (0, o.CqO)(h)
          ? h
          : (0, o.QGY)(h)
          ? (0, B.D)(Promise.resolve(h))
          : (0, Ge.of)(h);
      }
      const ve = {
          exact: function Ne(h, d, u) {
            if (
              !rt(h.segments, d.segments) ||
              !fe(h.segments, d.segments, u) ||
              h.numberOfChildren !== d.numberOfChildren
            )
              return !1;
            for (const m in d.children)
              if (!h.children[m] || !Ne(h.children[m], d.children[m], u))
                return !1;
            return !0;
          },
          subset: ct,
        },
        k = {
          exact: function de(h, d) {
            return M(h, d);
          },
          subset: function ze(h, d) {
            return (
              Object.keys(d).length <= Object.keys(h).length &&
              Object.keys(d).every((u) => I(h[u], d[u]))
            );
          },
          ignored: () => !0,
        };
      function K(h, d, u) {
        return (
          ve[u.paths](h.root, d.root, u.matrixParams) &&
          k[u.queryParams](h.queryParams, d.queryParams) &&
          !("exact" === u.fragment && h.fragment !== d.fragment)
        );
      }
      function ct(h, d, u) {
        return Ut(h, d, d.segments, u);
      }
      function Ut(h, d, u, m) {
        if (h.segments.length > u.length) {
          const E = h.segments.slice(0, u.length);
          return !(!rt(E, u) || d.hasChildren() || !fe(E, u, m));
        }
        if (h.segments.length === u.length) {
          if (!rt(h.segments, u) || !fe(h.segments, u, m)) return !1;
          for (const E in d.children)
            if (!h.children[E] || !ct(h.children[E], d.children[E], m))
              return !1;
          return !0;
        }
        {
          const E = u.slice(0, h.segments.length),
            b = u.slice(h.segments.length);
          return (
            !!(rt(h.segments, E) && fe(h.segments, E, m) && h.children[at]) &&
            Ut(h.children[at], d, b, m)
          );
        }
      }
      function fe(h, d, u) {
        return d.every((m, E) => k[u](h[E].parameters, m.parameters));
      }
      class Q {
        constructor(d, u, m) {
          (this.root = d), (this.queryParams = u), (this.fragment = m);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = mt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Mn.serialize(this);
        }
      }
      class R {
        constructor(d, u) {
          (this.segments = d),
            (this.children = u),
            (this.parent = null),
            nt(u, (m, E) => (m.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return an(this);
        }
      }
      class ae {
        constructor(d, u) {
          (this.path = d), (this.parameters = u);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = mt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Qn(this);
        }
      }
      function rt(h, d) {
        return h.length === d.length && h.every((u, m) => u.path === d[m].path);
      }
      class ht {}
      class $t {
        parse(d) {
          const u = new Cr(d);
          return new Q(
            u.parseRootSegment(),
            u.parseQueryParams(),
            u.parseFragment()
          );
        }
        serialize(d) {
          const u = `/${pn(d.root, !0)}`,
            m = (function Rn(h) {
              const d = Object.keys(h)
                .map((u) => {
                  const m = h[u];
                  return Array.isArray(m)
                    ? m.map((E) => `${ur(u)}=${ur(E)}`).join("&")
                    : `${ur(u)}=${ur(m)}`;
                })
                .filter((u) => !!u);
              return d.length ? `?${d.join("&")}` : "";
            })(d.queryParams);
          return `${u}${m}${
            "string" == typeof d.fragment
              ? `#${(function Yn(h) {
                  return encodeURI(h);
                })(d.fragment)}`
              : ""
          }`;
        }
      }
      const Mn = new $t();
      function an(h) {
        return h.segments.map((d) => Qn(d)).join("/");
      }
      function pn(h, d) {
        if (!h.hasChildren()) return an(h);
        if (d) {
          const u = h.children[at] ? pn(h.children[at], !1) : "",
            m = [];
          return (
            nt(h.children, (E, b) => {
              b !== at && m.push(`${b}:${pn(E, !1)}`);
            }),
            m.length > 0 ? `${u}(${m.join("//")})` : u
          );
        }
        {
          const u = (function _t(h, d) {
            let u = [];
            return (
              nt(h.children, (m, E) => {
                E === at && (u = u.concat(d(m, E)));
              }),
              nt(h.children, (m, E) => {
                E !== at && (u = u.concat(d(m, E)));
              }),
              u
            );
          })(h, (m, E) =>
            E === at ? [pn(h.children[at], !1)] : [`${E}:${pn(m, !1)}`]
          );
          return 1 === Object.keys(h.children).length && null != h.children[at]
            ? `${an(h)}/${u[0]}`
            : `${an(h)}/(${u.join("//")})`;
        }
      }
      function En(h) {
        return encodeURIComponent(h)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function ur(h) {
        return En(h).replace(/%3B/gi, ";");
      }
      function it(h) {
        return En(h)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Lt(h) {
        return decodeURIComponent(h);
      }
      function nn(h) {
        return Lt(h.replace(/\+/g, "%20"));
      }
      function Qn(h) {
        return `${it(h.path)}${(function sr(h) {
          return Object.keys(h)
            .map((d) => `;${it(d)}=${it(h[d])}`)
            .join("");
        })(h.parameters)}`;
      }
      const cr = /^[^\/()?;=#]+/;
      function ln(h) {
        const d = h.match(cr);
        return d ? d[0] : "";
      }
      const or = /^[^=?&#]+/,
        Nt = /^[^&#]+/;
      class Cr {
        constructor(d) {
          (this.url = d), (this.remaining = d);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new R([], {})
              : new R([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const d = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(d);
            } while (this.consumeOptional("&"));
          return d;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const d = [];
          for (
            this.peekStartsWith("(") || d.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), d.push(this.parseSegment());
          let u = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (u = this.parseParens(!0)));
          let m = {};
          return (
            this.peekStartsWith("(") && (m = this.parseParens(!1)),
            (d.length > 0 || Object.keys(u).length > 0) &&
              (m[at] = new R(d, u)),
            m
          );
        }
        parseSegment() {
          const d = ln(this.remaining);
          if ("" === d && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(d), new ae(Lt(d), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const d = {};
          for (; this.consumeOptional(";"); ) this.parseParam(d);
          return d;
        }
        parseParam(d) {
          const u = ln(this.remaining);
          if (!u) return;
          this.capture(u);
          let m = "";
          if (this.consumeOptional("=")) {
            const E = ln(this.remaining);
            E && ((m = E), this.capture(m));
          }
          d[Lt(u)] = Lt(m);
        }
        parseQueryParam(d) {
          const u = (function dr(h) {
            const d = h.match(or);
            return d ? d[0] : "";
          })(this.remaining);
          if (!u) return;
          this.capture(u);
          let m = "";
          if (this.consumeOptional("=")) {
            const G = (function Nr(h) {
              const d = h.match(Nt);
              return d ? d[0] : "";
            })(this.remaining);
            G && ((m = G), this.capture(m));
          }
          const E = nn(u),
            b = nn(m);
          if (d.hasOwnProperty(E)) {
            let G = d[E];
            Array.isArray(G) || ((G = [G]), (d[E] = G)), G.push(b);
          } else d[E] = b;
        }
        parseParens(d) {
          const u = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const m = ln(this.remaining),
              E = this.remaining[m.length];
            if ("/" !== E && ")" !== E && ";" !== E)
              throw new Error(`Cannot parse url '${this.url}'`);
            let b;
            m.indexOf(":") > -1
              ? ((b = m.substr(0, m.indexOf(":"))),
                this.capture(b),
                this.capture(":"))
              : d && (b = at);
            const G = this.parseChildren();
            (u[b] = 1 === Object.keys(G).length ? G[at] : new R([], G)),
              this.consumeOptional("//");
          }
          return u;
        }
        peekStartsWith(d) {
          return this.remaining.startsWith(d);
        }
        consumeOptional(d) {
          return (
            !!this.peekStartsWith(d) &&
            ((this.remaining = this.remaining.substring(d.length)), !0)
          );
        }
        capture(d) {
          if (!this.consumeOptional(d)) throw new Error(`Expected "${d}".`);
        }
      }
      class z {
        constructor(d) {
          this._root = d;
        }
        get root() {
          return this._root.value;
        }
        parent(d) {
          const u = this.pathFromRoot(d);
          return u.length > 1 ? u[u.length - 2] : null;
        }
        children(d) {
          const u = Re(d, this._root);
          return u ? u.children.map((m) => m.value) : [];
        }
        firstChild(d) {
          const u = Re(d, this._root);
          return u && u.children.length > 0 ? u.children[0].value : null;
        }
        siblings(d) {
          const u = me(d, this._root);
          return u.length < 2
            ? []
            : u[u.length - 2].children
                .map((E) => E.value)
                .filter((E) => E !== d);
        }
        pathFromRoot(d) {
          return me(d, this._root).map((u) => u.value);
        }
      }
      function Re(h, d) {
        if (h === d.value) return d;
        for (const u of d.children) {
          const m = Re(h, u);
          if (m) return m;
        }
        return null;
      }
      function me(h, d) {
        if (h === d.value) return [d];
        for (const u of d.children) {
          const m = me(h, u);
          if (m.length) return m.unshift(d), m;
        }
        return [];
      }
      class we {
        constructor(d, u) {
          (this.value = d), (this.children = u);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ye(h) {
        const d = {};
        return h && h.children.forEach((u) => (d[u.value.outlet] = u)), d;
      }
      class Qe extends z {
        constructor(d, u) {
          super(d), (this.snapshot = u), vr(this, d);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Et(h, d) {
        const u = (function Dn(h, d) {
            const G = new bn([], {}, {}, "", {}, at, d, null, h.root, -1, {});
            return new xr("", new we(G, []));
          })(h, d),
          m = new Se.X([new ae("", {})]),
          E = new Se.X({}),
          b = new Se.X({}),
          G = new Se.X({}),
          re = new Se.X(""),
          Fe = new en(m, E, G, re, b, at, d, u.root);
        return (Fe.snapshot = u.root), new Qe(new we(Fe, []), u);
      }
      class en {
        constructor(d, u, m, E, b, G, re, Fe) {
          (this.url = d),
            (this.params = u),
            (this.queryParams = m),
            (this.fragment = E),
            (this.data = b),
            (this.outlet = G),
            (this.component = re),
            (this._futureSnapshot = Fe);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, wt.U)((d) => mt(d)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, wt.U)((d) => mt(d))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Zt(h, d = "emptyOnly") {
        const u = h.pathFromRoot;
        let m = 0;
        if ("always" !== d)
          for (m = u.length - 1; m >= 1; ) {
            const E = u[m],
              b = u[m - 1];
            if (E.routeConfig && "" === E.routeConfig.path) m--;
            else {
              if (b.component) break;
              m--;
            }
          }
        return (function Bt(h) {
          return h.reduce(
            (d, u) => ({
              params: Object.assign(Object.assign({}, d.params), u.params),
              data: Object.assign(Object.assign({}, d.data), u.data),
              resolve: Object.assign(
                Object.assign({}, d.resolve),
                u._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(u.slice(m));
      }
      class bn {
        constructor(d, u, m, E, b, G, re, Fe, dt, Xt, Mt) {
          (this.url = d),
            (this.params = u),
            (this.queryParams = m),
            (this.fragment = E),
            (this.data = b),
            (this.outlet = G),
            (this.component = re),
            (this.routeConfig = Fe),
            (this._urlSegment = dt),
            (this._lastPathIndex = Xt),
            (this._resolve = Mt);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = mt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = mt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((m) => m.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class xr extends z {
        constructor(d, u) {
          super(u), (this.url = d), vr(this, u);
        }
        toString() {
          return Jn(this._root);
        }
      }
      function vr(h, d) {
        (d.value._routerState = h), d.children.forEach((u) => vr(h, u));
      }
      function Jn(h) {
        const d =
          h.children.length > 0 ? ` { ${h.children.map(Jn).join(", ")} } ` : "";
        return `${h.value}${d}`;
      }
      function Jr(h) {
        if (h.snapshot) {
          const d = h.snapshot,
            u = h._futureSnapshot;
          (h.snapshot = u),
            M(d.queryParams, u.queryParams) ||
              h.queryParams.next(u.queryParams),
            d.fragment !== u.fragment && h.fragment.next(u.fragment),
            M(d.params, u.params) || h.params.next(u.params),
            (function be(h, d) {
              if (h.length !== d.length) return !1;
              for (let u = 0; u < h.length; ++u) if (!M(h[u], d[u])) return !1;
              return !0;
            })(d.url, u.url) || h.url.next(u.url),
            M(d.data, u.data) || h.data.next(u.data);
        } else
          (h.snapshot = h._futureSnapshot), h.data.next(h._futureSnapshot.data);
      }
      function Ni(h, d) {
        const u =
          M(h.params, d.params) &&
          (function Le(h, d) {
            return (
              rt(h, d) && h.every((u, m) => M(u.parameters, d[m].parameters))
            );
          })(h.url, d.url);
        return (
          u &&
          !(!h.parent != !d.parent) &&
          (!h.parent || Ni(h.parent, d.parent))
        );
      }
      function Kn(h, d, u) {
        if (u && h.shouldReuseRoute(d.value, u.value.snapshot)) {
          const m = u.value;
          m._futureSnapshot = d.value;
          const E = (function Qi(h, d, u) {
            return d.children.map((m) => {
              for (const E of u.children)
                if (h.shouldReuseRoute(m.value, E.value.snapshot))
                  return Kn(h, m, E);
              return Kn(h, m);
            });
          })(h, d, u);
          return new we(m, E);
        }
        {
          if (h.shouldAttach(d.value)) {
            const b = h.retrieve(d.value);
            if (null !== b) {
              const G = b.route;
              return (
                (G.value._futureSnapshot = d.value),
                (G.children = d.children.map((re) => Kn(h, re))),
                G
              );
            }
          }
          const m = (function T(h) {
              return new en(
                new Se.X(h.url),
                new Se.X(h.params),
                new Se.X(h.queryParams),
                new Se.X(h.fragment),
                new Se.X(h.data),
                h.outlet,
                h.component,
                h
              );
            })(d.value),
            E = d.children.map((b) => Kn(h, b));
          return new we(m, E);
        }
      }
      function H(h) {
        return (
          "object" == typeof h && null != h && !h.outlets && !h.segmentPath
        );
      }
      function Ce(h) {
        return "object" == typeof h && null != h && h.outlets;
      }
      function vt(h, d, u, m, E) {
        let b = {};
        if (
          (m &&
            nt(m, (re, Fe) => {
              b[Fe] = Array.isArray(re) ? re.map((dt) => `${dt}`) : `${re}`;
            }),
          h === d)
        )
          return new Q(u, b, E);
        const G = Tt(h, d, u);
        return new Q(G, b, E);
      }
      function Tt(h, d, u) {
        const m = {};
        return (
          nt(h.children, (E, b) => {
            m[b] = E === d ? u : Tt(E, d, u);
          }),
          new R(h.segments, m)
        );
      }
      class er {
        constructor(d, u, m) {
          if (
            ((this.isAbsolute = d),
            (this.numberOfDoubleDots = u),
            (this.commands = m),
            d && m.length > 0 && H(m[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const E = m.find(Ce);
          if (E && E !== pe(m))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Hr {
        constructor(d, u, m) {
          (this.segmentGroup = d), (this.processChildren = u), (this.index = m);
        }
      }
      function Ei(h, d, u) {
        if (
          (h || (h = new R([], {})), 0 === h.segments.length && h.hasChildren())
        )
          return $r(h, d, u);
        const m = (function Di(h, d, u) {
            let m = 0,
              E = d;
            const b = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; E < h.segments.length; ) {
              if (m >= u.length) return b;
              const G = h.segments[E],
                re = u[m];
              if (Ce(re)) break;
              const Fe = `${re}`,
                dt = m < u.length - 1 ? u[m + 1] : null;
              if (E > 0 && void 0 === Fe) break;
              if (Fe && dt && "object" == typeof dt && void 0 === dt.outlets) {
                if (!kr(Fe, dt, G)) return b;
                m += 2;
              } else {
                if (!kr(Fe, {}, G)) return b;
                m++;
              }
              E++;
            }
            return { match: !0, pathIndex: E, commandIndex: m };
          })(h, d, u),
          E = u.slice(m.commandIndex);
        if (m.match && m.pathIndex < h.segments.length) {
          const b = new R(h.segments.slice(0, m.pathIndex), {});
          return (
            (b.children[at] = new R(h.segments.slice(m.pathIndex), h.children)),
            $r(b, 0, E)
          );
        }
        return m.match && 0 === E.length
          ? new R(h.segments, {})
          : m.match && !h.hasChildren()
          ? Xi(h, d, u)
          : m.match
          ? $r(h, 0, E)
          : Xi(h, d, u);
      }
      function $r(h, d, u) {
        if (0 === u.length) return new R(h.segments, {});
        {
          const m = (function _i(h) {
              return Ce(h[0]) ? h[0].outlets : { [at]: h };
            })(u),
            E = {};
          return (
            nt(m, (b, G) => {
              "string" == typeof b && (b = [b]),
                null !== b && (E[G] = Ei(h.children[G], d, b));
            }),
            nt(h.children, (b, G) => {
              void 0 === m[G] && (E[G] = b);
            }),
            new R(h.segments, E)
          );
        }
      }
      function Xi(h, d, u) {
        const m = h.segments.slice(0, d);
        let E = 0;
        for (; E < u.length; ) {
          const b = u[E];
          if (Ce(b)) {
            const Fe = ls(b.outlets);
            return new R(m, Fe);
          }
          if (0 === E && H(u[0])) {
            m.push(new ae(h.segments[d].path, us(u[0]))), E++;
            continue;
          }
          const G = Ce(b) ? b.outlets[at] : `${b}`,
            re = E < u.length - 1 ? u[E + 1] : null;
          G && re && H(re)
            ? (m.push(new ae(G, us(re))), (E += 2))
            : (m.push(new ae(G, {})), E++);
        }
        return new R(m, {});
      }
      function ls(h) {
        const d = {};
        return (
          nt(h, (u, m) => {
            "string" == typeof u && (u = [u]),
              null !== u && (d[m] = Xi(new R([], {}), 0, u));
          }),
          d
        );
      }
      function us(h) {
        const d = {};
        return nt(h, (u, m) => (d[m] = `${u}`)), d;
      }
      function kr(h, d, u) {
        return h == u.path && M(d, u.parameters);
      }
      class ei {
        constructor(d, u, m, E) {
          (this.routeReuseStrategy = d),
            (this.futureState = u),
            (this.currState = m),
            (this.forwardEvent = E);
        }
        activate(d) {
          const u = this.futureState._root,
            m = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(u, m, d),
            Jr(this.futureState.root),
            this.activateChildRoutes(u, m, d);
        }
        deactivateChildRoutes(d, u, m) {
          const E = Ye(u);
          d.children.forEach((b) => {
            const G = b.value.outlet;
            this.deactivateRoutes(b, E[G], m), delete E[G];
          }),
            nt(E, (b, G) => {
              this.deactivateRouteAndItsChildren(b, m);
            });
        }
        deactivateRoutes(d, u, m) {
          const E = d.value,
            b = u ? u.value : null;
          if (E === b)
            if (E.component) {
              const G = m.getContext(E.outlet);
              G && this.deactivateChildRoutes(d, u, G.children);
            } else this.deactivateChildRoutes(d, u, m);
          else b && this.deactivateRouteAndItsChildren(u, m);
        }
        deactivateRouteAndItsChildren(d, u) {
          d.value.component &&
          this.routeReuseStrategy.shouldDetach(d.value.snapshot)
            ? this.detachAndStoreRouteSubtree(d, u)
            : this.deactivateRouteAndOutlet(d, u);
        }
        detachAndStoreRouteSubtree(d, u) {
          const m = u.getContext(d.value.outlet),
            E = m && d.value.component ? m.children : u,
            b = Ye(d);
          for (const G of Object.keys(b))
            this.deactivateRouteAndItsChildren(b[G], E);
          if (m && m.outlet) {
            const G = m.outlet.detach(),
              re = m.children.onOutletDeactivated();
            this.routeReuseStrategy.store(d.value.snapshot, {
              componentRef: G,
              route: d,
              contexts: re,
            });
          }
        }
        deactivateRouteAndOutlet(d, u) {
          const m = u.getContext(d.value.outlet),
            E = m && d.value.component ? m.children : u,
            b = Ye(d);
          for (const G of Object.keys(b))
            this.deactivateRouteAndItsChildren(b[G], E);
          m &&
            m.outlet &&
            (m.outlet.deactivate(),
            m.children.onOutletDeactivated(),
            (m.attachRef = null),
            (m.resolver = null),
            (m.route = null));
        }
        activateChildRoutes(d, u, m) {
          const E = Ye(u);
          d.children.forEach((b) => {
            this.activateRoutes(b, E[b.value.outlet], m),
              this.forwardEvent(new Un(b.value.snapshot));
          }),
            d.children.length && this.forwardEvent(new jn(d.value.snapshot));
        }
        activateRoutes(d, u, m) {
          const E = d.value,
            b = u ? u.value : null;
          if ((Jr(E), E === b))
            if (E.component) {
              const G = m.getOrCreateContext(E.outlet);
              this.activateChildRoutes(d, u, G.children);
            } else this.activateChildRoutes(d, u, m);
          else if (E.component) {
            const G = m.getOrCreateContext(E.outlet);
            if (this.routeReuseStrategy.shouldAttach(E.snapshot)) {
              const re = this.routeReuseStrategy.retrieve(E.snapshot);
              this.routeReuseStrategy.store(E.snapshot, null),
                G.children.onOutletReAttached(re.contexts),
                (G.attachRef = re.componentRef),
                (G.route = re.route.value),
                G.outlet && G.outlet.attach(re.componentRef, re.route.value),
                Jr(re.route.value),
                this.activateChildRoutes(d, null, G.children);
            } else {
              const re = (function Ci(h) {
                  for (let d = h.parent; d; d = d.parent) {
                    const u = d.routeConfig;
                    if (u && u._loadedConfig) return u._loadedConfig;
                    if (u && u.component) return null;
                  }
                  return null;
                })(E.snapshot),
                Fe = re ? re.module.componentFactoryResolver : null;
              (G.attachRef = null),
                (G.route = E),
                (G.resolver = Fe),
                G.outlet && G.outlet.activateWith(E, Fe),
                this.activateChildRoutes(d, null, G.children);
            }
          } else this.activateChildRoutes(d, null, m);
        }
      }
      class Bi {
        constructor(d, u) {
          (this.routes = d), (this.module = u);
        }
      }
      function Br(h) {
        return "function" == typeof h;
      }
      function Ar(h) {
        return h instanceof Q;
      }
      const jr = Symbol("INITIAL_VALUE");
      function xi() {
        return (0, ot.w)((h) =>
          (function Z(...h) {
            const d = (0, W.yG)(h),
              u = (0, W.jO)(h),
              { args: m, keys: E } = (0, F.D)(h);
            if (0 === m.length) return (0, B.D)([], d);
            const b = new C.y(
              (function $(h, d, u = U.y) {
                return (m) => {
                  Oe(
                    d,
                    () => {
                      const { length: E } = h,
                        b = new Array(E);
                      let G = E,
                        re = E;
                      for (let Fe = 0; Fe < E; Fe++)
                        Oe(
                          d,
                          () => {
                            const dt = (0, B.D)(h[Fe], d);
                            let Xt = !1;
                            dt.subscribe(
                              (0, L.x)(
                                m,
                                (Mt) => {
                                  (b[Fe] = Mt),
                                    Xt || ((Xt = !0), re--),
                                    re || m.next(u(b.slice()));
                                },
                                () => {
                                  --G || m.complete();
                                }
                              )
                            );
                          },
                          m
                        );
                    },
                    m
                  );
                };
              })(m, d, E ? (G) => (0, Y.n)(E, G) : U.y)
            );
            return u ? b.pipe((0, J.Z)(u)) : b;
          })(h.map((d) => d.pipe((0, tt.q)(1), (0, gt.O)(jr)))).pipe(
            (0, fn.R)((d, u) => {
              let m = !1;
              return u.reduce(
                (E, b, G) =>
                  E !== jr
                    ? E
                    : (b === jr && (m = !0),
                      m || (!1 !== b && G !== u.length - 1 && !Ar(b)) ? E : b),
                d
              );
            }, jr),
            (0, ie.h)((d) => d !== jr),
            (0, wt.U)((d) => (Ar(d) ? d : !0 === d)),
            (0, tt.q)(1)
          )
        );
      }
      class fr {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new ti()),
            (this.attachRef = null);
        }
      }
      class ti {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(d, u) {
          const m = this.getOrCreateContext(d);
          (m.outlet = u), this.contexts.set(d, m);
        }
        onChildOutletDestroyed(d) {
          const u = this.getContext(d);
          u && ((u.outlet = null), (u.attachRef = null));
        }
        onOutletDeactivated() {
          const d = this.contexts;
          return (this.contexts = new Map()), d;
        }
        onOutletReAttached(d) {
          this.contexts = d;
        }
        getOrCreateContext(d) {
          let u = this.getContext(d);
          return u || ((u = new fr()), this.contexts.set(d, u)), u;
        }
        getContext(d) {
          return this.contexts.get(d) || null;
        }
      }
      let zr = (() => {
        class h {
          constructor(u, m, E, b, G) {
            (this.parentContexts = u),
              (this.location = m),
              (this.resolver = E),
              (this.changeDetector = G),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.attachEvents = new o.vpe()),
              (this.detachEvents = new o.vpe()),
              (this.name = b || at),
              u.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const u = this.parentContexts.getContext(this.name);
              u &&
                u.route &&
                (u.attachRef
                  ? this.attach(u.attachRef, u.route)
                  : this.activateWith(u.route, u.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const u = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(u.instance),
              u
            );
          }
          attach(u, m) {
            (this.activated = u),
              (this._activatedRoute = m),
              this.location.insert(u.hostView),
              this.attachEvents.emit(u.instance);
          }
          deactivate() {
            if (this.activated) {
              const u = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(u);
            }
          }
          activateWith(u, m) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = u;
            const G = (m = m || this.resolver).resolveComponentFactory(
                u._futureSnapshot.routeConfig.component
              ),
              re = this.parentContexts.getOrCreateContext(this.name).children,
              Fe = new oi(u, re, this.location.injector);
            (this.activated = this.location.createComponent(
              G,
              this.location.length,
              Fe
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (h.ɵfac = function (u) {
            return new (u || h)(
              o.Y36(ti),
              o.Y36(o.s_b),
              o.Y36(o._Vd),
              o.$8M("name"),
              o.Y36(o.sBO)
            );
          }),
          (h.ɵdir = o.lG2({
            type: h,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
          })),
          h
        );
      })();
      class oi {
        constructor(d, u, m) {
          (this.route = d), (this.childContexts = u), (this.parent = m);
        }
        get(d, u) {
          return d === en
            ? this.route
            : d === ti
            ? this.childContexts
            : this.parent.get(d, u);
        }
      }
      let Ui = (() => {
        class h {}
        return (
          (h.ɵfac = function (u) {
            return new (u || h)();
          }),
          (h.ɵcmp = o.Xpm({
            type: h,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (u, m) {
              1 & u && o._UZ(0, "router-outlet");
            },
            directives: [zr],
            encapsulation: 2,
          })),
          h
        );
      })();
      function Ai(h, d = "") {
        for (let u = 0; u < h.length; u++) {
          const m = h[u];
          hs(m, Fn(d, m));
        }
      }
      function hs(h, d) {
        h.children && Ai(h.children, d);
      }
      function Fn(h, d) {
        return d
          ? h || d.path
            ? h && !d.path
              ? `${h}/`
              : !h && d.path
              ? d.path
              : `${h}/${d.path}`
            : ""
          : h;
      }
      function _(h) {
        const d = h.children && h.children.map(_),
          u = d
            ? Object.assign(Object.assign({}, h), { children: d })
            : Object.assign({}, h);
        return (
          !u.component &&
            (d || u.loadChildren) &&
            u.outlet &&
            u.outlet !== at &&
            (u.component = Ui),
          u
        );
      }
      function S(h) {
        return h.outlet || at;
      }
      function y(h, d) {
        const u = h.filter((m) => S(m) === d);
        return u.push(...h.filter((m) => S(m) !== d)), u;
      }
      const O = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function ne(h, d, u) {
        var m;
        if ("" === d.path)
          return "full" === d.pathMatch && (h.hasChildren() || u.length > 0)
            ? Object.assign({}, O)
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: u,
                parameters: {},
                positionalParamSegments: {},
              };
        const b = (d.matcher || De)(u, h, d);
        if (!b) return Object.assign({}, O);
        const G = {};
        nt(b.posParams, (Fe, dt) => {
          G[dt] = Fe.path;
        });
        const re =
          b.consumed.length > 0
            ? Object.assign(
                Object.assign({}, G),
                b.consumed[b.consumed.length - 1].parameters
              )
            : G;
        return {
          matched: !0,
          consumedSegments: b.consumed,
          remainingSegments: u.slice(b.consumed.length),
          parameters: re,
          positionalParamSegments:
            null !== (m = b.posParams) && void 0 !== m ? m : {},
        };
      }
      function Ie(h, d, u, m, E = "corrected") {
        if (
          u.length > 0 &&
          (function mn(h, d, u) {
            return u.some((m) => Gt(h, d, m) && S(m) !== at);
          })(h, u, m)
        ) {
          const G = new R(
            d,
            (function yt(h, d, u, m) {
              const E = {};
              (E[at] = m),
                (m._sourceSegment = h),
                (m._segmentIndexShift = d.length);
              for (const b of u)
                if ("" === b.path && S(b) !== at) {
                  const G = new R([], {});
                  (G._sourceSegment = h),
                    (G._segmentIndexShift = d.length),
                    (E[S(b)] = G);
                }
              return E;
            })(h, d, m, new R(u, h.children))
          );
          return (
            (G._sourceSegment = h),
            (G._segmentIndexShift = d.length),
            { segmentGroup: G, slicedSegments: [] }
          );
        }
        if (
          0 === u.length &&
          (function un(h, d, u) {
            return u.some((m) => Gt(h, d, m));
          })(h, u, m)
        ) {
          const G = new R(
            h.segments,
            (function Ue(h, d, u, m, E, b) {
              const G = {};
              for (const re of m)
                if (Gt(h, u, re) && !E[S(re)]) {
                  const Fe = new R([], {});
                  (Fe._sourceSegment = h),
                    (Fe._segmentIndexShift =
                      "legacy" === b ? h.segments.length : d.length),
                    (G[S(re)] = Fe);
                }
              return Object.assign(Object.assign({}, E), G);
            })(h, d, u, m, h.children, E)
          );
          return (
            (G._sourceSegment = h),
            (G._segmentIndexShift = d.length),
            { segmentGroup: G, slicedSegments: u }
          );
        }
        const b = new R(h.segments, h.children);
        return (
          (b._sourceSegment = h),
          (b._segmentIndexShift = d.length),
          { segmentGroup: b, slicedSegments: u }
        );
      }
      function Gt(h, d, u) {
        return (
          (!(h.hasChildren() || d.length > 0) || "full" !== u.pathMatch) &&
          "" === u.path
        );
      }
      function Jt(h, d, u, m) {
        return (
          !!(S(h) === m || (m !== at && Gt(d, u, h))) &&
          ("**" === h.path || ne(d, h, u).matched)
        );
      }
      function Gn(h, d, u) {
        return 0 === d.length && !h.children[u];
      }
      class cn {
        constructor(d) {
          this.segmentGroup = d || null;
        }
      }
      class Tn {
        constructor(d) {
          this.urlTree = d;
        }
      }
      function br(h) {
        return (0, oe._)(new cn(h));
      }
      function Er(h) {
        return (0, oe._)(new Tn(h));
      }
      class wi {
        constructor(d, u, m, E, b) {
          (this.configLoader = u),
            (this.urlSerializer = m),
            (this.urlTree = E),
            (this.config = b),
            (this.allowRedirects = !0),
            (this.ngModule = d.get(o.h0i));
        }
        apply() {
          const d = Ie(this.urlTree.root, [], [], this.config).segmentGroup,
            u = new R(d.segments, d.children);
          return this.expandSegmentGroup(this.ngModule, this.config, u, at)
            .pipe(
              (0, wt.U)((b) =>
                this.createUrlTree(
                  ns(b),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              (0, Wt.K)((b) => {
                if (b instanceof Tn)
                  return (this.allowRedirects = !1), this.match(b.urlTree);
                throw b instanceof cn ? this.noMatchError(b) : b;
              })
            );
        }
        match(d) {
          return this.expandSegmentGroup(this.ngModule, this.config, d.root, at)
            .pipe(
              (0, wt.U)((E) =>
                this.createUrlTree(ns(E), d.queryParams, d.fragment)
              )
            )
            .pipe(
              (0, Wt.K)((E) => {
                throw E instanceof cn ? this.noMatchError(E) : E;
              })
            );
        }
        noMatchError(d) {
          return new Error(
            `Cannot match any routes. URL Segment: '${d.segmentGroup}'`
          );
        }
        createUrlTree(d, u, m) {
          const E = d.segments.length > 0 ? new R([], { [at]: d }) : d;
          return new Q(E, u, m);
        }
        expandSegmentGroup(d, u, m, E) {
          return 0 === m.segments.length && m.hasChildren()
            ? this.expandChildren(d, u, m).pipe((0, wt.U)((b) => new R([], b)))
            : this.expandSegment(d, m, u, m.segments, E, !0);
        }
        expandChildren(d, u, m) {
          const E = [];
          for (const b of Object.keys(m.children))
            "primary" === b ? E.unshift(b) : E.push(b);
          return (0, B.D)(E).pipe(
            (0, Yt.b)((b) => {
              const G = m.children[b],
                re = y(u, b);
              return this.expandSegmentGroup(d, re, G, b).pipe(
                (0, wt.U)((Fe) => ({ segment: Fe, outlet: b }))
              );
            }),
            (0, fn.R)((b, G) => ((b[G.outlet] = G.segment), b), {}),
            (function ue(h, d) {
              const u = arguments.length >= 2;
              return (m) =>
                m.pipe(
                  h ? (0, ie.h)((E, b) => h(E, b, m)) : U.y,
                  ye(1),
                  u ? xe(d) : ge(() => new Ae())
                );
            })()
          );
        }
        expandSegment(d, u, m, E, b, G) {
          return (0, B.D)(m).pipe(
            (0, Yt.b)((re) =>
              this.expandSegmentAgainstRoute(d, u, m, re, E, b, G).pipe(
                (0, Wt.K)((dt) => {
                  if (dt instanceof cn) return (0, Ge.of)(null);
                  throw dt;
                })
              )
            ),
            ft((re) => !!re),
            (0, Wt.K)((re, Fe) => {
              if (re instanceof Ae || "EmptyError" === re.name)
                return Gn(u, E, b) ? (0, Ge.of)(new R([], {})) : br(u);
              throw re;
            })
          );
        }
        expandSegmentAgainstRoute(d, u, m, E, b, G, re) {
          return Jt(E, u, b, G)
            ? void 0 === E.redirectTo
              ? this.matchSegmentAgainstRoute(d, u, E, b, G)
              : re && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(d, u, m, E, b, G)
              : br(u)
            : br(u);
        }
        expandSegmentAgainstRouteUsingRedirect(d, u, m, E, b, G) {
          return "**" === E.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(d, m, E, G)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                d,
                u,
                m,
                E,
                b,
                G
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(d, u, m, E) {
          const b = this.applyRedirectCommands([], m.redirectTo, {});
          return m.redirectTo.startsWith("/")
            ? Er(b)
            : this.lineralizeSegments(m, b).pipe(
                (0, st.z)((G) => {
                  const re = new R(G, {});
                  return this.expandSegment(d, re, u, G, E, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(d, u, m, E, b, G) {
          const {
            matched: re,
            consumedSegments: Fe,
            remainingSegments: dt,
            positionalParamSegments: Xt,
          } = ne(u, E, b);
          if (!re) return br(u);
          const Mt = this.applyRedirectCommands(Fe, E.redirectTo, Xt);
          return E.redirectTo.startsWith("/")
            ? Er(Mt)
            : this.lineralizeSegments(E, Mt).pipe(
                (0, st.z)((yn) =>
                  this.expandSegment(d, u, m, yn.concat(dt), G, !1)
                )
              );
        }
        matchSegmentAgainstRoute(d, u, m, E, b) {
          if ("**" === m.path)
            return m.loadChildren
              ? (m._loadedConfig
                  ? (0, Ge.of)(m._loadedConfig)
                  : this.configLoader.load(d.injector, m)
                ).pipe(
                  (0, wt.U)((Mt) => ((m._loadedConfig = Mt), new R(E, {})))
                )
              : (0, Ge.of)(new R(E, {}));
          const {
            matched: G,
            consumedSegments: re,
            remainingSegments: Fe,
          } = ne(u, m, E);
          return G
            ? this.getChildConfig(d, m, E).pipe(
                (0, st.z)((Xt) => {
                  const Mt = Xt.module,
                    yn = Xt.routes,
                    { segmentGroup: sn, slicedSegments: Qr } = Ie(
                      u,
                      re,
                      Fe,
                      yn
                    ),
                    ci = new R(sn.segments, sn.children);
                  if (0 === Qr.length && ci.hasChildren())
                    return this.expandChildren(Mt, yn, ci).pipe(
                      (0, wt.U)((ss) => new R(re, ss))
                    );
                  if (0 === yn.length && 0 === Qr.length)
                    return (0, Ge.of)(new R(re, {}));
                  const Ds = S(m) === b;
                  return this.expandSegment(
                    Mt,
                    ci,
                    yn,
                    Qr,
                    Ds ? at : b,
                    !0
                  ).pipe(
                    (0, wt.U)(
                      (ri) => new R(re.concat(ri.segments), ri.children)
                    )
                  );
                })
              )
            : br(u);
        }
        getChildConfig(d, u, m) {
          return u.children
            ? (0, Ge.of)(new Bi(u.children, d))
            : u.loadChildren
            ? void 0 !== u._loadedConfig
              ? (0, Ge.of)(u._loadedConfig)
              : this.runCanLoadGuards(d.injector, u, m).pipe(
                  (0, st.z)((E) =>
                    E
                      ? this.configLoader
                          .load(d.injector, u)
                          .pipe((0, wt.U)((b) => ((u._loadedConfig = b), b)))
                      : (function ni(h) {
                          return (0, oe._)(
                            Wn(
                              `Cannot load children because the guard of the route "path: '${h.path}'" returned false`
                            )
                          );
                        })(u)
                  )
                )
            : (0, Ge.of)(new Bi([], d));
        }
        runCanLoadGuards(d, u, m) {
          const E = u.canLoad;
          if (!E || 0 === E.length) return (0, Ge.of)(!0);
          const b = E.map((G) => {
            const re = d.get(G);
            let Fe;
            if (
              (function ds(h) {
                return h && Br(h.canLoad);
              })(re)
            )
              Fe = re.canLoad(u, m);
            else {
              if (!Br(re)) throw new Error("Invalid CanLoad guard");
              Fe = re(u, m);
            }
            return ee(Fe);
          });
          return (0, Ge.of)(b).pipe(
            xi(),
            (0, kt.b)((G) => {
              if (!Ar(G)) return;
              const re = Wn(
                `Redirecting to "${this.urlSerializer.serialize(G)}"`
              );
              throw ((re.url = G), re);
            }),
            (0, wt.U)((G) => !0 === G)
          );
        }
        lineralizeSegments(d, u) {
          let m = [],
            E = u.root;
          for (;;) {
            if (((m = m.concat(E.segments)), 0 === E.numberOfChildren))
              return (0, Ge.of)(m);
            if (E.numberOfChildren > 1 || !E.children[at])
              return (0, oe._)(
                new Error(
                  `Only absolute redirects can have named outlets. redirectTo: '${d.redirectTo}'`
                )
              );
            E = E.children[at];
          }
        }
        applyRedirectCommands(d, u, m) {
          return this.applyRedirectCreatreUrlTree(
            u,
            this.urlSerializer.parse(u),
            d,
            m
          );
        }
        applyRedirectCreatreUrlTree(d, u, m, E) {
          const b = this.createSegmentGroup(d, u.root, m, E);
          return new Q(
            b,
            this.createQueryParams(u.queryParams, this.urlTree.queryParams),
            u.fragment
          );
        }
        createQueryParams(d, u) {
          const m = {};
          return (
            nt(d, (E, b) => {
              if ("string" == typeof E && E.startsWith(":")) {
                const re = E.substring(1);
                m[b] = u[re];
              } else m[b] = E;
            }),
            m
          );
        }
        createSegmentGroup(d, u, m, E) {
          const b = this.createSegments(d, u.segments, m, E);
          let G = {};
          return (
            nt(u.children, (re, Fe) => {
              G[Fe] = this.createSegmentGroup(d, re, m, E);
            }),
            new R(b, G)
          );
        }
        createSegments(d, u, m, E) {
          return u.map((b) =>
            b.path.startsWith(":")
              ? this.findPosParam(d, b, E)
              : this.findOrReturn(b, m)
          );
        }
        findPosParam(d, u, m) {
          const E = m[u.path.substring(1)];
          if (!E)
            throw new Error(
              `Cannot redirect to '${d}'. Cannot find '${u.path}'.`
            );
          return E;
        }
        findOrReturn(d, u) {
          let m = 0;
          for (const E of u) {
            if (E.path === d.path) return u.splice(m), E;
            m++;
          }
          return d;
        }
      }
      function ns(h) {
        const d = {};
        for (const m of Object.keys(h.children)) {
          const b = ns(h.children[m]);
          (b.segments.length > 0 || b.hasChildren()) && (d[m] = b);
        }
        return (function ts(h) {
          if (1 === h.numberOfChildren && h.children[at]) {
            const d = h.children[at];
            return new R(h.segments.concat(d.segments), d.children);
          }
          return h;
        })(new R(h.segments, d));
      }
      class gs {
        constructor(d) {
          (this.path = d), (this.route = this.path[this.path.length - 1]);
        }
      }
      class $e {
        constructor(d, u) {
          (this.component = d), (this.route = u);
        }
      }
      function tn(h, d, u) {
        const m = h._root;
        return Wr(m, d ? d._root : null, u, [m.value]);
      }
      function kn(h, d, u) {
        const m = (function Ts(h) {
          if (!h) return null;
          for (let d = h.parent; d; d = d.parent) {
            const u = d.routeConfig;
            if (u && u._loadedConfig) return u._loadedConfig;
          }
          return null;
        })(d);
        return (m ? m.module.injector : u).get(h);
      }
      function Wr(
        h,
        d,
        u,
        m,
        E = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const b = Ye(d);
        return (
          h.children.forEach((G) => {
            (function Ur(
              h,
              d,
              u,
              m,
              E = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const b = h.value,
                G = d ? d.value : null,
                re = u ? u.getContext(h.value.outlet) : null;
              if (G && b.routeConfig === G.routeConfig) {
                const Fe = (function ps(h, d, u) {
                  if ("function" == typeof u) return u(h, d);
                  switch (u) {
                    case "pathParamsChange":
                      return !rt(h.url, d.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !rt(h.url, d.url) || !M(h.queryParams, d.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Ni(h, d) || !M(h.queryParams, d.queryParams);
                    default:
                      return !Ni(h, d);
                  }
                })(G, b, b.routeConfig.runGuardsAndResolvers);
                Fe
                  ? E.canActivateChecks.push(new gs(m))
                  : ((b.data = G.data), (b._resolvedData = G._resolvedData)),
                  Wr(h, d, b.component ? (re ? re.children : null) : u, m, E),
                  Fe &&
                    re &&
                    re.outlet &&
                    re.outlet.isActivated &&
                    E.canDeactivateChecks.push(new $e(re.outlet.component, G));
              } else
                G && ai(d, re, E),
                  E.canActivateChecks.push(new gs(m)),
                  Wr(
                    h,
                    null,
                    b.component ? (re ? re.children : null) : u,
                    m,
                    E
                  );
            })(G, b[G.value.outlet], u, m.concat([G.value]), E),
              delete b[G.value.outlet];
          }),
          nt(b, (G, re) => ai(G, u.getContext(re), E)),
          E
        );
      }
      function ai(h, d, u) {
        const m = Ye(h),
          E = h.value;
        nt(m, (b, G) => {
          ai(b, E.component ? (d ? d.children.getContext(G) : null) : d, u);
        }),
          u.canDeactivateChecks.push(
            new $e(
              E.component && d && d.outlet && d.outlet.isActivated
                ? d.outlet.component
                : null,
              E
            )
          );
      }
      class l {}
      function c(h) {
        return new C.y((d) => d.error(h));
      }
      class A {
        constructor(d, u, m, E, b, G) {
          (this.rootComponentType = d),
            (this.config = u),
            (this.urlTree = m),
            (this.url = E),
            (this.paramsInheritanceStrategy = b),
            (this.relativeLinkResolution = G);
        }
        recognize() {
          const d = Ie(
              this.urlTree.root,
              [],
              [],
              this.config.filter((G) => void 0 === G.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            u = this.processSegmentGroup(this.config, d, at);
          if (null === u) return null;
          const m = new bn(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              at,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            E = new we(m, u),
            b = new xr(this.url, E);
          return this.inheritParamsAndData(b._root), b;
        }
        inheritParamsAndData(d) {
          const u = d.value,
            m = Zt(u, this.paramsInheritanceStrategy);
          (u.params = Object.freeze(m.params)),
            (u.data = Object.freeze(m.data)),
            d.children.forEach((E) => this.inheritParamsAndData(E));
        }
        processSegmentGroup(d, u, m) {
          return 0 === u.segments.length && u.hasChildren()
            ? this.processChildren(d, u)
            : this.processSegment(d, u, u.segments, m);
        }
        processChildren(d, u) {
          const m = [];
          for (const b of Object.keys(u.children)) {
            const G = u.children[b],
              re = y(d, b),
              Fe = this.processSegmentGroup(re, G, b);
            if (null === Fe) return null;
            m.push(...Fe);
          }
          const E = Ee(m);
          return (
            (function P(h) {
              h.sort((d, u) =>
                d.value.outlet === at
                  ? -1
                  : u.value.outlet === at
                  ? 1
                  : d.value.outlet.localeCompare(u.value.outlet)
              );
            })(E),
            E
          );
        }
        processSegment(d, u, m, E) {
          for (const b of d) {
            const G = this.processSegmentAgainstRoute(b, u, m, E);
            if (null !== G) return G;
          }
          return Gn(u, m, E) ? [] : null;
        }
        processSegmentAgainstRoute(d, u, m, E) {
          if (d.redirectTo || !Jt(d, u, m, E)) return null;
          let b,
            G = [],
            re = [];
          if ("**" === d.path) {
            const sn = m.length > 0 ? pe(m).parameters : {};
            b = new bn(
              m,
              sn,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Rt(d),
              S(d),
              d.component,
              d,
              ut(u),
              At(u) + m.length,
              Kt(d)
            );
          } else {
            const sn = ne(u, d, m);
            if (!sn.matched) return null;
            (G = sn.consumedSegments),
              (re = sn.remainingSegments),
              (b = new bn(
                G,
                sn.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Rt(d),
                S(d),
                d.component,
                d,
                ut(u),
                At(u) + G.length,
                Kt(d)
              ));
          }
          const Fe = (function q(h) {
              return h.children
                ? h.children
                : h.loadChildren
                ? h._loadedConfig.routes
                : [];
            })(d),
            { segmentGroup: dt, slicedSegments: Xt } = Ie(
              u,
              G,
              re,
              Fe.filter((sn) => void 0 === sn.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === Xt.length && dt.hasChildren()) {
            const sn = this.processChildren(Fe, dt);
            return null === sn ? null : [new we(b, sn)];
          }
          if (0 === Fe.length && 0 === Xt.length) return [new we(b, [])];
          const Mt = S(d) === E,
            yn = this.processSegment(Fe, dt, Xt, Mt ? at : E);
          return null === yn ? null : [new we(b, yn)];
        }
      }
      function X(h) {
        const d = h.value.routeConfig;
        return d && "" === d.path && void 0 === d.redirectTo;
      }
      function Ee(h) {
        const d = [],
          u = new Set();
        for (const m of h) {
          if (!X(m)) {
            d.push(m);
            continue;
          }
          const E = d.find((b) => m.value.routeConfig === b.value.routeConfig);
          void 0 !== E ? (E.children.push(...m.children), u.add(E)) : d.push(m);
        }
        for (const m of u) {
          const E = Ee(m.children);
          d.push(new we(m.value, E));
        }
        return d.filter((m) => !u.has(m));
      }
      function ut(h) {
        let d = h;
        for (; d._sourceSegment; ) d = d._sourceSegment;
        return d;
      }
      function At(h) {
        let d = h,
          u = d._segmentIndexShift ? d._segmentIndexShift : 0;
        for (; d._sourceSegment; )
          (d = d._sourceSegment),
            (u += d._segmentIndexShift ? d._segmentIndexShift : 0);
        return u - 1;
      }
      function Rt(h) {
        return h.data || {};
      }
      function Kt(h) {
        return h.resolve || {};
      }
      function qn(h) {
        return [...Object.keys(h), ...Object.getOwnPropertySymbols(h)];
      }
      function rn(h) {
        return (0, ot.w)((d) => {
          const u = h(d);
          return u ? (0, B.D)(u).pipe((0, wt.U)(() => d)) : (0, Ge.of)(d);
        });
      }
      class lr extends class dn {
        shouldDetach(d) {
          return !1;
        }
        store(d, u) {}
        shouldAttach(d) {
          return !1;
        }
        retrieve(d) {
          return null;
        }
        shouldReuseRoute(d, u) {
          return d.routeConfig === u.routeConfig;
        }
      } {}
      const Rr = new o.OlP("ROUTES");
      class Gr {
        constructor(d, u, m, E) {
          (this.injector = d),
            (this.compiler = u),
            (this.onLoadStartListener = m),
            (this.onLoadEndListener = E);
        }
        load(d, u) {
          if (u._loader$) return u._loader$;
          this.onLoadStartListener && this.onLoadStartListener(u);
          const E = this.loadModuleFactory(u.loadChildren).pipe(
            (0, wt.U)((b) => {
              this.onLoadEndListener && this.onLoadEndListener(u);
              const G = b.create(d);
              return new Bi(
                se(G.injector.get(Rr, void 0, o.XFs.Self | o.XFs.Optional)).map(
                  _
                ),
                G
              );
            }),
            (0, Wt.K)((b) => {
              throw ((u._loader$ = void 0), b);
            })
          );
          return (
            (u._loader$ = new Ze(E, () => new Me.x()).pipe(He())), u._loader$
          );
        }
        loadModuleFactory(d) {
          return ee(d()).pipe(
            (0, st.z)((u) =>
              u instanceof o.YKP
                ? (0, Ge.of)(u)
                : (0, B.D)(this.compiler.compileModuleAsync(u))
            )
          );
        }
      }
      class Os {
        shouldProcessUrl(d) {
          return !0;
        }
        extract(d) {
          return d;
        }
        merge(d, u) {
          return d;
        }
      }
      function Hi(h) {
        throw h;
      }
      function Vr(h, d, u) {
        return d.parse("/");
      }
      function Si(h, d) {
        return (0, Ge.of)(null);
      }
      const $i = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Dt = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let pt = (() => {
        class h {
          constructor(u, m, E, b, G, re, Fe) {
            (this.rootComponentType = u),
              (this.urlSerializer = m),
              (this.rootContexts = E),
              (this.location = b),
              (this.config = Fe),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new Me.x()),
              (this.errorHandler = Hi),
              (this.malformedUriErrorHandler = Vr),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: Si,
                afterPreactivation: Si,
              }),
              (this.urlHandlingStrategy = new Os()),
              (this.routeReuseStrategy = new lr()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.ngModule = G.get(o.h0i)),
              (this.console = G.get(o.c2e));
            const Mt = G.get(o.R0b);
            (this.isNgZoneEnabled =
              Mt instanceof o.R0b && o.R0b.isInAngularZone()),
              this.resetConfig(Fe),
              (this.currentUrlTree = (function Ke() {
                return new Q(new R([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new Gr(
                G,
                re,
                (yn) => this.triggerEvent(new wn(yn)),
                (yn) => this.triggerEvent(new In(yn))
              )),
              (this.routerState = Et(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new Se.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            var u;
            return null === (u = this.location.getState()) || void 0 === u
              ? void 0
              : u.ɵrouterPageId;
          }
          setupNavigations(u) {
            const m = this.events;
            return u.pipe(
              (0, ie.h)((E) => 0 !== E.id),
              (0, wt.U)((E) =>
                Object.assign(Object.assign({}, E), {
                  extractedUrl: this.urlHandlingStrategy.extract(E.rawUrl),
                })
              ),
              (0, ot.w)((E) => {
                let b = !1,
                  G = !1;
                return (0, Ge.of)(E).pipe(
                  (0, kt.b)((re) => {
                    this.currentNavigation = {
                      id: re.id,
                      initialUrl: re.currentRawUrl,
                      extractedUrl: re.extractedUrl,
                      trigger: re.source,
                      extras: re.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(
                            Object.assign({}, this.lastSuccessfulNavigation),
                            { previousNavigation: null }
                          )
                        : null,
                    };
                  }),
                  (0, ot.w)((re) => {
                    const Fe = this.browserUrlTree.toString(),
                      dt =
                        !this.navigated ||
                        re.extractedUrl.toString() !== Fe ||
                        Fe !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || dt) &&
                      this.urlHandlingStrategy.shouldProcessUrl(re.rawUrl)
                    )
                      return (
                        Ht(re.source) &&
                          (this.browserUrlTree = re.extractedUrl),
                        (0, Ge.of)(re).pipe(
                          (0, ot.w)((Mt) => {
                            const yn = this.transitions.getValue();
                            return (
                              m.next(
                                new Nn(
                                  Mt.id,
                                  this.serializeUrl(Mt.extractedUrl),
                                  Mt.source,
                                  Mt.restoredState
                                )
                              ),
                              yn !== this.transitions.getValue()
                                ? et.E
                                : Promise.resolve(Mt)
                            );
                          }),
                          (function lo(h, d, u, m) {
                            return (0, ot.w)((E) =>
                              (function es(h, d, u, m, E) {
                                return new wi(h, d, u, m, E).apply();
                              })(h, d, u, E.extractedUrl, m).pipe(
                                (0, wt.U)((b) =>
                                  Object.assign(Object.assign({}, E), {
                                    urlAfterRedirects: b,
                                  })
                                )
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          (0, kt.b)((Mt) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: Mt.urlAfterRedirects }
                            );
                          }),
                          (function bt(h, d, u, m, E) {
                            return (0, st.z)((b) =>
                              (function p(
                                h,
                                d,
                                u,
                                m,
                                E = "emptyOnly",
                                b = "legacy"
                              ) {
                                try {
                                  const G = new A(h, d, u, m, E, b).recognize();
                                  return null === G
                                    ? c(new l())
                                    : (0, Ge.of)(G);
                                } catch (G) {
                                  return c(G);
                                }
                              })(
                                h,
                                d,
                                b.urlAfterRedirects,
                                u(b.urlAfterRedirects),
                                m,
                                E
                              ).pipe(
                                (0, wt.U)((G) =>
                                  Object.assign(Object.assign({}, b), {
                                    targetSnapshot: G,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (Mt) => this.serializeUrl(Mt),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, kt.b)((Mt) => {
                            if ("eager" === this.urlUpdateStrategy) {
                              if (!Mt.extras.skipLocationChange) {
                                const sn = this.urlHandlingStrategy.merge(
                                  Mt.urlAfterRedirects,
                                  Mt.rawUrl
                                );
                                this.setBrowserUrl(sn, Mt);
                              }
                              this.browserUrlTree = Mt.urlAfterRedirects;
                            }
                            const yn = new zn(
                              Mt.id,
                              this.serializeUrl(Mt.extractedUrl),
                              this.serializeUrl(Mt.urlAfterRedirects),
                              Mt.targetSnapshot
                            );
                            m.next(yn);
                          })
                        )
                      );
                    if (
                      dt &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: yn,
                          extractedUrl: sn,
                          source: Qr,
                          restoredState: ci,
                          extras: Ds,
                        } = re,
                        zi = new Nn(yn, this.serializeUrl(sn), Qr, ci);
                      m.next(zi);
                      const ri = Et(sn, this.rootComponentType).snapshot;
                      return (0, Ge.of)(
                        Object.assign(Object.assign({}, re), {
                          targetSnapshot: ri,
                          urlAfterRedirects: sn,
                          extras: Object.assign(Object.assign({}, Ds), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })
                      );
                    }
                    return (
                      (this.rawUrlTree = re.rawUrl), re.resolve(null), et.E
                    );
                  }),
                  rn((re) => {
                    const {
                      targetSnapshot: Fe,
                      id: dt,
                      extractedUrl: Xt,
                      rawUrl: Mt,
                      extras: { skipLocationChange: yn, replaceUrl: sn },
                    } = re;
                    return this.hooks.beforePreactivation(Fe, {
                      navigationId: dt,
                      appliedUrlTree: Xt,
                      rawUrlTree: Mt,
                      skipLocationChange: !!yn,
                      replaceUrl: !!sn,
                    });
                  }),
                  (0, kt.b)((re) => {
                    const Fe = new Zn(
                      re.id,
                      this.serializeUrl(re.extractedUrl),
                      this.serializeUrl(re.urlAfterRedirects),
                      re.targetSnapshot
                    );
                    this.triggerEvent(Fe);
                  }),
                  (0, wt.U)((re) =>
                    Object.assign(Object.assign({}, re), {
                      guards: tn(
                        re.targetSnapshot,
                        re.currentSnapshot,
                        this.rootContexts
                      ),
                    })
                  ),
                  (function Yo(h, d) {
                    return (0, st.z)((u) => {
                      const {
                        targetSnapshot: m,
                        currentSnapshot: E,
                        guards: {
                          canActivateChecks: b,
                          canDeactivateChecks: G,
                        },
                      } = u;
                      return 0 === G.length && 0 === b.length
                        ? (0, Ge.of)(
                            Object.assign(Object.assign({}, u), {
                              guardsResult: !0,
                            })
                          )
                        : (function ms(h, d, u, m) {
                            return (0, B.D)(h).pipe(
                              (0, st.z)((E) =>
                                (function x(h, d, u, m, E) {
                                  const b =
                                    d && d.routeConfig
                                      ? d.routeConfig.canDeactivate
                                      : null;
                                  if (!b || 0 === b.length)
                                    return (0, Ge.of)(!0);
                                  const G = b.map((re) => {
                                    const Fe = kn(re, d, E);
                                    let dt;
                                    if (
                                      (function _r(h) {
                                        return h && Br(h.canDeactivate);
                                      })(Fe)
                                    )
                                      dt = ee(Fe.canDeactivate(h, d, u, m));
                                    else {
                                      if (!Br(Fe))
                                        throw new Error(
                                          "Invalid CanDeactivate guard"
                                        );
                                      dt = ee(Fe(h, d, u, m));
                                    }
                                    return dt.pipe(ft());
                                  });
                                  return (0, Ge.of)(G).pipe(xi());
                                })(E.component, E.route, u, d, m)
                              ),
                              ft((E) => !0 !== E, !0)
                            );
                          })(G, m, E, h).pipe(
                            (0, st.z)((re) =>
                              re &&
                              (function Ji(h) {
                                return "boolean" == typeof h;
                              })(re)
                                ? (function Gi(h, d, u, m) {
                                    return (0, B.D)(d).pipe(
                                      (0, Yt.b)((E) =>
                                        (0, je.z)(
                                          (function hr(h, d) {
                                            return (
                                              null !== h && d && d(new Hn(h)),
                                              (0, Ge.of)(!0)
                                            );
                                          })(E.route.parent, m),
                                          (function Vi(h, d) {
                                            return (
                                              null !== h && d && d(new _n(h)),
                                              (0, Ge.of)(!0)
                                            );
                                          })(E.route, m),
                                          (function uo(h, d, u) {
                                            const m = d[d.length - 1],
                                              b = d
                                                .slice(0, d.length - 1)
                                                .reverse()
                                                .map((G) =>
                                                  (function bs(h) {
                                                    const d = h.routeConfig
                                                      ? h.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return d && 0 !== d.length
                                                      ? { node: h, guards: d }
                                                      : null;
                                                  })(G)
                                                )
                                                .filter((G) => null !== G)
                                                .map((G) =>
                                                  (0, Ve.P)(() => {
                                                    const re = G.guards.map(
                                                      (Fe) => {
                                                        const dt = kn(
                                                          Fe,
                                                          G.node,
                                                          u
                                                        );
                                                        let Xt;
                                                        if (
                                                          (function fs(h) {
                                                            return (
                                                              h &&
                                                              Br(
                                                                h.canActivateChild
                                                              )
                                                            );
                                                          })(dt)
                                                        )
                                                          Xt = ee(
                                                            dt.canActivateChild(
                                                              m,
                                                              h
                                                            )
                                                          );
                                                        else {
                                                          if (!Br(dt))
                                                            throw new Error(
                                                              "Invalid CanActivateChild guard"
                                                            );
                                                          Xt = ee(dt(m, h));
                                                        }
                                                        return Xt.pipe(ft());
                                                      }
                                                    );
                                                    return (0, Ge.of)(re).pipe(
                                                      xi()
                                                    );
                                                  })
                                                );
                                            return (0, Ge.of)(b).pipe(xi());
                                          })(h, E.path, u),
                                          (function Kr(h, d, u) {
                                            const m = d.routeConfig
                                              ? d.routeConfig.canActivate
                                              : null;
                                            if (!m || 0 === m.length)
                                              return (0, Ge.of)(!0);
                                            const E = m.map((b) =>
                                              (0, Ve.P)(() => {
                                                const G = kn(b, d, u);
                                                let re;
                                                if (
                                                  (function ji(h) {
                                                    return (
                                                      h && Br(h.canActivate)
                                                    );
                                                  })(G)
                                                )
                                                  re = ee(G.canActivate(d, h));
                                                else {
                                                  if (!Br(G))
                                                    throw new Error(
                                                      "Invalid CanActivate guard"
                                                    );
                                                  re = ee(G(d, h));
                                                }
                                                return re.pipe(ft());
                                              })
                                            );
                                            return (0, Ge.of)(E).pipe(xi());
                                          })(h, E.route, u)
                                        )
                                      ),
                                      ft((E) => !0 !== E, !0)
                                    );
                                  })(m, b, h, d)
                                : (0, Ge.of)(re)
                            ),
                            (0, wt.U)((re) =>
                              Object.assign(Object.assign({}, u), {
                                guardsResult: re,
                              })
                            )
                          );
                    });
                  })(this.ngModule.injector, (re) => this.triggerEvent(re)),
                  (0, kt.b)((re) => {
                    if (Ar(re.guardsResult)) {
                      const dt = Wn(
                        `Redirecting to "${this.serializeUrl(re.guardsResult)}"`
                      );
                      throw ((dt.url = re.guardsResult), dt);
                    }
                    const Fe = new St(
                      re.id,
                      this.serializeUrl(re.extractedUrl),
                      this.serializeUrl(re.urlAfterRedirects),
                      re.targetSnapshot,
                      !!re.guardsResult
                    );
                    this.triggerEvent(Fe);
                  }),
                  (0, ie.h)(
                    (re) =>
                      !!re.guardsResult ||
                      (this.restoreHistory(re),
                      this.cancelNavigationTransition(re, ""),
                      !1)
                  ),
                  rn((re) => {
                    if (re.guards.canActivateChecks.length)
                      return (0, Ge.of)(re).pipe(
                        (0, kt.b)((Fe) => {
                          const dt = new Xn(
                            Fe.id,
                            this.serializeUrl(Fe.extractedUrl),
                            this.serializeUrl(Fe.urlAfterRedirects),
                            Fe.targetSnapshot
                          );
                          this.triggerEvent(dt);
                        }),
                        (0, ot.w)((Fe) => {
                          let dt = !1;
                          return (0, Ge.of)(Fe).pipe(
                            (function Vt(h, d) {
                              return (0, st.z)((u) => {
                                const {
                                  targetSnapshot: m,
                                  guards: { canActivateChecks: E },
                                } = u;
                                if (!E.length) return (0, Ge.of)(u);
                                let b = 0;
                                return (0, B.D)(E).pipe(
                                  (0, Yt.b)((G) =>
                                    (function gn(h, d, u, m) {
                                      return (function Vn(h, d, u, m) {
                                        const E = qn(h);
                                        if (0 === E.length)
                                          return (0, Ge.of)({});
                                        const b = {};
                                        return (0, B.D)(E).pipe(
                                          (0, st.z)((G) =>
                                            (function gr(h, d, u, m) {
                                              const E = kn(h, d, m);
                                              return ee(
                                                E.resolve
                                                  ? E.resolve(d, u)
                                                  : E(d, u)
                                              );
                                            })(h[G], d, u, m).pipe(
                                              (0, kt.b)((re) => {
                                                b[G] = re;
                                              })
                                            )
                                          ),
                                          ye(1),
                                          (0, st.z)(() =>
                                            qn(b).length === E.length
                                              ? (0, Ge.of)(b)
                                              : et.E
                                          )
                                        );
                                      })(h._resolve, h, d, m).pipe(
                                        (0, wt.U)(
                                          (b) => (
                                            (h._resolvedData = b),
                                            (h.data = Object.assign(
                                              Object.assign({}, h.data),
                                              Zt(h, u).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(G.route, m, h, d)
                                  ),
                                  (0, kt.b)(() => b++),
                                  ye(1),
                                  (0, st.z)((G) =>
                                    b === E.length ? (0, Ge.of)(u) : et.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            (0, kt.b)({
                              next: () => (dt = !0),
                              complete: () => {
                                dt ||
                                  (this.restoreHistory(Fe),
                                  this.cancelNavigationTransition(
                                    Fe,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        (0, kt.b)((Fe) => {
                          const dt = new Cn(
                            Fe.id,
                            this.serializeUrl(Fe.extractedUrl),
                            this.serializeUrl(Fe.urlAfterRedirects),
                            Fe.targetSnapshot
                          );
                          this.triggerEvent(dt);
                        })
                      );
                  }),
                  rn((re) => {
                    const {
                      targetSnapshot: Fe,
                      id: dt,
                      extractedUrl: Xt,
                      rawUrl: Mt,
                      extras: { skipLocationChange: yn, replaceUrl: sn },
                    } = re;
                    return this.hooks.afterPreactivation(Fe, {
                      navigationId: dt,
                      appliedUrlTree: Xt,
                      rawUrlTree: Mt,
                      skipLocationChange: !!yn,
                      replaceUrl: !!sn,
                    });
                  }),
                  (0, wt.U)((re) => {
                    const Fe = (function ki(h, d, u) {
                      const m = Kn(h, d._root, u ? u._root : void 0);
                      return new Qe(m, d);
                    })(
                      this.routeReuseStrategy,
                      re.targetSnapshot,
                      re.currentRouterState
                    );
                    return Object.assign(Object.assign({}, re), {
                      targetRouterState: Fe,
                    });
                  }),
                  (0, kt.b)((re) => {
                    (this.currentUrlTree = re.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        re.urlAfterRedirects,
                        re.rawUrl
                      )),
                      (this.routerState = re.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (re.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, re),
                        (this.browserUrlTree = re.urlAfterRedirects));
                  }),
                  ((h, d, u) =>
                    (0, wt.U)(
                      (m) => (
                        new ei(
                          d,
                          m.targetRouterState,
                          m.currentRouterState,
                          u
                        ).activate(h),
                        m
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (re) =>
                    this.triggerEvent(re)
                  ),
                  (0, kt.b)({
                    next() {
                      b = !0;
                    },
                    complete() {
                      b = !0;
                    },
                  }),
                  (0, Ln.x)(() => {
                    var re;
                    b ||
                      G ||
                      this.cancelNavigationTransition(
                        E,
                        `Navigation ID ${E.id} is not equal to the current navigation id ${this.navigationId}`
                      ),
                      (null === (re = this.currentNavigation) || void 0 === re
                        ? void 0
                        : re.id) === E.id && (this.currentNavigation = null);
                  }),
                  (0, Wt.K)((re) => {
                    if (
                      ((G = !0),
                      (function jt(h) {
                        return h && h[$n];
                      })(re))
                    ) {
                      const Fe = Ar(re.url);
                      Fe || ((this.navigated = !0), this.restoreHistory(E, !0));
                      const dt = new qt(
                        E.id,
                        this.serializeUrl(E.extractedUrl),
                        re.message
                      );
                      m.next(dt),
                        Fe
                          ? setTimeout(() => {
                              const Xt = this.urlHandlingStrategy.merge(
                                  re.url,
                                  this.rawUrlTree
                                ),
                                Mt = {
                                  skipLocationChange:
                                    E.extras.skipLocationChange,
                                  replaceUrl:
                                    "eager" === this.urlUpdateStrategy ||
                                    Ht(E.source),
                                };
                              this.scheduleNavigation(
                                Xt,
                                "imperative",
                                null,
                                Mt,
                                {
                                  resolve: E.resolve,
                                  reject: E.reject,
                                  promise: E.promise,
                                }
                              );
                            }, 0)
                          : E.resolve(!1);
                    } else {
                      this.restoreHistory(E, !0);
                      const Fe = new Bn(
                        E.id,
                        this.serializeUrl(E.extractedUrl),
                        re
                      );
                      m.next(Fe);
                      try {
                        E.resolve(this.errorHandler(re));
                      } catch (dt) {
                        E.reject(dt);
                      }
                    }
                    return et.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(u) {
            (this.rootComponentType = u),
              (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(u) {
            this.transitions.next(
              Object.assign(Object.assign({}, this.transitions.value), u)
            );
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((u) => {
                const m = "popstate" === u.type ? "popstate" : "hashchange";
                "popstate" === m &&
                  setTimeout(() => {
                    var E;
                    const b = { replaceUrl: !0 },
                      G = (
                        null === (E = u.state) || void 0 === E
                          ? void 0
                          : E.navigationId
                      )
                        ? u.state
                        : null;
                    if (G) {
                      const Fe = Object.assign({}, G);
                      delete Fe.navigationId,
                        delete Fe.ɵrouterPageId,
                        0 !== Object.keys(Fe).length && (b.state = Fe);
                    }
                    const re = this.parseUrl(u.url);
                    this.scheduleNavigation(re, m, G, b);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(u) {
            this.events.next(u);
          }
          resetConfig(u) {
            Ai(u),
              (this.config = u.map(_)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(u, m = {}) {
            const {
                relativeTo: E,
                queryParams: b,
                fragment: G,
                queryParamsHandling: re,
                preserveFragment: Fe,
              } = m,
              dt = E || this.routerState.root,
              Xt = Fe ? this.currentUrlTree.fragment : G;
            let Mt = null;
            switch (re) {
              case "merge":
                Mt = Object.assign(
                  Object.assign({}, this.currentUrlTree.queryParams),
                  b
                );
                break;
              case "preserve":
                Mt = this.currentUrlTree.queryParams;
                break;
              default:
                Mt = b || null;
            }
            return (
              null !== Mt && (Mt = this.removeEmptyProps(Mt)),
              (function ce(h, d, u, m, E) {
                if (0 === u.length) return vt(d.root, d.root, d.root, m, E);
                const b = (function ar(h) {
                  if ("string" == typeof h[0] && 1 === h.length && "/" === h[0])
                    return new er(!0, 0, h);
                  let d = 0,
                    u = !1;
                  const m = h.reduce((E, b, G) => {
                    if ("object" == typeof b && null != b) {
                      if (b.outlets) {
                        const re = {};
                        return (
                          nt(b.outlets, (Fe, dt) => {
                            re[dt] = "string" == typeof Fe ? Fe.split("/") : Fe;
                          }),
                          [...E, { outlets: re }]
                        );
                      }
                      if (b.segmentPath) return [...E, b.segmentPath];
                    }
                    return "string" != typeof b
                      ? [...E, b]
                      : 0 === G
                      ? (b.split("/").forEach((re, Fe) => {
                          (0 == Fe && "." === re) ||
                            (0 == Fe && "" === re
                              ? (u = !0)
                              : ".." === re
                              ? d++
                              : "" != re && E.push(re));
                        }),
                        E)
                      : [...E, b];
                  }, []);
                  return new er(u, d, m);
                })(u);
                if (b.toRoot()) return vt(d.root, d.root, new R([], {}), m, E);
                const G = (function qi(h, d, u) {
                    if (h.isAbsolute) return new Hr(d.root, !0, 0);
                    if (-1 === u.snapshot._lastPathIndex) {
                      const b = u.snapshot._urlSegment;
                      return new Hr(b, b === d.root, 0);
                    }
                    const m = H(h.commands[0]) ? 0 : 1;
                    return (function Zi(h, d, u) {
                      let m = h,
                        E = d,
                        b = u;
                      for (; b > E; ) {
                        if (((b -= E), (m = m.parent), !m))
                          throw new Error("Invalid number of '../'");
                        E = m.segments.length;
                      }
                      return new Hr(m, !1, E - b);
                    })(
                      u.snapshot._urlSegment,
                      u.snapshot._lastPathIndex + m,
                      h.numberOfDoubleDots
                    );
                  })(b, d, h),
                  re = G.processChildren
                    ? $r(G.segmentGroup, G.index, b.commands)
                    : Ei(G.segmentGroup, G.index, b.commands);
                return vt(d.root, G.segmentGroup, re, m, E);
              })(dt, this.currentUrlTree, u, Mt, null != Xt ? Xt : null)
            );
          }
          navigateByUrl(u, m = { skipLocationChange: !1 }) {
            const E = Ar(u) ? u : this.parseUrl(u),
              b = this.urlHandlingStrategy.merge(E, this.rawUrlTree);
            return this.scheduleNavigation(b, "imperative", null, m);
          }
          navigate(u, m = { skipLocationChange: !1 }) {
            return (
              (function Ft(h) {
                for (let d = 0; d < h.length; d++) {
                  const u = h[d];
                  if (null == u)
                    throw new Error(
                      `The requested path contains ${u} segment at index ${d}`
                    );
                }
              })(u),
              this.navigateByUrl(this.createUrlTree(u, m), m)
            );
          }
          serializeUrl(u) {
            return this.urlSerializer.serialize(u);
          }
          parseUrl(u) {
            let m;
            try {
              m = this.urlSerializer.parse(u);
            } catch (E) {
              m = this.malformedUriErrorHandler(E, this.urlSerializer, u);
            }
            return m;
          }
          isActive(u, m) {
            let E;
            if (
              ((E =
                !0 === m
                  ? Object.assign({}, $i)
                  : !1 === m
                  ? Object.assign({}, Dt)
                  : m),
              Ar(u))
            )
              return K(this.currentUrlTree, u, E);
            const b = this.parseUrl(u);
            return K(this.currentUrlTree, b, E);
          }
          removeEmptyProps(u) {
            return Object.keys(u).reduce((m, E) => {
              const b = u[E];
              return null != b && (m[E] = b), m;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (u) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = u.id),
                  (this.currentPageId = u.targetPageId),
                  this.events.next(
                    new vn(
                      u.id,
                      this.serializeUrl(u.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  u.resolve(!0);
              },
              (u) => {
                this.console.warn(`Unhandled Navigation Error: ${u}`);
              }
            );
          }
          scheduleNavigation(u, m, E, b, G) {
            var re, Fe;
            if (this.disposed) return Promise.resolve(!1);
            let dt, Xt, Mt;
            G
              ? ((dt = G.resolve), (Xt = G.reject), (Mt = G.promise))
              : (Mt = new Promise((Qr, ci) => {
                  (dt = Qr), (Xt = ci);
                }));
            const yn = ++this.navigationId;
            let sn;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (E = this.location.getState()),
                  (sn =
                    E && E.ɵrouterPageId
                      ? E.ɵrouterPageId
                      : b.replaceUrl || b.skipLocationChange
                      ? null !== (re = this.browserPageId) && void 0 !== re
                        ? re
                        : 0
                      : (null !== (Fe = this.browserPageId) && void 0 !== Fe
                          ? Fe
                          : 0) + 1))
                : (sn = 0),
              this.setTransition({
                id: yn,
                targetPageId: sn,
                source: m,
                restoredState: E,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: u,
                extras: b,
                resolve: dt,
                reject: Xt,
                promise: Mt,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Mt.catch((Qr) => Promise.reject(Qr))
            );
          }
          setBrowserUrl(u, m) {
            const E = this.urlSerializer.serialize(u),
              b = Object.assign(
                Object.assign({}, m.extras.state),
                this.generateNgRouterState(m.id, m.targetPageId)
              );
            this.location.isCurrentPathEqualTo(E) || m.extras.replaceUrl
              ? this.location.replaceState(E, "", b)
              : this.location.go(E, "", b);
          }
          restoreHistory(u, m = !1) {
            var E, b;
            if ("computed" === this.canceledNavigationResolution) {
              const G = this.currentPageId - u.targetPageId;
              ("popstate" !== u.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  (null === (E = this.currentNavigation) || void 0 === E
                    ? void 0
                    : E.finalUrl)) ||
              0 === G
                ? this.currentUrlTree ===
                    (null === (b = this.currentNavigation) || void 0 === b
                      ? void 0
                      : b.finalUrl) &&
                  0 === G &&
                  (this.resetState(u),
                  (this.browserUrlTree = u.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(G);
            } else
              "replace" === this.canceledNavigationResolution &&
                (m && this.resetState(u), this.resetUrlToCurrentUrlTree());
          }
          resetState(u) {
            (this.routerState = u.currentRouterState),
              (this.currentUrlTree = u.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                u.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(u, m) {
            const E = new qt(u.id, this.serializeUrl(u.extractedUrl), m);
            this.triggerEvent(E), u.resolve(!1);
          }
          generateNgRouterState(u, m) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: u, ɵrouterPageId: m }
              : { navigationId: u };
          }
        }
        return (
          (h.ɵfac = function (u) {
            o.$Z();
          }),
          (h.ɵprov = o.Yz7({ token: h, factory: h.ɵfac })),
          h
        );
      })();
      function Ht(h) {
        return "imperative" !== h;
      }
      let Sr = (() => {
        class h {
          constructor(u, m, E) {
            (this.router = u),
              (this.route = m),
              (this.locationStrategy = E),
              (this.commands = null),
              (this.href = null),
              (this.onChanges = new Me.x()),
              (this.subscription = u.events.subscribe((b) => {
                b instanceof vn && this.updateTargetUrlAndHref();
              }));
          }
          set routerLink(u) {
            this.commands = null != u ? (Array.isArray(u) ? u : [u]) : null;
          }
          ngOnChanges(u) {
            this.updateTargetUrlAndHref(), this.onChanges.next(this);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          onClick(u, m, E, b, G) {
            if (
              0 !== u ||
              m ||
              E ||
              b ||
              G ||
              ("string" == typeof this.target && "_self" != this.target) ||
              null === this.urlTree
            )
              return !0;
            const re = {
              skipLocationChange: tr(this.skipLocationChange),
              replaceUrl: tr(this.replaceUrl),
              state: this.state,
            };
            return this.router.navigateByUrl(this.urlTree, re), !1;
          }
          updateTargetUrlAndHref() {
            this.href =
              null !== this.urlTree
                ? this.locationStrategy.prepareExternalUrl(
                    this.router.serializeUrl(this.urlTree)
                  )
                : null;
          }
          get urlTree() {
            return null === this.commands
              ? null
              : this.router.createUrlTree(this.commands, {
                  relativeTo:
                    void 0 !== this.relativeTo ? this.relativeTo : this.route,
                  queryParams: this.queryParams,
                  fragment: this.fragment,
                  queryParamsHandling: this.queryParamsHandling,
                  preserveFragment: tr(this.preserveFragment),
                });
          }
        }
        return (
          (h.ɵfac = function (u) {
            return new (u || h)(o.Y36(pt), o.Y36(en), o.Y36(hn.S$));
          }),
          (h.ɵdir = o.lG2({
            type: h,
            selectors: [
              ["a", "routerLink", ""],
              ["area", "routerLink", ""],
            ],
            hostVars: 2,
            hostBindings: function (u, m) {
              1 & u &&
                o.NdJ("click", function (b) {
                  return m.onClick(
                    b.button,
                    b.ctrlKey,
                    b.shiftKey,
                    b.altKey,
                    b.metaKey
                  );
                }),
                2 & u && o.uIk("target", m.target)("href", m.href, o.LSH);
            },
            inputs: {
              target: "target",
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              state: "state",
              relativeTo: "relativeTo",
              routerLink: "routerLink",
            },
            features: [o.TTD],
          })),
          h
        );
      })();
      function tr(h) {
        return "" === h || !!h;
      }
      class ys {}
      class pr {
        preload(d, u) {
          return (0, Ge.of)(null);
        }
      }
      let li = (() => {
          class h {
            constructor(u, m, E, b) {
              (this.router = u),
                (this.injector = E),
                (this.preloadingStrategy = b),
                (this.loader = new Gr(
                  E,
                  m,
                  (Fe) => u.triggerEvent(new wn(Fe)),
                  (Fe) => u.triggerEvent(new In(Fe))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, ie.h)((u) => u instanceof vn),
                  (0, Yt.b)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const u = this.injector.get(o.h0i);
              return this.processRoutes(u, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(u, m) {
              const E = [];
              for (const b of m)
                if (b.loadChildren && !b.canLoad && b._loadedConfig) {
                  const G = b._loadedConfig;
                  E.push(this.processRoutes(G.module, G.routes));
                } else
                  b.loadChildren && !b.canLoad
                    ? E.push(this.preloadConfig(u, b))
                    : b.children && E.push(this.processRoutes(u, b.children));
              return (0, B.D)(E).pipe(
                (0, Qt.J)(),
                (0, wt.U)((b) => {})
              );
            }
            preloadConfig(u, m) {
              return this.preloadingStrategy.preload(m, () =>
                (m._loadedConfig
                  ? (0, Ge.of)(m._loadedConfig)
                  : this.loader.load(u.injector, m)
                ).pipe(
                  (0, st.z)(
                    (b) => (
                      (m._loadedConfig = b),
                      this.processRoutes(b.module, b.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (h.ɵfac = function (u) {
              return new (u || h)(
                o.LFG(pt),
                o.LFG(o.Sil),
                o.LFG(o.zs3),
                o.LFG(ys)
              );
            }),
            (h.ɵprov = o.Yz7({ token: h, factory: h.ɵfac })),
            h
          );
        })(),
        Mr = (() => {
          class h {
            constructor(u, m, E = {}) {
              (this.router = u),
                (this.viewportScroller = m),
                (this.options = E),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (E.scrollPositionRestoration =
                  E.scrollPositionRestoration || "disabled"),
                (E.anchorScrolling = E.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((u) => {
                u instanceof Nn
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = u.navigationTrigger),
                    (this.restoredId = u.restoredState
                      ? u.restoredState.navigationId
                      : 0))
                  : u instanceof vn &&
                    ((this.lastId = u.id),
                    this.scheduleScrollEvent(
                      u,
                      this.router.parseUrl(u.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((u) => {
                u instanceof Sn &&
                  (u.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(u.position)
                    : u.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(u.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(u, m) {
              this.router.triggerEvent(
                new Sn(
                  u,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  m
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (h.ɵfac = function (u) {
              o.$Z();
            }),
            (h.ɵprov = o.Yz7({ token: h, factory: h.ɵfac })),
            h
          );
        })();
      const Fr = new o.OlP("ROUTER_CONFIGURATION"),
        vs = new o.OlP("ROUTER_FORROOT_GUARD"),
        Qo = [
          hn.Ye,
          { provide: ht, useClass: $t },
          {
            provide: pt,
            useFactory: function sc(h, d, u, m, E, b, G = {}, re, Fe) {
              const dt = new pt(null, h, d, u, m, E, se(b));
              return (
                re && (dt.urlHandlingStrategy = re),
                Fe && (dt.routeReuseStrategy = Fe),
                (function Zo(h, d) {
                  h.errorHandler && (d.errorHandler = h.errorHandler),
                    h.malformedUriErrorHandler &&
                      (d.malformedUriErrorHandler = h.malformedUriErrorHandler),
                    h.onSameUrlNavigation &&
                      (d.onSameUrlNavigation = h.onSameUrlNavigation),
                    h.paramsInheritanceStrategy &&
                      (d.paramsInheritanceStrategy =
                        h.paramsInheritanceStrategy),
                    h.relativeLinkResolution &&
                      (d.relativeLinkResolution = h.relativeLinkResolution),
                    h.urlUpdateStrategy &&
                      (d.urlUpdateStrategy = h.urlUpdateStrategy),
                    h.canceledNavigationResolution &&
                      (d.canceledNavigationResolution =
                        h.canceledNavigationResolution);
                })(G, dt),
                G.enableTracing &&
                  dt.events.subscribe((Xt) => {
                    var Mt, yn;
                    null === (Mt = console.group) ||
                      void 0 === Mt ||
                      Mt.call(console, `Router Event: ${Xt.constructor.name}`),
                      console.log(Xt.toString()),
                      console.log(Xt),
                      null === (yn = console.groupEnd) ||
                        void 0 === yn ||
                        yn.call(console);
                  }),
                dt
              );
            },
            deps: [
              ht,
              ti,
              hn.Ye,
              o.zs3,
              o.Sil,
              Rr,
              Fr,
              [class Yr {}, new o.FiY()],
              [class wr {}, new o.FiY()],
            ],
          },
          ti,
          {
            provide: en,
            useFactory: function Xo(h) {
              return h.routerState.root;
            },
            deps: [pt],
          },
          li,
          pr,
          class co {
            preload(d, u) {
              return u().pipe((0, Wt.K)(() => (0, Ge.of)(null)));
            }
          },
          { provide: Fr, useValue: { enableTracing: !1 } },
        ];
      function qo() {
        return new o.PXZ("Router", pt);
      }
      let rs = (() => {
        class h {
          constructor(u, m) {}
          static forRoot(u, m) {
            return {
              ngModule: h,
              providers: [
                Qo,
                _s(u),
                {
                  provide: vs,
                  useFactory: fo,
                  deps: [[pt, new o.FiY(), new o.tp0()]],
                },
                { provide: Fr, useValue: m || {} },
                {
                  provide: hn.S$,
                  useFactory: is,
                  deps: [hn.lw, [new o.tBr(hn.mr), new o.FiY()], Fr],
                },
                { provide: Mr, useFactory: Ga, deps: [pt, hn.EM, Fr] },
                {
                  provide: ys,
                  useExisting:
                    m && m.preloadingStrategy ? m.preloadingStrategy : pr,
                },
                { provide: o.PXZ, multi: !0, useFactory: qo },
                [
                  ho,
                  { provide: o.ip1, multi: !0, useFactory: Va, deps: [ho] },
                  { provide: Is, useFactory: Es, deps: [ho] },
                  { provide: o.tb, multi: !0, useExisting: Is },
                ],
              ],
            };
          }
          static forChild(u) {
            return { ngModule: h, providers: [_s(u)] };
          }
        }
        return (
          (h.ɵfac = function (u) {
            return new (u || h)(o.LFG(vs, 8), o.LFG(pt, 8));
          }),
          (h.ɵmod = o.oAB({ type: h })),
          (h.ɵinj = o.cJS({})),
          h
        );
      })();
      function Ga(h, d, u) {
        return u.scrollOffset && d.setOffset(u.scrollOffset), new Mr(h, d, u);
      }
      function is(h, d, u = {}) {
        return u.useHash ? new hn.Do(h, d) : new hn.b0(h, d);
      }
      function fo(h) {
        return "guarded";
      }
      function _s(h) {
        return [
          { provide: o.deG, multi: !0, useValue: h },
          { provide: Rr, multi: !0, useValue: h },
        ];
      }
      let ho = (() => {
        class h {
          constructor(u) {
            (this.injector = u),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new Me.x());
          }
          appInitializer() {
            return this.injector.get(hn.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let m = null;
              const E = new Promise((re) => (m = re)),
                b = this.injector.get(pt),
                G = this.injector.get(Fr);
              return (
                "disabled" === G.initialNavigation
                  ? (b.setUpLocationChangeListener(), m(!0))
                  : "enabled" === G.initialNavigation ||
                    "enabledBlocking" === G.initialNavigation
                  ? ((b.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, Ge.of)(null)
                        : ((this.initNavigation = !0),
                          m(!0),
                          this.resultOfPreactivationDone)),
                    b.initialNavigation())
                  : m(!0),
                E
              );
            });
          }
          bootstrapListener(u) {
            const m = this.injector.get(Fr),
              E = this.injector.get(li),
              b = this.injector.get(Mr),
              G = this.injector.get(pt),
              re = this.injector.get(o.z2F);
            u === re.components[0] &&
              (("enabledNonBlocking" === m.initialNavigation ||
                void 0 === m.initialNavigation) &&
                G.initialNavigation(),
              E.setUpPreloading(),
              b.init(),
              G.resetRootComponentType(re.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (h.ɵfac = function (u) {
            return new (u || h)(o.LFG(o.zs3));
          }),
          (h.ɵprov = o.Yz7({ token: h, factory: h.ɵfac })),
          h
        );
      })();
      function Va(h) {
        return h.appInitializer.bind(h);
      }
      function Es(h) {
        return h.bootstrapListener.bind(h);
      }
      const Is = new o.OlP("Router Initializer");
    },
    4394: (le, j, v) => {
      v.d(j, {
        eX: () => An,
        sQ: () => pe,
        IC: () => ve,
        GW: () => ue,
        l4: () => Nn,
      });
      var o = v(5620),
        C = v(6451),
        F = v(9751),
        B = v(7579),
        U = v(9635),
        J = v(9646),
        W = v(4482),
        Y = v(5403),
        L = v(5032),
        Z = v(515),
        $ = v(2843),
        Oe = v(576);
      class Ae {
        constructor(K, de, Ne) {
          (this.kind = K),
            (this.value = de),
            (this.error = Ne),
            (this.hasValue = "N" === K);
        }
        observe(K) {
          return Je(this, K);
        }
        do(K, de, Ne) {
          const { kind: ze, value: ct, error: Ut } = this;
          return "N" === ze
            ? null == K
              ? void 0
              : K(ct)
            : "E" === ze
            ? null == de
              ? void 0
              : de(Ut)
            : null == Ne
            ? void 0
            : Ne();
        }
        accept(K, de, Ne) {
          var ze;
          return (0, Oe.m)(
            null === (ze = K) || void 0 === ze ? void 0 : ze.next
          )
            ? this.observe(K)
            : this.do(K, de, Ne);
        }
        toObservable() {
          const { kind: K, value: de, error: Ne } = this,
            ze =
              "N" === K
                ? (0, J.of)(de)
                : "E" === K
                ? (0, $._)(() => Ne)
                : "C" === K
                ? Z.E
                : 0;
          if (!ze) throw new TypeError(`Unexpected notification kind ${K}`);
          return ze;
        }
        static createNext(K) {
          return new Ae("N", K);
        }
        static createError(K) {
          return new Ae("E", void 0, K);
        }
        static createComplete() {
          return Ae.completeNotification;
        }
      }
      function Je(k, K) {
        var de, Ne, ze;
        const { kind: ct, value: Ut, error: fe } = k;
        if ("string" != typeof ct)
          throw new TypeError('Invalid notification, missing "kind"');
        "N" === ct
          ? null === (de = K.next) || void 0 === de || de.call(K, Ut)
          : "E" === ct
          ? null === (Ne = K.error) || void 0 === Ne || Ne.call(K, fe)
          : null === (ze = K.complete) || void 0 === ze || ze.call(K);
      }
      Ae.completeNotification = new Ae("C");
      var He = v(8421);
      function Ze(k, K, de, Ne) {
        return (0, W.e)((ze, ct) => {
          let Ut;
          K && "function" != typeof K
            ? ({ duration: de, element: Ut, connector: Ne } = K)
            : (Ut = K);
          const fe = new Map(),
            Q = (ht) => {
              fe.forEach(ht), ht(ct);
            },
            R = (ht) => Q(($t) => $t.error(ht));
          let ae = 0,
            Le = !1;
          const rt = new Y.Q(
            ct,
            (ht) => {
              try {
                const $t = k(ht);
                let Mn = fe.get($t);
                if (!Mn) {
                  fe.set($t, (Mn = Ne ? Ne() : new B.x()));
                  const an = (function _t(ht, $t) {
                    const Mn = new F.y((an) => {
                      ae++;
                      const pn = $t.subscribe(an);
                      return () => {
                        pn.unsubscribe(), 0 == --ae && Le && rt.unsubscribe();
                      };
                    });
                    return (Mn.key = ht), Mn;
                  })($t, Mn);
                  if ((ct.next(an), de)) {
                    const pn = (0, Y.x)(
                      Mn,
                      () => {
                        Mn.complete(), null == pn || pn.unsubscribe();
                      },
                      void 0,
                      void 0,
                      () => fe.delete($t)
                    );
                    rt.add((0, He.Xf)(de(an)).subscribe(pn));
                  }
                }
                Mn.next(Ut ? Ut(ht) : ht);
              } catch ($t) {
                R($t);
              }
            },
            () => Q((ht) => ht.complete()),
            R,
            () => fe.clear(),
            () => ((Le = !0), 0 === ae)
          );
          ze.subscribe(rt);
        });
      }
      var Ge = v(4004);
      function Se(k, K) {
        return K
          ? (de) =>
              de.pipe(
                Se((Ne, ze) =>
                  (0, He.Xf)(k(Ne, ze)).pipe(
                    (0, Ge.U)((ct, Ut) => K(Ne, ct, ze, Ut))
                  )
                )
              )
          : (0, W.e)((de, Ne) => {
              let ze = 0,
                ct = null,
                Ut = !1;
              de.subscribe(
                (0, Y.x)(
                  Ne,
                  (fe) => {
                    ct ||
                      ((ct = (0, Y.x)(Ne, void 0, () => {
                        (ct = null), Ut && Ne.complete();
                      })),
                      (0, He.Xf)(k(fe, ze++)).subscribe(ct));
                  },
                  () => {
                    (Ut = !0), !ct && Ne.complete();
                  }
                )
              );
            });
      }
      var je = v(262),
        Ve = v(9300),
        et = v(5577),
        Me = v(5698),
        ie = v(4351),
        ye = v(1365),
        ge = v(5e3);
      const he = { dispatch: !0, useEffectsErrorHandler: !0 },
        xe = "__@ngrx/effects_create__";
      function ue(k, K) {
        const de = k(),
          Ne = Object.assign(Object.assign({}, he), K);
        return Object.defineProperty(de, xe, { value: Ne }), de;
      }
      function tt(k) {
        return Object.getOwnPropertyNames(k)
          .filter(
            (Ne) =>
              !(!k[Ne] || !k[Ne].hasOwnProperty(xe)) &&
              k[Ne][xe].hasOwnProperty("dispatch")
          )
          .map((Ne) => Object.assign({ propertyName: Ne }, k[Ne][xe]));
      }
      function ft(k) {
        return Object.getPrototypeOf(k);
      }
      const wt = "__@ngrx/effects__";
      function gt(k) {
        return (0, o.qC)(Yt, ft)(k);
      }
      function Yt(k) {
        return (function fn(k) {
          return k.constructor.hasOwnProperty(wt);
        })(k)
          ? k.constructor[wt]
          : [];
      }
      function Ln(k, K, de) {
        const Ne = ft(k).constructor.name,
          ze = (function kt(k) {
            return [gt, tt].reduce((de, Ne) => de.concat(Ne(k)), []);
          })(k).map(
            ({
              propertyName: ct,
              dispatch: Ut,
              useEffectsErrorHandler: fe,
            }) => {
              const Q = "function" == typeof k[ct] ? k[ct]() : k[ct],
                R = fe ? de(Q, K) : Q;
              return !1 === Ut
                ? R.pipe(
                    (function V() {
                      return (0, W.e)((k, K) => {
                        k.subscribe((0, Y.x)(K, L.Z));
                      });
                    })()
                  )
                : R.pipe(
                    (function Pe() {
                      return (0, W.e)((k, K) => {
                        k.subscribe(
                          (0, Y.x)(
                            K,
                            (de) => {
                              K.next(Ae.createNext(de));
                            },
                            () => {
                              K.next(Ae.createComplete()), K.complete();
                            },
                            (de) => {
                              K.next(Ae.createError(de)), K.complete();
                            }
                          )
                        );
                      });
                    })()
                  ).pipe(
                    (0, Ge.U)((Le) => ({
                      effect: k[ct],
                      notification: Le,
                      propertyName: ct,
                      sourceName: Ne,
                      sourceInstance: k,
                    }))
                  );
            }
          );
        return (0, C.T)(...ze);
      }
      function hn(k, K, de = 10) {
        return k.pipe(
          (0, je.K)(
            (Ne) => (K && K.handleError(Ne), de <= 1 ? k : hn(k, K, de - 1))
          )
        );
      }
      let An = (() => {
        class k extends F.y {
          constructor(de) {
            super(), de && (this.source = de);
          }
          lift(de) {
            const Ne = new k();
            return (Ne.source = this), (Ne.operator = de), Ne;
          }
        }
        return (
          (k.ɵfac = function (de) {
            return new (de || k)(ge.LFG(o.Y$));
          }),
          (k.ɵprov = ge.Yz7({ token: k, factory: k.ɵfac })),
          k
        );
      })();
      function Nn(...k) {
        return (0, Ve.h)((K) =>
          k.some((de) =>
            "string" == typeof de ? de === K.type : de.type === K.type
          )
        );
      }
      function In(k) {
        return Hn(k, "ngrxOnInitEffects");
      }
      function Hn(k, K) {
        return k && K in k && "function" == typeof k[K];
      }
      const jn = new ge.OlP("@ngrx/effects Internal Root Guard"),
        _n = new ge.OlP("@ngrx/effects User Provided Effects"),
        Un = new ge.OlP("@ngrx/effects Internal Root Effects"),
        Sn = new ge.OlP("@ngrx/effects Root Effects"),
        at = new ge.OlP("@ngrx/effects Internal Feature Effects"),
        Ct = new ge.OlP("@ngrx/effects Feature Effects"),
        mt = new ge.OlP("@ngrx/effects Effects Error Handler");
      let $n = (() => {
        class k extends B.x {
          constructor(de, Ne) {
            super(), (this.errorHandler = de), (this.effectsErrorHandler = Ne);
          }
          addEffects(de) {
            this.next(de);
          }
          toActions() {
            return this.pipe(
              Ze(ft),
              (0, et.z)((de) => de.pipe(Ze(Wn))),
              (0, et.z)((de) => {
                const Ne = de.pipe(
                    Se((ct) =>
                      (function jt(k, K) {
                        return (de) => {
                          const Ne = Ln(de, k, K);
                          return (function Cn(k) {
                            return Hn(k, "ngrxOnRunEffects");
                          })(de)
                            ? de.ngrxOnRunEffects(Ne)
                            : Ne;
                        };
                      })(
                        this.errorHandler,
                        this.effectsErrorHandler
                      )(ct)
                    ),
                    (0, Ge.U)(
                      (ct) => (
                        (function vn(k, K) {
                          if ("N" === k.notification.kind) {
                            const de = k.notification.value;
                            !(function qt(k) {
                              return (
                                "function" != typeof k &&
                                k &&
                                k.type &&
                                "string" == typeof k.type
                              );
                            })(de) &&
                              K.handleError(
                                new Error(
                                  `Effect ${(function Bn({
                                    propertyName: k,
                                    sourceInstance: K,
                                    sourceName: de,
                                  }) {
                                    const Ne = "function" == typeof K[k];
                                    return `"${de}.${String(k)}${
                                      Ne ? "()" : ""
                                    }"`;
                                  })(
                                    k
                                  )} dispatched an invalid action: ${(function zn(
                                    k
                                  ) {
                                    try {
                                      return JSON.stringify(k);
                                    } catch (K) {
                                      return k;
                                    }
                                  })(de)}`
                                )
                              );
                          }
                        })(ct, this.errorHandler),
                        ct.notification
                      )
                    ),
                    (0, Ve.h)((ct) => "N" === ct.kind && null != ct.value),
                    (function oe() {
                      return (0, W.e)((k, K) => {
                        k.subscribe((0, Y.x)(K, (de) => Je(de, K)));
                      });
                    })()
                  ),
                  ze = de.pipe(
                    (0, Me.q)(1),
                    (0, Ve.h)(In),
                    (0, Ge.U)((ct) => ct.ngrxOnInitEffects())
                  );
                return (0, C.T)(Ne, ze);
              })
            );
          }
        }
        return (
          (k.ɵfac = function (de) {
            return new (de || k)(ge.LFG(ge.qLn), ge.LFG(mt));
          }),
          (k.ɵprov = ge.Yz7({ token: k, factory: k.ɵfac })),
          k
        );
      })();
      function Wn(k) {
        return (function St(k) {
          return Hn(k, "ngrxOnIdentifyEffects");
        })(k)
          ? k.ngrxOnIdentifyEffects()
          : "";
      }
      let De = (() => {
        class k {
          constructor(de, Ne) {
            (this.effectSources = de),
              (this.store = Ne),
              (this.effectsSubscription = null);
          }
          start() {
            this.effectsSubscription ||
              (this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store));
          }
          ngOnDestroy() {
            this.effectsSubscription &&
              (this.effectsSubscription.unsubscribe(),
              (this.effectsSubscription = null));
          }
        }
        return (
          (k.ɵfac = function (de) {
            return new (de || k)(ge.LFG($n), ge.LFG(o.yh));
          }),
          (k.ɵprov = ge.Yz7({ token: k, factory: k.ɵfac })),
          k
        );
      })();
      const be = "@ngrx/effects/init";
      (0, o.PH)(be);
      let I = (() => {
          class k {
            constructor(de, Ne, ze, ct, Ut, fe, Q) {
              (this.sources = de),
                Ne.start(),
                ct.forEach((R) => de.addEffects(R)),
                ze.dispatch({ type: be });
            }
            addEffects(de) {
              this.sources.addEffects(de);
            }
          }
          return (
            (k.ɵfac = function (de) {
              return new (de || k)(
                ge.LFG($n),
                ge.LFG(De),
                ge.LFG(o.yh),
                ge.LFG(Sn),
                ge.LFG(o.cr, 8),
                ge.LFG(o.CK, 8),
                ge.LFG(jn, 8)
              );
            }),
            (k.ɵmod = ge.oAB({ type: k })),
            (k.ɵinj = ge.cJS({})),
            k
          );
        })(),
        se = (() => {
          class k {
            constructor(de, Ne, ze, ct) {
              Ne.forEach((Ut) => Ut.forEach((fe) => de.addEffects(fe)));
            }
          }
          return (
            (k.ɵfac = function (de) {
              return new (de || k)(
                ge.LFG(I),
                ge.LFG(Ct),
                ge.LFG(o.cr, 8),
                ge.LFG(o.CK, 8)
              );
            }),
            (k.ɵmod = ge.oAB({ type: k })),
            (k.ɵinj = ge.cJS({})),
            k
          );
        })(),
        pe = (() => {
          class k {
            static forFeature(de = []) {
              return {
                ngModule: se,
                providers: [
                  de,
                  { provide: at, multi: !0, useValue: de },
                  { provide: _n, multi: !0, useValue: [] },
                  {
                    provide: Ct,
                    multi: !0,
                    useFactory: qe,
                    deps: [ge.zs3, at, _n],
                  },
                ],
              };
            }
            static forRoot(de = []) {
              return {
                ngModule: I,
                providers: [
                  { provide: mt, useValue: hn },
                  De,
                  $n,
                  An,
                  de,
                  { provide: Un, useValue: [de] },
                  {
                    provide: jn,
                    useFactory: ee,
                    deps: [
                      [De, new ge.FiY(), new ge.tp0()],
                      [Un, new ge.PiD()],
                    ],
                  },
                  { provide: _n, multi: !0, useValue: [] },
                  { provide: Sn, useFactory: qe, deps: [ge.zs3, Un, _n] },
                ],
              };
            }
          }
          return (
            (k.ɵfac = function (de) {
              return new (de || k)();
            }),
            (k.ɵmod = ge.oAB({ type: k })),
            (k.ɵinj = ge.cJS({})),
            k
          );
        })();
      function qe(k, K, de) {
        const Ne = [];
        for (const ze of K) Ne.push(...ze);
        for (const ze of de) Ne.push(...ze);
        return (function nt(k, K) {
          return K.map((de) => k.get(de));
        })(k, Ne);
      }
      function ee(k, K) {
        if ((1 !== K.length || 0 !== K[0].length) && k)
          throw new TypeError(
            "EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead."
          );
        return "guarded";
      }
      function ve(k) {
        return (0, U.z)(
          (0, ie.b)((K) => {
            const de = k(K),
              Ne = Array.isArray(de) ? de : [de];
            return (0, J.of)(K).pipe((0, ye.M)(...Ne));
          })
        );
      }
    },
    2182: (le, j, v) => {
      v.d(j, { Qi: () => et, mg: () => Ae });
      var o = v(5620),
        C = v(5e3),
        F = v(5215),
        B = v(1365);
      const U = "@ngrx/router-store/request",
        W = ((0, o.PH)(U, (0, o.Ky)()), "@ngrx/router-store/navigation"),
        L = ((0, o.PH)(W, (0, o.Ky)()), "@ngrx/router-store/cancel"),
        Z = ((0, o.PH)(L, (0, o.Ky)()), "@ngrx/router-store/error"),
        Oe = ((0, o.PH)(Z, (0, o.Ky)()), "@ngrx/router-store/navigated");
      function Ae(he, xe) {
        const ue = xe;
        switch (ue.type) {
          case W:
          case Z:
          case L:
            return {
              state: ue.payload.routerState,
              navigationId: ue.payload.event.id,
            };
          default:
            return he;
        }
      }
      (0, o.PH)(Oe, (0, o.Ky)());
      class Je {}
      class Pe {
        serialize(xe) {
          return { root: this.serializeRoute(xe.root), url: xe.url };
        }
        serializeRoute(xe) {
          const ue = xe.children.map((tt) => this.serializeRoute(tt));
          return {
            params: xe.params,
            paramMap: xe.paramMap,
            data: xe.data,
            url: xe.url,
            outlet: xe.outlet,
            routeConfig: xe.routeConfig
              ? {
                  component: xe.routeConfig.component,
                  path: xe.routeConfig.path,
                  pathMatch: xe.routeConfig.pathMatch,
                  redirectTo: xe.routeConfig.redirectTo,
                  outlet: xe.routeConfig.outlet,
                }
              : null,
            queryParams: xe.queryParams,
            queryParamMap: xe.queryParamMap,
            fragment: xe.fragment,
            component: xe.routeConfig ? xe.routeConfig.component : void 0,
            root: void 0,
            parent: void 0,
            firstChild: ue[0],
            pathFromRoot: void 0,
            children: ue,
          };
        }
      }
      class He {
        serialize(xe) {
          return { root: this.serializeRoute(xe.root), url: xe.url };
        }
        serializeRoute(xe) {
          const ue = xe.children.map((tt) => this.serializeRoute(tt));
          return {
            params: xe.params,
            data: xe.data,
            url: xe.url,
            outlet: xe.outlet,
            routeConfig: xe.routeConfig
              ? {
                  path: xe.routeConfig.path,
                  pathMatch: xe.routeConfig.pathMatch,
                  redirectTo: xe.routeConfig.redirectTo,
                  outlet: xe.routeConfig.outlet,
                }
              : null,
            queryParams: xe.queryParams,
            fragment: xe.fragment,
            firstChild: ue[0],
            children: ue,
          };
        }
      }
      var Ze = (() => {
        return (
          ((he = Ze || (Ze = {}))[(he.PreActivation = 1)] = "PreActivation"),
          (he[(he.PostActivation = 2)] = "PostActivation"),
          Ze
        );
        var he;
      })();
      const Ge = new C.OlP("@ngrx/router-store Internal Configuration"),
        Se = new C.OlP("@ngrx/router-store Configuration");
      function je(he) {
        return Object.assign(
          {
            stateKey: "router",
            serializer: He,
            navigationActionTiming: Ze.PreActivation,
          },
          he
        );
      }
      var Ve = (() => {
        return (
          ((he = Ve || (Ve = {}))[(he.NONE = 1)] = "NONE"),
          (he[(he.ROUTER = 2)] = "ROUTER"),
          (he[(he.STORE = 3)] = "STORE"),
          Ve
        );
        var he;
      })();
      let et = (() => {
        class he {
          constructor(ue, tt, ft, wt, ot, gt) {
            (this.store = ue),
              (this.router = tt),
              (this.serializer = ft),
              (this.errorHandler = wt),
              (this.config = ot),
              (this.activeRuntimeChecks = gt),
              (this.lastEvent = null),
              (this.routerState = null),
              (this.trigger = Ve.NONE),
              (this.stateKey = this.config.stateKey),
              !(0, o.rM)() &&
                (0, C.X6Q)() &&
                ((null == gt ? void 0 : gt.strictActionSerializability) ||
                  (null == gt ? void 0 : gt.strictStateSerializability)) &&
                this.serializer instanceof Pe &&
                console.warn(
                  "@ngrx/router-store: The serializability runtime checks cannot be enabled with the DefaultRouterStateSerializer. The default serializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer. This also applies to Ivy with immutability runtime checks."
                ),
              this.setUpStoreStateListener(),
              this.setUpRouterEventsListener();
          }
          static forRoot(ue = {}) {
            return {
              ngModule: he,
              providers: [
                { provide: Ge, useValue: ue },
                { provide: Se, useFactory: je, deps: [Ge] },
                {
                  provide: Je,
                  useClass: ue.serializer
                    ? ue.serializer
                    : 0 === ue.routerState
                    ? Pe
                    : He,
                },
              ],
            };
          }
          setUpStoreStateListener() {
            this.store
              .pipe((0, o.Ys)(this.stateKey), (0, B.M)(this.store))
              .subscribe(([ue, tt]) => {
                this.navigateIfNeeded(ue, tt);
              });
          }
          navigateIfNeeded(ue, tt) {
            if (
              !ue ||
              !ue.state ||
              this.trigger === Ve.ROUTER ||
              this.lastEvent instanceof F.OD
            )
              return;
            const ft = ue.state.url;
            (function Me(he, xe) {
              return ie(he) === ie(xe);
            })(this.router.url, ft) ||
              ((this.storeState = tt),
              (this.trigger = Ve.STORE),
              this.router.navigateByUrl(ft).catch((wt) => {
                this.errorHandler.handleError(wt);
              }));
          }
          setUpRouterEventsListener() {
            const ue = this.config.navigationActionTiming === Ze.PostActivation;
            let tt;
            this.router.events
              .pipe((0, B.M)(this.store))
              .subscribe(([ft, wt]) => {
                (this.lastEvent = ft),
                  ft instanceof F.OD
                    ? ((this.routerState = this.serializer.serialize(
                        this.router.routerState.snapshot
                      )),
                      this.trigger !== Ve.STORE &&
                        ((this.storeState = wt),
                        this.dispatchRouterRequest(ft)))
                    : ft instanceof F.R9
                    ? ((tt = ft),
                      !ue &&
                        this.trigger !== Ve.STORE &&
                        this.dispatchRouterNavigation(ft))
                    : ft instanceof F.gk
                    ? (this.dispatchRouterCancel(ft), this.reset())
                    : ft instanceof F.Q3
                    ? (this.dispatchRouterError(ft), this.reset())
                    : ft instanceof F.m2 &&
                      (this.trigger !== Ve.STORE &&
                        (ue && this.dispatchRouterNavigation(tt),
                        this.dispatchRouterNavigated(ft)),
                      this.reset());
              });
          }
          dispatchRouterRequest(ue) {
            this.dispatchRouterAction(U, { event: ue });
          }
          dispatchRouterNavigation(ue) {
            const tt = this.serializer.serialize(ue.state);
            this.dispatchRouterAction(W, {
              routerState: tt,
              event: new F.R9(ue.id, ue.url, ue.urlAfterRedirects, tt),
            });
          }
          dispatchRouterCancel(ue) {
            this.dispatchRouterAction(L, {
              storeState: this.storeState,
              event: ue,
            });
          }
          dispatchRouterError(ue) {
            this.dispatchRouterAction(Z, {
              storeState: this.storeState,
              event: new F.Q3(ue.id, ue.url, `${ue}`),
            });
          }
          dispatchRouterNavigated(ue) {
            const tt = this.serializer.serialize(
              this.router.routerState.snapshot
            );
            this.dispatchRouterAction(Oe, { event: ue, routerState: tt });
          }
          dispatchRouterAction(ue, tt) {
            this.trigger = Ve.ROUTER;
            try {
              this.store.dispatch({
                type: ue,
                payload: Object.assign(
                  Object.assign({ routerState: this.routerState }, tt),
                  {
                    event:
                      0 === this.config.routerState
                        ? tt.event
                        : {
                            id: tt.event.id,
                            url: tt.event.url,
                            urlAfterRedirects: tt.event.urlAfterRedirects,
                          },
                  }
                ),
              });
            } finally {
              this.trigger = Ve.NONE;
            }
          }
          reset() {
            (this.trigger = Ve.NONE),
              (this.storeState = null),
              (this.routerState = null);
          }
        }
        return (
          (he.ɵfac = function (ue) {
            return new (ue || he)(
              C.LFG(o.yh),
              C.LFG(F.F0),
              C.LFG(Je),
              C.LFG(C.qLn),
              C.LFG(Se),
              C.LFG(o.hg)
            );
          }),
          (he.ɵmod = C.oAB({ type: he })),
          (he.ɵinj = C.cJS({})),
          he
        );
      })();
      function ie(he) {
        return (null == he ? void 0 : he.length) > 0 &&
          "/" === he[he.length - 1]
          ? he.substring(0, he.length - 1)
          : he;
      }
    },
    9565: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        FT: () => StoreDevtoolsModule,
      });
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5e3),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5620),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(515),
        rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9751),
        rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9646),
        rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6451),
        rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(233),
        rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4707),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3099),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9300),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4004),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4351),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7414),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8372),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(262),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(5698),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(2722),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(3900),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(5684),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(5363),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(1365),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(5026);
      class StoreDevtoolsConfig {
        constructor() {
          this.maxAge = !1;
        }
      }
      const STORE_DEVTOOLS_CONFIG =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
            "@ngrx/store-devtools Options"
          ),
        INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          "@ngrx/store-devtools Initial Config"
        );
      function noMonitor() {
        return null;
      }
      const DEFAULT_NAME = "NgRx Store DevTools";
      function createConfig(le) {
        const j = {
            maxAge: !1,
            monitor: noMonitor,
            actionSanitizer: void 0,
            stateSanitizer: void 0,
            name: DEFAULT_NAME,
            serialize: !1,
            logOnly: !1,
            autoPause: !1,
            features: {
              pause: !0,
              lock: !0,
              persist: !0,
              export: !0,
              import: "custom",
              jump: !0,
              skip: !0,
              reorder: !0,
              dispatch: !0,
              test: !0,
            },
          },
          v = "function" == typeof le ? le() : le,
          F = Object.assign(
            {},
            j,
            {
              features:
                v.features ||
                (!!v.logOnly && { pause: !0, export: !0, test: !0 }) ||
                j.features,
            },
            v
          );
        if (F.maxAge && F.maxAge < 2)
          throw new Error(
            `Devtools 'maxAge' cannot be less than 2, got ${F.maxAge}`
          );
        return F;
      }
      const PERFORM_ACTION = "PERFORM_ACTION",
        REFRESH = "REFRESH",
        RESET = "RESET",
        ROLLBACK = "ROLLBACK",
        COMMIT = "COMMIT",
        SWEEP = "SWEEP",
        TOGGLE_ACTION = "TOGGLE_ACTION",
        SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE",
        JUMP_TO_STATE = "JUMP_TO_STATE",
        JUMP_TO_ACTION = "JUMP_TO_ACTION",
        IMPORT_STATE = "IMPORT_STATE",
        LOCK_CHANGES = "LOCK_CHANGES",
        PAUSE_RECORDING = "PAUSE_RECORDING";
      class PerformAction {
        constructor(j, v) {
          if (
            ((this.action = j),
            (this.timestamp = v),
            (this.type = PERFORM_ACTION),
            void 0 === j.type)
          )
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
        }
      }
      class Refresh {
        constructor() {
          this.type = REFRESH;
        }
      }
      class Reset {
        constructor(j) {
          (this.timestamp = j), (this.type = RESET);
        }
      }
      class Rollback {
        constructor(j) {
          (this.timestamp = j), (this.type = ROLLBACK);
        }
      }
      class Commit {
        constructor(j) {
          (this.timestamp = j), (this.type = COMMIT);
        }
      }
      class Sweep {
        constructor() {
          this.type = SWEEP;
        }
      }
      class ToggleAction {
        constructor(j) {
          (this.id = j), (this.type = TOGGLE_ACTION);
        }
      }
      class SetActionsActive {
        constructor(j, v, o = !0) {
          (this.start = j),
            (this.end = v),
            (this.active = o),
            (this.type = SET_ACTIONS_ACTIVE);
        }
      }
      class JumpToState {
        constructor(j) {
          (this.index = j), (this.type = JUMP_TO_STATE);
        }
      }
      class JumpToAction {
        constructor(j) {
          (this.actionId = j), (this.type = JUMP_TO_ACTION);
        }
      }
      class ImportState {
        constructor(j) {
          (this.nextLiftedState = j), (this.type = IMPORT_STATE);
        }
      }
      class LockChanges {
        constructor(j) {
          (this.status = j), (this.type = LOCK_CHANGES);
        }
      }
      class PauseRecording {
        constructor(j) {
          (this.status = j), (this.type = PAUSE_RECORDING);
        }
      }
      function difference(le, j) {
        return le.filter((v) => j.indexOf(v) < 0);
      }
      function unliftState(le) {
        const { computedStates: j, currentStateIndex: v } = le;
        if (v >= j.length) {
          const { state: C } = j[j.length - 1];
          return C;
        }
        const { state: o } = j[v];
        return o;
      }
      function unliftAction(le) {
        return le.actionsById[le.nextActionId - 1];
      }
      function liftAction(le) {
        return new PerformAction(le, +Date.now());
      }
      function sanitizeActions(le, j) {
        return Object.keys(j).reduce((v, o) => {
          const C = Number(o);
          return (v[C] = sanitizeAction(le, j[C], C)), v;
        }, {});
      }
      function sanitizeAction(le, j, v) {
        return Object.assign(Object.assign({}, j), { action: le(j.action, v) });
      }
      function sanitizeStates(le, j) {
        return j.map((v, o) => ({
          state: sanitizeState(le, v.state, o),
          error: v.error,
        }));
      }
      function sanitizeState(le, j, v) {
        return le(j, v);
      }
      function shouldFilterActions(le) {
        return le.predicate || le.actionsSafelist || le.actionsBlocklist;
      }
      function filterLiftedState(le, j, v, o) {
        const C = [],
          F = {},
          B = [];
        return (
          le.stagedActionIds.forEach((U, J) => {
            const W = le.actionsById[U];
            !W ||
              (J && isActionFiltered(le.computedStates[J], W, j, v, o)) ||
              ((F[U] = W), C.push(U), B.push(le.computedStates[J]));
          }),
          Object.assign(Object.assign({}, le), {
            stagedActionIds: C,
            actionsById: F,
            computedStates: B,
          })
        );
      }
      function isActionFiltered(le, j, v, o, C) {
        const F = v && !v(le, j.action),
          B =
            o && !j.action.type.match(o.map((J) => escapeRegExp(J)).join("|")),
          U = C && j.action.type.match(C.map((J) => escapeRegExp(J)).join("|"));
        return F || B || U;
      }
      function escapeRegExp(le) {
        return le.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      const INIT_ACTION = { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg },
        RECOMPUTE = "@ngrx/store-devtools/recompute",
        RECOMPUTE_ACTION = { type: RECOMPUTE };
      function computeNextEntry(le, j, v, o, C) {
        if (o)
          return { state: v, error: "Interrupted by an error up the chain" };
        let B,
          F = v;
        try {
          F = le(v, j);
        } catch (U) {
          (B = U.toString()), C.handleError(U);
        }
        return { state: F, error: B };
      }
      function recomputeStates(le, j, v, o, C, F, B, U, J) {
        if (j >= le.length && le.length === F.length) return le;
        const W = le.slice(0, j),
          Y = F.length - (J ? 1 : 0);
        for (let L = j; L < Y; L++) {
          const V = F[L],
            Z = C[V].action,
            $ = W[L - 1],
            Oe = $ ? $.state : o,
            Te = $ ? $.error : void 0,
            Je = B.indexOf(V) > -1 ? $ : computeNextEntry(v, Z, Oe, Te, U);
          W.push(Je);
        }
        return J && W.push(le[le.length - 1]), W;
      }
      function liftInitialState(le, j) {
        return {
          monitorState: j(void 0, {}),
          nextActionId: 1,
          actionsById: { 0: liftAction(INIT_ACTION) },
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: le,
          currentStateIndex: 0,
          computedStates: [],
          isLocked: !1,
          isPaused: !1,
        };
      }
      function liftReducerWith(le, j, v, o, C = {}) {
        return (F) => (B, U) => {
          let {
            monitorState: J,
            actionsById: W,
            nextActionId: Y,
            stagedActionIds: L,
            skippedActionIds: V,
            committedState: Z,
            currentStateIndex: $,
            computedStates: Oe,
            isLocked: Te,
            isPaused: Ae,
          } = B || j;
          function Je(Ze) {
            let Ge = Ze,
              Se = L.slice(1, Ge + 1);
            for (let oe = 0; oe < Se.length; oe++) {
              if (Oe[oe + 1].error) {
                (Ge = oe), (Se = L.slice(1, Ge + 1));
                break;
              }
              delete W[Se[oe]];
            }
            (V = V.filter((oe) => -1 === Se.indexOf(oe))),
              (L = [0, ...L.slice(Ge + 1)]),
              (Z = Oe[Ge].state),
              (Oe = Oe.slice(Ge)),
              ($ = $ > Ge ? $ - Ge : 0);
          }
          function Pe() {
            (W = { 0: liftAction(INIT_ACTION) }),
              (Y = 1),
              (L = [0]),
              (V = []),
              (Z = Oe[$].state),
              ($ = 0),
              (Oe = []);
          }
          B || (W = Object.create(W));
          let He = 0;
          switch (U.type) {
            case LOCK_CHANGES:
              (Te = U.status), (He = 1 / 0);
              break;
            case PAUSE_RECORDING:
              (Ae = U.status),
                Ae
                  ? ((L = [...L, Y]),
                    (W[Y] = new PerformAction(
                      { type: "@ngrx/devtools/pause" },
                      +Date.now()
                    )),
                    Y++,
                    (He = L.length - 1),
                    (Oe = Oe.concat(Oe[Oe.length - 1])),
                    $ === L.length - 2 && $++,
                    (He = 1 / 0))
                  : Pe();
              break;
            case RESET:
              (W = { 0: liftAction(INIT_ACTION) }),
                (Y = 1),
                (L = [0]),
                (V = []),
                (Z = le),
                ($ = 0),
                (Oe = []);
              break;
            case COMMIT:
              Pe();
              break;
            case ROLLBACK:
              (W = { 0: liftAction(INIT_ACTION) }),
                (Y = 1),
                (L = [0]),
                (V = []),
                ($ = 0),
                (Oe = []);
              break;
            case TOGGLE_ACTION: {
              const { id: Ze } = U;
              (V =
                -1 === V.indexOf(Ze)
                  ? [Ze, ...V]
                  : V.filter((Se) => Se !== Ze)),
                (He = L.indexOf(Ze));
              break;
            }
            case SET_ACTIONS_ACTIVE: {
              const { start: Ze, end: Ge, active: Se } = U,
                oe = [];
              for (let je = Ze; je < Ge; je++) oe.push(je);
              (V = Se ? difference(V, oe) : [...V, ...oe]),
                (He = L.indexOf(Ze));
              break;
            }
            case JUMP_TO_STATE:
              ($ = U.index), (He = 1 / 0);
              break;
            case JUMP_TO_ACTION: {
              const Ze = L.indexOf(U.actionId);
              -1 !== Ze && ($ = Ze), (He = 1 / 0);
              break;
            }
            case SWEEP:
              (L = difference(L, V)), (V = []), ($ = Math.min($, L.length - 1));
              break;
            case PERFORM_ACTION: {
              if (Te) return B || j;
              if (
                Ae ||
                (B &&
                  isActionFiltered(
                    B.computedStates[$],
                    U,
                    C.predicate,
                    C.actionsSafelist,
                    C.actionsBlocklist
                  ))
              ) {
                const Ge = Oe[Oe.length - 1];
                (Oe = [
                  ...Oe.slice(0, -1),
                  computeNextEntry(F, U.action, Ge.state, Ge.error, v),
                ]),
                  (He = 1 / 0);
                break;
              }
              C.maxAge && L.length === C.maxAge && Je(1),
                $ === L.length - 1 && $++;
              const Ze = Y++;
              (W[Ze] = U), (L = [...L, Ze]), (He = L.length - 1);
              break;
            }
            case IMPORT_STATE:
              ({
                monitorState: J,
                actionsById: W,
                nextActionId: Y,
                stagedActionIds: L,
                skippedActionIds: V,
                committedState: Z,
                currentStateIndex: $,
                computedStates: Oe,
                isLocked: Te,
                isPaused: Ae,
              } = U.nextLiftedState);
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:
              (He = 0),
                C.maxAge &&
                  L.length > C.maxAge &&
                  ((Oe = recomputeStates(Oe, He, F, Z, W, L, V, v, Ae)),
                  Je(L.length - C.maxAge),
                  (He = 1 / 0));
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:
              if (Oe.filter((Ge) => Ge.error).length > 0)
                (He = 0),
                  C.maxAge &&
                    L.length > C.maxAge &&
                    ((Oe = recomputeStates(Oe, He, F, Z, W, L, V, v, Ae)),
                    Je(L.length - C.maxAge),
                    (He = 1 / 0));
              else {
                if (!Ae && !Te) {
                  $ === L.length - 1 && $++;
                  const Ge = Y++;
                  (W[Ge] = new PerformAction(U, +Date.now())),
                    (L = [...L, Ge]),
                    (He = L.length - 1),
                    (Oe = recomputeStates(Oe, He, F, Z, W, L, V, v, Ae));
                }
                (Oe = Oe.map((Ge) =>
                  Object.assign(Object.assign({}, Ge), {
                    state: F(Ge.state, RECOMPUTE_ACTION),
                  })
                )),
                  ($ = L.length - 1),
                  C.maxAge && L.length > C.maxAge && Je(L.length - C.maxAge),
                  (He = 1 / 0);
              }
              break;
            default:
              He = 1 / 0;
          }
          return (
            (Oe = recomputeStates(Oe, He, F, Z, W, L, V, v, Ae)),
            (J = o(J, U)),
            {
              monitorState: J,
              actionsById: W,
              nextActionId: Y,
              stagedActionIds: L,
              skippedActionIds: V,
              committedState: Z,
              currentStateIndex: $,
              computedStates: Oe,
              isLocked: Te,
              isPaused: Ae,
            }
          );
        };
      }
      let DevtoolsDispatcher = (() => {
        class le extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO {}
        return (
          (le.ɵfac = (function () {
            let j;
            return function (o) {
              return (
                j || (j = _angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(le))
              )(o || le);
            };
          })()),
          (le.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
            token: le,
            factory: le.ɵfac,
          })),
          le
        );
      })();
      const ExtensionActionTypes = {
          START: "START",
          DISPATCH: "DISPATCH",
          STOP: "STOP",
          ACTION: "ACTION",
        },
        REDUX_DEVTOOLS_EXTENSION =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
            "@ngrx/store-devtools Redux Devtools Extension"
          );
      let DevtoolsExtension = (() => {
          class DevtoolsExtension {
            constructor(le, j, v) {
              (this.config = j),
                (this.dispatcher = v),
                (this.devtoolsExtension = le),
                this.createActionStreams();
            }
            notify(le, j) {
              if (this.devtoolsExtension)
                if (le.type === PERFORM_ACTION) {
                  if (j.isLocked || j.isPaused) return;
                  const v = unliftState(j);
                  if (
                    shouldFilterActions(this.config) &&
                    isActionFiltered(
                      v,
                      le,
                      this.config.predicate,
                      this.config.actionsSafelist,
                      this.config.actionsBlocklist
                    )
                  )
                    return;
                  const o = this.config.stateSanitizer
                      ? sanitizeState(
                          this.config.stateSanitizer,
                          v,
                          j.currentStateIndex
                        )
                      : v,
                    C = this.config.actionSanitizer
                      ? sanitizeAction(
                          this.config.actionSanitizer,
                          le,
                          j.nextActionId
                        )
                      : le;
                  this.sendToReduxDevtools(() =>
                    this.extensionConnection.send(C, o)
                  );
                } else {
                  const v = Object.assign(Object.assign({}, j), {
                    stagedActionIds: j.stagedActionIds,
                    actionsById: this.config.actionSanitizer
                      ? sanitizeActions(
                          this.config.actionSanitizer,
                          j.actionsById
                        )
                      : j.actionsById,
                    computedStates: this.config.stateSanitizer
                      ? sanitizeStates(
                          this.config.stateSanitizer,
                          j.computedStates
                        )
                      : j.computedStates,
                  });
                  this.sendToReduxDevtools(() =>
                    this.devtoolsExtension.send(
                      null,
                      v,
                      this.getExtensionConfig(this.config)
                    )
                  );
                }
            }
            createChangesObservable() {
              return this.devtoolsExtension
                ? new rxjs__WEBPACK_IMPORTED_MODULE_3__.y((le) => {
                    const j = this.devtoolsExtension.connect(
                      this.getExtensionConfig(this.config)
                    );
                    return (
                      (this.extensionConnection = j),
                      j.init(),
                      j.subscribe((v) => le.next(v)),
                      j.unsubscribe
                    );
                  })
                : rxjs__WEBPACK_IMPORTED_MODULE_2__.E;
            }
            createActionStreams() {
              const le = this.createChangesObservable().pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()
                ),
                j = le.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (U) => U.type === ExtensionActionTypes.START
                  )
                ),
                v = le.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (U) => U.type === ExtensionActionTypes.STOP
                  )
                ),
                o = le.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (U) => U.type === ExtensionActionTypes.DISPATCH
                  ),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((U) =>
                    this.unwrapAction(U.payload)
                  ),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)((U) =>
                    U.type === IMPORT_STATE
                      ? this.dispatcher.pipe(
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                            (J) =>
                              J.type ===
                              _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(
                            1e3
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(
                            1e3
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                            () => U
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(
                            () => (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(U)
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)
                        )
                      : (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(U)
                  )
                ),
                F = le
                  .pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                      (U) => U.type === ExtensionActionTypes.ACTION
                    ),
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((U) =>
                      this.unwrapAction(U.payload)
                    )
                  )
                  .pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(v)),
                B = o.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(v)
                );
              (this.start$ = j.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(v)
              )),
                (this.actions$ = this.start$.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => F)
                )),
                (this.liftedActions$ = this.start$.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => B)
                ));
            }
            unwrapAction(action) {
              return "string" == typeof action ? eval(`(${action})`) : action;
            }
            getExtensionConfig(le) {
              var j;
              const v = {
                name: le.name,
                features: le.features,
                serialize: le.serialize,
                autoPause: null !== (j = le.autoPause) && void 0 !== j && j,
              };
              return !1 !== le.maxAge && (v.maxAge = le.maxAge), v;
            }
            sendToReduxDevtools(le) {
              try {
                le();
              } catch (j) {
                console.warn(
                  "@ngrx/store-devtools: something went wrong inside the redux devtools",
                  j
                );
              }
            }
          }
          return (
            (DevtoolsExtension.ɵfac = function le(j) {
              return new (j || DevtoolsExtension)(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  REDUX_DEVTOOLS_EXTENSION
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  STORE_DEVTOOLS_CONFIG
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  DevtoolsDispatcher
                )
              );
            }),
            (DevtoolsExtension.ɵprov =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
                token: DevtoolsExtension,
                factory: DevtoolsExtension.ɵfac,
              })),
            DevtoolsExtension
          );
        })(),
        StoreDevtools = (() => {
          class le {
            constructor(v, o, C, F, B, U, J, W) {
              const Y = liftInitialState(J, W.monitor),
                L = liftReducerWith(J, Y, U, W.monitor, W),
                V = (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                  (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                    o
                      .asObservable()
                      .pipe(
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)
                      ),
                    F.actions$
                  ).pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                      liftAction
                    )
                  ),
                  v,
                  F.liftedActions$
                ).pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.Q)(
                    rxjs__WEBPACK_IMPORTED_MODULE_18__.N
                  )
                ),
                Z = C.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(L)
                ),
                $ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),
                Oe = V.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(Z),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(
                    ({ state: Pe }, [He, Ze]) => {
                      let Ge = Ze(Pe, He);
                      return (
                        He.type !== PERFORM_ACTION &&
                          shouldFilterActions(W) &&
                          (Ge = filterLiftedState(
                            Ge,
                            W.predicate,
                            W.actionsSafelist,
                            W.actionsBlocklist
                          )),
                        F.notify(He, Ge),
                        { state: Ge, action: He }
                      );
                    },
                    { state: Y, action: null }
                  )
                ).subscribe(({ state: Pe, action: He }) => {
                  $.next(Pe), He.type === PERFORM_ACTION && B.next(He.action);
                }),
                Te = F.start$.subscribe(() => {
                  this.refresh();
                }),
                Ae = $.asObservable(),
                Je = Ae.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                    unliftState
                  )
                );
              (this.extensionStartSubscription = Te),
                (this.stateSubscription = Oe),
                (this.dispatcher = v),
                (this.liftedState = Ae),
                (this.state = Je);
            }
            dispatch(v) {
              this.dispatcher.next(v);
            }
            next(v) {
              this.dispatcher.next(v);
            }
            error(v) {}
            complete() {}
            performAction(v) {
              this.dispatch(new PerformAction(v, +Date.now()));
            }
            refresh() {
              this.dispatch(new Refresh());
            }
            reset() {
              this.dispatch(new Reset(+Date.now()));
            }
            rollback() {
              this.dispatch(new Rollback(+Date.now()));
            }
            commit() {
              this.dispatch(new Commit(+Date.now()));
            }
            sweep() {
              this.dispatch(new Sweep());
            }
            toggleAction(v) {
              this.dispatch(new ToggleAction(v));
            }
            jumpToAction(v) {
              this.dispatch(new JumpToAction(v));
            }
            jumpToState(v) {
              this.dispatch(new JumpToState(v));
            }
            importState(v) {
              this.dispatch(new ImportState(v));
            }
            lockChanges(v) {
              this.dispatch(new LockChanges(v));
            }
            pauseRecording(v) {
              this.dispatch(new PauseRecording(v));
            }
          }
          return (
            (le.ɵfac = function (v) {
              return new (v || le)(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  DevtoolsDispatcher
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  DevtoolsExtension
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  STORE_DEVTOOLS_CONFIG
                )
              );
            }),
            (le.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
              token: le,
              factory: le.ɵfac,
            })),
            le
          );
        })();
      const IS_EXTENSION_OR_MONITOR_PRESENT =
        new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          "@ngrx/store-devtools Is Devtools Extension or Monitor Present"
        );
      function createIsExtensionOrMonitorPresent(le, j) {
        return Boolean(le) || j.monitor !== noMonitor;
      }
      function createReduxDevtoolsExtension() {
        const le = "__REDUX_DEVTOOLS_EXTENSION__";
        return "object" == typeof window && void 0 !== window[le]
          ? window[le]
          : null;
      }
      function createStateObservable(le) {
        return le.state;
      }
      let StoreDevtoolsModule = (() => {
        class le {
          static instrument(v = {}) {
            return {
              ngModule: le,
              providers: [
                DevtoolsExtension,
                DevtoolsDispatcher,
                StoreDevtools,
                { provide: INITIAL_OPTIONS, useValue: v },
                {
                  provide: IS_EXTENSION_OR_MONITOR_PRESENT,
                  deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
                  useFactory: createIsExtensionOrMonitorPresent,
                },
                {
                  provide: REDUX_DEVTOOLS_EXTENSION,
                  useFactory: createReduxDevtoolsExtension,
                },
                {
                  provide: STORE_DEVTOOLS_CONFIG,
                  deps: [INITIAL_OPTIONS],
                  useFactory: createConfig,
                },
                {
                  provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,
                  deps: [StoreDevtools],
                  useFactory: createStateObservable,
                },
                {
                  provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK,
                  useExisting: DevtoolsDispatcher,
                },
              ],
            };
          }
        }
        return (
          (le.ɵfac = function (v) {
            return new (v || le)();
          }),
          (le.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({
            type: le,
          })),
          (le.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({})),
          le
        );
      })();
    },
    5620: (le, j, v) => {
      v.d(j, {
        hg: () => Yt,
        UO: () => Ze,
        qg: () => He,
        Y6: () => je,
        mK: () => vn,
        n$: () => Nn,
        Y$: () => Zn,
        FR: () => Xn,
        yh: () => Hn,
        CK: () => Qn,
        Aw: () => sr,
        cr: () => nn,
        wb: () => qt,
        qC: () => Qt,
        PH: () => Te,
        ZF: () => ct,
        Lq: () => Cr,
        P1: () => de,
        rM: () => ee,
        on: () => Nr,
        Ky: () => Ae,
        Ys: () => _n,
      });
      var o = v(5e3),
        C = v(1135),
        F = v(9751),
        B = v(7579),
        U = v(233),
        J = v(4004),
        Y = v(5363),
        L = v(1365),
        V = v(5026),
        Z = v(1884);
      const $ = {};
      function Te(z, Re) {
        if ((($[z] = ($[z] || 0) + 1), "function" == typeof Re))
          return Pe(z, (...we) =>
            Object.assign(Object.assign({}, Re(...we)), { type: z })
          );
        switch (Re ? Re._as : "empty") {
          case "empty":
            return Pe(z, () => ({ type: z }));
          case "props":
            return Pe(z, (we) =>
              Object.assign(Object.assign({}, we), { type: z })
            );
          default:
            throw new Error("Unexpected config.");
        }
      }
      function Ae() {
        return { _as: "props", _p: void 0 };
      }
      function Pe(z, Re) {
        return Object.defineProperty(Re, "type", { value: z, writable: !1 });
      }
      const He = "@ngrx/store/init";
      let Ze = (() => {
        class z extends C.X {
          constructor() {
            super({ type: He });
          }
          next(me) {
            if ("function" == typeof me)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction()."
              );
            if (void 0 === me) throw new TypeError("Actions must be objects");
            if (void 0 === me.type)
              throw new TypeError("Actions must have a type property");
            super.next(me);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
        }
        return (
          (z.ɵfac = function (me) {
            return new (me || z)();
          }),
          (z.ɵprov = o.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const Ge = [Ze],
        Se = new o.OlP("@ngrx/store Internal Root Guard"),
        oe = new o.OlP("@ngrx/store Internal Initial State"),
        je = new o.OlP("@ngrx/store Initial State"),
        Ve = new o.OlP("@ngrx/store Reducer Factory"),
        et = new o.OlP("@ngrx/store Internal Reducer Factory Provider"),
        Me = new o.OlP("@ngrx/store Initial Reducers"),
        ie = new o.OlP("@ngrx/store Internal Initial Reducers"),
        ye = new o.OlP("@ngrx/store Store Features"),
        ge = new o.OlP("@ngrx/store Internal Store Reducers"),
        he = new o.OlP("@ngrx/store Internal Feature Reducers"),
        xe = new o.OlP("@ngrx/store Internal Feature Configs"),
        ue = new o.OlP("@ngrx/store Internal Store Features"),
        tt = new o.OlP("@ngrx/store Internal Feature Reducers Token"),
        ft = new o.OlP("@ngrx/store Feature Reducers"),
        wt = new o.OlP("@ngrx/store User Provided Meta Reducers"),
        ot = new o.OlP("@ngrx/store Meta Reducers"),
        gt = new o.OlP("@ngrx/store Internal Resolved Meta Reducers"),
        fn = new o.OlP("@ngrx/store User Runtime Checks Config"),
        Wt = new o.OlP("@ngrx/store Internal User Runtime Checks Config"),
        Yt = new o.OlP("@ngrx/store Internal Runtime Checks"),
        st = new o.OlP("@ngrx/store Check if Action types are unique");
      function kt(z, Re = {}) {
        const me = Object.keys(z),
          we = {};
        for (let Qe = 0; Qe < me.length; Qe++) {
          const Et = me[Qe];
          "function" == typeof z[Et] && (we[Et] = z[Et]);
        }
        const Ye = Object.keys(we);
        return function (Et, Dn) {
          Et = void 0 === Et ? Re : Et;
          let en = !1;
          const Zt = {};
          for (let Bt = 0; Bt < Ye.length; Bt++) {
            const bn = Ye[Bt],
              vr = Et[bn],
              Jn = (0, we[bn])(vr, Dn);
            (Zt[bn] = Jn), (en = en || Jn !== vr);
          }
          return en ? Zt : Et;
        };
      }
      function Qt(...z) {
        return function (Re) {
          if (0 === z.length) return Re;
          const me = z[z.length - 1];
          return z.slice(0, -1).reduceRight((Ye, Qe) => Qe(Ye), me(Re));
        };
      }
      function hn(z, Re) {
        return (
          Array.isArray(Re) &&
            Re.length > 0 &&
            (z = Qt.apply(null, [...Re, z])),
          (me, we) => {
            const Ye = z(me);
            return (Qe, Et) => Ye((Qe = void 0 === Qe ? we : Qe), Et);
          }
        );
      }
      class Nn extends F.y {}
      class vn extends Ze {}
      const qt = "@ngrx/store/update-reducers";
      let Bn = (() => {
        class z extends C.X {
          constructor(me, we, Ye, Qe) {
            super(Qe(Ye, we)),
              (this.dispatcher = me),
              (this.initialState = we),
              (this.reducers = Ye),
              (this.reducerFactory = Qe);
          }
          get currentReducers() {
            return this.reducers;
          }
          addFeature(me) {
            this.addFeatures([me]);
          }
          addFeatures(me) {
            const we = me.reduce(
              (
                Ye,
                {
                  reducers: Qe,
                  reducerFactory: Et,
                  metaReducers: Dn,
                  initialState: en,
                  key: Zt,
                }
              ) => {
                const Bt =
                  "function" == typeof Qe
                    ? (function An(z) {
                        const Re =
                          Array.isArray(z) && z.length > 0
                            ? Qt(...z)
                            : (me) => me;
                        return (me, we) => (
                          (me = Re(me)),
                          (Ye, Qe) => me((Ye = void 0 === Ye ? we : Ye), Qe)
                        );
                      })(Dn)(Qe, en)
                    : hn(Et, Dn)(Qe, en);
                return (Ye[Zt] = Bt), Ye;
              },
              {}
            );
            this.addReducers(we);
          }
          removeFeature(me) {
            this.removeFeatures([me]);
          }
          removeFeatures(me) {
            this.removeReducers(me.map((we) => we.key));
          }
          addReducer(me, we) {
            this.addReducers({ [me]: we });
          }
          addReducers(me) {
            (this.reducers = Object.assign(
              Object.assign({}, this.reducers),
              me
            )),
              this.updateReducers(Object.keys(me));
          }
          removeReducer(me) {
            this.removeReducers([me]);
          }
          removeReducers(me) {
            me.forEach((we) => {
              this.reducers = (function Ln(z, Re) {
                return Object.keys(z)
                  .filter((me) => me !== Re)
                  .reduce((me, we) => Object.assign(me, { [we]: z[we] }), {});
              })(this.reducers, we);
            }),
              this.updateReducers(me);
          }
          updateReducers(me) {
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              this.dispatcher.next({ type: qt, features: me });
          }
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (z.ɵfac = function (me) {
            return new (me || z)(o.LFG(vn), o.LFG(je), o.LFG(Me), o.LFG(Ve));
          }),
          (z.ɵprov = o.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const zn = [
        Bn,
        { provide: Nn, useExisting: Bn },
        { provide: vn, useExisting: Ze },
      ];
      let Zn = (() => {
        class z extends B.x {
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (z.ɵfac = (function () {
            let Re;
            return function (we) {
              return (Re || (Re = o.n5z(z)))(we || z);
            };
          })()),
          (z.ɵprov = o.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const St = [Zn];
      class Xn extends F.y {}
      let Cn = (() => {
        class z extends C.X {
          constructor(me, we, Ye, Qe) {
            super(Qe);
            const Zt = me
              .pipe((0, Y.Q)(U.N))
              .pipe((0, L.M)(we))
              .pipe((0, V.R)(wn, { state: Qe }));
            this.stateSubscription = Zt.subscribe(
              ({ state: Bt, action: bn }) => {
                this.next(Bt), Ye.next(bn);
              }
            );
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
        }
        return (
          (z.INIT = He),
          (z.ɵfac = function (me) {
            return new (me || z)(o.LFG(Ze), o.LFG(Nn), o.LFG(Zn), o.LFG(je));
          }),
          (z.ɵprov = o.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      function wn(z = { state: void 0 }, [Re, me]) {
        const { state: we } = z;
        return { state: me(we, Re), action: Re };
      }
      const In = [Cn, { provide: Xn, useExisting: Cn }];
      let Hn = (() => {
        class z extends F.y {
          constructor(me, we, Ye) {
            super(),
              (this.actionsObserver = we),
              (this.reducerManager = Ye),
              (this.source = me);
          }
          select(me, ...we) {
            return _n.call(null, me, ...we)(this);
          }
          lift(me) {
            const we = new z(this, this.actionsObserver, this.reducerManager);
            return (we.operator = me), we;
          }
          dispatch(me) {
            this.actionsObserver.next(me);
          }
          next(me) {
            this.actionsObserver.next(me);
          }
          error(me) {
            this.actionsObserver.error(me);
          }
          complete() {
            this.actionsObserver.complete();
          }
          addReducer(me, we) {
            this.reducerManager.addReducer(me, we);
          }
          removeReducer(me) {
            this.reducerManager.removeReducer(me);
          }
        }
        return (
          (z.ɵfac = function (me) {
            return new (me || z)(o.LFG(Xn), o.LFG(Ze), o.LFG(Bn));
          }),
          (z.ɵprov = o.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const jn = [Hn];
      function _n(z, Re, ...me) {
        return function (Ye) {
          let Qe;
          if ("string" == typeof z) {
            const Et = [Re, ...me].filter(Boolean);
            Qe = Ye.pipe(
              (function W(...z) {
                const Re = z.length;
                if (0 === Re)
                  throw new Error("list of properties cannot be empty.");
                return (0, J.U)((me) => {
                  let we = me;
                  for (let Ye = 0; Ye < Re; Ye++) {
                    const Qe = null == we ? void 0 : we[z[Ye]];
                    if (void 0 === Qe) return;
                    we = Qe;
                  }
                  return we;
                });
              })(z, ...Et)
            );
          } else {
            if ("function" != typeof z)
              throw new TypeError(
                `Unexpected type '${typeof z}' in select operator, expected 'string' or 'function'`
              );
            Qe = Ye.pipe((0, J.U)((Et) => z(Et, Re)));
          }
          return Qe.pipe((0, Z.x)());
        };
      }
      const Sn = "https://ngrx.io/guide/store/configuration/runtime-checks";
      function at(z) {
        return void 0 === z;
      }
      function Ct(z) {
        return null === z;
      }
      function mt(z) {
        return Array.isArray(z);
      }
      function De(z) {
        return "object" == typeof z && null !== z;
      }
      function I(z) {
        return "function" == typeof z;
      }
      function ee() {
        return false;
      }
      function Ke(z, Re) {
        return z === Re;
      }
      function ve(z, Re, me) {
        for (let we = 0; we < z.length; we++) if (!me(z[we], Re[we])) return !0;
        return !1;
      }
      function K(z, Re = Ke, me = Ke) {
        let Qe,
          we = null,
          Ye = null;
        return {
          memoized: function Zt() {
            if (void 0 !== Qe) return Qe.result;
            if (!we)
              return (Ye = z.apply(null, arguments)), (we = arguments), Ye;
            if (!ve(arguments, we, Re)) return Ye;
            const Bt = z.apply(null, arguments);
            return (we = arguments), me(Ye, Bt) ? Ye : ((Ye = Bt), Bt);
          },
          reset: function Et() {
            (we = null), (Ye = null);
          },
          setResult: function Dn(Bt) {
            Qe = { result: Bt };
          },
          clearResult: function en() {
            Qe = void 0;
          },
        };
      }
      function de(...z) {
        return (function ze(z, Re = { stateFn: Ne }) {
          return function (...me) {
            let we = me;
            if (Array.isArray(we[0])) {
              const [Bt, ...bn] = we;
              we = [...Bt, ...bn];
            }
            const Ye = we.slice(0, we.length - 1),
              Qe = we[we.length - 1],
              Et = Ye.filter(
                (Bt) => Bt.release && "function" == typeof Bt.release
              ),
              Dn = z(function (...Bt) {
                return Qe.apply(null, Bt);
              }),
              en = K(function (Bt, bn) {
                return Re.stateFn.apply(null, [Bt, Ye, bn, Dn]);
              });
            return Object.assign(en.memoized, {
              release: function Zt() {
                en.reset(), Dn.reset(), Et.forEach((Bt) => Bt.release());
              },
              projector: Dn.memoized,
              setResult: en.setResult,
              clearResult: en.clearResult,
            });
          };
        })(K)(...z);
      }
      function Ne(z, Re, me, we) {
        if (void 0 === me) {
          const Qe = Re.map((Et) => Et(z));
          return we.memoized.apply(null, Qe);
        }
        const Ye = Re.map((Qe) => Qe(z, me));
        return we.memoized.apply(null, [...Ye, me]);
      }
      function ct(z) {
        return de(
          (Re) => {
            const me = Re[z];
            return (
              (0, o.X6Q)() &&
                !(z in Re) &&
                console.warn(
                  `@ngrx/store: The feature name "${z}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${z}', ...) or StoreModule.forFeature('${z}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`
                ),
              me
            );
          },
          (Re) => Re
        );
      }
      function ae(z) {
        Object.freeze(z);
        const Re = I(z);
        return (
          Object.getOwnPropertyNames(z).forEach((me) => {
            if (
              !me.startsWith("\u0275") &&
              (function pe(z, Re) {
                return Object.prototype.hasOwnProperty.call(z, Re);
              })(z, me) &&
              (!Re ||
                ("caller" !== me && "callee" !== me && "arguments" !== me))
            ) {
              const we = z[me];
              (De(we) || I(we)) && !Object.isFrozen(we) && ae(we);
            }
          }),
          z
        );
      }
      function rt(z, Re = []) {
        return (at(z) || Ct(z)) && 0 === Re.length
          ? { path: ["root"], value: z }
          : Object.keys(z).reduce((we, Ye) => {
              if (we) return we;
              const Qe = z[Ye];
              return (function se(z) {
                return I(z) && z.hasOwnProperty("\u0275cmp");
              })(Qe)
                ? we
                : !(
                    at(Qe) ||
                    Ct(Qe) ||
                    (function jt(z) {
                      return "number" == typeof z;
                    })(Qe) ||
                    (function Wn(z) {
                      return "boolean" == typeof z;
                    })(Qe) ||
                    (function $n(z) {
                      return "string" == typeof z;
                    })(Qe) ||
                    mt(Qe)
                  ) &&
                    ((function M(z) {
                      if (
                        !(function be(z) {
                          return De(z) && !mt(z);
                        })(z)
                      )
                        return !1;
                      const Re = Object.getPrototypeOf(z);
                      return Re === Object.prototype || null === Re;
                    })(Qe)
                      ? rt(Qe, [...Re, Ye])
                      : { path: [...Re, Ye], value: Qe });
            }, !1);
      }
      function _t(z, Re) {
        if (!1 === z) return;
        const me = z.path.join("."),
          we = new Error(
            `Detected unserializable ${Re} at "${me}". ${Sn}#strict${Re}serializability`
          );
        throw ((we.value = z.value), (we.unserializablePath = me), we);
      }
      function $t(z) {
        return (0, o.X6Q)()
          ? Object.assign(
              {
                strictStateSerializability: !1,
                strictActionSerializability: !1,
                strictStateImmutability: !0,
                strictActionImmutability: !0,
                strictActionWithinNgZone: !1,
                strictActionTypeUniqueness: !1,
              },
              z
            )
          : {
              strictStateSerializability: !1,
              strictActionSerializability: !1,
              strictStateImmutability: !1,
              strictActionImmutability: !1,
              strictActionWithinNgZone: !1,
              strictActionTypeUniqueness: !1,
            };
      }
      function Mn({
        strictActionSerializability: z,
        strictStateSerializability: Re,
      }) {
        return (me) =>
          z || Re
            ? (function Le(z, Re) {
                return function (me, we) {
                  Re.action(we) && _t(rt(we), "action");
                  const Ye = z(me, we);
                  return Re.state() && _t(rt(Ye), "state"), Ye;
                };
              })(me, { action: (we) => z && !pn(we), state: () => Re })
            : me;
      }
      function an({
        strictActionImmutability: z,
        strictStateImmutability: Re,
      }) {
        return (me) =>
          z || Re
            ? (function R(z, Re) {
                return function (me, we) {
                  const Ye = Re.action(we) ? ae(we) : we,
                    Qe = z(me, Ye);
                  return Re.state() ? ae(Qe) : Qe;
                };
              })(me, { action: (we) => z && !pn(we), state: () => Re })
            : me;
      }
      function pn(z) {
        return z.type.startsWith("@ngrx");
      }
      function En({ strictActionWithinNgZone: z }) {
        return (Re) =>
          z
            ? (function ht(z, Re) {
                return function (me, we) {
                  if (Re.action(we) && !o.R0b.isInAngularZone())
                    throw new Error(
                      `Action '${we.type}' running outside NgZone. ${Sn}#strictactionwithinngzone`
                    );
                  return z(me, we);
                };
              })(Re, { action: (me) => z && !pn(me) })
            : Re;
      }
      function ur(z) {
        return [
          { provide: Wt, useValue: z },
          { provide: fn, useFactory: it, deps: [Wt] },
          { provide: Yt, deps: [fn], useFactory: $t },
          { provide: ot, multi: !0, deps: [Yt], useFactory: an },
          { provide: ot, multi: !0, deps: [Yt], useFactory: Mn },
          { provide: ot, multi: !0, deps: [Yt], useFactory: En },
        ];
      }
      function Yn() {
        return [{ provide: st, multi: !0, deps: [Yt], useFactory: Lt }];
      }
      function it(z) {
        return z;
      }
      function Lt(z) {
        if (!z.strictActionTypeUniqueness) return;
        const Re = Object.entries($)
          .filter(([, me]) => me > 1)
          .map(([me]) => me);
        if (Re.length)
          throw new Error(
            `Action types are registered more than once, ${Re.map(
              (me) => `"${me}"`
            ).join(", ")}. ${Sn}#strictactiontypeuniqueness`
          );
      }
      let nn = (() => {
          class z {
            constructor(me, we, Ye, Qe, Et, Dn) {}
          }
          return (
            (z.ɵfac = function (me) {
              return new (me || z)(
                o.LFG(Ze),
                o.LFG(Nn),
                o.LFG(Zn),
                o.LFG(Hn),
                o.LFG(Se, 8),
                o.LFG(st, 8)
              );
            }),
            (z.ɵmod = o.oAB({ type: z })),
            (z.ɵinj = o.cJS({})),
            z
          );
        })(),
        Qn = (() => {
          class z {
            constructor(me, we, Ye, Qe, Et) {
              (this.features = me),
                (this.featureReducers = we),
                (this.reducerManager = Ye);
              const Dn = me.map((en, Zt) => {
                const bn = we.shift()[Zt];
                return Object.assign(Object.assign({}, en), {
                  reducers: bn,
                  initialState: or(en.initialState),
                });
              });
              Ye.addFeatures(Dn);
            }
            ngOnDestroy() {
              this.reducerManager.removeFeatures(this.features);
            }
          }
          return (
            (z.ɵfac = function (me) {
              return new (me || z)(
                o.LFG(ue),
                o.LFG(ft),
                o.LFG(Bn),
                o.LFG(nn),
                o.LFG(st, 8)
              );
            }),
            (z.ɵmod = o.oAB({ type: z })),
            (z.ɵinj = o.cJS({})),
            z
          );
        })(),
        sr = (() => {
          class z {
            static forRoot(me, we = {}) {
              return {
                ngModule: nn,
                providers: [
                  {
                    provide: Se,
                    useFactory: Nt,
                    deps: [[Hn, new o.FiY(), new o.tp0()]],
                  },
                  { provide: oe, useValue: we.initialState },
                  { provide: je, useFactory: or, deps: [oe] },
                  { provide: ie, useValue: me },
                  { provide: ge, useExisting: me instanceof o.OlP ? me : ie },
                  {
                    provide: Me,
                    deps: [o.zs3, ie, [new o.tBr(ge)]],
                    useFactory: Rn,
                  },
                  {
                    provide: wt,
                    useValue: we.metaReducers ? we.metaReducers : [],
                  },
                  { provide: gt, deps: [ot, wt], useFactory: dr },
                  {
                    provide: et,
                    useValue: we.reducerFactory ? we.reducerFactory : kt,
                  },
                  { provide: Ve, deps: [et, gt], useFactory: hn },
                  Ge,
                  zn,
                  St,
                  In,
                  jn,
                  ur(we.runtimeChecks),
                  Yn(),
                ],
              };
            }
            static forFeature(me, we, Ye = {}) {
              return {
                ngModule: Qn,
                providers: [
                  {
                    provide: xe,
                    multi: !0,
                    useValue: me instanceof Object ? {} : Ye,
                  },
                  {
                    provide: ye,
                    multi: !0,
                    useValue: {
                      key: me instanceof Object ? me.name : me,
                      reducerFactory:
                        Ye instanceof o.OlP || !Ye.reducerFactory
                          ? kt
                          : Ye.reducerFactory,
                      metaReducers:
                        Ye instanceof o.OlP || !Ye.metaReducers
                          ? []
                          : Ye.metaReducers,
                      initialState:
                        Ye instanceof o.OlP || !Ye.initialState
                          ? void 0
                          : Ye.initialState,
                    },
                  },
                  { provide: ue, deps: [o.zs3, xe, ye], useFactory: cr },
                  {
                    provide: he,
                    multi: !0,
                    useValue: me instanceof Object ? me.reducer : we,
                  },
                  {
                    provide: tt,
                    multi: !0,
                    useExisting: we instanceof o.OlP ? we : he,
                  },
                  {
                    provide: ft,
                    multi: !0,
                    deps: [o.zs3, he, [new o.tBr(tt)]],
                    useFactory: ln,
                  },
                  Yn(),
                ],
              };
            }
          }
          return (
            (z.ɵfac = function (me) {
              return new (me || z)();
            }),
            (z.ɵmod = o.oAB({ type: z })),
            (z.ɵinj = o.cJS({})),
            z
          );
        })();
      function Rn(z, Re) {
        return Re instanceof o.OlP ? z.get(Re) : Re;
      }
      function cr(z, Re, me) {
        return me.map((we, Ye) => {
          if (Re[Ye] instanceof o.OlP) {
            const Qe = z.get(Re[Ye]);
            return {
              key: we.key,
              reducerFactory: Qe.reducerFactory ? Qe.reducerFactory : kt,
              metaReducers: Qe.metaReducers ? Qe.metaReducers : [],
              initialState: Qe.initialState,
            };
          }
          return we;
        });
      }
      function ln(z, Re) {
        return Re.map((we) => (we instanceof o.OlP ? z.get(we) : we));
      }
      function or(z) {
        return "function" == typeof z ? z() : z;
      }
      function dr(z, Re) {
        return z.concat(Re);
      }
      function Nt(z) {
        if (z)
          throw new TypeError(
            "StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead."
          );
        return "guarded";
      }
      function Nr(...z) {
        return { reducer: z.pop(), types: z.map((we) => we.type) };
      }
      function Cr(z, ...Re) {
        const me = new Map();
        for (const we of Re)
          for (const Ye of we.types) {
            const Qe = me.get(Ye);
            me.set(
              Ye,
              Qe ? (Dn, en) => we.reducer(Qe(Dn, en), en) : we.reducer
            );
          }
        return function (we = z, Ye) {
          const Qe = me.get(Ye.type);
          return Qe ? Qe(we, Ye) : we;
        };
      }
    },
  },
  (le) => {
    le((le.s = 73));
  },
]);
